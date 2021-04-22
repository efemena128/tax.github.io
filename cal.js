function submitIncome() {
  var income = document.getElementById("income").value;

  var calculateTaxFoo = function() {
    var fooTax = document.getElementById("foo-tax");
    if (income <= 100000) {
      fooTax.value = (income * 0.1).toFixed(2);
    } else if (income > 100000 && income <= 200000) {
      fooTax.value = (income * 0.15).toFixed(2);
    } else if (income > 200000) {
      fooTax.value = (income * 0.2).toFixed(2);
    }
    return fooTax.value;
  };

  var calculateTaxBar = function() {
    var barTax = document.getElementById("bar-tax");
    if (income <= 100000) {
      barTax.value = (income * 0.13).toFixed(2);
    } else if (income > 100000 && income <= 200000) {
      barTax.value = (income * 0.15).toFixed(2);
    } else if (income > 200000) {
      barTax.value = (income * 0.16).toFixed(2);
    }
    return barTax.value;
  };

  calculateTaxFoo();
  calculateTaxBar();

  function compareTax() {
    var messages = document.querySelectorAll(".message"); 
    var taxInputs = document.querySelectorAll(".tax-input input[readonly=true]");
    // reset classes on each submit
    _.forEach(taxInputs,function(taxInput){
      taxInput.parentNode.classList.remove("lowest-tax")
    });
    _.forEach(messages,function(message){
      message.classList.remove("show")
    });
    
    var fooTax = calculateTaxFoo();
    var barTax = calculateTaxBar();
    
    if (fooTax < barTax) {
      document.querySelector(".message--foo").className += " show";
      document.querySelector(".tax-input--foo").className += " lowest-tax";
    } else if (fooTax == barTax) {
      document.querySelector(".message--equal").className += " show";
      _.forEach(taxInputs,function(taxInput){
        taxInput.parentNode.classList.add("lowest-tax")
      });
    } else {
      document.querySelector(".message--bar").className += " show";
      document.querySelector(".tax-input--bar").className += " lowest-tax";
    }
  }

  compareTax();
}
