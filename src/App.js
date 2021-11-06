import React from 'react';
import './App.css';
import Header from './components/Header';
import MyTable from './components/MyTable';
import GlobalContextProvider from './context/ContextProvider';
import NumericFilter from './components/NumericFilter';
import { ThemeProvider, createTheme, Container } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary: {
      main: '#202020',
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
          <Container maxWidth="xl" sx={{ boxShadow: 4 }}>
            <MyTable />
          </Container>
      </GlobalContextProvider>
    </ThemeProvider>
  );
}

export default App;
