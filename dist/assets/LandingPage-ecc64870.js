import{_,o as n,c as o,a as t,n as v,p as u,b as p,F as b,r as g,t as h,d as C,e as y,f as m,g as N,h as r}from"./index-6dd2d3b7.js";import{_ as I}from"./logo-42795f0e.js";import{a as T}from"./axios-21b846bc.js";const V="/assets/logo-34d0f812.png";const A={data(){return{isNavbarOpen:!1,activeLink:null}},computed:{navbarClass(){return{collapse:!this.isNavbarOpen,"navbar-collapse":!0}}},methods:{toggleNavbar(){this.isNavbarOpen=!this.isNavbarOpen},setActive(a){this.activeLink=a}}},$=a=>(u("data-v-cb2741eb"),a=a(),p(),a),S={class:"navbar navbar-expand-lg bg-body-tertiary navbar-light navbarCustom fixed-top"},w={class:"container"},L=$(()=>t("a",{class:"navbar-brand",href:"#"},[t("img",{src:V,alt:"sblf"})],-1)),E=$(()=>t("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1)),O={class:"navbar-nav ms-auto"},R={class:"nav-item"},B={class:"nav-item"},P={class:"nav-item"},Q={class:"nav-item"},j={class:"nav-item"},D=$(()=>t("li",{class:"nav-item"},[t("a",{class:"nav-link",href:"#berita"},[t("button",{class:"btn",style:{background:"linear-gradient(to right, #2A3798, #0995DD)",color:"white"}},"Register")])],-1));function G(a,s,c,d,l,i){return n(),o("nav",S,[t("div",w,[L,E,t("div",{class:v(i.navbarClass),id:"navbarNav"},[t("ul",O,[t("li",R,[t("a",{class:v(["nav-link menu",{active:l.activeLink==="home"}]),onClick:s[0]||(s[0]=e=>i.setActive("home")),href:"#about"},"HOME",2)]),t("li",B,[t("a",{class:v(["nav-link menu",{active:l.activeLink==="about"}]),onClick:s[1]||(s[1]=e=>i.setActive("about")),href:"#visiMisi"},"ABOUT US",2)]),t("li",P,[t("a",{class:v(["nav-link menu",{active:l.activeLink==="trends"}]),onClick:s[2]||(s[2]=e=>i.setActive("trends")),href:"#benefit"},"GLOBAL TRENDS",2)]),t("li",Q,[t("a",{class:v(["nav-link menu",{active:l.activeLink==="values"}]),onClick:s[3]||(s[3]=e=>i.setActive("values")),href:"#opportunity"},"ORIENTATION VALUES",2)]),t("li",j,[t("a",{class:v(["nav-link menu",{active:l.activeLink==="contact"}]),onClick:s[4]||(s[4]=e=>i.setActive("contact")),href:"#berita"},"CONTACT US",2)]),D])],2)])])}const F=_(A,[["render",G],["__scopeId","data-v-cb2741eb"]]),J="/img/jumbotron.png";const U={},x=a=>(u("data-v-1926476c"),a=a(),p(),a),K={class:"jumbotron",id:"/"},M=x(()=>t("img",{src:J,alt:"home",class:"jumbotron-image"},null,-1)),H=x(()=>t("div",{class:"lengkung bg-light"},null,-1)),W=[M,H];function q(a,s){return n(),o("div",K,W)}const z=_(U,[["render",q],["__scopeId","data-v-1926476c"]]);const X={props:{dataTrend:{type:Array,default:()=>[]}}},Y=a=>(u("data-v-bcb08f7f"),a=a(),p(),a),Z={class:"globalTrends bg-light"},tt={class:"container"},at=Y(()=>t("h2",{class:"text-center"},"GLOBAL TRENDS",-1)),et={class:"card-container"},st=["src"],nt={class:"blue-box"};function ot(a,s,c,d,l,i){return n(),o("div",Z,[t("div",tt,[at,t("div",et,[(n(!0),o(b,null,g(c.dataTrend,e=>(n(),o("div",{class:"card",key:e.id},[t("img",{src:`http://127.0.0.1:8000/storage/globalTrend/${e.image}`,alt:"Card Image"},null,8,st),t("div",nt,[t("p",null,h(e.judul),1)])]))),128))])])])}const ct=_(X,[["render",ot],["__scopeId","data-v-bcb08f7f"]]),it="/img/kiri.png",lt="/img/kanan.png";const dt={props:{dataQuote:{type:String,default:""}}},k=a=>(u("data-v-c9d0c4b4"),a=a(),p(),a),rt={class:"container-fluid"},_t={class:"row align-items-center"},vt=k(()=>t("div",{class:"col-3 mb-3"},[t("div",{class:"position-relative",style:{"margin-left":"-40px"}},[t("img",{src:it,alt:"batik",class:"img-fluid"})])],-1)),ut={class:"col-6 mb-3"},pt={class:"text-center"},mt=k(()=>t("div",{class:"col-3"},[t("div",{class:"position-relative"},[t("img",{src:lt,alt:"batik",class:"img-fluid"})])],-1));function ht(a,s,c,d,l,i){return n(),o("div",rt,[t("div",_t,[vt,t("div",ut,[t("h4",pt,h(c.dataQuote),1)]),mt])])}const bt=_(dt,[["render",ht],["__scopeId","data-v-c9d0c4b4"]]);const ft={props:{dataValue:{type:Array,default:()=>[]}}},gt=a=>(u("data-v-036e486e"),a=a(),p(),a),$t={class:"orientationValue bg-light"},yt={class:"container"},xt=gt(()=>t("h2",{class:"text-center"},"ORIENTATION VALUE",-1)),kt={class:"row"},Ct={key:0,class:"col-sm-6"},Nt={class:"card"},It={class:"card-content"},Tt=["src"],Vt={class:"blue-box"},At={class:"col-sm-6"},St={class:"row"},wt={class:"card"},Lt={class:"card-content"},Et=["src"],Ot={class:"blue-box"};function Rt(a,s,c,d,l,i){return n(),o("div",$t,[t("div",yt,[xt,t("div",kt,[c.dataValue.length>0?(n(),o("div",Ct,[t("div",Nt,[t("div",It,[t("img",{src:`http://127.0.0.1:8000/storage/orientationValue/${c.dataValue[0].image}`,alt:"Card Image"},null,8,Tt),t("div",Vt,[t("p",null,h(c.dataValue[0].judul),1)])])])])):C("",!0),t("div",At,[t("div",St,[(n(!0),o(b,null,g(c.dataValue.slice(1),(e,f)=>(n(),o("div",{class:"col-sm-6",key:f},[t("div",wt,[t("div",Lt,[t("img",{src:`http://127.0.0.1:8000/storage/orientationValue/${e.image}`,alt:"Card Image"},null,8,Et),t("div",Ot,[t("p",null,h(e.judul),1)])])])]))),128))])])])])])}const Bt=_(ft,[["render",Rt],["__scopeId","data-v-036e486e"]]);const Pt={props:{dataClient:{type:Array,default:()=>[]}}},Qt=a=>(u("data-v-af68a71c"),a=a(),p(),a),jt={class:"clientPartner bg-light"},Dt={class:"container"},Gt=Qt(()=>t("h2",{class:"text-center fw-bold text-light"},"CLIENT PARTNER",-1)),Ft={class:"card-container"},Jt=["src"];function Ut(a,s,c,d,l,i){return n(),o("div",jt,[t("div",Dt,[Gt,t("div",Ft,[(n(!0),o(b,null,g(c.dataClient,(e,f)=>(n(),o("div",{key:f,class:"card"},[t("img",{src:`http://127.0.0.1:8000/storage/clientPartner/${e.image}`,alt:"Client Logo",class:"client-logo"},null,8,Jt)]))),128))])])])}const Kt=_(Pt,[["render",Ut],["__scopeId","data-v-af68a71c"]]),Mt="/img/register.png",Ht={},Wt={class:"register",id:"register"},qt=y('<div class="container"><h2 class="text-center fw-bold mt-3 mb-4">REGISTER</h2><div class="row"><div class="col-sm-6"><img src="'+Mt+'" alt="register" width="90%"></div><div class="col-sm-6"><div class="mb-3"><label for="fullName" class="form-label">Full Name</label><input type="text" class="form-control" id="fullName" placeholder="Enter your full name"></div><div class="mb-3"><label for="email" class="form-label">Email</label><input type="email" class="form-control" id="email" placeholder="Enter your email"></div><div class="mb-3"><label for="phone" class="form-label">Phone Number</label><input type="tel" class="form-control" id="phone" placeholder="Enter your phone number"></div><div class="mb-3"><label for="company" class="form-label">Company Name</label><input type="text" class="form-control" id="company" placeholder="Enter your company name"></div></div></div></div>',1),zt=[qt];function Xt(a,s){return n(),o("div",Wt,zt)}const Yt=_(Ht,[["render",Xt]]);const Zt={data(){return{}}},ta={class:"contact bg-light mt-5"},aa=y('<div class="container" data-v-4030f140><div class="row" data-v-4030f140><div class="col-sm-2" data-v-4030f140><img src="'+I+'" alt="" data-v-4030f140></div><div class="col-sm-3" data-v-4030f140><h5 data-v-4030f140>How We Can Help</h5><p data-v-4030f140>Currently supported conditions</p><p data-v-4030f140>Our customers</p></div><div class="col-sm-3" data-v-4030f140><h5 data-v-4030f140>Partner</h5><p data-v-4030f140>Becom a partner</p><p data-v-4030f140>Feature</p><p data-v-4030f140>Create your event or business</p></div><div class="col-sm-4" data-v-4030f140><h5 data-v-4030f140>Get In Touch</h5><p data-v-4030f140>Sblfberdikari@gmail.com</p><p data-v-4030f140>+628231188229</p><p data-v-4030f140>JL. Wijaya II No.5, Rt.03/Rw.01, Pulo</p><p data-v-4030f140>Kec. Kebayoran Baru, Kota Jakarta Selatan</p><p data-v-4030f140>Daerah Khusus Ibukota Jakarta 12160</p></div></div></div>',1),ea=[aa];function sa(a,s,c,d,l,i){return n(),o("div",ta,ea)}const na=_(Zt,[["render",sa],["__scopeId","data-v-4030f140"]]);const la={__name:"LandingPage",setup(a){const s=m(""),c=m(""),d=m([]),l=m([]);return N(async()=>{var i;try{const e=await T.get("https://backend-sblf.lumirainternational.com/api/list-profile");s.value=e.data.dataTrend||[],c.value=((i=e.data.dataQuote[0])==null?void 0:i.quote)||"",d.value=e.data.dataValue||[],l.value=e.data.dataClient||[]}catch(e){console.error(e)}}),(i,e)=>(n(),o(b,null,[r(F),r(z),r(ct,{dataTrend:s.value},null,8,["dataTrend"]),r(bt,{dataQuote:c.value},null,8,["dataQuote"]),r(Bt,{dataValue:d.value},null,8,["dataValue"]),r(Kt,{dataClient:l.value},null,8,["dataClient"]),r(Yt),r(na)],64))}};export{la as default};