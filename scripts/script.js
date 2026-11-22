// 1. Mobile Navigation Menu Toggle
const menuToggle = document.querySelector("#menu-toggle");
const navList = document.querySelector("#nav-list");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navList.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕ Close" : "☰ Menu";
  });
}

// 2. Contact Form Checker
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");

  const nameError = document.querySelector("#name-error");
  const emailError = document.querySelector("#email-error");
  const messageError = document.querySelector("#message-error");
  const formStatus = document.querySelector("#form-status");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // Check Name
    if (nameInput.value.trim() === "") {
      nameError.classList.add("show-error");
      nameInput.classList.add("input-invalid");
      isValid = false;
    } else {
      nameError.classList.remove("show-error");
      nameInput.classList.remove("input-invalid");
    }

    // Check Email
    const emailVal = emailInput.value.trim();
    if (emailVal === "" || !emailVal.includes("@") || !emailVal.includes(".")) {
      emailError.classList.add("show-error");
      emailInput.classList.add("input-invalid");
      isValid = false;
    } else {
      emailError.classList.remove("show-error");
      emailInput.classList.remove("input-invalid");
    }

    // Check Message
    if (messageInput.value.trim().length < 10) {
      messageError.classList.add("show-error");
      messageInput.classList.add("input-invalid");
      isValid = false;
    } else {
      messageError.classList.remove("show-error");
      messageInput.classList.remove("input-invalid");
    }

    // Final Result
    if (isValid) {
      formStatus.textContent =
        "Thanks, " + nameInput.value.trim() + "! Your message has been received.";
      contactForm.reset();
    } else {
      formStatus.textContent = "";
    }
  });
}