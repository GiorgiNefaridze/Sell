//Shopping cart functional(click no close btn and section of product will dissapear)
const closeBtn = document.querySelectorAll("#closeBtn"),
    productList = document.querySelectorAll("#product-list"),
    table = document.querySelector("table"),
    order = document.querySelector(".order_summary"),
    emtyCart = document.querySelector(".empty_shopping_cart");

var array = [];

for (let i = 0; i < closeBtn.length; i++) {
    array.push(closeBtn[i]);
    closeBtn[i].addEventListener("click", () => {
        closeBtn[i].parentElement.parentElement.style.display = "none";
        array.pop(closeBtn[i]);

        if (array.length < 1) {
            table.style.display = "none";
            order.style.display = "none";
            emtyCart.classList.add("visible");
        }
    })
}

//Product counter
const add = document.querySelectorAll("#plus"),
    minus = document.querySelectorAll("#minus"),
    counter = document.querySelectorAll("#counter");

add[0].addEventListener("click", () => {
    counter[0].innerHTML++;
});

minus[0].addEventListener("click", () => {
    counter[0].innerHTML--;
    if (counter[0].innerHTML <= 0) {
        counter[0].innerHTML = 0;
    }
})

add[1].addEventListener("click", () => {
    counter[1].innerHTML++;
});

minus[1].addEventListener("click", () => {
    counter[1].innerHTML--;
    if (counter[1].innerHTML <= 0) {
        counter[1].innerHTML = 0;
    }
})

add[2].addEventListener("click", () => {
    counter[2].innerHTML++;
});

minus[2].addEventListener("click", () => {
    counter[2].innerHTML--;
    if (counter[2].innerHTML <= 0) {
        counter[2].innerHTML = 0;
    }
})

