document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");

    // Efecto de aparición
    title.style.opacity = "0";
    subtitle.style.opacity = "0";
    title.style.transform = "translateY(-20px)";
    subtitle.style.transform = "translateY(-20px)";

    setTimeout(() => {
        title.style.transition = "opacity 2s ease-in-out, transform 2s ease-in-out";
        subtitle.style.transition = "opacity 2.5s ease-in-out, transform 2.5s ease-in-out";
        title.style.opacity = "1";
        subtitle.style.opacity = "1";
        title.style.transform = "translateY(0)";
        subtitle.style.transform = "translateY(0)";
    }, 500);
});
