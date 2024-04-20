import{N as y,J as g}from"./FooterComponent.vue_vue_type_style_index_0_scoped_fce70cd0_lang-11a445fe.js";import{_ as u,o as s,c as o,a as t,t as p,p as h,b as f,F as b,r as m,d as x,e as v,f as w,g as d}from"./index-62858c3f.js";import{R as C}from"./Register-935e5d01.js";import{_ as I}from"./logo-42795f0e.js";import{C as B}from"./ChatMe-4bcd988e.js";import{a as k}from"./axios-21b846bc.js";import"./sweetalert2.all-749d8cbc.js";const P={props:{dataQuote:{type:String,default:""}}},$=a=>(h("data-v-fe0da7db"),a=a(),f(),a),S={class:"container-fluid position-relative"},O=$(()=>t("div",{class:"overlay"},null,-1)),N={class:"row align-items-center"},Q=$(()=>t("div",{class:"col-3 mb-3"},null,-1)),R={class:"col-6 mb-3"},J={class:"text-center"},A=$(()=>t("div",{class:"col-3"},null,-1));function K(a,i,c,r,_,n){return s(),o("div",S,[O,t("div",N,[Q,t("div",R,[t("h3",J,p(c.dataQuote),1)]),A])])}const L=u(P,[["render",K],["__scopeId","data-v-fe0da7db"]]);const T={props:{dataClient:{type:Array,default:()=>[]}}},E=a=>(h("data-v-106dc4a4"),a=a(),f(),a),F={class:"clientPartner bg-light"},V={class:"container"},W=E(()=>t("h2",{class:"text-center fw-bold text-light"},"CLIENT PARTNER",-1)),j={class:"card-container"},D=["src"];function H(a,i,c,r,_,n){return s(),o("div",F,[t("div",V,[W,t("div",j,[(s(!0),o(b,null,m(c.dataClient,(e,l)=>(s(),o("div",{key:l,class:"card"},[t("img",{src:`https://backend-sblf.lumirainternational.com/storage/clientPartner/${e.image}`,alt:"Client Logo",class:"client-logo"},null,8,D)]))),128))])])])}const M=u(T,[["render",H],["__scopeId","data-v-106dc4a4"]]);const q={data(){return{}}},G={class:"contact bg-light mt-5"},z=x('<div class="container" data-v-abc4381c><div class="row" data-v-abc4381c><div class="col-sm-2" data-v-abc4381c><img src="'+I+'" alt="" data-v-abc4381c></div><div class="col-sm-3" data-v-abc4381c><h5 data-v-abc4381c>How We Can Help</h5><h6 data-v-abc4381c>Currently supported conditions</h6><h6 data-v-abc4381c>Our customers</h6></div><div class="col-sm-3" data-v-abc4381c><h5 data-v-abc4381c>Partner</h5><h6 data-v-abc4381c>Becom a partner</h6><h6 data-v-abc4381c>Feature</h6><h6 data-v-abc4381c>Create your event or business</h6></div><div class="col-sm-4" data-v-abc4381c><h5 data-v-abc4381c>Get In Touch</h5><h6 data-v-abc4381c><i class="bi bi-envelope-fill" data-v-abc4381c></i> Sblfberdikari@gmail.com</h6><h6 data-v-abc4381c><i class="bi bi-telephone-fill" data-v-abc4381c></i> +6282311898229</h6><h6 data-v-abc4381c><i class="bi bi-geo-alt-fill" data-v-abc4381c></i> Jl. Wijaya II No.5, RT.03/RW.01, Pulo</h6><h6 data-v-abc4381c>Kec. Kebayoran Baru, Kota Jakarta Selatan</h6><h6 data-v-abc4381c>Daerah Khusus Ibukota Jakarta 12160</h6></div></div></div>',1),U=[z];function X(a,i,c,r,_,n){return s(),o("div",G,U)}const Y=u(q,[["render",X],["__scopeId","data-v-abc4381c"]]);const Z={props:{dataBenefit:{type:Array,default:()=>[]}}},tt=a=>(h("data-v-eff07596"),a=a(),f(),a),at={class:"template",id:"benefit"},et={class:"container"},st=tt(()=>t("div",{class:"row"},[t("p",{class:"feature text-white","data-aos":"fade-down","data-aos-duration":"1000"},"Benefits & Programs")],-1)),ot={class:"row"},ct={class:"card","data-aos":"fade-up","data-aos-duration":"1000"},dt={class:"card-img-overlay"},nt={class:"card-title text-white"},it={class:"card-text text-white"};function rt(a,i,c,r,_,n){return s(),o("div",at,[t("div",et,[st,t("div",ot,[(s(!0),o(b,null,m(c.dataBenefit,(e,l)=>(s(),o("div",{class:"col-md-4 mb-4",key:l},[t("div",ct,[t("div",dt,[t("h5",nt,"Benefit "+p(l+1),1),t("p",it,p(e.benefit),1)])])]))),128))])])])}const _t=u(Z,[["render",rt],["__scopeId","data-v-eff07596"]]);const lt={props:{dataOpportunity:{type:Array,default:()=>[]}}},pt=a=>(h("data-v-2abe2b75"),a=a(),f(),a),ut={class:"opportunity bg-white",id:"opportunity"},vt={class:"container"},ht=pt(()=>t("div",{class:"row"},[t("div",{class:"col-sm-12"},[t("h2",{class:"portfolio","data-aos":"fade-down","data-aos-duration":"1000"},"Opportunity")])],-1)),ft={class:"row"},bt={class:"card-opportunity","data-aos":"fade-up","data-aos-duration":"1000"},mt=["src"],$t={class:"opportunity-details"},yt={class:"opportunity-title"},gt={class:"opportunity-description"};function xt(a,i,c,r,_,n){return s(),o("div",ut,[t("div",vt,[ht,t("div",ft,[(s(!0),o(b,null,m(c.dataOpportunity,(e,l)=>(s(),o("div",{class:"col-md-4 mb-4",key:l},[t("div",bt,[t("img",{src:`https://backend-sblf.lumirainternational.com/storage/images/${e.image}`,alt:"Image",class:"opportunity-image"},null,8,mt),t("div",$t,[t("h3",yt,p(e.judul),1),t("div",gt,p(e.deskripsi),1)])])]))),128))])])])}const wt=u(lt,[["render",xt],["__scopeId","data-v-2abe2b75"]]);const Nt={__name:"LandingPage",setup(a){const i=v([]),c=v([]),r=v(""),_=v([]);return w(async()=>{var n;try{const e=await k.get("https://backend-sblf.lumirainternational.com/api/list-profile");i.value=e.data.dataOpportunity||[],c.value=e.data.dataBenefit||[],r.value=((n=e.data.dataQuote[0])==null?void 0:n.quote)||"",_.value=e.data.dataClient||[]}catch(e){console.error(e)}}),(n,e)=>(s(),o(b,null,[d(B),d(y),d(g),d(wt,{dataOpportunity:i.value},null,8,["dataOpportunity"]),d(_t,{dataBenefit:c.value},null,8,["dataBenefit"]),d(L,{dataQuote:r.value},null,8,["dataQuote"]),d(M,{dataClient:_.value},null,8,["dataClient"]),d(C),d(Y)],64))}};export{Nt as default};
