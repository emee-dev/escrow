(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},1764:e=>{"use strict";e.exports=require("util")},6005:e=>{"use strict";e.exports=require("node:crypto")},5285:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(3472),r(7166),r(2591);var s=r(7639),a=r(8917),i=r(395),n=r.n(i),o=r(2053),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let d=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3472)),"C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1401))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,7166)),"C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,2591,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,1401))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\DELL\\Desktop\\Superviz Hackathon\\escrow_service\\ui\\app\\page.tsx"],u="/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8321:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,7734,23)),Promise.resolve().then(r.t.bind(r,8113,23)),Promise.resolve().then(r.t.bind(r,7246,23)),Promise.resolve().then(r.t.bind(r,4904,23)),Promise.resolve().then(r.t.bind(r,2013,23)),Promise.resolve().then(r.t.bind(r,7298,23))},4820:(e,t,r)=>{Promise.resolve().then(r.bind(r,9482))},1573:(e,t,r)=>{Promise.resolve().then(r.bind(r,3414))},1110:(e,t,r)=>{"use strict";r.d(t,{h:()=>s});let s=r(9477).qL},3414:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eU});var s=r(7214),a=r(4519),i=r(2345),n=r(9800),o=r(7738),l=r(4230),d=r(618),c=r(547),u=r(2337),p=r(8201),m=r(8202),f=r(6664),x=r(4608),g=r(9017),h=r(4432),v=r(2450),b=r(2176),j="Dialog",[y,w]=(0,l.b)(j),[N,_]=y(j),I=e=>{let{__scopeDialog:t,children:r,open:a,defaultOpen:n,onOpenChange:o,modal:l=!0}=e,u=i.useRef(null),p=i.useRef(null),[m=!1,f]=(0,c.T)({prop:a,defaultProp:n,onChange:o});return(0,s.jsx)(N,{scope:t,triggerRef:u,contentRef:p,contentId:(0,d.M)(),titleId:(0,d.M)(),descriptionId:(0,d.M)(),open:m,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(e=>!e),[f]),modal:l,children:r})};I.displayName=j;var R="DialogTrigger",D=i.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,i=_(R,r),l=(0,o.e)(t,i.triggerRef);return(0,s.jsx)(x.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":G(i.open),...a,ref:l,onClick:(0,n.M)(e.onClick,i.onOpenToggle)})});D.displayName=R;var P="DialogPortal",[C,k]=y(P,{forceMount:void 0}),E=e=>{let{__scopeDialog:t,forceMount:r,children:a,container:n}=e,o=_(P,t);return(0,s.jsx)(C,{scope:t,forceMount:r,children:i.Children.map(a,e=>(0,s.jsx)(f.z,{present:r||o.open,children:(0,s.jsx)(m.h,{asChild:!0,container:n,children:e})}))})};E.displayName=P;var z="DialogOverlay",T=i.forwardRef((e,t)=>{let r=k(z,e.__scopeDialog),{forceMount:a=r.forceMount,...i}=e,n=_(z,e.__scopeDialog);return n.modal?(0,s.jsx)(f.z,{present:a||n.open,children:(0,s.jsx)(M,{...i,ref:t})}):null});T.displayName=z;var M=i.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,i=_(z,r);return(0,s.jsx)(h.Z,{as:b.g7,allowPinchZoom:!0,shards:[i.contentRef],children:(0,s.jsx)(x.WV.div,{"data-state":G(i.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),F="DialogContent",A=i.forwardRef((e,t)=>{let r=k(F,e.__scopeDialog),{forceMount:a=r.forceMount,...i}=e,n=_(F,e.__scopeDialog);return(0,s.jsx)(f.z,{present:a||n.open,children:n.modal?(0,s.jsx)(S,{...i,ref:t}):(0,s.jsx)(V,{...i,ref:t})})});A.displayName=F;var S=i.forwardRef((e,t)=>{let r=_(F,e.__scopeDialog),a=i.useRef(null),l=(0,o.e)(t,r.contentRef,a);return i.useEffect(()=>{let e=a.current;if(e)return(0,v.Ry)(e)},[]),(0,s.jsx)($,{...e,ref:l,trapFocus:r.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,n.M)(e.onCloseAutoFocus,e=>{e.preventDefault(),r.triggerRef.current?.focus()}),onPointerDownOutside:(0,n.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,r=0===t.button&&!0===t.ctrlKey;(2===t.button||r)&&e.preventDefault()}),onFocusOutside:(0,n.M)(e.onFocusOutside,e=>e.preventDefault())})}),V=i.forwardRef((e,t)=>{let r=_(F,e.__scopeDialog),a=i.useRef(!1),n=i.useRef(!1);return(0,s.jsx)($,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(a.current||r.triggerRef.current?.focus(),t.preventDefault()),a.current=!1,n.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(a.current=!0,"pointerdown"!==t.detail.originalEvent.type||(n.current=!0));let s=t.target;r.triggerRef.current?.contains(s)&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&n.current&&t.preventDefault()}})}),$=i.forwardRef((e,t)=>{let{__scopeDialog:r,trapFocus:a,onOpenAutoFocus:n,onCloseAutoFocus:l,...d}=e,c=_(F,r),m=i.useRef(null),f=(0,o.e)(t,m);return(0,g.EW)(),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.M,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:n,onUnmountAutoFocus:l,children:(0,s.jsx)(u.XB,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":G(c.open),...d,ref:f,onDismiss:()=>c.onOpenChange(!1)})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(X,{titleId:c.titleId}),(0,s.jsx)(Y,{contentRef:m,descriptionId:c.descriptionId})]})]})}),O="DialogTitle",U=i.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,i=_(O,r);return(0,s.jsx)(x.WV.h2,{id:i.titleId,...a,ref:t})});U.displayName=O;var q="DialogDescription",L=i.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,i=_(q,r);return(0,s.jsx)(x.WV.p,{id:i.descriptionId,...a,ref:t})});L.displayName=q;var W="DialogClose",B=i.forwardRef((e,t)=>{let{__scopeDialog:r,...a}=e,i=_(W,r);return(0,s.jsx)(x.WV.button,{type:"button",...a,ref:t,onClick:(0,n.M)(e.onClick,()=>i.onOpenChange(!1))})});function G(e){return e?"open":"closed"}B.displayName=W;var H="DialogTitleWarning",[K,Z]=(0,l.k)(H,{contentName:F,titleName:O,docsSlug:"dialog"}),X=({titleId:e})=>{let t=Z(H),r=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return i.useEffect(()=>{e&&!document.getElementById(e)&&console.error(r)},[r,e]),null},Y=({contentRef:e,descriptionId:t})=>{let r=Z("DialogDescriptionWarning"),s=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${r.contentName}}.`;return i.useEffect(()=>{let r=e.current?.getAttribute("aria-describedby");t&&r&&!document.getElementById(t)&&console.warn(s)},[s,e,t]),null},J=r(4695),Q=r(9543);let ee=i.forwardRef(({className:e,...t},r)=>s.jsx(T,{ref:r,className:(0,Q.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));ee.displayName=T.displayName;let et=i.forwardRef(({className:e,children:t,...r},a)=>(0,s.jsxs)(E,{children:[s.jsx(ee,{}),(0,s.jsxs)(A,{ref:a,className:(0,Q.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...r,children:[t,(0,s.jsxs)(B,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[s.jsx(J.Pxu,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));et.displayName=A.displayName;let er=({className:e,...t})=>s.jsx("div",{className:(0,Q.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});er.displayName="DialogHeader";let es=i.forwardRef(({className:e,...t},r)=>s.jsx(U,{ref:r,className:(0,Q.cn)("text-lg font-semibold leading-none tracking-tight",e),...t}));es.displayName=U.displayName;let ea=i.forwardRef(({className:e,...t},r)=>s.jsx(L,{ref:r,className:(0,Q.cn)("text-sm text-muted-foreground",e),...t}));ea.displayName=L.displayName;var ei=r(3911),en=r(1952);let eo=i.forwardRef(({className:e,...t},r)=>s.jsx("div",{className:"relative w-full overflow-auto",children:s.jsx("table",{ref:r,className:(0,Q.cn)("w-full caption-bottom text-sm",e),...t})}));eo.displayName="Table";let el=i.forwardRef(({className:e,...t},r)=>s.jsx("thead",{ref:r,className:(0,Q.cn)("[&_tr]:border-b",e),...t}));el.displayName="TableHeader";let ed=i.forwardRef(({className:e,...t},r)=>s.jsx("tbody",{ref:r,className:(0,Q.cn)("[&_tr:last-child]:border-0",e),...t}));ed.displayName="TableBody",i.forwardRef(({className:e,...t},r)=>s.jsx("tfoot",{ref:r,className:(0,Q.cn)("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t})).displayName="TableFooter";let ec=i.forwardRef(({className:e,...t},r)=>s.jsx("tr",{ref:r,className:(0,Q.cn)("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",e),...t}));ec.displayName="TableRow";let eu=i.forwardRef(({className:e,...t},r)=>s.jsx("th",{ref:r,className:(0,Q.cn)("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));eu.displayName="TableHead";let ep=i.forwardRef(({className:e,...t},r)=>s.jsx("td",{ref:r,className:(0,Q.cn)("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",e),...t}));ep.displayName="TableCell",i.forwardRef(({className:e,...t},r)=>s.jsx("caption",{ref:r,className:(0,Q.cn)("mt-4 text-sm text-muted-foreground",e),...t})).displayName="TableCaption";var em=r(2727),ef=r(7609),ex="Tabs",[eg,eh]=(0,l.b)(ex,[em.Pc]),ev=(0,em.Pc)(),[eb,ej]=eg(ex),ey=i.forwardRef((e,t)=>{let{__scopeTabs:r,value:a,onValueChange:i,defaultValue:n,orientation:o="horizontal",dir:l,activationMode:u="automatic",...p}=e,m=(0,ef.gm)(l),[f,g]=(0,c.T)({prop:a,onChange:i,defaultProp:n});return(0,s.jsx)(eb,{scope:r,baseId:(0,d.M)(),value:f,onValueChange:g,orientation:o,dir:m,activationMode:u,children:(0,s.jsx)(x.WV.div,{dir:m,"data-orientation":o,...p,ref:t})})});ey.displayName=ex;var ew="TabsList",eN=i.forwardRef((e,t)=>{let{__scopeTabs:r,loop:a=!0,...i}=e,n=ej(ew,r),o=ev(r);return(0,s.jsx)(em.fC,{asChild:!0,...o,orientation:n.orientation,dir:n.dir,loop:a,children:(0,s.jsx)(x.WV.div,{role:"tablist","aria-orientation":n.orientation,...i,ref:t})})});eN.displayName=ew;var e_="TabsTrigger",eI=i.forwardRef((e,t)=>{let{__scopeTabs:r,value:a,disabled:i=!1,...o}=e,l=ej(e_,r),d=ev(r),c=eP(l.baseId,a),u=eC(l.baseId,a),p=a===l.value;return(0,s.jsx)(em.ck,{asChild:!0,...d,focusable:!i,active:p,children:(0,s.jsx)(x.WV.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":u,"data-state":p?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:c,...o,ref:t,onMouseDown:(0,n.M)(e.onMouseDown,e=>{i||0!==e.button||!1!==e.ctrlKey?e.preventDefault():l.onValueChange(a)}),onKeyDown:(0,n.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&l.onValueChange(a)}),onFocus:(0,n.M)(e.onFocus,()=>{let e="manual"!==l.activationMode;p||i||!e||l.onValueChange(a)})})})});eI.displayName=e_;var eR="TabsContent",eD=i.forwardRef((e,t)=>{let{__scopeTabs:r,value:a,forceMount:n,children:o,...l}=e,d=ej(eR,r),c=eP(d.baseId,a),u=eC(d.baseId,a),p=a===d.value,m=i.useRef(p);return i.useEffect(()=>{let e=requestAnimationFrame(()=>m.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.jsx)(f.z,{present:n||p,children:({present:r})=>(0,s.jsx)(x.WV.div,{"data-state":p?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":c,hidden:!r,id:u,tabIndex:0,...l,ref:t,style:{...e.style,animationDuration:m.current?"0s":void 0},children:r&&o})})});function eP(e,t){return`${e}-trigger-${t}`}function eC(e,t){return`${e}-content-${t}`}eD.displayName=eR;let ek=i.forwardRef(({className:e,...t},r)=>s.jsx(eN,{ref:r,className:(0,Q.cn)("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",e),...t}));ek.displayName=eN.displayName;let eE=i.forwardRef(({className:e,...t},r)=>s.jsx(eI,{ref:r,className:(0,Q.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",e),...t}));eE.displayName=eI.displayName;let ez=i.forwardRef(({className:e,...t},r)=>s.jsx(eD,{ref:r,className:(0,Q.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));ez.displayName=eD.displayName;var eT=r(8551),eM=r(8665),eF=r(9731),eA=r(1110),eS=r(8697),eV=r(5164),e$=r(6375),eO=r(6800);function eU(){let e=(0,eM.B)(),{results:t,isLoading:r,loadMore:i,status:n}=(0,eS.NE)(eA.h.escrow.listEscrowRooms,e.visitorId?{visitorId:e.visitorId}:"skip",{initialNumItems:5}),{results:o,isLoading:l,loadMore:d,status:c}=(0,eS.NE)(eA.h.dispute.listDisputeRooms,e.visitorId?{visitorId:e.visitorId}:"skip",{initialNumItems:5});return(0,s.jsxs)("div",{className:"flex flex-col min-h-screen",children:[s.jsx("header",{className:"border-b",children:s.jsx("div",{className:"container mx-auto px-4",children:(0,s.jsxs)("div",{className:"flex justify-between items-center h-16",children:[s.jsx("h1",{className:"text-xl font-semibold",children:"Escrow Management System"}),s.jsx(eL,{})]})})}),s.jsx("main",{className:"flex-grow container mx-auto mt-9 px-4 py-8",children:(0,s.jsxs)(ey,{defaultValue:"escrows",className:"w-full max-w-4xl mx-auto",children:[(0,s.jsxs)(ek,{className:"grid w-full grid-cols-2",children:[s.jsx(eE,{value:"escrows",children:"Escrows"}),s.jsx(eE,{value:"disputes",children:"Disputes"})]}),s.jsx(ez,{value:"escrows",children:(0,s.jsxs)(eo,{children:[s.jsx(el,{children:(0,s.jsxs)(ec,{children:[s.jsx(eu,{children:"ID"}),s.jsx(eu,{children:"Title"}),s.jsx(eu,{children:"Status"}),s.jsx(eu,{children:"Action"})]})}),s.jsx(ed,{children:t&&t.map(e=>(0,s.jsxs)(ec,{children:[s.jsx(ep,{children:e._id}),(0,s.jsxs)(ep,{children:["$ ",e.amount," - ",e.asset]}),s.jsx(ep,{children:e.payment_status}),s.jsx(ep,{children:s.jsx(a.z,{variant:"outline",size:"sm",children:"BTN"})})]},e._id))})]})}),s.jsx(ez,{value:"disputes",children:(0,s.jsxs)(eo,{children:[s.jsx(el,{children:(0,s.jsxs)(ec,{children:[s.jsx(eu,{children:"ID"}),s.jsx(eu,{children:"Status"}),s.jsx(eu,{children:"Escrow Id"}),s.jsx(eu,{children:"Action"})]})}),s.jsx(ed,{children:o&&o.map(e=>(0,s.jsxs)(ec,{children:[s.jsx(ep,{children:e._id}),s.jsx(ep,{children:e.disputeStatus}),s.jsx(ep,{children:e.escrowRoomId}),s.jsx(ep,{children:s.jsx(a.z,{variant:"outline",size:"sm",children:"BTN"})})]},e._id))})]})})]})})]})}let eq=eO.z.object({username:eO.z.string().min(2,{message:"Username must be at least 2 characters."}),amount_to_recieve:eO.z.string(),asset_to_recieve:eO.z.string(),terms:eO.z.string()});function eL(){let e=(0,eM.B)(),t=(0,eV.useRouter)(),r=(0,eS.Db)(eA.h.escrow.createEscrowRoom),i=(0,e$.cI)({resolver:(0,eF.F)(eq),defaultValues:{username:"",amount_to_recieve:"10",asset_to_recieve:"USDT",terms:""}});async function n(s){try{if(!e.visitorId){console.log("Could not find visitorId");return}let a=(0,Q.Ox)(),i={id:`group-${a}`,name:`group-${a}`},n={id:`participant-${e.visitorId}`,name:`participant-${s.username}`};e.setGroup(i),e.setRoomId(a),e.setParticipant(n),await r({roomId:a,groupId:i.id,payment_status:"default",terms:s.terms,creator:{username:s.username,visitorId:e.visitorId},amount:s.amount_to_recieve,asset:s.asset_to_recieve}),t.push(`/room?roomId=${a}&groupId=${i.id}`)}catch(e){console.error("Failed to create room: ",e)}}return(0,s.jsxs)(I,{children:[s.jsx(D,{asChild:!0,children:s.jsx(a.z,{variant:"default",children:"Create Escrow"})}),s.jsx(et,{className:"sm:max-w-[425px]",children:(0,s.jsxs)(er,{children:[s.jsx(es,{children:"Create New Escrow"}),s.jsx(ea,{children:"Set up an escrow to securely transfer funds or assets."}),(0,s.jsxs)("form",{className:"grid gap-4",onSubmit:i.handleSubmit(n),children:[(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(en._,{htmlFor:"user_name",children:"Username"}),s.jsx(ei.I,{id:"user_name",type:"text",placeholder:"Your username",...i.register("username")})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(en._,{htmlFor:"amount",children:"Amount to recieve"}),s.jsx(ei.I,{id:"amount",type:"number",placeholder:"0.00",...i.register("amount_to_recieve")})]})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(en._,{htmlFor:"token-types",children:"Asset to recieve"}),s.jsx(ei.I,{id:"asset",type:"text",value:"USDT",placeholder:"Tether (USDT)",...i.register("asset_to_recieve")})]}),(0,s.jsxs)("div",{className:"space-y-2",children:[s.jsx(en._,{htmlFor:"terms",children:"Additional Terms"}),s.jsx(eT.g,{id:"terms",rows:2,...i.register("terms"),placeholder:"Enter any additional terms or conditions..."})]}),s.jsx(a.z,{type:"submit",className:"ml-auto",children:"Create Escrow"})]})]})})]})}},4519:(e,t,r)=>{"use strict";r.d(t,{z:()=>d});var s=r(7214),a=r(2345),i=r(2176),n=r(6232),o=r(9543);let l=(0,n.j)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...n},d)=>{let c=a?i.g7:"button";return s.jsx(c,{className:(0,o.cn)(l({variant:t,size:r,className:e})),ref:d,...n})});d.displayName="Button"},3911:(e,t,r)=>{"use strict";r.d(t,{I:()=>n});var s=r(7214),a=r(2345),i=r(9543);let n=a.forwardRef(({className:e,type:t,...r},a)=>s.jsx("input",{type:t,className:(0,i.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:a,...r}));n.displayName="Input"},1952:(e,t,r)=>{"use strict";r.d(t,{_:()=>d});var s=r(7214),a=r(2345),i=r(5231),n=r(6232),o=r(9543);let l=(0,n.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),d=a.forwardRef(({className:e,...t},r)=>s.jsx(i.f,{ref:r,className:(0,o.cn)(l(),e),...t}));d.displayName=i.f.displayName},8551:(e,t,r)=>{"use strict";r.d(t,{g:()=>n});var s=r(7214),a=r(2345),i=r(9543);let n=a.forwardRef(({className:e,...t},r)=>s.jsx("textarea",{className:(0,i.cn)("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",e),ref:r,...t}));n.displayName="Textarea"},8665:(e,t,r)=>{"use strict";r.d(t,{B:()=>s});let s=(0,r(7794).U)(e=>({group:null,participant:null,roomId:void 0,visitorId:void 0,setGroup:t=>e({group:t}),setParticipant:t=>e({participant:t}),setRoomId:t=>e({roomId:t}),setVisitorId:t=>e({visitorId:t})}))},9543:(e,t,r)=>{"use strict";r.d(t,{CG:()=>l,Ox:()=>d,PE:()=>o,cn:()=>n});var s=r(8742),a=r(7775),i=r(1758);function n(...e){return(0,i.m6)((0,s.W)(e))}let o=e=>new Promise((t,r)=>{let s=new FileReader;s.onload=()=>{t(s.result)},s.onerror=e=>{r(Error(`Error reading file: ${e}`))},s.readAsDataURL(e)}),l=async(e=null,t)=>{let r=await Promise.all(t.map(async(e,t)=>({imageUrl:{url:e.base64,detail:""},type:"image_url"})));return r.length>0&&(r[0].imageUrl.detail=void 0,r[r.length-1].imageUrl.detail=e),{content:r[0],role:"user"}},d=(0,a.kP)("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",8)},9482:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(7214),a=r(8665),i=r(8697),n=r(2024),o=r(2345),l=r(9270);let d=new i.Zj("https://qualified-gerbil-72.convex.cloud"),c=({children:e})=>{let t=(0,a.B)();return(0,o.useEffect)(()=>{(async function(){if(l.Ym){let{ClientJS:e}=await r.e(773).then(r.t.bind(r,9773,19)),s=new e().getFingerprint();console.log("visitorId: ",s),t.setVisitorId(s)}})()},[]),s.jsx(i.P9,{client:d,children:(0,s.jsxs)(n.EZ,{debug:!0,developerKey:"kuu5va2w1ci7ov9xxa37f26kakj3wp",group:t.group,participant:t.participant,roomId:t.roomId,stopAutoStart:!0,onParticipantJoined:e=>{console.log("Participant joined",e)},children:[e,s.jsx(n.Z7,{})]})})}},7166:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c,metadata:()=>d});var s=r(6253),a=r(5192),i=r.n(a),n=r(4200),o=r.n(n);r(5544);let l=(0,r(1510).createProxy)(String.raw`C:\Users\DELL\Desktop\Superviz Hackathon\escrow_service\ui\provider\index.tsx#default`),d={title:"Create Next App",description:"Generated by create next app"};function c({children:e}){return s.jsx("html",{lang:"en",children:s.jsx("body",{className:`${i().variable} ${o().variable} antialiased`,children:s.jsx(l,{children:e})})})}},3472:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(1510).createProxy)(String.raw`C:\Users\DELL\Desktop\Superviz Hackathon\escrow_service\ui\app\page.tsx#default`)},1401:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(8096);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5544:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[496,508,96,324,947,877],()=>r(5285));module.exports=s})();