import{bk as e,bl as a,bm as t,bn as r,bo as l,a3 as s,d as n,W as i,y as o,o as u,k as c,f as d,e as m,w as f,g as p,t as y,b as _,F as v,l as w,ad as x,j as g,r as b,a as h,bp as P,a5 as k,bq as j,br as S}from"./index.5b37717f.js";import{_ as W}from"./u-count-down.bc076745.js";import{_ as C}from"./u-image.8c26ebe0.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.14dc2ec9.js";function $(){const n=async(t,r)=>{try{await(async t=>{await e({MP_WEIXIN:()=>new Promise(((e,a)=>{console.log(t,"weixin"),uni.requestPayment({provider:"wxpay",timeStamp:null==t?void 0:t.timeStamp,nonceStr:null==t?void 0:t.nonceStr,package:null==t?void 0:t.package,signType:null==t?void 0:t.signType,paySign:null==t?void 0:t.paySign,success:a=>e(a),fail:e=>a(e)})})),OA_WEIXIN:()=>a(t),H5:()=>new Promise(((e,a)=>{window.open(t,"_self"),e()})),APP:()=>new Promise(((e,a)=>{uni.requestPayment({provider:"wxpay",orderInfo:t,success:a=>e(a),cancel:e=>a(e),fail:e=>a(e)})}))})})(t.config);const l=JSON.stringify({order_id:r.order_id,from:r.from});if("recharge"===r.from)return s({url:"/bundle/pages/user_wallet/user_wallet"});s({url:`/bundle/pages/payment_result/payment_result?param=${l}`})}catch(l){if("order"===r.from&&s({url:"/pages/order/index"}),0==Number(r.order_amount))return uni.$u.toast("下单成功");uni.$u.toast("支付取消")}};return{initPayWay:async e=>{try{return await t({from:e.from||"order",order_id:e.order_id,scene:r()})}catch(a){console.log("获取支付方式",a)}},handlePayPrepay:async e=>{try{const a=await l({from:e.from||"order",pay_way:e.pay_way,order_id:e.order_id}),t=JSON.stringify({order_id:e.order_id,from:e.from});3!==e.pay_way?n(a,e):(s({url:`/bundle/pages/payment_result/payment_result?param=${t}`}),uni.$u.toast("支付成功"))}catch(a){uni.$u.toast(a)}},handlePay:n}}var N=I(n({__name:"order_pay",setup(e){const{initPayWay:a,handlePayPrepay:t}=$(),r=i({from:"order",order_id:"",icon:"",order_amount:""}),l=i({cancel_time:"",order_amount:""}),n=i(),I=i(),N=async()=>{if(!(await x({title:"温馨提示",content:"确认支付吗？"})).cancel)try{t({from:r.value.from,pay_way:n.value,order_id:r.value.order_id})}catch(e){console.log(e)}};o((async e=>{(null==e?void 0:e.order_amount)&&(r.value.order_amount=null==e?void 0:e.order_amount,n.value=2),r.value.order_id=e.order_id,r.value.from=e.from,(async()=>{l.value=await a({...r.value}),I.value=1e3*(l.value.cancel_time-Date.now()/1e3);const e=l.value.lists.find((e=>e.is_default))||l.value.lists[0];n.value=null==e?void 0:e.pay_way})()}));const q=async e=>{await x({title:"温馨提示",showCancel:!1,content:"当前订单支付时间已过，请重新下单",success:()=>{s({url:"/pages/index/index"})}})};return(e,a)=>{const t=g,s=b(h("u-count-down"),W),i=b(h("u-image"),C),o=j,x=S,$=P,E=k;return u(),c(v,null,[d(' <u-navbar title="订单支付" @leftClick="handleleft"> </u-navbar> '),m(t,{class:"box flex justify-center items-center flex-col"},{default:f((()=>[m(t,{class:"box-text"},{default:f((()=>[p("￥"+y(l.value.order_amount),1)])),_:1}),I.value>=0&&"order"===r.value.from?(u(),_(t,{key:0,class:"box-time flex"},{default:f((()=>[p("支付剩余时间"),m(s,{timestamp:I.value,onEnd:q,format:"mm:ss","font-size":26,"separator-size":26},null,8,["timestamp"])])),_:1})):d("v-if",!0)])),_:1}),m(t,{class:"pay-box"},{default:f((()=>[m($,null,{default:f((()=>[(u(!0),c(v,null,w(l.value.lists,(e=>(u(),_(t,{key:e.id,class:"item",onClick:a=>{return t=e.pay_way,void(n.value=t);var t}},{default:f((()=>[m(x,null,{default:f((()=>[m(t,{class:"flex justify-between items-center"},{default:f((()=>[m(t,{class:"flex items-center py-[20rpx] justify-between w-full"},{default:f((()=>[m(t,{class:"flex items-center"},{default:f((()=>[m(i,{src:e.image,width:"48",height:"48"},null,8,["src"]),m(t,{class:"pl-[20rpx]"},{default:f((()=>[m(t,{class:"text-[28rpx] text-[#333]"},{default:f((()=>[p(y(e.name),1)])),_:2},1024),m(t,{class:"pt-1 text-[24rpx] text-muted"},{default:f((()=>[p(y(e.extra),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),m(t,null,{default:f((()=>[m(o,{color:"#F36161",value:e.pay_way,checked:e.pay_way===n.value},null,8,["value","checked"])])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1}),d(' <u-radio-group v-model="payWay" class="radio" @change="radioChange">\n            <view\n                class="flex justify-between items-center item"\n                v-for="item in payData.lists"\n                :key="item.id"\n                @click="selectPayWay(item.pay_way)"\n            >\n                <view class="flex items-center py-[20rpx] justify-between w-full">\n                    <view class="flex">\n                        <u-image :src="item.image" width="48" height="48" />\n                        <view class="pl-[20rpx]">\n                            <view class="text-[28rpx] text-[#333]">{{ item.name }}</view>\n                            <view class="pt-1 text-[24rpx] text-muted">\n                                {{ item.extra }}\n                            </view>\n                        </view>\n                    </view>\n                    <view>\n                        <u-radio :name="item.pay_way" active-color="#F36161" />\n                    </view>\n                </view>\n            </view>\n        </u-radio-group> ')])),_:1}),m(t,{class:"bottom_box w-full p-[20rpx]"},{default:f((()=>[m(E,{class:"pay_btn",onClick:N},{default:f((()=>[p("立即支付")])),_:1})])),_:1})],64)}}}),[["__scopeId","data-v-20c4caee"]]);export{N as default};
