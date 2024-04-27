import{d as g,o as l,c as n,a as s,f as b,l as v,g as h,F as p,r as y,i as _,v as M,t as u}from"./index-9b05ed8e.js";import{S as f,N as w,F as V}from"./Footer-3e0f63b8.js";import{a as c}from"./axios-21b846bc.js";import{S}from"./sweetalert2.all-749d8cbc.js";import"./logo-42795f0e.js";const B={id:"wrapper"},A={id:"content-wrapper",class:"d-flex flex-column"},C={id:"content"},T={class:"container-fluid mt-4"},L=s("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Visi & Misi",-1),N={class:"row"},I=s("div",{class:"col-1"},null,-1),x={class:"col-10"},z=s("div",{class:"btn-group",role:"group","aria-label":"Basic mixed styles example"},[s("button",{type:"button",class:"btn btn-warning","data-toggle":"modal","data-target":"#tambahVisiModal"}," Tulis Visi "),s("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#tambahMisiModal"}," Tambah Misi ")],-1),D={class:"table-responsive mt-3 mb-3"},U={key:0},j={key:1,class:"display table table-striped"},O=s("thead",null,[s("tr",null,[s("th",{scope:"col",style:{width:"50px"}},"No"),s("th",{scope:"col"},"Visi")])],-1),F={class:"table-responsive"},E={key:0},H={key:1,class:"display table table-striped"},J=s("thead",null,[s("tr",null,[s("th",{scope:"col",style:{width:"50px"}},"No"),s("th",{scope:"col",style:{width:"130px"}},"Aksi"),s("th",{scope:"col"},"Misi")])],-1),K=["onClick"],q=s("i",{class:"bi bi-pencil-square"},null,-1),P=[q],W=["onClick"],G=s("i",{class:"bi bi-trash3-fill"},null,-1),Q=[G],R=s("div",{class:"col-1"},null,-1),X={class:"modal",id:"tambahVisiModal",tabindex:"-1",role:"dialog","aria-labelledby":"tambahVisiModalLabel","aria-hidden":"true"},Y={class:"modal-dialog",role:"document"},Z={class:"modal-content"},ss=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"tambahVisiModalLabel"},"Tambah Visi"),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")])],-1),ts={class:"modal-body"},as={class:"modal-footer"},is=s("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"}," Batal ",-1),es={class:"modal",id:"tambahMisiModal",tabindex:"-1",role:"dialog","aria-labelledby":"tambahMisiModalLabel","aria-hidden":"true"},os={class:"modal-dialog",role:"document"},ls={class:"modal-content"},ns=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"tambahMisiModalLabel"},"Tambah Misi"),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")])],-1),ds={class:"modal-body"},rs={class:"modal-footer"},cs=s("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"}," Batal ",-1),hs={class:"modal",id:"updateMisiModal",tabindex:"-1",role:"dialog","aria-labelledby":"updateMisiModalLabel","aria-hidden":"true"},us={class:"modal-dialog",role:"document"},ms={class:"modal-content"},bs=s("div",{class:"modal-header"},[s("h5",{class:"modal-title",id:"updateMisiModalLabel"},"Update Misi"),s("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[s("span",{"aria-hidden":"true"},"×")])],-1),ps={class:"modal-body"},_s={class:"modal-footer"},Ms=s("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"}," Batal ",-1),gs={data(){return{newVisi:"",newMisi:"",visiList:[],misiList:[],dataMisi:"",idMisi:"",user_id:"",readyVisi:!1,readyMisi:!1}},methods:{setDataMisi(t,e){this.dataMisi=e,this.idMisi=t},async tambahVisi(){try{const t=await c.post("https://backend-sblf.lumirainternational.com/api/auth/create-visi",{visi:this.newVisi},{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.newVisi="",this.fetchVisi(),this.showAlert("Success","Visi berhasil ditambahkan","success")}catch(t){console.error(t),this.showAlert("Success","Terjadi kesalahan saat menambahkan visi","error")}},async tambahMisi(){try{const t=await c.post("https://backend-sblf.lumirainternational.com/api/auth/create-misi",{misi:this.newMisi},{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.newMisi="",this.fetchMisi(),this.showAlert("Success","Misi berhasil ditambahkan","success")}catch(t){console.error(t),this.showAlert("Oops...","Terjadi kesalahan saat menambahkan misi","error")}},async updateMisi(){try{const t=await c.post(`https://backend-sblf.lumirainternational.com/api/auth/update-misi/${this.idMisi}`,{misi:this.dataMisi},{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.dataMisi="",this.fetchMisi(),this.showAlert("Success","Misi berhasil diupdate","success")}catch(t){console.error(t),this.showAlert("Oops...","Terjadi kesalahan saat mengupdate misi","error")}},async deleteMisi(t){try{const e=await c.delete(`https://backend-sblf.lumirainternational.com/api/auth/delete-misi/${t}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(e.data),this.fetchMisi(),this.showAlert("Success","Misi berhasil didelete","success")}catch(e){console.error(e),this.showAlert("Oops...","Terjadi kesalahan saat mendelete misi","error")}},async fetchVisi(){this.readyVisi=!1;try{const t=await c.get("https://backend-sblf.lumirainternational.com/api/auth/get-visi",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.visiList=t.data.data,this.readyVisi=!0}catch(t){console.error(t)}},async fetchMisi(){this.readyMisi=!1;try{const t=await c.get("https://backend-sblf.lumirainternational.com/api/auth/get-misi",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.misiList=t.data.data,this.readyMisi=!0}catch(t){console.error(t)}},showAlert(t,e,d){this.$swal({title:t,text:e,icon:d}).then(()=>{$("#tambahVisiModal").modal("hide"),$("#tambahMisiModal").modal("hide"),$("#updateMisiModal").modal("hide")})},konfirmasi(t,e){S.fire({title:`Apakah Anda yakin ingin menghapus misi ${e}?`,text:"Misi akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(d=>{d.isConfirmed&&this.deleteMisi(t)})}},created(){const t=sessionStorage.getItem("token");if(t)try{const[e,d]=t.split("."),m=JSON.parse(atob(e)),i=atob(d),o=JSON.parse(atob(t.split(".")[1])),a=o.exp,r=new Date(a*1e3);console.log("Waktu Kedaluwarsa (UTC):",r.toUTCString()),new Date>r?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman"),this.user_id=o.id,console.log("ini idddd:",this.user_id),(!m||!i)&&this.$router.push("/"),this.fetchVisi(),this.fetchMisi()}catch(e){console.error("Error decoding token:",e),this.$router.push("/")}else this.$router.push("/")}},Vs=Object.assign(gs,{__name:"VisiMisi",setup(t){const e=g(!1),d=g(""),m=()=>{e.value=!e.value,d.value=e.value?"toggle-sidebar":""};return(i,o)=>(l(),n(p,null,[s("div",B,[b(f,{class:v(d.value)},null,8,["class"]),s("div",A,[s("div",C,[b(w,{onToggleSidebar:m}),s("div",T,[L,s("div",N,[I,s("div",x,[z,s("div",D,[i.readyVisi?h("",!0):(l(),n("p",U,"Loading data visi...")),i.readyVisi?(l(),n("table",j,[O,s("tbody",null,[(l(!0),n(p,null,y(i.visiList,(a,r)=>(l(),n("tr",{key:a.id},[s("td",null,u(r+1),1),s("td",null,u(a.visi),1)]))),128))])])):h("",!0)]),s("div",F,[i.readyMisi?h("",!0):(l(),n("p",E,"Loading data misi...")),i.readyMisi?(l(),n("table",H,[J,s("tbody",null,[(l(!0),n(p,null,y(i.misiList,(a,r)=>(l(),n("tr",{key:a.id},[s("td",null,u(r+1),1),s("td",null,[s("button",{class:"btn btn-warning me-3","data-toggle":"modal","data-target":"#updateMisiModal",onClick:k=>i.setDataMisi(a.id,a.misi)},P,8,K),s("button",{class:"btn btn-danger",onClick:k=>i.konfirmasi(a.id,a.misi)},Q,8,W)]),s("td",null,u(a.misi),1)]))),128))])])):h("",!0)])]),R])])]),b(V)])]),s("div",X,[s("div",Y,[s("div",Z,[ss,s("div",ts,[_(s("textarea",{class:"form-control","onUpdate:modelValue":o[0]||(o[0]=a=>i.newVisi=a),placeholder:"Masukkan Visi"},null,512),[[M,i.newVisi]])]),s("div",as,[is,s("button",{type:"button",class:"btn btn-primary",onClick:o[1]||(o[1]=(...a)=>i.tambahVisi&&i.tambahVisi(...a))}," Simpan ")])])])]),s("div",es,[s("div",os,[s("div",ls,[ns,s("div",ds,[_(s("textarea",{class:"form-control","onUpdate:modelValue":o[2]||(o[2]=a=>i.newMisi=a),placeholder:"Masukkan Misi"},null,512),[[M,i.newMisi]])]),s("div",rs,[cs,s("button",{type:"button",class:"btn btn-primary",onClick:o[3]||(o[3]=(...a)=>i.tambahMisi&&i.tambahMisi(...a))}," Simpan ")])])])]),s("div",hs,[s("div",us,[s("div",ms,[bs,s("div",ps,[_(s("textarea",{class:"form-control","onUpdate:modelValue":o[4]||(o[4]=a=>i.dataMisi=a),placeholder:"Masukkan Misi"},null,512),[[M,i.dataMisi]])]),s("div",_s,[Ms,s("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=(...a)=>i.updateMisi&&i.updateMisi(...a))}," Update ")])])])])],64))}});export{Vs as default};
