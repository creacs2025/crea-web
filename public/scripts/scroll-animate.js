export function initScrollAnimations() {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-scale-in');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
  
    document.querySelectorAll('.js-animate').forEach(el => {
      observer.observe(el);
    });
  }
  