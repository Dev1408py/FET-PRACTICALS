const accordionTitles = document.querySelectorAll('.accordion-title');

accordionTitles.forEach(function(title) {
  title.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = this.parentElement;
    const allAccordionItems = document.querySelectorAll('.accordion-item');
    
    allAccordionItems.forEach(function(item) {
      if (item !== parent) {
        item.classList.remove('active');
      }
    });
    parent.classList.toggle('active');
  });
});
