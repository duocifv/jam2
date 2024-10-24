"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{4939:function(t,e,i){i.d(e,{j:function(){return r}});var n=i(9010),s=i(6298),r=new class extends n.l{#t;#e;#i;constructor(){super(),this.#i=t=>{if(!s.sk&&window.addEventListener){let e=()=>t();return window.addEventListener("visibilitychange",e,!1),()=>{window.removeEventListener("visibilitychange",e)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(t=>{"boolean"==typeof t?this.setFocused(t):this.onFocus()})}setFocused(t){this.#t!==t&&(this.#t=t,this.onFocus())}onFocus(){let t=this.isFocused();this.listeners.forEach(e=>{e(t)})}isFocused(){return"boolean"==typeof this.#t?this.#t:globalThis.document?.visibilityState!=="hidden"}}},836:function(t,e,i){i.d(e,{Gm:function(){return s},Qy:function(){return a},ZF:function(){return u}});var n=i(6298);function s(t){return{onFetch:(e,i)=>{let s=e.options,a=e.fetchOptions?.meta?.fetchMore?.direction,u=e.state.data?.pages||[],c=e.state.data?.pageParams||[],h={pages:[],pageParams:[]},l=0,d=async()=>{let i=!1,d=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(e.signal.aborted?i=!0:e.signal.addEventListener("abort",()=>{i=!0}),e.signal)})},f=(0,n.cG)(e.options,e.fetchOptions),p=async(t,s,r)=>{if(i)return Promise.reject();if(null==s&&t.pages.length)return Promise.resolve(t);let o={queryKey:e.queryKey,pageParam:s,direction:r?"backward":"forward",meta:e.options.meta};d(o);let a=await f(o),{maxPages:u}=e.options,c=r?n.Ht:n.VX;return{pages:c(t.pages,a,u),pageParams:c(t.pageParams,s,u)}};if(a&&u.length){let t="backward"===a,e={pages:u,pageParams:c},i=(t?o:r)(s,e);h=await p(e,i,t)}else{let e=t??u.length;do{let t=0===l?c[0]??s.initialPageParam:r(s,h);if(l>0&&null==t)break;h=await p(h,t),l++}while(l<e)}return h};e.options.persister?e.fetchFn=()=>e.options.persister?.(d,{queryKey:e.queryKey,meta:e.options.meta,signal:e.signal},i):e.fetchFn=d}}}function r(t,{pages:e,pageParams:i}){let n=e.length-1;return e.length>0?t.getNextPageParam(e[n],e,i[n],i):void 0}function o(t,{pages:e,pageParams:i}){return e.length>0?t.getPreviousPageParam?.(e[0],e,i[0],i):void 0}function a(t,e){return!!e&&null!=r(t,e)}function u(t,e){return!!e&&!!t.getPreviousPageParam&&null!=o(t,e)}},2812:function(t,e,i){i.d(e,{R:function(){return a},m:function(){return o}});var n=i(9948),s=i(3494),r=i(924),o=class extends s.F{#n;#s;#r;constructor(t){super(),this.mutationId=t.mutationId,this.#s=t.mutationCache,this.#n=[],this.state=t.state||a(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){this.#n.includes(t)||(this.#n.push(t),this.clearGcTimeout(),this.#s.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.#n=this.#n.filter(e=>e!==t),this.scheduleGc(),this.#s.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.#n.length||("pending"===this.state.status?this.scheduleGc():this.#s.remove(this))}continue(){return this.#r?.continue()??this.execute(this.state.variables)}async execute(t){this.#r=(0,r.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(Error("No mutationFn found")),onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>this.#s.canRun(this)});let e="pending"===this.state.status,i=!this.#r.canStart();try{if(!e){this.#o({type:"pending",variables:t,isPaused:i}),await this.#s.config.onMutate?.(t,this);let e=await this.options.onMutate?.(t);e!==this.state.context&&this.#o({type:"pending",context:e,variables:t,isPaused:i})}let n=await this.#r.start();return await this.#s.config.onSuccess?.(n,t,this.state.context,this),await this.options.onSuccess?.(n,t,this.state.context),await this.#s.config.onSettled?.(n,null,this.state.variables,this.state.context,this),await this.options.onSettled?.(n,null,t,this.state.context),this.#o({type:"success",data:n}),n}catch(e){try{throw await this.#s.config.onError?.(e,t,this.state.context,this),await this.options.onError?.(e,t,this.state.context),await this.#s.config.onSettled?.(void 0,e,this.state.variables,this.state.context,this),await this.options.onSettled?.(void 0,e,t,this.state.context),e}finally{this.#o({type:"error",error:e})}}finally{this.#s.runNext(this)}}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"pending":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}})(this.state),n.V.batch(()=>{this.#n.forEach(e=>{e.onMutationUpdate(t)}),this.#s.notify({mutation:this,type:"updated",action:t})})}};function a(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}},9948:function(t,e,i){i.d(e,{V:function(){return n}});var n=function(){let t=[],e=0,i=t=>{t()},n=t=>{t()},s=t=>setTimeout(t,0),r=n=>{e?t.push(n):s(()=>{i(n)})},o=()=>{let e=t;t=[],e.length&&s(()=>{n(()=>{e.forEach(t=>{i(t)})})})};return{batch:t=>{let i;e++;try{i=t()}finally{--e||o()}return i},batchCalls:t=>(...e)=>{r(()=>{t(...e)})},schedule:r,setNotifyFunction:t=>{i=t},setBatchNotifyFunction:t=>{n=t},setScheduler:t=>{s=t}}}()},9937:function(t,e,i){i.d(e,{N:function(){return r}});var n=i(9010),s=i(6298),r=new class extends n.l{#a=!0;#e;#i;constructor(){super(),this.#i=t=>{if(!s.sk&&window.addEventListener){let e=()=>t(!0),i=()=>t(!1);return window.addEventListener("online",e,!1),window.addEventListener("offline",i,!1),()=>{window.removeEventListener("online",e),window.removeEventListener("offline",i)}}}}onSubscribe(){this.#e||this.setEventListener(this.#i)}onUnsubscribe(){this.hasListeners()||(this.#e?.(),this.#e=void 0)}setEventListener(t){this.#i=t,this.#e?.(),this.#e=t(this.setOnline.bind(this))}setOnline(t){this.#a!==t&&(this.#a=t,this.listeners.forEach(e=>{e(t)}))}isOnline(){return this.#a}}},2459:function(t,e,i){i.d(e,{A:function(){return a},z:function(){return u}});var n=i(6298),s=i(9948),r=i(924),o=i(3494),a=class extends o.F{#u;#c;#h;#r;#l;#d;constructor(t){super(),this.#d=!1,this.#l=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.#h=t.cache,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.#u=function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,n=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?n??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"pending",fetchStatus:"idle"}}(this.options),this.state=t.state??this.#u,this.scheduleGc()}get meta(){return this.options.meta}get promise(){return this.#r?.promise}setOptions(t){this.options={...this.#l,...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.#h.remove(this)}setData(t,e){let i=(0,n.oE)(this.state.data,t,this.options);return this.#o({data:i,type:"success",dataUpdatedAt:e?.updatedAt,manual:e?.manual}),i}setState(t,e){this.#o({type:"setState",state:t,setStateOptions:e})}cancel(t){let e=this.#r?.promise;return this.#r?.cancel(t),e?e.then(n.ZT).catch(n.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.#u)}isActive(){return this.observers.some(t=>!1!==(0,n.Nc)(t.options.enabled,this))}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===n.CN||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStale(){return!!this.state.isInvalidated||(this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):void 0===this.state.data)}isStaleByTime(t=0){return this.state.isInvalidated||void 0===this.state.data||!(0,n.Kp)(this.state.dataUpdatedAt,t)}onFocus(){let t=this.observers.find(t=>t.shouldFetchOnWindowFocus());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}onOnline(){let t=this.observers.find(t=>t.shouldFetchOnReconnect());t?.refetch({cancelRefetch:!1}),this.#r?.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.#h.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.#r&&(this.#d?this.#r.cancel({revert:!0}):this.#r.cancelRetry()),this.scheduleGc()),this.#h.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.#o({type:"invalidate"})}fetch(t,e){if("idle"!==this.state.fetchStatus){if(void 0!==this.state.data&&e?.cancelRefetch)this.cancel({silent:!0});else if(this.#r)return this.#r.continueRetry(),this.#r.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}let i=new AbortController,s=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>(this.#d=!0,i.signal)})},o={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>{let t=(0,n.cG)(this.options,e),i={queryKey:this.queryKey,meta:this.meta};return(s(i),this.#d=!1,this.options.persister)?this.options.persister(t,i,this):t(i)}};s(o),this.options.behavior?.onFetch(o,this),this.#c=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==o.fetchOptions?.meta)&&this.#o({type:"fetch",meta:o.fetchOptions?.meta});let a=t=>{(0,r.DV)(t)&&t.silent||this.#o({type:"error",error:t}),(0,r.DV)(t)||(this.#h.config.onError?.(t,this),this.#h.config.onSettled?.(this.state.data,t,this)),this.scheduleGc()};return this.#r=(0,r.Mz)({initialPromise:e?.initialPromise,fn:o.fetchFn,abort:i.abort.bind(i),onSuccess:t=>{if(void 0===t){a(Error(`${this.queryHash} data is undefined`));return}try{this.setData(t)}catch(t){a(t);return}this.#h.config.onSuccess?.(t,this),this.#h.config.onSettled?.(t,this.state.error,this),this.scheduleGc()},onError:a,onFail:(t,e)=>{this.#o({type:"failed",failureCount:t,error:e})},onPause:()=>{this.#o({type:"pause"})},onContinue:()=>{this.#o({type:"continue"})},retry:o.options.retry,retryDelay:o.options.retryDelay,networkMode:o.options.networkMode,canRun:()=>!0}),this.#r.start()}#o(t){this.state=(e=>{switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,...u(e.data,this.options),fetchMeta:t.meta??null};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=t.error;if((0,r.DV)(i)&&i.revert&&this.#c)return{...this.#c,fetchStatus:"idle"};return{...e,error:i,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),s.V.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate()}),this.#h.notify({query:this,type:"updated",action:t})})}};function u(t,e){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:(0,r.Kw)(e.networkMode)?"fetching":"paused",...void 0===t&&{error:null,status:"pending"}}}},3494:function(t,e,i){i.d(e,{F:function(){return s}});var n=i(6298),s=class{#f;destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,n.PN)(this.gcTime)&&(this.#f=setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(t){this.gcTime=Math.max(this.gcTime||0,t??(n.sk?1/0:3e5))}clearGcTimeout(){this.#f&&(clearTimeout(this.#f),this.#f=void 0)}}},924:function(t,e,i){i.d(e,{DV:function(){return h},Kw:function(){return u},Mz:function(){return l}});var n=i(4939),s=i(9937),r=i(6922),o=i(6298);function a(t){return Math.min(1e3*2**t,3e4)}function u(t){return(t??"online")!=="online"||s.N.isOnline()}var c=class extends Error{constructor(t){super("CancelledError"),this.revert=t?.revert,this.silent=t?.silent}};function h(t){return t instanceof c}function l(t){let e,i=!1,h=0,l=!1,d=(0,r.O)(),f=()=>n.j.isFocused()&&("always"===t.networkMode||s.N.isOnline())&&t.canRun(),p=()=>u(t.networkMode)&&t.canRun(),y=i=>{l||(l=!0,t.onSuccess?.(i),e?.(),d.resolve(i))},v=i=>{l||(l=!0,t.onError?.(i),e?.(),d.reject(i))},m=()=>new Promise(i=>{e=t=>{(l||f())&&i(t)},t.onPause?.()}).then(()=>{e=void 0,l||t.onContinue?.()}),b=()=>{let e;if(l)return;let n=0===h?t.initialPromise:void 0;try{e=n??t.fn()}catch(t){e=Promise.reject(t)}Promise.resolve(e).then(y).catch(e=>{if(l)return;let n=t.retry??(o.sk?0:3),s=t.retryDelay??a,r="function"==typeof s?s(h,e):s,u=!0===n||"number"==typeof n&&h<n||"function"==typeof n&&n(h,e);if(i||!u){v(e);return}h++,t.onFail?.(h,e),(0,o._v)(r).then(()=>f()?void 0:m()).then(()=>{i?v(e):b()})})};return{promise:d,cancel:e=>{l||(v(new c(e)),t.abort?.())},continue:()=>(e?.(),d),cancelRetry:()=>{i=!0},continueRetry:()=>{i=!1},canStart:p,start:()=>(p()?b():m().then(b),d)}}},9010:function(t,e,i){i.d(e,{l:function(){return n}});var n=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}},6922:function(t,e,i){i.d(e,{O:function(){return n}});function n(){let t,e;let i=new Promise((i,n)=>{t=i,e=n});function n(t){Object.assign(i,t),delete i.resolve,delete i.reject}return i.status="pending",i.catch(()=>{}),i.resolve=e=>{n({status:"fulfilled",value:e}),t(e)},i.reject=t=>{n({status:"rejected",reason:t}),e(t)},i}},6298:function(t,e,i){i.d(e,{CN:function(){return F},Ht:function(){return P},KC:function(){return u},Kp:function(){return a},Nc:function(){return c},PN:function(){return o},Q$:function(){return y},Rm:function(){return d},SE:function(){return r},VS:function(){return v},VX:function(){return S},X7:function(){return l},Ym:function(){return f},ZT:function(){return s},_v:function(){return w},_x:function(){return h},cG:function(){return O},oE:function(){return C},sk:function(){return n},to:function(){return p}});var n="undefined"==typeof window||"Deno"in globalThis;function s(){}function r(t,e){return"function"==typeof t?t(e):t}function o(t){return"number"==typeof t&&t>=0&&t!==1/0}function a(t,e){return Math.max(t+(e||0)-Date.now(),0)}function u(t,e){return"function"==typeof t?t(e):t}function c(t,e){return"function"==typeof t?t(e):t}function h(t,e){let{type:i="all",exact:n,fetchStatus:s,predicate:r,queryKey:o,stale:a}=t;if(o){if(n){if(e.queryHash!==d(o,e.options))return!1}else if(!p(e.queryKey,o))return!1}if("all"!==i){let t=e.isActive();if("active"===i&&!t||"inactive"===i&&t)return!1}return("boolean"!=typeof a||e.isStale()===a)&&(!s||s===e.state.fetchStatus)&&(!r||!!r(e))}function l(t,e){let{exact:i,status:n,predicate:s,mutationKey:r}=t;if(r){if(!e.options.mutationKey)return!1;if(i){if(f(e.options.mutationKey)!==f(r))return!1}else if(!p(e.options.mutationKey,r))return!1}return(!n||e.state.status===n)&&(!s||!!s(e))}function d(t,e){return(e?.queryKeyHashFn||f)(t)}function f(t){return JSON.stringify(t,(t,e)=>b(e)?Object.keys(e).sort().reduce((t,i)=>(t[i]=e[i],t),{}):e)}function p(t,e){return t===e||typeof t==typeof e&&!!t&&!!e&&"object"==typeof t&&"object"==typeof e&&!Object.keys(e).some(i=>!p(t[i],e[i]))}function y(t,e){if(t===e)return t;let i=m(t)&&m(e);if(i||b(t)&&b(e)){let n=i?t:Object.keys(t),s=n.length,r=i?e:Object.keys(e),o=r.length,a=i?[]:{},u=0;for(let s=0;s<o;s++){let o=i?s:r[s];(!i&&n.includes(o)||i)&&void 0===t[o]&&void 0===e[o]?(a[o]=void 0,u++):(a[o]=y(t[o],e[o]),a[o]===t[o]&&void 0!==t[o]&&u++)}return s===o&&u===s?t:a}return e}function v(t,e){if(!e||Object.keys(t).length!==Object.keys(e).length)return!1;for(let i in t)if(t[i]!==e[i])return!1;return!0}function m(t){return Array.isArray(t)&&t.length===Object.keys(t).length}function b(t){if(!g(t))return!1;let e=t.constructor;if(void 0===e)return!0;let i=e.prototype;return!!(g(i)&&i.hasOwnProperty("isPrototypeOf"))&&Object.getPrototypeOf(t)===Object.prototype}function g(t){return"[object Object]"===Object.prototype.toString.call(t)}function w(t){return new Promise(e=>{setTimeout(e,t)})}function C(t,e,i){return"function"==typeof i.structuralSharing?i.structuralSharing(t,e):!1!==i.structuralSharing?y(t,e):e}function S(t,e,i=0){let n=[...t,e];return i&&n.length>i?n.slice(1):n}function P(t,e,i=0){let n=[e,...t];return i&&n.length>i?n.slice(0,-1):n}var F=Symbol();function O(t,e){return!t.queryFn&&e?.initialPromise?()=>e.initialPromise:t.queryFn&&t.queryFn!==F?t.queryFn:()=>Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))}},3191:function(t,e,i){i.r(e),i.d(e,{QueryClientContext:function(){return r},QueryClientProvider:function(){return a},useQueryClient:function(){return o}});var n=i(2265),s=i(7437),r=n.createContext(void 0),o=t=>{let e=n.useContext(r);if(t)return t;if(!e)throw Error("No QueryClient set, use QueryClientProvider to set one");return e},a=t=>{let{client:e,children:i}=t;return n.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),(0,s.jsx)(r.Provider,{value:e,children:i})}}}]);