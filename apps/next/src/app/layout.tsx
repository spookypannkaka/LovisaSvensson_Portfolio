'use client';
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme } from "@/styles";

const GlobalStyles = createGlobalStyle`
  /* minimal reset */
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; height: 100%; }
  img, picture, video, canvas, svg { display: block; max-width: 100%; }
  main { display: block; } /* just in case older UA styles */
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
