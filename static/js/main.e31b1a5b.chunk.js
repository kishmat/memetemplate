(this["webpackJsonpmeme-template"]=this["webpackJsonpmeme-template"]||[]).push([[0],{29:function(e,t,a){e.exports=a(59)},34:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),l=a.n(c),m=(a(34),a(12)),s=a.n(m),o=a(26),i=a(9),u=a(27),p=a.n(u),d=(a(53),function(e){var t=e.memes.map((function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"image",src:e.url,alt:"Avatar",style:{width:"70%",height:"270px"}}),r.a.createElement("h4",{className:"text-center"},r.a.createElement("b",null,e.name)),r.a.createElement("a",{href:"https://imgflip.com/memegenerator/".concat(e.id),className:"btn btn-primary m-5"},"Create Meme "))}));return r.a.createElement("div",{className:"allcard"},t)}),v=function(e){e.memes;var t=Object(n.useState)(""),a=Object(i.a)(t,2);a[0],a[1];return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-inverse"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Meme Template")))),r.a.createElement("br",null),r.a.createElement("div",null))},E=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];function l(){return(l=Object(o.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.imgflip.com/get_memes");case 2:return t=e.sent,e.next=5,t.data.data.memes;case 5:a=e.sent,console.log(a),c(a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){l.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Get your favourite Meme Template"),r.a.createElement(v,{memes:a}),r.a.createElement(d,{memes:a}))},f=a(11),h=a(1),b=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Posted meme template"))};var g=function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:E}),r.a.createElement(h.a,{path:"/post",exact:!0,component:b})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.e31b1a5b.chunk.js.map