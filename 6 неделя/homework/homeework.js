const http = {
    getPost,
    createPost,
}

async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.json();
}

async function createPost(body){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`,{
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    return response.json();
}

http.getPost(1).then((data)=>{console.log(data)})
http.createPost({title:"ffd"}).then((data)=>console.log(data))