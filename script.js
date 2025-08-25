// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener("click", e=>{
    const target=document.querySelector(anchor.getAttribute("href"));
    if(target){e.preventDefault(); window.scrollTo({top:target.offsetTop-70, behavior:"smooth"});}
  });
});

// Animate menu items on scroll
const menuItems=document.querySelectorAll('.menu-item');
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold:0.1});
menuItems.forEach(item=>observer.observe(item));

// Reservation modal
const reservationForm=document.getElementById('reservation-form');
const modal=document.getElementById('confirmation-modal');
const closeModal=document.getElementById('close-modal');

reservationForm.addEventListener('submit', e=>{
  e.preventDefault();
  modal.style.display='block';
  modal.classList.add('show');
  reservationForm.reset();
});

closeModal.addEventListener('click', ()=>{
  modal.classList.remove('show');
  modal.style.display='none';
});

window.addEventListener('click', e=>{
  if(e.target===modal){
    modal.classList.remove('show');
    modal.style.display='none';
  }
});

// Translation button
const translateBtn=document.getElementById('translate-btn');
let currentLang='en';
translateBtn.addEventListener('click', ()=>{
  const elements=document.querySelectorAll('[data-en]');
  currentLang=currentLang==='en'?'es':'en';
  elements.forEach(el=>{el.textContent=el.getAttribute(`data-${currentLang}`);});
  translateBtn.textContent=currentLang==='en'?'ES':'EN';
});
