import{R as o,r as c}from"./index-9f32f44c.js";import{u as m,r as l}from"./react-16-06ce199e.js";import"./_commonjsHelpers-de833af9.js";import"./index-9c2d1831.js";const{global:E}=__STORYBOOK_MODULE_GLOBAL__;var{FRAMEWORK_OPTIONS:a}=E,_=(r,t)=>{const{id:n,component:e}=t;if(!e)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);return o.createElement(e,{...r})},f=class extends c.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){const{hasError:r}=this.state,{showMain:t}=this.props;r||t()}componentDidCatch(r){const{showException:t}=this.props;t(r)}render(){const{hasError:r}=this.state,{children:t}=this.props;return r?null:t}},p=a!=null&&a.strictMode?c.StrictMode:c.Fragment;async function y({storyContext:r,unboundStoryFn:t,showMain:n,showException:e,forceRemount:h},s){const u=t,i=o.createElement(f,{showMain:n,showException:e},o.createElement(u,{...r})),d=p?o.createElement(p,null,i):i;return h&&m(s),await l(d,s),()=>m(s)}var C={renderer:"react"};export{C as parameters,_ as render,y as renderToCanvas};
//# sourceMappingURL=entry-preview-7d9f601c.js.map
