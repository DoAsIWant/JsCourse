// Функции высшего поряда - колбек

const arr = ["Darkholme","Herrington","Mark"];

function getLength(arr,cb){
    let result = [];
    for(let i = 0; i<arr.length;i++){
        result.push(cb(arr[i]))
    }
    return result;
}

let newArray = getLength(arr,(el)=>{
    return el.toUpperCase()
})
console.log(newArray);

// Функции которые возвращают другие фу-и

function greeting(firstName){
    return function(lastName){
        return `Hello ${firstName} ${lastName}`;
    }
}

let testGreeting = greeting("Danil");
let fullName = testGreeting("Kutsenko");

console.log(fullName);

function question(job){
    if(job === "developer"){
        return function(name){
            return ` ${name} what is JS`
        }
    }
    else if(job === "teacher"){
        return function(name){
            return ` ${name} what subject do you teacsh`
        }
    }
}

let quest = question("developer");
console.log(quest("Danil"))