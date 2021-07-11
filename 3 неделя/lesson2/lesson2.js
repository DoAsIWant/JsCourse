// Перебирающие методы масиива

// forEach
// filter 
// map - возвращает новый массив на основе вызова колбека
// some, every - some(хотя-бы один елемент удовлеворяет) every- каждый елемнет

const users = [
    {
      "_id": "5d220b10e8265cc978e2586b",
      "isActive": true,
      "balance": 2853.33,
      "age": 20,
      "name": "Buckner Osborne",
      "gender": "male",
      "company": "EMPIRICA",
      "email": "bucknerosborne@empirica.com",
      "phone": "+1 (850) 411-2997",
      "registered": "2018-08-13T04:28:45 -03:00"
    },
    {
      "_id": "5d220b10144ef972f6c2b332",
      "isActive": true,
      "balance": 1464.63,
      "age": 38,
      "name": "Rosalie Smith",
      "gender": "female",
      "company": "KATAKANA",
      "email": "rosaliesmith@katakana.com",
      "phone": "+1 (943) 463-2496",
      "registered": "2016-12-09T05:15:34 -02:00"
    },
    {
      "_id": "5d220b1083a0494655cdecf6",
      "isActive": false,
      "balance": 2823.39,
      "age": 40,
      "name": "Estrada Davenport",
      "gender": "male",
      "company": "EBIDCO",
      "email": "estradadavenport@ebidco.com",
      "phone": "+1 (890) 461-2088",
      "registered": "2016-03-04T03:36:38 -02:00"
    }
  ];

  // forEach - пробегает по всем елементам массива
  users.forEach((el,index,arr)=>{
      console.log(el,index,arr);
  });

  // filter - отфильровать массив

  const underThirty = users.filter(el=>{
      return el["age"] < 30
  })
  console.log(underThirty);

  // Map - Позволяет создать новый массив из того что возвращает массив

const names = users.map(el=>{
    return el["name"],el["age"];
});
console.log(names);

// Reduce

const totalBalance = users.reduce((acc,user)=>{
    console.log(acc);
    return acc +=user.balance;
},0);

console.log(totalBalance);

const userObj = users.reduce((acc,user)=>{
    acc[user._id] = user;
    return acc;

},{});

console.log(userObj);

// Some

const isMale = users.some(el=>{
    return el.gender === "male";
});

console.log(isMale);

// Every 

const isMore18 = users.every(el=>{
    return el.age > 18;
})

console.log(isMore18);

// find - найти елемент

const user = users.find(el=>{
    return el.name === "Buckner Osborne";
})
console.log(user);

// Sort - сортировка массива

const strArray = [9,10,8,4,5,23];
strArray.sort((a,b)=>{
    return a - b;
});
console.log(strArray);