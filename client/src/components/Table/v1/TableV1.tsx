import {
  TableWrapperSC,
  TableTopSC,
  TableContainerSC,
  TableDataSC,
} from './table';

type TableProps = {
  th?: any;
  tr?: any;
};

const TableV1 = ({ th, tr }: TableProps) => {
  return (
    <TableWrapperSC>
      <TableTopSC>Top</TableTopSC>
      <TableContainerSC>
        <TableDataSC>
          <thead>
            <tr>{th}</tr>
          </thead>
          <tbody>{tr}</tbody>
        </TableDataSC>
      </TableContainerSC>
    </TableWrapperSC>
  );
};

export default TableV1;
