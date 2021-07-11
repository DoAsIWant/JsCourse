/* 
    1. Создайте функцию которая бы умела делать:
    minus(10)(6); // 4
    minus(5)(6); // -1
    minus(10)(); // 10
    minus()(6); // -6
    minus()(); // 0

*/

const minus = function(num){
    return function(x){
        return num - x;
    }
}

const calc = minus(10)(2);
console.log(calc);

/*
    2 .Подсказка, функция minus должна возвращать другую функцию.
    Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
    function multiplyMaker ...
    const multiply = multiplyMaker(2);
    multiply(2); // 4 (2 * 2)
    multiply(1); // 4 (4 * 1)
    multiply(3); // 12 (4 * 3)
    multiply(10); // 120 (12 * 10)

*/

const multiply = function(x){
    let result = 1;
    return function(num){
        result += x * num;
        return result;
    }
}

const mult = multiply(12);
console.log(mult(3));
console.log(mult(4));

/*

    3. Реализовать модуль, который работает со строкой и имеет методы:
        a. установить строку
        i. если передано пустое значение, то установить пустую строку
        ii. если передано число, число привести к строке
        b. получить строку
        c. получить длину строки
        d. получить строку-перевертыш

*/

function moduleString(){
    let string = ""
    function setString(value){
        if(value===""){
            string = ""
        }
        else if(typeof(value) === Number){
            string = value.toString();
        }
        else{
            string = value;
        }
    }

    function getString(){
        return string;
    }

    function getStringLength(){
        return string.length;
    }

    function getReversedString(){
        return string.split("").reverse().join("");
    }

    return {
        getReversedString,
        getString,
        setString,
        getStringLength,
    }

}

const strMethod = moduleString();
strMethod.setString("Ass We can");
console.log(strMethod.getReversedString())

const newFunct = function(){
    let x = 8;
    return function(){
        console.log(x);
    }
}

console.dir(newFunct);
