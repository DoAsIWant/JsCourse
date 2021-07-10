/*

    1.Создать объект, который описывает ширину и высоту
    прямоугольника, а также может посчитать площадь фигуры:
    const rectangle = {width:..., height:..., getSquare:...}; 

*/

let recctangle = {
    width:20,
    height: 30,
    getSquare: function(){
        console.log(`The square is ${this.width * this.height}`)
    }
}

recctangle.getSquare();


/*

    2.Создать объект, у которого будет цена товара и его скидка, а также
    два метода: для получения цены и для расчета цены с учетом скидки:
    const price = {
        price: 10,
        discount: '15%',
    };

*/

let product = {
    price: 10,
    discount: "15%",
    getPrice: function(){
        console.log(this.price);
    },
    getPriceWithDiscount: function(){
        let priceWithDiscount = this.price - this.price * (parseInt(this.discount))/100;
        console.log(`Price with discount is ${priceWithDiscount}`)
    }
}

product.getPrice();
product.getPriceWithDiscount();

/*

    3. Создать объект, у которого будет поле высота и метод “увеличить
        высоту на один”. Метод должен возвращать новую высоту:
        object.height = 10;
        object.inc(); // придумать свое название для метода
        object.height; // 11;


*/

let objHeight = {
    height:200,
    inc: function(){
        return this.height++;
    }
}
console.log(objHeight.height);
objHeight.inc();
console.log(objHeight.height);

/*

    4. Создать объект с розничной ценой и количеством продуктов. Этот
    объект должен содержать метод для получения общей стоимости
    всех товаров (цена * количество продуктов)

*/
function getSum(){
    return this.quantity * this.price
}

let productRetail = {
    quantity: 3,
    price: 200,
    getSum:getSum
}
let sum = productRetail.getSum();
console.log(sum);

/*
    5.Создать объект из предыдущей задачи. Создать второй объект,
    который описывает количество деталей и цену за одну деталь. Для
    второго объекта нужно узнать общую стоимость всех деталей, но
    нельзя создавать новые функции и методы. Для этого
    “позаимствуйте” метод из предыдущего объекта.

*/

let details = {
    quantity: 4,
    price:15,
}

let total = getSum.call(details);
console.log(total);


/*

    6.Даны объект и функция:
    let sizes = {width: 5, height: 10},
    getSquare = function () {return this.width * this.height};
    Не изменяя функцию или объект, получить результат функции
    getSquare для объекта sizes

    
*/

let sizes = {width: 5, height: 10},
getSquare = function () {return this.width * this.height};

console.log(getSquare.call(sizes));



