"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2387],{7703:function(t,e,n){let r;var i=n(5324),a=Object.create,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,c=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,p=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),f=(t,e,n,r)=>{if(e&&"object"==typeof e||"function"==typeof e)for(let i of u(e))h.call(t,i)||i===n||s(t,i,{get:()=>e[i],enumerable:!(r=l(e,i))||r.enumerable});return t},d=(t,e,n)=>(n=null!=t?a(c(t)):{},f(t&&t.__esModule?n:s(n,"default",{value:t,enumerable:!0}),t)),m=p((t,e)=>{(function(){var n,r="Expected a function",i="__lodash_hash_undefined__",a="__lodash_placeholder__",s=1/0,l=NaN,u=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],c="[object Arguments]",h="[object Array]",p="[object Boolean]",f="[object Date]",d="[object Error]",m="[object Function]",g="[object GeneratorFunction]",v="[object Map]",_="[object Number]",y="[object Object]",x="[object Promise]",b="[object RegExp]",w="[object Set]",C="[object String]",S="[object Symbol]",M="[object WeakMap]",P="[object ArrayBuffer]",E="[object DataView]",T="[object Float32Array]",k="[object Float64Array]",z="[object Int8Array]",A="[object Int16Array]",L="[object Int32Array]",R="[object Uint8Array]",D="[object Uint8ClampedArray]",I="[object Uint16Array]",F="[object Uint32Array]",O=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,U=/(__e\(.*?\)|\b__t\)) \+\n'';/g,N=/&(?:amp|lt|gt|quot|#39);/g,B=/[&<>"']/g,W=RegExp(N.source),V=RegExp(B.source),H=/<%-([\s\S]+?)%>/g,q=/<%([\s\S]+?)%>/g,$=/<%=([\s\S]+?)%>/g,G=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Q=/[\\^$.*+?()[\]{}|]/g,Y=RegExp(Q.source),K=/^\s+/,X=/\s/,tt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,te=/\{\n\/\* \[wrapped with (.+)\] \*/,tn=/,? & /,tr=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,ti=/[()=,{}\[\]\/\s]/,ta=/\\(\\)?/g,to=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,ts=/\w*$/,tl=/^[-+]0x[0-9a-f]+$/i,tu=/^0b[01]+$/i,tc=/^\[object .+?Constructor\]$/,th=/^0o[0-7]+$/i,tp=/^(?:0|[1-9]\d*)$/,tf=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,td=/($^)/,tm=/['\n\r\u2028\u2029\\]/g,tg="\ud800-\udfff",tv="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",t_="\\u2700-\\u27bf",ty="a-z\\xdf-\\xf6\\xf8-\\xff",tx="A-Z\\xc0-\\xd6\\xd8-\\xde",tb="\\ufe0e\\ufe0f",tw="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",tC="['’]",tS="["+tw+"]",tM="["+tv+"]",tP="["+ty+"]",tE="[^"+tg+tw+"\\d+"+t_+ty+tx+"]",tT="\ud83c[\udffb-\udfff]",tk="[^"+tg+"]",tz="(?:\ud83c[\udde6-\uddff]){2}",tA="[\ud800-\udbff][\udc00-\udfff]",tL="["+tx+"]",tR="\\u200d",tD="(?:"+tP+"|"+tE+")",tI="(?:"+tC+"(?:d|ll|m|re|s|t|ve))?",tF="(?:"+tC+"(?:D|LL|M|RE|S|T|VE))?",tO="(?:"+tM+"|"+tT+")?",tj="["+tb+"]?",tU="(?:"+tR+"(?:"+[tk,tz,tA].join("|")+")"+tj+tO+")*",tN=tj+tO+tU,tB="(?:"+["["+t_+"]",tz,tA].join("|")+")"+tN,tW="(?:"+[tk+tM+"?",tM,tz,tA,"["+tg+"]"].join("|")+")",tV=RegExp(tC,"g"),tH=RegExp(tM,"g"),tq=RegExp(tT+"(?="+tT+")|"+tW+tN,"g"),t$=RegExp([tL+"?"+tP+"+"+tI+"(?="+[tS,tL,"$"].join("|")+")","(?:"+tL+"|"+tE+")+"+tF+"(?="+[tS,tL+tD,"$"].join("|")+")",tL+"?"+tD+"+"+tI,tL+"+"+tF,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])","\\d+",tB].join("|"),"g"),tG=RegExp("["+tR+tg+tv+tb+"]"),tZ=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,tJ=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tQ=-1,tY={};tY[T]=tY[k]=tY[z]=tY[A]=tY[L]=tY[R]=tY[D]=tY[I]=tY[F]=!0,tY[c]=tY[h]=tY[P]=tY[p]=tY[E]=tY[f]=tY[d]=tY[m]=tY[v]=tY[_]=tY[y]=tY[b]=tY[w]=tY[C]=tY[M]=!1;var tK={};tK[c]=tK[h]=tK[P]=tK[E]=tK[p]=tK[f]=tK[T]=tK[k]=tK[z]=tK[A]=tK[L]=tK[v]=tK[_]=tK[y]=tK[b]=tK[w]=tK[C]=tK[S]=tK[R]=tK[D]=tK[I]=tK[F]=!0,tK[d]=tK[m]=tK[M]=!1;var tX={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},t0=parseFloat,t1=parseInt,t3="object"==typeof window&&window&&window.Object===Object&&window,t2="object"==typeof self&&self&&self.Object===Object&&self,t6=t3||t2||Function("return this")(),t5="object"==typeof t&&t&&!t.nodeType&&t,t4=t5&&"object"==typeof e&&e&&!e.nodeType&&e,t9=t4&&t4.exports===t5,t7=t9&&t3.process,t8=function(){try{return t4&&t4.require&&t4.require("util").types||t7&&t7.binding&&t7.binding("util")}catch{}}(),et=t8&&t8.isArrayBuffer,ee=t8&&t8.isDate,en=t8&&t8.isMap,er=t8&&t8.isRegExp,ei=t8&&t8.isSet,ea=t8&&t8.isTypedArray;function eo(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}function es(t,e,n,r){for(var i=-1,a=null==t?0:t.length;++i<a;){var s=t[i];e(r,s,n(s),t)}return r}function el(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}function eu(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(!e(t[n],n,t))return!1;return!0}function ec(t,e){for(var n=-1,r=null==t?0:t.length,i=0,a=[];++n<r;){var s=t[n];e(s,n,t)&&(a[i++]=s)}return a}function eh(t,e){return!!(null==t?0:t.length)&&eb(t,e,0)>-1}function ep(t,e,n){for(var r=-1,i=null==t?0:t.length;++r<i;)if(n(e,t[r]))return!0;return!1}function ef(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}function ed(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}function em(t,e,n,r){var i=-1,a=null==t?0:t.length;for(r&&a&&(n=t[++i]);++i<a;)n=e(n,t[i],i,t);return n}function eg(t,e,n,r){var i=null==t?0:t.length;for(r&&i&&(n=t[--i]);i--;)n=e(n,t[i],i,t);return n}function ev(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}var e_=eM("length");function ey(t,e,n){var r;return n(t,function(t,n,i){if(e(t,n,i))return r=n,!1}),r}function ex(t,e,n,r){for(var i=t.length,a=n+(r?1:-1);r?a--:++a<i;)if(e(t[a],a,t))return a;return -1}function eb(t,e,n){return e==e?function(t,e,n){for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return -1}(t,e,n):ex(t,eC,n)}function ew(t,e,n,r){for(var i=n-1,a=t.length;++i<a;)if(r(t[i],e))return i;return -1}function eC(t){return t!=t}function eS(t,e){var n=null==t?0:t.length;return n?eT(t,e)/n:l}function eM(t){return function(e){return null==e?n:e[t]}}function eP(t){return function(e){return null==t?n:t[e]}}function eE(t,e,n,r,i){return i(t,function(t,i,a){n=r?(r=!1,t):e(n,t,i,a)}),n}function eT(t,e){for(var r,i=-1,a=t.length;++i<a;){var s=e(t[i]);s!==n&&(r=r===n?s:r+s)}return r}function ek(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}function ez(t){return t&&t.slice(0,e$(t)+1).replace(K,"")}function eA(t){return function(e){return t(e)}}function eL(t,e){return ef(e,function(e){return t[e]})}function eR(t,e){return t.has(e)}function eD(t,e){for(var n=-1,r=t.length;++n<r&&eb(e,t[n],0)>-1;);return n}function eI(t,e){for(var n=t.length;n--&&eb(e,t[n],0)>-1;);return n}var eF=eP({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"}),eO=eP({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function ej(t){return"\\"+tX[t]}function eU(t){return tG.test(t)}function eN(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}function eB(t,e){return function(n){return t(e(n))}}function eW(t,e){for(var n=-1,r=t.length,i=0,s=[];++n<r;){var l=t[n];(l===e||l===a)&&(t[n]=a,s[i++]=n)}return s}function eV(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}function eH(t){return eU(t)?function(t){for(var e=tq.lastIndex=0;tq.test(t);)++e;return e}(t):e_(t)}function eq(t){return eU(t)?t.match(tq)||[]:t.split("")}function e$(t){for(var e=t.length;e--&&X.test(t.charAt(e)););return e}var eG=eP({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),eZ=function t(e){var X,tg,tv,t_,ty=(e=null==e?t6:eZ.defaults(t6.Object(),e,eZ.pick(t6,tJ))).Array,tx=e.Date,tb=e.Error,tw=e.Function,tC=e.Math,tS=e.Object,tM=e.RegExp,tP=e.String,tE=e.TypeError,tT=ty.prototype,tk=tw.prototype,tz=tS.prototype,tA=e["__core-js_shared__"],tL=tk.toString,tR=tz.hasOwnProperty,tD=0,tI=(X=/[^.]+$/.exec(tA&&tA.keys&&tA.keys.IE_PROTO||""))?"Symbol(src)_1."+X:"",tF=tz.toString,tO=tL.call(tS),tj=t6._,tU=tM("^"+tL.call(tR).replace(Q,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tN=t9?e.Buffer:n,tB=e.Symbol,tW=e.Uint8Array,tq=tN?tN.allocUnsafe:n,tG=eB(tS.getPrototypeOf,tS),tX=tS.create,t3=tz.propertyIsEnumerable,t2=tT.splice,t5=tB?tB.isConcatSpreadable:n,t4=tB?tB.iterator:n,t7=tB?tB.toStringTag:n,t8=function(){try{var t=im(tS,"defineProperty");return t({},"",{}),t}catch{}}(),e_=e.clearTimeout!==t6.clearTimeout&&e.clearTimeout,eP=tx&&tx.now!==t6.Date.now&&tx.now,eJ=e.setTimeout!==t6.setTimeout&&e.setTimeout,eQ=tC.ceil,eY=tC.floor,eK=tS.getOwnPropertySymbols,eX=tN?tN.isBuffer:n,e0=e.isFinite,e1=tT.join,e3=eB(tS.keys,tS),e2=tC.max,e6=tC.min,e5=tx.now,e4=e.parseInt,e9=tC.random,e7=tT.reverse,e8=im(e,"DataView"),nt=im(e,"Map"),ne=im(e,"Promise"),nn=im(e,"Set"),nr=im(e,"WeakMap"),ni=im(tS,"create"),na=nr&&new nr,no={},ns=iN(e8),nl=iN(nt),nu=iN(ne),nc=iN(nn),nh=iN(nr),np=tB?tB.prototype:n,nf=np?np.valueOf:n,nd=np?np.toString:n;function nm(t){if(aG(t)&&!aF(t)&&!(t instanceof ny)){if(t instanceof n_)return t;if(tR.call(t,"__wrapped__"))return iB(t)}return new n_(t)}var ng=function(){function t(){}return function(e){if(!a$(e))return{};if(tX)return tX(e);t.prototype=e;var r=new t;return t.prototype=n,r}}();function nv(){}function n_(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=n}function ny(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function nx(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nb(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nw(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function nC(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new nw;++e<n;)this.add(t[e])}function nS(t){var e=this.__data__=new nb(t);this.size=e.size}function nM(t,e){var n=aF(t),r=!n&&aI(t),i=!n&&!r&&aN(t),a=!n&&!r&&!i&&a1(t),s=n||r||i||a,l=s?ek(t.length,tP):[],u=l.length;for(var c in t)(e||tR.call(t,c))&&!(s&&("length"==c||i&&("offset"==c||"parent"==c)||a&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||iw(c,u)))&&l.push(c);return l}function nP(t){var e=t.length;return e?t[rc(0,e-1)]:n}function nE(t,e,r){(r===n||aL(t[e],r))&&(r!==n||e in t)||nL(t,e,r)}function nT(t,e,r){var i=t[e];tR.call(t,e)&&aL(i,r)&&(r!==n||e in t)||nL(t,e,r)}function nk(t,e){for(var n=t.length;n--;)if(aL(t[n][0],e))return n;return -1}function nz(t,e,n,r){return nU(t,function(t,i,a){e(r,t,n(t),a)}),r}function nA(t,e){return t&&rW(e,of(e),t)}function nL(t,e,n){"__proto__"==e&&t8?t8(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}function nR(t,e){for(var r=-1,i=e.length,a=ty(i),s=null==t;++r<i;)a[r]=s?n:ol(t,e[r]);return a}function nD(t,e,r){return t==t&&(r!==n&&(t=t<=r?t:r),e!==n&&(t=t>=e?t:e)),t}function nI(t,e,r,i,a,s){var l,u=1&e,h=2&e,d=4&e;if(r&&(l=a?r(t,i,a,s):r(t)),l!==n)return l;if(!a$(t))return t;var x=aF(t);if(x){if(M=t.length,O=new t.constructor(M),M&&"string"==typeof t[0]&&tR.call(t,"index")&&(O.index=t.index,O.input=t.input),l=O,!u)return rB(t,l)}else{var M,O,j,U,N,B=i_(t),W=B==m||B==g;if(aN(t))return rI(t,u);if(B==y||B==c||W&&!a){if(l=h||W?{}:ix(t),!u)return h?(j=(N=l)&&rW(t,od(t),N),rW(t,iv(t),j)):(U=nA(l,t),rW(t,ig(t),U))}else{if(!tK[B])return a?t:{};l=function(t,e,n){var r,i,a=t.constructor;switch(e){case P:return rF(t);case p:case f:return new a(+t);case E:return r=n?rF(t.buffer):t.buffer,new t.constructor(r,t.byteOffset,t.byteLength);case T:case k:case z:case A:case L:case R:case D:case I:case F:return rO(t,n);case v:return new a;case _:case C:return new a(t);case b:return(i=new t.constructor(t.source,ts.exec(t))).lastIndex=t.lastIndex,i;case w:return new a;case S:return nf?tS(nf.call(t)):{}}}(t,B,u)}}s||(s=new nS);var V=s.get(t);if(V)return V;s.set(t,l),aK(t)?t.forEach(function(n){l.add(nI(n,e,r,n,t,s))}):aZ(t)&&t.forEach(function(n,i){l.set(i,nI(n,e,r,i,t,s))});var H=d?h?is:io:h?od:of,q=x?n:H(t);return el(q||t,function(n,i){q&&(n=t[i=n]),nT(l,i,nI(n,e,r,i,t,s))}),l}function nF(t,e,r){var i=r.length;if(null==t)return!i;for(t=tS(t);i--;){var a=r[i],s=e[a],l=t[a];if(l===n&&!(a in t)||!s(l))return!1}return!0}function nO(t,e,i){if("function"!=typeof t)throw new tE(r);return iR(function(){t.apply(n,i)},e)}function nj(t,e,n,r){var i=-1,a=eh,s=!0,l=t.length,u=[],c=e.length;if(!l)return u;n&&(e=ef(e,eA(n))),r?(a=ep,s=!1):e.length>=200&&(a=eR,s=!1,e=new nC(e));t:for(;++i<l;){var h=t[i],p=null==n?h:n(h);if(h=r||0!==h?h:0,s&&p==p){for(var f=c;f--;)if(e[f]===p)continue t;u.push(h)}else a(e,p,r)||u.push(h)}return u}nm.templateSettings={escape:H,evaluate:q,interpolate:$,variable:"",imports:{_:nm}},nm.prototype=nv.prototype,nm.prototype.constructor=nm,n_.prototype=ng(nv.prototype),n_.prototype.constructor=n_,ny.prototype=ng(nv.prototype),ny.prototype.constructor=ny,nx.prototype.clear=function(){this.__data__=ni?ni(null):{},this.size=0},nx.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},nx.prototype.get=function(t){var e=this.__data__;if(ni){var r=e[t];return r===i?n:r}return tR.call(e,t)?e[t]:n},nx.prototype.has=function(t){var e=this.__data__;return ni?e[t]!==n:tR.call(e,t)},nx.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ni&&e===n?i:e,this},nb.prototype.clear=function(){this.__data__=[],this.size=0},nb.prototype.delete=function(t){var e=this.__data__,n=nk(e,t);return!(n<0)&&(n==e.length-1?e.pop():t2.call(e,n,1),--this.size,!0)},nb.prototype.get=function(t){var e=this.__data__,r=nk(e,t);return r<0?n:e[r][1]},nb.prototype.has=function(t){return nk(this.__data__,t)>-1},nb.prototype.set=function(t,e){var n=this.__data__,r=nk(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this},nw.prototype.clear=function(){this.size=0,this.__data__={hash:new nx,map:new(nt||nb),string:new nx}},nw.prototype.delete=function(t){var e=ip(this,t).delete(t);return this.size-=e?1:0,e},nw.prototype.get=function(t){return ip(this,t).get(t)},nw.prototype.has=function(t){return ip(this,t).has(t)},nw.prototype.set=function(t,e){var n=ip(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this},nC.prototype.add=nC.prototype.push=function(t){return this.__data__.set(t,i),this},nC.prototype.has=function(t){return this.__data__.has(t)},nS.prototype.clear=function(){this.__data__=new nb,this.size=0},nS.prototype.delete=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n},nS.prototype.get=function(t){return this.__data__.get(t)},nS.prototype.has=function(t){return this.__data__.has(t)},nS.prototype.set=function(t,e){var n=this.__data__;if(n instanceof nb){var r=n.__data__;if(!nt||r.length<199)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new nw(r)}return n.set(t,e),this.size=n.size,this};var nU=rq(nG),nN=rq(nZ,!0);function nB(t,e){var n=!0;return nU(t,function(t,r,i){return n=!!e(t,r,i)}),n}function nW(t,e,r){for(var i=-1,a=t.length;++i<a;){var s=t[i],l=e(s);if(null!=l&&(u===n?l==l&&!a0(l):r(l,u)))var u=l,c=s}return c}function nV(t,e){var n=[];return nU(t,function(t,r,i){e(t,r,i)&&n.push(t)}),n}function nH(t,e,n,r,i){var a=-1,s=t.length;for(n||(n=ib),i||(i=[]);++a<s;){var l=t[a];e>0&&n(l)?e>1?nH(l,e-1,n,r,i):ed(i,l):r||(i[i.length]=l)}return i}var nq=r$(),n$=r$(!0);function nG(t,e){return t&&nq(t,e,of)}function nZ(t,e){return t&&n$(t,e,of)}function nJ(t,e){return ec(e,function(e){return aV(t[e])})}function nQ(t,e){e=rL(e,t);for(var r=0,i=e.length;null!=t&&r<i;)t=t[iU(e[r++])];return r&&r==i?t:n}function nY(t,e,n){var r=e(t);return aF(t)?r:ed(r,n(t))}function nK(t){return null==t?t===n?"[object Undefined]":"[object Null]":t7&&t7 in tS(t)?function(t){var e=tR.call(t,t7),r=t[t7];try{t[t7]=n;var i=!0}catch{}var a=tF.call(t);return i&&(e?t[t7]=r:delete t[t7]),a}(t):tF.call(t)}function nX(t,e){return t>e}function n0(t,e){return null!=t&&tR.call(t,e)}function n1(t,e){return null!=t&&e in tS(t)}function n3(t,e,r){for(var i=r?ep:eh,a=t[0].length,s=t.length,l=s,u=ty(s),c=1/0,h=[];l--;){var p=t[l];l&&e&&(p=ef(p,eA(e))),c=e6(p.length,c),u[l]=!r&&(e||a>=120&&p.length>=120)?new nC(l&&p):n}p=t[0];var f=-1,d=u[0];t:for(;++f<a&&h.length<c;){var m=p[f],g=e?e(m):m;if(m=r||0!==m?m:0,!(d?eR(d,g):i(h,g,r))){for(l=s;--l;){var v=u[l];if(!(v?eR(v,g):i(t[l],g,r)))continue t}d&&d.push(g),h.push(m)}}return h}function n2(t,e,r){e=rL(e,t);var i=null==(t=iz(t,e))?t:t[iU(iK(e))];return null==i?n:eo(i,t,r)}function n6(t){return aG(t)&&nK(t)==c}function n5(t,e,r,i,a){return t===e||(null!=t&&null!=e&&(aG(t)||aG(e))?function(t,e,r,i,a,s){var l=aF(t),u=aF(e),m=l?h:i_(t),g=u?h:i_(e);m=m==c?y:m,g=g==c?y:g;var x=m==y,M=g==y,T=m==g;if(T&&aN(t)){if(!aN(e))return!1;l=!0,x=!1}if(T&&!x)return s||(s=new nS),l||a1(t)?ii(t,e,r,i,a,s):function(t,e,n,r,i,a,s){switch(n){case E:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)break;t=t.buffer,e=e.buffer;case P:return!(t.byteLength!=e.byteLength||!a(new tW(t),new tW(e)));case p:case f:case _:return aL(+t,+e);case d:return t.name==e.name&&t.message==e.message;case b:case C:return t==e+"";case v:var l=eN;case w:var u=1&r;if(l||(l=eV),t.size!=e.size&&!u)break;var c=s.get(t);if(c)return c==e;r|=2,s.set(t,e);var h=ii(l(t),l(e),r,i,a,s);return s.delete(t),h;case S:if(nf)return nf.call(t)==nf.call(e)}return!1}(t,e,m,r,i,a,s);if(!(1&r)){var k=x&&tR.call(t,"__wrapped__"),z=M&&tR.call(e,"__wrapped__");if(k||z){var A=k?t.value():t,L=z?e.value():e;return s||(s=new nS),a(A,L,r,i,s)}}return!!T&&(s||(s=new nS),function(t,e,r,i,a,s){var l=1&r,u=io(t),c=u.length;if(c!=io(e).length&&!l)return!1;for(var h=c;h--;){var p=u[h];if(!(l?p in e:tR.call(e,p)))return!1}var f=s.get(t),d=s.get(e);if(f&&d)return f==e&&d==t;var m=!0;s.set(t,e),s.set(e,t);for(var g=l;++h<c;){var v=t[p=u[h]],_=e[p];if(i)var y=l?i(_,v,p,e,t,s):i(v,_,p,t,e,s);if(!(y===n?v===_||a(v,_,r,i,s):y)){m=!1;break}g||(g="constructor"==p)}if(m&&!g){var x=t.constructor,b=e.constructor;x!=b&&"constructor"in t&&"constructor"in e&&!("function"==typeof x&&x instanceof x&&"function"==typeof b&&b instanceof b)&&(m=!1)}return s.delete(t),s.delete(e),m}(t,e,r,i,a,s))}(t,e,r,i,n5,a):t!=t&&e!=e)}function n4(t,e,r,i){var a=r.length,s=a,l=!i;if(null==t)return!s;for(t=tS(t);a--;){var u=r[a];if(l&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++a<s;){var c=(u=r[a])[0],h=t[c],p=u[1];if(l&&u[2]){if(h===n&&!(c in t))return!1}else{var f=new nS;if(i)var d=i(h,p,c,t,e,f);if(!(d===n?n5(p,h,3,i,f):d))return!1}}return!0}function n9(t){return!(!a$(t)||tI&&tI in t)&&(aV(t)?tU:tc).test(iN(t))}function n7(t){return"function"==typeof t?t:null==t?oU:"object"==typeof t?aF(t)?rr(t[0],t[1]):rn(t):oZ(t)}function n8(t){if(!iE(t))return e3(t);var e=[];for(var n in tS(t))tR.call(t,n)&&"constructor"!=n&&e.push(n);return e}function rt(t,e){return t<e}function re(t,e){var n=-1,r=aj(t)?ty(t.length):[];return nU(t,function(t,i,a){r[++n]=e(t,i,a)}),r}function rn(t){var e=id(t);return 1==e.length&&e[0][2]?iT(e[0][0],e[0][1]):function(n){return n===t||n4(n,t,e)}}function rr(t,e){var r;return iS(t)&&(r=e)==r&&!a$(r)?iT(iU(t),e):function(r){var i=ol(r,t);return i===n&&i===e?ou(r,t):n5(e,i,3)}}function ri(t,e,r,i,a){t!==e&&nq(e,function(s,l){if(a||(a=new nS),a$(s))!function(t,e,r,i,a,s,l){var u=iA(t,r),c=iA(e,r),h=l.get(c);if(h){nE(t,r,h);return}var p=s?s(u,c,r+"",t,e,l):n,f=p===n;if(f){var d=aF(c),m=!d&&aN(c),g=!d&&!m&&a1(c);p=c,d||m||g?aF(u)?p=u:aU(u)?p=rB(u):m?(f=!1,p=rI(c,!0)):g?(f=!1,p=rO(c,!0)):p=[]:aQ(c)||aI(c)?(p=u,aI(u)?p=a8(u):(!a$(u)||aV(u))&&(p=ix(c))):f=!1}f&&(l.set(c,p),a(p,c,i,s,l),l.delete(c)),nE(t,r,p)}(t,e,l,r,ri,i,a);else{var u=i?i(iA(t,l),s,l+"",t,e,a):n;u===n&&(u=s),nE(t,l,u)}},od)}function ra(t,e){var r=t.length;if(r)return iw(e+=e<0?r:0,r)?t[e]:n}function ro(t,e,n){e=e.length?ef(e,function(t){return aF(t)?function(e){return nQ(e,1===t.length?t[0]:t)}:t}):[oU];var r=-1;return e=ef(e,eA(ih())),function(t,e){var n=t.length;for(t.sort(e);n--;)t[n]=t[n].value;return t}(re(t,function(t,n,i){return{criteria:ef(e,function(e){return e(t)}),index:++r,value:t}}),function(t,e){return function(t,e,n){for(var r=-1,i=t.criteria,a=e.criteria,s=i.length,l=n.length;++r<s;){var u=rj(i[r],a[r]);if(u){if(r>=l)return u;return u*("desc"==n[r]?-1:1)}}return t.index-e.index}(t,e,n)})}function rs(t,e,n){for(var r=-1,i=e.length,a={};++r<i;){var s=e[r],l=nQ(t,s);n(l,s)&&rf(a,rL(s,t),l)}return a}function rl(t,e,n,r){var i=r?ew:eb,a=-1,s=e.length,l=t;for(t===e&&(e=rB(e)),n&&(l=ef(t,eA(n)));++a<s;)for(var u=0,c=e[a],h=n?n(c):c;(u=i(l,h,u,r))>-1;)l!==t&&t2.call(l,u,1),t2.call(t,u,1);return t}function ru(t,e){for(var n=t?e.length:0,r=n-1;n--;){var i=e[n];if(n==r||i!==a){var a=i;iw(i)?t2.call(t,i,1):rS(t,i)}}return t}function rc(t,e){return t+eY(e9()*(e-t+1))}function rh(t,e){var n="";if(!t||e<1||e>9007199254740991)return n;do e%2&&(n+=t),(e=eY(e/2))&&(t+=t);while(e);return n}function rp(t,e){return iD(ik(t,e,oU),t+"")}function rf(t,e,r,i){if(!a$(t))return t;e=rL(e,t);for(var a=-1,s=e.length,l=s-1,u=t;null!=u&&++a<s;){var c=iU(e[a]),h=r;if("__proto__"===c||"constructor"===c||"prototype"===c)break;if(a!=l){var p=u[c];(h=i?i(p,c,u):n)===n&&(h=a$(p)?p:iw(e[a+1])?[]:{})}nT(u,c,h),u=u[c]}return t}var rd=na?function(t,e){return na.set(t,e),t}:oU,rm=t8?function(t,e){return t8(t,"toString",{configurable:!0,enumerable:!1,value:oF(e),writable:!0})}:oU;function rg(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var a=ty(i);++r<i;)a[r]=t[r+e];return a}function rv(t,e){var n;return nU(t,function(t,r,i){return!(n=e(t,r,i))}),!!n}function r_(t,e,n){var r=0,i=null==t?r:t.length;if("number"==typeof e&&e==e&&i<=2147483647){for(;r<i;){var a=r+i>>>1,s=t[a];null!==s&&!a0(s)&&(n?s<=e:s<e)?r=a+1:i=a}return i}return ry(t,e,oU,n)}function ry(t,e,r,i){var a=0,s=null==t?0:t.length;if(0===s)return 0;e=r(e);for(var l=e!=e,u=null===e,c=a0(e),h=e===n;a<s;){var p=eY((a+s)/2),f=r(t[p]),d=f!==n,m=null===f,g=f==f,v=a0(f);if(l)var _=i||g;else _=h?g&&(i||d):u?g&&d&&(i||!m):c?g&&d&&!m&&(i||!v):!m&&!v&&(i?f<=e:f<e);_?a=p+1:s=p}return e6(s,4294967294)}function rx(t,e){for(var n=-1,r=t.length,i=0,a=[];++n<r;){var s=t[n],l=e?e(s):s;if(!n||!aL(l,u)){var u=l;a[i++]=0===s?0:s}}return a}function rb(t){return"number"==typeof t?t:a0(t)?l:+t}function rw(t){if("string"==typeof t)return t;if(aF(t))return ef(t,rw)+"";if(a0(t))return nd?nd.call(t):"";var e=t+"";return"0"==e&&1/t==-s?"-0":e}function rC(t,e,n){var r=-1,i=eh,a=t.length,s=!0,l=[],u=l;if(n)s=!1,i=ep;else if(a>=200){var c=e?null:r9(t);if(c)return eV(c);s=!1,i=eR,u=new nC}else u=e?[]:l;t:for(;++r<a;){var h=t[r],p=e?e(h):h;if(h=n||0!==h?h:0,s&&p==p){for(var f=u.length;f--;)if(u[f]===p)continue t;e&&u.push(p),l.push(h)}else i(u,p,n)||(u!==l&&u.push(p),l.push(h))}return l}function rS(t,e){return e=rL(e,t),null==(t=iz(t,e))||delete t[iU(iK(e))]}function rM(t,e,n,r){return rf(t,e,n(nQ(t,e)),r)}function rP(t,e,n,r){for(var i=t.length,a=r?i:-1;(r?a--:++a<i)&&e(t[a],a,t););return n?rg(t,r?0:a,r?a+1:i):rg(t,r?a+1:0,r?i:a)}function rE(t,e){var n=t;return n instanceof ny&&(n=n.value()),em(e,function(t,e){return e.func.apply(e.thisArg,ed([t],e.args))},n)}function rT(t,e,n){var r=t.length;if(r<2)return r?rC(t[0]):[];for(var i=-1,a=ty(r);++i<r;)for(var s=t[i],l=-1;++l<r;)l!=i&&(a[i]=nj(a[i]||s,t[l],e,n));return rC(nH(a,1),e,n)}function rk(t,e,r){for(var i=-1,a=t.length,s=e.length,l={};++i<a;){var u=i<s?e[i]:n;r(l,t[i],u)}return l}function rz(t){return aU(t)?t:[]}function rA(t){return"function"==typeof t?t:oU}function rL(t,e){return aF(t)?t:iS(t,e)?[t]:ij(ot(t))}function rR(t,e,r){var i=t.length;return r=r===n?i:r,!e&&r>=i?t:rg(t,e,r)}var rD=e_||function(t){return t6.clearTimeout(t)};function rI(t,e){if(e)return t.slice();var n=t.length,r=tq?tq(n):new t.constructor(n);return t.copy(r),r}function rF(t){var e=new t.constructor(t.byteLength);return new tW(e).set(new tW(t)),e}function rO(t,e){var n=e?rF(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}function rj(t,e){if(t!==e){var r=t!==n,i=null===t,a=t==t,s=a0(t),l=e!==n,u=null===e,c=e==e,h=a0(e);if(!u&&!h&&!s&&t>e||s&&l&&c&&!u&&!h||i&&l&&c||!r&&c||!a)return 1;if(!i&&!s&&!h&&t<e||h&&r&&a&&!i&&!s||u&&r&&a||!l&&a||!c)return -1}return 0}function rU(t,e,n,r){for(var i=-1,a=t.length,s=n.length,l=-1,u=e.length,c=e2(a-s,0),h=ty(u+c),p=!r;++l<u;)h[l]=e[l];for(;++i<s;)(p||i<a)&&(h[n[i]]=t[i]);for(;c--;)h[l++]=t[i++];return h}function rN(t,e,n,r){for(var i=-1,a=t.length,s=-1,l=n.length,u=-1,c=e.length,h=e2(a-l,0),p=ty(h+c),f=!r;++i<h;)p[i]=t[i];for(var d=i;++u<c;)p[d+u]=e[u];for(;++s<l;)(f||i<a)&&(p[d+n[s]]=t[i++]);return p}function rB(t,e){var n=-1,r=t.length;for(e||(e=ty(r));++n<r;)e[n]=t[n];return e}function rW(t,e,r,i){var a=!r;r||(r={});for(var s=-1,l=e.length;++s<l;){var u=e[s],c=i?i(r[u],t[u],u,r,t):n;c===n&&(c=t[u]),a?nL(r,u,c):nT(r,u,c)}return r}function rV(t,e){return function(n,r){var i=aF(n)?es:nz,a=e?e():{};return i(n,t,ih(r,2),a)}}function rH(t){return rp(function(e,r){var i=-1,a=r.length,s=a>1?r[a-1]:n,l=a>2?r[2]:n;for(s=t.length>3&&"function"==typeof s?(a--,s):n,l&&iC(r[0],r[1],l)&&(s=a<3?n:s,a=1),e=tS(e);++i<a;){var u=r[i];u&&t(e,u,i,s)}return e})}function rq(t,e){return function(n,r){if(null==n)return n;if(!aj(n))return t(n,r);for(var i=n.length,a=e?i:-1,s=tS(n);(e?a--:++a<i)&&!1!==r(s[a],a,s););return n}}function r$(t){return function(e,n,r){for(var i=-1,a=tS(e),s=r(e),l=s.length;l--;){var u=s[t?l:++i];if(!1===n(a[u],u,a))break}return e}}function rG(t){return function(e){var r=eU(e=ot(e))?eq(e):n,i=r?r[0]:e.charAt(0),a=r?rR(r,1).join(""):e.slice(1);return i[t]()+a}}function rZ(t){return function(e){return em(oR(oM(e).replace(tV,"")),t,"")}}function rJ(t){return function(){var e=arguments;switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3]);case 5:return new t(e[0],e[1],e[2],e[3],e[4]);case 6:return new t(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new t(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var n=ng(t.prototype),r=t.apply(n,e);return a$(r)?r:n}}function rQ(t){return function(e,r,i){var a=tS(e);if(!aj(e)){var s=ih(r,3);e=of(e),r=function(t){return s(a[t],t,a)}}var l=t(e,r,i);return l>-1?a[s?e[l]:l]:n}}function rY(t){return ia(function(e){var i=e.length,a=i,s=n_.prototype.thru;for(t&&e.reverse();a--;){var l=e[a];if("function"!=typeof l)throw new tE(r);if(s&&!u&&"wrapper"==iu(l))var u=new n_([],!0)}for(a=u?a:i;++a<i;){var c=iu(l=e[a]),h="wrapper"==c?il(l):n;u=h&&iM(h[0])&&424==h[1]&&!h[4].length&&1==h[9]?u[iu(h[0])].apply(u,h[3]):1==l.length&&iM(l)?u[c]():u.thru(l)}return function(){var t=arguments,n=t[0];if(u&&1==t.length&&aF(n))return u.plant(n).value();for(var r=0,a=i?e[r].apply(this,t):n;++r<i;)a=e[r].call(this,a);return a}})}function rK(t,e,r,i,a,s,l,u,c,h){var p=128&e,f=1&e,d=2&e,m=24&e,g=512&e,v=d?n:rJ(t);return function _(){for(var y=arguments.length,x=ty(y),b=y;b--;)x[b]=arguments[b];if(m)var w=ic(_),C=function(t,e){for(var n=t.length,r=0;n--;)t[n]===e&&++r;return r}(x,w);if(i&&(x=rU(x,i,a,m)),s&&(x=rN(x,s,l,m)),y-=C,m&&y<h){var S=eW(x,w);return r5(t,e,rK,_.placeholder,r,x,S,u,c,h-y)}var M=f?r:this,P=d?M[t]:t;return y=x.length,u?x=function(t,e){for(var r=t.length,i=e6(e.length,r),a=rB(t);i--;){var s=e[i];t[i]=iw(s,r)?a[s]:n}return t}(x,u):g&&y>1&&x.reverse(),p&&c<y&&(x.length=c),this&&this!==t6&&this instanceof _&&(P=v||rJ(P)),P.apply(M,x)}}function rX(t,e){return function(n,r){var i,a;return i=e(r),a={},nG(n,function(e,n,r){t(a,i(e),n,r)}),a}}function r0(t,e){return function(r,i){var a;if(r===n&&i===n)return e;if(r!==n&&(a=r),i!==n){if(a===n)return i;"string"==typeof r||"string"==typeof i?(r=rw(r),i=rw(i)):(r=rb(r),i=rb(i)),a=t(r,i)}return a}}function r1(t){return ia(function(e){return e=ef(e,eA(ih())),rp(function(n){var r=this;return t(e,function(t){return eo(t,r,n)})})})}function r3(t,e){var r=(e=e===n?" ":rw(e)).length;if(r<2)return r?rh(e,t):e;var i=rh(e,eQ(t/eH(e)));return eU(e)?rR(eq(i),0,t).join(""):i.slice(0,t)}function r2(t){return function(e,r,i){return i&&"number"!=typeof i&&iC(e,r,i)&&(r=i=n),e=a5(e),r===n?(r=e,e=0):r=a5(r),i=i===n?e<r?1:-1:a5(i),function(t,e,n,r){for(var i=-1,a=e2(eQ((e-t)/(n||1)),0),s=ty(a);a--;)s[r?a:++i]=t,t+=n;return s}(e,r,i,t)}}function r6(t){return function(e,n){return"string"==typeof e&&"string"==typeof n||(e=a7(e),n=a7(n)),t(e,n)}}function r5(t,e,r,i,a,s,l,u,c,h){var p=8&e,f=p?l:n,d=p?n:l,m=p?s:n,g=p?n:s;e|=p?32:64,4&(e&=~(p?64:32))||(e&=-4);var v=[t,e,a,m,f,g,d,u,c,h],_=r.apply(n,v);return iM(t)&&iL(_,v),_.placeholder=i,iI(_,t,e)}function r4(t){var e=tC[t];return function(t,n){if(t=a7(t),(n=null==n?0:e6(a4(n),292))&&e0(t)){var r=(ot(t)+"e").split("e");return+((r=(ot(e(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return e(t)}}var r9=nn&&1/eV(new nn([,-0]))[1]==s?function(t){return new nn(t)}:oH;function r7(t){return function(e){var n,r,i=i_(e);return i==v?eN(e):i==w?(n=-1,r=Array(e.size),e.forEach(function(t){r[++n]=[t,t]}),r):ef(t(e),function(t){return[t,e[t]]})}}function r8(t,e,i,s,l,u,c,h){var p=2&e;if(!p&&"function"!=typeof t)throw new tE(r);var f=s?s.length:0;if(f||(e&=-97,s=l=n),c=c===n?c:e2(a4(c),0),h=h===n?h:a4(h),f-=l?l.length:0,64&e){var d=s,m=l;s=l=n}var g=p?n:il(t),v=[t,e,i,s,l,d,m,u,c,h];if(g&&function(t,e){var n=t[1],r=e[1],i=n|r,s=i<131,l=128==r&&8==n||128==r&&256==n&&t[7].length<=e[8]||384==r&&e[7].length<=e[8]&&8==n;if(s||l){1&r&&(t[2]=e[2],i|=1&n?0:4);var u=e[3];if(u){var c=t[3];t[3]=c?rU(c,u,e[4]):u,t[4]=c?eW(t[3],a):e[4]}(u=e[5])&&(c=t[5],t[5]=c?rN(c,u,e[6]):u,t[6]=c?eW(t[5],a):e[6]),(u=e[7])&&(t[7]=u),128&r&&(t[8]=null==t[8]?e[8]:e6(t[8],e[8])),null==t[9]&&(t[9]=e[9]),t[0]=e[0],t[1]=i}}(v,g),t=v[0],e=v[1],i=v[2],s=v[3],l=v[4],(h=v[9]=v[9]===n?p?0:t.length:e2(v[9]-f,0))||!(24&e)||(e&=-25),e&&1!=e)8==e||16==e?(_=t,y=e,x=h,b=rJ(_),R=function t(){for(var e=arguments.length,r=ty(e),i=e,a=ic(t);i--;)r[i]=arguments[i];var s=e<3&&r[0]!==a&&r[e-1]!==a?[]:eW(r,a);return(e-=s.length)<x?r5(_,y,rK,t.placeholder,n,r,s,n,n,x-e):eo(this&&this!==t6&&this instanceof t?b:_,this,r)}):32!=e&&33!=e||l.length?R=rK.apply(n,v):(w=t,C=e,S=i,M=s,P=1&C,E=rJ(w),R=function t(){for(var e=-1,n=arguments.length,r=-1,i=M.length,a=ty(i+n),s=this&&this!==t6&&this instanceof t?E:w;++r<i;)a[r]=M[r];for(;n--;)a[r++]=arguments[++e];return eo(s,P?S:this,a)});else var _,y,x,b,w,C,S,M,P,E,T,k,z,A,L,R=(T=t,k=e,z=i,A=1&k,L=rJ(T),function t(){return(this&&this!==t6&&this instanceof t?L:T).apply(A?z:this,arguments)});return iI((g?rd:iL)(R,v),t,e)}function it(t,e,r,i){return t===n||aL(t,tz[r])&&!tR.call(i,r)?e:t}function ie(t,e,r,i,a,s){return a$(t)&&a$(e)&&(s.set(e,t),ri(t,e,n,ie,s),s.delete(e)),t}function ir(t){return aQ(t)?n:t}function ii(t,e,r,i,a,s){var l=1&r,u=t.length,c=e.length;if(u!=c&&!(l&&c>u))return!1;var h=s.get(t),p=s.get(e);if(h&&p)return h==e&&p==t;var f=-1,d=!0,m=2&r?new nC:n;for(s.set(t,e),s.set(e,t);++f<u;){var g=t[f],v=e[f];if(i)var _=l?i(v,g,f,e,t,s):i(g,v,f,t,e,s);if(_!==n){if(_)continue;d=!1;break}if(m){if(!ev(e,function(t,e){if(!eR(m,e)&&(g===t||a(g,t,r,i,s)))return m.push(e)})){d=!1;break}}else if(!(g===v||a(g,v,r,i,s))){d=!1;break}}return s.delete(t),s.delete(e),d}function ia(t){return iD(ik(t,n,iG),t+"")}function io(t){return nY(t,of,ig)}function is(t){return nY(t,od,iv)}var il=na?function(t){return na.get(t)}:oH;function iu(t){for(var e=t.name+"",n=no[e],r=tR.call(no,e)?n.length:0;r--;){var i=n[r],a=i.func;if(null==a||a==t)return i.name}return e}function ic(t){return(tR.call(nm,"placeholder")?nm:t).placeholder}function ih(){var t=nm.iteratee||oN;return t=t===oN?n7:t,arguments.length?t(arguments[0],arguments[1]):t}function ip(t,e){var n,r=t.__data__;return("string"==(n=typeof e)||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?r["string"==typeof e?"string":"hash"]:r.map}function id(t){for(var e=of(t),n=e.length;n--;){var r=e[n],i=t[r];e[n]=[r,i,i==i&&!a$(i)]}return e}function im(t,e){var r=null==t?n:t[e];return n9(r)?r:n}var ig=eK?function(t){return null==t?[]:ec(eK(t=tS(t)),function(e){return t3.call(t,e)})}:oY,iv=eK?function(t){for(var e=[];t;)ed(e,ig(t)),t=tG(t);return e}:oY,i_=nK;function iy(t,e,n){e=rL(e,t);for(var r=-1,i=e.length,a=!1;++r<i;){var s=iU(e[r]);if(!(a=null!=t&&n(t,s)))break;t=t[s]}return a||++r!=i?a:!!(i=null==t?0:t.length)&&aq(i)&&iw(s,i)&&(aF(t)||aI(t))}function ix(t){return"function"!=typeof t.constructor||iE(t)?{}:ng(tG(t))}function ib(t){return aF(t)||aI(t)||!!(t5&&t&&t[t5])}function iw(t,e){var n=typeof t;return!!(e=e??9007199254740991)&&("number"==n||"symbol"!=n&&tp.test(t))&&t>-1&&t%1==0&&t<e}function iC(t,e,n){if(!a$(n))return!1;var r=typeof e;return("number"==r?!!(aj(n)&&iw(e,n.length)):"string"==r&&e in n)&&aL(n[e],t)}function iS(t,e){if(aF(t))return!1;var n=typeof t;return!!("number"==n||"symbol"==n||"boolean"==n||null==t||a0(t))||Z.test(t)||!G.test(t)||null!=e&&t in tS(e)}function iM(t){var e=iu(t),n=nm[e];if("function"!=typeof n||!(e in ny.prototype))return!1;if(t===n)return!0;var r=il(n);return!!r&&t===r[0]}(e8&&i_(new e8(new ArrayBuffer(1)))!=E||nt&&i_(new nt)!=v||ne&&i_(ne.resolve())!=x||nn&&i_(new nn)!=w||nr&&i_(new nr)!=M)&&(i_=function(t){var e=nK(t),r=e==y?t.constructor:n,i=r?iN(r):"";if(i)switch(i){case ns:return E;case nl:return v;case nu:return x;case nc:return w;case nh:return M}return e});var iP=tA?aV:oK;function iE(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||tz)}function iT(t,e){return function(r){return null!=r&&r[t]===e&&(e!==n||t in tS(r))}}function ik(t,e,r){return e=e2(e===n?t.length-1:e,0),function(){for(var n=arguments,i=-1,a=e2(n.length-e,0),s=ty(a);++i<a;)s[i]=n[e+i];i=-1;for(var l=ty(e+1);++i<e;)l[i]=n[i];return l[e]=r(s),eo(t,this,l)}}function iz(t,e){return e.length<2?t:nQ(t,rg(e,0,-1))}function iA(t,e){if(!("constructor"===e&&"function"==typeof t[e])&&"__proto__"!=e)return t[e]}var iL=iF(rd),iR=eJ||function(t,e){return t6.setTimeout(t,e)},iD=iF(rm);function iI(t,e,n){var r,i,a=e+"";return iD(t,function(t,e){var n=e.length;if(!n)return t;var r=n-1;return e[r]=(n>1?"& ":"")+e[r],e=e.join(n>2?", ":" "),t.replace(tt,`{
/* [wrapped with `+e+`] */
`)}(a,(r=(i=a.match(te))?i[1].split(tn):[],el(u,function(t){var e="_."+t[0];n&t[1]&&!eh(r,e)&&r.push(e)}),r.sort())))}function iF(t){var e=0,r=0;return function(){var i=e5(),a=16-(i-r);if(r=i,a>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(n,arguments)}}function iO(t,e){var r=-1,i=t.length,a=i-1;for(e=e===n?i:e;++r<e;){var s=rc(r,a),l=t[s];t[s]=t[r],t[r]=l}return t.length=e,t}var ij=(tv=(tg=aP(function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(J,function(t,n,r,i){e.push(r?i.replace(ta,"$1"):n||t)}),e},function(t){return 500===tv.size&&tv.clear(),t})).cache,tg);function iU(t){if("string"==typeof t||a0(t))return t;var e=t+"";return"0"==e&&1/t==-s?"-0":e}function iN(t){if(null!=t){try{return tL.call(t)}catch{}try{return t+""}catch{}}return""}function iB(t){if(t instanceof ny)return t.clone();var e=new n_(t.__wrapped__,t.__chain__);return e.__actions__=rB(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}var iW=rp(function(t,e){return aU(t)?nj(t,nH(e,1,aU,!0)):[]}),iV=rp(function(t,e){var r=iK(e);return aU(r)&&(r=n),aU(t)?nj(t,nH(e,1,aU,!0),ih(r,2)):[]}),iH=rp(function(t,e){var r=iK(e);return aU(r)&&(r=n),aU(t)?nj(t,nH(e,1,aU,!0),n,r):[]});function iq(t,e,n){var r=null==t?0:t.length;if(!r)return -1;var i=null==n?0:a4(n);return i<0&&(i=e2(r+i,0)),ex(t,ih(e,3),i)}function i$(t,e,r){var i=null==t?0:t.length;if(!i)return -1;var a=i-1;return r!==n&&(a=a4(r),a=r<0?e2(i+a,0):e6(a,i-1)),ex(t,ih(e,3),a,!0)}function iG(t){return(null==t?0:t.length)?nH(t,1):[]}function iZ(t){return t&&t.length?t[0]:n}var iJ=rp(function(t){var e=ef(t,rz);return e.length&&e[0]===t[0]?n3(e):[]}),iQ=rp(function(t){var e=iK(t),r=ef(t,rz);return e===iK(r)?e=n:r.pop(),r.length&&r[0]===t[0]?n3(r,ih(e,2)):[]}),iY=rp(function(t){var e=iK(t),r=ef(t,rz);return(e="function"==typeof e?e:n)&&r.pop(),r.length&&r[0]===t[0]?n3(r,n,e):[]});function iK(t){var e=null==t?0:t.length;return e?t[e-1]:n}var iX=rp(i0);function i0(t,e){return t&&t.length&&e&&e.length?rl(t,e):t}var i1=ia(function(t,e){var n=null==t?0:t.length,r=nR(t,e);return ru(t,ef(e,function(t){return iw(t,n)?+t:t}).sort(rj)),r});function i3(t){return null==t?t:e7.call(t)}var i2=rp(function(t){return rC(nH(t,1,aU,!0))}),i6=rp(function(t){var e=iK(t);return aU(e)&&(e=n),rC(nH(t,1,aU,!0),ih(e,2))}),i5=rp(function(t){var e=iK(t);return e="function"==typeof e?e:n,rC(nH(t,1,aU,!0),n,e)});function i4(t){if(!(t&&t.length))return[];var e=0;return t=ec(t,function(t){if(aU(t))return e=e2(t.length,e),!0}),ek(e,function(e){return ef(t,eM(e))})}function i9(t,e){if(!(t&&t.length))return[];var r=i4(t);return null==e?r:ef(r,function(t){return eo(e,n,t)})}var i7=rp(function(t,e){return aU(t)?nj(t,e):[]}),i8=rp(function(t){return rT(ec(t,aU))}),at=rp(function(t){var e=iK(t);return aU(e)&&(e=n),rT(ec(t,aU),ih(e,2))}),ae=rp(function(t){var e=iK(t);return e="function"==typeof e?e:n,rT(ec(t,aU),n,e)}),an=rp(i4),ar=rp(function(t){var e=t.length,r=e>1?t[e-1]:n;return r="function"==typeof r?(t.pop(),r):n,i9(t,r)});function ai(t){var e=nm(t);return e.__chain__=!0,e}function aa(t,e){return e(t)}var ao=ia(function(t){var e=t.length,r=e?t[0]:0,i=this.__wrapped__,a=function(e){return nR(e,t)};return!(e>1)&&!this.__actions__.length&&i instanceof ny&&iw(r)?((i=i.slice(r,+r+(e?1:0))).__actions__.push({func:aa,args:[a],thisArg:n}),new n_(i,this.__chain__).thru(function(t){return e&&!t.length&&t.push(n),t})):this.thru(a)}),as=rV(function(t,e,n){tR.call(t,n)?++t[n]:nL(t,n,1)}),al=rQ(iq),au=rQ(i$);function ac(t,e){return(aF(t)?el:nU)(t,ih(e,3))}function ah(t,e){return(aF(t)?function(t,e){for(var n=null==t?0:t.length;n--&&!1!==e(t[n],n,t););return t}:nN)(t,ih(e,3))}var ap=rV(function(t,e,n){tR.call(t,n)?t[n].push(e):nL(t,n,[e])}),af=rp(function(t,e,n){var r=-1,i="function"==typeof e,a=aj(t)?ty(t.length):[];return nU(t,function(t){a[++r]=i?eo(e,t,n):n2(t,e,n)}),a}),ad=rV(function(t,e,n){nL(t,n,e)});function am(t,e){return(aF(t)?ef:re)(t,ih(e,3))}var ag=rV(function(t,e,n){t[n?0:1].push(e)},function(){return[[],[]]}),av=rp(function(t,e){if(null==t)return[];var n=e.length;return n>1&&iC(t,e[0],e[1])?e=[]:n>2&&iC(e[0],e[1],e[2])&&(e=[e[0]]),ro(t,nH(e,1),[])}),a_=eP||function(){return t6.Date.now()};function ay(t,e,r){return e=r?n:e,e=t&&null==e?t.length:e,r8(t,128,n,n,n,n,e)}function ax(t,e){var i;if("function"!=typeof e)throw new tE(r);return t=a4(t),function(){return--t>0&&(i=e.apply(this,arguments)),t<=1&&(e=n),i}}var ab=rp(function(t,e,n){var r=1;if(n.length){var i=eW(n,ic(ab));r|=32}return r8(t,r,e,n,i)}),aw=rp(function(t,e,n){var r=3;if(n.length){var i=eW(n,ic(aw));r|=32}return r8(e,r,t,n,i)});function aC(t,e,i){var a,s,l,u,c,h,p=0,f=!1,d=!1,m=!0;if("function"!=typeof t)throw new tE(r);function g(e){var r=a,i=s;return a=s=n,p=e,u=t.apply(i,r)}function v(t){var r=t-h,i=t-p;return h===n||r>=e||r<0||d&&i>=l}function _(){var t,n,r,i=a_();if(v(i))return y(i);c=iR(_,(t=i-h,n=i-p,r=e-t,d?e6(r,l-n):r))}function y(t){return c=n,m&&a?g(t):(a=s=n,u)}function x(){var t,r=a_(),i=v(r);if(a=arguments,s=this,h=r,i){if(c===n)return p=t=h,c=iR(_,e),f?g(t):u;if(d)return rD(c),c=iR(_,e),g(h)}return c===n&&(c=iR(_,e)),u}return e=a7(e)||0,a$(i)&&(f=!!i.leading,l=(d="maxWait"in i)?e2(a7(i.maxWait)||0,e):l,m="trailing"in i?!!i.trailing:m),x.cancel=function(){c!==n&&rD(c),p=0,a=h=s=c=n},x.flush=function(){return c===n?u:y(a_())},x}var aS=rp(function(t,e){return nO(t,1,e)}),aM=rp(function(t,e,n){return nO(t,a7(e)||0,n)});function aP(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new tE(r);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var s=t.apply(this,r);return n.cache=a.set(i,s)||a,s};return n.cache=new(aP.Cache||nw),n}function aE(t){if("function"!=typeof t)throw new tE(r);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}aP.Cache=nw;var aT=rp(function(t,e){var n=(e=1==e.length&&aF(e[0])?ef(e[0],eA(ih())):ef(nH(e,1),eA(ih()))).length;return rp(function(r){for(var i=-1,a=e6(r.length,n);++i<a;)r[i]=e[i].call(this,r[i]);return eo(t,this,r)})}),ak=rp(function(t,e){var r=eW(e,ic(ak));return r8(t,32,n,e,r)}),az=rp(function(t,e){var r=eW(e,ic(az));return r8(t,64,n,e,r)}),aA=ia(function(t,e){return r8(t,256,n,n,n,e)});function aL(t,e){return t===e||t!=t&&e!=e}var aR=r6(nX),aD=r6(function(t,e){return t>=e}),aI=n6(function(){return arguments}())?n6:function(t){return aG(t)&&tR.call(t,"callee")&&!t3.call(t,"callee")},aF=ty.isArray,aO=et?eA(et):function(t){return aG(t)&&nK(t)==P};function aj(t){return null!=t&&aq(t.length)&&!aV(t)}function aU(t){return aG(t)&&aj(t)}var aN=eX||oK,aB=ee?eA(ee):function(t){return aG(t)&&nK(t)==f};function aW(t){if(!aG(t))return!1;var e=nK(t);return e==d||"[object DOMException]"==e||"string"==typeof t.message&&"string"==typeof t.name&&!aQ(t)}function aV(t){if(!a$(t))return!1;var e=nK(t);return e==m||e==g||"[object AsyncFunction]"==e||"[object Proxy]"==e}function aH(t){return"number"==typeof t&&t==a4(t)}function aq(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}function a$(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function aG(t){return null!=t&&"object"==typeof t}var aZ=en?eA(en):function(t){return aG(t)&&i_(t)==v};function aJ(t){return"number"==typeof t||aG(t)&&nK(t)==_}function aQ(t){if(!aG(t)||nK(t)!=y)return!1;var e=tG(t);if(null===e)return!0;var n=tR.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&tL.call(n)==tO}var aY=er?eA(er):function(t){return aG(t)&&nK(t)==b},aK=ei?eA(ei):function(t){return aG(t)&&i_(t)==w};function aX(t){return"string"==typeof t||!aF(t)&&aG(t)&&nK(t)==C}function a0(t){return"symbol"==typeof t||aG(t)&&nK(t)==S}var a1=ea?eA(ea):function(t){return aG(t)&&aq(t.length)&&!!tY[nK(t)]},a3=r6(rt),a2=r6(function(t,e){return t<=e});function a6(t){if(!t)return[];if(aj(t))return aX(t)?eq(t):rB(t);if(t4&&t[t4])return function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n}(t[t4]());var e=i_(t);return(e==v?eN:e==w?eV:ow)(t)}function a5(t){return t?(t=a7(t))===s||t===-s?(t<0?-1:1)*17976931348623157e292:t==t?t:0:0===t?t:0}function a4(t){var e=a5(t),n=e%1;return e==e?n?e-n:e:0}function a9(t){return t?nD(a4(t),0,4294967295):0}function a7(t){if("number"==typeof t)return t;if(a0(t))return l;if(a$(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=a$(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=ez(t);var n=tu.test(t);return n||th.test(t)?t1(t.slice(2),n?2:8):tl.test(t)?l:+t}function a8(t){return rW(t,od(t))}function ot(t){return null==t?"":rw(t)}var oe=rH(function(t,e){if(iE(e)||aj(e)){rW(e,of(e),t);return}for(var n in e)tR.call(e,n)&&nT(t,n,e[n])}),on=rH(function(t,e){rW(e,od(e),t)}),or=rH(function(t,e,n,r){rW(e,od(e),t,r)}),oi=rH(function(t,e,n,r){rW(e,of(e),t,r)}),oa=ia(nR),oo=rp(function(t,e){t=tS(t);var r=-1,i=e.length,a=i>2?e[2]:n;for(a&&iC(e[0],e[1],a)&&(i=1);++r<i;)for(var s=e[r],l=od(s),u=-1,c=l.length;++u<c;){var h=l[u],p=t[h];(p===n||aL(p,tz[h])&&!tR.call(t,h))&&(t[h]=s[h])}return t}),os=rp(function(t){return t.push(n,ie),eo(og,n,t)});function ol(t,e,r){var i=null==t?n:nQ(t,e);return i===n?r:i}function ou(t,e){return null!=t&&iy(t,e,n1)}var oc=rX(function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=tF.call(e)),t[e]=n},oF(oU)),oh=rX(function(t,e,n){null!=e&&"function"!=typeof e.toString&&(e=tF.call(e)),tR.call(t,e)?t[e].push(n):t[e]=[n]},ih),op=rp(n2);function of(t){return aj(t)?nM(t):n8(t)}function od(t){return aj(t)?nM(t,!0):function(t){if(!a$(t))return function(t){var e=[];if(null!=t)for(var n in tS(t))e.push(n);return e}(t);var e=iE(t),n=[];for(var r in t)"constructor"==r&&(e||!tR.call(t,r))||n.push(r);return n}(t)}var om=rH(function(t,e,n){ri(t,e,n)}),og=rH(function(t,e,n,r){ri(t,e,n,r)}),ov=ia(function(t,e){var n={};if(null==t)return n;var r=!1;e=ef(e,function(e){return e=rL(e,t),r||(r=e.length>1),e}),rW(t,is(t),n),r&&(n=nI(n,7,ir));for(var i=e.length;i--;)rS(n,e[i]);return n}),o_=ia(function(t,e){return null==t?{}:rs(t,e,function(e,n){return ou(t,n)})});function oy(t,e){if(null==t)return{};var n=ef(is(t),function(t){return[t]});return e=ih(e),rs(t,n,function(t,n){return e(t,n[0])})}var ox=r7(of),ob=r7(od);function ow(t){return null==t?[]:eL(t,of(t))}var oC=rZ(function(t,e,n){return e=e.toLowerCase(),t+(n?oS(e):e)});function oS(t){return oL(ot(t).toLowerCase())}function oM(t){return(t=ot(t))&&t.replace(tf,eF).replace(tH,"")}var oP=rZ(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}),oE=rZ(function(t,e,n){return t+(n?" ":"")+e.toLowerCase()}),oT=rG("toLowerCase"),ok=rZ(function(t,e,n){return t+(n?"_":"")+e.toLowerCase()}),oz=rZ(function(t,e,n){return t+(n?" ":"")+oL(e)}),oA=rZ(function(t,e,n){return t+(n?" ":"")+e.toUpperCase()}),oL=rG("toUpperCase");function oR(t,e,r){var i;return t=ot(t),(e=r?n:e)===n?(i=t,tZ.test(i))?t.match(t$)||[]:t.match(tr)||[]:t.match(e)||[]}var oD=rp(function(t,e){try{return eo(t,n,e)}catch(t){return aW(t)?t:new tb(t)}}),oI=ia(function(t,e){return el(e,function(e){nL(t,e=iU(e),ab(t[e],t))}),t});function oF(t){return function(){return t}}var oO=rY(),oj=rY(!0);function oU(t){return t}function oN(t){return n7("function"==typeof t?t:nI(t,1))}var oB=rp(function(t,e){return function(n){return n2(n,t,e)}}),oW=rp(function(t,e){return function(n){return n2(t,n,e)}});function oV(t,e,n){var r=of(e),i=nJ(e,r);null!=n||a$(e)&&(i.length||!r.length)||(n=e,e=t,t=this,i=nJ(e,of(e)));var a=!(a$(n)&&"chain"in n)||!!n.chain,s=aV(t);return el(i,function(n){var r=e[n];t[n]=r,s&&(t.prototype[n]=function(){var e=this.__chain__;if(a||e){var n=t(this.__wrapped__);return(n.__actions__=rB(this.__actions__)).push({func:r,args:arguments,thisArg:t}),n.__chain__=e,n}return r.apply(t,ed([this.value()],arguments))})}),t}function oH(){}var oq=r1(ef),o$=r1(eu),oG=r1(ev);function oZ(t){return iS(t)?eM(iU(t)):function(e){return nQ(e,t)}}var oJ=r2(),oQ=r2(!0);function oY(){return[]}function oK(){return!1}var oX=r0(function(t,e){return t+e},0),o0=r4("ceil"),o1=r0(function(t,e){return t/e},1),o3=r4("floor"),o2=r0(function(t,e){return t*e},1),o6=r4("round"),o5=r0(function(t,e){return t-e},0);return nm.after=function(t,e){if("function"!=typeof e)throw new tE(r);return t=a4(t),function(){if(--t<1)return e.apply(this,arguments)}},nm.ary=ay,nm.assign=oe,nm.assignIn=on,nm.assignInWith=or,nm.assignWith=oi,nm.at=oa,nm.before=ax,nm.bind=ab,nm.bindAll=oI,nm.bindKey=aw,nm.castArray=function(){if(!arguments.length)return[];var t=arguments[0];return aF(t)?t:[t]},nm.chain=ai,nm.chunk=function(t,e,r){e=(r?iC(t,e,r):e===n)?1:e2(a4(e),0);var i=null==t?0:t.length;if(!i||e<1)return[];for(var a=0,s=0,l=ty(eQ(i/e));a<i;)l[s++]=rg(t,a,a+=e);return l},nm.compact=function(t){for(var e=-1,n=null==t?0:t.length,r=0,i=[];++e<n;){var a=t[e];a&&(i[r++]=a)}return i},nm.concat=function(){var t=arguments.length;if(!t)return[];for(var e=ty(t-1),n=arguments[0],r=t;r--;)e[r-1]=arguments[r];return ed(aF(n)?rB(n):[n],nH(e,1))},nm.cond=function(t){var e=null==t?0:t.length,n=ih();return t=e?ef(t,function(t){if("function"!=typeof t[1])throw new tE(r);return[n(t[0]),t[1]]}):[],rp(function(n){for(var r=-1;++r<e;){var i=t[r];if(eo(i[0],this,n))return eo(i[1],this,n)}})},nm.conforms=function(t){var e,n;return n=of(e=nI(t,1)),function(t){return nF(t,e,n)}},nm.constant=oF,nm.countBy=as,nm.create=function(t,e){var n=ng(t);return null==e?n:nA(n,e)},nm.curry=function t(e,r,i){r=i?n:r;var a=r8(e,8,n,n,n,n,n,r);return a.placeholder=t.placeholder,a},nm.curryRight=function t(e,r,i){r=i?n:r;var a=r8(e,16,n,n,n,n,n,r);return a.placeholder=t.placeholder,a},nm.debounce=aC,nm.defaults=oo,nm.defaultsDeep=os,nm.defer=aS,nm.delay=aM,nm.difference=iW,nm.differenceBy=iV,nm.differenceWith=iH,nm.drop=function(t,e,r){var i=null==t?0:t.length;return i?rg(t,(e=r||e===n?1:a4(e))<0?0:e,i):[]},nm.dropRight=function(t,e,r){var i=null==t?0:t.length;return i?rg(t,0,(e=i-(e=r||e===n?1:a4(e)))<0?0:e):[]},nm.dropRightWhile=function(t,e){return t&&t.length?rP(t,ih(e,3),!0,!0):[]},nm.dropWhile=function(t,e){return t&&t.length?rP(t,ih(e,3),!0):[]},nm.fill=function(t,e,r,i){var a=null==t?0:t.length;return a?(r&&"number"!=typeof r&&iC(t,e,r)&&(r=0,i=a),function(t,e,r,i){var a=t.length;for((r=a4(r))<0&&(r=-r>a?0:a+r),(i=i===n||i>a?a:a4(i))<0&&(i+=a),i=r>i?0:a9(i);r<i;)t[r++]=e;return t}(t,e,r,i)):[]},nm.filter=function(t,e){return(aF(t)?ec:nV)(t,ih(e,3))},nm.flatMap=function(t,e){return nH(am(t,e),1)},nm.flatMapDeep=function(t,e){return nH(am(t,e),s)},nm.flatMapDepth=function(t,e,r){return r=r===n?1:a4(r),nH(am(t,e),r)},nm.flatten=iG,nm.flattenDeep=function(t){return(null==t?0:t.length)?nH(t,s):[]},nm.flattenDepth=function(t,e){return(null==t?0:t.length)?nH(t,e=e===n?1:a4(e)):[]},nm.flip=function(t){return r8(t,512)},nm.flow=oO,nm.flowRight=oj,nm.fromPairs=function(t){for(var e=-1,n=null==t?0:t.length,r={};++e<n;){var i=t[e];r[i[0]]=i[1]}return r},nm.functions=function(t){return null==t?[]:nJ(t,of(t))},nm.functionsIn=function(t){return null==t?[]:nJ(t,od(t))},nm.groupBy=ap,nm.initial=function(t){return(null==t?0:t.length)?rg(t,0,-1):[]},nm.intersection=iJ,nm.intersectionBy=iQ,nm.intersectionWith=iY,nm.invert=oc,nm.invertBy=oh,nm.invokeMap=af,nm.iteratee=oN,nm.keyBy=ad,nm.keys=of,nm.keysIn=od,nm.map=am,nm.mapKeys=function(t,e){var n={};return e=ih(e,3),nG(t,function(t,r,i){nL(n,e(t,r,i),t)}),n},nm.mapValues=function(t,e){var n={};return e=ih(e,3),nG(t,function(t,r,i){nL(n,r,e(t,r,i))}),n},nm.matches=function(t){return rn(nI(t,1))},nm.matchesProperty=function(t,e){return rr(t,nI(e,1))},nm.memoize=aP,nm.merge=om,nm.mergeWith=og,nm.method=oB,nm.methodOf=oW,nm.mixin=oV,nm.negate=aE,nm.nthArg=function(t){return t=a4(t),rp(function(e){return ra(e,t)})},nm.omit=ov,nm.omitBy=function(t,e){return oy(t,aE(ih(e)))},nm.once=function(t){return ax(2,t)},nm.orderBy=function(t,e,r,i){return null==t?[]:(aF(e)||(e=null==e?[]:[e]),aF(r=i?n:r)||(r=null==r?[]:[r]),ro(t,e,r))},nm.over=oq,nm.overArgs=aT,nm.overEvery=o$,nm.overSome=oG,nm.partial=ak,nm.partialRight=az,nm.partition=ag,nm.pick=o_,nm.pickBy=oy,nm.property=oZ,nm.propertyOf=function(t){return function(e){return null==t?n:nQ(t,e)}},nm.pull=iX,nm.pullAll=i0,nm.pullAllBy=function(t,e,n){return t&&t.length&&e&&e.length?rl(t,e,ih(n,2)):t},nm.pullAllWith=function(t,e,r){return t&&t.length&&e&&e.length?rl(t,e,n,r):t},nm.pullAt=i1,nm.range=oJ,nm.rangeRight=oQ,nm.rearg=aA,nm.reject=function(t,e){return(aF(t)?ec:nV)(t,aE(ih(e,3)))},nm.remove=function(t,e){var n=[];if(!(t&&t.length))return n;var r=-1,i=[],a=t.length;for(e=ih(e,3);++r<a;){var s=t[r];e(s,r,t)&&(n.push(s),i.push(r))}return ru(t,i),n},nm.rest=function(t,e){if("function"!=typeof t)throw new tE(r);return rp(t,e=e===n?e:a4(e))},nm.reverse=i3,nm.sampleSize=function(t,e,r){return e=(r?iC(t,e,r):e===n)?1:a4(e),(aF(t)?function(t,e){return iO(rB(t),nD(e,0,t.length))}:function(t,e){var n=ow(t);return iO(n,nD(e,0,n.length))})(t,e)},nm.set=function(t,e,n){return null==t?t:rf(t,e,n)},nm.setWith=function(t,e,r,i){return i="function"==typeof i?i:n,null==t?t:rf(t,e,r,i)},nm.shuffle=function(t){return(aF(t)?function(t){return iO(rB(t))}:function(t){return iO(ow(t))})(t)},nm.slice=function(t,e,r){var i=null==t?0:t.length;return i?(r&&"number"!=typeof r&&iC(t,e,r)?(e=0,r=i):(e=null==e?0:a4(e),r=r===n?i:a4(r)),rg(t,e,r)):[]},nm.sortBy=av,nm.sortedUniq=function(t){return t&&t.length?rx(t):[]},nm.sortedUniqBy=function(t,e){return t&&t.length?rx(t,ih(e,2)):[]},nm.split=function(t,e,r){return r&&"number"!=typeof r&&iC(t,e,r)&&(e=r=n),(r=r===n?4294967295:r>>>0)?(t=ot(t))&&("string"==typeof e||null!=e&&!aY(e))&&!(e=rw(e))&&eU(t)?rR(eq(t),0,r):t.split(e,r):[]},nm.spread=function(t,e){if("function"!=typeof t)throw new tE(r);return e=null==e?0:e2(a4(e),0),rp(function(n){var r=n[e],i=rR(n,0,e);return r&&ed(i,r),eo(t,this,i)})},nm.tail=function(t){var e=null==t?0:t.length;return e?rg(t,1,e):[]},nm.take=function(t,e,r){return t&&t.length?rg(t,0,(e=r||e===n?1:a4(e))<0?0:e):[]},nm.takeRight=function(t,e,r){var i=null==t?0:t.length;return i?rg(t,(e=i-(e=r||e===n?1:a4(e)))<0?0:e,i):[]},nm.takeRightWhile=function(t,e){return t&&t.length?rP(t,ih(e,3),!1,!0):[]},nm.takeWhile=function(t,e){return t&&t.length?rP(t,ih(e,3)):[]},nm.tap=function(t,e){return e(t),t},nm.throttle=function(t,e,n){var i=!0,a=!0;if("function"!=typeof t)throw new tE(r);return a$(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),aC(t,e,{leading:i,maxWait:e,trailing:a})},nm.thru=aa,nm.toArray=a6,nm.toPairs=ox,nm.toPairsIn=ob,nm.toPath=function(t){return aF(t)?ef(t,iU):a0(t)?[t]:rB(ij(ot(t)))},nm.toPlainObject=a8,nm.transform=function(t,e,n){var r=aF(t),i=r||aN(t)||a1(t);if(e=ih(e,4),null==n){var a=t&&t.constructor;n=i?r?new a:[]:a$(t)&&aV(a)?ng(tG(t)):{}}return(i?el:nG)(t,function(t,r,i){return e(n,t,r,i)}),n},nm.unary=function(t){return ay(t,1)},nm.union=i2,nm.unionBy=i6,nm.unionWith=i5,nm.uniq=function(t){return t&&t.length?rC(t):[]},nm.uniqBy=function(t,e){return t&&t.length?rC(t,ih(e,2)):[]},nm.uniqWith=function(t,e){return e="function"==typeof e?e:n,t&&t.length?rC(t,n,e):[]},nm.unset=function(t,e){return null==t||rS(t,e)},nm.unzip=i4,nm.unzipWith=i9,nm.update=function(t,e,n){return null==t?t:rM(t,e,rA(n))},nm.updateWith=function(t,e,r,i){return i="function"==typeof i?i:n,null==t?t:rM(t,e,rA(r),i)},nm.values=ow,nm.valuesIn=function(t){return null==t?[]:eL(t,od(t))},nm.without=i7,nm.words=oR,nm.wrap=function(t,e){return ak(rA(e),t)},nm.xor=i8,nm.xorBy=at,nm.xorWith=ae,nm.zip=an,nm.zipObject=function(t,e){return rk(t||[],e||[],nT)},nm.zipObjectDeep=function(t,e){return rk(t||[],e||[],rf)},nm.zipWith=ar,nm.entries=ox,nm.entriesIn=ob,nm.extend=on,nm.extendWith=or,oV(nm,nm),nm.add=oX,nm.attempt=oD,nm.camelCase=oC,nm.capitalize=oS,nm.ceil=o0,nm.clamp=function(t,e,r){return r===n&&(r=e,e=n),r!==n&&(r=(r=a7(r))==r?r:0),e!==n&&(e=(e=a7(e))==e?e:0),nD(a7(t),e,r)},nm.clone=function(t){return nI(t,4)},nm.cloneDeep=function(t){return nI(t,5)},nm.cloneDeepWith=function(t,e){return nI(t,5,e="function"==typeof e?e:n)},nm.cloneWith=function(t,e){return nI(t,4,e="function"==typeof e?e:n)},nm.conformsTo=function(t,e){return null==e||nF(t,e,of(e))},nm.deburr=oM,nm.defaultTo=function(t,e){return null==t||t!=t?e:t},nm.divide=o1,nm.endsWith=function(t,e,r){t=ot(t),e=rw(e);var i=t.length,a=r=r===n?i:nD(a4(r),0,i);return(r-=e.length)>=0&&t.slice(r,a)==e},nm.eq=aL,nm.escape=function(t){return(t=ot(t))&&V.test(t)?t.replace(B,eO):t},nm.escapeRegExp=function(t){return(t=ot(t))&&Y.test(t)?t.replace(Q,"\\$&"):t},nm.every=function(t,e,r){var i=aF(t)?eu:nB;return r&&iC(t,e,r)&&(e=n),i(t,ih(e,3))},nm.find=al,nm.findIndex=iq,nm.findKey=function(t,e){return ey(t,ih(e,3),nG)},nm.findLast=au,nm.findLastIndex=i$,nm.findLastKey=function(t,e){return ey(t,ih(e,3),nZ)},nm.floor=o3,nm.forEach=ac,nm.forEachRight=ah,nm.forIn=function(t,e){return null==t?t:nq(t,ih(e,3),od)},nm.forInRight=function(t,e){return null==t?t:n$(t,ih(e,3),od)},nm.forOwn=function(t,e){return t&&nG(t,ih(e,3))},nm.forOwnRight=function(t,e){return t&&nZ(t,ih(e,3))},nm.get=ol,nm.gt=aR,nm.gte=aD,nm.has=function(t,e){return null!=t&&iy(t,e,n0)},nm.hasIn=ou,nm.head=iZ,nm.identity=oU,nm.includes=function(t,e,n,r){t=aj(t)?t:ow(t),n=n&&!r?a4(n):0;var i=t.length;return n<0&&(n=e2(i+n,0)),aX(t)?n<=i&&t.indexOf(e,n)>-1:!!i&&eb(t,e,n)>-1},nm.indexOf=function(t,e,n){var r=null==t?0:t.length;if(!r)return -1;var i=null==n?0:a4(n);return i<0&&(i=e2(r+i,0)),eb(t,e,i)},nm.inRange=function(t,e,r){var i,a,s;return e=a5(e),r===n?(r=e,e=0):r=a5(r),(i=t=a7(t))>=e6(a=e,s=r)&&i<e2(a,s)},nm.invoke=op,nm.isArguments=aI,nm.isArray=aF,nm.isArrayBuffer=aO,nm.isArrayLike=aj,nm.isArrayLikeObject=aU,nm.isBoolean=function(t){return!0===t||!1===t||aG(t)&&nK(t)==p},nm.isBuffer=aN,nm.isDate=aB,nm.isElement=function(t){return aG(t)&&1===t.nodeType&&!aQ(t)},nm.isEmpty=function(t){if(null==t)return!0;if(aj(t)&&(aF(t)||"string"==typeof t||"function"==typeof t.splice||aN(t)||a1(t)||aI(t)))return!t.length;var e=i_(t);if(e==v||e==w)return!t.size;if(iE(t))return!n8(t).length;for(var n in t)if(tR.call(t,n))return!1;return!0},nm.isEqual=function(t,e){return n5(t,e)},nm.isEqualWith=function(t,e,r){var i=(r="function"==typeof r?r:n)?r(t,e):n;return i===n?n5(t,e,n,r):!!i},nm.isError=aW,nm.isFinite=function(t){return"number"==typeof t&&e0(t)},nm.isFunction=aV,nm.isInteger=aH,nm.isLength=aq,nm.isMap=aZ,nm.isMatch=function(t,e){return t===e||n4(t,e,id(e))},nm.isMatchWith=function(t,e,r){return r="function"==typeof r?r:n,n4(t,e,id(e),r)},nm.isNaN=function(t){return aJ(t)&&t!=+t},nm.isNative=function(t){if(iP(t))throw new tb("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return n9(t)},nm.isNil=function(t){return null==t},nm.isNull=function(t){return null===t},nm.isNumber=aJ,nm.isObject=a$,nm.isObjectLike=aG,nm.isPlainObject=aQ,nm.isRegExp=aY,nm.isSafeInteger=function(t){return aH(t)&&t>=-9007199254740991&&t<=9007199254740991},nm.isSet=aK,nm.isString=aX,nm.isSymbol=a0,nm.isTypedArray=a1,nm.isUndefined=function(t){return t===n},nm.isWeakMap=function(t){return aG(t)&&i_(t)==M},nm.isWeakSet=function(t){return aG(t)&&"[object WeakSet]"==nK(t)},nm.join=function(t,e){return null==t?"":e1.call(t,e)},nm.kebabCase=oP,nm.last=iK,nm.lastIndexOf=function(t,e,r){var i=null==t?0:t.length;if(!i)return -1;var a=i;return r!==n&&(a=(a=a4(r))<0?e2(i+a,0):e6(a,i-1)),e==e?function(t,e,n){for(var r=n+1;r--&&t[r]!==e;);return r}(t,e,a):ex(t,eC,a,!0)},nm.lowerCase=oE,nm.lowerFirst=oT,nm.lt=a3,nm.lte=a2,nm.max=function(t){return t&&t.length?nW(t,oU,nX):n},nm.maxBy=function(t,e){return t&&t.length?nW(t,ih(e,2),nX):n},nm.mean=function(t){return eS(t,oU)},nm.meanBy=function(t,e){return eS(t,ih(e,2))},nm.min=function(t){return t&&t.length?nW(t,oU,rt):n},nm.minBy=function(t,e){return t&&t.length?nW(t,ih(e,2),rt):n},nm.stubArray=oY,nm.stubFalse=oK,nm.stubObject=function(){return{}},nm.stubString=function(){return""},nm.stubTrue=function(){return!0},nm.multiply=o2,nm.nth=function(t,e){return t&&t.length?ra(t,a4(e)):n},nm.noConflict=function(){return t6._===this&&(t6._=tj),this},nm.noop=oH,nm.now=a_,nm.pad=function(t,e,n){t=ot(t);var r=(e=a4(e))?eH(t):0;if(!e||r>=e)return t;var i=(e-r)/2;return r3(eY(i),n)+t+r3(eQ(i),n)},nm.padEnd=function(t,e,n){t=ot(t);var r=(e=a4(e))?eH(t):0;return e&&r<e?t+r3(e-r,n):t},nm.padStart=function(t,e,n){t=ot(t);var r=(e=a4(e))?eH(t):0;return e&&r<e?r3(e-r,n)+t:t},nm.parseInt=function(t,e,n){return n||null==e?e=0:e&&(e=+e),e4(ot(t).replace(K,""),e||0)},nm.random=function(t,e,r){if(r&&"boolean"!=typeof r&&iC(t,e,r)&&(e=r=n),r===n&&("boolean"==typeof e?(r=e,e=n):"boolean"==typeof t&&(r=t,t=n)),t===n&&e===n?(t=0,e=1):(t=a5(t),e===n?(e=t,t=0):e=a5(e)),t>e){var i=t;t=e,e=i}if(r||t%1||e%1){var a=e9();return e6(t+a*(e-t+t0("1e-"+((a+"").length-1))),e)}return rc(t,e)},nm.reduce=function(t,e,n){var r=aF(t)?em:eE,i=arguments.length<3;return r(t,ih(e,4),n,i,nU)},nm.reduceRight=function(t,e,n){var r=aF(t)?eg:eE,i=arguments.length<3;return r(t,ih(e,4),n,i,nN)},nm.repeat=function(t,e,r){return e=(r?iC(t,e,r):e===n)?1:a4(e),rh(ot(t),e)},nm.replace=function(){var t=arguments,e=ot(t[0]);return t.length<3?e:e.replace(t[1],t[2])},nm.result=function(t,e,r){e=rL(e,t);var i=-1,a=e.length;for(a||(a=1,t=n);++i<a;){var s=null==t?n:t[iU(e[i])];s===n&&(i=a,s=r),t=aV(s)?s.call(t):s}return t},nm.round=o6,nm.runInContext=t,nm.sample=function(t){return(aF(t)?nP:function(t){return nP(ow(t))})(t)},nm.size=function(t){if(null==t)return 0;if(aj(t))return aX(t)?eH(t):t.length;var e=i_(t);return e==v||e==w?t.size:n8(t).length},nm.snakeCase=ok,nm.some=function(t,e,r){var i=aF(t)?ev:rv;return r&&iC(t,e,r)&&(e=n),i(t,ih(e,3))},nm.sortedIndex=function(t,e){return r_(t,e)},nm.sortedIndexBy=function(t,e,n){return ry(t,e,ih(n,2))},nm.sortedIndexOf=function(t,e){var n=null==t?0:t.length;if(n){var r=r_(t,e);if(r<n&&aL(t[r],e))return r}return -1},nm.sortedLastIndex=function(t,e){return r_(t,e,!0)},nm.sortedLastIndexBy=function(t,e,n){return ry(t,e,ih(n,2),!0)},nm.sortedLastIndexOf=function(t,e){if(null==t?0:t.length){var n=r_(t,e,!0)-1;if(aL(t[n],e))return n}return -1},nm.startCase=oz,nm.startsWith=function(t,e,n){return t=ot(t),n=null==n?0:nD(a4(n),0,t.length),e=rw(e),t.slice(n,n+e.length)==e},nm.subtract=o5,nm.sum=function(t){return t&&t.length?eT(t,oU):0},nm.sumBy=function(t,e){return t&&t.length?eT(t,ih(e,2)):0},nm.template=function(t,e,r){var i=nm.templateSettings;r&&iC(t,e,r)&&(e=n),t=ot(t),e=or({},e,i,it);var a,s,l=or({},e.imports,i.imports,it),u=of(l),c=eL(l,u),h=0,p=e.interpolate||td,f="__p += '",d=tM((e.escape||td).source+"|"+p.source+"|"+(p===$?to:td).source+"|"+(e.evaluate||td).source+"|$","g"),m="//# sourceURL="+(tR.call(e,"sourceURL")?(e.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tQ+"]")+`
`;t.replace(d,function(e,n,r,i,l,u){return r||(r=i),f+=t.slice(h,u).replace(tm,ej),n&&(a=!0,f+=`' +
__e(`+n+`) +
'`),l&&(s=!0,f+=`';
`+l+`;
__p += '`),r&&(f+=`' +
((__t = (`+r+`)) == null ? '' : __t) +
'`),h=u+e.length,e}),f+=`';
`;var g=tR.call(e,"variable")&&e.variable;if(g){if(ti.test(g))throw new tb("Invalid `variable` option passed into `_.template`")}else f=`with (obj) {
`+f+`
}
`;f=(s?f.replace(O,""):f).replace(j,"$1").replace(U,"$1;"),f="function("+(g||"obj")+`) {
`+(g?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(a?", __e = _.escape":"")+(s?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+f+`return __p
}`;var v=oD(function(){return tw(u,m+"return "+f).apply(n,c)});if(v.source=f,aW(v))throw v;return v},nm.times=function(t,e){if((t=a4(t))<1||t>9007199254740991)return[];var n=4294967295,r=e6(t,4294967295);e=ih(e),t-=4294967295;for(var i=ek(r,e);++n<t;)e(n);return i},nm.toFinite=a5,nm.toInteger=a4,nm.toLength=a9,nm.toLower=function(t){return ot(t).toLowerCase()},nm.toNumber=a7,nm.toSafeInteger=function(t){return t?nD(a4(t),-9007199254740991,9007199254740991):0===t?t:0},nm.toString=ot,nm.toUpper=function(t){return ot(t).toUpperCase()},nm.trim=function(t,e,r){if((t=ot(t))&&(r||e===n))return ez(t);if(!t||!(e=rw(e)))return t;var i=eq(t),a=eq(e),s=eD(i,a),l=eI(i,a)+1;return rR(i,s,l).join("")},nm.trimEnd=function(t,e,r){if((t=ot(t))&&(r||e===n))return t.slice(0,e$(t)+1);if(!t||!(e=rw(e)))return t;var i=eq(t),a=eI(i,eq(e))+1;return rR(i,0,a).join("")},nm.trimStart=function(t,e,r){if((t=ot(t))&&(r||e===n))return t.replace(K,"");if(!t||!(e=rw(e)))return t;var i=eq(t),a=eD(i,eq(e));return rR(i,a).join("")},nm.truncate=function(t,e){var r=30,i="...";if(a$(e)){var a="separator"in e?e.separator:a;r="length"in e?a4(e.length):r,i="omission"in e?rw(e.omission):i}var s=(t=ot(t)).length;if(eU(t)){var l=eq(t);s=l.length}if(r>=s)return t;var u=r-eH(i);if(u<1)return i;var c=l?rR(l,0,u).join(""):t.slice(0,u);if(a===n)return c+i;if(l&&(u+=c.length-u),aY(a)){if(t.slice(u).search(a)){var h,p=c;for(a.global||(a=tM(a.source,ot(ts.exec(a))+"g")),a.lastIndex=0;h=a.exec(p);)var f=h.index;c=c.slice(0,f===n?u:f)}}else if(t.indexOf(rw(a),u)!=u){var d=c.lastIndexOf(a);d>-1&&(c=c.slice(0,d))}return c+i},nm.unescape=function(t){return(t=ot(t))&&W.test(t)?t.replace(N,eG):t},nm.uniqueId=function(t){var e=++tD;return ot(t)+e},nm.upperCase=oA,nm.upperFirst=oL,nm.each=ac,nm.eachRight=ah,nm.first=iZ,oV(nm,(t_={},nG(nm,function(t,e){tR.call(nm.prototype,e)||(t_[e]=t)}),t_),{chain:!1}),nm.VERSION="4.17.21",el(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){nm[t].placeholder=nm}),el(["drop","take"],function(t,e){ny.prototype[t]=function(r){r=r===n?1:e2(a4(r),0);var i=this.__filtered__&&!e?new ny(this):this.clone();return i.__filtered__?i.__takeCount__=e6(r,i.__takeCount__):i.__views__.push({size:e6(r,4294967295),type:t+(i.__dir__<0?"Right":"")}),i},ny.prototype[t+"Right"]=function(e){return this.reverse()[t](e).reverse()}}),el(["filter","map","takeWhile"],function(t,e){var n=e+1,r=1==n||3==n;ny.prototype[t]=function(t){var e=this.clone();return e.__iteratees__.push({iteratee:ih(t,3),type:n}),e.__filtered__=e.__filtered__||r,e}}),el(["head","last"],function(t,e){var n="take"+(e?"Right":"");ny.prototype[t]=function(){return this[n](1).value()[0]}}),el(["initial","tail"],function(t,e){var n="drop"+(e?"":"Right");ny.prototype[t]=function(){return this.__filtered__?new ny(this):this[n](1)}}),ny.prototype.compact=function(){return this.filter(oU)},ny.prototype.find=function(t){return this.filter(t).head()},ny.prototype.findLast=function(t){return this.reverse().find(t)},ny.prototype.invokeMap=rp(function(t,e){return"function"==typeof t?new ny(this):this.map(function(n){return n2(n,t,e)})}),ny.prototype.reject=function(t){return this.filter(aE(ih(t)))},ny.prototype.slice=function(t,e){t=a4(t);var r=this;return r.__filtered__&&(t>0||e<0)?new ny(r):(t<0?r=r.takeRight(-t):t&&(r=r.drop(t)),e!==n&&(r=(e=a4(e))<0?r.dropRight(-e):r.take(e-t)),r)},ny.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},ny.prototype.toArray=function(){return this.take(4294967295)},nG(ny.prototype,function(t,e){var r=/^(?:filter|find|map|reject)|While$/.test(e),i=/^(?:head|last)$/.test(e),a=nm[i?"take"+("last"==e?"Right":""):e],s=i||/^find/.test(e);a&&(nm.prototype[e]=function(){var e=this.__wrapped__,l=i?[1]:arguments,u=e instanceof ny,c=l[0],h=u||aF(e),p=function(t){var e=a.apply(nm,ed([t],l));return i&&f?e[0]:e};h&&r&&"function"==typeof c&&1!=c.length&&(u=h=!1);var f=this.__chain__,d=!!this.__actions__.length,m=s&&!f,g=u&&!d;if(!s&&h){e=g?e:new ny(this);var v=t.apply(e,l);return v.__actions__.push({func:aa,args:[p],thisArg:n}),new n_(v,f)}return m&&g?t.apply(this,l):(v=this.thru(p),m?i?v.value()[0]:v.value():v)})}),el(["pop","push","shift","sort","splice","unshift"],function(t){var e=tT[t],n=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",r=/^(?:pop|shift)$/.test(t);nm.prototype[t]=function(){var t=arguments;if(r&&!this.__chain__){var i=this.value();return e.apply(aF(i)?i:[],t)}return this[n](function(n){return e.apply(aF(n)?n:[],t)})}}),nG(ny.prototype,function(t,e){var n=nm[e];if(n){var r=n.name+"";tR.call(no,r)||(no[r]=[]),no[r].push({name:e,func:n})}}),no[rK(n,2).name]=[{name:"wrapper",func:n}],ny.prototype.clone=function(){var t=new ny(this.__wrapped__);return t.__actions__=rB(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=rB(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=rB(this.__views__),t},ny.prototype.reverse=function(){if(this.__filtered__){var t=new ny(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t},ny.prototype.value=function(){var t=this.__wrapped__.value(),e=this.__dir__,n=aF(t),r=e<0,i=n?t.length:0,a=function(t,e,n){for(var r=-1,i=n.length;++r<i;){var a=n[r],s=a.size;switch(a.type){case"drop":t+=s;break;case"dropRight":e-=s;break;case"take":e=e6(e,t+s);break;case"takeRight":t=e2(t,e-s)}}return{start:t,end:e}}(0,i,this.__views__),s=a.start,l=a.end,u=l-s,c=r?l:s-1,h=this.__iteratees__,p=h.length,f=0,d=e6(u,this.__takeCount__);if(!n||!r&&i==u&&d==u)return rE(t,this.__actions__);var m=[];t:for(;u--&&f<d;){c+=e;for(var g=-1,v=t[c];++g<p;){var _=h[g],y=_.iteratee,x=_.type,b=y(v);if(2==x)v=b;else if(!b){if(1==x)continue t;break t}}m[f++]=v}return m},nm.prototype.at=ao,nm.prototype.chain=function(){return ai(this)},nm.prototype.commit=function(){return new n_(this.value(),this.__chain__)},nm.prototype.next=function(){this.__values__===n&&(this.__values__=a6(this.value()));var t=this.__index__>=this.__values__.length,e=t?n:this.__values__[this.__index__++];return{done:t,value:e}},nm.prototype.plant=function(t){for(var e,r=this;r instanceof nv;){var i=iB(r);i.__index__=0,i.__values__=n,e?a.__wrapped__=i:e=i;var a=i;r=r.__wrapped__}return a.__wrapped__=t,e},nm.prototype.reverse=function(){var t=this.__wrapped__;if(t instanceof ny){var e=t;return this.__actions__.length&&(e=new ny(this)),(e=e.reverse()).__actions__.push({func:aa,args:[i3],thisArg:n}),new n_(e,this.__chain__)}return this.thru(i3)},nm.prototype.toJSON=nm.prototype.valueOf=nm.prototype.value=function(){return rE(this.__wrapped__,this.__actions__)},nm.prototype.first=nm.prototype.head,t4&&(nm.prototype[t4]=function(){return this}),nm}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(t6._=eZ,define(function(){return eZ})):t4?((t4.exports=eZ)._=eZ,t5._=eZ):t6._=eZ}).call(t)}),g=p((t,e)=>{function n(t,e,n,r){return Math.round(t/n)+" "+r+(e>=1.5*n?"s":"")}e.exports=function(t,e){e=e||{};var r,i,a=typeof t;if("string"===a&&t.length>0)return function(t){if(!((t=String(t)).length>100)){var e=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*n;case"weeks":case"week":case"w":return 6048e5*n;case"days":case"day":case"d":return 864e5*n;case"hours":case"hour":case"hrs":case"hr":case"h":return 36e5*n;case"minutes":case"minute":case"mins":case"min":case"m":return 6e4*n;case"seconds":case"second":case"secs":case"sec":case"s":return 1e3*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}(t);if("number"===a&&isFinite(t))return e.long?(r=Math.abs(t))>=864e5?n(t,r,864e5,"day"):r>=36e5?n(t,r,36e5,"hour"):r>=6e4?n(t,r,6e4,"minute"):r>=1e3?n(t,r,1e3,"second"):t+" ms":(i=Math.abs(t))>=864e5?Math.round(t/864e5)+"d":i>=36e5?Math.round(t/36e5)+"h":i>=6e4?Math.round(t/6e4)+"m":i>=1e3?Math.round(t/1e3)+"s":t+"ms";throw Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}}),v=p((t,e)=>{e.exports=function(t){function e(t){let r,i=null,a,s;function l(...t){if(!l.enabled)return;let n=Number(new Date),i=n-(r||n);l.diff=i,l.prev=r,l.curr=n,r=n,t[0]=e.coerce(t[0]),"string"!=typeof t[0]&&t.unshift("%O");let a=0;t[0]=t[0].replace(/%([a-zA-Z%])/g,(n,r)=>{if("%%"===n)return"%";a++;let i=e.formatters[r];if("function"==typeof i){let e=t[a];n=i.call(l,e),t.splice(a,1),a--}return n}),e.formatArgs.call(l,t),(l.log||e.log).apply(l,t)}return l.namespace=t,l.useColors=e.useColors(),l.color=e.selectColor(t),l.extend=n,l.destroy=e.destroy,Object.defineProperty(l,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==i?i:(a!==e.namespaces&&(a=e.namespaces,s=e.enabled(t)),s),set:t=>{i=t}}),"function"==typeof e.init&&e.init(l),l}function n(t,n){let r=e(this.namespace+(typeof n>"u"?":":n)+t);return r.log=this.log,r}function r(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}return e.debug=e,e.default=e,e.coerce=function(t){return t instanceof Error?t.stack||t.message:t},e.disable=function(){let t=[...e.names.map(r),...e.skips.map(r).map(t=>"-"+t)].join(",");return e.enable(""),t},e.enable=function(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];let n,r=("string"==typeof t?t:"").split(/[\s,]+/),i=r.length;for(n=0;n<i;n++)r[n]&&("-"===(t=r[n].replace(/\*/g,".*?"))[0]?e.skips.push(RegExp("^"+t.slice(1)+"$")):e.names.push(RegExp("^"+t+"$")))},e.enabled=function(t){let n,r;if("*"===t[t.length-1])return!0;for(n=0,r=e.skips.length;n<r;n++)if(e.skips[n].test(t))return!1;for(n=0,r=e.names.length;n<r;n++)if(e.names[n].test(t))return!0;return!1},e.humanize=g(),e.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(t).forEach(n=>{e[n]=t[n]}),e.names=[],e.skips=[],e.formatters={},e.selectColor=function(t){let n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e)|0;return e.colors[Math.abs(n)%e.colors.length]},e.enable(e.load()),e}}),_=p((t,e)=>{let n;t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;let n="color: "+this.color;t.splice(1,0,n,"color: inherit");let r=0,i=0;t[0].replace(/%[a-zA-Z%]/g,t=>{"%%"!==t&&(r++,"%c"===t&&(i=r))}),t.splice(i,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch{}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch{}return!e&&"u">typeof i&&"env"in i&&(e=i.env.DEBUG),e},t.useColors=function(){let t;return"u">typeof window&&!!window.process&&("renderer"===window.process.type||!!window.process.__nwjs)||!("u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&("u">typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"u">typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"u">typeof navigator&&navigator.userAgent&&(t=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(t[1],10)>=31||"u">typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch{}}(),t.destroy=(n=!1,()=>{n||(n=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=v()(t);var{formatters:r}=e.exports;r.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}}}),y=p((t,e)=>{e.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}}),x=p((t,e)=>{var n="object"==typeof window&&window&&window.Object===Object&&window;e.exports=n}),b=p((t,e)=>{var n=x(),r="object"==typeof self&&self&&self.Object===Object&&self,i=n||r||Function("return this")();e.exports=i}),w=p((t,e)=>{var n=b();e.exports=function(){return n.Date.now()}}),C=p((t,e)=>{var n=/\s/;e.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}}),S=p((t,e)=>{var n=C(),r=/^\s+/;e.exports=function(t){return t&&t.slice(0,n(t)+1).replace(r,"")}}),M=p((t,e)=>{var n=b().Symbol;e.exports=n}),P=p((t,e)=>{var n=M(),r=Object.prototype,i=r.hasOwnProperty,a=r.toString,s=n?n.toStringTag:void 0;e.exports=function(t){var e=i.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch{}var l=a.call(t);return r&&(e?t[s]=n:delete t[s]),l}}),E=p((t,e)=>{var n=Object.prototype.toString;e.exports=function(t){return n.call(t)}}),T=p((t,e)=>{var n=M(),r=P(),i=E(),a=n?n.toStringTag:void 0;e.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?r(t):i(t)}}),k=p((t,e)=>{e.exports=function(t){return null!=t&&"object"==typeof t}}),z=p((t,e)=>{var n=T(),r=k();e.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==n(t)}}),A=p((t,e)=>{var n=S(),r=y(),i=z(),a=NaN,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c=parseInt;e.exports=function(t){if("number"==typeof t)return t;if(i(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var h=l.test(t);return h||u.test(t)?c(t.slice(2),h?2:8):s.test(t)?a:+t}}),L=p((t,e)=>{var n=y(),r=w(),i=A(),a=Math.max,s=Math.min;e.exports=function(t,e,l){var u,c,h,p,f,d,m=0,g=!1,v=!1,_=!0;if("function"!=typeof t)throw TypeError("Expected a function");function y(e){var n=u,r=c;return u=c=void 0,m=e,p=t.apply(r,n)}function x(t){var n=t-d,r=t-m;return void 0===d||n>=e||n<0||v&&r>=h}function b(){var t,n,i,a=r();if(x(a))return w(a);f=setTimeout(b,(t=a-d,n=a-m,i=e-t,v?s(i,h-n):i))}function w(t){return f=void 0,_&&u?y(t):(u=c=void 0,p)}function C(){var t,n=r(),i=x(n);if(u=arguments,c=this,d=n,i){if(void 0===f)return m=t=d,f=setTimeout(b,e),g?y(t):p;if(v)return clearTimeout(f),f=setTimeout(b,e),y(d)}return void 0===f&&(f=setTimeout(b,e)),p}return e=i(e)||0,n(l)&&(g=!!l.leading,h=(v="maxWait"in l)?a(i(l.maxWait)||0,e):h,_="trailing"in l?!!l.trailing:_),C.cancel=function(){void 0!==f&&clearTimeout(f),m=0,u=d=c=f=void 0},C.flush=function(){return void 0===f?p:w(r())},C}}),R=p((t,e)=>{var n=L(),r=y();e.exports=function(t,e,i){var a=!0,s=!0;if("function"!=typeof t)throw TypeError("Expected a function");return r(i)&&(a="leading"in i?!!i.leading:a,s="trailing"in i?!!i.trailing:s),n(t,e,{leading:a,maxWait:e,trailing:s})}}),D=d(m()),I="srgb",F="srgb-linear",O="display-p3-linear",j="linear",U="srgb",N="rec709";function B(t,e,n){return Math.max(e,Math.min(n,t))}var W=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());return 0===e?Math.PI/2:Math.acos(B(this.dot(t)/e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),i=this.x-t.x,a=this.y-t.y;return this.x=i*n-a*r+t.x,this.y=i*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},V=class t{constructor(e,n,r,i,a,s,l,u,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],void 0!==e&&this.set(e,n,r,i,a,s,l,u,c)}set(t,e,n,r,i,a,s,l,u){let c=this.elements;return c[0]=t,c[1]=r,c[2]=s,c[3]=e,c[4]=i,c[5]=l,c[6]=n,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,i=this.elements,a=n[0],s=n[3],l=n[6],u=n[1],c=n[4],h=n[7],p=n[2],f=n[5],d=n[8],m=r[0],g=r[3],v=r[6],_=r[1],y=r[4],x=r[7],b=r[2],w=r[5],C=r[8];return i[0]=a*m+s*_+l*b,i[3]=a*g+s*y+l*w,i[6]=a*v+s*x+l*C,i[1]=u*m+c*_+h*b,i[4]=u*g+c*y+h*w,i[7]=u*v+c*x+h*C,i[2]=p*m+f*_+d*b,i[5]=p*g+f*y+d*w,i[8]=p*v+f*x+d*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],s=t[5],l=t[6],u=t[7],c=t[8];return e*a*c-e*s*u-n*i*c+n*s*l+r*i*u-r*a*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],i=t[3],a=t[4],s=t[5],l=t[6],u=t[7],c=t[8],h=c*a-s*u,p=s*l-c*i,f=u*i-a*l,d=e*h+n*p+r*f;if(0===d)return this.set(0,0,0,0,0,0,0,0,0);let m=1/d;return t[0]=h*m,t[1]=(r*u-c*n)*m,t[2]=(s*n-r*a)*m,t[3]=p*m,t[4]=(c*e-r*l)*m,t[5]=(r*i-s*e)*m,t[6]=f*m,t[7]=(n*l-u*e)*m,t[8]=(a*e-n*i)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,i,a,s){let l=Math.cos(i),u=Math.sin(i);return this.set(n*l,n*u,-n*(l*a+u*s)+a+t,-r*u,r*l,-r*(-u*a+l*s)+s+e,0,0,1),this}scale(t,e){return this.premultiply(H.makeScale(t,e)),this}rotate(t){return this.premultiply(H.makeRotation(-t)),this}translate(t,e){return this.premultiply(H.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let t=0;t<9;t++)if(e[t]!==n[t])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},H=new V,q=new V().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$=new V().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),G={[F]:{transfer:j,primaries:N,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[I]:{transfer:U,primaries:N,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[O]:{transfer:j,primaries:"p3",luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3($),fromReference:t=>t.applyMatrix3(q)},"display-p3":{transfer:U,primaries:"p3",luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3($),fromReference:t=>t.applyMatrix3(q).convertLinearToSRGB()}},Z=new Set([F,O]),J={enabled:!0,_workingColorSpace:F,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!Z.has(o))throw Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(t,e,n){if(!1===this.enabled||e===n||!e||!n)return t;let r=G[e].toReference;return(0,G[n].fromReference)(r(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return G[t].primaries},getTransfer:function(t){return""===t?j:G[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(G[e].luminanceCoefficients)}};function Q(t){return t<.04045?.0773993808*t:Math.pow(.9478672986*t+.0521327014,2.4)}function Y(t){return t<.0031308?12.92*t:1.055*Math.pow(t,.41666)-.055}var K=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,i,a,s){let l=n[r+0],u=n[r+1],c=n[r+2],h=n[r+3],p=i[a+0],f=i[a+1],d=i[a+2],m=i[a+3];if(0===s){t[e+0]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h;return}if(1===s){t[e+0]=p,t[e+1]=f,t[e+2]=d,t[e+3]=m;return}if(h!==m||l!==p||u!==f||c!==d){let t=1-s,e=l*p+u*f+c*d+h*m,n=e>=0?1:-1,r=1-e*e;if(r>Number.EPSILON){let i=Math.sqrt(r),a=Math.atan2(i,e*n);t=Math.sin(t*a)/i,s=Math.sin(s*a)/i}let i=s*n;if(l=l*t+p*i,u=u*t+f*i,c=c*t+d*i,h=h*t+m*i,t===1-s){let t=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=t,u*=t,c*=t,h*=t}}t[e]=l,t[e+1]=u,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,i,a){let s=n[r],l=n[r+1],u=n[r+2],c=n[r+3],h=i[a],p=i[a+1],f=i[a+2],d=i[a+3];return t[e]=s*d+c*h+l*f-u*p,t[e+1]=l*d+c*p+u*h-s*f,t[e+2]=u*d+c*f+s*p-l*h,t[e+3]=c*d-s*h-l*p-u*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,i=t._z,a=t._order,s=Math.cos,l=Math.sin,u=s(n/2),c=s(r/2),h=s(i/2),p=l(n/2),f=l(r/2),d=l(i/2);switch(a){case"XYZ":this._x=p*c*h+u*f*d,this._y=u*f*h-p*c*d,this._z=u*c*d+p*f*h,this._w=u*c*h-p*f*d;break;case"YXZ":this._x=p*c*h+u*f*d,this._y=u*f*h-p*c*d,this._z=u*c*d-p*f*h,this._w=u*c*h+p*f*d;break;case"ZXY":this._x=p*c*h-u*f*d,this._y=u*f*h+p*c*d,this._z=u*c*d+p*f*h,this._w=u*c*h-p*f*d;break;case"ZYX":this._x=p*c*h-u*f*d,this._y=u*f*h+p*c*d,this._z=u*c*d-p*f*h,this._w=u*c*h+p*f*d;break;case"YZX":this._x=p*c*h+u*f*d,this._y=u*f*h+p*c*d,this._z=u*c*d-p*f*h,this._w=u*c*h-p*f*d;break;case"XZY":this._x=p*c*h-u*f*d,this._y=u*f*h-p*c*d,this._z=u*c*d+p*f*h,this._w=u*c*h+p*f*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return!0===e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],i=e[8],a=e[1],s=e[5],l=e[9],u=e[2],c=e[6],h=e[10],p=n+s+h;if(p>0){let t=.5/Math.sqrt(p+1);this._w=.25/t,this._x=(c-l)*t,this._y=(i-u)*t,this._z=(a-r)*t}else if(n>s&&n>h){let t=2*Math.sqrt(1+n-s-h);this._w=(c-l)/t,this._x=.25*t,this._y=(r+a)/t,this._z=(i+u)/t}else if(s>h){let t=2*Math.sqrt(1+s-n-h);this._w=(i-u)/t,this._x=(r+a)/t,this._y=.25*t,this._z=(l+c)/t}else{let t=2*Math.sqrt(1+h-n-s);this._w=(a-r)/t,this._x=(i+u)/t,this._y=(l+c)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0):(this._x=0,this._y=-t.z,this._z=t.y)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x),this._w=n,this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(B(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);return 0===n||this.slerp(t,Math.min(1,e/n)),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,i=t._z,a=t._w,s=e._x,l=e._y,u=e._z,c=e._w;return this._x=n*c+a*s+r*u-i*l,this._y=r*c+a*l+i*s-n*u,this._z=i*c+a*u+n*l-r*s,this._w=a*c-n*s-r*l-i*u,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);let n=this._x,r=this._y,i=this._z,a=this._w,s=a*t._w+n*t._x+r*t._y+i*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let l=1-s*s;if(l<=Number.EPSILON){let t=1-e;return this._w=t*a+e*this._w,this._x=t*n+e*this._x,this._y=t*r+e*this._y,this._z=t*i+e*this._z,this.normalize(),this}let u=Math.sqrt(l),c=Math.atan2(u,s),h=Math.sin((1-e)*c)/u,p=Math.sin(e*c)/u;return this._w=a*h+this._w*p,this._x=n*h+this._x*p,this._y=r*h+this._y*p,this._z=i*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),i*Math.sin(e),i*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class t{constructor(e=0,n=0,r=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(t,e,n){return void 0===n&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(te.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(te.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6]*r,this.y=i[1]*e+i[4]*n+i[7]*r,this.z=i[2]*e+i[5]*n+i[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,i=t.elements,a=1/(i[3]*e+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*e+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*e+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*e+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,i=t.x,a=t.y,s=t.z,l=t.w,u=2*(a*r-s*n),c=2*(s*e-i*r),h=2*(i*n-a*e);return this.x=e+l*u+a*h-s*c,this.y=n+l*c+s*u-i*h,this.z=r+l*h+i*c-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,i=t.elements;return this.x=i[0]*e+i[4]*n+i[8]*r,this.y=i[1]*e+i[5]*n+i[9]*r,this.z=i[2]*e+i[6]*n+i[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,i=t.z,a=e.x,s=e.y,l=e.z;return this.x=r*l-i*s,this.y=i*a-n*l,this.z=n*s-r*a,this}projectOnVector(t){let e=t.lengthSq();if(0===e)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return tt.copy(this).projectOnVector(t),this.sub(tt)}reflect(t){return this.sub(tt.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());return 0===e?Math.PI/2:Math.acos(B(this.dot(t)/e,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=2*Math.random()-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},tt=new X,te=new K;new X,new X(0,0,0),new X(1,1,1),new X,new X,new X,new X,new X,new X,new X,new X(1,0,0),new X(0,1,0),new X(0,0,1),new X(0,1,0);var tn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},ti={h:0,s:0,l:0};function ta(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<.5?e:n<2/3?t+(e-t)*6*(2/3-n):t}var to=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){return void 0===e&&void 0===n?t&&t.isColor?this.copy(t):"number"==typeof t?this.setHex(t):"string"==typeof t&&this.setStyle(t):this.setRGB(t,e,n),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=I){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(255&t)/255,J.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=J.workingColorSpace){return this.r=t,this.g=e,this.b=n,J.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=J.workingColorSpace){if(t=(t%1+1)%1,e=B(e,0,1),n=B(n,0,1),0===e)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,i=2*n-r;this.r=ta(i,r,t+1/3),this.g=ta(i,r,t),this.b=ta(i,r,t-1/3)}return J.toWorkingColorSpace(this,r),this}setStyle(t,e=I){let n;function r(e){void 0!==e&&1>parseFloat(e)&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let i,a=n[1],s=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,e);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,e);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],i=r.length;if(3===i)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(6===i)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=I){let n=tn[t.toLowerCase()];return void 0!==n?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Q(t.r),this.g=Q(t.g),this.b=Q(t.b),this}copyLinearToSRGB(t){return this.r=Y(t.r),this.g=Y(t.g),this.b=Y(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=I){return J.fromWorkingColorSpace(ts.copy(this),t),65536*Math.round(B(255*ts.r,0,255))+256*Math.round(B(255*ts.g,0,255))+Math.round(B(255*ts.b,0,255))}getHexString(t=I){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=J.workingColorSpace){J.fromWorkingColorSpace(ts.copy(this),e);let n=ts.r,r=ts.g,i=ts.b,a=Math.max(n,r,i),s=Math.min(n,r,i),l,u,c=(s+a)/2;if(s===a)l=0,u=0;else{let t=a-s;switch(u=c<=.5?t/(a+s):t/(2-a-s),a){case n:l=(r-i)/t+(r<i?6:0);break;case r:l=(i-n)/t+2;break;case i:l=(n-r)/t+4}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,e=J.workingColorSpace){return J.fromWorkingColorSpace(ts.copy(this),e),t.r=ts.r,t.g=ts.g,t.b=ts.b,t}getStyle(t=I){J.fromWorkingColorSpace(ts.copy(this),t);let e=ts.r,n=ts.g,r=ts.b;return t!==I?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*e)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(t,e,n){return this.getHSL(tr),this.setHSL(tr.h+t,tr.s+e,tr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(tr),t.getHSL(ti);let n=(1-e)*tr.h+e*ti.h,r=(1-e)*tr.s+e*ti.s,i=(1-e)*tr.l+e*ti.l;return this.setHSL(n,r,i),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,i=t.elements;return this.r=i[0]*e+i[3]*n+i[6]*r,this.g=i[1]*e+i[4]*n+i[7]*r,this.b=i[2]*e+i[5]*n+i[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ts=new to;function tl(t){let e={};for(let n=0;n<t.length;n++){let r=function(t){let e={};for(let n in t)for(let r in e[n]={},t[n]){let i=t[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=i.clone():Array.isArray(i)?e[n][r]=i.slice():e[n][r]=i}return e}(t[n]);for(let t in r)e[t]=r[t]}return e}to.NAMES=tn;var tu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tc=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,td=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,t_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tk=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tz=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tI=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tF=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tO=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tj=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tU=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tN=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tB=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tW=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tV={common:{diffuse:{value:new to(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new V}},envmap:{envMap:{value:null},envMapRotation:{value:new V},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new V}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new V}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new V},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new V},normalScale:{value:new W(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new V},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new V}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new V}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new V}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new to(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new to(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0},uvTransform:{value:new V}},sprite:{diffuse:{value:new to(16777215)},opacity:{value:1},center:{value:new W(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new V},alphaMap:{value:null},alphaMapTransform:{value:new V},alphaTest:{value:0}}},tH={basic:{uniforms:tl([tV.common,tV.specularmap,tV.envmap,tV.aomap,tV.lightmap,tV.fog]),vertexShader:tC,fragmentShader:tS},lambert:{uniforms:tl([tV.common,tV.specularmap,tV.envmap,tV.aomap,tV.lightmap,tV.emissivemap,tV.bumpmap,tV.normalmap,tV.displacementmap,tV.fog,tV.lights,{emissive:{value:new to(0)}}]),vertexShader:tM,fragmentShader:tP},phong:{uniforms:tl([tV.common,tV.specularmap,tV.envmap,tV.aomap,tV.lightmap,tV.emissivemap,tV.bumpmap,tV.normalmap,tV.displacementmap,tV.fog,tV.lights,{emissive:{value:new to(0)},specular:{value:new to(1118481)},shininess:{value:30}}]),vertexShader:tA,fragmentShader:tL},standard:{uniforms:tl([tV.common,tV.envmap,tV.aomap,tV.lightmap,tV.emissivemap,tV.bumpmap,tV.normalmap,tV.displacementmap,tV.roughnessmap,tV.metalnessmap,tV.fog,tV.lights,{emissive:{value:new to(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tR,fragmentShader:tD},toon:{uniforms:tl([tV.common,tV.aomap,tV.lightmap,tV.emissivemap,tV.bumpmap,tV.normalmap,tV.displacementmap,tV.gradientmap,tV.fog,tV.lights,{emissive:{value:new to(0)}}]),vertexShader:tI,fragmentShader:tF},matcap:{uniforms:tl([tV.common,tV.bumpmap,tV.normalmap,tV.displacementmap,tV.fog,{matcap:{value:null}}]),vertexShader:tE,fragmentShader:tT},points:{uniforms:tl([tV.points,tV.fog]),vertexShader:tO,fragmentShader:tj},dashed:{uniforms:tl([tV.common,tV.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tb,fragmentShader:tw},depth:{uniforms:tl([tV.common,tV.displacementmap]),vertexShader:tm,fragmentShader:tg},normal:{uniforms:tl([tV.common,tV.bumpmap,tV.normalmap,tV.displacementmap,{opacity:{value:1}}]),vertexShader:tk,fragmentShader:tz},sprite:{uniforms:tl([tV.sprite,tV.fog]),vertexShader:tB,fragmentShader:tW},background:{uniforms:{uvTransform:{value:new V},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tu,fragmentShader:tc},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new V}},vertexShader:th,fragmentShader:tp},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tf,fragmentShader:td},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ty,fragmentShader:tx},distanceRGBA:{uniforms:tl([tV.common,tV.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tv,fragmentShader:t_},shadow:{uniforms:tl([tV.lights,tV.fog,{color:{value:new to(0)},opacity:{value:1}}]),vertexShader:tU,fragmentShader:tN}};tH.physical={uniforms:tl([tH.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new V},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new V},clearcoatNormalScale:{value:new W(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new V},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new V},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new V},sheen:{value:0},sheenColor:{value:new to(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new V},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new V},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new V},transmissionSamplerSize:{value:new W},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new V},attenuationDistance:{value:0},attenuationColor:{value:new to(0)},specularColor:{value:new to(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new V},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new V},anisotropyVector:{value:new W},anisotropyMap:{value:null},anisotropyMapTransform:{value:new V}}]),vertexShader:tR,fragmentShader:tD};var tq=(1+Math.sqrt(5))/2,t$=1/tq;new X(-tq,t$,0),new X(tq,t$,0),new X(-t$,0,tq),new X(t$,0,tq),new X(0,tq,-t$),new X(0,tq,t$),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1);var tG="\\[\\]\\.:\\/",tZ="[^"+tG+"]",tJ="[^"+tG.replace("\\.","")+"]";/((?:WC+[\/:])*)/.source.replace("WC",tZ),/(WCOD+)?/.source.replace("WCOD",tJ),/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tZ),/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tZ),"u">typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"167"}})),"u">typeof window&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="167");var tQ,tY=((r=tY||{})[r.x=0]="x",r[r.y=0]="y",r[r.z=0]="z",r),tK=d(_()),tX=class{constructor(t){this.debug=(0,tK.default)(t)}log(t,...e){this.debug(t,...e)}},t0=function(){this.onInit=function(){this.THREE=this.context.three,this.curVector=new this.THREE.Vector3(0,0,0),this.destVector=new this.THREE.Vector3(0,0,0),this.curQuaternion=new this.THREE.Quaternion(0,0,0,0),this.destQuaternion=new this.THREE.Quaternion(0,0,0,0),this.vectorToSet=null,this.quatToSet=null,this.vectorCounter=0,this.quatCounter=0,this.speed=1.25},this.onTick=function(t){if(this.vectorToSet){if(this.vectorToSet.equals(this.destVector)&&this.vectorCounter>120)return;this.vectorCounter++,this.curVector.lerp(this.destVector,t/1e3*this.speed),this.vectorToSet.set(this.curVector.x,this.curVector.y,this.curVector.z)}if(this.quatToSet){if(this.quatToSet.equals(this.destQuaternion)&&this.quatCounter>120)return;this.quatCounter++,this.curQuaternion.slerp(this.destQuaternion,t/1e3*this.speed),this.quatToSet.set(this.curQuaternion.x,this.curQuaternion.y,this.curQuaternion.z,this.curQuaternion.w)}},this.animateVector=function(t,e){this.vectorCounter=0,this.destVector=e,this.vectorToSet=t},this.animateQuaternion=function(t,e){this.quatCounter=0,this.destQuaternion=e,this.quatToSet=t},this.onEvent=function(){},this.onInputsUpdated=function(){},this.onDestroy=function(){}},t1=()=>new t0,t3=function(){this.onInit=function(){this.THREE=this.context.three},this.onTick=function(t){},this.onEvent=function(){},this.onInputsUpdated=function(){},this.onDestroy=function(){},this.createName=async(t,e,n,r)=>{let i=(null==n?void 0:n.color)??"#878291",a=(null==n?void 0:n.textColor)??"#fff",s=new FontFace("OpenSans-SemiBold","url(https://superviz2homologmediaserver.s3.amazonaws.com/static/fonts/OpenSans-SemiBold.woff)");await s.load(),document.fonts.add(s);let l=this.createText(e,a,i);return l.position.set(0,r,0),t.add(l),l},this.createText=(t,e,n)=>{let r=document.createElement("canvas"),i=r.getContext("2d"),a=100*i.measureText(t).width*1.12;r.width=a,r.height=1e3,i.font="1000px OpenSans-SemiBold",i.textBaseline="middle",i.fillStyle=e,i.fillText(t,0,500);let s=new this.THREE.Texture(r);s.needsUpdate=!0;let l=new this.THREE.SpriteMaterial({map:s,useScreenCoordinates:!1,opacity:1,alphaTest:.5,depthTest:!0,transparent:!0}),u=new this.THREE.Sprite(l);u.raycast=()=>null;let c=new this.THREE.Object3D;c.textHeight=.03,c.textWidth=a/1e3*c.textHeight,u.scale.set(a/1e3*.03,.03,1);let h=document.createElement("canvas");h.width=a+10,h.height=1010;let p=h.getContext("2d"),f=this.addAlpha(n.split("#")[1],.99);p.fillStyle=`#${f}`,p.beginPath(),p.roundRect(-15,0,h.width,.9*h.height,h.width),p.fill();let d=new this.THREE.Texture(h);d.needsUpdate=!0;let m=new this.THREE.SpriteMaterial({opacity:.99,transparent:!1,useScreenCoordinates:!1,alphaTest:.1,color:new this.THREE.Color(n),map:d}),g=new this.THREE.Sprite(m);return g.scale.set(1.18,1.25,1.1),u.add(g),c.add(u),c},this.addAlpha=(t,e)=>t+Math.round(255*Math.min(Math.max(e||1,0),1)).toString(16).toUpperCase()},t2=()=>new t3,t6=function(){this.inputs={origin:{x:0,y:0,z:0}},this.onInit=function(){this.THREE=this.context.three,this.destPos=new this.THREE.Vector3(0,0,0),this.curPos=new this.THREE.Vector3(0,0,0),this.startPos=new this.THREE.Vector3(0,0,0),this.counter=0,this.slot=null,this.lastIndex=-1,this.lastDestPos=new this.THREE.Vector3(1e3,1e3,1e3),this.lastStartPos=new this.THREE.Vector3(1e3,1e3,1e3),this.speed=.95,this.tempStartPos=new this.THREE.Vector3(0,0,0),this.quat=new this.THREE.Quaternion(0,0,0,0)},this.onTick=function(t){var e,n;this.createdMaterial&&(this.counter>60&&this.lastDestPos.equals(this.destPos)&&.2>this.lastStartPos.distanceTo(this.startPos)||(this.counter++,this.lastIndex!==(null==(e=this.slot)?void 0:e.index)&&this.material&&(this.material.color.set(""),this.lastIndex=null==(n=this.slot)?void 0:n.index),this.curPos.lerp(this.destPos,t/1e3*this.speed),this.lastDestPos.x=this.destPos.x,this.lastDestPos.y=this.destPos.y,this.lastDestPos.z=this.destPos.z,this.lastStartPos.x=this.startPos.x,this.lastStartPos.y=this.startPos.y,this.lastStartPos.z=this.startPos.z,this._updateMesh(this.startPos,this.curPos),this.outputs.objectRoot.visible=this.isOn&&this.shouldRenderAvatars))},this.onDestroy=function(){this.material&&this.material.dispose()},this.createMaterial=t=>{var e;this.createdMaterial=!0;let n=this.createTextureCanvas(),r=new this.THREE.Texture(n);r.needsUpdate=!0;let i=(null==(e=this.slot)?void 0:e.color)??t??"#878291";this.material=new this.THREE.MeshBasicMaterial({map:r,blending:this.THREE.AdditiveBlending,color:i,side:this.THREE.DoubleSide,depthWrite:!0,transparent:!0})},this._updateMesh=(t,e)=>{this.tempStartPos.copy(this.inputs.origin),this.tempStartPos.applyQuaternion(this.quat),this.tempStartPos.add(t);let n=new this.THREE.LineCurve3(this.tempStartPos,e);this.outputs.objectRoot&&this.outputs.objectRoot.geometry&&this.outputs.objectRoot.geometry.dispose();let r=new this.THREE.TubeGeometry(n,1,.003,4,!1);this.material&&(this.outputs.objectRoot=new this.THREE.Mesh(r,this.material))},this._doUpdateGeometry=(t,e,n,r,i={x:0,y:0,z:0},a={x:0,y:0,z:0})=>{this.slot=n,this.createdMaterial||this.createMaterial(this.slot),this.destPos.x=a.x,this.destPos.y=a.y,this.destPos.z=a.z,this.startPos.x=i.x,this.startPos.y=i.y,this.startPos.z=i.z,this.quat.set(r.x,r.y,r.z,r.w),this.counter=0,this.isOn=t,this.shouldRenderAvatars=e},this.updateGeometry=(t,e,n,r,i,a)=>{this._doUpdateGeometry(n,r,i,a,t,e)},this.createTextureCanvas=()=>{let t=document.createElement("canvas"),e=t.getContext("2d");t.width=1,t.height=64;let n=e.createLinearGradient(0,0,t.width,t.height);return n.addColorStop(0,"rgba(  0,  0,  0,0.1)"),n.addColorStop(.1,"rgba(160,160,160,0.3)"),n.addColorStop(.5,"rgba(255,255,255,0.5)"),n.addColorStop(.9,"rgba(160,160,160,0.3)"),n.addColorStop(1,"rgba(  0,  0,  0,0.1)"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),t},this.onEvent=function(t,e){},this.onInputsUpdated=function(t){}},t5=()=>new t6,t4={model3DUrl:"https://production.storage.superviz.com/readyplayerme/1.glb"},t9="presence-3d-store",t7=class{constructor(t,e){var n,r,i;this.participants=[],this.roomParticipants={},this.isAttached=!1,this.localSlot=-1,this.currentCirclePosition=tY,this.currentLocalPosition=tY,this.currentLocalRotation=tY,this.currentLocalLaserDest=tY,this.circlePositions=[],this.avatars={},this.lasers={},this.laserUpdateIntervals={},this.positionInfos={},this.tempQuaternion=new K(0,0,0,0),this.isSweeping=!1,this.unsubscribeFrom=[],this.hasJoinedRoom=!1,this.hasJoined3D=!1,this.attach=t=>{if(Object.values(t).includes(null)||Object.values(t).includes(void 0)){let t=`${this.name} @ attach - params are required`;throw this.logger.log(t),Error(t)}this.logger.log("attached");let{eventBus:e,useStore:n,ioc:r,Presence3DManagerService:i}=t;this.useStore=n.bind(this),this.room=r.createRoom(this.name),this.presence3DManager=new i(this.room,this.useStore);let{localParticipant:a,hasJoinedRoom:s}=this.useStore("global-store");a.subscribe(),s.subscribe();let{hasJoined3D:l,participants:u}=this.useStore(t9);l.subscribe(),u.subscribe(this.onParticipantsUpdated),this.isAttached=!0,this.eventBus=e,this.start()},this.detach=()=>{if(!this.isAttached){this.logger.log(`${this.name} @ detach - component is not attached}`);return}this.logger.log("detached"),this.destroy(),this.unsubscribeFrom.forEach(t=>t(this)),this.localParticipant=void 0,this.isAttached=!1},this.destroy=()=>{this.unsubscribeToRealtimeEvents(),this.unsubscribeToEventBusEvents(),this.room.disconnect(),this.room=void 0,this.participants.forEach(t=>{this.presence3DManager.unsubscribeFromUpdates(t.id,this.onParticipantUpdated)}),this.presence3DManager=void 0,this.useStore(t9).destroy(),this.useStore=void 0,this.isAttached=!1,this.ambientLight.stop(),this.directionalLight.stop(),this.participants.forEach(t=>{this.removeParticipant(t,!0)}),Object.keys(this.laserUpdateIntervals).forEach(t=>{clearInterval(this.laserUpdateIntervals[t])}),this.participants=[],this.laserUpdateIntervals={},this.avatars={},this.lasers={}},this.start=()=>{if(!this.hasJoinedRoom||!this.hasJoined3D){this.logger.log("matterport component @ start - not joined yet"),setTimeout(()=>{this.logger.log("matterport component @ start - retrying"),this.start()},1e3);return}this.subscribeToRealtimeEvents(),this.subscribeToEventBusEvents(),this.createParticipantList()},this.subscribeToRealtimeEvents=()=>{this.logger.log("matterport component @ subscribeToRealtimeEvents"),this.room.on("participant-joined",this.onParticipantJoined),this.room.presence.on("presence.leave",this.onParticipantLeave),this.room.on("gather",this.onGatherUpdate),this.room.on("follow-me",this.onFollowParticipantUpdate)},this.unsubscribeToRealtimeEvents=()=>{this.logger.log("matterport component @ unsubscribeToRealtimeEvents"),this.room.presence.off("presence.leave"),this.room.off("participant-joined",this.onParticipantJoined),this.room.off("gather",this.onGatherUpdate),this.room.off("follow-me",this.onFollowParticipantUpdate)},this.subscribeToEventBusEvents=()=>{this.logger.log("matterport component @ subscribeToEventBusEvents"),this.eventBus.subscribe("realtime.go-to-participant",this.goTo),this.eventBus.subscribe("realtime.local-follow-participant",this.localFollow),this.eventBus.subscribe("realtime.follow-participant",this.follow),this.eventBus.subscribe("realtime.private-mode",this.setPrivate)},this.unsubscribeToEventBusEvents=()=>{this.logger.log("matterport component @ unsubscribeToEventBusEvents"),this.eventBus.unsubscribe("realtime.go-to-participant",this.goTo),this.eventBus.unsubscribe("realtime.local-follow-participant",this.localFollow),this.eventBus.unsubscribe("realtime.private-mode",this.setPrivate),this.eventBus.unsubscribe("realtime.follow-participant",this.follow)},this.onParticipantJoined=t=>{if(!t.data)return;this.logger.log("matterport component @ onParticipantJoined",t);let{id:e,name:n,avatar:r,avatarConfig:i,type:a,slot:s}=t.data;if(e===this.localParticipantId){this.onLocalParticipantJoined(t.data);return}this.addParticipant({id:e,name:n,avatar:r,avatarConfig:i,type:a,slot:s})},this.onLocalParticipantJoined=t=>{var e,n,r,i;this.createParticipantList(),this.config.avatarConfig&&this.presence3DManager.setParticipantData({avatarConfig:this.config.avatarConfig}),null!=(e=t.avatar)&&e.model3DUrl&&this.presence3DManager.setParticipantData({avatar:{model3DUrl:null==t?void 0:t.avatar.model3DUrl,imageUrl:null==(n=null==t?void 0:t.avatar)?void 0:n.imageUrl}}),null!=(r=t.avatar)&&r.model3DUrl||this.presence3DManager.setParticipantData({avatar:{model3DUrl:t4.model3DUrl,imageUrl:null==(i=null==t?void 0:t.avatar)?void 0:i.imageUrl}})},this.onParticipantLeave=t=>{this.logger.log("matterport component @ onParticipantLeave",t.data);let e=this.participants.find(e=>e.id===t.id);e&&this.removeParticipant(e,!0)},this.onParticipantUpdated=t=>{this.logger.log("matterport component @ onParticipantUpdated",t);let{id:e,name:n,avatar:r,avatarConfig:i,position:a,rotation:s,type:l,slot:u}=t.data??t;this.updateParticipant({position:a,rotation:s,id:e,name:n,avatar:r,avatarConfig:i,type:l,slot:u}),(this.localFollowParticipantId||this.followParticipantId)&&this.moveToAnotherParticipant(this.localFollowParticipantId??this.followParticipantId)},this.updateParticipant=async t=>{var e,n;if(!this.participants||0===this.participants.length||!t||!t.id||t.id===this.localParticipantId)return;let r=this.participants.find(e=>e.id===t.id);if(!r){this.addParticipant(t);return}if((null==(e=r.avatar)?void 0:e.model3DUrl)===(null==(n=t.avatar)?void 0:n.model3DUrl)&&(0,D.isEqual)(r.avatarConfig,t.avatarConfig)&&r.name===t.name){let e=this.participants.findIndex(e=>e.id===t.id);-1!==e&&(this.participants[e]=t)}else{this.removeParticipant(t,!1);let e=this.createParticipantOn3D(t);this.participants.push(e),this.config.isAvatarsEnabled&&await this.createAvatar(e),this.config.isLaserEnabled&&this.createLaser(e),this.config.isNameEnabled&&this.createName(e,this.avatars[t.id])}this.logger.log("matterport component @ updateParticipant",{participant:t,participants:this.participants})},this.onFollowParticipantUpdate=t=>{t.data.id!==this.localParticipantId&&(this.logger.log("three js component @ onFollowParticipantUpdate",t.data.id),this.followParticipantId=t.data.id,this.moveToAnotherParticipant(t.data.id))},this.onGatherUpdate=t=>{this.logger.log("three js component @ onGatherUpdate",t.data.id),t.data.id!==this.localParticipantId&&this.eventBus.publish("realtime.go-to-participant",t.data.id)},this.createParticipantList=()=>{Object.values(this.useStore(t9).participants.value).forEach(t=>{t.isPrivate||this.addParticipant(t)}),this.logger.log("matterport component @ createParticipantList",this.participants)},this.createParticipantOn3D=({id:t,name:e,avatar:n,avatarConfig:r,type:i,slot:a})=>{let s={id:t,name:e,avatar:n,isAudience:"audience"===i,avatarConfig:t===this.localParticipantId?this.config.avatarConfig:r,position:{x:0,y:0,z:0},rotation:{x:0,y:0},slot:a};return this.logger.log("matterport component @ createParticipantOn3D",s),s},this.removeParticipant=(t,e)=>{var n;this.logger.log("matterport component @ removeParticipant",{participant:t,unsubscribe:e}),this.participants=this.participants.filter(e=>e.id!==t.id),delete this.roomParticipants[t.id],this.destroyAvatar(t),this.destroyLaser(t),e&&(null==(n=this.presence3DManager)||n.unsubscribeFromUpdates(t.id,this.onParticipantUpdated))},this.addParticipant=async t=>{if(!t||!t.id||"audience"===t.type)return;let e=this.createParticipantOn3D(t);if(this.participants.find(t=>t.id===e.id)){this.logger.log("matterport component @ addParticipant - participant already exists"),this.onParticipantUpdated(t);return}this.participants.push(e),this.logger.log("matterport component @ addParticipant",{participant:t,participantOn3D:e,participants:this.participants}),this.roomParticipants[t.id]=t,this.presence3DManager.subscribeToUpdates(e.id,this.onParticipantUpdated),this.localParticipantId!==e.id&&(this.config.isAvatarsEnabled&&await this.createAvatar(e),this.config.isLaserEnabled&&this.createLaser(e),this.config.isNameEnabled&&this.createName(e,this.avatars[t.id]))},this.goTo=t=>{this.logger.log("matterport component @ goTo",t),this.moveToAnotherParticipant(t)},this.gather=()=>{this.logger.log("matterport component @ gather"),this.room.emit("gather",{id:this.localParticipant.id})},this.setPrivate=t=>{this.logger.log("matterport component @ private mode"),this.presence3DManager.updatePresence3D({id:this.localParticipantId,isPrivate:!!t}),this.isPrivate=!!t},this.follow=t=>{this.logger.log("matterport component @ follow"),this.room.emit("follow-me",{id:t})},this.localFollow=t=>{this.localFollowParticipantId=t},this.moveToAnotherParticipant=t=>{if(!this.positionInfos[t]||!this.isAttached||t===this.localParticipantId)return;let{mode:e}=this.positionInfos[t];if("mode.inside"===e){let{sweep:e}=this.positionInfos[t];if(e){let n=this.positionInfos[t].rotation||{x:0,y:0};this.moveToSweep(e,n)}}if("mode.dollhouse"===e||"mode.floorplan"===e){let n=this.matterportSdk.Mode.TransitionType.FLY,{position:r,rotation:i,floor:a}=this.positionInfos[t];this.matterportSdk.Mode.moveTo(e,{position:r,rotation:i,transition:n,zoom:25}).then(t=>{this.currentLocalMode=t}),"mode.floorplan"===e&&this.currentLocalFloorId!==a&&(-1===a?this.matterportSdk.Floor.showAll():this.matterportSdk.Floor.moveTo(a).then(()=>{this.currentLocalFloorId=a}))}},this._onLocalSweepChangeObserver=t=>{this.presence3DManager&&(this.currentSweepId=t.id,this.isPrivate||this.presence3DManager.updatePresence3D({id:this.localParticipantId,sweep:this.currentSweepId}))},this._onLocalFloorChangeObserver=t=>{this.presence3DManager&&(""!==t.id&&(this.currentLocalFloorId=parseFloat(t.id)),"all"===t.name&&(this.currentLocalFloorId=-1),this.isPrivate||this.presence3DManager.updatePresence3D({id:this.localParticipantId,floor:this.currentLocalFloorId}))},this._onLocalModeChangeObserver=t=>{this.presence3DManager&&(this.currentLocalMode=t,this.isPrivate||this.presence3DManager.updatePresence3D({id:this.localParticipantId,mode:this.currentLocalMode}))},this._onLocalCameraMoveObserver=({position:t,rotation:e,sweep:n})=>{this.presence3DManager&&(this.currentLocalPosition=this.adjustMyPositionToCircle(t),this.currentLocalRotation=e,this.currentSweepId=n,this.isPrivate||this.presence3DManager.updatePresence3D({id:this.localParticipantId,position:this.currentLocalPosition,rotation:this.currentLocalRotation,laser:this.currentLocalLaserDest,sweep:this.currentSweepId,mode:this.currentLocalMode,floor:this.currentLocalFloorId}))},this._onLocalMouseMoveObserver=t=>{this.presence3DManager&&!this.isPrivate&&(this.currentLocalLaserDest=t.position,this.isPrivate||this.presence3DManager.updatePresence3D({id:this.localParticipantId,position:this.currentLocalPosition,rotation:this.currentLocalRotation,laser:this.currentLocalLaserDest,mode:this.currentLocalMode,sweep:this.currentSweepId}))},this.addInputComponent=async()=>{let[t]=await this.matterportSdk.Scene.createObjects(1),e=t.addNode();this.mpInputComponent=e.addComponent("mp.input",{eventsEnabled:!1,userNavigationEnabled:!0}),e.start()},this.addSceneLight=async()=>{this.directionalLight=await this.createDirectionLight(),this.ambientLight=await this.createAmbientLight()},this.createDirectionLight=async()=>{let[t]=await this.matterportSdk.Scene.createObjects(1),e=t.addNode(),n=e.addComponent("mp.directionalLight",{enabled:!0,color:{r:1,g:1,b:1},intensity:1,position:{x:.2,y:1,z:0},target:{x:.5,y:0,z:0},debug:!1});return this.THREE=n.context.three,e.start(),e},this.createAmbientLight=async()=>{let[t]=await this.matterportSdk.Scene.createObjects(1),e=t.addNode();return e.addComponent("mp.ambientLight",{enabled:!0,color:{r:1,g:1,b:1},intensity:1}),e.start(),e},this.adjustMyPositionToCircle=t=>{var e,n;if(!this.presence3DManager||(this.localSlot=(null==(e=this.localParticipant.slot)?void 0:e.index)??-1,!this.THREE||-1===this.localSlot))return t;let r=new this.THREE.Vector3(null==t?void 0:t.x,null==t?void 0:t.y,null==t?void 0:t.z);return this.circlePositions[this.localSlot]?(null!=(n=this.currentCirclePosition)&&n.isVector3||(this.currentCirclePosition=new this.THREE.Vector3(this.circlePositions[this.localSlot].x,t.y,this.circlePositions[this.localSlot].z)),this.currentCirclePosition.set(this.circlePositions[this.localSlot].x,t.y,this.circlePositions[this.localSlot].z),r.add(this.currentCirclePosition.multiplyScalar(.13)),{x:r.x,y:t.y,z:r.z}):t},this.onParticipantsUpdated=t=>{this.isAttached&&(this.logger.log("matterport component @ onParticipantsUpdated",t),this.roomParticipants={},t.forEach(t=>{this.roomParticipants[t.id]=t}),Object.values(t).forEach(t=>{if(t.id===this.localParticipantId)return;let e=t.id,{position:n,rotation:r,sweep:i,floor:a,mode:s,isPrivate:l}=t;if(this.positionInfos[e]={position:n,rotation:r,mode:s,sweep:i,floor:a},l&&this.avatars[e]&&this.removeParticipant(t,!0),l||this.avatars[e]||this.addParticipant(t),this.avatars[e]){let i=this.avatars[e],a=this.lasers[e],s=t.laser;n&&r&&this.updateAvatar(i,n,r),a&&(this.laserUpdateIntervals[e]&&clearInterval(this.laserUpdateIntervals[e]),this.laserUpdateIntervals[e]=setInterval(()=>{this.updateLaser(e,i,a,s)},30))}}))},this.name="presence3dMatterport",this.logger=new tX("@superviz/sdk/matterport-component"),this.logger.log("matterport component @ constructor",{matterportSdk:t,options:e}),this.config={isAvatarsEnabled:(null==e?void 0:e.isAvatarsEnabled)??!0,isLaserEnabled:(null==e?void 0:e.isLaserEnabled)??!0,isNameEnabled:(null==e?void 0:e.isNameEnabled)??!0,avatarConfig:{height:(null==(n=null==e?void 0:e.avatarConfig)?void 0:n.height)||.25,scale:(null==(r=null==e?void 0:e.avatarConfig)?void 0:r.scale)||.55,laserOrigin:(null==(i=null==e?void 0:e.avatarConfig)?void 0:i.laserOrigin)??{x:0,y:-.2,z:.07}}},this.logger.log("matterport component @ constructor - config",this.config),this.matterportSdk=t,this.matterportSdk.Scene.register("lerper",t1),this.matterportSdk.Scene.register("name",t2),this.matterportSdk.Scene.register("laser",t5),this.addInputComponent(),this.addSceneLight(),this.createCircleOfPositions(),this.subscribeToMatterportEvents()}get localParticipantId(){var t;return null==(t=this.localParticipant)?void 0:t.id}async destroyAvatar(t){this.logger.log("matterport component @ destroyAvatar",t),this.avatars[t.id]&&(this.avatars[t.id].stop(),delete this.avatars[t.id])}async destroyLaser(t){this.logger.log("matterport component @ destroyLaser",t),this.lasers[t.id]&&(this.lasers[t.id].stop(),delete this.lasers[t.id])}async createAvatar(t){var e,n,r;if(this.logger.log("matterport component @ createAvatar",t),!this.isAttached)return;let i=(null==(e=null==t?void 0:t.avatarConfig)?void 0:e.scale)||.55,a=(null==(n=null==t?void 0:t.avatarConfig)?void 0:n.height)||.25,[s]=await this.matterportSdk.Scene.createObjects(1),l=s.addNode();l.obj3D.rotation.set(tY.x,tY.y,tY.z),l.obj3D.name="avatar",l.obj3D.userData={uuid:t.id,name:t.name,height:a};let u=(null==(r=t.avatar)?void 0:r.model3DUrl)??"https://production.storage.superviz.com/readyplayerme/1.glb",c={x:i,y:i,z:i};return l.lerper=l.addComponent("lerper"),l.avatarName=l.addComponent("name"),this.avatars[t.id]=l,new Promise(t=>{l.addComponent("mp.gltfLoader",{url:u,localScale:c,onLoaded:()=>{this.matterportSdk.Camera.getPose().then(e=>{this._onLocalCameraMoveObserver({position:e.position,rotation:e.rotation,sweep:e.sweep}),t(l)})}}),l.start()})}async createName(t,e){var n,r,i;let a;if(this.logger.log("createName",t,e),!e)return;let s=Number(this.THREE.REVISION),l=null==(r=(null==(n=t.avatar)?void 0:n.model3DUrl)??"https://production.storage.superviz.com/readyplayerme/1.glb")?void 0:r.includes("readyplayerme"),u=e.avatarName,c=t.slot??(null==(i=this.roomParticipants[t.id])?void 0:i.slot),h=new this.THREE.Box3().setFromObject(e.obj3D),p=new X(0,0,0);h.getSize(p),s<=146?a=h.min.y-e.position.y+1.1*p.y:(a=1.2*p.y,l&&(a=4.1*p.y)),u.createName(e.obj3D,t.name,c,a)}async createLaser(t){var e;if(this.logger.log("matterport component @ createLaser",t),!this.isAttached)return;let n=new X(0,-.2,.07);null!=(e=t.avatarConfig)&&e.laserOrigin&&(n=new X(t.avatarConfig.laserOrigin.x,t.avatarConfig.laserOrigin.y,t.avatarConfig.laserOrigin.z));let[r]=await this.matterportSdk.Scene.createObjects(1),i=r.addNode();i.laserPointer=i.addComponent("laser",{origin:n}),i.start(),i.obj3D.userData={uuid:t.id},this.lasers[t.id]=i}subscribeToMatterportEvents(){this.matterportSdk.Camera.pose.subscribe(this._onLocalCameraMoveObserver),this.matterportSdk.Pointer.intersection.subscribe(this._onLocalMouseMoveObserver),this.matterportSdk.Floor.current.subscribe(this._onLocalFloorChangeObserver),this.matterportSdk.Mode.current.subscribe(this._onLocalModeChangeObserver),this.matterportSdk.Sweep.current.subscribe(this._onLocalSweepChangeObserver)}createCircleOfPositions(){for(let t=0;t<50;t++){let e=Math.PI/180*(7.2*t),n=15*Math.cos(e),r=15*Math.sin(e);if(0!==t){let e={x:n,y:0,z:r};t%2==0?this.circlePositions.push(e):this.circlePositions.unshift(e)}}}moveToSweep(t,e){this.isSweeping||!this.isAttached||(this.mpInputComponent&&(this.mpInputComponent.inputs.userNavigationEnabled=!1),this.isSweeping=!0,this.matterportSdk.Sweep.moveTo(t,{transitionTime:500,transition:this.matterportSdk.Sweep.Transition.FLY,rotation:e||this.currentLocalRotation}).finally(()=>{this.isSweeping=!1,this.mpInputComponent&&(this.mpInputComponent.inputs.userNavigationEnabled=!0)}))}updateAvatar(t,e,n){var r,i;if(!this.isAttached)return;let a=new this.THREE.Vector3(1,0,0),s=new this.THREE.Vector3(0,1,0),l=new this.THREE.Quaternion().setFromAxisAngle(a,this.THREE.MathUtils.degToRad(-n.x)),u=new this.THREE.Quaternion().setFromAxisAngle(s,this.THREE.MathUtils.degToRad(null==n?void 0:n.y)+Math.PI),{lerper:c}=t;c.animateQuaternion(t.obj3D.quaternion,u.multiply(l));let h=parseFloat((null==(i=null==(r=null==t?void 0:t.obj3D)?void 0:r.userData)?void 0:i.height)??0)-.62,p=new this.THREE.Vector3(this.currentCirclePosition.x,0,this.currentCirclePosition.z),f=new this.THREE.Vector3(null==e?void 0:e.x,0,null==e?void 0:e.z).sub(p);f.y=e.y+h,c.animateVector(t.obj3D.position,f)}updateLaser(t,e,n,r){let i=this.roomParticipants[t];if(!e||!n||!r||!this.isAttached||!i)return;let a=n.laserPointer,{x:s,y:l,z:u}=e.obj3D.position;if(e.obj3D.getWorldQuaternion(this.tempQuaternion),a){let{slot:t}=i;a.updateGeometry({x:s,y:l+.35,z:u},r,!0,!0,t,this.tempQuaternion)}}},t8=d(R()),et=class{constructor(t={}){this.subscribe=t=>{this.callbacks.push(t)},this.unsubscribe=t=>{this.callbacks=this.callbacks.filter(e=>e!==t)},this.publish=(...t)=>{this.callbacks&&this.callbacks.forEach(e=>{this.callListener(e,t).catch(n=>{this.logger.log("superviz-sdk:observer-helper:publish:error",`
            Failed to execute callback on publish value.
            Callback: ${e}
            Event: ${JSON.stringify(t)}
            Error: ${n}
          `)})})},this.reset=()=>{this.callbacks=[]},this.destroy=()=>{delete this.logger,delete this.callbacks},this.callListener=(t,e)=>new Promise((n,r)=>{try{let r=t(...e);n(r)}catch(t){r(t)}});let{logger:e,throttleTime:n}=t;this.logger=e??new tX("@superviz/sdk/observer-helper"),this.throttle=n,this.callbacks=[],this.throttle&&(this.publish=(0,t8.default)(this.publish,this.throttle))}},ee=class{constructor(){this.eventType="INTERACTION.CLICK"}onEvent(){tQ.onClick()}},en=class{constructor(t,e){if(this.isPinsVisible=!0,this.divWrapperReplacementInterval=null,this.isSweeping=!1,this.commentsSide="left",this.selectedPin=null,this.setCommentsMetadata=t=>{this.commentsSide=t},this.hideTemporaryPin=t=>{var e;let n=t.target;this.showcaseDiv.contains(n)||null!=(e=this.pins.get("temporary-pin"))&&e.contains(n)||this.removeAnnotationPin("temporary-pin")},this.resetPins=t=>{t&&(null==t?void 0:t.key)!=="Escape"||(this.resetSelectedPin(),this.removeAnnotationPin("temporary-pin"),this.temporaryPinCoordinates=null)},this.annotationSelected=({detail:t})=>{var e;let{uuid:n,haltGoToPin:r,newPin:i}=t;if(!n)return;i&&this.pins.get(n).setAttribute("newPin","");let a=JSON.parse((null==(e=this.selectedPin)?void 0:e.getAttribute("annotation"))??"{}");if(this.resetPins(),(null==a?void 0:a.uuid)===n)return;document.body.dispatchEvent(new CustomEvent("close-temporary-annotation"));let s=this.pins.get(n);if(!s)return;s.setAttribute("active",""),this.selectedPin=s;let l=this.annotations.find(t=>t.uuid===n);if(l){let t=JSON.parse(l.position);if(t&&!r){let e=t.camera;this.moveToSweep(e.sweep,e.rotation)}}},this.onClick=()=>{if(!this.isActive)return;let t={x:this.intersection.position.x,y:this.intersection.position.y,z:this.intersection.position.z,type:"matterport"},e={position:t,camera:this.cameraPose};this.resetSelectedPin(),this.onPinFixedObserver.publish(e),this.createTemporaryPin(t)},this.onToggleAnnotationSidebar=({detail:t})=>{let{open:e}=t;e||(this.pins.forEach(t=>{t.removeAttribute("active")}),this.pins.has("temporary-pin")&&this.removeAnnotationPin("temporary-pin"))},typeof window>"u")throw Error("[SuperViz] MatterportPin cannot be initialized in a non-browser environment. Window is not defined");tQ=this,this.showcaseDiv=e,this.matterportSdk=t,this.logger=new tX("@superviz/sdk/comments-component/matterport-adapter"),this.isActive=!1,this.pins=new Map,this.divWrapper=this.createDivWrapper(),this.matterportSdk.Asset.registerTexture("pointer","https://production.cdn.superviz.com/static/pin-add.png"),this.createInputListener(),document.body.addEventListener("select-annotation",this.annotationSelected),document.body.addEventListener("toggle-annotation-sidebar",this.onToggleAnnotationSidebar),document.body.style.position="relative",this.onPinFixedObserver=new et,this.annotations=[],this.renderAnnotationsPins(),this.matterportSdk.Camera.pose.subscribe(t=>{this.cameraPose=t,(this.isActive||this.isPinsVisible)&&this.renderAnnotationsPins()}),this.showcaseSides=this.showcaseDiv.getBoundingClientRect()}destroy(){this.removeAnnotationsPins(),this.removeListeners()}setActive(t){if(this.isActive=t,this.isActive){this.addListeners(),this.matterportSdk.Pointer.editTexture("pointer");return}this.matterportSdk.Pointer.resetTexture()}setPinsVisibility(t){if(this.isPinsVisible=t,this.isPinsVisible){this.renderAnnotationsPins();return}this.removeAnnotationsPins()}updateAnnotations(t){this.logger.log("updateAnnotations",t),this.annotations=t,(this.isActive||this.isPinsVisible)&&this.renderAnnotationsPins()}removeAnnotationPin(t){let e=this.pins.get(t);e&&(e.remove(),this.pins.delete(t),this.annotations=this.annotations.filter(e=>e.uuid!==t))}createTemporaryPin(t){let e=document.getElementById("superviz-temporary-pin");this.temporaryPinCoordinates=t,e||((e=document.createElement("superviz-comments-annotation-pin")).id="superviz-temporary-pin",e.setAttribute("type","add"),e.setAttribute("showInput",""),e.setAttribute("containerSides",JSON.stringify(this.showcaseSides)),e.setAttribute("commentsSide",this.commentsSide),e.setAttribute("participantsList",JSON.stringify(this.participants)),e.setAttribute("position",JSON.stringify(this.temporaryPinCoordinates)),e.setAttribute("annotation",JSON.stringify({})),e.setAttributeNode(document.createAttribute("active")));let{width:n,height:r}=this.showcaseDiv.getBoundingClientRect(),i=this.position3DToScreen(t,n,r,0,-32),a={x:i.left,y:i.top,type:t.type};e.setAttribute("position",JSON.stringify(a)),this.divWrapper.appendChild(e),this.pins.set("temporary-pin",e)}addListeners(){this.intersectionObserver=this.matterportSdk.Pointer.intersection.subscribe(t=>{this.intersection=t}),this.inputComponent.inputs.eventsEnabled=!0,this.inputComponent.inputs.userNavigationEnabled=!1,document.body.addEventListener("keyup",this.resetPins),document.body.addEventListener("click",this.hideTemporaryPin)}removeListeners(){var t;document.body.removeEventListener("select-annotation",this.annotationSelected),document.body.removeEventListener("toggle-annotation-sidebar",this.onToggleAnnotationSidebar),null==(t=this.intersectionObserver)||t.cancel(),this.inputComponent.inputs.eventsEnabled=!1,this.inputComponent.inputs.userNavigationEnabled=!0,document.body.removeEventListener("keyup",this.resetPins),document.body.removeEventListener("click",this.hideTemporaryPin)}async renderAnnotationsPins(){this.annotations.forEach(async t=>{let e=JSON.parse(t.position).position;if((null==e?void 0:e.type)!=="matterport"||t.resolved)return;this.pins.has(t.uuid)||this.createPin(t,e);let{width:n,height:r}=this.showcaseDiv.getBoundingClientRect(),i=this.position3DToScreen(e,n,r,0,-32),a=await this.checkIsVisible(i,e),s=this.pins.get(t.uuid);a?(s.setAttribute("style","opacity: 1"),this.pins.get(t.uuid).setAttribute("position",JSON.stringify({x:i.left,y:i.top}))):s.setAttribute("style","opacity: 0")});let t=this.pins.get("temporary-pin");if(t){let{width:e,height:n}=this.showcaseDiv.getBoundingClientRect(),r=this.position3DToScreen(this.temporaryPinCoordinates,e,n,0,-32);await this.checkIsVisible(r,this.temporaryPinCoordinates)?(t.setAttribute("style","opacity: 1"),t.setAttribute("position",JSON.stringify({x:r.left,y:r.top}))):t.setAttribute("style","opacity: 0")}}createPin(t,e){let{width:n,height:r}=this.showcaseDiv.getBoundingClientRect(),i=this.position3DToScreen(e,n,r,0,-32),a=document.createElement("superviz-comments-annotation-pin");this.divWrapper.appendChild(a),a.setAttribute("type","show"),a.setAttribute("annotation",JSON.stringify(t)),a.setAttribute("position",JSON.stringify({x:i.left,y:i.top})),a.setAttribute("participantsList",JSON.stringify(this.participants)),this.pins.set(t.uuid,a)}removeAnnotationsPins(){this.pins.forEach(t=>{t.remove()}),this.pins.clear()}set participantsList(t){this.participants=t}resetSelectedPin(){this.selectedPin&&(this.selectedPin.removeAttribute("active"),this.selectedPin=null)}moveToSweep(t,e){this.isSweeping||(this.isSweeping=!0,this.matterportSdk.Sweep.moveTo(t,{transitionTime:500,transition:this.matterportSdk.Sweep.Transition.FLY,rotation:e}).finally(()=>{this.isSweeping=!1}))}createDivWrapper(){let t=this.showcaseDiv.getBoundingClientRect(),e=document.createElement("div");return this.showcaseDiv.parentElement.style.position="relative",e.style.position="fixed",e.style.top=`${t.top}px`,e.style.left=`${t.left}px`,e.style.width=`${t.width}px`,e.style.height=`${t.height}px`,e.style.pointerEvents="none",e.style.overflow="hidden",this.divWrapperReplacementInterval||(this.divWrapperReplacementInterval=setInterval(()=>{let t=this.showcaseDiv.getBoundingClientRect();e.style.top=`${t.top}px`,e.style.left=`${t.left}px`,e.style.width=`${t.width}px`,e.style.height=`${t.height}px`},1)),this.showcaseDiv.parentElement.appendChild(e),e}async createInputListener(){let[t]=await this.matterportSdk.Scene.createObjects(1),e=t.addNode();this.inputComponent=e.addComponent("mp.input",{eventsEnabled:!1,userNavigationEnabled:!0}),e.start(),this.inputComponent.spyOnEvent(new ee)}position3DToScreen(t,e,n,r,i){let a=this.matterportSdk.Conversion.worldToScreen(t,this.cameraPose,{w:e,h:n});return{top:Math.abs(a.y)+i,left:Math.abs(a.x)+r}}async checkIsVisible(t,e){let n=new X(e.x,e.y,e.z),r=await this.matterportSdk.Renderer.getWorldPositionData({x:t.left,y:t.top});return!!r&&!!r.position&&3>new X(r.position.x,r.position.y,r.position.z).distanceTo(n)}};"u">typeof window&&(window.Presence3D=t7,window.MatterportPin=en)}}]);