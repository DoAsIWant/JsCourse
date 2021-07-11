/*

    1. Используя rest оператор и деструктуризацию, создать функцию, 
    которая принимает любое количество аргументов и возвращает объект,
    содержащий первый аргумент и массив из остатка:

*/

function breakObj(){
    const [first,...other] = arguments;
    return{
        first,
        other
    }
}

const execute = breakObj(1,2,3,4,5);
console.log(execute);


/*


        2. Организовать функцию getInfo, которая принимает объект вида
        { name: ...,  info: { employees: [...], partners: [ … ]  } }
        и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и 
        первые две компании из массива partners:

        const organisation = {  
        name: 'Google',   
        info: { employees: [‘Vlad’, ‘Olga’], 
        partners: ['Microsoft', 'Facebook', 'Xing']   } 
        };
        getInfo(organisation); → 
        Name: Google 
        Partners: Microsoft Facebook



*/

const organisation = {  
    name: 'Google',   
    info: { employees: ["Vlad", "Olga"], 
    partners: ['Microsoft', 'Facebook', 'Xing']   
    } 
};

function getInfo({name,info:{partners:[first,second]=[]}}){
    return `Name: ${name} Partners ${first} ${second}`
}

console.log(getInfo(organisation));

