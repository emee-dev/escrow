(()=>{var e={};e.id=1,e.ids=[1],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},6005:e=>{"use strict";e.exports=require("node:crypto")},46:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>p,routeModule:()=>v,tree:()=>d}),r(9692),r(7166),r(2591);var s=r(7639),i=r(8917),a=r(395),n=r.n(a),o=r(2053),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["sse",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9692)),"C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\sse\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1401))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7166)),"C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,2591,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1401))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\sse\\page.tsx"],c="/sse/page",u={require:r,loadChunk:()=>Promise.resolve()},v=new s.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/sse/page",pathname:"/sse",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8321:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,7734,23)),Promise.resolve().then(r.t.bind(r,8113,23)),Promise.resolve().then(r.t.bind(r,7246,23)),Promise.resolve().then(r.t.bind(r,4904,23)),Promise.resolve().then(r.t.bind(r,2013,23)),Promise.resolve().then(r.t.bind(r,7298,23))},4820:(e,t,r)=>{Promise.resolve().then(r.bind(r,9482))},7256:(e,t,r)=>{Promise.resolve().then(r.bind(r,268))},268:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(7214),i=r(2345);let a=()=>{let[e,t]=(0,i.useState)([]),[r,a]=(0,i.useState)("");(0,i.useEffect)(()=>{let e=new EventSource("http://localhost:4560/sse");return e.onmessage=e=>{let r=JSON.parse(e.data);t(e=>[...e,r])},()=>{e.close()}},[]);let n=async e=>{await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sender:e,text:r})}),a("")};return(0,s.jsxs)("div",{children:[s.jsx("div",{children:e.map((e,t)=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("strong",{children:[10===e.sender?"You":"Friend",":"]})," ",e.text]},t))}),s.jsx("input",{type:"text",value:r,onChange:e=>a(e.target.value),placeholder:"Type your message"}),s.jsx("button",{onClick:()=>n(10),children:"Send as You"}),s.jsx("button",{onClick:()=>n(20),children:"Send as Friend"})]})}},8665:(e,t,r)=>{"use strict";r.d(t,{B:()=>s});let s=(0,r(7794).U)(e=>({group:null,participant:null,roomId:void 0,visitorId:void 0,setGroup:t=>e({group:t}),setParticipant:t=>e({participant:t}),setRoomId:t=>e({roomId:t}),setVisitorId:t=>e({visitorId:t})}))},9482:(e,t,r)=>{"use strict";r.d(t,{default:()=>p});var s=r(7214),i=r(8665),a=r(8697),n=r(2024),o=r(2345),l=r(9270);let d=new a.Zj("https://qualified-gerbil-72.convex.cloud"),p=({children:e})=>{let t=(0,i.B)();return(0,o.useEffect)(()=>{(async function(){if(l.Ym){let{ClientJS:e}=await r.e(773).then(r.t.bind(r,9773,19)),s=new e().getFingerprint();console.log("visitorId: ",s),t.setVisitorId(s)}})()},[]),s.jsx(a.P9,{client:d,children:(0,s.jsxs)(n.EZ,{debug:!0,developerKey:"kuu5va2w1ci7ov9xxa37f26kakj3wp",group:t.group,participant:t.participant,roomId:t.roomId,stopAutoStart:!0,onParticipantJoined:e=>{console.log("Participant joined",e)},children:[e,s.jsx(n.Z7,{})]})})}},7166:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p,metadata:()=>d});var s=r(6253),i=r(5192),a=r.n(i),n=r(4200),o=r.n(n);r(5544);let l=(0,r(1510).createProxy)(String.raw`C:\Users\DELL\Desktop\Superviz Hackathon\escrow_service\ui\provider\index.tsx#default`),d={title:"Create Next App",description:"Generated by create next app"};function p({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${a().variable} ${o().variable} antialiased`,children:s.jsx(l,{children:e})})})}},9692:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(1510).createProxy)(String.raw`C:\Users\DELL\Desktop\Superviz Hackathon\escrow_service\ui\app\sse\page.tsx#default`)},1401:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var s=r(8096);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5544:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[496,508,96],()=>r(46));module.exports=s})();