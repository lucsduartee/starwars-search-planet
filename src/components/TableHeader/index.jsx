import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

function TableHeader() {
  return (
    <TableRow>
      <TableCell>Name</TableCell>
      <TableCell>Rotation Period</TableCell>
      <TableCell>Orbital Period</TableCell>
      <TableCell>Diameter</TableCell>
      <TableCell>Climate</TableCell>
      <TableCell>Gravity</TableCell>
      <TableCell>Terrain</TableCell>
      <TableCell>Surface Water</TableCell>
      <TableCell>Population</TableCell>
      <TableCell>Films</TableCell>
      <TableCell>Created</TableCell>
      <TableCell>Edited</TableCell>
      <TableCell>URL</TableCell>
    </TableRow>
  );
}

export default TableHeader;
