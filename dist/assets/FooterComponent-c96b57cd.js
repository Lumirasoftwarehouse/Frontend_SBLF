import{m as k,j as C,_ as v,k as N,o as _,c as u,a as e,l as o,f as d,q as c,s as l,p,b,h as A}from"./index-9b05ed8e.js";import{_ as h}from"./logo-42795f0e.js";const $={computed:{...k(["activeLink"]),navbarClass(){return{collapse:!this.isNavbarOpen,"navbar-collapse":!0}}},methods:{...C(["setActiveLink"]),toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen},setActive(a){this.setActiveLink(a)}}},f=a=>(p("data-v-33a6b146"),a=a(),b(),a),y={class:"navbar navbar-expand-lg bg-body-tertiary navbar-light navbarCustom fixed-top"},w={class:"container"},I=f(()=>e("a",{class:"navbar-brand",href:"#"},[e("img",{src:h,alt:"sblf"})],-1)),S=f(()=>e("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[e("span",{class:"navbar-toggler-icon"})],-1)),L={class:"navbar-nav ms-auto"},R={class:"nav-item"},T={class:"nav-item"},x={class:"nav-item"},B={class:"nav-item"},E={class:"nav-item"},G={class:"nav-item"},J={class:"nav-item"};function O(a,t,s,m,g,n){const i=N("router-link");return _(),u("nav",y,[e("div",w,[I,S,e("div",{class:o(n.navbarClass),id:"navbarNav"},[e("ul",L,[e("li",R,[d(i,{class:o(["nav-link menu",{active:a.activeLink==="home"}]),to:{name:"landing-page"},onClick:t[0]||(t[0]=r=>n.setActive("home"))},{default:c(()=>[l("BERANDA")]),_:1},8,["class"])]),e("li",T,[d(i,{class:o(["nav-link menu",{active:a.activeLink==="about"}]),to:{name:"about-us"},onClick:t[1]||(t[1]=r=>n.setActive("about"))},{default:c(()=>[l("TENTANG KAMI")]),_:1},8,["class"])]),e("li",x,[d(i,{class:o(["nav-link menu",{active:a.activeLink==="program"}]),to:{name:"program"},onClick:t[2]||(t[2]=r=>n.setActive("program"))},{default:c(()=>[l("PROGRAM")]),_:1},8,["class"])]),e("li",B,[d(i,{class:o(["nav-link menu",{active:a.activeLink==="services"}]),to:{name:"services"},onClick:t[3]||(t[3]=r=>n.setActive("services"))},{default:c(()=>[l("SERVICES")]),_:1},8,["class"])]),e("li",E,[d(i,{class:o(["nav-link menu",{active:a.activeLink==="anggota"}]),to:{name:"anggota"},onClick:t[4]||(t[4]=r=>n.setActive("anggota"))},{default:c(()=>[l("ANGGOTA")]),_:1},8,["class"])]),e("li",G,[d(i,{class:o(["nav-link menu",{active:a.activeLink==="pengurus"}]),to:{name:"pengurus"},onClick:t[5]||(t[5]=r=>n.setActive("pengurus"))},{default:c(()=>[l("PENGURUS")]),_:1},8,["class"])]),e("li",J,[d(i,{class:o(["btn",{active:a.activeLink==="daftar"}]),to:{name:"daftar"},onClick:t[6]||(t[6]=r=>n.setActive("daftar")),style:{background:"linear-gradient(to right, #2a3798, #0995dd)",color:"white"}},{default:c(()=>[l("DAFTAR")]),_:1},8,["class"])])])],2)])])}const X=v($,[["render",O],["__scopeId","data-v-33a6b146"]]);const j={props:{page:{type:String,default:""}}},F=a=>(p("data-v-f7039610"),a=a(),b(),a),K={class:"jumbotron",id:"/"},V=["src","height"],P=F(()=>e("div",{class:"lengkung bg-white"},null,-1));function D(a,t,s,m,g,n){return _(),u("div",K,[e("img",{src:`/img/${s.page=="home"?"jumbotron.png":s.page=="about"?"about.webp":s.page=="program"?"program.webp":s.page=="service"?"service.webp":s.page=="daftar"?"daftar.webp":s.page=="anggota"?"anggota.webp":s.page=="pengurus"?"pengurus.webp":""}`,alt:"home",height:`${s.page!="home"?"500":""}`,class:"jumbotron-image"},null,8,V),P])}const Y=v(j,[["render",D],["__scopeId","data-v-f7039610"]]);const M={data(){return{}}},W={class:"contact bg-light mt-5"},H=A('<div class="container" data-v-d0113d56><div class="row" data-v-d0113d56><div class="col-sm-2" data-v-d0113d56><img src="'+h+'" alt="" data-v-d0113d56></div><div class="col-sm-3" data-v-d0113d56><h5 data-v-d0113d56>How We Can Help</h5><h6 data-v-d0113d56>Currently supported conditions</h6><h6 data-v-d0113d56>Our customers</h6></div><div class="col-sm-3" data-v-d0113d56><h5 data-v-d0113d56>Partner</h5><h6 data-v-d0113d56>Becom a partner</h6><h6 data-v-d0113d56>Feature</h6><h6 data-v-d0113d56>Create your event or business</h6></div><div class="col-sm-4" data-v-d0113d56><h5 data-v-d0113d56>Get In Touch</h5><h6 data-v-d0113d56><i class="bi bi-envelope-fill" data-v-d0113d56></i> Sblfberdikari@gmail.com</h6><h6 data-v-d0113d56><i class="bi bi-telephone-fill" data-v-d0113d56></i> +6282311898229</h6><h6 data-v-d0113d56><i class="bi bi-geo-alt-fill" data-v-d0113d56></i> Jl. Wijaya II No.5, RT.03/RW.01, Pulo</h6><h6 data-v-d0113d56>Kec. Kebayoran Baru, Kota Jakarta Selatan</h6><h6 data-v-d0113d56>Daerah Khusus Ibukota Jakarta 12160</h6></div></div></div>',1),U=[H];function q(a,t,s,m,g,n){return _(),u("div",W,U)}const Z=v(M,[["render",q],["__scopeId","data-v-d0113d56"]]);export{Z as F,Y as J,X as N};
