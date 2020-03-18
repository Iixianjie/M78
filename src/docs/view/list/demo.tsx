import React from 'react';

import List from '@lxjx/fr/lib/list';
import '@lxjx/fr/lib/list/style';

const Demo = () => {
  return (
    <div>
      <List>
        <List.Title
          title="列表标题"
          desc="对列表的一段说明"
        />
        <List.SubTitle
          title="常规列表"
        />
        <List.Item
          title="普通内容"
        />
        <List.Item
          title="操作项"
          require
          arrow
        />
        <List.Item
          title="余额"
          extra="80000.00"
          require
          arrow
        />
        <List.Item
          title="禁用"
          extra="80000.00"
          disabled
        />
        <List.Item
          title="操作项"
          extra={<input type="checkbox" />}
          effect
        />
        <List.Item
          left="😍"
          title="自定义左右内容"
          icon="😆"
        />

        <List.SubTitle
          title="复杂列表"
        />
        <List.Item
          title="多行列表"
          desc="行描述行描述"
          extra="额外说明"
        />
        <List.Item
          title="多行列表"
          desc="行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述"
          extra="额外说明"
        />
        <List.Item
          left={<div style={{ backgroundColor: '#ccc', width: 60, height: 60 }} />}
          leftAlign="top"
          title="多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表多行列表"
          desc="行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述行描述"
          extra="额外说明"
        />
        <List.Item
          left={<div style={{ backgroundColor: '#ccc', width: 76, height: 76 }} />}
          leftAlign="top"
          title="标题标题标题标题标题标标题标题标题"
          desc="描述描述描述述描述描述描述描述描述"
          extra="次要文本"
          footLeft="页脚文本页脚文本页脚文本"
          footRight="2020-01-01"
          arrow
        >
          表单区域
        </List.Item>

        <List.Footer>
          底部描述
          <p>带*号的为必填项</p>
        </List.Footer>
      </List>
    </div>
  );
};

export default Demo;
