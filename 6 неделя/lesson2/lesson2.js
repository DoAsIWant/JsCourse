function getPost(id){
    return new Promise((resolve,reject)=>{
        myHttp.get(`link${id}`,(err,res)=>{
            if (err){
                reject(err);
            }
            else{
                resolve(res)
            }
        })
    })
}

function getPostComents(post){
    const {id} = post;
    return new Promise((resolve,reject)=>{
        myHttp.get(`link${id}`,(err,res)=>{
            if(err){
                reject(err)
            }
            else{
                resolve({post, comments: res})
            }
        })
    })
}

function getUserCreated(data){
    const {post:{userId}} = data;
    return new Promise((resolve,reject)=>{
        myHttp.get(`link${userId}`,(err,res)=>{
            if(err){
                reject(err);
            }
            else{
                resolve({...data, res})
            }
        })
    })
}

getPost(1).then(post=>getComments(post))
        .then(data=>getUserCreated(data))
        .then(user=>console.log(user))
        .catch(err=>console.log(err));


Promise.all([
    getPost(1),
    getComments(2),
    getUser(3),
]).then((fullData)=>console.log(fullData)).catch(err=>console.log(err))



