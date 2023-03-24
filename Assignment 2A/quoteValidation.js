// /**
//  * Create a quote validation object - quoteValidation.
//   html form id = "orderForm"

function validate (orderForm) {

  var invalid;
  invalid = false;
    //validate the textboxes
    if (requiredFieldEmpty(theForm.firstName)) invalid = true;
    if (requiredFieldEmpty(theForm.lastName)) invalid = true;
    if (requiredFieldEmpty(theForm.street)) invalid = true;
    if (requiredFieldEmpty(theForm.suburb)) invalid = true;
    if (requiredFieldEmpty(theForm.email)) invalid = true;
    if (requiredFieldEmpty(theForm.prodId)) invalid = true;

    if(invalid) {
        document.getElementById('form-error').style.display = "inline-block";    //display the error message
        return false;       //stop the form submitting
    }
    return true;            //allow the form to submit
}

function requiredFieldEmpty (element){
  if(!element.value.length) {
      return true;
  }
}

// Date of Quote - Check format:dateQuote
// RegExp - Quote Date: required - format of dd/mm/yy
function dateQuoteRegExp () {
    var formString = document.getElementById("orderForm").dateQuote.value;
    var regExpression = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter valid date: dd/mm/yyyy");
    }
}

//RegExp - staffId required, 3 alpha, 4 numeric
function staffIdRegExp () {
    var formString = document.getElementById("orderForm").staffId.value;
    var regExpression = /^[a-zA-Z]{3}[0-9]{4}$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Staff Id: 3 letters, 4 numbers");
    }
}

//Customer Details:
// RegExp - firstName required, alpha, space[], hyphen, [-] characters only
function firstNameRegExp () {
    var formString = document.getElementById("orderForm").firstName.value;
    var regExpression = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter first name - letters only");
    }
  }

// RegExp - lastName required, alpha, space[], hyphen, [-] characters only
function lastNameRegExp () {
    var formString = document.getElementById("orderForm").lastName.value;
    var regExpression = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter Surname name - letters only");
    }
  }

// RegExp - street required, alpha, space[], hyphen, [-] characters only
function streetRegExp () {
    var formString = document.getElementById("orderForm").street.value;
    var regExpression = /^\d{1,3}.?\d{0,3}\s[a-zA-Z]{2,30}\s[a-zA-Z]{2,15}$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a valid address - no special characters");
    }
  }

// RegExp - suburb required, alpha, space[], hyphen, [-] characters only
function suburbRegExp () {
    var formString = document.getElementById("orderForm").suburb.value;
    var regExpression = /^[a-zA-Z]+(([\'\,\.\- ][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a valid suburb - no numbers or special characters");
    }
}


// RegExp - postcode required, 4 numeric digits
function postcodeRegExp () {
    var formString = document.getElementById("orderForm").postcode.value;
    var regExpression = /^(\d{4})$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a valid postcode: max 4 digits - no letters or special characters");
    }
}


// RegExp - phone required, 10 numeric digits
function phoneRegExp () {
    var formString = document.getElementById("orderForm").phone.value;
    var regExpression = /^(\d{10})$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a valid phone number: max 10 digits - no letters or special characters");
    }
}

// RegExp - email valid format
function emailRegExp () {
    var formString = document.getElementById("orderForm").email.value;
    var regExpression = /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a valid email address");
    }
}

// //Product Details:
// RegExp - prodId required
function prodIdRegExp () {
    var formString = document.getElementById("orderForm").prodId.value;
    var regExpression = /^(\d{10})$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a valid phone number: max 10 digits - no letters or special characters");
    }
}


// RegExp - prodName required, alpha, space[], hyphen, [-] characters only max=60
function prodNameRegExp () {
    var formString = document.getElementById("orderForm").prodName.value;
    var regExpression = /^(\d\w{1,60})$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a valid phone number: max 10 digits - no letters or special characters");
    }
}


// RegExp - quantity required, maxlength=20 min="1" numeric digits
function quantityRegExp () {
    var formString = document.getElementById("orderForm").quantity.value;
    var regExpression = /^(\d[1-20])$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a valid phone number: max 10 digits - no letters or special characters");
    }
}


// RegExp - unitPrice required, positive numbers only
function unitPriceRegExp () {
    var formString = document.getElementById("orderForm").unitPrice.value;
    var regExpression = /^(\d{10})$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a number greater than zero - no letters or special characters");
    }
}


// RegExp - deposit required, deposit < total  numeric digits positive
function depositRegExp () {
    var formString = document.getElementById("orderForm").deposit.value;
    var regExpression = /^(\d{10})$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter a number greater than zero and less than Total");
    }
}


// RegExp - requested install date: required - format of dd/mm/yy
function dateInstallRegExp () {
    var formString = document.getElementById("orderForm").dateInstall.value;
    var regExpression = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;
    if (regExpression.test(formString)) {
    }
    else {
      alert("Error: Please enter valid date: dd/mm/yyyy");
    }
}

// Check to confirm input is a number - QUANTITY
let quantVar1 = document.getElementById("orderForm").quantity1.value;
if (isNaN(quantVar1)){
var orderQuantVar1 = parseInt(quantVar1);
}

let quantVar2 = document.getElementById("orderForm").quantity2.value;
if (isNaN(quantVar2)){
    var orderQuantVar2 = parseInt(document.getElementById("orderForm").quantity2.value);
}

let quantVar3 = document.getElementById("orderForm").quantity3.value;
if (isNaN(quantVar3)){
    var orderQuantVar3 = parseInt(document.getElementById("orderForm").quantity3.value);
}
        
let quantVar4 = document.getElementById("orderForm").quantity4.value;        
if (isNaN(quantVar4)){
    var orderQuantVar4 = parseInt(document.getElementById("orderForm").quantity4.value);
}

let quantVar5 = document.getElementById("orderForm").quantity5.value;
if (isNaN(quantVar5)){
    var orderQuantVar5 = parseInt(document.getElementById("orderForm").quantity5.value);
}


// Check to confirm input is a number - UNIT PRICE
let unitPVar1 = document.getElementById("orderForm").unitP1.value;
if (isNaN(unitPVar1)){
  var orderUnitPVar1 = parseFloat(document.getElementById("orderForm").unitP1.value);
}

let unitPVar2 = document.getElementById("orderForm").unitPrice2.value;
if (isNaN(unitPVar2)){
  var orderUnitPVar2 = parseFloat(document.getElementById("orderForm").unitP2.value);
}

let unitPVar3 = document.getElementById("orderForm").unitPrice3.value;
if (isNaN(unitPVar3)){
  var orderUnitPVar3 = parseFloat(document.getElementById("orderForm").unitP3.value);
}

let unitPVar4 = document.getElementById("orderForm").unitPrice4.value;
if (isNaN(unitPVar4)){
  var orderUnitPVar4 = parseFloat(document.getElementById("orderForm").unitP4.value);
}

let unitPVar5 = document.getElementById("orderForm").unitPrice5.value;
if (isNaN(unitPVar5)){
  var orderUnitPVar5 = parseFloat(document.getElementById("orderForm").unitP5.value);
}

// Check to confirm input is a number - DEPOSIT
let depositVar = document.getElementById("orderForm").deposit.value;
if (isNaN(depositVar1)){
  var orderDepositVar = parseFloat(document.getElementById("orderForm").deposit.value);
}



let lineTtlVar1 = parseFloat(document.getElementById("orderForm").lineTtl.value);
  document.getElementById("orderForm").lineTtl1.value = orderQuantVar1*orderUnitPVar1;

let lineTtlVar2 = parseFloat(document.getElementById("orderForm").lineTtl2.value);  
  document.getElementById("orderForm").lineTtl2.value = orderQuantVar2*orderUnitPVar2;

let lineTtlVar3 = parseFloat(document.getElementById("orderForm").lineTtl3.value);  
  document.getElementById("orderForm").lineTtl3.value = orderQuantVar3*orderUnitPVar3;

let lineTtlVar4 = parseFloat(document.getElementById("orderForm").lineTtl4.value);  
  document.getElementById("orderForm").lineTtl4.value = orderQuantVar4*orderUnitPVar4;

let lineTtlVar5 = parseFloat(document.getElementById("orderForm").lineTtl5.value);
  document.getElementById("orderForm").lineTtl5.value = orderQuantVar5*orderUnitPVar5;

let subtotalVar = parseFloat(document.getElementById("orderForm").subtotal.value);
document.getElementById("orderForm").subtotal.value = (lineTtlVar1+lineTtlVar2+lineTtlVar3+lineTtlVar4+lineTtlVar5);
  
let gstVar = parseFloat(document.getElementById("orderForm").gst.value);  
document.getElementById("orderForm").gst.value = (subtotalVar/11);
  
let totalVar = parseFloat(document.getElementById("orderForm").total.value);
document.getElementById("orderForm").totalVar.value = subtotalVar+gstVar;


let totalDueVar = parseFloat(document.getElementById("orderForm").totalDue.value);
document.getElementById("orderForm").totalDueVar.value = totalVar-orderDepositVar;




// Update each Line Total on the order Form
function updatePrice (element) {
  var lineTtlVar1 = element.value;
  document.getElementById('lineTtl1').value = lineTtlVar1;
}

function updatePrice (element) {
  var lineTtlVar2 = element.value;
  document.getElementById('lineTtl2').value = lineTtlVar2;
}

function updatePrice (element) {
  var lineTtlVar3 = element.value;
  document.getElementById('lineTtl3').value = lineTtlVar3;
}

function updatePrice (element) {
  var lineTtlVar4 = element.value;
  document.getElementById('lineTtl4').value = lineTtlVar5;
}

function updatePrice (element) {
  var lineTtlVar5 = element.value;
  document.getElementById('lineTtl5').value = lineTtlVar5;
}
