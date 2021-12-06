"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[418],{401:(t,e,a)=>{a.d(e,{Z:()=>o});function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const s={name:"EditItemsModal",props:{bus:{type:a(538).default,required:!0},title:{type:String,required:!1,default:""},fields:{type:Array,required:!0},inputs:{type:Object,default:new Object}},data:function(){return{active:!1,data:{},nameTitle:"",loading:!1,error:{}}},computed:{translateTitle:function(){return""===this.title?this.$t("form.title.edit"):this.$t(this.title)}},mounted:function(){this.data=this.inputs,this.data.name&&(this.nameTitle=this.data.name),this.bus.$on("openModal",this.openModal)},methods:{openModal:function(){this.active=!0},save:function(){this.loading=!0,this.bus.$emit("save",n(n({},this.data),{},{callbackSuccess:this.callbackSuccess,callbackError:this.callbackError}))},callbackSuccess:function(){this.active=!1,this.loading=!1,this.error={}},callbackError:function(t){this.loading=!1,this.error=t}}};const o=(0,a(1900).Z)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vs-dialog",{attrs:{loading:t.loading,"not-center":"",width:"300px"},scopedSlots:t._u([{key:"header",fn:function(){return[a("h4",{staticClass:"not-margin"},[t._v("\n      "+t._s(t.translateTitle)+" "),t.nameTitle?a("strong",[t._v(t._s(t.nameTitle))]):t._e()])]},proxy:!0},{key:"footer",fn:function(){return[a("div",{staticClass:"row justify-content-end align-items-center"},[a("div",{staticClass:"col-auto"},[a("vs-button",{attrs:{flat:"",success:""},on:{click:t.save}},[t._v("\n          "+t._s(t.$t("form.save"))+"\n        ")])],1),t._v(" "),a("div",{staticClass:"col-auto"},[a("vs-button",{attrs:{danger:"",flat:""},on:{click:function(e){t.active=!1}}},[t._v("\n          "+t._s(t.$t("form.cancel"))+"\n        ")])],1)])]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._v(" "),a("div",{staticClass:"con-content"},[t._l(t.fields,(function(e){return"id"!==e?a("vs-input",{key:e,staticClass:"mt-2",attrs:{placeholder:t.$t("form.inputs."+e+".placeholder")},scopedSlots:t._u([t.error[e]?{key:"message-danger",fn:function(){return[t._v("\n        "+t._s(t.error[e][0])+"\n      ")]},proxy:!0}:null],null,!0),model:{value:t.data[e],callback:function(a){t.$set(t.data,e,a)},expression:"data[field]"}}):t._e()})),t._v(" "),t.error.message?a("span",{staticClass:"text-danger"},[t._v("\n      "+t._s(t.error.message)+"\n    ")]):t._e()],2)])}),[],!1,null,"38f3f3d4",null).exports},6976:(t,e,a)=>{a.d(e,{Z:()=>i});var r=a(538);const n={name:"ItemCardOneField",components:{EditItemsModal:a(401).Z},props:{item:{type:Object,required:!0},hideUpdate:{type:Boolean,default:!1},fields:{type:Array,required:!0},updateModalTitle:{type:String,required:!1,default:""},hideId:{type:Boolean,required:!1,default:!0}},data:function(){return{bus:new r.default}},computed:{inputs:function(){var t=this,e={};return this.fields.forEach((function(a){e[a]=t.item[a]})),e},checkTitleRouter:function(){return void 0!==this.$attrs["title-router"]}},mounted:function(){this.bus.$on("save",this.update)},methods:{openModal:function(){this.bus.$emit("openModal",{name:this.name,id:this.id})},update:function(t){this.$emit("update",t)},routePush:function(t){console.log(this.$attrs["title-router"]),this.$emit("title-route"),void 0!==this.$attrs["title-router"]&&(0!==t||this.hideId||this.$emit("title-route"),1===t&&this.hideId&&this.$emit("title-route"))}}};const i=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row align-items-center mx-0"},[t._l(t.fields,(function(e,r){return a("div",{key:e,staticClass:"col-auto",class:"id"===e&&t.hideId||"password"===e?"d-none":""},[a("h6",{staticClass:"mb-0",style:t.checkTitleRouter?"cursor: pointer":"",on:{click:function(e){return t.routePush(r)}}},[t._v("\n            "+t._s(t.inputs[e])+" "+t._s("cost"===e?" ₸":"")+"\n          ")])])})),t._v(" "),a("div",{staticClass:"col-auto ms-auto"},[a("div",{staticClass:"row gx-0"},[!1===t.hideUpdate?a("div",{staticClass:"col"},[a("vs-button",{attrs:{icon:"",circle:"",success:"",flat:""},on:{click:t.openModal}},[a("em",{staticClass:"bx bx-pencil"})])],1):t._e(),t._v(" "),a("div",{staticClass:"col"},[a("vs-button",{attrs:{icon:"",circle:"",danger:"",flat:""},on:{click:function(e){return t.$emit("destroy",t.inputs.id)}}},[a("em",{staticClass:"bx bx-trash-alt"})])],1)])])],2)])]),t._v(" "),a("EditItemsModal",{attrs:{bus:t.bus,title:t.updateModalTitle,fields:t.fields,inputs:t.inputs}})],1)}),[],!1,null,"b89d3cf0",null).exports},2311:(t,e,a)=>{a.r(e),a.d(e,{default:()=>g});var r=a(7757),n=a.n(r),i=a(9669),s=a.n(i),o=a(5703),c=a(5279),u=a(6976),l=a(401),d=a(538),f=(a(9827),a(629));function p(t,e,a,r,n,i,s){try{var o=t[i](s),c=o.value}catch(t){return void a(t)}o.done?e(c):Promise.resolve(c).then(r,n)}function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function h(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const v={name:"Index",components:{Loader:o.Z,HeaderFilterInfo:c.Z,ItemCardOneField:u.Z,EditItemsModal:l.Z},data:function(){return{viewLength:10,manufacturers:{},filter:new d.default,busCreateManufacturer:new d.default,inputs:["id","name"]}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){h(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,f.Se)({user:"auth/user"})),mounted:function(){var t,e=this;return(t=n().mark((function t(){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.busCreateManufacturer.$on("save",e.store);case 2:return t.next=4,e.$root.$loading.set(50);case 4:return t.next=6,s().get("/api/admin/manufacturers",{params:{per_page:e.viewLength}}).then((function(t){console.log(t.data),e.manufacturers=t.data.payload.manufacturers,e.$root.$loading.finish()})).catch((function(t){console.log(t),e.$root.$loading.fail()}));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,a=arguments;return new Promise((function(r,n){var i=t.apply(e,a);function s(t){p(i,r,n,s,o,"next",t)}function o(t){p(i,r,n,s,o,"throw",t)}s(void 0)}))})()},methods:{get:function(t){var e=this;s().get("/api/admin/manufacturers",{params:{per_page:this.viewLength,page:t.page,search:t.search}}).then((function(t){e.manufacturers=t.data.payload.manufacturers,e.filter.$emit("updateData",t.data.payload.manufacturers),console.log("new data",t.data)}))},setViewLength:function(t){this.viewLength=t},deleteItem:function(t){var e=this;s().delete("/api/admin/manufacturers/"+t).then((function(t){e.$vs.notification({duration:2e3,sticky:!0,position:"top-right",color:"success",title:e.$t("notification.delete.success.title",{name:t.data.payload.manufacturer.name}),text:e.$t("notification.delete.success.text",{name:t.data.payload.manufacturer.name})}),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})})).catch((function(t){e.$vs.notification({duration:2e3,sticky:!0,position:"top-right",color:"danger",title:e.$t("notification.delete.danger.title"),text:t.response.data.message}),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})}))},update:function(t){var e=this;s().put("/api/admin/manufacturers/"+t.id,{name:t.name}).then((function(a){a.data.success?(t.callbackSuccess(),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})):t.callbackError("Не предвиденная ошибка")})).catch((function(e){e.response.data.errors?t.callbackError(e.response.data.errors):t.callbackError({message:e.response.data.message})}))},store:function(t){var e=this;s().post("/api/admin/manufacturers/",{name:t.name}).then((function(a){a.data.success?(t.callbackSuccess(),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})):t.callbackError("Server return Error")})).catch((function(e){e.response.data.errors?t.callbackError(e.response.data.errors):t.callbackError({message:e.response.data.message})}))}}};const g=(0,a(1900).Z)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$root.$loading.show?a("Loader"):a("div",[a("HeaderFilterInfo",{ref:"filter",attrs:{values:t.manufacturers,"view-length":t.viewLength,title:t.$t("manufacturers.index.filter_title"),filter:t.filter},on:{create:function(e){return t.busCreateManufacturer.$emit("openModal")},get:t.get,setViewLength:t.setViewLength}}),t._v(" "),a("div",{staticClass:"row gy-3 mt-3"},t._l(t.manufacturers.data,(function(e){return a("div",{key:e.id,staticClass:"col-12"},[a("ItemCardOneField",{attrs:{item:e,fields:t.inputs,"update-modal-title":"manufacturers.edit-modal.title"},on:{update:t.update,destroy:t.deleteItem}})],1)})),0),t._v(" "),a("EditItemsModal",{attrs:{bus:t.busCreateManufacturer,title:"manufacturers.create-modal.title",fields:t.inputs,inputs:{}}})],1)}),[],!1,null,"bbc7f2e2",null).exports}}]);
//# sourceMappingURL=0da1179aab0d52a173bd.js.map