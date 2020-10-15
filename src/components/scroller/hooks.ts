import { useEffect } from 'react';
import { useGesture } from 'react-use-gesture';
import { SetDragPosArg, Share } from './type';
import { useMethods } from './methods';

export function useHooks(methods: ReturnType<typeof useMethods>, share: Share) {
  const { setState, sHelper, self, rootEl, setSp } = share;

  // 获取滚动条宽度
  useEffect(methods.getScrollWidth, []);

  // 初始化滚动标识
  useEffect(methods.refreshScrollFlag, []);

  // touch事件监测
  useEffect(() => {
    if ('ontouchstart' in window) {
      setState({
        hasTouch: true,
      });
    }
  }, []);

  // Drag事件处理
  const bind = useGesture(
    {
      onDrag({ event, direction: [dx, dy], delta: [dex, dey], down, cancel, last }) {
        const sMeta = sHelper.get();

        const yPrevent = (dy > 0 && sMeta.touchTop) || (dy < 0 && sMeta.touchBottom);
        const xPrevent = (dx > 0 && sMeta.touchLeft) || (dx < 0 && sMeta.touchRight);

        /* 触边拖动时禁用默认事件 */
        if (yPrevent || xPrevent) {
          if (event) {
            event.cancelable && event.preventDefault();
          }
        }

        const preventDefaultUp = methods.pullDownHandler({ down });

        /* 松开时，还原位置 */
        if (!down) {
          // cancel!();

          if (preventDefaultUp) return;

          self.memoX = 0;
          self.memoY = 0;

          setSp({
            y: self.memoY,
            x: self.memoX,
          });

          return;
        }

        /* 根据拖动信息设置元素位置 */
        const dragPosArg: SetDragPosArg = {
          dey,
          dex,
          touchBottom: sMeta.touchBottom,
          touchLeft: sMeta.touchLeft,
          touchRight: sMeta.touchRight,
          touchTop: sMeta.touchTop,
        };

        if (sMeta.touchTop || sMeta.touchBottom) {
          methods.setDragPos({ isVertical: true, ...dragPosArg });
        }

        if (sMeta.touchLeft || sMeta.touchRight) {
          methods.setDragPos(dragPosArg);
        }
      },
    },
    {
      domTarget: rootEl,
      eventOptions: { passive: false },
      drag: {
        lockDirection: true,
        filterTaps: true,
      },
    },
  );

  useEffect(bind as any, [bind]);
}
