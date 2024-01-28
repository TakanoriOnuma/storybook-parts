import{j as f}from"./jsx-runtime-31019b9d.js";import{r as v}from"./index-9f32f44c.js";import{d as h}from"./index-356e4a49.js";import{D as B}from"./DocsContext-57fe6f9a.js";import{b as M,u as A,c as E}from"./Source-901beaec.js";import{u as j}from"./useStory-2e815b3a.js";import{S as R,g as G}from"./Story-a57355fb.js";import{u as D}from"./useOf-b3266417.js";import{P as L,a as V}from"./Preview-7e73265d.js";const{deprecate:y}=__STORYBOOK_MODULE_CLIENT_LOGGER__,U=({withSource:t,mdxSource:u,children:l,layout:d,...a},c,b)=>{const p=v.Children.toArray(l).filter(e=>e.props&&(e.props.id||e.props.name||e.props.of)).map(e=>G(e.props,c)),o=j(p,c),m=o.some(e=>!e),s=A({...u?{code:decodeURI(u)}:{ids:p},...a.of&&{of:a.of}},c,b);if(t===E.NONE)return{isLoading:m,previewProps:a};let n=d;return v.Children.forEach(l,e=>{var i,r;n||(n=(r=(i=e==null?void 0:e.props)==null?void 0:i.parameters)==null?void 0:r.layout)}),o.forEach(e=>{var i,r;n||!e||(n=(e==null?void 0:e.parameters.layout)??((r=(i=e.parameters.docs)==null?void 0:i.canvas)==null?void 0:r.layout))}),{isLoading:m,previewProps:{...a,layout:n??"padded",withSource:s,isExpanded:(t||s.state)===E.OPEN}}},O=t=>{var w,g,P,x,C,k,_,N,I,q;const u=v.useContext(B),l=v.useContext(M),{children:d,of:a,source:c}=t;if("of"in t&&a===void 0)throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");const{isLoading:b,previewProps:p}=U(t,u,l);let o,m,s;try{({story:o}=D(a||"story",["story"]))}catch(S){d||(s=S)}try{m=A({...c,...a&&{of:a}},u,l)}catch(S){d||(s=S)}if(s)throw s;if(t.withSource&&y(h`Setting source state with \`withSource\` is deprecated, please use \`sourceState\` with 'hidden', 'shown' or 'none' instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),t.mdxSource&&y(h`Setting source code with \`mdxSource\` is deprecated, please use source={{code: '...'}} instead. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),(t.isColumn!==void 0||t.columns!==void 0)&&y(h`\`isColumn\` and \`columns\` props are deprecated as the Canvas block now only supports showing a single story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
    `),d)return y(h`Passing children to Canvas is deprecated, please use the \`of\` prop instead to reference a story. 
    
    Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#canvas-block
  `),b?f(L,{}):f(V,{...p,children:d});const n=t.layout??o.parameters.layout??((g=(w=o.parameters.docs)==null?void 0:w.canvas)==null?void 0:g.layout)??"padded",e=t.withToolbar??((x=(P=o.parameters.docs)==null?void 0:P.canvas)==null?void 0:x.withToolbar)??!1,i=t.additionalActions??((k=(C=o.parameters.docs)==null?void 0:C.canvas)==null?void 0:k.additionalActions),r=t.sourceState??((N=(_=o.parameters.docs)==null?void 0:_.canvas)==null?void 0:N.sourceState)??"hidden",T=t.className??((q=(I=o.parameters.docs)==null?void 0:I.canvas)==null?void 0:q.className);return f(V,{withSource:r==="none"?void 0:m,isExpanded:r==="shown",withToolbar:e,additionalActions:i,className:T,layout:n,children:f(R,{of:a||o.moduleExport,meta:t.meta,...t.story})})};try{O.displayName="Canvas",O.__docgenInfo={description:"",displayName:"Canvas",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},withToolbar:{defaultValue:null,description:"",name:"withToolbar",required:!1,type:{name:"boolean"}},additionalActions:{defaultValue:null,description:"",name:"additionalActions",required:!1,type:{name:"ActionItem[]"}},of:{defaultValue:null,description:`Pass the export defining a story to render that story

\`\`\`jsx
import { Meta, Canvas } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
<Canvas of={ButtonStories.Primary} />
\`\`\``,name:"of",required:!1,type:{name:"any"}},meta:{defaultValue:null,description:`Pass all exports of the CSF file if this MDX file is unattached

\`\`\`jsx
import { Canvas } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Canvas of={ButtonStories.Primary} meta={ButtonStories} />
\`\`\``,name:"meta",required:!1,type:{name:"ModuleExports"}},sourceState:{defaultValue:{value:"'hidden'"},description:`Specify the initial state of the source panel
hidden: the source panel is hidden by default
shown: the source panel is shown by default
none: the source panel is not available and the button to show it is hidden`,name:"sourceState",required:!1,type:{name:"enum",value:[{value:'"hidden"'},{value:'"none"'},{value:'"shown"'}]}},layout:{defaultValue:{value:"'padded'"},description:`how to layout the story within the canvas
padded: the story has padding within the canvas
fullscreen: the story is rendered edge to edge within the canvas
centered: the story is centered within the canvas`,name:"layout",required:!1,type:{name:"enum",value:[{value:'"padded"'},{value:'"fullscreen"'},{value:'"centered"'}]}},source:{defaultValue:null,description:"@see {SourceProps}",name:"source",required:!1,type:{name:'Omit<SourceProps, "dark">'}},story:{defaultValue:null,description:"@see {StoryProps}",name:"story",required:!1,type:{name:'Pick<StoryProps, "inline" | "height" | "__forceInitialArgs" | "autoplay" | "__primary">'}},isColumn:{defaultValue:null,description:"@deprecated multiple stories are not supported",name:"isColumn",required:!1,type:{name:"boolean"}},columns:{defaultValue:null,description:"@deprecated multiple stories are not supported",name:"columns",required:!1,type:{name:"number"}},withSource:{defaultValue:null,description:"@deprecated use `sourceState` instead",name:"withSource",required:!1,type:{name:"enum",value:[{value:'"open"'},{value:'"closed"'},{value:'"none"'}]}},mdxSource:{defaultValue:null,description:"@deprecated use `source.code` instead",name:"mdxSource",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"@deprecated reference stories with the `of` prop instead",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}export{O as C};
//# sourceMappingURL=Canvas-97014b2f.js.map
