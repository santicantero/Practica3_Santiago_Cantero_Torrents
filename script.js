document.addEventListener("DOMContentLoaded", () => {
    const mainImg = document.querySelector(".main-img img");
    const thumbs = document.querySelectorAll(".thumbs img");

    thumbs.forEach(img => {
        img.addEventListener("click", () => {
            mainImg.classList.remove("fade");
            void mainImg.offsetWidth;

            mainImg.src = img.src;

            thumbs.forEach(t => t.classList.remove("active"));
            img.classList.add("active");

            mainImg.classList.add("fade");
        });
    });
});
