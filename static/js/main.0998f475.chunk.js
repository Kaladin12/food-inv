(this["webpackJsonpfood-inventory"]=this["webpackJsonpfood-inventory"]||[]).push([[0],{39:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),r=c(31),s=c.n(r),i=(c(39),c(20)),o=c(8),l=c.n(o),d=c(13),u=c(14),j=c(15),m=c(32),b=(c(49),m.a.initializeApp({apiKey:"AIzaSyAyp7nP9vav_Ret9lCNBpw1kZmwDuT2rWs",authDomain:"grocery-inventory-cdee2.firebaseapp.com",projectId:"grocery-inventory-cdee2",storageBucket:"grocery-inventory-cdee2.appspot.com",messagingSenderId:"268578840819",appId:"1:268578840819:web:37bfa51d5148e64bf69786"}).firestore()),p=c(1),h=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(!0),s=Object(j.a)(r,2),o=s[0],m=s[1],h=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o&&(b.collection("items").onSnapshot((function(e){var t=[];e.forEach((function(e){0!==e.data().quant&&t.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),n(t)})),m(!1));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){h()}),[]);var x=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[Object(d.a)({},t)],a?r[0].quant++:r[0].quant>0&&r[0].quant--,s=Object(i.a)(c),o=0,s.forEach((function(e){e.id===r[0].id&&(s[o]=r[0]),o++})),n(Object(i.a)(s)),e.next=8,b.collection("items").doc(r[0].id).update(r[0]);case 8:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();return Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"row",children:c.map((function(e){return Object(p.jsx)("div",{className:"col-md-3","border-radius":"7%",children:Object(p.jsxs)("div",{id:"ups",className:"card text-white bg-primary mb-2",children:[Object(p.jsxs)("div",{className:"card-body ",children:[Object(p.jsx)("h3",{children:e.name}),Object(p.jsxs)("h4",{className:"lead",children:["Existencias: ",e.quant]}),Object(p.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(p.jsx)("i",{className:"material-icons text-danger",onClick:function(){x(e,!1)},children:"remove_circle"}),Object(p.jsx)("i",{className:"material-icons text-danger",onClick:function(){x(e,!0)},children:"add_circle"})]})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsx)("div",{className:"polaroid",children:Object(p.jsx)("img",{width:"100%",className:"imgItem",src:e.url,alt:""})})]})},e.id)}))})})},x=c(24),O=function(){var e=Object(a.useState)({name:"",quant:0,url:""}),t=Object(j.a)(e,2),c=t[0],n=t[1],r=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("items").doc().set(t);case 2:console.log("newTaskAdded");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,r(c);case 3:n({name:"",quant:0,url:""});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(e){var t=e.target,a=t.name,r=t.value;n(Object(d.a)(Object(d.a)({},c),{},Object(x.a)({},a,r)))};return Object(p.jsx)("div",{children:Object(p.jsxs)("form",{className:"card card-body",onSubmit:s,children:[Object(p.jsxs)("div",{className:"form-group input-group",children:[Object(p.jsx)("div",{className:"input-group-text bg-light",children:Object(p.jsx)("i",{className:"material-icons",children:"assignment"})}),Object(p.jsx)("input",{value:c.name,onChange:i,type:"text",className:"form-control",placeholder:"At\xfan",name:"name"})]}),Object(p.jsxs)("div",{className:"form-group input-group",children:[Object(p.jsx)("div",{className:"input-group-text bg-light",children:Object(p.jsx)("i",{className:"material-icons",children:"plus_one"})}),Object(p.jsx)("input",{value:c.quant,onChange:i,type:"text",className:"form-control",placeholder:"1",name:"quant"})]}),Object(p.jsxs)("div",{className:"form-group input-group",children:[Object(p.jsx)("div",{className:"input-group-text bg-light",children:Object(p.jsx)("i",{className:"material-icons",children:"wallpaper"})}),Object(p.jsx)("input",{value:c.url,onChange:i,type:"text",className:"form-control",placeholder:"https://www.google.com/",name:"url"})]}),Object(p.jsx)("button",{className:"btn btn-primary",children:"Guardar"})]})})},f=c(19),v=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary",children:Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:[Object(p.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(p.jsx)("li",{className:"nav-item active",children:Object(p.jsx)(f.b,{className:"nav-link",exact:!0,to:"/home",children:"Home"})}),Object(p.jsx)("li",{className:"nav-item active",children:Object(p.jsx)(f.b,{className:"nav-link",exact:!0,to:"/create",children:"New Item "})}),Object(p.jsx)("li",{className:"nav-item active",children:Object(p.jsx)(f.b,{className:"nav-link",exact:!0,to:"/zero",children:"Zero "})})]}),Object(p.jsxs)("form",{className:"form-inline my-2 my-lg-0",onSubmit:function(e){e.preventDefault()},children:[Object(p.jsx)("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search"}),Object(p.jsx)("button",{className:"btn btn-secondary my-2 my-sm-0",type:"submit",children:"Search"})]})]})})})},N=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.collection("items").onSnapshot((function(e){var t=[];e.forEach((function(e){0===e.data().quant&&t.push(Object(d.a)(Object(d.a)({},e.data()),{},{id:e.id}))})),n(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=[Object(d.a)({},t)])[0].quant++,r=Object(i.a)(c),s=0,r.forEach((function(e){e.id===a[0].id&&(r[s]=a[0]),s++})),n(Object(i.a)(r)),e.next=8,b.collection("items").doc(a[0].id).update(a[0]);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){r()}),[]),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:"row",children:c.map((function(e){return Object(p.jsx)("div",{className:"col-md-3","border-radius":"7%",children:Object(p.jsxs)("div",{id:"ups",className:"card text-white bg-primary mb-2",children:[Object(p.jsxs)("div",{className:"card-body ",children:[Object(p.jsx)("h3",{children:e.name}),Object(p.jsxs)("h4",{className:"lead",children:["Existencias: ",e.quant]}),Object(p.jsx)("div",{className:"d-flex justify-content-between",children:Object(p.jsx)("i",{className:"material-icons text-danger",onClick:function(){s(e)},children:"add_circle"})})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsx)("div",{className:"polaroid",children:Object(p.jsx)("img",{width:"100%",className:"imgItem",src:e.url,alt:""})})]})},e.id)}))})})},g=c(4);var y=function(){return Object(p.jsx)("div",{className:"container p-8",children:Object(p.jsx)("div",{className:"content",id:"content",children:Object(p.jsxs)(f.a,{children:[Object(p.jsx)(v,{}),Object(p.jsxs)(g.c,{children:[Object(p.jsx)(g.a,{exact:!0,path:"/home",component:h}),Object(p.jsx)(g.a,{path:"/create",component:O}),Object(p.jsx)(g.a,{path:"/zero",component:N})]})]})})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,50)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(47);s.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(y,{})}),document.getElementById("root")),w()}},[[48,1,2]]]);
//# sourceMappingURL=main.0998f475.chunk.js.map