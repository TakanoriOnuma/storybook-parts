import{w as m}from"./index-7Zzp-dQq.js";import{e as i}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:g}=__STORYBOOK_MODULE_GLOBAL__,x={component:g.Components.Pre,decorators:[(n,y)=>n({args:{object:{...y.argTypes}}})],argTypes:{componentArg:{type:"string"},storyArg:{type:"string"},composedArg:{type:"string"}}},e={argTypes:{storyArg:{type:"number"},composedArg:{options:["a","b"]}},play:async({canvasElement:n})=>{await i(JSON.parse(m(n).getByTestId("pre").innerText)).toMatchObject({componentArg:{type:{name:"string"}},storyArg:{type:{name:"number"}},composedArg:{type:{name:"string"},options:["a","b"]}})}},t={args:{a:1,b:"1",c:!0,d:{a:"b"},e:["a","b"]},play:async({canvasElement:n})=>{await i(JSON.parse(m(n).getByTestId("pre").innerText)).toMatchObject({a:{type:{name:"number"}},b:{type:{name:"string"}},c:{type:{name:"boolean"}},d:{type:{name:"object",value:{a:{name:"string"}}}},e:{type:{name:"array",value:{name:"string"}}}})}};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    storyArg: {
      type: 'number'
    },
    composedArg: {
      options: ['a', 'b']
    }
  },
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    // NOTE: these stories don't test project-level argTypes inheritance as it is too problematic
    // to have an argType floating around that will apply too *all* other stories in our sandboxes.
    await expect(JSON.parse(within(canvasElement).getByTestId('pre').innerText)).toMatchObject({
      componentArg: {
        type: {
          name: 'string'
        }
      },
      storyArg: {
        type: {
          name: 'number'
        }
      },
      composedArg: {
        type: {
          name: 'string'
        },
        options: ['a', 'b']
      }
    });
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var s,p,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    a: 1,
    b: '1',
    c: true,
    d: {
      a: 'b'
    },
    e: ['a', 'b']
  },
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    await expect(JSON.parse(within(canvasElement).getByTestId('pre').innerText)).toMatchObject({
      a: {
        type: {
          name: 'number'
        }
      },
      b: {
        type: {
          name: 'string'
        }
      },
      c: {
        type: {
          name: 'boolean'
        }
      },
      d: {
        type: {
          name: 'object',
          value: {
            a: {
              name: 'string'
            }
          }
        }
      },
      e: {
        type: {
          name: 'array',
          value: {
            name: 'string'
          }
        }
      }
    });
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Inheritance","ArgTypeInference"];export{t as ArgTypeInference,e as Inheritance,v as __namedExportsOrder,x as default};
