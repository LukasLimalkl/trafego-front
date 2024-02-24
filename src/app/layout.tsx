'use client';
import GlobalStyle from '@/styles/GlobalStyles';
import StyledComponentsRegistry from './lib/registry';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <GlobalStyle />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
