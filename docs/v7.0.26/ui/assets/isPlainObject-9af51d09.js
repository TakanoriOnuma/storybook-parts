import{_ as a,i as c}from"./isObjectLike-dbd718f5.js";import{_ as n}from"./_getPrototype-d314cec2.js";var i=a,s=n,b=c,p="[object Object]",f=Function.prototype,j=Object.prototype,e=f.toString,u=j.hasOwnProperty,l=e.call(Object);function O(r){if(!b(r)||i(r)!=p)return!1;var o=s(r);if(o===null)return!0;var t=u.call(o,"constructor")&&o.constructor;return typeof t=="function"&&t instanceof t&&e.call(t)==l}var v=O;export{v as i};
//# sourceMappingURL=isPlainObject-9af51d09.js.map