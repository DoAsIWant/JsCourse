/*

    1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
    каждый элемент которого будет хранить информацию о числе и его четности:
    [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]


*/

const firstArray = [1,2,3,5,8,9,10];
const isOdd = firstArray.map(el=>{
    return {
        digit: el,
        odd: el%2 === 0
    }
});
console.log(isOdd);

/*

    2.Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. 
      Если да - вернуть true

*/

const secondArray = [12,4,50,1,0,18,40];
const zeroEl = secondArray.some(el=>{
    return el === 0;
})
console.log(zeroEl);


/* 
     3.Проверить, все элементы массива имеют длину более 3х символов 
       ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true

*/

const thirdArray = ["yess","hello","no","easycode","what"];
const isGreater = thirdArray.every(el=>{
    return el.length  > 3;
})

console.log(isGreater);

/*

    4.Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:

    [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

    Напишите функцию, которая из элементов массива соберет и вернёт
    строку, основываясь на index каждой буквы. Например:
    [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”


*/

const fourthArray = [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
    {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
    {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]

const newString = fourthArray.sort((prev,next)=>{return prev.index - next.index}).reduce((acc,el)=>{
    acc+=el.char;
    return acc;
},"");

console.log(newString);


/*


    5. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы 
    (размер массива определяется его длиной): [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], 
    ['a', 'c', 'd'] ]


*/


const fifthArray =  [  [14, 45],  [1],  ['a', 'c', 'd']  ];
 fifthArray.sort((prev,next)=>{
    return prev.length - next.length;
})
console.log(fifthArray);


/*

    6. Есть массив объектов:
    [
        {cpu: 'intel', info: {cores:2, сache: 3}},
        {cpu: 'intel', info: {cores:4, сache: 4}},
        {cpu: 'amd', info: {cores:1, сache: 1}},
        {cpu: 'intel', info: {cores:3, сache: 2}},
        {cpu: 'amd', info: {cores:4, сache: 2}}
    ]

    Отсортировать их по возрастающему количеству ядер (cores).


*/

const sixthArray =  [
    {cpu: 'intel', info: {cores:2, сache: 3}},
    {cpu: 'intel', info: {cores:4, сache: 4}},
    {cpu: 'amd', info: {cores:1, сache: 1}},
    {cpu: 'intel', info: {cores:3, сache: 2}},
    {cpu: 'amd', info: {cores:4, сache: 2}}
]

sixthArray.sort((prev,next)=>{
    return prev.info.cores - next.info.cores;
});

console.log(sixthArray);
