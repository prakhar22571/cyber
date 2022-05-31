// ***********************************************TOGGLE MENU************************************************

function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    navigation.classList.toggle('active');
    let toggle = document.querySelector('.toggle');
    toggle.classList.toggle('active');
}

// **********************************************TYPING INTRO************************************************

var typed = new Typed(".auto-type", {
    strings: [, "We're LSec", "THE CYBER SECURITY CLUB", "IIIT BHAGALPUR", "HACK IT UP!!"],
    typeSpeed: 75,
    backSpeed: 75,
    loop: true
});