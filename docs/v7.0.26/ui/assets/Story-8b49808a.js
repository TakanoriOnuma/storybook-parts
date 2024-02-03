import{j as p}from"./jsx-runtime-0f39435c.js";import{r as b}from"./index-6f814c40.js";import{d as i}from"./index-356e4a49.js";import{S as _,a as S}from"./Story-134a3f6e.js";import{D as A}from"./DocsContext-001c90b3.js";import{a as V}from"./useStory-cba48327.js";const{deprecate:l}=__STORYBOOK_MODULE_CLIENT_LOGGER__,u=(e,t)=>{const{id:n,of:a,meta:r,story:o}=e;if("of"in e&&a===void 0)throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");if(n)return l(i`Referencing stories by \`id\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),n;const{name:s}=e;return s?(l(i`Referencing stories by \`name\` is deprecated, please use \`of\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),t.storyIdByName(s)):(o&&l(i`The \`story\` prop is deprecated, please export your stories from CSF files and reference them with \`of={}\`.

      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#story-block'`),r&&t.referenceMeta(r,!1),t.resolveOf(a||o||"story",["story"]).story.id)},y=(e,t,n)=>{const{parameters:a={}}=t||{},{docs:r={}}=a,o=r.story||{};if(r.disable)return null;const{inlineStories:s,iframeHeight:d}=r;typeof s<"u"&&l(i`The \`docs.inlineStories\` parameter is deprecated, use \`docs.story.inline\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `);const m=e.inline??o.inline??s??!1;if(typeof d<"u"&&l(i`The \`docs.iframeHeight\` parameter is deprecated, use \`docs.story.iframeHeight\` instead. 
    
      Please refer to the migration guide: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#autodocs-changes'
    `),m){const g=e.height??o.height,h=e.autoplay??o.autoplay??!1;return{story:t,inline:!0,height:g,autoplay:h,forceInitialArgs:!!e.__forceInitialArgs,primary:!!e.__primary,renderStoryToElement:n.renderStoryToElement}}const c=e.height??o.height??o.iframeHeight??d??"100px";return{story:t,inline:!1,height:c,primary:!!e.__primary}},f=(e={__forceInitialArgs:!1,__primary:!1})=>{const t=b.useContext(A),n=u(e,t),a=V(n,t);if(!a)return p(_,{});const r=y(e,a,t);return r?p(S,{...r}):null};try{u.displayName="getStoryId",u.__docgenInfo={description:"",displayName:"getStoryId",props:{decorators:{defaultValue:null,description:`Wrapper components or Storybook decorators that wrap a story.

Decorators defined in Meta will be applied to every story variation.
@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)`,name:"decorators",required:!1,type:{name:"DecoratorFunction<Renderer, { [x: string]: any; }>[]"}},parameters:{defaultValue:null,description:`Custom metadata for a story.
@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)`,name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:`Dynamic data that are provided (and possibly updated by) Storybook and its addons.
@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)`,name:"args",required:!1,type:{name:"Partial<Args>"}},argTypes:{defaultValue:null,description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<Args>>"}},loaders:{defaultValue:null,description:`Asynchronous functions which provide data for a story.
@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)`,name:"loaders",required:!1,type:{name:"LoaderFunction<Renderer, Args>[]"}},render:{defaultValue:null,description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",name:"render",required:!1,type:{name:"ArgsStoryFn<Renderer, Args>"}},name:{defaultValue:null,description:"Override the display name in the UI (CSF v3)",name:"name",required:!1,type:{name:"string"}},storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<Renderer, Args>"}},tags:{defaultValue:null,description:"Named tags for a story, used to filter stories in different contexts.",name:"tags",required:!1,type:{name:"string[]"}},story:{defaultValue:null,description:`@deprecated
@deprecated Use of={storyExport} and define the story in the CSF file`,name:"story",required:!1,type:{name:'StoryAnnotations<Renderer, Args, Partial<Args>> | Omit<StoryAnnotations<Renderer, Args, Partial<Args>>, "story">'}},inline:{defaultValue:null,description:"Render the story inline or in an iframe",name:"inline",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"When rendering in an iframe (`inline={false}`), set the story height",name:"height",required:!1,type:{name:"string"}},autoplay:{defaultValue:null,description:"Whether to run the story's play function",name:"autoplay",required:!1,type:{name:"boolean"}},__forceInitialArgs:{defaultValue:null,description:"Internal prop to control if a story re-renders on args updates",name:"__forceInitialArgs",required:!1,type:{name:"boolean"}},__primary:{defaultValue:null,description:"Internal prop if this story is the primary story",name:"__primary",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"@deprecated Use of={storyExport} instead",name:"id",required:!1,type:{name:"string"}},of:{defaultValue:null,description:`Pass the export defining a story to render that story

\`\`\`jsx
import { Meta, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
<Story of={ButtonStories.Primary} />
\`\`\``,name:"of",required:!1,type:{name:"any"}},meta:{defaultValue:null,description:`Pass all exports of the CSF file if this MDX file is unattached

\`\`\`jsx
import { Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Story of={ButtonStories.Primary} meta={ButtonStories} />
\`\`\``,name:"meta",required:!1,type:{name:"ModuleExports"}}}}}catch{}try{y.displayName="getStoryProps",y.__docgenInfo={description:"",displayName:"getStoryProps",props:{inline:{defaultValue:null,description:"Render the story inline or in an iframe",name:"inline",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"When rendering in an iframe (`inline={false}`), set the story height",name:"height",required:!1,type:{name:"string"}},autoplay:{defaultValue:null,description:"Whether to run the story's play function",name:"autoplay",required:!1,type:{name:"boolean"}},__forceInitialArgs:{defaultValue:null,description:"Internal prop to control if a story re-renders on args updates",name:"__forceInitialArgs",required:!1,type:{name:"boolean"}},__primary:{defaultValue:null,description:"Internal prop if this story is the primary story",name:"__primary",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="Story",f.__docgenInfo={description:"",displayName:"Story",props:{decorators:{defaultValue:null,description:`Wrapper components or Storybook decorators that wrap a story.

Decorators defined in Meta will be applied to every story variation.
@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)`,name:"decorators",required:!1,type:{name:"DecoratorFunction<Renderer, { [x: string]: any; }>[]"}},parameters:{defaultValue:null,description:`Custom metadata for a story.
@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)`,name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:`Dynamic data that are provided (and possibly updated by) Storybook and its addons.
@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)`,name:"args",required:!1,type:{name:"Partial<Args>"}},argTypes:{defaultValue:null,description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<Args>>"}},loaders:{defaultValue:null,description:`Asynchronous functions which provide data for a story.
@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)`,name:"loaders",required:!1,type:{name:"LoaderFunction<Renderer, Args>[]"}},render:{defaultValue:null,description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",name:"render",required:!1,type:{name:"ArgsStoryFn<Renderer, Args>"}},name:{defaultValue:null,description:"Override the display name in the UI (CSF v3)",name:"name",required:!1,type:{name:"string"}},storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<Renderer, Args>"}},tags:{defaultValue:null,description:"Named tags for a story, used to filter stories in different contexts.",name:"tags",required:!1,type:{name:"string[]"}},story:{defaultValue:null,description:`@deprecated
@deprecated Use of={storyExport} and define the story in the CSF file`,name:"story",required:!1,type:{name:'StoryAnnotations<Renderer, Args, Partial<Args>> | Omit<StoryAnnotations<Renderer, Args, Partial<Args>>, "story">'}},inline:{defaultValue:null,description:"Render the story inline or in an iframe",name:"inline",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"When rendering in an iframe (`inline={false}`), set the story height",name:"height",required:!1,type:{name:"string"}},autoplay:{defaultValue:null,description:"Whether to run the story's play function",name:"autoplay",required:!1,type:{name:"boolean"}},__forceInitialArgs:{defaultValue:null,description:"Internal prop to control if a story re-renders on args updates",name:"__forceInitialArgs",required:!1,type:{name:"boolean"}},__primary:{defaultValue:null,description:"Internal prop if this story is the primary story",name:"__primary",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"@deprecated Use of={storyExport} instead",name:"id",required:!1,type:{name:"string"}},of:{defaultValue:null,description:`Pass the export defining a story to render that story

\`\`\`jsx
import { Meta, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />
<Story of={ButtonStories.Primary} />
\`\`\``,name:"of",required:!1,type:{name:"any"}},meta:{defaultValue:null,description:`Pass all exports of the CSF file if this MDX file is unattached

\`\`\`jsx
import { Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Story of={ButtonStories.Primary} meta={ButtonStories} />
\`\`\``,name:"meta",required:!1,type:{name:"ModuleExports"}}}}}catch{}export{f as S,u as g};
//# sourceMappingURL=Story-8b49808a.js.map
