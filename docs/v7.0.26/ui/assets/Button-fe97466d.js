import{j as i}from"./jsx-runtime-0f39435c.js";import{e as r}from"./index-5a529529.js";const s=r.button(({primary:e,size:a,backgroundColor:t})=>({fontFamily:"'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",fontWeight:700,border:0,borderRadius:"3em",cursor:"pointer",display:"inline-block",lineHeight:1,...e?{color:"white",backgroundColor:"#1ea7fd"}:{color:"#333",backgroundColor:"transparent",boxShadow:"rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset"},...{small:{fontSize:"12px",padding:"10px 16px"},medium:{fontSize:"14px",padding:"11px 20px"},large:{fontSize:"16px",padding:"12px 24px"}}[a],...t&&{backgroundColor:t}})),l=({primary:e=!1,size:a="medium",backgroundColor:t,label:n,...o})=>i(s,{type:"button",size:a,primary:e,backgroundColor:t,...o,children:n});try{l.displayName="Button",l.__docgenInfo={description:"## Example button component\nComes in three sizes: `small`, `medium`, and `large`.\n\nCan be primary or secondary.\n\n_ This descriptions is written as a comment above the component_",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"() => void"}}}}}catch{}export{l as B};
//# sourceMappingURL=Button-fe97466d.js.map
