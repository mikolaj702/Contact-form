const form = document.querySelector(".contact-form");
const toast = document.querySelector(".success-toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let valid = true;

  document.querySelectorAll(".error-message").forEach((msg) => {
    msg.style.display = "none";
  });

  document.querySelectorAll(".error").forEach((el) => {
    el.classList.remove("error");
  });

  const requiredFields = form.querySelectorAll(
    'input[type="text"], input[type="email"], textarea'
  );

  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      valid = false;
      field.parentElement.classList.add("error");
      field.nextElementSibling.style.display = "block";
    }
  });

  const email = document.getElementById("email");

  if (
    email.value.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
  ) {
    valid = false;
    email.parentElement.classList.add("error");
    email.nextElementSibling.style.display = "block";
  }

  const radioButtons = document.querySelectorAll(
    'input[name="query"]'
  );

  const radioChecked = [...radioButtons].some(
    (radio) => radio.checked
  );

  if (!radioChecked) {
    valid = false;
    document
      .querySelector(".radio-error")
      .style.display = "block";
  }

  const consent = document.getElementById("consent");

  if (!consent.checked) {
    valid = false;
    consent
      .closest(".checkbox-group")
      .classList.add("error");

    consent
      .closest(".checkbox-group")
      .querySelector(".error-message").style.display = "block";
  }

  if (valid) {
    toast.classList.add("show");

    form.reset();

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
});