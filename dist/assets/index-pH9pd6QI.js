import{j as e,r as m,d as g,e as b,f as j}from"./index-B63naSCA.js";const x="_input_13w2r_1",w="_required_13w2r_13",r={input:x,"input-div":"_input-div_13w2r_6","input-label":"_input-label_13w2r_9",required:w},f=({name:s,value:o,onChange:c,type:n,label:u,placeholder:d,required:a})=>{const p=({target:i})=>{c({name:i.name,value:i.value})};return e.jsxs("div",{className:r["input-div"],children:[e.jsx("label",{htmlFor:s,children:e.jsxs("div",{className:r["input-label"],children:[u,a&&e.jsx("p",{className:r.required,children:"*"})]})}),e.jsx("div",{children:e.jsx("input",{className:r.input,type:n,placeholder:d,name:s,value:o,onChange:p,required:a})})]})},D="_formDiv_1v3vr_1",N="_btn_1v3vr_10",v={formDiv:D,"formDiv-title":"_formDiv-title_1v3vr_6",btn:N},S=()=>{var _;const[s,o]=m.useState({login:"",password:""}),[c,n]=m.useState(!1),u=g(),d=b(),{signIn:a}=j(),p=((_=d.state)==null?void 0:_.from)||"/";m.useEffect(()=>{const t=[];Object.keys(s).map(l=>{s[l].length>0&&t.push(l)}),t.length===Object.keys(s).length?n(!0):n(!1)},[s]);const i=t=>{t.preventDefault(),a(s,()=>{u(p,{replace:!0})})},h=t=>{o(l=>({...l,[t.name]:t.value}))};return e.jsxs("div",{className:v.formDiv,children:[e.jsx("h1",{className:v["formDiv-title"],children:"Вход"}),e.jsxs("form",{onSubmit:i,children:[e.jsx(f,{label:"Login",type:"login",name:"login",value:s.login,onChange:h,placeholder:"Ваш login",required:!0}),e.jsx(f,{label:"Пароль",type:"password",name:"password",value:s.password,placeholder:"Ваш пароль",onChange:h,required:!0}),e.jsx("button",{type:"submit",disabled:!c,className:v.btn,children:"Отправить"})]})]})};export{S as default};
