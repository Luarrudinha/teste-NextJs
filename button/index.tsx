'use client';

import { useState } from "react";

export function Button(){

    const[nome, setNome] = useState("Sujeito programador")

    function handleChangeName(){
        setNome("Luana")
    }

    return(
        <div>
            <button onClick={handleChangeName}>Alterar nome</button>
            <h3>Nome: {nome}</h3>
        </div>
    )
}