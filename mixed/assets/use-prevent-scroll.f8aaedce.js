import{c as K,h as z,k as Oe,o as Re}from"./vm.bc5b9d87.js";import{c,h as m,r as b,M as me,S as U,g as ge,a1 as S,w as Y,Q as He,R as he,j as G,aj as oe,V as C,ak as pe}from"./index.55cf1f6a.js";import{u as ye,a as be}from"./selection.95d718e5.js";import{d as Fe,e as Me,b as Ke}from"./QBtn.8d52143e.js";import{u as Qe,b as $e,c as ze,v as ae,d as Ae,e as Ie,f as je,g as We,h as Ne,i as De,j as Ve,k as Xe,l as Ye,r as re,s as Ue,p as se,m as Ge,a as Je,w as Ze}from"./position-engine.f717f73f.js";import{g as et,b as tt,c as nt,h as it}from"./scroll.619798fc.js";var kt=K({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=c(()=>parseInt(e.lines,10)),o=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),r=c(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>m("div",{style:r.value,class:o.value},z(t.default))}}),Tt=K({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>m("div",{class:l.value},z(t.default))}}),Ct=K({name:"QItem",props:{...ye,...Fe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:o}}=ge(),r=be(e,o),{hasLink:u,linkAttrs:a,linkClass:d,linkTag:y,navigateOnClick:g}=Me(),f=b(null),v=b(null),h=c(()=>e.clickable===!0||u.value===!0||e.tag==="label"),w=c(()=>e.disable!==!0&&h.value===!0),x=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(r.value===!0?" q-item--dark":"")+(u.value===!0&&e.active===null?d.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(w.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),q=c(()=>{if(e.insetLevel===void 0)return null;const s=o.lang.rtl===!0?"Right":"Left";return{["padding"+s]:16+e.insetLevel*56+"px"}});function P(s){w.value===!0&&(v.value!==null&&(s.qKeyEvent!==!0&&document.activeElement===f.value?v.value.focus():document.activeElement===v.value&&f.value.focus()),g(s))}function L(s){if(w.value===!0&&me(s,13)===!0){U(s),s.qKeyEvent=!0;const k=new MouseEvent("click",s);k.qKeyEvent=!0,f.value.dispatchEvent(k)}l("keyup",s)}function B(){const s=Oe(t.default,[]);return w.value===!0&&s.unshift(m("div",{class:"q-focus-helper",tabindex:-1,ref:v})),s}return()=>{const s={ref:f,class:x.value,style:q.value,role:"listitem",onClick:P,onKeyup:L};return w.value===!0?(s.tabindex=e.tabindex||"0",Object.assign(s,a.value)):h.value===!0&&(s["aria-disabled"]="true"),m(y.value,s,B())}}});const _=[];let H;function lt(e){H=e.keyCode===27}function ot(){H===!0&&(H=!1)}function at(e){H===!0&&(H=!1,me(e,27)===!0&&_[_.length-1](e))}function we(e){window[e]("keydown",lt),window[e]("blur",ot),window[e]("keyup",at),H=!1}function rt(e){S.is.desktop===!0&&(_.push(e),_.length===1&&we("addEventListener"))}function ue(e){const t=_.indexOf(e);t>-1&&(_.splice(t,1),_.length===0&&we("removeEventListener"))}const E=[];function Se(e){E[E.length-1](e)}function st(e){S.is.desktop===!0&&(E.push(e),E.length===1&&document.body.addEventListener("focusin",Se))}function ut(e){const t=E.indexOf(e);t>-1&&(E.splice(t,1),E.length===0&&document.body.removeEventListener("focusin",Se))}var _t=K({name:"QMenu",inheritAttrs:!1,props:{...Qe,...$e,...ye,...ze,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ae},self:{type:String,validator:ae},offset:{type:Array,validator:Ae},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Ie,"click","escapeKey"],setup(e,{slots:t,emit:l,attrs:o}){let r=null,u,a,d;const y=ge(),{proxy:g}=y,{$q:f}=g,v=b(null),h=b(!1),w=c(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),x=be(e,f),{registerTick:q,removeTick:P}=je(),{registerTimeout:L}=We(),{transitionProps:B,transitionStyle:s}=Ne(e),{localScrollTarget:k,changeScrollEvent:Q,unconfigureScrollTarget:A}=De(e,ie),{anchorEl:i,canShow:O}=Ve({showing:h}),{hide:T}=Xe({showing:h,canShow:O,handleShow:_e,handleHide:Ee,hideOnRouteChange:w,processOnMount:!0}),{showPortal:J,hidePortal:Z,renderPortal:qe}=Ye(y,v,Pe),I={anchorEl:i,innerRef:v,onClickOutside(n){if(e.persistent!==!0&&h.value===!0)return T(n),(n.type==="touchstart"||n.target.classList.contains("q-dialog__backdrop"))&&U(n),!0}},ee=c(()=>se(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),ke=c(()=>e.cover===!0?ee.value:se(e.self||"top start",f.lang.rtl)),Te=c(()=>(e.square===!0?" q-menu--square":"")+(x.value===!0?" q-menu--dark q-dark":"")),Ce=c(()=>e.autoClose===!0?{onClick:xe}:{}),te=c(()=>h.value===!0&&e.persistent!==!0);Y(te,n=>{n===!0?(rt(W),Ge(I)):(ue(W),re(I))});function j(){Je(()=>{let n=v.value;n&&n.contains(document.activeElement)!==!0&&(n=n.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||n.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||n.querySelector("[autofocus], [data-autofocus]")||n,n.focus({preventScroll:!0}))})}function _e(n){if(r=e.noRefocus===!1?document.activeElement:null,st(le),J(),ie(),u=void 0,n!==void 0&&(e.touchPosition||e.contextMenu)){const N=He(n);if(N.left!==void 0){const{top:Le,left:Be}=i.value.getBoundingClientRect();u={left:N.left-Be,top:N.top-Le}}}a===void 0&&(a=Y(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,p)),e.noFocus!==!0&&document.activeElement.blur(),q(()=>{p(),e.noFocus!==!0&&j()}),L(()=>{f.platform.is.ios===!0&&(d=e.autoClose,v.value.click()),p(),J(!0),l("show",n)},e.transitionDuration)}function Ee(n){P(),Z(),ne(!0),r!==null&&(n===void 0||n.qClickOutside!==!0)&&(((n&&n.type.indexOf("key")===0?r.closest('[tabindex]:not([tabindex^="-"])'):void 0)||r).focus(),r=null),L(()=>{Z(!0),l("hide",n)},e.transitionDuration)}function ne(n){u=void 0,a!==void 0&&(a(),a=void 0),(n===!0||h.value===!0)&&(ut(le),A(),re(I),ue(W)),n!==!0&&(r=null)}function ie(){(i.value!==null||e.scrollTarget!==void 0)&&(k.value=et(i.value,e.scrollTarget),Q(k.value,p))}function xe(n){d!==!0?(Ze(g,n),l("click",n)):d=!1}function le(n){te.value===!0&&e.noFocus!==!0&&Re(v.value,n.target)!==!0&&j()}function W(n){l("escapeKey"),T(n)}function p(){const n=v.value;n===null||i.value===null||Ue({el:n,offset:e.offset,anchorEl:i.value,anchorOrigin:ee.value,selfOrigin:ke.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Pe(){return m(he,B.value,()=>h.value===!0?m("div",{role:"menu",...o,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+Te.value,o.class],style:[o.style,s.value],...Ce.value},z(t.default)):null)}return G(ne),Object.assign(g,{focus:j,updatePosition:p}),qe}});const ct={ratio:[String,Number]};function dt(e,t){return c(()=>{const l=Number(e.ratio||(t!==void 0?t.value:void 0));return isNaN(l)!==!0&&l>0?{paddingBottom:`${100/l}%`}:null})}const ft=16/9;var Et=K({name:"QImg",props:{...ct,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:ft},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:l}){const o=b(e.initialRatio),r=dt(e,o);let u;const a=[b(null),b(q())],d=b(0),y=b(!1),g=b(!1),f=c(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),v=c(()=>({width:e.width,height:e.height})),h=c(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),w=c(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Y(()=>x(),P);function x(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function q(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function P(i){clearTimeout(u),g.value=!1,i===null?(y.value=!1,a[d.value^1].value=q()):y.value=!0,a[d.value].value=i}function L({target:i}){u!==null&&(clearTimeout(u),o.value=i.naturalHeight===0?.5:i.naturalWidth/i.naturalHeight,B(i,1))}function B(i,O){u===null||O===1e3||(i.complete===!0?s(i):u=setTimeout(()=>{B(i,O+1)},50))}function s(i){u!==null&&(d.value=d.value^1,a[d.value].value=null,y.value=!1,g.value=!1,l("load",i.currentSrc||i.src))}function k(i){clearTimeout(u),y.value=!1,g.value=!0,a[d.value].value=null,a[d.value^1].value=q(),l("error",i)}function Q(i){const O=a[i].value,T={key:"img_"+i,class:h.value,style:w.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...O};return d.value===i?(T.class+=" q-img__image--waiting",Object.assign(T,{onLoad:L,onError:k})):T.class+=" q-img__image--loaded",m("div",{class:"q-img__container absolute-full",key:"img"+i},m("img",T))}function A(){return y.value!==!0?m("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},z(t[g.value===!0?"error":"default"])):m("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},t.loading!==void 0?t.loading():e.noSpinner===!0?void 0:[m(Ke,{color:e.spinnerColor,size:e.spinnerSize})])}return P(x()),G(()=>{clearTimeout(u),u=null}),()=>{const i=[];return r.value!==null&&i.push(m("div",{key:"filler",style:r.value})),g.value!==!0&&(a[0].value!==null&&i.push(Q(0)),a[1].value!==null&&i.push(Q(1))),i.push(m(he,{name:"q-transition--fade"},A)),m("div",{class:f.value,style:v.value,role:"img","aria-label":e.alt},i)}}});function xt(e,t,l){let o;function r(){o!==void 0&&(oe.remove(o),o=void 0)}return G(()=>{e.value===!0&&r()}),{removeFromHistory:r,addToHistory(){o={condition:()=>l.value===!0,handler:t},oe.add(o)}}}let F=0,D,V,M,X=!1,ce,de,R;function vt(e){mt(e)&&U(e)}function mt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=pe(e),l=e.shiftKey&&!e.deltaX,o=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),r=l||o?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const a=t[u];if(it(a,o))return o?r<0&&a.scrollTop===0?!0:r>0&&a.scrollTop+a.clientHeight===a.scrollHeight:r<0&&a.scrollLeft===0?!0:r>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function fe(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function $(e){X!==!0&&(X=!0,requestAnimationFrame(()=>{X=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:o}=document.scrollingElement;(M===void 0||t!==window.innerHeight)&&(M=l-t,document.scrollingElement.scrollTop=o),o>M&&(document.scrollingElement.scrollTop-=Math.ceil((o-M)/8))}))}function ve(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:r}=window.getComputedStyle(t);D=tt(window),V=nt(window),ce=t.style.left,de=t.style.top,t.style.left=`-${D}px`,t.style.top=`-${V}px`,r!=="hidden"&&(r==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,S.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",$,C.passiveCapture),window.visualViewport.addEventListener("scroll",$,C.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",fe,C.passiveCapture))}S.is.desktop===!0&&S.is.mac===!0&&window[`${e}EventListener`]("wheel",vt,C.notPassive),e==="remove"&&(S.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",$,C.passiveCapture),window.visualViewport.removeEventListener("scroll",$,C.passiveCapture)):window.removeEventListener("scroll",fe,C.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=ce,t.style.top=de,window.scrollTo(D,V),M=void 0)}function gt(e){let t="add";if(e===!0){if(F++,R!==void 0){clearTimeout(R),R=void 0;return}if(F>1)return}else{if(F===0||(F--,F>0))return;if(t="remove",S.is.ios===!0&&S.is.nativeMobile===!0){clearTimeout(R),R=setTimeout(()=>{ve(t),R=void 0},100);return}}ve(t)}function Pt(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,gt(t))}}}export{_t as Q,Pt as a,Ct as b,kt as c,Tt as d,Et as e,ue as f,st as g,rt as h,ut as r,xt as u};
