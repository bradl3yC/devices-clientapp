import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './styles';

const SystemSort = ({ sortBy }) => (
  <div>
    <Label>Sort by: </Label>
    <select onChange={(event) => sortBy(event.target.value)}>
      <option value="system_name">System Name</option>
      <option value="type">System Type</option>
      <option value="hdd_capacity">HDD Capacity</option>
    </select>
  </div>
);

SystemSort.propTypes = {
  sortBy: PropTypes.func,
};

export default SystemSort;
