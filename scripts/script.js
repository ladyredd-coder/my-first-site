const menuToggle = document.querySelector("#menu-toggle");
const navList = document.querySelector("#nav-list");

if (menuToggle && navList) {
  menuToggle.addEventListener("click", function () {
    const isOpen = navList.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕ Close" : "☰ Menu";
  });
}

function showError(field, message) {
  const error = document.querySelector("#" + field.id + "-error");
  error.textContent = message;
  field.setAttribute("aria-invalid", "true");
}

function clearError(field) {
  const error = document.querySelector("#" + field.id + "-error");
  error.textContent = "";
  field.setAttribute("aria-invalid", "false");
}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const formStatus = document.querySelector("#form-status");
  const requiredFields = document.querySelectorAll("#contact-form [required]");

  const emailPattern = /^\S+@\S+\.\S+$/;

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formStatus.textContent = "";
    let allGood = true;

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name.");
      allGood = false;
    }

    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      showError(emailInput, "Please enter your email address.");
      allGood = false;
    } else if (!emailPattern.test(emailValue)) {
      showError(emailInput, "That doesn't look like an email address.");
      allGood = false;
    }

    if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Please enter a message (at least 10 characters).");
      allGood = false;
    }

    if (allGood) {
      formStatus.textContent =
        "Thanks, " + nameInput.value.trim() + "! Your message has been received.";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }
  });

  requiredFields.forEach(function (field) {
    field.addEventListener("input", function () {
      clearError(field);
    });
  });
}