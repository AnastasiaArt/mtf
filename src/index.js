import './scss/index.scss';

const WOW = require('wowjs').WOW;

//  adaptive nav-menu
const responsiveNav = require('./js/nav-menu.js');
require('./js/first-screen-animate');

responsiveNav(".nav-collapse", {
    animate: false, // Boolean: Use CSS3 transitions, true or false
    transition: 0, // Integer: Speed of the transition, in milliseconds
    label: '<img src="img/menu-icon.svg" alt="open">', // String: Label for the navigation toggle
    insert: "before", // String: Insert the toggle before or after the navigation
    customToggle: "", // Selector: Specify the ID of a custom toggle
    closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
    openPos: "relative", // String: Position of the opened nav, relative or static
    navClass: "nav-collapse", // String: Default CSS class. If changed, you need to edit the CSS too!
    navActiveClass: "js-nav-active", // String: Class that is added to <html> element when nav is active
    jsClass: "js", // String: 'JS enabled' class which is added to <html> element
    open: function () {
        const navToggle = document.querySelector('.nav-toggle')
        navToggle.innerHTML = '<img src="img/close-icon.svg" alt="close">';
    },
    close: function () {
        const navToggle = document.querySelector('.nav-toggle')
        navToggle.innerHTML = '<img src="img/menu-icon.svg" alt="open">';
    }
});

// animations for scroll page
const wowScroll = new WOW(
    {
        boxClass: 'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true,       // act on asynchronously loaded content (default is true)
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: false,
        callback: function (box) {
            box.classList.add('anim')
        }// reset animation on end (default is true)
    }
);
wowScroll.init();

//smooth scroll
document.querySelectorAll("a[href^=\"#\"]").forEach((anchor) => {
    anchor.addEventListener("click", function (ev) {
        ev.preventDefault();

        const targetElement = document.querySelector(this.getAttribute("href"));
        targetElement.scrollIntoView({
            block: "start",
            alignToTop: true,
            behavior: "smooth"
        });
    });
});