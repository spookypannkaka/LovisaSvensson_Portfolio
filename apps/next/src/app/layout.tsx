'use client';
import { ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={lightTheme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
