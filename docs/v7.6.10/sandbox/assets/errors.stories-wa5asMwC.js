import{j as a}from"./jsx-runtime-vNq4Oc-g.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const y={renderable:"no, react can not render objects"},x=()=>y,v={component:x,parameters:{storyshots:{disable:!0},chromatic:{disable:!0}},decorators:[O=>{var s,t;return((t=(s=window==null?void 0:window.navigator)==null?void 0:s.userAgent)==null?void 0:t.match(/StorybookTestRunner/))||O()}]},r={render(){throw new Error("storyFn threw an error! WHOOPS")}},e={},o={render:()=>y},n={render:()=>a.jsx("div",{children:a.jsx(x,{})})};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render() {
    throw new Error('storyFn threw an error! WHOOPS');
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,i,u;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(i=e.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var l,b,w;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => badOutput
}`,...(w=(b=o.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var h,S,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div>
      {/* @ts-expect-error we're doing it wrong here on purpose */}
      <BadComponent />
    </div>
}`,...(g=(S=n.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const E=["RenderThrows","ComponentIsUnrenderable","StoryIsUnrenderable","StoryContainsUnrenderable"];export{e as ComponentIsUnrenderable,r as RenderThrows,n as StoryContainsUnrenderable,o as StoryIsUnrenderable,E as __namedExportsOrder,v as default};
