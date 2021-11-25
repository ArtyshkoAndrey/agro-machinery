"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[401],{8135:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(7897),a=t.n(e),o=t(1519),i=t.n(o)()(a());i.push([n.id,".btn-rounded-angle[data-v-b78d8e3e]{border-radius:8px 0;padding:9.5px 14.5px}@media (min-width:767px){.btn-rounded-angle[data-v-b78d8e3e]{border-radius:16px 0;padding:13px 22px}}@media (min-width:1200px){.btn-rounded-angle[data-v-b78d8e3e]{border-radius:24px 0;padding:17.5px 27px}}.btn-rounded[data-v-b78d8e3e]{border-radius:4px}@media (min-width:767px){.btn-rounded[data-v-b78d8e3e]{border-radius:8px}}.btn-orange[data-v-b78d8e3e]{background-color:#f4b12f!important;color:#1a1819!important}.btn-dark[data-v-b78d8e3e]{background-color:#1a1819!important;color:#fff!important}.btn[data-v-b78d8e3e]{border:none;outline:none}.btn.btn-big[data-v-b78d8e3e]{font-size:14px}@media (min-width:767px){.btn.btn-big[data-v-b78d8e3e]{font-size:16px}}@media (min-width:1200px){.btn.btn-big[data-v-b78d8e3e]{font-size:18px}}.btn.btn-small[data-v-b78d8e3e]{font-size:12px}@media (min-width:767px){.btn.btn-small[data-v-b78d8e3e]{font-size:14px}}@media (min-width:1200px){.btn.btn-small[data-v-b78d8e3e]{font-size:16px}}.btn.btn-hover-orange[data-v-b78d8e3e]{transition:background-color .5s,color .4s}.btn.btn-hover-orange[data-v-b78d8e3e]:hover{background-color:#f4b12f!important;color:#1a1819!important}","",{version:3,sources:["webpack://./resources/js/user/components/Button.vue","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AAqCA,oCACE,mBAAA,CACA,oBApCF,CC0BI,yBDQJ,oCAKI,oBAAA,CACA,iBAnCF,CACF,CCoBI,0BDQJ,oCAUI,oBAAA,CACA,mBAlCF,CACF,CAqCA,8BACE,iBAlCF,CCUI,yBDuBJ,8BAGI,iBAhCF,CACF,CAmCA,6BACE,kCAAA,CACA,uBAhCF,CAmCA,2BACE,kCAAA,CACA,oBAhCF,CAmCA,sBAEE,WAAA,CADA,YA/BF,CAkCE,8BACE,cAhCJ,CCbI,yBD4CF,8BAII,cA/BJ,CACF,CClBI,0BD4CF,8BAQI,cA9BJ,CACF,CAiCE,gCACE,cA/BJ,CC1BI,yBDwDF,gCAII,cA9BJ,CACF,CC/BI,0BDwDF,gCAQI,cA7BJ,CACF,CAgCE,uCACE,yCA9BJ,CAgCI,6CACE,kCAAA,CACA,uBA9BN",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n@import "resources/scss/user/variables";\r\n\r\n.btn-rounded-angle {\r\n  border-radius: 8px 0;\r\n  padding: 9.5px 14.5px;\r\n\r\n  @include respond-to(md) {\r\n    border-radius: 16px 0;\r\n    padding: 13px 22px;\r\n  }\r\n  \r\n  @include respond-to(lg) {\r\n    border-radius: 24px 0;\r\n    padding: 17.5px 27px;\r\n  }\r\n}\r\n\r\n.btn-rounded {\r\n  border-radius: 4px;\r\n  @include respond-to(md) {\r\n    border-radius: 8px;\r\n  }\r\n}\r\n\r\n.btn-orange {\r\n  background-color: $color-orange!important;\r\n  color: $color-dark!important;\r\n}\r\n\r\n.btn-dark {\r\n  background-color: $color-dark!important;\r\n  color: #ffffff!important;\r\n}\r\n\r\n.btn {\r\n  outline: none;\r\n  border: none;\r\n\r\n  &.btn-big {\r\n    font-size: 14px;\r\n\r\n    @include respond-to(md) {\r\n      font-size: 16px;\r\n    }\r\n\r\n    @include respond-to(lg) {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n\r\n  &.btn-small {\r\n    font-size: 12px;\r\n\r\n    @include respond-to(md) {\r\n      font-size: 14px;\r\n    }\r\n\r\n    @include respond-to(lg) {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n\r\n  &.btn-hover-orange {\r\n    transition: .5s background-color, .4s color;\r\n\r\n    &:hover {\r\n      background-color: $color-orange!important;\r\n      color: $color-dark !important;\r\n    }\r\n  }\r\n}\r\n','@import \'colors\';\r\n\r\n$container-max-widths: (\r\n        sm: 100%,\r\n        md: 740px,\r\n        lg: 1080px,\r\n        xl: 1280px,\r\n);\r\n$grid-breakpoints: (\r\n        xs: 0,\r\n        sm: 576px,\r\n        md: 767px,\r\n        lg: 1200px,\r\n        xl: 1365px,\r\n);\r\n\r\n$font-family-base: \'Rubik\', sans-serif;\r\n$breadcrumb-item-padding-x: 0.1rem;\r\n$breadcrumb-active-color: $color-orange;\r\n$breadcrumb-divider-color: $color-gray;\r\n\r\n/// Mixin to manage responsive breakpoints\r\n/// @author Fulliton\r\n/// @param {String} $breakpoint - Breakpoint name\r\n/// @require $breakpoints\r\n@mixin respond-to($breakpoint) {\r\n  // If the key exists in the map\r\n  @if map-has-key($grid-breakpoints, $breakpoint) {\r\n    // Prints a media query based on the value\r\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\r\n      @content;\r\n    }\r\n  }\r\n\r\n    // If the key doesn\'t exist in the map\r\n  @else {\r\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\r\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\r\n  }\r\n}\r\n\r\n@mixin respond-up($breakpoint) {\r\n  // If the key exists in the map\r\n  @if map-has-key($grid-breakpoints, $breakpoint) {\r\n    // Prints a media query based on the value\r\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\r\n      @content;\r\n    }\r\n  }\r\n\r\n    // If the key doesn\'t exist in the map\r\n  @else {\r\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\r\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\r\n  }\r\n}'],sourceRoot:""}]);const s=i},4010:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(7897),a=t.n(e),o=t(1519),i=t.n(o)()(a());i.push([n.id,".product-card[data-v-7832c41a]{background:#fff;border:1px solid #dedede;border-radius:12px;height:100%;margin:0;padding:0;position:relative;transition:box-shadow .25s,border-color .3s}.product-card[data-v-7832c41a]:hover{border-color:transparent;box-shadow:-1px 12px 14px #d3d4da}.product-card .badge[data-v-7832c41a]{background-color:#f4b12f;border-radius:4px;color:#1a1819;font-size:10px;font-weight:400;line-height:12px;padding:2px 4px;position:absolute;right:8px;top:8px}.product-card .product-card-image[data-v-7832c41a]{background:#fff;border-radius:12px 12px 0 0;height:114px;margin:0;padding:0}.product-card .product-card-image img[data-v-7832c41a]{border-radius:12px 12px 0 0;height:100%;margin:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;padding:0;width:100%}@media (min-width:767px){.product-card .badge[data-v-7832c41a]{border-radius:8px;font-size:18px;line-height:21px;padding:4px 8px;right:17px;top:15px}.product-card .product-card-image[data-v-7832c41a]{height:225px}}.product-card .product-card-info[data-v-7832c41a]{height:100%;padding:8px}.product-card .product-card-info .product-card-info-name[data-v-7832c41a]{font-size:12px;font-weight:400;margin-bottom:8px}@media (min-width:767px){.product-card .product-card-info .product-card-info-name[data-v-7832c41a]{font-size:16px;margin-bottom:24px}}.product-card .product-card-info .product-card-info-cost[data-v-7832c41a]{display:block;font-size:12px;font-weight:500;margin-bottom:12px}@media (min-width:767px){.product-card .product-card-info .product-card-info-cost[data-v-7832c41a]{font-size:16px;margin-bottom:0}.product-card .product-card-info[data-v-7832c41a]{padding:16px}}","",{version:3,sources:["webpack://./resources/js/user/components/Product.vue","webpack://./resources/scss/user/_colors.scss","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AA0DA,+BAME,eAAA,CAFA,wBAAA,CACA,kBAAA,CAJA,WAAA,CACA,QAAA,CACA,SAAA,CAKA,iBAAA,CADA,2CAxDF,CA2DE,qCAEE,wBAAA,CADA,iCAxDJ,CA4DE,sCAEE,wBC3EW,CD+EX,iBAAA,CAHA,aC3ES,CDkFT,cAAA,CANA,eAAA,CAOA,gBAAA,CAJA,eAAA,CANA,iBAAA,CAQA,SAAA,CADA,OAxDJ,CA8DE,mDACE,eAAA,CAIA,2BAAA,CADA,YAAA,CADA,QAAA,CADA,SAzDJ,CA8DI,uDAOE,2BAAA,CAHA,WAAA,CAFA,QAAA,CAGA,mBAAA,CAAA,gBAAA,CACA,yBAAA,CAAA,sBAAA,CALA,SAAA,CAEA,UAxDN,CEZI,yBF6EA,sCAGE,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CAJA,UAAA,CADA,QAzDJ,CAiEE,mDACE,YA/DJ,CACF,CAkEE,kDAEE,WAAA,CADA,WA/DJ,CAkEI,0EACE,cAAA,CACA,eAAA,CACA,iBAhEN,CElCI,yBF+FA,0EAMI,cAAA,CACA,kBA/DN,CACF,CAkEI,0EACE,aAAA,CACA,cAAA,CACA,eAAA,CACA,kBAhEN,CE9CI,yBF0GA,0EAOI,cAAA,CACA,eA/DN,CAwCA,kDA4BI,YA/DJ,CAJF",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "resources/scss/user/variables";\n.product-card {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #DEDEDE;\n  border-radius: 12px;\n  background: #ffffff;\n  transition: .25s box-shadow, .3s border-color;\n  position: relative;\n\n  &:hover {\n    box-shadow: -1px 12px 14px #D3D4DA;\n    border-color: transparent;\n  }\n\n  .badge {\n    position: absolute;\n    background-color: $color-orange;\n    color: $color-dark;\n    font-weight: 400;\n\n    border-radius: 4px;\n    padding: 2px 4px;\n    top: 8px;\n    right: 8px;\n    font-size: 10px;\n    line-height: 12px;\n  }\n\n  .product-card-image {\n    background: #ffffff;\n    padding: 0;\n    margin: 0;\n    height: 114px;\n    border-radius: 12px 12px 0 0;\n\n    img {\n      padding: 0;\n      margin: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      object-position: center;\n      border-radius: 12px 12px 0 0;\n    }\n  }\n\n  @include respond-to(md) {\n    .badge {\n      top: 15px;\n      right: 17px;\n      border-radius: 8px;\n      font-size: 18px;\n      line-height: 21px;\n      padding: 4px 8px;\n    }\n\n    .product-card-image {\n      height: 225px;\n    }\n  }\n\n  .product-card-info {\n    padding: 8px;\n    height: 100%;\n\n    .product-card-info-name {\n      font-size: 12px;\n      font-weight: 400;\n      margin-bottom: 8px;\n\n      @include respond-to(md) {\n        font-size: 16px;\n        margin-bottom: 24px;\n      }\n    }\n\n    .product-card-info-cost {\n      display: block;\n      font-size: 12px;\n      font-weight: 500;\n      margin-bottom: 12px;\n\n      @include respond-to(md) {\n        font-size: 16px;\n        margin-bottom: 0;\n      }\n    }\n\n    @include respond-to(md) {\n      padding: 16px;\n    }\n  }\n}\n\n',"$color-orange: #F4B12F;\r\n$color-dark: #1A1819;\r\n$color-gray: #767676;\r\n$color-light-gray: #F1F1F1;",'@import \'colors\';\r\n\r\n$container-max-widths: (\r\n        sm: 100%,\r\n        md: 740px,\r\n        lg: 1080px,\r\n        xl: 1280px,\r\n);\r\n$grid-breakpoints: (\r\n        xs: 0,\r\n        sm: 576px,\r\n        md: 767px,\r\n        lg: 1200px,\r\n        xl: 1365px,\r\n);\r\n\r\n$font-family-base: \'Rubik\', sans-serif;\r\n$breadcrumb-item-padding-x: 0.1rem;\r\n$breadcrumb-active-color: $color-orange;\r\n$breadcrumb-divider-color: $color-gray;\r\n\r\n/// Mixin to manage responsive breakpoints\r\n/// @author Fulliton\r\n/// @param {String} $breakpoint - Breakpoint name\r\n/// @require $breakpoints\r\n@mixin respond-to($breakpoint) {\r\n  // If the key exists in the map\r\n  @if map-has-key($grid-breakpoints, $breakpoint) {\r\n    // Prints a media query based on the value\r\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\r\n      @content;\r\n    }\r\n  }\r\n\r\n    // If the key doesn\'t exist in the map\r\n  @else {\r\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\r\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\r\n  }\r\n}\r\n\r\n@mixin respond-up($breakpoint) {\r\n  // If the key exists in the map\r\n  @if map-has-key($grid-breakpoints, $breakpoint) {\r\n    // Prints a media query based on the value\r\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\r\n      @content;\r\n    }\r\n  }\r\n\r\n    // If the key doesn\'t exist in the map\r\n  @else {\r\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\r\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\r\n  }\r\n}'],sourceRoot:""}]);const s=i},3441:(n,r,t)=>{t.d(r,{Z:()=>s});var e=t(7897),a=t.n(e),o=t(1519),i=t.n(o)()(a());i.push([n.id,".loader[data-v-60233b9e]{background:#eee;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1000}.loader svg .st0[data-v-60233b9e]{fill:#eee}.loader svg#truck[data-v-60233b9e]{-webkit-animation:truck-data-v-60233b9e .5s infinite;animation:truck-data-v-60233b9e .5s infinite;left:50%;top:50%}.loader svg#road[data-v-60233b9e],.loader svg#truck[data-v-60233b9e]{position:absolute;transform:translate(-50%,-50%)}.loader svg#road[data-v-60233b9e]{-webkit-animation:road-data-v-60233b9e 1s infinite;animation:road-data-v-60233b9e 1s infinite;left:54%;top:calc(51% + 80px)}.loader p[data-v-60233b9e]{bottom:20%;color:#777;font-family:sans-serif;font-size:11px;left:50%;position:absolute;text-transform:uppercase;transform:translateX(-50%)}@-webkit-keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@-webkit-keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}@keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}","",{version:3,sources:["webpack://./resources/js/user/components/Spinner.vue"],names:[],mappings:"AAsBA,yBAOE,eAAA,CAHA,YAAA,CACA,MAAA,CAHA,cAAA,CAIA,KAAA,CAHA,WAAA,CAFA,YAfF,CAwBA,kCACE,SArBF,CAwBA,mCAKE,oDAAA,CAAA,4CAAA,CAFA,QAAA,CADA,OAlBF,CAwBA,qEAPE,iBAAA,CAGA,8BAZF,CAgBA,kCAKE,kDAAA,CAAA,0CAAA,CAFA,QAAA,CADA,oBAlBF,CAwBA,2BAKE,UAAA,CAGA,UAAA,CAPA,sBAAA,CACA,cAAA,CAIA,QAAA,CAFA,iBAAA,CADA,wBAAA,CAIA,0BApBF,CAwBA,yCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAYA,iCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAwBA,wCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF,CAUA,gCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.loader {\r\n  z-index: 1000;\r\n  position: fixed;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  left: 0;\r\n  top: 0;\r\n  background: #eee;\r\n}\r\n\r\n.loader svg .st0 {\r\n  fill: #eee;\r\n}\r\n\r\n.loader svg#truck {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  animation: 0.5s truck infinite;\r\n}\r\n\r\n.loader svg#road {\r\n  position: absolute;\r\n  top: calc(51% + 160px / 2);\r\n  left: 54%;\r\n  transform: translate(-50%, -50%);\r\n  animation: 1s road infinite;\r\n}\r\n\r\n.loader p {\r\n  font-family: sans-serif;\r\n  font-size: 11px;\r\n  text-transform: uppercase;\r\n  position: absolute;\r\n  bottom: 20%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n  color: #777;\r\n}\r\n\r\n@keyframes truck {\r\n  0% {\r\n    transform: scaleY(1) translate(-50%, -50%);\r\n  }\r\n  50% {\r\n    transform: scaleY(0.95) translate(-50%, -50%);\r\n  }\r\n  100% {\r\n    transform: scaleY(1) translate(-50%, -50%);\r\n  }\r\n}\r\n\r\n@keyframes road {\r\n  0% {\r\n    transform: scaleX(1) translate(-50%, -50%);\r\n  }\r\n  33% {\r\n    transform: scaleX(1) translate(-55%, -50%);\r\n  }\r\n  33% {\r\n    transform: scaleX(1) translate(-55%, -50%);\r\n  }\r\n  100% {\r\n    transform: scaleX(1) translate(-50%, -50%);\r\n  }\r\n}\r\n"],sourceRoot:""}]);const s=i},1163:(n,r,t)=>{t.d(r,{Z:()=>d});const e={name:"Button",computed:{},created:function(){console.log(this.$attrs)},methods:{redirect:function(){this.$router.push({name:this.$attrs.route_link})}}};var a=t(3379),o=t.n(a),i=t(8135),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;const d=(0,t(1900).Z)(e,(function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("button",{staticClass:"btn",class:(""===n.$attrs.rounded_angle?"btn-rounded-angle ":"")+(""===n.$attrs.rounded?"btn-rounded ":"")+(""===n.$attrs.orange?"btn-orange ":"")+(""===n.$attrs.dark?"btn-dark ":"")+(""===n.$attrs.big?"btn-big ":"")+(""===n.$attrs.small?"btn-small ":"")+("orange"===n.$attrs.hover?"btn-hover-orange":""),on:{click:n.redirect}},[n._t("default"),n._v(" "),""===n.$attrs.arrow?t("iconly",{attrs:{name:"arrow-right",type:"light"}}):n._e()],2)}),[],!1,null,"b78d8e3e",null).exports},1215:(n,r,t)=>{t.d(r,{Z:()=>l});var e=t(1163),a=t(629);function o(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function i(n,r,t){return r in n?Object.defineProperty(n,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[r]=t,n}const s={name:"Product",components:{Button:e.Z},props:{item:{type:Object,required:!1}},computed:function(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}({},(0,a.Se)({locale:"lang/locale"}))};var d=t(3379),A=t.n(d),c=t(4010),p={insert:"head",singleton:!1};A()(c.Z,p);c.Z.locals;const l=(0,t(1900).Z)(s,(function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",{staticClass:"card product-card"},[t("span",{staticClass:"badge"},[n._v(n._s(n.item.category.translations.find((function(r){return r.locale===n.locale})).name))]),n._v(" "),t("div",{staticClass:"product-card-image"},[t("img",{attrs:{src:n.item.image.uri+"?w=300&h=auto3&fit=crop&fm=webp",alt:"product"}})]),n._v(" "),t("div",{staticClass:"product-card-info"},[t("div",{staticClass:"row h-100"},[t("div",{staticClass:"col-12"},[t("p",{staticClass:"product-card-info-name"},[n._v("\n          "+n._s(n.item.translations.find((function(r){return r.locale===n.locale})).name)+"\n        ")])]),n._v(" "),t("div",{staticClass:"col-12 mt-auto"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-md"},[t("span",{staticClass:"product-card-info-cost"},[n._v("\n              "+n._s(n.$t("Product.prefix-cost"))+" "+n._s(n.$cost(n.item.cost))+" ₸\n            ")])]),n._v(" "),t("div",{staticClass:" col-12 col-md-auto"},[t("Button",{staticClass:"w-100",attrs:{dark:"",rounded:"",small:"",hover:"orange"}},[n._v("\n              "+n._s(n.$t("button.more"))+"\n            ")])],1)])])])])])}),[],!1,null,"7832c41a",null).exports},1926:(n,r,t)=>{t.d(r,{Z:()=>d});const e={name:"Spinner"};var a=t(3379),o=t.n(a),i=t(3441),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;const d=(0,t(1900).Z)(e,(function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",{staticClass:"loader"},[t("svg",{attrs:{id:"truck",width:"200",viewBox:"0 0 2206 1727",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M1233.33 0.70166L882.45 351.577L952.625 422.754L1092.98 283.407L1203.25 393.682V623.254C1203.25 734.532 1114.03 823.754 1002.75 823.754H948.615C1047.69 933.853 1102.67 1076.64 1103 1224.75C1102.8 1258.36 1099.78 1291.9 1093.98 1325H1406.76C1419.08 1214.76 1471.59 1112.92 1554.26 1038.95C1636.92 964.979 1743.95 924.057 1854.88 924.004C1944.11 924.053 2031.33 950.568 2105.5 1000.19V523.004C2105.5 411.727 2016.28 322.504 1905 322.504H1274.43L1164.15 212.229L1303.5 71.8792L1233.33 0.70166ZM301 422.754C245.863 422.754 200.75 467.867 200.75 523.004C200.75 578.142 245.863 623.254 301 623.254H802.25C802.25 570.078 781.126 519.08 743.525 481.479C705.924 443.878 654.926 422.754 601.75 422.754H301ZM501.5 723.504C448.371 723.517 395.583 731.977 345.11 748.567L381.2 841.799L334.083 859.844L301 766.612C194.443 812.893 107.27 894.75 54.3852 998.189L145.613 1039.29L124.56 1084.4L34.3352 1044.3C11.9581 1101.84 0.402491 1163.02 0.250244 1224.75C0.263526 1277.88 8.72328 1330.67 25.3127 1381.14L118.545 1345.05L136.59 1392.17L43.3577 1425.25C89.639 1531.81 171.496 1618.98 274.935 1671.87L315.035 1580.64L361.15 1601.69L321.05 1691.92C378.588 1714.3 439.764 1725.85 501.5 1726C554.629 1725.99 607.418 1717.53 657.89 1700.94L621.8 1607.71L668.918 1589.66L702 1682.9C808.558 1636.62 895.73 1554.76 948.615 1451.32L857.388 1411.22L878.44 1365.1L968.665 1405.2C991.042 1347.67 1002.6 1286.49 1002.75 1224.75C1002.74 1171.63 994.277 1118.84 977.688 1068.36L884.455 1104.45L866.41 1057.34L959.643 1024.25C913.361 917.697 831.504 830.524 728.065 777.639L687.965 868.867L641.85 847.814L681.95 757.589C624.412 735.212 563.236 723.656 501.5 723.504V723.504ZM501.5 924.004C581.264 924.004 657.761 955.69 714.163 1012.09C770.564 1068.49 802.25 1144.99 802.25 1224.75C802.25 1304.52 770.564 1381.02 714.163 1437.42C657.761 1493.82 581.264 1525.5 501.5 1525.5C421.736 1525.5 345.239 1493.82 288.838 1437.42C232.436 1381.02 200.75 1304.52 200.75 1224.75C200.75 1144.99 232.436 1068.49 288.838 1012.09C345.239 955.69 421.736 924.004 501.5 924.004V924.004ZM1854.88 1024.25C1761.82 1024.25 1672.57 1061.22 1606.77 1127.02C1540.97 1192.82 1504 1282.07 1504 1375.13C1504 1468.19 1540.97 1557.43 1606.77 1623.24C1672.57 1689.04 1761.82 1726 1854.88 1726C1947.93 1726 2037.18 1689.04 2102.98 1623.24C2168.78 1557.43 2205.75 1468.19 2205.75 1375.13C2205.75 1282.07 2168.78 1192.82 2102.98 1127.02C2037.18 1061.22 1947.93 1024.25 1854.88 1024.25V1024.25ZM1854.88 1224.75C1894.76 1224.75 1933.01 1240.6 1961.21 1268.8C1989.41 1297 2005.25 1335.25 2005.25 1375.13C2005.25 1415.01 1989.41 1453.26 1961.21 1481.46C1933.01 1509.66 1894.76 1525.5 1854.88 1525.5C1814.99 1525.5 1776.74 1509.66 1748.54 1481.46C1720.34 1453.26 1704.5 1415.01 1704.5 1375.13C1704.5 1335.25 1720.34 1297 1748.54 1268.8C1776.74 1240.6 1814.99 1224.75 1854.88 1224.75Z",fill:"black"}})]),n._v(" "),t("svg",{attrs:{id:"road",height:"4",width:"500"}},[t("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"0",x2:"100",y1:"0",y2:"0"}}),n._v(" "),t("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"110",x2:"210",y1:"0",y2:"0"}}),n._v(" "),t("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"220",x2:"320",y1:"0",y2:"0"}}),n._v(" "),t("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"330",x2:"430",y1:"0",y2:"0"}})]),n._v(" "),t("p",[n._v(n._s(n.$t("loading")))])])}),[],!1,null,"60233b9e",null).exports},5401:(n,r,t)=>{t.r(r),t.d(r,{default:()=>p});var e=t(7757),a=t.n(e),o=t(1926),i=t(1215),s=t(9669),d=t.n(s);function A(n,r,t,e,a,o,i){try{var s=n[o](i),d=s.value}catch(n){return void t(n)}s.done?r(d):Promise.resolve(d).then(e,a)}const c={name:"Catalog",components:{Spinner:o.Z,Product:i.Z},beforeRouteLeave:function(n,r,t){this.loading=!0,setTimeout((function(){t()}),500)},data:function(){return{loading:!0,popular_products:[]}},mounted:function(){var n,r=this;return(n=a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.$root.$loading.set(30),n.next=3,r.getCategories();case 3:return n.next=5,r.getProducts();case 5:return n.next=7,r.$root.$loading.finish();case 7:case"end":return n.stop()}}),n)})),function(){var r=this,t=arguments;return new Promise((function(e,a){var o=n.apply(r,t);function i(n){A(o,e,a,i,s,"next",n)}function s(n){A(o,e,a,i,s,"throw",n)}i(void 0)}))})()},methods:{getCategories:function(){d().get("/api/users/categories?child")},getProducts:function(){var n=this;d().get("/api/users/products",{params:{has_image:!0,max_count:7,has_category:!0}}).then((function(r){n.popular_products=r.data.payload.products,n.loading=!1}))}}};const p=(0,t(1900).Z)(c,(function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("div",[t("transition",{attrs:{appear:"",mode:"out-in",name:"fade"}},[n.loading?t("Spinner",{key:"1"}):t("section",{key:"2",attrs:{id:"catalog"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12 col-sm-10 col-lg-6"},[t("h1",[n._v("Длинное название товара")]),n._v(" "),t("nav",{attrs:{"aria-label":"breadcrumb mt-3"}},[t("ol",{staticClass:"breadcrumb"},[t("li",{staticClass:"breadcrumb-item"},[t("router-link",{attrs:{to:"index"}},[n._v("\n                  Главная\n                ")])],1),n._v(" "),t("li",{staticClass:"breadcrumb-item"},[t("router-link",{attrs:{to:"catalog"}},[n._v("\n                  Каталог\n                ")])],1),n._v(" "),t("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[n._v("\n                Категория длинная\n              ")])])])]),n._v(" "),t("div",{staticClass:"col-12 col-sm-10 col-lg-4"},[t("p",{staticClass:"category-description"},[n._v("\n            Плуги и другие виды сельскохозяйственной техники изготавливаются на современных заводах c преимущественным\n            использованием роботизированной техники!\n          ")])])]),n._v(" "),t("div",{staticClass:"row category-list gx-2 gy-3"},n._l(5,(function(r){return t("div",{key:r,staticClass:"col-6 col-sm-4 col-lg-3"},[t("router-link",{staticClass:"category-button w-100 d-flex justify-content-between align-items-center",attrs:{to:"index"}},[t("span",[n._v("Стерневые культиваторы")]),n._v(" "),t("iconly",{attrs:{name:"arrow-right",type:"light"}})],1)],1)})),0),n._v(" "),t("div",{staticClass:"row catalog-list-products gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4"},n._l(n.popular_products,(function(n){return t("div",{key:n.id,staticClass:"col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"},[t("product",{attrs:{item:n}})],1)})),0)])],1)],1)}),[],!1,null,"9a4999ba",null).exports}}]);
//# sourceMappingURL=8f6303ac70b8a1acae85.js.map