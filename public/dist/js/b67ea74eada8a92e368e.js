"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[225],{7225:(t,e,a)=>{a.r(e),a.d(e,{default:()=>h});var n=a(7757),i=a.n(n),r=a(9669),s=a.n(r),o=a(5703),c=a(5279),l=a(538),u=a(629);function d(t,e,a,n,i,r,s){try{var o=t[r](s),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(n,i)}function f(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const b={name:"Index",components:{Loader:o.Z,HeaderFilterInfo:c.Z},metaInfo:function(){return{title:this.$t("attributes.index.title")}},data:function(){return{viewLength:10,attributes:{},filter:new l.default,busCreateAttribute:new l.default}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?f(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,u.Se)({locale:"lang/locale"})),mounted:function(){var t,e=this;return(t=i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.busCreateAttribute.$on("save",e.store);case 2:return t.next=4,e.$root.$loading.set(50);case 4:return t.next=6,s().get("/api/admin/attributes",{params:{per_page:e.viewLength}}).then((function(t){console.log(t.data),e.attributes=t.data.payload.attributes,e.$root.$loading.finish()})).catch((function(t){console.log(t),e.$root.$loading.fail()}));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(n,i){var r=t.apply(e,a);function s(t){d(r,n,i,s,o,"next",t)}function o(t){d(r,n,i,s,o,"throw",t)}s(void 0)}))})()},methods:{get:function(t){var e=this;s().get("/api/admin/attributes",{params:{per_page:this.viewLength,page:t.page,search:t.search}}).then((function(t){e.attributes=t.data.payload.attributes,e.filter.$emit("updateData",t.data.payload.attributes),console.log("new data",t.data)}))},setViewLength:function(t){this.viewLength=t},deleteItem:function(t){var e=this;s().delete("/api/admin/attributes/"+t).then((function(t){e.$vs.notification({duration:2e3,sticky:!0,position:"top-right",color:"success",title:e.$t("notification.delete.success.title",{name:t.data.payload.attribute.name}),text:e.$t("notification.delete.success.text",{name:t.data.payload.attribute.name})}),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})})).catch((function(t){e.$vs.notification({duration:2e3,sticky:!0,position:"top-right",color:"danger",title:e.$t("notification.delete.danger.title"),text:t.response.data.message}),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})}))},update:function(t){this.$router.push({name:"dashboard.attributes.edit",params:{id:t}})},store:function(){this.$router.push({name:"dashboard.attributes.store"})}}};const h=(0,a(1900).Z)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$root.$loading.show?a("Loader"):a("div",[a("HeaderFilterInfo",{ref:"filter",attrs:{values:t.attributes,"view-length":t.viewLength,title:t.$t("attributes.index.filter_title"),filter:t.filter},on:{create:t.store,get:t.get,setViewLength:t.setViewLength}}),t._v(" "),a("div",{staticClass:"row gy-3 mt-3"},t._l(t.attributes.data,(function(e){return a("div",{key:e.id,staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row align-items-center mx-0"},[a("div",{staticClass:"col-auto"},[a("h6",{staticClass:"mb-0"},[t._v("\n                "+t._s(e.translations.find((function(e){return e.locale===t.locale})).name)+"\n              ")])]),t._v(" "),a("div",{staticClass:"col-auto ms-auto"},[a("div",{staticClass:"row gx-0"},[a("div",{staticClass:"col"},[a("vs-button",{attrs:{icon:"",circle:"",success:"",flat:""},on:{click:function(a){return t.update(e.id)}}},[a("em",{staticClass:"bx bx-pencil"})])],1),t._v(" "),a("div",{staticClass:"col"},[a("vs-button",{attrs:{icon:"",circle:"",danger:"",flat:""},on:{click:function(a){return t.deleteItem(e.id)}}},[a("em",{staticClass:"bx bx-trash-alt"})])],1)])])])])])])})),0)],1)}),[],!1,null,"aba3f7e2",null).exports}}]);
//# sourceMappingURL=b67ea74eada8a92e368e.js.map