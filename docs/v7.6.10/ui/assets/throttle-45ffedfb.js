import{g as N}from"./_commonjsHelpers-de833af9.js";import{b as j,a as h}from"./isObjectLike-7c6e5cb8.js";import{i as A}from"./isSymbol-6ab5993c.js";var F=j,L=function(){return F.Date.now()},M=L,B=/\s/;function D(e){for(var r=e.length;r--&&B.test(e.charAt(r)););return r}var U=D,X=U,w=/^\s+/;function H(e){return e&&e.slice(0,X(e)+1).replace(w,"")}var P=H,q=P,y=h,z=A,p=0/0,G=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,K=/^0o[0-7]+$/i,Q=parseInt;function V(e){if(typeof e=="number")return e;if(z(e))return p;if(y(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=y(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=q(e);var t=J.test(e);return t||K.test(e)?Q(e.slice(2),t?2:8):G.test(e)?p:+e}var Y=V,Z=h,x=M,O=Y,ee="Expected a function",re=Math.max,ne=Math.min;function te(e,r,t){var a,f,l,d,i,o,c=0,E=!1,m=!1,v=!0;if(typeof e!="function")throw new TypeError(ee);r=O(r)||0,Z(t)&&(E=!!t.leading,m="maxWait"in t,l=m?re(O(t.maxWait)||0,r):l,v="trailing"in t?!!t.trailing:v);function b(n){var u=a,s=f;return a=f=void 0,c=n,d=e.apply(s,u),d}function W(n){return c=n,i=setTimeout(g,r),E?b(n):d}function k(n){var u=n-o,s=n-c,$=r-u;return m?ne($,l-s):$}function I(n){var u=n-o,s=n-c;return o===void 0||u>=r||u<0||m&&s>=l}function g(){var n=x();if(I(n))return _(n);i=setTimeout(g,k(n))}function _(n){return i=void 0,v&&a?b(n):(a=f=void 0,d)}function C(){i!==void 0&&clearTimeout(i),c=0,a=o=f=i=void 0}function R(){return i===void 0?d:_(x())}function T(){var n=x(),u=I(n);if(a=arguments,f=this,o=n,u){if(i===void 0)return W(o);if(m)return clearTimeout(i),i=setTimeout(g,r),b(o)}return i===void 0&&(i=setTimeout(g,r)),d}return T.cancel=C,T.flush=R,T}var S=te;const se=N(S);var ie=S,ae=h,fe="Expected a function";function ue(e,r,t){var a=!0,f=!0;if(typeof e!="function")throw new TypeError(fe);return ae(t)&&(a="leading"in t?!!t.leading:a,f="trailing"in t?!!t.trailing:f),ie(e,r,{leading:a,maxWait:r,trailing:f})}var oe=ue;const le=N(oe);export{se as d,le as t};
//# sourceMappingURL=throttle-45ffedfb.js.map
