'use client';
import Header from '@/components/header';
import MainBox from '@/components/mainBox';
import Switch from '@/components/switch';
import GlobalStyle from '@/styles/GlobalStyles';
import { darkTheme, lightTheme } from '@/styles/theme/bodyModes/bodyModes';
import { useState } from 'react';
import { LuMoon, LuSunMedium } from 'react-icons/lu';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Container>
        <div className="switch-box">
          <LuSunMedium className="sol" />
          <Switch toggleTheme={toggleTheme} />
          <LuMoon className="lua" />
        </div>
        <Header />
      </Container>
      <MainBox />
    </ThemeProvider>
  );
}
