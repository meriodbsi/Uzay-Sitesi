let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    clearInterval(slideInterval);
    slideInterval = setInterval(() => { plusSlides(1); }, 10000); // 10 saniyede bir değişim
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    clearInterval(slideInterval);
    slideInterval = setInterval(() => { plusSlides(1); }, 10000); // 10 saniyede bir değişim
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Otomatik slayt gösterimi
let slideInterval = setInterval(() => {
    plusSlides(1);
}, 10000); // 10 saniyede bir değişim