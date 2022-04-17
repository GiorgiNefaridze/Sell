//Swiper functional
var swiper = new Swiper(".mySwiper", {
    speed: 600,
    parallax: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const options = {
    margin: "12px",
    slidesSliderViewportCount: 4
};

const state = {
    inTransition: false
};

const slides = Array.from(document.querySelectorAll(".slider-track .slide"));

const initialSlidesCount = slides.length;

const sliderTrack = document.querySelector(".slider-track");
const sliderWrapper = document.querySelector(".slider-wrapper");

const leftArrow = document.querySelector(".slider-arrow.left");
const rightArrow = document.querySelector(".slider-arrow.right");

const sliderSlideWidth =
    (sliderWrapper.offsetWidth -
        2 * parseInt(options.margin) * options.slidesSliderViewportCount) /
    options.slidesSliderViewportCount;

const sliderTrackTranslateXToAlignWithStartSlideNodes =
    initialSlidesCount * (2 * parseInt(options.margin) + sliderSlideWidth);

let inTransition = false;
let currentSliderTrackTranslate = -sliderTrackTranslateXToAlignWithStartSlideNodes;

sliderTrack.style.transform = `translateX(${-sliderTrackTranslateXToAlignWithStartSlideNodes}px)`;

slides.forEach((slide) => {
    slide.style.width = sliderSlideWidth + "px";
});

const leftSideClonedSlides = slides.map((slide) => {
    return slide.cloneNode(true);
});

const rightSideClonedSlides = slides.map((slide) => {
    return slide.cloneNode(true);
});

sliderTrack.prepend(...leftSideClonedSlides);
sliderTrack.append(...rightSideClonedSlides);

const resetTransitionState = () => {
    sliderTrack.ontransitionend = () => {
        sliderTrack.ontransitionend = null;
        state.inTransition = false;
    };
};

const cycleReset = (direction) => {
    const slideCycleOffset =
        (sliderSlideWidth + 2 * parseInt(options.margin)) *
        (initialSlidesCount - options.slidesSliderViewportCount);
    sliderTrack.style.transition = "none";
    if (direction === "right") {
        currentSliderTrackTranslate = -sliderTrackTranslateXToAlignWithStartSlideNodes - slideCycleOffset;
        sliderTrack.style.transform = `translate3d(${currentSliderTrackTranslate}px, 0, 0)`;
    } else {
        currentSliderTrackTranslate = -sliderTrackTranslateXToAlignWithStartSlideNodes;
        sliderTrack.style.transform = `translate3d(${currentSliderTrackTranslate}px, 0, 0)`;
    }
};

const moveTo = (direction) => {
    requestAnimationFrame(() => {
        sliderTrack.style.transition = "";
        if (direction === "right") {
            currentSliderTrackTranslate -=
                sliderSlideWidth + 2 * parseInt(options.margin);
            sliderTrack.style.transform = `translate3d(${currentSliderTrackTranslate}px, 0, 0)`;
        } else {
            currentSliderTrackTranslate +=
                sliderSlideWidth + 2 * parseInt(options.margin);
            sliderTrack.style.transform = `translateX(${currentSliderTrackTranslate}px)`;
        }

        resetTransitionState();
    });
};

leftArrow.addEventListener("click", () => {
    if (!state.inTransition) {
        const sliderLeftBoundReached = currentSliderTrackTranslate >= 0;

        if (sliderLeftBoundReached) {
            state.inTransition = true;
            cycleReset("left");
            moveTo("left");
            return;
        }
        state.inTransition = true;
        moveTo("left");
    }
});

rightArrow.addEventListener("click", () => {
    if (!state.inTransition) {
        const sliderRightBoundReached =
            currentSliderTrackTranslate <=
            -(initialSlidesCount * 3 - options.slidesSliderViewportCount) *
            (sliderSlideWidth + 2 * parseInt(options.margin));

        if (sliderRightBoundReached) {
            state.inTransition = true;
            cycleReset("right");
            moveTo("right");
            return;
        }
        state.inTransition = true;
        moveTo("right");
    }
});


//Swiper btn functioanl
const swiperBtn = document.querySelectorAll(".swiper-slide button");
swiperBtn.forEach(item => {
    item.addEventListener("click", () => {
        window.open('/src/assets/html/shop.html', "_blank");
    })
})