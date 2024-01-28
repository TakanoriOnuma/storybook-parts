import{e as u}from"./index-cuPYNwTH.js";import{w as y}from"./index-vlIbkheJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";const{global:d}=__STORYBOOK_MODULE_GLOBAL__,T={component:d.Components.Pre,tags:["autodocs"],args:{text:"Play has not run"},parameters:{chromatic:{disable:!0}}},a={play:async({viewMode:n,canvasElement:t})=>{const o=await y(t).findByText("Play has not run");n==="docs"?(o.innerText="Play should not have run!",u(n).not.toBe("docs")):o.innerText="Play has run"}},e={parameters:{docs:{story:{autoplay:!0}}},play:async({canvasElement:n})=>{const t=await y(n).findByText("Play has not run");t.innerText="Play has run"}};var r,s,c;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var p,l,i;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(l=e.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const f=["NoAutoplay","Autoplay"];export{e as Autoplay,a as NoAutoplay,f as __namedExportsOrder,T as default};
