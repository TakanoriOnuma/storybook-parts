try{
(()=>{var r=__REACT__,{Children:A,Component:I,Fragment:R,Profiler:L,PureComponent:M,StrictMode:B,Suspense:P,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:v,cloneElement:x,createContext:H,createElement:N,createFactory:D,createRef:F,forwardRef:W,isValidElement:K,lazy:Y,memo:G,useCallback:m,useContext:w,useDebugValue:U,useEffect:p,useImperativeHandle:V,useLayoutEffect:q,useMemo:z,useReducer:Z,useRef:$,useState:j,version:J}=__REACT__;var te=__STORYBOOK_API__,{ActiveTabs:re,Consumer:ae,ManagerContext:se,Provider:ne,addons:l,combineParameters:le,controlOrMetaKey:ue,controlOrMetaSymbol:ce,eventMatchesShortcut:ie,eventToShortcut:me,isMacLike:pe,isShortcutTaken:Se,keyToSymbol:_e,merge:de,mockChannel:Te,optionOrAltSymbol:be,shortcutMatchesShortcut:Oe,shortcutToHumanString:ye,types:S,useAddonState:Ce,useArgTypes:Ee,useArgs:he,useChannel:fe,useGlobalTypes:ge,useGlobals:_,useParameter:ke,useSharedState:Ae,useStoryPrepared:Ie,useStorybookApi:d,useStorybookState:Re}=__STORYBOOK_API__;var ve=__STORYBOOK_COMPONENTS__,{A:xe,ActionBar:He,AddonPanel:Ne,Badge:De,Bar:Fe,Blockquote:We,Button:Ke,ClipboardCode:Ye,Code:Ge,DL:we,Div:Ue,DocumentWrapper:Ve,ErrorFormatter:qe,FlexBar:ze,Form:Ze,H1:$e,H2:je,H3:Je,H4:Qe,H5:Xe,H6:eo,HR:oo,IconButton:T,IconButtonSkeleton:to,Icons:b,Img:ro,LI:ao,Link:so,ListItem:no,Loader:lo,OL:uo,P:co,Placeholder:io,Pre:mo,ResetWrapper:po,ScrollArea:So,Separator:_o,Spaced:To,Span:bo,StorybookIcon:Oo,StorybookLogo:yo,Symbols:Co,SyntaxHighlighter:Eo,TT:ho,TabBar:fo,TabButton:go,TabWrapper:ko,Table:Ao,Tabs:Io,TabsState:Ro,TooltipLinkList:Lo,TooltipMessage:Mo,TooltipNote:Bo,UL:Po,WithTooltip:vo,WithTooltipPure:xo,Zoom:Ho,codeCommon:No,components:Do,createCopyToClipboardFunction:Fo,getStoryHref:Wo,icons:Ko,interleaveSeparators:Yo,nameSpaceClassNames:Go,resetComponents:wo,withReset:Uo}=__STORYBOOK_COMPONENTS__;var u="storybook/measure-addon",O=`${u}/tool`,y=()=>{let[a,c]=_(),{measureEnabled:s}=a,i=d(),n=m(()=>c({measureEnabled:!s}),[c,s]);return p(()=>{i.setAddonShortcut(u,{label:"Toggle Measure [M]",defaultShortcut:["M"],actionName:"measure",showInMenu:!1,action:n})},[n,i]),r.createElement(T,{key:O,active:s,title:"Enable measure",onClick:n},r.createElement(b,{icon:"ruler"}))};l.register(u,()=>{l.add(O,{type:S.TOOL,title:"Measure",match:({viewMode:a})=>a==="story",render:()=>r.createElement(y,null)})});})();
}catch(e){ console.error("[Storybook] One of your manager-entries failed: " + import.meta.url, e); }
