import{m as g,j as k,_ as c,k as f,o as r,c as b,a as e,l as i,f as o,q as l,s as d,p as A,b as C,h as N}from"./index-ad023bb8.js";import{_ as p}from"./logo-42795f0e.js";const I={computed:{...g(["activeLink"]),navbarClass(){return{collapse:!this.isNavbarOpen,"navbar-collapse":!0}}},methods:{...k(["setActiveLink"]),toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen},setActive(t){this.setActiveLink(t)}}},u=t=>(A("data-v-b57f1d88"),t=t(),C(),t),y={class:"navbar navbar-expand-lg bg-body-tertiary navbar-light navbarCustom fixed-top"},L={class:"container"},$=u(()=>e("a",{class:"navbar-brand",href:"#"},[e("img",{src:p,alt:"sblf"})],-1)),w=u(()=>e("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),S={class:"navbar-nav ms-auto"},O={class:"nav-item pe-3"},R={class:"nav-item pe-2"},T={class:"nav-item pe-2"},B={class:"dropdown"},E={class:"dropdown-menu"},G={class:"nav-item pe-2"},P={class:"nav-item pe-2"},F={class:"nav-item pe-2"},K={class:"nav-item"};function V(t,a,_,m,h,s){const n=f("router-link");return r(),b("nav",y,[e("div",L,[$,w,e("div",{class:i(s.navbarClass),id:"navbarNav"},[e("ul",S,[e("li",O,[o(n,{class:i(["nav-link menu",{active:t.activeLink==="home"}]),to:{name:"landing-page"},onClick:a[0]||(a[0]=v=>s.setActive("home"))},{default:l(()=>[d("BERANDA")]),_:1},8,["class"])]),e("li",R,[o(n,{class:i(["nav-link menu",{active:t.activeLink==="about"}]),to:{name:"about-us"},onClick:a[1]||(a[1]=v=>s.setActive("about"))},{default:l(()=>[d("TENTANG KAMI")]),_:1},8,["class"])]),e("li",T,[e("div",B,[o(n,{class:"nav-link menu dropdown-toggle",to:{name:"obip"},"data-toggle":"dropdown","aria-expanded":"false"},{default:l(()=>[d("PROGRAM")]),_:1}),e("div",E,[o(n,{class:i(["dropdown-item",{active:t.activeLink==="obip"}]),to:{name:"obip"},onClick:a[2]||(a[2]=v=>s.setActive("obip"))},{default:l(()=>[d("OBIP")]),_:1},8,["class"]),o(n,{class:i(["dropdown-item",{active:t.activeLink==="olip"}]),to:{name:"olip"},onClick:a[3]||(a[3]=v=>s.setActive("olip"))},{default:l(()=>[d("OLIP")]),_:1},8,["class"])])])]),e("li",G,[o(n,{class:i(["nav-link menu",{active:t.activeLink==="services"}]),to:{name:"services"},onClick:a[4]||(a[4]=v=>s.setActive("services"))},{default:l(()=>[d("SERVICES")]),_:1},8,["class"])]),e("li",P,[o(n,{class:i(["nav-link menu",{active:t.activeLink==="anggota"}]),to:{name:"anggota"},onClick:a[5]||(a[5]=v=>s.setActive("anggota"))},{default:l(()=>[d("ANGGOTA")]),_:1},8,["class"])]),e("li",F,[o(n,{class:i(["nav-link menu",{active:t.activeLink==="pengurus"}]),to:{name:"pengurus"},onClick:a[6]||(a[6]=v=>s.setActive("pengurus"))},{default:l(()=>[d("PENGURUS")]),_:1},8,["class"])]),e("li",K,[o(n,{class:i(["btn",{active:t.activeLink==="daftar"}]),to:{name:"daftar"},onClick:a[7]||(a[7]=v=>s.setActive("daftar")),style:{background:"linear-gradient(to right, #2a3798, #0995dd)",color:"white"}},{default:l(()=>[d("DAFTAR")]),_:1},8,["class"])])])],2)])])}const U=c(I,[["render",V],["__scopeId","data-v-b57f1d88"]]);const x={data(){return{}}},D={class:"contact bg-light mt-5"},J=N('<div class="container" data-v-e509b1a0><div class="row" data-v-e509b1a0><div class="col-sm-2" data-v-e509b1a0><img src="'+p+'" alt="" data-v-e509b1a0></div><div class="col-sm-3" data-v-e509b1a0><h5 data-v-e509b1a0>How We Can Help</h5><h6 data-v-e509b1a0>Currently supported conditions</h6><h6 data-v-e509b1a0>Our customers</h6></div><div class="col-sm-3" data-v-e509b1a0><h5 data-v-e509b1a0>Partner</h5><h6 data-v-e509b1a0>Becom a partner</h6><h6 data-v-e509b1a0>Feature</h6><h6 data-v-e509b1a0>Create your event or business</h6></div><div class="col-sm-4" data-v-e509b1a0><h5 data-v-e509b1a0>Get In Touch</h5><h6 data-v-e509b1a0><i class="bi bi-envelope-fill" data-v-e509b1a0></i> Sblfberdikari@gmail.com</h6><h6 data-v-e509b1a0><i class="bi bi-telephone-fill" data-v-e509b1a0></i> +6282311898229</h6><h6 data-v-e509b1a0><i class="bi bi-geo-alt-fill" data-v-e509b1a0></i> Jl. Wijaya II No.5, RT.03/RW.01, Pulo</h6><h6 data-v-e509b1a0>Kec. Kebayoran Baru, Kota Jakarta Selatan</h6><h6 data-v-e509b1a0>Daerah Khusus Ibukota Jakarta 12160</h6></div></div></div>',1),M=[J];function W(t,a,_,m,h,s){return r(),b("div",D,M)}const q=c(x,[["render",W],["__scopeId","data-v-e509b1a0"]]);export{q as F,U as N};