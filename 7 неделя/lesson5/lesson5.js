class UserES{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

class CustomerUser extends UserES{
    constructor(firstName,lastName,membership){
        super(firstName,lastName);
        this.membership = membership;
    }

    getFullName(){
        const parentRes = super.getFullName();
        return `${parentRes} ${this.membership} `
    }
}

const customer = new CustomerUser("Danil","Kutsenko","MaybeWorks");
console.log(customer.getFullName());

