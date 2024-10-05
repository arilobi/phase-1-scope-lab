var customerName = 'bob';

function customerName(){
    return customerName;
}
console.log(window.customerName('bob'));

function upperCaseCustomerName(){
    customerName = customerName.upperCaseCustomerName()
}
console.log(window.customerName('BOB'));

function setBestCustomer(){
    bestCustomer = 'not bob';
}
console.log(bestCustomer);

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
console.log(bestCustomer);

const leastFavoriteCustomer = "Jackie";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Sally";
}
console.log(changeLeastFavoriteCustomer('Assignment to constant variable'));