(this["webpackJsonpportal-ui"]=this["webpackJsonpportal-ui"]||[]).push([[94,116],{399:function(e,t,a){"use strict";var n=a(1),c=a(2),i=a.n(c),o=a(429),r=a(443),s=a(821),l=a(384),d=a(387),u=a(307),b=a(377),j=a(319),O=a(122),h=a(123),m=a(0),p=Object(b.a)((function(e){return Object(u.a)(Object(n.a)({},O.n))}));function f(e){var t=p();return Object(m.jsx)(o.a,Object(n.a)({InputProps:{classes:t}},e))}t.a=Object(j.a)((function(e){return Object(u.a)(Object(n.a)(Object(n.a)(Object(n.a)({},O.i),O.E),{},{textBoxContainer:{flexGrow:1,position:"relative"},overlayAction:{position:"absolute",right:5,top:6,"& svg":{maxWidth:15,maxHeight:15},"&.withLabel":{top:5}}}))}))((function(e){var t=e.label,a=e.onChange,c=e.value,o=e.id,u=e.name,b=e.type,j=void 0===b?"text":b,O=e.autoComplete,p=void 0===O?"off":O,x=e.disabled,v=void 0!==x&&x,g=e.multiline,C=void 0!==g&&g,N=e.tooltip,y=void 0===N?"":N,k=e.index,w=void 0===k?0:k,E=e.error,F=void 0===E?"":E,S=e.required,B=void 0!==S&&S,L=e.placeholder,R=void 0===L?"":L,A=e.min,I=e.max,P=e.overlayIcon,T=void 0===P?null:P,M=e.overlayObject,W=void 0===M?null:M,_=e.extraInputProps,z=void 0===_?{}:_,D=e.overlayAction,V=e.noLabelMinWidth,G=void 0!==V&&V,$=e.pattern,q=void 0===$?"":$,H=e.classes,J=Object(n.a)({"data-index":w},z);return"number"===j&&A&&(J.min=A),"number"===j&&I&&(J.max=I),""!==q&&(J.pattern=q),Object(m.jsx)(i.a.Fragment,{children:Object(m.jsxs)(r.a,{container:!0,className:" ".concat(""!==F?H.errorInField:H.inputBoxContainer),children:[""!==t&&Object(m.jsxs)(s.a,{htmlFor:o,className:G?H.noMinWidthLabel:H.inputLabel,children:[Object(m.jsxs)("span",{children:[t,B?"*":""]}),""!==y&&Object(m.jsx)("div",{className:H.tooltipContainer,children:Object(m.jsx)(l.a,{title:y,placement:"top-start",children:Object(m.jsx)("div",{className:H.tooltip,children:Object(m.jsx)(h.a,{})})})})]}),Object(m.jsxs)("div",{className:H.textBoxContainer,children:[Object(m.jsx)(f,{id:o,name:u,fullWidth:!0,value:c,disabled:v,onChange:a,type:j,multiline:C,autoComplete:p,inputProps:J,error:""!==F,helperText:F,placeholder:R,className:H.inputRebase}),T&&Object(m.jsx)("div",{className:"".concat(H.overlayAction," ").concat(""!==t?"withLabel":""),children:Object(m.jsx)(d.a,{onClick:D?function(){D()}:function(){return null},size:"small",disableFocusRipple:!1,disableRipple:!1,disableTouchRipple:!1,children:T})}),W&&Object(m.jsx)("div",{className:"".concat(H.overlayAction," ").concat(""!==t?"withLabel":""),children:W})]})]})})}))},408:function(e,t,a){"use strict";var n=a(5),c=a(1),i=a(2),o=a.n(i),r=a(307),s=a(319),l=a(483),d=a(821),u=a(384),b=a(96),j=a(443),O=a(122),h=a(123),m=a(8),p=a(0),f=Object(s.a)((function(e){return{root:{width:50,height:24,padding:0,margin:0},switchBase:{padding:1,"&$checked":{transform:"translateX(24px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#4CCB92",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#4CCB92",border:"6px solid #fff"}},thumb:{width:22,height:22,backgroundColor:"#FAFAFA",border:"2px solid #FFFFFF",marginLeft:1},track:{borderRadius:12,backgroundColor:"#E2E2E2",boxShadow:"inset 0px 1px 4px rgba(0,0,0,0.1)",opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{},switchContainer:{display:"flex",alignItems:"center",justifyContent:"flex-end"}}}))(l.a);t.a=Object(s.a)((function(e){return Object(r.a)(Object(c.a)(Object(c.a)({divContainer:{marginBottom:20},indicatorLabelOn:{fontWeight:"bold",color:"#081C42 !important"},indicatorLabel:{fontSize:12,color:"#E2E2E2",margin:"0 8px 0 10px"},fieldDescription:{marginTop:4,color:"#999999"},tooltip:{fontSize:16}},O.a),O.i))}))((function(e){var t=e.label,a=void 0===t?"":t,c=e.onChange,i=e.value,r=e.id,s=e.name,l=e.checked,O=void 0!==l&&l,x=e.disabled,v=void 0!==x&&x,g=e.switchOnly,C=void 0!==g&&g,N=e.tooltip,y=void 0===N?"":N,k=e.description,w=void 0===k?"":k,E=e.classes,F=e.indicatorLabels,S=Object(p.jsxs)(o.a.Fragment,{children:[!C&&Object(p.jsx)("span",{className:Object(m.a)(E.indicatorLabel,Object(n.a)({},E.indicatorLabelOn,!O)),children:F&&F.length>1?F[1]:"OFF"}),Object(p.jsx)(f,{checked:O,onChange:c,color:"primary",name:s,inputProps:{"aria-label":"primary checkbox"},disabled:v,disableRipple:!0,disableFocusRipple:!0,disableTouchRipple:!0,value:i}),!C&&Object(p.jsx)("span",{className:Object(m.a)(E.indicatorLabel,Object(n.a)({},E.indicatorLabelOn,O)),children:F?F[0]:"ON"})]});return C?S:Object(p.jsx)("div",{className:E.divContainer,children:Object(p.jsxs)(j.a,{container:!0,alignItems:"center",children:[Object(p.jsx)(j.a,{item:!0,xs:!0,children:Object(p.jsxs)(j.a,{container:!0,children:[Object(p.jsx)(j.a,{item:!0,xs:12,sm:4,md:3,children:""!==a&&Object(p.jsxs)(d.a,{htmlFor:r,className:E.inputLabel,children:[Object(p.jsx)("span",{children:a}),""!==y&&Object(p.jsx)("div",{className:E.tooltipContainer,children:Object(p.jsx)(u.a,{title:y,placement:"top-start",children:Object(p.jsx)("div",{className:E.tooltip,children:Object(p.jsx)(h.a,{})})})})]})}),Object(p.jsx)(j.a,{item:!0,xs:12,sm:!0,textAlign:"left",children:""!==w&&Object(p.jsx)(b.a,{component:"p",className:E.fieldDescription,children:w})})]})}),Object(p.jsx)(j.a,{item:!0,xs:12,sm:2,textAlign:"right",className:E.switchContainer,children:S})]})})}))},411:function(e,t,a){"use strict";var n=a(1),c=a(2),i=a.n(c),o=a(413),r=a(414),s=a(415),l=a(458),d=a(385),u=a(467),b=a(387),j=a(125),O=a.n(j),h=a(307),m=a(319),p=a(122),f=a(0);t.a=Object(m.a)((function(e){return Object(h.a)(Object(n.a)({},p.h))}))((function(e){var t=e.isOpen,a=void 0!==t&&t,c=e.onClose,j=e.onCancel,h=e.onConfirm,m=e.classes,p=void 0===m?{}:m,x=e.title,v=void 0===x?"":x,g=e.isLoading,C=e.confirmationContent,N=e.cancelText,y=void 0===N?"Cancel":N,k=e.confirmText,w=void 0===k?"Confirm":k,E=e.confirmButtonProps,F=void 0===E?{}:E,S=e.cancelButtonProps,B=void 0===S?{}:S;return Object(f.jsxs)(o.a,{open:a,onClose:function(e,t){"backdropClick"!==t&&c()},className:p.root,sx:{"& .MuiPaper-root":{padding:"1rem 2rem 2rem 1rem"}},children:[Object(f.jsxs)(r.a,{className:p.title,children:[Object(f.jsx)("div",{className:p.titleText,children:v}),Object(f.jsx)("div",{className:p.closeContainer,children:Object(f.jsx)(b.a,{"aria-label":"close",className:p.closeButton,onClick:c,disableRipple:!0,size:"small",children:Object(f.jsx)(O.a,{})})})]}),Object(f.jsx)(s.a,{className:p.content,children:C}),Object(f.jsxs)(l.a,{className:p.actions,children:[Object(f.jsx)(d.a,Object(n.a)(Object(n.a)({className:p.cancelButton,onClick:j||c,disabled:g,type:"button"},B),{},{variant:"outlined",color:"primary",children:y})),Object(f.jsx)(u.a,Object(n.a)(Object(n.a)({className:p.confirmButton,type:"button",onClick:h,loading:g,disabled:g,variant:"outlined",color:"secondary",loadingPosition:"start",startIcon:Object(f.jsx)(i.a.Fragment,{}),autoFocus:!0},F),{},{children:w}))]})]})}))},647:function(e,t,a){"use strict";var n=a(1),c=a(2),i=a.n(c),o=a(443),r=a(821),s=a(384),l=a(429),d=a(307),u=a(319),b=a(122),j=a(123),O=a(0);t.a=Object(u.a)((function(e){return Object(d.a)(Object(n.a)(Object(n.a)(Object(n.a)({},b.i),b.E),{},{inputLabel:Object(n.a)(Object(n.a)({},b.i.inputLabel),{},{marginBottom:16,fontSize:14}),textBoxContainer:{flexGrow:1,position:"relative"},cssOutlinedInput:{borderColor:"#EAEAEA",padding:16},rootContainer:{"& .MuiOutlinedInput-inputMultiline":Object(n.a)(Object(n.a)({},b.i.inputLabel),{},{fontSize:13,minHeight:150}),"&.Mui-focused .MuiOutlinedInput-notchedOutline":{borderColor:"#07193E",borderWidth:1},"& textarea":{color:"#07193E",fontSize:13,fontWeight:600,"&:placeholder":{color:"#393939",opacity:1}}}}))}))((function(e){var t=e.label,a=e.onChange,n=e.value,c=e.id,d=e.name,u=e.disabled,b=void 0!==u&&u,h=e.tooltip,m=void 0===h?"":h,p=e.index,f=void 0===p?0:p,x=e.error,v=void 0===x?"":x,g=e.required,C=void 0!==g&&g,N=e.placeholder,y=void 0===N?"":N,k=e.classes,w={"data-index":f};return Object(O.jsx)(i.a.Fragment,{children:Object(O.jsxs)(o.a,{item:!0,xs:12,className:"".concat(k.fieldContainer," ").concat(""!==v?k.errorInField:""),children:[""!==t&&Object(O.jsxs)(r.a,{htmlFor:c,className:k.inputLabel,children:[Object(O.jsxs)("span",{children:[t,C?"*":""]}),""!==m&&Object(O.jsx)("div",{className:k.tooltipContainer,children:Object(O.jsx)(s.a,{title:m,placement:"top-start",children:Object(O.jsx)("div",{className:k.tooltip,children:Object(O.jsx)(j.a,{})})})})]}),Object(O.jsx)("div",{className:k.textBoxContainer,children:Object(O.jsx)(l.a,{id:c,name:d,fullWidth:!0,value:n,disabled:b,onChange:a,multiline:!0,rows:5,inputProps:w,error:""!==v,helperText:v,placeholder:y,InputLabelProps:{shrink:!0},InputProps:{classes:{notchedOutline:k.cssOutlinedInput,root:k.rootContainer}},variant:"outlined"})})]})})}))},792:function(e,t,a){"use strict";a.r(t),a.d(t,"valueDef",(function(){return k}));var n=a(13),c=a(16),i=a(1),o=a(2),r=a.n(o),s=a(307),l=a(319),d=a(443),u=a(122),b=a(399),j=a(39),O=a.n(j),h=a(463),m=a.n(h),p=a(821),f=a(384),x=a(123),v=a(137),g=a(0),C=Object(l.a)((function(e){return Object(s.a)(Object(i.a)(Object(i.a)(Object(i.a)({},u.i),u.E),{},{inputWithBorder:{border:"1px solid #EAEAEA",padding:15,height:150,overflowY:"auto",position:"relative",marginTop:15},inputBoxSpacer:{marginBottom:7}}))}))((function(e){var t=e.elements,a=e.name,i=e.label,s=e.tooltip,l=void 0===s?"":s,u=e.commonPlaceholder,j=void 0===u?"":u,h=e.onChange,C=e.withBorder,N=void 0!==C&&C,y=e.classes,k=Object(o.useState)([""]),w=Object(c.a)(k,2),E=w[0],F=w[1],S=Object(o.createRef)();Object(o.useEffect)((function(){if(1===E.length&&""===E[0]&&t&&""!==t){var e=t.split(",");e.push(""),F(e)}}),[t,E]),Object(o.useEffect)((function(){if(E.length>1){var e=S.current;e&&e.scrollIntoView(!1)}}),[E,S]);var B=Object(o.useRef)(!0);Object(o.useLayoutEffect)((function(){B.current?B.current=!1:R()}),[E]);var L=function(e){e.persist();var t=Object(n.a)(E);t[O()(e.target,"dataset.index",0)]=e.target.value,F(t)},R=m()((function(){var e=E.filter((function(e){return""!==e.trim()})).join(",");h(e)}),500),A=E.map((function(e,t){return Object(g.jsx)("div",{className:y.inputBoxSpacer,children:Object(g.jsx)(b.a,{id:"".concat(a,"-").concat(t.toString()),label:"",name:"".concat(a,"-").concat(t.toString()),value:E[t],onChange:L,index:t,placeholder:j,overlayIcon:t===E.length-1?Object(g.jsx)(v.a,{}):null,overlayAction:function(){!function(e){if(""!==e[e.length-1].trim()){var t=Object(n.a)(e);t.push(""),F(t)}}(E)}},"csv-".concat(a,"-").concat(t.toString()))})}));return Object(g.jsx)(r.a.Fragment,{children:Object(g.jsxs)(d.a,{item:!0,xs:12,className:y.fieldContainer,children:[Object(g.jsxs)(p.a,{className:y.inputLabel,children:[Object(g.jsx)("span",{children:i}),""!==l&&Object(g.jsx)("div",{className:y.tooltipContainer,children:Object(g.jsx)(f.a,{title:l,placement:"top-start",children:Object(g.jsx)("div",{className:y.tooltip,children:Object(g.jsx)(x.a,{})})})})]}),Object(g.jsxs)(d.a,{item:!0,xs:12,className:"".concat(N?y.inputWithBorder:""),children:[A,Object(g.jsx)("div",{ref:S})]})]})})})),N=a(647),y=a(408),k=function(e,t,a){var n="on|off"===t?"false":"";if(a.length>0){var c=a.find((function(t){return t.key===e}));c&&(n=c.value)}return n};t.default=Object(l.a)((function(e){return Object(s.a)(Object(i.a)(Object(i.a)({},u.k),{},{formFieldRow:Object(i.a)({},u.k.formFieldRow)},u.p))}))((function(e){var t=e.onChange,a=e.fields,i=e.defaultVals,r=e.classes,s=Object(o.useState)([]),l=Object(c.a)(s,2),u=l[0],j=l[1],O=a||[],h=i||[];Object(o.useEffect)((function(){var e=[];a.forEach((function(t){var a={key:t.name,value:k(t.name,t.type,h)};e.push(a)})),j(e)}),[a,i]),Object(o.useEffect)((function(){t(u)}),[u]);var m=function(e,t,a){var c=Object(n.a)(u);c[a]={key:e,value:t},j(c)},p=function(e,t){switch(e.type){case"on|off":var a=u[t]?u[t].value:"false";return Object(g.jsx)(y.a,{onChange:function(a){var n=a.target.checked?"true":"false";m(e.name,n,t)},id:e.name,name:e.name,label:e.label,value:"switch_on",tooltip:e.tooltip,checked:"true"===a});case"csv":return Object(g.jsx)(C,{elements:u[t]?u[t].value:"",label:e.label,name:e.name,onChange:function(a){return m(e.name,a,t)},tooltip:e.tooltip,commonPlaceholder:e.placeholder,withBorder:!0});case"comment":return Object(g.jsx)(N.a,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:u[t]?u[t].value:"",onChange:function(a){return m(e.name,a.target.value,t)},placeholder:e.placeholder});default:return Object(g.jsx)(b.a,{id:e.name,name:e.name,label:e.label,tooltip:e.tooltip,value:u[t]?u[t].value:"",onChange:function(a){return m(e.name,a.target.value,t)},multiline:!!e.multiline,placeholder:e.placeholder})}};return Object(g.jsx)(d.a,{container:!0,children:Object(g.jsx)(d.a,{xs:12,item:!0,className:r.fieldBox,children:O.map((function(e,t){return Object(g.jsx)(d.a,{item:!0,xs:12,className:r.formFieldRow,children:p(e,t)},e.name)}))})})}))},915:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(39),o=a.n(i),r=a(443),s=a(778),l=a(16),d=a(1),u=a(41),b=a(307),j=a(319),O=a(374),h=a(385),m=a(52),p=a(792),f=a(32),x=a(122),v=a(466),g=a(411),C=a(0),N={setErrorSnackMessage:f.e},y=Object(u.b)(null,N),k=Object(j.a)((function(e){return Object(b.a)(Object(d.a)({wrapText:{maxWidth:"200px",whiteSpace:"normal",wordWrap:"break-word"}},x.h))}))(y((function(e){var t=e.classes,a=e.configurationName,i=e.closeResetModalAndRefresh,o=e.setErrorSnackMessage,r=e.resetOpen,s=Object(n.useState)(!1),d=Object(l.a)(s,2),u=d[0],b=d[1];Object(n.useEffect)((function(){u&&m.a.invoke("GET","/api/v1/configs/".concat(a,"/reset")).then((function(e){b(!1),i(!0)})).catch((function(e){b(!1),o(e)}))}),[i,a,u,o]);return Object(C.jsx)(g.a,{title:"Restore Defaults",confirmText:"Yes, Reset Configuration",isOpen:r,isLoading:u,onConfirm:function(){b(!0)},onClose:function(){i(!1)},confirmationContent:Object(C.jsxs)(c.a.Fragment,{children:[u&&Object(C.jsx)(O.a,{}),Object(C.jsxs)(v.a,{children:["Are you sure you want to restore these configurations to default values?",Object(C.jsx)("br",{}),Object(C.jsx)("b",{className:t.wrapText,children:"Please note that this may cause your system to not be accessible"})]})]})})}))),w={serverNeedsRestart:f.c,setErrorSnackMessage:f.e},E=Object(u.b)(null,w)(Object(j.a)((function(e){return Object(b.a)(Object(d.a)(Object(d.a)({},x.i),x.y))}))((function(e){var t=e.serverNeedsRestart,a=e.selectedConfiguration,c=e.setErrorSnackMessage,i=e.classes,d=e.history,u=e.className,b=void 0===u?"":u,j=Object(n.useState)([]),f=Object(l.a)(j,2),x=f[0],v=f[1],g=Object(n.useState)(!1),N=Object(l.a)(g,2),y=N[0],w=N[1],E=Object(n.useState)(!0),F=Object(l.a)(E,2),S=F[0],B=F[1],L=Object(n.useState)([]),R=Object(l.a)(L,2),A=R[0],I=R[1],P=Object(n.useState)(!1),T=Object(l.a)(P,2),M=T[0],W=T[1];Object(n.useEffect)((function(){if(S){var e=o()(a,"configuration_id",!1);if(e)return void m.a.invoke("GET","/api/v1/configs/".concat(e)).then((function(e){var t=o()(e,"key_values",[]);I(t),B(!1)})).catch((function(e){B(!1),c(e)}));B(!1)}}),[S,a,c]),Object(n.useEffect)((function(){if(y){var e={key_values:Object(s.c)(x)};m.a.invoke("PUT","/api/v1/configs/".concat(a.configuration_id),e).then((function(e){w(!1),t(e.restart),d.push("/settings")})).catch((function(e){w(!1),c(e)}))}}),[y,d,t,a,x,c]);var _=Object(n.useCallback)((function(e){v(e)}),[v]);return Object(C.jsxs)(n.Fragment,{children:[M&&Object(C.jsx)(k,{configurationName:a.configuration_id,closeResetModalAndRefresh:function(e){W(!1),t(e),e&&B(!0)},resetOpen:M}),Object(C.jsxs)("form",{noValidate:!0,onSubmit:function(e){e.preventDefault(),w(!0)},className:b,children:[Object(C.jsxs)(r.a,{item:!0,xs:12,className:i.settingsFormContainer,children:[S&&Object(C.jsx)(r.a,{item:!0,xs:12,children:Object(C.jsx)(O.a,{})}),Object(C.jsx)(p.default,{fields:s.b[a.configuration_id],onChange:_,defaultVals:A})]}),Object(C.jsxs)(r.a,{item:!0,xs:12,className:i.settingsButtonContainer,children:[Object(C.jsx)(h.a,{type:"button",variant:"outlined",color:"secondary",onClick:function(){W(!0)},children:"Restore Defaults"}),"\xa0 \xa0",Object(C.jsx)(h.a,{type:"submit",variant:"contained",color:"primary",disabled:y,children:"Save"})]})]})]})})));t.default=function(e){var t=e.match,a=e.history,n=o()(t,"url",""),c=n.substring(n.lastIndexOf("/")+1),i=s.a.find((function(e){return e.configuration_id===c})),l="".concat(c);return Object(C.jsx)(r.a,{item:!0,xs:12,children:i&&Object(C.jsx)(E,{className:"".concat(l),selectedConfiguration:i,history:a})})}}}]);
//# sourceMappingURL=94.cf4d38ae.chunk.js.map