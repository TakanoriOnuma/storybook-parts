var o={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};const{global:S}=__STORYBOOK_MODULE_GLOBAL__,_={component:S.Components.Button,args:{label:"Click Me!"},parameters:{viewport:{viewports:o},chromatic:{disable:!0}}},e={parameters:{}},t={parameters:{viewport:{defaultViewport:Object.keys(o)[0]}}},r={parameters:{viewport:{defaultViewport:Object.keys(o)[0],defaultOrientation:"landscape"}}},a={parameters:{viewport:{defaultViewport:"phone",viewports:{phone:{name:"Phone Width",styles:{height:"600px",width:"100vh"},type:"mobile"}}}}},s={parameters:{viewport:{disable:!0}}};var n,p,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  parameters: {}
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: Object.keys(MINIMAL_VIEWPORTS)[0]
    }
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,h;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: Object.keys(MINIMAL_VIEWPORTS)[0],
      defaultOrientation: 'landscape'
    }
  }
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,w,O;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'phone',
      viewports: {
        phone: {
          name: 'Phone Width',
          styles: {
            height: '600px',
            width: '100vh'
          },
          type: 'mobile'
        }
      }
    }
  }
}`,...(O=(w=a.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var v,g,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      disable: true
    }
  }
}`,...(y=(g=s.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const x=["Basic","Selected","Orientation","Custom","Disabled"];export{e as Basic,a as Custom,s as Disabled,r as Orientation,t as Selected,x as __namedExportsOrder,_ as default};
