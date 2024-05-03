import{a as _}from"./axios-21b846bc.js";import"./sweetalert2.all-749d8cbc.js";import{_ as m,o as i,c as a,a as e,t as l,g as h,F as u,r as p}from"./index-d3e38c36.js";const b={data(){return{beritaList:[],selected:null,ready:!1}},methods:{async fetchBerita(){this.ready=!1;try{const s=await _.get("https://backend-sblf.lumirainternational.com/api/list-berita");this.beritaList=s.data.data,this.ready=!0}catch(s){console.error(s),this.showAlert("Opps...","Terjadi kesalahan saat mengambil data berita.","error")}},showAlert(s,c,o){this.$swal({title:s,text:c,icon:o}).then(()=>{})},showBerita(s){this.selected=s}},created(){this.fetchBerita(),this.selected=this.$route.params.id}},f={class:"container mt-5"},g={class:"row"},v={class:"col-md-8"},k={key:0,class:"main-content p-4"},y=["src","alt"],B={class:"mb-3"},w={class:"col-md-4"},L={class:"sidebar-custom"},x=["onClick"],j={class:"d-flex align-items-center"},C=["src","alt"],D={class:"mb-0"};function A(s,c,o,F,t,d){return i(),a("div",f,[e("div",g,[e("div",v,[t.selected!=null?(i(),a("div",k,[e("img",{src:`https://backend-sblf.lumirainternational.com/storage/berita/${t.beritaList[t.selected].image}`,class:"img-fluid mb-3",alt:t.beritaList[t.selected].judul},null,8,y),e("h2",B,l(t.beritaList[t.selected].judul),1),e("p",null,l(t.beritaList[t.selected].deskripsi),1)])):h("",!0)]),e("div",w,[e("div",L,[(i(!0),a(u,null,p(t.beritaList,(r,n)=>(i(),a("div",{key:n,class:"news-item mb-3",onClick:N=>d.showBerita(n)},[e("div",j,[e("img",{src:`https://backend-sblf.lumirainternational.com/storage/berita/${r.image}`,class:"img-fluid me-3",alt:r.judul},null,8,C),e("div",null,[e("h6",D,l(r.judul),1)])])],8,x))),128))])])])])}const O=m(b,[["render",A],["__scopeId","data-v-93ef56de"]]);export{O as default};
