import{w as m}from"./index-7Zzp-dQq.js";import{e as E}from"./index-s6rI0yla.js";import{g as x}from"./_commonjsHelpers-4gQjN7DL.js";import{_ as N}from"./_basePickBy-4UcAiG3n.js";import{h as D,d as B,e as $}from"./_baseAssignValue-4juvjRQC.js";import{g as C,h as I,j as Y,k}from"./_baseIsEqual-PxA6pT60.js";import"./index-PPLHz8o0.js";import"./index-oRJpL3FP.js";import"./uniq-Ixv-64YA.js";import"./index-AKtXjuxE.js";var F=N,G=D;function U(e,n){return F(e,n,function(t,r){return G(e,r)})}var j=U,g=C,L=I,q=Y,u=g?g.isConcatSpreadable:void 0;function H(e){return q(e)||L(e)||!!(u&&e&&e[u])}var J=H,K=k,M=J;function R(e,n,t,r,a){var o=-1,i=e.length;for(t||(t=M),a||(a=[]);++o<i;){var s=e[o];n>0&&t(s)?n>1?R(s,n-1,t,r,a):K(a,s):r||(a[a.length]=s)}return a}var V=R,z=V;function Q(e){var n=e==null?0:e.length;return n?z(e,1):[]}var W=Q;function X(e,n,t){switch(t.length){case 0:return e.call(n);case 1:return e.call(n,t[0]);case 2:return e.call(n,t[0],t[1]);case 3:return e.call(n,t[0],t[1],t[2])}return e.apply(n,t)}var Z=X,ee=Z,y=Math.max;function ne(e,n,t){return n=y(n===void 0?e.length-1:n,0),function(){for(var r=arguments,a=-1,o=y(r.length-n,0),i=Array(o);++a<o;)i[a]=r[n+a];a=-1;for(var s=Array(n+1);++a<n;)s[a]=r[a];return s[n]=t(i),ee(e,this,s)}}var te=ne;function ae(e){return function(){return e}}var re=ae,se=re,_=B,oe=$,ie=_?function(e,n){return _(e,"toString",{configurable:!0,enumerable:!1,value:se(n),writable:!0})}:oe,ce=ie,le=800,pe=16,me=Date.now;function ge(e){var n=0,t=0;return function(){var r=me(),a=pe-(r-t);if(t=r,a>0){if(++n>=le)return arguments[0]}else n=0;return e.apply(void 0,arguments)}}var ue=ge,ye=ce,_e=ue,de=_e(ye),ve=de,Te=W,Se=te,he=ve;function be(e){return he(Se(e,void 0,Te),e+"")}var fe=be,Ae=j,Oe=fe,we=Oe(function(e,n){return e==null?{}:Ae(e,n)}),Ee=we;const Re=x(Ee),{global:P}=__STORYBOOK_MODULE_GLOBAL__,{STORY_ARGS_UPDATED:d,UPDATE_STORY_ARGS:Pe,RESET_STORY_ARGS:xe}=__STORYBOOK_MODULE_CORE_EVENTS__,Ue={component:P.Components.Pre,args:{componentArg:"componentArg",storyArg:"componentStoryArg",object:{a:"component",b:"component"}},decorators:[(e,n)=>{const{argNames:t}=n.parameters,r={...n.args},a=t?Re(r,t):r;return e({args:{object:a}})}]},c={args:{storyArg:"storyArg",object:{a:"story"}},play:async({canvasElement:e})=>{await E(JSON.parse(m(e).getByTestId("pre").innerText)).toEqual({componentArg:"componentArg",storyArg:"storyArg",object:{a:"story"}})}},l={args:{a:"a",b:"b"},argTypes:{a:{target:"elsewhere"}},parameters:{argNames:["a","b"]},play:async({canvasElement:e})=>{await E(JSON.parse(m(e).getByTestId("pre").innerText)).toEqual({b:"b"})}},p={args:{test:"initial"},parameters:{argNames:["test"]},play:async({canvasElement:e,id:n})=>{const t=P.__STORYBOOK_ADDONS_CHANNEL__;await t.emit(xe,{storyId:n}),await new Promise(r=>t.once(d,r)),await m(e).findByText(/initial/),await t.emit(Pe,{storyId:n,updatedArgs:{test:"updated"}}),await new Promise(r=>t.once(d,r)),await m(e).findByText(/updated/)}};var v,T,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var h,b,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var A,O,w;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(O=p.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};const je=["Inheritance","Targets","Events"];export{p as Events,c as Inheritance,l as Targets,je as __namedExportsOrder,Ue as default};
