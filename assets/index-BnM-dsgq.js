import{u as i,j as a,N as t,L as n,c as o}from"./index-B2gRE37K.js";import{u as m}from"./useFetch-rMUag7QW.js";const l="_cardPage_1m1y9_1",_="_card_1m1y9_1",s={cardPage:l,card:_,"card-about":"_card-about_1m1y9_8","card-title":"_card-title_1m1y9_11","card-describe":"_card-describe_1m1y9_14"},j=()=>{const{id:r}=i(),{data:e,isLoading:d,error:c}=m(o.locations+r);return c&&c.response.status===404?a.jsx(t,{to:"*"}):d?a.jsx(n,{}):a.jsx("div",{className:s.cardPage,children:a.jsx("div",{className:s.card,children:a.jsxs("div",{className:s["card-about"],children:[a.jsxs("h1",{className:s["card-title"],children:[e.name," "]}),a.jsx("p",{className:s["card-describe"],children:"Name: "+e.name}),a.jsx("p",{className:s["card-describe"],children:"Dismension: "+e.dimension}),a.jsx("p",{className:s["card-describe"],children:"Type: "+e.type}),a.jsx("p",{className:s["card-describe"],children:"Id: "+e.id})]})})})};export{j as default};
