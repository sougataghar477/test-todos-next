'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/notifications/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import { SessionProvider } from "next-auth/react";
import '@mantine/core/styles.css';
import Header from "../../components/Header";
const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>

      <MantineProvider theme={theme}>
      <Header/>
        {children}
    </MantineProvider>
        </SessionProvider>
  
        </body>
    </html>
  );
}
