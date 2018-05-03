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

var water = Object.create(beverageProto);

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
