import{N as c,F as r}from"./FooterComponent-1dde0695.js";import{H as n}from"./HeaderComponent-c25475db.js";import{_ as i,o as e,c as o,h as l,d as v,e as g,f as d,F as m}from"./index-bd8174e7.js";import{a as p}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const _={},h={class:"container team-section"},u=l('<h2 class="mb-5 fw-bold" data-v-d7da0e42>Anggota</h2><div class="row" data-v-d7da0e42><div class="col-md-6 col-lg-3" data-v-d7da0e42><div class="team-member" data-v-d7da0e42><img src="https://via.placeholder.com/300" alt="Anggota 1" data-v-d7da0e42><h2 data-v-d7da0e42>Anggota 1</h2><p data-v-d7da0e42>Description of Anggota 1.</p></div></div><div class="col-md-6 col-lg-3" data-v-d7da0e42><div class="team-member" data-v-d7da0e42><img src="https://via.placeholder.com/300" alt="Anggota 2" data-v-d7da0e42><h2 data-v-d7da0e42>Anggota 2</h2><p data-v-d7da0e42>Description of Anggota 2.</p></div></div><div class="col-md-6 col-lg-3" data-v-d7da0e42><div class="team-member" data-v-d7da0e42><img src="https://via.placeholder.com/300" alt="Anggota 3" data-v-d7da0e42><h2 data-v-d7da0e42>Anggota 3</h2><p data-v-d7da0e42>Description of Anggota 3.</p></div></div><div class="col-md-6 col-lg-3" data-v-d7da0e42><div class="team-member" data-v-d7da0e42><img src="https://via.placeholder.com/300" alt="Anggota 4" data-v-d7da0e42><h2 data-v-d7da0e42>Anggota 4</h2><p data-v-d7da0e42>Description of Anggota 4.</p></div></div></div>',2),f=[u];function A(s,t){return e(),o("div",h,f)}const b=i(_,[["render",A],["__scopeId","data-v-d7da0e42"]]),k={__name:"Anggota",setup(s){const t=v([]);return g(async()=>{try{const a=await p.get("https://backend-sblf.lumirainternational.com/api/list-profile");t.value=a.data.dataValue||[]}catch(a){console.error(a)}}),(a,x)=>(e(),o(m,null,[d(c),d(n,{page:"anggota",text:"Anggota Strategic Business Leaders Forum"}),d(b,{dataValue:t.value},null,8,["dataValue"]),d(r)],64))}};export{k as default};
