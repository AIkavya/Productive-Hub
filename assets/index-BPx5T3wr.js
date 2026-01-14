(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var fu={exports:{}},wa={},hu={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sp;function B0(){if(sp)return ut;sp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function g(O,ie,Le){this.props=O,this.context=ie,this.refs=T,this.updater=Le||S}g.prototype.isReactComponent={},g.prototype.setState=function(O,ie){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ie,"setState")},g.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function v(){}v.prototype=g.prototype;function b(O,ie,Le){this.props=O,this.context=ie,this.refs=T,this.updater=Le||S}var P=b.prototype=new v;P.constructor=b,E(P,g.prototype),P.isPureReactComponent=!0;var N=Array.isArray,q=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function $(O,ie,Le){var Z,W={},se=null,ue=null;if(ie!=null)for(Z in ie.ref!==void 0&&(ue=ie.ref),ie.key!==void 0&&(se=""+ie.key),ie)q.call(ie,Z)&&!U.hasOwnProperty(Z)&&(W[Z]=ie[Z]);var Ce=arguments.length-2;if(Ce===1)W.children=Le;else if(1<Ce){for(var be=Array(Ce),We=0;We<Ce;We++)be[We]=arguments[We+2];W.children=be}if(O&&O.defaultProps)for(Z in Ce=O.defaultProps,Ce)W[Z]===void 0&&(W[Z]=Ce[Z]);return{$$typeof:s,type:O,key:se,ref:ue,props:W,_owner:F.current}}function L(O,ie){return{$$typeof:s,type:O.type,key:ie,ref:O.ref,props:O.props,_owner:O._owner}}function R(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function H(O){var ie={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Le){return ie[Le]})}var le=/\/+/g;function Q(O,ie){return typeof O=="object"&&O!==null&&O.key!=null?H(""+O.key):ie.toString(36)}function fe(O,ie,Le,Z,W){var se=typeof O;(se==="undefined"||se==="boolean")&&(O=null);var ue=!1;if(O===null)ue=!0;else switch(se){case"string":case"number":ue=!0;break;case"object":switch(O.$$typeof){case s:case e:ue=!0}}if(ue)return ue=O,W=W(ue),O=Z===""?"."+Q(ue,0):Z,N(W)?(Le="",O!=null&&(Le=O.replace(le,"$&/")+"/"),fe(W,ie,Le,"",function(We){return We})):W!=null&&(R(W)&&(W=L(W,Le+(!W.key||ue&&ue.key===W.key?"":(""+W.key).replace(le,"$&/")+"/")+O)),ie.push(W)),1;if(ue=0,Z=Z===""?".":Z+":",N(O))for(var Ce=0;Ce<O.length;Ce++){se=O[Ce];var be=Z+Q(se,Ce);ue+=fe(se,ie,Le,be,W)}else if(be=y(O),typeof be=="function")for(O=be.call(O),Ce=0;!(se=O.next()).done;)se=se.value,be=Z+Q(se,Ce++),ue+=fe(se,ie,Le,be,W);else if(se==="object")throw ie=String(O),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return ue}function de(O,ie,Le){if(O==null)return O;var Z=[],W=0;return fe(O,Z,"","",function(se){return ie.call(Le,se,W++)}),Z}function ae(O){if(O._status===-1){var ie=O._result;ie=ie(),ie.then(function(Le){(O._status===0||O._status===-1)&&(O._status=1,O._result=Le)},function(Le){(O._status===0||O._status===-1)&&(O._status=2,O._result=Le)}),O._status===-1&&(O._status=0,O._result=ie)}if(O._status===1)return O._result.default;throw O._result}var ce={current:null},B={transition:null},he={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function oe(){throw Error("act(...) is not supported in production builds of React.")}return ut.Children={map:de,forEach:function(O,ie,Le){de(O,function(){ie.apply(this,arguments)},Le)},count:function(O){var ie=0;return de(O,function(){ie++}),ie},toArray:function(O){return de(O,function(ie){return ie})||[]},only:function(O){if(!R(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ut.Component=g,ut.Fragment=n,ut.Profiler=o,ut.PureComponent=b,ut.StrictMode=r,ut.Suspense=p,ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,ut.act=oe,ut.cloneElement=function(O,ie,Le){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Z=E({},O.props),W=O.key,se=O.ref,ue=O._owner;if(ie!=null){if(ie.ref!==void 0&&(se=ie.ref,ue=F.current),ie.key!==void 0&&(W=""+ie.key),O.type&&O.type.defaultProps)var Ce=O.type.defaultProps;for(be in ie)q.call(ie,be)&&!U.hasOwnProperty(be)&&(Z[be]=ie[be]===void 0&&Ce!==void 0?Ce[be]:ie[be])}var be=arguments.length-2;if(be===1)Z.children=Le;else if(1<be){Ce=Array(be);for(var We=0;We<be;We++)Ce[We]=arguments[We+2];Z.children=Ce}return{$$typeof:s,type:O.type,key:W,ref:se,props:Z,_owner:ue}},ut.createContext=function(O){return O={$$typeof:f,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},ut.createElement=$,ut.createFactory=function(O){var ie=$.bind(null,O);return ie.type=O,ie},ut.createRef=function(){return{current:null}},ut.forwardRef=function(O){return{$$typeof:d,render:O}},ut.isValidElement=R,ut.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:ae}},ut.memo=function(O,ie){return{$$typeof:m,type:O,compare:ie===void 0?null:ie}},ut.startTransition=function(O){var ie=B.transition;B.transition={};try{O()}finally{B.transition=ie}},ut.unstable_act=oe,ut.useCallback=function(O,ie){return ce.current.useCallback(O,ie)},ut.useContext=function(O){return ce.current.useContext(O)},ut.useDebugValue=function(){},ut.useDeferredValue=function(O){return ce.current.useDeferredValue(O)},ut.useEffect=function(O,ie){return ce.current.useEffect(O,ie)},ut.useId=function(){return ce.current.useId()},ut.useImperativeHandle=function(O,ie,Le){return ce.current.useImperativeHandle(O,ie,Le)},ut.useInsertionEffect=function(O,ie){return ce.current.useInsertionEffect(O,ie)},ut.useLayoutEffect=function(O,ie){return ce.current.useLayoutEffect(O,ie)},ut.useMemo=function(O,ie){return ce.current.useMemo(O,ie)},ut.useReducer=function(O,ie,Le){return ce.current.useReducer(O,ie,Le)},ut.useRef=function(O){return ce.current.useRef(O)},ut.useState=function(O){return ce.current.useState(O)},ut.useSyncExternalStore=function(O,ie,Le){return ce.current.useSyncExternalStore(O,ie,Le)},ut.useTransition=function(){return ce.current.useTransition()},ut.version="18.3.1",ut}var ap;function Ad(){return ap||(ap=1,hu.exports=B0()),hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function H0(){if(op)return wa;op=1;var s=Ad(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var x,_={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!c.hasOwnProperty(x)&&(_[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)_[x]===void 0&&(_[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:S,props:_,_owner:o.current}}return wa.Fragment=n,wa.jsx=f,wa.jsxs=f,wa}var lp;function V0(){return lp||(lp=1,fu.exports=H0()),fu.exports}var M=V0(),it=Ad(),Wo={},pu={exports:{}},Mn={},mu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function G0(){return cp||(cp=1,(function(s){function e(B,he){var oe=B.length;B.push(he);e:for(;0<oe;){var O=oe-1>>>1,ie=B[O];if(0<o(ie,he))B[O]=he,B[oe]=ie,oe=O;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var he=B[0],oe=B.pop();if(oe!==he){B[0]=oe;e:for(var O=0,ie=B.length,Le=ie>>>1;O<Le;){var Z=2*(O+1)-1,W=B[Z],se=Z+1,ue=B[se];if(0>o(W,oe))se<ie&&0>o(ue,W)?(B[O]=ue,B[se]=oe,O=se):(B[O]=W,B[Z]=oe,O=Z);else if(se<ie&&0>o(ue,oe))B[O]=ue,B[se]=oe,O=se;else break e}}return he}function o(B,he){var oe=B.sortIndex-he.sortIndex;return oe!==0?oe:B.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],x=1,_=null,y=3,S=!1,E=!1,T=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var he=n(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=B)r(m),he.sortIndex=he.expirationTime,e(p,he);else break;he=n(m)}}function N(B){if(T=!1,P(B),!E)if(n(p)!==null)E=!0,ae(q);else{var he=n(m);he!==null&&ce(N,he.startTime-B)}}function q(B,he){E=!1,T&&(T=!1,v($),$=-1),S=!0;var oe=y;try{for(P(he),_=n(p);_!==null&&(!(_.expirationTime>he)||B&&!H());){var O=_.callback;if(typeof O=="function"){_.callback=null,y=_.priorityLevel;var ie=O(_.expirationTime<=he);he=s.unstable_now(),typeof ie=="function"?_.callback=ie:_===n(p)&&r(p),P(he)}else r(p);_=n(p)}if(_!==null)var Le=!0;else{var Z=n(m);Z!==null&&ce(N,Z.startTime-he),Le=!1}return Le}finally{_=null,y=oe,S=!1}}var F=!1,U=null,$=-1,L=5,R=-1;function H(){return!(s.unstable_now()-R<L)}function le(){if(U!==null){var B=s.unstable_now();R=B;var he=!0;try{he=U(!0,B)}finally{he?Q():(F=!1,U=null)}}else F=!1}var Q;if(typeof b=="function")Q=function(){b(le)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,de=fe.port2;fe.port1.onmessage=le,Q=function(){de.postMessage(null)}}else Q=function(){g(le,0)};function ae(B){U=B,F||(F=!0,Q())}function ce(B,he){$=g(function(){B(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ae(q))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(B){switch(y){case 1:case 2:case 3:var he=3;break;default:he=y}var oe=y;y=he;try{return B()}finally{y=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,he){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var oe=y;y=B;try{return he()}finally{y=oe}},s.unstable_scheduleCallback=function(B,he,oe){var O=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?O+oe:O):oe=O,B){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=oe+ie,B={id:x++,callback:he,priorityLevel:B,startTime:oe,expirationTime:ie,sortIndex:-1},oe>O?(B.sortIndex=oe,e(m,B),n(p)===null&&B===n(m)&&(T?(v($),$=-1):T=!0,ce(N,oe-O))):(B.sortIndex=ie,e(p,B),E||S||(E=!0,ae(q))),B},s.unstable_shouldYield=H,s.unstable_wrapCallback=function(B){var he=y;return function(){var oe=y;y=he;try{return B.apply(this,arguments)}finally{y=oe}}}})(gu)),gu}var up;function W0(){return up||(up=1,mu.exports=G0()),mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function j0(){if(dp)return Mn;dp=1;var s=Ad(),e=W0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function y(t){return p.call(_,t)?!0:p.call(x,t)?!1:m.test(t)?_[t]=!0:(x[t]=!0,!1)}function S(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,l){if(i===null||typeof i>"u"||S(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,a,l,u,h,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=w}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){g[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];g[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){g[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){g[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){g[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){g[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){g[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){g[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){g[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function b(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,b);g[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,b);g[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,b);g[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){g[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),g.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){g[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,a,l){var u=g.hasOwnProperty(i)?g[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,u,l)&&(a=null),l||u===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):u.mustUseProperty?t[u.propertyName]=a===null?u.type===3?!1:"":a:(i=u.attributeName,l=u.attributeNamespace,a===null?t.removeAttribute(i):(u=u.type,a=u===3||u===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,q=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),B=Symbol.iterator;function he(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,O;function ie(t){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var Le=!1;function Z(t,i){if(!t||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var u=ee.stack.split(`
`),h=l.stack.split(`
`),w=u.length-1,D=h.length-1;1<=w&&0<=D&&u[w]!==h[D];)D--;for(;1<=w&&0<=D;w--,D--)if(u[w]!==h[D]){if(w!==1||D!==1)do if(w--,D--,0>D||u[w]!==h[D]){var z=`
`+u[w].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=w&&0<=D);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ie(t):""}function W(t){switch(t.tag){case 5:return ie(t.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case F:return"Portal";case L:return"Profiler";case $:return"StrictMode";case Q:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case R:return(t._context.displayName||"Context")+".Provider";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case de:return i=t.displayName||null,i!==null?i:se(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return se(t(i))}catch{}}return null}function ue(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(i);case 8:return i===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ce(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function be(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(t){var i=be(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(w){l=""+w,h.call(this,w)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(w){l=""+w},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function gt(t){t._valueTracker||(t._valueTracker=We(t))}function k(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=be(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function At(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dt(t,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function mt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Ce(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ge(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function Ct(t,i){Ge(t,i);var a=Ce(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?qe(t,i.type,a):i.hasOwnProperty("defaultValue")&&qe(t,i.type,Ce(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Je(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function qe(t,i,a){(i!=="number"||At(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var I=Array.isArray;function A(t,i,a,l){if(t=t.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=i.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ce(a),i=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function ne(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xe(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(I(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Ce(a)}}function Se(t,i){var a=Ce(i.value),l=Ce(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function Xe(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?Xe(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fe,st=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,u)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Fe=Fe||document.createElement("div"),Fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Fe.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var De={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];Object.keys(De).forEach(function(t){ft.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),De[i]=De[t]})});function tt(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||De.hasOwnProperty(t)&&De[t]?(""+i).trim():i+"px"}function Oe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,u=tt(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,u):t[a]=u}}var rt=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function at(t,i){if(i){if(rt[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function we(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pe=null,me=null,Te=null;function Ze(t){if(t=ca(t)){if(typeof pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=ro(i),pe(t.stateNode,t.type,i))}}function ht(t){me?Te?Te.push(t):Te=[t]:me=t}function Ot(){if(me){var t=me,i=Te;if(Te=me=null,Ze(t),i)for(t=0;t<i.length;t++)Ze(i[t])}}function Vt(t,i){return t(i)}function vt(){}var Rn=!1;function bn(t,i,a){if(Rn)return t(i,a);Rn=!0;try{return Vt(t,i,a)}finally{Rn=!1,(me!==null||Te!==null)&&(vt(),Ot())}}function Oi(t,i){var a=t.stateNode;if(a===null)return null;var l=ro(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Yn=!1;if(d)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){Yn=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{Yn=!1}function ka(t,i,a,l,u,h,w,D,z){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(_e){this.onError(_e)}}var ki=!1,pi=null,xr=!1,zi=null,za={onError:function(t){ki=!0,pi=t}};function Ba(t,i,a,l,u,h,w,D,z){ki=!1,pi=null,ka.apply(za,arguments)}function Il(t,i,a,l,u,h,w,D,z){if(Ba.apply(this,arguments),ki){if(ki){var ee=pi;ki=!1,pi=null}else throw Error(n(198));xr||(xr=!0,zi=ee)}}function mi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function Ha(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function C(t){if(mi(t)!==t)throw Error(n(188))}function j(t){var i=t.alternate;if(!i){if(i=mi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return C(u),t;if(h===l)return C(u),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=u,l=h;else{for(var w=!1,D=u.child;D;){if(D===a){w=!0,a=u,l=h;break}if(D===l){w=!0,l=u,a=h;break}D=D.sibling}if(!w){for(D=h.child;D;){if(D===a){w=!0,a=h,l=u;break}if(D===l){w=!0,l=h,a=u;break}D=D.sibling}if(!w)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function J(t){return t=j(t),t!==null?te(t):null}function te(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=te(t);if(i!==null)return i;t=t.sibling}return null}var X=e.unstable_scheduleCallback,Ae=e.unstable_cancelCallback,Ie=e.unstable_shouldYield,Be=e.unstable_requestPaint,Re=e.unstable_now,et=e.unstable_getCurrentPriorityLevel,Qe=e.unstable_ImmediatePriority,Ye=e.unstable_UserBlockingPriority,pt=e.unstable_NormalPriority,Ut=e.unstable_LowPriority,Nt=e.unstable_IdlePriority,Zt=null,ot=null;function je(t){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Zt,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Bi,xt=Math.log,Pn=Math.LN2;function Bi(t){return t>>>=0,t===0?32:31-(xt(t)/Pn|0)|0}var Qt=64,Hi=4194304;function bt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nn(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,w=a&268435455;if(w!==0){var D=w&~u;D!==0?l=bt(D):(h&=w,h!==0&&(l=bt(h)))}else w=a&~u,w!==0?l=bt(w):h!==0&&(l=bt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&u)===0&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Mt(i),u=1<<a,l|=t[a],i&=~u;return l}function js(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var w=31-Mt(h),D=1<<w,z=u[w];z===-1?((D&a)===0||(D&l)!==0)&&(u[w]=js(D,i)):z<=i&&(t.expiredLanes|=D),h&=~D}}function yr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Va(){var t=Qt;return Qt<<=1,(Qt&4194240)===0&&(Qt=64),t}function qr(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function Xs(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=a}function og(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var u=31-Mt(a),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,a&=~h}}function Ul(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Mt(a),u=1<<l;u&i|t[l]&i&&(t[l]|=i),a&=~u}}var Et=0;function Fd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Od,Fl,kd,zd,Bd,Ol=!1,Ga=[],Vi=null,Gi=null,Wi=null,Ys=new Map,qs=new Map,ji=[],lg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hd(t,i){switch(t){case"focusin":case"focusout":Vi=null;break;case"dragenter":case"dragleave":Gi=null;break;case"mouseover":case"mouseout":Wi=null;break;case"pointerover":case"pointerout":Ys.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(i.pointerId)}}function $s(t,i,a,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=ca(i),i!==null&&Fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function cg(t,i,a,l,u){switch(i){case"focusin":return Vi=$s(Vi,t,i,a,l,u),!0;case"dragenter":return Gi=$s(Gi,t,i,a,l,u),!0;case"mouseover":return Wi=$s(Wi,t,i,a,l,u),!0;case"pointerover":var h=u.pointerId;return Ys.set(h,$s(Ys.get(h)||null,t,i,a,l,u)),!0;case"gotpointercapture":return h=u.pointerId,qs.set(h,$s(qs.get(h)||null,t,i,a,l,u)),!0}return!1}function Vd(t){var i=Sr(t.target);if(i!==null){var a=mi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ha(a),i!==null){t.blockedOn=i,Bd(t.priority,function(){kd(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Wa(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=zl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);G=l,a.target.dispatchEvent(l),G=null}else return i=ca(a),i!==null&&Fl(i),t.blockedOn=a,!1;i.shift()}return!0}function Gd(t,i,a){Wa(t)&&a.delete(i)}function ug(){Ol=!1,Vi!==null&&Wa(Vi)&&(Vi=null),Gi!==null&&Wa(Gi)&&(Gi=null),Wi!==null&&Wa(Wi)&&(Wi=null),Ys.forEach(Gd),qs.forEach(Gd)}function Ks(t,i){t.blockedOn===i&&(t.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ug)))}function Zs(t){function i(u){return Ks(u,t)}if(0<Ga.length){Ks(Ga[0],t);for(var a=1;a<Ga.length;a++){var l=Ga[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Vi!==null&&Ks(Vi,t),Gi!==null&&Ks(Gi,t),Wi!==null&&Ks(Wi,t),Ys.forEach(i),qs.forEach(i),a=0;a<ji.length;a++)l=ji[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<ji.length&&(a=ji[0],a.blockedOn===null);)Vd(a),a.blockedOn===null&&ji.shift()}var $r=N.ReactCurrentBatchConfig,ja=!0;function dg(t,i,a,l){var u=Et,h=$r.transition;$r.transition=null;try{Et=1,kl(t,i,a,l)}finally{Et=u,$r.transition=h}}function fg(t,i,a,l){var u=Et,h=$r.transition;$r.transition=null;try{Et=4,kl(t,i,a,l)}finally{Et=u,$r.transition=h}}function kl(t,i,a,l){if(ja){var u=zl(t,i,a,l);if(u===null)nc(t,i,l,Xa,a),Hd(t,l);else if(cg(u,t,i,a,l))l.stopPropagation();else if(Hd(t,l),i&4&&-1<lg.indexOf(t)){for(;u!==null;){var h=ca(u);if(h!==null&&Od(h),h=zl(t,i,a,l),h===null&&nc(t,i,l,Xa,a),h===u)break;u=h}u!==null&&l.stopPropagation()}else nc(t,i,l,null,a)}}var Xa=null;function zl(t,i,a,l){if(Xa=null,t=we(l),t=Sr(t),t!==null)if(i=mi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=Ha(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Xa=t,null}function Wd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(et()){case Qe:return 1;case Ye:return 4;case pt:case Ut:return 16;case Nt:return 536870912;default:return 16}default:return 16}}var Xi=null,Bl=null,Ya=null;function jd(){if(Ya)return Ya;var t,i=Bl,a=i.length,l,u="value"in Xi?Xi.value:Xi.textContent,h=u.length;for(t=0;t<a&&i[t]===u[t];t++);var w=a-t;for(l=1;l<=w&&i[a-l]===u[h-l];l++);return Ya=u.slice(t,1<l?1-l:void 0)}function qa(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function $a(){return!0}function Xd(){return!1}function Ln(t){function i(a,l,u,h,w){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?$a:Xd,this.isPropagationStopped=Xd,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$a)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$a)},persist:function(){},isPersistent:$a}),i}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Ln(Kr),Qs=oe({},Kr,{view:0,detail:0}),hg=Ln(Qs),Vl,Gl,Js,Ka=oe({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Vl=t.screenX-Js.screenX,Gl=t.screenY-Js.screenY):Gl=Vl=0,Js=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),Yd=Ln(Ka),pg=oe({},Ka,{dataTransfer:0}),mg=Ln(pg),gg=oe({},Qs,{relatedTarget:0}),Wl=Ln(gg),vg=oe({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),_g=Ln(vg),xg=oe({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yg=Ln(xg),Sg=oe({},Kr,{data:0}),qd=Ln(Sg),Mg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Eg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=wg[t])?!!i[t]:!1}function jl(){return Tg}var Ag=oe({},Qs,{key:function(t){if(t.key){var i=Mg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Eg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Cg=Ln(Ag),Rg=oe({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$d=Ln(Rg),bg=oe({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),Pg=Ln(bg),Ng=oe({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lg=Ln(Ng),Dg=oe({},Ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ig=Ln(Dg),Ug=[9,13,27,32],Xl=d&&"CompositionEvent"in window,ea=null;d&&"documentMode"in document&&(ea=document.documentMode);var Fg=d&&"TextEvent"in window&&!ea,Kd=d&&(!Xl||ea&&8<ea&&11>=ea),Zd=" ",Qd=!1;function Jd(t,i){switch(t){case"keyup":return Ug.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ef(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function Og(t,i){switch(t){case"compositionend":return ef(i);case"keypress":return i.which!==32?null:(Qd=!0,Zd);case"textInput":return t=i.data,t===Zd&&Qd?null:t;default:return null}}function kg(t,i){if(Zr)return t==="compositionend"||!Xl&&Jd(t,i)?(t=jd(),Ya=Bl=Xi=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kd&&i.locale!=="ko"?null:i.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!zg[t.type]:i==="textarea"}function nf(t,i,a,l){ht(l),i=to(i,"onChange"),0<i.length&&(a=new Hl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var ta=null,na=null;function Bg(t){Sf(t,0)}function Za(t){var i=ns(t);if(k(i))return t}function Hg(t,i){if(t==="change")return i}var rf=!1;if(d){var Yl;if(d){var ql="oninput"in document;if(!ql){var sf=document.createElement("div");sf.setAttribute("oninput","return;"),ql=typeof sf.oninput=="function"}Yl=ql}else Yl=!1;rf=Yl&&(!document.documentMode||9<document.documentMode)}function af(){ta&&(ta.detachEvent("onpropertychange",of),na=ta=null)}function of(t){if(t.propertyName==="value"&&Za(na)){var i=[];nf(i,na,t,we(t)),bn(Bg,i)}}function Vg(t,i,a){t==="focusin"?(af(),ta=i,na=a,ta.attachEvent("onpropertychange",of)):t==="focusout"&&af()}function Gg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Za(na)}function Wg(t,i){if(t==="click")return Za(i)}function jg(t,i){if(t==="input"||t==="change")return Za(i)}function Xg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var qn=typeof Object.is=="function"?Object.is:Xg;function ia(t,i){if(qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!p.call(i,u)||!qn(t[u],i[u]))return!1}return!0}function lf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cf(t,i){var a=lf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lf(a)}}function uf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?uf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function df(){for(var t=window,i=At();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=At(t.document)}return i}function $l(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Yg(t){var i=df(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&uf(a.ownerDocument.documentElement,a)){if(l!==null&&$l(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=a.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=cf(a,h);var w=cf(a,l);u&&w&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==w.node||t.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qg=d&&"documentMode"in document&&11>=document.documentMode,Qr=null,Kl=null,ra=null,Zl=!1;function ff(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zl||Qr==null||Qr!==At(l)||(l=Qr,"selectionStart"in l&&$l(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ra&&ia(ra,l)||(ra=l,l=to(Kl,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=Qr)))}function Qa(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Jr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},Ql={},hf={};d&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete Jr.animationend.animation,delete Jr.animationiteration.animation,delete Jr.animationstart.animation),"TransitionEvent"in window||delete Jr.transitionend.transition);function Ja(t){if(Ql[t])return Ql[t];if(!Jr[t])return t;var i=Jr[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in hf)return Ql[t]=i[a];return t}var pf=Ja("animationend"),mf=Ja("animationiteration"),gf=Ja("animationstart"),vf=Ja("transitionend"),_f=new Map,xf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,i){_f.set(t,i),c(i,[t])}for(var Jl=0;Jl<xf.length;Jl++){var ec=xf[Jl],$g=ec.toLowerCase(),Kg=ec[0].toUpperCase()+ec.slice(1);Yi($g,"on"+Kg)}Yi(pf,"onAnimationEnd"),Yi(mf,"onAnimationIteration"),Yi(gf,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(vf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zg=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function yf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Il(l,i,void 0,t),t.currentTarget=null}function Sf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var w=l.length-1;0<=w;w--){var D=l[w],z=D.instance,ee=D.currentTarget;if(D=D.listener,z!==h&&u.isPropagationStopped())break e;yf(u,D,ee),h=z}else for(w=0;w<l.length;w++){if(D=l[w],z=D.instance,ee=D.currentTarget,D=D.listener,z!==h&&u.isPropagationStopped())break e;yf(u,D,ee),h=z}}}if(xr)throw t=zi,xr=!1,zi=null,t}function Lt(t,i){var a=i[lc];a===void 0&&(a=i[lc]=new Set);var l=t+"__bubble";a.has(l)||(Mf(i,t,2,!1),a.add(l))}function tc(t,i,a){var l=0;i&&(l|=4),Mf(a,t,l,i)}var eo="_reactListening"+Math.random().toString(36).slice(2);function aa(t){if(!t[eo]){t[eo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Zg.has(a)||tc(a,!1,t),tc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[eo]||(i[eo]=!0,tc("selectionchange",!1,i))}}function Mf(t,i,a,l){switch(Wd(i)){case 1:var u=dg;break;case 4:u=fg;break;default:u=kl}a=u.bind(null,i,a,t),u=void 0,!Yn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,a,{capture:!0,passive:u}):t.addEventListener(i,a,!0):u!==void 0?t.addEventListener(i,a,{passive:u}):t.addEventListener(i,a,!1)}function nc(t,i,a,l,u){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var w=l.tag;if(w===3||w===4){var D=l.stateNode.containerInfo;if(D===u||D.nodeType===8&&D.parentNode===u)break;if(w===4)for(w=l.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===u||z.nodeType===8&&z.parentNode===u))return;w=w.return}for(;D!==null;){if(w=Sr(D),w===null)return;if(z=w.tag,z===5||z===6){l=h=w;continue e}D=D.parentNode}}l=l.return}bn(function(){var ee=h,_e=we(a),ye=[];e:{var ge=_f.get(t);if(ge!==void 0){var Ue=Hl,ze=t;switch(t){case"keypress":if(qa(a)===0)break e;case"keydown":case"keyup":Ue=Cg;break;case"focusin":ze="focus",Ue=Wl;break;case"focusout":ze="blur",Ue=Wl;break;case"beforeblur":case"afterblur":Ue=Wl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=mg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=Pg;break;case pf:case mf:case gf:Ue=_g;break;case vf:Ue=Lg;break;case"scroll":Ue=hg;break;case"wheel":Ue=Ig;break;case"copy":case"cut":case"paste":Ue=yg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=$d}var He=(i&4)!==0,Ht=!He&&t==="scroll",Y=He?ge!==null?ge+"Capture":null:ge;He=[];for(var V=ee,K;V!==null;){K=V;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=Oi(V,Y),Ee!=null&&He.push(oa(V,Ee,K)))),Ht)break;V=V.return}0<He.length&&(ge=new Ue(ge,ze,null,a,_e),ye.push({event:ge,listeners:He}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Ue=t==="mouseout"||t==="pointerout",ge&&a!==G&&(ze=a.relatedTarget||a.fromElement)&&(Sr(ze)||ze[gi]))break e;if((Ue||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ue?(ze=a.relatedTarget||a.toElement,Ue=ee,ze=ze?Sr(ze):null,ze!==null&&(Ht=mi(ze),ze!==Ht||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ue=null,ze=ee),Ue!==ze)){if(He=Yd,Ee="onMouseLeave",Y="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=$d,Ee="onPointerLeave",Y="onPointerEnter",V="pointer"),Ht=Ue==null?ge:ns(Ue),K=ze==null?ge:ns(ze),ge=new He(Ee,V+"leave",Ue,a,_e),ge.target=Ht,ge.relatedTarget=K,Ee=null,Sr(_e)===ee&&(He=new He(Y,V+"enter",ze,a,_e),He.target=K,He.relatedTarget=Ht,Ee=He),Ht=Ee,Ue&&ze)t:{for(He=Ue,Y=ze,V=0,K=He;K;K=es(K))V++;for(K=0,Ee=Y;Ee;Ee=es(Ee))K++;for(;0<V-K;)He=es(He),V--;for(;0<K-V;)Y=es(Y),K--;for(;V--;){if(He===Y||Y!==null&&He===Y.alternate)break t;He=es(He),Y=es(Y)}He=null}else He=null;Ue!==null&&Ef(ye,ge,Ue,He,!1),ze!==null&&Ht!==null&&Ef(ye,Ht,ze,He,!0)}}e:{if(ge=ee?ns(ee):window,Ue=ge.nodeName&&ge.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ge.type==="file")var Ve=Hg;else if(tf(ge))if(rf)Ve=jg;else{Ve=Gg;var $e=Vg}else(Ue=ge.nodeName)&&Ue.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ve=Wg);if(Ve&&(Ve=Ve(t,ee))){nf(ye,Ve,a,_e);break e}$e&&$e(t,ge,ee),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&qe(ge,"number",ge.value)}switch($e=ee?ns(ee):window,t){case"focusin":(tf($e)||$e.contentEditable==="true")&&(Qr=$e,Kl=ee,ra=null);break;case"focusout":ra=Kl=Qr=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,ff(ye,a,_e);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":ff(ye,a,_e)}var Ke;if(Xl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else Zr?Jd(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Kd&&a.locale!=="ko"&&(Zr||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&Zr&&(Ke=jd()):(Xi=_e,Bl="value"in Xi?Xi.value:Xi.textContent,Zr=!0)),$e=to(ee,nt),0<$e.length&&(nt=new qd(nt,t,null,a,_e),ye.push({event:nt,listeners:$e}),Ke?nt.data=Ke:(Ke=ef(a),Ke!==null&&(nt.data=Ke)))),(Ke=Fg?Og(t,a):kg(t,a))&&(ee=to(ee,"onBeforeInput"),0<ee.length&&(_e=new qd("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:ee}),_e.data=Ke))}Sf(ye,i)})}function oa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function to(t,i){for(var a=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=Oi(t,a),h!=null&&l.unshift(oa(t,h,u)),h=Oi(t,i),h!=null&&l.push(oa(t,h,u))),t=t.return}return l}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ef(t,i,a,l,u){for(var h=i._reactName,w=[];a!==null&&a!==l;){var D=a,z=D.alternate,ee=D.stateNode;if(z!==null&&z===l)break;D.tag===5&&ee!==null&&(D=ee,u?(z=Oi(a,h),z!=null&&w.unshift(oa(a,z,D))):u||(z=Oi(a,h),z!=null&&w.push(oa(a,z,D)))),a=a.return}w.length!==0&&t.push({event:i,listeners:w})}var Qg=/\r\n?/g,Jg=/\u0000|\uFFFD/g;function wf(t){return(typeof t=="string"?t:""+t).replace(Qg,`
`).replace(Jg,"")}function no(t,i,a){if(i=wf(i),wf(t)!==i&&a)throw Error(n(425))}function io(){}var ic=null,rc=null;function sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var ac=typeof setTimeout=="function"?setTimeout:void 0,e0=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(t){return Tf.resolve(null).then(t).catch(n0)}:ac;function n0(t){setTimeout(function(){throw t})}function oc(t,i){var a=i,l=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"){if(l===0){t.removeChild(u),Zs(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=u}while(a);Zs(i)}function qi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Af(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ts=Math.random().toString(36).slice(2),ai="__reactFiber$"+ts,la="__reactProps$"+ts,gi="__reactContainer$"+ts,lc="__reactEvents$"+ts,i0="__reactListeners$"+ts,r0="__reactHandles$"+ts;function Sr(t){var i=t[ai];if(i)return i;for(var a=t.parentNode;a;){if(i=a[gi]||a[ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=Af(t);t!==null;){if(a=t[ai])return a;t=Af(t)}return i}t=a,a=t.parentNode}return null}function ca(t){return t=t[ai]||t[gi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ns(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function ro(t){return t[la]||null}var cc=[],is=-1;function $i(t){return{current:t}}function Dt(t){0>is||(t.current=cc[is],cc[is]=null,is--)}function Pt(t,i){is++,cc[is]=t.current,t.current=i}var Ki={},on=$i(Ki),vn=$i(!1),Mr=Ki;function rs(t,i){var a=t.type.contextTypes;if(!a)return Ki;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in a)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function _n(t){return t=t.childContextTypes,t!=null}function so(){Dt(vn),Dt(on)}function Cf(t,i,a){if(on.current!==Ki)throw Error(n(168));Pt(on,i),Pt(vn,a)}function Rf(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,ue(t)||"Unknown",u));return oe({},a,l)}function ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ki,Mr=on.current,Pt(on,t),Pt(vn,vn.current),!0}function bf(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Rf(t,i,Mr),l.__reactInternalMemoizedMergedChildContext=t,Dt(vn),Dt(on),Pt(on,t)):Dt(vn),Pt(vn,a)}var vi=null,oo=!1,uc=!1;function Pf(t){vi===null?vi=[t]:vi.push(t)}function s0(t){oo=!0,Pf(t)}function Zi(){if(!uc&&vi!==null){uc=!0;var t=0,i=Et;try{var a=vi;for(Et=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}vi=null,oo=!1}catch(u){throw vi!==null&&(vi=vi.slice(t+1)),X(Qe,Zi),u}finally{Et=i,uc=!1}}return null}var ss=[],as=0,lo=null,co=0,kn=[],zn=0,Er=null,_i=1,xi="";function wr(t,i){ss[as++]=co,ss[as++]=lo,lo=t,co=i}function Nf(t,i,a){kn[zn++]=_i,kn[zn++]=xi,kn[zn++]=Er,Er=t;var l=_i;t=xi;var u=32-Mt(l)-1;l&=~(1<<u),a+=1;var h=32-Mt(i)+u;if(30<h){var w=u-u%5;h=(l&(1<<w)-1).toString(32),l>>=w,u-=w,_i=1<<32-Mt(i)+u|a<<u|l,xi=h+t}else _i=1<<h|a<<u|l,xi=t}function dc(t){t.return!==null&&(wr(t,1),Nf(t,1,0))}function fc(t){for(;t===lo;)lo=ss[--as],ss[as]=null,co=ss[--as],ss[as]=null;for(;t===Er;)Er=kn[--zn],kn[zn]=null,xi=kn[--zn],kn[zn]=null,_i=kn[--zn],kn[zn]=null}var Dn=null,In=null,Ft=!1,$n=null;function Lf(t,i){var a=Gn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Df(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,In=qi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Er!==null?{id:_i,overflow:xi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Gn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Dn=t,In=null,!0):!1;default:return!1}}function hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pc(t){if(Ft){var i=In;if(i){var a=i;if(!Df(t,i)){if(hc(t))throw Error(n(418));i=qi(a.nextSibling);var l=Dn;i&&Df(t,i)?Lf(l,a):(t.flags=t.flags&-4097|2,Ft=!1,Dn=t)}}else{if(hc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ft=!1,Dn=t}}}function If(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function uo(t){if(t!==Dn)return!1;if(!Ft)return If(t),Ft=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!sc(t.type,t.memoizedProps)),i&&(i=In)){if(hc(t))throw Uf(),Error(n(418));for(;i;)Lf(t,i),i=qi(i.nextSibling)}if(If(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){In=qi(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}In=null}}else In=Dn?qi(t.stateNode.nextSibling):null;return!0}function Uf(){for(var t=In;t;)t=qi(t.nextSibling)}function os(){In=Dn=null,Ft=!1}function mc(t){$n===null?$n=[t]:$n.push(t)}var a0=N.ReactCurrentBatchConfig;function ua(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(w){var D=u.refs;w===null?delete D[h]:D[h]=w},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function fo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ff(t){var i=t._init;return i(t._payload)}function Of(t){function i(Y,V){if(t){var K=Y.deletions;K===null?(Y.deletions=[V],Y.flags|=16):K.push(V)}}function a(Y,V){if(!t)return null;for(;V!==null;)i(Y,V),V=V.sibling;return null}function l(Y,V){for(Y=new Map;V!==null;)V.key!==null?Y.set(V.key,V):Y.set(V.index,V),V=V.sibling;return Y}function u(Y,V){return Y=sr(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<V?(Y.flags|=2,V):K):(Y.flags|=2,V)):(Y.flags|=1048576,V)}function w(Y){return t&&Y.alternate===null&&(Y.flags|=2),Y}function D(Y,V,K,Ee){return V===null||V.tag!==6?(V=au(K,Y.mode,Ee),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function z(Y,V,K,Ee){var Ve=K.type;return Ve===U?_e(Y,V,K.props.children,Ee,K.key):V!==null&&(V.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===ae&&Ff(Ve)===V.type)?(Ee=u(V,K.props),Ee.ref=ua(Y,V,K),Ee.return=Y,Ee):(Ee=Fo(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=ua(Y,V,K),Ee.return=Y,Ee)}function ee(Y,V,K,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=ou(K,Y.mode,Ee),V.return=Y,V):(V=u(V,K.children||[]),V.return=Y,V)}function _e(Y,V,K,Ee,Ve){return V===null||V.tag!==7?(V=Lr(K,Y.mode,Ee,Ve),V.return=Y,V):(V=u(V,K),V.return=Y,V)}function ye(Y,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=au(""+V,Y.mode,K),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case q:return K=Fo(V.type,V.key,V.props,null,Y.mode,K),K.ref=ua(Y,null,V),K.return=Y,K;case F:return V=ou(V,Y.mode,K),V.return=Y,V;case ae:var Ee=V._init;return ye(Y,Ee(V._payload),K)}if(I(V)||he(V))return V=Lr(V,Y.mode,K,null),V.return=Y,V;fo(Y,V)}return null}function ge(Y,V,K,Ee){var Ve=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ve!==null?null:D(Y,V,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case q:return K.key===Ve?z(Y,V,K,Ee):null;case F:return K.key===Ve?ee(Y,V,K,Ee):null;case ae:return Ve=K._init,ge(Y,V,Ve(K._payload),Ee)}if(I(K)||he(K))return Ve!==null?null:_e(Y,V,K,Ee,null);fo(Y,K)}return null}function Ue(Y,V,K,Ee,Ve){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,D(V,Y,""+Ee,Ve);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case q:return Y=Y.get(Ee.key===null?K:Ee.key)||null,z(V,Y,Ee,Ve);case F:return Y=Y.get(Ee.key===null?K:Ee.key)||null,ee(V,Y,Ee,Ve);case ae:var $e=Ee._init;return Ue(Y,V,K,$e(Ee._payload),Ve)}if(I(Ee)||he(Ee))return Y=Y.get(K)||null,_e(V,Y,Ee,Ve,null);fo(V,Ee)}return null}function ze(Y,V,K,Ee){for(var Ve=null,$e=null,Ke=V,nt=V=0,tn=null;Ke!==null&&nt<K.length;nt++){Ke.index>nt?(tn=Ke,Ke=null):tn=Ke.sibling;var yt=ge(Y,Ke,K[nt],Ee);if(yt===null){Ke===null&&(Ke=tn);break}t&&Ke&&yt.alternate===null&&i(Y,Ke),V=h(yt,V,nt),$e===null?Ve=yt:$e.sibling=yt,$e=yt,Ke=tn}if(nt===K.length)return a(Y,Ke),Ft&&wr(Y,nt),Ve;if(Ke===null){for(;nt<K.length;nt++)Ke=ye(Y,K[nt],Ee),Ke!==null&&(V=h(Ke,V,nt),$e===null?Ve=Ke:$e.sibling=Ke,$e=Ke);return Ft&&wr(Y,nt),Ve}for(Ke=l(Y,Ke);nt<K.length;nt++)tn=Ue(Ke,Y,nt,K[nt],Ee),tn!==null&&(t&&tn.alternate!==null&&Ke.delete(tn.key===null?nt:tn.key),V=h(tn,V,nt),$e===null?Ve=tn:$e.sibling=tn,$e=tn);return t&&Ke.forEach(function(ar){return i(Y,ar)}),Ft&&wr(Y,nt),Ve}function He(Y,V,K,Ee){var Ve=he(K);if(typeof Ve!="function")throw Error(n(150));if(K=Ve.call(K),K==null)throw Error(n(151));for(var $e=Ve=null,Ke=V,nt=V=0,tn=null,yt=K.next();Ke!==null&&!yt.done;nt++,yt=K.next()){Ke.index>nt?(tn=Ke,Ke=null):tn=Ke.sibling;var ar=ge(Y,Ke,yt.value,Ee);if(ar===null){Ke===null&&(Ke=tn);break}t&&Ke&&ar.alternate===null&&i(Y,Ke),V=h(ar,V,nt),$e===null?Ve=ar:$e.sibling=ar,$e=ar,Ke=tn}if(yt.done)return a(Y,Ke),Ft&&wr(Y,nt),Ve;if(Ke===null){for(;!yt.done;nt++,yt=K.next())yt=ye(Y,yt.value,Ee),yt!==null&&(V=h(yt,V,nt),$e===null?Ve=yt:$e.sibling=yt,$e=yt);return Ft&&wr(Y,nt),Ve}for(Ke=l(Y,Ke);!yt.done;nt++,yt=K.next())yt=Ue(Ke,Y,nt,yt.value,Ee),yt!==null&&(t&&yt.alternate!==null&&Ke.delete(yt.key===null?nt:yt.key),V=h(yt,V,nt),$e===null?Ve=yt:$e.sibling=yt,$e=yt);return t&&Ke.forEach(function(z0){return i(Y,z0)}),Ft&&wr(Y,nt),Ve}function Ht(Y,V,K,Ee){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case q:e:{for(var Ve=K.key,$e=V;$e!==null;){if($e.key===Ve){if(Ve=K.type,Ve===U){if($e.tag===7){a(Y,$e.sibling),V=u($e,K.props.children),V.return=Y,Y=V;break e}}else if($e.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===ae&&Ff(Ve)===$e.type){a(Y,$e.sibling),V=u($e,K.props),V.ref=ua(Y,$e,K),V.return=Y,Y=V;break e}a(Y,$e);break}else i(Y,$e);$e=$e.sibling}K.type===U?(V=Lr(K.props.children,Y.mode,Ee,K.key),V.return=Y,Y=V):(Ee=Fo(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=ua(Y,V,K),Ee.return=Y,Y=Ee)}return w(Y);case F:e:{for($e=K.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){a(Y,V.sibling),V=u(V,K.children||[]),V.return=Y,Y=V;break e}else{a(Y,V);break}else i(Y,V);V=V.sibling}V=ou(K,Y.mode,Ee),V.return=Y,Y=V}return w(Y);case ae:return $e=K._init,Ht(Y,V,$e(K._payload),Ee)}if(I(K))return ze(Y,V,K,Ee);if(he(K))return He(Y,V,K,Ee);fo(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(a(Y,V.sibling),V=u(V,K),V.return=Y,Y=V):(a(Y,V),V=au(K,Y.mode,Ee),V.return=Y,Y=V),w(Y)):a(Y,V)}return Ht}var ls=Of(!0),kf=Of(!1),ho=$i(null),po=null,cs=null,gc=null;function vc(){gc=cs=po=null}function _c(t){var i=ho.current;Dt(ho),t._currentValue=i}function xc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function us(t,i){po=t,gc=cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(xn=!0),t.firstContext=null)}function Bn(t){var i=t._currentValue;if(gc!==t)if(t={context:t,memoizedValue:i,next:null},cs===null){if(po===null)throw Error(n(308));cs=t,po.dependencies={lanes:0,firstContext:t}}else cs=cs.next=t;return i}var Tr=null;function yc(t){Tr===null?Tr=[t]:Tr.push(t)}function zf(t,i,a,l){var u=i.interleaved;return u===null?(a.next=a,yc(i)):(a.next=u.next,u.next=a),i.interleaved=a,yi(t,l)}function yi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Qi=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Ji(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(_t&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,yi(t,a)}return u=l.interleaved,u===null?(i.next=i,yc(l)):(i.next=u.next,u.next=i),l.interleaved=i,yi(t,a)}function mo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ul(t,a)}}function Hf(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?u=h=w:h=h.next=w,a=a.next}while(a!==null);h===null?u=h=i:h=h.next=i}else u=h=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function go(t,i,a,l){var u=t.updateQueue;Qi=!1;var h=u.firstBaseUpdate,w=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var z=D,ee=z.next;z.next=null,w===null?h=ee:w.next=ee,w=z;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,D=_e.lastBaseUpdate,D!==w&&(D===null?_e.firstBaseUpdate=ee:D.next=ee,_e.lastBaseUpdate=z))}if(h!==null){var ye=u.baseState;w=0,_e=ee=z=null,D=h;do{var ge=D.lane,Ue=D.eventTime;if((l&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,He=D;switch(ge=i,Ue=a,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){ye=ze.call(Ue,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,ge=typeof ze=="function"?ze.call(Ue,ye,ge):ze,ge==null)break e;ye=oe({},ye,ge);break e;case 2:Qi=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[D]:ge.push(D))}else Ue={eventTime:Ue,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},_e===null?(ee=_e=Ue,z=ye):_e=_e.next=Ue,w|=ge;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(_e===null&&(z=ye),u.baseState=z,u.firstBaseUpdate=ee,u.lastBaseUpdate=_e,i=u.shared.interleaved,i!==null){u=i;do w|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Rr|=w,t.lanes=w,t.memoizedState=ye}}function Vf(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=a,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var da={},oi=$i(da),fa=$i(da),ha=$i(da);function Ar(t){if(t===da)throw Error(n(174));return t}function Mc(t,i){switch(Pt(ha,i),Pt(fa,t),Pt(oi,da),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Pe(i,t)}Dt(oi),Pt(oi,i)}function ds(){Dt(oi),Dt(fa),Dt(ha)}function Gf(t){Ar(ha.current);var i=Ar(oi.current),a=Pe(i,t.type);i!==a&&(Pt(fa,t),Pt(oi,a))}function Ec(t){fa.current===t&&(Dt(oi),Dt(fa))}var kt=$i(0);function vo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wc=[];function Tc(){for(var t=0;t<wc.length;t++)wc[t]._workInProgressVersionPrimary=null;wc.length=0}var _o=N.ReactCurrentDispatcher,Ac=N.ReactCurrentBatchConfig,Cr=0,zt=null,Xt=null,Jt=null,xo=!1,pa=!1,ma=0,o0=0;function ln(){throw Error(n(321))}function Cc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!qn(t[a],i[a]))return!1;return!0}function Rc(t,i,a,l,u,h){if(Cr=h,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,_o.current=t===null||t.memoizedState===null?d0:f0,t=a(l,u),pa){h=0;do{if(pa=!1,ma=0,25<=h)throw Error(n(301));h+=1,Jt=Xt=null,i.updateQueue=null,_o.current=h0,t=a(l,u)}while(pa)}if(_o.current=Mo,i=Xt!==null&&Xt.next!==null,Cr=0,Jt=Xt=zt=null,xo=!1,i)throw Error(n(300));return t}function bc(){var t=ma!==0;return ma=0,t}function li(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t,Jt}function Hn(){if(Xt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Xt.next;var i=Jt===null?zt.memoizedState:Jt.next;if(i!==null)Jt=i,Xt=t;else{if(t===null)throw Error(n(310));Xt=t,t={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Jt===null?zt.memoizedState=Jt=t:Jt=Jt.next=t}return Jt}function ga(t,i){return typeof i=="function"?i(t):i}function Pc(t){var i=Hn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Xt,u=l.baseQueue,h=a.pending;if(h!==null){if(u!==null){var w=u.next;u.next=h.next,h.next=w}l.baseQueue=u=h,a.pending=null}if(u!==null){h=u.next,l=l.baseState;var D=w=null,z=null,ee=h;do{var _e=ee.lane;if((Cr&_e)===_e)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var ye={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(D=z=ye,w=l):z=z.next=ye,zt.lanes|=_e,Rr|=_e}ee=ee.next}while(ee!==null&&ee!==h);z===null?w=l:z.next=D,qn(l,i.memoizedState)||(xn=!0),i.memoizedState=l,i.baseState=w,i.baseQueue=z,a.lastRenderedState=l}if(t=a.interleaved,t!==null){u=t;do h=u.lane,zt.lanes|=h,Rr|=h,u=u.next;while(u!==t)}else u===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Nc(t){var i=Hn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,h=i.memoizedState;if(u!==null){a.pending=null;var w=u=u.next;do h=t(h,w.action),w=w.next;while(w!==u);qn(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function Wf(){}function jf(t,i){var a=zt,l=Hn(),u=i(),h=!qn(l.memoizedState,u);if(h&&(l.memoizedState=u,xn=!0),l=l.queue,Lc(qf.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||Jt!==null&&Jt.memoizedState.tag&1){if(a.flags|=2048,va(9,Yf.bind(null,a,l,u,i),void 0,null),en===null)throw Error(n(349));(Cr&30)!==0||Xf(a,i,u)}return u}function Xf(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Yf(t,i,a,l){i.value=a,i.getSnapshot=l,$f(i)&&Kf(t)}function qf(t,i,a){return a(function(){$f(i)&&Kf(t)})}function $f(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!qn(t,a)}catch{return!0}}function Kf(t){var i=yi(t,1);i!==null&&Jn(i,t,1,-1)}function Zf(t){var i=li();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ga,lastRenderedState:t},i.queue=t,t=t.dispatch=u0.bind(null,zt,t),[i.memoizedState,t]}function va(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Qf(){return Hn().memoizedState}function yo(t,i,a,l){var u=li();zt.flags|=t,u.memoizedState=va(1|i,a,void 0,l===void 0?null:l)}function So(t,i,a,l){var u=Hn();l=l===void 0?null:l;var h=void 0;if(Xt!==null){var w=Xt.memoizedState;if(h=w.destroy,l!==null&&Cc(l,w.deps)){u.memoizedState=va(i,a,h,l);return}}zt.flags|=t,u.memoizedState=va(1|i,a,h,l)}function Jf(t,i){return yo(8390656,8,t,i)}function Lc(t,i){return So(2048,8,t,i)}function eh(t,i){return So(4,2,t,i)}function th(t,i){return So(4,4,t,i)}function nh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function ih(t,i,a){return a=a!=null?a.concat([t]):null,So(4,4,nh.bind(null,i,t),a)}function Dc(){}function rh(t,i){var a=Hn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function sh(t,i){var a=Hn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function ah(t,i,a){return(Cr&21)===0?(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=a):(qn(a,i)||(a=Va(),zt.lanes|=a,Rr|=a,t.baseState=!0),i)}function l0(t,i){var a=Et;Et=a!==0&&4>a?a:4,t(!0);var l=Ac.transition;Ac.transition={};try{t(!1),i()}finally{Et=a,Ac.transition=l}}function oh(){return Hn().memoizedState}function c0(t,i,a){var l=ir(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},lh(t))ch(i,a);else if(a=zf(t,i,a,l),a!==null){var u=pn();Jn(a,t,l,u),uh(a,i,l)}}function u0(t,i,a){var l=ir(t),u={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(lh(t))ch(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var w=i.lastRenderedState,D=h(w,a);if(u.hasEagerState=!0,u.eagerState=D,qn(D,w)){var z=i.interleaved;z===null?(u.next=u,yc(i)):(u.next=z.next,z.next=u),i.interleaved=u;return}}catch{}finally{}a=zf(t,i,u,l),a!==null&&(u=pn(),Jn(a,t,l,u),uh(a,i,l))}}function lh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function ch(t,i){pa=xo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function uh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ul(t,a)}}var Mo={readContext:Bn,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useInsertionEffect:ln,useLayoutEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useMutableSource:ln,useSyncExternalStore:ln,useId:ln,unstable_isNewReconciler:!1},d0={readContext:Bn,useCallback:function(t,i){return li().memoizedState=[t,i===void 0?null:i],t},useContext:Bn,useEffect:Jf,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,yo(4194308,4,nh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return yo(4194308,4,t,i)},useInsertionEffect:function(t,i){return yo(4,2,t,i)},useMemo:function(t,i){var a=li();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=li();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=c0.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=li();return t={current:t},i.memoizedState=t},useState:Zf,useDebugValue:Dc,useDeferredValue:function(t){return li().memoizedState=t},useTransition:function(){var t=Zf(!1),i=t[0];return t=l0.bind(null,t[1]),li().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,u=li();if(Ft){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),en===null)throw Error(n(349));(Cr&30)!==0||Xf(l,i,a)}u.memoizedState=a;var h={value:a,getSnapshot:i};return u.queue=h,Jf(qf.bind(null,l,h,t),[t]),l.flags|=2048,va(9,Yf.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=li(),i=en.identifierPrefix;if(Ft){var a=xi,l=_i;a=(l&~(1<<32-Mt(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=ma++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=o0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},f0={readContext:Bn,useCallback:rh,useContext:Bn,useEffect:Lc,useImperativeHandle:ih,useInsertionEffect:eh,useLayoutEffect:th,useMemo:sh,useReducer:Pc,useRef:Qf,useState:function(){return Pc(ga)},useDebugValue:Dc,useDeferredValue:function(t){var i=Hn();return ah(i,Xt.memoizedState,t)},useTransition:function(){var t=Pc(ga)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:Wf,useSyncExternalStore:jf,useId:oh,unstable_isNewReconciler:!1},h0={readContext:Bn,useCallback:rh,useContext:Bn,useEffect:Lc,useImperativeHandle:ih,useInsertionEffect:eh,useLayoutEffect:th,useMemo:sh,useReducer:Nc,useRef:Qf,useState:function(){return Nc(ga)},useDebugValue:Dc,useDeferredValue:function(t){var i=Hn();return Xt===null?i.memoizedState=t:ah(i,Xt.memoizedState,t)},useTransition:function(){var t=Nc(ga)[0],i=Hn().memoizedState;return[t,i]},useMutableSource:Wf,useSyncExternalStore:jf,useId:oh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Ic(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:oe({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Eo={isMounted:function(t){return(t=t._reactInternals)?mi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=pn(),u=ir(t),h=Si(l,u);h.payload=i,a!=null&&(h.callback=a),i=Ji(t,h,u),i!==null&&(Jn(i,t,u,l),mo(i,t,u))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=pn(),u=ir(t),h=Si(l,u);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Ji(t,h,u),i!==null&&(Jn(i,t,u,l),mo(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=pn(),l=ir(t),u=Si(a,l);u.tag=2,i!=null&&(u.callback=i),i=Ji(t,u,l),i!==null&&(Jn(i,t,l,a),mo(i,t,l))}};function dh(t,i,a,l,u,h,w){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,w):i.prototype&&i.prototype.isPureReactComponent?!ia(a,l)||!ia(u,h):!0}function fh(t,i,a){var l=!1,u=Ki,h=i.contextType;return typeof h=="object"&&h!==null?h=Bn(h):(u=_n(i)?Mr:on.current,l=i.contextTypes,h=(l=l!=null)?rs(t,u):Ki),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Eo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function hh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Eo.enqueueReplaceState(i,i.state,null)}function Uc(t,i,a,l){var u=t.stateNode;u.props=a,u.state=t.memoizedState,u.refs={},Sc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Bn(h):(h=_n(i)?Mr:on.current,u.context=rs(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Ic(t,i,h,a),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Eo.enqueueReplaceState(u,u.state,null),go(t,a,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,i){try{var a="",l=i;do a+=W(l),l=l.return;while(l);var u=a}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Fc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Oc(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var p0=typeof WeakMap=="function"?WeakMap:Map;function ph(t,i,a){a=Si(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Po||(Po=!0,Qc=l),Oc(t,i)},a}function mh(t,i,a){a=Si(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;a.payload=function(){return l(u)},a.callback=function(){Oc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Oc(t,i),typeof l!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function gh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new p0;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(u.add(a),t=R0.bind(null,t,i,a),i.then(t,t))}function vh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function _h(t,i,a,l,u){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Si(-1,1),i.tag=2,Ji(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=u,t)}var m0=N.ReactCurrentOwner,xn=!1;function hn(t,i,a,l){i.child=t===null?kf(i,null,a,l):ls(i,t.child,a,l)}function xh(t,i,a,l,u){a=a.render;var h=i.ref;return us(i,u),l=Rc(t,i,a,l,h,u),a=bc(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Mi(t,i,u)):(Ft&&a&&dc(i),i.flags|=1,hn(t,i,l,u),i.child)}function yh(t,i,a,l,u){if(t===null){var h=a.type;return typeof h=="function"&&!su(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Sh(t,i,h,l,u)):(t=Fo(a.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&u)===0){var w=h.memoizedProps;if(a=a.compare,a=a!==null?a:ia,a(w,l)&&t.ref===i.ref)return Mi(t,i,u)}return i.flags|=1,t=sr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Sh(t,i,a,l,u){if(t!==null){var h=t.memoizedProps;if(ia(h,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=h,(t.lanes&u)!==0)(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,Mi(t,i,u)}return kc(t,i,a,l,u)}function Mh(t,i,a){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pt(ps,Un),Un|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Pt(ps,Un),Un|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Pt(ps,Un),Un|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Pt(ps,Un),Un|=l;return hn(t,i,u,a),i.child}function Eh(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function kc(t,i,a,l,u){var h=_n(a)?Mr:on.current;return h=rs(i,h),us(i,u),a=Rc(t,i,a,l,h,u),l=bc(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Mi(t,i,u)):(Ft&&l&&dc(i),i.flags|=1,hn(t,i,a,u),i.child)}function wh(t,i,a,l,u){if(_n(a)){var h=!0;ao(i)}else h=!1;if(us(i,u),i.stateNode===null)To(t,i),fh(i,a,l),Uc(i,a,l,u),l=!0;else if(t===null){var w=i.stateNode,D=i.memoizedProps;w.props=D;var z=w.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Bn(ee):(ee=_n(a)?Mr:on.current,ee=rs(i,ee));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";ye||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(D!==l||z!==ee)&&hh(i,w,l,ee),Qi=!1;var ge=i.memoizedState;w.state=ge,go(i,l,w,u),z=i.memoizedState,D!==l||ge!==z||vn.current||Qi?(typeof _e=="function"&&(Ic(i,a,_e,l),z=i.memoizedState),(D=Qi||dh(i,a,D,l,ge,z,ee))?(ye||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),w.props=l,w.state=z,w.context=ee,l=D):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{w=i.stateNode,Bf(t,i),D=i.memoizedProps,ee=i.type===i.elementType?D:Kn(i.type,D),w.props=ee,ye=i.pendingProps,ge=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=Bn(z):(z=_n(a)?Mr:on.current,z=rs(i,z));var Ue=a.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(D!==ye||ge!==z)&&hh(i,w,l,z),Qi=!1,ge=i.memoizedState,w.state=ge,go(i,l,w,u);var ze=i.memoizedState;D!==ye||ge!==ze||vn.current||Qi?(typeof Ue=="function"&&(Ic(i,a,Ue,l),ze=i.memoizedState),(ee=Qi||dh(i,a,ee,l,ge,ze,z)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(l,ze,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(l,ze,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),w.props=l,w.state=ze,w.context=z,l=ee):(typeof w.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return zc(t,i,a,l,h,u)}function zc(t,i,a,l,u,h){Eh(t,i);var w=(i.flags&128)!==0;if(!l&&!w)return u&&bf(i,a,!1),Mi(t,i,h);l=i.stateNode,m0.current=i;var D=w&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&w?(i.child=ls(i,t.child,null,h),i.child=ls(i,null,D,h)):hn(t,i,D,h),i.memoizedState=l.state,u&&bf(i,a,!0),i.child}function Th(t){var i=t.stateNode;i.pendingContext?Cf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Cf(t,i.context,!1),Mc(t,i.containerInfo)}function Ah(t,i,a,l,u){return os(),mc(u),i.flags|=256,hn(t,i,a,l),i.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ch(t,i,a){var l=i.pendingProps,u=kt.current,h=!1,w=(i.flags&128)!==0,D;if((D=w)||(D=t!==null&&t.memoizedState===null?!1:(u&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Pt(kt,u&1),t===null)return pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=l.children,t=l.fallback,h?(l=i.mode,h=i.child,w={mode:"hidden",children:w},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=w):h=Oo(w,l,0,null),t=Lr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Hc(a),i.memoizedState=Bc,t):Vc(i,w));if(u=t.memoizedState,u!==null&&(D=u.dehydrated,D!==null))return g0(t,i,w,l,D,u,a);if(h){h=l.fallback,w=i.mode,u=t.child,D=u.sibling;var z={mode:"hidden",children:l.children};return(w&1)===0&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=sr(u,z),l.subtreeFlags=u.subtreeFlags&14680064),D!==null?h=sr(D,h):(h=Lr(h,w,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,w=t.child.memoizedState,w=w===null?Hc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},h.memoizedState=w,h.childLanes=t.childLanes&~a,i.memoizedState=Bc,l}return h=t.child,t=h.sibling,l=sr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Vc(t,i){return i=Oo({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function wo(t,i,a,l){return l!==null&&mc(l),ls(i,t.child,null,a),t=Vc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function g0(t,i,a,l,u,h,w){if(a)return i.flags&256?(i.flags&=-257,l=Fc(Error(n(422))),wo(t,i,w,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Oo({mode:"visible",children:l.children},u,0,null),h=Lr(h,u,w,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ls(i,t.child,null,w),i.child.memoizedState=Hc(w),i.memoizedState=Bc,h);if((i.mode&1)===0)return wo(t,i,w,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Fc(h,l,void 0),wo(t,i,w,l)}if(D=(w&t.childLanes)!==0,xn||D){if(l=en,l!==null){switch(w&-w){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=(u&(l.suspendedLanes|w))!==0?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,yi(t,u),Jn(l,t,u,-1))}return ru(),l=Fc(Error(n(421))),wo(t,i,w,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=b0.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,In=qi(u.nextSibling),Dn=i,Ft=!0,$n=null,t!==null&&(kn[zn++]=_i,kn[zn++]=xi,kn[zn++]=Er,_i=t.id,xi=t.overflow,Er=i),i=Vc(i,l.children),i.flags|=4096,i)}function Rh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),xc(t.return,i,a)}function Gc(t,i,a,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=u)}function bh(t,i,a){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(hn(t,i,l.children,a),l=kt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rh(t,a,i);else if(t.tag===19)Rh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Pt(kt,l),(i.mode&1)===0)i.memoizedState=null;else switch(u){case"forwards":for(a=i.child,u=null;a!==null;)t=a.alternate,t!==null&&vo(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Gc(i,!1,u,a,h);break;case"backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&vo(t)===null){i.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Gc(i,!0,a,null,h);break;case"together":Gc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function To(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Mi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Rr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function v0(t,i,a){switch(i.tag){case 3:Th(i),os();break;case 5:Gf(i);break;case 1:_n(i.type)&&ao(i);break;case 4:Mc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Pt(ho,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Pt(kt,kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Ch(t,i,a):(Pt(kt,kt.current&1),t=Mi(t,i,a),t!==null?t.sibling:null);Pt(kt,kt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return bh(t,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Pt(kt,kt.current),l)break;return null;case 22:case 23:return i.lanes=0,Mh(t,i,a)}return Mi(t,i,a)}var Ph,Wc,Nh,Lh;Ph=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Wc=function(){},Nh=function(t,i,a,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Ar(oi.current);var h=null;switch(a){case"input":u=dt(t,u),l=dt(t,l),h=[];break;case"select":u=oe({},u,{value:void 0}),l=oe({},l,{value:void 0}),h=[];break;case"textarea":u=ne(t,u),l=ne(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=io)}at(a,l);var w;a=null;for(ee in u)if(!l.hasOwnProperty(ee)&&u.hasOwnProperty(ee)&&u[ee]!=null)if(ee==="style"){var D=u[ee];for(w in D)D.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var z=l[ee];if(D=u?.[ee],l.hasOwnProperty(ee)&&z!==D&&(z!=null||D!=null))if(ee==="style")if(D){for(w in D)!D.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&D[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(h||(h=[]),h.push(ee,a)),a=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,D=D?D.__html:void 0,z!=null&&D!==z&&(h=h||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&Lt("scroll",t),h||D===z||(h=[])):(h=h||[]).push(ee,z))}a&&(h=h||[]).push("style",a);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},Lh=function(t,i,a,l){a!==l&&(i.flags|=4)};function _a(t,i){if(!Ft)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function cn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function _0(t,i,a){var l=i.pendingProps;switch(fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(i),null;case 1:return _n(i.type)&&so(),cn(i),null;case 3:return l=i.stateNode,ds(),Dt(vn),Dt(on),Tc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(uo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,$n!==null&&(tu($n),$n=null))),Wc(t,i),cn(i),null;case 5:Ec(i);var u=Ar(ha.current);if(a=i.type,t!==null&&i.stateNode!=null)Nh(t,i,a,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return cn(i),null}if(t=Ar(oi.current),uo(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[ai]=i,l[la]=h,t=(i.mode&1)!==0,a){case"dialog":Lt("cancel",l),Lt("close",l);break;case"iframe":case"object":case"embed":Lt("load",l);break;case"video":case"audio":for(u=0;u<sa.length;u++)Lt(sa[u],l);break;case"source":Lt("error",l);break;case"img":case"image":case"link":Lt("error",l),Lt("load",l);break;case"details":Lt("toggle",l);break;case"input":mt(l,h),Lt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Lt("invalid",l);break;case"textarea":xe(l,h),Lt("invalid",l)}at(a,h),u=null;for(var w in h)if(h.hasOwnProperty(w)){var D=h[w];w==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&no(l.textContent,D,t),u=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&no(l.textContent,D,t),u=["children",""+D]):o.hasOwnProperty(w)&&D!=null&&w==="onScroll"&&Lt("scroll",l)}switch(a){case"input":gt(l),Je(l,h,!0);break;case"textarea":gt(l),ve(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=io)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{w=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xe(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=w.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=w.createElement(a,{is:l.is}):(t=w.createElement(a),a==="select"&&(w=t,l.multiple?w.multiple=!0:l.size&&(w.size=l.size))):t=w.createElementNS(t,a),t[ai]=i,t[la]=l,Ph(t,i,!1,!1),i.stateNode=t;e:{switch(w=Rt(a,l),a){case"dialog":Lt("cancel",t),Lt("close",t),u=l;break;case"iframe":case"object":case"embed":Lt("load",t),u=l;break;case"video":case"audio":for(u=0;u<sa.length;u++)Lt(sa[u],t);u=l;break;case"source":Lt("error",t),u=l;break;case"img":case"image":case"link":Lt("error",t),Lt("load",t),u=l;break;case"details":Lt("toggle",t),u=l;break;case"input":mt(t,l),u=dt(t,l),Lt("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=oe({},l,{value:void 0}),Lt("invalid",t);break;case"textarea":xe(t,l),u=ne(t,l),Lt("invalid",t);break;default:u=l}at(a,u),D=u;for(h in D)if(D.hasOwnProperty(h)){var z=D[h];h==="style"?Oe(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&st(t,z)):h==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Me(t,z):typeof z=="number"&&Me(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Lt("scroll",t):z!=null&&P(t,h,z,w))}switch(a){case"input":gt(t),Je(t,l,!1);break;case"textarea":gt(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ce(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?A(t,!!l.multiple,h,!1):l.defaultValue!=null&&A(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=io)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return cn(i),null;case 6:if(t&&i.stateNode!=null)Lh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Ar(ha.current),Ar(oi.current),uo(i)){if(l=i.stateNode,a=i.memoizedProps,l[ai]=i,(h=l.nodeValue!==a)&&(t=Dn,t!==null))switch(t.tag){case 3:no(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[ai]=i,i.stateNode=l}return cn(i),null;case 13:if(Dt(kt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ft&&In!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Uf(),os(),i.flags|=98560,h=!1;else if(h=uo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ai]=i}else os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;cn(i),h=!1}else $n!==null&&(tu($n),$n=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(kt.current&1)!==0?Yt===0&&(Yt=3):ru())),i.updateQueue!==null&&(i.flags|=4),cn(i),null);case 4:return ds(),Wc(t,i),t===null&&aa(i.stateNode.containerInfo),cn(i),null;case 10:return _c(i.type._context),cn(i),null;case 17:return _n(i.type)&&so(),cn(i),null;case 19:if(Dt(kt),h=i.memoizedState,h===null)return cn(i),null;if(l=(i.flags&128)!==0,w=h.rendering,w===null)if(l)_a(h,!1);else{if(Yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(w=vo(t),w!==null){for(i.flags|=128,_a(h,!1),l=w.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,w=h.alternate,w===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=w.childLanes,h.lanes=w.lanes,h.child=w.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=w.memoizedProps,h.memoizedState=w.memoizedState,h.updateQueue=w.updateQueue,h.type=w.type,t=w.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Pt(kt,kt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Re()>ms&&(i.flags|=128,l=!0,_a(h,!1),i.lanes=4194304)}else{if(!l)if(t=vo(w),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),_a(h,!0),h.tail===null&&h.tailMode==="hidden"&&!w.alternate&&!Ft)return cn(i),null}else 2*Re()-h.renderingStartTime>ms&&a!==1073741824&&(i.flags|=128,l=!0,_a(h,!1),i.lanes=4194304);h.isBackwards?(w.sibling=i.child,i.child=w):(a=h.last,a!==null?a.sibling=w:i.child=w,h.last=w)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Re(),i.sibling=null,a=kt.current,Pt(kt,l?a&1|2:a&1),i):(cn(i),null);case 22:case 23:return iu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Un&1073741824)!==0&&(cn(i),i.subtreeFlags&6&&(i.flags|=8192)):cn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function x0(t,i){switch(fc(i),i.tag){case 1:return _n(i.type)&&so(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ds(),Dt(vn),Dt(on),Tc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Ec(i),null;case 13:if(Dt(kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));os()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Dt(kt),null;case 4:return ds(),null;case 10:return _c(i.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var Ao=!1,un=!1,y0=typeof WeakSet=="function"?WeakSet:Set,ke=null;function hs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Bt(t,i,l)}else a.current=null}function jc(t,i,a){try{a()}catch(l){Bt(t,i,l)}}var Dh=!1;function S0(t,i){if(ic=ja,t=df(),$l(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var w=0,D=-1,z=-1,ee=0,_e=0,ye=t,ge=null;t:for(;;){for(var Ue;ye!==a||u!==0&&ye.nodeType!==3||(D=w+u),ye!==h||l!==0&&ye.nodeType!==3||(z=w+l),ye.nodeType===3&&(w+=ye.nodeValue.length),(Ue=ye.firstChild)!==null;)ge=ye,ye=Ue;for(;;){if(ye===t)break t;if(ge===a&&++ee===u&&(D=w),ge===h&&++_e===l&&(z=w),(Ue=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Ue}a=D===-1||z===-1?null:{start:D,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(rc={focusedElem:t,selectionRange:a},ja=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,Ht=ze.memoizedState,Y=i.stateNode,V=Y.getSnapshotBeforeUpdate(i.elementType===i.type?He:Kn(i.type,He),Ht);Y.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Bt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return ze=Dh,Dh=!1,ze}function xa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&jc(i,a,h)}u=u.next}while(u!==l)}}function Co(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function Xc(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Ih(t){var i=t.alternate;i!==null&&(t.alternate=null,Ih(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ai],delete i[la],delete i[lc],delete i[i0],delete i[r0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uh(t){return t.tag===5||t.tag===3||t.tag===4}function Fh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=io));else if(l!==4&&(t=t.child,t!==null))for(Yc(t,i,a),t=t.sibling;t!==null;)Yc(t,i,a),t=t.sibling}function qc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(qc(t,i,a),t=t.sibling;t!==null;)qc(t,i,a),t=t.sibling}var sn=null,Zn=!1;function er(t,i,a){for(a=a.child;a!==null;)Oh(t,i,a),a=a.sibling}function Oh(t,i,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Zt,a)}catch{}switch(a.tag){case 5:un||hs(a,i);case 6:var l=sn,u=Zn;sn=null,er(t,i,a),sn=l,Zn=u,sn!==null&&(Zn?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(Zn?(t=sn,a=a.stateNode,t.nodeType===8?oc(t.parentNode,a):t.nodeType===1&&oc(t,a),Zs(t)):oc(sn,a.stateNode));break;case 4:l=sn,u=Zn,sn=a.stateNode.containerInfo,Zn=!0,er(t,i,a),sn=l,Zn=u;break;case 0:case 11:case 14:case 15:if(!un&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,w=h.destroy;h=h.tag,w!==void 0&&((h&2)!==0||(h&4)!==0)&&jc(a,i,w),u=u.next}while(u!==l)}er(t,i,a);break;case 1:if(!un&&(hs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Bt(a,i,D)}er(t,i,a);break;case 21:er(t,i,a);break;case 22:a.mode&1?(un=(l=un)||a.memoizedState!==null,er(t,i,a),un=l):er(t,i,a);break;default:er(t,i,a)}}function kh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new y0),i.forEach(function(l){var u=P0.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}}function Qn(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l];try{var h=t,w=i,D=w;e:for(;D!==null;){switch(D.tag){case 5:sn=D.stateNode,Zn=!1;break e;case 3:sn=D.stateNode.containerInfo,Zn=!0;break e;case 4:sn=D.stateNode.containerInfo,Zn=!0;break e}D=D.return}if(sn===null)throw Error(n(160));Oh(h,w,u),sn=null,Zn=!1;var z=u.alternate;z!==null&&(z.return=null),u.return=null}catch(ee){Bt(u,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zh(i,t),i=i.sibling}function zh(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qn(i,t),ci(t),l&4){try{xa(3,t,t.return),Co(3,t)}catch(He){Bt(t,t.return,He)}try{xa(5,t,t.return)}catch(He){Bt(t,t.return,He)}}break;case 1:Qn(i,t),ci(t),l&512&&a!==null&&hs(a,a.return);break;case 5:if(Qn(i,t),ci(t),l&512&&a!==null&&hs(a,a.return),t.flags&32){var u=t.stateNode;try{Me(u,"")}catch(He){Bt(t,t.return,He)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,w=a!==null?a.memoizedProps:h,D=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&Ge(u,h),Rt(D,w);var ee=Rt(D,h);for(w=0;w<z.length;w+=2){var _e=z[w],ye=z[w+1];_e==="style"?Oe(u,ye):_e==="dangerouslySetInnerHTML"?st(u,ye):_e==="children"?Me(u,ye):P(u,_e,ye,ee)}switch(D){case"input":Ct(u,h);break;case"textarea":Se(u,h);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Ue=h.value;Ue!=null?A(u,!!h.multiple,Ue,!1):ge!==!!h.multiple&&(h.defaultValue!=null?A(u,!!h.multiple,h.defaultValue,!0):A(u,!!h.multiple,h.multiple?[]:"",!1))}u[la]=h}catch(He){Bt(t,t.return,He)}}break;case 6:if(Qn(i,t),ci(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(He){Bt(t,t.return,He)}}break;case 3:if(Qn(i,t),ci(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(He){Bt(t,t.return,He)}break;case 4:Qn(i,t),ci(t);break;case 13:Qn(i,t),ci(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Zc=Re())),l&4&&kh(t);break;case 22:if(_e=a!==null&&a.memoizedState!==null,t.mode&1?(un=(ee=un)||_e,Qn(i,t),un=ee):Qn(i,t),ci(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!_e&&(t.mode&1)!==0)for(ke=t,_e=t.child;_e!==null;){for(ye=ke=_e;ke!==null;){switch(ge=ke,Ue=ge.child,ge.tag){case 0:case 11:case 14:case 15:xa(4,ge,ge.return);break;case 1:hs(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){Bt(l,a,He)}}break;case 5:hs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Vh(ye);continue}}Ue!==null?(Ue.return=ge,ke=Ue):Vh(ye)}_e=_e.sibling}e:for(_e=null,ye=t;;){if(ye.tag===5){if(_e===null){_e=ye;try{u=ye.stateNode,ee?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ye.stateNode,z=ye.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,D.style.display=tt("display",w))}catch(He){Bt(t,t.return,He)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(He){Bt(t,t.return,He)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Qn(i,t),ci(t),l&4&&kh(t);break;case 21:break;default:Qn(i,t),ci(t)}}function ci(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Uh(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&(Me(u,""),l.flags&=-33);var h=Fh(t);qc(t,h,u);break;case 3:case 4:var w=l.stateNode.containerInfo,D=Fh(t);Yc(t,D,w);break;default:throw Error(n(161))}}catch(z){Bt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function M0(t,i,a){ke=t,Bh(t)}function Bh(t,i,a){for(var l=(t.mode&1)!==0;ke!==null;){var u=ke,h=u.child;if(u.tag===22&&l){var w=u.memoizedState!==null||Ao;if(!w){var D=u.alternate,z=D!==null&&D.memoizedState!==null||un;D=Ao;var ee=un;if(Ao=w,(un=z)&&!ee)for(ke=u;ke!==null;)w=ke,z=w.child,w.tag===22&&w.memoizedState!==null?Gh(u):z!==null?(z.return=w,ke=z):Gh(u);for(;h!==null;)ke=h,Bh(h),h=h.sibling;ke=u,Ao=D,un=ee}Hh(t)}else(u.subtreeFlags&8772)!==0&&h!==null?(h.return=u,ke=h):Hh(t)}}function Hh(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:un||Co(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!un)if(a===null)l.componentDidMount();else{var u=i.elementType===i.type?a.memoizedProps:Kn(i.type,a.memoizedProps);l.componentDidUpdate(u,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&Vf(i,h,l);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Vf(i,w,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Zs(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}un||i.flags&512&&Xc(i)}catch(ge){Bt(i,i.return,ge)}}if(i===t){ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,ke=a;break}ke=i.return}}function Vh(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ke=a;break}ke=i.return}}function Gh(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Co(4,i)}catch(z){Bt(i,a,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(z){Bt(i,u,z)}}var h=i.return;try{Xc(i)}catch(z){Bt(i,h,z)}break;case 5:var w=i.return;try{Xc(i)}catch(z){Bt(i,w,z)}}}catch(z){Bt(i,i.return,z)}if(i===t){ke=null;break}var D=i.sibling;if(D!==null){D.return=i.return,ke=D;break}ke=i.return}}var E0=Math.ceil,Ro=N.ReactCurrentDispatcher,$c=N.ReactCurrentOwner,Vn=N.ReactCurrentBatchConfig,_t=0,en=null,Gt=null,an=0,Un=0,ps=$i(0),Yt=0,ya=null,Rr=0,bo=0,Kc=0,Sa=null,yn=null,Zc=0,ms=1/0,Ei=null,Po=!1,Qc=null,tr=null,No=!1,nr=null,Lo=0,Ma=0,Jc=null,Do=-1,Io=0;function pn(){return(_t&6)!==0?Re():Do!==-1?Do:Do=Re()}function ir(t){return(t.mode&1)===0?1:(_t&2)!==0&&an!==0?an&-an:a0.transition!==null?(Io===0&&(Io=Va()),Io):(t=Et,t!==0||(t=window.event,t=t===void 0?16:Wd(t.type)),t)}function Jn(t,i,a,l){if(50<Ma)throw Ma=0,Jc=null,Error(n(185));Xs(t,a,l),((_t&2)===0||t!==en)&&(t===en&&((_t&2)===0&&(bo|=a),Yt===4&&rr(t,an)),Sn(t,l),a===1&&_t===0&&(i.mode&1)===0&&(ms=Re()+500,oo&&Zi()))}function Sn(t,i){var a=t.callbackNode;gn(t,i);var l=Nn(t,t===en?an:0);if(l===0)a!==null&&Ae(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&Ae(a),i===1)t.tag===0?s0(jh.bind(null,t)):Pf(jh.bind(null,t)),t0(function(){(_t&6)===0&&Zi()}),a=null;else{switch(Fd(l)){case 1:a=Qe;break;case 4:a=Ye;break;case 16:a=pt;break;case 536870912:a=Nt;break;default:a=pt}a=Jh(a,Wh.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Wh(t,i){if(Do=-1,Io=0,(_t&6)!==0)throw Error(n(327));var a=t.callbackNode;if(gs()&&t.callbackNode!==a)return null;var l=Nn(t,t===en?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Uo(t,l);else{i=l;var u=_t;_t|=2;var h=Yh();(en!==t||an!==i)&&(Ei=null,ms=Re()+500,Pr(t,i));do try{A0();break}catch(D){Xh(t,D)}while(!0);vc(),Ro.current=h,_t=u,Gt!==null?i=0:(en=null,an=0,i=Yt)}if(i!==0){if(i===2&&(u=yr(t),u!==0&&(l=u,i=eu(t,u))),i===1)throw a=ya,Pr(t,0),rr(t,l),Sn(t,Re()),a;if(i===6)rr(t,l);else{if(u=t.current.alternate,(l&30)===0&&!w0(u)&&(i=Uo(t,l),i===2&&(h=yr(t),h!==0&&(l=h,i=eu(t,h))),i===1))throw a=ya,Pr(t,0),rr(t,l),Sn(t,Re()),a;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,yn,Ei);break;case 3:if(rr(t,l),(l&130023424)===l&&(i=Zc+500-Re(),10<i)){if(Nn(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){pn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=ac(Nr.bind(null,t,yn,Ei),i);break}Nr(t,yn,Ei);break;case 4:if(rr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var w=31-Mt(l);h=1<<w,w=i[w],w>u&&(u=w),l&=~h}if(l=u,l=Re()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*E0(l/1960))-l,10<l){t.timeoutHandle=ac(Nr.bind(null,t,yn,Ei),l);break}Nr(t,yn,Ei);break;case 5:Nr(t,yn,Ei);break;default:throw Error(n(329))}}}return Sn(t,Re()),t.callbackNode===a?Wh.bind(null,t):null}function eu(t,i){var a=Sa;return t.current.memoizedState.isDehydrated&&(Pr(t,i).flags|=256),t=Uo(t,i),t!==2&&(i=yn,yn=a,i!==null&&tu(i)),t}function tu(t){yn===null?yn=t:yn.push.apply(yn,t)}function w0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var u=a[l],h=u.getSnapshot;u=u.value;try{if(!qn(h(),u))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rr(t,i){for(i&=~Kc,i&=~bo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Mt(i),l=1<<a;t[a]=-1,i&=~l}}function jh(t){if((_t&6)!==0)throw Error(n(327));gs();var i=Nn(t,0);if((i&1)===0)return Sn(t,Re()),null;var a=Uo(t,i);if(t.tag!==0&&a===2){var l=yr(t);l!==0&&(i=l,a=eu(t,l))}if(a===1)throw a=ya,Pr(t,0),rr(t,i),Sn(t,Re()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,yn,Ei),Sn(t,Re()),null}function nu(t,i){var a=_t;_t|=1;try{return t(i)}finally{_t=a,_t===0&&(ms=Re()+500,oo&&Zi())}}function br(t){nr!==null&&nr.tag===0&&(_t&6)===0&&gs();var i=_t;_t|=1;var a=Vn.transition,l=Et;try{if(Vn.transition=null,Et=1,t)return t()}finally{Et=l,Vn.transition=a,_t=i,(_t&6)===0&&Zi()}}function iu(){Un=ps.current,Dt(ps)}function Pr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,e0(a)),Gt!==null)for(a=Gt.return;a!==null;){var l=a;switch(fc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&so();break;case 3:ds(),Dt(vn),Dt(on),Tc();break;case 5:Ec(l);break;case 4:ds();break;case 13:Dt(kt);break;case 19:Dt(kt);break;case 10:_c(l.type._context);break;case 22:case 23:iu()}a=a.return}if(en=t,Gt=t=sr(t.current,null),an=Un=i,Yt=0,ya=null,Kc=bo=Rr=0,yn=Sa=null,Tr!==null){for(i=0;i<Tr.length;i++)if(a=Tr[i],l=a.interleaved,l!==null){a.interleaved=null;var u=l.next,h=a.pending;if(h!==null){var w=h.next;h.next=u,l.next=w}a.pending=l}Tr=null}return t}function Xh(t,i){do{var a=Gt;try{if(vc(),_o.current=Mo,xo){for(var l=zt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}xo=!1}if(Cr=0,Jt=Xt=zt=null,pa=!1,ma=0,$c.current=null,a===null||a.return===null){Yt=1,ya=i,Gt=null;break}e:{var h=t,w=a.return,D=a,z=i;if(i=an,D.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,_e=D,ye=_e.tag;if((_e.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=vh(w);if(Ue!==null){Ue.flags&=-257,_h(Ue,w,D,h,i),Ue.mode&1&&gh(h,ee,i),i=Ue,z=ee;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(z),i.updateQueue=He}else ze.add(z);break e}else{if((i&1)===0){gh(h,ee,i),ru();break e}z=Error(n(426))}}else if(Ft&&D.mode&1){var Ht=vh(w);if(Ht!==null){(Ht.flags&65536)===0&&(Ht.flags|=256),_h(Ht,w,D,h,i),mc(fs(z,D));break e}}h=z=fs(z,D),Yt!==4&&(Yt=2),Sa===null?Sa=[h]:Sa.push(h),h=w;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var Y=ph(h,z,i);Hf(h,Y);break e;case 1:D=z;var V=h.type,K=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(tr===null||!tr.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=mh(h,D,i);Hf(h,Ee);break e}}h=h.return}while(h!==null)}$h(a)}catch(Ve){i=Ve,Gt===a&&a!==null&&(Gt=a=a.return);continue}break}while(!0)}function Yh(){var t=Ro.current;return Ro.current=Mo,t===null?Mo:t}function ru(){(Yt===0||Yt===3||Yt===2)&&(Yt=4),en===null||(Rr&268435455)===0&&(bo&268435455)===0||rr(en,an)}function Uo(t,i){var a=_t;_t|=2;var l=Yh();(en!==t||an!==i)&&(Ei=null,Pr(t,i));do try{T0();break}catch(u){Xh(t,u)}while(!0);if(vc(),_t=a,Ro.current=l,Gt!==null)throw Error(n(261));return en=null,an=0,Yt}function T0(){for(;Gt!==null;)qh(Gt)}function A0(){for(;Gt!==null&&!Ie();)qh(Gt)}function qh(t){var i=Qh(t.alternate,t,Un);t.memoizedProps=t.pendingProps,i===null?$h(t):Gt=i,$c.current=null}function $h(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=_0(a,i,Un),a!==null){Gt=a;return}}else{if(a=x0(a,i),a!==null){a.flags&=32767,Gt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Yt=6,Gt=null;return}}if(i=i.sibling,i!==null){Gt=i;return}Gt=i=t}while(i!==null);Yt===0&&(Yt=5)}function Nr(t,i,a){var l=Et,u=Vn.transition;try{Vn.transition=null,Et=1,C0(t,i,a,l)}finally{Vn.transition=u,Et=l}return null}function C0(t,i,a,l){do gs();while(nr!==null);if((_t&6)!==0)throw Error(n(327));a=t.finishedWork;var u=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(og(t,h),t===en&&(Gt=en=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||No||(No=!0,Jh(pt,function(){return gs(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Vn.transition,Vn.transition=null;var w=Et;Et=1;var D=_t;_t|=4,$c.current=null,S0(t,a),zh(a,t),Yg(rc),ja=!!ic,rc=ic=null,t.current=a,M0(a),Be(),_t=D,Et=w,Vn.transition=h}else t.current=a;if(No&&(No=!1,nr=t,Lo=u),h=t.pendingLanes,h===0&&(tr=null),je(a.stateNode),Sn(t,Re()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)u=i[a],l(u.value,{componentStack:u.stack,digest:u.digest});if(Po)throw Po=!1,t=Qc,Qc=null,t;return(Lo&1)!==0&&t.tag!==0&&gs(),h=t.pendingLanes,(h&1)!==0?t===Jc?Ma++:(Ma=0,Jc=t):Ma=0,Zi(),null}function gs(){if(nr!==null){var t=Fd(Lo),i=Vn.transition,a=Et;try{if(Vn.transition=null,Et=16>t?16:t,nr===null)var l=!1;else{if(t=nr,nr=null,Lo=0,(_t&6)!==0)throw Error(n(331));var u=_t;for(_t|=4,ke=t.current;ke!==null;){var h=ke,w=h.child;if((ke.flags&16)!==0){var D=h.deletions;if(D!==null){for(var z=0;z<D.length;z++){var ee=D[z];for(ke=ee;ke!==null;){var _e=ke;switch(_e.tag){case 0:case 11:case 15:xa(8,_e,h)}var ye=_e.child;if(ye!==null)ye.return=_e,ke=ye;else for(;ke!==null;){_e=ke;var ge=_e.sibling,Ue=_e.return;if(Ih(_e),_e===ee){ke=null;break}if(ge!==null){ge.return=Ue,ke=ge;break}ke=Ue}}}var ze=h.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var Ht=He.sibling;He.sibling=null,He=Ht}while(He!==null)}}ke=h}}if((h.subtreeFlags&2064)!==0&&w!==null)w.return=h,ke=w;else e:for(;ke!==null;){if(h=ke,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:xa(9,h,h.return)}var Y=h.sibling;if(Y!==null){Y.return=h.return,ke=Y;break e}ke=h.return}}var V=t.current;for(ke=V;ke!==null;){w=ke;var K=w.child;if((w.subtreeFlags&2064)!==0&&K!==null)K.return=w,ke=K;else e:for(w=V;ke!==null;){if(D=ke,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Co(9,D)}}catch(Ve){Bt(D,D.return,Ve)}if(D===w){ke=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,ke=Ee;break e}ke=D.return}}if(_t=u,Zi(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Zt,t)}catch{}l=!0}return l}finally{Et=a,Vn.transition=i}}return!1}function Kh(t,i,a){i=fs(a,i),i=ph(t,i,1),t=Ji(t,i,1),i=pn(),t!==null&&(Xs(t,1,i),Sn(t,i))}function Bt(t,i,a){if(t.tag===3)Kh(t,t,a);else for(;i!==null;){if(i.tag===3){Kh(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tr===null||!tr.has(l))){t=fs(a,t),t=mh(i,t,1),i=Ji(i,t,1),t=pn(),i!==null&&(Xs(i,1,t),Sn(i,t));break}}i=i.return}}function R0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=pn(),t.pingedLanes|=t.suspendedLanes&a,en===t&&(an&a)===a&&(Yt===4||Yt===3&&(an&130023424)===an&&500>Re()-Zc?Pr(t,0):Kc|=a),Sn(t,i)}function Zh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Hi,Hi<<=1,(Hi&130023424)===0&&(Hi=4194304)));var a=pn();t=yi(t,i),t!==null&&(Xs(t,i,a),Sn(t,a))}function b0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Zh(t,a)}function P0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Zh(t,a)}var Qh;Qh=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||vn.current)xn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return xn=!1,v0(t,i,a);xn=(t.flags&131072)!==0}else xn=!1,Ft&&(i.flags&1048576)!==0&&Nf(i,co,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;To(t,i),t=i.pendingProps;var u=rs(i,on.current);us(i,a),u=Rc(null,i,l,t,u,a);var h=bc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,_n(l)?(h=!0,ao(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Sc(i),u.updater=Eo,i.stateNode=u,u._reactInternals=i,Uc(i,l,t,a),i=zc(null,i,l,!0,h,a)):(i.tag=0,Ft&&h&&dc(i),hn(null,i,u,a),i=i.child),i;case 16:l=i.elementType;e:{switch(To(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=L0(l),t=Kn(l,t),u){case 0:i=kc(null,i,l,t,a);break e;case 1:i=wh(null,i,l,t,a);break e;case 11:i=xh(null,i,l,t,a);break e;case 14:i=yh(null,i,l,Kn(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Kn(l,u),kc(t,i,l,u,a);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Kn(l,u),wh(t,i,l,u,a);case 3:e:{if(Th(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,Bf(t,i),go(i,l,null,a);var w=i.memoizedState;if(l=w.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=fs(Error(n(423)),i),i=Ah(t,i,l,a,u);break e}else if(l!==u){u=fs(Error(n(424)),i),i=Ah(t,i,l,a,u);break e}else for(In=qi(i.stateNode.containerInfo.firstChild),Dn=i,Ft=!0,$n=null,a=kf(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(os(),l===u){i=Mi(t,i,a);break e}hn(t,i,l,a)}i=i.child}return i;case 5:return Gf(i),t===null&&pc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,w=u.children,sc(l,u)?w=null:h!==null&&sc(l,h)&&(i.flags|=32),Eh(t,i),hn(t,i,w,a),i.child;case 6:return t===null&&pc(i),null;case 13:return Ch(t,i,a);case 4:return Mc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ls(i,null,l,a):hn(t,i,l,a),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Kn(l,u),xh(t,i,l,u,a);case 7:return hn(t,i,i.pendingProps,a),i.child;case 8:return hn(t,i,i.pendingProps.children,a),i.child;case 12:return hn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,w=u.value,Pt(ho,l._currentValue),l._currentValue=w,h!==null)if(qn(h.value,w)){if(h.children===u.children&&!vn.current){i=Mi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){w=h.child;for(var z=D.firstContext;z!==null;){if(z.context===l){if(h.tag===1){z=Si(-1,a&-a),z.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ee.pending=z}}h.lanes|=a,z=h.alternate,z!==null&&(z.lanes|=a),xc(h.return,a,i),D.lanes|=a;break}z=z.next}}else if(h.tag===10)w=h.type===i.type?null:h.child;else if(h.tag===18){if(w=h.return,w===null)throw Error(n(341));w.lanes|=a,D=w.alternate,D!==null&&(D.lanes|=a),xc(w,a,i),w=h.sibling}else w=h.child;if(w!==null)w.return=h;else for(w=h;w!==null;){if(w===i){w=null;break}if(h=w.sibling,h!==null){h.return=w.return,w=h;break}w=w.return}h=w}hn(t,i,u.children,a),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,us(i,a),u=Bn(u),l=l(u),i.flags|=1,hn(t,i,l,a),i.child;case 14:return l=i.type,u=Kn(l,i.pendingProps),u=Kn(l.type,u),yh(t,i,l,u,a);case 15:return Sh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Kn(l,u),To(t,i),i.tag=1,_n(l)?(t=!0,ao(i)):t=!1,us(i,a),fh(i,l,u),Uc(i,l,u,a),zc(null,i,l,!0,t,a);case 19:return bh(t,i,a);case 22:return Mh(t,i,a)}throw Error(n(156,i.tag))};function Jh(t,i){return X(t,i)}function N0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Gn(t,i,a,l){return new N0(t,i,a,l)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function L0(t){if(typeof t=="function")return su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===le)return 11;if(t===de)return 14}return 2}function sr(t,i){var a=t.alternate;return a===null?(a=Gn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function Fo(t,i,a,l,u,h){var w=2;if(l=t,typeof t=="function")su(t)&&(w=1);else if(typeof t=="string")w=5;else e:switch(t){case U:return Lr(a.children,u,h,i);case $:w=8,u|=8;break;case L:return t=Gn(12,a,i,u|2),t.elementType=L,t.lanes=h,t;case Q:return t=Gn(13,a,i,u),t.elementType=Q,t.lanes=h,t;case fe:return t=Gn(19,a,i,u),t.elementType=fe,t.lanes=h,t;case ce:return Oo(a,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:w=10;break e;case H:w=9;break e;case le:w=11;break e;case de:w=14;break e;case ae:w=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Gn(w,a,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Lr(t,i,a,l){return t=Gn(7,t,l,i),t.lanes=a,t}function Oo(t,i,a,l){return t=Gn(22,t,l,i),t.elementType=ce,t.lanes=a,t.stateNode={isHidden:!1},t}function au(t,i,a){return t=Gn(6,t,null,i),t.lanes=a,t}function ou(t,i,a){return i=Gn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function D0(t,i,a,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qr(0),this.expirationTimes=qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function lu(t,i,a,l,u,h,w,D,z){return t=new D0(t,i,a,D,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Gn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(h),t}function I0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function ep(t){if(!t)return Ki;t=t._reactInternals;e:{if(mi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(_n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(_n(a))return Rf(t,a,i)}return i}function tp(t,i,a,l,u,h,w,D,z){return t=lu(a,l,!0,t,u,h,w,D,z),t.context=ep(null),a=t.current,l=pn(),u=ir(a),h=Si(l,u),h.callback=i??null,Ji(a,h,u),t.current.lanes=u,Xs(t,u,l),Sn(t,l),t}function ko(t,i,a,l){var u=i.current,h=pn(),w=ir(u);return a=ep(a),i.context===null?i.context=a:i.pendingContext=a,i=Si(h,w),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=Ji(u,i,w),t!==null&&(Jn(t,u,w,h),mo(t,u,w)),w}function zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function cu(t,i){np(t,i),(t=t.alternate)&&np(t,i)}function U0(){return null}var ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function uu(t){this._internalRoot=t}Bo.prototype.render=uu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ko(t,i,null,null)},Bo.prototype.unmount=uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){ko(null,t,null,null)}),i[gi]=null}};function Bo(t){this._internalRoot=t}Bo.prototype.unstable_scheduleHydration=function(t){if(t){var i=zd();t={blockedOn:null,target:t,priority:i};for(var a=0;a<ji.length&&i!==0&&i<ji[a].priority;a++);ji.splice(a,0,t),a===0&&Vd(t)}};function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ho(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rp(){}function F0(t,i,a,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var ee=zo(w);h.call(ee)}}var w=tp(i,l,t,0,null,!1,!1,"",rp);return t._reactRootContainer=w,t[gi]=w.current,aa(t.nodeType===8?t.parentNode:t),br(),w}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var D=l;l=function(){var ee=zo(z);D.call(ee)}}var z=lu(t,0,!1,null,null,!1,!1,"",rp);return t._reactRootContainer=z,t[gi]=z.current,aa(t.nodeType===8?t.parentNode:t),br(function(){ko(i,z,a,l)}),z}function Vo(t,i,a,l,u){var h=a._reactRootContainer;if(h){var w=h;if(typeof u=="function"){var D=u;u=function(){var z=zo(w);D.call(z)}}ko(i,w,t,u)}else w=F0(a,i,t,u,l);return zo(w)}Od=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=bt(i.pendingLanes);a!==0&&(Ul(i,a|1),Sn(i,Re()),(_t&6)===0&&(ms=Re()+500,Zi()))}break;case 13:br(function(){var l=yi(t,1);if(l!==null){var u=pn();Jn(l,t,1,u)}}),cu(t,1)}},Fl=function(t){if(t.tag===13){var i=yi(t,134217728);if(i!==null){var a=pn();Jn(i,t,134217728,a)}cu(t,134217728)}},kd=function(t){if(t.tag===13){var i=ir(t),a=yi(t,i);if(a!==null){var l=pn();Jn(a,t,i,l)}cu(t,i)}},zd=function(){return Et},Bd=function(t,i){var a=Et;try{return Et=t,i()}finally{Et=a}},pe=function(t,i,a){switch(i){case"input":if(Ct(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var u=ro(l);if(!u)throw Error(n(90));k(l),Ct(l,u)}}}break;case"textarea":Se(t,a);break;case"select":i=a.value,i!=null&&A(t,!!a.multiple,i,!1)}},Vt=nu,vt=br;var O0={usingClientEntryPoint:!1,Events:[ca,ns,ro,ht,Ot,nu]},Ea={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k0={bundleType:Ea.bundleType,version:Ea.version,rendererPackageName:Ea.rendererPackageName,rendererConfig:Ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J(t),t===null?null:t.stateNode},findFiberByHostInstance:Ea.findFiberByHostInstance||U0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Zt=Go.inject(k0),ot=Go}catch{}}return Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O0,Mn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(i))throw Error(n(200));return I0(t,i,null,a)},Mn.createRoot=function(t,i){if(!du(t))throw Error(n(299));var a=!1,l="",u=ip;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=lu(t,1,!1,null,null,a,!1,l,u),t[gi]=i.current,aa(t.nodeType===8?t.parentNode:t),new uu(i)},Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=J(i),t=t===null?null:t.stateNode,t},Mn.flushSync=function(t){return br(t)},Mn.hydrate=function(t,i,a){if(!Ho(i))throw Error(n(200));return Vo(null,t,i,!0,a)},Mn.hydrateRoot=function(t,i,a){if(!du(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,u=!1,h="",w=ip;if(a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=tp(i,null,t,1,a??null,u,!1,h,w),t[gi]=i.current,aa(t),l)for(t=0;t<l.length;t++)a=l[t],u=a._getVersion,u=u(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,u]:i.mutableSourceEagerHydrationData.push(a,u);return new Bo(i)},Mn.render=function(t,i,a){if(!Ho(i))throw Error(n(200));return Vo(null,t,i,!1,a)},Mn.unmountComponentAtNode=function(t){if(!Ho(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Vo(null,null,t,!1,function(){t._reactRootContainer=null,t[gi]=null})}),!0):!1},Mn.unstable_batchedUpdates=nu,Mn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Ho(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Vo(t,i,a,!1,l)},Mn.version="18.3.1-next-f1338f8080-20240426",Mn}var fp;function X0(){if(fp)return pu.exports;fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pu.exports=j0(),pu.exports}var hp;function Y0(){if(hp)return Wo;hp=1;var s=X0();return Wo.createRoot=s.createRoot,Wo.hydrateRoot=s.hydrateRoot,Wo}var q0=Y0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="166",$0=0,pp=1,K0=2,Am=1,Z0=2,bi=3,gr=0,Tn=1,Pi=2,pr=0,Us=1,mp=2,gp=3,vp=4,Q0=5,Hr=100,J0=101,ev=102,tv=103,nv=104,iv=200,rv=201,sv=202,av=203,ju=204,Xu=205,ov=206,lv=207,cv=208,uv=209,dv=210,fv=211,hv=212,pv=213,mv=214,gv=0,vv=1,_v=2,El=3,xv=4,yv=5,Sv=6,Mv=7,Cm=0,Ev=1,wv=2,mr=0,Tv=1,Av=2,Cv=3,Rv=4,bv=5,Pv=6,Nv=7,Rm=300,ks=301,zs=302,Yu=303,qu=304,bl=306,$u=1e3,Gr=1001,Ku=1002,Xn=1003,Lv=1004,jo=1005,ii=1006,vu=1007,Wr=1008,Ii=1009,bm=1010,Pm=1011,Na=1012,Rd=1013,Xr=1014,Ni=1015,La=1016,bd=1017,Pd=1018,Bs=1020,Nm=35902,Lm=1021,Dm=1022,ri=1023,Im=1024,Um=1025,Fs=1026,Hs=1027,Fm=1028,Nd=1029,Om=1030,Ld=1031,Dd=1033,vl=33776,_l=33777,xl=33778,yl=33779,Zu=35840,Qu=35841,Ju=35842,ed=35843,td=36196,nd=37492,id=37496,rd=37808,sd=37809,ad=37810,od=37811,ld=37812,cd=37813,ud=37814,dd=37815,fd=37816,hd=37817,pd=37818,md=37819,gd=37820,vd=37821,Sl=36492,_d=36494,xd=36495,km=36283,yd=36284,Sd=36285,Md=36286,Dv=3200,Iv=3201,Uv=0,Fv=1,hr="",ui="srgb",_r="srgb-linear",Id="display-p3",Pl="display-p3-linear",wl="linear",It="srgb",Tl="rec709",Al="p3",vs=7680,_p=519,Ov=512,kv=513,zv=514,zm=515,Bv=516,Hv=517,Vv=518,Gv=519,xp=35044,yp="300 es",Li=2e3,Cl=2001;class Gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=Math.PI/180,Ed=180/Math.PI;function Da(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[r&255]+dn[r>>8&255]+dn[r>>16&255]+dn[r>>24&255]).toLowerCase()}function wn(s,e,n){return Math.max(e,Math.min(n,s))}function Wv(s,e){return(s%e+e)%e}function xu(s,e,n){return(1-n)*s+n*e}function Ta(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function En(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,n=0){St.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*o+e.x,this.y=c*o+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,n,r,o,c,f,d,p,m){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,d,p,m)}set(e,n,r,o,c,f,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=c,x[5]=p,x[6]=r,x[7]=f,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],x=r[4],_=r[7],y=r[2],S=r[5],E=r[8],T=o[0],g=o[3],v=o[6],b=o[1],P=o[4],N=o[7],q=o[2],F=o[5],U=o[8];return c[0]=f*T+d*b+p*q,c[3]=f*g+d*P+p*F,c[6]=f*v+d*N+p*U,c[1]=m*T+x*b+_*q,c[4]=m*g+x*P+_*F,c[7]=m*v+x*N+_*U,c[2]=y*T+S*b+E*q,c[5]=y*g+S*P+E*F,c[8]=y*v+S*N+E*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return n*f*x-n*d*m-r*c*x+r*d*p+o*c*m-o*f*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8],_=x*f-d*m,y=d*p-x*c,S=m*c-f*p,E=n*_+r*y+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=_*T,e[1]=(o*m-x*r)*T,e[2]=(d*r-o*f)*T,e[3]=y*T,e[4]=(x*n-o*p)*T,e[5]=(o*c-d*n)*T,e[6]=S*T,e[7]=(r*p-m*n)*T,e[8]=(f*n-r*c)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-o*m,o*p,-o*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new ct;function Bm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Rl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jv(){const s=Rl("canvas");return s.style.display="block",s}const Sp={};function Hm(s){s in Sp||(Sp[s]=!0,console.warn(s))}function Xv(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const Mp=new ct().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ep=new ct().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xo={[_r]:{transfer:wl,primaries:Tl,toReference:s=>s,fromReference:s=>s},[ui]:{transfer:It,primaries:Tl,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Pl]:{transfer:wl,primaries:Al,toReference:s=>s.applyMatrix3(Ep),fromReference:s=>s.applyMatrix3(Mp)},[Id]:{transfer:It,primaries:Al,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Ep),fromReference:s=>s.applyMatrix3(Mp).convertLinearToSRGB()}},Yv=new Set([_r,Pl]),wt={enabled:!0,_workingColorSpace:_r,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Yv.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,n){if(this.enabled===!1||e===n||!e||!n)return s;const r=Xo[e].toReference,o=Xo[n].fromReference;return o(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Xo[s].primaries},getTransfer:function(s){return s===hr?wl:Xo[s].transfer}};function Os(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Su(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let _s;class qv{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_s===void 0&&(_s=Rl("canvas")),_s.width=e.width,_s.height=e.height;const r=_s.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=_s}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Rl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Os(c[f]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Os(n[r]/255)*255):n[r]=Os(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $v=0;class Vm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$v++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,d=o.length;f<d;f++)o[f].isDataTexture?c.push(Mu(o[f].image)):c.push(Mu(o[f]))}else c=Mu(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function Mu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Kv=0;class An extends Gs{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=Gr,o=Gr,c=ii,f=Wr,d=ri,p=Ii,m=An.DEFAULT_ANISOTROPY,x=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Da(),this.name="",this.source=new Vm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $u:e.x=e.x-Math.floor(e.x);break;case Gr:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $u:e.y=e.y-Math.floor(e.y);break;case Gr:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Rm;An.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,n=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*r+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*r+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*r+f[11]*o+f[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,m=p[0],x=p[4],_=p[8],y=p[1],S=p[5],E=p[9],T=p[2],g=p[6],v=p[10];if(Math.abs(x-y)<.01&&Math.abs(_-T)<.01&&Math.abs(E-g)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+T)<.1&&Math.abs(E+g)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,N=(S+1)/2,q=(v+1)/2,F=(x+y)/4,U=(_+T)/4,$=(E+g)/4;return P>N&&P>q?P<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(P),o=F/r,c=U/r):N>q?N<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(N),r=F/o,c=$/o):q<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(q),r=U/c,o=$/c),this.set(r,o,c,n),this}let b=Math.sqrt((g-E)*(g-E)+(_-T)*(_-T)+(y-x)*(y-x));return Math.abs(b)<.001&&(b=1),this.x=(g-E)/b,this.y=(_-T)/b,this.z=(y-x)/b,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zv extends Gs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new rn(0,0,e,n),this.scissorTest=!1,this.viewport=new rn(0,0,e,n);const o={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new An(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Vm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yr extends Zv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Gm extends An{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qv extends An{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ia{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,f,d){let p=r[o+0],m=r[o+1],x=r[o+2],_=r[o+3];const y=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(d===1){e[n+0]=y,e[n+1]=S,e[n+2]=E,e[n+3]=T;return}if(_!==T||p!==y||m!==S||x!==E){let g=1-d;const v=p*y+m*S+x*E+_*T,b=v>=0?1:-1,P=1-v*v;if(P>Number.EPSILON){const q=Math.sqrt(P),F=Math.atan2(q,v*b);g=Math.sin(g*F)/q,d=Math.sin(d*F)/q}const N=d*b;if(p=p*g+y*N,m=m*g+S*N,x=x*g+E*N,_=_*g+T*N,g===1-d){const q=1/Math.sqrt(p*p+m*m+x*x+_*_);p*=q,m*=q,x*=q,_*=q}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,c,f){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],_=c[f],y=c[f+1],S=c[f+2],E=c[f+3];return e[n]=d*E+x*_+p*S-m*y,e[n+1]=p*E+x*y+m*_-d*S,e[n+2]=m*E+x*S+d*y-p*_,e[n+3]=x*E-d*_-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),_=d(c/2),y=p(r/2),S=p(o/2),E=p(c/2);switch(f){case"XYZ":this._x=y*x*_+m*S*E,this._y=m*S*_-y*x*E,this._z=m*x*E+y*S*_,this._w=m*x*_-y*S*E;break;case"YXZ":this._x=y*x*_+m*S*E,this._y=m*S*_-y*x*E,this._z=m*x*E-y*S*_,this._w=m*x*_+y*S*E;break;case"ZXY":this._x=y*x*_-m*S*E,this._y=m*S*_+y*x*E,this._z=m*x*E+y*S*_,this._w=m*x*_-y*S*E;break;case"ZYX":this._x=y*x*_-m*S*E,this._y=m*S*_+y*x*E,this._z=m*x*E-y*S*_,this._w=m*x*_+y*S*E;break;case"YZX":this._x=y*x*_+m*S*E,this._y=m*S*_+y*x*E,this._z=m*x*E-y*S*_,this._w=m*x*_-y*S*E;break;case"XZY":this._x=y*x*_-m*S*E,this._y=m*S*_-y*x*E,this._z=m*x*E+y*S*_,this._w=m*x*_+y*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],f=n[1],d=n[5],p=n[9],m=n[2],x=n[6],_=n[10],y=r+d+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-p)*S,this._y=(c-m)*S,this._z=(f-o)*S}else if(r>d&&r>_){const S=2*Math.sqrt(1+r-d-_);this._w=(x-p)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+m)/S}else if(d>_){const S=2*Math.sqrt(1+d-r-_);this._w=(c-m)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+_-r-d);this._w=(f-o)/S,this._x=(c+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,f=e._w,d=n._x,p=n._y,m=n._z,x=n._w;return this._x=r*x+f*d+o*m-c*p,this._y=o*x+f*p+c*d-r*m,this._z=c*x+f*m+r*p-o*d,this._w=f*x-r*d-o*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,o=this._y,c=this._z,f=this._w;let d=f*e._w+r*e._x+o*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=o,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-n;return this._w=S*f+n*this._w,this._x=S*r+n*this._x,this._y=S*o+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),x=Math.atan2(m,d),_=Math.sin((1-n)*x)/m,y=Math.sin(n*x)/m;return this._w=f*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,n=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(wp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(wp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,f=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*o-d*r),x=2*(d*n-c*o),_=2*(c*r-f*n);return this.x=n+p*m+f*_-d*x,this.y=r+p*x+d*m-c*_,this.z=o+p*_+c*x-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,f=n.x,d=n.y,p=n.z;return this.x=o*p-c*d,this.y=c*f-r*p,this.z=r*d-o*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Eu.copy(this).projectOnVector(e),this.sub(Eu)}reflect(e){return this.sub(Eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(wn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eu=new re,wp=new Ia;class Ua{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,ei):ei.fromBufferAttribute(c,f),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Yo.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Yo.copy(r.boundingBox)),Yo.applyMatrix4(e.matrixWorld),this.union(Yo)}const o=e.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),qo.subVectors(this.max,Aa),xs.subVectors(e.a,Aa),ys.subVectors(e.b,Aa),Ss.subVectors(e.c,Aa),or.subVectors(ys,xs),lr.subVectors(Ss,ys),Dr.subVectors(xs,Ss);let n=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Dr.z,Dr.y,or.z,0,-or.x,lr.z,0,-lr.x,Dr.z,0,-Dr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Dr.y,Dr.x,0];return!wu(n,xs,ys,Ss,qo)||(n=[1,0,0,0,1,0,0,0,1],!wu(n,xs,ys,Ss,qo))?!1:($o.crossVectors(or,lr),n=[$o.x,$o.y,$o.z],wu(n,xs,ys,Ss,qo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new re,new re,new re,new re,new re,new re,new re,new re],ei=new re,Yo=new Ua,xs=new re,ys=new re,Ss=new re,or=new re,lr=new re,Dr=new re,Aa=new re,qo=new re,$o=new re,Ir=new re;function wu(s,e,n,r,o){for(let c=0,f=s.length-3;c<=f;c+=3){Ir.fromArray(s,c);const d=o.x*Math.abs(Ir.x)+o.y*Math.abs(Ir.y)+o.z*Math.abs(Ir.z),p=e.dot(Ir),m=n.dot(Ir),x=r.dot(Ir);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const Jv=new Ua,Ca=new re,Tu=new re;class Nl{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):Jv.setFromPoints(e).getCenter(r);let o=0;for(let c=0,f=e.length;c<f;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const n=Ca.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ca,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(Tu)),this.expandByPoint(Ca.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new re,Au=new re,Ko=new re,cr=new re,Cu=new re,Zo=new re,Ru=new re;class Wm{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ti.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,n),Ti.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Au.copy(e).add(n).multiplyScalar(.5),Ko.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(Au);const c=e.distanceTo(n)*.5,f=-this.direction.dot(Ko),d=cr.dot(this.direction),p=-cr.dot(Ko),m=cr.lengthSq(),x=Math.abs(1-f*f);let _,y,S,E;if(x>0)if(_=f*p-d,y=f*d-p,E=c*x,_>=0)if(y>=-E)if(y<=E){const T=1/x;_*=T,y*=T,S=_*(_+f*y+2*d)+y*(f*_+y+2*p)+m}else y=c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*p)+m;else y=-c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*p)+m;else y<=-E?(_=Math.max(0,-(-f*c+d)),y=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+y*(y+2*p)+m):y<=E?(_=0,y=Math.min(Math.max(-c,-p),c),S=y*(y+2*p)+m):(_=Math.max(0,-(f*c+d)),y=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+y*(y+2*p)+m);else y=f>0?-c:c,_=Math.max(0,-(f*y+d)),S=-_*_+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Au).addScaledVector(Ko,y),S}intersectSphere(e,n){Ti.subVectors(e.center,this.origin);const r=Ti.dot(this.direction),o=Ti.dot(Ti)-r*r,c=e.radius*e.radius;if(o>c)return null;const f=Math.sqrt(c-o),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,f,d,p;const m=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(c=(e.min.y-y.y)*x,f=(e.max.y-y.y)*x):(c=(e.max.y-y.y)*x,f=(e.min.y-y.y)*x),r>f||c>o||((c>r||isNaN(r))&&(r=c),(f<o||isNaN(o))&&(o=f),_>=0?(d=(e.min.z-y.z)*_,p=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,p=(e.min.z-y.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,n,r,o,c){Cu.subVectors(n,e),Zo.subVectors(r,e),Ru.crossVectors(Cu,Zo);let f=this.direction.dot(Ru),d;if(f>0){if(o)return null;d=1}else if(f<0)d=-1,f=-f;else return null;cr.subVectors(this.origin,e);const p=d*this.direction.dot(Zo.crossVectors(cr,Zo));if(p<0)return null;const m=d*this.direction.dot(Cu.cross(cr));if(m<0||p+m>f)return null;const x=-d*cr.dot(Ru);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,o,c,f,d,p,m,x,_,y,S,E,T,g){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,f,d,p,m,x,_,y,S,E,T,g)}set(e,n,r,o,c,f,d,p,m,x,_,y,S,E,T,g){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=f,v[9]=d,v[13]=p,v[2]=m,v[6]=x,v[10]=_,v[14]=y,v[3]=S,v[7]=E,v[11]=T,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,o=1/Ms.setFromMatrixColumn(e,0).length(),c=1/Ms.setFromMatrixColumn(e,1).length(),f=1/Ms.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const y=f*x,S=f*_,E=d*x,T=d*_;n[0]=p*x,n[4]=-p*_,n[8]=m,n[1]=S+E*m,n[5]=y-T*m,n[9]=-d*p,n[2]=T-y*m,n[6]=E+S*m,n[10]=f*p}else if(e.order==="YXZ"){const y=p*x,S=p*_,E=m*x,T=m*_;n[0]=y+T*d,n[4]=E*d-S,n[8]=f*m,n[1]=f*_,n[5]=f*x,n[9]=-d,n[2]=S*d-E,n[6]=T+y*d,n[10]=f*p}else if(e.order==="ZXY"){const y=p*x,S=p*_,E=m*x,T=m*_;n[0]=y-T*d,n[4]=-f*_,n[8]=E+S*d,n[1]=S+E*d,n[5]=f*x,n[9]=T-y*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const y=f*x,S=f*_,E=d*x,T=d*_;n[0]=p*x,n[4]=E*m-S,n[8]=y*m+T,n[1]=p*_,n[5]=T*m+y,n[9]=S*m-E,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const y=f*p,S=f*m,E=d*p,T=d*m;n[0]=p*x,n[4]=T-y*_,n[8]=E*_+S,n[1]=_,n[5]=f*x,n[9]=-d*x,n[2]=-m*x,n[6]=S*_+E,n[10]=y-T*_}else if(e.order==="XZY"){const y=f*p,S=f*m,E=d*p,T=d*m;n[0]=p*x,n[4]=-_,n[8]=m*x,n[1]=y*_+T,n[5]=f*x,n[9]=S*_-E,n[2]=E*_-S,n[6]=d*x,n[10]=T*_+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(e_,e,t_)}lookAt(e,n,r){const o=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),ur.crossVectors(r,Fn),ur.lengthSq()===0&&(Math.abs(r.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),ur.crossVectors(r,Fn)),ur.normalize(),Qo.crossVectors(Fn,ur),o[0]=ur.x,o[4]=Qo.x,o[8]=Fn.x,o[1]=ur.y,o[5]=Qo.y,o[9]=Fn.y,o[2]=ur.z,o[6]=Qo.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],x=r[1],_=r[5],y=r[9],S=r[13],E=r[2],T=r[6],g=r[10],v=r[14],b=r[3],P=r[7],N=r[11],q=r[15],F=o[0],U=o[4],$=o[8],L=o[12],R=o[1],H=o[5],le=o[9],Q=o[13],fe=o[2],de=o[6],ae=o[10],ce=o[14],B=o[3],he=o[7],oe=o[11],O=o[15];return c[0]=f*F+d*R+p*fe+m*B,c[4]=f*U+d*H+p*de+m*he,c[8]=f*$+d*le+p*ae+m*oe,c[12]=f*L+d*Q+p*ce+m*O,c[1]=x*F+_*R+y*fe+S*B,c[5]=x*U+_*H+y*de+S*he,c[9]=x*$+_*le+y*ae+S*oe,c[13]=x*L+_*Q+y*ce+S*O,c[2]=E*F+T*R+g*fe+v*B,c[6]=E*U+T*H+g*de+v*he,c[10]=E*$+T*le+g*ae+v*oe,c[14]=E*L+T*Q+g*ce+v*O,c[3]=b*F+P*R+N*fe+q*B,c[7]=b*U+P*H+N*de+q*he,c[11]=b*$+P*le+N*ae+q*oe,c[15]=b*L+P*Q+N*ce+q*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],x=e[2],_=e[6],y=e[10],S=e[14],E=e[3],T=e[7],g=e[11],v=e[15];return E*(+c*p*_-o*m*_-c*d*y+r*m*y+o*d*S-r*p*S)+T*(+n*p*S-n*m*y+c*f*y-o*f*S+o*m*x-c*p*x)+g*(+n*m*_-n*d*S-c*f*_+r*f*S+c*d*x-r*m*x)+v*(-o*d*x-n*p*_+n*d*y+o*f*_-r*f*y+r*p*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],x=e[8],_=e[9],y=e[10],S=e[11],E=e[12],T=e[13],g=e[14],v=e[15],b=_*g*m-T*y*m+T*p*S-d*g*S-_*p*v+d*y*v,P=E*y*m-x*g*m-E*p*S+f*g*S+x*p*v-f*y*v,N=x*T*m-E*_*m+E*d*S-f*T*S-x*d*v+f*_*v,q=E*_*p-x*T*p-E*d*y+f*T*y+x*d*g-f*_*g,F=n*b+r*P+o*N+c*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=b*U,e[1]=(T*y*c-_*g*c-T*o*S+r*g*S+_*o*v-r*y*v)*U,e[2]=(d*g*c-T*p*c+T*o*m-r*g*m-d*o*v+r*p*v)*U,e[3]=(_*p*c-d*y*c-_*o*m+r*y*m+d*o*S-r*p*S)*U,e[4]=P*U,e[5]=(x*g*c-E*y*c+E*o*S-n*g*S-x*o*v+n*y*v)*U,e[6]=(E*p*c-f*g*c-E*o*m+n*g*m+f*o*v-n*p*v)*U,e[7]=(f*y*c-x*p*c+x*o*m-n*y*m-f*o*S+n*p*S)*U,e[8]=N*U,e[9]=(E*_*c-x*T*c-E*r*S+n*T*S+x*r*v-n*_*v)*U,e[10]=(f*T*c-E*d*c+E*r*m-n*T*m-f*r*v+n*d*v)*U,e[11]=(x*d*c-f*_*c-x*r*m+n*_*m+f*r*S-n*d*S)*U,e[12]=q*U,e[13]=(x*T*o-E*_*o+E*r*y-n*T*y-x*r*g+n*_*g)*U,e[14]=(E*d*o-f*T*o-E*r*p+n*T*p+f*r*g-n*d*g)*U,e[15]=(f*_*o-x*d*o+x*r*p-n*_*p-f*r*y+n*d*y)*U,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,f=e.x,d=e.y,p=e.z,m=c*f,x=c*d;return this.set(m*f+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*f,0,m*p-o*d,x*p+o*f,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,f){return this.set(1,r,c,0,e,1,f,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,f=n._y,d=n._z,p=n._w,m=c+c,x=f+f,_=d+d,y=c*m,S=c*x,E=c*_,T=f*x,g=f*_,v=d*_,b=p*m,P=p*x,N=p*_,q=r.x,F=r.y,U=r.z;return o[0]=(1-(T+v))*q,o[1]=(S+N)*q,o[2]=(E-P)*q,o[3]=0,o[4]=(S-N)*F,o[5]=(1-(y+v))*F,o[6]=(g+b)*F,o[7]=0,o[8]=(E+P)*U,o[9]=(g-b)*U,o[10]=(1-(y+T))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;let c=Ms.set(o[0],o[1],o[2]).length();const f=Ms.set(o[4],o[5],o[6]).length(),d=Ms.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],ti.copy(this);const m=1/c,x=1/f,_=1/d;return ti.elements[0]*=m,ti.elements[1]*=m,ti.elements[2]*=m,ti.elements[4]*=x,ti.elements[5]*=x,ti.elements[6]*=x,ti.elements[8]*=_,ti.elements[9]*=_,ti.elements[10]*=_,n.setFromRotationMatrix(ti),r.x=c,r.y=f,r.z=d,this}makePerspective(e,n,r,o,c,f,d=Li){const p=this.elements,m=2*c/(n-e),x=2*c/(r-o),_=(n+e)/(n-e),y=(r+o)/(r-o);let S,E;if(d===Li)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Cl)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,o,c,f,d=Li){const p=this.elements,m=1/(n-e),x=1/(r-o),_=1/(f-c),y=(n+e)*m,S=(r+o)*x;let E,T;if(d===Li)E=(f+c)*_,T=-2*_;else if(d===Cl)E=c*_,T=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*x,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Ms=new re,ti=new jt,e_=new re(0,0,0),t_=new re(1,1,1),ur=new re,Qo=new re,Fn=new re,Tp=new jt,Ap=new Ia;class Ui{constructor(e=0,n=0,r=0,o=Ui.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],f=o[4],d=o[8],p=o[1],m=o[5],x=o[9],_=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(wn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(wn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-wn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(wn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-wn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Ap.setFromEuler(this),this.setFromQuaternion(Ap,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ui.DEFAULT_ORDER="XYZ";class jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let n_=0;const Cp=new re,Es=new Ia,Ai=new jt,Jo=new re,Ra=new re,i_=new re,r_=new Ia,Rp=new re(1,0,0),bp=new re(0,1,0),Pp=new re(0,0,1),Np={type:"added"},s_={type:"removed"},ws={type:"childadded",child:null},bu={type:"childremoved",child:null};class Cn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new re,n=new Ui,r=new Ia,o=new re(1,1,1);function c(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new jt},normalMatrix:{value:new ct}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,n){return Es.setFromAxisAngle(e,n),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Rp,e)}rotateY(e){return this.rotateOnAxis(bp,e)}rotateZ(e){return this.rotateOnAxis(Pp,e)}translateOnAxis(e,n){return Cp.copy(e).applyQuaternion(this.quaternion),this.position.add(Cp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Rp,e)}translateY(e){return this.translateOnAxis(bp,e)}translateZ(e){return this.translateOnAxis(Pp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ai.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Jo.copy(e):Jo.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ai.lookAt(Ra,Jo,this.up):Ai.lookAt(Jo,Ra,this.up),this.quaternion.setFromRotationMatrix(Ai),o&&(Ai.extractRotation(o.matrixWorld),Es.setFromRotationMatrix(Ai),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Np),ws.child=e,this.dispatchEvent(ws),ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(s_),bu.child=e,this.dispatchEvent(bu),bu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Np),ws.child=e,this.dispatchEvent(ws),ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,i_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,r_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(c(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),x=f(e.images),_=f(e.shapes),y=f(e.skeletons),S=f(e.animations),E=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function f(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Cn.DEFAULT_UP=new re(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new re,Ci=new re,Pu=new re,Ri=new re,Ts=new re,As=new re,Lp=new re,Nu=new re,Lu=new re,Du=new re;class fi{constructor(e=new re,n=new re,r=new re){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),ni.subVectors(e,n),o.cross(ni);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){ni.subVectors(o,n),Ci.subVectors(r,n),Pu.subVectors(e,n);const f=ni.dot(ni),d=ni.dot(Ci),p=ni.dot(Pu),m=Ci.dot(Ci),x=Ci.dot(Pu),_=f*m-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,S=(m*p-d*x)*y,E=(f*x-d*p)*y;return c.set(1-S-E,E,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,n,r,o,c,f,d,p){return this.getBarycoord(e,n,r,o,Ri)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ri.x),p.addScaledVector(f,Ri.y),p.addScaledVector(d,Ri.z),p)}static isFrontFacing(e,n,r,o){return ni.subVectors(r,n),Ci.subVectors(e,n),ni.cross(Ci).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),ni.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return fi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return fi.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let f,d;Ts.subVectors(o,r),As.subVectors(c,r),Nu.subVectors(e,r);const p=Ts.dot(Nu),m=As.dot(Nu);if(p<=0&&m<=0)return n.copy(r);Lu.subVectors(e,o);const x=Ts.dot(Lu),_=As.dot(Lu);if(x>=0&&_<=x)return n.copy(o);const y=p*_-x*m;if(y<=0&&p>=0&&x<=0)return f=p/(p-x),n.copy(r).addScaledVector(Ts,f);Du.subVectors(e,c);const S=Ts.dot(Du),E=As.dot(Du);if(E>=0&&S<=E)return n.copy(c);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),n.copy(r).addScaledVector(As,d);const g=x*E-S*_;if(g<=0&&_-x>=0&&S-E>=0)return Lp.subVectors(c,o),d=(_-x)/(_-x+(S-E)),n.copy(o).addScaledVector(Lp,d);const v=1/(g+T+y);return f=T*v,d=y*v,n.copy(r).addScaledVector(Ts,f).addScaledVector(As,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},el={h:0,s:0,l:0};function Iu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Tt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,o=wt.workingColorSpace){return this.r=e,this.g=n,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,n,r,o=wt.workingColorSpace){if(e=Wv(e,1),n=wn(n,0,1),r=wn(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,f=2*r-c;this.r=Iu(f,c,e+1/3),this.g=Iu(f,c,e),this.b=Iu(f,c,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,n=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=o[1],d=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ui){const r=Xm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return wt.fromWorkingColorSpace(fn.copy(this),e),Math.round(wn(fn.r*255,0,255))*65536+Math.round(wn(fn.g*255,0,255))*256+Math.round(wn(fn.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=wt.workingColorSpace){wt.fromWorkingColorSpace(fn.copy(this),n);const r=fn.r,o=fn.g,c=fn.b,f=Math.max(r,o,c),d=Math.min(r,o,c);let p,m;const x=(d+f)/2;if(d===f)p=0,m=0;else{const _=f-d;switch(m=x<=.5?_/(f+d):_/(2-f-d),f){case r:p=(o-c)/_+(o<c?6:0);break;case o:p=(c-r)/_+2;break;case c:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=wt.workingColorSpace){return wt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ui){wt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,r=fn.g,o=fn.b;return e!==ui?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(el);const r=xu(dr.h,el.h,n),o=xu(dr.s,el.s,n),c=xu(dr.l,el.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Tt;Tt.NAMES=Xm;let a_=0;class Fa extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=Us,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ju,this.blendDst=Xu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=El,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_p,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(r.blending=this.blending),this.side!==gr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==ju&&(r.blendSrc=this.blendSrc),this.blendDst!==Xu&&(r.blendDst=this.blendDst),this.blendEquation!==Hr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==El&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_p&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(n){const c=o(e.textures),f=o(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Ym extends Fa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ui,this.combine=Cm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new re,tl=new St;class si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=xp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Hm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ta(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),o=En(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),o=En(o,this.array),c=En(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xp&&(e.usage=this.usage),e}}class qm extends si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class $m extends si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class jr extends si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let o_=0;const Wn=new jt,Uu=new Cn,Cs=new re,On=new Ua,ba=new Ua,nn=new re;class Fi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bm(e)?$m:qm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ct().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,r){return Wn.makeTranslation(e,n,r),this.applyMatrix4(Wn),this}scale(e,n,r){return Wn.makeScale(e,n,r),this.applyMatrix4(Wn),this}lookAt(e){return Uu.lookAt(e),Uu.updateMatrix(),this.applyMatrix4(Uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const n=[];for(let r=0,o=e.length;r<o;r++){const c=e[r];n.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new jr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ua);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];On.setFromBufferAttribute(c),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(On.setFromBufferAttribute(e),n)for(let c=0,f=n.length;c<f;c++){const d=n[c];ba.setFromBufferAttribute(d),this.morphTargetsRelative?(nn.addVectors(On.min,ba.min),On.expandByPoint(nn),nn.addVectors(On.max,ba.max),On.expandByPoint(nn)):(On.expandByPoint(ba.min),On.expandByPoint(ba.max))}On.getCenter(r);let o=0;for(let c=0,f=e.count;c<f;c++)nn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(nn));if(n)for(let c=0,f=n.length;c<f;c++){const d=n[c],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)nn.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),nn.add(Cs)),o=Math.max(o,r.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new si(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let $=0;$<r.count;$++)d[$]=new re,p[$]=new re;const m=new re,x=new re,_=new re,y=new St,S=new St,E=new St,T=new re,g=new re;function v($,L,R){m.fromBufferAttribute(r,$),x.fromBufferAttribute(r,L),_.fromBufferAttribute(r,R),y.fromBufferAttribute(c,$),S.fromBufferAttribute(c,L),E.fromBufferAttribute(c,R),x.sub(m),_.sub(m),S.sub(y),E.sub(y);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(T.copy(x).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(H),g.copy(_).multiplyScalar(S.x).addScaledVector(x,-E.x).multiplyScalar(H),d[$].add(T),d[L].add(T),d[R].add(T),p[$].add(g),p[L].add(g),p[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let $=0,L=b.length;$<L;++$){const R=b[$],H=R.start,le=R.count;for(let Q=H,fe=H+le;Q<fe;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const P=new re,N=new re,q=new re,F=new re;function U($){q.fromBufferAttribute(o,$),F.copy(q);const L=d[$];P.copy(L),P.sub(q.multiplyScalar(q.dot(L))).normalize(),N.crossVectors(F,L);const H=N.dot(p[$])<0?-1:1;f.setXYZW($,P.x,P.y,P.z,H)}for(let $=0,L=b.length;$<L;++$){const R=b[$],H=R.start,le=R.count;for(let Q=H,fe=H+le;Q<fe;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new re,c=new re,f=new re,d=new re,p=new re,m=new re,x=new re,_=new re;if(e)for(let y=0,S=e.count;y<S;y+=3){const E=e.getX(y+0),T=e.getX(y+1),g=e.getX(y+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,T),f.fromBufferAttribute(n,g),x.subVectors(f,c),_.subVectors(o,c),x.cross(_),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,g),d.add(x),p.add(x),m.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(g,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),c.fromBufferAttribute(n,y+1),f.fromBufferAttribute(n,y+2),x.subVectors(f,c),_.subVectors(o,c),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)nn.fromBufferAttribute(e,n),nn.normalize(),e.setXYZ(n,nn.x,nn.y,nn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,_=d.normalized,y=new m.constructor(p.length*x);let S=0,E=0;for(let T=0,g=p.length;T<g;T++){d.isInterleavedBufferAttribute?S=p[T]*d.data.stride+d.offset:S=p[T]*x;for(let v=0;v<x;v++)y[E++]=m[S++]}return new si(y,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let x=0,_=m.length;x<_;x++){const y=m[x],S=e(y,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let _=0,y=m.length;_<y;_++){const S=m[_];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const c=e.morphAttributes;for(const m in c){const x=[],_=c[m];for(let y=0,S=_.length;y<S;y++)x.push(_[y].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,x=f.length;m<x;m++){const _=f[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dp=new jt,Ur=new Wm,nl=new Nl,Ip=new re,Rs=new re,bs=new re,Ps=new re,Fu=new re,il=new re,rl=new St,sl=new St,al=new St,Up=new re,Fp=new re,Op=new re,ol=new re,ll=new re;class Di extends Cn{constructor(e=new Fi,n=new Ym){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){il.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const x=d[p],_=c[p];x!==0&&(Fu.fromBufferAttribute(_,e),f?il.addScaledVector(Fu,x):il.addScaledVector(Fu.sub(n),x))}n.add(il)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nl.copy(r.boundingSphere),nl.applyMatrix4(c),Ur.copy(e.ray).recast(e.near),!(nl.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(nl,Ip)===null||Ur.origin.distanceToSquared(Ip)>(e.far-e.near)**2))&&(Dp.copy(c).invert(),Ur.copy(e.ray).applyMatrix4(Dp),!(r.boundingBox!==null&&Ur.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,r){let o;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const g=y[E],v=f[g.materialIndex],b=Math.max(g.start,S.start),P=Math.min(d.count,Math.min(g.start+g.count,S.start+S.count));for(let N=b,q=P;N<q;N+=3){const F=d.getX(N),U=d.getX(N+1),$=d.getX(N+2);o=cl(this,v,e,r,m,x,_,F,U,$),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(d.count,S.start+S.count);for(let g=E,v=T;g<v;g+=3){const b=d.getX(g),P=d.getX(g+1),N=d.getX(g+2);o=cl(this,f,e,r,m,x,_,b,P,N),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const g=y[E],v=f[g.materialIndex],b=Math.max(g.start,S.start),P=Math.min(p.count,Math.min(g.start+g.count,S.start+S.count));for(let N=b,q=P;N<q;N+=3){const F=N,U=N+1,$=N+2;o=cl(this,v,e,r,m,x,_,F,U,$),o&&(o.faceIndex=Math.floor(N/3),o.face.materialIndex=g.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let g=E,v=T;g<v;g+=3){const b=g,P=g+1,N=g+2;o=cl(this,f,e,r,m,x,_,b,P,N),o&&(o.faceIndex=Math.floor(g/3),n.push(o))}}}}function l_(s,e,n,r,o,c,f,d){let p;if(e.side===Tn?p=r.intersectTriangle(f,c,o,!0,d):p=r.intersectTriangle(o,c,f,e.side===gr,d),p===null)return null;ll.copy(d),ll.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(ll);return m<n.near||m>n.far?null:{distance:m,point:ll.clone(),object:s}}function cl(s,e,n,r,o,c,f,d,p,m){s.getVertexPosition(d,Rs),s.getVertexPosition(p,bs),s.getVertexPosition(m,Ps);const x=l_(s,e,n,r,Rs,bs,Ps,ol);if(x){o&&(rl.fromBufferAttribute(o,d),sl.fromBufferAttribute(o,p),al.fromBufferAttribute(o,m),x.uv=fi.getInterpolation(ol,Rs,bs,Ps,rl,sl,al,new St)),c&&(rl.fromBufferAttribute(c,d),sl.fromBufferAttribute(c,p),al.fromBufferAttribute(c,m),x.uv1=fi.getInterpolation(ol,Rs,bs,Ps,rl,sl,al,new St)),f&&(Up.fromBufferAttribute(f,d),Fp.fromBufferAttribute(f,p),Op.fromBufferAttribute(f,m),x.normal=fi.getInterpolation(ol,Rs,bs,Ps,Up,Fp,Op,new re),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const _={a:d,b:p,c:m,normal:new re,materialIndex:0};fi.getNormal(Rs,bs,Ps,_.normal),x.face=_}return x}class Oa extends Fi{constructor(e=1,n=1,r=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:f};const d=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],x=[],_=[];let y=0,S=0;E("z","y","x",-1,-1,r,n,e,f,c,0),E("z","y","x",1,-1,r,n,-e,f,c,1),E("x","z","y",1,1,e,r,n,o,f,2),E("x","z","y",1,-1,e,r,-n,o,f,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new jr(m,3)),this.setAttribute("normal",new jr(x,3)),this.setAttribute("uv",new jr(_,2));function E(T,g,v,b,P,N,q,F,U,$,L){const R=N/U,H=q/$,le=N/2,Q=q/2,fe=F/2,de=U+1,ae=$+1;let ce=0,B=0;const he=new re;for(let oe=0;oe<ae;oe++){const O=oe*H-Q;for(let ie=0;ie<de;ie++){const Le=ie*R-le;he[T]=Le*b,he[g]=O*P,he[v]=fe,m.push(he.x,he.y,he.z),he[T]=0,he[g]=0,he[v]=F>0?1:-1,x.push(he.x,he.y,he.z),_.push(ie/U),_.push(1-oe/$),ce+=1}}for(let oe=0;oe<$;oe++)for(let O=0;O<U;O++){const ie=y+O+de*oe,Le=y+O+de*(oe+1),Z=y+(O+1)+de*(oe+1),W=y+(O+1)+de*oe;p.push(ie,Le,W),p.push(Le,Z,W),B+=6}d.addGroup(S,B,L),S+=B,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function mn(s){const e={};for(let n=0;n<s.length;n++){const r=Vs(s[n]);for(const o in r)e[o]=r[o]}return e}function c_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Km(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const u_={clone:Vs,merge:mn};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vr extends Fa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=c_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Zm extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Li}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new re,kp=new St,zp=new St;class jn extends Zm{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,kp,zp),n.subVectors(zp,kp)}setViewOffset(e,n,r,o,c,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_u*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*o/p,n-=f.offsetY*r/m,o*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Ls=1;class h_ extends Cn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new jn(Ns,Ls,e,n);o.layers=this.layers,this.add(o);const c=new jn(Ns,Ls,e,n);c.layers=this.layers,this.add(c);const f=new jn(Ns,Ls,e,n);f.layers=this.layers,this.add(f);const d=new jn(Ns,Ls,e,n);d.layers=this.layers,this.add(d);const p=new jn(Ns,Ls,e,n);p.layers=this.layers,this.add(p);const m=new jn(Ns,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,f,d,p]=n;for(const m of n)this.remove(m);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Cl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,c),e.setRenderTarget(r,1,o),e.render(n,f),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(_,y,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Qm extends An{constructor(e,n,r,o,c,f,d,p,m,x){e=e!==void 0?e:[],n=n!==void 0?n:ks,super(e,n,r,o,c,f,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class p_ extends Yr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Qm(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Oa(5,5,5),c=new vr({name:"CubemapFromEquirect",uniforms:Vs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tn,blending:pr});c.uniforms.tEquirect.value=n;const f=new Di(o,c),d=n.minFilter;return n.minFilter===Wr&&(n.minFilter=ii),new h_(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,o){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,o);e.setRenderTarget(c)}}const Ou=new re,m_=new re,g_=new ct;class zr{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=Ou.subVectors(r,n).cross(m_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Ou),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||g_.getNormalMatrix(e),o=this.coplanarPoint(Ou).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fr=new Nl,ul=new re;class Jm{constructor(e=new zr,n=new zr,r=new zr,o=new zr,c=new zr,f=new zr){this.planes=[e,n,r,o,c,f]}set(e,n,r,o,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(c),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Li){const r=this.planes,o=e.elements,c=o[0],f=o[1],d=o[2],p=o[3],m=o[4],x=o[5],_=o[6],y=o[7],S=o[8],E=o[9],T=o[10],g=o[11],v=o[12],b=o[13],P=o[14],N=o[15];if(r[0].setComponents(p-c,y-m,g-S,N-v).normalize(),r[1].setComponents(p+c,y+m,g+S,N+v).normalize(),r[2].setComponents(p+f,y+x,g+E,N+b).normalize(),r[3].setComponents(p-f,y-x,g-E,N-b).normalize(),r[4].setComponents(p-d,y-_,g-T,N-P).normalize(),n===Li)r[5].setComponents(p+d,y+_,g+T,N+P).normalize();else if(n===Cl)r[5].setComponents(d,_,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fr)}intersectsSprite(e){return Fr.center.set(0,0,0),Fr.radius=.7071067811865476,Fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(ul.x=o.normal.x>0?e.max.x:e.min.x,ul.y=o.normal.y>0?e.max.y:e.min.y,ul.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eg(){let s=null,e=!1,n=null,r=null;function o(c,f){n(c,f),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function v_(s){const e=new WeakMap;function n(d,p){const m=d.array,x=d.usage,_=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const x=p.array,_=p._updateRange,y=p.updateRanges;if(s.bindBuffer(m,d),_.count===-1&&y.length===0&&s.bufferSubData(m,0,x),y.length!==0){for(let S=0,E=y.length;S<E;S++){const T=y[S];s.bufferSubData(m,T.start*x.BYTES_PER_ELEMENT,x,T.start,T.count)}p.clearUpdateRanges()}_.count!==-1&&(s.bufferSubData(m,_.offset*x.BYTES_PER_ELEMENT,x,_.offset,_.count),_.count=-1),p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:c,update:f}}class Ll extends Fi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,f=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,_=e/d,y=n/p,S=[],E=[],T=[],g=[];for(let v=0;v<x;v++){const b=v*y-f;for(let P=0;P<m;P++){const N=P*_-c;E.push(N,-b,0),T.push(0,0,1),g.push(P/d),g.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<d;b++){const P=b+m*v,N=b+m*(v+1),q=b+1+m*(v+1),F=b+1+m*v;S.push(P,N,F),S.push(N,q,F)}this.setIndex(S),this.setAttribute("position",new jr(E,3)),this.setAttribute("normal",new jr(T,3)),this.setAttribute("uv",new jr(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}var __=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
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
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,E_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
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
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A_=`#ifdef USE_BATCHING
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
#endif`,C_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,R_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,N_=`#ifdef USE_IRIDESCENCE
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
#endif`,L_=`#ifdef USE_BUMPMAP
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
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,H_=`#define PI 3.141592653589793
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
} // validated`,V_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,G_=`vec3 transformedNormal = objectNormal;
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
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,j_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,q_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`
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
}`,K_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Q_=`#ifdef USE_ENVMAP
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
#endif`,J_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
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
#endif`,gx=`struct PhysicalMaterial {
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
}`,vx=`
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
#endif`,_x=`#if defined( RE_IndirectDiffuse )
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
#endif`,xx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Rx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ix=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bx=`#ifdef USE_NORMALMAP
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
#endif`,Hx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
}`,_y=`uniform sampler2D t2D;
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
}`,xy=`varying vec3 vWorldDirection;
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
}`,wy=`#if DEPTH_PACKING == 3200
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
}`,Ty=`#define DISTANCE
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
}`,Py=`uniform vec3 diffuse;
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
}`,Ny=`#include <common>
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
}`,Wy=`#define TOON
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
}`,jy=`uniform float size;
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
}`,lt={alphahash_fragment:__,alphahash_pars_fragment:x_,alphamap_fragment:y_,alphamap_pars_fragment:S_,alphatest_fragment:M_,alphatest_pars_fragment:E_,aomap_fragment:w_,aomap_pars_fragment:T_,batching_pars_vertex:A_,batching_vertex:C_,begin_vertex:R_,beginnormal_vertex:b_,bsdfs:P_,iridescence_fragment:N_,bumpmap_pars_fragment:L_,clipping_planes_fragment:D_,clipping_planes_pars_fragment:I_,clipping_planes_pars_vertex:U_,clipping_planes_vertex:F_,color_fragment:O_,color_pars_fragment:k_,color_pars_vertex:z_,color_vertex:B_,common:H_,cube_uv_reflection_fragment:V_,defaultnormal_vertex:G_,displacementmap_pars_vertex:W_,displacementmap_vertex:j_,emissivemap_fragment:X_,emissivemap_pars_fragment:Y_,colorspace_fragment:q_,colorspace_pars_fragment:$_,envmap_fragment:K_,envmap_common_pars_fragment:Z_,envmap_pars_fragment:Q_,envmap_pars_vertex:J_,envmap_physical_pars_fragment:ux,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:rx,gradientmap_pars_fragment:sx,lightmap_pars_fragment:ax,lights_lambert_fragment:ox,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:dx,lights_toon_pars_fragment:fx,lights_phong_fragment:hx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:vx,lights_fragment_maps:_x,lights_fragment_end:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:Mx,logdepthbuf_vertex:Ex,map_fragment:wx,map_pars_fragment:Tx,map_particle_fragment:Ax,map_particle_pars_fragment:Cx,metalnessmap_fragment:Rx,metalnessmap_pars_fragment:bx,morphinstance_vertex:Px,morphcolor_vertex:Nx,morphnormal_vertex:Lx,morphtarget_pars_vertex:Dx,morphtarget_vertex:Ix,normal_fragment_begin:Ux,normal_fragment_maps:Fx,normal_pars_fragment:Ox,normal_pars_vertex:kx,normal_vertex:zx,normalmap_pars_fragment:Bx,clearcoat_normal_fragment_begin:Hx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Wx,opaque_fragment:jx,packing:Xx,premultiplied_alpha_fragment:Yx,project_vertex:qx,dithering_fragment:$x,dithering_pars_fragment:Kx,roughnessmap_fragment:Zx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:ey,shadowmap_vertex:ty,shadowmask_pars_fragment:ny,skinbase_vertex:iy,skinning_pars_vertex:ry,skinning_vertex:sy,skinnormal_vertex:ay,specularmap_fragment:oy,specularmap_pars_fragment:ly,tonemapping_fragment:cy,tonemapping_pars_fragment:uy,transmission_fragment:dy,transmission_pars_fragment:fy,uv_pars_fragment:hy,uv_pars_vertex:py,uv_vertex:my,worldpos_vertex:gy,background_vert:vy,background_frag:_y,backgroundCube_vert:xy,backgroundCube_frag:yy,cube_vert:Sy,cube_frag:My,depth_vert:Ey,depth_frag:wy,distanceRGBA_vert:Ty,distanceRGBA_frag:Ay,equirect_vert:Cy,equirect_frag:Ry,linedashed_vert:by,linedashed_frag:Py,meshbasic_vert:Ny,meshbasic_frag:Ly,meshlambert_vert:Dy,meshlambert_frag:Iy,meshmatcap_vert:Uy,meshmatcap_frag:Fy,meshnormal_vert:Oy,meshnormal_frag:ky,meshphong_vert:zy,meshphong_frag:By,meshphysical_vert:Hy,meshphysical_frag:Vy,meshtoon_vert:Gy,meshtoon_frag:Wy,points_vert:jy,points_frag:Xy,shadow_vert:Yy,shadow_frag:qy,sprite_vert:$y,sprite_frag:Ky},Ne={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},di={basic:{uniforms:mn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:mn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:mn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:mn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:mn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Tt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:mn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:mn([Ne.points,Ne.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:mn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:mn([Ne.common,Ne.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:mn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:mn([Ne.sprite,Ne.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:mn([Ne.common,Ne.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:mn([Ne.lights,Ne.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};di.physical={uniforms:mn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const dl={r:0,b:0,g:0},Or=new Ui,Zy=new jt;function Qy(s,e,n,r,o,c,f){const d=new Tt(0);let p=c===!0?0:1,m,x,_=null,y=0,S=null;function E(b){let P=b.isScene===!0?b.background:null;return P&&P.isTexture&&(P=(b.backgroundBlurriness>0?n:e).get(P)),P}function T(b){let P=!1;const N=E(b);N===null?v(d,p):N&&N.isColor&&(v(N,1),P=!0);const q=s.xr.getEnvironmentBlendMode();q==="additive"?r.buffers.color.setClear(0,0,0,1,f):q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(b,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===bl)?(x===void 0&&(x=new Di(new Oa(1,1,1),new vr({name:"BackgroundCubeMaterial",uniforms:Vs(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(q,F,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Or.copy(P.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),x.material.uniforms.envMap.value=N,x.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(Zy.makeRotationFromEuler(Or)),x.material.toneMapped=wt.getTransfer(N.colorSpace)!==It,(_!==N||y!==N.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,_=N,y=N.version,S=s.toneMapping),x.layers.enableAll(),b.unshift(x,x.geometry,x.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new Di(new Ll(2,2),new vr({name:"BackgroundMaterial",uniforms:Vs(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=wt.getTransfer(N.colorSpace)!==It,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(_!==N||y!==N.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=N,y=N.version,S=s.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null))}function v(b,P){b.getRGB(dl,Km(s)),r.buffers.color.setClear(dl.r,dl.g,dl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(b,P=1){d.set(b),p=P,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(b){p=b,v(d,p)},render:T,addToRenderList:g}}function Jy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let c=o,f=!1;function d(R,H,le,Q,fe){let de=!1;const ae=_(Q,le,H);c!==ae&&(c=ae,m(c.object)),de=S(R,Q,le,fe),de&&E(R,Q,le,fe),fe!==null&&e.update(fe,s.ELEMENT_ARRAY_BUFFER),(de||f)&&(f=!1,N(R,H,le,Q),fe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function _(R,H,le){const Q=le.wireframe===!0;let fe=r[R.id];fe===void 0&&(fe={},r[R.id]=fe);let de=fe[H.id];de===void 0&&(de={},fe[H.id]=de);let ae=de[Q];return ae===void 0&&(ae=y(p()),de[Q]=ae),ae}function y(R){const H=[],le=[],Q=[];for(let fe=0;fe<n;fe++)H[fe]=0,le[fe]=0,Q[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:le,attributeDivisors:Q,object:R,attributes:{},index:null}}function S(R,H,le,Q){const fe=c.attributes,de=H.attributes;let ae=0;const ce=le.getAttributes();for(const B in ce)if(ce[B].location>=0){const oe=fe[B];let O=de[B];if(O===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(O=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(O=R.instanceColor)),oe===void 0||oe.attribute!==O||O&&oe.data!==O.data)return!0;ae++}return c.attributesNum!==ae||c.index!==Q}function E(R,H,le,Q){const fe={},de=H.attributes;let ae=0;const ce=le.getAttributes();for(const B in ce)if(ce[B].location>=0){let oe=de[B];oe===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor));const O={};O.attribute=oe,oe&&oe.data&&(O.data=oe.data),fe[B]=O,ae++}c.attributes=fe,c.attributesNum=ae,c.index=Q}function T(){const R=c.newAttributes;for(let H=0,le=R.length;H<le;H++)R[H]=0}function g(R){v(R,0)}function v(R,H){const le=c.newAttributes,Q=c.enabledAttributes,fe=c.attributeDivisors;le[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),fe[R]!==H&&(s.vertexAttribDivisor(R,H),fe[R]=H)}function b(){const R=c.newAttributes,H=c.enabledAttributes;for(let le=0,Q=H.length;le<Q;le++)H[le]!==R[le]&&(s.disableVertexAttribArray(le),H[le]=0)}function P(R,H,le,Q,fe,de,ae){ae===!0?s.vertexAttribIPointer(R,H,le,fe,de):s.vertexAttribPointer(R,H,le,Q,fe,de)}function N(R,H,le,Q){T();const fe=Q.attributes,de=le.getAttributes(),ae=H.defaultAttributeValues;for(const ce in de){const B=de[ce];if(B.location>=0){let he=fe[ce];if(he===void 0&&(ce==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),ce==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const oe=he.normalized,O=he.itemSize,ie=e.get(he);if(ie===void 0)continue;const Le=ie.buffer,Z=ie.type,W=ie.bytesPerElement,se=Z===s.INT||Z===s.UNSIGNED_INT||he.gpuType===Rd;if(he.isInterleavedBufferAttribute){const ue=he.data,Ce=ue.stride,be=he.offset;if(ue.isInstancedInterleavedBuffer){for(let We=0;We<B.locationSize;We++)v(B.location+We,ue.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let We=0;We<B.locationSize;We++)g(B.location+We);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let We=0;We<B.locationSize;We++)P(B.location+We,O/B.locationSize,Z,oe,Ce*W,(be+O/B.locationSize*We)*W,se)}else{if(he.isInstancedBufferAttribute){for(let ue=0;ue<B.locationSize;ue++)v(B.location+ue,he.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ue=0;ue<B.locationSize;ue++)g(B.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let ue=0;ue<B.locationSize;ue++)P(B.location+ue,O/B.locationSize,Z,oe,O*W,O/B.locationSize*ue*W,se)}}else if(ae!==void 0){const oe=ae[ce];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(B.location,oe);break;case 3:s.vertexAttrib3fv(B.location,oe);break;case 4:s.vertexAttrib4fv(B.location,oe);break;default:s.vertexAttrib1fv(B.location,oe)}}}}b()}function q(){$();for(const R in r){const H=r[R];for(const le in H){const Q=H[le];for(const fe in Q)x(Q[fe].object),delete Q[fe];delete H[le]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const le in H){const Q=H[le];for(const fe in Q)x(Q[fe].object),delete Q[fe];delete H[le]}delete r[R.id]}function U(R){for(const H in r){const le=r[H];if(le[R.id]===void 0)continue;const Q=le[R.id];for(const fe in Q)x(Q[fe].object),delete Q[fe];delete le[R.id]}}function $(){L(),f=!0,c!==o&&(c=o,m(c.object))}function L(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:$,resetDefaultState:L,dispose:q,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:g,disableUnusedAttributes:b}}function eS(s,e,n){let r;function o(m){r=m}function c(m,x){s.drawArrays(r,m,x),n.update(x,r,1)}function f(m,x,_){_!==0&&(s.drawArraysInstanced(r,m,x,_),n.update(x,r,_))}function d(m,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,_);let S=0;for(let E=0;E<_;E++)S+=x[E];n.update(S,r,1)}function p(m,x,_,y){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],x[E],y[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,_);let E=0;for(let T=0;T<_;T++)E+=x[T];for(let T=0;T<y.length;T++)n.update(E,r,y[T])}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function tS(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==ri&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const U=F===La&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Ii&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ni&&!U)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const _=n.logarithmicDepthBuffer===!0,y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),T=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=S>0,q=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,maxTextures:y,maxVertexTextures:S,maxTextureSize:E,maxCubemapSize:T,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:P,vertexTextures:N,maxSamples:q}}function nS(s){const e=this;let n=null,r=0,o=!1,c=!1;const f=new zr,d=new ct,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||r!==0||o;return o=y,r=_.length,S},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){n=x(_,y,0)},this.setState=function(_,y,S){const E=_.clippingPlanes,T=_.clipIntersection,g=_.clipShadows,v=s.get(_);if(!o||E===null||E.length===0||c&&!g)c?x(null):m();else{const b=c?0:r,P=b*4;let N=v.clippingState||null;p.value=N,N=x(E,y,P,S);for(let q=0;q!==P;++q)N[q]=n[q];v.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,S,E){const T=_!==null?_.length:0;let g=null;if(T!==0){if(g=p.value,E!==!0||g===null){const v=S+T*4,b=y.matrixWorldInverse;d.getNormalMatrix(b),(g===null||g.length<v)&&(g=new Float32Array(v));for(let P=0,N=S;P!==T;++P,N+=4)f.copy(_[P]).applyMatrix4(b,d),f.normal.toArray(g,N),g[N+3]=f.constant}p.value=g,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}function iS(s){let e=new WeakMap;function n(f,d){return d===Yu?f.mapping=ks:d===qu&&(f.mapping=zs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Yu||d===qu)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new p_(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",o),n(m.texture,f.mapping)}else return null}}return f}function o(f){const d=f.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class rS extends Zm{constructor(e=-1,n=1,r=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,f=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Is=4,Bp=[.125,.215,.35,.446,.526,.582],Vr=20,ku=new rS,Hp=new Tt;let zu=null,Bu=0,Hu=0,Vu=!1;const Br=(1+Math.sqrt(5))/2,Ds=1/Br,Vp=[new re(-Br,Ds,0),new re(Br,Ds,0),new re(-Ds,0,Br),new re(Ds,0,Br),new re(0,Br,-Ds),new re(0,Br,Ds),new re(-1,1,-1),new re(1,1,-1),new re(-1,1,1),new re(1,1,1)];class Gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,o=100){zu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zu,Bu,Hu),this._renderer.xr.enabled=Vu,e.scissorTest=!1,fl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ks||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zu=this._renderer.getRenderTarget(),Bu=this._renderer.getActiveCubeFace(),Hu=this._renderer.getActiveMipmapLevel(),Vu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:La,format:ri,colorSpace:_r,depthBuffer:!1},o=Wp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sS(c)),this._blurMaterial=aS(c,e,n)}return o}_compileMaterial(e){const n=new Di(this._lodPlanes[0],e);this._renderer.compile(n,ku)}_sceneToCubeUV(e,n,r,o){const d=new jn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,y=x.toneMapping;x.getClearColor(Hp),x.toneMapping=mr,x.autoClear=!1;const S=new Ym({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),E=new Di(new Oa,S);let T=!1;const g=e.background;g?g.isColor&&(S.color.copy(g),e.background=null,T=!0):(S.color.copy(Hp),T=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(d.up.set(0,p[v],0),d.lookAt(m[v],0,0)):b===1?(d.up.set(0,0,p[v]),d.lookAt(0,m[v],0)):(d.up.set(0,p[v],0),d.lookAt(0,0,m[v]));const P=this._cubeSize;fl(o,b*P,v>2?P:0,P,P),x.setRenderTarget(o),T&&x.render(E,d),x.render(e,d)}E.geometry.dispose(),E.material.dispose(),x.toneMapping=y,x.autoClear=_,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ks||e.mapping===zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());const c=o?this._cubemapMaterial:this._equirectMaterial,f=new Di(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;fl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,ku)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Vp[(o-c-1)%Vp.length];this._blur(e,c-1,c,f,d)}n.autoClear=r}_blur(e,n,r,o,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,o,"latitudinal",c),this._halfBlur(f,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new Di(this._lodPlanes[o],m),y=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Vr-1),T=c/E,g=isFinite(c)?1+Math.floor(x*T):Vr;g>Vr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vr}`);const v=[];let b=0;for(let U=0;U<Vr;++U){const $=U/T,L=Math.exp(-$*$/2);v.push(L),U===0?b+=L:U<g&&(b+=2*L)}for(let U=0;U<v.length;U++)v[U]=v[U]/b;y.envMap.value=e.texture,y.samples.value=g,y.weights.value=v,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-r;const N=this._sizeLods[o],q=3*N*(o>P-Is?o-P+Is:0),F=4*(this._cubeSize-N);fl(n,q,F,3*N,2*N),p.setRenderTarget(n),p.render(_,ku)}}function sS(s){const e=[],n=[],r=[];let o=s;const c=s-Is+1+Bp.length;for(let f=0;f<c;f++){const d=Math.pow(2,o);n.push(d);let p=1/d;f>s-Is?p=Bp[f-s+Is-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),x=-m,_=1+m,y=[x,x,_,x,_,_,x,x,_,_,x,_],S=6,E=6,T=3,g=2,v=1,b=new Float32Array(T*E*S),P=new Float32Array(g*E*S),N=new Float32Array(v*E*S);for(let F=0;F<S;F++){const U=F%3*2/3-1,$=F>2?0:-1,L=[U,$,0,U+2/3,$,0,U+2/3,$+1,0,U,$,0,U+2/3,$+1,0,U,$+1,0];b.set(L,T*E*F),P.set(y,g*E*F);const R=[F,F,F,F,F,F];N.set(R,v*E*F)}const q=new Fi;q.setAttribute("position",new si(b,T)),q.setAttribute("uv",new si(P,g)),q.setAttribute("faceIndex",new si(N,v)),e.push(q),o>Is&&o--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Wp(s,e,n){const r=new Yr(s,e,n);return r.texture.mapping=bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fl(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function aS(s,e,n){const r=new Float32Array(Vr),o=new re(0,1,0);return new vr({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ud(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function jp(){return new vr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ud(),fragmentShader:`

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
	`}function oS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Yu||p===qu,x=p===ks||p===zs;if(m||x){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new Gp(s)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&o(S)?(n===null&&(n=new Gp(s)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function lS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Hm("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function cS(s,e,n,r){const o={},c=new WeakMap;function f(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);for(const E in y.morphAttributes){const T=y.morphAttributes[E];for(let g=0,v=T.length;g<v;g++)e.remove(T[g])}y.removeEventListener("dispose",f),delete o[y.id];const S=c.get(y);S&&(e.remove(S),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(_,y){return o[y.id]===!0||(y.addEventListener("dispose",f),o[y.id]=!0,n.memory.geometries++),y}function p(_){const y=_.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const E in S){const T=S[E];for(let g=0,v=T.length;g<v;g++)e.update(T[g],s.ARRAY_BUFFER)}}function m(_){const y=[],S=_.index,E=_.attributes.position;let T=0;if(S!==null){const b=S.array;T=S.version;for(let P=0,N=b.length;P<N;P+=3){const q=b[P+0],F=b[P+1],U=b[P+2];y.push(q,F,F,U,U,q)}}else if(E!==void 0){const b=E.array;T=E.version;for(let P=0,N=b.length/3-1;P<N;P+=3){const q=P+0,F=P+1,U=P+2;y.push(q,F,F,U,U,q)}}else return;const g=new(Bm(y)?$m:qm)(y,1);g.version=T;const v=c.get(_);v&&e.remove(v),c.set(_,g)}function x(_){const y=c.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:p,getWireframeAttribute:x}}function uS(s,e,n){let r;function o(y){r=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,S){s.drawElements(r,S,c,y*f),n.update(S,r,1)}function m(y,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,y*f,E),n.update(S,r,E))}function x(y,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,y,0,E);let g=0;for(let v=0;v<E;v++)g+=S[v];n.update(g,r,1)}function _(y,S,E,T){if(E===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<y.length;v++)m(y[v]/f,S[v],T[v]);else{g.multiDrawElementsInstancedWEBGL(r,S,0,c,y,0,T,0,E);let v=0;for(let b=0;b<E;b++)v+=S[b];for(let b=0;b<T.length;b++)n.update(v,r,T[b])}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function dS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(n.calls++,f){case s.TRIANGLES:n.triangles+=d*(c/3);break;case s.LINES:n.lines+=d*(c/2);break;case s.LINE_STRIP:n.lines+=d*(c-1);break;case s.LINE_LOOP:n.lines+=d*c;break;case s.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function fS(s,e,n){const r=new WeakMap,o=new rn;function c(f,d,p){const m=f.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let R=function(){$.dispose(),r.delete(d),d.removeEventListener("dispose",R)};var S=R;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,g=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let N=0;E===!0&&(N=1),T===!0&&(N=2),g===!0&&(N=3);let q=d.attributes.position.count*N,F=1;q>e.maxTextureSize&&(F=Math.ceil(q/e.maxTextureSize),q=e.maxTextureSize);const U=new Float32Array(q*F*4*_),$=new Gm(U,q,F,_);$.type=Ni,$.needsUpdate=!0;const L=N*4;for(let H=0;H<_;H++){const le=v[H],Q=b[H],fe=P[H],de=q*F*4*H;for(let ae=0;ae<le.count;ae++){const ce=ae*L;E===!0&&(o.fromBufferAttribute(le,ae),U[de+ce+0]=o.x,U[de+ce+1]=o.y,U[de+ce+2]=o.z,U[de+ce+3]=0),T===!0&&(o.fromBufferAttribute(Q,ae),U[de+ce+4]=o.x,U[de+ce+5]=o.y,U[de+ce+6]=o.z,U[de+ce+7]=0),g===!0&&(o.fromBufferAttribute(fe,ae),U[de+ce+8]=o.x,U[de+ce+9]=o.y,U[de+ce+10]=o.z,U[de+ce+11]=fe.itemSize===4?o.w:1)}}y={count:_,texture:$,size:new St(q,F)},r.set(d,y),d.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,n);else{let E=0;for(let g=0;g<m.length;g++)E+=m[g];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function hS(s,e,n,r){let o=new WeakMap;function c(p){const m=r.render.frame,x=p.geometry,_=e.get(p,x);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return _}function f(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:f}}class tg extends An{constructor(e,n,r,o,c,f,d,p,m,x=Fs){if(x!==Fs&&x!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&x===Fs&&(r=Xr),r===void 0&&x===Hs&&(r=Bs),super(null,o,c,f,d,p,x,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Xn,this.minFilter=p!==void 0?p:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const ng=new An,Yp=new tg(1,1),ig=new Gm,rg=new Qv,sg=new Qm,qp=[],$p=[],Kp=new Float32Array(16),Zp=new Float32Array(9),Qp=new Float32Array(4);function Ws(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=qp[o];if(c===void 0&&(c=new Float32Array(o),qp[o]=c),e!==0){r.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=n,s[f].toArray(c,d)}return c}function $t(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Kt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Dl(s,e){let n=$p[e];n===void 0&&(n=new Int32Array(e),$p[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function pS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function mS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2fv(this.addr,e),Kt(n,e)}}function gS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;s.uniform3fv(this.addr,e),Kt(n,e)}}function vS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4fv(this.addr,e),Kt(n,e)}}function _S(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Qp.set(r),s.uniformMatrix2fv(this.addr,!1,Qp),Kt(n,r)}}function xS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Zp.set(r),s.uniformMatrix3fv(this.addr,!1,Zp),Kt(n,r)}}function yS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if($t(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Kt(n,e)}else{if($t(n,r))return;Kp.set(r),s.uniformMatrix4fv(this.addr,!1,Kp),Kt(n,r)}}function SS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function MS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2iv(this.addr,e),Kt(n,e)}}function ES(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3iv(this.addr,e),Kt(n,e)}}function wS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4iv(this.addr,e),Kt(n,e)}}function TS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function AS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;s.uniform2uiv(this.addr,e),Kt(n,e)}}function CS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;s.uniform3uiv(this.addr,e),Kt(n,e)}}function RS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;s.uniform4uiv(this.addr,e),Kt(n,e)}}function bS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(Yp.compareFunction=zm,c=Yp):c=ng,n.setTexture2D(e||c,o)}function PS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||rg,o)}function NS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||sg,o)}function LS(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||ig,o)}function DS(s){switch(s){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return vS;case 35674:return _S;case 35675:return xS;case 35676:return yS;case 5124:case 35670:return SS;case 35667:case 35671:return MS;case 35668:case 35672:return ES;case 35669:case 35673:return wS;case 5125:return TS;case 36294:return AS;case 36295:return CS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return bS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return NS;case 36289:case 36303:case 36311:case 36292:return LS}}function IS(s,e){s.uniform1fv(this.addr,e)}function US(s,e){const n=Ws(e,this.size,2);s.uniform2fv(this.addr,n)}function FS(s,e){const n=Ws(e,this.size,3);s.uniform3fv(this.addr,n)}function OS(s,e){const n=Ws(e,this.size,4);s.uniform4fv(this.addr,n)}function kS(s,e){const n=Ws(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function zS(s,e){const n=Ws(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function BS(s,e){const n=Ws(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function HS(s,e){s.uniform1iv(this.addr,e)}function VS(s,e){s.uniform2iv(this.addr,e)}function GS(s,e){s.uniform3iv(this.addr,e)}function WS(s,e){s.uniform4iv(this.addr,e)}function jS(s,e){s.uniform1uiv(this.addr,e)}function XS(s,e){s.uniform2uiv(this.addr,e)}function YS(s,e){s.uniform3uiv(this.addr,e)}function qS(s,e){s.uniform4uiv(this.addr,e)}function $S(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==o;++f)n.setTexture2D(e[f]||ng,c[f])}function KS(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==o;++f)n.setTexture3D(e[f]||rg,c[f])}function ZS(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==o;++f)n.setTextureCube(e[f]||sg,c[f])}function QS(s,e,n){const r=this.cache,o=e.length,c=Dl(n,o);$t(r,c)||(s.uniform1iv(this.addr,c),Kt(r,c));for(let f=0;f!==o;++f)n.setTexture2DArray(e[f]||ig,c[f])}function JS(s){switch(s){case 5126:return IS;case 35664:return US;case 35665:return FS;case 35666:return OS;case 35674:return kS;case 35675:return zS;case 35676:return BS;case 5124:case 35670:return HS;case 35667:case 35671:return VS;case 35668:case 35672:return GS;case 35669:case 35673:return WS;case 5125:return jS;case 36294:return XS;case 36295:return YS;case 36296:return qS;case 35678:case 36198:case 36298:case 36306:case 35682:return $S;case 35679:case 36299:case 36307:return KS;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return QS}}class eM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=DS(n.type)}}class tM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=JS(n.type)}}class nM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const d=o[c];d.setValue(e,n[d.id],r)}}}const Gu=/(\w+)(\])?(\[|\.)?/g;function Jp(s,e){s.seq.push(e),s.map[e.id]=e}function iM(s,e,n){const r=s.name,o=r.length;for(Gu.lastIndex=0;;){const c=Gu.exec(r),f=Gu.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===o){Jp(n,m===void 0?new eM(d,s,e):new tM(d,s,e));break}else{let _=n.map[d];_===void 0&&(_=new nM(d),Jp(n,_)),n=_}}}class Ml{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const c=e.getActiveUniform(n,o),f=e.getUniformLocation(n,c.name);iM(c,f,this)}}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,f=n.length;c!==f;++c){const d=n[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const f=e[o];f.id in n&&r.push(f)}return r}}function em(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const rM=37297;let sM=0;function aM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let f=o;f<c;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function oM(s){const e=wt.getPrimaries(wt.workingColorSpace),n=wt.getPrimaries(s);let r;switch(e===n?r="":e===Al&&n===Tl?r="LinearDisplayP3ToLinearSRGB":e===Tl&&n===Al&&(r="LinearSRGBToLinearDisplayP3"),s){case _r:case Pl:return[r,"LinearTransferOETF"];case ui:case Id:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function tm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+aM(s.getShaderSource(e),f)}else return o}function lM(s,e){const n=oM(e);return`vec4 ${s}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function cM(s,e){let n;switch(e){case Tv:n="Linear";break;case Av:n="Reinhard";break;case Cv:n="OptimizedCineon";break;case Rv:n="ACESFilmic";break;case Pv:n="AgX";break;case Nv:n="Neutral";break;case bv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function uM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function dM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function fM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),n[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return n}function Pa(s){return s!==""}function nm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function im(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(s){return s.replace(hM,mM)}const pM=new Map;function mM(s,e){let n=lt[e];if(n===void 0){const r=pM.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wd(n)}const gM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rm(s){return s.replace(gM,vM)}function vM(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function sm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function _M(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Z0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function xM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ks:case zs:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function yM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case zs:e="ENVMAP_MODE_REFRACTION";break}return e}function SM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Cm:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case wv:e="ENVMAP_BLENDING_ADD";break}return e}function MM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function EM(s,e,n,r){const o=s.getContext(),c=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=_M(n),m=xM(n),x=yM(n),_=SM(n),y=MM(n),S=uM(n),E=dM(c),T=o.createProgram();let g,v,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Pa).join(`
`),g.length>0&&(g+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(Pa).join(`
`),v.length>0&&(v+=`
`)):(g=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),v=[sm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mr?"#define TONE_MAPPING":"",n.toneMapping!==mr?lt.tonemapping_pars_fragment:"",n.toneMapping!==mr?cM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,lM("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Pa).join(`
`)),f=wd(f),f=nm(f,n),f=im(f,n),d=wd(d),d=nm(d,n),d=im(d,n),f=rm(f),d=rm(d),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,v=["#define varying in",n.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const P=b+g+f,N=b+v+d,q=em(o,o.VERTEX_SHADER,P),F=em(o,o.FRAGMENT_SHADER,N);o.attachShader(T,q),o.attachShader(T,F),n.index0AttributeName!==void 0?o.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function U(H){if(s.debug.checkShaderErrors){const le=o.getProgramInfoLog(T).trim(),Q=o.getShaderInfoLog(q).trim(),fe=o.getShaderInfoLog(F).trim();let de=!0,ae=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,q,F);else{const ce=tm(o,q,"vertex"),B=tm(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+le+`
`+ce+`
`+B)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(Q===""||fe==="")&&(ae=!1);ae&&(H.diagnostics={runnable:de,programLog:le,vertexShader:{log:Q,prefix:g},fragmentShader:{log:fe,prefix:v}})}o.deleteShader(q),o.deleteShader(F),$=new Ml(o,T),L=fM(o,T)}let $;this.getUniforms=function(){return $===void 0&&U(this),$};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(T,rM)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sM++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=q,this.fragmentShader=F,this}let wM=0;class TM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new AM(e),n.set(e,r)),r}}class AM{constructor(e){this.id=wM++,this.code=e,this.usedTimes=0}}function CM(s,e,n,r,o,c,f){const d=new jm,p=new TM,m=new Set,x=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function g(L,R,H,le,Q){const fe=le.fog,de=Q.geometry,ae=L.isMeshStandardMaterial?le.environment:null,ce=(L.isMeshStandardMaterial?n:e).get(L.envMap||ae),B=ce&&ce.mapping===bl?ce.image.height:null,he=E[L.type];L.precision!==null&&(S=o.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const oe=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,O=oe!==void 0?oe.length:0;let ie=0;de.morphAttributes.position!==void 0&&(ie=1),de.morphAttributes.normal!==void 0&&(ie=2),de.morphAttributes.color!==void 0&&(ie=3);let Le,Z,W,se;if(he){const vt=di[he];Le=vt.vertexShader,Z=vt.fragmentShader}else Le=L.vertexShader,Z=L.fragmentShader,p.update(L),W=p.getVertexShaderID(L),se=p.getFragmentShaderID(L);const ue=s.getRenderTarget(),Ce=Q.isInstancedMesh===!0,be=Q.isBatchedMesh===!0,We=!!L.map,gt=!!L.matcap,k=!!ce,At=!!L.aoMap,dt=!!L.lightMap,mt=!!L.bumpMap,Ge=!!L.normalMap,Ct=!!L.displacementMap,Je=!!L.emissiveMap,qe=!!L.metalnessMap,I=!!L.roughnessMap,A=L.anisotropy>0,ne=L.clearcoat>0,xe=L.dispersion>0,Se=L.iridescence>0,ve=L.sheen>0,Xe=L.transmission>0,Pe=A&&!!L.anisotropyMap,Fe=ne&&!!L.clearcoatMap,st=ne&&!!L.clearcoatNormalMap,Me=ne&&!!L.clearcoatRoughnessMap,De=Se&&!!L.iridescenceMap,ft=Se&&!!L.iridescenceThicknessMap,tt=ve&&!!L.sheenColorMap,Oe=ve&&!!L.sheenRoughnessMap,rt=!!L.specularMap,at=!!L.specularColorMap,Rt=!!L.specularIntensityMap,G=Xe&&!!L.transmissionMap,we=Xe&&!!L.thicknessMap,pe=!!L.gradientMap,me=!!L.alphaMap,Te=L.alphaTest>0,Ze=!!L.alphaHash,ht=!!L.extensions;let Ot=mr;L.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const Vt={shaderID:he,shaderType:L.type,shaderName:L.name,vertexShader:Le,fragmentShader:Z,defines:L.defines,customVertexShaderID:W,customFragmentShaderID:se,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:be,batchingColor:be&&Q._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&Q.instanceColor!==null,instancingMorph:Ce&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:_r,alphaToCoverage:!!L.alphaToCoverage,map:We,matcap:gt,envMap:k,envMapMode:k&&ce.mapping,envMapCubeUVHeight:B,aoMap:At,lightMap:dt,bumpMap:mt,normalMap:Ge,displacementMap:y&&Ct,emissiveMap:Je,normalMapObjectSpace:Ge&&L.normalMapType===Fv,normalMapTangentSpace:Ge&&L.normalMapType===Uv,metalnessMap:qe,roughnessMap:I,anisotropy:A,anisotropyMap:Pe,clearcoat:ne,clearcoatMap:Fe,clearcoatNormalMap:st,clearcoatRoughnessMap:Me,dispersion:xe,iridescence:Se,iridescenceMap:De,iridescenceThicknessMap:ft,sheen:ve,sheenColorMap:tt,sheenRoughnessMap:Oe,specularMap:rt,specularColorMap:at,specularIntensityMap:Rt,transmission:Xe,transmissionMap:G,thicknessMap:we,gradientMap:pe,opaque:L.transparent===!1&&L.blending===Us&&L.alphaToCoverage===!1,alphaMap:me,alphaTest:Te,alphaHash:Ze,combine:L.combine,mapUv:We&&T(L.map.channel),aoMapUv:At&&T(L.aoMap.channel),lightMapUv:dt&&T(L.lightMap.channel),bumpMapUv:mt&&T(L.bumpMap.channel),normalMapUv:Ge&&T(L.normalMap.channel),displacementMapUv:Ct&&T(L.displacementMap.channel),emissiveMapUv:Je&&T(L.emissiveMap.channel),metalnessMapUv:qe&&T(L.metalnessMap.channel),roughnessMapUv:I&&T(L.roughnessMap.channel),anisotropyMapUv:Pe&&T(L.anisotropyMap.channel),clearcoatMapUv:Fe&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:st&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(L.sheenRoughnessMap.channel),specularMapUv:rt&&T(L.specularMap.channel),specularColorMapUv:at&&T(L.specularColorMap.channel),specularIntensityMapUv:Rt&&T(L.specularIntensityMap.channel),transmissionMapUv:G&&T(L.transmissionMap.channel),thicknessMapUv:we&&T(L.thicknessMap.channel),alphaMapUv:me&&T(L.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(Ge||A),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(We||me),fog:!!fe,useFog:L.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ie,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:We&&L.map.isVideoTexture===!0&&wt.getTransfer(L.map.colorSpace)===It,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Pi,flipSided:L.side===Tn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:ht&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&L.extensions.multiDraw===!0||be)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Vt.vertexUv1s=m.has(1),Vt.vertexUv2s=m.has(2),Vt.vertexUv3s=m.has(3),m.clear(),Vt}function v(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const H in L.defines)R.push(H),R.push(L.defines[H]);return L.isRawShaderMaterial===!1&&(b(R,L),P(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function b(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function P(L,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.skinning&&d.enable(4),R.morphTargets&&d.enable(5),R.morphNormals&&d.enable(6),R.morphColors&&d.enable(7),R.premultipliedAlpha&&d.enable(8),R.shadowMapEnabled&&d.enable(9),R.doubleSided&&d.enable(10),R.flipSided&&d.enable(11),R.useDepthPacking&&d.enable(12),R.dithering&&d.enable(13),R.transmission&&d.enable(14),R.sheen&&d.enable(15),R.opaque&&d.enable(16),R.pointsUvs&&d.enable(17),R.decodeVideoTexture&&d.enable(18),R.alphaToCoverage&&d.enable(19),L.push(d.mask)}function N(L){const R=E[L.type];let H;if(R){const le=di[R];H=u_.clone(le.uniforms)}else H=L.uniforms;return H}function q(L,R){let H;for(let le=0,Q=x.length;le<Q;le++){const fe=x[le];if(fe.cacheKey===R){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new EM(s,R,L,c),x.push(H)),H}function F(L){if(--L.usedTimes===0){const R=x.indexOf(L);x[R]=x[x.length-1],x.pop(),L.destroy()}}function U(L){p.remove(L)}function $(){p.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:N,acquireProgram:q,releaseProgram:F,releaseShaderCache:U,programs:x,dispose:$}}function RM(){let s=new WeakMap;function e(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function n(c){s.delete(c)}function r(c,f,d){s.get(c)[f]=d}function o(){s=new WeakMap}return{get:e,remove:n,update:r,dispose:o}}function bM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function am(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function om(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function f(_,y,S,E,T,g){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:E,renderOrder:_.renderOrder,z:T,group:g},s[e]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=T,v.group=g),e++,v}function d(_,y,S,E,T,g){const v=f(_,y,S,E,T,g);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):n.push(v)}function p(_,y,S,E,T,g){const v=f(_,y,S,E,T,g);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):n.unshift(v)}function m(_,y){n.length>1&&n.sort(_||bM),r.length>1&&r.sort(y||am),o.length>1&&o.sort(y||am)}function x(){for(let _=e,y=s.length;_<y;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:d,unshift:p,finish:x,sort:m}}function PM(){let s=new WeakMap;function e(r,o){const c=s.get(r);let f;return c===void 0?(f=new om,s.set(r,[f])):o>=c.length?(f=new om,c.push(f)):f=c[o],f}function n(){s=new WeakMap}return{get:e,dispose:n}}function NM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new Tt};break;case"SpotLight":n={position:new re,direction:new re,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":n={color:new Tt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=n,n}}}function LM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let DM=0;function IM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function UM(s){const e=new NM,n=LM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new re);const o=new re,c=new jt,f=new jt;function d(m){let x=0,_=0,y=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,E=0,T=0,g=0,v=0,b=0,P=0,N=0,q=0,F=0,U=0;m.sort(IM);for(let L=0,R=m.length;L<R;L++){const H=m[L],le=H.color,Q=H.intensity,fe=H.distance,de=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)x+=le.r*Q,_+=le.g*Q,y+=le.b*Q;else if(H.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(H.sh.coefficients[ae],Q);U++}else if(H.isDirectionalLight){const ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ce=H.shadow,B=n.get(H);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=H.shadow.matrix,b++}r.directional[S]=ae,S++}else if(H.isSpotLight){const ae=e.get(H);ae.position.setFromMatrixPosition(H.matrixWorld),ae.color.copy(le).multiplyScalar(Q),ae.distance=fe,ae.coneCos=Math.cos(H.angle),ae.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),ae.decay=H.decay,r.spot[T]=ae;const ce=H.shadow;if(H.map&&(r.spotLightMap[q]=H.map,q++,ce.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[T]=ce.matrix,H.castShadow){const B=n.get(H);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,r.spotShadow[T]=B,r.spotShadowMap[T]=de,N++}T++}else if(H.isRectAreaLight){const ae=e.get(H);ae.color.copy(le).multiplyScalar(Q),ae.halfWidth.set(H.width*.5,0,0),ae.halfHeight.set(0,H.height*.5,0),r.rectArea[g]=ae,g++}else if(H.isPointLight){const ae=e.get(H);if(ae.color.copy(H.color).multiplyScalar(H.intensity),ae.distance=H.distance,ae.decay=H.decay,H.castShadow){const ce=H.shadow,B=n.get(H);B.shadowIntensity=ce.intensity,B.shadowBias=ce.bias,B.shadowNormalBias=ce.normalBias,B.shadowRadius=ce.radius,B.shadowMapSize=ce.mapSize,B.shadowCameraNear=ce.camera.near,B.shadowCameraFar=ce.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=de,r.pointShadowMatrix[E]=H.shadow.matrix,P++}r.point[E]=ae,E++}else if(H.isHemisphereLight){const ae=e.get(H);ae.skyColor.copy(H.color).multiplyScalar(Q),ae.groundColor.copy(H.groundColor).multiplyScalar(Q),r.hemi[v]=ae,v++}}g>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const $=r.hash;($.directionalLength!==S||$.pointLength!==E||$.spotLength!==T||$.rectAreaLength!==g||$.hemiLength!==v||$.numDirectionalShadows!==b||$.numPointShadows!==P||$.numSpotShadows!==N||$.numSpotMaps!==q||$.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=g,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=N+q-F,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,$.directionalLength=S,$.pointLength=E,$.spotLength=T,$.rectAreaLength=g,$.hemiLength=v,$.numDirectionalShadows=b,$.numPointShadows=P,$.numSpotShadows=N,$.numSpotMaps=q,$.numLightProbes=U,r.version=DM++)}function p(m,x){let _=0,y=0,S=0,E=0,T=0;const g=x.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const P=m[v];if(P.isDirectionalLight){const N=r.directional[_];N.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(g),_++}else if(P.isSpotLight){const N=r.spot[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(g),N.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(g),S++}else if(P.isRectAreaLight){const N=r.rectArea[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(g),f.identity(),c.copy(P.matrixWorld),c.premultiply(g),f.extractRotation(c),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),E++}else if(P.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(g),y++}else if(P.isHemisphereLight){const N=r.hemi[T];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(g),T++}}}return{setup:d,setupView:p,state:r}}function lm(s){const e=new UM(s),n=[],r=[];function o(x){m.camera=x,n.length=0,r.length=0}function c(x){n.push(x)}function f(x){r.push(x)}function d(){e.setup(n)}function p(x){e.setupView(n,x)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function FM(s){let e=new WeakMap;function n(o,c=0){const f=e.get(o);let d;return f===void 0?(d=new lm(s),e.set(o,[d])):c>=f.length?(d=new lm(s),f.push(d)):d=f[c],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class OM extends Fa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kM extends Fa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zM=`void main() {
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
}`;function HM(s,e,n){let r=new Jm;const o=new St,c=new St,f=new rn,d=new OM({depthPacking:Iv}),p=new kM,m={},x=n.maxTextureSize,_={[gr]:Tn,[Tn]:gr,[Pi]:Pi},y=new vr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:zM,fragmentShader:BM}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const E=new Fi;E.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Di(E,y),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let v=this.type;this.render=function(F,U,$){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||F.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),le=s.state;le.setBlending(pr),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const Q=v!==bi&&this.type===bi,fe=v===bi&&this.type!==bi;for(let de=0,ae=F.length;de<ae;de++){const ce=F[de],B=ce.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const he=B.getFrameExtents();if(o.multiply(he),c.copy(B.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/he.x),o.x=c.x*he.x,B.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/he.y),o.y=c.y*he.y,B.mapSize.y=c.y)),B.map===null||Q===!0||fe===!0){const O=this.type!==bi?{minFilter:Xn,magFilter:Xn}:{};B.map!==null&&B.map.dispose(),B.map=new Yr(o.x,o.y,O),B.map.texture.name=ce.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const oe=B.getViewportCount();for(let O=0;O<oe;O++){const ie=B.getViewport(O);f.set(c.x*ie.x,c.y*ie.y,c.x*ie.z,c.y*ie.w),le.viewport(f),B.updateMatrices(ce,O),r=B.getFrustum(),N(U,$,B.camera,ce,this.type)}B.isPointLightShadow!==!0&&this.type===bi&&b(B,$),B.needsUpdate=!1}v=this.type,g.needsUpdate=!1,s.setRenderTarget(L,R,H)};function b(F,U){const $=e.update(T);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Yr(o.x,o.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(U,null,$,y,T,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(U,null,$,S,T,null)}function P(F,U,$,L){let R=null;const H=$.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=$.isPointLight===!0?p:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const le=R.uuid,Q=U.uuid;let fe=m[le];fe===void 0&&(fe={},m[le]=fe);let de=fe[Q];de===void 0&&(de=R.clone(),fe[Q]=de,U.addEventListener("dispose",q)),R=de}if(R.visible=U.visible,R.wireframe=U.wireframe,L===bi?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:_[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,$.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const le=s.properties.get(R);le.light=$}return R}function N(F,U,$,L,R){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===bi)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,F.matrixWorld);const Q=e.update(F),fe=F.material;if(Array.isArray(fe)){const de=Q.groups;for(let ae=0,ce=de.length;ae<ce;ae++){const B=de[ae],he=fe[B.materialIndex];if(he&&he.visible){const oe=P(F,he,L,R);F.onBeforeShadow(s,F,U,$,Q,oe,B),s.renderBufferDirect($,null,Q,oe,F,B),F.onAfterShadow(s,F,U,$,Q,oe,B)}}}else if(fe.visible){const de=P(F,fe,L,R);F.onBeforeShadow(s,F,U,$,Q,de,null),s.renderBufferDirect($,null,Q,de,F,null),F.onAfterShadow(s,F,U,$,Q,de,null)}}const le=F.children;for(let Q=0,fe=le.length;Q<fe;Q++)N(le[Q],U,$,L,R)}function q(F){F.target.removeEventListener("dispose",q);for(const $ in m){const L=m[$],R=F.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}function VM(s){function e(){let G=!1;const we=new rn;let pe=null;const me=new rn(0,0,0,0);return{setMask:function(Te){pe!==Te&&!G&&(s.colorMask(Te,Te,Te,Te),pe=Te)},setLocked:function(Te){G=Te},setClear:function(Te,Ze,ht,Ot,Vt){Vt===!0&&(Te*=Ot,Ze*=Ot,ht*=Ot),we.set(Te,Ze,ht,Ot),me.equals(we)===!1&&(s.clearColor(Te,Ze,ht,Ot),me.copy(we))},reset:function(){G=!1,pe=null,me.set(-1,0,0,0)}}}function n(){let G=!1,we=null,pe=null,me=null;return{setTest:function(Te){Te?se(s.DEPTH_TEST):ue(s.DEPTH_TEST)},setMask:function(Te){we!==Te&&!G&&(s.depthMask(Te),we=Te)},setFunc:function(Te){if(pe!==Te){switch(Te){case gv:s.depthFunc(s.NEVER);break;case vv:s.depthFunc(s.ALWAYS);break;case _v:s.depthFunc(s.LESS);break;case El:s.depthFunc(s.LEQUAL);break;case xv:s.depthFunc(s.EQUAL);break;case yv:s.depthFunc(s.GEQUAL);break;case Sv:s.depthFunc(s.GREATER);break;case Mv:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Te}},setLocked:function(Te){G=Te},setClear:function(Te){me!==Te&&(s.clearDepth(Te),me=Te)},reset:function(){G=!1,we=null,pe=null,me=null}}}function r(){let G=!1,we=null,pe=null,me=null,Te=null,Ze=null,ht=null,Ot=null,Vt=null;return{setTest:function(vt){G||(vt?se(s.STENCIL_TEST):ue(s.STENCIL_TEST))},setMask:function(vt){we!==vt&&!G&&(s.stencilMask(vt),we=vt)},setFunc:function(vt,Rn,bn){(pe!==vt||me!==Rn||Te!==bn)&&(s.stencilFunc(vt,Rn,bn),pe=vt,me=Rn,Te=bn)},setOp:function(vt,Rn,bn){(Ze!==vt||ht!==Rn||Ot!==bn)&&(s.stencilOp(vt,Rn,bn),Ze=vt,ht=Rn,Ot=bn)},setLocked:function(vt){G=vt},setClear:function(vt){Vt!==vt&&(s.clearStencil(vt),Vt=vt)},reset:function(){G=!1,we=null,pe=null,me=null,Te=null,Ze=null,ht=null,Ot=null,Vt=null}}}const o=new e,c=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},x={},_=new WeakMap,y=[],S=null,E=!1,T=null,g=null,v=null,b=null,P=null,N=null,q=null,F=new Tt(0,0,0),U=0,$=!1,L=null,R=null,H=null,le=null,Q=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let de=!1,ae=0;const ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(ce)[1]),de=ae>=1):ce.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),de=ae>=2);let B=null,he={};const oe=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),ie=new rn().fromArray(oe),Le=new rn().fromArray(O);function Z(G,we,pe,me){const Te=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(G,Ze),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<pe;ht++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Te):s.texImage2D(we+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Te);return Ze}const W={};W[s.TEXTURE_2D]=Z(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=Z(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=Z(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=Z(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),f.setClear(0),se(s.DEPTH_TEST),c.setFunc(El),mt(!1),Ge(pp),se(s.CULL_FACE),At(pr);function se(G){m[G]!==!0&&(s.enable(G),m[G]=!0)}function ue(G){m[G]!==!1&&(s.disable(G),m[G]=!1)}function Ce(G,we){return x[G]!==we?(s.bindFramebuffer(G,we),x[G]=we,G===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=we),G===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=we),!0):!1}function be(G,we){let pe=y,me=!1;if(G){pe=_.get(we),pe===void 0&&(pe=[],_.set(we,pe));const Te=G.textures;if(pe.length!==Te.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,ht=Te.length;Ze<ht;Ze++)pe[Ze]=s.COLOR_ATTACHMENT0+Ze;pe.length=Te.length,me=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,me=!0);me&&s.drawBuffers(pe)}function We(G){return S!==G?(s.useProgram(G),S=G,!0):!1}const gt={[Hr]:s.FUNC_ADD,[J0]:s.FUNC_SUBTRACT,[ev]:s.FUNC_REVERSE_SUBTRACT};gt[tv]=s.MIN,gt[nv]=s.MAX;const k={[iv]:s.ZERO,[rv]:s.ONE,[sv]:s.SRC_COLOR,[ju]:s.SRC_ALPHA,[dv]:s.SRC_ALPHA_SATURATE,[cv]:s.DST_COLOR,[ov]:s.DST_ALPHA,[av]:s.ONE_MINUS_SRC_COLOR,[Xu]:s.ONE_MINUS_SRC_ALPHA,[uv]:s.ONE_MINUS_DST_COLOR,[lv]:s.ONE_MINUS_DST_ALPHA,[fv]:s.CONSTANT_COLOR,[hv]:s.ONE_MINUS_CONSTANT_COLOR,[pv]:s.CONSTANT_ALPHA,[mv]:s.ONE_MINUS_CONSTANT_ALPHA};function At(G,we,pe,me,Te,Ze,ht,Ot,Vt,vt){if(G===pr){E===!0&&(ue(s.BLEND),E=!1);return}if(E===!1&&(se(s.BLEND),E=!0),G!==Q0){if(G!==T||vt!==$){if((g!==Hr||P!==Hr)&&(s.blendEquation(s.FUNC_ADD),g=Hr,P=Hr),vt)switch(G){case Us:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mp:s.blendFunc(s.ONE,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Us:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case mp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}v=null,b=null,N=null,q=null,F.set(0,0,0),U=0,T=G,$=vt}return}Te=Te||we,Ze=Ze||pe,ht=ht||me,(we!==g||Te!==P)&&(s.blendEquationSeparate(gt[we],gt[Te]),g=we,P=Te),(pe!==v||me!==b||Ze!==N||ht!==q)&&(s.blendFuncSeparate(k[pe],k[me],k[Ze],k[ht]),v=pe,b=me,N=Ze,q=ht),(Ot.equals(F)===!1||Vt!==U)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Vt),F.copy(Ot),U=Vt),T=G,$=!1}function dt(G,we){G.side===Pi?ue(s.CULL_FACE):se(s.CULL_FACE);let pe=G.side===Tn;we&&(pe=!pe),mt(pe),G.blending===Us&&G.transparent===!1?At(pr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),o.setMask(G.colorWrite);const me=G.stencilWrite;f.setTest(me),me&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Je(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?se(s.SAMPLE_ALPHA_TO_COVERAGE):ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function mt(G){L!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),L=G)}function Ge(G){G!==$0?(se(s.CULL_FACE),G!==R&&(G===pp?s.cullFace(s.BACK):G===K0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ue(s.CULL_FACE),R=G}function Ct(G){G!==H&&(de&&s.lineWidth(G),H=G)}function Je(G,we,pe){G?(se(s.POLYGON_OFFSET_FILL),(le!==we||Q!==pe)&&(s.polygonOffset(we,pe),le=we,Q=pe)):ue(s.POLYGON_OFFSET_FILL)}function qe(G){G?se(s.SCISSOR_TEST):ue(s.SCISSOR_TEST)}function I(G){G===void 0&&(G=s.TEXTURE0+fe-1),B!==G&&(s.activeTexture(G),B=G)}function A(G,we,pe){pe===void 0&&(B===null?pe=s.TEXTURE0+fe-1:pe=B);let me=he[pe];me===void 0&&(me={type:void 0,texture:void 0},he[pe]=me),(me.type!==G||me.texture!==we)&&(B!==pe&&(s.activeTexture(pe),B=pe),s.bindTexture(G,we||W[G]),me.type=G,me.texture=we)}function ne(){const G=he[B];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function xe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Xe(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function st(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ft(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(G){ie.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),ie.copy(G))}function Oe(G){Le.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Le.copy(G))}function rt(G,we){let pe=p.get(we);pe===void 0&&(pe=new WeakMap,p.set(we,pe));let me=pe.get(G);me===void 0&&(me=s.getUniformBlockIndex(we,G.name),pe.set(G,me))}function at(G,we){const me=p.get(we).get(G);d.get(we)!==me&&(s.uniformBlockBinding(we,me,G.__bindingPointIndex),d.set(we,me))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),m={},B=null,he={},x={},_=new WeakMap,y=[],S=null,E=!1,T=null,g=null,v=null,b=null,P=null,N=null,q=null,F=new Tt(0,0,0),U=0,$=!1,L=null,R=null,H=null,le=null,Q=null,ie.set(0,0,s.canvas.width,s.canvas.height),Le.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),f.reset()}return{buffers:{color:o,depth:c,stencil:f},enable:se,disable:ue,bindFramebuffer:Ce,drawBuffers:be,useProgram:We,setBlending:At,setMaterial:dt,setFlipSided:mt,setCullFace:Ge,setLineWidth:Ct,setPolygonOffset:Je,setScissorTest:qe,activeTexture:I,bindTexture:A,unbindTexture:ne,compressedTexImage2D:xe,compressedTexImage3D:Se,texImage2D:De,texImage3D:ft,updateUBOMapping:rt,uniformBlockBinding:at,texStorage2D:st,texStorage3D:Me,texSubImage2D:ve,texSubImage3D:Xe,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Fe,scissor:tt,viewport:Oe,reset:Rt}}function cm(s,e,n,r){const o=GM(r);switch(n){case Lm:return s*e;case Im:return s*e;case Um:return s*e*2;case Fm:return s*e/o.components*o.byteLength;case Nd:return s*e/o.components*o.byteLength;case Om:return s*e*2/o.components*o.byteLength;case Ld:return s*e*2/o.components*o.byteLength;case Dm:return s*e*3/o.components*o.byteLength;case ri:return s*e*4/o.components*o.byteLength;case Dd:return s*e*4/o.components*o.byteLength;case vl:case _l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case xl:case yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qu:case ed:return Math.max(s,16)*Math.max(e,8)/4;case Zu:case Ju:return Math.max(s,8)*Math.max(e,8)/2;case td:case nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case id:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ud:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case fd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case md:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case vd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sl:case _d:case xd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case km:case yd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Sd:case Md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function GM(s){switch(s){case Ii:case bm:return{byteLength:1,components:1};case Na:case Pm:case La:return{byteLength:2,components:1};case bd:case Pd:return{byteLength:2,components:4};case Xr:case Rd:case Ni:return{byteLength:4,components:1};case Nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function WM(s,e,n,r,o,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new St,x=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,A){return S?new OffscreenCanvas(I,A):Rl("canvas")}function T(I,A,ne){let xe=1;const Se=qe(I);if((Se.width>ne||Se.height>ne)&&(xe=ne/Math.max(Se.width,Se.height)),xe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ve=Math.floor(xe*Se.width),Xe=Math.floor(xe*Se.height);_===void 0&&(_=E(ve,Xe));const Pe=A?E(ve,Xe):_;return Pe.width=ve,Pe.height=Xe,Pe.getContext("2d").drawImage(I,0,0,ve,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+ve+"x"+Xe+")."),Pe}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),I;return I}function g(I){return I.generateMipmaps&&I.minFilter!==Xn&&I.minFilter!==ii}function v(I){s.generateMipmap(I)}function b(I,A,ne,xe,Se=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ve=A;if(A===s.RED&&(ne===s.FLOAT&&(ve=s.R32F),ne===s.HALF_FLOAT&&(ve=s.R16F),ne===s.UNSIGNED_BYTE&&(ve=s.R8)),A===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ve=s.R8UI),ne===s.UNSIGNED_SHORT&&(ve=s.R16UI),ne===s.UNSIGNED_INT&&(ve=s.R32UI),ne===s.BYTE&&(ve=s.R8I),ne===s.SHORT&&(ve=s.R16I),ne===s.INT&&(ve=s.R32I)),A===s.RG&&(ne===s.FLOAT&&(ve=s.RG32F),ne===s.HALF_FLOAT&&(ve=s.RG16F),ne===s.UNSIGNED_BYTE&&(ve=s.RG8)),A===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(ve=s.RG8UI),ne===s.UNSIGNED_SHORT&&(ve=s.RG16UI),ne===s.UNSIGNED_INT&&(ve=s.RG32UI),ne===s.BYTE&&(ve=s.RG8I),ne===s.SHORT&&(ve=s.RG16I),ne===s.INT&&(ve=s.RG32I)),A===s.RGB&&ne===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),A===s.RGBA){const Xe=Se?wl:wt.getTransfer(xe);ne===s.FLOAT&&(ve=s.RGBA32F),ne===s.HALF_FLOAT&&(ve=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(ve=Xe===It?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function P(I,A){let ne;return I?A===null||A===Xr||A===Bs?ne=s.DEPTH24_STENCIL8:A===Ni?ne=s.DEPTH32F_STENCIL8:A===Na&&(ne=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Xr||A===Bs?ne=s.DEPTH_COMPONENT24:A===Ni?ne=s.DEPTH_COMPONENT32F:A===Na&&(ne=s.DEPTH_COMPONENT16),ne}function N(I,A){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==Xn&&I.minFilter!==ii?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function q(I){const A=I.target;A.removeEventListener("dispose",q),U(A),A.isVideoTexture&&x.delete(A)}function F(I){const A=I.target;A.removeEventListener("dispose",F),L(A)}function U(I){const A=r.get(I);if(A.__webglInit===void 0)return;const ne=I.source,xe=y.get(ne);if(xe){const Se=xe[A.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&$(I),Object.keys(xe).length===0&&y.delete(ne)}r.remove(I)}function $(I){const A=r.get(I);s.deleteTexture(A.__webglTexture);const ne=I.source,xe=y.get(ne);delete xe[A.__cacheKey],f.memory.textures--}function L(I){const A=r.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(A.__webglFramebuffer[xe]))for(let Se=0;Se<A.__webglFramebuffer[xe].length;Se++)s.deleteFramebuffer(A.__webglFramebuffer[xe][Se]);else s.deleteFramebuffer(A.__webglFramebuffer[xe]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[xe])}else{if(Array.isArray(A.__webglFramebuffer))for(let xe=0;xe<A.__webglFramebuffer.length;xe++)s.deleteFramebuffer(A.__webglFramebuffer[xe]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let xe=0;xe<A.__webglColorRenderbuffer.length;xe++)A.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[xe]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ne=I.textures;for(let xe=0,Se=ne.length;xe<Se;xe++){const ve=r.get(ne[xe]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),f.memory.textures--),r.remove(ne[xe])}r.remove(I)}let R=0;function H(){R=0}function le(){const I=R;return I>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),R+=1,I}function Q(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function fe(I,A){const ne=r.get(I);if(I.isVideoTexture&&Ct(I),I.isRenderTargetTexture===!1&&I.version>0&&ne.__version!==I.version){const xe=I.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(ne,I,A);return}}n.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+A)}function de(I,A){const ne=r.get(I);if(I.version>0&&ne.__version!==I.version){Le(ne,I,A);return}n.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+A)}function ae(I,A){const ne=r.get(I);if(I.version>0&&ne.__version!==I.version){Le(ne,I,A);return}n.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+A)}function ce(I,A){const ne=r.get(I);if(I.version>0&&ne.__version!==I.version){Z(ne,I,A);return}n.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+A)}const B={[$u]:s.REPEAT,[Gr]:s.CLAMP_TO_EDGE,[Ku]:s.MIRRORED_REPEAT},he={[Xn]:s.NEAREST,[Lv]:s.NEAREST_MIPMAP_NEAREST,[jo]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[vu]:s.LINEAR_MIPMAP_NEAREST,[Wr]:s.LINEAR_MIPMAP_LINEAR},oe={[Ov]:s.NEVER,[Gv]:s.ALWAYS,[kv]:s.LESS,[zm]:s.LEQUAL,[zv]:s.EQUAL,[Vv]:s.GEQUAL,[Bv]:s.GREATER,[Hv]:s.NOTEQUAL};function O(I,A){if(A.type===Ni&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ii||A.magFilter===vu||A.magFilter===jo||A.magFilter===Wr||A.minFilter===ii||A.minFilter===vu||A.minFilter===jo||A.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,B[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,B[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,B[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,he[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,he[A.minFilter]),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,oe[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Xn||A.minFilter!==jo&&A.minFilter!==Wr||A.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ie(I,A){let ne=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",q));const xe=A.source;let Se=y.get(xe);Se===void 0&&(Se={},y.set(xe,Se));const ve=Q(A);if(ve!==I.__cacheKey){Se[ve]===void 0&&(Se[ve]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ne=!0),Se[ve].usedTimes++;const Xe=Se[I.__cacheKey];Xe!==void 0&&(Se[I.__cacheKey].usedTimes--,Xe.usedTimes===0&&$(A)),I.__cacheKey=ve,I.__webglTexture=Se[ve].texture}return ne}function Le(I,A,ne){let xe=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(xe=s.TEXTURE_3D);const Se=ie(I,A),ve=A.source;n.bindTexture(xe,I.__webglTexture,s.TEXTURE0+ne);const Xe=r.get(ve);if(ve.version!==Xe.__version||Se===!0){n.activeTexture(s.TEXTURE0+ne);const Pe=wt.getPrimaries(wt.workingColorSpace),Fe=A.colorSpace===hr?null:wt.getPrimaries(A.colorSpace),st=A.colorSpace===hr||Pe===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Me=T(A.image,!1,o.maxTextureSize);Me=Je(A,Me);const De=c.convert(A.format,A.colorSpace),ft=c.convert(A.type);let tt=b(A.internalFormat,De,ft,A.colorSpace,A.isVideoTexture);O(xe,A);let Oe;const rt=A.mipmaps,at=A.isVideoTexture!==!0,Rt=Xe.__version===void 0||Se===!0,G=ve.dataReady,we=N(A,Me);if(A.isDepthTexture)tt=P(A.format===Hs,A.type),Rt&&(at?n.texStorage2D(s.TEXTURE_2D,1,tt,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,De,ft,null));else if(A.isDataTexture)if(rt.length>0){at&&Rt&&n.texStorage2D(s.TEXTURE_2D,we,tt,rt[0].width,rt[0].height);for(let pe=0,me=rt.length;pe<me;pe++)Oe=rt[pe],at?G&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,De,ft,Oe.data):n.texImage2D(s.TEXTURE_2D,pe,tt,Oe.width,Oe.height,0,De,ft,Oe.data);A.generateMipmaps=!1}else at?(Rt&&n.texStorage2D(s.TEXTURE_2D,we,tt,Me.width,Me.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,De,ft,Me.data)):n.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,De,ft,Me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){at&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,tt,rt[0].width,rt[0].height,Me.depth);for(let pe=0,me=rt.length;pe<me;pe++)if(Oe=rt[pe],A.format!==ri)if(De!==null)if(at){if(G)if(A.layerUpdates.size>0){const Te=cm(Oe.width,Oe.height,A.format,A.type);for(const Ze of A.layerUpdates){const ht=Oe.data.subarray(Ze*Te/Oe.data.BYTES_PER_ELEMENT,(Ze+1)*Te/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,Ze,Oe.width,Oe.height,1,De,ht,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Oe.width,Oe.height,Me.depth,De,Oe.data,0,0)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,tt,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Oe.width,Oe.height,Me.depth,De,ft,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,pe,tt,Oe.width,Oe.height,Me.depth,0,De,ft,Oe.data)}else{at&&Rt&&n.texStorage2D(s.TEXTURE_2D,we,tt,rt[0].width,rt[0].height);for(let pe=0,me=rt.length;pe<me;pe++)Oe=rt[pe],A.format!==ri?De!==null?at?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,De,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,pe,tt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?G&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,De,ft,Oe.data):n.texImage2D(s.TEXTURE_2D,pe,tt,Oe.width,Oe.height,0,De,ft,Oe.data)}else if(A.isDataArrayTexture)if(at){if(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,we,tt,Me.width,Me.height,Me.depth),G)if(A.layerUpdates.size>0){const pe=cm(Me.width,Me.height,A.format,A.type);for(const me of A.layerUpdates){const Te=Me.data.subarray(me*pe/Me.data.BYTES_PER_ELEMENT,(me+1)*pe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,De,ft,Te)}A.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,ft,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,De,ft,Me.data);else if(A.isData3DTexture)at?(Rt&&n.texStorage3D(s.TEXTURE_3D,we,tt,Me.width,Me.height,Me.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,ft,Me.data)):n.texImage3D(s.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,De,ft,Me.data);else if(A.isFramebufferTexture){if(Rt)if(at)n.texStorage2D(s.TEXTURE_2D,we,tt,Me.width,Me.height);else{let pe=Me.width,me=Me.height;for(let Te=0;Te<we;Te++)n.texImage2D(s.TEXTURE_2D,Te,tt,pe,me,0,De,ft,null),pe>>=1,me>>=1}}else if(rt.length>0){if(at&&Rt){const pe=qe(rt[0]);n.texStorage2D(s.TEXTURE_2D,we,tt,pe.width,pe.height)}for(let pe=0,me=rt.length;pe<me;pe++)Oe=rt[pe],at?G&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,De,ft,Oe):n.texImage2D(s.TEXTURE_2D,pe,tt,De,ft,Oe);A.generateMipmaps=!1}else if(at){if(Rt){const pe=qe(Me);n.texStorage2D(s.TEXTURE_2D,we,tt,pe.width,pe.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,De,ft,Me)}else n.texImage2D(s.TEXTURE_2D,0,tt,De,ft,Me);g(A)&&v(xe),Xe.__version=ve.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Z(I,A,ne){if(A.image.length!==6)return;const xe=ie(I,A),Se=A.source;n.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+ne);const ve=r.get(Se);if(Se.version!==ve.__version||xe===!0){n.activeTexture(s.TEXTURE0+ne);const Xe=wt.getPrimaries(wt.workingColorSpace),Pe=A.colorSpace===hr?null:wt.getPrimaries(A.colorSpace),Fe=A.colorSpace===hr||Xe===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const st=A.isCompressedTexture||A.image[0].isCompressedTexture,Me=A.image[0]&&A.image[0].isDataTexture,De=[];for(let me=0;me<6;me++)!st&&!Me?De[me]=T(A.image[me],!0,o.maxCubemapSize):De[me]=Me?A.image[me].image:A.image[me],De[me]=Je(A,De[me]);const ft=De[0],tt=c.convert(A.format,A.colorSpace),Oe=c.convert(A.type),rt=b(A.internalFormat,tt,Oe,A.colorSpace),at=A.isVideoTexture!==!0,Rt=ve.__version===void 0||xe===!0,G=Se.dataReady;let we=N(A,ft);O(s.TEXTURE_CUBE_MAP,A);let pe;if(st){at&&Rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,we,rt,ft.width,ft.height);for(let me=0;me<6;me++){pe=De[me].mipmaps;for(let Te=0;Te<pe.length;Te++){const Ze=pe[Te];A.format!==ri?tt!==null?at?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Te,0,0,Ze.width,Ze.height,tt,Ze.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Te,rt,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Te,0,0,Ze.width,Ze.height,tt,Oe,Ze.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Te,rt,Ze.width,Ze.height,0,tt,Oe,Ze.data)}}}else{if(pe=A.mipmaps,at&&Rt){pe.length>0&&we++;const me=qe(De[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,we,rt,me.width,me.height)}for(let me=0;me<6;me++)if(Me){at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,De[me].width,De[me].height,tt,Oe,De[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,rt,De[me].width,De[me].height,0,tt,Oe,De[me].data);for(let Te=0;Te<pe.length;Te++){const ht=pe[Te].image[me].image;at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Te+1,0,0,ht.width,ht.height,tt,Oe,ht.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Te+1,rt,ht.width,ht.height,0,tt,Oe,ht.data)}}else{at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,tt,Oe,De[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,rt,tt,Oe,De[me]);for(let Te=0;Te<pe.length;Te++){const Ze=pe[Te];at?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Te+1,0,0,tt,Oe,Ze.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Te+1,rt,tt,Oe,Ze.image[me])}}}g(A)&&v(s.TEXTURE_CUBE_MAP),ve.__version=Se.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function W(I,A,ne,xe,Se,ve){const Xe=c.convert(ne.format,ne.colorSpace),Pe=c.convert(ne.type),Fe=b(ne.internalFormat,Xe,Pe,ne.colorSpace);if(!r.get(A).__hasExternalTextures){const Me=Math.max(1,A.width>>ve),De=Math.max(1,A.height>>ve);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?n.texImage3D(Se,ve,Fe,Me,De,A.depth,0,Xe,Pe,null):n.texImage2D(Se,ve,Fe,Me,De,0,Xe,Pe,null)}n.bindFramebuffer(s.FRAMEBUFFER,I),Ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,Se,r.get(ne).__webglTexture,0,mt(A)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,Se,r.get(ne).__webglTexture,ve),n.bindFramebuffer(s.FRAMEBUFFER,null)}function se(I,A,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer){const xe=A.depthTexture,Se=xe&&xe.isDepthTexture?xe.type:null,ve=P(A.stencilBuffer,Se),Xe=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=mt(A);Ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Pe,ve,A.width,A.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ve,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ve,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,I)}else{const xe=A.textures;for(let Se=0;Se<xe.length;Se++){const ve=xe[Se],Xe=c.convert(ve.format,ve.colorSpace),Pe=c.convert(ve.type),Fe=b(ve.internalFormat,Xe,Pe,ve.colorSpace),st=mt(A);ne&&Ge(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,st,Fe,A.width,A.height):Ge(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,st,Fe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ue(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe(A.depthTexture,0);const xe=r.get(A.depthTexture).__webglTexture,Se=mt(A);if(A.depthTexture.format===Fs)Ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xe,0);else if(A.depthTexture.format===Hs)Ge(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0,Se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Ce(I){const A=r.get(I),ne=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");ue(A.__webglFramebuffer,I)}else if(ne){A.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[xe]),A.__webglDepthbuffer[xe]=s.createRenderbuffer(),se(A.__webglDepthbuffer[xe],I,!1)}else n.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=s.createRenderbuffer(),se(A.__webglDepthbuffer,I,!1);n.bindFramebuffer(s.FRAMEBUFFER,null)}function be(I,A,ne){const xe=r.get(I);A!==void 0&&W(xe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&Ce(I)}function We(I){const A=I.texture,ne=r.get(I),xe=r.get(A);I.addEventListener("dispose",F);const Se=I.textures,ve=I.isWebGLCubeRenderTarget===!0,Xe=Se.length>1;if(Xe||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=A.version,f.memory.textures++),ve){ne.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer[Pe]=[];for(let Fe=0;Fe<A.mipmaps.length;Fe++)ne.__webglFramebuffer[Pe][Fe]=s.createFramebuffer()}else ne.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let Pe=0;Pe<A.mipmaps.length;Pe++)ne.__webglFramebuffer[Pe]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++){const st=r.get(Se[Pe]);st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture(),f.memory.textures++)}if(I.samples>0&&Ge(I)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){const Fe=Se[Pe];ne.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[Pe]);const st=c.convert(Fe.format,Fe.colorSpace),Me=c.convert(Fe.type),De=b(Fe.internalFormat,st,Me,Fe.colorSpace,I.isXRRenderTarget===!0),ft=mt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,De,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,ne.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),se(ne.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){n.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),O(s.TEXTURE_CUBE_MAP,A);for(let Pe=0;Pe<6;Pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)W(ne.__webglFramebuffer[Pe][Fe],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Fe);else W(ne.__webglFramebuffer[Pe],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);g(A)&&v(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Pe=0,Fe=Se.length;Pe<Fe;Pe++){const st=Se[Pe],Me=r.get(st);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),O(s.TEXTURE_2D,st),W(ne.__webglFramebuffer,I,st,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,0),g(st)&&v(s.TEXTURE_2D)}n.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Pe=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,xe.__webglTexture),O(Pe,A),A.mipmaps&&A.mipmaps.length>0)for(let Fe=0;Fe<A.mipmaps.length;Fe++)W(ne.__webglFramebuffer[Fe],I,A,s.COLOR_ATTACHMENT0,Pe,Fe);else W(ne.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,Pe,0);g(A)&&v(Pe),n.unbindTexture()}I.depthBuffer&&Ce(I)}function gt(I){const A=I.textures;for(let ne=0,xe=A.length;ne<xe;ne++){const Se=A[ne];if(g(Se)){const ve=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Xe=r.get(Se).__webglTexture;n.bindTexture(ve,Xe),v(ve),n.unbindTexture()}}}const k=[],At=[];function dt(I){if(I.samples>0){if(Ge(I)===!1){const A=I.textures,ne=I.width,xe=I.height;let Se=s.COLOR_BUFFER_BIT;const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(I),Pe=A.length>1;if(Pe)for(let Fe=0;Fe<A.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Fe=0;Fe<A.length;Fe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const st=r.get(A[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,ne,xe,0,0,ne,xe,Se,s.NEAREST),p===!0&&(k.length=0,At.length=0,k.push(s.COLOR_ATTACHMENT0+Fe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(k.push(ve),At.push(ve),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,At)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,k))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Fe=0;Fe<A.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Fe]);const st=r.get(A[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,st,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const A=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function mt(I){return Math.min(o.maxSamples,I.samples)}function Ge(I){const A=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(I){const A=f.render.frame;x.get(I)!==A&&(x.set(I,A),I.update())}function Je(I,A){const ne=I.colorSpace,xe=I.format,Se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||ne!==_r&&ne!==hr&&(wt.getTransfer(ne)===It?(xe!==ri||Se!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),A}function qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=le,this.resetTextureUnits=H,this.setTexture2D=fe,this.setTexture2DArray=de,this.setTexture3D=ae,this.setTextureCube=ce,this.rebindTextures=be,this.setupRenderTarget=We,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=W,this.useMultisampledRTT=Ge}function jM(s,e){function n(r,o=hr){let c;const f=wt.getTransfer(o);if(r===Ii)return s.UNSIGNED_BYTE;if(r===bd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Nm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===bm)return s.BYTE;if(r===Pm)return s.SHORT;if(r===Na)return s.UNSIGNED_SHORT;if(r===Rd)return s.INT;if(r===Xr)return s.UNSIGNED_INT;if(r===Ni)return s.FLOAT;if(r===La)return s.HALF_FLOAT;if(r===Lm)return s.ALPHA;if(r===Dm)return s.RGB;if(r===ri)return s.RGBA;if(r===Im)return s.LUMINANCE;if(r===Um)return s.LUMINANCE_ALPHA;if(r===Fs)return s.DEPTH_COMPONENT;if(r===Hs)return s.DEPTH_STENCIL;if(r===Fm)return s.RED;if(r===Nd)return s.RED_INTEGER;if(r===Om)return s.RG;if(r===Ld)return s.RG_INTEGER;if(r===Dd)return s.RGBA_INTEGER;if(r===vl||r===_l||r===xl||r===yl)if(f===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===vl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_l)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===vl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_l)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zu||r===Qu||r===Ju||r===ed)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Zu)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qu)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ju)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ed)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===td||r===nd||r===id)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===td||r===nd)return f===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===id)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===rd||r===sd||r===ad||r===od||r===ld||r===cd||r===ud||r===dd||r===fd||r===hd||r===pd||r===md||r===gd||r===vd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===rd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ad)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===od)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ld)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ud)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===dd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===md)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vd)return f===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Sl||r===_d||r===xd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Sl)return f===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_d)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===km||r===yd||r===Sd||r===Md)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Sl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===yd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Sd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Md)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}class XM extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hl extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const g=n.getJointPose(T,r),v=this._getHandJoint(m,T);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const x=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=x.position.distanceTo(_.position),S=.02,E=.005;m.inputState.pinching&&y>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new hl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const qM=`
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

}`;class KM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const o=new An,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new vr({vertexShader:qM,fragmentShader:$M,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new Ll(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZM extends Gs{constructor(e,n){super();const r=this;let o=null,c=1,f=null,d="local-floor",p=1,m=null,x=null,_=null,y=null,S=null,E=null;const T=new KM,g=n.getContextAttributes();let v=null,b=null;const P=[],N=[],q=new St;let F=null;const U=new jn;U.layers.enable(1),U.viewport=new rn;const $=new jn;$.layers.enable(2),$.viewport=new rn;const L=[U,$],R=new XM;R.layers.enable(1),R.layers.enable(2);let H=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let W=P[Z];return W===void 0&&(W=new Wu,P[Z]=W),W.getTargetRaySpace()},this.getControllerGrip=function(Z){let W=P[Z];return W===void 0&&(W=new Wu,P[Z]=W),W.getGripSpace()},this.getHand=function(Z){let W=P[Z];return W===void 0&&(W=new Wu,P[Z]=W),W.getHandSpace()};function Q(Z){const W=N.indexOf(Z.inputSource);if(W===-1)return;const se=P[W];se!==void 0&&(se.update(Z.inputSource,Z.frame,m||f),se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",de);for(let Z=0;Z<P.length;Z++){const W=N[Z];W!==null&&(N[Z]=null,P[Z].disconnect(W))}H=null,le=null,T.reset(),e.setRenderTarget(v),S=null,y=null,_=null,o=null,b=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(q.width,q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",de),g.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(q),o.renderState.layers===void 0){const W={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,W),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new Yr(S.framebufferWidth,S.framebufferHeight,{format:ri,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let W=null,se=null,ue=null;g.depth&&(ue=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,W=g.stencil?Hs:Fs,se=g.stencil?Bs:Xr);const Ce={colorFormat:n.RGBA8,depthFormat:ue,scaleFactor:c};_=new XRWebGLBinding(o,n),y=_.createProjectionLayer(Ce),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),b=new Yr(y.textureWidth,y.textureHeight,{format:ri,type:Ii,depthTexture:new tg(y.textureWidth,y.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await o.requestReferenceSpace(d),Le.setContext(o),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function de(Z){for(let W=0;W<Z.removed.length;W++){const se=Z.removed[W],ue=N.indexOf(se);ue>=0&&(N[ue]=null,P[ue].disconnect(se))}for(let W=0;W<Z.added.length;W++){const se=Z.added[W];let ue=N.indexOf(se);if(ue===-1){for(let be=0;be<P.length;be++)if(be>=N.length){N.push(se),ue=be;break}else if(N[be]===null){N[be]=se,ue=be;break}if(ue===-1)break}const Ce=P[ue];Ce&&Ce.connect(se)}}const ae=new re,ce=new re;function B(Z,W,se){ae.setFromMatrixPosition(W.matrixWorld),ce.setFromMatrixPosition(se.matrixWorld);const ue=ae.distanceTo(ce),Ce=W.projectionMatrix.elements,be=se.projectionMatrix.elements,We=Ce[14]/(Ce[10]-1),gt=Ce[14]/(Ce[10]+1),k=(Ce[9]+1)/Ce[5],At=(Ce[9]-1)/Ce[5],dt=(Ce[8]-1)/Ce[0],mt=(be[8]+1)/be[0],Ge=We*dt,Ct=We*mt,Je=ue/(-dt+mt),qe=Je*-dt;W.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(qe),Z.translateZ(Je),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const I=We+Je,A=gt+Je,ne=Ge-qe,xe=Ct+(ue-qe),Se=k*gt/A*I,ve=At*gt/A*I;Z.projectionMatrix.makePerspective(ne,xe,Se,ve,I,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function he(Z,W){W===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(W.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;T.texture!==null&&(Z.near=T.depthNear,Z.far=T.depthFar),R.near=$.near=U.near=Z.near,R.far=$.far=U.far=Z.far,(H!==R.near||le!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,le=R.far,U.near=H,U.far=le,$.near=H,$.far=le,U.updateProjectionMatrix(),$.updateProjectionMatrix(),Z.updateProjectionMatrix());const W=Z.parent,se=R.cameras;he(R,W);for(let ue=0;ue<se.length;ue++)he(se[ue],W);se.length===2?B(R,U,$):R.projectionMatrix.copy(U.projectionMatrix),oe(Z,R,W)};function oe(Z,W,se){se===null?Z.matrix.copy(W.matrixWorld):(Z.matrix.copy(se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(W.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(W.projectionMatrix),Z.projectionMatrixInverse.copy(W.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ed*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(Z){p=Z,y!==null&&(y.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let O=null;function ie(Z,W){if(x=W.getViewerPose(m||f),E=W,x!==null){const se=x.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let ue=!1;se.length!==R.cameras.length&&(R.cameras.length=0,ue=!0);for(let be=0;be<se.length;be++){const We=se[be];let gt=null;if(S!==null)gt=S.getViewport(We);else{const At=_.getViewSubImage(y,We);gt=At.viewport,be===0&&(e.setRenderTargetTextures(b,At.colorTexture,y.ignoreDepthValues?void 0:At.depthStencilTexture),e.setRenderTarget(b))}let k=L[be];k===void 0&&(k=new jn,k.layers.enable(be),k.viewport=new rn,L[be]=k),k.matrix.fromArray(We.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(We.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(gt.x,gt.y,gt.width,gt.height),be===0&&(R.matrix.copy(k.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ue===!0&&R.cameras.push(k)}const Ce=o.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const be=_.getDepthInformation(se[0]);be&&be.isValid&&be.texture&&T.init(e,be,o.renderState)}}for(let se=0;se<P.length;se++){const ue=N[se],Ce=P[se];ue!==null&&Ce!==void 0&&Ce.update(ue,W,m||f)}O&&O(Z,W),W.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:W}),E=null}const Le=new eg;Le.setAnimationLoop(ie),this.setAnimationLoop=function(Z){O=Z},this.dispose=function(){}}}const kr=new Ui,QM=new jt;function JM(s,e){function n(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function r(g,v){v.color.getRGB(g.fogColor.value,Km(s)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function o(g,v,b,P,N){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(g,v):v.isMeshToonMaterial?(c(g,v),_(g,v)):v.isMeshPhongMaterial?(c(g,v),x(g,v)):v.isMeshStandardMaterial?(c(g,v),y(g,v),v.isMeshPhysicalMaterial&&S(g,v,N)):v.isMeshMatcapMaterial?(c(g,v),E(g,v)):v.isMeshDepthMaterial?c(g,v):v.isMeshDistanceMaterial?(c(g,v),T(g,v)):v.isMeshNormalMaterial?c(g,v):v.isLineBasicMaterial?(f(g,v),v.isLineDashedMaterial&&d(g,v)):v.isPointsMaterial?p(g,v,b,P):v.isSpriteMaterial?m(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,n(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===Tn&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,n(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===Tn&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,n(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,n(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const b=e.get(v),P=b.envMap,N=b.envMapRotation;P&&(g.envMap.value=P,kr.copy(N),kr.x*=-1,kr.y*=-1,kr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),g.envMapRotation.value.setFromMatrix4(QM.makeRotationFromEuler(kr)),g.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap&&(g.lightMap.value=v.lightMap,g.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,g.lightMapTransform)),v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,g.aoMapTransform))}function f(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform))}function d(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function p(g,v,b,P){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*b,g.scale.value=P*.5,v.map&&(g.map.value=v.map,n(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function m(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,n(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,n(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function x(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function _(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function y(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,g.roughnessMapTransform)),v.envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function S(g,v,b){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Tn&&g.clearcoatNormalScale.value.negate())),v.dispersion>0&&(g.dispersion.value=v.dispersion),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,g.specularIntensityMapTransform))}function E(g,v){v.matcap&&(g.matcap.value=v.matcap)}function T(g,v){const b=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function eE(s,e,n,r){let o={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,P){const N=P.program;r.uniformBlockBinding(b,N)}function m(b,P){let N=o[b.id];N===void 0&&(E(b),N=x(b),o[b.id]=N,b.addEventListener("dispose",g));const q=P.program;r.updateUBOMapping(b,q);const F=e.render.frame;c[b.id]!==F&&(y(b),c[b.id]=F)}function x(b){const P=_();b.__bindingPointIndex=P;const N=s.createBuffer(),q=b.__size,F=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,q,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,N),N}function _(){for(let b=0;b<d;b++)if(f.indexOf(b)===-1)return f.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(b){const P=o[b.id],N=b.uniforms,q=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,U=N.length;F<U;F++){const $=Array.isArray(N[F])?N[F]:[N[F]];for(let L=0,R=$.length;L<R;L++){const H=$[L];if(S(H,F,L,q)===!0){const le=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let de=0;de<Q.length;de++){const ae=Q[de],ce=T(ae);typeof ae=="number"||typeof ae=="boolean"?(H.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,le+fe,H.__data)):ae.isMatrix3?(H.__data[0]=ae.elements[0],H.__data[1]=ae.elements[1],H.__data[2]=ae.elements[2],H.__data[3]=0,H.__data[4]=ae.elements[3],H.__data[5]=ae.elements[4],H.__data[6]=ae.elements[5],H.__data[7]=0,H.__data[8]=ae.elements[6],H.__data[9]=ae.elements[7],H.__data[10]=ae.elements[8],H.__data[11]=0):(ae.toArray(H.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,le,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(b,P,N,q){const F=b.value,U=P+"_"+N;if(q[U]===void 0)return typeof F=="number"||typeof F=="boolean"?q[U]=F:q[U]=F.clone(),!0;{const $=q[U];if(typeof F=="number"||typeof F=="boolean"){if($!==F)return q[U]=F,!0}else if($.equals(F)===!1)return $.copy(F),!0}return!1}function E(b){const P=b.uniforms;let N=0;const q=16;for(let U=0,$=P.length;U<$;U++){const L=Array.isArray(P[U])?P[U]:[P[U]];for(let R=0,H=L.length;R<H;R++){const le=L[R],Q=Array.isArray(le.value)?le.value:[le.value];for(let fe=0,de=Q.length;fe<de;fe++){const ae=Q[fe],ce=T(ae),B=N%q;B!==0&&q-B<ce.boundary&&(N+=q-B),le.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=N,N+=ce.storage}}}const F=N%q;return F>0&&(N+=q-F),b.__size=N,b.__cache={},this}function T(b){const P={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(P.boundary=4,P.storage=4):b.isVector2?(P.boundary=8,P.storage=8):b.isVector3||b.isColor?(P.boundary=16,P.storage=12):b.isVector4?(P.boundary=16,P.storage=16):b.isMatrix3?(P.boundary=48,P.storage=48):b.isMatrix4?(P.boundary=64,P.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),P}function g(b){const P=b.target;P.removeEventListener("dispose",g);const N=f.indexOf(P.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete c[P.id]}function v(){for(const b in o)s.deleteBuffer(o[b]);f=[],o={},c={}}return{bind:p,update:m,dispose:v}}class tE{constructor(e={}){const{canvas:n=jv(),context:r=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const S=new Uint32Array(4),E=new Int32Array(4);let T=null,g=null;const v=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=mr,this.toneMappingExposure=1;const P=this;let N=!1,q=0,F=0,U=null,$=-1,L=null;const R=new rn,H=new rn;let le=null;const Q=new Tt(0);let fe=0,de=n.width,ae=n.height,ce=1,B=null,he=null;const oe=new rn(0,0,de,ae),O=new rn(0,0,de,ae);let ie=!1;const Le=new Jm;let Z=!1,W=!1;const se=new jt,ue=new re,Ce=new rn,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function gt(){return U===null?ce:1}let k=r;function At(C,j){return n.getContext(C,j)}try{const C={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Cd}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",Te,!1),k===null){const j="webgl2";if(k=At(j,C),k===null)throw At(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let dt,mt,Ge,Ct,Je,qe,I,A,ne,xe,Se,ve,Xe,Pe,Fe,st,Me,De,ft,tt,Oe,rt,at,Rt;function G(){dt=new lS(k),dt.init(),rt=new jM(k,dt),mt=new tS(k,dt,e,rt),Ge=new VM(k),Ct=new dS(k),Je=new RM,qe=new WM(k,dt,Ge,Je,mt,rt,Ct),I=new iS(P),A=new oS(P),ne=new v_(k),at=new Jy(k,ne),xe=new cS(k,ne,Ct,at),Se=new hS(k,xe,ne,Ct),ft=new fS(k,mt,qe),st=new nS(Je),ve=new CM(P,I,A,dt,mt,at,st),Xe=new JM(P,Je),Pe=new PM,Fe=new FM(dt),De=new Qy(P,I,A,Ge,Se,y,p),Me=new HM(P,Se,mt),Rt=new eE(k,Ct,mt,Ge),tt=new eS(k,dt,Ct),Oe=new uS(k,dt,Ct),Ct.programs=ve.programs,P.capabilities=mt,P.extensions=dt,P.properties=Je,P.renderLists=Pe,P.shadowMap=Me,P.state=Ge,P.info=Ct}G();const we=new ZM(P,k);this.xr=we,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(C){C!==void 0&&(ce=C,this.setSize(de,ae,!1))},this.getSize=function(C){return C.set(de,ae)},this.setSize=function(C,j,J=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}de=C,ae=j,n.width=Math.floor(C*ce),n.height=Math.floor(j*ce),J===!0&&(n.style.width=C+"px",n.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(de*ce,ae*ce).floor()},this.setDrawingBufferSize=function(C,j,J){de=C,ae=j,ce=J,n.width=Math.floor(C*J),n.height=Math.floor(j*J),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(oe)},this.setViewport=function(C,j,J,te){C.isVector4?oe.set(C.x,C.y,C.z,C.w):oe.set(C,j,J,te),Ge.viewport(R.copy(oe).multiplyScalar(ce).round())},this.getScissor=function(C){return C.copy(O)},this.setScissor=function(C,j,J,te){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,j,J,te),Ge.scissor(H.copy(O).multiplyScalar(ce).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(C){Ge.setScissorTest(ie=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){he=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(C=!0,j=!0,J=!0){let te=0;if(C){let X=!1;if(U!==null){const Ae=U.texture.format;X=Ae===Dd||Ae===Ld||Ae===Nd}if(X){const Ae=U.texture.type,Ie=Ae===Ii||Ae===Xr||Ae===Na||Ae===Bs||Ae===bd||Ae===Pd,Be=De.getClearColor(),Re=De.getClearAlpha(),et=Be.r,Qe=Be.g,Ye=Be.b;Ie?(S[0]=et,S[1]=Qe,S[2]=Ye,S[3]=Re,k.clearBufferuiv(k.COLOR,0,S)):(E[0]=et,E[1]=Qe,E[2]=Ye,E[3]=Re,k.clearBufferiv(k.COLOR,0,E))}else te|=k.COLOR_BUFFER_BIT}j&&(te|=k.DEPTH_BUFFER_BIT),J&&(te|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Pe.dispose(),Fe.dispose(),Je.dispose(),I.dispose(),A.dispose(),Se.dispose(),at.dispose(),Rt.dispose(),ve.dispose(),we.dispose(),we.removeEventListener("sessionstart",bn),we.removeEventListener("sessionend",Oi),Yn.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=Ct.autoReset,j=Me.enabled,J=Me.autoUpdate,te=Me.needsUpdate,X=Me.type;G(),Ct.autoReset=C,Me.enabled=j,Me.autoUpdate=J,Me.needsUpdate=te,Me.type=X}function Te(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const j=C.target;j.removeEventListener("dispose",Ze),ht(j)}function ht(C){Ot(C),Je.remove(C)}function Ot(C){const j=Je.get(C).programs;j!==void 0&&(j.forEach(function(J){ve.releaseProgram(J)}),C.isShaderMaterial&&ve.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,J,te,X,Ae){j===null&&(j=be);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Be=Il(C,j,J,te,X);Ge.setMaterial(te,Ie);let Re=J.index,et=1;if(te.wireframe===!0){if(Re=xe.getWireframeAttribute(J),Re===void 0)return;et=2}const Qe=J.drawRange,Ye=J.attributes.position;let pt=Qe.start*et,Ut=(Qe.start+Qe.count)*et;Ae!==null&&(pt=Math.max(pt,Ae.start*et),Ut=Math.min(Ut,(Ae.start+Ae.count)*et)),Re!==null?(pt=Math.max(pt,0),Ut=Math.min(Ut,Re.count)):Ye!=null&&(pt=Math.max(pt,0),Ut=Math.min(Ut,Ye.count));const Nt=Ut-pt;if(Nt<0||Nt===1/0)return;at.setup(X,te,Be,J,Re);let Zt,ot=tt;if(Re!==null&&(Zt=ne.get(Re),ot=Oe,ot.setIndex(Zt)),X.isMesh)te.wireframe===!0?(Ge.setLineWidth(te.wireframeLinewidth*gt()),ot.setMode(k.LINES)):ot.setMode(k.TRIANGLES);else if(X.isLine){let je=te.linewidth;je===void 0&&(je=1),Ge.setLineWidth(je*gt()),X.isLineSegments?ot.setMode(k.LINES):X.isLineLoop?ot.setMode(k.LINE_LOOP):ot.setMode(k.LINE_STRIP)}else X.isPoints?ot.setMode(k.POINTS):X.isSprite&&ot.setMode(k.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const je=X._multiDrawStarts,Mt=X._multiDrawCounts,xt=X._multiDrawCount,Pn=Re?ne.get(Re).bytesPerElement:1,Bi=Je.get(te).currentProgram.getUniforms();for(let Qt=0;Qt<xt;Qt++)Bi.setValue(k,"_gl_DrawID",Qt),ot.render(je[Qt]/Pn,Mt[Qt])}else if(X.isInstancedMesh)ot.renderInstances(pt,Nt,X.count);else if(J.isInstancedBufferGeometry){const je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Mt=Math.min(J.instanceCount,je);ot.renderInstances(pt,Nt,Mt)}else ot.render(pt,Nt)};function Vt(C,j,J){C.transparent===!0&&C.side===Pi&&C.forceSinglePass===!1?(C.side=Tn,C.needsUpdate=!0,zi(C,j,J),C.side=gr,C.needsUpdate=!0,zi(C,j,J),C.side=Pi):zi(C,j,J)}this.compile=function(C,j,J=null){J===null&&(J=C),g=Fe.get(J),g.init(j),b.push(g),J.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),C!==J&&C.traverseVisible(function(X){X.isLight&&X.layers.test(j.layers)&&(g.pushLight(X),X.castShadow&&g.pushShadow(X))}),g.setupLights();const te=new Set;return C.traverse(function(X){const Ae=X.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const Be=Ae[Ie];Vt(Be,J,X),te.add(Be)}else Vt(Ae,J,X),te.add(Ae)}),b.pop(),g=null,te},this.compileAsync=function(C,j,J=null){const te=this.compile(C,j,J);return new Promise(X=>{function Ae(){if(te.forEach(function(Ie){Je.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){X(C);return}setTimeout(Ae,10)}dt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let vt=null;function Rn(C){vt&&vt(C)}function bn(){Yn.stop()}function Oi(){Yn.start()}const Yn=new eg;Yn.setAnimationLoop(Rn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(C){vt=C,we.setAnimationLoop(C),C===null?Yn.stop():Yn.start()},we.addEventListener("sessionstart",bn),we.addEventListener("sessionend",Oi),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(j),j=we.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,j,U),g=Fe.get(C,b.length),g.init(j),b.push(g),se.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Le.setFromProjectionMatrix(se),W=this.localClippingEnabled,Z=st.init(this.clippingPlanes,W),T=Pe.get(C,v.length),T.init(),v.push(T),we.enabled===!0&&we.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&hi(Ae,j,-1/0,P.sortObjects)}hi(C,j,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(B,he),We=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,We&&De.addToRenderList(T,C),this.info.render.frame++,Z===!0&&st.beginShadows();const J=g.state.shadowsArray;Me.render(J,C,j),Z===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=T.opaque,X=T.transmissive;if(g.setupLights(),j.isArrayCamera){const Ae=j.cameras;if(X.length>0)for(let Ie=0,Be=Ae.length;Ie<Be;Ie++){const Re=Ae[Ie];ki(te,X,C,Re)}We&&De.render(C);for(let Ie=0,Be=Ae.length;Ie<Be;Ie++){const Re=Ae[Ie];ka(T,C,Re,Re.viewport)}}else X.length>0&&ki(te,X,C,j),We&&De.render(C),ka(T,C,j);U!==null&&(qe.updateMultisampleRenderTarget(U),qe.updateRenderTargetMipmap(U)),C.isScene===!0&&C.onAfterRender(P,C,j),at.resetDefaultState(),$=-1,L=null,b.pop(),b.length>0?(g=b[b.length-1],Z===!0&&st.setGlobalState(P.clippingPlanes,g.state.camera)):g=null,v.pop(),v.length>0?T=v[v.length-1]:T=null};function hi(C,j,J,te){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Le.intersectsSprite(C)){te&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(se);const Ie=Se.update(C),Be=C.material;Be.visible&&T.push(C,Ie,Be,J,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Le.intersectsObject(C))){const Ie=Se.update(C),Be=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ce.copy(Ie.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(se)),Array.isArray(Be)){const Re=Ie.groups;for(let et=0,Qe=Re.length;et<Qe;et++){const Ye=Re[et],pt=Be[Ye.materialIndex];pt&&pt.visible&&T.push(C,Ie,pt,J,Ce.z,Ye)}}else Be.visible&&T.push(C,Ie,Be,J,Ce.z,null)}}const Ae=C.children;for(let Ie=0,Be=Ae.length;Ie<Be;Ie++)hi(Ae[Ie],j,J,te)}function ka(C,j,J,te){const X=C.opaque,Ae=C.transmissive,Ie=C.transparent;g.setupLightsView(J),Z===!0&&st.setGlobalState(P.clippingPlanes,J),te&&Ge.viewport(R.copy(te)),X.length>0&&pi(X,j,J),Ae.length>0&&pi(Ae,j,J),Ie.length>0&&pi(Ie,j,J),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function ki(C,j,J,te){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[te.id]===void 0&&(g.state.transmissionRenderTarget[te.id]=new Yr(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?La:Ii,minFilter:Wr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Ae=g.state.transmissionRenderTarget[te.id],Ie=te.viewport||R;Ae.setSize(Ie.z,Ie.w);const Be=P.getRenderTarget();P.setRenderTarget(Ae),P.getClearColor(Q),fe=P.getClearAlpha(),fe<1&&P.setClearColor(16777215,.5),We?De.render(J):P.clear();const Re=P.toneMapping;P.toneMapping=mr;const et=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),g.setupLightsView(te),Z===!0&&st.setGlobalState(P.clippingPlanes,te),pi(C,J,te),qe.updateMultisampleRenderTarget(Ae),qe.updateRenderTargetMipmap(Ae),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ye=0,pt=j.length;Ye<pt;Ye++){const Ut=j[Ye],Nt=Ut.object,Zt=Ut.geometry,ot=Ut.material,je=Ut.group;if(ot.side===Pi&&Nt.layers.test(te.layers)){const Mt=ot.side;ot.side=Tn,ot.needsUpdate=!0,xr(Nt,J,te,Zt,ot,je),ot.side=Mt,ot.needsUpdate=!0,Qe=!0}}Qe===!0&&(qe.updateMultisampleRenderTarget(Ae),qe.updateRenderTargetMipmap(Ae))}P.setRenderTarget(Be),P.setClearColor(Q,fe),et!==void 0&&(te.viewport=et),P.toneMapping=Re}function pi(C,j,J){const te=j.isScene===!0?j.overrideMaterial:null;for(let X=0,Ae=C.length;X<Ae;X++){const Ie=C[X],Be=Ie.object,Re=Ie.geometry,et=te===null?Ie.material:te,Qe=Ie.group;Be.layers.test(J.layers)&&xr(Be,j,J,Re,et,Qe)}}function xr(C,j,J,te,X,Ae){C.onBeforeRender(P,j,J,te,X,Ae),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.transparent===!0&&X.side===Pi&&X.forceSinglePass===!1?(X.side=Tn,X.needsUpdate=!0,P.renderBufferDirect(J,j,te,X,C,Ae),X.side=gr,X.needsUpdate=!0,P.renderBufferDirect(J,j,te,X,C,Ae),X.side=Pi):P.renderBufferDirect(J,j,te,X,C,Ae),C.onAfterRender(P,j,J,te,X,Ae)}function zi(C,j,J){j.isScene!==!0&&(j=be);const te=Je.get(C),X=g.state.lights,Ae=g.state.shadowsArray,Ie=X.state.version,Be=ve.getParameters(C,X.state,Ae,j,J),Re=ve.getProgramCacheKey(Be);let et=te.programs;te.environment=C.isMeshStandardMaterial?j.environment:null,te.fog=j.fog,te.envMap=(C.isMeshStandardMaterial?A:I).get(C.envMap||te.environment),te.envMapRotation=te.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",Ze),et=new Map,te.programs=et);let Qe=et.get(Re);if(Qe!==void 0){if(te.currentProgram===Qe&&te.lightsStateVersion===Ie)return Ba(C,Be),Qe}else Be.uniforms=ve.getUniforms(C),C.onBeforeCompile(Be,P),Qe=ve.acquireProgram(Be,Re),et.set(Re,Qe),te.uniforms=Be.uniforms;const Ye=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=st.uniform),Ba(C,Be),te.needsLights=Ha(C),te.lightsStateVersion=Ie,te.needsLights&&(Ye.ambientLightColor.value=X.state.ambient,Ye.lightProbe.value=X.state.probe,Ye.directionalLights.value=X.state.directional,Ye.directionalLightShadows.value=X.state.directionalShadow,Ye.spotLights.value=X.state.spot,Ye.spotLightShadows.value=X.state.spotShadow,Ye.rectAreaLights.value=X.state.rectArea,Ye.ltc_1.value=X.state.rectAreaLTC1,Ye.ltc_2.value=X.state.rectAreaLTC2,Ye.pointLights.value=X.state.point,Ye.pointLightShadows.value=X.state.pointShadow,Ye.hemisphereLights.value=X.state.hemi,Ye.directionalShadowMap.value=X.state.directionalShadowMap,Ye.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ye.spotShadowMap.value=X.state.spotShadowMap,Ye.spotLightMatrix.value=X.state.spotLightMatrix,Ye.spotLightMap.value=X.state.spotLightMap,Ye.pointShadowMap.value=X.state.pointShadowMap,Ye.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=Qe,te.uniformsList=null,Qe}function za(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Ml.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function Ba(C,j){const J=Je.get(C);J.outputColorSpace=j.outputColorSpace,J.batching=j.batching,J.batchingColor=j.batchingColor,J.instancing=j.instancing,J.instancingColor=j.instancingColor,J.instancingMorph=j.instancingMorph,J.skinning=j.skinning,J.morphTargets=j.morphTargets,J.morphNormals=j.morphNormals,J.morphColors=j.morphColors,J.morphTargetsCount=j.morphTargetsCount,J.numClippingPlanes=j.numClippingPlanes,J.numIntersection=j.numClipIntersection,J.vertexAlphas=j.vertexAlphas,J.vertexTangents=j.vertexTangents,J.toneMapping=j.toneMapping}function Il(C,j,J,te,X){j.isScene!==!0&&(j=be),qe.resetTextureUnits();const Ae=j.fog,Ie=te.isMeshStandardMaterial?j.environment:null,Be=U===null?P.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_r,Re=(te.isMeshStandardMaterial?A:I).get(te.envMap||Ie),et=te.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Qe=!!J.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ye=!!J.morphAttributes.position,pt=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color;let Nt=mr;te.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Nt=P.toneMapping);const Zt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=Zt!==void 0?Zt.length:0,je=Je.get(te),Mt=g.state.lights;if(Z===!0&&(W===!0||C!==L)){const gn=C===L&&te.id===$;st.setState(te,C,gn)}let xt=!1;te.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Mt.state.version||je.outputColorSpace!==Be||X.isBatchedMesh&&je.batching===!1||!X.isBatchedMesh&&je.batching===!0||X.isBatchedMesh&&je.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&je.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&je.instancing===!1||!X.isInstancedMesh&&je.instancing===!0||X.isSkinnedMesh&&je.skinning===!1||!X.isSkinnedMesh&&je.skinning===!0||X.isInstancedMesh&&je.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&je.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&je.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&je.instancingMorph===!1&&X.morphTexture!==null||je.envMap!==Re||te.fog===!0&&je.fog!==Ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==st.numPlanes||je.numIntersection!==st.numIntersection)||je.vertexAlphas!==et||je.vertexTangents!==Qe||je.morphTargets!==Ye||je.morphNormals!==pt||je.morphColors!==Ut||je.toneMapping!==Nt||je.morphTargetsCount!==ot)&&(xt=!0):(xt=!0,je.__version=te.version);let Pn=je.currentProgram;xt===!0&&(Pn=zi(te,j,X));let Bi=!1,Qt=!1,Hi=!1;const bt=Pn.getUniforms(),Nn=je.uniforms;if(Ge.useProgram(Pn.program)&&(Bi=!0,Qt=!0,Hi=!0),te.id!==$&&($=te.id,Qt=!0),Bi||L!==C){bt.setValue(k,"projectionMatrix",C.projectionMatrix),bt.setValue(k,"viewMatrix",C.matrixWorldInverse);const gn=bt.map.cameraPosition;gn!==void 0&&gn.setValue(k,ue.setFromMatrixPosition(C.matrixWorld)),mt.logarithmicDepthBuffer&&bt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&bt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,Qt=!0,Hi=!0)}if(X.isSkinnedMesh){bt.setOptional(k,X,"bindMatrix"),bt.setOptional(k,X,"bindMatrixInverse");const gn=X.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),bt.setValue(k,"boneTexture",gn.boneTexture,qe))}X.isBatchedMesh&&(bt.setOptional(k,X,"batchingTexture"),bt.setValue(k,"batchingTexture",X._matricesTexture,qe),bt.setOptional(k,X,"batchingIdTexture"),bt.setValue(k,"batchingIdTexture",X._indirectTexture,qe),bt.setOptional(k,X,"batchingColorTexture"),X._colorsTexture!==null&&bt.setValue(k,"batchingColorTexture",X._colorsTexture,qe));const js=J.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&ft.update(X,J,Pn),(Qt||je.receiveShadow!==X.receiveShadow)&&(je.receiveShadow=X.receiveShadow,bt.setValue(k,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Nn.envMap.value=Re,Nn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&j.environment!==null&&(Nn.envMapIntensity.value=j.environmentIntensity),Qt&&(bt.setValue(k,"toneMappingExposure",P.toneMappingExposure),je.needsLights&&mi(Nn,Hi),Ae&&te.fog===!0&&Xe.refreshFogUniforms(Nn,Ae),Xe.refreshMaterialUniforms(Nn,te,ce,ae,g.state.transmissionRenderTarget[C.id]),Ml.upload(k,za(je),Nn,qe)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ml.upload(k,za(je),Nn,qe),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&bt.setValue(k,"center",X.center),bt.setValue(k,"modelViewMatrix",X.modelViewMatrix),bt.setValue(k,"normalMatrix",X.normalMatrix),bt.setValue(k,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const gn=te.uniformsGroups;for(let yr=0,Va=gn.length;yr<Va;yr++){const qr=gn[yr];Rt.update(qr,Pn),Rt.bind(qr,Pn)}}return Pn}function mi(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Ha(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(C,j,J){Je.get(C.texture).__webglTexture=j,Je.get(C.depthTexture).__webglTexture=J;const te=Je.get(C);te.__hasExternalTextures=!0,te.__autoAllocateDepthBuffer=J===void 0,te.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),te.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const J=Je.get(C);J.__webglFramebuffer=j,J.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,J=0){U=C,q=j,F=J;let te=!0,X=null,Ae=!1,Ie=!1;if(C){const Re=Je.get(C);Re.__useDefaultFramebuffer!==void 0?(Ge.bindFramebuffer(k.FRAMEBUFFER,null),te=!1):Re.__webglFramebuffer===void 0?qe.setupRenderTarget(C):Re.__hasExternalTextures&&qe.rebindTextures(C,Je.get(C.texture).__webglTexture,Je.get(C.depthTexture).__webglTexture);const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ie=!0);const Qe=Je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[j])?X=Qe[j][J]:X=Qe[j],Ae=!0):C.samples>0&&qe.useMultisampledRTT(C)===!1?X=Je.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?X=Qe[J]:X=Qe,R.copy(C.viewport),H.copy(C.scissor),le=C.scissorTest}else R.copy(oe).multiplyScalar(ce).floor(),H.copy(O).multiplyScalar(ce).floor(),le=ie;if(Ge.bindFramebuffer(k.FRAMEBUFFER,X)&&te&&Ge.drawBuffers(C,X),Ge.viewport(R),Ge.scissor(H),Ge.setScissorTest(le),Ae){const Re=Je.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Re.__webglTexture,J)}else if(Ie){const Re=Je.get(C.texture),et=j||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.__webglTexture,J||0,et)}$=-1},this.readRenderTargetPixels=function(C,j,J,te,X,Ae,Ie){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){Ge.bindFramebuffer(k.FRAMEBUFFER,Be);try{const Re=C.texture,et=Re.format,Qe=Re.type;if(!mt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-te&&J>=0&&J<=C.height-X&&k.readPixels(j,J,te,X,rt.convert(et),rt.convert(Qe),Ae)}finally{const Re=U!==null?Je.get(U).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(C,j,J,te,X,Ae,Ie){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){Ge.bindFramebuffer(k.FRAMEBUFFER,Be);try{const Re=C.texture,et=Re.format,Qe=Re.type;if(!mt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-te&&J>=0&&J<=C.height-X){const Ye=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.bufferData(k.PIXEL_PACK_BUFFER,Ae.byteLength,k.STREAM_READ),k.readPixels(j,J,te,X,rt.convert(et),rt.convert(Qe),0),k.flush();const pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);await Xv(k,pt,4);try{k.bindBuffer(k.PIXEL_PACK_BUFFER,Ye),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ae)}finally{k.deleteBuffer(Ye),k.deleteSync(pt)}return Ae}}finally{const Re=U!==null?Je.get(U).__webglFramebuffer:null;Ge.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(C,j=null,J=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const te=Math.pow(2,-J),X=Math.floor(C.image.width*te),Ae=Math.floor(C.image.height*te),Ie=j!==null?j.x:0,Be=j!==null?j.y:0;qe.setTexture2D(C,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Ie,Be,X,Ae),Ge.unbindTexture()},this.copyTextureToTexture=function(C,j,J=null,te=null,X=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),te=arguments[0]||null,C=arguments[1],j=arguments[2],X=arguments[3]||0,J=null);let Ae,Ie,Be,Re,et,Qe;J!==null?(Ae=J.max.x-J.min.x,Ie=J.max.y-J.min.y,Be=J.min.x,Re=J.min.y):(Ae=C.image.width,Ie=C.image.height,Be=0,Re=0),te!==null?(et=te.x,Qe=te.y):(et=0,Qe=0);const Ye=rt.convert(j.format),pt=rt.convert(j.type);qe.setTexture2D(j,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const Ut=k.getParameter(k.UNPACK_ROW_LENGTH),Nt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Zt=k.getParameter(k.UNPACK_SKIP_PIXELS),ot=k.getParameter(k.UNPACK_SKIP_ROWS),je=k.getParameter(k.UNPACK_SKIP_IMAGES),Mt=C.isCompressedTexture?C.mipmaps[X]:C.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Be),k.pixelStorei(k.UNPACK_SKIP_ROWS,Re),C.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,X,et,Qe,Ae,Ie,Ye,pt,Mt.data):C.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,X,et,Qe,Mt.width,Mt.height,Ye,Mt.data):k.texSubImage2D(k.TEXTURE_2D,X,et,Qe,Ae,Ie,Ye,pt,Mt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ut),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Zt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ot),k.pixelStorei(k.UNPACK_SKIP_IMAGES,je),X===0&&j.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,j,J=null,te=null,X=0){C.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,te=arguments[1]||null,C=arguments[2],j=arguments[3],X=arguments[4]||0);let Ae,Ie,Be,Re,et,Qe,Ye,pt,Ut;const Nt=C.isCompressedTexture?C.mipmaps[X]:C.image;J!==null?(Ae=J.max.x-J.min.x,Ie=J.max.y-J.min.y,Be=J.max.z-J.min.z,Re=J.min.x,et=J.min.y,Qe=J.min.z):(Ae=Nt.width,Ie=Nt.height,Be=Nt.depth,Re=0,et=0,Qe=0),te!==null?(Ye=te.x,pt=te.y,Ut=te.z):(Ye=0,pt=0,Ut=0);const Zt=rt.convert(j.format),ot=rt.convert(j.type);let je;if(j.isData3DTexture)qe.setTexture3D(j,0),je=k.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)qe.setTexture2DArray(j,0),je=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const Mt=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Pn=k.getParameter(k.UNPACK_SKIP_PIXELS),Bi=k.getParameter(k.UNPACK_SKIP_ROWS),Qt=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Nt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Nt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Re),k.pixelStorei(k.UNPACK_SKIP_ROWS,et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qe),C.isDataTexture||C.isData3DTexture?k.texSubImage3D(je,X,Ye,pt,Ut,Ae,Ie,Be,Zt,ot,Nt.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(je,X,Ye,pt,Ut,Ae,Ie,Be,Zt,Nt.data):k.texSubImage3D(je,X,Ye,pt,Ut,Ae,Ie,Be,Zt,ot,Nt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Mt),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Bi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Qt),X===0&&j.generateMipmaps&&k.generateMipmap(je),Ge.unbindTexture()},this.initRenderTarget=function(C){Je.get(C).__webglFramebuffer===void 0&&qe.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?qe.setTextureCube(C,0):C.isData3DTexture?qe.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?qe.setTexture2DArray(C,0):qe.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){q=0,F=0,U=null,Ge.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Id?"display-p3":"srgb",n.unpackColorSpace=wt.workingColorSpace===Pl?"display-p3":"srgb"}}class nE extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ui,this.environmentIntensity=1,this.environmentRotation=new Ui,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ag extends Fa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const um=new jt,Td=new Wm,pl=new Nl,ml=new re;class iE extends Cn{constructor(e=new Fi,n=new ag){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(o),pl.radius+=c,e.ray.intersectsSphere(pl)===!1)return;um.copy(o).invert(),Td.copy(e.ray).applyMatrix4(um);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,_=r.attributes.position;if(m!==null){const y=Math.max(0,f.start),S=Math.min(m.count,f.start+f.count);for(let E=y,T=S;E<T;E++){const g=m.getX(E);ml.fromBufferAttribute(_,g),dm(ml,g,p,o,e,n,this)}}else{const y=Math.max(0,f.start),S=Math.min(_.count,f.start+f.count);for(let E=y,T=S;E<T;E++)ml.fromBufferAttribute(_,E),dm(ml,E,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function dm(s,e,n,r,o,c,f){const d=Td.distanceSqToPoint(s);if(d<n){const p=new re;Td.closestPointToPoint(s,p),p.applyMatrix4(r);const m=o.ray.origin.distanceTo(p);if(m<o.near||m>o.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,object:f})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);const gl={"2025-01-14":"Makar Sankranti","2025-01-26":"Republic Day","2025-03-14":"Holi","2025-03-31":"Eid-ul-Fitr","2025-04-14":"Dr. Ambedkar Jayanti","2025-04-17":"Mahavir Jayanti","2025-04-18":"Good Friday","2025-05-01":"May Day","2025-05-12":"Buddha Purnima","2025-06-07":"Eid-ul-Adha","2025-07-07":"Muharram","2025-08-15":"Independence Day","2025-08-26":"Janmashtami","2025-09-06":"Ganesh Chaturthi","2025-10-02":"Gandhi Jayanti","2025-10-03":"Dussehra","2025-10-21":"Diwali","2025-11-05":"Guru Nanak Jayanti","2025-12-25":"Christmas Day"},qt=({path:s,className:e="w-6 h-6"})=>M.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:e,children:M.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:s})}),rE=()=>M.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2",style:{borderColor:"var(--primary)"}}),sE=()=>M.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center z-50",children:M.jsxs("div",{className:"text-center space-y-6",children:[M.jsxs("div",{className:"relative",children:[M.jsx("div",{className:"w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mx-auto"}),M.jsx("div",{className:"absolute inset-0 w-20 h-20 border-4 border-transparent border-r-indigo-500 rounded-full animate-spin mx-auto",style:{animationDirection:"reverse",animationDuration:"1.5s"}})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("h1",{className:"text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent",children:"Cosmic Hub"}),M.jsx("p",{className:"text-slate-400 text-sm",children:"Initializing your productivity universe..."})]})]})}),fm=()=>{const[s,e]=it.useState("");return it.useEffect(()=>{const n=["The best way to predict the future is to create it.","Success is not final, failure is not fatal: it is the courage to continue that counts.","Believe you can and you're halfway there.","The secret of getting ahead is getting started.","It's hard to beat a person who never gives up."];e(n[Math.floor(Math.random()*n.length)])},[]),M.jsx("div",{className:"text-center p-4 rounded-lg mb-8 t-surface",children:M.jsxs("p",{className:"text-lg italic t-muted",children:['"',s,'"']})})},aE=()=>{const s=new(window.AudioContext||window.webkitAudioContext);if(!s)return;const e=(n,r,o)=>{const c=s.createOscillator(),f=s.createGain();c.connect(f),f.connect(s.destination),c.type="triangle",c.frequency.setValueAtTime(n,s.currentTime),f.gain.setValueAtTime(.5,s.currentTime),c.start(s.currentTime+r),f.gain.exponentialRampToValueAtTime(.001,s.currentTime+r+o),c.stop(s.currentTime+r+o)};e(523.25,0,.15),e(659.25,.15,.2)};function oE(){const[s,e]=it.useState([]),[n,r]=it.useState([]),[o,c]=it.useState({}),[f,d]=it.useState([]),[p,m]=it.useState([]),[x,_]=it.useState("gotham"),[y,S]=it.useState(""),[E,T]=it.useState(""),[g,v]=it.useState({text:"",deadline:"",tag:"",priority:"medium"}),[b,P]=it.useState({duration:"",text:""}),[N,q]=it.useState(!0),[F,U]=it.useState("missions"),[$,L]=it.useState(!1),[R,H]=it.useState(!0),le=it.useRef(null);it.useEffect(()=>{const W=setTimeout(()=>{H(!1)},2e3);try{console.log("Attempting to load data...");const se=["cosmic-hub-data-v3","cosmic-hub-data-v2","cosmic-hub-data"];let ue=null,Ce=null;for(const be of se){const We=localStorage.getItem(be);if(We){ue=We,Ce=be,console.log(`Data found from source: ${Ce}`);break}console.log(`No data found for key: ${be}`)}if(ue){const be=JSON.parse(ue),We=(be.goals||[]).map(gt=>({...gt,accomplishments:gt.accomplishments||[]}));e(We),r(be.schedule||[]),c(be.events||{}),d(be.habits||[]),m(be.quickNotes||[]),_(be.theme||localStorage.getItem("cosmic-theme")||"gotham"),console.log("Data loaded and migrated successfully.")}else console.log("No saved data found in any known local storage key."),_(localStorage.getItem("cosmic-theme")||"gotham")}catch(se){console.error("Failed to load or migrate data from local storage",se),_(localStorage.getItem("cosmic-theme")||"gotham")}return q(!1),()=>clearTimeout(W)},[]),it.useEffect(()=>{document.documentElement.dataset.theme=x;try{localStorage.setItem("cosmic-theme",x)}catch{}},[x]),it.useEffect(()=>{if(!N)try{const W=JSON.stringify({goals:s,schedule:n,events:o,habits:f,quickNotes:p,theme:x});localStorage.setItem("cosmic-hub-data-v3",W)}catch(W){console.error("Failed to save data",W)}},[s,n,o,f,p,x,N]);const Q=()=>{aE(),L(!0)};it.useEffect(()=>{const W=setInterval(()=>{r(se=>se.map(ue=>ue.isActive&&ue.secondsLeft===1?(Q(),{...ue,secondsLeft:0,isActive:!1,completed:!0}):ue.isActive&&ue.secondsLeft>0?{...ue,secondsLeft:ue.secondsLeft-1}:ue))},1e3);return()=>clearInterval(W)},[]);const fe=W=>{if(W.preventDefault(),g.text.trim()){const se={id:Date.now(),text:g.text,subgoals:[],streak:0,lastCompleted:null,link:"",deadline:g.deadline,dateCreated:new Date().toISOString(),accomplishments:[],tag:g.tag||"",priority:g.priority||"medium",timeSpent:0};e(ue=>[...ue,se]),v({text:"",deadline:"",tag:"",priority:"medium"})}},de=(W,se)=>{e(s.map(ue=>ue.id===W?{...ue,...se}:ue))},ae=W=>e(s.filter(se=>se.id!==W)),ce=W=>{if(W.preventDefault(),b.text.trim()&&b.duration>0){const se={...b,id:Date.now(),completed:!1,isActive:!1,secondsLeft:b.duration*60};r([...n,se].sort((ue,Ce)=>ue.duration-Ce.duration)),P({duration:"",text:""})}},B=W=>{r(n.map(se=>se.id===W?{...se,isActive:!se.isActive}:{...se,isActive:!1}))},he=W=>r(n.filter(se=>se.id!==W)),oe=()=>r(n.filter(W=>!W.completed));if(it.useEffect(()=>{if(N)return;let W,se,ue,Ce;const be=le.current;if(!be||be.children.length>0)return;W=new nE,se=new jn(60,window.innerWidth/window.innerHeight,1,1e3),se.position.z=1,se.rotation.x=Math.PI/2,ue=new tE({antialias:!0}),ue.setSize(window.innerWidth,window.innerHeight),be.appendChild(ue.domElement);const We=new Fi,gt=5e3,k=new Float32Array(gt*3);for(let qe=0;qe<gt*3;qe++)k[qe]=(Math.random()-.5)*5;We.setAttribute("position",new si(k,3));const At=new ag({size:.005,color:16777215});Ce=new iE(We,At),W.add(Ce);let dt=0,mt=0;const Ge=qe=>{dt=qe.clientX,mt=qe.clientY};document.addEventListener("mousemove",Ge);const Ct=()=>{requestAnimationFrame(Ct),Ce.rotation.y+=2e-4,se.position.y+=(mt*1e-5-se.position.y)*.1,se.position.x+=(dt*1e-5-se.position.x)*.1,ue.render(W,se)};Ct();const Je=()=>{se.aspect=window.innerWidth/window.innerHeight,se.updateProjectionMatrix(),ue.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Je),()=>{window.removeEventListener("resize",Je),document.removeEventListener("mousemove",Ge),be&&ue.domElement&&be.removeChild(ue.domElement)}},[N]),R)return M.jsx(sE,{});if(N)return M.jsx("div",{className:"min-h-screen flex justify-center items-center",style:{background:"var(--bg2)"},children:M.jsx(rE,{})});const ie=s.filter(W=>{const se=W.subgoals.length,ue=W.subgoals.filter(Ce=>Ce.completed).length;return se===0||ue<se}).filter(W=>{const se=y.trim().toLowerCase();return se?`${W.text} ${W.tag||""} ${W.priority||""}`.toLowerCase().includes(se):!0}),Le=s.filter(W=>{const se=W.subgoals.length,ue=W.subgoals.filter(Ce=>Ce.completed).length;return se>0&&ue===se}),Z={missions:"Missions",habits:"Habits",pomodoro:"Pomodoro",notes:"Notes",calendar:"Calendar",logbook:"Logbook",dashboard:"Dashboard",analytics:"Analytics"}[F]||"Cosmic Hub";return M.jsxs(M.Fragment,{children:[M.jsx("div",{ref:le,className:"fixed top-0 left-0 w-full h-full -z-20"}),M.jsx("div",{className:"orbital-grid"}),M.jsxs("div",{className:"min-h-screen font-sans app-shell",children:[M.jsxs("div",{className:"hidden md:flex min-h-screen",children:[M.jsxs("aside",{className:"w-72 p-6 t-surface card-glow flex-shrink-0",children:[M.jsxs("div",{className:"mb-8",children:[M.jsx("div",{className:"text-xl font-extrabold t-gradient-text",children:"Cosmic Hub"}),M.jsx("div",{className:"text-sm t-muted-2 mt-1",children:"Plan • Focus • Win"})]}),M.jsx(mm,{currentView:F,setCurrentView:U,variant:"sidebar"}),M.jsx("div",{className:"mt-8",children:M.jsx(gm,{theme:x,setTheme:_})})]}),M.jsx("main",{className:"flex-1 p-6 lg:p-8 overflow-hidden",children:M.jsxs("div",{className:"max-w-7xl mx-auto h-full",children:[$&&M.jsx(hm,{onClose:()=>L(!1)}),M.jsx("div",{className:"flex items-center justify-between gap-4 mb-6",children:M.jsxs("div",{children:[M.jsx("p",{className:"metric-chip metric-chip--good mb-2 inline-flex items-center gap-1",children:M.jsx("span",{children:"LIVE BOARD"})}),M.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold tracking-tight",children:Z}),M.jsx("p",{className:"t-muted-2 text-sm md:text-base",children:"Stay consistent. Tiny orbits. Massive trajectory."})]})}),M.jsx("div",{className:"content-scroll pb-6",children:M.jsxs("section",{className:"t-surface card-glow p-6 lg:p-8",children:[F==="missions"&&M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"mb-8",children:M.jsx(fm,{})}),M.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-8",children:[M.jsxs("div",{className:"space-y-6",children:[M.jsxs("div",{children:[M.jsx("h2",{className:"text-2xl font-bold t-muted mb-4",children:"New Mission"}),M.jsxs("form",{onSubmit:fe,className:"space-y-4",children:[M.jsxs("div",{className:"flex flex-col lg:flex-row gap-3",children:[M.jsx("input",{type:"text",value:g.text,onChange:W=>v({...g,text:W.target.value}),placeholder:"Launch a new goal...",className:"flex-grow rounded-lg px-4 py-3 t-input t-ring text-base"}),M.jsx("input",{type:"date",value:g.deadline,onChange:W=>v({...g,deadline:W.target.value}),className:"rounded-lg px-4 py-3 t-input t-ring"}),M.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-6 py-3 font-semibold whitespace-nowrap",children:M.jsx(qt,{path:"M12 4.5v15m7.5-7.5h-15"})})]}),M.jsxs("div",{className:"flex gap-3",children:[M.jsx("input",{type:"text",value:g.tag,onChange:W=>v({...g,tag:W.target.value}),placeholder:"Tag (optional)",className:"flex-1 rounded-lg px-4 py-3 text-sm t-input t-ring"}),M.jsxs("select",{value:g.priority,onChange:W=>v({...g,priority:W.target.value}),className:"rounded-lg px-4 py-3 text-sm t-input t-ring",children:[M.jsx("option",{value:"low",children:"Low Priority"}),M.jsx("option",{value:"medium",children:"Medium Priority"}),M.jsx("option",{value:"high",children:"High Priority"}),M.jsx("option",{value:"urgent",children:"Urgent"})]})]})]})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4",children:[M.jsx("h2",{className:"text-2xl font-bold t-muted",children:"Active Missions"}),M.jsx("input",{type:"text",value:y,onChange:W=>S(W.target.value),placeholder:"Search missions...",className:"w-full lg:w-80 rounded-lg px-4 py-3 text-sm t-input t-ring"})]}),M.jsx("div",{className:"space-y-4 max-h-96 overflow-y-auto",children:ie.length===0?M.jsx("p",{className:"text-center t-muted-2 p-6 bg-gray-800/50 rounded-lg",children:"No matching missions."}):ie.map(W=>M.jsx(xm,{goal:W,updateGoal:de,deleteGoal:ae,handleMajorCompletion:Q},W.id))})]})]}),M.jsx("div",{className:"space-y-6",children:M.jsx(vm,{schedule:n,handleAddScheduleItem:ce,newScheduleItem:b,setNewScheduleItem:P,toggleTimer:B,deleteScheduleItem:he,clearCompletedSchedule:oe,plannerSearch:E,setPlannerSearch:T})})]})]}),F==="habits"&&M.jsx(Em,{habits:f,setHabits:d}),F==="pomodoro"&&M.jsx(_m,{onComplete:Q}),F==="notes"&&M.jsx(wm,{notes:p,setNotes:m}),F==="calendar"&&M.jsx(ym,{goals:s,events:o,setEvents:c}),F==="logbook"&&M.jsx(Mm,{goals:s,updateGoal:de,deleteGoal:ae}),F==="dashboard"&&M.jsx(Tm,{goals:s,habits:f,schedule:n}),F==="analytics"&&M.jsx(Sm,{completedGoals:Le})]})})]})})]}),M.jsxs("div",{className:"md:hidden min-h-screen pb-24 app-shell",children:[M.jsx("div",{className:"px-4 py-4",children:M.jsx("div",{className:"t-surface card-glow p-4 rounded-2xl",children:M.jsxs("div",{className:"flex items-center justify-between gap-3",children:[M.jsxs("div",{className:"min-w-0 flex-1",children:[M.jsx("div",{className:"text-lg font-extrabold t-gradient-text truncate",children:"Cosmic Hub"}),M.jsx("div",{className:"text-xs t-muted-2 truncate",children:Z})]}),M.jsx(gm,{theme:x,setTheme:_})]})})}),M.jsxs("div",{className:"px-4 pb-4",children:[$&&M.jsx(hm,{onClose:()=>L(!1)}),M.jsxs("section",{className:"t-surface rounded-2xl p-6 space-y-6 content-scroll",children:[F==="missions"&&M.jsxs(M.Fragment,{children:[M.jsx("div",{className:"mb-6",children:M.jsx(fm,{})}),M.jsxs("div",{className:"space-y-8",children:[M.jsxs("div",{className:"space-y-4",children:[M.jsx("h2",{className:"text-xl font-bold t-muted",children:"New Mission"}),M.jsxs("form",{onSubmit:fe,className:"space-y-4",children:[M.jsx("input",{type:"text",value:g.text,onChange:W=>v({...g,text:W.target.value}),placeholder:"Launch a new goal...",className:"w-full rounded-lg px-4 py-3 t-input t-ring text-base"}),M.jsxs("div",{className:"flex gap-3",children:[M.jsx("input",{type:"date",value:g.deadline,onChange:W=>v({...g,deadline:W.target.value}),className:"flex-1 rounded-lg px-4 py-3 t-input t-ring"}),M.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-6 py-3 font-semibold",children:M.jsx(qt,{path:"M12 4.5v15m7.5-7.5h-15"})})]}),M.jsxs("div",{className:"flex gap-3",children:[M.jsx("input",{type:"text",value:g.tag,onChange:W=>v({...g,tag:W.target.value}),placeholder:"Tag",className:"flex-1 rounded-lg px-4 py-3 text-sm t-input t-ring"}),M.jsxs("select",{value:g.priority,onChange:W=>v({...g,priority:W.target.value}),className:"rounded-lg px-4 py-3 text-sm t-input t-ring",children:[M.jsx("option",{value:"low",children:"Low"}),M.jsx("option",{value:"medium",children:"Medium"}),M.jsx("option",{value:"high",children:"High"}),M.jsx("option",{value:"urgent",children:"Urgent"})]})]})]})]}),M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{className:"flex flex-col gap-3",children:[M.jsx("h2",{className:"text-xl font-bold t-muted",children:"Active Missions"}),M.jsx("input",{type:"text",value:y,onChange:W=>S(W.target.value),placeholder:"Search missions...",className:"w-full rounded-lg px-4 py-3 text-sm t-input t-ring"})]}),M.jsx("div",{className:"space-y-4",children:ie.length===0?M.jsx("p",{className:"text-center t-muted-2 p-6 bg-gray-800/50 rounded-lg",children:"No matching missions."}):ie.map(W=>M.jsx(xm,{goal:W,updateGoal:de,deleteGoal:ae,handleMajorCompletion:Q},W.id))})]}),M.jsx("div",{className:"pt-4 border-t border-gray-700/50",children:M.jsx(vm,{schedule:n,handleAddScheduleItem:ce,newScheduleItem:b,setNewScheduleItem:P,toggleTimer:B,deleteScheduleItem:he,clearCompletedSchedule:oe,plannerSearch:E,setPlannerSearch:T})})]})]}),F==="habits"&&M.jsx(Em,{habits:f,setHabits:d}),F==="pomodoro"&&M.jsx(_m,{onComplete:Q}),F==="notes"&&M.jsx(wm,{notes:p,setNotes:m}),F==="calendar"&&M.jsx(ym,{goals:s,events:o,setEvents:c}),F==="logbook"&&M.jsx(Mm,{goals:s,updateGoal:de,deleteGoal:ae}),F==="dashboard"&&M.jsx(Tm,{goals:s,habits:f,schedule:n}),F==="analytics"&&M.jsx(Sm,{completedGoals:Le})]})]}),M.jsx("nav",{className:"fixed bottom-0 left-0 right-0 p-3",style:{background:"color-mix(in srgb, var(--bg2) 55%, transparent)"},children:M.jsx("div",{className:"mx-auto max-w-md t-surface nav-floating px-3 py-3",children:M.jsx(mm,{currentView:F,setCurrentView:U,variant:"bottom"})})})]})]})]})}const hm=({onClose:s})=>M.jsxs("div",{className:"fixed inset-0 bg-black/70 z-50 flex flex-col items-center justify-center animate-fade-in completion-stars",children:[[...Array(20)].map((e,n)=>M.jsx("div",{className:"star",style:{"--i":n,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,animationDelay:`${Math.random()*1}s`,animationDuration:`${Math.random()*1+.5}s`}},n)),M.jsxs("div",{className:"text-center z-10 animate-zoom-in",children:[M.jsx("h2",{className:"text-5xl font-bold mb-4 t-gradient-text",children:"You did it!"}),M.jsx("p",{className:"text-2xl t-muted mb-8",children:"AND NOW let's do more"}),M.jsx("button",{onClick:s,className:"t-btn-primary rounded-lg px-8 py-3 text-lg font-semibold",children:"Continue"})]})]}),pm=[{id:"missions",name:"Missions",icon:"M3.75 3v11.25A2.25 2.25 0 006 16.5h12A2.25 2.25 0 0020.25 14.25V3"},{id:"dashboard",name:"Dashboard",icon:"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"},{id:"pomodoro",name:"Pomodoro",icon:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"},{id:"habits",name:"Habits",icon:"M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"},{id:"notes",name:"Notes",icon:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"},{id:"calendar",name:"Calendar",icon:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18"},{id:"logbook",name:"Logbook",icon:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25v14.25"},{id:"analytics",name:"Analytics",icon:"M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5"}],mm=({currentView:s,setCurrentView:e,variant:n})=>{if(n==="bottom"){const r=pm.filter(o=>["missions","dashboard","pomodoro","notes","calendar"].includes(o.id));return M.jsx("div",{className:"grid grid-cols-5 gap-1",role:"tablist",children:r.map(o=>{const c=o.id===s;return M.jsxs("button",{onClick:()=>e(o.id),className:`flex flex-col items-center justify-center gap-1 rounded-xl py-3 px-2 t-ring transition-all duration-300 ${c?"t-btn-primary":"t-btn-ghost"}`,role:"tab","aria-selected":c,"aria-label":`Switch to ${o.name} view`,children:[M.jsx(qt,{path:o.icon,className:"w-6 h-6 transition-transform duration-300 hover:scale-110"}),M.jsx("span",{className:"text-[10px] leading-none font-medium",children:o.name})]},o.id)})})}return M.jsx("nav",{className:"space-y-1",role:"navigation","aria-label":"Main navigation",children:pm.map(r=>{const o=r.id===s;return M.jsxs("button",{onClick:()=>e(r.id),className:`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left t-ring ${o?"t-btn-primary":"t-surface-2 t-btn-ghost"}`,role:"tab","aria-selected":o,"aria-label":`Switch to ${r.name} view`,children:[M.jsx(qt,{path:r.icon,className:"w-5 h-5"}),M.jsx("span",{className:"text-sm font-medium",children:r.name})]},r.id)})})},gm=({theme:s,setTheme:e})=>{const n=[{id:"gotham",name:"Gotham"},{id:"solar",name:"Solar"},{id:"ocean",name:"Ocean"},{id:"forest",name:"Forest"},{id:"rose",name:"Rose"}];return M.jsxs("div",{className:"flex items-center justify-center sm:justify-end gap-2 flex-shrink-0",children:[M.jsx("span",{className:"text-xs sm:text-sm t-muted-2 hidden sm:inline",children:"Theme"}),M.jsx("select",{value:s,onChange:r=>e(r.target.value),className:"t-surface-2 rounded-lg px-3 py-2 text-sm t-ring min-w-0",style:{color:"var(--text)"},children:n.map(r=>M.jsx("option",{value:r.id,style:{background:"#111827",color:"#fff"},children:r.name},r.id))})]})},vm=({schedule:s,handleAddScheduleItem:e,newScheduleItem:n,setNewScheduleItem:r,toggleTimer:o,deleteScheduleItem:c,clearCompletedSchedule:f,plannerSearch:d,setPlannerSearch:p})=>M.jsxs("div",{className:"space-y-6",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4",children:[M.jsx("h2",{className:"text-2xl font-bold t-muted",children:"Daily Planner"}),M.jsx("input",{type:"text",value:d,onChange:m=>p(m.target.value),placeholder:"Search tasks...",className:"w-full sm:w-72 rounded-lg px-4 py-2 text-sm t-input t-ring"})]}),M.jsxs("form",{onSubmit:e,className:"flex flex-col sm:flex-row gap-2",children:[M.jsx("input",{type:"number",value:n.duration,onChange:m=>r({...n,duration:m.target.value?parseInt(m.target.value):""}),placeholder:"Duration (min)",className:"rounded-lg px-2 py-2 w-full sm:w-32 t-input t-ring"}),M.jsx("input",{type:"text",value:n.text,onChange:m=>r({...n,text:m.target.value}),placeholder:"Schedule a task...",className:"flex-grow rounded-lg px-4 py-2 t-input t-ring"}),M.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-4 py-2 font-semibold sm:self-auto self-stretch",children:M.jsx(qt,{path:"M12 4.5v15m7.5-7.5h-15"})})]})]}),M.jsx("div",{className:"space-y-2 max-h-[60vh] sm:max-h-[500px] overflow-y-auto pr-2",children:s.filter(m=>(d||"").trim()?(m.text||"").toLowerCase().includes(d.trim().toLowerCase()):!0).length===0?M.jsx("p",{className:"text-center t-muted-2 p-4 bg-gray-800/50 rounded-lg",children:d?.trim()?"No matching tasks.":"Your schedule is clear. Plan your day!"}):s.filter(m=>(d||"").trim()?(m.text||"").toLowerCase().includes(d.trim().toLowerCase()):!0).map(m=>{const x=Math.floor(m.secondsLeft/60),_=m.secondsLeft%60,y=m.duration>0?(m.duration*60-m.secondsLeft)/(m.duration*60)*100:0;return M.jsxs("div",{className:`relative group p-3 rounded-lg transition-colors overflow-hidden ${m.completed?"bg-green-500/20":"bg-gray-800/60 hover:bg-gray-800"}`,children:[M.jsx("div",{className:"absolute top-0 left-0 h-full bg-teal-500/20 transition-all duration-500",style:{width:`${y}%`}}),M.jsxs("div",{className:"relative flex items-center gap-4",children:[M.jsxs("span",{className:"font-mono text-teal-300 w-20",children:[String(x).padStart(2,"0"),":",String(_).padStart(2,"0")]}),M.jsx("span",{className:`flex-grow ${m.completed?"line-through text-gray-500":""}`,children:m.text}),!m.completed&&M.jsx("button",{onClick:()=>o(m.id),className:"text-white p-1 rounded-full t-btn-primary z-10",children:M.jsx(qt,{path:m.isActive?"M15.75 5.25v13.5m-7.5-13.5v13.5":"M5.25 5.653c0-1.426 1.529-2.33 2.779-1.643l7.5 4.347c1.25.722 1.25 2.565 0 3.286l-7.5 4.347c-1.25.722-2.779-.217-2.779-1.643V5.653z",className:"w-5 h-5"})}),M.jsx("button",{onClick:()=>c(m.id),className:"text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity z-10",children:M.jsx(qt,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]})]},m.id)})}),s.some(m=>m.completed)&&M.jsx("div",{className:"text-center mt-4",children:M.jsx("button",{onClick:f,className:"text-sm text-gray-400 hover:text-white transition-colors",children:"Clear Completed"})})]}),_m=({onComplete:s})=>{const[e,n]=it.useState({work:25,shortBreak:5,longBreak:15}),[r,o]=it.useState("work"),[c,f]=it.useState(!1),[d,p]=it.useState(e.work*60),[m,x]=it.useState(0),_=(b,P)=>{const N=parseInt(P,10);isNaN(N)||N<1||n(q=>({...q,[b]:N}))};it.useEffect(()=>{let b=null;return c&&d>0?b=setInterval(()=>p(P=>P-1),1e3):c&&d===0&&(s(),f(!1),o(P=>P==="work"?"shortBreak":"work")),()=>clearInterval(b)},[c,d,s]),it.useEffect(()=>{p(e[r]*60),f(!1),x(b=>b+1)},[r,e]);const y=()=>f(!c),S=()=>p(e[r]*60),E=Math.floor(d/60),T=d%60,g=e[r]*60,v=g>0?(g-d)/g*100:0;return M.jsxs("div",{className:"flex flex-col items-center justify-center space-y-6",children:[M.jsx("h2",{className:"text-3xl font-bold text-center t-muted mb-6",children:"Pomodoro Timer"}),M.jsx("div",{className:"flex gap-2",children:Object.keys(e).map(b=>M.jsx("button",{onClick:()=>o(b),className:`px-4 py-1 rounded-md text-sm capitalize t-ring ${r===b?"t-btn-primary":"t-surface-2 t-btn-ghost"}`,children:b.replace("B"," B")},b))}),M.jsxs("div",{className:"relative w-52 h-52 sm:w-64 sm:h-64 flex items-center justify-center",children:[M.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 100 100",style:{transform:"rotate(-90deg)"},children:[M.jsx("circle",{className:"text-gray-700",strokeWidth:"5",stroke:"currentColor",fill:"transparent",r:"45",cx:"50",cy:"50"}),M.jsx("circle",{strokeWidth:"5",strokeDasharray:"283",strokeDashoffset:283-v/100*283,strokeLinecap:"round",stroke:"currentColor",fill:"transparent",r:"45",cx:"50",cy:"50",style:{transition:"stroke-dashoffset 1s linear",color:"var(--primary)"}})]}),M.jsxs("div",{className:"absolute text-4xl sm:text-5xl font-mono",children:[String(E).padStart(2,"0"),":",String(T).padStart(2,"0")]})]},m),M.jsxs("div",{className:"flex gap-4",children:[M.jsx("button",{onClick:y,className:"t-btn-primary rounded-lg px-6 py-2 font-semibold w-28",children:c?"Pause":"Start"}),M.jsx("button",{onClick:S,className:"bg-gray-600 hover:bg-gray-500 rounded-lg px-6 py-2 font-semibold w-28",children:"Reset"})]}),M.jsx("div",{className:"flex flex-col sm:flex-row gap-4 items-center pt-4 w-full max-w-md",style:{borderTop:"1px solid var(--border)"},children:Object.keys(e).map(b=>M.jsxs("div",{className:"flex-1 w-full",children:[M.jsxs("label",{className:"text-xs t-muted capitalize",children:[b.replace("B"," B")," (min)"]}),M.jsx("input",{type:"number",value:e[b],onChange:P=>_(b,P.target.value),className:"w-full rounded-lg p-2 t-input t-ring"})]},b))})]})},xm=({goal:s,updateGoal:e,deleteGoal:n,handleMajorCompletion:r})=>{const[o,c]=it.useState({text:"",link:"",notes:""}),[f,d]=it.useState(!1),[p,m]=it.useState({link:s.link||"",deadline:s.deadline||""}),[x,_]=it.useState(null),y=s.subgoals.length,S=s.subgoals.filter(N=>N.completed).length,E=y>0?Math.round(S/y*100):0,T=y>0&&E===100,g=s.deadline&&new Date(s.deadline)<new Date&&!T,v=N=>{const q=s.subgoals.map(U=>U.id===N?{...U,completed:!U.completed}:U);if(q.length>0&&q.every(U=>U.completed)&&!T)r(),e(s.id,{subgoals:q,lastCompleted:new Date().toISOString()});else{const U=q.length>0&&!q.every($=>$.completed);T&&U?e(s.id,{subgoals:q,lastCompleted:null}):e(s.id,{subgoals:q})}},b=N=>{if(N.preventDefault(),o.text.trim()){const q={id:Date.now(),...o,completed:!1},F=T;e(s.id,{subgoals:[...s.subgoals,q],lastCompleted:F?null:s.lastCompleted}),c({text:"",link:"",notes:""})}},P=()=>{e(s.id,{link:p.link,deadline:p.deadline}),d(!1)};return M.jsxs("div",{id:`goal-${s.id}`,className:`relative p-4 rounded-lg transition-all duration-300 goal-card ${T?"bg-green-500/20 border-green-500/40 goal-card-completed":"bg-gray-800/60"} t-border`,children:[M.jsxs("div",{className:"flex flex-wrap items-center gap-x-3",children:[M.jsx("div",{className:"flex-grow",children:M.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[M.jsx("span",{className:`font-bold text-lg transition-colors duration-300 ${T?"line-through text-gray-500":"text-purple-100 hover:text-purple-200"}`,children:s.text}),s.tag&&M.jsx("span",{className:"px-2 py-0.5 text-xs rounded-full t-pill hover:bg-purple-600/40 transition-all duration-200 priority-badge",children:s.tag}),s.priority==="urgent"&&M.jsx("span",{className:"px-2 py-0.5 bg-red-600/30 text-red-300 text-xs rounded-full hover:bg-red-600/50 transition-all duration-200 priority-badge glow-primary",children:"Urgent"}),s.priority==="high"&&M.jsx("span",{className:"px-2 py-0.5 bg-orange-600/30 text-orange-300 text-xs rounded-full hover:bg-orange-600/50 transition-all duration-200 priority-badge",children:"High"})]})}),M.jsxs("div",{className:"flex items-center gap-1 ml-auto",children:[M.jsx("button",{onClick:()=>d(!f),title:"Edit Details",className:"text-cyan-400 hover:text-cyan-300 p-1 goal-action-btn transition-all duration-200",children:M.jsx(qt,{path:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10",className:"w-5 h-5"})}),M.jsx("button",{onClick:()=>n(s.id),title:"Delete Goal",className:"text-red-400 hover:text-red-300 p-1 goal-action-btn transition-all duration-200",children:M.jsx(qt,{path:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0",className:"w-5 h-5"})})]})]}),s.deadline&&M.jsxs("div",{className:`mt-2 text-sm flex items-center gap-2 ${g?"text-red-400":"text-gray-400"}`,children:[M.jsx(qt,{path:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18",className:"w-4 h-4"}),M.jsxs("span",{children:["Deadline: ",new Date(s.deadline).toLocaleDateString()]}),g&&M.jsx("span",{className:"font-bold",children:"(Past Due)"})]}),f&&M.jsxs("div",{className:"mt-3 space-y-2 p-3 bg-gray-900/50 rounded-md",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("label",{className:"text-sm w-20",children:"Link:"}),M.jsx("input",{type:"text",value:p.link,onChange:N=>m({...p,link:N.target.value}),placeholder:"Paste URL...",className:"flex-grow bg-gray-900/70 border border-purple-900/70 text-sm rounded-md px-3 py-1"})]}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("label",{className:"text-sm w-20",children:"Deadline:"}),M.jsx("input",{type:"date",value:p.deadline,onChange:N=>m({...p,deadline:N.target.value}),className:"flex-grow bg-gray-900/70 border border-purple-900/70 text-sm rounded-md px-3 py-1"})]}),M.jsx("div",{className:"text-right",children:M.jsx("button",{onClick:P,className:"bg-cyan-600 hover:bg-cyan-500 text-sm rounded-md px-4 py-1",children:"Save"})})]}),y>0&&M.jsxs("div",{className:"mt-3 group",children:[M.jsxs("div",{className:"flex justify-between text-sm t-muted mb-1",children:[M.jsx("span",{children:"Progress"}),M.jsxs("span",{className:"font-medium",children:[E,"%"]})]}),M.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2.5 overflow-hidden",children:M.jsx("div",{className:"h-2.5 rounded-full transition-all duration-500 ease-out group-hover:scale-105",style:{width:`${E}%`,background:"linear-gradient(90deg, var(--primary), var(--primary2))",boxShadow:"0 0 10px rgba(99, 102, 241, 0.3)"}})})]}),M.jsx("div",{className:"mt-4 pl-4 space-y-2",style:{borderLeft:"2px solid var(--border)"},children:s.subgoals.map(N=>M.jsxs("div",{className:"group",children:[M.jsxs("div",{className:"flex items-center p-2 rounded-md hover:bg-gray-700/30 transition-colors duration-200",children:[M.jsx("input",{type:"checkbox",checked:N.completed,onChange:()=>v(N.id),className:"w-4 h-4 bg-gray-700 border-gray-600 rounded hover:border-purple-400 transition-colors duration-200",style:{accentColor:"var(--primary)"}}),M.jsx("span",{className:`ml-3 flex-grow cursor-pointer transition-all duration-200 ${N.completed?"line-through text-gray-500":"text-gray-300 group-hover:text-gray-200"}`,onClick:()=>_(x===N.id?null:N.id),children:N.text}),N.link&&M.jsx("a",{href:N.link,target:"_blank",rel:"noopener noreferrer",className:"ml-auto text-cyan-400 hover:text-cyan-300 transition-colors duration-200 p-1 rounded hover:bg-cyan-400/10",children:M.jsx(qt,{path:"M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244",className:"w-4 h-4"})})]}),x===N.id&&M.jsx("div",{className:"ml-7 mt-2 p-3 bg-gray-900/50 rounded-md text-sm text-gray-400 border-l-2 border-purple-500/50 animate-fade-in",children:M.jsx("p",{children:N.notes||"No notes for this step."})})]},N.id))}),M.jsxs("form",{onSubmit:b,className:"mt-4 pl-4 space-y-2",children:[M.jsxs("div",{className:"flex gap-2",children:[M.jsx("input",{type:"text",value:o.text,onChange:N=>c({...o,text:N.target.value}),placeholder:"Add a smaller step...",className:"flex-grow text-sm rounded-md px-3 py-1 t-input t-ring"}),M.jsx("button",{type:"submit",className:"t-btn-primary rounded-md px-2",children:M.jsx(qt,{path:"M12 9v6m3-3H9",className:"w-5 h-5"})})]}),M.jsxs("div",{className:"flex gap-2",children:[M.jsx("input",{type:"text",value:o.link,onChange:N=>c({...o,link:N.target.value}),placeholder:"Optional: http://link",className:"w-1/2 text-sm rounded-md px-3 py-1 t-input t-ring"}),M.jsx("input",{type:"text",value:o.notes,onChange:N=>c({...o,notes:N.target.value}),placeholder:"Optional: notes",className:"w-1/2 text-sm rounded-md px-3 py-1 t-input t-ring"})]})]})]})},ym=({goals:s,events:e,setEvents:n})=>{const[r,o]=it.useState(new Date),[c,f]=it.useState(new Date),[d,p]=it.useState(""),m=()=>{const g=c.toISOString().split("T")[0],v={...e};delete v[g],n(v)},x=g=>{if(g.preventDefault(),d.trim()&&c){const v=c.toISOString().split("T")[0];n(b=>({...b,[v]:d})),p("")}},_=s.flatMap(g=>g.accomplishments||[]).filter(g=>new Date(g.date).toDateString()===c?.toDateString()),y=new Date(r.getFullYear(),r.getMonth()+1,0).getDate(),S=new Date(r.getFullYear(),r.getMonth(),1).getDay(),E=Array.from({length:y},(g,v)=>v+1),T=new Date;return T.setHours(0,0,0,0),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[M.jsxs("div",{className:"p-4 rounded-lg t-surface",children:[M.jsxs("div",{className:"flex justify-between items-center mb-4",children:[M.jsx("button",{onClick:()=>o(new Date(r.setMonth(r.getMonth()-1))),className:"p-2 rounded-full t-btn-ghost t-ring",children:M.jsx(qt,{path:"M15.75 19.5L8.25 12l7.5-7.5",className:"w-5 h-5"})}),M.jsx("h2",{className:"text-xl font-bold",children:r.toLocaleString("default",{month:"long",year:"numeric"})}),M.jsx("button",{onClick:()=>o(new Date(r.setMonth(r.getMonth()+1))),className:"p-2 rounded-full t-btn-ghost t-ring",children:M.jsx(qt,{path:"M8.25 4.5l7.5 7.5-7.5 7.5",className:"w-5 h-5"})})]}),M.jsx("div",{className:"grid grid-cols-7 gap-1 text-center text-xs text-gray-400 mb-2",children:["S","M","T","W","T","F","S"].map(g=>M.jsx("div",{children:g},g))}),M.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[Array.from({length:S}).map((g,v)=>M.jsx("div",{},`empty-${v}`)),E.map(g=>{const v=new Date(r.getFullYear(),r.getMonth(),g),b=v.toISOString().split("T")[0],P=v.toDateString()===T.toDateString(),N=v<T,q=c&&v.toDateString()===c.toDateString(),F=s.some($=>$.accomplishments?.some(L=>new Date(L.date).toDateString()===v.toDateString())),U=e[b]||gl[b];return M.jsxs("button",{onClick:()=>f(v),style:q?{backgroundColor:"var(--primary)"}:P&&!q?{boxShadow:"0 0 0 2px var(--ring)"}:void 0,className:`h-12 rounded-lg text-sm relative transition-colors
                                    ${q?"text-white":""}
                                    ${q?"":N?"bg-gray-900/50 text-gray-500 hover:bg-gray-700/50":"bg-gray-900/50 hover:bg-gray-700/50 text-gray-300"}
                                `,children:[g,F&&M.jsx("div",{className:"absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full t-dot"}),U&&M.jsx("div",{className:"absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full t-dot-2"})]},g)})]})]}),M.jsxs("div",{className:"space-y-4",children:[M.jsxs("h2",{className:"text-2xl font-bold t-muted",children:["Details for ",c.toLocaleDateString()]}),M.jsxs("div",{className:"p-4 rounded-lg space-y-3 t-surface",children:[M.jsx("h3",{className:"font-bold t-muted",children:"Accomplishments Logged"}),M.jsx("div",{className:"space-y-2 max-h-40 overflow-y-auto",children:_.length>0?_.map(g=>M.jsxs("div",{className:"p-2 bg-gray-800/50 rounded-lg text-sm",children:[M.jsxs("p",{className:"font-bold text-gray-400",children:[g.goalText," (",g.timeSpent,")"]}),M.jsx("p",{className:"text-gray-300 mt-1",children:g.text})]},g.id)):M.jsx("p",{className:"text-sm text-gray-500 text-center",children:"No work logged for this day."})})]}),M.jsxs("div",{className:"p-4 rounded-lg space-y-3 t-surface",children:[M.jsx("h3",{className:"font-bold t-muted",children:"Special Event"}),e[c.toISOString().split("T")[0]]||gl[c.toISOString().split("T")[0]]?M.jsxs("div",{className:"group relative p-3 bg-gray-800/50 rounded-lg text-sm",children:[M.jsx("p",{children:e[c.toISOString().split("T")[0]]||gl[c.toISOString().split("T")[0]]}),!gl[c.toISOString().split("T")[0]]&&M.jsx("button",{onClick:m,className:"absolute top-1 right-1 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity",children:M.jsx(qt,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]}):M.jsxs("form",{onSubmit:x,children:[M.jsx("input",{value:d,onChange:g=>p(g.target.value),placeholder:"Add an event for this day...",className:"w-full rounded-lg p-2 t-input t-ring"}),M.jsx("button",{type:"submit",className:"mt-2 w-full t-btn-primary rounded-lg py-2 font-semibold text-sm",children:"Save Event"})]})]})]})]})},Sm=({completedGoals:s})=>{const[e,n]=it.useState("monthly"),o=((d,p)=>{const m=new Date;return d.filter(x=>{if(!x.lastCompleted)return!1;const _=new Date(x.lastCompleted);if(isNaN(_.getTime()))return!1;if(p==="weekly"){const y=new Date(m);return y.setDate(y.getDate()-7),y.setHours(0,0,0,0),_.setHours(0,0,0,0),_>=y}return p==="monthly"?_.getMonth()===m.getMonth()&&_.getFullYear()===m.getFullYear():p==="yearly"?_.getFullYear()===m.getFullYear():!0})})(s,e),c=o.length,f=s.length>0?c/s.length*100:0;return M.jsxs("div",{className:"space-y-8",children:[M.jsx("h2",{className:"text-3xl font-bold text-center t-muted mb-6",children:"Mission Analytics"}),M.jsx("div",{className:"flex justify-center gap-2",children:["weekly","monthly","yearly"].map(d=>M.jsx("button",{onClick:()=>n(d),className:`px-4 py-1 rounded-md text-sm t-ring ${e===d?"t-btn-primary":"t-surface-2 t-btn-ghost"}`,children:d.charAt(0).toUpperCase()+d.slice(1)},d))}),M.jsxs("div",{className:"text-center",children:[M.jsxs("p",{className:"text-lg text-gray-300",children:["Missions Accomplished (",e,")"]}),M.jsx("p",{className:"text-5xl font-bold t-gradient-text",children:c}),M.jsxs("div",{className:"relative w-32 h-32 mx-auto mt-4",children:[M.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 36 36",children:[M.jsx("path",{className:"text-gray-700",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"currentColor",strokeWidth:"2"}),M.jsx("path",{className:"text-green-500",d:"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeDasharray:`${f}, 100`})]}),M.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-2xl",children:"✨"})]})]}),M.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg",children:[M.jsx("h3",{className:"text-xl font-bold t-muted mb-4",children:"Completed Goals Details"}),M.jsx("div",{className:"overflow-x-auto",children:M.jsxs("table",{className:"w-full text-left",children:[M.jsx("thead",{children:M.jsxs("tr",{style:{borderBottom:"1px solid var(--border)"},children:[M.jsx("th",{className:"p-2",children:"Mission"}),M.jsx("th",{className:"p-2",children:"Date Completed"})]})}),M.jsx("tbody",{children:o.length===0?M.jsx("tr",{children:M.jsx("td",{colSpan:"2",className:"p-4 text-center text-gray-400",children:"No completed goals in this timeframe"})}):o.map(d=>M.jsxs("tr",{className:"border-b border-gray-800",children:[M.jsx("td",{className:"p-2",children:d.text}),M.jsx("td",{className:"p-2",children:d.lastCompleted?new Date(d.lastCompleted).toLocaleDateString():"N/A"})]},d.id))})]})})]})]})},Mm=({goals:s,updateGoal:e,deleteGoal:n})=>{const[r,o]=it.useState(null),[c,f]=it.useState(null),[d,p]=it.useState(""),[m,x]=it.useState(""),_=E=>{const T=s.find(g=>g.id===E);if(T){const g={id:Date.now(),date:new Date().toISOString(),text:"Quick Check-in",goalId:T.id,goalText:T.text,timeSpent:"5 min"},v=[...T.accomplishments||[],g];e(E,{accomplishments:v})}},y=E=>{E.preventDefault();const T=s.find(g=>g.id===r);if(d.trim()&&T&&c){const g={id:Date.now(),date:c.toISOString(),text:d,goalId:T.id,goalText:T.text,timeSpent:m},v=[...T.accomplishments||[],g];e(r,{accomplishments:v}),p(""),x(""),f(null)}},S=(E,T)=>{const g=s.find(v=>v.id===E);if(g){const v=g.accomplishments.filter(b=>b.id!==T);e(E,{accomplishments:v})}};return M.jsxs("div",{className:"space-y-6",children:[M.jsx("h2",{className:"text-3xl font-bold text-center t-muted mb-6",children:"Mission Logbook"}),M.jsx("div",{className:"space-y-4",children:s.map(E=>{const T=[],g=new Date(E.dateCreated),v=E.deadline?new Date(E.deadline):new Date;for(let b=new Date(g);b<=v;b.setDate(b.getDate()+1))T.push(new Date(b));return M.jsxs("div",{className:"p-4 bg-gray-800/60 rounded-lg",children:[M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsx("h3",{className:"font-bold text-lg text-purple-200 cursor-pointer hover:underline",onClick:()=>o(r===E.id?null:E.id),children:E.text}),M.jsx("button",{onClick:()=>_(E.id),title:"Quick Check-in for Today",className:"ml-auto bg-green-600 hover:bg-green-500 rounded-full p-2",children:M.jsx(qt,{path:"M12 4.5v15m7.5-7.5h-15",className:"w-4 h-4"})}),M.jsx("button",{onClick:()=>n(E.id),title:"Delete Goal Permanently",className:"text-red-500 hover:text-red-400 p-2 rounded-full hover:bg-red-500/20",children:M.jsx(qt,{path:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0",className:"w-4 h-4"})})]}),r===E.id&&M.jsxs("div",{className:"mt-4",children:[M.jsx("div",{className:"flex flex-wrap gap-2",children:T.map(b=>M.jsx("button",{onClick:()=>f(b),className:`w-10 h-10 rounded-lg text-xs flex items-center justify-center
                                                ${c?.toDateString()===b.toDateString()?"bg-purple-600":"bg-gray-700/60 hover:bg-gray-600/60"}`,children:b.getDate()},b.toISOString()))}),c&&M.jsxs("form",{onSubmit:y,className:"mt-4 space-y-2 p-3 bg-gray-900/50 rounded-lg",children:[M.jsxs("h4",{className:"text-sm font-bold",children:["Log for ",c.toLocaleDateString()]}),E.accomplishments?.filter(b=>new Date(b.date).toDateString()===c.toDateString()).map(b=>M.jsxs("div",{className:"group flex items-center justify-between bg-gray-800/50 p-2 rounded",children:[M.jsxs("p",{className:"text-sm",children:[b.text," (",b.timeSpent,")"]}),M.jsx("button",{onClick:()=>S(E.id,b.id),className:"text-red-500 opacity-0 group-hover:opacity-100",children:M.jsx(qt,{path:"M6 18L18 6M6 6l12 12",className:"w-4 h-4"})})]},b.id)),M.jsx("textarea",{value:d,onChange:b=>p(b.target.value),placeholder:"Log an accomplishment...",rows:"2",className:"w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 text-sm"}),M.jsx("input",{type:"text",value:m,onChange:b=>x(b.target.value),placeholder:"Time spent",className:"w-full bg-gray-900/70 border border-purple-800 rounded-lg p-2 text-sm"}),M.jsx("button",{type:"submit",className:"w-full bg-purple-600 hover:bg-purple-500 rounded-lg py-1 font-semibold text-sm",children:"Save Log"})]})]})]},E.id)})})]})},Em=({habits:s,setHabits:e})=>{const[n,r]=it.useState({name:"",color:"purple"}),o=new Date().toDateString(),c=(_,y)=>{let S=0,E=new Date(y);E.setHours(0,0,0,0);const T=[..._].sort().reverse();for(const g of T){const v=new Date(g);if(v.setHours(0,0,0,0),v.getTime()===E.getTime())S++,E.setDate(E.getDate()-1);else if(v.getTime()<E.getTime())break}return S},f=(_,y)=>{e(s.map(S=>{if(S.id===_){const E=S.completedDates||[],T=y.toDateString(),v=E.includes(T)?E.filter(b=>b!==T):[...E,T];return{...S,completedDates:v,currentStreak:c(v,new Date)}}return S}))},d=_=>{if(_.preventDefault(),n.name.trim()){const y={id:Date.now(),name:n.name,color:n.color,completedDates:[],currentStreak:0,dateCreated:new Date().toISOString()};e([...s,y]),r({name:"",color:"purple"})}},p=_=>e(s.filter(y=>y.id!==_)),m=()=>{const _=[];for(let y=6;y>=0;y--){const S=new Date;S.setDate(S.getDate()-y),_.push(S)}return _},x=_=>({purple:"#a855f7",blue:"#3b82f6",green:"#22c55e",yellow:"#f59e0b",pink:"#ec4899",orange:"#f97316"})[_]||"#a855f7";return M.jsxs("div",{className:"space-y-6",children:[M.jsx("h2",{className:"text-3xl font-bold text-center t-muted mb-6",children:"Habit Tracker"}),M.jsxs("form",{onSubmit:d,className:"flex flex-col sm:flex-row gap-2 mb-6",children:[M.jsx("input",{type:"text",value:n.name,onChange:_=>r({...n,name:_.target.value}),placeholder:"New habit...",className:"flex-grow rounded-lg px-4 py-2 t-input t-ring"}),M.jsxs("select",{value:n.color,onChange:_=>r({...n,color:_.target.value}),className:"rounded-lg px-4 py-2 t-input t-ring",children:[M.jsx("option",{value:"purple",children:"Purple"}),M.jsx("option",{value:"blue",children:"Blue"}),M.jsx("option",{value:"green",children:"Green"}),M.jsx("option",{value:"yellow",children:"Yellow"}),M.jsx("option",{value:"pink",children:"Pink"}),M.jsx("option",{value:"orange",children:"Orange"})]}),M.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-6 py-2 font-semibold",children:"Add Habit"})]}),M.jsx("div",{className:"space-y-4",children:s.length===0?M.jsx("p",{className:"text-center t-muted-2 p-8 bg-gray-800/50 rounded-lg",children:"No habits yet. Start building your routine!"}):s.map(_=>{const y=m(),S=_.completedDates||[],E=_.currentStreak||0;return M.jsxs("div",{className:"rounded-lg p-4 t-surface",children:[M.jsxs("div",{className:"flex items-start justify-between gap-3 mb-3",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:"inline-block w-2.5 h-2.5 rounded-full",style:{backgroundColor:x(_.color)}}),M.jsx("h3",{className:"text-lg font-bold t-muted",children:_.name}),M.jsxs("span",{className:"px-2 py-1 rounded text-xs font-semibold t-pill",children:["🔥 ",E," day streak"]})]}),M.jsx("button",{onClick:()=>p(_.id),className:"text-red-400 hover:text-red-300",children:M.jsx(qt,{path:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a4.8108 4.8108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 4.811 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09 1.02-2.09 2.201v.916m7.5 0a4.8667 4.8.667 0 00-7.5 0",className:"w-5 h-5"})})]}),M.jsx("div",{className:"flex gap-2",children:y.map((T,g)=>{const v=T.toDateString(),b=S.includes(v),P=v===o,N=b?{backgroundColor:"var(--primary)",borderColor:"var(--primary)"}:{borderColor:"rgba(148, 163, 184, 0.35)"};return P&&!b&&(N.boxShadow="0 0 0 2px var(--ring)"),M.jsx("button",{onClick:()=>f(_.id,T),style:N,className:`flex-1 aspect-square rounded-lg border-2 transition-all ${b?"text-white":"t-surface-2 t-btn-ghost text-gray-300"} t-ring`,title:T.toLocaleDateString(),children:M.jsxs("div",{className:"flex flex-col items-center justify-center h-full",children:[M.jsx("span",{className:"text-xs",children:T.getDate()}),b&&M.jsx("span",{className:"text-sm",children:"✓"})]})},g)})})]},_.id)})})]})},wm=({notes:s,setNotes:e})=>{const[n,r]=it.useState(""),[o,c]=it.useState(""),[f,d]=it.useState(null),p=E=>f===E,m=s.find(E=>E.id===f)||null,x=E=>{if(E.preventDefault(),n.trim()){const T={id:Date.now(),text:n,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};e([...s,T]),r(""),d(T.id)}},_=(E,T)=>{e(s.map(g=>g.id===E?{...g,text:T,updatedAt:new Date().toISOString()}:g))},y=E=>e(s.filter(T=>T.id!==E)),S=s.filter(E=>E.text.toLowerCase().includes(o.toLowerCase()));return M.jsxs("div",{className:"space-y-4",children:[M.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between",children:[M.jsxs("div",{children:[M.jsx("h2",{className:"text-2xl font-bold t-muted",children:"Notes"}),M.jsx("p",{className:"text-sm t-muted-2",children:"Fast capture + focused editing."})]}),M.jsxs("form",{onSubmit:x,className:"flex gap-2 w-full sm:w-auto",children:[M.jsx("input",{type:"text",value:n,onChange:E=>r(E.target.value),placeholder:"New note...",className:"flex-1 sm:w-64 rounded-lg px-4 py-2 t-input t-ring"}),M.jsx("button",{type:"submit",className:"t-btn-primary rounded-lg px-4 py-2 font-semibold",children:"Add"})]})]}),M.jsxs("div",{className:"flex flex-col md:flex-row gap-4",children:[M.jsxs("div",{className:"md:w-80 shrink-0",children:[M.jsx("input",{type:"text",value:o,onChange:E=>c(E.target.value),placeholder:"Search notes...",className:"w-full rounded-lg px-4 py-2 t-input t-ring mb-3"}),M.jsx("div",{className:"space-y-2 max-h-[55vh] md:max-h-[65vh] overflow-y-auto pr-1",children:S.length===0?M.jsx("div",{className:"text-center t-muted-2 p-6 bg-gray-800/40 rounded-lg",children:o?"No notes found":"No notes yet. Add one above."}):S.slice().sort((E,T)=>new Date(T.updatedAt)-new Date(E.updatedAt)).map(E=>M.jsxs("button",{onClick:()=>d(E.id),className:`w-full text-left rounded-xl p-3 t-ring ${p(E.id)?"t-btn-primary":"t-surface-2 t-btn-ghost"}`,children:[M.jsx("div",{className:"text-sm font-semibold truncate",children:(E.text||"").split(`
`)[0]||"Untitled"}),M.jsx("div",{className:`text-xs mt-1 line-clamp-2 ${p(E.id)?"text-white/80":"t-muted-2"}`,children:(E.text||"").trim()||"…"}),M.jsx("div",{className:`text-[11px] mt-2 ${p(E.id)?"text-white/70":"t-muted-2"}`,children:new Date(E.updatedAt).toLocaleString()})]},E.id))})]}),M.jsx("div",{className:"flex-1",children:m?M.jsxs("div",{className:"rounded-2xl p-4 t-surface",children:[M.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[M.jsxs("div",{className:"min-w-0",children:[M.jsx("div",{className:"text-sm t-muted-2",children:"Editing"}),M.jsx("div",{className:"font-semibold truncate",children:(m.text||"").split(`
`)[0]||"Untitled"})]}),M.jsx("button",{onClick:()=>{y(m.id),d(null)},className:"rounded-lg px-3 py-2 text-sm t-btn-ghost t-ring text-red-300",children:"Delete"})]}),M.jsx("textarea",{value:m.text,onChange:E=>_(m.id,E.target.value),className:"w-full rounded-xl p-3 min-h-[35vh] md:min-h-[55vh] t-input t-ring text-sm",placeholder:"Write…"})]}):M.jsxs("div",{className:"rounded-2xl p-6 t-surface text-center",children:[M.jsx("div",{className:"text-lg font-bold t-muted",children:"Select a note"}),M.jsx("div",{className:"text-sm t-muted-2 mt-1",children:"Pick something on the left to start editing."})]})})]})]})},Tm=({goals:s,habits:e,schedule:n})=>{const r=s.filter(S=>{const E=S.subgoals.length,T=S.subgoals.filter(g=>g.completed).length;return E===0||T<E}),o=s.filter(S=>{const E=S.subgoals.length,T=S.subgoals.filter(g=>g.completed).length;return E>0&&T===E}),c=new Date().toDateString(),f=e.filter(S=>(S.completedDates||[]).includes(c)).length,d=n.filter(S=>S.completed).reduce((S,E)=>S+(E.duration||0),0),p=r.filter(S=>S.priority==="urgent"),m=r.filter(S=>S.priority==="high");function x(S,E,T){let g=0;const v=S.length,b=S.filter(U=>{const $=U.subgoals.length,L=U.subgoals.filter(R=>R.completed).length;return $>0&&L===$}).length;g+=v>0?b/v*40:0;const P=E.length,N=E.filter(U=>(U.completedDates||[]).includes(new Date().toDateString())).length;g+=P>0?N/P*30:0;const q=T.filter(U=>U.completed).length,F=T.length;return g+=F>0?q/F*30:0,Math.round(g)}const _=x(s,e,n),y=S=>S>=80?"text-green-400":S>=60?"text-yellow-400":S>=40?"text-orange-400":"text-red-400";return M.jsxs("div",{className:"space-y-6",children:[M.jsx("h2",{className:"text-3xl font-bold text-center text-purple-300 mb-6",children:"Productivity Dashboard"}),M.jsx("div",{className:"bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg p-6 border border-purple-500/30",children:M.jsxs("div",{className:"text-center",children:[M.jsx("p",{className:"text-lg text-gray-300 mb-2",children:"Today's Productivity Score"}),M.jsx("p",{className:`text-6xl font-bold ${y(_)} mb-2`,children:_}),M.jsx("p",{className:"text-sm text-gray-400",children:"Out of 100"})]})}),M.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[M.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[M.jsx("p",{className:"text-3xl font-bold text-purple-300",children:r.length}),M.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Active Goals"})]}),M.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[M.jsx("p",{className:"text-3xl font-bold text-green-300",children:f}),M.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Habits Today"})]}),M.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[M.jsx("p",{className:"text-3xl font-bold text-blue-300",children:d}),M.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Minutes Focused"})]}),M.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50 text-center",children:[M.jsx("p",{className:"text-3xl font-bold text-yellow-300",children:o.length}),M.jsx("p",{className:"text-sm text-gray-400 mt-1",children:"Completed Goals"})]})]}),(p.length>0||m.length>0)&&M.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50",children:[M.jsx("h3",{className:"text-xl font-bold text-purple-300 mb-4",children:"Priority Focus"}),p.length>0&&M.jsxs("div",{className:"mb-4",children:[M.jsxs("p",{className:"text-red-400 font-semibold mb-2",children:["🔥 Urgent (",p.length,")"]}),M.jsx("div",{className:"space-y-2",children:p.map(S=>M.jsx("div",{className:"bg-red-500/10 border border-red-500/30 rounded-lg p-2",children:M.jsx("p",{className:"text-sm",children:S.text})},S.id))})]}),m.length>0&&M.jsxs("div",{children:[M.jsxs("p",{className:"text-orange-400 font-semibold mb-2",children:["⭐ High Priority (",m.length,")"]}),M.jsx("div",{className:"space-y-2",children:m.map(S=>M.jsx("div",{className:"bg-orange-500/10 border border-orange-500/30 rounded-lg p-2",children:M.jsx("p",{className:"text-sm",children:S.text})},S.id))})]})]}),e.length>0&&M.jsxs("div",{className:"bg-gray-800/60 rounded-lg p-4 border border-purple-800/50",children:[M.jsx("h3",{className:"text-xl font-bold text-purple-300 mb-4",children:"Habit Streaks"}),M.jsx("div",{className:"space-y-2",children:e.slice(0,5).map(S=>{const E=S.currentStreak||0,g=(S.completedDates||[]).includes(c);return M.jsxs("div",{className:"flex items-center justify-between bg-gray-900/50 rounded-lg p-2",children:[M.jsx("span",{className:"text-sm",children:S.name}),M.jsxs("span",{className:`text-sm font-semibold ${g?"text-green-400":"text-gray-500"}`,children:["🔥 ",E," days"]})]},S.id)})})]})]})};q0.createRoot(document.getElementById("root")).render(M.jsx(it.StrictMode,{children:M.jsx(oE,{})}));
