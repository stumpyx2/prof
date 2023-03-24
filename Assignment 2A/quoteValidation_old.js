// /**
//  * Create a quote validation object - quoteValidation.
//   html form id = "orderForm"





// <form id="orderForm" onsubmit="validateForm()" onreset="loadForm()">
// <p>
// <select name="price" onchange="addtotal()">
// <option value="value1">Value 1</option>
// <select name="price" onblur="addtotal()">
// <option value="value1">Value 1</option>
// <p>Value 1: <input type="text" name="box1" onblur="checkValue(this);"></p>







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


quantVar1 = document.getElementById("orderForm").quantity1.value;
if (isNaN(quantVar1)){
var orderQuantVar1 = parseInt(quantVar1);
}

quantVar2 = document.getElementById("orderForm").quantity2.value;
if (isNaN(quantVar2)){
    var orderQuantVar2 = parseInt(document.getElementById("orderForm").quantity2.value);
}


var quantVar3 = parseInt(document.getElementById("orderForm").quantity3.value);
if (isNaN(quantVar3)){
    document.getElementById("orderForm").lineTtl3.value = quantVar3*unitPVar3;

}
        
quantVar4 = document.getElementById("orderForm").quantity4.value;        
if (isNaN(quantVar4)){
    var orderQuantVar4 = parseInt(document.getElementById("orderForm").quantity4.value);
}

quantVar5 = document.getElementById("orderForm").quantity5.value;
if (isNaN(quantVar5)){
    var orderQuantVar5 = parseInt(document.getElementById("orderForm").quantity5.value);
}




unitPVar1 = document.getElementById("orderForm").unitPrice1.value;
unitPVar2 = document.getElementById("orderForm").unitPrice2.value;
unitPVar3 = document.getElementById("orderForm").unitPrice3.value;
unitPVar4 = document.getElementById("orderForm").unitPrice4.value;
unitPVar5 = document.getElementById("orderForm").unitPrice5.value;

if (isNaN(unitPVar1)){
    var unitPVar1 = parseFloat(document.getElementById("orderForm").unitPVar1.value);
}


document.getElementById("orderForm").lineTtl1.value = orderQuantVar1*unitPVar1;
document.getElementById("orderForm").lineTtl2.value = quantVar2*unitPVar2;
document.getElementById("orderForm").lineTtl3.value = quantVar3*unitPVar3;
document.getElementById("orderForm").lineTtl4.value = quantVar4*unitPVar4;
document.getElementById("orderForm").lineTtl5.value = quantVar5*unitPVar5;


//  const lineTtl1 = {
//      quantity1*unitP1 

//  const lineTtl2 = {
//      quantity2*unitP2

//  const lineTtl3 = {
//      quantity3*unitP3 

//  const lineTtl4 = {
//      quantity4*unitP4

//  const lineTtl5 = {
//      quantity5*unitP5

//  const subTotal1 = {
//      lineTtl1+lineTtl12+lineTtl3+lineTtl4+lineTtl5

//  depositVar = document.getElementById("orderForm").deposit.value;
//  const deposit = {
//      form.deposit 

//  const totalDue = {
//      subTotal+gst-deposit 

//  const gst1 = {
//      lineTtl1+lineTtl1 


//   console.log("The quote validation object:", quoteValidation);

// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//   }

// let n = 1
// for{
//     quantity = quantity + 
//     n++
// }

//   let x, y, z;  // Statement 1
//   x = quantity;        // Statement 2
//   y = unitP;        // Statement 3
//   z = lineTtl;    // Statement 4
  
//   document.getElementById("demo").innerHTML =
//   "The value of z is " + z + ".";  

//   function addQuantity(num) {
//     var i;
//     for (i = 0; i < num; i++)
//     alert("Hello");
//     return;
//     }

//     function addQuantity(num) {
//         return(quantity1+quantity2+quantity+quantity+quantity)
//         quantity+quantity+quantity+quantity+quantity

//         When errors occur in user input the user must be alerted to these errors through appropriate 
//         inline messages (not alert boxes). You will need to add some appropriate CSS rules to quoteForm.css 
//         as well as modifying the HTML in exercise1.html 
//         to accommodate for the display of these inline messages.