import React, { useContext } from 'react';
import { TableBody, TableRow, TableCell, tableCellClasses } from '@material-ui/core';
import { styled } from '@material-ui/system';
import GlobalContext from '../../context/context';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function TBody() {
  const { data, isLoading, filters } = useContext(GlobalContext);

  const filtred = () => {
    const { filterByName: { name }, filterByNumericValues } = filters;
    const { results: planets } = data;
    if (filterByNumericValues.length === 0) {
      return planets.filter((planet) => planet.name.includes(name));
    }
    const index = filterByNumericValues.length - 1;
    const { column, comparison, value } = filterByNumericValues[index];
    if (comparison === 'maior que') {
      return planets.filter((planet) => Number(planet[column]) > Number(value));
    }
    if (comparison === 'menor que') {
      return planets.filter((planet) => Number(planet[column]) < Number(value));
    }
    if (comparison === 'igual a') {
      return planets.filter((planet) => Number(planet[column]) === Number(value));
    }
    return planets
      .filter((planet) => planet.name.includes(name));
  };

  const renderTable = () => (
    <TableBody>
      {
        filtred().map((planet) => (
          <StyledTableRow key={ planet.name }>
            <StyledTableCell>{planet.name}</StyledTableCell>
            <StyledTableCell>{planet.rotation_period}</StyledTableCell>
            <StyledTableCell>{planet.orbital_period}</StyledTableCell>
            <StyledTableCell>{planet.diameter}</StyledTableCell>
            <StyledTableCell>{planet.climate}</StyledTableCell>
            <StyledTableCell>{planet.gravity}</StyledTableCell>
            <StyledTableCell>{planet.terrain}</StyledTableCell>
            <StyledTableCell>{planet.surface_water}</StyledTableCell>
            <StyledTableCell>{planet.population}</StyledTableCell>
            <StyledTableCell>
              {planet.films.map((film) => (
                <p>{film}</p>
              ))}
            </StyledTableCell>
            <StyledTableCell>{planet.created}</StyledTableCell>
            <StyledTableCell>{planet.edited}</StyledTableCell>
            <StyledTableCell>{planet.url}</StyledTableCell>
          </StyledTableRow>
        ))
      }
    </TableBody>
  );

  return (
    isLoading
      ? <p>Carregando</p>
      : renderTable()
  );
}

export default TBody;
