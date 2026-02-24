import "./globals.css";
import { Metadata } from "next"

export const metadata: Metadata ={
  title: 'Página',
  description: 'Apenas um teste',
  openGraph:{
    title: 'Aprendendo Next.js'
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow:true,
    }
  }
}
import { Header} from '../components/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Header/>

        {children}  
      </body>
    </html>
  );
}
