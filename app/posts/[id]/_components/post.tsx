import { PostProps } from "../../page"

export async function PostInfo({id} : {id:string}){
    await new Promise(resolve => setTimeout(resolve, 4000) )  //bloqueia o acesso imediato, ele vai demorar 4s, até toda a página ser carregada

    const response = await fetch(`https://dummyjson.com/posts/${id}`)
    const data: PostProps = await response.json()

    return(
        <div>
            <h2>{data.title}</h2>
            <h2>{data.body}</h2>
        </div>
    )
}