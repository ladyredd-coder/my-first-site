// 1. Mobile menu button: opens and closes the nav list on small screens
const menuToggle = document.querySelector("#menu-toggle");
const navList = document.querySelector("#nav-list");

// Only run if both pieces exist on this page
if (menuToggle && navList) {
  menuToggle.addEventListener("click", function () {
    // toggle adds the "open" class if it is missing, removes it if it is there
    const isOpen = navList.classList.toggle("open");
    // Tell screen readers whether the menu is open right now
    menuToggle.setAttribute("aria-expanded", isOpen);
    // Change the button words so they match what a click will do next
    menuToggle.textContent = isOpen ? "✕ Close" : "☰ Menu";
  });
}

// 2. Contact form checker

// Put a message in a box's error paragraph (the box's id plus "-error")
function showError(field, message) {
  const error = document.querySelector("#" + field.id + "-error");
  error.textContent = message;
  field.setAttribute("aria-invalid", "true");
}

// Empty the message and mark the box as okay again
function clearError(field) {
  const error = document.querySelector("#" + field.id + "-error");
  error.textContent = "";
  field.setAttribute("aria-invalid", "false");
}

const contactForm = document.querySelector("#contact-form");

// Only run if this page has the contact form (it is only on about.html)
if (contactForm) {
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const messageInput = document.querySelector("#message");
  const formStatus = document.querySelector("#form-status");
  const requiredFields = document.querySelectorAll("#contact-form [required]");

  // The shape of an email: something @ something . something
  const emailPattern = /^\S+@\S+\.\S+$/;

  contactForm.addEventListener("submit", function (event) {
    // Stop the page from reloading so we can check the boxes first
    event.preventDefault();
    formStatus.textContent = "";
    let allGood = true;

    // Check name: is it there?
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Please enter your name.");
      allGood = false;
    }

    // Check email: is it there, then is it the right shape?
    const emailValue = emailInput.value.trim();
    if (emailValue === "") {
      showError(emailInput, "Please enter your email address.");
      allGood = false;
    } else if (!emailPattern.test(emailValue)) {
      showError(emailInput, "That doesn't look like an email address.");
      allGood = false;
    }

    // Check message: at least 10 characters
    if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Please enter a message (at least 10 characters).");
      allGood = false;
    }

    // Every box passed: show the thank-you message and empty the form
    if (allGood) {
      formStatus.textContent =
        "Thanks, " + nameInput.value.trim() + "! Your message has been received.";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    }
  });

  // Typing in a box clears that box's error
  requiredFields.forEach(function (field) {
    field.addEventListener("input", function () {
      clearError(field);
    });
  });
}