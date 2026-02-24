import { Metadata } from "next"

export const metadata: Metadata ={
  title: 'Contatos',
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

export default function Contatos(){
    return (
        <div>
            <h1>Contatos</h1>
        </div>
    )
}