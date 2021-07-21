// First task - Make string T-E-S-T

const aray = ["t","Aed","ehj","T","klkjjk","e","s"];
const newArray = aray.filter((el)=>{
    return el.length === 1;
});

console.log(newArray.join("-").toUpperCase());

// Second tast - Make objectfrom array

const colors = ["red","blue","green"];

const objFromArray = colors.reduce((acc,el,index)=>{
    acc[el] = index;
    return acc;
},{});
console.log(objFromArray);

// Third task - Make counter

const makeCounter = (num)=> ()=> num--;

let count = makeCounter(10);
console.log(count());
console.log(count())

// Fourth task - Make function delay

const delay = (time)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve();
        },time)
    })
}
const fn = async () => {
    console.log(1)
    await delay(5000)
    console.log(1)
}

fn();
