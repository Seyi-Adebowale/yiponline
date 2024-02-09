document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.product');
  
    elements.forEach(element => {
      element.addEventListener('click', function () {
        const overlay = this.querySelector('.overlay');
        overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
      });
    });
  });