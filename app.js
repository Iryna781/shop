let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

//add to cart
let addToCartBtns = document.querySelectorAll(".btn-add");
// console.log(addToCartBtns);

// for (let i = 0; i < addToCartBtns.length; i++) {
//     addToCartBtns[i].addEventListener("click", function () {
//         console.log("Clicked");
//     });
// } 

// for (let i = 0; i < addToCartBtns.length; i++) {
//         addToCartBtns[i].addEventListener("click", function () {
//         let prevProductsCount = +productsCountEl.textContent;
//         productsCountEl.textContent = prevProductsCount + 1;
//         });
// }



for (let i = 0; i< addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}


// for (let i = 0; i < addToCartBtns.length; i++) {
//     addToCartBtns.forEach((item) => {
//     item.addEventListener("click", function(){
//         console.log("clicked foreach");
//     });
// });




//modal
let moreDetailsBtns = document.querySelectorAll(".btn-submit");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");
console.log(btnClose);

// console.log(moreDetailsBtns);
// console.log(modal);

moreDetailsBtns.forEach((item) => {
  item.addEventListener("click", function () {
    modal.classList.add("show");
    modal.classList.remove("hide");
  });
});

btnClose.addEventListener("click", function () {
  modal.classList.add("hide");
  modal.classList.remove("show");
});

moreDetailsBtns.forEach((item) => {
    item.addEventListener("click", openModal);
});

btnClose.addEventListener("click", closeModal); 

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}
function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

// modal.addEventListener("click", function (e) {
//   if (e.target === modal) {
//     closeModal();
//   }
// });
