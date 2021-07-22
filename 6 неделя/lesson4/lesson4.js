function getPost(id){
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>response.json())
}

getPost(1).then(post=>console.log(post));

function getPost2(id){
    return Promise.resolve().then(()=>{
        const [userName,userId] = id.split("-");
        return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
            .then(response=>response.json())
    })
}

getPost2(1).then(post=>console.log(post)).catch(err=>console.log(err));