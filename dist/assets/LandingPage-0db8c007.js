import{N as y,J as w}from"./JumbotronComponent-bd6a6103.js";/* empty css                                                                        */import{_,o as e,c as o,a as t,t as u,p as f,b as v,F as h,r as $,d as b,e as m,f as x,g as c}from"./index-ccb2f7bd.js";import{_ as I}from"./logo-42795f0e.js";import{O as k}from"./OBIP-28168b1c.js";import{a as B}from"./axios-21b846bc.js";const C="/img/kiri.png",N="/img/kanan.png",S={props:{dataQuote:{type:String,default:""}}},g=a=>(f("data-v-c9d0c4b4"),a=a(),v(),a),O={class:"container-fluid"},P={class:"row align-items-center"},E=g(()=>t("div",{class:"col-3 mb-3"},[t("div",{class:"position-relative",style:{"margin-left":"-40px"}},[t("img",{src:C,alt:"batik",class:"img-fluid"})])],-1)),Q={class:"col-6 mb-3"},R={class:"text-center"},J=g(()=>t("div",{class:"col-3"},[t("div",{class:"position-relative"},[t("img",{src:N,alt:"batik",class:"img-fluid"})])],-1));function L(a,d,i,r,l,n){return e(),o("div",O,[t("div",P,[E,t("div",Q,[t("h4",R,u(i.dataQuote),1)]),J])])}const A=_(S,[["render",L],["__scopeId","data-v-c9d0c4b4"]]),F={props:{dataClient:{type:Array,default:()=>[]}}},K=a=>(f("data-v-106dc4a4"),a=a(),v(),a),T={class:"clientPartner bg-light"},V={class:"container"},j=K(()=>t("h2",{class:"text-center fw-bold text-light"},"CLIENT PARTNER",-1)),D={class:"card-container"},G=["src"];function H(a,d,i,r,l,n){return e(),o("div",T,[t("div",V,[j,t("div",D,[(e(!0),o(h,null,$(i.dataClient,(s,p)=>(e(),o("div",{key:p,class:"card"},[t("img",{src:`https://backend-sblf.lumirainternational.com/storage/clientPartner/${s.image}`,alt:"Client Logo",class:"client-logo"},null,8,G)]))),128))])])])}const W=_(F,[["render",H],["__scopeId","data-v-106dc4a4"]]),q="/img/register.png",M={},z={class:"register",id:"register"},U=b('<div class="container"><h2 class="text-center fw-bold mt-3 mb-4">REGISTER</h2><div class="row"><div class="col-sm-6"><img src="'+q+'" alt="register" width="90%"></div><div class="col-sm-6"><div class="mb-3"><label for="fullName" class="form-label">Full Name</label><input type="text" class="form-control" id="fullName" placeholder="Enter your full name"></div><div class="mb-3"><label for="email" class="form-label">Email</label><input type="email" class="form-control" id="email" placeholder="Enter your email"></div><div class="mb-3"><label for="phone" class="form-label">Phone Number</label><input type="tel" class="form-control" id="phone" placeholder="Enter your phone number"></div><div class="mb-3"><label for="company" class="form-label">Company Name</label><input type="text" class="form-control" id="company" placeholder="Enter your company name"></div></div></div></div>',1),X=[U];function Y(a,d){return e(),o("div",z,X)}const Z=_(M,[["render",Y]]),tt={data(){return{}}},at={class:"contact bg-light mt-5"},st=b('<div class="container" data-v-4030f140><div class="row" data-v-4030f140><div class="col-sm-2" data-v-4030f140><img src="'+I+'" alt="" data-v-4030f140></div><div class="col-sm-3" data-v-4030f140><h5 data-v-4030f140>How We Can Help</h5><p data-v-4030f140>Currently supported conditions</p><p data-v-4030f140>Our customers</p></div><div class="col-sm-3" data-v-4030f140><h5 data-v-4030f140>Partner</h5><p data-v-4030f140>Becom a partner</p><p data-v-4030f140>Feature</p><p data-v-4030f140>Create your event or business</p></div><div class="col-sm-4" data-v-4030f140><h5 data-v-4030f140>Get In Touch</h5><p data-v-4030f140>Sblfberdikari@gmail.com</p><p data-v-4030f140>+628231188229</p><p data-v-4030f140>JL. Wijaya II No.5, Rt.03/Rw.01, Pulo</p><p data-v-4030f140>Kec. Kebayoran Baru, Kota Jakarta Selatan</p><p data-v-4030f140>Daerah Khusus Ibukota Jakarta 12160</p></div></div></div>',1),et=[st];function ot(a,d,i,r,l,n){return e(),o("div",at,et)}const it=_(tt,[["render",ot],["__scopeId","data-v-4030f140"]]),ct={props:{dataBenefit:{type:Array,default:()=>[]}}},dt=a=>(f("data-v-eff07596"),a=a(),v(),a),nt={class:"template",id:"benefit"},rt={class:"container"},lt=dt(()=>t("div",{class:"row"},[t("p",{class:"feature text-white","data-aos":"fade-down","data-aos-duration":"1000"},"Benefits & Programs")],-1)),pt={class:"row"},_t={class:"card","data-aos":"fade-up","data-aos-duration":"1000"},ut={class:"card-img-overlay"},mt={class:"card-title text-white"},ft={class:"card-text text-white"};function vt(a,d,i,r,l,n){return e(),o("div",nt,[t("div",rt,[lt,t("div",pt,[(e(!0),o(h,null,$(i.dataBenefit,(s,p)=>(e(),o("div",{class:"col-md-4 mb-4",key:p},[t("div",_t,[t("div",ut,[t("h5",mt,"Benefit "+u(p+1),1),t("p",ft,u(s.benefit),1)])])]))),128))])])])}const ht=_(ct,[["render",vt],["__scopeId","data-v-eff07596"]]),$t={props:{dataOpportunity:{type:Array,default:()=>[]}}},bt=a=>(f("data-v-2abe2b75"),a=a(),v(),a),gt={class:"opportunity bg-white",id:"opportunity"},yt={class:"container"},wt=bt(()=>t("div",{class:"row"},[t("div",{class:"col-sm-12"},[t("h2",{class:"portfolio","data-aos":"fade-down","data-aos-duration":"1000"},"Opportunity")])],-1)),xt={class:"row"},It={class:"card-opportunity","data-aos":"fade-up","data-aos-duration":"1000"},kt=["src"],Bt={class:"opportunity-details"},Ct={class:"opportunity-title"},Nt={class:"opportunity-description"};function St(a,d,i,r,l,n){return e(),o("div",gt,[t("div",yt,[wt,t("div",xt,[(e(!0),o(h,null,$(i.dataOpportunity,(s,p)=>(e(),o("div",{class:"col-md-4 mb-4",key:p},[t("div",It,[t("img",{src:`https://backend-sblf.lumirainternational.com/storage/images/${s.image}`,alt:"Image",class:"opportunity-image"},null,8,kt),t("div",Bt,[t("h3",Ct,u(s.judul),1),t("div",Nt,u(s.deskripsi),1)])])]))),128))])])])}const Ot=_($t,[["render",St],["__scopeId","data-v-2abe2b75"]]),At={__name:"LandingPage",setup(a){const d=m([]),i=m([]),r=m(""),l=m([]);return x(async()=>{var n;try{const s=await B.get("https://backend-sblf.lumirainternational.com/api/list-profile");d.value=s.data.dataOpportunity||[],i.value=s.data.dataBenefit||[],r.value=((n=s.data.dataQuote[0])==null?void 0:n.quote)||"",l.value=s.data.dataClient||[]}catch(s){console.error(s)}}),(n,s)=>(e(),o(h,null,[c(y),c(w),c(k),c(Ot,{dataOpportunity:d.value},null,8,["dataOpportunity"]),c(ht,{dataBenefit:i.value},null,8,["dataBenefit"]),c(A,{dataQuote:r.value},null,8,["dataQuote"]),c(W,{dataClient:l.value},null,8,["dataClient"]),c(Z),c(it)],64))}};export{At as default};