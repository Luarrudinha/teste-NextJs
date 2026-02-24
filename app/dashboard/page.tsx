import { Metadata } from "next"

export const metadata: Metadata ={
  title: 'Dashboard',
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

export default function Dashboard(){
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}