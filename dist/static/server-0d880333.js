import{r as t}from"./index-8bef1c81.js";const r=e=>t({method:"GET",url:"/system/menu/list",params:e}),m=e=>t({method:"DELETE",url:`/system/menu/${e.id}`,params:e}),n=e=>t({method:"POST",url:"/system/menu",data:e}),u=e=>t({method:"PUT",url:"/system/menu",data:e}),o=()=>t({url:"/system/menu/list",method:"get"}),l=()=>t({url:"/system/menu/treeselect",method:"get"}),a=e=>t({url:"/system/menu/roleMenuTreeselect/"+e,method:"get"});export{n as a,m as d,u as e,r as i,o as l,a as r,l as t};
