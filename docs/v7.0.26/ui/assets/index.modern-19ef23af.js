import{r as w}from"./index-6f814c40.js";function O(){return O=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(r[l]=c[l])}return r},O.apply(this,arguments)}const ke=["children","options"],j=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((r,o)=>(r[o.toLowerCase()]=o,r),{for:"htmlFor"}),U={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},ye=["style","script"],$e=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,xe=/mailto:/i,He=/\n{2,}$/,K=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,ve=/^ *> ?/gm,Ie=/^ {2,}\n/,_e=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Y=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,ee=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,Me=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,be=/^(?:\n *)*\n/,Se=/\r\n?/g,Oe=/^\[\^([^\]]+)](:.*)\n/,Ae=/^\[\^([^\]]+)]/,Le=/\f/g,Ee=/^\s*?\[(x|\s)\]/,ne=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,te=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,D=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,Ge=/&([a-zA-Z]+);/g,re=/^<!--[\s\S]*?(?:-->)/,we=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,F=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Ce=/^\{.*\}$/,Re=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Ne=/^<([^ >]+@[^ >]+)>/,Te=/^<([^ >]+:\/[^ >]+)>/,ze=/-([a-z])?/gi,oe=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,Be=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,De=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,Fe=/^\[([^\]]*)\] ?\[([^\]]*)\]/,We=/(\[|\])/g,Xe=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Pe=/\t/g,je=/^ *\| */,Ue=/(^ *\||\| *$)/g,Ze=/ *$/,qe=/^ *:-+: *$/,Ve=/^ *:-+ *$/,Qe=/^ *-+: *$/,Je=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Ke=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,Ye=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,en=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,nn=/^\\([^0-9A-Za-z\s])/,tn=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,rn=/^\n+/,on=/^([ \t]*)/,ln=/\\([^\\])/g,Z=/ *\n+$/,cn=/(?:^|\n)( *)$/,W="(?:\\d+\\.)",X="(?:[*+-])";function le(r){return"( *)("+(r===1?W:X)+") +"}const ce=le(1),ie=le(2);function ae(r){return new RegExp("^"+(r===1?ce:ie))}const an=ae(1),sn=ae(2);function se(r){return new RegExp("^"+(r===1?ce:ie)+"[^\\n]*(?:\\n(?!\\1"+(r===1?W:X)+" )[^\\n]*)*(\\n|$)","gm")}const ue=se(1),pe=se(2);function fe(r){const o=r===1?W:X;return new RegExp("^( *)("+o+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+o+" (?!"+o+" ))\\n*|\\s*\\n*$)")}const de=fe(1),he=fe(2);function q(r,o){const c=o===1,l=c?de:he,f=c?ue:pe,g=c?an:sn;return{t(u,d,m){const H=cn.exec(m);return H&&(d.o||!d._&&!d.u)?l.exec(u=H[1]+u):null},i:s.HIGH,l(u,d,m){const H=c?+u[2]:void 0,S=u[0].replace(He,`
`).match(f);let L=!1;return{p:S.map(function(E,e){const t=g.exec(E)[0].length,n=new RegExp("^ {1,"+t+"}","gm"),a=E.replace(n,"").replace(g,""),i=e===S.length-1,h=a.indexOf(`

`)!==-1||i&&L;L=h;const p=m._,x=m.o;let $;m.o=!0,h?(m._=!1,$=a.replace(Z,`

`)):(m._=!0,$=a.replace(Z,""));const v=d($,m);return m._=p,m.o=x,v}),m:c,g:H}},h:(u,d,m)=>r(u.m?"ol":"ul",{key:m.k,start:u.g},u.p.map(function(H,S){return r("li",{key:S},d(H,m))}))}}const un=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,pn=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,ge=[K,Y,ee,ne,te,re,oe,ue,de,pe,he],fn=[...ge,/^[^\n]+(?:  \n|\n{2,})/,D,F];function dn(r){return r.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function hn(r){return Qe.test(r)?"right":qe.test(r)?"center":Ve.test(r)?"left":null}function V(r,o,c){const l=c.v;c.v=!0;const f=o(r.trim(),c);c.v=l;let g=[[]];return f.forEach(function(u,d){u.type==="tableSeparator"?d!==0&&d!==f.length-1&&g.push([]):(u.type!=="text"||f[d+1]!=null&&f[d+1].type!=="tableSeparator"||(u.$=u.$.replace(Ze,"")),g[g.length-1].push(u))}),g}function gn(r,o,c){c._=!0;const l=V(r[1],o,c),f=r[2].replace(Ue,"").split("|").map(hn),g=function(u,d,m){return u.trim().split(`
`).map(function(H){return V(H,d,m)})}(r[3],o,c);return c._=!1,{S:f,A:g,L:l,type:"table"}}function Q(r,o){return r.S[o]==null?{}:{textAlign:r.S[o]}}function M(r){return function(o,c){return c._?r.exec(o):null}}function b(r){return function(o,c){return c._||c.u?r.exec(o):null}}function I(r){return function(o,c){return c._||c.u?null:r.exec(o)}}function G(r){return function(o){return r.exec(o)}}function mn(r,o,c){if(o._||o.u||c&&!c.endsWith(`
`))return null;let l="";r.split(`
`).every(g=>!ge.some(u=>u.test(g))&&(l+=g+`
`,g.trim()));const f=l.trimEnd();return f==""?null:[l,f]}function A(r){try{if(decodeURIComponent(r).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch{return null}return r}function J(r){return r.replace(ln,"$1")}function C(r,o,c){const l=c._||!1,f=c.u||!1;c._=!0,c.u=!0;const g=r(o,c);return c._=l,c.u=f,g}function kn(r,o,c){const l=c._||!1,f=c.u||!1;c._=!1,c.u=!0;const g=r(o,c);return c._=l,c.u=f,g}function yn(r,o,c){return c._=!1,r(o+`

`,c)}const N=(r,o,c)=>({$:C(o,r[1],c)});function T(){return{}}function z(){return null}function $n(...r){return r.filter(Boolean).join(" ")}function B(r,o,c){let l=r;const f=o.split(".");for(;f.length&&(l=l[f[0]],l!==void 0);)f.shift();return l||c}var s;function xn(r,o={}){o.overrides=o.overrides||{},o.slugify=o.slugify||dn,o.namedCodesToUnicode=o.namedCodesToUnicode?O({},U,o.namedCodesToUnicode):U;const c=o.createElement||w.createElement;function l(e,t,...n){const a=B(o.overrides,`${e}.props`,{});return c(function(i,h){const p=B(h,i);return p?typeof p=="function"||typeof p=="object"&&"render"in p?p:B(h,`${i}.component`,i):i}(e,o.overrides),O({},t,a,{className:$n(t==null?void 0:t.className,a.className)||void 0}),...n)}function f(e){let t=!1;o.forceInline?t=!0:o.forceBlock||(t=Xe.test(e)===!1);const n=S(H(t?e:`${e.trimEnd().replace(rn,"")}

`,{_:t}));for(;typeof n[n.length-1]=="string"&&!n[n.length-1].trim();)n.pop();if(o.wrapper===null)return n;const a=o.wrapper||(t?"span":"div");let i;if(n.length>1||o.forceWrapper)i=n;else{if(n.length===1)return i=n[0],typeof i=="string"?l("span",{key:"outer"},i):i;i=null}return w.createElement(a,{key:"outer"},i)}function g(e){const t=e.match($e);return t?t.reduce(function(n,a,i){const h=a.indexOf("=");if(h!==-1){const p=function(k){return k.indexOf("-")!==-1&&k.match(we)===null&&(k=k.replace(ze,function(y,_){return _.toUpperCase()})),k}(a.slice(0,h)).trim(),x=function(k){const y=k[0];return(y==='"'||y==="'")&&k.length>=2&&k[k.length-1]===y?k.slice(1,-1):k}(a.slice(h+1).trim()),$=j[p]||p,v=n[$]=function(k,y){return k==="style"?y.split(/;\s?/).reduce(function(_,R){const P=R.slice(0,R.indexOf(":"));return _[P.replace(/(-[a-z])/g,me=>me[1].toUpperCase())]=R.slice(P.length+1).trim(),_},{}):k==="href"?A(y):(y.match(Ce)&&(y=y.slice(1,y.length-1)),y==="true"||y!=="false"&&y)}(p,x);typeof v=="string"&&(D.test(v)||F.test(v))&&(n[$]=w.cloneElement(f(v.trim()),{key:i}))}else a!=="style"&&(n[j[a]||a]=!0);return n},{}):null}const u=[],d={},m={blockQuote:{t:I(K),i:s.HIGH,l:(e,t,n)=>({$:t(e[0].replace(ve,""),n)}),h:(e,t,n)=>l("blockquote",{key:n.k},t(e.$,n))},breakLine:{t:G(Ie),i:s.HIGH,l:T,h:(e,t,n)=>l("br",{key:n.k})},breakThematic:{t:I(_e),i:s.HIGH,l:T,h:(e,t,n)=>l("hr",{key:n.k})},codeBlock:{t:I(ee),i:s.MAX,l:e=>({$:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(e,t,n)=>l("pre",{key:n.k},l("code",O({},e.I,{className:e.M?`lang-${e.M}`:""}),e.$))},codeFenced:{t:I(Y),i:s.MAX,l:e=>({I:g(e[3]||""),$:e[4],M:e[2]||void 0,type:"codeBlock"})},codeInline:{t:b(Me),i:s.LOW,l:e=>({$:e[2]}),h:(e,t,n)=>l("code",{key:n.k},e.$)},footnote:{t:I(Oe),i:s.MAX,l:e=>(u.push({O:e[2],B:e[1]}),{}),h:z},footnoteReference:{t:M(Ae),i:s.HIGH,l:e=>({$:e[1],R:`#${o.slugify(e[1])}`}),h:(e,t,n)=>l("a",{key:n.k,href:A(e.R)},l("sup",{key:n.k},e.$))},gfmTask:{t:M(Ee),i:s.HIGH,l:e=>({T:e[1].toLowerCase()==="x"}),h:(e,t,n)=>l("input",{checked:e.T,key:n.k,readOnly:!0,type:"checkbox"})},heading:{t:I(ne),i:s.HIGH,l:(e,t,n)=>({$:C(t,e[2],n),j:o.slugify(e[2]),C:e[1].length}),h:(e,t,n)=>l(`h${e.C}`,{id:e.j,key:n.k},t(e.$,n))},headingSetext:{t:I(te),i:s.MAX,l:(e,t,n)=>({$:C(t,e[1],n),C:e[2]==="="?1:2,type:"heading"})},htmlComment:{t:G(re),i:s.HIGH,l:()=>({}),h:z},image:{t:b(pn),i:s.HIGH,l:e=>({D:e[1],R:J(e[2]),N:e[3]}),h:(e,t,n)=>l("img",{key:n.k,alt:e.D||void 0,title:e.N||void 0,src:A(e.R)})},link:{t:M(un),i:s.LOW,l:(e,t,n)=>({$:kn(t,e[1],n),R:J(e[2]),N:e[3]}),h:(e,t,n)=>l("a",{key:n.k,href:A(e.R),title:e.N},t(e.$,n))},linkAngleBraceStyleDetector:{t:M(Te),i:s.MAX,l:e=>({$:[{$:e[1],type:"text"}],R:e[1],type:"link"})},linkBareUrlDetector:{t:(e,t)=>t.Z?null:M(Re)(e,t),i:s.MAX,l:e=>({$:[{$:e[1],type:"text"}],R:e[1],N:void 0,type:"link"})},linkMailtoDetector:{t:M(Ne),i:s.MAX,l(e){let t=e[1],n=e[1];return xe.test(n)||(n="mailto:"+n),{$:[{$:t.replace("mailto:",""),type:"text"}],R:n,type:"link"}}},orderedList:q(l,1),unorderedList:q(l,2),newlineCoalescer:{t:I(be),i:s.LOW,l:T,h:()=>`
`},paragraph:{t:mn,i:s.LOW,l:N,h:(e,t,n)=>l("p",{key:n.k},t(e.$,n))},ref:{t:M(Be),i:s.MAX,l:e=>(d[e[1]]={R:e[2],N:e[4]},{}),h:z},refImage:{t:b(De),i:s.MAX,l:e=>({D:e[1]||void 0,F:e[2]}),h:(e,t,n)=>l("img",{key:n.k,alt:e.D,src:A(d[e.F].R),title:d[e.F].N})},refLink:{t:M(Fe),i:s.MAX,l:(e,t,n)=>({$:t(e[1],n),P:t(e[0].replace(We,"\\$1"),n),F:e[2]}),h:(e,t,n)=>d[e.F]?l("a",{key:n.k,href:A(d[e.F].R),title:d[e.F].N},t(e.$,n)):l("span",{key:n.k},t(e.P,n))},table:{t:I(oe),i:s.HIGH,l:gn,h:(e,t,n)=>l("table",{key:n.k},l("thead",null,l("tr",null,e.L.map(function(a,i){return l("th",{key:i,style:Q(e,i)},t(a,n))}))),l("tbody",null,e.A.map(function(a,i){return l("tr",{key:i},a.map(function(h,p){return l("td",{key:p,style:Q(e,p)},t(h,n))}))})))},tableSeparator:{t:function(e,t){return t.v?je.exec(e):null},i:s.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:G(tn),i:s.MIN,l:e=>({$:e[0].replace(Ge,(t,n)=>o.namedCodesToUnicode[n]?o.namedCodesToUnicode[n]:t)}),h:e=>e.$},textBolded:{t:b(Je),i:s.MED,l:(e,t,n)=>({$:t(e[2],n)}),h:(e,t,n)=>l("strong",{key:n.k},t(e.$,n))},textEmphasized:{t:b(Ke),i:s.LOW,l:(e,t,n)=>({$:t(e[2],n)}),h:(e,t,n)=>l("em",{key:n.k},t(e.$,n))},textEscaped:{t:b(nn),i:s.HIGH,l:e=>({$:e[1],type:"text"})},textMarked:{t:b(Ye),i:s.LOW,l:N,h:(e,t,n)=>l("mark",{key:n.k},t(e.$,n))},textStrikethroughed:{t:b(en),i:s.LOW,l:N,h:(e,t,n)=>l("del",{key:n.k},t(e.$,n))}};o.disableParsingRawHTML!==!0&&(m.htmlBlock={t:G(D),i:s.HIGH,l(e,t,n){const[,a]=e[3].match(on),i=new RegExp(`^${a}`,"gm"),h=e[3].replace(i,""),p=(x=h,fn.some(y=>y.test(x))?yn:C);var x;const $=e[1].toLowerCase(),v=ye.indexOf($)!==-1;n.Z=n.Z||$==="a";const k=v?e[3]:p(t,h,n);return n.Z=!1,{I:g(e[2]),$:k,G:v,H:v?$:e[1]}},h:(e,t,n)=>l(e.H,O({key:n.k},e.I),e.G?e.$:t(e.$,n))},m.htmlSelfClosing={t:G(F),i:s.HIGH,l:e=>({I:g(e[2]||""),H:e[1]}),h:(e,t,n)=>l(e.H,O({},e.I,{key:n.k}))});const H=function(e){let t=Object.keys(e);function n(a,i){let h=[],p="";for(;a;){let x=0;for(;x<t.length;){const $=t[x],v=e[$],k=v.t(a,i,p);if(k){const y=k[0];a=a.substring(y.length);const _=v.l(k,n,i);_.type==null&&(_.type=$),h.push(_),p=y;break}x++}}return h}return t.sort(function(a,i){let h=e[a].i,p=e[i].i;return h!==p?h-p:a<i?-1:1}),function(a,i){return n(function(h){return h.replace(Se,`
`).replace(Le,"").replace(Pe,"    ")}(a),i)}}(m),S=(L=function(e){return function(t,n,a){return e[t.type].h(t,n,a)}}(m),function e(t,n={}){if(Array.isArray(t)){const a=n.k,i=[];let h=!1;for(let p=0;p<t.length;p++){n.k=p;const x=e(t[p],n),$=typeof x=="string";$&&h?i[i.length-1]+=x:x!==null&&i.push(x),h=$}return n.k=a,i}return L(t,e,n)});var L;const E=f(r);return u.length?l("div",null,E,l("footer",{key:"footer"},u.map(function(e){return l("div",{id:o.slugify(e.B),key:e.B},e.B,S(H(e.O,{_:!0})))}))):E}(function(r){r[r.MAX=0]="MAX",r[r.HIGH=1]="HIGH",r[r.MED=2]="MED",r[r.LOW=3]="LOW",r[r.MIN=4]="MIN"})(s||(s={}));const vn=r=>{let{children:o,options:c}=r,l=function(f,g){if(f==null)return{};var u,d,m={},H=Object.keys(f);for(d=0;d<H.length;d++)g.indexOf(u=H[d])>=0||(m[u]=f[u]);return m}(r,ke);return w.cloneElement(xn(o,c),l)};export{vn as P};
//# sourceMappingURL=index.modern-19ef23af.js.map