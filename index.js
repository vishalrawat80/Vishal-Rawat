// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItems = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header.container");

// Toggle Mobile Menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
});

// Close Menu After Clicking Menu Item
menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobileMenu.classList.remove("active");
    });
});

// Header Background Change on Scroll
document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

// coding platform animation
// Coding Box Animation

const codingBoxes = document.querySelectorAll(".coding-box");

codingBoxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {
        box.style.transform = "translateY(-10px) scale(1.03)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "translateY(0) scale(1)";
    });

});


// Footer Animation
window.addEventListener("load", () => {
    const footer = document.querySelector("#footer");

    // Check if footer exists
    if (footer) {
        footer.style.opacity = "0";
        footer.style.transform = "translateY(30px)";
        footer.style.transition = "all 1s ease";

        setTimeout(() => {
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0)";
        }, 300);
    }
});

// Experience Box Animation

const expBoxes = document.querySelectorAll(".experience-box");

expBoxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {

        box.style.transform =
            "translateY(-12px) scale(1.03)";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform =
            "translateY(0) scale(1)";

    });

});

document.addEventListener("DOMContentLoaded", function () {

    function openCert(imgSrc) {
        document.getElementById("popup").style.display = "flex";
        document.getElementById("popup-img").src = imgSrc;
    }

    function closeCert() {
        document.getElementById("popup").style.display = "none";
    }

    document.querySelectorAll(".download-btn").forEach(btn => {
        btn.addEventListener("click", function () {

            document.querySelectorAll(".download-btn").forEach(b => {
                b.classList.remove("clicked");
            });

            this.classList.add("clicked");
        });
    });

});

// skills
window.addEventListener("load", () => {

    const lines = document.querySelectorAll(".progress-line");

    lines.forEach(line => {

        let width = line.style.width;

        line.style.width = "0";

        setTimeout(() => {
            line.style.width = width;
        }, 300);

    });

});

// CONTACT FORM

const form = document.getElementById("contactForm");

const successMsg = document.getElementById("success-msg");

form.addEventListener("submit", function(e){

    e.preventDefault();

    successMsg.innerText = "✅ Message Sent Successfully!";

    successMsg.style.color = "#22c55e";

    form.reset();

});