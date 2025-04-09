(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var dd={exports:{}},Na={},fd={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Gw(){if(og)return Ce;og=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function A(L){return L===null||typeof L!="object"?null:(L=T&&L[T]||L["@@iterator"],typeof L=="function"?L:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F=Object.assign,$={};function j(L,G,de){this.props=L,this.context=G,this.refs=$,this.updater=de||O}j.prototype.isReactComponent={},j.prototype.setState=function(L,G){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,G,"setState")},j.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function W(){}W.prototype=j.prototype;function X(L,G,de){this.props=L,this.context=G,this.refs=$,this.updater=de||O}var Q=X.prototype=new W;Q.constructor=X,F(Q,j.prototype),Q.isPureReactComponent=!0;var ie=Array.isArray,Se=Object.prototype.hasOwnProperty,Te={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function I(L,G,de){var Re,Ae={},De=null,Me=null;if(G!=null)for(Re in G.ref!==void 0&&(Me=G.ref),G.key!==void 0&&(De=""+G.key),G)Se.call(G,Re)&&!N.hasOwnProperty(Re)&&(Ae[Re]=G[Re]);var Fe=arguments.length-2;if(Fe===1)Ae.children=de;else if(1<Fe){for(var $e=Array(Fe),yt=0;yt<Fe;yt++)$e[yt]=arguments[yt+2];Ae.children=$e}if(L&&L.defaultProps)for(Re in Fe=L.defaultProps,Fe)Ae[Re]===void 0&&(Ae[Re]=Fe[Re]);return{$$typeof:r,type:L,key:De,ref:Me,props:Ae,_owner:Te.current}}function R(L,G){return{$$typeof:r,type:L.type,key:G,ref:L.ref,props:L.props,_owner:L._owner}}function k(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function D(L){var G={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(de){return G[de]})}var V=/\/+/g;function C(L,G){return typeof L=="object"&&L!==null&&L.key!=null?D(""+L.key):G.toString(36)}function nt(L,G,de,Re,Ae){var De=typeof L;(De==="undefined"||De==="boolean")&&(L=null);var Me=!1;if(L===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(L.$$typeof){case r:case e:Me=!0}}if(Me)return Me=L,Ae=Ae(Me),L=Re===""?"."+C(Me,0):Re,ie(Ae)?(de="",L!=null&&(de=L.replace(V,"$&/")+"/"),nt(Ae,G,de,"",function(yt){return yt})):Ae!=null&&(k(Ae)&&(Ae=R(Ae,de+(!Ae.key||Me&&Me.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+L)),G.push(Ae)),1;if(Me=0,Re=Re===""?".":Re+":",ie(L))for(var Fe=0;Fe<L.length;Fe++){De=L[Fe];var $e=Re+C(De,Fe);Me+=nt(De,G,de,$e,Ae)}else if($e=A(L),typeof $e=="function")for(L=$e.call(L),Fe=0;!(De=L.next()).done;)De=De.value,$e=Re+C(De,Fe++),Me+=nt(De,G,de,$e,Ae);else if(De==="object")throw G=String(L),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return Me}function xt(L,G,de){if(L==null)return L;var Re=[],Ae=0;return nt(L,Re,"","",function(De){return G.call(de,De,Ae++)}),Re}function Dt(L){if(L._status===-1){var G=L._result;G=G(),G.then(function(de){(L._status===0||L._status===-1)&&(L._status=1,L._result=de)},function(de){(L._status===0||L._status===-1)&&(L._status=2,L._result=de)}),L._status===-1&&(L._status=0,L._result=G)}if(L._status===1)return L._result.default;throw L._result}var ze={current:null},re={transition:null},pe={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:re,ReactCurrentOwner:Te};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:xt,forEach:function(L,G,de){xt(L,function(){G.apply(this,arguments)},de)},count:function(L){var G=0;return xt(L,function(){G++}),G},toArray:function(L){return xt(L,function(G){return G})||[]},only:function(L){if(!k(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Ce.Component=j,Ce.Fragment=t,Ce.Profiler=o,Ce.PureComponent=X,Ce.StrictMode=s,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,Ce.act=oe,Ce.cloneElement=function(L,G,de){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var Re=F({},L.props),Ae=L.key,De=L.ref,Me=L._owner;if(G!=null){if(G.ref!==void 0&&(De=G.ref,Me=Te.current),G.key!==void 0&&(Ae=""+G.key),L.type&&L.type.defaultProps)var Fe=L.type.defaultProps;for($e in G)Se.call(G,$e)&&!N.hasOwnProperty($e)&&(Re[$e]=G[$e]===void 0&&Fe!==void 0?Fe[$e]:G[$e])}var $e=arguments.length-2;if($e===1)Re.children=de;else if(1<$e){Fe=Array($e);for(var yt=0;yt<$e;yt++)Fe[yt]=arguments[yt+2];Re.children=Fe}return{$$typeof:r,type:L.type,key:Ae,ref:De,props:Re,_owner:Me}},Ce.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},Ce.createElement=I,Ce.createFactory=function(L){var G=I.bind(null,L);return G.type=L,G},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(L){return{$$typeof:f,render:L}},Ce.isValidElement=k,Ce.lazy=function(L){return{$$typeof:E,_payload:{_status:-1,_result:L},_init:Dt}},Ce.memo=function(L,G){return{$$typeof:y,type:L,compare:G===void 0?null:G}},Ce.startTransition=function(L){var G=re.transition;re.transition={};try{L()}finally{re.transition=G}},Ce.unstable_act=oe,Ce.useCallback=function(L,G){return ze.current.useCallback(L,G)},Ce.useContext=function(L){return ze.current.useContext(L)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(L){return ze.current.useDeferredValue(L)},Ce.useEffect=function(L,G){return ze.current.useEffect(L,G)},Ce.useId=function(){return ze.current.useId()},Ce.useImperativeHandle=function(L,G,de){return ze.current.useImperativeHandle(L,G,de)},Ce.useInsertionEffect=function(L,G){return ze.current.useInsertionEffect(L,G)},Ce.useLayoutEffect=function(L,G){return ze.current.useLayoutEffect(L,G)},Ce.useMemo=function(L,G){return ze.current.useMemo(L,G)},Ce.useReducer=function(L,G,de){return ze.current.useReducer(L,G,de)},Ce.useRef=function(L){return ze.current.useRef(L)},Ce.useState=function(L){return ze.current.useState(L)},Ce.useSyncExternalStore=function(L,G,de){return ze.current.useSyncExternalStore(L,G,de)},Ce.useTransition=function(){return ze.current.useTransition()},Ce.version="18.3.1",Ce}var ag;function sf(){return ag||(ag=1,fd.exports=Gw()),fd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Qw(){if(lg)return Na;lg=1;var r=sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,p,y){var E,T={},A=null,O=null;y!==void 0&&(A=""+y),p.key!==void 0&&(A=""+p.key),p.ref!==void 0&&(O=p.ref);for(E in p)s.call(p,E)&&!l.hasOwnProperty(E)&&(T[E]=p[E]);if(f&&f.defaultProps)for(E in p=f.defaultProps,p)T[E]===void 0&&(T[E]=p[E]);return{$$typeof:e,type:f,key:A,ref:O,props:T,_owner:o.current}}return Na.Fragment=t,Na.jsx=h,Na.jsxs=h,Na}var ug;function Yw(){return ug||(ug=1,dd.exports=Qw()),dd.exports}var q=Yw(),H=sf(),Pu={},pd={exports:{}},Jt={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Xw(){return cg||(cg=1,function(r){function e(re,pe){var oe=re.length;re.push(pe);e:for(;0<oe;){var L=oe-1>>>1,G=re[L];if(0<o(G,pe))re[L]=pe,re[oe]=G,oe=L;else break e}}function t(re){return re.length===0?null:re[0]}function s(re){if(re.length===0)return null;var pe=re[0],oe=re.pop();if(oe!==pe){re[0]=oe;e:for(var L=0,G=re.length,de=G>>>1;L<de;){var Re=2*(L+1)-1,Ae=re[Re],De=Re+1,Me=re[De];if(0>o(Ae,oe))De<G&&0>o(Me,Ae)?(re[L]=Me,re[De]=oe,L=De):(re[L]=Ae,re[Re]=oe,L=Re);else if(De<G&&0>o(Me,oe))re[L]=Me,re[De]=oe,L=De;else break e}}return pe}function o(re,pe){var oe=re.sortIndex-pe.sortIndex;return oe!==0?oe:re.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var p=[],y=[],E=1,T=null,A=3,O=!1,F=!1,$=!1,j=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(re){for(var pe=t(y);pe!==null;){if(pe.callback===null)s(y);else if(pe.startTime<=re)s(y),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(y)}}function ie(re){if($=!1,Q(re),!F)if(t(p)!==null)F=!0,Dt(Se);else{var pe=t(y);pe!==null&&ze(ie,pe.startTime-re)}}function Se(re,pe){F=!1,$&&($=!1,W(I),I=-1),O=!0;var oe=A;try{for(Q(pe),T=t(p);T!==null&&(!(T.expirationTime>pe)||re&&!D());){var L=T.callback;if(typeof L=="function"){T.callback=null,A=T.priorityLevel;var G=L(T.expirationTime<=pe);pe=r.unstable_now(),typeof G=="function"?T.callback=G:T===t(p)&&s(p),Q(pe)}else s(p);T=t(p)}if(T!==null)var de=!0;else{var Re=t(y);Re!==null&&ze(ie,Re.startTime-pe),de=!1}return de}finally{T=null,A=oe,O=!1}}var Te=!1,N=null,I=-1,R=5,k=-1;function D(){return!(r.unstable_now()-k<R)}function V(){if(N!==null){var re=r.unstable_now();k=re;var pe=!0;try{pe=N(!0,re)}finally{pe?C():(Te=!1,N=null)}}else Te=!1}var C;if(typeof X=="function")C=function(){X(V)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,xt=nt.port2;nt.port1.onmessage=V,C=function(){xt.postMessage(null)}}else C=function(){j(V,0)};function Dt(re){N=re,Te||(Te=!0,C())}function ze(re,pe){I=j(function(){re(r.unstable_now())},pe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(re){re.callback=null},r.unstable_continueExecution=function(){F||O||(F=!0,Dt(Se))},r.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<re?Math.floor(1e3/re):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_getFirstCallbackNode=function(){return t(p)},r.unstable_next=function(re){switch(A){case 1:case 2:case 3:var pe=3;break;default:pe=A}var oe=A;A=pe;try{return re()}finally{A=oe}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(re,pe){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var oe=A;A=re;try{return pe()}finally{A=oe}},r.unstable_scheduleCallback=function(re,pe,oe){var L=r.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?L+oe:L):oe=L,re){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=oe+G,re={id:E++,callback:pe,priorityLevel:re,startTime:oe,expirationTime:G,sortIndex:-1},oe>L?(re.sortIndex=oe,e(y,re),t(p)===null&&re===t(y)&&($?(W(I),I=-1):$=!0,ze(ie,oe-L))):(re.sortIndex=G,e(p,re),F||O||(F=!0,Dt(Se))),re},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(re){var pe=A;return function(){var oe=A;A=pe;try{return re.apply(this,arguments)}finally{A=oe}}}}(gd)),gd}var hg;function Jw(){return hg||(hg=1,md.exports=Xw()),md.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function Zw(){if(dg)return Jt;dg=1;var r=sf(),e=Jw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function A(n){return p.call(T,n)?!0:p.call(E,n)?!1:y.test(n)?T[n]=!0:(E[n]=!0,!1)}function O(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function F(n,i,a,c){if(i===null||typeof i>"u"||O(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function $(n,i,a,c,d,g,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=v}var j={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){j[n]=new $(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];j[i]=new $(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){j[n]=new $(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){j[n]=new $(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){j[n]=new $(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){j[n]=new $(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){j[n]=new $(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){j[n]=new $(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){j[n]=new $(n,5,!1,n.toLowerCase(),null,!1,!1)});var W=/[\-:]([a-z])/g;function X(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(W,X);j[i]=new $(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(W,X);j[i]=new $(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(W,X);j[i]=new $(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){j[n]=new $(n,1,!1,n.toLowerCase(),null,!1,!1)}),j.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){j[n]=new $(n,1,!1,n.toLowerCase(),null,!0,!0)});function Q(n,i,a,c){var d=j.hasOwnProperty(i)?j[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(F(i,a,d,c)&&(a=null),c||d===null?A(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ie=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),Te=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),ze=Symbol.for("react.offscreen"),re=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=re&&n[re]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,L;function G(n){if(L===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var de=!1;function Re(n,i){if(!n||de)return"";de=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(z){var c=z}Reflect.construct(n,[],i)}else{try{i.call()}catch(z){c=z}n.call(i.prototype)}else{try{throw Error()}catch(z){c=z}n()}}catch(z){if(z&&c&&typeof z.stack=="string"){for(var d=z.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,S=g.length-1;1<=v&&0<=S&&d[v]!==g[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==g[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==g[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{de=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?G(n):""}function Ae(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function De(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case Te:return"Portal";case R:return"Profiler";case I:return"StrictMode";case C:return"Suspense";case nt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xt:return i=n.displayName||null,i!==null?i:De(n.type)||"Memo";case Dt:i=n._payload,n=n._init;try{return De(n(i))}catch{}}return null}function Me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function yt(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function cr(n){n._valueTracker||(n._valueTracker=yt(n))}function vs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function zr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ni(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Es(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Fe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function bo(n,i){i=i.checked,i!=null&&Q(n,"checked",i,!1)}function Mo(n,i){bo(n,i);var a=Fe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ws(n,i.type,a):i.hasOwnProperty("defaultValue")&&ws(n,i.type,Fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function fl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ws(n,i,a){(i!=="number"||zr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var hr=Array.isArray;function dr(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Fe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Fo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ts(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(hr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Fe(a)}}function Is(n,i){var a=Fe(i.value),c=Fe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Uo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ut(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ct(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ut(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fr,jo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fr=fr||document.createElement("div"),fr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Br(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Di=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(n){Di.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xi[i]=xi[n]})});function zo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||xi.hasOwnProperty(n)&&xi[n]?(""+i).trim():i+"px"}function Bo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=zo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var $o=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qo(n,i){if(i){if($o[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ho(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oi=null;function Ss(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Rs=null,cn=null,Bn=null;function As(n){if(n=ma(n)){if(typeof Rs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=$l(i),Rs(n.stateNode,n.type,i))}}function $n(n){cn?Bn?Bn.push(n):Bn=[n]:cn=n}function Wo(){if(cn){var n=cn,i=Bn;if(Bn=cn=null,As(n),i)for(n=0;n<i.length;n++)As(i[n])}}function Li(n,i){return n(i)}function Ko(){}var pr=!1;function Go(n,i,a){if(pr)return n(i,a);pr=!0;try{return Li(n,i,a)}finally{pr=!1,(cn!==null||Bn!==null)&&(Ko(),Wo())}}function rt(n,i){var a=n.stateNode;if(a===null)return null;var c=$l(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Cs=!1;if(f)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Cs=!1}function Vi(n,i,a,c,d,g,v,S,P){var z=Array.prototype.slice.call(arguments,3);try{i.apply(a,z)}catch(J){this.onError(J)}}var bi=!1,Ps=null,In=!1,Qo=null,jc={onError:function(n){bi=!0,Ps=n}};function ks(n,i,a,c,d,g,v,S,P){bi=!1,Ps=null,Vi.apply(jc,arguments)}function pl(n,i,a,c,d,g,v,S,P){if(ks.apply(this,arguments),bi){if(bi){var z=Ps;bi=!1,Ps=null}else throw Error(t(198));In||(In=!0,Qo=z)}}function Sn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Mi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Rn(n){if(Sn(n)!==n)throw Error(t(188))}function ml(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return Rn(d),n;if(g===c)return Rn(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=g;break}if(S===c){v=!0,c=d,a=g;break}S=S.sibling}if(!v){for(S=g.child;S;){if(S===a){v=!0,a=g,c=d;break}if(S===c){v=!0,c=g,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Yo(n){return n=ml(n),n!==null?Ns(n):null}function Ns(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ns(n);if(i!==null)return i;n=n.sibling}return null}var xs=e.unstable_scheduleCallback,Xo=e.unstable_cancelCallback,gl=e.unstable_shouldYield,zc=e.unstable_requestPaint,qe=e.unstable_now,yl=e.unstable_getCurrentPriorityLevel,Fi=e.unstable_ImmediatePriority,$r=e.unstable_UserBlockingPriority,hn=e.unstable_NormalPriority,Jo=e.unstable_LowPriority,_l=e.unstable_IdlePriority,Ui=null,tn=null;function vl(n){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Ui,n,void 0,(n.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:wl,Zo=Math.log,El=Math.LN2;function wl(n){return n>>>=0,n===0?32:31-(Zo(n)/El|0)|0}var Ds=64,Os=4194304;function qr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ji(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=qr(S):(g&=v,g!==0&&(c=qr(g)))}else v=a&~d,v!==0?c=qr(v):g!==0&&(c=qr(g));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-zt(i),d=1<<a,c|=n[a],i&=~d;return c}function Bc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var v=31-zt(g),S=1<<v,P=d[v];P===-1?(!(S&a)||S&c)&&(d[v]=Bc(S,i)):P<=i&&(n.expiredLanes|=S),g&=~S}}function nn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zi(){var n=Ds;return Ds<<=1,!(Ds&4194240)&&(Ds=64),n}function Hr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Wr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-zt(i),n[i]=a}function Be(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-zt(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Kr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-zt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Ne=0;function Gr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Tl,Ls,Il,Sl,Rl,ea=!1,qn=[],It=null,An=null,Cn=null,Qr=new Map,dn=new Map,Hn=[],$c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(n,i){switch(n){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Qr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dn.delete(i.pointerId)}}function Ht(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=ma(i),i!==null&&Ls(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function qc(n,i,a,c,d){switch(i){case"focusin":return It=Ht(It,n,i,a,c,d),!0;case"dragenter":return An=Ht(An,n,i,a,c,d),!0;case"mouseover":return Cn=Ht(Cn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return Qr.set(g,Ht(Qr.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,dn.set(g,Ht(dn.get(g)||null,n,i,a,c,d)),!0}return!1}function Cl(n){var i=Wi(n.target);if(i!==null){var a=Sn(i);if(a!==null){if(i=a.tag,i===13){if(i=Mi(a),i!==null){n.blockedOn=i,Rl(n.priority,function(){Il(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Vs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Oi=c,a.target.dispatchEvent(c),Oi=null}else return i=ma(a),i!==null&&Ls(i),n.blockedOn=a,!1;i.shift()}return!0}function Bi(n,i,a){gr(n)&&a.delete(i)}function Pl(){ea=!1,It!==null&&gr(It)&&(It=null),An!==null&&gr(An)&&(An=null),Cn!==null&&gr(Cn)&&(Cn=null),Qr.forEach(Bi),dn.forEach(Bi)}function Pn(n,i){n.blockedOn===i&&(n.blockedOn=null,ea||(ea=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pl)))}function kn(n){function i(d){return Pn(d,n)}if(0<qn.length){Pn(qn[0],n);for(var a=1;a<qn.length;a++){var c=qn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(It!==null&&Pn(It,n),An!==null&&Pn(An,n),Cn!==null&&Pn(Cn,n),Qr.forEach(i),dn.forEach(i),a=0;a<Hn.length;a++)c=Hn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hn.length&&(a=Hn[0],a.blockedOn===null);)Cl(a),a.blockedOn===null&&Hn.shift()}var yr=ie.ReactCurrentBatchConfig,Yr=!0;function Ge(n,i,a,c){var d=Ne,g=yr.transition;yr.transition=null;try{Ne=1,ta(n,i,a,c)}finally{Ne=d,yr.transition=g}}function Hc(n,i,a,c){var d=Ne,g=yr.transition;yr.transition=null;try{Ne=4,ta(n,i,a,c)}finally{Ne=d,yr.transition=g}}function ta(n,i,a,c){if(Yr){var d=Vs(n,i,a,c);if(d===null)nh(n,i,c,$i,a),Al(n,c);else if(qc(d,n,i,a,c))c.stopPropagation();else if(Al(n,c),i&4&&-1<$c.indexOf(n)){for(;d!==null;){var g=ma(d);if(g!==null&&Tl(g),g=Vs(n,i,a,c),g===null&&nh(n,i,c,$i,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else nh(n,i,c,null,a)}}var $i=null;function Vs(n,i,a,c){if($i=null,n=Ss(c),n=Wi(n),n!==null)if(i=Sn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Mi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return $i=n,null}function na(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yl()){case Fi:return 1;case $r:return 4;case hn:case Jo:return 16;case _l:return 536870912;default:return 16}default:return 16}}var rn=null,bs=null,Wt=null;function ra(){if(Wt)return Wt;var n,i=bs,a=i.length,c,d="value"in rn?rn.value:rn.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[g-c];c++);return Wt=d.slice(n,1<c?1-c:void 0)}function Ms(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Wn(){return!0}function ia(){return!1}function St(n){function i(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Wn:ia,this.isPropagationStopped=ia,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),i}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=St(Nn),Kn=oe({},Nn,{view:0,detail:0}),Wc=St(Kn),Us,_r,Xr,qi=oe({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xr&&(Xr&&n.type==="mousemove"?(Us=n.screenX-Xr.screenX,_r=n.screenY-Xr.screenY):_r=Us=0,Xr=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:_r}}),js=St(qi),sa=oe({},qi,{dataTransfer:0}),kl=St(sa),zs=oe({},Kn,{relatedTarget:0}),Bs=St(zs),Nl=oe({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),vr=St(Nl),xl=oe({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Dl=St(xl),Ol=oe({},Nn,{data:0}),oa=St(Ol),$s={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ll={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vl(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ll[n])?!!i[n]:!1}function Gn(){return Vl}var u=oe({},Kn,{key:function(n){if(n.key){var i=$s[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ms(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(n){return n.type==="keypress"?Ms(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ms(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),m=St(u),_=oe({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=St(_),b=oe({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn}),B=St(b),ne=oe({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=St(ne),ht=oe({},qi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=St(ht),_t=[9,13,27,32],ot=f&&"CompositionEvent"in window,fn=null;f&&"documentMode"in document&&(fn=document.documentMode);var sn=f&&"TextEvent"in window&&!fn,Hi=f&&(!ot||fn&&8<fn&&11>=fn),qs=" ",ep=!1;function tp(n,i){switch(n){case"keyup":return _t.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function WE(n,i){switch(n){case"compositionend":return np(i);case"keypress":return i.which!==32?null:(ep=!0,qs);case"textInput":return n=i.data,n===qs&&ep?null:n;default:return null}}function KE(n,i){if(Hs)return n==="compositionend"||!ot&&tp(n,i)?(n=ra(),Wt=bs=rn=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hi&&i.locale!=="ko"?null:i.data;default:return null}}var GE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!GE[n.type]:i==="textarea"}function ip(n,i,a,c){$n(c),i=jl(i,"onChange"),0<i.length&&(a=new Fs("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var aa=null,la=null;function QE(n){Tp(n,0)}function bl(n){var i=Ys(n);if(vs(i))return n}function YE(n,i){if(n==="change")return i}var sp=!1;if(f){var Kc;if(f){var Gc="oninput"in document;if(!Gc){var op=document.createElement("div");op.setAttribute("oninput","return;"),Gc=typeof op.oninput=="function"}Kc=Gc}else Kc=!1;sp=Kc&&(!document.documentMode||9<document.documentMode)}function ap(){aa&&(aa.detachEvent("onpropertychange",lp),la=aa=null)}function lp(n){if(n.propertyName==="value"&&bl(la)){var i=[];ip(i,la,n,Ss(n)),Go(QE,i)}}function XE(n,i,a){n==="focusin"?(ap(),aa=i,la=a,aa.attachEvent("onpropertychange",lp)):n==="focusout"&&ap()}function JE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return bl(la)}function ZE(n,i){if(n==="click")return bl(i)}function ew(n,i){if(n==="input"||n==="change")return bl(i)}function tw(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xn=typeof Object.is=="function"?Object.is:tw;function ua(n,i){if(xn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(i,d)||!xn(n[d],i[d]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cp(n,i){var a=up(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=up(a)}}function hp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?hp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function dp(){for(var n=window,i=zr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=zr(n.document)}return i}function Qc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function nw(n){var i=dp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&hp(a.ownerDocument.documentElement,a)){if(c!==null&&Qc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=cp(a,g);var v=cp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var rw=f&&"documentMode"in document&&11>=document.documentMode,Ws=null,Yc=null,ca=null,Xc=!1;function fp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Ws==null||Ws!==zr(c)||(c=Ws,"selectionStart"in c&&Qc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ca&&ua(ca,c)||(ca=c,c=jl(Yc,"onSelect"),0<c.length&&(i=new Fs("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ws)))}function Ml(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ks={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},Jc={},pp={};f&&(pp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function Fl(n){if(Jc[n])return Jc[n];if(!Ks[n])return n;var i=Ks[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in pp)return Jc[n]=i[a];return n}var mp=Fl("animationend"),gp=Fl("animationiteration"),yp=Fl("animationstart"),_p=Fl("transitionend"),vp=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(n,i){vp.set(n,i),l(i,[n])}for(var Zc=0;Zc<Ep.length;Zc++){var eh=Ep[Zc],iw=eh.toLowerCase(),sw=eh[0].toUpperCase()+eh.slice(1);Jr(iw,"on"+sw)}Jr(mp,"onAnimationEnd"),Jr(gp,"onAnimationIteration"),Jr(yp,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(_p,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ha="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ow=new Set("cancel close invalid load scroll toggle".split(" ").concat(ha));function wp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,pl(c,i,void 0,n),n.currentTarget=null}function Tp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,z=S.currentTarget;if(S=S.listener,P!==g&&d.isPropagationStopped())break e;wp(d,S,z),g=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,z=S.currentTarget,S=S.listener,P!==g&&d.isPropagationStopped())break e;wp(d,S,z),g=P}}}if(In)throw n=Qo,In=!1,Qo=null,n}function We(n,i){var a=i[lh];a===void 0&&(a=i[lh]=new Set);var c=n+"__bubble";a.has(c)||(Ip(i,n,2,!1),a.add(c))}function th(n,i,a){var c=0;i&&(c|=4),Ip(a,n,c,i)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function da(n){if(!n[Ul]){n[Ul]=!0,s.forEach(function(a){a!=="selectionchange"&&(ow.has(a)||th(a,!1,n),th(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ul]||(i[Ul]=!0,th("selectionchange",!1,i))}}function Ip(n,i,a,c){switch(na(i)){case 1:var d=Ge;break;case 4:d=Hc;break;default:d=ta}a=d.bind(null,i,a,n),d=void 0,!Cs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function nh(n,i,a,c,d){var g=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=Wi(S),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}S=S.parentNode}}c=c.return}Go(function(){var z=g,J=Ss(a),ee=[];e:{var Y=vp.get(n);if(Y!==void 0){var se=Fs,ue=n;switch(n){case"keypress":if(Ms(a)===0)break e;case"keydown":case"keyup":se=m;break;case"focusin":ue="focus",se=Bs;break;case"focusout":ue="blur",se=Bs;break;case"beforeblur":case"afterblur":se=Bs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=B;break;case mp:case gp:case yp:se=vr;break;case _p:se=je;break;case"scroll":se=Wc;break;case"wheel":se=Oe;break;case"copy":case"cut":case"paste":se=Dl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=w}var ce=(i&4)!==0,it=!ce&&n==="scroll",M=ce?Y!==null?Y+"Capture":null:Y;ce=[];for(var x=z,U;x!==null;){U=x;var te=U.stateNode;if(U.tag===5&&te!==null&&(U=te,M!==null&&(te=rt(x,M),te!=null&&ce.push(fa(x,te,U)))),it)break;x=x.return}0<ce.length&&(Y=new se(Y,ue,null,a,J),ee.push({event:Y,listeners:ce}))}}if(!(i&7)){e:{if(Y=n==="mouseover"||n==="pointerover",se=n==="mouseout"||n==="pointerout",Y&&a!==Oi&&(ue=a.relatedTarget||a.fromElement)&&(Wi(ue)||ue[Er]))break e;if((se||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,se?(ue=a.relatedTarget||a.toElement,se=z,ue=ue?Wi(ue):null,ue!==null&&(it=Sn(ue),ue!==it||ue.tag!==5&&ue.tag!==6)&&(ue=null)):(se=null,ue=z),se!==ue)){if(ce=js,te="onMouseLeave",M="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ce=w,te="onPointerLeave",M="onPointerEnter",x="pointer"),it=se==null?Y:Ys(se),U=ue==null?Y:Ys(ue),Y=new ce(te,x+"leave",se,a,J),Y.target=it,Y.relatedTarget=U,te=null,Wi(J)===z&&(ce=new ce(M,x+"enter",ue,a,J),ce.target=U,ce.relatedTarget=it,te=ce),it=te,se&&ue)t:{for(ce=se,M=ue,x=0,U=ce;U;U=Gs(U))x++;for(U=0,te=M;te;te=Gs(te))U++;for(;0<x-U;)ce=Gs(ce),x--;for(;0<U-x;)M=Gs(M),U--;for(;x--;){if(ce===M||M!==null&&ce===M.alternate)break t;ce=Gs(ce),M=Gs(M)}ce=null}else ce=null;se!==null&&Sp(ee,Y,se,ce,!1),ue!==null&&it!==null&&Sp(ee,it,ue,ce,!0)}}e:{if(Y=z?Ys(z):window,se=Y.nodeName&&Y.nodeName.toLowerCase(),se==="select"||se==="input"&&Y.type==="file")var he=YE;else if(rp(Y))if(sp)he=ew;else{he=JE;var me=XE}else(se=Y.nodeName)&&se.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(he=ZE);if(he&&(he=he(n,z))){ip(ee,he,a,J);break e}me&&me(n,Y,z),n==="focusout"&&(me=Y._wrapperState)&&me.controlled&&Y.type==="number"&&ws(Y,"number",Y.value)}switch(me=z?Ys(z):window,n){case"focusin":(rp(me)||me.contentEditable==="true")&&(Ws=me,Yc=z,ca=null);break;case"focusout":ca=Yc=Ws=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,fp(ee,a,J);break;case"selectionchange":if(rw)break;case"keydown":case"keyup":fp(ee,a,J)}var ge;if(ot)e:{switch(n){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Hs?tp(n,a)&&(ve="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Hi&&a.locale!=="ko"&&(Hs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Hs&&(ge=ra()):(rn=J,bs="value"in rn?rn.value:rn.textContent,Hs=!0)),me=jl(z,ve),0<me.length&&(ve=new oa(ve,n,null,a,J),ee.push({event:ve,listeners:me}),ge?ve.data=ge:(ge=np(a),ge!==null&&(ve.data=ge)))),(ge=sn?WE(n,a):KE(n,a))&&(z=jl(z,"onBeforeInput"),0<z.length&&(J=new oa("onBeforeInput","beforeinput",null,a,J),ee.push({event:J,listeners:z}),J.data=ge))}Tp(ee,i)})}function fa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function jl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=rt(n,a),g!=null&&c.unshift(fa(n,g,d)),g=rt(n,i),g!=null&&c.push(fa(n,g,d))),n=n.return}return c}function Gs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sp(n,i,a,c,d){for(var g=i._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,z=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&z!==null&&(S=z,d?(P=rt(a,g),P!=null&&v.unshift(fa(a,P,S))):d||(P=rt(a,g),P!=null&&v.push(fa(a,P,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var aw=/\r\n?/g,lw=/\u0000|\uFFFD/g;function Rp(n){return(typeof n=="string"?n:""+n).replace(aw,`
`).replace(lw,"")}function zl(n,i,a){if(i=Rp(i),Rp(n)!==i&&a)throw Error(t(425))}function Bl(){}var rh=null,ih=null;function sh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oh=typeof setTimeout=="function"?setTimeout:void 0,uw=typeof clearTimeout=="function"?clearTimeout:void 0,Ap=typeof Promise=="function"?Promise:void 0,cw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ap<"u"?function(n){return Ap.resolve(null).then(n).catch(hw)}:oh;function hw(n){setTimeout(function(){throw n})}function ah(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(i)}function Zr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Cp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Qs,pa="__reactProps$"+Qs,Er="__reactContainer$"+Qs,lh="__reactEvents$"+Qs,dw="__reactListeners$"+Qs,fw="__reactHandles$"+Qs;function Wi(n){var i=n[Qn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Er]||a[Qn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Cp(n);n!==null;){if(a=n[Qn])return a;n=Cp(n)}return i}n=a,a=n.parentNode}return null}function ma(n){return n=n[Qn]||n[Er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function $l(n){return n[pa]||null}var uh=[],Xs=-1;function ei(n){return{current:n}}function Ke(n){0>Xs||(n.current=uh[Xs],uh[Xs]=null,Xs--)}function He(n,i){Xs++,uh[Xs]=n.current,n.current=i}var ti={},Ot=ei(ti),Kt=ei(!1),Ki=ti;function Js(n,i){var a=n.type.contextTypes;if(!a)return ti;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function ql(){Ke(Kt),Ke(Ot)}function Pp(n,i,a){if(Ot.current!==ti)throw Error(t(168));He(Ot,i),He(Kt,a)}function kp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Me(n)||"Unknown",d));return oe({},a,c)}function Hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ti,Ki=Ot.current,He(Ot,n),He(Kt,Kt.current),!0}function Np(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=kp(n,i,Ki),c.__reactInternalMemoizedMergedChildContext=n,Ke(Kt),Ke(Ot),He(Ot,n)):Ke(Kt),He(Kt,a)}var wr=null,Wl=!1,ch=!1;function xp(n){wr===null?wr=[n]:wr.push(n)}function pw(n){Wl=!0,xp(n)}function ni(){if(!ch&&wr!==null){ch=!0;var n=0,i=Ne;try{var a=wr;for(Ne=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}wr=null,Wl=!1}catch(d){throw wr!==null&&(wr=wr.slice(n+1)),xs(Fi,ni),d}finally{Ne=i,ch=!1}}return null}var Zs=[],eo=0,Kl=null,Gl=0,pn=[],mn=0,Gi=null,Tr=1,Ir="";function Qi(n,i){Zs[eo++]=Gl,Zs[eo++]=Kl,Kl=n,Gl=i}function Dp(n,i,a){pn[mn++]=Tr,pn[mn++]=Ir,pn[mn++]=Gi,Gi=n;var c=Tr;n=Ir;var d=32-zt(c)-1;c&=~(1<<d),a+=1;var g=32-zt(i)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Tr=1<<32-zt(i)+d|a<<d|c,Ir=g+n}else Tr=1<<g|a<<d|c,Ir=n}function hh(n){n.return!==null&&(Qi(n,1),Dp(n,1,0))}function dh(n){for(;n===Kl;)Kl=Zs[--eo],Zs[eo]=null,Gl=Zs[--eo],Zs[eo]=null;for(;n===Gi;)Gi=pn[--mn],pn[mn]=null,Ir=pn[--mn],pn[mn]=null,Tr=pn[--mn],pn[mn]=null}var on=null,an=null,Qe=!1,Dn=null;function Op(n,i){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Lp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,on=n,an=Zr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,on=n,an=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Gi!==null?{id:Tr,overflow:Ir}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,on=n,an=null,!0):!1;default:return!1}}function fh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ph(n){if(Qe){var i=an;if(i){var a=i;if(!Lp(n,i)){if(fh(n))throw Error(t(418));i=Zr(a.nextSibling);var c=on;i&&Lp(n,i)?Op(c,a):(n.flags=n.flags&-4097|2,Qe=!1,on=n)}}else{if(fh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qe=!1,on=n}}}function Vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;on=n}function Ql(n){if(n!==on)return!1;if(!Qe)return Vp(n),Qe=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!sh(n.type,n.memoizedProps)),i&&(i=an)){if(fh(n))throw bp(),Error(t(418));for(;i;)Op(n,i),i=Zr(i.nextSibling)}if(Vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){an=Zr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}an=null}}else an=on?Zr(n.stateNode.nextSibling):null;return!0}function bp(){for(var n=an;n;)n=Zr(n.nextSibling)}function to(){an=on=null,Qe=!1}function mh(n){Dn===null?Dn=[n]:Dn.push(n)}var mw=ie.ReactCurrentBatchConfig;function ga(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(v){var S=d.refs;v===null?delete S[g]:S[g]=v},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Yl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Mp(n){var i=n._init;return i(n._payload)}function Fp(n){function i(M,x){if(n){var U=M.deletions;U===null?(M.deletions=[x],M.flags|=16):U.push(x)}}function a(M,x){if(!n)return null;for(;x!==null;)i(M,x),x=x.sibling;return null}function c(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function d(M,x){return M=ci(M,x),M.index=0,M.sibling=null,M}function g(M,x,U){return M.index=U,n?(U=M.alternate,U!==null?(U=U.index,U<x?(M.flags|=2,x):U):(M.flags|=2,x)):(M.flags|=1048576,x)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function S(M,x,U,te){return x===null||x.tag!==6?(x=od(U,M.mode,te),x.return=M,x):(x=d(x,U),x.return=M,x)}function P(M,x,U,te){var he=U.type;return he===N?J(M,x,U.props.children,te,U.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Mp(he)===x.type)?(te=d(x,U.props),te.ref=ga(M,x,U),te.return=M,te):(te=Eu(U.type,U.key,U.props,null,M.mode,te),te.ref=ga(M,x,U),te.return=M,te)}function z(M,x,U,te){return x===null||x.tag!==4||x.stateNode.containerInfo!==U.containerInfo||x.stateNode.implementation!==U.implementation?(x=ad(U,M.mode,te),x.return=M,x):(x=d(x,U.children||[]),x.return=M,x)}function J(M,x,U,te,he){return x===null||x.tag!==7?(x=rs(U,M.mode,te,he),x.return=M,x):(x=d(x,U),x.return=M,x)}function ee(M,x,U){if(typeof x=="string"&&x!==""||typeof x=="number")return x=od(""+x,M.mode,U),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Se:return U=Eu(x.type,x.key,x.props,null,M.mode,U),U.ref=ga(M,null,x),U.return=M,U;case Te:return x=ad(x,M.mode,U),x.return=M,x;case Dt:var te=x._init;return ee(M,te(x._payload),U)}if(hr(x)||pe(x))return x=rs(x,M.mode,U,null),x.return=M,x;Yl(M,x)}return null}function Y(M,x,U,te){var he=x!==null?x.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return he!==null?null:S(M,x,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Se:return U.key===he?P(M,x,U,te):null;case Te:return U.key===he?z(M,x,U,te):null;case Dt:return he=U._init,Y(M,x,he(U._payload),te)}if(hr(U)||pe(U))return he!==null?null:J(M,x,U,te,null);Yl(M,U)}return null}function se(M,x,U,te,he){if(typeof te=="string"&&te!==""||typeof te=="number")return M=M.get(U)||null,S(x,M,""+te,he);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Se:return M=M.get(te.key===null?U:te.key)||null,P(x,M,te,he);case Te:return M=M.get(te.key===null?U:te.key)||null,z(x,M,te,he);case Dt:var me=te._init;return se(M,x,U,me(te._payload),he)}if(hr(te)||pe(te))return M=M.get(U)||null,J(x,M,te,he,null);Yl(x,te)}return null}function ue(M,x,U,te){for(var he=null,me=null,ge=x,ve=x=0,wt=null;ge!==null&&ve<U.length;ve++){ge.index>ve?(wt=ge,ge=null):wt=ge.sibling;var be=Y(M,ge,U[ve],te);if(be===null){ge===null&&(ge=wt);break}n&&ge&&be.alternate===null&&i(M,ge),x=g(be,x,ve),me===null?he=be:me.sibling=be,me=be,ge=wt}if(ve===U.length)return a(M,ge),Qe&&Qi(M,ve),he;if(ge===null){for(;ve<U.length;ve++)ge=ee(M,U[ve],te),ge!==null&&(x=g(ge,x,ve),me===null?he=ge:me.sibling=ge,me=ge);return Qe&&Qi(M,ve),he}for(ge=c(M,ge);ve<U.length;ve++)wt=se(ge,M,ve,U[ve],te),wt!==null&&(n&&wt.alternate!==null&&ge.delete(wt.key===null?ve:wt.key),x=g(wt,x,ve),me===null?he=wt:me.sibling=wt,me=wt);return n&&ge.forEach(function(hi){return i(M,hi)}),Qe&&Qi(M,ve),he}function ce(M,x,U,te){var he=pe(U);if(typeof he!="function")throw Error(t(150));if(U=he.call(U),U==null)throw Error(t(151));for(var me=he=null,ge=x,ve=x=0,wt=null,be=U.next();ge!==null&&!be.done;ve++,be=U.next()){ge.index>ve?(wt=ge,ge=null):wt=ge.sibling;var hi=Y(M,ge,be.value,te);if(hi===null){ge===null&&(ge=wt);break}n&&ge&&hi.alternate===null&&i(M,ge),x=g(hi,x,ve),me===null?he=hi:me.sibling=hi,me=hi,ge=wt}if(be.done)return a(M,ge),Qe&&Qi(M,ve),he;if(ge===null){for(;!be.done;ve++,be=U.next())be=ee(M,be.value,te),be!==null&&(x=g(be,x,ve),me===null?he=be:me.sibling=be,me=be);return Qe&&Qi(M,ve),he}for(ge=c(M,ge);!be.done;ve++,be=U.next())be=se(ge,M,ve,be.value,te),be!==null&&(n&&be.alternate!==null&&ge.delete(be.key===null?ve:be.key),x=g(be,x,ve),me===null?he=be:me.sibling=be,me=be);return n&&ge.forEach(function(Kw){return i(M,Kw)}),Qe&&Qi(M,ve),he}function it(M,x,U,te){if(typeof U=="object"&&U!==null&&U.type===N&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Se:e:{for(var he=U.key,me=x;me!==null;){if(me.key===he){if(he=U.type,he===N){if(me.tag===7){a(M,me.sibling),x=d(me,U.props.children),x.return=M,M=x;break e}}else if(me.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Mp(he)===me.type){a(M,me.sibling),x=d(me,U.props),x.ref=ga(M,me,U),x.return=M,M=x;break e}a(M,me);break}else i(M,me);me=me.sibling}U.type===N?(x=rs(U.props.children,M.mode,te,U.key),x.return=M,M=x):(te=Eu(U.type,U.key,U.props,null,M.mode,te),te.ref=ga(M,x,U),te.return=M,M=te)}return v(M);case Te:e:{for(me=U.key;x!==null;){if(x.key===me)if(x.tag===4&&x.stateNode.containerInfo===U.containerInfo&&x.stateNode.implementation===U.implementation){a(M,x.sibling),x=d(x,U.children||[]),x.return=M,M=x;break e}else{a(M,x);break}else i(M,x);x=x.sibling}x=ad(U,M.mode,te),x.return=M,M=x}return v(M);case Dt:return me=U._init,it(M,x,me(U._payload),te)}if(hr(U))return ue(M,x,U,te);if(pe(U))return ce(M,x,U,te);Yl(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,x!==null&&x.tag===6?(a(M,x.sibling),x=d(x,U),x.return=M,M=x):(a(M,x),x=od(U,M.mode,te),x.return=M,M=x),v(M)):a(M,x)}return it}var no=Fp(!0),Up=Fp(!1),Xl=ei(null),Jl=null,ro=null,gh=null;function yh(){gh=ro=Jl=null}function _h(n){var i=Xl.current;Ke(Xl),n._currentValue=i}function vh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function io(n,i){Jl=n,gh=ro=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Qt=!0),n.firstContext=null)}function gn(n){var i=n._currentValue;if(gh!==n)if(n={context:n,memoizedValue:i,next:null},ro===null){if(Jl===null)throw Error(t(308));ro=n,Jl.dependencies={lanes:0,firstContext:n}}else ro=ro.next=n;return i}var Yi=null;function Eh(n){Yi===null?Yi=[n]:Yi.push(n)}function jp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Eh(i)):(a.next=d.next,d.next=a),i.interleaved=a,Sr(n,c)}function Sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ri=!1;function wh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ii(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Ve&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Sr(n,a)}return d=c.interleaved,d===null?(i.next=i,Eh(c)):(i.next=d.next,d.next=i),c.interleaved=i,Sr(n,a)}function Zl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Kr(n,a)}}function Bp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function eu(n,i,a,c){var d=n.updateQueue;ri=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,z=P.next;P.next=null,v===null?g=z:v.next=z,v=P;var J=n.alternate;J!==null&&(J=J.updateQueue,S=J.lastBaseUpdate,S!==v&&(S===null?J.firstBaseUpdate=z:S.next=z,J.lastBaseUpdate=P))}if(g!==null){var ee=d.baseState;v=0,J=z=P=null,S=g;do{var Y=S.lane,se=S.eventTime;if((c&Y)===Y){J!==null&&(J=J.next={eventTime:se,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ue=n,ce=S;switch(Y=i,se=a,ce.tag){case 1:if(ue=ce.payload,typeof ue=="function"){ee=ue.call(se,ee,Y);break e}ee=ue;break e;case 3:ue.flags=ue.flags&-65537|128;case 0:if(ue=ce.payload,Y=typeof ue=="function"?ue.call(se,ee,Y):ue,Y==null)break e;ee=oe({},ee,Y);break e;case 2:ri=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,Y=d.effects,Y===null?d.effects=[S]:Y.push(S))}else se={eventTime:se,lane:Y,tag:S.tag,payload:S.payload,callback:S.callback,next:null},J===null?(z=J=se,P=ee):J=J.next=se,v|=Y;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;Y=S,S=Y.next,Y.next=null,d.lastBaseUpdate=Y,d.shared.pending=null}}while(!0);if(J===null&&(P=ee),d.baseState=P,d.firstBaseUpdate=z,d.lastBaseUpdate=J,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);Zi|=v,n.lanes=v,n.memoizedState=ee}}function $p(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var ya={},Yn=ei(ya),_a=ei(ya),va=ei(ya);function Xi(n){if(n===ya)throw Error(t(174));return n}function Th(n,i){switch(He(va,i),He(_a,n),He(Yn,ya),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ct(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ct(i,n)}Ke(Yn),He(Yn,i)}function so(){Ke(Yn),Ke(_a),Ke(va)}function qp(n){Xi(va.current);var i=Xi(Yn.current),a=ct(i,n.type);i!==a&&(He(_a,n),He(Yn,a))}function Ih(n){_a.current===n&&(Ke(Yn),Ke(_a))}var Xe=ei(0);function tu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Sh=[];function Rh(){for(var n=0;n<Sh.length;n++)Sh[n]._workInProgressVersionPrimary=null;Sh.length=0}var nu=ie.ReactCurrentDispatcher,Ah=ie.ReactCurrentBatchConfig,Ji=0,Je=null,dt=null,vt=null,ru=!1,Ea=!1,wa=0,gw=0;function Lt(){throw Error(t(321))}function Ch(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xn(n[a],i[a]))return!1;return!0}function Ph(n,i,a,c,d,g){if(Ji=g,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,nu.current=n===null||n.memoizedState===null?Ew:ww,n=a(c,d),Ea){g=0;do{if(Ea=!1,wa=0,25<=g)throw Error(t(301));g+=1,vt=dt=null,i.updateQueue=null,nu.current=Tw,n=a(c,d)}while(Ea)}if(nu.current=ou,i=dt!==null&&dt.next!==null,Ji=0,vt=dt=Je=null,ru=!1,i)throw Error(t(300));return n}function kh(){var n=wa!==0;return wa=0,n}function Xn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Je.memoizedState=vt=n:vt=vt.next=n,vt}function yn(){if(dt===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=dt.next;var i=vt===null?Je.memoizedState:vt.next;if(i!==null)vt=i,dt=n;else{if(n===null)throw Error(t(310));dt=n,n={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},vt===null?Je.memoizedState=vt=n:vt=vt.next=n}return vt}function Ta(n,i){return typeof i=="function"?i(n):i}function Nh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var S=v=null,P=null,z=g;do{var J=z.lane;if((Ji&J)===J)P!==null&&(P=P.next={lane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),c=z.hasEagerState?z.eagerState:n(c,z.action);else{var ee={lane:J,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null};P===null?(S=P=ee,v=c):P=P.next=ee,Je.lanes|=J,Zi|=J}z=z.next}while(z!==null&&z!==g);P===null?v=c:P.next=S,xn(c,i.memoizedState)||(Qt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Je.lanes|=g,Zi|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function xh(n){var i=yn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=n(g,v.action),v=v.next;while(v!==d);xn(g,i.memoizedState)||(Qt=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Hp(){}function Wp(n,i){var a=Je,c=yn(),d=i(),g=!xn(c.memoizedState,d);if(g&&(c.memoizedState=d,Qt=!0),c=c.queue,Dh(Qp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||vt!==null&&vt.memoizedState.tag&1){if(a.flags|=2048,Ia(9,Gp.bind(null,a,c,d,i),void 0,null),Et===null)throw Error(t(349));Ji&30||Kp(a,i,d)}return d}function Kp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Gp(n,i,a,c){i.value=a,i.getSnapshot=c,Yp(i)&&Xp(n)}function Qp(n,i,a){return a(function(){Yp(i)&&Xp(n)})}function Yp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xn(n,a)}catch{return!0}}function Xp(n){var i=Sr(n,1);i!==null&&bn(i,n,1,-1)}function Jp(n){var i=Xn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},i.queue=n,n=n.dispatch=vw.bind(null,Je,n),[i.memoizedState,n]}function Ia(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Zp(){return yn().memoizedState}function iu(n,i,a,c){var d=Xn();Je.flags|=n,d.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function su(n,i,a,c){var d=yn();c=c===void 0?null:c;var g=void 0;if(dt!==null){var v=dt.memoizedState;if(g=v.destroy,c!==null&&Ch(c,v.deps)){d.memoizedState=Ia(i,a,g,c);return}}Je.flags|=n,d.memoizedState=Ia(1|i,a,g,c)}function em(n,i){return iu(8390656,8,n,i)}function Dh(n,i){return su(2048,8,n,i)}function tm(n,i){return su(4,2,n,i)}function nm(n,i){return su(4,4,n,i)}function rm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function im(n,i,a){return a=a!=null?a.concat([n]):null,su(4,4,rm.bind(null,i,n),a)}function Oh(){}function sm(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ch(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function om(n,i){var a=yn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Ch(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function am(n,i,a){return Ji&21?(xn(a,i)||(a=zi(),Je.lanes|=a,Zi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Qt=!0),n.memoizedState=a)}function yw(n,i){var a=Ne;Ne=a!==0&&4>a?a:4,n(!0);var c=Ah.transition;Ah.transition={};try{n(!1),i()}finally{Ne=a,Ah.transition=c}}function lm(){return yn().memoizedState}function _w(n,i,a){var c=li(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},um(n))cm(i,a);else if(a=jp(n,i,a,c),a!==null){var d=qt();bn(a,n,c,d),hm(a,i,c)}}function vw(n,i,a){var c=li(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(um(n))cm(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var v=i.lastRenderedState,S=g(v,a);if(d.hasEagerState=!0,d.eagerState=S,xn(S,v)){var P=i.interleaved;P===null?(d.next=d,Eh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=jp(n,i,d,c),a!==null&&(d=qt(),bn(a,n,c,d),hm(a,i,c))}}function um(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function cm(n,i){Ea=ru=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function hm(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Kr(n,a)}}var ou={readContext:gn,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},Ew={readContext:gn,useCallback:function(n,i){return Xn().memoizedState=[n,i===void 0?null:i],n},useContext:gn,useEffect:em,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,iu(4194308,4,rm.bind(null,i,n),a)},useLayoutEffect:function(n,i){return iu(4194308,4,n,i)},useInsertionEffect:function(n,i){return iu(4,2,n,i)},useMemo:function(n,i){var a=Xn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Xn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=_w.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=Xn();return n={current:n},i.memoizedState=n},useState:Jp,useDebugValue:Oh,useDeferredValue:function(n){return Xn().memoizedState=n},useTransition:function(){var n=Jp(!1),i=n[0];return n=yw.bind(null,n[1]),Xn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,d=Xn();if(Qe){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Et===null)throw Error(t(349));Ji&30||Kp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,em(Qp.bind(null,c,g,n),[n]),c.flags|=2048,Ia(9,Gp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Xn(),i=Et.identifierPrefix;if(Qe){var a=Ir,c=Tr;a=(c&~(1<<32-zt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=gw++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},ww={readContext:gn,useCallback:sm,useContext:gn,useEffect:Dh,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:Nh,useRef:Zp,useState:function(){return Nh(Ta)},useDebugValue:Oh,useDeferredValue:function(n){var i=yn();return am(i,dt.memoizedState,n)},useTransition:function(){var n=Nh(Ta)[0],i=yn().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:Wp,useId:lm,unstable_isNewReconciler:!1},Tw={readContext:gn,useCallback:sm,useContext:gn,useEffect:Dh,useImperativeHandle:im,useInsertionEffect:tm,useLayoutEffect:nm,useMemo:om,useReducer:xh,useRef:Zp,useState:function(){return xh(Ta)},useDebugValue:Oh,useDeferredValue:function(n){var i=yn();return dt===null?i.memoizedState=n:am(i,dt.memoizedState,n)},useTransition:function(){var n=xh(Ta)[0],i=yn().memoizedState;return[n,i]},useMutableSource:Hp,useSyncExternalStore:Wp,useId:lm,unstable_isNewReconciler:!1};function On(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Lh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var au={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=li(n),g=Rr(c,d);g.payload=i,a!=null&&(g.callback=a),i=ii(n,g,d),i!==null&&(bn(i,n,d,c),Zl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=li(n),g=Rr(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=ii(n,g,d),i!==null&&(bn(i,n,d,c),Zl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=li(n),d=Rr(a,c);d.tag=2,i!=null&&(d.callback=i),i=ii(n,d,c),i!==null&&(bn(i,n,c,a),Zl(i,n,c))}};function dm(n,i,a,c,d,g,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,v):i.prototype&&i.prototype.isPureReactComponent?!ua(a,c)||!ua(d,g):!0}function fm(n,i,a){var c=!1,d=ti,g=i.contextType;return typeof g=="object"&&g!==null?g=gn(g):(d=Gt(i)?Ki:Ot.current,c=i.contextTypes,g=(c=c!=null)?Js(n,d):ti),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=au,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function pm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&au.enqueueReplaceState(i,i.state,null)}function Vh(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},wh(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=gn(g):(g=Gt(i)?Ki:Ot.current,d.context=Js(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Lh(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&au.enqueueReplaceState(d,d.state,null),eu(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function oo(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function bh(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Iw=typeof WeakMap=="function"?WeakMap:Map;function mm(n,i,a){a=Rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){pu||(pu=!0,Jh=c),Mh(n,i)},a}function gm(n,i,a){a=Rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Mh(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Mh(n,i),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function ym(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Iw;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Mw.bind(null,n,i,a),i.then(n,n))}function _m(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function vm(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Rr(-1,1),i.tag=2,ii(a,i,1))),a.lanes|=1),n)}var Sw=ie.ReactCurrentOwner,Qt=!1;function $t(n,i,a,c){i.child=n===null?Up(i,null,a,c):no(i,n.child,a,c)}function Em(n,i,a,c,d){a=a.render;var g=i.ref;return io(i,d),c=Ph(n,i,a,c,g,d),a=kh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Qe&&a&&hh(i),i.flags|=1,$t(n,i,c,d),i.child)}function wm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!sd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Tm(n,i,g,c,d)):(n=Eu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,!(n.lanes&d)){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:ua,a(v,c)&&n.ref===i.ref)return Ar(n,i,d)}return i.flags|=1,n=ci(g,c),n.ref=i.ref,n.return=i,i.child=n}function Tm(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(ua(g,c)&&n.ref===i.ref)if(Qt=!1,i.pendingProps=c=g,(n.lanes&d)!==0)n.flags&131072&&(Qt=!0);else return i.lanes=n.lanes,Ar(n,i,d)}return Fh(n,i,a,c,d)}function Im(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(lo,ln),ln|=a;else{if(!(a&1073741824))return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,He(lo,ln),ln|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,He(lo,ln),ln|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,He(lo,ln),ln|=c;return $t(n,i,d,a),i.child}function Sm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Fh(n,i,a,c,d){var g=Gt(a)?Ki:Ot.current;return g=Js(i,g),io(i,d),a=Ph(n,i,a,c,g,d),c=kh(),n!==null&&!Qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Ar(n,i,d)):(Qe&&c&&hh(i),i.flags|=1,$t(n,i,a,d),i.child)}function Rm(n,i,a,c,d){if(Gt(a)){var g=!0;Hl(i)}else g=!1;if(io(i,d),i.stateNode===null)uu(n,i),fm(i,a,c),Vh(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var P=v.context,z=a.contextType;typeof z=="object"&&z!==null?z=gn(z):(z=Gt(a)?Ki:Ot.current,z=Js(i,z));var J=a.getDerivedStateFromProps,ee=typeof J=="function"||typeof v.getSnapshotBeforeUpdate=="function";ee||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==z)&&pm(i,v,c,z),ri=!1;var Y=i.memoizedState;v.state=Y,eu(i,c,v,d),P=i.memoizedState,S!==c||Y!==P||Kt.current||ri?(typeof J=="function"&&(Lh(i,a,J,c),P=i.memoizedState),(S=ri||dm(i,a,S,c,Y,P,z))?(ee||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=z,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,zp(n,i),S=i.memoizedProps,z=i.type===i.elementType?S:On(i.type,S),v.props=z,ee=i.pendingProps,Y=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=gn(P):(P=Gt(a)?Ki:Ot.current,P=Js(i,P));var se=a.getDerivedStateFromProps;(J=typeof se=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==ee||Y!==P)&&pm(i,v,c,P),ri=!1,Y=i.memoizedState,v.state=Y,eu(i,c,v,d);var ue=i.memoizedState;S!==ee||Y!==ue||Kt.current||ri?(typeof se=="function"&&(Lh(i,a,se,c),ue=i.memoizedState),(z=ri||dm(i,a,z,c,Y,ue,P)||!1)?(J||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ue,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ue,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&Y===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&Y===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ue),v.props=c,v.state=ue,v.context=P,c=z):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&Y===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&Y===n.memoizedState||(i.flags|=1024),c=!1)}return Uh(n,i,a,c,g,d)}function Uh(n,i,a,c,d,g){Sm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&Np(i,a,!1),Ar(n,i,g);c=i.stateNode,Sw.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=no(i,n.child,null,g),i.child=no(i,null,S,g)):$t(n,i,S,g),i.memoizedState=c.state,d&&Np(i,a,!0),i.child}function Am(n){var i=n.stateNode;i.pendingContext?Pp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Pp(n,i.context,!1),Th(n,i.containerInfo)}function Cm(n,i,a,c,d){return to(),mh(d),i.flags|=256,$t(n,i,a,c),i.child}var jh={dehydrated:null,treeContext:null,retryLane:0};function zh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pm(n,i,a){var c=i.pendingProps,d=Xe.current,g=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),He(Xe,d&1),n===null)return ph(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(v=c.children,n=c.fallback,g?(c=i.mode,g=i.child,v={mode:"hidden",children:v},!(c&1)&&g!==null?(g.childLanes=0,g.pendingProps=v):g=wu(v,c,0,null),n=rs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=zh(a),i.memoizedState=jh,n):Bh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return Rw(n,i,v,c,S,d,a);if(g){g=c.fallback,v=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ci(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?g=ci(S,g):(g=rs(g,v,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,v=n.child.memoizedState,v=v===null?zh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=n.childLanes&~a,i.memoizedState=jh,c}return g=n.child,n=g.sibling,c=ci(g,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Bh(n,i){return i=wu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function lu(n,i,a,c){return c!==null&&mh(c),no(i,n.child,null,a),n=Bh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Rw(n,i,a,c,d,g,v){if(a)return i.flags&256?(i.flags&=-257,c=bh(Error(t(422))),lu(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=wu({mode:"visible",children:c.children},d,0,null),g=rs(g,d,v,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,i.mode&1&&no(i,n.child,null,v),i.child.memoizedState=zh(v),i.memoizedState=jh,g);if(!(i.mode&1))return lu(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=bh(g,c,void 0),lu(n,i,v,c)}if(S=(v&n.childLanes)!==0,Qt||S){if(c=Et,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Sr(n,d),bn(c,n,d,-1))}return id(),c=bh(Error(t(421))),lu(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Fw.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,an=Zr(d.nextSibling),on=i,Qe=!0,Dn=null,n!==null&&(pn[mn++]=Tr,pn[mn++]=Ir,pn[mn++]=Gi,Tr=n.id,Ir=n.overflow,Gi=i),i=Bh(i,c.children),i.flags|=4096,i)}function km(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),vh(n.return,i,a)}function $h(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function Nm(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if($t(n,i,c.children,a),c=Xe.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&km(n,a,i);else if(n.tag===19)km(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(He(Xe,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&tu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),$h(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&tu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}$h(i,!0,a,null,g);break;case"together":$h(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function uu(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Zi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ci(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ci(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Aw(n,i,a){switch(i.tag){case 3:Am(i),to();break;case 5:qp(i);break;case 1:Gt(i.type)&&Hl(i);break;case 4:Th(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;He(Xl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(He(Xe,Xe.current&1),i.flags|=128,null):a&i.child.childLanes?Pm(n,i,a):(He(Xe,Xe.current&1),n=Ar(n,i,a),n!==null?n.sibling:null);He(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Nm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),He(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,Im(n,i,a)}return Ar(n,i,a)}var xm,qh,Dm,Om;xm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},qh=function(){},Dm=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Xi(Yn.current);var g=null;switch(a){case"input":d=Ni(n,d),c=Ni(n,c),g=[];break;case"select":d=oe({},d,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":d=Fo(n,d),c=Fo(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Bl)}qo(a,c);var v;a=null;for(z in d)if(!c.hasOwnProperty(z)&&d.hasOwnProperty(z)&&d[z]!=null)if(z==="style"){var S=d[z];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else z!=="dangerouslySetInnerHTML"&&z!=="children"&&z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&z!=="autoFocus"&&(o.hasOwnProperty(z)?g||(g=[]):(g=g||[]).push(z,null));for(z in c){var P=c[z];if(S=d!=null?d[z]:void 0,c.hasOwnProperty(z)&&P!==S&&(P!=null||S!=null))if(z==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(z,a)),a=P;else z==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(g=g||[]).push(z,P)):z==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(z,""+P):z!=="suppressContentEditableWarning"&&z!=="suppressHydrationWarning"&&(o.hasOwnProperty(z)?(P!=null&&z==="onScroll"&&We("scroll",n),g||S===P||(g=[])):(g=g||[]).push(z,P))}a&&(g=g||[]).push("style",a);var z=g;(i.updateQueue=z)&&(i.flags|=4)}},Om=function(n,i,a,c){a!==c&&(i.flags|=4)};function Sa(n,i){if(!Qe)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Cw(n,i,a){var c=i.pendingProps;switch(dh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(i),null;case 1:return Gt(i.type)&&ql(),Vt(i),null;case 3:return c=i.stateNode,so(),Ke(Kt),Ke(Ot),Rh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ql(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Dn!==null&&(td(Dn),Dn=null))),qh(n,i),Vt(i),null;case 5:Ih(i);var d=Xi(va.current);if(a=i.type,n!==null&&i.stateNode!=null)Dm(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Vt(i),null}if(n=Xi(Yn.current),Ql(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Qn]=i,c[pa]=g,n=(i.mode&1)!==0,a){case"dialog":We("cancel",c),We("close",c);break;case"iframe":case"object":case"embed":We("load",c);break;case"video":case"audio":for(d=0;d<ha.length;d++)We(ha[d],c);break;case"source":We("error",c);break;case"img":case"image":case"link":We("error",c),We("load",c);break;case"details":We("toggle",c);break;case"input":Es(c,g),We("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},We("invalid",c);break;case"textarea":Ts(c,g),We("invalid",c)}qo(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var S=g[v];v==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&zl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&zl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&We("scroll",c)}switch(a){case"input":cr(c),fl(c,g,!0);break;case"textarea":cr(c),Uo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Bl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ut(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Qn]=i,n[pa]=c,xm(n,i,!1,!1),i.stateNode=n;e:{switch(v=Ho(a,c),a){case"dialog":We("cancel",n),We("close",n),d=c;break;case"iframe":case"object":case"embed":We("load",n),d=c;break;case"video":case"audio":for(d=0;d<ha.length;d++)We(ha[d],n);d=c;break;case"source":We("error",n),d=c;break;case"img":case"image":case"link":We("error",n),We("load",n),d=c;break;case"details":We("toggle",n),d=c;break;case"input":Es(n,c),d=Ni(n,c),We("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=oe({},c,{value:void 0}),We("invalid",n);break;case"textarea":Ts(n,c),d=Fo(n,c),We("invalid",n);break;default:d=c}qo(a,d),S=d;for(g in S)if(S.hasOwnProperty(g)){var P=S[g];g==="style"?Bo(n,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&jo(n,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Br(n,P):typeof P=="number"&&Br(n,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&We("scroll",n):P!=null&&Q(n,g,P,v))}switch(a){case"input":cr(n),fl(n,c,!1);break;case"textarea":cr(n),Uo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Fe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?dr(n,!!c.multiple,g,!1):c.defaultValue!=null&&dr(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Bl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vt(i),null;case 6:if(n&&i.stateNode!=null)Om(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Xi(va.current),Xi(Yn.current),Ql(i)){if(c=i.stateNode,a=i.memoizedProps,c[Qn]=i,(g=c.nodeValue!==a)&&(n=on,n!==null))switch(n.tag){case 3:zl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&zl(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Qn]=i,i.stateNode=c}return Vt(i),null;case 13:if(Ke(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qe&&an!==null&&i.mode&1&&!(i.flags&128))bp(),to(),i.flags|=98560,g=!1;else if(g=Ql(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Qn]=i}else to(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Vt(i),g=!1}else Dn!==null&&(td(Dn),Dn=null),g=!0;if(!g)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Xe.current&1?ft===0&&(ft=3):id())),i.updateQueue!==null&&(i.flags|=4),Vt(i),null);case 4:return so(),qh(n,i),n===null&&da(i.stateNode.containerInfo),Vt(i),null;case 10:return _h(i.type._context),Vt(i),null;case 17:return Gt(i.type)&&ql(),Vt(i),null;case 19:if(Ke(Xe),g=i.memoizedState,g===null)return Vt(i),null;if(c=(i.flags&128)!==0,v=g.rendering,v===null)if(c)Sa(g,!1);else{if(ft!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=tu(n),v!==null){for(i.flags|=128,Sa(g,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,n=v.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return He(Xe,Xe.current&1|2),i.child}n=n.sibling}g.tail!==null&&qe()>uo&&(i.flags|=128,c=!0,Sa(g,!1),i.lanes=4194304)}else{if(!c)if(n=tu(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Sa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Qe)return Vt(i),null}else 2*qe()-g.renderingStartTime>uo&&a!==1073741824&&(i.flags|=128,c=!0,Sa(g,!1),i.lanes=4194304);g.isBackwards?(v.sibling=i.child,i.child=v):(a=g.last,a!==null?a.sibling=v:i.child=v,g.last=v)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qe(),i.sibling=null,a=Xe.current,He(Xe,c?a&1|2:a&1),i):(Vt(i),null);case 22:case 23:return rd(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?ln&1073741824&&(Vt(i),i.subtreeFlags&6&&(i.flags|=8192)):Vt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Pw(n,i){switch(dh(i),i.tag){case 1:return Gt(i.type)&&ql(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return so(),Ke(Kt),Ke(Ot),Rh(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return Ih(i),null;case 13:if(Ke(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));to()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Xe),null;case 4:return so(),null;case 10:return _h(i.type._context),null;case 22:case 23:return rd(),null;case 24:return null;default:return null}}var cu=!1,bt=!1,kw=typeof WeakSet=="function"?WeakSet:Set,le=null;function ao(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){tt(n,i,c)}else a.current=null}function Hh(n,i,a){try{a()}catch(c){tt(n,i,c)}}var Lm=!1;function Nw(n,i){if(rh=Yr,n=dp(),Qc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,z=0,J=0,ee=n,Y=null;t:for(;;){for(var se;ee!==a||d!==0&&ee.nodeType!==3||(S=v+d),ee!==g||c!==0&&ee.nodeType!==3||(P=v+c),ee.nodeType===3&&(v+=ee.nodeValue.length),(se=ee.firstChild)!==null;)Y=ee,ee=se;for(;;){if(ee===n)break t;if(Y===a&&++z===d&&(S=v),Y===g&&++J===c&&(P=v),(se=ee.nextSibling)!==null)break;ee=Y,Y=ee.parentNode}ee=se}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(ih={focusedElem:n,selectionRange:a},Yr=!1,le=i;le!==null;)if(i=le,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,le=n;else for(;le!==null;){i=le;try{var ue=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ue!==null){var ce=ue.memoizedProps,it=ue.memoizedState,M=i.stateNode,x=M.getSnapshotBeforeUpdate(i.elementType===i.type?ce:On(i.type,ce),it);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var U=i.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){tt(i,i.return,te)}if(n=i.sibling,n!==null){n.return=i.return,le=n;break}le=i.return}return ue=Lm,Lm=!1,ue}function Ra(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Hh(i,a,g)}d=d.next}while(d!==c)}}function hu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Wh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Vm(n){var i=n.alternate;i!==null&&(n.alternate=null,Vm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Qn],delete i[pa],delete i[lh],delete i[dw],delete i[fw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bm(n){return n.tag===5||n.tag===3||n.tag===4}function Mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bl));else if(c!==4&&(n=n.child,n!==null))for(Kh(n,i,a),n=n.sibling;n!==null;)Kh(n,i,a),n=n.sibling}function Gh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Gh(n,i,a),n=n.sibling;n!==null;)Gh(n,i,a),n=n.sibling}var Rt=null,Ln=!1;function si(n,i,a){for(a=a.child;a!==null;)Fm(n,i,a),a=a.sibling}function Fm(n,i,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Ui,a)}catch{}switch(a.tag){case 5:bt||ao(a,i);case 6:var c=Rt,d=Ln;Rt=null,si(n,i,a),Rt=c,Ln=d,Rt!==null&&(Ln?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(Ln?(n=Rt,a=a.stateNode,n.nodeType===8?ah(n.parentNode,a):n.nodeType===1&&ah(n,a),kn(n)):ah(Rt,a.stateNode));break;case 4:c=Rt,d=Ln,Rt=a.stateNode.containerInfo,Ln=!0,si(n,i,a),Rt=c,Ln=d;break;case 0:case 11:case 14:case 15:if(!bt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&(g&2||g&4)&&Hh(a,i,v),d=d.next}while(d!==c)}si(n,i,a);break;case 1:if(!bt&&(ao(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){tt(a,i,S)}si(n,i,a);break;case 21:si(n,i,a);break;case 22:a.mode&1?(bt=(c=bt)||a.memoizedState!==null,si(n,i,a),bt=c):si(n,i,a);break;default:si(n,i,a)}}function Um(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kw),i.forEach(function(c){var d=Uw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Vn(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Rt=S.stateNode,Ln=!1;break e;case 3:Rt=S.stateNode.containerInfo,Ln=!0;break e;case 4:Rt=S.stateNode.containerInfo,Ln=!0;break e}S=S.return}if(Rt===null)throw Error(t(160));Fm(g,v,d),Rt=null,Ln=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(z){tt(d,i,z)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)jm(i,n),i=i.sibling}function jm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(i,n),Jn(n),c&4){try{Ra(3,n,n.return),hu(3,n)}catch(ce){tt(n,n.return,ce)}try{Ra(5,n,n.return)}catch(ce){tt(n,n.return,ce)}}break;case 1:Vn(i,n),Jn(n),c&512&&a!==null&&ao(a,a.return);break;case 5:if(Vn(i,n),Jn(n),c&512&&a!==null&&ao(a,a.return),n.flags&32){var d=n.stateNode;try{Br(d,"")}catch(ce){tt(n,n.return,ce)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,v=a!==null?a.memoizedProps:g,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&bo(d,g),Ho(S,v);var z=Ho(S,g);for(v=0;v<P.length;v+=2){var J=P[v],ee=P[v+1];J==="style"?Bo(d,ee):J==="dangerouslySetInnerHTML"?jo(d,ee):J==="children"?Br(d,ee):Q(d,J,ee,z)}switch(S){case"input":Mo(d,g);break;case"textarea":Is(d,g);break;case"select":var Y=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var se=g.value;se!=null?dr(d,!!g.multiple,se,!1):Y!==!!g.multiple&&(g.defaultValue!=null?dr(d,!!g.multiple,g.defaultValue,!0):dr(d,!!g.multiple,g.multiple?[]:"",!1))}d[pa]=g}catch(ce){tt(n,n.return,ce)}}break;case 6:if(Vn(i,n),Jn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(ce){tt(n,n.return,ce)}}break;case 3:if(Vn(i,n),Jn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(i.containerInfo)}catch(ce){tt(n,n.return,ce)}break;case 4:Vn(i,n),Jn(n);break;case 13:Vn(i,n),Jn(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Xh=qe())),c&4&&Um(n);break;case 22:if(J=a!==null&&a.memoizedState!==null,n.mode&1?(bt=(z=bt)||J,Vn(i,n),bt=z):Vn(i,n),Jn(n),c&8192){if(z=n.memoizedState!==null,(n.stateNode.isHidden=z)&&!J&&n.mode&1)for(le=n,J=n.child;J!==null;){for(ee=le=J;le!==null;){switch(Y=le,se=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ra(4,Y,Y.return);break;case 1:ao(Y,Y.return);var ue=Y.stateNode;if(typeof ue.componentWillUnmount=="function"){c=Y,a=Y.return;try{i=c,ue.props=i.memoizedProps,ue.state=i.memoizedState,ue.componentWillUnmount()}catch(ce){tt(c,a,ce)}}break;case 5:ao(Y,Y.return);break;case 22:if(Y.memoizedState!==null){$m(ee);continue}}se!==null?(se.return=Y,le=se):$m(ee)}J=J.sibling}e:for(J=null,ee=n;;){if(ee.tag===5){if(J===null){J=ee;try{d=ee.stateNode,z?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=ee.stateNode,P=ee.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=zo("display",v))}catch(ce){tt(n,n.return,ce)}}}else if(ee.tag===6){if(J===null)try{ee.stateNode.nodeValue=z?"":ee.memoizedProps}catch(ce){tt(n,n.return,ce)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===n)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===n)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===n)break e;J===ee&&(J=null),ee=ee.return}J===ee&&(J=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:Vn(i,n),Jn(n),c&4&&Um(n);break;case 21:break;default:Vn(i,n),Jn(n)}}function Jn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(bm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Br(d,""),c.flags&=-33);var g=Mm(n);Gh(n,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Mm(n);Kh(n,S,v);break;default:throw Error(t(161))}}catch(P){tt(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function xw(n,i,a){le=n,zm(n)}function zm(n,i,a){for(var c=(n.mode&1)!==0;le!==null;){var d=le,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||cu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||bt;S=cu;var z=bt;if(cu=v,(bt=P)&&!z)for(le=d;le!==null;)v=le,P=v.child,v.tag===22&&v.memoizedState!==null?qm(d):P!==null?(P.return=v,le=P):qm(d);for(;g!==null;)le=g,zm(g),g=g.sibling;le=d,cu=S,bt=z}Bm(n)}else d.subtreeFlags&8772&&g!==null?(g.return=d,le=g):Bm(n)}}function Bm(n){for(;le!==null;){var i=le;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:bt||hu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!bt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:On(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&$p(i,g,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}$p(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var z=i.alternate;if(z!==null){var J=z.memoizedState;if(J!==null){var ee=J.dehydrated;ee!==null&&kn(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bt||i.flags&512&&Wh(i)}catch(Y){tt(i,i.return,Y)}}if(i===n){le=null;break}if(a=i.sibling,a!==null){a.return=i.return,le=a;break}le=i.return}}function $m(n){for(;le!==null;){var i=le;if(i===n){le=null;break}var a=i.sibling;if(a!==null){a.return=i.return,le=a;break}le=i.return}}function qm(n){for(;le!==null;){var i=le;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hu(4,i)}catch(P){tt(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){tt(i,d,P)}}var g=i.return;try{Wh(i)}catch(P){tt(i,g,P)}break;case 5:var v=i.return;try{Wh(i)}catch(P){tt(i,v,P)}}}catch(P){tt(i,i.return,P)}if(i===n){le=null;break}var S=i.sibling;if(S!==null){S.return=i.return,le=S;break}le=i.return}}var Dw=Math.ceil,du=ie.ReactCurrentDispatcher,Qh=ie.ReactCurrentOwner,_n=ie.ReactCurrentBatchConfig,Ve=0,Et=null,at=null,At=0,ln=0,lo=ei(0),ft=0,Aa=null,Zi=0,fu=0,Yh=0,Ca=null,Yt=null,Xh=0,uo=1/0,Cr=null,pu=!1,Jh=null,oi=null,mu=!1,ai=null,gu=0,Pa=0,Zh=null,yu=-1,_u=0;function qt(){return Ve&6?qe():yu!==-1?yu:yu=qe()}function li(n){return n.mode&1?Ve&2&&At!==0?At&-At:mw.transition!==null?(_u===0&&(_u=zi()),_u):(n=Ne,n!==0||(n=window.event,n=n===void 0?16:na(n.type)),n):1}function bn(n,i,a,c){if(50<Pa)throw Pa=0,Zh=null,Error(t(185));Wr(n,a,c),(!(Ve&2)||n!==Et)&&(n===Et&&(!(Ve&2)&&(fu|=a),ft===4&&ui(n,At)),Xt(n,c),a===1&&Ve===0&&!(i.mode&1)&&(uo=qe()+500,Wl&&ni()))}function Xt(n,i){var a=n.callbackNode;mr(n,i);var c=ji(n,n===Et?At:0);if(c===0)a!==null&&Xo(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Xo(a),i===1)n.tag===0?pw(Wm.bind(null,n)):xp(Wm.bind(null,n)),cw(function(){!(Ve&6)&&ni()}),a=null;else{switch(Gr(c)){case 1:a=Fi;break;case 4:a=$r;break;case 16:a=hn;break;case 536870912:a=_l;break;default:a=hn}a=eg(a,Hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Hm(n,i){if(yu=-1,_u=0,Ve&6)throw Error(t(327));var a=n.callbackNode;if(co()&&n.callbackNode!==a)return null;var c=ji(n,n===Et?At:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=vu(n,c);else{i=c;var d=Ve;Ve|=2;var g=Gm();(Et!==n||At!==i)&&(Cr=null,uo=qe()+500,ts(n,i));do try{Vw();break}catch(S){Km(n,S)}while(!0);yh(),du.current=g,Ve=d,at!==null?i=0:(Et=null,At=0,i=ft)}if(i!==0){if(i===2&&(d=nn(n),d!==0&&(c=d,i=ed(n,d))),i===1)throw a=Aa,ts(n,0),ui(n,c),Xt(n,qe()),a;if(i===6)ui(n,c);else{if(d=n.current.alternate,!(c&30)&&!Ow(d)&&(i=vu(n,c),i===2&&(g=nn(n),g!==0&&(c=g,i=ed(n,g))),i===1))throw a=Aa,ts(n,0),ui(n,c),Xt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ns(n,Yt,Cr);break;case 3:if(ui(n,c),(c&130023424)===c&&(i=Xh+500-qe(),10<i)){if(ji(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=oh(ns.bind(null,n,Yt,Cr),i);break}ns(n,Yt,Cr);break;case 4:if(ui(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-zt(c);g=1<<v,v=i[v],v>d&&(d=v),c&=~g}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Dw(c/1960))-c,10<c){n.timeoutHandle=oh(ns.bind(null,n,Yt,Cr),c);break}ns(n,Yt,Cr);break;case 5:ns(n,Yt,Cr);break;default:throw Error(t(329))}}}return Xt(n,qe()),n.callbackNode===a?Hm.bind(null,n):null}function ed(n,i){var a=Ca;return n.current.memoizedState.isDehydrated&&(ts(n,i).flags|=256),n=vu(n,i),n!==2&&(i=Yt,Yt=a,i!==null&&td(i)),n}function td(n){Yt===null?Yt=n:Yt.push.apply(Yt,n)}function Ow(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!xn(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ui(n,i){for(i&=~Yh,i&=~fu,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-zt(i),c=1<<a;n[a]=-1,i&=~c}}function Wm(n){if(Ve&6)throw Error(t(327));co();var i=ji(n,0);if(!(i&1))return Xt(n,qe()),null;var a=vu(n,i);if(n.tag!==0&&a===2){var c=nn(n);c!==0&&(i=c,a=ed(n,c))}if(a===1)throw a=Aa,ts(n,0),ui(n,i),Xt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ns(n,Yt,Cr),Xt(n,qe()),null}function nd(n,i){var a=Ve;Ve|=1;try{return n(i)}finally{Ve=a,Ve===0&&(uo=qe()+500,Wl&&ni())}}function es(n){ai!==null&&ai.tag===0&&!(Ve&6)&&co();var i=Ve;Ve|=1;var a=_n.transition,c=Ne;try{if(_n.transition=null,Ne=1,n)return n()}finally{Ne=c,_n.transition=a,Ve=i,!(Ve&6)&&ni()}}function rd(){ln=lo.current,Ke(lo)}function ts(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,uw(a)),at!==null)for(a=at.return;a!==null;){var c=a;switch(dh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ql();break;case 3:so(),Ke(Kt),Ke(Ot),Rh();break;case 5:Ih(c);break;case 4:so();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:_h(c.type._context);break;case 22:case 23:rd()}a=a.return}if(Et=n,at=n=ci(n.current,null),At=ln=i,ft=0,Aa=null,Yh=fu=Zi=0,Yt=Ca=null,Yi!==null){for(i=0;i<Yi.length;i++)if(a=Yi[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}Yi=null}return n}function Km(n,i){do{var a=at;try{if(yh(),nu.current=ou,ru){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}ru=!1}if(Ji=0,vt=dt=Je=null,Ea=!1,wa=0,Qh.current=null,a===null||a.return===null){ft=1,Aa=i,at=null;break}e:{var g=n,v=a.return,S=a,P=i;if(i=At,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var z=P,J=S,ee=J.tag;if(!(J.mode&1)&&(ee===0||ee===11||ee===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var se=_m(v);if(se!==null){se.flags&=-257,vm(se,v,S,g,i),se.mode&1&&ym(g,z,i),i=se,P=z;var ue=i.updateQueue;if(ue===null){var ce=new Set;ce.add(P),i.updateQueue=ce}else ue.add(P);break e}else{if(!(i&1)){ym(g,z,i),id();break e}P=Error(t(426))}}else if(Qe&&S.mode&1){var it=_m(v);if(it!==null){!(it.flags&65536)&&(it.flags|=256),vm(it,v,S,g,i),mh(oo(P,S));break e}}g=P=oo(P,S),ft!==4&&(ft=2),Ca===null?Ca=[g]:Ca.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var M=mm(g,P,i);Bp(g,M);break e;case 1:S=P;var x=g.type,U=g.stateNode;if(!(g.flags&128)&&(typeof x.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(oi===null||!oi.has(U)))){g.flags|=65536,i&=-i,g.lanes|=i;var te=gm(g,S,i);Bp(g,te);break e}}g=g.return}while(g!==null)}Ym(a)}catch(he){i=he,at===a&&a!==null&&(at=a=a.return);continue}break}while(!0)}function Gm(){var n=du.current;return du.current=ou,n===null?ou:n}function id(){(ft===0||ft===3||ft===2)&&(ft=4),Et===null||!(Zi&268435455)&&!(fu&268435455)||ui(Et,At)}function vu(n,i){var a=Ve;Ve|=2;var c=Gm();(Et!==n||At!==i)&&(Cr=null,ts(n,i));do try{Lw();break}catch(d){Km(n,d)}while(!0);if(yh(),Ve=a,du.current=c,at!==null)throw Error(t(261));return Et=null,At=0,ft}function Lw(){for(;at!==null;)Qm(at)}function Vw(){for(;at!==null&&!gl();)Qm(at)}function Qm(n){var i=Zm(n.alternate,n,ln);n.memoizedProps=n.pendingProps,i===null?Ym(n):at=i,Qh.current=null}function Ym(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Pw(a,i),a!==null){a.flags&=32767,at=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ft=6,at=null;return}}else if(a=Cw(a,i,ln),a!==null){at=a;return}if(i=i.sibling,i!==null){at=i;return}at=i=n}while(i!==null);ft===0&&(ft=5)}function ns(n,i,a){var c=Ne,d=_n.transition;try{_n.transition=null,Ne=1,bw(n,i,a,c)}finally{_n.transition=d,Ne=c}return null}function bw(n,i,a,c){do co();while(ai!==null);if(Ve&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Be(n,g),n===Et&&(at=Et=null,At=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||mu||(mu=!0,eg(hn,function(){return co(),null})),g=(a.flags&15990)!==0,a.subtreeFlags&15990||g){g=_n.transition,_n.transition=null;var v=Ne;Ne=1;var S=Ve;Ve|=4,Qh.current=null,Nw(n,a),jm(a,n),nw(ih),Yr=!!rh,ih=rh=null,n.current=a,xw(a),zc(),Ve=S,Ne=v,_n.transition=g}else n.current=a;if(mu&&(mu=!1,ai=n,gu=d),g=n.pendingLanes,g===0&&(oi=null),vl(a.stateNode),Xt(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(pu)throw pu=!1,n=Jh,Jh=null,n;return gu&1&&n.tag!==0&&co(),g=n.pendingLanes,g&1?n===Zh?Pa++:(Pa=0,Zh=n):Pa=0,ni(),null}function co(){if(ai!==null){var n=Gr(gu),i=_n.transition,a=Ne;try{if(_n.transition=null,Ne=16>n?16:n,ai===null)var c=!1;else{if(n=ai,ai=null,gu=0,Ve&6)throw Error(t(331));var d=Ve;for(Ve|=4,le=n.current;le!==null;){var g=le,v=g.child;if(le.flags&16){var S=g.deletions;if(S!==null){for(var P=0;P<S.length;P++){var z=S[P];for(le=z;le!==null;){var J=le;switch(J.tag){case 0:case 11:case 15:Ra(8,J,g)}var ee=J.child;if(ee!==null)ee.return=J,le=ee;else for(;le!==null;){J=le;var Y=J.sibling,se=J.return;if(Vm(J),J===z){le=null;break}if(Y!==null){Y.return=se,le=Y;break}le=se}}}var ue=g.alternate;if(ue!==null){var ce=ue.child;if(ce!==null){ue.child=null;do{var it=ce.sibling;ce.sibling=null,ce=it}while(ce!==null)}}le=g}}if(g.subtreeFlags&2064&&v!==null)v.return=g,le=v;else e:for(;le!==null;){if(g=le,g.flags&2048)switch(g.tag){case 0:case 11:case 15:Ra(9,g,g.return)}var M=g.sibling;if(M!==null){M.return=g.return,le=M;break e}le=g.return}}var x=n.current;for(le=x;le!==null;){v=le;var U=v.child;if(v.subtreeFlags&2064&&U!==null)U.return=v,le=U;else e:for(v=x;le!==null;){if(S=le,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:hu(9,S)}}catch(he){tt(S,S.return,he)}if(S===v){le=null;break e}var te=S.sibling;if(te!==null){te.return=S.return,le=te;break e}le=S.return}}if(Ve=d,ni(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Ui,n)}catch{}c=!0}return c}finally{Ne=a,_n.transition=i}}return!1}function Xm(n,i,a){i=oo(a,i),i=mm(n,i,1),n=ii(n,i,1),i=qt(),n!==null&&(Wr(n,1,i),Xt(n,i))}function tt(n,i,a){if(n.tag===3)Xm(n,n,a);else for(;i!==null;){if(i.tag===3){Xm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){n=oo(a,n),n=gm(i,n,1),i=ii(i,n,1),n=qt(),i!==null&&(Wr(i,1,n),Xt(i,n));break}}i=i.return}}function Mw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,Et===n&&(At&a)===a&&(ft===4||ft===3&&(At&130023424)===At&&500>qe()-Xh?ts(n,0):Yh|=a),Xt(n,i)}function Jm(n,i){i===0&&(n.mode&1?(i=Os,Os<<=1,!(Os&130023424)&&(Os=4194304)):i=1);var a=qt();n=Sr(n,i),n!==null&&(Wr(n,i,a),Xt(n,a))}function Fw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Jm(n,a)}function Uw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Jm(n,a)}var Zm;Zm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kt.current)Qt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Qt=!1,Aw(n,i,a);Qt=!!(n.flags&131072)}else Qt=!1,Qe&&i.flags&1048576&&Dp(i,Gl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;uu(n,i),n=i.pendingProps;var d=Js(i,Ot.current);io(i,a),d=Ph(null,i,c,n,d,a);var g=kh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(c)?(g=!0,Hl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,wh(i),d.updater=au,i.stateNode=d,d._reactInternals=i,Vh(i,c,n,a),i=Uh(null,i,c,!0,g,a)):(i.tag=0,Qe&&g&&hh(i),$t(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(uu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=zw(c),n=On(c,n),d){case 0:i=Fh(null,i,c,n,a);break e;case 1:i=Rm(null,i,c,n,a);break e;case 11:i=Em(null,i,c,n,a);break e;case 14:i=wm(null,i,c,On(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Fh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Rm(n,i,c,d,a);case 3:e:{if(Am(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,zp(n,i),eu(i,c,null,a);var v=i.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=oo(Error(t(423)),i),i=Cm(n,i,c,a,d);break e}else if(c!==d){d=oo(Error(t(424)),i),i=Cm(n,i,c,a,d);break e}else for(an=Zr(i.stateNode.containerInfo.firstChild),on=i,Qe=!0,Dn=null,a=Up(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(to(),c===d){i=Ar(n,i,a);break e}$t(n,i,c,a)}i=i.child}return i;case 5:return qp(i),n===null&&ph(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,v=d.children,sh(c,d)?v=null:g!==null&&sh(c,g)&&(i.flags|=32),Sm(n,i),$t(n,i,v,a),i.child;case 6:return n===null&&ph(i),null;case 13:return Pm(n,i,a);case 4:return Th(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=no(i,null,c,a):$t(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),Em(n,i,c,d,a);case 7:return $t(n,i,i.pendingProps,a),i.child;case 8:return $t(n,i,i.pendingProps.children,a),i.child;case 12:return $t(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,v=d.value,He(Xl,c._currentValue),c._currentValue=v,g!==null)if(xn(g.value,v)){if(g.children===d.children&&!Kt.current){i=Ar(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var S=g.dependencies;if(S!==null){v=g.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=Rr(-1,a&-a),P.tag=2;var z=g.updateQueue;if(z!==null){z=z.shared;var J=z.pending;J===null?P.next=P:(P.next=J.next,J.next=P),z.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),vh(g.return,a,i),S.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===i.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),vh(v,a,i),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===i){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}$t(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,io(i,a),d=gn(d),c=c(d),i.flags|=1,$t(n,i,c,a),i.child;case 14:return c=i.type,d=On(c,i.pendingProps),d=On(c.type,d),wm(n,i,c,d,a);case 15:return Tm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:On(c,d),uu(n,i),i.tag=1,Gt(c)?(n=!0,Hl(i)):n=!1,io(i,a),fm(i,c,d),Vh(i,c,d,a),Uh(null,i,c,!0,n,a);case 19:return Nm(n,i,a);case 22:return Im(n,i,a)}throw Error(t(156,i.tag))};function eg(n,i){return xs(n,i)}function jw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(n,i,a,c){return new jw(n,i,a,c)}function sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function zw(n){if(typeof n=="function")return sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===xt)return 14}return 2}function ci(n,i){var a=n.alternate;return a===null?(a=vn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Eu(n,i,a,c,d,g){var v=2;if(c=n,typeof n=="function")sd(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case N:return rs(a.children,d,g,i);case I:v=8,d|=8;break;case R:return n=vn(12,a,i,d|2),n.elementType=R,n.lanes=g,n;case C:return n=vn(13,a,i,d),n.elementType=C,n.lanes=g,n;case nt:return n=vn(19,a,i,d),n.elementType=nt,n.lanes=g,n;case ze:return wu(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:v=10;break e;case D:v=9;break e;case V:v=11;break e;case xt:v=14;break e;case Dt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=vn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function rs(n,i,a,c){return n=vn(7,n,c,i),n.lanes=a,n}function wu(n,i,a,c){return n=vn(22,n,c,i),n.elementType=ze,n.lanes=a,n.stateNode={isHidden:!1},n}function od(n,i,a){return n=vn(6,n,null,i),n.lanes=a,n}function ad(n,i,a){return i=vn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Bw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hr(0),this.expirationTimes=Hr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ld(n,i,a,c,d,g,v,S,P){return n=new Bw(n,i,a,S,P),i===1?(i=1,g===!0&&(i|=8)):i=0,g=vn(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(g),n}function $w(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function tg(n){if(!n)return ti;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Gt(a))return kp(n,a,i)}return i}function ng(n,i,a,c,d,g,v,S,P){return n=ld(a,c,!0,n,d,g,v,S,P),n.context=tg(null),a=n.current,c=qt(),d=li(a),g=Rr(c,d),g.callback=i??null,ii(a,g,d),n.current.lanes=d,Wr(n,d,c),Xt(n,c),n}function Tu(n,i,a,c){var d=i.current,g=qt(),v=li(d);return a=tg(a),i.context===null?i.context=a:i.pendingContext=a,i=Rr(g,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=ii(d,i,v),n!==null&&(bn(n,d,v,g),Zl(n,d,v)),v}function Iu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ud(n,i){rg(n,i),(n=n.alternate)&&rg(n,i)}var ig=typeof reportError=="function"?reportError:function(n){console.error(n)};function cd(n){this._internalRoot=n}Su.prototype.render=cd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Tu(n,i,null,null)},Su.prototype.unmount=cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;es(function(){Tu(null,n,null,null)}),i[Er]=null}};function Su(n){this._internalRoot=n}Su.prototype.unstable_scheduleHydration=function(n){if(n){var i=Sl();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Hn.length&&i!==0&&i<Hn[a].priority;a++);Hn.splice(a,0,n),a===0&&Cl(n)}};function hd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function qw(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var z=Iu(v);g.call(z)}}var v=ng(i,c,n,0,null,!1,!1,"",sg);return n._reactRootContainer=v,n[Er]=v.current,da(n.nodeType===8?n.parentNode:n),es(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var z=Iu(P);S.call(z)}}var P=ld(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=P,n[Er]=P.current,da(n.nodeType===8?n.parentNode:n),es(function(){Tu(i,P,a,c)}),P}function Au(n,i,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var S=d;d=function(){var P=Iu(v);S.call(P)}}Tu(i,v,n,d)}else v=qw(a,i,n,d,c);return Iu(v)}Tl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=qr(i.pendingLanes);a!==0&&(Kr(i,a|1),Xt(i,qe()),!(Ve&6)&&(uo=qe()+500,ni()))}break;case 13:es(function(){var c=Sr(n,1);if(c!==null){var d=qt();bn(c,n,1,d)}}),ud(n,1)}},Ls=function(n){if(n.tag===13){var i=Sr(n,134217728);if(i!==null){var a=qt();bn(i,n,134217728,a)}ud(n,134217728)}},Il=function(n){if(n.tag===13){var i=li(n),a=Sr(n,i);if(a!==null){var c=qt();bn(a,n,i,c)}ud(n,i)}},Sl=function(){return Ne},Rl=function(n,i){var a=Ne;try{return Ne=n,i()}finally{Ne=a}},Rs=function(n,i,a){switch(i){case"input":if(Mo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=$l(c);if(!d)throw Error(t(90));vs(c),Mo(c,d)}}}break;case"textarea":Is(n,a);break;case"select":i=a.value,i!=null&&dr(n,!!a.multiple,i,!1)}},Li=nd,Ko=es;var Hw={usingClientEntryPoint:!1,Events:[ma,Ys,$l,$n,Wo,nd]},ka={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ww={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Yo(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Ui=Cu.inject(Ww),tn=Cu}catch{}}return Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hw,Jt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(i))throw Error(t(200));return $w(n,i,null,a)},Jt.createRoot=function(n,i){if(!hd(n))throw Error(t(299));var a=!1,c="",d=ig;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ld(n,1,!1,null,null,a,!1,c,d),n[Er]=i.current,da(n.nodeType===8?n.parentNode:n),new cd(i)},Jt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Yo(i),n=n===null?null:n.stateNode,n},Jt.flushSync=function(n){return es(n)},Jt.hydrate=function(n,i,a){if(!Ru(i))throw Error(t(200));return Au(null,n,i,!0,a)},Jt.hydrateRoot=function(n,i,a){if(!hd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=ig;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=ng(i,null,n,1,a??null,d,!1,g,v),n[Er]=i.current,da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Su(i)},Jt.render=function(n,i,a){if(!Ru(i))throw Error(t(200));return Au(null,n,i,!1,a)},Jt.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(es(function(){Au(null,null,n,!1,function(){n._reactRootContainer=null,n[Er]=null})}),!0):!1},Jt.unstable_batchedUpdates=nd,Jt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ru(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Au(n,i,a,!1,c)},Jt.version="18.3.1-next-f1338f8080-20240426",Jt}var fg;function eT(){if(fg)return pd.exports;fg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=Zw(),pd.exports}var pg;function tT(){if(pg)return Pu;pg=1;var r=eT();return Pu.createRoot=r.createRoot,Pu.hydrateRoot=r.hydrateRoot,Pu}var nT=tT();function rT(r){let[e,t]=H.useState(!0);function s(){t(f=>!f)}let[o,l]=H.useState(!1);function h(){l(f=>!f)}return q.jsxs("div",{children:[q.jsx("nav",{className:"naver",children:q.jsxs("div",{className:"nav1",children:[q.jsx("div",{className:"nav1-image"}),q.jsx("div",{children:q.jsx("h1",{children:"OTEX"})})]})}),o==!0?"":q.jsx("section",{className:"sign-up",id:"sign-up",children:q.jsxs("form",{id:"signup-form",onSubmit:r.submitLogin,children:[q.jsx("h1",{children:"SIGN UP"}),q.jsxs("div",{className:"sign-up2",children:[q.jsxs("div",{className:"sign-up3",children:[q.jsx("label",{for:"first-name",children:"First Name:"}),q.jsx("input",{type:"text",id:"first-name",placeholder:"Name",name:"firstName",required:!0,onChange:r.getData})]}),q.jsxs("div",{className:"sign-up3",children:[q.jsx("label",{for:"last-name",children:"Last Name:"}),q.jsx("input",{type:"text",id:"last-name",placeholder:"Surname",name:"surName",required:!0,onChange:r.getData})]})]}),q.jsxs("div",{className:"sign-up2",children:[q.jsxs("div",{className:"sign-up3",children:[q.jsx("label",{for:"username",children:"Username:"}),q.jsx("input",{type:"text",id:"username",placeholder:"Username",name:"userName",required:!0,onChange:r.getData})]}),q.jsxs("div",{className:"sign-up3",children:[q.jsx("label",{for:"email",children:"Email:"}),q.jsx("input",{type:"email",id:"email",placeholder:"Email",name:"email",required:!0,onChange:r.getData})]})]}),q.jsxs("div",{className:"sign-up2",children:[q.jsx("div",{className:"sign-up3",children:q.jsxs("div",{className:"phone",children:[q.jsx("label",{for:"phone",children:"Phone Number:"}),q.jsx("input",{type:"tel",id:"phone",placeholder:"Number",name:"telNumber",required:!0,onChange:r.getData})]})}),q.jsxs("div",{className:"sign-up3",children:[q.jsx("label",{for:"password",children:"Password:"}),q.jsx("input",{type:e==!0?"password":"text",id:"password",placeholder:"Password",name:"password",required:!0,onChange:r.getData}),q.jsx("i",{className:e==!0?"bi-eye-fill":"bi-eye-slash-fill",onClick:s})]})]}),q.jsxs("div",{className:"checkbox",children:[q.jsx("input",{type:"checkbox",id:"terms",required:!0}),q.jsx("label",{for:"terms",children:"I agree with the Terms and Conditions"})]}),q.jsxs("div",{className:"button",children:[q.jsx("button",{type:"submit",id:"button",children:"Sign Up"}),q.jsxs("p",{children:["Already have an account?"," ",q.jsx("a",{href:"#",onClick:h,children:"Log in"})]})]})]})}),o==!0?q.jsx("section",{className:"login",id:"login",children:q.jsxs("form",{id:"login-form",onSubmit:r.loginData,children:[q.jsx("h1",{className:"center",children:"Log in"}),q.jsx("div",{className:"login1",children:q.jsx("input",{type:"email",id:"login-username",placeholder:"Email",required:!0,onChange:r.getData,name:"email"})}),q.jsx("div",{className:"login1",children:q.jsxs("div",{className:"icon",children:[q.jsx("input",{type:e==!0?"password":"text",id:"login-password",placeholder:"Password",required:!0,onChange:r.getData,name:"password"}),q.jsx("i",{className:e==!0?"bi-eye-fill":"bi-eye-slash-fill",onClick:s})]})}),q.jsxs("div",{className:"login2",children:[q.jsxs("div",{className:"login2-1",children:[q.jsx("input",{type:"checkbox",id:"remember-me"}),q.jsx("label",{for:"remember-me",children:"Remember me"})]}),q.jsx("div",{children:q.jsx("a",{href:"#",onClick:r.fun,children:"Forgot password"})})]}),q.jsxs("div",{className:"login3",children:[q.jsx("button",{type:"submit",children:"Login"}),q.jsxs("p",{children:["Don't have an account?"," ",q.jsx("a",{href:"#",onClick:h,children:"Register"})]})]})]})}):""]})}var xa={},mg;function iT(){if(mg)return xa;mg=1,Object.defineProperty(xa,"__esModule",{value:!0}),xa.parse=h,xa.serialize=y;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,l=(()=>{const A=function(){};return A.prototype=Object.create(null),A})();function h(A,O){const F=new l,$=A.length;if($<2)return F;const j=(O==null?void 0:O.decode)||E;let W=0;do{const X=A.indexOf("=",W);if(X===-1)break;const Q=A.indexOf(";",W),ie=Q===-1?$:Q;if(X>ie){W=A.lastIndexOf(";",X-1)+1;continue}const Se=f(A,W,X),Te=p(A,X,Se),N=A.slice(Se,Te);if(F[N]===void 0){let I=f(A,X+1,ie),R=p(A,ie,I);const k=j(A.slice(I,R));F[N]=k}W=ie+1}while(W<$);return F}function f(A,O,F){do{const $=A.charCodeAt(O);if($!==32&&$!==9)return O}while(++O<F);return F}function p(A,O,F){for(;O>F;){const $=A.charCodeAt(--O);if($!==32&&$!==9)return O+1}return F}function y(A,O,F){const $=(F==null?void 0:F.encode)||encodeURIComponent;if(!r.test(A))throw new TypeError(`argument name is invalid: ${A}`);const j=$(O);if(!e.test(j))throw new TypeError(`argument val is invalid: ${O}`);let W=A+"="+j;if(!F)return W;if(F.maxAge!==void 0){if(!Number.isInteger(F.maxAge))throw new TypeError(`option maxAge is invalid: ${F.maxAge}`);W+="; Max-Age="+F.maxAge}if(F.domain){if(!t.test(F.domain))throw new TypeError(`option domain is invalid: ${F.domain}`);W+="; Domain="+F.domain}if(F.path){if(!s.test(F.path))throw new TypeError(`option path is invalid: ${F.path}`);W+="; Path="+F.path}if(F.expires){if(!T(F.expires)||!Number.isFinite(F.expires.valueOf()))throw new TypeError(`option expires is invalid: ${F.expires}`);W+="; Expires="+F.expires.toUTCString()}if(F.httpOnly&&(W+="; HttpOnly"),F.secure&&(W+="; Secure"),F.partitioned&&(W+="; Partitioned"),F.priority)switch(typeof F.priority=="string"?F.priority.toLowerCase():void 0){case"low":W+="; Priority=Low";break;case"medium":W+="; Priority=Medium";break;case"high":W+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${F.priority}`)}if(F.sameSite)switch(typeof F.sameSite=="string"?F.sameSite.toLowerCase():F.sameSite){case!0:case"strict":W+="; SameSite=Strict";break;case"lax":W+="; SameSite=Lax";break;case"none":W+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${F.sameSite}`)}return W}function E(A){if(A.indexOf("%")===-1)return A;try{return decodeURIComponent(A)}catch{return A}}function T(A){return o.call(A)==="[object Date]"}return xa}iT();/**
 * react-router v7.1.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gg="popstate";function sT(r={}){function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return Od("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:Ha(o)}return aT(e,t,null,r)}function Ze(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function sr(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oT(){return Math.random().toString(36).substring(2,10)}function yg(r,e){return{usr:r.state,key:r.key,idx:e}}function Od(r,e,t=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Po(e):e,state:t,key:e&&e.key||s||oT()}}function Ha({pathname:r="/",search:e="",hash:t=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(r+=t.charAt(0)==="#"?t:"#"+t),r}function Po(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substring(t),r=r.substring(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function aT(r,e,t,s={}){let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f="POP",p=null,y=E();y==null&&(y=0,h.replaceState({...h.state,idx:y},""));function E(){return(h.state||{idx:null}).idx}function T(){f="POP";let j=E(),W=j==null?null:j-y;y=j,p&&p({action:f,location:$.location,delta:W})}function A(j,W){f="PUSH";let X=Od($.location,j,W);y=E()+1;let Q=yg(X,y),ie=$.createHref(X);try{h.pushState(Q,"",ie)}catch(Se){if(Se instanceof DOMException&&Se.name==="DataCloneError")throw Se;o.location.assign(ie)}l&&p&&p({action:f,location:$.location,delta:1})}function O(j,W){f="REPLACE";let X=Od($.location,j,W);y=E();let Q=yg(X,y),ie=$.createHref(X);h.replaceState(Q,"",ie),l&&p&&p({action:f,location:$.location,delta:0})}function F(j){let W=o.location.origin!=="null"?o.location.origin:o.location.href,X=typeof j=="string"?j:Ha(j);return X=X.replace(/ $/,"%20"),Ze(W,`No window.location.(origin|href) available to create URL for href: ${X}`),new URL(X,W)}let $={get action(){return f},get location(){return r(o,h)},listen(j){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(gg,T),p=j,()=>{o.removeEventListener(gg,T),p=null}},createHref(j){return e(o,j)},createURL:F,encodeLocation(j){let W=F(j);return{pathname:W.pathname,search:W.search,hash:W.hash}},push:A,replace:O,go(j){return h.go(j)}};return $}function Hy(r,e,t="/"){return lT(r,e,t,!1)}function lT(r,e,t,s){let o=typeof e=="string"?Po(e):e,l=Ii(o.pathname||"/",t);if(l==null)return null;let h=Wy(r);uT(h);let f=null;for(let p=0;f==null&&p<h.length;++p){let y=ET(l);f=_T(h[p],y,s)}return f}function Wy(r,e=[],t=[],s=""){let o=(l,h,f)=>{let p={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};p.relativePath.startsWith("/")&&(Ze(p.relativePath.startsWith(s),`Absolute route path "${p.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(s.length));let y=xr([s,p.relativePath]),E=t.concat(p);l.children&&l.children.length>0&&(Ze(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${y}".`),Wy(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:gT(y,l.index),routesMeta:E})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let p of Ky(l.path))o(l,h,p)}),e}function Ky(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=Ky(s.join("/")),f=[];return f.push(...h.map(p=>p===""?l:[l,p].join("/"))),o&&f.push(...h),f.map(p=>r.startsWith("/")&&p===""?"/":p)}function uT(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:yT(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}var cT=/^:[\w-]+$/,hT=3,dT=2,fT=1,pT=10,mT=-2,_g=r=>r==="*";function gT(r,e){let t=r.split("/"),s=t.length;return t.some(_g)&&(s+=mT),e&&(s+=dT),t.filter(o=>!_g(o)).reduce((o,l)=>o+(cT.test(l)?hT:l===""?fT:pT),s)}function yT(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function _T(r,e,t=!1){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let p=s[f],y=f===s.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=Qu({path:p.relativePath,caseSensitive:p.caseSensitive,end:y},E),A=p.route;if(!T&&y&&t&&!s[s.length-1].route.index&&(T=Qu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},E)),!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:xr([l,T.pathname]),pathnameBase:ST(xr([l,T.pathnameBase])),route:A}),T.pathnameBase!=="/"&&(l=xr([l,T.pathnameBase]))}return h}function Qu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=vT(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((y,{paramName:E,isOptional:T},A)=>{if(E==="*"){let F=f[A]||"";h=l.slice(0,l.length-F.length).replace(/(.)\/+$/,"$1")}const O=f[A];return T&&!O?y[E]=void 0:y[E]=(O||"").replace(/%2F/g,"/"),y},{}),pathname:l,pathnameBase:h,pattern:r}}function vT(r,e=!1,t=!0){sr(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,p)=>(s.push({paramName:f,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function ET(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sr(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function Ii(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function wT(r,e="/"){let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?Po(r):r;return{pathname:t?t.startsWith("/")?t:TT(t,e):e,search:RT(s),hash:AT(o)}}function TT(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function yd(r,e,t,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function IT(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Gy(r){let e=IT(r);return e.map((t,s)=>s===e.length-1?t.pathname:t.pathnameBase)}function Qy(r,e,t,s=!1){let o;typeof r=="string"?o=Po(r):(o={...r},Ze(!o.pathname||!o.pathname.includes("?"),yd("?","pathname","search",o)),Ze(!o.pathname||!o.pathname.includes("#"),yd("#","pathname","hash",o)),Ze(!o.search||!o.search.includes("#"),yd("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let A=h.split("/");for(;A[0]==="..";)A.shift(),T-=1;o.pathname=A.join("/")}f=T>=0?e[T]:"/"}let p=wT(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(y||E)&&(p.pathname+="/"),p}var xr=r=>r.join("/").replace(/\/\/+/g,"/"),ST=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),RT=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,AT=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function CT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var Yy=["POST","PUT","PATCH","DELETE"];new Set(Yy);var PT=["GET",...Yy];new Set(PT);var ko=H.createContext(null);ko.displayName="DataRouter";var yc=H.createContext(null);yc.displayName="DataRouterState";var Xy=H.createContext({isTransitioning:!1});Xy.displayName="ViewTransition";var kT=H.createContext(new Map);kT.displayName="Fetchers";var NT=H.createContext(null);NT.displayName="Await";var ur=H.createContext(null);ur.displayName="Navigation";var tl=H.createContext(null);tl.displayName="Location";var Fr=H.createContext({outlet:null,matches:[],isDataRoute:!1});Fr.displayName="Route";var of=H.createContext(null);of.displayName="RouteError";function xT(r,{relative:e}={}){Ze(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:s}=H.useContext(ur),{hash:o,pathname:l,search:h}=rl(r,{relative:e}),f=l;return t!=="/"&&(f=l==="/"?t:xr([t,l])),s.createHref({pathname:f,search:h,hash:o})}function nl(){return H.useContext(tl)!=null}function ds(){return Ze(nl(),"useLocation() may be used only in the context of a <Router> component."),H.useContext(tl).location}var Jy="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Zy(r){H.useContext(ur).static||H.useLayoutEffect(r)}function e_(){let{isDataRoute:r}=H.useContext(Fr);return r?qT():DT()}function DT(){Ze(nl(),"useNavigate() may be used only in the context of a <Router> component.");let r=H.useContext(ko),{basename:e,navigator:t}=H.useContext(ur),{matches:s}=H.useContext(Fr),{pathname:o}=ds(),l=JSON.stringify(Gy(s)),h=H.useRef(!1);return Zy(()=>{h.current=!0}),H.useCallback((p,y={})=>{if(sr(h.current,Jy),!h.current)return;if(typeof p=="number"){t.go(p);return}let E=Qy(p,JSON.parse(l),o,y.relative==="path");r==null&&e!=="/"&&(E.pathname=E.pathname==="/"?e:xr([e,E.pathname])),(y.replace?t.replace:t.push)(E,y.state,y)},[e,t,l,o,r])}H.createContext(null);function rl(r,{relative:e}={}){let{matches:t}=H.useContext(Fr),{pathname:s}=ds(),o=JSON.stringify(Gy(t));return H.useMemo(()=>Qy(r,JSON.parse(o),s,e==="path"),[r,o,s,e])}function OT(r,e){return t_(r,e)}function t_(r,e,t,s){var W;Ze(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=H.useContext(ur),{matches:l}=H.useContext(Fr),h=l[l.length-1],f=h?h.params:{},p=h?h.pathname:"/",y=h?h.pathnameBase:"/",E=h&&h.route;{let X=E&&E.path||"";n_(p,!E||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let T=ds(),A;if(e){let X=typeof e=="string"?Po(e):e;Ze(y==="/"||((W=X.pathname)==null?void 0:W.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${X.pathname}" was given in the \`location\` prop.`),A=X}else A=T;let O=A.pathname||"/",F=O;if(y!=="/"){let X=y.replace(/^\//,"").split("/");F="/"+O.replace(/^\//,"").split("/").slice(X.length).join("/")}let $=Hy(r,{pathname:F});sr(E||$!=null,`No routes matched location "${A.pathname}${A.search}${A.hash}" `),sr($==null||$[$.length-1].route.element!==void 0||$[$.length-1].route.Component!==void 0||$[$.length-1].route.lazy!==void 0,`Matched leaf route at location "${A.pathname}${A.search}${A.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let j=FT($&&$.map(X=>Object.assign({},X,{params:Object.assign({},f,X.params),pathname:xr([y,o.encodeLocation?o.encodeLocation(X.pathname).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?y:xr([y,o.encodeLocation?o.encodeLocation(X.pathnameBase).pathname:X.pathnameBase])})),l,t,s);return e&&j?H.createElement(tl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...A},navigationType:"POP"}},j):j}function LT(){let r=$T(),e=CT(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:s},l={padding:"2px 4px",backgroundColor:s},h=null;return console.error("Error handled by React Router default ErrorBoundary:",r),h=H.createElement(H.Fragment,null,H.createElement("p",null,"💿 Hey developer 👋"),H.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",H.createElement("code",{style:l},"ErrorBoundary")," or"," ",H.createElement("code",{style:l},"errorElement")," prop on your route.")),H.createElement(H.Fragment,null,H.createElement("h2",null,"Unexpected Application Error!"),H.createElement("h3",{style:{fontStyle:"italic"}},e),t?H.createElement("pre",{style:o},t):null,h)}var VT=H.createElement(LT,null),bT=class extends H.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){console.error("React Router caught the following error during render",r,e)}render(){return this.state.error!==void 0?H.createElement(Fr.Provider,{value:this.props.routeContext},H.createElement(of.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function MT({routeContext:r,match:e,children:t}){let s=H.useContext(ko);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),H.createElement(Fr.Provider,{value:r},t)}function FT(r,e=[],t=null,s=null){if(r==null){if(!t)return null;if(t.errors)r=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let o=r,l=t==null?void 0:t.errors;if(l!=null){let p=o.findIndex(y=>y.route.id&&(l==null?void 0:l[y.route.id])!==void 0);Ze(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),o=o.slice(0,Math.min(o.length,p+1))}let h=!1,f=-1;if(t)for(let p=0;p<o.length;p++){let y=o[p];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(f=p),y.route.id){let{loaderData:E,errors:T}=t,A=y.route.loader&&!E.hasOwnProperty(y.route.id)&&(!T||T[y.route.id]===void 0);if(y.route.lazy||A){h=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((p,y,E)=>{let T,A=!1,O=null,F=null;t&&(T=l&&y.route.id?l[y.route.id]:void 0,O=y.route.errorElement||VT,h&&(f<0&&E===0?(n_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),A=!0,F=null):f===E&&(A=!0,F=y.route.hydrateFallbackElement||null)));let $=e.concat(o.slice(0,E+1)),j=()=>{let W;return T?W=O:A?W=F:y.route.Component?W=H.createElement(y.route.Component,null):y.route.element?W=y.route.element:W=p,H.createElement(MT,{match:y,routeContext:{outlet:p,matches:$,isDataRoute:t!=null},children:W})};return t&&(y.route.ErrorBoundary||y.route.errorElement||E===0)?H.createElement(bT,{location:t.location,revalidation:t.revalidation,component:O,error:T,children:j(),routeContext:{outlet:null,matches:$,isDataRoute:!0}}):j()},null)}function af(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function UT(r){let e=H.useContext(ko);return Ze(e,af(r)),e}function jT(r){let e=H.useContext(yc);return Ze(e,af(r)),e}function zT(r){let e=H.useContext(Fr);return Ze(e,af(r)),e}function lf(r){let e=zT(r),t=e.matches[e.matches.length-1];return Ze(t.route.id,`${r} can only be used on routes that contain a unique "id"`),t.route.id}function BT(){return lf("useRouteId")}function $T(){var s;let r=H.useContext(of),e=jT("useRouteError"),t=lf("useRouteError");return r!==void 0?r:(s=e.errors)==null?void 0:s[t]}function qT(){let{router:r}=UT("useNavigate"),e=lf("useNavigate"),t=H.useRef(!1);return Zy(()=>{t.current=!0}),H.useCallback(async(o,l={})=>{sr(t.current,Jy),t.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:e,...l}))},[r,e])}var vg={};function n_(r,e,t){!e&&!vg[r]&&(vg[r]=!0,sr(!1,t))}H.memo(HT);function HT({routes:r,future:e,state:t}){return t_(r,void 0,t,e)}function Oa(r){Ze(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function WT({basename:r="/",children:e=null,location:t,navigationType:s="POP",navigator:o,static:l=!1}){Ze(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=r.replace(/^\/*/,"/"),f=H.useMemo(()=>({basename:h,navigator:o,static:l,future:{}}),[h,o,l]);typeof t=="string"&&(t=Po(t));let{pathname:p="/",search:y="",hash:E="",state:T=null,key:A="default"}=t,O=H.useMemo(()=>{let F=Ii(p,h);return F==null?null:{location:{pathname:F,search:y,hash:E,state:T,key:A},navigationType:s}},[h,p,y,E,T,A,s]);return sr(O!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${E}" because it does not start with the basename, so the <Router> won't render anything.`),O==null?null:H.createElement(ur.Provider,{value:f},H.createElement(tl.Provider,{children:e,value:O}))}function KT({children:r,location:e}){return OT(Ld(r),e)}function Ld(r,e=[]){let t=[];return H.Children.forEach(r,(s,o)=>{if(!H.isValidElement(s))return;let l=[...e,o];if(s.type===H.Fragment){t.push.apply(t,Ld(s.props.children,l));return}Ze(s.type===Oa,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ze(!s.props.index||!s.props.children,"An index route cannot have child routes.");let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Ld(s.props.children,l)),t.push(h)}),t}var Mu="get",Fu="application/x-www-form-urlencoded";function _c(r){return r!=null&&typeof r.tagName=="string"}function GT(r){return _c(r)&&r.tagName.toLowerCase()==="button"}function QT(r){return _c(r)&&r.tagName.toLowerCase()==="form"}function YT(r){return _c(r)&&r.tagName.toLowerCase()==="input"}function XT(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function JT(r,e){return r.button===0&&(!e||e==="_self")&&!XT(r)}var ku=null;function ZT(){if(ku===null)try{new FormData(document.createElement("form"),0),ku=!1}catch{ku=!0}return ku}var eI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _d(r){return r!=null&&!eI.has(r)?(sr(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Fu}"`),null):r}function tI(r,e){let t,s,o,l,h;if(QT(r)){let f=r.getAttribute("action");s=f?Ii(f,e):null,t=r.getAttribute("method")||Mu,o=_d(r.getAttribute("enctype"))||Fu,l=new FormData(r)}else if(GT(r)||YT(r)&&(r.type==="submit"||r.type==="image")){let f=r.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||f.getAttribute("action");if(s=p?Ii(p,e):null,t=r.getAttribute("formmethod")||f.getAttribute("method")||Mu,o=_d(r.getAttribute("formenctype"))||_d(f.getAttribute("enctype"))||Fu,l=new FormData(f,r),!ZT()){let{name:y,type:E,value:T}=r;if(E==="image"){let A=y?`${y}.`:"";l.append(`${A}x`,"0"),l.append(`${A}y`,"0")}else y&&l.append(y,T)}}else{if(_c(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Mu,s=null,o=Fu,h=r}return l&&o==="text/plain"&&(h=l,l=void 0),{action:s,method:t.toLowerCase(),encType:o,formData:l,body:h}}function uf(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}async function nI(r,e){if(r.id in e)return e[r.id];try{let t=await import(r.module);return e[r.id]=t,t}catch(t){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rI(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function iI(r,e,t){let s=await Promise.all(r.map(async o=>{let l=e.routes[o.route.id];if(l){let h=await nI(l,t);return h.links?h.links():[]}return[]}));return lI(s.flat(1).filter(rI).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function Eg(r,e,t,s,o,l){let h=(p,y)=>t[y]?p.route.id!==t[y].route.id:!0,f=(p,y)=>{var E;return t[y].pathname!==p.pathname||((E=t[y].route.path)==null?void 0:E.endsWith("*"))&&t[y].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,y)=>h(p,y)||f(p,y)):l==="data"?e.filter((p,y)=>{var T;let E=s.routes[p.route.id];if(!E||!E.hasLoader)return!1;if(h(p,y)||f(p,y))return!0;if(p.route.shouldRevalidate){let A=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function sI(r,e){return oI(r.map(t=>{let s=e.routes[t.route.id];if(!s)return[];let o=[s.module];return s.imports&&(o=o.concat(s.imports)),o}).flat(1))}function oI(r){return[...new Set(r)]}function aI(r){let e={},t=Object.keys(r).sort();for(let s of t)e[s]=r[s];return e}function lI(r,e){let t=new Set;return new Set(e),r.reduce((s,o)=>{let l=JSON.stringify(aI(o));return t.has(l)||(t.add(l),s.push({key:l,link:o})),s},[])}function uI(r){let e=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function cI(){let r=H.useContext(ko);return uf(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function hI(){let r=H.useContext(yc);return uf(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var cf=H.createContext(void 0);cf.displayName="FrameworkContext";function r_(){let r=H.useContext(cf);return uf(r,"You must render this element inside a <HydratedRouter> element"),r}function dI(r,e){let t=H.useContext(cf),[s,o]=H.useState(!1),[l,h]=H.useState(!1),{onFocus:f,onBlur:p,onMouseEnter:y,onMouseLeave:E,onTouchStart:T}=e,A=H.useRef(null);H.useEffect(()=>{if(r==="render"&&h(!0),r==="viewport"){let $=W=>{W.forEach(X=>{h(X.isIntersecting)})},j=new IntersectionObserver($,{threshold:.5});return A.current&&j.observe(A.current),()=>{j.disconnect()}}},[r]),H.useEffect(()=>{if(s){let $=setTimeout(()=>{h(!0)},100);return()=>{clearTimeout($)}}},[s]);let O=()=>{o(!0)},F=()=>{o(!1),h(!1)};return t?r!=="intent"?[l,A,{}]:[l,A,{onFocus:Da(f,O),onBlur:Da(p,F),onMouseEnter:Da(y,O),onMouseLeave:Da(E,F),onTouchStart:Da(T,O)}]:[!1,A,{}]}function Da(r,e){return t=>{r&&r(t),t.defaultPrevented||e(t)}}function fI({page:r,...e}){let{router:t}=cI(),s=H.useMemo(()=>Hy(t.routes,r,t.basename),[t.routes,r,t.basename]);return s?H.createElement(mI,{page:r,matches:s,...e}):null}function pI(r){let{manifest:e,routeModules:t}=r_(),[s,o]=H.useState([]);return H.useEffect(()=>{let l=!1;return iI(r,e,t).then(h=>{l||o(h)}),()=>{l=!0}},[r,e,t]),s}function mI({page:r,matches:e,...t}){let s=ds(),{manifest:o,routeModules:l}=r_(),{loaderData:h,matches:f}=hI(),p=H.useMemo(()=>Eg(r,e,f,o,s,"data"),[r,e,f,o,s]),y=H.useMemo(()=>Eg(r,e,f,o,s,"assets"),[r,e,f,o,s]),E=H.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let O=new Set,F=!1;if(e.forEach(j=>{var X;let W=o.routes[j.route.id];!W||!W.hasLoader||(!p.some(Q=>Q.route.id===j.route.id)&&j.route.id in h&&((X=l[j.route.id])!=null&&X.shouldRevalidate)||W.hasClientLoader?F=!0:O.add(j.route.id))}),O.size===0)return[];let $=uI(r);return F&&O.size>0&&$.searchParams.set("_routes",e.filter(j=>O.has(j.route.id)).map(j=>j.route.id).join(",")),[$.pathname+$.search]},[h,s,o,p,e,r,l]),T=H.useMemo(()=>sI(y,o),[y,o]),A=pI(y);return H.createElement(H.Fragment,null,E.map(O=>H.createElement("link",{key:O,rel:"prefetch",as:"fetch",href:O,...t})),T.map(O=>H.createElement("link",{key:O,rel:"modulepreload",href:O,...t})),A.map(({key:O,link:F})=>H.createElement("link",{key:O,...F})))}function gI(...r){return e=>{r.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var i_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{i_&&(window.__reactRouterVersion="7.1.2")}catch{}function yI({basename:r,children:e,window:t}){let s=H.useRef();s.current==null&&(s.current=sT({window:t,v5Compat:!0}));let o=s.current,[l,h]=H.useState({action:o.action,location:o.location}),f=H.useCallback(p=>{H.startTransition(()=>h(p))},[h]);return H.useLayoutEffect(()=>o.listen(f),[o,f]),H.createElement(WT,{basename:r,children:e,location:l.location,navigationType:l.action,navigator:o})}var s_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,o_=H.forwardRef(function({onClick:e,discover:t="render",prefetch:s="none",relative:o,reloadDocument:l,replace:h,state:f,target:p,to:y,preventScrollReset:E,viewTransition:T,...A},O){let{basename:F}=H.useContext(ur),$=typeof y=="string"&&s_.test(y),j,W=!1;if(typeof y=="string"&&$&&(j=y,i_))try{let R=new URL(window.location.href),k=y.startsWith("//")?new URL(R.protocol+y):new URL(y),D=Ii(k.pathname,F);k.origin===R.origin&&D!=null?y=D+k.search+k.hash:W=!0}catch{sr(!1,`<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=xT(y,{relative:o}),[Q,ie,Se]=dI(s,A),Te=wI(y,{replace:h,state:f,target:p,preventScrollReset:E,relative:o,viewTransition:T});function N(R){e&&e(R),R.defaultPrevented||Te(R)}let I=H.createElement("a",{...A,...Se,href:j||X,onClick:W||l?e:N,ref:gI(O,ie),target:p,"data-discover":!$&&t==="render"?"true":void 0});return Q&&!$?H.createElement(H.Fragment,null,I,H.createElement(fI,{page:X})):I});o_.displayName="Link";var _I=H.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:s="",end:o=!1,style:l,to:h,viewTransition:f,children:p,...y},E){let T=rl(h,{relative:y.relative}),A=ds(),O=H.useContext(yc),{navigator:F,basename:$}=H.useContext(ur),j=O!=null&&AI(T)&&f===!0,W=F.encodeLocation?F.encodeLocation(T).pathname:T.pathname,X=A.pathname,Q=O&&O.navigation&&O.navigation.location?O.navigation.location.pathname:null;t||(X=X.toLowerCase(),Q=Q?Q.toLowerCase():null,W=W.toLowerCase()),Q&&$&&(Q=Ii(Q,$)||Q);const ie=W!=="/"&&W.endsWith("/")?W.length-1:W.length;let Se=X===W||!o&&X.startsWith(W)&&X.charAt(ie)==="/",Te=Q!=null&&(Q===W||!o&&Q.startsWith(W)&&Q.charAt(W.length)==="/"),N={isActive:Se,isPending:Te,isTransitioning:j},I=Se?e:void 0,R;typeof s=="function"?R=s(N):R=[s,Se?"active":null,Te?"pending":null,j?"transitioning":null].filter(Boolean).join(" ");let k=typeof l=="function"?l(N):l;return H.createElement(o_,{...y,"aria-current":I,className:R,ref:E,style:k,to:h,viewTransition:f},typeof p=="function"?p(N):p)});_I.displayName="NavLink";var vI=H.forwardRef(({discover:r="render",fetcherKey:e,navigate:t,reloadDocument:s,replace:o,state:l,method:h=Mu,action:f,onSubmit:p,relative:y,preventScrollReset:E,viewTransition:T,...A},O)=>{let F=SI(),$=RI(f,{relative:y}),j=h.toLowerCase()==="get"?"get":"post",W=typeof f=="string"&&s_.test(f),X=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let ie=Q.nativeEvent.submitter,Se=(ie==null?void 0:ie.getAttribute("formmethod"))||h;F(ie||Q.currentTarget,{fetcherKey:e,method:Se,navigate:t,replace:o,state:l,relative:y,preventScrollReset:E,viewTransition:T})};return H.createElement("form",{ref:O,method:j,action:$,onSubmit:s?p:X,...A,"data-discover":!W&&r==="render"?"true":void 0})});vI.displayName="Form";function EI(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function a_(r){let e=H.useContext(ko);return Ze(e,EI(r)),e}function wI(r,{target:e,replace:t,state:s,preventScrollReset:o,relative:l,viewTransition:h}={}){let f=e_(),p=ds(),y=rl(r,{relative:l});return H.useCallback(E=>{if(JT(E,e)){E.preventDefault();let T=t!==void 0?t:Ha(p)===Ha(y);f(r,{replace:T,state:s,preventScrollReset:o,relative:l,viewTransition:h})}},[p,f,y,t,s,e,r,o,l,h])}var TI=0,II=()=>`__${String(++TI)}__`;function SI(){let{router:r}=a_("useSubmit"),{basename:e}=H.useContext(ur),t=BT();return H.useCallback(async(s,o={})=>{let{action:l,method:h,encType:f,formData:p,body:y}=tI(s,e);if(o.navigate===!1){let E=o.fetcherKey||II();await r.fetch(E,t,o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,flushSync:o.flushSync})}else await r.navigate(o.action||l,{preventScrollReset:o.preventScrollReset,formData:p,body:y,formMethod:o.method||h,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:t,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,e,t])}function RI(r,{relative:e}={}){let{basename:t}=H.useContext(ur),s=H.useContext(Fr);Ze(s,"useFormAction must be used inside a RouteContext");let[o]=s.matches.slice(-1),l={...rl(r||".",{relative:e})},h=ds();if(r==null){l.search=h.search;let f=new URLSearchParams(l.search),p=f.getAll("index");if(p.some(E=>E==="")){f.delete("index"),p.filter(T=>T).forEach(T=>f.append("index",T));let E=f.toString();l.search=E?`?${E}`:""}}return(!r||r===".")&&o.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:xr([t,l.pathname])),Ha(l)}function AI(r,e={}){let t=H.useContext(Xy);Ze(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=a_("useViewTransitionState"),o=rl(r,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ii(t.currentLocation.pathname,s)||t.currentLocation.pathname,h=Ii(t.nextLocation.pathname,s)||t.nextLocation.pathname;return Qu(o.pathname,h)!=null||Qu(o.pathname,l)!=null}new TextEncoder;function CI(r){H.useState(!0);const[e,t]=H.useState(!0);function s(){t(o=>!o)}return q.jsxs("div",{children:[q.jsx("nav",{className:"naver",children:q.jsxs("div",{className:"nav1",children:[q.jsx("div",{className:"nav1-image"}),q.jsx("div",{className:"it",children:q.jsx("h1",{children:"OTEX"})}),q.jsx("div",{className:"nav-icon",onClick:r.settings,children:q.jsx("i",{className:"bi-gear-fill"})})]})}),q.jsx("div",{children:q.jsxs("p",{children:["Hello ",r.saveName]})}),q.jsxs("div",{className:"buy",children:[q.jsxs("div",{children:[q.jsxs("p",{children:["Available balance"," ",q.jsx("i",{className:e==!0?"bi-eye-fill":"bi-eye-slash-fill",onClick:s})]}),q.jsxs("p",{children:["₦",e?"0.00":"****"]})]}),q.jsx("div",{className:"inp"})]}),q.jsxs("div",{className:"sim",children:[q.jsx("div",{children:q.jsx("h1",{children:"Select your network provider"})}),q.jsxs("div",{className:"sim1",children:[q.jsxs("div",{className:"sim1-1",children:[q.jsx("div",{className:"sim-card1"}),q.jsx("div",{className:"sim-card2"})]}),q.jsxs("div",{className:"sim1-1",children:[q.jsx("div",{className:"sim-card3"}),q.jsx("div",{className:"sim-card4"})]})]})]}),q.jsx("div",{className:"whatsapp",onClick:()=>window.location.href="https://chat.whatsapp.com/FOO9KdSgUQOF1yB0t374qX"}),q.jsx("div",{className:"whp",children:q.jsxs("p",{children:["join our whatsapp ",q.jsx("br",{}),"group for update's"]})})]})}var wg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},PI=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],p=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(p>>10)),e[s++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},u_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,p=o+2<r.length,y=p?r[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let A=(f&15)<<2|y>>6,O=y&63;p||(O=64,h||(A=64)),s.push(t[E],t[T],t[A],t[O])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(l_(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):PI(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const y=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new kI;const A=l<<2|f>>4;if(s.push(A),y!==64){const O=f<<4&240|y>>2;if(s.push(O),T!==64){const F=y<<6&192|T;s.push(F)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class kI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NI=function(r){const e=l_(r);return u_.encodeByteArray(e,!0)},Yu=function(r){return NI(r).replace(/\./g,"")},c_=function(r){try{return u_.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI=()=>xI().__FIREBASE_DEFAULTS__,OI=()=>{if(typeof process>"u"||typeof wg>"u")return;const r=wg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},LI=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&c_(r[1]);return e&&JSON.parse(e)},vc=()=>{try{return DI()||OI()||LI()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},h_=r=>{var e,t;return(t=(e=vc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},VI=r=>{const e=h_(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},d_=()=>{var r;return(r=vc())===null||r===void 0?void 0:r.config},f_=r=>{var e;return(e=vc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Yu(JSON.stringify(t)),Yu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function UI(){var r;const e=(r=vc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function p_(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function zI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BI(){const r=jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function $I(){return!UI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function m_(){try{return typeof indexedDB=="object"}catch{return!1}}function g_(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function qI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="FirebaseError";class zn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=HI,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fs.prototype.create)}}class fs{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?WI(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new zn(o,f,s)}}function WI(r,e){return r.replace(KI,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const KI=/\{\$([^}]+)}/g;function GI(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Wa(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(Tg(l)&&Tg(h)){if(!Wa(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function Tg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function La(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function Va(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function QI(r,e){const t=new YI(r,e);return t.subscribe.bind(t)}class YI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");XI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=vd),o.error===void 0&&(o.error=vd),o.complete===void 0&&(o.complete=vd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XI(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function vd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=1e3,ZI=2,eS=4*60*60*1e3,tS=.5;function Ig(r,e=JI,t=ZI){const s=e*Math.pow(t,r),o=Math.round(tS*s*(Math.random()-.5)*2);return Math.min(eS,s+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(r){return r&&r._delegate?r._delegate:r}class Un{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new bI;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iS(e))try{this.getOrInitializeService({instanceIdentifier:is})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=is){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=is){return this.instances.has(e)}getOptions(e=is){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:rS(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=is){return this.component?this.component.multipleInstances?e:is:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rS(r){return r===is?void 0:r}function iS(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nS(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Pe||(Pe={}));const oS={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},aS=Pe.INFO,lS={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},uS=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=lS[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=aS,this._logHandler=uS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const cS=(r,e)=>e.some(t=>r instanceof t);let Sg,Rg;function hS(){return Sg||(Sg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dS(){return Rg||(Rg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const y_=new WeakMap,Vd=new WeakMap,__=new WeakMap,Ed=new WeakMap,hf=new WeakMap;function fS(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(_i(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&y_.set(t,r)}).catch(()=>{}),hf.set(e,r),e}function pS(r){if(Vd.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Vd.set(r,e)}let bd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Vd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||__.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function mS(r){bd=r(bd)}function gS(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(wd(this),e,...t);return __.set(s,e.sort?e.sort():[e]),_i(s)}:dS().includes(r)?function(...e){return r.apply(wd(this),e),_i(y_.get(this))}:function(...e){return _i(r.apply(wd(this),e))}}function yS(r){return typeof r=="function"?gS(r):(r instanceof IDBTransaction&&pS(r),cS(r,hS())?new Proxy(r,bd):r)}function _i(r){if(r instanceof IDBRequest)return fS(r);if(Ed.has(r))return Ed.get(r);const e=yS(r);return e!==r&&(Ed.set(r,e),hf.set(e,r)),e}const wd=r=>hf.get(r);function v_(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=_i(h);return s&&h.addEventListener("upgradeneeded",p=>{s(_i(h.result),p.oldVersion,p.newVersion,_i(h.transaction),p)}),t&&h.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const _S=["get","getKey","getAll","getAllKeys","count"],vS=["put","add","delete","clear"],Td=new Map;function Ag(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Td.get(e))return Td.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=vS.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||_S.includes(t)))return;const l=async function(h,...f){const p=this.transaction(h,o?"readwrite":"readonly");let y=p.store;return s&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&p.done]))[0]};return Td.set(e,l),l}mS(r=>({...r,get:(e,t,s)=>Ag(e,t)||r.get(e,t,s),has:(e,t)=>!!Ag(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wS(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function wS(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Md="@firebase/app",Cg="0.10.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Ec("@firebase/app"),TS="@firebase/app-compat",IS="@firebase/analytics-compat",SS="@firebase/analytics",RS="@firebase/app-check-compat",AS="@firebase/app-check",CS="@firebase/auth",PS="@firebase/auth-compat",kS="@firebase/database",NS="@firebase/data-connect",xS="@firebase/database-compat",DS="@firebase/functions",OS="@firebase/functions-compat",LS="@firebase/installations",VS="@firebase/installations-compat",bS="@firebase/messaging",MS="@firebase/messaging-compat",FS="@firebase/performance",US="@firebase/performance-compat",jS="@firebase/remote-config",zS="@firebase/remote-config-compat",BS="@firebase/storage",$S="@firebase/storage-compat",qS="@firebase/firestore",HS="@firebase/vertexai",WS="@firebase/firestore-compat",KS="firebase",GS="11.2.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="[DEFAULT]",QS={[Md]:"fire-core",[TS]:"fire-core-compat",[SS]:"fire-analytics",[IS]:"fire-analytics-compat",[AS]:"fire-app-check",[RS]:"fire-app-check-compat",[CS]:"fire-auth",[PS]:"fire-auth-compat",[kS]:"fire-rtdb",[NS]:"fire-data-connect",[xS]:"fire-rtdb-compat",[DS]:"fire-fn",[OS]:"fire-fn-compat",[LS]:"fire-iid",[VS]:"fire-iid-compat",[bS]:"fire-fcm",[MS]:"fire-fcm-compat",[FS]:"fire-perf",[US]:"fire-perf-compat",[jS]:"fire-rc",[zS]:"fire-rc-compat",[BS]:"fire-gcs",[$S]:"fire-gcs-compat",[qS]:"fire-fst",[WS]:"fire-fst-compat",[HS]:"fire-vertex","fire-js":"fire-js",[KS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xu=new Map,YS=new Map,Ud=new Map;function Pg(r,e){try{r.container.addComponent(e)}catch(t){Lr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function or(r){const e=r.name;if(Ud.has(e))return Lr.debug(`There were multiple attempts to register component ${e}.`),!1;Ud.set(e,r);for(const t of Xu.values())Pg(t,r);for(const t of YS.values())Pg(t,r);return!0}function ps(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function er(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vi=new fs("app","Firebase",XS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=GS;function E_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw vi.create("bad-app-name",{appName:String(o)});if(t||(t=d_()),!t)throw vi.create("no-options");const l=Xu.get(o);if(l){if(Wa(t,l.options)&&Wa(s,l.config))return l;throw vi.create("duplicate-app",{appName:o})}const h=new sS(o);for(const p of Ud.values())h.addComponent(p);const f=new JS(t,s,h);return Xu.set(o,f),f}function df(r=Fd){const e=Xu.get(r);if(!e&&r===Fd&&d_())return E_();if(!e)throw vi.create("no-app",{appName:r});return e}function wn(r,e,t){var s;let o=(s=QS[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Lr.warn(f.join(" "));return}or(new Un(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS="firebase-heartbeat-database",e0=1,Ka="firebase-heartbeat-store";let Id=null;function w_(){return Id||(Id=v_(ZS,e0,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Ka)}catch(t){console.warn(t)}}}}).catch(r=>{throw vi.create("idb-open",{originalErrorMessage:r.message})})),Id}async function t0(r){try{const t=(await w_()).transaction(Ka),s=await t.objectStore(Ka).get(T_(r));return await t.done,s}catch(e){if(e instanceof zn)Lr.warn(e.message);else{const t=vi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Lr.warn(t.message)}}}async function kg(r,e){try{const s=(await w_()).transaction(Ka,"readwrite");await s.objectStore(Ka).put(e,T_(r)),await s.done}catch(t){if(t instanceof zn)Lr.warn(t.message);else{const s=vi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Lr.warn(s.message)}}}function T_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=1024,r0=30*24*60*60*1e3;class i0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new o0(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ng();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=r0}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Lr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ng(),{heartbeatsToSend:s,unsentEntries:o}=s0(this._heartbeatsCache.heartbeats),l=Yu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Lr.warn(t),""}}}function Ng(){return new Date().toISOString().substring(0,10)}function s0(r,e=n0){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),xg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),xg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class o0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return m_()?g_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await t0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return kg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return kg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function xg(r){return Yu(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(r){or(new Un("platform-logger",e=>new ES(e),"PRIVATE")),or(new Un("heartbeat",e=>new i0(e),"PRIVATE")),wn(Md,Cg,r),wn(Md,Cg,"esm2017"),wn("fire-js","")}a0("");var Dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ei,I_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,I){function R(){}R.prototype=I.prototype,N.D=I.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(k,D,V){for(var C=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)C[nt-2]=arguments[nt];return I.prototype[D].apply(k,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(N,I,R){R||(R=0);var k=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)k[D]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(D=0;16>D;++D)k[D]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=N.g[0],R=N.g[1],D=N.g[2];var V=N.g[3],C=I+(V^R&(D^V))+k[0]+3614090360&4294967295;I=R+(C<<7&4294967295|C>>>25),C=V+(D^I&(R^D))+k[1]+3905402710&4294967295,V=I+(C<<12&4294967295|C>>>20),C=D+(R^V&(I^R))+k[2]+606105819&4294967295,D=V+(C<<17&4294967295|C>>>15),C=R+(I^D&(V^I))+k[3]+3250441966&4294967295,R=D+(C<<22&4294967295|C>>>10),C=I+(V^R&(D^V))+k[4]+4118548399&4294967295,I=R+(C<<7&4294967295|C>>>25),C=V+(D^I&(R^D))+k[5]+1200080426&4294967295,V=I+(C<<12&4294967295|C>>>20),C=D+(R^V&(I^R))+k[6]+2821735955&4294967295,D=V+(C<<17&4294967295|C>>>15),C=R+(I^D&(V^I))+k[7]+4249261313&4294967295,R=D+(C<<22&4294967295|C>>>10),C=I+(V^R&(D^V))+k[8]+1770035416&4294967295,I=R+(C<<7&4294967295|C>>>25),C=V+(D^I&(R^D))+k[9]+2336552879&4294967295,V=I+(C<<12&4294967295|C>>>20),C=D+(R^V&(I^R))+k[10]+4294925233&4294967295,D=V+(C<<17&4294967295|C>>>15),C=R+(I^D&(V^I))+k[11]+2304563134&4294967295,R=D+(C<<22&4294967295|C>>>10),C=I+(V^R&(D^V))+k[12]+1804603682&4294967295,I=R+(C<<7&4294967295|C>>>25),C=V+(D^I&(R^D))+k[13]+4254626195&4294967295,V=I+(C<<12&4294967295|C>>>20),C=D+(R^V&(I^R))+k[14]+2792965006&4294967295,D=V+(C<<17&4294967295|C>>>15),C=R+(I^D&(V^I))+k[15]+1236535329&4294967295,R=D+(C<<22&4294967295|C>>>10),C=I+(D^V&(R^D))+k[1]+4129170786&4294967295,I=R+(C<<5&4294967295|C>>>27),C=V+(R^D&(I^R))+k[6]+3225465664&4294967295,V=I+(C<<9&4294967295|C>>>23),C=D+(I^R&(V^I))+k[11]+643717713&4294967295,D=V+(C<<14&4294967295|C>>>18),C=R+(V^I&(D^V))+k[0]+3921069994&4294967295,R=D+(C<<20&4294967295|C>>>12),C=I+(D^V&(R^D))+k[5]+3593408605&4294967295,I=R+(C<<5&4294967295|C>>>27),C=V+(R^D&(I^R))+k[10]+38016083&4294967295,V=I+(C<<9&4294967295|C>>>23),C=D+(I^R&(V^I))+k[15]+3634488961&4294967295,D=V+(C<<14&4294967295|C>>>18),C=R+(V^I&(D^V))+k[4]+3889429448&4294967295,R=D+(C<<20&4294967295|C>>>12),C=I+(D^V&(R^D))+k[9]+568446438&4294967295,I=R+(C<<5&4294967295|C>>>27),C=V+(R^D&(I^R))+k[14]+3275163606&4294967295,V=I+(C<<9&4294967295|C>>>23),C=D+(I^R&(V^I))+k[3]+4107603335&4294967295,D=V+(C<<14&4294967295|C>>>18),C=R+(V^I&(D^V))+k[8]+1163531501&4294967295,R=D+(C<<20&4294967295|C>>>12),C=I+(D^V&(R^D))+k[13]+2850285829&4294967295,I=R+(C<<5&4294967295|C>>>27),C=V+(R^D&(I^R))+k[2]+4243563512&4294967295,V=I+(C<<9&4294967295|C>>>23),C=D+(I^R&(V^I))+k[7]+1735328473&4294967295,D=V+(C<<14&4294967295|C>>>18),C=R+(V^I&(D^V))+k[12]+2368359562&4294967295,R=D+(C<<20&4294967295|C>>>12),C=I+(R^D^V)+k[5]+4294588738&4294967295,I=R+(C<<4&4294967295|C>>>28),C=V+(I^R^D)+k[8]+2272392833&4294967295,V=I+(C<<11&4294967295|C>>>21),C=D+(V^I^R)+k[11]+1839030562&4294967295,D=V+(C<<16&4294967295|C>>>16),C=R+(D^V^I)+k[14]+4259657740&4294967295,R=D+(C<<23&4294967295|C>>>9),C=I+(R^D^V)+k[1]+2763975236&4294967295,I=R+(C<<4&4294967295|C>>>28),C=V+(I^R^D)+k[4]+1272893353&4294967295,V=I+(C<<11&4294967295|C>>>21),C=D+(V^I^R)+k[7]+4139469664&4294967295,D=V+(C<<16&4294967295|C>>>16),C=R+(D^V^I)+k[10]+3200236656&4294967295,R=D+(C<<23&4294967295|C>>>9),C=I+(R^D^V)+k[13]+681279174&4294967295,I=R+(C<<4&4294967295|C>>>28),C=V+(I^R^D)+k[0]+3936430074&4294967295,V=I+(C<<11&4294967295|C>>>21),C=D+(V^I^R)+k[3]+3572445317&4294967295,D=V+(C<<16&4294967295|C>>>16),C=R+(D^V^I)+k[6]+76029189&4294967295,R=D+(C<<23&4294967295|C>>>9),C=I+(R^D^V)+k[9]+3654602809&4294967295,I=R+(C<<4&4294967295|C>>>28),C=V+(I^R^D)+k[12]+3873151461&4294967295,V=I+(C<<11&4294967295|C>>>21),C=D+(V^I^R)+k[15]+530742520&4294967295,D=V+(C<<16&4294967295|C>>>16),C=R+(D^V^I)+k[2]+3299628645&4294967295,R=D+(C<<23&4294967295|C>>>9),C=I+(D^(R|~V))+k[0]+4096336452&4294967295,I=R+(C<<6&4294967295|C>>>26),C=V+(R^(I|~D))+k[7]+1126891415&4294967295,V=I+(C<<10&4294967295|C>>>22),C=D+(I^(V|~R))+k[14]+2878612391&4294967295,D=V+(C<<15&4294967295|C>>>17),C=R+(V^(D|~I))+k[5]+4237533241&4294967295,R=D+(C<<21&4294967295|C>>>11),C=I+(D^(R|~V))+k[12]+1700485571&4294967295,I=R+(C<<6&4294967295|C>>>26),C=V+(R^(I|~D))+k[3]+2399980690&4294967295,V=I+(C<<10&4294967295|C>>>22),C=D+(I^(V|~R))+k[10]+4293915773&4294967295,D=V+(C<<15&4294967295|C>>>17),C=R+(V^(D|~I))+k[1]+2240044497&4294967295,R=D+(C<<21&4294967295|C>>>11),C=I+(D^(R|~V))+k[8]+1873313359&4294967295,I=R+(C<<6&4294967295|C>>>26),C=V+(R^(I|~D))+k[15]+4264355552&4294967295,V=I+(C<<10&4294967295|C>>>22),C=D+(I^(V|~R))+k[6]+2734768916&4294967295,D=V+(C<<15&4294967295|C>>>17),C=R+(V^(D|~I))+k[13]+1309151649&4294967295,R=D+(C<<21&4294967295|C>>>11),C=I+(D^(R|~V))+k[4]+4149444226&4294967295,I=R+(C<<6&4294967295|C>>>26),C=V+(R^(I|~D))+k[11]+3174756917&4294967295,V=I+(C<<10&4294967295|C>>>22),C=D+(I^(V|~R))+k[2]+718787259&4294967295,D=V+(C<<15&4294967295|C>>>17),C=R+(V^(D|~I))+k[9]+3951481745&4294967295,N.g[0]=N.g[0]+I&4294967295,N.g[1]=N.g[1]+(D+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+D&4294967295,N.g[3]=N.g[3]+V&4294967295}s.prototype.u=function(N,I){I===void 0&&(I=N.length);for(var R=I-this.blockSize,k=this.B,D=this.h,V=0;V<I;){if(D==0)for(;V<=R;)o(this,N,V),V+=this.blockSize;if(typeof N=="string"){for(;V<I;)if(k[D++]=N.charCodeAt(V++),D==this.blockSize){o(this,k),D=0;break}}else for(;V<I;)if(k[D++]=N[V++],D==this.blockSize){o(this,k),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var I=1;I<N.length-8;++I)N[I]=0;var R=8*this.o;for(I=N.length-8;I<N.length;++I)N[I]=R&255,R/=256;for(this.u(N),N=Array(16),I=R=0;4>I;++I)for(var k=0;32>k;k+=8)N[R++]=this.g[I]>>>k&255;return N};function l(N,I){var R=f;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=I(N)}function h(N,I){this.h=I;for(var R=[],k=!0,D=N.length-1;0<=D;D--){var V=N[D]|0;k&&V==I||(R[D]=V,k=!1)}this.g=R}var f={};function p(N){return-128<=N&&128>N?l(N,function(I){return new h([I|0],0>I?-1:0)}):new h([N|0],0>N?-1:0)}function y(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return j(y(-N));for(var I=[],R=1,k=0;N>=R;k++)I[k]=N/R|0,R*=4294967296;return new h(I,0)}function E(N,I){if(N.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N.charAt(0)=="-")return j(E(N.substring(1),I));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=y(Math.pow(I,8)),k=T,D=0;D<N.length;D+=8){var V=Math.min(8,N.length-D),C=parseInt(N.substring(D,D+V),I);8>V?(V=y(Math.pow(I,V)),k=k.j(V).add(y(C))):(k=k.j(R),k=k.add(y(C)))}return k}var T=p(0),A=p(1),O=p(16777216);r=h.prototype,r.m=function(){if($(this))return-j(this).m();for(var N=0,I=1,R=0;R<this.g.length;R++){var k=this.i(R);N+=(0<=k?k:4294967296+k)*I,I*=4294967296}return N},r.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(F(this))return"0";if($(this))return"-"+j(this).toString(N);for(var I=y(Math.pow(N,6)),R=this,k="";;){var D=ie(R,I).g;R=W(R,D.j(I));var V=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=D,F(R))return V+k;for(;6>V.length;)V="0"+V;k=V+k}},r.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function F(N){if(N.h!=0)return!1;for(var I=0;I<N.g.length;I++)if(N.g[I]!=0)return!1;return!0}function $(N){return N.h==-1}r.l=function(N){return N=W(this,N),$(N)?-1:F(N)?0:1};function j(N){for(var I=N.g.length,R=[],k=0;k<I;k++)R[k]=~N.g[k];return new h(R,~N.h).add(A)}r.abs=function(){return $(this)?j(this):this},r.add=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],k=0,D=0;D<=I;D++){var V=k+(this.i(D)&65535)+(N.i(D)&65535),C=(V>>>16)+(this.i(D)>>>16)+(N.i(D)>>>16);k=C>>>16,V&=65535,C&=65535,R[D]=C<<16|V}return new h(R,R[R.length-1]&-2147483648?-1:0)};function W(N,I){return N.add(j(I))}r.j=function(N){if(F(this)||F(N))return T;if($(this))return $(N)?j(this).j(j(N)):j(j(this).j(N));if($(N))return j(this.j(j(N)));if(0>this.l(O)&&0>N.l(O))return y(this.m()*N.m());for(var I=this.g.length+N.g.length,R=[],k=0;k<2*I;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(var D=0;D<N.g.length;D++){var V=this.i(k)>>>16,C=this.i(k)&65535,nt=N.i(D)>>>16,xt=N.i(D)&65535;R[2*k+2*D]+=C*xt,X(R,2*k+2*D),R[2*k+2*D+1]+=V*xt,X(R,2*k+2*D+1),R[2*k+2*D+1]+=C*nt,X(R,2*k+2*D+1),R[2*k+2*D+2]+=V*nt,X(R,2*k+2*D+2)}for(k=0;k<I;k++)R[k]=R[2*k+1]<<16|R[2*k];for(k=I;k<2*I;k++)R[k]=0;return new h(R,0)};function X(N,I){for(;(N[I]&65535)!=N[I];)N[I+1]+=N[I]>>>16,N[I]&=65535,I++}function Q(N,I){this.g=N,this.h=I}function ie(N,I){if(F(I))throw Error("division by zero");if(F(N))return new Q(T,T);if($(N))return I=ie(j(N),I),new Q(j(I.g),j(I.h));if($(I))return I=ie(N,j(I)),new Q(j(I.g),I.h);if(30<N.g.length){if($(N)||$(I))throw Error("slowDivide_ only works with positive integers.");for(var R=A,k=I;0>=k.l(N);)R=Se(R),k=Se(k);var D=Te(R,1),V=Te(k,1);for(k=Te(k,2),R=Te(R,2);!F(k);){var C=V.add(k);0>=C.l(N)&&(D=D.add(R),V=C),k=Te(k,1),R=Te(R,1)}return I=W(N,D.j(I)),new Q(D,I)}for(D=T;0<=N.l(I);){for(R=Math.max(1,Math.floor(N.m()/I.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),V=y(R),C=V.j(I);$(C)||0<C.l(N);)R-=k,V=y(R),C=V.j(I);F(V)&&(V=A),D=D.add(V),N=W(N,C)}return new Q(D,N)}r.A=function(N){return ie(this,N).h},r.and=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)&N.i(k);return new h(R,this.h&N.h)},r.or=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)|N.i(k);return new h(R,this.h|N.h)},r.xor=function(N){for(var I=Math.max(this.g.length,N.g.length),R=[],k=0;k<I;k++)R[k]=this.i(k)^N.i(k);return new h(R,this.h^N.h)};function Se(N){for(var I=N.g.length+1,R=[],k=0;k<I;k++)R[k]=N.i(k)<<1|N.i(k-1)>>>31;return new h(R,N.h)}function Te(N,I){var R=I>>5;I%=32;for(var k=N.g.length-R,D=[],V=0;V<k;V++)D[V]=0<I?N.i(V+R)>>>I|N.i(V+R+1)<<32-I:N.i(V+R);return new h(D,N.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,I_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,Ei=h}).apply(typeof Dg<"u"?Dg:typeof self<"u"?self:typeof window<"u"?window:{});var Nu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S_,ba,R_,Uu,jd,A_,C_,P_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,m,_){return u==Array.prototype||u==Object.prototype||(u[m]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nu=="object"&&Nu];for(var m=0;m<u.length;++m){var _=u[m];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var s=t(this);function o(u,m){if(m)e:{var _=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var b=u[w];if(!(b in _))break e;_=_[b]}u=u[u.length-1],w=_[u],m=m(w),m!=w&&m!=null&&e(_,u,{configurable:!0,writable:!0,value:m})}}function l(u,m){u instanceof String&&(u+="");var _=0,w=!1,b={next:function(){if(!w&&_<u.length){var B=_++;return{value:m(B,u[B]),done:!1}}return w=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(u){return u||function(){return l(this,function(m,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function p(u){var m=typeof u;return m=m!="object"?m:u?Array.isArray(u)?"array":m:"null",m=="array"||m=="object"&&typeof u.length=="number"}function y(u){var m=typeof u;return m=="object"&&u!=null||m=="function"}function E(u,m,_){return u.call.apply(u.bind,arguments)}function T(u,m,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,w),u.apply(m,b)}}return function(){return u.apply(m,arguments)}}function A(u,m,_){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,A.apply(null,arguments)}function O(u,m){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function F(u,m){function _(){}_.prototype=m.prototype,u.aa=m.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,b,B){for(var ne=Array(arguments.length-2),je=2;je<arguments.length;je++)ne[je-2]=arguments[je];return m.prototype[b].apply(w,ne)}}function $(u){const m=u.length;if(0<m){const _=Array(m);for(let w=0;w<m;w++)_[w]=u[w];return _}return[]}function j(u,m){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(p(w)){const b=u.length||0,B=w.length||0;u.length=b+B;for(let ne=0;ne<B;ne++)u[b+ne]=w[ne]}else u.push(w)}}class W{constructor(m,_){this.i=m,this.j=_,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function X(u){return/^[\s\xa0]*$/.test(u)}function Q(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ie(u){return ie[" "](u),u}ie[" "]=function(){};var Se=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Te(u,m,_){for(const w in u)m.call(_,u[w],w,u)}function N(u,m){for(const _ in u)m.call(void 0,u[_],_,u)}function I(u){const m={};for(const _ in u)m[_]=u[_];return m}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,m){let _,w;for(let b=1;b<arguments.length;b++){w=arguments[b];for(_ in w)u[_]=w[_];for(let B=0;B<R.length;B++)_=R[B],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function D(u){var m=1;u=u.split(":");const _=[];for(;0<m&&u.length;)_.push(u.shift()),m--;return u.length&&_.push(u.join(":")),_}function V(u){f.setTimeout(()=>{throw u},0)}function C(){var u=pe;let m=null;return u.g&&(m=u.g,u.g=u.g.next,u.g||(u.h=null),m.next=null),m}class nt{constructor(){this.h=this.g=null}add(m,_){const w=xt.get();w.set(m,_),this.h?this.h.next=w:this.g=w,this.h=w}}var xt=new W(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(m,_){this.h=m,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let ze,re=!1,pe=new nt,oe=()=>{const u=f.Promise.resolve(void 0);ze=()=>{u.then(L)}};var L=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(_){V(_)}var m=xt;m.j(u),100>m.h&&(m.h++,u.next=m.g,m.g=u)}re=!1};function G(){this.s=this.s,this.C=this.C}G.prototype.s=!1,G.prototype.ma=function(){this.s||(this.s=!0,this.N())},G.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(u,m){this.type=u,this.g=this.target=m,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,m=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,m),f.removeEventListener("test",_,m)}catch{}return u}();function Ae(u,m){if(de.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=m,m=u.relatedTarget){if(Se){e:{try{ie(m.nodeName);var b=!0;break e}catch{}b=!1}b||(m=null)}}else _=="mouseover"?m=u.fromElement:_=="mouseout"&&(m=u.toElement);this.relatedTarget=m,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}F(Ae,de);var De={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Fe=0;function $e(u,m,_,w,b){this.listener=u,this.proxy=null,this.src=m,this.type=_,this.capture=!!w,this.ha=b,this.key=++Fe,this.da=this.fa=!1}function yt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function cr(u){this.src=u,this.g={},this.h=0}cr.prototype.add=function(u,m,_,w,b){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var ne=zr(u,m,w,b);return-1<ne?(m=u[ne],_||(m.fa=!1)):(m=new $e(m,this.src,B,!!w,b),m.fa=_,u.push(m)),m};function vs(u,m){var _=m.type;if(_ in u.g){var w=u.g[_],b=Array.prototype.indexOf.call(w,m,void 0),B;(B=0<=b)&&Array.prototype.splice.call(w,b,1),B&&(yt(m),u.g[_].length==0&&(delete u.g[_],u.h--))}}function zr(u,m,_,w){for(var b=0;b<u.length;++b){var B=u[b];if(!B.da&&B.listener==m&&B.capture==!!_&&B.ha==w)return b}return-1}var Ni="closure_lm_"+(1e6*Math.random()|0),Es={};function bo(u,m,_,w,b){if(Array.isArray(m)){for(var B=0;B<m.length;B++)bo(u,m[B],_,w,b);return null}return _=Uo(_),u&&u[Me]?u.K(m,_,y(w)?!!w.capture:!1,b):Mo(u,m,_,!1,w,b)}function Mo(u,m,_,w,b,B){if(!m)throw Error("Invalid event type");var ne=y(b)?!!b.capture:!!b,je=Ts(u);if(je||(u[Ni]=je=new cr(u)),_=je.add(m,_,w,ne,B),_.proxy)return _;if(w=fl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(b=ne),b===void 0&&(b=!1),u.addEventListener(m.toString(),w,b);else if(u.attachEvent)u.attachEvent(dr(m.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function fl(){function u(_){return m.call(u.src,u.listener,_)}const m=Fo;return u}function ws(u,m,_,w,b){if(Array.isArray(m))for(var B=0;B<m.length;B++)ws(u,m[B],_,w,b);else w=y(w)?!!w.capture:!!w,_=Uo(_),u&&u[Me]?(u=u.i,m=String(m).toString(),m in u.g&&(B=u.g[m],_=zr(B,_,w,b),-1<_&&(yt(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete u.g[m],u.h--)))):u&&(u=Ts(u))&&(m=u.g[m.toString()],u=-1,m&&(u=zr(m,_,w,b)),(_=-1<u?m[u]:null)&&hr(_))}function hr(u){if(typeof u!="number"&&u&&!u.da){var m=u.src;if(m&&m[Me])vs(m.i,u);else{var _=u.type,w=u.proxy;m.removeEventListener?m.removeEventListener(_,w,u.capture):m.detachEvent?m.detachEvent(dr(_),w):m.addListener&&m.removeListener&&m.removeListener(w),(_=Ts(m))?(vs(_,u),_.h==0&&(_.src=null,m[Ni]=null)):yt(u)}}}function dr(u){return u in Es?Es[u]:Es[u]="on"+u}function Fo(u,m){if(u.da)u=!0;else{m=new Ae(m,this);var _=u.listener,w=u.ha||u.src;u.fa&&hr(u),u=_.call(w,m)}return u}function Ts(u){return u=u[Ni],u instanceof cr?u:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(u){return typeof u=="function"?u:(u[Is]||(u[Is]=function(m){return u.handleEvent(m)}),u[Is])}function ut(){G.call(this),this.i=new cr(this),this.M=this,this.F=null}F(ut,G),ut.prototype[Me]=!0,ut.prototype.removeEventListener=function(u,m,_,w){ws(this,u,m,_,w)};function ct(u,m){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=m.type||m,typeof m=="string")m=new de(m,u);else if(m instanceof de)m.target=m.target||u;else{var b=m;m=new de(w,u),k(m,b)}if(b=!0,_)for(var B=_.length-1;0<=B;B--){var ne=m.g=_[B];b=fr(ne,w,!0,m)&&b}if(ne=m.g=u,b=fr(ne,w,!0,m)&&b,b=fr(ne,w,!1,m)&&b,_)for(B=0;B<_.length;B++)ne=m.g=_[B],b=fr(ne,w,!1,m)&&b}ut.prototype.N=function(){if(ut.aa.N.call(this),this.i){var u=this.i,m;for(m in u.g){for(var _=u.g[m],w=0;w<_.length;w++)yt(_[w]);delete u.g[m],u.h--}}this.F=null},ut.prototype.K=function(u,m,_,w){return this.i.add(String(u),m,!1,_,w)},ut.prototype.L=function(u,m,_,w){return this.i.add(String(u),m,!0,_,w)};function fr(u,m,_,w){if(m=u.i.g[String(m)],!m)return!0;m=m.concat();for(var b=!0,B=0;B<m.length;++B){var ne=m[B];if(ne&&!ne.da&&ne.capture==_){var je=ne.listener,ht=ne.ha||ne.src;ne.fa&&vs(u.i,ne),b=je.call(ht,w)!==!1&&b}}return b&&!w.defaultPrevented}function jo(u,m,_){if(typeof u=="function")_&&(u=A(u,_));else if(u&&typeof u.handleEvent=="function")u=A(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:f.setTimeout(u,m||0)}function Br(u){u.g=jo(()=>{u.g=null,u.i&&(u.i=!1,Br(u))},u.l);const m=u.h;u.h=null,u.m.apply(null,m)}class xi extends G{constructor(m,_){super(),this.m=m,this.l=_,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Br(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Di(u){G.call(this),this.h=u,this.g={}}F(Di,G);var zo=[];function Bo(u){Te(u.g,function(m,_){this.g.hasOwnProperty(_)&&hr(m)},u),u.g={}}Di.prototype.N=function(){Di.aa.N.call(this),Bo(this)},Di.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $o=f.JSON.stringify,qo=f.JSON.parse,Ho=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Oi(){}Oi.prototype.h=null;function Ss(u){return u.h||(u.h=u.i())}function Rs(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bn(){de.call(this,"d")}F(Bn,de);function As(){de.call(this,"c")}F(As,de);var $n={},Wo=null;function Li(){return Wo=Wo||new ut}$n.La="serverreachability";function Ko(u){de.call(this,$n.La,u)}F(Ko,de);function pr(u){const m=Li();ct(m,new Ko(m))}$n.STAT_EVENT="statevent";function Go(u,m){de.call(this,$n.STAT_EVENT,u),this.stat=m}F(Go,de);function rt(u){const m=Li();ct(m,new Go(m,u))}$n.Ma="timingevent";function Cs(u,m){de.call(this,$n.Ma,u),this.size=m}F(Cs,de);function Tn(u,m){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},m)}function Vi(){this.g=!0}Vi.prototype.xa=function(){this.g=!1};function bi(u,m,_,w,b,B){u.info(function(){if(u.g)if(B)for(var ne="",je=B.split("&"),ht=0;ht<je.length;ht++){var Oe=je[ht].split("=");if(1<Oe.length){var _t=Oe[0];Oe=Oe[1];var ot=_t.split("_");ne=2<=ot.length&&ot[1]=="type"?ne+(_t+"="+Oe+"&"):ne+(_t+"=redacted&")}}else ne=null;else ne=B;return"XMLHTTP REQ ("+w+") [attempt "+b+"]: "+m+`
`+_+`
`+ne})}function Ps(u,m,_,w,b,B,ne){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+b+"]: "+m+`
`+_+`
`+B+" "+ne})}function In(u,m,_,w){u.info(function(){return"XMLHTTP TEXT ("+m+"): "+jc(u,_)+(w?" "+w:"")})}function Qo(u,m){u.info(function(){return"TIMEOUT: "+m})}Vi.prototype.info=function(){};function jc(u,m){if(!u.g)return m;if(!m)return null;try{var _=JSON.parse(m);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var b=w[1];if(Array.isArray(b)&&!(1>b.length)){var B=b[0];if(B!="noop"&&B!="stop"&&B!="close")for(var ne=1;ne<b.length;ne++)b[ne]=""}}}}return $o(_)}catch{return m}}var ks={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Mi(){}F(Mi,Oi),Mi.prototype.g=function(){return new XMLHttpRequest},Mi.prototype.i=function(){return{}},Sn=new Mi;function Rn(u,m,_,w){this.j=u,this.i=m,this.l=_,this.R=w||1,this.U=new Di(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ml}function ml(){this.i=null,this.g="",this.h=!1}var Yo={},Ns={};function xs(u,m,_){u.L=1,u.v=Kr(nn(m)),u.m=_,u.P=!0,Xo(u,null)}function Xo(u,m){u.F=Date.now(),qe(u),u.A=nn(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Qr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new ml,u.g=Ol(u.j,_?m:null,!u.m),0<u.O&&(u.M=new xi(A(u.Y,u,u.g),u.O)),m=u.U,_=u.g,w=u.ca;var b="readystatechange";Array.isArray(b)||(b&&(zo[0]=b.toString()),b=zo);for(var B=0;B<b.length;B++){var ne=bo(_,b[B],w||m.handleEvent,!1,m.h||m);if(!ne)break;m.g[ne.key]=ne}m=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,m)):(u.u="GET",u.g.ea(u.A,u.u,null,m)),pr(),bi(u.i,u.u,u.A,u.l,u.R,u.m)}Rn.prototype.ca=function(u){u=u.target;const m=this.M;m&&Wt(u)==3?m.j():this.Y(u)},Rn.prototype.Y=function(u){try{if(u==this.g)e:{const ot=Wt(this.g);var m=this.g.Ba();const fn=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||ra(this.g)))){this.J||ot!=4||m==7||(m==8||0>=fn?pr(3):pr(2)),Fi(this);var _=this.g.Z();this.X=_;t:if(gl(this)){var w=ra(this.g);u="";var b=w.length,B=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),$r(this);var ne="";break t}this.h.i=new f.TextDecoder}for(m=0;m<b;m++)this.h.h=!0,u+=this.h.i.decode(w[m],{stream:!(B&&m==b-1)});w.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Ps(this.i,this.u,this.A,this.l,this.R,ot,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,ht=this.g;if((je=ht.g?ht.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(je)){var Oe=je;break t}}Oe=null}if(_=Oe)In(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jo(this,_);else{this.o=!1,this.s=3,rt(12),hn(this),$r(this);break e}}if(this.P){_=!0;let sn;for(;!this.J&&this.C<ne.length;)if(sn=zc(this,ne),sn==Ns){ot==4&&(this.s=4,rt(14),_=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(sn==Yo){this.s=4,rt(15),In(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else In(this.i,this.l,sn,null),Jo(this,sn);if(gl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||ne.length!=0||this.h.h||(this.s=1,rt(16),_=!1),this.o=this.o&&_,!_)In(this.i,this.l,ne,"[Invalid Chunked Response]"),hn(this),$r(this);else if(0<ne.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),sa(_t),_t.M=!0,rt(11))}}else In(this.i,this.l,ne,null),Jo(this,ne);ot==4&&hn(this),this.o&&!this.J&&(ot==4?Bs(this.j,this):(this.o=!1,qe(this)))}else Ms(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,rt(12)):(this.s=0,rt(13)),hn(this),$r(this)}}}catch{}finally{}};function gl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function zc(u,m){var _=u.C,w=m.indexOf(`
`,_);return w==-1?Ns:(_=Number(m.substring(_,w)),isNaN(_)?Yo:(w+=1,w+_>m.length?Ns:(m=m.slice(w,w+_),u.C=w+_,m)))}Rn.prototype.cancel=function(){this.J=!0,hn(this)};function qe(u){u.S=Date.now()+u.I,yl(u,u.I)}function yl(u,m){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Tn(A(u.ba,u),m)}function Fi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}Rn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Qo(this.i,this.A),this.L!=2&&(pr(),rt(17)),hn(this),this.s=2,$r(this)):yl(this,this.S-u)};function $r(u){u.j.G==0||u.J||Bs(u.j,u)}function hn(u){Fi(u);var m=u.M;m&&typeof m.ma=="function"&&m.ma(),u.M=null,Bo(u.U),u.g&&(m=u.g,u.g=null,m.abort(),m.ma())}function Jo(u,m){try{var _=u.j;if(_.G!=0&&(_.g==u||zt(_.h,u))){if(!u.K&&zt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(m)}catch{w=null}if(Array.isArray(w)&&w.length==3){var b=w;if(b[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)zs(_),Nn(_);else break e;js(_),rt(18)}}else _.za=b[1],0<_.za-_.T&&37500>b[2]&&_.F&&_.v==0&&!_.C&&(_.C=Tn(A(_.Za,_),6e3));if(1>=vl(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else vr(_,11)}else if((u.K||_.g==u)&&zs(_),!X(m))for(b=_.Da.g.parse(m),m=0;m<b.length;m++){let Oe=b[m];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const _t=Oe[3];_t!=null&&(_.la=_t,_.j.info("VER="+_.la));const ot=Oe[4];ot!=null&&(_.Aa=ot,_.j.info("SVER="+_.Aa));const fn=Oe[5];fn!=null&&typeof fn=="number"&&0<fn&&(w=1.5*fn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const sn=u.g;if(sn){const Hi=sn.g?sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var B=w.h;B.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Zo(B,B.h),B.h=null))}if(w.D){const qs=sn.g?sn.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(w.ya=qs,Be(w.I,w.D,qs))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ne=u;if(w.qa=Dl(w,w.J?w.ia:null,w.W),ne.K){El(w.h,ne);var je=ne,ht=w.L;ht&&(je.I=ht),je.B&&(Fi(je),qe(je)),w.g=ne}else qi(w);0<_.i.length&&Kn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||vr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?vr(_,7):St(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}pr(4)}catch{}}var _l=class{constructor(u,m){this.g=u,this.map=m}};function Ui(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function vl(u){return u.h?1:u.g?u.g.size:0}function zt(u,m){return u.h?u.h==m:u.g?u.g.has(m):!1}function Zo(u,m){u.g?u.g.add(m):u.h=m}function El(u,m){u.h&&u.h==m?u.h=null:u.g&&u.g.has(m)&&u.g.delete(m)}Ui.prototype.cancel=function(){if(this.i=wl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function wl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let m=u.i;for(const _ of u.g.values())m=m.concat(_.D);return m}return $(u.i)}function Ds(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var m=[],_=u.length,w=0;w<_;w++)m.push(u[w]);return m}m=[],_=0;for(w in u)m[_++]=u[w];return m}function Os(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var m=[];u=u.length;for(var _=0;_<u;_++)m.push(_);return m}m=[],_=0;for(const w in u)m[_++]=w;return m}}}function qr(u,m){if(u.forEach&&typeof u.forEach=="function")u.forEach(m,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,m,void 0);else for(var _=Os(u),w=Ds(u),b=w.length,B=0;B<b;B++)m.call(void 0,w[B],_&&_[B],u)}var ji=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bc(u,m){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),b=null;if(0<=w){var B=u[_].substring(0,w);b=u[_].substring(w+1)}else B=u[_];m(B,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function mr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof mr){this.h=u.h,zi(this,u.j),this.o=u.o,this.g=u.g,Hr(this,u.s),this.l=u.l;var m=u.i,_=new qn;_.i=m.i,m.g&&(_.g=new Map(m.g),_.h=m.h),Wr(this,_),this.m=u.m}else u&&(m=String(u).match(ji))?(this.h=!1,zi(this,m[1]||"",!0),this.o=Ne(m[2]||""),this.g=Ne(m[3]||"",!0),Hr(this,m[4]),this.l=Ne(m[5]||"",!0),Wr(this,m[6]||"",!0),this.m=Ne(m[7]||"")):(this.h=!1,this.i=new qn(null,this.h))}mr.prototype.toString=function(){var u=[],m=this.j;m&&u.push(Gr(m,Ls,!0),":");var _=this.g;return(_||m=="file")&&(u.push("//"),(m=this.o)&&u.push(Gr(m,Ls,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Gr(_,_.charAt(0)=="/"?Sl:Il,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Gr(_,ea)),u.join("")};function nn(u){return new mr(u)}function zi(u,m,_){u.j=_?Ne(m,!0):m,u.j&&(u.j=u.j.replace(/:$/,""))}function Hr(u,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);u.s=m}else u.s=null}function Wr(u,m,_){m instanceof qn?(u.i=m,Hn(u.i,u.h)):(_||(m=Gr(m,Rl)),u.i=new qn(m,u.h))}function Be(u,m,_){u.i.set(m,_)}function Kr(u){return Be(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ne(u,m){return u?m?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Gr(u,m,_){return typeof u=="string"?(u=encodeURI(u).replace(m,Tl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Tl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ls=/[#\/\?@]/g,Il=/[#\?:]/g,Sl=/[#\?]/g,Rl=/[#\?@]/g,ea=/#/g;function qn(u,m){this.h=this.g=null,this.i=u||null,this.j=!!m}function It(u){u.g||(u.g=new Map,u.h=0,u.i&&Bc(u.i,function(m,_){u.add(decodeURIComponent(m.replace(/\+/g," ")),_)}))}r=qn.prototype,r.add=function(u,m){It(this),this.i=null,u=dn(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(m),this.h+=1,this};function An(u,m){It(u),m=dn(u,m),u.g.has(m)&&(u.i=null,u.h-=u.g.get(m).length,u.g.delete(m))}function Cn(u,m){return It(u),m=dn(u,m),u.g.has(m)}r.forEach=function(u,m){It(this),this.g.forEach(function(_,w){_.forEach(function(b){u.call(m,b,w,this)},this)},this)},r.na=function(){It(this);const u=Array.from(this.g.values()),m=Array.from(this.g.keys()),_=[];for(let w=0;w<m.length;w++){const b=u[w];for(let B=0;B<b.length;B++)_.push(m[w])}return _},r.V=function(u){It(this);let m=[];if(typeof u=="string")Cn(this,u)&&(m=m.concat(this.g.get(dn(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)m=m.concat(u[_])}return m},r.set=function(u,m){return It(this),this.i=null,u=dn(this,u),Cn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[m]),this.h+=1,this},r.get=function(u,m){return u?(u=this.V(u),0<u.length?String(u[0]):m):m};function Qr(u,m,_){An(u,m),0<_.length&&(u.i=null,u.g.set(dn(u,m),$(_)),u.h+=_.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],m=Array.from(this.g.keys());for(var _=0;_<m.length;_++){var w=m[_];const B=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var b=B;ne[w]!==""&&(b+="="+encodeURIComponent(String(ne[w]))),u.push(b)}}return this.i=u.join("&")};function dn(u,m){return m=String(m),u.j&&(m=m.toLowerCase()),m}function Hn(u,m){m&&!u.j&&(It(u),u.i=null,u.g.forEach(function(_,w){var b=w.toLowerCase();w!=b&&(An(this,w),Qr(this,b,_))},u)),u.j=m}function $c(u,m){const _=new Vi;if(f.Image){const w=new Image;w.onload=O(Ht,_,"TestLoadImage: loaded",!0,m,w),w.onerror=O(Ht,_,"TestLoadImage: error",!1,m,w),w.onabort=O(Ht,_,"TestLoadImage: abort",!1,m,w),w.ontimeout=O(Ht,_,"TestLoadImage: timeout",!1,m,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else m(!1)}function Al(u,m){const _=new Vi,w=new AbortController,b=setTimeout(()=>{w.abort(),Ht(_,"TestPingServer: timeout",!1,m)},1e4);fetch(u,{signal:w.signal}).then(B=>{clearTimeout(b),B.ok?Ht(_,"TestPingServer: ok",!0,m):Ht(_,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(b),Ht(_,"TestPingServer: error",!1,m)})}function Ht(u,m,_,w,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),w(_)}catch{}}function qc(){this.g=new Ho}function Cl(u,m,_){const w=_||"";try{qr(u,function(b,B){let ne=b;y(b)&&(ne=$o(b)),m.push(w+B+"="+encodeURIComponent(ne))})}catch(b){throw m.push(w+"type="+encodeURIComponent("_badmap")),b}}function gr(u){this.l=u.Ub||null,this.j=u.eb||!1}F(gr,Oi),gr.prototype.g=function(){return new Bi(this.l,this.j)},gr.prototype.i=function(u){return function(){return u}}({});function Bi(u,m){ut.call(this),this.D=u,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}F(Bi,ut),r=Bi.prototype,r.open=function(u,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=m,this.readyState=1,kn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(m.body=u),(this.D||f).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Pl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Pl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var m=u.value?u.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!u.done}))&&(this.response=this.responseText+=m)}u.done?Pn(this):kn(this),this.readyState==3&&Pl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Pn(this))},r.Qa=function(u){this.g&&(this.response=u,Pn(this))},r.ga=function(){this.g&&Pn(this)};function Pn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,kn(u)}r.setRequestHeader=function(u,m){this.u.append(u,m)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],m=this.h.entries();for(var _=m.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=m.next();return u.join(`\r
`)};function kn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function yr(u){let m="";return Te(u,function(_,w){m+=w,m+=":",m+=_,m+=`\r
`}),m}function Yr(u,m,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=yr(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):Be(u,m,_))}function Ge(u){ut.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}F(Ge,ut);var Hc=/^https?$/i,ta=["POST","PUT"];r=Ge.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,m,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);m=m?m.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?Ss(this.o):Ss(Sn),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(m,String(u),!0),this.B=!1}catch(B){$i(this,B);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var b in w)_.set(b,w[b]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())_.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),b=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ta,m,void 0))||w||b||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ne]of _)this.g.setRequestHeader(B,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bs(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){$i(this,B)}};function $i(u,m){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=m,u.m=5,Vs(u),rn(u)}function Vs(u){u.A||(u.A=!0,ct(u,"complete"),ct(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ct(this,"complete"),ct(this,"abort"),rn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),rn(this,!0)),Ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?na(this):this.bb())},r.bb=function(){na(this)};function na(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Wt(u)!=4||u.Z()!=2)){if(u.u&&Wt(u)==4)jo(u.Ea,0,u);else if(ct(u,"readystatechange"),Wt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var _;if(!(_=m)){var w;if(w=ne===0){var b=String(u.D).match(ji)[1]||null;!b&&f.self&&f.self.location&&(b=f.self.location.protocol.slice(0,-1)),w=!Hc.test(b?b.toLowerCase():"")}_=w}if(_)ct(u,"complete"),ct(u,"success");else{u.m=6;try{var B=2<Wt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",Vs(u)}}finally{rn(u)}}}}function rn(u,m){if(u.g){bs(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,m||ct(u,"ready");try{_.onreadystatechange=w}catch{}}}function bs(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Wt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var m=this.g.responseText;return u&&m.indexOf(u)==0&&(m=m.substring(u.length)),qo(m)}};function ra(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Ms(u){const m={};u=(u.g&&2<=Wt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(X(u[w]))continue;var _=D(u[w]);const b=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=m[b]||[];m[b]=B,B.push(_)}N(m,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(u,m,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||m}function ia(u){this.Aa=0,this.i=[],this.j=new Vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,u),this.cb=Wn("retryDelaySeedMs",1e4,u),this.Wa=Wn("forwardChannelMaxRetries",2,u),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Ui(u&&u.concurrentRequestLimit),this.Da=new qc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ia.prototype,r.la=8,r.G=1,r.connect=function(u,m,_,w){rt(0),this.W=u,this.H=m||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Dl(this,null,this.W),Kn(this)};function St(u){if(Fs(u),u.G==3){var m=u.U++,_=nn(u.I);if(Be(_,"SID",u.K),Be(_,"RID",m),Be(_,"TYPE","terminate"),_r(u,_),m=new Rn(u,u.j,m),m.L=2,m.v=Kr(nn(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(m.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=m.v,_=!0),_||(m.g=Ol(m.j,null),m.g.ea(m.v)),m.F=Date.now(),qe(m)}xl(u)}function Nn(u){u.g&&(sa(u),u.g.cancel(),u.g=null)}function Fs(u){Nn(u),u.u&&(f.clearTimeout(u.u),u.u=null),zs(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Kn(u){if(!tn(u.h)&&!u.s){u.s=!0;var m=u.Ga;ze||oe(),re||(ze(),re=!0),pe.add(m,u),u.B=0}}function Wc(u,m){return vl(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=m.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Tn(A(u.Ga,u,m),Nl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const b=new Rn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=I(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(b.H=B,B=null),this.P)e:{for(var m=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(m+=w,4096<m){m=_;break e}if(m===4096||_===this.i.length-1){m=_+1;break e}}m=1e3}else m=1e3;m=Xr(this,b,m),_=nn(this.I),Be(_,"RID",u),Be(_,"CVER",22),this.D&&Be(_,"X-HTTP-Session-Id",this.D),_r(this,_),B&&(this.O?m="headers="+encodeURIComponent(String(yr(B)))+"&"+m:this.m&&Yr(_,this.m,B)),Zo(this.h,b),this.Ua&&Be(_,"TYPE","init"),this.P?(Be(_,"$req",m),Be(_,"SID","null"),b.T=!0,xs(b,_,null)):xs(b,_,m),this.G=2}}else this.G==3&&(u?Us(this,u):this.i.length==0||tn(this.h)||Us(this))};function Us(u,m){var _;m?_=m.l:_=u.U++;const w=nn(u.I);Be(w,"SID",u.K),Be(w,"RID",_),Be(w,"AID",u.T),_r(u,w),u.m&&u.o&&Yr(w,u.m,u.o),_=new Rn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),m&&(u.i=m.D.concat(u.i)),m=Xr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Zo(u.h,_),xs(_,w,m)}function _r(u,m){u.H&&Te(u.H,function(_,w){Be(m,w,_)}),u.l&&qr({},function(_,w){Be(m,w,_)})}function Xr(u,m,_){_=Math.min(u.i.length,_);var w=u.l?A(u.l.Na,u.l,u):null;e:{var b=u.i;let B=-1;for(;;){const ne=["count="+_];B==-1?0<_?(B=b[0].g,ne.push("ofs="+B)):B=0:ne.push("ofs="+B);let je=!0;for(let ht=0;ht<_;ht++){let Oe=b[ht].g;const _t=b[ht].map;if(Oe-=B,0>Oe)B=Math.max(0,b[ht].g-100),je=!1;else try{Cl(_t,ne,"req"+Oe+"_")}catch{w&&w(_t)}}if(je){w=ne.join("&");break e}}}return u=u.i.splice(0,_),m.D=u,w}function qi(u){if(!u.g&&!u.u){u.Y=1;var m=u.Fa;ze||oe(),re||(ze(),re=!0),pe.add(m,u),u.v=0}}function js(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Tn(A(u.Fa,u),Nl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Tn(A(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,rt(10),Nn(this),kl(this))};function sa(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function kl(u){u.g=new Rn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var m=nn(u.qa);Be(m,"RID","rpc"),Be(m,"SID",u.K),Be(m,"AID",u.T),Be(m,"CI",u.F?"0":"1"),!u.F&&u.ja&&Be(m,"TO",u.ja),Be(m,"TYPE","xmlhttp"),_r(u,m),u.m&&u.o&&Yr(m,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Kr(nn(m)),_.m=null,_.P=!0,Xo(_,u)}r.Za=function(){this.C!=null&&(this.C=null,Nn(this),js(this),rt(19))};function zs(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Bs(u,m){var _=null;if(u.g==m){zs(u),sa(u),u.g=null;var w=2}else if(zt(u.h,m))_=m.D,El(u.h,m),w=1;else return;if(u.G!=0){if(m.o)if(w==1){_=m.m?m.m.length:0,m=Date.now()-m.F;var b=u.B;w=Li(),ct(w,new Cs(w,_)),Kn(u)}else qi(u);else if(b=m.s,b==3||b==0&&0<m.X||!(w==1&&Wc(u,m)||w==2&&js(u)))switch(_&&0<_.length&&(m=u.h,m.i=m.i.concat(_)),b){case 1:vr(u,5);break;case 4:vr(u,10);break;case 3:vr(u,6);break;default:vr(u,2)}}}function Nl(u,m){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*m}function vr(u,m){if(u.j.info("Error code "+m),m==2){var _=A(u.fb,u),w=u.Xa;const b=!w;w=new mr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||zi(w,"https"),Kr(w),b?$c(w.toString(),_):Al(w.toString(),_)}else rt(2);u.G=0,u.l&&u.l.sa(m),xl(u),Fs(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function xl(u){if(u.G=0,u.ka=[],u.l){const m=wl(u.h);(m.length!=0||u.i.length!=0)&&(j(u.ka,m),j(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Dl(u,m,_){var w=_ instanceof mr?nn(_):new mr(_);if(w.g!="")m&&(w.g=m+"."+w.g),Hr(w,w.s);else{var b=f.location;w=b.protocol,m=m?m+"."+b.hostname:b.hostname,b=+b.port;var B=new mr(null);w&&zi(B,w),m&&(B.g=m),b&&Hr(B,b),_&&(B.l=_),w=B}return _=u.D,m=u.ya,_&&m&&Be(w,_,m),Be(w,"VER",u.la),_r(u,w),w}function Ol(u,m,_){if(m&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=u.Ca&&!u.pa?new Ge(new gr({eb:_})):new Ge(u.pa),m.Ha(u.J),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function oa(){}r=oa.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function $s(){}$s.prototype.g=function(u,m){return new Bt(u,m)};function Bt(u,m){ut.call(this),this.g=new ia(m),this.l=u,this.h=m&&m.messageUrlParams||null,u=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(u?u["X-WebChannel-Content-Type"]=m.messageContentType:u={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(u?u["X-WebChannel-Client-Profile"]=m.va:u={"X-WebChannel-Client-Profile":m.va}),this.g.S=u,(u=m&&m.Sb)&&!X(u)&&(this.g.m=u),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!X(m)&&(this.g.D=m,u=this.h,u!==null&&m in u&&(u=this.h,m in u&&delete u[m])),this.j=new Gn(this)}F(Bt,ut),Bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Bt.prototype.close=function(){St(this.g)},Bt.prototype.o=function(u){var m=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=$o(u),u=_);m.i.push(new _l(m.Ya++,u)),m.G==3&&Kn(m)},Bt.prototype.N=function(){this.g.l=null,delete this.j,St(this.g),delete this.g,Bt.aa.N.call(this)};function Ll(u){Bn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var m=u.__sm__;if(m){e:{for(const _ in m){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,m=m!==null&&u in m?m[u]:void 0),this.data=m}else this.data=u}F(Ll,Bn);function Vl(){As.call(this),this.status=1}F(Vl,As);function Gn(u){this.g=u}F(Gn,oa),Gn.prototype.ua=function(){ct(this.g,"a")},Gn.prototype.ta=function(u){ct(this.g,new Ll(u))},Gn.prototype.sa=function(u){ct(this.g,new Vl)},Gn.prototype.ra=function(){ct(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,Bt.prototype.send=Bt.prototype.o,Bt.prototype.open=Bt.prototype.m,Bt.prototype.close=Bt.prototype.close,P_=function(){return new $s},C_=function(){return Li()},A_=$n,jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ks.NO_ERROR=0,ks.TIMEOUT=8,ks.HTTP_ERROR=6,Uu=ks,pl.COMPLETE="complete",R_=pl,Rs.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",ut.prototype.listen=ut.prototype.K,ba=Rs,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,S_=Ge}).apply(typeof Nu<"u"?Nu:typeof self<"u"?self:typeof window<"u"?window:{});const Og="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xo="11.2.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new Ec("@firebase/firestore");function ho(){return as.logLevel}function ae(r,...e){if(as.logLevel<=Pe.DEBUG){const t=e.map(ff);as.debug(`Firestore (${xo}): ${r}`,...t)}}function Vr(r,...e){if(as.logLevel<=Pe.ERROR){const t=e.map(ff);as.error(`Firestore (${xo}): ${r}`,...t)}}function wo(r,...e){if(as.logLevel<=Pe.WARN){const t=e.map(ff);as.warn(`Firestore (${xo}): ${r}`,...t)}}function ff(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(r="Unexpected state"){const e=`FIRESTORE (${xo}) INTERNAL ASSERTION FAILED: `+r;throw Vr(e),new Error(e)}function Ue(r,e){r||Ee()}function Ie(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends zn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class l0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class u0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class c0{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ue(this.o===void 0);let s=this.i;const o=p=>this.i!==s?(s=this.i,t(p)):Promise.resolve();let l=new wi;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new wi,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await o(this.currentUser)})},f=p=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(p=>f(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new wi)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Ue(typeof s.accessToken=="string"),new k_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Ft(e)}}class h0{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class d0{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new h0(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class p0{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Ue(this.o===void 0);const s=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ue(typeof t.token=="string"),this.R=t.token,new f0(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m0(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=m0(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function xe(r,e){return r<e?-1:r>e?1:0}function To(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new mt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(Z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(Z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new mt(0,0))}static max(){return new we(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,s){t===void 0?t=0:t>e.length&&Ee(),s===void 0?s=e.length-t:s>e.length-t&&Ee(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Zn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Zn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=Zn.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const s=Zn.isNumericId(e),o=Zn.isNumericId(t);return s&&!o?-1:!s&&o?1:s&&o?Zn.extractNumericId(e).compare(Zn.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ei.fromString(e.substring(4,e.length-2))}}class Ye extends Zn{construct(e,t,s){return new Ye(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new fe(Z.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ye(t)}static emptyPath(){return new Ye([])}}const g0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Pt extends Zn{construct(e,t,s){return new Pt(e,t,s)}static isValidIdentifier(e){return g0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Pt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new fe(Z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new fe(Z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[o+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(Z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=p,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new fe(Z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Pt(t)}static emptyPath(){return new Pt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(Ye.fromString(e))}static fromName(e){return new ye(Ye.fromString(e).popFirst(5))}static empty(){return new ye(Ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new Ye(e.slice()))}}function y0(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=we.fromTimestamp(s===1e9?new mt(t+1,0):new mt(t,s));return new Si(o,ye.empty(),e)}function _0(r){return new Si(r.readTime,r.key,-1)}class Si{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Si(we.min(),ye.empty(),-1)}static max(){return new Si(we.max(),ye.empty(),-1)}}function v0(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=ye.comparator(r.documentKey,e.documentKey),t!==0?t:xe(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(r){if(r.code!==Z.FAILED_PRECONDITION||r.message!==E0)throw r;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):K.reject(t)}static resolve(e){return new K((t,s)=>{t(e)})}static reject(e){return new K((t,s)=>{s(e)})}static waitFor(e){return new K((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},p=>s(p))}),h=!0,l===o&&t()})}static or(e){let t=K.resolve(!1);for(const s of e)t=t.next(o=>o?K.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new K((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let p=0;p<l;p++){const y=p;t(e[y]).next(E=>{h[y]=E,++f,f===l&&s(h)},E=>o(E))}})}static doWhile(e,t){return new K((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function T0(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Oo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wc.oe=-1;function Tc(r){return r==null}function Ju(r){return r===0&&1/r==-1/0}function I0(r){return typeof r=="number"&&Number.isInteger(r)&&!Ju(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S0(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Lg(e)),e=R0(r.get(t),e);return Lg(e)}function R0(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Lg(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function ms(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function x_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,t){this.comparator=e,this.root=t||Ct.EMPTY}insert(e,t){return new et(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ct.BLACK,null,null))}remove(e){return new et(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xu(this.root,e,this.comparator,!1)}getReverseIterator(){return new xu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xu(this.root,e,this.comparator,!0)}}class xu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ct{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Ct.RED,this.left=o??Ct.EMPTY,this.right=l??Ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Ct(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Ct.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ee();const e=this.left.check();if(e!==this.right.check())throw Ee();return e+(this.isRed()?0:1)}}Ct.EMPTY=null,Ct.RED=!0,Ct.BLACK=!1;Ct.EMPTY=new class{constructor(){this.size=0}get key(){throw Ee()}get value(){throw Ee()}get color(){throw Ee()}get left(){throw Ee()}get right(){throw Ee()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Ct(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new et(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bg(this.data.getIterator())}getIteratorFrom(e){return new bg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class bg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new Mn([])}unionWith(e){let t=new gt(Pt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return To(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new D_("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const A0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ri(r){if(Ue(!!r),typeof r=="string"){let e=0;const t=A0.exec(r);if(Ue(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:st(r.seconds),nanos:st(r.nanos)}}function st(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Ai(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ic(r){const e=r.mapValue.fields.__previous_value__;return pf(e)?Ic(e):e}function Ga(r){const e=Ri(r.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,t,s,o,l,h,f,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=y}}class Qa{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Qa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Qa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ci(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?pf(r)?4:k0(r)?9007199254740991:P0(r)?10:11:Ee()}function ar(r,e){if(r===e)return!0;const t=Ci(r);if(t!==Ci(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ga(r).isEqual(Ga(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ri(o.timestampValue),f=Ri(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return Ai(o.bytesValue).isEqual(Ai(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return st(o.geoPointValue.latitude)===st(l.geoPointValue.latitude)&&st(o.geoPointValue.longitude)===st(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return st(o.integerValue)===st(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=st(o.doubleValue),f=st(l.doubleValue);return h===f?Ju(h)===Ju(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return To(r.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Vg(h)!==Vg(f))return!1;for(const p in h)if(h.hasOwnProperty(p)&&(f[p]===void 0||!ar(h[p],f[p])))return!1;return!0}(r,e);default:return Ee()}}function Ya(r,e){return(r.values||[]).find(t=>ar(t,e))!==void 0}function Io(r,e){if(r===e)return 0;const t=Ci(r),s=Ci(e);if(t!==s)return xe(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return xe(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=st(l.integerValue||l.doubleValue),p=st(h.integerValue||h.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1}(r,e);case 3:return Mg(r.timestampValue,e.timestampValue);case 4:return Mg(Ga(r),Ga(e));case 5:return xe(r.stringValue,e.stringValue);case 6:return function(l,h){const f=Ai(l),p=Ai(h);return f.compareTo(p)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),p=h.split("/");for(let y=0;y<f.length&&y<p.length;y++){const E=xe(f[y],p[y]);if(E!==0)return E}return xe(f.length,p.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=xe(st(l.latitude),st(h.latitude));return f!==0?f:xe(st(l.longitude),st(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Fg(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,p,y,E;const T=l.fields||{},A=h.fields||{},O=(f=T.value)===null||f===void 0?void 0:f.arrayValue,F=(p=A.value)===null||p===void 0?void 0:p.arrayValue,$=xe(((y=O==null?void 0:O.values)===null||y===void 0?void 0:y.length)||0,((E=F==null?void 0:F.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:Fg(O,F)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===Du.mapValue&&h===Du.mapValue)return 0;if(l===Du.mapValue)return 1;if(h===Du.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),y=h.fields||{},E=Object.keys(y);p.sort(),E.sort();for(let T=0;T<p.length&&T<E.length;++T){const A=xe(p[T],E[T]);if(A!==0)return A;const O=Io(f[p[T]],y[E[T]]);if(O!==0)return O}return xe(p.length,E.length)}(r.mapValue,e.mapValue);default:throw Ee()}}function Mg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return xe(r,e);const t=Ri(r),s=Ri(e),o=xe(t.seconds,s.seconds);return o!==0?o:xe(t.nanos,s.nanos)}function Fg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=Io(t[o],s[o]);if(l)return l}return xe(t.length,s.length)}function So(r){return zd(r)}function zd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ri(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Ai(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return ye.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=zd(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${zd(t.fields[h])}`;return o+"}"}(r.mapValue):Ee()}function ju(r){switch(Ci(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ic(r);return e?16+ju(e):16;case 5:return 2*r.stringValue.length;case 6:return Ai(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+ju(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return ms(s.fields,(l,h)=>{o+=l.length+ju(h)}),o}(r.mapValue);default:throw Ee()}}function Bd(r){return!!r&&"integerValue"in r}function mf(r){return!!r&&"arrayValue"in r}function Ug(r){return!!r&&"nullValue"in r}function jg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function zu(r){return!!r&&"mapValue"in r}function P0(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Ua(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ms(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Ua(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ua(r.arrayValue.values[t]);return e}return Object.assign({},r)}function k0(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.value=e}static empty(){return new En({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ua(t)}setAll(e){let t=Pt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=Ua(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ar(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];zu(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){ms(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new En(Ua(this.value))}}function O_(r){const e=[];return ms(r.fields,(t,s)=>{const o=new Pt([t]);if(zu(s)){const l=O_(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new Mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ut(e,0,we.min(),we.min(),we.min(),En.empty(),0)}static newFoundDocument(e,t,s,o){return new Ut(e,1,t,we.min(),s,o,0)}static newNoDocument(e,t){return new Ut(e,2,t,we.min(),we.min(),En.empty(),0)}static newUnknownDocument(e,t){return new Ut(e,3,t,we.min(),we.min(),En.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=En.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=En.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t){this.position=e,this.inclusive=t}}function zg(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),t.key):s=Io(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function Bg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!ar(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,t="asc"){this.field=e,this.dir=t}}function N0(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{}class pt extends L_{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new D0(e,t,s):t==="array-contains"?new V0(e,s):t==="in"?new b0(e,s):t==="not-in"?new M0(e,s):t==="array-contains-any"?new F0(e,s):new pt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new O0(e,s):new L0(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Io(t,this.value)):t!==null&&Ci(this.value)===Ci(t)&&this.matchesComparison(Io(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lr extends L_{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new lr(e,t)}matches(e){return V_(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function V_(r){return r.op==="and"}function b_(r){return x0(r)&&V_(r)}function x0(r){for(const e of r.filters)if(e instanceof lr)return!1;return!0}function $d(r){if(r instanceof pt)return r.field.canonicalString()+r.op.toString()+So(r.value);if(b_(r))return r.filters.map(e=>$d(e)).join(",");{const e=r.filters.map(t=>$d(t)).join(",");return`${r.op}(${e})`}}function M_(r,e){return r instanceof pt?function(s,o){return o instanceof pt&&s.op===o.op&&s.field.isEqual(o.field)&&ar(s.value,o.value)}(r,e):r instanceof lr?function(s,o){return o instanceof lr&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&M_(h,o.filters[f]),!0):!1}(r,e):void Ee()}function F_(r){return r instanceof pt?function(t){return`${t.field.canonicalString()} ${t.op} ${So(t.value)}`}(r):r instanceof lr?function(t){return t.op.toString()+" {"+t.getFilters().map(F_).join(" ,")+"}"}(r):"Filter"}class D0 extends pt{constructor(e,t,s){super(e,t,s),this.key=ye.fromName(s.referenceValue)}matches(e){const t=ye.comparator(e.key,this.key);return this.matchesComparison(t)}}class O0 extends pt{constructor(e,t){super(e,"in",t),this.keys=U_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class L0 extends pt{constructor(e,t){super(e,"not-in",t),this.keys=U_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function U_(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>ye.fromName(s.referenceValue))}class V0 extends pt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mf(t)&&Ya(t.arrayValue,this.value)}}class b0 extends pt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ya(this.value.arrayValue,t)}}class M0 extends pt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ya(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Ya(this.value.arrayValue,t)}}class F0 extends pt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Ya(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function $g(r,e=null,t=[],s=[],o=null,l=null,h=null){return new U0(r,e,t,s,o,l,h)}function gf(r){const e=Ie(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>$d(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),Tc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>So(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>So(s)).join(",")),e.ue=t}return e.ue}function yf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!N0(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!M_(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Bg(r.startAt,e.startAt)&&Bg(r.endAt,e.endAt)}function qd(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function j0(r,e,t,s,o,l,h,f){return new Sc(r,e,t,s,o,l,h,f)}function j_(r){return new Sc(r)}function qg(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function z0(r){return r.collectionGroup!==null}function ja(r){const e=Ie(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new gt(Pt.comparator);return h.filters.forEach(p=>{p.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new ec(l,s))}),t.has(Pt.keyField().canonicalString())||e.ce.push(new ec(Pt.keyField(),s))}return e.ce}function tr(r){const e=Ie(r);return e.le||(e.le=B0(e,ja(r))),e.le}function B0(r,e){if(r.limitType==="F")return $g(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new ec(o.field,l)});const t=r.endAt?new Zu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Zu(r.startAt.position,r.startAt.inclusive):null;return $g(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Hd(r,e,t){return new Sc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Rc(r,e){return yf(tr(r),tr(e))&&r.limitType===e.limitType}function z_(r){return`${gf(tr(r))}|lt:${r.limitType}`}function fo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>F_(o)).join(", ")}]`),Tc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>So(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>So(o)).join(",")),`Target(${s})`}(tr(r))}; limitType=${r.limitType})`}function Ac(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):ye.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of ja(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,p){const y=zg(h,f,p);return h.inclusive?y<=0:y<0}(s.startAt,ja(s),o)||s.endAt&&!function(h,f,p){const y=zg(h,f,p);return h.inclusive?y>=0:y>0}(s.endAt,ja(s),o))}(r,e)}function $0(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function B_(r){return(e,t)=>{let s=!1;for(const o of ja(r)){const l=q0(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function q0(r,e,t){const s=r.field.isKeyField()?ye.comparator(e.key,t.key):function(l,h,f){const p=h.data.field(l),y=f.data.field(l);return p!==null&&y!==null?Io(p,y):Ee()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return Ee()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return x_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new et(ye.comparator);function br(){return H0}const $_=new et(ye.comparator);function Ma(...r){let e=$_;for(const t of r)e=e.insert(t.key,t);return e}function q_(r){let e=$_;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ss(){return za()}function H_(){return za()}function za(){return new gs(r=>r.toString(),(r,e)=>r.isEqual(e))}const W0=new et(ye.comparator),K0=new gt(ye.comparator);function ke(...r){let e=K0;for(const t of r)e=e.add(t);return e}const G0=new gt(xe);function Q0(){return G0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _f(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ju(e)?"-0":e}}function W_(r){return{integerValue:""+r}}function Y0(r,e){return I0(e)?W_(e):_f(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this._=void 0}}function X0(r,e,t){return r instanceof tc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&pf(l)&&(l=Ic(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):r instanceof Xa?G_(r,e):r instanceof Ja?Q_(r,e):function(o,l){const h=K_(o,l),f=Hg(h)+Hg(o.Pe);return Bd(h)&&Bd(o.Pe)?W_(f):_f(o.serializer,f)}(r,e)}function J0(r,e,t){return r instanceof Xa?G_(r,e):r instanceof Ja?Q_(r,e):t}function K_(r,e){return r instanceof nc?function(s){return Bd(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class tc extends Cc{}class Xa extends Cc{constructor(e){super(),this.elements=e}}function G_(r,e){const t=Y_(e);for(const s of r.elements)t.some(o=>ar(o,s))||t.push(s);return{arrayValue:{values:t}}}class Ja extends Cc{constructor(e){super(),this.elements=e}}function Q_(r,e){let t=Y_(e);for(const s of r.elements)t=t.filter(o=>!ar(o,s));return{arrayValue:{values:t}}}class nc extends Cc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Hg(r){return st(r.integerValue||r.doubleValue)}function Y_(r){return mf(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Z0(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Xa&&o instanceof Xa||s instanceof Ja&&o instanceof Ja?To(s.elements,o.elements,ar):s instanceof nc&&o instanceof nc?ar(s.Pe,o.Pe):s instanceof tc&&o instanceof tc}(r.transform,e.transform)}class eR{constructor(e,t){this.version=e,this.transformResults=t}}class Dr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dr}static exists(e){return new Dr(void 0,e)}static updateTime(e){return new Dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Pc{}function X_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Z_(r.key,Dr.none()):new sl(r.key,r.data,Dr.none());{const t=r.data,s=En.empty();let o=new gt(Pt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new ys(r.key,s,new Mn(o.toArray()),Dr.none())}}function tR(r,e,t){r instanceof sl?function(o,l,h){const f=o.value.clone(),p=Kg(o.fieldTransforms,l,h.transformResults);f.setAll(p),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof ys?function(o,l,h){if(!Bu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=Kg(o.fieldTransforms,l,h.transformResults),p=l.data;p.setAll(J_(o)),p.setAll(f),l.convertToFoundDocument(h.version,p).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function Ba(r,e,t,s){return r instanceof sl?function(l,h,f,p){if(!Bu(l.precondition,h))return f;const y=l.value.clone(),E=Gg(l.fieldTransforms,p,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(r,e,t,s):r instanceof ys?function(l,h,f,p){if(!Bu(l.precondition,h))return f;const y=Gg(l.fieldTransforms,p,h),E=h.data;return E.setAll(J_(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(l,h,f){return Bu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function nR(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=K_(s.transform,o||null);l!=null&&(t===null&&(t=En.empty()),t.set(s.field,l))}return t||null}function Wg(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&To(s,o,(l,h)=>Z0(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class sl extends Pc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class ys extends Pc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function J_(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function Kg(r,e,t){const s=new Map;Ue(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,J0(h,f,t[o]))}return s}function Gg(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,X0(l,h,e))}return s}class Z_ extends Pc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rR extends Pc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&tR(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Ba(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=H_();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const p=X_(h,f);p!==null&&s.set(o.key,p),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ke())}isEqual(e){return this.batchId===e.batchId&&To(this.mutations,e.mutations,(t,s)=>Wg(t,s))&&To(this.baseMutations,e.baseMutations,(t,s)=>Wg(t,s))}}class vf{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Ue(e.mutations.length===s.length);let o=function(){return W0}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new vf(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt,Le;function aR(r){switch(r){default:return Ee();case Z.CANCELLED:case Z.UNKNOWN:case Z.DEADLINE_EXCEEDED:case Z.RESOURCE_EXHAUSTED:case Z.INTERNAL:case Z.UNAVAILABLE:case Z.UNAUTHENTICATED:return!1;case Z.INVALID_ARGUMENT:case Z.NOT_FOUND:case Z.ALREADY_EXISTS:case Z.PERMISSION_DENIED:case Z.FAILED_PRECONDITION:case Z.ABORTED:case Z.OUT_OF_RANGE:case Z.UNIMPLEMENTED:case Z.DATA_LOSS:return!0}}function ev(r){if(r===void 0)return Vr("GRPC error has no .code"),Z.UNKNOWN;switch(r){case lt.OK:return Z.OK;case lt.CANCELLED:return Z.CANCELLED;case lt.UNKNOWN:return Z.UNKNOWN;case lt.DEADLINE_EXCEEDED:return Z.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return Z.RESOURCE_EXHAUSTED;case lt.INTERNAL:return Z.INTERNAL;case lt.UNAVAILABLE:return Z.UNAVAILABLE;case lt.UNAUTHENTICATED:return Z.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return Z.INVALID_ARGUMENT;case lt.NOT_FOUND:return Z.NOT_FOUND;case lt.ALREADY_EXISTS:return Z.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return Z.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return Z.FAILED_PRECONDITION;case lt.ABORTED:return Z.ABORTED;case lt.OUT_OF_RANGE:return Z.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return Z.UNIMPLEMENTED;case lt.DATA_LOSS:return Z.DATA_LOSS;default:return Ee()}}(Le=lt||(lt={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new Ei([4294967295,4294967295],0);function Qg(r){const e=lR().encode(r),t=new I_;return t.update(e),new Uint8Array(t.digest())}function Yg(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ei([t,s],0),new Ei([o,l],0)]}class Ef{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Fa(`Invalid padding: ${t}`);if(s<0)throw new Fa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Fa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Fa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=Ei.fromNumber(this.Te)}de(e,t,s){let o=e.add(t.multiply(Ei.fromNumber(s)));return o.compare(uR)===1&&(o=new Ei([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}Ee(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Qg(e),[s,o]=Yg(t);for(let l=0;l<this.hashCount;l++){const h=this.de(s,o,l);if(!this.Ee(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Ef(l,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=Qg(e),[s,o]=Yg(t);for(let l=0;l<this.hashCount;l++){const h=this.de(s,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Fa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ol.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new kc(we.min(),o,new et(xe),br(),ke())}}class ol{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ol(s,t,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class tv{constructor(e,t){this.targetId=e,this.me=t}}class nv{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class Xg{constructor(){this.fe=0,this.ge=Jg(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ke(),t=ke(),s=ke();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:Ee()}}),new ol(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=Jg()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cR{constructor(e){this.Be=e,this.Le=new Map,this.ke=br(),this.qe=Ou(),this.Qe=Ou(),this.Ke=new et(xe)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:Ee()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Le.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(qd(l))if(s===0){const h=new ye(l.path);this.We(t,h,Ut.newNoDocument(h,we.min()))}else Ue(s===1);else{const h=this.Ze(t);if(h!==s){const f=this.Xe(e),p=f?this.et(f,e,h):1;if(p!==0){this.He(t);const y=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,y)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=Ai(s).toUint8Array()}catch(p){if(p instanceof D_)return wo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Ef(h,o,l)}catch(p){return wo(p instanceof Fa?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Te===0?null:f}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Be.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.Be.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Le.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&qd(f.target)){const p=new ye(f.target.path);this.st(p).has(h)||this.ot(h,p)||this.We(h,p,Ut.newNoDocument(p,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let s=ke();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(p=>{const y=this.Ye(p);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new kc(e,t,this.Ke,this.ke,s);return this.ke=br(),this.qe=Ou(),this.Qe=Ou(),this.Ke=new et(xe),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Le.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Le.get(e);return t||(t=new Xg,this.Le.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new gt(xe),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new gt(xe),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Le.get(e);return t&&t.Se?null:this.Be.ut(e)}He(e){this.Le.set(e,new Xg),this.Be.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Be.getRemoteKeysForTarget(e).has(t)}}function Ou(){return new et(ye.comparator)}function Jg(){return new et(ye.comparator)}const hR={asc:"ASCENDING",desc:"DESCENDING"},dR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},fR={and:"AND",or:"OR"};class pR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wd(r,e){return r.useProto3Json||Tc(e)?e:{value:e}}function rc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function mR(r,e){return rc(r,e.toTimestamp())}function nr(r){return Ue(!!r),we.fromTimestamp(function(t){const s=Ri(t);return new mt(s.seconds,s.nanos)}(r))}function wf(r,e){return Kd(r,e).canonicalString()}function Kd(r,e){const t=function(o){return new Ye(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function iv(r){const e=Ye.fromString(r);return Ue(uv(e)),e}function Gd(r,e){return wf(r.databaseId,e.path)}function Sd(r,e){const t=iv(e);if(t.get(1)!==r.databaseId.projectId)throw new fe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new fe(Z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new ye(ov(t))}function sv(r,e){return wf(r.databaseId,e)}function gR(r){const e=iv(r);return e.length===4?Ye.emptyPath():ov(e)}function Qd(r){return new Ye(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function ov(r){return Ue(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Zg(r,e,t){return{name:Gd(r,e),fields:t.value.mapValue.fields}}function yR(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:Ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Ue(E===void 0||typeof E=="string"),Nt.fromBase64String(E||"")):(Ue(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Nt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const E=y.code===void 0?Z.UNKNOWN:ev(y.code);return new fe(E,y.message||"")}(h);t=new nv(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=Sd(r,s.document.name),l=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):we.min(),f=new En({mapValue:{fields:s.document.fields}}),p=Ut.newFoundDocument(o,l,h,f),y=s.targetIds||[],E=s.removedTargetIds||[];t=new $u(y,E,p.key,p)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=Sd(r,s.document),l=s.readTime?nr(s.readTime):we.min(),h=Ut.newNoDocument(o,l),f=s.removedTargetIds||[];t=new $u([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=Sd(r,s.document),l=s.removedTargetIds||[];t=new $u([],l,o,null)}else{if(!("filter"in e))return Ee();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new oR(o,l),f=s.targetId;t=new tv(f,h)}}return t}function _R(r,e){let t;if(e instanceof sl)t={update:Zg(r,e.key,e.value)};else if(e instanceof Z_)t={delete:Gd(r,e.key)};else if(e instanceof ys)t={update:Zg(r,e.key,e.data),updateMask:CR(e.fieldMask)};else{if(!(e instanceof rR))return Ee();t={verify:Gd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const f=h.transform;if(f instanceof tc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Xa)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Ja)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof nc)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw Ee()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:mR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ee()}(r,e.precondition)),t}function vR(r,e){return r&&r.length>0?(Ue(e!==void 0),r.map(t=>function(o,l){let h=o.updateTime?nr(o.updateTime):nr(l);return h.isEqual(we.min())&&(h=nr(l)),new eR(h,o.transformResults||[])}(t,e))):[]}function ER(r,e){return{documents:[sv(r,e.path)]}}function wR(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=sv(r,o);const l=function(y){if(y.length!==0)return lv(lr.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(E=>function(A){return{field:po(A.field),direction:SR(A.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Wd(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{ct:t,parent:o}}function TR(r){let e=gR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Ue(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const A=av(T);return A instanceof lr&&b_(A)?A.getFilters():[A]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(A=>function(F){return new ec(mo(F.field),function(j){switch(j){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(F.direction))}(A))}(t.orderBy));let f=null;t.limit&&(f=function(T){let A;return A=typeof T=="object"?T.value:T,Tc(A)?null:A}(t.limit));let p=null;t.startAt&&(p=function(T){const A=!!T.before,O=T.values||[];return new Zu(O,A)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const A=!T.before,O=T.values||[];return new Zu(O,A)}(t.endAt)),j0(e,o,h,l,f,"F",p,y)}function IR(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ee()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function av(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=mo(t.unaryFilter.field);return pt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=mo(t.unaryFilter.field);return pt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=mo(t.unaryFilter.field);return pt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=mo(t.unaryFilter.field);return pt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return Ee()}}(r):r.fieldFilter!==void 0?function(t){return pt.create(mo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ee()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return lr.create(t.compositeFilter.filters.map(s=>av(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return Ee()}}(t.compositeFilter.op))}(r):Ee()}function SR(r){return hR[r]}function RR(r){return dR[r]}function AR(r){return fR[r]}function po(r){return{fieldPath:r.canonicalString()}}function mo(r){return Pt.fromServerFormat(r.fieldPath)}function lv(r){return r instanceof pt?function(t){if(t.op==="=="){if(jg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NAN"}};if(Ug(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(jg(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NAN"}};if(Ug(t.value))return{unaryFilter:{field:po(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:po(t.field),op:RR(t.op),value:t.value}}}(r):r instanceof lr?function(t){const s=t.getFilters().map(o=>lv(o));return s.length===1?s[0]:{compositeFilter:{op:AR(t.op),filters:s}}}(r):Ee()}function CR(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function uv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,s,o,l=we.min(),h=we.min(),f=Nt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new yi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.ht=e}}function kR(r){const e=TR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Hd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(){this.ln=new xR}addToCollectionParentIndex(e,t){return this.ln.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(Si.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(Si.min())}updateCollectionGroup(e,t,s){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class xR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new gt(Ye.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new gt(Ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Zt{static withCacheSize(e){return new Zt(e,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Zt.DEFAULT_COLLECTION_PERCENTILE=10,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Zt.DEFAULT=new Zt(41943040,Zt.DEFAULT_COLLECTION_PERCENTILE,Zt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Zt.DISABLED=new Zt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ro(0)}static Qn(){return new Ro(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty([r,e],[t,s]){const o=xe(r,t);return o===0?xe(e,s):o}class DR{constructor(e){this.Gn=e,this.buffer=new gt(ty),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();ty(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class OR{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ae("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Oo(t)?ae("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Do(t)}await this.Yn(3e5)})}}class LR{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return K.resolve(wc.oe);const s=new DR(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(ey)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ey):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,l,h,f,p,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,f=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(y=Date.now(),ho()<=Pe.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(y-p)+`ms
Total Duration: ${y-E}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function VR(r,e){return new LR(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.changes=new gs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?K.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&Ba(s.mutation,o,Mn.empty(),mt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,ke()).next(()=>s))}getLocalViewOfDocuments(e,t,s=ke()){const o=ss();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=Ma();return l.forEach((f,p)=>{h=h.insert(f,p.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ss();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,ke()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=br();const h=za(),f=function(){return za()}();return t.forEach((p,y)=>{const E=s.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof ys)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),Ba(E.mutation,y,E.mutation.getFieldMask(),mt.now())):h.set(y.key,Mn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>{var T;return f.set(y,new MR(E,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const s=za();let o=new et((h,f)=>h-f),l=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(p=>{const y=t.get(p);if(y===null)return;let E=s.get(p)||Mn.empty();E=f.applyToLocalView(y,E),s.set(p,E);const T=(o.get(f.batchId)||ke()).add(p);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),y=p.key,E=p.value,T=H_();E.forEach(A=>{if(!l.has(A)){const O=X_(t.get(A),s.get(A));O!==null&&T.set(A,O),l=l.add(A)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return K.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):z0(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):K.resolve(ss());let f=-1,p=l;return h.next(y=>K.forEach(y,(E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?K.resolve():this.remoteDocumentCache.getEntry(e,E).next(A=>{p=p.insert(E,A)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,p,y,ke())).next(E=>({batchId:f,changes:q_(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ye(t)).next(s=>{let o=Ma();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Ma();return this.indexManager.getCollectionParents(e,l).next(f=>K.forEach(f,p=>{const y=function(T,A){return new Sc(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,s,o).next(E=>{E.forEach((T,A)=>{h=h.insert(T,A)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((p,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,Ut.newInvalidDocument(E)))});let f=Ma();return h.forEach((p,y)=>{const E=l.get(p);E!==void 0&&Ba(E.mutation,y,Mn.empty(),mt.now()),Ac(t,y)&&(f=f.insert(p,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return K.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}}(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:kR(o.bundledQuery),readTime:nr(o.readTime)}}(t)),K.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.overlays=new et(ye.comparator),this.dr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ss();return K.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.Tt(e,t,l)}),K.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.dr.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.dr.delete(s)),K.resolve()}getOverlaysForCollection(e,t,s){const o=ss(),l=t.length+1,h=new ye(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const p=f.getNext().value,y=p.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&p.largestBatchId>s&&o.set(p.getKey(),p)}return K.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new et((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>s){let E=l.get(y.largestBatchId);E===null&&(E=ss(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=ss(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((y,E)=>f.set(y,E)),!(f.size()>=o)););return K.resolve(f)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.dr.get(o.largestBatchId).delete(s.key);this.dr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new sR(t,s));let l=this.dr.get(t);l===void 0&&(l=ke(),this.dr.set(t,l)),this.dr.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(){this.Er=new gt(Tt.Ar),this.Rr=new gt(Tt.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(e,t){const s=new Tt(e,t);this.Er=this.Er.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new Tt(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new ye(new Ye([])),s=new Tt(t,e),o=new Tt(t,e+1),l=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.Er.forEach(e=>this.gr(e))}gr(e){this.Er=this.Er.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new ye(new Ye([])),s=new Tt(t,e),o=new Tt(t,e+1);let l=ke();return this.Rr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Tt(e,0),s=this.Er.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class Tt{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return ye.comparator(e.key,t.key)||xe(e.br,t.br)}static Vr(e,t){return xe(e.br,t.br)||ye.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new gt(Tt.Ar)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new iR(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new Tt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(h)}lookupMutationBatch(e,t){return K.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),l=o<0?0:o;return K.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new Tt(t,0),o=new Tt(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([s,o],h=>{const f=this.Cr(h.br);l.push(f)}),K.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new gt(xe);return t.forEach(o=>{const l=new Tt(o,0),h=new Tt(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{s=s.add(f.br)})}),K.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;ye.isDocumentKey(l)||(l=l.child(""));const h=new Tt(new ye(l),0);let f=new gt(xe);return this.vr.forEachWhile(p=>{const y=p.key.path;return!!s.isPrefixOf(y)&&(y.length===o&&(f=f.add(p.br)),!0)},h),K.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Ue(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return K.forEach(t.mutations,o=>{const l=new Tt(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Bn(e){}containsKey(e,t){const s=new Tt(t,0),o=this.vr.firstAfterOrEqual(s);return K.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.Nr=e,this.docs=function(){return new et(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return K.resolve(s?s.document.mutableCopy():Ut.newInvalidDocument(t))}getEntries(e,t){let s=br();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ut.newInvalidDocument(o))}),K.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=br();const h=t.path,f=new ye(h.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:y,value:{document:E}}=p.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||v0(_0(E),s)<=0||(o.has(E.key)||Ac(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return K.resolve(l)}getAllFromCollectionGroup(e,t,s,o){Ee()}Br(e,t){return K.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new qR(this)}getSize(e){return K.resolve(this.size)}}class qR extends bR{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),K.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e){this.persistence=e,this.Lr=new gs(t=>gf(t),yf),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.kr=0,this.qr=new Tf,this.targetCount=0,this.Qr=Ro.qn()}forEachTarget(e,t){return this.Lr.forEach((s,o)=>t(o)),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),K.resolve()}Un(e){this.Lr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new Ro(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.Un(t),K.resolve()}removeTargetData(e,t){return this.Lr.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Lr.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Lr.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),K.waitFor(l).next(()=>o)}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const s=this.Lr.get(t)||null;return K.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),K.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),K.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return K.resolve(s)}containsKey(e,t){return K.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t){this.Kr={},this.overlays={},this.$r=new wc(0),this.Ur=!1,this.Ur=!0,this.Wr=new zR,this.referenceDelegate=e(this),this.Gr=new HR(this),this.indexManager=new NR,this.remoteDocumentCache=function(o){return new $R(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new PR(t),this.jr=new UR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new jR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new BR(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){ae("MemoryPersistence","Starting transaction:",e);const o=new WR(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return K.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class WR extends w0{constructor(e){super(),this.currentSequenceNumber=e}}class If{constructor(e){this.persistence=e,this.Zr=new Tf,this.Xr=null}static ei(e){return new If(e)}get ti(){if(this.Xr)return this.Xr;throw Ee()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),K.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),K.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.ti,s=>{const o=ye.fromPath(s);return this.ni(e,o).next(l=>{l||t.removeEntry(o,we.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return K.or([()=>K.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class ic{constructor(e,t){this.persistence=e,this.ri=new gs(s=>S0(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=VR(this,t)}static ei(e,t){return new ic(e,t)}Hr(){}Jr(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return K.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(l=>l?K.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Br(e,h=>this.ir(e,h,t).next(f=>{f||(s++,l.removeEntry(h,we.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),K.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),K.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ju(e.data.value)),t}ir(e,t,s){return K.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return K.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=ke(),o=ke();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Sf(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return $I()?8:T0(jt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new KR;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(ho()<=Pe.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",fo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),K.resolve()):(ho()<=Pe.DEBUG&&ae("QueryEngine","Query:",fo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(ho()<=Pe.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",fo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):K.resolve())}Xi(e,t){if(qg(t))return K.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=Hd(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=ke(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(p=>{const y=this.rs(t,f);return this.ss(t,y,h,p.readTime)?this.Xi(e,Hd(t,null,"F")):this.os(e,y,t,p)}))})))}es(e,t,s,o){return qg(t)||o.isEqual(we.min())?K.resolve(null):this.Zi.getDocuments(e,s).next(l=>{const h=this.rs(t,l);return this.ss(t,h,s,o)?K.resolve(null):(ho()<=Pe.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),fo(t)),this.os(e,h,t,y0(o,-1)).next(f=>f))})}rs(e,t){let s=new gt(B_(e));return t.forEach((o,l)=>{Ac(e,l)&&(s=s.add(l))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,s){return ho()<=Pe.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",fo(t)),this.Zi.getDocumentsMatchingQuery(e,t,Si.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new et(xe),this.cs=new gs(l=>gf(l),yf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function YR(r,e,t,s){return new QR(r,e,t,s)}async function hv(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let p=ke();for(const y of o){h.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)p=p.add(E.key)}return t.localDocuments.getDocuments(s,p).next(y=>({Ts:y,removedBatchIds:h,addedBatchIds:f}))})})}function XR(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,p,y,E){const T=y.batch,A=T.keys();let O=K.resolve();return A.forEach(F=>{O=O.next(()=>E.getEntry(p,F)).next($=>{const j=y.docVersions.get(F);Ue(j!==null),$.version.compareTo(j)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),E.addEntry($)))})}),O.next(()=>f.mutationQueue.removeMutationBatch(p,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let p=ke();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(p=p.add(f.batch.mutations[y].key));return p}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function dv(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function JR(r,e){const t=Ie(r),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((E,T)=>{const A=o.get(T);if(!A)return;f.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let O=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(Nt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(E.resumeToken,s)),o=o.insert(T,O),function($,j,W){return $.resumeToken.approximateByteSize()===0||j.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(A,O,E)&&f.push(t.Gr.updateTargetData(l,O))});let p=br(),y=ke();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(ZR(l,h,e.documentUpdates).next(E=>{p=E.Is,y=E.ds})),!s.isEqual(we.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(E)}return K.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,y)).next(()=>p)}).then(l=>(t.us=o,l))}function ZR(r,e,t){let s=ke(),o=ke();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=br();return t.forEach((f,p)=>{const y=l.get(f);p.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(f,p.readTime),h=h.insert(f,p)):!y.isValidDocument()||p.version.compareTo(y.version)>0||p.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(p),h=h.insert(f,p)):ae("LocalStore","Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",p.version)}),{Is:h,ds:o}})}function eA(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function tA(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(l=>l?(o=l,K.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new yi(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function Yd(r,e,t){const s=Ie(r),o=s.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!Oo(h))throw h;ae("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function ny(r,e,t){const s=Ie(r);let o=we.min(),l=ke();return s.persistence.runTransaction("Execute query","readwrite",h=>function(p,y,E){const T=Ie(p),A=T.cs.get(E);return A!==void 0?K.resolve(T.us.get(A)):T.Gr.getTargetData(y,E)}(s,h,tr(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,f.targetId).next(p=>{l=p})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:ke())).next(f=>(nA(s,$0(e),f),{documents:f,Es:l})))}function nA(r,e,t){let s=r.ls.get(e)||we.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.ls.set(e,s)}class ry{constructor(){this.activeTargetIds=Q0()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class rA{constructor(){this._o=new ry,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new ry,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu=null;function Rd(){return Lu===null?Lu=function(){return 268435456+Math.round(2147483648*Math.random())}():Lu++,"0x"+Lu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="WebChannelConnection";class aA extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,s,o,l,h){const f=Rd(),p=this.No(t,s.toUriEncodedString());ae("RestConnection",`Sending RPC '${t}' ${f}:`,p,o);const y={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(y,l,h),this.Lo(t,p,y,o).then(E=>(ae("RestConnection",`Received RPC '${t}' ${f}: `,E),E),E=>{throw wo("RestConnection",`RPC '${t}' ${f} failed with error: `,E,"url: ",p,"request:",o),E})}ko(t,s,o,l,h,f){return this.Oo(t,s,o,l,h)}Bo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xo}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,s){const o=sA[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Lo(e,t,s,o){const l=Rd();return new Promise((h,f)=>{const p=new S_;p.setWithCredentials(!0),p.listenOnce(R_.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Uu.NO_ERROR:const E=p.getResponseJson();ae(Mt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Uu.TIMEOUT:ae(Mt,`RPC '${e}' ${l} timed out`),f(new fe(Z.DEADLINE_EXCEEDED,"Request time out"));break;case Uu.HTTP_ERROR:const T=p.getStatus();if(ae(Mt,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let A=p.getResponseJson();Array.isArray(A)&&(A=A[0]);const O=A==null?void 0:A.error;if(O&&O.status&&O.message){const F=function(j){const W=j.toLowerCase().replace(/_/g,"-");return Object.values(Z).indexOf(W)>=0?W:Z.UNKNOWN}(O.status);f(new fe(F,O.message))}else f(new fe(Z.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new fe(Z.UNAVAILABLE,"Connection failed."));break;default:Ee()}}finally{ae(Mt,`RPC '${e}' ${l} completed.`)}});const y=JSON.stringify(o);ae(Mt,`RPC '${e}' ${l} sending request:`,o),p.send(t,"POST",y,s,15)})}qo(e,t,s){const o=Rd(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=P_(),f=C_(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Bo(p.initMessageHeaders,t,s),p.encodeInitMessageHeaders=!0;const E=l.join("");ae(Mt,`Creating RPC '${e}' stream ${o}: ${E}`,p);const T=h.createWebChannel(E,p);let A=!1,O=!1;const F=new oA({Eo:j=>{O?ae(Mt,`Not sending because RPC '${e}' stream ${o} is closed:`,j):(A||(ae(Mt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),A=!0),ae(Mt,`RPC '${e}' stream ${o} sending:`,j),T.send(j))},Ao:()=>T.close()}),$=(j,W,X)=>{j.listen(W,Q=>{try{X(Q)}catch(ie){setTimeout(()=>{throw ie},0)}})};return $(T,ba.EventType.OPEN,()=>{O||(ae(Mt,`RPC '${e}' stream ${o} transport opened.`),F.So())}),$(T,ba.EventType.CLOSE,()=>{O||(O=!0,ae(Mt,`RPC '${e}' stream ${o} transport closed`),F.Do())}),$(T,ba.EventType.ERROR,j=>{O||(O=!0,wo(Mt,`RPC '${e}' stream ${o} transport errored:`,j),F.Do(new fe(Z.UNAVAILABLE,"The operation could not be completed")))}),$(T,ba.EventType.MESSAGE,j=>{var W;if(!O){const X=j.data[0];Ue(!!X);const Q=X,ie=(Q==null?void 0:Q.error)||((W=Q[0])===null||W===void 0?void 0:W.error);if(ie){ae(Mt,`RPC '${e}' stream ${o} received error:`,ie);const Se=ie.status;let Te=function(R){const k=lt[R];if(k!==void 0)return ev(k)}(Se),N=ie.message;Te===void 0&&(Te=Z.INTERNAL,N="Unknown error status: "+Se+" with message "+ie.message),O=!0,F.Do(new fe(Te,N)),T.close()}else ae(Mt,`RPC '${e}' stream ${o} received:`,X),F.vo(X)}}),$(f,A_.STAT_EVENT,j=>{j.stat===jd.PROXY?ae(Mt,`RPC '${e}' stream ${o} detected buffering proxy`):j.stat===jd.NOPROXY&&ae(Mt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{F.bo()},0),F}}function Ad(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(r){return new pR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t,s=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,s,o,l,h,f,p){this.li=e,this.Yo=s,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new fv(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===Z.RESOURCE_EXHAUSTED?(Vr(t.toString()),Vr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===Z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new fe(Z.UNKNOWN,"Fetching auth token failed: "+s.message);return this.d_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.E_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.d_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}d_(e){return ae("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lA extends pv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}E_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=yR(this.serializer,e),s=function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?nr(h.readTime):we.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Qd(this.serializer),t.addTarget=function(l,h){let f;const p=h.target;if(f=qd(p)?{documents:ER(l,p)}:{query:wR(l,p).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=rv(l,h.resumeToken);const y=Wd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=rc(l,h.snapshotVersion.toTimestamp());const y=Wd(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const s=IR(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Qd(this.serializer),t.removeTarget=e,this.c_(t)}}class uA extends pv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=vR(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Qd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>_R(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new fe(Z.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,Kd(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(Z.UNKNOWN,l.toString())})}ko(e,t,s,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Kd(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new fe(Z.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class hA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Vr(t),this.C_=!1):ae("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{_s(this)&&(ae("RemoteStore","Restarting streams for network reachability change."),await async function(p){const y=Ie(p);y.k_.add(4),await al(y),y.K_.set("Unknown"),y.k_.delete(4),await xc(y)}(this))})}),this.K_=new hA(s,o)}}async function xc(r){if(_s(r))for(const e of r.q_)await e(!0)}async function al(r){for(const e of r.q_)await e(!1)}function mv(r,e){const t=Ie(r);t.L_.has(e.targetId)||(t.L_.set(e.targetId,e),Pf(t)?Cf(t):Lo(t).s_()&&Af(t,e))}function Rf(r,e){const t=Ie(r),s=Lo(t);t.L_.delete(e),s.s_()&&gv(t,e),t.L_.size===0&&(s.s_()?s.a_():_s(t)&&t.K_.set("Unknown"))}function Af(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Lo(r).V_(e)}function gv(r,e){r.U_.xe(e),Lo(r).m_(e)}function Cf(r){r.U_=new cR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.L_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),Lo(r).start(),r.K_.F_()}function Pf(r){return _s(r)&&!Lo(r).i_()&&r.L_.size>0}function _s(r){return Ie(r).k_.size===0}function yv(r){r.U_=void 0}async function fA(r){r.K_.set("Online")}async function pA(r){r.L_.forEach((e,t)=>{Af(r,e)})}async function mA(r,e){yv(r),Pf(r)?(r.K_.O_(e),Cf(r)):r.K_.set("Unknown")}async function gA(r,e,t){if(r.K_.set("Online"),e instanceof nv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.L_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.L_.delete(f),o.U_.removeTarget(f))}(r,e)}catch(s){ae("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await sc(r,s)}else if(e instanceof $u?r.U_.$e(e):e instanceof tv?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(we.min()))try{const s=await dv(r.localStore);t.compareTo(s)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((p,y)=>{if(p.resumeToken.approximateByteSize()>0){const E=l.L_.get(y);E&&l.L_.set(y,E.withResumeToken(p.resumeToken,h))}}),f.targetMismatches.forEach((p,y)=>{const E=l.L_.get(p);if(!E)return;l.L_.set(p,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),gv(l,p);const T=new yi(E.target,p,y,E.sequenceNumber);Af(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){ae("RemoteStore","Failed to raise snapshot:",s),await sc(r,s)}}async function sc(r,e,t){if(!Oo(e))throw e;r.k_.add(1),await al(r),r.K_.set("Offline"),t||(t=()=>dv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ae("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await xc(r)})}function _v(r,e){return e().catch(t=>sc(r,t,e))}async function Dc(r){const e=Ie(r),t=Pi(e);let s=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;yA(e);)try{const o=await eA(e.localStore,s);if(o===null){e.B_.length===0&&t.a_();break}s=o.batchId,_A(e,o)}catch(o){await sc(e,o)}vv(e)&&Ev(e)}function yA(r){return _s(r)&&r.B_.length<10}function _A(r,e){r.B_.push(e);const t=Pi(r);t.s_()&&t.f_&&t.g_(e.mutations)}function vv(r){return _s(r)&&!Pi(r).i_()&&r.B_.length>0}function Ev(r){Pi(r).start()}async function vA(r){Pi(r).w_()}async function EA(r){const e=Pi(r);for(const t of r.B_)e.g_(t.mutations)}async function wA(r,e,t){const s=r.B_.shift(),o=vf.from(s,e,t);await _v(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Dc(r)}async function TA(r,e){e&&Pi(r).f_&&await async function(s,o){if(function(h){return aR(h)&&h!==Z.ABORTED}(o.code)){const l=s.B_.shift();Pi(s).__(),await _v(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Dc(s)}}(r,e),vv(r)&&Ev(r)}async function sy(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),ae("RemoteStore","RemoteStore received new credentials");const s=_s(t);t.k_.add(3),await al(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await xc(t)}async function IA(r,e){const t=Ie(r);e?(t.k_.delete(2),await xc(t)):e||(t.k_.add(2),await al(t),t.K_.set("Unknown"))}function Lo(r){return r.W_||(r.W_=function(t,s,o){const l=Ie(t);return l.b_(),new lA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:fA.bind(null,r),mo:pA.bind(null,r),po:mA.bind(null,r),R_:gA.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Pf(r)?Cf(r):r.K_.set("Unknown")):(await r.W_.stop(),yv(r))})),r.W_}function Pi(r){return r.G_||(r.G_=function(t,s,o){const l=Ie(t);return l.b_(),new uA(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:vA.bind(null,r),po:TA.bind(null,r),p_:EA.bind(null,r),y_:wA.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await Dc(r)):(await r.G_.stop(),r.B_.length>0&&(ae("RemoteStore",`Stopping write stream with ${r.B_.length} pending writes`),r.B_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new wi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new kf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(Z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Nf(r,e){if(Vr("AsyncQueue",`${e}: ${r}`),Oo(r))return new fe(Z.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{static emptySet(e){return new yo(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||ye.comparator(t.key,s.key):(t,s)=>ye.comparator(t.key,s.key),this.keyedMap=Ma(),this.sortedSet=new et(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof yo)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new yo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.z_=new et(ye.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):Ee():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class Ao{constructor(e,t,s,o,l,h,f,p,y){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=y}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Ao(e,t,yo.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class RA{constructor(){this.queries=ay(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=Ie(t),l=o.queries;o.queries=ay(),l.forEach((h,f)=>{for(const p of f.J_)p.onError(s)})})(this,new fe(Z.ABORTED,"Firestore shutting down"))}}function ay(){return new gs(r=>z_(r),Rc)}async function AA(r,e){const t=Ie(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(s=2):(l=new SA,s=e.Z_()?0:1);try{switch(s){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=Nf(h,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&xf(t)}async function CA(r,e){const t=Ie(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function PA(r,e){const t=Ie(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(s=!0);h.H_=o}}s&&xf(t)}function kA(r,e,t){const s=Ie(r),o=s.queries.get(e);if(o)for(const l of o.J_)l.onError(t);s.queries.delete(e)}function xf(r){r.X_.forEach(e=>{e.next()})}var Xd,ly;(ly=Xd||(Xd={})).na="default",ly.Cache="cache";class NA{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new Ao(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=Ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==Xd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.key=e}}class Tv{constructor(e){this.key=e}}class xA{constructor(e,t){this.query=e,this.Ea=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ke(),this.mutatedKeys=ke(),this.Va=B_(e),this.ma=new yo(this.Va)}get fa(){return this.Ea}ga(e,t){const s=t?t.pa:new oy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const p=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const A=o.get(E),O=Ac(this.query,T)?T:null,F=!!A&&this.mutatedKeys.has(A.key),$=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let j=!1;A&&O?A.data.isEqual(O.data)?F!==$&&(s.track({type:3,doc:O}),j=!0):this.ya(A,O)||(s.track({type:2,doc:O}),j=!0,(p&&this.Va(O,p)>0||y&&this.Va(O,y)<0)&&(f=!0)):!A&&O?(s.track({type:0,doc:O}),j=!0):A&&!O&&(s.track({type:1,doc:A}),j=!0,(p||y)&&(f=!0)),j&&(O?(h=h.add(O),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{ma:h,pa:s,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,T)=>function(O,F){const $=j=>{switch(j){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ee()}};return $(O)-$(F)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(s),o=o!=null&&o;const f=t&&!o?this.Sa():[],p=this.Ra.size===0&&this.current&&!o?1:0,y=p!==this.Aa;return this.Aa=p,h.length!==0||y?{snapshot:new Ao(this.query,e.ma,l,h,e.mutatedKeys,p===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new oy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.Ea.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.Ea=this.Ea.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ea=this.Ea.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ke(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new Tv(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new wv(s))}),t}va(e){this.Ea=e.Es,this.Ra=ke();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return Ao.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class DA{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class OA{constructor(e){this.key=e,this.Fa=!1}}class LA{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new gs(f=>z_(f),Rc),this.Oa=new Map,this.Na=new Set,this.Ba=new et(ye.comparator),this.La=new Map,this.ka=new Tf,this.qa={},this.Qa=new Map,this.Ka=Ro.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function VA(r,e,t=!0){const s=Pv(r);let o;const l=s.xa.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await Iv(s,e,t,!0),o}async function bA(r,e){const t=Pv(r);await Iv(t,e,!0,!1)}async function Iv(r,e,t,s){const o=await tA(r.localStore,tr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await MA(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&mv(r.remoteStore,o),f}async function MA(r,e,t,s,o){r.Ua=(T,A,O)=>async function($,j,W,X){let Q=j.view.ga(W);Q.ss&&(Q=await ny($.localStore,j.query,!1).then(({documents:N})=>j.view.ga(N,Q)));const ie=X&&X.targetChanges.get(j.targetId),Se=X&&X.targetMismatches.get(j.targetId)!=null,Te=j.view.applyChanges(Q,$.isPrimaryClient,ie,Se);return cy($,j.targetId,Te.ba),Te.snapshot}(r,T,A,O);const l=await ny(r.localStore,e,!0),h=new xA(e,l.Es),f=h.ga(l.documents),p=ol.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),y=h.applyChanges(f,r.isPrimaryClient,p);cy(r,t,y.ba);const E=new DA(e,t,h);return r.xa.set(e,E),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),y.snapshot}async function FA(r,e,t){const s=Ie(r),o=s.xa.get(e),l=s.Oa.get(o.targetId);if(l.length>1)return s.Oa.set(o.targetId,l.filter(h=>!Rc(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await Yd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Rf(s.remoteStore,o.targetId),Jd(s,o.targetId)}).catch(Do)):(Jd(s,o.targetId),await Yd(s.localStore,o.targetId,!0))}async function UA(r,e){const t=Ie(r),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Rf(t.remoteStore,s.targetId))}async function jA(r,e,t){const s=KA(r);try{const o=await function(h,f){const p=Ie(h),y=mt.now(),E=f.reduce((O,F)=>O.add(F.key),ke());let T,A;return p.persistence.runTransaction("Locally write mutations","readwrite",O=>{let F=br(),$=ke();return p.hs.getEntries(O,E).next(j=>{F=j,F.forEach((W,X)=>{X.isValidDocument()||($=$.add(W))})}).next(()=>p.localDocuments.getOverlayedDocuments(O,F)).next(j=>{T=j;const W=[];for(const X of f){const Q=nR(X,T.get(X.key).overlayedDocument);Q!=null&&W.push(new ys(X.key,Q,O_(Q.value.mapValue),Dr.exists(!0)))}return p.mutationQueue.addMutationBatch(O,y,W,f)}).next(j=>{A=j;const W=j.applyToLocalDocumentSet(T,$);return p.documentOverlayCache.saveOverlays(O,j.batchId,W)})}).then(()=>({batchId:A.batchId,changes:q_(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,p){let y=h.qa[h.currentUser.toKey()];y||(y=new et(xe)),y=y.insert(f,p),h.qa[h.currentUser.toKey()]=y}(s,o.batchId,t),await ll(s,o.changes),await Dc(s.remoteStore)}catch(o){const l=Nf(o,"Failed to persist write");t.reject(l)}}async function Sv(r,e){const t=Ie(r);try{const s=await JR(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.La.get(l);h&&(Ue(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Ue(h.Fa):o.removedDocuments.size>0&&(Ue(h.Fa),h.Fa=!1))}),await ll(t,s,e)}catch(s){await Do(s)}}function uy(r,e,t){const s=Ie(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const p=Ie(h);p.onlineState=f;let y=!1;p.queries.forEach((E,T)=>{for(const A of T.J_)A.ea(f)&&(y=!0)}),y&&xf(p)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function zA(r,e,t){const s=Ie(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.La.get(e),l=o&&o.key;if(l){let h=new et(ye.comparator);h=h.insert(l,Ut.newNoDocument(l,we.min()));const f=ke().add(l),p=new kc(we.min(),new Map,new et(xe),h,f);await Sv(s,p),s.Ba=s.Ba.remove(l),s.La.delete(e),Df(s)}else await Yd(s.localStore,e,!1).then(()=>Jd(s,e,t)).catch(Do)}async function BA(r,e){const t=Ie(r),s=e.batch.batchId;try{const o=await XR(t.localStore,e);Av(t,s,null),Rv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await ll(t,o)}catch(o){await Do(o)}}async function $A(r,e,t){const s=Ie(r);try{const o=await function(h,f){const p=Ie(h);return p.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return p.mutationQueue.lookupMutationBatch(y,f).next(T=>(Ue(T!==null),E=T.keys(),p.mutationQueue.removeMutationBatch(y,T))).next(()=>p.mutationQueue.performConsistencyCheck(y)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(y,E,f)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>p.localDocuments.getDocuments(y,E))})}(s.localStore,e);Av(s,e,t),Rv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await ll(s,o)}catch(o){await Do(o)}}function Rv(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Av(r,e,t){const s=Ie(r);let o=s.qa[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function Jd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),t&&r.Ma.Wa(s,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(s=>{r.ka.containsKey(s)||Cv(r,s)})}function Cv(r,e){r.Na.delete(e.path.canonicalString());const t=r.Ba.get(e);t!==null&&(Rf(r.remoteStore,t),r.Ba=r.Ba.remove(e),r.La.delete(t),Df(r))}function cy(r,e,t){for(const s of t)s instanceof wv?(r.ka.addReference(s.key,e),qA(r,s)):s instanceof Tv?(ae("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||Cv(r,s.key)):Ee()}function qA(r,e){const t=e.key,s=t.path.canonicalString();r.Ba.get(t)||r.Na.has(s)||(ae("SyncEngine","New document in limbo: "+t),r.Na.add(s),Df(r))}function Df(r){for(;r.Na.size>0&&r.Ba.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new ye(Ye.fromString(e)),s=r.Ka.next();r.La.set(s,new OA(t)),r.Ba=r.Ba.insert(t,s),mv(r.remoteStore,new yi(tr(j_(t.path)),s,"TargetPurposeLimboResolution",wc.oe))}}async function ll(r,e,t){const s=Ie(r),o=[],l=[],h=[];s.xa.isEmpty()||(s.xa.forEach((f,p)=>{h.push(s.Ua(p,e,t).then(y=>{var E;if((y||t)&&s.isPrimaryClient){const T=y?!y.fromCache:(E=t==null?void 0:t.targetChanges.get(p.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(p.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Sf.zi(p.targetId,y);l.push(T)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(p,y){const E=Ie(p);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>K.forEach(y,A=>K.forEach(A.Wi,O=>E.persistence.referenceDelegate.addReference(T,A.targetId,O)).next(()=>K.forEach(A.Gi,O=>E.persistence.referenceDelegate.removeReference(T,A.targetId,O)))))}catch(T){if(!Oo(T))throw T;ae("LocalStore","Failed to update sequence numbers: "+T)}for(const T of y){const A=T.targetId;if(!T.fromCache){const O=E.us.get(A),F=O.snapshotVersion,$=O.withLastLimboFreeSnapshotVersion(F);E.us=E.us.insert(A,$)}}}(s.localStore,l))}async function HA(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){ae("SyncEngine","User change. New user:",e.toKey());const s=await hv(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(p=>{p.reject(new fe(Z.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ll(t,s.Ts)}}function WA(r,e){const t=Ie(r),s=t.La.get(e);if(s&&s.Fa)return ke().add(s.key);{let o=ke();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function Pv(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Sv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=WA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zA.bind(null,e),e.Ma.R_=PA.bind(null,e.eventManager),e.Ma.Wa=kA.bind(null,e.eventManager),e}function KA(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$A.bind(null,e),e}class oc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return YR(this.persistence,new GR,e.initialUser,this.serializer)}ja(e){return new cv(If.ei,this.serializer)}za(e){return new rA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oc.provider={build:()=>new oc};class GA extends oc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Ue(this.persistence.referenceDelegate instanceof ic);const s=this.persistence.referenceDelegate.garbageCollector;return new OR(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?Zt.withCacheSize(this.cacheSizeBytes):Zt.DEFAULT;return new cv(s=>ic.ei(s,t),this.serializer)}}class Zd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>uy(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=HA.bind(null,this.syncEngine),await IA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new RA}()}createDatastore(e){const t=Nc(e.databaseInfo.databaseId),s=function(l){return new aA(l)}(e.databaseInfo);return function(l,h,f,p){return new cA(l,h,f,p)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new dA(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>uy(this.syncEngine,t,0),function(){return iy.p()?new iy:new iA}())}createSyncEngine(e,t){return function(o,l,h,f,p,y,E){const T=new LA(o,l,h,f,p,y);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ie(o);ae("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await al(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Zd.provider={build:()=>new Zd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Vr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ft.UNAUTHENTICATED,this.clientId=N_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{ae("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ae("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Nf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Cd(r,e){r.asyncQueue.verifyOperationInProgress(),ae("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await hv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function hy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await XA(r);ae("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>sy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>sy(e.remoteStore,o)),r._onlineComponents=e}async function XA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ae("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cd(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===Z.FAILED_PRECONDITION||o.code===Z.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;wo("Error using user provided cache. Falling back to memory cache: "+t),await Cd(r,new oc)}}else ae("FirestoreClient","Using default OfflineComponentProvider"),await Cd(r,new GA(void 0));return r._offlineComponents}async function kv(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ae("FirestoreClient","Using user provided OnlineComponentProvider"),await hy(r,r._uninitializedComponentsProvider._online)):(ae("FirestoreClient","Using default OnlineComponentProvider"),await hy(r,new Zd))),r._onlineComponents}function JA(r){return kv(r).then(e=>e.syncEngine)}async function ZA(r){const e=await kv(r),t=e.eventManager;return t.onListen=VA.bind(null,e.syncEngine),t.onUnlisten=FA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=UA.bind(null,e.syncEngine),t}function eC(r,e,t={}){const s=new wi;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,p,y){const E=new QA({next:A=>{E.eu(),h.enqueueAndForget(()=>CA(l,T)),A.fromCache&&p.source==="server"?y.reject(new fe(Z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(A)},error:A=>y.reject(A)}),T=new NA(f,E,{includeMetadataChanges:!0,ua:!0});return AA(l,T)}(await ZA(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(r,e,t){if(!t)throw new fe(Z.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function tC(r,e,t,s){if(e===!0&&s===!0)throw new fe(Z.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function fy(r){if(!ye.isDocumentKey(r))throw new fe(Z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function py(r){if(ye.isDocumentKey(r))throw new fe(Z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Of(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Ee()}function ac(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new fe(Z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Of(r);throw new fe(Z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(Z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new fe(Z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Nv((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new fe(Z.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new my({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(Z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(Z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new my(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new l0;switch(s.type){case"firstParty":return new d0(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new fe(Z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=dy.get(t);s&&(ae("ComponentProvider","Removing Datastore"),dy.delete(t),s.terminate())}(this),Promise.resolve()}}function nC(r,e,t,s={}){var o;const l=(r=ac(r,Oc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let f,p;if(typeof s.mockUserToken=="string")f=s.mockUserToken,p=Ft.MOCK_USER;else{f=MI(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const y=s.mockUserToken.sub||s.mockUserToken.user_id;if(!y)throw new fe(Z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Ft(y)}r._authCredentials=new u0(new k_(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Lc(this.firestore,e,this._query)}}class Fn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ti(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fn(this.firestore,e,this._key)}}class Ti extends Lc{constructor(e,t,s){super(e,t,j_(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fn(this.firestore,null,new ye(e))}withConverter(e){return new Ti(this.firestore,e,this._path)}}function gy(r,e,...t){if(r=kt(r),xv("collection","path",e),r instanceof Oc){const s=Ye.fromString(e,...t);return py(s),new Ti(r,null,s)}{if(!(r instanceof Fn||r instanceof Ti))throw new fe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return py(s),new Ti(r.firestore,null,s)}}function rC(r,e,...t){if(r=kt(r),arguments.length===1&&(e=N_.newId()),xv("doc","path",e),r instanceof Oc){const s=Ye.fromString(e,...t);return fy(s),new Fn(r,null,new ye(s))}{if(!(r instanceof Fn||r instanceof Ti))throw new fe(Z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ye.fromString(e,...t));return fy(s),new Fn(r.firestore,r instanceof Ti?r.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new fv(this,"async_queue_retry"),this.fu=()=>{const s=Ad();s&&ae("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=Ad();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.du){this.du=!0,this.Vu=e||!1;const t=Ad();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.du)return new Promise(()=>{});const t=new wi;return this.yu(()=>this.du&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Oo(e))throw e;ae("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw Vr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=kf.createAndSchedule(this,e,t,s,l=>this.Su(l));return this.Eu.push(o),o}pu(){this.Au&&Ee()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.Eu)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.Eu.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Eu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.Eu.indexOf(e);this.Eu.splice(t,1)}}class Lf extends Oc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new yy,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yy(e),this._firestoreClient=void 0,await e}}}function Dv(r,e){const t=typeof r=="object"?r:df(),s=typeof r=="string"?r:"(default)",o=ps(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=VI("firestore");l&&nC(o,...l)}return o}function Ov(r){if(r._terminated)throw new fe(Z.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||iC(r),r._firestoreClient}function iC(r){var e,t,s;const o=r._freezeSettings(),l=function(f,p,y,E){return new C0(f,p,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,Nv(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new YA(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const p=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(p),_online:p}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Co(Nt.fromBase64String(e))}catch(t){throw new fe(Z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Co(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(Z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(Z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(Z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=/^__.*__$/;class oC{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ys(e,this.data,this.fieldMask,t,this.fieldTransforms):new sl(e,this.data,t,this.fieldTransforms)}}function Vv(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ee()}}class Ff{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Ff(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Bu(e),o}Lu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return lc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Bu(this.path.get(e))}Bu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(Vv(this.Mu)&&sC.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class aC{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Nc(e)}$u(e,t,s,o=!1){return new Ff({Mu:e,methodName:t,Ku:s,path:Pt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lC(r){const e=r._freezeSettings(),t=Nc(r._databaseId);return new aC(r._databaseId,!!e.ignoreUndefinedProperties,t)}function uC(r,e,t,s,o,l={}){const h=r.$u(l.merge||l.mergeFields?2:0,e,t,o);Uv("Data must be an object, but it was:",h,s);const f=Mv(s,h);let p,y;if(l.merge)p=new Mn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const A=cC(e,T,t);if(!h.contains(A))throw new fe(Z.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);dC(E,A)||E.push(A)}p=new Mn(E),y=h.fieldTransforms.filter(T=>p.covers(T.field))}else p=null,y=h.fieldTransforms;return new oC(new En(f),p,y)}function bv(r,e){if(Fv(r=kt(r)))return Uv("Unsupported field value:",e,r),Mv(r,e);if(r instanceof Lv)return function(s,o){if(!Vv(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const f of s){let p=bv(f,o.ku(h));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),h++}return{arrayValue:{values:l}}}(r,e)}return function(s,o){if((s=kt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Y0(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=mt.fromDate(s);return{timestampValue:rc(o.serializer,l)}}if(s instanceof mt){const l=new mt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:rc(o.serializer,l)}}if(s instanceof bf)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Co)return{bytesValue:rv(o.serializer,s._byteString)};if(s instanceof Fn){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:wf(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Mf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(p=>{if(typeof p!="number")throw f.qu("VectorValues must only contain numeric values.");return _f(f.serializer,p)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${Of(s)}`)}(r,e)}function Mv(r,e){const t={};return x_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ms(r,(s,o)=>{const l=bv(o,e.Ou(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function Fv(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof mt||r instanceof bf||r instanceof Co||r instanceof Fn||r instanceof Lv||r instanceof Mf)}function Uv(r,e,t){if(!Fv(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Of(t);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}function cC(r,e,t){if((e=kt(e))instanceof Vf)return e._internalPath;if(typeof e=="string")return jv(r,e);throw lc("Field path arguments must be of type string or ",r,!1,void 0,t)}const hC=new RegExp("[~\\*/\\[\\]]");function jv(r,e,t){if(e.search(hC)>=0)throw lc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Vf(...e.split("."))._internalPath}catch{throw lc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function lc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||h)&&(p+=" (found",l&&(p+=` in field ${s}`),h&&(p+=` in document ${o}`),p+=")"),new fe(Z.INVALID_ARGUMENT,f+r+p)}function dC(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zv{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Fn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Bv("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fC extends zv{data(){return super.data()}}function Bv(r,e){return typeof e=="string"?jv(r,e):e instanceof Vf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new fe(Z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mC{convertValue(e,t="none"){switch(Ci(e)){case 0:return null;case 1:return e.booleanValue;case 2:return st(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ai(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ee()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ms(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>st(h.doubleValue));return new Mf(l)}convertGeoPoint(e){return new bf(st(e.latitude),st(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ic(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const t=Ri(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ye.fromString(e);Ue(uv(s));const o=new Qa(s.get(1),s.get(3)),l=new ye(s.popFirst(5));return o.isEqual(t)||Vr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yC extends zv{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Bv("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class qu extends yC{data(e={}){return super.data(e)}}class _C{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Vu(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new qu(this._firestore,this._userDataWriter,s.key,s,new Vu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(Z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const p=new qu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Vu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const p=new qu(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Vu(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:vC(f.type),doc:p,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vC(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ee()}}class EC extends mC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Co(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Fn(this.firestore,null,t)}}function wC(r){r=ac(r,Lc);const e=ac(r.firestore,Lf),t=Ov(e),s=new EC(e);return pC(r._query),eC(t,r._query).then(o=>new _C(e,s,r,o))}function TC(r,e){const t=ac(r.firestore,Lf),s=rC(r),o=gC(r.converter,e);return IC(t,[uC(lC(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,Dr.exists(!1))]).then(()=>s)}function IC(r,e){return function(s,o){const l=new wi;return s.asyncQueue.enqueueAndForget(async()=>jA(await JA(s),o,l)),l.promise}(Ov(r),e)}(function(e,t=!0){(function(o){xo=o})(No),or(new Un("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Lf(new c0(s.getProvider("auth-internal")),new p0(s.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new fe(Z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qa(y.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),wn(Og,"4.7.6",e),wn(Og,"4.7.6","esm2017")})();var SC="firebase",RC="11.2.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wn(SC,RC,"app");const $v="@firebase/installations",Uf="0.6.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qv=1e4,Hv=`w:${Uf}`,Wv="FIS_v2",AC="https://firebaseinstallations.googleapis.com/v1",CC=60*60*1e3,PC="installations",kC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ls=new fs(PC,kC,NC);function Kv(r){return r instanceof zn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv({projectId:r}){return`${AC}/projects/${r}/installations`}function Qv(r){return{token:r.token,requestStatus:2,expiresIn:DC(r.expiresIn),creationTime:Date.now()}}async function Yv(r,e){const s=(await e.json()).error;return ls.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Xv({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function xC(r,{refreshToken:e}){const t=Xv(r);return t.append("Authorization",OC(e)),t}async function Jv(r){const e=await r();return e.status>=500&&e.status<600?r():e}function DC(r){return Number(r.replace("s","000"))}function OC(r){return`${Wv} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=Gv(r),o=Xv(r),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={fid:t,authVersion:Wv,appId:r.appId,sdkVersion:Hv},f={method:"POST",headers:o,body:JSON.stringify(h)},p=await Jv(()=>fetch(s,f));if(p.ok){const y=await p.json();return{fid:y.fid||t,registrationStatus:2,refreshToken:y.refreshToken,authToken:Qv(y.authToken)}}else throw await Yv("Create Installation",p)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zv(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=/^[cdef][\w-]{21}$/,ef="";function MC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=FC(r);return bC.test(t)?t:ef}catch{return ef}}function FC(r){return VC(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE=new Map;function tE(r,e){const t=Vc(r);nE(t,e),UC(t,e)}function nE(r,e){const t=eE.get(r);if(t)for(const s of t)s(e)}function UC(r,e){const t=jC();t&&t.postMessage({key:r,fid:e}),zC()}let os=null;function jC(){return!os&&"BroadcastChannel"in self&&(os=new BroadcastChannel("[Firebase] FID Change"),os.onmessage=r=>{nE(r.data.key,r.data.fid)}),os}function zC(){eE.size===0&&os&&(os.close(),os=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC="firebase-installations-database",$C=1,us="firebase-installations-store";let Pd=null;function jf(){return Pd||(Pd=v_(BC,$C,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(us)}}})),Pd}async function uc(r,e){const t=Vc(r),o=(await jf()).transaction(us,"readwrite"),l=o.objectStore(us),h=await l.get(t);return await l.put(e,t),await o.done,(!h||h.fid!==e.fid)&&tE(r,e.fid),e}async function rE(r){const e=Vc(r),s=(await jf()).transaction(us,"readwrite");await s.objectStore(us).delete(e),await s.done}async function bc(r,e){const t=Vc(r),o=(await jf()).transaction(us,"readwrite"),l=o.objectStore(us),h=await l.get(t),f=e(h);return f===void 0?await l.delete(t):await l.put(f,t),await o.done,f&&(!h||h.fid!==f.fid)&&tE(r,f.fid),f}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(r){let e;const t=await bc(r.appConfig,s=>{const o=qC(s),l=HC(r,o);return e=l.registrationPromise,l.installationEntry});return t.fid===ef?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function qC(r){const e=r||{fid:MC(),registrationStatus:0};return iE(e)}function HC(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(ls.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=WC(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:KC(r)}:{installationEntry:e}}async function WC(r,e){try{const t=await LC(r,e);return uc(r.appConfig,t)}catch(t){throw Kv(t)&&t.customData.serverCode===409?await rE(r.appConfig):await uc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function KC(r){let e=await _y(r.appConfig);for(;e.registrationStatus===1;)await Zv(100),e=await _y(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await zf(r);return s||t}return e}function _y(r){return bc(r,e=>{if(!e)throw ls.create("installation-not-found");return iE(e)})}function iE(r){return GC(r)?{fid:r.fid,registrationStatus:0}:r}function GC(r){return r.registrationStatus===1&&r.registrationTime+qv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC({appConfig:r,heartbeatServiceProvider:e},t){const s=YC(r,t),o=xC(r,t),l=e.getImmediate({optional:!0});if(l){const y=await l.getHeartbeatsHeader();y&&o.append("x-firebase-client",y)}const h={installation:{sdkVersion:Hv,appId:r.appId}},f={method:"POST",headers:o,body:JSON.stringify(h)},p=await Jv(()=>fetch(s,f));if(p.ok){const y=await p.json();return Qv(y)}else throw await Yv("Generate Auth Token",p)}function YC(r,{fid:e}){return`${Gv(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(r,e=!1){let t;const s=await bc(r.appConfig,l=>{if(!sE(l))throw ls.create("not-registered");const h=l.authToken;if(!e&&ZC(h))return l;if(h.requestStatus===1)return t=XC(r,e),l;{if(!navigator.onLine)throw ls.create("app-offline");const f=tP(l);return t=JC(r,f),f}});return t?await t:s.authToken}async function XC(r,e){let t=await vy(r.appConfig);for(;t.authToken.requestStatus===1;)await Zv(100),t=await vy(r.appConfig);const s=t.authToken;return s.requestStatus===0?Bf(r,e):s}function vy(r){return bc(r,e=>{if(!sE(e))throw ls.create("not-registered");const t=e.authToken;return nP(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function JC(r,e){try{const t=await QC(r,e),s=Object.assign(Object.assign({},e),{authToken:t});return await uc(r.appConfig,s),t}catch(t){if(Kv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await rE(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await uc(r.appConfig,s)}throw t}}function sE(r){return r!==void 0&&r.registrationStatus===2}function ZC(r){return r.requestStatus===2&&!eP(r)}function eP(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+CC}function tP(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function nP(r){return r.requestStatus===1&&r.requestTime+qv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rP(r){const e=r,{installationEntry:t,registrationPromise:s}=await zf(e);return s?s.catch(console.error):Bf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(r,e=!1){const t=r;return await sP(t),(await Bf(t,e)).token}async function sP(r){const{registrationPromise:e}=await zf(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(r){if(!r||!r.options)throw kd("App Configuration");if(!r.name)throw kd("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw kd(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function kd(r){return ls.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="installations",aP="installations-internal",lP=r=>{const e=r.getProvider("app").getImmediate(),t=oP(e),s=ps(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},uP=r=>{const e=r.getProvider("app").getImmediate(),t=ps(e,oE).getImmediate();return{getId:()=>rP(t),getToken:o=>iP(t,o)}};function cP(){or(new Un(oE,lP,"PUBLIC")),or(new Un(aP,uP,"PRIVATE"))}cP();wn($v,Uf);wn($v,Uf,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="analytics",hP="firebase_id",dP="origin",fP=60*1e3,pP="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",$f="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en=new Ec("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},un=new fs("analytics","Analytics",mP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(r){if(!r.startsWith($f)){const e=un.create("invalid-gtag-resource",{gtagURL:r});return en.warn(e.message),""}return r}function aE(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function yP(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function _P(r,e){const t=yP("firebase-js-sdk-policy",{createScriptURL:gP}),s=document.createElement("script"),o=`${$f}?l=${r}&id=${e}`;s.src=t?t==null?void 0:t.createScriptURL(o):o,s.async=!0,document.head.appendChild(s)}function vP(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function EP(r,e,t,s,o,l){const h=s[o];try{if(h)await e[h];else{const p=(await aE(t)).find(y=>y.measurementId===o);p&&await e[p.appId]}}catch(f){en.error(f)}r("config",o,l)}async function wP(r,e,t,s,o){try{let l=[];if(o&&o.send_to){let h=o.send_to;Array.isArray(h)||(h=[h]);const f=await aE(t);for(const p of h){const y=f.find(T=>T.measurementId===p),E=y&&e[y.appId];if(E)l.push(E);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),r("event",s,o||{})}catch(l){en.error(l)}}function TP(r,e,t,s){async function o(l,...h){try{if(l==="event"){const[f,p]=h;await wP(r,e,t,f,p)}else if(l==="config"){const[f,p]=h;await EP(r,e,t,s,f,p)}else if(l==="consent"){const[f,p]=h;r("consent",f,p)}else if(l==="get"){const[f,p,y]=h;r("get",f,p,y)}else if(l==="set"){const[f]=h;r("set",f)}else r(l,...h)}catch(f){en.error(f)}}return o}function IP(r,e,t,s,o){let l=function(...h){window[s].push(arguments)};return window[o]&&typeof window[o]=="function"&&(l=window[o]),window[o]=TP(l,r,e,t),{gtagCore:l,wrappedGtag:window[o]}}function SP(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes($f)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=30,AP=1e3;class CP{constructor(e={},t=AP){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const lE=new CP;function PP(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function kP(r){var e;const{appId:t,apiKey:s}=r,o={method:"GET",headers:PP(s)},l=pP.replace("{app-id}",t),h=await fetch(l,o);if(h.status!==200&&h.status!==304){let f="";try{const p=await h.json();!((e=p.error)===null||e===void 0)&&e.message&&(f=p.error.message)}catch{}throw un.create("config-fetch-failed",{httpStatus:h.status,responseMessage:f})}return h.json()}async function NP(r,e=lE,t){const{appId:s,apiKey:o,measurementId:l}=r.options;if(!s)throw un.create("no-app-id");if(!o){if(l)return{measurementId:l,appId:s};throw un.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new OP;return setTimeout(async()=>{f.abort()},fP),uE({appId:s,apiKey:o,measurementId:l},h,f,e)}async function uE(r,{throttleEndTimeMillis:e,backoffCount:t},s,o=lE){var l;const{appId:h,measurementId:f}=r;try{await xP(s,e)}catch(p){if(f)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:h,measurementId:f};throw p}try{const p=await kP(r);return o.deleteThrottleMetadata(h),p}catch(p){const y=p;if(!DP(y)){if(o.deleteThrottleMetadata(h),f)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:f};throw p}const E=Number((l=y==null?void 0:y.customData)===null||l===void 0?void 0:l.httpStatus)===503?Ig(t,o.intervalMillis,RP):Ig(t,o.intervalMillis),T={throttleEndTimeMillis:Date.now()+E,backoffCount:t+1};return o.setThrottleMetadata(h,T),en.debug(`Calling attemptFetch again in ${E} millis`),uE(r,T,s,o)}}function xP(r,e){return new Promise((t,s)=>{const o=Math.max(e-Date.now(),0),l=setTimeout(t,o);r.addEventListener(()=>{clearTimeout(l),s(un.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function DP(r){if(!(r instanceof zn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class OP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function LP(r,e,t,s,o){if(o&&o.global){r("event",t,s);return}else{const l=await e,h=Object.assign(Object.assign({},s),{send_to:l});r("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VP(){if(m_())try{await g_()}catch(r){return en.warn(un.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return en.warn(un.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function bP(r,e,t,s,o,l,h){var f;const p=NP(r);p.then(O=>{t[O.measurementId]=O.appId,r.options.measurementId&&O.measurementId!==r.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>en.error(O)),e.push(p);const y=VP().then(O=>{if(O)return s.getId()}),[E,T]=await Promise.all([p,y]);SP(l)||_P(l,E.measurementId),o("js",new Date);const A=(f=h==null?void 0:h.config)!==null&&f!==void 0?f:{};return A[dP]="firebase",A.update=!0,T!=null&&(A[hP]=T),o("config",E.measurementId,A),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e){this.app=e}_delete(){return delete $a[this.app.options.appId],Promise.resolve()}}let $a={},Ey=[];const wy={};let Nd="dataLayer",FP="gtag",Ty,cE,Iy=!1;function UP(){const r=[];if(p_()&&r.push("This is a browser extension environment."),qI()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,o)=>`(${o+1}) ${s}`).join(" "),t=un.create("invalid-analytics-context",{errorInfo:e});en.warn(t.message)}}function jP(r,e,t){UP();const s=r.options.appId;if(!s)throw un.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw un.create("no-api-key");if($a[s]!=null)throw un.create("already-exists",{id:s});if(!Iy){vP(Nd);const{wrappedGtag:l,gtagCore:h}=IP($a,Ey,wy,Nd,FP);cE=l,Ty=h,Iy=!0}return $a[s]=bP(r,Ey,wy,e,Ty,Nd,t),new MP(r)}function zP(r=df()){r=kt(r);const e=ps(r,cc);return e.isInitialized()?e.getImmediate():BP(r)}function BP(r,e={}){const t=ps(r,cc);if(t.isInitialized()){const o=t.getImmediate();if(Wa(e,t.getOptions()))return o;throw un.create("already-initialized")}return t.initialize({options:e})}function $P(r,e,t,s){r=kt(r),LP(cE,$a[r.app.options.appId],e,t,s).catch(o=>en.error(o))}const Sy="@firebase/analytics",Ry="0.10.11";function qP(){or(new Un(cc,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("installations-internal").getImmediate();return jP(s,o,t)},"PUBLIC")),or(new Un("analytics-internal",r,"PRIVATE")),wn(Sy,Ry),wn(Sy,Ry,"esm2017");function r(e){try{const t=e.getProvider(cc).getImmediate();return{logEvent:(s,o,l)=>$P(t,s,o,l)}}catch(t){throw un.create("interop-component-reg-failed",{reason:t})}}}qP();const HP={apiKey:"AIzaSyD3cBwFM9NcoWhoftwDjUvYcgiS5WwT25E",authDomain:"rotex-bcdff.firebaseapp.com",projectId:"rotex-bcdff",storageBucket:"rotex-bcdff.firebasestorage.app",messagingSenderId:"755824945827",appId:"1:755824945827:web:64b0c5066ae98b4091ed16",measurementId:"G-D064R9Q8B8"},qf=E_(HP);Dv(qf);Dv(qf);zP(qf);function Hf(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function hE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WP=hE,dE=new fs("auth","Firebase",hE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hc=new Ec("@firebase/auth");function KP(r,...e){hc.logLevel<=Pe.WARN&&hc.warn(`Auth (${No}): ${r}`,...e)}function Hu(r,...e){hc.logLevel<=Pe.ERROR&&hc.error(`Auth (${No}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(r,...e){throw Wf(r,...e)}function rr(r,...e){return Wf(r,...e)}function fE(r,e,t){const s=Object.assign(Object.assign({},WP()),{[e]:t});return new fs("auth","Firebase",s).create(e,{appName:r.name})}function Or(r){return fE(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Wf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return dE.create(r,...e)}function _e(r,e,...t){if(!r)throw Wf(e,...t)}function Pr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Hu(e),new Error(e)}function Mr(r,e){r||Pr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function GP(){return Ay()==="http:"||Ay()==="https:"}function Ay(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(GP()||p_()||"connection"in navigator)?navigator.onLine:!0}function YP(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mr(t>e,"Short delay should be less than long delay!"),this.isMobile=FI()||zI()}get(){return QP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(r,e){Mr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=new ul(3e4,6e4);function Ur(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function jr(r,e,t,s,o={}){return mE(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=il(Object.assign({key:r.config.apiKey},h)).slice(1),p=await r._getAdditionalHeaders();p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode);const y=Object.assign({method:e,headers:p},l);return jI()||(y.referrerPolicy="no-referrer"),pE.fetch()(gE(r,r.config.apiHost,t,f),y)})}async function mE(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},XP),e);try{const o=new ek(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw bu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[p,y]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw bu(r,"credential-already-in-use",h);if(p==="EMAIL_EXISTS")throw bu(r,"email-already-in-use",h);if(p==="USER_DISABLED")throw bu(r,"user-disabled",h);const E=s[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw fE(r,E,y);jn(r,E)}}catch(o){if(o instanceof zn)throw o;jn(r,"network-request-failed",{message:String(o)})}}async function cl(r,e,t,s,o={}){const l=await jr(r,e,t,s,o);return"mfaPendingCredential"in l&&jn(r,"multi-factor-auth-required",{_serverResponse:l}),l}function gE(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?Kf(r.config,o):`${r.config.apiScheme}://${o}`}function ZP(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ek{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(rr(this.auth,"network-request-failed")),JP.get())})}}function bu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=rr(r,e,s);return o.customData._tokenResponse=t,o}function Cy(r){return r!==void 0&&r.enterprise!==void 0}class tk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ZP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nk(r,e){return jr(r,"GET","/v2/recaptchaConfig",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(r,e){return jr(r,"POST","/v1/accounts:delete",e)}async function yE(r,e){return jr(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ik(r,e=!1){const t=kt(r),s=await t.getIdToken(e),o=Gf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:qa(xd(o.auth_time)),issuedAtTime:qa(xd(o.iat)),expirationTime:qa(xd(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function xd(r){return Number(r)*1e3}function Gf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Hu("JWT malformed, contained fewer than 3 sections"),null;try{const o=c_(t);return o?JSON.parse(o):(Hu("Failed to decode base64 JWT payload"),null)}catch(o){return Hu("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Py(r){const e=Gf(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof zn&&sk(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function sk({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qa(this.lastLoginAt),this.creationTime=qa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(r){var e;const t=r.auth,s=await r.getIdToken(),o=await Za(r,yE(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?_E(l.providerUserInfo):[],f=lk(r.providerData,h),p=r.isAnonymous,y=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),E=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new nf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function ak(r){const e=kt(r);await dc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function lk(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function _E(r){return r.map(e=>{var{providerId:t}=e,s=Hf(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(r,e){const t=await mE(r,{},async()=>{const s=il({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=gE(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",pE.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ck(r,e){return jr(r,"POST","/v2/accounts:revokeToken",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Py(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await uk(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new _o;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return Pr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class kr{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=Hf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new nf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Za(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ik(this,e)}reload(){return ak(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await dc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(er(this.auth.app))return Promise.reject(Or(this.auth));const e=await this.getIdToken();return await Za(this,rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,p,y,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,A=(o=t.email)!==null&&o!==void 0?o:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,F=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,j=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,W=(y=t.createdAt)!==null&&y!==void 0?y:void 0,X=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:Q,emailVerified:ie,isAnonymous:Se,providerData:Te,stsTokenManager:N}=t;_e(Q&&N,e,"internal-error");const I=_o.fromJSON(this.name,N);_e(typeof Q=="string",e,"internal-error"),di(T,e.name),di(A,e.name),_e(typeof ie=="boolean",e,"internal-error"),_e(typeof Se=="boolean",e,"internal-error"),di(O,e.name),di(F,e.name),di($,e.name),di(j,e.name),di(W,e.name),di(X,e.name);const R=new kr({uid:Q,auth:e,email:A,emailVerified:ie,displayName:T,isAnonymous:Se,photoURL:F,phoneNumber:O,tenantId:$,stsTokenManager:I,createdAt:W,lastLoginAt:X});return Te&&Array.isArray(Te)&&(R.providerData=Te.map(k=>Object.assign({},k))),j&&(R._redirectEventId=j),R}static async _fromIdTokenResponse(e,t,s=!1){const o=new _o;o.updateFromServerResponse(t);const l=new kr({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await dc(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?_E(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new _o;f.updateFromIdToken(s);const p=new kr({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new nf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,y),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ky=new Map;function Nr(r){Mr(r instanceof Function,"Expected a class definition");let e=ky.get(r);return e?(Mr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,ky.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}vE.type="NONE";const Ny=vE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(r,e,t){return`firebase:${r}:${e}:${t}`}class vo{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Wu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Wu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new vo(Nr(Ny),e,s);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Nr(Ny);const h=Wu(s,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){const T=kr._fromJSON(e,E);y!==l&&(f=T),l=y;break}}catch{}const p=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new vo(l,e,s):(l=p[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new vo(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(IE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(EE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(RE(e))return"Blackberry";if(AE(e))return"Webos";if(wE(e))return"Safari";if((e.includes("chrome/")||TE(e))&&!e.includes("edge/"))return"Chrome";if(SE(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function EE(r=jt()){return/firefox\//i.test(r)}function wE(r=jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function TE(r=jt()){return/crios\//i.test(r)}function IE(r=jt()){return/iemobile/i.test(r)}function SE(r=jt()){return/android/i.test(r)}function RE(r=jt()){return/blackberry/i.test(r)}function AE(r=jt()){return/webos/i.test(r)}function Qf(r=jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function hk(r=jt()){var e;return Qf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function dk(){return BI()&&document.documentMode===10}function CE(r=jt()){return Qf(r)||SE(r)||AE(r)||RE(r)||/windows phone/i.test(r)||IE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(r,e=[]){let t;switch(r){case"Browser":t=xy(jt());break;case"Worker":t=`${xy(jt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${No}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const p=e(l);h(p)}catch(p){f(p)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(r,e={}){return jr(r,"GET","/v2/passwordPolicy",Ur(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=6;class gk{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:mk,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(s=p.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(h=p.containsNumericCharacter)!==null&&h!==void 0?h:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dy(this),this.idTokenSubscription=new Dy(this),this.beforeStateQueue=new fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Nr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await vo.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await yE(this,{idToken:e}),s=await kr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(er(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,p=await this.tryRedirectSignIn(e);(!h||h===f)&&(p!=null&&p.user)&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await dc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(er(this.app))return Promise.reject(Or(this));const t=e?kt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return er(this.app)?Promise.reject(Or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return er(this.app)?Promise.reject(Or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Nr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pk(this),t=new gk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fs("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ck(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Nr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await vo.create(this,[Nr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,s,o);return()=>{h=!0,p()}}else{const p=e.addObserver(t);return()=>{h=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&KP(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ki(r){return kt(r)}class Dy{constructor(e){this.auth=e,this.observer=null,this.addObserver=QI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _k(r){Mc=r}function kE(r){return Mc.loadJS(r)}function vk(){return Mc.recaptchaEnterpriseScript}function Ek(){return Mc.gapiScript}function wk(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class Tk{constructor(){this.enterprise=new Ik}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Ik{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Sk="recaptcha-enterprise",NE="NO_RECAPTCHA";class Rk{constructor(e){this.type=Sk,this.auth=ki(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{nk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new tk(p);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(p=>{f(p)})})}function o(l,h,f){const p=window.grecaptcha;Cy(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(NE)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Tk().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Cy(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let p=vk();p.length!==0&&(p+=f),kE(p).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function Oy(r,e,t,s=!1,o=!1){const l=new Rk(r);let h;if(o)h=NE;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function fc(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Oy(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Oy(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ak(r,e){const t=ps(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Wa(l,e??{}))return o;jn(o,"already-initialized")}return t.initialize({options:e})}function Ck(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Nr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Pk(r,e,t){const s=ki(r);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=xE(e),{host:h,port:f}=kk(e),p=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${h}${p}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),Nk()}function xE(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function kk(r){const e=xE(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Ly(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Ly(h)}}}function Ly(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function Nk(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pr("not implemented")}_getIdTokenResponse(e){return Pr("not implemented")}_linkToIdToken(e,t){return Pr("not implemented")}_getReauthenticationResolver(e){return Pr("not implemented")}}async function xk(r,e){return jr(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(r,e){return cl(r,"POST","/v1/accounts:signInWithPassword",Ur(r,e))}async function Ok(r,e){return jr(r,"POST","/v1/accounts:sendOobCode",Ur(r,e))}async function Lk(r,e){return Ok(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vk(r,e){return cl(r,"POST","/v1/accounts:signInWithEmailLink",Ur(r,e))}async function bk(r,e){return cl(r,"POST","/v1/accounts:signInWithEmailLink",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends Yf{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new el(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new el(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,t,"signInWithPassword",Dk);case"emailLink":return Vk(e,{email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return fc(e,s,"signUpPassword",xk);case"emailLink":return bk(e,{idToken:t,email:this._email,oobCode:this._password});default:jn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(r,e){return cl(r,"POST","/v1/accounts:signInWithIdp",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="http://localhost";class cs extends Yf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):jn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=Hf(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new cs(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Eo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Eo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Eo(e,t)}buildRequest(){const e={requestUri:Mk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=il(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Uk(r){const e=La(Va(r)).link,t=e?La(Va(e)).deep_link_id:null,s=La(Va(r)).deep_link_id;return(s?La(Va(s)).link:null)||s||t||e||r}class Xf{constructor(e){var t,s,o,l,h,f;const p=La(Va(e)),y=(t=p.apiKey)!==null&&t!==void 0?t:null,E=(s=p.oobCode)!==null&&s!==void 0?s:null,T=Fk((o=p.mode)!==null&&o!==void 0?o:null);_e(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=p.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=Uk(e);try{return new Xf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(){this.providerId=Vo.PROVIDER_ID}static credential(e,t){return el._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Xf.parseLink(t);return _e(s,"argument-error"),el._fromEmailAndCode(e,s.code,s.tenantId)}}Vo.PROVIDER_ID="password";Vo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Vo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends DE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends hl{constructor(){super("facebook.com")}static credential(e){return cs._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";fi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends hl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cs._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.GOOGLE_SIGN_IN_METHOD="google.com";pi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends hl{constructor(){super("github.com")}static credential(e){return cs._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.GITHUB_SIGN_IN_METHOD="github.com";mi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends hl{constructor(){super("twitter.com")}static credential(e,t){return cs._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return gi.credential(t,s)}catch{return null}}}gi.TWITTER_SIGN_IN_METHOD="twitter.com";gi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jk(r,e){return cl(r,"POST","/v1/accounts:signUp",Ur(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await kr._fromIdTokenResponse(e,s,o),h=Vy(s);return new hs({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Vy(s);return new hs({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Vy(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends zn{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,pc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new pc(e,t,s,o)}}function OE(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?pc._fromErrorAndOperation(r,l,e,s):l})}async function zk(r,e,t=!1){const s=await Za(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return hs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bk(r,e,t=!1){const{auth:s}=r;if(er(s.app))return Promise.reject(Or(s));const o="reauthenticate";try{const l=await Za(r,OE(s,o,e,r),t);_e(l.idToken,s,"internal-error");const h=Gf(l.idToken);_e(h,s,"internal-error");const{sub:f}=h;return _e(r.uid===f,s,"user-mismatch"),hs._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&jn(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LE(r,e,t=!1){if(er(r.app))return Promise.reject(Or(r));const s="signIn",o=await OE(r,s,e),l=await hs._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function $k(r,e){return LE(ki(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(r){const e=ki(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qk(r,e,t){const s=ki(r);await fc(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Lk)}async function Hk(r,e,t){if(er(r.app))return Promise.reject(Or(r));const s=ki(r),h=await fc(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jk).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&VE(r),p}),f=await hs._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function Wk(r,e,t){return er(r.app)?Promise.reject(Or(r)):$k(kt(r),Vo.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&VE(r),s})}function Kk(r,e,t,s){return kt(r).onIdTokenChanged(e,t,s)}function Gk(r,e,t){return kt(r).beforeAuthStateChanged(e,t)}function Qk(r,e,t,s){return kt(r).onAuthStateChanged(e,t,s)}function Yk(r){return kt(r).signOut()}async function Xk(r){return kt(r).delete()}const mc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(mc,"1"),this.storage.removeItem(mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk=1e3,Zk=10;class ME extends bE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,p)=>{this.notifyListeners(h,p)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);dk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,Zk):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Jk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ME.type="LOCAL";const e1=ME;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE extends bE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}FE.type="SESSION";const UE=FE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new Fc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),p=await t1(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,p)=>{const y=Jf("",20);o.port1.start();const E=setTimeout(()=>{p(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const A=T;if(A.data.eventId===y)switch(A.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(E),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(){return window}function r1(r){ir().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){return typeof ir().WorkerGlobalScope<"u"&&typeof ir().importScripts=="function"}async function i1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function s1(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function o1(){return jE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="firebaseLocalStorageDb",a1=1,gc="firebaseLocalStorage",BE="fbase_key";class dl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Uc(r,e){return r.transaction([gc],e?"readwrite":"readonly").objectStore(gc)}function l1(){const r=indexedDB.deleteDatabase(zE);return new dl(r).toPromise()}function rf(){const r=indexedDB.open(zE,a1);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(gc,{keyPath:BE})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(gc)?e(s):(s.close(),await l1(),e(await rf()))})})}async function by(r,e,t){const s=Uc(r,!0).put({[BE]:e,value:t});return new dl(s).toPromise()}async function u1(r,e){const t=Uc(r,!1).get(e),s=await new dl(t).toPromise();return s===void 0?null:s.value}function My(r,e){const t=Uc(r,!0).delete(e);return new dl(t).toPromise()}const c1=800,h1=3;class $E{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>h1)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fc._getInstance(o1()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await i1(),!this.activeServiceWorker)return;this.sender=new n1(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||s1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rf();return await by(e,mc,"1"),await My(e,mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>by(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>u1(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>My(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Uc(o,!1).getAll();return new dl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),c1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$E.type="LOCAL";const d1=$E;new ul(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(r,e){return e?Nr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf extends Yf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Eo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Eo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Eo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function p1(r){return LE(r.auth,new Zf(r),r.bypassAuthState)}function m1(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),Bk(t,new Zf(r),r.bypassAuthState)}async function g1(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),zk(t,new Zf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const p={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p1;case"linkViaPopup":case"linkViaRedirect":return g1;case"reauthViaPopup":case"reauthViaRedirect":return m1;default:jn(this.auth,"internal-error")}}resolve(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1=new ul(2e3,1e4);class go extends qE{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Mr(this.filter.length===1,"Popup operations only handle one event");const e=Jf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(rr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,y1.get())};e()}}go.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1="pendingRedirect",Ku=new Map;class v1 extends qE{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ku.get(this.auth._key());if(!e){try{const s=await E1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ku.set(this.auth._key(),e)}return this.bypassAuthState||Ku.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E1(r,e){const t=I1(e),s=T1(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function w1(r,e){Ku.set(r._key(),e)}function T1(r){return Nr(r._redirectPersistence)}function I1(r){return Wu(_1,r.config.apiKey,r.name)}async function S1(r,e,t=!1){if(er(r.app))return Promise.reject(Or(r));const s=ki(r),o=f1(s,e),h=await new v1(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=10*60*1e3;class A1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!C1(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!HE(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(rr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=R1&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fy(e))}saveEventToCache(e){this.cachedEventUids.add(Fy(e)),this.lastProcessedEventTime=Date.now()}}function Fy(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function HE({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function C1(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HE(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(r,e={}){return jr(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,N1=/^https?/;async function x1(r){if(r.config.emulator)return;const{authorizedDomains:e}=await P1(r);for(const t of e)try{if(D1(t))return}catch{}jn(r,"unauthorized-domain")}function D1(r){const e=tf(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!N1.test(t))return!1;if(k1.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=new ul(3e4,6e4);function Uy(){const r=ir().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function L1(r){return new Promise((e,t)=>{var s,o,l;function h(){Uy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uy(),t(rr(r,"network-request-failed"))},timeout:O1.get()})}if(!((o=(s=ir().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=ir().gapi)===null||l===void 0)&&l.load)h();else{const f=wk("iframefcb");return ir()[f]=()=>{gapi.load?h():t(rr(r,"network-request-failed"))},kE(`${Ek()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Gu=null,e})}let Gu=null;function V1(r){return Gu=Gu||L1(r),Gu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=new ul(5e3,15e3),M1="__/auth/iframe",F1="emulator/auth/iframe",U1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},j1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function z1(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Kf(e,F1):`https://${r.config.authDomain}/${M1}`,s={apiKey:e.apiKey,appName:r.name,v:No},o=j1.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${il(s).slice(1)}`}async function B1(r){const e=await V1(r),t=ir().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:z1(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U1,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=rr(r,"network-request-failed"),f=ir().setTimeout(()=>{l(h)},b1.get());function p(){ir().clearTimeout(f),o(s)}s.ping(p).then(p,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},q1=500,H1=600,W1="_blank",K1="http://localhost";class jy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function G1(r,e,t,s=q1,o=H1){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const p=Object.assign(Object.assign({},$1),{width:s.toString(),height:o.toString(),top:l,left:h}),y=jt().toLowerCase();t&&(f=TE(y)?W1:t),EE(y)&&(e=e||K1,p.scrollbars="yes");const E=Object.entries(p).reduce((A,[O,F])=>`${A}${O}=${F},`,"");if(hk(y)&&f!=="_self")return Q1(e||"",f),new jy(null);const T=window.open(e||"",f,E);_e(T,r,"popup-blocked");try{T.focus()}catch{}return new jy(T)}function Q1(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="__/auth/handler",X1="emulator/auth/handler",J1=encodeURIComponent("fac");async function zy(r,e,t,s,o,l){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:No,eventId:o};if(e instanceof DE){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",GI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof hl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const p=await r._getAppCheckToken(),y=p?`#${J1}=${encodeURIComponent(p)}`:"";return`${Z1(r)}?${il(f).slice(1)}${y}`}function Z1({config:r}){return r.emulator?Kf(r,X1):`https://${r.authDomain}/${Y1}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="webStorageSupport";class eN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UE,this._completeRedirectFn=S1,this._overrideRedirectResult=w1}async _openPopup(e,t,s,o){var l;Mr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await zy(e,t,s,tf(),o);return G1(e,h,Jf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await zy(e,t,s,tf(),o);return r1(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Mr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await B1(e),s=new A1(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Dd,{type:Dd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[Dd];h!==void 0&&t(!!h),jn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=x1(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return CE()||wE()||Qf()}}const tN=eN;var By="@firebase/auth",$y="1.8.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iN(r){or(new Un("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const p={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PE(r)},y=new yk(s,o,l,p);return Ck(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),or(new Un("auth-internal",e=>{const t=ki(e.getProvider("auth").getImmediate());return(s=>new nN(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(By,$y,rN(r)),wn(By,$y,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sN=5*60,oN=f_("authIdTokenMaxAge")||sN;let qy=null;const aN=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>oN)return;const o=t==null?void 0:t.token;qy!==o&&(qy=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function lN(r=df()){const e=ps(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Ak(r,{popupRedirectResolver:tN,persistence:[d1,e1,UE]}),s=f_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=aN(l.toString());Gk(t,h,()=>h(t.currentUser)),Kk(t,f=>h(f))}}const o=h_("auth");return o&&Pk(t,`http://${o}`),t}function uN(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}_k({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=rr("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",uN().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iN("Browser");function cN(r){return q.jsxs("div",{children:[q.jsx("nav",{className:"naver",children:q.jsxs("div",{className:"nav1",children:[q.jsx("div",{className:"nav1-image"}),q.jsx("div",{children:q.jsx("h1",{children:"OTEX"})})]})}),q.jsxs("div",{className:"forgotten",children:[q.jsx("p",{children:"Enter your Email"}),q.jsx("input",{type:"email",id:"login-username",placeholder:"Email",required:!0,name:"email",onChange:r.getData}),q.jsx("button",{onClick:r.Forgot,children:"Send"})]})]})}function hN(r){const e={display:"flex",justifyContent:r.theme?"flex-end":"flex-start"},[t,s]=H.useState(!1);function o(){s(h=>!h),r.changeTheme()}const l={backgroundColor:t?"blue":"white"};return q.jsxs("div",{children:[q.jsxs("div",{className:"set",children:[q.jsx("i",{className:"bi-arrow-left",onClick:r.go}),q.jsx("p",{children:"Settings"})]}),q.jsxs("div",{className:"set1",children:[q.jsxs("div",{className:"set1-1",onClick:o,children:[q.jsx("p",{children:"Dark Mode"}),q.jsx("div",{className:"toggle",style:e,children:q.jsx("div",{className:"toggle1",style:l})})]}),q.jsxs("div",{className:"set1-2",onClick:r.handleDelete,children:[q.jsx("p",{children:"Delete Account"}),q.jsx("div",{className:"bi-chevron-right"})]}),q.jsxs("div",{className:"set1-3",onClick:r.fun,children:[q.jsx("p",{children:"Change Password"}),q.jsx("div",{className:"bi-chevron-right"})]}),q.jsx("div",{className:"set1-4",onClick:r.handleLogout,children:q.jsx("button",{children:"Log out"})})]})]})}function dN(){let r=lN(),e=e_(),[t,s]=H.useState({firstName:"",surName:"",userName:"",email:"",telNumber:"",Password:""});H.useEffect(()=>{fetch("/api/pay",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"user@example.com",amount:1e3})}).then(Q=>Q.json()).then(Q=>console.log("Paystack Init:",Q)).catch(Q=>console.error("Error:",Q))},[]);const o=async Q=>{Q.preventDefault(),t.userName.trim()&&(await TC(gy(db,"users"),{name:t.userName,createdAt:new Date}),l())},l=async()=>{const Q=await wC(gy(db,"users")),ie=[];Q.forEach(Se=>{ie.push(Se.data().name)})};H.useEffect(()=>{l()},[]);function h(Q){Q.preventDefault(),e("Setting")}function f(Q){s(ie=>({...ie,[Q.target.name]:Q.target.value}))}function p(Q){Q.preventDefault(),e("themain")}function y(Q){Q.preventDefault(),e("forget")}const E=()=>{Yk(r).then(()=>{console.log("User signed out"),Qk(r,Q=>{Q||e("..",{replace:!0})})}).catch(Q=>{console.error("Sign out error:",Q)})},T=()=>{const Q=r.currentUser;Q?window.confirm("Are you sure you want to delete your account permanently?")&&Xk(Q).then(()=>{console.log("User account deleted"),e("..",{replace:!0})}).catch(ie=>{ie.code==="auth/requires-recent-login"?(alert("Please log in again to delete your account."),e("/login")):console.error("Account deletion error:",ie)}):console.log("No user signed in.")};function A(Q){Q.preventDefault(),Hk(r,t.email,t.password).then(()=>{alert("successfully SignUp"),e("themain")}).catch(ie=>{alert(ie.message)})}function O(Q){Q.preventDefault(),Wk(r,t.email,t.password).then(()=>{alert("login successfully"),e("themain")}).catch(ie=>{alert(ie.message)})}function F(Q){Q.preventDefault();const ie=async()=>{if(!t.email){alert("Enter your email first!");return}try{await qk(r,t.email),alert("We have sent you a recovery email!"),e("..")}catch(Se){alert(Se.message)}};setTimeout(()=>{ie()},100)}const[$,j]=H.useState(!1);function W(){j(Q=>!Q)}const X={backgroundColor:$?" rgb(54, 54, 66)":"rgb(174, 174, 236)"};return q.jsx("div",{className:"theme",style:X,children:q.jsxs(KT,{children:[q.jsx(Oa,{index:!0,element:q.jsx(rT,{getData:f,firstName:t.firstName,surName:t.surName,userName:t.userName,email:t.email,telNumber:t.telNumber,Password:t.Password,submitLogin:A,loginData:O,fun:y})}),q.jsx(Oa,{path:"themain",element:q.jsx(CI,{getData:f,email:t.email,userName:t.userName,settings:h,saveName:o})}),q.jsx(Oa,{path:"forget",element:q.jsx(cN,{getData:f,email:t.email,Forgot:F})}),q.jsx(Oa,{path:"setting",element:q.jsx(hN,{go:p,fun:y,changeTheme:W,theme:$,handleLogout:E,handleDelete:T})})]})})}nT.createRoot(document.getElementById("root")).render(q.jsx(H.StrictMode,{children:q.jsx(yI,{children:q.jsx(dN,{})})}));
