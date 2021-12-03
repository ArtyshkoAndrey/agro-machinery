"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[635],{5714:(t,s,e)=>{e.d(s,{ZP:()=>j});var r=e(9669),o=e.n(r),n=Object.defineProperty,i=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,l=(t,s,e)=>s in t?n(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,u=(t,s)=>{for(var e in s||(s={}))i.call(s,e)&&l(t,e,s[e]);if(a)for(var e of a(s))c.call(s,e)&&l(t,e,s[e]);return t};const d=t=>void 0===t,f=t=>Array.isArray(t),h=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,p=(t,s,e,r)=>((s=s||{}).indices=!d(s.indices)&&s.indices,s.nullsAsUndefineds=!d(s.nullsAsUndefineds)&&s.nullsAsUndefineds,s.booleansAsIntegers=!d(s.booleansAsIntegers)&&s.booleansAsIntegers,s.allowEmptyArrays=!d(s.allowEmptyArrays)&&s.allowEmptyArrays,e=e||new FormData,d(t)||(null===t?s.nullsAsUndefineds||e.append(r,""):(t=>"boolean"==typeof t)(t)?s.booleansAsIntegers?e.append(r,t?1:0):e.append(r,t):f(t)?t.length?t.forEach(((t,o)=>{const n=r+"["+(s.indices?o:"")+"]";p(t,s,e,n)})):s.allowEmptyArrays&&e.append(r+"[]",""):(t=>t instanceof Date)(t)?e.append(r,t.toISOString()):!(t=>t===Object(t))(t)||(t=>h(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||h(t)?e.append(r,t):Object.keys(t).forEach((o=>{const n=t[o];if(f(n))for(;o.length>2&&o.lastIndexOf("[]")===o.length-2;)o=o.substring(0,o.length-2);p(n,s,e,r?r+"["+o+"]":o)}))),e);var m={serialize:p};function y(t){if(null===t||"object"!=typeof t)return t;const s=Array.isArray(t)?[]:{};return Object.keys(t).forEach((e=>{s[e]=y(t[e])})),s}function g(t){return Array.isArray(t)?t:[t]}function w(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find((t=>w(t)))}class b{constructor(){this.errors={},this.errors={}}set(t,s){"object"==typeof t?this.errors=t:this.set(u(u({},this.errors),{[t]:g(s)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some((t=>this.has(t)))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return g(this.errors[t]||[])}only(...t){const s=[];return t.forEach((t=>{const e=this.get(t);e&&s.push(e)})),s}flatten(){return Object.values(this.errors).reduce(((t,s)=>t.concat(s)),[])}clear(t){const s={};t&&Object.keys(this.errors).forEach((e=>{e!==t&&(s[e]=this.errors[e])})),this.set(s)}}class v{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new b,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,y(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach((s=>{this[s]=t[s]}))}data(){return this.keys().reduce(((t,s)=>u(u({},t),{[s]:this[s]})),{})}keys(){return Object.keys(this).filter((t=>!v.ignore.includes(t)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),v.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((t=>!v.ignore.includes(t))).forEach((t=>{this[t]=y(this.originalData[t])}))}get(t,s={}){return this.submit("get",t,s)}post(t,s={}){return this.submit("post",t,s)}patch(t,s={}){return this.submit("patch",t,s)}put(t,s={}){return this.submit("put",t,s)}delete(t,s={}){return this.submit("delete",t,s)}submit(t,s,e={}){return this.startProcessing(),e=u({data:{},params:{},url:this.route(s),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},e),"get"===t.toLowerCase()?e.params=u(u({},this.data()),e.params):(e.data=u(u({},this.data()),e.data),w(e.data)&&(e.transformRequest=[t=>m.serialize(t)])),new Promise(((t,s)=>{(v.axios||o()).request(e).then((s=>{this.finishProcessing(),t(s)})).catch((t=>{this.handleErrors(t),s(t)}))}))}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?u({},t.data.errors):t.data.message?{error:t.data.message}:u({},t.data):{error:v.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,s={}){let e=t;return Object.prototype.hasOwnProperty.call(v.routes,t)&&(e=decodeURI(v.routes[t])),"object"!=typeof s&&(s={id:s}),Object.keys(s).forEach((t=>{e=e.replace(`{${t}}`,s[t])})),e}onKeydown(t){const s=t.target;s.name&&this.errors.clear(s.name)}}v.routes={},v.errorMessage="Something went wrong. Please try again.",v.recentlySuccessfulTimeout=2e3,v.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const j=v},635:(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});var r=e(7757),o=e.n(r),n=e(5714);function i(t,s,e,r,o,n,i){try{var a=t[n](i),c=a.value}catch(t){return void e(t)}a.done?s(c):Promise.resolve(c).then(r,o)}const a={name:"PasswordReset",middleware:"guest",metaInfo:function(){return{title:this.$t("password_reset.title")}},data:function(){return{status:"",form:new n.ZP({token:"",email:"",password:"",password_confirmation:""})}},computed:{validPassword:function(){return this.form.password.length<6&&""!==this.form.password},validPasswordConfirmation:function(){return this.form.password!==this.form.password_confirmation&&""!==this.form.password_confirmation}},created:function(){this.form.email=this.$route.query.email,this.form.token=this.$route.params.token,this.$root.$loading.finish()},methods:{reset:function(){var t,s=this;return(t=o().mark((function t(){var e,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.validPassword||s.validPasswordConfirmation){t.next=7;break}return t.next=3,s.form.post("/api/password/reset");case 3:e=t.sent,r=e.data,s.status=r.status,s.form.successful?(s.$vs.notification({title:s.$t("notification.resetting_password.title"),text:s.status}),s.form.reset()):s.$vs.notification({title:s.$t("notification.get.danger.title"),text:s.status});case 7:case"end":return t.stop()}}),t)})),function(){var s=this,e=arguments;return new Promise((function(r,o){var n=t.apply(s,e);function a(t){i(n,r,o,a,c,"next",t)}function c(t){i(n,r,o,a,c,"throw",t)}a(void 0)}))})()}}};const c=(0,e(1900).Z)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row flex-row login-form align-items-center"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-4 col-lg-3 col-sm-6 col-10"},[e("vs-input",{attrs:{placeholder:t.$t("form.inputs.password.placeholder"),type:"password"},scopedSlots:t._u([t.validPassword?{key:"message-danger",fn:function(){return[t._v("\n            "+t._s(t.$t("auth.errors.password.length.min",{length:6}))+"\n          ")]},proxy:!0}:null],null,!0),model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}})],1)]),t._v(" "),e("div",{staticClass:"row justify-content-center mt-3"},[e("div",{staticClass:"col-md-4 col-lg-3 col-sm-6 col-10"},[e("vs-input",{attrs:{placeholder:t.$t("form.inputs.password_confirmation.placeholder"),type:"password"},scopedSlots:t._u([t.validPasswordConfirmation?{key:"message-danger",fn:function(){return[t._v("\n            "+t._s(t.$t("auth.errors.password_confirmation"))+"\n          ")]},proxy:!0}:null],null,!0),model:{value:t.form.password_confirmation,callback:function(s){t.$set(t.form,"password_confirmation",s)},expression:"form.password_confirmation"}})],1)]),t._v(" "),e("div",{staticClass:"row justify-content-center mt-3"},[e("div",{staticClass:"col-md-4 col-lg-3 col-sm-6 col-10"},[e("vs-button",{staticClass:"d-block w-100 mt-3 mt-md-auto",staticStyle:{margin:"0",padding:"4px 13px"},attrs:{loading:t.form.busy,success:""},on:{click:t.reset}},[t._v("\n          "+t._s(t.$t("auth.in_login"))+"\n        ")])],1)])])])}),[],!1,null,"3c46601b",null).exports}}]);
//# sourceMappingURL=c43ed6ade1f35a3d9ddf.js.map