import{j as e,a as v}from"./jsx-runtime-31019b9d.js";import{r as i}from"./index-9f32f44c.js";import{a as S}from"./chunk-C5H4AMN5-7fdb7c46.js";import{e as g,g as h,I as w}from"./index-0d90a496.js";import{P as c}from"./panel-5f9cc569.js";import{p as B,s as P}from"./app.mockdata-f972930d.js";import"./_commonjsHelpers-de833af9.js";import"./preview-errors-208e1923.js";import"./index-356e4a49.js";import"./iframe-9b8f7ddb.js";import"../sb-preview/runtime.js";import"./index-9e46a6e4.js";import"./index-9c2d1831.js";import"./bundle.esm-ef1ed2af.js";import"./index-b75c9059.js";import"./index-0d1d6e7e.js";import"./_getTag-a3fc040c.js";import"./isObjectLike-7c6e5cb8.js";import"./_baseAssignValue-dc207ad3.js";import"./mapValues-e4849353.js";import"./_baseIteratee-b502d39c.js";import"./_baseIsEqual-181029ac.js";import"./isSymbol-6ab5993c.js";import"./_initCloneObject-5b092e6d.js";import"./_getPrototype-7097101e.js";import"./isPlainObject-1556099e.js";import"./index-177da4c8.js";import"./isEqual-8e48f6f6.js";import"./_basePickBy-58fe527f.js";import"./chunk-LNB2LN6G-b56da3a7.js";import"./index-9ed7e0e5.js";import"./Sidebar-86458011.js";import"./Heading-06623533.js";import"./Menu-26934337.js";import"./polished.esm-b305131d.js";import"./throttle-45ffedfb.js";import"./index-9d475cdf.js";import"./preview-b92ff423.js";import"./index-eafb6329.js";import"./index-f64ebf9a.js";import"./iframe-0bb403ee.js";import"./preview.mockdata-60027cc9.js";const{Addon_TypesEnum:r}=__STORYBOOK_MODULE_TYPES__,C=S("onSelect"),T=S("toggleVisibility"),f=S("togglePosition"),Ae={title:"Panel",component:c},s=()=>{const[a,d]=i.useState("test2");return e(c,{absolute:!1,panels:B,actions:{onSelect:d,toggleVisibility:T,togglePosition:f},selectedPanel:a,shortcuts:P})},l=()=>{const[a,d]=i.useState("function-string");return e(c,{absolute:!1,panels:{"function-string":{type:r.PANEL,title:()=>"Test 1",render:({active:t})=>t?e("div",{id:"test1",children:"TEST as string"}):null},"function-jsx":{type:r.PANEL,title:()=>e("div",{children:v(g,{col:1,children:[e("div",{style:{display:"inline-block",verticalAlign:"middle"},children:"Test 1"}),e(h,{status:"critical",children:"4"})]})}),render:({active:t})=>t?e("div",{id:"test1",children:"TEST with label"}):null},"function-jsx-icon":{type:r.PANEL,title:()=>e("div",{children:v(g,{col:1,children:[e("div",{style:{display:"inline-block",verticalAlign:"middle"},children:"Alert!"}),e(w,{icon:"bell"})]})}),render:({active:t})=>t?e("div",{id:"test1",children:"TEST with label"}):null},"function-jsx-state":{type:r.PANEL,title:()=>{const[u,j]=i.useState(0),n=i.useRef(null),M=i.useCallback(p=>{p.stopPropagation(),!n.current&&(n.current=setInterval(()=>{j(m=>m===10?(clearInterval(n.current),n.current=null,m):m+1)},1e3))},[]),y=i.useCallback(p=>{p.stopPropagation(),n.current&&(clearInterval(n.current),n.current=null)},[]);return e("div",{onMouseEnter:M,onMouseLeave:y,onBlur:y,tabIndex:-1,children:v(g,{col:1,children:[e("div",{style:{display:"inline-block"},children:"Hover over me!"}),u?e(h,{status:u>8?"critical":"warning",children:u}):null]})})},render:({active:t})=>t?e("div",{id:"test1",children:"TEST with timer"}):null}},actions:{onSelect:d,toggleVisibility:T,togglePosition:f},selectedPanel:a,shortcuts:P})},o=()=>e(c,{panels:{},actions:{onSelect:C,toggleVisibility:T,togglePosition:f},shortcuts:P});var b,E,A;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const [selectedPanel, setSelectedPanel] = useState('test2');
  return <Panel absolute={false} panels={panels} actions={{
    onSelect: setSelectedPanel,
    toggleVisibility,
    togglePosition
  }} selectedPanel={selectedPanel} shortcuts={shortcuts} />;
}`,...(A=(E=s.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var _,x,I;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const [selectedPanel, setSelectedPanel] = useState('function-string');
  return <Panel absolute={false} panels={{
    'function-string': {
      type: Addon_TypesEnum.PANEL,
      title: () => 'Test 1',
      render: ({
        active
      }) => active ? <div id="test1">TEST as string</div> : null
    },
    'function-jsx': {
      type: Addon_TypesEnum.PANEL,
      title: () => <div>
              <Spaced col={1}>
                <div style={{
            display: 'inline-block',
            verticalAlign: 'middle'
          }}>Test 1</div>
                <Badge status="critical">4</Badge>
              </Spaced>
            </div>,
      render: ({
        active
      }) => active ? <div id="test1">TEST with label</div> : null
    },
    'function-jsx-icon': {
      type: Addon_TypesEnum.PANEL,
      title: () => <div>
              <Spaced col={1}>
                <div style={{
            display: 'inline-block',
            verticalAlign: 'middle'
          }}>Alert!</div>
                <Icons icon="bell" />
              </Spaced>
            </div>,
      render: ({
        active
      }) => active ? <div id="test1">TEST with label</div> : null
    },
    'function-jsx-state': {
      type: Addon_TypesEnum.PANEL,
      title: () => {
        const MAX = 10;
        const [count, setCount] = useState(0);
        const timer = useRef(null);
        const startTimer = useCallback(event => {
          event.stopPropagation();
          if (timer.current) {
            return;
          }
          timer.current = setInterval(() => {
            setCount(c => {
              if (c === MAX) {
                clearInterval(timer.current);
                timer.current = null;
                return c;
              }
              return c + 1;
            });
          }, 1000);
        }, []);
        const stopTimer = useCallback(event => {
          event.stopPropagation();
          if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
          }
        }, []);
        return <div onMouseEnter={startTimer} onMouseLeave={stopTimer} onBlur={stopTimer} tabIndex={-1}>
                <Spaced col={1}>
                  <div style={{
              display: 'inline-block'
            }}>Hover over me!</div>
                  {count ? <Badge status={count > 8 ? 'critical' : 'warning'}>{count}</Badge> : null}
                </Spaced>
              </div>;
      },
      render: ({
        active
      }) => {
        return active ? <div id="test1">TEST with timer</div> : null;
      }
    }
  }} actions={{
    onSelect: setSelectedPanel,
    toggleVisibility,
    togglePosition
  }} selectedPanel={selectedPanel} shortcuts={shortcuts} />;
}`,...(I=(x=l.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var L,k,N;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Panel panels={{}} actions={{
  onSelect,
  toggleVisibility,
  togglePosition
}} shortcuts={shortcuts} />`,...(N=(k=o.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const _e=["Default","JSXTitles","NoPanels"];export{s as Default,l as JSXTitles,o as NoPanels,_e as __namedExportsOrder,Ae as default};
//# sourceMappingURL=panel.stories-17fc3670.js.map
