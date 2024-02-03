import{a as m,F as U,j as M}from"./jsx-runtime-0f39435c.js";import{e as F}from"./index-7a180320.js";import{w as K,f as V}from"./index-1c0ca390.js";import{R as N}from"./index-6f814c40.js";import{B as z}from"./Button-fe97466d.js";const{addons:W}=__STORYBOOK_MODULE_PREVIEW_API__,{RESET_STORY_ARGS:q,STORY_ARGS_UPDATED:H}=__STORYBOOK_MODULE_CORE_EVENTS__,J={title:"examples/Button",component:z,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},parameters:{theme:"default",notes:"These are notes for the Button stories",info:"This is info for the Button stories",jsx:{useBooleanShorthandSyntax:!1}}},r={args:{primary:!0,label:"Button"}},s={args:{label:"Button"},parameters:{docs:{description:{story:`
This is the secondary - or default - mode for the button

_this description was written as a string in \`parameters.docs.description.story\`_`}}}},t={args:{size:"large",label:"Button"},parameters:{docs:{description:{story:`
This is the large button

_this description was written as a string in \`parameters.docs.description.story\`, and overrides the comment above the story_
`}}}},a={args:{size:"small",label:"Button"}},n={args:{primary:!0,label:"Increment"},render:e=>{const[i,d]=N.useState(0);return m(U,{children:[M(z,{...e,onClick:()=>d(i+1)}),m("div",{style:{padding:"1rem"},children:["Click count: ",i]})]})},play:async({canvasElement:e,id:i})=>{const d=W.getChannel();d.emit(q,{storyId:i}),await new Promise(G=>{d.once(H,G)});const l=K(e),L=l.getByText("Increment");await V.click(L),F(l.getByText("Click count: 1")).toBeInTheDocument()}},o={...n,parameters:{docs:{story:{autoplay:!0}}}},c={render:()=>{const e=new Error("Rendering problem");throw e.stack=e.stack.replace(/\d+:\d+(:\d+)?/g,"000:0001").replace(/v=[^:]+/g,"v=00000000").replace(/[^/]+\.js/g,"file.js"),e},args:{label:"Button"},parameters:{chromatic:{disable:!0}}};var p,u,g,h,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:`This is the primary mode for the button

_this description was written as a comment above the story_`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var _,b,S;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  },
  parameters: {
    docs: {
      description: {
        story: \`
This is the secondary - or default - mode for the button

_this description was written as a string in \\\`parameters.docs.description.story\\\`_\`
      }
    }
  }
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var f,v,T,w,B;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  },
  parameters: {
    docs: {
      description: {
        story: \`
This is the large button

_this description was written as a string in \\\`parameters.docs.description.story\\\`, and overrides the comment above the story_
\`
      }
    }
  }
}`,...(T=(v=t.parameters)==null?void 0:v.docs)==null?void 0:T.source},description:{story:`This is the large button
_this description was written as a comment above the story, and should never be shown because it should be overriden by the description in the parameters_`,...(B=(w=t.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};var E,k,C;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var R,O,x;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Increment'
  },
  render: args => {
    const [count, setCount] = React.useState(0);
    return <>
        <Button {...args} onClick={() => setCount(count + 1)} />
        <div style={{
        padding: '1rem'
      }}>Click count: {count}</div>
      </>;
  },
  play: async ({
    canvasElement,
    id
  }) => {
    const channel = addons.getChannel();
    channel.emit(RESET_STORY_ARGS, {
      storyId: id
    });
    await new Promise<void>(resolve => {
      channel.once(STORY_ARGS_UPDATED, resolve);
    });
    const canvas = within(canvasElement);
    const button = canvas.getByText('Increment');
    await fireEvent.click(button);
    expect(canvas.getByText('Click count: 1')).toBeInTheDocument();
  }
}`,...(x=(O=n.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var D,I,j;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...Clicking,
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  }
}`,...(j=(I=o.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var P,A,Y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const err = new Error('Rendering problem');
    // force stack for consistency in capture
    err.stack = err.stack.replace(/\\d+:\\d+(:\\d+)?/g, \`000:0001\`).replace(/v=[^:]+/g, 'v=00000000').replace(/[^/]+\\.js/g, 'file.js');
    throw err;
  },
  args: {
    label: 'Button'
  },
  parameters: {
    chromatic: {
      disable: true
    }
  }
}`,...(Y=(A=c.parameters)==null?void 0:A.docs)==null?void 0:Y.source}}};const Q=["Primary","Secondary","Large","Small","Clicking","ClickingInDocs","ErrorStory"],te=Object.freeze(Object.defineProperty({__proto__:null,Clicking:n,ClickingInDocs:o,ErrorStory:c,Large:t,Primary:r,Secondary:s,Small:a,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{n as C,te as D,c as E,t as L,r as P,s as S,o as a,J as m};
//# sourceMappingURL=Button.stories-01203404.js.map
