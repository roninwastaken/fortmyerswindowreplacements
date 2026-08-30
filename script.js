document.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click', function(){
    q.parentElement.classList.toggle('open');
  });
});
document.querySelector('.mobile-toggle').addEventListener('click', function(){
  var nav = document.querySelector('nav.primary');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '64px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.background = '#fff';
  nav.style.padding = '16px 24px';
  nav.style.borderBottom = '1px solid #e4e9f1';
});

var navDropdown = document.querySelector('.nav-dropdown');
var navDropTrigger = document.querySelector('.nav-drop-trigger');
navDropTrigger.addEventListener('click', function(e){
  e.stopPropagation();
  var isOpen = navDropdown.classList.toggle('open');
  navDropTrigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});
document.addEventListener('click', function(e){
  if (!navDropdown.contains(e.target)) {
    navDropdown.classList.remove('open');
    navDropTrigger.setAttribute('aria-expanded', 'false');
  }
});
document.querySelectorAll('.nav-drop-panel a').forEach(function(a){
  a.addEventListener('click', function(){
    navDropdown.classList.remove('open');
    navDropTrigger.setAttribute('aria-expanded', 'false');
  });
});
