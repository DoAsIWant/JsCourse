import {getPost,createPost} from "./http";


getPost("https://jsonplaceholder.typicode.com/posts","GET")
    .then(response=>console.log(response));

createPost({title:"ASS",id:1,},"POST","https://jsonplaceholder.typicode.com/posts")
    then(response=>console.log(response));