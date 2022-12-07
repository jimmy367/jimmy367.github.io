import{c as K}from"./selection.491c7c2b.js";import{r as E,M as Z,U as z,n as P,N as B,w,o as Q,j as W,g as S,O as X,V as k,a as Y,k as J,h as ee,a5 as te,a6 as ne,a7 as le,c as D,Z as R,a1 as oe}from"./index.35e427b2.js";import{v as ie,g as H,e as _}from"./vm.14103ea1.js";import{a as ae}from"./scroll.475bdc22.js";let V,M=0;const m=new Array(256);for(let e=0;e<256;e++)m[e]=(e+256).toString(16).substring(1);const re=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return t=>{const n=[];for(let l=t;l>0;l--)n.push(Math.floor(Math.random()*256));return n}})(),U=4096;function be(){(V===void 0||M+16>U)&&(M=0,V=re(U));const e=Array.prototype.slice.call(V,M,M+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,m[e[0]]+m[e[1]]+m[e[2]]+m[e[3]]+"-"+m[e[4]]+m[e[5]]+"-"+m[e[6]]+m[e[7]]+"-"+m[e[8]]+m[e[9]]+"-"+m[e[10]]+m[e[11]]+m[e[12]]+m[e[13]]+m[e[14]]+m[e[15]]}let g=[],T=[];function O(e){T=T.filter(t=>t!==e)}function ue(e){O(e),T.push(e)}function j(e){O(e),T.length===0&&g.length>0&&(g[g.length-1](),g=[])}function xe(e){T.length===0?e():g.push(e)}function we(e){g=g.filter(t=>t!==e)}const ye={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Te({showing:e,avoidEmit:t,configureAnchorEl:n}){const{props:l,proxy:o,emit:c}=S(),i=E(null);let u;function r(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const s={};n===void 0&&(Object.assign(s,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Z(a,13)===!0&&s.toggle(a)},contextClick(a){o.hide(a),z(a),P(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:z,mobileTouch(a){if(s.mobileCleanup(a),r(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const h=a.target;B(s,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),u=setTimeout(()=>{o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),clearTimeout(u),e.value===!0&&a!==void 0&&K()}}),n=function(a=l.contextMenu){if(l.noParentEvent===!0||i.value===null)return;let h;a===!0?o.$q.platform.is.mobile===!0?h=[[i.value,"touchstart","mobileTouch","passive"]]:h=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:h=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],B(s,"anchor",h)});function d(){X(s,"anchor")}function p(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;n()}function v(){if(l.target===!1||l.target===""||o.$el.parentNode===null)i.value=null;else if(l.target===!0)p(o.$el.parentNode);else{let a=l.target;if(typeof l.target=="string")try{a=document.querySelector(l.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,n()):(i.value=null,console.error(`Anchor: target "${l.target}" not found`))}}return w(()=>l.contextMenu,a=>{i.value!==null&&(d(),n(a))}),w(()=>l.target,()=>{i.value!==null&&d(),v()}),w(()=>l.noParentEvent,a=>{i.value!==null&&(a===!0?d():n())}),Q(()=>{v(),t!==!0&&l.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),W(()=>{clearTimeout(u),d()}),{anchorEl:i,canShow:r,anchorEvents:s}}function Me(e,t){const n=E(null);let l;function o(u,r){const s=`${r!==void 0?"add":"remove"}EventListener`,d=r!==void 0?r:l;u!==window&&u[s]("scroll",d,k.passive),window[s]("scroll",d,k.passive),l=r}function c(){n.value!==null&&(o(n.value),n.value=null)}const i=w(()=>e.noParentEvent,()=>{n.value!==null&&(c(),t())});return W(i),{localScrollTarget:n,unconfigureScrollTarget:c,changeScrollEvent:o}}const He={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Ee=["beforeShow","show","beforeHide","hide"];function Pe({showing:e,canShow:t,hideOnRouteChange:n,handleShow:l,handleHide:o,processOnMount:c}){const i=S(),{props:u,emit:r,proxy:s}=i;let d;function p(f){e.value===!0?h(f):v(f)}function v(f){if(u.disable===!0||f!==void 0&&f.qAnchorHandled===!0||t!==void 0&&t(f)!==!0)return;const x=u["onUpdate:modelValue"]!==void 0;x===!0&&(r("update:modelValue",!0),d=f,P(()=>{d===f&&(d=void 0)})),(u.modelValue===null||x===!1)&&a(f)}function a(f){e.value!==!0&&(e.value=!0,r("beforeShow",f),l!==void 0?l(f):r("show",f))}function h(f){if(u.disable===!0)return;const x=u["onUpdate:modelValue"]!==void 0;x===!0&&(r("update:modelValue",!1),d=f,P(()=>{d===f&&(d=void 0)})),(u.modelValue===null||x===!1)&&F(f)}function F(f){e.value!==!1&&(e.value=!1,r("beforeHide",f),o!==void 0?o(f):r("hide",f))}function L(f){u.disable===!0&&f===!0?u["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):f===!0!==e.value&&(f===!0?a:F)(d)}w(()=>u.modelValue,L),n!==void 0&&ie(i)===!0&&w(()=>s.$route.fullPath,()=>{n.value===!0&&e.value===!0&&h()}),c===!0&&Q(()=>{L(u.modelValue)});const A={show:v,hide:h,toggle:p};return Object.assign(s,A),A}const y=[];function $e(e){return y.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function se(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return H(e)}else if(e.__qPortal===!0){const n=H(e);return n!==void 0&&n.$options.name==="QPopupProxy"?(e.hide(t),n):e}e=H(e)}while(e!=null)}function Ce(e,t,n){for(;n!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(n--,e.$options.name==="QMenu"){e=se(e,t);continue}e.hide(t)}e=H(e)}}function de(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function We(e,t,n,l){const o=E(!1),c=E(!1);let i=null;const u={},r=l===!0&&de(e);function s(p){if(p===!0){j(u),c.value=!0;return}c.value=!1,o.value===!1&&(r===!1&&i===null&&(i=ne()),o.value=!0,y.push(e.proxy),ue(u))}function d(p){if(c.value=!1,p!==!0)return;j(u),o.value=!1;const v=y.indexOf(e.proxy);v!==-1&&y.splice(v,1),i!==null&&(le(i),i=null)}return Y(()=>{d(!0)}),e.proxy.__qPortal=!0,J(e.proxy,"contentEl",()=>t.value),{showPortal:s,hidePortal:d,portalIsActive:o,portalIsAccessible:c,renderPortal:()=>r===!0?n():o.value===!0?[ee(te,{to:i},n())]:void 0}}const Se={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Ve(e,t=()=>{},n=()=>{}){return{transitionProps:D(()=>{const l=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||n()}`;return{appear:!0,enterFromClass:`${l}-enter-from`,enterActiveClass:`${l}-enter-active`,enterToClass:`${l}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:D(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function ke(){let e;const t=S();function n(){e=void 0}return R(n),W(n),{removeTick:n,registerTick(l){e=l,P(()=>{e===l&&(_(t)===!1&&e(),e=void 0)})}}}function qe(){let e;const t=S();function n(){clearTimeout(e)}return R(n),W(n),{removeTimeout:n,registerTimeout(l,o){clearTimeout(e),_(t)===!1&&(e=setTimeout(l,o))}}}let G;const{notPassiveCapture:$}=k,b=[];function C(e){clearTimeout(G);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let n=y.length-1;for(;n>=0;){const l=y[n].$;if(l.type.name!=="QDialog")break;if(l.props.seamless!==!0)return;n--}for(let l=b.length-1;l>=0;l--){const o=b[l];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Fe(e){b.push(e),b.length===1&&(document.addEventListener("mousedown",C,$),document.addEventListener("touchstart",C,$))}function Le(e){const t=b.findIndex(n=>n===e);t>-1&&(b.splice(t,1),b.length===0&&(clearTimeout(G),document.removeEventListener("mousedown",C,$),document.removeEventListener("touchstart",C,$)))}let I,N;function Ae(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function ze(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const q={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{q[`${e}#ltr`]=e,q[`${e}#rtl`]=e});function Be(e,t){const n=e.split(" ");return{vertical:n[0],horizontal:q[`${n[1]}#${t===!0?"rtl":"ltr"}`]}}function ce(e,t){let{top:n,left:l,right:o,bottom:c,width:i,height:u}=e.getBoundingClientRect();return t!==void 0&&(n-=t[1],l-=t[0],c+=t[1],o+=t[0],i+=t[0],u+=t[1]),{top:n,left:l,right:o,bottom:c,width:i,height:u,middle:l+(o-l)/2,center:n+(c-n)/2}}function fe(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function De(e){if(oe.is.ios===!0&&window.visualViewport!==void 0){const u=document.body.style,{offsetLeft:r,offsetTop:s}=window.visualViewport;r!==I&&(u.setProperty("--q-pe-left",r+"px"),I=r),s!==N&&(u.setProperty("--q-pe-top",s+"px"),N=s)}let t;const{scrollLeft:n,scrollTop:l}=e.el;if(e.absoluteOffset===void 0)t=ce(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:u,left:r}=e.anchorEl.getBoundingClientRect(),s=u+e.absoluteOffset.top,d=r+e.absoluteOffset.left;t={top:s,left:d,width:1,height:1,right:d+1,center:s,middle:d,bottom:s+1}}let o={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(o.minWidth=t.width+"px",e.cover===!0&&(o.minHeight=t.height+"px")),Object.assign(e.el.style,o);const c=fe(e.el),i={top:t[e.anchorOrigin.vertical]-c[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-c[e.selfOrigin.horizontal]};me(i,t,c,e.anchorOrigin,e.selfOrigin),o={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(o.maxHeight=i.maxHeight+"px",t.height>i.maxHeight&&(o.minHeight=o.maxHeight)),i.maxWidth!==void 0&&(o.maxWidth=i.maxWidth+"px",t.width>i.maxWidth&&(o.minWidth=o.maxWidth)),Object.assign(e.el.style,o),e.el.scrollTop!==l&&(e.el.scrollTop=l),e.el.scrollLeft!==n&&(e.el.scrollLeft=n)}function me(e,t,n,l,o){const c=n.bottom,i=n.right,u=ae(),r=window.innerHeight-u,s=document.body.clientWidth;if(e.top<0||e.top+c>r)if(o.vertical==="center")e.top=t[l.vertical]>r/2?Math.max(0,r-c):0,e.maxHeight=Math.min(c,r);else if(t[l.vertical]>r/2){const d=Math.min(r,l.vertical==="center"?t.center:l.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,l.vertical==="center"?t.center:l.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,r-e.top);if(e.left<0||e.left+i>s)if(e.maxWidth=Math.min(i,s),o.horizontal==="middle")e.left=t[l.horizontal]>s/2?Math.max(0,s-i):0;else if(t[l.horizontal]>s/2){const d=Math.min(s,l.horizontal==="middle"?t.middle:l.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,l.horizontal==="middle"?t.middle:l.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(i,s-e.left)}export{xe as a,He as b,Se as c,ze as d,Ee as e,ke as f,qe as g,Ve as h,Me as i,Te as j,Pe as k,We as l,Fe as m,be as n,we as o,Be as p,$e as q,Le as r,De as s,Ce as t,ye as u,Ae as v,se as w};