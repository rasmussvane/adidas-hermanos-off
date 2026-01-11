import type { Metadata } from 'next';
import './globals.css';
import ClientQueryClientProvider from './components/ClientQueryClientProvider';
import images from './components/constants/images';

export const metadata: Metadata = {
  title: 'Adidas X Hermanos Koumori Copenhagen Showroom',
  openGraph: {
    images: images[0],
  },
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
