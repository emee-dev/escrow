"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4040],{5183:function(e,t,n){n.d(t,{Dx:function(){return en},VY:function(){return et},aV:function(){return ee},dk:function(){return er},fC:function(){return J},h_:function(){return $},x8:function(){return eo},xz:function(){return Q}});var r=n(7621),o=n(6013),a=n(164),i=n(6644),l=n(3653),s=n(1351),u=n(1476),d=n(1974),c=n(2932),f=n(5158),p=n(5902),g=n(7690),v=n(74),m=n(1405),b=n(8759),h=n(9571),x="Dialog",[y,D]=(0,i.b)(x),[j,C]=y(x),w=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:a,onOpenChange:i,modal:u=!0}=e,d=r.useRef(null),c=r.useRef(null),[f=!1,p]=(0,s.T)({prop:o,defaultProp:a,onChange:i});return(0,h.jsx)(j,{scope:t,triggerRef:d,contentRef:c,contentId:(0,l.M)(),titleId:(0,l.M)(),descriptionId:(0,l.M)(),open:f,onOpenChange:p,onOpenToggle:r.useCallback(()=>p(e=>!e),[p]),modal:u,children:n})};w.displayName=x;var R="DialogTrigger",I=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,i=C(R,n),l=(0,a.e)(t,i.triggerRef);return(0,h.jsx)(p.WV.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":Z(i.open),...r,ref:l,onClick:(0,o.M)(e.onClick,i.onOpenToggle)})});I.displayName=R;var M="DialogPortal",[N,V]=y(M,{forceMount:void 0}),F=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:a}=e,i=C(M,t);return(0,h.jsx)(N,{scope:t,forceMount:n,children:r.Children.map(o,e=>(0,h.jsx)(f.z,{present:n||i.open,children:(0,h.jsx)(c.h,{asChild:!0,container:a,children:e})}))})};F.displayName=M;var _="DialogOverlay",E=r.forwardRef((e,t)=>{let n=V(_,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=C(_,e.__scopeDialog);return a.modal?(0,h.jsx)(f.z,{present:r||a.open,children:(0,h.jsx)(O,{...o,ref:t})}):null});E.displayName=_;var O=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(_,n);return(0,h.jsx)(v.Z,{as:b.g7,allowPinchZoom:!0,shards:[o.contentRef],children:(0,h.jsx)(p.WV.div,{"data-state":Z(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),k="DialogContent",W=r.forwardRef((e,t)=>{let n=V(k,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=C(k,e.__scopeDialog);return(0,h.jsx)(f.z,{present:r||a.open,children:a.modal?(0,h.jsx)(P,{...o,ref:t}):(0,h.jsx)(T,{...o,ref:t})})});W.displayName=k;var P=r.forwardRef((e,t)=>{let n=C(k,e.__scopeDialog),i=r.useRef(null),l=(0,a.e)(t,n.contentRef,i);return r.useEffect(()=>{let e=i.current;if(e)return(0,m.Ry)(e)},[]),(0,h.jsx)(A,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,o.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,o.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:(0,o.M)(e.onFocusOutside,e=>e.preventDefault())})}),T=r.forwardRef((e,t)=>{let n=C(k,e.__scopeDialog),o=r.useRef(!1),a=r.useRef(!1);return(0,h.jsx)(A,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r,i;null===(r=e.onCloseAutoFocus)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),o.current=!1,a.current=!1},onInteractOutside:t=>{var r,i;null===(r=e.onInteractOutside)||void 0===r||r.call(e,t),t.defaultPrevented||(o.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let l=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(l))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}})}),A=r.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:o,onOpenAutoFocus:i,onCloseAutoFocus:l,...s}=e,c=C(k,n),f=r.useRef(null),p=(0,a.e)(t,f);return(0,g.EW)(),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.M,{asChild:!0,loop:!0,trapped:o,onMountAutoFocus:i,onUnmountAutoFocus:l,children:(0,h.jsx)(u.XB,{role:"dialog",id:c.contentId,"aria-describedby":c.descriptionId,"aria-labelledby":c.titleId,"data-state":Z(c.open),...s,ref:p,onDismiss:()=>c.onOpenChange(!1)})}),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(X,{titleId:c.titleId}),(0,h.jsx)(G,{contentRef:f,descriptionId:c.descriptionId})]})]})}),z="DialogTitle",K=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(z,n);return(0,h.jsx)(p.WV.h2,{id:o.titleId,...r,ref:t})});K.displayName=z;var B="DialogDescription",q=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=C(B,n);return(0,h.jsx)(p.WV.p,{id:o.descriptionId,...r,ref:t})});q.displayName=B;var S="DialogClose",Y=r.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,a=C(S,n);return(0,h.jsx)(p.WV.button,{type:"button",...r,ref:t,onClick:(0,o.M)(e.onClick,()=>a.onOpenChange(!1))})});function Z(e){return e?"open":"closed"}Y.displayName=S;var H="DialogTitleWarning",[L,U]=(0,i.k)(H,{contentName:k,titleName:z,docsSlug:"dialog"}),X=e=>{let{titleId:t}=e,n=U(H),o="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return r.useEffect(()=>{t&&!document.getElementById(t)&&console.error(o)},[o,t]),null},G=e=>{let{contentRef:t,descriptionId:n}=e,o=U("DialogDescriptionWarning"),a="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName,"}.");return r.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(a)},[a,t,n]),null},J=w,Q=I,$=F,ee=E,et=W,en=K,er=q,eo=Y},3004:function(e,t,n){n.d(t,{VY:function(){return _},aV:function(){return V},fC:function(){return N},xz:function(){return F}});var r=n(7621),o=n(6013),a=n(6644),i=n(1535),l=n(5158),s=n(5902),u=n(6091),d=n(1351),c=n(3653),f=n(9571),p="Tabs",[g,v]=(0,a.b)(p,[i.Pc]),m=(0,i.Pc)(),[b,h]=g(p),x=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:o,defaultValue:a,orientation:i="horizontal",dir:l,activationMode:p="automatic",...g}=e,v=(0,u.gm)(l),[m,h]=(0,d.T)({prop:r,onChange:o,defaultProp:a});return(0,f.jsx)(b,{scope:n,baseId:(0,c.M)(),value:m,onValueChange:h,orientation:i,dir:v,activationMode:p,children:(0,f.jsx)(s.WV.div,{dir:v,"data-orientation":i,...g,ref:t})})});x.displayName=p;var y="TabsList",D=r.forwardRef((e,t)=>{let{__scopeTabs:n,loop:r=!0,...o}=e,a=h(y,n),l=m(n);return(0,f.jsx)(i.fC,{asChild:!0,...l,orientation:a.orientation,dir:a.dir,loop:r,children:(0,f.jsx)(s.WV.div,{role:"tablist","aria-orientation":a.orientation,...o,ref:t})})});D.displayName=y;var j="TabsTrigger",C=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:r,disabled:a=!1,...l}=e,u=h(j,n),d=m(n),c=I(u.baseId,r),p=M(u.baseId,r),g=r===u.value;return(0,f.jsx)(i.ck,{asChild:!0,...d,focusable:!a,active:g,children:(0,f.jsx)(s.WV.button,{type:"button",role:"tab","aria-selected":g,"aria-controls":p,"data-state":g?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:c,...l,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():u.onValueChange(r)}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&u.onValueChange(r)}),onFocus:(0,o.M)(e.onFocus,()=>{let e="manual"!==u.activationMode;g||a||!e||u.onValueChange(r)})})})});C.displayName=j;var w="TabsContent",R=r.forwardRef((e,t)=>{let{__scopeTabs:n,value:o,forceMount:a,children:i,...u}=e,d=h(w,n),c=I(d.baseId,o),p=M(d.baseId,o),g=o===d.value,v=r.useRef(g);return r.useEffect(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,f.jsx)(l.z,{present:a||g,children:n=>{let{present:r}=n;return(0,f.jsx)(s.WV.div,{"data-state":g?"active":"inactive","data-orientation":d.orientation,role:"tabpanel","aria-labelledby":c,hidden:!r,id:p,tabIndex:0,...u,ref:t,style:{...e.style,animationDuration:v.current?"0s":void 0},children:r&&i})}})});function I(e,t){return"".concat(e,"-trigger-").concat(t)}function M(e,t){return"".concat(e,"-content-").concat(t)}R.displayName=w;var N=x,V=D,F=C,_=R}}]);