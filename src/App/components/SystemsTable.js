import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import { Table, TableHeadData, TableBody, TableHead, TableRow, TableRowData, Button } from './styles';

const SystemsTable = ({ systemsToDisplay, systemOnClick, deleteSystem }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeadData>System Name</TableHeadData>
        <TableHeadData>System Type</TableHeadData>
        <TableHeadData>HDD Capacity</TableHeadData>
        <TableHeadData />
      </TableRow>
    </TableHead>
    <TableBody>
      {map(systemsToDisplay, ({ id, system_name, type, hdd_capacity }) =>
        (<TableRow key={id}>
          <TableRowData>{system_name}</TableRowData>
          <TableRowData>{type}</TableRowData>
          <TableRowData>{`${hdd_capacity} GB`}</TableRowData>
          <TableRowData>
            <Button onClick={() => systemOnClick(id)}>Edit</Button>
            <Button onClick={() => deleteSystem(id)}>Delete</Button>
          </TableRowData>
        </TableRow>)
        )}
    </TableBody>
  </Table>
);

SystemsTable.propTypes = {
  systemsToDisplay: PropTypes.array,
  deleteSystem: PropTypes.func,
};

export default SystemsTable;
