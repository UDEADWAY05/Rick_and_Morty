import{u as o,j as e,N as x,L as j,a as g,c as N}from"./index-B2gRE37K.js";import{u as p}from"./useFetch-rMUag7QW.js";const u="_cardPage_hqze6_1",q="_card_hqze6_1",s={cardPage:u,card:q,"card-left":"_card-left_hqze6_8","card-right":"_card-right_hqze6_11","card-title":"_card-title_hqze6_14","card-describe":"_card-describe_hqze6_17","card-second":"_card-second_hqze6_20","card-second-grid":"_card-second-grid_hqze6_25","card-mini":"_card-mini_hqze6_28","card-mini-title":"_card-mini-title_hqze6_31","card-mini-describe":"_card-mini-describe_hqze6_34","characters-img":"_characters-img_hqze6_38"},v=()=>{const{id:i}=o(),{data:a,isLoading:t,error:c}=p(N.characters+i);if(c&&c.response.status===404)return e.jsx(x,{to:"*"});if(t)return e.jsx(j,{});const{name:r,species:n,gender:l,status:m,image:h}=a;return e.jsxs("div",{className:s.cardPage,children:[c&&e.jsx("div",{children:"error"},"error"),e.jsxs("div",{className:s.card,children:[e.jsx("div",{className:s["card-left"],children:e.jsx("img",{alt:r,src:h,className:s["characters-img"]})}),e.jsxs("div",{className:s["card-right"],children:[e.jsxs("p",{className:s["card-title"],children:[r," "]},"title"),e.jsx("p",{className:s["card-describe"],children:"Name: "+r},"name"),e.jsx("p",{className:s["card-describe"],children:"Species: "+n},"species"),e.jsx("p",{className:s["card-describe"],children:"Gender: "+l},"gender"),e.jsx("p",{className:s["card-describe"],children:"Status: "+m},"status"),e.jsx("p",{className:s["card-describe"],children:"Id: "+i},"id")]})]},"card"),e.jsxs("div",{className:s["card-second"],children:[e.jsx("h1",{className:s.title,children:"Эпизоды"}),e.jsx("div",{className:s["card-second-grid"],children:a.episode&&a.episode.map((d,_)=>e.jsxs(g,{className:s["card-mini"],to:"/episodes/"+d.id,children:[e.jsx("div",{className:s["card-mini-title"],children:d.name}),e.jsx("div",{className:s["card-mini-describe"],children:d.episode})]},_))})]})]})};export{v as default};
