import{r as f,$ as t,_ as E}from"./index-8bef1c81.js";import{d as U,f as F,r as y,h as B,c as j,W as d,X as v,Y as C,Z as p,k as n,u as r,a0 as P,F as R,a7 as V,G as $,a5 as q}from"./vue-d39115fd.js";import{m as w}from"./antDesign-5cb4b61a.js";const Z=o=>f({method:"GET",url:"/system/post/list",params:o}),H=o=>f({method:"DELETE",url:`/system/post/${o.ids}`,params:o}),G=o=>f({method:"POST",url:"/system/post",data:o}),L=o=>f({method:"PUT",url:"/system/post",data:o}),W=U({__name:"formModel",props:{show:{type:Boolean,default:!1},status:{type:String,default:"add"},curData:{type:Object,default:()=>{}},sysNormalDisable:{type:Array,default:()=>[]}},emits:["update:show","success"],setup(o,{emit:g}){const _=g,l=o,b=F(),e=y({postId:"",postName:"",postCode:"",status:"0",remark:""}),N=()=>{e.postId="",e.postName="",e.postCode="",e.remark="",e.status="0"},k=y({postName:[{required:!0,message:t("inputTips"),trigger:"blur"}],postCode:[{required:!0,message:t("inputTips"),trigger:"blur"}]});B(()=>{l.show&&l.status==="edit"&&(e.postId=l.curData.deptId,e.postName=l.curData.postName,e.postCode=l.curData.postCode,e.remark=l.curData.remark,e.status=l.curData.status)});const c=j({get(){return l.show},set(m){_("update:show",m)}}),h=()=>{N()},T=async()=>{b.value.validate().then(async()=>{var a;const m={postName:e.postName,postCode:e.postCode,remark:e.remark,status:e.status};if(l.status==="edit"){m.postId=(a=l==null?void 0:l.curData)==null?void 0:a.postId;const u=await L(m);(u==null?void 0:u.code)===200&&(c.value=!1,w.success(t("opeateSuccess")),_("success"))}else{const u=await G(m);(u==null?void 0:u.code)===200&&(c.value=!1,w.success(t("opeateSuccess")),_("success"))}}).catch(m=>{})};return(m,a)=>{const u=d("a-input"),i=d("a-form-item"),x=d("a-radio"),D=d("a-radio-group"),I=d("a-textarea"),M=d("a-form"),S=d("watermark"),O=d("a-modal");return v(),C(O,{destroyOnClose:"",open:c.value,"onUpdate:open":a[4]||(a[4]=s=>c.value=s),title:o.status==="add"?r(t)("opts.add"):r(t)("opts.edit"),width:"500px",cancelText:r(t)("opts.cancel"),okText:r(t)("opts.sure"),afterClose:h,onOk:T},{default:p(()=>[n(S,null,{default:p(()=>[n(M,{class:"w100",ref_key:"formRef",ref:b,model:e,labelWrap:"",labelCol:{style:{width:"110px"}}},{default:p(()=>[n(i,{label:r(t)("post.columns.postName"),name:"postName",rules:k.postName},{default:p(()=>[n(u,{allowClear:"",placeholder:r(t)("inputTips"),value:e.postName,"onUpdate:value":a[0]||(a[0]=s=>e.postName=s),valueModifiers:{trim:!0}},null,8,["placeholder","value"])]),_:1},8,["label","rules"]),n(i,{label:r(t)("post.columns.postCode"),name:"postCode",rules:k.postCode},{default:p(()=>[n(u,{allowClear:"",placeholder:r(t)("inputTips"),value:e.postCode,"onUpdate:value":a[1]||(a[1]=s=>e.postCode=s),valueModifiers:{trim:!0}},null,8,["placeholder","value"])]),_:1},8,["label","rules"]),n(i,{label:r(t)("post.columns.state")},{default:p(()=>[n(D,{value:e.status,"onUpdate:value":a[2]||(a[2]=s=>e.status=s),name:"postState"},{default:p(()=>[(v(!0),P(R,null,V(o.sysNormalDisable,s=>(v(),C(x,{key:s.value,value:s.value},{default:p(()=>[$(q(s.label),1)]),_:2},1032,["value"]))),128))]),_:1},8,["value"])]),_:1},8,["label"]),n(i,{label:r(t)("post.columns.remark")},{default:p(()=>[n(I,{allowClear:"",placeholder:r(t)("inputTips"),value:e.remark,"onUpdate:value":a[3]||(a[3]=s=>e.remark=s),valueModifiers:{trim:!0}},null,8,["placeholder","value"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1})]),_:1},8,["open","title","cancelText","okText"])}}});const z=E(W,[["__scopeId","data-v-b7b3319e"]]),J=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));export{z as F,H as d,J as f,Z as i};
