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

/* interactive-card-parallax */
const canHover = window.matchMedia('(hover:hover) and (pointer:fine)').matches;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (canHover && !reduceMotion) {
  document.querySelectorAll('.feature-card,.project-card').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - .5) * 5;
      const y = ((e.clientY - r.top) / r.height - .5) * -5;
      const visual = card.querySelector('.interactive-visual,.project-visual');
      if (visual) visual.style.transform = `translate3d(${x * .7}px,${y * .7}px,0) scale(1.015)`;
    });
    card.addEventListener('pointerleave', () => {
      const visual = card.querySelector('.interactive-visual,.project-visual');
      if (visual) visual.style.transform = '';
    });
  });
}
