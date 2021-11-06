import React from 'react';
import { TableContainer, Table, Paper, TableHead } from '@material-ui/core';
import TableBody from '../TableBody';
import TableHeader from '../TableHeader';

function MyTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableHeader />
        </TableHead>
        <TableBody />
      </Table>
    </TableContainer>
  );
}

export default MyTable;
