// Prototypes - Прототип - это свойство обьектов которое содержит свойства и методы своих родителей

function Car(name,brand,price,discount){
    this.name = name,
    this.brand = brand,
    this.price = price,
    this.discount = discount
}

const lambo = new Car("Lambo","13ee",100,12);

Car.prototype.getPriceWithDiscount = function(){
    return (this.price * (100 - this.discount))/100;
}
Car.prototype.setPrice = function(params) {
    this.price = params;
}

console.log(lambo.getPriceWithDiscount());