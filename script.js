const revealEls=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');obs.unobserve(e.target)}}),{threshold:.08});
  revealEls.forEach(el=>obs.observe(el));
}else{revealEls.forEach(el=>el.classList.add('show'))}

const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
toggle?.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  toggle.setAttribute('aria-expanded',String(open));
});
links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  links.classList.remove('open');
  toggle?.setAttribute('aria-expanded','false');
}));
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&links?.classList.contains('open')){
    links.classList.remove('open');
    toggle?.setAttribute('aria-expanded','false');
    toggle?.focus();
  }
});