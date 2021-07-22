// Ajax
const btn = document.querySelector(".btn");

function getPost(cb){
    const xhr = new XMLHttpRequest();

    xhr.open("GET","http://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load",()=>{
        cb(JSON.parse(xhr.responseText))
    });

    xhr.addEventListener("error",()=>{
        console.log("Error");
    })

    xhr.send()
    }

btn.addEventListener("click",()=>{
    getPost((response)=>{
        console.log(response);
    });
})

