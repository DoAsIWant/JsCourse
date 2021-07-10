/*


    1.Создать две функции и дать им осмысленные названия:
    - первая функция принимает массив и колбэк (одна для всех вызовов)
    - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

    Первая функция возвращает строку “New value: ” и результат обработки:

    firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
    firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
    firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
    “New value: Jhon is 45, Aaron is 20,”
    firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются


    Подсказка: secondFunc должна быть представлена функцией, которая принимает
    один аргумент (каждый элемент массива) и возвращает результат его обработки


*/

function firstFunc (array,cb){
    let result = [];
    for(let i = 0; i<array.length;i++){
        result.push(cb(array[i]))
    }
    return result;
}


let concatination = firstFunc(["my","name","is","Trinity"],(el)=>{
   return el.toUpperCase();
});

let multipleArray = firstFunc([10,20,40],(el)=>{
    return el*10;
})

let getName = firstFunc([{age: 45, name: "Jhon"}, {age: 20, name: "Aaron"}],(el)=>{
    return `${el["name"]} is ${el["age"]}`;}
)

let reverseString = firstFunc(["123","gnj"],(el)=>{
    return el.split("").reverse().join("");
})

console.log(concatination);
console.log(multipleArray);
console.log(getName);
console.log(reverseString);