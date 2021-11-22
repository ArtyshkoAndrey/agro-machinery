"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[892],{8993:(t,e,r)=>{r.d(e,{Z:()=>o});function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const i={name:"EditItemsModal",props:{bus:{type:r(538).default,required:!0},title:{type:String,required:!1,default:""},fields:{type:Array,required:!0},inputs:{type:Object,default:new Object}},data:function(){return{active:!1,data:{},nameTitle:"",loading:!1,error:{}}},mounted:function(){this.data=this.inputs,this.data.name&&(this.nameTitle=this.data.name),this.bus.$on("openModal",this.openModal)},computed:{translateTitle:function(){return""===this.title?this.$t("form.title.edit"):this.$t(this.title)}},methods:{openModal:function(){this.active=!0},save:function(){this.loading=!0,this.bus.$emit("save",a(a({},this.data),{},{callbackSuccess:this.callbackSuccess,callbackError:this.callbackError}))},callbackSuccess:function(){this.active=!1,this.loading=!1,this.error={}},callbackError:function(t){this.loading=!1,this.error=t}}};const o=(0,r(1900).Z)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("vs-dialog",{attrs:{loading:t.loading,"not-center":"",width:"300px"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h4",{staticClass:"not-margin"},[t._v("\n      "+t._s(t.translateTitle)+" "),t.nameTitle?r("strong",[t._v(t._s(t.nameTitle))]):t._e()])]},proxy:!0},{key:"footer",fn:function(){return[r("div",{staticClass:"row justify-content-end align-items-center"},[r("div",{staticClass:"col-auto"},[r("vs-button",{attrs:{flat:"",success:""},on:{click:t.save}},[t._v("\n          "+t._s(t.$t("form.save"))+"\n        ")])],1),t._v(" "),r("div",{staticClass:"col-auto"},[r("vs-button",{attrs:{danger:"",flat:""},on:{click:function(e){t.active=!1}}},[t._v("\n          "+t._s(t.$t("form.cancel"))+"\n        ")])],1)])]},proxy:!0}]),model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._v(" "),r("div",{staticClass:"con-content"},[t._l(t.fields,(function(e){return"id"!==e?r("vs-input",{key:e,staticClass:"mt-2",attrs:{placeholder:t.$t("form.inputs."+e+".placeholder")},scopedSlots:t._u([t.error[e]?{key:"message-danger",fn:function(){return[t._v("\n        "+t._s(t.error[e][0])+"\n      ")]},proxy:!0}:null],null,!0),model:{value:t.data[e],callback:function(r){t.$set(t.data,e,r)},expression:"data[field]"}}):t._e()})),t._v(" "),t.error.message?r("span",{staticClass:"text-danger"},[t._v("\n      "+t._s(t.error.message)+"\n    ")]):t._e()],2)])}),[],!1,null,"fd15add4",null).exports},784:(t,e,r)=>{r.d(e,{Z:()=>n});var s=r(538);const a={name:"ItemCardOneField",components:{EditItemsModal:r(8993).Z},props:{item:{type:Object,required:!0},hideUpdate:{type:Boolean,default:!1},fields:{type:Array,required:!0},updateModalTitle:{type:String,required:!1,default:""},hideId:{type:Boolean,default:!0}},data:function(){return{bus:new s.default}},computed:{inputs:function(){var t=this,e={};return this.fields.forEach((function(r){e[r]=t.item[r]})),e},checkTitleRouter:function(){return void 0!==this.$attrs["title-router"]}},mounted:function(){this.bus.$on("save",this.update)},methods:{openModal:function(){this.bus.$emit("openModal",{name:this.name,id:this.id})},update:function(t){this.$emit("update",t)},routePush:function(t){console.log(void 0!==this.$attrs["title-router"]),void 0!==this.$attrs["title-router"]&&(0!==t||this.hideId||this.$emit("title-route"),1===t&&this.hideId&&this.$emit("title-route"))}}};const n=(0,r(1900).Z)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"card"},[r("div",{staticClass:"card-body"},[r("div",{staticClass:"row align-items-center mx-0"},[t._l(t.fields,(function(e,s){return r("div",{key:e,staticClass:"col-auto",class:"id"===e&&t.hideId||"password"===e?"d-none":""},[r("h6",{staticClass:"mb-0",style:t.checkTitleRouter?"cursor: pointer":"",on:{click:function(e){return t.routePush(s)}}},[t._v("\n            "+t._s(t.inputs[e])+"\n          ")])])})),t._v(" "),r("div",{staticClass:"col-auto ms-auto"},[r("div",{staticClass:"row gx-0"},[!1===t.hideUpdate?r("div",{staticClass:"col"},[r("vs-button",{attrs:{icon:"",circle:"",success:"",flat:""},on:{click:t.openModal}},[r("em",{staticClass:"bx bx-pencil"})])],1):t._e(),t._v(" "),r("div",{staticClass:"col"},[r("vs-button",{attrs:{icon:"",circle:"",danger:"",flat:""},on:{click:function(e){return t.$emit("destroy",t.inputs.id)}}},[r("em",{staticClass:"bx bx-trash-alt"})])],1)])])],2)])]),t._v(" "),r("EditItemsModal",{attrs:{bus:t.bus,title:t.updateModalTitle,fields:t.fields,inputs:t.inputs}})],1)}),[],!1,null,"e53f49ee",null).exports},5892:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var s=r(7757),a=r.n(s),n=r(9669),i=r.n(n),o=r(5703),c=r(4633),l=r(784),u=r(8993),d=r(538),f=r(9827),p=r(629);function h(t,e,r,s,a,n,i){try{var o=t[n](i),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(s,a)}function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function v(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const g={name:"Index",components:{Loader:o.Z,HeaderFilterInfo:c.Z,ItemCardOneField:l.Z,EditItemsModal:u.Z},data:function(){return{title:f.Z.t("users.index.title"),viewLength:10,users:{},filter:new d.default,busCreateUser:new d.default,inputs:["id","name","email","password"]}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,p.Se)({user:"auth/user"})),metaInfo:{title:f.Z.t("users.index.title")},mounted:function(){var t,e=this;return(t=a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.busCreateUser.$on("save",e.store);case 2:return t.next=4,e.$root.$loading.set(50);case 4:return t.next=6,i().get("/api/admin/users",{params:{per_page:e.viewLength}}).then((function(t){console.log(t.data),e.users=t.data.payload.users,e.$root.$loading.finish()})).catch((function(t){console.log(t),e.$root.$loading.fail()}));case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(s,a){var n=t.apply(e,r);function i(t){h(n,s,a,i,o,"next",t)}function o(t){h(n,s,a,i,o,"throw",t)}i(void 0)}))})()},methods:{get:function(t){var e=this;i().get("/api/admin/users",{params:{per_page:this.viewLength,page:t.page,search:t.search}}).then((function(t){e.users=t.data.payload.users,e.filter.$emit("updateData",t.data.payload.users),console.log("new data",t.data)}))},setViewLength:function(t){this.viewLength=t},deleteItem:function(t){var e=this;if(t===this.user.id)return this.$vs.notification({duration:2e3,sticky:!0,position:"top-right",color:"danger",title:this.$t("notification.delete.danger.title"),text:this.$t("notification.delete.danger.user-delete")}),!1;i().delete("/api/users/"+t).then((function(t){e.$vs.notification({duration:2e3,sticky:!0,position:"top-right",color:"success",title:e.$t("notification.delete.success.title",{name:t.data.payload.user.name}),text:e.$t("notification.delete.success.text",{name:t.data.payload.user.name})}),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})})).catch((function(t){e.$vs.notification({duration:2e3,sticky:!0,position:"top-right",color:"danger",title:e.$t("notification.delete.danger.title"),text:t.response.data.message}),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})}))},update:function(t){var e=this;i().put("/api/admin/users/"+t.id,{name:t.name,email:t.email,password:t.password}).then((function(r){r.data.success?(t.callbackSuccess(),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})):t.callbackError("Не предвиденная ошибка")})).catch((function(e){e.response.data.errors?t.callbackError(e.response.data.errors):t.callbackError({message:e.response.data.message})}))},store:function(t){var e=this;i().post("/api/admin/users/",{name:t.name,email:t.email,password:t.password}).then((function(r){r.data.success?(t.callbackSuccess(),e.get({page:e.$refs.filter.page,search:e.$refs.filter.value})):t.callbackError("Server return Error")})).catch((function(e){e.response.data.errors?t.callbackError(e.response.data.errors):t.callbackError({message:e.response.data.message})}))}}};const b=(0,r(1900).Z)(g,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.$root.$loading.show?r("Loader"):r("div",[r("HeaderFilterInfo",{ref:"filter",attrs:{values:t.users,"view-length":t.viewLength,title:t.$t("users.index.filter_title"),filter:t.filter},on:{create:function(e){return t.busCreateUser.$emit("openModal")},get:t.get,setViewLength:t.setViewLength}}),t._v(" "),r("div",{staticClass:"row gy-3 mt-3"},t._l(t.users.data,(function(e){return r("div",{key:e.id,staticClass:"col-12"},[r("ItemCardOneField",{attrs:{item:e,fields:t.inputs,"update-modal-title":"users.edit-modal.title"},on:{update:t.update,destroy:t.deleteItem}})],1)})),0),t._v(" "),r("EditItemsModal",{attrs:{bus:t.busCreateUser,title:"users.create-modal.title",fields:t.inputs,inputs:{}}})],1)}),[],!1,null,"24536f57",null).exports}}]);
//# sourceMappingURL=57fa9bd01d995d1f7c44.js.map