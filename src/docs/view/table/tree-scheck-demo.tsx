import React, { useState } from 'react';
import { Table, TableColumns } from 'm78/table';
import { TreeValueType } from 'm78/tree';
import { mockTreeData } from './mock-tree-data';

const columns: TableColumns = [
  {
    label: '卡号',
    field: 'id',
  },
  {
    label: '名称',
    field: 'name',
  },
  {
    label: '日文名',
    field: 'jName',
  },
  {
    label: '种族',
    field: 'race',
  },
  {
    label: '属性',
    field: 'property',
  },
  {
    label: '级别',
    field: 'level',
  },
  {
    label: '攻',
    field: 'atk',
  },
  {
    label: '防',
    field: 'def',
  },
  {
    label: '罕见度',
    field: 'rare',
  },
  {
    label: '详情',
    field: 'desc',
  },
];

const TreeScheckDemo = () => {
  const [ds] = useState(() => mockTreeData(6, 3));
  const [checked, setChecked] = useState<TreeValueType>('1-1-1-2');

  return (
    <div>
      <span>选中项: {checked}</span>
      <Table
        height={400}
        checkable
        value={checked}
        onChange={setChecked}
        columns={columns}
        dataSource={ds}
        defaultOpens={['1', '1-1', '1-1-1']}
      />
    </div>
  );
};

export default TreeScheckDemo;
