import { cache } from "react"

export async function GET(request){

    const posts = await fetch(`` , {cache : 'no-store'})
    .then( (res)=> res.json)
    .then((data) => {
        console.log(data);
        return data;
    } )

    return new Response(JSON.stringify(posts))
}
export async function POST(request){
    const users = [

    ]

    return new Response(JSON.stringify(users))
}


export async function GETALL(request){
    const users = [

    ]

    return new Response(JSON.stringify(users))
}


export async function DELETE(request){
    const users = [

    ]

    return new Response(JSON.stringify(users))
}



export async function PUT(request){
    const users = [

    ]

    return new Response(JSON.stringify(users))
}