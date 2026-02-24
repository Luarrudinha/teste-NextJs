import Link from "next/link";
export interface PostProps {      //É só para o TypeScript entender o formato dos dados.
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface ResponseProps{      //Descrever a resposta da API inteira
    posts: PostProps[]      //“posts é uma lista de PostProps”
}

//📌 Como é async, ela roda no servidor (Server Component).
export default async function PostsPage(){   //essa função é a página,permite usar await, componente da página /posts 

    const response = await fetch('https://dummyjson.com/posts')   //Servidor, vá até esse endereço e busque os posts
    const data: ResponseProps = await response.json()         //Convertendo a resposta em JSON
    
    async function handleFetchPosts(){
        'use server'
        const response = await fetch('https://dummyjson.com/posts')
        const data: ResponseProps = await response.json()

        console.log(data.posts)
    }

    async function handleSearchUsers(formData: FormData) {
        'use server'
        const userId = formData.get('userId')
        console.log(userId)
    }

    return(
        <div>
            <h1>Todos os posts</h1>
            
            <button onClick={handleFetchPosts}>
                Buscar posts
            </button>

        <form className="flex gap-2 my-4">
            <input 
            type="text"
            placeholder="ID do usuário"
            className="border border-gray-200 p-2" 
            name='userId'
            />

            <button className="bg-blue-500 text-white p-2"
            type="submit">
                Buscar usuário
            </button>
        </form>

        <div className="flex flex-col gap-4 mx-2 rounded-md">
            {data.posts.map(post =>(    //👉 Um loop, “Para CADA post dentro de data.posts, faça isso:” 
                //React precisa identificar cada item da lista
                <div key={post.id} className="bg-gray-200 p-4"> 
                    <h2 className="font-bold">{post.title}</h2>
                    <h2>{post.body}</h2>
                    <Link href={'/post/${post.id}'}>
                    Ver detalhes do post
                    </Link>
                </div>
            ))}
        </div>
        </div>
    )
}