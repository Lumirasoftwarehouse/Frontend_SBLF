import{N as o,F as r}from"./FooterComponent-d14ee0d6.js";import{H as v}from"./HeaderComponent-cfdf5724.js";import{_ as c,o as d,c as s,h as n,d as l,e as m,f as e,F as g}from"./index-fa70ae61.js";import{a as p}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const _="/img/anggota/Farid.jpeg",u="/img/anggota/2.webp",h="/img/anggota/1.webp",b="/img/anggota/3.webp",A="/img/anggota/4.webp",f="/img/anggota/Tsalisa.jpeg",D="/img/anggota/qori.jpeg",F="/img/anggota/rifqi_adiasya.jpeg";const M={},S={class:"container member-section"},y=n('<h2 class="mb-5 fw-bold" data-v-29a5032e>Pengurus</h2><div class="row mt-5 pt-4" data-v-29a5032e><div class="col-md-12" data-v-29a5032e><div class="member" data-v-29a5032e><img src="'+_+'" alt="Dr. A. FARID AULIA, DEA" data-v-29a5032e><div class="member-content" data-v-29a5032e><h2 data-v-29a5032e>Dr. A. FARID AULIA, DEA</h2><p data-v-29a5032e>President</p></div></div></div></div><div class="row mt-5 pt-4" data-v-29a5032e><div class="col-md-12" data-v-29a5032e><div class="member" data-v-29a5032e><img src="'+u+'" alt="Feby M Faisal, S.H., M.S.M., PhD (Cand)" data-v-29a5032e><div class="member-content" data-v-29a5032e><h2 data-v-29a5032e>Feby M Faisal, S.H., M.S.M., PhD (Cand)</h2><p data-v-29a5032e>Secretary General</p></div></div></div></div><div class="row mt-3" data-v-29a5032e><div class="col-md-6 col-lg-4" data-v-29a5032e><div class="member" data-v-29a5032e><img src="'+h+'" alt="Anggota 3" data-v-29a5032e><div class="member-content" data-v-29a5032e><h2 data-v-29a5032e>Fretdy Purba, S.E., M.M.</h2><p data-v-29a5032e>Govt Relation and Treasury Executive Director</p></div></div></div><div class="col-md-6 col-lg-4" data-v-29a5032e><div class="member" data-v-29a5032e><img src="'+b+'" alt="Anggota 4" data-v-29a5032e><div class="member-content" data-v-29a5032e><h2 data-v-29a5032e>Jody Ikhsan Firdaus, S.E., S.Kom.</h2><p data-v-29a5032e>Financial and Membership Director</p></div></div></div><div class="col-md-6 col-lg-4" data-v-29a5032e><div class="member" data-v-29a5032e><img src="'+A+'" alt="Anggota 4" data-v-29a5032e><div class="member-content" data-v-29a5032e><h2 data-v-29a5032e>Faradita Fairuz, S.E. Mgt, MBA (Cand)</h2><p data-v-29a5032e>Innovation and Development Director</p></div></div></div></div><div class="row mt-3" data-v-29a5032e><div class="col-md-6 col-lg-4" data-v-29a5032e><div class="member" data-v-29a5032e><img src="'+f+'" alt="Anggota 2" data-v-29a5032e><div class="member-content" data-v-29a5032e><h2 data-v-29a5032e>Tsaltsa Haura, S.Psi, M.Psi</h2><p data-v-29a5032e>Director CSR and Public Relations</p></div></div></div><div class="col-md-6 col-lg-4" data-v-29a5032e><div class="member" data-v-29a5032e><img src="'+D+'" alt="Anggota 3" data-v-29a5032e><div class="member-content" data-v-29a5032e><h2 data-v-29a5032e>Dr. Dodi Qori U, S.T., M.T.</h2><p data-v-29a5032e>Blockchain Technology and Consultant Director</p></div></div></div><div class="col-md-6 col-lg-4" data-v-29a5032e><div class="member" data-v-29a5032e><img src="'+F+'" alt="Anggota 4" data-v-29a5032e><div class="member-content" data-v-29a5032e><h2 data-v-29a5032e>M. Rifqi Adiasya, S.Psi</h2><p data-v-29a5032e>Asset Valuation and Leveraging Director</p></div></div></div></div>',5),P=[y];function w(i,t){return d(),s("div",S,P)}const x=c(M,[["render",w],["__scopeId","data-v-29a5032e"]]),B={__name:"Pengurus",setup(i){const t=l([]);return m(async()=>{try{const a=await p.get("https://backend-sblf.lumirainternational.com/api/list-profile");t.value=a.data.dataValue||[]}catch(a){console.error(a)}}),(a,E)=>(d(),s(g,null,[e(o),e(v,{page:"pengurus",text:"Pengurus Strategic Business Leaders Forum"}),e(x,{dataValue:t.value},null,8,["dataValue"]),e(r)],64))}};export{B as default};