import{r,R as x}from"./index-f1f2c4b1.js";import{n as H}from"./index-4b2a7d13.js";import{_ as p}from"./extends-98964cd2.js";import{r as ce}from"./index-c74c9f7f.js";import{$ as le,a as T}from"./index-5f16f6cc.js";const ae=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],N=ae.reduce((e,t)=>{const o=r.forwardRef((c,n)=>{const{asChild:l,...s}=c,a=l?le:t;return r.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.createElement(a,p({},s,{ref:n}))});return o.displayName=`Primitive.${t}`,{...e,[t]:o}},{}),V=globalThis!=null&&globalThis.document?r.useLayoutEffect:()=>{};function se(e,t){return r.useReducer((o,c)=>{const n=t[o][c];return n??o},e)}const L=e=>{const{present:t,children:o}=e,c=ie(t),n=typeof o=="function"?o({present:c.isPresent}):r.Children.only(o),l=T(c.ref,n.ref);return typeof o=="function"||c.isPresent?r.cloneElement(n,{ref:l}):null};L.displayName="Presence";function ie(e){const[t,o]=r.useState(),c=r.useRef({}),n=r.useRef(e),l=r.useRef("none"),s=e?"mounted":"unmounted",[a,i]=se(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.useEffect(()=>{const d=W(c.current);l.current=a==="mounted"?d:"none"},[a]),V(()=>{const d=c.current,u=n.current;if(u!==e){const f=l.current,m=W(d);e?i("MOUNT"):m==="none"||(d==null?void 0:d.display)==="none"?i("UNMOUNT"):i(u&&f!==m?"ANIMATION_OUT":"UNMOUNT"),n.current=e}},[e,i]),V(()=>{if(t){const d=b=>{const m=W(c.current).includes(b.animationName);b.target===t&&m&&ce.flushSync(()=>i("ANIMATION_END"))},u=b=>{b.target===t&&(l.current=W(c.current))};return t.addEventListener("animationstart",u),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",u),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:r.useCallback(d=>{d&&(c.current=getComputedStyle(d)),o(d)},[])}}function W(e){return(e==null?void 0:e.animationName)||"none"}function de(e,t=[]){let o=[];function c(l,s){const a=r.createContext(s),i=o.length;o=[...o,s];function d(b){const{scope:f,children:m,...h}=b,w=(f==null?void 0:f[e][i])||a,y=r.useMemo(()=>h,Object.values(h));return r.createElement(w.Provider,{value:y},m)}function u(b,f){const m=(f==null?void 0:f[e][i])||a,h=r.useContext(m);if(h)return h;if(s!==void 0)return s;throw new Error(`\`${b}\` must be used within \`${l}\``)}return d.displayName=l+"Provider",[d,u]}const n=()=>{const l=o.map(s=>r.createContext(s));return function(a){const i=(a==null?void 0:a[e])||l;return r.useMemo(()=>({[`__scope${e}`]:{...a,[e]:i}}),[a,i])}};return n.scopeName=e,[c,ue(n,...t)]}function ue(...e){const t=e[0];if(e.length===1)return t;const o=()=>{const c=e.map(n=>({useScope:n(),scopeName:n.scopeName}));return function(l){const s=c.reduce((a,{useScope:i,scopeName:d})=>{const b=i(l)[`__scope${d}`];return{...a,...b}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return o.scopeName=t.scopeName,o}function P(e){const t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...o)=>{var c;return(c=t.current)===null||c===void 0?void 0:c.call(t,...o)},[])}const fe=r.createContext(void 0);function be(e){const t=r.useContext(fe);return e||t||"ltr"}function me(e,[t,o]){return Math.min(o,Math.max(t,e))}function C(e,t,{checkForDefaultPrevented:o=!0}={}){return function(n){if(e==null||e(n),o===!1||!n.defaultPrevented)return t==null?void 0:t(n)}}function he(e,t){return r.useReducer((o,c)=>{const n=t[o][c];return n??o},e)}const J="ScrollArea",[K,Fe]=de(J),[pe,S]=K(J),ve=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,type:c="hover",dir:n,scrollHideDelay:l=600,...s}=e,[a,i]=r.useState(null),[d,u]=r.useState(null),[b,f]=r.useState(null),[m,h]=r.useState(null),[w,y]=r.useState(null),[E,D]=r.useState(0),[k,M]=r.useState(0),[z,_]=r.useState(!1),[O,I]=r.useState(!1),v=T(t,R=>i(R)),$=be(n);return r.createElement(pe,{scope:o,type:c,dir:$,scrollHideDelay:l,scrollArea:a,viewport:d,onViewportChange:u,content:b,onContentChange:f,scrollbarX:m,onScrollbarXChange:h,scrollbarXEnabled:z,onScrollbarXEnabledChange:_,scrollbarY:w,onScrollbarYChange:y,scrollbarYEnabled:O,onScrollbarYEnabledChange:I,onCornerWidthChange:D,onCornerHeightChange:M},r.createElement(N.div,p({dir:$},s,{ref:v,style:{position:"relative","--radix-scroll-area-corner-width":E+"px","--radix-scroll-area-corner-height":k+"px",...e.style}})))}),Se="ScrollAreaViewport",$e=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,children:c,...n}=e,l=S(Se,o),s=r.useRef(null),a=T(t,s,l.onViewportChange);return r.createElement(r.Fragment,null,r.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"}}),r.createElement(N.div,p({"data-radix-scroll-area-viewport":""},n,{ref:a,style:{overflowX:l.scrollbarXEnabled?"scroll":"hidden",overflowY:l.scrollbarYEnabled?"scroll":"hidden",...e.style}}),r.createElement("div",{ref:l.onContentChange,style:{minWidth:"100%",display:"table"}},c)))}),g="ScrollAreaScrollbar",ge=r.forwardRef((e,t)=>{const{forceMount:o,...c}=e,n=S(g,e.__scopeScrollArea),{onScrollbarXEnabledChange:l,onScrollbarYEnabledChange:s}=n,a=e.orientation==="horizontal";return r.useEffect(()=>(a?l(!0):s(!0),()=>{a?l(!1):s(!1)}),[a,l,s]),n.type==="hover"?r.createElement(we,p({},c,{ref:t,forceMount:o})):n.type==="scroll"?r.createElement(Ee,p({},c,{ref:t,forceMount:o})):n.type==="auto"?r.createElement(Q,p({},c,{ref:t,forceMount:o})):n.type==="always"?r.createElement(F,p({},c,{ref:t})):null}),we=r.forwardRef((e,t)=>{const{forceMount:o,...c}=e,n=S(g,e.__scopeScrollArea),[l,s]=r.useState(!1);return r.useEffect(()=>{const a=n.scrollArea;let i=0;if(a){const d=()=>{window.clearTimeout(i),s(!0)},u=()=>{i=window.setTimeout(()=>s(!1),n.scrollHideDelay)};return a.addEventListener("pointerenter",d),a.addEventListener("pointerleave",u),()=>{window.clearTimeout(i),a.removeEventListener("pointerenter",d),a.removeEventListener("pointerleave",u)}}},[n.scrollArea,n.scrollHideDelay]),r.createElement(L,{present:o||l},r.createElement(Q,p({"data-state":l?"visible":"hidden"},c,{ref:t})))}),Ee=r.forwardRef((e,t)=>{const{forceMount:o,...c}=e,n=S(g,e.__scopeScrollArea),l=e.orientation==="horizontal",s=Y(()=>i("SCROLL_END"),100),[a,i]=he("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return r.useEffect(()=>{if(a==="idle"){const d=window.setTimeout(()=>i("HIDE"),n.scrollHideDelay);return()=>window.clearTimeout(d)}},[a,n.scrollHideDelay,i]),r.useEffect(()=>{const d=n.viewport,u=l?"scrollLeft":"scrollTop";if(d){let b=d[u];const f=()=>{const m=d[u];b!==m&&(i("SCROLL"),s()),b=m};return d.addEventListener("scroll",f),()=>d.removeEventListener("scroll",f)}},[n.viewport,l,i,s]),r.createElement(L,{present:o||a!=="hidden"},r.createElement(F,p({"data-state":a==="hidden"?"hidden":"visible"},c,{ref:t,onPointerEnter:C(e.onPointerEnter,()=>i("POINTER_ENTER")),onPointerLeave:C(e.onPointerLeave,()=>i("POINTER_LEAVE"))})))}),Q=r.forwardRef((e,t)=>{const o=S(g,e.__scopeScrollArea),{forceMount:c,...n}=e,[l,s]=r.useState(!1),a=e.orientation==="horizontal",i=Y(()=>{if(o.viewport){const d=o.viewport.offsetWidth<o.viewport.scrollWidth,u=o.viewport.offsetHeight<o.viewport.scrollHeight;s(a?d:u)}},10);return A(o.viewport,i),A(o.content,i),r.createElement(L,{present:c||l},r.createElement(F,p({"data-state":l?"visible":"hidden"},n,{ref:t})))}),F=r.forwardRef((e,t)=>{const{orientation:o="vertical",...c}=e,n=S(g,e.__scopeScrollArea),l=r.useRef(null),s=r.useRef(0),[a,i]=r.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=oe(a.viewport,a.content),u={...c,sizes:a,onSizesChange:i,hasThumb:d>0&&d<1,onThumbChange:f=>l.current=f,onThumbPointerUp:()=>s.current=0,onThumbPointerDown:f=>s.current=f};function b(f,m){return _e(f,s.current,a,m)}return o==="horizontal"?r.createElement(xe,p({},u,{ref:t,onThumbPositionChange:()=>{if(n.viewport&&l.current){const f=n.viewport.scrollLeft,m=q(f,a,n.dir);l.current.style.transform=`translate3d(${m}px, 0, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollLeft=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollLeft=b(f,n.dir))}})):o==="vertical"?r.createElement(Pe,p({},u,{ref:t,onThumbPositionChange:()=>{if(n.viewport&&l.current){const f=n.viewport.scrollTop,m=q(f,a);l.current.style.transform=`translate3d(0, ${m}px, 0)`}},onWheelScroll:f=>{n.viewport&&(n.viewport.scrollTop=f)},onDragScroll:f=>{n.viewport&&(n.viewport.scrollTop=b(f))}})):null}),xe=r.forwardRef((e,t)=>{const{sizes:o,onSizesChange:c,...n}=e,l=S(g,e.__scopeScrollArea),[s,a]=r.useState(),i=r.useRef(null),d=T(t,i,l.onScrollbarXChange);return r.useEffect(()=>{i.current&&a(getComputedStyle(i.current))},[i]),r.createElement(ee,p({"data-orientation":"horizontal"},n,{ref:d,sizes:o,style:{bottom:0,left:l.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:l.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":X(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.x),onDragScroll:u=>e.onDragScroll(u.x),onWheelScroll:(u,b)=>{if(l.viewport){const f=l.viewport.scrollLeft+u.deltaX;e.onWheelScroll(f),ne(f,b)&&u.preventDefault()}},onResize:()=>{i.current&&l.viewport&&s&&c({content:l.viewport.scrollWidth,viewport:l.viewport.offsetWidth,scrollbar:{size:i.current.clientWidth,paddingStart:U(s.paddingLeft),paddingEnd:U(s.paddingRight)}})}}))}),Pe=r.forwardRef((e,t)=>{const{sizes:o,onSizesChange:c,...n}=e,l=S(g,e.__scopeScrollArea),[s,a]=r.useState(),i=r.useRef(null),d=T(t,i,l.onScrollbarYChange);return r.useEffect(()=>{i.current&&a(getComputedStyle(i.current))},[i]),r.createElement(ee,p({"data-orientation":"vertical"},n,{ref:d,sizes:o,style:{top:0,right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":X(o)+"px",...e.style},onThumbPointerDown:u=>e.onThumbPointerDown(u.y),onDragScroll:u=>e.onDragScroll(u.y),onWheelScroll:(u,b)=>{if(l.viewport){const f=l.viewport.scrollTop+u.deltaY;e.onWheelScroll(f),ne(f,b)&&u.preventDefault()}},onResize:()=>{i.current&&l.viewport&&s&&c({content:l.viewport.scrollHeight,viewport:l.viewport.offsetHeight,scrollbar:{size:i.current.clientHeight,paddingStart:U(s.paddingTop),paddingEnd:U(s.paddingBottom)}})}}))}),[Ce,Z]=K(g),ee=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,sizes:c,hasThumb:n,onThumbChange:l,onThumbPointerUp:s,onThumbPointerDown:a,onThumbPositionChange:i,onDragScroll:d,onWheelScroll:u,onResize:b,...f}=e,m=S(g,o),[h,w]=r.useState(null),y=T(t,v=>w(v)),E=r.useRef(null),D=r.useRef(""),k=m.viewport,M=c.content-c.viewport,z=P(u),_=P(i),O=Y(b,10);function I(v){if(E.current){const $=v.clientX-E.current.left,R=v.clientY-E.current.top;d({x:$,y:R})}}return r.useEffect(()=>{const v=$=>{const R=$.target;(h==null?void 0:h.contains(R))&&z($,M)};return document.addEventListener("wheel",v,{passive:!1}),()=>document.removeEventListener("wheel",v,{passive:!1})},[k,h,M,z]),r.useEffect(_,[c,_]),A(h,O),A(m.content,O),r.createElement(Ce,{scope:o,scrollbar:h,hasThumb:n,onThumbChange:P(l),onThumbPointerUp:P(s),onThumbPositionChange:_,onThumbPointerDown:P(a)},r.createElement(N.div,p({},f,{ref:y,style:{position:"absolute",...f.style},onPointerDown:C(e.onPointerDown,v=>{v.button===0&&(v.target.setPointerCapture(v.pointerId),E.current=h.getBoundingClientRect(),D.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",m.viewport&&(m.viewport.style.scrollBehavior="auto"),I(v))}),onPointerMove:C(e.onPointerMove,I),onPointerUp:C(e.onPointerUp,v=>{const $=v.target;$.hasPointerCapture(v.pointerId)&&$.releasePointerCapture(v.pointerId),document.body.style.webkitUserSelect=D.current,m.viewport&&(m.viewport.style.scrollBehavior=""),E.current=null})})))}),B="ScrollAreaThumb",Te=r.forwardRef((e,t)=>{const{forceMount:o,...c}=e,n=Z(B,e.__scopeScrollArea);return r.createElement(L,{present:o||n.hasThumb},r.createElement(Re,p({ref:t},c)))}),Re=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,style:c,...n}=e,l=S(B,o),s=Z(B,o),{onThumbPositionChange:a}=s,i=T(t,b=>s.onThumbChange(b)),d=r.useRef(),u=Y(()=>{d.current&&(d.current(),d.current=void 0)},100);return r.useEffect(()=>{const b=l.viewport;if(b){const f=()=>{if(u(),!d.current){const m=Ne(b,a);d.current=m,a()}};return a(),b.addEventListener("scroll",f),()=>b.removeEventListener("scroll",f)}},[l.viewport,u,a]),r.createElement(N.div,p({"data-state":s.hasThumb?"visible":"hidden"},n,{ref:i,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...c},onPointerDownCapture:C(e.onPointerDownCapture,b=>{const m=b.target.getBoundingClientRect(),h=b.clientX-m.left,w=b.clientY-m.top;s.onThumbPointerDown({x:h,y:w})}),onPointerUp:C(e.onPointerUp,s.onThumbPointerUp)}))}),te="ScrollAreaCorner",Ae=r.forwardRef((e,t)=>{const o=S(te,e.__scopeScrollArea),c=!!(o.scrollbarX&&o.scrollbarY);return o.type!=="scroll"&&c?r.createElement(ye,p({},e,{ref:t})):null}),ye=r.forwardRef((e,t)=>{const{__scopeScrollArea:o,...c}=e,n=S(te,o),[l,s]=r.useState(0),[a,i]=r.useState(0),d=!!(l&&a);return A(n.scrollbarX,()=>{var u;const b=((u=n.scrollbarX)===null||u===void 0?void 0:u.offsetHeight)||0;n.onCornerHeightChange(b),i(b)}),A(n.scrollbarY,()=>{var u;const b=((u=n.scrollbarY)===null||u===void 0?void 0:u.offsetWidth)||0;n.onCornerWidthChange(b),s(b)}),d?r.createElement(N.div,p({},c,{ref:t,style:{width:l,height:a,position:"absolute",right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:0,...e.style}})):null});function U(e){return e?parseInt(e,10):0}function oe(e,t){const o=e/t;return isNaN(o)?0:o}function X(e){const t=oe(e.viewport,e.content),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,c=(e.scrollbar.size-o)*t;return Math.max(c,18)}function _e(e,t,o,c="ltr"){const n=X(o),l=n/2,s=t||l,a=n-s,i=o.scrollbar.paddingStart+s,d=o.scrollbar.size-o.scrollbar.paddingEnd-a,u=o.content-o.viewport,b=c==="ltr"?[0,u]:[u*-1,0];return re([i,d],b)(e)}function q(e,t,o="ltr"){const c=X(t),n=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-n,s=t.content-t.viewport,a=l-c,i=o==="ltr"?[0,s]:[s*-1,0],d=me(e,i);return re([0,s],[0,a])(d)}function re(e,t){return o=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const c=(t[1]-t[0])/(e[1]-e[0]);return t[0]+c*(o-e[0])}}function ne(e,t){return e>0&&e<t}const Ne=(e,t=()=>{})=>{let o={left:e.scrollLeft,top:e.scrollTop},c=0;return function n(){const l={left:e.scrollLeft,top:e.scrollTop},s=o.left!==l.left,a=o.top!==l.top;(s||a)&&t(),o=l,c=window.requestAnimationFrame(n)}(),()=>window.cancelAnimationFrame(c)};function Y(e,t){const o=P(e),c=r.useRef(0);return r.useEffect(()=>()=>window.clearTimeout(c.current),[]),r.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(o,t)},[o,t])}function A(e,t){const o=P(t);V(()=>{let c=0;if(e){const n=new ResizeObserver(()=>{cancelAnimationFrame(c),c=window.requestAnimationFrame(o)});return n.observe(e),()=>{window.cancelAnimationFrame(c),n.unobserve(e)}}},[e,o])}const Le=ve,De=$e,Me=ge,ze=Te,Oe=Ae,Ie=H(Le)(({scrollbarsize:e,offset:t})=>({width:"100%",height:"100%",overflow:"hidden","--scrollbar-size":`${e+t}px`,"--radix-scroll-area-thumb-width":`${e}px`})),We=H(De)({width:"100%",height:"100%"}),j=H(Me)(({offset:e,horizontal:t,vertical:o})=>({display:"flex",userSelect:"none",touchAction:"none",background:"transparent",transition:"all 0.2s ease-out",borderRadius:"var(--scrollbar-size)",'&[data-orientation="vertical"]':{width:"var(--scrollbar-size)",paddingRight:e,marginTop:e,marginBottom:t==="true"&&o==="true"?0:e},'&[data-orientation="horizontal"]':{flexDirection:"column",height:"var(--scrollbar-size)",paddingBottom:e,marginLeft:e,marginRight:t==="true"&&o==="true"?0:e}})),G=H(ze)(({theme:e})=>({flex:1,background:e.textMutedColor,opacity:.5,borderRadius:"var(--scrollbar-size)",position:"relative",transition:"opacity 0.2s ease-out","&:hover":{opacity:.8},"::before":{content:'""',position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"100%",height:"100%"}})),Ue=({children:e,horizontal:t=!1,vertical:o=!1,offset:c=2,scrollbarSize:n=6,className:l})=>x.createElement(Ie,{scrollbarsize:n,offset:c,className:l},x.createElement(We,null,e),t&&x.createElement(j,{orientation:"horizontal",offset:c,horizontal:t.toString(),vertical:o.toString()},x.createElement(G,null)),o&&x.createElement(j,{orientation:"vertical",offset:c,horizontal:t.toString(),vertical:o.toString()},x.createElement(G,null)),t&&o&&x.createElement(Oe,null));Ue.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},horizontal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},vertical:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},scrollbarSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}}}};export{Ue as S};
//# sourceMappingURL=ScrollArea-08f3e8ff.js.map