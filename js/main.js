var navbar = document.querySelector(".navbar");
//when scrolling higher than 20 vh, add sticky class to the tag with a class navbar//
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}

// Navbar Toggler

const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle) {
    navTogle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    })
}

// closing menu when navLink is clicked

const navlink = document.querySelectorAll(".navlink")
function linkAction() {
    const navMenu = document.querySelector(".menu")
    navMenu.classList.remove("active")
}
navlink.forEach(n => n.addEventListener("click", linkAction))
// Product Colors
var pic = document.querySelector('#main-shoe');
var blue = document.querySelector('.blue');
var black = document.querySelector('.black');
var brown = document.querySelector('.brown');
var white = document.querySelector('.white');
var silver = document.querySelector('.silver');
var red = document.querySelector('.red');
const colors = document.querySelectorAll('.color');
// Store Product Info In Object

var info = [

    {
        src: "images/products/blue.png"
    },
    {
        src: "images/products/black.png"
    },
    {
        src: "images/products/brown.png"
    },
    {
        src: "images/products/white.png"
    },
    {
        src: "images/products/silver.png"
    },
    {
        src: "images/products/red.png"
    },
]

// Change Color
blue.addEventListener("click", function() {
    pic.src = info[0].src;
})
black.addEventListener("click", function() {
    pic.src = info[1].src;
})
brown.addEventListener("click", function() {
    pic.src = info[2].src;
})
white.addEventListener("click", function() {
    pic.src = info[3].src;
})
silver.addEventListener("click", function() {
    pic.src = info[4].src;
})
red.addEventListener("click", function() {
    pic.src = info[5].src;
})

// active color
function color() {
    colors.forEach(c => c.classList.remove('active'));
    this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));