import{j as e,a as l}from"./jsx-runtime-0f39435c.js";import{s as c}from"./index-d475d2ea.js";import{r as a}from"./index-6f814c40.js";import{e as p}from"./index-5a529529.js";import"./Sidebar-d535dffb.js";import"./panel-36ec9dab.js";import"./preview-531174bb.js";import"./index-f8624f6f.js";const{setInterval:h}=c,x={fullScreen:["F"],togglePanel:["A"],panelPosition:["D"],toggleNav:["S"],toolbar:["T"],search:["/"],focusNav:["1"],focusIframe:["2"],focusPanel:["3"],prevComponent:["alt","ArrowUp"],nextComponent:["alt","ArrowDown"],prevStory:["alt","ArrowLeft"],nextStory:["alt","ArrowRight"],shortcutsPage:["ctrl","shift",","],aboutPage:[","],escape:["escape"],collapseAll:["ctrl","shift","ArrowUp"],expandAll:["ctrl","shift","ArrowDown"],remount:["alt","R"]},_={test1:{title:"Test 1",render:({active:t,key:o})=>t?e("div",{id:"test1",children:"TEST 1"},o):null},test2:{title:"Test 2",render:({active:t,key:o})=>t?e("div",{id:"test2",children:"TEST 2"},o):null}},d=p.div(({color:t})=>({background:t||"hotpink",position:"absolute",top:0,right:0,bottom:0,left:0,width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",overflow:"hidden"}));class r extends a.Component{constructor(){super(...arguments),this.state={count:1}}componentDidMount(){this.interval=h(()=>{const{count:o}=this.state;this.setState({count:o+1})},1e3)}componentWillUnmount(){const{interval:o}=this;clearInterval(o)}render(){const{children:o,color:s}=this.props,{count:i}=this.state;return l(d,{color:s,children:[e("h2",{"data-chromatic":"ignore",style:{position:"absolute",bottom:0,right:0,color:"rgba(0,0,0,0.2)",fontSize:"150px",lineHeight:"150px",margin:"-20px"},children:i}),o]})}}const u=t=>e(r,{color:"hotpink",children:e("pre",{children:JSON.stringify(t,null,2)})}),m=t=>e(r,{color:"deepskyblue",children:e("pre",{children:JSON.stringify(t,null,2)})}),g=t=>e(r,{color:"orangered",children:e("pre",{children:JSON.stringify(t,null,2)})}),n=t=>e(r,{color:"cyan",children:e("pre",{children:JSON.stringify(t,null,2)})}),A={Sidebar:u,Preview:m,Panel:g,Notifications:()=>null,pages:[],options:{isFullscreen:!1,showNav:!0,showPanel:!0,panelPosition:"right",showToolbar:!0,initialActive:"canvas",showTabs:!0},viewMode:"story",panelCount:2,width:900,height:600};try{n.displayName="MockPage",n.__docgenInfo={description:"",displayName:"MockPage",props:{}}}catch{}export{n as M,A as m,_ as p,x as s};
//# sourceMappingURL=app.mockdata-7991a323.js.map