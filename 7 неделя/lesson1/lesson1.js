// Function Constructors

const str = new String("Hello world");
console.log(str);

function Product(brand,price,discount){
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.getPriceWithDiscount = function(){
        return (this.price * (100 - discount))/100
    }
}

const product = new Product("Samsung",1000,14);
console.log(product);