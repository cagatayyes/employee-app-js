/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;let r=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const n=this.t;if(t&&void 0===e){const t=void 0!==n&&1===n.length;t&&(e=o.get(n)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&o.set(n,e))}return e}toString(){return this.cssText}};const i=(e,...t)=>{const o=1===e.length?e[0]:t.reduce((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1],e[0]);return new r(o,e,n)},s=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:a,defineProperty:c,getOwnPropertyDescriptor:l,getOwnPropertyNames:u,getOwnPropertySymbols:d,getPrototypeOf:p}=Object,h=globalThis,f=h.trustedTypes,m=f?f.emptyScript:"",y=h.reactiveElementPolyfillSupport,g=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?m:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},w=(e,t)=>!a(e,t),v={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:w};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),h.litPropertyMetadata??=new WeakMap;let x=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=v){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&c(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:r}=l(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const i=o?.call(this);r?.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??v}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const e=this.properties,t=[...u(e),...d(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const n=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((n,o)=>{if(t)n.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const t of o){const o=document.createElement("style"),r=e.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=t.cssText,n.appendChild(o)}})(n,this.constructor.elementStyles),n}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:b).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o;const i=r.fromAttribute(t,e.type);this[o]=i??this._$Ej?.get(o)??i,this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){const o=this.constructor,r=this[e];if(n??=o.getPropertyOptions(e),!((n.hasChanged??w)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:r},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),!0!==r||void 0!==i)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e){const{wrapped:e}=n,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,n,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};x.elementStyles=[],x.shadowRootOptions={mode:"open"},x[g("elementProperties")]=new Map,x[g("finalized")]=new Map,y?.({ReactiveElement:x}),(h.reactiveElementVersions??=[]).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $=globalThis,k=$.trustedTypes,E=k?k.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,j="?"+C,P=`<${j}>`,A=document,_=()=>A.createComment(""),O=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Z=Array.isArray,T="[ \t\n\f\r]",I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,D=/-->/g,z=/>/g,N=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,R=/"/g,U=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),F=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),W=new WeakMap,V=A.createTreeWalker(A,129);function J(e,t){if(!Z(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const q=(e,t)=>{const n=e.length-1,o=[];let r,i=2===t?"<svg>":3===t?"<math>":"",s=I;for(let t=0;t<n;t++){const n=e[t];let a,c,l=-1,u=0;for(;u<n.length&&(s.lastIndex=u,c=s.exec(n),null!==c);)u=s.lastIndex,s===I?"!--"===c[1]?s=D:void 0!==c[1]?s=z:void 0!==c[2]?(U.test(c[2])&&(r=RegExp("</"+c[2],"g")),s=N):void 0!==c[3]&&(s=N):s===N?">"===c[0]?(s=r??I,l=-1):void 0===c[1]?l=-2:(l=s.lastIndex-c[2].length,a=c[1],s=void 0===c[3]?N:'"'===c[3]?R:M):s===R||s===M?s=N:s===D||s===z?s=I:(s=N,r=void 0);const d=s===N&&e[t+1].startsWith("/>")?" ":"";i+=s===I?n+P:l>=0?(o.push(a),n.slice(0,l)+S+n.slice(l)+C+d):n+C+(-2===l?t:d)}return[J(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Q{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,i=0;const s=e.length-1,a=this.parts,[c,l]=q(e,t);if(this.el=Q.createElement(c,n),V.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=V.nextNode())&&a.length<s;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(S)){const t=l[i++],n=o.getAttribute(e).split(C),s=/([.?@])?(.*)/.exec(t);a.push({type:1,index:r,name:s[2],strings:n,ctor:"."===s[1]?X:"?"===s[1]?ee:"@"===s[1]?te:G}),o.removeAttribute(e)}else e.startsWith(C)&&(a.push({type:6,index:r}),o.removeAttribute(e));if(U.test(o.tagName)){const e=o.textContent.split(C),t=e.length-1;if(t>0){o.textContent=k?k.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],_()),V.nextNode(),a.push({type:2,index:++r});o.append(e[t],_())}}}else if(8===o.nodeType)if(o.data===j)a.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(C,e+1));)a.push({type:7,index:r}),e+=C.length-1}r++}}static createElement(e,t){const n=A.createElement("template");return n.innerHTML=e,n}}function Y(e,t,n=e,o){if(t===F)return t;let r=void 0!==o?n._$Co?.[o]:n._$Cl;const i=O(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e),r._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=r:n._$Cl=r),void 0!==r&&(t=Y(e,r._$AS(e,t.values),r,o)),t}let K=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??A).importNode(t,!0);V.currentNode=o;let r=V.nextNode(),i=0,s=0,a=n[0];for(;void 0!==a;){if(i===a.index){let t;2===a.type?t=new H(r,r.nextSibling,this,e):1===a.type?t=new a.ctor(r,a.name,a.strings,this,e):6===a.type&&(t=new ne(r,this,e)),this._$AV.push(t),a=n[++s]}i!==a?.index&&(r=V.nextNode(),i++)}return V.currentNode=A,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}};class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Y(this,e,t),O(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>Z(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==B&&O(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=Q.createElement(J(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new K(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=W.get(e.strings);return void 0===t&&W.set(e.strings,t=new Q(e)),t}k(e){Z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new H(this.O(_()),this.O(_()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}_$AI(e,t=this,n,o){const r=this.strings;let i=!1;if(void 0===r)e=Y(this,e,t,0),i=!O(e)||e!==this._$AH&&e!==F,i&&(this._$AH=e);else{const o=e;let s,a;for(e=r[0],s=0;s<r.length-1;s++)a=Y(this,o[n+s],t,s),a===F&&(a=this._$AH[s]),i||=!O(a)||a!==this._$AH[s],a===B?e=B:e!==B&&(e+=(a??"")+r[s+1]),this._$AH[s]=a}i&&!o&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class X extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}class ee extends G{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==B)}}class te extends G{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=Y(this,e,t,0)??B)===F)return;const n=this._$AH,o=e===B&&n!==B||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==B&&(n===B||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Y(this,e)}}const oe={I:H},re=$.litHtmlPolyfillSupport;re?.(Q,H),($.litHtmlVersions??=[]).push("3.3.1");const ie=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let se=class extends x{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{const o=n?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=n?.renderBefore??null;o._$litPart$=r=new H(t.insertBefore(_(),e),e,void 0,n??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return F}};se._$litElement$=!0,se.finalized=!0,ie.litElementHydrateSupport?.({LitElement:se});const ae=ie.litElementPolyfillSupport;ae?.({LitElement:se}),(ie.litElementVersions??=[]).push("4.2.1");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce=new WeakMap,le=e=>{if((e=>void 0!==e.pattern)(e))return e.pattern;let t=ce.get(e);return void 0===t&&ce.set(e,t=new URLPattern({pathname:e.path})),t};let ue=class{constructor(e,t,n){this.routes=[],this.o=[],this.t={},this.i=e=>{if(e.routes===this)return;const t=e.routes;this.o.push(t),t.h=this,e.stopImmediatePropagation(),e.onDisconnect=()=>{this.o?.splice(this.o.indexOf(t)>>>0,1)};const n=de(this.t);void 0!==n&&t.goto(n)},(this.l=e).addController(this),this.routes=[...t],this.fallback=n?.fallback}link(e){if(e?.startsWith("/"))return e;if(e?.startsWith("."))throw Error("Not implemented");return e??=this.u,(this.h?.link()??"")+e}async goto(e){let t;if(0===this.routes.length&&void 0===this.fallback)t=e,this.u="",this.t={0:t};else{const n=this.p(e);if(void 0===n)throw Error("No route found for "+e);const o=le(n).exec({pathname:e}),r=o?.pathname.groups??{};if(t=de(r),"function"==typeof n.enter&&!1===await n.enter(r))return;this.v=n,this.t=r,this.u=void 0===t?e:e.substring(0,e.length-t.length)}if(void 0!==t)for(const e of this.o)e.goto(t);this.l.requestUpdate()}outlet(){return this.v?.render?.(this.t)}get params(){return this.t}p(e){const t=this.routes.find(t=>le(t).test({pathname:e}));return t||void 0===this.fallback?t:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(pe.eventName,this.i);const e=new pe(this);this.l.dispatchEvent(e),this._=e.onDisconnect}hostDisconnected(){this._?.(),this.h=void 0}};const de=e=>{let t;for(const n of Object.keys(e))/\d+/.test(n)&&(void 0===t||n>t)&&(t=n);return t&&e[t]};let pe=class e extends Event{constructor(t){super(e.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}};pe.eventName="lit-routes-connected";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const he=location.origin||location.protocol+"//"+location.host;let fe=class extends ue{constructor(){super(...arguments),this.m=e=>{const t=0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey;if(e.defaultPrevented||t)return;const n=e.composedPath().find(e=>"A"===e.tagName);if(void 0===n||""!==n.target||n.hasAttribute("download")||"external"===n.getAttribute("rel"))return;const o=n.href;if(""===o||o.startsWith("mailto:"))return;const r=window.location;n.origin===he&&(e.preventDefault(),o!==r.href&&(window.history.pushState({},"",o),this.goto(n.pathname)))},this.R=e=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=(e,...t)=>({strTag:!0,strings:e,values:t}),ye=(e,t,n)=>{let o=e[0];for(let r=1;r<e.length;r++)o+=t[n?n[r-1]:r-1],o+=e[r];return o},ge=e=>{return"string"!=typeof(t=e)&&"strTag"in t?ye(e.strings,e.values):e;var t};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let be=ge,we=!1;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class ve{constructor(){this.settled=!1,this.promise=new Promise((e,t)=>{this._resolve=e,this._reject=t})}resolve(e){this.settled=!0,this._resolve(e)}reject(e){this.settled=!0,this._reject(e)}}
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */const xe=[];for(let e=0;e<256;e++)xe[e]=(e>>4&15).toString(16)+(15&e).toString(16);function $e(e,t){return(t?"h":"s")+function(e){let t=0,n=8997,o=0,r=33826,i=0,s=40164,a=0,c=52210;for(let l=0;l<e.length;l++)n^=e.charCodeAt(l),t=435*n,o=435*r,i=435*s,a=435*c,i+=n<<8,a+=r<<8,o+=t>>>16,n=65535&t,i+=o>>>16,r=65535&o,c=a+(i>>>16)&65535,s=65535&i;return xe[c>>8]+xe[255&c]+xe[s>>8]+xe[255&s]+xe[r>>8]+xe[255&r]+xe[n>>8]+xe[255&n]}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */("string"==typeof e?e:e.join(""))}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ke=new WeakMap,Ee=new Map;function Se(e,t,n){if(e){const o=n?.id??function(e){const t="string"==typeof e?e:e.strings;let n=Ee.get(t);void 0===n&&(n=$e(t,"string"!=typeof e&&!("strTag"in e)),Ee.set(t,n));return n}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(t),r=e[o];if(r){if("string"==typeof r)return r;if("strTag"in r)return ye(r.strings,t.values,r.values);{let e=ke.get(r);return void 0===e&&(e=r.values,ke.set(r,e)),{...r,values:e.map(e=>t.values[e])}}}}return ge(t)}function Ce(e){window.dispatchEvent(new CustomEvent("lit-localize-status",{detail:e}))}let je,Pe,Ae,_e,Oe,Ze="",Te=new ve;Te.resolve();let Ie=0;const De=()=>Ze,ze=e=>{if(e===(je??Ze))return Te.promise;if(!Ae||!_e)throw new Error("Internal error");if(!Ae.has(e))throw new Error("Invalid locale code");Ie++;const t=Ie;je=e,Te.settled&&(Te=new ve),Ce({status:"loading",loadingLocale:e});return(e===Pe?Promise.resolve({templates:void 0}):_e(e)).then(n=>{Ie===t&&(Ze=e,je=void 0,Oe=n.templates,Ce({status:"ready",readyLocale:e}),Te.resolve())},n=>{Ie===t&&(Ce({status:"error",errorLocale:e,errorMessage:n.toString()}),Te.reject(n))}),Te.promise},Ne=1,Me=2,Re=e=>(...t)=>({_$litDirective$:e,values:t});class Ue{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Le}=oe,Fe=()=>document.createComment(""),Be=(e,t,n)=>{const o=e._$AA.parentNode,r=void 0===t?e._$AB:t._$AA;if(void 0===n){const t=o.insertBefore(Fe(),r),i=o.insertBefore(Fe(),r);n=new Le(t,i,e,e.options)}else{const t=n._$AB.nextSibling,i=n._$AM,s=i!==e;if(s){let t;n._$AQ?.(e),n._$AM=e,void 0!==n._$AP&&(t=e._$AU)!==i._$AU&&n._$AP(t)}if(t!==r||s){let e=n._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,r),e=t}}}return n},We=(e,t,n=e)=>(e._$AI(t,n),e),Ve={},Je=e=>{e._$AR(),e._$AA.remove()},qe=(e,t,n)=>{const o=new Map;for(let r=t;r<=n;r++)o.set(e[r],r);return o},Qe=Re(class extends Ue{constructor(e){if(super(e),e.type!==Me)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let o;void 0===n?n=t:void 0!==t&&(o=t);const r=[],i=[];let s=0;for(const t of e)r[s]=o?o(t,s):s,i[s]=n(t,s),s++;return{values:i,keys:r}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,o]){const r=(e=>e._$AH)(e),{values:i,keys:s}=this.dt(t,n,o);if(!Array.isArray(r))return this.ut=s,i;const a=this.ut??=[],c=[];let l,u,d=0,p=r.length-1,h=0,f=i.length-1;for(;d<=p&&h<=f;)if(null===r[d])d++;else if(null===r[p])p--;else if(a[d]===s[h])c[h]=We(r[d],i[h]),d++,h++;else if(a[p]===s[f])c[f]=We(r[p],i[f]),p--,f--;else if(a[d]===s[f])c[f]=We(r[d],i[f]),Be(e,c[f+1],r[d]),d++,f--;else if(a[p]===s[h])c[h]=We(r[p],i[h]),Be(e,r[d],r[p]),p--,h++;else if(void 0===l&&(l=qe(s,h,f),u=qe(a,d,p)),l.has(a[d]))if(l.has(a[p])){const t=u.get(s[h]),n=void 0!==t?r[t]:null;if(null===n){const t=Be(e,r[d]);We(t,i[h]),c[h]=t}else c[h]=We(n,i[h]),Be(e,r[d],n),r[t]=null;h++}else Je(r[p]),p--;else Je(r[d]),d++;for(;h<=f;){const t=Be(e,c[f+1]);We(t,i[h]),c[h++]=t}for(;d<=p;){const e=r[d++];null!==e&&Je(e)}return this.ut=s,((e,t=Ve)=>{e._$AH=t})(e,c),F}}),Ye=i`
  button {
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input {
    font-family: 'Roboto', 'Arial', sans-serif;
  }
`,Ke=i`
  :host {
    font-size: 24px;
    color: var(--secondary-color, '#172b53');

    @media only screen and (max-width: 1200px) {
      display: flex;
      width: 100%;
      overflow-y: auto;
    }
  }

  .employee-list-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: #fff;
    border-radius: 8px;

    @media only screen and (max-width: 1200px) {
      overflow-y: auto;
    }
  }

  .loading {
    text-align: center;
    padding: 20px;
    font-size: 16px;
    color: #666;
  }

  .error {
    text-align: center;
    padding: 20px;
    font-size: 16px;
    color: #d32f2f;
    background-color: #ffebee;
    border-radius: 4px;
    margin: 10px 0;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    thead {
      th {
        padding-top: 20px;
        padding-right: 20px;
        font-weight: 500;
      }

      th:first-child {
        padding-left: 20px;
        padding-right: 0;
      }

      tr {
        height: 80px;
        font-size: 12px;
        text-align: center;
        color: var(--primary-color, '#ff6200');
      }
    }

    tbody {
      tr {
        height: 80px;
        border-bottom: 1px solid var(--border-grey, '#e0e0e0');
        font-size: 14px;
        text-align: center;
        padding: 0 24px;

        td {
          padding-top: 20px;
          padding-bottom: 20px;
          padding-right: 20px;
          color: #666; /* Diğer sütunlar için gri renk */
          min-width: 60px;
        }

        td:first-child {
          padding-left: 20px;
          padding-right: 0;
        }

        /* First Name ve Last Name sütunları için mevcut rengi koru */
        td:nth-child(2),
        td:nth-child(3) {
          color: var(--secondary-color, '#172b53'); /* Mevcut renk */
        }
      }
      tr:last-child {
        border-bottom: none;
      }
    }

    @media only screen and (max-width: 1200px) {
      thead {
        th {
          padding-top: 12px;
          padding-right: 12px;
          font-weight: 500;
        }

        th:first-child {
          padding-left: 12px;
          padding-right: 0;
        }

        tr {
          height: 60px;
        }
      }

      tbody {
        tr {
          height: 60px;
          padding: 0 12px;

          td {
            padding-top: 12px;
            padding-bottom: 12px;
            padding-right: 12px;
            min-width: 40px;
          }

          td:first-child {
            padding-left: 12px;
            padding-right: 0;
          }

          /* First Name ve Last Name sütunları için mevcut rengi koru */
          td:nth-child(2),
          td:nth-child(3) {
            color: var(--secondary-color, '#172b53'); /* Mevcut renk */
          }
        }
        tr:last-child {
          border-bottom: none;
        }
      }
    }
  }

  .employee-name {
    display: flex;
    flex-direction: column;
    gap: 4px;

    .name {
      font-weight: 500;
      color: #333;
    }

    .email {
      font-size: 12px;
      color: #666;
    }
  }

  .actions a,
  .actions span {
    cursor: pointer;
  }

  .action-buttons {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .bulk-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background-color: #f8f9fa;
    border-bottom: 1px solid var(--border-grey, '#e0e0e0');
    border-radius: 8px 8px 0 0;
  }

  .bulk-buttons {
    display: flex;
    gap: 8px;
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 16px;
  }

  .loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary-color, '#ff6200');
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 16px;
  }

  .error-message {
    color: #d32f2f;
    font-size: 16px;
    text-align: center;
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    gap: 16px;
    color: #666;
    font-size: 16px;
  }

  .table-container {
    overflow-x: auto;
    border-radius: 0 0 8px 8px;
  }

  .employee-table {
    min-width: 800px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .bulk-actions {
      flex-direction: column;
      gap: 12px;
      align-items: stretch;
    }

    .bulk-buttons {
      justify-content: center;
    }

    .action-buttons {
      flex-direction: column;
      gap: 4px;
    }

    table {
      thead {
        th {
          padding: 12px 8px;
          font-size: 12px;
        }
      }

      tbody {
        td {
          padding: 8px;
          font-size: 12px;
        }
      }
    }
  }
`
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,He=Re(class extends Ue{constructor(e){if(super(e),e.type!==Ne||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e)));for(const e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}const n=e.element.classList;for(const e of this.st)e in t||(n.remove(e),this.st.delete(e));for(const e in t){const o=!!t[e];o===this.st.has(e)||this.nt?.has(e)||(o?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return F}}),Ge=i`
  :host {
    display: block;
  }

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    animation: fadeIn 0.3s ease-out;
  }

  .popup-container {
    background: white;
    border-radius: 12px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    max-width: 400px;
    width: 90%;
    max-height: 80vh;
    overflow: hidden;
    animation: slideIn 0.3s ease-out;
  }

  .popup-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 0 24px;
  }

  .popup-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .popup-icon.success {
    background-color: #dcfce7;
    color: #16a34a;
  }

  .popup-icon.error {
    background-color: #fee2e2;
    color: #dc2626;
  }

  .popup-icon.warning {
    background-color: #fef3c7;
    color: #d97706;
  }

  .popup-icon.info {
    background-color: #dbeafe;
    color: #2563eb;
  }

  .close-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    color: #6b7280;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-button:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  .close-button:active {
    transform: scale(0.95);
  }

  .close-button img {
    filter: brightness(0) saturate(100%);
  }

  .popup-content {
    padding: 16px 24px 24px 24px;
  }

  .popup-title {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
    color: #111827;
    line-height: 1.4;
  }

  .popup-message {
    margin: 0;
    font-size: 14px;
    color: #6b7280;
    line-height: 1.5;
  }

  .popup-actions {
    display: flex;
    gap: 12px;
    margin-top: 20px;
    justify-content: flex-end;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  /* Responsive */
  @media (max-width: 480px) {
    .popup-container {
      width: 95%;
      margin: 20px;
    }

    .popup-header {
      padding: 16px 20px 0 20px;
    }

    .popup-content {
      padding: 12px 20px 20px 20px;
    }

    .popup-icon {
      width: 40px;
      height: 40px;
    }

    .popup-title {
      font-size: 16px;
    }

    .popup-message {
      font-size: 13px;
    }
  }
`,Xe={firstName:"",lastName:"",dateOfBirth:"",dateOfEmployment:"",phone:"",email:"",department:"",position:"Junior"},et=[{value:"Analytics",label:be("Analytics")},{value:"Tech",label:be("Tech")}],tt=[{value:"Junior",label:be("Junior")},{value:"Medior",label:be("Medior")},{value:"Senior",label:be("Senior")}],nt="/",ot="/edit/:id",rt="/add",it="add",st="edit",at="en",ct="tr",lt="locale-changed",ut="edit-employee",dt="delete-employee",pt="form-submit",ht="form-cancel",ft="value-changed",mt="view-changed";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class yt extends se{static styles=Ge;static properties={open:{type:Boolean},type:{type:String},popupTitle:{type:String},message:{type:String},autoClose:{type:Number},showCloseButton:{type:Boolean},showConfirmButtons:{type:Boolean},confirmText:{type:String},cancelText:{type:String}};constructor(){super(),this.open=!1,this.type="info",this.popupTitle="",this.message="",this.autoClose=0,this.showCloseButton=!0,this.showConfirmButtons=!1,this.confirmText="Confirm",this.cancelText="Cancel",this.autoCloseTimeout=void 0}connectedCallback(){super.connectedCallback(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(lt,this._handleLocaleChange),this.autoCloseTimeout&&clearTimeout(this.autoCloseTimeout)}_handleLocaleChange=()=>{this.requestUpdate()};updated(e){super.updated(e),e.has("open")&&this.open&&this.handleOpen(),e.has("autoClose")&&this.autoClose>0&&this.setupAutoClose()}handleOpen(){this.autoClose>0&&this.setupAutoClose()}setupAutoClose(){this.autoCloseTimeout&&clearTimeout(this.autoCloseTimeout),this.autoClose>0&&(this.autoCloseTimeout=window.setTimeout(()=>{this.close()},this.autoClose))}close(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}handleCancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:!0,composed:!0})),this.close()}handleConfirm(){this.dispatchEvent(new CustomEvent("confirm",{bubbles:!0,composed:!0})),this.close()}getIcon(){let e;switch(this.type){case"success":e="/assets/icons/success.svg";break;case"error":e="/assets/icons/error.svg";break;case"warning":e="/assets/icons/warning.svg";break;default:e="/assets/icons/info.svg"}return L`<img src=${e} alt="Icon" width="24" height="24" />`}render(){return this.open?L`
      <div class="popup-overlay" @click=${this.handleOverlayClick}>
        <div class="popup-container" @click=${this.handleContainerClick}>
          <div class="popup-header">
            <div
              class=${He({"popup-icon":!0,[this.type]:!0})}
            >
              ${this.getIcon()}
            </div>
            ${this.showCloseButton?L`
                  <button class="close-button" @click=${this.close}>
                    <img
                      src="/assets/icons/close.svg"
                      alt="Close"
                      width="20"
                      height="20"
                    />
                  </button>
                `:""}
          </div>

          <div class="popup-content">
            ${this.popupTitle?L`<h3 class="popup-title">${this.popupTitle}</h3>`:""}
            ${this.message?L`<p class="popup-message">${this.message}</p>`:""}
            <slot></slot>

            ${this.showConfirmButtons?L`
                  <div class="popup-actions">
                    <button-element
                      variant="secondary"
                      size="small"
                      label=${this.cancelText}
                      @click=${this.handleCancel}
                    >
                      ${this.cancelText}
                    </button-element>
                    <button-element
                      variant="primary"
                      size="small"
                      label=${this.confirmText}
                      @click=${this.handleConfirm}
                    >
                      ${this.confirmText}
                    </button-element>
                  </div>
                `:""}
          </div>
        </div>
      </div>
    `:L``}handleOverlayClick(e){e.target===e.currentTarget&&this.close()}handleContainerClick(e){e.stopPropagation()}}window.customElements.define("popup-element",yt);const gt=i`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    padding: 1rem;
    border-top: 1px solid;
    border-color: var(--border-grey, '#e0e0e0');
  }

  .pagination button-element {
    min-width: 2.5rem;
  }

  .pagination button-element[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .pagination {
      flex-wrap: wrap;
      gap: 0.25rem;
      padding: 0.75rem;
    }

    .pagination button-element {
      min-width: 2rem;
    }
  }

  @media (max-width: 480px) {
    .pagination {
      padding: 0.5rem;
    }
  }
`,bt=i`
  :host {
    display: inline-block;
  }

  button {
    font-size: 14px;
    font-weight: 500;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 20px;
    min-width: 80px;
    height: 40px;
    min-height: 40px;
    background-color: transparent;
    color: inherit;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-family: inherit;
  }

  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  button:active {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  button.primary {
    background-color: var(--primary-color, '#ff6200');
    color: white;
  }

  button.primary:hover {
    background-color: var(--warning-hover, '#e55a00');
  }

  button.secondary {
    background-color: var(--background-light-grey, '#f3f4f6');
    color: #374151;
  }

  button.secondary:hover {
    background-color: var(--background-grey, '#f8f8f8');
  }

  button.danger {
    background-color: var(--danger, '#d32f2f');
    color: white;
  }

  button.danger:hover {
    background-color: var(--danger-hover, '#b71c1c');
  }

  button.success {
    background-color: var(--success, '#16a34a');
    color: white;
  }

  button.success:hover {
    background-color: var(--success-hover, '#15803d');
  }

  button.small {
    padding: 8px 16px;
    font-size: 12px;
    height: 32px;
    min-width: 60px;
  }

  button.large {
    padding: 12px 24px;
    font-size: 16px;
    height: 48px;
    min-width: 100px;
  }

  button.full-width {
    width: 100%;
  }

  ::slotted(img) {
    width: 14px;
    height: 14px;
    opacity: 0.8;
  }

  button.small ::slotted(img) {
    width: 12px;
    height: 12px;
  }

  button.large ::slotted(img) {
    width: 16px;
    height: 16px;
  }
`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;class wt extends se{static styles=bt;static properties={label:{type:String},variant:{type:String},size:{type:String},fullWidth:{type:Boolean},disabled:{type:Boolean}};constructor(){super(),this.label="",this.variant="primary",this.size="medium",this.fullWidth=!1,this.disabled=!1}render(){return L`
      <button
        part="button"
        class=${He({"button-element":!0,[this.variant]:!0,small:"small"===this.size,large:"large"===this.size,"full-width":this.fullWidth})}
        ?disabled=${this.disabled}
      >
        <slot>${this.label}</slot>
      </button>
    `}}window.customElements.define("button-element",wt);function vt(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}window.customElements.define("pagination-element",
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class extends se{static styles=[Ye,gt];static properties={currentPage:{type:Number},totalPages:{type:Number},maxVisiblePages:{type:Number}};constructor(){super(),this.currentPage=1,this.totalPages=0,this.maxVisiblePages=5}getPageNumbers(){const e=[];let t=Math.max(1,this.currentPage-Math.floor(this.maxVisiblePages/2)),n=Math.min(this.totalPages,t+this.maxVisiblePages-1);n-t+1<this.maxVisiblePages&&(t=Math.max(1,n-this.maxVisiblePages+1));for(let o=t;o<=n;o++)e.push(o);return e}handlePageChange(e){this.dispatchEvent(new CustomEvent("page-change",{detail:{page:e},bubbles:!0,composed:!0}))}render(){return this.totalPages<=1?L``:L`
      <div class="pagination" part="pagination">
        <button-element
          variant="secondary"
          size="small"
          label=${be("Previous")}
          ?disabled=${1===this.currentPage}
          @click=${()=>this.handlePageChange(this.currentPage-1)}
        >
          ${be("Previous")}
        </button-element>

        ${this.getPageNumbers().map(e=>L`
            <button-element
              variant=${e===this.currentPage?"primary":"secondary"}
              size="small"
              label=${e.toString()}
              @click=${()=>this.handlePageChange(e)}
            >
              ${e}
            </button-element>
          `)}

        <button-element
          variant="secondary"
          size="small"
          label=${be("Next")}
          ?disabled=${this.currentPage===this.totalPages}
          @click=${()=>this.handlePageChange(this.currentPage+1)}
        >
          ${be("Next")}
        </button-element>
      </div>
    `}});var xt=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),$t=()=>Math.random().toString(36).substring(7).split("").join("."),kt={INIT:`@@redux/INIT${$t()}`,REPLACE:`@@redux/REPLACE${$t()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${$t()}`};function Et(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function St(e){if(void 0===e)return"undefined";if(null===e)return"null";const t=typeof e;switch(t){case"boolean":case"string":case"number":case"symbol":case"function":return t}if(Array.isArray(e))return"array";if(function(e){return e instanceof Date||"function"==typeof e.toDateString&&"function"==typeof e.getDate&&"function"==typeof e.setDate}(e))return"date";if(function(e){return e instanceof Error||"string"==typeof e.message&&e.constructor&&"number"==typeof e.constructor.stackTraceLimit}(e))return"error";const n=function(e){return"function"==typeof e.constructor?e.constructor.name:null}(e);switch(n){case"Symbol":case"Promise":case"WeakMap":case"WeakSet":case"Map":case"Set":return n}return Object.prototype.toString.call(e).slice(8,-1).toLowerCase().replace(/\s/g,"")}function Ct(e){let t=typeof e;return"production"!==process.env.NODE_ENV&&(t=St(e)),t}function jt(e,t,n){if("function"!=typeof e)throw new Error("production"===process.env.NODE_ENV?vt(2):`Expected the root reducer to be a function. Instead, received: '${Ct(e)}'`);if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("production"===process.env.NODE_ENV?vt(0):"It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("production"===process.env.NODE_ENV?vt(1):`Expected the enhancer to be a function. Instead, received: '${Ct(n)}'`);return n(jt)(e,t)}let o=e,r=t,i=new Map,s=i,a=0,c=!1;function l(){s===i&&(s=new Map,i.forEach((e,t)=>{s.set(t,e)}))}function u(){if(c)throw new Error("production"===process.env.NODE_ENV?vt(3):"You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return r}function d(e){if("function"!=typeof e)throw new Error("production"===process.env.NODE_ENV?vt(4):`Expected the listener to be a function. Instead, received: '${Ct(e)}'`);if(c)throw new Error("production"===process.env.NODE_ENV?vt(5):"You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");let t=!0;l();const n=a++;return s.set(n,e),function(){if(t){if(c)throw new Error("production"===process.env.NODE_ENV?vt(6):"You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");t=!1,l(),s.delete(n),i=null}}}function p(e){if(!Et(e))throw new Error("production"===process.env.NODE_ENV?vt(7):`Actions must be plain objects. Instead, the actual type was: '${Ct(e)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);if(void 0===e.type)throw new Error("production"===process.env.NODE_ENV?vt(8):'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');if("string"!=typeof e.type)throw new Error("production"===process.env.NODE_ENV?vt(17):`Action "type" property must be a string. Instead, the actual type was: '${Ct(e.type)}'. Value was: '${e.type}' (stringified)`);if(c)throw new Error("production"===process.env.NODE_ENV?vt(9):"Reducers may not dispatch actions.");try{c=!0,r=o(r,e)}finally{c=!1}return(i=s).forEach(e=>{e()}),e}p({type:kt.INIT});return{dispatch:p,subscribe:d,getState:u,replaceReducer:function(e){if("function"!=typeof e)throw new Error("production"===process.env.NODE_ENV?vt(10):`Expected the nextReducer to be a function. Instead, received: '${Ct(e)}`);o=e,p({type:kt.REPLACE})},[xt]:function(){const e=d;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error("production"===process.env.NODE_ENV?vt(11):`Expected the observer to be an object. Instead, received: '${Ct(t)}'`);function n(){const e=t;e.next&&e.next(u())}n();return{unsubscribe:e(n)}},[xt](){return this}}}}}function Pt(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}function At(e){const t=Object.keys(e),n={};for(let o=0;o<t.length;o++){const r=t[o];"production"!==process.env.NODE_ENV&&void 0===e[r]&&Pt(`No reducer provided for key "${r}"`),"function"==typeof e[r]&&(n[r]=e[r])}const o=Object.keys(n);let r,i;"production"!==process.env.NODE_ENV&&(r={});try{!function(e){Object.keys(e).forEach(t=>{const n=e[t];if(void 0===n(void 0,{type:kt.INIT}))throw new Error("production"===process.env.NODE_ENV?vt(12):`The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);if(void 0===n(void 0,{type:kt.PROBE_UNKNOWN_ACTION()}))throw new Error("production"===process.env.NODE_ENV?vt(13):`The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${kt.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`)})}(n)}catch(e){i=e}return function(e={},t){if(i)throw i;if("production"!==process.env.NODE_ENV){const o=function(e,t,n,o){const r=Object.keys(t),i=n&&n.type===kt.INIT?"preloadedState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!Et(e))return`The ${i} has unexpected type of "${Ct(e)}". Expected argument to be an object with the following keys: "${r.join('", "')}"`;const s=Object.keys(e).filter(e=>!t.hasOwnProperty(e)&&!o[e]);return s.forEach(e=>{o[e]=!0}),n&&n.type===kt.REPLACE?void 0:s.length>0?`Unexpected ${s.length>1?"keys":"key"} "${s.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${r.join('", "')}". Unexpected keys will be ignored.`:void 0}(e,n,t,r);o&&Pt(o)}let s=!1;const a={};for(let r=0;r<o.length;r++){const i=o[r],c=n[i],l=e[i],u=c(l,t);if(void 0===u){const e=t&&t.type;throw new Error("production"===process.env.NODE_ENV?vt(14):`When called with an action of type ${e?`"${String(e)}"`:"(unknown type)"}, the slice reducer for key "${i}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`)}a[i]=u,s=s||u!==l}return s=s||o.length!==Object.keys(e).length,s?a:e}}function _t(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function Ot(e){return Et(e)&&"type"in e&&"string"==typeof e.type}var Zt=Symbol.for("immer-nothing"),Tt=Symbol.for("immer-draftable"),It=Symbol.for("immer-state"),Dt="production"!==process.env.NODE_ENV?[function(e){return`The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`},function(e){return`produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`},"This object has been frozen and should not be mutated",function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.","Immer forbids circular references","The first or second argument to `produce` must be a function","The third argument to `produce` must be a function or undefined","First argument to `createDraft` must be a plain object, an array, or an immerable object","First argument to `finishDraft` must be a draft returned by `createDraft`",function(e){return`'current' expects a draft, got: ${e}`},"Object.defineProperty() cannot be used on an Immer draft","Object.setPrototypeOf() cannot be used on an Immer draft","Immer only supports deleting array indices","Immer only supports setting array indices and the 'length' property",function(e){return`'original' expects a draft, got: ${e}`}]:[];function zt(e,...t){if("production"!==process.env.NODE_ENV){const n=Dt[e],o="function"==typeof n?n.apply(null,t):n;throw new Error(`[Immer] ${o}`)}throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Nt=Object.getPrototypeOf;function Mt(e){return!!e&&!!e[It]}function Rt(e){return!!e&&(Lt(e)||Array.isArray(e)||!!e[Tt]||!!e.constructor?.[Tt]||Jt(e)||qt(e))}var Ut=Object.prototype.constructor.toString();function Lt(e){if(!e||"object"!=typeof e)return!1;const t=Nt(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===Ut}function Ft(e,t){0===Bt(e)?Reflect.ownKeys(e).forEach(n=>{t(n,e[n],e)}):e.forEach((n,o)=>t(o,n,e))}function Bt(e){const t=e[It];return t?t.type_:Array.isArray(e)?1:Jt(e)?2:qt(e)?3:0}function Wt(e,t){return 2===Bt(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function Vt(e,t,n){const o=Bt(e);2===o?e.set(t,n):3===o?e.add(n):e[t]=n}function Jt(e){return e instanceof Map}function qt(e){return e instanceof Set}function Qt(e){return e.copy_||e.base_}function Yt(e,t){if(Jt(e))return new Map(e);if(qt(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const n=Lt(e);if(!0===t||"class_only"===t&&!n){const t=Object.getOwnPropertyDescriptors(e);delete t[It];let n=Reflect.ownKeys(t);for(let o=0;o<n.length;o++){const r=n[o],i=t[r];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[r]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[r]})}return Object.create(Nt(e),t)}{const t=Nt(e);if(null!==t&&n)return{...e};const o=Object.create(t);return Object.assign(o,e)}}function Kt(e,t=!1){return Gt(e)||Mt(e)||!Rt(e)||(Bt(e)>1&&(e.set=e.add=e.clear=e.delete=Ht),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>Kt(t,!0))),e}function Ht(){zt(2)}function Gt(e){return Object.isFrozen(e)}var Xt,en={};function tn(e){const t=en[e];return t||zt(0,e),t}function nn(){return Xt}function on(e,t){t&&(tn("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function rn(e){sn(e),e.drafts_.forEach(cn),e.drafts_=null}function sn(e){e===Xt&&(Xt=e.parent_)}function an(e){return Xt={drafts_:[],parent_:Xt,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function cn(e){const t=e[It];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function ln(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[It].modified_&&(rn(t),zt(4)),Rt(e)&&(e=un(t,e),t.parent_||pn(t,e)),t.patches_&&tn("Patches").generateReplacementPatches_(n[It].base_,e,t.patches_,t.inversePatches_)):e=un(t,n,[]),rn(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Zt?e:void 0}function un(e,t,n){if(Gt(t))return t;const o=t[It];if(!o)return Ft(t,(r,i)=>dn(e,o,t,r,i,n)),t;if(o.scope_!==e)return t;if(!o.modified_)return pn(e,o.base_,!0),o.base_;if(!o.finalized_){o.finalized_=!0,o.scope_.unfinalizedDrafts_--;const t=o.copy_;let r=t,i=!1;3===o.type_&&(r=new Set(t),t.clear(),i=!0),Ft(r,(r,s)=>dn(e,o,t,r,s,n,i)),pn(e,t,!1),n&&e.patches_&&tn("Patches").generatePatches_(o,n,e.patches_,e.inversePatches_)}return o.copy_}function dn(e,t,n,o,r,i,s){if("production"!==process.env.NODE_ENV&&r===n&&zt(5),Mt(r)){const s=un(e,r,i&&t&&3!==t.type_&&!Wt(t.assigned_,o)?i.concat(o):void 0);if(Vt(n,o,s),!Mt(s))return;e.canAutoFreeze_=!1}else s&&n.add(r);if(Rt(r)&&!Gt(r)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;un(e,r),t&&t.scope_.parent_||"symbol"==typeof o||!Object.prototype.propertyIsEnumerable.call(n,o)||pn(e,r)}}function pn(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Kt(t,n)}var hn={get(e,t){if(t===It)return e;const n=Qt(e);if(!Wt(n,t))return function(e,t,n){const o=yn(t,n);return o?"value"in o?o.value:o.get?.call(e.draft_):void 0}(e,n,t);const o=n[t];return e.finalized_||!Rt(o)?o:o===mn(e.base_,t)?(bn(e),e.copy_[t]=wn(o,e)):o},has:(e,t)=>t in Qt(e),ownKeys:e=>Reflect.ownKeys(Qt(e)),set(e,t,n){const o=yn(Qt(e),t);if(o?.set)return o.set.call(e.draft_,n),!0;if(!e.modified_){const o=mn(Qt(e),t),r=o?.[It];if(r&&r.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}(n,o)&&(void 0!==n||Wt(e.base_,t)))return!0;bn(e),gn(e)}return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==mn(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,bn(e),gn(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=Qt(e),o=Reflect.getOwnPropertyDescriptor(n,t);return o?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:o.enumerable,value:n[t]}:o},defineProperty(){zt(11)},getPrototypeOf:e=>Nt(e.base_),setPrototypeOf(){zt(12)}},fn={};function mn(e,t){const n=e[It];return(n?Qt(n):e)[t]}function yn(e,t){if(!(t in e))return;let n=Nt(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=Nt(n)}}function gn(e){e.modified_||(e.modified_=!0,e.parent_&&gn(e.parent_))}function bn(e){e.copy_||(e.copy_=Yt(e.base_,e.scope_.immer_.useStrictShallowCopy_))}Ft(hn,(e,t)=>{fn[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),fn.deleteProperty=function(e,t){return"production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&zt(13),fn.set.call(this,e,t,void 0)},fn.set=function(e,t,n){return"production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&zt(14),hn.set.call(this,e[0],t,n,e[0])};function wn(e,t){const n=Jt(e)?tn("MapSet").proxyMap_(e,t):qt(e)?tn("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),o={type_:n?1:0,scope_:t?t.scope_:nn(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let r=o,i=hn;n&&(r=[o],i=fn);const{revoke:s,proxy:a}=Proxy.revocable(r,i);return o.draft_=a,o.revoke_=s,a}(e,t);return(t?t.scope_:nn()).drafts_.push(n),n}function vn(e){if(!Rt(e)||Gt(e))return e;const t=e[It];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Yt(e,t.scope_.immer_.useStrictShallowCopy_)}else n=Yt(e,!0);return Ft(n,(e,t)=>{Vt(n,e,vn(t))}),t&&(t.finalized_=!1),n}var xn=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const o=this;return function(e=n,...r){return o.produce(e,e=>t.call(this,e,...r))}}let o;if("function"!=typeof t&&zt(6),void 0!==n&&"function"!=typeof n&&zt(7),Rt(e)){const r=an(this),i=wn(e,void 0);let s=!0;try{o=t(i),s=!1}finally{s?rn(r):sn(r)}return on(r,n),ln(o,r)}if(!e||"object"!=typeof e){if(o=t(e),void 0===o&&(o=e),o===Zt&&(o=void 0),this.autoFreeze_&&Kt(o,!0),n){const t=[],r=[];tn("Patches").generateReplacementPatches_(e,o,t,r),n(t,r)}return o}zt(1,e)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,o;const r=this.produce(e,t,(e,t)=>{n=e,o=t});return[r,n,o]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){Rt(e)||zt(8),Mt(e)&&(e=function(e){Mt(e)||zt(10,e);return vn(e)}(e));const t=an(this),n=wn(e,void 0);return n[It].isManual_=!0,sn(t),n}finishDraft(e,t){const n=e&&e[It];n&&n.isManual_||zt(9);const{scope_:o}=n;return on(o,t),ln(void 0,o)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const o=t[n];if(0===o.path.length&&"replace"===o.op){e=o.value;break}}n>-1&&(t=t.slice(n+1));const o=tn("Patches").applyPatches_;return Mt(e)?o(e,t):this.produce(e,e=>o(e,t))}},$n=xn.produce;function kn(e){return({dispatch:t,getState:n})=>o=>r=>"function"==typeof r?r(t,n,e):o(r)}xn.produceWithPatches.bind(xn),xn.setAutoFreeze.bind(xn),xn.setUseStrictShallowCopy.bind(xn),xn.applyPatches.bind(xn),xn.createDraft.bind(xn),xn.finishDraft.bind(xn);var En=kn(),Sn=kn,Cn="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?_t:_t.apply(null,arguments)},jn=e=>e&&"function"==typeof e.match;function Pn(e,t){function n(...n){if(t){let o=t(...n);if(!o)throw new Error("production"===process.env.NODE_ENV?so(0):"prepareAction did not return an object");return{type:e,payload:o.payload,..."meta"in o&&{meta:o.meta},..."error"in o&&{error:o.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>Ot(t)&&t.type===e,n}function An(e){return"function"==typeof e&&"type"in e&&jn(e)}function _n(e,t){let n=0;return{measureTime(e){const t=Date.now();try{return e()}finally{const e=Date.now();n+=e-t}},warnIfExceeded(){n>e&&console.warn(`${t} took ${n}ms, which is more than the warning threshold of ${e}ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.`)}}}var On=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function Zn(e){return Rt(e)?$n(e,()=>{}):e}function Tn(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function In(e){return"object"!=typeof e||null==e||Object.isFrozen(e)}function Dn(e,t,n){const o=zn(e,t,n);return{detectMutations:()=>Nn(e,t,o,n)}}function zn(e,t=[],n,o="",r=new Set){const i={value:n};if(!e(n)&&!r.has(n)){r.add(n),i.children={};for(const r in n){const s=o?o+"."+r:r;t.length&&-1!==t.indexOf(s)||(i.children[r]=zn(e,t,n[r],s))}}return i}function Nn(e,t=[],n,o,r=!1,i=""){const s=n?n.value:void 0,a=s===o;if(r&&!a&&!Number.isNaN(o))return{wasMutated:!0,path:i};if(e(s)||e(o))return{wasMutated:!1};const c={};for(let e in n.children)c[e]=!0;for(let e in o)c[e]=!0;const l=t.length>0;for(let r in c){const s=i?i+"."+r:r;if(l){if(t.some(e=>e instanceof RegExp?e.test(s):s===e))continue}const c=Nn(e,t,n.children[r],o[r],a,s);if(c.wasMutated)return c}return{wasMutated:!1}}function Mn(e){const t=typeof e;return null==e||"string"===t||"boolean"===t||"number"===t||Array.isArray(e)||Et(e)}function Rn(e,t="",n=Mn,o,r=[],i){let s;if(!n(e))return{keyPath:t||"<root>",value:e};if("object"!=typeof e||null===e)return!1;if(i?.has(e))return!1;const a=null!=o?o(e):Object.entries(e),c=r.length>0;for(const[e,l]of a){const a=t?t+"."+e:e;if(c){if(r.some(e=>e instanceof RegExp?e.test(a):a===e))continue}if(!n(l))return{keyPath:a,value:l};if("object"==typeof l&&(s=Rn(l,a,n,o,r,i),s))return s}return i&&Un(e)&&i.add(e),!1}function Un(e){if(!Object.isFrozen(e))return!1;for(const t of Object.values(e))if("object"==typeof t&&null!==t&&!Un(t))return!1;return!0}function Ln(e){return"boolean"==typeof e}var Fn=()=>function(e){const{thunk:t=!0,immutableCheck:n=!0,serializableCheck:o=!0,actionCreatorCheck:r=!0}=e??{};let i=new On;if(t&&(Ln(t)?i.push(En):i.push(Sn(t.extraArgument))),"production"!==process.env.NODE_ENV){if(n){let e={};Ln(n)||(e=n),i.unshift(function(e={}){if("production"===process.env.NODE_ENV)return()=>e=>t=>e(t);{let t=function(e,t,o,r){return JSON.stringify(e,n(t,r),o)},n=function(e,t){let n=[],o=[];return t||(t=function(e,t){return n[0]===t?"[Circular ~]":"[Circular ~."+o.slice(0,n.indexOf(t)).join(".")+"]"}),function(r,i){if(n.length>0){var s=n.indexOf(this);~s?n.splice(s+1):n.push(this),~s?o.splice(s,1/0,r):o.push(r),~n.indexOf(i)&&(i=t.call(this,r,i))}else n.push(i);return null==e?i:e.call(this,r,i)}},{isImmutable:o=In,ignoredPaths:r,warnAfter:i=32}=e;const s=Dn.bind(null,o,r);return({getState:e})=>{let n,o=e(),r=s(o);return a=>c=>{const l=_n(i,"ImmutableStateInvariantMiddleware");l.measureTime(()=>{if(o=e(),n=r.detectMutations(),r=s(o),n.wasMutated)throw new Error("production"===process.env.NODE_ENV?so(19):`A state mutation was detected between dispatches, in the path '${n.path||""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`)});const u=a(c);return l.measureTime(()=>{if(o=e(),n=r.detectMutations(),r=s(o),n.wasMutated)throw new Error("production"===process.env.NODE_ENV?so(20):`A state mutation was detected inside a dispatch, in the path: ${n.path||""}. Take a look at the reducer(s) handling the action ${t(c)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`)}),l.warnIfExceeded(),u}}}}(e))}if(o){let e={};Ln(o)||(e=o),i.push(function(e={}){if("production"===process.env.NODE_ENV)return()=>e=>t=>e(t);{const{isSerializable:t=Mn,getEntries:n,ignoredActions:o=[],ignoredActionPaths:r=["meta.arg","meta.baseQueryMeta"],ignoredPaths:i=[],warnAfter:s=32,ignoreState:a=!1,ignoreActions:c=!1,disableCache:l=!1}=e,u=!l&&WeakSet?new WeakSet:void 0;return e=>l=>d=>{if(!Ot(d))return l(d);const p=l(d),h=_n(s,"SerializableStateInvariantMiddleware");return c||o.length&&-1!==o.indexOf(d.type)||h.measureTime(()=>{const e=Rn(d,"",t,n,r,u);if(e){const{keyPath:t,value:n}=e;console.error(`A non-serializable value was detected in an action, in the path: \`${t}\`. Value:`,n,"\nTake a look at the logic that dispatched this action: ",d,"\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)","\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)")}}),a||(h.measureTime(()=>{const o=Rn(e.getState(),"",t,n,i,u);if(o){const{keyPath:e,value:t}=o;console.error(`A non-serializable value was detected in the state, in the path: \`${e}\`. Value:`,t,`\nTake a look at the reducer(s) handling this action type: ${d.type}.\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`)}}),h.warnIfExceeded()),p}}}(e))}if(r){let e={};Ln(r)||(e=r),i.unshift(function(e={}){if("production"===process.env.NODE_ENV)return()=>e=>t=>e(t);const{isActionCreator:t=An}=e;return()=>e=>n=>(t(n)&&console.warn(function(e){const t=e?`${e}`.split("/"):[],n=t[t.length-1]||"actionCreator";return`Detected an action creator with type "${e||"unknown"}" being dispatched. \nMake sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`}(n.type)),e(n))}(e))}}return i},Bn=e=>t=>{setTimeout(t,e)},Wn=e=>function(t){const{autoBatch:n=!0}=t??{};let o=new On(e);return n&&o.push(((e={type:"raf"})=>t=>(...n)=>{const o=t(...n);let r=!0,i=!1,s=!1;const a=new Set,c="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:Bn(10):"callback"===e.type?e.queueNotification:Bn(e.timeout),l=()=>{s=!1,i&&(i=!1,a.forEach(e=>e()))};return Object.assign({},o,{subscribe(e){const t=o.subscribe(()=>r&&e());return a.add(e),()=>{t(),a.delete(e)}},dispatch(e){try{return r=!e?.meta?.RTK_autoBatch,i=!r,i&&(s||(s=!0,c(l))),o.dispatch(e)}finally{r=!0}}})})("object"==typeof n?n:void 0)),o};function Vn(e){const t={},n=[];let o;const r={addCase(e,i){if("production"!==process.env.NODE_ENV){if(n.length>0)throw new Error("production"===process.env.NODE_ENV?so(26):"`builder.addCase` should only be called before calling `builder.addMatcher`");if(o)throw new Error("production"===process.env.NODE_ENV?so(27):"`builder.addCase` should only be called before calling `builder.addDefaultCase`")}const s="string"==typeof e?e:e.type;if(!s)throw new Error("production"===process.env.NODE_ENV?so(28):"`builder.addCase` cannot be called with an empty action type");if(s in t)throw new Error("production"===process.env.NODE_ENV?so(29):`\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);return t[s]=i,r},addMatcher(e,t){if("production"!==process.env.NODE_ENV&&o)throw new Error("production"===process.env.NODE_ENV?so(30):"`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");return n.push({matcher:e,reducer:t}),r},addDefaultCase(e){if("production"!==process.env.NODE_ENV&&o)throw new Error("production"===process.env.NODE_ENV?so(31):"`builder.addDefaultCase` can only be called once");return o=e,r}};return e(r),[t,n,o]}function Jn(...e){return t=>e.some(e=>((e,t)=>jn(e)?e.match(t):e(t))(e,t))}var qn=["name","message","stack","code"],Qn=class{constructor(e,t){this.payload=e,this.meta=t}_type},Yn=class{constructor(e,t){this.payload=e,this.meta=t}_type},Kn=e=>{if("object"==typeof e&&null!==e){const t={};for(const n of qn)"string"==typeof e[n]&&(t[n]=e[n]);return t}return{message:String(e)}},Hn="External signal was aborted",Gn=(()=>{function e(e,t,n){const o=Pn(e+"/fulfilled",(e,t,n,o)=>({payload:e,meta:{...o||{},arg:n,requestId:t,requestStatus:"fulfilled"}})),r=Pn(e+"/pending",(e,t,n)=>({payload:void 0,meta:{...n||{},arg:t,requestId:e,requestStatus:"pending"}})),i=Pn(e+"/rejected",(e,t,o,r,i)=>({payload:r,error:(n&&n.serializeError||Kn)(e||"Rejected"),meta:{...i||{},arg:o,requestId:t,rejectedWithValue:!!r,requestStatus:"rejected",aborted:"AbortError"===e?.name,condition:"ConditionError"===e?.name}}));return Object.assign(function(e,{signal:s}={}){return(a,c,l)=>{const u=n?.idGenerator?n.idGenerator(e):((e=21)=>{let t="",n=e;for(;n--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t})(),d=new AbortController;let p,h;function f(e){h=e,d.abort()}s&&(s.aborted?f(Hn):s.addEventListener("abort",()=>f(Hn),{once:!0}));const m=async function(){let s;try{let i=n?.condition?.(e,{getState:c,extra:l});if(null!==(m=i)&&"object"==typeof m&&"function"==typeof m.then&&(i=await i),!1===i||d.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const y=new Promise((e,t)=>{p=()=>{t({name:"AbortError",message:h||"Aborted"})},d.signal.addEventListener("abort",p)});a(r(u,e,n?.getPendingMeta?.({requestId:u,arg:e},{getState:c,extra:l}))),s=await Promise.race([y,Promise.resolve(t(e,{dispatch:a,getState:c,extra:l,requestId:u,signal:d.signal,abort:f,rejectWithValue:(e,t)=>new Qn(e,t),fulfillWithValue:(e,t)=>new Yn(e,t)})).then(t=>{if(t instanceof Qn)throw t;return t instanceof Yn?o(t.payload,u,e,t.meta):o(t,u,e)})])}catch(t){s=t instanceof Qn?i(null,u,e,t.payload,t.meta):i(t,u,e)}finally{p&&d.signal.removeEventListener("abort",p)}var m;return n&&!n.dispatchConditionRejection&&i.match(s)&&s.meta.condition||a(s),s}();return Object.assign(m,{abort:f,requestId:u,arg:e,unwrap:()=>m.then(Xn)})}},{pending:r,rejected:i,fulfilled:o,settled:Jn(i,o),typePrefix:e})}return e.withTypes=()=>e,e})();function Xn(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}var eo=Symbol.for("rtk-slice-createasyncthunk");function to(e,t){return`${e}/${t}`}function no({creators:e}={}){const t=e?.asyncThunk?.[eo];return function(e){const{name:n,reducerPath:o=n}=e;if(!n)throw new Error("production"===process.env.NODE_ENV?so(11):"`name` is a required option for createSlice");"undefined"!=typeof process&&"development"===process.env.NODE_ENV&&void 0===e.initialState&&console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");const r=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(r),s={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},a={addCase(e,t){const n="string"==typeof e?e:e.type;if(!n)throw new Error("production"===process.env.NODE_ENV?so(12):"`context.addCase` cannot be called with an empty action type");if(n in s.sliceCaseReducersByType)throw new Error("production"===process.env.NODE_ENV?so(13):"`context.addCase` cannot be called with two reducers for the same action type: "+n);return s.sliceCaseReducersByType[n]=t,a},addMatcher:(e,t)=>(s.sliceMatchers.push({matcher:e,reducer:t}),a),exposeAction:(e,t)=>(s.actionCreators[e]=t,a),exposeCaseReducer:(e,t)=>(s.sliceCaseReducersByName[e]=t,a)};function c(){if("production"!==process.env.NODE_ENV&&"object"==typeof e.extraReducers)throw new Error("production"===process.env.NODE_ENV?so(14):"The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");const[t={},n=[],o]="function"==typeof e.extraReducers?Vn(e.extraReducers):[e.extraReducers],r={...t,...s.sliceCaseReducersByType};return function(e,t){if("production"!==process.env.NODE_ENV&&"object"==typeof t)throw new Error("production"===process.env.NODE_ENV?so(8):"The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");let n,[o,r,i]=Vn(t);if(function(e){return"function"==typeof e}(e))n=()=>Zn(e());else{const t=Zn(e);n=()=>t}function s(e=n(),t){let s=[o[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===s.filter(e=>!!e).length&&(s=[i]),s.reduce((e,n)=>{if(n){if(Mt(e)){const o=n(e,t);return void 0===o?e:o}if(Rt(e))return $n(e,e=>n(e,t));{const o=n(e,t);if(void 0===o){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return o}}return e},e)}return s.getInitialState=n,s}(e.initialState,e=>{for(let t in r)e.addCase(t,r[t]);for(let t of s.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);o&&e.addDefaultCase(o)})}i.forEach(o=>{const i=r[o],s={reducerName:o,type:to(n,o),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(i)?function({type:e,reducerName:t,createNotation:n},o,r){let i,s;if("reducer"in o){if(n&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(o))throw new Error("production"===process.env.NODE_ENV?so(17):"Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");i=o.reducer,s=o.prepare}else i=o;r.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,s?Pn(e,s):Pn(e))}(s,i,a):function({type:e,reducerName:t},n,o,r){if(!r)throw new Error("production"===process.env.NODE_ENV?so(18):"Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");const{payloadCreator:i,fulfilled:s,pending:a,rejected:c,settled:l,options:u}=n,d=r(e,i,u);o.exposeAction(t,d),s&&o.addCase(d.fulfilled,s);a&&o.addCase(d.pending,a);c&&o.addCase(d.rejected,c);l&&o.addMatcher(d.settled,l);o.exposeCaseReducer(t,{fulfilled:s||io,pending:a||io,rejected:c||io,settled:l||io})}(s,i,a,t)});const l=e=>e,u=new Map,d=new WeakMap;let p;function h(e,t){return p||(p=c()),p(e,t)}function f(){return p||(p=c()),p.getInitialState()}function m(t,n=!1){function o(e){let r=e[t];if(void 0===r)if(n)r=Tn(d,o,f);else if("production"!==process.env.NODE_ENV)throw new Error("production"===process.env.NODE_ENV?so(15):"selectSlice returned undefined for an uninjected slice reducer");return r}function r(t=l){const o=Tn(u,n,()=>new WeakMap);return Tn(o,t,()=>{const o={};for(const[r,i]of Object.entries(e.selectors??{}))o[r]=oo(i,t,()=>Tn(d,t,f),n);return o})}return{reducerPath:t,getSelectors:r,get selectors(){return r(o)},selectSlice:o}}const y={name:n,reducer:h,actions:s.actionCreators,caseReducers:s.sliceCaseReducersByName,getInitialState:f,...m(o),injectInto(e,{reducerPath:t,...n}={}){const r=t??o;return e.inject({reducerPath:r,reducer:h},n),{...y,...m(r,!0)}}};return y}}function oo(e,t,n,o){function r(r,...i){let s=t(r);if(void 0===s)if(o)s=n();else if("production"!==process.env.NODE_ENV)throw new Error("production"===process.env.NODE_ENV?so(16):"selectState returned undefined for an uninjected slice reducer");return e(s,...i)}return r.unwrapped=e,r}var ro=no();function io(){}function so(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const ao="employee-app-state",co=e=>{if("undefined"!=typeof window)try{const t=JSON.stringify(e);localStorage.setItem(ao,t)}catch(e){console.error("Error saving state to localStorage:",e)}},lo=()=>{if("undefined"!=typeof window)try{const e=localStorage.getItem(ao);if(null===e)return;return JSON.parse(e)}catch(e){return}},uo=Gn("employees/fetchAllEmployees",async(e,{getState:t,rejectWithValue:n})=>{try{const e=t();if(e.employees.allEmployees.length>0)return{employees:e.employees.allEmployees,totalItems:e.employees.totalItems,totalPages:e.employees.totalPages};const n=await fetch("/assets/data/employees.json");if(!n.ok)throw new Error("Failed to fetch employees");const o=await n.json();return{employees:o,totalItems:o.length,totalPages:Math.ceil(o.length/10)}}catch(e){return n(e instanceof Error?e.message:"Unknown error")}}),po=Gn("employees/getEmployeeById",async(e,{rejectWithValue:t})=>{try{const t=await fetch("/assets/data/employees.json");if(!t.ok)throw new Error("Failed to fetch employees");const n=(await t.json()).find(t=>t.id===e);if(!n)throw new Error("Employee not found");return n}catch(e){return t(e instanceof Error?e.message:"Unknown error")}}),ho=Gn("employees/changePage",async(e,{getState:t,rejectWithValue:n})=>{try{const n=t(),{allEmployees:o,itemsPerPage:r,searchQuery:i,filteredEmployees:s}=n.employees,a=i.trim()&&s.length>0?s:o,c=(e-1)*r,l=c+r;return{currentEmployees:a.slice(c,l),currentPage:e,totalItems:a.length,totalPages:Math.max(1,Math.ceil(a.length/r))}}catch(e){return n(e instanceof Error?e.message:"Unknown error")}}),fo=Gn("employees/searchEmployees",async(e,{getState:t,rejectWithValue:n})=>{try{const n=t(),{allEmployees:o,itemsPerPage:r}=n.employees;if(!e.trim()){const e=0,t=r;return{searchQuery:"",filteredEmployees:[],currentEmployees:o.slice(e,t),currentPage:1,totalItems:o.length,totalPages:Math.ceil(o.length/r),isSearching:!1}}const i=e.toLowerCase(),s=o.filter(e=>e.firstName.toLowerCase().includes(i)||e.lastName.toLowerCase().includes(i)||e.email.toLowerCase().includes(i)||e.department.toLowerCase().includes(i)||e.position.toLowerCase().includes(i)),a=0,c=Math.min(r,s.length),l=s.slice(a,c);return{searchQuery:e,filteredEmployees:s,currentEmployees:l,currentPage:1,totalItems:s.length,totalPages:Math.max(1,Math.ceil(s.length/r)),isSearching:!0}}catch(e){return n(e instanceof Error?e.message:"Unknown error")}}),mo=ro({name:"employees",initialState:{allEmployees:[],currentEmployees:[],selectedEmployee:null,loading:!1,error:null,currentPage:1,totalPages:0,itemsPerPage:10,totalItems:0,searchQuery:"",filteredEmployees:[],isSearching:!1},reducers:{clearEmployees:e=>{e.allEmployees=[],e.currentEmployees=[],e.selectedEmployee=null,e.currentPage=1,e.totalPages=0,e.totalItems=0,e.searchQuery="",e.filteredEmployees=[],e.isSearching=!1},clearSelectedEmployee:e=>{e.selectedEmployee=null},addEmployee:(e,t)=>{if(e.allEmployees.push(t.payload),e.isSearching){const t=e.searchQuery.toLowerCase();e.filteredEmployees=e.allEmployees.filter(e=>e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)||e.department.toLowerCase().includes(t)||e.position.toLowerCase().includes(t)),e.totalItems=e.filteredEmployees.length,e.totalPages=Math.ceil(e.totalItems/e.itemsPerPage);const n=(e.currentPage-1)*e.itemsPerPage,o=n+e.itemsPerPage;e.currentEmployees=e.filteredEmployees.slice(n,o)}else{e.totalItems=e.allEmployees.length,e.totalPages=Math.ceil(e.totalItems/e.itemsPerPage);const t=(e.currentPage-1)*e.itemsPerPage,n=t+e.itemsPerPage;e.currentEmployees=e.allEmployees.slice(t,n)}if("undefined"!=typeof window){co({employees:e})}},updateEmployee:(e,t)=>{const n=e.allEmployees.findIndex(e=>e.id===t.payload.id);if(-1!==n)if(e.allEmployees[n]=t.payload,e.isSearching){const t=e.searchQuery.toLowerCase();e.filteredEmployees=e.allEmployees.filter(e=>e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)||e.department.toLowerCase().includes(t)||e.position.toLowerCase().includes(t));const n=(e.currentPage-1)*e.itemsPerPage,o=n+e.itemsPerPage;e.currentEmployees=e.filteredEmployees.slice(n,o)}else{const t=(e.currentPage-1)*e.itemsPerPage,n=t+e.itemsPerPage;e.currentEmployees=e.allEmployees.slice(t,n)}},deleteEmployee:(e,t)=>{if(e.allEmployees=e.allEmployees.filter(e=>e.id!==t.payload),e.isSearching){const t=e.searchQuery.toLowerCase();e.filteredEmployees=e.allEmployees.filter(e=>e.firstName.toLowerCase().includes(t)||e.lastName.toLowerCase().includes(t)||e.email.toLowerCase().includes(t)||e.department.toLowerCase().includes(t)||e.position.toLowerCase().includes(t)),e.totalItems=e.filteredEmployees.length,e.totalPages=Math.ceil(e.totalItems/e.itemsPerPage),e.currentPage>e.totalPages&&e.totalPages>0&&(e.currentPage=e.totalPages);const n=(e.currentPage-1)*e.itemsPerPage,o=n+e.itemsPerPage;e.currentEmployees=e.filteredEmployees.slice(n,o)}else{e.totalItems=e.allEmployees.length,e.totalPages=Math.ceil(e.totalItems/e.itemsPerPage),e.currentPage>e.totalPages&&e.totalPages>0&&(e.currentPage=e.totalPages);const t=(e.currentPage-1)*e.itemsPerPage,n=t+e.itemsPerPage;e.currentEmployees=e.allEmployees.slice(t,n)}}},extraReducers:e=>{e.addCase(uo.pending,e=>{e.loading=!0,e.error=null}).addCase(uo.fulfilled,(e,t)=>{e.loading=!1,e.allEmployees=t.payload.employees,e.totalItems=t.payload.totalItems,e.totalPages=t.payload.totalPages,e.currentPage=1;const n=e.itemsPerPage;e.currentEmployees=t.payload.employees.slice(0,n)}).addCase(uo.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(po.pending,e=>{e.loading=!0,e.error=null}).addCase(po.fulfilled,(e,t)=>{e.loading=!1,e.selectedEmployee=t.payload}).addCase(po.rejected,(e,t)=>{e.loading=!1,e.error=t.payload}).addCase(ho.fulfilled,(e,t)=>{e.currentEmployees=t.payload.currentEmployees,e.currentPage=t.payload.currentPage,e.totalItems=t.payload.totalItems,e.totalPages=t.payload.totalPages}).addCase(fo.pending,e=>{e.loading=!0,e.error=null}).addCase(fo.fulfilled,(e,t)=>{e.loading=!1,e.searchQuery=t.payload.searchQuery,e.filteredEmployees=t.payload.filteredEmployees,e.currentEmployees=t.payload.currentEmployees,e.currentPage=t.payload.currentPage,e.totalItems=t.payload.totalItems,e.totalPages=t.payload.totalPages,e.isSearching=t.payload.isSearching}).addCase(fo.rejected,(e,t)=>{e.loading=!1,e.error=t.payload})}}),{clearEmployees:yo,clearSelectedEmployee:go,addEmployee:bo,updateEmployee:wo,deleteEmployee:vo}=mo.actions;var xo=mo.reducer;const $o=e=>t=>n=>{const o=t(n),r=e.getState();return co(r),o},ko=function(e){const t=Fn(),{reducer:n,middleware:o,devTools:r=!0,duplicateMiddlewareCheck:i=!0,preloadedState:s,enhancers:a}=e||{};let c,l;if("function"==typeof n)c=n;else{if(!Et(n))throw new Error("production"===process.env.NODE_ENV?so(1):"`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");c=At(n)}if("production"!==process.env.NODE_ENV&&o&&"function"!=typeof o)throw new Error("production"===process.env.NODE_ENV?so(2):"`middleware` field must be a callback");if("function"==typeof o){if(l=o(t),"production"!==process.env.NODE_ENV&&!Array.isArray(l))throw new Error("production"===process.env.NODE_ENV?so(3):"when using a middleware builder function, an array of middleware must be returned")}else l=t();if("production"!==process.env.NODE_ENV&&l.some(e=>"function"!=typeof e))throw new Error("production"===process.env.NODE_ENV?so(4):"each middleware provided to configureStore must be a function");if("production"!==process.env.NODE_ENV&&i){let e=new Set;l.forEach(t=>{if(e.has(t))throw new Error("production"===process.env.NODE_ENV?so(42):"Duplicate middleware references found when creating the store. Ensure that each middleware is only included once.");e.add(t)})}let u=_t;r&&(u=Cn({trace:"production"!==process.env.NODE_ENV,..."object"==typeof r&&r}));const d=function(...e){return t=>(n,o)=>{const r=t(n,o);let i=()=>{throw new Error("production"===process.env.NODE_ENV?vt(15):"Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")};const s={getState:r.getState,dispatch:(e,...t)=>i(e,...t)},a=e.map(e=>e(s));return i=_t(...a)(r.dispatch),{...r,dispatch:i}}}(...l),p=Wn(d);if("production"!==process.env.NODE_ENV&&a&&"function"!=typeof a)throw new Error("production"===process.env.NODE_ENV?so(5):"`enhancers` field must be a callback");let h="function"==typeof a?a(p):p();if("production"!==process.env.NODE_ENV&&!Array.isArray(h))throw new Error("production"===process.env.NODE_ENV?so(6):"`enhancers` callback must return an array");if("production"!==process.env.NODE_ENV&&h.some(e=>"function"!=typeof e))throw new Error("production"===process.env.NODE_ENV?so(7):"each enhancer provided to configureStore must be a function");return"production"!==process.env.NODE_ENV&&l.length&&!h.includes(d)&&console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`"),jt(c,s,u(...h))}({reducer:{employees:xo},preloadedState:lo(),middleware:e=>e().concat($o)});class Eo{static async searchEmployees(e){try{await ko.dispatch(fo(e))}catch(e){throw console.error("Error searching employees:",e),e}}static async loadEmployees(){try{await ko.dispatch(uo())}catch(e){throw console.error("Error loading employees:",e),e}}static async changePage(e){try{await ko.dispatch(ho(e))}catch(e){throw console.error("Error changing page:",e),e}}static async deleteEmployee(e){try{await ko.dispatch(vo(e))}catch(e){throw console.error("Error deleting employee:",e),e}}static setupStoreSubscription(e){return ko.subscribe(()=>{const t=ko.getState().employees;e.employees=t.currentEmployees,e.currentPage=t.currentPage,e.totalPages=t.totalPages,e.totalItems=t.totalItems,e.loading=t.loading,e.error=t.error,e.isSearching=t.isSearching,e.requestUpdate()})}static getCurrentState(){return ko.getState().employees}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class So extends se{static styles=[Ye,Ke];static properties={employees:{type:Array},loading:{type:Boolean},error:{type:String},currentPage:{type:Number},totalPages:{type:Number},totalItems:{type:Number},itemsPerPage:{type:Number},searchQuery:{type:String},showDeletePopup:{type:Boolean},employeeToDelete:{type:Object},selectedEmployees:{type:Object},showMultiDeletePopup:{type:Boolean},showEditErrorPopup:{type:Boolean},selectAllChecked:{type:Boolean},isSearching:{type:Boolean},currentLocale:{type:Boolean}};constructor(){super(),this.employees=[],this.loading=!1,this.error=null,this.currentPage=1,this.totalPages=0,this.totalItems=0,this.itemsPerPage=10,this._searchQuery="",this.showDeletePopup=!1,this.employeeToDelete=null,this.selectedEmployees=new Set,this.showMultiDeletePopup=!1,this.showEditErrorPopup=!1,this.selectAllChecked=!1,this.isSearching=!1,this.unsubscribe=null,this.loadEmployees(),this.setupStoreSubscription()}updated(e){e.has("searchQuery")&&this.handleSearchChange()}set searchQuery(e){const t=this._searchQuery;this._searchQuery=e,t!==e&&this.handleSearchChange()}get searchQuery(){return this._searchQuery||""}setupStoreSubscription(){this.unsubscribe=Eo.setupStoreSubscription(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe(),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=()=>{this.requestUpdate()};async loadEmployees(){try{await Eo.loadEmployees()}catch(e){console.error("Error loading employees:",e)}}async changePage(e){try{await Eo.changePage(e)}catch(e){console.error("Error changing page:",e)}}showDeleteConfirmation(e){this.employeeToDelete=e,this.showDeletePopup=!0}async deleteEmployee(e){try{await Eo.deleteEmployee(e),this.showDeletePopup=!1,this.employeeToDelete=null}catch(e){console.error("Error deleting employee:",e)}}handleDeleteConfirm(){this.employeeToDelete&&this.deleteEmployee(this.employeeToDelete.id)}handleDeleteCancel(){this.showDeletePopup=!1,this.employeeToDelete=null}handleSelectAll(){this.selectAllChecked?(this.selectedEmployees=new Set,this.selectAllChecked=!1):(this.selectedEmployees=new Set(this.employees.map(e=>e.id)),this.selectAllChecked=!0)}handleEmployeeSelect(e){const t=new Set(this.selectedEmployees);t.has(e)?t.delete(e):t.add(e),this.selectedEmployees=t,this.selectAllChecked=t.size===this.employees.length}handleMultiDelete(){this.selectedEmployees.size>0&&(this.showMultiDeletePopup=!0)}async handleMultiDeleteConfirm(){try{const e=Array.from(this.selectedEmployees).map(e=>Eo.deleteEmployee(e));await Promise.all(e),this.selectedEmployees=new Set,this.selectAllChecked=!1,this.showMultiDeletePopup=!1}catch(e){console.error("Error deleting multiple employees:",e)}}handleMultiDeleteCancel(){this.showMultiDeletePopup=!1}handleMultiEdit(){if(1!==this.selectedEmployees.size)return void(this.showEditErrorPopup=!0);const e=Array.from(this.selectedEmployees)[0];window.location.href=`/edit/${e}`}handleEditErrorClose(){this.showEditErrorPopup=!1}async handleSearchChange(){try{await Eo.searchEmployees(this._searchQuery)}catch(e){console.error("Error searching employees:",e)}}render(){return this.loading?L`
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <p>${be("Loading employees...")}</p>
        </div>
      `:this.error?L`
        <div class="error-container">
          <p class="error-message">${this.error}</p>
          <button-element
            variant="primary"
            size="medium"
            label=${be("Retry")}
            @click=${this.loadEmployees}
          >
            ${be("Retry")}
          </button-element>
        </div>
      `:0===this.employees.length?L`
        <div class="empty-state">
          <p>${be("No employees found.")}</p>
        </div>
      `:L`
      <div class="employee-list-container">
        <div class="bulk-actions">
          ${this.selectedEmployees.size>0?L`
                <div class="bulk-buttons">
                  <button-element
                    variant="primary"
                    size="small"
                    label=${be("Edit")}
                    @click=${this.handleMultiEdit}
                  >
                    ${be("Edit")}
                  </button-element>
                  <button-element
                    variant="danger"
                    size="small"
                    label=${be("Delete")}
                    @click=${this.handleMultiDelete}
                  >
                    ${be("Delete")}
                  </button-element>
                </div>
              `:""}
        </div>

        <div class="table-container">
          <table class="employee-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    .checked=${this.selectAllChecked}
                    @change=${this.handleSelectAll}
                  />
                </th>
                <th>${be("First Name")}</th>
                <th>${be("Last Name")}</th>
                <th>${be("Date of Employment")}</th>
                <th>${be("Date of Birth")}</th>
                <th>${be("Phone")}</th>
                <th>${be("Email")}</th>
                <th>${be("Department")}</th>
                <th>${be("Position")}</th>
                <th>${be("Actions")}</th>
              </tr>
            </thead>
            <tbody>
              ${Qe(this.employees,e=>e.id,e=>L`
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        .checked=${this.selectedEmployees.has(e.id)}
                        @change=${()=>this.handleEmployeeSelect(e.id)}
                      />
                    </td>
                    <td>${e.firstName}</td>
                    <td>${e.lastName}</td>
                    <td>${e.employmentDate}</td>
                    <td>${e.birthDate}</td>
                    <td>${e.phone}</td>
                    <td>${e.email}</td>
                    <td>${e.department}</td>
                    <td>${e.position}</td>
                    <td class="actions">
                      <a href="/edit/${e.id}">✏️</a>
                      <span
                        @click=${()=>this.showDeleteConfirmation(e)}
                        >🗑️</span
                      >
                    </td>
                  </tr>
                `)}
            </tbody>
          </table>
        </div>

        <pagination-element
          .currentPage=${this.currentPage}
          .totalPages=${this.totalPages}
          @page-change=${e=>this.changePage(e.detail.page)}
        ></pagination-element>
      </div>

      <popup-element
        .open=${this.showDeletePopup}
        type="warning"
        .popupTitle=${be("Confirm Delete")}
        .message=${this.employeeToDelete?be(me`Are you sure you want to delete ${this.employeeToDelete.firstName} ${this.employeeToDelete.lastName}?`):""}
        .showConfirmButtons=${!0}
        .confirmText=${be("Delete")}
        .cancelText=${be("Cancel")}
        @confirm=${this.handleDeleteConfirm}
        @close=${this.handleDeleteCancel}
      ></popup-element>

      <popup-element
        .open=${this.showMultiDeletePopup}
        type="warning"
        .popupTitle=${be("Confirm Delete")}
        .message=${be(me`Are you sure you want to delete ${this.selectedEmployees.size} employees?`)}
        .showConfirmButtons=${!0}
        .confirmText=${be("Delete")}
        .cancelText=${be("Cancel")}
        @confirm=${this.handleMultiDeleteConfirm}
        @close=${this.handleMultiDeleteCancel}
      ></popup-element>

      <popup-element
        .open=${this.showEditErrorPopup}
        type="error"
        .popupTitle=${be("Error")}
        .message=${be("You can only edit one employee.")}
        @close=${this.handleEditErrorClose}
      ></popup-element>
    `}}window.customElements.define("employee-list",So);const Co=i`
  :host {
    display: block;
  }

  .employee-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 20px;
    padding: 20px 0;
  }

  .error {
    background-color: #ffebee;
    color: #c62828;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #ffcdd2;
    margin-bottom: 20px;
  }

  .loading {
    text-align: center;
    padding: 40px;
    color: #666;
    font-size: 16px;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 16px 0;
    }
  }

  @media (max-width: 480px) {
    .grid-container {
      gap: 12px;
      padding: 12px 0;
    }
  }
`,jo=i`
  :host {
    height: fit-content;
  }

  .employee-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid;
    border-color: var(--border-grey, '#e0e0e0');
    transition: all 0.2s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .employee-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  .employee-card.empty {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-style: italic;
  }

  .top {
    display: flex;
    gap: 32px;
    flex: 1;
  }

  .left,
  .right {
    flex: 1;
  }

  .item {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .label {
    font-size: 12px;
    color: #666;
    margin-bottom: 4px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .value {
    font-size: 16px;
    color: var(--secondary-color, '#172b53');
    font-weight: 500;
    word-break: break-word;
  }

  .bottom {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    border-top: 1px solid var(--border-grey, '#e0e0e0');
    padding-top: 16px;
    margin-top: auto;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .employee-card {
      padding: 16px;
    }

    .top {
      gap: 16px;
      margin-bottom: 16px;
    }

    .item {
      margin-bottom: 12px;
    }

    .label {
      font-size: 11px;
    }

    .value {
      font-size: 14px;
    }

    .bottom {
      padding-top: 12px;
      gap: 8px;
    }
  }

  @media (max-width: 480px) {
    .top {
      flex-direction: column;
      gap: 12px;
    }

    .left,
    .right {
      flex: none;
    }
  }
`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;window.customElements.define("employee-card",class extends se{static styles=jo;static properties={employee:{type:Object}};constructor(){super(),this.employee=null}connectedCallback(){super.connectedCallback(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=()=>{this.requestUpdate()};render(){return this.employee?L`
      <div class="employee-card" part="card">
        <div class="top">
          <div class="left">
            <div class="item">
              <span class="label">${be("First Name")}</span>
              <span class="value">${this.employee.firstName}</span>
            </div>

            <div class="item">
              <span class="label">${be("Date of Employment")}</span>
              <span class="value">${this.employee.employmentDate}</span>
            </div>

            <div class="item">
              <span class="label">${be("Phone")}</span>
              <span class="value">${this.employee.phone}</span>
            </div>

            <div class="item">
              <span class="label">${be("Department")}</span>
              <span class="value">${this.employee.department}</span>
            </div>
          </div>

          <div class="right">
            <div class="item">
              <span class="label">${be("Last Name")}</span>
              <span class="value">${this.employee.lastName}</span>
            </div>
            <div class="item">
              <span class="label">${be("Date of Birth")}</span>
              <span class="value">${this.employee.birthDate}</span>
            </div>
            <div class="item">
              <span class="label">${be("Email")}</span>
              <span class="value">${this.employee.email}</span>
            </div>

            <div class="item">
              <span class="label">${be("Position")}</span>
              <span class="value">${this.employee.position}</span>
            </div>
          </div>
        </div>

        <div class="bottom">
          <button-element
            variant="primary"
            size="small"
            label=${be("Edit")}
            @click=${()=>this.editEmployee(this.employee?.id)}
          >
            ${be("Edit")}
          </button-element>
          <button-element
            variant="danger"
            size="small"
            label=${be("Delete")}
            @click=${()=>this.deleteEmployee(this.employee?.id)}
          >
            ${be("Delete")}
          </button-element>
        </div>
      </div>
    `:L`<div class="employee-card empty">No employee data</div>`}editEmployee(e){e&&this.dispatchEvent(new CustomEvent(ut,{detail:{employeeId:e,employee:this.employee},bubbles:!0,composed:!0}))}deleteEmployee(e){e&&this.dispatchEvent(new CustomEvent(dt,{detail:{employeeId:e,employee:this.employee},bubbles:!0,composed:!0}))}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Po extends se{static styles=[Ye,Co];static properties={employees:{type:Array},loading:{type:Boolean},error:{type:String},currentPage:{type:Number},totalPages:{type:Number},totalItems:{type:Number},itemsPerPage:{type:Number},searchQuery:{type:String},showDeletePopup:{type:Boolean},employeeToDelete:{type:Object},isSearching:{type:Boolean}};constructor(){super(),this.employees=[],this.loading=!1,this.error=null,this.currentPage=1,this.totalPages=0,this.totalItems=0,this.itemsPerPage=10,this._searchQuery="",this.showDeletePopup=!1,this.employeeToDelete=null,this.isSearching=!1,this.unsubscribe=null,this.loadEmployees(),this.setupStoreSubscription()}updated(e){e.has("searchQuery")&&this.handleSearchChange()}set searchQuery(e){const t=this._searchQuery;this._searchQuery=e,t!==e&&this.handleSearchChange()}get searchQuery(){return this._searchQuery||""}setupStoreSubscription(){this.unsubscribe=Eo.setupStoreSubscription(this)}connectedCallback(){super.connectedCallback(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe(),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=()=>{this.requestUpdate()};async loadEmployees(){try{await Eo.loadEmployees()}catch(e){console.error("Error loading employees:",e)}}async changePage(e){try{await Eo.changePage(e)}catch(e){console.error("Error changing page:",e)}}handleEditEmployee(e){const t=e.detail.employeeId;window.location.href=`/edit/${t}`}handleDeleteEmployee(e){const t=e.detail.employee;this.employeeToDelete=t,this.showDeletePopup=!0}async deleteEmployee(e){try{await Eo.deleteEmployee(e),this.showDeletePopup=!1,this.employeeToDelete=null}catch(e){console.error("Error deleting employee:",e)}}handleDeleteConfirm(){this.employeeToDelete&&this.deleteEmployee(this.employeeToDelete.id)}handleDeleteCancel(){this.showDeletePopup=!1,this.employeeToDelete=null}async handleSearchChange(){try{await Eo.searchEmployees(this._searchQuery)}catch(e){console.error("Error searching employees:",e)}}render(){return this.loading?L`
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <p>${be("Loading employees...")}</p>
        </div>
      `:this.error?L`
        <div class="error-container">
          <p class="error-message">${this.error}</p>
          <button-element
            variant="primary"
            size="medium"
            label=${be("Retry")}
            @click=${this.loadEmployees}
          >
            ${be("Retry")}
          </button-element>
        </div>
      `:0===this.employees.length?L`
        <div class="empty-state">
          <p>${be("No employees found.")}</p>
        </div>
      `:L`
      <div class="employee-grid">
        <div class="grid-container" part="grid">
          ${Qe(this.employees,e=>e.id,e=>L`
              <employee-card
                .employee=${e}
                @edit-employee=${this.handleEditEmployee}
                @delete-employee=${this.handleDeleteEmployee}
              ></employee-card>
            `)}
        </div>

        <pagination-element
          .currentPage=${this.currentPage}
          .totalPages=${this.totalPages}
          @page-change=${e=>this.changePage(e.detail.page)}
        ></pagination-element>
      </div>

      <popup-element
        .open=${this.showDeletePopup}
        type="warning"
        .popupTitle=${be("Confirm Delete")}
        .message=${this.employeeToDelete?be(me`Are you sure you want to delete ${this.employeeToDelete.firstName} ${this.employeeToDelete.lastName}?`):""}
        .showConfirmButtons=${!0}
        .confirmText=${be("Delete")}
        .cancelText=${be("Cancel")}
        @confirm=${this.handleDeleteConfirm}
        @close=${this.handleDeleteCancel}
      ></popup-element>
    `}}window.customElements.define("employee-grid",Po);const Ao=i`
  :host {
  }

  .input-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
  }

  .label {
    font-size: 12px;
    color: #767676;
    margin-bottom: 4px;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
  }

  input,
  select {
    font-size: 16px;
    border: 1px solid;
    border-color: var(--border-color, '#e0e0e0');
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    min-height: 40px;
    background-color: white;
    color: #333;
    padding: 0 12px;
    transition: border-color 0.2s ease;
    max-height: 100%;
  }

  input:focus,
  select:focus {
    border-color: var(--primary-color, '#ff6200');
  }

  input.error,
  select.error {
    border-color: #ff4444;
  }

  .error-message {
    color: #ff4444;
    font-size: 12px;
    margin-top: 4px;
  }

  .icon {
    position: absolute;
    right: 12px;
    color: var(--primary-color, '#ff6200');
    pointer-events: none;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px;
    padding-right: 32px;
  }
`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;window.customElements.define("input-element",class extends se{static styles=Ao;static properties={label:{type:String},error:{type:String},icon:{type:String},value:{type:String},type:{type:String},placeholder:{type:String},name:{type:String},options:{type:Array}};constructor(){super(),this.label="",this.error="",this.icon="",this.value="",this.type="text",this.placeholder="",this.name="",this.options=[]}connectedCallback(){super.connectedCallback(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=()=>{this.requestUpdate()};getTodayDate(){const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}render(){return"select"===this.type?L`
        <div class="input-container">
          <span class="label">${be(this.label)}</span>
          <div class="input-wrapper">
            <select
              .value=${this.value}
              @change=${this.onChange}
              @focus=${this.onFocus}
              @blur=${this.onBlur}
              class=${He({error:this.error})}
              name=${this.name}
            >
              <option value="">${be("Select")}</option>
              ${this.options.map(e=>L`<option value=${e.value}>
                    ${be(e.label)}
                  </option>`)}
            </select>
            ${this.icon?L`<span class="icon">${this.icon}</span>`:""}
          </div>
          ${this.error?L`<span class="error-message">${be(this.error)}</span>`:""}
        </div>
      `:L`
      <div class="input-container">
        <span class="label">${be(this.label)}</span>
        <div class="input-wrapper">
          <input
            .value=${this.value}
            .type=${this.type}
            .placeholder=${this.placeholder?be(this.placeholder):""}
            .name=${this.name}
            .max=${"date"===this.type?this.getTodayDate():void 0}
            @change=${this.onChange}
            @input=${this.onInput}
            @focus=${this.onFocus}
            @blur=${this.onBlur}
            class=${He({error:this.error})}
          />
          ${this.icon?L`<span class="icon">${this.icon}</span>`:""}
        </div>
        ${this.error?L`<span class="error-message">${be(this.error)}</span>`:""}
      </div>
    `}onChange(e){const t=e.target;this.dispatchEvent(new CustomEvent(ft,{detail:{name:this.name,value:t.value}}))}onInput(e){const t=e.target;this.value=t.value}onFocus(e){this.dispatchEvent(new CustomEvent("focus",{detail:e}))}onBlur(e){this.dispatchEvent(new CustomEvent("blur",{detail:e}))}sayHello(e){return`Hello, ${e}`}});const _o=i`
  :host {
    display: block;
  }

  .employees-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .employees-toolbar {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    padding: 10px 0;
    border-bottom: 1px solid var(--border-grey, '#e0e0e0');
  }

  .search-container {
    position: relative;
    display: flex;
    align-items: center;
    flex: 1;
    max-width: 200px;
  }

  .search-container input-element {
    height: 40px;
  }

  .clear-search-btn {
    position: absolute;
    height: 100%;
    top: 4px;
    right: 8px;
    background-color: var(--primary-color, '#ff6200');
    border: none;
    color: #999;
    cursor: pointer;
    font-size: 16px;
    padding: 4px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
  }

  .clear-search-btn:hover {
    background-color: #f5f5f5;
    color: #666;
  }

  .view-buttons {
    display: flex;
    gap: 10px;
  }

  .employees-toolbar button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color, '#ff6200');
    border: none;
    border-radius: 8px;
    color: #fff;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.2s;
  }

  .employees-toolbar button img {
    width: 16px;
    height: 16px;
  }

  .employees-toolbar button:hover {
    background-color: #e55a00;
  }

  .employees-toolbar button.active {
    background-color: var(--primary-color, '#ff6200');
  }

  .employees-list-area {
    flex: 1;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .employees-toolbar {
      flex-direction: column;
      gap: 15px;
      align-items: stretch;
    }

    .search-container {
      max-width: none;
    }

    .view-buttons {
      justify-content: center;
    }
  }

  @media (max-width: 480px) {
    .employees-toolbar {
      padding: 8px 0;
    }

    .view-buttons {
      gap: 8px;
    }
  }
`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;function Oo(e,t,n){function o(n,o){var r;Object.defineProperty(n,"_zod",{value:n._zod??{},enumerable:!1}),(r=n._zod).traits??(r.traits=new Set),n._zod.traits.add(e),t(n,o);for(const e in s.prototype)e in n||Object.defineProperty(n,e,{value:s.prototype[e].bind(n)});n._zod.constr=s,n._zod.def=o}const r=n?.Parent??Object;class i extends r{}function s(e){var t;const r=n?.Parent?new i:this;o(r,e),(t=r._zod).deferred??(t.deferred=[]);for(const e of r._zod.deferred)e();return r}return Object.defineProperty(i,"name",{value:e}),Object.defineProperty(s,"init",{value:o}),Object.defineProperty(s,Symbol.hasInstance,{value:t=>!!(n?.Parent&&t instanceof n.Parent)||t?._zod?.traits?.has(e)}),Object.defineProperty(s,"name",{value:e}),s}window.customElements.define("employees-page",class extends se{static styles=_o;static properties={viewMode:{type:String},count:{type:Number},searchQuery:{type:String}};constructor(){super(),this.viewMode="list",this.count=0,this.searchQuery=""}render(){return L`
      <div class="employees-content">
        <div class="employees-toolbar" part="toolbar">
          <div class="search-container">
            <input-element
              class="search-input"
              type="text"
              placeholder=${be("Search employees...")}
              .value=${this.searchQuery}
              @value-changed=${this.handleSearchInput}
            ></input-element>
            ${this.searchQuery?L`
                  <button class="clear-search-btn" @click=${this.clearSearch}>
                    ✕
                  </button>
                `:""}
          </div>
          <div class="view-buttons">
            <button-element
              variant=${"list"===this.viewMode?"primary":"secondary"}
              size="small"
              @click=${()=>this._setViewMode("list")}
            >
              <img src="../../../assets/icons/list.svg" />
            </button-element>
            <button-element
              variant=${"grid"===this.viewMode?"primary":"secondary"}
              size="small"
              @click=${()=>this._setViewMode("grid")}
            >
              <img src="../../../assets/icons/grid.svg" />
            </button-element>
          </div>
        </div>
        <div class="employees-list-area" part="content">
          ${"list"===this.viewMode?L`<employee-list
                .searchQuery=${this.searchQuery}
              ></employee-list>`:L`<employee-grid
                .searchQuery=${this.searchQuery}
              ></employee-grid>`}
        </div>
      </div>
    `}_setViewMode(e){this.viewMode=e,this.dispatchEvent(new CustomEvent(mt,{detail:{viewMode:e}}))}handleSearchInput(e){this.searchQuery=e.detail.value}clearSearch(){this.searchQuery=""}});class Zo extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}const To={};function Io(e){return To}function Do(e,t){return"bigint"==typeof t?t.toString():t}function zo(e){return{get value(){{const t=e();return Object.defineProperty(this,"value",{value:t}),t}}}}function No(e){return null==e}function Mo(e){const t=e.startsWith("^")?1:0,n=e.endsWith("$")?e.length-1:e.length;return e.slice(t,n)}const Ro=Symbol("evaluating");function Uo(e,t,n){let o;Object.defineProperty(e,t,{get(){if(o!==Ro)return void 0===o&&(o=Ro,o=n()),o},set(n){Object.defineProperty(e,t,{value:n})},configurable:!0})}function Lo(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Fo(...e){const t={};for(const n of e){const e=Object.getOwnPropertyDescriptors(n);Object.assign(t,e)}return Object.defineProperties({},t)}function Bo(e){return JSON.stringify(e)}const Wo="captureStackTrace"in Error?Error.captureStackTrace:(...e)=>{};function Vo(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}const Jo=zo(()=>{if("undefined"!=typeof navigator&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{return new Function(""),!0}catch(e){return!1}});function qo(e){if(!1===Vo(e))return!1;const t=e.constructor;if(void 0===t)return!0;const n=t.prototype;return!1!==Vo(n)&&!1!==Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")}const Qo=new Set(["string","number","symbol"]);function Yo(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ko(e,t,n){const o=new e._zod.constr(t??e._zod.def);return t&&!n?.parent||(o._zod.parent=e),o}function Ho(e){const t=e;if(!t)return{};if("string"==typeof t)return{error:()=>t};if(void 0!==t?.message){if(void 0!==t?.error)throw new Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,"string"==typeof t.error?{...t,error:()=>t.error}:t}function Go(e,t=0){for(let n=t;n<e.issues.length;n++)if(!0!==e.issues[n]?.continue)return!0;return!1}function Xo(e,t){return t.map(t=>{var n;return(n=t).path??(n.path=[]),t.path.unshift(e),t})}function er(e){return"string"==typeof e?e:e?.message}function tr(e,t,n){const o={...e,path:e.path??[]};if(!e.message){const r=er(e.inst?._zod.def?.error?.(e))??er(t?.error?.(e))??er(n.customError?.(e))??er(n.localeError?.(e))??"Invalid input";o.message=r}return delete o.inst,delete o.continue,t?.reportInput||delete o.input,o}function nr(e){return Array.isArray(e)?"array":"string"==typeof e?"string":"unknown"}function or(...e){const[t,n,o]=e;return"string"==typeof t?{message:t,code:"custom",input:n,inst:o}:{...t}}const rr=(e,t)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),e.message=JSON.stringify(t,Do,2),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},ir=Oo("$ZodError",rr),sr=Oo("$ZodError",rr,{Parent:Error});const ar=e=>(t,n,o,r)=>{const i=o?Object.assign(o,{async:!1}):{async:!1},s=t._zod.run({value:n,issues:[]},i);if(s instanceof Promise)throw new Zo;if(s.issues.length){const t=new(r?.Err??e)(s.issues.map(e=>tr(e,i,Io())));throw Wo(t,r?.callee),t}return s.value},cr=e=>async(t,n,o,r)=>{const i=o?Object.assign(o,{async:!0}):{async:!0};let s=t._zod.run({value:n,issues:[]},i);if(s instanceof Promise&&(s=await s),s.issues.length){const t=new(r?.Err??e)(s.issues.map(e=>tr(e,i,Io())));throw Wo(t,r?.callee),t}return s.value},lr=e=>(t,n,o)=>{const r=o?{...o,async:!1}:{async:!1},i=t._zod.run({value:n,issues:[]},r);if(i instanceof Promise)throw new Zo;return i.issues.length?{success:!1,error:new(e??ir)(i.issues.map(e=>tr(e,r,Io())))}:{success:!0,data:i.value}},ur=lr(sr),dr=e=>async(t,n,o)=>{const r=o?Object.assign(o,{async:!0}):{async:!0};let i=t._zod.run({value:n,issues:[]},r);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new e(i.issues.map(e=>tr(e,r,Io())))}:{success:!0,data:i.value}},pr=dr(sr),hr=/^[cC][^\s-]{8,}$/,fr=/^[0-9a-z]+$/,mr=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,yr=/^[0-9a-vA-V]{20}$/,gr=/^[A-Za-z0-9]{27}$/,br=/^[a-zA-Z0-9_-]{21}$/,wr=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,vr=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,xr=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/,$r=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;const kr=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Er=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,Sr=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Cr=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,jr=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Pr=/^[A-Za-z0-9_-]*$/,Ar=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,_r=/^\+(?:[0-9]){6,14}[0-9]$/,Or="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Zr=new RegExp(`^${Or}$`);function Tr(e){const t="(?:[01]\\d|2[0-3]):[0-5]\\d";return"number"==typeof e.precision?-1===e.precision?`${t}`:0===e.precision?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}const Ir=/^[^A-Z]*$/,Dr=/^[^a-z]*$/,zr=Oo("$ZodCheck",(e,t)=>{var n;e._zod??(e._zod={}),e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),Nr=Oo("$ZodCheckMaxLength",(e,t)=>{var n;zr.init(e,t),(n=e._zod.def).when??(n.when=e=>{const t=e.value;return!No(t)&&void 0!==t.length}),e._zod.onattach.push(e=>{const n=e._zod.bag.maximum??Number.POSITIVE_INFINITY;t.maximum<n&&(e._zod.bag.maximum=t.maximum)}),e._zod.check=n=>{const o=n.value;if(o.length<=t.maximum)return;const r=nr(o);n.issues.push({origin:r,code:"too_big",maximum:t.maximum,inclusive:!0,input:o,inst:e,continue:!t.abort})}}),Mr=Oo("$ZodCheckMinLength",(e,t)=>{var n;zr.init(e,t),(n=e._zod.def).when??(n.when=e=>{const t=e.value;return!No(t)&&void 0!==t.length}),e._zod.onattach.push(e=>{const n=e._zod.bag.minimum??Number.NEGATIVE_INFINITY;t.minimum>n&&(e._zod.bag.minimum=t.minimum)}),e._zod.check=n=>{const o=n.value;if(o.length>=t.minimum)return;const r=nr(o);n.issues.push({origin:r,code:"too_small",minimum:t.minimum,inclusive:!0,input:o,inst:e,continue:!t.abort})}}),Rr=Oo("$ZodCheckLengthEquals",(e,t)=>{var n;zr.init(e,t),(n=e._zod.def).when??(n.when=e=>{const t=e.value;return!No(t)&&void 0!==t.length}),e._zod.onattach.push(e=>{const n=e._zod.bag;n.minimum=t.length,n.maximum=t.length,n.length=t.length}),e._zod.check=n=>{const o=n.value,r=o.length;if(r===t.length)return;const i=nr(o),s=r>t.length;n.issues.push({origin:i,...s?{code:"too_big",maximum:t.length}:{code:"too_small",minimum:t.length},inclusive:!0,exact:!0,input:n.value,inst:e,continue:!t.abort})}}),Ur=Oo("$ZodCheckStringFormat",(e,t)=>{var n,o;zr.init(e,t),e._zod.onattach.push(e=>{const n=e._zod.bag;n.format=t.format,t.pattern&&(n.patterns??(n.patterns=new Set),n.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=n=>{t.pattern.lastIndex=0,t.pattern.test(n.value)||n.issues.push({origin:"string",code:"invalid_format",format:t.format,input:n.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(o=e._zod).check??(o.check=()=>{})}),Lr=Oo("$ZodCheckRegex",(e,t)=>{Ur.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,t.pattern.test(n.value)||n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Fr=Oo("$ZodCheckLowerCase",(e,t)=>{t.pattern??(t.pattern=Ir),Ur.init(e,t)}),Br=Oo("$ZodCheckUpperCase",(e,t)=>{t.pattern??(t.pattern=Dr),Ur.init(e,t)}),Wr=Oo("$ZodCheckIncludes",(e,t)=>{zr.init(e,t);const n=Yo(t.includes),o=new RegExp("number"==typeof t.position?`^.{${t.position}}${n}`:n);t.pattern=o,e._zod.onattach.push(e=>{const t=e._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(o)}),e._zod.check=n=>{n.value.includes(t.includes,t.position)||n.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:t.includes,input:n.value,inst:e,continue:!t.abort})}}),Vr=Oo("$ZodCheckStartsWith",(e,t)=>{zr.init(e,t);const n=new RegExp(`^${Yo(t.prefix)}.*`);t.pattern??(t.pattern=n),e._zod.onattach.push(e=>{const t=e._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(n)}),e._zod.check=n=>{n.value.startsWith(t.prefix)||n.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:t.prefix,input:n.value,inst:e,continue:!t.abort})}}),Jr=Oo("$ZodCheckEndsWith",(e,t)=>{zr.init(e,t);const n=new RegExp(`.*${Yo(t.suffix)}$`);t.pattern??(t.pattern=n),e._zod.onattach.push(e=>{const t=e._zod.bag;t.patterns??(t.patterns=new Set),t.patterns.add(n)}),e._zod.check=n=>{n.value.endsWith(t.suffix)||n.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:t.suffix,input:n.value,inst:e,continue:!t.abort})}}),qr=Oo("$ZodCheckOverwrite",(e,t)=>{zr.init(e,t),e._zod.check=e=>{e.value=t.tx(e.value)}});class Qr{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if("function"==typeof e)return e(this,{execution:"sync"}),void e(this,{execution:"async"});const t=e.split("\n").filter(e=>e),n=Math.min(...t.map(e=>e.length-e.trimStart().length)),o=t.map(e=>e.slice(n)).map(e=>" ".repeat(2*this.indent)+e);for(const e of o)this.content.push(e)}compile(){const e=Function,t=this?.args,n=[...(this?.content??[""]).map(e=>`  ${e}`)];return new e(...t,n.join("\n"))}}const Yr={major:4,minor:0,patch:15},Kr=Oo("$ZodType",(e,t)=>{var n;e??(e={}),e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Yr;const o=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&o.unshift(e);for(const t of o)for(const n of t._zod.onattach)n(e);if(0===o.length)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{const t=(e,t,n)=>{let o,r=Go(e);for(const i of t){if(i._zod.def.when){if(!i._zod.def.when(e))continue}else if(r)continue;const t=e.issues.length,s=i._zod.check(e);if(s instanceof Promise&&!1===n?.async)throw new Zo;if(o||s instanceof Promise)o=(o??Promise.resolve()).then(async()=>{await s;e.issues.length!==t&&(r||(r=Go(e,t)))});else{if(e.issues.length===t)continue;r||(r=Go(e,t))}}return o?o.then(()=>e):e};e._zod.run=(n,r)=>{const i=e._zod.parse(n,r);if(i instanceof Promise){if(!1===r.async)throw new Zo;return i.then(e=>t(e,o,r))}return t(i,o,r)}}e["~standard"]={validate:t=>{try{const n=ur(e,t);return n.success?{value:n.data}:{issues:n.error?.issues}}catch(n){return pr(e,t).then(e=>e.success?{value:e.data}:{issues:e.error?.issues})}},vendor:"zod",version:1}}),Hr=Oo("$ZodString",(e,t)=>{var n;Kr.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??(n=e._zod.bag,new RegExp(`^${n?`[\\s\\S]{${n?.minimum??0},${n?.maximum??""}}`:"[\\s\\S]*"}$`)),e._zod.parse=(n,o)=>{if(t.coerce)try{n.value=String(n.value)}catch(o){}return"string"==typeof n.value||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:e}),n}}),Gr=Oo("$ZodStringFormat",(e,t)=>{Ur.init(e,t),Hr.init(e,t)}),Xr=Oo("$ZodGUID",(e,t)=>{t.pattern??(t.pattern=vr),Gr.init(e,t)}),ei=Oo("$ZodUUID",(e,t)=>{if(t.version){const e={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(void 0===e)throw new Error(`Invalid UUID version: "${t.version}"`);t.pattern??(t.pattern=xr(e))}else t.pattern??(t.pattern=xr());Gr.init(e,t)}),ti=Oo("$ZodEmail",(e,t)=>{t.pattern??(t.pattern=$r),Gr.init(e,t)}),ni=Oo("$ZodURL",(e,t)=>{Gr.init(e,t),e._zod.check=n=>{try{const o=n.value.trim(),r=new URL(o);return t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(r.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:Ar.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(r.protocol.endsWith(":")?r.protocol.slice(0,-1):r.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),void(t.normalize?n.value=r.href:n.value=o)}catch(o){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:e,continue:!t.abort})}}}),oi=Oo("$ZodEmoji",(e,t)=>{t.pattern??(t.pattern=new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$","u")),Gr.init(e,t)}),ri=Oo("$ZodNanoID",(e,t)=>{t.pattern??(t.pattern=br),Gr.init(e,t)}),ii=Oo("$ZodCUID",(e,t)=>{t.pattern??(t.pattern=hr),Gr.init(e,t)}),si=Oo("$ZodCUID2",(e,t)=>{t.pattern??(t.pattern=fr),Gr.init(e,t)}),ai=Oo("$ZodULID",(e,t)=>{t.pattern??(t.pattern=mr),Gr.init(e,t)}),ci=Oo("$ZodXID",(e,t)=>{t.pattern??(t.pattern=yr),Gr.init(e,t)}),li=Oo("$ZodKSUID",(e,t)=>{t.pattern??(t.pattern=gr),Gr.init(e,t)}),ui=Oo("$ZodISODateTime",(e,t)=>{t.pattern??(t.pattern=function(e){const t=Tr({precision:e.precision}),n=["Z"];e.local&&n.push(""),e.offset&&n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const o=`${t}(?:${n.join("|")})`;return new RegExp(`^${Or}T(?:${o})$`)}(t)),Gr.init(e,t)}),di=Oo("$ZodISODate",(e,t)=>{t.pattern??(t.pattern=Zr),Gr.init(e,t)}),pi=Oo("$ZodISOTime",(e,t)=>{t.pattern??(t.pattern=new RegExp(`^${Tr(t)}$`)),Gr.init(e,t)}),hi=Oo("$ZodISODuration",(e,t)=>{t.pattern??(t.pattern=wr),Gr.init(e,t)}),fi=Oo("$ZodIPv4",(e,t)=>{t.pattern??(t.pattern=kr),Gr.init(e,t),e._zod.onattach.push(e=>{e._zod.bag.format="ipv4"})}),mi=Oo("$ZodIPv6",(e,t)=>{t.pattern??(t.pattern=Er),Gr.init(e,t),e._zod.onattach.push(e=>{e._zod.bag.format="ipv6"}),e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:e,continue:!t.abort})}}}),yi=Oo("$ZodCIDRv4",(e,t)=>{t.pattern??(t.pattern=Sr),Gr.init(e,t)}),gi=Oo("$ZodCIDRv6",(e,t)=>{t.pattern??(t.pattern=Cr),Gr.init(e,t),e._zod.check=n=>{const[o,r]=n.value.split("/");try{if(!r)throw new Error;const e=Number(r);if(`${e}`!==r)throw new Error;if(e<0||e>128)throw new Error;new URL(`http://[${o}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:e,continue:!t.abort})}}});function bi(e){if(""===e)return!0;if(e.length%4!=0)return!1;try{return atob(e),!0}catch{return!1}}const wi=Oo("$ZodBase64",(e,t)=>{t.pattern??(t.pattern=jr),Gr.init(e,t),e._zod.onattach.push(e=>{e._zod.bag.contentEncoding="base64"}),e._zod.check=n=>{bi(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:e,continue:!t.abort})}});const vi=Oo("$ZodBase64URL",(e,t)=>{t.pattern??(t.pattern=Pr),Gr.init(e,t),e._zod.onattach.push(e=>{e._zod.bag.contentEncoding="base64url"}),e._zod.check=n=>{(function(e){if(!Pr.test(e))return!1;const t=e.replace(/[-_]/g,e=>"-"===e?"+":"/");return bi(t.padEnd(4*Math.ceil(t.length/4),"="))})(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:e,continue:!t.abort})}}),xi=Oo("$ZodE164",(e,t)=>{t.pattern??(t.pattern=_r),Gr.init(e,t)});const $i=Oo("$ZodJWT",(e,t)=>{Gr.init(e,t),e._zod.check=n=>{(function(e,t=null){try{const n=e.split(".");if(3!==n.length)return!1;const[o]=n;if(!o)return!1;const r=JSON.parse(atob(o));return!("typ"in r&&"JWT"!==r?.typ||!r.alg||t&&(!("alg"in r)||r.alg!==t))}catch{return!1}})(n.value,t.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:e,continue:!t.abort})}}),ki=Oo("$ZodUnknown",(e,t)=>{Kr.init(e,t),e._zod.parse=e=>e}),Ei=Oo("$ZodNever",(e,t)=>{Kr.init(e,t),e._zod.parse=(t,n)=>(t.issues.push({expected:"never",code:"invalid_type",input:t.value,inst:e}),t)});function Si(e,t,n){e.issues.length&&t.issues.push(...Xo(n,e.issues)),t.value[n]=e.value}const Ci=Oo("$ZodArray",(e,t)=>{Kr.init(e,t),e._zod.parse=(n,o)=>{const r=n.value;if(!Array.isArray(r))return n.issues.push({expected:"array",code:"invalid_type",input:r,inst:e}),n;n.value=Array(r.length);const i=[];for(let e=0;e<r.length;e++){const s=r[e],a=t.element._zod.run({value:s,issues:[]},o);a instanceof Promise?i.push(a.then(t=>Si(t,n,e))):Si(a,n,e)}return i.length?Promise.all(i).then(()=>n):n}});function ji(e,t,n,o){e.issues.length&&t.issues.push(...Xo(n,e.issues)),void 0===e.value?n in o&&(t.value[n]=void 0):t.value[n]=e.value}const Pi=Oo("$ZodObject",(e,t)=>{Kr.init(e,t);const n=zo(()=>{const e=Object.keys(t.shape);for(const n of e)if(!(t.shape[n]instanceof Kr))throw new Error(`Invalid element at key "${n}": expected a Zod schema`);const n=(o=t.shape,Object.keys(o).filter(e=>"optional"===o[e]._zod.optin&&"optional"===o[e]._zod.optout));var o;return{shape:t.shape,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(n)}});Uo(e._zod,"propValues",()=>{const e=t.shape,n={};for(const t in e){const o=e[t]._zod;if(o.values){n[t]??(n[t]=new Set);for(const e of o.values)n[t].add(e)}}return n});let o;const r=Vo,i=!To.jitless,s=i&&Jo.value,a=t.catchall;let c;e._zod.parse=(l,u)=>{c??(c=n.value);const d=l.value;if(!r(d))return l.issues.push({expected:"object",code:"invalid_type",input:d,inst:e}),l;const p=[];if(i&&s&&!1===u?.async&&!0!==u.jitless)o||(o=(e=>{const t=new Qr(["shape","payload","ctx"]),o=n.value,r=e=>{const t=Bo(e);return`shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`};t.write("const input = payload.value;");const i=Object.create(null);let s=0;for(const e of o.keys)i[e]="key_"+s++;t.write("const newResult = {}");for(const e of o.keys){const n=i[e],o=Bo(e);t.write(`const ${n} = ${r(e)};`),t.write(`\n        if (${n}.issues.length) {\n          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({\n            ...iss,\n            path: iss.path ? [${o}, ...iss.path] : [${o}]\n          })));\n        }\n        \n        if (${n}.value === undefined) {\n          if (${o} in input) {\n            newResult[${o}] = undefined;\n          }\n        } else {\n          newResult[${o}] = ${n}.value;\n        }\n      `)}t.write("payload.value = newResult;"),t.write("return payload;");const a=t.compile();return(t,n)=>a(e,t,n)})(t.shape)),l=o(l,u);else{l.value={};const e=c.shape;for(const t of c.keys){const n=e[t]._zod.run({value:d[t],issues:[]},u);n instanceof Promise?p.push(n.then(e=>ji(e,l,t,d))):ji(n,l,t,d)}}if(!a)return p.length?Promise.all(p).then(()=>l):l;const h=[],f=c.keySet,m=a._zod,y=m.def.type;for(const e of Object.keys(d)){if(f.has(e))continue;if("never"===y){h.push(e);continue}const t=m.run({value:d[e],issues:[]},u);t instanceof Promise?p.push(t.then(t=>ji(t,l,e,d))):ji(t,l,e,d)}return h.length&&l.issues.push({code:"unrecognized_keys",keys:h,input:d,inst:e}),p.length?Promise.all(p).then(()=>l):l}});function Ai(e,t,n,o){for(const n of e)if(0===n.issues.length)return t.value=n.value,t;const r=e.filter(e=>!Go(e));return 1===r.length?(t.value=r[0].value,r[0]):(t.issues.push({code:"invalid_union",input:t.value,inst:n,errors:e.map(e=>e.issues.map(e=>tr(e,o,Io())))}),t)}const _i=Oo("$ZodUnion",(e,t)=>{Kr.init(e,t),Uo(e._zod,"optin",()=>t.options.some(e=>"optional"===e._zod.optin)?"optional":void 0),Uo(e._zod,"optout",()=>t.options.some(e=>"optional"===e._zod.optout)?"optional":void 0),Uo(e._zod,"values",()=>{if(t.options.every(e=>e._zod.values))return new Set(t.options.flatMap(e=>Array.from(e._zod.values)))}),Uo(e._zod,"pattern",()=>{if(t.options.every(e=>e._zod.pattern)){const e=t.options.map(e=>e._zod.pattern);return new RegExp(`^(${e.map(e=>Mo(e.source)).join("|")})$`)}});const n=1===t.options.length,o=t.options[0]._zod.run;e._zod.parse=(r,i)=>{if(n)return o(r,i);let s=!1;const a=[];for(const e of t.options){const t=e._zod.run({value:r.value,issues:[]},i);if(t instanceof Promise)a.push(t),s=!0;else{if(0===t.issues.length)return t;a.push(t)}}return s?Promise.all(a).then(t=>Ai(t,r,e,i)):Ai(a,r,e,i)}}),Oi=Oo("$ZodIntersection",(e,t)=>{Kr.init(e,t),e._zod.parse=(e,n)=>{const o=e.value,r=t.left._zod.run({value:o,issues:[]},n),i=t.right._zod.run({value:o,issues:[]},n);return r instanceof Promise||i instanceof Promise?Promise.all([r,i]).then(([t,n])=>Ti(e,t,n)):Ti(e,r,i)}});function Zi(e,t){if(e===t)return{valid:!0,data:e};if(e instanceof Date&&t instanceof Date&&+e===+t)return{valid:!0,data:e};if(qo(e)&&qo(t)){const n=Object.keys(t),o=Object.keys(e).filter(e=>-1!==n.indexOf(e)),r={...e,...t};for(const n of o){const o=Zi(e[n],t[n]);if(!o.valid)return{valid:!1,mergeErrorPath:[n,...o.mergeErrorPath]};r[n]=o.data}return{valid:!0,data:r}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let o=0;o<e.length;o++){const r=Zi(e[o],t[o]);if(!r.valid)return{valid:!1,mergeErrorPath:[o,...r.mergeErrorPath]};n.push(r.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Ti(e,t,n){if(t.issues.length&&e.issues.push(...t.issues),n.issues.length&&e.issues.push(...n.issues),Go(e))return e;const o=Zi(t.value,n.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return e.value=o.data,e}const Ii=Oo("$ZodEnum",(e,t)=>{Kr.init(e,t);const n=function(e){const t=Object.values(e).filter(e=>"number"==typeof e),n=Object.entries(e).filter(([e,n])=>-1===t.indexOf(+e)).map(([e,t])=>t);return n}(t.entries),o=new Set(n);e._zod.values=o,e._zod.pattern=new RegExp(`^(${n.filter(e=>Qo.has(typeof e)).map(e=>"string"==typeof e?Yo(e):e.toString()).join("|")})$`),e._zod.parse=(t,r)=>{const i=t.value;return o.has(i)||t.issues.push({code:"invalid_value",values:n,input:i,inst:e}),t}}),Di=Oo("$ZodTransform",(e,t)=>{Kr.init(e,t),e._zod.parse=(e,n)=>{const o=t.transform(e.value,e);if(n.async){return(o instanceof Promise?o:Promise.resolve(o)).then(t=>(e.value=t,e))}if(o instanceof Promise)throw new Zo;return e.value=o,e}});function zi(e,t){return e.issues.length&&void 0===t?{issues:[],value:void 0}:e}const Ni=Oo("$ZodOptional",(e,t)=>{Kr.init(e,t),e._zod.optin="optional",e._zod.optout="optional",Uo(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),Uo(e._zod,"pattern",()=>{const e=t.innerType._zod.pattern;return e?new RegExp(`^(${Mo(e.source)})?$`):void 0}),e._zod.parse=(e,n)=>{if("optional"===t.innerType._zod.optin){const o=t.innerType._zod.run(e,n);return o instanceof Promise?o.then(t=>zi(t,e.value)):zi(o,e.value)}return void 0===e.value?e:t.innerType._zod.run(e,n)}}),Mi=Oo("$ZodNullable",(e,t)=>{Kr.init(e,t),Uo(e._zod,"optin",()=>t.innerType._zod.optin),Uo(e._zod,"optout",()=>t.innerType._zod.optout),Uo(e._zod,"pattern",()=>{const e=t.innerType._zod.pattern;return e?new RegExp(`^(${Mo(e.source)}|null)$`):void 0}),Uo(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(e,n)=>null===e.value?e:t.innerType._zod.run(e,n)}),Ri=Oo("$ZodDefault",(e,t)=>{Kr.init(e,t),e._zod.optin="optional",Uo(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{if(void 0===e.value)return e.value=t.defaultValue,e;const o=t.innerType._zod.run(e,n);return o instanceof Promise?o.then(e=>Ui(e,t)):Ui(o,t)}});function Ui(e,t){return void 0===e.value&&(e.value=t.defaultValue),e}const Li=Oo("$ZodPrefault",(e,t)=>{Kr.init(e,t),e._zod.optin="optional",Uo(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(e,n)=>(void 0===e.value&&(e.value=t.defaultValue),t.innerType._zod.run(e,n))}),Fi=Oo("$ZodNonOptional",(e,t)=>{Kr.init(e,t),Uo(e._zod,"values",()=>{const e=t.innerType._zod.values;return e?new Set([...e].filter(e=>void 0!==e)):void 0}),e._zod.parse=(n,o)=>{const r=t.innerType._zod.run(n,o);return r instanceof Promise?r.then(t=>Bi(t,e)):Bi(r,e)}});function Bi(e,t){return e.issues.length||void 0!==e.value||e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:t}),e}const Wi=Oo("$ZodCatch",(e,t)=>{Kr.init(e,t),Uo(e._zod,"optin",()=>t.innerType._zod.optin),Uo(e._zod,"optout",()=>t.innerType._zod.optout),Uo(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(e,n)=>{const o=t.innerType._zod.run(e,n);return o instanceof Promise?o.then(o=>(e.value=o.value,o.issues.length&&(e.value=t.catchValue({...e,error:{issues:o.issues.map(e=>tr(e,n,Io()))},input:e.value}),e.issues=[]),e)):(e.value=o.value,o.issues.length&&(e.value=t.catchValue({...e,error:{issues:o.issues.map(e=>tr(e,n,Io()))},input:e.value}),e.issues=[]),e)}}),Vi=Oo("$ZodPipe",(e,t)=>{Kr.init(e,t),Uo(e._zod,"values",()=>t.in._zod.values),Uo(e._zod,"optin",()=>t.in._zod.optin),Uo(e._zod,"optout",()=>t.out._zod.optout),Uo(e._zod,"propValues",()=>t.in._zod.propValues),e._zod.parse=(e,n)=>{const o=t.in._zod.run(e,n);return o instanceof Promise?o.then(e=>Ji(e,t,n)):Ji(o,t,n)}});function Ji(e,t,n){return e.issues.length?e:t.out._zod.run({value:e.value,issues:e.issues},n)}const qi=Oo("$ZodReadonly",(e,t)=>{Kr.init(e,t),Uo(e._zod,"propValues",()=>t.innerType._zod.propValues),Uo(e._zod,"values",()=>t.innerType._zod.values),Uo(e._zod,"optin",()=>t.innerType._zod.optin),Uo(e._zod,"optout",()=>t.innerType._zod.optout),e._zod.parse=(e,n)=>{const o=t.innerType._zod.run(e,n);return o instanceof Promise?o.then(Qi):Qi(o)}});function Qi(e){return e.value=Object.freeze(e.value),e}const Yi=Oo("$ZodCustom",(e,t)=>{zr.init(e,t),Kr.init(e,t),e._zod.parse=(e,t)=>e,e._zod.check=n=>{const o=n.value,r=t.fn(o);if(r instanceof Promise)return r.then(t=>Ki(t,n,o,e));Ki(r,n,o,e)}});function Ki(e,t,n,o){if(!e){const e={code:"custom",input:n,inst:o,path:[...o._zod.def.path??[]],continue:!o._zod.def.abort};o._zod.def.params&&(e.params=o._zod.def.params),t.issues.push(or(e))}}class Hi{constructor(){this._map=new Map,this._idmap=new Map}add(e,...t){const n=t[0];if(this._map.set(e,n),n&&"object"==typeof n&&"id"in n){if(this._idmap.has(n.id))throw new Error(`ID ${n.id} already exists in the registry`);this._idmap.set(n.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){const t=this._map.get(e);return t&&"object"==typeof t&&"id"in t&&this._idmap.delete(t.id),this._map.delete(e),this}get(e){const t=e._zod.parent;if(t){const n={...this.get(t)??{}};delete n.id;const o={...n,...this._map.get(e)};return Object.keys(o).length?o:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function Gi(){return new Hi}const Xi=Gi();function es(e,t){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...Ho(t)})}function ts(e,t){return new Nr({check:"max_length",...Ho(t),maximum:e})}function ns(e,t){return new Mr({check:"min_length",...Ho(t),minimum:e})}function os(e,t){return new Rr({check:"length_equals",...Ho(t),length:e})}function rs(e){return new qr({check:"overwrite",tx:e})}function is(e){const t=function(e,t){const n=new zr({check:"custom",...Ho(t)});return n._zod.check=e,n}(n=>(n.addIssue=e=>{if("string"==typeof e)n.issues.push(or(e,n.value,t._zod.def));else{const o=e;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=t),o.continue??(o.continue=!t._zod.def.abort),n.issues.push(or(o))}},e(n.value,n)));return t}const ss=Oo("ZodISODateTime",(e,t)=>{ui.init(e,t),ks.init(e,t)});function as(e){return function(e,t){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Ho(t)})}(ss,e)}const cs=Oo("ZodISODate",(e,t)=>{di.init(e,t),ks.init(e,t)});function ls(e){return function(e,t){return new e({type:"string",format:"date",check:"string_format",...Ho(t)})}(cs,e)}const us=Oo("ZodISOTime",(e,t)=>{pi.init(e,t),ks.init(e,t)});function ds(e){return function(e,t){return new e({type:"string",format:"time",check:"string_format",precision:null,...Ho(t)})}(us,e)}const ps=Oo("ZodISODuration",(e,t)=>{hi.init(e,t),ks.init(e,t)});function hs(e){return function(e,t){return new e({type:"string",format:"duration",check:"string_format",...Ho(t)})}(ps,e)}const fs=Oo("ZodError",(e,t)=>{ir.init(e,t),e.name="ZodError",Object.defineProperties(e,{format:{value:t=>function(e,t){const n=t||function(e){return e.message},o={_errors:[]},r=e=>{for(const t of e.issues)if("invalid_union"===t.code&&t.errors.length)t.errors.map(e=>r({issues:e}));else if("invalid_key"===t.code)r({issues:t.issues});else if("invalid_element"===t.code)r({issues:t.issues});else if(0===t.path.length)o._errors.push(n(t));else{let e=o,r=0;for(;r<t.path.length;){const o=t.path[r];r===t.path.length-1?(e[o]=e[o]||{_errors:[]},e[o]._errors.push(n(t))):e[o]=e[o]||{_errors:[]},e=e[o],r++}}};return r(e),o}(e,t)},flatten:{value:t=>function(e,t=e=>e.message){const n={},o=[];for(const r of e.issues)r.path.length>0?(n[r.path[0]]=n[r.path[0]]||[],n[r.path[0]].push(t(r))):o.push(t(r));return{formErrors:o,fieldErrors:n}}(e,t)},addIssue:{value:t=>{e.issues.push(t),e.message=JSON.stringify(e.issues,Do,2)}},addIssues:{value:t=>{e.issues.push(...t),e.message=JSON.stringify(e.issues,Do,2)}},isEmpty:{get:()=>0===e.issues.length}})},{Parent:Error}),ms=ar(fs),ys=cr(fs),gs=lr(fs),bs=dr(fs),ws=Oo("ZodType",(e,t)=>(Kr.init(e,t),e.def=t,Object.defineProperty(e,"_def",{value:t}),e.check=(...n)=>e.clone({...t,checks:[...t.checks??[],...n.map(e=>"function"==typeof e?{_zod:{check:e,def:{check:"custom"},onattach:[]}}:e)]}),e.clone=(t,n)=>Ko(e,t,n),e.brand=()=>e,e.register=(t,n)=>(t.add(e,n),e),e.parse=(t,n)=>ms(e,t,n,{callee:e.parse}),e.safeParse=(t,n)=>gs(e,t,n),e.parseAsync=async(t,n)=>ys(e,t,n,{callee:e.parseAsync}),e.safeParseAsync=async(t,n)=>bs(e,t,n),e.spa=e.safeParseAsync,e.refine=(t,n)=>e.check(function(e,t={}){return function(e,t,n){return new e({type:"custom",check:"custom",fn:t,...Ho(n)})}(da,e,t)}(t,n)),e.superRefine=t=>e.check(is(t)),e.overwrite=t=>e.check(rs(t)),e.optional=()=>ta(e),e.nullable=()=>oa(e),e.nullish=()=>ta(oa(e)),e.nonoptional=t=>function(e,t){return new sa({type:"nonoptional",innerType:e,...Ho(t)})}(e,t),e.array=()=>{return function(e,t,n){return new e({type:"array",element:t,...Ho(n)})}(qs,e,t);var t},e.or=t=>{return new Ys({type:"union",options:[e,t],...Ho(n)});var n},e.and=t=>new Ks({type:"intersection",left:e,right:t}),e.transform=t=>la(e,new Xs({type:"transform",transform:t})),e.default=t=>{return n=t,new ra({type:"default",innerType:e,get defaultValue(){return"function"==typeof n?n():n}});var n},e.prefault=t=>{return n=t,new ia({type:"prefault",innerType:e,get defaultValue(){return"function"==typeof n?n():n}});var n},e.catch=t=>{return new aa({type:"catch",innerType:e,catchValue:"function"==typeof(n=t)?n:()=>n});var n},e.pipe=t=>la(e,t),e.readonly=()=>new ua({type:"readonly",innerType:e}),e.describe=t=>{const n=e.clone();return Xi.add(n,{description:t}),n},Object.defineProperty(e,"description",{get:()=>Xi.get(e)?.description,configurable:!0}),e.meta=(...t)=>{if(0===t.length)return Xi.get(e);const n=e.clone();return Xi.add(n,t[0]),n},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e)),vs=Oo("_ZodString",(e,t)=>{Hr.init(e,t),ws.init(e,t);const n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,e.regex=(...t)=>e.check(function(e,t){return new Lr({check:"string_format",format:"regex",...Ho(t),pattern:e})}(...t)),e.includes=(...t)=>e.check(function(e,t){return new Wr({check:"string_format",format:"includes",...Ho(t),includes:e})}(...t)),e.startsWith=(...t)=>e.check(function(e,t){return new Vr({check:"string_format",format:"starts_with",...Ho(t),prefix:e})}(...t)),e.endsWith=(...t)=>e.check(function(e,t){return new Jr({check:"string_format",format:"ends_with",...Ho(t),suffix:e})}(...t)),e.min=(...t)=>e.check(ns(...t)),e.max=(...t)=>e.check(ts(...t)),e.length=(...t)=>e.check(os(...t)),e.nonempty=(...t)=>e.check(ns(1,...t)),e.lowercase=t=>e.check(function(e){return new Fr({check:"string_format",format:"lowercase",...Ho(e)})}(t)),e.uppercase=t=>e.check(function(e){return new Br({check:"string_format",format:"uppercase",...Ho(e)})}(t)),e.trim=()=>e.check(rs(e=>e.trim())),e.normalize=(...t)=>e.check(function(e){return rs(t=>t.normalize(e))}(...t)),e.toLowerCase=()=>e.check(rs(e=>e.toLowerCase())),e.toUpperCase=()=>e.check(rs(e=>e.toUpperCase()))}),xs=Oo("ZodString",(e,t)=>{Hr.init(e,t),vs.init(e,t),e.email=t=>e.check(function(e,t){return new e({type:"string",format:"email",check:"string_format",abort:!1,...Ho(t)})}(Es,t)),e.url=t=>e.check(function(e,t){return new e({type:"string",format:"url",check:"string_format",abort:!1,...Ho(t)})}(js,t)),e.jwt=t=>e.check(function(e,t){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...Ho(t)})}(Fs,t)),e.emoji=t=>e.check(function(e,t){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...Ho(t)})}(Ps,t)),e.guid=t=>e.check(es(Ss,t)),e.uuid=t=>e.check(function(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...Ho(t)})}(Cs,t)),e.uuidv4=t=>e.check(function(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Ho(t)})}(Cs,t)),e.uuidv6=t=>e.check(function(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Ho(t)})}(Cs,t)),e.uuidv7=t=>e.check(function(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Ho(t)})}(Cs,t)),e.nanoid=t=>e.check(function(e,t){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...Ho(t)})}(As,t)),e.guid=t=>e.check(es(Ss,t)),e.cuid=t=>e.check(function(e,t){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...Ho(t)})}(_s,t)),e.cuid2=t=>e.check(function(e,t){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...Ho(t)})}(Os,t)),e.ulid=t=>e.check(function(e,t){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...Ho(t)})}(Zs,t)),e.base64=t=>e.check(function(e,t){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...Ho(t)})}(Rs,t)),e.base64url=t=>e.check(function(e,t){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...Ho(t)})}(Us,t)),e.xid=t=>e.check(function(e,t){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...Ho(t)})}(Ts,t)),e.ksuid=t=>e.check(function(e,t){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...Ho(t)})}(Is,t)),e.ipv4=t=>e.check(function(e,t){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...Ho(t)})}(Ds,t)),e.ipv6=t=>e.check(function(e,t){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...Ho(t)})}(zs,t)),e.cidrv4=t=>e.check(function(e,t){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Ho(t)})}(Ns,t)),e.cidrv6=t=>e.check(function(e,t){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Ho(t)})}(Ms,t)),e.e164=t=>e.check(function(e,t){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...Ho(t)})}(Ls,t)),e.datetime=t=>e.check(as(t)),e.date=t=>e.check(ls(t)),e.time=t=>e.check(ds(t)),e.duration=t=>e.check(hs(t))});function $s(e){return function(e,t){return new e({type:"string",...Ho(t)})}(xs,e)}const ks=Oo("ZodStringFormat",(e,t)=>{Gr.init(e,t),vs.init(e,t)}),Es=Oo("ZodEmail",(e,t)=>{ti.init(e,t),ks.init(e,t)}),Ss=Oo("ZodGUID",(e,t)=>{Xr.init(e,t),ks.init(e,t)}),Cs=Oo("ZodUUID",(e,t)=>{ei.init(e,t),ks.init(e,t)}),js=Oo("ZodURL",(e,t)=>{ni.init(e,t),ks.init(e,t)}),Ps=Oo("ZodEmoji",(e,t)=>{oi.init(e,t),ks.init(e,t)}),As=Oo("ZodNanoID",(e,t)=>{ri.init(e,t),ks.init(e,t)}),_s=Oo("ZodCUID",(e,t)=>{ii.init(e,t),ks.init(e,t)}),Os=Oo("ZodCUID2",(e,t)=>{si.init(e,t),ks.init(e,t)}),Zs=Oo("ZodULID",(e,t)=>{ai.init(e,t),ks.init(e,t)}),Ts=Oo("ZodXID",(e,t)=>{ci.init(e,t),ks.init(e,t)}),Is=Oo("ZodKSUID",(e,t)=>{li.init(e,t),ks.init(e,t)}),Ds=Oo("ZodIPv4",(e,t)=>{fi.init(e,t),ks.init(e,t)}),zs=Oo("ZodIPv6",(e,t)=>{mi.init(e,t),ks.init(e,t)}),Ns=Oo("ZodCIDRv4",(e,t)=>{yi.init(e,t),ks.init(e,t)}),Ms=Oo("ZodCIDRv6",(e,t)=>{gi.init(e,t),ks.init(e,t)}),Rs=Oo("ZodBase64",(e,t)=>{wi.init(e,t),ks.init(e,t)}),Us=Oo("ZodBase64URL",(e,t)=>{vi.init(e,t),ks.init(e,t)}),Ls=Oo("ZodE164",(e,t)=>{xi.init(e,t),ks.init(e,t)}),Fs=Oo("ZodJWT",(e,t)=>{$i.init(e,t),ks.init(e,t)}),Bs=Oo("ZodUnknown",(e,t)=>{ki.init(e,t),ws.init(e,t)});function Ws(){return new Bs({type:"unknown"})}const Vs=Oo("ZodNever",(e,t)=>{Ei.init(e,t),ws.init(e,t)});function Js(e){return function(e,t){return new e({type:"never",...Ho(t)})}(Vs,e)}const qs=Oo("ZodArray",(e,t)=>{Ci.init(e,t),ws.init(e,t),e.element=t.element,e.min=(t,n)=>e.check(ns(t,n)),e.nonempty=t=>e.check(ns(1,t)),e.max=(t,n)=>e.check(ts(t,n)),e.length=(t,n)=>e.check(os(t,n)),e.unwrap=()=>e.element});const Qs=Oo("ZodObject",(e,t)=>{Pi.init(e,t),ws.init(e,t),Uo(e,"shape",()=>t.shape),e.keyof=()=>Gs(Object.keys(e._zod.def.shape)),e.catchall=t=>e.clone({...e._zod.def,catchall:t}),e.passthrough=()=>e.clone({...e._zod.def,catchall:Ws()}),e.loose=()=>e.clone({...e._zod.def,catchall:Ws()}),e.strict=()=>e.clone({...e._zod.def,catchall:Js()}),e.strip=()=>e.clone({...e._zod.def,catchall:void 0}),e.extend=t=>function(e,t){if(!qo(t))throw new Error("Invalid input to extend: expected a plain object");const n=Fo(e._zod.def,{get shape(){const n={...e._zod.def.shape,...t};return Lo(this,"shape",n),n},checks:[]});return Ko(e,n)}(e,t),e.merge=t=>function(e,t){const n=Fo(e._zod.def,{get shape(){const n={...e._zod.def.shape,...t._zod.def.shape};return Lo(this,"shape",n),n},get catchall(){return t._zod.def.catchall},checks:[]});return Ko(e,n)}(e,t),e.pick=t=>function(e,t){const n=e._zod.def;return Ko(e,Fo(e._zod.def,{get shape(){const e={};for(const o in t){if(!(o in n.shape))throw new Error(`Unrecognized key: "${o}"`);t[o]&&(e[o]=n.shape[o])}return Lo(this,"shape",e),e},checks:[]}))}(e,t),e.omit=t=>function(e,t){const n=e._zod.def,o=Fo(e._zod.def,{get shape(){const o={...e._zod.def.shape};for(const e in t){if(!(e in n.shape))throw new Error(`Unrecognized key: "${e}"`);t[e]&&delete o[e]}return Lo(this,"shape",o),o},checks:[]});return Ko(e,o)}(e,t),e.partial=(...t)=>function(e,t,n){const o=Fo(t._zod.def,{get shape(){const o=t._zod.def.shape,r={...o};if(n)for(const t in n){if(!(t in o))throw new Error(`Unrecognized key: "${t}"`);n[t]&&(r[t]=e?new e({type:"optional",innerType:o[t]}):o[t])}else for(const t in o)r[t]=e?new e({type:"optional",innerType:o[t]}):o[t];return Lo(this,"shape",r),r},checks:[]});return Ko(t,o)}(ea,e,t[0]),e.required=(...t)=>function(e,t,n){const o=Fo(t._zod.def,{get shape(){const o=t._zod.def.shape,r={...o};if(n)for(const t in n){if(!(t in r))throw new Error(`Unrecognized key: "${t}"`);n[t]&&(r[t]=new e({type:"nonoptional",innerType:o[t]}))}else for(const t in o)r[t]=new e({type:"nonoptional",innerType:o[t]});return Lo(this,"shape",r),r},checks:[]});return Ko(t,o)}(sa,e,t[0])});const Ys=Oo("ZodUnion",(e,t)=>{_i.init(e,t),ws.init(e,t),e.options=t.options});const Ks=Oo("ZodIntersection",(e,t)=>{Oi.init(e,t),ws.init(e,t)});const Hs=Oo("ZodEnum",(e,t)=>{Ii.init(e,t),ws.init(e,t),e.enum=t.entries,e.options=Object.values(t.entries);const n=new Set(Object.keys(t.entries));e.extract=(e,o)=>{const r={};for(const o of e){if(!n.has(o))throw new Error(`Key ${o} not found in enum`);r[o]=t.entries[o]}return new Hs({...t,checks:[],...Ho(o),entries:r})},e.exclude=(e,o)=>{const r={...t.entries};for(const t of e){if(!n.has(t))throw new Error(`Key ${t} not found in enum`);delete r[t]}return new Hs({...t,checks:[],...Ho(o),entries:r})}});function Gs(e,t){const n=Array.isArray(e)?Object.fromEntries(e.map(e=>[e,e])):e;return new Hs({type:"enum",entries:n,...Ho(t)})}const Xs=Oo("ZodTransform",(e,t)=>{Di.init(e,t),ws.init(e,t),e._zod.parse=(n,o)=>{n.addIssue=o=>{if("string"==typeof o)n.issues.push(or(o,n.value,t));else{const t=o;t.fatal&&(t.continue=!1),t.code??(t.code="custom"),t.input??(t.input=n.value),t.inst??(t.inst=e),n.issues.push(or(t))}};const r=t.transform(n.value,n);return r instanceof Promise?r.then(e=>(n.value=e,n)):(n.value=r,n)}});const ea=Oo("ZodOptional",(e,t)=>{Ni.init(e,t),ws.init(e,t),e.unwrap=()=>e._zod.def.innerType});function ta(e){return new ea({type:"optional",innerType:e})}const na=Oo("ZodNullable",(e,t)=>{Mi.init(e,t),ws.init(e,t),e.unwrap=()=>e._zod.def.innerType});function oa(e){return new na({type:"nullable",innerType:e})}const ra=Oo("ZodDefault",(e,t)=>{Ri.init(e,t),ws.init(e,t),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});const ia=Oo("ZodPrefault",(e,t)=>{Li.init(e,t),ws.init(e,t),e.unwrap=()=>e._zod.def.innerType});const sa=Oo("ZodNonOptional",(e,t)=>{Fi.init(e,t),ws.init(e,t),e.unwrap=()=>e._zod.def.innerType});const aa=Oo("ZodCatch",(e,t)=>{Wi.init(e,t),ws.init(e,t),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});const ca=Oo("ZodPipe",(e,t)=>{Vi.init(e,t),ws.init(e,t),e.in=t.in,e.out=t.out});function la(e,t){return new ca({type:"pipe",in:e,out:t})}const ua=Oo("ZodReadonly",(e,t)=>{qi.init(e,t),ws.init(e,t),e.unwrap=()=>e._zod.def.innerType});const da=Oo("ZodCustom",(e,t)=>{Yi.init(e,t),ws.init(e,t)});const pa=e=>{const t=new Date(e);return t instanceof Date&&!isNaN(t.getTime())},ha=function(e,t){const n={type:"object",get shape(){var t;return Lo(this,"shape",e?(t=e,Object.create(Object.getPrototypeOf(t),Object.getOwnPropertyDescriptors(t))):{}),this.shape},...Ho(t)};return new Qs(n)}({firstName:$s().min(2,be("First name must be at least 2 characters")).max(50,be("First name must be at most 50 characters")).regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/,be("First name can only contain letters")),lastName:$s().min(2,be("Last name must be at least 2 characters")).max(50,be("Last name must be at most 50 characters")).regex(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/,be("Last name can only contain letters")),dateOfBirth:$s().refine(pa,be("Please enter a valid date of birth")).refine(e=>{const t=new Date(e);return(new Date).getFullYear()-t.getFullYear()>=18},be("Must be at least 18 years old")),dateOfEmployment:$s().refine(pa,be("Please enter a valid employment date")).refine(e=>new Date(e)<=new Date,be("Employment date cannot be in the future")),phone:$s().regex(/^05[0-9]{9}$/,be("Please enter a valid phone number (e.g., 05325999999)")),email:$s().email(be("Please enter a valid email address")).regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,be("Please enter a valid email format")),department:$s().min(1,be("Please select a department")),position:Gs(["Junior","Medior","Senior"]).refine(e=>void 0!==e,be("Please select a valid position"))}),fa=i`
  .employee-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .page-header {
    margin-bottom: 30px;
    text-align: center;
  }

  .page-subtitle {
    font-size: 1.2rem;
    color: #666;
    margin: 0;
  }

  .form-container {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-bottom: 30px;
  }

  .form-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
  }

  .loading {
    text-align: center;
    padding: 50px;
    font-size: 1.1rem;
    color: #666;
  }

  @media (max-width: 768px) {
    .form-grid {
      grid-template-columns: 1fr;
    }

    .form-actions {
      flex-direction: column;
      align-items: center;
    }

    .employee-form {
      padding: 10px;
    }

    .form-container {
      padding: 20px;
    }
  }
`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;class ma extends se{static styles=fa;static properties={mode:{type:String},formData:{type:Object},errors:{type:Object},isSubmitting:{type:Boolean},popupConfig:{type:Object},isLoading:{type:Boolean},pageTitle:{type:String},submitButtonText:{type:String},submitButtonLoadingText:{type:String}};constructor(){super(),this.mode=it,this.formData=Xe,this.errors={},this.isSubmitting=!1,this.popupConfig={open:!1,type:"info",title:"",message:"",autoClose:0},this.isLoading=!1,this.pageTitle="",this.submitButtonText=be("Save"),this.submitButtonLoadingText=be("Saving...")}departments=et;positions=tt;connectedCallback(){super.connectedCallback(),this._updateTexts()}updated(e){super.updated(e),e.has("mode")&&this._updateTexts()}_updateTexts(){this.mode===it?(this.pageTitle=be("Add New Employee"),this.submitButtonText=be("Save"),this.submitButtonLoadingText=be("Adding...")):this.mode===st&&(this.pageTitle=be("Edit Employee"),this.submitButtonText=be("Save"),this.submitButtonLoadingText=be("Saving..."))}render(){return this.isLoading?L`
        <div class="employee-form">
          <div class="loading">${be("Loading employee information...")}</div>
        </div>
      `:L`
      <div class="employee-form">
        ${this.mode===st?L`
              <div class="page-header">
                <p class="page-subtitle">
                  ${be(me`Editing employee ${this.formData.firstName} ${this.formData.lastName}`)}
                </p>
              </div>
            `:""}

        <div class="form-container">
          <form @submit=${this.handleSubmit}>
            <div class="form-grid">
              <input-element
                label=${be("First Name")}
                name="firstName"
                .value=${this.formData.firstName}
                .error=${this.errors.firstName||""}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${be("Date of Birth")}
                name="dateOfBirth"
                type="date"
                .value=${this.formData.dateOfBirth}
                .error=${this.errors.dateOfBirth||""}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${be("Department")}
                name="department"
                type="select"
                .value=${this.formData.department}
                .options=${this.departments}
                .error=${this.errors.department||""}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${be("Last Name")}
                name="lastName"
                .value=${this.formData.lastName}
                .error=${this.errors.lastName||""}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${be("Phone")}
                name="phone"
                .value=${this.formData.phone}
                .error=${this.errors.phone||""}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${be("Position")}
                name="position"
                type="select"
                .value=${this.formData.position}
                .options=${this.positions}
                .error=${this.errors.position||""}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${be("Date of Employment")}
                name="dateOfEmployment"
                type="date"
                .value=${this.formData.dateOfEmployment}
                .error=${this.errors.dateOfEmployment||""}
                @value-changed=${this.handleInputChange}
              ></input-element>

              <input-element
                label=${be("Email")}
                name="email"
                type="email"
                .value=${this.formData.email}
                .error=${this.errors.email||""}
                @value-changed=${this.handleInputChange}
              ></input-element>
            </div>

            <div class="form-actions">
              <button-element
                variant="primary"
                size="medium"
                label=${this.isSubmitting?this.submitButtonLoadingText:this.submitButtonText}
                ?disabled=${this.isSubmitting}
                @click=${this.handleSubmit}
              >
                ${this.isSubmitting?this.submitButtonLoadingText:this.submitButtonText}
              </button-element>
              <button-element
                variant="secondary"
                size="medium"
                label=${be("Cancel")}
                @click=${this.handleCancel}
              >
                ${be("Cancel")}
              </button-element>
            </div>
          </form>
        </div>
      </div>

      <popup-element
        .open=${this.popupConfig.open}
        .type=${this.popupConfig.type}
        .popupTitle=${this.popupConfig.title}
        .message=${this.popupConfig.message}
        .autoClose=${this.popupConfig.autoClose}
        .showConfirmButtons=${"warning"===this.popupConfig.type}
        .confirmText=${"warning"===this.popupConfig.type?be("Exit"):be("Confirm")}
        .cancelText=${"warning"===this.popupConfig.type?be("Stay"):be("Cancel")}
        @close=${this.handlePopupClose}
        @confirm=${this.handleCancelConfirm}
      ></popup-element>
    `}handleInputChange(e){const{name:t,value:n}=e.detail;this.formData={...this.formData,[t]:n},this.errors[t]&&(this.errors={...this.errors,[t]:""})}async handleSubmit(e){e.preventDefault(),this.isSubmitting=!0;const t=(n=this.formData,ha.safeParse(n));var n;if(!t.success)return this.errors={},t.error.issues.forEach(e=>{const t=e.path[0];this.errors[t]=e.message}),this.showPopup("error",be("Form Error"),be("Form has errors. Please check all fields.")),void(this.isSubmitting=!1);const o=new CustomEvent(pt,{detail:{formData:this.formData,mode:this.mode}});this.dispatchEvent(o)}showPopup(e,t,n,o=3e3){this.popupConfig={open:!0,type:e,title:t,message:n,autoClose:o}}handlePopupClose(){this.popupConfig={...this.popupConfig,open:!1}}handleCancel(){const e=this.mode===it?be("Form data not saved. Are you sure you want to exit?"):be("Changes not saved. Are you sure you want to exit?");this.showPopup("warning",be("Cancel"),e,0)}handleCancelConfirm(){const e=new CustomEvent(ht,{detail:{mode:this.mode}});this.dispatchEvent(e)}setFormData(e){this.formData={...e}}setErrors(e){this.errors={...e}}setSubmitting(e){this.isSubmitting=e}setLoading(e){this.isLoading=e}resetForm(){this.formData=Xe,this.errors={}}}window.customElements.define("employee-form",ma);const ya=i`
  :host {
  }

  .employee-edit-page {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    min-height: 100vh;
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    .employee-edit-page {
      padding: 10px 0;
    }
  }
`;class ga{static formatDateForInput(e){const t=e.split("/");return 3===t.length?`${t[2]}-${t[1].padStart(2,"0")}-${t[0].padStart(2,"0")}`:e}static formatDateForDisplay(e){return new Date(e).toLocaleDateString("tr-TR")}}
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */window.customElements.define("employee-edit-page",class extends se{static styles=[Ye,ya];static properties={employeeId:{type:String},popupConfig:{type:Object}};constructor(){super(),this.employeeId="",this.popupConfig={open:!1,type:"info",title:"",message:"",autoClose:0}}connectedCallback(){super.connectedCallback(),window.scrollTo(0,0),this.loadEmployeeData(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),ko.dispatch(go()),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=()=>{this.requestUpdate()};async loadEmployeeData(){if(this.employeeId)try{const e=await ko.dispatch(po(parseInt(this.employeeId)));if(po.fulfilled.match(e)){const t=e.payload,n={firstName:t.firstName,lastName:t.lastName,dateOfBirth:ga.formatDateForInput(t.birthDate),dateOfEmployment:ga.formatDateForInput(t.employmentDate),phone:t.phone,email:t.email,department:t.department,position:t.position},o=this.shadowRoot.querySelector("employee-form");o&&o.setFormData(n)}}catch(e){console.error("Error loading employee data:",e),this.showPopup("error",be("Error"),be("An error occurred while loading employee information."))}}render(){return L`
      <div class="employee-edit-page">
        <employee-form
          mode=${st}
          @form-submit=${this.handleFormSubmit}
          @form-cancel=${this.handleFormCancel}
        ></employee-form>
      </div>

      <popup-element
        .open=${this.popupConfig.open}
        .type=${this.popupConfig.type}
        .popupTitle=${this.popupConfig.title}
        .message=${this.popupConfig.message}
        .autoClose=${this.popupConfig.autoClose}
        .showConfirmButtons=${"warning"===this.popupConfig.type}
        .confirmText=${"warning"===this.popupConfig.type?be("Exit"):be("Confirm")}
        .cancelText=${"warning"===this.popupConfig.type?be("Stay"):be("Cancel")}
        @close=${this.handlePopupClose}
        @confirm=${this.handleCancelConfirm}
      ></popup-element>
    `}async handleFormSubmit(e){const{formData:t}=e.detail;try{const e={id:parseInt(this.employeeId),firstName:t.firstName,lastName:t.lastName,birthDate:this.formatDateForDisplay(t.dateOfBirth),employmentDate:this.formatDateForDisplay(t.dateOfEmployment),phone:t.phone,email:t.email,department:t.department,position:t.position};await ko.dispatch(wo(e)),this.showPopup("success",be("Success"),be("Employee information updated successfully!"),3e3),setTimeout(()=>{window.location.href=nt},3e3)}catch(e){this.showPopup("error",be("Error"),be("An error occurred while updating employee information."))}}handleFormCancel(){this.showPopup("warning",be("Cancel"),be("Changes not saved. Are you sure you want to exit?"),0)}showPopup(e,t,n,o=3e3){this.popupConfig={open:!0,type:e,title:t,message:n,autoClose:o}}handlePopupClose(){this.popupConfig={...this.popupConfig,open:!1}}handleCancelConfirm(){window.location.href=nt}});const ba=i`
  :host {
  }

  .employee-add-page {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    min-height: 100vh;
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    .employee-add-page {
      padding: 10px 0;
    }
  }
`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;window.customElements.define("employee-add-page",class extends se{static styles=ba;static properties={popupConfig:{type:Object}};constructor(){super(),this.popupConfig={open:!1,type:"info",title:"",message:"",autoClose:0}}connectedCallback(){super.connectedCallback(),window.scrollTo(0,0),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=()=>{this.requestUpdate()};render(){return L`
      <div class="employee-add-page">
        <employee-form
          mode=${it}
          @form-submit=${this.handleFormSubmit}
          @form-cancel=${this.handleFormCancel}
        ></employee-form>
      </div>

      <popup-element
        .open=${this.popupConfig.open}
        .type=${this.popupConfig.type}
        .popupTitle=${this.popupConfig.title}
        .message=${this.popupConfig.message}
        .autoClose=${this.popupConfig.autoClose}
        .showConfirmButtons=${"warning"===this.popupConfig.type}
        .confirmText=${"warning"===this.popupConfig.type?be("Exit"):be("Confirm")}
        .cancelText=${"warning"===this.popupConfig.type?be("Stay"):be("Cancel")}
        @close=${this.handlePopupClose}
        @confirm=${this.handleCancelConfirm}
      ></popup-element>
    `}async handleFormSubmit(e){const{formData:t}=e.detail;try{await new Promise(e=>setTimeout(e,1e3));const e={id:Date.now(),firstName:t.firstName,lastName:t.lastName,birthDate:t.dateOfBirth,employmentDate:t.dateOfEmployment,phone:t.phone,email:t.email,department:t.department,position:t.position};ko.dispatch(bo(e)),this.showPopup("success",be("Success"),be("New employee added successfully! Redirecting to main page..."),2e3),setTimeout(()=>{window.location.href=nt},2e3)}catch(e){this.showPopup("error",be("Error"),be("An error occurred while adding employee."))}}handleFormCancel(){this.showPopup("warning",be("Cancel"),be("Form data not saved. Are you sure you want to exit?"),0)}showPopup(e,t,n,o=3e3){this.popupConfig={open:!0,type:e,title:t,message:n,autoClose:o}}handlePopupClose(){this.popupConfig={...this.popupConfig,open:!1}}handleCancelConfirm(){window.location.href=nt}});const wa=i`
  :host {
    display: block;
  }

  .main-page {
    display: flex;
    flex-direction: column;
    background-color: #f8f8f8;
    padding: 40px;

    @media only screen and (max-width: 1200px) {
      padding: 16px;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: 600;
    color: var(--primary-color, '#ff6200');
    margin: 0;

    @media only screen and (max-width: 1200px) {
      font-size: 20px;
    }
  }
`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;window.customElements.define("main-page",class extends se{static styles=wa;constructor(){super()}connectedCallback(){super.connectedCallback(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=()=>{this.requestUpdate()};render(){return L`
      <div class="main-page">
        <header class="main-page-header" part="title">
          <h1 class="main-page-title">${be("Employee List")}</h1>
        </header>
        <main class="main-page-content" part="content">
          <slot name="content"></slot>
        </main>
      </div>
    `}});const va=i`
  header {
    display: flex;
    align-items: center;
    height: 40px;
    background-color: #ffffff;
    color: var(--secondary-color, #000);
    padding: 16px;
  }

  .logo-image {
    width: 24px;
    height: 24px;
  }

  .logo-text {
    font-size: 16px;
    margin-left: 8px;
    color: var(--secondary-color);
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right {
    display: flex;
    margin-left: auto;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
    font-size: 12px;
  }

  .link-text {
    color: var(--tertiary-color);
  }

  .link-image {
    width: 16px;
    height: 16px;
    color: var(--tertiary-color);
  }

  .localization {
    width: 16px;
    height: 16px;
    margin-left: 16px;
  }

  .localization-image {
    width: 16px;
    height: 16px;
  }
`,xa=["tr"],{setLocale:$a}=(e=>(function(e){if(we)throw new Error("lit-localize can only be configured once");be=e,we=!0}((e,t)=>Se(Oe,e,t)),Ze=Pe=e.sourceLocale,Ae=new Set(e.targetLocales),Ae.add(e.sourceLocale),_e=e.loadLocale,{getLocale:De,setLocale:ze}))({sourceLocale:"en",targetLocales:xa,loadLocale:e=>import(`../generated/locales/${e}.js`)}),ka=localStorage.getItem("app-locale")||at,Ea=xa.includes(ka)?ka:at,Sa=async e=>{localStorage.setItem("app-locale",e),await $a(e),document.dispatchEvent(new CustomEvent(lt,{detail:{locale:e},bubbles:!0,composed:!0}))};window.setLocale=Sa;window.customElements.define("header-element",
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class extends se{static styles=[Ye,va];static properties={currentLocale:{type:String}};constructor(){super(),this.currentLocale=localStorage.getItem("app-locale")||at}connectedCallback(){super.connectedCallback(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=e=>{this.currentLocale=e.detail.locale,this.requestUpdate()};async _toggleLanguage(){const e=this.currentLocale===at?ct:at;this.currentLocale=e,await Sa(e)}render(){return L`
      <header>
        <a href="/" class="left">
          <img
            class="logo-image"
            src="../../../assets/images/logo.png"
            alt="LOGO"
          />
          <span class="logo-text">ING</span>
        </a>
        <div class="right">
          <a class="link" href="/"
            ><img
              class="link-image"
              src="../../../assets/icons/user.svg"
            /><span class="link-text">${be("Employees")}</span></a
          >
          <a class="link" href="/add"
            ><img class="link-image" src="../../../assets/icons/add.svg" />
            <span class="link-text">${be("Add New")}</span></a
          >
          <button
            class="localization"
            @click=${this._toggleLanguage}
            title=${this.currentLocale===at?be("Switch to Turkish"):be("Switch to English")}
          >
            <img
              class="localization-image"
              src="../../../assets/images/${this.currentLocale===at?ct:at}.png"
              alt=${this.currentLocale===at?"TR":"EN"}
            />
          </button>
        </div>
      </header>
    `}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ca extends se{static styles=[Ye,i`
      :host {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      }

      .app-container {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    `];static properties={currentLocale:{type:String}};constructor(){super(),this.currentLocale=localStorage.getItem("app-locale")||at}async connectedCallback(){super.connectedCallback(),await(async()=>{await Sa(Ea)})(),document.addEventListener(lt,this._handleLocaleChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener(lt,this._handleLocaleChange)}_handleLocaleChange=e=>{this.currentLocale=e.detail.locale,this.requestUpdate()};router=new fe(this,[{path:nt,render:()=>L`
          <main-page pageTitle=${be("Employee List")}>
            <employees-page slot="content"></employees-page>
          </main-page>
        `},{path:ot,render:e=>L`
          <main-page pageTitle=${be("Edit Employee")}>
            <employee-edit-page
              slot="content"
              employeeId=${e.id}
            ></employee-edit-page>
          </main-page>
        `},{path:rt,render:()=>L`
          <main-page pageTitle=${be("Add Employee")}>
            <employee-add-page slot="content"></employee-add-page>
          </main-page>
        `}]);render(){return L`
      <div class="app-container" part="app-container">
        <header-element></header-element>
        <main>${this.router.outlet()}</main>
      </div>
    `}}window.customElements.define("employee-app",Ca);export{Ca as EmployeeApp};
