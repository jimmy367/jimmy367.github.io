import{L as e,bd as s}from"./index.13381753.js";import{a}from"./index.51f40b55.js";const c=e("lottery",{state:()=>({data:null}),actions:{setData(t){this.data=t},async getDatas(){try{const t=await a.getData();return this.setData(t.data),t}catch(t){throw t}},async postDatas(t){try{return await a.postData(t)}catch(r){throw r}}}});function n(t){s.create({title:"ALERT",message:t})}export{n as q,c as u};
