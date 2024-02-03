import{j as t}from"./jsx-runtime-0f39435c.js";import{u as a,T as m}from"./index-5a529529.js";import{a as y}from"./chunk-CSVBMRUK-183fa11f.js";import{s as te}from"./dom.esm-64c5e3c1.js";import{H as r}from"./Heading-43200e6c.js";import"./index-6f814c40.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./extends-98964cd2.js";import"./index-94f418ab.js";import"./index-92073c91.js";import"./lz-string-475d838e.js";import"./index-90790cc0.js";import"./iframe-5727660f.js";import"../sb-preview/runtime.js";import"./index-6de6b113.js";import"./bundle.esm-5f0471b5.js";import"./index-569f0cbf.js";import"./Menu-cd6fe8ee.js";import"./polished.esm-ebce2d70.js";const ke={component:r,title:"Sidebar/Heading",excludeStories:/.*Data$/,parameters:{layout:"fullscreen"},decorators:[e=>t("div",{style:{padding:"0 20px",maxWidth:"230px"},children:e()})]},n=[{title:"Menu Item 1",onClick:y("onActivateMenuItem"),id:"1"},{title:"Menu Item 2",onClick:y("onActivateMenuItem"),id:"2"},{title:"Menu Item 3",onClick:y("onActivateMenuItem"),id:"3"}],o=()=>t(r,{menuHighlighted:!0,menu:n}),Ie={menu:n},s=()=>{const e=a();return t(m,{theme:{...e,brand:{title:void 0,url:void 0,image:void 0,target:void 0}},children:t(r,{menu:n})})},i=()=>{const e=a();return t(m,{theme:{...e,brand:{title:void 0,url:null,image:void 0,target:void 0}},children:t(r,{menu:n})})},d=()=>{const e=a();return t(m,{theme:{...e,brand:{title:"My title",url:"https://example.com",image:null,target:void 0}},children:t(r,{menu:n})})},u=()=>{const e=a();return t(m,{theme:{...e,brand:{title:"My title",url:null,image:null,target:void 0}},children:t(r,{menu:n})})},l=()=>{const e=a();return t(m,{theme:{...e,brand:{title:"My title is way to long to actually fit",url:null,image:null,target:void 0}},children:t(r,{menu:n})})},c=()=>{const e=a();return t(m,{theme:{...e,brand:{title:'<span style="color:red">My custom title</span>',url:null,image:null,target:void 0}},children:t(r,{menu:n})})},h=()=>{const e=a();return t(m,{theme:{...e,brand:{title:"My Title",url:"https://example.com",image:"https://storybook.js.org/images/placeholders/150x22.png",target:void 0}},children:t(r,{menu:n})})},p=()=>{const e=a();return t(m,{theme:{...e,brand:{title:"My Title",url:"https://example.com",image:"https://storybook.js.org/images/placeholders/100x150.png",target:void 0}},children:t(r,{menu:n})})},g=()=>{const e=a();return t(m,{theme:{...e,brand:{title:"My Title",url:"https://example.com",image:"https://s.cdpn.io/91525/potofgold.svg",target:void 0}},children:t(r,{menu:n})})},T=()=>{const e=a();return t(m,{theme:{...e,brand:{title:void 0,url:null,image:null,target:void 0}},children:t(r,{menu:n})})},v={args:{menu:n,skipLinkHref:"#storybook-preview-wrapper"},parameters:{layout:"padded",chromatic:{delay:300}},play:()=>{te.getAllByText("Skip to canvas").forEach(e=>e.focus())}};var f,x,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:"() => <Heading menuHighlighted menu={menuItems} />",...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var k,I,S;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: undefined,
      url: undefined,
      image: undefined,
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var M,H,P;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: undefined,
      url: null,
      image: undefined,
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(P=(H=i.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var C,B,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: 'My title',
      url: 'https://example.com',
      image: null,
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var A,j,w;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: 'My title',
      url: null,
      image: null,
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(w=(j=u.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,D,E;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: 'My title is way to long to actually fit',
      url: null,
      image: null,
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(E=(D=l.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var O,_,z;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: '<span style="color:red">My custom title</span>',
      url: null,
      image: null,
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var F,G,U;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: 'My Title',
      url: 'https://example.com',
      image: 'https://storybook.js.org/images/placeholders/150x22.png',
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(U=(G=h.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var V,W,$;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: 'My Title',
      url: 'https://example.com',
      image: 'https://storybook.js.org/images/placeholders/100x150.png',
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var q,J,K;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: 'My Title',
      url: 'https://example.com',
      image: 'https://s.cdpn.io/91525/potofgold.svg',
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,R,X;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
  const theme = (useTheme() as Theme);
  return <ThemeProvider theme={{
    ...theme,
    brand: {
      title: undefined,
      url: null,
      image: null,
      target: undefined
    }
  }}>
      <Heading menu={menuItems} />
    </ThemeProvider>;
}`,...(X=(R=T.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    menu: menuItems,
    skipLinkHref: '#storybook-preview-wrapper'
  },
  parameters: {
    layout: 'padded',
    chromatic: {
      delay: 300
    }
  },
  play: () => {
    // focus each instance for chromatic/storybook's stacked theme
    screen.getAllByText('Skip to canvas').forEach(x => x.focus());
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const Se=["MenuHighlighted","standardData","Standard","StandardNoLink","LinkAndText","OnlyText","LongText","CustomTitle","CustomBrandImage","CustomBrandImageTall","CustomBrandImageUnsizedSVG","NoBrand","SkipToCanvasLinkFocused"];export{h as CustomBrandImage,p as CustomBrandImageTall,g as CustomBrandImageUnsizedSVG,c as CustomTitle,d as LinkAndText,l as LongText,o as MenuHighlighted,T as NoBrand,u as OnlyText,v as SkipToCanvasLinkFocused,s as Standard,i as StandardNoLink,Se as __namedExportsOrder,ke as default,Ie as standardData};
//# sourceMappingURL=Heading.stories-b5e06b29.js.map
