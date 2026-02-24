'use client';

import { useEffect, useState } from "react";

export default function PageTeste() {

    const[posts, setPosts] = useState([])  //Cria uma variável de estado.

    useEffect(() => {                 //Executar código quando a página carrega.
        fetch('https://dummyjson.com/posts')             //O navegador pede dados para a API(Aqui o browser faz a requisição)
            .then(res => res.json())                     //Converter a resposta da API em dados JavaScript.
            .then(data => setPosts(data.posts))          //Atualiza o estado posts com os dados da API.
    }, [])

    return(
        <div>
            <h1 className="text-center mt-5 mb-2 font-bold tex-3xl">
                Página Client
            </h1>

             <button onClick={() => alert("TESTE")}>
                Teste
            </button>

            <div className="flex flex-col gap-4 mx-2">
                {posts.map((post: any) => (
                    <div key={post.id} className="bg-gray-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

           
        </div>
    )
}