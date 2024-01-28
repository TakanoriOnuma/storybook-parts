import{w as s,f as Q,u as p,a as X,b as Z}from"./index-7Zzp-dQq.js";import{e as b}from"./index-s6rI0yla.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-PPLHz8o0.js";import"./_baseIsEqual-PxA6pT60.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";const{global:$}=__STORYBOOK_MODULE_GLOBAL__,ia={component:$.Components.Form,argTypes:{onSuccess:{type:"function"}}},u={play:async a=>{const{args:e,canvasElement:t,step:c}=a,n=s(t);await c("Submit",async()=>Q.click(n.getByRole("button"))),await b(e.onSuccess).not.toHaveBeenCalled()}},r={play:async({canvasElement:a})=>{const e=s(a);await p.type(e.getByTestId("value"),"foobar")}},y={play:async({step:a})=>{await a("Enter value",r.play)}},m={play:async({canvasElement:a})=>{const e=s(a);await p.type(e.getByTestId("value"),"initial value"),await p.clear(e.getByTestId("value")),await p.type(e.getByTestId("value"),"final value")}},o={play:async({args:a,canvasElement:e,step:t})=>{const c=s(e);await t("Enter value",r.play),await t("Submit",async()=>{await Q.click(c.getByRole("button"))}),await b(a.onSuccess).toHaveBeenCalled()}},i={play:async({canvasElement:a,step:e})=>{const t=s(a);await e("Submit form",o.play),await X(()=>t.getByText("Completed!!"))}},v={play:async({canvasElement:a,step:e})=>{const t=s(a);await e("Submit form",o.play),await X(async()=>t.getByText("Completed!!"))}},w={play:async({canvasElement:a,step:e})=>{const t=s(a);await e("SyncWaitFor play fn",i.play),await Z(()=>t.queryByText("Completed!!"),{timeout:2e3})}},d={loaders:[async()=>new Promise(a=>setTimeout(a,2e3))],play:async({step:a})=>{await a("Submit form",o.play)}},g={play:async a=>{const{args:e,canvasElement:t,step:c}=a,n=p.setup(),B=s(t);await c("Select, type and paste on input using user-event v14 setup",async()=>{const l=await B.getByRole("textbox");await n.click(l),await n.type(l,"Pasting: "),await n.paste("foobar")}),await c("Tab and press enter on submit button",async()=>{await n.pointer([{keys:"[TouchA>]",target:await B.getByRole("textbox")},{keys:"[/TouchA]"}]),await n.tab(),await n.keyboard("{enter}");const l=await B.findByRole("button");await b(l).toHaveFocus(),await b(e.onSuccess).toHaveBeenCalled()})}};var E,S,T;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(T=(S=u.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var x,f,C;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('value'), 'foobar');
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var k,F,h;y.parameters={...y.parameters,docs:{...(k=y.parameters)==null?void 0:k.docs,source:{originalSource:`{
  play: async ({
    step
  }) => {
    await step('Enter value', Type.play);
  }
}`,...(h=(F=y.parameters)==null?void 0:F.docs)==null?void 0:h.source}}};var R,W,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByTestId('value'), 'initial value');
    await userEvent.clear(canvas.getByTestId('value'));
    await userEvent.type(canvas.getByTestId('value'), 'final value');
  }
}`,...(A=(W=m.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var _,H,I;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(I=(H=o.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var O,L,P;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Submit form', Callback.play);
    await waitFor(() => canvas.getByText('Completed!!'));
  }
}`,...(P=(L=i.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var U,q,V;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Submit form', Callback.play);
    await waitFor(async () => canvas.getByText('Completed!!'));
  }
}`,...(V=(q=v.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var D,G,K;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(K=(G=w.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var M,Y,j;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  loaders: [async () => new Promise(resolve => setTimeout(resolve, 2000))],
  play: async ({
    step
  }) => {
    await step('Submit form', Callback.play);
  }
}`,...(j=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:j.source}}};var z,J,N;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  play: async context => {
    const {
      args,
      canvasElement,
      step
    } = context;
    const user = userEvent.setup();
    const canvas = within(canvasElement);
    await step('Select, type and paste on input using user-event v14 setup', async () => {
      const input = await canvas.getByRole('textbox');
      await user.click(input);
      await user.type(input, 'Pasting: ');
      await user.paste('foobar');
    });
    await step('Tab and press enter on submit button', async () => {
      await user.pointer([{
        keys: '[TouchA>]',
        target: await canvas.getByRole('textbox')
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
}`,...(N=(J=g.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const pa=["Validation","Type","Step","TypeAndClear","Callback","SyncWaitFor","AsyncWaitFor","WaitForElementToBeRemoved","WithLoaders","UserEventSetup"];export{v as AsyncWaitFor,o as Callback,y as Step,i as SyncWaitFor,r as Type,m as TypeAndClear,g as UserEventSetup,u as Validation,w as WaitForElementToBeRemoved,d as WithLoaders,pa as __namedExportsOrder,ia as default};
