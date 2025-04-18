// Declaramos una función con el nombre exacto "formEuroToDollar"
// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = (dollars) => dollars * (oneEuroIs.JPY / oneEuroIs.USD);

const fromYenToPound = (yens) => yens * (oneEuroIs.GBP / oneEuroIs.JPY)

const sum = (a, b) => a + b;

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };

