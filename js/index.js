const discount1MinPrice = 1640000;
const discount1MaxPrice = 3280000;
const discount1 = 15;

const discount2MinPrice = 3280000;
const discount2MaxPrice = 6560000;
const discount2 = 25;

const discount3MaxPrice = 6560000;
const discount3MinPrice = 9840000;
const discount3 = 35;

const computerPrice = 820000;
const input = document.getElementById("user-input");
const bnt = document.getElementById("calculate");
const results = document.getElementById('results');
const totalContainer = document.getElementById('totalPrice');
const discountContainer = document.getElementById('discountPrice');
const finalPriceContainer = document.getElementById('finalPrice');
const message = document.getElementById('message');


bnt.addEventListener("click", function () {
  let totalComputers = Number(input.value.trim());

  if(totalComputers || totalComputers !== 0){

    let totalPrice = computerPrice * totalComputers;
    let finalPrice = 0;
    let discount = 0;
    message.innerText = ''
  
    results.style.display = 'block'
  
    if (totalPrice >= discount1MinPrice && totalPrice <= discount1MaxPrice) {
      discount = (totalPrice * discount1) / 100;
    } else if (
      totalPrice >= discount2MinPrice &&
      totalPrice <= discount2MaxPrice
    ) {
        discount = (totalPrice * discount2) / 100;
    } else if (
    totalPrice >= discount3MinPrice &&
    totalPrice <= discount3MaxPrice
    ) {
      discount = (totalPrice * discount3) / 100;
    } else {
      message.innerText = "No hay descuento para esta compra"
    }
    
    finalPrice = totalPrice - discount;
    
    totalContainer.innerText = totalPrice;
    discountContainer.innerText = discount;
    finalPriceContainer.innerText = finalPrice;
  }
});