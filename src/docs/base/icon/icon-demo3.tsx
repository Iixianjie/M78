import React, {useEffect} from 'react';
import Icon, { svgIconMap } from '@lxjx/flicker/lib/icon';
import '@lxjx/flicker/lib/icon/style';

import message from '@lxjx/flicker/lib/message';
import '@lxjx/flicker/lib/message/style';

import { useCopyToClipboard } from 'react-use';

const IconDemo2 = () => {
  const [copyState, copyToClipboard] = useCopyToClipboard();

  useEffect(() => {
    if (copyState.value) {
      message.tips({
        type: 'success',
        content: `复制成功: ${copyState.value}`,
      });
    }
  }, [copyState.value]);

  return (
    <div className="doc-wrap">
      {Object.entries(svgIconMap).map(([key]) => (
        <span key={key} className="d-icon-view-item __svg" onClick={() => copyToClipboard(key)}>
          <Icon.SvgIcon type={key as any} size={80} />
          <div className="d-icon-view-item_text ellipsis">{key}</div>
        </span>
      ))}
    </div>
  );
};

export default IconDemo2;