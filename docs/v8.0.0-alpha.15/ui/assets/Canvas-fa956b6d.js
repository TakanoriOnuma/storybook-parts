import{r as f,R as y}from"./index-f1f2c4b1.js";import{D as C}from"./DocsContext-d4de082c.js";import{b as P,u as w}from"./Source-47bbae77.js";import{S as _}from"./Story-9a6f2b2b.js";import{u as I}from"./useOf-fbc0458b.js";import{P as q}from"./Preview-3057092b.js";const M=e=>{var n,s,a,i,l,u,d,c,m,p;const h=f.useContext(C),S=f.useContext(P),{of:o,source:g}=e;if("of"in e&&o===void 0)throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");const{story:t}=I(o||"story",["story"]),b=w({...g,...o&&{of:o}},h,S),x=e.layout??t.parameters.layout??((s=(n=t.parameters.docs)==null?void 0:n.canvas)==null?void 0:s.layout)??"padded",v=e.withToolbar??((i=(a=t.parameters.docs)==null?void 0:a.canvas)==null?void 0:i.withToolbar)??!1,k=e.additionalActions??((u=(l=t.parameters.docs)==null?void 0:l.canvas)==null?void 0:u.additionalActions),r=e.sourceState??((c=(d=t.parameters.docs)==null?void 0:d.canvas)==null?void 0:c.sourceState)??"hidden",B=e.className??((p=(m=t.parameters.docs)==null?void 0:m.canvas)==null?void 0:p.className);return y.createElement(q,{withSource:r==="none"?void 0:b,isExpanded:r==="shown",withToolbar:v,additionalActions:k,className:B,layout:x},y.createElement(_,{of:o||t.moduleExport,meta:e.meta,...e.story}))};M.__docgenInfo={description:"",methods:[],displayName:"Canvas",props:{of:{required:!1,tsType:{name:"ModuleExport"},description:`Pass the export defining a story to render that story

\`\`\`jsx
import { Meta, Canvas } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
<Canvas of={ButtonStories.Primary} />
\`\`\``},meta:{required:!1,tsType:{name:"ModuleExports"},description:`Pass all exports of the CSF file if this MDX file is unattached

\`\`\`jsx
import { Canvas } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Canvas of={ButtonStories.Primary} meta={ButtonStories} />
\`\`\``},sourceState:{required:!1,tsType:{name:"union",raw:"'hidden' | 'shown' | 'none'",elements:[{name:"literal",value:"'hidden'"},{name:"literal",value:"'shown'"},{name:"literal",value:"'none'"}]},description:`Specify the initial state of the source panel
hidden: the source panel is hidden by default
shown: the source panel is shown by default
none: the source panel is not available and the button to show it is hidden
@default 'hidden'`},layout:{required:!1,tsType:{name:"union",raw:"'padded' | 'fullscreen' | 'centered'",elements:[{name:"literal",value:"'padded'"},{name:"literal",value:"'fullscreen'"},{name:"literal",value:"'centered'"}]},description:`how to layout the story within the canvas
padded: the story has padding within the canvas
fullscreen: the story is rendered edge to edge within the canvas
centered: the story is centered within the canvas
@default 'padded'`},source:{required:!1,tsType:{name:"Omit",elements:[{name:"intersection",raw:`SourceParameters & {
  /**
   * Pass the export defining a story to render its source
   *
   * \`\`\`jsx
   * import { Source } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Source of={ButtonStories.Primary} />
   * \`\`\`
   */
  of?: ModuleExport;

  /**
   * Internal prop to control if a story re-renders on args updates
   */
  __forceInitialArgs?: boolean;
}`,elements:[{name:"intersection",raw:`SourceCodeProps & {
  /**
   * Where to read the source code from, see \`SourceType\`
   */
  type?: SourceType;
  /**
   * Transform the detected source for display
   */
  transform?: (code: string, storyContext: StoryContextForLoaders) => string;
  /**
   * Internal: set by our CSF loader (\`enrichCsf\` in \`@storybook/csf-tools\`).
   */
  originalSource?: string;
}`,elements:[{name:"SourceCodeProps"},{name:"signature",type:"object",raw:`{
  /**
   * Where to read the source code from, see \`SourceType\`
   */
  type?: SourceType;
  /**
   * Transform the detected source for display
   */
  transform?: (code: string, storyContext: StoryContextForLoaders) => string;
  /**
   * Internal: set by our CSF loader (\`enrichCsf\` in \`@storybook/csf-tools\`).
   */
  originalSource?: string;
}`,signature:{properties:[{key:"type",value:{name:"SourceType",required:!1},description:"Where to read the source code from, see `SourceType`"},{key:"transform",value:{name:"signature",type:"function",raw:"(code: string, storyContext: StoryContextForLoaders) => string",signature:{arguments:[{type:{name:"string"},name:"code"},{type:{name:"StoryContextForLoaders"},name:"storyContext"}],return:{name:"string"}},required:!1},description:"Transform the detected source for display"},{key:"originalSource",value:{name:"string",required:!1},description:"Internal: set by our CSF loader (`enrichCsf` in `@storybook/csf-tools`)."}]}}]},{name:"signature",type:"object",raw:`{
  /**
   * Pass the export defining a story to render its source
   *
   * \`\`\`jsx
   * import { Source } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Source of={ButtonStories.Primary} />
   * \`\`\`
   */
  of?: ModuleExport;

  /**
   * Internal prop to control if a story re-renders on args updates
   */
  __forceInitialArgs?: boolean;
}`,signature:{properties:[{key:"of",value:{name:"ModuleExport",required:!1},description:`Pass the export defining a story to render its source

\`\`\`jsx
import { Source } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Source of={ButtonStories.Primary} />
\`\`\``},{key:"__forceInitialArgs",value:{name:"boolean",required:!1},description:"Internal prop to control if a story re-renders on args updates"}]}}]},{name:"literal",value:"'dark'"}],raw:"Omit<SourceProps, 'dark'>"},description:"@see {SourceProps}"},story:{required:!1,tsType:{name:"Pick",elements:[{name:"intersection",raw:"StoryRefProps & StoryParameters",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Pass the export defining a story to render that story
   *
   * \`\`\`jsx
   * import { Meta, Story } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Meta of={ButtonStories} />
   * <Story of={ButtonStories.Primary} />
   * \`\`\`
   */
  of?: ModuleExport;
  /**
   * Pass all exports of the CSF file if this MDX file is unattached
   *
   * \`\`\`jsx
   * import { Story } from '@storybook/blocks';
   * import * as ButtonStories from './Button.stories';
   *
   * <Story of={ButtonStories.Primary} meta={ButtonStories} />
   * \`\`\`
   */
  meta?: ModuleExports;
}`,signature:{properties:[{key:"of",value:{name:"ModuleExport",required:!1},description:`Pass the export defining a story to render that story

\`\`\`jsx
import { Meta, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
<Story of={ButtonStories.Primary} />
\`\`\``},{key:"meta",value:{name:"ModuleExports",required:!1},description:`Pass all exports of the CSF file if this MDX file is unattached

\`\`\`jsx
import { Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Story of={ButtonStories.Primary} meta={ButtonStories} />
\`\`\``}]}},{name:"signature",type:"object",raw:`{
  /**
   * Render the story inline or in an iframe
   */
  inline?: boolean;
  /**
   * When rendering in an iframe (\`inline={false}\`), set the story height
   */
  height?: string;
  /**
   * Whether to run the story's play function
   */
  autoplay?: boolean;
  /**
   * Internal prop to control if a story re-renders on args updates
   */
  __forceInitialArgs?: boolean;
  /**
   * Internal prop if this story is the primary story
   */
  __primary?: boolean;
}`,signature:{properties:[{key:"inline",value:{name:"boolean",required:!1},description:"Render the story inline or in an iframe"},{key:"height",value:{name:"string",required:!1},description:"When rendering in an iframe (`inline={false}`), set the story height"},{key:"autoplay",value:{name:"boolean",required:!1},description:"Whether to run the story's play function"},{key:"__forceInitialArgs",value:{name:"boolean",required:!1},description:"Internal prop to control if a story re-renders on args updates"},{key:"__primary",value:{name:"boolean",required:!1},description:"Internal prop if this story is the primary story"}]}}]},{name:"union",raw:"'inline' | 'height' | 'autoplay' | '__forceInitialArgs' | '__primary'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'height'"},{name:"literal",value:"'autoplay'"},{name:"literal",value:"'__forceInitialArgs'"},{name:"literal",value:"'__primary'"}]}],raw:"Pick<StoryProps, 'inline' | 'height' | 'autoplay' | '__forceInitialArgs' | '__primary'>"},description:"@see {StoryProps}"}}};export{M as C};
//# sourceMappingURL=Canvas-fa956b6d.js.map
