javascript:(function(){
  // limpa timers
  for(let i=1;i<100000;i++){ try{ clearInterval(i); clearTimeout(i); cancelAnimationFrame(i); }catch(e){} }
  // evita novos timers/frames
  window.setInterval = window.setTimeout = function(){ return 0; };
  window.requestAnimationFrame = function(){ return 0; };
  // pausa mídias
  document.querySelectorAll('video,audio').forEach(m=>{ try{ m.pause(); m.controls = true; }catch(e){} });
  // pausa animações/transições
  const s=document.createElement('style'); s.id='__freeze_style';
  s.textContent = '*{animation-play-state:paused!important;transition:none!important;}';
  (document.head||document.documentElement).appendChild(s);
  // bloqueia interações
  const root = document.documentElement || document.body;
  root.style.pointerEvents = 'none';
  // intercepta eventos comuns em captura
  const evs=['click','mousedown','mouseup','mousemove','keydown','keyup','scroll','wheel','touchstart','touchmove'];
  const stopper = e=>{ e.stopImmediatePropagation(); e.preventDefault(); };
  evs.forEach(ev=>window.addEventListener(ev, stopper, true));
  // indicador visual
  const badge = document.createElement('div');
  Object.assign(badge.style,{
    position:'fixed', right:'10px', top:'10px', zIndex:2147483647,
    background:'#c00', color:'#fff', padding:'6px 8px', fontSize:'12px',
    fontFamily:'monospace', borderRadius:'4px'
  });
  badge.id='__PAGE_FROZEN_BADGE';
  badge.textContent='PAGE FROZEN';
  (document.body||document.documentElement).appendChild(badge);
})();
```0
