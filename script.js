document.addEventListener("DOMContentLoaded", function () {
  // EmailJS configuration variables
  const emailJsUserId = "TechnoGuru"; // Replace with your EmailJS user ID (not the user's email)
  const emailJsServiceId = "TechnoGuru"; // Replace with your EmailJS service ID
  const emailJsTemplateId = "Test wysyłania wiadomości"; // Replace with your EmailJS template ID

  // Initialize EmailJS with your user ID
  emailjs.init(emailJsUserId);

  // Navigation Toggle Functionality
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector("nav");

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // Drag to Scroll Functionality
  const computerList = document.querySelector(".computer-list");
  let isDown = false;
  let startX;
  let scrollLeft;

  computerList.addEventListener("mousedown", (e) => {
    isDown = true;
    computerList.classList.add("active");
    startX = e.pageX - computerList.offsetLeft;
    scrollLeft = computerList.scrollLeft;
  });

  computerList.addEventListener("mouseleave", () => {
    isDown = false;
    computerList.classList.remove("active");
  });

  computerList.addEventListener("mouseup", () => {
    isDown = false;
    computerList.classList.remove("active");
  });

  computerList.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - computerList.offsetLeft;
    const walk = (x - startX) * 3;
    computerList.scrollLeft = scrollLeft - walk;
  });

  // Set Logo Background Color
  const logo = document.getElementById("logo");
  if (logo) {
    logo.style.backgroundColor = "transparent";
  }

  // Form Submission Handling
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(emailJsServiceId, emailJsTemplateId, templateParams).then(
      function (response) {
        alert("Email sent successfully!", response.status, response.text);
      },
      function (error) {
        alert("Failed to send email...", error);
      }
    );
  });
});
