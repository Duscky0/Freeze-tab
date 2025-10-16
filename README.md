## 🧩 Descrição de Uso
Este bookmarklet congela completamente a página atual, pausando animações, timers, vídeos e bloqueando qualquer interação do mouse ou teclado.  
Ideal para inspecionar conteúdo estático ou capturar telas sem interferência de scripts em execução.

### Passos:
1. Copie o código abaixo.  
2. Crie um novo **favorito** no navegador.  
3. No campo de URL, cole o código do bookmarklet.  
4. Abra qualquer página da web.  
5. Clique no favorito para congelar a página.  
6. Um aviso vermelho com “PAGE FROZEN” aparecerá no canto superior direito indicando que o congelamento está ativo.  
7. Para desfazer, **recarregue a página** (F5 ou Ctrl+R).

### 📜 Código do Bookmarklet
```js
javascript:(function(){
  for(let i=1;i<100000;i++){try{clearInterval(i);clearTimeout(i);cancelAnimationFrame(i);}catch(e){}}
  window.setInterval=window.setTimeout=function(){return 0;};
  window.requestAnimationFrame=function(){return 0;};
  document.querySelectorAll('video,audio').forEach(m=>{try{m.pause();m.controls=true;}catch(e){}});
  const s=document.createElement('style');s.id='__freeze_style';
  s.textContent='*{animation-play-state:paused!important;transition:none!important;}';
  (document.head||document.documentElement).appendChild(s);
  const root=document.documentElement||document.body;root.style.pointerEvents='none';
  const evs=['click','mousedown','mouseup','mousemove','keydown','keyup','scroll','wheel','touchstart','touchmove'];
  const stopper=e=>{e.stopImmediatePropagation();e.preventDefault();};
  evs.forEach(ev=>window.addEventListener(ev,stopper,true));
  const badge=document.createElement('div');
  Object.assign(badge.style,{position:'fixed',right:'10px',top:'10px',zIndex:2147483647,background:'#c00',color:'#fff',padding:'6px 8px',fontSize:'12px',fontFamily:'monospace',borderRadius:'4px'});
  badge.id='__PAGE_FROZEN_BADGE';
  badge.textContent='PAGE FROZEN';
  (document.body||document.documentElement).appendChild(badge);
})();
