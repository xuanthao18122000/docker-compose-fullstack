import{V as H,W as Q,X as k,Y as ee,r,Z as O,_ as T,$ as te,a0 as _,a1 as ne,a2 as A,j as F,a as x,T as X,a3 as le,a4 as oe,a5 as re,a6 as M,B as ae,a7 as se,a8 as ie,a9 as V,aa as ce,ab as de,ac as me,ad as pe,ae as fe}from"./index-f34e1a2a.js";import{C as R}from"./common-button-725fbdf6.js";const ue=e=>{const{componentCls:t,descriptionsSmallPadding:o,descriptionsDefaultPadding:n,descriptionsMiddlePadding:l,descriptionsBg:a}=e;return{[`&${t}-bordered`]:{[`${t}-view`]:{border:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"> table":{tableLayout:"auto",borderCollapse:"collapse"}},[`${t}-item-label, ${t}-item-content`]:{padding:n,borderInlineEnd:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderInlineEnd:"none"}},[`${t}-item-label`]:{color:e.colorTextSecondary,backgroundColor:a,"&::after":{display:"none"}},[`${t}-row`]:{borderBottom:`${e.lineWidth}px ${e.lineType} ${e.colorSplit}`,"&:last-child":{borderBottom:"none"}},[`&${t}-middle`]:{[`${t}-item-label, ${t}-item-content`]:{padding:l}},[`&${t}-small`]:{[`${t}-item-label, ${t}-item-content`]:{padding:o}}}}},ge=e=>{const{componentCls:t,descriptionsExtraColor:o,descriptionItemPaddingBottom:n,descriptionsItemLabelColonMarginRight:l,descriptionsItemLabelColonMarginLeft:a,descriptionsTitleMarginBottom:s}=e;return{[t]:Object.assign(Object.assign(Object.assign({},k(e)),ue(e)),{["&-rtl"]:{direction:"rtl"},[`${t}-header`]:{display:"flex",alignItems:"center",marginBottom:s},[`${t}-title`]:Object.assign(Object.assign({},ee),{flex:"auto",color:e.colorText,fontWeight:e.fontWeightStrong,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG}),[`${t}-extra`]:{marginInlineStart:"auto",color:o,fontSize:e.fontSize},[`${t}-view`]:{width:"100%",borderRadius:e.borderRadiusLG,table:{width:"100%",tableLayout:"fixed"}},[`${t}-row`]:{"> th, > td":{paddingBottom:n},"&:last-child":{borderBottom:"none"}},[`${t}-item-label`]:{color:e.colorTextTertiary,fontWeight:"normal",fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"start","&::after":{content:'":"',position:"relative",top:-.5,marginInline:`${a}px ${l}px`},[`&${t}-item-no-colon::after`]:{content:'""'}},[`${t}-item-no-label`]:{"&::after":{margin:0,content:'""'}},[`${t}-item-content`]:{display:"table-cell",flex:1,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight,wordBreak:"break-word",overflowWrap:"break-word"},[`${t}-item`]:{paddingBottom:0,verticalAlign:"top","&-container":{display:"flex",[`${t}-item-label`]:{display:"inline-flex",alignItems:"baseline"},[`${t}-item-content`]:{display:"inline-flex",alignItems:"baseline"}}},"&-middle":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingSM}}},"&-small":{[`${t}-row`]:{"> th, > td":{paddingBottom:e.paddingXS}}}})}},be=H("Descriptions",e=>{const t=e.colorFillAlter,o=e.fontSizeSM*e.lineHeightSM,n=e.colorText,l=`${e.paddingXS}px ${e.padding}px`,a=`${e.padding}px ${e.paddingLG}px`,s=`${e.paddingSM}px ${e.paddingLG}px`,i=e.padding,p=e.marginXS,d=e.marginXXS/2,m=Q(e,{descriptionsBg:t,descriptionsTitleMarginBottom:o,descriptionsExtraColor:n,descriptionItemPaddingBottom:i,descriptionsSmallPadding:l,descriptionsDefaultPadding:a,descriptionsMiddlePadding:s,descriptionsItemLabelColonMarginRight:p,descriptionsItemLabelColonMarginLeft:d});return[ge(m)]}),ye=e=>{let{children:t}=e;return t},xe=ye;function N(e){return e!=null}const he=e=>{let{itemPrefixCls:t,component:o,span:n,className:l,style:a,labelStyle:s,contentStyle:i,bordered:p,label:d,content:m,colon:h}=e;const b=o;return p?r.createElement(b,{className:O({[`${t}-item-label`]:N(d),[`${t}-item-content`]:N(m)},l),style:a,colSpan:n},N(d)&&r.createElement("span",{style:s},d),N(m)&&r.createElement("span",{style:i},m)):r.createElement(b,{className:O(`${t}-item`,l),style:a,colSpan:n},r.createElement("div",{className:`${t}-item-container`},(d||d===0)&&r.createElement("span",{className:O(`${t}-item-label`,{[`${t}-item-no-colon`]:!h}),style:s},d),(m||m===0)&&r.createElement("span",{className:O(`${t}-item-content`),style:i},m)))},I=he;function L(e,t,o){let{colon:n,prefixCls:l,bordered:a}=t,{component:s,type:i,showLabel:p,showContent:d,labelStyle:m,contentStyle:h}=o;return e.map((b,C)=>{let{props:{label:v,children:g,prefixCls:y=l,className:E,style:f,labelStyle:S,contentStyle:P,span:w=1},key:c}=b;return typeof s=="string"?r.createElement(I,{key:`${i}-${c||C}`,className:E,style:f,labelStyle:Object.assign(Object.assign({},m),S),contentStyle:Object.assign(Object.assign({},h),P),span:w,colon:n,component:s,itemPrefixCls:y,bordered:a,label:p?v:null,content:d?g:null}):[r.createElement(I,{key:`label-${c||C}`,className:E,style:Object.assign(Object.assign(Object.assign({},m),f),S),span:1,colon:n,component:s[0],itemPrefixCls:y,bordered:a,label:v}),r.createElement(I,{key:`content-${c||C}`,className:E,style:Object.assign(Object.assign(Object.assign({},h),f),P),span:w*2-1,component:s[1],itemPrefixCls:y,bordered:a,content:g})]})}const Ce=e=>{const t=r.useContext(G),{prefixCls:o,vertical:n,row:l,index:a,bordered:s}=e;return n?r.createElement(r.Fragment,null,r.createElement("tr",{key:`label-${a}`,className:`${o}-row`},L(l,e,Object.assign({component:"th",type:"label",showLabel:!0},t))),r.createElement("tr",{key:`content-${a}`,className:`${o}-row`},L(l,e,Object.assign({component:"td",type:"content",showContent:!0},t)))):r.createElement("tr",{key:a,className:`${o}-row`},L(l,e,Object.assign({component:s?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},t)))},$e=Ce;var ve=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const G=r.createContext({}),K={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function Se(e,t){if(typeof e=="number")return e;if(typeof e=="object")for(let o=0;o<_.length;o++){const n=_[o];if(t[n]&&e[n]!==void 0)return e[n]||K[n]}return 3}function D(e,t,o){let n=e;return(o===void 0||o>t)&&(n=A(e,{span:t})),n}function Oe(e,t){const o=ne(e).filter(s=>s),n=[];let l=[],a=t;return o.forEach((s,i)=>{var p;const d=(p=s.props)===null||p===void 0?void 0:p.span,m=d||1;if(i===o.length-1){l.push(D(s,a,d)),n.push(l);return}m<a?(a-=m,l.push(s)):(l.push(D(s,a,m)),n.push(l),a=t,l=[])}),n}function z(e){var{prefixCls:t,title:o,extra:n,column:l=K,colon:a=!0,bordered:s,layout:i,children:p,className:d,rootClassName:m,style:h,size:b,labelStyle:C,contentStyle:v}=e,g=ve(e,["prefixCls","title","extra","column","colon","bordered","layout","children","className","rootClassName","style","size","labelStyle","contentStyle"]);const{getPrefixCls:y,direction:E}=r.useContext(T),f=y("descriptions",t),[S,P]=r.useState({}),w=Se(l,S),[c,u]=be(f),$=te();r.useEffect(()=>{const B=$.subscribe(j=>{typeof l=="object"&&P(j)});return()=>{$.unsubscribe(B)}},[]);const Z=Oe(p,w),J=r.useMemo(()=>({labelStyle:C,contentStyle:v}),[C,v]);return c(r.createElement(G.Provider,{value:J},r.createElement("div",Object.assign({className:O(f,{[`${f}-${b}`]:b&&b!=="default",[`${f}-bordered`]:!!s,[`${f}-rtl`]:E==="rtl"},d,m,u),style:h},g),(o||n)&&r.createElement("div",{className:`${f}-header`},o&&r.createElement("div",{className:`${f}-title`},o),n&&r.createElement("div",{className:`${f}-extra`},n)),r.createElement("div",{className:`${f}-view`},r.createElement("table",null,r.createElement("tbody",null,Z.map((B,j)=>r.createElement($e,{key:j,index:j,colon:a,prefixCls:f,vertical:i==="vertical",bordered:s,row:B}))))))))}z.Item=xe;const Ee=({label:e,className:t})=>F("span",{className:t,children:[x(X.Text,{children:e})," ",x("span",{className:"text-red-400",children:"*"})]}),Pe=e=>{const{componentCls:t,iconCls:o,zIndexPopup:n,colorText:l,colorWarning:a,marginXS:s,fontSize:i,fontWeightStrong:p,lineHeight:d}=e;return{[t]:{zIndex:n,[`${t}-inner-content`]:{color:l},[`${t}-message`]:{position:"relative",marginBottom:s,color:l,fontSize:i,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${o}`]:{color:a,fontSize:i,flex:"none",lineHeight:1,paddingTop:(Math.round(i*d)-i)/2},"&-title":{flex:"auto",marginInlineStart:s},"&-title-only":{fontWeight:p}},[`${t}-description`]:{position:"relative",marginInlineStart:i+s,marginBottom:s,color:l,fontSize:i},[`${t}-buttons`]:{textAlign:"end",button:{marginInlineStart:s}}}}},q=H("Popconfirm",e=>Pe(e),e=>{const{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}});var we=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const U=e=>{const{prefixCls:t,okButtonProps:o,cancelButtonProps:n,title:l,description:a,cancelText:s,okText:i,okType:p="primary",icon:d=r.createElement(V,null),showCancel:m=!0,close:h,onConfirm:b,onCancel:C}=e,{getPrefixCls:v}=r.useContext(T),[g]=oe("Popconfirm",re.Popconfirm);return r.createElement("div",{className:`${t}-inner-content`},r.createElement("div",{className:`${t}-message`},d&&r.createElement("span",{className:`${t}-message-icon`},d),r.createElement("div",{className:O(`${t}-message-title`,{[`${t}-message-title-only`]:!!a})},M(l))),a&&r.createElement("div",{className:`${t}-description`},M(a)),r.createElement("div",{className:`${t}-buttons`},m&&r.createElement(ae,Object.assign({onClick:C,size:"small"},n),s??(g==null?void 0:g.cancelText)),r.createElement(se,{buttonProps:Object.assign(Object.assign({size:"small"},ie(p)),o),actionFn:b,close:h,prefixCls:v("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},i??(g==null?void 0:g.okText))))};function je(e){const{prefixCls:t,placement:o,className:n,style:l}=e,a=we(e,["prefixCls","placement","className","style"]),{getPrefixCls:s}=r.useContext(T),i=s("popconfirm",t),[p]=q(i);return p(r.createElement(le,{placement:o,className:O(i,n),style:l,content:r.createElement(U,Object.assign({prefixCls:i},a))}))}var Ne=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(o[n[l]]=e[n[l]]);return o};const Y=r.forwardRef((e,t)=>{const{getPrefixCls:o}=r.useContext(T),[n,l]=ce(!1,{value:e.open,defaultValue:e.defaultOpen}),a=(c,u)=>{var $;l(c,!0),($=e.onOpenChange)===null||$===void 0||$.call(e,c,u)},s=c=>{a(!1,c)},i=c=>{var u;return(u=e.onConfirm)===null||u===void 0?void 0:u.call(globalThis,c)},p=c=>{var u;a(!1,c),(u=e.onCancel)===null||u===void 0||u.call(globalThis,c)},d=c=>{c.keyCode===pe.ESC&&n&&a(!1,c)},m=c=>{const{disabled:u=!1}=e;u||a(c)},{prefixCls:h,placement:b="top",trigger:C="click",okType:v="primary",icon:g=r.createElement(V,null),children:y,overlayClassName:E}=e,f=Ne(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName"]),S=o("popconfirm",h),P=O(S,E),[w]=q(S);return w(r.createElement(de,Object.assign({},me(f,["title"]),{trigger:C,placement:b,onOpenChange:m,open:n,ref:t,overlayClassName:P,content:r.createElement(U,Object.assign({okType:v,icon:g},e,{prefixCls:S,close:s,onConfirm:i,onCancel:p})),"data-popover-inject":!0}),A(y,{onKeyDown:c=>{var u,$;r.isValidElement(y)&&(($=y==null?void 0:(u=y.props).onKeyDown)===null||$===void 0||$.call(u,c)),d(c)}})))});Y._InternalPanelDoNotUseOrYouWillBeFired=je;const Te=Y,W=({title:e="Bạn có chắc chắn thực hiện?",okText:t="Đồng ý",cancelText:o="Hủy",button:n,...l})=>x(Te,{title:e,okText:t,cancelText:o,...l,children:n}),Le=({isCancelDisabled:e,isOkDisabled:t,isOkLoading:o,onCancel:n,onOk:l,cancelText:a="Hủy bỏ",isAddType:s=!1})=>F(fe,{className:"flex justify-end mt-4",children:[x(W,{onConfirm:n,title:"Bạn có chắc chắn hủy bỏ?",button:x(R,{action:"cancel",disabled:e,className:"flex",children:a})}),x(W,{title:"Bạn có chắc chắn muốn thực hiện?",onConfirm:l,button:x(R,{action:s?"add":"save",disabled:t,loading:o,className:"flex",children:s?"Thêm":"Cập nhật"})})]}),ze=({column:e=1,bordered:t=!0,data:o,...n})=>x(z,{column:e,bordered:t,...n,children:o.map(l=>{if(l.isShow===!1)return null;const a=l.isRequired?x(Ee,{label:l.labelText}):x(X.Text,{children:l.labelText});return x(z.Item,{label:a,children:l.descriptionElement},l.labelText)})});export{ze as C,z as D,Le as M};
