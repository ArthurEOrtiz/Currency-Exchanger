export default class ExchangeRate {  
  static getExchange(targetCode, amount) {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/USD/${targetCode}/${amount}`)
      .then(function(response) {
        if (!response.ok) {
          
          throw Error(response.status);
        }
        return response.json();
      })
      .catch(function(error) {
      
        return error;
      });
  }
}