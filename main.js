console.log('project_3_zoo link');

let counter = 0;
let slideImages = document.getElementsByClassName("slide_img");
let leftArrow = document.getElementsByClassName("prev")[0];
let rightArrow = document.getElementsByClassName("next")[0];
let slides;

function displaySlides() {
    slideImages[0].style.display = "inline-block";
    slideImages[1].style.display = "inline-block";
    slideImages[2].style.display = "inline-block";
}

let moveSlides = function() {
        slides = setInterval(function () {
        slideImages[counter].style.display = "none";
        if (counter < 2) {
            counter++
        } else {
            counter = 0;
            displaySlides();
        }
        // console.log(counter);
    }, 3000);
}

leftArrow.addEventListener("click", function() {
    clearInterval(slides);
    if (counter > 0) {
        slideImages[counter-1].style.display = "inline-block";
        counter = counter - 1;
    } else {
        slideImages[0].style.display = "none";
        slideImages[1].style.display = "none";
        counter = 2;
    }
    console.log(counter);
    moveSlides();
});

rightArrow.addEventListener("click", function () {
    clearInterval(slides);
    slideImages[counter].style.display = "none";
    if (counter == 2) {
        counter = 0;
        displaySlides();
    } else {
        counter++
    }
    moveSlides();

})

moveSlides();
