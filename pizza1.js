/* homework 
 * Создать два прототипа являющиеся подтипами pizzaPrototype
 * Создать несколько объектов с помощью новых прототипов
 * Для getPrice можно использовать алгоритмы из прошлых заданий
 * Фантазия приветсвуется
*/

var pizzaPrototype = {
    getPrice: function () {
         return this.price;
    },
    getName: function () {
        return this.name;
    },
    getIngredients: function () {
        return this.ingredients.join(',');
    },
    form: 'rounded'
}
function makePizza(name, price, ingredients, proto) {
    var margarita = Object.create(proto, {
        'form': {
            value: 'square',
            iterable: true
        }
    });
    margarita.name = name;
    margarita.ingredients = ingredients;
    margarita.price = price;
    return margarita;
}

var margarita = makePizza ('margarita', 5, ['tomato', 'basil', 'mozarella'], pizzaPrototype);
var fourcheese = makePizza ('fourcheese', 7, ['mozarella, parmezan'], pizzaPrototype);
var salami = makePizza ('salami', 7, ['salami'], pizzaPrototype);

var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;  
});
var order = [margarita, fourcheese, salami];
var tips = {
    price: 10,
    getPrice: function () {
        return this.price;
    }
}
var tips = 10;
var price = order.reduce(function (prevVal, curVal) {
    return prevVal + curVal.getPrice();
}, tips);










