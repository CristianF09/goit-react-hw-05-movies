"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[449],{449:function(e,n,t){t.r(n);var r=t(439),c=t(791),i=t(689),o=t(87),a=t(41),u=t(184);n.default=function(){var e=(0,i.UO)().movieId,n=(0,c.useState)(null),t=(0,r.Z)(n,2),s=t[0],f=t[1];return(0,c.useEffect)((function(){(0,a.Y5)(e).then(f).catch(console.error)}),[e]),s?(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:s.title}),(0,u.jsx)("p",{children:s.overview}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(i.j3,{})]}):(0,u.jsx)("div",{children:"Loading..."})}},41:function(e,n,t){function r(e,n,t,r,c,i,o){try{var a=e[i](o),u=a.value}catch(s){return void t(s)}a.done?n(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var n=this,t=arguments;return new Promise((function(c,i){var o=e.apply(n,t);function a(e){r(o,c,i,a,u,"next",e)}function u(e){r(o,c,i,a,u,"throw",e)}a(void 0)}))}}t.d(n,{Y5:function(){return h},wr:function(){return s},z1:function(){return f}});var i=t(757),o=t.n(i),a="55aa6ae40b9f98b84693daf1163a8814",u="https://api.themoviedb.org/3",s=function(){var e=c(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/trending/movie/day?api_key=").concat(a));case 2:return n=e.sent,e.abrupt("return",n.ok?n.json():Promise.reject("Failed to fetch trending movies"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=c(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/search/movie?query=").concat(n,"&api_key=").concat(a));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():Promise.reject("Failed to search movies"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=c(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(n,"?api_key=").concat(a));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():Promise.reject("Failed to fetch movie details"));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=449.c2854599.chunk.js.map