
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if(toggle && links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
document.querySelectorAll('[data-contact-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const data=new FormData(form);
    const name=data.get('name')||'Not provided';
    const email=data.get('email')||'Not provided';
    const business=data.get('business')||'Not provided';
    const service=data.get('service')||'Not selected';
    const budget=data.get('budget')||'Not provided';
    const timeline=data.get('timeline')||'Not provided';
    const details=data.get('details')||'Not provided';
    const msg=`Hello TEMIVANCE! I'd like to discuss a website project.%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0ABusiness: ${encodeURIComponent(business)}%0AService: ${encodeURIComponent(service)}%0ABudget: ${encodeURIComponent(budget)}%0ATimeline: ${encodeURIComponent(timeline)}%0AProject details: ${encodeURIComponent(details)}`;
    window.open(`https://wa.me/2349050780322?text=${msg}`,'_blank','noopener');
    const confirmation=form.querySelector('[data-form-confirmation]');
    if(confirmation) confirmation.hidden=false;
  });
});
