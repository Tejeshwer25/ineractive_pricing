import './App.css';
import {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import {lightTheme , darkTheme} from './Components/theme';
import {GlobalStyles} from './Components/globalStyle';
import Switch from '@mui/material/Switch';

import Header from './Components/header/Header';
import Pricing from './Components/pricing/Pricing';

function App() {

  const [theme, setTheme] = useState('light'); 
  const [themeChecked, setThemeChecked] = useState('false');

  const handleThemeToggle = () => {
    setThemeChecked(!themeChecked);

    setTheme(theme==='light' ? 'dark' : 'light');
  }

  return (
    <ThemeProvider theme={theme==='light' ? lightTheme : darkTheme}>
      <div className="app">
        <GlobalStyles />

        <Switch checked={themeChecked} onChange={() => {handleThemeToggle()}} color='warning'/>
        <span>Change Theme</span>

        <Header />

        <Pricing />
      </div>
    </ThemeProvider>
  );
}

export default App;
