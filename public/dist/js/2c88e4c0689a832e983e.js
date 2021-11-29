"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[420],{4799:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(7897),a=e.n(r),o=e(1519),i=e.n(o)()(a());i.push([n.id,".btn-rounded-angle[data-v-2c6af9d1]{border-radius:8px 0;padding:9.5px 14.5px}@media (min-width:767px){.btn-rounded-angle[data-v-2c6af9d1]{border-radius:16px 0;padding:13px 22px}}@media (min-width:1200px){.btn-rounded-angle[data-v-2c6af9d1]{border-radius:24px 0;padding:17.5px 27px}}.btn-rounded[data-v-2c6af9d1]{border-radius:4px}@media (min-width:767px){.btn-rounded[data-v-2c6af9d1]{border-radius:8px}}.btn-orange[data-v-2c6af9d1]{background-color:#f4b12f!important;color:#1a1819!important}.btn-dark[data-v-2c6af9d1]{background-color:#1a1819!important;color:#fff!important}.btn[data-v-2c6af9d1]{border:none;outline:none}.btn.btn-big[data-v-2c6af9d1]{font-size:14px}@media (min-width:767px){.btn.btn-big[data-v-2c6af9d1]{font-size:16px}}@media (min-width:1200px){.btn.btn-big[data-v-2c6af9d1]{font-size:18px}}.btn.btn-small[data-v-2c6af9d1]{font-size:12px}@media (min-width:767px){.btn.btn-small[data-v-2c6af9d1]{font-size:14px}}@media (min-width:1200px){.btn.btn-small[data-v-2c6af9d1]{font-size:16px}}.btn.btn-hover-orange[data-v-2c6af9d1]{transition:background-color .5s,color .4s}.btn.btn-hover-orange[data-v-2c6af9d1]:hover{background-color:#f4b12f!important;color:#1a1819!important}","",{version:3,sources:["webpack://./resources/js/user/components/Button.vue","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AAqDA,oCACE,mBAAA,CACA,oBApDF,CC0BI,yBDwBJ,oCAKI,oBAAA,CACA,iBAnDF,CACF,CCoBI,0BDwBJ,oCAUI,oBAAA,CACA,mBAlDF,CACF,CAqDA,8BACE,iBAlDF,CCUI,yBDuCJ,8BAGI,iBAhDF,CACF,CAmDA,6BACE,kCAAA,CACA,uBAhDF,CAmDA,2BACE,kCAAA,CACA,oBAhDF,CAmDA,sBAEE,WAAA,CADA,YA/CF,CAkDE,8BACE,cAhDJ,CCbI,yBD4DF,8BAII,cA/CJ,CACF,CClBI,0BD4DF,8BAQI,cA9CJ,CACF,CAiDE,gCACE,cA/CJ,CC1BI,yBDwEF,gCAII,cA9CJ,CACF,CC/BI,0BDwEF,gCAQI,cA7CJ,CACF,CAgDE,uCACE,yCA9CJ,CAgDI,6CACE,kCAAA,CACA,uBA9CN",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "resources/scss/user/variables";\n\n.btn-rounded-angle {\n  border-radius: 8px 0;\n  padding: 9.5px 14.5px;\n\n  @include respond-to(md) {\n    border-radius: 16px 0;\n    padding: 13px 22px;\n  }\n\n  @include respond-to(lg) {\n    border-radius: 24px 0;\n    padding: 17.5px 27px;\n  }\n}\n\n.btn-rounded {\n  border-radius: 4px;\n  @include respond-to(md) {\n    border-radius: 8px;\n  }\n}\n\n.btn-orange {\n  background-color: $color-orange!important;\n  color: $color-dark!important;\n}\n\n.btn-dark {\n  background-color: $color-dark!important;\n  color: #ffffff!important;\n}\n\n.btn {\n  outline: none;\n  border: none;\n\n  &.btn-big {\n    font-size: 14px;\n\n    @include respond-to(md) {\n      font-size: 16px;\n    }\n\n    @include respond-to(lg) {\n      font-size: 18px;\n    }\n  }\n\n  &.btn-small {\n    font-size: 12px;\n\n    @include respond-to(md) {\n      font-size: 14px;\n    }\n\n    @include respond-to(lg) {\n      font-size: 16px;\n    }\n  }\n\n  &.btn-hover-orange {\n    transition: .5s background-color, .4s color;\n\n    &:hover {\n      background-color: $color-orange!important;\n      color: $color-dark !important;\n    }\n  }\n}\n','@import \'colors\';\n\n$container-max-widths: (\n        sm: 100%,\n        md: 740px,\n        lg: 1080px,\n        xl: 1280px,\n);\n$grid-breakpoints: (\n        xs: 0,\n        sm: 576px,\n        md: 767px,\n        lg: 1200px,\n        xl: 1365px,\n);\n\n$font-family-base: \'Rubik\', sans-serif;\n$breadcrumb-item-padding-x: 0.1rem;\n$breadcrumb-active-color: $color-orange;\n$breadcrumb-divider-color: $color-gray;\n\n/// Mixin to manage responsive breakpoints\n/// @author Fulliton\n/// @param {String} $breakpoint - Breakpoint name\n/// @require $breakpoints\n@mixin respond-to($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}\n\n@mixin respond-up($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}'],sourceRoot:""}]);const s=i},1455:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(7897),a=e.n(r),o=e(1519),i=e.n(o)()(a());i.push([n.id,".product-card[data-v-2d45313a]{background:#fff;border:1px solid #dedede;border-radius:12px;height:100%;margin:0;padding:0;position:relative;transition:box-shadow .25s,border-color .3s}.product-card[data-v-2d45313a]:hover{border-color:transparent;box-shadow:-1px 12px 14px #d3d4da}.product-card .badge[data-v-2d45313a]{background-color:#f4b12f;border-radius:4px;color:#1a1819;font-size:10px;font-weight:400;line-height:12px;padding:2px 4px;position:absolute;right:8px;top:8px}.product-card .product-card-image[data-v-2d45313a]{background:#fff;border-radius:12px 12px 0 0;height:114px;margin:0;padding:0}.product-card .product-card-image img[data-v-2d45313a]{border-radius:12px 12px 0 0;display:block;height:inherit;margin:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;padding:0;width:100%}@media (min-width:767px){.product-card .badge[data-v-2d45313a]{border-radius:8px;font-size:18px;line-height:21px;padding:4px 8px;right:17px;top:15px}.product-card .product-card-image[data-v-2d45313a]{height:225px}}.product-card .product-card-info[data-v-2d45313a]{height:100%;padding:8px}.product-card .product-card-info .product-card-info-name[data-v-2d45313a]{font-size:12px;font-weight:400;margin-bottom:8px}@media (min-width:767px){.product-card .product-card-info .product-card-info-name[data-v-2d45313a]{font-size:16px;margin-bottom:24px}}.product-card .product-card-info .product-card-info-cost[data-v-2d45313a]{display:block;font-size:12px;font-weight:500;margin-bottom:12px}@media (min-width:767px){.product-card .product-card-info .product-card-info-cost[data-v-2d45313a]{font-size:16px;margin-bottom:0}.product-card .product-card-info[data-v-2d45313a]{padding:16px}}","",{version:3,sources:["webpack://./resources/js/user/components/Product.vue","webpack://./resources/scss/user/_colors.scss","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AA0DA,+BAME,eAAA,CAFA,wBAAA,CACA,kBAAA,CAJA,WAAA,CACA,QAAA,CACA,SAAA,CAKA,iBAAA,CADA,2CAxDF,CA2DE,qCAEE,wBAAA,CADA,iCAxDJ,CA4DE,sCAEE,wBC3EW,CD+EX,iBAAA,CAHA,aC3ES,CDkFT,cAAA,CANA,eAAA,CAOA,gBAAA,CAJA,eAAA,CANA,iBAAA,CAQA,SAAA,CADA,OAxDJ,CA8DE,mDACE,eAAA,CAIA,2BAAA,CADA,YAAA,CADA,QAAA,CADA,SAzDJ,CA8DI,uDAQE,2BAAA,CAPA,aAAA,CACA,cAAA,CAGA,QAAA,CACA,mBAAA,CAAA,gBAAA,CACA,yBAAA,CAAA,sBAAA,CAHA,SAAA,CADA,UAvDN,CEbI,yBF8EA,sCAGE,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CAJA,UAAA,CADA,QAzDJ,CAiEE,mDACE,YA/DJ,CACF,CAkEE,kDAEE,WAAA,CADA,WA/DJ,CAkEI,0EACE,cAAA,CACA,eAAA,CACA,iBAhEN,CEnCI,yBFgGA,0EAMI,cAAA,CACA,kBA/DN,CACF,CAkEI,0EACE,aAAA,CACA,cAAA,CACA,eAAA,CACA,kBAhEN,CE/CI,yBF2GA,0EAOI,cAAA,CACA,eA/DN,CAwCA,kDA4BI,YA/DJ,CAJF",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "resources/scss/user/variables";\n.product-card {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #DEDEDE;\n  border-radius: 12px;\n  background: #ffffff;\n  transition: .25s box-shadow, .3s border-color;\n  position: relative;\n\n  &:hover {\n    box-shadow: -1px 12px 14px #D3D4DA;\n    border-color: transparent;\n  }\n\n  .badge {\n    position: absolute;\n    background-color: $color-orange;\n    color: $color-dark;\n    font-weight: 400;\n\n    border-radius: 4px;\n    padding: 2px 4px;\n    top: 8px;\n    right: 8px;\n    font-size: 10px;\n    line-height: 12px;\n  }\n\n  .product-card-image {\n    background: #ffffff;\n    padding: 0;\n    margin: 0;\n    height: 114px;\n    border-radius: 12px 12px 0 0;\n\n    img {\n      display: block;\n      height: inherit;\n      width: 100%;\n      padding: 0;\n      margin: 0;\n      object-fit: cover;\n      object-position: center;\n      border-radius: 12px 12px 0 0;\n    }\n  }\n\n  @include respond-to(md) {\n    .badge {\n      top: 15px;\n      right: 17px;\n      border-radius: 8px;\n      font-size: 18px;\n      line-height: 21px;\n      padding: 4px 8px;\n    }\n\n    .product-card-image {\n      height: 225px;\n    }\n  }\n\n  .product-card-info {\n    padding: 8px;\n    height: 100%;\n\n    .product-card-info-name {\n      font-size: 12px;\n      font-weight: 400;\n      margin-bottom: 8px;\n\n      @include respond-to(md) {\n        font-size: 16px;\n        margin-bottom: 24px;\n      }\n    }\n\n    .product-card-info-cost {\n      display: block;\n      font-size: 12px;\n      font-weight: 500;\n      margin-bottom: 12px;\n\n      @include respond-to(md) {\n        font-size: 16px;\n        margin-bottom: 0;\n      }\n    }\n\n    @include respond-to(md) {\n      padding: 16px;\n    }\n  }\n}\n\n',"$color-orange: #F4B12F;\n$color-dark: #1A1819;\n$color-gray: #767676;\n$color-light-gray: #F1F1F1;",'@import \'colors\';\n\n$container-max-widths: (\n        sm: 100%,\n        md: 740px,\n        lg: 1080px,\n        xl: 1280px,\n);\n$grid-breakpoints: (\n        xs: 0,\n        sm: 576px,\n        md: 767px,\n        lg: 1200px,\n        xl: 1365px,\n);\n\n$font-family-base: \'Rubik\', sans-serif;\n$breadcrumb-item-padding-x: 0.1rem;\n$breadcrumb-active-color: $color-orange;\n$breadcrumb-divider-color: $color-gray;\n\n/// Mixin to manage responsive breakpoints\n/// @author Fulliton\n/// @param {String} $breakpoint - Breakpoint name\n/// @require $breakpoints\n@mixin respond-to($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}\n\n@mixin respond-up($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}'],sourceRoot:""}]);const s=i},3441:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(7897),a=e.n(r),o=e(1519),i=e.n(o)()(a());i.push([n.id,".loader[data-v-60233b9e]{background:#eee;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1000}.loader svg .st0[data-v-60233b9e]{fill:#eee}.loader svg#truck[data-v-60233b9e]{-webkit-animation:truck-data-v-60233b9e .5s infinite;animation:truck-data-v-60233b9e .5s infinite;left:50%;top:50%}.loader svg#road[data-v-60233b9e],.loader svg#truck[data-v-60233b9e]{position:absolute;transform:translate(-50%,-50%)}.loader svg#road[data-v-60233b9e]{-webkit-animation:road-data-v-60233b9e 1s infinite;animation:road-data-v-60233b9e 1s infinite;left:54%;top:calc(51% + 80px)}.loader p[data-v-60233b9e]{bottom:20%;color:#777;font-family:sans-serif;font-size:11px;left:50%;position:absolute;text-transform:uppercase;transform:translateX(-50%)}@-webkit-keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@-webkit-keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}@keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}","",{version:3,sources:["webpack://./resources/js/user/components/Spinner.vue"],names:[],mappings:"AAsBA,yBAOE,eAAA,CAHA,YAAA,CACA,MAAA,CAHA,cAAA,CAIA,KAAA,CAHA,WAAA,CAFA,YAfF,CAwBA,kCACE,SArBF,CAwBA,mCAKE,oDAAA,CAAA,4CAAA,CAFA,QAAA,CADA,OAlBF,CAwBA,qEAPE,iBAAA,CAGA,8BAZF,CAgBA,kCAKE,kDAAA,CAAA,0CAAA,CAFA,QAAA,CADA,oBAlBF,CAwBA,2BAKE,UAAA,CAGA,UAAA,CAPA,sBAAA,CACA,cAAA,CAIA,QAAA,CAFA,iBAAA,CADA,wBAAA,CAIA,0BApBF,CAwBA,yCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAYA,iCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAwBA,wCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF,CAUA,gCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n  z-index: 1000;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  background: #eee;\n}\n\n.loader svg .st0 {\n  fill: #eee;\n}\n\n.loader svg#truck {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: 0.5s truck infinite;\n}\n\n.loader svg#road {\n  position: absolute;\n  top: calc(51% + 160px / 2);\n  left: 54%;\n  transform: translate(-50%, -50%);\n  animation: 1s road infinite;\n}\n\n.loader p {\n  font-family: sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: absolute;\n  bottom: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #777;\n}\n\n@keyframes truck {\n  0% {\n    transform: scaleY(1) translate(-50%, -50%);\n  }\n  50% {\n    transform: scaleY(0.95) translate(-50%, -50%);\n  }\n  100% {\n    transform: scaleY(1) translate(-50%, -50%);\n  }\n}\n\n@keyframes road {\n  0% {\n    transform: scaleX(1) translate(-50%, -50%);\n  }\n  33% {\n    transform: scaleX(1) translate(-55%, -50%);\n  }\n  33% {\n    transform: scaleX(1) translate(-55%, -50%);\n  }\n  100% {\n    transform: scaleX(1) translate(-50%, -50%);\n  }\n}\n"],sourceRoot:""}]);const s=i},303:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(7897),a=e.n(r),o=e(1519),i=e.n(o)()(a());i.push([n.id,"#img-slider[data-v-52f4577c]{position:relative}#img-slider>div[data-v-52f4577c]{height:100%;width:100%}#img-slider .btn-slider[data-v-52f4577c]{background:#1a1819;border:none;border-radius:11px;color:#fff;height:36px;outline:none;padding:10px;position:absolute;transition:.3s;z-index:100}#img-slider .btn-slider svg[data-v-52f4577c]{height:16px;vertical-align:unset;width:16px}@media (min-width:767px){#img-slider .btn-slider[data-v-52f4577c]{height:44px}#img-slider .btn-slider svg[data-v-52f4577c]{height:25px;width:25px}}#img-slider .btn-slider[data-v-52f4577c]:hover{background:#1a1819;opacity:.8}#img-slider .next-slide[data-v-52f4577c]{bottom:24px;left:68px}@media (min-width:767px){#img-slider .next-slide[data-v-52f4577c]{left:92px}}#img-slider .prev-slide[data-v-52f4577c]{bottom:24px;left:24px}nav[data-v-52f4577c]{margin-top:24px}@media (min-width:767px){nav[data-v-52f4577c]{margin-top:0}}nav .breadcrumb[data-v-52f4577c]{font-size:14px!important;line-height:16px}nav .breadcrumb-item[data-v-52f4577c]{word-wrap:break-word!important}nav .breadcrumb-item[data-v-52f4577c],nav .breadcrumb-item>*[data-v-52f4577c]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}nav .breadcrumb-item>*[data-v-52f4577c]{white-space:normal}.name[data-v-52f4577c]{color:#1a1819;font-size:18px;font-weight:500;line-height:21px}@media (min-width:767px){.name[data-v-52f4577c]{font-size:24px;line-height:28px}}@media (min-width:1200px){.name[data-v-52f4577c]{font-size:32px;line-height:38px}}.description[data-v-52f4577c]{margin-top:16px}.description[data-v-52f4577c],.description *[data-v-52f4577c]{color:#767676!important;font-size:18px!important;line-height:21px!important}.cost[data-v-52f4577c]{color:#1a1819;font-size:18px;font-weight:500;line-height:21px}@media (min-width:767px){.cost[data-v-52f4577c]{font-size:20px;line-height:28px}}@media (min-width:1200px){.cost[data-v-52f4577c]{font-size:32px;line-height:38px}}.cost-wrapper[data-v-52f4577c],.cost-wrapper button[data-v-52f4577c]{margin-top:24px}.cost-wrapper button svg[data-v-52f4577c]{height:14px;margin-left:14px;width:14px}@media (min-width:576px){.cost-wrapper button[data-v-52f4577c]{margin-top:0}}.btn-cart[data-v-52f4577c]{background:#f4b12f;border-radius:16px 0;color:#1a1819;font-size:16px;font-weight:400;line-height:19px;padding:13px;transition:.3s;width:100%}.btn-cart[data-v-52f4577c]:hover{background:#1a1819;color:#fff}@media (min-width:576px){.btn-cart[data-v-52f4577c]{padding:10px 20px;width:auto}}","",{version:3,sources:["webpack://./resources/js/user/pages/Product.vue","webpack://./resources/scss/user/_colors.scss","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AA+OA,6BACE,iBA9OF,CAgPE,iCACE,WAAA,CACA,UA9OJ,CAiPE,yCAEE,kBCxPS,CDyPT,WAAA,CAGA,kBAAA,CALA,UAAA,CASA,WAAA,CANA,YAAA,CACA,YAAA,CAEA,iBAAA,CACA,cAAA,CACA,WA9OJ,CAiPI,6CAEE,WAAA,CACA,oBAAA,CAFA,UA7ON,CEMI,yBF0NF,yCAmBI,WA/OJ,CAgPI,6CAEE,WAAA,CADA,UA7ON,CACF,CAkPI,+CACE,kBClRO,CDmRP,UAhPN,CAqPE,yCACE,WAAA,CACA,SAnPJ,CEXI,yBF4PF,yCAKI,SAlPJ,CACF,CAqPE,yCACE,WAAA,CACA,SAnPJ,CAuPA,qBACE,eApPF,CExBI,yBF2QJ,qBAGI,YAlPF,CACF,CAoPE,iCACE,wBAAA,CACA,gBAlPJ,CAqPE,sCACE,8BAlPJ,CAqPI,8EAFA,yBAAA,CAAA,sBAAA,CAAA,iBA/OJ,CAiPI,wCACE,kBAlPN,CAwPA,uBAKE,aClUW,CD+TX,cAAA,CADA,eAAA,CAEA,gBApPF,CEhDI,yBFiSJ,uBAQI,cAAA,CACA,gBArPF,CACF,CEtDI,0BFiSJ,uBAaI,cAAA,CACA,gBApPF,CACF,CAsPA,8BAIE,eAnPF,CAoPE,8DAFA,uBAAA,CAFA,wBAAA,CACA,0BA5OF,CAsPA,uBAIE,aC9VW,CD4VX,cAAA,CADA,eAAA,CAEA,gBAlPF,CE/EI,yBF8TJ,uBAOI,cAAA,CACA,gBAlPF,CACF,CErFI,0BF8TJ,uBAYI,cAAA,CACA,gBAjPF,CACF,CAsPE,qEACE,eAhPJ,CAkPI,0CAEE,WAAA,CACA,gBAAA,CAFD,UA9OL,CEvGI,yBFiVF,sCAUI,YAhPJ,CACF,CAoPA,2BACE,kBC9Xa,CDsYb,oBAAA,CAPA,aC9XW,CDiYX,cAAA,CADA,eAAA,CAEA,gBAAA,CACA,YAAA,CAGA,cAAA,CAFA,UAhPF,CAoPE,iCACE,kBCzYS,CD0YT,UAlPJ,CE5HI,yBFgWJ,2BAmBI,iBAAA,CADA,UAjPF,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '../../../scss/user/variables';\n\n#img-slider {\n  position: relative;\n\n  > div {\n    height: 100%;\n    width: 100%;\n  }\n\n  .btn-slider {\n    color: #FFFFFF;\n    background: $color-dark;\n    border: none;\n    outline: none;\n    padding: 10px;\n    border-radius: 11px;\n    position: absolute;\n    transition: .3s;\n    z-index: 100;\n    height: 36px;\n\n    svg {\n      width: 16px;\n      height: 16px;\n      vertical-align: unset;\n    }\n\n    @include respond-to(md) {\n      height: 44px;\n      svg {\n        width: 25px;\n        height: 25px;\n\n      }\n    }\n\n    &:hover {\n      background: $color-dark;\n      opacity: 0.8;\n\n    }\n  }\n\n  .next-slide {\n    bottom: 24px;\n    left: 68px;\n\n    @include respond-to(md) {\n      left: 92px;\n    }\n  }\n\n  .prev-slide {\n    bottom: 24px;\n    left: 24px;\n  }\n}\n\nnav {\n  margin-top: 24px;\n  @include respond-to(md) {\n    margin-top: 0;\n  }\n\n  .breadcrumb {\n    font-size: 14px !important;\n    line-height: 16px;\n  }\n\n  .breadcrumb-item {\n    word-wrap: break-word !important;\n    width: fit-content;\n\n    > * {\n      white-space: normal;\n      width: fit-content;\n    }\n  }\n}\n\n.name {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 21px;\n\n  color: $color-dark;\n\n  @include respond-to(md) {\n    font-size: 24px;\n    line-height: 28px;\n  }\n\n  @include respond-to(lg) {\n    font-size: 32px;\n    line-height: 38px;\n  }\n}\n.description {\n  font-size: 18px !important;\n  line-height: 21px !important;\n  color: $color-gray !important;\n  margin-top: 16px;\n  * {\n    font-size: 18px !important;\n    line-height: 21px !important;\n    color: $color-gray !important;\n  }\n}\n\n.cost {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 21px;\n  color: $color-dark;\n\n  @include respond-to(md) {\n    font-size: 20px;\n    line-height: 28px;\n  }\n\n  @include respond-to(lg) {\n    font-size: 32px;\n    line-height: 38px;\n  }\n}\n\n.cost-wrapper {\n  margin-top: 24px;\n  button {\n    margin-top: 24px;\n\n    svg {\n     width: 14px;\n      height: 14px;\n      margin-left: 14px;\n    }\n\n    @include respond-to(sm) {\n      margin-top: 0;\n    }\n  }\n}\n\n.btn-cart {\n  background: $color-orange;\n  color: $color-dark;\n\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 19px;\n  padding: 13px;\n  width: 100%;\n  border-radius: 16px 0;\n  transition: 0.3s;\n\n  &:hover {\n    background: $color-dark;\n    color: #FFFFFF;\n  }\n\n  @include respond-to(sm) {\n    width: auto;\n    padding: 10px 20px;\n  }\n}\n","$color-orange: #F4B12F;\n$color-dark: #1A1819;\n$color-gray: #767676;\n$color-light-gray: #F1F1F1;",'@import \'colors\';\n\n$container-max-widths: (\n        sm: 100%,\n        md: 740px,\n        lg: 1080px,\n        xl: 1280px,\n);\n$grid-breakpoints: (\n        xs: 0,\n        sm: 576px,\n        md: 767px,\n        lg: 1200px,\n        xl: 1365px,\n);\n\n$font-family-base: \'Rubik\', sans-serif;\n$breadcrumb-item-padding-x: 0.1rem;\n$breadcrumb-active-color: $color-orange;\n$breadcrumb-divider-color: $color-gray;\n\n/// Mixin to manage responsive breakpoints\n/// @author Fulliton\n/// @param {String} $breakpoint - Breakpoint name\n/// @require $breakpoints\n@mixin respond-to($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}\n\n@mixin respond-up($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}'],sourceRoot:""}]);const s=i},9211:(n,t,e)=>{e.d(t,{Z:()=>d});const r={name:"Button",props:{query:{type:Object,required:!1,default:function(){return{}}},params:{type:Object,required:!1,default:function(){return{}}}},computed:{},created:function(){console.log(this.$attrs)},methods:{redirect:function(){this.$router.push({name:this.$attrs.route_link,params:this.params,query:this.query})}}};var a=e(3379),o=e.n(a),i=e(4799),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;const d=(0,e(1900).Z)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("button",{staticClass:"btn",class:(""===n.$attrs.rounded_angle?"btn-rounded-angle ":"")+(""===n.$attrs.rounded?"btn-rounded ":"")+(""===n.$attrs.orange?"btn-orange ":"")+(""===n.$attrs.dark?"btn-dark ":"")+(""===n.$attrs.big?"btn-big ":"")+(""===n.$attrs.small?"btn-small ":"")+("orange"===n.$attrs.hover?"btn-hover-orange":""),on:{click:n.redirect}},[n._t("default"),n._v(" "),""===n.$attrs.arrow?e("iconly",{attrs:{name:"arrow-right",type:"light"}}):n._e()],2)}),[],!1,null,"2c6af9d1",null).exports},4086:(n,t,e)=>{e.d(t,{Z:()=>l});var r=e(9211),a=e(629);function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const s={name:"Product",components:{Button:r.Z},props:{item:{type:Object,required:!1}},computed:function(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}({},(0,a.Se)({locale:"lang/locale"}))};var d=e(3379),A=e.n(d),c=e(1455),p={insert:"head",singleton:!1};A()(c.Z,p);c.Z.locals;const l=(0,e(1900).Z)(s,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card product-card"},[e("span",{staticClass:"badge"},[n._v(n._s(n.item.category.translations.find((function(t){return t.locale===n.locale})).name))]),n._v(" "),e("div",{staticClass:"product-card-image"},[e("img",{attrs:{src:n.item.image.uri+"?w=300&h=auto3&fit=crop&fm=webp",alt:"product"}})]),n._v(" "),e("div",{staticClass:"product-card-info"},[e("div",{staticClass:"row h-100"},[e("div",{staticClass:"col-12"},[e("p",{staticClass:"product-card-info-name"},[n._v("\n          "+n._s(n.item.translations.find((function(t){return t.locale===n.locale})).name)+"\n        ")])]),n._v(" "),e("div",{staticClass:"col-12 mt-auto"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 col-md"},[e("span",{staticClass:"product-card-info-cost"},[n._v("\n              "+n._s(n.$t("Product.prefix-cost"))+" "+n._s(n.$cost(n.item.cost))+" ₸\n            ")])]),n._v(" "),e("div",{staticClass:" col-12 col-md-auto"},[e("Button",{staticClass:"w-100",attrs:{dark:"",rounded:"",small:"",hover:"orange",route_link:"product",params:{id:n.item.id}}},[n._v("\n              "+n._s(n.$t("button.more"))+"\n            ")])],1)])])])])])}),[],!1,null,"2d45313a",null).exports},1926:(n,t,e)=>{e.d(t,{Z:()=>d});const r={name:"Spinner"};var a=e(3379),o=e.n(a),i=e(3441),s={insert:"head",singleton:!1};o()(i.Z,s);i.Z.locals;const d=(0,e(1900).Z)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"loader"},[e("svg",{attrs:{id:"truck",width:"200",viewBox:"0 0 2206 1727",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1233.33 0.70166L882.45 351.577L952.625 422.754L1092.98 283.407L1203.25 393.682V623.254C1203.25 734.532 1114.03 823.754 1002.75 823.754H948.615C1047.69 933.853 1102.67 1076.64 1103 1224.75C1102.8 1258.36 1099.78 1291.9 1093.98 1325H1406.76C1419.08 1214.76 1471.59 1112.92 1554.26 1038.95C1636.92 964.979 1743.95 924.057 1854.88 924.004C1944.11 924.053 2031.33 950.568 2105.5 1000.19V523.004C2105.5 411.727 2016.28 322.504 1905 322.504H1274.43L1164.15 212.229L1303.5 71.8792L1233.33 0.70166ZM301 422.754C245.863 422.754 200.75 467.867 200.75 523.004C200.75 578.142 245.863 623.254 301 623.254H802.25C802.25 570.078 781.126 519.08 743.525 481.479C705.924 443.878 654.926 422.754 601.75 422.754H301ZM501.5 723.504C448.371 723.517 395.583 731.977 345.11 748.567L381.2 841.799L334.083 859.844L301 766.612C194.443 812.893 107.27 894.75 54.3852 998.189L145.613 1039.29L124.56 1084.4L34.3352 1044.3C11.9581 1101.84 0.402491 1163.02 0.250244 1224.75C0.263526 1277.88 8.72328 1330.67 25.3127 1381.14L118.545 1345.05L136.59 1392.17L43.3577 1425.25C89.639 1531.81 171.496 1618.98 274.935 1671.87L315.035 1580.64L361.15 1601.69L321.05 1691.92C378.588 1714.3 439.764 1725.85 501.5 1726C554.629 1725.99 607.418 1717.53 657.89 1700.94L621.8 1607.71L668.918 1589.66L702 1682.9C808.558 1636.62 895.73 1554.76 948.615 1451.32L857.388 1411.22L878.44 1365.1L968.665 1405.2C991.042 1347.67 1002.6 1286.49 1002.75 1224.75C1002.74 1171.63 994.277 1118.84 977.688 1068.36L884.455 1104.45L866.41 1057.34L959.643 1024.25C913.361 917.697 831.504 830.524 728.065 777.639L687.965 868.867L641.85 847.814L681.95 757.589C624.412 735.212 563.236 723.656 501.5 723.504V723.504ZM501.5 924.004C581.264 924.004 657.761 955.69 714.163 1012.09C770.564 1068.49 802.25 1144.99 802.25 1224.75C802.25 1304.52 770.564 1381.02 714.163 1437.42C657.761 1493.82 581.264 1525.5 501.5 1525.5C421.736 1525.5 345.239 1493.82 288.838 1437.42C232.436 1381.02 200.75 1304.52 200.75 1224.75C200.75 1144.99 232.436 1068.49 288.838 1012.09C345.239 955.69 421.736 924.004 501.5 924.004V924.004ZM1854.88 1024.25C1761.82 1024.25 1672.57 1061.22 1606.77 1127.02C1540.97 1192.82 1504 1282.07 1504 1375.13C1504 1468.19 1540.97 1557.43 1606.77 1623.24C1672.57 1689.04 1761.82 1726 1854.88 1726C1947.93 1726 2037.18 1689.04 2102.98 1623.24C2168.78 1557.43 2205.75 1468.19 2205.75 1375.13C2205.75 1282.07 2168.78 1192.82 2102.98 1127.02C2037.18 1061.22 1947.93 1024.25 1854.88 1024.25V1024.25ZM1854.88 1224.75C1894.76 1224.75 1933.01 1240.6 1961.21 1268.8C1989.41 1297 2005.25 1335.25 2005.25 1375.13C2005.25 1415.01 1989.41 1453.26 1961.21 1481.46C1933.01 1509.66 1894.76 1525.5 1854.88 1525.5C1814.99 1525.5 1776.74 1509.66 1748.54 1481.46C1720.34 1453.26 1704.5 1415.01 1704.5 1375.13C1704.5 1335.25 1720.34 1297 1748.54 1268.8C1776.74 1240.6 1814.99 1224.75 1854.88 1224.75Z",fill:"black"}})]),n._v(" "),e("svg",{attrs:{id:"road",height:"4",width:"500"}},[e("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"0",x2:"100",y1:"0",y2:"0"}}),n._v(" "),e("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"110",x2:"210",y1:"0",y2:"0"}}),n._v(" "),e("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"220",x2:"320",y1:"0",y2:"0"}}),n._v(" "),e("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"330",x2:"430",y1:"0",y2:"0"}})]),n._v(" "),e("p",[n._v(n._s(n.$t("loading")))])])}),[],!1,null,"60233b9e",null).exports},7420:(n,t,e)=>{e.r(t),e.d(t,{default:()=>w});var r=e(7757),a=e.n(r),o=e(629),i=e(9669),s=e.n(i),d=e(1926),A=e(9755),c=e(4086);function p(n){return function(n){if(Array.isArray(n))return l(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(!n)return;if("string"==typeof n)return l(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return l(n,t)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function u(n,t,e,r,a,o,i){try{var s=n[o](i),d=s.value}catch(n){return void e(n)}s.done?t(d):Promise.resolve(d).then(r,a)}function m(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var o=n.apply(t,e);function i(n){u(o,r,a,i,s,"next",n)}function s(n){u(o,r,a,i,s,"throw",n)}i(void 0)}))}}function C(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function g(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?C(Object(e),!0).forEach((function(t){f(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):C(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const b={name:"Product",components:{Spinner:d.Z,Item:c.Z},beforeRouteLeave:function(n,t,e){this.loading=!0,setTimeout((function(){e()}),500)},data:function(){return{loading:!0,loaderImage:!0,product:{},images:[],image:""}},computed:g(g({},(0,o.Se)({locale:"lang/locale"})),{},{id:function(){return this.$route.params.id},image1:function(){if(this.images)return this.images.find((function(n){return n.show}))}}),mounted:function(){var n=this;return m(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$root.$loading.set(30);case 2:return t.next=4,n.getProduct();case 4:return t.next=6,n.$root.$loading.set(50);case 6:return t.next=8,setTimeout((function(){n.loading=!1,setTimeout((function(){console.log(A("#img-slider").width()),A("#img-slider").height(A("#img-slider").width()),A(window).resize((function(){console.log(A("#img-slider").width()),A("#img-slider").height(A("#img-slider").width())}))}),1e3)}),500);case 8:return t.next=10,n.$root.$loading.finish();case 10:case"end":return t.stop()}}),t)})))()},methods:{slide:function(n){console.log(this.images);var t=this.images.findIndex((function(n){return n.show}));n>0&&t+1<=this.images.length-1&&(this.images[t].show=!1,this.images[t+1].show=!0,console.log(this.images[t+1].id),this.images=p(this.images),t=this.images.findIndex((function(n){return n.show})),this.setImage(this.images[t].uri)),n<0&&t-1>=0&&(this.images[t].show=!1,this.images[t-1].show=!0,console.log(this.images[t-1].id),this.images=p(this.images),t=this.images.findIndex((function(n){return n.show})),this.setImage(this.images[t].uri))},getProduct:function(){var n=this;return m(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s().get("/api/users/product/"+n.id).then((function(t){n.product=t.data.payload.product,n.product.images.forEach((function(n,t){return n.show=0===t})),console.log(n.product.images),n.product.images.length>0?n.images=p(n.product.images):(n.product.image.show=!0,n.images.push(n.product.image)),n.setImage(n.images[0].uri)})).catch((function(t){n.$router.push({name:"index"}),n.$Swal.fire({icon:"error",title:"Oops...",text:t.response.data.message})}));case 1:case"end":return t.stop()}}),t)})))()},setLoading:function(n){var t=this;return m(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){t.loading=n,e()})));case 1:case"end":return e.stop()}}),e)})))()},setImage:function(n){var t=this;this.loaderImage=!0,this.image="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif";var e=new Image;e.src=n,e.onload=function(){t.image=e.src,t.loaderImage=!1}}}};var h=e(3379),x=e.n(h),v=e(303),k={insert:"head",singleton:!1};x()(v.Z,k);v.Z.locals;const w=(0,e(1900).Z)(b,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("transition",{attrs:{appear:"",mode:"out-in",name:"fade"}},[n.loading?e("Spinner",{key:"1"}):e("section",{key:"2",attrs:{id:""}},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-5 col-md-5 col-sm-10 col-12"},[n.images.length>0?e("div",{attrs:{id:"img-slider"}},[e("button",{staticClass:"next-slide btn-slider btn",on:{click:function(t){return n.slide(1)}}},[e("iconly",{attrs:{name:"arrow-right2",type:"outline"}})],1),n._v(" "),e("button",{staticClass:"prev-slide btn-slider btn",on:{click:function(t){return n.slide(-1)}}},[e("iconly",{attrs:{name:"arrow-left2",type:"outline"}})],1),n._v(" "),e("transition",{attrs:{appear:"",mode:"out-in",name:"fade"}},[!1===n.loaderImage?e("img",{key:1,staticClass:"w-100 h-100",staticStyle:{"object-fit":"cover"},attrs:{src:n.image}}):e("img",{key:2,staticClass:"w-100 h-100",staticStyle:{"object-fit":"cover"},attrs:{alt:"",src:"https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"}})])],1):n._e()]),n._v(" "),e("div",{staticClass:"col-lg-7 col-md-7 col-sm-10 col-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("nav",{attrs:{"aria-label":"breadcrumb mt-3"}},[e("ol",{staticClass:"breadcrumb"},[e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:{name:"index"}}},[n._v("\n                      "+n._s(n.$t("catalog.breadcrumb.index"))+"\n                    ")])],1),n._v(" "),e("li",{staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:{name:"catalog"}}},[n._v("\n                      "+n._s(n.$t("catalog.breadcrumb.catalog"))+"\n                    ")])],1),n._v(" "),n._l(n.product.category.parents,(function(t){return e("li",{key:t.id,staticClass:"breadcrumb-item"},[e("router-link",{attrs:{to:{name:"catalog",query:{category:t.id}}}},[n._v("\n                      "+n._s(t.translations?t.translations.find((function(t){return t.locale===n.locale})).name:t.name)+"\n                    ")])],1)})),n._v(" "),e("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[e("span",[n._v("\n                      "+n._s(n.product.category?n.product.category.translations.find((function(t){return t.locale===n.locale})).name:n.product.category.name)+"\n                    ")])])],2)])]),n._v(" "),e("div",{staticClass:"col-12"},[e("h1",{staticClass:"name"},[n._v(n._s(n.product.translations.find((function(t){return t.locale===n.locale})).name))])]),n._v(" "),e("div",{staticClass:"col-12 col-md-12 col-lg-8 description",domProps:{innerHTML:n._s(n.product.translations.find((function(t){return t.locale===n.locale})).description)}}),n._v(" "),e("div",{staticClass:"col-12 cost-wrapper"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-12 col-sm-auto cost"},[e("span",[n._v(n._s(n.$t("Product.prefix-cost"))+" "+n._s(n.$cost(n.product.cost))+" ₸")])]),n._v(" "),e("div",{staticClass:"col-12 col-sm"},[e("button",{staticClass:"btn btn-cart"},[n._v("\n                    "+n._s(n.$t("Product.buy"))+"\n                    "),e("iconly",{attrs:{name:"buy",type:"outline"}})],1)])])])])])]),n._v(" "),e("div",{staticClass:"row mt-5"},[e("div",{staticClass:"col-12"},[e("h2",[n._v("Сопутствующие товары")])]),n._v(" "),e("div",{staticClass:"col-12 mt-3"},[e("div",{staticClass:"row catalog-list-products gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4"},n._l(n.product.suitable,(function(n){return e("div",{key:n.id,staticClass:"col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"},[e("item",{attrs:{item:n}})],1)})),0)])])])],1)],1)}),[],!1,null,"52f4577c",null).exports}}]);
//# sourceMappingURL=2c88e4c0689a832e983e.js.map