import{w as y}from"./index-7Zzp-dQq.js";import{e as P}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:i}=__STORYBOOK_MODULE_GLOBAL__,g={component:i.Components.Pre,parameters:{componentParameter:"componentParameter",storyParameter:"componentStoryParameter",storyObject:{a:"component",b:"component"}},decorators:[(r,t)=>{const{projectParameter:s,componentParameter:m,storyParameter:c,storyObject:p}=t.parameters;return r({args:{object:{projectParameter:s,componentParameter:m,storyParameter:c,storyObject:p}}})}]},e={parameters:{storyParameter:"storyParameter",storyObject:{a:"story"}},play:async({canvasElement:r})=>{const t=y(r);await P(JSON.parse(t.getByTestId("pre").innerText)).toEqual({projectParameter:"projectParameter",componentParameter:"componentParameter",storyParameter:"storyParameter",storyObject:{a:"story",b:"component",c:"project"}})}};var a,o,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    storyParameter: 'storyParameter',
    storyObject: {
      a: 'story'
    }
  },
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const canvas = within(canvasElement);
    await expect(JSON.parse(canvas.getByTestId('pre').innerText)).toEqual({
      projectParameter: 'projectParameter',
      componentParameter: 'componentParameter',
      storyParameter: 'storyParameter',
      storyObject: {
        a: 'story',
        b: 'component',
        c: 'project'
      }
    });
  }
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const E=["Inheritance"];export{e as Inheritance,E as __namedExportsOrder,g as default};
