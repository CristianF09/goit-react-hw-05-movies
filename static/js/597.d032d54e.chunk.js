"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[597],{597:function(e,t,n){n.r(t);var r=n(439),c=n(791),a=n(689),o=n(41),i=n(184);t.default=function(){var e=(0,a.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),u=n[0],s=n[1];return(0,c.useEffect)((function(){(0,o.xc)(e).then((function(e){return s(e.cast)})).catch(console.error)}),[e]),(0,i.jsxs)("div",{children:[(0,i.jsx)("h3",{children:"Cast"}),(0,i.jsx)("ul",{children:u.map((function(e){return(0,i.jsxs)("li",{children:[e.name," as ",e.character]},e.cast_id)}))})]})}},41:function(e,t,n){function r(e,t,n,r,c,a,o){try{var i=e[a](o),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,a){var o=e.apply(t,n);function i(e){r(o,c,a,i,u,"next",e)}function u(e){r(o,c,a,i,u,"throw",e)}i(void 0)}))}}n.d(t,{xc:function(){return v},Y5:function(){return p},Hx:function(){return h},wr:function(){return s},z1:function(){return f}});var a=n(757),o=n.n(a),i="55aa6ae40b9f98b84693daf1163a8814",u="https://api.themoviedb.org/3",s=function(){var e=c(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/trending/movie/day?api_key=").concat(i));case 2:return t=e.sent,e.abrupt("return",t.ok?t.json():Promise.reject("Failed to fetch trending movies"));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/search/movie?query=").concat(t,"&api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.ok?n.json():Promise.reject("Failed to search movies"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.ok?n.json():Promise.reject("Failed to fetch movie details"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.ok?n.json():Promise.reject("Failed to fetch movie credits"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=c(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(u,"/movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.ok?n.json():Promise.reject("Failed to fetch movie reviews"));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=597.d032d54e.chunk.js.map