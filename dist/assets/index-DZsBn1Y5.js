(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var fu={exports:{}},Ta={},hu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function B0(){if(sp)return pt;sp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),y=Symbol.iterator;function _(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function v(O,ne,De){this.props=O,this.context=ne,this.refs=w,this.updater=De||M}v.prototype.isReactComponent={},v.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},v.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=v.prototype;function L(O,ne,De){this.props=O,this.context=ne,this.refs=w,this.updater=De||M}var N=L.prototype=new x;N.constructor=L,E(N,v.prototype),N.isPureReactComponent=!0;var P=Array.isArray,W=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function Y(O,ne,De){var K,ce={},_e=null,Me=null;if(ne!=null)for(K in ne.ref!==void 0&&(Me=ne.ref),ne.key!==void 0&&(_e=""+ne.key),ne)W.call(ne,K)&&!k.hasOwnProperty(K)&&(ce[K]=ne[K]);var be=arguments.length-2;if(be===1)ce.children=De;else if(1<be){for(var ke=Array(be),$e=0;$e<be;$e++)ke[$e]=arguments[$e+2];ce.children=ke}if(O&&O.defaultProps)for(K in be=O.defaultProps,be)ce[K]===void 0&&(ce[K]=be[K]);return{$$typeof:s,type:O,key:_e,ref:Me,props:ce,_owner:I.current}}function R(O,ne){return{$$typeof:s,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function B(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(De){return ne[De]})}var re=/\/+/g;function Z(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):ne.toString(36)}function de(O,ne,De,K,ce){var _e=typeof O;(_e==="undefined"||_e==="boolean")&&(O=null);var Me=!1;if(O===null)Me=!0;else switch(_e){case"string":case"number":Me=!0;break;case"object":switch(O.$$typeof){case s:case e:Me=!0}}if(Me)return Me=O,ce=ce(Me),O=K===""?"."+Z(Me,0):K,P(ce)?(De="",O!=null&&(De=O.replace(re,"$&/")+"/"),de(ce,ne,De,"",function($e){return $e})):ce!=null&&(A(ce)&&(ce=R(ce,De+(!ce.key||Me&&Me.key===ce.key?"":(""+ce.key).replace(re,"$&/")+"/")+O)),ne.push(ce)),1;if(Me=0,K=K===""?".":K+":",P(O))for(var be=0;be<O.length;be++){_e=O[be];var ke=K+Z(_e,be);Me+=de(_e,ne,De,ke,ce)}else if(ke=_(O),typeof ke=="function")for(O=ke.call(O),be=0;!(_e=O.next()).done;)_e=_e.value,ke=K+Z(_e,be++),Me+=de(_e,ne,De,ke,ce);else if(_e==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Me}function ue(O,ne,De){if(O==null)return O;var K=[],ce=0;return de(O,K,"","",function(_e){return ne.call(De,_e,ce++)}),K}function oe(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(De){(O._status===0||O._status===-1)&&(O._status=1,O._result=De)},function(De){(O._status===0||O._status===-1)&&(O._status=2,O._result=De)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var ae={current:null},H={transition:null},le={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:H,ReactCurrentOwner:I};function se(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:ue,forEach:function(O,ne,De){ue(O,function(){ne.apply(this,arguments)},De)},count:function(O){var ne=0;return ue(O,function(){ne++}),ne},toArray:function(O){return ue(O,function(ne){return ne})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pt.Component=v,pt.Fragment=n,pt.Profiler=o,pt.PureComponent=L,pt.StrictMode=r,pt.Suspense=p,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,pt.act=se,pt.cloneElement=function(O,ne,De){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var K=E({},O.props),ce=O.key,_e=O.ref,Me=O._owner;if(ne!=null){if(ne.ref!==void 0&&(_e=ne.ref,Me=I.current),ne.key!==void 0&&(ce=""+ne.key),O.type&&O.type.defaultProps)var be=O.type.defaultProps;for(ke in ne)W.call(ne,ke)&&!k.hasOwnProperty(ke)&&(K[ke]=ne[ke]===void 0&&be!==void 0?be[ke]:ne[ke])}var ke=arguments.length-2;if(ke===1)K.children=De;else if(1<ke){be=Array(ke);for(var $e=0;$e<ke;$e++)be[$e]=arguments[$e+2];K.children=be}return{$$typeof:s,type:O.type,key:ce,ref:_e,props:K,_owner:Me}},pt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},pt.createElement=Y,pt.createFactory=function(O){var ne=Y.bind(null,O);return ne.type=O,ne},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:f,render:O}},pt.isValidElement=A,pt.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:oe}},pt.memo=function(O,ne){return{$$typeof:m,type:O,compare:ne===void 0?null:ne}},pt.startTransition=function(O){var ne=H.transition;H.transition={};try{O()}finally{H.transition=ne}},pt.unstable_act=se,pt.useCallback=function(O,ne){return ae.current.useCallback(O,ne)},pt.useContext=function(O){return ae.current.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O){return ae.current.useDeferredValue(O)},pt.useEffect=function(O,ne){return ae.current.useEffect(O,ne)},pt.useId=function(){return ae.current.useId()},pt.useImperativeHandle=function(O,ne,De){return ae.current.useImperativeHandle(O,ne,De)},pt.useInsertionEffect=function(O,ne){return ae.current.useInsertionEffect(O,ne)},pt.useLayoutEffect=function(O,ne){return ae.current.useLayoutEffect(O,ne)},pt.useMemo=function(O,ne){return ae.current.useMemo(O,ne)},pt.useReducer=function(O,ne,De){return ae.current.useReducer(O,ne,De)},pt.useRef=function(O){return ae.current.useRef(O)},pt.useState=function(O){return ae.current.useState(O)},pt.useSyncExternalStore=function(O,ne,De){return ae.current.useSyncExternalStore(O,ne,De)},pt.useTransition=function(){return ae.current.useTransition()},pt.version="18.3.1",pt}var ap;function Ad(){return ap||(ap=1,hu.exports=B0()),hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function H0(){if(op)return Ta;op=1;var s=Ad(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var S,y={},_=null,M=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(M=p.ref);for(S in p)r.call(p,S)&&!c.hasOwnProperty(S)&&(y[S]=p[S]);if(f&&f.defaultProps)for(S in p=f.defaultProps,p)y[S]===void 0&&(y[S]=p[S]);return{$$typeof:e,type:f,key:_,ref:M,props:y,_owner:o.current}}return Ta.Fragment=n,Ta.jsx=d,Ta.jsxs=d,Ta}var lp;function V0(){return lp||(lp=1,fu.exports=H0()),fu.exports}var g=V0(),st=Ad(),jo={},pu={exports:{}},Mn={},mu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function G0(){return cp||(cp=1,(function(s){function e(H,le){var se=H.length;H.push(le);e:for(;0<se;){var O=se-1>>>1,ne=H[O];if(0<o(ne,le))H[O]=le,H[se]=ne,se=O;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var le=H[0],se=H.pop();if(se!==le){H[0]=se;e:for(var O=0,ne=H.length,De=ne>>>1;O<De;){var K=2*(O+1)-1,ce=H[K],_e=K+1,Me=H[_e];if(0>o(ce,se))_e<ne&&0>o(Me,ce)?(H[O]=Me,H[_e]=se,O=_e):(H[O]=ce,H[K]=se,O=K);else if(_e<ne&&0>o(Me,se))H[O]=Me,H[_e]=se,O=_e;else break e}}return le}function o(H,le){var se=H.sortIndex-le.sortIndex;return se!==0?se:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],S=1,y=null,_=3,M=!1,E=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=H)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function P(H){if(w=!1,N(H),!E)if(n(p)!==null)E=!0,oe(W);else{var le=n(m);le!==null&&ae(P,le.startTime-H)}}function W(H,le){E=!1,w&&(w=!1,x(Y),Y=-1),M=!0;var se=_;try{for(N(le),y=n(p);y!==null&&(!(y.expirationTime>le)||H&&!B());){var O=y.callback;if(typeof O=="function"){y.callback=null,_=y.priorityLevel;var ne=O(y.expirationTime<=le);le=s.unstable_now(),typeof ne=="function"?y.callback=ne:y===n(p)&&r(p),N(le)}else r(p);y=n(p)}if(y!==null)var De=!0;else{var K=n(m);K!==null&&ae(P,K.startTime-le),De=!1}return De}finally{y=null,_=se,M=!1}}var I=!1,k=null,Y=-1,R=5,A=-1;function B(){return!(s.unstable_now()-A<R)}function re(){if(k!==null){var H=s.unstable_now();A=H;var le=!0;try{le=k(!0,H)}finally{le?Z():(I=!1,k=null)}}else I=!1}var Z;if(typeof L=="function")Z=function(){L(re)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ue=de.port2;de.port1.onmessage=re,Z=function(){ue.postMessage(null)}}else Z=function(){v(re,0)};function oe(H){k=H,I||(I=!0,Z())}function ae(H,le){Y=v(function(){H(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,oe(W))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(H){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var se=_;_=le;try{return H()}finally{_=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=_;_=H;try{return le()}finally{_=se}},s.unstable_scheduleCallback=function(H,le,se){var O=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,H){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,H={id:S++,callback:le,priorityLevel:H,startTime:se,expirationTime:ne,sortIndex:-1},se>O?(H.sortIndex=se,e(m,H),n(p)===null&&H===n(m)&&(w?(x(Y),Y=-1):w=!0,ae(P,se-O))):(H.sortIndex=ne,e(p,H),E||M||(E=!0,oe(W))),H},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(H){var le=_;return function(){var se=_;_=le;try{return H.apply(this,arguments)}finally{_=se}}}})(gu)),gu}var up;function j0(){return up||(up=1,mu.exports=G0()),mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function W0(){if(dp)return Mn;dp=1;var s=Ad(),e=j0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,S={},y={};function _(t){return p.call(y,t)?!0:p.call(S,t)?!1:m.test(t)?y[t]=!0:(S[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(t,i,a,l,u,h,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=T}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){v[t]=new w(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];v[i]=new w(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){v[t]=new w(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){v[t]=new w(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){v[t]=new w(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){v[t]=new w(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){v[t]=new w(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){v[t]=new w(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){v[t]=new w(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,L);v[i]=new w(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,L);v[i]=new w(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,L);v[i]=new w(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!1,!1)}),v.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){v[t]=new w(t,1,!1,t.toLowerCase(),null,!0,!0)});function N(t,i,a,l){var u=v.hasOwnProperty(i)?v[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,u,l)&&(a=null),l||u===null?_(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),I=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),ue=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,O;function ne(t){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var De=!1;function K(t,i){if(!t||De)return"";De=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var u=J.stack.split(`
`),h=l.stack.split(`
`),T=u.length-1,U=h.length-1;1<=T&&0<=U&&u[T]!==h[U];)U--;for(;1<=T&&0<=U;T--,U--)if(u[T]!==h[U]){if(T!==1||U!==1)do if(T--,U--,0>U||u[T]!==h[U]){var z=`
`+u[T].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=T&&0<=U);break}}}finally{De=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ne(t):""}function ce(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=K(t.type,!1),t;case 11:return t=K(t.type.render,!1),t;case 1:return t=K(t.type,!0),t;default:return""}}function _e(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case k:return"Fragment";case I:return"Portal";case R:return"Profiler";case Y:return"StrictMode";case Z:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case re:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ue:return i=t.displayName||null,i!==null?i:_e(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return _e(t(i))}catch{}}return null}function Me(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _e(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function $e(t){var i=ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(T){l=""+T,h.call(this,T)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function xe(t){t._valueTracker||(t._valueTracker=$e(t))}function D(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=ke(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Le(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ge(t,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Ye(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ze(t,i){i=i.checked,i!=null&&N(t,"checked",i,!1)}function yt(t,i){ze(t,i);var a=be(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?at(t,i.type,a):i.hasOwnProperty("defaultValue")&&at(t,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function et(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function at(t,i,a){(i!=="number"||Le(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var F=Array.isArray;function C(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ee(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ge(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(F(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:be(a)}}function ye(t,i){var a=be(i.value),l=be(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function pe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Ke(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ne(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Ke(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oe,ct=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Oe=Oe||document.createElement("div"),Oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Oe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Ee(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mt=["Webkit","ms","Moz","O"];Object.keys(Ie).forEach(function(t){mt.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Ie[i]=Ie[t]})});function rt(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ie.hasOwnProperty(t)&&Ie[t]?(""+i).trim():i+"px"}function Be(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=rt(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var lt=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(t,i){if(i){if(lt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function we(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fe=null,he=null,Ae=null;function tt(t){if(t=ca(t)){if(typeof fe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ro(i),fe(t.stateNode,t.type,i))}}function gt(t){he?Ae?Ae.push(t):Ae=[t]:he=t}function Ot(){if(he){var t=he,i=Ae;if(Ae=he=null,tt(t),i)for(t=0;t<i.length;t++)tt(i[t])}}function Vt(t,i){return t(i)}function xt(){}var Rn=!1;function bn(t,i,a){if(Rn)return t(i,a);Rn=!0;try{return Vt(t,i,a)}finally{Rn=!1,(he!==null||Ae!==null)&&(xt(),Ot())}}function Oi(t,i){var a=t.stateNode;if(a===null)return null;var l=ro(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Yn=!1;if(f)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){Yn=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{Yn=!1}function ka(t,i,a,l,u,h,T,U,z){var J=Array.prototype.slice.call(arguments,3);try{i.apply(a,J)}catch(ve){this.onError(ve)}}var ki=!1,pi=null,_r=!1,zi=null,za={onError:function(t){ki=!0,pi=t}};function Ba(t,i,a,l,u,h,T,U,z){ki=!1,pi=null,ka.apply(za,arguments)}function Il(t,i,a,l,u,h,T,U,z){if(Ba.apply(this,arguments),ki){if(ki){var J=pi;ki=!1,pi=null}else throw Error(n(198));_r||(_r=!0,zi=J)}}function mi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ha(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function b(t){if(mi(t)!==t)throw Error(n(188))}function j(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return b(u),t;if(h===l)return b(u),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=h;else{for(var T=!1,U=u.child;U;){if(U===a){T=!0,a=u,l=h;break}if(U===l){T=!0,l=u,a=h;break}U=U.sibling}if(!T){for(U=h.child;U;){if(U===a){T=!0,a=h,l=u;break}if(U===l){T=!0,l=h,a=u;break}U=U.sibling}if(!T)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Q(t){return t=j(t),t!==null?te(t):null}function te(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=te(t);if(i!==null)return i;t=t.sibling}return null}var X=e.unstable_scheduleCallback,Ce=e.unstable_cancelCallback,Ue=e.unstable_shouldYield,je=e.unstable_requestPaint,Re=e.unstable_now,it=e.unstable_getCurrentPriorityLevel,nt=e.unstable_ImmediatePriority,Ze=e.unstable_UserBlockingPriority,vt=e.unstable_NormalPriority,Ut=e.unstable_LowPriority,Pt=e.unstable_IdlePriority,Zt=null,dt=null;function qe(t){if(dt&&typeof dt.onCommitFiberRoot=="function")try{dt.onCommitFiberRoot(Zt,t,void 0,(t.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Bi,St=Math.log,Nn=Math.LN2;function Bi(t){return t>>>=0,t===0?32:31-(St(t)/Nn|0)|0}var Qt=64,Hi=4194304;function bt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,T=a&268435455;if(T!==0){var U=T&~u;U!==0?l=bt(U):(h&=T,h!==0&&(l=bt(h)))}else T=a&~u,T!==0?l=bt(T):h!==0&&(l=bt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Tt(i),u=1<<a,l|=t[a],i&=~u;return l}function Ws(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var T=31-Tt(h),U=1<<T,z=u[T];z===-1?((U&a)===0||(U&l)!==0)&&(u[T]=Ws(U,i)):z<=i&&(t.expiredLanes|=U),h&=~U}}function yr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Va(){var t=Qt;return Qt<<=1,(Qt&4194240)===0&&(Qt=64),t}function qr(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Xs(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Tt(i),t[i]=a}function og(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Tt(a),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~h}}function Ul(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Tt(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var wt=0;function Fd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Od,Fl,kd,zd,Bd,Ol=!1,Ga=[],Vi=null,Gi=null,ji=null,Ys=new Map,qs=new Map,Wi=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function $s(t,i,a,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=ca(i),i!==null&&Fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function cg(t,i,a,l,u){switch(i){case"focusin":return Vi=$s(Vi,t,i,a,l,u),!0;case"dragenter":return Gi=$s(Gi,t,i,a,l,u),!0;case"mouseover":return ji=$s(ji,t,i,a,l,u),!0;case"pointerover":var h=u.pointerId;return Ys.set(h,$s(Ys.get(h)||null,t,i,a,l,u)),!0;case"gotpointercapture":return h=u.pointerId,qs.set(h,$s(qs.get(h)||null,t,i,a,l,u)),!0}return!1}function Vd(t){var i=Sr(t.target);if(i!==null){var a=mi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ha(a),i!==null){t.blockedOn=i,Bd(t.priority,function(){kd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ja(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);G=l,a.target.dispatchEvent(l),G=null}else return i=ca(a),i!==null&&Fl(i),t.blockedOn=a,!1;i.shift()}return!0}function Gd(t,i,a){ja(t)&&a.delete(i)}function ug(){Ol=!1,Vi!==null&&ja(Vi)&&(Vi=null),Gi!==null&&ja(Gi)&&(Gi=null),ji!==null&&ja(ji)&&(ji=null),Ys.forEach(Gd),qs.forEach(Gd)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ug)))}function Zs(t){function i(u){return Ks(u,t)}if(0<Ga.length){Ks(Ga[0],t);for(var a=1;a<Ga.length;a++){var l=Ga[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&Ks(Vi,t),Gi!==null&&Ks(Gi,t),ji!==null&&Ks(ji,t),Ys.forEach(i),qs.forEach(i),a=0;a<Wi.length;a++)l=Wi[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wi.length&&(a=Wi[0],a.blockedOn===null);)Vd(a),a.blockedOn===null&&Wi.shift()}var $r=P.ReactCurrentBatchConfig,Wa=!0;function dg(t,i,a,l){var u=wt,h=$r.transition;$r.transition=null;try{wt=1,kl(t,i,a,l)}finally{wt=u,$r.transition=h}}function fg(t,i,a,l){var u=wt,h=$r.transition;$r.transition=null;try{wt=4,kl(t,i,a,l)}finally{wt=u,$r.transition=h}}function kl(t,i,a,l){if(Wa){var u=zl(t,i,a,l);if(u===null)nc(t,i,l,Xa,a),Hd(t,l);else if(cg(u,t,i,a,l))l.stopPropagation();else if(Hd(t,l),i&4&&-1<lg.indexOf(t)){for(;u!==null;){var h=ca(u);if(h!==null&&Od(h),h=zl(t,i,a,l),h===null&&nc(t,i,l,Xa,a),h===u)break;u=h}u!==null&&l.stopPropagation()}else nc(t,i,l,null,a)}}var Xa=null;function zl(t,i,a,l){if(Xa=null,t=we(l),t=Sr(t),t!==null)if(i=mi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ha(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Xa=t,null}function jd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(it()){case nt:return 1;case Ze:return 4;case vt:case Ut:return 16;case Pt:return 536870912;default:return 16}default:return 16}}var Xi=null,Bl=null,Ya=null;function Wd(){if(Ya)return Ya;var t,i=Bl,a=i.length,l,u="value"in Xi?Xi.value:Xi.textContent,h=u.length;for(t=0;t<a&&i[t]===u[t];t++);var T=a-t;for(l=1;l<=T&&i[a-l]===u[h-l];l++);return Ya=u.slice(t,1<l?1-l:void 0)}function qa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function Xd(){return!1}function Ln(t){function i(a,l,u,h,T){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=T,this.currentTarget=null;for(var U in t)t.hasOwnProperty(U)&&(a=t[U],this[U]=a?a(h):h[U]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?$a:Xd,this.isPropagationStopped=Xd,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),i}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Ln(Kr),Qs=se({},Kr,{view:0,detail:0}),hg=Ln(Qs),Vl,Gl,Js,Ka=se({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Vl=t.screenX-Js.screenX,Gl=t.screenY-Js.screenY):Gl=Vl=0,Js=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),Yd=Ln(Ka),pg=se({},Ka,{dataTransfer:0}),mg=Ln(pg),gg=se({},Qs,{relatedTarget:0}),jl=Ln(gg),vg=se({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),xg=Ln(vg),_g=se({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yg=Ln(_g),Sg=se({},Kr,{data:0}),qd=Ln(Sg),Mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Tg[t])?!!i[t]:!1}function Wl(){return wg}var Ag=se({},Qs,{key:function(t){if(t.key){var i=Mg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Eg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wl,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cg=Ln(Ag),Rg=se({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Ln(Rg),bg=se({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wl}),Ng=Ln(bg),Pg=se({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lg=Ln(Pg),Dg=se({},Ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ig=Ln(Dg),Ug=[9,13,27,32],Xl=f&&"CompositionEvent"in window,ea=null;f&&"documentMode"in document&&(ea=document.documentMode);var Fg=f&&"TextEvent"in window&&!ea,Kd=f&&(!Xl||ea&&8<ea&&11>=ea),Zd=" ",Qd=!1;function Jd(t,i){switch(t){case"keyup":return Ug.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ef(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function Og(t,i){switch(t){case"compositionend":return ef(i);case"keypress":return i.which!==32?null:(Qd=!0,Zd);case"textInput":return t=i.data,t===Zd&&Qd?null:t;default:return null}}function kg(t,i){if(Zr)return t==="compositionend"||!Xl&&Jd(t,i)?(t=Wd(),Ya=Bl=Xi=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kd&&i.locale!=="ko"?null:i.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!zg[t.type]:i==="textarea"}function nf(t,i,a,l){gt(l),i=to(i,"onChange"),0<i.length&&(a=new Hl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ta=null,na=null;function Bg(t){Sf(t,0)}function Za(t){var i=ns(t);if(D(i))return t}function Hg(t,i){if(t==="change")return i}var rf=!1;if(f){var Yl;if(f){var ql="oninput"in document;if(!ql){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),ql=typeof sf.oninput=="function"}Yl=ql}else Yl=!1;rf=Yl&&(!document.documentMode||9<document.documentMode)}function af(){ta&&(ta.detachEvent("onpropertychange",of),na=ta=null)}function of(t){if(t.propertyName==="value"&&Za(na)){var i=[];nf(i,na,t,we(t)),bn(Bg,i)}}function Vg(t,i,a){t==="focusin"?(af(),ta=i,na=a,ta.attachEvent("onpropertychange",of)):t==="focusout"&&af()}function Gg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Za(na)}function jg(t,i){if(t==="click")return Za(i)}function Wg(t,i){if(t==="input"||t==="change")return Za(i)}function Xg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var qn=typeof Object.is=="function"?Object.is:Xg;function ia(t,i){if(qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!p.call(i,u)||!qn(t[u],i[u]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cf(t,i){var a=lf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lf(a)}}function uf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?uf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function df(){for(var t=window,i=Le();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Le(t.document)}return i}function $l(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Yg(t){var i=df(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&uf(a.ownerDocument.documentElement,a)){if(l!==null&&$l(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=cf(a,h);var T=cf(a,l);u&&T&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==T.node||t.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qg=f&&"documentMode"in document&&11>=document.documentMode,Qr=null,Kl=null,ra=null,Zl=!1;function ff(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zl||Qr==null||Qr!==Le(l)||(l=Qr,"selectionStart"in l&&$l(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ra&&ia(ra,l)||(ra=l,l=to(Kl,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Qr)))}function Qa(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Jr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Ql={},hf={};f&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Ja(t){if(Ql[t])return Ql[t];if(!Jr[t])return t;var i=Jr[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in hf)return Ql[t]=i[a];return t}var pf=Ja("animationend"),mf=Ja("animationiteration"),gf=Ja("animationstart"),vf=Ja("transitionend"),xf=new Map,_f="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){xf.set(t,i),c(i,[t])}for(var Jl=0;Jl<_f.length;Jl++){var ec=_f[Jl],$g=ec.toLowerCase(),Kg=ec[0].toUpperCase()+ec.slice(1);Yi($g,"on"+Kg)}Yi(pf,"onAnimationEnd"),Yi(mf,"onAnimationIteration"),Yi(gf,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(vf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function yf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Il(l,i,void 0,t),t.currentTarget=null}function Sf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var T=l.length-1;0<=T;T--){var U=l[T],z=U.instance,J=U.currentTarget;if(U=U.listener,z!==h&&u.isPropagationStopped())break e;yf(u,U,J),h=z}else for(T=0;T<l.length;T++){if(U=l[T],z=U.instance,J=U.currentTarget,U=U.listener,z!==h&&u.isPropagationStopped())break e;yf(u,U,J),h=z}}}if(_r)throw t=zi,_r=!1,zi=null,t}function Lt(t,i){var a=i[lc];a===void 0&&(a=i[lc]=new Set);var l=t+"__bubble";a.has(l)||(Mf(i,t,2,!1),a.add(l))}function tc(t,i,a){var l=0;i&&(l|=4),Mf(a,t,l,i)}var eo="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[eo]){t[eo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Zg.has(a)||tc(a,!1,t),tc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[eo]||(i[eo]=!0,tc("selectionchange",!1,i))}}function Mf(t,i,a,l){switch(jd(i)){case 1:var u=dg;break;case 4:u=fg;break;default:u=kl}a=u.bind(null,i,a,t),u=void 0,!Yn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function nc(t,i,a,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var U=l.stateNode.containerInfo;if(U===u||U.nodeType===8&&U.parentNode===u)break;if(T===4)for(T=l.return;T!==null;){var z=T.tag;if((z===3||z===4)&&(z=T.stateNode.containerInfo,z===u||z.nodeType===8&&z.parentNode===u))return;T=T.return}for(;U!==null;){if(T=Sr(U),T===null)return;if(z=T.tag,z===5||z===6){l=h=T;continue e}U=U.parentNode}}l=l.return}bn(function(){var J=h,ve=we(a),Se=[];e:{var me=xf.get(t);if(me!==void 0){var Fe=Hl,Ve=t;switch(t){case"keypress":if(qa(a)===0)break e;case"keydown":case"keyup":Fe=Cg;break;case"focusin":Ve="focus",Fe=jl;break;case"focusout":Ve="blur",Fe=jl;break;case"beforeblur":case"afterblur":Fe=jl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Fe=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Fe=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Fe=Ng;break;case pf:case mf:case gf:Fe=xg;break;case vf:Fe=Lg;break;case"scroll":Fe=hg;break;case"wheel":Fe=Ig;break;case"copy":case"cut":case"paste":Fe=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Fe=$d}var We=(i&4)!==0,Ht=!We&&t==="scroll",q=We?me!==null?me+"Capture":null:me;We=[];for(var V=J,$;V!==null;){$=V;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,q!==null&&(Te=Oi(V,q),Te!=null&&We.push(oa(V,Te,$)))),Ht)break;V=V.return}0<We.length&&(me=new Fe(me,Ve,null,a,ve),Se.push({event:me,listeners:We}))}}if((i&7)===0){e:{if(me=t==="mouseover"||t==="pointerover",Fe=t==="mouseout"||t==="pointerout",me&&a!==G&&(Ve=a.relatedTarget||a.fromElement)&&(Sr(Ve)||Ve[gi]))break e;if((Fe||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,Fe?(Ve=a.relatedTarget||a.toElement,Fe=J,Ve=Ve?Sr(Ve):null,Ve!==null&&(Ht=mi(Ve),Ve!==Ht||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Fe=null,Ve=J),Fe!==Ve)){if(We=Yd,Te="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(We=$d,Te="onPointerLeave",q="onPointerEnter",V="pointer"),Ht=Fe==null?me:ns(Fe),$=Ve==null?me:ns(Ve),me=new We(Te,V+"leave",Fe,a,ve),me.target=Ht,me.relatedTarget=$,Te=null,Sr(ve)===J&&(We=new We(q,V+"enter",Ve,a,ve),We.target=$,We.relatedTarget=Ht,Te=We),Ht=Te,Fe&&Ve)t:{for(We=Fe,q=Ve,V=0,$=We;$;$=es($))V++;for($=0,Te=q;Te;Te=es(Te))$++;for(;0<V-$;)We=es(We),V--;for(;0<$-V;)q=es(q),$--;for(;V--;){if(We===q||q!==null&&We===q.alternate)break t;We=es(We),q=es(q)}We=null}else We=null;Fe!==null&&Ef(Se,me,Fe,We,!1),Ve!==null&&Ht!==null&&Ef(Se,Ht,Ve,We,!0)}}e:{if(me=J?ns(J):window,Fe=me.nodeName&&me.nodeName.toLowerCase(),Fe==="select"||Fe==="input"&&me.type==="file")var Xe=Hg;else if(tf(me))if(rf)Xe=Wg;else{Xe=Gg;var Qe=Vg}else(Fe=me.nodeName)&&Fe.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Xe=jg);if(Xe&&(Xe=Xe(t,J))){nf(Se,Xe,a,ve);break e}Qe&&Qe(t,me,J),t==="focusout"&&(Qe=me._wrapperState)&&Qe.controlled&&me.type==="number"&&at(me,"number",me.value)}switch(Qe=J?ns(J):window,t){case"focusin":(tf(Qe)||Qe.contentEditable==="true")&&(Qr=Qe,Kl=J,ra=null);break;case"focusout":ra=Kl=Qr=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,ff(Se,a,ve);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":ff(Se,a,ve)}var Je;if(Xl)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Zr?Jd(t,a)&&(ot="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&(Kd&&a.locale!=="ko"&&(Zr||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Zr&&(Je=Wd()):(Xi=ve,Bl="value"in Xi?Xi.value:Xi.textContent,Zr=!0)),Qe=to(J,ot),0<Qe.length&&(ot=new qd(ot,t,null,a,ve),Se.push({event:ot,listeners:Qe}),Je?ot.data=Je:(Je=ef(a),Je!==null&&(ot.data=Je)))),(Je=Fg?Og(t,a):kg(t,a))&&(J=to(J,"onBeforeInput"),0<J.length&&(ve=new qd("onBeforeInput","beforeinput",null,a,ve),Se.push({event:ve,listeners:J}),ve.data=Je))}Sf(Se,i)})}function oa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function to(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Oi(t,a),h!=null&&l.unshift(oa(t,h,u)),h=Oi(t,i),h!=null&&l.push(oa(t,h,u))),t=t.return}return l}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,i,a,l,u){for(var h=i._reactName,T=[];a!==null&&a!==l;){var U=a,z=U.alternate,J=U.stateNode;if(z!==null&&z===l)break;U.tag===5&&J!==null&&(U=J,u?(z=Oi(a,h),z!=null&&T.unshift(oa(a,z,U))):u||(z=Oi(a,h),z!=null&&T.push(oa(a,z,U)))),a=a.return}T.length!==0&&t.push({event:i,listeners:T})}var Qg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function Tf(t){return(typeof t=="string"?t:""+t).replace(Qg,`
`).replace(Jg,"")}function no(t,i,a){if(i=Tf(i),Tf(t)!==i&&a)throw Error(n(425))}function io(){}var ic=null,rc=null;function sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(t){return wf.resolve(null).then(t).catch(n0)}:ac;function n0(t){setTimeout(function(){throw t})}function oc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),Zs(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);Zs(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Af(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),ai="__reactFiber$"+ts,la="__reactProps$"+ts,gi="__reactContainer$"+ts,lc="__reactEvents$"+ts,i0="__reactListeners$"+ts,r0="__reactHandles$"+ts;function Sr(t){var i=t[ai];if(i)return i;for(var a=t.parentNode;a;){if(i=a[gi]||a[ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Af(t);t!==null;){if(a=t[ai])return a;t=Af(t)}return i}t=a,a=t.parentNode}return null}function ca(t){return t=t[ai]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ro(t){return t[la]||null}var cc=[],is=-1;function $i(t){return{current:t}}function Dt(t){0>is||(t.current=cc[is],cc[is]=null,is--)}function Nt(t,i){is++,cc[is]=t.current,t.current=i}var Ki={},on=$i(Ki),vn=$i(!1),Mr=Ki;function rs(t,i){var a=t.type.contextTypes;if(!a)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in a)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function xn(t){return t=t.childContextTypes,t!=null}function so(){Dt(vn),Dt(on)}function Cf(t,i,a){if(on.current!==Ki)throw Error(n(168));Nt(on,i),Nt(vn,a)}function Rf(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,Me(t)||"Unknown",u));return se({},a,l)}function ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Mr=on.current,Nt(on,t),Nt(vn,vn.current),!0}function bf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Rf(t,i,Mr),l.__reactInternalMemoizedMergedChildContext=t,Dt(vn),Dt(on),Nt(on,t)):Dt(vn),Nt(vn,a)}var vi=null,oo=!1,uc=!1;function Nf(t){vi===null?vi=[t]:vi.push(t)}function s0(t){oo=!0,Nf(t)}function Zi(){if(!uc&&vi!==null){uc=!0;var t=0,i=wt;try{var a=vi;for(wt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}vi=null,oo=!1}catch(u){throw vi!==null&&(vi=vi.slice(t+1)),X(nt,Zi),u}finally{wt=i,uc=!1}}return null}var ss=[],as=0,lo=null,co=0,kn=[],zn=0,Er=null,xi=1,_i="";function Tr(t,i){ss[as++]=co,ss[as++]=lo,lo=t,co=i}function Pf(t,i,a){kn[zn++]=xi,kn[zn++]=_i,kn[zn++]=Er,Er=t;var l=xi;t=_i;var u=32-Tt(l)-1;l&=~(1<<u),a+=1;var h=32-Tt(i)+u;if(30<h){var T=u-u%5;h=(l&(1<<T)-1).toString(32),l>>=T,u-=T,xi=1<<32-Tt(i)+u|a<<u|l,_i=h+t}else xi=1<<h|a<<u|l,_i=t}function dc(t){t.return!==null&&(Tr(t,1),Pf(t,1,0))}function fc(t){for(;t===lo;)lo=ss[--as],ss[as]=null,co=ss[--as],ss[as]=null;for(;t===Er;)Er=kn[--zn],kn[zn]=null,_i=kn[--zn],kn[zn]=null,xi=kn[--zn],kn[zn]=null}var Dn=null,In=null,Ft=!1,$n=null;function Lf(t,i){var a=Gn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Df(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,In=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Er!==null?{id:xi,overflow:_i}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Gn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Dn=t,In=null,!0):!1;default:return!1}}function hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pc(t){if(Ft){var i=In;if(i){var a=i;if(!Df(t,i)){if(hc(t))throw Error(n(418));i=qi(a.nextSibling);var l=Dn;i&&Df(t,i)?Lf(l,a):(t.flags=t.flags&-4097|2,Ft=!1,Dn=t)}}else{if(hc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Dn=t}}}function If(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function uo(t){if(t!==Dn)return!1;if(!Ft)return If(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!sc(t.type,t.memoizedProps)),i&&(i=In)){if(hc(t))throw Uf(),Error(n(418));for(;i;)Lf(t,i),i=qi(i.nextSibling)}if(If(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){In=qi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}In=null}}else In=Dn?qi(t.stateNode.nextSibling):null;return!0}function Uf(){for(var t=In;t;)t=qi(t.nextSibling)}function os(){In=Dn=null,Ft=!1}function mc(t){$n===null?$n=[t]:$n.push(t)}var a0=P.ReactCurrentBatchConfig;function ua(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(T){var U=u.refs;T===null?delete U[h]:U[h]=T},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function fo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ff(t){var i=t._init;return i(t._payload)}function Of(t){function i(q,V){if(t){var $=q.deletions;$===null?(q.deletions=[V],q.flags|=16):$.push(V)}}function a(q,V){if(!t)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function l(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function u(q,V){return q=sr(q,V),q.index=0,q.sibling=null,q}function h(q,V,$){return q.index=$,t?($=q.alternate,$!==null?($=$.index,$<V?(q.flags|=2,V):$):(q.flags|=2,V)):(q.flags|=1048576,V)}function T(q){return t&&q.alternate===null&&(q.flags|=2),q}function U(q,V,$,Te){return V===null||V.tag!==6?(V=au($,q.mode,Te),V.return=q,V):(V=u(V,$),V.return=q,V)}function z(q,V,$,Te){var Xe=$.type;return Xe===k?ve(q,V,$.props.children,Te,$.key):V!==null&&(V.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&Ff(Xe)===V.type)?(Te=u(V,$.props),Te.ref=ua(q,V,$),Te.return=q,Te):(Te=Fo($.type,$.key,$.props,null,q.mode,Te),Te.ref=ua(q,V,$),Te.return=q,Te)}function J(q,V,$,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=ou($,q.mode,Te),V.return=q,V):(V=u(V,$.children||[]),V.return=q,V)}function ve(q,V,$,Te,Xe){return V===null||V.tag!==7?(V=Lr($,q.mode,Te,Xe),V.return=q,V):(V=u(V,$),V.return=q,V)}function Se(q,V,$){if(typeof V=="string"&&V!==""||typeof V=="number")return V=au(""+V,q.mode,$),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case W:return $=Fo(V.type,V.key,V.props,null,q.mode,$),$.ref=ua(q,null,V),$.return=q,$;case I:return V=ou(V,q.mode,$),V.return=q,V;case oe:var Te=V._init;return Se(q,Te(V._payload),$)}if(F(V)||le(V))return V=Lr(V,q.mode,$,null),V.return=q,V;fo(q,V)}return null}function me(q,V,$,Te){var Xe=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:U(q,V,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case W:return $.key===Xe?z(q,V,$,Te):null;case I:return $.key===Xe?J(q,V,$,Te):null;case oe:return Xe=$._init,me(q,V,Xe($._payload),Te)}if(F($)||le($))return Xe!==null?null:ve(q,V,$,Te,null);fo(q,$)}return null}function Fe(q,V,$,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get($)||null,U(V,q,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case W:return q=q.get(Te.key===null?$:Te.key)||null,z(V,q,Te,Xe);case I:return q=q.get(Te.key===null?$:Te.key)||null,J(V,q,Te,Xe);case oe:var Qe=Te._init;return Fe(q,V,$,Qe(Te._payload),Xe)}if(F(Te)||le(Te))return q=q.get($)||null,ve(V,q,Te,Xe,null);fo(V,Te)}return null}function Ve(q,V,$,Te){for(var Xe=null,Qe=null,Je=V,ot=V=0,tn=null;Je!==null&&ot<$.length;ot++){Je.index>ot?(tn=Je,Je=null):tn=Je.sibling;var Mt=me(q,Je,$[ot],Te);if(Mt===null){Je===null&&(Je=tn);break}t&&Je&&Mt.alternate===null&&i(q,Je),V=h(Mt,V,ot),Qe===null?Xe=Mt:Qe.sibling=Mt,Qe=Mt,Je=tn}if(ot===$.length)return a(q,Je),Ft&&Tr(q,ot),Xe;if(Je===null){for(;ot<$.length;ot++)Je=Se(q,$[ot],Te),Je!==null&&(V=h(Je,V,ot),Qe===null?Xe=Je:Qe.sibling=Je,Qe=Je);return Ft&&Tr(q,ot),Xe}for(Je=l(q,Je);ot<$.length;ot++)tn=Fe(Je,q,ot,$[ot],Te),tn!==null&&(t&&tn.alternate!==null&&Je.delete(tn.key===null?ot:tn.key),V=h(tn,V,ot),Qe===null?Xe=tn:Qe.sibling=tn,Qe=tn);return t&&Je.forEach(function(ar){return i(q,ar)}),Ft&&Tr(q,ot),Xe}function We(q,V,$,Te){var Xe=le($);if(typeof Xe!="function")throw Error(n(150));if($=Xe.call($),$==null)throw Error(n(151));for(var Qe=Xe=null,Je=V,ot=V=0,tn=null,Mt=$.next();Je!==null&&!Mt.done;ot++,Mt=$.next()){Je.index>ot?(tn=Je,Je=null):tn=Je.sibling;var ar=me(q,Je,Mt.value,Te);if(ar===null){Je===null&&(Je=tn);break}t&&Je&&ar.alternate===null&&i(q,Je),V=h(ar,V,ot),Qe===null?Xe=ar:Qe.sibling=ar,Qe=ar,Je=tn}if(Mt.done)return a(q,Je),Ft&&Tr(q,ot),Xe;if(Je===null){for(;!Mt.done;ot++,Mt=$.next())Mt=Se(q,Mt.value,Te),Mt!==null&&(V=h(Mt,V,ot),Qe===null?Xe=Mt:Qe.sibling=Mt,Qe=Mt);return Ft&&Tr(q,ot),Xe}for(Je=l(q,Je);!Mt.done;ot++,Mt=$.next())Mt=Fe(Je,q,ot,Mt.value,Te),Mt!==null&&(t&&Mt.alternate!==null&&Je.delete(Mt.key===null?ot:Mt.key),V=h(Mt,V,ot),Qe===null?Xe=Mt:Qe.sibling=Mt,Qe=Mt);return t&&Je.forEach(function(z0){return i(q,z0)}),Ft&&Tr(q,ot),Xe}function Ht(q,V,$,Te){if(typeof $=="object"&&$!==null&&$.type===k&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case W:e:{for(var Xe=$.key,Qe=V;Qe!==null;){if(Qe.key===Xe){if(Xe=$.type,Xe===k){if(Qe.tag===7){a(q,Qe.sibling),V=u(Qe,$.props.children),V.return=q,q=V;break e}}else if(Qe.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===oe&&Ff(Xe)===Qe.type){a(q,Qe.sibling),V=u(Qe,$.props),V.ref=ua(q,Qe,$),V.return=q,q=V;break e}a(q,Qe);break}else i(q,Qe);Qe=Qe.sibling}$.type===k?(V=Lr($.props.children,q.mode,Te,$.key),V.return=q,q=V):(Te=Fo($.type,$.key,$.props,null,q.mode,Te),Te.ref=ua(q,V,$),Te.return=q,q=Te)}return T(q);case I:e:{for(Qe=$.key;V!==null;){if(V.key===Qe)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(q,V.sibling),V=u(V,$.children||[]),V.return=q,q=V;break e}else{a(q,V);break}else i(q,V);V=V.sibling}V=ou($,q.mode,Te),V.return=q,q=V}return T(q);case oe:return Qe=$._init,Ht(q,V,Qe($._payload),Te)}if(F($))return Ve(q,V,$,Te);if(le($))return We(q,V,$,Te);fo(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,V!==null&&V.tag===6?(a(q,V.sibling),V=u(V,$),V.return=q,q=V):(a(q,V),V=au($,q.mode,Te),V.return=q,q=V),T(q)):a(q,V)}return Ht}var ls=Of(!0),kf=Of(!1),ho=$i(null),po=null,cs=null,gc=null;function vc(){gc=cs=po=null}function xc(t){var i=ho.current;Dt(ho),t._currentValue=i}function _c(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function us(t,i){po=t,gc=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_n=!0),t.firstContext=null)}function Bn(t){var i=t._currentValue;if(gc!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(po===null)throw Error(n(308));cs=t,po.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var wr=null;function yc(t){wr===null?wr=[t]:wr.push(t)}function zf(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,yc(i)):(a.next=u.next,u.next=a),i.interleaved=a,yi(t,l)}function yi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,yi(t,a)}return u=l.interleaved,u===null?(i.next=i,yc(l)):(i.next=u.next,u.next=i),l.interleaved=i,yi(t,a)}function mo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ul(t,a)}}function Hf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?u=h=T:h=h.next=T,a=a.next}while(a!==null);h===null?u=h=i:h=h.next=i}else u=h=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function go(t,i,a,l){var u=t.updateQueue;Qi=!1;var h=u.firstBaseUpdate,T=u.lastBaseUpdate,U=u.shared.pending;if(U!==null){u.shared.pending=null;var z=U,J=z.next;z.next=null,T===null?h=J:T.next=J,T=z;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==T&&(U===null?ve.firstBaseUpdate=J:U.next=J,ve.lastBaseUpdate=z))}if(h!==null){var Se=u.baseState;T=0,ve=J=z=null,U=h;do{var me=U.lane,Fe=U.eventTime;if((l&me)===me){ve!==null&&(ve=ve.next={eventTime:Fe,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var Ve=t,We=U;switch(me=i,Fe=a,We.tag){case 1:if(Ve=We.payload,typeof Ve=="function"){Se=Ve.call(Fe,Se,me);break e}Se=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=We.payload,me=typeof Ve=="function"?Ve.call(Fe,Se,me):Ve,me==null)break e;Se=se({},Se,me);break e;case 2:Qi=!0}}U.callback!==null&&U.lane!==0&&(t.flags|=64,me=u.effects,me===null?u.effects=[U]:me.push(U))}else Fe={eventTime:Fe,lane:me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(J=ve=Fe,z=Se):ve=ve.next=Fe,T|=me;if(U=U.next,U===null){if(U=u.shared.pending,U===null)break;me=U,U=me.next,me.next=null,u.lastBaseUpdate=me,u.shared.pending=null}}while(!0);if(ve===null&&(z=Se),u.baseState=z,u.firstBaseUpdate=J,u.lastBaseUpdate=ve,i=u.shared.interleaved,i!==null){u=i;do T|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Rr|=T,t.lanes=T,t.memoizedState=Se}}function Vf(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var da={},oi=$i(da),fa=$i(da),ha=$i(da);function Ar(t){if(t===da)throw Error(n(174));return t}function Mc(t,i){switch(Nt(ha,i),Nt(fa,t),Nt(oi,da),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ne(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ne(i,t)}Dt(oi),Nt(oi,i)}function ds(){Dt(oi),Dt(fa),Dt(ha)}function Gf(t){Ar(ha.current);var i=Ar(oi.current),a=Ne(i,t.type);i!==a&&(Nt(fa,t),Nt(oi,a))}function Ec(t){fa.current===t&&(Dt(oi),Dt(fa))}var kt=$i(0);function vo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tc=[];function wc(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var xo=P.ReactCurrentDispatcher,Ac=P.ReactCurrentBatchConfig,Cr=0,zt=null,Xt=null,Jt=null,_o=!1,pa=!1,ma=0,o0=0;function ln(){throw Error(n(321))}function Cc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!qn(t[a],i[a]))return!1;return!0}function Rc(t,i,a,l,u,h){if(Cr=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,xo.current=t===null||t.memoizedState===null?d0:f0,t=a(l,u),pa){h=0;do{if(pa=!1,ma=0,25<=h)throw Error(n(301));h+=1,Jt=Xt=null,i.updateQueue=null,xo.current=h0,t=a(l,u)}while(pa)}if(xo.current=Mo,i=Xt!==null&&Xt.next!==null,Cr=0,Jt=Xt=zt=null,_o=!1,i)throw Error(n(300));return t}function bc(){var t=ma!==0;return ma=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Hn(){if(Xt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,Xt=t;else{if(t===null)throw Error(n(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function ga(t,i){return typeof i=="function"?i(t):i}function Nc(t){var i=Hn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Xt,u=l.baseQueue,h=a.pending;if(h!==null){if(u!==null){var T=u.next;u.next=h.next,h.next=T}l.baseQueue=u=h,a.pending=null}if(u!==null){h=u.next,l=l.baseState;var U=T=null,z=null,J=h;do{var ve=J.lane;if((Cr&ve)===ve)z!==null&&(z=z.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var Se={lane:ve,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};z===null?(U=z=Se,T=l):z=z.next=Se,zt.lanes|=ve,Rr|=ve}J=J.next}while(J!==null&&J!==h);z===null?T=l:z.next=U,qn(l,i.memoizedState)||(_n=!0),i.memoizedState=l,i.baseState=T,i.baseQueue=z,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do h=u.lane,zt.lanes|=h,Rr|=h,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Pc(t){var i=Hn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,h=i.memoizedState;if(u!==null){a.pending=null;var T=u=u.next;do h=t(h,T.action),T=T.next;while(T!==u);qn(h,i.memoizedState)||(_n=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function jf(){}function Wf(t,i){var a=zt,l=Hn(),u=i(),h=!qn(l.memoizedState,u);if(h&&(l.memoizedState=u,_n=!0),l=l.queue,Lc(qf.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,va(9,Yf.bind(null,a,l,u,i),void 0,null),en===null)throw Error(n(349));(Cr&30)!==0||Xf(a,i,u)}return u}function Xf(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Yf(t,i,a,l){i.value=a,i.getSnapshot=l,$f(i)&&Kf(t)}function qf(t,i,a){return a(function(){$f(i)&&Kf(t)})}function $f(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!qn(t,a)}catch{return!0}}function Kf(t){var i=yi(t,1);i!==null&&Jn(i,t,1,-1)}function Zf(t){var i=li();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i.queue=t,t=t.dispatch=u0.bind(null,zt,t),[i.memoizedState,t]}function va(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Qf(){return Hn().memoizedState}function yo(t,i,a,l){var u=li();zt.flags|=t,u.memoizedState=va(1|i,a,void 0,l===void 0?null:l)}function So(t,i,a,l){var u=Hn();l=l===void 0?null:l;var h=void 0;if(Xt!==null){var T=Xt.memoizedState;if(h=T.destroy,l!==null&&Cc(l,T.deps)){u.memoizedState=va(i,a,h,l);return}}zt.flags|=t,u.memoizedState=va(1|i,a,h,l)}function Jf(t,i){return yo(8390656,8,t,i)}function Lc(t,i){return So(2048,8,t,i)}function eh(t,i){return So(4,2,t,i)}function th(t,i){return So(4,4,t,i)}function nh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ih(t,i,a){return a=a!=null?a.concat([t]):null,So(4,4,nh.bind(null,i,t),a)}function Dc(){}function rh(t,i){var a=Hn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function sh(t,i){var a=Hn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function ah(t,i,a){return(Cr&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=a):(qn(a,i)||(a=Va(),zt.lanes|=a,Rr|=a,t.baseState=!0),i)}function l0(t,i){var a=wt;wt=a!==0&&4>a?a:4,t(!0);var l=Ac.transition;Ac.transition={};try{t(!1),i()}finally{wt=a,Ac.transition=l}}function oh(){return Hn().memoizedState}function c0(t,i,a){var l=ir(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},lh(t))ch(i,a);else if(a=zf(t,i,a,l),a!==null){var u=pn();Jn(a,t,l,u),uh(a,i,l)}}function u0(t,i,a){var l=ir(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(lh(t))ch(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var T=i.lastRenderedState,U=h(T,a);if(u.hasEagerState=!0,u.eagerState=U,qn(U,T)){var z=i.interleaved;z===null?(u.next=u,yc(i)):(u.next=z.next,z.next=u),i.interleaved=u;return}}catch{}finally{}a=zf(t,i,u,l),a!==null&&(u=pn(),Jn(a,t,l,u),uh(a,i,l))}}function lh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function ch(t,i){pa=_o=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function uh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ul(t,a)}}var Mo={readContext:Bn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},d0={readContext:Bn,useCallback:function(t,i){return li().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:Jf,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,yo(4194308,4,nh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return yo(4194308,4,t,i)},useInsertionEffect:function(t,i){return yo(4,2,t,i)},useMemo:function(t,i){var a=li();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=li();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=c0.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=li();return t={current:t},i.memoizedState=t},useState:Zf,useDebugValue:Dc,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Zf(!1),i=t[0];return t=l0.bind(null,t[1]),li().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,u=li();if(Ft){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),en===null)throw Error(n(349));(Cr&30)!==0||Xf(l,i,a)}u.memoizedState=a;var h={value:a,getSnapshot:i};return u.queue=h,Jf(qf.bind(null,l,h,t),[t]),l.flags|=2048,va(9,Yf.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=li(),i=en.identifierPrefix;if(Ft){var a=_i,l=xi;a=(l&~(1<<32-Tt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=o0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},f0={readContext:Bn,useCallback:rh,useContext:Bn,useEffect:Lc,useImperativeHandle:ih,useInsertionEffect:eh,useLayoutEffect:th,useMemo:sh,useReducer:Nc,useRef:Qf,useState:function(){return Nc(ga)},useDebugValue:Dc,useDeferredValue:function(t){var i=Hn();return ah(i,Xt.memoizedState,t)},useTransition:function(){var t=Nc(ga)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:jf,useSyncExternalStore:Wf,useId:oh,unstable_isNewReconciler:!1},h0={readContext:Bn,useCallback:rh,useContext:Bn,useEffect:Lc,useImperativeHandle:ih,useInsertionEffect:eh,useLayoutEffect:th,useMemo:sh,useReducer:Pc,useRef:Qf,useState:function(){return Pc(ga)},useDebugValue:Dc,useDeferredValue:function(t){var i=Hn();return Xt===null?i.memoizedState=t:ah(i,Xt.memoizedState,t)},useTransition:function(){var t=Pc(ga)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:jf,useSyncExternalStore:Wf,useId:oh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Ic(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:se({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Eo={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=pn(),u=ir(t),h=Si(l,u);h.payload=i,a!=null&&(h.callback=a),i=Ji(t,h,u),i!==null&&(Jn(i,t,u,l),mo(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=pn(),u=ir(t),h=Si(l,u);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Ji(t,h,u),i!==null&&(Jn(i,t,u,l),mo(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=pn(),l=ir(t),u=Si(a,l);u.tag=2,i!=null&&(u.callback=i),i=Ji(t,u,l),i!==null&&(Jn(i,t,l,a),mo(i,t,l))}};function dh(t,i,a,l,u,h,T){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,T):i.prototype&&i.prototype.isPureReactComponent?!ia(a,l)||!ia(u,h):!0}function fh(t,i,a){var l=!1,u=Ki,h=i.contextType;return typeof h=="object"&&h!==null?h=Bn(h):(u=xn(i)?Mr:on.current,l=i.contextTypes,h=(l=l!=null)?rs(t,u):Ki),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Eo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function hh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Eo.enqueueReplaceState(i,i.state,null)}function Uc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Sc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Bn(h):(h=xn(i)?Mr:on.current,u.context=rs(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ic(t,i,h,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Eo.enqueueReplaceState(u,u.state,null),go(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,i){try{var a="",l=i;do a+=ce(l),l=l.return;while(l);var u=a}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Fc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Oc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function ph(t,i,a){a=Si(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){No||(No=!0,Qc=l),Oc(t,i)},a}function mh(t,i,a){a=Si(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){Oc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Oc(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function gh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new p0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=R0.bind(null,t,i,a),i.then(t,t))}function vh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function xh(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Si(-1,1),i.tag=2,Ji(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var m0=P.ReactCurrentOwner,_n=!1;function hn(t,i,a,l){i.child=t===null?kf(i,null,a,l):ls(i,t.child,a,l)}function _h(t,i,a,l,u){a=a.render;var h=i.ref;return us(i,u),l=Rc(t,i,a,l,h,u),a=bc(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Mi(t,i,u)):(Ft&&a&&dc(i),i.flags|=1,hn(t,i,l,u),i.child)}function yh(t,i,a,l,u){if(t===null){var h=a.type;return typeof h=="function"&&!su(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Sh(t,i,h,l,u)):(t=Fo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var T=h.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(T,l)&&t.ref===i.ref)return Mi(t,i,u)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Sh(t,i,a,l,u){if(t!==null){var h=t.memoizedProps;if(ia(h,l)&&t.ref===i.ref)if(_n=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,Mi(t,i,u)}return kc(t,i,a,l,u)}function Mh(t,i,a){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(ps,Un),Un|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Nt(ps,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Nt(ps,Un),Un|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Nt(ps,Un),Un|=l;return hn(t,i,u,a),i.child}function Eh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function kc(t,i,a,l,u){var h=xn(a)?Mr:on.current;return h=rs(i,h),us(i,u),a=Rc(t,i,a,l,h,u),l=bc(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Mi(t,i,u)):(Ft&&l&&dc(i),i.flags|=1,hn(t,i,a,u),i.child)}function Th(t,i,a,l,u){if(xn(a)){var h=!0;ao(i)}else h=!1;if(us(i,u),i.stateNode===null)wo(t,i),fh(i,a,l),Uc(i,a,l,u),l=!0;else if(t===null){var T=i.stateNode,U=i.memoizedProps;T.props=U;var z=T.context,J=a.contextType;typeof J=="object"&&J!==null?J=Bn(J):(J=xn(a)?Mr:on.current,J=rs(i,J));var ve=a.getDerivedStateFromProps,Se=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==l||z!==J)&&hh(i,T,l,J),Qi=!1;var me=i.memoizedState;T.state=me,go(i,l,T,u),z=i.memoizedState,U!==l||me!==z||vn.current||Qi?(typeof ve=="function"&&(Ic(i,a,ve,l),z=i.memoizedState),(U=Qi||dh(i,a,U,l,me,z,J))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),T.props=l,T.state=z,T.context=J,l=U):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{T=i.stateNode,Bf(t,i),U=i.memoizedProps,J=i.type===i.elementType?U:Kn(i.type,U),T.props=J,Se=i.pendingProps,me=T.context,z=a.contextType,typeof z=="object"&&z!==null?z=Bn(z):(z=xn(a)?Mr:on.current,z=rs(i,z));var Fe=a.getDerivedStateFromProps;(ve=typeof Fe=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(U!==Se||me!==z)&&hh(i,T,l,z),Qi=!1,me=i.memoizedState,T.state=me,go(i,l,T,u);var Ve=i.memoizedState;U!==Se||me!==Ve||vn.current||Qi?(typeof Fe=="function"&&(Ic(i,a,Fe,l),Ve=i.memoizedState),(J=Qi||dh(i,a,J,l,me,Ve,z)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(l,Ve,z),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(l,Ve,z)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Ve),T.props=l,T.state=Ve,T.context=z,l=J):(typeof T.componentDidUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||U===t.memoizedProps&&me===t.memoizedState||(i.flags|=1024),l=!1)}return zc(t,i,a,l,h,u)}function zc(t,i,a,l,u,h){Eh(t,i);var T=(i.flags&128)!==0;if(!l&&!T)return u&&bf(i,a,!1),Mi(t,i,h);l=i.stateNode,m0.current=i;var U=T&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&T?(i.child=ls(i,t.child,null,h),i.child=ls(i,null,U,h)):hn(t,i,U,h),i.memoizedState=l.state,u&&bf(i,a,!0),i.child}function wh(t){var i=t.stateNode;i.pendingContext?Cf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Cf(t,i.context,!1),Mc(t,i.containerInfo)}function Ah(t,i,a,l,u){return os(),mc(u),i.flags|=256,hn(t,i,a,l),i.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ch(t,i,a){var l=i.pendingProps,u=kt.current,h=!1,T=(i.flags&128)!==0,U;if((U=T)||(U=t!==null&&t.memoizedState===null?!1:(u&2)!==0),U?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Nt(kt,u&1),t===null)return pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=l.children,t=l.fallback,h?(l=i.mode,h=i.child,T={mode:"hidden",children:T},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=T):h=Oo(T,l,0,null),t=Lr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Hc(a),i.memoizedState=Bc,t):Vc(i,T));if(u=t.memoizedState,u!==null&&(U=u.dehydrated,U!==null))return g0(t,i,T,l,U,u,a);if(h){h=l.fallback,T=i.mode,u=t.child,U=u.sibling;var z={mode:"hidden",children:l.children};return(T&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=sr(u,z),l.subtreeFlags=u.subtreeFlags&14680064),U!==null?h=sr(U,h):(h=Lr(h,T,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,T=t.child.memoizedState,T=T===null?Hc(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},h.memoizedState=T,h.childLanes=t.childLanes&~a,i.memoizedState=Bc,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Vc(t,i){return i=Oo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function To(t,i,a,l){return l!==null&&mc(l),ls(i,t.child,null,a),t=Vc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function g0(t,i,a,l,u,h,T){if(a)return i.flags&256?(i.flags&=-257,l=Fc(Error(n(422))),To(t,i,T,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Oo({mode:"visible",children:l.children},u,0,null),h=Lr(h,u,T,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ls(i,t.child,null,T),i.child.memoizedState=Hc(T),i.memoizedState=Bc,h);if((i.mode&1)===0)return To(t,i,T,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var U=l.dgst;return l=U,h=Error(n(419)),l=Fc(h,l,void 0),To(t,i,T,l)}if(U=(T&t.childLanes)!==0,_n||U){if(l=en,l!==null){switch(T&-T){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|T))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,yi(t,u),Jn(l,t,u,-1))}return ru(),l=Fc(Error(n(421))),To(t,i,T,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=b0.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,In=qi(u.nextSibling),Dn=i,Ft=!0,$n=null,t!==null&&(kn[zn++]=xi,kn[zn++]=_i,kn[zn++]=Er,xi=t.id,_i=t.overflow,Er=i),i=Vc(i,l.children),i.flags|=4096,i)}function Rh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),_c(t.return,i,a)}function Gc(t,i,a,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=u)}function bh(t,i,a){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(hn(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rh(t,a,i);else if(t.tag===19)Rh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Nt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&vo(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Gc(i,!1,u,a,h);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&vo(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Gc(i,!0,a,null,h);break;case"together":Gc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function wo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Mi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Rr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function v0(t,i,a){switch(i.tag){case 3:wh(i),os();break;case 5:Gf(i);break;case 1:xn(i.type)&&ao(i);break;case 4:Mc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Nt(ho,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Nt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ch(t,i,a):(Nt(kt,kt.current&1),t=Mi(t,i,a),t!==null?t.sibling:null);Nt(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return bh(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Nt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Mh(t,i,a)}return Mi(t,i,a)}var Nh,jc,Ph,Lh;Nh=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},jc=function(){},Ph=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Ar(oi.current);var h=null;switch(a){case"input":u=Ge(t,u),l=Ge(t,l),h=[];break;case"select":u=se({},u,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":u=ee(t,u),l=ee(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=io)}ut(a,l);var T;a=null;for(J in u)if(!l.hasOwnProperty(J)&&u.hasOwnProperty(J)&&u[J]!=null)if(J==="style"){var U=u[J];for(T in U)U.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(o.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var z=l[J];if(U=u?.[J],l.hasOwnProperty(J)&&z!==U&&(z!=null||U!=null))if(J==="style")if(U){for(T in U)!U.hasOwnProperty(T)||z&&z.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in z)z.hasOwnProperty(T)&&U[T]!==z[T]&&(a||(a={}),a[T]=z[T])}else a||(h||(h=[]),h.push(J,a)),a=z;else J==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(h=h||[]).push(J,z)):J==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(J,""+z):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(o.hasOwnProperty(J)?(z!=null&&J==="onScroll"&&Lt("scroll",t),h||U===z||(h=[])):(h=h||[]).push(J,z))}a&&(h=h||[]).push("style",a);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},Lh=function(t,i,a,l){a!==l&&(i.flags|=4)};function xa(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function x0(t,i,a){var l=i.pendingProps;switch(fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return xn(i.type)&&so(),cn(i),null;case 3:return l=i.stateNode,ds(),Dt(vn),Dt(on),wc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(uo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$n!==null&&(tu($n),$n=null))),jc(t,i),cn(i),null;case 5:Ec(i);var u=Ar(ha.current);if(a=i.type,t!==null&&i.stateNode!=null)Ph(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Ar(oi.current),uo(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[ai]=i,l[la]=h,t=(i.mode&1)!==0,a){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(u=0;u<sa.length;u++)Lt(sa[u],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":Ye(l,h),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Lt("invalid",l);break;case"textarea":ge(l,h),Lt("invalid",l)}ut(a,h),u=null;for(var T in h)if(h.hasOwnProperty(T)){var U=h[T];T==="children"?typeof U=="string"?l.textContent!==U&&(h.suppressHydrationWarning!==!0&&no(l.textContent,U,t),u=["children",U]):typeof U=="number"&&l.textContent!==""+U&&(h.suppressHydrationWarning!==!0&&no(l.textContent,U,t),u=["children",""+U]):o.hasOwnProperty(T)&&U!=null&&T==="onScroll"&&Lt("scroll",l)}switch(a){case"input":xe(l),et(l,h,!0);break;case"textarea":xe(l),pe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=io)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{T=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ke(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=T.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=T.createElement(a,{is:l.is}):(t=T.createElement(a),a==="select"&&(T=t,l.multiple?T.multiple=!0:l.size&&(T.size=l.size))):t=T.createElementNS(t,a),t[ai]=i,t[la]=l,Nh(t,i,!1,!1),i.stateNode=t;e:{switch(T=Rt(a,l),a){case"dialog":Lt("cancel",t),Lt("close",t),u=l;break;case"iframe":case"object":case"embed":Lt("load",t),u=l;break;case"video":case"audio":for(u=0;u<sa.length;u++)Lt(sa[u],t);u=l;break;case"source":Lt("error",t),u=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),u=l;break;case"details":Lt("toggle",t),u=l;break;case"input":Ye(t,l),u=Ge(t,l),Lt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=se({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":ge(t,l),u=ee(t,l),Lt("invalid",t);break;default:u=l}ut(a,u),U=u;for(h in U)if(U.hasOwnProperty(h)){var z=U[h];h==="style"?Be(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ct(t,z)):h==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Ee(t,z):typeof z=="number"&&Ee(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Lt("scroll",t):z!=null&&N(t,h,z,T))}switch(a){case"input":xe(t),et(t,l,!1);break;case"textarea":xe(t),pe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+be(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?C(t,!!l.multiple,h,!1):l.defaultValue!=null&&C(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=io)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)Lh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Ar(ha.current),Ar(oi.current),uo(i)){if(l=i.stateNode,a=i.memoizedProps,l[ai]=i,(h=l.nodeValue!==a)&&(t=Dn,t!==null))switch(t.tag){case 3:no(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[ai]=i,i.stateNode=l}return cn(i),null;case 13:if(Dt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uf(),os(),i.flags|=98560,h=!1;else if(h=uo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ai]=i}else os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else $n!==null&&(tu($n),$n=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Yt===0&&(Yt=3):ru())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return ds(),jc(t,i),t===null&&aa(i.stateNode.containerInfo),cn(i),null;case 10:return xc(i.type._context),cn(i),null;case 17:return xn(i.type)&&so(),cn(i),null;case 19:if(Dt(kt),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,T=h.rendering,T===null)if(l)xa(h,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(T=vo(t),T!==null){for(i.flags|=128,xa(h,!1),l=T.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,T=h.alternate,T===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=T.childLanes,h.lanes=T.lanes,h.child=T.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=T.memoizedProps,h.memoizedState=T.memoizedState,h.updateQueue=T.updateQueue,h.type=T.type,t=T.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Nt(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Re()>ms&&(i.flags|=128,l=!0,xa(h,!1),i.lanes=4194304)}else{if(!l)if(t=vo(T),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),xa(h,!0),h.tail===null&&h.tailMode==="hidden"&&!T.alternate&&!Ft)return cn(i),null}else 2*Re()-h.renderingStartTime>ms&&a!==1073741824&&(i.flags|=128,l=!0,xa(h,!1),i.lanes=4194304);h.isBackwards?(T.sibling=i.child,i.child=T):(a=h.last,a!==null?a.sibling=T:i.child=T,h.last=T)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Re(),i.sibling=null,a=kt.current,Nt(kt,l?a&1|2:a&1),i):(cn(i),null);case 22:case 23:return iu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function _0(t,i){switch(fc(i),i.tag){case 1:return xn(i.type)&&so(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),Dt(vn),Dt(on),wc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ec(i),null;case 13:if(Dt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));os()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(kt),null;case 4:return ds(),null;case 10:return xc(i.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var Ao=!1,un=!1,y0=typeof WeakSet=="function"?WeakSet:Set,He=null;function hs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Bt(t,i,l)}else a.current=null}function Wc(t,i,a){try{a()}catch(l){Bt(t,i,l)}}var Dh=!1;function S0(t,i){if(ic=Wa,t=df(),$l(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var T=0,U=-1,z=-1,J=0,ve=0,Se=t,me=null;t:for(;;){for(var Fe;Se!==a||u!==0&&Se.nodeType!==3||(U=T+u),Se!==h||l!==0&&Se.nodeType!==3||(z=T+l),Se.nodeType===3&&(T+=Se.nodeValue.length),(Fe=Se.firstChild)!==null;)me=Se,Se=Fe;for(;;){if(Se===t)break t;if(me===a&&++J===u&&(U=T),me===h&&++ve===l&&(z=T),(Fe=Se.nextSibling)!==null)break;Se=me,me=Se.parentNode}Se=Fe}a=U===-1||z===-1?null:{start:U,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(rc={focusedElem:t,selectionRange:a},Wa=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var We=Ve.memoizedProps,Ht=Ve.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?We:Kn(i.type,We),Ht);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Bt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return Ve=Dh,Dh=!1,Ve}function _a(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&Wc(i,a,h)}u=u.next}while(u!==l)}}function Co(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Xc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Ih(t){var i=t.alternate;i!==null&&(t.alternate=null,Ih(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ai],delete i[la],delete i[lc],delete i[i0],delete i[r0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uh(t){return t.tag===5||t.tag===3||t.tag===4}function Fh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=io));else if(l!==4&&(t=t.child,t!==null))for(Yc(t,i,a),t=t.sibling;t!==null;)Yc(t,i,a),t=t.sibling}function qc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(qc(t,i,a),t=t.sibling;t!==null;)qc(t,i,a),t=t.sibling}var sn=null,Zn=!1;function er(t,i,a){for(a=a.child;a!==null;)Oh(t,i,a),a=a.sibling}function Oh(t,i,a){if(dt&&typeof dt.onCommitFiberUnmount=="function")try{dt.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 5:un||hs(a,i);case 6:var l=sn,u=Zn;sn=null,er(t,i,a),sn=l,Zn=u,sn!==null&&(Zn?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(Zn?(t=sn,a=a.stateNode,t.nodeType===8?oc(t.parentNode,a):t.nodeType===1&&oc(t,a),Zs(t)):oc(sn,a.stateNode));break;case 4:l=sn,u=Zn,sn=a.stateNode.containerInfo,Zn=!0,er(t,i,a),sn=l,Zn=u;break;case 0:case 11:case 14:case 15:if(!un&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,T=h.destroy;h=h.tag,T!==void 0&&((h&2)!==0||(h&4)!==0)&&Wc(a,i,T),u=u.next}while(u!==l)}er(t,i,a);break;case 1:if(!un&&(hs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(U){Bt(a,i,U)}er(t,i,a);break;case 21:er(t,i,a);break;case 22:a.mode&1?(un=(l=un)||a.memoizedState!==null,er(t,i,a),un=l):er(t,i,a);break;default:er(t,i,a)}}function kh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new y0),i.forEach(function(l){var u=N0.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function Qn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var h=t,T=i,U=T;e:for(;U!==null;){switch(U.tag){case 5:sn=U.stateNode,Zn=!1;break e;case 3:sn=U.stateNode.containerInfo,Zn=!0;break e;case 4:sn=U.stateNode.containerInfo,Zn=!0;break e}U=U.return}if(sn===null)throw Error(n(160));Oh(h,T,u),sn=null,Zn=!1;var z=u.alternate;z!==null&&(z.return=null),u.return=null}catch(J){Bt(u,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zh(i,t),i=i.sibling}function zh(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(i,t),ci(t),l&4){try{_a(3,t,t.return),Co(3,t)}catch(We){Bt(t,t.return,We)}try{_a(5,t,t.return)}catch(We){Bt(t,t.return,We)}}break;case 1:Qn(i,t),ci(t),l&512&&a!==null&&hs(a,a.return);break;case 5:if(Qn(i,t),ci(t),l&512&&a!==null&&hs(a,a.return),t.flags&32){var u=t.stateNode;try{Ee(u,"")}catch(We){Bt(t,t.return,We)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,T=a!==null?a.memoizedProps:h,U=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{U==="input"&&h.type==="radio"&&h.name!=null&&ze(u,h),Rt(U,T);var J=Rt(U,h);for(T=0;T<z.length;T+=2){var ve=z[T],Se=z[T+1];ve==="style"?Be(u,Se):ve==="dangerouslySetInnerHTML"?ct(u,Se):ve==="children"?Ee(u,Se):N(u,ve,Se,J)}switch(U){case"input":yt(u,h);break;case"textarea":ye(u,h);break;case"select":var me=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Fe=h.value;Fe!=null?C(u,!!h.multiple,Fe,!1):me!==!!h.multiple&&(h.defaultValue!=null?C(u,!!h.multiple,h.defaultValue,!0):C(u,!!h.multiple,h.multiple?[]:"",!1))}u[la]=h}catch(We){Bt(t,t.return,We)}}break;case 6:if(Qn(i,t),ci(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(We){Bt(t,t.return,We)}}break;case 3:if(Qn(i,t),ci(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(We){Bt(t,t.return,We)}break;case 4:Qn(i,t),ci(t);break;case 13:Qn(i,t),ci(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Zc=Re())),l&4&&kh(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(un=(J=un)||ve,Qn(i,t),un=J):Qn(i,t),ci(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!ve&&(t.mode&1)!==0)for(He=t,ve=t.child;ve!==null;){for(Se=He=ve;He!==null;){switch(me=He,Fe=me.child,me.tag){case 0:case 11:case 14:case 15:_a(4,me,me.return);break;case 1:hs(me,me.return);var Ve=me.stateNode;if(typeof Ve.componentWillUnmount=="function"){l=me,a=me.return;try{i=l,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(We){Bt(l,a,We)}}break;case 5:hs(me,me.return);break;case 22:if(me.memoizedState!==null){Vh(Se);continue}}Fe!==null?(Fe.return=me,He=Fe):Vh(Se)}ve=ve.sibling}e:for(ve=null,Se=t;;){if(Se.tag===5){if(ve===null){ve=Se;try{u=Se.stateNode,J?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(U=Se.stateNode,z=Se.memoizedProps.style,T=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=rt("display",T))}catch(We){Bt(t,t.return,We)}}}else if(Se.tag===6){if(ve===null)try{Se.stateNode.nodeValue=J?"":Se.memoizedProps}catch(We){Bt(t,t.return,We)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ve===Se&&(ve=null),Se=Se.return}ve===Se&&(ve=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Qn(i,t),ci(t),l&4&&kh(t);break;case 21:break;default:Qn(i,t),ci(t)}}function ci(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Uh(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Ee(u,""),l.flags&=-33);var h=Fh(t);qc(t,h,u);break;case 3:case 4:var T=l.stateNode.containerInfo,U=Fh(t);Yc(t,U,T);break;default:throw Error(n(161))}}catch(z){Bt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function M0(t,i,a){He=t,Bh(t)}function Bh(t,i,a){for(var l=(t.mode&1)!==0;He!==null;){var u=He,h=u.child;if(u.tag===22&&l){var T=u.memoizedState!==null||Ao;if(!T){var U=u.alternate,z=U!==null&&U.memoizedState!==null||un;U=Ao;var J=un;if(Ao=T,(un=z)&&!J)for(He=u;He!==null;)T=He,z=T.child,T.tag===22&&T.memoizedState!==null?Gh(u):z!==null?(z.return=T,He=z):Gh(u);for(;h!==null;)He=h,Bh(h),h=h.sibling;He=u,Ao=U,un=J}Hh(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,He=h):Hh(t)}}function Hh(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Co(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:Kn(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Vf(i,h,l);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Vf(i,T,a)}break;case 5:var U=i.stateNode;if(a===null&&i.flags&4){a=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ve=J.memoizedState;if(ve!==null){var Se=ve.dehydrated;Se!==null&&Zs(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Xc(i)}catch(me){Bt(i,i.return,me)}}if(i===t){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function Vh(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function Gh(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Co(4,i)}catch(z){Bt(i,a,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(z){Bt(i,u,z)}}var h=i.return;try{Xc(i)}catch(z){Bt(i,h,z)}break;case 5:var T=i.return;try{Xc(i)}catch(z){Bt(i,T,z)}}}catch(z){Bt(i,i.return,z)}if(i===t){He=null;break}var U=i.sibling;if(U!==null){U.return=i.return,He=U;break}He=i.return}}var E0=Math.ceil,Ro=P.ReactCurrentDispatcher,$c=P.ReactCurrentOwner,Vn=P.ReactCurrentBatchConfig,_t=0,en=null,Gt=null,an=0,Un=0,ps=$i(0),Yt=0,ya=null,Rr=0,bo=0,Kc=0,Sa=null,yn=null,Zc=0,ms=1/0,Ei=null,No=!1,Qc=null,tr=null,Po=!1,nr=null,Lo=0,Ma=0,Jc=null,Do=-1,Io=0;function pn(){return(_t&6)!==0?Re():Do!==-1?Do:Do=Re()}function ir(t){return(t.mode&1)===0?1:(_t&2)!==0&&an!==0?an&-an:a0.transition!==null?(Io===0&&(Io=Va()),Io):(t=wt,t!==0||(t=window.event,t=t===void 0?16:jd(t.type)),t)}function Jn(t,i,a,l){if(50<Ma)throw Ma=0,Jc=null,Error(n(185));Xs(t,a,l),((_t&2)===0||t!==en)&&(t===en&&((_t&2)===0&&(bo|=a),Yt===4&&rr(t,an)),Sn(t,l),a===1&&_t===0&&(i.mode&1)===0&&(ms=Re()+500,oo&&Zi()))}function Sn(t,i){var a=t.callbackNode;gn(t,i);var l=Pn(t,t===en?an:0);if(l===0)a!==null&&Ce(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&Ce(a),i===1)t.tag===0?s0(Wh.bind(null,t)):Nf(Wh.bind(null,t)),t0(function(){(_t&6)===0&&Zi()}),a=null;else{switch(Fd(l)){case 1:a=nt;break;case 4:a=Ze;break;case 16:a=vt;break;case 536870912:a=Pt;break;default:a=vt}a=Jh(a,jh.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function jh(t,i){if(Do=-1,Io=0,(_t&6)!==0)throw Error(n(327));var a=t.callbackNode;if(gs()&&t.callbackNode!==a)return null;var l=Pn(t,t===en?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Uo(t,l);else{i=l;var u=_t;_t|=2;var h=Yh();(en!==t||an!==i)&&(Ei=null,ms=Re()+500,Nr(t,i));do try{A0();break}catch(U){Xh(t,U)}while(!0);vc(),Ro.current=h,_t=u,Gt!==null?i=0:(en=null,an=0,i=Yt)}if(i!==0){if(i===2&&(u=yr(t),u!==0&&(l=u,i=eu(t,u))),i===1)throw a=ya,Nr(t,0),rr(t,l),Sn(t,Re()),a;if(i===6)rr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!T0(u)&&(i=Uo(t,l),i===2&&(h=yr(t),h!==0&&(l=h,i=eu(t,h))),i===1))throw a=ya,Nr(t,0),rr(t,l),Sn(t,Re()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Pr(t,yn,Ei);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=Zc+500-Re(),10<i)){if(Pn(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){pn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=ac(Pr.bind(null,t,yn,Ei),i);break}Pr(t,yn,Ei);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var T=31-Tt(l);h=1<<T,T=i[T],T>u&&(u=T),l&=~h}if(l=u,l=Re()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*E0(l/1960))-l,10<l){t.timeoutHandle=ac(Pr.bind(null,t,yn,Ei),l);break}Pr(t,yn,Ei);break;case 5:Pr(t,yn,Ei);break;default:throw Error(n(329))}}}return Sn(t,Re()),t.callbackNode===a?jh.bind(null,t):null}function eu(t,i){var a=Sa;return t.current.memoizedState.isDehydrated&&(Nr(t,i).flags|=256),t=Uo(t,i),t!==2&&(i=yn,yn=a,i!==null&&tu(i)),t}function tu(t){yn===null?yn=t:yn.push.apply(yn,t)}function T0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],h=u.getSnapshot;u=u.value;try{if(!qn(h(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~Kc,i&=~bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Tt(i),l=1<<a;t[a]=-1,i&=~l}}function Wh(t){if((_t&6)!==0)throw Error(n(327));gs();var i=Pn(t,0);if((i&1)===0)return Sn(t,Re()),null;var a=Uo(t,i);if(t.tag!==0&&a===2){var l=yr(t);l!==0&&(i=l,a=eu(t,l))}if(a===1)throw a=ya,Nr(t,0),rr(t,i),Sn(t,Re()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Pr(t,yn,Ei),Sn(t,Re()),null}function nu(t,i){var a=_t;_t|=1;try{return t(i)}finally{_t=a,_t===0&&(ms=Re()+500,oo&&Zi())}}function br(t){nr!==null&&nr.tag===0&&(_t&6)===0&&gs();var i=_t;_t|=1;var a=Vn.transition,l=wt;try{if(Vn.transition=null,wt=1,t)return t()}finally{wt=l,Vn.transition=a,_t=i,(_t&6)===0&&Zi()}}function iu(){Un=ps.current,Dt(ps)}function Nr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,e0(a)),Gt!==null)for(a=Gt.return;a!==null;){var l=a;switch(fc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&so();break;case 3:ds(),Dt(vn),Dt(on),wc();break;case 5:Ec(l);break;case 4:ds();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:xc(l.type._context);break;case 22:case 23:iu()}a=a.return}if(en=t,Gt=t=sr(t.current,null),an=Un=i,Yt=0,ya=null,Kc=bo=Rr=0,yn=Sa=null,wr!==null){for(i=0;i<wr.length;i++)if(a=wr[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,h=a.pending;if(h!==null){var T=h.next;h.next=u,l.next=T}a.pending=l}wr=null}return t}function Xh(t,i){do{var a=Gt;try{if(vc(),xo.current=Mo,_o){for(var l=zt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}_o=!1}if(Cr=0,Jt=Xt=zt=null,pa=!1,ma=0,$c.current=null,a===null||a.return===null){Yt=1,ya=i,Gt=null;break}e:{var h=t,T=a.return,U=a,z=i;if(i=an,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var J=z,ve=U,Se=ve.tag;if((ve.mode&1)===0&&(Se===0||Se===11||Se===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Fe=vh(T);if(Fe!==null){Fe.flags&=-257,xh(Fe,T,U,h,i),Fe.mode&1&&gh(h,J,i),i=Fe,z=J;var Ve=i.updateQueue;if(Ve===null){var We=new Set;We.add(z),i.updateQueue=We}else Ve.add(z);break e}else{if((i&1)===0){gh(h,J,i),ru();break e}z=Error(n(426))}}else if(Ft&&U.mode&1){var Ht=vh(T);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),xh(Ht,T,U,h,i),mc(fs(z,U));break e}}h=z=fs(z,U),Yt!==4&&(Yt=2),Sa===null?Sa=[h]:Sa.push(h),h=T;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=ph(h,z,i);Hf(h,q);break e;case 1:U=z;var V=h.type,$=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(tr===null||!tr.has($)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=mh(h,U,i);Hf(h,Te);break e}}h=h.return}while(h!==null)}$h(a)}catch(Xe){i=Xe,Gt===a&&a!==null&&(Gt=a=a.return);continue}break}while(!0)}function Yh(){var t=Ro.current;return Ro.current=Mo,t===null?Mo:t}function ru(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||(Rr&268435455)===0&&(bo&268435455)===0||rr(en,an)}function Uo(t,i){var a=_t;_t|=2;var l=Yh();(en!==t||an!==i)&&(Ei=null,Nr(t,i));do try{w0();break}catch(u){Xh(t,u)}while(!0);if(vc(),_t=a,Ro.current=l,Gt!==null)throw Error(n(261));return en=null,an=0,Yt}function w0(){for(;Gt!==null;)qh(Gt)}function A0(){for(;Gt!==null&&!Ue();)qh(Gt)}function qh(t){var i=Qh(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?$h(t):Gt=i,$c.current=null}function $h(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=x0(a,i,Un),a!==null){Gt=a;return}}else{if(a=_0(a,i),a!==null){a.flags&=32767,Gt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Pr(t,i,a){var l=wt,u=Vn.transition;try{Vn.transition=null,wt=1,C0(t,i,a,l)}finally{Vn.transition=u,wt=l}return null}function C0(t,i,a,l){do gs();while(nr!==null);if((_t&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(og(t,h),t===en&&(Gt=en=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Po||(Po=!0,Jh(vt,function(){return gs(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Vn.transition,Vn.transition=null;var T=wt;wt=1;var U=_t;_t|=4,$c.current=null,S0(t,a),zh(a,t),Yg(rc),Wa=!!ic,rc=ic=null,t.current=a,M0(a),je(),_t=U,wt=T,Vn.transition=h}else t.current=a;if(Po&&(Po=!1,nr=t,Lo=u),h=t.pendingLanes,h===0&&(tr=null),qe(a.stateNode),Sn(t,Re()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(No)throw No=!1,t=Qc,Qc=null,t;return(Lo&1)!==0&&t.tag!==0&&gs(),h=t.pendingLanes,(h&1)!==0?t===Jc?Ma++:(Ma=0,Jc=t):Ma=0,Zi(),null}function gs(){if(nr!==null){var t=Fd(Lo),i=Vn.transition,a=wt;try{if(Vn.transition=null,wt=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Lo=0,(_t&6)!==0)throw Error(n(331));var u=_t;for(_t|=4,He=t.current;He!==null;){var h=He,T=h.child;if((He.flags&16)!==0){var U=h.deletions;if(U!==null){for(var z=0;z<U.length;z++){var J=U[z];for(He=J;He!==null;){var ve=He;switch(ve.tag){case 0:case 11:case 15:_a(8,ve,h)}var Se=ve.child;if(Se!==null)Se.return=ve,He=Se;else for(;He!==null;){ve=He;var me=ve.sibling,Fe=ve.return;if(Ih(ve),ve===J){He=null;break}if(me!==null){me.return=Fe,He=me;break}He=Fe}}}var Ve=h.alternate;if(Ve!==null){var We=Ve.child;if(We!==null){Ve.child=null;do{var Ht=We.sibling;We.sibling=null,We=Ht}while(We!==null)}}He=h}}if((h.subtreeFlags&2064)!==0&&T!==null)T.return=h,He=T;else e:for(;He!==null;){if(h=He,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:_a(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,He=q;break e}He=h.return}}var V=t.current;for(He=V;He!==null;){T=He;var $=T.child;if((T.subtreeFlags&2064)!==0&&$!==null)$.return=T,He=$;else e:for(T=V;He!==null;){if(U=He,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:Co(9,U)}}catch(Xe){Bt(U,U.return,Xe)}if(U===T){He=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,He=Te;break e}He=U.return}}if(_t=u,Zi(),dt&&typeof dt.onPostCommitFiberRoot=="function")try{dt.onPostCommitFiberRoot(Zt,t)}catch{}l=!0}return l}finally{wt=a,Vn.transition=i}}return!1}function Kh(t,i,a){i=fs(a,i),i=ph(t,i,1),t=Ji(t,i,1),i=pn(),t!==null&&(Xs(t,1,i),Sn(t,i))}function Bt(t,i,a){if(t.tag===3)Kh(t,t,a);else for(;i!==null;){if(i.tag===3){Kh(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=fs(a,t),t=mh(i,t,1),i=Ji(i,t,1),t=pn(),i!==null&&(Xs(i,1,t),Sn(i,t));break}}i=i.return}}function R0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=pn(),t.pingedLanes|=t.suspendedLanes&a,en===t&&(an&a)===a&&(Yt===4||Yt===3&&(an&130023424)===an&&500>Re()-Zc?Nr(t,0):Kc|=a),Sn(t,i)}function Zh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Hi,Hi<<=1,(Hi&130023424)===0&&(Hi=4194304)));var a=pn();t=yi(t,i),t!==null&&(Xs(t,i,a),Sn(t,a))}function b0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Zh(t,a)}function N0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Zh(t,a)}var Qh;Qh=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||vn.current)_n=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return _n=!1,v0(t,i,a);_n=(t.flags&131072)!==0}else _n=!1,Ft&&(i.flags&1048576)!==0&&Pf(i,co,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;wo(t,i),t=i.pendingProps;var u=rs(i,on.current);us(i,a),u=Rc(null,i,l,t,u,a);var h=bc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,xn(l)?(h=!0,ao(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Sc(i),u.updater=Eo,i.stateNode=u,u._reactInternals=i,Uc(i,l,t,a),i=zc(null,i,l,!0,h,a)):(i.tag=0,Ft&&h&&dc(i),hn(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(wo(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=L0(l),t=Kn(l,t),u){case 0:i=kc(null,i,l,t,a);break e;case 1:i=Th(null,i,l,t,a);break e;case 11:i=_h(null,i,l,t,a);break e;case 14:i=yh(null,i,l,Kn(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Kn(l,u),kc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Kn(l,u),Th(t,i,l,u,a);case 3:e:{if(wh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,Bf(t,i),go(i,l,null,a);var T=i.memoizedState;if(l=T.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=fs(Error(n(423)),i),i=Ah(t,i,l,a,u);break e}else if(l!==u){u=fs(Error(n(424)),i),i=Ah(t,i,l,a,u);break e}else for(In=qi(i.stateNode.containerInfo.firstChild),Dn=i,Ft=!0,$n=null,a=kf(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(os(),l===u){i=Mi(t,i,a);break e}hn(t,i,l,a)}i=i.child}return i;case 5:return Gf(i),t===null&&pc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,T=u.children,sc(l,u)?T=null:h!==null&&sc(l,h)&&(i.flags|=32),Eh(t,i),hn(t,i,T,a),i.child;case 6:return t===null&&pc(i),null;case 13:return Ch(t,i,a);case 4:return Mc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ls(i,null,l,a):hn(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Kn(l,u),_h(t,i,l,u,a);case 7:return hn(t,i,i.pendingProps,a),i.child;case 8:return hn(t,i,i.pendingProps.children,a),i.child;case 12:return hn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,T=u.value,Nt(ho,l._currentValue),l._currentValue=T,h!==null)if(qn(h.value,T)){if(h.children===u.children&&!vn.current){i=Mi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var U=h.dependencies;if(U!==null){T=h.child;for(var z=U.firstContext;z!==null;){if(z.context===l){if(h.tag===1){z=Si(-1,a&-a),z.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var ve=J.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),J.pending=z}}h.lanes|=a,z=h.alternate,z!==null&&(z.lanes|=a),_c(h.return,a,i),U.lanes|=a;break}z=z.next}}else if(h.tag===10)T=h.type===i.type?null:h.child;else if(h.tag===18){if(T=h.return,T===null)throw Error(n(341));T.lanes|=a,U=T.alternate,U!==null&&(U.lanes|=a),_c(T,a,i),T=h.sibling}else T=h.child;if(T!==null)T.return=h;else for(T=h;T!==null;){if(T===i){T=null;break}if(h=T.sibling,h!==null){h.return=T.return,T=h;break}T=T.return}h=T}hn(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,us(i,a),u=Bn(u),l=l(u),i.flags|=1,hn(t,i,l,a),i.child;case 14:return l=i.type,u=Kn(l,i.pendingProps),u=Kn(l.type,u),yh(t,i,l,u,a);case 15:return Sh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Kn(l,u),wo(t,i),i.tag=1,xn(l)?(t=!0,ao(i)):t=!1,us(i,a),fh(i,l,u),Uc(i,l,u,a),zc(null,i,l,!0,t,a);case 19:return bh(t,i,a);case 22:return Mh(t,i,a)}throw Error(n(156,i.tag))};function Jh(t,i){return X(t,i)}function P0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,a,l){return new P0(t,i,a,l)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function L0(t){if(typeof t=="function")return su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===re)return 11;if(t===ue)return 14}return 2}function sr(t,i){var a=t.alternate;return a===null?(a=Gn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Fo(t,i,a,l,u,h){var T=2;if(l=t,typeof t=="function")su(t)&&(T=1);else if(typeof t=="string")T=5;else e:switch(t){case k:return Lr(a.children,u,h,i);case Y:T=8,u|=8;break;case R:return t=Gn(12,a,i,u|2),t.elementType=R,t.lanes=h,t;case Z:return t=Gn(13,a,i,u),t.elementType=Z,t.lanes=h,t;case de:return t=Gn(19,a,i,u),t.elementType=de,t.lanes=h,t;case ae:return Oo(a,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:T=10;break e;case B:T=9;break e;case re:T=11;break e;case ue:T=14;break e;case oe:T=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(T,a,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,a,l){return t=Gn(7,t,l,i),t.lanes=a,t}function Oo(t,i,a,l){return t=Gn(22,t,l,i),t.elementType=ae,t.lanes=a,t.stateNode={isHidden:!1},t}function au(t,i,a){return t=Gn(6,t,null,i),t.lanes=a,t}function ou(t,i,a){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function D0(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qr(0),this.expirationTimes=qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function lu(t,i,a,l,u,h,T,U,z){return t=new D0(t,i,a,U,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Gn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(h),t}function I0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function ep(t){if(!t)return Ki;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(xn(a))return Rf(t,a,i)}return i}function tp(t,i,a,l,u,h,T,U,z){return t=lu(a,l,!0,t,u,h,T,U,z),t.context=ep(null),a=t.current,l=pn(),u=ir(a),h=Si(l,u),h.callback=i??null,Ji(a,h,u),t.current.lanes=u,Xs(t,u,l),Sn(t,l),t}function ko(t,i,a,l){var u=i.current,h=pn(),T=ir(u);return a=ep(a),i.context===null?i.context=a:i.pendingContext=a,i=Si(h,T),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(u,i,T),t!==null&&(Jn(t,u,T,h),mo(t,u,T)),T}function zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function cu(t,i){np(t,i),(t=t.alternate)&&np(t,i)}function U0(){return null}var ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function uu(t){this._internalRoot=t}Bo.prototype.render=uu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ko(t,i,null,null)},Bo.prototype.unmount=uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){ko(null,t,null,null)}),i[gi]=null}};function Bo(t){this._internalRoot=t}Bo.prototype.unstable_scheduleHydration=function(t){if(t){var i=zd();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Wi.length&&i!==0&&i<Wi[a].priority;a++);Wi.splice(a,0,t),a===0&&Vd(t)}};function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ho(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rp(){}function F0(t,i,a,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var J=zo(T);h.call(J)}}var T=tp(i,l,t,0,null,!1,!1,"",rp);return t._reactRootContainer=T,t[gi]=T.current,aa(t.nodeType===8?t.parentNode:t),br(),T}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var U=l;l=function(){var J=zo(z);U.call(J)}}var z=lu(t,0,!1,null,null,!1,!1,"",rp);return t._reactRootContainer=z,t[gi]=z.current,aa(t.nodeType===8?t.parentNode:t),br(function(){ko(i,z,a,l)}),z}function Vo(t,i,a,l,u){var h=a._reactRootContainer;if(h){var T=h;if(typeof u=="function"){var U=u;u=function(){var z=zo(T);U.call(z)}}ko(i,T,t,u)}else T=F0(a,i,t,u,l);return zo(T)}Od=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=bt(i.pendingLanes);a!==0&&(Ul(i,a|1),Sn(i,Re()),(_t&6)===0&&(ms=Re()+500,Zi()))}break;case 13:br(function(){var l=yi(t,1);if(l!==null){var u=pn();Jn(l,t,1,u)}}),cu(t,1)}},Fl=function(t){if(t.tag===13){var i=yi(t,134217728);if(i!==null){var a=pn();Jn(i,t,134217728,a)}cu(t,134217728)}},kd=function(t){if(t.tag===13){var i=ir(t),a=yi(t,i);if(a!==null){var l=pn();Jn(a,t,i,l)}cu(t,i)}},zd=function(){return wt},Bd=function(t,i){var a=wt;try{return wt=t,i()}finally{wt=a}},fe=function(t,i,a){switch(i){case"input":if(yt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=ro(l);if(!u)throw Error(n(90));D(l),yt(l,u)}}}break;case"textarea":ye(t,a);break;case"select":i=a.value,i!=null&&C(t,!!a.multiple,i,!1)}},Vt=nu,xt=br;var O0={usingClientEntryPoint:!1,Events:[ca,ns,ro,gt,Ot,nu]},Ea={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k0={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Q(t),t===null?null:t.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Zt=Go.inject(k0),dt=Go}catch{}}return Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0,Mn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(i))throw Error(n(200));return I0(t,i,null,a)},Mn.createRoot=function(t,i){if(!du(t))throw Error(n(299));var a=!1,l="",u=ip;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=lu(t,1,!1,null,null,a,!1,l,u),t[gi]=i.current,aa(t.nodeType===8?t.parentNode:t),new uu(i)},Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Q(i),t=t===null?null:t.stateNode,t},Mn.flushSync=function(t){return br(t)},Mn.hydrate=function(t,i,a){if(!Ho(i))throw Error(n(200));return Vo(null,t,i,!0,a)},Mn.hydrateRoot=function(t,i,a){if(!du(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,h="",T=ip;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=tp(i,null,t,1,a??null,u,!1,h,T),t[gi]=i.current,aa(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new Bo(i)},Mn.render=function(t,i,a){if(!Ho(i))throw Error(n(200));return Vo(null,t,i,!1,a)},Mn.unmountComponentAtNode=function(t){if(!Ho(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Vo(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1},Mn.unstable_batchedUpdates=nu,Mn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Ho(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Vo(t,i,a,!1,l)},Mn.version="18.3.1-next-f1338f8080-20240426",Mn}var fp;function X0(){if(fp)return pu.exports;fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pu.exports=W0(),pu.exports}var hp;function Y0(){if(hp)return jo;hp=1;var s=X0();return jo.createRoot=s.createRoot,jo.hydrateRoot=s.hydrateRoot,jo}var q0=Y0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="166",$0=0,pp=1,K0=2,Am=1,Z0=2,bi=3,gr=0,wn=1,Ni=2,pr=0,Us=1,mp=2,gp=3,vp=4,Q0=5,Hr=100,J0=101,ev=102,tv=103,nv=104,iv=200,rv=201,sv=202,av=203,Wu=204,Xu=205,ov=206,lv=207,cv=208,uv=209,dv=210,fv=211,hv=212,pv=213,mv=214,gv=0,vv=1,xv=2,El=3,_v=4,yv=5,Sv=6,Mv=7,Cm=0,Ev=1,Tv=2,mr=0,wv=1,Av=2,Cv=3,Rv=4,bv=5,Nv=6,Pv=7,Rm=300,ks=301,zs=302,Yu=303,qu=304,bl=306,$u=1e3,Gr=1001,Ku=1002,Xn=1003,Lv=1004,Wo=1005,ii=1006,vu=1007,jr=1008,Ii=1009,bm=1010,Nm=1011,Pa=1012,Rd=1013,Xr=1014,Pi=1015,La=1016,bd=1017,Nd=1018,Bs=1020,Pm=35902,Lm=1021,Dm=1022,ri=1023,Im=1024,Um=1025,Fs=1026,Hs=1027,Fm=1028,Pd=1029,Om=1030,Ld=1031,Dd=1033,vl=33776,xl=33777,_l=33778,yl=33779,Zu=35840,Qu=35841,Ju=35842,ed=35843,td=36196,nd=37492,id=37496,rd=37808,sd=37809,ad=37810,od=37811,ld=37812,cd=37813,ud=37814,dd=37815,fd=37816,hd=37817,pd=37818,md=37819,gd=37820,vd=37821,Sl=36492,xd=36494,_d=36495,km=36283,yd=36284,Sd=36285,Md=36286,Dv=3200,Iv=3201,Uv=0,Fv=1,hr="",ui="srgb",xr="srgb-linear",Id="display-p3",Nl="display-p3-linear",Tl="linear",It="srgb",wl="rec709",Al="p3",vs=7680,xp=519,Ov=512,kv=513,zv=514,zm=515,Bv=516,Hv=517,Vv=518,Gv=519,_p=35044,yp="300 es",Li=2e3,Cl=2001;class Gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xu=Math.PI/180,Ed=180/Math.PI;function Da(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function Tn(s,e,n){return Math.max(e,Math.min(n,s))}function jv(s,e){return(s%e+e)%e}function _u(s,e,n){return(1-n)*s+n*e}function wa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,n,r,o,c,d,f,p,m){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,m)}set(e,n,r,o,c,d,f,p,m){const S=this.elements;return S[0]=e,S[1]=o,S[2]=f,S[3]=n,S[4]=c,S[5]=p,S[6]=r,S[7]=d,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],S=r[4],y=r[7],_=r[2],M=r[5],E=r[8],w=o[0],v=o[3],x=o[6],L=o[1],N=o[4],P=o[7],W=o[2],I=o[5],k=o[8];return c[0]=d*w+f*L+p*W,c[3]=d*v+f*N+p*I,c[6]=d*x+f*P+p*k,c[1]=m*w+S*L+y*W,c[4]=m*v+S*N+y*I,c[7]=m*x+S*P+y*k,c[2]=_*w+M*L+E*W,c[5]=_*v+M*N+E*I,c[8]=_*x+M*P+E*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],S=e[8];return n*d*S-n*f*m-r*c*S+r*f*p+o*c*m-o*d*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],S=e[8],y=S*d-f*m,_=f*p-S*c,M=m*c-d*p,E=n*y+r*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=y*w,e[1]=(o*m-S*r)*w,e[2]=(f*r-o*d)*w,e[3]=_*w,e[4]=(S*n-o*p)*w,e[5]=(o*c-f*n)*w,e[6]=M*w,e[7]=(r*p-m*n)*w,e[8]=(d*n-r*c)*w,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new ht;function Bm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wv(){const s=Rl("canvas");return s.style.display="block",s}const Sp={};function Hm(s){s in Sp||(Sp[s]=!0,console.warn(s))}function Xv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const Mp=new ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ep=new ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xo={[xr]:{transfer:Tl,primaries:wl,toReference:s=>s,fromReference:s=>s},[ui]:{transfer:It,primaries:wl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Nl]:{transfer:Tl,primaries:Al,toReference:s=>s.applyMatrix3(Ep),fromReference:s=>s.applyMatrix3(Mp)},[Id]:{transfer:It,primaries:Al,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ep),fromReference:s=>s.applyMatrix3(Mp).convertLinearToSRGB()}},Yv=new Set([xr,Nl]),At={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Yv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Xo[e].toReference,o=Xo[n].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Xo[s].primaries},getTransfer:function(s){return s===hr?Tl:Xo[s].transfer}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Su(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xs===void 0&&(xs=Rl("canvas")),xs.width=e.width,xs.height=e.height;const r=xs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=xs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=Os(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Os(n[r]/255)*255):n[r]=Os(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $v=0;class Vm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(Mu(o[d].image)):c.push(Mu(o[d]))}else c=Mu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Mu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class An extends Gs{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=Gr,o=Gr,c=ii,d=jr,f=ri,p=Ii,m=An.DEFAULT_ANISOTROPY,S=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Da(),this.name="",this.source=new Vm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $u:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $u:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Rm;An.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],S=p[4],y=p[8],_=p[1],M=p[5],E=p[9],w=p[2],v=p[6],x=p[10];if(Math.abs(S-_)<.01&&Math.abs(y-w)<.01&&Math.abs(E-v)<.01){if(Math.abs(S+_)<.1&&Math.abs(y+w)<.1&&Math.abs(E+v)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const N=(m+1)/2,P=(M+1)/2,W=(x+1)/2,I=(S+_)/4,k=(y+w)/4,Y=(E+v)/4;return N>P&&N>W?N<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(N),o=I/r,c=k/r):P>W?P<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(P),r=I/o,c=Y/o):W<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(W),r=k/c,o=Y/c),this.set(r,o,c,n),this}let L=Math.sqrt((v-E)*(v-E)+(y-w)*(y-w)+(_-S)*(_-S));return Math.abs(L)<.001&&(L=1),this.x=(v-E)/L,this.y=(y-w)/L,this.z=(_-S)/L,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zv extends Gs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new An(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Vm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends Zv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Gm extends An{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qv extends An{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let p=r[o+0],m=r[o+1],S=r[o+2],y=r[o+3];const _=c[d+0],M=c[d+1],E=c[d+2],w=c[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=S,e[n+3]=y;return}if(f===1){e[n+0]=_,e[n+1]=M,e[n+2]=E,e[n+3]=w;return}if(y!==w||p!==_||m!==M||S!==E){let v=1-f;const x=p*_+m*M+S*E+y*w,L=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const W=Math.sqrt(N),I=Math.atan2(W,x*L);v=Math.sin(v*I)/W,f=Math.sin(f*I)/W}const P=f*L;if(p=p*v+_*P,m=m*v+M*P,S=S*v+E*P,y=y*v+w*P,v===1-f){const W=1/Math.sqrt(p*p+m*m+S*S+y*y);p*=W,m*=W,S*=W,y*=W}}e[n]=p,e[n+1]=m,e[n+2]=S,e[n+3]=y}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],p=r[o+1],m=r[o+2],S=r[o+3],y=c[d],_=c[d+1],M=c[d+2],E=c[d+3];return e[n]=f*E+S*y+p*M-m*_,e[n+1]=p*E+S*_+m*y-f*M,e[n+2]=m*E+S*M+f*_-p*y,e[n+3]=S*E-f*y-p*_-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),S=f(o/2),y=f(c/2),_=p(r/2),M=p(o/2),E=p(c/2);switch(d){case"XYZ":this._x=_*S*y+m*M*E,this._y=m*M*y-_*S*E,this._z=m*S*E+_*M*y,this._w=m*S*y-_*M*E;break;case"YXZ":this._x=_*S*y+m*M*E,this._y=m*M*y-_*S*E,this._z=m*S*E-_*M*y,this._w=m*S*y+_*M*E;break;case"ZXY":this._x=_*S*y-m*M*E,this._y=m*M*y+_*S*E,this._z=m*S*E+_*M*y,this._w=m*S*y-_*M*E;break;case"ZYX":this._x=_*S*y-m*M*E,this._y=m*M*y+_*S*E,this._z=m*S*E-_*M*y,this._w=m*S*y+_*M*E;break;case"YZX":this._x=_*S*y+m*M*E,this._y=m*M*y+_*S*E,this._z=m*S*E-_*M*y,this._w=m*S*y-_*M*E;break;case"XZY":this._x=_*S*y-m*M*E,this._y=m*M*y-_*S*E,this._z=m*S*E+_*M*y,this._w=m*S*y+_*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],p=n[9],m=n[2],S=n[6],y=n[10],_=r+f+y;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(S-p)*M,this._y=(c-m)*M,this._z=(d-o)*M}else if(r>f&&r>y){const M=2*Math.sqrt(1+r-f-y);this._w=(S-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+m)/M}else if(f>y){const M=2*Math.sqrt(1+f-r-y);this._w=(c-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+S)/M}else{const M=2*Math.sqrt(1+y-r-f);this._w=(d-o)/M,this._x=(c+m)/M,this._y=(p+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,p=n._y,m=n._z,S=n._w;return this._x=r*S+d*f+o*m-c*p,this._y=o*S+d*p+c*f-r*m,this._z=c*S+d*m+r*p-o*f,this._w=d*S-r*f-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+o*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=o,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const M=1-n;return this._w=M*d+n*this._w,this._x=M*r+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),S=Math.atan2(m,f),y=Math.sin((1-n)*S)/m,_=Math.sin(n*S)/m;return this._w=d*y+this._w*_,this._x=r*y+this._x*_,this._y=o*y+this._y*_,this._z=c*y+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),S=2*(f*n-c*o),y=2*(c*r-d*n);return this.x=n+p*m+d*y-f*S,this.y=r+p*S+f*m-c*y,this.z=o+p*y+c*S-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new ie,Tp=new Ia;class Ua{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ei):ei.fromBufferAttribute(c,d),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yo.copy(r.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),qo.subVectors(this.max,Aa),_s.subVectors(e.a,Aa),ys.subVectors(e.b,Aa),Ss.subVectors(e.c,Aa),or.subVectors(ys,_s),lr.subVectors(Ss,ys),Dr.subVectors(_s,Ss);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Dr.z,Dr.y,or.z,0,-or.x,lr.z,0,-lr.x,Dr.z,0,-Dr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Dr.y,Dr.x,0];return!Tu(n,_s,ys,Ss,qo)||(n=[1,0,0,0,1,0,0,0,1],!Tu(n,_s,ys,Ss,qo))?!1:($o.crossVectors(or,lr),n=[$o.x,$o.y,$o.z],Tu(n,_s,ys,Ss,qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ti=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ei=new ie,Yo=new Ua,_s=new ie,ys=new ie,Ss=new ie,or=new ie,lr=new ie,Dr=new ie,Aa=new ie,qo=new ie,$o=new ie,Ir=new ie;function Tu(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){Ir.fromArray(s,c);const f=o.x*Math.abs(Ir.x)+o.y*Math.abs(Ir.y)+o.z*Math.abs(Ir.z),p=e.dot(Ir),m=n.dot(Ir),S=r.dot(Ir);if(Math.max(-Math.max(p,m,S),Math.min(p,m,S))>f)return!1}return!0}const Jv=new Ua,Ca=new ie,wu=new ie;class Pl{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Jv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const n=Ca.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ca,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(wu)),this.expandByPoint(Ca.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wi=new ie,Au=new ie,Ko=new ie,cr=new ie,Cu=new ie,Zo=new ie,Ru=new ie;class jm{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Au.copy(e).add(n).multiplyScalar(.5),Ko.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Au);const c=e.distanceTo(n)*.5,d=-this.direction.dot(Ko),f=cr.dot(this.direction),p=-cr.dot(Ko),m=cr.lengthSq(),S=Math.abs(1-d*d);let y,_,M,E;if(S>0)if(y=d*p-f,_=d*f-p,E=c*S,y>=0)if(_>=-E)if(_<=E){const w=1/S;y*=w,_*=w,M=y*(y+d*_+2*f)+_*(d*y+_+2*p)+m}else _=c,y=Math.max(0,-(d*_+f)),M=-y*y+_*(_+2*p)+m;else _=-c,y=Math.max(0,-(d*_+f)),M=-y*y+_*(_+2*p)+m;else _<=-E?(y=Math.max(0,-(-d*c+f)),_=y>0?-c:Math.min(Math.max(-c,-p),c),M=-y*y+_*(_+2*p)+m):_<=E?(y=0,_=Math.min(Math.max(-c,-p),c),M=_*(_+2*p)+m):(y=Math.max(0,-(d*c+f)),_=y>0?c:Math.min(Math.max(-c,-p),c),M=-y*y+_*(_+2*p)+m);else _=d>0?-c:c,y=Math.max(0,-(d*_+f)),M=-y*y+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(Au).addScaledVector(Ko,_),M}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const r=wi.dot(this.direction),o=wi.dot(wi)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,p;const m=1/this.direction.x,S=1/this.direction.y,y=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,o=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,o=(e.min.x-_.x)*m),S>=0?(c=(e.min.y-_.y)*S,d=(e.max.y-_.y)*S):(c=(e.max.y-_.y)*S,d=(e.min.y-_.y)*S),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),y>=0?(f=(e.min.z-_.z)*y,p=(e.max.z-_.z)*y):(f=(e.max.z-_.z)*y,p=(e.min.z-_.z)*y),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,r,o,c){Cu.subVectors(n,e),Zo.subVectors(r,e),Ru.crossVectors(Cu,Zo);let d=this.direction.dot(Ru),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;cr.subVectors(this.origin,e);const p=f*this.direction.dot(Zo.crossVectors(cr,Zo));if(p<0)return null;const m=f*this.direction.dot(Cu.cross(cr));if(m<0||p+m>d)return null;const S=-f*cr.dot(Ru);return S<0?null:this.at(S/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,n,r,o,c,d,f,p,m,S,y,_,M,E,w,v){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,m,S,y,_,M,E,w,v)}set(e,n,r,o,c,d,f,p,m,S,y,_,M,E,w,v){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=c,x[5]=d,x[9]=f,x[13]=p,x[2]=m,x[6]=S,x[10]=y,x[14]=_,x[3]=M,x[7]=E,x[11]=w,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ms.setFromMatrixColumn(e,0).length(),c=1/Ms.setFromMatrixColumn(e,1).length(),d=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),S=Math.cos(c),y=Math.sin(c);if(e.order==="XYZ"){const _=d*S,M=d*y,E=f*S,w=f*y;n[0]=p*S,n[4]=-p*y,n[8]=m,n[1]=M+E*m,n[5]=_-w*m,n[9]=-f*p,n[2]=w-_*m,n[6]=E+M*m,n[10]=d*p}else if(e.order==="YXZ"){const _=p*S,M=p*y,E=m*S,w=m*y;n[0]=_+w*f,n[4]=E*f-M,n[8]=d*m,n[1]=d*y,n[5]=d*S,n[9]=-f,n[2]=M*f-E,n[6]=w+_*f,n[10]=d*p}else if(e.order==="ZXY"){const _=p*S,M=p*y,E=m*S,w=m*y;n[0]=_-w*f,n[4]=-d*y,n[8]=E+M*f,n[1]=M+E*f,n[5]=d*S,n[9]=w-_*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const _=d*S,M=d*y,E=f*S,w=f*y;n[0]=p*S,n[4]=E*m-M,n[8]=_*m+w,n[1]=p*y,n[5]=w*m+_,n[9]=M*m-E,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const _=d*p,M=d*m,E=f*p,w=f*m;n[0]=p*S,n[4]=w-_*y,n[8]=E*y+M,n[1]=y,n[5]=d*S,n[9]=-f*S,n[2]=-m*S,n[6]=M*y+E,n[10]=_-w*y}else if(e.order==="XZY"){const _=d*p,M=d*m,E=f*p,w=f*m;n[0]=p*S,n[4]=-y,n[8]=m*S,n[1]=_*y+w,n[5]=d*S,n[9]=M*y-E,n[2]=E*y-M,n[6]=f*S,n[10]=w*y+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ex,e,tx)}lookAt(e,n,r){const o=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ur.crossVectors(r,Fn),ur.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ur.crossVectors(r,Fn)),ur.normalize(),Qo.crossVectors(Fn,ur),o[0]=ur.x,o[4]=Qo.x,o[8]=Fn.x,o[1]=ur.y,o[5]=Qo.y,o[9]=Fn.y,o[2]=ur.z,o[6]=Qo.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],S=r[1],y=r[5],_=r[9],M=r[13],E=r[2],w=r[6],v=r[10],x=r[14],L=r[3],N=r[7],P=r[11],W=r[15],I=o[0],k=o[4],Y=o[8],R=o[12],A=o[1],B=o[5],re=o[9],Z=o[13],de=o[2],ue=o[6],oe=o[10],ae=o[14],H=o[3],le=o[7],se=o[11],O=o[15];return c[0]=d*I+f*A+p*de+m*H,c[4]=d*k+f*B+p*ue+m*le,c[8]=d*Y+f*re+p*oe+m*se,c[12]=d*R+f*Z+p*ae+m*O,c[1]=S*I+y*A+_*de+M*H,c[5]=S*k+y*B+_*ue+M*le,c[9]=S*Y+y*re+_*oe+M*se,c[13]=S*R+y*Z+_*ae+M*O,c[2]=E*I+w*A+v*de+x*H,c[6]=E*k+w*B+v*ue+x*le,c[10]=E*Y+w*re+v*oe+x*se,c[14]=E*R+w*Z+v*ae+x*O,c[3]=L*I+N*A+P*de+W*H,c[7]=L*k+N*B+P*ue+W*le,c[11]=L*Y+N*re+P*oe+W*se,c[15]=L*R+N*Z+P*ae+W*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],S=e[2],y=e[6],_=e[10],M=e[14],E=e[3],w=e[7],v=e[11],x=e[15];return E*(+c*p*y-o*m*y-c*f*_+r*m*_+o*f*M-r*p*M)+w*(+n*p*M-n*m*_+c*d*_-o*d*M+o*m*S-c*p*S)+v*(+n*m*y-n*f*M-c*d*y+r*d*M+c*f*S-r*m*S)+x*(-o*f*S-n*p*y+n*f*_+o*d*y-r*d*_+r*p*S)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],S=e[8],y=e[9],_=e[10],M=e[11],E=e[12],w=e[13],v=e[14],x=e[15],L=y*v*m-w*_*m+w*p*M-f*v*M-y*p*x+f*_*x,N=E*_*m-S*v*m-E*p*M+d*v*M+S*p*x-d*_*x,P=S*w*m-E*y*m+E*f*M-d*w*M-S*f*x+d*y*x,W=E*y*p-S*w*p-E*f*_+d*w*_+S*f*v-d*y*v,I=n*L+r*N+o*P+c*W;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/I;return e[0]=L*k,e[1]=(w*_*c-y*v*c-w*o*M+r*v*M+y*o*x-r*_*x)*k,e[2]=(f*v*c-w*p*c+w*o*m-r*v*m-f*o*x+r*p*x)*k,e[3]=(y*p*c-f*_*c-y*o*m+r*_*m+f*o*M-r*p*M)*k,e[4]=N*k,e[5]=(S*v*c-E*_*c+E*o*M-n*v*M-S*o*x+n*_*x)*k,e[6]=(E*p*c-d*v*c-E*o*m+n*v*m+d*o*x-n*p*x)*k,e[7]=(d*_*c-S*p*c+S*o*m-n*_*m-d*o*M+n*p*M)*k,e[8]=P*k,e[9]=(E*y*c-S*w*c-E*r*M+n*w*M+S*r*x-n*y*x)*k,e[10]=(d*w*c-E*f*c+E*r*m-n*w*m-d*r*x+n*f*x)*k,e[11]=(S*f*c-d*y*c-S*r*m+n*y*m+d*r*M-n*f*M)*k,e[12]=W*k,e[13]=(S*w*o-E*y*o+E*r*_-n*w*_-S*r*v+n*y*v)*k,e[14]=(E*f*o-d*w*o-E*r*p+n*w*p+d*r*v-n*f*v)*k,e[15]=(d*y*o-S*f*o+S*r*p-n*y*p-d*r*_+n*f*_)*k,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,S=c*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,S*f+r,S*p-o*d,0,m*p-o*f,S*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,m=c+c,S=d+d,y=f+f,_=c*m,M=c*S,E=c*y,w=d*S,v=d*y,x=f*y,L=p*m,N=p*S,P=p*y,W=r.x,I=r.y,k=r.z;return o[0]=(1-(w+x))*W,o[1]=(M+P)*W,o[2]=(E-N)*W,o[3]=0,o[4]=(M-P)*I,o[5]=(1-(_+x))*I,o[6]=(v+L)*I,o[7]=0,o[8]=(E+N)*k,o[9]=(v-L)*k,o[10]=(1-(_+w))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Ms.set(o[0],o[1],o[2]).length();const d=Ms.set(o[4],o[5],o[6]).length(),f=Ms.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ti.copy(this);const m=1/c,S=1/d,y=1/f;return ti.elements[0]*=m,ti.elements[1]*=m,ti.elements[2]*=m,ti.elements[4]*=S,ti.elements[5]*=S,ti.elements[6]*=S,ti.elements[8]*=y,ti.elements[9]*=y,ti.elements[10]*=y,n.setFromRotationMatrix(ti),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,o,c,d,f=Li){const p=this.elements,m=2*c/(n-e),S=2*c/(r-o),y=(n+e)/(n-e),_=(r+o)/(r-o);let M,E;if(f===Li)M=-(d+c)/(d-c),E=-2*d*c/(d-c);else if(f===Cl)M=-d/(d-c),E=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=S,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Li){const p=this.elements,m=1/(n-e),S=1/(r-o),y=1/(d-c),_=(n+e)*m,M=(r+o)*S;let E,w;if(f===Li)E=(d+c)*y,w=-2*y;else if(f===Cl)E=c*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-_,p[1]=0,p[5]=2*S,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=w,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ms=new ie,ti=new Wt,ex=new ie(0,0,0),tx=new ie(1,1,1),ur=new ie,Qo=new ie,Fn=new ie,wp=new Wt,Ap=new Ia;class Ui{constructor(e=0,n=0,r=0,o=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],p=o[1],m=o[5],S=o[9],y=o[2],_=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Tn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return wp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class Wm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nx=0;const Cp=new ie,Es=new Ia,Ai=new Wt,Jo=new ie,Ra=new ie,ix=new ie,rx=new Ia,Rp=new ie(1,0,0),bp=new ie(0,1,0),Np=new ie(0,0,1),Pp={type:"added"},sx={type:"removed"},Ts={type:"childadded",child:null},bu={type:"childremoved",child:null};class Cn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new ie,n=new Ui,r=new Ia,o=new ie(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Wt},normalMatrix:{value:new ht}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Np,e)}translateOnAxis(e,n){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Jo.copy(e):Jo.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ra,Jo,this.up):Ai.lookAt(Jo,Ra,this.up),this.quaternion.setFromRotationMatrix(Ai),o&&(Ai.extractRotation(o.matrixWorld),Es.setFromRotationMatrix(Ai),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pp),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sx),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pp),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,S=p.length;m<S;m++){const y=p[m];c(e.shapes,y)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),S=d(e.images),y=d(e.shapes),_=d(e.skeletons),M=d(e.animations),E=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),y.length>0&&(r.shapes=y),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function d(f){const p=[];for(const m in f){const S=f[m];delete S.metadata,p.push(S)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Cn.DEFAULT_UP=new ie(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new ie,Ci=new ie,Nu=new ie,Ri=new ie,ws=new ie,As=new ie,Lp=new ie,Pu=new ie,Lu=new ie,Du=new ie;class fi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ni.subVectors(e,n),o.cross(ni);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){ni.subVectors(o,n),Ci.subVectors(r,n),Nu.subVectors(e,n);const d=ni.dot(ni),f=ni.dot(Ci),p=ni.dot(Nu),m=Ci.dot(Ci),S=Ci.dot(Nu),y=d*m-f*f;if(y===0)return c.set(0,0,0),null;const _=1/y,M=(m*p-f*S)*_,E=(d*S-f*p)*_;return c.set(1-M-E,E,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,r,o,c,d,f,p){return this.getBarycoord(e,n,r,o,Ri)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ri.x),p.addScaledVector(d,Ri.y),p.addScaledVector(f,Ri.z),p)}static isFrontFacing(e,n,r,o){return ni.subVectors(r,n),Ci.subVectors(e,n),ni.cross(Ci).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return fi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;ws.subVectors(o,r),As.subVectors(c,r),Pu.subVectors(e,r);const p=ws.dot(Pu),m=As.dot(Pu);if(p<=0&&m<=0)return n.copy(r);Lu.subVectors(e,o);const S=ws.dot(Lu),y=As.dot(Lu);if(S>=0&&y<=S)return n.copy(o);const _=p*y-S*m;if(_<=0&&p>=0&&S<=0)return d=p/(p-S),n.copy(r).addScaledVector(ws,d);Du.subVectors(e,c);const M=ws.dot(Du),E=As.dot(Du);if(E>=0&&M<=E)return n.copy(c);const w=M*m-p*E;if(w<=0&&m>=0&&E<=0)return f=m/(m-E),n.copy(r).addScaledVector(As,f);const v=S*E-M*y;if(v<=0&&y-S>=0&&M-E>=0)return Lp.subVectors(c,o),f=(y-S)/(y-S+(M-E)),n.copy(o).addScaledVector(Lp,f);const x=1/(v+w+_);return d=w*x,f=_*x,n.copy(r).addScaledVector(ws,d).addScaledVector(As,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Iu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=At.workingColorSpace){return this.r=e,this.g=n,this.b=r,At.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=At.workingColorSpace){if(e=jv(e,1),n=Tn(n,0,1),r=Tn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Iu(d,c,e+1/3),this.g=Iu(d,c,e),this.b=Iu(d,c,e-1/3)}return At.toWorkingColorSpace(this,o),this}setStyle(e,n=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ui){const r=Xm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return At.fromWorkingColorSpace(fn.copy(this),e),Math.round(Tn(fn.r*255,0,255))*65536+Math.round(Tn(fn.g*255,0,255))*256+Math.round(Tn(fn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=At.workingColorSpace){At.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,o=fn.g,c=fn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let p,m;const S=(f+d)/2;if(f===d)p=0,m=0;else{const y=d-f;switch(m=S<=.5?y/(d+f):y/(2-d-f),d){case r:p=(o-c)/y+(o<c?6:0);break;case o:p=(c-r)/y+2;break;case c:p=(r-o)/y+4;break}p/=6}return e.h=p,e.s=m,e.l=S,e}getRGB(e,n=At.workingColorSpace){return At.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ui){At.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,o=fn.b;return e!==ui?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(el);const r=_u(dr.h,el.h,n),o=_u(dr.s,el.s,n),c=_u(dr.l,el.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Ct;Ct.NAMES=Xm;let ax=0;class Fa extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=Us,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wu,this.blendDst=Xu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wu&&(r.blendSrc=this.blendSrc),this.blendDst!==Xu&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ym extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new ie,tl=new Et;class si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=_p,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix3(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=wa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=wa(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=wa(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=wa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=wa(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),o=En(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),o=En(o,this.array),c=En(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),e}}class qm extends si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $m extends si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wr extends si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let ox=0;const jn=new Wt,Uu=new Cn,Cs=new ie,On=new Ua,ba=new Ua,nn=new ie;class Fi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?$m:qm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ht().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,n,r){return jn.makeTranslation(e,n,r),this.applyMatrix4(jn),this}scale(e,n,r){return jn.makeScale(e,n,r),this.applyMatrix4(jn),this}lookAt(e){return Uu.lookAt(e),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Wr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];On.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];ba.setFromBufferAttribute(f),this.morphTargetsRelative?(nn.addVectors(On.min,ba.min),On.expandByPoint(nn),nn.addVectors(On.max,ba.max),On.expandByPoint(nn)):(On.expandByPoint(ba.min),On.expandByPoint(ba.max))}On.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(nn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,S=f.count;m<S;m++)nn.fromBufferAttribute(f,m),p&&(Cs.fromBufferAttribute(e,m),nn.add(Cs)),o=Math.max(o,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let Y=0;Y<r.count;Y++)f[Y]=new ie,p[Y]=new ie;const m=new ie,S=new ie,y=new ie,_=new Et,M=new Et,E=new Et,w=new ie,v=new ie;function x(Y,R,A){m.fromBufferAttribute(r,Y),S.fromBufferAttribute(r,R),y.fromBufferAttribute(r,A),_.fromBufferAttribute(c,Y),M.fromBufferAttribute(c,R),E.fromBufferAttribute(c,A),S.sub(m),y.sub(m),M.sub(_),E.sub(_);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(w.copy(S).multiplyScalar(E.y).addScaledVector(y,-M.y).multiplyScalar(B),v.copy(y).multiplyScalar(M.x).addScaledVector(S,-E.x).multiplyScalar(B),f[Y].add(w),f[R].add(w),f[A].add(w),p[Y].add(v),p[R].add(v),p[A].add(v))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,R=L.length;Y<R;++Y){const A=L[Y],B=A.start,re=A.count;for(let Z=B,de=B+re;Z<de;Z+=3)x(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const N=new ie,P=new ie,W=new ie,I=new ie;function k(Y){W.fromBufferAttribute(o,Y),I.copy(W);const R=f[Y];N.copy(R),N.sub(W.multiplyScalar(W.dot(R))).normalize(),P.crossVectors(I,R);const B=P.dot(p[Y])<0?-1:1;d.setXYZW(Y,N.x,N.y,N.z,B)}for(let Y=0,R=L.length;Y<R;++Y){const A=L[Y],B=A.start,re=A.count;for(let Z=B,de=B+re;Z<de;Z+=3)k(e.getX(Z+0)),k(e.getX(Z+1)),k(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new ie,c=new ie,d=new ie,f=new ie,p=new ie,m=new ie,S=new ie,y=new ie;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),w=e.getX(_+1),v=e.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,w),d.fromBufferAttribute(n,v),S.subVectors(d,c),y.subVectors(o,c),S.cross(y),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,v),f.add(S),p.add(S),m.add(S),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(v,m.x,m.y,m.z)}else for(let _=0,M=n.count;_<M;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),d.fromBufferAttribute(n,_+2),S.subVectors(d,c),y.subVectors(o,c),S.cross(y),r.setXYZ(_+0,S.x,S.y,S.z),r.setXYZ(_+1,S.x,S.y,S.z),r.setXYZ(_+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(f,p){const m=f.array,S=f.itemSize,y=f.normalized,_=new m.constructor(p.length*S);let M=0,E=0;for(let w=0,v=p.length;w<v;w++){f.isInterleavedBufferAttribute?M=p[w]*f.data.stride+f.offset:M=p[w]*S;for(let x=0;x<S;x++)_[E++]=m[M++]}return new si(_,S,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let S=0,y=m.length;S<y;S++){const _=m[S],M=e(_,r);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],S=[];for(let y=0,_=m.length;y<_;y++){const M=m[y];S.push(M.toJSON(e.data))}S.length>0&&(o[p]=S,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const S=o[m];this.setAttribute(m,S.clone(n))}const c=e.morphAttributes;for(const m in c){const S=[],y=c[m];for(let _=0,M=y.length;_<M;_++)S.push(y[_].clone(n));this.morphAttributes[m]=S}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,S=d.length;m<S;m++){const y=d[m];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new Wt,Ur=new jm,nl=new Pl,Ip=new ie,Rs=new ie,bs=new ie,Ns=new ie,Fu=new ie,il=new ie,rl=new Et,sl=new Et,al=new Et,Up=new ie,Fp=new ie,Op=new ie,ol=new ie,ll=new ie;class Di extends Cn{constructor(e=new Fi,n=new Ym){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){il.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const S=f[p],y=c[p];S!==0&&(Fu.fromBufferAttribute(y,e),d?il.addScaledVector(Fu,S):il.addScaledVector(Fu.sub(n),S))}n.add(il)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(c),Ur.copy(e.ray).recast(e.near),!(nl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(nl,Ip)===null||Ur.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Dp.copy(c).invert(),Ur.copy(e.ray).applyMatrix4(Dp),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,S=c.attributes.uv1,y=c.attributes.normal,_=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let E=0,w=_.length;E<w;E++){const v=_[E],x=d[v.materialIndex],L=Math.max(v.start,M.start),N=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let P=L,W=N;P<W;P+=3){const I=f.getX(P),k=f.getX(P+1),Y=f.getX(P+2);o=cl(this,x,e,r,m,S,y,I,k,Y),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),w=Math.min(f.count,M.start+M.count);for(let v=E,x=w;v<x;v+=3){const L=f.getX(v),N=f.getX(v+1),P=f.getX(v+2);o=cl(this,d,e,r,m,S,y,L,N,P),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,w=_.length;E<w;E++){const v=_[E],x=d[v.materialIndex],L=Math.max(v.start,M.start),N=Math.min(p.count,Math.min(v.start+v.count,M.start+M.count));for(let P=L,W=N;P<W;P+=3){const I=P,k=P+1,Y=P+2;o=cl(this,x,e,r,m,S,y,I,k,Y),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=v.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),w=Math.min(p.count,M.start+M.count);for(let v=E,x=w;v<x;v+=3){const L=v,N=v+1,P=v+2;o=cl(this,d,e,r,m,S,y,L,N,P),o&&(o.faceIndex=Math.floor(v/3),n.push(o))}}}}function lx(s,e,n,r,o,c,d,f){let p;if(e.side===wn?p=r.intersectTriangle(d,c,o,!0,f):p=r.intersectTriangle(o,c,d,e.side===gr,f),p===null)return null;ll.copy(f),ll.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ll);return m<n.near||m>n.far?null:{distance:m,point:ll.clone(),object:s}}function cl(s,e,n,r,o,c,d,f,p,m){s.getVertexPosition(f,Rs),s.getVertexPosition(p,bs),s.getVertexPosition(m,Ns);const S=lx(s,e,n,r,Rs,bs,Ns,ol);if(S){o&&(rl.fromBufferAttribute(o,f),sl.fromBufferAttribute(o,p),al.fromBufferAttribute(o,m),S.uv=fi.getInterpolation(ol,Rs,bs,Ns,rl,sl,al,new Et)),c&&(rl.fromBufferAttribute(c,f),sl.fromBufferAttribute(c,p),al.fromBufferAttribute(c,m),S.uv1=fi.getInterpolation(ol,Rs,bs,Ns,rl,sl,al,new Et)),d&&(Up.fromBufferAttribute(d,f),Fp.fromBufferAttribute(d,p),Op.fromBufferAttribute(d,m),S.normal=fi.getInterpolation(ol,Rs,bs,Ns,Up,Fp,Op,new ie),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const y={a:f,b:p,c:m,normal:new ie,materialIndex:0};fi.getNormal(Rs,bs,Ns,y.normal),S.face=y}return S}class Oa extends Fi{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],S=[],y=[];let _=0,M=0;E("z","y","x",-1,-1,r,n,e,d,c,0),E("z","y","x",1,-1,r,n,-e,d,c,1),E("x","z","y",1,1,e,r,n,o,d,2),E("x","z","y",1,-1,e,r,-n,o,d,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new Wr(m,3)),this.setAttribute("normal",new Wr(S,3)),this.setAttribute("uv",new Wr(y,2));function E(w,v,x,L,N,P,W,I,k,Y,R){const A=P/k,B=W/Y,re=P/2,Z=W/2,de=I/2,ue=k+1,oe=Y+1;let ae=0,H=0;const le=new ie;for(let se=0;se<oe;se++){const O=se*B-Z;for(let ne=0;ne<ue;ne++){const De=ne*A-re;le[w]=De*L,le[v]=O*N,le[x]=de,m.push(le.x,le.y,le.z),le[w]=0,le[v]=0,le[x]=I>0?1:-1,S.push(le.x,le.y,le.z),y.push(ne/k),y.push(1-se/Y),ae+=1}}for(let se=0;se<Y;se++)for(let O=0;O<k;O++){const ne=_+O+ue*se,De=_+O+ue*(se+1),K=_+(O+1)+ue*(se+1),ce=_+(O+1)+ue*se;p.push(ne,De,ce),p.push(De,K,ce),H+=6}f.addGroup(M,H,R),M+=H,_+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function mn(s){const e={};for(let n=0;n<s.length;n++){const r=Vs(s[n]);for(const o in r)e[o]=r[o]}return e}function cx(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Km(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const ux={clone:Vs,merge:mn};var dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Zm extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new ie,kp=new Et,zp=new Et;class Wn extends Zm{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,kp,zp),n.subVectors(zp,kp)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xu*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*o/p,n-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ps=-90,Ls=1;class hx extends Cn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wn(Ps,Ls,e,n);o.layers=this.layers,this.add(o);const c=new Wn(Ps,Ls,e,n);c.layers=this.layers,this.add(c);const d=new Wn(Ps,Ls,e,n);d.layers=this.layers,this.add(d);const f=new Wn(Ps,Ls,e,n);f.layers=this.layers,this.add(f);const p=new Wn(Ps,Ls,e,n);p.layers=this.layers,this.add(p);const m=new Wn(Ps,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,p]=n;for(const m of n)this.remove(m);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,S]=this.children,y=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,d),e.setRenderTarget(r,2,o),e.render(n,f),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(n,S),e.setRenderTarget(y,_,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Qm extends An{constructor(e,n,r,o,c,d,f,p,m,S){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,r,o,c,d,f,p,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class px extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Qm(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Oa(5,5,5),c=new vr({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:pr});c.uniforms.tEquirect.value=n;const d=new Di(o,c),f=n.minFilter;return n.minFilter===jr&&(n.minFilter=ii),new hx(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}const Ou=new ie,mx=new ie,gx=new ht;class zr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ou.subVectors(r,n).cross(mx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ou),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||gx.getNormalMatrix(e),o=this.coplanarPoint(Ou).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Pl,ul=new ie;class Jm{constructor(e=new zr,n=new zr,r=new zr,o=new zr,c=new zr,d=new zr){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Li){const r=this.planes,o=e.elements,c=o[0],d=o[1],f=o[2],p=o[3],m=o[4],S=o[5],y=o[6],_=o[7],M=o[8],E=o[9],w=o[10],v=o[11],x=o[12],L=o[13],N=o[14],P=o[15];if(r[0].setComponents(p-c,_-m,v-M,P-x).normalize(),r[1].setComponents(p+c,_+m,v+M,P+x).normalize(),r[2].setComponents(p+d,_+S,v+E,P+L).normalize(),r[3].setComponents(p-d,_-S,v-E,P-L).normalize(),r[4].setComponents(p-f,_-y,v-w,P-N).normalize(),n===Li)r[5].setComponents(p+f,_+y,v+w,P+N).normalize();else if(n===Cl)r[5].setComponents(f,y,w,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(ul.x=o.normal.x>0?e.max.x:e.min.x,ul.y=o.normal.y>0?e.max.y:e.min.y,ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function vx(s){const e=new WeakMap;function n(f,p){const m=f.array,S=f.usage,y=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,S),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,p,m){const S=p.array,y=p._updateRange,_=p.updateRanges;if(s.bindBuffer(m,f),y.count===-1&&_.length===0&&s.bufferSubData(m,0,S),_.length!==0){for(let M=0,E=_.length;M<E;M++){const w=_[M];s.bufferSubData(m,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}p.clearUpdateRanges()}y.count!==-1&&(s.bufferSubData(m,y.offset*S.BYTES_PER_ELEMENT,S,y.offset,y.count),y.count=-1),p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isGLBufferAttribute){const S=e.get(f);(!S||S.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:c,update:d}}class Ll extends Fi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(o),m=f+1,S=p+1,y=e/f,_=n/p,M=[],E=[],w=[],v=[];for(let x=0;x<S;x++){const L=x*_-d;for(let N=0;N<m;N++){const P=N*y-c;E.push(P,-L,0),w.push(0,0,1),v.push(N/f),v.push(1-x/p)}}for(let x=0;x<p;x++)for(let L=0;L<f;L++){const N=L+m*x,P=L+m*(x+1),W=L+1+m*(x+1),I=L+1+m*x;M.push(N,P,I),M.push(P,W,I)}this.setIndex(M),this.setAttribute("position",new Wr(E,3)),this.setAttribute("normal",new Wr(w,3)),this.setAttribute("uv",new Wr(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}var xx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_x=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ex=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Px=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Vx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Gx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",$x=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Kx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,u_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,d_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,h_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,__=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,C_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,R_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,N_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,I_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,O_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Y_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ay=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,fy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xy=`uniform sampler2D t2D;
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`#include <common>
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
}`,Ty=`#if DEPTH_PACKING == 3200
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
	#endif
}`,wy=`#define DISTANCE
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
}`,Ay=`#define DISTANCE
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
}`,Cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Dy=`#define LAMBERT
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
}`,Iy=`#define LAMBERT
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
}`,Uy=`#define MATCAP
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
}`,Fy=`#define MATCAP
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
}`,Oy=`#define NORMAL
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
}`,ky=`#define NORMAL
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
}`,zy=`#define PHONG
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
}`,By=`#define PHONG
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
}`,Hy=`#define STANDARD
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
}`,Vy=`#define STANDARD
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
}`,Gy=`#define TOON
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
}`,jy=`#define TOON
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
}`,Wy=`uniform float size;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Yy=`#include <common>
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
}`,qy=`uniform vec3 color;
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
}`,$y=`uniform float rotation;
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
}`,Ky=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:xx,alphahash_pars_fragment:_x,alphamap_fragment:yx,alphamap_pars_fragment:Sx,alphatest_fragment:Mx,alphatest_pars_fragment:Ex,aomap_fragment:Tx,aomap_pars_fragment:wx,batching_pars_vertex:Ax,batching_vertex:Cx,begin_vertex:Rx,beginnormal_vertex:bx,bsdfs:Nx,iridescence_fragment:Px,bumpmap_pars_fragment:Lx,clipping_planes_fragment:Dx,clipping_planes_pars_fragment:Ix,clipping_planes_pars_vertex:Ux,clipping_planes_vertex:Fx,color_fragment:Ox,color_pars_fragment:kx,color_pars_vertex:zx,color_vertex:Bx,common:Hx,cube_uv_reflection_fragment:Vx,defaultnormal_vertex:Gx,displacementmap_pars_vertex:jx,displacementmap_vertex:Wx,emissivemap_fragment:Xx,emissivemap_pars_fragment:Yx,colorspace_fragment:qx,colorspace_pars_fragment:$x,envmap_fragment:Kx,envmap_common_pars_fragment:Zx,envmap_pars_fragment:Qx,envmap_pars_vertex:Jx,envmap_physical_pars_fragment:u_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:r_,gradientmap_pars_fragment:s_,lightmap_pars_fragment:a_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:d_,lights_toon_pars_fragment:f_,lights_phong_fragment:h_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:v_,lights_fragment_maps:x_,lights_fragment_end:__,logdepthbuf_fragment:y_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:M_,logdepthbuf_vertex:E_,map_fragment:T_,map_pars_fragment:w_,map_particle_fragment:A_,map_particle_pars_fragment:C_,metalnessmap_fragment:R_,metalnessmap_pars_fragment:b_,morphinstance_vertex:N_,morphcolor_vertex:P_,morphnormal_vertex:L_,morphtarget_pars_vertex:D_,morphtarget_vertex:I_,normal_fragment_begin:U_,normal_fragment_maps:F_,normal_pars_fragment:O_,normal_pars_vertex:k_,normal_vertex:z_,normalmap_pars_fragment:B_,clearcoat_normal_fragment_begin:H_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:G_,iridescence_pars_fragment:j_,opaque_fragment:W_,packing:X_,premultiplied_alpha_fragment:Y_,project_vertex:q_,dithering_fragment:$_,dithering_pars_fragment:K_,roughnessmap_fragment:Z_,roughnessmap_pars_fragment:Q_,shadowmap_pars_fragment:J_,shadowmap_pars_vertex:ey,shadowmap_vertex:ty,shadowmask_pars_fragment:ny,skinbase_vertex:iy,skinning_pars_vertex:ry,skinning_vertex:sy,skinnormal_vertex:ay,specularmap_fragment:oy,specularmap_pars_fragment:ly,tonemapping_fragment:cy,tonemapping_pars_fragment:uy,transmission_fragment:dy,transmission_pars_fragment:fy,uv_pars_fragment:hy,uv_pars_vertex:py,uv_vertex:my,worldpos_vertex:gy,background_vert:vy,background_frag:xy,backgroundCube_vert:_y,backgroundCube_frag:yy,cube_vert:Sy,cube_frag:My,depth_vert:Ey,depth_frag:Ty,distanceRGBA_vert:wy,distanceRGBA_frag:Ay,equirect_vert:Cy,equirect_frag:Ry,linedashed_vert:by,linedashed_frag:Ny,meshbasic_vert:Py,meshbasic_frag:Ly,meshlambert_vert:Dy,meshlambert_frag:Iy,meshmatcap_vert:Uy,meshmatcap_frag:Fy,meshnormal_vert:Oy,meshnormal_frag:ky,meshphong_vert:zy,meshphong_frag:By,meshphysical_vert:Hy,meshphysical_frag:Vy,meshtoon_vert:Gy,meshtoon_frag:jy,points_vert:Wy,points_frag:Xy,shadow_vert:Yy,shadow_frag:qy,sprite_vert:$y,sprite_frag:Ky},Pe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},di={basic:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:mn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:mn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:mn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:mn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:mn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:mn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:mn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:mn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:mn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:mn([Pe.lights,Pe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};di.physical={uniforms:mn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const dl={r:0,b:0,g:0},Or=new Ui,Zy=new Wt;function Qy(s,e,n,r,o,c,d){const f=new Ct(0);let p=c===!0?0:1,m,S,y=null,_=0,M=null;function E(L){let N=L.isScene===!0?L.background:null;return N&&N.isTexture&&(N=(L.backgroundBlurriness>0?n:e).get(N)),N}function w(L){let N=!1;const P=E(L);P===null?x(f,p):P&&P.isColor&&(x(P,1),N=!0);const W=s.xr.getEnvironmentBlendMode();W==="additive"?r.buffers.color.setClear(0,0,0,1,d):W==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function v(L,N){const P=E(N);P&&(P.isCubeTexture||P.mapping===bl)?(S===void 0&&(S=new Di(new Oa(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:Vs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(W,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(S)),Or.copy(N.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),S.material.uniforms.envMap.value=P,S.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(Or)),S.material.toneMapped=At.getTransfer(P.colorSpace)!==It,(y!==P||_!==P.version||M!==s.toneMapping)&&(S.material.needsUpdate=!0,y=P,_=P.version,M=s.toneMapping),S.layers.enableAll(),L.unshift(S,S.geometry,S.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new Di(new Ll(2,2),new vr({name:"BackgroundMaterial",uniforms:Vs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=At.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||_!==P.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,y=P,_=P.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function x(L,N){L.getRGB(dl,Km(s)),r.buffers.color.setClear(dl.r,dl.g,dl.b,N,d)}return{getClearColor:function(){return f},setClearColor:function(L,N=1){f.set(L),p=N,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(f,p)},render:w,addToRenderList:v}}function Jy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let c=o,d=!1;function f(A,B,re,Z,de){let ue=!1;const oe=y(Z,re,B);c!==oe&&(c=oe,m(c.object)),ue=M(A,Z,re,de),ue&&E(A,Z,re,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(ue||d)&&(d=!1,P(A,B,re,Z),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function S(A){return s.deleteVertexArray(A)}function y(A,B,re){const Z=re.wireframe===!0;let de=r[A.id];de===void 0&&(de={},r[A.id]=de);let ue=de[B.id];ue===void 0&&(ue={},de[B.id]=ue);let oe=ue[Z];return oe===void 0&&(oe=_(p()),ue[Z]=oe),oe}function _(A){const B=[],re=[],Z=[];for(let de=0;de<n;de++)B[de]=0,re[de]=0,Z[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:re,attributeDivisors:Z,object:A,attributes:{},index:null}}function M(A,B,re,Z){const de=c.attributes,ue=B.attributes;let oe=0;const ae=re.getAttributes();for(const H in ae)if(ae[H].location>=0){const se=de[H];let O=ue[H];if(O===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;oe++}return c.attributesNum!==oe||c.index!==Z}function E(A,B,re,Z){const de={},ue=B.attributes;let oe=0;const ae=re.getAttributes();for(const H in ae)if(ae[H].location>=0){let se=ue[H];se===void 0&&(H==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),H==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),de[H]=O,oe++}c.attributes=de,c.attributesNum=oe,c.index=Z}function w(){const A=c.newAttributes;for(let B=0,re=A.length;B<re;B++)A[B]=0}function v(A){x(A,0)}function x(A,B){const re=c.newAttributes,Z=c.enabledAttributes,de=c.attributeDivisors;re[A]=1,Z[A]===0&&(s.enableVertexAttribArray(A),Z[A]=1),de[A]!==B&&(s.vertexAttribDivisor(A,B),de[A]=B)}function L(){const A=c.newAttributes,B=c.enabledAttributes;for(let re=0,Z=B.length;re<Z;re++)B[re]!==A[re]&&(s.disableVertexAttribArray(re),B[re]=0)}function N(A,B,re,Z,de,ue,oe){oe===!0?s.vertexAttribIPointer(A,B,re,de,ue):s.vertexAttribPointer(A,B,re,Z,de,ue)}function P(A,B,re,Z){w();const de=Z.attributes,ue=re.getAttributes(),oe=B.defaultAttributeValues;for(const ae in ue){const H=ue[ae];if(H.location>=0){let le=de[ae];if(le===void 0&&(ae==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),ae==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const se=le.normalized,O=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const De=ne.buffer,K=ne.type,ce=ne.bytesPerElement,_e=K===s.INT||K===s.UNSIGNED_INT||le.gpuType===Rd;if(le.isInterleavedBufferAttribute){const Me=le.data,be=Me.stride,ke=le.offset;if(Me.isInstancedInterleavedBuffer){for(let $e=0;$e<H.locationSize;$e++)x(H.location+$e,Me.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let $e=0;$e<H.locationSize;$e++)v(H.location+$e);s.bindBuffer(s.ARRAY_BUFFER,De);for(let $e=0;$e<H.locationSize;$e++)N(H.location+$e,O/H.locationSize,K,se,be*ce,(ke+O/H.locationSize*$e)*ce,_e)}else{if(le.isInstancedBufferAttribute){for(let Me=0;Me<H.locationSize;Me++)x(H.location+Me,le.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Me=0;Me<H.locationSize;Me++)v(H.location+Me);s.bindBuffer(s.ARRAY_BUFFER,De);for(let Me=0;Me<H.locationSize;Me++)N(H.location+Me,O/H.locationSize,K,se,O*ce,O/H.locationSize*Me*ce,_e)}}else if(oe!==void 0){const se=oe[ae];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(H.location,se);break;case 3:s.vertexAttrib3fv(H.location,se);break;case 4:s.vertexAttrib4fv(H.location,se);break;default:s.vertexAttrib1fv(H.location,se)}}}}L()}function W(){Y();for(const A in r){const B=r[A];for(const re in B){const Z=B[re];for(const de in Z)S(Z[de].object),delete Z[de];delete B[re]}delete r[A]}}function I(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const re in B){const Z=B[re];for(const de in Z)S(Z[de].object),delete Z[de];delete B[re]}delete r[A.id]}function k(A){for(const B in r){const re=r[B];if(re[A.id]===void 0)continue;const Z=re[A.id];for(const de in Z)S(Z[de].object),delete Z[de];delete re[A.id]}}function Y(){R(),d=!0,c!==o&&(c=o,m(c.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:R,dispose:W,releaseStatesOfGeometry:I,releaseStatesOfProgram:k,initAttributes:w,enableAttribute:v,disableUnusedAttributes:L}}function eS(s,e,n){let r;function o(m){r=m}function c(m,S){s.drawArrays(r,m,S),n.update(S,r,1)}function d(m,S,y){y!==0&&(s.drawArraysInstanced(r,m,S,y),n.update(S,r,y))}function f(m,S,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,S,0,y);let M=0;for(let E=0;E<y;E++)M+=S[E];n.update(M,r,1)}function p(m,S,y,_){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<m.length;E++)d(m[E],S[E],_[E]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,S,0,_,0,y);let E=0;for(let w=0;w<y;w++)E+=S[w];for(let w=0;w<_.length;w++)n.update(E,r,_[w])}}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function tS(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(I){return!(I!==ri&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const k=I===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ii&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pi&&!k)}function p(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const S=p(m);S!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const y=n.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),w=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,W=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:y,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:w,maxAttributes:v,maxVertexUniforms:x,maxVaryings:L,maxFragmentUniforms:N,vertexTextures:P,maxSamples:W}}function nS(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new zr,f=new ht,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,_){const M=y.length!==0||_||r!==0||o;return o=_,r=y.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,_){n=S(y,_,0)},this.setState=function(y,_,M){const E=y.clippingPlanes,w=y.clipIntersection,v=y.clipShadows,x=s.get(y);if(!o||E===null||E.length===0||c&&!v)c?S(null):m();else{const L=c?0:r,N=L*4;let P=x.clippingState||null;p.value=P,P=S(E,_,N,M);for(let W=0;W!==N;++W)P[W]=n[W];x.clippingState=P,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(y,_,M,E){const w=y!==null?y.length:0;let v=null;if(w!==0){if(v=p.value,E!==!0||v===null){const x=M+w*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(v===null||v.length<x)&&(v=new Float32Array(x));for(let N=0,P=M;N!==w;++N,P+=4)d.copy(y[N]).applyMatrix4(L,f),d.normal.toArray(v,P),v[P+3]=d.constant}p.value=v,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function iS(s){let e=new WeakMap;function n(d,f){return f===Yu?d.mapping=ks:f===qu&&(d.mapping=zs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Yu||f===qu)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new px(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),n(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class rS extends Zm{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=S*this.view.offsetY,p=f-S*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Bp=[.125,.215,.35,.446,.526,.582],Vr=20,ku=new rS,Hp=new Ct;let zu=null,Bu=0,Hu=0,Vu=!1;const Br=(1+Math.sqrt(5))/2,Ds=1/Br,Vp=[new ie(-Br,Ds,0),new ie(Br,Ds,0),new ie(-Ds,0,Br),new ie(Ds,0,Br),new ie(0,Br,-Ds),new ie(0,Br,Ds),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class Gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){zu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Bu,Hu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:La,format:ri,colorSpace:xr,depthBuffer:!1},o=jp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sS(c)),this._blurMaterial=aS(c,e,n)}return o}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,ku)}_sceneToCubeUV(e,n,r,o){const f=new Wn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],S=this._renderer,y=S.autoClear,_=S.toneMapping;S.getClearColor(Hp),S.toneMapping=mr,S.autoClear=!1;const M=new Ym({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),E=new Di(new Oa,M);let w=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,w=!0):(M.color.copy(Hp),w=!0);for(let x=0;x<6;x++){const L=x%3;L===0?(f.up.set(0,p[x],0),f.lookAt(m[x],0,0)):L===1?(f.up.set(0,0,p[x]),f.lookAt(0,m[x],0)):(f.up.set(0,p[x],0),f.lookAt(0,0,m[x]));const N=this._cubeSize;fl(o,L*N,x>2?N:0,N,N),S.setRenderTarget(o),w&&S.render(E,f),S.render(e,f)}E.geometry.dispose(),E.material.dispose(),S.toneMapping=_,S.autoClear=y,e.background=v}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ks||e.mapping===zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const c=o?this._cubemapMaterial:this._equirectMaterial,d=new Di(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;fl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,ku)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=Vp[(o-c-1)%Vp.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,y=new Di(this._lodPlanes[o],m),_=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Vr-1),w=c/E,v=isFinite(c)?1+Math.floor(S*w):Vr;v>Vr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Vr}`);const x=[];let L=0;for(let k=0;k<Vr;++k){const Y=k/w,R=Math.exp(-Y*Y/2);x.push(R),k===0?L+=R:k<v&&(L+=2*R)}for(let k=0;k<x.length;k++)x[k]=x[k]/L;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=x,_.latitudinal.value=d==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-r;const P=this._sizeLods[o],W=3*P*(o>N-Is?o-N+Is:0),I=4*(this._cubeSize-P);fl(n,W,I,3*P,2*P),p.setRenderTarget(n),p.render(y,ku)}}function sS(s){const e=[],n=[],r=[];let o=s;const c=s-Is+1+Bp.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);n.push(f);let p=1/f;d>s-Is?p=Bp[d-s+Is-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),S=-m,y=1+m,_=[S,S,y,S,y,y,S,S,y,y,S,y],M=6,E=6,w=3,v=2,x=1,L=new Float32Array(w*E*M),N=new Float32Array(v*E*M),P=new Float32Array(x*E*M);for(let I=0;I<M;I++){const k=I%3*2/3-1,Y=I>2?0:-1,R=[k,Y,0,k+2/3,Y,0,k+2/3,Y+1,0,k,Y,0,k+2/3,Y+1,0,k,Y+1,0];L.set(R,w*E*I),N.set(_,v*E*I);const A=[I,I,I,I,I,I];P.set(A,x*E*I)}const W=new Fi;W.setAttribute("position",new si(L,w)),W.setAttribute("uv",new si(N,v)),W.setAttribute("faceIndex",new si(P,x)),e.push(W),o>Is&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function jp(s,e,n){const r=new Yr(s,e,n);return r.texture.mapping=bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function aS(s,e,n){const r=new Float32Array(Vr),o=new ie(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Wp(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Xp(){return new vr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ud(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ud(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function oS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===Yu||p===qu,S=p===ks||p===zs;if(m||S){let y=e.get(f);const _=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return n===null&&(n=new Gp(s)),y=m?n.fromEquirectangular(f,y):n.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const M=f.image;return m&&M&&M.height>0||S&&M&&o(M)?(n===null&&(n=new Gp(s)),y=m?n.fromEquirectangular(f):n.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",c),y.texture):null}}}return f}function o(f){let p=0;const m=6;for(let S=0;S<m;S++)f[S]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function lS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Hm("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function cS(s,e,n,r){const o={},c=new WeakMap;function d(y){const _=y.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);for(const E in _.morphAttributes){const w=_.morphAttributes[E];for(let v=0,x=w.length;v<x;v++)e.remove(w[v])}_.removeEventListener("dispose",d),delete o[_.id];const M=c.get(_);M&&(e.remove(M),c.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function f(y,_){return o[_.id]===!0||(_.addEventListener("dispose",d),o[_.id]=!0,n.memory.geometries++),_}function p(y){const _=y.attributes;for(const E in _)e.update(_[E],s.ARRAY_BUFFER);const M=y.morphAttributes;for(const E in M){const w=M[E];for(let v=0,x=w.length;v<x;v++)e.update(w[v],s.ARRAY_BUFFER)}}function m(y){const _=[],M=y.index,E=y.attributes.position;let w=0;if(M!==null){const L=M.array;w=M.version;for(let N=0,P=L.length;N<P;N+=3){const W=L[N+0],I=L[N+1],k=L[N+2];_.push(W,I,I,k,k,W)}}else if(E!==void 0){const L=E.array;w=E.version;for(let N=0,P=L.length/3-1;N<P;N+=3){const W=N+0,I=N+1,k=N+2;_.push(W,I,I,k,k,W)}}else return;const v=new(Bm(_)?$m:qm)(_,1);v.version=w;const x=c.get(y);x&&e.remove(x),c.set(y,v)}function S(y){const _=c.get(y);if(_){const M=y.index;M!==null&&_.version<M.version&&m(y)}else m(y);return c.get(y)}return{get:f,update:p,getWireframeAttribute:S}}function uS(s,e,n){let r;function o(_){r=_}let c,d;function f(_){c=_.type,d=_.bytesPerElement}function p(_,M){s.drawElements(r,M,c,_*d),n.update(M,r,1)}function m(_,M,E){E!==0&&(s.drawElementsInstanced(r,M,c,_*d,E),n.update(M,r,E))}function S(_,M,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,_,0,E);let v=0;for(let x=0;x<E;x++)v+=M[x];n.update(v,r,1)}function y(_,M,E,w){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let x=0;x<_.length;x++)m(_[x]/d,M[x],w[x]);else{v.multiDrawElementsInstancedWEBGL(r,M,0,c,_,0,w,0,E);let x=0;for(let L=0;L<E;L++)x+=M[L];for(let L=0;L<w.length;L++)n.update(x,r,w[L])}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=S,this.renderMultiDrawInstances=y}function dS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function fS(s,e,n){const r=new WeakMap,o=new rn;function c(d,f,p){const m=d.morphTargetInfluences,S=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=S!==void 0?S.length:0;let _=r.get(f);if(_===void 0||_.count!==y){let A=function(){Y.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var M=A;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,v=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],N=f.morphAttributes.color||[];let P=0;E===!0&&(P=1),w===!0&&(P=2),v===!0&&(P=3);let W=f.attributes.position.count*P,I=1;W>e.maxTextureSize&&(I=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const k=new Float32Array(W*I*4*y),Y=new Gm(k,W,I,y);Y.type=Pi,Y.needsUpdate=!0;const R=P*4;for(let B=0;B<y;B++){const re=x[B],Z=L[B],de=N[B],ue=W*I*4*B;for(let oe=0;oe<re.count;oe++){const ae=oe*R;E===!0&&(o.fromBufferAttribute(re,oe),k[ue+ae+0]=o.x,k[ue+ae+1]=o.y,k[ue+ae+2]=o.z,k[ue+ae+3]=0),w===!0&&(o.fromBufferAttribute(Z,oe),k[ue+ae+4]=o.x,k[ue+ae+5]=o.y,k[ue+ae+6]=o.z,k[ue+ae+7]=0),v===!0&&(o.fromBufferAttribute(de,oe),k[ue+ae+8]=o.x,k[ue+ae+9]=o.y,k[ue+ae+10]=o.z,k[ue+ae+11]=de.itemSize===4?o.w:1)}}_={count:y,texture:Y,size:new Et(W,I)},r.set(f,_),f.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let E=0;for(let v=0;v<m.length;v++)E+=m[v];const w=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function hS(s,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,S=p.geometry,y=e.get(p,S);if(o.get(y)!==m&&(e.update(y),o.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const _=p.skeleton;o.get(_)!==m&&(_.update(),o.set(_,m))}return y}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}class tg extends An{constructor(e,n,r,o,c,d,f,p,m,S=Fs){if(S!==Fs&&S!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&S===Fs&&(r=Xr),r===void 0&&S===Hs&&(r=Bs),super(null,o,c,d,f,p,S,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:Xn,this.minFilter=p!==void 0?p:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ng=new An,Yp=new tg(1,1),ig=new Gm,rg=new Qv,sg=new Qm,qp=[],$p=[],Kp=new Float32Array(16),Zp=new Float32Array(9),Qp=new Float32Array(4);function js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=qp[o];if(c===void 0&&(c=new Float32Array(o),qp[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Dl(s,e){let n=$p[e];n===void 0&&(n=new Int32Array(e),$p[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function pS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function mS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function xS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Qp.set(r),s.uniformMatrix2fv(this.addr,!1,Qp),Kt(n,r)}}function _S(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Zp.set(r),s.uniformMatrix3fv(this.addr,!1,Zp),Kt(n,r)}}function yS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Kp.set(r),s.uniformMatrix4fv(this.addr,!1,Kp),Kt(n,r)}}function SS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function MS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function TS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function wS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function bS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Yp.compareFunction=zm,c=Yp):c=ng,n.setTexture2D(e||c,o)}function NS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||rg,o)}function PS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||sg,o)}function LS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||ig,o)}function DS(s){switch(s){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return vS;case 35674:return xS;case 35675:return _S;case 35676:return yS;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return ES;case 35669:case 35673:return TS;case 5125:return wS;case 36294:return AS;case 36295:return CS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return LS}}function IS(s,e){s.uniform1fv(this.addr,e)}function US(s,e){const n=js(e,this.size,2);s.uniform2fv(this.addr,n)}function FS(s,e){const n=js(e,this.size,3);s.uniform3fv(this.addr,n)}function OS(s,e){const n=js(e,this.size,4);s.uniform4fv(this.addr,n)}function kS(s,e){const n=js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function zS(s,e){const n=js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function BS(s,e){const n=js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function HS(s,e){s.uniform1iv(this.addr,e)}function VS(s,e){s.uniform2iv(this.addr,e)}function GS(s,e){s.uniform3iv(this.addr,e)}function jS(s,e){s.uniform4iv(this.addr,e)}function WS(s,e){s.uniform1uiv(this.addr,e)}function XS(s,e){s.uniform2uiv(this.addr,e)}function YS(s,e){s.uniform3uiv(this.addr,e)}function qS(s,e){s.uniform4uiv(this.addr,e)}function $S(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==o;++d)n.setTexture2D(e[d]||ng,c[d])}function KS(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||rg,c[d])}function ZS(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||sg,c[d])}function QS(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||ig,c[d])}function JS(s){switch(s){case 5126:return IS;case 35664:return US;case 35665:return FS;case 35666:return OS;case 35674:return kS;case 35675:return zS;case 35676:return BS;case 5124:case 35670:return HS;case 35667:case 35671:return VS;case 35668:case 35672:return GS;case 35669:case 35673:return jS;case 5125:return WS;case 36294:return XS;case 36295:return YS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return QS}}class eM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=DS(n.type)}}class tM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JS(n.type)}}class nM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function Jp(s,e){s.seq.push(e),s.map[e.id]=e}function iM(s,e,n){const r=s.name,o=r.length;for(Gu.lastIndex=0;;){const c=Gu.exec(r),d=Gu.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){Jp(n,m===void 0?new eM(f,s,e):new tM(f,s,e));break}else{let y=n.map[f];y===void 0&&(y=new nM(f),Jp(n,y)),n=y}}}class Ml{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),d=e.getUniformLocation(n,c.name);iM(c,d,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const rM=37297;let sM=0;function aM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}function oM(s){const e=At.getPrimaries(At.workingColorSpace),n=At.getPrimaries(s);let r;switch(e===n?r="":e===Al&&n===wl?r="LinearDisplayP3ToLinearSRGB":e===wl&&n===Al&&(r="LinearSRGBToLinearDisplayP3"),s){case xr:case Nl:return[r,"LinearTransferOETF"];case ui:case Id:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+aM(s.getShaderSource(e),d)}else return o}function lM(s,e){const n=oM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cM(s,e){let n;switch(e){case wv:n="Linear";break;case Av:n="Reinhard";break;case Cv:n="OptimizedCineon";break;case Rv:n="ACESFilmic";break;case Nv:n="AgX";break;case Pv:n="Neutral";break;case bv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function uM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function dM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function fM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Na(s){return s!==""}function nm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Td(s){return s.replace(hM,mM)}const pM=new Map;function mM(s,e){let n=ft[e];if(n===void 0){const r=pM.get(e);if(r!==void 0)n=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Td(n)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(s){return s.replace(gM,vM)}function vM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function sm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function _M(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case zs:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function SM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cm:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case Tv:e="ENVMAP_BLENDING_ADD";break}return e}function MM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function EM(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=xM(n),m=_M(n),S=yM(n),y=SM(n),_=MM(n),M=uM(n),E=dM(c),w=o.createProgram();let v,x,L=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Na).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Na).join(`
`),x.length>0&&(x+=`
`)):(v=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+S:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),x=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+S:"",n.envMap?"#define "+y:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?ft.tonemapping_pars_fragment:"",n.toneMapping!==mr?cM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,lM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Na).join(`
`)),d=Td(d),d=nm(d,n),d=im(d,n),f=Td(f),f=nm(f,n),f=im(f,n),d=rm(d),f=rm(f),n.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",n.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=L+v+d,P=L+x+f,W=em(o,o.VERTEX_SHADER,N),I=em(o,o.FRAGMENT_SHADER,P);o.attachShader(w,W),o.attachShader(w,I),n.index0AttributeName!==void 0?o.bindAttribLocation(w,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function k(B){if(s.debug.checkShaderErrors){const re=o.getProgramInfoLog(w).trim(),Z=o.getShaderInfoLog(W).trim(),de=o.getShaderInfoLog(I).trim();let ue=!0,oe=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,W,I);else{const ae=tm(o,W,"vertex"),H=tm(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+re+`
`+ae+`
`+H)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(Z===""||de==="")&&(oe=!1);oe&&(B.diagnostics={runnable:ue,programLog:re,vertexShader:{log:Z,prefix:v},fragmentShader:{log:de,prefix:x}})}o.deleteShader(W),o.deleteShader(I),Y=new Ml(o,w),R=fM(o,w)}let Y;this.getUniforms=function(){return Y===void 0&&k(this),Y};let R;this.getAttributes=function(){return R===void 0&&k(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,rM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sM++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=W,this.fragmentShader=I,this}let TM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new AM(e),n.set(e,r)),r}}class AM{constructor(e){this.id=TM++,this.code=e,this.usedTimes=0}}function CM(s,e,n,r,o,c,d){const f=new Wm,p=new wM,m=new Set,S=[],y=o.logarithmicDepthBuffer,_=o.vertexTextures;let M=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return m.add(R),R===0?"uv":`uv${R}`}function v(R,A,B,re,Z){const de=re.fog,ue=Z.geometry,oe=R.isMeshStandardMaterial?re.environment:null,ae=(R.isMeshStandardMaterial?n:e).get(R.envMap||oe),H=ae&&ae.mapping===bl?ae.image.height:null,le=E[R.type];R.precision!==null&&(M=o.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const se=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,O=se!==void 0?se.length:0;let ne=0;ue.morphAttributes.position!==void 0&&(ne=1),ue.morphAttributes.normal!==void 0&&(ne=2),ue.morphAttributes.color!==void 0&&(ne=3);let De,K,ce,_e;if(le){const xt=di[le];De=xt.vertexShader,K=xt.fragmentShader}else De=R.vertexShader,K=R.fragmentShader,p.update(R),ce=p.getVertexShaderID(R),_e=p.getFragmentShaderID(R);const Me=s.getRenderTarget(),be=Z.isInstancedMesh===!0,ke=Z.isBatchedMesh===!0,$e=!!R.map,xe=!!R.matcap,D=!!ae,Le=!!R.aoMap,Ge=!!R.lightMap,Ye=!!R.bumpMap,ze=!!R.normalMap,yt=!!R.displacementMap,et=!!R.emissiveMap,at=!!R.metalnessMap,F=!!R.roughnessMap,C=R.anisotropy>0,ee=R.clearcoat>0,ge=R.dispersion>0,ye=R.iridescence>0,pe=R.sheen>0,Ke=R.transmission>0,Ne=C&&!!R.anisotropyMap,Oe=ee&&!!R.clearcoatMap,ct=ee&&!!R.clearcoatNormalMap,Ee=ee&&!!R.clearcoatRoughnessMap,Ie=ye&&!!R.iridescenceMap,mt=ye&&!!R.iridescenceThicknessMap,rt=pe&&!!R.sheenColorMap,Be=pe&&!!R.sheenRoughnessMap,lt=!!R.specularMap,ut=!!R.specularColorMap,Rt=!!R.specularIntensityMap,G=Ke&&!!R.transmissionMap,we=Ke&&!!R.thicknessMap,fe=!!R.gradientMap,he=!!R.alphaMap,Ae=R.alphaTest>0,tt=!!R.alphaHash,gt=!!R.extensions;let Ot=mr;R.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const Vt={shaderID:le,shaderType:R.type,shaderName:R.name,vertexShader:De,fragmentShader:K,defines:R.defines,customVertexShaderID:ce,customFragmentShaderID:_e,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:ke,batchingColor:ke&&Z._colorsTexture!==null,instancing:be,instancingColor:be&&Z.instanceColor!==null,instancingMorph:be&&Z.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Me===null?s.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:xr,alphaToCoverage:!!R.alphaToCoverage,map:$e,matcap:xe,envMap:D,envMapMode:D&&ae.mapping,envMapCubeUVHeight:H,aoMap:Le,lightMap:Ge,bumpMap:Ye,normalMap:ze,displacementMap:_&&yt,emissiveMap:et,normalMapObjectSpace:ze&&R.normalMapType===Fv,normalMapTangentSpace:ze&&R.normalMapType===Uv,metalnessMap:at,roughnessMap:F,anisotropy:C,anisotropyMap:Ne,clearcoat:ee,clearcoatMap:Oe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Ee,dispersion:ge,iridescence:ye,iridescenceMap:Ie,iridescenceThicknessMap:mt,sheen:pe,sheenColorMap:rt,sheenRoughnessMap:Be,specularMap:lt,specularColorMap:ut,specularIntensityMap:Rt,transmission:Ke,transmissionMap:G,thicknessMap:we,gradientMap:fe,opaque:R.transparent===!1&&R.blending===Us&&R.alphaToCoverage===!1,alphaMap:he,alphaTest:Ae,alphaHash:tt,combine:R.combine,mapUv:$e&&w(R.map.channel),aoMapUv:Le&&w(R.aoMap.channel),lightMapUv:Ge&&w(R.lightMap.channel),bumpMapUv:Ye&&w(R.bumpMap.channel),normalMapUv:ze&&w(R.normalMap.channel),displacementMapUv:yt&&w(R.displacementMap.channel),emissiveMapUv:et&&w(R.emissiveMap.channel),metalnessMapUv:at&&w(R.metalnessMap.channel),roughnessMapUv:F&&w(R.roughnessMap.channel),anisotropyMapUv:Ne&&w(R.anisotropyMap.channel),clearcoatMapUv:Oe&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:ct&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:rt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(R.sheenRoughnessMap.channel),specularMapUv:lt&&w(R.specularMap.channel),specularColorMapUv:ut&&w(R.specularColorMap.channel),specularIntensityMapUv:Rt&&w(R.specularIntensityMap.channel),transmissionMapUv:G&&w(R.transmissionMap.channel),thicknessMapUv:we&&w(R.thicknessMap.channel),alphaMapUv:he&&w(R.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ze||C),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ue.attributes.uv&&($e||he),fog:!!de,useFog:R.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:Z.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:$e&&R.map.isVideoTexture===!0&&At.getTransfer(R.map.colorSpace)===It,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ni,flipSided:R.side===wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:gt&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&R.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Vt.vertexUv1s=m.has(1),Vt.vertexUv2s=m.has(2),Vt.vertexUv3s=m.has(3),m.clear(),Vt}function x(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const B in R.defines)A.push(B),A.push(R.defines[B]);return R.isRawShaderMaterial===!1&&(L(A,R),N(A,R),A.push(s.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function L(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function N(R,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.skinning&&f.enable(4),A.morphTargets&&f.enable(5),A.morphNormals&&f.enable(6),A.morphColors&&f.enable(7),A.premultipliedAlpha&&f.enable(8),A.shadowMapEnabled&&f.enable(9),A.doubleSided&&f.enable(10),A.flipSided&&f.enable(11),A.useDepthPacking&&f.enable(12),A.dithering&&f.enable(13),A.transmission&&f.enable(14),A.sheen&&f.enable(15),A.opaque&&f.enable(16),A.pointsUvs&&f.enable(17),A.decodeVideoTexture&&f.enable(18),A.alphaToCoverage&&f.enable(19),R.push(f.mask)}function P(R){const A=E[R.type];let B;if(A){const re=di[A];B=ux.clone(re.uniforms)}else B=R.uniforms;return B}function W(R,A){let B;for(let re=0,Z=S.length;re<Z;re++){const de=S[re];if(de.cacheKey===A){B=de,++B.usedTimes;break}}return B===void 0&&(B=new EM(s,A,R,c),S.push(B)),B}function I(R){if(--R.usedTimes===0){const A=S.indexOf(R);S[A]=S[S.length-1],S.pop(),R.destroy()}}function k(R){p.remove(R)}function Y(){p.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:P,acquireProgram:W,releaseProgram:I,releaseShaderCache:k,programs:S,dispose:Y}}function RM(){let s=new WeakMap;function e(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function n(c){s.delete(c)}function r(c,d,f){s.get(c)[d]=f}function o(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:o}}function bM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function am(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function om(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(y,_,M,E,w,v){let x=s[e];return x===void 0?(x={id:y.id,object:y,geometry:_,material:M,groupOrder:E,renderOrder:y.renderOrder,z:w,group:v},s[e]=x):(x.id=y.id,x.object=y,x.geometry=_,x.material=M,x.groupOrder=E,x.renderOrder=y.renderOrder,x.z=w,x.group=v),e++,x}function f(y,_,M,E,w,v){const x=d(y,_,M,E,w,v);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):n.push(x)}function p(y,_,M,E,w,v){const x=d(y,_,M,E,w,v);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):n.unshift(x)}function m(y,_){n.length>1&&n.sort(y||bM),r.length>1&&r.sort(_||am),o.length>1&&o.sort(_||am)}function S(){for(let y=e,_=s.length;y<_;y++){const M=s[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:f,unshift:p,finish:S,sort:m}}function NM(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new om,s.set(r,[d])):o>=c.length?(d=new om,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function PM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Ct};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function LM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let DM=0;function IM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function UM(s){const e=new PM,n=LM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,c=new Wt,d=new Wt;function f(m){let S=0,y=0,_=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,E=0,w=0,v=0,x=0,L=0,N=0,P=0,W=0,I=0,k=0;m.sort(IM);for(let R=0,A=m.length;R<A;R++){const B=m[R],re=B.color,Z=B.intensity,de=B.distance,ue=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)S+=re.r*Z,y+=re.g*Z,_+=re.b*Z;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(B.sh.coefficients[oe],Z);k++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ae=B.shadow,H=n.get(B);H.shadowIntensity=ae.intensity,H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=ue,r.directionalShadowMatrix[M]=B.shadow.matrix,L++}r.directional[M]=oe,M++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(re).multiplyScalar(Z),oe.distance=de,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,r.spot[w]=oe;const ae=B.shadow;if(B.map&&(r.spotLightMap[W]=B.map,W++,ae.updateMatrices(B),B.castShadow&&I++),r.spotLightMatrix[w]=ae.matrix,B.castShadow){const H=n.get(B);H.shadowIntensity=ae.intensity,H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,r.spotShadow[w]=H,r.spotShadowMap[w]=ue,P++}w++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(re).multiplyScalar(Z),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),r.rectArea[v]=oe,v++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ae=B.shadow,H=n.get(B);H.shadowIntensity=ae.intensity,H.shadowBias=ae.bias,H.shadowNormalBias=ae.normalBias,H.shadowRadius=ae.radius,H.shadowMapSize=ae.mapSize,H.shadowCameraNear=ae.camera.near,H.shadowCameraFar=ae.camera.far,r.pointShadow[E]=H,r.pointShadowMap[E]=ue,r.pointShadowMatrix[E]=B.shadow.matrix,N++}r.point[E]=oe,E++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(Z),oe.groundColor.copy(B.groundColor).multiplyScalar(Z),r.hemi[x]=oe,x++}}v>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=y,r.ambient[2]=_;const Y=r.hash;(Y.directionalLength!==M||Y.pointLength!==E||Y.spotLength!==w||Y.rectAreaLength!==v||Y.hemiLength!==x||Y.numDirectionalShadows!==L||Y.numPointShadows!==N||Y.numSpotShadows!==P||Y.numSpotMaps!==W||Y.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=w,r.rectArea.length=v,r.point.length=E,r.hemi.length=x,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=P+W-I,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=k,Y.directionalLength=M,Y.pointLength=E,Y.spotLength=w,Y.rectAreaLength=v,Y.hemiLength=x,Y.numDirectionalShadows=L,Y.numPointShadows=N,Y.numSpotShadows=P,Y.numSpotMaps=W,Y.numLightProbes=k,r.version=DM++)}function p(m,S){let y=0,_=0,M=0,E=0,w=0;const v=S.matrixWorldInverse;for(let x=0,L=m.length;x<L;x++){const N=m[x];if(N.isDirectionalLight){const P=r.directional[y];P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(v),y++}else if(N.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(v),P.direction.setFromMatrixPosition(N.matrixWorld),o.setFromMatrixPosition(N.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(v),M++}else if(N.isRectAreaLight){const P=r.rectArea[E];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(v),d.identity(),c.copy(N.matrixWorld),c.premultiply(v),d.extractRotation(c),P.halfWidth.set(N.width*.5,0,0),P.halfHeight.set(0,N.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),E++}else if(N.isPointLight){const P=r.point[_];P.position.setFromMatrixPosition(N.matrixWorld),P.position.applyMatrix4(v),_++}else if(N.isHemisphereLight){const P=r.hemi[w];P.direction.setFromMatrixPosition(N.matrixWorld),P.direction.transformDirection(v),w++}}}return{setup:f,setupView:p,state:r}}function lm(s){const e=new UM(s),n=[],r=[];function o(S){m.camera=S,n.length=0,r.length=0}function c(S){n.push(S)}function d(S){r.push(S)}function f(){e.setup(n)}function p(S){e.setupView(n,S)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:d}}function FM(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new lm(s),e.set(o,[f])):c>=d.length?(f=new lm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}class OM extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kM extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function HM(s,e,n){let r=new Jm;const o=new Et,c=new Et,d=new rn,f=new OM({depthPacking:Iv}),p=new kM,m={},S=n.maxTextureSize,y={[gr]:wn,[wn]:gr,[Ni]:Ni},_=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:zM,fragmentShader:BM}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new Fi;E.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Di(E,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let x=this.type;this.render=function(I,k,Y){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;const R=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),re=s.state;re.setBlending(pr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const Z=x!==bi&&this.type===bi,de=x===bi&&this.type!==bi;for(let ue=0,oe=I.length;ue<oe;ue++){const ae=I[ue],H=ae.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const le=H.getFrameExtents();if(o.multiply(le),c.copy(H.mapSize),(o.x>S||o.y>S)&&(o.x>S&&(c.x=Math.floor(S/le.x),o.x=c.x*le.x,H.mapSize.x=c.x),o.y>S&&(c.y=Math.floor(S/le.y),o.y=c.y*le.y,H.mapSize.y=c.y)),H.map===null||Z===!0||de===!0){const O=this.type!==bi?{minFilter:Xn,magFilter:Xn}:{};H.map!==null&&H.map.dispose(),H.map=new Yr(o.x,o.y,O),H.map.texture.name=ae.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const se=H.getViewportCount();for(let O=0;O<se;O++){const ne=H.getViewport(O);d.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),re.viewport(d),H.updateMatrices(ae,O),r=H.getFrustum(),P(k,Y,H.camera,ae,this.type)}H.isPointLightShadow!==!0&&this.type===bi&&L(H,Y),H.needsUpdate=!1}x=this.type,v.needsUpdate=!1,s.setRenderTarget(R,A,B)};function L(I,k){const Y=e.update(w);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Yr(o.x,o.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(k,null,Y,_,w,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(k,null,Y,M,w,null)}function N(I,k,Y,R){let A=null;const B=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(B!==void 0)A=B;else if(A=Y.isPointLight===!0?p:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0){const re=A.uuid,Z=k.uuid;let de=m[re];de===void 0&&(de={},m[re]=de);let ue=de[Z];ue===void 0&&(ue=A.clone(),de[Z]=ue,k.addEventListener("dispose",W)),A=ue}if(A.visible=k.visible,A.wireframe=k.wireframe,R===bi?A.side=k.shadowSide!==null?k.shadowSide:k.side:A.side=k.shadowSide!==null?k.shadowSide:y[k.side],A.alphaMap=k.alphaMap,A.alphaTest=k.alphaTest,A.map=k.map,A.clipShadows=k.clipShadows,A.clippingPlanes=k.clippingPlanes,A.clipIntersection=k.clipIntersection,A.displacementMap=k.displacementMap,A.displacementScale=k.displacementScale,A.displacementBias=k.displacementBias,A.wireframeLinewidth=k.wireframeLinewidth,A.linewidth=k.linewidth,Y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const re=s.properties.get(A);re.light=Y}return A}function P(I,k,Y,R,A){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&A===bi)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);const Z=e.update(I),de=I.material;if(Array.isArray(de)){const ue=Z.groups;for(let oe=0,ae=ue.length;oe<ae;oe++){const H=ue[oe],le=de[H.materialIndex];if(le&&le.visible){const se=N(I,le,R,A);I.onBeforeShadow(s,I,k,Y,Z,se,H),s.renderBufferDirect(Y,null,Z,se,I,H),I.onAfterShadow(s,I,k,Y,Z,se,H)}}}else if(de.visible){const ue=N(I,de,R,A);I.onBeforeShadow(s,I,k,Y,Z,ue,null),s.renderBufferDirect(Y,null,Z,ue,I,null),I.onAfterShadow(s,I,k,Y,Z,ue,null)}}const re=I.children;for(let Z=0,de=re.length;Z<de;Z++)P(re[Z],k,Y,R,A)}function W(I){I.target.removeEventListener("dispose",W);for(const Y in m){const R=m[Y],A=I.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function VM(s){function e(){let G=!1;const we=new rn;let fe=null;const he=new rn(0,0,0,0);return{setMask:function(Ae){fe!==Ae&&!G&&(s.colorMask(Ae,Ae,Ae,Ae),fe=Ae)},setLocked:function(Ae){G=Ae},setClear:function(Ae,tt,gt,Ot,Vt){Vt===!0&&(Ae*=Ot,tt*=Ot,gt*=Ot),we.set(Ae,tt,gt,Ot),he.equals(we)===!1&&(s.clearColor(Ae,tt,gt,Ot),he.copy(we))},reset:function(){G=!1,fe=null,he.set(-1,0,0,0)}}}function n(){let G=!1,we=null,fe=null,he=null;return{setTest:function(Ae){Ae?_e(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(Ae){we!==Ae&&!G&&(s.depthMask(Ae),we=Ae)},setFunc:function(Ae){if(fe!==Ae){switch(Ae){case gv:s.depthFunc(s.NEVER);break;case vv:s.depthFunc(s.ALWAYS);break;case xv:s.depthFunc(s.LESS);break;case El:s.depthFunc(s.LEQUAL);break;case _v:s.depthFunc(s.EQUAL);break;case yv:s.depthFunc(s.GEQUAL);break;case Sv:s.depthFunc(s.GREATER);break;case Mv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Ae}},setLocked:function(Ae){G=Ae},setClear:function(Ae){he!==Ae&&(s.clearDepth(Ae),he=Ae)},reset:function(){G=!1,we=null,fe=null,he=null}}}function r(){let G=!1,we=null,fe=null,he=null,Ae=null,tt=null,gt=null,Ot=null,Vt=null;return{setTest:function(xt){G||(xt?_e(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(xt){we!==xt&&!G&&(s.stencilMask(xt),we=xt)},setFunc:function(xt,Rn,bn){(fe!==xt||he!==Rn||Ae!==bn)&&(s.stencilFunc(xt,Rn,bn),fe=xt,he=Rn,Ae=bn)},setOp:function(xt,Rn,bn){(tt!==xt||gt!==Rn||Ot!==bn)&&(s.stencilOp(xt,Rn,bn),tt=xt,gt=Rn,Ot=bn)},setLocked:function(xt){G=xt},setClear:function(xt){Vt!==xt&&(s.clearStencil(xt),Vt=xt)},reset:function(){G=!1,we=null,fe=null,he=null,Ae=null,tt=null,gt=null,Ot=null,Vt=null}}}const o=new e,c=new n,d=new r,f=new WeakMap,p=new WeakMap;let m={},S={},y=new WeakMap,_=[],M=null,E=!1,w=null,v=null,x=null,L=null,N=null,P=null,W=null,I=new Ct(0,0,0),k=0,Y=!1,R=null,A=null,B=null,re=null,Z=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ue=!1,oe=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ae)[1]),ue=oe>=1):ae.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),ue=oe>=2);let H=null,le={};const se=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),ne=new rn().fromArray(se),De=new rn().fromArray(O);function K(G,we,fe,he){const Ae=new Uint8Array(4),tt=s.createTexture();s.bindTexture(G,tt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let gt=0;gt<fe;gt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(we+gt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return tt}const ce={};ce[s.TEXTURE_2D]=K(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=K(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=K(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=K(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),d.setClear(0),_e(s.DEPTH_TEST),c.setFunc(El),Ye(!1),ze(pp),_e(s.CULL_FACE),Le(pr);function _e(G){m[G]!==!0&&(s.enable(G),m[G]=!0)}function Me(G){m[G]!==!1&&(s.disable(G),m[G]=!1)}function be(G,we){return S[G]!==we?(s.bindFramebuffer(G,we),S[G]=we,G===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=we),G===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=we),!0):!1}function ke(G,we){let fe=_,he=!1;if(G){fe=y.get(we),fe===void 0&&(fe=[],y.set(we,fe));const Ae=G.textures;if(fe.length!==Ae.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,gt=Ae.length;tt<gt;tt++)fe[tt]=s.COLOR_ATTACHMENT0+tt;fe.length=Ae.length,he=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,he=!0);he&&s.drawBuffers(fe)}function $e(G){return M!==G?(s.useProgram(G),M=G,!0):!1}const xe={[Hr]:s.FUNC_ADD,[J0]:s.FUNC_SUBTRACT,[ev]:s.FUNC_REVERSE_SUBTRACT};xe[tv]=s.MIN,xe[nv]=s.MAX;const D={[iv]:s.ZERO,[rv]:s.ONE,[sv]:s.SRC_COLOR,[Wu]:s.SRC_ALPHA,[dv]:s.SRC_ALPHA_SATURATE,[cv]:s.DST_COLOR,[ov]:s.DST_ALPHA,[av]:s.ONE_MINUS_SRC_COLOR,[Xu]:s.ONE_MINUS_SRC_ALPHA,[uv]:s.ONE_MINUS_DST_COLOR,[lv]:s.ONE_MINUS_DST_ALPHA,[fv]:s.CONSTANT_COLOR,[hv]:s.ONE_MINUS_CONSTANT_COLOR,[pv]:s.CONSTANT_ALPHA,[mv]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(G,we,fe,he,Ae,tt,gt,Ot,Vt,xt){if(G===pr){E===!0&&(Me(s.BLEND),E=!1);return}if(E===!1&&(_e(s.BLEND),E=!0),G!==Q0){if(G!==w||xt!==Y){if((v!==Hr||N!==Hr)&&(s.blendEquation(s.FUNC_ADD),v=Hr,N=Hr),xt)switch(G){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mp:s.blendFunc(s.ONE,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}x=null,L=null,P=null,W=null,I.set(0,0,0),k=0,w=G,Y=xt}return}Ae=Ae||we,tt=tt||fe,gt=gt||he,(we!==v||Ae!==N)&&(s.blendEquationSeparate(xe[we],xe[Ae]),v=we,N=Ae),(fe!==x||he!==L||tt!==P||gt!==W)&&(s.blendFuncSeparate(D[fe],D[he],D[tt],D[gt]),x=fe,L=he,P=tt,W=gt),(Ot.equals(I)===!1||Vt!==k)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Vt),I.copy(Ot),k=Vt),w=G,Y=!1}function Ge(G,we){G.side===Ni?Me(s.CULL_FACE):_e(s.CULL_FACE);let fe=G.side===wn;we&&(fe=!fe),Ye(fe),G.blending===Us&&G.transparent===!1?Le(pr):Le(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const he=G.stencilWrite;d.setTest(he),he&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),et(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function ze(G){G!==$0?(_e(s.CULL_FACE),G!==A&&(G===pp?s.cullFace(s.BACK):G===K0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),A=G}function yt(G){G!==B&&(ue&&s.lineWidth(G),B=G)}function et(G,we,fe){G?(_e(s.POLYGON_OFFSET_FILL),(re!==we||Z!==fe)&&(s.polygonOffset(we,fe),re=we,Z=fe)):Me(s.POLYGON_OFFSET_FILL)}function at(G){G?_e(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function F(G){G===void 0&&(G=s.TEXTURE0+de-1),H!==G&&(s.activeTexture(G),H=G)}function C(G,we,fe){fe===void 0&&(H===null?fe=s.TEXTURE0+de-1:fe=H);let he=le[fe];he===void 0&&(he={type:void 0,texture:void 0},le[fe]=he),(he.type!==G||he.texture!==we)&&(H!==fe&&(s.activeTexture(fe),H=fe),s.bindTexture(G,we||ce[G]),he.type=G,he.texture=we)}function ee(){const G=le[H];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ge(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function pe(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ie(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function rt(G){ne.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ne.copy(G))}function Be(G){De.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),De.copy(G))}function lt(G,we){let fe=p.get(we);fe===void 0&&(fe=new WeakMap,p.set(we,fe));let he=fe.get(G);he===void 0&&(he=s.getUniformBlockIndex(we,G.name),fe.set(G,he))}function ut(G,we){const he=p.get(we).get(G);f.get(we)!==he&&(s.uniformBlockBinding(we,he,G.__bindingPointIndex),f.set(we,he))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},H=null,le={},S={},y=new WeakMap,_=[],M=null,E=!1,w=null,v=null,x=null,L=null,N=null,P=null,W=null,I=new Ct(0,0,0),k=0,Y=!1,R=null,A=null,B=null,re=null,Z=null,ne.set(0,0,s.canvas.width,s.canvas.height),De.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),d.reset()}return{buffers:{color:o,depth:c,stencil:d},enable:_e,disable:Me,bindFramebuffer:be,drawBuffers:ke,useProgram:$e,setBlending:Le,setMaterial:Ge,setFlipSided:Ye,setCullFace:ze,setLineWidth:yt,setPolygonOffset:et,setScissorTest:at,activeTexture:F,bindTexture:C,unbindTexture:ee,compressedTexImage2D:ge,compressedTexImage3D:ye,texImage2D:Ie,texImage3D:mt,updateUBOMapping:lt,uniformBlockBinding:ut,texStorage2D:ct,texStorage3D:Ee,texSubImage2D:pe,texSubImage3D:Ke,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Oe,scissor:rt,viewport:Be,reset:Rt}}function cm(s,e,n,r){const o=GM(r);switch(n){case Lm:return s*e;case Im:return s*e;case Um:return s*e*2;case Fm:return s*e/o.components*o.byteLength;case Pd:return s*e/o.components*o.byteLength;case Om:return s*e*2/o.components*o.byteLength;case Ld:return s*e*2/o.components*o.byteLength;case Dm:return s*e*3/o.components*o.byteLength;case ri:return s*e*4/o.components*o.byteLength;case Dd:return s*e*4/o.components*o.byteLength;case vl:case xl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case _l:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qu:case ed:return Math.max(s,16)*Math.max(e,8)/4;case Zu:case Ju:return Math.max(s,8)*Math.max(e,8)/2;case td:case nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sl:case xd:case _d:return Math.ceil(s/4)*Math.ceil(e/4)*16;case km:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sd:case Md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GM(s){switch(s){case Ii:case bm:return{byteLength:1,components:1};case Pa:case Nm:case La:return{byteLength:2,components:1};case bd:case Nd:return{byteLength:2,components:4};case Xr:case Rd:case Pi:return{byteLength:4,components:1};case Pm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function jM(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Et,S=new WeakMap;let y;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,C){return M?new OffscreenCanvas(F,C):Rl("canvas")}function w(F,C,ee){let ge=1;const ye=at(F);if((ye.width>ee||ye.height>ee)&&(ge=ee/Math.max(ye.width,ye.height)),ge<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const pe=Math.floor(ge*ye.width),Ke=Math.floor(ge*ye.height);y===void 0&&(y=E(pe,Ke));const Ne=C?E(pe,Ke):y;return Ne.width=pe,Ne.height=Ke,Ne.getContext("2d").drawImage(F,0,0,pe,Ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+pe+"x"+Ke+")."),Ne}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),F;return F}function v(F){return F.generateMipmaps&&F.minFilter!==Xn&&F.minFilter!==ii}function x(F){s.generateMipmap(F)}function L(F,C,ee,ge,ye=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let pe=C;if(C===s.RED&&(ee===s.FLOAT&&(pe=s.R32F),ee===s.HALF_FLOAT&&(pe=s.R16F),ee===s.UNSIGNED_BYTE&&(pe=s.R8)),C===s.RED_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.R8UI),ee===s.UNSIGNED_SHORT&&(pe=s.R16UI),ee===s.UNSIGNED_INT&&(pe=s.R32UI),ee===s.BYTE&&(pe=s.R8I),ee===s.SHORT&&(pe=s.R16I),ee===s.INT&&(pe=s.R32I)),C===s.RG&&(ee===s.FLOAT&&(pe=s.RG32F),ee===s.HALF_FLOAT&&(pe=s.RG16F),ee===s.UNSIGNED_BYTE&&(pe=s.RG8)),C===s.RG_INTEGER&&(ee===s.UNSIGNED_BYTE&&(pe=s.RG8UI),ee===s.UNSIGNED_SHORT&&(pe=s.RG16UI),ee===s.UNSIGNED_INT&&(pe=s.RG32UI),ee===s.BYTE&&(pe=s.RG8I),ee===s.SHORT&&(pe=s.RG16I),ee===s.INT&&(pe=s.RG32I)),C===s.RGB&&ee===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),C===s.RGBA){const Ke=ye?Tl:At.getTransfer(ge);ee===s.FLOAT&&(pe=s.RGBA32F),ee===s.HALF_FLOAT&&(pe=s.RGBA16F),ee===s.UNSIGNED_BYTE&&(pe=Ke===It?s.SRGB8_ALPHA8:s.RGBA8),ee===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),ee===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(F,C){let ee;return F?C===null||C===Xr||C===Bs?ee=s.DEPTH24_STENCIL8:C===Pi?ee=s.DEPTH32F_STENCIL8:C===Pa&&(ee=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Xr||C===Bs?ee=s.DEPTH_COMPONENT24:C===Pi?ee=s.DEPTH_COMPONENT32F:C===Pa&&(ee=s.DEPTH_COMPONENT16),ee}function P(F,C){return v(F)===!0||F.isFramebufferTexture&&F.minFilter!==Xn&&F.minFilter!==ii?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function W(F){const C=F.target;C.removeEventListener("dispose",W),k(C),C.isVideoTexture&&S.delete(C)}function I(F){const C=F.target;C.removeEventListener("dispose",I),R(C)}function k(F){const C=r.get(F);if(C.__webglInit===void 0)return;const ee=F.source,ge=_.get(ee);if(ge){const ye=ge[C.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&Y(F),Object.keys(ge).length===0&&_.delete(ee)}r.remove(F)}function Y(F){const C=r.get(F);s.deleteTexture(C.__webglTexture);const ee=F.source,ge=_.get(ee);delete ge[C.__cacheKey],d.memory.textures--}function R(F){const C=r.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(C.__webglFramebuffer[ge]))for(let ye=0;ye<C.__webglFramebuffer[ge].length;ye++)s.deleteFramebuffer(C.__webglFramebuffer[ge][ye]);else s.deleteFramebuffer(C.__webglFramebuffer[ge]);C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer[ge])}else{if(Array.isArray(C.__webglFramebuffer))for(let ge=0;ge<C.__webglFramebuffer.length;ge++)s.deleteFramebuffer(C.__webglFramebuffer[ge]);else s.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&s.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&s.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ge=0;ge<C.__webglColorRenderbuffer.length;ge++)C.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(C.__webglColorRenderbuffer[ge]);C.__webglDepthRenderbuffer&&s.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const ee=F.textures;for(let ge=0,ye=ee.length;ge<ye;ge++){const pe=r.get(ee[ge]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),d.memory.textures--),r.remove(ee[ge])}r.remove(F)}let A=0;function B(){A=0}function re(){const F=A;return F>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+o.maxTextures),A+=1,F}function Z(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function de(F,C){const ee=r.get(F);if(F.isVideoTexture&&yt(F),F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){const ge=F.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(ee,F,C);return}}n.bindTexture(s.TEXTURE_2D,ee.__webglTexture,s.TEXTURE0+C)}function ue(F,C){const ee=r.get(F);if(F.version>0&&ee.__version!==F.version){De(ee,F,C);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ee.__webglTexture,s.TEXTURE0+C)}function oe(F,C){const ee=r.get(F);if(F.version>0&&ee.__version!==F.version){De(ee,F,C);return}n.bindTexture(s.TEXTURE_3D,ee.__webglTexture,s.TEXTURE0+C)}function ae(F,C){const ee=r.get(F);if(F.version>0&&ee.__version!==F.version){K(ee,F,C);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture,s.TEXTURE0+C)}const H={[$u]:s.REPEAT,[Gr]:s.CLAMP_TO_EDGE,[Ku]:s.MIRRORED_REPEAT},le={[Xn]:s.NEAREST,[Lv]:s.NEAREST_MIPMAP_NEAREST,[Wo]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[vu]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},se={[Ov]:s.NEVER,[Gv]:s.ALWAYS,[kv]:s.LESS,[zm]:s.LEQUAL,[zv]:s.EQUAL,[Vv]:s.GEQUAL,[Bv]:s.GREATER,[Hv]:s.NOTEQUAL};function O(F,C){if(C.type===Pi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===ii||C.magFilter===vu||C.magFilter===Wo||C.magFilter===jr||C.minFilter===ii||C.minFilter===vu||C.minFilter===Wo||C.minFilter===jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,H[C.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,H[C.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,H[C.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,le[C.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,le[C.minFilter]),C.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,se[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Xn||C.minFilter!==Wo&&C.minFilter!==jr||C.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||r.get(C).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,o.getMaxAnisotropy())),r.get(C).__currentAnisotropy=C.anisotropy}}}function ne(F,C){let ee=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",W));const ge=C.source;let ye=_.get(ge);ye===void 0&&(ye={},_.set(ge,ye));const pe=Z(C);if(pe!==F.__cacheKey){ye[pe]===void 0&&(ye[pe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ee=!0),ye[pe].usedTimes++;const Ke=ye[F.__cacheKey];Ke!==void 0&&(ye[F.__cacheKey].usedTimes--,Ke.usedTimes===0&&Y(C)),F.__cacheKey=pe,F.__webglTexture=ye[pe].texture}return ee}function De(F,C,ee){let ge=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ge=s.TEXTURE_3D);const ye=ne(F,C),pe=C.source;n.bindTexture(ge,F.__webglTexture,s.TEXTURE0+ee);const Ke=r.get(pe);if(pe.version!==Ke.__version||ye===!0){n.activeTexture(s.TEXTURE0+ee);const Ne=At.getPrimaries(At.workingColorSpace),Oe=C.colorSpace===hr?null:At.getPrimaries(C.colorSpace),ct=C.colorSpace===hr||Ne===Oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Ee=w(C.image,!1,o.maxTextureSize);Ee=et(C,Ee);const Ie=c.convert(C.format,C.colorSpace),mt=c.convert(C.type);let rt=L(C.internalFormat,Ie,mt,C.colorSpace,C.isVideoTexture);O(ge,C);let Be;const lt=C.mipmaps,ut=C.isVideoTexture!==!0,Rt=Ke.__version===void 0||ye===!0,G=pe.dataReady,we=P(C,Ee);if(C.isDepthTexture)rt=N(C.format===Hs,C.type),Rt&&(ut?n.texStorage2D(s.TEXTURE_2D,1,rt,Ee.width,Ee.height):n.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Ie,mt,null));else if(C.isDataTexture)if(lt.length>0){ut&&Rt&&n.texStorage2D(s.TEXTURE_2D,we,rt,lt[0].width,lt[0].height);for(let fe=0,he=lt.length;fe<he;fe++)Be=lt[fe],ut?G&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Be.width,Be.height,Ie,mt,Be.data):n.texImage2D(s.TEXTURE_2D,fe,rt,Be.width,Be.height,0,Ie,mt,Be.data);C.generateMipmaps=!1}else ut?(Rt&&n.texStorage2D(s.TEXTURE_2D,we,rt,Ee.width,Ee.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Ie,mt,Ee.data)):n.texImage2D(s.TEXTURE_2D,0,rt,Ee.width,Ee.height,0,Ie,mt,Ee.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){ut&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,rt,lt[0].width,lt[0].height,Ee.depth);for(let fe=0,he=lt.length;fe<he;fe++)if(Be=lt[fe],C.format!==ri)if(Ie!==null)if(ut){if(G)if(C.layerUpdates.size>0){const Ae=cm(Be.width,Be.height,C.format,C.type);for(const tt of C.layerUpdates){const gt=Be.data.subarray(tt*Ae/Be.data.BYTES_PER_ELEMENT,(tt+1)*Ae/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,tt,Be.width,Be.height,1,Ie,gt,0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Be.width,Be.height,Ee.depth,Ie,Be.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,fe,rt,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,fe,0,0,0,Be.width,Be.height,Ee.depth,Ie,mt,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,fe,rt,Be.width,Be.height,Ee.depth,0,Ie,mt,Be.data)}else{ut&&Rt&&n.texStorage2D(s.TEXTURE_2D,we,rt,lt[0].width,lt[0].height);for(let fe=0,he=lt.length;fe<he;fe++)Be=lt[fe],C.format!==ri?Ie!==null?ut?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,fe,0,0,Be.width,Be.height,Ie,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,fe,rt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?G&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Be.width,Be.height,Ie,mt,Be.data):n.texImage2D(s.TEXTURE_2D,fe,rt,Be.width,Be.height,0,Ie,mt,Be.data)}else if(C.isDataArrayTexture)if(ut){if(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,rt,Ee.width,Ee.height,Ee.depth),G)if(C.layerUpdates.size>0){const fe=cm(Ee.width,Ee.height,C.format,C.type);for(const he of C.layerUpdates){const Ae=Ee.data.subarray(he*fe/Ee.data.BYTES_PER_ELEMENT,(he+1)*fe/Ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Ee.width,Ee.height,1,Ie,mt,Ae)}C.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,mt,Ee.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,rt,Ee.width,Ee.height,Ee.depth,0,Ie,mt,Ee.data);else if(C.isData3DTexture)ut?(Rt&&n.texStorage3D(s.TEXTURE_3D,we,rt,Ee.width,Ee.height,Ee.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Ie,mt,Ee.data)):n.texImage3D(s.TEXTURE_3D,0,rt,Ee.width,Ee.height,Ee.depth,0,Ie,mt,Ee.data);else if(C.isFramebufferTexture){if(Rt)if(ut)n.texStorage2D(s.TEXTURE_2D,we,rt,Ee.width,Ee.height);else{let fe=Ee.width,he=Ee.height;for(let Ae=0;Ae<we;Ae++)n.texImage2D(s.TEXTURE_2D,Ae,rt,fe,he,0,Ie,mt,null),fe>>=1,he>>=1}}else if(lt.length>0){if(ut&&Rt){const fe=at(lt[0]);n.texStorage2D(s.TEXTURE_2D,we,rt,fe.width,fe.height)}for(let fe=0,he=lt.length;fe<he;fe++)Be=lt[fe],ut?G&&n.texSubImage2D(s.TEXTURE_2D,fe,0,0,Ie,mt,Be):n.texImage2D(s.TEXTURE_2D,fe,rt,Ie,mt,Be);C.generateMipmaps=!1}else if(ut){if(Rt){const fe=at(Ee);n.texStorage2D(s.TEXTURE_2D,we,rt,fe.width,fe.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,mt,Ee)}else n.texImage2D(s.TEXTURE_2D,0,rt,Ie,mt,Ee);v(C)&&x(ge),Ke.__version=pe.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function K(F,C,ee){if(C.image.length!==6)return;const ge=ne(F,C),ye=C.source;n.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+ee);const pe=r.get(ye);if(ye.version!==pe.__version||ge===!0){n.activeTexture(s.TEXTURE0+ee);const Ke=At.getPrimaries(At.workingColorSpace),Ne=C.colorSpace===hr?null:At.getPrimaries(C.colorSpace),Oe=C.colorSpace===hr||Ke===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const ct=C.isCompressedTexture||C.image[0].isCompressedTexture,Ee=C.image[0]&&C.image[0].isDataTexture,Ie=[];for(let he=0;he<6;he++)!ct&&!Ee?Ie[he]=w(C.image[he],!0,o.maxCubemapSize):Ie[he]=Ee?C.image[he].image:C.image[he],Ie[he]=et(C,Ie[he]);const mt=Ie[0],rt=c.convert(C.format,C.colorSpace),Be=c.convert(C.type),lt=L(C.internalFormat,rt,Be,C.colorSpace),ut=C.isVideoTexture!==!0,Rt=pe.__version===void 0||ge===!0,G=ye.dataReady;let we=P(C,mt);O(s.TEXTURE_CUBE_MAP,C);let fe;if(ct){ut&&Rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,we,lt,mt.width,mt.height);for(let he=0;he<6;he++){fe=Ie[he].mipmaps;for(let Ae=0;Ae<fe.length;Ae++){const tt=fe[Ae];C.format!==ri?rt!==null?ut?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,tt.width,tt.height,rt,tt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,lt,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ut?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,tt.width,tt.height,rt,Be,tt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,lt,tt.width,tt.height,0,rt,Be,tt.data)}}}else{if(fe=C.mipmaps,ut&&Rt){fe.length>0&&we++;const he=at(Ie[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,we,lt,he.width,he.height)}for(let he=0;he<6;he++)if(Ee){ut?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ie[he].width,Ie[he].height,rt,Be,Ie[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,lt,Ie[he].width,Ie[he].height,0,rt,Be,Ie[he].data);for(let Ae=0;Ae<fe.length;Ae++){const gt=fe[Ae].image[he].image;ut?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,gt.width,gt.height,rt,Be,gt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,lt,gt.width,gt.height,0,rt,Be,gt.data)}}else{ut?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,rt,Be,Ie[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,lt,rt,Be,Ie[he]);for(let Ae=0;Ae<fe.length;Ae++){const tt=fe[Ae];ut?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,rt,Be,tt.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,lt,rt,Be,tt.image[he])}}}v(C)&&x(s.TEXTURE_CUBE_MAP),pe.__version=ye.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function ce(F,C,ee,ge,ye,pe){const Ke=c.convert(ee.format,ee.colorSpace),Ne=c.convert(ee.type),Oe=L(ee.internalFormat,Ke,Ne,ee.colorSpace);if(!r.get(C).__hasExternalTextures){const Ee=Math.max(1,C.width>>pe),Ie=Math.max(1,C.height>>pe);ye===s.TEXTURE_3D||ye===s.TEXTURE_2D_ARRAY?n.texImage3D(ye,pe,Oe,Ee,Ie,C.depth,0,Ke,Ne,null):n.texImage2D(ye,pe,Oe,Ee,Ie,0,Ke,Ne,null)}n.bindFramebuffer(s.FRAMEBUFFER,F),ze(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,ye,r.get(ee).__webglTexture,0,Ye(C)):(ye===s.TEXTURE_2D||ye>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,ye,r.get(ee).__webglTexture,pe),n.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(F,C,ee){if(s.bindRenderbuffer(s.RENDERBUFFER,F),C.depthBuffer){const ge=C.depthTexture,ye=ge&&ge.isDepthTexture?ge.type:null,pe=N(C.stencilBuffer,ye),Ke=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=Ye(C);ze(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,pe,C.width,C.height):ee?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,pe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,pe,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,F)}else{const ge=C.textures;for(let ye=0;ye<ge.length;ye++){const pe=ge[ye],Ke=c.convert(pe.format,pe.colorSpace),Ne=c.convert(pe.type),Oe=L(pe.internalFormat,Ke,Ne,pe.colorSpace),ct=Ye(C);ee&&ze(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Oe,C.width,C.height):ze(C)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Oe,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,Oe,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Me(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),de(C.depthTexture,0);const ge=r.get(C.depthTexture).__webglTexture,ye=Ye(C);if(C.depthTexture.format===Fs)ze(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(C.depthTexture.format===Hs)ze(C)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function be(F){const C=r.get(F),ee=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(ee)throw new Error("target.depthTexture not supported in Cube render targets");Me(C.__webglFramebuffer,F)}else if(ee){C.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[ge]),C.__webglDepthbuffer[ge]=s.createRenderbuffer(),_e(C.__webglDepthbuffer[ge],F,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),_e(C.__webglDepthbuffer,F,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(F,C,ee){const ge=r.get(F);C!==void 0&&ce(ge.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ee!==void 0&&be(F)}function $e(F){const C=F.texture,ee=r.get(F),ge=r.get(C);F.addEventListener("dispose",I);const ye=F.textures,pe=F.isWebGLCubeRenderTarget===!0,Ke=ye.length>1;if(Ke||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=C.version,d.memory.textures++),pe){ee.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0){ee.__webglFramebuffer[Ne]=[];for(let Oe=0;Oe<C.mipmaps.length;Oe++)ee.__webglFramebuffer[Ne][Oe]=s.createFramebuffer()}else ee.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){ee.__webglFramebuffer=[];for(let Ne=0;Ne<C.mipmaps.length;Ne++)ee.__webglFramebuffer[Ne]=s.createFramebuffer()}else ee.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ne=0,Oe=ye.length;Ne<Oe;Ne++){const ct=r.get(ye[Ne]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),d.memory.textures++)}if(F.samples>0&&ze(F)===!1){ee.__webglMultisampledFramebuffer=s.createFramebuffer(),ee.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let Ne=0;Ne<ye.length;Ne++){const Oe=ye[Ne];ee.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ne]);const ct=c.convert(Oe.format,Oe.colorSpace),Ee=c.convert(Oe.type),Ie=L(Oe.internalFormat,ct,Ee,Oe.colorSpace,F.isXRRenderTarget===!0),mt=Ye(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,Ie,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,ee.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(ee.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(ee.__webglDepthRenderbuffer,F,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){n.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),O(s.TEXTURE_CUBE_MAP,C);for(let Ne=0;Ne<6;Ne++)if(C.mipmaps&&C.mipmaps.length>0)for(let Oe=0;Oe<C.mipmaps.length;Oe++)ce(ee.__webglFramebuffer[Ne][Oe],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Oe);else ce(ee.__webglFramebuffer[Ne],F,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);v(C)&&x(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ke){for(let Ne=0,Oe=ye.length;Ne<Oe;Ne++){const ct=ye[Ne],Ee=r.get(ct);n.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),O(s.TEXTURE_2D,ct),ce(ee.__webglFramebuffer,F,ct,s.COLOR_ATTACHMENT0+Ne,s.TEXTURE_2D,0),v(ct)&&x(s.TEXTURE_2D)}n.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ne,ge.__webglTexture),O(Ne,C),C.mipmaps&&C.mipmaps.length>0)for(let Oe=0;Oe<C.mipmaps.length;Oe++)ce(ee.__webglFramebuffer[Oe],F,C,s.COLOR_ATTACHMENT0,Ne,Oe);else ce(ee.__webglFramebuffer,F,C,s.COLOR_ATTACHMENT0,Ne,0);v(C)&&x(Ne),n.unbindTexture()}F.depthBuffer&&be(F)}function xe(F){const C=F.textures;for(let ee=0,ge=C.length;ee<ge;ee++){const ye=C[ee];if(v(ye)){const pe=F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ke=r.get(ye).__webglTexture;n.bindTexture(pe,Ke),x(pe),n.unbindTexture()}}}const D=[],Le=[];function Ge(F){if(F.samples>0){if(ze(F)===!1){const C=F.textures,ee=F.width,ge=F.height;let ye=s.COLOR_BUFFER_BIT;const pe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(F),Ne=C.length>1;if(Ne)for(let Oe=0;Oe<C.length;Oe++)n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let Oe=0;Oe<C.length;Oe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ye|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ye|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Oe]);const ct=r.get(C[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,ee,ge,0,0,ee,ge,ye,s.NEAREST),p===!0&&(D.length=0,Le.length=0,D.push(s.COLOR_ATTACHMENT0+Oe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(D.push(pe),Le.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let Oe=0;Oe<C.length;Oe++){n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[Oe]);const ct=r.get(C[Oe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,ct,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const C=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[C])}}}function Ye(F){return Math.min(o.maxSamples,F.samples)}function ze(F){const C=r.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function yt(F){const C=d.render.frame;S.get(F)!==C&&(S.set(F,C),F.update())}function et(F,C){const ee=F.colorSpace,ge=F.format,ye=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ee!==xr&&ee!==hr&&(At.getTransfer(ee)===It?(ge!==ri||ye!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ee)),C}function at(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=B,this.setTexture2D=de,this.setTexture2DArray=ue,this.setTexture3D=oe,this.setTextureCube=ae,this.rebindTextures=ke,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=ze}function WM(s,e){function n(r,o=hr){let c;const d=At.getTransfer(o);if(r===Ii)return s.UNSIGNED_BYTE;if(r===bd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Nd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bm)return s.BYTE;if(r===Nm)return s.SHORT;if(r===Pa)return s.UNSIGNED_SHORT;if(r===Rd)return s.INT;if(r===Xr)return s.UNSIGNED_INT;if(r===Pi)return s.FLOAT;if(r===La)return s.HALF_FLOAT;if(r===Lm)return s.ALPHA;if(r===Dm)return s.RGB;if(r===ri)return s.RGBA;if(r===Im)return s.LUMINANCE;if(r===Um)return s.LUMINANCE_ALPHA;if(r===Fs)return s.DEPTH_COMPONENT;if(r===Hs)return s.DEPTH_STENCIL;if(r===Fm)return s.RED;if(r===Pd)return s.RED_INTEGER;if(r===Om)return s.RG;if(r===Ld)return s.RG_INTEGER;if(r===Dd)return s.RGBA_INTEGER;if(r===vl||r===xl||r===_l||r===yl)if(d===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===vl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_l)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===vl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_l)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zu||r===Qu||r===Ju||r===ed)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zu)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qu)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ju)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===td||r===nd||r===id)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===td||r===nd)return d===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===id)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rd||r===sd||r===ad||r===od||r===ld||r===cd||r===ud||r===dd||r===fd||r===hd||r===pd||r===md||r===gd||r===vd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ad)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===od)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ld)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ud)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===md)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return d===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sl||r===xd||r===_d)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Sl)return d===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===xd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===km||r===yd||r===Sd||r===Md)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Sl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Md)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class XM extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hl extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class ju{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const v=n.getJointPose(w,r),x=this._getHandJoint(m,w);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const S=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],_=S.position.distanceTo(y.position),M=.02,E=.005;m.inputState.pinching&&_>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const qM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$M=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new An,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new vr({vertexShader:qM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new Ll(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends Gs{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",p=1,m=null,S=null,y=null,_=null,M=null,E=null;const w=new KM,v=n.getContextAttributes();let x=null,L=null;const N=[],P=[],W=new Et;let I=null;const k=new Wn;k.layers.enable(1),k.viewport=new rn;const Y=new Wn;Y.layers.enable(2),Y.viewport=new rn;const R=[k,Y],A=new XM;A.layers.enable(1),A.layers.enable(2);let B=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ce=N[K];return ce===void 0&&(ce=new ju,N[K]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(K){let ce=N[K];return ce===void 0&&(ce=new ju,N[K]=ce),ce.getGripSpace()},this.getHand=function(K){let ce=N[K];return ce===void 0&&(ce=new ju,N[K]=ce),ce.getHandSpace()};function Z(K){const ce=P.indexOf(K.inputSource);if(ce===-1)return;const _e=N[ce];_e!==void 0&&(_e.update(K.inputSource,K.frame,m||d),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function de(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",ue);for(let K=0;K<N.length;K++){const ce=P[K];ce!==null&&(P[K]=null,N[K].disconnect(ce))}B=null,re=null,w.reset(),e.setRenderTarget(x),M=null,_=null,y=null,o=null,L=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){f=K,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(K){if(o=K,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",de),o.addEventListener("inputsourceschange",ue),v.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(W),o.renderState.layers===void 0){const ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ce),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new Yr(M.framebufferWidth,M.framebufferHeight,{format:ri,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ce=null,_e=null,Me=null;v.depth&&(Me=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=v.stencil?Hs:Fs,_e=v.stencil?Bs:Xr);const be={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:c};y=new XRWebGLBinding(o,n),_=y.createProjectionLayer(be),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Yr(_.textureWidth,_.textureHeight,{format:ri,type:Ii,depthTexture:new tg(_.textureWidth,_.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function ue(K){for(let ce=0;ce<K.removed.length;ce++){const _e=K.removed[ce],Me=P.indexOf(_e);Me>=0&&(P[Me]=null,N[Me].disconnect(_e))}for(let ce=0;ce<K.added.length;ce++){const _e=K.added[ce];let Me=P.indexOf(_e);if(Me===-1){for(let ke=0;ke<N.length;ke++)if(ke>=P.length){P.push(_e),Me=ke;break}else if(P[ke]===null){P[ke]=_e,Me=ke;break}if(Me===-1)break}const be=N[Me];be&&be.connect(_e)}}const oe=new ie,ae=new ie;function H(K,ce,_e){oe.setFromMatrixPosition(ce.matrixWorld),ae.setFromMatrixPosition(_e.matrixWorld);const Me=oe.distanceTo(ae),be=ce.projectionMatrix.elements,ke=_e.projectionMatrix.elements,$e=be[14]/(be[10]-1),xe=be[14]/(be[10]+1),D=(be[9]+1)/be[5],Le=(be[9]-1)/be[5],Ge=(be[8]-1)/be[0],Ye=(ke[8]+1)/ke[0],ze=$e*Ge,yt=$e*Ye,et=Me/(-Ge+Ye),at=et*-Ge;ce.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(at),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const F=$e+et,C=xe+et,ee=ze-at,ge=yt+(Me-at),ye=D*xe/C*F,pe=Le*xe/C*F;K.projectionMatrix.makePerspective(ee,ge,ye,pe,F,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function le(K,ce){ce===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ce.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(o===null)return;w.texture!==null&&(K.near=w.depthNear,K.far=w.depthFar),A.near=Y.near=k.near=K.near,A.far=Y.far=k.far=K.far,(B!==A.near||re!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,re=A.far,k.near=B,k.far=re,Y.near=B,Y.far=re,k.updateProjectionMatrix(),Y.updateProjectionMatrix(),K.updateProjectionMatrix());const ce=K.parent,_e=A.cameras;le(A,ce);for(let Me=0;Me<_e.length;Me++)le(_e[Me],ce);_e.length===2?H(A,k,Y):A.projectionMatrix.copy(k.projectionMatrix),se(K,A,ce)};function se(K,ce,_e){_e===null?K.matrix.copy(ce.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ce.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ce.projectionMatrix),K.projectionMatrixInverse.copy(ce.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ed*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(_===null&&M===null))return p},this.setFoveation=function(K){p=K,_!==null&&(_.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let O=null;function ne(K,ce){if(S=ce.getViewerPose(m||d),E=ce,S!==null){const _e=S.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let Me=!1;_e.length!==A.cameras.length&&(A.cameras.length=0,Me=!0);for(let ke=0;ke<_e.length;ke++){const $e=_e[ke];let xe=null;if(M!==null)xe=M.getViewport($e);else{const Le=y.getViewSubImage(_,$e);xe=Le.viewport,ke===0&&(e.setRenderTargetTextures(L,Le.colorTexture,_.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(L))}let D=R[ke];D===void 0&&(D=new Wn,D.layers.enable(ke),D.viewport=new rn,R[ke]=D),D.matrix.fromArray($e.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray($e.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(xe.x,xe.y,xe.width,xe.height),ke===0&&(A.matrix.copy(D.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Me===!0&&A.cameras.push(D)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const ke=y.getDepthInformation(_e[0]);ke&&ke.isValid&&ke.texture&&w.init(e,ke,o.renderState)}}for(let _e=0;_e<N.length;_e++){const Me=P[_e],be=N[_e];Me!==null&&be!==void 0&&be.update(Me,ce,m||d)}O&&O(K,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const De=new eg;De.setAnimationLoop(ne),this.setAnimationLoop=function(K){O=K},this.dispose=function(){}}}const kr=new Ui,QM=new Wt;function JM(s,e){function n(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function r(v,x){x.color.getRGB(v.fogColor.value,Km(s)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function o(v,x,L,N,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(v,x):x.isMeshToonMaterial?(c(v,x),y(v,x)):x.isMeshPhongMaterial?(c(v,x),S(v,x)):x.isMeshStandardMaterial?(c(v,x),_(v,x),x.isMeshPhysicalMaterial&&M(v,x,P)):x.isMeshMatcapMaterial?(c(v,x),E(v,x)):x.isMeshDepthMaterial?c(v,x):x.isMeshDistanceMaterial?(c(v,x),w(v,x)):x.isMeshNormalMaterial?c(v,x):x.isLineBasicMaterial?(d(v,x),x.isLineDashedMaterial&&f(v,x)):x.isPointsMaterial?p(v,x,L,N):x.isSpriteMaterial?m(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,n(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,n(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===wn&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,n(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===wn&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,n(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,n(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const L=e.get(x),N=L.envMap,P=L.envMapRotation;N&&(v.envMap.value=N,kr.copy(P),kr.x*=-1,kr.y*=-1,kr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(kr)),v.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,v.aoMapTransform))}function d(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,n(x.map,v.mapTransform))}function f(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function p(v,x,L,N){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*L,v.scale.value=N*.5,x.map&&(v.map.value=x.map,n(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function m(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,n(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,n(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function S(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function y(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function _(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function M(v,x,L){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===wn&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=L.texture,v.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,x){x.matcap&&(v.matcap.value=x.matcap)}function w(v,x){const L=e.get(x).light;v.referencePosition.value.setFromMatrixPosition(L.matrixWorld),v.nearDistance.value=L.shadow.camera.near,v.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function eE(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,N){const P=N.program;r.uniformBlockBinding(L,P)}function m(L,N){let P=o[L.id];P===void 0&&(E(L),P=S(L),o[L.id]=P,L.addEventListener("dispose",v));const W=N.program;r.updateUBOMapping(L,W);const I=e.render.frame;c[L.id]!==I&&(_(L),c[L.id]=I)}function S(L){const N=y();L.__bindingPointIndex=N;const P=s.createBuffer(),W=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,W,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,P),P}function y(){for(let L=0;L<f;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const N=o[L.id],P=L.uniforms,W=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let I=0,k=P.length;I<k;I++){const Y=Array.isArray(P[I])?P[I]:[P[I]];for(let R=0,A=Y.length;R<A;R++){const B=Y[R];if(M(B,I,R,W)===!0){const re=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let ue=0;ue<Z.length;ue++){const oe=Z[ue],ae=w(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,re+de,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,de),de+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,N,P,W){const I=L.value,k=N+"_"+P;if(W[k]===void 0)return typeof I=="number"||typeof I=="boolean"?W[k]=I:W[k]=I.clone(),!0;{const Y=W[k];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return W[k]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function E(L){const N=L.uniforms;let P=0;const W=16;for(let k=0,Y=N.length;k<Y;k++){const R=Array.isArray(N[k])?N[k]:[N[k]];for(let A=0,B=R.length;A<B;A++){const re=R[A],Z=Array.isArray(re.value)?re.value:[re.value];for(let de=0,ue=Z.length;de<ue;de++){const oe=Z[de],ae=w(oe),H=P%W;H!==0&&W-H<ae.boundary&&(P+=W-H),re.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=P,P+=ae.storage}}}const I=P%W;return I>0&&(P+=W-I),L.__size=P,L.__cache={},this}function w(L){const N={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(N.boundary=4,N.storage=4):L.isVector2?(N.boundary=8,N.storage=8):L.isVector3||L.isColor?(N.boundary=16,N.storage=12):L.isVector4?(N.boundary=16,N.storage=16):L.isMatrix3?(N.boundary=48,N.storage=48):L.isMatrix4?(N.boundary=64,N.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),N}function v(L){const N=L.target;N.removeEventListener("dispose",v);const P=d.indexOf(N.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[N.id]),delete o[N.id],delete c[N.id]}function x(){for(const L in o)s.deleteBuffer(o[L]);d=[],o={},c={}}return{bind:p,update:m,dispose:x}}class tE{constructor(e={}){const{canvas:n=Wv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let _;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=r.getContextAttributes().alpha}else _=d;const M=new Uint32Array(4),E=new Int32Array(4);let w=null,v=null;const x=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=mr,this.toneMappingExposure=1;const N=this;let P=!1,W=0,I=0,k=null,Y=-1,R=null;const A=new rn,B=new rn;let re=null;const Z=new Ct(0);let de=0,ue=n.width,oe=n.height,ae=1,H=null,le=null;const se=new rn(0,0,ue,oe),O=new rn(0,0,ue,oe);let ne=!1;const De=new Jm;let K=!1,ce=!1;const _e=new Wt,Me=new ie,be=new rn,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function xe(){return k===null?ae:1}let D=r;function Le(b,j){return n.getContext(b,j)}try{const b={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:y};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cd}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",he,!1),n.addEventListener("webglcontextcreationerror",Ae,!1),D===null){const j="webgl2";if(D=Le(j,b),D===null)throw Le(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ge,Ye,ze,yt,et,at,F,C,ee,ge,ye,pe,Ke,Ne,Oe,ct,Ee,Ie,mt,rt,Be,lt,ut,Rt;function G(){Ge=new lS(D),Ge.init(),lt=new WM(D,Ge),Ye=new tS(D,Ge,e,lt),ze=new VM(D),yt=new dS(D),et=new RM,at=new jM(D,Ge,ze,et,Ye,lt,yt),F=new iS(N),C=new oS(N),ee=new vx(D),ut=new Jy(D,ee),ge=new cS(D,ee,yt,ut),ye=new hS(D,ge,ee,yt),mt=new fS(D,Ye,at),ct=new nS(et),pe=new CM(N,F,C,Ge,Ye,ut,ct),Ke=new JM(N,et),Ne=new NM,Oe=new FM(Ge),Ie=new Qy(N,F,C,ze,ye,_,p),Ee=new HM(N,ye,Ye),Rt=new eE(D,yt,Ye,ze),rt=new eS(D,Ge,yt),Be=new uS(D,Ge,yt),yt.programs=pe.programs,N.capabilities=Ye,N.extensions=Ge,N.properties=et,N.renderLists=Ne,N.shadowMap=Ee,N.state=ze,N.info=yt}G();const we=new ZM(N,D);this.xr=we,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(b){b!==void 0&&(ae=b,this.setSize(ue,oe,!1))},this.getSize=function(b){return b.set(ue,oe)},this.setSize=function(b,j,Q=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ue=b,oe=j,n.width=Math.floor(b*ae),n.height=Math.floor(j*ae),Q===!0&&(n.style.width=b+"px",n.style.height=j+"px"),this.setViewport(0,0,b,j)},this.getDrawingBufferSize=function(b){return b.set(ue*ae,oe*ae).floor()},this.setDrawingBufferSize=function(b,j,Q){ue=b,oe=j,ae=Q,n.width=Math.floor(b*Q),n.height=Math.floor(j*Q),this.setViewport(0,0,b,j)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(se)},this.setViewport=function(b,j,Q,te){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,j,Q,te),ze.viewport(A.copy(se).multiplyScalar(ae).round())},this.getScissor=function(b){return b.copy(O)},this.setScissor=function(b,j,Q,te){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,j,Q,te),ze.scissor(B.copy(O).multiplyScalar(ae).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){ze.setScissorTest(ne=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(b=!0,j=!0,Q=!0){let te=0;if(b){let X=!1;if(k!==null){const Ce=k.texture.format;X=Ce===Dd||Ce===Ld||Ce===Pd}if(X){const Ce=k.texture.type,Ue=Ce===Ii||Ce===Xr||Ce===Pa||Ce===Bs||Ce===bd||Ce===Nd,je=Ie.getClearColor(),Re=Ie.getClearAlpha(),it=je.r,nt=je.g,Ze=je.b;Ue?(M[0]=it,M[1]=nt,M[2]=Ze,M[3]=Re,D.clearBufferuiv(D.COLOR,0,M)):(E[0]=it,E[1]=nt,E[2]=Ze,E[3]=Re,D.clearBufferiv(D.COLOR,0,E))}else te|=D.COLOR_BUFFER_BIT}j&&(te|=D.DEPTH_BUFFER_BIT),Q&&(te|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",he,!1),n.removeEventListener("webglcontextcreationerror",Ae,!1),Ne.dispose(),Oe.dispose(),et.dispose(),F.dispose(),C.dispose(),ye.dispose(),ut.dispose(),Rt.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",bn),we.removeEventListener("sessionend",Oi),Yn.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=yt.autoReset,j=Ee.enabled,Q=Ee.autoUpdate,te=Ee.needsUpdate,X=Ee.type;G(),yt.autoReset=b,Ee.enabled=j,Ee.autoUpdate=Q,Ee.needsUpdate=te,Ee.type=X}function Ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function tt(b){const j=b.target;j.removeEventListener("dispose",tt),gt(j)}function gt(b){Ot(b),et.remove(b)}function Ot(b){const j=et.get(b).programs;j!==void 0&&(j.forEach(function(Q){pe.releaseProgram(Q)}),b.isShaderMaterial&&pe.releaseShaderCache(b))}this.renderBufferDirect=function(b,j,Q,te,X,Ce){j===null&&(j=ke);const Ue=X.isMesh&&X.matrixWorld.determinant()<0,je=Il(b,j,Q,te,X);ze.setMaterial(te,Ue);let Re=Q.index,it=1;if(te.wireframe===!0){if(Re=ge.getWireframeAttribute(Q),Re===void 0)return;it=2}const nt=Q.drawRange,Ze=Q.attributes.position;let vt=nt.start*it,Ut=(nt.start+nt.count)*it;Ce!==null&&(vt=Math.max(vt,Ce.start*it),Ut=Math.min(Ut,(Ce.start+Ce.count)*it)),Re!==null?(vt=Math.max(vt,0),Ut=Math.min(Ut,Re.count)):Ze!=null&&(vt=Math.max(vt,0),Ut=Math.min(Ut,Ze.count));const Pt=Ut-vt;if(Pt<0||Pt===1/0)return;ut.setup(X,te,je,Q,Re);let Zt,dt=rt;if(Re!==null&&(Zt=ee.get(Re),dt=Be,dt.setIndex(Zt)),X.isMesh)te.wireframe===!0?(ze.setLineWidth(te.wireframeLinewidth*xe()),dt.setMode(D.LINES)):dt.setMode(D.TRIANGLES);else if(X.isLine){let qe=te.linewidth;qe===void 0&&(qe=1),ze.setLineWidth(qe*xe()),X.isLineSegments?dt.setMode(D.LINES):X.isLineLoop?dt.setMode(D.LINE_LOOP):dt.setMode(D.LINE_STRIP)}else X.isPoints?dt.setMode(D.POINTS):X.isSprite&&dt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)dt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))dt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const qe=X._multiDrawStarts,Tt=X._multiDrawCounts,St=X._multiDrawCount,Nn=Re?ee.get(Re).bytesPerElement:1,Bi=et.get(te).currentProgram.getUniforms();for(let Qt=0;Qt<St;Qt++)Bi.setValue(D,"_gl_DrawID",Qt),dt.render(qe[Qt]/Nn,Tt[Qt])}else if(X.isInstancedMesh)dt.renderInstances(vt,Pt,X.count);else if(Q.isInstancedBufferGeometry){const qe=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Tt=Math.min(Q.instanceCount,qe);dt.renderInstances(vt,Pt,Tt)}else dt.render(vt,Pt)};function Vt(b,j,Q){b.transparent===!0&&b.side===Ni&&b.forceSinglePass===!1?(b.side=wn,b.needsUpdate=!0,zi(b,j,Q),b.side=gr,b.needsUpdate=!0,zi(b,j,Q),b.side=Ni):zi(b,j,Q)}this.compile=function(b,j,Q=null){Q===null&&(Q=b),v=Oe.get(Q),v.init(j),L.push(v),Q.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),b!==Q&&b.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(v.pushLight(X),X.castShadow&&v.pushShadow(X))}),v.setupLights();const te=new Set;return b.traverse(function(X){const Ce=X.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const je=Ce[Ue];Vt(je,Q,X),te.add(je)}else Vt(Ce,Q,X),te.add(Ce)}),L.pop(),v=null,te},this.compileAsync=function(b,j,Q=null){const te=this.compile(b,j,Q);return new Promise(X=>{function Ce(){if(te.forEach(function(Ue){et.get(Ue).currentProgram.isReady()&&te.delete(Ue)}),te.size===0){X(b);return}setTimeout(Ce,10)}Ge.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let xt=null;function Rn(b){xt&&xt(b)}function bn(){Yn.stop()}function Oi(){Yn.start()}const Yn=new eg;Yn.setAnimationLoop(Rn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(b){xt=b,we.setAnimationLoop(b),b===null?Yn.stop():Yn.start()},we.addEventListener("sessionstart",bn),we.addEventListener("sessionend",Oi),this.render=function(b,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,j,k),v=Oe.get(b,L.length),v.init(j),L.push(v),_e.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),De.setFromProjectionMatrix(_e),ce=this.localClippingEnabled,K=ct.init(this.clippingPlanes,ce),w=Ne.get(b,x.length),w.init(),x.push(w),we.enabled===!0&&we.isPresenting===!0){const Ce=N.xr.getDepthSensingMesh();Ce!==null&&hi(Ce,j,-1/0,N.sortObjects)}hi(b,j,0,N.sortObjects),w.finish(),N.sortObjects===!0&&w.sort(H,le),$e=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,$e&&Ie.addToRenderList(w,b),this.info.render.frame++,K===!0&&ct.beginShadows();const Q=v.state.shadowsArray;Ee.render(Q,b,j),K===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=w.opaque,X=w.transmissive;if(v.setupLights(),j.isArrayCamera){const Ce=j.cameras;if(X.length>0)for(let Ue=0,je=Ce.length;Ue<je;Ue++){const Re=Ce[Ue];ki(te,X,b,Re)}$e&&Ie.render(b);for(let Ue=0,je=Ce.length;Ue<je;Ue++){const Re=Ce[Ue];ka(w,b,Re,Re.viewport)}}else X.length>0&&ki(te,X,b,j),$e&&Ie.render(b),ka(w,b,j);k!==null&&(at.updateMultisampleRenderTarget(k),at.updateRenderTargetMipmap(k)),b.isScene===!0&&b.onAfterRender(N,b,j),ut.resetDefaultState(),Y=-1,R=null,L.pop(),L.length>0?(v=L[L.length-1],K===!0&&ct.setGlobalState(N.clippingPlanes,v.state.camera)):v=null,x.pop(),x.length>0?w=x[x.length-1]:w=null};function hi(b,j,Q,te){if(b.visible===!1)return;if(b.layers.test(j.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(j);else if(b.isLight)v.pushLight(b),b.castShadow&&v.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||De.intersectsSprite(b)){te&&be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(_e);const Ue=ye.update(b),je=b.material;je.visible&&w.push(b,Ue,je,Q,be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||De.intersectsObject(b))){const Ue=ye.update(b),je=b.material;if(te&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),be.copy(Ue.boundingSphere.center)),be.applyMatrix4(b.matrixWorld).applyMatrix4(_e)),Array.isArray(je)){const Re=Ue.groups;for(let it=0,nt=Re.length;it<nt;it++){const Ze=Re[it],vt=je[Ze.materialIndex];vt&&vt.visible&&w.push(b,Ue,vt,Q,be.z,Ze)}}else je.visible&&w.push(b,Ue,je,Q,be.z,null)}}const Ce=b.children;for(let Ue=0,je=Ce.length;Ue<je;Ue++)hi(Ce[Ue],j,Q,te)}function ka(b,j,Q,te){const X=b.opaque,Ce=b.transmissive,Ue=b.transparent;v.setupLightsView(Q),K===!0&&ct.setGlobalState(N.clippingPlanes,Q),te&&ze.viewport(A.copy(te)),X.length>0&&pi(X,j,Q),Ce.length>0&&pi(Ce,j,Q),Ue.length>0&&pi(Ue,j,Q),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function ki(b,j,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[te.id]===void 0&&(v.state.transmissionRenderTarget[te.id]=new Yr(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?La:Ii,minFilter:jr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const Ce=v.state.transmissionRenderTarget[te.id],Ue=te.viewport||A;Ce.setSize(Ue.z,Ue.w);const je=N.getRenderTarget();N.setRenderTarget(Ce),N.getClearColor(Z),de=N.getClearAlpha(),de<1&&N.setClearColor(16777215,.5),$e?Ie.render(Q):N.clear();const Re=N.toneMapping;N.toneMapping=mr;const it=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),v.setupLightsView(te),K===!0&&ct.setGlobalState(N.clippingPlanes,te),pi(b,Q,te),at.updateMultisampleRenderTarget(Ce),at.updateRenderTargetMipmap(Ce),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Ze=0,vt=j.length;Ze<vt;Ze++){const Ut=j[Ze],Pt=Ut.object,Zt=Ut.geometry,dt=Ut.material,qe=Ut.group;if(dt.side===Ni&&Pt.layers.test(te.layers)){const Tt=dt.side;dt.side=wn,dt.needsUpdate=!0,_r(Pt,Q,te,Zt,dt,qe),dt.side=Tt,dt.needsUpdate=!0,nt=!0}}nt===!0&&(at.updateMultisampleRenderTarget(Ce),at.updateRenderTargetMipmap(Ce))}N.setRenderTarget(je),N.setClearColor(Z,de),it!==void 0&&(te.viewport=it),N.toneMapping=Re}function pi(b,j,Q){const te=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Ce=b.length;X<Ce;X++){const Ue=b[X],je=Ue.object,Re=Ue.geometry,it=te===null?Ue.material:te,nt=Ue.group;je.layers.test(Q.layers)&&_r(je,j,Q,Re,it,nt)}}function _r(b,j,Q,te,X,Ce){b.onBeforeRender(N,j,Q,te,X,Ce),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.transparent===!0&&X.side===Ni&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,N.renderBufferDirect(Q,j,te,X,b,Ce),X.side=gr,X.needsUpdate=!0,N.renderBufferDirect(Q,j,te,X,b,Ce),X.side=Ni):N.renderBufferDirect(Q,j,te,X,b,Ce),b.onAfterRender(N,j,Q,te,X,Ce)}function zi(b,j,Q){j.isScene!==!0&&(j=ke);const te=et.get(b),X=v.state.lights,Ce=v.state.shadowsArray,Ue=X.state.version,je=pe.getParameters(b,X.state,Ce,j,Q),Re=pe.getProgramCacheKey(je);let it=te.programs;te.environment=b.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(b.isMeshStandardMaterial?C:F).get(b.envMap||te.environment),te.envMapRotation=te.environment!==null&&b.envMap===null?j.environmentRotation:b.envMapRotation,it===void 0&&(b.addEventListener("dispose",tt),it=new Map,te.programs=it);let nt=it.get(Re);if(nt!==void 0){if(te.currentProgram===nt&&te.lightsStateVersion===Ue)return Ba(b,je),nt}else je.uniforms=pe.getUniforms(b),b.onBeforeCompile(je,N),nt=pe.acquireProgram(je,Re),it.set(Re,nt),te.uniforms=je.uniforms;const Ze=te.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=ct.uniform),Ba(b,je),te.needsLights=Ha(b),te.lightsStateVersion=Ue,te.needsLights&&(Ze.ambientLightColor.value=X.state.ambient,Ze.lightProbe.value=X.state.probe,Ze.directionalLights.value=X.state.directional,Ze.directionalLightShadows.value=X.state.directionalShadow,Ze.spotLights.value=X.state.spot,Ze.spotLightShadows.value=X.state.spotShadow,Ze.rectAreaLights.value=X.state.rectArea,Ze.ltc_1.value=X.state.rectAreaLTC1,Ze.ltc_2.value=X.state.rectAreaLTC2,Ze.pointLights.value=X.state.point,Ze.pointLightShadows.value=X.state.pointShadow,Ze.hemisphereLights.value=X.state.hemi,Ze.directionalShadowMap.value=X.state.directionalShadowMap,Ze.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ze.spotShadowMap.value=X.state.spotShadowMap,Ze.spotLightMatrix.value=X.state.spotLightMatrix,Ze.spotLightMap.value=X.state.spotLightMap,Ze.pointShadowMap.value=X.state.pointShadowMap,Ze.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=nt,te.uniformsList=null,nt}function za(b){if(b.uniformsList===null){const j=b.currentProgram.getUniforms();b.uniformsList=Ml.seqWithValue(j.seq,b.uniforms)}return b.uniformsList}function Ba(b,j){const Q=et.get(b);Q.outputColorSpace=j.outputColorSpace,Q.batching=j.batching,Q.batchingColor=j.batchingColor,Q.instancing=j.instancing,Q.instancingColor=j.instancingColor,Q.instancingMorph=j.instancingMorph,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function Il(b,j,Q,te,X){j.isScene!==!0&&(j=ke),at.resetTextureUnits();const Ce=j.fog,Ue=te.isMeshStandardMaterial?j.environment:null,je=k===null?N.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:xr,Re=(te.isMeshStandardMaterial?C:F).get(te.envMap||Ue),it=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,nt=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ze=!!Q.morphAttributes.position,vt=!!Q.morphAttributes.normal,Ut=!!Q.morphAttributes.color;let Pt=mr;te.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Pt=N.toneMapping);const Zt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,dt=Zt!==void 0?Zt.length:0,qe=et.get(te),Tt=v.state.lights;if(K===!0&&(ce===!0||b!==R)){const gn=b===R&&te.id===Y;ct.setState(te,b,gn)}let St=!1;te.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Tt.state.version||qe.outputColorSpace!==je||X.isBatchedMesh&&qe.batching===!1||!X.isBatchedMesh&&qe.batching===!0||X.isBatchedMesh&&qe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qe.instancing===!1||!X.isInstancedMesh&&qe.instancing===!0||X.isSkinnedMesh&&qe.skinning===!1||!X.isSkinnedMesh&&qe.skinning===!0||X.isInstancedMesh&&qe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qe.instancingMorph===!1&&X.morphTexture!==null||qe.envMap!==Re||te.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ct.numPlanes||qe.numIntersection!==ct.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==nt||qe.morphTargets!==Ze||qe.morphNormals!==vt||qe.morphColors!==Ut||qe.toneMapping!==Pt||qe.morphTargetsCount!==dt)&&(St=!0):(St=!0,qe.__version=te.version);let Nn=qe.currentProgram;St===!0&&(Nn=zi(te,j,X));let Bi=!1,Qt=!1,Hi=!1;const bt=Nn.getUniforms(),Pn=qe.uniforms;if(ze.useProgram(Nn.program)&&(Bi=!0,Qt=!0,Hi=!0),te.id!==Y&&(Y=te.id,Qt=!0),Bi||R!==b){bt.setValue(D,"projectionMatrix",b.projectionMatrix),bt.setValue(D,"viewMatrix",b.matrixWorldInverse);const gn=bt.map.cameraPosition;gn!==void 0&&gn.setValue(D,Me.setFromMatrixPosition(b.matrixWorld)),Ye.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&bt.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Qt=!0,Hi=!0)}if(X.isSkinnedMesh){bt.setOptional(D,X,"bindMatrix"),bt.setOptional(D,X,"bindMatrixInverse");const gn=X.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),bt.setValue(D,"boneTexture",gn.boneTexture,at))}X.isBatchedMesh&&(bt.setOptional(D,X,"batchingTexture"),bt.setValue(D,"batchingTexture",X._matricesTexture,at),bt.setOptional(D,X,"batchingIdTexture"),bt.setValue(D,"batchingIdTexture",X._indirectTexture,at),bt.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(D,"batchingColorTexture",X._colorsTexture,at));const Ws=Q.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0)&&mt.update(X,Q,Nn),(Qt||qe.receiveShadow!==X.receiveShadow)&&(qe.receiveShadow=X.receiveShadow,bt.setValue(D,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Pn.envMap.value=Re,Pn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(Pn.envMapIntensity.value=j.environmentIntensity),Qt&&(bt.setValue(D,"toneMappingExposure",N.toneMappingExposure),qe.needsLights&&mi(Pn,Hi),Ce&&te.fog===!0&&Ke.refreshFogUniforms(Pn,Ce),Ke.refreshMaterialUniforms(Pn,te,ae,oe,v.state.transmissionRenderTarget[b.id]),Ml.upload(D,za(qe),Pn,at)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ml.upload(D,za(qe),Pn,at),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&bt.setValue(D,"center",X.center),bt.setValue(D,"modelViewMatrix",X.modelViewMatrix),bt.setValue(D,"normalMatrix",X.normalMatrix),bt.setValue(D,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const gn=te.uniformsGroups;for(let yr=0,Va=gn.length;yr<Va;yr++){const qr=gn[yr];Rt.update(qr,Nn),Rt.bind(qr,Nn)}}return Nn}function mi(b,j){b.ambientLightColor.needsUpdate=j,b.lightProbe.needsUpdate=j,b.directionalLights.needsUpdate=j,b.directionalLightShadows.needsUpdate=j,b.pointLights.needsUpdate=j,b.pointLightShadows.needsUpdate=j,b.spotLights.needsUpdate=j,b.spotLightShadows.needsUpdate=j,b.rectAreaLights.needsUpdate=j,b.hemisphereLights.needsUpdate=j}function Ha(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(b,j,Q){et.get(b.texture).__webglTexture=j,et.get(b.depthTexture).__webglTexture=Q;const te=et.get(b);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=Q===void 0,te.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,j){const Q=et.get(b);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(b,j=0,Q=0){k=b,W=j,I=Q;let te=!0,X=null,Ce=!1,Ue=!1;if(b){const Re=et.get(b);Re.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(D.FRAMEBUFFER,null),te=!1):Re.__webglFramebuffer===void 0?at.setupRenderTarget(b):Re.__hasExternalTextures&&at.rebindTextures(b,et.get(b.texture).__webglTexture,et.get(b.depthTexture).__webglTexture);const it=b.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ue=!0);const nt=et.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(nt[j])?X=nt[j][Q]:X=nt[j],Ce=!0):b.samples>0&&at.useMultisampledRTT(b)===!1?X=et.get(b).__webglMultisampledFramebuffer:Array.isArray(nt)?X=nt[Q]:X=nt,A.copy(b.viewport),B.copy(b.scissor),re=b.scissorTest}else A.copy(se).multiplyScalar(ae).floor(),B.copy(O).multiplyScalar(ae).floor(),re=ne;if(ze.bindFramebuffer(D.FRAMEBUFFER,X)&&te&&ze.drawBuffers(b,X),ze.viewport(A),ze.scissor(B),ze.setScissorTest(re),Ce){const Re=et.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re.__webglTexture,Q)}else if(Ue){const Re=et.get(b.texture),it=j||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,Q||0,it)}Y=-1},this.readRenderTargetPixels=function(b,j,Q,te,X,Ce,Ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(je=je[Ue]),je){ze.bindFramebuffer(D.FRAMEBUFFER,je);try{const Re=b.texture,it=Re.format,nt=Re.type;if(!Ye.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=b.width-te&&Q>=0&&Q<=b.height-X&&D.readPixels(j,Q,te,X,lt.convert(it),lt.convert(nt),Ce)}finally{const Re=k!==null?et.get(k).__webglFramebuffer:null;ze.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,j,Q,te,X,Ce,Ue){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=et.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ue!==void 0&&(je=je[Ue]),je){ze.bindFramebuffer(D.FRAMEBUFFER,je);try{const Re=b.texture,it=Re.format,nt=Re.type;if(!Ye.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=b.width-te&&Q>=0&&Q<=b.height-X){const Ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.bufferData(D.PIXEL_PACK_BUFFER,Ce.byteLength,D.STREAM_READ),D.readPixels(j,Q,te,X,lt.convert(it),lt.convert(nt),0),D.flush();const vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await Xv(D,vt,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Ce)}finally{D.deleteBuffer(Ze),D.deleteSync(vt)}return Ce}}finally{const Re=k!==null?et.get(k).__webglFramebuffer:null;ze.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(b,j=null,Q=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,b=arguments[1]);const te=Math.pow(2,-Q),X=Math.floor(b.image.width*te),Ce=Math.floor(b.image.height*te),Ue=j!==null?j.x:0,je=j!==null?j.y:0;at.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,Q,0,0,Ue,je,X,Ce),ze.unbindTexture()},this.copyTextureToTexture=function(b,j,Q=null,te=null,X=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,b=arguments[1],j=arguments[2],X=arguments[3]||0,Q=null);let Ce,Ue,je,Re,it,nt;Q!==null?(Ce=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,je=Q.min.x,Re=Q.min.y):(Ce=b.image.width,Ue=b.image.height,je=0,Re=0),te!==null?(it=te.x,nt=te.y):(it=0,nt=0);const Ze=lt.convert(j.format),vt=lt.convert(j.type);at.setTexture2D(j,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,j.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,j.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),Pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Zt=D.getParameter(D.UNPACK_SKIP_PIXELS),dt=D.getParameter(D.UNPACK_SKIP_ROWS),qe=D.getParameter(D.UNPACK_SKIP_IMAGES),Tt=b.isCompressedTexture?b.mipmaps[X]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,je),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,X,it,nt,Ce,Ue,Ze,vt,Tt.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,X,it,nt,Tt.width,Tt.height,Ze,Tt.data):D.texSubImage2D(D.TEXTURE_2D,X,it,nt,Ce,Ue,Ze,vt,Tt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Zt),D.pixelStorei(D.UNPACK_SKIP_ROWS,dt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe),X===0&&j.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(b,j,Q=null,te=null,X=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Q=arguments[0]||null,te=arguments[1]||null,b=arguments[2],j=arguments[3],X=arguments[4]||0);let Ce,Ue,je,Re,it,nt,Ze,vt,Ut;const Pt=b.isCompressedTexture?b.mipmaps[X]:b.image;Q!==null?(Ce=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,je=Q.max.z-Q.min.z,Re=Q.min.x,it=Q.min.y,nt=Q.min.z):(Ce=Pt.width,Ue=Pt.height,je=Pt.depth,Re=0,it=0,nt=0),te!==null?(Ze=te.x,vt=te.y,Ut=te.z):(Ze=0,vt=0,Ut=0);const Zt=lt.convert(j.format),dt=lt.convert(j.type);let qe;if(j.isData3DTexture)at.setTexture3D(j,0),qe=D.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)at.setTexture2DArray(j,0),qe=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,j.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,j.unpackAlignment);const Tt=D.getParameter(D.UNPACK_ROW_LENGTH),St=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Nn=D.getParameter(D.UNPACK_SKIP_PIXELS),Bi=D.getParameter(D.UNPACK_SKIP_ROWS),Qt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),D.pixelStorei(D.UNPACK_SKIP_ROWS,it),D.pixelStorei(D.UNPACK_SKIP_IMAGES,nt),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(qe,X,Ze,vt,Ut,Ce,Ue,je,Zt,dt,Pt.data):j.isCompressedArrayTexture?D.compressedTexSubImage3D(qe,X,Ze,vt,Ut,Ce,Ue,je,Zt,Pt.data):D.texSubImage3D(qe,X,Ze,vt,Ut,Ce,Ue,je,Zt,dt,Pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,St),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Bi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Qt),X===0&&j.generateMipmaps&&D.generateMipmap(qe),ze.unbindTexture()},this.initRenderTarget=function(b){et.get(b).__webglFramebuffer===void 0&&at.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?at.setTextureCube(b,0):b.isData3DTexture?at.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?at.setTexture2DArray(b,0):at.setTexture2D(b,0),ze.unbindTexture()},this.resetState=function(){W=0,I=0,k=null,ze.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Id?"display-p3":"srgb",n.unpackColorSpace=At.workingColorSpace===Nl?"display-p3":"srgb"}}class nE extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ag extends Fa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const um=new Wt,wd=new jm,pl=new Pl,ml=new ie;class iE extends Cn{constructor(e=new Fi,n=new ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(o),pl.radius+=c,e.ray.intersectsSphere(pl)===!1)return;um.copy(o).invert(),wd.copy(e.ray).applyMatrix4(um);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,y=r.attributes.position;if(m!==null){const _=Math.max(0,d.start),M=Math.min(m.count,d.start+d.count);for(let E=_,w=M;E<w;E++){const v=m.getX(E);ml.fromBufferAttribute(y,v),dm(ml,v,p,o,e,n,this)}}else{const _=Math.max(0,d.start),M=Math.min(y.count,d.start+d.count);for(let E=_,w=M;E<w;E++)ml.fromBufferAttribute(y,E),dm(ml,E,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function dm(s,e,n,r,o,c,d){const f=wd.distanceSqToPoint(s);if(f<n){const p=new ie;wd.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,object:d})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);const gl={"2025-01-14":"Makar Sankranti","2025-01-26":"Republic Day","2025-03-14":"Holi","2025-03-31":"Eid-ul-Fitr","2025-04-14":"Dr. Ambedkar Jayanti","2025-04-17":"Mahavir Jayanti","2025-04-18":"Good Friday","2025-05-01":"May Day","2025-05-12":"Buddha Purnima","2025-06-07":"Eid-ul-Adha","2025-07-07":"Muharram","2025-08-15":"Independence Day","2025-08-26":"Janmashtami","2025-09-06":"Ganesh Chaturthi","2025-10-02":"Gandhi Jayanti","2025-10-03":"Dussehra","2025-10-21":"Diwali","2025-11-05":"Guru Nanak Jayanti","2025-12-25":"Christmas Day"},qt=({path:s,className:e="w-6 h-6"})=>g.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:g.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:s})}),rE=()=>g.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2",style:{borderColor:"var(--primary)"}}),sE=()=>g.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center z-50",children:g.jsxs("div",{className:"text-center space-y-6",children:[g.jsxs("div",{className:"relative",children:[g.jsx("div",{className:"w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto"}),g.jsx("div",{className:"absolute inset-0 w-20 h-20 border-4 border-transparent border-r-indigo-500 rounded-full animate-spin mx-auto",style:{animationDirection:"reverse",animationDuration:"1.5s"}})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent",children:"Cosmic Hub"}),g.jsx("p",{className:"text-slate-400 text-sm",children:"Initializing your productivity universe..."})]})]})}),fm=()=>{const[s,e]=st.useState("");return st.useEffect(()=>{const n=["The best way to predict the future is to create it.","Success is not final, failure is not fatal: it is the courage to continue that counts.","Believe you can and you're halfway there.","The secret of getting ahead is getting started.","It's hard to beat a person who never gives up."];e(n[Math.floor(Math.random()*n.length)])},[]),g.jsx("div",{className:"text-center p-4 rounded-lg mb-8 t-surface",children:g.jsxs("p",{className:"text-lg italic t-muted",children:['"',s,'"']})})},aE=()=>{const s=new(window.AudioContext||window.webkitAudioContext);if(!s)return;const e=(n,r,o)=>{const c=s.createOscillator(),d=s.createGain();c.connect(d),d.connect(s.destination),c.type="triangle",c.frequency.setValueAtTime(n,s.currentTime),d.gain.setValueAtTime(.5,s.currentTime),c.start(s.currentTime+r),d.gain.exponentialRampToValueAtTime(.001,s.currentTime+r+o),c.stop(s.currentTime+r+o)};e(523.25,0,.15),e(659.25,.15,.2)};function oE(){const[s,e]=st.useState([]),[n,r]=st.useState([]),[o,c]=st.useState([]),[d,f]=st.useState([]),[p,m]=st.useState({}),[S,y]=st.useState([]),[_,M]=st.useState([]),[E,w]=st.useState("gotham"),[v,x]=st.useState(""),[L,N]=st.useState(""),[P,W]=st.useState({text:"",deadline:"",tag:"",priority:"medium"}),[I,k]=st.useState({hours:"",minutes:"",seconds:"",text:""}),[Y,R]=st.useState(!0),[A,B]=st.useState("missions"),[re,Z]=st.useState(!1),[de,ue]=st.useState(!0),oe=st.useRef(null);st.useEffect(()=>{const xe=setTimeout(()=>{ue(!1)},2e3);try{console.log("Attempting to load data...");const D=["cosmic-hub-data-v3","cosmic-hub-data-v2","cosmic-hub-data"];let Le=null,Ge=null;for(const Ye of D){const ze=localStorage.getItem(Ye);if(ze){Le=ze,Ge=Ye,console.log(`Data found from source: ${Ge}`);break}console.log(`No data found for key: ${Ye}`)}if(Le){const Ye=JSON.parse(Le),ze=(Ye.goals||[]).map(yt=>({...yt,accomplishments:yt.accomplishments||[]}));e(ze),r(Ye.schedule||[]),c(Ye.completedTasksHistory||[]),f(Ye.erasedTasksHistory||[]),m(Ye.events||{}),y(Ye.habits||[]),M(Ye.quickNotes||[]),w(Ye.theme||localStorage.getItem("cosmic-theme")||"gotham"),console.log("Data loaded and migrated successfully.")}else console.log("No saved data found in any known local storage key."),w(localStorage.getItem("cosmic-theme")||"gotham")}catch(D){console.error("Failed to load or migrate data from local storage",D),w(localStorage.getItem("cosmic-theme")||"gotham")}return R(!1),()=>clearTimeout(xe)},[]),st.useEffect(()=>{document.documentElement.dataset.theme=E;try{localStorage.setItem("cosmic-theme",E)}catch{}},[E]),st.useEffect(()=>{if(!Y)try{const xe=JSON.stringify({goals:s,schedule:n,completedTasksHistory:o,erasedTasksHistory:d,events:p,habits:S,quickNotes:_,theme:E});localStorage.setItem("cosmic-hub-data-v3",xe)}catch(xe){console.error("Failed to save data",xe)}},[s,n,o,d,p,S,_,E,Y]);const ae=()=>{aE(),Z(!0)};st.useEffect(()=>{const xe=setInterval(()=>{r(D=>D.map(Le=>Le.isActive&&Le.secondsLeft===1?(ae(),{...Le,secondsLeft:0,isActive:!1,completed:!0}):Le.isActive&&Le.secondsLeft>0?{...Le,secondsLeft:Le.secondsLeft-1}:Le))},1e3);return()=>clearInterval(xe)},[]);const H=xe=>{if(xe.preventDefault(),P.text.trim()){const D={id:Date.now(),text:P.text,subgoals:[],streak:0,lastCompleted:null,link:"",deadline:P.deadline,dateCreated:new Date().toISOString(),accomplishments:[],tag:P.tag||"",priority:P.priority||"medium",timeSpent:0};e(Le=>[...Le,D]),W({text:"",deadline:"",tag:"",priority:"medium"})}},le=(xe,D)=>{e(s.map(Le=>Le.id===xe?{...Le,...D}:Le))},se=xe=>e(s.filter(D=>D.id!==xe)),O=xe=>{if(xe.preventDefault(),I.text.trim()){const D=parseInt(I.hours)||0,Le=parseInt(I.minutes)||0,Ge=parseInt(I.seconds)||0,Ye=D*3600+Le*60+Ge,ze={text:I.text,id:Date.now(),completed:!1,isActive:!1,hours:D,minutes:Le,seconds:Ge,secondsLeft:Ye,hasDuration:Ye>0};r([...n,ze].sort((yt,et)=>(et.hasDuration?1:0)-(yt.hasDuration?1:0))),k({hours:"",minutes:"",seconds:"",text:""})}},ne=xe=>{r(n.map(D=>D.id===xe?{...D,isActive:!D.isActive}:{...D,isActive:!1}))},De=xe=>{r(n.map(D=>{if(D.id===xe){const Le=!D.completed;return Le?o.find(Ge=>Ge.id===xe)||c(Ge=>[...Ge,{...D,completedDate:new Date().toISOString()}]):c(Ge=>Ge.filter(Ye=>Ye.id!==xe)),{...D,completed:Le}}return D}))},K=xe=>{const D=n.find(Le=>Le.id===xe);D&&D.completed&&(o.find(Le=>Le.id===xe)||c(Le=>[...Le,{...D,completedDate:D.completedDate||new Date().toISOString()}])),r(n.filter(Le=>Le.id!==xe))},ce=()=>{const xe=new Date().toDateString(),Le=n.filter(Ge=>(Ge.dateCreated?new Date(Ge.dateCreated).toDateString():xe)===xe).filter(Ge=>!Ge.completed);f(Ge=>[...Ge,...Le.map(Ye=>({...Ye,erasedDate:new Date().toISOString()}))]),r(n.filter(Ge=>(Ge.dateCreated?new Date(Ge.dateCreated).toDateString():xe)!==xe))},_e=()=>r([]);if(st.useEffect(()=>{if(Y)return;let xe,D,Le,Ge;const Ye=oe.current;if(!Ye||Ye.children.length>0)return;xe=new nE,D=new Wn(60,window.innerWidth/window.innerHeight,1,1e3),D.position.z=1,D.rotation.x=Math.PI/2,Le=new tE({antialias:!0}),Le.setSize(window.innerWidth,window.innerHeight),Ye.appendChild(Le.domElement);const ze=new Fi,yt=5e3,et=new Float32Array(yt*3);for(let pe=0;pe<yt*3;pe++)et[pe]=(Math.random()-.5)*5;ze.setAttribute("position",new si(et,3));const at=new ag({size:.005,color:16777215});Ge=new iE(ze,at),xe.add(Ge);let F=0,C=0;const ee=pe=>{F=pe.clientX,C=pe.clientY};document.addEventListener("mousemove",ee);const ge=()=>{requestAnimationFrame(ge),Ge.rotation.y+=2e-4,D.position.y+=(C*1e-5-D.position.y)*.1,D.position.x+=(F*1e-5-D.position.x)*.1,Le.render(xe,D)};ge();const ye=()=>{D.aspect=window.innerWidth/window.innerHeight,D.updateProjectionMatrix(),Le.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ye),()=>{window.removeEventListener("resize",ye),document.removeEventListener("mousemove",ee),Ye&&Le.domElement&&Ye.removeChild(Le.domElement)}},[Y]),de)return g.jsx(sE,{});if(Y)return g.jsx("div",{className:"min-h-screen flex justify-center items-center",style:{background:"var(--bg2)"},children:g.jsx(rE,{})});const be=s.filter(xe=>{const D=xe.subgoals.length,Le=xe.subgoals.filter(Ge=>Ge.completed).length;return D===0||Le<D}).filter(xe=>{const D=v.trim().toLowerCase();return D?`${xe.text} ${xe.tag||""} ${xe.priority||""}`.toLowerCase().includes(D):!0}),ke=s.filter(xe=>{const D=xe.subgoals.length,Le=xe.subgoals.filter(Ge=>Ge.completed).length;return D>0&&Le===D}),$e={missions:"Missions",habits:"Habits",pomodoro:"Pomodoro",notes:"Notes",calendar:"Calendar",logbook:"Logbook",dashboard:"Dashboard",analytics:"Analytics"}[A]||"Cosmic Hub";return g.jsxs(g.Fragment,{children:[g.jsx("div",{ref:oe,className:"fixed top-0 left-0 w-full h-full -z-20"}),g.jsx("div",{className:"orbital-grid"}),g.jsxs("div",{className:"min-h-screen font-sans app-shell",children:[g.jsxs("div",{className:"hidden md:flex min-h-screen",children:[g.jsxs("aside",{className:"w-72 p-6 t-surface card-glow flex-shrink-0",children:[g.jsxs("div",{className:"mb-8",children:[g.jsx("div",{className:"text-xl font-extrabold t-gradient-text",children:"Cosmic Hub"}),g.jsx("div",{className:"text-sm t-muted-2 mt-1",children:"Plan • Focus • Win"})]}),g.jsx(mm,{currentView:A,setCurrentView:B,variant:"sidebar"}),g.jsx("div",{className:"mt-8",children:g.jsx(gm,{theme:E,setTheme:w})})]}),g.jsx("main",{className:"flex-1 p-6 lg:p-8 overflow-hidden",children:g.jsxs("div",{className:"max-w-7xl mx-auto h-full",children:[re&&g.jsx(hm,{onClose:()=>Z(!1)}),g.jsx("div",{className:"flex items-center justify-between gap-4 mb-6",children:g.jsxs("div",{children:[g.jsx("p",{className:"metric-chip metric-chip--good mb-2 inline-flex items-center gap-1",children:g.jsx("span",{children:"LIVE BOARD"})}),g.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold tracking-tight",children:$e}),g.jsx("p",{className:"t-muted-2 text-sm md:text-base",children:"Stay consistent. Tiny orbits. Massive trajectory."})]})}),g.jsx("div",{className:"content-scroll pb-6",children:g.jsxs("section",{className:"t-surface card-glow p-6 lg:p-8",children:[A==="missions"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"mb-8",children:g.jsx(fm,{})}),g.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-8",children:[g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold t-muted mb-4",children:"New Mission"}),g.jsxs("form",{onSubmit:H,className:"space-y-4",children:[g.jsxs("div",{className:"flex flex-col lg:flex-row gap-3",children:[g.jsx("input",{type:"text",value:P.text,onChange:xe=>W({...P,text:xe.target.value}),placeholder:"Launch a new goal...",className:"flex-grow rounded-lg px-4 py-3 t-input t-ring text-base"}),g.jsx("input",{type:"date",value:P.deadline,onChange:xe=>W({...P,deadline:xe.target.value}),className:"rounded-lg px-4 py-3 t-input t-ring"}),g.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-6 py-3 font-semibold whitespace-nowrap",children:g.jsx(qt,{path:"M12 4.5v15m7.5-7.5h-15"})})]}),g.jsxs("div",{className:"flex gap-3",children:[g.jsx("input",{type:"text",value:P.tag,onChange:xe=>W({...P,tag:xe.target.value}),placeholder:"Tag (optional)",className:"flex-1 rounded-lg px-4 py-3 text-sm t-input t-ring"}),g.jsxs("select",{value:P.priority,onChange:xe=>W({...P,priority:xe.target.value}),className:"rounded-lg px-4 py-3 text-sm t-input t-ring",children:[g.jsx("option",{value:"low",children:"Low Priority"}),g.jsx("option",{value:"medium",children:"Medium Priority"}),g.jsx("option",{value:"high",children:"High Priority"}),g.jsx("option",{value:"urgent",children:"Urgent"})]})]})]})]}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4",children:[g.jsx("h2",{className:"text-2xl font-bold t-muted",children:"Active Missions"}),g.jsx("input",{type:"text",value:v,onChange:xe=>x(xe.target.value),placeholder:"Search missions...",className:"w-full lg:w-80 rounded-lg px-4 py-3 text-sm t-input t-ring"})]}),g.jsx("div",{className:"space-y-4 max-h-96 overflow-y-auto",children:be.length===0?g.jsx("p",{className:"text-center t-muted-2 p-6 bg-gray-800/50 rounded-lg",children:"No matching missions."}):be.map(xe=>g.jsx(_m,{goal:xe,updateGoal:le,deleteGoal:se,handleMajorCompletion:ae},xe.id))})]})]}),g.jsx("div",{className:"space-y-6",children:g.jsx(vm,{schedule:n,handleAddScheduleItem:O,newScheduleItem:I,setNewScheduleItem:k,toggleTimer:ne,toggleTaskCompletion:De,deleteScheduleItem:K,clearAllSchedule:_e,eraseTodaysTasks:ce,completedTasksHistory:o,erasedTasksHistory:d,plannerSearch:L,setPlannerSearch:N})})]})]}),A==="habits"&&g.jsx(Em,{habits:S,setHabits:y}),A==="pomodoro"&&g.jsx(xm,{onComplete:ae}),A==="notes"&&g.jsx(Tm,{notes:_,setNotes:M}),A==="calendar"&&g.jsx(ym,{goals:s,events:p,setEvents:m}),A==="logbook"&&g.jsx(Mm,{goals:s,updateGoal:le,deleteGoal:se}),A==="dashboard"&&g.jsx(wm,{goals:s,habits:S,schedule:n,completedTasksHistory:o,erasedTasksHistory:d}),A==="analytics"&&g.jsx(Sm,{completedGoals:ke,schedule:n,habits:S,completedTasksHistory:o,erasedTasksHistory:d})]})})]})})]}),g.jsxs("div",{className:"md:hidden min-h-screen pb-24 app-shell",children:[g.jsx("div",{className:"px-4 py-4",children:g.jsx("div",{className:"t-surface card-glow p-4 rounded-2xl",children:g.jsxs("div",{className:"flex items-center justify-between gap-3",children:[g.jsxs("div",{className:"min-w-0 flex-1",children:[g.jsx("div",{className:"text-lg font-extrabold t-gradient-text truncate",children:"Cosmic Hub"}),g.jsx("div",{className:"text-xs t-muted-2 truncate",children:$e})]}),g.jsx(gm,{theme:E,setTheme:w})]})})}),g.jsxs("div",{className:"px-4 pb-4",children:[re&&g.jsx(hm,{onClose:()=>Z(!1)}),g.jsxs("section",{className:"t-surface rounded-2xl p-6 space-y-6 content-scroll",children:[A==="missions"&&g.jsxs(g.Fragment,{children:[g.jsx("div",{className:"mb-6",children:g.jsx(fm,{})}),g.jsxs("div",{className:"space-y-8",children:[g.jsxs("div",{className:"space-y-4",children:[g.jsx("h2",{className:"text-xl font-bold t-muted",children:"New Mission"}),g.jsxs("form",{onSubmit:H,className:"space-y-4",children:[g.jsx("input",{type:"text",value:P.text,onChange:xe=>W({...P,text:xe.target.value}),placeholder:"Launch a new goal...",className:"w-full rounded-lg px-4 py-3 t-input t-ring text-base"}),g.jsxs("div",{className:"flex gap-3",children:[g.jsx("input",{type:"date",value:P.deadline,onChange:xe=>W({...P,deadline:xe.target.value}),className:"flex-1 rounded-lg px-4 py-3 t-input t-ring"}),g.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-6 py-3 font-semibold",children:g.jsx(qt,{path:"M12 4.5v15m7.5-7.5h-15"})})]}),g.jsxs("div",{className:"flex gap-3",children:[g.jsx("input",{type:"text",value:P.tag,onChange:xe=>W({...P,tag:xe.target.value}),placeholder:"Tag",className:"flex-1 rounded-lg px-4 py-3 text-sm t-input t-ring"}),g.jsxs("select",{value:P.priority,onChange:xe=>W({...P,priority:xe.target.value}),className:"rounded-lg px-4 py-3 text-sm t-input t-ring",children:[g.jsx("option",{value:"low",children:"Low"}),g.jsx("option",{value:"medium",children:"Medium"}),g.jsx("option",{value:"high",children:"High"}),g.jsx("option",{value:"urgent",children:"Urgent"})]})]})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex flex-col gap-3",children:[g.jsx("h2",{className:"text-xl font-bold t-muted",children:"Active Missions"}),g.jsx("input",{type:"text",value:v,onChange:xe=>x(xe.target.value),placeholder:"Search missions...",className:"w-full rounded-lg px-4 py-3 text-sm t-input t-ring"})]}),g.jsx("div",{className:"space-y-4",children:be.length===0?g.jsx("p",{className:"text-center t-muted-2 p-6 bg-gray-800/50 rounded-lg",children:"No matching missions."}):be.map(xe=>g.jsx(_m,{goal:xe,updateGoal:le,deleteGoal:se,handleMajorCompletion:ae},xe.id))})]}),g.jsx("div",{className:"pt-4 border-t border-gray-700/50",children:g.jsx(vm,{schedule:n,handleAddScheduleItem:O,newScheduleItem:I,setNewScheduleItem:k,toggleTimer:ne,toggleTaskCompletion:De,deleteScheduleItem:K,clearAllSchedule:_e,eraseTodaysTasks:ce,completedTasksHistory:o,erasedTasksHistory:d,plannerSearch:L,setPlannerSearch:N})})]})]}),A==="habits"&&g.jsx(Em,{habits:S,setHabits:y}),A==="pomodoro"&&g.jsx(xm,{onComplete:ae}),A==="notes"&&g.jsx(Tm,{notes:_,setNotes:M}),A==="calendar"&&g.jsx(ym,{goals:s,events:p,setEvents:m}),A==="logbook"&&g.jsx(Mm,{goals:s,updateGoal:le,deleteGoal:se}),A==="dashboard"&&g.jsx(wm,{goals:s,habits:S,schedule:n,completedTasksHistory:o,erasedTasksHistory:d}),A==="analytics"&&g.jsx(Sm,{completedGoals:ke,schedule:n,habits:S,completedTasksHistory:o,erasedTasksHistory:d})]})]}),g.jsx("nav",{className:"fixed bottom-0 left-0 right-0 p-3",style:{background:"color-mix(in srgb, var(--bg2) 55%, transparent)"},children:g.jsx("div",{className:"mx-auto max-w-md t-surface nav-floating px-3 py-3",children:g.jsx(mm,{currentView:A,setCurrentView:B,variant:"bottom"})})})]})]})]})}const hm=({onClose:s})=>g.jsxs("div",{className:"fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center animate-fade-in completion-stars",children:[[...Array(20)].map((e,n)=>g.jsx("div",{className:"star",style:{"--i":n,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*1}s`,animationDuration:`${Math.random()*1+.5}s`}},n)),g.jsxs("div",{className:"text-center z-10 animate-zoom-in",children:[g.jsx("h2",{className:"text-5xl font-bold mb-4 t-gradient-text",children:"You did it!"}),g.jsx("p",{className:"text-2xl t-muted mb-8",children:"AND NOW let's do more"}),g.jsx("button",{onClick:s,className:"t-btn-primary rounded-lg px-8 py-3 text-lg font-semibold",children:"Continue"})]})]}),pm=[{id:"missions",name:"Missions",icon:"M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3"},{id:"dashboard",name:"Dashboard",icon:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"},{id:"pomodoro",name:"Pomodoro",icon:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"},{id:"habits",name:"Habits",icon:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"},{id:"notes",name:"Notes",icon:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},{id:"calendar",name:"Calendar",icon:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18"},{id:"logbook",name:"Logbook",icon:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25"},{id:"analytics",name:"Analytics",icon:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5"}],mm=({currentView:s,setCurrentView:e,variant:n})=>{if(n==="bottom"){const r=pm.filter(o=>["missions","dashboard","pomodoro","notes","calendar"].includes(o.id));return g.jsx("div",{className:"grid grid-cols-5 gap-1",role:"tablist",children:r.map(o=>{const c=o.id===s;return g.jsxs("button",{onClick:()=>e(o.id),className:`flex flex-col items-center justify-center gap-1 rounded-xl py-3 px-2 t-ring transition-all duration-300 ${c?"t-btn-primary":"t-btn-ghost"}`,role:"tab","aria-selected":c,"aria-label":`Switch to ${o.name} view`,children:[g.jsx(qt,{path:o.icon,className:"w-6 h-6 transition-transform duration-300 hover:scale-110"}),g.jsx("span",{className:"text-[10px] leading-none font-medium",children:o.name})]},o.id)})})}return g.jsx("nav",{className:"space-y-1",role:"navigation","aria-label":"Main navigation",children:pm.map(r=>{const o=r.id===s;return g.jsxs("button",{onClick:()=>e(r.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left t-ring ${o?"t-btn-primary":"t-surface-2 t-btn-ghost"}`,role:"tab","aria-selected":o,"aria-label":`Switch to ${r.name} view`,children:[g.jsx(qt,{path:r.icon,className:"w-5 h-5"}),g.jsx("span",{className:"text-sm font-medium",children:r.name})]},r.id)})})},gm=({theme:s,setTheme:e})=>{const n=[{id:"gotham",name:"Gotham"},{id:"solar",name:"Solar"},{id:"ocean",name:"Ocean"},{id:"forest",name:"Forest"},{id:"rose",name:"Rose"}];return g.jsxs("div",{className:"flex items-center justify-center sm:justify-end gap-2 flex-shrink-0",children:[g.jsx("span",{className:"text-xs sm:text-sm t-muted-2 hidden sm:inline",children:"Theme"}),g.jsx("select",{value:s,onChange:r=>e(r.target.value),className:"t-surface-2 rounded-lg px-3 py-2 text-sm t-ring min-w-0",style:{color:"var(--text)"},children:n.map(r=>g.jsx("option",{value:r.id,style:{background:"#111827",color:"#fff"},children:r.name},r.id))})]})},vm=({schedule:s,handleAddScheduleItem:e,newScheduleItem:n,setNewScheduleItem:r,toggleTimer:o,toggleTaskCompletion:c,deleteScheduleItem:d,clearAllSchedule:f,eraseTodaysTasks:p,completedTasksHistory:m,erasedTasksHistory:S,plannerSearch:y,setPlannerSearch:_})=>{new Date().toDateString();const M=s.length+m.length+S.length,E=s.filter(I=>I.completed).length+m.length,w=s.filter(I=>!I.completed).length,v=M>0?Math.round(E/M*100):0,x=s.filter(I=>I.completed),L=s.filter(I=>!I.completed),N=x.filter(I=>(y||"").trim()?(I.text||"").toLowerCase().includes(y.trim().toLowerCase()):!0),P=L.filter(I=>(y||"").trim()?(I.text||"").toLowerCase().includes(y.trim().toLowerCase()):!0),W=I=>{const k=Math.floor(I.secondsLeft/3600),Y=Math.floor(I.secondsLeft%3600/60),R=I.secondsLeft%60,A=I.hours*3600+I.minutes*60+I.seconds,B=A>0?(A-I.secondsLeft)/A*100:0;return g.jsxs("div",{className:`relative group p-4 rounded-lg transition-all overflow-hidden border ${I.completed?"bg-green-500/10 border-green-500/30":"bg-gray-800/40 border-gray-700/50 hover:border-blue-500/50"}`,children:[I.hasDuration&&g.jsx("div",{className:"absolute top-0 left-0 h-full bg-teal-500/20 transition-all duration-500",style:{width:`${B}%`}}),g.jsxs("div",{className:"relative flex items-center gap-3",children:[g.jsx("input",{type:"checkbox",checked:I.completed,onChange:()=>c(I.id),className:"w-5 h-5 rounded cursor-pointer flex-shrink-0",style:{accentColor:"#4ade80"}}),g.jsxs("div",{className:"flex-grow min-w-0",children:[g.jsx("p",{className:`text-sm ${I.completed?"line-through text-gray-500":"text-gray-200"}`,children:I.text}),I.hasDuration&&g.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[I.isActive?"⏱️ ":"⏳ ",String(k).padStart(2,"0"),":",String(Y).padStart(2,"0"),":",String(R).padStart(2,"0")]})]}),!I.completed&&I.hasDuration&&g.jsx("button",{onClick:()=>o(I.id),className:"text-teal-300 hover:text-teal-200 p-1 rounded flex-shrink-0 transition-colors",title:I.isActive?"Pause":"Start",children:g.jsx(qt,{path:I.isActive?"M15.75 5.25v13.5m-7.5-13.5v13.5":"M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l7.5 4.347c1.25.722 1.25 2.565 0 3.286l-7.5 4.347c-1.25.722-2.779-.217-2.779-1.643V5.653z",className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>d(I.id),className:"text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0",title:"Delete",children:g.jsx(qt,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]})]},I.id)};return g.jsxs("div",{className:"space-y-5",children:[g.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold t-muted",children:"Task Management"}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Organize and track your daily tasks"})]}),g.jsx("input",{type:"text",value:y,onChange:I=>_(I.target.value),placeholder:"Search tasks...",className:"w-full sm:w-72 rounded-lg px-4 py-2 text-sm t-input t-ring"})]}),g.jsx("div",{className:"bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-4 border border-purple-500/30",children:g.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[g.jsxs("div",{className:"text-center",children:[g.jsx("p",{className:"text-2xl font-bold text-cyan-300",children:M}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Total Created"})]}),g.jsxs("div",{className:"text-center",children:[g.jsx("p",{className:"text-2xl font-bold text-green-300",children:E}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Completed"})]}),g.jsxs("div",{className:"text-center",children:[g.jsx("p",{className:"text-2xl font-bold text-orange-300",children:S.length}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Unaccomplished"})]}),g.jsxs("div",{className:"text-center",children:[g.jsxs("p",{className:"text-2xl font-bold text-blue-300",children:[v,"%"]}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Completion Rate"})]})]})}),g.jsx("div",{className:"bg-gray-800/30 rounded-lg p-4 border border-gray-700/50",children:g.jsxs("form",{onSubmit:e,className:"space-y-3",children:[g.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[g.jsx("input",{type:"number",value:n.hours,onChange:I=>r({...n,hours:I.target.value}),placeholder:"Hrs",min:"0",max:"23",className:"rounded-lg px-2 py-2 t-input t-ring text-sm text-center"}),g.jsx("input",{type:"number",value:n.minutes,onChange:I=>r({...n,minutes:I.target.value}),placeholder:"Min",min:"0",max:"59",className:"rounded-lg px-2 py-2 t-input t-ring text-sm text-center"}),g.jsx("input",{type:"number",value:n.seconds,onChange:I=>r({...n,seconds:I.target.value}),placeholder:"Sec",min:"0",max:"59",className:"rounded-lg px-2 py-2 t-input t-ring text-sm text-center"})]}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("input",{type:"text",value:n.text,onChange:I=>r({...n,text:I.target.value}),placeholder:"What's your next task?",className:"flex-grow rounded-lg px-4 py-2 t-input t-ring text-sm"}),g.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-4 py-2 font-semibold hover:scale-105 transition-transform",children:g.jsx(qt,{path:"M12 4.5v15m7.5-7.5h-15",className:"w-5 h-5"})})]}),g.jsx("p",{className:"text-xs text-gray-500",children:"Optional: Set duration or just add the task name"})]})}),g.jsxs("div",{className:"flex gap-2 flex-wrap",children:[w>0&&g.jsxs("button",{onClick:p,className:"text-sm px-3 py-1.5 rounded bg-orange-700/50 hover:bg-orange-700 transition-colors text-gray-100 font-medium",children:["🗑️ Erase Today's Tasks (",w,")"]}),x.length>0&&g.jsx("button",{onClick:f,className:"text-sm px-3 py-1.5 rounded bg-gray-700 hover:bg-gray-600 transition-colors text-gray-100 font-medium",children:"Clear All"})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 mb-3 pb-2 border-b border-gray-700",children:[g.jsx("span",{className:"text-sm font-semibold text-blue-300",children:"📌 Pending Tasks"}),g.jsx("span",{className:"text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded",children:P.length})]}),g.jsx("div",{className:"space-y-2 max-h-[40vh] overflow-y-auto pr-2",children:P.length===0?g.jsx("p",{className:"text-center text-gray-500 text-sm py-6",children:y?.trim()?"No matching pending tasks":"✨ All caught up! No pending tasks"}):P.map(W)})]}),N.length>0&&g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2 mb-3 pb-2 border-b border-gray-700",children:[g.jsx("span",{className:"text-sm font-semibold text-green-300",children:"✓ Completed Today"}),g.jsx("span",{className:"text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded",children:N.length})]}),g.jsx("div",{className:"space-y-2 max-h-[30vh] overflow-y-auto pr-2",children:N.map(W)})]})]})]})},xm=({onComplete:s})=>{const[e,n]=st.useState({work:25,shortBreak:5,longBreak:15}),[r,o]=st.useState("work"),[c,d]=st.useState(!1),[f,p]=st.useState(e.work*60),[m,S]=st.useState(0),y=(L,N)=>{const P=parseInt(N,10);isNaN(P)||P<1||n(W=>({...W,[L]:P}))};st.useEffect(()=>{let L=null;return c&&f>0?L=setInterval(()=>p(N=>N-1),1e3):c&&f===0&&(s(),d(!1),o(N=>N==="work"?"shortBreak":"work")),()=>clearInterval(L)},[c,f,s]),st.useEffect(()=>{p(e[r]*60),d(!1),S(L=>L+1)},[r,e]);const _=()=>d(!c),M=()=>p(e[r]*60),E=Math.floor(f/60),w=f%60,v=e[r]*60,x=v>0?(v-f)/v*100:0;return g.jsxs("div",{className:"flex flex-col items-center justify-center space-y-6",children:[g.jsx("h2",{className:"text-3xl font-bold text-center t-muted mb-6",children:"Pomodoro Timer"}),g.jsx("div",{className:"flex gap-2",children:Object.keys(e).map(L=>g.jsx("button",{onClick:()=>o(L),className:`px-4 py-1 rounded-md text-sm capitalize t-ring ${r===L?"t-btn-primary":"t-surface-2 t-btn-ghost"}`,children:L.replace("B"," B")},L))}),g.jsxs("div",{className:"relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center",children:[g.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 100 100",style:{transform:"rotate(-90deg)"},children:[g.jsx("circle",{className:"text-gray-700",strokeWidth:"5",stroke:"currentColor",fill:"transparent",r:"45",cx:"50",cy:"50"}),g.jsx("circle",{strokeWidth:"5",strokeDasharray:"283",strokeDashoffset:283-x/100*283,strokeLinecap:"round",stroke:"currentColor",fill:"transparent",r:"45",cx:"50",cy:"50",style:{transition:"stroke-dashoffset 1s linear",color:"var(--primary)"}})]}),g.jsxs("div",{className:"absolute text-4xl sm:text-5xl font-mono",children:[String(E).padStart(2,"0"),":",String(w).padStart(2,"0")]})]},m),g.jsxs("div",{className:"flex gap-4",children:[g.jsx("button",{onClick:_,className:"t-btn-primary rounded-lg px-6 py-2 font-semibold w-28",children:c?"Pause":"Start"}),g.jsx("button",{onClick:M,className:"bg-gray-600 hover:bg-gray-500 rounded-lg px-6 py-2 font-semibold w-28",children:"Reset"})]}),g.jsx("div",{className:"flex flex-col sm:flex-row gap-4 items-center pt-4 w-full max-w-md",style:{borderTop:"1px solid var(--border)"},children:Object.keys(e).map(L=>g.jsxs("div",{className:"flex-1 w-full",children:[g.jsxs("label",{className:"text-xs t-muted capitalize",children:[L.replace("B"," B")," (min)"]}),g.jsx("input",{type:"number",value:e[L],onChange:N=>y(L,N.target.value),className:"w-full rounded-lg p-2 t-input t-ring"})]},L))})]})},_m=({goal:s,updateGoal:e,deleteGoal:n,handleMajorCompletion:r})=>{const[o,c]=st.useState({text:"",link:"",notes:""}),[d,f]=st.useState(!1),[p,m]=st.useState({link:s.link||"",deadline:s.deadline||""}),[S,y]=st.useState(null),_=s.subgoals.length,M=s.subgoals.filter(P=>P.completed).length,E=_>0?Math.round(M/_*100):0,w=_>0&&E===100,v=s.deadline&&new Date(s.deadline)<new Date&&!w,x=P=>{const W=s.subgoals.map(k=>k.id===P?{...k,completed:!k.completed}:k);if(W.length>0&&W.every(k=>k.completed)&&!w)r(),e(s.id,{subgoals:W,lastCompleted:new Date().toISOString()});else{const k=W.length>0&&!W.every(Y=>Y.completed);w&&k?e(s.id,{subgoals:W,lastCompleted:null}):e(s.id,{subgoals:W})}},L=P=>{if(P.preventDefault(),o.text.trim()){const W={id:Date.now(),...o,completed:!1},I=w;e(s.id,{subgoals:[...s.subgoals,W],lastCompleted:I?null:s.lastCompleted}),c({text:"",link:"",notes:""})}},N=()=>{e(s.id,{link:p.link,deadline:p.deadline}),f(!1)};return g.jsxs("div",{id:`goal-${s.id}`,className:`relative p-4 rounded-lg transition-all duration-300 goal-card ${w?"bg-green-500/20 border-green-500/40 goal-card-completed":"bg-gray-800/60"} t-border`,children:[g.jsxs("div",{className:"flex flex-wrap items-center gap-x-3",children:[g.jsx("div",{className:"flex-grow",children:g.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[g.jsx("span",{className:`font-bold text-lg transition-colors duration-300 ${w?"line-through text-gray-500":"text-purple-100 hover:text-purple-200"}`,children:s.text}),s.tag&&g.jsx("span",{className:"px-2 py-0.5 text-xs rounded-full t-pill hover:bg-purple-600/40 transition-all duration-200 priority-badge",children:s.tag}),s.priority==="urgent"&&g.jsx("span",{className:"px-2 py-0.5 bg-red-600/30 text-red-300 text-xs rounded-full hover:bg-red-600/50 transition-all duration-200 priority-badge glow-primary",children:"Urgent"}),s.priority==="high"&&g.jsx("span",{className:"px-2 py-0.5 bg-orange-600/30 text-orange-300 text-xs rounded-full hover:bg-orange-600/50 transition-all duration-200 priority-badge",children:"High"})]})}),g.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[g.jsx("button",{onClick:()=>f(!d),title:"Edit Details",className:"text-cyan-400 hover:text-cyan-300 p-1 goal-action-btn transition-all duration-200",children:g.jsx(qt,{path:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",className:"w-5 h-5"})}),g.jsx("button",{onClick:()=>n(s.id),title:"Delete Goal",className:"text-red-400 hover:text-red-300 p-1 goal-action-btn transition-all duration-200",children:g.jsx(qt,{path:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0",className:"w-5 h-5"})})]})]}),s.deadline&&g.jsxs("div",{className:`mt-2 text-sm flex items-center gap-2 ${v?"text-red-400":"text-gray-400"}`,children:[g.jsx(qt,{path:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18",className:"w-4 h-4"}),g.jsxs("span",{children:["Deadline: ",new Date(s.deadline).toLocaleDateString()]}),v&&g.jsx("span",{className:"font-bold",children:"(Past Due)"})]}),d&&g.jsxs("div",{className:"mt-3 space-y-2 p-3 bg-gray-900/50 rounded-md",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("label",{className:"text-sm w-20",children:"Link:"}),g.jsx("input",{type:"text",value:p.link,onChange:P=>m({...p,link:P.target.value}),placeholder:"Paste URL...",className:"flex-grow bg-gray-900/70 border border-purple-900/70 text-sm rounded-md px-3 py-1"})]}),g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("label",{className:"text-sm w-20",children:"Deadline:"}),g.jsx("input",{type:"date",value:p.deadline,onChange:P=>m({...p,deadline:P.target.value}),className:"flex-grow bg-gray-900/70 border border-purple-900/70 text-sm rounded-md px-3 py-1"})]}),g.jsx("div",{className:"text-right",children:g.jsx("button",{onClick:N,className:"bg-cyan-600 hover:bg-cyan-500 text-sm rounded-md px-4 py-1",children:"Save"})})]}),_>0&&g.jsxs("div",{className:"mt-3 group",children:[g.jsxs("div",{className:"flex justify-between text-sm t-muted mb-1",children:[g.jsx("span",{children:"Progress"}),g.jsxs("span",{className:"font-medium",children:[E,"%"]})]}),g.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2.5 overflow-hidden",children:g.jsx("div",{className:"h-2.5 rounded-full transition-all duration-500 ease-out group-hover:scale-105",style:{width:`${E}%`,background:"linear-gradient(90deg, var(--primary), var(--primary2))",boxShadow:"0 0 10px rgba(99, 102, 241, 0.3)"}})})]}),g.jsx("div",{className:"mt-4 pl-4 space-y-2",style:{borderLeft:"2px solid var(--border)"},children:s.subgoals.map(P=>g.jsxs("div",{className:"group",children:[g.jsxs("div",{className:"flex items-center p-2 rounded-md hover:bg-gray-700/30 transition-colors duration-200",children:[g.jsx("input",{type:"checkbox",checked:P.completed,onChange:()=>x(P.id),className:"w-4 h-4 bg-gray-700 border-gray-600 rounded hover:border-purple-400 transition-colors duration-200",style:{accentColor:"var(--primary)"}}),g.jsx("span",{className:`ml-3 flex-grow cursor-pointer transition-all duration-200 ${P.completed?"line-through text-gray-500":"text-gray-300 group-hover:text-gray-200"}`,onClick:()=>y(S===P.id?null:P.id),children:P.text}),P.link&&g.jsx("a",{href:P.link,target:"_blank",rel:"noopener noreferrer",className:"ml-auto text-cyan-400 hover:text-cyan-300 transition-colors duration-200 p-1 rounded hover:bg-cyan-400/10",children:g.jsx(qt,{path:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",className:"w-4 h-4"})})]}),S===P.id&&g.jsx("div",{className:"ml-7 mt-2 p-3 bg-gray-900/50 rounded-md text-sm text-gray-400 border-l-2 border-purple-500/50 animate-fade-in",children:g.jsx("p",{children:P.notes||"No notes for this step."})})]},P.id))}),g.jsxs("form",{onSubmit:L,className:"mt-4 pl-4 space-y-2",children:[g.jsxs("div",{className:"flex gap-2",children:[g.jsx("input",{type:"text",value:o.text,onChange:P=>c({...o,text:P.target.value}),placeholder:"Add a smaller step...",className:"flex-grow text-sm rounded-md px-3 py-1 t-input t-ring"}),g.jsx("button",{type:"submit",className:"t-btn-primary rounded-md px-2",children:g.jsx(qt,{path:"M12 9v6m3-3H9",className:"w-5 h-5"})})]}),g.jsxs("div",{className:"flex gap-2",children:[g.jsx("input",{type:"text",value:o.link,onChange:P=>c({...o,link:P.target.value}),placeholder:"Optional: http://link",className:"w-1/2 text-sm rounded-md px-3 py-1 t-input t-ring"}),g.jsx("input",{type:"text",value:o.notes,onChange:P=>c({...o,notes:P.target.value}),placeholder:"Optional: notes",className:"w-1/2 text-sm rounded-md px-3 py-1 t-input t-ring"})]})]})]})},ym=({goals:s,events:e,setEvents:n})=>{const[r,o]=st.useState(new Date),[c,d]=st.useState(new Date),[f,p]=st.useState(""),m=()=>{const v=c.toISOString().split("T")[0],x={...e};delete x[v],n(x)},S=v=>{if(v.preventDefault(),f.trim()&&c){const x=c.toISOString().split("T")[0];n(L=>({...L,[x]:f})),p("")}},y=s.flatMap(v=>v.accomplishments||[]).filter(v=>new Date(v.date).toDateString()===c?.toDateString()),_=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),M=new Date(r.getFullYear(),r.getMonth(),1).getDay(),E=Array.from({length:_},(v,x)=>x+1),w=new Date;return w.setHours(0,0,0,0),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[g.jsxs("div",{className:"p-4 rounded-lg t-surface",children:[g.jsxs("div",{className:"flex justify-between items-center mb-4",children:[g.jsx("button",{onClick:()=>o(new Date(r.setMonth(r.getMonth()-1))),className:"p-2 rounded-full t-btn-ghost t-ring",children:g.jsx(qt,{path:"M15.75 19.5L8.25 12l7.5-7.5",className:"w-5 h-5"})}),g.jsx("h2",{className:"text-xl font-bold",children:r.toLocaleString("default",{month:"long",year:"numeric"})}),g.jsx("button",{onClick:()=>o(new Date(r.setMonth(r.getMonth()+1))),className:"p-2 rounded-full t-btn-ghost t-ring",children:g.jsx(qt,{path:"M8.25 4.5l7.5 7.5-7.5 7.5",className:"w-5 h-5"})})]}),g.jsx("div",{className:"grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2",children:["S","M","T","W","T","F","S"].map(v=>g.jsx("div",{children:v},v))}),g.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[Array.from({length:M}).map((v,x)=>g.jsx("div",{},`empty-${x}`)),E.map(v=>{const x=new Date(r.getFullYear(),r.getMonth(),v),L=x.toISOString().split("T")[0],N=x.toDateString()===w.toDateString(),P=x<w,W=c&&x.toDateString()===c.toDateString(),I=s.some(Y=>Y.accomplishments?.some(R=>new Date(R.date).toDateString()===x.toDateString())),k=e[L]||gl[L];return g.jsxs("button",{onClick:()=>d(x),style:W?{backgroundColor:"var(--primary)"}:N&&!W?{boxShadow:"0 0 0 2px var(--ring)"}:void 0,className:`h-12 rounded-lg text-sm relative transition-colors
                                    ${W?"text-white":""}
                                    ${W?"":P?"bg-gray-900/50 text-gray-500 hover:bg-gray-700/50":"bg-gray-900/50 hover:bg-gray-700/50 text-gray-300"}
                                `,children:[v,I&&g.jsx("div",{className:"absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full t-dot"}),k&&g.jsx("div",{className:"absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full t-dot-2"})]},v)})]})]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("h2",{className:"text-2xl font-bold t-muted",children:["Details for ",c.toLocaleDateString()]}),g.jsxs("div",{className:"p-4 rounded-lg space-y-3 t-surface",children:[g.jsx("h3",{className:"font-bold t-muted",children:"Accomplishments Logged"}),g.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto",children:y.length>0?y.map(v=>g.jsxs("div",{className:"p-2 bg-gray-800/50 rounded-lg text-sm",children:[g.jsxs("p",{className:"font-bold text-gray-400",children:[v.goalText," (",v.timeSpent,")"]}),g.jsx("p",{className:"text-gray-300 mt-1",children:v.text})]},v.id)):g.jsx("p",{className:"text-sm text-gray-500 text-center",children:"No work logged for this day."})})]}),g.jsxs("div",{className:"p-4 rounded-lg space-y-3 t-surface",children:[g.jsx("h3",{className:"font-bold t-muted",children:"Special Event"}),e[c.toISOString().split("T")[0]]||gl[c.toISOString().split("T")[0]]?g.jsxs("div",{className:"group relative p-3 bg-gray-800/50 rounded-lg text-sm",children:[g.jsx("p",{children:e[c.toISOString().split("T")[0]]||gl[c.toISOString().split("T")[0]]}),!gl[c.toISOString().split("T")[0]]&&g.jsx("button",{onClick:m,className:"absolute top-1 right-1 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity",children:g.jsx(qt,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]}):g.jsxs("form",{onSubmit:S,children:[g.jsx("input",{value:f,onChange:v=>p(v.target.value),placeholder:"Add an event for this day...",className:"w-full rounded-lg p-2 t-input t-ring"}),g.jsx("button",{type:"submit",className:"mt-2 w-full t-btn-primary rounded-lg py-2 font-semibold text-sm",children:"Save Event"})]})]})]})]})},Sm=({completedGoals:s,schedule:e,habits:n,completedTasksHistory:r,erasedTasksHistory:o})=>{const[c,d]=st.useState("monthly"),p=((E,w)=>{const v=new Date;return E.filter(x=>{if(!x.lastCompleted)return!1;const L=new Date(x.lastCompleted);if(isNaN(L.getTime()))return!1;if(w==="weekly"){const N=new Date(v);return N.setDate(N.getDate()-7),N.setHours(0,0,0,0),L.setHours(0,0,0,0),L>=N}return w==="monthly"?L.getMonth()===v.getMonth()&&L.getFullYear()===v.getFullYear():w==="yearly"?L.getFullYear()===v.getFullYear():!0})})(s,c),m=e.filter(E=>E.completed).length,S=e.length,y=n.reduce((E,w)=>E+(w.completedDates?.length||0),0),_=p.length+m+y,M=_>0?p.length/_*100:0;return g.jsxs("div",{className:"space-y-8",children:[g.jsx("h2",{className:"text-3xl font-bold text-center t-muted mb-6",children:"Mission Analytics"}),g.jsx("div",{className:"flex justify-center gap-2",children:["weekly","monthly","yearly"].map(E=>g.jsx("button",{onClick:()=>d(E),className:`px-4 py-1 rounded-md text-sm t-ring ${c===E?"t-btn-primary":"t-surface-2 t-btn-ghost"}`,children:E.charAt(0).toUpperCase()+E.slice(1)},E))}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-purple-300",children:p.length}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Goals Completed"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[g.jsxs("p",{className:"text-3xl font-bold text-teal-300",children:[m,"/",S]}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Tasks Completed"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-green-300",children:y}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Habit Check-ins"})]})]}),g.jsxs("div",{className:"text-center",children:[g.jsxs("p",{className:"text-lg text-gray-300",children:["Total Accomplishments (",c,")"]}),g.jsx("p",{className:"text-5xl font-bold t-gradient-text",children:_}),g.jsxs("div",{className:"relative w-32 h-32 mx-auto mt-4",children:[g.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 36 36",children:[g.jsx("path",{className:"text-gray-700",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"currentColor",strokeWidth:"2"}),g.jsx("path",{className:"text-green-500",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:`${M}, 100`})]}),g.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-2xl",children:"✨"})]})]}),g.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg",children:[g.jsx("h3",{className:"text-xl font-bold t-muted mb-4",children:"Accomplishments Breakdown"}),g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left text-sm",children:[g.jsx("thead",{children:g.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[g.jsx("th",{className:"p-2",children:"Type"}),g.jsx("th",{className:"p-2",children:"Count"}),g.jsx("th",{className:"p-2",children:"Percentage"})]})}),g.jsxs("tbody",{children:[g.jsxs("tr",{style:{borderBottom:"1px solid rgba(60, 60, 70, 0.3)"},children:[g.jsx("td",{className:"p-2",children:"🎯 Missions"}),g.jsx("td",{className:"p-2",children:p.length}),g.jsxs("td",{className:"p-2",children:[_>0?Math.round(p.length/_*100):0,"%"]})]}),g.jsxs("tr",{style:{borderBottom:"1px solid rgba(60, 60, 70, 0.3)"},children:[g.jsx("td",{className:"p-2",children:"✓ Daily Tasks"}),g.jsx("td",{className:"p-2",children:m}),g.jsxs("td",{className:"p-2",children:[_>0?Math.round(m/_*100):0,"%"]})]}),g.jsxs("tr",{children:[g.jsx("td",{className:"p-2",children:"🔥 Habit Check-ins"}),g.jsx("td",{className:"p-2",children:y}),g.jsxs("td",{className:"p-2",children:[_>0?Math.round(y/_*100):0,"%"]})]})]})]})})]}),g.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg",children:[g.jsx("h3",{className:"text-xl font-bold t-muted mb-4",children:"Completed Goals Details"}),g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"w-full text-left",children:[g.jsx("thead",{children:g.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[g.jsx("th",{className:"p-2",children:"Mission"}),g.jsx("th",{className:"p-2",children:"Date Completed"})]})}),g.jsx("tbody",{children:p.length===0?g.jsx("tr",{children:g.jsx("td",{colSpan:"2",className:"p-4 text-center text-gray-400",children:"No completed goals in this timeframe"})}):p.map(E=>g.jsxs("tr",{className:"border-b border-gray-800",children:[g.jsx("td",{className:"p-2",children:E.text}),g.jsx("td",{className:"p-2",children:E.lastCompleted?new Date(E.lastCompleted).toLocaleDateString():"N/A"})]},E.id))})]})})]}),g.jsxs("div",{className:"p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg border border-blue-500/30",children:[g.jsx("h3",{className:"text-xl font-bold text-cyan-300 mb-4",children:"Task Analytics"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4",children:[g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-blue-800/50 text-center",children:[g.jsx("p",{className:"text-2xl font-bold text-cyan-300",children:e.length+r.length+o.length}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Total Tasks Created"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-green-800/50 text-center",children:[g.jsx("p",{className:"text-2xl font-bold text-green-300",children:e.filter(E=>E.completed).length+r.length}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Completed"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-orange-800/50 text-center",children:[g.jsx("p",{className:"text-2xl font-bold text-orange-300",children:o.length}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Unaccomplished"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-red-800/50 text-center",children:[g.jsx("p",{className:"text-2xl font-bold text-red-300",children:e.filter(E=>!E.completed).length}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Active/Pending"})]})]})]})]})},Mm=({goals:s,updateGoal:e,deleteGoal:n})=>{const[r,o]=st.useState(null),[c,d]=st.useState(null),[f,p]=st.useState(""),[m,S]=st.useState(""),y=E=>{const w=s.find(v=>v.id===E);if(w){const v={id:Date.now(),date:new Date().toISOString(),text:"Quick Check-in",goalId:w.id,goalText:w.text,timeSpent:"5 min"},x=[...w.accomplishments||[],v];e(E,{accomplishments:x})}},_=E=>{E.preventDefault();const w=s.find(v=>v.id===r);if(f.trim()&&w&&c){const v={id:Date.now(),date:c.toISOString(),text:f,goalId:w.id,goalText:w.text,timeSpent:m},x=[...w.accomplishments||[],v];e(r,{accomplishments:x}),p(""),S(""),d(null)}},M=(E,w)=>{const v=s.find(x=>x.id===E);if(v){const x=v.accomplishments.filter(L=>L.id!==w);e(E,{accomplishments:x})}};return g.jsxs("div",{className:"space-y-6",children:[g.jsx("h2",{className:"text-3xl font-bold text-center t-muted mb-6",children:"Mission Logbook"}),g.jsx("div",{className:"space-y-4",children:s.map(E=>{const w=[],v=new Date(E.dateCreated),x=E.deadline?new Date(E.deadline):new Date;for(let L=new Date(v);L<=x;L.setDate(L.getDate()+1))w.push(new Date(L));return g.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg",children:[g.jsxs("div",{className:"flex items-center gap-4",children:[g.jsx("h3",{className:"font-bold text-lg text-purple-200 cursor-pointer hover:underline",onClick:()=>o(r===E.id?null:E.id),children:E.text}),g.jsx("button",{onClick:()=>y(E.id),title:"Quick Check-in for Today",className:"ml-auto bg-green-600 hover:bg-green-500 rounded-full p-2",children:g.jsx(qt,{path:"M12 4.5v15m7.5-7.5h-15",className:"w-4 h-4"})}),g.jsx("button",{onClick:()=>n(E.id),title:"Delete Goal Permanently",className:"text-red-500 hover:text-red-400 p-2 rounded-full hover:bg-red-500/20",children:g.jsx(qt,{path:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0",className:"w-4 h-4"})})]}),r===E.id&&g.jsxs("div",{className:"mt-4",children:[g.jsx("div",{className:"flex flex-wrap gap-2",children:w.map(L=>g.jsx("button",{onClick:()=>d(L),className:`w-10 h-10 rounded-lg text-xs flex items-center justify-center
                                                ${c?.toDateString()===L.toDateString()?"bg-purple-600":"bg-gray-700/60 hover:bg-gray-600/60"}`,children:L.getDate()},L.toISOString()))}),c&&g.jsxs("form",{onSubmit:_,className:"mt-4 space-y-2 p-3 bg-gray-900/50 rounded-lg",children:[g.jsxs("h4",{className:"text-sm font-bold",children:["Log for ",c.toLocaleDateString()]}),E.accomplishments?.filter(L=>new Date(L.date).toDateString()===c.toDateString()).map(L=>g.jsxs("div",{className:"group flex items-center justify-between bg-gray-800/50 p-2 rounded",children:[g.jsxs("p",{className:"text-sm",children:[L.text," (",L.timeSpent,")"]}),g.jsx("button",{onClick:()=>M(E.id,L.id),className:"text-red-500 opacity-0 group-hover:opacity-100",children:g.jsx(qt,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]},L.id)),g.jsx("textarea",{value:f,onChange:L=>p(L.target.value),placeholder:"Log an accomplishment...",rows:"2",className:"w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 text-sm"}),g.jsx("input",{type:"text",value:m,onChange:L=>S(L.target.value),placeholder:"Time spent",className:"w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 text-sm"}),g.jsx("button",{type:"submit",className:"w-full bg-purple-600 hover:bg-purple-500 rounded-lg py-1 font-semibold text-sm",children:"Save Log"})]})]})]},E.id)})})]})},Em=({habits:s,setHabits:e})=>{const[n,r]=st.useState({name:"",color:"purple"}),o=new Date().toDateString(),c=y=>y.length,d=(y,_)=>{e(s.map(M=>{if(M.id===y){const E=M.completedDates||[],w=_.toDateString(),x=E.includes(w)?E.filter(L=>L!==w):[...E,w];return{...M,completedDates:x,currentStreak:c(x)}}return M}))},f=y=>{if(y.preventDefault(),n.name.trim()){const _={id:Date.now(),name:n.name,color:n.color,completedDates:[],currentStreak:0,dateCreated:new Date().toISOString()};e([...s,_]),r({name:"",color:"purple"})}},p=y=>e(s.filter(_=>_.id!==y)),m=()=>{const y=[];for(let _=6;_>=0;_--){const M=new Date;M.setDate(M.getDate()-_),y.push(M)}return y},S=y=>({purple:"#a855f7",blue:"#3b82f6",green:"#22c55e",yellow:"#f59e0b",pink:"#ec4899",orange:"#f97316"})[y]||"#a855f7";return g.jsxs("div",{className:"space-y-6",children:[g.jsx("h2",{className:"text-3xl font-bold text-center t-muted mb-6",children:"Habit Tracker"}),g.jsxs("form",{onSubmit:f,className:"flex flex-col sm:flex-row gap-2 mb-6",children:[g.jsx("input",{type:"text",value:n.name,onChange:y=>r({...n,name:y.target.value}),placeholder:"New habit...",className:"flex-grow rounded-lg px-4 py-2 t-input t-ring"}),g.jsxs("select",{value:n.color,onChange:y=>r({...n,color:y.target.value}),className:"rounded-lg px-4 py-2 t-input t-ring",children:[g.jsx("option",{value:"purple",children:"Purple"}),g.jsx("option",{value:"blue",children:"Blue"}),g.jsx("option",{value:"green",children:"Green"}),g.jsx("option",{value:"yellow",children:"Yellow"}),g.jsx("option",{value:"pink",children:"Pink"}),g.jsx("option",{value:"orange",children:"Orange"})]}),g.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-6 py-2 font-semibold",children:"Add Habit"})]}),g.jsx("div",{className:"space-y-4",children:s.length===0?g.jsx("p",{className:"text-center t-muted-2 p-8 bg-gray-800/50 rounded-lg",children:"No habits yet. Start building your routine!"}):s.map(y=>{const _=m(),M=y.completedDates||[],E=y.currentStreak||0,w=M.includes(o);return g.jsxs("div",{className:"rounded-lg p-4 t-surface",children:[g.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("span",{className:"inline-block w-2.5 h-2.5 rounded-full",style:{backgroundColor:S(y.color)}}),g.jsx("h3",{className:`text-lg font-bold t-muted ${w?"line-through text-gray-500":""}`,children:y.name}),g.jsxs("span",{className:`px-2 py-1 rounded text-xs font-semibold ${w?"bg-green-500/20 text-green-400":"t-pill"}`,children:["🔥 ",E," day streak"]})]}),g.jsx("button",{onClick:()=>p(y.id),className:"text-red-400 hover:text-red-300",children:g.jsx(qt,{path:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0",className:"w-5 h-5"})})]}),g.jsx("div",{className:"flex gap-2",children:_.map((v,x)=>{const L=v.toDateString(),N=M.includes(L),P=L===o,W=N?{backgroundColor:"var(--primary)",borderColor:"var(--primary)"}:{borderColor:"rgba(148, 163, 184, 0.35)"};return P&&!N&&(W.boxShadow="0 0 0 2px var(--ring)"),g.jsx("button",{onClick:()=>d(y.id,v),style:W,className:`flex-1 aspect-square rounded-lg border-2 transition-all ${N?"text-white":"t-surface-2 t-btn-ghost text-gray-300"} t-ring`,title:v.toLocaleDateString(),children:g.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[g.jsx("span",{className:"text-xs",children:v.getDate()}),N&&g.jsx("span",{className:"text-sm",children:"✓"})]})},x)})})]},y.id)})})]})},Tm=({notes:s,setNotes:e})=>{const[n,r]=st.useState(""),[o,c]=st.useState(""),[d,f]=st.useState(null),p=E=>d===E,m=s.find(E=>E.id===d)||null,S=E=>{if(E.preventDefault(),n.trim()){const w={id:Date.now(),text:n,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e([...s,w]),r(""),f(w.id)}},y=(E,w)=>{e(s.map(v=>v.id===E?{...v,text:w,updatedAt:new Date().toISOString()}:v))},_=E=>e(s.filter(w=>w.id!==E)),M=s.filter(E=>E.text.toLowerCase().includes(o.toLowerCase()));return g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between",children:[g.jsxs("div",{children:[g.jsx("h2",{className:"text-2xl font-bold t-muted",children:"Notes"}),g.jsx("p",{className:"text-sm t-muted-2",children:"Fast capture + focused editing."})]}),g.jsxs("form",{onSubmit:S,className:"flex gap-2 w-full sm:w-auto",children:[g.jsx("input",{type:"text",value:n,onChange:E=>r(E.target.value),placeholder:"New note...",className:"flex-1 sm:w-64 rounded-lg px-4 py-2 t-input t-ring"}),g.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-4 py-2 font-semibold",children:"Add"})]})]}),g.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[g.jsxs("div",{className:"md:w-80 shrink-0",children:[g.jsx("input",{type:"text",value:o,onChange:E=>c(E.target.value),placeholder:"Search notes...",className:"w-full rounded-lg px-4 py-2 t-input t-ring mb-3"}),g.jsx("div",{className:"space-y-2 max-h-[55vh] md:max-h-[65vh] overflow-y-auto pr-1",children:M.length===0?g.jsx("div",{className:"text-center t-muted-2 p-6 bg-gray-800/40 rounded-lg",children:o?"No notes found":"No notes yet. Add one above."}):M.slice().sort((E,w)=>new Date(w.updatedAt)-new Date(E.updatedAt)).map(E=>g.jsxs("button",{onClick:()=>f(E.id),className:`w-full text-left rounded-xl p-3 t-ring ${p(E.id)?"t-btn-primary":"t-surface-2 t-btn-ghost"}`,children:[g.jsx("div",{className:"text-sm font-semibold truncate",children:(E.text||"").split(`
`)[0]||"Untitled"}),g.jsx("div",{className:`text-xs mt-1 line-clamp-2 ${p(E.id)?"text-white/80":"t-muted-2"}`,children:(E.text||"").trim()||"…"}),g.jsx("div",{className:`text-[11px] mt-2 ${p(E.id)?"text-white/70":"t-muted-2"}`,children:new Date(E.updatedAt).toLocaleString()})]},E.id))})]}),g.jsx("div",{className:"flex-1",children:m?g.jsxs("div",{className:"rounded-2xl p-4 t-surface",children:[g.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-sm t-muted-2",children:"Editing"}),g.jsx("div",{className:"font-semibold truncate",children:(m.text||"").split(`
`)[0]||"Untitled"})]}),g.jsx("button",{onClick:()=>{_(m.id),f(null)},className:"rounded-lg px-3 py-2 text-sm t-btn-ghost t-ring text-red-300",children:"Delete"})]}),g.jsx("textarea",{value:m.text,onChange:E=>y(m.id,E.target.value),className:"w-full rounded-xl p-3 min-h-[35vh] md:min-h-[55vh] t-input t-ring text-sm",placeholder:"Write…"})]}):g.jsxs("div",{className:"rounded-2xl p-6 t-surface text-center",children:[g.jsx("div",{className:"text-lg font-bold t-muted",children:"Select a note"}),g.jsx("div",{className:"text-sm t-muted-2 mt-1",children:"Pick something on the left to start editing."})]})})]})]})},wm=({goals:s,habits:e,schedule:n,completedTasksHistory:r,erasedTasksHistory:o})=>{const c=s.filter(R=>{const A=R.subgoals.length,B=R.subgoals.filter(re=>re.completed).length;return A===0||B<A}),d=s.filter(R=>{const A=R.subgoals.length,B=R.subgoals.filter(re=>re.completed).length;return A>0&&B===A}),f=new Date().toDateString(),p=e.filter(R=>(R.completedDates||[]).includes(f)).length,m=n.filter(R=>R.completed&&new Date(R.dateCreated||new Date).toDateString()===f).length+r.filter(R=>new Date(R.completedDate||new Date).toDateString()===f).length,S=n.length,y=n.filter(R=>R.completed).reduce((R,A)=>{const B=A.hours*3600+A.minutes*60+A.seconds;return R+B},0),_=Math.round(y/60),M=c.filter(R=>R.priority==="urgent"),E=c.filter(R=>R.priority==="high");function w(R,A,B){let re=0;const Z=R.length,de=R.filter(le=>{const se=le.subgoals.length,O=le.subgoals.filter(ne=>ne.completed).length;return se>0&&O===se}).length;re+=Z>0?de/Z*30:0;const ue=A.length,oe=A.filter(le=>(le.completedDates||[]).includes(new Date().toDateString())).length;re+=ue>0?oe/ue*30:0;const ae=B.filter(le=>le.completed).length,H=B.length;return re+=H>0?ae/H*40:0,Math.round(re)}const v=[...n,...r,...o],x=v.length,L=n.filter(R=>R.completed).length+r.length,N=o.length,P=n.filter(R=>!R.completed).length,W=x>0?Math.round(L/x*100):0,I=new Set(v.map(R=>R.dateCreated?new Date(R.dateCreated).toDateString():f)).size,k=w(s,e,n),Y=R=>R>=80?"text-green-400":R>=60?"text-yellow-400":R>=40?"text-orange-400":"text-red-400";return g.jsxs("div",{className:"space-y-6",children:[g.jsx("h2",{className:"text-3xl font-bold text-center text-purple-300 mb-6",children:"Productivity Dashboard"}),g.jsx("div",{className:"bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/30",children:g.jsxs("div",{className:"text-center",children:[g.jsx("p",{className:"text-lg text-gray-300 mb-2",children:"Today's Productivity Score"}),g.jsx("p",{className:`text-6xl font-bold ${Y(k)} mb-2`,children:k}),g.jsx("p",{className:"text-sm text-gray-400",children:"Out of 100"})]})}),g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:[g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-purple-300",children:c.length}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Active Goals"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[g.jsxs("p",{className:"text-3xl font-bold text-green-300",children:[p,"/",e.length]}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Habits Today"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-blue-800/50 text-center",children:[g.jsxs("p",{className:"text-3xl font-bold text-blue-300",children:[L,"/",x]}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Overall Tasks"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[g.jsxs("p",{className:"text-3xl font-bold text-cyan-300",children:[m,"/",S]}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Tasks Today"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[g.jsxs("p",{className:"text-3xl font-bold text-yellow-300",children:[_,"m"]}),g.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Time Focused"})]})]}),g.jsxs("div",{className:"bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-lg p-6 border border-blue-500/30",children:[g.jsx("h3",{className:"text-xl font-bold text-cyan-300 mb-4",children:"Task Analytics"}),g.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-blue-800/50 text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-cyan-300",children:x}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Total Created"}),g.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["across ",I," day",I!==1?"s":""]})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-green-800/50 text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-green-300",children:L}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Completed"}),g.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:[W,"% done"]})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-orange-800/50 text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-orange-300",children:N}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Unaccomplished"}),g.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"erased/planned"})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-red-800/50 text-center",children:[g.jsx("p",{className:"text-3xl font-bold text-red-300",children:P}),g.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Active/Pending"}),g.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"in progress"})]})]})]}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50",children:[g.jsx("h3",{className:"text-lg font-bold text-teal-300 mb-3",children:"Daily Planner Status"}),g.jsxs("div",{className:"space-y-2",children:[n.slice(0,5).map(R=>g.jsxs("div",{className:"flex items-center justify-between text-sm",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:R.completed?"✓":"○",style:{color:R.completed?"#4ade80":"#888"}}),g.jsx("span",{className:R.completed?"line-through text-gray-500":"text-gray-300",children:R.text})]}),g.jsx("span",{className:"text-xs text-gray-500",children:R.hasDuration?"⏱":"📌"})]},R.id)),n.length>5&&g.jsxs("p",{className:"text-xs text-gray-500 mt-2",children:["+",n.length-5," more tasks"]})]})]}),g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50",children:[g.jsx("h3",{className:"text-lg font-bold text-cyan-300 mb-3",children:"Completed Goals"}),g.jsx("p",{className:"text-3xl font-bold text-green-400 mb-2",children:d.length}),g.jsx("p",{className:"text-sm text-gray-400",children:"Total missions accomplished"})]})]}),(M.length>0||E.length>0)&&g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50",children:[g.jsx("h3",{className:"text-xl font-bold text-purple-300 mb-4",children:"Priority Focus"}),M.length>0&&g.jsxs("div",{className:"mb-4",children:[g.jsxs("p",{className:"text-red-400 font-semibold mb-2",children:["🔥 Urgent (",M.length,")"]}),g.jsx("div",{className:"space-y-2",children:M.map(R=>g.jsx("div",{className:"bg-red-500/10 border border-red-500/30 rounded-lg p-2",children:g.jsx("p",{className:"text-sm",children:R.text})},R.id))})]}),E.length>0&&g.jsxs("div",{children:[g.jsxs("p",{className:"text-orange-400 font-semibold mb-2",children:["⭐ High Priority (",E.length,")"]}),g.jsx("div",{className:"space-y-2",children:E.map(R=>g.jsx("div",{className:"bg-orange-500/10 border border-orange-500/30 rounded-lg p-2",children:g.jsx("p",{className:"text-sm",children:R.text})},R.id))})]})]}),e.length>0&&g.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50",children:[g.jsx("h3",{className:"text-xl font-bold text-purple-300 mb-4",children:"Habit Streaks"}),g.jsx("div",{className:"space-y-2",children:e.slice(0,5).map(R=>{const A=R.currentStreak||0,re=(R.completedDates||[]).includes(f);return g.jsxs("div",{className:"flex items-center justify-between bg-gray-900/50 rounded-lg p-2",children:[g.jsx("span",{className:"text-sm",children:R.name}),g.jsxs("span",{className:`text-sm font-semibold ${re?"text-green-400":"text-gray-500"}`,children:["🔥 ",A," days"]})]},R.id)})})]})]})};q0.createRoot(document.getElementById("root")).render(g.jsx(st.StrictMode,{children:g.jsx(oE,{})}));
