import{r as S,j as R,$ as l,t as T}from"./index-8bef1c81.js";import{d as Y,f as C,r as j,o as q,W as r,X as u,a0 as _,a1 as x,k as n,Z as s,u as e,G as z,a5 as p,a8 as f,Y as K,F as W}from"./vue-d39115fd.js";import{m as X}from"./antDesign-5cb4b61a.js";import"./echarts-de64fab6.js";const Z=()=>({columns:[{lang:"columns.index",dataIndex:"index",width:50},{lang:"report.columns.num",dataIndex:"num",width:100,ellipsis:!0},{lang:"report.columns.path",dataIndex:"path",ellipsis:!0},{lang:"report.columns.url",dataIndex:"url",ellipsis:!0},{lang:"report.columns.remark",dataIndex:"remark",ellipsis:!0},{lang:"report.columns.createTime",dataIndex:"createTime",width:150,ellipsis:!0},{lang:"report.columns.updateTime",dataIndex:"updateTime",width:150,ellipsis:!0}]}),A=g=>S({method:"GET",url:"/report/super/list",params:g}),H=g=>S({method:"DELETE",url:`/system/notice/${g.id}`}),J={class:"search-wrapper"},O={class:"ub ub-ac ub-pe top-opt w100"},Q={class:"mt-1 w100",id:"configTable"},ee={key:0},te={key:1},ae={key:2},ne={key:3},oe={key:4},de=Y({__name:"index",setup(g){const{pagination:o,loading:m,scrollY:D}=R(),{columns:E}=Z(),I=C([]),y=C([]),h=j({remark:""}),N=()=>{h.remark=""};q(()=>{k()});const B=i=>new Promise(async a=>{const c=await H({id:i.recordId});(c==null?void 0:c.code)===200&&(X.success(l("opeateSuccess")),k()),a(!0)}),k=async()=>{m.value=!0;const i={remark:h.remark,pageNum:o.current,pageSize:o.pageSize},a=await A(i);if((a==null?void 0:a.code)===200){m.value=!1;const{total:c=0,list:v=[]}=a.data;o.total=c,I.value=v}else m.value=!1},F=()=>{o.current=1,k()},U=()=>{o.current=1,N(),k()},V=i=>{o.current=i.current,o.pageSize=i.pageSize,k()};return(i,a)=>{const c=r("a-input"),v=r("a-form-item"),b=r("a-button"),$=r("a-form"),w=r("a-card"),L=r("fields-setting"),G=r("a-popconfirm"),M=r("a-table");return u(),_(W,null,[x("div",J,[n(w,{size:"small"},{default:s(()=>[n($,{model:h,layout:"inline"},{default:s(()=>[n(v,{label:e(l)("report.columns.remark")},{default:s(()=>[n(c,{allowClear:"",value:h.remark,"onUpdate:value":a[0]||(a[0]=t=>h.remark=t),valueModifiers:{trim:!0},placeholder:e(l)("inputTips"),style:{width:"220px"}},null,8,["value","placeholder"])]),_:1},8,["label"]),n(v,null,{default:s(()=>[x("div",null,[n(b,{loading:e(m),type:"primary",onClick:F},{default:s(()=>[z(p(e(l)("opts.search")),1)]),_:1},8,["loading"]),n(b,{loading:e(m),class:"ml-1",onClick:U},{default:s(()=>[z(p(e(l)("opts.reset")),1)]),_:1},8,["loading"])])]),_:1})]),_:1},8,["model"])]),_:1})]),x("div",O,[x("div",null,[n(b,{type:"link",ref:"ref2",shape:"circle"},{default:s(()=>[n(L,{tabKey:"config-table",value:y.value,"onUpdate:value":a[1]||(a[1]=t=>y.value=t),columns:e(E)},null,8,["value","columns"])]),_:1},512)])]),n(w,{size:"small"},{default:s(()=>[x("div",Q,[n(M,{class:"ant-table-striped","row-class-name":(t,d)=>d%2===1?"table-striped":null,bordered:"",size:"small",columns:y.value,"row-key":t=>t.deptId,"data-source":I.value,pagination:e(o),loading:e(m),scroll:{y:e(D)},onChange:V},{bodyCell:s(({column:t,record:d,index:P})=>[t.dataIndex==="index"?(u(),_("a",ee,p((e(o).current-1)*e(o).pageSize+parseInt(P)+1),1)):f("",!0),t.dataIndex==="path"?(u(),_("span",te,p(decodeURIComponent(d.path)),1)):f("",!0),t.dataIndex==="url"?(u(),_("span",ae,p(decodeURIComponent(d.url)),1)):f("",!0),t.dataIndex==="createTime"?(u(),_("span",ne,p(e(T)(d.createTime)),1)):f("",!0),t.dataIndex==="updateTime"?(u(),_("span",oe,p(e(T)(d.updateTime)),1)):f("",!0),t.dataIndex==="operation"?(u(),K(G,{key:5,title:e(l)("sureTips"),"ok-text":e(l)("opts.sure"),"cancel-text":e(l)("opts.cancel"),onConfirm:se=>B(d)},null,8,["title","ok-text","cancel-text","onConfirm"])):f("",!0)]),_:1},8,["row-class-name","columns","row-key","data-source","pagination","loading","scroll"])])]),_:1})],64)}}});export{de as default};
