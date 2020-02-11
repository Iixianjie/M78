import React, { useEffect, useState } from 'react';

import cls from 'classnames';

export interface MaskProps extends React.PropsWithoutRef<JSX.IntrinsicElements['div']> {
  /** 1 | 最大行数 */
  line?: number;
  /** 兼容模式时默认适合亮色主题，通过此项设置为暗色 */
  dark?: boolean;
  /** 强制启用兼容模式 */
  forceCompat?: boolean;
  /** 禁用 */
  disabled?: boolean;
}

function getStyle(obj: HTMLElement, attr: keyof CSSStyleDeclaration) {
  if (!obj) return;
  // @ts-ignore
  if (!obj.currentStyle && !window.getComputedStyle) return null;
  // @ts-ignore currentStyle非标准属性
  return obj.currentStyle ? obj.currentStyle[attr] : window.getComputedStyle(obj)[attr];
}

function multiLine(line: number) {
  return {
    WebkitLineClamp: line,
    WebkitBoxOrient: 'vertical',
    display: '-webkit-box',
  } as const;
}

const Ellipsis: React.FC<MaskProps> = ({
  line = 1,
  dark,
  forceCompat = false,
  disabled = false,
  className,
  style,
  children,
}) => {
  const el = React.useRef<HTMLDivElement>(null!);
  const [state, setState] = useState({
    height: '',
    oneHeight: 0,
    supportLineClamp: 'webkitLineClamp' in document.body.style,
  });
  /* 不支持LineClamp 且大于1行; 传force时强制开启 */
  const shouldAddShadow = (!state.supportLineClamp && line > 1) || forceCompat;
  /* 非shouldAddShadow且大于1行启用多行省略 */
  const extraStyle = (!shouldAddShadow && line > 1) ? multiLine(line) : {};

  useEffect(() => {
    if (!shouldAddShadow) return;
    addShadowBlock();
    // eslint-disable-next-line
  }, [shouldAddShadow]);

  function addShadowBlock() {
    const lineHeight = getStyle(el.current, 'lineHeight');
    let calcHeight = `${line}em`; // 不兼容时使用em进行退级处理
    let oneHeight = 0; // 退级处理
    if (lineHeight) {
      oneHeight = +lineHeight.replace('px', '');
      calcHeight = `${oneHeight * line}px`; // 总高度 单行高度 + 行数
    }
    setState(prev => ({
      height: calcHeight,
      oneHeight,
      supportLineClamp: prev.supportLineClamp,
    }));
  }


  if (disabled) {
    /* 没有挂载点的话会导致开关后样式不统一 */
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <div
      ref={el}
      className={cls(
        'fr-ellipsis',
        className,
        {
          __dark: dark,
          ellipsis: !shouldAddShadow && line === 1,
        },
      )}
      style={{
        maxHeight: state.height || '',
        ...extraStyle,
        ...style,
      }}
    >
      {children}
      {shouldAddShadow && <span className="fr-ellipsis_shadow" style={{ height: state.oneHeight, top: `${state.oneHeight * (line - 1)}px` }} />}
    </div>
  );
};
export default Ellipsis;