function reload() {
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  const submitButton = document.getElementById("submit");

  const form = document.querySelector(".contact-form");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  const displayError = (inputElement, message) => {
    const existingError = inputElement.parentElement.querySelector(".error-message");
    if (existingError) {
      existingError.remove();
    }

    const errorSpan = document.createElement("span");
    errorSpan.classList.add("error-message");
    errorSpan.textContent = message + "!!";

    inputElement.parentElement.insertBefore(errorSpan, inputElement.nextSibling);
  };

  const clearError = (inputElement) => {
    const errorSpan = inputElement.parentElement.querySelector(".error-message");
    if (errorSpan) {
      errorSpan.remove();
    }
  };

  submitButton.onclick = function (event) {
    event.preventDefault(); //

    let isValid = true;

    document.querySelectorAll(".error-message").forEach((error) => error.remove());

    if (nameInput.value.trim() === "") {
      displayError(nameInput, "Name is required.");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === "") {
      displayError(emailInput, "Email is required.");
      isValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      displayError(emailInput, "Please enter a valid email address.");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    const phonePattern = /^\d{10,15}$/;
    if (phoneInput.value.trim() === "") {
      displayError(phoneInput, "Phone number is required.");
      isValid = false;
    } else if (!phonePattern.test(phoneInput.value.trim())) {
      displayError(phoneInput, "Please enter a valid phone number (10-15 digits).");
      isValid = false;
    } else {
      clearError(phoneInput);
    }

    if (messageInput.value.trim() === "") {
      displayError(messageInput, "Message is required.");
      isValid = false;
    } else {
      clearError(messageInput);
    }

    if (isValid) {
      console.log("Form submitted successfully!");
      console.log("Name:", nameInput.value.trim());
      console.log("Email:", emailInput.value.trim());
      console.log("Phone:", phoneInput.value.trim());
      console.log("Message:", messageInput.value.trim());

      alert("Form submitted successfully!");
    }
  };

  const hamburgerIcon = document.getElementById("hamburger-icon");
  const mainNav = document.getElementById("main-nav");

  if (hamburgerIcon && mainNav) {
    hamburgerIcon.addEventListener("click", () => {
      mainNav.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (mainNav.classList.contains("active")) {
          mainNav.classList.remove("active");
        }
      });
    });
  }

  document.getElementById("clearName").onclick = function () {
    document.getElementById("name").value = "";
  };

  document.getElementById("clearEmail").onclick = function () {
    document.getElementById("email").value = "";
  };

  document.getElementById("clearPhone").onclick = function () {
    document.getElementById("phone").value = "";
  };

  document.getElementById("clearMessage").onclick = function () {
    document.getElementById("message").value = "";
  };
});
