import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/currency-exchanger';

$(document).ready(function(){
  $('#exchange').click(function() {
    console.log("Button");
    //clearFields();
    ExchangeRate.getExchange()
      .then(function(response) {
        console.log(response.conversion_rates.AED);
        return response;
      });
  });
});