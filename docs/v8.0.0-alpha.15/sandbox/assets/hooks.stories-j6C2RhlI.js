import{w as a,u as f}from"./index-vlIbkheJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";const{global:y}=__STORYBOOK_MODULE_GLOBAL__,{useEffect:C,useState:m}=__STORYBOOK_MODULE_PREVIEW_API__,_={component:y.Components.Button},n={decorators:[t=>{const[e,o]=m(0);return t({args:{label:`Clicked ${e} times`,onClick:()=>{o(e+1)}}})}],play:async({canvasElement:t})=>{const e=await a(t).findByText("Clicked 0 times");await f.click(e),await a(t).findByText("Clicked 1 times")}},s={decorators:[t=>{const[e,o]=m(0);return C(()=>{o(1)},[]),t({args:{label:e>0?"useEffect worked!":"useEffect hasn't worked yet!",onClick:()=>{}}})}]};var r,c,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  decorators: [(story: PartialStoryFn) => {
    const [count, setCount] = useState(0);
    return story({
      args: {
        label: \`Clicked \${count} times\`,
        onClick: () => {
          setCount(count + 1);
        }
      }
    });
  }],
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    const button = await within(canvasElement).findByText('Clicked 0 times');
    await userEvent.click(button);
    await within(canvasElement).findByText('Clicked 1 times');
  }
}`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,l,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [(story: PartialStoryFn) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      setCount(1);
    }, []);
    return story({
      args: {
        label: count > 0 ? \`useEffect worked!\` : \`useEffect hasn't worked yet!\`,
        onClick: () => {}
      }
    });
  }]
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const w=["UseState","UseEffect"];export{s as UseEffect,n as UseState,w as __namedExportsOrder,_ as default};
