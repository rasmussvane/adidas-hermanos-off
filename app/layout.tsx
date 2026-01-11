import type { Metadata } from 'next';
import './globals.css';
import ClientQueryClientProvider from './components/ClientQueryClientProvider';

export const metadata: Metadata = {
  title: 'Adidas X Hermanos Koumori Copenhagen Showroom',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ClientQueryClientProvider>{children}</ClientQueryClientProvider>
      </body>
    </html>
  );
}
