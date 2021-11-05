import React from 'react';
import './App.css';
import Header from './components/Header';
import MyTable from './components/MyTable';
import GlobalContextProvider from './context/ContextProvider';
import NumericFilter from './components/NumericFilter';
import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8b',
    },
    secondary: {
      main: '#3f51b5',
    },
  }
})

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <GlobalContextProvider>
        <Header />
        <NumericFilter />
        <MyTable />
      </GlobalContextProvider>
    </ThemeProvider>
  );
}

export default App;
