const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open'); 
}

function toggleActive(e) {
  console.log('property name: ', e.propertyName); // returns flex-grow, font-size, transform
  if(e.propertyName.includes('flex')) { // to work with all browsers, incl firefox
     this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));