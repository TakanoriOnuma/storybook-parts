const a={projectParameter:"projectParameter",storyObject:{a:"project",b:"project",c:"project"}},o=[async()=>({projectValue:2})],t=[(r,e)=>e.parameters.useProjectDecorator?r({args:{...e.args,text:`project ${e.args.text}`}}):r()],c={foo:"fooValue"},s={foo:{defaultValue:"fooDefaultValue"},bar:{defaultValue:"barDefaultValue"}};export{t as decorators,s as globalTypes,c as globals,o as loaders,a as parameters};