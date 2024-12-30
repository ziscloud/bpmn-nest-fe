import{j as oe,$ as s}from"./index-8bef1c81.js";import{i as se,F as ne,d as ie}from"./formModel-8604cca2.js";import{d as ce,f as p,r as V,o as re,W as u,X as I,a0 as U,a1 as d,k as e,Z as n,u as l,G as v,a5 as _,a8 as j,F as A}from"./vue-d39115fd.js";import{i as ue,m as de}from"./antDesign-5cb4b61a.js";import"./echarts-de64fab6.js";const pe=()=>({columns:[{lang:"columns.operation",dataIndex:"operation",fixed:"left",width:120},{lang:"columns.index",dataIndex:"index",fixed:"left",width:50},{lang:"example.table.logisticsCompanyName",dataIndex:"logistics_company",ellipsis:!0,width:200},{lang:"example.table.logisticsMethods",dataIndex:"logistics_method",ellipsis:!0},{lang:"example.table.logisticsTrackingNumber",dataIndex:"logistics_number",ellipsis:!0},{lang:"example.table.deliveryNo",dataIndex:"tracking_no",ellipsis:!0},{lang:"example.table.contacts",dataIndex:"contacts",ellipsis:!0},{lang:"example.table.contactInformation",dataIndex:"contact_phone",ellipsis:!0},{lang:"example.table.licensePlateNumber",dataIndex:"license_plate_number",ellipsis:!0},{lang:"example.table.remark",dataIndex:"remark",ellipsis:!0}]}),me={class:"search-wrapper"},_e={class:"ub ub-ac ub-pj top-opt w100"},ge={class:"mt-1 w100",id:"logisticsTable"},ve={key:0},fe={class:"ub w100 ub-pj ub-ac"},be={class:"ml-2"},Ce=ce({__name:"index",setup(E){const{pagination:c,loading:f,scrollY:L}=oe(),{columns:O}=pe(),k=p(null),w=p(null),C=p(null),z=p(0),y=p(!1),S=p(!0),N=p("add"),$=p([]),T=p([]);let P=V({});const t=V({logistics_company:void 0,logistics_method:"",logistics_number:"",tracking_no:"",contacts:"",contact_phone:"",license_plate_number:""}),G=()=>{t.logistics_company=void 0,t.logistics_method="",t.logistics_number="",t.tracking_no="",t.contacts="",t.contact_phone="",t.license_plate_number=""},D=[{title:"数据下拉分页组件 page-select",description:"支持远程模糊搜索并支持分页检索",target:()=>k.value&&k.value.$el,docsUrl:"https://www.flypa.cn/vue-super-ui/docs/fe/vue/page-select.html"},{title:"表格列自定义组件 fields-setting",description:"支持表格列自定义显示/隐藏且可拖动自定义排序，设置可保持记忆，一键重置功能。",target:()=>w.value&&w.value.$el,docsUrl:"https://www.flypa.cn/vue-super-ui/docs/fe/vue/fields-setting.html"},{title:"useTable hooks 封装",description:"增强表格的各种应用场景使用，提高工作效率。",target:()=>C.value&&C.value.$el,docsUrl:"https://www.flypa.cn/vue-super-ui/docs/fe/vue/useTable.html"}],B=i=>{window.open(D[i].docsUrl,"_blank")},K=()=>{S.value=!1};re(()=>{w.value,b()});const R=()=>{b()},W=i=>new Promise(async a=>{const g=await ie({id:i.id});(g==null?void 0:g.code)===0&&(de.success(s("opeateSuccess")),b()),a(!0)}),X=()=>{N.value="add",y.value=!0},Y=i=>{P=i,N.value="edit",y.value=!0},b=async()=>{f.value=!0;const i={logisticsCompany:t.logistics_company,logisticsMethod:t.logistics_method,logisticsNumber:t.logistics_number,trackingNo:t.tracking_no,contacts:t.contacts,contactPhone:t.contact_phone,licensePlateNumber:t.license_plate_number,pageNum:c.current,pageSize:c.pageSize},a=await se(i);if((a==null?void 0:a.code)===0){f.value=!1;const{total:g=0,data:r=[]}=a;c.total=g,$.value=r}else f.value=!1},Z=()=>{c.current=1,b()},q=()=>{c.current=1,G(),b()},H=i=>{c.current=i.current,c.pageSize=i.pageSize,b()};return(i,a)=>{const g=u("page-select"),r=u("a-form-item"),x=u("a-input"),m=u("a-button"),J=u("a-form"),F=u("a-card"),Q=u("fields-setting"),ee=u("a-popconfirm"),le=u("a-table"),te=u("a-tour");return I(),U(A,null,[d("div",me,[e(F,{size:"small"},{default:n(()=>[e(J,{model:t,layout:"inline"},{default:n(()=>[e(r,{label:l(s)("example.table.logisticsCompanyName")},{default:n(()=>[e(g,{ref_key:"ref1",ref:k,immediate:"",style:{width:"220px"},fieldNames:{label:"name",value:"id"},api:"logistics/name/dropdown",value:t.logistics_company,"onUpdate:value":a[0]||(a[0]=o=>t.logistics_company=o),placeholder:l(s)("selectTips")},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{label:l(s)("example.table.logisticsMethods")},{default:n(()=>[e(x,{allowClear:"",value:t.logistics_method,"onUpdate:value":a[1]||(a[1]=o=>t.logistics_method=o),placeholder:l(s)("inputTips"),style:{width:"220px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{label:l(s)("example.table.logisticsTrackingNumber")},{default:n(()=>[e(x,{allowClear:"",value:t.logistics_number,"onUpdate:value":a[2]||(a[2]=o=>t.logistics_number=o),placeholder:l(s)("inputTips"),style:{width:"220px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{label:l(s)("example.table.deliveryNo")},{default:n(()=>[e(x,{allowClear:"",value:t.tracking_no,"onUpdate:value":a[3]||(a[3]=o=>t.tracking_no=o),placeholder:l(s)("inputTips"),style:{width:"220px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{label:l(s)("example.table.contacts")},{default:n(()=>[e(x,{allowClear:"",value:t.contacts,"onUpdate:value":a[4]||(a[4]=o=>t.contacts=o),placeholder:l(s)("inputTips"),style:{width:"220px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{label:l(s)("example.table.contactInformation")},{default:n(()=>[e(x,{allowClear:"",value:t.contact_phone,"onUpdate:value":a[5]||(a[5]=o=>t.contact_phone=o),placeholder:l(s)("inputTips"),style:{width:"220px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,{label:l(s)("example.table.licensePlateNumber")},{default:n(()=>[e(x,{allowClear:"",value:t.license_plate_number,"onUpdate:value":a[6]||(a[6]=o=>t.license_plate_number=o),placeholder:l(s)("inputTips"),style:{width:"220px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),e(r,null,{default:n(()=>[d("div",null,[e(m,{loading:l(f),type:"primary",onClick:Z},{default:n(()=>[v(_(l(s)("opts.search")),1)]),_:1},8,["loading"]),e(m,{loading:l(f),class:"ml-1",onClick:q},{default:n(()=>[v(_(l(s)("opts.reset")),1)]),_:1},8,["loading"])])]),_:1})]),_:1},8,["model"])]),_:1})]),d("div",_e,[d("div",null,[e(m,{size:"small",type:"primary",onClick:X},{icon:n(()=>[e(l(ue))]),default:n(()=>[v(" "+_(l(s)("opts.add")),1)]),_:1}),e(m,{class:"ml-2",ref_key:"ref3",ref:C,size:"small",type:"primary",onClick:a[7]||(a[7]=o=>B(2))},{default:n(()=>[v(" 查看 useTable hooks 封装 ")]),_:1},512)]),d("div",null,[e(m,{type:"link",ref_key:"ref2",ref:w,shape:"circle"},{default:n(()=>[e(Q,{tabKey:"example-table",value:T.value,"onUpdate:value":a[8]||(a[8]=o=>T.value=o),columns:l(O)},null,8,["value","columns"])]),_:1},512)])]),e(F,{size:"small"},{default:n(()=>[d("div",ge,[e(le,{class:"ant-table-striped","row-class-name":(o,h)=>h%2===1?"table-striped":null,bordered:"",size:"small",columns:T.value,"row-key":o=>o.id,"data-source":$.value,pagination:l(c),loading:l(f),scroll:{y:l(L)},onChange:H},{bodyCell:n(({column:o,record:h,index:M})=>[o.dataIndex==="index"?(I(),U("a",ve,_((l(c).current-1)*l(c).pageSize+parseInt(M)+1),1)):j("",!0),o.dataIndex==="operation"?(I(),U(A,{key:1},[e(m,{type:"link",size:"small",onClick:ae=>Y(h)},{default:n(()=>[v(_(l(s)("opts.edit")),1)]),_:2},1032,["onClick"]),e(ee,{title:l(s)("sureTips"),"ok-text":l(s)("opts.sure"),"cancel-text":l(s)("opts.cancel"),onConfirm:ae=>W(h)},{default:n(()=>[e(m,{type:"link",size:"small",danger:""},{default:n(()=>[v(_(l(s)("opts.delete")),1)]),_:1})]),_:2},1032,["title","ok-text","cancel-text","onConfirm"])],64)):j("",!0)]),_:1},8,["row-class-name","columns","row-key","data-source","pagination","loading","scroll"])])]),_:1}),e(ne,{show:y.value,"onUpdate:show":a[9]||(a[9]=o=>y.value=o),status:N.value,"cur-data":l(P),onSuccess:R},null,8,["show","status","cur-data"]),e(te,{current:z.value,"onUpdate:current":a[10]||(a[10]=o=>z.value=o),open:S.value,steps:D,onClose:K},{indicatorsRender:n(({current:o,total:h})=>[d("div",fe,[d("div",null,[d("span",null,_(o+1)+" / "+_(h),1)]),d("div",be,[e(m,{type:"primary",size:"small",onClick:M=>B(o)},{default:n(()=>[v("查看文档")]),_:2},1032,["onClick"])])])]),_:1},8,["current","open"])],64)}}});export{Ce as default};
