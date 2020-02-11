import React, { useEffect, useRef } from 'react';
import { useLockBodyScroll, useSelf } from '@lxjx/hooks';
import { useDrag } from 'react-use-gesture';
import { useSetState, useToggle, useUpdateEffect } from 'react-use';
import cls from 'classnames';

import Carousel, { CarouselRef } from '@lxjx/flicker/lib/carousel';
import Viewer, { ViewerRef } from '@lxjx/flicker/lib/viewer';
import { If } from '@lxjx/flicker/lib/fork';
import Icon from '@lxjx/flicker/lib/icon';

import createRenderApi, { ReactRenderApiProps } from '@lxjx/react-render-api';
import { Transition } from '@lxjx/react-transition-spring';
import Portal from '@lxjx/flicker/lib/portal';
import { stopPropagation } from '@lxjx/flicker/lib/util';

export interface ImagePreviewProps extends ReactRenderApiProps {
  /** 图片数据 */
  images?: { img: string; desc?: string }[];
  /** 初始页码，组件创建后页码会由组件内部管理，当page值改变时会同步到组件内部 */
  page?: number;
}

const disabledDrag = (event: React.DragEvent) => event.preventDefault();

const _ImagePreview: React.FC<ImagePreviewProps> = ({
  page = 0,
  images = [],
  show,
  onClose,
  onRemove,
  namespace,
}) => {
  const carousel = useRef<CarouselRef>(null!);

  /* 锁定滚动条 + 防止页面抖动 */
  const [lock, toggleLock] = useToggle(!!show);
  useLockBodyScroll(lock);
  useUpdateEffect(function removeInstance() {
    if (show) toggleLock(true);
    if (!show) {
      setTimeout(() => {
        toggleLock(false);
      }, 300);
    }
    // eslint-disable-next-line
  }, [show]);

  const self = useSelf<{
    viewers: {
      [key: string]: ViewerRef;
    };
    currentPage: number;
  }>({
    /** 存每一个Viewer的实例 */
    viewers: {},
    currentPage: page,
  });

  const [state, setState] = useSetState({
    disabledPrev: false,
    disabledNext: false,
    zoomIn: false,
    zoomOut: false,
  });

  useEffect(function removeInstance() {
    if (!show) {
      setTimeout(onRemove!, 800);
    }
    // eslint-disable-next-line
  }, [show]);

  useEffect(function initPageChange() {
    carousel.current && carousel.current.goTo(page, true);
  }, [page]);

  const bindDrag = useDrag(({ time, first, last, memo, movement: [x], direction: [direct] }) => {
    if (last && memo) {
      const isPrev = direct > 0;
      const distanceOver = Math.abs(x) > window.innerWidth / 2; // 滑动距离超过半屏
      const timeOver = time! - memo < 220; // 220ms内

      if (timeOver && distanceOver) {
        isPrev ? prev() : next();
      }

      return undefined;
    }

    if (first) {
      return time;
    }
  });

  function prev() {
    carousel.current.prev();
    calcDisabled();
  }

  function next() {
    carousel.current.next();
    calcDisabled();
  }

  /** 设置旋转 type: 为true时加 否则减 */
  function rotate(type: boolean) {
    const { setRotate } = getCurrentViewer();
    // console.log(instance);
    setRotate(type ? 45 : -45);
  }

  /** 设置缩放 type: 为true时加 否则减 */
  function scale(type: boolean) {
    const { instance, setScale } = getCurrentViewer();
    const diff = type ? 0.5 : -0.5;
    setScale(instance.scale + diff);
    calcDisabled();
  }

  function resetViewer() {
    const { reset } = getCurrentViewer();
    reset();
  }

  function close() {
    onClose && onClose();
  }

  function onChange(currentPage: number, first?: boolean) {
    const cViewer = getCurrentViewer();
    if (!cViewer || first) return;
    cViewer.reset();
    self.currentPage = currentPage;
  }

  function getCurrentViewer() {
    return self.viewers[self.currentPage];
  }

  /** 根据当前值设置按钮的禁用状态 */
  function calcDisabled() {
    const { instance } = getCurrentViewer();
    setState({
      disabledPrev: self.currentPage === 0,
      disabledNext: self.currentPage === images.length - 1,
      zoomIn: instance.scale >= 3,
      zoomOut: instance.scale <= 0.5,
    });
  }

  return (
    <Portal namespace={namespace}>
      <Transition
        type="fade"
        toggle={show && images.length > 0}
        mountOnEnter
        className="fr-image-preview"
        {...bindDrag()}
        onDoubleClick={close}
      >
        <Carousel
          ref={carousel}
          initPage={page}
          wheel={false}
          drag={false}
          loop={false}
          onChange={onChange}
        >
          {images.map((item, key) => (
            <div key={key} className="fr-image-preview_img-wrap">
              <Viewer ref={viewer => (self.viewers[key] = viewer!)}>
                <img {...stopPropagation} onDragStart={disabledDrag} src={item.img} alt="图片加载失败" className="fr-image-preview_img" />
              </Viewer>
            </div>
          ))}
        </Carousel>
        <div className="fr-image-preview_ctrl-bar" onDoubleClick={stopPropagation.onClick}>
          <If when={images.length > 1}>
            <span className={cls({ __disabled: state.disabledPrev })} title="上一张" onClick={() => prev()}><Icon type="left" /></span>
          </If>
          <span title="左旋转" onClick={() => rotate(false)}><Icon type="undo" /></span>
          <span title="右旋转" onClick={() => rotate(true)}><Icon type="redo" /></span>
          <span className={cls({ __disabled: state.zoomIn })} title="放大" onClick={() => scale(true)}><Icon type="zoomIn" /></span>
          <span className={cls({ __disabled: state.zoomOut })} title="缩小" onClick={() => scale(false)}><Icon type="zoomOut" /></span>
          <span title="重置" onClick={() => resetViewer()}><Icon type="sync" /></span>
          <If when={images.length > 1}>
            <span className={cls({ __disabled: state.disabledNext })} title="下一张" onClick={() => next()}><Icon type="right" /></span>
          </If>
          <span title="关闭" onClick={close}><Icon type="error" /></span>
        </div>
      </Transition>
    </Portal>
  );
};

const api = createRenderApi<ImagePreviewProps>(_ImagePreview, {
  namespace: 'IMAGE_PREVIEW',
});

type ImagePreview = typeof _ImagePreview;

interface ImagePreviewWithApi extends ImagePreview {
  api: typeof api;
}

const ImagePreview: ImagePreviewWithApi = Object.assign(_ImagePreview, {
  api,
});

export default ImagePreview;