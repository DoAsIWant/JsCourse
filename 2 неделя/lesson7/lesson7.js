// this - контекст вызова

function getThis(){
    console.log(this)
}
getThis();

const product1 = {
    name: "Intel",
    price: 100,
    info: {
        information: ["3jg"],
        getInformation: function(){
            console.log(this);
        }

    },
    getPrice: function(){
        console.log(this.price)
    }
}

function getName(){
    console.log(this.name)
}

function getPrice(){
    console.log(this.price);
}

const product2 = {
    name: "Intel",
    price: 300,
    getPrice,
}
product1.getPrice();
product1.info.getInformation();

getName.call(product2); // вызывает функцию в переданном контексте
getPrice.apply(product2, ["#","%"]) // вызывает функцию в переданном контексте и принимает массив аргументов
const bindBrice = product2.getPrice.bind(product2)
