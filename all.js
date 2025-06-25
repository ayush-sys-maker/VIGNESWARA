document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".specialtext, .specialCarousel , .customer , .CERTIFICATE , .abouttext ,.abouthead ,.customerText ,.CERTIFICATEText , .footer , .MenuCarousel , .Gallery  ,.pics , .writingsection ,.insidefood  ");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 }); // Trigger when 10% of section is visible

  sections.forEach(section => observer.observe(section));
});



