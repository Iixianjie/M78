import React, { useMemo, useRef } from 'react';
import clsx from 'clsx';
import { getCellProps, getCellSpan } from 'm78/table/functions';
import { renderCellFork } from 'm78/table/renders';
import { _TableCellProps, TableMeta } from './types';

const _Cell = (props: _TableCellProps) => {
  const { column, isHead = false, isFoot = false, record, ctx, colIndex, rowIndex } = props;

  const { fixed, sort } = column;

  // 单元格容器节点
  const elRef = useRef<HTMLTableDataCellElement>(null!);

  // 是否为表格体
  const isBody = !isFoot && !isHead;

  // 表示当前列的meta
  const meta: TableMeta = { ctx: {}, column, record, colIndex, rowIndex, isFoot, isHead, isBody };

  // 单元格的合并数
  const [rowSpan, colSpan] = useMemo(() => getCellSpan(ctx, meta), [
    record,
    column,
    colIndex,
    rowIndex,
  ]);

  // 要为单元格设置的额外props
  const cellProps = useMemo(() => getCellProps(ctx, meta), [column.props, ctx.props.props]);

  return (
    <td
      {...cellProps}
      ref={elRef}
      className={clsx(cellProps?.className, {
        'm78-table_fixed': fixed,
        __effect: sort,
      })}
      style={{
        ...cellProps?.style,
        display: rowSpan === 0 || colSpan === 0 ? 'none' : undefined,
      }}
      rowSpan={rowSpan}
      colSpan={colSpan}
    >
      {renderCellFork(ctx, meta, props)}
    </td>
  );
};

_Cell.displayName = 'TableCell';

export default React.memo(_Cell, (prev, next) => {
  return (
    prev.column === next.column &&
    prev.record === next.record &&
    prev.colIndex === next.colIndex &&
    prev.rowIndex === next.rowIndex &&
    prev.isHead === next.isHead &&
    prev.isFoot === next.isFoot
  );
});
