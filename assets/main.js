
(function(){
  const nav = document.querySelector('.nav');
  const btn = document.querySelector('#mobileToggle');
  if(btn && nav){
    btn.addEventListener('click', () => nav.classList.toggle('open'));
  }
  // Year in footer
  const y = document.querySelector('[data-year]');
  if(y) y.textContent = new Date().getFullYear();
})();
