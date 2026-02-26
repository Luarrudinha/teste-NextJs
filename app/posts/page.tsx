import Link from "next/link";

export interface PostProps {      //É só para o TypeScript entender o formato dos dados.
    id: number;
    title: string;                 //formato de cada objeto individual
    body: string;
    userId: number;
}

//RESPOSTA DA API - a API tem vários post, então aqui é onde ordena ela em forma de lista, ent cada lista tem um post
interface ResponseProps{      //Descrever a resposta da API inteira
    posts: PostProps[]      //“posts é uma lista de PostProps”
}

//📌 Como é async, ela roda no servidor (Server Component).
export default async function PostsPage(){   //essa função é a página,permite usar await, componente da página /posts 

    const response = await fetch('https://dummyjson.com/posts')   //Servidor, vá até esse endereço e busque os posts antes da pagina seja carregada
    const data: ResponseProps = await response.json()         //Aqui ele pega o formato do ResponsePorps

//RODA NO SERVIDOR - NO SERVIDOR N PODE TER BOTÃO, POR ISSO O 'use server'
    async function handleFetchPosts(){
        'use server'
        const response = await fetch('https://dummyjson.com/posts')  
        const data: ResponseProps = await response.json()

        console.log(data.posts)        //mostra no console.log do terminal
    }

    async function handleSearchUsers(formData: FormData) {        //recebe dados de um formulário
        'use server'
        const userId = formData.get('userId')        //Pegue o valor do input chamado userId

        const response = await fetch(`https://dummyjson.com/posts/users/${userId}`)
        const data: ResponseProps = await response.json()
        
        console.log(data)
    }

    return(
        <div>
            <h1>Todos os posts</h1>
            
            <button onClick={handleFetchPosts}>
                Buscar posts
            </button>

        <form 
        className="flex gap-2 my-4"
        action={handleSearchUsers}
        >
            <input 
            type="text"
            placeholder="ID do usuário"          //texto dentro do formulário
            className="border border-gray-200 p-2" 
            name='userId'
            />

            <button className="bg-blue-500 text-white p-2"
            type="submit">
                Buscar usuário
            </button>
        </form>

        <div className="flex flex-col gap-4 mx-2 rounded-md">
            {data.posts.map(post =>(    //👉 Um loop, “Para CADA post dentro de data.posts, faça isso:”  pegue o posts dentro de data

                //React precisa identificar cada item da lista
                <div key={post.id} className="bg-gray-200 p-4 rounded-md"> 
                    <h2 className="font-bold">{post.title}</h2>
                    <h2>{post.body}</h2>

                    <Link className="text-blue-500" href={`/post/${post.id}`}>
                    Ver sobre o post
                    </Link>
                </div>
            ))}
        </div>
        </div>
    )
}