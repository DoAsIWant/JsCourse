// Object descriptor

const car = {
    brand: "Scoda",
    year: 2020,
    get age(){
        return `My car id ${this.brand}`
    },

    set age(value){
        this.year = value;
    }
}

Object.definePropery(car,"age",{  // настройки для свойств
    configuragle: false, // невозможно изменить или удалить
    enumerabe : false, // делает свойство итерируемым
    writable: false, // запрещает запись данного свойства

    get: function(){
        return `Машина выпущена в ${this.year}`
    }
})