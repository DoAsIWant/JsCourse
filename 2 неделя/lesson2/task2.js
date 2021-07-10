    /* 
        1. Записать в виде switch case следующее условие:
        if (a === ‘block’) {
            console.log(‘block’)
        } else if (a === ‘none’) {
            console.log(‘none’)
        } else if (a === ‘inline’) {
        console.log(‘inline’)
        } else {
            console.log(‘other’)
        }
    Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
    
    */

    let block = "inline";

    switch(block){
        case "block":
            console.log("block");
            break;
        case "inline":
            console.log("inline");
            break;
        case "none":
            console.log("none");
            break;
        default:
            console.log("other");
            break;
    }

    /*

     2. Используя if, записать условие: если переменная равна нулю, присвоить ей 1;
      если меньше нуля - строку “less then zero”;
      если больше нуля - используя оператор “присвоение”, переменную умножить на 10
     (использовать краткую запись).

    */

    let x = 0;
    x = x===0 ? 1 : x<0 ? "less than zero" : x*10;
    console.log(x);


