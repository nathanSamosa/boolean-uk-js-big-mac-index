/* OBJECTS */
const unitedStates = {
    name: 'United States',
    price: 5.66,
    exchange: 1,
    currency: '$'
};

const unitedKingdom = {
    name: 'United Kingdom',
    price: 3.19,
    exchange: 1.37,
    currency: '£'
};

const china = {
    name: 'China',
    price: 21.71,
    exchange: 0.16,
    currency: '¥'
};

const australia = {
    name: 'Australia',
    price: 6.48,
    exchange: 0.74,
    currency: 'AU$'
};

/* ARRAYS */
var countryArr = [unitedStates, unitedKingdom, china, australia];
var currencyArr = [];
var indexArr = [];

/* VARIABLES */
var str = "";
var percentage;
var bigMac;

/* CALCULATE BIG MAC INDEX */
countryArr.forEach(function (object) {
    percentage = ((object.exchange - (unitedStates.price/object.price))/(unitedStates.price/object.price))*100;
    bigMac = Math.round(percentage) + "%";
    object.bigMac = bigMac;
    /* FORMAT PRICES WITH CURRENCIES */
    object.priceNew = object.currency + object.price;
});

/* RECORD UNITED STATES AND REMOVE FROM ARRAYS */
function removeControl() {
    document.getElementById("US_price").innerHTML = unitedStates.priceNew;
    currencyArr.shift();
    countryArr.shift();
}
removeControl();

/* DISPLAY COUNTRY INFO AS A LIST */
countryArr.forEach(function (object) {
    str +=
    '<h3>' + object.name + ':</h3>' + 
    '<ul>' + 
        '<li>Price: ' + object.priceNew + '</li>' + 
        '<li>Index: ' + object.bigMac + '</li>' + 
    '</ul>';
});
document.getElementById("results").innerHTML = str;

console.log(countryArr)