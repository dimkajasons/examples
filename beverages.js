        // Prototype Beverage 
    //Alcohol              // Non Alcohol
//pure //cocktail

var beverageProto = {
    _name: "some drink",
    _price: 1,
    _volume: 50,
    setName: function (name) {
        this._name = name
    },
    setPrice: function (price) {
        this._price = price
    },
    setVolume: function (volume) {
        this._volume = volume
    },
    getName: function () {
        return this._name
    },
    getPrice: function () {
        return this._price
    },
    getVolume: function () {
        return this._volume
    }
}
var alcoholProto = Object.create(beverageProto);
alcoholProto.getName = function () {
    return this._name.toUpperCase();
}

alcoholProto.setStrength = function (strength) {
    this._strength = strength;
}
alcoholProto.getStrength = function () {
    return this._strength;
}

var tequila = Object.create(alcoholProto)
tequila.setName('Tequila')
tequila.setStrength(38);
tequila.getName = function () {
    return this._name + '!!!'
}
console.log(tequila.getStrength());
console.log(tequila.getName());

// Начало Д/З

var coctailProto = Object.create(alcoholProto);
coctailProto.setIngredients = function(arr) {
    this.ingredients = arr;
}
coctailProto.getIngredients = function() {
    return this.ingredients;
}

var b52 = Object.create(coctailProto);
b52.setIngredients(['coffee liqueur', 'liquor triple sec', 'ayrish krim'])
b52.setStrength(30);
console.log(b52.getStrength());
console.log(b52.getIngredients());

var nonAlcoholProto = Object.create(beverageProto)
var water = Object.create(nonAlcoholProto);
water.setName('water');
console.log(water.getName())