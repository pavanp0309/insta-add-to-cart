// loading the data from the storage (database ) into ui

document.addEventListener("DOMContentLoaded", () => {
  // loading the items for local storage
  LoadCart();
});

// empty array to store cart Items
let cartItems = [];

//🎯 loading the Items form Local storage
function LoadCart() {
  let cartvalues = localStorage.getItem("cart");
  if (cartvalues) {
    cartItems = JSON.parse(cartvalues);
    // updating the cart Ui
    UpdatecartUi();
  }
}

function UpdatecartUi() {
  let cartsect = document.querySelector(".cart");
  cartsect.innerHTML = "";

  // step2 : printing the items
  cartItems.forEach((ele) => {
    let cartprod = document.createElement("div");
    cartprod.className = "col-12 col-sm-12 col-md-3 col-lg-3";

    // attaching the card section to cols
    cartprod.innerHTML = `
           <div class="card product">
          <img src=${
            ele.image
          } class="card-img-top prod-img" height="200px" alt="...">
          <div class="card-body prod-info">
            <h5 class="card-title prod-title">${ele.title}</h5>
            <div class="d-flex justify-content-between">
            <p class="card-text price"><i class="bi bi-currency-rupee"></i>${
              ele.Price * ele.quantity
            }</p>
           
            <div class="cart-values">
             <button class="btn btn-success increment">+</button>
             <span class="q-val">${ele.quantity}</span>
             <button class="btn btn-danger decrement">-</button>
            </div>
            <button class="btn btn-warning remove">Delete</button>
            </div>
          </div>
        </div>
        `;

    // adding the Functinalities for increment decrement and Remove

    let incrementBtn = cartprod.querySelector(".increment");
    let decrementBtn = cartprod.querySelector(".decrement");
    let quantityVal = cartprod.querySelector(".q-val");
    let removeBtn = cartprod.querySelector(".remove");

    //  ➕🧸  increment
    incrementBtn.addEventListener("click", () => {
      handleIncrement(quantityVal, ele);
    });

    //  ➖🧸  decrement
    decrementBtn.addEventListener("click", () => {
        handledecrement(quantityVal, ele);
    });

    // appending the child element to parent
    cartsect.appendChild(cartprod);
  });
}

// function to increemnt the value
function handleIncrement(quantityVal, ele) {
  let incr = ele.quantity++;
  quantityVal.innerText = incr;
  localStorage.setItem("cart",JSON.stringify(cartItems))
  UpdatecartUi();
}

// function to decreemnt the value
function handledecrement(quantityVal, ele) {
  if (ele.quantity > 1) {
      ele.quantity--;
    quantityVal.innerText = ele.quantity;
    localStorage.setItem("cart",JSON.stringify(cartItems))
    UpdatecartUi();

  }
}
