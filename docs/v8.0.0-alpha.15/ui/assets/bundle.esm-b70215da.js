import{r}from"./index-f1f2c4b1.js";function S(e,u){var n=r.useRef(null),c=r.useRef(null);c.current=u;var t=r.useRef(null);r.useEffect(function(){a()});var a=r.useCallback(function(){var i=t.current,o=c.current,f=i||(o?o instanceof Element?o:o.current:null);n.current&&n.current.element===f&&n.current.subscriber===e||(n.current&&n.current.cleanup&&n.current.cleanup(),n.current={element:f,subscriber:e,cleanup:f?e(f):void 0})},[e]);return r.useEffect(function(){return function(){n.current&&n.current.cleanup&&(n.current.cleanup(),n.current=null)}},[]),r.useCallback(function(i){t.current=i,a()},[a])}function g(e,u,n){return e[u]?e[u][0]?e[u][0][n]:e[u][n]:u==="contentBoxSize"?e.contentRect[n==="inlineSize"?"width":"height"]:void 0}function k(e){e===void 0&&(e={});var u=e.onResize,n=r.useRef(void 0);n.current=u;var c=e.round||Math.round,t=r.useRef(),a=r.useState({width:void 0,height:void 0}),i=a[0],o=a[1],f=r.useRef(!1);r.useEffect(function(){return f.current=!1,function(){f.current=!0}},[]);var d=r.useRef({width:void 0,height:void 0}),h=S(r.useCallback(function(s){return(!t.current||t.current.box!==e.box||t.current.round!==c)&&(t.current={box:e.box,round:c,instance:new ResizeObserver(function(w){var b=w[0],R=e.box==="border-box"?"borderBoxSize":e.box==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",x=g(b,R,"inlineSize"),z=g(b,R,"blockSize"),l=x?c(x):void 0,v=z?c(z):void 0;if(d.current.width!==l||d.current.height!==v){var m={width:l,height:v};d.current.width=l,d.current.height=v,n.current?n.current(m):f.current||o(m)}})}),t.current.instance.observe(s,{box:e.box}),function(){t.current&&t.current.instance.unobserve(s)}},[e.box,c]),e.ref);return r.useMemo(function(){return{ref:h,width:i.width,height:i.height}},[h,i.width,i.height])}export{k as u};
//# sourceMappingURL=bundle.esm-b70215da.js.map
