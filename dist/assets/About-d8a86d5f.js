import{e as b,o as n,c as r,a as t,g as u,l as g,h,F as m,r as v,i as A,v as f,t as _}from"./index-39d12d04.js";import{S as y,N as k,F as w}from"./Footer-73a625ee.js";import{a as p}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const S={id:"wrapper"},B={id:"content-wrapper",class:"d-flex flex-column"},T={id:"content"},x={class:"container-fluid mt-4"},L=t("h1",{class:"h3 mb-0 text-gray-800 text-center"},"About SBLF",-1),N={class:"row"},C=t("div",{class:"col-1"},null,-1),D={class:"col-10"},F=t("div",{class:"row mb-3"},[t("div",{class:"col-4"},[t("button",{class:"btn blueButton me-2","data-toggle":"modal","data-target":"#addAbout"}," Tulis About ")]),t("div",{class:"col-8"})],-1),O={class:"table-responsive"},I={key:0,class:"text-center"},V={key:1,class:"display table table-striped"},j=t("thead",null,[t("tr",null,[t("th",{scope:"col",style:{width:"50px"}},"No"),t("th",{scope:"col"},"About")])],-1),z=t("div",{class:"col-1"},null,-1),K={class:"modal fade",id:"addAbout",tabindex:"-1",role:"dialog","aria-labelledby":"addAboutLabel","aria-hidden":"true"},U={class:"modal-dialog",role:"document"},E={class:"modal-content"},J=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"addAboutLabel"},"Tulis About"),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[t("span",{"aria-hidden":"true"},"×")])],-1),M={class:"modal-body"},P={class:"mb-3"},W=t("label",{for:"about",class:"form-label"},"About",-1),q={class:"modal-footer"},G=t("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),H={data(){return{newAbout:"",aboutList:[],user_id:"",ready:!1,remainingTime:"Loading"}},methods:{async tambahAbout(){try{const e=await p.post("https://backend-sblf.lumirainternational.com/api/auth/create-about",{about:this.newAbout},{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.newAbout="",this.fetchAbout(),this.showAlert("Berhasil!","Data about berhasil ditambahkan.","success")}catch(e){console.error(e),this.showAlert("Opps...","Terjadi kesalahan saat menambahkan data about.","error")}},async fetchAbout(){this.ready=!1;try{const e=await p.get("https://backend-sblf.lumirainternational.com/api/auth/get-about",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.aboutList=e.data.data,this.ready=!0}catch(e){console.error(e),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data about.","error")}},showAlert(e,s,i){this.$swal({title:e,text:s,icon:i}).then(()=>{$("#addAbout").modal("hide")})}},created(){const e=sessionStorage.getItem("token");if(e)try{const[s,i]=e.split("."),c=JSON.parse(atob(s)),a=atob(i),l=JSON.parse(atob(e.split(".")[1])),o=l.exp,d=new Date(o*1e3);console.log("Waktu Kedaluwarsa (UTC):",d.toUTCString()),new Date>d?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman"),this.user_id=l.id,console.log("ini idddd:",this.user_id),(!c||!a)&&this.$router.push("/"),this.fetchAbout()}catch(s){console.error("Error decoding token:",s),this.$router.push("/")}else this.$router.push("/")}},Z=Object.assign(H,{__name:"About",setup(e){const s=b(!1),i=b(""),c=()=>{s.value=!s.value,i.value=s.value?"toggle-sidebar":""};return(a,l)=>(n(),r(m,null,[t("div",S,[u(y,{class:g(i.value)},null,8,["class"]),t("div",B,[t("div",T,[u(k,{onToggleSidebar:c}),t("div",x,[L,t("div",N,[C,t("div",D,[F,t("div",O,[a.ready?h("",!0):(n(),r("p",I,"Loading...")),a.ready?(n(),r("table",V,[j,t("tbody",null,[(n(!0),r(m,null,v(a.aboutList,(o,d)=>(n(),r("tr",{key:o.id},[t("td",null,_(d+1),1),t("td",null,_(o.about),1)]))),128))])])):h("",!0)])]),z])])]),u(w)])]),t("div",K,[t("div",U,[t("div",E,[J,t("div",M,[t("form",null,[t("div",P,[W,A(t("textarea",{class:"form-control","onUpdate:modelValue":l[0]||(l[0]=o=>a.newAbout=o),placeholder:"Masukkan about"},null,512),[[f,a.newAbout]])])])]),t("div",q,[G,t("button",{type:"button",class:"btn blueButton",onClick:l[1]||(l[1]=(...o)=>a.tambahAbout&&a.tambahAbout(...o))}," Kirim ")])])])])],64))}});export{Z as default};
