import{N as V,F as x}from"./FooterComponent-c1cc3094.js";import{H as A}from"./HeaderComponent-8908c7c0.js";import{_ as v,o,c as i,a as t,t as l,p as m,b,F as $,r as f,n as I,g as w,d as h,e as T,f as n}from"./index-5da3f134.js";import{a as S}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const k="/img/about.png";const M={props:{dataAbout:{type:String,required:!0}}},g=s=>(m("data-v-b3c3cbe4"),s=s(),b(),s),N={class:"container pt-4",id:"about"},B=g(()=>t("h2",{class:"text-center"},"About Us",-1)),F={class:"row"},L={class:"col-sm-6"},O=g(()=>t("div",{class:"col-sm-6"},[t("img",{src:k,alt:"about"})],-1));function C(s,_,a,r,u,p){return o(),i("div",N,[B,t("div",F,[t("div",L,[t("p",null,l(a.dataAbout),1)]),O])])}const E=v(M,[["render",C],["__scopeId","data-v-b3c3cbe4"]]);const j={props:{dataVisi:{type:String,default:""},dataMisi:{type:Array,default:()=>[]}}},y=s=>(m("data-v-f4080bf5"),s=s(),b(),s),G={class:"template",id:"visiMisi"},U={class:"container"},D={class:"row"},H={class:"col-md-12"},R={class:"vision-wrapper mb-5"},q=y(()=>t("h3",{class:"text-primary"},"Visi",-1)),z={class:"col-md-12"},J=y(()=>t("h3",{class:"text-primary"},"Misi",-1)),K={class:"mission-wrapper"},P={class:"mission-details"},Q={class:"mission-description"};function W(s,_,a,r,u,p){return o(),i("div",G,[t("div",U,[t("div",D,[t("div",H,[t("div",R,[q,t("p",null,l(a.dataVisi),1)])]),t("div",z,[J,t("div",K,[(o(!0),i($,null,f(a.dataMisi,(e,c)=>(o(),i("div",{key:c,class:"mission-item"},[t("div",{class:"mission-image",style:I({backgroundImage:"url("+e.image+")"})},null,4),t("div",P,[t("h4",null,l(e.title),1),t("p",Q,l(e.misi),1)])]))),128))])])])])])}const X=v(j,[["render",W],["__scopeId","data-v-f4080bf5"]]);const Y={props:{dataTrend:{type:Array,default:()=>[]}}},Z=s=>(m("data-v-b775af0a"),s=s(),b(),s),tt={class:"globalTrends bg-white"},st={class:"container"},at=Z(()=>t("h2",{class:"text-center"},"GLOBAL TRENDS",-1)),et={class:"card-container"},ot=["src"],it={class:"fw-bold"};function ct(s,_,a,r,u,p){return o(),i("div",tt,[t("div",st,[at,t("div",et,[(o(!0),i($,null,f(a.dataTrend,e=>(o(),i("div",{class:"card",key:e.id},[t("img",{src:`https://backend-sblf.lumirainternational.com/storage/globalTrend/${e.image}`,alt:"Card Image"},null,8,ot),t("h5",it,l(e.judul),1)]))),128))])])])}const dt=v(Y,[["render",ct],["__scopeId","data-v-b775af0a"]]);const nt={props:{dataValue:{type:Array,default:()=>[]}}},lt=s=>(m("data-v-c6e536c3"),s=s(),b(),s),_t={class:"orientationValue bg-white"},rt={class:"container"},ut=lt(()=>t("h2",{class:"text-center"},"ORIENTATION VALUE",-1)),pt={class:"row"},ht={key:0,class:"col-sm-6"},vt={class:"card"},mt={class:"card-content"},bt=["src"],$t={class:"blue-box"},ft={class:"col-sm-6"},gt={class:"row"},yt={class:"card"},Vt={class:"card-content"},xt=["src"],At={class:"blue-box"};function It(s,_,a,r,u,p){return o(),i("div",_t,[t("div",rt,[ut,t("div",pt,[a.dataValue.length>0?(o(),i("div",ht,[t("div",vt,[t("div",mt,[t("img",{src:`https://backend-sblf.lumirainternational.com/storage/orientationValue/${a.dataValue[0].image}`,alt:"Card Image"},null,8,bt),t("div",$t,[t("p",null,l(a.dataValue[0].judul),1)])])])])):w("",!0),t("div",ft,[t("div",gt,[(o(!0),i($,null,f(a.dataValue.slice(1),(e,c)=>(o(),i("div",{class:"col-sm-6",key:c},[t("div",yt,[t("div",Vt,[t("img",{src:`https://backend-sblf.lumirainternational.com/storage/orientationValue/${e.image}`,alt:"Card Image"},null,8,xt),t("div",At,[t("p",null,l(e.judul),1)])])])]))),128))])])])])])}const wt=v(nt,[["render",It],["__scopeId","data-v-c6e536c3"]]),Bt={__name:"AboutUs",setup(s){const _=h(""),a=h(""),r=h([]),u=h(""),p=h([]);return T(async()=>{var e,c;try{const d=await S.get("https://backend-sblf.lumirainternational.com/api/list-profile");_.value=((e=d.data.dataAbout[0])==null?void 0:e.about)||"",a.value=((c=d.data.dataVisi[0])==null?void 0:c.visi)||"",r.value=d.data.dataMisi||[],u.value=d.data.dataTrend||[],p.value=d.data.dataValue||[]}catch(d){console.error(d)}}),(e,c)=>(o(),i($,null,[n(V),n(A,{page:"about",text:"Tentang Strategic Business Leaders Forum"}),n(E,{dataAbout:_.value},null,8,["dataAbout"]),n(X,{dataVisi:a.value,dataMisi:r.value},null,8,["dataVisi","dataMisi"]),n(dt,{dataTrend:u.value},null,8,["dataTrend"]),n(wt,{dataValue:p.value},null,8,["dataValue"]),n(x)],64))}};export{Bt as default};