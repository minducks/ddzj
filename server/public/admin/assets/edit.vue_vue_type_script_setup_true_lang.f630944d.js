import{y as b,A as w,a0 as y,B as C}from"./element-plus.62ab1451.js";import{a as D,b as B}from"./role.bb62891e.js";import{P as k}from"./index.7a0b9c3a.js";import{d as x,s as c,r as R,e as h,_ as g,o as I,c as U,V as t,M as a,u as A}from"./@vue.3ddec1b2.js";const M={class:"edit-popup"},G=x({__name:"edit",emits:["success","close"],setup(N,{expose:i,emit:m}){const d=c(),s=c(),n=R("add"),f=h(()=>n.value=="edit"?"\u7F16\u8F91\u89D2\u8272":"\u65B0\u589E\u89D2\u8272"),o=g({id:"",name:"",desc:"",sort:0,menu_id:[]}),_={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]},F=async()=>{var l,e;await((l=d.value)==null?void 0:l.validate()),n.value=="edit"?await D(o):await B(o),(e=s.value)==null||e.close(),m("success")},V=()=>{m("close")};return i({open:(l="add")=>{var e;n.value=l,(e=s.value)==null||e.open()},setFormData:async l=>{for(const e in o)l[e]!=null&&l[e]!=null&&(o[e]=l[e])}}),(l,e)=>{const p=b,r=w,v=y,E=C;return I(),U("div",M,[t(k,{ref_key:"popupRef",ref:s,title:A(f),async:!0,width:"550px",clickModalClose:!0,onConfirm:F,onClose:V},{default:a(()=>[t(E,{class:"ls-form",ref_key:"formRef",ref:d,rules:_,model:o,"label-width":"60px"},{default:a(()=>[t(r,{label:"\u540D\u79F0",prop:"name"},{default:a(()=>[t(p,{class:"ls-input",modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=u=>o.name=u),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u5907\u6CE8",prop:"desc"},{default:a(()=>[t(p,{modelValue:o.desc,"onUpdate:modelValue":e[1]||(e[1]=u=>o.desc=u),type:"textarea",rows:4,placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8"},null,8,["modelValue"])]),_:1}),t(r,{label:"\u6392\u5E8F",prop:"sort"},{default:a(()=>[t(v,{modelValue:o.sort,"onUpdate:modelValue":e[2]||(e[2]=u=>o.sort=u)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{G as _};
