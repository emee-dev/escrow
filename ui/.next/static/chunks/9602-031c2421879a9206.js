"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9602],{1405:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,u={},i=0,a=function(e){return e&&(e.host||a(e.parentNode))},c=function(e,t,n,c){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=a(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});u[n]||(u[n]=new WeakMap);var s=u[n],d=[],f=new Set,v=new Set(l),m=function(e){!e||f.has(e)||(f.add(e),m(e.parentNode))};l.forEach(m);var p=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(f.has(e))p(e);else try{var t=e.getAttribute(c),u=null!==t&&"false"!==t,i=(r.get(e)||0)+1,a=(s.get(e)||0)+1;r.set(e,i),s.set(e,a),d.push(e),1===i&&u&&o.set(e,!0),1===a&&e.setAttribute(n,"true"),u||e.setAttribute(c,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return p(t),f.clear(),i++,function(){d.forEach(function(e){var t=r.get(e)-1,u=s.get(e)-1;r.set(e,t),s.set(e,u),t||(o.has(e)||e.removeAttribute(c),o.delete(e)),u||e.removeAttribute(n)}),--i||(r=new WeakMap,r=new WeakMap,o=new WeakMap,u={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),c(r,o,n,"aria-hidden")):function(){return null}}},74:function(e,t,n){n.d(t,{Z:function(){return Z}});var r,o,u,i,a,c,l,s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var f=n(7621),v="right-scroll-bar-position",m="width-before-scroll-bar";function p(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var h="undefined"!=typeof window?f.useLayoutEffect:f.useEffect,y=new WeakMap,g=(void 0===o&&(o={}),(void 0===u&&(u=function(e){return e}),i=[],a=!1,c={read:function(){if(a)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return i.length?i[i.length-1]:null},useMedium:function(e){var t=u(e,a);return i.push(t),function(){i=i.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(a=!0;i.length;){var t=i;i=[],t.forEach(e)}i={push:function(t){return e(t)},filter:function(){return i}}},assignMedium:function(e){a=!0;var t=[];if(i.length){var n=i;i=[],n.forEach(e),t=i}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),i={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),i}}}}).options=s({async:!0,ssr:!1},o),c),b=function(){},E=f.forwardRef(function(e,t){var n,r,o,u,i=f.useRef(null),a=f.useState({onScrollCapture:b,onWheelCapture:b,onTouchMoveCapture:b}),c=a[0],l=a[1],v=e.forwardProps,m=e.children,E=e.className,w=e.removeScrollBar,C=e.enabled,N=e.shards,M=e.sideCar,S=e.noIsolation,R=e.inert,x=e.allowPinchZoom,T=e.as,L=e.gapMode,A=d(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),P=(n=[i,t],r=function(e){return n.forEach(function(t){return p(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,u=o.facade,h(function(){var e=y.get(u);if(e){var t=new Set(e),r=new Set(n),o=u.current;t.forEach(function(e){r.has(e)||p(e,null)}),r.forEach(function(e){t.has(e)||p(e,o)})}y.set(u,n)},[n]),u),k=s(s({},A),c);return f.createElement(f.Fragment,null,C&&f.createElement(M,{sideCar:g,removeScrollBar:w,shards:N,noIsolation:S,inert:R,setCallbacks:l,allowPinchZoom:!!x,lockRef:i,gapMode:L}),v?f.cloneElement(f.Children.only(m),s(s({},k),{ref:P})):f.createElement(void 0===T?"div":T,s({},k,{className:E,ref:P}),m))});E.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},E.classNames={fullWidth:m,zeroRight:v};var w=function(e){var t=e.sideCar,n=d(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,s({},n))};w.isSideCarExport=!0;var C=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var u,i;(u=t).styleSheet?u.styleSheet.cssText=o:u.appendChild(document.createTextNode(o)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},N=function(){var e=C();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},M=function(){var e=N();return function(t){return e(t.styles,t.dynamic),null}},S={left:0,top:0,right:0,gap:0},R=function(e){return parseInt(e||"",10)||0},x=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[R(n),R(r),R(o)]},T=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return S;var t=x(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},L=M(),A="data-scroll-locked",P=function(e,t,n,r){var o=e.left,u=e.top,i=e.right,a=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(a,"px ").concat(r,";\n  }\n  body[").concat(A,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(u,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(a,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(a,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(v," {\n    right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(m," {\n    margin-right: ").concat(a,"px ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(m," .").concat(m," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(A,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(a,"px;\n  }\n")},k=function(){var e=parseInt(document.body.getAttribute(A)||"0",10);return isFinite(e)?e:0},O=function(){f.useEffect(function(){return document.body.setAttribute(A,(k()+1).toString()),function(){var e=k()-1;e<=0?document.body.removeAttribute(A):document.body.setAttribute(A,e.toString())}},[])},I=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;O();var u=f.useMemo(function(){return T(o)},[o]);return f.createElement(L,{styles:P(u,!t,o,n?"":"!important")})},W=!1;if("undefined"!=typeof window)try{var D=Object.defineProperty({},"passive",{get:function(){return W=!0,!0}});window.addEventListener("test",D,D),window.removeEventListener("test",D,D)}catch(e){W=!1}var F=!!W&&{passive:!1},j=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},_=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),B(e,r)){var o=U(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},B=function(e,t){return"v"===e?j(t,"overflowY"):j(t,"overflowX")},U=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},K=function(e,t,n,r,o){var u,i=(u=window.getComputedStyle(t).direction,"h"===e&&"rtl"===u?-1:1),a=i*r,c=n.target,l=t.contains(c),s=!1,d=a>0,f=0,v=0;do{var m=U(e,c),p=m[0],h=m[1]-m[2]-i*p;(p||h)&&B(e,c)&&(f+=h,v+=p),c instanceof ShadowRoot?c=c.host:c=c.parentNode}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return d&&(o&&1>Math.abs(f)||!o&&a>f)?s=!0:!d&&(o&&1>Math.abs(v)||!o&&-a>v)&&(s=!0),s},$=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},z=function(e){return[e.deltaX,e.deltaY]},X=function(e){return e&&"current"in e?e.current:e},V=0,Y=[],H=(l=function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(V++)[0],u=f.useState(M)[0],i=f.useRef(e);f.useEffect(function(){i.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,u=t.length;o<u;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(X),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var a=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!i.current.allowPinchZoom;var o,u=$(e),a=n.current,c="deltaX"in e?e.deltaX:a[0]-u[0],l="deltaY"in e?e.deltaY:a[1]-u[1],s=e.target,d=Math.abs(c)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=_(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=_(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(c||l)&&(r.current=o),!o)return!0;var v=r.current||o;return K(v,t,e,"h"===v?c:l,!0)},[]),c=f.useCallback(function(e){if(Y.length&&Y[Y.length-1]===u){var n="deltaY"in e?z(e):$(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(i.current.shards||[]).map(X).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?a(e,o[0]):!i.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=f.useCallback(function(e,n,r,o){var u={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(u),setTimeout(function(){t.current=t.current.filter(function(e){return e!==u})},1)},[]),s=f.useCallback(function(e){n.current=$(e),r.current=void 0},[]),d=f.useCallback(function(t){l(t.type,z(t),t.target,a(t,e.lockRef.current))},[]),v=f.useCallback(function(t){l(t.type,$(t),t.target,a(t,e.lockRef.current))},[]);f.useEffect(function(){return Y.push(u),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:v}),document.addEventListener("wheel",c,F),document.addEventListener("touchmove",c,F),document.addEventListener("touchstart",s,F),function(){Y=Y.filter(function(e){return e!==u}),document.removeEventListener("wheel",c,F),document.removeEventListener("touchmove",c,F),document.removeEventListener("touchstart",s,F)}},[]);var m=e.removeScrollBar,p=e.inert;return f.createElement(f.Fragment,null,p?f.createElement(u,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,m?f.createElement(I,{gapMode:e.gapMode}):null)},g.useMedium(l),w),G=f.forwardRef(function(e,t){return f.createElement(E,s({},e,{ref:t,sideCar:H}))});G.classNames=E.classNames;var Z=G},6013:function(e,t,n){n.d(t,{M:function(){return r}});function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}},3943:function(e,t,n){n.d(t,{B:function(){return c}});var r=n(7621),o=n(4841),u=n(164),i=n(8759),a=n(9571);function c(e){let t=e+"CollectionProvider",[n,c]=(0,o.b)(t),[l,s]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return(0,a.jsx)(l,{scope:t,itemMap:u,collectionRef:o,children:n})};d.displayName=t;let f=e+"CollectionSlot",v=r.forwardRef((e,t)=>{let{scope:n,children:r}=e,o=s(f,n),c=(0,u.e)(t,o.collectionRef);return(0,a.jsx)(i.g7,{ref:c,children:r})});v.displayName=f;let m=e+"CollectionItemSlot",p="data-radix-collection-item",h=r.forwardRef((e,t)=>{let{scope:n,children:o,...c}=e,l=r.useRef(null),d=(0,u.e)(t,l),f=s(m,n);return r.useEffect(()=>(f.itemMap.set(l,{ref:l,...c}),()=>void f.itemMap.delete(l))),(0,a.jsx)(i.g7,{[p]:"",ref:d,children:o})});return h.displayName=m,[{Provider:d,Slot:v,ItemSlot:h},function(t){let n=s(e+"CollectionConsumer",t);return r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(p,"]")));return Array.from(n.itemMap.values()).sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current))},[n.collectionRef,n.itemMap])},c]}},4841:function(e,t,n){n.d(t,{b:function(){return u}});var r=n(7621),o=n(9571);function u(e,t=[]){let n=[],u=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return u.scopeName=e,[function(t,u){let i=r.createContext(u),a=n.length;function c(t){let{scope:n,children:u,...c}=t,l=n?.[e][a]||i,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:u})}return n=[...n,u],c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e][a]||i,l=r.useContext(c);if(l)return l;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(u,...t)]}},6644:function(e,t,n){n.d(t,{b:function(){return i},k:function(){return u}});var r=n(7621),o=n(9571);function u(e,t){let n=r.createContext(t),u=e=>{let{children:t,...u}=e,i=r.useMemo(()=>u,Object.values(u));return(0,o.jsx)(n.Provider,{value:i,children:t})};return u.displayName=e+"Provider",[u,function(o){let u=r.useContext(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function i(e,t=[]){let n=[],u=()=>{let t=n.map(e=>r.createContext(e));return function(n){let o=n?.[e]||t;return r.useMemo(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return u.scopeName=e,[function(t,u){let i=r.createContext(u),a=n.length;n=[...n,u];let c=t=>{let{scope:n,children:u,...c}=t,l=n?.[e]?.[a]||i,s=r.useMemo(()=>c,Object.values(c));return(0,o.jsx)(l.Provider,{value:s,children:u})};return c.displayName=t+"Provider",[c,function(n,o){let c=o?.[e]?.[a]||i,l=r.useContext(c);if(l)return l;if(void 0!==u)return u;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return r.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(u,...t)]}},6091:function(e,t,n){n.d(t,{gm:function(){return u}});var r=n(7621);n(9571);var o=r.createContext(void 0);function u(e){let t=r.useContext(o);return e||t||"ltr"}},1476:function(e,t,n){n.d(t,{XB:function(){return f}});var r,o=n(7621),u=n(6013),i=n(5902),a=n(164),c=n(7327),l=n(9571),s="dismissableLayer.update",d=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),f=o.forwardRef((e,t)=>{var n,f;let{disableOutsidePointerEvents:p=!1,onEscapeKeyDown:h,onPointerDownOutside:y,onFocusOutside:g,onInteractOutside:b,onDismiss:E,...w}=e,C=o.useContext(d),[N,M]=o.useState(null),S=null!==(f=null==N?void 0:N.ownerDocument)&&void 0!==f?f:null===(n=globalThis)||void 0===n?void 0:n.document,[,R]=o.useState({}),x=(0,a.e)(t,e=>M(e)),T=Array.from(C.layers),[L]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),A=T.indexOf(L),P=N?T.indexOf(N):-1,k=C.layersWithOutsidePointerEventsDisabled.size>0,O=P>=A,I=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),u=o.useRef(!1),i=o.useRef(()=>{});return o.useEffect(()=>{let e=e=>{if(e.target&&!u.current){let t=function(){m("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);u.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>u.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!O||n||(null==y||y(e),null==b||b(e),e.defaultPrevented||null==E||E())},S),W=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=(0,c.W)(e),u=o.useRef(!1);return o.useEffect(()=>{let e=e=>{e.target&&!u.current&&m("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>u.current=!0,onBlurCapture:()=>u.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==g||g(e),null==b||b(e),e.defaultPrevented||null==E||E())},S);return!function(e,t=globalThis?.document){let n=(0,c.W)(e);o.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P!==C.layers.size-1||(null==h||h(e),!e.defaultPrevented&&E&&(e.preventDefault(),E()))},S),o.useEffect(()=>{if(N)return p&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=S.body.style.pointerEvents,S.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(N)),C.layers.add(N),v(),()=>{p&&1===C.layersWithOutsidePointerEventsDisabled.size&&(S.body.style.pointerEvents=r)}},[N,S,p,C]),o.useEffect(()=>()=>{N&&(C.layers.delete(N),C.layersWithOutsidePointerEventsDisabled.delete(N),v())},[N,C]),o.useEffect(()=>{let e=()=>R({});return document.addEventListener(s,e),()=>document.removeEventListener(s,e)},[]),(0,l.jsx)(i.WV.div,{...w,ref:x,style:{pointerEvents:k?O?"auto":"none":void 0,...e.style},onFocusCapture:(0,u.M)(e.onFocusCapture,W.onFocusCapture),onBlurCapture:(0,u.M)(e.onBlurCapture,W.onBlurCapture),onPointerDownCapture:(0,u.M)(e.onPointerDownCapture,I.onPointerDownCapture)})});function v(){let e=new CustomEvent(s);document.dispatchEvent(e)}function m(e,t,n,r){let{discrete:o}=r,u=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&u.addEventListener(e,t,{once:!0}),o?(0,i.jH)(u,a):u.dispatchEvent(a)}f.displayName="DismissableLayer",o.forwardRef((e,t)=>{let n=o.useContext(d),r=o.useRef(null),u=(0,a.e)(t,r);return o.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,l.jsx)(i.WV.div,{...e,ref:u})}).displayName="DismissableLayerBranch"},7690:function(e,t,n){n.d(t,{EW:function(){return u}});var r=n(7621),o=0;function u(){r.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:i()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:i()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function i(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}},1974:function(e,t,n){let r;n.d(t,{M:function(){return f}});var o=n(7621),u=n(164),i=n(5902),a=n(7327),c=n(9571),l="focusScope.autoFocusOnMount",s="focusScope.autoFocusOnUnmount",d={bubbles:!1,cancelable:!0},f=o.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:f,onUnmountAutoFocus:y,...g}=e,[b,E]=o.useState(null),w=(0,a.W)(f),C=(0,a.W)(y),N=o.useRef(null),M=(0,u.e)(t,e=>E(e)),S=o.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;o.useEffect(()=>{if(r){let e=function(e){if(S.paused||!b)return;let t=e.target;b.contains(t)?N.current=t:p(N.current,{select:!0})},t=function(e){if(S.paused||!b)return;let t=e.relatedTarget;null===t||b.contains(t)||p(N.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&p(b)});return b&&n.observe(b,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,b,S.paused]),o.useEffect(()=>{if(b){h.add(S);let e=document.activeElement;if(!b.contains(e)){let t=new CustomEvent(l,d);b.addEventListener(l,w),b.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(p(r,{select:t}),document.activeElement!==n)return}(v(b).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&p(b))}return()=>{b.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(s,d);b.addEventListener(s,C),b.dispatchEvent(t),t.defaultPrevented||p(null!=e?e:document.body,{select:!0}),b.removeEventListener(s,C),h.remove(S)},0)}}},[b,w,C,S]);let R=o.useCallback(e=>{if(!n&&!r||S.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=v(e);return[m(t,e),m(t.reverse(),e)]}(t);r&&u?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&p(u,{select:!0})):(e.preventDefault(),n&&p(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,S.paused]);return(0,c.jsx)(i.WV.div,{tabIndex:-1,...g,ref:M,onKeyDown:R})});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function m(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function p(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}f.displayName="FocusScope";var h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=y(r,e)).unshift(e)},remove(e){var t;null===(t=(r=y(r,e))[0])||void 0===t||t.resume()}});function y(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},3653:function(e,t,n){n.d(t,{M:function(){return c}});var r,o=n(7621),u=n(2363),i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function c(e){let[t,n]=o.useState(i());return(0,u.b)(()=>{e||n(e=>e??String(a++))},[e]),e||(t?`radix-${t}`:"")}},2932:function(e,t,n){n.d(t,{h:function(){return c}});var r=n(7621),o=n(4310),u=n(5902),i=n(2363),a=n(9571),c=r.forwardRef((e,t)=>{var n,c;let{container:l,...s}=e,[d,f]=r.useState(!1);(0,i.b)(()=>f(!0),[]);let v=l||d&&(null===(c=globalThis)||void 0===c?void 0:null===(n=c.document)||void 0===n?void 0:n.body);return v?o.createPortal((0,a.jsx)(u.WV.div,{...s,ref:t}),v):null});c.displayName="Portal"},5158:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(7621),o=n(164),u=n(2363),i=e=>{var t,n;let i,c;let{present:l,children:s}=e,d=function(e){var t,n;let[o,i]=r.useState(),c=r.useRef({}),l=r.useRef(e),s=r.useRef("none"),[d,f]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},r.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return r.useEffect(()=>{let e=a(c.current);s.current="mounted"===d?e:"none"},[d]),(0,u.b)(()=>{let t=c.current,n=l.current;if(n!==e){let r=s.current,o=a(t);e?f("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?f("UNMOUNT"):n&&r!==o?f("ANIMATION_OUT"):f("UNMOUNT"),l.current=e}},[e,f]),(0,u.b)(()=>{if(o){var e;let t;let n=null!==(e=o.ownerDocument.defaultView)&&void 0!==e?e:window,r=e=>{let r=a(c.current).includes(e.animationName);if(e.target===o&&r&&(f("ANIMATION_END"),!l.current)){let e=o.style.animationFillMode;o.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===o.style.animationFillMode&&(o.style.animationFillMode=e)})}},u=e=>{e.target===o&&(s.current=a(c.current))};return o.addEventListener("animationstart",u),o.addEventListener("animationcancel",r),o.addEventListener("animationend",r),()=>{n.clearTimeout(t),o.removeEventListener("animationstart",u),o.removeEventListener("animationcancel",r),o.removeEventListener("animationend",r)}}f("ANIMATION_END")},[o,f]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.useCallback(e=>{e&&(c.current=getComputedStyle(e)),i(e)},[])}}(l),f="function"==typeof s?s({present:d.isPresent}):r.Children.only(s),v=(0,o.e)(d.ref,(i=null===(t=Object.getOwnPropertyDescriptor(f.props,"ref"))||void 0===t?void 0:t.get)&&"isReactWarning"in i&&i.isReactWarning?f.ref:(i=null===(n=Object.getOwnPropertyDescriptor(f,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in i&&i.isReactWarning?f.props.ref:f.props.ref||f.ref);return"function"==typeof s||d.isPresent?r.cloneElement(f,{ref:v}):null};function a(e){return(null==e?void 0:e.animationName)||"none"}i.displayName="Presence"},1535:function(e,t,n){n.d(t,{Pc:function(){return w},ck:function(){return P},fC:function(){return A}});var r=n(7621),o=n(6013),u=n(3943),i=n(164),a=n(4841),c=n(3653),l=n(5902),s=n(7327),d=n(1351),f=n(6091),v=n(9571),m="rovingFocusGroup.onEntryFocus",p={bubbles:!1,cancelable:!0},h="RovingFocusGroup",[y,g,b]=(0,u.B)(h),[E,w]=(0,a.b)(h,[b]),[C,N]=E(h),M=r.forwardRef((e,t)=>(0,v.jsx)(y.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,v.jsx)(y.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,v.jsx)(S,{...e,ref:t})})}));M.displayName=h;var S=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:u,loop:a=!1,dir:c,currentTabStopId:h,defaultCurrentTabStopId:y,onCurrentTabStopIdChange:b,onEntryFocus:E,preventScrollOnEntryFocus:w=!1,...N}=e,M=r.useRef(null),S=(0,i.e)(t,M),R=(0,f.gm)(c),[x=null,T]=(0,d.T)({prop:h,defaultProp:y,onChange:b}),[A,P]=r.useState(!1),k=(0,s.W)(E),O=g(n),I=r.useRef(!1),[W,D]=r.useState(0);return r.useEffect(()=>{let e=M.current;if(e)return e.addEventListener(m,k),()=>e.removeEventListener(m,k)},[k]),(0,v.jsx)(C,{scope:n,orientation:u,dir:R,loop:a,currentTabStopId:x,onItemFocus:r.useCallback(e=>T(e),[T]),onItemShiftTab:r.useCallback(()=>P(!0),[]),onFocusableItemAdd:r.useCallback(()=>D(e=>e+1),[]),onFocusableItemRemove:r.useCallback(()=>D(e=>e-1),[]),children:(0,v.jsx)(l.WV.div,{tabIndex:A||0===W?-1:0,"data-orientation":u,...N,ref:S,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{I.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!I.current;if(e.target===e.currentTarget&&t&&!A){let t=new CustomEvent(m,p);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=O().filter(e=>e.focusable);L([e.find(e=>e.active),e.find(e=>e.id===x),...e].filter(Boolean).map(e=>e.ref.current),w)}}I.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>P(!1))})})}),R="RovingFocusGroupItem",x=r.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:u=!0,active:i=!1,tabStopId:a,...s}=e,d=(0,c.M)(),f=a||d,m=N(R,n),p=m.currentTabStopId===f,h=g(n),{onFocusableItemAdd:b,onFocusableItemRemove:E}=m;return r.useEffect(()=>{if(u)return b(),()=>E()},[u,b,E]),(0,v.jsx)(y.ItemSlot,{scope:n,id:f,focusable:u,active:i,children:(0,v.jsx)(l.WV.span,{tabIndex:p?0:-1,"data-orientation":m.orientation,...s,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{u?m.onItemFocus(f):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>m.onItemFocus(f)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return T[o]}(e,m.orientation,m.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let o=h().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)o.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&o.reverse();let u=o.indexOf(e.currentTarget);o=m.loop?(n=o,r=u+1,n.map((e,t)=>n[(r+t)%n.length])):o.slice(u+1)}setTimeout(()=>L(o))}})})})});x.displayName=R;var T={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function L(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement;for(let r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}var A=M,P=x},7327:function(e,t,n){n.d(t,{W:function(){return o}});var r=n(7621);function o(e){let t=r.useRef(e);return r.useEffect(()=>{t.current=e}),r.useMemo(()=>(...e)=>t.current?.(...e),[])}},1351:function(e,t,n){n.d(t,{T:function(){return u}});var r=n(7621),o=n(7327);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let n=r.useState(e),[u]=n,i=r.useRef(u),a=(0,o.W)(t);return r.useEffect(()=>{i.current!==u&&(a(u),i.current=u)},[u,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,c=a?e:u,l=(0,o.W)(n);return[c,r.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else i(t)},[a,e,i,l])]}},2363:function(e,t,n){n.d(t,{b:function(){return o}});var r=n(7621),o=globalThis?.document?r.useLayoutEffect:()=>{}}}]);