//SÓ CLIENTES CADASTRADOS PODEM TER ACESSO A DASHBOARD

import { NextResponse } from "next/server"

export function middleware(request: Request){
    console.log("Middleware executado")
    return NextResponse.next()
}