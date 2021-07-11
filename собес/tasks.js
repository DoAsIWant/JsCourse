// 1. Реализовать следующую функцию sum(3)(7) - 10

const sum = function(a,b){
    if(b){
        return a + b;
    }
    return function(x){
        return x + a;
    }
}

console.log(sum(2)(4));

// 2. Реализовать функцию bind - аналог

const person = {
    name: "Danil",
    logName: function(){
        console.log("Name: ", this.person)
    }
}

const person2 = {
    name: "Herrington",
}

const plus = (x,y)=>x+y;

Function.prototype.bind2 = function(context,...args){
    return (...args2)=>{
        return this.apply(context,[...args,...args2])
    }
}

console.log(plus.bind2(undefined,10)(3));

// Palindrom 

function isPalindrom(str){
    str = str.toLowerCase();

    return str === str.split("").reverse().join("");
}

const isReverse = isPalindrom("racecar");
console.log(isReverse);


// Fuz Bizz

function fuzzBizz(n){
    for(let i = 1; i<=n;i++)
    {
      if(i%3===0 && i%5===0){
          console.log("Fizz");
      }
      else if(i%5 === 0){
          console.log("Buzz");
      }
      else if(i%3===0){
          console.log("Fizz Buzz");
      }
      else{
          console.log(i);
      }
    }
}

fuzzBizz(100);

// Find Vowels

function findWowels(str){
    let count = 0;
    const vowels = ["a","e","o","u","y","i"];

    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++;
        }
    }

    return count;
}

const string = findWowels("Ass we can");
console.log(string); 