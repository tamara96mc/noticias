(this.webpackJsonpnoticias=this.webpackJsonpnoticias||[]).push([[0],{12:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(5),l=t.n(c),o=t(2),i=t.n(o),s=t(1),u=function(e){var a=e.titulo;return r.a.createElement("nav",{className:"nav-wrapper light-blue darken-3"},r.a.createElement("a",{href:"#!",className:"brand-logo center"},a))},m=t(3),d=t.n(m),v=function(e,a){var t=Object(n.useState)(e),c=Object(s.a)(t,2),l=c[0],o=c[1];return[l,function(){return r.a.createElement("select",{className:"browser-default",value:l,onChange:function(e){return o(e.target.value)}},a.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))}]},b=function(e){var a=e.guardarCategoria,t=v("general",[{value:"general",label:"General"},{value:"business",label:"Negocios"},{value:"entertainment",label:"Entretenimiento"},{value:"health",label:"Salud"},{value:"science",label:"Ciencia"},{value:"sports",label:"Deportes"},{value:"technology",label:"Tecnolog\xeda"}]),n=Object(s.a)(t,2),c=n[0],l=n[1];return r.a.createElement("div",{className:"".concat(d.a.buscador," row")},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(c)}},r.a.createElement("h2",{className:d.a.heading},"Encuentra Noticias por Categor\xeda"),r.a.createElement(l,null),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{type:"submit",className:"".concat(d.a["btn-block"],"  btn-large amber darken-2"),value:"Buscar"})))))},f=function(e){var a=e.noticia,t=a.urlToImage,n=a.url,c=a.title,l=a.description,o=a.source,i=t?r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:t,alt:c}),r.a.createElement("span",{className:"card-title"},o.name)):null;return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},i,r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,c),r.a.createElement("p",null,l)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"waves-effect waves-light btn"},"Ver Noticia Completa"))))},E=function(e){var a=e.noticias;return r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(f,{key:e.url,noticia:e})})))};var p=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),m=o[0],d=o[1];return Object(n.useEffect)((function(){!function(){var e,a,n;i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e="https://newsapi.org/v2/top-headlines?country=mx&category=".concat(t,"&apiKey=6c1c1dfcb4a943c7bf481bc628b80153"),r.next=3,i.a.awrap(fetch(e));case 3:return a=r.sent,r.next=6,i.a.awrap(a.json());case 6:n=r.sent,d(n.articles);case 8:case"end":return r.stop()}}))}()}),[t]),r.a.createElement(n.Fragment,null,r.a.createElement(u,{titulo:"Buscador de Noticias"}),r.a.createElement("div",{className:"container white"},r.a.createElement(b,{guardarCategoria:c}),r.a.createElement(E,{noticias:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,a,t){e.exports={heading:"Formulario_heading__2ntZH",buscador:"Formulario_buscador__3leO-","btn-block":"Formulario_btn-block__3r4du"}},6:function(e,a,t){e.exports=t(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.db1744b6.chunk.js.map