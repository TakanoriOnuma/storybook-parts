import{j as Te,a as Ct,F as Tt}from"./jsx-runtime-0f39435c.js";import{r as C}from"./index-6f814c40.js";import{r as Pt,R as Vt}from"./index-6de6b113.js";import{e as at}from"./index-5a529529.js";import{s as kt}from"./index-d475d2ea.js";import{_ as St}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as Q}from"./extends-98964cd2.js";import{r as At}from"./index-b6572a53.js";import{b as Se,t as j,l as $,c as H,r as W,e as Pe,v as it,s as ye,p as se,d as Rt,f as Lt,g as Ue,h as st,a as lt,m as qt}from"./enums-54c8c3f1.js";import{T as Dt}from"./Tooltip-13cb3c0b.js";function I(e){return e?(e.nodeName||"").toLowerCase():null}function B(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ee(e){var t=B(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=B(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ae(e){if(typeof ShadowRoot>"u")return!1;var t=B(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function jt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!M(a)||!I(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(f){var l=o[f];l===!1?a.removeAttribute(f):a.setAttribute(f,l===!0?"":l)}))})}function $t(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},f=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),l=f.reduce(function(s,i){return s[i]="",s},{});!M(o)||!I(o)||(Object.assign(o.style,l),Object.keys(a).forEach(function(s){o.removeAttribute(s)}))})}}const Bt={name:"applyStyles",enabled:!0,phase:"write",fn:jt,effect:$t,requires:["computeStyles"]};function F(e){return e.split("-")[0]}var Z=Math.max,be=Math.min,ne=Math.round;function Ve(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ut(){return!/^((?!chrome|android).)*safari/i.test(Ve())}function oe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&M(e)&&(o=e.offsetWidth>0&&ne(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&ne(n.height)/e.offsetHeight||1);var f=ee(e)?B(e):window,l=f.visualViewport,s=!ut()&&r,i=(n.left+(s&&l?l.offsetLeft:0))/o,u=(n.top+(s&&l?l.offsetTop:0))/a,c=n.width/o,d=n.height/a;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i,x:i,y:u}}function Re(e){var t=oe(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function ft(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ae(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function X(e){return B(e).getComputedStyle(e)}function Mt(e){return["table","td","th"].indexOf(I(e))>=0}function z(e){return((ee(e)?e.ownerDocument:e.document)||window.document).documentElement}function Oe(e){return I(e)==="html"?e:e.assignedSlot||e.parentNode||(Ae(e)?e.host:null)||z(e)}function Xe(e){return!M(e)||X(e).position==="fixed"?null:e.offsetParent}function Ht(e){var t=/firefox/i.test(Ve()),r=/Trident/i.test(Ve());if(r&&M(e)){var n=X(e);if(n.position==="fixed")return null}var o=Oe(e);for(Ae(o)&&(o=o.host);M(o)&&["html","body"].indexOf(I(o))<0;){var a=X(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function pe(e){for(var t=B(e),r=Xe(e);r&&Mt(r)&&X(r).position==="static";)r=Xe(r);return r&&(I(r)==="html"||I(r)==="body"&&X(r).position==="static")?t:r||Ht(e)||t}function Le(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function le(e,t,r){return Z(e,be(t,r))}function Wt(e,t,r){var n=le(e,t,r);return n>r?r:n}function pt(){return{top:0,right:0,bottom:0,left:0}}function ct(e){return Object.assign({},pt(),e)}function dt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Nt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ct(typeof t!="number"?t:dt(t,Se))};function Ft(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,f=r.modifiersData.popperOffsets,l=F(r.placement),s=Le(l),i=[$,W].indexOf(l)>=0,u=i?"height":"width";if(!(!a||!f)){var c=Nt(o.padding,r),d=Re(a),p=s==="y"?j:$,O=s==="y"?H:W,g=r.rects.reference[u]+r.rects.reference[s]-f[s]-r.rects.popper[u],v=f[s]-r.rects.reference[s],x=pe(a),k=x?s==="y"?x.clientHeight||0:x.clientWidth||0:0,A=g/2-v/2,m=c[p],w=k-d[u]-c[O],h=k/2-d[u]/2+A,T=le(m,h,w),P=s;r.modifiersData[n]=(t={},t[P]=T,t.centerOffset=T-h,t)}}function It(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||ft(t.elements.popper,o)&&(t.elements.arrow=o))}const _t={name:"arrow",enabled:!0,phase:"main",fn:Ft,effect:It,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ae(e){return e.split("-")[1]}var Ut={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Xt(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:ne(r*o)/o||0,y:ne(n*o)/o||0}}function Ye(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,f=e.offsets,l=e.position,s=e.gpuAcceleration,i=e.adaptive,u=e.roundOffsets,c=e.isFixed,d=f.x,p=d===void 0?0:d,O=f.y,g=O===void 0?0:O,v=typeof u=="function"?u({x:p,y:g}):{x:p,y:g};p=v.x,g=v.y;var x=f.hasOwnProperty("x"),k=f.hasOwnProperty("y"),A=$,m=j,w=window;if(i){var h=pe(r),T="clientHeight",P="clientWidth";if(h===B(r)&&(h=z(r),X(h).position!=="static"&&l==="absolute"&&(T="scrollHeight",P="scrollWidth")),h=h,o===j||(o===$||o===W)&&a===Pe){m=H;var y=c&&h===w&&w.visualViewport?w.visualViewport.height:h[T];g-=y-n.height,g*=s?1:-1}if(o===$||(o===j||o===H)&&a===Pe){A=W;var E=c&&h===w&&w.visualViewport?w.visualViewport.width:h[P];p-=E-n.width,p*=s?1:-1}}var S=Object.assign({position:l},i&&Ut),q=u===!0?Xt({x:p,y:g},B(r)):{x:p,y:g};if(p=q.x,g=q.y,s){var L;return Object.assign({},S,(L={},L[m]=k?"0":"",L[A]=x?"0":"",L.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",L))}return Object.assign({},S,(t={},t[m]=k?g+"px":"",t[A]=x?p+"px":"",t.transform="",t))}function Yt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,f=a===void 0?!0:a,l=r.roundOffsets,s=l===void 0?!0:l,i={placement:F(t.placement),variation:ae(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Ye(Object.assign({},i,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Ye(Object.assign({},i,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Yt,data:{}};var me={passive:!0};function Gt(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,f=n.resize,l=f===void 0?!0:f,s=B(t.elements.popper),i=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&i.forEach(function(u){u.addEventListener("scroll",r.update,me)}),l&&s.addEventListener("resize",r.update,me),function(){a&&i.forEach(function(u){u.removeEventListener("scroll",r.update,me)}),l&&s.removeEventListener("resize",r.update,me)}}const Jt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Gt,data:{}};var Kt={left:"right",right:"left",bottom:"top",top:"bottom"};function he(e){return e.replace(/left|right|bottom|top/g,function(t){return Kt[t]})}var Qt={start:"end",end:"start"};function ze(e){return e.replace(/start|end/g,function(t){return Qt[t]})}function qe(e){var t=B(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function De(e){return oe(z(e)).left+qe(e).scrollLeft}function Zt(e,t){var r=B(e),n=z(e),o=r.visualViewport,a=n.clientWidth,f=n.clientHeight,l=0,s=0;if(o){a=o.width,f=o.height;var i=ut();(i||!i&&t==="fixed")&&(l=o.offsetLeft,s=o.offsetTop)}return{width:a,height:f,x:l+De(e),y:s}}function er(e){var t,r=z(e),n=qe(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=Z(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=Z(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),l=-n.scrollLeft+De(e),s=-n.scrollTop;return X(o||r).direction==="rtl"&&(l+=Z(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:f,x:l,y:s}}function je(e){var t=X(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function vt(e){return["html","body","#document"].indexOf(I(e))>=0?e.ownerDocument.body:M(e)&&je(e)?e:vt(Oe(e))}function ue(e,t){var r;t===void 0&&(t=[]);var n=vt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=B(n),f=o?[a].concat(a.visualViewport||[],je(n)?n:[]):n,l=t.concat(f);return o?l:l.concat(ue(Oe(f)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function tr(e,t){var r=oe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ge(e,t,r){return t===it?ke(Zt(e,r)):ee(t)?tr(t,r):ke(er(z(e)))}function rr(e){var t=ue(Oe(e)),r=["absolute","fixed"].indexOf(X(e).position)>=0,n=r&&M(e)?pe(e):e;return ee(n)?t.filter(function(o){return ee(o)&&ft(o,n)&&I(o)!=="body"}):[]}function nr(e,t,r,n){var o=t==="clippingParents"?rr(e):[].concat(t),a=[].concat(o,[r]),f=a[0],l=a.reduce(function(s,i){var u=Ge(e,i,n);return s.top=Z(u.top,s.top),s.right=be(u.right,s.right),s.bottom=be(u.bottom,s.bottom),s.left=Z(u.left,s.left),s},Ge(e,f,n));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function mt(e){var t=e.reference,r=e.element,n=e.placement,o=n?F(n):null,a=n?ae(n):null,f=t.x+t.width/2-r.width/2,l=t.y+t.height/2-r.height/2,s;switch(o){case j:s={x:f,y:t.y-r.height};break;case H:s={x:f,y:t.y+t.height};break;case W:s={x:t.x+t.width,y:l};break;case $:s={x:t.x-r.width,y:l};break;default:s={x:t.x,y:t.y}}var i=o?Le(o):null;if(i!=null){var u=i==="y"?"height":"width";switch(a){case ye:s[i]=s[i]-(t[u]/2-r[u]/2);break;case Pe:s[i]=s[i]+(t[u]/2-r[u]/2);break}}return s}function fe(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,f=a===void 0?e.strategy:a,l=r.boundary,s=l===void 0?Rt:l,i=r.rootBoundary,u=i===void 0?it:i,c=r.elementContext,d=c===void 0?se:c,p=r.altBoundary,O=p===void 0?!1:p,g=r.padding,v=g===void 0?0:g,x=ct(typeof v!="number"?v:dt(v,Se)),k=d===se?Lt:se,A=e.rects.popper,m=e.elements[O?k:d],w=nr(ee(m)?m:m.contextElement||z(e.elements.popper),s,u,f),h=oe(e.elements.reference),T=mt({reference:h,element:A,strategy:"absolute",placement:o}),P=ke(Object.assign({},A,T)),y=d===se?P:h,E={top:w.top-y.top+x.top,bottom:y.bottom-w.bottom+x.bottom,left:w.left-y.left+x.left,right:y.right-w.right+x.right},S=e.modifiersData.offset;if(d===se&&S){var q=S[o];Object.keys(E).forEach(function(L){var D=[W,H].indexOf(L)>=0?1:-1,V=[j,H].indexOf(L)>=0?"y":"x";E[L]+=q[V]*D})}return E}function or(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,f=r.padding,l=r.flipVariations,s=r.allowedAutoPlacements,i=s===void 0?st:s,u=ae(n),c=u?l?Ue:Ue.filter(function(O){return ae(O)===u}):Se,d=c.filter(function(O){return i.indexOf(O)>=0});d.length===0&&(d=c);var p=d.reduce(function(O,g){return O[g]=fe(e,{placement:g,boundary:o,rootBoundary:a,padding:f})[F(g)],O},{});return Object.keys(p).sort(function(O,g){return p[O]-p[g]})}function ar(e){if(F(e)===lt)return[];var t=he(e);return[ze(e),t,ze(t)]}function ir(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,l=f===void 0?!0:f,s=r.fallbackPlacements,i=r.padding,u=r.boundary,c=r.rootBoundary,d=r.altBoundary,p=r.flipVariations,O=p===void 0?!0:p,g=r.allowedAutoPlacements,v=t.options.placement,x=F(v),k=x===v,A=s||(k||!O?[he(v)]:ar(v)),m=[v].concat(A).reduce(function(re,Y){return re.concat(F(Y)===lt?or(t,{placement:Y,boundary:u,rootBoundary:c,padding:i,flipVariations:O,allowedAutoPlacements:g}):Y)},[]),w=t.rects.reference,h=t.rects.popper,T=new Map,P=!0,y=m[0],E=0;E<m.length;E++){var S=m[E],q=F(S),L=ae(S)===ye,D=[j,H].indexOf(q)>=0,V=D?"width":"height",b=fe(t,{placement:S,boundary:u,rootBoundary:c,altBoundary:d,padding:i}),R=D?L?W:$:L?H:j;w[V]>h[V]&&(R=he(R));var _=he(R),N=[];if(a&&N.push(b[q]<=0),l&&N.push(b[R]<=0,b[_]<=0),N.every(function(re){return re})){y=S,P=!1;break}T.set(S,N)}if(P)for(var G=O?3:1,te=function(Y){var ie=m.find(function(de){var J=T.get(de);if(J)return J.slice(0,Y).every(function(xe){return xe})});if(ie)return y=ie,"break"},U=G;U>0;U--){var ce=te(U);if(ce==="break")break}t.placement!==y&&(t.modifiersData[n]._skip=!0,t.placement=y,t.reset=!0)}}const sr={name:"flip",enabled:!0,phase:"main",fn:ir,requiresIfExists:["offset"],data:{_skip:!1}};function Je(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ke(e){return[j,W,H,$].some(function(t){return e[t]>=0})}function lr(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,f=fe(t,{elementContext:"reference"}),l=fe(t,{altBoundary:!0}),s=Je(f,n),i=Je(l,o,a),u=Ke(s),c=Ke(i);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:i,isReferenceHidden:u,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":c})}const ur={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:lr};function fr(e,t,r){var n=F(e),o=[$,j].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=a[0],l=a[1];return f=f||0,l=(l||0)*o,[$,W].indexOf(n)>=0?{x:l,y:f}:{x:f,y:l}}function pr(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,f=st.reduce(function(u,c){return u[c]=fr(c,t.rects,a),u},{}),l=f[t.placement],s=l.x,i=l.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=i),t.modifiersData[n]=f}const cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:pr};function dr(e){var t=e.state,r=e.name;t.modifiersData[r]=mt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const vr={name:"popperOffsets",enabled:!0,phase:"read",fn:dr,data:{}};function mr(e){return e==="x"?"y":"x"}function hr(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,f=r.altAxis,l=f===void 0?!1:f,s=r.boundary,i=r.rootBoundary,u=r.altBoundary,c=r.padding,d=r.tether,p=d===void 0?!0:d,O=r.tetherOffset,g=O===void 0?0:O,v=fe(t,{boundary:s,rootBoundary:i,padding:c,altBoundary:u}),x=F(t.placement),k=ae(t.placement),A=!k,m=Le(x),w=mr(m),h=t.modifiersData.popperOffsets,T=t.rects.reference,P=t.rects.popper,y=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,E=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(h){if(a){var L,D=m==="y"?j:$,V=m==="y"?H:W,b=m==="y"?"height":"width",R=h[m],_=R+v[D],N=R-v[V],G=p?-P[b]/2:0,te=k===ye?T[b]:P[b],U=k===ye?-P[b]:-T[b],ce=t.elements.arrow,re=p&&ce?Re(ce):{width:0,height:0},Y=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:pt(),ie=Y[D],de=Y[V],J=le(0,T[b],re[b]),xe=A?T[b]/2-G-J-ie-E.mainAxis:te-J-ie-E.mainAxis,yt=A?-T[b]/2+G+J+de+E.mainAxis:U+J+de+E.mainAxis,Ee=t.elements.arrow&&pe(t.elements.arrow),bt=Ee?m==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,$e=(L=S==null?void 0:S[m])!=null?L:0,wt=R+xe-$e-bt,Ot=R+yt-$e,Be=le(p?be(_,wt):_,R,p?Z(N,Ot):N);h[m]=Be,q[m]=Be-R}if(l){var Me,xt=m==="x"?j:$,Et=m==="x"?H:W,K=h[w],ve=w==="y"?"height":"width",He=K+v[xt],We=K-v[Et],Ce=[j,$].indexOf(x)!==-1,Ne=(Me=S==null?void 0:S[w])!=null?Me:0,Fe=Ce?He:K-T[ve]-P[ve]-Ne+E.altAxis,Ie=Ce?K+T[ve]+P[ve]-Ne-E.altAxis:We,_e=p&&Ce?Wt(Fe,K,Ie):le(p?Fe:He,K,p?Ie:We);h[w]=_e,q[w]=_e-K}t.modifiersData[n]=q}}const gr={name:"preventOverflow",enabled:!0,phase:"main",fn:hr,requiresIfExists:["offset"]};function yr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function br(e){return e===B(e)||!M(e)?qe(e):yr(e)}function wr(e){var t=e.getBoundingClientRect(),r=ne(t.width)/e.offsetWidth||1,n=ne(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Or(e,t,r){r===void 0&&(r=!1);var n=M(t),o=M(t)&&wr(t),a=z(t),f=oe(e,o,r),l={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((I(t)!=="body"||je(a))&&(l=br(t)),M(t)?(s=oe(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=De(a))),{x:f.left+l.scrollLeft-s.x,y:f.top+l.scrollTop-s.y,width:f.width,height:f.height}}function xr(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var f=[].concat(a.requires||[],a.requiresIfExists||[]);f.forEach(function(l){if(!r.has(l)){var s=t.get(l);s&&o(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function Er(e){var t=xr(e);return qt.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Cr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Tr(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Qe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ze(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Pr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?Qe:o;return function(l,s,i){i===void 0&&(i=a);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qe,a),modifiersData:{},elements:{reference:l,popper:s},attributes:{},styles:{}},c=[],d=!1,p={state:u,setOptions:function(x){var k=typeof x=="function"?x(u.options):x;g(),u.options=Object.assign({},a,u.options,k),u.scrollParents={reference:ee(l)?ue(l):l.contextElement?ue(l.contextElement):[],popper:ue(s)};var A=Er(Tr([].concat(n,u.options.modifiers)));return u.orderedModifiers=A.filter(function(m){return m.enabled}),O(),p.update()},forceUpdate:function(){if(!d){var x=u.elements,k=x.reference,A=x.popper;if(Ze(k,A)){u.rects={reference:Or(k,pe(A),u.options.strategy==="fixed"),popper:Re(A)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var m=0;m<u.orderedModifiers.length;m++){if(u.reset===!0){u.reset=!1,m=-1;continue}var w=u.orderedModifiers[m],h=w.fn,T=w.options,P=T===void 0?{}:T,y=w.name;typeof h=="function"&&(u=h({state:u,options:P,name:y,instance:p})||u)}}}},update:Cr(function(){return new Promise(function(v){p.forceUpdate(),v(u)})}),destroy:function(){g(),d=!0}};if(!Ze(l,s))return p;p.setOptions(i).then(function(v){!d&&i.onFirstUpdate&&i.onFirstUpdate(v)});function O(){u.orderedModifiers.forEach(function(v){var x=v.name,k=v.options,A=k===void 0?{}:k,m=v.effect;if(typeof m=="function"){var w=m({state:u,name:x,instance:p,options:A}),h=function(){};c.push(w||h)}})}function g(){c.forEach(function(v){return v()}),c=[]}return p}}var Vr=[Jt,vr,zt,Bt,cr,sr,gr,_t,ur],kr=Pr({defaultModifiers:Vr}),et=function(t){return t.reduce(function(r,n){var o=n[0],a=n[1];return r[o]=a,r},{})},tt=typeof window<"u"&&window.document&&window.document.createElement?C.useLayoutEffect:C.useEffect,Sr=[],Ar=function(t,r,n){n===void 0&&(n={});var o=C.useRef(null),a={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Sr},f=C.useState({styles:{popper:{position:a.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),l=f[0],s=f[1],i=C.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var O=p.state,g=Object.keys(O.elements);Pt.flushSync(function(){s({styles:et(g.map(function(v){return[v,O.styles[v]||{}]})),attributes:et(g.map(function(v){return[v,O.attributes[v]]}))})})},requires:["computeStyles"]}},[]),u=C.useMemo(function(){var d={onFirstUpdate:a.onFirstUpdate,placement:a.placement,strategy:a.strategy,modifiers:[].concat(a.modifiers,[i,{name:"applyStyles",enabled:!1}])};return At(o.current,d)?o.current||d:(o.current=d,d)},[a.onFirstUpdate,a.placement,a.strategy,a.modifiers,i]),c=C.useRef();return tt(function(){c.current&&c.current.setOptions(u)},[u]),tt(function(){if(!(t==null||r==null)){var d=n.createPopper||kr,p=d(t,r,u);return c.current=p,function(){p.destroy(),c.current=null}}},[t,r,n.createPopper]),{state:c.current?c.current.state:null,styles:l.styles,attributes:l.attributes,update:c.current?c.current.update:null,forceUpdate:c.current?c.current.forceUpdate:null}};function ht(e){var t=C.useRef(e);return t.current=e,C.useCallback(function(){return t.current},[])}var Rr=function(){};function Lr(e){var t=e.initial,r=e.value,n=e.onChange,o=n===void 0?Rr:n;if(t===void 0&&r===void 0)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var a=C.useState(t),f=a[0],l=a[1],s=ht(f),i=C.useCallback(function(c){var d=s(),p=typeof c=="function"?c(d):c;typeof p.persist=="function"&&p.persist(),l(p),typeof o=="function"&&o(p)},[s,o]),u=r!==void 0;return[u?r:f,u?o:i]}function gt(e,t){return e===void 0&&(e=0),t===void 0&&(t=0),function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e,x:0,y:0,toJSON:function(){return null}}}}var qr=["styles","attributes"],rt={getBoundingClientRect:gt()},nt={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function Dr(e,t){var r,n,o;e===void 0&&(e={}),t===void 0&&(t={});var a=Object.keys(nt).reduce(function(V,b){var R;return Q({},V,(R={},R[b]=V[b]!==void 0?V[b]:nt[b],R))},e),f=C.useMemo(function(){return[{name:"offset",options:{offset:a.offset}}]},Array.isArray(a.offset)?a.offset:[]),l=Q({},t,{placement:t.placement||a.placement,modifiers:t.modifiers||f}),s=C.useState(null),i=s[0],u=s[1],c=C.useState(null),d=c[0],p=c[1],O=Lr({initial:a.defaultVisible,value:a.visible,onChange:a.onVisibleChange}),g=O[0],v=O[1],x=C.useRef();C.useEffect(function(){return function(){return clearTimeout(x.current)}},[]);var k=Ar(a.followCursor?rt:i,d,l),A=k.styles,m=k.attributes,w=St(k,qr),h=w.update,T=ht({visible:g,triggerRef:i,tooltipRef:d,finalConfig:a}),P=C.useCallback(function(V){return Array.isArray(a.trigger)?a.trigger.includes(V):a.trigger===V},Array.isArray(a.trigger)?a.trigger:[a.trigger]),y=C.useCallback(function(){clearTimeout(x.current),x.current=window.setTimeout(function(){return v(!1)},a.delayHide)},[a.delayHide,v]),E=C.useCallback(function(){clearTimeout(x.current),x.current=window.setTimeout(function(){return v(!0)},a.delayShow)},[a.delayShow,v]),S=C.useCallback(function(){T().visible?y():E()},[T,y,E]);C.useEffect(function(){if(T().finalConfig.closeOnOutsideClick){var V=function(R){var _,N=T(),G=N.tooltipRef,te=N.triggerRef,U=(R.composedPath==null||(_=R.composedPath())==null?void 0:_[0])||R.target;U instanceof Node&&G!=null&&te!=null&&!G.contains(U)&&!te.contains(U)&&y()};return document.addEventListener("mousedown",V),function(){return document.removeEventListener("mousedown",V)}}},[T,y]),C.useEffect(function(){if(!(i==null||!P("click")))return i.addEventListener("click",S),function(){return i.removeEventListener("click",S)}},[i,P,S]),C.useEffect(function(){if(!(i==null||!P("double-click")))return i.addEventListener("dblclick",S),function(){return i.removeEventListener("dblclick",S)}},[i,P,S]),C.useEffect(function(){if(!(i==null||!P("right-click"))){var V=function(R){R.preventDefault(),S()};return i.addEventListener("contextmenu",V),function(){return i.removeEventListener("contextmenu",V)}}},[i,P,S]),C.useEffect(function(){if(!(i==null||!P("focus")))return i.addEventListener("focus",E),i.addEventListener("blur",y),function(){i.removeEventListener("focus",E),i.removeEventListener("blur",y)}},[i,P,E,y]),C.useEffect(function(){if(!(i==null||!P("hover")))return i.addEventListener("mouseenter",E),i.addEventListener("mouseleave",y),function(){i.removeEventListener("mouseenter",E),i.removeEventListener("mouseleave",y)}},[i,P,E,y]),C.useEffect(function(){if(!(d==null||!P("hover")||!T().finalConfig.interactive))return d.addEventListener("mouseenter",E),d.addEventListener("mouseleave",y),function(){d.removeEventListener("mouseenter",E),d.removeEventListener("mouseleave",y)}},[d,P,E,y,T]);var q=w==null||(r=w.state)==null||(n=r.modifiersData)==null||(o=n.hide)==null?void 0:o.isReferenceHidden;C.useEffect(function(){a.closeOnTriggerHidden&&q&&y()},[a.closeOnTriggerHidden,y,q]),C.useEffect(function(){if(!a.followCursor||i==null)return;function V(b){var R=b.clientX,_=b.clientY;rt.getBoundingClientRect=gt(R,_),h==null||h()}return i.addEventListener("mousemove",V),function(){return i.removeEventListener("mousemove",V)}},[a.followCursor,i,h]),C.useEffect(function(){if(!(d==null||h==null||a.mutationObserverOptions==null)){var V=new MutationObserver(h);return V.observe(d,a.mutationObserverOptions),function(){return V.disconnect()}}},[a.mutationObserverOptions,d,h]);var L=function(b){return b===void 0&&(b={}),Q({},b,{style:Q({},b.style,A.popper)},m.popper,{"data-popper-interactive":a.interactive})},D=function(b){return b===void 0&&(b={}),Q({},b,m.arrow,{style:Q({},b.style,A.arrow),"data-popper-arrow":!0})};return Q({getArrowProps:D,getTooltipProps:L,setTooltipRef:p,setTriggerRef:u,tooltipRef:d,triggerRef:i,visible:g},w)}const{document:ge}=kt,jr=at.div`
  display: inline-block;
  cursor: ${e=>e.trigger==="hover"||e.trigger.includes("hover")?"default":"pointer"};
`,$r=at.g`
  cursor: ${e=>e.trigger==="hover"||e.trigger.includes("hover")?"default":"pointer"};
`,we=({svg:e,trigger:t,closeOnOutsideClick:r,placement:n,hasChrome:o,withArrows:a,offset:f,tooltip:l,children:s,closeOnTriggerHidden:i,mutationObserverOptions:u,closeOnClick:c,tooltipShown:d,onVisibilityChange:p,defaultVisible:O,delayHide:g,visible:v,interactive:x,delayShow:k,modifiers:A,strategy:m,followCursor:w,onVisibleChange:h,...T})=>{const P=e?$r:jr,{getArrowProps:y,getTooltipProps:E,setTooltipRef:S,setTriggerRef:q,visible:L,state:D}=Dr({trigger:t,placement:n,defaultVisible:O??d,delayHide:g,interactive:x,closeOnOutsideClick:r??c,closeOnTriggerHidden:i,onVisibleChange:b=>{p==null||p(b),h==null||h(b)},delayShow:k,followCursor:w,mutationObserverOptions:u,visible:v,offset:f},{modifiers:A,strategy:m}),V=Te(Dt,{placement:D==null?void 0:D.placement,ref:S,hasChrome:o,arrowProps:y(),withArrows:a,...E(),children:typeof l=="function"?l({onHide:()=>h(!1)}):l});return Ct(Tt,{children:[Te(P,{trigger:t,ref:q,...T,children:s}),L&&Vt.createPortal(V,ge.body)]})};we.defaultProps={svg:!1,trigger:"click",closeOnOutsideClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,defaultVisible:!1};const ot=({startOpen:e=!1,onVisibleChange:t,...r})=>{const[n,o]=C.useState(e),a=C.useCallback(f=>{t&&t(f)===!1||o(f)},[t]);return C.useEffect(()=>{const f=()=>a(!1);ge.addEventListener("keydown",f,!1);const l=Array.from(ge.getElementsByTagName("iframe")),s=[];return l.forEach(i=>{const u=()=>{try{i.contentWindow.document&&(i.contentWindow.document.addEventListener("click",f),s.push(()=>{try{i.contentWindow.document.removeEventListener("click",f)}catch{}}))}catch{}};u(),i.addEventListener("load",u),s.push(()=>{i.removeEventListener("load",u)})}),()=>{ge.removeEventListener("keydown",f),s.forEach(i=>{i()})}}),Te(we,{...r,visible:n,onVisibleChange:a})};try{we.displayName="WithTooltipPure",we.__docgenInfo={description:"",displayName:"WithTooltipPure",props:{svg:{defaultValue:{value:"false"},description:"",name:"svg",required:!1,type:{name:"boolean"}},withArrows:{defaultValue:null,description:"",name:"withArrows",required:!1,type:{name:"boolean"}},hasChrome:{defaultValue:{value:"true"},description:"",name:"hasChrome",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"ReactNode | ((p: WithHideFn) => ReactNode)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"() => void"}},tooltipShown:{defaultValue:null,description:"@deprecated use `defaultVisible` property instead. This property will be removed in SB 8.0",name:"tooltipShown",required:!1,type:{name:"boolean"}},closeOnClick:{defaultValue:null,description:"@deprecated use `closeOnOutsideClick` property instead. This property will be removed in SB 8.0",name:"closeOnClick",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"@deprecated use `onVisibleChange` property instead. This property will be removed in SB 8.0",name:"onVisibilityChange",required:!1,type:{name:"(visibility: boolean) => boolean | void"}},closeOnOutsideClick:{defaultValue:{value:"false"},description:"If `true`, a click outside the trigger element closes the tooltip",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"[0, 6]"},description:"Shorthand for popper.js offset modifier, see https://popper.js.org/docs/v2/modifiers/offset/",name:"offset",required:!1,type:{name:"[number, number]"}},visible:{defaultValue:null,description:"Used to create controlled tooltip",name:"visible",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"top"},description:"Alias for popper.js placement, see https://popper.js.org/docs/v2/constructors/#placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},closeOnTriggerHidden:{defaultValue:{value:"false"},description:"Whether to close the tooltip when its trigger is out of boundary",name:"closeOnTriggerHidden",required:!1,type:{name:"boolean"}},trigger:{defaultValue:{value:"click"},description:"Event or events that trigger the tooltip",name:"trigger",required:!1,type:{name:"TriggerType | TriggerType[]"}},delayHide:{defaultValue:{value:"0"},description:"Delay in hiding the tooltip (ms)",name:"delayHide",required:!1,type:{name:"number"}},delayShow:{defaultValue:{value:"0"},description:"Delay in showing the tooltip (ms)",name:"delayShow",required:!1,type:{name:"number"}},followCursor:{defaultValue:{value:"false"},description:"Whether to make the tooltip spawn at cursor position",name:"followCursor",required:!1,type:{name:"boolean"}},mutationObserverOptions:{defaultValue:{value:"{ attributes: true, childList: true, subtree: true }"},description:`Options to MutationObserver, used internally for updating
tooltip position based on its DOM changes`,name:"mutationObserverOptions",required:!1,type:{name:"MutationObserverInit"}},defaultVisible:{defaultValue:{value:"false"},description:"Whether tooltip is shown by default",name:"defaultVisible",required:!1,type:{name:"boolean"}},onVisibleChange:{defaultValue:null,description:"Called when the visibility of the tooltip changes",name:"onVisibleChange",required:!1,type:{name:"(state: boolean) => void"}},interactive:{defaultValue:{value:"false"},description:"If `true`, hovering the tooltip will keep it open. Normally tooltip closes when the mouse cursor moves out of\nthe trigger element. If it moves to the tooltip element, the tooltip stays open.",name:"interactive",required:!1,type:{name:"boolean"}},modifiers:{defaultValue:{value:`[
    {
      name: 'preventOverflow',
      options: {
        padding: 8,
      },
    },
    {
      name: 'offset',
      options: {
        offset: [8, 8],
      },
    },
    {
      name: 'arrow',
      options: {
        padding: 8,
      },
    },
  ]`},description:"",name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},strategy:{defaultValue:null,description:"",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'}]}},onFirstUpdate:{defaultValue:null,description:"",name:"onFirstUpdate",required:!1,type:{name:"(arg0: Partial<State>) => void"}},createPopper:{defaultValue:null,description:"",name:"createPopper",required:!1,type:{name:"<TModifier extends Partial<Modifier<any, any>>>(reference: Element | VirtualElement, popper: HTMLElement, options?: Partial<OptionsGeneric<TModifier>>) => Instance"}}}}}catch{}try{ot.displayName="WithToolTipState",ot.__docgenInfo={description:"",displayName:"WithToolTipState",props:{svg:{defaultValue:{value:"false"},description:"",name:"svg",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"[0, 6]"},description:"Shorthand for popper.js offset modifier, see https://popper.js.org/docs/v2/modifiers/offset/",name:"offset",required:!1,type:{name:"[number, number]"}},visible:{defaultValue:null,description:"Used to create controlled tooltip",name:"visible",required:!1,type:{name:"boolean"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"() => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"ReactNode | ((p: WithHideFn) => ReactNode)"}},placement:{defaultValue:{value:"top"},description:"Alias for popper.js placement, see https://popper.js.org/docs/v2/constructors/#placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},closeOnOutsideClick:{defaultValue:{value:"false"},description:"If `true`, a click outside the trigger element closes the tooltip",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},closeOnTriggerHidden:{defaultValue:{value:"false"},description:"Whether to close the tooltip when its trigger is out of boundary",name:"closeOnTriggerHidden",required:!1,type:{name:"boolean"}},trigger:{defaultValue:{value:"click"},description:"Event or events that trigger the tooltip",name:"trigger",required:!1,type:{name:"TriggerType | TriggerType[]"}},delayHide:{defaultValue:{value:"0"},description:"Delay in hiding the tooltip (ms)",name:"delayHide",required:!1,type:{name:"number"}},delayShow:{defaultValue:{value:"0"},description:"Delay in showing the tooltip (ms)",name:"delayShow",required:!1,type:{name:"number"}},followCursor:{defaultValue:{value:"false"},description:"Whether to make the tooltip spawn at cursor position",name:"followCursor",required:!1,type:{name:"boolean"}},mutationObserverOptions:{defaultValue:{value:"{ attributes: true, childList: true, subtree: true }"},description:`Options to MutationObserver, used internally for updating
tooltip position based on its DOM changes`,name:"mutationObserverOptions",required:!1,type:{name:"MutationObserverInit"}},defaultVisible:{defaultValue:{value:"false"},description:"Whether tooltip is shown by default",name:"defaultVisible",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:"If `true`, hovering the tooltip will keep it open. Normally tooltip closes when the mouse cursor moves out of\nthe trigger element. If it moves to the tooltip element, the tooltip stays open.",name:"interactive",required:!1,type:{name:"boolean"}},modifiers:{defaultValue:{value:`[
    {
      name: 'preventOverflow',
      options: {
        padding: 8,
      },
    },
    {
      name: 'offset',
      options: {
        offset: [8, 8],
      },
    },
    {
      name: 'arrow',
      options: {
        padding: 8,
      },
    },
  ]`},description:"",name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},strategy:{defaultValue:null,description:"",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'}]}},onFirstUpdate:{defaultValue:null,description:"",name:"onFirstUpdate",required:!1,type:{name:"(arg0: Partial<State>) => void"}},withArrows:{defaultValue:null,description:"",name:"withArrows",required:!1,type:{name:"boolean"}},hasChrome:{defaultValue:{value:"true"},description:"",name:"hasChrome",required:!1,type:{name:"boolean"}},tooltipShown:{defaultValue:null,description:"@deprecated use `defaultVisible` property instead. This property will be removed in SB 8.0",name:"tooltipShown",required:!1,type:{name:"boolean"}},closeOnClick:{defaultValue:null,description:"@deprecated use `closeOnOutsideClick` property instead. This property will be removed in SB 8.0",name:"closeOnClick",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"@deprecated use `onVisibleChange` property instead. This property will be removed in SB 8.0",name:"onVisibilityChange",required:!1,type:{name:"(visibility: boolean) => boolean | void"}},createPopper:{defaultValue:null,description:"",name:"createPopper",required:!1,type:{name:"<TModifier extends Partial<Modifier<any, any>>>(reference: Element | VirtualElement, popper: HTMLElement, options?: Partial<OptionsGeneric<TModifier>>) => Instance"}},startOpen:{defaultValue:{value:"false"},description:"",name:"startOpen",required:!1,type:{name:"boolean"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"(visible: boolean) => boolean | void"}}}}}catch{}export{ot as W};
//# sourceMappingURL=WithTooltip-2eca3854.js.map
