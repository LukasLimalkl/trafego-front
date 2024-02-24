import { darkTheme, lightTheme } from '@/styles/theme';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';

export default function ToggleInput() {
  const [theme, setTheme] = useState('light');

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Container></Container>
    </ThemeProvider>
  );
}
