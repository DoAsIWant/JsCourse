const user = {
    firstName: "Danil",
    lastName: "Kutsenko",
}

const {firstName, lastName} = user; // дескруктуризация обьекта
console.log(firstName,lastName);

// Деструкторизация вложеного обьекта

const nestedUser = {
    firstName: "Herrington",
    lastName: "Billy",
    info:{
        nextDoor : false,
        master: true,
        skills: ["spanking","fisting"]
    }
}

const {info:{nextDoor,skills}} = nestedUser;
console.log(nextDoor);

// Деструктуризация массива

const colors = ["Black","Yellow","Red"];
const [a,b,c] = colors;
console.log(a,b,c);

// Деструктуризация массива (пропустить имена)
const names = ["Dan","Van","Mark"];
const [,name2,name3] = names;

// Nested Array 

const nestedArray = ["I am Billy", ["Herrington","Ass"]];
const [billy, [herrington,ass]] = nestedArray;
console.log(ass);

// Rest and Spread операторы

const animals = ["Dog","Horse","Cat"];
const [an1, ...animal] = animals;
console.log(animal);

const [...newAnimals] = animals;
console.log(newAnimals);

// spread

const newAnimals2 = [...animals];
console.log(newAnimals);

const newArray = ["SomeValue",...colors,...names];
console.log(newArray);

// копирование при помощи деструкторизации

const newUsers = {...user,age:30}

// rest spread in functions

function myPerson({lastName="#",firstName="?"}={}){
    console.log(lastName,firstName);
}

function funct(x,y){
    const[...args] = arguments;
    console.log(args);
}

funct(1,9,2,15);

function funct2(x,y){
    console.log(x,y);
}





