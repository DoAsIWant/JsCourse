// Замыкание - это когда функция может обращаться к переменным из лексического окружения выше

function greeting(firstname,lastName){
    return function(){
        return `Hello ${firstname} ${lastName}`
    }
}

const hello = greeting("Danil","Kutsenko")();
console.log(hello);

function updateValue(val){
    let x = val;
    const newLocal = function(num){
        return x+=num
    }
    return newLocal;
}

const newValue = updateValue(10);
console.log(newValue(2));

function checkCard(){
    const login = "Danil",
    const password = "1234";

    return{
        checkLogin(value){
            return login === value
        },

        checkPassword(value){
            return password === value;
        }
    }
}

function closureExample(){
    const arrayFunct = [];
    let value = "";
    for(let i = 0; i<10; i++){
        value+=i;
        arrayFunct.push(function(){
            console.log(value,i)
        })
    }
}
