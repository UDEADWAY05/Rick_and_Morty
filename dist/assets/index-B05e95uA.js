import{u as i,j as a,N as t,L as o,c as n}from"./index-B63naSCA.js";import{u as m}from"./useFetch-Cvrg3s3o.js";const l="_cardPage_1m1y9_1",_="_card_1m1y9_1",s={cardPage:l,card:_,"card-about":"_card-about_1m1y9_8","card-title":"_card-title_1m1y9_11","card-describe":"_card-describe_1m1y9_14"},x=()=>{const{id:c}=i(),{data:e,isLoading:d,error:r}=m(n.episodes+c);return r&&r.response.status===404?a.jsx(t,{to:"*"}):d?a.jsx(o,{}):a.jsx("div",{className:s.cardPage,children:a.jsx("div",{className:s.card,children:a.jsxs("div",{className:s["card-about"],children:[a.jsxs("h1",{className:s["card-title"],children:[e.name," "]}),a.jsx("p",{className:s["card-describe"],children:"Name: "+e.name}),a.jsx("p",{className:s["card-describe"],children:"Episode: "+e.episode}),a.jsx("p",{className:s["card-describe"],children:"Date: "+e.air_date}),a.jsx("p",{className:s["card-describe"],children:"Id: "+e.id})]})})})};export{x as default};
