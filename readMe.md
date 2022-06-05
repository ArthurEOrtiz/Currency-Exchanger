# Currency Exchanger
_By Arthur Edward Ortiz_

## Scope / Assignments 

For this section's project, you'll create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the [following exchange rate API.] (https://www.exchangerate-api.com/)

* A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won). The user should then see the total amount they entered in converted currency. In the example above, a user might enter 10 dollars and then see that amount in South Korean won.
* Users should be able to convert U.S. currency into at least 5 other types of currency.
* If the API call results in an error (any message not a 200 OK), the application should return a notification to the user that states what the error is. (That means the error should show up in the DOM, not in the console.)
* If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist. (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

## Technologies Used 
* CSS
* HTML 
* eslint
* Boostrap
* JQuery
* Jest       

## Setup / Installation 

1. Clone repo onto your computer.
2. Go to[ExchangeRate-API](https://www.exchangerate-api.com/),aquire an API Key.
3. Create a .env file in your root directory and paste `API_KEY=` appended by your API key. 
2. Open directory via teriminal and excute `$ npm install`
3. Once installed, in the terminl, excute  `$ npm run build`
4. Complete a test of all the functions with `$npm run test`
5. Then to open the project in your browser, run `$ npm run start`


## Known Bugs 

## License
_Copyright (c) June 3, 2022 Arthur Edward Ortiz MIT_