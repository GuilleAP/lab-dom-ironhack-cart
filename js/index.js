// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  
  //... your code goes here
  let price = product.querySelector(".price span").innerText;
  let quantity = product.querySelector(".quantity input").value;

  let subTotalPrice = price * quantity;

  let subTotal = product.querySelector(".subtotal span");
  
  subTotal.innerHTML = subTotalPrice;

  return subTotalPrice;
}

function calculateAll() {
  // ITERATION 2
  //... your code goes here
  let products = document.querySelectorAll(".product");

  for(let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]);
  }


  // ITERATION 3
  //... your code goes here
  let totalPrice = 0;

  products.forEach(product => {
    let productTotalPrice = product.querySelector(".subtotal span");
    totalPrice += Number(productTotalPrice.innerHTML);
  })

  let total = document.querySelector("#total-value span");
  total.innerText = totalPrice;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();


}

// ITERATION 5

function createProduct() {
  //... your code goes here
  let productName = document.querySelectorAll(".create-product input");
  let productTr = document.querySelector(".product").cloneNode(true);

  console.log(productTr);
  
  productTr.querySelector(".name span").innerText = productName[0].value;
  productTr.querySelector(".price span").innerText = productName[1].value;

  document.querySelector("tbody").appendChild(productTr);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here

  let removeBtn = document.querySelectorAll(".btn-remove");
  removeBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  })

  let buttonCreate = document.querySelector("#create");
  buttonCreate.addEventListener('click', createProduct);

});
