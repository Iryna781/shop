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

modal.addEventListener("click", function (e) {
//   console.log(e);
//   console.log(e.target);
    if (e.target === modal) {
    closeModal();
  }
});

//toggle like state
let likeBtns = document.querySelectorAll(".heart");
// console.log(likeBtns);
likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    // if (item.classList.contains("liked")) {
    //   item.classList.remove("liked");
    // } else {
    //   item.classList.add("liked");
    // }
    item.classList.toggle("liked");
      //  console.log("click");
   });
});

// console.log(document.body.scrollHeight);

function showModalByScroll() {
  if (window.scrollY > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);
// setTimeout(openModal, 5000);

//add slider
// $(".slider-block").slick();

$(".slider-block").slick({
  dots: true,
});

let decrementBtns = document.querySelectorAll(".decrement");
let incrementBtns = document.querySelectorAll(".increment");
let inputFields = document.querySelectorAll(".product-quantity input");

console.log(decrementBtns);
console.log(incrementBtns);
console.log(inputFields);

incrementBtns.forEach((item, i) => {
  item.addEventListener("click", function(){
   let currentCount = +inputFields[i].value;
   inputFields[i].value = currentCount + 1;

  });
});

decrementBtns.forEach((item, i) => {
  item.addEventListener("click", function(){
   let currentCount = +inputFields[i].value;
   inputFields[i].value = currentCount - 1;

  });
});

// let audi = {
//   model:"A4",
//   year: 2012,
//   color:"black",
// };
// let bmw = {
//   model:"328",
//   year: 2010,
//   color:"white",
// };
// let lexus = {
//   model:"ES250",
//   year: 2008,
//   color:"grey",
// };
// console.log(audi);
// console.log(bmw);
// console.log(lexus);

// function Car(model, year, color){
//   this.model = model;
//   this.year = year;
//   this.color = color;
//   this.showName = function(){
//     return this.model;
//   };
// }
// let audi = new Car("A4", 2012, "grey");
// let lexus = new Car("ES250", 2020, "black");
// let bmw = new Car("328", 2002, "white");
// console.log(audi);
// console.log(bmw);
// console.log(lexus);
// console.log(audi.showName());

function Counter(incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 10){
   this.domRefs={
    incrementBtn,
    decrementBtn,
    inputField,
   };
  //  console.log(this);
   this.toggleButtonState = function(){
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;

   };
   this.toggleButtonState();

   console.log(this);
}

let counter1 = new Counter(incrementBtns[0], decrementBtns[0],inputFields[0]);
