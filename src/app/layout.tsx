import './globals.css';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your Name | Software Designer',
  description: 'Modern and responsive software designer portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}