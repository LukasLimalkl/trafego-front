'use client';

import Header from '@/components/header';
import GlobalStyle from '@/styles/GlobalStyles';
import { darkTheme, lightTheme } from '@/styles/theme/bodyModes/bodyModes';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <button onClick={themeToggler}>{theme}</button>
      </Container>
    </ThemeProvider>
  );
}
