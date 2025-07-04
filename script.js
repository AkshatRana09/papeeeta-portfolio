const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // You can add validations or send the data to a backend here
  alert('Your message just got caught in my web. I’ll reply shortly!');

  form.reset();
});
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  fader.style.animationPlayState = 'paused';  // Start paused
  appearOnScroll.observe(fader);
});
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Change button icon
  if (document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});
const toggleCheckbox = document.getElementById('theme-toggle');

toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
});
// Select all timeline items
const timelineItems = document.querySelectorAll('.timeline-item');

const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe each timeline item
timelineItems.forEach(item => {
  observer.observe(item);
});
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const response = document.getElementById("spidey-response");
  response.classList.remove("hidden");

  setTimeout(() => {
    response.classList.add("visible");
  }, 100);

  // Optional: clear form
  this.reset();

  // Hide message after 5s
  setTimeout(() => {
    response.classList.remove("visible");
    setTimeout(() => {
      response.classList.add("hidden");
    }, 500);
  }, 5000);
});
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  
  // Animate hamburger icon (optional)
  hamburger.classList.toggle('open');
});
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

