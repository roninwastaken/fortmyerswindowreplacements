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

// Estimate form submission (only present on the homepage)
var estimateForm = document.getElementById('estimate-form');
if (estimateForm) {
  var statusEl = document.getElementById('estimate-form-status');
  var submitBtn = estimateForm.querySelector('button[type="submit"]');

  estimateForm.addEventListener('submit', function(e){
    e.preventDefault();

    var name = estimateForm.querySelector('input[name="name"]').value.trim();
    var phone = estimateForm.querySelector('input[name="phone"]').value.trim();
    var email = estimateForm.querySelector('input[name="email"]').value.trim();
    var message = estimateForm.querySelector('textarea[name="message"]').value.trim();
    var svcInput = document.querySelector('input[name="svc"]:checked');
    var service = svcInput ? svcInput.value : '';

    statusEl.className = 'sending';
    statusEl.textContent = 'Sending...';
    submitBtn.disabled = true;

    fetch('/api/submit-estimate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, phone: phone, email: email, message: message, service: service })
    })
      .then(function(res){ return res.json().then(function(data){ return { ok: res.ok, data: data }; }); })
      .then(function(result){
        submitBtn.disabled = false;
        if (result.ok) {
          statusEl.className = 'success';
          statusEl.textContent = 'Thanks! We got your request and will reach out shortly.';
          estimateForm.reset();
        } else {
          statusEl.className = 'error';
          statusEl.textContent = 'Something went wrong. Please call us at (239) 933-4610 instead.';
        }
      })
      .catch(function(){
        submitBtn.disabled = false;
        statusEl.className = 'error';
        statusEl.textContent = 'Something went wrong. Please call us at (239) 933-4610 instead.';
      });
  });
}
