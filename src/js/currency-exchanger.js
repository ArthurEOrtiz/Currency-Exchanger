export default class ExchangeRate {  
  static getExchange() {
    return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })
      .catch(function(error) {
        return error;
      });
  }
}