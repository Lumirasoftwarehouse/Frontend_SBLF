import{f as p,o as d,c as i,a as e,h,n as v,d as m,F as b,r as y,q as _,v as g,t as f}from"./index-e6a1b656.js";import{S as k,N as w,F as j}from"./Footer-fb29ced6.js";import{a as u}from"./axios-21b846bc.js";import{S as T}from"./sweetalert2.all-749d8cbc.js";import"./logo-42795f0e.js";const B={id:"wrapper"},C={id:"content-wrapper",class:"d-flex flex-column"},S={id:"content"},A={class:"container-fluid mt-4"},U=e("h1",{class:"h3 mb-0 text-gray-800 text-center"},"Orientation Value",-1),D={class:"row"},F=e("div",{class:"col-1"},null,-1),O={class:"col-10"},I=e("div",{class:"row mb-3"},[e("div",{class:"col-4"},[e("button",{class:"btn blueButton me-2","data-toggle":"modal","data-target":"#addValue"}," Tambahkan Value ")]),e("div",{class:"col-8"})],-1),N={class:"table-responsive"},L={key:0,class:"text-center"},x={key:1,class:"display table table-striped"},z=e("thead",null,[e("tr",null,[e("th",{scope:"col",style:{width:"50px"}},"No"),e("th",{scope:"col",style:{width:"130px"}},"Aksi"),e("th",{scope:"col"},"Image"),e("th",{scope:"col"},"Judul")])],-1),J=["onClick"],K=e("i",{class:"bi bi-pencil-square"},null,-1),M=[K],q=["onClick"],E=e("i",{class:"bi bi-trash3-fill"},null,-1),H=[E],P=["src"],W=e("div",{class:"col-1"},null,-1),G={class:"modal fade",id:"addValue",tabindex:"-1",role:"dialog","aria-labelledby":"addValueLabel","aria-hidden":"true"},Q={class:"modal-dialog",role:"document"},R={class:"modal-content"},X=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"addValueLabel"},"Tambahkan Value"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),Y={class:"modal-body"},Z={class:"mb-3"},ee=e("label",{for:"image",class:"form-label"},"Image",-1),ae={class:"mb-3"},te=e("label",{for:"judul",class:"form-label"},"Judul",-1),se={class:"modal-footer"},oe=e("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Batal ",-1),le={class:"modal",id:"updateValue",tabindex:"-1",role:"dialog","aria-labelledby":"updateValueLabel","aria-hidden":"true"},ne={class:"modal-dialog",role:"document"},de={class:"modal-content"},ie=e("div",{class:"modal-header"},[e("h5",{class:"modal-title",id:"updateValueLabel"},"Update Value"),e("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[e("span",{"aria-hidden":"true"},"×")])],-1),re={class:"modal-body"},ue={class:"mb-3"},ce=e("label",{for:"image",class:"form-label"},"Image",-1),he={class:"mb-3"},pe=e("label",{for:"judul",class:"form-label"},"Judul",-1),me={class:"modal-footer"},be=e("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"}," Batal ",-1),_e={data(){return{newBenefit:"",dataValues:{image:null,judul:""},dataUpdateValues:{image:null,judul:""},orientationValues:[],dataBenefit:"",idTrend:"",user_id:"",ready:!1,remainingTime:"Loading"}},methods:{setDataTrend(a,t){this.idTrend=a,this.dataUpdateValues.judul=t},async updateValue(){try{const a=new FormData;a.append("image",this.dataValues.image),a.append("judul",this.dataUpdateValues.judul);const t=await u.post(`http://127.0.0.1:8000/api/auth/update-orientation/${this.idTrend}`,a,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.updateValue="",this.fetchTrends(),this.showAlert("Success","Benefit berhasil diupdate","success")}catch(a){console.error(a),this.showAlert("Oops...","Terjadi kesalahan saat mengupdate benefit","error")}},async tambahValue(){try{const a=new FormData;a.append("image",this.dataValues.image),a.append("judul",this.dataValues.judul);const t=await u.post("http://127.0.0.1:8000/api/auth/create-orientation",a,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.dataValues={image:null,judul:""},this.fetchTrends(),this.showAlert("Berhasil!","Data benefit berhasil ditambahkan.","success")}catch(a){console.error(a),this.showAlert("Opps...","Terjadi kesalahan saat menambahkan data benefit.","error")}},async deleteTrend(a){try{const t=await u.delete(`http://127.0.0.1:8000/api/auth/delete-orientation/${a}`,{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});console.log(t.data),this.fetchTrends(),this.showAlert("Success","Benefit berhasil didelete","success")}catch(t){console.error(t),this.showAlert("Oops...","Terjadi kesalahan saat mendelete benefit","error")}},async fetchTrends(){this.ready=!1;try{const a=await u.get("http://127.0.0.1:8000/api/auth/list-orientation",{headers:{Authorization:`Bearer ${sessionStorage.getItem("token")}`}});this.orientationValues=a.data.data,this.ready=!0}catch(a){console.error(a),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data benefit.","error")}},showAlert(a,t,n){this.$swal({title:a,text:t,icon:n}).then(()=>{$("#addValue").modal("hide"),$("#updateValue").modal("hide")})},konfirmasi(a,t){T.fire({title:`Apakah Anda yakin ingin menghapus value ${t}?`,text:"Value akan dihapus jika anda menekan tombol Hapus.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#061387",confirmButtonText:"Hapus",cancelButtonText:"Batal"}).then(n=>{n.isConfirmed&&this.deleteTrend(a)})},handleFileUpload(a){this.dataValues.image=a.target.files[0]}},created(){const a=sessionStorage.getItem("token");if(a)try{const[t,n]=a.split("."),c=JSON.parse(atob(t)),o=atob(n),l=JSON.parse(atob(a.split(".")[1])),s=l.exp,r=new Date(s*1e3);console.log("Waktu Kedaluwarsa (UTC):",r.toUTCString()),new Date>r?(console.log("Keluar"),sessionStorage.removeItem("token"),this.$router.push("/")):console.log("Aman"),this.user_id=l.id,console.log("ini idddd:",this.user_id),(!c||!o)&&this.$router.push("/"),this.fetchTrends()}catch(t){console.error("Error decoding token:",t),this.$router.push("/")}else this.$router.push("/")}},ke=Object.assign(_e,{__name:"OrientationValue",setup(a){const t=p(!1),n=p(""),c=()=>{t.value=!t.value,n.value=t.value?"toggle-sidebar":""};return(o,l)=>(d(),i(b,null,[e("div",B,[h(k,{class:v(n.value)},null,8,["class"]),e("div",C,[e("div",S,[h(w,{onToggleSidebar:c}),e("div",A,[U,e("div",D,[F,e("div",O,[I,e("div",N,[o.ready?m("",!0):(d(),i("p",L,"Loading...")),o.ready?(d(),i("table",x,[z,e("tbody",null,[(d(!0),i(b,null,y(o.orientationValues,(s,r)=>(d(),i("tr",{key:s.id},[e("td",null,f(r+1),1),e("td",null,[e("button",{class:"btn btn-warning me-3","data-toggle":"modal","data-target":"#updateValue",onClick:V=>o.setDataTrend(s.id,s.judul)},M,8,J),e("button",{class:"btn btn-danger",onClick:V=>o.konfirmasi(s.id,s.judul)},H,8,q)]),e("td",null,[e("img",{src:`http://127.0.0.1:8000/storage/orientationValue/${s.image}`,alt:"trend",width:"200"},null,8,P)]),e("td",null,f(s.judul),1)]))),128))])])):m("",!0)])]),W])])]),h(j)])]),e("div",G,[e("div",Q,[e("div",R,[X,e("div",Y,[e("form",null,[e("div",Z,[ee,e("input",{type:"file",class:"form-control",id:"image",onChange:l[0]||(l[0]=(...s)=>o.handleFileUpload&&o.handleFileUpload(...s))},null,32)]),e("div",ae,[te,_(e("input",{type:"text",class:"form-control",id:"judul","onUpdate:modelValue":l[1]||(l[1]=s=>o.dataValues.judul=s),placeholder:"Masukkan judul"},null,512),[[g,o.dataValues.judul]])])])]),e("div",se,[oe,e("button",{type:"button",class:"btn blueButton",onClick:l[2]||(l[2]=(...s)=>o.tambahValue&&o.tambahValue(...s))}," Kirim ")])])])]),e("div",le,[e("div",ne,[e("div",de,[ie,e("div",re,[e("form",null,[e("div",ue,[ce,e("input",{type:"file",class:"form-control",id:"image",onChange:l[3]||(l[3]=(...s)=>o.handleFileUpload&&o.handleFileUpload(...s))},null,32)]),e("div",he,[pe,_(e("input",{type:"text",class:"form-control",id:"judul","onUpdate:modelValue":l[4]||(l[4]=s=>o.dataUpdateValues.judul=s),placeholder:"Masukkan judul"},null,512),[[g,o.dataUpdateValues.judul]])])])]),e("div",me,[be,e("button",{type:"button",class:"btn btn-primary",onClick:l[5]||(l[5]=(...s)=>o.updateValue&&o.updateValue(...s))}," Update ")])])])])],64))}});export{ke as default};
