import{e as h,o as r,c as n,a as t,g as u,l as g,h as b,F as m,r as v,i as A,v as y,t as _}from"./index-62858c3f.js";import{S as f,N as k,F as w}from"./Footer-49c75a2f.js";import{a as p}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const S={id:"wrapper"},B={id:"content-wrapper",class:"d-flex flex-column"},x={id:"content"},T={class:"container-fluid mt-4"},L=t("h1",{class:"h3 mb-0 text-gray-800 text-center"},"About SBLF",-1),D={class:"row"},N=t("div",{class:"col-1"},null,-1),C={class:"col-10"},F=t("div",{class:"row mb-3"},[t("div",{class:"col-4"},[t("button",{class:"btn blueButton me-2","data-toggle":"modal","data-target":"#addAbout"}," Tulis About ")]),t("div",{class:"col-8"})],-1),O={class:"table-responsive"},I={key:0,class:"text-center"},V={key:1,class:"display table table-striped"},j=t("thead",null,[t("tr",null,[t("th",{scope:"col",style:{width:"50px"}},"No"),t("th",{scope:"col"},"About")])],-1),z=t("div",{class:"col-1"},null,-1),K={class:"modal fade",id:"addAbout",tabindex:"-1",role:"dialog","aria-labelledby":"addAboutLabel","aria-hidden":"true"},U={class:"modal-dialog",role:"document"},E={class:"modal-content"},J=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"addAboutLabel"},"Tulis About"),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[t("span",{"aria-hidden":"true"},"×")])],-1),M={class:"modal-body"},q={class:"mb-3"},P=t("label",{for:"about",class:"form-label"},"About",-1),R={class:"modal-footer"},W=t("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),G={data(){return{newAbout:"",aboutList:[],user_id:"",ready:!1,remainingTime:"Loading"}},methods:{async tambahAbout(){try{const e=await p.post("http://127.0.0.1:8000/api/auth/create-about",{about:this.newAbout},{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.newAbout="",this.fetchAbout(),this.showAlert("Berhasil!","Data about berhasil ditambahkan.","success")}catch(e){console.error(e),this.showAlert("Opps...","Terjadi kesalahan saat menambahkan data about.","error")}},async fetchAbout(){this.ready=!1;try{const e=await p.get("http://127.0.0.1:8000/api/auth/get-about",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.aboutList=e.data.data,this.ready=!0}catch(e){console.error(e),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data about.","error")}},showAlert(e,o,i){this.$swal({title:"Request Success",text:"Data Berhasil Dikirim!",icon:"success"}).then(()=>{$("#addAbout").modal("hide")})}},created(){const e=sessionStorage.getItem("token");if(e)try{const[o,i]=e.split("."),c=JSON.parse(atob(o)),s=atob(i),l=JSON.parse(atob(e.split(".")[1])),a=l.exp,d=new Date(a*1e3);console.log("Waktu Kedaluwarsa (UTC):",d.toUTCString()),new Date>d?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman"),this.user_id=l.id,console.log("ini idddd:",this.user_id),(!c||!s)&&this.$router.push("/"),this.fetchAbout()}catch(o){console.error("Error decoding token:",o),this.$router.push("/")}else this.$router.push("/")}},Z=Object.assign(G,{__name:"About",setup(e){const o=h(!1),i=h(""),c=()=>{o.value=!o.value,i.value=o.value?"toggle-sidebar":""};return(s,l)=>(r(),n(m,null,[t("div",S,[u(f,{class:g(i.value)},null,8,["class"]),t("div",B,[t("div",x,[u(k,{onToggleSidebar:c}),t("div",T,[L,t("div",D,[N,t("div",C,[F,t("div",O,[s.ready?b("",!0):(r(),n("p",I,"Loading...")),s.ready?(r(),n("table",V,[j,t("tbody",null,[(r(!0),n(m,null,v(s.aboutList,(a,d)=>(r(),n("tr",{key:a.id},[t("td",null,_(d+1),1),t("td",null,_(a.about),1)]))),128))])])):b("",!0)])]),z])])]),u(w)])]),t("div",K,[t("div",U,[t("div",E,[J,t("div",M,[t("form",null,[t("div",q,[P,A(t("textarea",{class:"form-control","onUpdate:modelValue":l[0]||(l[0]=a=>s.newAbout=a),placeholder:"Masukkan about"},null,512),[[y,s.newAbout]])])])]),t("div",R,[W,t("button",{type:"button",class:"btn blueButton",onClick:l[1]||(l[1]=(...a)=>s.tambahAbout&&s.tambahAbout(...a))}," Kirim ")])])])])],64))}});export{Z as default};
