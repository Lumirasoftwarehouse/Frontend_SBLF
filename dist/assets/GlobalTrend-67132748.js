import{N as _,J as i}from"./FooterComponent.vue_vue_type_style_index_0_scoped_fce70cd0_lang-11a445fe.js";import{_ as p,o,c as r,a as e,F as d,r as u,t as f,p as m,b,e as h,f as g,g as s}from"./index-62858c3f.js";import{F as v}from"./FooterComponent-dc751df1.js";import{a as T}from"./axios-21b846bc.js";import"./logo-42795f0e.js";const x={props:{dataTrend:{type:Array,default:()=>[]}}},y=t=>(m("data-v-4e9df89f"),t=t(),b(),t),k={class:"globalTrends bg-light"},I={class:"container"},N=y(()=>e("h2",{class:"text-center"},"GLOBAL TRENDS",-1)),S={class:"card-container"},$=["src"],B={class:"blue-box"};function F(t,n,a,l,L,w){return o(),r("div",k,[e("div",I,[N,e("div",S,[(o(!0),r(d,null,u(a.dataTrend,c=>(o(),r("div",{class:"card",key:c.id},[e("img",{src:`https://backend-sblf.lumirainternational.com/storage/globalTrend/${c.image}`,alt:"Card Image"},null,8,$),e("div",B,[e("p",null,f(c.judul),1)])]))),128))])])])}const G=p(x,[["render",F],["__scopeId","data-v-4e9df89f"]]),j={__name:"GlobalTrend",setup(t){const n=h("");return g(async()=>{try{const a=await T.get("https://backend-sblf.lumirainternational.com/api/list-profile");n.value=a.data.dataTrend||[]}catch(a){console.error(a)}}),(a,l)=>(o(),r(d,null,[s(_),s(i),s(G,{dataTrend:n.value},null,8,["dataTrend"]),s(v)],64))}};export{j as default};
