const button = document.querySelector('button');
const nav = document.querySelector('header > nav');
const form = document.querySelector('form');
const thankyou = document.querySelector('.thank-you');

button.addEventListener('click', function () {
    if (nav.style.display === 'flex') {
        document.body.classList.remove('menu-open');
        this.classList.remove('is-active');
        nav.style.display = 'none';
    } else {
        document.body.classList.add('menu-open');
        this.classList.add('is-active');
        nav.style.display = 'flex';
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // TODO: Add Fetch/server logic

    form.style.display = 'none';
    thankyou.style.display = 'block';
});

// Gallery filter

var one = document.querySelectorAll (".item1");
var two = document.querySelectorAll (".item2");
var three = document.querySelectorAll (".item3");
var btn = document.querySelector ("#btn");
var btn1 = document.querySelector ("#btn1");
var btn2 = document.querySelector ("#btn2");
var btn3 = document.querySelector ("#btn3");
var i;


// branding images
btn1.addEventListener('click', function () {
    for ( i = 0; i < two.length; i++) {
        two[i].style.display = 'none';
    }
    for ( i = 0; i < three.length; i++) {
        three[i].style.display = 'none';
    }
    for ( i = 0; i < one.length; i++) {
        one[i].style.display = 'block';
    }
});

// webdesign images

btn2.addEventListener('click', function () {
    for ( i = 0; i < one.length; i++) {
        one[i].style.display = 'none';
    }
    for ( i = 0; i < three.length; i++) {
        three[i].style.display = 'none';
    }
    for ( i = 0; i < two.length; i++) {
        two[i].style.display = 'block';
    }

});

// photography
btn3.addEventListener('click', function () {
    for ( i = 0; i < one.length; i++) {
        one[i].style.display = 'none';
    }
    for ( i = 0; i < two.length; i++) {
        two[i].style.display = 'none';
    }
    for ( i = 0; i < three.length; i++) {
        three[i].style.display = 'block';
    }

});

// all

btn.addEventListener('click', function () {
    for ( i = 0; i < two.length; i++) {
        two[i].style.display = 'block';
    }
    for ( i = 0; i < three.length; i++) {
        three[i].style.display = 'block';
    }
    for ( i = 0; i < one.length; i++) {
        one[i].style.display = 'block';
    }
});
