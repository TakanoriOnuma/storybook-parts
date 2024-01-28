import{e as M}from"./index-bb7da91f.js";import{w as q,f as A}from"./index-09d824d7.js";import{R as s}from"./index-f1f2c4b1.js";import{B as O}from"./Button-bf62ba13.js";const G={title:"examples/Button",component:O,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},parameters:{theme:"default",notes:"These are notes for the Button stories",info:"This is info for the Button stories",jsx:{useBooleanShorthandSyntax:!1}}},r={args:{primary:!0,label:"Button"}},a={args:{label:"Button"},parameters:{docs:{description:{story:`
This is the secondary - or default - mode for the button

_this description was written as a string in \`parameters.docs.description.story\`_`}}}},t={args:{size:"large",label:"Button"},parameters:{docs:{description:{story:`
This is the large button

_this description was written as a string in \`parameters.docs.description.story\`, and overrides the comment above the story_
`}}}},o={args:{size:"small",label:"Button"}},n={args:{primary:!0,label:"Increment"},render:e=>{const[l,d]=s.useState(0);return s.createElement(s.Fragment,null,s.createElement(O,{...e,onClick:()=>d(l+1)}),s.createElement("div",{style:{padding:"1rem"}},"Click count: ",l))},play:async({canvasElement:e,id:l})=>{const d=q(e),F=d.getByText("Increment");await A.click(F),M(d.getByText("Click count: 1")).toBeInTheDocument()}},c={...n,parameters:{docs:{story:{autoplay:!0}}}},i={render:()=>{const e=new Error("Rendering problem");throw e.stack=e.stack.replace(/\d+:\d+(:\d+)?/g,"000:0001").replace(/v=[^:]+/g,"v=00000000").replace(/[^/]+\.js/g,"file.js"),e},args:{label:"Button"},parameters:{chromatic:{disable:!0}}};var m,p,u,g,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source},description:{story:`This is the primary mode for the button

_this description was written as a comment above the story_`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var y,b,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,B,w,S,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(w=(B=t.parameters)==null?void 0:B.docs)==null?void 0:w.source},description:{story:`This is the large button
_this description was written as a comment above the story, and should never be shown because it should be overriden by the description in the parameters_`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.description}}};var _,C,T;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(T=(C=o.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var E,x,I;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    const canvas = within(canvasElement);
    const button = canvas.getByText('Increment');
    await fireEvent.click(button);
    expect(canvas.getByText('Click count: 1')).toBeInTheDocument();
  }
}`,...(I=(x=n.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var j,D,z;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...Clicking,
  parameters: {
    docs: {
      story: {
        autoplay: true
      }
    }
  }
}`,...(z=(D=c.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var R,P,L;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(L=(P=i.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};const H=["Primary","Secondary","Large","Small","Clicking","ClickingInDocs","ErrorStory"],U=Object.freeze(Object.defineProperty({__proto__:null,Clicking:n,ClickingInDocs:c,ErrorStory:i,Large:t,Primary:r,Secondary:a,Small:o,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{n as C,U as D,i as E,t as L,r as P,a as S,c as a,G as m};
//# sourceMappingURL=Button.stories-8508c894.js.map
