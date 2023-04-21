// 1
function squareNumber(number) {
    return number * number;
  }
  console.log(squareNumber(2));

// 2
function discountPrice(price, discount){
    const discountAmount = price * (discount/100);
    const finalprice = price - discountAmount;
    return finalprice;
}
console.log(discountPrice(1000, 10));

// 3
function randomNumber() {
    return Math.round(Math.random() * 100);
}
const randomNum = randomNumber();
console.log(randomNum);

// 4
function stringSize(string) {
    return string.length;
  }
  var nameString = "my name is nika";
  var stringLength = stringSize(nameString);
  console.log(stringLength);

// 5
const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];
function findLowestRateCurrency(currencies) {
    let lowestRateCurrency = currencies[0]; 
    for (let i = 0; i < currencies.length; i++) {
      if (currencies[i].rate < lowestRateCurrency.rate) {
        lowestRateCurrency = currencies[i];
      }
    }
    return lowestRateCurrency;
  }

const lowestRateCurrency = findLowestRateCurrency(currencies);
console.log(lowestRateCurrency);