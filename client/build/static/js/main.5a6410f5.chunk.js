(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{37:function(e,t,n){},38:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(30),i=n.n(r),s=(n(37),n(31)),o=n(2),u=(n(38),n(1));var l=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{className:"btn",onClick:function(){window.location.href="/api/user/login"},children:"42 Log In"})})},h=n(9),j=n.n(h),d=n(15),b=n(10),p=n(13),x=n.n(p),f=n(20);n(59);var O=function(e){var t=e.name,n=e.text,c=e.checkStatus,a=e.setCheckStatus;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"checkbox",type:"checkbox",checked:c[t],onChange:function(){var e=c[t];a([].concat(Object(f.a)(c.slice(0,t)),[!e],Object(f.a)(c.slice(t+1))))}}),n]})},v=(n(60),"http://13.209.202.141");var k=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),i=Object(b.a)(r,2),s=i[0],o=i[1],l=Object(c.useState)(!1),h=Object(b.a)(l,2),p=h[0],f=h[1],k=Object(c.useState)([!1,!1,!1]),g=Object(b.a)(k,2),m=g[0],w=g[1],C=Object(c.useState)(""),S=Object(b.a)(C,2),y=S[0],N=S[1],I=Object(c.useState)(!1),J=Object(b.a)(I,2),F=J[0],T=J[1],B=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F){e.next=25;break}return console.log("checkin"),e.prev=2,e.next=5,x.a.get("".concat(v,"/api/card/valid/").concat(y));case 5:if(!1!==e.sent.data.using){e.next=18;break}return e.prev=7,e.next=10,x.a.post("".concat(v,"/api/user/checkIn/").concat(y));case 10:window.location.href="/end",e.next=16;break;case 13:e.prev=13,e.t0=e.catch(7),console.log(e.t0);case 16:e.next=20;break;case 18:N(""),alert("\uc720\ud6a8\ud55c \uce74\ub4dc \ubc88\ud638\uac00 \uc544\ub2d9\ub2c8\ub2e4");case 20:e.next=25;break;case 22:e.prev=22,e.t1=e.catch(2),console.log(e.t1);case 25:case"end":return e.stop()}}),e,null,[[2,22],[7,13]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F){e.next=11;break}return console.log("checkout"),e.prev=2,e.next=5,x.a.post("".concat(v,"/api/user/checkOut"));case 5:window.location.href="/end",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(j.a.mark((function e(){var t,n,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("/api/user/status");case 3:t=e.sent,n=t.data,c=n.login,r=n.card,console.log("login, card",c,r),a(c),o(null!==r),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),document.cookie="w_auth=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.href="/";case 15:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(e){for(var t=e+"=",n="",c=document.cookie.split(";"),a=0;a<c.length;a++)if(" "===c[a][0]&&(c[a]=c[a].substring(1)),0===c[a].indexOf(t))return c[a].slice(t.length,c[a].length);return n}("w_auth");console.log("token: ",e),""!==e?D():window.location.href="/",!1===s&&""!==y&&JSON.stringify(m)===JSON.stringify([!0,!0,!0])&&T(!0),""!==y&&"---"!==y&&JSON.stringify(m)===JSON.stringify([!0,!0,!0])||T(!1)}),[n,y,m,s,F]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{id:"checkinout",children:[Object(u.jsx)("h1",{id:"title",children:s?"42 CheckOut":"42 CheckIn"}),Object(u.jsxs)("h3",{id:"userId",children:["Intra ID: ",n]}),s?Object(u.jsx)("div",{className:"submitBtn ready",onClick:L,children:"Check Out"}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"input-wrapper",children:[Object(u.jsx)("input",{type:"checkbox",checked:p,onChange:function(e){var t=e.target.checked;f(t),w([t,t,t])}}),"\ubaa8\ub450 \ub3d9\uc758",Object(u.jsx)("div",{className:"checkbox-wrapper",children:["\ubc1c\uc5f4 \uccb4\ud06c\uc2dc 37.5\ub3c4 \uc774\ud558\uc778 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.","\uc774 \uc784\uc2dc \ucd9c\uc785\uce74\ub4dc\ub97c \ubd84\uc2e4 \uc2dc \ubd84\uc2e4 \ube44\uc6a9\uc774 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ud655\uc778\ud588\uc2b5\ub2c8\ub2e4.","\ub9c8\uc2a4\ud06c\ub97c \ubc18\ub4dc\uc2dc \uc0c1\uc2dc \ucc29\uc6a9\ud558\uace0 \ubc29\uc5ed\uc218\uce59\uc744 \uc900\uc218\ud560 \uac83\uc744 \uc57d\uc18d\ud558\uba70, \ubaa8\ub4e0 \uc124\ubb38\uc744 \uc774\uc0c1\uc5c6\uc774 \uc791\uc131\ud588\uc74c\uc744 \ud655\uc778\ud569\ub2c8\ub2e4."].map((function(e,t){return Object(u.jsx)(O,{name:t,text:e,checkStatus:m,setCheckStatus:w},t)}))})]}),Object(u.jsxs)("div",{className:"input-wrapper",children:[Object(u.jsx)("h3",{children:"Card Number"}),Object(u.jsx)("div",{id:"card",children:Object(u.jsx)("input",{type:"text",name:"text",value:y,onChange:function(e){N(e.target.value)}})})]}),Object(u.jsx)("div",{className:"submitBtn ".concat(F?" ready":""),onClick:B,children:"Check In"})]})]})})};var g=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("h1",{style:{textAlign:"center",marginTop:"50%"},children:"Complete!"})})};n(61);var m=function(){return Object(u.jsxs)(s.a,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:l}),Object(u.jsx)(o.a,{path:"/submit",component:k}),Object(u.jsx)(o.a,{path:"/end",component:g})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),w()}},[[67,1,2]]]);
//# sourceMappingURL=main.5a6410f5.chunk.js.map