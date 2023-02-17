let serial = 0;

function displayData(productsName, productsPrice, ProductQuantity, priceTotal){
const container = document.getElementById("talbe-container");
const tr = document.createElement("tr");
tr.innerHTML = `
<td>${serial}</td>
<td>${productsName}</td>
<td>${productsPrice}</td>
<td>${ProductQuantity}</td>
<td>${priceTotal}</td>
`;
container.appendChild(tr);
};

function getTextElementById(textElementId){
  const textElement = document.getElementById(textElementId);
  const textElements = textElement.innerText;
  return textElements;
};

function getElementValueById(elementById){
  const elements = document.getElementById(elementById);
  const elementsString = elements.innerText;
  const elementsValue = parseInt(elementsString);
  return elementsValue;
};

function buttonDisabled(id){
  document.getElementById(id).setAttribute("disabled", true);
};

document.getElementById("btn-first").addEventListener("click", function(){
  serial = + 1
  const productsName = getTextElementById("first-card-title");
  const productsPrice = getElementValueById("coffee-price");
  const ProductQuantity = getElementValueById("coffee-quantity");
  const totalPrice = productsPrice + ProductQuantity;
  displayData(productsName, productsPrice, ProductQuantity, totalPrice);
  buttonDisabled("btn-first");
});

document.getElementById("btn-sceond").addEventListener("click", function(e){
  serial = serial + 1
  // console.log(e.target.parentNode.parentNode.children[0].innerText);
  const productsName = e.target.parentNode.parentNode.children[0].innerText;
  const productsPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
  const ProductQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
  const subTotal = parseInt(productsPrice ) - parseInt(ProductQuantity);
  displayData(productsName, productsPrice, ProductQuantity, subTotal);
  buttonDisabled("btn-sceond")
});

document.getElementById("btn-third").addEventListener("click", function (){
  serial = + 1
  const productsName = getTextElementById("third-card-title");
  const productsPrice = getElementValueById("biscuit-price");
  const ProductQuantity = getElementValueById("biscuit-quantity");
  const multiplicationTotalPrice = productsPrice * ProductQuantity;

  displayData(productsName, productsPrice, ProductQuantity, multiplicationTotalPrice);
  buttonDisabled("btn-third")
});

document.getElementById("btn-fourth").addEventListener("click", function (){
  serial = + 1
  const productsName = getTextElementById("fourth-card-title");
  const productsPrice = getElementValueById("eggs-price");
  const ProductQuantity = getElementValueById("eggs-quantity");
  const multiplicationTotalPrice = ( productsPrice / ProductQuantity).toFixed(2);

  displayData(productsName, productsPrice, ProductQuantity, multiplicationTotalPrice);
  buttonDisabled("btn-fourth")
});

document.getElementById("btn-five").addEventListener("click", function (){
  serial = + 1
  const productsName = getTextElementById("five-card-title");
  const productsPrice = document.getElementById("first-input").value;
  const ProductQuantity = document.getElementById("second-input").value;
  if(productsPrice === '' || productsPrice <= 0 || ProductQuantity === '' || ProductQuantity <= 0 || productsPrice <= ProductQuantity){
    return alert("Please Provide Valid Number");
  }
  const adtionTotalPrice = parseInt(productsPrice)  * parseInt(ProductQuantity);

  displayData(productsName, productsPrice, ProductQuantity, adtionTotalPrice);
  buttonDisabled("btn-five")
});