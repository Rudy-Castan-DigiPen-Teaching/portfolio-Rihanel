const navToggle = document.querySelector(".nav-toggle")
const navLinks = document.querySelectorAll(".nav__link")

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("nav-open");
})

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open')
    })
})

// Help iframe of webgl demos get access to the keyboard by giving them focus when clicked
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("demo");
    if (!iframe) {
        return;
    }
    iframe.addEventListener("load", function () {
        try {
            const iframeDoc = iframe.contentWindow.document;
            iframeDoc.addEventListener("mousedown", function () {
                iframe.contentWindow.Module.canvas.focus();
            });
        } catch (e) {
            console.error(e);
        }
    });
});

// Toggle introduction image on click
const introImg = document.querySelector('.intro__img');
if (introImg) {
    introImg.style.cursor = 'pointer'; // Make it look clickable
    introImg.title = 'Click me to change picture!'; // Add tooltip
    
    // Preload the alternate image to prevent flickering
    const altImg = new Image();
    altImg.src = 'img/Mii.jpg';
    
    introImg.addEventListener('click', () => {
        if (introImg.getAttribute('src').includes('face.jpg')) {
            introImg.setAttribute('src', 'img/Mii.jpg');
        } else {
            introImg.setAttribute('src', 'img/face.jpg');
        }
    });
}
