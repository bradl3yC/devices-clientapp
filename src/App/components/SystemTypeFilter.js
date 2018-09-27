import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './styles';

const SystemTypeFilter = ({ handleFilter }) => (
  <div>
    <Label>Device Type: </Label>
    <select onChange={(event) => handleFilter(event)}>
      <option value="all">All</option>
      <option value="MAC">MAC</option>
      <option value="WINDOWS_WORKSTATION">Windows Workstation</option>
      <option value="WINDOWS_SERVER">Windows Server</option>
    </select>
  </div>
);

SystemTypeFilter.propTypes = {
  handleFilter: PropTypes.func,
};

export default SystemTypeFilter;
