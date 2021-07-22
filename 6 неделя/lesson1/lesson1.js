const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(Math.random() * 10)
    },10000)
    }).then(x=>{
        console.log(x);
        return x*2;
    }).then(y=>{
        console.log(y)
    }).catch(err=>{console.log(err)})