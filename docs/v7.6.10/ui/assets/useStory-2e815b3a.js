import{r as n}from"./index-9f32f44c.js";function f(e,s){const r=i([e],s);return r&&r[0]}function i(e,s){const[r,u]=n.useState({});return n.useEffect(()=>{Promise.all(e.map(async t=>{const a=await s.loadStory(t);u(o=>o[t]===a?o:{...o,[t]:a})}))}),e.map(t=>{if(r[t])return r[t];try{return s.storyById(t)}catch{return null}})}export{f as a,i as u};
//# sourceMappingURL=useStory-2e815b3a.js.map
