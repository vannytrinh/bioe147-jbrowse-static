"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[14],{10014:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,featureData:()=>h});var s=a(46377),r=a(99834),n=a(66885),i=a(99546),o=a(32598),c=a(7706);const l=new Set(["DUP","TRA","INV","CNV","DEL"]);function h(e,t,a,s){const r=e.split("\t"),n=r[a?3:0],o=+r[a?4:1],c=+r[a?5:2],h=r[a?0:3],d=+r[a?1:4],f=+r[a?2:5],p=r[6],m=+r[7],w=u(r[8]),g=u(r[9]),b=r.slice(10),T=s?Object.fromEntries(s.slice(10).map(((e,t)=>[e,b[t]]))):b,D=l.has(b[0])?`<${b[0]}>`:void 0;return new i.SimpleFeature({...T,start:o,end:c,type:"paired_feature",refName:n,strand:w,name:p,score:m,uniqueId:t,mate:{refName:h,start:d,end:f,strand:g},...D?{ALT:[D]}:{}})}function u(e){return"+"===e?1:"-"===e?-1:"."===e?0:void 0}class d extends s.BaseFeatureDataAdapter{intervalTrees={};static capabilities=["getFeatures","getRefNames"];async loadDataP(e={}){const t=this.pluginManager,a=this.getConf("bedpeLocation"),s=await(0,r.openLocation)(a,t).readFile(e),n=(0,i.isGzip)(s)?await(0,c.unzip)(s):s;if(n.length>536870888)throw new Error("Data exceeds maximum string length (512MB)");const o=new TextDecoder("utf8",{fatal:!0}).decode(n).split(/\n|\r\n|\r/).filter((e=>!!e)),l=[];let h=0;for(;h<o.length&&o[h].startsWith("#");h++)l.push(o[h]);const u=l.join("\n"),d={},f={};for(;h<o.length;h++){const e=o[h],t=e.split("\t"),a=t[0],s=t[3];d[a]||(d[a]=[]),f[s]||(f[s]=[]),d[a].push(e),f[s].push(e)}return{header:u,feats1:d,feats2:f,columnNames:this.getConf("columnNames")}}async loadData(e={}){return this.bedpeFeatures||(this.bedpeFeatures=this.loadDataP(e).catch((e=>{throw this.bedpeFeatures=void 0,e}))),this.bedpeFeatures}async getRefNames(e={}){const{feats1:t,feats2:a}=await this.loadData(e);return[...new Set([...Object.keys(t),...Object.keys(a)])]}async getHeader(e={}){const{header:t}=await this.loadData(e);return t}async getNames(){const{header:e,columnNames:t}=await this.loadData();if(t.length)return t;const a=e.split(/\n|\r\n|\r/).filter((e=>!!e)).at(-1);return a?.includes("\t")?a.slice(1).split("\t").map((e=>e.trim())):void 0}async loadFeatureTreeP(e){const{feats1:t,feats2:a}=await this.loadData(),s=await this.getNames(),r=new o.Ay,n=t[e]?.map(((t,a)=>h(t,`${this.id}-${e}-${a}-r1`,!1,s)))??[],i=a[e]?.map(((t,a)=>h(t,`${this.id}-${e}-${a}-r2`,!0,s)))??[];for(const e of[...n,...i])r.insert([e.get("start"),e.get("end")],e);return r}async loadFeatureTree(e){return this.intervalTrees[e]||(this.intervalTrees[e]=this.loadFeatureTreeP(e).catch((t=>{throw this.intervalTrees[e]=void 0,t}))),this.intervalTrees[e]}getFeatures(e,t={}){return(0,n.ObservableCreate)((async t=>{const{start:a,end:s,refName:r}=e,n=await this.loadFeatureTree(r);n?.search([a,s]).forEach((e=>{t.next(e)})),t.complete()}),t.signal)}freeResources(){}}}}]);
//# sourceMappingURL=14.b9913d1d.chunk.js.map