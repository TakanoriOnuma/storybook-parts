import{a as T,j as m}from"./jsx-runtime-0f39435c.js";import{r as d}from"./index-6f814c40.js";import{e as x}from"./index-5a529529.js";import{o as v}from"./index-90790cc0.js";import{a as w}from"./helpers-a9e07cde.js";const f=e=>{const[t,r,a]=e.split("-"),n=new Date;return n.setFullYear(parseInt(t,10),parseInt(r,10)-1,parseInt(a,10)),n},_=e=>{const[t,r]=e.split(":"),a=new Date;return a.setHours(parseInt(t,10)),a.setMinutes(parseInt(r,10)),a},y=e=>{const t=new Date(e),r=`000${t.getFullYear()}`.slice(-4),a=`0${t.getMonth()+1}`.slice(-2),n=`0${t.getDate()}`.slice(-2);return`${r}-${a}-${n}`},g=e=>{const t=new Date(e),r=`0${t.getHours()}`.slice(-2),a=`0${t.getMinutes()}`.slice(-2);return`${r}:${a}`},N=x.div(({theme:e})=>({flex:1,display:"flex",input:{marginLeft:10,flex:1,height:32,"&::-webkit-calendar-picker-indicator":{opacity:.5,height:12,filter:e.base==="light"?void 0:"invert(1)"}},"input:first-of-type":{marginLeft:0,flexGrow:4},"input:last-of-type":{flexGrow:3}})),I=({name:e,value:t,onChange:r,onFocus:a,onBlur:n})=>{const[h,D]=d.useState(!0),l=d.useRef(),c=d.useRef();d.useEffect(()=>{h!==!1&&(l&&l.current&&(l.current.value=y(t)),c&&c.current&&(c.current.value=g(t)))},[t]);const V=u=>{const o=f(u.target.value),i=new Date(t);i.setFullYear(o.getFullYear(),o.getMonth(),o.getDate());const s=i.getTime();s&&r(s),D(!!s)},$=u=>{const o=_(u.target.value),i=new Date(t);i.setHours(o.getHours()),i.setMinutes(o.getMinutes());const s=i.getTime();s&&r(s),D(!!s)},p=w(e);return T(N,{children:[m(v.Input,{type:"date",max:"9999-12-31",ref:l,id:`${p}-date`,name:`${p}-date`,onChange:V,onFocus:a,onBlur:n}),m(v.Input,{type:"time",id:`${p}-time`,name:`${p}-time`,ref:c,onChange:$,onFocus:a,onBlur:n}),h?null:m("div",{children:"invalid"})]})};try{f.displayName="parseDate",f.__docgenInfo={description:"",displayName:"parseDate",props:{}}}catch{}try{_.displayName="parseTime",_.__docgenInfo={description:"",displayName:"parseTime",props:{}}}catch{}try{y.displayName="formatDate",y.__docgenInfo={description:"",displayName:"formatDate",props:{}}}catch{}try{g.displayName="formatTime",g.__docgenInfo={description:"",displayName:"formatTime",props:{}}}catch{}try{I.displayName="DateControl",I.__docgenInfo={description:"",displayName:"DateControl",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"DateValue"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"DateValue"}},argType:{defaultValue:null,description:"",name:"argType",required:!1,type:{name:"ArgType"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(value: DateValue) => void | DateValue"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(evt: any) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(evt: any) => void"}}}}}catch{}export{I as D};
//# sourceMappingURL=Date-9ddd79e5.js.map
