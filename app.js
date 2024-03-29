let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".btn-add");

for (let i = 0; i < addToCartBtns.length; i++){
    addToCartBtns[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
    });
}

let moreDetailsBtns = document.querySelectorAll(".btn-sub");
let modal = document.querySelector(".modal");
let btnClose = document.querySelector(".btn-close");

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
    if (e.target === modal) {
    closeModal();
  }
});

let likeBtns = document.querySelectorAll(".heart");
likeBtns.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
   });
});

function showModalByScroll() {
  if (window.scrollY > document.body.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

$(".slider-block").slick({
  dots: true,
});

let decrementBtns = document.querySelectorAll(".decrement");
let incrementBtns = document.querySelectorAll(".increment");
let inputFields = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField, minCount = 1, maxCount = 10) {
   this.domRefs={
    incrementBtn,
    decrementBtn,
    inputField,
   };
    this.toggleButtonState = function(){
    let count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= minCount;
    this.domRefs.incrementBtn.disabled = count >= maxCount;

   };
   this.toggleButtonState();

   this.increment = function(){
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
   };

    this.decrement = function(){
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
   };
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
    console.log(this);
}

const counters = [];

inputFields.forEach(
  (countItem, i) => 
  (counters[i] = new Counter(incrementBtns[i], decrementBtns[i], countItem))
);

  
