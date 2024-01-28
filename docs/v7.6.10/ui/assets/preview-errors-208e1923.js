import{d as a}from"./index-356e4a49.js";let i;const u=new Uint8Array(16);function c(){if(!i&&(i=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(u)}const o=[];for(let t=0;t<256;++t)o.push((t+256).toString(16).slice(1));function m(t,e=0){return o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]}const p=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),d={randomUUID:p};function y(t,e,s){if(d.randomUUID&&!e&&!t)return d.randomUUID();t=t||{};const n=t.random||(t.rng||c)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,e){s=s||0;for(let r=0;r<16;++r)e[s+r]=n[r];return e}return m(n)}var l=class extends Error{constructor(){super(...arguments),this.data={},this.documentation=!1,this.fromStorybook=!0}get fullErrorCode(){const t=String(this.code).padStart(4,"0");return`SB_${this.category}_${t}`}get name(){const t=this.constructor.name;return`${this.fullErrorCode} (${t})`}get message(){let t;return this.documentation===!0?t=`https://storybook.js.org/error/${this.fullErrorCode}`:typeof this.documentation=="string"?t=this.documentation:Array.isArray(this.documentation)&&(t=`
${this.documentation.map(e=>`	- ${e}`).join(`
`)}`),`${this.template()}${t!=null?`

More info: ${t}
`:""}`}},g=class extends l{constructor(t){super(),this.data=t,this.category="PREVIEW_API",this.code=2,this.documentation="https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#using-implicit-actions-during-rendering-is-deprecated-for-example-in-the-play-function"}template(){return a`
      We detected that you use an implicit action arg during ${this.data.phase} of your story.  
      ${this.data.deprecated?`
This is deprecated and won't work in Storybook 8 anymore.
`:""}
      Please provide an explicit spy to your args like this:
        import { fn } from '@storybook/test';
        ... 
        args: {
         ${this.data.name}: fn()
        }
    `}};export{g as I,y as v};
//# sourceMappingURL=preview-errors-208e1923.js.map
