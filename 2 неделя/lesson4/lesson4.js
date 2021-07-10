// Function (decraration,expression);

// Declaration

function sayHello(firstName,lastName){
    console.log(`Hello ${firstName} ${lastName}`)
}

sayHello("Danil","Kutsenko");

let x = 10 ;

function funct(){
    x=20;
    console.log(x)
}

const user = {
    name: "Danil",
    age:21,

}
function getObj(obj){
    obj.name = "Van";
    console.log(obj);
}
getObj(user);

// Function expression

let myFunc = function(x){
    return x*x;
}

