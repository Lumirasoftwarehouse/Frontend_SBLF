import{_ as v}from"./logo-42795f0e.js";import{_ as d,m as p,o as c,c as _,a as t,h as s,B as i,n as x,e as k,x as w,t as y,A as m,p as g,b as h}from"./index-e6a1b656.js";const $={data(){return{sidebarToggled:!1}},methods:{toggleSidebar(){this.sidebarToggled=!this.sidebarToggled}}},S=k('<a class="sidebar-brand d-flex align-items-center justify-content-center" href="#"><div class="sidebar-brand-icon mt-2"><img src="'+v+'" alt="logo" width="50"></div><div class="sidebar-brand-text ms-3"><span class="text-primary">SBLF</span></div></a><div class="sidebar-heading mt-5 text-primary">Menu</div>',2),B={class:"nav-item"},T=t("i",{class:"bi bi-speedometer2 text-primary"},null,-1),C=t("span",null,"Dashboard",-1),N={class:"nav-item"},I=t("i",{class:"bi bi-bar-chart-line text-primary"},null,-1),L=t("span",null,"Global Trends",-1),A={class:"nav-item"},F=t("i",{class:"bi bi-chat-left-text text-primary"},null,-1),V=t("span",null,"Quote",-1),D={class:"nav-item"},M=t("i",{class:"bi bi-compass text-primary"},null,-1),P=t("span",null,"Orientation Value",-1),j={class:"nav-item"},z=t("i",{class:"bi bi-people text-primary"},null,-1),q=t("span",null,"Client Partner",-1),E=t("hr",{class:"sidebar-divider d-none d-md-block"},null,-1);function G(e,a,b,f,l,n){const o=p("router-link");return c(),_("ul",{class:x(["navbar-nav bg-light sidebar sidebar-dark accordion",{toggled:l.sidebarToggled}]),id:"accordionSidebar"},[S,t("li",B,[s(o,{class:"nav-link text-primary",to:"/admin-dashboard","active-class":"font-weight-bold active-link"},{default:i(()=>[T,C]),_:1})]),t("li",N,[s(o,{class:"nav-link text-primary",to:"/admin-trend","active-class":"font-weight-bold text-primary active-link"},{default:i(()=>[I,L]),_:1})]),t("li",A,[s(o,{class:"nav-link text-primary",to:"/admin-quote","active-class":"font-weight-bold text-primary active-link"},{default:i(()=>[F,V]),_:1})]),t("li",D,[s(o,{class:"nav-link text-primary",to:"/admin-value","active-class":"font-weight-bold text-primary active-link"},{default:i(()=>[M,P]),_:1})]),t("li",j,[s(o,{class:"nav-link text-primary",to:"/admin-client","active-class":"font-weight-bold text-primary active-link"},{default:i(()=>[z,q]),_:1})]),E],2)}const _t=d($,[["render",G]]);const O={props:{sidebarToggled:Boolean},data(){return{name:"",gambar:"",user_id:""}},methods:{sidebarToggled(){this.$emit("toggle-sidebar",!this.sidebarToggled)},konfirmasi(){Swal.fire({title:"Apakah Anda yakin ingin logout?",text:"Anda akan keluar dari akun ini.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Logout",cancelButtonText:"Batal"}).then(e=>{e.isConfirmed})},logout(){const e=sessionStorage.getItem("token");if(!e){Swal.fire({title:"Logout gagal",text:"Token tidak ditemukan.",icon:"error",confirmButtonColor:"#d33"});return}axios.post("http://127.0.0.1:8000/api/auth/logout",null,{headers:{Authorization:"Bearer "+e}}).then(a=>{Swal.fire({title:"Logout berhasil!",icon:"success",timer:1500,timerProgressBar:!0,showConfirmButton:!1}),sessionStorage.removeItem("token"),this.$router.push("/")}).catch(a=>{console.error(a),Swal.fire({title:"Logout gagal",text:"Terjadi kesalahan saat melakukan logout.",icon:"error",confirmButtonColor:"#d33"})})}},created(){}},r=e=>(g("data-v-784328ed"),e=e(),h(),e),Q={class:"navbar navbar-expand navbar-light customNav bgCustom topbar mb-4 static-top shadow"},H=r(()=>t("i",{class:"fa fa-bars"},null,-1)),J=[H],K={class:"navbar-nav ml-auto"},R=r(()=>t("div",{class:"topbar-divider d-none d-sm-block"},null,-1)),U={class:"nav-item dropdown no-arrow"},W={class:"nav-link dropdown-toggle",href:"#",id:"userDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},X={class:"mr-2 d-none d-lg-inline text-white small"},Y=["src"],Z={class:"dropdown-menu dropdown-menu-right shadow animated--grow-in","aria-labelledby":"userDropdown"},tt=r(()=>t("i",{class:"fas fa-solid fa-user fa-sm fa-fw mr-2 text-gray-400"},null,-1)),et=r(()=>t("i",{class:"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"},null,-1));function at(e,a,b,f,l,n){const o=p("router-link");return c(),_("nav",Q,[t("form",{class:"form-inline",onSubmit:a[1]||(a[1]=w(()=>{},["prevent"]))},[t("button",{id:"sidebarToggleTop",class:"btn btn-link d-md-none rounded-circle mr-3 text-light",onClick:a[0]||(a[0]=(...u)=>n.sidebarToggled&&n.sidebarToggled(...u))},J)],32),t("ul",K,[R,t("li",U,[t("a",W,[t("span",X,y(this.name),1),t("img",{src:"http://127.0.0.1:8000/storage/profile/"+l.gambar,alt:" gambarprofile",class:"img-profile rounded-circle"},null,8,Y)]),t("div",Z,[s(o,{class:"dropdown-item",to:"/admin-profile","data-toggle":"modal","data-target":"#logoutModal"},{default:i(()=>[tt,m(" Profil ")]),_:1}),t("a",{class:"dropdown-item",href:"#","data-toggle":"modal","data-target":"#logoutModal",onClick:a[2]||(a[2]=u=>n.konfirmasi())},[et,m(" Logout ")])])])])])}const ut=d(O,[["render",at],["__scopeId","data-v-784328ed"]]);const ot={},st=e=>(g("data-v-aadab347"),e=e(),h(),e),it={class:"sticky-footer customNav bgCustom"},nt=st(()=>t("div",{class:"container my-auto"},[t("div",{class:"copyright text-center my-auto"},[t("strong",null,"Copyright © SBLF 2024")])],-1)),rt=[nt];function lt(e,a){return c(),_("footer",it,rt)}const mt=d(ot,[["render",lt],["__scopeId","data-v-aadab347"]]);export{mt as F,ut as N,_t as S};
