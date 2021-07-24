// Classes 

class Products {
    constructor(brand,price,discount){
        this.brand = brand;
        this.price = price;
        this.discount = discount;
    }

  getPriceWithDiscount(){
      return (this.price - (100 * this.discount)) /100;
  }
  setPrice(newPrice){
      this.price = newPrice;
  }

  // Static methods

  static plus(x,y){
    return x + y;
  }

  // Вычисляемое свойство

  ["setPrice"](newPrice){
    this.price = newPrice;
  }

}

const product = new Products("ES4",200,12);
console.log(product);


/*

   1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы
     по умолчанию):

    function Component(tagName) {
    this.tagName = tagName || 'div';
    this.node = document.createElement(tagName);
    }

    Пример вызова:

    const comp = new Component('span'); 

*/

class Component{
    constructor(tagName){
        this.tagName = tagName || "div";
        this.node = document.createElement(tagName);
    }

    set setText(text){
        this.node.textcontent = text;
    }
}

const component = new Component("span");
component.setText("ff");


/*


    2. Создать класс калькулятора который будет принимать стартовое значение 
    и у него будут методы сложить, вычесть, умножить , разделить. 
    Также у него должны быть геттер и сеттер для получения и установки 
    текущего числа с которым производятся вычисления.


*/

class Calculator{
    constructor(value){
        this.value = value;
    }

    plus(plus){
        return this.value + plus;
    }

    minus(minus){
        return this.value - minus;
    }

    get getValue(){
        return this.value;
    }

    set setValue(newValue){
        this.value = newValue;
    }
}

const calculator = new Calculator(3);
calculator.plus(3);
console.log(calculator);


