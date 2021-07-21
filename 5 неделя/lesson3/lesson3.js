const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

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

function createPost(body,cb){
    const xhr = new XMLHttpRequest();

    xhr.open("POST","http://jsonplaceholder.typicode.com/posts");
    xhr.addEventListener("load",()=>{
        cb(JSON.parse(xhr.responseText))
    });

    xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");

    xhr.addEventListener("error",()=>{
        console.log("Error");
    })

    xhr.send(JSON.stringify(body))
}

btn.addEventListener("click",()=>{
    getPost((response)=>{
        console.log(response);
    });
});

const obj = {
    title:"ffkk",
    body: "fkdnmk",
    userId:1,
}
btn2.addEventListener("click",()=>{
    createPost(obj,(response)=>{
        console.log(response);
    });
})
