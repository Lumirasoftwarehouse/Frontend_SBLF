import{N as l,F as u}from"./FooterComponent-455e5704.js";import{H as m}from"./HeaderComponent-f452b0ef.js";import{_ as h,o as r,c as o,a,F as n,r as f,t as d,p as g,b as B,d as v,e as b,f as s}from"./index-42610e98.js";import{a as y}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const x={props:{dataBerita:{type:Array,default:()=>[]}}},S=e=>(g("data-v-71c7db95"),e=e(),B(),e),F={class:"container",id:"berita"},$=S(()=>a("div",{class:"row"},[a("p",{class:"berita-title"},"Berita"),a("h2",{class:"some-berita-title"},"Some Of Our Berita")],-1)),k={class:"row"},w={class:"card"},I=["src"],N={class:"card-body"},A={class:"card-title"},C={class:"card-text"};function H(e,c,t,_,O,V){return r(),o("div",F,[$,a("div",k,[(r(!0),o(n,null,f(t.dataBerita,(i,p)=>(r(),o("div",{class:"col-md-3",key:p},[a("div",w,[a("img",{src:`http://127.0.0.1:8000/storage/berita/${i.image}`,class:"card-img-top",alt:"Card image cap"},null,8,I),a("div",N,[a("h5",A,d(i.judul),1),a("p",C,d(i.deskripsi),1)])])]))),128))])])}const L=h(x,[["render",H],["__scopeId","data-v-71c7db95"]]),z={__name:"Berita",setup(e){const c=v([]);return b(async()=>{try{const t=await y.get("http://127.0.0.1:8000/api/list-profile");c.value=t.data.dataBerita||[]}catch(t){console.error(t)}}),(t,_)=>(r(),o(n,null,[s(l),s(m,{page:"anggota",text:"Anggota Strategic Business Leaders Forum"}),s(L,{dataBerita:c.value},null,8,["dataBerita"]),s(u)],64))}};export{z as default};