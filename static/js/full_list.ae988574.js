(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["full_list"],{"8f78":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ViewTemplate",{scopedSlots:t._u([{key:"control-panel",fn:function(){return[e("div"),e("PerformingOptions")]},proxy:!0},{key:"result-display",fn:function(){return[e("DisplaySystem",{attrs:{card_list:t.bookmarks,click_card_head:t.clickCardHead}})]},proxy:!0}])})},o=[],r=e("bc3a"),i=e.n(r),s=e("3150"),l=e("4e06"),u=e("952a"),c=e("581b"),d={name:"full-list",components:{ViewTemplate:c["a"],DisplaySystem:s["a"],PerformingOptions:l["a"]},mixins:[u["a"]],data:function(){return{bookmarks:[]}},mounted:function(){var t=this;i.a.get("http://127.0.0.1:5000/full_list").then((function(n){t.bookmarks=n.data}))}},p=d,f=e("2877"),m=Object(f["a"])(p,a,o,!1,null,null,null);n["default"]=m.exports},"952a":function(t,n,e){"use strict";n["a"]={methods:{clickCardHead:function(t){"folder"==t["type"]?this.$router.push({name:"Folders",params:{folderId:t["id"],startIndex:"0"}}):window.open(t["url"],"_blank")}}}}}]);
//# sourceMappingURL=full_list.ae988574.js.map