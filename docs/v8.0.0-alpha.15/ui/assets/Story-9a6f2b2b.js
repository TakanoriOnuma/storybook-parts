import{r as a,R as l}from"./index-f1f2c4b1.js";import{D as u}from"./DocsContext-d4de082c.js";import{a as m,S as d}from"./Story-c31830b5.js";function p(e,t){const o=h([e],t);return o&&o[0]}function h(e,t){const[o,n]=a.useState({});return a.useEffect(()=>{Promise.all(e.map(async r=>{const i=await t.loadStory(r);n(s=>s[r]===i?s:{...s,[r]:i})}))}),e.map(r=>{if(o[r])return o[r];try{return t.storyById(r)}catch{return null}})}const S=(e,t)=>{const{of:o,meta:n}=e;if("of"in e&&o===void 0)throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");return n&&t.referenceMeta(n,!1),t.resolveOf(o||"story",["story"]).story.id},g=(e,t,o)=>{const{parameters:n={}}=t||{},{docs:r={}}=n,i=r.story||{};if(r.disable)return null;if(e.inline??i.inline??!1){const y=e.height??i.height,c=e.autoplay??i.autoplay??!1;return{story:t,inline:!0,height:y,autoplay:c,forceInitialArgs:!!e.__forceInitialArgs,primary:!!e.__primary,renderStoryToElement:o.renderStoryToElement}}const f=e.height??i.height??i.iframeHeight??"100px";return{story:t,inline:!1,height:f,primary:!!e.__primary}},_=(e={__forceInitialArgs:!1,__primary:!1})=>{const t=a.useContext(u),o=S(e,t),n=p(o,t);if(!n)return l.createElement(m,null);const r=g(e,n,t);return r?l.createElement(d,{...r}):null};_.__docgenInfo={description:"",methods:[],displayName:"Story",props:{of:{required:!1,tsType:{name:"ModuleExport"},description:`Pass the export defining a story to render that story

\`\`\`jsx
import { Meta, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
<Story of={ButtonStories.Primary} />
\`\`\``},meta:{required:!1,tsType:{name:"ModuleExports"},description:`Pass all exports of the CSF file if this MDX file is unattached

\`\`\`jsx
import { Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Story of={ButtonStories.Primary} meta={ButtonStories} />
\`\`\``},inline:{required:!1,tsType:{name:"boolean"},description:"Render the story inline or in an iframe"},height:{required:!1,tsType:{name:"string"},description:"When rendering in an iframe (`inline={false}`), set the story height"},autoplay:{required:!1,tsType:{name:"boolean"},description:"Whether to run the story's play function"},__forceInitialArgs:{required:!1,tsType:{name:"boolean"},description:"Internal prop to control if a story re-renders on args updates"},__primary:{required:!1,tsType:{name:"boolean"},description:"Internal prop if this story is the primary story"}}};export{_ as S};
//# sourceMappingURL=Story-9a6f2b2b.js.map
