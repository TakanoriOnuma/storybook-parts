import{f as Z,w as n,a as Q,e as b,u as l,b as X,c as $}from"./index-cuPYNwTH.js";const{global:aa}=__STORYBOOK_MODULE_GLOBAL__,ta={component:aa.Components.Form,args:{onSuccess:Z()}},y={play:async a=>{const{args:e,canvasElement:t,step:o}=a,s=n(t);await o("Submit",async()=>Q.click(s.getByRole("button"))),await b(e.onSuccess).not.toHaveBeenCalled()}},r={play:async({canvasElement:a})=>{const e=n(a);await l.type(e.getByTestId("value"),"foobar")}},u={play:async({step:a})=>{await a("Enter value",r.play)}},m={play:async({canvasElement:a})=>{const e=n(a);await l.type(e.getByTestId("value"),"initial value"),await l.clear(e.getByTestId("value")),await l.type(e.getByTestId("value"),"final value")}},c={play:async({args:a,canvasElement:e,step:t})=>{const o=n(e);await t("Enter value",r.play),await t("Submit",async()=>{await Q.click(o.getByRole("button"))}),await b(a.onSuccess).toHaveBeenCalled()}},i={play:async({canvasElement:a,step:e})=>{const t=n(a);await e("Submit form",c.play),await X(()=>t.getByText("Completed!!"))}},v={play:async({canvasElement:a,step:e})=>{const t=n(a);await e("Submit form",c.play),await X(async()=>t.getByText("Completed!!"))}},d={play:async({canvasElement:a,step:e})=>{const t=n(a);await e("SyncWaitFor play fn",i.play),await $(()=>t.queryByText("Completed!!"),{timeout:2e3})}},w={loaders:[async()=>new Promise(a=>setTimeout(a,2e3))],play:async({step:a})=>{await a("Submit form",c.play)}},g={play:async a=>{const{args:e,canvasElement:t,step:o}=a,s=l.setup(),B=n(t);await o("Select and type on input using user-event v14 setup",async()=>{const p=B.getByRole("textbox");await s.click(p),await s.type(p,"Typing ...")}),await o("Tab and press enter on submit button",async()=>{await s.pointer([{keys:"[TouchA>]",target:B.getByRole("textbox")},{keys:"[/TouchA]"}]),await s.tab(),await s.keyboard("{enter}");const p=await B.findByRole("button");await b(p).toHaveFocus(),await b(e.onSuccess).toHaveBeenCalled()})}};var E,S,T;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  play: async context => {
    const {
      args,
      canvasElement,
      step
    } = context;
    const canvas = within(canvasElement);
    await step('Submit', async () => fireEvent.click(canvas.getByRole('button')));
    await expect(args.onSuccess).not.toHaveBeenCalled();
  }
}`,...(T=(S=y.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var x,f,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('value'), 'foobar');
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,F,h;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  play: async ({
    step
  }) => {
    await step('Enter value', Type.play);
  }
}`,...(h=(F=u.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var R,W,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('value'), 'initial value');
    await userEvent.clear(canvas.getByTestId('value'));
    await userEvent.type(canvas.getByTestId('value'), 'final value');
  }
}`,...(A=(W=m.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var _,H,I;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Enter value', Type.play);
    await step('Submit', async () => {
      await fireEvent.click(canvas.getByRole('button'));
    });
    await expect(args.onSuccess).toHaveBeenCalled();
  }
}`,...(I=(H=c.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var O,L,U;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Submit form', Callback.play);
    await waitFor(() => canvas.getByText('Completed!!'));
  }
}`,...(U=(L=i.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var q,P,V;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Submit form', Callback.play);
    await waitFor(async () => canvas.getByText('Completed!!'));
  }
}`,...(V=(P=v.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var D,G,K;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('SyncWaitFor play fn', SyncWaitFor.play);
    await waitForElementToBeRemoved(() => canvas.queryByText('Completed!!'), {
      timeout: 2000
    });
  }
}`,...(K=(G=d.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var M,Y,j;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  loaders: [async () => new Promise(resolve => setTimeout(resolve, 2000))],
  play: async ({
    step
  }) => {
    await step('Submit form', Callback.play);
  }
}`,...(j=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var z,J,N;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  play: async context => {
    const {
      args,
      canvasElement,
      step
    } = context;
    const user = userEvent.setup();
    const canvas = within(canvasElement);
    await step('Select and type on input using user-event v14 setup', async () => {
      const input = canvas.getByRole('textbox');
      await user.click(input);
      await user.type(input, 'Typing ...');
    });
    await step('Tab and press enter on submit button', async () => {
      await user.pointer([{
        keys: '[TouchA>]',
        target: canvas.getByRole('textbox')
      }, {
        keys: '[/TouchA]'
      }]);
      await user.tab();
      await user.keyboard('{enter}');
      const submitButton = await canvas.findByRole('button');
      await expect(submitButton).toHaveFocus();
      await expect(args.onSuccess).toHaveBeenCalled();
    });
  }
}`,...(N=(J=g.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const na=["Validation","Type","Step","TypeAndClear","Callback","SyncWaitFor","AsyncWaitFor","WaitForElementToBeRemoved","WithLoaders","UserEventSetup"];export{v as AsyncWaitFor,c as Callback,u as Step,i as SyncWaitFor,r as Type,m as TypeAndClear,g as UserEventSetup,y as Validation,d as WaitForElementToBeRemoved,w as WithLoaders,na as __namedExportsOrder,ta as default};
