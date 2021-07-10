/*  1. Чему равно а, почему? */

let a = 0 || 'string'; // string;
console.log("First",a);
a = 1 && 'string'; // string
console.log("Second",a)
 a = null || 25; // 25
console.log("Third",a)
a = null && 25; // null
console.log("Fourth",a)
a = null || 0 || 35; // 35
console.log("Fifth",a)
 a = null && 0 && 35; // null 
console.log("Sixth",a)

/* 2. Чему равно а, почему? */

let b = 12 + 14 + '12' // 2612
console.log("First ", b)
b = 3 + 2 - '1' // 4
console.log("Second ", b)
b = '3' + 2 - 1 // 31
console.log("Third ", b)
b = true + 2 // 3
console.log("Fourth ", b)
b = +'10' + 1 // 11
console.log("Fifth ", b)
b = undefined + 2 // NAN
console.log("Sixth ", b)
b = null + 5 // 5
console.log("Seventh ", b)
b = true + undefined // NAN
console.log("Eighth ", b)

/* 3. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden” */

let menu = "hidden";
menu = menu === "hidden" ? "visible" : "hidden";
console.log(menu);


/*
     4. Используя if, записать условие: если переменная равна нулю, присвоить ей 1;
      если меньше нуля - строку “less then zero”;
      если больше нуля - используя оператор “присвоение”, переменную умножить на 10
     (использовать краткую запись).
 */

let x = 0;

if(x===0){
    x=1
}else if(x<0){
    x = "less than zero"
}
else{
    x*=10;
}
console.log(x);


/*
   5. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }. 
      Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' 
      и свойство needRepair в объекте car изменить на true; иначе изменить на false.
*/

let car = {
    name: "Lexus",
    age:10,
    create: 2008,
    needRepair: false,
}

if(car.age > 5){
    console.log("Need Repair");
    car.needRepair = true;
}else{
    car.needRepair = false;
}
console.log(car);

/*

    6. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
    Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать 
    поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.

*/

let item = {
    name: "Intel core i7",
    price: "100$",
    discount: '15%',
}

if(item.hasOwnProperty("discount") && typeof(item.discount)!==NaN && item.hasOwnProperty("price")&& typeof(item.price)!==NaN){
    item.priceWithDiscount = parseInt(item.price) * (parseInt(item.discount)/100);
    console.log(`${item.priceWithDiscount} $`);
}

/*

    7. Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной 
        цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

*/

let product = {
    name: "Apple",
    price: "15$"
}

if(parseInt(product.price)>=10 && parseInt(product.price)<=25){
    console.log(product.name);
}
else{
    console.log("Продукта не найдено");
}
