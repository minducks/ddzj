import{d as a,v as e,W as s,J as l,y as t,al as o,z as d,H as i,ab as n,o as c,k as r,f as u,e as f,w as g,F as m,l as p,b as x,g as _,n as y,aZ as v,a_ as b,a$ as h,b0 as k,G as w,j,r as C,a as N,E as z,a5 as O,t as S,s as V,a6 as A,b1 as I,ac as J,i as L}from"./index.5b37717f.js";import{_ as P}from"./z-paging.ab3f2020.js";import{t as $}from"./util.920cc201.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";var F=E(a({__name:"index",setup(a){const E=e(null),F=s(!1),G=s([]),H=s(!0),Q=l().system.includes("iOS"),T=async a=>{var e,s;const l=null==(s=null==(e=null==a?void 0:a.currentTarget)?void 0:e.dataset)?void 0:s.id;try{F.value?(i("address",l),A()):(await I({id:l}),J({url:"/bundle/pages/user_address/index"}))}catch(t){console.log(t,"设置默认地址捕捉错误")}},U=(a="")=>{console.log("parmas",a),y({url:`/bundle/pages/user_address_edit/index?id=${a}`})},W=async(a,e)=>{try{const s=await v({pageNo:a,pageSize:e});console.log(s,G.value),E.value.setLocalPaging(s)}catch(s){console.log("报错=>",s),E.value.setLocalPaging(!1)}},Z=async()=>{Q&&-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload());try{b().then();const a=await h();q(a.cityName+a.countyName+a.detailInfo,a)}catch(a){console.log(a)}},q=async(a,e)=>{try{const s=await k({address:a});if(0==s.status){const a=s.result,l={latitude:a.location.lat,longitude:a.location.lng,name:e.userName,mobile:e.telNumber};w("wxAddress",JSON.stringify(l)),U()}else $(s.message)}catch(s){console.log("逆解析地址",s)}};return t((a=>{a.type&&(F.value=a.type),H.value=o()})),d((()=>{i("changeAddress")})),n((()=>{E.value.reload()})),(a,e)=>{const s=L,l=j,t=C(N("z-paging"),P),o=z,d=O;return c(),r(m,null,[u(" 收货地址的列表数据 "),f(l,{class:"address-list"},{default:g((()=>[f(t,{"auto-show-back-to-top":"",ref_key:"paging",ref:E,modelValue:G.value,"onUpdate:modelValue":e[0]||(e[0]=a=>G.value=a),onQuery:W,fixed:!1,"use-page-scroll":"",height:"100%"},{default:g((()=>[(c(!0),r(m,null,p(G.value,((a,e)=>(c(),x(l,{key:a.id,class:"address-list--item flex justify-between mt-[20rpx]","data-id":a.id,onClick:V(T,["stop"])},{default:g((()=>[f(l,{class:"flex-1"},{default:g((()=>[f(l,null,{default:g((()=>[f(s,{class:"text-xl font-medium"},{default:g((()=>[_(S(a.contact)+" "+S(a.mobile),1)])),_:2},1024),a.is_default?(c(),x(s,{key:0,class:"default"},{default:g((()=>[_("默认")])),_:1})):u("v-if",!0)])),_:2},1024),f(l,{class:"mt-[20rpx] sm text-muted"},{default:g((()=>[_(S(a.province)+" "+S(a.city)+" "+S(a.district)+" "+S(a.address),1)])),_:2},1024)])),_:2},1024),f(l,{class:"setting",onClick:V((e=>U(a.id)),["stop"])},{default:g((()=>[_(" 编辑 ")])),_:2},1032,["onClick"])])),_:2},1032,["data-id","onClick"])))),128))])),_:1},8,["modelValue"]),f(l,{class:"fixed flex items-center justify-between bg-white footer"},{default:g((()=>[H.value?(c(),x(l,{key:0,class:"mr-[20rpx]"},{default:g((()=>[f(d,{class:"bg-color text-lg text-black border-none rounded-full flex items-center justify-center leading-[80rpx] h-[80rpx]",onClick:Z},{default:g((()=>[f(o,{class:"icon-md mr-[10rpx]",src:"../../static/images/icon_wechat.png"},null,8,["src"]),_(" 微信导入 ")])),_:1})])),_:1})):u("v-if",!0),f(l,null,{default:g((()=>[f(d,{class:"bg-primary text-lg text-white rounded-full leading-[80rpx] h-[80rpx]",onClick:e[1]||(e[1]=a=>U(""))},{default:g((()=>[_(" 添加地址 ")])),_:1})])),_:1})])),_:1})])),_:1})],2112)}}}),[["__scopeId","data-v-20a5195d"]]);export{F as default};
