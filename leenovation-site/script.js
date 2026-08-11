const header=document.getElementById('header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>25));
const menuBtn=document.getElementById('menuBtn'), mobileNav=document.getElementById('mobileNav');
menuBtn.addEventListener('click',()=>mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));

const modal=document.getElementById('projectModal'), modalImg=document.getElementById('modalImage'), modalTitle=document.getElementById('modalTitle'), modalType=document.getElementById('modalType'), modalCopy=document.getElementById('modalCopy');
if(modal && modalImg && modalTitle && modalType && modalCopy){
document.querySelectorAll('.work-card').forEach(card=>card.addEventListener('click',()=>{
  modalImg.src=card.dataset.img; modalTitle.textContent=card.dataset.title; modalType.textContent=card.dataset.type; modalCopy.textContent=card.dataset.copy; modal.classList.add('open'); document.body.style.overflow='hidden';
}));
function closeModal(){modal.classList.remove('open');document.body.style.overflow=''}
document.getElementById('modalClose').addEventListener('click',closeModal);modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
document.getElementById('modalCTA').addEventListener('click',closeModal);
}

const form=document.getElementById('quoteForm'),toast=document.getElementById('toast');
if(form && toast){
form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const subject=encodeURIComponent('Leenovation Project Enquiry — '+data.get('type'));const body=encodeURIComponent('Name: '+data.get('name')+'\nProject type: '+data.get('type')+'\n\nMessage:\n'+data.get('message'));window.location.href='mailto:hello@leenovation.example?subject='+subject+'&body='+body;toast.textContent='Opening your email client with the enquiry prepared…';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),3500);});
}

const expertiseToggles=document.querySelectorAll('.expertise-toggle');
expertiseToggles.forEach(button=>{
  button.addEventListener('click',()=>{
    const panelId=button.getAttribute('aria-controls');
    const detail=document.getElementById(panelId);
    const item=button.closest('.expertise-item');
    const isExpanded=button.getAttribute('aria-expanded')==='true';

    if(detail){
      detail.hidden = isExpanded;
    }

    button.setAttribute('aria-expanded',String(!isExpanded));

    if(item){
      item.classList.toggle('open', !isExpanded);
    }
  });
});

const sections=[...document.querySelectorAll('main section[id]')], navLinks=[...document.querySelectorAll('.desktop-nav a')];
if('IntersectionObserver' in window && sections.length && navLinks.length){
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id))}),{rootMargin:'-45% 0px -45% 0px'});sections.forEach(s=>observer.observe(s));
}
