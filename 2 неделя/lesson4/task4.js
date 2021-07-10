/*
  
    1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать 
      их произведение: multiply(1,2,3) = 6 (1*2*3)

*/

function multiply(){
    let mult = 1;
    for(let i = 0; i<arguments.length;i++){
        mult*=arguments[i]
    }
    return mult;
}
let mult = multiply(1,8,2);
console.log(mult);


/*

    2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’)

*/

function reverseString(str){
    let result = ""
    for(let i = str.length-1 ; i>=0;i--){
        result+=str[i]
    }
    return result;
}

let reversed = reverseString("Reversed");
console.log(reversed);


/*

   3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
      где каждый символ разделен пробелом и заменен на юникод-значение символа: 


*/


function getCharCode(string){
    let codeStr = ""
    for(let i = 0; i<string.length;i++){
        codeStr += string.charCodeAt(i) + " ";
    }
    return codeStr;
}

let charCode = getCharCode("ABJHFLDK");
console.log(charCode);


/*

    4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не 
       больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом
       если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало 
       число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

*/

function guessNumber(number){
    if(number>=0 && number <=10){
        let random = Math.floor(Math.random()*10);
        if(random === number){
            console.log("Вы выиграли")
        }
        else{
            console.log(`Вы не угадали, ваше число ${number} а выпало ${random}`)
        }
    }
}

guessNumber(10);
