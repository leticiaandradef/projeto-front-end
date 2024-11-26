import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Sanrio",
  description: "Marca",
  charset: 'UTF-8',
  author: 'Leticia Andrade',
  keywords: 'Marca, Life style',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head rel="icon" href="favicon.ico"/>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}