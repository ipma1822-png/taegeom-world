
const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
window.addEventListener('load',()=>setTimeout(()=>$('.page-loader')?.classList.add('hide'),450));
window.addEventListener('scroll',()=>$('.site-header')?.classList.toggle('scrolled',scrollY>30));
$('.menu-toggle')?.addEventListener('click',e=>{const n=$('.main-nav');n.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',n.classList.contains('open'))});
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});
$$('.reveal').forEach(el=>io.observe(el));
const counterIO=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=+el.dataset.count;let v=0,step=Math.max(1,Math.ceil(target/45));const t=setInterval(()=>{v=Math.min(target,v+step);el.textContent=v+(target===150?'+':'');if(v>=target)clearInterval(t)},28);counterIO.unobserve(el)}),{threshold:.6});
$$('[data-count]').forEach(el=>counterIO.observe(el));
document.addEventListener('mousemove',e=>{const g=$('.cursor-glow');if(g){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'}});
