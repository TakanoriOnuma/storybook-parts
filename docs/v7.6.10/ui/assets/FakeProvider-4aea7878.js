import{j as t,a as o}from"./jsx-runtime-31019b9d.js";import{n as s}from"./index-9e46a6e4.js";import{b as n}from"./index-0d1d6e7e.js";class d{getElements(e){throw new Error("Provider.getElements() is not implemented!")}handleAPI(e){throw new Error("Provider.handleAPI() is not implemented!")}getConfig(){return console.error("Provider.getConfig() is not implemented!"),{}}}class a extends d{constructor(){super(),this.addons=n,this.channel={on:()=>{},once:()=>{},off:()=>{},emit:()=>{},addListener:()=>{},removeListener:()=>{}}}getElements(e){return n.getElements(e)}renderPreview(){return t("div",{children:"This is from a 'renderPreview' call from FakeProvider"})}handleAPI(e){n.loadAddons(e)}getConfig(){return{}}}const i=s.div({width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"});class p extends a{renderPreview(...e){return o(i,{children:["This is from a 'renderPreview' call from FakeProvider",t("hr",{}),"'renderPreview' was called with:",t("pre",{children:JSON.stringify(e,null,2)})]})}}try{i.displayName="Centered",i.__docgenInfo={description:"",displayName:"Centered",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}}}}}catch{}export{a as F,p as P};
//# sourceMappingURL=FakeProvider-4aea7878.js.map
