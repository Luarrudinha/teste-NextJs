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

export const revalidate = 60;     //ele vai revalidar o número que vai ser gerado a cada 60s

export default function Home(){

  const randomNumber = Math.random() * 10;      //vai gerar o número aleatório

  return (
    <div>
      <h1>Pagina home</h1>
      <h2>Número gerado: {randomNumber}</h2>
    </div>
  )
}