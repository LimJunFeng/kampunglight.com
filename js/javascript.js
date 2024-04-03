
//here is scroll animation
window.onload = function() {
  window.addEventListener('scroll', function() {
      const elements = document.querySelectorAll('.show');
      elements.forEach(function(element) {
          if (isElementInViewport(element)) {
              element.classList.add('active');
          }
      });
  });

  function isElementInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }
};
