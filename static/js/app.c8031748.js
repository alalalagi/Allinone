(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],p=0,f=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"button-wrapper"},[n("button",{staticClass:"btn",on:{click:function(e){return t.searchUnsplash("Autumn")}}},[t._v("Autumn")]),n("button",{staticClass:"btn",on:{click:function(e){return t.searchUnsplash("cliff")}}},[t._v("Cliff")]),n("button",{staticClass:"btn",on:{click:function(e){return t.searchUnsplash("ocean")}}},[t._v("Ocean")])]),n("stack",{attrs:{"column-min-width":300,"gutter-width":15,"gutter-height":15,"monitor-images-loaded":""}},t._l(t.images,(function(t,e){return n("stack-item",{key:e,staticStyle:{transition:"transform 300ms"}},[n("img",{attrs:{src:t.urls.small,alt:t.alt_description}})])})),1)],1)])},o=[],c=n("bc3a"),i=n.n(c),s=n("a341"),u={name:"app",components:{Stack:s["a"],StackItem:s["b"]},data:function(){return{images:[]}},methods:{searchUnsplash:function(t){var e=this;this.images=[],i.a.get("https://api.unsplash.com/search/photos?query=".concat(t,"&per_page=20"),{headers:{Authorization:"Client-ID <YourAccessKeyGoesHere>","Accept-Version":"v1"}}).then((function(t){e.images=t.data.results})).catch((function(){e.images=[]}))}}},l=u,p=(n("034f"),n("2877")),f=Object(p["a"])(l,a,o,!1,null,null,null),d=f.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.c8031748.js.map