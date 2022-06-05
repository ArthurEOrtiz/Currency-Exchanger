import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/currency-exchanger';

$(document).ready(function(){
  $('#exchange').click(function(event) {
    event.preventDefault();
    const dollar = parseFloat($("#dollar").val()).toFixed(2);
    const targetCode = $("#codes").val();
    if ( dollar === 4){
      $("#output").hide();
      $("#error").show();
    } else {
      $("#output").show();
      $("#error").hide();
      ExchangeRate.getExchange(targetCode, dollar)
        .then(function(response) {
          if (response.result === "success") {
            $("#output").text(`${dollar} USD is worth ${parseFloat(response.conversion_result).toFixed(2)} ${targetCode}`);
          } else {
            $("#output").hide();
            $("#error").hide();
            $("#apiError").show();
            $("#apiError").text(`API ERROR STATUS ${response}`);
            console.log(response.status);
          }
        }); 
    }
  });
});



//if ( dollar === "NaN" || dollar < 0 || targetCode === "")