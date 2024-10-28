(()=>{var e={};e.id=261,e.ids=[261],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},6005:e=>{"use strict";e.exports=require("node:crypto")},603:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),r(2365),r(7166),r(2591);var s=r(7639),a=r(8917),o=r(395),i=r.n(o),n=r(2053),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c=["",{children:["room",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,2365)),"C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\room\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1401))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7166)),"C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,2591,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1401))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\room\\page.tsx"],p="/room/page",u={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/room/page",pathname:"/room",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6463:(e,t,r)=>{Promise.resolve().then(r.bind(r,5701))},5701:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var s=r(7214),a=r(4519),o=r(4748),i=r(8665),n=r(1110),l=r(2345);let c=function(e=2e3){let[t,r]=(0,l.useState)(!1);return{copied:t,copyToClipboard:async e=>{try{await navigator.clipboard.writeText(e),r(!0)}catch(e){console.error("Failed to copy text: ",e),r(!1)}}}};var d=r(3012),p=r(8697),u=r(2686),m=r(1964);let x=(0,r(7435).Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var h=r(9544),f=r(5164);function g({searchParams:e}){let t=e.roomId,r=e.groupId,[a,o]=(0,l.useState)(!1),i=(0,p.aM)(n.h.escrow.getRoomStatus,r&&t?{groupId:r,roomId:t}:"skip");return(0,s.jsxs)("main",{className:"w-screen h-screen",children:[s.jsx(j,{}),(0,s.jsxs)("div",{className:" h-full flex flex-col pt-10 items-center bg-gradient-to-r from-blue-100 to-purple-100",children:[i&&i.data?.payment_status==="pending"&&s.jsx(v,{roomId:t,groupId:r,startEscrow:a,initialTimeInSeconds:25}),!i||i.data?.payment_status==="default"&&s.jsx("div",{children:"There is nothing to show for now."})]})]})}function v(e){let t=(0,f.useRouter)(),r=(0,i.B)(),[c,d]=(0,l.useState)(25),[x,h]=(0,l.useState)(!1),g=(0,p.Db)(n.h.dispute.createDisputeRoom),v=async()=>{try{if(!e.roomId||!e.groupId||!r.visitorId){console.log("roomId and groupId are undefined.");return}await g({roomId:e.roomId,creator:r.visitorId}),t.push(`/dispute?roomId=${e.roomId}&groupId=${e.groupId}&userType=creator`)}catch(e){console.error(e)}};return(0,s.jsxs)(o.Zb,{className:"w-full max-w-md",children:[s.jsx(o.Ol,{children:s.jsx(o.ll,{className:"text-2xl font-bold text-center",children:"Escrow Service"})}),(0,s.jsxs)(o.aY,{className:"text-center",children:[s.jsx(u.Z,{className:"w-16 h-16 mx-auto mb-4 text-blue-500 animate-pulse"}),s.jsx("p",{className:"text-xl mb-4",children:"Hold on, waiting for user to pay"}),s.jsx("div",{className:"text-4xl font-bold mb-4","aria-live":"polite",children:`${Math.floor(c/60).toString().padStart(2,"0")}:${(c%60).toString().padStart(2,"0")}`}),x&&(0,s.jsxs)("p",{className:"text-red-500 flex items-center justify-center",children:[s.jsx(m.Z,{className:"w-5 h-5 mr-2"}),"Payment time has expired"]})]}),s.jsx(o.eW,{className:"flex justify-center",children:s.jsx(a.z,{onClick:async()=>v(),disabled:!x,className:"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200",children:"Initiate Dispute"})})]})}function j(){let{toast:e}=(0,d.pm)(),t=(0,f.useSearchParams)(),{copied:r,copyToClipboard:o}=c(),i=(0,l.useCallback)(()=>{console.log("Close button clicked")},[]);return s.jsx("div",{className:"sticky top-0 px-3 z-50 w-full border-b bg-background/95  backdrop-blur supports-[backdrop-filter]:bg-background/60",children:(0,s.jsxs)("div",{className:"flex h-14 items-center",children:[s.jsx("div",{className:"hidden md:flex flex-1",children:s.jsx("a",{className:" flex items-center space-x-2",href:"/",children:s.jsx("span",{className:"hidden font-bold sm:inline-block",children:"Escrow"})})}),s.jsx("div",{className:"flex items-center space-x-2 md:justify-end",children:(0,s.jsxs)("nav",{className:"flex items-center space-x-2",children:[(0,s.jsxs)(a.z,{size:"sm",variant:"outline",onClick:()=>{let e=t.get("roomId"),r=t.get("groupId");o(`${location.origin}/join-room?roomId=${e}&groupId=${r}`)},children:[s.jsx("span",{className:"sr-only",children:"Copy Invite URL"}),s.jsx(x,{className:"h-4 w-4"}),!r&&s.jsx("span",{children:"Copy Invite URL"}),r&&s.jsx("span",{children:"URL Copied!!"})]}),(0,s.jsxs)(a.z,{variant:"outline",size:"sm",className:"",onClick:i,children:[s.jsx("span",{className:"sr-only",children:"Close"}),s.jsx(h.Z,{className:"h-4 w-4"}),s.jsx("span",{className:"",children:"Close"})]})]})})]})})}},2365:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(1510).createProxy)(String.raw`C:\Users\DELL\Desktop\Superviz Hackathon\escrow_service\ui\app\room\page.tsx#default`)}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[496,508,96,324,768],()=>r(603));module.exports=s})();