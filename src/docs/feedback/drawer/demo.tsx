import React from 'react';
import Drawer from '@lxjx/flicker/lib/drawer';
import '@lxjx/flicker/lib/drawer/style';

import Button from '@lxjx/flicker/lib/button';
import '@lxjx/flicker/lib/button/style';

const Demo = () => {
  const [state, set] = React.useState({
    show: false,
    direction: 'left',
  });

  const [fullScreenShow, setFullScreen] = React.useState(false);
  const [insideShow, setInsideShow] = React.useState(false);

  function close() {
    set(prev => ({
      direction: prev.direction,
      show: false,
    }));
    setFullScreen(false);
    setInsideShow(false);
  }

  return (
    <div style={{
      width: '100%',
      height: 300,
      border: '1px solid #ccc',
      position: 'relative',
      overflow: 'hidden',
      padding: 16,
    }}
    >
      <Drawer
        direction={state.direction as any}
        show={state.show}
        onClose={close}
      >
        <div>
          {Array.from({ length: 6 }).map((v, k) => (
            <p key={k}>content {k + 1} Lorem ipsum dolor sit amet</p>
          ))}
        </div>
      </Drawer>
      <Drawer
        fullScreen
        direction="bottom"
        show={fullScreenShow}
        onClose={close}
      >
        <div>
          {Array.from({ length: 6 }).map((v, k) => (
            <p key={k}>content {k + 1} Lorem ipsum dolor sit amet</p>
          ))}
        </div>
      </Drawer>
      <Drawer
        inside
        direction="right"
        show={insideShow}
        onClose={close}
      >
        <div>
          {Array.from({ length: 6 }).map((v, k) => (
            <p key={k}>content {k + 1} Lorem ipsum dolor sit amet</p>
          ))}
        </div>
      </Drawer>
      <Button onClick={() => set(prev => ({ ...prev, direction: 'left', show: !prev.show }))}>left</Button>
      <Button onClick={() => set(prev => ({ ...prev, direction: 'top', show: !prev.show }))}>top</Button>
      <Button onClick={() => set(prev => ({ ...prev, direction: 'right', show: !prev.show }))}>right</Button>
      <Button onClick={() => set(prev => ({ ...prev, direction: 'bottom', show: !prev.show }))}>bottom</Button>

      <div className="mt-16">
        <Button onClick={() => setFullScreen(prev => !prev)}>全屏</Button>
        <Button onClick={() => setInsideShow(prev => !prev)}>容器模式</Button>
      </div>
    </div>
  );
};

export default Demo;
