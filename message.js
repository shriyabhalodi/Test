document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the form and thank you message
    var form = document.getElementById("contact-form");
    var thankYouMessage = document.getElementById("thank-you-message");

    // Add event listener to form submission
    form.addEventListener("submit", function(event) {
      // Prevent default form submission
      event.preventDefault();

      // Show the thank you message
      thankYouMessage.style.display = "block";

      // Optionally, you can reset the form fields after submission
      form.reset();
    });
  });