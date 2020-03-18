import React from 'react';

import Mask from '@lxjx/fr/lib/mask';
import Icon from '@lxjx/fr/lib/icon';
import { If } from '@lxjx/fr/lib/fork';
import { Transition } from '@lxjx/react-transition-spring';

import _capitalize from 'lodash/capitalize';
import cls from 'classnames';

import { DrawerProps } from './type';
import { useSame } from '@lxjx/hooks';

const zIndex = 1400;

const Drawer: React.FC<DrawerProps> = ({
  show = true,
  onClose,
  onRemove,
  hasCloseIcon = false,
  direction = 'bottom',
  fullScreen = false,
  inside = false,
  children,
  className,
  style,
  namespace,
  ...props
}) => {
  const [cIndex, instances, instanceId] = useSame('fr_drawer_metas', show, {
    direction,
  });

  const nowZIndex = cIndex === -1 ? zIndex : cIndex + zIndex;

  // 获取direction相同的实例
  const sameInstances = instances.filter(item => item.meta.direction === direction);
  // 当前在sameInstances实例中的位置
  const nowCIndex = sameInstances.findIndex(item => item.id === instanceId);
  // 当前实例之后有多少个实例 (总实例数 - 当前实例索引 + 1)
  const afterInstanceLength = sameInstances.length - (nowCIndex + 1);

  // 当存在多个drawer时，前一个相对于后一个偏移60px, 不适用于全屏模式
  const offsetStyle = fullScreen ? {} : { [direction]: show ? afterInstanceLength * 60 : 0 };

  function close() {
    onClose && onClose();
  }

  function render() {
    return (
      <Mask
        namespace={namespace}
        show={show}
        visible={cIndex === 0}
        style={{ zIndex: nowZIndex }}
        onClose={close}
        onRemove={onRemove}
        portal={!inside}
        dark
        className={cls('fr-drawer_mask', { __inside: inside })}
      >
        <Transition
          {...props}
          className={cls(
            'fr-drawer',
            direction && !fullScreen && `__${direction}`,
            {
              '__full-screen': fullScreen,
              __inside: inside,
            },
            className,
          )}
          style={{ ...offsetStyle, boxShadow: show ? '' : 'none', ...style }}
          type={`slide${_capitalize(direction)}` as any}
          toggle={show}
          alpha={false}
          mountOnEnter
          reset
        >
          <If when={hasCloseIcon || fullScreen}>
            <Icon className="fr-drawer_close" type="error" onClick={close} />
          </If>
          {children}
        </Transition>
      </Mask>
    );
  }

  return render();
};

export default Drawer;
