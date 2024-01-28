import{w as c}from"./index-7Zzp-dQq.js";import{e as m}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:A}=__STORYBOOK_MODULE_GLOBAL__,t={ArrowUp:{name:"ArrowUp"},ArrowDown:{name:"ArrowDown"},ArrowLeft:{name:"ArrowLeft"},ArrowRight:{name:"ArrowRight"}},w={ArrowUp:"Up",ArrowDown:"Down",ArrowLeft:"Left",ArrowRight:"Right"},f={component:A.Components.Pre,decorators:[(r,l)=>r({args:{object:{...l.args}}})]},n={args:{mappingArg:"ArrowRight"},argTypes:{mappingArg:{options:Object.keys(t),mapping:t,control:{type:"select",labels:w}}},play:async({canvasElement:r})=>{await m(JSON.parse(c(r).getByTestId("pre").innerText)).toMatchObject({mappingArg:{name:"ArrowRight"}})}},e={args:{mappingArg:["ArrowRight","ArrowLeft"]},argTypes:{mappingArg:{options:Object.keys(t),mapping:t,control:{type:"multi-select",labels:w}}},play:async({canvasElement:r})=>{await m(JSON.parse(c(r).getByTestId("pre").innerText)).toMatchObject({mappingArg:[{name:"ArrowRight"},{name:"ArrowLeft"}]})}};var a,o,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    mappingArg: 'ArrowRight'
  },
  argTypes: {
    mappingArg: {
      options: Object.keys(arrows),
      mapping: arrows,
      control: {
        type: 'select',
        labels
      }
    }
  },
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    await expect(JSON.parse(within(canvasElement).getByTestId('pre').innerText)).toMatchObject({
      mappingArg: {
        name: 'ArrowRight'
      }
    });
  }
}`,...(p=(o=n.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var s,i,g;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    mappingArg: ['ArrowRight', 'ArrowLeft']
  },
  argTypes: {
    mappingArg: {
      options: Object.keys(arrows),
      mapping: arrows,
      control: {
        type: 'multi-select',
        labels
      }
    }
  },
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    await expect(JSON.parse(within(canvasElement).getByTestId('pre').innerText)).toMatchObject({
      mappingArg: [{
        name: 'ArrowRight'
      }, {
        name: 'ArrowLeft'
      }]
    });
  }
}`,...(g=(i=e.parameters)==null?void 0:i.docs)==null?void 0:g.source}}};const x=["Single","Multiple"];export{e as Multiple,n as Single,x as __namedExportsOrder,f as default};
