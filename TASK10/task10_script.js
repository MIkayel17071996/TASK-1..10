document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.color-btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'lightblue';
      });
      button.addEventListener('mouseleave', function() {
        this.style.backgroundColor = 'white';
      });
    });
  });
  