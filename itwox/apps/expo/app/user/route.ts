const users = [
    {   id: 1,
        name: "John Doe",
        email: "john@example.com",
        password: "111aaa",           
        role: 2                              //In this case 2 is going to be out client or less privilage role
    },
    {   id:2,
        name: "Jane Smith",
        email: "jane@example.com",
        password: "123aaa",
        role: 1
    }
];

export async function GET( req){
    return new Response(JSON.stringify(users))
}


export async function Login( userLogin){    
    let user = users.find((user) =>{                
        if (user.email === userLogin.email && user.password === userLogin.password )
             return user;                
    } 

 ); 
    if(user != null){
        return user 
    }

    return false 
}