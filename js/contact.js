const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  // Display feedback message
  feedback.textContent = `Thanks, ${name}! Your message has been received: "${message}".`;

  // Clear form fields
  contactForm.reset();
});
