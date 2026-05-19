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

const introImg = document.querySelector('.intro__img');
if (introImg) {
    introImg.style.cursor = 'pointer'; 
    introImg.title = 'Click me to change picture!'; 
    
    const altImg = new Image();
    altImg.src = 'img/Mii.jpg';
    
    const freezeSize = () => {
        if (introImg.clientHeight > 0) {
            introImg.style.width = introImg.clientWidth + 'px';
            introImg.style.height = introImg.clientHeight + 'px';
            introImg.style.objectFit = 'contain';
        }
    };

    if (introImg.complete) {
        freezeSize();
    } else {
        introImg.addEventListener('load', freezeSize, { once: true });
    }

    window.addEventListener('resize', () => {
        if (introImg.getAttribute('src').includes('face.jpg')) {
            introImg.style.width = '';
            introImg.style.height = '';
            introImg.style.objectFit = '';
            setTimeout(freezeSize, 100);
        }
    });
    
    introImg.addEventListener('click', () => {
        if (introImg.getAttribute('src').includes('face.jpg')) {
            introImg.setAttribute('src', 'img/Mii.jpg');
        } else {
            introImg.setAttribute('src', 'img/face.jpg');
        }
    });
}
