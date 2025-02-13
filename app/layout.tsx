import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HeadLine from "./components/Headline";
import Header from "./components/Header"
import Footer from "./components/Footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Inter font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
        </link>
        {/* Roboto Font */}
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
        </link>

        {/* Font Awesome for icon */}
        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
       <HeadLine/>
       <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
