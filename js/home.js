document.addEventListener("DOMContentLoaded", function () {
    const animatedSections = document.querySelectorAll('.section-animated');
  
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }
  
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };
  
    const sectionObserver = new IntersectionObserver(handleIntersection, observerOptions);
  
    animatedSections.forEach(section => {
      sectionObserver.observe(section);
    });
  });  