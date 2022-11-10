const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
console.log("activando");
  const offset = window.pageYOffset;
  
  if(offset > 100)
    nav.classList.add('scroll')
  else 
    nav.classList.remove('scroll')
});