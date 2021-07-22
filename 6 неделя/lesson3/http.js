export const http = {
    getPost,
    createPost,
}

function getPost(url,method){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.send();

        xhr.addEventListener("load",()=>{
            resolve(JSON.parse(xhr.responseText));
        });
        xhr.addEventListener("error",()=>{
            reject({status:xhr.status,url})
        })
    })
}

function createPost(body,method,url){
    return new Promise((resolve,reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.send(JSON.stringify(body));
    
        xhr.setRequestHeader("Content-type","application/json;charset=UTF-8");

        xhr.addEventListener("load",()=>{
            resolve(JSON.parse(xhr.responseText))
        });
        xhr.addEventListener("err",()=>{
            reject({status:xhr.status,url})
        })
        xhr.send(JSON.stringify(body));
    })
  
}

