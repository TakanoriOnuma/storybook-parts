import{R as e}from"./index-f1f2c4b1.js";import{F as a}from"./index-758f4e48.js";import{B as t}from"./Button-0f9be3d0.js";const T={title:"Button",component:t,args:{children:"Button"}},P=({children:n})=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"}},n),o=({children:n})=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"1rem"}},n),r={},l={render:n=>e.createElement(P,null,e.createElement(o,null,e.createElement(t,{variant:"solid",...n},"Solid"),e.createElement(t,{variant:"outline",...n},"Outline"),e.createElement(t,{variant:"ghost",...n},"Ghost")),e.createElement(o,null,e.createElement(t,{variant:"solid",...n},e.createElement(a,null)," Solid"),e.createElement(t,{variant:"outline",...n},e.createElement(a,null)," Outline"),e.createElement(t,{variant:"ghost",...n},e.createElement(a,null)," Ghost")),e.createElement(o,null,e.createElement(t,{variant:"solid",padding:"small",...n},e.createElement(a,null)),e.createElement(t,{variant:"outline",padding:"small",...n},e.createElement(a,null)),e.createElement(t,{variant:"ghost",padding:"small",...n},e.createElement(a,null))))},s={args:{active:!0,children:e.createElement(e.Fragment,null,e.createElement(a,null),"Button")},render:n=>e.createElement(o,null,e.createElement(t,{variant:"solid",...n}),e.createElement(t,{variant:"outline",...n}),e.createElement(t,{variant:"ghost",...n}))},i={args:{children:e.createElement(e.Fragment,null,e.createElement(a,null),"Button")},render:n=>e.createElement(o,null,e.createElement(t,{variant:"solid",...n}),e.createElement(t,{variant:"outline",...n}),e.createElement(t,{variant:"ghost",...n}))},c={args:{children:e.createElement(a,null),padding:"small"},render:n=>e.createElement(o,null,e.createElement(t,{variant:"solid",...n}),e.createElement(t,{variant:"outline",...n}),e.createElement(t,{variant:"ghost",...n}))},u={render:()=>e.createElement(o,null,e.createElement(t,{size:"small"},"Small Button"),e.createElement(t,{size:"medium"},"Medium Button"))},m={args:{disabled:!0,children:"Disabled Button"}},d={render:()=>e.createElement(o,null,e.createElement(t,{onClick:()=>console.log("Hello")},"I am a button using onClick"),e.createElement(t,{asChild:!0},e.createElement("a",{href:"https://storybook.js.org/"},"I am an anchor using Href")))},p={args:{variant:"outline"},render:n=>e.createElement(P,null,e.createElement(o,null,e.createElement(t,{animation:"glow",...n},"Button"),e.createElement(t,{animation:"jiggle",...n},"Button"),e.createElement(t,{animation:"rotate360",...n},"Button")),e.createElement(o,null,e.createElement(t,{animation:"glow",...n},e.createElement(a,null)," Button"),e.createElement(t,{animation:"jiggle",...n},e.createElement(a,null)," Button"),e.createElement(t,{animation:"rotate360",...n},e.createElement(a,null)," Button")),e.createElement(o,null,e.createElement(t,{animation:"glow",padding:"small",...n},e.createElement(a,null)),e.createElement(t,{animation:"jiggle",padding:"small",...n},e.createElement(a,null)),e.createElement(t,{animation:"rotate360",padding:"small",...n},e.createElement(a,null))))};var g,B,E;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(E=(B=r.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var v,h,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Stack>
      <Row>
        <Button variant="solid" {...args}>
          Solid
        </Button>
        <Button variant="outline" {...args}>
          Outline
        </Button>
        <Button variant="ghost" {...args}>
          Ghost
        </Button>
      </Row>
      <Row>
        <Button variant="solid" {...args}>
          <FaceHappyIcon /> Solid
        </Button>
        <Button variant="outline" {...args}>
          <FaceHappyIcon /> Outline
        </Button>
        <Button variant="ghost" {...args}>
          <FaceHappyIcon /> Ghost
        </Button>
      </Row>
      <Row>
        <Button variant="solid" padding="small" {...args}>
          <FaceHappyIcon />
        </Button>
        <Button variant="outline" padding="small" {...args}>
          <FaceHappyIcon />
        </Button>
        <Button variant="ghost" padding="small" {...args}>
          <FaceHappyIcon />
        </Button>
      </Row>
    </Stack>
}`,...(w=(h=l.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var y,I,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    active: true,
    children: <>
        <FaceHappyIcon />
        Button
      </>
  },
  render: args => <Row>
      <Button variant="solid" {...args} />
      <Button variant="outline" {...args} />
      <Button variant="ghost" {...args} />
    </Row>
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var R,H,F;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: <>
        <FaceHappyIcon />
        Button
      </>
  },
  render: args => <Row>
      <Button variant="solid" {...args} />
      <Button variant="outline" {...args} />
      <Button variant="ghost" {...args} />
    </Row>
}`,...(F=(H=i.parameters)==null?void 0:H.docs)==null?void 0:F.source}}};var f,b,k;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <FaceHappyIcon />,
    padding: 'small'
  },
  render: args => <Row>
      <Button variant="solid" {...args} />
      <Button variant="outline" {...args} />
      <Button variant="ghost" {...args} />
    </Row>
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var j,O,z;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Row>
      <Button size="small">Small Button</Button>
      <Button size="medium">Medium Button</Button>
    </Row>
}`,...(z=(O=u.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var C,D,_;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: 'Disabled Button'
  }
}`,...(_=(D=m.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var x,A,W;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Row>
      <Button onClick={() => console.log('Hello')}>I am a button using onClick</Button>
      <Button asChild>
        <a href="https://storybook.js.org/">I am an anchor using Href</a>
      </Button>
    </Row>
}`,...(W=(A=d.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var G,M,V;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'outline'
  },
  render: args => <Stack>
      <Row>
        <Button animation="glow" {...args}>
          Button
        </Button>
        <Button animation="jiggle" {...args}>
          Button
        </Button>
        <Button animation="rotate360" {...args}>
          Button
        </Button>
      </Row>
      <Row>
        <Button animation="glow" {...args}>
          <FaceHappyIcon /> Button
        </Button>
        <Button animation="jiggle" {...args}>
          <FaceHappyIcon /> Button
        </Button>
        <Button animation="rotate360" {...args}>
          <FaceHappyIcon /> Button
        </Button>
      </Row>
      <Row>
        <Button animation="glow" padding="small" {...args}>
          <FaceHappyIcon />
        </Button>
        <Button animation="jiggle" padding="small" {...args}>
          <FaceHappyIcon />
        </Button>
        <Button animation="rotate360" padding="small" {...args}>
          <FaceHappyIcon />
        </Button>
      </Row>
    </Stack>
}`,...(V=(M=p.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const q=["Base","Variants","Active","WithIcon","IconOnly","Sizes","Disabled","WithHref","Animated"],N=Object.freeze(Object.defineProperty({__proto__:null,Active:s,Animated:p,Base:r,Disabled:m,IconOnly:c,Sizes:u,Variants:l,WithHref:d,WithIcon:i,__namedExportsOrder:q,default:T},Symbol.toStringTag,{value:"Module"}));export{p as A,N as B,m as D,c as I,u as S,l as V,i as W,r as a,d as b,s as c};
//# sourceMappingURL=Button.stories-73eb6edc.js.map
