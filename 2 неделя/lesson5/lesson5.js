// Array Methods
let value;
const numArray = [2,4,8,13,19];
console.log(Array.isArray(numArray));

// indexOf

value = numArray.indexOf(2);
console.log(value)

// push - добавление в конец

value = numArray.push(100);
console.log(value);

// pop - вырезать с конца
value = numArray.pop();
console.log(value);

// unshift
value = numArray.unshift(3);
console.log(value);

// shift
value = numArray.shift();
console.log(value);

// slice - вырезать c 0 по 3 (например)

value = numArray.slice(0,3);
console.log(value);

//splice - вырезать с 0 количество элементов
value = numArray.splice(1,4);
console.log(value);

// reverse - перевернуть массив
value = numArray.reverse();
console.log(value);

// concat - соеденить массивы
value = numArray.concat([1,2,3]);
console.log(value)

// join - из массива сделать строку
value = numArray.join(" ");
console.log(value);

// split - из строки массив
value = "Hello".split(" ");
console.log(value);



