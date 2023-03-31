const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  //console.log('hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  //console.log(e);
  console.log(e.propertyName); //gives out as result "flex-grow" and "font-size"
  if (e.propertyName.includes('flex')) { //in some Browsers propertyName is just "flex"
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
