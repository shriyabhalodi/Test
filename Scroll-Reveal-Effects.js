
  document.addEventListener('DOMContentLoaded', function () {

    // Apply a staggered reveal for each item in the Experience, Certifications, and Tools & Technology sections
    const staggerOptions = {
      duration: 1000,
      scale: 0.85,
      interval: 100 // Interval between items
    };

    // Experience items
    document.querySelectorAll('.Services-content').forEach((elem, index) => {
      ScrollReveal().reveal(elem, { ...staggerOptions, delay: 300 + staggerOptions.interval * index });
    });

    // Certifications items
    document.querySelectorAll('.partner-grid').forEach((elem, index) => {
      ScrollReveal().reveal(elem, { ...staggerOptions, delay: 400 + staggerOptions.interval * index });
    });

  });
