import{R as q,y as x,A as P,D as R,F as S,u as N,B as M}from"./element-plus.62ab1451.js";import{a as j,b as L}from"./payment.9809eebe.js";import{_ as O}from"./picker.f4c7e29a.js";import{P as T}from"./index.7a0b9c3a.js";import{d as W,r as v,_ as G,e as H,o as E,L as c,M as a,V as l,T as m,U as K,a as o,u as $,k as z,c as y,O as J,W as g,S as A,b7 as Q,b6 as X,ar as Y}from"./@vue.3ddec1b2.js";import{d as Z}from"./index.7e7d93d0.js";import"./@vueuse.b3730649.js";import"./lodash-es.32bc9704.js";import"./async-validator.fb49d0f5.js";import"./@element-plus.4237e19d.js";import"./dayjs.3f20994d.js";import"./axios.25713f9d.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.86959ff9.js";import"./index.vue_vue_type_script_setup_true_lang.ec3e131a.js";import"./index.01b851d7.js";import"./index.830c02a8.js";import"./usePaging.0e69bc9a.js";import"./vue3-video-play.6dd73449.js";import"./vuedraggable.e8f60bfb.js";import"./vue.bed21213.js";import"./sortablejs.95142d26.js";import"./lodash.09c27007.js";import"./vue-router.70b81833.js";import"./pinia.4a4088b7.js";import"./css-color-function.6cac4cf2.js";import"./color.aa9d0e7b.js";import"./clone.467d5f2b.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.73f6d097.js";import"./vue-clipboard3.8191fcdc.js";import"./clipboard.e51d27f9.js";import"./echarts.db1d6bb4.js";import"./zrender.84752e5a.js";import"./tslib.60310f1a.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.d7b1dc3a.js";const i=p=>(Q("data-v-f2a0bb51"),p=p(),X(),p),uu={class:""},eu=i(()=>o("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A152*42\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1)),lu=i(()=>o("div",{class:"form-tips"},"\u6682\u65F6\u53EA\u652F\u6301V2\u7248\u672C",-1)),tu=i(()=>o("div",{class:"form-tips"}," \u6682\u65F6\u53EA\u652F\u6301\u666E\u901A\u5546\u6237\u7C7B\u578B\uFF0C\u670D\u52A1\u5546\u6237\u7C7B\u578B\u6A21\u5F0F\u6682\u4E0D\u652F\u6301 ",-1)),au=i(()=>o("div",{class:"form-tips"},"\u5FAE\u4FE1\u652F\u4ED8\u5546\u6237\u53F7\uFF08MCHID\uFF09",-1)),ou=i(()=>o("div",{class:"form-tips"},"\u5FAE\u4FE1\u652F\u4ED8\u5546\u6237API\u5BC6\u94A5\uFF08paySignKey\uFF09",-1)),ru=i(()=>o("div",{class:"form-tips"},"\u5FAE\u4FE1\u652F\u4ED8\u8BC1\u4E66\uFF0C\u524D\u5F80\u5FAE\u4FE1\u5546\u5BB6\u5E73\u53F0\u751F\u6210\u5E76\u9ECF\u8D34\u81F3\u6B64\u5904",-1)),iu=i(()=>o("div",{class:"form-tips"}," \u5FAE\u4FE1\u652F\u4ED8\u8BC1\u4E66\u5BC6\u94A5\uFF0C\u524D\u5F80\u5FAE\u4FE1\u5546\u5BB6\u5E73\u53F0\u751F\u6210\u5E76\u9ECF\u8D34\u81F3\u6B64\u5904 ",-1)),su=i(()=>o("div",{class:"mr-4"},"https://\u524D\u53F0\u624B\u673A\u7AEF\u57DF\u540D/",-1)),pu=i(()=>o("div",{class:"form-tips"}," \u652F\u4ED8\u6388\u6743\u76EE\u5F55\u4EC5\u7528\u4E8E\u53C2\u8003\uFF0C\u590D\u5236\u540E\u524D\u5F80\u5FAE\u4FE1\u5546\u5BB6\u5E73\u53F0\u586B\u5199 ",-1)),nu=i(()=>o("div",{class:"form-tips"},"\u6682\u65F6\u4EC5\u652F\u6301\u652F\u4ED8\u5B9D\u666E\u901A\u6A21\u5F0F",-1)),mu=i(()=>o("div",{class:"form-tips"}," \u6682\u65F6\u53EA\u652F\u6301\u666E\u901A\u5546\u6237\u7C7B\u578B\uFF0C\u670D\u52A1\u5546\u6237\u7C7B\u578B\u6A21\u5F0F\u6682\u4E0D\u652F\u6301 ",-1)),du=i(()=>o("div",{class:"form-tips"},"\u9ED8\u8BA4\u4E3A0\uFF0C\u6570\u503C\u8D8A\u5927\u8D8A\u6392\u524D\u9762",-1)),Fu=W({__name:"config-form",props:{id:{default:""},title:{default:""}},emits:["refresh"],setup(p,{emit:D}){const B=p,f=v(),e=v({pay_way:0,name:"",image:"",sort:"",remark:"",merchant_type:"",interface_version:"v2",mch_id:"",pay_sign_key:"",apiclient_cert:"",apiclient_key:"",pattern:"",app_id:"",private_key:"",ali_public_key:""}),b=G({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u663E\u793A\u540D\u79F0",trigger:"blur"}],icon:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E0A\u4F20\u56FE\u6807",trigger:"change"}],mch_id:[{required:!0,message:"\u8BF7\u8F93\u5165\u5FAE\u4FE1\u652F\u4ED8\u5546\u6237\u53F7",trigger:"blur"}],pay_sign_key:[{required:!0,message:"\u8BF7\u8F93\u5165\u5FAE\u4FE1\u5546\u6237\u652F\u4ED8API\u5BC6\u94A5",trigger:"blur"}],apiclient_cert:[{required:!0,message:"\u8BF7\u8F93\u5165\u5FAE\u4FE1\u652F\u4ED8\u8BC1\u4E66",trigger:"blur"}],apiclient_key:[{required:!0,message:"\u8BF7\u8F93\u5165\u5FAE\u4FE1\u652F\u4ED8\u8BC1\u4E66\u5BC6\u94A5",trigger:"blur"}],private_key:[{required:!0,message:"\u8BF7\u8F93\u5165\u652F\u4ED8\u5B9D\u516C\u94A5",trigger:"blur"}],ali_public_key:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E94\u7528\u79C1\u94A5",trigger:"blur"}],app_id:[{required:!0,message:"\u8BF7\u8F93\u5165\u5E94\u7528ID",trigger:"blur"}],sort:[{required:!0,message:"\u8BF7\u8F93\u5165\u6392\u5E8F",trigger:"blur"},{type:"number",pattern:!1,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6392\u5E8F",trigger:"blur"}]}),d=H(()=>{switch(Number(e.value.pay_way)){case 1:return"\u5FAE\u4FE1\u652F\u4ED8";case 2:return"\u652F\u4ED8\u5B9D\u652F\u4ED8";case 3:return"\u4F59\u989D\u652F\u4ED8"}}),C=async()=>{const n=await j({id:B.id}),u={...n.config,...n};delete u.config,u.pay_way==2&&(u.interface_version="v2"),u.pay_way==3&&(u.mode="normal_mode"),u.merchant_type="ordinary_merchant",e.value=u,console.log("formData.value",e.value)},V=async()=>{d.value=="\u5FAE\u4FE1\u652F\u4ED8"&&(e.value.interface_version="v2",e.value.merchant_type="ordinary_merchant"),await L({...e.value}),D("refresh")},k=n=>{!n||n.validate(u=>{if(!u)return!1;V()})};return(n,u)=>{const w=q,s=x,r=P,F=R,_=S,U=N,h=M,I=Y("copy");return E(),c(T,{class:"mr-2",width:"600px",center:!0,onConfirm:u[15]||(u[15]=t=>k(f.value)),onOpen:C,title:p.title},{trigger:a(()=>[l(w,{type:"primary",underline:!1},{default:a(()=>[m(K(p.title),1)]),_:1})]),default:a(()=>[o("div",uu,[l(h,{ref_key:"formRef",ref:f,model:e.value,rules:b,"label-width":"auto"},{default:a(()=>[l(r,{label:"\u652F\u4ED8\u65B9\u5F0F"},{default:a(()=>[l(s,{modelValue:$(d),"onUpdate:modelValue":u[0]||(u[0]=t=>z(d)?d.value=t:null),disabled:!0,class:"ls-input"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u663E\u793A\u540D\u79F0",prop:"name"},{default:a(()=>[l(s,{modelValue:e.value.name,"onUpdate:modelValue":u[1]||(u[1]=t=>e.value.name=t),class:"ls-input"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u663E\u793A\u56FE\u6807",prop:"image"},{default:a(()=>[o("div",null,[l(O,{limit:1,disabled:!1,modelValue:e.value.image,"onUpdate:modelValue":u[2]||(u[2]=t=>e.value.image=t)},null,8,["modelValue"]),eu])]),_:1}),e.value.pay_way==1?(E(),y(g,{key:0},[l(r,{prop:"interface_version",label:"\u5FAE\u4FE1\u652F\u4ED8\u63A5\u53E3\u7248\u672C"},{default:a(()=>[o("div",null,[o("div",null,[l(_,{modelValue:e.value.interface_version,"onUpdate:modelValue":u[3]||(u[3]=t=>e.value.interface_version=t)},{default:a(()=>[l(F,{label:e.value.interface_version},null,8,["label"])]),_:1},8,["modelValue"])]),lu])]),_:1}),l(r,{label:"\u5546\u6237\u7C7B\u578B",prop:"merchant_type"},{default:a(()=>[o("div",null,[o("div",null,[l(_,{modelValue:e.value.merchant_type,"onUpdate:modelValue":u[4]||(u[4]=t=>e.value.merchant_type=t)},{default:a(()=>[l(F,{label:e.value.merchant_type},{default:a(()=>[m("\u666E\u901A\u5546\u6237")]),_:1},8,["label"])]),_:1},8,["modelValue"])]),tu])]),_:1}),l(r,{label:"\u5FAE\u4FE1\u652F\u4ED8\u5546\u6237\u53F7",prop:"mch_id"},{default:a(()=>[l(s,{modelValue:e.value.mch_id,"onUpdate:modelValue":u[5]||(u[5]=t=>e.value.mch_id=t),class:"ls-input"},null,8,["modelValue"]),au]),_:1}),l(r,{label:"\u5546\u6237API\u5BC6\u94A5",prop:"pay_sign_key"},{default:a(()=>[l(s,{modelValue:e.value.pay_sign_key,"onUpdate:modelValue":u[6]||(u[6]=t=>e.value.pay_sign_key=t),class:"ls-input"},null,8,["modelValue"]),ou]),_:1}),l(r,{label:"\u5FAE\u4FE1\u652F\u4ED8\u8BC1\u4E66",prop:"apiclient_cert"},{default:a(()=>[l(s,{type:"textarea",rows:"3",modelValue:e.value.apiclient_cert,"onUpdate:modelValue":u[7]||(u[7]=t=>e.value.apiclient_cert=t),class:"ls-input"},null,8,["modelValue"]),ru]),_:1}),l(r,{label:"\u5FAE\u4FE1\u652F\u4ED8\u8BC1\u4E66\u5BC6\u94A5",prop:"apiclient_key"},{default:a(()=>[l(s,{type:"textarea",rows:"3",modelValue:e.value.apiclient_key,"onUpdate:modelValue":u[8]||(u[8]=t=>e.value.apiclient_key=t),class:"ls-input"},null,8,["modelValue"]),iu]),_:1}),l(r,{label:"\u652F\u4ED8\u6388\u6743\u76EE\u5F55"},{default:a(()=>[su,J((E(),c(U,{type:"text"},{default:a(()=>[m("\u590D\u5236")]),_:1})),[[I,"https://\u524D\u53F0\u624B\u673A\u7AEF\u57DF\u540D/"]]),pu]),_:1})],64)):A("",!0),e.value.pay_way==2?(E(),y(g,{key:1},[l(r,{label:"\u6A21\u5F0F",prop:"pattern"},{default:a(()=>[o("div",null,[o("div",null,[l(_,{modelValue:e.value.pattern,"onUpdate:modelValue":u[9]||(u[9]=t=>e.value.pattern=t)},{default:a(()=>[l(F,{label:e.value.pattern},{default:a(()=>[m("\u666E\u901A\u6A21\u5F0F")]),_:1},8,["label"])]),_:1},8,["modelValue"])]),nu])]),_:1}),l(r,{label:"\u5546\u6237\u7C7B\u578B",prop:"merchant_type"},{default:a(()=>[o("div",null,[o("div",null,[l(_,{modelValue:e.value.merchant_type,"onUpdate:modelValue":u[10]||(u[10]=t=>e.value.merchant_type=t)},{default:a(()=>[l(F,{label:e.value.merchant_type},{default:a(()=>[m("\u666E\u901A\u5546\u6237")]),_:1},8,["label"])]),_:1},8,["modelValue"])]),mu])]),_:1}),l(r,{label:"\u5E94\u7528ID",prop:"app_id"},{default:a(()=>[l(s,{modelValue:e.value.app_id,"onUpdate:modelValue":u[11]||(u[11]=t=>e.value.app_id=t),class:"ls-input"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u5E94\u7528\u79C1\u94A5",prop:"private_key"},{default:a(()=>[l(s,{modelValue:e.value.private_key,"onUpdate:modelValue":u[12]||(u[12]=t=>e.value.private_key=t),class:"ls-input"},null,8,["modelValue"])]),_:1}),l(r,{label:"\u652F\u4ED8\u5B9D\u516C\u94A5",prop:"ali_public_key"},{default:a(()=>[l(s,{modelValue:e.value.ali_public_key,"onUpdate:modelValue":u[13]||(u[13]=t=>e.value.ali_public_key=t),class:"ls-input"},null,8,["modelValue"])]),_:1})],64)):A("",!0),l(r,{label:"\u6392\u5E8F",prop:"sort"},{default:a(()=>[l(s,{modelValue:e.value.sort,"onUpdate:modelValue":u[14]||(u[14]=t=>e.value.sort=t),modelModifiers:{number:!0},class:"ls-input"},null,8,["modelValue"]),du]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["title"])}}});const ae=Z(Fu,[["__scopeId","data-v-f2a0bb51"]]);export{ae as default};
