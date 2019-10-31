

const slide1 = document.querySelector(".MySlides1");
const slide2 = document.querySelector(".MySlides2");
const slide3 = document.querySelector(".MySlides3");
const dot1 = document.querySelector(".dotOne");
const dot2 = document.querySelector(".dotTwo");
const dot3 = document.querySelector(".dotThree");

const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

const tab1 = document.querySelector(".section6");
const tab2 = document.querySelector(".section7");

const blanksectionSmooth = document.querySelector(".section2half");
const dropDownButton = document.getElementById("dropdownButton");
const dropDownContent = document.querySelector(".dropdown-content");

dot1.addEventListener('click',
    function (e) {
        slide1.style.display = "block";
        slide2.style.display = "none";
        slide3.style.display = "none";
        dot1.style.backgroundColor = "#A8A8A8";
        dot2.style.backgroundColor = "#ffffff";
        dot3.style.backgroundColor = "#ffffff";
    }
);
dot2.addEventListener('click',
    function (e) {
        slide1.style.display = "none";
        slide2.style.display = "block";
        slide3.style.display = "none";
        dot1.style.backgroundColor = "#ffffff";
        dot2.style.backgroundColor = "#A8A8A8";
        dot3.style.backgroundColor = "#ffffff";
    }
);
dot3.addEventListener('click',
    function (e) {
        slide1.style.display = "none";
        slide2.style.display = "none";
        slide3.style.display = "block";
        dot1.style.backgroundColor = "#ffffff";
        dot2.style.backgroundColor = "#ffffff";
        dot3.style.backgroundColor = "#A8A8A8";
    }
);


button1.addEventListener('click',
    function (e) {
        button1.style.color = "#414f6b";
        button1.style.backgroundColor = "#b0b4be";
        button2.style.color = "#b0b4be";
        button2.style.backgroundColor = "#414f6b";

        button1.style.textDecoration = "underline";
        button2.style.textDecoration = "none";
        tab1.style.display = "flex";
        tab2.style.display = "none";
    }
);
button2.addEventListener('click',
    function (e) {
        button2.style.color = "#414f6b";
        button2.style.backgroundColor = "#b0b4be";
        button1.style.color = "#b0b4be";
        button1.style.backgroundColor = "#414f6b";

        button1.style.textDecoration = "none";
        button2.style.textDecoration = "underline";
        tab1.style.display = "none";
        tab2.style.display = "flex";
    }
);

button3.addEventListener('click',
    function (e) {
        button3.style.color = "#414f6b";
        button3.style.backgroundColor = "#b0b4be";
        button4.style.color = "#b0b4be";
        button4.style.backgroundColor = "#414f6b";

        button3.style.textDecoration = "underline";
        button4.style.textDecoration = "none";
        tab1.style.display = "flex";
        tab2.style.display = "none";
    }
);
button4.addEventListener('click',
    function (e) {
        button4.style.color = "#414f6b";
        button4.style.backgroundColor = "#b0b4be";
        button3.style.color = "#b0b4be";
        button3.style.backgroundColor = "#414f6b";

        button4.style.textDecoration = "none";
        button3.style.textDecoration = "underline";
        tab1.style.display = "none";
        tab2.style.display = "flex";
    }
);
window.onscroll = function () { myFunction() };
var navbar = document.querySelector(".section2");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        blanksectionSmooth.style.display = "block";
    } else {
        blanksectionSmooth.style.display = "none";
        navbar.classList.remove("sticky");
    }
}

dropDownButton.addEventListener('click', function () {
    if (dropDownContent.style.display === "none") {
        dropDownContent.style.display = "block";
    } else {
        dropDownContent.style.display = "none";
    }
})