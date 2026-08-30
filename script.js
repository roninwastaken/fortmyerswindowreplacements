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

// Supports multiple independent nav dropdowns (Services, Service Areas, ...)
document.querySelectorAll('.nav-dropdown').forEach(function(dd){
  var trigger = dd.querySelector('.nav-drop-trigger');
  trigger.addEventListener('click', function(e){
    e.stopPropagation();
    var isOpen = dd.classList.contains('open');
    document.querySelectorAll('.nav-dropdown.open').forEach(function(other){
      other.classList.remove('open');
      other.querySelector('.nav-drop-trigger').setAttribute('aria-expanded', 'false');
    });
    if (!isOpen) {
      dd.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    }
  });
  dd.querySelectorAll('.nav-drop-panel a').forEach(function(a){
    a.addEventListener('click', function(){
      dd.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
    });
  });
});
document.addEventListener('click', function(e){
  document.querySelectorAll('.nav-dropdown.open').forEach(function(dd){
    if (!dd.contains(e.target)) {
      dd.classList.remove('open');
      dd.querySelector('.nav-drop-trigger').setAttribute('aria-expanded', 'false');
    }
  });
});
