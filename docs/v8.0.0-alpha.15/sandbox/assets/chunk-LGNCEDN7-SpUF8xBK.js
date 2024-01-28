import{_ as i}from"./iframe-Kaf2ZuH_.js";import{R as e,r as p}from"./index-4g5l5LRQ.js";import{r as u,u as h}from"./react-18-lltdPBKk.js";import{C as l,A as E,H as d,D as x}from"./index-wS29sfn3.js";var D={code:l,a:E,...d},_=class extends p.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t){const{showException:r}=this.props;r(t)}render(){const{hasError:t}=this.state,{children:r}=this.props;return t?null:e.createElement(e.Fragment,null,r)}},R=class{constructor(){this.render=async(t,r,o)=>{const n={...D,...r==null?void 0:r.components},s=x;return new Promise((a,c)=>{i(()=>import("./index-F1vdPnb0.js"),__vite__mapDeps([0,1,2]),import.meta.url).then(({MDXProvider:m})=>u(e.createElement(_,{showException:c,key:Math.random()},e.createElement(m,{components:n},e.createElement(s,{context:t,docsParameter:r}))),o)).then(()=>a())})},this.unmount=t=>{h(t)}}};export{R as D,D as d};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./index-F1vdPnb0.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
