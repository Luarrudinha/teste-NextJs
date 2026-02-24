import { Metadata } from "next"

export const metadata: Metadata ={
  title: 'Home',
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


export default function Home(){
  return (
    <div>
      <h1>Pagina home</h1>
    </div>
  )
}