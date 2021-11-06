import React, { useContext, useState } from 'react';
import {
  Container,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  TextField,
  Button,
  Box,
} from '@material-ui/core';
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

import GlobalContext from '../../context/context';

function NumericFilter() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const { setFilters, filters } = useContext(GlobalContext);

  const columnArr = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleClickDelete = (param) => {
    setFilters((pState) => ({
      ...pState,
      filterByNumericValues: pState.filterByNumericValues.filter((filter) => (
        filter.column !== param
      )),
    }));
  };

  const renderFilters = () => (
    filters.filterByNumericValues.map((filter) => (
      <Box
        key={ filter.column }
        data-testid="filter"
        sx={{
          boxShadow: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          my: 1,
          p: 1,
          borderRadius: 2,
        }}
        width="30%"
      >
        <FilterListOutlinedIcon />
        <p>
          { filter.column }
          {' '}
          { filter.comparison }
          {' '}
          { filter.value }
          {' '}
        </p>
        <Button
          onClick={ () => handleClickDelete(filter.column) }
          type="button"
        >
          <HighlightOffIcon />
        </Button>
      </Box>
    ))
  );

  const handleClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        ...prevState.filterByNumericValues,
        {
          column,
          comparison,
          value,
        },
      ],
    }));
  };

  // Aqui faço a verificação se já existe no estado algum filtro numérico que possui
  // o mesma coluna.
  const toRender = (arr) => {
    const test = filters.filterByNumericValues.map((filter) => filter.column);
    const render = arr.filter((option) => !test.includes(option));
    return render.map((opt) => <MenuItem key={ opt } value={ opt }>{opt}</MenuItem>);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'column',
        my: 10,
      }}
    >
      <Box>
        <FormControl sx={{ m: 2, minWidth: 150 }}>
          <InputLabel id="column">Column</InputLabel>
          <Select
            labelId="column"
            data-testid="column-filter"
            onChange={ ({ target }) => { setColumn(target.value); } }
            label="Column"
            id="demo-column"
            value={column}
          >
            {toRender(columnArr)}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 150 }}>
          <InputLabel id="comparison">Comparison</InputLabel>
          <Select
            labelId="comparison"
            onChange={ ({ target }) => { setComparison(target.value); } }
            label="Comparison"
            id="demo-comparison"
            value={comparison}
          >
            <MenuItem value="greater than">greater than</MenuItem>
            <MenuItem value="less than">less than</MenuItem>
            <MenuItem value="equal to">equal to</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 150 }}>
          <TextField
            id="outlined-basic"
            label="Value"
            variant="outlined"
            data-testid="value-filter"
            onChange={ ({ target }) => { setValue(target.value); } }
            type="number"
          />
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 150 }}>
          <Button
            sx={{ p: 1.8}}
            data-testid="button-filter"
            type="button"
            onClick={ handleClick }
            variant="contained"
            size="large"
          >
            Filter
          </Button>
        </FormControl>
      </Box>
      {renderFilters()}
    </Container>
  );
}

export default NumericFilter;
