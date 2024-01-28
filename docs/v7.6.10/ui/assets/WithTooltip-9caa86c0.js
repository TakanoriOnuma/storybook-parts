import{j as Ce,a as Tt,F as Ct}from"./jsx-runtime-31019b9d.js";import{r as T}from"./index-9f32f44c.js";import{r as Vt,R as Pt}from"./index-9c2d1831.js";import{n as ot}from"./index-9e46a6e4.js";import{n as St}from"./index-eafb6329.js";import{b as ke,t as j,l as $,c as H,r as W,e as Ve,v as it,s as ye,p as se,d as kt,f as At,g as _e,h as st,a as lt,m as Rt}from"./enums-54c8c3f1.js";import{T as Lt}from"./Tooltip-f5f982a6.js";function I(e){return e?(e.nodeName||"").toLowerCase():null}function B(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ee(e){var t=B(e).Element;return e instanceof t||e instanceof Element}function M(e){var t=B(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ae(e){if(typeof ShadowRoot>"u")return!1;var t=B(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function qt(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},a=t.attributes[r]||{},o=t.elements[r];!M(o)||!I(o)||(Object.assign(o.style,n),Object.keys(a).forEach(function(f){var l=a[f];l===!1?o.removeAttribute(f):o.setAttribute(f,l===!0?"":l)}))})}function Dt(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var a=t.elements[n],o=t.attributes[n]||{},f=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),l=f.reduce(function(s,i){return s[i]="",s},{});!M(a)||!I(a)||(Object.assign(a.style,l),Object.keys(o).forEach(function(s){a.removeAttribute(s)}))})}}const jt={name:"applyStyles",enabled:!0,phase:"write",fn:qt,effect:Dt,requires:["computeStyles"]};function F(e){return e.split("-")[0]}var Z=Math.max,be=Math.min,ne=Math.round;function Pe(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function ut(){return!/^((?!chrome|android).)*safari/i.test(Pe())}function ae(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),a=1,o=1;t&&M(e)&&(a=e.offsetWidth>0&&ne(n.width)/e.offsetWidth||1,o=e.offsetHeight>0&&ne(n.height)/e.offsetHeight||1);var f=ee(e)?B(e):window,l=f.visualViewport,s=!ut()&&r,i=(n.left+(s&&l?l.offsetLeft:0))/a,u=(n.top+(s&&l?l.offsetTop:0))/o,c=n.width/a,d=n.height/o;return{width:c,height:d,top:u,right:i+c,bottom:u+d,left:i,x:i,y:u}}function Re(e){var t=ae(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function ft(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ae(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function X(e){return B(e).getComputedStyle(e)}function $t(e){return["table","td","th"].indexOf(I(e))>=0}function G(e){return((ee(e)?e.ownerDocument:e.document)||window.document).documentElement}function Oe(e){return I(e)==="html"?e:e.assignedSlot||e.parentNode||(Ae(e)?e.host:null)||G(e)}function Ye(e){return!M(e)||X(e).position==="fixed"?null:e.offsetParent}function Bt(e){var t=/firefox/i.test(Pe()),r=/Trident/i.test(Pe());if(r&&M(e)){var n=X(e);if(n.position==="fixed")return null}var a=Oe(e);for(Ae(a)&&(a=a.host);M(a)&&["html","body"].indexOf(I(a))<0;){var o=X(a);if(o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].indexOf(o.willChange)!==-1||t&&o.willChange==="filter"||t&&o.filter&&o.filter!=="none")return a;a=a.parentNode}return null}function pe(e){for(var t=B(e),r=Ye(e);r&&$t(r)&&X(r).position==="static";)r=Ye(r);return r&&(I(r)==="html"||I(r)==="body"&&X(r).position==="static")?t:r||Bt(e)||t}function Le(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function le(e,t,r){return Z(e,be(t,r))}function Mt(e,t,r){var n=le(e,t,r);return n>r?r:n}function pt(){return{top:0,right:0,bottom:0,left:0}}function ct(e){return Object.assign({},pt(),e)}function dt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var Ht=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,ct(typeof t!="number"?t:dt(t,ke))};function Wt(e){var t,r=e.state,n=e.name,a=e.options,o=r.elements.arrow,f=r.modifiersData.popperOffsets,l=F(r.placement),s=Le(l),i=[$,W].indexOf(l)>=0,u=i?"height":"width";if(!(!o||!f)){var c=Ht(a.padding,r),d=Re(o),p=s==="y"?j:$,O=s==="y"?H:W,g=r.rects.reference[u]+r.rects.reference[s]-f[s]-r.rects.popper[u],v=f[s]-r.rects.reference[s],x=pe(o),S=x?s==="y"?x.clientHeight||0:x.clientWidth||0:0,A=g/2-v/2,m=c[p],w=S-d[u]-c[O],h=S/2-d[u]/2+A,C=le(m,h,w),V=s;r.modifiersData[n]=(t={},t[V]=C,t.centerOffset=C-h,t)}}function Nt(e){var t=e.state,r=e.options,n=r.element,a=n===void 0?"[data-popper-arrow]":n;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||ft(t.elements.popper,a)&&(t.elements.arrow=a))}const Ft={name:"arrow",enabled:!0,phase:"main",fn:Wt,effect:Nt,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var It={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Ut(e,t){var r=e.x,n=e.y,a=t.devicePixelRatio||1;return{x:ne(r*a)/a||0,y:ne(n*a)/a||0}}function Xe(e){var t,r=e.popper,n=e.popperRect,a=e.placement,o=e.variation,f=e.offsets,l=e.position,s=e.gpuAcceleration,i=e.adaptive,u=e.roundOffsets,c=e.isFixed,d=f.x,p=d===void 0?0:d,O=f.y,g=O===void 0?0:O,v=typeof u=="function"?u({x:p,y:g}):{x:p,y:g};p=v.x,g=v.y;var x=f.hasOwnProperty("x"),S=f.hasOwnProperty("y"),A=$,m=j,w=window;if(i){var h=pe(r),C="clientHeight",V="clientWidth";if(h===B(r)&&(h=G(r),X(h).position!=="static"&&l==="absolute"&&(C="scrollHeight",V="scrollWidth")),h=h,a===j||(a===$||a===W)&&o===Ve){m=H;var y=c&&h===w&&w.visualViewport?w.visualViewport.height:h[C];g-=y-n.height,g*=s?1:-1}if(a===$||(a===j||a===H)&&o===Ve){A=W;var E=c&&h===w&&w.visualViewport?w.visualViewport.width:h[V];p-=E-n.width,p*=s?1:-1}}var k=Object.assign({position:l},i&&It),q=u===!0?Ut({x:p,y:g},B(r)):{x:p,y:g};if(p=q.x,g=q.y,s){var L;return Object.assign({},k,(L={},L[m]=S?"0":"",L[A]=x?"0":"",L.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",L))}return Object.assign({},k,(t={},t[m]=S?g+"px":"",t[A]=x?p+"px":"",t.transform="",t))}function _t(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=n===void 0?!0:n,o=r.adaptive,f=o===void 0?!0:o,l=r.roundOffsets,s=l===void 0?!0:l,i={placement:F(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Xe(Object.assign({},i,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Xe(Object.assign({},i,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Yt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:_t,data:{}};var me={passive:!0};function Xt(e){var t=e.state,r=e.instance,n=e.options,a=n.scroll,o=a===void 0?!0:a,f=n.resize,l=f===void 0?!0:f,s=B(t.elements.popper),i=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&i.forEach(function(u){u.addEventListener("scroll",r.update,me)}),l&&s.addEventListener("resize",r.update,me),function(){o&&i.forEach(function(u){u.removeEventListener("scroll",r.update,me)}),l&&s.removeEventListener("resize",r.update,me)}}const zt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Xt,data:{}};var Gt={left:"right",right:"left",bottom:"top",top:"bottom"};function he(e){return e.replace(/left|right|bottom|top/g,function(t){return Gt[t]})}var Jt={start:"end",end:"start"};function ze(e){return e.replace(/start|end/g,function(t){return Jt[t]})}function qe(e){var t=B(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function De(e){return ae(G(e)).left+qe(e).scrollLeft}function Kt(e,t){var r=B(e),n=G(e),a=r.visualViewport,o=n.clientWidth,f=n.clientHeight,l=0,s=0;if(a){o=a.width,f=a.height;var i=ut();(i||!i&&t==="fixed")&&(l=a.offsetLeft,s=a.offsetTop)}return{width:o,height:f,x:l+De(e),y:s}}function Qt(e){var t,r=G(e),n=qe(e),a=(t=e.ownerDocument)==null?void 0:t.body,o=Z(r.scrollWidth,r.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),f=Z(r.scrollHeight,r.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),l=-n.scrollLeft+De(e),s=-n.scrollTop;return X(a||r).direction==="rtl"&&(l+=Z(r.clientWidth,a?a.clientWidth:0)-o),{width:o,height:f,x:l,y:s}}function je(e){var t=X(e),r=t.overflow,n=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+a+n)}function vt(e){return["html","body","#document"].indexOf(I(e))>=0?e.ownerDocument.body:M(e)&&je(e)?e:vt(Oe(e))}function ue(e,t){var r;t===void 0&&(t=[]);var n=vt(e),a=n===((r=e.ownerDocument)==null?void 0:r.body),o=B(n),f=a?[o].concat(o.visualViewport||[],je(n)?n:[]):n,l=t.concat(f);return a?l:l.concat(ue(Oe(f)))}function Se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Zt(e,t){var r=ae(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Ge(e,t,r){return t===it?Se(Kt(e,r)):ee(t)?Zt(t,r):Se(Qt(G(e)))}function er(e){var t=ue(Oe(e)),r=["absolute","fixed"].indexOf(X(e).position)>=0,n=r&&M(e)?pe(e):e;return ee(n)?t.filter(function(a){return ee(a)&&ft(a,n)&&I(a)!=="body"}):[]}function tr(e,t,r,n){var a=t==="clippingParents"?er(e):[].concat(t),o=[].concat(a,[r]),f=o[0],l=o.reduce(function(s,i){var u=Ge(e,i,n);return s.top=Z(u.top,s.top),s.right=be(u.right,s.right),s.bottom=be(u.bottom,s.bottom),s.left=Z(u.left,s.left),s},Ge(e,f,n));return l.width=l.right-l.left,l.height=l.bottom-l.top,l.x=l.left,l.y=l.top,l}function mt(e){var t=e.reference,r=e.element,n=e.placement,a=n?F(n):null,o=n?oe(n):null,f=t.x+t.width/2-r.width/2,l=t.y+t.height/2-r.height/2,s;switch(a){case j:s={x:f,y:t.y-r.height};break;case H:s={x:f,y:t.y+t.height};break;case W:s={x:t.x+t.width,y:l};break;case $:s={x:t.x-r.width,y:l};break;default:s={x:t.x,y:t.y}}var i=a?Le(a):null;if(i!=null){var u=i==="y"?"height":"width";switch(o){case ye:s[i]=s[i]-(t[u]/2-r[u]/2);break;case Ve:s[i]=s[i]+(t[u]/2-r[u]/2);break}}return s}function fe(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=n===void 0?e.placement:n,o=r.strategy,f=o===void 0?e.strategy:o,l=r.boundary,s=l===void 0?kt:l,i=r.rootBoundary,u=i===void 0?it:i,c=r.elementContext,d=c===void 0?se:c,p=r.altBoundary,O=p===void 0?!1:p,g=r.padding,v=g===void 0?0:g,x=ct(typeof v!="number"?v:dt(v,ke)),S=d===se?At:se,A=e.rects.popper,m=e.elements[O?S:d],w=tr(ee(m)?m:m.contextElement||G(e.elements.popper),s,u,f),h=ae(e.elements.reference),C=mt({reference:h,element:A,strategy:"absolute",placement:a}),V=Se(Object.assign({},A,C)),y=d===se?V:h,E={top:w.top-y.top+x.top,bottom:y.bottom-w.bottom+x.bottom,left:w.left-y.left+x.left,right:y.right-w.right+x.right},k=e.modifiersData.offset;if(d===se&&k){var q=k[a];Object.keys(E).forEach(function(L){var D=[W,H].indexOf(L)>=0?1:-1,P=[j,H].indexOf(L)>=0?"y":"x";E[L]+=q[P]*D})}return E}function rr(e,t){t===void 0&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,f=r.padding,l=r.flipVariations,s=r.allowedAutoPlacements,i=s===void 0?st:s,u=oe(n),c=u?l?_e:_e.filter(function(O){return oe(O)===u}):ke,d=c.filter(function(O){return i.indexOf(O)>=0});d.length===0&&(d=c);var p=d.reduce(function(O,g){return O[g]=fe(e,{placement:g,boundary:a,rootBoundary:o,padding:f})[F(g)],O},{});return Object.keys(p).sort(function(O,g){return p[O]-p[g]})}function nr(e){if(F(e)===lt)return[];var t=he(e);return[ze(e),t,ze(t)]}function ar(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var a=r.mainAxis,o=a===void 0?!0:a,f=r.altAxis,l=f===void 0?!0:f,s=r.fallbackPlacements,i=r.padding,u=r.boundary,c=r.rootBoundary,d=r.altBoundary,p=r.flipVariations,O=p===void 0?!0:p,g=r.allowedAutoPlacements,v=t.options.placement,x=F(v),S=x===v,A=s||(S||!O?[he(v)]:nr(v)),m=[v].concat(A).reduce(function(re,z){return re.concat(F(z)===lt?rr(t,{placement:z,boundary:u,rootBoundary:c,padding:i,flipVariations:O,allowedAutoPlacements:g}):z)},[]),w=t.rects.reference,h=t.rects.popper,C=new Map,V=!0,y=m[0],E=0;E<m.length;E++){var k=m[E],q=F(k),L=oe(k)===ye,D=[j,H].indexOf(q)>=0,P=D?"width":"height",b=fe(t,{placement:k,boundary:u,rootBoundary:c,altBoundary:d,padding:i}),R=D?L?W:$:L?H:j;w[P]>h[P]&&(R=he(R));var U=he(R),N=[];if(o&&N.push(b[q]<=0),l&&N.push(b[R]<=0,b[U]<=0),N.every(function(re){return re})){y=k,V=!1;break}C.set(k,N)}if(V)for(var J=O?3:1,te=function(z){var ie=m.find(function(de){var K=C.get(de);if(K)return K.slice(0,z).every(function(xe){return xe})});if(ie)return y=ie,"break"},_=J;_>0;_--){var ce=te(_);if(ce==="break")break}t.placement!==y&&(t.modifiersData[n]._skip=!0,t.placement=y,t.reset=!0)}}const or={name:"flip",enabled:!0,phase:"main",fn:ar,requiresIfExists:["offset"],data:{_skip:!1}};function Je(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Ke(e){return[j,W,H,$].some(function(t){return e[t]>=0})}function ir(e){var t=e.state,r=e.name,n=t.rects.reference,a=t.rects.popper,o=t.modifiersData.preventOverflow,f=fe(t,{elementContext:"reference"}),l=fe(t,{altBoundary:!0}),s=Je(f,n),i=Je(l,a,o),u=Ke(s),c=Ke(i);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:i,isReferenceHidden:u,hasPopperEscaped:c},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":c})}const sr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:ir};function lr(e,t,r){var n=F(e),a=[$,j].indexOf(n)>=0?-1:1,o=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=o[0],l=o[1];return f=f||0,l=(l||0)*a,[$,W].indexOf(n)>=0?{x:l,y:f}:{x:f,y:l}}function ur(e){var t=e.state,r=e.options,n=e.name,a=r.offset,o=a===void 0?[0,0]:a,f=st.reduce(function(u,c){return u[c]=lr(c,t.rects,o),u},{}),l=f[t.placement],s=l.x,i=l.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=i),t.modifiersData[n]=f}const fr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:ur};function pr(e){var t=e.state,r=e.name;t.modifiersData[r]=mt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const cr={name:"popperOffsets",enabled:!0,phase:"read",fn:pr,data:{}};function dr(e){return e==="x"?"y":"x"}function vr(e){var t=e.state,r=e.options,n=e.name,a=r.mainAxis,o=a===void 0?!0:a,f=r.altAxis,l=f===void 0?!1:f,s=r.boundary,i=r.rootBoundary,u=r.altBoundary,c=r.padding,d=r.tether,p=d===void 0?!0:d,O=r.tetherOffset,g=O===void 0?0:O,v=fe(t,{boundary:s,rootBoundary:i,padding:c,altBoundary:u}),x=F(t.placement),S=oe(t.placement),A=!S,m=Le(x),w=dr(m),h=t.modifiersData.popperOffsets,C=t.rects.reference,V=t.rects.popper,y=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,E=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),k=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,q={x:0,y:0};if(h){if(o){var L,D=m==="y"?j:$,P=m==="y"?H:W,b=m==="y"?"height":"width",R=h[m],U=R+v[D],N=R-v[P],J=p?-V[b]/2:0,te=S===ye?C[b]:V[b],_=S===ye?-V[b]:-C[b],ce=t.elements.arrow,re=p&&ce?Re(ce):{width:0,height:0},z=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:pt(),ie=z[D],de=z[P],K=le(0,C[b],re[b]),xe=A?C[b]/2-J-K-ie-E.mainAxis:te-K-ie-E.mainAxis,yt=A?-C[b]/2+J+K+de+E.mainAxis:_+K+de+E.mainAxis,Ee=t.elements.arrow&&pe(t.elements.arrow),bt=Ee?m==="y"?Ee.clientTop||0:Ee.clientLeft||0:0,$e=(L=k==null?void 0:k[m])!=null?L:0,wt=R+xe-$e-bt,Ot=R+yt-$e,Be=le(p?be(U,wt):U,R,p?Z(N,Ot):N);h[m]=Be,q[m]=Be-R}if(l){var Me,xt=m==="x"?j:$,Et=m==="x"?H:W,Q=h[w],ve=w==="y"?"height":"width",He=Q+v[xt],We=Q-v[Et],Te=[j,$].indexOf(x)!==-1,Ne=(Me=k==null?void 0:k[w])!=null?Me:0,Fe=Te?He:Q-C[ve]-V[ve]-Ne+E.altAxis,Ie=Te?Q+C[ve]+V[ve]-Ne-E.altAxis:We,Ue=p&&Te?Mt(Fe,Q,Ie):le(p?Fe:He,Q,p?Ie:We);h[w]=Ue,q[w]=Ue-Q}t.modifiersData[n]=q}}const mr={name:"preventOverflow",enabled:!0,phase:"main",fn:vr,requiresIfExists:["offset"]};function hr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function gr(e){return e===B(e)||!M(e)?qe(e):hr(e)}function yr(e){var t=e.getBoundingClientRect(),r=ne(t.width)/e.offsetWidth||1,n=ne(t.height)/e.offsetHeight||1;return r!==1||n!==1}function br(e,t,r){r===void 0&&(r=!1);var n=M(t),a=M(t)&&yr(t),o=G(t),f=ae(e,a,r),l={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((I(t)!=="body"||je(o))&&(l=gr(t)),M(t)?(s=ae(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):o&&(s.x=De(o))),{x:f.left+l.scrollLeft-s.x,y:f.top+l.scrollTop-s.y,width:f.width,height:f.height}}function wr(e){var t=new Map,r=new Set,n=[];e.forEach(function(o){t.set(o.name,o)});function a(o){r.add(o.name);var f=[].concat(o.requires||[],o.requiresIfExists||[]);f.forEach(function(l){if(!r.has(l)){var s=t.get(l);s&&a(s)}}),n.push(o)}return e.forEach(function(o){r.has(o.name)||a(o)}),n}function Or(e){var t=wr(e);return Rt.reduce(function(r,n){return r.concat(t.filter(function(a){return a.phase===n}))},[])}function xr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Er(e){var t=e.reduce(function(r,n){var a=r[n.name];return r[n.name]=a?Object.assign({},a,n,{options:Object.assign({},a.options,n.options),data:Object.assign({},a.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Qe={placement:"bottom",modifiers:[],strategy:"absolute"};function Ze(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Tr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,a=t.defaultOptions,o=a===void 0?Qe:a;return function(l,s,i){i===void 0&&(i=o);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},Qe,o),modifiersData:{},elements:{reference:l,popper:s},attributes:{},styles:{}},c=[],d=!1,p={state:u,setOptions:function(x){var S=typeof x=="function"?x(u.options):x;g(),u.options=Object.assign({},o,u.options,S),u.scrollParents={reference:ee(l)?ue(l):l.contextElement?ue(l.contextElement):[],popper:ue(s)};var A=Or(Er([].concat(n,u.options.modifiers)));return u.orderedModifiers=A.filter(function(m){return m.enabled}),O(),p.update()},forceUpdate:function(){if(!d){var x=u.elements,S=x.reference,A=x.popper;if(Ze(S,A)){u.rects={reference:br(S,pe(A),u.options.strategy==="fixed"),popper:Re(A)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var m=0;m<u.orderedModifiers.length;m++){if(u.reset===!0){u.reset=!1,m=-1;continue}var w=u.orderedModifiers[m],h=w.fn,C=w.options,V=C===void 0?{}:C,y=w.name;typeof h=="function"&&(u=h({state:u,options:V,name:y,instance:p})||u)}}}},update:xr(function(){return new Promise(function(v){p.forceUpdate(),v(u)})}),destroy:function(){g(),d=!0}};if(!Ze(l,s))return p;p.setOptions(i).then(function(v){!d&&i.onFirstUpdate&&i.onFirstUpdate(v)});function O(){u.orderedModifiers.forEach(function(v){var x=v.name,S=v.options,A=S===void 0?{}:S,m=v.effect;if(typeof m=="function"){var w=m({state:u,name:x,instance:p,options:A}),h=function(){};c.push(w||h)}})}function g(){c.forEach(function(v){return v()}),c=[]}return p}}var Cr=[zt,cr,Yt,jt,fr,or,mr,Ft,sr],Vr=Tr({defaultModifiers:Cr});function Pr(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,o;for(o=0;o<n.length;o++)a=n[o],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y.apply(this,arguments)}var et=function(t){return t.reduce(function(r,n){var a=n[0],o=n[1];return r[a]=o,r},{})},tt=typeof window<"u"&&window.document&&window.document.createElement?T.useLayoutEffect:T.useEffect,Sr=[],kr=function(t,r,n){n===void 0&&(n={});var a=T.useRef(null),o={onFirstUpdate:n.onFirstUpdate,placement:n.placement||"bottom",strategy:n.strategy||"absolute",modifiers:n.modifiers||Sr},f=T.useState({styles:{popper:{position:o.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),l=f[0],s=f[1],i=T.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var O=p.state,g=Object.keys(O.elements);Vt.flushSync(function(){s({styles:et(g.map(function(v){return[v,O.styles[v]||{}]})),attributes:et(g.map(function(v){return[v,O.attributes[v]]}))})})},requires:["computeStyles"]}},[]),u=T.useMemo(function(){var d={onFirstUpdate:o.onFirstUpdate,placement:o.placement,strategy:o.strategy,modifiers:[].concat(o.modifiers,[i,{name:"applyStyles",enabled:!1}])};return St(a.current,d)?a.current||d:(a.current=d,d)},[o.onFirstUpdate,o.placement,o.strategy,o.modifiers,i]),c=T.useRef();return tt(function(){c.current&&c.current.setOptions(u)},[u]),tt(function(){if(!(t==null||r==null)){var d=n.createPopper||Vr,p=d(t,r,u);return c.current=p,function(){p.destroy(),c.current=null}}},[t,r,n.createPopper]),{state:c.current?c.current.state:null,styles:l.styles,attributes:l.attributes,update:c.current?c.current.update:null,forceUpdate:c.current?c.current.forceUpdate:null}};function ht(e){var t=T.useRef(e);return t.current=e,T.useCallback(function(){return t.current},[])}var Ar=function(){};function Rr(e){var t=e.initial,r=e.value,n=e.onChange,a=n===void 0?Ar:n;if(t===void 0&&r===void 0)throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');var o=T.useState(t),f=o[0],l=o[1],s=ht(f),i=T.useCallback(function(c){var d=s(),p=typeof c=="function"?c(d):c;typeof p.persist=="function"&&p.persist(),l(p),typeof a=="function"&&a(p)},[s,a]),u=r!==void 0;return[u?r:f,u?a:i]}function gt(e,t){return e===void 0&&(e=0),t===void 0&&(t=0),function(){return{width:0,height:0,top:t,right:e,bottom:t,left:e,x:0,y:0,toJSON:function(){return null}}}}var Lr=["styles","attributes"],rt={getBoundingClientRect:gt()},nt={closeOnOutsideClick:!0,closeOnTriggerHidden:!1,defaultVisible:!1,delayHide:0,delayShow:0,followCursor:!1,interactive:!1,mutationObserverOptions:{attributes:!0,childList:!0,subtree:!0},offset:[0,6],trigger:"hover"};function qr(e,t){var r,n,a;e===void 0&&(e={}),t===void 0&&(t={});var o=Object.keys(nt).reduce(function(P,b){var R;return Y({},P,(R={},R[b]=P[b]!==void 0?P[b]:nt[b],R))},e),f=T.useMemo(function(){return[{name:"offset",options:{offset:o.offset}}]},Array.isArray(o.offset)?o.offset:[]),l=Y({},t,{placement:t.placement||o.placement,modifiers:t.modifiers||f}),s=T.useState(null),i=s[0],u=s[1],c=T.useState(null),d=c[0],p=c[1],O=Rr({initial:o.defaultVisible,value:o.visible,onChange:o.onVisibleChange}),g=O[0],v=O[1],x=T.useRef();T.useEffect(function(){return function(){return clearTimeout(x.current)}},[]);var S=kr(o.followCursor?rt:i,d,l),A=S.styles,m=S.attributes,w=Pr(S,Lr),h=w.update,C=ht({visible:g,triggerRef:i,tooltipRef:d,finalConfig:o}),V=T.useCallback(function(P){return Array.isArray(o.trigger)?o.trigger.includes(P):o.trigger===P},Array.isArray(o.trigger)?o.trigger:[o.trigger]),y=T.useCallback(function(){clearTimeout(x.current),x.current=window.setTimeout(function(){return v(!1)},o.delayHide)},[o.delayHide,v]),E=T.useCallback(function(){clearTimeout(x.current),x.current=window.setTimeout(function(){return v(!0)},o.delayShow)},[o.delayShow,v]),k=T.useCallback(function(){C().visible?y():E()},[C,y,E]);T.useEffect(function(){if(C().finalConfig.closeOnOutsideClick){var P=function(R){var U,N=C(),J=N.tooltipRef,te=N.triggerRef,_=(R.composedPath==null||(U=R.composedPath())==null?void 0:U[0])||R.target;_ instanceof Node&&J!=null&&te!=null&&!J.contains(_)&&!te.contains(_)&&y()};return document.addEventListener("mousedown",P),function(){return document.removeEventListener("mousedown",P)}}},[C,y]),T.useEffect(function(){if(!(i==null||!V("click")))return i.addEventListener("click",k),function(){return i.removeEventListener("click",k)}},[i,V,k]),T.useEffect(function(){if(!(i==null||!V("double-click")))return i.addEventListener("dblclick",k),function(){return i.removeEventListener("dblclick",k)}},[i,V,k]),T.useEffect(function(){if(!(i==null||!V("right-click"))){var P=function(R){R.preventDefault(),k()};return i.addEventListener("contextmenu",P),function(){return i.removeEventListener("contextmenu",P)}}},[i,V,k]),T.useEffect(function(){if(!(i==null||!V("focus")))return i.addEventListener("focus",E),i.addEventListener("blur",y),function(){i.removeEventListener("focus",E),i.removeEventListener("blur",y)}},[i,V,E,y]),T.useEffect(function(){if(!(i==null||!V("hover")))return i.addEventListener("mouseenter",E),i.addEventListener("mouseleave",y),function(){i.removeEventListener("mouseenter",E),i.removeEventListener("mouseleave",y)}},[i,V,E,y]),T.useEffect(function(){if(!(d==null||!V("hover")||!C().finalConfig.interactive))return d.addEventListener("mouseenter",E),d.addEventListener("mouseleave",y),function(){d.removeEventListener("mouseenter",E),d.removeEventListener("mouseleave",y)}},[d,V,E,y,C]);var q=w==null||(r=w.state)==null||(n=r.modifiersData)==null||(a=n.hide)==null?void 0:a.isReferenceHidden;T.useEffect(function(){o.closeOnTriggerHidden&&q&&y()},[o.closeOnTriggerHidden,y,q]),T.useEffect(function(){if(!o.followCursor||i==null)return;function P(b){var R=b.clientX,U=b.clientY;rt.getBoundingClientRect=gt(R,U),h==null||h()}return i.addEventListener("mousemove",P),function(){return i.removeEventListener("mousemove",P)}},[o.followCursor,i,h]),T.useEffect(function(){if(!(d==null||h==null||o.mutationObserverOptions==null)){var P=new MutationObserver(h);return P.observe(d,o.mutationObserverOptions),function(){return P.disconnect()}}},[o.mutationObserverOptions,d,h]);var L=function(b){return b===void 0&&(b={}),Y({},b,{style:Y({},b.style,A.popper)},m.popper,{"data-popper-interactive":o.interactive})},D=function(b){return b===void 0&&(b={}),Y({},b,m.arrow,{style:Y({},b.style,A.arrow),"data-popper-arrow":!0})};return Y({getArrowProps:D,getTooltipProps:L,setTooltipRef:p,setTriggerRef:u,tooltipRef:d,triggerRef:i,visible:g},w)}const{global:Dr}=__STORYBOOK_MODULE_GLOBAL__,{document:ge}=Dr,jr=ot.div`
  display: inline-block;
  cursor: ${e=>e.trigger==="hover"||e.trigger.includes("hover")?"default":"pointer"};
`,$r=ot.g`
  cursor: ${e=>e.trigger==="hover"||e.trigger.includes("hover")?"default":"pointer"};
`,we=({svg:e,trigger:t,closeOnOutsideClick:r,placement:n,hasChrome:a,withArrows:o,offset:f,tooltip:l,children:s,closeOnTriggerHidden:i,mutationObserverOptions:u,closeOnClick:c,tooltipShown:d,onVisibilityChange:p,defaultVisible:O,delayHide:g,visible:v,interactive:x,delayShow:S,modifiers:A,strategy:m,followCursor:w,onVisibleChange:h,...C})=>{const V=e?$r:jr,{getArrowProps:y,getTooltipProps:E,setTooltipRef:k,setTriggerRef:q,visible:L,state:D}=qr({trigger:t,placement:n,defaultVisible:O??d,delayHide:g,interactive:x,closeOnOutsideClick:r??c,closeOnTriggerHidden:i,onVisibleChange:b=>{p==null||p(b),h==null||h(b)},delayShow:S,followCursor:w,mutationObserverOptions:u,visible:v,offset:f},{modifiers:A,strategy:m}),P=Ce(Lt,{placement:D==null?void 0:D.placement,ref:k,hasChrome:a,arrowProps:y(),withArrows:o,...E(),children:typeof l=="function"?l({onHide:()=>h(!1)}):l});return Tt(Ct,{children:[Ce(V,{trigger:t,ref:q,...C,children:s}),L&&Pt.createPortal(P,ge.body)]})};we.defaultProps={svg:!1,trigger:"click",closeOnOutsideClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,defaultVisible:!1};const at=({startOpen:e=!1,onVisibleChange:t,...r})=>{const[n,a]=T.useState(e),o=T.useCallback(f=>{t&&t(f)===!1||a(f)},[t]);return T.useEffect(()=>{const f=()=>o(!1);ge.addEventListener("keydown",f,!1);const l=Array.from(ge.getElementsByTagName("iframe")),s=[];return l.forEach(i=>{const u=()=>{try{i.contentWindow.document&&(i.contentWindow.document.addEventListener("click",f),s.push(()=>{try{i.contentWindow.document.removeEventListener("click",f)}catch{}}))}catch{}};u(),i.addEventListener("load",u),s.push(()=>{i.removeEventListener("load",u)})}),()=>{ge.removeEventListener("keydown",f),s.forEach(i=>{i()})}}),Ce(we,{...r,visible:n,onVisibleChange:o})};try{we.displayName="WithTooltipPure",we.__docgenInfo={description:"",displayName:"WithTooltipPure",props:{svg:{defaultValue:{value:"false"},description:"",name:"svg",required:!1,type:{name:"boolean"}},withArrows:{defaultValue:null,description:"",name:"withArrows",required:!1,type:{name:"boolean"}},hasChrome:{defaultValue:{value:"true"},description:"",name:"hasChrome",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"ReactNode | ((p: WithHideFn) => ReactNode)"}},onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"(() => void)"}},tooltipShown:{defaultValue:null,description:"@deprecated use `defaultVisible` property instead. This property will be removed in SB 8.0",name:"tooltipShown",required:!1,type:{name:"boolean"}},closeOnClick:{defaultValue:null,description:"@deprecated use `closeOnOutsideClick` property instead. This property will be removed in SB 8.0",name:"closeOnClick",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"@deprecated use `onVisibleChange` property instead. This property will be removed in SB 8.0",name:"onVisibilityChange",required:!1,type:{name:"((visibility: boolean) => boolean | void)"}},closeOnOutsideClick:{defaultValue:{value:"false"},description:"If `true`, a click outside the trigger element closes the tooltip",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"[0, 6]"},description:"Shorthand for popper.js offset modifier, see https://popper.js.org/docs/v2/modifiers/offset/",name:"offset",required:!1,type:{name:"[number, number]"}},visible:{defaultValue:null,description:"Used to create controlled tooltip",name:"visible",required:!1,type:{name:"boolean"}},closeOnTriggerHidden:{defaultValue:{value:"false"},description:"Whether to close the tooltip when its trigger is out of boundary",name:"closeOnTriggerHidden",required:!1,type:{name:"boolean"}},trigger:{defaultValue:{value:"click"},description:"Event or events that trigger the tooltip",name:"trigger",required:!1,type:{name:"TriggerType | TriggerType[] | null"}},delayHide:{defaultValue:{value:"0"},description:"Delay in hiding the tooltip (ms)",name:"delayHide",required:!1,type:{name:"number"}},delayShow:{defaultValue:{value:"0"},description:"Delay in showing the tooltip (ms)",name:"delayShow",required:!1,type:{name:"number"}},followCursor:{defaultValue:{value:"false"},description:"Whether to make the tooltip spawn at cursor position",name:"followCursor",required:!1,type:{name:"boolean"}},mutationObserverOptions:{defaultValue:{value:"{ attributes: true, childList: true, subtree: true }"},description:`Options to MutationObserver, used internally for updating
tooltip position based on its DOM changes`,name:"mutationObserverOptions",required:!1,type:{name:"MutationObserverInit | null"}},defaultVisible:{defaultValue:{value:"false"},description:"Whether tooltip is shown by default",name:"defaultVisible",required:!1,type:{name:"boolean"}},onVisibleChange:{defaultValue:null,description:"Called when the visibility of the tooltip changes",name:"onVisibleChange",required:!1,type:{name:"((state: boolean) => void)"}},interactive:{defaultValue:{value:"false"},description:"If `true`, hovering the tooltip will keep it open. Normally tooltip closes when the mouse cursor moves out of\nthe trigger element. If it moves to the tooltip element, the tooltip stays open.",name:"interactive",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"top"},description:"Alias for popper.js placement, see https://popper.js.org/docs/v2/constructors/#placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},modifiers:{defaultValue:{value:`[
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
  ]`},description:"",name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},strategy:{defaultValue:null,description:"",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'}]}},onFirstUpdate:{defaultValue:null,description:"",name:"onFirstUpdate",required:!1,type:{name:"((arg0: Partial<State>) => void)"}},createPopper:{defaultValue:null,description:"",name:"createPopper",required:!1,type:{name:"(<TModifier extends Partial<Modifier<any, any>>>(reference: Element | VirtualElement, popper: HTMLElement, options?: Partial<OptionsGeneric<TModifier>>) => Instance)"}}}}}catch{}try{at.displayName="WithToolTipState",at.__docgenInfo={description:"",displayName:"WithToolTipState",props:{onDoubleClick:{defaultValue:null,description:"",name:"onDoubleClick",required:!1,type:{name:"(() => void)"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"ReactNode | ((p: WithHideFn) => ReactNode)"}},svg:{defaultValue:{value:"false"},description:"",name:"svg",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"[0, 6]"},description:"Shorthand for popper.js offset modifier, see https://popper.js.org/docs/v2/modifiers/offset/",name:"offset",required:!1,type:{name:"[number, number]"}},visible:{defaultValue:null,description:"Used to create controlled tooltip",name:"visible",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"Theme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any>"}},closeOnOutsideClick:{defaultValue:{value:"false"},description:"If `true`, a click outside the trigger element closes the tooltip",name:"closeOnOutsideClick",required:!1,type:{name:"boolean"}},closeOnTriggerHidden:{defaultValue:{value:"false"},description:"Whether to close the tooltip when its trigger is out of boundary",name:"closeOnTriggerHidden",required:!1,type:{name:"boolean"}},trigger:{defaultValue:{value:"click"},description:"Event or events that trigger the tooltip",name:"trigger",required:!1,type:{name:"TriggerType | TriggerType[] | null"}},delayHide:{defaultValue:{value:"0"},description:"Delay in hiding the tooltip (ms)",name:"delayHide",required:!1,type:{name:"number"}},delayShow:{defaultValue:{value:"0"},description:"Delay in showing the tooltip (ms)",name:"delayShow",required:!1,type:{name:"number"}},followCursor:{defaultValue:{value:"false"},description:"Whether to make the tooltip spawn at cursor position",name:"followCursor",required:!1,type:{name:"boolean"}},mutationObserverOptions:{defaultValue:{value:"{ attributes: true, childList: true, subtree: true }"},description:`Options to MutationObserver, used internally for updating
tooltip position based on its DOM changes`,name:"mutationObserverOptions",required:!1,type:{name:"MutationObserverInit | null"}},defaultVisible:{defaultValue:{value:"false"},description:"Whether tooltip is shown by default",name:"defaultVisible",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:"If `true`, hovering the tooltip will keep it open. Normally tooltip closes when the mouse cursor moves out of\nthe trigger element. If it moves to the tooltip element, the tooltip stays open.",name:"interactive",required:!1,type:{name:"boolean"}},placement:{defaultValue:{value:"top"},description:"Alias for popper.js placement, see https://popper.js.org/docs/v2/constructors/#placement",name:"placement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},modifiers:{defaultValue:{value:`[
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
  ]`},description:"",name:"modifiers",required:!1,type:{name:"Partial<Modifier<any, any>>[]"}},strategy:{defaultValue:null,description:"",name:"strategy",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"fixed"'}]}},onFirstUpdate:{defaultValue:null,description:"",name:"onFirstUpdate",required:!1,type:{name:"((arg0: Partial<State>) => void)"}},withArrows:{defaultValue:null,description:"",name:"withArrows",required:!1,type:{name:"boolean"}},hasChrome:{defaultValue:{value:"true"},description:"",name:"hasChrome",required:!1,type:{name:"boolean"}},tooltipShown:{defaultValue:null,description:"@deprecated use `defaultVisible` property instead. This property will be removed in SB 8.0",name:"tooltipShown",required:!1,type:{name:"boolean"}},closeOnClick:{defaultValue:null,description:"@deprecated use `closeOnOutsideClick` property instead. This property will be removed in SB 8.0",name:"closeOnClick",required:!1,type:{name:"boolean"}},onVisibilityChange:{defaultValue:null,description:"@deprecated use `onVisibleChange` property instead. This property will be removed in SB 8.0",name:"onVisibilityChange",required:!1,type:{name:"((visibility: boolean) => boolean | void)"}},createPopper:{defaultValue:null,description:"",name:"createPopper",required:!1,type:{name:"(<TModifier extends Partial<Modifier<any, any>>>(reference: Element | VirtualElement, popper: HTMLElement, options?: Partial<OptionsGeneric<TModifier>>) => Instance)"}},startOpen:{defaultValue:{value:"false"},description:"",name:"startOpen",required:!1,type:{name:"boolean"}},onVisibleChange:{defaultValue:null,description:"",name:"onVisibleChange",required:!1,type:{name:"((visible: boolean) => boolean | void)"}}}}}catch{}export{at as W};
//# sourceMappingURL=WithTooltip-9caa86c0.js.map
