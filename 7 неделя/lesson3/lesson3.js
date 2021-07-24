// Inheritance 

// Object Create - создаёт обьект спривязанным к нему прототипом

const protoForObj = {
    sayHello(){
        console.log("Hello");
    }
}

const obj = Object.create(protoForObj);
console.log(obj);

function User(firstname,lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

User.prototype.getFullName = function(){
    return `${this.firstname} ${this.lastname}`
}
const user = new User("Danil","Kutsenko");

// Customer 

function Custumer(firstname,lastname,membership){
    User.call(this,firstname,lastname);
}

const customer = new Custumer("Danil","Kutsenko","maybeworks");

Custumer.prototype = Object.create(User.prototype);
Custumer.prototype.constructor = Custumer;

/*

    1. Создать наследника от Planet, который будет называться PlanetWithSatellite 
    и будет принимать, кроме name, название спутника (satelliteName). 
    Переопределите методgetName для PlanetWithSatellite так, чтобы он 
    возвращал ту же самую строчку + дополнительный текст 'The satellite is' 
    + satelliteName.


*/

function Planet(name){
    this.name = name;
    this.getName = function(){
        return `Planet name is ${this.name}`
    }
}


function PlanetWithSatellite(name,satelite){
    Planet.call(this,name,satelite);
    this.satelite = satelite;
    this.getName = function(){
        return `The  satelite is ${this.satelite}`
    }
}

const planet = new PlanetWithSatellite("Earth","c4");
console.log(planet.getName())

/*

    2. Создайте класс “Здание” (пусть у него будет имя, количество этажей,
         метод “получить количество этажей” и метод “установить количество 
         этажей”).Создайте наследников этого класса:классы “Жилой дом” и 
         “Торговый центр”. Используйте функциональное наследование 
        У жилого дома появится свойство “количество квартир на этаже”, 
        а метод “получить количество этажей” должен вернуть объект вида 
        {этажи: 5, всегоКвартир: 5 * количествоКвартир} У торгового центра 
        появится свойство “количество магазинов на этаже”, а метод 
        “получить количество этажей” должен вернуть объект вида 
        {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
        От каждого класса создать экземпляр (дом, торговый центр)
*/

function Building(name, floors){
    this.name = name;
    this.floors = floors;
    this.getFloors = function(){
        return this.name;
    }

    this.setFloors = function(floor){
        this.floors = floor;
    }
}

function House(name,floors,flatsOnFloor){
    Building.call(this,name,floors);
    this.flatsOnFloor = flatsOnFloor;

    this.getFloors = function(){
        return {
            floors:this.floors,
            allFlats: this.floors * this.flatsOnFloor,
        }
    }
}

function Shop(name,floors,shopOnFloor){
    Building.call(this,name,floors);
    this.flatsOnFloor = shopOnFloor;

    this.getFloors = function(){
        return {
            floors:this.floors,
            allShops: this.shopOnFloor * this.shopOnFloor,
        }
    }
}

const shop = new Shop("KLASS",3,4);
console.log(shop.getFloors());
const house = new House("Dobrolybova",10,3);
console.log(house.getFloors());


/*


    3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом 
        “получить информацию” (метод должен вывести имя и цену). Метод должен
         быть объявлен с помощью прототипов (Func.prototype...). 
       Создайте наследника класса “Мебель” под названием “ОфиснаяМебель”. 
       Придумайте ему несколько свойству, которые будут характерны только для 
       этого класса. Метод “получить информацию” должен учитывать и добавленное
        вами новое свойство.Задача на переопределение метода у экземпляров класса.

*/

function Furniture(name,price){
    this.name = name;
    this.price = price;
}
function OfficeFurniture(name,price,discount){
    this.name = name;
    this.price = price;
    this.discount = discount;
}

Furniture.prototype.getFurniture = function(){
    return `Name: ${this.name} Price: ${this.price}`
}

OfficeFurniture.prototype.getFurniture = function(){
    return `Name: ${this.name} Price: ${this.price} Discount: ${this.discount}`
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.constructor = OfficeFurniture;

const office = new OfficeFurniture("BED",100,23);
console.log(office.getFurniture());


