class ChristmasDinner {
    constructor(budget) {
        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping([...product]) {
        let productName = product[0];
        let productPrice = Number(product[1]);

        if (this.budget < productPrice) {

            throw new Error('Not enough money to buy this product');
        }

        this.budget -= productPrice;
        this.products.push(productName);

        return `You have successfully bought ${productName}!`
    }

    recipes(recipe){

        let recipeName = recipe.recipeName;
        let productsList = recipe.productsList;

        let productsExists = productsList.every(x => this.products.includes(x));

        if(!productsExists){

            throw new Error('We do not have this product');
        }

        this.dishes.push({
            recipeName,
            productsList
        })

        return `${recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish){

        let dishFind = this.dishes.find(x => x.recipeName == dish);

        if(!dishFind){
            throw new Error('We do not have this dish');
        }else if(this.guests[name]){
            throw new Error('This guest has already been invited');
        }

        this.guests[`${name}`] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance(){
        let result = '';

        for (const guest in this.guests) {
           let currentDish = this.dishes.find(x => x.recipeName == this.guests[guest]);
           result += `${guest} will eat ${this.guests[guest]}, which consists of ${currentDish.productsList.join(', ')}\n`;
        }

        return result.trim();
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
