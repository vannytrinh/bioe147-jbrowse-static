"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[6946],{26946:(e,t,a)=>{a.d(t,{drawFeats:()=>m});var o=a(99546),s=a(91476),f=a(68584);function n(e,t,a,o,s,f){a<0&&(e+=a,a=-a),o<0&&(t+=o,o=-o),f&&(s.fillStyle=f),s.fillRect(e,t,a,o)}function r(e,t,a,o,s,f){a<0&&(e+=a,a=-a),o<0&&(t+=o,o=-o),f&&(s.strokeStyle=f),s.strokeRect(e,t,a,o)}var i=a(36917);function c({type:e,v0:t,v1:a,stats:o}){if("insertSizeAndOrientation"===e)return(0,i.sY)(t,a,o);if("orientation"===e)return(0,i.DW)(t);if("insertSize"===e)return(0,i.L9)(t,a,o);if("gradient"===e){const e=Math.min(t.start,a.start),o=Math.max(t.end,a.end);return[`hsl(${10*Math.log10(Math.abs(o-e))},50%,50%)`,`hsl(${10*Math.log10(Math.abs(o-e))},50%,30%)`]}}function m(e,t){const{chainData:a}=e;if(!a)return;const{assemblyManager:m}=(0,o.getSession)(e),h=(0,o.getContainingView)(e),l=h.assemblyNames[0],d=m.get(l);d&&((0,s.d)(a)?function({ctx:e,self:t,chainData:a,view:s,asm:i}){const m=[],h=(0,f.getConf)(t,"featureHeight"),l=t.colorBy?.type||"insertSizeAndOrientation",{chains:d,stats:x}=a;for(const a of d)if(a.length>1){const e=a[0],t=a[1],o=i.getCanonicalRefName(e.refName)||e.refName,f=i.getCanonicalRefName(t.refName)||t.refName,n=s.bpToPx({refName:o,coord:e.start})?.offsetPx,r=s.bpToPx({refName:o,coord:e.end})?.offsetPx,c=s.bpToPx({refName:f,coord:t.start})?.offsetPx,h=s.bpToPx({refName:f,coord:t.end})?.offsetPx;let l=0;if(void 0!==n&&void 0!==r&&void 0!==c&&void 0!==h){if(e.refName===t.refName){const a=Math.min(e.start,t.start),o=Math.max(e.end,t.end);l=Math.abs(o-a)}m.push({r1s:n,r1e:r,r2s:c,r2e:h,v0:e,v1:t,distance:l})}}else if(t.drawSingletons){const t=a[0],o=i.getCanonicalRefName(t.refName)||t.refName,f=s.bpToPx({refName:o,coord:t.start})?.offsetPx,c=s.bpToPx({refName:o,coord:t.end})?.offsetPx;if(void 0!==f&&void 0!==c){const t=Math.max(c-f,2);n(f-s.offsetPx,0,t,h,e,"#f00"),r(f-s.offsetPx,0,t,h,e,"#a00")}}const g=Math.log((0,o.max)(m.map((e=>e.distance)))),N=Math.max(Math.log((0,o.min)(m.map((e=>e.distance))))-1,0),P=(t.height-20)/(g-N);for(const{r1e:t,r1s:a,r2e:o,r2s:f,distance:i,v0:d,v1:g}of m){const m=Math.max(t-a,2),b=Math.max(o-f,2),[M,u]=c({type:l,v0:d,v1:g,stats:x})||[],v=(Math.log(i)-N)*P,p=h/2-.5,w=f-t;n(t-s.offsetPx,v+p,w,1,e,"black"),r(a-s.offsetPx,v,m,h,e,u),r(f-s.offsetPx,v,b,h,e,u),n(a-s.offsetPx,v,m,h,e,M),n(f-s.offsetPx,v,b,h,e,M)}}({self:e,view:h,asm:d,ctx:t,chainData:a}):function({ctx:e,self:t,chainData:a,view:s,asm:c}){const m=[],h=[],{chains:l}=a,{height:d}=t,x=(0,f.getConf)(t,"featureHeight");for(const e of l){let t=Number.MAX_VALUE,a=Number.MIN_VALUE;for(const o of e){const e=c.getCanonicalRefName(o.refName)||o.refName,f=s.bpToPx({refName:e,coord:o.start})?.offsetPx,n=s.bpToPx({refName:e,coord:o.end})?.offsetPx;void 0!==f&&void 0!==n&&(t=Math.min(t,f),a=Math.max(a,n))}const o=Math.abs(a-t);m.push(o),h.push(t)}const g=Math.log((0,o.max)(m)),N=Math.max(Math.log((0,o.min)(m))-1,0),P=(d-20)/(g-N),b=x/2-.5;for(let t=0;t<l.length;t++){const a=l[t],o=m[t],f=(Math.log(o)-N)*P;n(h[t]-s.offsetPx,f+b,o,1,e,"black");const d=a[0];let g;if(2048&d.flags){const e=d.SA?.split(";")[0].split(",")[2];g="-"===e?-1:1}else g=d.strand;for(const t of a){const a=c.getCanonicalRefName(t.refName)||t.refName,o=s.bpToPx({refName:a,coord:t.start})?.offsetPx,m=s.bpToPx({refName:a,coord:t.end})?.offsetPx;if(void 0!==o&&void 0!==m){const a=Math.max(m-o,2),c=o-s.offsetPx,h=-1==t.strand*g?"color_rev_strand":"color_fwd_strand";r(c,f,a,x,e,i.w7[h]),n(c,f,a,x,e,i.pf[h])}}}}({self:e,view:h,asm:d,ctx:t,chainData:a}))}},91476:(e,t,a)=>{function o(e){for(const t of e.chains.values())if(1&t[0].flags)return!0;return!1}a.d(t,{d:()=>o})}}]);
//# sourceMappingURL=6946.dd09a891.chunk.js.map