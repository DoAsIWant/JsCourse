/*

    1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова 
    будут в верхнем регистре. Использовать for или while.

*/

let string = "i am in the easycode";
let result1 = "";

for(let i = 0;i<string.length;i++){
    if(string[i] === " " ){
      result1+= string[i+1].toUpperCase();
    }
    else{
        result1+=string[i];
    }

}

console.log(result1);

/*
    2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква
      становится первой, предпоследняя - второй итд).
*/

let string2 = "tseb eht ma i";
let result2 = "";

for(let i = string2.length-1; i>=0;i--){
    result2 += string2[i];
}
console.log(result2);

/*
    3. Факториал числа - произведение всех натуральных чисел от 1 до n
       включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. 
       Использовать for.
*/

let number = 6;
let factorial = 1

for(let i = 1; i<=number;i++){
    factorial*=i
}
console.log(factorial);


/*
    4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
    где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
/*

/*
    5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. 
        Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
    
*/

let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for(let num of array1){
    if(num%2===1){
        console.log(num);
    }
}

/*
    6. Дан объект:
    let list = {
        name: ‘denis’,
        work: ‘easycode’,
        age: 29
    }
    Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
    Использовать for in.
*/

let list = {
    name:"Danil",
    work: "Aim ProSoft",
    age:21
}


for(key in list){
    if(typeof(list[key])=== "string"){
        console.log(list[key].toUpperCase())
    }

}

