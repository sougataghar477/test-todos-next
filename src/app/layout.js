'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@mantine/core";
import { createTheme, MantineProvider } from '@mantine/core';
import { SessionProvider } from "next-auth/react";
import '@mantine/core/styles.css';
import Header from "../../components/Header";
const inter = Inter({ subsets: ["latin"] });
const theme = createTheme({
  /** Put your mantine theme override here */
});
 import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(()=>{
    fetch("/api/login")
    .then(a => a.json())
    .then(b => console.log(b))
   },[])
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
