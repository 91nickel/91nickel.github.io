import{r as w,R as b,u as et,a as tt,b as rt,c as st,d as ot,f as te,e as z,g as V,B as x,h as re,i as ce,p as Oe,U as nt,T as it,L as lt,k as ye,l as Je,m as le,n as Re,o as ct,q as at,s as ut,j as G,t as dt,v as pt,w as ft,x as mt,C as yt,y as Fe}from"./index-CRr02VuG.js";import{E as vt}from"./ErrorBoundary-D2Ihcbsg.js";function bt(t=null){const e=w.createContext(t);return[({children:s,value:n})=>b.createElement(e.Provider,{value:n},s),()=>w.useContext(e)]}const gt=b.useId||(()=>{});function Et(){const t=gt();return t?`mantine-${t.replace(/:/g,"")}`:""}function Qe(t){const e=Et(),[r,o]=w.useState(e);return et(()=>{o(tt())},[]),typeof t=="string"?t:typeof window>"u"?e:r}function ht({classNames:t,styles:e,props:r,stylesCtx:o}){const s=rt();return{resolvedClassNames:st({theme:s,classNames:t,props:r,stylesCtx:o||void 0}),resolvedStyles:ot({theme:s,styles:e,props:r,stylesCtx:o||void 0})}}var he={root:"m-8d3f4000",icon:"m-8d3afb97",loader:"m-302b9fb1",group:"m-1a0f1b21"};const Te={orientation:"horizontal"},It=re((t,{borderWidth:e})=>({group:{"--ai-border-width":ce(e)}})),ze=te((t,e)=>{const r=z("ActionIconGroup",Te,t),{className:o,style:s,classNames:n,styles:l,unstyled:a,orientation:c,vars:u,borderWidth:g,variant:d,mod:_,...h}=z("ActionIconGroup",Te,t),E=V({name:"ActionIconGroup",props:r,classes:he,className:o,style:s,classNames:n,styles:l,unstyled:a,vars:u,varsResolver:It,rootSelector:"group"});return b.createElement(x,{...E("group"),ref:e,variant:d,mod:[{"data-orientation":c},_],role:"group",...h})});ze.classes=he;ze.displayName="@mantine/core/ActionIconGroup";const St={},wt=re((t,{size:e,radius:r,variant:o,gradient:s,color:n,autoContrast:l})=>{const a=t.variantColorResolver({color:n||t.primaryColor,theme:t,gradient:s,variant:o||"filled",autoContrast:l});return{root:{"--ai-size":ye(e,"ai-size"),"--ai-radius":r===void 0?void 0:Je(r),"--ai-bg":n||o?a.background:void 0,"--ai-hover":n||o?a.hover:void 0,"--ai-hover-color":n||o?a.hoverColor:void 0,"--ai-color":a.color,"--ai-bd":n||o?a.border:void 0}}}),Ie=Oe((t,e)=>{const r=z("ActionIcon",St,t),{className:o,unstyled:s,variant:n,classNames:l,styles:a,style:c,loading:u,loaderProps:g,size:d,color:_,radius:h,__staticSelector:E,gradient:I,vars:p,children:$,disabled:S,"data-disabled":y,autoContrast:N,mod:L,...j}=r,R=V({name:["ActionIcon",E],props:r,className:o,style:c,classes:he,classNames:l,styles:a,unstyled:s,vars:p,varsResolver:wt});return b.createElement(nt,{...R("root",{active:!S&&!u&&!y}),...j,unstyled:s,variant:n,size:d,disabled:S||u,ref:e,mod:[{loading:u,disabled:S||y},L]},b.createElement(it,{mounted:!!u,transition:"slide-down",duration:150},F=>b.createElement(x,{component:"span",...R("loader",{style:F}),"aria-hidden":!0},b.createElement(lt,{color:"var(--ai-color)",size:"calc(var(--ai-size) * 0.55)",...g}))),b.createElement(x,{component:"span",mod:{loading:u},...R("icon")},$))});Ie.classes=he;Ie.displayName="@mantine/core/ActionIcon";Ie.Group=ze;const[_t,Se]=bt({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var B={wrapper:"m-6c018570",input:"m-8fb7ebe7",section:"m-82577fc2",placeholder:"m-88bacfd0",root:"m-46b77525",label:"m-8fdc1311",required:"m-78a94662",error:"m-8f816625",description:"m-fe47ce59"};const Be={},$t=re((t,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${le(e)} - ${ce(2)})`}})),we=te((t,e)=>{const r=z("InputDescription",Be,t),{classNames:o,className:s,style:n,styles:l,unstyled:a,vars:c,size:u,__staticSelector:g,__inheritStyles:d=!0,variant:_,...h}=z("InputDescription",Be,r),E=Se(),I=V({name:["InputWrapper",g],props:r,classes:B,className:s,style:n,classNames:o,styles:l,unstyled:a,rootSelector:"description",vars:c,varsResolver:$t}),p=d&&(E==null?void 0:E.getStyles)||I;return b.createElement(x,{component:"p",ref:e,variant:_,size:u,...p("description",E!=null&&E.getStyles?{className:s,style:n}:void 0),...h})});we.classes=B;we.displayName="@mantine/core/InputDescription";const Pt={},jt=re((t,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${le(e)} - ${ce(2)})`}})),_e=te((t,e)=>{const r=z("InputError",Pt,t),{classNames:o,className:s,style:n,styles:l,unstyled:a,vars:c,size:u,__staticSelector:g,__inheritStyles:d=!0,variant:_,...h}=r,E=V({name:["InputWrapper",g],props:r,classes:B,className:s,style:n,classNames:o,styles:l,unstyled:a,rootSelector:"error",vars:c,varsResolver:jt}),I=Se(),p=d&&(I==null?void 0:I.getStyles)||E;return b.createElement(x,{component:"p",ref:e,variant:_,size:u,...p("error",I!=null&&I.getStyles?{className:s,style:n}:void 0),...h})});_e.classes=B;_e.displayName="@mantine/core/InputError";const Me={labelElement:"label"},Ct=re((t,{size:e})=>({label:{"--input-label-size":le(e),"--input-asterisk-color":void 0}})),$e=te((t,e)=>{const r=z("InputLabel",Me,t),{classNames:o,className:s,style:n,styles:l,unstyled:a,vars:c,labelElement:u,size:g,required:d,htmlFor:_,onMouseDown:h,children:E,__staticSelector:I,variant:p,mod:$,...S}=z("InputLabel",Me,r),y=V({name:["InputWrapper",I],props:r,classes:B,className:s,style:n,classNames:o,styles:l,unstyled:a,rootSelector:"label",vars:c,varsResolver:Ct}),N=Se(),L=(N==null?void 0:N.getStyles)||y;return b.createElement(x,{...L("label",N!=null&&N.getStyles?{className:s,style:n}:void 0),component:u,variant:p,size:g,ref:e,htmlFor:u==="label"?_:void 0,mod:[{required:d},$],onMouseDown:j=>{h==null||h(j),!j.defaultPrevented&&j.detail>1&&j.preventDefault()},...S},E,d&&b.createElement("span",{...L("required"),"aria-hidden":!0}," *"))});$e.classes=B;$e.displayName="@mantine/core/InputLabel";const qe={},ke=te((t,e)=>{const r=z("InputPlaceholder",qe,t),{classNames:o,className:s,style:n,styles:l,unstyled:a,vars:c,__staticSelector:u,variant:g,error:d,mod:_,...h}=z("InputPlaceholder",qe,r),E=V({name:["InputPlaceholder",u],props:r,classes:B,className:s,style:n,classNames:o,styles:l,unstyled:a,rootSelector:"placeholder"});return b.createElement(x,{...E("placeholder"),mod:[{error:!!d},_],component:"span",variant:g,ref:e,...h})});ke.classes=B;ke.displayName="@mantine/core/InputPlaceholder";function Nt(t,{hasDescription:e,hasError:r}){const o=t.findIndex(c=>c==="input"),s=t[o-1],n=t[o+1];return{offsetBottom:e&&n==="description"||r&&n==="error",offsetTop:e&&s==="description"||r&&s==="error"}}const At={labelElement:"label",inputContainer:t=>t,inputWrapperOrder:["label","description","input","error"]},Ot=re((t,{size:e})=>({label:{"--input-label-size":le(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${le(e)} - ${ce(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${le(e)} - ${ce(2)})`}})),De=te((t,e)=>{const r=z("InputWrapper",At,t),{classNames:o,className:s,style:n,styles:l,unstyled:a,vars:c,size:u,variant:g,__staticSelector:d,inputContainer:_,inputWrapperOrder:h,label:E,error:I,description:p,labelProps:$,descriptionProps:S,errorProps:y,labelElement:N,children:L,withAsterisk:j,id:R,required:F,__stylesApiProps:Z,mod:J,...K}=r,T=V({name:["InputWrapper",d],props:Z||r,classes:B,className:s,style:n,classNames:o,styles:l,unstyled:a,vars:c,varsResolver:Ot}),k={size:u,variant:g,__staticSelector:d},A=Qe(R),U=typeof j=="boolean"?j:F,M=(y==null?void 0:y.id)||`${A}-error`,Q=(S==null?void 0:S.id)||`${A}-description`,C=A,P=!!I&&typeof I!="boolean",Y=!!p,q=`${P?M:""} ${Y?Q:""}`,ee=q.trim().length>0?q.trim():void 0,ae=($==null?void 0:$.id)||`${A}-label`,se=E&&b.createElement($e,{key:"label",labelElement:N,id:ae,htmlFor:C,required:U,...k,...$},E),oe=Y&&b.createElement(we,{key:"description",...S,...k,size:(S==null?void 0:S.size)||k.size,id:(S==null?void 0:S.id)||Q},p),fe=b.createElement(b.Fragment,{key:"input"},_(L)),ue=P&&b.createElement(_e,{...y,...k,size:(y==null?void 0:y.size)||k.size,key:"error",id:(y==null?void 0:y.id)||M},I),ne=h.map(ie=>{switch(ie){case"label":return se;case"input":return fe;case"description":return oe;case"error":return ue;default:return null}});return b.createElement(_t,{value:{getStyles:T,describedBy:ee,inputId:C,labelId:ae,...Nt(h,{hasDescription:Y,hasError:P})}},b.createElement(x,{ref:e,variant:g,size:u,mod:[{error:!!I},J],...T("root"),...K},ne))});De.classes=B;De.displayName="@mantine/core/InputWrapper";const Rt={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},zt=re((t,e,r)=>({wrapper:{"--input-margin-top":r.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":r.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":ye(e.size,"input-height"),"--input-fz":le(e.size),"--input-radius":e.radius===void 0?void 0:Je(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?ce(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?ce(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?ye(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),W=Oe((t,e)=>{const r=z("Input",Rt,t),{classNames:o,className:s,style:n,styles:l,unstyled:a,required:c,__staticSelector:u,__stylesApiProps:g,size:d,wrapperProps:_,error:h,disabled:E,leftSection:I,leftSectionProps:p,leftSectionWidth:$,rightSection:S,rightSectionProps:y,rightSectionWidth:N,rightSectionPointerEvents:L,leftSectionPointerEvents:j,variant:R,vars:F,pointer:Z,multiline:J,radius:K,id:T,withAria:k,withErrorStyles:A,mod:U,...M}=r,{styleProps:Q,rest:C}=Re(M),P=Se(),Y={offsetBottom:P==null?void 0:P.offsetBottom,offsetTop:P==null?void 0:P.offsetTop},q=V({name:["Input",u],props:g||r,classes:B,className:s,style:n,classNames:o,styles:l,unstyled:a,stylesCtx:Y,rootSelector:"wrapper",vars:F,varsResolver:zt}),ee=k?{required:c,disabled:E,"aria-invalid":!!h,"aria-describedby":P==null?void 0:P.describedBy,id:(P==null?void 0:P.inputId)||T}:{};return b.createElement(x,{...q("wrapper"),...Q,..._,mod:[{error:!!h&&A,pointer:Z,disabled:E,multiline:J,"data-with-right-section":!!S,"data-with-left-section":!!I},U],variant:R,size:d},I&&b.createElement("div",{...p,"data-position":"left",...q("section",{className:p==null?void 0:p.className,style:p==null?void 0:p.style})},I),b.createElement(x,{component:"input",...C,...ee,ref:e,required:c,mod:{disabled:E,error:!!h&&A},variant:R,...q("input")}),S&&b.createElement("div",{...y,"data-position":"right",...q("section",{className:y==null?void 0:y.className,style:y==null?void 0:y.style})},S))});W.classes=B;W.Wrapper=De;W.Label=$e;W.Error=_e;W.Description=we;W.Placeholder=ke;W.displayName="@mantine/core/Input";function kt(t,e,r){const o=z(t,e,r),{label:s,description:n,error:l,required:a,classNames:c,styles:u,className:g,unstyled:d,__staticSelector:_,__stylesApiProps:h,errorProps:E,labelProps:I,descriptionProps:p,wrapperProps:$,id:S,size:y,style:N,inputContainer:L,inputWrapperOrder:j,withAsterisk:R,variant:F,vars:Z,mod:J,...K}=o,{styleProps:T,rest:k}=Re(K),A={label:s,description:n,error:l,required:a,classNames:c,className:g,__staticSelector:_,__stylesApiProps:h||o,errorProps:E,labelProps:I,descriptionProps:p,unstyled:d,styles:u,size:y,style:N,inputContainer:L,inputWrapperOrder:j,withAsterisk:R,variant:F,id:S,mod:J,...$};return{...k,classNames:c,styles:u,unstyled:d,wrapperProps:{...A,...T},inputProps:{required:a,classNames:c,styles:u,unstyled:d,size:y,__staticSelector:_,__stylesApiProps:h||o,error:l,variant:F,id:S}}}const Dt={__staticSelector:"InputBase",withAria:!0},ve=Oe((t,e)=>{const{inputProps:r,wrapperProps:o,...s}=kt("InputBase",Dt,t);return b.createElement(W.Wrapper,{...o},b.createElement(W,{...r,...s,ref:e}))});ve.classes={...W.classes,...W.Wrapper.classes};ve.displayName="@mantine/core/InputBase";const Lt=({reveal:t})=>b.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},b.createElement("path",{d:t?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}));var je={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};const Wt={visibilityToggleIcon:Lt},Ft=re((t,{size:e})=>({root:{"--psi-icon-size":ye(e,"psi-icon-size"),"--psi-button-size":ye(e,"psi-button-size")}})),Le=te((t,e)=>{const r=z("PasswordInput",Wt,t),{classNames:o,className:s,style:n,styles:l,unstyled:a,vars:c,required:u,error:g,leftSection:d,disabled:_,id:h,variant:E,inputContainer:I,description:p,label:$,size:S,errorProps:y,descriptionProps:N,labelProps:L,withAsterisk:j,inputWrapperOrder:R,wrapperProps:F,radius:Z,rightSection:J,rightSectionWidth:K,rightSectionPointerEvents:T,leftSectionWidth:k,visible:A,defaultVisible:U,onVisibilityChange:M,visibilityToggleIcon:Q,visibilityToggleButtonProps:C,rightSectionProps:P,leftSectionProps:Y,leftSectionPointerEvents:q,mod:ee,...ae}=r,se=Qe(h),[oe,fe]=ct({value:A,defaultValue:U,finalValue:!1,onChange:M}),ue=()=>fe(!oe),ne=V({name:"PasswordInput",classes:je,props:r,className:s,style:n,classNames:o,styles:l,unstyled:a,vars:c,varsResolver:Ft}),{resolvedClassNames:ie,resolvedStyles:be}=ht({classNames:o,styles:l,props:r}),{styleProps:me,rest:i}=Re(ae),f=Q,m=b.createElement(Ie,{...ne("visibilityToggle"),disabled:_,radius:Z,"aria-hidden":!C,tabIndex:-1,...C,variant:"subtle",color:"gray",unstyled:a,onMouseDown:v=>{var D;v.preventDefault(),(D=C==null?void 0:C.onMouseDown)==null||D.call(C,v),ue()},onKeyDown:v=>{var D;(D=C==null?void 0:C.onKeyDown)==null||D.call(C,v),v.key===" "&&(v.preventDefault(),ue())}},b.createElement(f,{reveal:oe}));return b.createElement(W.Wrapper,{required:u,id:se,label:$,error:g,description:p,size:S,classNames:ie,styles:be,__staticSelector:"PasswordInput",errorProps:y,descriptionProps:N,unstyled:a,withAsterisk:j,inputWrapperOrder:R,inputContainer:I,variant:E,labelProps:{...L,htmlFor:se},mod:ee,...ne("root"),...me,...F},b.createElement(W,{component:"div",error:g,leftSection:d,size:S,classNames:{...ie,input:at(je.input,ie.input)},styles:be,radius:Z,disabled:_,__staticSelector:"PasswordInput",rightSectionWidth:K,rightSection:J??m,variant:E,unstyled:a,leftSectionWidth:k,rightSectionPointerEvents:T||"all",rightSectionProps:P,leftSectionProps:Y,leftSectionPointerEvents:q,withAria:!1},b.createElement("input",{required:u,"data-invalid":!!g||void 0,"data-with-left-section":!!d||void 0,...ne("innerInput"),disabled:_,id:se,ref:e,...i,autoComplete:i.autoComplete||"off",type:oe?"text":"password"})))});Le.classes={...ve.classes,...je};Le.displayName="@mantine/core/PasswordInput";const Tt={},We=te((t,e)=>{const r=z("TextInput",Tt,t);return b.createElement(ve,{component:"input",ref:e,...r,__staticSelector:"TextInput"})});We.classes=ve.classes;We.displayName="@mantine/core/TextInput";var Bt=function t(e,r){if(e===r)return!0;if(e&&r&&typeof e=="object"&&typeof r=="object"){if(e.constructor!==r.constructor)return!1;var o,s,n;if(Array.isArray(e)){if(o=e.length,o!=r.length)return!1;for(s=o;s--!==0;)if(!t(e[s],r[s]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if(n=Object.keys(e),o=n.length,o!==Object.keys(r).length)return!1;for(s=o;s--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[s]))return!1;for(s=o;s--!==0;){var l=n[s];if(!t(e[l],r[l]))return!1}return!0}return e!==e&&r!==r};const xe=ut(Bt);function Mt(t){if(!/^[0-9a-zA-Z-]+$/.test(t))throw new Error(`[@mantine/use-form] Form name "${t}" is invalid, it should contain only letters, numbers and dashes`)}const qt=typeof window<"u"?w.useLayoutEffect:w.useEffect;function O(t,e){qt(()=>{if(t)return window.addEventListener(t,e),()=>window.removeEventListener(t,e)},[t])}function xt(t,e){t&&Mt(t),O(`mantine-form:${t}:set-field-value`,r=>e.setFieldValue(r.detail.path,r.detail.value)),O(`mantine-form:${t}:set-values`,r=>e.setValues(r.detail)),O(`mantine-form:${t}:set-initial-values`,r=>e.setInitialValues(r.detail)),O(`mantine-form:${t}:set-errors`,r=>e.setErrors(r.detail)),O(`mantine-form:${t}:set-field-error`,r=>e.setFieldError(r.detail.path,r.detail.error)),O(`mantine-form:${t}:clear-field-error`,r=>e.clearFieldError(r.detail)),O(`mantine-form:${t}:clear-errors`,e.clearErrors),O(`mantine-form:${t}:reset`,e.reset),O(`mantine-form:${t}:validate`,e.validate),O(`mantine-form:${t}:validate-field`,r=>e.validateField(r.detail)),O(`mantine-form:${t}:reorder-list-item`,r=>e.reorderListItem(r.detail.path,r.detail.payload)),O(`mantine-form:${t}:remove-list-item`,r=>e.removeListItem(r.detail.path,r.detail.index)),O(`mantine-form:${t}:insert-list-item`,r=>e.insertListItem(r.detail.path,r.detail.item,r.detail.index)),O(`mantine-form:${t}:set-dirty`,r=>e.setDirty(r.detail)),O(`mantine-form:${t}:set-touched`,r=>e.setTouched(r.detail)),O(`mantine-form:${t}:reset-dirty`,r=>e.resetDirty(r.detail)),O(`mantine-form:${t}:reset-touched`,e.resetTouched)}function Ce(t){return t===null||typeof t!="object"?{}:Object.keys(t).reduce((e,r)=>{const o=t[r];return o!=null&&o!==!1&&(e[r]=o),e},{})}function Zt(t){return e=>{if(!e)t(e);else if(typeof e=="function")t(e);else if(typeof e=="object"&&"nativeEvent"in e){const{currentTarget:r}=e;r instanceof HTMLInputElement?r.type==="checkbox"?t(r.checked):t(r.value):(r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement)&&t(r.value)}else t(e)}}function Ze(t,e){const r=Object.keys(t);if(typeof e=="string"){const o=r.filter(s=>s.startsWith(`${e}.`));return t[e]||o.some(s=>t[s])||!1}return r.some(o=>t[o])}function Ye(t,e){if(e===null||typeof e!="object")return{};const r={...e};return Object.keys(e).forEach(o=>{o.includes(`${String(t)}.`)&&delete r[o]}),r}function Ke(t,e){const r=t.substring(e.length+1).split(".")[0];return parseInt(r,10)}function Ue(t,e,r,o){if(e===void 0)return r;const s=`${String(t)}`;let n=r;o===-1&&(n=Ye(`${s}.${e}`,n));const l={...n},a=new Set;return Object.entries(n).filter(([c])=>{if(!c.startsWith(`${s}.`))return!1;const u=Ke(c,s);return Number.isNaN(u)?!1:u>=e}).forEach(([c,u])=>{const g=Ke(c,s),d=c.replace(`${s}.${g}`,`${s}.${g+o}`);l[d]=u,a.add(d),a.has(c)||delete l[c]}),l}function Kt(t,{from:e,to:r},o){const s=`${t}.${e}`,n=`${t}.${r}`,l={...o};return Object.keys(o).every(a=>{let c,u;if(a.startsWith(s)&&(c=a,u=a.replace(s,n)),a.startsWith(n)&&(c=a.replace(n,s),u=a),c&&u){const g=l[c],d=l[u];return d===void 0?delete l[c]:l[c]=d,g===void 0?delete l[u]:l[u]=g,!1}return!0}),l}function Ve(t){return typeof t!="string"?[]:t.split(".")}function X(t,e){const r=Ve(t);if(r.length===0||typeof e!="object"||e===null)return;let o=e[r[0]];for(let s=1;s<r.length&&o!==void 0;s+=1)o=o[r[s]];return o}function He(t,e,r){typeof r.value=="object"&&(r.value=pe(r.value)),!r.enumerable||r.get||r.set||!r.configurable||!r.writable||e==="__proto__"?Object.defineProperty(t,e,r):t[e]=r.value}function pe(t){if(typeof t!="object")return t;var e=0,r,o,s,n=Object.prototype.toString.call(t);if(n==="[object Object]"?s=Object.create(t.__proto__||null):n==="[object Array]"?s=Array(t.length):n==="[object Set]"?(s=new Set,t.forEach(function(l){s.add(pe(l))})):n==="[object Map]"?(s=new Map,t.forEach(function(l,a){s.set(pe(a),pe(l))})):n==="[object Date]"?s=new Date(+t):n==="[object RegExp]"?s=new RegExp(t.source,t.flags):n==="[object DataView]"?s=new t.constructor(pe(t.buffer)):n==="[object ArrayBuffer]"?s=t.slice(0):n.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(o=Object.getOwnPropertySymbols(t);e<o.length;e++)He(s,o[e],Object.getOwnPropertyDescriptor(t,o[e]));for(e=0,o=Object.getOwnPropertyNames(t);e<o.length;e++)Object.hasOwnProperty.call(s,r=o[e])&&s[r]===t[r]||He(s,r,Object.getOwnPropertyDescriptor(t,r))}return s||t}function Pe(t,e,r){const o=Ve(t);if(o.length===0)return r;const s=pe(r);if(o.length===1)return s[o[0]]=e,s;let n=s[o[0]];for(let l=1;l<o.length-1;l+=1){if(n===void 0)return s;n=n[o[l]]}return n[o[o.length-1]]=e,s}function Ut(t,{from:e,to:r},o){const s=X(t,o);if(!Array.isArray(s))return o;const n=[...s],l=s[e];return n.splice(e,1),n.splice(r,0,l),Pe(t,n,o)}function Ht(t,e,r,o){const s=X(t,o);if(!Array.isArray(s))return o;const n=[...s];return n.splice(typeof r=="number"?r:n.length,0,e),Pe(t,n,o)}function Gt(t,e,r){const o=X(t,r);return Array.isArray(o)?Pe(t,o.filter((s,n)=>n!==e),r):r}function Ge(t){const e=Ce(t);return{hasErrors:Object.keys(e).length>0,errors:e}}function Ne(t,e,r="",o={}){return typeof t!="object"||t===null?o:Object.keys(t).reduce((s,n)=>{const l=t[n],a=`${r===""?"":`${r}.`}${n}`,c=X(a,e);let u=!1;return typeof l=="function"&&(s[a]=l(c,e,a)),typeof l=="object"&&Array.isArray(c)&&(u=!0,c.forEach((g,d)=>Ne(l,e,`${a}.${d}`,s))),typeof l=="object"&&typeof c=="object"&&c!==null&&(u||Ne(l,e,a,s)),s},o)}function Ae(t,e){return Ge(typeof t=="function"?t(e):Ne(t,e))}function Ee(t,e,r){if(typeof t!="string")return{hasError:!1,error:null};const o=Ae(e,r),s=Object.keys(o.errors).find(n=>t.split(".").every((l,a)=>l===n.split(".")[a]));return{hasError:!!s,error:s?o.errors[s]:null}}const Xt="__MANTINE_FORM_INDEX__";function Xe(t,e){return e?typeof e=="boolean"?e:Array.isArray(e)?e.includes(t.replace(/[.][0-9]/g,`.${Xt}`)):!1:!1}function Jt({name:t,initialValues:e,initialErrors:r={},initialDirty:o={},initialTouched:s={},clearInputErrorOnChange:n=!0,validateInputOnChange:l=!1,validateInputOnBlur:a=!1,onValuesChange:c,transformValues:u=_=>_,enhanceGetInputProps:g,validate:d}={}){const[_,h]=w.useState(s),[E,I]=w.useState(o),[p,$]=w.useState(e||{}),[S,y]=w.useState(Ce(r)),[N,L]=w.useState(!1),j=w.useRef(e||{}),R=i=>{j.current=i},F=w.useCallback(i=>{N||(L(!0),$(i),R(i))},[N]),Z=w.useCallback(()=>h({}),[]),J=i=>{const f=i?{...p,...i}:p;R(f),I({})},K=w.useCallback(i=>y(f=>Ce(typeof i=="function"?i(f):i)),[]),T=w.useCallback(()=>y({}),[]),k=w.useCallback(()=>{$(j.current),T(),I({}),Z()},[]),A=w.useCallback((i,f)=>K(m=>({...m,[i]:f})),[]),U=w.useCallback(i=>K(f=>{if(typeof i!="string")return f;const m={...f};return delete m[i],m}),[]),M=w.useCallback(i=>I(f=>{if(typeof i!="string")return f;const m=Ye(i,f);return delete m[i],m}),[]),Q=w.useCallback((i,f)=>{const m=Xe(i,l);M(i),h(v=>({...v,[i]:!0})),$(v=>{const D=X(i,v),ge=Pe(i,f instanceof Function?f(D):f,v);if(m){const H=Ee(i,d,ge);H.hasError?A(i,H.error):U(i)}return c==null||c(ge,v),ge}),!m&&n&&A(i,null)},[c]),C=w.useCallback(i=>{$(f=>{const m=i instanceof Function?i(f):i,v={...f,...m};return c==null||c(v,f),v}),n&&T()},[c]),P=w.useCallback((i,f)=>{M(i),$(m=>{const v=Ut(i,f,m);return c==null||c(v,m),v}),y(m=>Kt(i,f,m))},[]),Y=w.useCallback((i,f)=>{M(i),$(m=>{const v=Gt(i,f,m);return c==null||c(v,m),v}),y(m=>Ue(i,f,m,-1))},[]),q=w.useCallback((i,f,m)=>{M(i),$(v=>{const D=Ht(i,f,m,v);return c==null||c(D,v),D}),y(v=>Ue(i,m,v,1))},[]),ee=w.useCallback(()=>{const i=Ae(d,p);return y(i.errors),i},[p,d]),ae=w.useCallback(i=>{const f=Ee(i,d,p);return f.hasError?A(i,f.error):U(i),f},[p,d]),se=(i,{type:f="input",withError:m=!0,withFocus:v=!0,...D}={})=>{const H={onChange:Zt(de=>Q(i,de))};return m&&(H.error=S[i]),f==="checkbox"?H.checked=X(i,p):H.value=X(i,p),v&&(H.onFocus=()=>h(de=>({...de,[i]:!0})),H.onBlur=()=>{if(Xe(i,a)){const de=Ee(i,d,p);de.hasError?A(i,de.error):U(i)}}),Object.assign(H,g==null?void 0:g({inputProps:H,field:i,options:{type:f,withError:m,withFocus:v,...D},form:me}))},oe=(i,f)=>m=>{m==null||m.preventDefault();const v=ee();v.hasErrors?f==null||f(v.errors,p,m):i==null||i(u(p),m)},fe=i=>u(i||p),ue=w.useCallback(i=>{i.preventDefault(),k()},[]),ne=i=>{if(i){const m=X(i,E);if(typeof m=="boolean")return m;const v=X(i,p),D=X(i,j.current);return!xe(v,D)}return Object.keys(E).length>0?Ze(E):!xe(p,j.current)},ie=w.useCallback(i=>Ze(_,i),[_]),be=w.useCallback(i=>i?!Ee(i,d,p).hasError:!Ae(d,p).hasErrors,[p,d]),me={initialized:N,values:p,errors:S,initialize:F,setValues:C,setInitialValues:R,setErrors:K,setFieldValue:Q,setFieldError:A,clearFieldError:U,clearErrors:T,reset:k,validate:ee,validateField:ae,reorderListItem:P,removeListItem:Y,insertListItem:q,getInputProps:se,onSubmit:oe,onReset:ue,isDirty:ne,isTouched:ie,setTouched:h,setDirty:I,resetTouched:Z,resetDirty:J,isValid:be,getTransformedValues:fe};return xt(t,me),me}const Qt=({onSubmit:t})=>{const e={login:"",password:""},r=Jt({name:"auth",initialValues:e,initialErrors:{...e},validate:n=>({login:n.login.trim().length<6?"Login must include at least 6 characters":null,password:n.password.length<6?"Password must include at least 6 characters":null})});function o(n,l){r.setValues({[n]:l}),r.validate()}function s(n){n.preventDefault(),console.log(r.values),r.validate().hasErrors||t(r.values)}return G.jsxs(x,{component:"form",onSubmit:s,w:{base:320,sm:400,lg:500},children:[G.jsx(We,{mb:"md",label:"Логин",description:"",required:!0,error:r.errors.login||"",onInput:n=>o("login",n),...r.getInputProps("login")}),G.jsx(Le,{mb:"md",label:"Пароль",description:"",required:!0,error:r.errors.password||"",onInput:n=>o("password",n),...r.getInputProps("password")}),G.jsx(dt,{type:"submit",variant:"filled",children:"Login"})]})},er=()=>{const t=pt(),e=ft(),r=mt();function o(s){t.signIn(s,()=>{var n;e(((n=r.state)==null?void 0:n.from)||"/",{replace:!0})})}return G.jsxs(yt,{children:[G.jsx(Fe,{children:G.jsx("h1",{children:"Auth"})}),G.jsx(Fe,{children:G.jsx(vt,{children:G.jsx(Qt,{onSubmit:o})})})]})};export{er as default};