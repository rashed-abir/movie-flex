(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{86:function(e,t,c){},87:function(e,t,c){},99:function(e,t,c){"use strict";c.r(t);var n=c(4),i=c(0),a=c.n(i),r=c(16),o=c.n(r),s=(c(86),c(87),c(29)),l=c(14),b=c(2),j=c(5);var d=function(e){var t,c=e.id,i=e.title,a=e.poster_path,r=(e.overview,e.vote_average);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)(s.b,{to:"/movie/".concat(c),children:Object(n.jsx)("img",{src:"http://image.tmdb.org/t/p/w1280"+a,alt:i})}),Object(n.jsxs)("div",{className:"movie-info",children:[Object(n.jsx)(s.b,{className:"link",to:"/movie/".concat(c),children:Object(n.jsx)("h3",{children:i})}),Object(n.jsx)("span",{className:"tag ".concat((t=r,t>=8?"green":t>=6?"orange":"red")),children:r})]})]})})},h="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=1";var m=function(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(i.useState)(""),o=Object(j.a)(r,2),l=o[0],m=o[1],u=Object(i.useState)(1),v=Object(j.a)(u,2),f=v[0],p=v[1];Object(i.useEffect)((function(){x("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=1")}),[]);var x=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){p(e.page),a(e.results)}))};return Object(n.jsxs)("div",{className:"all-movie",children:[Object(n.jsxs)("header",{children:[Object(n.jsx)("h1",{children:Object(n.jsxs)(s.b,{className:"link",to:"/movie-flex",onClick:function(){fetch(h).then((function(e){return e.json()})).then((function(e){a(e.results)}))},children:[Object(n.jsx)("i",{className:"fas fa-video icon"})," Movie Flex"]})}),Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?&api_key=23bffabfa709b9579baf869e0d369bc3&query="+l).then((function(e){return e.json()})).then((function(e){a(e.results)})),m("")},children:Object(n.jsx)("input",{type:"text",className:"search",placeholder:"Search...",onChange:function(e){return m(e.target.value)},value:l})})]}),Object(n.jsx)("div",{className:"movie-container",children:c.length>1&&c.map((function(e){return Object(n.jsx)(d,Object(b.a)({},e),e.id)}))}),Object(n.jsxs)("div",{className:"page-button",children:[Object(n.jsx)("button",{className:"button prev-button",onClick:function(){var e="";if(1===f)return x(e);e="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=".concat(f-1),x(e)},children:"Prev"}),Object(n.jsx)("button",{className:"button",onClick:function(){var e;console.log("CurrentPage",f),e="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=23bffabfa709b9579baf869e0d369bc3&page=".concat(f+1),x(e)},children:"Next"})]}),Object(n.jsx)("footer",{children:"All Right Reserved to @Movie-Flex"})]})},u=c(101).a.Title;var v=function(e){return Object(n.jsx)("div",{style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n            39%,rgba(0,0,0,0)\n            41%,rgba(0,0,0,0.65)\n            100%),\n            url('".concat(e.image,"'), #1c1c1c"),height:"500px",backgroundSize:"100%, cover",backgroundPosition:"center, center",width:"100%",position:"relative"},children:Object(n.jsx)("div",{children:Object(n.jsxs)("div",{style:{position:"absolute",maxWidth:"500px",bottom:"2rem",marginLeft:"2rem"},children:[Object(n.jsx)(u,{style:{color:"white"},level:2,children:e.title}),Object(n.jsxs)("p",{style:{color:"white",fontSize:"1rem"},children:[e.text," "]})]})})})},f=c(102);var p=function(e){var t=e.movie;return Object(n.jsx)("div",{className:"movies-info",children:Object(n.jsxs)(f.b,{title:"Movie Info",bordered:!0,style:{padding:"5px",marginBottom:"5px"},children:[Object(n.jsx)(f.b.Item,{label:"Title",className:"item",children:t.original_title}),Object(n.jsx)(f.b.Item,{label:"Release_Date",className:"item",children:t.release_date}),Object(n.jsx)(f.b.Item,{label:"Revenue",className:"item",children:t.revenue}),Object(n.jsx)(f.b.Item,{label:"Runtime",className:"item",children:t.runtime}),Object(n.jsx)(f.b.Item,{label:"Vote Average",span:2,className:"item",children:t.vote_average}),Object(n.jsx)(f.b.Item,{label:"Vote Count",className:"item",children:t.vote_count}),Object(n.jsx)(f.b.Item,{label:"Status",className:"item",children:t.status}),Object(n.jsx)(f.b.Item,{label:"Popularity",className:"item",children:t.popularity}),Object(n.jsx)(f.b.Item,{label:"Home Page",className:"item",children:""===t.homepage?"":Object(n.jsx)("a",{href:t.homepage,target:"_blank",rel:"noreferrer",className:"homepage",children:"Click Here"})})]})})};var x=function(){var e=Object(l.f)().id,t=Object(i.useState)([]),c=Object(j.a)(t,2),a=c[0],r=c[1],o=Object(i.useState)(!0),s=Object(j.a)(o,2),b=s[0],d=s[1];Object(i.useEffect)((function(){var t="https://api.themoviedb.org/3/movie/".concat(e,"?api_key=23bffabfa709b9579baf869e0d369bc3");h(t)}),[e]);var h=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e),r(e),d(!1)})).catch((function(e){return console.error("Error:",e)}))};return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:b?Object(n.jsx)("div",{children:"loading..."}):Object(n.jsx)(v,{image:"".concat("http://image.tmdb.org/t/p/").concat("w1280","/").concat(a.backdrop_path),title:a.original_title,text:a.overview})}),Object(n.jsx)("div",{children:b?Object(n.jsx)("div",{children:"loading..."}):Object(n.jsx)(p,{movie:a})}),Object(n.jsx)("footer",{children:"Developed by @rashed"})]})};var O=function(){return Object(n.jsx)(i.Suspense,{fallback:Object(n.jsx)("div",{children:"Loading..."}),children:Object(n.jsx)(s.a,{children:Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{path:"/movie-flex",exact:!0,children:Object(n.jsx)(m,{})}),Object(n.jsx)(l.a,{path:"/movie/:id",exact:"true",component:x})]})})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,103)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),a(e),r(e)}))};o.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),g()}},[[99,1,2]]]);
//# sourceMappingURL=main.f0d54256.chunk.js.map