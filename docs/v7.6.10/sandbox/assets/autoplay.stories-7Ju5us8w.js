import{e as u}from"./index-s6rI0yla.js";import{w as y}from"./index-7Zzp-dQq.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";import"./index-PPLHz8o0.js";const{global:m}=__STORYBOOK_MODULE_GLOBAL__,v={component:m.Components.Pre,tags:["autodocs"],args:{text:"Play has not run"},parameters:{chromatic:{disable:!0}}},a={play:async({viewMode:n,canvasElement:t})=>{const o=await y(t).findByText("Play has not run");n==="docs"?(o.innerText="Play should not have run!",u(n).not.toBe("docs")):o.innerText="Play has run"}},e={parameters:{docs:{story:{autoplay:!0}}},play:async({canvasElement:n})=>{const t=await y(n).findByText("Play has not run");t.innerText="Play has run"}};var r,s,p;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  play: async ({
    viewMode,
    canvasElement
  }) => {
    const pre = await within(canvasElement).findByText('Play has not run');
    if (viewMode === 'docs') {
      pre.innerText = 'Play should not have run!';
      // Sort of pointless
      expect(viewMode).not.toBe('docs');
    } else {
      pre.innerText = 'Play has run';
    }
  }
}`,...(p=(s=a.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var c,i,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const pre = await within(canvasElement).findByText('Play has not run');
    pre.innerText = 'Play has run';
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const B=["NoAutoplay","Autoplay"];export{e as Autoplay,a as NoAutoplay,B as __namedExportsOrder,v as default};
