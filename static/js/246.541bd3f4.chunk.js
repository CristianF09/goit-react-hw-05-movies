"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[246],{246:function(n,e,t){t.r(e);var r=t(439),c=t(791),o=t(41),i=t(906),a=t(184);e.default=function(){var n=(0,c.useState)([]),e=(0,r.Z)(n,2),t=e[0],u=e[1];return(0,c.useEffect)((function(){(0,o.wr)().then((function(n){return u(n.results)})).catch(console.error)}),[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Trending Movies"}),(0,a.jsx)(i.Z,{movies:t})]})}},906:function(n,e,t){var r=t(87),c=t(184);e.Z=function(n){var e=n.movies;return(0,c.jsx)("ul",{children:e.map((function(n){return(0,c.jsx)("li",{children:(0,c.jsx)(r.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})}},41:function(n,e,t){function r(n,e,t,r,c,o,i){try{var a=n[o](i),u=a.value}catch(s){return void t(s)}a.done?e(u):Promise.resolve(u).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,o){var i=n.apply(e,t);function a(n){r(i,c,o,a,u,"next",n)}function u(n){r(i,c,o,a,u,"throw",n)}a(void 0)}))}}t.d(e,{Y5:function(){return v},wr:function(){return s},z1:function(){return f}});var o=t(757),i=t.n(o),a="55aa6ae40b9f98b84693daf1163a8814",u="https://api.themoviedb.org/3",s=function(){var n=c(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/trending/movie/day?api_key=").concat(a));case 2:return e=n.sent,n.abrupt("return",e.ok?e.json():Promise.reject("Failed to fetch trending movies"));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=c(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/search/movie?query=").concat(e,"&api_key=").concat(a));case 2:return t=n.sent,n.abrupt("return",t.ok?t.json():Promise.reject("Failed to search movies"));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=c(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(u,"/movie/").concat(e,"?api_key=").concat(a));case 2:return t=n.sent,n.abrupt("return",t.ok?t.json():Promise.reject("Failed to fetch movie details"));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=246.541bd3f4.chunk.js.map