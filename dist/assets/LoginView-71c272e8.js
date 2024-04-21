import{u as $,x as E,e as _,f as L,y as N,z as R,o as d,A as M,B as p,_ as x,k as O,c as m,a,g as S,i as g,v as I,C as U,w as j,D as A,h as f,E as F,s as H,p as q,b as z}from"./index-ed98226b.js";import{C as G}from"./ChatMe-f15b907e.js";import{a as J}from"./axios-21b846bc.js";import{S as W}from"./sweetalert2.all-749d8cbc.js";const Y=$({props:{value:{default:""},chars:{default:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"},count:{default:5},hideLines:{type:Boolean,default:!1},customTextColor:{default:""},textColors:{default:()=>[]},isDirty:{type:Boolean,default:!0},width:{default:function(s){return s.count*30}},height:{default:50},canvasClass:{default:""},icon:{default:"refresh"},captchaFont:{default:"bold 28px sans-serif"}},emits:["isValid","getCode","update:modelValue"],setup(s,{emit:e}){const t=s,o=E(),i=_();let n=_(""),c=t.width,h=t.height;L(()=>{w()});const w=()=>{i.value.width=c,i.value.height=h;let l=i.value.getContext("2d");for(let r=0;r<t.count;r++){let v=Math.floor(Math.random()*t.chars.length),b=Math.random()*30*Math.PI/180,y=t.chars[v];n.value+=y;let k=10+r*25,V=30+Math.random()*8;l.font=t.captchaFont,l.translate(k,V),t.customTextColor?l.fillStyle=t.customTextColor:t.textColors.length?l.fillStyle=t.textColors[Math.floor(Math.random()*t.textColors.length)]:l.fillStyle=C(),l.rotate(b),l.fillText(y,0,0),l.rotate(-b),l.translate(-k,-V)}t.hideLines||P(),T()},P=()=>{let l=i.value.getContext("2d");for(let r=0;r<t.count;r++)l.strokeStyle=C(),l.beginPath(),l.moveTo(Math.random()*c,Math.random()*h),l.lineTo(Math.random()*c,Math.random()*h),l.stroke()},T=()=>{e("getCode",n.value)};N(()=>{n.value&&n.value===t.value?e("isValid",!0):e("isValid",!1)}),R(n,l=>{e("update:modelValue",l)});const C=()=>{let l=Math.floor(Math.random()*256),r=Math.floor(Math.random()*256),v=Math.floor(Math.random()*256);return"rgb("+l+","+r+","+v+")"},B=()=>{i.value.getContext("2d").clearRect(0,0,c,h),n.value="",w()},D=()=>p("div",{class:"vue_client_recaptcha"},[p("div",{class:"vue_client_recaptcha_icon",onClick:()=>B()},[p(o.icon?o.icon:"svg",{class:"vue_client_recaptcha_icon_svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[p("path",{d:"M2 12a9 9 0 0 0 9 9c2.39 0 4.68-.94 6.4-2.6l-1.5-1.5A6.706 6.706 0 0 1 11 19c-6.24 0-9.36-7.54-4.95-11.95C10.46 2.64 18 5.77 18 12h-3l4 4h.1l3.9-4h-3a9 9 0 0 0-18 0Z",fill:"#333333"})])]),p("canvas",{id:"captcha_canvas",class:`captcha_canvas ${t.canvasClass}`,ref:i},n.value)]);return(l,r)=>(d(),M(D))}});const Z={components:{VueClientRecaptcha:Y},setup(){const s=_(""),e=U(),t=c=>{n.captchaCode=c},o=c=>{n.isValid=c,c&&i()},i=()=>{e.emit("emitCaptcha",!1)},n=_({captchaCode:null,isValid:!1});return{inputValue:s,data:n,getCaptchaCode:t,checkValidCaptcha:o,captchaM:i}}},K={class:"sample-captcha"},Q={class:"row"},X={class:"col-sm-6"},tt={class:"captcha-box"},et={class:"col-sm-6"},at={class:"data-box"};function ot(s,e,t,o,i,n){const c=O("VueClientRecaptcha");return d(),m("div",K,[a("div",Q,[a("div",X,[a("section",tt,[S(c,{value:o.inputValue,onGetCode:o.getCaptchaCode,onIsValid:o.checkValidCaptcha},null,8,["value","onGetCode","onIsValid"])])]),a("div",et,[a("section",at,[g(a("input",{"onUpdate:modelValue":e[0]||(e[0]=h=>o.inputValue=h),placeholder:"Masukkan captcha",class:"input",type:"text"},null,512),[[I,o.inputValue]])])])])])}const st=x(Z,[["render",ot]]);const u=s=>(q("data-v-aef12ba6"),s=s(),z(),s),lt={class:"container"},nt={class:"row justify-content-center"},ct={class:"col-xl-10 col-lg-12 col-md-9"},it={class:"card o-hidden border-0 shadow-lg my-5"},rt={class:"card-body p-0"},dt={class:"row"},ht=u(()=>a("div",{class:"col-lg-6 d-none d-lg-block bg-login-image"},null,-1)),ut={class:"col-lg-6"},pt={class:"p-5"},mt=u(()=>a("div",{class:"text-center"},[a("h1",{class:"h4 text-gray-900 mb-4"},"Selamat Datang!")],-1)),ft={class:"form-group"},gt={class:"form-group"},_t={class:"row"},vt={class:"col-10"},wt=["type"],Ct={class:"col-2"},bt={class:"form-group"},yt={class:"custom-control custom-checkbox small"},kt=u(()=>a("label",{class:"custom-control-label",for:"customCheck"},"Ingat Saya",-1)),Vt={key:0,class:"confirmHuman"},Mt=u(()=>a("img",{width:"48",height:"48",src:"https://img.icons8.com/fluency/48/checked.png",alt:"checked"},null,-1)),xt=u(()=>a("button",{type:"submit",class:"btn btn-primary btn-user btn-block mt-3"}," Masuk ",-1)),St=u(()=>a("hr",null,null,-1)),It={data(){return{form:{email:null,password:null},uniqueValue:"",cheked:!1,captchaValidate:!0,showPassword:!1}},methods:{togglePasswordVisibility(){this.showPassword=!this.showPassword},captchaCode(s){this.captchaValidate=s},login(){const s=new FormData;s.append("email",this.form.email),s.append("password",this.form.password),J.post("https://backend-sblf.lumirainternational.com/api/auth/login",s).then(e=>{if(this.cheked===!0){const o=JSON.stringify(this.form);localStorage.setItem("login",o)}else localStorage.getItem("login")&&localStorage.removeItem("login");const t=e.data.access_token;sessionStorage.setItem("token",t),this.$router.push("/admin-dashboard")}).catch(e=>{console.error(e),this.captchaValidate=!0,W.fire({icon:"error",title:"Oops...",text:"Login gagal. Periksa kembali email dan password Anda."})})}},mounted(){const s=document.querySelector("body");s.style.backgroundImage="url(/img/wilayah.jpg)",s.style.backgroundRepeat="no-repeat",s.style.backgroundSize="cover"},created(){const s=localStorage.getItem("login");s&&(this.form=JSON.parse(s),this.cheked=!0)}},Pt=Object.assign(It,{__name:"LoginView",setup(s){return(e,t)=>(d(),m("div",lt,[S(G),a("div",nt,[a("div",ct,[a("div",it,[a("div",rt,[a("div",dt,[ht,a("div",ut,[a("div",pt,[mt,a("form",{class:"user",onSubmit:t[5]||(t[5]=j((...o)=>e.login&&e.login(...o),["prevent"]))},[a("div",ft,[g(a("input",{type:"email",class:"form-control form-control-user",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Masukkan Email","onUpdate:modelValue":t[0]||(t[0]=o=>e.form.email=o)},null,512),[[I,e.form.email]])]),a("div",gt,[a("div",_t,[a("div",vt,[g(a("input",{type:e.showPassword?"text":"password",class:"form-control form-control-user",id:"exampleInputPassword",placeholder:"Masukkan Password","onUpdate:modelValue":t[1]||(t[1]=o=>e.form.password=o)},null,8,wt),[[A,e.form.password]])]),a("div",Ct,[e.showPassword?f("",!0):(d(),m("i",{key:0,class:"bi customIcon bi-eye-slash-fill",onClick:t[2]||(t[2]=(...o)=>e.togglePasswordVisibility&&e.togglePasswordVisibility(...o))})),e.showPassword?(d(),m("i",{key:1,class:"bi customIcon bi-eye-fill",onClick:t[3]||(t[3]=(...o)=>e.togglePasswordVisibility&&e.togglePasswordVisibility(...o))})):f("",!0)])])]),a("div",bt,[a("div",yt,[g(a("input",{type:"checkbox",class:"custom-control-input",id:"customCheck","onUpdate:modelValue":t[4]||(t[4]=o=>e.cheked=o)},null,512),[[F,e.cheked]]),kt])]),e.captchaValidate===!1?(d(),m("div",Vt,[Mt,H(" You are human ")])):f("",!0),e.captchaValidate===!0?(d(),M(st,{key:1,onEmitCaptcha:e.captchaCode},null,8,["onEmitCaptcha"])):f("",!0),xt],32),St])])])])])])])]))}}),Et=x(Pt,[["__scopeId","data-v-aef12ba6"]]);export{Et as default};