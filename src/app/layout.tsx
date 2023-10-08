import AuthContext from '@/context/AuthContext';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';

import './globals.css';

import MenuBar from '@/components/Menubar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full`}>
        <AuthContext>
          <div className="h-full flex flex-col items-center mx-auto bg-primary max-w-[480px] overflow-y-auto border-4">
            <header className="w-full sticky top-0 border-b py-2">
              <Navbar />
            </header>
            <main className="max-w-[480px] flex-[1]">{children}</main>
            <footer className="h-[48px] w-full border-t">
              <MenuBar />
            </footer>
          </div>
        </AuthContext>
      </body>
    </html>
  );
}
