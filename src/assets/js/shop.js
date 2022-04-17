//change arrow direction when collapse list is coming
const collapseListArrow = document.querySelectorAll("#shop-list-arrow");
const collapseBtn = document.querySelectorAll(".collapse-button");

collapseBtn.forEach(e=>{
    e.addEventListener("click",()=>{
        e.childNodes[3].classList.toggle("collapseListArrow-active");
    })
})