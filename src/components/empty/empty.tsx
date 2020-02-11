import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@lxjx/flicker/lib/icon';
import config from '@lxjx/flicker/lib/config';

import cls from 'classnames';

import { EmptyProps } from './type';

/* 为指定的ReactElement注入fr-empty_icon类 */
function injectIconClassName(el?: React.ReactElement) {
  if (!el) return null;
  return React.cloneElement(el, { className: cls('fr-empty_icon', el.props.className) });
}

const Empty: React.FC<EmptyProps> = ({
  desc,
  children,
  size,
  emptyNode,
  ...props
}) => {
  const { emptyNode: globalEmptyNode } = config.useConfig();

  return (
    <div className={cls('fr-empty', size && `__${size}`, props.className)} {...props}>
      {
        injectIconClassName(emptyNode)
        || injectIconClassName(globalEmptyNode)
        || (<Icon.SvgIcon className="fr-empty_icon" type="empty" />)
      }
      <div className="fr-empty_desc">{desc}</div>
      <div className="fr-empty_actions">{children}</div>
    </div>
  );
};

Empty.propTypes = {
  desc: PropTypes.node,
  children: PropTypes.node,
  size: PropTypes.oneOf(['small', 'large']),
};

export default Empty;