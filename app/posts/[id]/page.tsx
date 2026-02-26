//ROTA DINAMICA 

import { resolve } from "path";
import { PostProps } from "../page";
import { PostInfo } from "./_components/post";
import { Suspense } from "react";

export default async function DetailPost({
    params,                             
}:{
    params:Promise<{ id: string }>              //pega o ID do posts, ele busca diretamente pelo post que vc digitou
}) {

    const { id } = await params;

    //enquanto o assunto carrega o título fica aparecendo em cima, e embaixo carregango até que o conteudo carregue
    return(
        <div>
            <h1 className="text-4xl font-bold text-center">Detalhes do post: {id}</h1> 

        <Suspense fallback={<h1>Carregando...</h1>}>
            <PostInfo id={id}/>
        </Suspense> 
        </div>
    )
}