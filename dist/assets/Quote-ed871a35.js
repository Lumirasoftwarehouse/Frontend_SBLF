import{f as h,o as r,c as n,a as t,h as u,n as g,d as m,F as _,r as v,q as f,v as y,t as b}from"./index-3f0c817d.js";import{S as k,N as Q,F as w}from"./Footer-52ebe55a.js";import{a as p}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const S={id:"wrapper"},B={id:"content-wrapper",class:"d-flex flex-column"},x={id:"content"},T={class:"container-fluid mt-4"},A=t("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Quote",-1),D={class:"row"},N=t("div",{class:"col-1"},null,-1),q={class:"col-10"},C=t("div",{class:"row mb-3"},[t("div",{class:"col-4"},[t("button",{class:"btn blueButton me-2","data-toggle":"modal","data-target":"#tulisQuote"}," Tulis Quote ")]),t("div",{class:"col-8"})],-1),L={class:"table-responsive"},O={key:0,class:"text-center"},F={key:1,class:"display table table-striped"},I=t("thead",null,[t("tr",null,[t("th",{scope:"col",style:{width:"50px"}},"No"),t("th",{scope:"col"},"Quote")])],-1),V=t("div",{class:"col-1"},null,-1),j={class:"modal fade",id:"tulisQuote",tabindex:"-1",role:"dialog","aria-labelledby":"tulisQuoteLabel","aria-hidden":"true"},z={class:"modal-dialog",role:"document"},K={class:"modal-content"},U=t("div",{class:"modal-header"},[t("h5",{class:"modal-title",id:"tulisQuoteLabel"},"Tulis Quote"),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[t("span",{"aria-hidden":"true"},"×")])],-1),E={class:"modal-body"},J={class:"mb-3"},M=t("label",{for:"about",class:"form-label"},"Quote",-1),P={class:"modal-footer"},R=t("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),W={data(){return{newQoute:"",dataQuote:[],user_id:"",ready:!1,remainingTime:"Loading"}},methods:{async kirimQuote(){try{const e=await p.post("http://backend-sblf.lumirainternational.com/api/auth/create-quote",{quote:this.newQoute},{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.newQoute="",this.fetchAbout(),this.showAlert("Berhasil!","Data about berhasil ditambahkan.","success")}catch(e){console.error(e),this.showAlert("Opps...","Terjadi kesalahan saat menambahkan data about.","error")}},async fetchAbout(){this.ready=!1;try{const e=await p.get("http://backend-sblf.lumirainternational.com/api/auth/get-quote",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.dataQuote=e.data.data,this.ready=!0}catch(e){console.error(e),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data about.","error")}},showAlert(e,o,i){this.$swal({title:"Request Success",text:"Data Berhasil Dikirim!",icon:"success"}).then(()=>{$("#tulisQuote").modal("hide")})}},created(){const e=sessionStorage.getItem("token");if(e)try{const[o,i]=e.split("."),c=JSON.parse(atob(o)),s=atob(i),l=JSON.parse(atob(e.split(".")[1])),a=l.exp,d=new Date(a*1e3);console.log("Waktu Kedaluwarsa (UTC):",d.toUTCString()),new Date>d?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman"),this.user_id=l.id,console.log("ini idddd:",this.user_id),(!c||!s)&&this.$router.push("/"),this.fetchAbout()}catch(o){console.error("Error decoding token:",o),this.$router.push("/")}else this.$router.push("/")}},Z=Object.assign(W,{__name:"Quote",setup(e){const o=h(!1),i=h(""),c=()=>{o.value=!o.value,i.value=o.value?"toggle-sidebar":""};return(s,l)=>(r(),n(_,null,[t("div",S,[u(k,{class:g(i.value)},null,8,["class"]),t("div",B,[t("div",x,[u(Q,{onToggleSidebar:c}),t("div",T,[A,t("div",D,[N,t("div",q,[C,t("div",L,[s.ready?m("",!0):(r(),n("p",O,"Loading...")),s.ready?(r(),n("table",F,[I,t("tbody",null,[(r(!0),n(_,null,v(s.dataQuote,(a,d)=>(r(),n("tr",{key:a.id},[t("td",null,b(d+1),1),t("td",null,b(a.quote),1)]))),128))])])):m("",!0)])]),V])])]),u(w)])]),t("div",j,[t("div",z,[t("div",K,[U,t("div",E,[t("form",null,[t("div",J,[M,f(t("textarea",{class:"form-control","onUpdate:modelValue":l[0]||(l[0]=a=>s.newQoute=a),placeholder:"Masukkan quote"},null,512),[[y,s.newQoute]])])])]),t("div",P,[R,t("button",{type:"button",class:"btn blueButton",onClick:l[1]||(l[1]=(...a)=>s.kirimQuote&&s.kirimQuote(...a))}," Kirim ")])])])])],64))}});export{Z as default};
