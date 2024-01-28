import{R as e,r as s}from"./index-f1f2c4b1.js";import{a as y}from"./chunk-AT66UTFE-23ee157f.js";import{o as j,h as f,e as S,j as h}from"./index-a443495b.js";import{j as V,B as O,d as A,k as X}from"./index-758f4e48.js";import{s as _}from"./index-b4514f1c.js";import{n as D}from"./index-4b2a7d13.js";import{u as H}from"./LayoutProvider-eb9b2e6f.js";import{d as P}from"./defaultShortcuts-d4ab005f.js";import"./v4-4a60fe23.js";import"./iframe-14332c4c.js";import"../sb-preview/runtime.js";import"./index-c74c9f7f.js";import"./index-5f16f6cc.js";import"./extends-98964cd2.js";import"./index-b75c9059.js";import"./_baseAssignValue-611095b5.js";import"./isObjectLike-e57f4fa0.js";import"./mapValues-3cd3a2b8.js";import"./_baseIteratee-c4babb20.js";import"./isSymbol-ef7afaa8.js";import"./_initCloneObject-ae952db3.js";import"./_getPrototype-a3b5123a.js";import"./isPlainObject-7a70f881.js";import"./index-9cc128d5.js";import"./index-356e4a49.js";import"./_basePickBy-c1531931.js";import"./chunk-TNTLX5UL-4d44e490.js";import"./index-8c127ed0.js";import"./constants-277f2eb4.js";class R extends s.Component{constructor(n){super(n),this.state={hasError:!1}}componentDidCatch(n,t){this.setState({hasError:!0}),console.error(n,t)}render(){const{hasError:n}=this.state,{children:t}=this.props;return n?e.createElement("h1",null,"Something went wrong."):t}}const d=e.memo(({panels:l,shortcuts:n,actions:t,selectedPanel:i=null,panelPosition:v="right",absolute:r=!0})=>{const{isDesktop:g,setMobilePanelOpen:E}=H();return e.createElement(j,{absolute:r,...i?{selected:i}:{},menuName:"Addons",actions:t,tools:e.createElement(q,null,g?e.createElement(e.Fragment,null,e.createElement(f,{key:"position",onClick:t.togglePosition,title:`Change addon orientation [${_(n.panelPosition)}]`},v==="bottom"?e.createElement(V,null):e.createElement(O,null)),e.createElement(f,{key:"visibility",onClick:t.toggleVisibility,title:`Hide addons [${_(n.togglePanel)}]`},e.createElement(A,null))):e.createElement(f,{onClick:()=>E(!1),title:"Close addon panel"},e.createElement(A,null))),id:"storybook-panel-root"},Object.entries(l).map(([a,o])=>e.createElement(R,{key:a,id:a,title:typeof o.title=="function"?e.createElement(o.title,null):o.title},o.render)))});d.displayName="AddonPanel";const q=D.div({display:"flex",alignItems:"center",gap:6});d.__docgenInfo={description:"",methods:[],displayName:"AddonPanel",props:{selectedPanel:{defaultValue:{value:"null",computed:!1},required:!1},panelPosition:{defaultValue:{value:"'right'",computed:!1},required:!1},absolute:{defaultValue:{value:"true",computed:!1},required:!1}}};const{Addon_TypesEnum:c}=__STORYBOOK_MODULE_TYPES__,J=y("onSelect"),T=y("toggleVisibility"),b=y("togglePosition"),F={test1:{title:"Test 1",type:c.PANEL,render:({active:l})=>l?e.createElement("div",{id:"test1"},"TEST 1"):null},test2:{title:"Test 2",type:c.PANEL,render:({active:l})=>l?e.createElement("div",{id:"test2"},"TEST 2"):null}},Pe={title:"Panel",component:d},u=()=>{const[l,n]=s.useState("test2");return e.createElement(d,{absolute:!1,panels:F,actions:{onSelect:n,toggleVisibility:T,togglePosition:b},selectedPanel:l,shortcuts:P})},m=()=>{const[l,n]=s.useState("function-string");return e.createElement(d,{absolute:!1,panels:{"function-string":{type:c.PANEL,title:()=>"Test 1",render:({active:t})=>t?e.createElement("div",{id:"test1"},"TEST as string"):null},"function-jsx":{type:c.PANEL,title:()=>e.createElement("div",null,e.createElement(S,{col:1},e.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},"Test 1"),e.createElement(h,{status:"critical"},"4"))),render:({active:t})=>t?e.createElement("div",{id:"test1"},"TEST with label"):null},"function-jsx-icon":{type:c.PANEL,title:()=>e.createElement("div",null,e.createElement(S,{col:1},e.createElement("div",{style:{display:"inline-block",verticalAlign:"middle"}},"Alert!"),e.createElement(X,null))),render:({active:t})=>t?e.createElement("div",{id:"test1"},"TEST with label"):null},"function-jsx-state":{type:c.PANEL,title:()=>{const[i,v]=s.useState(0),r=s.useRef(null),g=s.useCallback(a=>{a.stopPropagation(),!r.current&&(r.current=setInterval(()=>{v(o=>o===10?(clearInterval(r.current),r.current=null,o):o+1)},1e3))},[]),E=s.useCallback(a=>{a.stopPropagation(),r.current&&(clearInterval(r.current),r.current=null)},[]);return e.createElement("div",{onMouseEnter:g,onMouseLeave:E,onBlur:E,tabIndex:-1},e.createElement(S,{col:1},e.createElement("div",{style:{display:"inline-block"}},"Hover over me!"),i?e.createElement(h,{status:i>8?"critical":"warning"},i):null))},render:({active:t})=>t?e.createElement("div",{id:"test1"},"TEST with timer"):null}},actions:{onSelect:n,toggleVisibility:T,togglePosition:b},selectedPanel:l,shortcuts:P})},p=()=>e.createElement(d,{panels:{},actions:{onSelect:J,toggleVisibility:T,togglePosition:b},shortcuts:P});u.__docgenInfo={description:"",methods:[],displayName:"Default"};m.__docgenInfo={description:"",methods:[],displayName:"JSXTitles"};p.__docgenInfo={description:"",methods:[],displayName:"NoPanels"};var I,N,k;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  const [selectedPanel, setSelectedPanel] = useState('test2');
  return <AddonPanel absolute={false} panels={panels} actions={{
    onSelect: setSelectedPanel,
    toggleVisibility,
    togglePosition
  }} selectedPanel={selectedPanel} shortcuts={defaultShortcuts} />;
}`,...(k=(N=u.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var C,B,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const [selectedPanel, setSelectedPanel] = useState('function-string');
  return <AddonPanel absolute={false} panels={{
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
                <BellIcon />
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
        const startTimer = useCallback<EventHandler<MouseEvent<any>>>(event => {
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
        const stopTimer = useCallback<EventHandler<MouseEvent<any> | FocusEvent<any>>>(event => {
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
  }} selectedPanel={selectedPanel} shortcuts={defaultShortcuts} />;
}`,...(L=(B=m.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var x,M,w;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`() => <AddonPanel panels={{}} actions={{
  onSelect,
  toggleVisibility,
  togglePosition
}} shortcuts={defaultShortcuts} />`,...(w=(M=p.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};const Te=["Default","JSXTitles","NoPanels"];export{u as Default,m as JSXTitles,p as NoPanels,Te as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Panel.stories-ea4e5914.js.map
