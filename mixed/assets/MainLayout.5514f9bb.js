import{h as d,j as P,al as ft,am as ht,c as u,z as G,an as mt,u as pe,k as Le,l as J,g as Z,ao as Re,S as gt,r as $,ap as Be,aq as bt,w as k,o as Ve,Q as le,ar as yt,as as W,$ as Ie,at as wt,i as $e,au as ge,R as Ee,U as Fe,W as _t,Y as We,av as xt,a8 as Ae,N as ie,aw as Pe,ax as St,aa as Ne,ay as qt,az as kt,aj as qe,M as de,a as Bt,aA as je,aB as Ct,aC as pt,aD as Lt,ae as It,aE as Te,aF as $t,aG as Tt,aH as Qt,aI as zt,m as be,aJ as At,n as T,p as R,q as w,d as f,aK as Pt,I as ae,F as ve,aL as Ke,x as fe,B as he,aM as Ot,C as te,O as Dt,a4 as Mt,_ as Ue,aN as Ht,P as Ge,aO as Je,aP as Rt,t as Y,A as Xe,aQ as Vt,aR as Et,s as Ye,a3 as Ft,J as Wt,G as Nt,H as jt}from"./index.13381753.js";import{a as Kt,D as Ut,Q as Oe}from"./DarkMode.84a437d5.js";import{Q as Gt,a as me,b as oe,c as D,d as Jt}from"./QImg.13a344aa.js";import{Q as Ce,T as ke,b as ce,a as Xt,c as Yt}from"./QScrollArea.9bd87065.js";import{Q as Zt}from"./QSlideTransition.dc6d229c.js";import"./position-engine.45d4a394.js";import"./selection.f16de754.js";import"./touch.70a9dd44.js";const ea=d("div",{class:"q-space"});var ta=P({name:"QSpace",setup(){return()=>ea}}),aa=P({name:"QAvatar",props:{...ft,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:r}){const l=ht(e),s=u(()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(e.square===!0?" q-avatar--square":e.rounded===!0?" rounded-borders":"")),a=u(()=>e.fontSize?{fontSize:e.fontSize}:null);return()=>{const o=e.icon!==void 0?[d(G,{name:e.icon})]:void 0;return d("div",{class:s.value,style:l.value},[d("div",{class:"q-avatar__content row flex-center overflow-hidden",style:a.value},mt(r.default,o))])}}}),Ze=P({name:"QList",props:{...pe,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:r}){const l=Z(),s=Le(e,l.proxy.$q),a=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>d(e.tag,{class:a.value},J(r.default))}}),na=P({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:r}){const l=u(()=>{const s=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(a=>e[a]===!0).map(a=>`q-btn-group--${a}`).join(" ");return`q-btn-group row no-wrap${s.length>0?" "+s:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>d("div",{class:l.value},J(r.default))}});const la=Object.keys(Re),oa=e=>la.reduce((r,l)=>{const s=e[l];return s!==void 0&&(r[l]=s),r},{});var ia=P({name:"QBtnDropdown",props:{...Re,...gt,modelValue:Boolean,split:Boolean,dropdownIcon:String,contentClass:[Array,String,Object],contentStyle:[Array,String,Object],cover:Boolean,persistent:Boolean,noRouteDismiss:Boolean,autoClose:Boolean,menuAnchor:{type:String,default:"bottom end"},menuSelf:{type:String,default:"top end"},menuOffset:Array,disableMainBtn:Boolean,disableDropdown:Boolean,noIconAnimation:Boolean,toggleAriaLabel:String},emits:["update:modelValue","click","beforeShow","show","beforeHide","hide"],setup(e,{slots:r,emit:l}){const{proxy:s}=Z(),a=$(e.modelValue),o=$(null),v=Be(),S=u(()=>{const n={"aria-expanded":a.value===!0?"true":"false","aria-haspopup":"true","aria-controls":v,"aria-label":e.toggleAriaLabel||s.$q.lang.label[a.value===!0?"collapse":"expand"](e.label)};return(e.disable===!0||e.split===!1&&e.disableMainBtn===!0||e.disableDropdown===!0)&&(n["aria-disabled"]="true"),n}),g=u(()=>"q-btn-dropdown__arrow"+(a.value===!0&&e.noIconAnimation===!1?" rotate-180":"")+(e.split===!1?" q-btn-dropdown__arrow-container":"")),h=u(()=>bt(e)),i=u(()=>oa(e));k(()=>e.modelValue,n=>{o.value!==null&&o.value[n?"show":"hide"]()}),k(()=>e.split,I);function _(n){a.value=!0,l("beforeShow",n)}function B(n){l("show",n),l("update:modelValue",!0)}function q(n){a.value=!1,l("beforeHide",n)}function b(n){l("hide",n),l("update:modelValue",!1)}function C(n){l("click",n)}function L(n){yt(n),I(),l("click",n)}function x(n){o.value!==null&&o.value.toggle(n)}function c(n){o.value!==null&&o.value.show(n)}function I(n){o.value!==null&&o.value.hide(n)}return Object.assign(s,{show:c,hide:I,toggle:x}),Ve(()=>{e.modelValue===!0&&c()}),()=>{const n=[d(G,{class:g.value,name:e.dropdownIcon||s.$q.iconSet.arrow.dropdown})];return e.disableDropdown!==!0&&n.push(d(Gt,{ref:o,id:v,class:e.contentClass,style:e.contentStyle,cover:e.cover,fit:!0,persistent:e.persistent,noRouteDismiss:e.noRouteDismiss,autoClose:e.autoClose,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,separateClosePopup:!0,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:_,onShow:B,onBeforeHide:q,onHide:b},r.default)),e.split===!1?d(le,{class:"q-btn-dropdown q-btn-dropdown--simple",...i.value,...S.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:C},{default:()=>J(r.label,[]).concat(n),loading:r.loading}):d(na,{class:"q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item",rounded:e.rounded,square:e.square,...h.value,glossy:e.glossy,stretch:e.stretch},()=>[d(le,{class:"q-btn-dropdown--current",...i.value,disable:e.disable===!0||e.disableMainBtn===!0,noWrap:!0,round:!1,onClick:L},{default:r.label,loading:r.loading}),d(le,{class:"q-btn-dropdown__arrow-container q-anchor--skip",...S.value,...h.value,disable:e.disable===!0||e.disableDropdown===!0,rounded:e.rounded,color:e.color,textColor:e.textColor,dense:e.dense,size:e.size,padding:e.padding,ripple:e.ripple},()=>n)])}}}),ra=P({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:r}){const l=u(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>d("div",{class:l.value,role:"toolbar"},J(r.default))}}),ua=P({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:l}){const{proxy:{$q:s}}=Z(),a=$e(ge,W);if(a===W)return console.error("QHeader needs to be child of QLayout"),W;const o=$(parseInt(e.heightHint,10)),v=$(!0),S=u(()=>e.reveal===!0||a.view.value.indexOf("H")>-1||s.platform.is.ios&&a.isContainer.value===!0),g=u(()=>{if(e.modelValue!==!0)return 0;if(S.value===!0)return v.value===!0?o.value:0;const c=o.value-a.scroll.value.position;return c>0?c:0}),h=u(()=>e.modelValue!==!0||S.value===!0&&v.value!==!0),i=u(()=>e.modelValue===!0&&h.value===!0&&e.reveal===!0),_=u(()=>"q-header q-layout__section--marginal "+(S.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(h.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),B=u(()=>{const c=a.rows.value.top,I={};return c[0]==="l"&&a.left.space===!0&&(I[s.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),c[2]==="r"&&a.right.space===!0&&(I[s.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),I});function q(c,I){a.update("header",c,I)}function b(c,I){c.value!==I&&(c.value=I)}function C({height:c}){b(o,c),q("size",c)}function L(c){i.value===!0&&b(v,!0),l("focusin",c)}k(()=>e.modelValue,c=>{q("space",c),b(v,!0),a.animate()}),k(g,c=>{q("offset",c)}),k(()=>e.reveal,c=>{c===!1&&b(v,e.modelValue)}),k(v,c=>{a.animate(),l("reveal",c)}),k(a.scroll,c=>{e.reveal===!0&&b(v,c.direction==="up"||c.position<=e.revealOffset||c.position-c.inflectionPoint<100)});const x={};return a.instances.header=x,e.modelValue===!0&&q("size",o.value),q("space",e.modelValue),q("offset",g.value),Ie(()=>{a.instances.header===x&&(a.instances.header=void 0,q("size",0),q("offset",0),q("space",!1))}),()=>{const c=wt(r.default,[]);return e.elevated===!0&&c.push(d("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),c.push(d(Ce,{debounce:0,onResize:C})),d("header",{class:_.value,style:B.value,onFocusin:L},c)}}});const De=150;var sa=P({name:"QDrawer",inheritAttrs:!1,props:{...Ee,...pe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Fe,"onLayout","miniState"],setup(e,{slots:r,emit:l,attrs:s}){const a=Z(),{proxy:{$q:o}}=a,v=Le(e,o),{preventBodyScroll:S}=St(),{registerTimeout:g,removeTimeout:h}=_t(),i=$e(ge,W);if(i===W)return console.error("QDrawer needs to be child of QLayout"),W;let _,B,q;const b=$(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),C=u(()=>e.mini===!0&&b.value!==!0),L=u(()=>C.value===!0?e.miniWidth:e.width),x=$(e.showIfAbove===!0&&b.value===!1?!0:e.modelValue===!0),c=u(()=>e.persistent!==!0&&(b.value===!0||ye.value===!0));function I(t,y){if(V(),t!==!1&&i.animate(),O(0),b.value===!0){const z=i.instances[ee.value];z!==void 0&&z.belowBreakpoint===!0&&z.hide(!1),K(1),i.isContainer.value!==!0&&S(!0)}else K(0),t!==!1&&_e(!1);g(()=>{t!==!1&&_e(!0),y!==!0&&l("show",t)},De)}function n(t,y){N(),t!==!1&&i.animate(),K(0),O(F.value*L.value),xe(),y!==!0?g(()=>{l("hide",t)},De):h()}const{show:p,hide:Q}=We({showing:x,hideOnRouteChange:c,handleShow:I,handleHide:n}),{addToHistory:V,removeFromHistory:N}=xt(x,Q,c),E={belowBreakpoint:b,hide:Q},M=u(()=>e.side==="right"),F=u(()=>(o.lang.rtl===!0?-1:1)*(M.value===!0?1:-1)),re=$(0),j=$(!1),ne=$(!1),ue=$(L.value*F.value),ee=u(()=>M.value===!0?"left":"right"),m=u(()=>x.value===!0&&b.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:L.value:0),A=u(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(M.value?"R":"L")>-1||o.platform.is.ios===!0&&i.isContainer.value===!0),H=u(()=>e.overlay===!1&&x.value===!0&&b.value===!1),ye=u(()=>e.overlay===!0&&x.value===!0&&b.value===!1),et=u(()=>"fullscreen q-drawer__backdrop"+(x.value===!1&&j.value===!1?" hidden":"")),tt=u(()=>({backgroundColor:`rgba(0,0,0,${re.value*.4})`})),Qe=u(()=>M.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),at=u(()=>M.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),nt=u(()=>{const t={};return i.header.space===!0&&Qe.value===!1&&(A.value===!0?t.top=`${i.header.offset}px`:i.header.space===!0&&(t.top=`${i.header.size}px`)),i.footer.space===!0&&at.value===!1&&(A.value===!0?t.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(t.bottom=`${i.footer.size}px`)),t}),lt=u(()=>{const t={width:`${L.value}px`,transform:`translateX(${ue.value}px)`};return b.value===!0?t:Object.assign(t,nt.value)}),ot=u(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),it=u(()=>`q-drawer q-drawer--${e.side}`+(ne.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(v.value===!0?" q-drawer--dark q-dark":"")+(j.value===!0?" no-transition":x.value===!0?"":" q-layout--prevent-focus")+(b.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${C.value===!0?"mini":"standard"}`+(A.value===!0||H.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(Qe.value===!0?" q-drawer--top-padding":""))),rt=u(()=>{const t=o.lang.rtl===!0?e.side:ee.value;return[[ke,ct,void 0,{[t]:!0,mouse:!0}]]}),ut=u(()=>{const t=o.lang.rtl===!0?ee.value:e.side;return[[ke,ze,void 0,{[t]:!0,mouse:!0}]]}),st=u(()=>{const t=o.lang.rtl===!0?ee.value:e.side;return[[ke,ze,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function we(){vt(b,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}k(b,t=>{t===!0?(_=x.value,x.value===!0&&Q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&_!==!1&&(x.value===!0?(O(0),K(0),xe()):p(!1))}),k(()=>e.side,(t,y)=>{i.instances[y]===E&&(i.instances[y]=void 0,i[y].space=!1,i[y].offset=0),i.instances[t]=E,i[t].size=L.value,i[t].space=H.value,i[t].offset=m.value}),k(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&we()}),k(()=>e.behavior+e.breakpoint,we),k(i.isContainer,t=>{x.value===!0&&S(t!==!0),t===!0&&we()}),k(i.scrollbarWidth,()=>{O(x.value===!0?0:void 0)}),k(m,t=>{U("offset",t)}),k(H,t=>{l("onLayout",t),U("space",t)}),k(M,()=>{O()}),k(L,t=>{O(),Se(e.miniToOverlay,t)}),k(()=>e.miniToOverlay,t=>{Se(t,L.value)}),k(()=>o.lang.rtl,()=>{O()}),k(()=>e.mini,()=>{e.modelValue===!0&&(dt(),i.animate())}),k(C,t=>{l("miniState",t)});function O(t){t===void 0?Ae(()=>{t=x.value===!0?0:L.value,O(F.value*t)}):(i.isContainer.value===!0&&M.value===!0&&(b.value===!0||Math.abs(t)===L.value)&&(t+=F.value*i.scrollbarWidth.value),ue.value=t)}function K(t){re.value=t}function _e(t){const y=t===!0?"remove":i.isContainer.value!==!0?"add":"";y!==""&&document.body.classList[y]("q-body--drawer-toggle")}function dt(){clearTimeout(B),a.proxy&&a.proxy.$el&&a.proxy.$el.classList.add("q-drawer--mini-animate"),ne.value=!0,B=setTimeout(()=>{ne.value=!1,a&&a.proxy&&a.proxy.$el&&a.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ct(t){if(x.value!==!1)return;const y=L.value,z=ce(t.distance.x,0,y);if(t.isFinal===!0){z>=Math.min(75,y)===!0?p():(i.animate(),K(0),O(F.value*y)),j.value=!1;return}O((o.lang.rtl===!0?M.value!==!0:M.value)?Math.max(y-z,0):Math.min(0,z-y)),K(ce(z/y,0,1)),t.isFirst===!0&&(j.value=!0)}function ze(t){if(x.value!==!0)return;const y=L.value,z=t.direction===e.side,se=(o.lang.rtl===!0?z!==!0:z)?ce(t.distance.x,0,y):0;if(t.isFinal===!0){Math.abs(se)<Math.min(75,y)===!0?(i.animate(),K(1),O(0)):Q(),j.value=!1;return}O(F.value*se),K(ce(1-se/y,0,1)),t.isFirst===!0&&(j.value=!0)}function xe(){S(!1),_e(!0)}function U(t,y){i.update(e.side,t,y)}function vt(t,y){t.value!==y&&(t.value=y)}function Se(t,y){U("size",t===!0?e.miniWidth:y)}return i.instances[e.side]=E,Se(e.miniToOverlay,L.value),U("space",H.value),U("offset",m.value),e.showIfAbove===!0&&e.modelValue!==!0&&x.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),Ve(()=>{l("onLayout",H.value),l("miniState",C.value),_=e.showIfAbove===!0;const t=()=>{(x.value===!0?I:n)(!1,!0)};if(i.totalWidth.value!==0){Ae(t);return}q=k(i.totalWidth,()=>{q(),q=void 0,x.value===!1&&e.showIfAbove===!0&&b.value===!1?p(!1):t()})}),Ie(()=>{q!==void 0&&q(),clearTimeout(B),x.value===!0&&xe(),i.instances[e.side]===E&&(i.instances[e.side]=void 0,U("size",0),U("offset",0),U("space",!1))}),()=>{const t=[];b.value===!0&&(e.noSwipeOpen===!1&&t.push(ie(d("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),rt.value)),t.push(Pe("div",{ref:"backdrop",class:et.value,style:tt.value,"aria-hidden":"true",onClick:Q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&x.value===!0,()=>st.value)));const y=C.value===!0&&r.mini!==void 0,z=[d("div",{...s,key:""+y,class:[ot.value,s.class]},y===!0?r.mini():J(r.default))];return e.elevated===!0&&x.value===!0&&z.push(d("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(Pe("aside",{ref:"content",class:it.value,style:lt.value},z,"contentclose",e.noSwipeClose!==!0&&b.value===!0,()=>ut.value)),d("div",{class:"q-drawer-container"},t)}}}),da=P({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:l}}=Z(),s=$e(ge,W);if(s===W)return console.error("QPageContainer needs to be child of QLayout"),W;Ne(qt,!0);const a=u(()=>{const o={};return s.header.space===!0&&(o.paddingTop=`${s.header.size}px`),s.right.space===!0&&(o[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${s.right.size}px`),s.footer.space===!0&&(o.paddingBottom=`${s.footer.size}px`),s.left.space===!0&&(o[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${s.left.size}px`),o});return()=>d("div",{class:"q-page-container",style:a.value},J(r.default))}}),ca=P({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:l}){const{proxy:{$q:s}}=Z(),a=$(null),o=$(s.screen.height),v=$(e.container===!0?0:s.screen.width),S=$({position:0,direction:"down",inflectionPoint:0}),g=$(0),h=$(kt.value===!0?0:qe()),i=u(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),_=u(()=>e.container===!1?{minHeight:s.screen.height+"px"}:null),B=u(()=>h.value!==0?{[s.lang.rtl===!0?"left":"right"]:`${h.value}px`}:null),q=u(()=>h.value!==0?{[s.lang.rtl===!0?"right":"left"]:0,[s.lang.rtl===!0?"left":"right"]:`-${h.value}px`,width:`calc(100% + ${h.value}px)`}:null);function b(n){if(e.container===!0||document.qScrollPrevented!==!0){const p={position:n.position.top,direction:n.direction,directionChanged:n.directionChanged,inflectionPoint:n.inflectionPoint.top,delta:n.delta.top};S.value=p,e.onScroll!==void 0&&l("scroll",p)}}function C(n){const{height:p,width:Q}=n;let V=!1;o.value!==p&&(V=!0,o.value=p,e.onScrollHeight!==void 0&&l("scrollHeight",p),x()),v.value!==Q&&(V=!0,v.value=Q),V===!0&&e.onResize!==void 0&&l("resize",n)}function L({height:n}){g.value!==n&&(g.value=n,x())}function x(){if(e.container===!0){const n=o.value>g.value?qe():0;h.value!==n&&(h.value=n)}}let c;const I={instances:{},view:u(()=>e.view),isContainer:u(()=>e.container),rootRef:a,height:o,containerHeight:g,scrollbarWidth:h,totalWidth:u(()=>v.value+h.value),rows:u(()=>{const n=e.view.toLowerCase().split(" ");return{top:n[0].split(""),middle:n[1].split(""),bottom:n[2].split("")}}),header:de({size:0,offset:0,space:!1}),right:de({size:300,offset:0,space:!1}),footer:de({size:0,offset:0,space:!1}),left:de({size:300,offset:0,space:!1}),scroll:S,animate(){c!==void 0?clearTimeout(c):document.body.classList.add("q-body--layout-animate"),c=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),c=void 0},155)},update(n,p,Q){I[n][p]=Q}};if(Ne(ge,I),qe()>0){let Q=function(){n=null,p.classList.remove("hide-scrollbar")},V=function(){if(n===null){if(p.scrollHeight>s.screen.height)return;p.classList.add("hide-scrollbar")}else clearTimeout(n);n=setTimeout(Q,300)},N=function(E){n!==null&&E==="remove"&&(clearTimeout(n),Q()),window[`${E}EventListener`]("resize",V)},n=null;const p=document.body;k(()=>e.container!==!0?"add":"remove",N),e.container!==!0&&N("add"),Bt(()=>{N("remove")})}return()=>{const n=je(r.default,[d(Xt,{onScroll:b}),d(Ce,{onResize:C})]),p=d("div",{class:i.value,style:_.value,ref:e.container===!0?void 0:a,tabindex:-1},n);return e.container===!0?d("div",{class:"q-layout-container overflow-hidden",ref:a},[d(Ce,{onResize:L}),d("div",{class:"absolute-full",style:B.value},[d("div",{class:"scroll",style:q.value},[p])])]):p}}});function Me(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const r=parseInt(e,10);return isNaN(r)?0:r}var He=Ct({name:"close-popup",beforeMount(e,{value:r}){const l={depth:Me(r),handler(s){l.depth!==0&&setTimeout(()=>{const a=pt(e);a!==void 0&&Lt(a,s,l.depth)})},handlerKey(s){It(s,13)===!0&&l.handler(s)}};e.__qclosepopup=l,e.addEventListener("click",l.handler),e.addEventListener("keyup",l.handlerKey)},updated(e,{value:r,oldValue:l}){r!==l&&(e.__qclosepopup.depth=Me(r))},beforeUnmount(e){const r=e.__qclosepopup;e.removeEventListener("click",r.handler),e.removeEventListener("keyup",r.handlerKey),delete e.__qclosepopup}}),va=P({name:"QBreadcrumbsEl",props:{...Te,label:String,icon:String,tag:{type:String,default:"span"}},emits:["click"],setup(e,{slots:r}){const{linkTag:l,linkAttrs:s,linkClass:a,navigateOnClick:o}=$t(),v=u(()=>({class:"q-breadcrumbs__el q-link flex inline items-center relative-position "+(e.disable!==!0?"q-link--focusable"+a.value:"q-breadcrumbs__el--disable"),...s.value,onClick:o})),S=u(()=>"q-breadcrumbs__el-icon"+(e.label!==void 0?" q-breadcrumbs__el-icon--with-label":""));return()=>{const g=[];return e.icon!==void 0&&g.push(d(G,{class:S.value,name:e.icon})),e.label!==void 0&&g.push(e.label),d(l.value,{...v.value},je(r.default,g))}}});const fa=["",!0];var ha=P({name:"QBreadcrumbs",props:{...Tt,separator:{type:String,default:"/"},separatorColor:String,activeColor:{type:String,default:"primary"},gutter:{type:String,validator:e=>["none","xs","sm","md","lg","xl"].includes(e),default:"sm"}},setup(e,{slots:r}){const l=Qt(e),s=u(()=>`flex items-center ${l.value}${e.gutter==="none"?"":` q-gutter-${e.gutter}`}`),a=u(()=>e.separatorColor?` text-${e.separatorColor}`:""),o=u(()=>` text-${e.activeColor}`);return()=>{const v=zt(J(r.default));if(v.length===0)return;let S=1;const g=[],h=v.filter(_=>_.type!==void 0&&_.type.name==="QBreadcrumbsEl").length,i=r.separator!==void 0?r.separator:()=>e.separator;return v.forEach(_=>{if(_.type!==void 0&&_.type.name==="QBreadcrumbsEl"){const B=S<h,q=_.props!==null&&fa.includes(_.props.disable),b=(B===!0?"":" q-breadcrumbs--last")+(q!==!0&&B===!0?o.value:"");S++,g.push(d("div",{class:`flex items-center${b}`},[_])),B===!0&&g.push(d("div",{class:"q-breadcrumbs__separator"+a.value},i()))}else g.push(_)}),d("div",{class:"q-breadcrumbs"},[d("div",{class:s.value},g)])}}});const ma={key:0,name:"breadcrumb",style:{margin:"0px 0px 0px 8px"}},ga=be({__name:"Breadcrumbs",props:{showIcon:{type:Boolean,default:!0}},setup(e){const r=At();return(l,s)=>(T(),R(ha,{class:"flex items-center","active-color":"none"},{default:w(()=>[f(Pt,{appear:"","enter-active-class":"animated fadeInRight"},{default:w(()=>[(T(!0),ae(ve,null,Ke(fe(r).getBreadCrumbs,(a,o)=>(T(),ae(ve,null,[a.title?(T(),R(va,{name:"breadcrumb",label:a.title,icon:e.showIcon?a.icon:void 0,key:o+a.title},{default:w(()=>[fe(r).getBreadCrumbs.length!==o+1?(T(),ae("div",ma," / ")):he("",!0)]),_:2},1032,["label","icon"])):he("",!0)],64))),256))]),_:1})]),_:1}))}}),X=Ot({}),ba=Object.keys(Te);var ya=P({name:"QExpansionItem",props:{...Te,...Ee,...pe,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:Number,headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...Fe,"click","afterShow","afterHide"],setup(e,{slots:r,emit:l}){const{proxy:{$q:s}}=Z(),a=Le(e,s),o=$(e.modelValue!==null?e.modelValue:e.defaultOpened),v=$(null),S=Be(),{show:g,hide:h,toggle:i}=We({showing:o});let _,B;const q=u(()=>`q-expansion-item q-item-type q-expansion-item--${o.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),b=u(()=>{if(e.contentInsetLevel===void 0)return null;const m=s.lang.rtl===!0?"Right":"Left";return{["padding"+m]:e.contentInsetLevel*56+"px"}}),C=u(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),L=u(()=>{const m={};return ba.forEach(A=>{m[A]=e[A]}),m}),x=u(()=>C.value===!0||e.expandIconToggle!==!0),c=u(()=>e.expandedIcon!==void 0&&o.value===!0?e.expandedIcon:e.expandIcon||s.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),I=u(()=>e.disable!==!0&&(C.value===!0||e.expandIconToggle===!0)),n=u(()=>({expanded:o.value===!0,detailsId:e.targetUid,toggle:i,show:g,hide:h})),p=u(()=>{const m=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:s.lang.label[o.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":o.value===!0?"true":"false","aria-controls":S,"aria-label":m}});k(()=>e.group,m=>{B!==void 0&&B(),m!==void 0&&F()});function Q(m){C.value!==!0&&i(m),l("click",m)}function V(m){m.keyCode===13&&N(m,!0)}function N(m,A){A!==!0&&v.value!==null&&v.value.focus(),i(m),Mt(m)}function E(){l("afterShow")}function M(){l("afterHide")}function F(){_===void 0&&(_=Be()),o.value===!0&&(X[e.group]=_);const m=k(o,H=>{H===!0?X[e.group]=_:X[e.group]===_&&delete X[e.group]}),A=k(()=>X[e.group],(H,ye)=>{ye===_&&H!==void 0&&H!==_&&h()});B=()=>{m(),A(),X[e.group]===_&&delete X[e.group],B=void 0}}function re(){const m={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},A=[d(G,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&o.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:c.value})];return I.value===!0&&(Object.assign(m,{tabindex:0,...p.value,onClick:N,onKeyup:V}),A.unshift(d("div",{ref:v,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),d(D,m,()=>A)}function j(){let m;return r.header!==void 0?m=[].concat(r.header(n.value)):(m=[d(D,()=>[d(oe,{lines:e.labelLines},()=>e.label||""),e.caption?d(oe,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&m[e.switchToggleSide===!0?"push":"unshift"](d(D,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>d(G,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&m[e.switchToggleSide===!0?"unshift":"push"](re()),m}function ne(){const m={ref:"item",style:e.headerStyle,class:e.headerClass,dark:a.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return x.value===!0&&(m.clickable=!0,m.onClick=Q,Object.assign(m,C.value===!0?L.value:p.value)),d(me,m,j)}function ue(){return ie(d("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:b.value,id:S},J(r.default)),[[Dt,o.value]])}function ee(){const m=[ne(),d(Zt,{duration:e.duration,onShow:E,onHide:M},ue)];return e.expandSeparator===!0&&m.push(d(te,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:a.value}),d(te,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:a.value})),m}return e.group!==void 0&&F(),Ie(()=>{B!==void 0&&B()}),()=>d("div",{class:q.value},[d("div",{class:"q-expansion-item__container relative-position"},ee())])}});const wa=be({__name:"MainMenuItem",props:{menuRouter:{default:()=>[]},initLevel:{default:0},duration:{default:150},basePath:{default:""}},setup(e){const r=Ht(),l=Ge(),s=u(()=>v=>r.fullPath.startsWith(v)?"baseRootItemActive":""),a=(v,S)=>v===""?S:v+"/"+S,o=(v,S)=>{const g=v===""?S:v+"/"+S;l.push(g)};return(v,S)=>{const g=Je("main-menu-item",!0);return T(!0),ae(ve,null,Ke(e.menuRouter,(h,i)=>{var _,B,q,b;return T(),ae(ve,null,[((_=h.meta)==null?void 0:_.isHidden)!==!0?(T(),ae("div",{class:"main-menu-item",key:i},[h.children?(T(),R(ya,{key:1,class:Vt(fe(s)(h.path)),duration:e.duration,"default-opened":(B=h.meta)==null?void 0:B.isOpen,"header-inset-level":e.initLevel,icon:(q=h.meta)==null?void 0:q.icon,label:(b=h.meta)==null?void 0:b.title},{default:w(()=>[f(g,{"menu-router":h.children,"init-level":e.initLevel+.2,"base-path":e.basePath===""?h.path:e.basePath+"/"+h.path,duration:e.duration},null,8,["menu-router","init-level","base-path","duration"])]),_:2},1032,["class","duration","default-opened","header-inset-level","icon","label"])):ie((T(),R(me,{key:0,exact:h.path==="/",clickable:"","inset-level":e.initLevel,"active-class":"mainItemActive",active:v.$route.fullPath===a(e.basePath,h.path),onClick:C=>o(e.basePath,h.path)},{default:w(()=>[f(D,{avatar:""},{default:w(()=>{var C;return[f(G,{name:(C=h.meta)==null?void 0:C.icon},null,8,["name"])]}),_:2},1024),f(D,null,{default:w(()=>{var C;return[Y(Xe((C=h.meta)==null?void 0:C.title),1)]}),_:2},1024),a(e.basePath,h.path)==="#"?(T(),R(D,{key:0,side:""},{default:w(()=>[f(G,{name:"fa-solid fa-up-right-from-square",size:"10px"})]),_:1})):he("",!0)]),_:2},1032,["exact","inset-level","active","onClick"])),[[Rt]])])):he("",!0)],64)}),256)}}});var _a=Ue(wa,[["__scopeId","data-v-26b62485"]]);const xa=be({__name:"MainMenu",setup(e){const r={right:"1px",borderRadius:"5px",backgroundColor:"#616161",width:"5px"},l=Et[1].children;return(s,a)=>(T(),R(Yt,{"thumb-style":r},{default:w(()=>[f(Ze,null,{default:w(()=>[f(_a,{"menu-router":fe(l),"base-path":"/main"},null,8,["menu-router"])]),_:1})]),_:1}))}});const Sa=e=>(Nt("data-v-11c0a9cd"),e=e(),jt(),e),qa={class:"absolute-bottom bg-transparent"},ka=Sa(()=>Ye("img",{src:"icons/logo.png",width:"56"},null,-1)),Ba=be({__name:"MainLayout",setup(e){const r=$(!1);function l(){r.value=!r.value}const s=Ge(),a=()=>{s.push("/")};return(o,v)=>{const S=Je("router-view");return T(),R(ca,{view:"lHh Lpr lFf",class:"full-height"},{default:w(()=>[f(ua,{elevated:""},{default:w(()=>[f(ra,null,{default:w(()=>[f(le,{class:"q-mr-sm",flat:"",dense:"",round:"",icon:r.value===!0?"menu_open":"menu","aria-label":"Menu",onClick:l},null,8,["icon"]),f(te,{dark:"",vertical:"",inset:""}),f(ga,{"show-icon":!1,style:{padding:"10px"}}),f(ta),f(le,{dense:"",flat:"",icon:o.$q.fullscreen.isActive?"fullscreen_exit":"fullscreen",onClick:v[0]||(v[0]=g=>o.$q.fullscreen.toggle())},{default:w(()=>[f(Kt,null,{default:w(()=>[Y(Xe(o.$q.fullscreen.isActive?"\u9000\u51FA\u5168\u5C4F":"\u5168\u5C4F\u6A21\u5F0F"),1)]),_:1})]),_:1},8,["icon"]),f(te,{dark:"",vertical:"",inset:""}),f(Ut,{round:"",flat:"",class:"q-mr-sm q-ml-sm"}),f(te,{dark:"",vertical:"",inset:""}),f(ia,{round:"",flat:"",icon:"account_circle"},{default:w(()=>[f(Ze,{style:{"min-width":"220px"}},{default:w(()=>[f(oe,{header:""},{default:w(()=>[Y("\u8BBE\u7F6E")]),_:1}),ie((T(),R(me,{clickable:"",tabindex:"0"},{default:w(()=>[f(D,{avatar:""},{default:w(()=>[f(aa,{icon:"lock_person",color:"secondary","text-color":"white"})]),_:1}),f(D,null,{default:w(()=>[f(oe,null,{default:w(()=>[Y("\u8D26\u6237\u4E0E\u5B89\u5168")]),_:1})]),_:1}),f(D,{side:""},{default:w(()=>[f(G,{name:"chevron_right"})]),_:1})]),_:1})),[[He]]),f(te,{inset:"",spaced:""}),ie((T(),R(me,{clickable:"",tabindex:"0"},{default:w(()=>[f(D),f(D,{onClick:a},{default:w(()=>[f(oe,null,{default:w(()=>[Y("\u9000\u51FA\u767B\u5F55")]),_:1})]),_:1}),f(D)]),_:1})),[[He]])]),_:1})]),_:1})]),_:1})]),_:1}),f(sa,{modelValue:r.value,"onUpdate:modelValue":v[1]||(v[1]=g=>r.value=g),width:230,"show-if-above":""},{default:w(()=>[f(Jt,{class:"absolute-top",src:"icons/material.png",style:{height:"150px"}},{default:w(()=>[Ye("div",qa,[ka,f(Oe,{shrink:""},{default:w(()=>[Y(" Mixed ")]),_:1}),f(Oe,{style:{"font-size":"15px"}},{default:w(()=>[Y(" @www.ohtudou.com ")]),_:1})])]),_:1}),f(xa,{style:{height:"calc(100% - 160px)","margin-top":"160px","border-right":"1px solid #ddd"}})]),_:1},8,["modelValue"]),f(da,{class:"app-main full-height"},{default:w(()=>[f(S,null,{default:w(({Component:g,route:h})=>[f(Ft,{name:"fade-slide",mode:"out-in",appear:""},{default:w(()=>[(T(),R(Wt(g),{key:h.path}))]),_:2},1024)]),_:1})]),_:1})]),_:1})}}});var Pa=Ue(Ba,[["__scopeId","data-v-11c0a9cd"]]);export{Pa as default};
