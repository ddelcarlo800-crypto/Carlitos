
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Cerrar menú al seleccionar una sección
document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Formulario de demostración
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    message.textContent =
        "¡Mensaje de demostración enviado correctamente!";

    message.style.color = "#d6a441";

    form.reset();
});
