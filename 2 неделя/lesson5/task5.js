/*
    5. Создать функцию, которая принимает число n и возвращает массив, 
    заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
    Данное задание выполните после того как познакомитесь с методами массивов.
*/

    function createArray(n){
        let newArray = [];
        for(let i = 1; i<n;i++){
            newArray.push(i);
        }
        return newArray;
    }

    let firstArray = createArray(10);
    console.log(firstArray);

/*
    6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами
    входного массива. Данное задание выполните после того как познакомитесь с методами массивов:
    doubleArray([1,2,3]) // [1,2,3,1,2,3]
*/

    function doubleArray(array){
        if(Array.isArray(array)){
            let doubleArray = array.concat(array);
            return doubleArray;
        }
        else{
            console.log("It is not an array")
        }
    }

    let secondArray = doubleArray([1,67,23]);
    console.log(secondArray);

/*
    7. Создать функцию, которая принимает произвольное (любое) число массивов
    и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений. 
    Данное задание выполните после того как познакомитесь с методами массивов: 
    changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д
*/


function deleteFirstEl(){
    let thirdArray = [];
    for(let i = 0; i < arguments.length;i++){
      let element = arguments[i].slice();
      console.log(element);
      element.shift();
      thirdArray.push(element);
    }
    return thirdArray;
}

let thirdArray = deleteFirstEl([1,4],[17,23]);
console.log(thirdArray);


/*

    8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить 
    и значение на которое хочу проверять. Проверять что все аргументы переданы. 
    Возвращать новый массив с пользователями соответсвующие указанным параметрам.
    Данное задание выполните после того как познакомитесь с методами массивов

*/

let fourth = [ {name: "Denis", age: 29, gender: "male"} , {name: "Ivan", age: 20, gender: "male"} ]

function checkUser(user,key,value){
    let result = [];
    for(let i = 0; i<user.length;i++){
        if(user[i][key] === value){
            result.push(user[i]);
        }
    }

    return result;
}

let checkuser = checkUser(fourth, "gender","male");
console.log(checkuser);

