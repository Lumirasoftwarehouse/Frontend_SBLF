import{S as f,N as C,F as k}from"./Footer-c98b6beb.js";import{a as c}from"./axios-21b846bc.js";import{S as y}from"./sweetalert2.all-749d8cbc.js";import{e as m,o as l,c as d,a as e,g as u,j as v,h as p,F as b,r as w,t as g}from"./index-6dc04a03.js";import"./logo-42795f0e.js";const B={id:"wrapper"},T={id:"content-wrapper",class:"d-flex flex-column"},S={id:"content"},A={class:"container-fluid mt-4"},U=e("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Client Partner",-1),D={class:"row"},F=e("div",{class:"col-1"},null,-1),I={class:"col-10"},N=e("div",{class:"row mb-3"},[e("div",{class:"col-4"},[e("button",{class:"btn blueButton me-2","data-toggle":"modal","data-target":"#addClient"}," Tambahkan Client ")]),e("div",{class:"col-8"})],-1),P={class:"table-responsive"},j={key:0,class:"text-center"},L={key:1,class:"display table table-striped"},O=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"50px"}},"No"),e("th",{scope:"col",style:{width:"130px"}},"Aksi"),e("th",{scope:"col"},"Image")])],-1),x=["onClick"],z=e("i",{class:"bi bi-pencil-square"},null,-1),K=[z],V=["onClick"],E=e("i",{class:"bi bi-trash3-fill"},null,-1),H=[E],J=["src"],q=e("div",{class:"col-1"},null,-1),W={class:"modal fade",id:"addClient",tabindex:"-1",role:"dialog","aria-labelledby":"addClientLabel","aria-hidden":"true"},G={class:"modal-dialog",role:"document"},M={class:"modal-content"},Q=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addClientLabel"},"Tambahkan Client"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),R={class:"modal-body"},X={class:"mb-3"},Y=e("label",{for:"image",class:"form-label"},"Image",-1),Z={class:"modal-footer"},ee=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),te={class:"modal",id:"updateClient",tabindex:"-1",role:"dialog","aria-labelledby":"updateClientLabel","aria-hidden":"true"},ae={class:"modal-dialog",role:"document"},se={class:"modal-content"},oe=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"updateClientLabel"},"Update Trend"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),ne={class:"modal-body"},ie={class:"mb-3"},le=e("label",{for:"image",class:"form-label"},"Image",-1),de={class:"modal-footer"},re=e("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"}," Batal ",-1),ce={data(){return{newBenefit:"",dataClient:{image:null},dataUpdateClients:{image:""},clientPartners:[],dataBenefit:"",idClient:"",user_id:"",ready:!1,remainingTime:"Loading"}},methods:{setDataTrend(t,a){this.idClient=t,this.dataUpdateClients.image=a},async updateClient(){try{const t=new FormData;t.append("image",this.dataClient.image);const a=await c.post(`https://backend-sblf.lumirainternational.com/api/auth/update-client/${this.idClient}`,t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(a.data),this.updateClient="",this.fetchTrends(),this.showAlert("Success","Benefit berhasil diupdate","success")}catch(t){console.error(t),this.showAlert("Oops...","Terjadi kesalahan saat mengupdate benefit","error")}},async tambahClient(){try{const t=new FormData;t.append("image",this.dataClient.image);const a=await c.post("https://backend-sblf.lumirainternational.com/api/auth/create-client",t,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(a.data),this.newBenefit="",this.fetchTrends(),this.showAlert("Berhasil!","Data benefit berhasil ditambahkan.","success")}catch(t){console.error(t),this.showAlert("Opps...","Terjadi kesalahan saat menambahkan data benefit.","error")}},async deleteTrend(t){try{const a=await c.delete(`https://backend-sblf.lumirainternational.com/api/auth/delete-client/${t}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(a.data),this.fetchTrends(),this.showAlert("Success","Benefit berhasil didelete","success")}catch(a){console.error(a),this.showAlert("Oops...","Terjadi kesalahan saat mendelete benefit","error")}},async fetchTrends(){this.ready=!1;try{const t=await c.get("https://backend-sblf.lumirainternational.com/api/auth/list-client",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.clientPartners=t.data.data,this.ready=!0}catch(t){console.error(t),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data benefit.","error")}},showAlert(t,a,i){this.$swal({title:t,text:a,icon:i}).then(()=>{$("#addClient").modal("hide"),$("#updateClient").modal("hide")})},konfirmasi(t,a){y.fire({title:`Apakah Anda yakin ingin menghapus trend ${a}?`,text:"Trend akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(i=>{i.isConfirmed&&this.deleteTrend(t)})},handleFileUpload(t){this.dataClient.image=t.target.files[0]}},created(){const t=sessionStorage.getItem("token");if(t)try{const[a,i]=t.split("."),h=JSON.parse(atob(a)),s=atob(i),n=JSON.parse(atob(t.split(".")[1])),o=n.exp,r=new Date(o*1e3);console.log("Waktu Kedaluwarsa (UTC):",r.toUTCString()),new Date>r?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman"),this.user_id=n.id,console.log("ini idddd:",this.user_id),(!h||!s)&&this.$router.push("/"),this.fetchTrends()}catch(a){console.error("Error decoding token:",a),this.$router.push("/")}else this.$router.push("/")}},ge=Object.assign(ce,{__name:"ClientPartner",setup(t){const a=m(!1),i=m(""),h=()=>{a.value=!a.value,i.value=a.value?"toggle-sidebar":""};return(s,n)=>(l(),d(b,null,[e("div",B,[u(f,{class:v(i.value)},null,8,["class"]),e("div",T,[e("div",S,[u(C,{onToggleSidebar:h}),e("div",A,[U,e("div",D,[F,e("div",I,[N,e("div",P,[s.ready?p("",!0):(l(),d("p",j,"Loading...")),s.ready?(l(),d("table",L,[O,e("tbody",null,[(l(!0),d(b,null,w(s.clientPartners,(o,r)=>(l(),d("tr",{key:o.id},[e("td",null,g(r+1),1),e("td",null,[e("button",{class:"btn btn-warning me-3","data-toggle":"modal","data-target":"#updateClient",onClick:_=>s.setDataTrend(o.id,o.image)},K,8,x),e("button",{class:"btn btn-danger",onClick:_=>s.konfirmasi(o.id,o.image)},H,8,V)]),e("td",null,[e("img",{src:`https://backend-sblf.lumirainternational.com/storage/clientPartner/${o.image}`,alt:"trend",width:"200"},null,8,J)])]))),128))])])):p("",!0)])]),q])])]),u(k)])]),e("div",W,[e("div",G,[e("div",M,[Q,e("div",R,[e("form",null,[e("div",X,[Y,e("input",{type:"file",class:"form-control",id:"image",onChange:n[0]||(n[0]=(...o)=>s.handleFileUpload&&s.handleFileUpload(...o))},null,32)])])]),e("div",Z,[ee,e("button",{type:"button",class:"btn blueButton",onClick:n[1]||(n[1]=(...o)=>s.tambahClient&&s.tambahClient(...o))}," Kirim ")])])])]),e("div",te,[e("div",ae,[e("div",se,[oe,e("div",ne,[e("form",null,[e("div",ie,[le,e("input",{type:"file",class:"form-control",id:"image",onChange:n[2]||(n[2]=(...o)=>s.handleFileUpload&&s.handleFileUpload(...o))},null,32),e("p",null,g(s.dataUpdateClients.image),1)])])]),e("div",de,[re,e("button",{type:"button",class:"btn btn-primary",onClick:n[3]||(n[3]=(...o)=>s.updateClient&&s.updateClient(...o))}," Update ")])])])])],64))}});export{ge as default};