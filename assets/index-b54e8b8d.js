import{d as f,r as v,c as $,a as d,t as p,b as o,w as n,e as a,o as w,f as h,g as I,h as V,_ as b}from"./index-aad9d25a.js";const y={class:"login"},k={class:"title"},C={class:"langIcon"},x={class:"form"},B=f({__name:"index",setup(N){const{proxy:t}=I(),l=v({account:"",password:""}),i=()=>{if(!l.value.account){t.$message.warning(t.$t("common.pleaseInput")+t.$t("login.account"));return}if(!l.value.password){t.$message.warning(t.$t("common.pleaseInput")+t.$t("login.password"));return}let e=V();localStorage.setItem("token",e),localStorage.setItem("role","superadmin"),t.$router.push("/index")};return(e,s)=>{const m=a("lang"),u=a("el-input"),c=a("el-form-item"),_=a("el-button"),g=a("el-form");return w(),$("div",y,[d("div",k,[d("span",null,p(e.$t("login.title")),1),d("div",C,[o(m,{size:"small"})])]),d("div",x,[o(g,{model:l.value,"label-width":"120px"},{default:n(()=>[o(c,{label:e.$t("login.account")},{default:n(()=>[o(u,{modelValue:l.value.account,"onUpdate:modelValue":s[0]||(s[0]=r=>l.value.account=r),placeholder:e.$t("common.pleaseInput")+e.$t("login.account")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,{label:e.$t("login.password")},{default:n(()=>[o(u,{modelValue:l.value.password,"onUpdate:modelValue":s[1]||(s[1]=r=>l.value.password=r),placeholder:e.$t("common.pleaseInput")+e.$t("login.password")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),o(c,null,{default:n(()=>[o(_,{type:"primary",style:{width:"100%"},onClick:i},{default:n(()=>[h(p(e.$t("login.loginButton")),1)]),_:1})]),_:1})]),_:1},8,["model"])])])}}});const T=b(B,[["__scopeId","data-v-4e18c1d1"]]);export{T as default};
