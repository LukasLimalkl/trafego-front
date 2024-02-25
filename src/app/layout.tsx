import { Metadata } from 'next';
import StyledComponentsRegistry from './lib/registry';

export const metadata: Metadata = {
  title: 'PaidFlow Control',
  description: 'Website description',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.icon',
        href: '/favicon.pgn'
      }
    ]
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
