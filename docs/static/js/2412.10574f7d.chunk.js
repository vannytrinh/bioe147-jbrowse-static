"use strict";(globalThis.webpackChunk_jbrowse_web=globalThis.webpackChunk_jbrowse_web||[]).push([[2412],{92412:(e,t,l)=>{l.r(t),l.d(t,{default:()=>h});var a=l(7552),n=l(68446),r=l(49823),o=l(29499),i=l(1343),s=l(58507),c=l(5401),u=l(75785),m=l(43283);const d=(0,u.n9)()({dialogContent:{width:"80em"},textAreaFont:{fontFamily:"Courier New"},error:{color:"red",fontSize:"0.8em"}}),h=(0,n.observer)((function({model:e,handleClose:t}){const{classes:l}=d(),{activeFilters:n}=e,[u,h]=(0,a.useState)(n.join("\n")),[p,f]=(0,a.useState)();return(0,a.useEffect)((()=>{try{u.split("\n").map((e=>e.trim())).filter((e=>!!e)).map((e=>{var t;t=e.trim(),(0,m.A)(t)})),f(void 0)}catch(e){console.error(e),f(e)}}),[u]),a.createElement(r.Dialog,{maxWidth:"xl",open:!0,onClose:t,title:"Add track filters"},a.createElement(o.A,null,a.createElement("div",null,"Add filters, in jexl format, one per line, starting with the string jexl:. Examples:"," ",a.createElement("ul",null,a.createElement("li",null,a.createElement("code",null,"jexl:get(feature,'name')=='BRCA1'")," - show only feature where the name attribute is BRCA1"),a.createElement("li",null,a.createElement("code",null,"jexl:get(feature,'type')=='gene'")," - show only gene type features in a GFF that has many other feature types"),a.createElement("li",null,a.createElement("code",null,"jexl:get(feature,'score') > 400")," - show only features that have a score greater than 400"))),p?a.createElement("p",{className:l.error},`${p}`):null,a.createElement(i.A,{variant:"outlined",multiline:!0,minRows:5,maxRows:10,className:l.dialogContent,fullWidth:!0,value:u,onChange:e=>{h(e.target.value)},InputProps:{classes:{input:l.textAreaFont}}})),a.createElement(s.A,null,a.createElement(c.A,{variant:"contained",color:"primary",type:"submit",autoFocus:!0,disabled:!!p,onClick:()=>{e.setJexlFilters(u.split("\n")),t()}},"Submit"),a.createElement(c.A,{variant:"contained",color:"secondary",onClick:()=>{t()}},"Cancel")))}))}}]);
//# sourceMappingURL=2412.10574f7d.chunk.js.map