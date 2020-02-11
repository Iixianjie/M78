import React from 'react';
import CountDown from '@lxjx/flicker/lib/count-down';
import '@lxjx/flicker/lib/count-down/style';

const d = new Date();

const Demo = () => {
  return (
    <div>
      <CountDown
        date={new Date(d.getFullYear(), d.getMonth() + 2, 1)}
        format={(meta) => {
          return `距离活动结束剩余${meta.d}天${meta.d}日${meta.h}时${meta.m}分${meta.s}秒`;
        }}
      />
    </div>
  );
};

export default Demo;