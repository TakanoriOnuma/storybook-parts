import{w as m}from"./index-vlIbkheJ.js";import{e as E}from"./index-cuPYNwTH.js";import{g as x}from"./_commonjsHelpers-4gQjN7DL.js";import{_ as N}from"./_basePickBy-gBSjytaL.js";import{h as D,j as B,k as $,l as C,m as I,n as Y,o as k}from"./_baseAssignValue-XAMtle1o.js";import"./index-PPLHz8o0.js";var F=N,G=D;function U(e,n){return F(e,n,function(a,r){return G(e,r)})}var j=U,g=B,L=$,q=C,u=g?g.isConcatSpreadable:void 0;function H(e){return q(e)||L(e)||!!(u&&e&&e[u])}var J=H,K=I,M=J;function R(e,n,a,r,t){var o=-1,i=e.length;for(a||(a=M),t||(t=[]);++o<i;){var s=e[o];n>0&&a(s)?n>1?R(s,n-1,a,r,t):K(t,s):r||(t[t.length]=s)}return t}var V=R,z=V;function Q(e){var n=e==null?0:e.length;return n?z(e,1):[]}var W=Q;function X(e,n,a){switch(a.length){case 0:return e.call(n);case 1:return e.call(n,a[0]);case 2:return e.call(n,a[0],a[1]);case 3:return e.call(n,a[0],a[1],a[2])}return e.apply(n,a)}var Z=X,ee=Z,y=Math.max;function ne(e,n,a){return n=y(n===void 0?e.length-1:n,0),function(){for(var r=arguments,t=-1,o=y(r.length-n,0),i=Array(o);++t<o;)i[t]=r[n+t];t=-1;for(var s=Array(n+1);++t<n;)s[t]=r[t];return s[n]=a(i),ee(e,this,s)}}var ae=ne;function te(e){return function(){return e}}var re=te,se=re,_=Y,oe=k,ie=_?function(e,n){return _(e,"toString",{configurable:!0,enumerable:!1,value:se(n),writable:!0})}:oe,ce=ie,le=800,pe=16,me=Date.now;function ge(e){var n=0,a=0;return function(){var r=me(),t=pe-(r-a);if(a=r,t>0){if(++n>=le)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}var ue=ge,ye=ce,_e=ue,de=_e(ye),ve=de,Te=W,Se=ae,be=ve;function he(e){return be(Se(e,void 0,Te),e+"")}var fe=he,Ae=j,Oe=fe,we=Oe(function(e,n){return e==null?{}:Ae(e,n)}),Ee=we;const Re=x(Ee),{global:P}=__STORYBOOK_MODULE_GLOBAL__,{STORY_ARGS_UPDATED:d,UPDATE_STORY_ARGS:Pe,RESET_STORY_ARGS:xe}=__STORYBOOK_MODULE_CORE_EVENTS__,Ye={component:P.Components.Pre,args:{componentArg:"componentArg",storyArg:"componentStoryArg",object:{a:"component",b:"component"}},decorators:[(e,n)=>{const{argNames:a}=n.parameters,r={...n.args},t=a?Re(r,a):r;return e({args:{object:t}})}]},c={args:{storyArg:"storyArg",object:{a:"story"}},play:async({canvasElement:e})=>{await E(JSON.parse(m(e).getByTestId("pre").innerText)).toEqual({componentArg:"componentArg",storyArg:"storyArg",object:{a:"story"}})}},l={args:{a:"a",b:"b"},argTypes:{a:{target:"elsewhere"}},parameters:{argNames:["a","b"]},play:async({canvasElement:e})=>{await E(JSON.parse(m(e).getByTestId("pre").innerText)).toEqual({b:"b"})}},p={args:{test:"initial"},parameters:{argNames:["test"]},play:async({canvasElement:e,id:n})=>{const a=P.__STORYBOOK_ADDONS_CHANNEL__;await a.emit(xe,{storyId:n}),await new Promise(r=>a.once(d,r)),await m(e).findByText(/initial/),await a.emit(Pe,{storyId:n,updatedArgs:{test:"updated"}}),await new Promise(r=>a.once(d,r)),await m(e).findByText(/updated/)}};var v,T,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    storyArg: 'storyArg',
    object: {
      a: 'story'
    }
  },
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    // NOTE: these stories don't test project-level args inheritance as it is too problematic
    // to have an arg floating around that will apply too *all* other stories in our sandboxes.
    await expect(JSON.parse(within(canvasElement).getByTestId('pre').innerText)).toEqual({
      componentArg: 'componentArg',
      storyArg: 'storyArg',
      object: {
        a: 'story'
      }
    });
  }
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var b,h,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    a: 'a',
    b: 'b'
  },
  argTypes: {
    a: {
      target: 'elsewhere'
    }
  },
  parameters: {
    argNames: ['a', 'b']
  },
  play: async ({
    canvasElement
  }: PlayFunctionContext<any>) => {
    // Check that \`a\` doesn't end up set
    await expect(JSON.parse(within(canvasElement).getByTestId('pre').innerText)).toEqual({
      b: 'b'
    });
  }
}`,...(f=(h=l.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var A,O,w;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    test: 'initial'
  },
  parameters: {
    argNames: ['test']
  },
  play: async ({
    canvasElement,
    id
  }: PlayFunctionContext<any>) => {
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__;
    await channel.emit(RESET_STORY_ARGS, {
      storyId: id
    });
    await new Promise(resolve => channel.once(STORY_ARGS_UPDATED, resolve));
    await within(canvasElement).findByText(/initial/);
    await channel.emit(UPDATE_STORY_ARGS, {
      storyId: id,
      updatedArgs: {
        test: 'updated'
      }
    });
    await new Promise(resolve => channel.once(STORY_ARGS_UPDATED, resolve));
    await within(canvasElement).findByText(/updated/);
  }
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const ke=["Inheritance","Targets","Events"];export{p as Events,c as Inheritance,l as Targets,ke as __namedExportsOrder,Ye as default};
