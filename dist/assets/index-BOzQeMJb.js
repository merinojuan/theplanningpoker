(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Rv(e,t){const n=new Set(e.split(","));return i=>n.has(i)}const Ct={},Ro=[],oi=()=>{},Hx=()=>!1,wd=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Vv=e=>e.startsWith("onUpdate:"),$t=Object.assign,Dv=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jx=Object.prototype.hasOwnProperty,st=(e,t)=>jx.call(e,t),Le=Array.isArray,Vo=e=>Sd(e)==="[object Map]",f0=e=>Sd(e)==="[object Set]",He=e=>typeof e=="function",Ft=e=>typeof e=="string",Ks=e=>typeof e=="symbol",_t=e=>e!==null&&typeof e=="object",h0=e=>(_t(e)||He(e))&&He(e.then)&&He(e.catch),m0=Object.prototype.toString,Sd=e=>m0.call(e),zx=e=>Sd(e).slice(8,-1),v0=e=>Sd(e)==="[object Object]",Nv=e=>Ft(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,tl=Rv(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cd=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Wx=/-(\w)/g,fi=Cd(e=>e.replace(Wx,(t,n)=>n?n.toUpperCase():"")),qx=/\B([A-Z])/g,oa=Cd(e=>e.replace(qx,"-$1").toLowerCase()),Qi=Cd(e=>e.charAt(0).toUpperCase()+e.slice(1)),Xf=Cd(e=>e?`on${Qi(e)}`:""),Yr=(e,t)=>!Object.is(e,t),gc=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},g0=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},jh=e=>{const t=parseFloat(e);return isNaN(t)?e:t},y0=e=>{const t=Ft(e)?Number(e):NaN;return isNaN(t)?e:t};let s_;const p0=()=>s_||(s_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ov(e){if(Le(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=Ft(i)?Qx(i):Ov(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(Ft(e)||_t(e))return e}const Gx=/;(?![^(]*\))/g,Kx=/:([^]+)/,Yx=/\/\*[^]*?\*\//g;function Qx(e){const t={};return e.replace(Yx,"").split(Gx).forEach(n=>{if(n){const i=n.split(Kx);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Mv(e){let t="";if(Ft(e))t=e;else if(Le(e))for(let n=0;n<e.length;n++){const i=Mv(e[n]);i&&(t+=i+" ")}else if(_t(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Xx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Jx=Rv(Xx);function _0(e){return!!e||e===""}const zh=e=>Ft(e)?e:e==null?"":Le(e)||_t(e)&&(e.toString===m0||!He(e.toString))?JSON.stringify(e,b0,2):String(e),b0=(e,t)=>t&&t.__v_isRef?b0(e,t.value):Vo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[Jf(i,s)+" =>"]=r,n),{})}:f0(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Jf(n))}:Ks(t)?Jf(t):_t(t)&&!Le(t)&&!v0(t)?String(t):t,Jf=(e,t="")=>{var n;return Ks(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qn;class w0{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qn,!t&&qn&&(this.index=(qn.scopes||(qn.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=qn;try{return qn=this,t()}finally{qn=n}}}on(){qn=this}off(){qn=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Lv(e){return new w0(e)}function Zx(e,t=qn){t&&t.active&&t.effects.push(e)}function S0(){return qn}function hn(e){qn&&qn.cleanups.push(e)}let Ts;class Fv{constructor(t,n,i,r){this.fn=t,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Zx(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,es();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(eR(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ts()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=jr,n=Ts;try{return jr=!0,Ts=this,this._runnings++,o_(this),this.fn()}finally{a_(this),this._runnings--,Ts=n,jr=t}}stop(){this.active&&(o_(this),a_(this),this.onStop&&this.onStop(),this.active=!1)}}function eR(e){return e.value}function o_(e){e._trackId++,e._depsLength=0}function a_(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)C0(e.deps[t],e);e.deps.length=e._depsLength}}function C0(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let jr=!0,Wh=0;const E0=[];function es(){E0.push(jr),jr=!1}function ts(){const e=E0.pop();jr=e===void 0?!0:e}function Bv(){Wh++}function $v(){for(Wh--;!Wh&&qh.length;)qh.shift()()}function I0(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const i=e.deps[e._depsLength];i!==t?(i&&C0(i,e),e.deps[e._depsLength++]=t):e._depsLength++}}const qh=[];function T0(e,t,n){Bv();for(const i of e.keys()){let r;i._dirtyLevel<t&&(r??(r=e.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=e.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&qh.push(i.scheduler)))}$v()}const k0=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Vc=new WeakMap,ks=Symbol(""),Gh=Symbol("");function jn(e,t,n){if(jr&&Ts){let i=Vc.get(e);i||Vc.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=k0(()=>i.delete(n))),I0(Ts,r)}}function ur(e,t,n,i,r,s){const o=Vc.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&Le(e)){const l=Number(i);o.forEach((u,c)=>{(c==="length"||!Ks(c)&&c>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":Le(e)?Nv(n)&&a.push(o.get("length")):(a.push(o.get(ks)),Vo(e)&&a.push(o.get(Gh)));break;case"delete":Le(e)||(a.push(o.get(ks)),Vo(e)&&a.push(o.get(Gh)));break;case"set":Vo(e)&&a.push(o.get(ks));break}Bv();for(const l of a)l&&T0(l,4);$v()}function tR(e,t){const n=Vc.get(e);return n&&n.get(t)}const nR=Rv("__proto__,__v_isRef,__isVue"),A0=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ks)),l_=iR();function iR(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=$e(this);for(let s=0,o=this.length;s<o;s++)jn(i,"get",s+"");const r=i[t](...n);return r===-1||r===!1?i[t](...n.map($e)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){es(),Bv();const i=$e(this)[t].apply(this,n);return $v(),ts(),i}}),e}function rR(e){Ks(e)||(e=String(e));const t=$e(this);return jn(t,"has",e),t.hasOwnProperty(e)}class P0{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?yR:D0:s?V0:R0).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Le(t);if(!r){if(o&&st(l_,n))return Reflect.get(l_,n,i);if(n==="hasOwnProperty")return rR}const a=Reflect.get(t,n,i);return(Ks(n)?A0.has(n):nR(n))||(r||jn(t,"get",n),s)?a:Rt(a)?o&&Nv(n)?a:a.value:_t(a)?r?aa(a):En(a):a}}class x0 extends P0{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];if(!this._isShallow){const l=_l(s);if(!Dc(i)&&!_l(i)&&(s=$e(s),i=$e(i)),!Le(t)&&Rt(s)&&!Rt(i))return l?!1:(s.value=i,!0)}const o=Le(t)&&Nv(n)?Number(n)<t.length:st(t,n),a=Reflect.set(t,n,i,r);return t===$e(r)&&(o?Yr(i,s)&&ur(t,"set",n,i):ur(t,"add",n,i)),a}deleteProperty(t,n){const i=st(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&ur(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Ks(n)||!A0.has(n))&&jn(t,"has",n),i}ownKeys(t){return jn(t,"iterate",Le(t)?"length":ks),Reflect.ownKeys(t)}}class sR extends P0{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const oR=new x0,aR=new sR,lR=new x0(!0);const Uv=e=>e,Ed=e=>Reflect.getPrototypeOf(e);function Gu(e,t,n=!1,i=!1){e=e.__v_raw;const r=$e(e),s=$e(t);n||(Yr(t,s)&&jn(r,"get",t),jn(r,"get",s));const{has:o}=Ed(r),a=i?Uv:n?zv:bl;if(o.call(r,t))return a(e.get(t));if(o.call(r,s))return a(e.get(s));e!==r&&e.get(t)}function Ku(e,t=!1){const n=this.__v_raw,i=$e(n),r=$e(e);return t||(Yr(e,r)&&jn(i,"has",e),jn(i,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Yu(e,t=!1){return e=e.__v_raw,!t&&jn($e(e),"iterate",ks),Reflect.get(e,"size",e)}function u_(e){e=$e(e);const t=$e(this);return Ed(t).has.call(t,e)||(t.add(e),ur(t,"add",e,e)),this}function c_(e,t){t=$e(t);const n=$e(this),{has:i,get:r}=Ed(n);let s=i.call(n,e);s||(e=$e(e),s=i.call(n,e));const o=r.call(n,e);return n.set(e,t),s?Yr(t,o)&&ur(n,"set",e,t):ur(n,"add",e,t),this}function d_(e){const t=$e(this),{has:n,get:i}=Ed(t);let r=n.call(t,e);r||(e=$e(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&ur(t,"delete",e,void 0),s}function f_(){const e=$e(this),t=e.size!==0,n=e.clear();return t&&ur(e,"clear",void 0,void 0),n}function Qu(e,t){return function(i,r){const s=this,o=s.__v_raw,a=$e(o),l=t?Uv:e?zv:bl;return!e&&jn(a,"iterate",ks),o.forEach((u,c)=>i.call(r,l(u),l(c),s))}}function Xu(e,t,n){return function(...i){const r=this.__v_raw,s=$e(r),o=Vo(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...i),c=n?Uv:t?zv:bl;return!t&&jn(s,"iterate",l?Gh:ks),{next(){const{value:f,done:h}=u.next();return h?{value:f,done:h}:{value:a?[c(f[0]),c(f[1])]:c(f),done:h}},[Symbol.iterator](){return this}}}}function xr(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function uR(){const e={get(s){return Gu(this,s)},get size(){return Yu(this)},has:Ku,add:u_,set:c_,delete:d_,clear:f_,forEach:Qu(!1,!1)},t={get(s){return Gu(this,s,!1,!0)},get size(){return Yu(this)},has:Ku,add:u_,set:c_,delete:d_,clear:f_,forEach:Qu(!1,!0)},n={get(s){return Gu(this,s,!0)},get size(){return Yu(this,!0)},has(s){return Ku.call(this,s,!0)},add:xr("add"),set:xr("set"),delete:xr("delete"),clear:xr("clear"),forEach:Qu(!0,!1)},i={get(s){return Gu(this,s,!0,!0)},get size(){return Yu(this,!0)},has(s){return Ku.call(this,s,!0)},add:xr("add"),set:xr("set"),delete:xr("delete"),clear:xr("clear"),forEach:Qu(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Xu(s,!1,!1),n[s]=Xu(s,!0,!1),t[s]=Xu(s,!1,!0),i[s]=Xu(s,!0,!0)}),[e,n,t,i]}const[cR,dR,fR,hR]=uR();function Hv(e,t){const n=t?e?hR:fR:e?dR:cR;return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(st(n,r)&&r in i?n:i,r,s)}const mR={get:Hv(!1,!1)},vR={get:Hv(!1,!0)},gR={get:Hv(!0,!1)};const R0=new WeakMap,V0=new WeakMap,D0=new WeakMap,yR=new WeakMap;function pR(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _R(e){return e.__v_skip||!Object.isExtensible(e)?0:pR(zx(e))}function En(e){return _l(e)?e:jv(e,!1,oR,mR,R0)}function N0(e){return jv(e,!1,lR,vR,V0)}function aa(e){return jv(e,!0,aR,gR,D0)}function jv(e,t,n,i,r){if(!_t(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=_R(e);if(o===0)return e;const a=new Proxy(e,o===2?i:n);return r.set(e,a),a}function nl(e){return _l(e)?nl(e.__v_raw):!!(e&&e.__v_isReactive)}function _l(e){return!!(e&&e.__v_isReadonly)}function Dc(e){return!!(e&&e.__v_isShallow)}function O0(e){return e?!!e.__v_raw:!1}function $e(e){const t=e&&e.__v_raw;return t?$e(t):e}function M0(e){return Object.isExtensible(e)&&g0(e,"__v_skip",!0),e}const bl=e=>_t(e)?En(e):e,zv=e=>_t(e)?aa(e):e;class L0{constructor(t,n,i,r){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Fv(()=>t(this._value),()=>yc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=$e(this);return(!t._cacheable||t.effect.dirty)&&Yr(t._value,t._value=t.effect.run())&&yc(t,4),F0(t),t.effect._dirtyLevel>=2&&yc(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function bR(e,t,n=!1){let i,r;const s=He(e);return s?(i=e,r=oi):(i=e.get,r=e.set),new L0(i,r,s||!r,n)}function F0(e){var t;jr&&Ts&&(e=$e(e),I0(Ts,(t=e.dep)!=null?t:e.dep=k0(()=>e.dep=void 0,e instanceof L0?e:void 0)))}function yc(e,t=4,n){e=$e(e);const i=e.dep;i&&T0(i,t)}function Rt(e){return!!(e&&e.__v_isRef===!0)}function re(e){return B0(e,!1)}function ye(e){return B0(e,!0)}function B0(e,t){return Rt(e)?e:new wR(e,t)}class wR{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:$e(t),this._value=n?t:bl(t)}get value(){return F0(this),this._value}set value(t){const n=this.__v_isShallow||Dc(t)||_l(t);t=n?t:$e(t),Yr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:bl(t),yc(this,4))}}function mt(e){return Rt(e)?e.value:e}function ar(e){return He(e)?e():mt(e)}const SR={get:(e,t,n)=>mt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Rt(r)&&!Rt(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function $0(e){return nl(e)?e:new Proxy(e,SR)}function Id(e){const t=Le(e)?new Array(e.length):{};for(const n in e)t[n]=U0(e,n);return t}class CR{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return tR($e(this._object),this._key)}}class ER{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function W(e,t,n){return Rt(e)?e:He(e)?new ER(e):_t(e)&&arguments.length>1?U0(e,t,n):re(e)}function U0(e,t,n){const i=e[t];return Rt(i)?i:new CR(e,t,n)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zr(e,t,n,i){try{return i?e(...i):e()}catch(r){tu(r,t,n)}}function di(e,t,n,i){if(He(e)){const r=zr(e,t,n,i);return r&&h0(r)&&r.catch(s=>{tu(s,t,n)}),r}if(Le(e)){const r=[];for(let s=0;s<e.length;s++)r.push(di(e[s],t,n,i));return r}}function tu(e,t,n,i=!0){const r=t?t.vnode:null;if(t){let s=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,a)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){es(),zr(l,null,10,[e,o,a]),ts();return}}IR(e,n,r,i)}function IR(e,t,n,i=!0){console.error(e)}let wl=!1,Kh=!1;const In=[];let Mi=0;const Do=[];let Or=null,_s=0;const H0=Promise.resolve();let Wv=null;function Ge(e){const t=Wv||H0;return e?t.then(this?e.bind(this):e):t}function TR(e){let t=Mi+1,n=In.length;for(;t<n;){const i=t+n>>>1,r=In[i],s=Sl(r);s<e||s===e&&r.pre?t=i+1:n=i}return t}function qv(e){(!In.length||!In.includes(e,wl&&e.allowRecurse?Mi+1:Mi))&&(e.id==null?In.push(e):In.splice(TR(e.id),0,e),j0())}function j0(){!wl&&!Kh&&(Kh=!0,Wv=H0.then(W0))}function kR(e){const t=In.indexOf(e);t>Mi&&In.splice(t,1)}function Yh(e){Le(e)?Do.push(...e):(!Or||!Or.includes(e,e.allowRecurse?_s+1:_s))&&Do.push(e),j0()}function h_(e,t,n=wl?Mi+1:0){for(;n<In.length;n++){const i=In[n];if(i&&i.pre){if(e&&i.id!==e.uid)continue;In.splice(n,1),n--,i()}}}function z0(e){if(Do.length){const t=[...new Set(Do)].sort((n,i)=>Sl(n)-Sl(i));if(Do.length=0,Or){Or.push(...t);return}for(Or=t,_s=0;_s<Or.length;_s++)Or[_s]();Or=null,_s=0}}const Sl=e=>e.id==null?1/0:e.id,AR=(e,t)=>{const n=Sl(e)-Sl(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function W0(e){Kh=!1,wl=!0,In.sort(AR);try{for(Mi=0;Mi<In.length;Mi++){const t=In[Mi];t&&t.active!==!1&&zr(t,null,14)}}finally{Mi=0,In.length=0,z0(),wl=!1,Wv=null,(In.length||Do.length)&&W0()}}function PR(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Ct;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=i[c]||Ct;h&&(r=n.map(m=>Ft(m)?m.trim():m)),f&&(r=n.map(jh))}let a,l=i[a=Xf(t)]||i[a=Xf(fi(t))];!l&&s&&(l=i[a=Xf(oa(t))]),l&&di(l,e,6,r);const u=i[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,di(u,e,6,r)}}function q0(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!He(e)){const l=u=>{const c=q0(u,t,!0);c&&(a=!0,$t(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(_t(e)&&i.set(e,null),null):(Le(s)?s.forEach(l=>o[l]=null):$t(o,s),_t(e)&&i.set(e,o),o)}function Td(e,t){return!e||!wd(t)?!1:(t=t.slice(2).replace(/Once$/,""),st(e,t[0].toLowerCase()+t.slice(1))||st(e,oa(t))||st(e,t))}let On=null,G0=null;function Nc(e){const t=On;return On=e,G0=e&&e.type.__scopeId||null,t}function si(e,t=On,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&A_(-1);const s=Nc(t);let o;try{o=e(...r)}finally{Nc(s),i._d&&A_(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zf(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:h,setupState:m,ctx:g,inheritAttrs:y}=e,p=Nc(e);let E,P;try{if(n.shapeFlag&4){const N=r||i,R=N;E=wi(u.call(R,N,c,f,m,h,g)),P=a}else{const N=t;E=wi(N.length>1?N(f,{attrs:a,slots:o,emit:l}):N(f,null)),P=t.props?a:RR(a)}}catch(N){ol.length=0,tu(N,e,1),E=v(Mn)}let V=E;if(P&&y!==!1){const N=Object.keys(P),{shapeFlag:R}=V;N.length&&R&7&&(s&&N.some(Vv)&&(P=VR(P,s)),V=fr(V,P,!1,!0))}return n.dirs&&(V=fr(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),E=V,Nc(p),E}function xR(e,t=!0){let n;for(let i=0;i<e.length;i++){const r=e[i];if(Tl(r)){if(r.type!==Mn||r.children==="v-if"){if(n)return;n=r}}else return}return n}const RR=e=>{let t;for(const n in e)(n==="class"||n==="style"||wd(n))&&((t||(t={}))[n]=e[n]);return t},VR=(e,t)=>{const n={};for(const i in e)(!Vv(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function DR(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?m_(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const h=c[f];if(o[h]!==i[h]&&!Td(u,h))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?m_(i,o,u):!0:!!o;return!1}function m_(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!Td(n,s))return!0}return!1}function Gv({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Kv="components",NR="directives";function _n(e,t){return Yv(Kv,e,!0,t)||e}const OR=Symbol.for("v-ndc");function MR(e){return Ft(e)&&Yv(Kv,e,!1)||e}function Jn(e){return Yv(NR,e)}function Yv(e,t,n=!0,i=!1){const r=On||on;if(r){const s=r.type;if(e===Kv){const a=R1(s,!1);if(a&&(a===t||a===fi(t)||a===Qi(fi(t))))return s}const o=v_(r[e]||s[e],t)||v_(r.appContext[e],t);return!o&&i?s:o}}function v_(e,t){return e&&(e[t]||e[fi(t)]||e[Qi(fi(t))])}const LR=e=>e.__isSuspense;let Qh=0;const FR={name:"Suspense",__isSuspense:!0,process(e,t,n,i,r,s,o,a,l,u){if(e==null)BR(t,n,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!e.suspense.isInFallback){t.suspense=e.suspense,t.suspense.vnode=t,t.el=e.el;return}$R(e,t,n,i,r,o,a,l,u)}},hydrate:UR,create:Qv,normalize:HR},K0=FR;function Cl(e,t){const n=e.props&&e.props[t];He(n)&&n()}function BR(e,t,n,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),h=e.suspense=Qv(e,r,i,t,f,n,s,o,a,l);u(null,h.pendingBranch=e.ssContent,f,null,i,h,s,o),h.deps>0?(Cl(e,"onPending"),Cl(e,"onFallback"),u(null,e.ssFallback,t,n,i,null,s,o),No(h,e.ssFallback)):h.resolve(!1,!0)}function $R(e,t,n,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const h=t.ssContent,m=t.ssFallback,{activeBranch:g,pendingBranch:y,isInFallback:p,isHydrating:E}=f;if(y)f.pendingBranch=h,Li(h,y)?(l(y,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():p&&(E||(l(g,m,n,i,r,null,s,o,a),No(f,m)))):(f.pendingId=Qh++,E?(f.isHydrating=!1,f.activeBranch=y):u(y,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),p?(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,m,n,i,r,null,s,o,a),No(f,m))):g&&Li(h,g)?(l(g,h,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&Li(h,g))l(g,h,n,i,r,f,s,o,a),No(f,h);else if(Cl(t,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=Qh++,l(null,h,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:P,pendingId:V}=f;P>0?setTimeout(()=>{f.pendingId===V&&f.fallback(m)},P):P===0&&f.fallback(m)}}function Qv(e,t,n,i,r,s,o,a,l,u,c=!1){const{p:f,m:h,um:m,n:g,o:{parentNode:y,remove:p}}=u;let E;const P=zR(e);P&&t&&t.pendingBranch&&(E=t.pendingId,t.deps++);const V=e.props?y0(e.props.timeout):void 0,N=s,R={vnode:e,parent:t,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:Qh++,timeout:typeof V=="number"?V:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(D=!1,S=!1){const{vnode:w,activeBranch:b,pendingBranch:C,pendingId:A,effects:k,parentComponent:x,container:U}=R;let G=!1;R.isHydrating?R.isHydrating=!1:D||(G=b&&C.transition&&C.transition.mode==="out-in",G&&(b.transition.afterLeave=()=>{A===R.pendingId&&(h(C,U,s===N?g(b):s,0),Yh(k))}),b&&(y(b.el)!==R.hiddenContainer&&(s=g(b)),m(b,x,R,!0)),G||h(C,U,s,0)),No(R,C),R.pendingBranch=null,R.isInFallback=!1;let J=R.parent,ae=!1;for(;J;){if(J.pendingBranch){J.effects.push(...k),ae=!0;break}J=J.parent}!ae&&!G&&Yh(k),R.effects=[],P&&t&&t.pendingBranch&&E===t.pendingId&&(t.deps--,t.deps===0&&!S&&t.resolve()),Cl(w,"onResolve")},fallback(D){if(!R.pendingBranch)return;const{vnode:S,activeBranch:w,parentComponent:b,container:C,namespace:A}=R;Cl(S,"onFallback");const k=g(w),x=()=>{R.isInFallback&&(f(null,D,C,k,b,null,A,a,l),No(R,D))},U=D.transition&&D.transition.mode==="out-in";U&&(w.transition.afterLeave=x),R.isInFallback=!0,m(w,b,null,!0),U||x()},move(D,S,w){R.activeBranch&&h(R.activeBranch,D,S,w),R.container=D},next(){return R.activeBranch&&g(R.activeBranch)},registerDep(D,S){const w=!!R.pendingBranch;w&&R.deps++;const b=D.vnode.el;D.asyncDep.catch(C=>{tu(C,D,0)}).then(C=>{if(D.isUnmounted||R.isUnmounted||R.pendingId!==D.suspenseId)return;D.asyncResolved=!0;const{vnode:A}=D;sm(D,C,!1),b&&(A.el=b);const k=!b&&D.subTree.el;S(D,A,y(b||D.subTree.el),b?null:g(D.subTree),R,o,l),k&&p(k),Gv(D,A.el),w&&--R.deps===0&&R.resolve()})},unmount(D,S){R.isUnmounted=!0,R.activeBranch&&m(R.activeBranch,n,D,S),R.pendingBranch&&m(R.pendingBranch,n,D,S)}};return R}function UR(e,t,n,i,r,s,o,a,l){const u=t.suspense=Qv(t,i,n,e.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(e,u.pendingBranch=t.ssContent,n,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function HR(e){const{shapeFlag:t,children:n}=e,i=t&32;e.ssContent=g_(i?n.default:n),e.ssFallback=i?g_(n.fallback):v(Mn)}function g_(e){let t;if(He(e)){const n=$o&&e._c;n&&(e._d=!1,bi()),e=e(),n&&(e._d=!0,t=ai,gC())}return Le(e)&&(e=xR(e)),e=wi(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function jR(e,t){t&&t.pendingBranch?Le(e)?t.effects.push(...e):t.effects.push(e):Yh(e)}function No(e,t){e.activeBranch=t;const{vnode:n,parentComponent:i}=e;let r=t.el;for(;!r&&t.component;)t=t.component.subTree,r=t.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,Gv(i,r))}function zR(e){const t=e.props&&e.props.suspensible;return t!=null&&t!==!1}const WR=Symbol.for("v-scx"),qR=()=>Be(WR);function Vt(e,t){return Xv(e,null,t)}const Ju={};function be(e,t,n){return Xv(e,t,n)}function Xv(e,t,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=Ct){if(t&&s){const D=t;t=(...S)=>{D(...S),R()}}const l=on,u=D=>i===!0?D:bs(D,i===!1?1:void 0);let c,f=!1,h=!1;if(Rt(e)?(c=()=>e.value,f=Dc(e)):nl(e)?(c=()=>u(e),f=!0):Le(e)?(h=!0,f=e.some(D=>nl(D)||Dc(D)),c=()=>e.map(D=>{if(Rt(D))return D.value;if(nl(D))return u(D);if(He(D))return zr(D,l,2)})):He(e)?t?c=()=>zr(e,l,2):c=()=>(m&&m(),di(e,l,3,[g])):c=oi,t&&i){const D=c;c=()=>bs(D())}let m,g=D=>{m=V.onStop=()=>{zr(D,l,4),m=V.onStop=void 0}},y;if(Pd)if(g=oi,t?n&&di(t,l,3,[c(),h?[]:void 0,g]):c(),r==="sync"){const D=qR();y=D.__watcherHandles||(D.__watcherHandles=[])}else return oi;let p=h?new Array(e.length).fill(Ju):Ju;const E=()=>{if(!(!V.active||!V.dirty))if(t){const D=V.run();(i||f||(h?D.some((S,w)=>Yr(S,p[w])):Yr(D,p)))&&(m&&m(),di(t,l,3,[D,p===Ju?void 0:h&&p[0]===Ju?[]:p,g]),p=D)}else V.run()};E.allowRecurse=!!t;let P;r==="sync"?P=E:r==="post"?P=()=>Fn(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),P=()=>qv(E));const V=new Fv(c,oi,P),N=S0(),R=()=>{V.stop(),N&&Dv(N.effects,V)};return t?n?E():p=V.run():r==="post"?Fn(V.run.bind(V),l&&l.suspense):V.run(),y&&y.push(R),R}function GR(e,t,n){const i=this.proxy,r=Ft(e)?e.includes(".")?Y0(i,e):()=>i[e]:e.bind(i,i);let s;He(t)?s=t:(s=t.handler,n=t);const o=ru(this),a=Xv(r,s.bind(i),n);return o(),a}function Y0(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function bs(e,t=1/0,n){if(t<=0||!_t(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Rt(e))bs(e.value,t,n);else if(Le(e))for(let i=0;i<e.length;i++)bs(e[i],t,n);else if(f0(e)||Vo(e))e.forEach(i=>{bs(i,t,n)});else if(v0(e))for(const i in e)bs(e[i],t,n);return e}function Tt(e,t){if(On===null)return e;const n=xd(On)||On.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=Ct]=t[r];s&&(He(s)&&(s={mounted:s,updated:s}),s.deep&&bs(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function ds(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(es(),di(l,n,8,[e.el,a,e,t]),ts())}}const Mr=Symbol("_leaveCb"),Zu=Symbol("_enterCb");function Q0(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mn(()=>{e.isMounted=!0}),vn(()=>{e.isUnmounting=!0}),e}const ri=[Function,Array],X0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ri,onEnter:ri,onAfterEnter:ri,onEnterCancelled:ri,onBeforeLeave:ri,onLeave:ri,onAfterLeave:ri,onLeaveCancelled:ri,onBeforeAppear:ri,onAppear:ri,onAfterAppear:ri,onAppearCancelled:ri},KR={name:"BaseTransition",props:X0,setup(e,{slots:t}){const n=iu(),i=Q0();return()=>{const r=t.default&&Jv(t.default(),!0);if(!r||!r.length)return;let s=r[0];if(r.length>1){for(const h of r)if(h.type!==Mn){s=h;break}}const o=$e(e),{mode:a}=o;if(i.isLeaving)return eh(s);const l=y_(s);if(!l)return eh(s);const u=El(l,o,i,n);Il(l,u);const c=n.subTree,f=c&&y_(c);if(f&&f.type!==Mn&&!Li(l,f)){const h=El(f,o,i,n);if(Il(f,h),a==="out-in"&&l.type!==Mn)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},eh(s);a==="in-out"&&l.type!==Mn&&(h.delayLeave=(m,g,y)=>{const p=J0(i,f);p[String(f.key)]=f,m[Mr]=()=>{g(),m[Mr]=void 0,delete u.delayedLeave},u.delayedLeave=y})}return s}}},YR=KR;function J0(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function El(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:c,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:y,onAppear:p,onAfterAppear:E,onAppearCancelled:P}=t,V=String(e.key),N=J0(n,e),R=(w,b)=>{w&&di(w,i,9,b)},D=(w,b)=>{const C=b[1];R(w,b),Le(w)?w.every(A=>A.length<=1)&&C():w.length<=1&&C()},S={mode:s,persisted:o,beforeEnter(w){let b=a;if(!n.isMounted)if(r)b=y||a;else return;w[Mr]&&w[Mr](!0);const C=N[V];C&&Li(e,C)&&C.el[Mr]&&C.el[Mr](),R(b,[w])},enter(w){let b=l,C=u,A=c;if(!n.isMounted)if(r)b=p||l,C=E||u,A=P||c;else return;let k=!1;const x=w[Zu]=U=>{k||(k=!0,U?R(A,[w]):R(C,[w]),S.delayedLeave&&S.delayedLeave(),w[Zu]=void 0)};b?D(b,[w,x]):x()},leave(w,b){const C=String(e.key);if(w[Zu]&&w[Zu](!0),n.isUnmounting)return b();R(f,[w]);let A=!1;const k=w[Mr]=x=>{A||(A=!0,b(),x?R(g,[w]):R(m,[w]),w[Mr]=void 0,N[C]===e&&delete N[C])};N[C]=e,h?D(h,[w,k]):k()},clone(w){return El(w,t,n,i)}};return S}function eh(e){if(kd(e))return e=fr(e),e.children=null,e}function y_(e){if(!kd(e))return e;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&He(n.default))return n.default()}}function Il(e,t){e.shapeFlag&6&&e.component?Il(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Jv(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Te?(o.patchFlag&128&&r++,i=i.concat(Jv(o.children,t,a))):(t||o.type!==Mn)&&i.push(a!=null?fr(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Zv(e,t){return He(e)?$t({name:e.name},t,{setup:e}):e}const pc=e=>!!e.type.__asyncLoader,kd=e=>e.type.__isKeepAlive;function Z0(e,t){tC(e,"a",t)}function eC(e,t){tC(e,"da",t)}function tC(e,t,n=on){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Ad(t,i,n),n){let r=n.parent;for(;r&&r.parent;)kd(r.parent.vnode)&&QR(i,t,n,r),r=r.parent}}function QR(e,t,n,i){const r=Ad(t,e,i,!0);ng(()=>{Dv(i[t],r)},n)}function Ad(e,t,n=on,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;es();const a=ru(n),l=di(t,n,e,o);return a(),ts(),l});return i?r.unshift(s):r.push(s),s}}const br=e=>(t,n=on)=>(!Pd||e==="sp")&&Ad(e,(...i)=>t(...i),n),eg=br("bm"),mn=br("m"),nC=br("bu"),tg=br("u"),vn=br("bum"),ng=br("um"),iC=br("sp"),XR=br("rtg"),JR=br("rtc");function ZR(e,t=on){Ad("ec",e,t)}function OW(e,t,n,i){let r;const s=n;if(Le(e)||Ft(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,s)}else if(_t(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,s));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];r[a]=t(e[u],u,a,s)}}else r=[];return r}const Xh=e=>e?_C(e)?xd(e)||e.proxy:Xh(e.parent):null,il=$t(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xh(e.parent),$root:e=>Xh(e.root),$emit:e=>e.emit,$options:e=>ig(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,qv(e.update)}),$nextTick:e=>e.n||(e.n=Ge.bind(e.proxy)),$watch:e=>GR.bind(e)}),th=(e,t)=>e!==Ct&&!e.__isScriptSetup&&st(e,t),e1={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(th(i,t))return o[t]=1,i[t];if(r!==Ct&&st(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&st(u,t))return o[t]=3,s[t];if(n!==Ct&&st(n,t))return o[t]=4,n[t];Jh&&(o[t]=0)}}const c=il[t];let f,h;if(c)return t==="$attrs"&&jn(e.attrs,"get",""),c(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==Ct&&st(n,t))return o[t]=4,n[t];if(h=l.config.globalProperties,st(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return th(r,t)?(r[t]=n,!0):i!==Ct&&st(i,t)?(i[t]=n,!0):st(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==Ct&&st(e,o)||th(t,o)||(a=s[0])&&st(a,o)||st(i,o)||st(il,o)||st(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:st(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function p_(e){return Le(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Jh=!0;function t1(e){const t=ig(e),n=e.proxy,i=e.ctx;Jh=!1,t.beforeCreate&&__(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:h,beforeUpdate:m,updated:g,activated:y,deactivated:p,beforeDestroy:E,beforeUnmount:P,destroyed:V,unmounted:N,render:R,renderTracked:D,renderTriggered:S,errorCaptured:w,serverPrefetch:b,expose:C,inheritAttrs:A,components:k,directives:x,filters:U}=t;if(u&&n1(u,i,null),o)for(const ae in o){const j=o[ae];He(j)&&(i[ae]=j.bind(n))}if(r){const ae=r.call(n,n);_t(ae)&&(e.data=En(ae))}if(Jh=!0,s)for(const ae in s){const j=s[ae],ee=He(j)?j.bind(n,n):He(j.get)?j.get.bind(n,n):oi,H=!He(j)&&He(j.set)?j.set.bind(n):oi,K=I({get:ee,set:H});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>K.value,set:se=>K.value=se})}if(a)for(const ae in a)rC(a[ae],i,n,ae);if(l){const ae=He(l)?l.call(n):l;Reflect.ownKeys(ae).forEach(j=>{dt(j,ae[j])})}c&&__(c,e,"c");function J(ae,j){Le(j)?j.forEach(ee=>ae(ee.bind(n))):j&&ae(j.bind(n))}if(J(eg,f),J(mn,h),J(nC,m),J(tg,g),J(Z0,y),J(eC,p),J(ZR,w),J(JR,D),J(XR,S),J(vn,P),J(ng,N),J(iC,b),Le(C))if(C.length){const ae=e.exposed||(e.exposed={});C.forEach(j=>{Object.defineProperty(ae,j,{get:()=>n[j],set:ee=>n[j]=ee})})}else e.exposed||(e.exposed={});R&&e.render===oi&&(e.render=R),A!=null&&(e.inheritAttrs=A),k&&(e.components=k),x&&(e.directives=x)}function n1(e,t,n=oi){Le(e)&&(e=Zh(e));for(const i in e){const r=e[i];let s;_t(r)?"default"in r?s=Be(r.from||i,r.default,!0):s=Be(r.from||i):s=Be(r),Rt(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function __(e,t,n){di(Le(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function rC(e,t,n,i){const r=i.includes(".")?Y0(n,i):()=>n[i];if(Ft(e)){const s=t[e];He(s)&&be(r,s)}else if(He(e))be(r,e.bind(n));else if(_t(e))if(Le(e))e.forEach(s=>rC(s,t,n,i));else{const s=He(e.handler)?e.handler.bind(n):t[e.handler];He(s)&&be(r,s,e)}}function ig(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(u=>Oc(l,u,o,!0)),Oc(l,t,o)),_t(t)&&s.set(t,l),l}function Oc(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Oc(e,s,n,!0),r&&r.forEach(o=>Oc(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=i1[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const i1={data:b_,props:w_,emits:w_,methods:qa,computed:qa,beforeCreate:Nn,created:Nn,beforeMount:Nn,mounted:Nn,beforeUpdate:Nn,updated:Nn,beforeDestroy:Nn,beforeUnmount:Nn,destroyed:Nn,unmounted:Nn,activated:Nn,deactivated:Nn,errorCaptured:Nn,serverPrefetch:Nn,components:qa,directives:qa,watch:s1,provide:b_,inject:r1};function b_(e,t){return t?e?function(){return $t(He(e)?e.call(this,this):e,He(t)?t.call(this,this):t)}:t:e}function r1(e,t){return qa(Zh(e),Zh(t))}function Zh(e){if(Le(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Nn(e,t){return e?[...new Set([].concat(e,t))]:t}function qa(e,t){return e?$t(Object.create(null),e,t):t}function w_(e,t){return e?Le(e)&&Le(t)?[...new Set([...e,...t])]:$t(Object.create(null),p_(e),p_(t??{})):t}function s1(e,t){if(!e)return t;if(!t)return e;const n=$t(Object.create(null),e);for(const i in t)n[i]=Nn(e[i],t[i]);return n}function sC(){return{app:null,config:{isNativeTag:Hx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let o1=0;function a1(e,t){return function(i,r=null){He(i)||(i=$t({},i)),r!=null&&!_t(r)&&(r=null);const s=sC(),o=new WeakSet;let a=!1;const l=s.app={_uid:o1++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:D1,get config(){return s.config},set config(u){},use(u,...c){return o.has(u)||(u&&He(u.install)?(o.add(u),u.install(l,...c)):He(u)&&(o.add(u),u(l,...c))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,c){return c?(s.components[u]=c,l):s.components[u]},directive(u,c){return c?(s.directives[u]=c,l):s.directives[u]},mount(u,c,f){if(!a){const h=v(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),c&&t?t(h,u):e(h,u,f),a=!0,l._container=u,u.__vue_app__=l,xd(h.component)||h.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return s.provides[u]=c,l},runWithContext(u){const c=rl;rl=l;try{return u()}finally{rl=c}}};return l}}let rl=null;function dt(e,t){if(on){let n=on.provides;const i=on.parent&&on.parent.provides;i===n&&(n=on.provides=Object.create(i)),n[e]=t}}function Be(e,t,n=!1){const i=on||On;if(i||rl){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:rl._context.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&He(t)?t.call(i&&i.proxy):t}}const oC={},aC=()=>Object.create(oC),lC=e=>Object.getPrototypeOf(e)===oC;function l1(e,t,n,i=!1){const r={},s=aC();e.propsDefaults=Object.create(null),uC(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:N0(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function u1(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=$e(r),[l]=e.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let h=c[f];if(Td(e.emitsOptions,h))continue;const m=t[h];if(l)if(st(s,h))m!==s[h]&&(s[h]=m,u=!0);else{const g=fi(h);r[g]=em(l,a,g,m,e,!1)}else m!==s[h]&&(s[h]=m,u=!0)}}}else{uC(e,t,r,s)&&(u=!0);let c;for(const f in a)(!t||!st(t,f)&&((c=oa(f))===f||!st(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=em(l,a,f,void 0,e,!0)):delete r[f]);if(s!==a)for(const f in s)(!t||!st(t,f))&&(delete s[f],u=!0)}u&&ur(e.attrs,"set","")}function uC(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(tl(l))continue;const u=t[l];let c;r&&st(r,c=fi(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:Td(e.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=$e(n),u=a||Ct;for(let c=0;c<s.length;c++){const f=s[c];n[f]=em(r,l,f,u[f],e,!st(u,f))}}return o}function em(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=st(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&He(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=ru(r);i=u[n]=l.call(null,t),c()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===oa(n))&&(i=!0))}return i}function cC(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!He(e)){const c=f=>{l=!0;const[h,m]=cC(f,t,!0);$t(o,h),m&&a.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return _t(e)&&i.set(e,Ro),Ro;if(Le(s))for(let c=0;c<s.length;c++){const f=fi(s[c]);S_(f)&&(o[f]=Ct)}else if(s)for(const c in s){const f=fi(c);if(S_(f)){const h=s[c],m=o[f]=Le(h)||He(h)?{type:h}:$t({},h);if(m){const g=I_(Boolean,m.type),y=I_(String,m.type);m[0]=g>-1,m[1]=y<0||g<y,(g>-1||st(m,"default"))&&a.push(f)}}}const u=[o,a];return _t(e)&&i.set(e,u),u}function S_(e){return e[0]!=="$"&&!tl(e)}function C_(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function E_(e,t){return C_(e)===C_(t)}function I_(e,t){return Le(t)?t.findIndex(n=>E_(n,e)):He(t)&&E_(t,e)?0:-1}const dC=e=>e[0]==="_"||e==="$stable",rg=e=>Le(e)?e.map(wi):[wi(e)],c1=(e,t,n)=>{if(t._n)return t;const i=si((...r)=>rg(t(...r)),n);return i._c=!1,i},fC=(e,t,n)=>{const i=e._ctx;for(const r in e){if(dC(r))continue;const s=e[r];if(He(s))t[r]=c1(r,s,i);else if(s!=null){const o=rg(s);t[r]=()=>o}}},hC=(e,t)=>{const n=rg(t);e.slots.default=()=>n},d1=(e,t)=>{const n=e.slots=aC();if(e.vnode.shapeFlag&32){const i=t._;i?($t(n,t),g0(n,"_",i,!0)):fC(t,n)}else t&&hC(e,t)},f1=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=Ct;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:($t(r,t),!n&&a===1&&delete r._):(s=!t.$stable,fC(t,r)),o=t}else t&&(hC(e,t),o={default:1});if(s)for(const a in r)!dC(a)&&o[a]==null&&delete r[a]};function tm(e,t,n,i,r=!1){if(Le(e)){e.forEach((h,m)=>tm(h,t&&(Le(t)?t[m]:t),n,i,r));return}if(pc(i)&&!r)return;const s=i.shapeFlag&4?xd(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===Ct?a.refs={}:a.refs,f=a.setupState;if(u!=null&&u!==l&&(Ft(u)?(c[u]=null,st(f,u)&&(f[u]=null)):Rt(u)&&(u.value=null)),He(l))zr(l,a,12,[o,c]);else{const h=Ft(l),m=Rt(l);if(h||m){const g=()=>{if(e.f){const y=h?st(f,l)?f[l]:c[l]:l.value;r?Le(y)&&Dv(y,s):Le(y)?y.includes(s)||y.push(s):h?(c[l]=[s],st(f,l)&&(f[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else h?(c[l]=o,st(f,l)&&(f[l]=o)):m&&(l.value=o,e.k&&(c[e.k]=o))};o?(g.id=-1,Fn(g,n)):g()}}}const Fn=jR;function h1(e){return m1(e)}function m1(e,t){const n=p0();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:h,setScopeId:m=oi,insertStaticContent:g}=e,y=(O,L,F,q=null,X=null,fe=null,ue=void 0,me=null,ge=!!L.dynamicChildren)=>{if(O===L)return;O&&!Li(O,L)&&(q=B(O),se(O,X,fe,!0),O=null),L.patchFlag===-2&&(ge=!1,L.dynamicChildren=null);const{type:ce,ref:Ie,shapeFlag:De}=L;switch(ce){case nu:p(O,L,F,q);break;case Mn:E(O,L,F,q);break;case ih:O==null&&P(L,F,q,ue);break;case Te:k(O,L,F,q,X,fe,ue,me,ge);break;default:De&1?R(O,L,F,q,X,fe,ue,me,ge):De&6?x(O,L,F,q,X,fe,ue,me,ge):(De&64||De&128)&&ce.process(O,L,F,q,X,fe,ue,me,ge,Q)}Ie!=null&&X&&tm(Ie,O&&O.ref,fe,L||O,!L)},p=(O,L,F,q)=>{if(O==null)i(L.el=a(L.children),F,q);else{const X=L.el=O.el;L.children!==O.children&&u(X,L.children)}},E=(O,L,F,q)=>{O==null?i(L.el=l(L.children||""),F,q):L.el=O.el},P=(O,L,F,q)=>{[O.el,O.anchor]=g(O.children,L,F,q,O.el,O.anchor)},V=({el:O,anchor:L},F,q)=>{let X;for(;O&&O!==L;)X=h(O),i(O,F,q),O=X;i(L,F,q)},N=({el:O,anchor:L})=>{let F;for(;O&&O!==L;)F=h(O),r(O),O=F;r(L)},R=(O,L,F,q,X,fe,ue,me,ge)=>{L.type==="svg"?ue="svg":L.type==="math"&&(ue="mathml"),O==null?D(L,F,q,X,fe,ue,me,ge):b(O,L,X,fe,ue,me,ge)},D=(O,L,F,q,X,fe,ue,me)=>{let ge,ce;const{props:Ie,shapeFlag:De,transition:xe,dirs:Ve}=O;if(ge=O.el=o(O.type,fe,Ie&&Ie.is,Ie),De&8?c(ge,O.children):De&16&&w(O.children,ge,null,q,X,nh(O,fe),ue,me),Ve&&ds(O,null,q,"created"),S(ge,O,O.scopeId,ue,q),Ie){for(const rt in Ie)rt!=="value"&&!tl(rt)&&s(ge,rt,null,Ie[rt],fe,O.children,q,X,oe);"value"in Ie&&s(ge,"value",null,Ie.value,fe),(ce=Ie.onVnodeBeforeMount)&&Oi(ce,q,O)}Ve&&ds(O,null,q,"beforeMount");const Oe=v1(X,xe);Oe&&xe.beforeEnter(ge),i(ge,L,F),((ce=Ie&&Ie.onVnodeMounted)||Oe||Ve)&&Fn(()=>{ce&&Oi(ce,q,O),Oe&&xe.enter(ge),Ve&&ds(O,null,q,"mounted")},X)},S=(O,L,F,q,X)=>{if(F&&m(O,F),q)for(let fe=0;fe<q.length;fe++)m(O,q[fe]);if(X){let fe=X.subTree;if(L===fe){const ue=X.vnode;S(O,ue,ue.scopeId,ue.slotScopeIds,X.parent)}}},w=(O,L,F,q,X,fe,ue,me,ge=0)=>{for(let ce=ge;ce<O.length;ce++){const Ie=O[ce]=me?Lr(O[ce]):wi(O[ce]);y(null,Ie,L,F,q,X,fe,ue,me)}},b=(O,L,F,q,X,fe,ue)=>{const me=L.el=O.el;let{patchFlag:ge,dynamicChildren:ce,dirs:Ie}=L;ge|=O.patchFlag&16;const De=O.props||Ct,xe=L.props||Ct;let Ve;if(F&&fs(F,!1),(Ve=xe.onVnodeBeforeUpdate)&&Oi(Ve,F,L,O),Ie&&ds(L,O,F,"beforeUpdate"),F&&fs(F,!0),ce?C(O.dynamicChildren,ce,me,F,q,nh(L,X),fe):ue||j(O,L,me,null,F,q,nh(L,X),fe,!1),ge>0){if(ge&16)A(me,L,De,xe,F,q,X);else if(ge&2&&De.class!==xe.class&&s(me,"class",null,xe.class,X),ge&4&&s(me,"style",De.style,xe.style,X),ge&8){const Oe=L.dynamicProps;for(let rt=0;rt<Oe.length;rt++){const gt=Oe[rt],Bt=De[gt],zn=xe[gt];(zn!==Bt||gt==="value")&&s(me,gt,Bt,zn,X,O.children,F,q,oe)}}ge&1&&O.children!==L.children&&c(me,L.children)}else!ue&&ce==null&&A(me,L,De,xe,F,q,X);((Ve=xe.onVnodeUpdated)||Ie)&&Fn(()=>{Ve&&Oi(Ve,F,L,O),Ie&&ds(L,O,F,"updated")},q)},C=(O,L,F,q,X,fe,ue)=>{for(let me=0;me<L.length;me++){const ge=O[me],ce=L[me],Ie=ge.el&&(ge.type===Te||!Li(ge,ce)||ge.shapeFlag&70)?f(ge.el):F;y(ge,ce,Ie,null,q,X,fe,ue,!0)}},A=(O,L,F,q,X,fe,ue)=>{if(F!==q){if(F!==Ct)for(const me in F)!tl(me)&&!(me in q)&&s(O,me,F[me],null,ue,L.children,X,fe,oe);for(const me in q){if(tl(me))continue;const ge=q[me],ce=F[me];ge!==ce&&me!=="value"&&s(O,me,ce,ge,ue,L.children,X,fe,oe)}"value"in q&&s(O,"value",F.value,q.value,ue)}},k=(O,L,F,q,X,fe,ue,me,ge)=>{const ce=L.el=O?O.el:a(""),Ie=L.anchor=O?O.anchor:a("");let{patchFlag:De,dynamicChildren:xe,slotScopeIds:Ve}=L;Ve&&(me=me?me.concat(Ve):Ve),O==null?(i(ce,F,q),i(Ie,F,q),w(L.children||[],F,Ie,X,fe,ue,me,ge)):De>0&&De&64&&xe&&O.dynamicChildren?(C(O.dynamicChildren,xe,F,X,fe,ue,me),(L.key!=null||X&&L===X.subTree)&&sg(O,L,!0)):j(O,L,F,Ie,X,fe,ue,me,ge)},x=(O,L,F,q,X,fe,ue,me,ge)=>{L.slotScopeIds=me,O==null?L.shapeFlag&512?X.ctx.activate(L,F,q,ue,ge):U(L,F,q,X,fe,ue,ge):G(O,L,ge)},U=(O,L,F,q,X,fe,ue)=>{const me=O.component=T1(O,q,X);if(kd(O)&&(me.ctx.renderer=Q),k1(me),me.asyncDep){if(X&&X.registerDep(me,J),!O.el){const ge=me.subTree=v(Mn);E(null,ge,L,F)}}else J(me,O,L,F,X,fe,ue)},G=(O,L,F)=>{const q=L.component=O.component;if(DR(O,L,F))if(q.asyncDep&&!q.asyncResolved){ae(q,L,F);return}else q.next=L,kR(q.update),q.effect.dirty=!0,q.update();else L.el=O.el,q.vnode=L},J=(O,L,F,q,X,fe,ue)=>{const me=()=>{if(O.isMounted){let{next:Ie,bu:De,u:xe,parent:Ve,vnode:Oe}=O;{const ni=mC(O);if(ni){Ie&&(Ie.el=Oe.el,ae(O,Ie,ue)),ni.asyncDep.then(()=>{O.isUnmounted||me()});return}}let rt=Ie,gt;fs(O,!1),Ie?(Ie.el=Oe.el,ae(O,Ie,ue)):Ie=Oe,De&&gc(De),(gt=Ie.props&&Ie.props.onVnodeBeforeUpdate)&&Oi(gt,Ve,Ie,Oe),fs(O,!0);const Bt=Zf(O),zn=O.subTree;O.subTree=Bt,y(zn,Bt,f(zn.el),B(zn),O,X,fe),Ie.el=Bt.el,rt===null&&Gv(O,Bt.el),xe&&Fn(xe,X),(gt=Ie.props&&Ie.props.onVnodeUpdated)&&Fn(()=>Oi(gt,Ve,Ie,Oe),X)}else{let Ie;const{el:De,props:xe}=L,{bm:Ve,m:Oe,parent:rt}=O,gt=pc(L);if(fs(O,!1),Ve&&gc(Ve),!gt&&(Ie=xe&&xe.onVnodeBeforeMount)&&Oi(Ie,rt,L),fs(O,!0),De&&ie){const Bt=()=>{O.subTree=Zf(O),ie(De,O.subTree,O,X,null)};gt?L.type.__asyncLoader().then(()=>!O.isUnmounted&&Bt()):Bt()}else{const Bt=O.subTree=Zf(O);y(null,Bt,F,q,O,X,fe),L.el=Bt.el}if(Oe&&Fn(Oe,X),!gt&&(Ie=xe&&xe.onVnodeMounted)){const Bt=L;Fn(()=>Oi(Ie,rt,Bt),X)}(L.shapeFlag&256||rt&&pc(rt.vnode)&&rt.vnode.shapeFlag&256)&&O.a&&Fn(O.a,X),O.isMounted=!0,L=F=q=null}},ge=O.effect=new Fv(me,oi,()=>qv(ce),O.scope),ce=O.update=()=>{ge.dirty&&ge.run()};ce.id=O.uid,fs(O,!0),ce()},ae=(O,L,F)=>{L.component=O;const q=O.vnode.props;O.vnode=L,O.next=null,u1(O,L.props,q,F),f1(O,L.children,F),es(),h_(O),ts()},j=(O,L,F,q,X,fe,ue,me,ge=!1)=>{const ce=O&&O.children,Ie=O?O.shapeFlag:0,De=L.children,{patchFlag:xe,shapeFlag:Ve}=L;if(xe>0){if(xe&128){H(ce,De,F,q,X,fe,ue,me,ge);return}else if(xe&256){ee(ce,De,F,q,X,fe,ue,me,ge);return}}Ve&8?(Ie&16&&oe(ce,X,fe),De!==ce&&c(F,De)):Ie&16?Ve&16?H(ce,De,F,q,X,fe,ue,me,ge):oe(ce,X,fe,!0):(Ie&8&&c(F,""),Ve&16&&w(De,F,q,X,fe,ue,me,ge))},ee=(O,L,F,q,X,fe,ue,me,ge)=>{O=O||Ro,L=L||Ro;const ce=O.length,Ie=L.length,De=Math.min(ce,Ie);let xe;for(xe=0;xe<De;xe++){const Ve=L[xe]=ge?Lr(L[xe]):wi(L[xe]);y(O[xe],Ve,F,null,X,fe,ue,me,ge)}ce>Ie?oe(O,X,fe,!0,!1,De):w(L,F,q,X,fe,ue,me,ge,De)},H=(O,L,F,q,X,fe,ue,me,ge)=>{let ce=0;const Ie=L.length;let De=O.length-1,xe=Ie-1;for(;ce<=De&&ce<=xe;){const Ve=O[ce],Oe=L[ce]=ge?Lr(L[ce]):wi(L[ce]);if(Li(Ve,Oe))y(Ve,Oe,F,null,X,fe,ue,me,ge);else break;ce++}for(;ce<=De&&ce<=xe;){const Ve=O[De],Oe=L[xe]=ge?Lr(L[xe]):wi(L[xe]);if(Li(Ve,Oe))y(Ve,Oe,F,null,X,fe,ue,me,ge);else break;De--,xe--}if(ce>De){if(ce<=xe){const Ve=xe+1,Oe=Ve<Ie?L[Ve].el:q;for(;ce<=xe;)y(null,L[ce]=ge?Lr(L[ce]):wi(L[ce]),F,Oe,X,fe,ue,me,ge),ce++}}else if(ce>xe)for(;ce<=De;)se(O[ce],X,fe,!0),ce++;else{const Ve=ce,Oe=ce,rt=new Map;for(ce=Oe;ce<=xe;ce++){const Vn=L[ce]=ge?Lr(L[ce]):wi(L[ce]);Vn.key!=null&&rt.set(Vn.key,ce)}let gt,Bt=0;const zn=xe-Oe+1;let ni=!1,Ca=0;const Tr=new Array(zn);for(ce=0;ce<zn;ce++)Tr[ce]=0;for(ce=Ve;ce<=De;ce++){const Vn=O[ce];if(Bt>=zn){se(Vn,X,fe,!0);continue}let ii;if(Vn.key!=null)ii=rt.get(Vn.key);else for(gt=Oe;gt<=xe;gt++)if(Tr[gt-Oe]===0&&Li(Vn,L[gt])){ii=gt;break}ii===void 0?se(Vn,X,fe,!0):(Tr[ii-Oe]=ce+1,ii>=Ca?Ca=ii:ni=!0,y(Vn,L[ii],F,null,X,fe,ue,me,ge),Bt++)}const co=ni?g1(Tr):Ro;for(gt=co.length-1,ce=zn-1;ce>=0;ce--){const Vn=Oe+ce,ii=L[Vn],fo=Vn+1<Ie?L[Vn+1].el:q;Tr[ce]===0?y(null,ii,F,fo,X,fe,ue,me,ge):ni&&(gt<0||ce!==co[gt]?K(ii,F,fo,2):gt--)}}},K=(O,L,F,q,X=null)=>{const{el:fe,type:ue,transition:me,children:ge,shapeFlag:ce}=O;if(ce&6){K(O.component.subTree,L,F,q);return}if(ce&128){O.suspense.move(L,F,q);return}if(ce&64){ue.move(O,L,F,Q);return}if(ue===Te){i(fe,L,F);for(let De=0;De<ge.length;De++)K(ge[De],L,F,q);i(O.anchor,L,F);return}if(ue===ih){V(O,L,F);return}if(q!==2&&ce&1&&me)if(q===0)me.beforeEnter(fe),i(fe,L,F),Fn(()=>me.enter(fe),X);else{const{leave:De,delayLeave:xe,afterLeave:Ve}=me,Oe=()=>i(fe,L,F),rt=()=>{De(fe,()=>{Oe(),Ve&&Ve()})};xe?xe(fe,Oe,rt):rt()}else i(fe,L,F)},se=(O,L,F,q=!1,X=!1)=>{const{type:fe,props:ue,ref:me,children:ge,dynamicChildren:ce,shapeFlag:Ie,patchFlag:De,dirs:xe}=O;if(me!=null&&tm(me,null,F,O,!0),Ie&256){L.ctx.deactivate(O);return}const Ve=Ie&1&&xe,Oe=!pc(O);let rt;if(Oe&&(rt=ue&&ue.onVnodeBeforeUnmount)&&Oi(rt,L,O),Ie&6)de(O.component,F,q);else{if(Ie&128){O.suspense.unmount(F,q);return}Ve&&ds(O,null,L,"beforeUnmount"),Ie&64?O.type.remove(O,L,F,X,Q,q):ce&&(fe!==Te||De>0&&De&64)?oe(ce,L,F,!1,!0):(fe===Te&&De&384||!X&&Ie&16)&&oe(ge,L,F),q&&_e(O)}(Oe&&(rt=ue&&ue.onVnodeUnmounted)||Ve)&&Fn(()=>{rt&&Oi(rt,L,O),Ve&&ds(O,null,L,"unmounted")},F)},_e=O=>{const{type:L,el:F,anchor:q,transition:X}=O;if(L===Te){Ae(F,q);return}if(L===ih){N(O);return}const fe=()=>{r(F),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(O.shapeFlag&1&&X&&!X.persisted){const{leave:ue,delayLeave:me}=X,ge=()=>ue(F,fe);me?me(O.el,fe,ge):ge()}else fe()},Ae=(O,L)=>{let F;for(;O!==L;)F=h(O),r(O),O=F;r(L)},de=(O,L,F)=>{const{bum:q,scope:X,update:fe,subTree:ue,um:me}=O;q&&gc(q),X.stop(),fe&&(fe.active=!1,se(ue,O,L,F)),me&&Fn(me,L),Fn(()=>{O.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&O.asyncDep&&!O.asyncResolved&&O.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},oe=(O,L,F,q=!1,X=!1,fe=0)=>{for(let ue=fe;ue<O.length;ue++)se(O[ue],L,F,q,X)},B=O=>O.shapeFlag&6?B(O.component.subTree):O.shapeFlag&128?O.suspense.next():h(O.anchor||O.el);let ve=!1;const le=(O,L,F)=>{O==null?L._vnode&&se(L._vnode,null,null,!0):y(L._vnode||null,O,L,null,null,null,F),ve||(ve=!0,h_(),z0(),ve=!1),L._vnode=O},Q={p:y,um:se,m:K,r:_e,mt:U,mc:w,pc:j,pbc:C,n:B,o:e};let Ee,ie;return{render:le,hydrate:Ee,createApp:a1(le,Ee)}}function nh({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function fs({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function v1(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function sg(e,t,n=!1){const i=e.children,r=t.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Lr(r[s]),a.el=o.el),n||sg(o,a)),a.type===nu&&(a.el=o.el)}}function g1(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const u=e[i];if(u!==0){if(r=n[n.length-1],e[r]<u){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<u?s=a+1:o=a;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function mC(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:mC(t)}const y1=e=>e.__isTeleport,sl=e=>e&&(e.disabled||e.disabled===""),T_=e=>typeof SVGElement<"u"&&e instanceof SVGElement,k_=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,nm=(e,t)=>{const n=e&&e.to;return Ft(n)?t?t(n):null:n},p1={name:"Teleport",__isTeleport:!0,process(e,t,n,i,r,s,o,a,l,u){const{mc:c,pc:f,pbc:h,o:{insert:m,querySelector:g,createText:y,createComment:p}}=u,E=sl(t.props);let{shapeFlag:P,children:V,dynamicChildren:N}=t;if(e==null){const R=t.el=y(""),D=t.anchor=y("");m(R,n,i),m(D,n,i);const S=t.target=nm(t.props,g),w=t.targetAnchor=y("");S&&(m(w,S),o==="svg"||T_(S)?o="svg":(o==="mathml"||k_(S))&&(o="mathml"));const b=(C,A)=>{P&16&&c(V,C,A,r,s,o,a,l)};E?b(n,D):S&&b(S,w)}else{t.el=e.el;const R=t.anchor=e.anchor,D=t.target=e.target,S=t.targetAnchor=e.targetAnchor,w=sl(e.props),b=w?n:D,C=w?R:S;if(o==="svg"||T_(D)?o="svg":(o==="mathml"||k_(D))&&(o="mathml"),N?(h(e.dynamicChildren,N,b,r,s,o,a),sg(e,t,!0)):l||f(e,t,b,C,r,s,o,a,!1),E)w?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ec(t,n,R,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const A=t.target=nm(t.props,g);A&&ec(t,A,null,u,0)}else w&&ec(t,D,S,u,1)}vC(t)},remove(e,t,n,i,{um:r,o:{remove:s}},o){const{shapeFlag:a,children:l,anchor:u,targetAnchor:c,target:f,props:h}=e;if(f&&s(c),o&&s(u),a&16){const m=o||!sl(h);for(let g=0;g<l.length;g++){const y=l[g];r(y,t,n,m,!!y.dynamicChildren)}}},move:ec,hydrate:_1};function ec(e,t,n,{o:{insert:i},m:r},s=2){s===0&&i(e.targetAnchor,t,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:c}=e,f=s===2;if(f&&i(o,t,n),(!f||sl(c))&&l&16)for(let h=0;h<u.length;h++)r(u[h],t,n,2);f&&i(a,t,n)}function _1(e,t,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l}},u){const c=t.target=nm(t.props,l);if(c){const f=c._lpa||c.firstChild;if(t.shapeFlag&16)if(sl(t.props))t.anchor=u(o(e),t,a(e),n,i,r,s),t.targetAnchor=f;else{t.anchor=o(e);let h=f;for(;h;)if(h=o(h),h&&h.nodeType===8&&h.data==="teleport anchor"){t.targetAnchor=h,c._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(f,t,c,n,i,r,s)}vC(t)}return t.anchor&&o(t.anchor)}const b1=p1;function vC(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const Te=Symbol.for("v-fgt"),nu=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),ih=Symbol.for("v-stc"),ol=[];let ai=null;function bi(e=!1){ol.push(ai=e?null:[])}function gC(){ol.pop(),ai=ol[ol.length-1]||null}let $o=1;function A_(e){$o+=e}function yC(e){return e.dynamicChildren=$o>0?ai||Ro:null,gC(),$o>0&&ai&&ai.push(e),e}function hs(e,t,n,i,r,s){return yC(li(e,t,n,i,r,s,!0))}function im(e,t,n,i,r){return yC(v(e,t,n,i,r,!0))}function Tl(e){return e?e.__v_isVNode===!0:!1}function Li(e,t){return e.type===t.type&&e.key===t.key}const pC=({key:e})=>e??null,_c=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Ft(e)||Rt(e)||He(e)?{i:On,r:e,k:t,f:!!n}:e:null);function li(e,t=null,n=null,i=0,r=null,s=e===Te?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&pC(t),ref:t&&_c(t),scopeId:G0,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:On};return a?(og(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=Ft(n)?8:16),$o>0&&!o&&ai&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ai.push(l),l}const v=w1;function w1(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===OR)&&(e=Mn),Tl(e)){const a=fr(e,t,!0);return n&&og(a,n),$o>0&&!s&&ai&&(a.shapeFlag&6?ai[ai.indexOf(e)]=a:ai.push(a)),a.patchFlag|=-2,a}if(V1(e)&&(e=e.__vccOpts),t){t=S1(t);let{class:a,style:l}=t;a&&!Ft(a)&&(t.class=Mv(a)),_t(l)&&(O0(l)&&!Le(l)&&(l=$t({},l)),t.style=Ov(l))}const o=Ft(e)?1:LR(e)?128:y1(e)?64:_t(e)?4:He(e)?2:0;return li(e,t,n,i,r,o,s,!0)}function S1(e){return e?O0(e)||lC(e)?$t({},e):e:null}function fr(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=e,u=t?ne(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&pC(u),ref:t&&t.ref?n&&s?Le(s)?s.concat(_c(t)):[s,_c(t)]:_c(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fr(e.ssContent),ssFallback:e.ssFallback&&fr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&(c.transition=l.clone(c)),c}function Ti(e=" ",t=0){return v(nu,null,e,t)}function C1(e="",t=!1){return t?(bi(),im(Mn,null,e)):v(Mn,null,e)}function wi(e){return e==null||typeof e=="boolean"?v(Mn):Le(e)?v(Te,null,e.slice()):typeof e=="object"?Lr(e):v(nu,null,String(e))}function Lr(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fr(e)}function og(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Le(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),og(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!lC(t)?t._ctx=On:r===3&&On&&(On.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else He(t)?(t={default:t,_ctx:On},n=32):(t=String(t),i&64?(n=16,t=[Ti(t)]):n=8);e.children=t,e.shapeFlag|=n}function ne(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=Mv([t.class,i.class]));else if(r==="style")t.style=Ov([t.style,i.style]);else if(wd(r)){const s=t[r],o=i[r];o&&s!==o&&!(Le(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Oi(e,t,n,i=null){di(e,t,7,[n,i])}const E1=sC();let I1=0;function T1(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||E1,s={uid:I1++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new w0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cC(i,r),emitsOptions:q0(i,r),emit:null,emitted:null,propsDefaults:Ct,inheritAttrs:i.inheritAttrs,ctx:Ct,data:Ct,props:Ct,attrs:Ct,slots:Ct,refs:Ct,setupState:Ct,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=PR.bind(null,s),e.ce&&e.ce(s),s}let on=null;const iu=()=>on||On;let Mc,rm;{const e=p0(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Mc=t("__VUE_INSTANCE_SETTERS__",n=>on=n),rm=t("__VUE_SSR_SETTERS__",n=>Pd=n)}const ru=e=>{const t=on;return Mc(e),e.scope.on(),()=>{e.scope.off(),Mc(t)}},P_=()=>{on&&on.scope.off(),Mc(null)};function _C(e){return e.vnode.shapeFlag&4}let Pd=!1;function k1(e,t=!1){t&&rm(t);const{props:n,children:i}=e.vnode,r=_C(e);l1(e,n,r,t),d1(e,i);const s=r?A1(e,t):void 0;return t&&rm(!1),s}function A1(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,e1);const{setup:i}=n;if(i){const r=e.setupContext=i.length>1?x1(e):null,s=ru(e);es();const o=zr(i,e,0,[e.props,r]);if(ts(),s(),h0(o)){if(o.then(P_,P_),t)return o.then(a=>{sm(e,a,t)}).catch(a=>{tu(a,e,0)});e.asyncDep=o}else sm(e,o,t)}else bC(e,t)}function sm(e,t,n){He(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_t(t)&&(e.setupState=$0(t)),bC(e,n)}let x_;function bC(e,t,n){const i=e.type;if(!e.render){if(!t&&x_&&!i.render){const r=i.template||ig(e).template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,u=$t($t({isCustomElement:s,delimiters:a},o),l);i.render=x_(r,u)}}e.render=i.render||oi}{const r=ru(e);es();try{t1(e)}finally{ts(),r()}}}const P1={get(e,t){return jn(e,"get",""),e[t]}};function x1(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,P1),slots:e.slots,emit:e.emit,expose:t}}function xd(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy($0(M0(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in il)return il[n](e)},has(t,n){return n in t||n in il}}))}function R1(e,t=!0){return He(e)?e.displayName||e.name:e.name||t&&e.__name}function V1(e){return He(e)&&"__vccOpts"in e}const I=(e,t)=>bR(e,t,Pd);function Vi(e,t,n){const i=arguments.length;return i===2?_t(t)&&!Le(t)?Tl(t)?v(e,null,[t]):v(e,t):v(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Tl(n)&&(n=[n]),v(e,t,n))}const D1="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const N1="http://www.w3.org/2000/svg",O1="http://www.w3.org/1998/Math/MathML",Fr=typeof document<"u"?document:null,R_=Fr&&Fr.createElement("template"),M1={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?Fr.createElementNS(N1,e):t==="mathml"?Fr.createElementNS(O1,e):Fr.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>Fr.createTextNode(e),createComment:e=>Fr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Fr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{R_.innerHTML=i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e;const a=R_.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Rr="transition",La="animation",Uo=Symbol("_vtc"),zi=(e,{slots:t})=>Vi(YR,SC(e),t);zi.displayName="Transition";const wC={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},L1=zi.props=$t({},X0,wC),ms=(e,t=[])=>{Le(e)?e.forEach(n=>n(...t)):e&&e(...t)},V_=e=>e?Le(e)?e.some(t=>t.length>1):e.length>1:!1;function SC(e){const t={};for(const k in e)k in wC||(t[k]=e[k]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,g=F1(r),y=g&&g[0],p=g&&g[1],{onBeforeEnter:E,onEnter:P,onEnterCancelled:V,onLeave:N,onLeaveCancelled:R,onBeforeAppear:D=E,onAppear:S=P,onAppearCancelled:w=V}=t,b=(k,x,U)=>{Nr(k,x?c:a),Nr(k,x?u:o),U&&U()},C=(k,x)=>{k._isLeaving=!1,Nr(k,f),Nr(k,m),Nr(k,h),x&&x()},A=k=>(x,U)=>{const G=k?S:P,J=()=>b(x,k,U);ms(G,[x,J]),D_(()=>{Nr(x,k?l:s),sr(x,k?c:a),V_(G)||N_(x,i,y,J)})};return $t(t,{onBeforeEnter(k){ms(E,[k]),sr(k,s),sr(k,o)},onBeforeAppear(k){ms(D,[k]),sr(k,l),sr(k,u)},onEnter:A(!1),onAppear:A(!0),onLeave(k,x){k._isLeaving=!0;const U=()=>C(k,x);sr(k,f),sr(k,h),EC(),D_(()=>{k._isLeaving&&(Nr(k,f),sr(k,m),V_(N)||N_(k,i,p,U))}),ms(N,[k,U])},onEnterCancelled(k){b(k,!1),ms(V,[k])},onAppearCancelled(k){b(k,!0),ms(w,[k])},onLeaveCancelled(k){C(k),ms(R,[k])}})}function F1(e){if(e==null)return null;if(_t(e))return[rh(e.enter),rh(e.leave)];{const t=rh(e);return[t,t]}}function rh(e){return y0(e)}function sr(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Uo]||(e[Uo]=new Set)).add(t)}function Nr(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Uo];n&&(n.delete(t),n.size||(e[Uo]=void 0))}function D_(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let B1=0;function N_(e,t,n,i){const r=e._endId=++B1,s=()=>{r===e._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=CC(e,t);if(!o)return i();const u=o+"end";let c=0;const f=()=>{e.removeEventListener(u,h),s()},h=m=>{m.target===e&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),e.addEventListener(u,h)}function CC(e,t){const n=window.getComputedStyle(e),i=g=>(n[g]||"").split(", "),r=i(`${Rr}Delay`),s=i(`${Rr}Duration`),o=O_(r,s),a=i(`${La}Delay`),l=i(`${La}Duration`),u=O_(a,l);let c=null,f=0,h=0;t===Rr?o>0&&(c=Rr,f=o,h=s.length):t===La?u>0&&(c=La,f=u,h=l.length):(f=Math.max(o,u),c=f>0?o>u?Rr:La:null,h=c?c===Rr?s.length:l.length:0);const m=c===Rr&&/\b(transform|all)(,|$)/.test(i(`${Rr}Property`).toString());return{type:c,timeout:f,propCount:h,hasTransform:m}}function O_(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>M_(n)+M_(e[i])))}function M_(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function EC(){return document.body.offsetHeight}function $1(e,t,n){const i=e[Uo];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Lc=Symbol("_vod"),IC=Symbol("_vsh"),Di={beforeMount(e,{value:t},{transition:n}){e[Lc]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Fa(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Fa(e,!0),i.enter(e)):i.leave(e,()=>{Fa(e,!1)}):Fa(e,t))},beforeUnmount(e,{value:t}){Fa(e,t)}};function Fa(e,t){e.style.display=t?e[Lc]:"none",e[IC]=!t}const U1=Symbol(""),H1=/(^|;)\s*display\s*:/;function j1(e,t,n){const i=e.style,r=Ft(n);let s=!1;if(n&&!r){if(t)if(Ft(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&bc(i,a,"")}else for(const o in t)n[o]==null&&bc(i,o,"");for(const o in n)o==="display"&&(s=!0),bc(i,o,n[o])}else if(r){if(t!==n){const o=i[U1];o&&(n+=";"+o),i.cssText=n,s=H1.test(n)}}else t&&e.removeAttribute("style");Lc in e&&(e[Lc]=s?i.display:"",e[IC]&&(i.display="none"))}const L_=/\s*!important$/;function bc(e,t,n){if(Le(n))n.forEach(i=>bc(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=z1(e,t);L_.test(n)?e.setProperty(oa(i),n.replace(L_,""),"important"):e[i]=n}}const F_=["Webkit","Moz","ms"],sh={};function z1(e,t){const n=sh[t];if(n)return n;let i=fi(t);if(i!=="filter"&&i in e)return sh[t]=i;i=Qi(i);for(let r=0;r<F_.length;r++){const s=F_[r]+i;if(s in e)return sh[t]=s}return t}const B_="http://www.w3.org/1999/xlink";function W1(e,t,n,i,r){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(B_,t.slice(6,t.length)):e.setAttributeNS(B_,t,n);else{const s=Jx(t);n==null||s&&!_0(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function q1(e,t,n,i,r,s,o){if(t==="innerHTML"||t==="textContent"){i&&o(i,r,s),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const u=a==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(u!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=_0(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function So(e,t,n,i){e.addEventListener(t,n,i)}function G1(e,t,n,i){e.removeEventListener(t,n,i)}const $_=Symbol("_vei");function K1(e,t,n,i,r=null){const s=e[$_]||(e[$_]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Y1(t);if(i){const u=s[t]=J1(i,r);So(e,a,u,l)}else o&&(G1(e,a,o,l),s[t]=void 0)}}const U_=/(?:Once|Passive|Capture)$/;function Y1(e){let t;if(U_.test(e)){t={};let i;for(;i=e.match(U_);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):oa(e.slice(2)),t]}let oh=0;const Q1=Promise.resolve(),X1=()=>oh||(Q1.then(()=>oh=0),oh=Date.now());function J1(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;di(Z1(i,n.value),t,5,[i])};return n.value=e,n.attached=X1(),n}function Z1(e,t){if(Le(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const H_=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,eV=(e,t,n,i,r,s,o,a,l)=>{const u=r==="svg";t==="class"?$1(e,i,u):t==="style"?j1(e,n,i):wd(t)?Vv(t)||K1(e,t,n,i,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tV(e,t,i,u))?q1(e,t,i,s,o,a,l):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),W1(e,t,i,u))};function tV(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&H_(t)&&He(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return H_(t)&&Ft(n)?!1:t in e}const TC=new WeakMap,kC=new WeakMap,Fc=Symbol("_moveCb"),j_=Symbol("_enterCb"),AC={name:"TransitionGroup",props:$t({},L1,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=iu(),i=Q0();let r,s;return tg(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!oV(r[0].el,n.vnode.el,o))return;r.forEach(iV),r.forEach(rV);const a=r.filter(sV);EC(),a.forEach(l=>{const u=l.el,c=u.style;sr(u,o),c.transform=c.webkitTransform=c.transitionDuration="";const f=u[Fc]=h=>{h&&h.target!==u||(!h||/transform$/.test(h.propertyName))&&(u.removeEventListener("transitionend",f),u[Fc]=null,Nr(u,o))};u.addEventListener("transitionend",f)})}),()=>{const o=$e(e),a=SC(o);let l=o.tag||Te;if(r=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(r.push(c),Il(c,El(c,a,i,n)),TC.set(c,c.el.getBoundingClientRect()))}s=t.default?Jv(t.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&Il(c,El(c,a,i,n))}return v(l,null,s)}}},nV=e=>delete e.mode;AC.props;const ag=AC;function iV(e){const t=e.el;t[Fc]&&t[Fc](),t[j_]&&t[j_]()}function rV(e){kC.set(e,e.el.getBoundingClientRect())}function sV(e){const t=TC.get(e),n=kC.get(e),i=t.left-n.left,r=t.top-n.top;if(i||r){const s=e.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",e}}function oV(e,t,n){const i=e.cloneNode(),r=e[Uo];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=t.nodeType===1?t:t.parentNode;s.appendChild(i);const{hasTransform:o}=CC(i);return s.removeChild(i),o}const z_=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Le(t)?n=>gc(t,n):t};function aV(e){e.target.composing=!0}function W_(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const ah=Symbol("_assign"),lV={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[ah]=z_(r);const s=i||r.props&&r.props.type==="number";So(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=jh(a)),e[ah](a)}),n&&So(e,"change",()=>{e.value=e.value.trim()}),t||(So(e,"compositionstart",aV),So(e,"compositionend",W_),So(e,"change",W_))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:r}},s){if(e[ah]=z_(s),e.composing)return;const o=(r||e.type==="number")&&!/^0\d/.test(e.value)?jh(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||i&&e.value.trim()===a)||(e.value=a))}},uV=["ctrl","shift","alt","meta"],cV={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>uV.some(n=>e[`${n}Key`]&&!t.includes(n))},om=(e,t)=>{const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<t.length;o++){const a=cV[t[o]];if(a&&a(r,t))return}return e(r,...s)})},dV=$t({patchProp:eV},M1);let q_;function PC(){return q_||(q_=h1(dV))}const xC=(...e)=>{PC().render(...e)},fV=(...e)=>{const t=PC().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=mV(i);if(!r)return;const s=t._component;!He(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,hV(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function hV(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function mV(e){return Ft(e)?document.querySelector(e):e}var G_={};/**
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
 */const RC={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const ke=function(e,t){if(!e)throw la(t)},la=function(e){return new Error("Firebase Database ("+RC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const VC=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&i+1<e.length&&(e.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++i)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},vV=function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[i++]=String.fromCharCode(55296+(l>>10)),t[i++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Rd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,u=l?e[r+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(h=64)),i.push(n[c],n[f],n[h],n[m])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(VC(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vV(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const s=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const u=r<e.length?n[e.charAt(r)]:64;++r;const f=r<e.length?n[e.charAt(r)]:64;if(++r,s==null||a==null||u==null||f==null)throw new gV;const h=s<<2|a>>4;if(i.push(h),u!==64){const m=a<<4&240|u>>2;if(i.push(m),f!==64){const g=u<<6&192|f;i.push(g)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class gV extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const DC=function(e){const t=VC(e);return Rd.encodeByteArray(t,!0)},Bc=function(e){return DC(e).replace(/\./g,"")},$c=function(e){try{return Rd.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function yV(e){return NC(void 0,e)}function NC(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!pV(n)||(e[n]=NC(e[n],t[n]));return e}function pV(e){return e!=="__proto__"}/**
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
 */function _V(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bV=()=>_V().__FIREBASE_DEFAULTS__,wV=()=>{if(typeof process>"u"||typeof G_>"u")return;const e=G_.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},SV=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&$c(e[1]);return t&&JSON.parse(t)},Vd=()=>{try{return bV()||wV()||SV()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},CV=e=>{var t,n;return(n=(t=Vd())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},EV=e=>{const t=CV(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),i]:[t.substring(0,n),i]},OC=()=>{var e;return(e=Vd())===null||e===void 0?void 0:e.config},IV=e=>{var t;return(t=Vd())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class kl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,i))}}}/**
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
 */function TV(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Bc(JSON.stringify(n)),Bc(JSON.stringify(o)),""].join(".")}/**
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
 */function ki(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ki())}function kV(){var e;const t=(e=Vd())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AV(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function MC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LC(){return RC.NODE_ADMIN===!0}function PV(){return!kV()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function FC(){try{return typeof indexedDB=="object"}catch{return!1}}function xV(){return new Promise((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const RV="FirebaseError";class wr extends Error{constructor(t,n,i){super(n),this.code=t,this.customData=i,this.name=RV,Object.setPrototypeOf(this,wr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(t,n,i){this.service=t,this.serviceName=n,this.errors=i}create(t,...n){const i=n[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?VV(s,i):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new wr(r,a,i)}}function VV(e,t){return e.replace(DV,(n,i)=>{const r=t[i];return r!=null?String(r):`<${i}?>`})}const DV=/\{\$([^}]+)}/g;/**
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
 */function Al(e){return JSON.parse(e)}function an(e){return JSON.stringify(e)}/**
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
 */const BC=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=Al($c(s[0])||""),n=Al($c(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:i,signature:r}},NV=function(e){const t=BC(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},OV=function(e){const t=BC(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function Sr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Ho(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function K_(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Uc(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function am(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const s=e[r],o=t[r];if(Y_(s)&&Y_(o)){if(!am(s,o))return!1}else if(s!==o)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function Y_(e){return e!==null&&typeof e=="object"}/**
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
 */function ug(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}/**
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
 */class MV{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const i=this.W_;if(typeof t=="string")for(let f=0;f<16;f++)i[f]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)i[f]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let f=16;f<80;f++){const h=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=(h<<1|h>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let f=0;f<80;f++){f<40?f<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):f<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(r<<5|r>>>27)+u+l+c+i[f]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=r,r=h}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const i=n-this.blockSize;let r=0;const s=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=i;)this.compress_(t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<n;)if(s[o]=t.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}else for(;r<n;)if(s[o]=t[r],++o,++r,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)t[i]=this.chain_[r]>>s&255,++i;return t}}function LV(e,t){const n=new FV(e,t);return n.subscribe.bind(n)}class FV{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(i=>{this.error(i)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,i){let r;if(t===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");BV(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:i},r.next===void 0&&(r.next=lh),r.error===void 0&&(r.error=lh),r.complete===void 0&&(r.complete=lh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BV(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function lh(){}function $V(e,t){return`${e} failed: ${t} argument `}/**
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
 */const UV=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const s=r-55296;i++,ke(i<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(i)-56320;r=65536+(s<<10)+o}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},Dd=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};/**
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
 */function Pn(e){return e&&e._delegate?e._delegate:e}class Ai{constructor(t,n,i){this.name=t,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ys="[DEFAULT]";/**
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
 */class HV{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const i=new kl;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const i=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zV(t))try{this.getOrInitializeService({instanceIdentifier:ys})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(t=ys){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ys){return this.instances.has(t)}getOptions(t=ys){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);i===a&&o.resolve(r)}return r}onInit(t,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:jV(t),options:n}),this.instances.set(t,i),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch{}return i||null}normalizeInstanceIdentifier(t=ys){return this.component?this.component.multipleInstances?t:ys:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jV(e){return e===ys?void 0:e}function zV(e){return e.instantiationMode==="EAGER"}/**
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
 */class WV{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new HV(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ye;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Ye||(Ye={}));const qV={debug:Ye.DEBUG,verbose:Ye.VERBOSE,info:Ye.INFO,warn:Ye.WARN,error:Ye.ERROR,silent:Ye.SILENT},GV=Ye.INFO,KV={[Ye.DEBUG]:"log",[Ye.VERBOSE]:"log",[Ye.INFO]:"info",[Ye.WARN]:"warn",[Ye.ERROR]:"error"},YV=(e,t,...n)=>{if(t<e.logLevel)return;const i=new Date().toISOString(),r=KV[t];if(r)console[r](`[${i}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class su{constructor(t){this.name=t,this._logLevel=GV,this._logHandler=YV,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Ye))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qV[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Ye.DEBUG,...t),this._logHandler(this,Ye.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Ye.VERBOSE,...t),this._logHandler(this,Ye.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Ye.INFO,...t),this._logHandler(this,Ye.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Ye.WARN,...t),this._logHandler(this,Ye.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Ye.ERROR,...t),this._logHandler(this,Ye.ERROR,...t)}}const QV=(e,t)=>t.some(n=>e instanceof n);let Q_,X_;function XV(){return Q_||(Q_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JV(){return X_||(X_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $C=new WeakMap,lm=new WeakMap,UC=new WeakMap,uh=new WeakMap,cg=new WeakMap;function ZV(e){const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Wr(e.result)),r()},o=()=>{i(e.error),r()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$C.set(n,e)}).catch(()=>{}),cg.set(t,e),t}function eD(e){if(lm.has(e))return;const t=new Promise((n,i)=>{const r=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),r()},o=()=>{i(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});lm.set(e,t)}let um={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return lm.get(e);if(t==="objectStoreNames")return e.objectStoreNames||UC.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function tD(e){um=e(um)}function nD(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(ch(this),t,...n);return UC.set(i,t.sort?t.sort():[t]),Wr(i)}:JV().includes(e)?function(...t){return e.apply(ch(this),t),Wr($C.get(this))}:function(...t){return Wr(e.apply(ch(this),t))}}function iD(e){return typeof e=="function"?nD(e):(e instanceof IDBTransaction&&eD(e),QV(e,XV())?new Proxy(e,um):e)}function Wr(e){if(e instanceof IDBRequest)return ZV(e);if(uh.has(e))return uh.get(e);const t=iD(e);return t!==e&&(uh.set(e,t),cg.set(t,e)),t}const ch=e=>cg.get(e);function rD(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=Wr(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Wr(o.result),l.oldVersion,l.newVersion,Wr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sD=["get","getKey","getAll","getAllKeys","count"],oD=["put","add","delete","clear"],dh=new Map;function J_(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(dh.get(t))return dh.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=oD.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||sD.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return i&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return dh.set(t,s),s}tD(e=>({...e,get:(t,n,i)=>J_(t,n)||e.get(t,n,i),has:(t,n)=>!!J_(t,n)||e.has(t,n)}));/**
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
 */class aD{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lD(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function lD(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const cm="@firebase/app",Z_="0.10.4";/**
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
 */const Vs=new su("@firebase/app"),uD="@firebase/app-compat",cD="@firebase/analytics-compat",dD="@firebase/analytics",fD="@firebase/app-check-compat",hD="@firebase/app-check",mD="@firebase/auth",vD="@firebase/auth-compat",gD="@firebase/database",yD="@firebase/database-compat",pD="@firebase/functions",_D="@firebase/functions-compat",bD="@firebase/installations",wD="@firebase/installations-compat",SD="@firebase/messaging",CD="@firebase/messaging-compat",ED="@firebase/performance",ID="@firebase/performance-compat",TD="@firebase/remote-config",kD="@firebase/remote-config-compat",AD="@firebase/storage",PD="@firebase/storage-compat",xD="@firebase/firestore",RD="@firebase/vertexai-preview",VD="@firebase/firestore-compat",DD="firebase",ND="10.12.1";/**
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
 */const dm="[DEFAULT]",OD={[cm]:"fire-core",[uD]:"fire-core-compat",[dD]:"fire-analytics",[cD]:"fire-analytics-compat",[hD]:"fire-app-check",[fD]:"fire-app-check-compat",[mD]:"fire-auth",[vD]:"fire-auth-compat",[gD]:"fire-rtdb",[yD]:"fire-rtdb-compat",[pD]:"fire-fn",[_D]:"fire-fn-compat",[bD]:"fire-iid",[wD]:"fire-iid-compat",[SD]:"fire-fcm",[CD]:"fire-fcm-compat",[ED]:"fire-perf",[ID]:"fire-perf-compat",[TD]:"fire-rc",[kD]:"fire-rc-compat",[AD]:"fire-gcs",[PD]:"fire-gcs-compat",[xD]:"fire-fst",[VD]:"fire-fst-compat",[RD]:"fire-vertex","fire-js":"fire-js",[DD]:"fire-js-all"};/**
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
 */const Hc=new Map,MD=new Map,fm=new Map;function eb(e,t){try{e.container.addComponent(t)}catch(n){Vs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Wi(e){const t=e.name;if(fm.has(t))return Vs.debug(`There were multiple attempts to register component ${t}.`),!1;fm.set(t,e);for(const n of Hc.values())eb(n,e);for(const n of MD.values())eb(n,e);return!0}function LD(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Ga(e){return e.settings!==void 0}/**
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
 */const FD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qr=new ua("app","Firebase",FD);/**
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
 */class BD{constructor(t,n,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ai("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw qr.create("app-deleted",{appName:this._name})}}/**
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
 */const ca=ND;function HC(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const i=Object.assign({name:dm,automaticDataCollectionEnabled:!1},t),r=i.name;if(typeof r!="string"||!r)throw qr.create("bad-app-name",{appName:String(r)});if(n||(n=OC()),!n)throw qr.create("no-options");const s=Hc.get(r);if(s){if(am(n,s.options)&&am(i,s.config))return s;throw qr.create("duplicate-app",{appName:r})}const o=new WV(r);for(const l of fm.values())o.addComponent(l);const a=new BD(n,i,o);return Hc.set(r,a),a}function jC(e=dm){const t=Hc.get(e);if(!t&&e===dm&&OC())return HC();if(!t)throw qr.create("no-app",{appName:e});return t}function Qn(e,t,n){var i;let r=(i=OD[e])!==null&&i!==void 0?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vs.warn(a.join(" "));return}Wi(new Ai(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const $D="firebase-heartbeat-database",UD=1,Pl="firebase-heartbeat-store";let fh=null;function zC(){return fh||(fh=rD($D,UD,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Pl)}catch(n){console.warn(n)}}}}).catch(e=>{throw qr.create("idb-open",{originalErrorMessage:e.message})})),fh}async function HD(e){try{const n=(await zC()).transaction(Pl),i=await n.objectStore(Pl).get(WC(e));return await n.done,i}catch(t){if(t instanceof wr)Vs.warn(t.message);else{const n=qr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Vs.warn(n.message)}}}async function tb(e,t){try{const i=(await zC()).transaction(Pl,"readwrite");await i.objectStore(Pl).put(t,WC(e)),await i.done}catch(n){if(n instanceof wr)Vs.warn(n.message);else{const i=qr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vs.warn(i.message)}}}function WC(e){return`${e.name}!${e.options.appId}`}/**
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
 */const jD=1024,zD=30*24*60*60*1e3;class WD{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GD(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var t,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=nb();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=zD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=nb(),{heartbeatsToSend:i,unsentEntries:r}=qD(this._heartbeatsCache.heartbeats),s=Bc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function nb(){return new Date().toISOString().substring(0,10)}function qD(e,t=jD){const n=[];let i=e.slice();for(const r of e){const s=n.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),ib(n)>t){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ib(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class GD{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return FC()?xV().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await HD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tb(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return tb(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function ib(e){return Bc(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function KD(e){Wi(new Ai("platform-logger",t=>new aD(t),"PRIVATE")),Wi(new Ai("heartbeat",t=>new WD(t),"PRIVATE")),Qn(cm,Z_,e),Qn(cm,Z_,"esm2017"),Qn("fire-js","")}KD("");function qC(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n}function GC(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const YD=GC,KC=new ua("auth","Firebase",GC());/**
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
 */const jc=new su("@firebase/auth");function QD(e,...t){jc.logLevel<=Ye.WARN&&jc.warn(`Auth (${ca}): ${e}`,...t)}function wc(e,...t){jc.logLevel<=Ye.ERROR&&jc.error(`Auth (${ca}): ${e}`,...t)}/**
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
 */function rb(e,...t){throw dg(e,...t)}function YC(e,...t){return dg(e,...t)}function QC(e,t,n){const i=Object.assign(Object.assign({},YD()),{[t]:n});return new ua("auth","Firebase",i).create(t,{appName:e.name})}function Sc(e){return QC(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dg(e,...t){if(typeof e!="string"){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return KC.create(e,...t)}function ut(e,t,...n){if(!e)throw dg(t,...n)}function al(e){const t="INTERNAL ASSERTION FAILED: "+e;throw wc(t),new Error(t)}function zc(e,t){e||al(t)}function XD(){return sb()==="http:"||sb()==="https:"}function sb(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function JD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(XD()||AV()||"connection"in navigator)?navigator.onLine:!0}function ZD(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class ou{constructor(t,n){this.shortDelay=t,this.longDelay=n,zc(n>t,"Short delay should be less than long delay!"),this.isMobile=lg()||MC()}get(){return JD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eN(e,t){zc(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class XC{static initialize(t,n,i){this.fetchImpl=t,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;al("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;al("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;al("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const tN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const nN=new ou(3e4,6e4);function JC(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Nd(e,t,n,i,r={}){return ZC(e,r,async()=>{let s={},o={};i&&(t==="GET"?o=i:s={body:JSON.stringify(i)});const a=ug(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),XC.fetch()(eE(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function ZC(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},tN),t);try{const r=new iN(e),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw tc(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tc(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw tc(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw tc(e,"user-disabled",o);const c=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw QC(e,c,u);rb(e,c)}}catch(r){if(r instanceof wr)throw r;rb(e,"network-request-failed",{message:String(r)})}}function eE(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?eN(e.config,r):`${e.config.apiScheme}://${r}`}class iN{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(YC(this.auth,"network-request-failed")),nN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tc(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=YC(e,t,i);return r.customData._tokenResponse=n,r}/**
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
 */async function rN(e,t){return Nd(e,"POST","/v1/accounts:delete",t)}async function tE(e,t){return Nd(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function ll(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function sN(e,t=!1){const n=Pn(e),i=await n.getIdToken(t),r=nE(i);ut(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:ll(hh(r.auth_time)),issuedAtTime:ll(hh(r.iat)),expirationTime:ll(hh(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function hh(e){return Number(e)*1e3}function nE(e){const[t,n,i]=e.split(".");if(t===void 0||n===void 0||i===void 0)return wc("JWT malformed, contained fewer than 3 sections"),null;try{const r=$c(n);return r?JSON.parse(r):(wc("Failed to decode base64 JWT payload"),null)}catch(r){return wc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function ob(e){const t=nE(e);return ut(t,"internal-error"),ut(typeof t.exp<"u","internal-error"),ut(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function hm(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof wr&&oN(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function oN({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class aN{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class mm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ll(this.lastLoginAt),this.creationTime=ll(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Wc(e){var t;const n=e.auth,i=await e.getIdToken(),r=await hm(e,tE(n,{idToken:i}));ut(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?iE(s.providerUserInfo):[],a=uN(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new mm(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function lN(e){const t=Pn(e);await Wc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function uN(e,t){return[...e.filter(i=>!t.some(r=>r.providerId===i.providerId)),...t]}function iE(e){return e.map(t=>{var{providerId:n}=t,i=qC(t,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function cN(e,t){const n=await ZC(e,{},async()=>{const i=ug({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,o=eE(e,r,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",XC.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dN(e,t){return Nd(e,"POST","/v2/accounts:revokeToken",JC(e,t))}/**
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
 */class Oo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ut(t.idToken,"internal-error"),ut(typeof t.idToken<"u","internal-error"),ut(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):ob(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ut(t.length!==0,"internal-error");const n=ob(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ut(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await cN(t,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(t,n,i){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(t,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,o=new Oo;return i&&(ut(typeof i=="string","internal-error",{appName:t}),o.refreshToken=i),r&&(ut(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),s&&(ut(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Oo,this.toJSON())}_performRefresh(){return al("not implemented")}}/**
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
 */function Vr(e,t){ut(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class Ur{constructor(t){var{uid:n,auth:i,stsTokenManager:r}=t,s=qC(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new mm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await hm(this,this.stsTokenManager.getToken(this.auth,t));return ut(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return sN(this,t)}reload(){return lN(this)}_assign(t){this!==t&&(ut(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Ur(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){ut(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),n&&await Wc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ga(this.auth.app))return Promise.reject(Sc(this.auth));const t=await this.getIdToken();return await hm(this,rN(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var i,r,s,o,a,l,u,c;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,h=(r=n.email)!==null&&r!==void 0?r:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(u=n.createdAt)!==null&&u!==void 0?u:void 0,P=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:V,emailVerified:N,isAnonymous:R,providerData:D,stsTokenManager:S}=n;ut(V&&S,t,"internal-error");const w=Oo.fromJSON(this.name,S);ut(typeof V=="string",t,"internal-error"),Vr(f,t.name),Vr(h,t.name),ut(typeof N=="boolean",t,"internal-error"),ut(typeof R=="boolean",t,"internal-error"),Vr(m,t.name),Vr(g,t.name),Vr(y,t.name),Vr(p,t.name),Vr(E,t.name),Vr(P,t.name);const b=new Ur({uid:V,auth:t,email:h,emailVerified:N,displayName:f,isAnonymous:R,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:w,createdAt:E,lastLoginAt:P});return D&&Array.isArray(D)&&(b.providerData=D.map(C=>Object.assign({},C))),p&&(b._redirectEventId=p),b}static async _fromIdTokenResponse(t,n,i=!1){const r=new Oo;r.updateFromServerResponse(n);const s=new Ur({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:i});return await Wc(s),s}static async _fromGetAccountInfoResponse(t,n,i){const r=n.users[0];ut(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?iE(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),a=new Oo;a.updateFromIdToken(i);const l=new Ur({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new mm(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
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
 */const ab=new Map;function ws(e){zc(e instanceof Function,"Expected a class definition");let t=ab.get(e);return t?(zc(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ab.set(e,t),t)}/**
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
 */class rE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}rE.type="NONE";const lb=rE;/**
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
 */function mh(e,t,n){return`firebase:${e}:${t}:${n}`}class Mo{constructor(t,n,i){this.persistence=t,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=mh(this.userKey,r.apiKey,s),this.fullPersistenceKey=mh("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ur._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,i="authUser"){if(!n.length)return new Mo(ws(lb),t,i);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||ws(lb);const o=mh(i,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Ur._fromJSON(t,c);u!==s&&(a=f),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mo(s,t,i):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mo(s,t,i))}}/**
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
 */function ub(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vN(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(fN(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yN(t))return"Blackberry";if(pN(t))return"Webos";if(hN(t))return"Safari";if((t.includes("chrome/")||mN(t))&&!t.includes("edge/"))return"Chrome";if(gN(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fN(e=ki()){return/firefox\//i.test(e)}function hN(e=ki()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mN(e=ki()){return/crios\//i.test(e)}function vN(e=ki()){return/iemobile/i.test(e)}function gN(e=ki()){return/android/i.test(e)}function yN(e=ki()){return/blackberry/i.test(e)}function pN(e=ki()){return/webos/i.test(e)}/**
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
 */function sE(e,t=[]){let n;switch(e){case"Browser":n=ub(ki());break;case"Worker":n=`${ub(ki())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${ca}/${i}`}/**
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
 */class _N{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const i=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const i of this.queue)await i(t),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function bN(e,t={}){return Nd(e,"GET","/v2/passwordPolicy",JC(e,t))}/**
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
 */const wN=6;class SN{constructor(t){var n,i,r,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=t.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,i,r,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=t.length>=i),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<t.length;r++)i=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(t,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
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
 */class CN{constructor(t,n,i,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cb(this),this.idTokenSubscription=new cb(this),this.beforeStateQueue=new _N(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=KC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ws(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Mo.create(this,t),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await tE(this,{idToken:t}),i=await Ur._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(Ga(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ut(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Wc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=ZD()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Ga(this.app))return Promise.reject(Sc(this));const n=t?Pn(t):null;return n&&ut(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ut(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Ga(this.app)?Promise.reject(Sc(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Ga(this.app)?Promise.reject(Sc(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ws(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await bN(this),n=new SN(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new ua("auth","Firebase",t())}onAuthStateChanged(t,n,i){return this.registerStateListener(this.authStateSubscription,t,n,i)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,i){return this.registerStateListener(this.idTokenSubscription,t,n,i)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const i=this.onAuthStateChanged(()=>{i(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await dN(this,i)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const i=await this.getOrInitRedirectPersistenceManager(n);return t===null?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ws(t)||this._popupRedirectResolver;ut(n,this,"argument-error"),this.redirectPersistenceManager=await Mo.create(this,[ws(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ut(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,i,r);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ut(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=sE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&QD(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function EN(e){return Pn(e)}class cb{constructor(t){this.auth=t,this.observer=null,this.addObserver=LV(n=>this.observer=n)}get next(){return ut(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function IN(e,t){const n=(t==null?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ws);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,t==null?void 0:t.popupRedirectResolver)}new ou(3e4,6e4);/**
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
 */new ou(2e3,1e4);/**
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
 */new ou(3e4,6e4);/**
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
 */new ou(5e3,15e3);var db="@firebase/auth",fb="1.7.3";/**
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
 */class TN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(i=>{t((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ut(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kN(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AN(e){Wi(new Ai("auth",(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;ut(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sE(e)},u=new CN(i,r,s,l);return IN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,i)=>{t.getProvider("auth-internal").initialize()})),Wi(new Ai("auth-internal",t=>{const n=EN(t.getProvider("auth").getImmediate());return(i=>new TN(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(db,fb,kN(e)),Qn(db,fb,"esm2017")}/**
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
 */const PN=5*60;IV("authIdTokenMaxAge");AN("Browser");/**
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
 */const xN=new Map,RN={activated:!1,tokenObservers:[]};function Pi(e){return xN.get(e)||Object.assign({},RN)}const hb={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class VN{constructor(t,n,i,r,s){if(this.operation=t,this.retryPolicy=n,this.getWaitDuration=i,this.lowerBound=r,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=r,r>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(t){this.stop();try{this.pending=new kl,this.pending.promise.catch(n=>{}),await DN(this.getNextRun(t)),this.pending.resolve(),await this.pending.promise,this.pending=new kl,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(t){if(t)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function DN(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const NN={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},qc=new ua("appCheck","AppCheck",NN);function oE(e){if(!Pi(e).activated)throw qc.create("use-before-activation",{appName:e.name})}/**
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
 */const ON="firebase-app-check-database",MN=1,vm="firebase-app-check-store";let nc=null;function LN(){return nc||(nc=new Promise((e,t)=>{try{const n=indexedDB.open(ON,MN);n.onsuccess=i=>{e(i.target.result)},n.onerror=i=>{var r;t(qc.create("storage-open",{originalErrorMessage:(r=i.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=i=>{const r=i.target.result;switch(i.oldVersion){case 0:r.createObjectStore(vm,{keyPath:"compositeKey"})}}}catch(n){t(qc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),nc)}function FN(e,t){return BN($N(e),t)}async function BN(e,t){const i=(await LN()).transaction(vm,"readwrite"),s=i.objectStore(vm).put({compositeKey:e,value:t});return new Promise((o,a)=>{s.onsuccess=l=>{o()},i.onerror=l=>{var u;a(qc.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function $N(e){return`${e.options.appId}-${e.name}`}/**
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
 */const gm=new su("@firebase/app-check");function mb(e,t){return FC()?FN(e,t).catch(n=>{gm.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const UN={error:"UNKNOWN_ERROR"};function HN(e){return Rd.encodeString(JSON.stringify(e),!1)}async function ym(e,t=!1){const n=e.app;oE(n);const i=Pi(n);let r=i.token,s;if(r&&!Ka(r)&&(i.token=void 0,r=void 0),!r){const l=await i.cachedTokenPromise;l&&(Ka(l)?r=l:await mb(n,void 0))}if(!t&&r&&Ka(r))return{token:r.token};let o=!1;try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),o=!0),r=await Pi(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?gm.warn(l.message):gm.error(l),s=l}let a;return r?s?Ka(r)?a={token:r.token,internalError:s}:a=gb(s):(a={token:r.token},i.token=r,await mb(n,r)):a=gb(s),o&&qN(n,a),a}async function jN(e){const t=e.app;oE(t);const{provider:n}=Pi(t);{const{token:i}=await n.getToken();return{token:i}}}function zN(e,t,n,i){const{app:r}=e,s=Pi(r),o={next:n,error:i,type:t};if(s.tokenObservers=[...s.tokenObservers,o],s.token&&Ka(s.token)){const a=s.token;Promise.resolve().then(()=>{n({token:a.token}),vb(e)}).catch(()=>{})}s.cachedTokenPromise.then(()=>vb(e))}function aE(e,t){const n=Pi(e),i=n.tokenObservers.filter(r=>r.next!==t);i.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=i}function vb(e){const{app:t}=e,n=Pi(t);let i=n.tokenRefresher;i||(i=WN(e),n.tokenRefresher=i),!i.isRunning()&&n.isTokenAutoRefreshEnabled&&i.start()}function WN(e){const{app:t}=e;return new VN(async()=>{const n=Pi(t);let i;if(n.token?i=await ym(e,!0):i=await ym(e),i.error)throw i.error;if(i.internalError)throw i.internalError},()=>!0,()=>{const n=Pi(t);if(n.token){let i=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return i=Math.min(i,r),Math.max(0,i-Date.now())}else return 0},hb.RETRIAL_MIN_WAIT,hb.RETRIAL_MAX_WAIT)}function qN(e,t){const n=Pi(e).tokenObservers;for(const i of n)try{i.type==="EXTERNAL"&&t.error!=null?i.error(t.error):i.next(t)}catch{}}function Ka(e){return e.expireTimeMillis-Date.now()>0}function gb(e){return{token:HN(UN),error:e}}/**
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
 */class GN{constructor(t,n){this.app=t,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:t}=Pi(this.app);for(const n of t)aE(this.app,n.next);return Promise.resolve()}}function KN(e,t){return new GN(e,t)}function YN(e){return{getToken:t=>ym(e,t),getLimitedUseToken:()=>jN(e),addTokenListener:t=>zN(e,"INTERNAL",t),removeTokenListener:t=>aE(e.app,t)}}const QN="@firebase/app-check",XN="0.8.4",JN="app-check",yb="app-check-internal";function ZN(){Wi(new Ai(JN,e=>{const t=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat");return KN(t,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider(yb).initialize()})),Wi(new Ai(yb,e=>{const t=e.getProvider("app-check").getImmediate();return YN(t)},"PUBLIC").setInstantiationMode("EXPLICIT")),Qn(QN,XN)}ZN();var eO="firebase",tO="10.12.1";/**
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
 */Qn(eO,tO,"app");const lE=Symbol("firebaseApp");function uE(e){return iu()&&Be(lE,null)||jC(e)}const Fi=()=>{};function fg(e,t){return t.split(".").reduce((n,i)=>n&&n[i],e)}function nO(e,t,n){const i=(""+t).split("."),r=i.pop(),s=i.reduce((o,a)=>o&&o[a],e);if(s!=null)return Array.isArray(s)?s.splice(Number(r),1,n):s[r]=n}function Ys(e){return!!e&&typeof e=="object"}const iO=Object.prototype;function rO(e){return Ys(e)&&Object.getPrototypeOf(e)===iO}function hg(e){return Ys(e)&&e.type==="document"}function sO(e){return Ys(e)&&e.type==="collection"}function oO(e){return hg(e)||sO(e)}function aO(e){return Ys(e)&&e.type==="query"}function lO(e){return Ys(e)&&"ref"in e}function uO(e){return Ys(e)&&typeof e.bucket=="string"}function cO(e,t){let n;return()=>{if(!n)return n=!0,e(t())}}const dO=Symbol.for("v-scx");function fO(){return!!Be(dO,0)}var pb={};const _b="@firebase/database",bb="1.0.5";/**
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
 */let cE="";function hO(e){cE=e}/**
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
 */class mO{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),an(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Al(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class vO{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return Sr(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const dE=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new mO(t)}}catch{}return new vO},Ss=dE("localStorage"),gO=dE("sessionStorage");/**
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
 */const Lo=new su("@firebase/database"),yO=function(){let e=1;return function(){return e++}}(),fE=function(e){const t=UV(e),n=new MV;n.update(t);const i=n.digest();return Rd.encodeByteArray(i)},au=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?t+=au.apply(null,i):typeof i=="object"?t+=an(i):t+=i,t+=" "}return t};let ul=null,wb=!0;const pO=function(e,t){ke(!t,"Can't turn on custom loggers persistently."),Lo.logLevel=Ye.VERBOSE,ul=Lo.log.bind(Lo)},wn=function(...e){if(wb===!0&&(wb=!1,ul===null&&gO.get("logging_enabled")===!0&&pO()),ul){const t=au.apply(null,e);ul(t)}},lu=function(e){return function(...t){wn(e,...t)}},pm=function(...e){const t="FIREBASE INTERNAL ERROR: "+au(...e);Lo.error(t)},Ds=function(...e){const t=`FIREBASE FATAL ERROR: ${au(...e)}`;throw Lo.error(t),new Error(t)},Xn=function(...e){const t="FIREBASE WARNING: "+au(...e);Lo.warn(t)},_O=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},hE=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},bO=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},jo="[MIN_NAME]",Ns="[MAX_NAME]",da=function(e,t){if(e===t)return 0;if(e===jo||t===Ns)return-1;if(t===jo||e===Ns)return 1;{const n=Sb(e),i=Sb(t);return n!==null?i!==null?n-i===0?e.length-t.length:n-i:-1:i!==null?1:e<t?-1:1}},wO=function(e,t){return e===t?0:e<t?-1:1},Ba=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+an(t))},mg=function(e){if(typeof e!="object"||e===null)return an(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)i!==0&&(n+=","),n+=an(t[i]),n+=":",n+=mg(e[t[i]]);return n+="}",n},mE=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function hi(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const vE=function(e){ke(!hE(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,o,a,l;e===0?(s=0,o=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-i-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=t;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(r?1:0),u.reverse();const c=u.join("");let f="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),f=f+h}return f.toLowerCase()},SO=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CO=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},EO=new RegExp("^-?(0*)\\d{1,10}$"),IO=-2147483648,TO=2147483647,Sb=function(e){if(EO.test(e)){const t=Number(e);if(t>=IO&&t<=TO)return t}return null},uu=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Xn("Exception was thrown by user callback.",n),t},Math.floor(0))}},kO=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cl=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class AO{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(i=>this.appCheck=i)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(t))}notifyForInvalidToken(){Xn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class PO{constructor(t,n,i){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(r=>this.auth_=r)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(wn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,i):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xn(t)}}/**
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
 */const vg="5",gE="v",yE="s",pE="r",_E="f",bE=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wE="ls",SE="p",_m="ac",CE="websocket",EE="long_polling";/**
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
 */class xO{constructor(t,n,i,r,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=i,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ss.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Ss.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function RO(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function IE(e,t,n){ke(typeof t=="string","typeof type must == string"),ke(typeof n=="object","typeof params must == object");let i;if(t===CE)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===EE)i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);RO(e)&&(n.ns=e.namespace);const r=[];return hi(n,(s,o)=>{r.push(s+"="+o)}),i+r.join("&")}/**
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
 */class VO{constructor(){this.counters_={}}incrementCounter(t,n=1){Sr(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return yV(this.counters_)}}/**
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
 */const vh={},gh={};function gg(e){const t=e.toString();return vh[t]||(vh[t]=new VO),vh[t]}function DO(e,t){const n=e.toString();return gh[n]||(gh[n]=t()),gh[n]}/**
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
 */class NO{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<i.length;++r)i[r]&&uu(()=>{this.onMessage_(i[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Cb="start",OO="close",MO="pLPCommand",LO="pRTLPCB",TE="id",kE="pw",AE="ser",FO="cb",BO="seg",$O="ts",UO="d",HO="dframe",PE=1870,xE=30,jO=PE-xE,zO=25e3,WO=3e4;class ko{constructor(t,n,i,r,s,o,a){this.connId=t,this.repoInfo=n,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=lu(t),this.stats_=gg(n),this.urlFn=l=>(this.appCheckToken&&(l[_m]=this.appCheckToken),IE(n,EE,l))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NO(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(WO)),bO(()=>{if(this.isClosed_)return;this.scriptTagHolder=new yg((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Cb)this.id=a,this.password=l;else if(o===OO)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Cb]="t",i[AE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[FO]=this.scriptTagHolder.uniqueCallbackIdentifier),i[gE]=vg,this.transportSessionId&&(i[yE]=this.transportSessionId),this.lastSessionId&&(i[wE]=this.lastSessionId),this.applicationId&&(i[SE]=this.applicationId),this.appCheckToken&&(i[_m]=this.appCheckToken),typeof location<"u"&&location.hostname&&bE.test(location.hostname)&&(i[pE]=_E);const r=this.urlFn(i);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ko.forceAllow_=!0}static forceDisallow(){ko.forceDisallow_=!0}static isAvailable(){return ko.forceAllow_?!0:!ko.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!SO()&&!CO()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=an(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=DC(n),r=mE(i,jO);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[HO]="t",i[TE]=t,i[kE]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=an(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class yg{constructor(t,n,i,r){this.onDisconnect=i,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=yO(),window[MO+this.uniqueCallbackIdentifier]=t,window[LO+this.uniqueCallbackIdentifier]=n,this.myIFrame=yg.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){wn("frame writing exception"),a.stack&&wn(a.stack),wn(a)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||wn("No IE domain setting required")}catch{const i=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[TE]=this.myID,t[kE]=this.myPW,t[AE]=this.currentSerial;let n=this.urlFn(t),i="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xE+i.length<=PE;){const o=this.pendingSegs.shift();i=i+"&"+BO+r+"="+o.seg+"&"+$O+r+"="+o.ts+"&"+UO+r+"="+o.d,r++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,i){this.pendingSegs.push({seg:t,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(i,Math.floor(zO)),s=()=>{clearTimeout(r),i()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=t,i.onload=i.onreadystatechange=function(){const r=i.readyState;(!r||r==="loaded"||r==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{wn("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const qO=16384,GO=45e3;let Gc=null;typeof MozWebSocket<"u"?Gc=MozWebSocket:typeof WebSocket<"u"&&(Gc=WebSocket);class Si{constructor(t,n,i,r,s,o,a){this.connId=t,this.applicationId=i,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=lu(this.connId),this.stats_=gg(n),this.connURL=Si.connectionURL_(n,o,a,r,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,i,r,s){const o={};return o[gE]=vg,typeof location<"u"&&location.hostname&&bE.test(location.hostname)&&(o[pE]=_E),n&&(o[yE]=n),i&&(o[wE]=i),r&&(o[_m]=r),s&&(o[SE]=s),IE(t,CE,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ss.set("previous_websocket_failure",!0);try{let i;LC(),this.mySock=new Gc(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const r=i.message||i.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Si.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(t=!0)}return!t&&Gc!==null&&!Si.forceDisallow_}static previouslyFailed(){return Ss.isInMemoryStorage||Ss.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ss.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=Al(n);this.onMessage(i)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(ke(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(t){this.resetKeepAlive();const n=an(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=mE(n,qO);i.length>1&&this.sendString_(String(i.length));for(let r=0;r<i.length;r++)this.sendString_(i[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(GO))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Si.responsesRequiredToBeHealthy=2;Si.healthyTimeout=3e4;/**
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
 */class xl{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[ko,Si]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=Si&&Si.isAvailable();let i=n&&!Si.previouslyFailed();if(t.webSocketOnly&&(n||Xn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Si];else{const r=this.transports_=[];for(const s of xl.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);xl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}xl.globalTransportInitialized_=!1;/**
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
 */const KO=6e4,YO=5e3,QO=10*1024,XO=100*1024,yh="t",Eb="d",JO="s",Ib="r",ZO="e",Tb="o",kb="a",Ab="n",Pb="p",eM="h";class tM{constructor(t,n,i,r,s,o,a,l,u,c){this.id=t,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=lu("c:"+this.id+":"),this.transportManager_=new xl(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const r=t.healthyTimeout||0;r>0&&(this.healthyTimeout_=cl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>XO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>QO?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(yh in t){const n=t[yh];n===kb?this.upgradeIfSecondaryHealthy_():n===Ib?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Tb&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=Ba("t",t),i=Ba("d",t);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Pb,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:kb,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ab,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=Ba("t",t),i=Ba("d",t);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=Ba(yh,t);if(Eb in t){const i=t[Eb];if(n===eM){const r=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===Ab){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===JO?this.onConnectionShutdown_(i):n===Ib?this.onReset_(i):n===ZO?pm("Server Error: "+i):n===Tb?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pm("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,i=t.v,r=t.h;this.sessionId=t.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),vg!==i&&Xn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),cl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KO))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(YO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Pb,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ss.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class RE{put(t,n,i,r){}merge(t,n,i,r){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,i){}onDisconnectMerge(t,n,i){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class VE{constructor(t){this.allowedEvents_=t,this.listeners_={},ke(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const i=[...this.listeners_[t]];for(let r=0;r<i.length;r++)i[r].callback.apply(i[r].context,n)}}on(t,n,i){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:i});const r=this.getInitialEvent(t);r&&n.apply(i,r)}off(t,n,i){this.validateEventType_(t);const r=this.listeners_[t]||[];for(let s=0;s<r.length;s++)if(r[s].callback===n&&(!i||i===r[s].context)){r.splice(s,1);return}}validateEventType_(t){ke(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class Kc extends VE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!lg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Kc}getInitialEvent(t){return ke(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const xb=32,Rb=768;class kt{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let i=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[i]=this.pieces_[r],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function vt(){return new kt("")}function Ze(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Qr(e){return e.pieces_.length-e.pieceNum_}function Et(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new kt(e.pieces_,t)}function DE(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nM(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function NE(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function OE(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new kt(t,0)}function en(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof kt)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const i=t.split("/");for(let r=0;r<i.length;r++)i[r].length>0&&n.push(i[r])}return new kt(n,0)}function Xe(e){return e.pieceNum_>=e.pieces_.length}function ui(e,t){const n=Ze(e),i=Ze(t);if(n===null)return t;if(n===i)return ui(Et(e),Et(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ME(e,t){if(Qr(e)!==Qr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ci(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Qr(e)>Qr(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class iM{constructor(t,n){this.errorPrefix_=n,this.parts_=NE(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Dd(this.parts_[i]);LE(this)}}function rM(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Dd(t),LE(e)}function sM(e){const t=e.parts_.pop();e.byteLength_-=Dd(t),e.parts_.length>0&&(e.byteLength_-=1)}function LE(e){if(e.byteLength_>Rb)throw new Error(e.errorPrefix_+"has a key path longer than "+Rb+" bytes ("+e.byteLength_+").");if(e.parts_.length>xb)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+xb+") or object contains a cycle "+ps(e))}function ps(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class pg extends VE{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[t];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new pg}getInitialEvent(t){return ke(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const $a=1e3,oM=60*5*1e3,Vb=30*1e3,aM=1.3,lM=3e4,uM="server_kill",Db=3;class cr extends RE{constructor(t,n,i,r,s,o,a,l){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=cr.nextPersistentConnectionId_++,this.log_=lu("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=$a,this.maxReconnectDelay_=oM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!LC())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pg.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Kc.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,i){const r=++this.requestNumber_,s={r,a:t,b:n};this.log_(an(s)),ke(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),i&&(this.requestCBHash_[r]=i)}get(t){this.initConnection_();const n=new kl,r={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,i,r){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),ke(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ke(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:t,tag:i};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(t){const n=t.query,i=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+i+" for "+r);const s={p:i},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;cr.warnOnListenWarnings_(l,n),(this.listens.get(i)&&this.listens.get(i).get(r))===t&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(i,r),t.onComplete&&t.onComplete(u,l))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&Sr(t,"w")){const i=Ho(t,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Xn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||OV(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Vb)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=NV(t)?"auth":"gauth",i={cred:t};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,r=>{const s=r.s,o=r.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,i=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(t,n){const i=t._path.toString(),r=t._queryIdentifier;this.log_("Unlisten called for "+i+" "+r),ke(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,r)&&this.connected_&&this.sendUnlisten_(i,r,t._queryObject,n)}sendUnlisten_(t,n,i,r){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";r&&(s.q=i,s.t=r),this.sendRequest(o,s)}onDisconnectPut(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:i})}onDisconnectMerge(t,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,i):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:i})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,i,r){const s={p:n,d:i};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(t,n,i,r){this.putInternal("p",t,n,i,r)}merge(t,n,i,r){this.putInternal("m",t,n,i,r)}putInternal(t,n,i,r,s){this.initConnection_();const o={p:n,d:i};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,i=this.outstandingPuts_[t].request,r=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,i,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const s=i.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+an(t));const n=t.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):pm("Unrecognized action received from server: "+an(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){ke(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>lM&&(this.reconnectDelay_=$a),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*aM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+cr.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},u=function(f){ke(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?wn("getToken() completed but was canceled"):(wn("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=h&&h.token,a=new tM(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,m=>{Xn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(uM)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Xn(f),l())}}}interrupt(t){wn("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){wn("Resuming connection for reason: "+t),delete this.interruptReasons_[t],K_(this.interruptReasons_)&&(this.reconnectDelay_=$a,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let i;n?i=n.map(s=>mg(s)).join("$"):i="default";const r=this.removeListen_(t,i);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(t,n){const i=new kt(t).toString();let r;if(this.listens.has(i)){const s=this.listens.get(i);r=s.get(n),s.delete(n),s.size===0&&this.listens.delete(i)}else r=void 0;return r}onAuthRevoked_(t,n){wn("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Db&&(this.reconnectDelay_=Vb,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){wn("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Db&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+cE.replace(/\./g,"-")]=1,lg()?t["framework.cordova"]=1:MC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Kc.getInstance().currentlyOnline();return K_(this.interruptReasons_)&&t}}cr.nextPersistentConnectionId_=0;cr.nextConnectionId_=0;/**
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
 */class et{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new et(t,n)}}/**
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
 */class Od{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const i=new et(jo,t),r=new et(jo,n);return this.compare(i,r)!==0}minPost(){return et.MIN}}/**
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
 */let ic;class FE extends Od{static get __EMPTY_NODE(){return ic}static set __EMPTY_NODE(t){ic=t}compare(t,n){return da(t.name,n.name)}isDefinedOn(t){throw la("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return et.MIN}maxPost(){return new et(Ns,ic)}makePost(t,n){return ke(typeof t=="string","KeyIndex indexValue must always be a string."),new et(t,ic)}toString(){return".key"}}const Fo=new FE;/**
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
 */let rc=class{constructor(t,n,i,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?i(t.key,n):1,r&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}},Gn=class Ya{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??Ya.RED,this.left=r??Bi.EMPTY_NODE,this.right=s??Bi.EMPTY_NODE}copy(t,n,i,r,s){return new Ya(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Bi.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let i,r;if(i=this,n(t,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(t,i.key)===0){if(i.right.isEmpty())return Bi.EMPTY_NODE;r=i.right.min_(),i=i.copy(r.key,r.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ya.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ya.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}};Gn.RED=!0;Gn.BLACK=!1;class cM{copy(t,n,i,r,s){return this}insert(t,n,i){return new Gn(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Bi=class Cc{constructor(t,n=Cc.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Cc(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Gn.BLACK,null,null))}remove(t){return new Cc(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Gn.BLACK,null,null))}get(t){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(t,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(t){let n,i=this.root_,r=null;for(;!i.isEmpty();)if(n=this.comparator_(t,i.key),n===0){if(i.left.isEmpty())return r?r.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(r=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new rc(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new rc(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new rc(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new rc(this.root_,null,this.comparator_,!0,t)}};Bi.EMPTY_NODE=new cM;/**
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
 */function dM(e,t){return da(e.name,t.name)}function _g(e,t){return da(e,t)}/**
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
 */let bm;function fM(e){bm=e}const BE=function(e){return typeof e=="number"?"number:"+vE(e):"string:"+e},$E=function(e){if(e.isLeafNode()){const t=e.val();ke(typeof t=="string"||typeof t=="number"||typeof t=="object"&&Sr(t,".sv"),"Priority must be a string or number.")}else ke(e===bm||e.isEmpty(),"priority of unexpected type.");ke(e===bm||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Nb;class Jt{constructor(t,n=Jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,ke(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$E(this.priorityNode_)}static set __childrenNodeConstructor(t){Nb=t}static get __childrenNodeConstructor(){return Nb}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Jt(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Xe(t)?this:Ze(t)===".priority"?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const i=Ze(t);return i===null?n:n.isEmpty()&&i!==".priority"?this:(ke(i!==".priority"||Qr(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Et(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+BE(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=vE(this.value_):t+=this.value_,this.lazyHash_=fE(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Jt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Jt.__childrenNodeConstructor?-1:(ke(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,i=typeof this.value_,r=Jt.VALUE_TYPE_ORDER.indexOf(n),s=Jt.VALUE_TYPE_ORDER.indexOf(i);return ke(r>=0,"Unknown leaf type: "+n),ke(s>=0,"Unknown leaf type: "+i),r===s?i==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let UE,HE;function hM(e){UE=e}function mM(e){HE=e}class vM extends Od{compare(t,n){const i=t.node.getPriority(),r=n.node.getPriority(),s=i.compareTo(r);return s===0?da(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return et.MIN}maxPost(){return new et(Ns,new Jt("[PRIORITY-POST]",HE))}makePost(t,n){const i=UE(t);return new et(n,new Jt("[PRIORITY-POST]",i))}toString(){return".priority"}}const Tn=new vM;/**
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
 */const gM=Math.log(2);class yM{constructor(t){const n=s=>parseInt(Math.log(s)/gM,10),i=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const r=i(this.count);this.bits_=t+1&r}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Yc=function(e,t,n,i){e.sort(t);const r=function(l,u){const c=u-l;let f,h;if(c===0)return null;if(c===1)return f=e[l],h=n?n(f):f,new Gn(h,f.node,Gn.BLACK,null,null);{const m=parseInt(c/2,10)+l,g=r(l,m),y=r(m+1,u);return f=e[m],h=n?n(f):f,new Gn(h,f.node,Gn.BLACK,g,y)}},s=function(l){let u=null,c=null,f=e.length;const h=function(g,y){const p=f-g,E=f;f-=g;const P=r(p+1,E),V=e[p],N=n?n(V):V;m(new Gn(N,V.node,y,null,P))},m=function(g){u?(u.left=g,u=g):(c=g,u=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),p=Math.pow(2,l.count-(g+1));y?h(p,Gn.BLACK):(h(p,Gn.BLACK),h(p,Gn.RED))}return c},o=new yM(e.length),a=s(o);return new Bi(i||t,a)};/**
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
 */let ph;const yo={};class lr{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return ke(yo&&Tn,"ChildrenNode.ts has not been loaded"),ph=ph||new lr({".priority":yo},{".priority":Tn}),ph}get(t){const n=Ho(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Bi?n:null}hasIndex(t){return Sr(this.indexSet_,t.toString())}addIndex(t,n){ke(t!==Fo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let r=!1;const s=n.getIterator(et.Wrap);let o=s.getNext();for(;o;)r=r||t.isDefinedOn(o.node),i.push(o),o=s.getNext();let a;r?a=Yc(i,t.getCompare()):a=yo;const l=t.toString(),u=Object.assign({},this.indexSet_);u[l]=t;const c=Object.assign({},this.indexes_);return c[l]=a,new lr(c,u)}addToIndexes(t,n){const i=Uc(this.indexes_,(r,s)=>{const o=Ho(this.indexSet_,s);if(ke(o,"Missing index implementation for "+s),r===yo)if(o.isDefinedOn(t.node)){const a=[],l=n.getIterator(et.Wrap);let u=l.getNext();for(;u;)u.name!==t.name&&a.push(u),u=l.getNext();return a.push(t),Yc(a,o.getCompare())}else return yo;else{const a=n.get(t.name);let l=r;return a&&(l=l.remove(new et(t.name,a))),l.insert(t,t.node)}});return new lr(i,this.indexSet_)}removeFromIndexes(t,n){const i=Uc(this.indexes_,r=>{if(r===yo)return r;{const s=n.get(t.name);return s?r.remove(new et(t.name,s)):r}});return new lr(i,this.indexSet_)}}/**
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
 */let Ua;class ct{constructor(t,n,i){this.children_=t,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&$E(this.priorityNode_),this.children_.isEmpty()&&ke(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ua||(Ua=new ct(new Bi(_g),null,lr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ua}updatePriority(t){return this.children_.isEmpty()?this:new ct(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Ua:n}}getChild(t){const n=Ze(t);return n===null?this:this.getImmediateChild(n).getChild(Et(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(ke(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const i=new et(t,n);let r,s;n.isEmpty()?(r=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(i,this.children_)):(r=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(i,this.children_));const o=r.isEmpty()?Ua:this.priorityNode_;return new ct(r,o,s)}}updateChild(t,n){const i=Ze(t);if(i===null)return n;{ke(Ze(t)!==".priority"||Qr(t)===1,".priority must be the last token in a path");const r=this.getImmediateChild(i).updateChild(Et(t),n);return this.updateImmediateChild(i,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let i=0,r=0,s=!0;if(this.forEachChild(Tn,(o,a)=>{n[o]=a.val(t),i++,s&&ct.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):s=!1}),!t&&s&&r<2*i){const o=[];for(const a in n)o[a]=n[a];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+BE(this.getPriority().val())+":"),this.forEachChild(Tn,(n,i)=>{const r=i.hash();r!==""&&(t+=":"+n+":"+r)}),this.lazyHash_=t===""?"":fE(t)}return this.lazyHash_}getPredecessorChildName(t,n,i){const r=this.resolveIndex_(i);if(r){const s=r.getPredecessorKey(new et(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new et(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new et(n,this.children_.get(n)):null}forEachChild(t,n){const i=this.resolveIndex_(t);return i?i.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(t,r=>r);{const r=this.children_.getIteratorFrom(t.name,et.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(t,r=>r);{const r=this.children_.getReverseIteratorFrom(t.name,et.Wrap);let s=r.peek();for(;s!=null&&n.compare(s,t)>0;)r.getNext(),s=r.peek();return r}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===cu?-1:0}withIndex(t){if(t===Fo||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new ct(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Fo||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Tn),r=n.getIterator(Tn);let s=i.getNext(),o=r.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=i.getNext(),o=r.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Fo?null:this.indexMap_.get(t.toString())}}ct.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class pM extends ct{constructor(){super(new Bi(_g),ct.EMPTY_NODE,lr.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ct.EMPTY_NODE}isEmpty(){return!1}}const cu=new pM;Object.defineProperties(et,{MIN:{value:new et(jo,ct.EMPTY_NODE)},MAX:{value:new et(Ns,cu)}});FE.__EMPTY_NODE=ct.EMPTY_NODE;Jt.__childrenNodeConstructor=ct;fM(cu);mM(cu);/**
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
 */const _M=!0;function Sn(e,t=null){if(e===null)return ct.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),ke(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Jt(n,Sn(t))}if(!(e instanceof Array)&&_M){const n=[];let i=!1;if(hi(e,(o,a)=>{if(o.substring(0,1)!=="."){const l=Sn(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),n.push(new et(o,l)))}}),n.length===0)return ct.EMPTY_NODE;const s=Yc(n,dM,o=>o.name,_g);if(i){const o=Yc(n,Tn.getCompare());return new ct(s,Sn(t),new lr({".priority":o},{".priority":Tn}))}else return new ct(s,Sn(t),lr.Default)}else{let n=ct.EMPTY_NODE;return hi(e,(i,r)=>{if(Sr(e,i)&&i.substring(0,1)!=="."){const s=Sn(r);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(i,s))}}),n.updatePriority(Sn(t))}}hM(Sn);/**
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
 */class bM extends Od{constructor(t){super(),this.indexPath_=t,ke(!Xe(t)&&Ze(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const i=this.extractChild(t.node),r=this.extractChild(n.node),s=i.compareTo(r);return s===0?da(t.name,n.name):s}makePost(t,n){const i=Sn(t),r=ct.EMPTY_NODE.updateChild(this.indexPath_,i);return new et(n,r)}maxPost(){const t=ct.EMPTY_NODE.updateChild(this.indexPath_,cu);return new et(Ns,t)}toString(){return NE(this.indexPath_,0).join("/")}}/**
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
 */class wM extends Od{compare(t,n){const i=t.node.compareTo(n.node);return i===0?da(t.name,n.name):i}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return et.MIN}maxPost(){return et.MAX}makePost(t,n){const i=Sn(t);return new et(n,i)}toString(){return".value"}}const SM=new wM;/**
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
 */function CM(e){return{type:"value",snapshotNode:e}}function EM(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function IM(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ob(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function TM(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class bg{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Tn}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return ke(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ke(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:jo}hasEnd(){return this.endSet_}getIndexEndValue(){return ke(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ke(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ns}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return ke(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Tn}copy(){const t=new bg;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function Mb(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Tn?n="$priority":e.index_===SM?n="$value":e.index_===Fo?n="$key":(ke(e.index_ instanceof bM,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=an(n),e.startSet_){const i=e.startAfterSet_?"startAfter":"startAt";t[i]=an(e.indexStartValue_),e.startNameSet_&&(t[i]+=","+an(e.indexStartName_))}if(e.endSet_){const i=e.endBeforeSet_?"endBefore":"endAt";t[i]=an(e.indexEndValue_),e.endNameSet_&&(t[i]+=","+an(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Lb(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Tn&&(t.i=e.index_.toString()),t}/**
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
 */class Qc extends RE{constructor(t,n,i,r){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=r,this.log_=lu("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(ke(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,i,r){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Qc.getListenId_(t,i),a={};this.listens_[o]=a;const l=Mb(t._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let f=c;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(s,f,!1,i),Ho(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",r(h,null)}})}unlisten(t,n){const i=Qc.getListenId_(t,n);delete this.listens_[i]}get(t){const n=Mb(t._queryParams),i=t._path.toString(),r=new kl;return this.restRequest_(i+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(i,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(t){}restRequest_(t,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(n.auth=r.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+ug(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Al(a.responseText)}catch{Xn("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Xn("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class kM{constructor(){this.rootNode_=ct.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function Xc(){return{value:null,children:new Map}}function jE(e,t,n){if(Xe(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const i=Ze(t);e.children.has(i)||e.children.set(i,Xc());const r=e.children.get(i);t=Et(t),jE(r,t,n)}}function wm(e,t,n){e.value!==null?n(t,e.value):AM(e,(i,r)=>{const s=new kt(t.toString()+"/"+i);wm(r,s,n)})}function AM(e,t){e.children.forEach((n,i)=>{t(i,n)})}/**
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
 */class PM{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&hi(this.last_,(i,r)=>{n[i]=n[i]-r}),this.last_=t,n}}/**
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
 */const Fb=10*1e3,xM=30*1e3,RM=5*60*1e3;class VM{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new PM(t);const i=Fb+(xM-Fb)*Math.random();cl(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const t=this.statsListener_.get(),n={};let i=!1;hi(t,(r,s)=>{s>0&&Sr(this.statsToReport_,r)&&(n[r]=s,i=!0)}),i&&this.server_.reportStats(n),cl(this.reportStats_.bind(this),Math.floor(Math.random()*2*RM))}}/**
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
 */var $i;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})($i||($i={}));function zE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function WE(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qE(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class Jc{constructor(t,n,i){this.path=t,this.affectedTree=n,this.revert=i,this.type=$i.ACK_USER_WRITE,this.source=zE()}operationForChild(t){if(Xe(this.path)){if(this.affectedTree.value!=null)return ke(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new kt(t));return new Jc(vt(),n,this.revert)}}else return ke(Ze(this.path)===t,"operationForChild called for unrelated child."),new Jc(Et(this.path),this.affectedTree,this.revert)}}/**
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
 */class Os{constructor(t,n,i){this.source=t,this.path=n,this.snap=i,this.type=$i.OVERWRITE}operationForChild(t){return Xe(this.path)?new Os(this.source,vt(),this.snap.getImmediateChild(t)):new Os(this.source,Et(this.path),this.snap)}}/**
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
 */class Rl{constructor(t,n,i){this.source=t,this.path=n,this.children=i,this.type=$i.MERGE}operationForChild(t){if(Xe(this.path)){const n=this.children.subtree(new kt(t));return n.isEmpty()?null:n.value?new Os(this.source,vt(),n.value):new Rl(this.source,vt(),n)}else return ke(Ze(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Rl(this.source,Et(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class wg{constructor(t,n,i){this.node_=t,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Xe(t))return this.isFullyInitialized()&&!this.filtered_;const n=Ze(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function DM(e,t,n,i){const r=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(TM(o.childName,o.snapshotNode))}),Ha(e,r,"child_removed",t,i,n),Ha(e,r,"child_added",t,i,n),Ha(e,r,"child_moved",s,i,n),Ha(e,r,"child_changed",t,i,n),Ha(e,r,"value",t,i,n),r}function Ha(e,t,n,i,r,s){const o=i.filter(a=>a.type===n);o.sort((a,l)=>OM(e,a,l)),o.forEach(a=>{const l=NM(e,a,s);r.forEach(u=>{u.respondsTo(a.type)&&t.push(u.createEvent(l,e.query_))})})}function NM(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function OM(e,t,n){if(t.childName==null||n.childName==null)throw la("Should only compare child_ events.");const i=new et(t.childName,t.snapshotNode),r=new et(n.childName,n.snapshotNode);return e.index_.compare(i,r)}/**
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
 */function GE(e,t){return{eventCache:e,serverCache:t}}function dl(e,t,n,i){return GE(new wg(t,n,i),e.serverCache)}function KE(e,t,n,i){return GE(e.eventCache,new wg(t,n,i))}function Sm(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ms(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let _h;const MM=()=>(_h||(_h=new Bi(wO)),_h);class St{constructor(t,n=MM()){this.value=t,this.children=n}static fromObject(t){let n=new St(null);return hi(t,(i,r)=>{n=n.set(new kt(i),r)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:vt(),value:this.value};if(Xe(t))return null;{const i=Ze(t),r=this.children.get(i);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Et(t),n);return s!=null?{path:en(new kt(i),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(Xe(t))return this;{const n=Ze(t),i=this.children.get(n);return i!==null?i.subtree(Et(t)):new St(null)}}set(t,n){if(Xe(t))return new St(n,this.children);{const i=Ze(t),s=(this.children.get(i)||new St(null)).set(Et(t),n),o=this.children.insert(i,s);return new St(this.value,o)}}remove(t){if(Xe(t))return this.children.isEmpty()?new St(null):new St(null,this.children);{const n=Ze(t),i=this.children.get(n);if(i){const r=i.remove(Et(t));let s;return r.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,r),this.value===null&&s.isEmpty()?new St(null):new St(this.value,s)}else return this}}get(t){if(Xe(t))return this.value;{const n=Ze(t),i=this.children.get(n);return i?i.get(Et(t)):null}}setTree(t,n){if(Xe(t))return n;{const i=Ze(t),s=(this.children.get(i)||new St(null)).setTree(Et(t),n);let o;return s.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,s),new St(this.value,o)}}fold(t){return this.fold_(vt(),t)}fold_(t,n){const i={};return this.children.inorderTraversal((r,s)=>{i[r]=s.fold_(en(t,r),n)}),n(t,this.value,i)}findOnPath(t,n){return this.findOnPath_(t,vt(),n)}findOnPath_(t,n,i){const r=this.value?i(n,this.value):!1;if(r)return r;if(Xe(t))return null;{const s=Ze(t),o=this.children.get(s);return o?o.findOnPath_(Et(t),en(n,s),i):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,vt(),n)}foreachOnPath_(t,n,i){if(Xe(t))return this;{this.value&&i(n,this.value);const r=Ze(t),s=this.children.get(r);return s?s.foreachOnPath_(Et(t),en(n,r),i):new St(null)}}foreach(t){this.foreach_(vt(),t)}foreach_(t,n){this.children.inorderTraversal((i,r)=>{r.foreach_(en(t,i),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,i)=>{i.value&&t(n,i.value)})}}/**
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
 */class Ii{constructor(t){this.writeTree_=t}static empty(){return new Ii(new St(null))}}function fl(e,t,n){if(Xe(t))return new Ii(new St(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(i!=null){const r=i.path;let s=i.value;const o=ui(r,t);return s=s.updateChild(o,n),new Ii(e.writeTree_.set(r,s))}else{const r=new St(n),s=e.writeTree_.setTree(t,r);return new Ii(s)}}}function Bb(e,t,n){let i=e;return hi(n,(r,s)=>{i=fl(i,en(t,r),s)}),i}function $b(e,t){if(Xe(t))return Ii.empty();{const n=e.writeTree_.setTree(t,new St(null));return new Ii(n)}}function Cm(e,t){return Qs(e,t)!=null}function Qs(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(ui(n.path,t)):null}function Ub(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Tn,(i,r)=>{t.push(new et(i,r))}):e.writeTree_.children.inorderTraversal((i,r)=>{r.value!=null&&t.push(new et(i,r.value))}),t}function Gr(e,t){if(Xe(t))return e;{const n=Qs(e,t);return n!=null?new Ii(new St(n)):new Ii(e.writeTree_.subtree(t))}}function Em(e){return e.writeTree_.isEmpty()}function zo(e,t){return YE(vt(),e.writeTree_,t)}function YE(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal((r,s)=>{r===".priority"?(ke(s.value!==null,"Priority writes must always be leaf nodes"),i=s.value):n=YE(en(e,r),s,n)}),!n.getChild(e).isEmpty()&&i!==null&&(n=n.updateChild(en(e,".priority"),i)),n}}/**
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
 */function QE(e,t){return tI(t,e)}function LM(e,t,n,i,r){ke(i>e.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=fl(e.visibleWrites,t,n)),e.lastWriteId=i}function FM(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function BM(e,t){const n=e.allWrites.findIndex(a=>a.writeId===t);ke(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const a=e.allWrites[o];a.visible&&(o>=n&&$M(a,i.path)?r=!1:Ci(i.path,a.path)&&(s=!0)),o--}if(r){if(s)return UM(e),!0;if(i.snap)e.visibleWrites=$b(e.visibleWrites,i.path);else{const a=i.children;hi(a,l=>{e.visibleWrites=$b(e.visibleWrites,en(i.path,l))})}return!0}else return!1}function $M(e,t){if(e.snap)return Ci(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ci(en(e.path,n),t))return!0;return!1}function UM(e){e.visibleWrites=XE(e.allWrites,HM,vt()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function HM(e){return e.visible}function XE(e,t,n){let i=Ii.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const o=s.path;let a;if(s.snap)Ci(n,o)?(a=ui(n,o),i=fl(i,a,s.snap)):Ci(o,n)&&(a=ui(o,n),i=fl(i,vt(),s.snap.getChild(a)));else if(s.children){if(Ci(n,o))a=ui(n,o),i=Bb(i,a,s.children);else if(Ci(o,n))if(a=ui(o,n),Xe(a))i=Bb(i,vt(),s.children);else{const l=Ho(s.children,Ze(a));if(l){const u=l.getChild(Et(a));i=fl(i,vt(),u)}}}else throw la("WriteRecord should have .snap or .children")}}return i}function JE(e,t,n,i,r){if(!i&&!r){const s=Qs(e.visibleWrites,t);if(s!=null)return s;{const o=Gr(e.visibleWrites,t);if(Em(o))return n;if(n==null&&!Cm(o,vt()))return null;{const a=n||ct.EMPTY_NODE;return zo(o,a)}}}else{const s=Gr(e.visibleWrites,t);if(!r&&Em(s))return n;if(!r&&n==null&&!Cm(s,vt()))return null;{const o=function(u){return(u.visible||r)&&(!i||!~i.indexOf(u.writeId))&&(Ci(u.path,t)||Ci(t,u.path))},a=XE(e.allWrites,o,t),l=n||ct.EMPTY_NODE;return zo(a,l)}}}function jM(e,t,n){let i=ct.EMPTY_NODE;const r=Qs(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Tn,(s,o)=>{i=i.updateImmediateChild(s,o)}),i;if(n){const s=Gr(e.visibleWrites,t);return n.forEachChild(Tn,(o,a)=>{const l=zo(Gr(s,new kt(o)),a);i=i.updateImmediateChild(o,l)}),Ub(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const s=Gr(e.visibleWrites,t);return Ub(s).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function zM(e,t,n,i,r){ke(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=en(t,n);if(Cm(e.visibleWrites,s))return null;{const o=Gr(e.visibleWrites,s);return Em(o)?r.getChild(n):zo(o,r.getChild(n))}}function WM(e,t,n,i){const r=en(t,n),s=Qs(e.visibleWrites,r);if(s!=null)return s;if(i.isCompleteForChild(n)){const o=Gr(e.visibleWrites,r);return zo(o,i.getNode().getImmediateChild(n))}else return null}function qM(e,t){return Qs(e.visibleWrites,t)}function GM(e,t,n,i,r,s,o){let a;const l=Gr(e.visibleWrites,t),u=Qs(l,vt());if(u!=null)a=u;else if(n!=null)a=zo(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],f=o.getCompare(),h=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let m=h.getNext();for(;m&&c.length<r;)f(m,i)!==0&&c.push(m),m=h.getNext();return c}else return[]}function KM(){return{visibleWrites:Ii.empty(),allWrites:[],lastWriteId:-1}}function Im(e,t,n,i){return JE(e.writeTree,e.treePath,t,n,i)}function ZE(e,t){return jM(e.writeTree,e.treePath,t)}function Hb(e,t,n,i){return zM(e.writeTree,e.treePath,t,n,i)}function Zc(e,t){return qM(e.writeTree,en(e.treePath,t))}function YM(e,t,n,i,r,s){return GM(e.writeTree,e.treePath,t,n,i,r,s)}function Sg(e,t,n){return WM(e.writeTree,e.treePath,t,n)}function eI(e,t){return tI(en(e.treePath,t),e.writeTree)}function tI(e,t){return{treePath:e,writeTree:t}}/**
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
 */class QM{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,i=t.childName;ke(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),ke(i!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(i);if(r){const s=r.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(i,Ob(i,t.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(i,IM(i,r.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(i,EM(i,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(i,Ob(i,t.snapshotNode,r.oldSnap));else throw la("Illegal combination of changes: "+t+" occurred after "+r)}else this.changeMap.set(i,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class XM{getCompleteChild(t){return null}getChildAfterChild(t,n,i){return null}}const nI=new XM;class Cg{constructor(t,n,i=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const i=this.optCompleteServerCache_!=null?new wg(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sg(this.writes_,t,i)}}getChildAfterChild(t,n,i){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ms(this.viewCache_),s=YM(this.writes_,r,n,1,i,t);return s.length===0?null:s[0]}}function JM(e,t){ke(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),ke(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ZM(e,t,n,i,r){const s=new QM;let o,a;if(n.type===$i.OVERWRITE){const u=n;u.source.fromUser?o=Tm(e,t,u.path,u.snap,i,r,s):(ke(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered()&&!Xe(u.path),o=ed(e,t,u.path,u.snap,i,r,a,s))}else if(n.type===$i.MERGE){const u=n;u.source.fromUser?o=tL(e,t,u.path,u.children,i,r,s):(ke(u.source.fromServer,"Unknown source."),a=u.source.tagged||t.serverCache.isFiltered(),o=km(e,t,u.path,u.children,i,r,a,s))}else if(n.type===$i.ACK_USER_WRITE){const u=n;u.revert?o=rL(e,t,u.path,i,r,s):o=nL(e,t,u.path,u.affectedTree,i,r,s)}else if(n.type===$i.LISTEN_COMPLETE)o=iL(e,t,n.path,i,s);else throw la("Unknown operation type: "+n.type);const l=s.getChanges();return eL(t,o,l),{viewCache:o,changes:l}}function eL(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Sm(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(CM(Sm(t)))}}function iI(e,t,n,i,r,s){const o=t.eventCache;if(Zc(i,n)!=null)return t;{let a,l;if(Xe(n))if(ke(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=Ms(t),c=u instanceof ct?u:ct.EMPTY_NODE,f=ZE(i,c);a=e.filter.updateFullNode(t.eventCache.getNode(),f,s)}else{const u=Im(i,Ms(t));a=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=Ze(n);if(u===".priority"){ke(Qr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=t.serverCache.getNode();const f=Hb(i,n,c,l);f!=null?a=e.filter.updatePriority(c,f):a=o.getNode()}else{const c=Et(n);let f;if(o.isCompleteForChild(u)){l=t.serverCache.getNode();const h=Hb(i,n,o.getNode(),l);h!=null?f=o.getNode().getImmediateChild(u).updateChild(c,h):f=o.getNode().getImmediateChild(u)}else f=Sg(i,u,t.serverCache);f!=null?a=e.filter.updateChild(o.getNode(),u,f,c,r,s):a=o.getNode()}}return dl(t,a,o.isFullyInitialized()||Xe(n),e.filter.filtersNodes())}}function ed(e,t,n,i,r,s,o,a){const l=t.serverCache;let u;const c=o?e.filter:e.filter.getIndexedFilter();if(Xe(n))u=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,i);u=c.updateFullNode(l.getNode(),m,null)}else{const m=Ze(n);if(!l.isCompleteForPath(n)&&Qr(n)>1)return t;const g=Et(n),p=l.getNode().getImmediateChild(m).updateChild(g,i);m===".priority"?u=c.updatePriority(l.getNode(),p):u=c.updateChild(l.getNode(),m,p,g,nI,null)}const f=KE(t,u,l.isFullyInitialized()||Xe(n),c.filtersNodes()),h=new Cg(r,f,s);return iI(e,f,n,r,h,a)}function Tm(e,t,n,i,r,s,o){const a=t.eventCache;let l,u;const c=new Cg(r,t,s);if(Xe(n))u=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=dl(t,u,!0,e.filter.filtersNodes());else{const f=Ze(n);if(f===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),i),l=dl(t,u,a.isFullyInitialized(),a.isFiltered());else{const h=Et(n),m=a.getNode().getImmediateChild(f);let g;if(Xe(h))g=i;else{const y=c.getCompleteChild(f);y!=null?DE(h)===".priority"&&y.getChild(OE(h)).isEmpty()?g=y:g=y.updateChild(h,i):g=ct.EMPTY_NODE}if(m.equals(g))l=t;else{const y=e.filter.updateChild(a.getNode(),f,g,h,c,o);l=dl(t,y,a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function jb(e,t){return e.eventCache.isCompleteForChild(t)}function tL(e,t,n,i,r,s,o){let a=t;return i.foreach((l,u)=>{const c=en(n,l);jb(t,Ze(c))&&(a=Tm(e,a,c,u,r,s,o))}),i.foreach((l,u)=>{const c=en(n,l);jb(t,Ze(c))||(a=Tm(e,a,c,u,r,s,o))}),a}function zb(e,t,n){return n.foreach((i,r)=>{t=t.updateChild(i,r)}),t}function km(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l=t,u;Xe(n)?u=i:u=new St(null).setTree(n,i);const c=t.serverCache.getNode();return u.children.inorderTraversal((f,h)=>{if(c.hasChild(f)){const m=t.serverCache.getNode().getImmediateChild(f),g=zb(e,m,h);l=ed(e,l,new kt(f),g,r,s,o,a)}}),u.children.inorderTraversal((f,h)=>{const m=!t.serverCache.isCompleteForChild(f)&&h.value===null;if(!c.hasChild(f)&&!m){const g=t.serverCache.getNode().getImmediateChild(f),y=zb(e,g,h);l=ed(e,l,new kt(f),y,r,s,o,a)}}),l}function nL(e,t,n,i,r,s,o){if(Zc(r,n)!=null)return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(i.value!=null){if(Xe(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ed(e,t,n,l.getNode().getChild(n),r,s,a,o);if(Xe(n)){let u=new St(null);return l.getNode().forEachChild(Fo,(c,f)=>{u=u.set(new kt(c),f)}),km(e,t,n,u,r,s,a,o)}else return t}else{let u=new St(null);return i.foreach((c,f)=>{const h=en(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),km(e,t,n,u,r,s,a,o)}}function iL(e,t,n,i,r){const s=t.serverCache,o=KE(t,s.getNode(),s.isFullyInitialized()||Xe(n),s.isFiltered());return iI(e,o,n,i,nI,r)}function rL(e,t,n,i,r,s){let o;if(Zc(i,n)!=null)return t;{const a=new Cg(i,t,r),l=t.eventCache.getNode();let u;if(Xe(n)||Ze(n)===".priority"){let c;if(t.serverCache.isFullyInitialized())c=Im(i,Ms(t));else{const f=t.serverCache.getNode();ke(f instanceof ct,"serverChildren would be complete if leaf node"),c=ZE(i,f)}c=c,u=e.filter.updateFullNode(l,c,s)}else{const c=Ze(n);let f=Sg(i,c,t.serverCache);f==null&&t.serverCache.isCompleteForChild(c)&&(f=l.getImmediateChild(c)),f!=null?u=e.filter.updateChild(l,c,f,Et(n),a,s):t.eventCache.getNode().hasChild(c)?u=e.filter.updateChild(l,c,ct.EMPTY_NODE,Et(n),a,s):u=l,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Im(i,Ms(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||Zc(i,vt())!=null,dl(t,u,o,e.filter.filtersNodes())}}function sL(e,t){const n=Ms(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Xe(t)&&!n.getImmediateChild(Ze(t)).isEmpty())?n.getChild(t):null}function Wb(e,t,n,i){t.type===$i.MERGE&&t.source.queryId!==null&&(ke(Ms(e.viewCache_),"We should always have a full cache before handling merges"),ke(Sm(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=ZM(e.processor_,r,t,n,i);return JM(e.processor_,s.viewCache),ke(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,oL(e,s.changes,s.viewCache.eventCache.getNode())}function oL(e,t,n,i){const r=e.eventRegistrations_;return DM(e.eventGenerator_,t,n,r)}/**
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
 */let qb;function aL(e){ke(!qb,"__referenceConstructor has already been defined"),qb=e}function Eg(e,t,n,i){const r=t.source.queryId;if(r!==null){const s=e.views.get(r);return ke(s!=null,"SyncTree gave us an op for an invalid query."),Wb(s,t,n,i)}else{let s=[];for(const o of e.views.values())s=s.concat(Wb(o,t,n,i));return s}}function Ig(e,t){let n=null;for(const i of e.views.values())n=n||sL(i,t);return n}/**
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
 */let Gb;function lL(e){ke(!Gb,"__referenceConstructor has already been defined"),Gb=e}class Kb{constructor(t){this.listenProvider_=t,this.syncPointTree_=new St(null),this.pendingWriteTree_=KM(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uL(e,t,n,i,r){return LM(e.pendingWriteTree_,t,n,i,r),r?Ld(e,new Os(zE(),t,n)):[]}function Ao(e,t,n=!1){const i=FM(e.pendingWriteTree_,t);if(BM(e.pendingWriteTree_,t)){let s=new St(null);return i.snap!=null?s=s.set(vt(),!0):hi(i.children,o=>{s=s.set(new kt(o),!0)}),Ld(e,new Jc(i.path,s,n))}else return[]}function Md(e,t,n){return Ld(e,new Os(WE(),t,n))}function cL(e,t,n){const i=St.fromObject(n);return Ld(e,new Rl(WE(),t,i))}function dL(e,t,n,i){const r=aI(e,i);if(r!=null){const s=lI(r),o=s.path,a=s.queryId,l=ui(o,t),u=new Os(qE(a),l,n);return uI(e,o,u)}else return[]}function fL(e,t,n,i){const r=aI(e,i);if(r){const s=lI(r),o=s.path,a=s.queryId,l=ui(o,t),u=St.fromObject(n),c=new Rl(qE(a),l,u);return uI(e,o,c)}else return[]}function rI(e,t,n){const r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,a)=>{const l=ui(o,t),u=Ig(a,l);if(u)return u});return JE(r,t,s,n,!0)}function Ld(e,t){return sI(t,e.syncPointTree_,null,QE(e.pendingWriteTree_,vt()))}function sI(e,t,n,i){if(Xe(e.path))return oI(e,t,n,i);{const r=t.get(vt());n==null&&r!=null&&(n=Ig(r,vt()));let s=[];const o=Ze(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=eI(i,o);s=s.concat(sI(a,l,u,c))}return r&&(s=s.concat(Eg(r,e,i,n))),s}}function oI(e,t,n,i){const r=t.get(vt());n==null&&r!=null&&(n=Ig(r,vt()));let s=[];return t.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=eI(i,o),c=e.operationForChild(o);c&&(s=s.concat(oI(c,a,l,u)))}),r&&(s=s.concat(Eg(r,e,i,n))),s}function aI(e,t){return e.tagToQueryMap.get(t)}function lI(e){const t=e.indexOf("$");return ke(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new kt(e.substr(0,t))}}function uI(e,t,n){const i=e.syncPointTree_.get(t);ke(i,"Missing sync point for query tag that we're tracking");const r=QE(e.pendingWriteTree_,t);return Eg(i,n,r,null)}/**
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
 */class Tg{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new Tg(n)}node(){return this.node_}}class kg{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=en(this.path_,t);return new kg(this.syncTree_,n)}node(){return rI(this.syncTree_,this.path_)}}const hL=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Yb=function(e,t,n){if(!e||typeof e!="object")return e;if(ke(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return mL(e[".sv"],t,n);if(typeof e[".sv"]=="object")return vL(e[".sv"],t);ke(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},mL=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:ke(!1,"Unexpected server value: "+e)}},vL=function(e,t,n){e.hasOwnProperty("increment")||ke(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;typeof i!="number"&&ke(!1,"Unexpected increment value: "+i);const r=t.node();if(ke(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const o=r.getValue();return typeof o!="number"?i:o+i},gL=function(e,t,n,i){return Ag(t,new kg(n,e),i)},yL=function(e,t,n){return Ag(e,new Tg(t),n)};function Ag(e,t,n){const i=e.getPriority().val(),r=Yb(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,a=Yb(o.getValue(),t,n);return a!==o.getValue()||r!==o.getPriority().val()?new Jt(a,Sn(r)):e}else{const o=e;return s=o,r!==o.getPriority().val()&&(s=s.updatePriority(new Jt(r))),o.forEachChild(Tn,(a,l)=>{const u=Ag(l,t.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Pg{constructor(t="",n=null,i={children:{},childCount:0}){this.name=t,this.parent=n,this.node=i}}function xg(e,t){let n=t instanceof kt?t:new kt(t),i=e,r=Ze(n);for(;r!==null;){const s=Ho(i.node.children,r)||{children:{},childCount:0};i=new Pg(r,i,s),n=Et(n),r=Ze(n)}return i}function fa(e){return e.node.value}function cI(e,t){e.node.value=t,Am(e)}function dI(e){return e.node.childCount>0}function pL(e){return fa(e)===void 0&&!dI(e)}function Fd(e,t){hi(e.node.children,(n,i)=>{t(new Pg(n,e,i))})}function fI(e,t,n,i){n&&!i&&t(e),Fd(e,r=>{fI(r,t,!0,i)}),n&&i&&t(e)}function _L(e,t,n){let i=e.parent;for(;i!==null;){if(t(i))return!0;i=i.parent}return!1}function du(e){return new kt(e.parent===null?e.name:du(e.parent)+"/"+e.name)}function Am(e){e.parent!==null&&bL(e.parent,e.name,e)}function bL(e,t,n){const i=pL(n),r=Sr(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Am(e)):!i&&!r&&(e.node.children[t]=n.node,e.node.childCount++,Am(e))}/**
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
 */const wL=/[\[\].#$\/\u0000-\u001F\u007F]/,SL=/[\[\].#$\u0000-\u001F\u007F]/,bh=10*1024*1024,hI=function(e){return typeof e=="string"&&e.length!==0&&!wL.test(e)},CL=function(e){return typeof e=="string"&&e.length!==0&&!SL.test(e)},EL=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),CL(e)},mI=function(e,t,n){const i=n instanceof kt?new iM(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+ps(i));if(typeof t=="function")throw new Error(e+"contains a function "+ps(i)+" with contents = "+t.toString());if(hE(t))throw new Error(e+"contains "+t.toString()+" "+ps(i));if(typeof t=="string"&&t.length>bh/3&&Dd(t)>bh)throw new Error(e+"contains a string greater than "+bh+" utf8 bytes "+ps(i)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let r=!1,s=!1;if(hi(t,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!hI(o)))throw new Error(e+" contains an invalid key ("+o+") "+ps(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rM(i,o),mI(e,a,i),sM(i)}),r&&s)throw new Error(e+' contains ".value" child '+ps(i)+" in addition to actual children.")}},IL=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!hI(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!EL(n))throw new Error($V(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class TL{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kL(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();n!==null&&!ME(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Xs(e,t,n){kL(e,n),AL(e,i=>Ci(i,t)||Ci(t,i))}function AL(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(PL(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function PL(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const i=n.getEventRunner();ul&&wn("event: "+n.toString()),uu(i)}}}/**
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
 */const xL="repo_interrupt",RL=25;class VL{constructor(t,n,i,r){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new TL,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xc(),this.transactionQueueTree_=new Pg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DL(e,t,n){if(e.stats_=gg(e.repoInfo_),e.forceRestClient_||kO())e.server_=new Qc(e.repoInfo_,(i,r,s,o)=>{Qb(e,i,r,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Xb(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{an(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new cr(e.repoInfo_,t,(i,r,s,o)=>{Qb(e,i,r,s,o)},i=>{Xb(e,i)},i=>{OL(e,i)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(i=>{e.server_.refreshAuthToken(i)}),e.appCheckProvider_.addTokenChangeListener(i=>{e.server_.refreshAppCheckToken(i.token)}),e.statsReporter_=DO(e.repoInfo_,()=>new VM(e.stats_,e.server_)),e.infoData_=new kM,e.infoSyncTree_=new Kb({startListening:(i,r,s,o)=>{let a=[];const l=e.infoData_.getNode(i._path);return l.isEmpty()||(a=Md(e.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rg(e,"connected",!1),e.serverSyncTree_=new Kb({startListening:(i,r,s,o)=>(e.server_.listen(i,s,r,(a,l)=>{const u=o(a,l);Xs(e.eventQueue_,i._path,u)}),[]),stopListening:(i,r)=>{e.server_.unlisten(i,r)}})}function NL(e){const n=e.infoData_.getNode(new kt(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function vI(e){return hL({timestamp:NL(e)})}function Qb(e,t,n,i,r){e.dataUpdateCount++;const s=new kt(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const l=Uc(n,u=>Sn(u));o=fL(e.serverSyncTree_,s,l,r)}else{const l=Sn(n);o=dL(e.serverSyncTree_,s,l,r)}else if(i){const l=Uc(n,u=>Sn(u));o=cL(e.serverSyncTree_,s,l)}else{const l=Sn(n);o=Md(e.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Dg(e,s)),Xs(e.eventQueue_,a,o)}function Xb(e,t){Rg(e,"connected",t),t===!1&&LL(e)}function OL(e,t){hi(t,(n,i)=>{Rg(e,n,i)})}function Rg(e,t,n){const i=new kt("/.info/"+t),r=Sn(n);e.infoData_.updateSnapshot(i,r);const s=Md(e.infoSyncTree_,i,r);Xs(e.eventQueue_,i,s)}function ML(e){return e.nextWriteId_++}function LL(e){gI(e,"onDisconnectEvents");const t=vI(e),n=Xc();wm(e.onDisconnect_,vt(),(r,s)=>{const o=gL(r,s,e.serverSyncTree_,t);jE(n,r,o)});let i=[];wm(n,vt(),(r,s)=>{i=i.concat(Md(e.serverSyncTree_,r,s));const o=UL(e,r);Dg(e,o)}),e.onDisconnect_=Xc(),Xs(e.eventQueue_,vt(),i)}function FL(e){e.persistentConnection_&&e.persistentConnection_.interrupt(xL)}function gI(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),wn(n,...t)}function yI(e,t,n){return rI(e.serverSyncTree_,t,n)||ct.EMPTY_NODE}function Vg(e,t=e.transactionQueueTree_){if(t||Bd(e,t),fa(t)){const n=_I(e,t);ke(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&BL(e,du(t),n)}else dI(t)&&Fd(t,n=>{Vg(e,n)})}function BL(e,t,n){const i=n.map(u=>u.currentWriteId),r=yI(e,t,i);let s=r;const o=r.hash();for(let u=0;u<n.length;u++){const c=n[u];ke(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const f=ui(t,c.path);s=s.updateChild(f,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,u=>{gI(e,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const f=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Ao(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&f.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Bd(e,xg(e.transactionQueueTree_,t)),Vg(e,e.transactionQueueTree_),Xs(e.eventQueue_,t,c);for(let h=0;h<f.length;h++)uu(f[h])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Xn("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}Dg(e,t)}},o)}function Dg(e,t){const n=pI(e,t),i=du(n),r=_I(e,n);return $L(e,r,i),i}function $L(e,t,n){if(t.length===0)return;const i=[];let r=[];const o=t.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<t.length;a++){const l=t[a],u=ui(n,l.path);let c=!1,f;if(ke(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,f=l.abortReason,r=r.concat(Ao(e.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=RL)c=!0,f="maxretry",r=r.concat(Ao(e.serverSyncTree_,l.currentWriteId,!0));else{const h=yI(e,l.path,o);l.currentInputSnapshot=h;const m=t[a].update(h.val());if(m!==void 0){mI("transaction failed: Data returned ",m,l.path);let g=Sn(m);typeof m=="object"&&m!=null&&Sr(m,".priority")||(g=g.updatePriority(h.getPriority()));const p=l.currentWriteId,E=vI(e),P=yL(g,h,E);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=P,l.currentWriteId=ML(e),o.splice(o.indexOf(p),1),r=r.concat(uL(e.serverSyncTree_,l.path,P,l.currentWriteId,l.applyLocally)),r=r.concat(Ao(e.serverSyncTree_,p,!0))}else c=!0,f="nodata",r=r.concat(Ao(e.serverSyncTree_,l.currentWriteId,!0))}Xs(e.eventQueue_,n,r),r=[],c&&(t[a].status=2,function(h){setTimeout(h,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&(f==="nodata"?i.push(()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot)):i.push(()=>t[a].onComplete(new Error(f),!1,null))))}Bd(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)uu(i[a]);Vg(e,e.transactionQueueTree_)}function pI(e,t){let n,i=e.transactionQueueTree_;for(n=Ze(t);n!==null&&fa(i)===void 0;)i=xg(i,n),t=Et(t),n=Ze(t);return i}function _I(e,t){const n=[];return bI(e,t,n),n.sort((i,r)=>i.order-r.order),n}function bI(e,t,n){const i=fa(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Fd(t,r=>{bI(e,r,n)})}function Bd(e,t){const n=fa(t);if(n){let i=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[i]=n[r],i++);n.length=i,cI(t,n.length>0?n:void 0)}Fd(t,i=>{Bd(e,i)})}function UL(e,t){const n=du(pI(e,t)),i=xg(e.transactionQueueTree_,t);return _L(i,r=>{wh(e,r)}),wh(e,i),fI(i,r=>{wh(e,r)}),n}function wh(e,t){const n=fa(t);if(n){const i=[];let r=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(ke(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(ke(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(Ao(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&i.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?cI(t,void 0):n.length=s+1,Xs(e.eventQueue_,du(t),r);for(let o=0;o<i.length;o++)uu(i[o])}}/**
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
 */function HL(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let r=n[i];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}t+="/"+r}return t}function jL(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Xn(`Invalid query segment '${n}' in query '${e}'`)}return t}const Jb=function(e,t){const n=zL(e),i=n.namespace;n.domain==="firebase.com"&&Ds(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Ds("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_O();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new xO(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new kt(n.pathString)}},zL=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(a=e.substring(0,u-1),e=e.substring(u+2));let c=e.indexOf("/");c===-1&&(c=e.length);let f=e.indexOf("?");f===-1&&(f=e.length),t=e.substring(0,Math.min(c,f)),c<f&&(r=HL(e.substring(c,f)));const h=jL(e.substring(Math.min(e.length,f)));u=t.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(t.substring(u+1),10)):u=t.length;const m=t.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=t.indexOf(".");i=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=i}"ns"in h&&(s=h.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};/**
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
 */class Ng{constructor(t,n,i,r){this._repo=t,this._path=n,this._queryParams=i,this._orderByCalled=r}get key(){return Xe(this._path)?null:DE(this._path)}get ref(){return new ha(this._repo,this._path)}get _queryIdentifier(){const t=Lb(this._queryParams),n=mg(t);return n==="{}"?"default":n}get _queryObject(){return Lb(this._queryParams)}isEqual(t){if(t=Pn(t),!(t instanceof Ng))return!1;const n=this._repo===t._repo,i=ME(this._path,t._path),r=this._queryIdentifier===t._queryIdentifier;return n&&i&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+nM(this._path)}}class ha extends Ng{constructor(t,n){super(t,n,new bg,!1)}get parent(){const t=OE(this._path);return t===null?null:new ha(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}aL(ha);lL(ha);/**
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
 */const WL="FIREBASE_DATABASE_EMULATOR_HOST",Pm={};let qL=!1;function GL(e,t,n,i,r){let s=i||e.options.databaseURL;s===void 0&&(e.options.projectId||Ds("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),wn("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=Jb(s,r),a=o.repoInfo,l;typeof process<"u"&&pb&&(l=pb[WL]),l?(s=`http://${l}?ns=${a.namespace}`,o=Jb(s,r),a=o.repoInfo):o.repoInfo.secure;const u=new PO(e.name,e.options,t);IL("Invalid Firebase Database URL",o),Xe(o.path)||Ds("Database URL must point to the root of a Firebase Database (not including a child path).");const c=YL(a,e,u,new AO(e.name,n));return new QL(c,e)}function KL(e,t){const n=Pm[t];(!n||n[e.key]!==e)&&Ds(`Database ${t}(${e.repoInfo_}) has already been deleted.`),FL(e),delete n[e.key]}function YL(e,t,n,i){let r=Pm[t.name];r||(r={},Pm[t.name]=r);let s=r[e.toURLString()];return s&&Ds("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VL(e,qL,n,i),r[e.toURLString()]=s,s}class QL{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DL(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ha(this._repo,vt())),this._rootInternal}_delete(){return this._rootInternal!==null&&(KL(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&Ds("Cannot call "+t+" on a deleted database.")}}/**
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
 */function XL(e){hO(ca),Wi(new Ai("database",(t,{instanceIdentifier:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return GL(i,r,s,n)},"PUBLIC").setMultipleInstances(!0)),Qn(_b,bb,e),Qn(_b,bb,"esm2017")}cr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};cr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};XL();var Zb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var As,wI;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,w){function b(){}b.prototype=w.prototype,S.D=w.prototype,S.prototype=new b,S.prototype.constructor=S,S.C=function(C,A,k){for(var x=Array(arguments.length-2),U=2;U<arguments.length;U++)x[U-2]=arguments[U];return w.prototype[A].apply(C,x)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,w,b){b||(b=0);var C=Array(16);if(typeof w=="string")for(var A=0;16>A;++A)C[A]=w.charCodeAt(b++)|w.charCodeAt(b++)<<8|w.charCodeAt(b++)<<16|w.charCodeAt(b++)<<24;else for(A=0;16>A;++A)C[A]=w[b++]|w[b++]<<8|w[b++]<<16|w[b++]<<24;w=S.g[0],b=S.g[1],A=S.g[2];var k=S.g[3],x=w+(k^b&(A^k))+C[0]+3614090360&4294967295;w=b+(x<<7&4294967295|x>>>25),x=k+(A^w&(b^A))+C[1]+3905402710&4294967295,k=w+(x<<12&4294967295|x>>>20),x=A+(b^k&(w^b))+C[2]+606105819&4294967295,A=k+(x<<17&4294967295|x>>>15),x=b+(w^A&(k^w))+C[3]+3250441966&4294967295,b=A+(x<<22&4294967295|x>>>10),x=w+(k^b&(A^k))+C[4]+4118548399&4294967295,w=b+(x<<7&4294967295|x>>>25),x=k+(A^w&(b^A))+C[5]+1200080426&4294967295,k=w+(x<<12&4294967295|x>>>20),x=A+(b^k&(w^b))+C[6]+2821735955&4294967295,A=k+(x<<17&4294967295|x>>>15),x=b+(w^A&(k^w))+C[7]+4249261313&4294967295,b=A+(x<<22&4294967295|x>>>10),x=w+(k^b&(A^k))+C[8]+1770035416&4294967295,w=b+(x<<7&4294967295|x>>>25),x=k+(A^w&(b^A))+C[9]+2336552879&4294967295,k=w+(x<<12&4294967295|x>>>20),x=A+(b^k&(w^b))+C[10]+4294925233&4294967295,A=k+(x<<17&4294967295|x>>>15),x=b+(w^A&(k^w))+C[11]+2304563134&4294967295,b=A+(x<<22&4294967295|x>>>10),x=w+(k^b&(A^k))+C[12]+1804603682&4294967295,w=b+(x<<7&4294967295|x>>>25),x=k+(A^w&(b^A))+C[13]+4254626195&4294967295,k=w+(x<<12&4294967295|x>>>20),x=A+(b^k&(w^b))+C[14]+2792965006&4294967295,A=k+(x<<17&4294967295|x>>>15),x=b+(w^A&(k^w))+C[15]+1236535329&4294967295,b=A+(x<<22&4294967295|x>>>10),x=w+(A^k&(b^A))+C[1]+4129170786&4294967295,w=b+(x<<5&4294967295|x>>>27),x=k+(b^A&(w^b))+C[6]+3225465664&4294967295,k=w+(x<<9&4294967295|x>>>23),x=A+(w^b&(k^w))+C[11]+643717713&4294967295,A=k+(x<<14&4294967295|x>>>18),x=b+(k^w&(A^k))+C[0]+3921069994&4294967295,b=A+(x<<20&4294967295|x>>>12),x=w+(A^k&(b^A))+C[5]+3593408605&4294967295,w=b+(x<<5&4294967295|x>>>27),x=k+(b^A&(w^b))+C[10]+38016083&4294967295,k=w+(x<<9&4294967295|x>>>23),x=A+(w^b&(k^w))+C[15]+3634488961&4294967295,A=k+(x<<14&4294967295|x>>>18),x=b+(k^w&(A^k))+C[4]+3889429448&4294967295,b=A+(x<<20&4294967295|x>>>12),x=w+(A^k&(b^A))+C[9]+568446438&4294967295,w=b+(x<<5&4294967295|x>>>27),x=k+(b^A&(w^b))+C[14]+3275163606&4294967295,k=w+(x<<9&4294967295|x>>>23),x=A+(w^b&(k^w))+C[3]+4107603335&4294967295,A=k+(x<<14&4294967295|x>>>18),x=b+(k^w&(A^k))+C[8]+1163531501&4294967295,b=A+(x<<20&4294967295|x>>>12),x=w+(A^k&(b^A))+C[13]+2850285829&4294967295,w=b+(x<<5&4294967295|x>>>27),x=k+(b^A&(w^b))+C[2]+4243563512&4294967295,k=w+(x<<9&4294967295|x>>>23),x=A+(w^b&(k^w))+C[7]+1735328473&4294967295,A=k+(x<<14&4294967295|x>>>18),x=b+(k^w&(A^k))+C[12]+2368359562&4294967295,b=A+(x<<20&4294967295|x>>>12),x=w+(b^A^k)+C[5]+4294588738&4294967295,w=b+(x<<4&4294967295|x>>>28),x=k+(w^b^A)+C[8]+2272392833&4294967295,k=w+(x<<11&4294967295|x>>>21),x=A+(k^w^b)+C[11]+1839030562&4294967295,A=k+(x<<16&4294967295|x>>>16),x=b+(A^k^w)+C[14]+4259657740&4294967295,b=A+(x<<23&4294967295|x>>>9),x=w+(b^A^k)+C[1]+2763975236&4294967295,w=b+(x<<4&4294967295|x>>>28),x=k+(w^b^A)+C[4]+1272893353&4294967295,k=w+(x<<11&4294967295|x>>>21),x=A+(k^w^b)+C[7]+4139469664&4294967295,A=k+(x<<16&4294967295|x>>>16),x=b+(A^k^w)+C[10]+3200236656&4294967295,b=A+(x<<23&4294967295|x>>>9),x=w+(b^A^k)+C[13]+681279174&4294967295,w=b+(x<<4&4294967295|x>>>28),x=k+(w^b^A)+C[0]+3936430074&4294967295,k=w+(x<<11&4294967295|x>>>21),x=A+(k^w^b)+C[3]+3572445317&4294967295,A=k+(x<<16&4294967295|x>>>16),x=b+(A^k^w)+C[6]+76029189&4294967295,b=A+(x<<23&4294967295|x>>>9),x=w+(b^A^k)+C[9]+3654602809&4294967295,w=b+(x<<4&4294967295|x>>>28),x=k+(w^b^A)+C[12]+3873151461&4294967295,k=w+(x<<11&4294967295|x>>>21),x=A+(k^w^b)+C[15]+530742520&4294967295,A=k+(x<<16&4294967295|x>>>16),x=b+(A^k^w)+C[2]+3299628645&4294967295,b=A+(x<<23&4294967295|x>>>9),x=w+(A^(b|~k))+C[0]+4096336452&4294967295,w=b+(x<<6&4294967295|x>>>26),x=k+(b^(w|~A))+C[7]+1126891415&4294967295,k=w+(x<<10&4294967295|x>>>22),x=A+(w^(k|~b))+C[14]+2878612391&4294967295,A=k+(x<<15&4294967295|x>>>17),x=b+(k^(A|~w))+C[5]+4237533241&4294967295,b=A+(x<<21&4294967295|x>>>11),x=w+(A^(b|~k))+C[12]+1700485571&4294967295,w=b+(x<<6&4294967295|x>>>26),x=k+(b^(w|~A))+C[3]+2399980690&4294967295,k=w+(x<<10&4294967295|x>>>22),x=A+(w^(k|~b))+C[10]+4293915773&4294967295,A=k+(x<<15&4294967295|x>>>17),x=b+(k^(A|~w))+C[1]+2240044497&4294967295,b=A+(x<<21&4294967295|x>>>11),x=w+(A^(b|~k))+C[8]+1873313359&4294967295,w=b+(x<<6&4294967295|x>>>26),x=k+(b^(w|~A))+C[15]+4264355552&4294967295,k=w+(x<<10&4294967295|x>>>22),x=A+(w^(k|~b))+C[6]+2734768916&4294967295,A=k+(x<<15&4294967295|x>>>17),x=b+(k^(A|~w))+C[13]+1309151649&4294967295,b=A+(x<<21&4294967295|x>>>11),x=w+(A^(b|~k))+C[4]+4149444226&4294967295,w=b+(x<<6&4294967295|x>>>26),x=k+(b^(w|~A))+C[11]+3174756917&4294967295,k=w+(x<<10&4294967295|x>>>22),x=A+(w^(k|~b))+C[2]+718787259&4294967295,A=k+(x<<15&4294967295|x>>>17),x=b+(k^(A|~w))+C[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(A+(x<<21&4294967295|x>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+k&4294967295}i.prototype.u=function(S,w){w===void 0&&(w=S.length);for(var b=w-this.blockSize,C=this.B,A=this.h,k=0;k<w;){if(A==0)for(;k<=b;)r(this,S,k),k+=this.blockSize;if(typeof S=="string"){for(;k<w;)if(C[A++]=S.charCodeAt(k++),A==this.blockSize){r(this,C),A=0;break}}else for(;k<w;)if(C[A++]=S[k++],A==this.blockSize){r(this,C),A=0;break}}this.h=A,this.o+=w},i.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;var b=8*this.o;for(w=S.length-8;w<S.length;++w)S[w]=b&255,b/=256;for(this.u(S),S=Array(16),w=b=0;4>w;++w)for(var C=0;32>C;C+=8)S[b++]=this.g[w]>>>C&255;return S};function s(S,w){var b=a;return Object.prototype.hasOwnProperty.call(b,S)?b[S]:b[S]=w(S)}function o(S,w){this.h=w;for(var b=[],C=!0,A=S.length-1;0<=A;A--){var k=S[A]|0;C&&k==w||(b[A]=k,C=!1)}this.g=b}var a={};function l(S){return-128<=S&&128>S?s(S,function(w){return new o([w|0],0>w?-1:0)}):new o([S|0],0>S?-1:0)}function u(S){if(isNaN(S)||!isFinite(S))return f;if(0>S)return p(u(-S));for(var w=[],b=1,C=0;S>=b;C++)w[C]=S/b|0,b*=4294967296;return new o(w,0)}function c(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return p(c(S.substring(1),w));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=u(Math.pow(w,8)),C=f,A=0;A<S.length;A+=8){var k=Math.min(8,S.length-A),x=parseInt(S.substring(A,A+k),w);8>k?(k=u(Math.pow(w,k)),C=C.j(k).add(u(x))):(C=C.j(b),C=C.add(u(x)))}return C}var f=l(0),h=l(1),m=l(16777216);e=o.prototype,e.m=function(){if(y(this))return-p(this).m();for(var S=0,w=1,b=0;b<this.g.length;b++){var C=this.i(b);S+=(0<=C?C:4294967296+C)*w,w*=4294967296}return S},e.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(g(this))return"0";if(y(this))return"-"+p(this).toString(S);for(var w=u(Math.pow(S,6)),b=this,C="";;){var A=N(b,w).g;b=E(b,A.j(w));var k=((0<b.g.length?b.g[0]:b.h)>>>0).toString(S);if(b=A,g(b))return k+C;for(;6>k.length;)k="0"+k;C=k+C}},e.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function g(S){if(S.h!=0)return!1;for(var w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function y(S){return S.h==-1}e.l=function(S){return S=E(this,S),y(S)?-1:g(S)?0:1};function p(S){for(var w=S.g.length,b=[],C=0;C<w;C++)b[C]=~S.g[C];return new o(b,~S.h).add(h)}e.abs=function(){return y(this)?p(this):this},e.add=function(S){for(var w=Math.max(this.g.length,S.g.length),b=[],C=0,A=0;A<=w;A++){var k=C+(this.i(A)&65535)+(S.i(A)&65535),x=(k>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);C=x>>>16,k&=65535,x&=65535,b[A]=x<<16|k}return new o(b,b[b.length-1]&-2147483648?-1:0)};function E(S,w){return S.add(p(w))}e.j=function(S){if(g(this)||g(S))return f;if(y(this))return y(S)?p(this).j(p(S)):p(p(this).j(S));if(y(S))return p(this.j(p(S)));if(0>this.l(m)&&0>S.l(m))return u(this.m()*S.m());for(var w=this.g.length+S.g.length,b=[],C=0;C<2*w;C++)b[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<S.g.length;A++){var k=this.i(C)>>>16,x=this.i(C)&65535,U=S.i(A)>>>16,G=S.i(A)&65535;b[2*C+2*A]+=x*G,P(b,2*C+2*A),b[2*C+2*A+1]+=k*G,P(b,2*C+2*A+1),b[2*C+2*A+1]+=x*U,P(b,2*C+2*A+1),b[2*C+2*A+2]+=k*U,P(b,2*C+2*A+2)}for(C=0;C<w;C++)b[C]=b[2*C+1]<<16|b[2*C];for(C=w;C<2*w;C++)b[C]=0;return new o(b,0)};function P(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function V(S,w){this.g=S,this.h=w}function N(S,w){if(g(w))throw Error("division by zero");if(g(S))return new V(f,f);if(y(S))return w=N(p(S),w),new V(p(w.g),p(w.h));if(y(w))return w=N(S,p(w)),new V(p(w.g),w.h);if(30<S.g.length){if(y(S)||y(w))throw Error("slowDivide_ only works with positive integers.");for(var b=h,C=w;0>=C.l(S);)b=R(b),C=R(C);var A=D(b,1),k=D(C,1);for(C=D(C,2),b=D(b,2);!g(C);){var x=k.add(C);0>=x.l(S)&&(A=A.add(b),k=x),C=D(C,1),b=D(b,1)}return w=E(S,A.j(w)),new V(A,w)}for(A=f;0<=S.l(w);){for(b=Math.max(1,Math.floor(S.m()/w.m())),C=Math.ceil(Math.log(b)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),k=u(b),x=k.j(w);y(x)||0<x.l(S);)b-=C,k=u(b),x=k.j(w);g(k)&&(k=h),A=A.add(k),S=E(S,x)}return new V(A,S)}e.A=function(S){return N(this,S).h},e.and=function(S){for(var w=Math.max(this.g.length,S.g.length),b=[],C=0;C<w;C++)b[C]=this.i(C)&S.i(C);return new o(b,this.h&S.h)},e.or=function(S){for(var w=Math.max(this.g.length,S.g.length),b=[],C=0;C<w;C++)b[C]=this.i(C)|S.i(C);return new o(b,this.h|S.h)},e.xor=function(S){for(var w=Math.max(this.g.length,S.g.length),b=[],C=0;C<w;C++)b[C]=this.i(C)^S.i(C);return new o(b,this.h^S.h)};function R(S){for(var w=S.g.length+1,b=[],C=0;C<w;C++)b[C]=S.i(C)<<1|S.i(C-1)>>>31;return new o(b,S.h)}function D(S,w){var b=w>>5;w%=32;for(var C=S.g.length-b,A=[],k=0;k<C;k++)A[k]=0<w?S.i(k+b)>>>w|S.i(k+b+1)<<32-w:S.i(k+b);return new o(A,S.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,wI=i,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=c,As=o}).apply(typeof Zb<"u"?Zb:typeof self<"u"?self:typeof window<"u"?window:{});var sc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var SI,CI,Qa,EI,Ec,xm,II,TI,kI;(function(){var e,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,_,T){return d==Array.prototype||d==Object.prototype||(d[_]=T.value),d};function n(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof sc=="object"&&sc];for(var _=0;_<d.length;++_){var T=d[_];if(T&&T.Math==Math)return T}throw Error("Cannot find global object")}var i=n(this);function r(d,_){if(_)e:{var T=i;d=d.split(".");for(var M=0;M<d.length-1;M++){var z=d[M];if(!(z in T))break e;T=T[z]}d=d[d.length-1],M=T[d],_=_(M),_!=M&&_!=null&&t(T,d,{configurable:!0,writable:!0,value:_})}}function s(d,_){d instanceof String&&(d+="");var T=0,M=!1,z={next:function(){if(!M&&T<d.length){var Z=T++;return{value:_(Z,d[Z]),done:!1}}return M=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}r("Array.prototype.values",function(d){return d||function(){return s(this,function(_,T){return T})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(d){var _=typeof d;return _=_!="object"?_:d?Array.isArray(d)?"array":_:"null",_=="array"||_=="object"&&typeof d.length=="number"}function u(d){var _=typeof d;return _=="object"&&d!=null||_=="function"}function c(d,_,T){return d.call.apply(d.bind,arguments)}function f(d,_,T){if(!d)throw Error();if(2<arguments.length){var M=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,M),d.apply(_,z)}}return function(){return d.apply(_,arguments)}}function h(d,_,T){return h=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?c:f,h.apply(null,arguments)}function m(d,_){var T=Array.prototype.slice.call(arguments,1);return function(){var M=T.slice();return M.push.apply(M,arguments),d.apply(this,M)}}function g(d,_){function T(){}T.prototype=_.prototype,d.aa=_.prototype,d.prototype=new T,d.prototype.constructor=d,d.Qb=function(M,z,Z){for(var Ce=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)Ce[yt-2]=arguments[yt];return _.prototype[z].apply(M,Ce)}}function y(d){const _=d.length;if(0<_){const T=Array(_);for(let M=0;M<_;M++)T[M]=d[M];return T}return[]}function p(d,_){for(let T=1;T<arguments.length;T++){const M=arguments[T];if(l(M)){const z=d.length||0,Z=M.length||0;d.length=z+Z;for(let Ce=0;Ce<Z;Ce++)d[z+Ce]=M[Ce]}else d.push(M)}}class E{constructor(_,T){this.i=_,this.j=T,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function P(d){return/^[\s\xa0]*$/.test(d)}function V(){var d=a.navigator;return d&&(d=d.userAgent)?d:""}function N(d){return N[" "](d),d}N[" "]=function(){};var R=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function D(d,_,T){for(const M in d)_.call(T,d[M],M,d)}function S(d,_){for(const T in d)_.call(void 0,d[T],T,d)}function w(d){const _={};for(const T in d)_[T]=d[T];return _}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(d,_){let T,M;for(let z=1;z<arguments.length;z++){M=arguments[z];for(T in M)d[T]=M[T];for(let Z=0;Z<b.length;Z++)T=b[Z],Object.prototype.hasOwnProperty.call(M,T)&&(d[T]=M[T])}}function A(d){var _=1;d=d.split(":");const T=[];for(;0<_&&d.length;)T.push(d.shift()),_--;return d.length&&T.push(d.join(":")),T}function k(d){a.setTimeout(()=>{throw d},0)}function x(){var d=ee;let _=null;return d.g&&(_=d.g,d.g=d.g.next,d.g||(d.h=null),_.next=null),_}class U{constructor(){this.h=this.g=null}add(_,T){const M=G.get();M.set(_,T),this.h?this.h.next=M:this.g=M,this.h=M}}var G=new E(()=>new J,d=>d.reset());class J{constructor(){this.next=this.g=this.h=null}set(_,T){this.h=_,this.g=T,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,j=!1,ee=new U,H=()=>{const d=a.Promise.resolve(void 0);ae=()=>{d.then(K)}};var K=()=>{for(var d;d=x();){try{d.h.call(d.g)}catch(T){k(T)}var _=G;_.j(d),100>_.h&&(_.h++,d.next=_.g,_.g=d)}j=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function _e(d,_){this.type=d,this.g=this.target=_,this.defaultPrevented=!1}_e.prototype.h=function(){this.defaultPrevented=!0};var Ae=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var d=!1,_=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const T=()=>{};a.addEventListener("test",T,_),a.removeEventListener("test",T,_)}catch{}return d}();function de(d,_){if(_e.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var T=this.type=d.type,M=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=_,_=d.relatedTarget){if(R){e:{try{N(_.nodeName);var z=!0;break e}catch{}z=!1}z||(_=null)}}else T=="mouseover"?_=d.fromElement:T=="mouseout"&&(_=d.toElement);this.relatedTarget=_,M?(this.clientX=M.clientX!==void 0?M.clientX:M.pageX,this.clientY=M.clientY!==void 0?M.clientY:M.pageY,this.screenX=M.screenX||0,this.screenY=M.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:oe[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&de.aa.h.call(this)}}g(de,_e);var oe={2:"touch",3:"pen",4:"mouse"};de.prototype.h=function(){de.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ve=0;function le(d,_,T,M,z){this.listener=d,this.proxy=null,this.src=_,this.type=T,this.capture=!!M,this.ha=z,this.key=++ve,this.da=this.fa=!1}function Q(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function Ee(d){this.src=d,this.g={},this.h=0}Ee.prototype.add=function(d,_,T,M,z){var Z=d.toString();d=this.g[Z],d||(d=this.g[Z]=[],this.h++);var Ce=O(d,_,M,z);return-1<Ce?(_=d[Ce],T||(_.fa=!1)):(_=new le(_,this.src,Z,!!M,z),_.fa=T,d.push(_)),_};function ie(d,_){var T=_.type;if(T in d.g){var M=d.g[T],z=Array.prototype.indexOf.call(M,_,void 0),Z;(Z=0<=z)&&Array.prototype.splice.call(M,z,1),Z&&(Q(_),d.g[T].length==0&&(delete d.g[T],d.h--))}}function O(d,_,T,M){for(var z=0;z<d.length;++z){var Z=d[z];if(!Z.da&&Z.listener==_&&Z.capture==!!T&&Z.ha==M)return z}return-1}var L="closure_lm_"+(1e6*Math.random()|0),F={};function q(d,_,T,M,z){if(Array.isArray(_)){for(var Z=0;Z<_.length;Z++)q(d,_[Z],T,M,z);return null}return T=xe(T),d&&d[B]?d.K(_,T,u(M)?!!M.capture:!!M,z):X(d,_,T,!1,M,z)}function X(d,_,T,M,z,Z){if(!_)throw Error("Invalid event type");var Ce=u(z)?!!z.capture:!!z,yt=Ie(d);if(yt||(d[L]=yt=new Ee(d)),T=yt.add(_,T,M,Ce,Z),T.proxy)return T;if(M=fe(),T.proxy=M,M.src=d,M.listener=T,d.addEventListener)Ae||(z=Ce),z===void 0&&(z=!1),d.addEventListener(_.toString(),M,z);else if(d.attachEvent)d.attachEvent(ge(_.toString()),M);else if(d.addListener&&d.removeListener)d.addListener(M);else throw Error("addEventListener and attachEvent are unavailable.");return T}function fe(){function d(T){return _.call(d.src,d.listener,T)}const _=ce;return d}function ue(d,_,T,M,z){if(Array.isArray(_))for(var Z=0;Z<_.length;Z++)ue(d,_[Z],T,M,z);else M=u(M)?!!M.capture:!!M,T=xe(T),d&&d[B]?(d=d.i,_=String(_).toString(),_ in d.g&&(Z=d.g[_],T=O(Z,T,M,z),-1<T&&(Q(Z[T]),Array.prototype.splice.call(Z,T,1),Z.length==0&&(delete d.g[_],d.h--)))):d&&(d=Ie(d))&&(_=d.g[_.toString()],d=-1,_&&(d=O(_,T,M,z)),(T=-1<d?_[d]:null)&&me(T))}function me(d){if(typeof d!="number"&&d&&!d.da){var _=d.src;if(_&&_[B])ie(_.i,d);else{var T=d.type,M=d.proxy;_.removeEventListener?_.removeEventListener(T,M,d.capture):_.detachEvent?_.detachEvent(ge(T),M):_.addListener&&_.removeListener&&_.removeListener(M),(T=Ie(_))?(ie(T,d),T.h==0&&(T.src=null,_[L]=null)):Q(d)}}}function ge(d){return d in F?F[d]:F[d]="on"+d}function ce(d,_){if(d.da)d=!0;else{_=new de(_,this);var T=d.listener,M=d.ha||d.src;d.fa&&me(d),d=T.call(M,_)}return d}function Ie(d){return d=d[L],d instanceof Ee?d:null}var De="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(d){return typeof d=="function"?d:(d[De]||(d[De]=function(_){return d.handleEvent(_)}),d[De])}function Ve(){se.call(this),this.i=new Ee(this),this.M=this,this.F=null}g(Ve,se),Ve.prototype[B]=!0,Ve.prototype.removeEventListener=function(d,_,T,M){ue(this,d,_,T,M)};function Oe(d,_){var T,M=d.F;if(M)for(T=[];M;M=M.F)T.push(M);if(d=d.M,M=_.type||_,typeof _=="string")_=new _e(_,d);else if(_ instanceof _e)_.target=_.target||d;else{var z=_;_=new _e(M,d),C(_,z)}if(z=!0,T)for(var Z=T.length-1;0<=Z;Z--){var Ce=_.g=T[Z];z=rt(Ce,M,!0,_)&&z}if(Ce=_.g=d,z=rt(Ce,M,!0,_)&&z,z=rt(Ce,M,!1,_)&&z,T)for(Z=0;Z<T.length;Z++)Ce=_.g=T[Z],z=rt(Ce,M,!1,_)&&z}Ve.prototype.N=function(){if(Ve.aa.N.call(this),this.i){var d=this.i,_;for(_ in d.g){for(var T=d.g[_],M=0;M<T.length;M++)Q(T[M]);delete d.g[_],d.h--}}this.F=null},Ve.prototype.K=function(d,_,T,M){return this.i.add(String(d),_,!1,T,M)},Ve.prototype.L=function(d,_,T,M){return this.i.add(String(d),_,!0,T,M)};function rt(d,_,T,M){if(_=d.i.g[String(_)],!_)return!0;_=_.concat();for(var z=!0,Z=0;Z<_.length;++Z){var Ce=_[Z];if(Ce&&!Ce.da&&Ce.capture==T){var yt=Ce.listener,rn=Ce.ha||Ce.src;Ce.fa&&ie(d.i,Ce),z=yt.call(rn,M)!==!1&&z}}return z&&!M.defaultPrevented}function gt(d,_,T){if(typeof d=="function")T&&(d=h(d,T));else if(d&&typeof d.handleEvent=="function")d=h(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:a.setTimeout(d,_||0)}function Bt(d){d.g=gt(()=>{d.g=null,d.i&&(d.i=!1,Bt(d))},d.l);const _=d.h;d.h=null,d.m.apply(null,_)}class zn extends se{constructor(_,T){super(),this.m=_,this.l=T,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Bt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ni(d){se.call(this),this.h=d,this.g={}}g(ni,se);var Ca=[];function Tr(d){D(d.g,function(_,T){this.g.hasOwnProperty(T)&&me(_)},d),d.g={}}ni.prototype.N=function(){ni.aa.N.call(this),Tr(this)},ni.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var co=a.JSON.stringify,Vn=a.JSON.parse,ii=class{stringify(d){return a.JSON.stringify(d,void 0)}parse(d){return a.JSON.parse(d,void 0)}};function fo(){}fo.prototype.h=null;function mp(d){return d.h||(d.h=d.i())}function vp(){}var Ea={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lf(){_e.call(this,"d")}g(Lf,_e);function Ff(){_e.call(this,"c")}g(Ff,_e);var as={},gp=null;function Du(){return gp=gp||new Ve}as.La="serverreachability";function yp(d){_e.call(this,as.La,d)}g(yp,_e);function Ia(d){const _=Du();Oe(_,new yp(_))}as.STAT_EVENT="statevent";function pp(d,_){_e.call(this,as.STAT_EVENT,d),this.stat=_}g(pp,_e);function Dn(d){const _=Du();Oe(_,new pp(_,d))}as.Ma="timingevent";function _p(d,_){_e.call(this,as.Ma,d),this.size=_}g(_p,_e);function Ta(d,_){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){d()},_)}function ka(){this.g=!0}ka.prototype.xa=function(){this.g=!1};function _x(d,_,T,M,z,Z){d.info(function(){if(d.g)if(Z)for(var Ce="",yt=Z.split("&"),rn=0;rn<yt.length;rn++){var ot=yt[rn].split("=");if(1<ot.length){var gn=ot[0];ot=ot[1];var yn=gn.split("_");Ce=2<=yn.length&&yn[1]=="type"?Ce+(gn+"="+ot+"&"):Ce+(gn+"=redacted&")}}else Ce=null;else Ce=Z;return"XMLHTTP REQ ("+M+") [attempt "+z+"]: "+_+`
`+T+`
`+Ce})}function bx(d,_,T,M,z,Z,Ce){d.info(function(){return"XMLHTTP RESP ("+M+") [ attempt "+z+"]: "+_+`
`+T+`
`+Z+" "+Ce})}function ho(d,_,T,M){d.info(function(){return"XMLHTTP TEXT ("+_+"): "+Sx(d,T)+(M?" "+M:"")})}function wx(d,_){d.info(function(){return"TIMEOUT: "+_})}ka.prototype.info=function(){};function Sx(d,_){if(!d.g)return _;if(!_)return null;try{var T=JSON.parse(_);if(T){for(d=0;d<T.length;d++)if(Array.isArray(T[d])){var M=T[d];if(!(2>M.length)){var z=M[1];if(Array.isArray(z)&&!(1>z.length)){var Z=z[0];if(Z!="noop"&&Z!="stop"&&Z!="close")for(var Ce=1;Ce<z.length;Ce++)z[Ce]=""}}}}return co(T)}catch{return _}}var Nu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},bp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bf;function Ou(){}g(Ou,fo),Ou.prototype.g=function(){return new XMLHttpRequest},Ou.prototype.i=function(){return{}},Bf=new Ou;function kr(d,_,T,M){this.j=d,this.i=_,this.l=T,this.R=M||1,this.U=new ni(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wp}function wp(){this.i=null,this.g="",this.h=!1}var Sp={},$f={};function Uf(d,_,T){d.L=1,d.v=Bu(nr(_)),d.m=T,d.P=!0,Cp(d,null)}function Cp(d,_){d.F=Date.now(),Mu(d),d.A=nr(d.v);var T=d.A,M=d.R;Array.isArray(M)||(M=[String(M)]),Lp(T.i,"t",M),d.C=0,T=d.j.J,d.h=new wp,d.g=t_(d.j,T?_:null,!d.m),0<d.O&&(d.M=new zn(h(d.Y,d,d.g),d.O)),_=d.U,T=d.g,M=d.ca;var z="readystatechange";Array.isArray(z)||(z&&(Ca[0]=z.toString()),z=Ca);for(var Z=0;Z<z.length;Z++){var Ce=q(T,z[Z],M||_.handleEvent,!1,_.h||_);if(!Ce)break;_.g[Ce.key]=Ce}_=d.H?w(d.H):{},d.m?(d.u||(d.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,_)):(d.u="GET",d.g.ea(d.A,d.u,null,_)),Ia(),_x(d.i,d.u,d.A,d.l,d.R,d.m)}kr.prototype.ca=function(d){d=d.target;const _=this.M;_&&ir(d)==3?_.j():this.Y(d)},kr.prototype.Y=function(d){try{if(d==this.g)e:{const yn=ir(this.g);var _=this.g.Ba();const go=this.g.Z();if(!(3>yn)&&(yn!=3||this.g&&(this.h.h||this.g.oa()||zp(this.g)))){this.J||yn!=4||_==7||(_==8||0>=go?Ia(3):Ia(2)),Hf(this);var T=this.g.Z();this.X=T;t:if(Ep(this)){var M=zp(this.g);d="";var z=M.length,Z=ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ls(this),Aa(this);var Ce="";break t}this.h.i=new a.TextDecoder}for(_=0;_<z;_++)this.h.h=!0,d+=this.h.i.decode(M[_],{stream:!(Z&&_==z-1)});M.length=0,this.h.g+=d,this.C=0,Ce=this.h.g}else Ce=this.g.oa();if(this.o=T==200,bx(this.i,this.u,this.A,this.l,this.R,yn,T),this.o){if(this.T&&!this.K){t:{if(this.g){var yt,rn=this.g;if((yt=rn.g?rn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!P(yt)){var ot=yt;break t}}ot=null}if(T=ot)ho(this.i,this.l,T,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,jf(this,T);else{this.o=!1,this.s=3,Dn(12),ls(this),Aa(this);break e}}if(this.P){T=!0;let _i;for(;!this.J&&this.C<Ce.length;)if(_i=Cx(this,Ce),_i==$f){yn==4&&(this.s=4,Dn(14),T=!1),ho(this.i,this.l,null,"[Incomplete Response]");break}else if(_i==Sp){this.s=4,Dn(15),ho(this.i,this.l,Ce,"[Invalid Chunk]"),T=!1;break}else ho(this.i,this.l,_i,null),jf(this,_i);if(Ep(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yn!=4||Ce.length!=0||this.h.h||(this.s=1,Dn(16),T=!1),this.o=this.o&&T,!T)ho(this.i,this.l,Ce,"[Invalid Chunked Response]"),ls(this),Aa(this);else if(0<Ce.length&&!this.W){this.W=!0;var gn=this.j;gn.g==this&&gn.ba&&!gn.M&&(gn.j.info("Great, no buffering proxy detected. Bytes received: "+Ce.length),Yf(gn),gn.M=!0,Dn(11))}}else ho(this.i,this.l,Ce,null),jf(this,Ce);yn==4&&ls(this),this.o&&!this.J&&(yn==4?Xp(this.j,this):(this.o=!1,Mu(this)))}else $x(this.g),T==400&&0<Ce.indexOf("Unknown SID")?(this.s=3,Dn(12)):(this.s=0,Dn(13)),ls(this),Aa(this)}}}catch{}finally{}};function Ep(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function Cx(d,_){var T=d.C,M=_.indexOf(`
`,T);return M==-1?$f:(T=Number(_.substring(T,M)),isNaN(T)?Sp:(M+=1,M+T>_.length?$f:(_=_.slice(M,M+T),d.C=M+T,_)))}kr.prototype.cancel=function(){this.J=!0,ls(this)};function Mu(d){d.S=Date.now()+d.I,Ip(d,d.I)}function Ip(d,_){if(d.B!=null)throw Error("WatchDog timer not null");d.B=Ta(h(d.ba,d),_)}function Hf(d){d.B&&(a.clearTimeout(d.B),d.B=null)}kr.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(wx(this.i,this.A),this.L!=2&&(Ia(),Dn(17)),ls(this),this.s=2,Aa(this)):Ip(this,this.S-d)};function Aa(d){d.j.G==0||d.J||Xp(d.j,d)}function ls(d){Hf(d);var _=d.M;_&&typeof _.ma=="function"&&_.ma(),d.M=null,Tr(d.U),d.g&&(_=d.g,d.g=null,_.abort(),_.ma())}function jf(d,_){try{var T=d.j;if(T.G!=0&&(T.g==d||zf(T.h,d))){if(!d.K&&zf(T.h,d)&&T.G==3){try{var M=T.Da.g.parse(_)}catch{M=null}if(Array.isArray(M)&&M.length==3){var z=M;if(z[0]==0){e:if(!T.u){if(T.g)if(T.g.F+3e3<d.F)zu(T),Hu(T);else break e;Kf(T),Dn(18)}}else T.za=z[1],0<T.za-T.T&&37500>z[2]&&T.F&&T.v==0&&!T.C&&(T.C=Ta(h(T.Za,T),6e3));if(1>=Ap(T.h)&&T.ca){try{T.ca()}catch{}T.ca=void 0}}else cs(T,11)}else if((d.K||T.g==d)&&zu(T),!P(_))for(z=T.Da.g.parse(_),_=0;_<z.length;_++){let ot=z[_];if(T.T=ot[0],ot=ot[1],T.G==2)if(ot[0]=="c"){T.K=ot[1],T.ia=ot[2];const gn=ot[3];gn!=null&&(T.la=gn,T.j.info("VER="+T.la));const yn=ot[4];yn!=null&&(T.Aa=yn,T.j.info("SVER="+T.Aa));const go=ot[5];go!=null&&typeof go=="number"&&0<go&&(M=1.5*go,T.L=M,T.j.info("backChannelRequestTimeoutMs_="+M)),M=T;const _i=d.g;if(_i){const qu=_i.g?_i.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qu){var Z=M.h;Z.g||qu.indexOf("spdy")==-1&&qu.indexOf("quic")==-1&&qu.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(Wf(Z,Z.h),Z.h=null))}if(M.D){const Qf=_i.g?_i.g.getResponseHeader("X-HTTP-Session-Id"):null;Qf&&(M.ya=Qf,wt(M.I,M.D,Qf))}}T.G=3,T.l&&T.l.ua(),T.ba&&(T.R=Date.now()-d.F,T.j.info("Handshake RTT: "+T.R+"ms")),M=T;var Ce=d;if(M.qa=e_(M,M.J?M.ia:null,M.W),Ce.K){Pp(M.h,Ce);var yt=Ce,rn=M.L;rn&&(yt.I=rn),yt.B&&(Hf(yt),Mu(yt)),M.g=Ce}else Yp(M);0<T.i.length&&ju(T)}else ot[0]!="stop"&&ot[0]!="close"||cs(T,7);else T.G==3&&(ot[0]=="stop"||ot[0]=="close"?ot[0]=="stop"?cs(T,7):Gf(T):ot[0]!="noop"&&T.l&&T.l.ta(ot),T.v=0)}}Ia(4)}catch{}}var Ex=class{constructor(d,_){this.g=d,this.map=_}};function Tp(d){this.l=d||10,a.PerformanceNavigationTiming?(d=a.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kp(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function Ap(d){return d.h?1:d.g?d.g.size:0}function zf(d,_){return d.h?d.h==_:d.g?d.g.has(_):!1}function Wf(d,_){d.g?d.g.add(_):d.h=_}function Pp(d,_){d.h&&d.h==_?d.h=null:d.g&&d.g.has(_)&&d.g.delete(_)}Tp.prototype.cancel=function(){if(this.i=xp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function xp(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let _=d.i;for(const T of d.g.values())_=_.concat(T.D);return _}return y(d.i)}function Ix(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(l(d)){for(var _=[],T=d.length,M=0;M<T;M++)_.push(d[M]);return _}_=[],T=0;for(M in d)_[T++]=d[M];return _}function Tx(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(l(d)||typeof d=="string"){var _=[];d=d.length;for(var T=0;T<d;T++)_.push(T);return _}_=[],T=0;for(const M in d)_[T++]=M;return _}}}function Rp(d,_){if(d.forEach&&typeof d.forEach=="function")d.forEach(_,void 0);else if(l(d)||typeof d=="string")Array.prototype.forEach.call(d,_,void 0);else for(var T=Tx(d),M=Ix(d),z=M.length,Z=0;Z<z;Z++)_.call(void 0,M[Z],T&&T[Z],d)}var Vp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kx(d,_){if(d){d=d.split("&");for(var T=0;T<d.length;T++){var M=d[T].indexOf("="),z=null;if(0<=M){var Z=d[T].substring(0,M);z=d[T].substring(M+1)}else Z=d[T];_(Z,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function us(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof us){this.h=d.h,Lu(this,d.j),this.o=d.o,this.g=d.g,Fu(this,d.s),this.l=d.l;var _=d.i,T=new Ra;T.i=_.i,_.g&&(T.g=new Map(_.g),T.h=_.h),Dp(this,T),this.m=d.m}else d&&(_=String(d).match(Vp))?(this.h=!1,Lu(this,_[1]||"",!0),this.o=Pa(_[2]||""),this.g=Pa(_[3]||"",!0),Fu(this,_[4]),this.l=Pa(_[5]||"",!0),Dp(this,_[6]||"",!0),this.m=Pa(_[7]||"")):(this.h=!1,this.i=new Ra(null,this.h))}us.prototype.toString=function(){var d=[],_=this.j;_&&d.push(xa(_,Np,!0),":");var T=this.g;return(T||_=="file")&&(d.push("//"),(_=this.o)&&d.push(xa(_,Np,!0),"@"),d.push(encodeURIComponent(String(T)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),T=this.s,T!=null&&d.push(":",String(T))),(T=this.l)&&(this.g&&T.charAt(0)!="/"&&d.push("/"),d.push(xa(T,T.charAt(0)=="/"?xx:Px,!0))),(T=this.i.toString())&&d.push("?",T),(T=this.m)&&d.push("#",xa(T,Vx)),d.join("")};function nr(d){return new us(d)}function Lu(d,_,T){d.j=T?Pa(_,!0):_,d.j&&(d.j=d.j.replace(/:$/,""))}function Fu(d,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);d.s=_}else d.s=null}function Dp(d,_,T){_ instanceof Ra?(d.i=_,Dx(d.i,d.h)):(T||(_=xa(_,Rx)),d.i=new Ra(_,d.h))}function wt(d,_,T){d.i.set(_,T)}function Bu(d){return wt(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function Pa(d,_){return d?_?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function xa(d,_,T){return typeof d=="string"?(d=encodeURI(d).replace(_,Ax),T&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function Ax(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var Np=/[#\/\?@]/g,Px=/[#\?:]/g,xx=/[#\?]/g,Rx=/[#\?@]/g,Vx=/#/g;function Ra(d,_){this.h=this.g=null,this.i=d||null,this.j=!!_}function Ar(d){d.g||(d.g=new Map,d.h=0,d.i&&kx(d.i,function(_,T){d.add(decodeURIComponent(_.replace(/\+/g," ")),T)}))}e=Ra.prototype,e.add=function(d,_){Ar(this),this.i=null,d=mo(this,d);var T=this.g.get(d);return T||this.g.set(d,T=[]),T.push(_),this.h+=1,this};function Op(d,_){Ar(d),_=mo(d,_),d.g.has(_)&&(d.i=null,d.h-=d.g.get(_).length,d.g.delete(_))}function Mp(d,_){return Ar(d),_=mo(d,_),d.g.has(_)}e.forEach=function(d,_){Ar(this),this.g.forEach(function(T,M){T.forEach(function(z){d.call(_,z,M,this)},this)},this)},e.na=function(){Ar(this);const d=Array.from(this.g.values()),_=Array.from(this.g.keys()),T=[];for(let M=0;M<_.length;M++){const z=d[M];for(let Z=0;Z<z.length;Z++)T.push(_[M])}return T},e.V=function(d){Ar(this);let _=[];if(typeof d=="string")Mp(this,d)&&(_=_.concat(this.g.get(mo(this,d))));else{d=Array.from(this.g.values());for(let T=0;T<d.length;T++)_=_.concat(d[T])}return _},e.set=function(d,_){return Ar(this),this.i=null,d=mo(this,d),Mp(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[_]),this.h+=1,this},e.get=function(d,_){return d?(d=this.V(d),0<d.length?String(d[0]):_):_};function Lp(d,_,T){Op(d,_),0<T.length&&(d.i=null,d.g.set(mo(d,_),y(T)),d.h+=T.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],_=Array.from(this.g.keys());for(var T=0;T<_.length;T++){var M=_[T];const Z=encodeURIComponent(String(M)),Ce=this.V(M);for(M=0;M<Ce.length;M++){var z=Z;Ce[M]!==""&&(z+="="+encodeURIComponent(String(Ce[M]))),d.push(z)}}return this.i=d.join("&")};function mo(d,_){return _=String(_),d.j&&(_=_.toLowerCase()),_}function Dx(d,_){_&&!d.j&&(Ar(d),d.i=null,d.g.forEach(function(T,M){var z=M.toLowerCase();M!=z&&(Op(this,M),Lp(this,z,T))},d)),d.j=_}function Nx(d,_){const T=new ka;if(a.Image){const M=new Image;M.onload=m(Pr,T,"TestLoadImage: loaded",!0,_,M),M.onerror=m(Pr,T,"TestLoadImage: error",!1,_,M),M.onabort=m(Pr,T,"TestLoadImage: abort",!1,_,M),M.ontimeout=m(Pr,T,"TestLoadImage: timeout",!1,_,M),a.setTimeout(function(){M.ontimeout&&M.ontimeout()},1e4),M.src=d}else _(!1)}function Ox(d,_){const T=new ka,M=new AbortController,z=setTimeout(()=>{M.abort(),Pr(T,"TestPingServer: timeout",!1,_)},1e4);fetch(d,{signal:M.signal}).then(Z=>{clearTimeout(z),Z.ok?Pr(T,"TestPingServer: ok",!0,_):Pr(T,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(z),Pr(T,"TestPingServer: error",!1,_)})}function Pr(d,_,T,M,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),M(T)}catch{}}function Mx(){this.g=new ii}function Lx(d,_,T){const M=T||"";try{Rp(d,function(z,Z){let Ce=z;u(z)&&(Ce=co(z)),_.push(M+Z+"="+encodeURIComponent(Ce))})}catch(z){throw _.push(M+"type="+encodeURIComponent("_badmap")),z}}function Va(d){this.l=d.Ub||null,this.j=d.eb||!1}g(Va,fo),Va.prototype.g=function(){return new $u(this.l,this.j)},Va.prototype.i=function(d){return function(){return d}}({});function $u(d,_){Ve.call(this),this.D=d,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g($u,Ve),e=$u.prototype,e.open=function(d,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=_,this.readyState=1,Na(this)},e.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(_.body=d),(this.D||a).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Da(this)),this.readyState=0},e.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,Na(this)),this.g&&(this.readyState=3,Na(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fp(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fp(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}e.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var _=d.value?d.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!d.done}))&&(this.response=this.responseText+=_)}d.done?Da(this):Na(this),this.readyState==3&&Fp(this)}},e.Ra=function(d){this.g&&(this.response=this.responseText=d,Da(this))},e.Qa=function(d){this.g&&(this.response=d,Da(this))},e.ga=function(){this.g&&Da(this)};function Da(d){d.readyState=4,d.l=null,d.j=null,d.v=null,Na(d)}e.setRequestHeader=function(d,_){this.u.append(d,_)},e.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],_=this.h.entries();for(var T=_.next();!T.done;)T=T.value,d.push(T[0]+": "+T[1]),T=_.next();return d.join(`\r
`)};function Na(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty($u.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function Bp(d){let _="";return D(d,function(T,M){_+=M,_+=":",_+=T,_+=`\r
`}),_}function qf(d,_,T){e:{for(M in T){var M=!1;break e}M=!0}M||(T=Bp(T),typeof d=="string"?T!=null&&encodeURIComponent(String(T)):wt(d,_,T))}function Mt(d){Ve.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Mt,Ve);var Fx=/^https?$/i,Bx=["POST","PUT"];e=Mt.prototype,e.Ha=function(d){this.J=d},e.ea=function(d,_,T,M){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);_=_?_.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bf.g(),this.v=this.o?mp(this.o):mp(Bf),this.g.onreadystatechange=h(this.Ea,this);try{this.B=!0,this.g.open(_,String(d),!0),this.B=!1}catch(Z){$p(this,Z);return}if(d=T||"",T=new Map(this.headers),M)if(Object.getPrototypeOf(M)===Object.prototype)for(var z in M)T.set(z,M[z]);else if(typeof M.keys=="function"&&typeof M.get=="function")for(const Z of M.keys())T.set(Z,M.get(Z));else throw Error("Unknown input type for opt_headers: "+String(M));M=Array.from(T.keys()).find(Z=>Z.toLowerCase()=="content-type"),z=a.FormData&&d instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Bx,_,void 0))||M||z||T.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,Ce]of T)this.g.setRequestHeader(Z,Ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{jp(this),this.u=!0,this.g.send(d),this.u=!1}catch(Z){$p(this,Z)}};function $p(d,_){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=_,d.m=5,Up(d),Uu(d)}function Up(d){d.A||(d.A=!0,Oe(d,"complete"),Oe(d,"error"))}e.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,Oe(this,"complete"),Oe(this,"abort"),Uu(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Uu(this,!0)),Mt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Hp(this):this.bb())},e.bb=function(){Hp(this)};function Hp(d){if(d.h&&typeof o<"u"&&(!d.v[1]||ir(d)!=4||d.Z()!=2)){if(d.u&&ir(d)==4)gt(d.Ea,0,d);else if(Oe(d,"readystatechange"),ir(d)==4){d.h=!1;try{const Ce=d.Z();e:switch(Ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var T;if(!(T=_)){var M;if(M=Ce===0){var z=String(d.D).match(Vp)[1]||null;!z&&a.self&&a.self.location&&(z=a.self.location.protocol.slice(0,-1)),M=!Fx.test(z?z.toLowerCase():"")}T=M}if(T)Oe(d,"complete"),Oe(d,"success");else{d.m=6;try{var Z=2<ir(d)?d.g.statusText:""}catch{Z=""}d.l=Z+" ["+d.Z()+"]",Up(d)}}finally{Uu(d)}}}}function Uu(d,_){if(d.g){jp(d);const T=d.g,M=d.v[0]?()=>{}:null;d.g=null,d.v=null,_||Oe(d,"ready");try{T.onreadystatechange=M}catch{}}}function jp(d){d.I&&(a.clearTimeout(d.I),d.I=null)}e.isActive=function(){return!!this.g};function ir(d){return d.g?d.g.readyState:0}e.Z=function(){try{return 2<ir(this)?this.g.status:-1}catch{return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.Oa=function(d){if(this.g){var _=this.g.responseText;return d&&_.indexOf(d)==0&&(_=_.substring(d.length)),Vn(_)}};function zp(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function $x(d){const _={};d=(d.g&&2<=ir(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let M=0;M<d.length;M++){if(P(d[M]))continue;var T=A(d[M]);const z=T[0];if(T=T[1],typeof T!="string")continue;T=T.trim();const Z=_[z]||[];_[z]=Z,Z.push(T)}S(_,function(M){return M.join(", ")})}e.Ba=function(){return this.m},e.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oa(d,_,T){return T&&T.internalChannelParams&&T.internalChannelParams[d]||_}function Wp(d){this.Aa=0,this.i=[],this.j=new ka,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oa("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oa("baseRetryDelayMs",5e3,d),this.cb=Oa("retryDelaySeedMs",1e4,d),this.Wa=Oa("forwardChannelMaxRetries",2,d),this.wa=Oa("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new Tp(d&&d.concurrentRequestLimit),this.Da=new Mx,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}e=Wp.prototype,e.la=8,e.G=1,e.connect=function(d,_,T,M){Dn(0),this.W=d,this.H=_||{},T&&M!==void 0&&(this.H.OSID=T,this.H.OAID=M),this.F=this.X,this.I=e_(this,null,this.W),ju(this)};function Gf(d){if(qp(d),d.G==3){var _=d.U++,T=nr(d.I);if(wt(T,"SID",d.K),wt(T,"RID",_),wt(T,"TYPE","terminate"),Ma(d,T),_=new kr(d,d.j,_),_.L=2,_.v=Bu(nr(T)),T=!1,a.navigator&&a.navigator.sendBeacon)try{T=a.navigator.sendBeacon(_.v.toString(),"")}catch{}!T&&a.Image&&(new Image().src=_.v,T=!0),T||(_.g=t_(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Mu(_)}Zp(d)}function Hu(d){d.g&&(Yf(d),d.g.cancel(),d.g=null)}function qp(d){Hu(d),d.u&&(a.clearTimeout(d.u),d.u=null),zu(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&a.clearTimeout(d.s),d.s=null)}function ju(d){if(!kp(d.h)&&!d.s){d.s=!0;var _=d.Ga;ae||H(),j||(ae(),j=!0),ee.add(_,d),d.B=0}}function Ux(d,_){return Ap(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=_.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=Ta(h(d.Ga,d,_),Jp(d,d.B)),d.B++,!0)}e.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const z=new kr(this,this.j,d);let Z=this.o;if(this.S&&(Z?(Z=w(Z),C(Z,this.S)):Z=this.S),this.m!==null||this.O||(z.H=Z,Z=null),this.P)e:{for(var _=0,T=0;T<this.i.length;T++){t:{var M=this.i[T];if("__data__"in M.map&&(M=M.map.__data__,typeof M=="string")){M=M.length;break t}M=void 0}if(M===void 0)break;if(_+=M,4096<_){_=T;break e}if(_===4096||T===this.i.length-1){_=T+1;break e}}_=1e3}else _=1e3;_=Kp(this,z,_),T=nr(this.I),wt(T,"RID",d),wt(T,"CVER",22),this.D&&wt(T,"X-HTTP-Session-Id",this.D),Ma(this,T),Z&&(this.O?_="headers="+encodeURIComponent(String(Bp(Z)))+"&"+_:this.m&&qf(T,this.m,Z)),Wf(this.h,z),this.Ua&&wt(T,"TYPE","init"),this.P?(wt(T,"$req",_),wt(T,"SID","null"),z.T=!0,Uf(z,T,null)):Uf(z,T,_),this.G=2}}else this.G==3&&(d?Gp(this,d):this.i.length==0||kp(this.h)||Gp(this))};function Gp(d,_){var T;_?T=_.l:T=d.U++;const M=nr(d.I);wt(M,"SID",d.K),wt(M,"RID",T),wt(M,"AID",d.T),Ma(d,M),d.m&&d.o&&qf(M,d.m,d.o),T=new kr(d,d.j,T,d.B+1),d.m===null&&(T.H=d.o),_&&(d.i=_.D.concat(d.i)),_=Kp(d,T,1e3),T.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),Wf(d.h,T),Uf(T,M,_)}function Ma(d,_){d.H&&D(d.H,function(T,M){wt(_,M,T)}),d.l&&Rp({},function(T,M){wt(_,M,T)})}function Kp(d,_,T){T=Math.min(d.i.length,T);var M=d.l?h(d.l.Na,d.l,d):null;e:{var z=d.i;let Z=-1;for(;;){const Ce=["count="+T];Z==-1?0<T?(Z=z[0].g,Ce.push("ofs="+Z)):Z=0:Ce.push("ofs="+Z);let yt=!0;for(let rn=0;rn<T;rn++){let ot=z[rn].g;const gn=z[rn].map;if(ot-=Z,0>ot)Z=Math.max(0,z[rn].g-100),yt=!1;else try{Lx(gn,Ce,"req"+ot+"_")}catch{M&&M(gn)}}if(yt){M=Ce.join("&");break e}}}return d=d.i.splice(0,T),_.D=d,M}function Yp(d){if(!d.g&&!d.u){d.Y=1;var _=d.Fa;ae||H(),j||(ae(),j=!0),ee.add(_,d),d.v=0}}function Kf(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=Ta(h(d.Fa,d),Jp(d,d.v)),d.v++,!0)}e.Fa=function(){if(this.u=null,Qp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=Ta(h(this.ab,this),d)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Dn(10),Hu(this),Qp(this))};function Yf(d){d.A!=null&&(a.clearTimeout(d.A),d.A=null)}function Qp(d){d.g=new kr(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var _=nr(d.qa);wt(_,"RID","rpc"),wt(_,"SID",d.K),wt(_,"AID",d.T),wt(_,"CI",d.F?"0":"1"),!d.F&&d.ja&&wt(_,"TO",d.ja),wt(_,"TYPE","xmlhttp"),Ma(d,_),d.m&&d.o&&qf(_,d.m,d.o),d.L&&(d.g.I=d.L);var T=d.g;d=d.ia,T.L=1,T.v=Bu(nr(_)),T.m=null,T.P=!0,Cp(T,d)}e.Za=function(){this.C!=null&&(this.C=null,Hu(this),Kf(this),Dn(19))};function zu(d){d.C!=null&&(a.clearTimeout(d.C),d.C=null)}function Xp(d,_){var T=null;if(d.g==_){zu(d),Yf(d),d.g=null;var M=2}else if(zf(d.h,_))T=_.D,Pp(d.h,_),M=1;else return;if(d.G!=0){if(_.o)if(M==1){T=_.m?_.m.length:0,_=Date.now()-_.F;var z=d.B;M=Du(),Oe(M,new _p(M,T)),ju(d)}else Yp(d);else if(z=_.s,z==3||z==0&&0<_.X||!(M==1&&Ux(d,_)||M==2&&Kf(d)))switch(T&&0<T.length&&(_=d.h,_.i=_.i.concat(T)),z){case 1:cs(d,5);break;case 4:cs(d,10);break;case 3:cs(d,6);break;default:cs(d,2)}}}function Jp(d,_){let T=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(T*=2),T*_}function cs(d,_){if(d.j.info("Error code "+_),_==2){var T=h(d.fb,d),M=d.Xa;const z=!M;M=new us(M||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Lu(M,"https"),Bu(M),z?Nx(M.toString(),T):Ox(M.toString(),T)}else Dn(2);d.G=0,d.l&&d.l.sa(_),Zp(d),qp(d)}e.fb=function(d){d?(this.j.info("Successfully pinged google.com"),Dn(2)):(this.j.info("Failed to ping google.com"),Dn(1))};function Zp(d){if(d.G=0,d.ka=[],d.l){const _=xp(d.h);(_.length!=0||d.i.length!=0)&&(p(d.ka,_),p(d.ka,d.i),d.h.i.length=0,y(d.i),d.i.length=0),d.l.ra()}}function e_(d,_,T){var M=T instanceof us?nr(T):new us(T);if(M.g!="")_&&(M.g=_+"."+M.g),Fu(M,M.s);else{var z=a.location;M=z.protocol,_=_?_+"."+z.hostname:z.hostname,z=+z.port;var Z=new us(null);M&&Lu(Z,M),_&&(Z.g=_),z&&Fu(Z,z),T&&(Z.l=T),M=Z}return T=d.D,_=d.ya,T&&_&&wt(M,T,_),wt(M,"VER",d.la),Ma(d,M),M}function t_(d,_,T){if(_&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=d.Ca&&!d.pa?new Mt(new Va({eb:T})):new Mt(d.pa),_.Ha(d.J),_}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function n_(){}e=n_.prototype,e.ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){};function Wu(){}Wu.prototype.g=function(d,_){return new Wn(d,_)};function Wn(d,_){Ve.call(this),this.g=new Wp(_),this.l=d,this.h=_&&_.messageUrlParams||null,d=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(d?d["X-WebChannel-Content-Type"]=_.messageContentType:d={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(d?d["X-WebChannel-Client-Profile"]=_.va:d={"X-WebChannel-Client-Profile":_.va}),this.g.S=d,(d=_&&_.Sb)&&!P(d)&&(this.g.m=d),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!P(_)&&(this.g.D=_,d=this.h,d!==null&&_ in d&&(d=this.h,_ in d&&delete d[_])),this.j=new vo(this)}g(Wn,Ve),Wn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wn.prototype.close=function(){Gf(this.g)},Wn.prototype.o=function(d){var _=this.g;if(typeof d=="string"){var T={};T.__data__=d,d=T}else this.u&&(T={},T.__data__=co(d),d=T);_.i.push(new Ex(_.Ya++,d)),_.G==3&&ju(_)},Wn.prototype.N=function(){this.g.l=null,delete this.j,Gf(this.g),delete this.g,Wn.aa.N.call(this)};function i_(d){Lf.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var _=d.__sm__;if(_){e:{for(const T in _){d=T;break e}d=void 0}(this.i=d)&&(d=this.i,_=_!==null&&d in _?_[d]:void 0),this.data=_}else this.data=d}g(i_,Lf);function r_(){Ff.call(this),this.status=1}g(r_,Ff);function vo(d){this.g=d}g(vo,n_),vo.prototype.ua=function(){Oe(this.g,"a")},vo.prototype.ta=function(d){Oe(this.g,new i_(d))},vo.prototype.sa=function(d){Oe(this.g,new r_)},vo.prototype.ra=function(){Oe(this.g,"b")},Wu.prototype.createWebChannel=Wu.prototype.g,Wn.prototype.send=Wn.prototype.o,Wn.prototype.open=Wn.prototype.m,Wn.prototype.close=Wn.prototype.close,kI=function(){return new Wu},TI=function(){return Du()},II=as,xm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nu.NO_ERROR=0,Nu.TIMEOUT=8,Nu.HTTP_ERROR=6,Ec=Nu,bp.COMPLETE="complete",EI=bp,vp.EventType=Ea,Ea.OPEN="a",Ea.CLOSE="b",Ea.ERROR="c",Ea.MESSAGE="d",Ve.prototype.listen=Ve.prototype.K,Qa=vp,CI=Va,Mt.prototype.listenOnce=Mt.prototype.L,Mt.prototype.getLastError=Mt.prototype.Ka,Mt.prototype.getLastErrorCode=Mt.prototype.Ba,Mt.prototype.getStatus=Mt.prototype.Z,Mt.prototype.getResponseJson=Mt.prototype.Oa,Mt.prototype.getResponseText=Mt.prototype.oa,Mt.prototype.send=Mt.prototype.ea,Mt.prototype.setWithCredentials=Mt.prototype.Ha,SI=Mt}).apply(typeof sc<"u"?sc:typeof self<"u"?self:typeof window<"u"?window:{});const ew="@firebase/firestore";/**
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
 */class bn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}bn.UNAUTHENTICATED=new bn(null),bn.GOOGLE_CREDENTIALS=new bn("google-credentials-uid"),bn.FIRST_PARTY=new bn("first-party-uid"),bn.MOCK_USER=new bn("mock-user");/**
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
 */let ma="10.12.1";/**
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
 */const Ls=new su("@firebase/firestore");function ja(){return Ls.logLevel}function Re(e,...t){if(Ls.logLevel<=Ye.DEBUG){const n=t.map(Og);Ls.debug(`Firestore (${ma}): ${e}`,...n)}}function hr(e,...t){if(Ls.logLevel<=Ye.ERROR){const n=t.map(Og);Ls.error(`Firestore (${ma}): ${e}`,...n)}}function Wo(e,...t){if(Ls.logLevel<=Ye.WARN){const n=t.map(Og);Ls.warn(`Firestore (${ma}): ${e}`,...n)}}function Og(e){if(typeof e=="string")return e;try{/**
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
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
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
 */function je(e="Unexpected state"){const t=`FIRESTORE (${ma}) INTERNAL ASSERTION FAILED: `+e;throw hr(t),new Error(t)}function pt(e,t){e||je()}function We(e,t){return e}/**
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
 */const he={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ne extends wr{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class dr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class AI{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class JL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(bn.UNAUTHENTICATED))}shutdown(){}}class ZL{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class eF{constructor(t){this.t=t,this.currentUser=bn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let i=this.i;const r=l=>this.i!==i?(i=this.i,n(l)):Promise.resolve();let s=new dr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new dr,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{Re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Re("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new dr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==t?(Re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(pt(typeof i.accessToken=="string"),new AI(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return pt(t===null||typeof t=="string"),new bn(t)}}class tF{constructor(t,n,i){this.l=t,this.h=n,this.P=i,this.type="FirstParty",this.user=bn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class nF{constructor(t,n,i){this.l=t,this.h=n,this.P=i}getToken(){return Promise.resolve(new tF(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(bn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class iF{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rF{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const i=s=>{s.error!=null&&Re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>i(s))};const r=s=>{Re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(pt(typeof n.token=="string"),this.R=n.token,new iF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function sF(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class PI{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let i="";for(;i.length<20;){const r=sF(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=t.charAt(r[s]%t.length))}return i}}function lt(e,t){return e<t?-1:e>t?1:0}function qo(e,t,n){return e.length===t.length&&e.every((i,r)=>n(i,t[r]))}/**
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
 */class Wt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new Ne(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Ne(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new Ne(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ne(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Wt.fromMillis(Date.now())}static fromDate(t){return Wt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),i=Math.floor(1e6*(t-1e3*n));return new Wt(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?lt(this.nanoseconds,t.nanoseconds):lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ze{constructor(t){this.timestamp=t}static fromTimestamp(t){return new ze(t)}static min(){return new ze(new Wt(0,0))}static max(){return new ze(new Wt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Vl{constructor(t,n,i){n===void 0?n=0:n>t.length&&je(),i===void 0?i=t.length-n:i>t.length-n&&je(),this.segments=t,this.offset=n,this.len=i}get length(){return this.len}isEqual(t){return Vl.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Vl?t.forEach(i=>{n.push(i)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,i=this.limit();n<i;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const i=Math.min(t.length,n.length);for(let r=0;r<i;r++){const s=t.get(r),o=n.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class At extends Vl{construct(t,n,i){return new At(t,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const i of t){if(i.indexOf("//")>=0)throw new Ne(he.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new At(n)}static emptyPath(){return new At([])}}const oF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ln extends Vl{construct(t,n,i){return new ln(t,n,i)}static isValidIdentifier(t){return oF.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ln.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ln(["__name__"])}static fromServerFormat(t){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new Ne(he.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new Ne(he.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Ne(he.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);i+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(i+=a,r++):(s(),r++)}if(s(),o)throw new Ne(he.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ln(n)}static emptyPath(){return new ln([])}}/**
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
 */class Me{constructor(t){this.path=t}static fromPath(t){return new Me(At.fromString(t))}static fromName(t){return new Me(At.fromString(t).popFirst(5))}static empty(){return new Me(At.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&At.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return At.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Me(new At(t.slice()))}}function aF(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=ze.fromTimestamp(i===1e9?new Wt(n+1,0):new Wt(n,i));return new Xr(r,Me.empty(),t)}function lF(e){return new Xr(e.readTime,e.key,-1)}class Xr{constructor(t,n,i){this.readTime=t,this.documentKey=n,this.largestBatchId=i}static min(){return new Xr(ze.min(),Me.empty(),-1)}static max(){return new Xr(ze.max(),Me.empty(),-1)}}function uF(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=Me.comparator(e.documentKey,t.documentKey),n!==0?n:lt(e.largestBatchId,t.largestBatchId))}/**
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
 */const cF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function fu(e){if(e.code!==he.FAILED_PRECONDITION||e.message!==cF)throw e;Re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class pe{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&je(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new pe((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof pe?n:pe.resolve(n)}catch(n){return pe.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):pe.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):pe.reject(n)}static resolve(t){return new pe((n,i)=>{n(t)})}static reject(t){return new pe((n,i)=>{i(t)})}static waitFor(t){return new pe((n,i)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&n()},l=>i(l))}),o=!0,s===r&&n()})}static or(t){let n=pe.resolve(!1);for(const i of t)n=n.next(r=>r?pe.resolve(r):i());return n}static forEach(t,n){const i=[];return t.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(t,n){return new pe((i,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&i(o)},c=>r(c))}})}static doWhile(t,n){return new pe((i,r)=>{const s=()=>{t()===!0?n().next(()=>{s()},r):i()};s()})}}function fF(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function hu(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class Mg{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Mg.oe=-1;function $d(e){return e==null}function td(e){return e===0&&1/e==-1/0}function hF(e){return typeof e=="number"&&Number.isInteger(e)&&!td(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */function tw(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Js(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xI(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
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
 */class Dt{constructor(t,n){this.comparator=t,this.root=n||sn.EMPTY}insert(t,n){return new Dt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,sn.BLACK,null,null))}remove(t){return new Dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,sn.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(t){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(t,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,i)=>(t(n,i),!1))}toString(){const t=[];return this.inorderTraversal((n,i)=>(t.push(`${n}:${i}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new oc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new oc(this.root,t,this.comparator,!1)}getReverseIterator(){return new oc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new oc(this.root,t,this.comparator,!0)}}class oc{constructor(t,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?i(t.key,n):1,n&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class sn{constructor(t,n,i,r,s){this.key=t,this.value=n,this.color=i??sn.RED,this.left=r??sn.EMPTY,this.right=s??sn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,i,r,s){return new sn(t??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,i){let r=this;const s=i(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return sn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let i,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return sn.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw je();const t=this.left.check();if(t!==this.right.check())throw je();return t+(this.isRed()?0:1)}}sn.EMPTY=null,sn.RED=!0,sn.BLACK=!1;sn.EMPTY=new class{constructor(){this.size=0}get key(){throw je()}get value(){throw je()}get color(){throw je()}get left(){throw je()}get right(){throw je()}copy(t,n,i,r,s){return this}insert(t,n,i){return new sn(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class un{constructor(t){this.comparator=t,this.data=new Dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,i)=>(t(n),!1))}forEachInRange(t,n){const i=this.data.getIteratorFrom(t[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!t(i.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new nw(this.data.getIterator())}getIteratorFrom(t){return new nw(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(i=>{n=n.add(i)}),n}isEqual(t){if(!(t instanceof un)||this.size!==t.size)return!1;const n=this.data.getIterator(),i=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new un(this.comparator);return n.data=t,n}}class nw{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yn{constructor(t){this.fields=t,t.sort(ln.comparator)}static empty(){return new Yn([])}unionWith(t){let n=new un(ln.comparator);for(const i of this.fields)n=n.add(i);for(const i of t)n=n.add(i);return new Yn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return qo(this.fields,t.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class RI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class xn{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new RI("Invalid base64 string: "+s):s}}(t);return new xn(n)}static fromUint8Array(t){const n=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new xn(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}xn.EMPTY_BYTE_STRING=new xn("");const mF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jr(e){if(pt(!!e),typeof e=="string"){let t=0;const n=mF.exec(e);if(pt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:jt(e.seconds),nanos:jt(e.nanos)}}function jt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Fs(e){return typeof e=="string"?xn.fromBase64String(e):xn.fromUint8Array(e)}/**
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
 */function Lg(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Fg(e){const t=e.mapValue.fields.__previous_value__;return Lg(t)?Fg(t):t}function Dl(e){const t=Jr(e.mapValue.fields.__local_write_time__.timestampValue);return new Wt(t.seconds,t.nanos)}/**
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
 */class vF{constructor(t,n,i,r,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Nl{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Nl&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const ac={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Bs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Lg(e)?4:gF(e)?9007199254740991:10:je()}function qi(e,t){if(e===t)return!0;const n=Bs(e);if(n!==Bs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Dl(e).isEqual(Dl(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Jr(r.timestampValue),a=Jr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(r,s){return Fs(r.bytesValue).isEqual(Fs(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(r,s){return jt(r.geoPointValue.latitude)===jt(s.geoPointValue.latitude)&&jt(r.geoPointValue.longitude)===jt(s.geoPointValue.longitude)}(e,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return jt(r.integerValue)===jt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=jt(r.doubleValue),a=jt(s.doubleValue);return o===a?td(o)===td(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return qo(e.arrayValue.values||[],t.arrayValue.values||[],qi);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(tw(o)!==tw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!qi(o[l],a[l])))return!1;return!0}(e,t);default:return je()}}function Ol(e,t){return(e.values||[]).find(n=>qi(n,t))!==void 0}function Go(e,t){if(e===t)return 0;const n=Bs(e),i=Bs(t);if(n!==i)return lt(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return lt(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=jt(s.integerValue||s.doubleValue),l=jt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return iw(e.timestampValue,t.timestampValue);case 4:return iw(Dl(e),Dl(t));case 5:return lt(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Fs(s),l=Fs(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=lt(a[u],l[u]);if(c!==0)return c}return lt(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=lt(jt(s.latitude),jt(o.latitude));return a!==0?a:lt(jt(s.longitude),jt(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Go(a[u],l[u]);if(c)return c}return lt(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ac.mapValue&&o===ac.mapValue)return 0;if(s===ac.mapValue)return 1;if(o===ac.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const h=lt(l[f],c[f]);if(h!==0)return h;const m=Go(a[l[f]],u[c[f]]);if(m!==0)return m}return lt(l.length,c.length)}(e.mapValue,t.mapValue);default:throw je()}}function iw(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return lt(e,t);const n=Jr(e),i=Jr(t),r=lt(n.seconds,i.seconds);return r!==0?r:lt(n.nanos,i.nanos)}function Ko(e){return Rm(e)}function Rm(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const i=Jr(n);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Fs(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return Me.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=Rm(s);return i+"]"}(e.arrayValue):"mapValue"in e?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const o of i)s?s=!1:r+=",",r+=`${o}:${Rm(n.fields[o])}`;return r+"}"}(e.mapValue):je()}function Vm(e){return!!e&&"integerValue"in e}function Bg(e){return!!e&&"arrayValue"in e}function rw(e){return!!e&&"nullValue"in e}function sw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ic(e){return!!e&&"mapValue"in e}function hl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Js(e.mapValue.fields,(n,i)=>t.mapValue.fields[n]=hl(i)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=hl(e.arrayValue.values[n]);return t}return Object.assign({},e)}function gF(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Bn{constructor(t){this.value=t}static empty(){return new Bn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let i=0;i<t.length-1;++i)if(n=(n.mapValue.fields||{})[t.get(i)],!Ic(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=hl(n)}setAll(t){let n=ln.emptyPath(),i={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,i,r),i={},r=[],n=a.popLast()}o?i[a.lastSegment()]=hl(o):r.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(t){const n=this.field(t.popLast());Ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return qi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<t.length;++i){let r=n.mapValue.fields[t.get(i)];Ic(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,i){Js(n,(r,s)=>t[r]=s);for(const r of i)delete t[r]}clone(){return new Bn(hl(this.value))}}function VI(e){const t=[];return Js(e.fields,(n,i)=>{const r=new ln([n]);if(Ic(i)){const s=VI(i.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new Yn(t)}/**
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
 */class Cn{constructor(t,n,i,r,s,o,a){this.key=t,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Cn(t,0,ze.min(),ze.min(),ze.min(),Bn.empty(),0)}static newFoundDocument(t,n,i,r){return new Cn(t,1,n,ze.min(),i,r,0)}static newNoDocument(t,n){return new Cn(t,2,n,ze.min(),ze.min(),Bn.empty(),0)}static newUnknownDocument(t,n){return new Cn(t,3,n,ze.min(),ze.min(),Bn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(ze.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Bn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ze.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Cn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Cn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class nd{constructor(t,n){this.position=t,this.inclusive=n}}function ow(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(s.field.isKeyField()?i=Me.comparator(Me.fromName(o.referenceValue),n.key):i=Go(o,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function aw(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!qi(e.position[n],t.position[n]))return!1;return!0}/**
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
 */class id{constructor(t,n="asc"){this.field=t,this.dir=n}}function yF(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
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
 */class DI{}class Gt extends DI{constructor(t,n,i){super(),this.field=t,this.op=n,this.value=i}static create(t,n,i){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,i):new _F(t,n,i):n==="array-contains"?new SF(t,i):n==="in"?new CF(t,i):n==="not-in"?new EF(t,i):n==="array-contains-any"?new IF(t,i):new Gt(t,n,i)}static createKeyFieldInFilter(t,n,i){return n==="in"?new bF(t,i):new wF(t,i)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Go(n,this.value)):n!==null&&Bs(this.value)===Bs(n)&&this.matchesComparison(Go(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return je()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gi extends DI{constructor(t,n){super(),this.filters=t,this.op=n,this.ae=null}static create(t,n){return new Gi(t,n)}matches(t){return NI(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function NI(e){return e.op==="and"}function OI(e){return pF(e)&&NI(e)}function pF(e){for(const t of e.filters)if(t instanceof Gi)return!1;return!0}function Dm(e){if(e instanceof Gt)return e.field.canonicalString()+e.op.toString()+Ko(e.value);if(OI(e))return e.filters.map(t=>Dm(t)).join(",");{const t=e.filters.map(n=>Dm(n)).join(",");return`${e.op}(${t})`}}function MI(e,t){return e instanceof Gt?function(i,r){return r instanceof Gt&&i.op===r.op&&i.field.isEqual(r.field)&&qi(i.value,r.value)}(e,t):e instanceof Gi?function(i,r){return r instanceof Gi&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,o,a)=>s&&MI(o,r.filters[a]),!0):!1}(e,t):void je()}function LI(e){return e instanceof Gt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ko(n.value)}`}(e):e instanceof Gi?function(n){return n.op.toString()+" {"+n.getFilters().map(LI).join(" ,")+"}"}(e):"Filter"}class _F extends Gt{constructor(t,n,i){super(t,n,i),this.key=Me.fromName(i.referenceValue)}matches(t){const n=Me.comparator(t.key,this.key);return this.matchesComparison(n)}}class bF extends Gt{constructor(t,n){super(t,"in",n),this.keys=FI("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class wF extends Gt{constructor(t,n){super(t,"not-in",n),this.keys=FI("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function FI(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>Me.fromName(i.referenceValue))}class SF extends Gt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Bg(n)&&Ol(n.arrayValue,this.value)}}class CF extends Gt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ol(this.value.arrayValue,n)}}class EF extends Gt{constructor(t,n){super(t,"not-in",n)}matches(t){if(Ol(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ol(this.value.arrayValue,n)}}class IF extends Gt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Bg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ol(this.value.arrayValue,i))}}/**
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
 */class TF{constructor(t,n=null,i=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function lw(e,t=null,n=[],i=[],r=null,s=null,o=null){return new TF(e,t,n,i,r,s,o)}function $g(e){const t=We(e);if(t.ue===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(i=>Dm(i)).join(","),n+="|ob:",n+=t.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),$d(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(i=>Ko(i)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(i=>Ko(i)).join(",")),t.ue=n}return t.ue}function Ug(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!yF(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!MI(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!aw(e.startAt,t.startAt)&&aw(e.endAt,t.endAt)}function Nm(e){return Me.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
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
 */class Ud{constructor(t,n=null,i=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function kF(e,t,n,i,r,s,o,a){return new Ud(e,t,n,i,r,s,o,a)}function Hd(e){return new Ud(e)}function uw(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function AF(e){return e.collectionGroup!==null}function ml(e){const t=We(e);if(t.ce===null){t.ce=[];const n=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),n.add(s.field.canonicalString());const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new un(ln.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.ce.push(new id(s,i))}),n.has(ln.keyField().canonicalString())||t.ce.push(new id(ln.keyField(),i))}return t.ce}function Hi(e){const t=We(e);return t.le||(t.le=PF(t,ml(e))),t.le}function PF(e,t){if(e.limitType==="F")return lw(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new id(r.field,s)});const n=e.endAt?new nd(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new nd(e.startAt.position,e.startAt.inclusive):null;return lw(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}}function Om(e,t,n){return new Ud(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function jd(e,t){return Ug(Hi(e),Hi(t))&&e.limitType===t.limitType}function BI(e){return`${$g(Hi(e))}|lt:${e.limitType}`}function Co(e){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>LI(r)).join(", ")}]`),$d(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>Ko(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>Ko(r)).join(",")),`Target(${i})`}(Hi(e))}; limitType=${e.limitType})`}function zd(e,t){return t.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):Me.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(e,t)&&function(i,r){for(const s of ml(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(e,t)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(e,t)&&function(i,r){return!(i.startAt&&!function(o,a,l){const u=ow(o,a,l);return o.inclusive?u<=0:u<0}(i.startAt,ml(i),r)||i.endAt&&!function(o,a,l){const u=ow(o,a,l);return o.inclusive?u>=0:u>0}(i.endAt,ml(i),r))}(e,t)}function xF(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function $I(e){return(t,n)=>{let i=!1;for(const r of ml(e)){const s=RF(r,t,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function RF(e,t,n){const i=e.field.isKeyField()?Me.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Go(l,u):je()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return je()}}/**
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
 */class va{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const i=this.mapKeyFn(t),r=this.inner[i];if(r===void 0)return this.inner[i]=[[t,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Js(this.inner,(n,i)=>{for(const[r,s]of i)t(r,s)})}isEmpty(){return xI(this.inner)}size(){return this.innerSize}}/**
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
 */const VF=new Dt(Me.comparator);function mr(){return VF}const UI=new Dt(Me.comparator);function Xa(...e){let t=UI;for(const n of e)t=t.insert(n.key,n);return t}function HI(e){let t=UI;return e.forEach((n,i)=>t=t.insert(n,i.overlayedDocument)),t}function Cs(){return vl()}function jI(){return vl()}function vl(){return new va(e=>e.toString(),(e,t)=>e.isEqual(t))}const DF=new Dt(Me.comparator),NF=new un(Me.comparator);function Qe(...e){let t=NF;for(const n of e)t=t.add(n);return t}const OF=new un(lt);function MF(){return OF}/**
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
 */function zI(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:td(t)?"-0":t}}function WI(e){return{integerValue:""+e}}function LF(e,t){return hF(t)?WI(t):zI(e,t)}/**
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
 */class Wd{constructor(){this._=void 0}}function FF(e,t,n){return e instanceof rd?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Lg(s)&&(s=Fg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof Ml?GI(e,t):e instanceof Ll?KI(e,t):function(r,s){const o=qI(r,s),a=cw(o)+cw(r.Pe);return Vm(o)&&Vm(r.Pe)?WI(a):zI(r.serializer,a)}(e,t)}function BF(e,t,n){return e instanceof Ml?GI(e,t):e instanceof Ll?KI(e,t):n}function qI(e,t){return e instanceof sd?function(i){return Vm(i)||function(s){return!!s&&"doubleValue"in s}(i)}(t)?t:{integerValue:0}:null}class rd extends Wd{}class Ml extends Wd{constructor(t){super(),this.elements=t}}function GI(e,t){const n=YI(t);for(const i of e.elements)n.some(r=>qi(r,i))||n.push(i);return{arrayValue:{values:n}}}class Ll extends Wd{constructor(t){super(),this.elements=t}}function KI(e,t){let n=YI(t);for(const i of e.elements)n=n.filter(r=>!qi(r,i));return{arrayValue:{values:n}}}class sd extends Wd{constructor(t,n){super(),this.serializer=t,this.Pe=n}}function cw(e){return jt(e.integerValue||e.doubleValue)}function YI(e){return Bg(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function $F(e,t){return e.field.isEqual(t.field)&&function(i,r){return i instanceof Ml&&r instanceof Ml||i instanceof Ll&&r instanceof Ll?qo(i.elements,r.elements,qi):i instanceof sd&&r instanceof sd?qi(i.Pe,r.Pe):i instanceof rd&&r instanceof rd}(e.transform,t.transform)}class UF{constructor(t,n){this.version=t,this.transformResults=n}}class $n{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new $n}static exists(t){return new $n(void 0,t)}static updateTime(t){return new $n(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tc(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class qd{}function QI(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Gd(e.key,$n.none()):new mu(e.key,e.data,$n.none());{const n=e.data,i=Bn.empty();let r=new un(ln.comparator);for(let s of t.fields)if(!r.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?i.delete(s):i.set(s,o),r=r.add(s)}return new ns(e.key,i,new Yn(r.toArray()),$n.none())}}function HF(e,t,n){e instanceof mu?function(r,s,o){const a=r.value.clone(),l=fw(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ns?function(r,s,o){if(!Tc(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=fw(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(XI(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function gl(e,t,n,i){return e instanceof mu?function(s,o,a,l){if(!Tc(s.precondition,o))return a;const u=s.value.clone(),c=hw(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,i):e instanceof ns?function(s,o,a,l){if(!Tc(s.precondition,o))return a;const u=hw(s.fieldTransforms,l,o),c=o.data;return c.setAll(XI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(e,t,n,i):function(s,o,a){return Tc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function jF(e,t){let n=null;for(const i of e.fieldTransforms){const r=t.data.field(i.field),s=qI(i.transform,r||null);s!=null&&(n===null&&(n=Bn.empty()),n.set(i.field,s))}return n||null}function dw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&qo(i,r,(s,o)=>$F(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class mu extends qd{constructor(t,n,i,r=[]){super(),this.key=t,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ns extends qd{constructor(t,n,i,r,s=[]){super(),this.key=t,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function XI(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}}),t}function fw(e,t,n){const i=new Map;pt(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,BF(o,a,n[r]))}return i}function hw(e,t,n){const i=new Map;for(const r of e){const s=r.transform,o=n.data.field(r.field);i.set(r.field,FF(s,o,t))}return i}class Gd extends qd{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zF extends qd{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class WF{constructor(t,n,i,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(t,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&HF(s,t,i[r])}}applyToLocalView(t,n){for(const i of this.baseMutations)i.key.isEqual(t.key)&&(n=gl(i,t,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(t.key)&&(n=gl(i,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const i=jI();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(r.key)?null:a;const l=QI(o,a);l!==null&&i.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(ze.min())}),i}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Qe())}isEqual(t){return this.batchId===t.batchId&&qo(this.mutations,t.mutations,(n,i)=>dw(n,i))&&qo(this.baseMutations,t.baseMutations,(n,i)=>dw(n,i))}}class Hg{constructor(t,n,i,r){this.batch=t,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(t,n,i){pt(t.mutations.length===i.length);let r=function(){return DF}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,i[o].version);return new Hg(t,n,i,r)}}/**
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
 */class qF{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class GF{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
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
 */var Ht,Je;function KF(e){switch(e){default:return je();case he.CANCELLED:case he.UNKNOWN:case he.DEADLINE_EXCEEDED:case he.RESOURCE_EXHAUSTED:case he.INTERNAL:case he.UNAVAILABLE:case he.UNAUTHENTICATED:return!1;case he.INVALID_ARGUMENT:case he.NOT_FOUND:case he.ALREADY_EXISTS:case he.PERMISSION_DENIED:case he.FAILED_PRECONDITION:case he.ABORTED:case he.OUT_OF_RANGE:case he.UNIMPLEMENTED:case he.DATA_LOSS:return!0}}function JI(e){if(e===void 0)return hr("GRPC error has no .code"),he.UNKNOWN;switch(e){case Ht.OK:return he.OK;case Ht.CANCELLED:return he.CANCELLED;case Ht.UNKNOWN:return he.UNKNOWN;case Ht.DEADLINE_EXCEEDED:return he.DEADLINE_EXCEEDED;case Ht.RESOURCE_EXHAUSTED:return he.RESOURCE_EXHAUSTED;case Ht.INTERNAL:return he.INTERNAL;case Ht.UNAVAILABLE:return he.UNAVAILABLE;case Ht.UNAUTHENTICATED:return he.UNAUTHENTICATED;case Ht.INVALID_ARGUMENT:return he.INVALID_ARGUMENT;case Ht.NOT_FOUND:return he.NOT_FOUND;case Ht.ALREADY_EXISTS:return he.ALREADY_EXISTS;case Ht.PERMISSION_DENIED:return he.PERMISSION_DENIED;case Ht.FAILED_PRECONDITION:return he.FAILED_PRECONDITION;case Ht.ABORTED:return he.ABORTED;case Ht.OUT_OF_RANGE:return he.OUT_OF_RANGE;case Ht.UNIMPLEMENTED:return he.UNIMPLEMENTED;case Ht.DATA_LOSS:return he.DATA_LOSS;default:return je()}}(Je=Ht||(Ht={}))[Je.OK=0]="OK",Je[Je.CANCELLED=1]="CANCELLED",Je[Je.UNKNOWN=2]="UNKNOWN",Je[Je.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Je[Je.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Je[Je.NOT_FOUND=5]="NOT_FOUND",Je[Je.ALREADY_EXISTS=6]="ALREADY_EXISTS",Je[Je.PERMISSION_DENIED=7]="PERMISSION_DENIED",Je[Je.UNAUTHENTICATED=16]="UNAUTHENTICATED",Je[Je.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Je[Je.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Je[Je.ABORTED=10]="ABORTED",Je[Je.OUT_OF_RANGE=11]="OUT_OF_RANGE",Je[Je.UNIMPLEMENTED=12]="UNIMPLEMENTED",Je[Je.INTERNAL=13]="INTERNAL",Je[Je.UNAVAILABLE=14]="UNAVAILABLE",Je[Je.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YF(){return new TextEncoder}/**
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
 */const QF=new As([4294967295,4294967295],0);function mw(e){const t=YF().encode(e),n=new wI;return n.update(t),new Uint8Array(n.digest())}function vw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),i=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new As([n,i],0),new As([r,s],0)]}class jg{constructor(t,n,i){if(this.bitmap=t,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Ja(`Invalid padding: ${n}`);if(i<0)throw new Ja(`Invalid hash count: ${i}`);if(t.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${i}`);if(t.length===0&&n!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*t.length-n,this.Te=As.fromNumber(this.Ie)}Ee(t,n,i){let r=t.add(n.multiply(As.fromNumber(i)));return r.compare(QF)===1&&(r=new As([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const n=mw(t),[i,r]=vw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);if(!this.de(o))return!1}return!0}static create(t,n,i){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new jg(s,r,n);return i.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const n=mw(t),[i,r]=vw(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(i,r,s);this.Ae(o)}}Ae(t){const n=Math.floor(t/8),i=t%8;this.bitmap[n]|=1<<i}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kd{constructor(t,n,i,r,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,i){const r=new Map;return r.set(t,vu.createSynthesizedTargetChangeForCurrentChange(t,n,i)),new Kd(ze.min(),r,new Dt(lt),mr(),Qe())}}class vu{constructor(t,n,i,r,s){this.resumeToken=t,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,i){return new vu(i,n,Qe(),Qe(),Qe())}}/**
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
 */class kc{constructor(t,n,i,r){this.Re=t,this.removedTargetIds=n,this.key=i,this.Ve=r}}class ZI{constructor(t,n){this.targetId=t,this.me=n}}class eT{constructor(t,n,i=xn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=i,this.cause=r}}class gw{constructor(){this.fe=0,this.ge=pw(),this.pe=xn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=Qe(),n=Qe(),i=Qe();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:je()}}),new vu(this.pe,this.ye,t,n,i)}ve(){this.we=!1,this.ge=pw()}Fe(t,n){this.we=!0,this.ge=this.ge.insert(t,n)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,pt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class XF{constructor(t){this.Le=t,this.Be=new Map,this.ke=mr(),this.qe=yw(),this.Qe=new Dt(lt)}Ke(t){for(const n of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(n,t.Ve):this.Ue(n,t.key,t.Ve);for(const n of t.removedTargetIds)this.Ue(n,t.key,t.Ve)}We(t){this.forEachTarget(t,n=>{const i=this.Ge(n);switch(t.state){case 0:this.ze(n)&&i.De(t.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(t.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(i.Ne(),i.De(t.resumeToken));break;case 4:this.ze(n)&&(this.je(n),i.De(t.resumeToken));break;default:je()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.ze(r)&&n(r)})}He(t){const n=t.targetId,i=t.me.count,r=this.Je(n);if(r){const s=r.target;if(Nm(s))if(i===0){const o=new Me(s.path);this.Ue(n,o,Cn.newNoDocument(o,ze.min()))}else pt(i===1);else{const o=this.Ye(n);if(o!==i){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(t){const n=t.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let o,a;try{o=Fs(i).toUint8Array()}catch(l){if(l instanceof RI)return Wo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new jg(o,r,s)}catch(l){return Wo(l instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,n,i){return n.me.count===i-this.nt(t,n.targetId)?0:2}nt(t,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(n,s,null),r++)}),r}rt(t){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Nm(a.target)){const l=new Me(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Cn.newNoDocument(l,t))}s.be&&(n.set(o,s.Ce()),s.ve())}});let i=Qe();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(i=i.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new Kd(t,n,this.Qe,this.ke,i);return this.ke=mr(),this.qe=yw(),this.Qe=new Dt(lt),r}$e(t,n){if(!this.ze(t))return;const i=this.it(t,n.key)?2:0;this.Ge(t).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(t))}Ue(t,n,i){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(t)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(t){this.Be.delete(t)}Ye(t){const n=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let n=this.Be.get(t);return n||(n=new gw,this.Be.set(t,n)),n}st(t){let n=this.qe.get(t);return n||(n=new un(lt),this.qe=this.qe.insert(t,n)),n}ze(t){const n=this.Je(t)!==null;return n||Re("WatchChangeAggregator","Detected inactive target",t),n}Je(t){const n=this.Be.get(t);return n&&n.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new gw),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.Ue(t,n,null)})}it(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function yw(){return new Dt(Me.comparator)}function pw(){return new Dt(Me.comparator)}const JF={asc:"ASCENDING",desc:"DESCENDING"},ZF={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},e2={and:"AND",or:"OR"};class t2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Mm(e,t){return e.useProto3Json||$d(t)?t:{value:t}}function od(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tT(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function n2(e,t){return od(e,t.toTimestamp())}function ji(e){return pt(!!e),ze.fromTimestamp(function(n){const i=Jr(n);return new Wt(i.seconds,i.nanos)}(e))}function zg(e,t){return Lm(e,t).canonicalString()}function Lm(e,t){const n=function(r){return new At(["projects",r.projectId,"databases",r.database])}(e).child("documents");return t===void 0?n:n.child(t)}function nT(e){const t=At.fromString(e);return pt(aT(t)),t}function Fm(e,t){return zg(e.databaseId,t.path)}function Sh(e,t){const n=nT(t);if(n.get(1)!==e.databaseId.projectId)throw new Ne(he.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ne(he.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Me(rT(n))}function iT(e,t){return zg(e.databaseId,t)}function i2(e){const t=nT(e);return t.length===4?At.emptyPath():rT(t)}function Bm(e){return new At(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rT(e){return pt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function _w(e,t,n){return{name:Fm(e,t),fields:n.value.mapValue.fields}}function r2(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:je()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(pt(c===void 0||typeof c=="string"),xn.fromBase64String(c||"")):(pt(c===void 0||c instanceof Buffer||c instanceof Uint8Array),xn.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?he.UNKNOWN:JI(u.code);return new Ne(c,u.message||"")}(o);n=new eT(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=Sh(e,i.document.name),s=ji(i.document.updateTime),o=i.document.createTime?ji(i.document.createTime):ze.min(),a=new Bn({mapValue:{fields:i.document.fields}}),l=Cn.newFoundDocument(r,s,o,a),u=i.targetIds||[],c=i.removedTargetIds||[];n=new kc(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=Sh(e,i.document),s=i.readTime?ji(i.readTime):ze.min(),o=Cn.newNoDocument(r,s),a=i.removedTargetIds||[];n=new kc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=Sh(e,i.document),s=i.removedTargetIds||[];n=new kc([],s,r,null)}else{if(!("filter"in t))return je();{t.filter;const i=t.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,o=new GF(r,s),a=i.targetId;n=new ZI(a,o)}}return n}function s2(e,t){let n;if(t instanceof mu)n={update:_w(e,t.key,t.value)};else if(t instanceof Gd)n={delete:Fm(e,t.key)};else if(t instanceof ns)n={update:_w(e,t.key,t.data),updateMask:m2(t.fieldMask)};else{if(!(t instanceof zF))return je();n={verify:Fm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(i=>function(s,o){const a=o.transform;if(a instanceof rd)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ml)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ll)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw je()}(0,i))),t.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:n2(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:je()}(e,t.precondition)),n}function o2(e,t){return e&&e.length>0?(pt(t!==void 0),e.map(n=>function(r,s){let o=r.updateTime?ji(r.updateTime):ji(s);return o.isEqual(ze.min())&&(o=ji(s)),new UF(o,r.transformResults||[])}(n,t))):[]}function a2(e,t){return{documents:[iT(e,t.path)]}}function l2(e,t){const n={structuredQuery:{}},i=t.path;let r;t.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=iT(e,r);const s=function(u){if(u.length!==0)return oT(Gi.create(u,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(h){return{field:Eo(h.field),direction:d2(h.dir)}}(c))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Mm(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{_t:n,parent:r}}function u2(e){let t=i2(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){pt(i===1);const c=n.from[0];c.allDescendants?r=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(f){const h=sT(f);return h instanceof Gi&&OI(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(h=>function(g){return new id(Io(g.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(h))}(n.orderBy));let a=null;n.limit&&(a=function(f){let h;return h=typeof f=="object"?f.value:f,$d(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(f){const h=!!f.before,m=f.values||[];return new nd(m,h)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const h=!f.before,m=f.values||[];return new nd(m,h)}(n.endAt)),kF(t,r,o,s,a,"F",l,u)}function c2(e,t){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return je()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function sT(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=Io(n.unaryFilter.field);return Gt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=Io(n.unaryFilter.field);return Gt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Io(n.unaryFilter.field);return Gt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Io(n.unaryFilter.field);return Gt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return je()}}(e):e.fieldFilter!==void 0?function(n){return Gt.create(Io(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return je()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Gi.create(n.compositeFilter.filters.map(i=>sT(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return je()}}(n.compositeFilter.op))}(e):je()}function d2(e){return JF[e]}function f2(e){return ZF[e]}function h2(e){return e2[e]}function Eo(e){return{fieldPath:e.canonicalString()}}function Io(e){return ln.fromServerFormat(e.fieldPath)}function oT(e){return e instanceof Gt?function(n){if(n.op==="=="){if(sw(n.value))return{unaryFilter:{field:Eo(n.field),op:"IS_NAN"}};if(rw(n.value))return{unaryFilter:{field:Eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sw(n.value))return{unaryFilter:{field:Eo(n.field),op:"IS_NOT_NAN"}};if(rw(n.value))return{unaryFilter:{field:Eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(n.field),op:f2(n.op),value:n.value}}}(e):e instanceof Gi?function(n){const i=n.getFilters().map(r=>oT(r));return i.length===1?i[0]:{compositeFilter:{op:h2(n.op),filters:i}}}(e):je()}function m2(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function aT(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */class Hr{constructor(t,n,i,r,s=ze.min(),o=ze.min(),a=xn.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Hr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class v2{constructor(t){this.ct=t}}function g2(e){const t=u2({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Om(t,t.limit,"L"):t}/**
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
 */class y2{constructor(){this._n=new p2}addToCollectionParentIndex(t,n){return this._n.add(n),pe.resolve()}getCollectionParents(t,n){return pe.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return pe.resolve()}deleteFieldIndex(t,n){return pe.resolve()}deleteAllFieldIndexes(t){return pe.resolve()}createTargetIndexes(t,n){return pe.resolve()}getDocumentsMatchingTarget(t,n){return pe.resolve(null)}getIndexType(t,n){return pe.resolve(0)}getFieldIndexes(t,n){return pe.resolve([])}getNextCollectionGroupToUpdate(t){return pe.resolve(null)}getMinOffset(t,n){return pe.resolve(Xr.min())}getMinOffsetFromCollectionGroup(t,n){return pe.resolve(Xr.min())}updateCollectionGroup(t,n,i){return pe.resolve()}updateIndexEntries(t,n){return pe.resolve()}}class p2{constructor(){this.index={}}add(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n]||new un(At.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(t){const n=t.lastSegment(),i=t.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(t){return(this.index[t]||new un(At.comparator)).toArray()}}/**
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
 */class Yo{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Yo(0)}static Ln(){return new Yo(-1)}}/**
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
 */class _2{constructor(){this.changes=new va(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Cn.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?pe.resolve(i):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class b2{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
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
 */class w2{constructor(t,n,i,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(t,n){let i=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(i!==null&&gl(i.mutation,r,Yn.empty(),Wt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.getLocalViewOfDocuments(t,i,Qe()).next(()=>i))}getLocalViewOfDocuments(t,n,i=Qe()){const r=Cs();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,i).next(s=>{let o=Xa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const i=Cs();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,Qe()))}populateOverlays(t,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,i,r){let s=mr();const o=vl(),a=function(){return vl()}();return n.forEach((l,u)=>{const c=i.get(u.key);r.has(u.key)&&(c===void 0||c.mutation instanceof ns)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),gl(c.mutation,u,c.mutation.getFieldMask(),Wt.now())):o.set(u.key,Yn.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new b2(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(t,n){const i=vl();let r=new Dt((o,a)=>o-a),s=Qe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=i.get(l)||Yn.empty();c=a.applyToLocalView(u,c),i.set(l,c);const f=(r.get(a.batchId)||Qe()).add(l);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=jI();c.forEach(h=>{if(!s.has(h)){const m=QI(n.get(h),i.get(h));m!==null&&f.set(h,m),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,f))}return pe.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(i=>this.recalculateAndSaveOverlays(t,i))}getDocumentsMatchingQuery(t,n,i,r){return function(o){return Me.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):AF(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,i,r):this.getDocumentsMatchingCollectionQuery(t,n,i,r)}getNextDocuments(t,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,i,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,i.largestBatchId,r-s.size):pe.resolve(Cs());let a=-1,l=s;return o.next(u=>pe.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?pe.resolve():this.remoteDocumentCache.getEntry(t,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,Qe())).next(c=>({batchId:a,changes:HI(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new Me(n)).next(i=>{let r=Xa();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,i,r){const s=n.collectionGroup;let o=Xa();return this.indexManager.getCollectionParents(t,s).next(a=>pe.forEach(a,l=>{const u=function(f,h){return new Ud(h,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,i,r).next(c=>{c.forEach((f,h)=>{o=o.insert(f,h)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,i.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,i,s,r))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Cn.newInvalidDocument(c)))});let a=Xa();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&gl(c.mutation,u,Yn.empty(),Wt.now()),zd(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class S2{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return pe.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:ji(r.createTime)}}(n)),pe.resolve()}getNamedQuery(t,n){return pe.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(r){return{name:r.name,query:g2(r.bundledQuery),readTime:ji(r.readTime)}}(n)),pe.resolve()}}/**
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
 */class C2{constructor(){this.overlays=new Dt(Me.comparator),this.hr=new Map}getOverlay(t,n){return pe.resolve(this.overlays.get(n))}getOverlays(t,n){const i=Cs();return pe.forEach(n,r=>this.getOverlay(t,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(t,n,i){return i.forEach((r,s)=>{this.ht(t,n,s)}),pe.resolve()}removeOverlaysForBatchId(t,n,i){const r=this.hr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(i)),pe.resolve()}getOverlaysForCollection(t,n,i){const r=Cs(),s=n.length+1,o=new Me(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>i&&r.set(l.getKey(),l)}return pe.resolve(r)}getOverlaysForCollectionGroup(t,n,i,r){let s=new Dt((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>i){let c=s.get(u.largestBatchId);c===null&&(c=Cs(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Cs(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=r)););return pe.resolve(a)}ht(t,n,i){const r=this.overlays.get(i.key);if(r!==null){const o=this.hr.get(r.largestBatchId).delete(i.key);this.hr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new qF(n,i));let s=this.hr.get(n);s===void 0&&(s=Qe(),this.hr.set(n,s)),this.hr.set(n,s.add(i.key))}}/**
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
 */class Wg{constructor(){this.Pr=new un(Zt.Ir),this.Tr=new un(Zt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const i=new Zt(t,n);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(t,n){t.forEach(i=>this.addReference(i,n))}removeReference(t,n){this.Ar(new Zt(t,n))}Rr(t,n){t.forEach(i=>this.removeReference(i,n))}Vr(t){const n=new Me(new At([])),i=new Zt(n,t),r=new Zt(n,t+1),s=[];return this.Tr.forEachInRange([i,r],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new Me(new At([])),i=new Zt(n,t),r=new Zt(n,t+1);let s=Qe();return this.Tr.forEachInRange([i,r],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new Zt(t,0),i=this.Pr.firstAfterOrEqual(n);return i!==null&&t.isEqual(i.key)}}class Zt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return Me.comparator(t.key,n.key)||lt(t.pr,n.pr)}static Er(t,n){return lt(t.pr,n.pr)||Me.comparator(t.key,n.key)}}/**
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
 */class E2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new un(Zt.Ir)}checkEmpty(t){return pe.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,i,r){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WF(s,n,i,r);this.mutationQueue.push(o);for(const a of r)this.wr=this.wr.add(new Zt(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return pe.resolve(o)}lookupMutationBatch(t,n){return pe.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const i=n+1,r=this.br(i),s=r<0?0:r;return pe.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return pe.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return pe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const i=new Zt(n,0),r=new Zt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([i,r],o=>{const a=this.Sr(o.pr);s.push(a)}),pe.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let i=new un(lt);return n.forEach(r=>{const s=new Zt(r,0),o=new Zt(r,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{i=i.add(a.pr)})}),pe.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(t,n){const i=n.path,r=i.length+1;let s=i;Me.isDocumentKey(s)||(s=s.child(""));const o=new Zt(new Me(s),0);let a=new un(lt);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!i.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.pr)),!0)},o),pe.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(i=>{const r=this.Sr(i);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){pt(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return pe.forEach(n.mutations,r=>{const s=new Zt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.wr=i})}Mn(t){}containsKey(t,n){const i=new Zt(n,0),r=this.wr.firstAfterOrEqual(i);return pe.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,pe.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class I2{constructor(t){this.vr=t,this.docs=function(){return new Dt(Me.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,o=this.vr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,i.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const i=this.docs.get(n);return pe.resolve(i?i.document.mutableCopy():Cn.newInvalidDocument(n))}getEntries(t,n){let i=mr();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Cn.newInvalidDocument(r))}),pe.resolve(i)}getDocumentsMatchingQuery(t,n,i,r){let s=mr();const o=n.path,a=new Me(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||uF(lF(c),i)<=0||(r.has(c.key)||zd(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return pe.resolve(s)}getAllFromCollectionGroup(t,n,i,r){je()}Fr(t,n){return pe.forEach(this.docs,i=>n(i))}newChangeBuffer(t){return new T2(this)}getSize(t){return pe.resolve(this.size)}}class T2 extends _2{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.ar.addEntry(t,r)):this.ar.removeEntry(i)}),pe.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
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
 */class k2{constructor(t){this.persistence=t,this.Mr=new va(n=>$g(n),Ug),this.lastRemoteSnapshotVersion=ze.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wg,this.targetCount=0,this.Lr=Yo.Nn()}forEachTarget(t,n){return this.Mr.forEach((i,r)=>n(r)),pe.resolve()}getLastRemoteSnapshotVersion(t){return pe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return pe.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),pe.resolve(this.highestTargetId)}setTargetsMetadata(t,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Or&&(this.Or=n),pe.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Yo(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,pe.resolve()}updateTargetData(t,n){return this.qn(n),pe.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,pe.resolve()}removeTargets(t,n,i){let r=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),pe.waitFor(s).next(()=>r)}getTargetCount(t){return pe.resolve(this.targetCount)}getTargetData(t,n){const i=this.Mr.get(n)||null;return pe.resolve(i)}addMatchingKeys(t,n,i){return this.Nr.dr(n,i),pe.resolve()}removeMatchingKeys(t,n,i){this.Nr.Rr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),pe.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),pe.resolve()}getMatchingKeysForTargetId(t,n){const i=this.Nr.gr(n);return pe.resolve(i)}containsKey(t,n){return pe.resolve(this.Nr.containsKey(n))}}/**
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
 */class A2{constructor(t,n){this.Br={},this.overlays={},this.kr=new Mg(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new k2(this),this.indexManager=new y2,this.remoteDocumentCache=function(r){return new I2(r)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new v2(n),this.$r=new S2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new C2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let i=this.Br[t.toKey()];return i||(i=new E2(n,this.referenceDelegate),this.Br[t.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,i){Re("MemoryPersistence","Starting transaction:",t);const r=new P2(this.kr.next());return this.referenceDelegate.Ur(),i(r).next(s=>this.referenceDelegate.Wr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Gr(t,n){return pe.or(Object.values(this.Br).map(i=>()=>i.containsKey(t,n)))}}class P2 extends dF{constructor(t){super(),this.currentSequenceNumber=t}}class qg{constructor(t){this.persistence=t,this.zr=new Wg,this.jr=null}static Hr(t){return new qg(t)}get Jr(){if(this.jr)return this.jr;throw je()}addReference(t,n,i){return this.zr.addReference(i,n),this.Jr.delete(i.toString()),pe.resolve()}removeReference(t,n,i){return this.zr.removeReference(i,n),this.Jr.add(i.toString()),pe.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),pe.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(r=>this.Jr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(s=>this.Jr.add(s.toString()))}).next(()=>i.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pe.forEach(this.Jr,i=>{const r=Me.fromPath(i);return this.Yr(t,r).next(s=>{s||n.removeEntry(r,ze.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(i=>{i?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return pe.or([()=>pe.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
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
 */class Gg{constructor(t,n,i,r){this.targetId=t,this.fromCache=n,this.qi=i,this.Qi=r}static Ki(t,n){let i=Qe(),r=Qe();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Gg(t,n.fromCache,i,r)}}/**
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
 */class x2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class R2{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return PV()?8:fF(ki())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,i,r){const s={result:null};return this.ji(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(t,n,r,i).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new x2;return this.Ji(t,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>s.result)}Yi(t,n,i,r){return i.documentReadCount<this.Wi?(ja()<=Ye.DEBUG&&Re("QueryEngine","SDK will not create cache indexes for query:",Co(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),pe.resolve()):(ja()<=Ye.DEBUG&&Re("QueryEngine","Query:",Co(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Gi*r?(ja()<=Ye.DEBUG&&Re("QueryEngine","The SDK decides to create cache indexes for query:",Co(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Hi(n))):pe.resolve())}ji(t,n){if(uw(n))return pe.resolve(null);let i=Hi(n);return this.indexManager.getIndexType(t,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Om(n,null,"F"),i=Hi(n)),this.indexManager.getDocumentsMatchingTarget(t,i).next(s=>{const o=Qe(...s);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,i).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(t,Om(n,null,"F")):this.es(t,u,n,l)}))})))}Hi(t,n,i,r){return uw(n)||r.isEqual(ze.min())?pe.resolve(null):this.zi.getDocuments(t,i).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,i,r)?pe.resolve(null):(ja()<=Ye.DEBUG&&Re("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Co(n)),this.es(t,o,n,aF(r,-1)).next(a=>a))})}Zi(t,n){let i=new un($I(t));return n.forEach((r,s)=>{zd(t,s)&&(i=i.add(s))}),i}Xi(t,n,i,r){if(t.limit===null)return!1;if(i.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ji(t,n,i){return ja()<=Ye.DEBUG&&Re("QueryEngine","Using full collection scan to execute query:",Co(n)),this.zi.getDocumentsMatchingQuery(t,n,Xr.min(),i)}es(t,n,i,r){return this.zi.getDocumentsMatchingQuery(t,i,r).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class V2{constructor(t,n,i,r){this.persistence=t,this.ts=n,this.serializer=r,this.ns=new Dt(lt),this.rs=new va(s=>$g(s),Ug),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(i)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new w2(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function D2(e,t,n,i){return new V2(e,t,n,i)}async function lT(e,t){const n=We(e);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n._s(t),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const o=[],a=[];let l=Qe();for(const u of r){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(i,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function N2(e,t){const n=We(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=t.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,h=f.keys();let m=pe.resolve();return h.forEach(g=>{m=m.next(()=>c.getEntry(l,g)).next(y=>{const p=u.docVersions.get(g);pt(p!==null),y.version.compareTo(p)<0&&(f.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),c.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,i,t,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(a){let l=Qe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(i,r))})}function uT(e){const t=We(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function O2(e,t){const n=We(e),i=t.snapshotVersion;let r=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});r=n.ns;const a=[];t.targetChanges.forEach((c,f)=>{const h=r.get(f);if(!h)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,f)));let m=h.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(f)!==null?m=m.withResumeToken(xn.EMPTY_BYTE_STRING,ze.min()).withLastLimboFreeSnapshotVersion(ze.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,i)),r=r.insert(f,m),function(y,p,E){return y.resumeToken.approximateByteSize()===0||p.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,m,c)&&a.push(n.Qr.updateTargetData(s,m))});let l=mr(),u=Qe();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(M2(s,o,t.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!i.isEqual(ze.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,i));a.push(c)}return pe.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=r,s))}function M2(e,t,n){let i=Qe(),r=Qe();return n.forEach(s=>i=i.add(s)),t.getEntries(e,i).next(s=>{let o=mr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(ze.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):Re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:r}})}function L2(e,t){const n=We(e);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,t)))}function F2(e,t){const n=We(e);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Qr.getTargetData(i,t).next(s=>s?(r=s,pe.resolve(r)):n.Qr.allocateTargetId(i).next(o=>(r=new Hr(t,o,"TargetPurposeListen",i.currentSequenceNumber),n.Qr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.ns.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(i.targetId,i),n.rs.set(t,i.targetId)),i})}async function $m(e,t,n){const i=We(e),r=i.ns.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,o=>i.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!hu(o))throw o;Re("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}i.ns=i.ns.remove(t),i.rs.delete(r.target)}function bw(e,t,n){const i=We(e);let r=ze.min(),s=Qe();return i.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=We(l),h=f.rs.get(c);return h!==void 0?pe.resolve(f.ns.get(h)):f.Qr.getTargetData(u,c)}(i,o,Hi(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>i.ts.getDocumentsMatchingQuery(o,t,n?r:ze.min(),n?s:Qe())).next(a=>(B2(i,xF(t),a),{documents:a,hs:s})))}function B2(e,t,n){let i=e.ss.get(t)||ze.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),e.ss.set(t,i)}class ww{constructor(){this.activeTargetIds=MF()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class $2{constructor(){this.no=new ww,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,i){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,i){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ww,Promise.resolve()}handleUserChange(t,n,i){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class U2{io(t){}shutdown(){}}/**
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
 */class Sw{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lc=null;function Ch(){return lc===null?lc=function(){return 268435456+Math.round(2147483648*Math.random())}():lc++,"0x"+lc.toString(16)}/**
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
 */const H2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class j2{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
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
 */const pn="WebChannelConnection";class z2 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+n.host,this.So=`projects/${r}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Do(){return!1}Co(n,i,r,s,o){const a=Ch(),l=this.vo(n,i.toUriEncodedString());Re("RestConnection",`Sending RPC '${n}' ${a}:`,l,r);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,s,o),this.Mo(n,l,u,r).then(c=>(Re("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Wo("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",r),c})}xo(n,i,r,s,o,a){return this.Co(n,i,r,s,o)}Fo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ma}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,o)=>n[o]=s),r&&r.headers.forEach((s,o)=>n[o]=s)}vo(n,i){const r=H2[n];return`${this.wo}/v1/${i}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,n,i,r){const s=Ch();return new Promise((o,a)=>{const l=new SI;l.setWithCredentials(!0),l.listenOnce(EI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ec.NO_ERROR:const c=l.getResponseJson();Re(pn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ec.TIMEOUT:Re(pn,`RPC '${t}' ${s} timed out`),a(new Ne(he.DEADLINE_EXCEEDED,"Request time out"));break;case Ec.HTTP_ERROR:const f=l.getStatus();if(Re(pn,`RPC '${t}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const m=h==null?void 0:h.error;if(m&&m.status&&m.message){const g=function(p){const E=p.toLowerCase().replace(/_/g,"-");return Object.values(he).indexOf(E)>=0?E:he.UNKNOWN}(m.status);a(new Ne(g,m.message))}else a(new Ne(he.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Ne(he.UNAVAILABLE,"Connection failed."));break;default:je()}}finally{Re(pn,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(r);Re(pn,`RPC '${t}' ${s} sending request:`,r),l.send(n,"POST",u,i,15)})}Oo(t,n,i){const r=Ch(),s=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=kI(),a=TI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new CI({})),this.Fo(l.initMessageHeaders,n,i),l.encodeInitMessageHeaders=!0;const c=s.join("");Re(pn,`Creating RPC '${t}' stream ${r}: ${c}`,l);const f=o.createWebChannel(c,l);let h=!1,m=!1;const g=new j2({lo:p=>{m?Re(pn,`Not sending because RPC '${t}' stream ${r} is closed:`,p):(h||(Re(pn,`Opening RPC '${t}' stream ${r} transport.`),f.open(),h=!0),Re(pn,`RPC '${t}' stream ${r} sending:`,p),f.send(p))},ho:()=>f.close()}),y=(p,E,P)=>{p.listen(E,V=>{try{P(V)}catch(N){setTimeout(()=>{throw N},0)}})};return y(f,Qa.EventType.OPEN,()=>{m||(Re(pn,`RPC '${t}' stream ${r} transport opened.`),g.mo())}),y(f,Qa.EventType.CLOSE,()=>{m||(m=!0,Re(pn,`RPC '${t}' stream ${r} transport closed`),g.po())}),y(f,Qa.EventType.ERROR,p=>{m||(m=!0,Wo(pn,`RPC '${t}' stream ${r} transport errored:`,p),g.po(new Ne(he.UNAVAILABLE,"The operation could not be completed")))}),y(f,Qa.EventType.MESSAGE,p=>{var E;if(!m){const P=p.data[0];pt(!!P);const V=P,N=V.error||((E=V[0])===null||E===void 0?void 0:E.error);if(N){Re(pn,`RPC '${t}' stream ${r} received error:`,N);const R=N.status;let D=function(b){const C=Ht[b];if(C!==void 0)return JI(C)}(R),S=N.message;D===void 0&&(D=he.INTERNAL,S="Unknown error status: "+R+" with message "+N.message),m=!0,g.po(new Ne(D,S)),f.close()}else Re(pn,`RPC '${t}' stream ${r} received:`,P),g.yo(P)}}),y(a,II.STAT_EVENT,p=>{p.stat===xm.PROXY?Re(pn,`RPC '${t}' stream ${r} detected buffering proxy`):p.stat===xm.NOPROXY&&Re(pn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function Eh(){return typeof document<"u"?document:null}/**
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
 */function Yd(e){return new t2(e,!0)}/**
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
 */class cT{constructor(t,n,i=1e3,r=1.5,s=6e4){this.oi=t,this.timerId=n,this.No=i,this.Lo=r,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const n=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),r=Math.max(0,n-i);r>0&&Re("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class dT{constructor(t,n,i,r,s,o,a,l){this.oi=t,this.Go=i,this.zo=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new cT(t,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():n&&n.code===he.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===he.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(n)}__(){}auth(){this.state=1;const t=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.jo===n&&this.u_(i,r)},i=>{t(()=>{const r=new Ne(he.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(r)})})}u_(t,n){const i=this.a_(this.jo);this.stream=this.l_(t,n),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(r=>{i(()=>this.c_(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return Re("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return n=>{this.oi.enqueueAndForget(()=>this.jo===t?n():(Re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class W2 extends dT{constructor(t,n,i,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s}l_(t,n){return this.connection.Oo("Listen",t,n)}onMessage(t){this.Yo.reset();const n=r2(this.serializer,t),i=function(s){if(!("targetChange"in s))return ze.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ze.min():o.readTime?ji(o.readTime):ze.min()}(t);return this.listener.h_(n,i)}P_(t){const n={};n.database=Bm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Nm(l)?{documents:a2(s,l)}:{query:l2(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=tT(s,o.resumeToken);const u=Mm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ze.min())>0){a.readTime=od(s,o.snapshotVersion.toTimestamp());const u=Mm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const i=c2(this.serializer,t);i&&(n.labels=i),this.i_(n)}I_(t){const n={};n.database=Bm(this.serializer),n.removeTarget=t,this.i_(n)}}class q2 extends dT{constructor(t,n,i,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,n){return this.connection.Oo("Write",t,n)}onMessage(t){if(pt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const n=o2(t.writeResults,t.commitTime),i=ji(t.commitTime);return this.listener.A_(i,n)}return pt(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Bm(this.serializer),this.i_(t)}d_(t){const n={streamToken:this.lastStreamToken,writes:t.map(i=>s2(this.serializer,i))};this.i_(n)}}/**
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
 */class G2 extends class{}{constructor(t,n,i,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.m_=!1}f_(){if(this.m_)throw new Ne(he.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,n,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,Lm(n,i),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===he.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Ne(he.UNKNOWN,s.toString())})}xo(t,n,i,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(t,Lm(n,i),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===he.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Ne(he.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class K2{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(hr(n),this.y_=!1):Re("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class Y2{constructor(t,n,i,r,s){this.localStore=t,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{i.enqueueAndForget(async()=>{Zs(this)&&(Re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=We(l);u.M_.add(4),await gu(u),u.N_.set("Unknown"),u.M_.delete(4),await Qd(u)}(this))})}),this.N_=new K2(i,r)}}async function Qd(e){if(Zs(e))for(const t of e.x_)await t(!0)}async function gu(e){for(const t of e.x_)await t(!1)}function fT(e,t){const n=We(e);n.F_.has(t.targetId)||(n.F_.set(t.targetId,t),Xg(n)?Qg(n):ga(n).Xo()&&Yg(n,t))}function Kg(e,t){const n=We(e),i=ga(n);n.F_.delete(t),i.Xo()&&hT(n,t),n.F_.size===0&&(i.Xo()?i.n_():Zs(n)&&n.N_.set("Unknown"))}function Yg(e,t){if(e.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ze.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ga(e).P_(t)}function hT(e,t){e.L_.xe(t),ga(e).I_(t)}function Qg(e){e.L_=new XF({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>e.F_.get(t)||null,tt:()=>e.datastore.serializer.databaseId}),ga(e).start(),e.N_.w_()}function Xg(e){return Zs(e)&&!ga(e).Zo()&&e.F_.size>0}function Zs(e){return We(e).M_.size===0}function mT(e){e.L_=void 0}async function Q2(e){e.N_.set("Online")}async function X2(e){e.F_.forEach((t,n)=>{Yg(e,t)})}async function J2(e,t){mT(e),Xg(e)?(e.N_.D_(t),Qg(e)):e.N_.set("Unknown")}async function Z2(e,t,n){if(e.N_.set("Online"),t instanceof eT&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.F_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.F_.delete(a),r.L_.removeTarget(a))}(e,t)}catch(i){Re("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),i),await ad(e,i)}else if(t instanceof kc?e.L_.Ke(t):t instanceof ZI?e.L_.He(t):e.L_.We(t),!n.isEqual(ze.min()))try{const i=await uT(e.localStore);n.compareTo(i)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.F_.get(u);c&&s.F_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.F_.get(l);if(!c)return;s.F_.set(l,c.withResumeToken(xn.EMPTY_BYTE_STRING,c.snapshotVersion)),hT(s,l);const f=new Hr(c.target,l,u,c.sequenceNumber);Yg(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(i){Re("RemoteStore","Failed to raise snapshot:",i),await ad(e,i)}}async function ad(e,t,n){if(!hu(t))throw t;e.M_.add(1),await gu(e),e.N_.set("Offline"),n||(n=()=>uT(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Re("RemoteStore","Retrying IndexedDB access"),await n(),e.M_.delete(1),await Qd(e)})}function vT(e,t){return t().catch(n=>ad(e,n,t))}async function Xd(e){const t=We(e),n=Zr(t);let i=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;eB(t);)try{const r=await L2(t.localStore,i);if(r===null){t.v_.length===0&&n.n_();break}i=r.batchId,tB(t,r)}catch(r){await ad(t,r)}gT(t)&&yT(t)}function eB(e){return Zs(e)&&e.v_.length<10}function tB(e,t){e.v_.push(t);const n=Zr(e);n.Xo()&&n.E_&&n.d_(t.mutations)}function gT(e){return Zs(e)&&!Zr(e).Zo()&&e.v_.length>0}function yT(e){Zr(e).start()}async function nB(e){Zr(e).V_()}async function iB(e){const t=Zr(e);for(const n of e.v_)t.d_(n.mutations)}async function rB(e,t,n){const i=e.v_.shift(),r=Hg.from(i,t,n);await vT(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await Xd(e)}async function sB(e,t){t&&Zr(e).E_&&await async function(i,r){if(function(o){return KF(o)&&o!==he.ABORTED}(r.code)){const s=i.v_.shift();Zr(i).t_(),await vT(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Xd(i)}}(e,t),gT(e)&&yT(e)}async function Cw(e,t){const n=We(e);n.asyncQueue.verifyOperationInProgress(),Re("RemoteStore","RemoteStore received new credentials");const i=Zs(n);n.M_.add(3),await gu(n),i&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.M_.delete(3),await Qd(n)}async function oB(e,t){const n=We(e);t?(n.M_.delete(2),await Qd(n)):t||(n.M_.add(2),await gu(n),n.N_.set("Unknown"))}function ga(e){return e.B_||(e.B_=function(n,i,r){const s=We(n);return s.f_(),new W2(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Po:Q2.bind(null,e),To:X2.bind(null,e),Ao:J2.bind(null,e),h_:Z2.bind(null,e)}),e.x_.push(async t=>{t?(e.B_.t_(),Xg(e)?Qg(e):e.N_.set("Unknown")):(await e.B_.stop(),mT(e))})),e.B_}function Zr(e){return e.k_||(e.k_=function(n,i,r){const s=We(n);return s.f_(),new q2(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(e.datastore,e.asyncQueue,{Po:()=>Promise.resolve(),To:nB.bind(null,e),Ao:sB.bind(null,e),R_:iB.bind(null,e),A_:rB.bind(null,e)}),e.x_.push(async t=>{t?(e.k_.t_(),await Xd(e)):(await e.k_.stop(),e.v_.length>0&&(Re("RemoteStore",`Stopping write stream with ${e.v_.length} pending writes`),e.v_=[]))})),e.k_}/**
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
 */class Jg{constructor(t,n,i,r,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new dr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,i,r,s){const o=Date.now()+i,a=new Jg(t,n,o,r,s);return a.start(i),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ne(he.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zg(e,t){if(hr("AsyncQueue",`${t}: ${e}`),hu(e))return new Ne(he.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class Bo{constructor(t){this.comparator=t?(n,i)=>t(n,i)||Me.comparator(n.key,i.key):(n,i)=>Me.comparator(n.key,i.key),this.keyedMap=Xa(),this.sortedSet=new Dt(this.comparator)}static emptySet(t){return new Bo(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,i)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Bo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),i=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const i=new Bo;return i.comparator=this.comparator,i.keyedMap=t,i.sortedSet=n,i}}/**
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
 */class Ew{constructor(){this.q_=new Dt(Me.comparator)}track(t){const n=t.doc.key,i=this.q_.get(n);i?t.type!==0&&i.type===3?this.q_=this.q_.insert(n,t):t.type===3&&i.type!==1?this.q_=this.q_.insert(n,{type:i.type,doc:t.doc}):t.type===2&&i.type===2?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):t.type===2&&i.type===0?this.q_=this.q_.insert(n,{type:0,doc:t.doc}):t.type===1&&i.type===0?this.q_=this.q_.remove(n):t.type===1&&i.type===2?this.q_=this.q_.insert(n,{type:1,doc:i.doc}):t.type===0&&i.type===1?this.q_=this.q_.insert(n,{type:2,doc:t.doc}):je():this.q_=this.q_.insert(n,t)}Q_(){const t=[];return this.q_.inorderTraversal((n,i)=>{t.push(i)}),t}}class Qo{constructor(t,n,i,r,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,i,r,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qo(t,n,Bo.emptySet(n),o,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jd(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,i=t.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class aB{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class lB{constructor(){this.queries=new va(t=>BI(t),jd),this.onlineState="Unknown",this.z_=new Set}}async function ey(e,t){const n=We(e);let i=3;const r=t.query;let s=n.queries.get(r);s?!s.W_()&&t.G_()&&(i=2):(s=new aB,i=t.G_()?0:1);try{switch(i){case 0:s.K_=await n.onListen(r,!0);break;case 1:s.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=Zg(o,`Initialization of query '${Co(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.U_.push(t),t.j_(n.onlineState),s.K_&&t.H_(s.K_)&&ny(n)}async function ty(e,t){const n=We(e),i=t.query;let r=3;const s=n.queries.get(i);if(s){const o=s.U_.indexOf(t);o>=0&&(s.U_.splice(o,1),s.U_.length===0?r=t.G_()?0:1:!s.W_()&&t.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function uB(e,t){const n=We(e);let i=!1;for(const r of t){const s=r.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(r)&&(i=!0);o.K_=r}}i&&ny(n)}function cB(e,t,n){const i=We(e),r=i.queries.get(t);if(r)for(const s of r.U_)s.onError(n);i.queries.delete(t)}function ny(e){e.z_.forEach(t=>{t.next()})}var Um,Iw;(Iw=Um||(Um={})).J_="default",Iw.Cache="cache";class iy{constructor(t,n,i){this.query=t,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(t){if(!this.options.includeMetadataChanges){const i=[];for(const r of t.docChanges)r.type!==3&&i.push(r);t=new Qo(t.query,t.docs,t.oldDocs,i,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),n=!0):this.ta(t,this.onlineState)&&(this.na(t),n=!0),this.X_=t,n}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),n=!0),n}ta(t,n){if(!t.fromCache||!this.G_())return!0;const i=n!=="Offline";return(!this.options.ra||!i)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(t){t=Qo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==Um.Cache}}/**
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
 */class pT{constructor(t){this.key=t}}class _T{constructor(t){this.key=t}}class dB{constructor(t,n){this.query=t,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Qe(),this.mutatedKeys=Qe(),this.Ia=$I(t),this.Ta=new Bo(this.Ia)}get Ea(){return this.la}da(t,n){const i=n?n.Aa:new Ew,r=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((c,f)=>{const h=r.get(c),m=zd(this.query,f)?f:null,g=!!h&&this.mutatedKeys.has(h.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let p=!1;h&&m?h.data.isEqual(m.data)?g!==y&&(i.track({type:3,doc:m}),p=!0):this.Ra(h,m)||(i.track({type:2,doc:m}),p=!0,(l&&this.Ia(m,l)>0||u&&this.Ia(m,u)<0)&&(a=!0)):!h&&m?(i.track({type:0,doc:m}),p=!0):h&&!m&&(i.track({type:1,doc:h}),p=!0,(l||u)&&(a=!0)),p&&(m?(o=o.add(m),s=y?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),i.track({type:1,doc:c})}return{Ta:o,Aa:i,Xi:a,mutatedKeys:s}}Ra(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,i,r){const s=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const o=t.Aa.Q_();o.sort((c,f)=>function(m,g){const y=p=>{switch(p){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return je()}};return y(m)-y(g)}(c.type,f.type)||this.Ia(c.doc,f.doc)),this.Va(i),r=r!=null&&r;const a=n&&!r?this.ma():[],l=this.Pa.size===0&&this.current&&!r?1:0,u=l!==this.ha;return this.ha=l,o.length!==0||u?{snapshot:new Qo(this.query,t.Ta,s,o,t.mutatedKeys,l===0,u,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Ew,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(n=>this.la=this.la.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=Qe(),this.Ta.forEach(i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))});const n=[];return t.forEach(i=>{this.Pa.has(i)||n.push(new _T(i))}),this.Pa.forEach(i=>{t.has(i)||n.push(new pT(i))}),n}pa(t){this.la=t.hs,this.Pa=Qe();const n=this.da(t.documents);return this.applyChanges(n,!0)}ya(){return Qo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class fB{constructor(t,n,i){this.query=t,this.targetId=n,this.view=i}}class hB{constructor(t){this.key=t,this.wa=!1}}class mB{constructor(t,n,i,r,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new va(a=>BI(a),jd),this.Da=new Map,this.Ca=new Set,this.va=new Dt(Me.comparator),this.Fa=new Map,this.Ma=new Wg,this.xa={},this.Oa=new Map,this.Na=Yo.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function vB(e,t,n=!0){const i=IT(e);let r;const s=i.ba.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await bT(i,t,n,!0),r}async function gB(e,t){const n=IT(e);await bT(n,t,!0,!1)}async function bT(e,t,n,i){const r=await F2(e.localStore,Hi(t)),s=r.targetId,o=n?e.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return i&&(a=await yB(e,t,s,o==="current",r.resumeToken)),e.isPrimaryClient&&n&&fT(e.remoteStore,r),a}async function yB(e,t,n,i,r){e.Ba=(f,h,m)=>async function(y,p,E,P){let V=p.view.da(E);V.Xi&&(V=await bw(y.localStore,p.query,!1).then(({documents:S})=>p.view.da(S,V)));const N=P&&P.targetChanges.get(p.targetId),R=P&&P.targetMismatches.get(p.targetId)!=null,D=p.view.applyChanges(V,y.isPrimaryClient,N,R);return kw(y,p.targetId,D.fa),D.snapshot}(e,f,h,m);const s=await bw(e.localStore,t,!0),o=new dB(t,s.hs),a=o.da(s.documents),l=vu.createSynthesizedTargetChangeForCurrentChange(n,i&&e.onlineState!=="Offline",r),u=o.applyChanges(a,e.isPrimaryClient,l);kw(e,n,u.fa);const c=new fB(t,n,o);return e.ba.set(t,c),e.Da.has(n)?e.Da.get(n).push(t):e.Da.set(n,[t]),u.snapshot}async function pB(e,t,n){const i=We(e),r=i.ba.get(t),s=i.Da.get(r.targetId);if(s.length>1)return i.Da.set(r.targetId,s.filter(o=>!jd(o,t))),void i.ba.delete(t);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await $m(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&Kg(i.remoteStore,r.targetId),Hm(i,r.targetId)}).catch(fu)):(Hm(i,r.targetId),await $m(i.localStore,r.targetId,!0))}async function _B(e,t){const n=We(e),i=n.ba.get(t),r=n.Da.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),Kg(n.remoteStore,i.targetId))}async function bB(e,t,n){const i=kB(e);try{const r=await function(o,a){const l=We(o),u=Wt.now(),c=a.reduce((m,g)=>m.add(g.key),Qe());let f,h;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let g=mr(),y=Qe();return l.os.getEntries(m,c).next(p=>{g=p,g.forEach((E,P)=>{P.isValidDocument()||(y=y.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,g)).next(p=>{f=p;const E=[];for(const P of a){const V=jF(P,f.get(P.key).overlayedDocument);V!=null&&E.push(new ns(P.key,V,VI(V.value.mapValue),$n.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,E,a)}).next(p=>{h=p;const E=p.applyToLocalDocumentSet(f,y);return l.documentOverlayCache.saveOverlays(m,p.batchId,E)})}).then(()=>({batchId:h.batchId,changes:HI(f)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.xa[o.currentUser.toKey()];u||(u=new Dt(lt)),u=u.insert(a,l),o.xa[o.currentUser.toKey()]=u}(i,r.batchId,n),await yu(i,r.changes),await Xd(i.remoteStore)}catch(r){const s=Zg(r,"Failed to persist write");n.reject(s)}}async function wT(e,t){const n=We(e);try{const i=await O2(n.localStore,t);t.targetChanges.forEach((r,s)=>{const o=n.Fa.get(s);o&&(pt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.wa=!0:r.modifiedDocuments.size>0?pt(o.wa):r.removedDocuments.size>0&&(pt(o.wa),o.wa=!1))}),await yu(n,i,t)}catch(i){await fu(i)}}function Tw(e,t,n){const i=We(e);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.ba.forEach((s,o)=>{const a=o.view.j_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=We(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const h of f.U_)h.j_(a)&&(u=!0)}),u&&ny(l)}(i.eventManager,t),r.length&&i.Sa.h_(r),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function wB(e,t,n){const i=We(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.Fa.get(t),s=r&&r.key;if(s){let o=new Dt(Me.comparator);o=o.insert(s,Cn.newNoDocument(s,ze.min()));const a=Qe().add(s),l=new Kd(ze.min(),new Map,new Dt(lt),o,a);await wT(i,l),i.va=i.va.remove(s),i.Fa.delete(t),ry(i)}else await $m(i.localStore,t,!1).then(()=>Hm(i,t,n)).catch(fu)}async function SB(e,t){const n=We(e),i=t.batch.batchId;try{const r=await N2(n.localStore,t);CT(n,i,null),ST(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await yu(n,r)}catch(r){await fu(r)}}async function CB(e,t,n){const i=We(e);try{const r=await function(o,a){const l=We(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(pt(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(i.localStore,t);CT(i,t,n),ST(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await yu(i,r)}catch(r){await fu(r)}}function ST(e,t){(e.Oa.get(t)||[]).forEach(n=>{n.resolve()}),e.Oa.delete(t)}function CT(e,t,n){const i=We(e);let r=i.xa[i.currentUser.toKey()];if(r){const s=r.get(t);s&&(n?s.reject(n):s.resolve(),r=r.remove(t)),i.xa[i.currentUser.toKey()]=r}}function Hm(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.Da.get(t))e.ba.delete(i),n&&e.Sa.ka(i,n);e.Da.delete(t),e.isPrimaryClient&&e.Ma.Vr(t).forEach(i=>{e.Ma.containsKey(i)||ET(e,i)})}function ET(e,t){e.Ca.delete(t.path.canonicalString());const n=e.va.get(t);n!==null&&(Kg(e.remoteStore,n),e.va=e.va.remove(t),e.Fa.delete(n),ry(e))}function kw(e,t,n){for(const i of n)i instanceof pT?(e.Ma.addReference(i.key,t),EB(e,i)):i instanceof _T?(Re("SyncEngine","Document no longer in limbo: "+i.key),e.Ma.removeReference(i.key,t),e.Ma.containsKey(i.key)||ET(e,i.key)):je()}function EB(e,t){const n=t.key,i=n.path.canonicalString();e.va.get(n)||e.Ca.has(i)||(Re("SyncEngine","New document in limbo: "+n),e.Ca.add(i),ry(e))}function ry(e){for(;e.Ca.size>0&&e.va.size<e.maxConcurrentLimboResolutions;){const t=e.Ca.values().next().value;e.Ca.delete(t);const n=new Me(At.fromString(t)),i=e.Na.next();e.Fa.set(i,new hB(n)),e.va=e.va.insert(n,i),fT(e.remoteStore,new Hr(Hi(Hd(n.path)),i,"TargetPurposeLimboResolution",Mg.oe))}}async function yu(e,t,n){const i=We(e),r=[],s=[],o=[];i.ba.isEmpty()||(i.ba.forEach((a,l)=>{o.push(i.Ba(l,t,n).then(u=>{if((u||n)&&i.isPrimaryClient){const c=u&&!u.fromCache;i.sharedClientState.updateQueryState(l.targetId,c?"current":"not-current")}if(u){r.push(u);const c=Gg.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),i.Sa.h_(r),await async function(l,u){const c=We(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>pe.forEach(u,h=>pe.forEach(h.qi,m=>c.persistence.referenceDelegate.addReference(f,h.targetId,m)).next(()=>pe.forEach(h.Qi,m=>c.persistence.referenceDelegate.removeReference(f,h.targetId,m)))))}catch(f){if(!hu(f))throw f;Re("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const h=f.targetId;if(!f.fromCache){const m=c.ns.get(h),g=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(g);c.ns=c.ns.insert(h,y)}}}(i.localStore,s))}async function IB(e,t){const n=We(e);if(!n.currentUser.isEqual(t)){Re("SyncEngine","User change. New user:",t.toKey());const i=await lT(n.localStore,t);n.currentUser=t,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new Ne(he.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,i.removedBatchIds,i.addedBatchIds),await yu(n,i.us)}}function TB(e,t){const n=We(e),i=n.Fa.get(t);if(i&&i.wa)return Qe().add(i.key);{let r=Qe();const s=n.Da.get(t);if(!s)return r;for(const o of s){const a=n.ba.get(o);r=r.unionWith(a.view.Ea)}return r}}function IT(e){const t=We(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=wT.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=TB.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=wB.bind(null,t),t.Sa.h_=uB.bind(null,t.eventManager),t.Sa.ka=cB.bind(null,t.eventManager),t}function kB(e){const t=We(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=SB.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=CB.bind(null,t),t}class Aw{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Yd(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return D2(this.persistence,new R2,t.initialUser,this.serializer)}createPersistence(t){return new A2(qg.Hr,this.serializer)}createSharedClientState(t){return new $2}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AB{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>Tw(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=IB.bind(null,this.syncEngine),await oB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new lB}()}createDatastore(t){const n=Yd(t.databaseInfo.databaseId),i=function(s){return new z2(s)}(t.databaseInfo);return function(s,o,a,l){return new G2(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,i,n)}createRemoteStore(t){return function(i,r,s,o,a){return new Y2(i,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Tw(this.syncEngine,n,0),function(){return Sw.D()?new Sw:new U2}())}createSyncEngine(t,n){return function(r,s,o,a,l,u,c){const f=new mB(r,s,o,a,l,u);return c&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(i){const r=We(i);Re("RemoteStore","RemoteStore shutting down."),r.M_.add(5),await gu(r),r.O_.shutdown(),r.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
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
 */class sy{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):hr("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
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
 */class PB{constructor(t,n,i,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=bn.UNAUTHENTICATED,this.clientId=PI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{Re("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(Re("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ne(he.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new dr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const i=Zg(n,"Failed to shutdown persistence");t.reject(i)}}),t.promise}}async function Ih(e,t){e.asyncQueue.verifyOperationInProgress(),Re("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener(async r=>{i.isEqual(r)||(await lT(t.localStore,r),i=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Pw(e,t){e.asyncQueue.verifyOperationInProgress();const n=await RB(e);Re("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(i=>Cw(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>Cw(t.remoteStore,r)),e._onlineComponents=t}function xB(e){return e.name==="FirebaseError"?e.code===he.FAILED_PRECONDITION||e.code===he.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function RB(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ih(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!xB(n))throw n;Wo("Error using user provided cache. Falling back to memory cache: "+n),await Ih(e,new Aw)}}else Re("FirestoreClient","Using default OfflineComponentProvider"),await Ih(e,new Aw);return e._offlineComponents}async function TT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Re("FirestoreClient","Using user provided OnlineComponentProvider"),await Pw(e,e._uninitializedComponentsProvider._online)):(Re("FirestoreClient","Using default OnlineComponentProvider"),await Pw(e,new AB))),e._onlineComponents}function VB(e){return TT(e).then(t=>t.syncEngine)}async function ld(e){const t=await TT(e),n=t.eventManager;return n.onListen=vB.bind(null,t.syncEngine),n.onUnlisten=pB.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=gB.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=_B.bind(null,t.syncEngine),n}function DB(e,t,n={}){const i=new dr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new sy({next:h=>{o.enqueueAndForget(()=>ty(s,f));const m=h.docs.has(a);!m&&h.fromCache?u.reject(new Ne(he.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&h.fromCache&&l&&l.source==="server"?u.reject(new Ne(he.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new iy(Hd(a.path),c,{includeMetadataChanges:!0,ra:!0});return ey(s,f)}(await ld(e),e.asyncQueue,t,n,i)),i.promise}function NB(e,t,n={}){const i=new dr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new sy({next:h=>{o.enqueueAndForget(()=>ty(s,f)),h.fromCache&&l.source==="server"?u.reject(new Ne(he.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),f=new iy(a,c,{includeMetadataChanges:!0,ra:!0});return ey(s,f)}(await ld(e),e.asyncQueue,t,n,i)),i.promise}/**
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
 */function kT(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
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
 */const xw=new Map;/**
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
 */function AT(e,t,n){if(!n)throw new Ne(he.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function OB(e,t,n,i){if(t===!0&&i===!0)throw new Ne(he.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Rw(e){if(!Me.isDocumentKey(e))throw new Ne(he.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Vw(e){if(Me.isDocumentKey(e))throw new Ne(he.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oy(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(i){return i.constructor?i.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":je()}function Un(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ne(he.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oy(e);throw new Ne(he.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
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
 */class Dw{constructor(t){var n,i;if(t.host===void 0){if(t.ssl!==void 0)throw new Ne(he.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ne(he.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}OB("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kT((i=t.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ne(he.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ne(he.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ne(he.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Jd{constructor(t,n,i,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dw({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ne(he.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ne(he.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dw(t),t.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new JL;switch(i.type){case"firstParty":return new nF(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new Ne(he.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=xw.get(n);i&&(Re("ComponentProvider","Removing Datastore"),xw.delete(n),i.terminate())}(this),Promise.resolve()}}function MB(e,t,n,i={}){var r;const s=(e=Un(e,Jd))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Wo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),i.mockUserToken){let a,l;if(typeof i.mockUserToken=="string")a=i.mockUserToken,l=bn.MOCK_USER;else{a=TV(i.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const u=i.mockUserToken.sub||i.mockUserToken.user_id;if(!u)throw new Ne(he.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new bn(u)}e._authCredentials=new ZL(new AI(a,l))}}/**
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
 */class pu{constructor(t,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=t}withConverter(t){return new pu(this.firestore,t,this._query)}}class Ln{constructor(t,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ln(this.firestore,t,this._key)}}class Kr extends pu{constructor(t,n,i){super(t,n,Hd(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ln(this.firestore,null,new Me(t))}withConverter(t){return new Kr(this.firestore,t,this._path)}}function $W(e,t,...n){if(e=Pn(e),AT("collection","path",t),e instanceof Jd){const i=At.fromString(t,...n);return Vw(i),new Kr(e,null,i)}{if(!(e instanceof Ln||e instanceof Kr))throw new Ne(he.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(At.fromString(t,...n));return Vw(i),new Kr(e.firestore,null,i)}}function Nw(e,t,...n){if(e=Pn(e),arguments.length===1&&(t=PI.newId()),AT("doc","path",t),e instanceof Jd){const i=At.fromString(t,...n);return Rw(i),new Ln(e,null,new Me(i))}{if(!(e instanceof Ln||e instanceof Kr))throw new Ne(he.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(At.fromString(t,...n));return Rw(i),new Ln(e.firestore,e instanceof Kr?e.converter:null,new Me(i))}}/**
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
 */class LB{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new cT(this,"async_queue_retry"),this.hu=()=>{const n=Eh();n&&Re("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const t=Eh();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const n=Eh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new dr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!hu(t))throw t;Re("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const n=this.iu.then(()=>(this.uu=!0,t().catch(i=>{this.au=i,this.uu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(i);throw hr("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.uu=!1,i))));return this.iu=n,n}enqueueAfterDelay(t,n,i){this.Pu(),this.lu.indexOf(t)>-1&&(n=0);const r=Jg.createAndSchedule(this,t,n,i,s=>this.Eu(s));return this._u.push(r),r}Pu(){this.au&&je()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const n of this._u)if(n.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this._u)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const n=this._u.indexOf(t);this._u.splice(n,1)}}function Ow(e){return function(n,i){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(e,["next","error","complete"])}class vr extends Jd{constructor(t,n,i,r){super(t,n,i,r),this.type="firestore",this._queue=function(){return new LB}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||PT(this),this._firestoreClient.terminate()}}function FB(e,t){const n=typeof e=="object"?e:jC(),i=typeof e=="string"?e:"(default)",r=LD(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const s=EV("firestore");s&&MB(r,...s)}return r}function _u(e){return e._firestoreClient||PT(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function PT(e){var t,n,i;const r=e._freezeSettings(),s=function(a,l,u,c){return new vF(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,kT(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new PB(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class Xo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Xo(xn.fromBase64String(t))}catch(n){throw new Ne(he.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Xo(xn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class bu{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new Ne(he.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ln(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ay{constructor(t){this._methodName=t}}/**
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
 */class Zd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new Ne(he.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new Ne(he.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return lt(this._lat,t._lat)||lt(this._long,t._long)}}/**
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
 */const BB=/^__.*__$/;class $B{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return this.fieldMask!==null?new ns(t,this.data,this.fieldMask,n,this.fieldTransforms):new mu(t,this.data,n,this.fieldTransforms)}}class xT{constructor(t,n,i){this.data=t,this.fieldMask=n,this.fieldTransforms=i}toMutation(t,n){return new ns(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function RT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw je()}}class ly{constructor(t,n,i,r,s,o){this.settings=t,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ly(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.gu({path:i,yu:!1});return r.wu(t),r}Su(t){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.gu({path:i,yu:!1});return r.mu(),r}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return ud(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(RT(this.fu)&&BB.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class UB{constructor(t,n,i){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=i||Yd(t)}Fu(t,n,i,r=!1){return new ly({fu:t,methodName:n,vu:i,path:ln.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uy(e){const t=e._freezeSettings(),n=Yd(e._databaseId);return new UB(e._databaseId,!!t.ignoreUndefinedProperties,n)}function VT(e,t,n,i,r,s={}){const o=e.Fu(s.merge||s.mergeFields?2:0,t,n,r);cy("Data must be an object, but it was:",o,i);const a=OT(i,o);let l,u;if(s.merge)l=new Yn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const h=jm(t,f,n);if(!o.contains(h))throw new Ne(he.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);LT(c,h)||c.push(h)}l=new Yn(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new $B(new Bn(a),l,u)}class ef extends ay{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ef}}function DT(e,t,n,i){const r=e.Fu(1,t,n);cy("Data must be an object, but it was:",r,i);const s=[],o=Bn.empty();Js(i,(l,u)=>{const c=dy(t,l,n);u=Pn(u);const f=r.Su(c);if(u instanceof ef)s.push(c);else{const h=tf(u,f);h!=null&&(s.push(c),o.set(c,h))}});const a=new Yn(s);return new xT(o,a,r.fieldTransforms)}function NT(e,t,n,i,r,s){const o=e.Fu(1,t,n),a=[jm(t,i,n)],l=[r];if(s.length%2!=0)throw new Ne(he.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(jm(t,s[h])),l.push(s[h+1]);const u=[],c=Bn.empty();for(let h=a.length-1;h>=0;--h)if(!LT(u,a[h])){const m=a[h];let g=l[h];g=Pn(g);const y=o.Su(m);if(g instanceof ef)u.push(m);else{const p=tf(g,y);p!=null&&(u.push(m),c.set(m,p))}}const f=new Yn(u);return new xT(c,f,o.fieldTransforms)}function tf(e,t){if(MT(e=Pn(e)))return cy("Unsupported field value:",t,e),OT(e,t);if(e instanceof ay)return function(i,r){if(!RT(r.fu))throw r.Du(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Du(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(i,r){const s=[];let o=0;for(const a of i){let l=tf(a,r.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(i,r){if((i=Pn(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return LF(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=Wt.fromDate(i);return{timestampValue:od(r.serializer,s)}}if(i instanceof Wt){const s=new Wt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:od(r.serializer,s)}}if(i instanceof Zd)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Xo)return{bytesValue:tT(r.serializer,i._byteString)};if(i instanceof Ln){const s=r.databaseId,o=i.firestore._databaseId;if(!o.isEqual(s))throw r.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:zg(i.firestore._databaseId||r.databaseId,i._key.path)}}throw r.Du(`Unsupported field value: ${oy(i)}`)}(e,t)}function OT(e,t){const n={};return xI(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Js(e,(i,r)=>{const s=tf(r,t.pu(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function MT(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Wt||e instanceof Zd||e instanceof Xo||e instanceof Ln||e instanceof ay)}function cy(e,t,n){if(!MT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=oy(n);throw i==="an object"?t.Du(e+" a custom object"):t.Du(e+" "+i)}}function jm(e,t,n){if((t=Pn(t))instanceof bu)return t._internalPath;if(typeof t=="string")return dy(e,t);throw ud("Field path arguments must be of type string or ",e,!1,void 0,n)}const HB=new RegExp("[~\\*/\\[\\]]");function dy(e,t,n){if(t.search(HB)>=0)throw ud(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bu(...t.split("."))._internalPath}catch{throw ud(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function ud(e,t,n,i,r){const s=i&&!i.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${i}`),o&&(l+=` in document ${r}`),l+=")"),new Ne(he.INVALID_ARGUMENT,a+e+l)}function LT(e,t){return e.some(n=>n.isEqual(t))}/**
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
 */class FT{constructor(t,n,i,r,s){this._firestore=t,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new jB(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(BT("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jB extends FT{data(){return super.data()}}function BT(e,t){return typeof t=="string"?dy(e,t):t instanceof bu?t._internalPath:t._delegate._internalPath}/**
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
 */function $T(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Ne(he.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zB{convertValue(t,n="none"){switch(Bs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return jt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Fs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw je()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const i={};return Js(t,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(t){return new Zd(jt(t.latitude),jt(t.longitude))}convertArray(t,n){return(t.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(t,n){switch(n){case"previous":const i=Fg(t);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Dl(t));default:return null}}convertTimestamp(t){const n=Jr(t);return new Wt(n.seconds,n.nanos)}convertDocumentKey(t,n){const i=At.fromString(t);pt(aT(i));const r=new Nl(i.get(1),i.get(3)),s=new Me(i.popFirst(5));return r.isEqual(n)||hr(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function UT(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}/**
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
 */class Za{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class HT extends FT{constructor(t,n,i,r,s,o){super(t,n,i,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const i=this._document.data.field(BT("DocumentSnapshot.get",t));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}}class Ac extends HT{data(t={}){return super.data(t)}}class jT{constructor(t,n,i,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new Za(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(i=>{t.call(n,new Ac(this._firestore,this._userDataWriter,i.key,i,new Za(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Ne(he.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new Ac(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Za(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Ac(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Za(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:WB(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function WB(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return je()}}/**
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
 */function zT(e){e=Un(e,Ln);const t=Un(e.firestore,vr);return DB(_u(t),e._key).then(n=>WT(t,e,n))}class fy extends zB{constructor(t){super(),this.firestore=t}convertBytes(t){return new Xo(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ln(this.firestore,null,n)}}function qB(e){e=Un(e,pu);const t=Un(e.firestore,vr),n=_u(t),i=new fy(t);return $T(e._query),NB(n,e._query).then(r=>new jT(t,i,e,r))}function GB(e,t,n){e=Un(e,Ln);const i=Un(e.firestore,vr),r=UT(e.converter,t,n);return nf(i,[VT(uy(i),"setDoc",e._key,r,e.converter!==null,n).toMutation(e._key,$n.none())])}function UW(e,t,n,...i){e=Un(e,Ln);const r=Un(e.firestore,vr),s=uy(r);let o;return o=typeof(t=Pn(t))=="string"||t instanceof bu?NT(s,"updateDoc",e._key,t,n,i):DT(s,"updateDoc",e._key,t),nf(r,[o.toMutation(e._key,$n.exists(!0))])}function HW(e){return nf(Un(e.firestore,vr),[new Gd(e._key,$n.none())])}function hy(e,...t){var n,i,r;e=Pn(e);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||Ow(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ow(t[o])){const f=t[o];t[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),t[o+1]=(i=f.error)===null||i===void 0?void 0:i.bind(f),t[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let l,u,c;if(e instanceof Ln)u=Un(e.firestore,vr),c=Hd(e._key.path),l={next:f=>{t[o]&&t[o](WT(u,e,f))},error:t[o+1],complete:t[o+2]};else{const f=Un(e,pu);u=Un(f.firestore,vr),c=f._query;const h=new fy(u);l={next:m=>{t[o]&&t[o](new jT(u,h,f,m))},error:t[o+1],complete:t[o+2]},$T(e._query)}return function(h,m,g,y){const p=new sy(y),E=new iy(m,p,g);return h.asyncQueue.enqueueAndForget(async()=>ey(await ld(h),E)),()=>{p.$a(),h.asyncQueue.enqueueAndForget(async()=>ty(await ld(h),E))}}(_u(u),c,a,l)}function nf(e,t){return function(i,r){const s=new dr;return i.asyncQueue.enqueueAndForget(async()=>bB(await VB(i),r,s)),s.promise}(_u(e),t)}function WT(e,t,n){const i=n.docs.get(t._key),r=new fy(e);return new HT(e,r,t._key,i,new Za(n.hasPendingWrites,n.fromCache),t.converter)}/**
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
 */class KB{constructor(t,n){this._firestore=t,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=uy(t)}set(t,n,i){this._verifyNotCommitted();const r=Th(t,this._firestore),s=UT(r.converter,n,i),o=VT(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(o.toMutation(r._key,$n.none())),this}update(t,n,i,...r){this._verifyNotCommitted();const s=Th(t,this._firestore);let o;return o=typeof(n=Pn(n))=="string"||n instanceof bu?NT(this._dataReader,"WriteBatch.update",s._key,n,i,r):DT(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,$n.exists(!0))),this}delete(t){this._verifyNotCommitted();const n=Th(t,this._firestore);return this._mutations=this._mutations.concat(new Gd(n._key,$n.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Ne(he.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Th(e,t){if((e=Pn(e)).firestore!==t)throw new Ne(he.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}/**
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
 */function jW(e){return _u(e=Un(e,vr)),new KB(e,t=>nf(e,t))}(function(t,n=!0){(function(r){ma=r})(ca),Wi(new Ai("firestore",(i,{instanceIdentifier:r,options:s})=>{const o=i.getProvider("app").getImmediate(),a=new vr(new eF(i.getProvider("auth-internal")),new rF(i.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Ne(he.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(u.options.projectId,c)}(o,r),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Qn(ew,"4.6.3",t),Qn(ew,"4.6.3","esm2017")})();/**
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
 */const qT="firebasestorage.googleapis.com",YB="storageBucket",QB=2*60*1e3,XB=10*60*1e3;/**
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
 */class Xi extends wr{constructor(t,n,i=0){super(kh(t),`Firebase Storage: ${n} (${kh(t)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xi.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return kh(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ki;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ki||(Ki={}));function kh(e){return"storage/"+e}function JB(){const e="An unknown error occurred, please check the error payload for server response.";return new Xi(Ki.UNKNOWN,e)}function ZB(){return new Xi(Ki.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function e$(){return new Xi(Ki.CANCELED,"User canceled the upload/download.")}function t$(e){return new Xi(Ki.INVALID_URL,"Invalid URL '"+e+"'.")}function n$(e){return new Xi(Ki.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Mw(e){return new Xi(Ki.INVALID_ARGUMENT,e)}function GT(){return new Xi(Ki.APP_DELETED,"The Firebase app was deleted.")}function i$(e){return new Xi(Ki.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class Ei{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let i;try{i=Ei.makeFromUrl(t,n)}catch{return new Ei(t,"")}if(i.path==="")return i;throw n$(t)}static makeFromUrl(t,n){let i=null;const r="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(N){N.path_=decodeURIComponent(N.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${c}/b/${r}/o${h}`,"i"),g={bucket:1,path:3},y=n===qT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,p="([^?#]*)",E=new RegExp(`^https?://${y}/${r}/${p}`,"i"),V=[{regex:a,indices:l,postModify:s},{regex:m,indices:g,postModify:u},{regex:E,indices:{bucket:1,path:2},postModify:u}];for(let N=0;N<V.length;N++){const R=V[N],D=R.regex.exec(t);if(D){const S=D[R.indices.bucket];let w=D[R.indices.path];w||(w=""),i=new Ei(S,w),R.postModify(i);break}}if(i==null)throw t$(t);return i}}class r${constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function s$(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...p){u||(u=!0,t.apply(null,p))}function f(p){r=setTimeout(()=>{r=null,e(m,l())},p)}function h(){s&&clearTimeout(s)}function m(p,...E){if(u){h();return}if(p){h(),c.call(null,p,...E);return}if(l()||o){h(),c.call(null,p,...E);return}i<64&&(i*=2);let V;a===1?(a=2,V=0):V=(i+Math.random())*1e3,f(V)}let g=!1;function y(p){g||(g=!0,h(),!u&&(r!==null?(p||(a=2),clearTimeout(r),f(0)):p||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function o$(e){e(!1)}/**
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
 */function a$(e){return e!==void 0}function Lw(e,t,n,i){if(i<t)throw Mw(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw Mw(`Invalid value for '${e}'. Expected ${n} or less.`)}function l$(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}/**
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
 */var cd;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(cd||(cd={}));/**
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
 */function u$(e,t){const n=e>=500&&e<600,r=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||r||s}/**
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
 */class c${constructor(t,n,i,r,s,o,a,l,u,c,f,h=!0){this.url_=t,this.method_=n,this.headers_=i,this.body_=r,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const t=(i,r)=>{if(r){i(!1,new uc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===cd.NO_ERROR,l=s.getStatus();if(!a||u$(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===cd.ABORT;i(!1,new uc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;i(!0,new uc(u,s))})},n=(i,r)=>{const s=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());a$(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=JB();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?GT():e$();o(l)}else{const l=ZB();o(l)}};this.canceled_?n(!1,new uc(!1,null,!0)):this.backoffId_=s$(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&o$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class uc{constructor(t,n,i){this.wasSuccessCode=t,this.connection=n,this.canceled=!!i}}function d$(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function f$(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function h$(e,t){t&&(e["X-Firebase-GMPID"]=t)}function m$(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function v$(e,t,n,i,r,s,o=!0){const a=l$(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return h$(u,t),d$(u,n),f$(u,s),m$(u,i),new c$(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}/**
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
 */function g$(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function y$(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class dd{constructor(t,n){this._service=t,n instanceof Ei?this._location=n:this._location=Ei.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new dd(t,n)}get root(){const t=new Ei(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return y$(this._location.path)}get storage(){return this._service}get parent(){const t=g$(this._location.path);if(t===null)return null;const n=new Ei(this._location.bucket,t);return new dd(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw i$(t)}}function Fw(e,t){const n=t==null?void 0:t[YB];return n==null?null:Ei.makeFromBucketSpec(n,e)}class p${constructor(t,n,i,r,s){this.app=t,this._authProvider=n,this._appCheckProvider=i,this._url=r,this._firebaseVersion=s,this._bucket=null,this._host=qT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=QB,this._maxUploadRetryTime=XB,this._requests=new Set,r!=null?this._bucket=Ei.makeFromBucketSpec(r,this._host):this._bucket=Fw(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ei.makeFromBucketSpec(this._url,t):this._bucket=Fw(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Lw("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Lw("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new dd(this,t)}_makeRequest(t,n,i,r,s=!0){if(this._deleted)return new r$(GT());{const o=v$(t,this._appId,i,r,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[i,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,i,r).getPromise()}}const Bw="@firebase/storage",$w="0.12.5";/**
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
 */const _$="storage";function b$(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return new p$(n,i,r,t,ca)}function w$(){Wi(new Ai(_$,b$,"PUBLIC").setMultipleInstances(!0)),Qn(Bw,$w,""),Qn(Bw,$w,"esm2017")}w$();const Ah=new WeakMap;function KT(e,t){return Ah.has(t)||Ah.set(t,{f:{},r:{},s:{},u:{}}),Ah.get(t)}function S$(e,t,n,i){if(!e)return n;const[r,s]=YT(e);if(!r)return n;const o=KT(void 0,i)[r]||{},a=t||s;return a&&a in o?o[a]:n}function C$(e,t,n,i){if(!e)return;const[r,s]=YT(e);if(!r)return;const o=KT(void 0,i)[r],a=t||s;if(a)return n.then(l=>{o[a]=l}).catch(Fi),a}function YT(e){return oO(e)||aO(e)?["f",e.path]:lO(e)?["r",e.toString()]:uO(e)?["s",e.toString()]:[]}const Ph=new WeakMap;function E$(e,t,n){const i=uE();Ph.has(i)||Ph.set(i,new Map);const r=Ph.get(i),s=C$(t,n,e,i);return s&&r.set(s,e),s?()=>r.delete(s):Fi}const I$={toFirestore(e){return e},fromFirestore(e,t){return e.exists()?Object.defineProperties(e.data(t),{id:{value:e.id}}):null}};function zm(e,t,n,i){if(!rO(e))return[e,{}];const r=[{},{}],s=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,c){l=l||{};const[f,h]=c;Object.getOwnPropertyNames(a).forEach(m=>{const g=Object.getOwnPropertyDescriptor(a,m);g&&!g.enumerable&&Object.defineProperty(f,m,g)});for(const m in a){const g=a[m];if(g==null||g instanceof Date||g instanceof Wt||g instanceof Zd)f[m]=g;else if(hg(g)){const y=u+m;f[m]=y in n?l[m]:g.path,h[y]=g.converter?g:g.withConverter(i.converter)}else if(Array.isArray(g)){f[m]=Array(g.length);for(let y=0;y<g.length;y++){const p=g[y];p&&p.path in s&&(f[m][y]=s[p.path])}o(g,l[m]||f[m],u+m+".",[f[m],h])}else Ys(g)?(f[m]={},o(g,l[m],u+m+".",[f[m],h])):f[m]=g}}return o(e,t,"",r),r}const my={reset:!1,wait:!0,maxRefDepth:2,converter:I$,snapshotOptions:{serverTimestamps:"estimate"}};function fd(e){for(const t in e)e[t].unsub()}function Wm(e,t,n,i,r,s,o,a,l){const[u,c]=zm(i.data(e.snapshotOptions),fg(t,n),r,e);s.set(t,n,u),qm(e,t,n,r,c,s,o,a,l)}function T$({ref:e,target:t,path:n,depth:i,resolve:r,reject:s,ops:o},a){const l=Object.create(null);let u=Fi;return a.once?zT(e).then(c=>{c.exists()?Wm(a,t,n,c,l,o,i,r,s):(o.set(t,n,null),r())}).catch(s):u=hy(e,c=>{c.exists()?Wm(a,t,n,c,l,o,i,r,s):(o.set(t,n,null),r())},s),()=>{u(),fd(l)}}function qm(e,t,n,i,r,s,o,a,l){const u=Object.keys(r);if(Object.keys(i).filter(y=>u.indexOf(y)<0).forEach(y=>{i[y].unsub(),delete i[y]}),!u.length||++o>e.maxRefDepth)return a(n);let f=0;const h=u.length,m=Object.create(null);function g(y){y in m&&++f>=h&&a(n)}u.forEach(y=>{const p=i[y],E=r[y],P=`${n}.${y}`;if(m[P]=!0,p)if(p.path!==E.path)p.unsub();else return;i[y]={data:()=>fg(t,P),unsub:T$({ref:E,target:t,path:P,depth:o,ops:s,resolve:g.bind(null,P),reject:l},e),path:E.path}})}function k$(e,t,n,i,r,s){const o=Object.assign({},my,s),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:c}=o,f="value";let h=re(u?[]:e.value);u||n.set(e,f,[]);const m=i;let g,y=Fi;const p=[],E={added:({newIndex:V,doc:N})=>{p.splice(V,0,Object.create(null));const R=p[V],[D,S]=zm(N.data(l),void 0,R,o);n.add(ar(h),V,D),qm(o,h,`${f}.${V}`,R,S,n,0,i.bind(null,N),r)},modified:({oldIndex:V,newIndex:N,doc:R})=>{const D=ar(h),S=p[V],w=D[V],[b,C]=zm(R.data(l),w,S,o);p.splice(N,0,S),n.remove(D,V),n.add(D,N,b),qm(o,h,`${f}.${N}`,S,C,n,0,i,r)},removed:({oldIndex:V})=>{const N=ar(h);n.remove(N,V),fd(p.splice(V,1)[0])}};function P(V){const N=V.docChanges(a);if(!g&&N.length){g=!0;let R=0;const D=N.length,S=Object.create(null);for(let w=0;w<D;w++)S[N[w].doc.id]=!0;i=w=>{w&&w.id in S&&++R>=D&&(u&&(n.set(e,f,ar(h)),h=e),m(ar(h)),i=Fi)}}N.forEach(R=>{E[R.type](R)}),N.length||(u&&(n.set(e,f,ar(h)),h=e),i(ar(h)))}return c?qB(t).then(P).catch(r):y=hy(t,P,r),V=>{if(y(),V){const N=typeof V=="function"?V():[];n.set(e,f,N)}p.forEach(fd)}}function A$(e,t,n,i,r,s){const o=Object.assign({},my,s),a="value",l=Object.create(null);i=cO(i,()=>fg(e,a));let u=Fi;function c(f){f.exists()?Wm(o,e,a,f,l,n,0,i,r):(n.set(e,a,null),i(null))}return o.once?zT(t).then(c).catch(r):u=hy(t,c,r),f=>{if(u(),f){const h=typeof f=="function"?f():null;n.set(e,a,h)}fd(l)}}const Uw=Symbol();function QT(e,t){let n=Fi;const i=Object.assign({},my,t),r=ar(e),s=i.target||re();fO()&&(i.once=!0);const o=S$(r,i.ssrKey,Uw,uE()),a=o!==Uw;a&&(s.value=o);let l=!a;const u=re(!1),c=re(),f=ye(),h=S0();let m=Fi;function g(){let E=ar(e);const P=new Promise((V,N)=>{if(n(i.reset),!E)return n=Fi,V(null);u.value=l,l=!0,E.converter||(E=E.withConverter(i.converter)),n=(hg(E)?A$:k$)(s,E,P$,V,N,i)}).catch(V=>(f.value===P&&(c.value=V),Promise.reject(V))).finally(()=>{f.value===P&&(u.value=!1)});f.value=P}let y=Fi;(Rt(e)||typeof e=="function")&&(y=be(e,g)),g(),r&&(m=E$(f.value,r,i.ssrKey)),iu()&&iC(()=>f.value),h&&hn(p);function p(E=i.reset){y(),m(),n(E)}return Object.defineProperties(s,{error:{get:()=>c},data:{get:()=>s},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>p}})}const P$={set:(e,t,n)=>nO(e,t,n),add:(e,t,n)=>e.splice(t,0,n),remove:(e,t)=>e.splice(t,1)};function zW(e,t){return QT(e,{target:re([]),...t})}function x$(e,t){return QT(e,t)}function R$(e,{firebaseApp:t,modules:n=[]}){e.provide(lE,t);for(const i of n)i(t,e)}const XT=HC({apiKey:"AIzaSyD3676AgENDKj-MXdpdvk15C1LK4pQdSTw",authDomain:"shaoline-test.firebaseapp.com",projectId:"shaoline-test",storageBucket:"shaoline-test.appspot.com",messagingSenderId:"812281633464",appId:"1:812281633464:web:df1095496b2d48972a324d"}),Hw=FB(XT);/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const To=typeof document<"u";function V$(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ht=Object.assign;function xh(e,t){const n={};for(const i in t){const r=t[i];n[i]=xi(r)?r.map(e):e(r)}return n}const yl=()=>{},xi=Array.isArray,JT=/#/g,D$=/&/g,N$=/\//g,O$=/=/g,M$=/\?/g,ZT=/\+/g,L$=/%5B/g,F$=/%5D/g,ek=/%5E/g,B$=/%60/g,tk=/%7B/g,$$=/%7C/g,nk=/%7D/g,U$=/%20/g;function vy(e){return encodeURI(""+e).replace($$,"|").replace(L$,"[").replace(F$,"]")}function H$(e){return vy(e).replace(tk,"{").replace(nk,"}").replace(ek,"^")}function Gm(e){return vy(e).replace(ZT,"%2B").replace(U$,"+").replace(JT,"%23").replace(D$,"%26").replace(B$,"`").replace(tk,"{").replace(nk,"}").replace(ek,"^")}function j$(e){return Gm(e).replace(O$,"%3D")}function z$(e){return vy(e).replace(JT,"%23").replace(M$,"%3F")}function W$(e){return e==null?"":z$(e).replace(N$,"%2F")}function Fl(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const q$=/\/$/,G$=e=>e.replace(q$,"");function Rh(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),r=e(s)),a>-1&&(i=i||t.slice(0,a),o=t.slice(a,t.length)),i=X$(i??t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Fl(o)}}function K$(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function jw(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Y$(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Jo(t.matched[i],n.matched[r])&&ik(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Jo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ik(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Q$(e[n],t[n]))return!1;return!0}function Q$(e,t){return xi(e)?zw(e,t):xi(t)?zw(t,e):e===t}function zw(e,t){return xi(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function X$(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var Bl;(function(e){e.pop="pop",e.push="push"})(Bl||(Bl={}));var pl;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pl||(pl={}));function J$(e){if(!e)if(To){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),G$(e)}const Z$=/^[^#]+#/;function e4(e,t){return e.replace(Z$,"#")+t}function t4(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const rf=()=>({left:window.scrollX,top:window.scrollY});function n4(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=t4(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ww(e,t){return(history.state?history.state.position-t:-1)+e}const Km=new Map;function i4(e,t){Km.set(e,t)}function r4(e){const t=Km.get(e);return Km.delete(e),t}let s4=()=>location.protocol+"//"+location.host;function rk(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let a=r.includes(e.slice(s))?e.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),jw(l,"")}return jw(n,e)+i+r}function o4(e,t,n,i){let r=[],s=[],o=null;const a=({state:h})=>{const m=rk(e,location),g=n.value,y=t.value;let p=0;if(h){if(n.value=m,t.value=h,o&&o===g){o=null;return}p=y?h.position-y.position:0}else i(m);r.forEach(E=>{E(n.value,g,{delta:p,type:Bl.pop,direction:p?p>0?pl.forward:pl.back:pl.unknown})})};function l(){o=n.value}function u(h){r.push(h);const m=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(m),m}function c(){const{history:h}=window;h.state&&h.replaceState(ht({},h.state,{scroll:rf()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function qw(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?rf():null}}function a4(e){const{history:t,location:n}=window,i={value:rk(e,n)},r={value:t.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+l:s4()+e+l;try{t[c?"replaceState":"pushState"](u,"",h),r.value=u}catch(m){console.error(m),n[c?"replace":"assign"](h)}}function o(l,u){const c=ht({},t.state,qw(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function a(l,u){const c=ht({},r.value,t.state,{forward:l,scroll:rf()});s(c.current,c,!0);const f=ht({},qw(i.value,l,null),{position:c.position+1},u);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function l4(e){e=J$(e);const t=a4(e),n=o4(e,t.state,t.location,t.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ht({location:"",base:e,go:i,createHref:e4.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function u4(e){return typeof e=="string"||e&&typeof e=="object"}function sk(e){return typeof e=="string"||typeof e=="symbol"}const Dr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ok=Symbol("");var Gw;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Gw||(Gw={}));function Zo(e,t){return ht(new Error,{type:e,[ok]:!0},t)}function rr(e,t){return e instanceof Error&&ok in e&&(t==null||!!(e.type&t))}const Kw="[^/]+?",c4={sensitive:!1,strict:!1,start:!0,end:!0},d4=/[.+*?^${}()[\]/\\]/g;function f4(e,t){const n=ht({},c4,t),i=[];let r=n.start?"^":"";const s=[];for(const u of e){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const h=u[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(d4,"\\$&"),m+=40;else if(h.type===1){const{value:g,repeatable:y,optional:p,regexp:E}=h;s.push({name:g,repeatable:y,optional:p});const P=E||Kw;if(P!==Kw){m+=10;try{new RegExp(`(${P})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${g}" (${P}): `+N.message)}}let V=y?`((?:${P})(?:/(?:${P}))*)`:`(${P})`;f||(V=p&&u.length<2?`(?:/${V})`:"/"+V),p&&(V+="?"),r+=V,m+=20,p&&(m+=-8),y&&(m+=-20),P===".*"&&(m+=-50)}c.push(m)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let h=1;h<c.length;h++){const m=c[h]||"",g=s[h-1];f[g.name]=m&&g.repeatable?m.split("/"):m}return f}function l(u){let c="",f=!1;for(const h of e){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const m of h)if(m.type===0)c+=m.value;else if(m.type===1){const{value:g,repeatable:y,optional:p}=m,E=g in u?u[g]:"";if(xi(E)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const P=xi(E)?E.join("/"):E;if(!P)if(p)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);c+=P}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function h4(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function m4(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const s=h4(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Yw(i))return 1;if(Yw(r))return-1}return r.length-i.length}function Yw(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const v4={type:0,value:""},g4=/[a-zA-Z0-9_]/;function y4(e){if(!e)return[[]];if(e==="/")return[[v4]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;a<e.length;){if(l=e[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:g4.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function p4(e,t,n){const i=f4(y4(e.path),n),r=ht(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function _4(e,t){const n=[],i=new Map;t=Jw({strict:!1,end:!0,sensitive:!1},t);function r(c){return i.get(c)}function s(c,f,h){const m=!h,g=b4(c);g.aliasOf=h&&h.record;const y=Jw(t,c),p=[g];if("alias"in c){const V=typeof c.alias=="string"?[c.alias]:c.alias;for(const N of V)p.push(ht({},g,{components:h?h.record.components:g.components,path:N,aliasOf:h?h.record:g}))}let E,P;for(const V of p){const{path:N}=V;if(f&&N[0]!=="/"){const R=f.record.path,D=R[R.length-1]==="/"?"":"/";V.path=f.record.path+(N&&D+N)}if(E=p4(V,f,y),h?h.alias.push(E):(P=P||E,P!==E&&P.alias.push(E),m&&c.name&&!Xw(E)&&o(c.name)),g.children){const R=g.children;for(let D=0;D<R.length;D++)s(R[D],E,h&&h.children[D])}h=h||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return P?()=>{o(P)}:yl}function o(c){if(sk(c)){const f=i.get(c);f&&(i.delete(c),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(c);f>-1&&(n.splice(f,1),c.record.name&&i.delete(c.record.name),c.children.forEach(o),c.alias.forEach(o))}}function a(){return n}function l(c){let f=0;for(;f<n.length&&m4(c,n[f])>=0&&(c.record.path!==n[f].record.path||!ak(c,n[f]));)f++;n.splice(f,0,c),c.record.name&&!Xw(c)&&i.set(c.record.name,c)}function u(c,f){let h,m={},g,y;if("name"in c&&c.name){if(h=i.get(c.name),!h)throw Zo(1,{location:c});y=h.record.name,m=ht(Qw(f.params,h.keys.filter(P=>!P.optional).concat(h.parent?h.parent.keys.filter(P=>P.optional):[]).map(P=>P.name)),c.params&&Qw(c.params,h.keys.map(P=>P.name))),g=h.stringify(m)}else if(c.path!=null)g=c.path,h=n.find(P=>P.re.test(g)),h&&(m=h.parse(g),y=h.record.name);else{if(h=f.name?i.get(f.name):n.find(P=>P.re.test(f.path)),!h)throw Zo(1,{location:c,currentLocation:f});y=h.record.name,m=ht({},f.params,c.params),g=h.stringify(m)}const p=[];let E=h;for(;E;)p.unshift(E.record),E=E.parent;return{name:y,path:g,params:m,matched:p,meta:S4(p)}}return e.forEach(c=>s(c)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Qw(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function b4(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:w4(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function w4(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="object"?n[i]:n;return t}function Xw(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function S4(e){return e.reduce((t,n)=>ht(t,n.meta),{})}function Jw(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function ak(e,t){return t.children.some(n=>n===e||ak(e,n))}function C4(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ZT," "),o=s.indexOf("="),a=Fl(o<0?s:s.slice(0,o)),l=o<0?null:Fl(s.slice(o+1));if(a in t){let u=t[a];xi(u)||(u=t[a]=[u]),u.push(l)}else t[a]=l}return t}function Zw(e){let t="";for(let n in e){const i=e[n];if(n=j$(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(xi(i)?i.map(s=>s&&Gm(s)):[i&&Gm(i)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function E4(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=xi(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return t}const I4=Symbol(""),eS=Symbol(""),gy=Symbol(""),yy=Symbol(""),Ym=Symbol("");function za(){let e=[];function t(i){return e.push(i),()=>{const r=e.indexOf(i);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Br(e,t,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=h=>{h===!1?l(Zo(4,{from:n,to:t})):h instanceof Error?l(h):u4(h)?l(Zo(2,{from:t,to:h})):(o&&i.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),a())},c=s(()=>e.call(i&&i.instances[r],t,n,u));let f=Promise.resolve(c);e.length<3&&(f=f.then(u)),f.catch(h=>l(h))})}function Vh(e,t,n,i,r=s=>s()){const s=[];for(const o of e)for(const a in o.components){let l=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(T4(l)){const c=(l.__vccOpts||l)[t];c&&s.push(Br(c,n,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=V$(c)?c.default:c;o.components[a]=f;const m=(f.__vccOpts||f)[t];return m&&Br(m,n,i,o,a,r)()}))}}return s}function T4(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tS(e){const t=Be(gy),n=Be(yy),i=I(()=>{const l=mt(e.to);return t.resolve(l)}),r=I(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const h=f.findIndex(Jo.bind(null,c));if(h>-1)return h;const m=nS(l[u-2]);return u>1&&nS(c)===m&&f[f.length-1].path!==m?f.findIndex(Jo.bind(null,l[u-2])):h}),s=I(()=>r.value>-1&&x4(n.params,i.value.params)),o=I(()=>r.value>-1&&r.value===n.matched.length-1&&ik(n.params,i.value.params));function a(l={}){return P4(l)?t[mt(e.replace)?"replace":"push"](mt(e.to)).catch(yl):Promise.resolve()}return{route:i,href:I(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const k4=Zv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tS,setup(e,{slots:t}){const n=En(tS(e)),{options:i}=Be(gy),r=I(()=>({[iS(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[iS(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Vi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),A4=k4;function P4(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function x4(e,t){for(const n in t){const i=t[n],r=e[n];if(typeof i=="string"){if(i!==r)return!1}else if(!xi(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function nS(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const iS=(e,t,n)=>e??t??n,R4=Zv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=Be(Ym),r=I(()=>e.route||i.value),s=Be(eS,0),o=I(()=>{let u=mt(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=I(()=>r.value.matched[o.value]);dt(eS,I(()=>o.value+1)),dt(I4,a),dt(Ym,r);const l=re();return be(()=>[l.value,a.value,e.name],([u,c,f],[h,m,g])=>{c&&(c.instances[f]=u,m&&m!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=m.leaveGuards),c.updateGuards.size||(c.updateGuards=m.updateGuards))),u&&c&&(!m||!Jo(c,m)||!h)&&(c.enterCallbacks[f]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,c=e.name,f=a.value,h=f&&f.components[c];if(!h)return rS(n.default,{Component:h,route:u});const m=f.props[c],g=m?m===!0?u.params:typeof m=="function"?m(u):m:null,p=Vi(h,ht({},g,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return rS(n.default,{Component:p,route:u})||p}}});function rS(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const V4=R4;function D4(e){const t=_4(e.routes,e),n=e.parseQuery||C4,i=e.stringifyQuery||Zw,r=e.history,s=za(),o=za(),a=za(),l=ye(Dr);let u=Dr;To&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=xh.bind(null,B=>""+B),f=xh.bind(null,W$),h=xh.bind(null,Fl);function m(B,ve){let le,Q;return sk(B)?(le=t.getRecordMatcher(B),Q=ve):Q=B,t.addRoute(Q,le)}function g(B){const ve=t.getRecordMatcher(B);ve&&t.removeRoute(ve)}function y(){return t.getRoutes().map(B=>B.record)}function p(B){return!!t.getRecordMatcher(B)}function E(B,ve){if(ve=ht({},ve||l.value),typeof B=="string"){const L=Rh(n,B,ve.path),F=t.resolve({path:L.path},ve),q=r.createHref(L.fullPath);return ht(L,F,{params:h(F.params),hash:Fl(L.hash),redirectedFrom:void 0,href:q})}let le;if(B.path!=null)le=ht({},B,{path:Rh(n,B.path,ve.path).path});else{const L=ht({},B.params);for(const F in L)L[F]==null&&delete L[F];le=ht({},B,{params:f(L)}),ve.params=f(ve.params)}const Q=t.resolve(le,ve),Ee=B.hash||"";Q.params=c(h(Q.params));const ie=K$(i,ht({},B,{hash:H$(Ee),path:Q.path})),O=r.createHref(ie);return ht({fullPath:ie,hash:Ee,query:i===Zw?E4(B.query):B.query||{}},Q,{redirectedFrom:void 0,href:O})}function P(B){return typeof B=="string"?Rh(n,B,l.value.path):ht({},B)}function V(B,ve){if(u!==B)return Zo(8,{from:ve,to:B})}function N(B){return S(B)}function R(B){return N(ht(P(B),{replace:!0}))}function D(B){const ve=B.matched[B.matched.length-1];if(ve&&ve.redirect){const{redirect:le}=ve;let Q=typeof le=="function"?le(B):le;return typeof Q=="string"&&(Q=Q.includes("?")||Q.includes("#")?Q=P(Q):{path:Q},Q.params={}),ht({query:B.query,hash:B.hash,params:Q.path!=null?{}:B.params},Q)}}function S(B,ve){const le=u=E(B),Q=l.value,Ee=B.state,ie=B.force,O=B.replace===!0,L=D(le);if(L)return S(ht(P(L),{state:typeof L=="object"?ht({},Ee,L.state):Ee,force:ie,replace:O}),ve||le);const F=le;F.redirectedFrom=ve;let q;return!ie&&Y$(i,Q,le)&&(q=Zo(16,{to:F,from:Q}),K(Q,Q,!0,!1)),(q?Promise.resolve(q):C(F,Q)).catch(X=>rr(X)?rr(X,2)?X:H(X):j(X,F,Q)).then(X=>{if(X){if(rr(X,2))return S(ht({replace:O},P(X.to),{state:typeof X.to=="object"?ht({},Ee,X.to.state):Ee,force:ie}),ve||F)}else X=k(F,Q,!0,O,Ee);return A(F,Q,X),X})}function w(B,ve){const le=V(B,ve);return le?Promise.reject(le):Promise.resolve()}function b(B){const ve=Ae.values().next().value;return ve&&typeof ve.runWithContext=="function"?ve.runWithContext(B):B()}function C(B,ve){let le;const[Q,Ee,ie]=N4(B,ve);le=Vh(Q.reverse(),"beforeRouteLeave",B,ve);for(const L of Q)L.leaveGuards.forEach(F=>{le.push(Br(F,B,ve))});const O=w.bind(null,B,ve);return le.push(O),oe(le).then(()=>{le=[];for(const L of s.list())le.push(Br(L,B,ve));return le.push(O),oe(le)}).then(()=>{le=Vh(Ee,"beforeRouteUpdate",B,ve);for(const L of Ee)L.updateGuards.forEach(F=>{le.push(Br(F,B,ve))});return le.push(O),oe(le)}).then(()=>{le=[];for(const L of ie)if(L.beforeEnter)if(xi(L.beforeEnter))for(const F of L.beforeEnter)le.push(Br(F,B,ve));else le.push(Br(L.beforeEnter,B,ve));return le.push(O),oe(le)}).then(()=>(B.matched.forEach(L=>L.enterCallbacks={}),le=Vh(ie,"beforeRouteEnter",B,ve,b),le.push(O),oe(le))).then(()=>{le=[];for(const L of o.list())le.push(Br(L,B,ve));return le.push(O),oe(le)}).catch(L=>rr(L,8)?L:Promise.reject(L))}function A(B,ve,le){a.list().forEach(Q=>b(()=>Q(B,ve,le)))}function k(B,ve,le,Q,Ee){const ie=V(B,ve);if(ie)return ie;const O=ve===Dr,L=To?history.state:{};le&&(Q||O?r.replace(B.fullPath,ht({scroll:O&&L&&L.scroll},Ee)):r.push(B.fullPath,Ee)),l.value=B,K(B,ve,le,O),H()}let x;function U(){x||(x=r.listen((B,ve,le)=>{if(!de.listening)return;const Q=E(B),Ee=D(Q);if(Ee){S(ht(Ee,{replace:!0}),Q).catch(yl);return}u=Q;const ie=l.value;To&&i4(Ww(ie.fullPath,le.delta),rf()),C(Q,ie).catch(O=>rr(O,12)?O:rr(O,2)?(S(O.to,Q).then(L=>{rr(L,20)&&!le.delta&&le.type===Bl.pop&&r.go(-1,!1)}).catch(yl),Promise.reject()):(le.delta&&r.go(-le.delta,!1),j(O,Q,ie))).then(O=>{O=O||k(Q,ie,!1),O&&(le.delta&&!rr(O,8)?r.go(-le.delta,!1):le.type===Bl.pop&&rr(O,20)&&r.go(-1,!1)),A(Q,ie,O)}).catch(yl)}))}let G=za(),J=za(),ae;function j(B,ve,le){H(B);const Q=J.list();return Q.length?Q.forEach(Ee=>Ee(B,ve,le)):console.error(B),Promise.reject(B)}function ee(){return ae&&l.value!==Dr?Promise.resolve():new Promise((B,ve)=>{G.add([B,ve])})}function H(B){return ae||(ae=!B,U(),G.list().forEach(([ve,le])=>B?le(B):ve()),G.reset()),B}function K(B,ve,le,Q){const{scrollBehavior:Ee}=e;if(!To||!Ee)return Promise.resolve();const ie=!le&&r4(Ww(B.fullPath,0))||(Q||!le)&&history.state&&history.state.scroll||null;return Ge().then(()=>Ee(B,ve,ie)).then(O=>O&&n4(O)).catch(O=>j(O,B,ve))}const se=B=>r.go(B);let _e;const Ae=new Set,de={currentRoute:l,listening:!0,addRoute:m,removeRoute:g,hasRoute:p,getRoutes:y,resolve:E,options:e,push:N,replace:R,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:J.add,isReady:ee,install(B){const ve=this;B.component("RouterLink",A4),B.component("RouterView",V4),B.config.globalProperties.$router=ve,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>mt(l)}),To&&!_e&&l.value===Dr&&(_e=!0,N(r.location).catch(Ee=>{}));const le={};for(const Ee in Dr)Object.defineProperty(le,Ee,{get:()=>l.value[Ee],enumerable:!0});B.provide(gy,ve),B.provide(yy,N0(le)),B.provide(Ym,l);const Q=B.unmount;Ae.add(B),B.unmount=function(){Ae.delete(B),Ae.size<1&&(u=Dr,x&&x(),x=null,l.value=Dr,_e=!1,ae=!1),Q()}}};function oe(B){return B.reduce((ve,le)=>ve.then(()=>b(le)),Promise.resolve())}return de}function N4(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const a=t.matched[o];a&&(e.matched.find(u=>Jo(u,a))?i.push(a):n.push(a));const l=e.matched[o];l&&(t.matched.find(u=>Jo(u,l))||r.push(l))}return[n,i,r]}function O4(){return Be(yy)}const M4=li("div",{style:{"line-height":"165%",transform:"rotate(-15deg)","font-size":"30px",margin:"0 auto"}},[li("h1",{class:"font-title"},"The"),li("h1",{class:"font-title"},"Planning"),li("h1",{class:"font-title"},"Poker")],-1),L4={class:"pa-4",style:{position:"fixed",bottom:"0",right:"0"}},F4=li("br",null,null,-1),B4={__name:"App",setup(e){const t=localStorage.getItem("device")||crypto.randomUUID();localStorage.setItem("device",t);const n=O4(),i=re("dark");function r(){i.value=i.value==="light"?"dark":"light"}return(s,o)=>{const a=_n("RouterView"),l=_n("v-container"),u=_n("v-main"),c=_n("v-footer"),f=_n("v-btn"),h=_n("v-app");return bi(),im(h,{theme:i.value},{default:si(()=>[v(u,null,{default:si(()=>[v(l,null,{default:si(()=>[v(a)]),_:1})]),_:1}),v(c,{color:"transparent",class:"text-center overflow-hidden",style:{height:"300px","max-height":"300px"}},{default:si(()=>[M4]),_:1}),li("div",L4,[mt(n).path!=="/"?(bi(),im(f,{key:0,color:"primary",size:"small",icon:"mdi-home",class:"btn-fs-1",to:"/"})):C1("",!0),F4,v(f,{color:"primary",size:"small",icon:"mdi-theme-light-dark",class:"btn-fs-1 mt-3",onClick:r})])]),_:1},8,["theme"])}}},$4="modulepreload",U4=function(e){return"/theplanningpoker/"+e},sS={},H4=function(t,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(n.map(a=>{if(a=U4(a),a in sS)return;sS[a]=!0;const l=a.endsWith(".css"),u=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":$4,l||(c.as="script",c.crossOrigin=""),c.href=a,o&&c.setAttribute("nonce",o),document.head.appendChild(c),l)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},j4={class:"d-flex align-center justify-center"},z4={style:{width:"600px"}},W4={key:0},q4={key:1},G4={key:0},K4={key:0},Y4={key:1},Q4={key:1},X4={__name:"HomeView",setup(e){const t=localStorage.getItem("device"),n=re(null),i=re(!1),r=re(""),s=re(!1),o=re(5e3),{data:a,pending:l,error:u}=x$(Nw(Hw,"theplanningpoker",t));function c(h){navigator.clipboard.writeText(window.location.origin+"/"+h),r.value="¡Link copiado!",s.value=!0}async function f(){i.value=!0,await GB(Nw(Hw,"theplanningpoker",t),{name:n.value,status:"hide"}),i.value=!1}return(h,m)=>{const g=_n("v-skeleton-loader"),y=_n("v-btn"),p=_n("v-toolbar"),E=_n("v-card-title"),P=_n("v-card-item"),V=_n("v-card"),N=_n("v-text-field"),R=_n("v-empty-state"),D=_n("v-snackbar");return bi(),hs(Te,null,[li("main",null,[li("div",j4,[li("div",z4,[mt(l)?(bi(),hs("div",W4,[v(g,{type:"heading, ossein, subtitle"})])):(bi(),hs("div",q4,[mt(u)?(bi(),hs("div",Q4,[v(R,{headline:"¡Error del servidor!",title:"Error de carga de datos",text:"Se produjo un error en el servidor mientras se cargaban los datos, por favor actualice la página",icon:"mdi-alert-octagon",class:"my-16"})])):(bi(),hs("div",G4,[mt(a)?(bi(),hs("div",K4,[v(V,null,{default:si(()=>[v(p,{color:"transparent"},{append:si(()=>[v(y,{size:"small",icon:"mdi-share-variant",onClick:m[0]||(m[0]=S=>c(mt(a).id))}),v(y,{icon:"mdi-open-in-app",size:"small",to:"/"+mt(a).id},null,8,["to"])]),_:1}),v(P,{class:"pt-0"},{default:si(()=>[v(E,null,{default:si(()=>[Ti(zh(mt(a).name),1)]),_:1})]),_:1})]),_:1})])):(bi(),hs("div",Y4,[li("form",{onSubmit:om(f,["prevent"])},[v(N,{modelValue:n.value,"onUpdate:modelValue":m[1]||(m[1]=S=>n.value=S),variant:"solo",label:"Nombre del proyecto",clearable:""},{append:si(()=>[v(y,{type:"submit",color:"primary",icon:"mdi-plus",disabled:!n.value,loading:i.value},null,8,["disabled","loading"])]),_:1},8,["modelValue"])],32)]))]))]))])])]),v(D,{modelValue:s.value,"onUpdate:modelValue":m[3]||(m[3]=S=>s.value=S),timeout:o.value},{actions:si(()=>[v(y,{icon:"mdi-close",onClick:m[2]||(m[2]=S=>s.value=!1)})]),default:si(()=>[Ti(zh(r.value)+" ",1)]),_:1},8,["modelValue","timeout"])],64)}}},J4=D4({history:l4("/theplanningpoker/"),routes:[{path:"/",name:"home",component:X4},{path:"/:id",name:"room",component:()=>H4(()=>import("./RoomView-DoqEYn8h.js"),[])}]});function Hn(e,t){let n;function i(){n=Lv(),n.run(()=>t.length?t(()=>{n==null||n.stop(),i()}):t())}be(e,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),hn(()=>{n==null||n.stop()})}const at=typeof window<"u",py=at&&"IntersectionObserver"in window,Z4=at&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),oS=at&&"EyeDropper"in window;function aS(e,t,n){eU(e,t),t.set(e,n)}function eU(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function tU(e,t,n){return e.set(lk(e,t),n),n}function vs(e,t){return e.get(lk(e,t))}function lk(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function uk(e,t,n){const i=t.length-1;if(i<0)return e===void 0?n:e;for(let r=0;r<i;r++){if(e==null)return n;e=e[t[r]]}return e==null||e[t[i]]===void 0?n:e[t[i]]}function Ji(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime()||e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length!==Object.keys(t).length?!1:n.every(i=>Ji(e[i],t[i]))}function $l(e,t,n){return e==null||!t||typeof t!="string"?n:e[t]!==void 0?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),uk(e,t.split("."),n))}function zt(e,t,n){if(t===!0)return e===void 0?n:e;if(t==null||typeof t=="boolean")return n;if(e!==Object(e)){if(typeof t!="function")return n;const r=t(e,n);return typeof r>"u"?n:r}if(typeof t=="string")return $l(e,t,n);if(Array.isArray(t))return uk(e,t,n);if(typeof t!="function")return n;const i=t(e,n);return typeof i>"u"?n:i}function Ui(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:e},(n,i)=>t+i)}function we(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(e==null||e===""))return isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function Ul(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)}function _y(e){if(e&&"$el"in e){const t=e.$el;return(t==null?void 0:t.nodeType)===Node.TEXT_NODE?t.nextElementSibling:t}return e}const lS=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),Qm=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"});function ck(e){return Object.keys(e)}function Es(e,t){return t.every(n=>e.hasOwnProperty(n))}function dk(e,t){const n={},i=new Set(Object.keys(e));for(const r of t)i.has(r)&&(n[r]=e[r]);return n}function Xm(e,t,n){const i=Object.create(null),r=Object.create(null);for(const s in e)t.some(o=>o instanceof RegExp?o.test(s):o===s)&&!(n!=null&&n.some(o=>o===s))?i[s]=e[s]:r[s]=e[s];return[i,r]}function Ut(e,t){const n={...e};return t.forEach(i=>delete n[i]),n}function sf(e,t){const n={};return t.forEach(i=>n[i]=e[i]),n}const fk=/^on[^a-z]/,of=e=>fk.test(e),nU=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],iU=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "];function rU(e){return e.isComposing&&iU.includes(e.key)}function is(e){const[t,n]=Xm(e,[fk]),i=Ut(t,nU),[r,s]=Xm(n,["class","style","id",/^data-/]);return Object.assign(r,t),Object.assign(s,i),[r,s]}function It(e){return e==null?[]:Array.isArray(e)?e:[e]}function sU(e,t){let n=0;const i=function(){for(var r=arguments.length,s=new Array(r),o=0;o<r;o++)s[o]=arguments[o];clearTimeout(n),n=setTimeout(()=>e(...s),mt(t))};return i.clear=()=>{clearTimeout(n)},i.immediate=e,i}function Lt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(t,Math.min(n,e))}function uS(e){const t=e.toString().trim();return t.includes(".")?t.length-t.indexOf(".")-1:0}function cS(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return e+n.repeat(Math.max(0,t-e.length))}function dS(e,t){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,t-e.length))+e}function oU(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<e.length;)n.push(e.substr(i,t)),i+=t;return n}function fS(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1e3;if(e<t)return`${e} B`;const n=t===1024?["Ki","Mi","Gi"]:["k","M","G"];let i=-1;for(;Math.abs(e)>=t&&i<n.length-1;)e/=t,++i;return`${e.toFixed(1)} ${n[i]}B`}function kn(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in e)i[r]=e[r];for(const r in t){const s=e[r],o=t[r];if(Ul(s)&&Ul(o)){i[r]=kn(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){i[r]=n(s,o);continue}i[r]=o}return i}function hk(e){return e.map(t=>t.type===Te?hk(t.children):t).flat()}function Ps(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Ps.cache.has(e))return Ps.cache.get(e);const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Ps.cache.set(e,t),t}Ps.cache=new Map;function Po(e,t){if(!t||typeof t!="object")return[];if(Array.isArray(t))return t.map(n=>Po(e,n)).flat(1);if(t.suspense)return Po(e,t.ssContent);if(Array.isArray(t.children))return t.children.map(n=>Po(e,n)).flat(1);if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component];if(t.component.subTree)return Po(e,t.component.subTree).flat(1)}return[]}var cc=new WeakMap,po=new WeakMap;class aU{constructor(t){aS(this,cc,[]),aS(this,po,0),this.size=t}push(t){vs(cc,this)[vs(po,this)]=t,tU(po,this,(vs(po,this)+1)%this.size)}values(){return vs(cc,this).slice(vs(po,this)).concat(vs(cc,this).slice(0,vs(po,this)))}}function lU(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}function by(e){const t=En({}),n=I(e);return Vt(()=>{for(const i in n.value)t[i]=n.value[i]},{flush:"sync"}),Id(t)}function hd(e,t){return e.includes(t)}function mk(e){return e[2].toLowerCase()+e.slice(3)}const cn=()=>[Function,Array];function hS(e,t){return t="on"+Qi(t),!!(e[t]||e[`${t}Once`]||e[`${t}Capture`]||e[`${t}OnceCapture`]||e[`${t}CaptureOnce`])}function wy(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(Array.isArray(e))for(const r of e)r(...n);else typeof e=="function"&&e(...n)}function Hl(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const n=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map(i=>`${i}${t?':not([tabindex="-1"])':""}:not([disabled])`).join(", ");return[...e.querySelectorAll(n)]}function vk(e,t,n){let i,r=e.indexOf(document.activeElement);const s=t==="next"?1:-1;do r+=s,i=e[r];while((!i||i.offsetParent==null||!((n==null?void 0:n(i))??!0))&&r<e.length&&r>=0);return i}function ea(e,t){var i,r,s,o;const n=Hl(e);if(!t)(e===document.activeElement||!e.contains(document.activeElement))&&((i=n[0])==null||i.focus());else if(t==="first")(r=n[0])==null||r.focus();else if(t==="last")(s=n.at(-1))==null||s.focus();else if(typeof t=="number")(o=n[t])==null||o.focus();else{const a=vk(n,t);a?a.focus():ea(e,t==="next"?"first":"last")}}function dc(e){return e==null||typeof e=="string"&&e.trim()===""}function gk(){}function ta(e,t){if(!(at&&typeof CSS<"u"&&typeof CSS.supports<"u"&&CSS.supports(`selector(${t})`)))return null;try{return!!e&&e.matches(t)}catch{return null}}function af(e){return e.some(t=>Tl(t)?t.type===Mn?!1:t.type!==Te||af(t.children):!0)?e:null}function uU(e,t){if(!at||e===0)return t(),()=>{};const n=window.setTimeout(t,e);return()=>window.clearTimeout(n)}function mS(e,t){const n=ye();return Vt(()=>{n.value=e()},{flush:"sync",...t}),aa(n)}function cU(e,t){const n=e.clientX,i=e.clientY,r=t.getBoundingClientRect(),s=r.left,o=r.top,a=r.right,l=r.bottom;return n>=s&&n<=a&&i>=o&&i<=l}function md(){const e=ye(),t=n=>{e.value=n};return Object.defineProperty(t,"value",{enumerable:!0,get:()=>e.value,set:n=>e.value=n}),Object.defineProperty(t,"el",{enumerable:!0,get:()=>_y(e.value)}),t}const yk=["top","bottom"],dU=["start","end","left","right"];function Jm(e,t){let[n,i]=e.split(" ");return i||(i=hd(yk,n)?"start":hd(dU,n)?"top":"center"),{side:Zm(n,t),align:Zm(i,t)}}function Zm(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function Dh(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function Nh(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function vS(e){return{side:e.align,align:e.side}}function gS(e){return hd(yk,e.side)?"y":"x"}class xs{constructor(t){let{x:n,y:i,width:r,height:s}=t;this.x=n,this.y=i,this.width=r,this.height=s}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function yS(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function pk(e){return Array.isArray(e)?new xs({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function Sy(e){const t=e.getBoundingClientRect(),n=getComputedStyle(e),i=n.transform;if(i){let r,s,o,a,l;if(i.startsWith("matrix3d("))r=i.slice(9,-1).split(/, /),s=+r[0],o=+r[5],a=+r[12],l=+r[13];else if(i.startsWith("matrix("))r=i.slice(7,-1).split(/, /),s=+r[0],o=+r[3],a=+r[4],l=+r[5];else return new xs(t);const u=n.transformOrigin,c=t.x-a-(1-s)*parseFloat(u),f=t.y-l-(1-o)*parseFloat(u.slice(u.indexOf(" ")+1)),h=s?t.width/s:e.offsetWidth+1,m=o?t.height/o:e.offsetHeight+1;return new xs({x:c,y:f,width:h,height:m})}else return new xs(t)}function Is(e,t,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let i;try{i=e.animate(t,n)}catch{return{finished:Promise.resolve()}}return typeof i.finished>"u"&&(i.finished=new Promise(r=>{i.onfinish=()=>{r(i)}})),i}const Pc=new WeakMap;function fU(e,t){Object.keys(t).forEach(n=>{if(of(n)){const i=mk(n),r=Pc.get(e);if(t[n]==null)r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))});else if(!r||![...r].some(s=>s[0]===i&&s[1]===t[n])){e.addEventListener(i,t[n]);const s=r||new Set;s.add([i,t[n]]),Pc.has(e)||Pc.set(e,s)}}else t[n]==null?e.removeAttribute(n):e.setAttribute(n,t[n])})}function hU(e,t){Object.keys(t).forEach(n=>{if(of(n)){const i=mk(n),r=Pc.get(e);r==null||r.forEach(s=>{const[o,a]=s;o===i&&(e.removeEventListener(i,a),r.delete(s))})}else e.removeAttribute(n)})}const _o=2.4,pS=.2126729,_S=.7151522,bS=.072175,mU=.55,vU=.58,gU=.57,yU=.62,fc=.03,wS=1.45,pU=5e-4,_U=1.25,bU=1.25,SS=.078,CS=12.82051282051282,hc=.06,ES=.001;function IS(e,t){const n=(e.r/255)**_o,i=(e.g/255)**_o,r=(e.b/255)**_o,s=(t.r/255)**_o,o=(t.g/255)**_o,a=(t.b/255)**_o;let l=n*pS+i*_S+r*bS,u=s*pS+o*_S+a*bS;if(l<=fc&&(l+=(fc-l)**wS),u<=fc&&(u+=(fc-u)**wS),Math.abs(u-l)<pU)return 0;let c;if(u>l){const f=(u**mU-l**vU)*_U;c=f<ES?0:f<SS?f-f*CS*hc:f-hc}else{const f=(u**yU-l**gU)*bU;c=f>-ES?0:f>-SS?f-f*CS*hc:f+hc}return c*100}function wU(e,t){t=Array.isArray(t)?t.slice(0,-1).map(n=>`'${n}'`).join(", ")+` or '${t.at(-1)}'`:`'${t}'`}const vd=.20689655172413793,SU=e=>e>vd**3?Math.cbrt(e):e/(3*vd**2)+4/29,CU=e=>e>vd?e**3:3*vd**2*(e-4/29);function _k(e){const t=SU,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function bk(e){const t=CU,n=(e[0]+16)/116;return[t(n+e[1]/500)*.95047,t(n),t(n-e[2]/200)*1.08883]}const EU=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],IU=e=>e<=.0031308?e*12.92:1.055*e**(1/2.4)-.055,TU=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],kU=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function wk(e){const t=Array(3),n=IU,i=EU;for(let r=0;r<3;++r)t[r]=Math.round(Lt(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2]))*255);return{r:t[0],g:t[1],b:t[2]}}function Cy(e){let{r:t,g:n,b:i}=e;const r=[0,0,0],s=kU,o=TU;t=s(t/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*t+o[a][1]*n+o[a][2]*i;return r}function ev(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function AU(e){return ev(e)&&!/^((rgb|hsl)a?\()?var\(--/.test(e)}const TS=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,PU={rgb:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),rgba:(e,t,n,i)=>({r:e,g:t,b:n,a:i}),hsl:(e,t,n,i)=>kS({h:e,s:t,l:n,a:i}),hsla:(e,t,n,i)=>kS({h:e,s:t,l:n,a:i}),hsv:(e,t,n,i)=>gr({h:e,s:t,v:n,a:i}),hsva:(e,t,n,i)=>gr({h:e,s:t,v:n,a:i})};function ci(e){if(typeof e=="number")return{r:(e&16711680)>>16,g:(e&65280)>>8,b:e&255};if(typeof e=="string"&&TS.test(e)){const{groups:t}=e.match(TS),{fn:n,values:i}=t,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return PU[n](...r)}else if(typeof e=="string"){let t=e.startsWith("#")?e.slice(1):e;return[3,4].includes(t.length)?t=t.split("").map(n=>n+n).join(""):[6,8].includes(t.length),Tk(t)}else if(typeof e=="object"){if(Es(e,["r","g","b"]))return e;if(Es(e,["h","s","l"]))return gr(Ey(e));if(Es(e,["h","s","v"]))return gr(e)}throw new TypeError(`Invalid color: ${e==null?e:String(e)||e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function gr(e){const{h:t,s:n,v:i,a:r}=e,s=a=>{const l=(a+t/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function kS(e){return gr(Ey(e))}function lf(e){if(!e)return{h:0,s:1,v:1,a:1};const t=e.r/255,n=e.g/255,i=e.b/255,r=Math.max(t,n,i),s=Math.min(t,n,i);let o=0;r!==s&&(r===t?o=60*(0+(n-i)/(r-s)):r===n?o=60*(2+(i-t)/(r-s)):r===i&&(o=60*(4+(t-n)/(r-s)))),o<0&&(o=o+360);const a=r===0?0:(r-s)/r,l=[o,a,r];return{h:l[0],s:l[1],v:l[2],a:e.a}}function Sk(e){const{h:t,s:n,v:i,a:r}=e,s=i-i*n/2,o=s===1||s===0?0:(i-s)/Math.min(s,1-s);return{h:t,s:o,l:s,a:r}}function Ey(e){const{h:t,s:n,l:i,a:r}=e,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:t,s:o,v:s,a:r}}function Ck(e){let{r:t,g:n,b:i,a:r}=e;return r===void 0?`rgb(${t}, ${n}, ${i})`:`rgba(${t}, ${n}, ${i}, ${r})`}function Ek(e){return Ck(gr(e))}function mc(e){const t=Math.round(e).toString(16);return("00".substr(0,2-t.length)+t).toUpperCase()}function Ik(e){let{r:t,g:n,b:i,a:r}=e;return`#${[mc(t),mc(n),mc(i),r!==void 0?mc(Math.round(r*255)):""].join("")}`}function Tk(e){e=xU(e);let[t,n,i,r]=oU(e,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:t,g:n,b:i,a:r}}function kk(e){const t=Tk(e);return lf(t)}function Ak(e){return Ik(gr(e))}function xU(e){return e.startsWith("#")&&(e=e.slice(1)),e=e.replace(/([^0-9a-f])/gi,"F"),(e.length===3||e.length===4)&&(e=e.split("").map(t=>t+t).join("")),e.length!==6&&(e=cS(cS(e,6),8,"F")),e}function RU(e,t){const n=_k(Cy(e));return n[0]=n[0]+t*10,wk(bk(n))}function VU(e,t){const n=_k(Cy(e));return n[0]=n[0]-t*10,wk(bk(n))}function tv(e){const t=ci(e);return Cy(t)[1]}function DU(e,t){const n=tv(e),i=tv(t),r=Math.max(n,i),s=Math.min(n,i);return(r+.05)/(s+.05)}function Pk(e){const t=Math.abs(IS(ci(0),ci(e)));return Math.abs(IS(ci(16777215),ci(e)))>Math.min(t,50)?"#fff":"#000"}function $(e,t){return n=>Object.keys(e).reduce((i,r)=>{const o=typeof e[r]=="object"&&e[r]!=null&&!Array.isArray(e[r])?e[r]:{type:e[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,t&&!i[r].source&&(i[r].source=t),i},{})}const Se=$({class:[String,Array,Object],style:{type:[String,Array,Object],default:null}},"component");function Nt(e,t){const n=iu();if(!n)throw new Error(`[Vuetify] ${e} must be called from inside a setup function`);return n}function Zi(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const t=Nt(e).type;return Ps((t==null?void 0:t.aliasName)||(t==null?void 0:t.name))}let xk=0,xc=new WeakMap;function tn(){const e=Nt("getUid");if(xc.has(e))return xc.get(e);{const t=xk++;return xc.set(e,t),t}}tn.reset=()=>{xk=0,xc=new WeakMap};function NU(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Nt("injectSelf");const{provides:n}=t;if(n&&e in n)return n[e]}const na=Symbol.for("vuetify:defaults");function OU(e){return re(e)}function Iy(){const e=Be(na);if(!e)throw new Error("[Vuetify] Could not find defaults instance");return e}function Pt(e,t){const n=Iy(),i=re(e),r=I(()=>{if(mt(t==null?void 0:t.disabled))return n.value;const o=mt(t==null?void 0:t.scoped),a=mt(t==null?void 0:t.reset),l=mt(t==null?void 0:t.root);if(i.value==null&&!(o||a||l))return n.value;let u=kn(i.value,{prev:n.value});if(o)return u;if(a||l){const c=Number(a||1/0);for(let f=0;f<=c&&!(!u||!("prev"in u));f++)u=u.prev;return u&&typeof l=="string"&&l in u&&(u=kn(kn(u,{prev:u}),u[l])),u}return u.prev?kn(u.prev,u):u});return dt(na,r),r}function MU(e,t){var n,i;return typeof((n=e.props)==null?void 0:n[t])<"u"||typeof((i=e.props)==null?void 0:i[Ps(t)])<"u"}function LU(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Iy();const i=Nt("useDefaults");if(t=t??i.type.name??i.type.__name,!t)throw new Error("[Vuetify] Could not determine component name");const r=I(()=>{var l;return(l=n.value)==null?void 0:l[e._as??t]}),s=new Proxy(e,{get(l,u){var f,h,m,g,y,p,E;const c=Reflect.get(l,u);return u==="class"||u==="style"?[(f=r.value)==null?void 0:f[u],c].filter(P=>P!=null):typeof u=="string"&&!MU(i.vnode,u)?((h=r.value)==null?void 0:h[u])!==void 0?(m=r.value)==null?void 0:m[u]:((y=(g=n.value)==null?void 0:g.global)==null?void 0:y[u])!==void 0?(E=(p=n.value)==null?void 0:p.global)==null?void 0:E[u]:c:c}}),o=ye();Vt(()=>{if(r.value){const l=Object.entries(r.value).filter(u=>{let[c]=u;return c.startsWith(c[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=NU(na,i);dt(na,I(()=>o.value?kn((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function Zn(e){if(e._setup=e._setup??e.setup,!e.name)return e;if(e._setup){e.props=$(e.props??{},e.name)();const t=Object.keys(e.props).filter(n=>n!=="class"&&n!=="style");e.filterProps=function(i){return dk(i,t)},e.props._as=String,e.setup=function(i,r){const s=Iy();if(!s.value)return e._setup(i,r);const{props:o,provideSubDefaults:a}=LU(i,i._as??e.name,s),l=e._setup(o,r);return a(),l}}return e}function Y(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t=>(e?Zn:Zv)(t)}function FU(e,t){return t.props=e,t}function er(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return Y()({name:n??Qi(fi(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...Se()},setup(i,r){let{slots:s}=r;return()=>{var o;return Vi(i.tag,{class:[e,i.class],style:i.style},(o=s.default)==null?void 0:o.call(s))}}})}function Rk(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const jl="cubic-bezier(0.4, 0, 0.2, 1)",BU="cubic-bezier(0.0, 0, 0.2, 1)",$U="cubic-bezier(0.4, 0, 1, 1)";function AS(e,t,n){return Object.keys(e).filter(i=>of(i)&&i.endsWith(t)).reduce((i,r)=>(i[r.slice(0,-t.length)]=s=>e[r](s,n(s)),i),{})}function Ty(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(t?UU(e):ky(e))return e;e=e.parentElement}return document.scrollingElement}function gd(e,t){const n=[];if(t&&e&&!t.contains(e))return n;for(;e&&(ky(e)&&n.push(e),e!==t);)e=e.parentElement;return n}function ky(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return t.overflowY==="scroll"||t.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function UU(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return["scroll","auto"].includes(t.overflowY)}function HU(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function te(e){const t=Nt("useRender");t.render=e}function Pe(e,t,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=Nt("useProxiedModel"),o=re(e[t]!==void 0?e[t]:n),a=Ps(t),u=I(a!==t?()=>{var f,h,m,g;return e[t],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(t)||(h=s.vnode.props)!=null&&h.hasOwnProperty(a))&&((m=s.vnode.props)!=null&&m.hasOwnProperty(`onUpdate:${t}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,h;return e[t],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(t)&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${t}`)))});Hn(()=>!u.value,()=>{be(()=>e[t],f=>{o.value=f})});const c=I({get(){const f=e[t];return i(u.value?f:o.value)},set(f){const h=r(f),m=$e(u.value?e[t]:o.value);m===h||i(m)===f||(o.value=h,s==null||s.emit(`update:${t}`,h))}});return Object.defineProperty(c,"externalValue",{get:()=>u.value?e[t]:o.value}),c}const jU={badge:"Badge",open:"Open",close:"Close",dismiss:"Dismiss",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM",title:"Select Time"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},PS="$vuetify.",xS=(e,t)=>e.replace(/\{(\d+)\}/g,(n,i)=>String(t[+i])),Vk=(e,t,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(PS))return xS(i,s);const a=i.replace(PS,""),l=e.value&&n.value[e.value],u=t.value&&n.value[t.value];let c=$l(l,a,null);return c||(`${i}${e.value}`,c=$l(u,a,null)),c||(c=i),typeof c!="string"&&(c=i),xS(c,s)};function Dk(e,t){return(n,i)=>new Intl.NumberFormat([e.value,t.value],i).format(n)}function Oh(e,t,n){const i=Pe(e,t,e[t]??n.value);return i.value=e[t]??n.value,be(n,r=>{e[t]==null&&(i.value=n.value)}),i}function Nk(e){return t=>{const n=Oh(t,"locale",e.current),i=Oh(t,"fallback",e.fallback),r=Oh(t,"messages",e.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:Vk(n,i,r),n:Dk(n,i),provide:Nk({current:n,fallback:i,messages:r})}}}function zU(e){const t=ye((e==null?void 0:e.locale)??"en"),n=ye((e==null?void 0:e.fallback)??"en"),i=re({en:jU,...e==null?void 0:e.messages});return{name:"vuetify",current:t,fallback:n,messages:i,t:Vk(t,n,i),n:Dk(t,n),provide:Nk({current:t,fallback:n,messages:i})}}const ia=Symbol.for("vuetify:locale");function WU(e){return e.name!=null}function qU(e){const t=e!=null&&e.adapter&&WU(e==null?void 0:e.adapter)?e==null?void 0:e.adapter:zU(e),n=YU(t,e);return{...t,...n}}function Ot(){const e=Be(ia);if(!e)throw new Error("[Vuetify] Could not find injected locale instance");return e}function GU(e){const t=Be(ia);if(!t)throw new Error("[Vuetify] Could not find injected locale instance");const n=t.provide(e),i=QU(n,t.rtl,e),r={...n,...i};return dt(ia,r),r}function KU(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function YU(e,t){const n=re((t==null?void 0:t.rtl)??KU()),i=I(()=>n.value[e.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:I(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function QU(e,t,n){const i=I(()=>n.rtl??t.value[e.current.value]??!1);return{isRtl:i,rtl:t,rtlClasses:I(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function Kt(){const e=Be(ia);if(!e)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const zl={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function XU(e,t){const n=[];let i=[];const r=Ok(e),s=Mk(e),o=(r.getDay()-zl[t.slice(-2).toUpperCase()]+7)%7,a=(s.getDay()-zl[t.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<o;l++){const u=new Date(r);u.setDate(u.getDate()-(o-l)),i.push(u)}for(let l=1;l<=s.getDate();l++){const u=new Date(e.getFullYear(),e.getMonth(),l);i.push(u),i.length===7&&(n.push(i),i=[])}for(let l=1;l<7-a;l++){const u=new Date(s);u.setDate(u.getDate()+l),i.push(u)}return i.length>0&&n.push(i),n}function JU(e,t){const n=new Date(e);for(;n.getDay()!==(zl[t.slice(-2).toUpperCase()]??0);)n.setDate(n.getDate()-1);return n}function ZU(e,t){const n=new Date(e),i=((zl[t.slice(-2).toUpperCase()]??0)+6)%7;for(;n.getDay()!==i;)n.setDate(n.getDate()+1);return n}function Ok(e){return new Date(e.getFullYear(),e.getMonth(),1)}function Mk(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function e5(e){const t=e.split("-").map(Number);return new Date(t[0],t[1]-1,t[2])}const t5=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function Lk(e){if(e==null)return new Date;if(e instanceof Date)return e;if(typeof e=="string"){let t;if(t5.test(e))return e5(e);if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const RS=new Date(2e3,0,2);function n5(e){const t=zl[e.slice(-2).toUpperCase()];return Ui(7).map(n=>{const i=new Date(RS);return i.setDate(RS.getDate()+t+n),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(i)})}function i5(e,t,n,i){const r=Lk(e)??new Date,s=i==null?void 0:i[t];if(typeof s=="function")return s(r,t,n);let o={};switch(t){case"fullDate":o={year:"numeric",month:"long",day:"numeric"};break;case"fullDateWithWeekday":o={weekday:"long",year:"numeric",month:"long",day:"numeric"};break;case"normalDate":const a=r.getDate(),l=new Intl.DateTimeFormat(n,{month:"long"}).format(r);return`${a} ${l}`;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"shortDate":o={month:"short",day:"numeric"};break;case"year":o={year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"weekday":o={weekday:"long"};break;case"weekdayShort":o={weekday:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"hours12h":o={hour:"numeric",hour12:!0};break;case"hours24h":o={hour:"numeric",hour12:!1};break;case"minutes":o={minute:"numeric"};break;case"seconds":o={second:"numeric"};break;case"fullTime":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime12h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullTime24h":o={hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"fullDateTime":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime12h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"fullDateTime24h":o={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDate":o={year:"numeric",month:"2-digit",day:"2-digit"};break;case"keyboardDateTime":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;case"keyboardDateTime12h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!0};break;case"keyboardDateTime24h":o={year:"numeric",month:"2-digit",day:"2-digit",hour:"numeric",minute:"numeric",second:"numeric",hour12:!1};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function r5(e,t){const n=e.toJsDate(t),i=n.getFullYear(),r=dS(String(n.getMonth()+1),2,"0"),s=dS(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function s5(e){const[t,n,i]=e.split("-").map(Number);return new Date(t,n-1,i)}function o5(e,t){const n=new Date(e);return n.setMinutes(n.getMinutes()+t),n}function a5(e,t){const n=new Date(e);return n.setHours(n.getHours()+t),n}function l5(e,t){const n=new Date(e);return n.setDate(n.getDate()+t),n}function u5(e,t){const n=new Date(e);return n.setDate(n.getDate()+t*7),n}function c5(e,t){const n=new Date(e);return n.setDate(1),n.setMonth(n.getMonth()+t),n}function d5(e){return e.getFullYear()}function f5(e){return e.getMonth()}function h5(e){return e.getDate()}function m5(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}function v5(e){return new Date(e.getFullYear(),e.getMonth()-1,1)}function g5(e){return e.getHours()}function y5(e){return e.getMinutes()}function p5(e){return new Date(e.getFullYear(),0,1)}function _5(e){return new Date(e.getFullYear(),11,31)}function b5(e,t){return yd(e,t[0])&&C5(e,t[1])}function w5(e){const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())}function yd(e,t){return e.getTime()>t.getTime()}function S5(e,t){return yd(nv(e),nv(t))}function C5(e,t){return e.getTime()<t.getTime()}function VS(e,t){return e.getTime()===t.getTime()}function E5(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function I5(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function T5(e,t){return e.getFullYear()===t.getFullYear()}function k5(e,t,n){const i=new Date(e),r=new Date(t);switch(n){case"years":return i.getFullYear()-r.getFullYear();case"quarters":return Math.floor((i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12)/4);case"months":return i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12;case"weeks":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24*7));case"days":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24));case"hours":return Math.floor((i.getTime()-r.getTime())/(1e3*60*60));case"minutes":return Math.floor((i.getTime()-r.getTime())/(1e3*60));case"seconds":return Math.floor((i.getTime()-r.getTime())/1e3);default:return i.getTime()-r.getTime()}}function A5(e,t){const n=new Date(e);return n.setHours(t),n}function P5(e,t){const n=new Date(e);return n.setMinutes(t),n}function x5(e,t){const n=new Date(e);return n.setMonth(t),n}function R5(e,t){const n=new Date(e);return n.setDate(t),n}function V5(e,t){const n=new Date(e);return n.setFullYear(t),n}function nv(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0,0)}function D5(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}class N5{constructor(t){this.locale=t.locale,this.formats=t.formats}date(t){return Lk(t)}toJsDate(t){return t}toISO(t){return r5(this,t)}parseISO(t){return s5(t)}addMinutes(t,n){return o5(t,n)}addHours(t,n){return a5(t,n)}addDays(t,n){return l5(t,n)}addWeeks(t,n){return u5(t,n)}addMonths(t,n){return c5(t,n)}getWeekArray(t){return XU(t,this.locale)}startOfWeek(t){return JU(t,this.locale)}endOfWeek(t){return ZU(t,this.locale)}startOfMonth(t){return Ok(t)}endOfMonth(t){return Mk(t)}format(t,n){return i5(t,n,this.locale,this.formats)}isEqual(t,n){return VS(t,n)}isValid(t){return w5(t)}isWithinRange(t,n){return b5(t,n)}isAfter(t,n){return yd(t,n)}isAfterDay(t,n){return S5(t,n)}isBefore(t,n){return!yd(t,n)&&!VS(t,n)}isSameDay(t,n){return E5(t,n)}isSameMonth(t,n){return I5(t,n)}isSameYear(t,n){return T5(t,n)}setMinutes(t,n){return P5(t,n)}setHours(t,n){return A5(t,n)}setMonth(t,n){return x5(t,n)}setDate(t,n){return R5(t,n)}setYear(t,n){return V5(t,n)}getDiff(t,n,i){return k5(t,n,i)}getWeekdays(){return n5(this.locale)}getYear(t){return d5(t)}getMonth(t){return f5(t)}getDate(t){return h5(t)}getNextMonth(t){return m5(t)}getPreviousMonth(t){return v5(t)}getHours(t){return g5(t)}getMinutes(t){return y5(t)}startOfDay(t){return nv(t)}endOfDay(t){return D5(t)}startOfYear(t){return p5(t)}endOfYear(t){return _5(t)}}const Fk=Symbol.for("vuetify:date-options"),DS=Symbol.for("vuetify:date-adapter");function O5(e,t){const n=kn({adapter:N5,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e);return{options:n,instance:Bk(n,t)}}function Bk(e,t){const n=En(typeof e.adapter=="function"?new e.adapter({locale:e.locale[t.current.value]??t.current.value,formats:e.formats}):e.adapter);return be(t.current,i=>{n.locale=e.locale[i]??i??n.locale}),n}function wu(){const e=Be(Fk);if(!e)throw new Error("[Vuetify] Could not find injected date options");const t=Ot();return Bk(e,t)}function M5(e,t){const n=e.toJsDate(t);let i=n.getFullYear(),r=new Date(i,0,1);if(n<r)i=i-1,r=new Date(i,0,1);else{const a=new Date(i+1,0,1);n>=a&&(i=i+1,r=a)}const s=Math.abs(n.getTime()-r.getTime()),o=Math.ceil(s/(1e3*60*60*24));return Math.floor(o/7)+1}const uf=["sm","md","lg","xl","xxl"],iv=Symbol.for("vuetify:display"),NS={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},L5=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:NS;return kn(NS,e)};function OS(e){return at&&!e?window.innerWidth:typeof e=="object"&&e.clientWidth||0}function MS(e){return at&&!e?window.innerHeight:typeof e=="object"&&e.clientHeight||0}function LS(e){const t=at&&!e?window.navigator.userAgent:"ssr";function n(g){return!!t.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),u=n(/firefox/i),c=n(/opera/i),f=n(/win/i),h=n(/mac/i),m=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:u,opera:c,win:f,mac:h,linux:m,touch:Z4,ssr:t==="ssr"}}function F5(e,t){const{thresholds:n,mobileBreakpoint:i}=L5(e),r=ye(MS(t)),s=ye(LS(t)),o=En({}),a=ye(OS(t));function l(){r.value=MS(),a.value=OS()}function u(){l(),s.value=LS()}return Vt(()=>{const c=a.value<n.sm,f=a.value<n.md&&!c,h=a.value<n.lg&&!(f||c),m=a.value<n.xl&&!(h||f||c),g=a.value<n.xxl&&!(m||h||f||c),y=a.value>=n.xxl,p=c?"xs":f?"sm":h?"md":m?"lg":g?"xl":"xxl",E=typeof i=="number"?i:n[i],P=a.value<E;o.xs=c,o.sm=f,o.md=h,o.lg=m,o.xl=g,o.xxl=y,o.smAndUp=!c,o.mdAndUp=!(c||f),o.lgAndUp=!(c||f||h),o.xlAndUp=!(c||f||h||m),o.smAndDown=!(h||m||g||y),o.mdAndDown=!(m||g||y),o.lgAndDown=!(g||y),o.xlAndDown=!y,o.name=p,o.height=r.value,o.width=a.value,o.mobile=P,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),at&&window.addEventListener("resize",l,{passive:!0}),{...Id(o),update:u,ssr:!!t}}const eo=$({mobile:{type:Boolean,default:!1},mobileBreakpoint:[Number,String]},"display");function vi(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Zi();const n=Be(iv);if(!n)throw new Error("Could not find Vuetify display injection");const i=I(()=>{if(e.mobile!=null)return e.mobile;if(!e.mobileBreakpoint)return n.mobile.value;const s=typeof e.mobileBreakpoint=="number"?e.mobileBreakpoint:n.thresholds.value[e.mobileBreakpoint];return n.width.value<s}),r=I(()=>t?{[`${t}--mobile`]:i.value}:{});return{...n,displayClasses:r,mobile:i}}const $k=Symbol.for("vuetify:goto");function Uk(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:e=>e,easeInQuad:e=>e**2,easeOutQuad:e=>e*(2-e),easeInOutQuad:e=>e<.5?2*e**2:-1+(4-2*e)*e,easeInCubic:e=>e**3,easeOutCubic:e=>--e**3+1,easeInOutCubic:e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,easeInQuart:e=>e**4,easeOutQuart:e=>1- --e**4,easeInOutQuart:e=>e<.5?8*e**4:1-8*--e**4,easeInQuint:e=>e**5,easeOutQuint:e=>1+--e**5,easeInOutQuint:e=>e<.5?16*e**5:1+16*--e**5}}}function B5(e){return Ay(e)??(document.scrollingElement||document.body)}function Ay(e){return typeof e=="string"?document.querySelector(e):_y(e)}function Mh(e,t,n){if(typeof e=="number")return t&&n?-e:e;let i=Ay(e),r=0;for(;i;)r+=t?i.offsetLeft:i.offsetTop,i=i.offsetParent;return r}function $5(e,t){return{rtl:t.isRtl,options:kn(Uk(),e)}}async function FS(e,t,n,i){const r=n?"scrollLeft":"scrollTop",s=kn((i==null?void 0:i.options)??Uk(),t),o=i==null?void 0:i.rtl.value,a=(typeof e=="number"?e:Ay(e))??0,l=s.container==="parent"&&a instanceof HTMLElement?a.parentElement:B5(s.container),u=typeof s.easing=="function"?s.easing:s.patterns[s.easing];if(!u)throw new TypeError(`Easing function "${s.easing}" not found.`);let c;if(typeof a=="number")c=Mh(a,n,o);else if(c=Mh(a,n,o)-Mh(l,n,o),s.layout){const g=window.getComputedStyle(a).getPropertyValue("--v-layout-top");g&&(c-=parseInt(g,10))}c+=s.offset,c=H5(l,c,!!o,!!n);const f=l[r]??0;if(c===f)return Promise.resolve(c);const h=performance.now();return new Promise(m=>requestAnimationFrame(function g(y){const E=(y-h)/s.duration,P=Math.floor(f+(c-f)*u(Lt(E,0,1)));if(l[r]=P,E>=1&&Math.abs(P-l[r])<10)return m(c);if(E>2)return m(l[r]);requestAnimationFrame(g)}))}function U5(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const t=Be($k),{isRtl:n}=Kt();if(!t)throw new Error("[Vuetify] Could not find injected goto instance");const i={...t,rtl:I(()=>t.rtl.value||n.value)};async function r(s,o){return FS(s,kn(e,o),!1,i)}return r.horizontal=async(s,o)=>FS(s,kn(e,o),!0,i),r}function H5(e,t,n,i){const{scrollWidth:r,scrollHeight:s}=e,[o,a]=e===document.scrollingElement?[window.innerWidth,window.innerHeight]:[e.offsetWidth,e.offsetHeight];let l,u;return i?n?(l=-(r-o),u=0):(l=0,u=r-o):(l=0,u=s+-a),Math.max(Math.min(t,u),l)}const j5={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",treeviewCollapse:"mdi-menu-down",treeviewExpand:"mdi-menu-right",eyeDropper:"mdi-eyedropper"},z5={component:e=>Vi(xy,{...e,class:"mdi"})},Fe=[String,Function,Object,Array],rv=Symbol.for("vuetify:icons"),cf=$({icon:{type:Fe},tag:{type:String,required:!0}},"icon"),sv=Y()({name:"VComponentIcon",props:cf(),setup(e,t){let{slots:n}=t;return()=>{const i=e.icon;return v(e.tag,null,{default:()=>{var r;return[e.icon?v(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),Py=Zn({name:"VSvgIcon",inheritAttrs:!1,props:cf(),setup(e,t){let{attrs:n}=t;return()=>v(e.tag,ne(n,{style:null}),{default:()=>[v("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map(i=>Array.isArray(i)?v("path",{d:i[0],"fill-opacity":i[1]},null):v("path",{d:i},null)):v("path",{d:e.icon},null)])]})}}),W5=Zn({name:"VLigatureIcon",props:cf(),setup(e){return()=>v(e.tag,null,{default:()=>[e.icon]})}}),xy=Zn({name:"VClassIcon",props:cf(),setup(e){return()=>v(e.tag,{class:e.icon},null)}});function q5(){return{svg:{component:Py},class:{component:xy}}}function G5(e){const t=q5(),n=(e==null?void 0:e.defaultSet)??"mdi";return n==="mdi"&&!t.mdi&&(t.mdi=z5),kn({defaultSet:n,sets:t,aliases:{...j5,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z","vuetify-play":["m6.376 13.184-4.11-7.192C1.505 4.66 2.467 3 4.003 3h8.532l-.953 1.576-.006.01-.396.677c-.429.732-.214 1.507.194 2.015.404.503 1.092.878 1.869.806a3.72 3.72 0 0 1 1.005.022c.276.053.434.143.523.237.138.146.38.635-.25 2.09-.893 1.63-1.553 1.722-1.847 1.677-.213-.033-.468-.158-.756-.406a4.95 4.95 0 0 1-.8-.927c-.39-.564-1.04-.84-1.66-.846-.625-.006-1.316.27-1.693.921l-.478.826-.911 1.506Z",["M9.093 11.552c.046-.079.144-.15.32-.148a.53.53 0 0 1 .43.207c.285.414.636.847 1.046 1.2.405.35.914.662 1.516.754 1.334.205 2.502-.698 3.48-2.495l.014-.028.013-.03c.687-1.574.774-2.852-.005-3.675-.37-.391-.861-.586-1.333-.676a5.243 5.243 0 0 0-1.447-.044c-.173.016-.393-.073-.54-.257-.145-.18-.127-.316-.082-.392l.393-.672L14.287 3h5.71c1.536 0 2.499 1.659 1.737 2.992l-7.997 13.996c-.768 1.344-2.706 1.344-3.473 0l-3.037-5.314 1.377-2.278.004-.006.004-.007.481-.831Z",.6]]}},e)}const K5=e=>{const t=Be(rv);if(!t)throw new Error("Missing Vuetify Icons provide!");return{iconData:I(()=>{var l;const i=mt(e);if(!i)return{component:sv};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=t.aliases)==null?void 0:l[r.slice(1)])),Array.isArray(r))return{component:Py,icon:r};if(typeof r!="string")return{component:sv,icon:r};const s=Object.keys(t.sets).find(u=>typeof r=="string"&&r.startsWith(`${u}:`)),o=s?r.slice(s.length+1):r;return{component:t.sets[s??t.defaultSet].component,icon:o}})}},Wl=Symbol.for("vuetify:theme"),Ke=$({theme:String},"theme");function BS(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function Y5(){var i,r;let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:BS();const t=BS();if(!e)return{...t,isDisabled:!0};const n={};for(const[s,o]of Object.entries(e.themes??{})){const a=o.dark||s==="dark"?(i=t.themes)==null?void 0:i.dark:(r=t.themes)==null?void 0:r.light;n[s]=kn(a,o)}return kn(t,{...e,themes:n})}function Q5(e){const t=Y5(e),n=re(t.defaultTheme),i=re(t.themes),r=I(()=>{const c={};for(const[f,h]of Object.entries(i.value)){const m=c[f]={...h,colors:{...h.colors}};if(t.variations)for(const g of t.variations.colors){const y=m.colors[g];if(y)for(const p of["lighten","darken"]){const E=p==="lighten"?RU:VU;for(const P of Ui(t.variations[p],1))m.colors[`${g}-${p}-${P}`]=Ik(E(ci(y),P))}}for(const g of Object.keys(m.colors)){if(/^on-[a-z]/.test(g)||m.colors[`on-${g}`])continue;const y=`on-${g}`,p=ci(m.colors[g]);m.colors[y]=Pk(p)}}return c}),s=I(()=>r.value[n.value]),o=I(()=>{var g;const c=[];(g=s.value)!=null&&g.dark&&gs(c,":root",["color-scheme: dark"]),gs(c,":root",$S(s.value));for(const[y,p]of Object.entries(r.value))gs(c,`.v-theme--${y}`,[`color-scheme: ${p.dark?"dark":"normal"}`,...$S(p)]);const f=[],h=[],m=new Set(Object.values(r.value).flatMap(y=>Object.keys(y.colors)));for(const y of m)/^on-[a-z]/.test(y)?gs(h,`.${y}`,[`color: rgb(var(--v-theme-${y})) !important`]):(gs(f,`.bg-${y}`,[`--v-theme-overlay-multiplier: var(--v-theme-${y}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${y})) !important`,`color: rgb(var(--v-theme-on-${y})) !important`]),gs(h,`.text-${y}`,[`color: rgb(var(--v-theme-${y})) !important`]),gs(h,`.border-${y}`,[`--v-border-color: var(--v-theme-${y})`]));return c.push(...f,...h),c.map((y,p)=>p===0?y:`    ${y}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:t.cspNonce||!1}]}}function l(c){if(t.isDisabled)return;const f=c._context.provides.usehead;if(f)if(f.push){const h=f.push(a);at&&be(o,()=>{h.patch(a)})}else at?(f.addHeadObjs(I(a)),Vt(()=>f.updateDOM())):f.addHeadObjs(a());else{let m=function(){if(typeof document<"u"&&!h){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",t.cspNonce&&g.setAttribute("nonce",t.cspNonce),h=g,document.head.appendChild(h)}h&&(h.innerHTML=o.value)},h=at?document.getElementById("vuetify-theme-stylesheet"):null;at?be(o,m,{immediate:!0}):m()}}const u=I(()=>t.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:t.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:u,styles:o,global:{name:n,current:s}}}function it(e){Nt("provideTheme");const t=Be(Wl,null);if(!t)throw new Error("Could not find Vuetify theme injection");const n=I(()=>e.theme??t.name.value),i=I(()=>t.themes.value[n.value]),r=I(()=>t.isDisabled?void 0:`v-theme--${n.value}`),s={...t,name:n,current:i,themeClasses:r};return dt(Wl,s),s}function Hk(){Nt("useTheme");const e=Be(Wl,null);if(!e)throw new Error("Could not find Vuetify theme injection");return e}function gs(e,t,n){e.push(`${t} {
`,...n.map(i=>`  ${i};
`),`}