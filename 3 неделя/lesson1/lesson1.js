// Arrow function

const plus = (x,y)=>{
    console.log(x+y);
}

plus(4,9);

const withoutArguments = ()=>console.log("ASS");
withoutArguments();
const moreActions = (x,y)=>{
    x*=6;
    y*=10
    return x + y
}

const returnObj = (str = "")=>{
    return{
        value: str,
        length: str.length,
    }
}