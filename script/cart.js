
let deleteItem = document.getElementsByClassName('del_btn');
let productAmount = document.getElementById('prd_amt');
let shippingCharge = document.getElementById('shipping_chrg');
let totalAmount = document.getElementById('total_amt');
let today = document.getElementById('today_date');
let expectedDate = document.getElementById('expected_date');

// Del Items
console.log(deleteItem);
for (i = 0; i < deleteItem.length; i++) {
    var button = deleteItem[i];
    button.addEventListener('click', function (event) {
        let buttonClicked = event.target;
        buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    });
}

// Inc & Dec
const decItemQuantity = (itemQty, itemPrice) => {
    let productQty = document.getElementById(itemQty);
    let productPrice = document.getElementById(itemPrice);

    if (productQty.value <= 0) {
        productQty.value = 0;
        alert('Atlaest 1 Quantity Added Must')
    }
    else {
        productQty.value = parseInt(productQty.value) - 1;
        productAmount.innerText = parseFloat(productPrice.innerText) * parseInt(productQty.value);
        totalAmount.innerText = parseInt(productAmount.innerText) + parseInt(shippingCharge.innerText);
    }
}

const incItemQuantity = (itemQty, itemPrice) => {
    let productQty = document.getElementById(itemQty);
    let productPrice = document.getElementById(itemPrice);

    if (productQty.value >= 8) {
        productQty.value = 8;
        alert('Maximum 8 Item Of Each Product');
    }
    else {
        productQty.value = parseInt(productQty.value) + 1;
        productAmount.innerText = parseFloat(productPrice.innerText) * parseInt(productQty.value);
        totalAmount.innerText = parseInt(productAmount.innerText) + parseInt(shippingCharge.innerText);
    }
}


// Delivery Date
function loadPage() {
    let todayDate = new Date();
    let month = todayDate.getMonth() + 1;
    let day = todayDate.getDay();
    let year = todayDate.getFullYear();
    today.innerText = (day + ' ' + month + ' ' + year);

    let expDate = new Date();
    let expMonth = expDate.getMonth() + 1;
    let expDay = expDate.getDay() + 5;
    let expYear = expDate.getFullYear();
    expectedDate.innerText = (expDay + ' ' + expMonth + ' ' + expYear);
}