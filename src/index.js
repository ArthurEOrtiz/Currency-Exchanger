import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/currency-exchanger';

$(document).ready(function(){
  $('#exchange').click(function() {
    const dollar = parseFloat($("#dollar").val()).toFixed(2);
    console.log(dollar);
    const targetCode = $("#codes").val();
    console.log(targetCode);

    ExchangeRate.getExchange(targetCode, dollar)
      .then(function(response) {
        console.log(response.conversion_result);
        return response;
      });
  });
});