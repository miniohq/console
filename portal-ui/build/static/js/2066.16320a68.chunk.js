"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[2066],{12066:function(e,r,o){o.d(r,{Z:function(){return k}});var i=o(32793),t=o(1048),l=o(50390),a=o(44977),n=o(50076),d=o(83364),s=o(8208),u=o(15573),c=o(4930),p=o(38943),m=o(58217),f=o(36554),v=o(47554),Z=o(36222),h=o(25868),b=o(23060),x=o(91442),F=o(10594),w=o(43349);function R(e){return(0,F.Z)("MuiFormHelperText",e)}var g,T=(0,w.Z)("MuiFormHelperText",["root","error","disabled","sizeSmall","sizeMedium","contained","focused","filled","required"]),P=o(62559),q=["children","className","component","disabled","error","filled","focused","margin","required","variant"],y=(0,s.ZP)("p",{name:"MuiFormHelperText",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,o.size&&r["size".concat((0,x.Z)(o.size))],o.contained&&r.contained,o.filled&&r.filled]}})((function(e){var r,o=e.theme,t=e.ownerState;return(0,i.Z)({color:o.palette.text.secondary},o.typography.caption,(r={textAlign:"left",marginTop:3,marginRight:0,marginBottom:0,marginLeft:0},(0,Z.Z)(r,"&.".concat(T.disabled),{color:o.palette.text.disabled}),(0,Z.Z)(r,"&.".concat(T.error),{color:o.palette.error.main}),r),"small"===t.size&&{marginTop:4},t.contained&&{marginLeft:14,marginRight:14})})),z=l.forwardRef((function(e,r){var o=(0,u.Z)({props:e,name:"MuiFormHelperText"}),l=o.children,d=o.className,s=o.component,c=void 0===s?"p":s,p=(0,t.Z)(o,q),m=(0,b.Z)(),f=(0,h.Z)({props:o,muiFormControl:m,states:["variant","size","disabled","error","filled","focused","required"]}),v=(0,i.Z)({},o,{component:c,contained:"filled"===f.variant||"outlined"===f.variant,variant:f.variant,size:f.size,disabled:f.disabled,error:f.error,filled:f.filled,focused:f.focused,required:f.required}),Z=function(e){var r=e.classes,o=e.contained,i=e.size,t=e.disabled,l=e.error,a=e.filled,d=e.focused,s=e.required,u={root:["root",t&&"disabled",l&&"error",i&&"size".concat((0,x.Z)(i)),o&&"contained",d&&"focused",a&&"filled",s&&"required"]};return(0,n.Z)(u,R,r)}(v);return(0,P.jsx)(y,(0,i.Z)({as:c,ownerState:v,className:(0,a.Z)(Z.root,d),ref:r},p,{children:" "===l?g||(g=(0,P.jsx)("span",{className:"notranslate",children:"\u200b"})):l}))})),C=o(43965);function M(e){return(0,F.Z)("MuiTextField",e)}(0,w.Z)("MuiTextField",["root"]);var j=["autoComplete","autoFocus","children","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","id","InputLabelProps","inputProps","InputProps","inputRef","label","maxRows","minRows","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","select","SelectProps","type","value","variant"],N={standard:c.Z,filled:p.Z,outlined:m.Z},S=(0,s.ZP)(v.Z,{name:"MuiTextField",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),k=l.forwardRef((function(e,r){var o=(0,u.Z)({props:e,name:"MuiTextField"}),l=o.autoComplete,s=o.autoFocus,c=void 0!==s&&s,p=o.children,m=o.className,v=o.color,Z=void 0===v?"primary":v,h=o.defaultValue,b=o.disabled,x=void 0!==b&&b,F=o.error,w=void 0!==F&&F,R=o.FormHelperTextProps,g=o.fullWidth,T=void 0!==g&&g,q=o.helperText,y=o.id,k=o.InputLabelProps,H=o.inputProps,I=o.InputProps,W=o.inputRef,B=o.label,L=o.maxRows,V=o.minRows,_=o.multiline,A=void 0!==_&&_,D=o.name,E=o.onBlur,G=o.onChange,J=o.onFocus,K=o.placeholder,O=o.required,Q=void 0!==O&&O,U=o.rows,X=o.select,Y=void 0!==X&&X,$=o.SelectProps,ee=o.type,re=o.value,oe=o.variant,ie=void 0===oe?"outlined":oe,te=(0,t.Z)(o,j),le=(0,i.Z)({},o,{autoFocus:c,color:Z,disabled:x,error:w,fullWidth:T,multiline:A,required:Q,select:Y,variant:ie}),ae=function(e){var r=e.classes;return(0,n.Z)({root:["root"]},M,r)}(le);var ne={};"outlined"===ie&&(k&&"undefined"!==typeof k.shrink&&(ne.notched=k.shrink),ne.label=B),Y&&($&&$.native||(ne.id=void 0),ne["aria-describedby"]=void 0);var de=(0,d.Z)(y),se=q&&de?"".concat(de,"-helper-text"):void 0,ue=B&&de?"".concat(de,"-label"):void 0,ce=N[ie],pe=(0,P.jsx)(ce,(0,i.Z)({"aria-describedby":se,autoComplete:l,autoFocus:c,defaultValue:h,fullWidth:T,multiline:A,name:D,rows:U,maxRows:L,minRows:V,type:ee,value:re,id:de,inputRef:W,onBlur:E,onChange:G,onFocus:J,placeholder:K,inputProps:H},ne,I));return(0,P.jsxs)(S,(0,i.Z)({className:(0,a.Z)(ae.root,m),disabled:x,error:w,fullWidth:T,ref:r,required:Q,color:Z,variant:ie,ownerState:le},te,{children:[null!=B&&""!==B&&(0,P.jsx)(f.Z,(0,i.Z)({htmlFor:de,id:ue},k,{children:B})),Y?(0,P.jsx)(C.Z,(0,i.Z)({"aria-describedby":se,id:de,labelId:ue,value:re,input:pe},$,{children:p})):pe,q&&(0,P.jsx)(z,(0,i.Z)({id:se},R,{children:q}))]}))}))}}]);
//# sourceMappingURL=2066.16320a68.chunk.js.map