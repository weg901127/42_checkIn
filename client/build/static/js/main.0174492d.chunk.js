(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},66:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(30),s=c.n(r),i=(c(38),c(32)),o=c(2),l=(c(39),c(0));var u=function(){Object(n.useEffect)((function(){""!==e("w_auth")&&(window.location.href="/submit")}),[]);var e=function(e){for(var t=e+"=",c="",n=document.cookie.split(";"),a=0;a<n.length;a++)if(" "===n[a][0]&&(n[a]=n[a].substring(1)),0===n[a].indexOf(t))return c=n[a].slice(t.length,n[a].length);return c};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"btn",onClick:function(){window.location.href="/api/user/login"},children:"42 Log In"})})},j=c(6),d=c.n(j),b=c(11),h=c(4),x=c(10),O=c.n(x),p=c(20);c(60);var f=function(e){var t=e.name,c=e.text,n=e.checkStatus,a=e.setCheckStatus;return Object(l.jsx)("div",{children:Object(l.jsxs)("label",{htmlFor:t,children:[Object(l.jsx)("input",{id:t,className:"checkbox",type:"checkbox",checked:n[t],onChange:function(){var e=n[t];a([].concat(Object(p.a)(n.slice(0,t)),[!e],Object(p.a)(n.slice(t+1))))}}),c]})})};c(61);var v=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),s=Object(h.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(!1),j=Object(h.a)(u,2),x=j[0],p=j[1],v=Object(n.useState)([!1,!1,!1]),m=Object(h.a)(v,2),g=m[0],k=m[1],w=Object(n.useState)(""),y=Object(h.a)(w,2),N=y[0],C=y[1],S=Object(n.useState)(!1),B=Object(h.a)(S,2),I=B[0],F=B[1],D=Object(n.useState)(0),J=Object(h.a)(D,2),T=J[0],L=J[1],A=Object(n.useState)(0),E=Object(h.a)(A,2),M=E[0],W=E[1],_=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=24;break}return e.prev=1,e.next=4,O.a.get("/api/card/valid/".concat(N));case 4:if(!1!==e.sent.data.using){e.next=17;break}return e.prev=6,e.next=9,O.a.post("/api/user/checkIn/".concat(N));case 9:window.location.href="/end",e.next=15;break;case 12:e.prev=12,e.t0=e.catch(6),console.log(e.t0);case 15:e.next=19;break;case 17:C(""),alert("\uc720\ud6a8\ud55c \uce74\ub4dc \ubc88\ud638\uac00 \uc544\ub2d9\ub2c8\ub2e4");case 19:e.next=24;break;case 21:e.prev=21,e.t1=e.catch(1),console.log(e.t1);case 24:case"end":return e.stop()}}),e,null,[[1,21],[6,12]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.post("/api/user/checkOut");case 3:window.location.href="/end",e.next=11;break;case 6:e.prev=6,e.t0=e.catch(0),alert("\uc774\ubbf8 \ucc98\ub9ac\ub41c \uc791\uc5c5\uc785\ub2c8\ub2e4."),window.location.href="/",console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(b.a)(d.a.mark((function e(){var t,c,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("/api/user/status");case 3:t=e.sent,c=t.data,n=c.login,r=c.card,a(n),o(null!==r),L(t.data.gaepo),W(t.data.seocho),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),document.cookie="w_auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.href="/";case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){""!==function(e){for(var t=e+"=",c="",n=document.cookie.split(";"),a=0;a<n.length;a++)if(" "===n[a][0]&&(n[a]=n[a].substring(1)),0===n[a].indexOf(t))return n[a].slice(t.length,n[a].length);return c}("w_auth")?P():window.location.href="/",!1===i&&""!==N&&JSON.stringify(g)===JSON.stringify([!0,!0,!0])&&F(!0),""!==N&&"---"!==N&&JSON.stringify(g)===JSON.stringify([!0,!0,!0])||F(!1)}),[c,N,g,i,I]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{id:"checkinout",children:[Object(l.jsx)("h1",{id:"title",children:i?"42 CheckOut":"42 CheckIn"}),Object(l.jsxs)("h4",{children:[" \uac1c\ud3ec \uc778\uc6d0 : ",T," / 150 "]}),Object(l.jsxs)("h4",{children:[" \uc11c\ucd08 \uc778\uc6d0 : ",M," / 150"]}),Object(l.jsxs)("h3",{id:"userId",children:["Intra ID: ",c]}),i?Object(l.jsx)("div",{className:"submitBtn ready",onClick:H,children:"Check Out"}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsxs)("label",{htmlFor:"allCheck",children:[Object(l.jsx)("input",{id:"allCheck",type:"checkbox",checked:x,onChange:function(e){var t=e.target.checked;p(t),k([t,t,t])}}),"\ubaa8\ub450 \ub3d9\uc758"]}),Object(l.jsx)("div",{className:"checkbox-wrapper",children:[" \ubc1c\uc5f4 \uccb4\ud06c\uc2dc 37.5\ub3c4 \uc774\ud558\uc778 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."," \uc774 \uc784\uc2dc \ucd9c\uc785\uce74\ub4dc\ub97c \ubd84\uc2e4 \uc2dc \ubd84\uc2e4 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4."," \ub9c8\uc2a4\ud06c\ub97c \ubc18\ub4dc\uc2dc \uc0c1\uc2dc \ucc29\uc6a9\ud558\uace0 \ubc29\uc5ed\uc218\uce59\uc744 \uc900\uc218\ud560 \uac83\uc744 \uc57d\uc18d\ud558\uba70, \ubaa8\ub4e0 \uc124\ubb38\uc744 \uc774\uc0c1\uc5c6\uc774 \uc791\uc131\ud588\uc74c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."].map((function(e,t){return Object(l.jsx)(f,{name:t,text:e,checkStatus:g,setCheckStatus:k},t)}))})]}),Object(l.jsxs)("div",{className:"input-wrapper",children:[Object(l.jsx)("h3",{children:"Card Number"}),Object(l.jsx)("div",{id:"card",children:Object(l.jsx)("input",{type:"number",name:"text",value:N,onChange:function(e){C(e.target.value)},placeholder:"\uce74\ub4dc \ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"})})]}),Object(l.jsx)("div",{className:"submitBtn ".concat(I?" ready":""),onClick:_,children:"Check In"})]})]})})};c(62);var m=function(){return Object(n.useEffect)((function(){setTimeout((function(){return window.location.href="/submit"}),3e3)})),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{id:"endText",children:"Complete!"})})},g=(c(63),c(64),Object(n.forwardRef)((function(e,t){Object(n.useImperativeHandle)(t,(function(){return{onSubmit:N}}));var c=Object(n.useState)(0),a=Object(h.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(0),o=Object(h.a)(i,2),u=o[0],j=o[1],x=Object(n.useState)(""),p=Object(h.a)(x,2),f=p[0],v=p[1],m=Object(n.useState)(0),g=Object(h.a)(m,2),k=g[0],w=g[1],y=function(e){s(e.target.value),j(0)},N=function(){var t=Object(b.a)(d.a.mark((function t(c){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),t.prev=1,t.t0=e.type,t.next=0===t.t0?5:1===t.t0?9:2===t.t0?13:17;break;case 5:return t.next=7,O.a.get("/api/log/".concat(0===r?"gaepo":"seocho","/").concat(u));case 7:return n=t.sent,t.abrupt("break",18);case 9:return t.next=11,O.a.get("/api/log/user/".concat(f));case 11:return n=t.sent,t.abrupt("break",18);case 13:return t.next=15,O.a.get("/api/log/card/".concat(k,"}"));case 15:return n=t.sent,t.abrupt("break",18);case 17:return t.abrupt("break",18);case 18:e.setLogs(n.data),t.next=24;break;case 21:t.prev=21,t.t1=t.catch(1),console.log(t.t1);case 24:case"end":return t.stop()}}),t,null,[[1,21]])})));return function(e){return t.apply(this,arguments)}}(),C=function(){return Object(l.jsx)("div",{className:"control-section",children:Object(l.jsx)("form",{onSubmit:N,children:Object(l.jsxs)("div",{children:[Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"cluster",value:0,checked:0===r,onChange:y}),"\uac1c\ud3ec"]}),Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{type:"radio",name:"cluster",value:1,checked:1===r,onChange:y}),"\uc11c\ucd08"]}),Object(l.jsx)("button",{onClick:N,children:"\ubd88\ub7ec\uc624\uae30"})]})})})};switch(e.type){case 0:return C();case 1:return Object(l.jsx)("div",{className:"control-section",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",name:"\ub85c\uadf8\uc778",value:f,placeholder:"\uc778\ud2b8\ub77c \uc544\uc774\ub514",onChange:function(e){v(e.target.value)},style:{textAlign:"center"}}),Object(l.jsx)("button",{onClick:N,children:"\ubd88\ub7ec\uc624\uae30"})]})});case 2:return Object(l.jsx)("div",{className:"control-section",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{type:"text",name:"text",value:k,placeholder:"\uce74\ub4dc\ubc88\ud638",onChange:function(e){w(e.target.value)},style:{textAlign:"center"}}),Object(l.jsx)("button",{onClick:N,children:"\ubd88\ub7ec\uc624\uae30"})]})});default:return C()}}))),k=c(31);c(66);var w=function(){var e=Object(n.useState)(0),t=Object(h.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),s=Object(h.a)(r,2),i=s[0],o=s[1],u=Object(n.useRef)(),j=function(){var e=Object(b.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=t.target.getAttribute("data"),e.next=4,O.a.post("/api/user/forceCheckOut/".concat(c));case 4:e.sent,o([]),u.current.onSubmit(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{style:{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},children:[Object(l.jsxs)("div",{className:"selectorWrapper",children:[Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(l.jsx)("button",{className:"filterBtn",onClick:function(){o([]),a(0)},children:"\ud074\ub7ec\uc2a4\ud130 \ub85c\uadf8"}),Object(l.jsx)("button",{className:"filterBtn",onClick:function(){o([]),a(1)},children:"\ud559\uc0dd \ub85c\uadf8"}),Object(l.jsx)("button",{className:"filterBtn",onClick:function(){o([]),a(2)},children:"\uce74\ub4dc \ub85c\uadf8"})]}),Object(l.jsx)("div",{style:{display:"flex",width:"50%",padding:"1rem",height:"5rem"},children:Object(l.jsx)(g,{type:c,setLogs:o,ref:u})})]}),Object(l.jsxs)("div",{style:{overflowX:"scroll",minWidth:"50%",margin:"auto"},children:[Object(l.jsxs)("div",{className:"logWrapper",children:[Object(l.jsx)("div",{className:"logBox3",children:"\uc2dc\uac04"}),Object(l.jsx)("div",{className:"logBox1",children:"\ucd9c/\uc785"}),Object(l.jsx)("div",{className:"logBox1",children:"\ub85c\uadf8\uc778"}),Object(l.jsx)("div",{className:"logBox1",children:"\uce74\ub4dc \ubc88\ud638"}),Object(l.jsx)("div",{className:"logBox1",children:"\uac1c\ud3ec/\uc11c\ucd08"}),Object(l.jsx)("div",{className:"logBox3",children:"\uac15\uc81c \ud1f4\uc2e4 \ucc98\ub9ac"})]}),Object(l.jsx)("hr",{}),i&&i.map((function(e,t){var c=new Date(e.createdAt);return Object(l.jsxs)("div",{className:"logWrapper",children:[Object(l.jsx)("div",{className:"logBox3",children:k(c).format("MM\uc6d4 DD\uc77c HH:mm")}),Object(l.jsx)("div",{className:"logBox2",children:e.type}),Object(l.jsx)("div",{className:"logBox2",children:e.user.userName}),Object(l.jsx)("div",{className:"logBox1",children:e.card.cardId}),Object(l.jsx)("div",{className:"logBox1",children:0===e.card.type?"\uac1c\ud3ec":"\uc11c\ucd08"}),Object(l.jsx)("div",{className:"logBox3",data:e.user._id,onClick:j,children:e.card.cardId===e.user.cardId?"\ud1f4\uc2e4\ucc98\ub9ac\ud558\uae30":null})]},t)}))]})]})};var y=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(o.a,{path:"/",exact:!0,component:u}),Object(l.jsx)(o.a,{path:"/submit",component:v}),Object(l.jsx)(o.a,{path:"/end",component:m}),Object(l.jsx)(o.a,{path:"/admin",component:w})]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,73)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c.p;s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),N()}},[[72,1,2]]]);
//# sourceMappingURL=main.0174492d.chunk.js.map