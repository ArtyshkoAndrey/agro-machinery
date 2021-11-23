"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[258],{3578:(n,t,a)=>{a.d(t,{Z:()=>s});var e=a(7897),o=a.n(e),r=a(1519),i=a.n(r)()(o());i.push([n.id,".btn-rounded-angle[data-v-f40d2fc2]{border-radius:8px 0;padding:9.5px 14.5px}@media (min-width:767px){.btn-rounded-angle[data-v-f40d2fc2]{border-radius:16px 0;padding:13px 22px}}@media (min-width:1200px){.btn-rounded-angle[data-v-f40d2fc2]{border-radius:24px 0;padding:17.5px 27px}}.btn-rounded[data-v-f40d2fc2]{border-radius:4px}@media (min-width:767px){.btn-rounded[data-v-f40d2fc2]{border-radius:8px}}.btn-orange[data-v-f40d2fc2]{background-color:#f4b12f!important;color:#1a1819!important}.btn-dark[data-v-f40d2fc2]{background-color:#1a1819!important;color:#fff!important}.btn[data-v-f40d2fc2]{border:none;outline:none}.btn.btn-big[data-v-f40d2fc2]{font-size:14px}@media (min-width:767px){.btn.btn-big[data-v-f40d2fc2]{font-size:16px}}@media (min-width:1200px){.btn.btn-big[data-v-f40d2fc2]{font-size:18px}}.btn.btn-small[data-v-f40d2fc2]{font-size:12px}@media (min-width:767px){.btn.btn-small[data-v-f40d2fc2]{font-size:14px}}@media (min-width:1200px){.btn.btn-small[data-v-f40d2fc2]{font-size:16px}}.btn.btn-hover-orange[data-v-f40d2fc2]{transition:background-color .5s,color .4s}.btn.btn-hover-orange[data-v-f40d2fc2]:hover{background-color:#f4b12f!important;color:#1a1819!important}","",{version:3,sources:["webpack://./resources/js/user/components/Button.vue","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AAqCA,oCACE,mBAAA,CACA,oBApCF,CCuBI,yBDWJ,oCAKI,oBAAA,CACA,iBAnCF,CACF,CCiBI,0BDWJ,oCAUI,oBAAA,CACA,mBAlCF,CACF,CAqCA,8BACE,iBAlCF,CCOI,yBD0BJ,8BAGI,iBAhCF,CACF,CAmCA,6BACE,kCAAA,CACA,uBAhCF,CAmCA,2BACE,kCAAA,CACA,oBAhCF,CAmCA,sBAEE,WAAA,CADA,YA/BF,CAkCE,8BACE,cAhCJ,CChBI,yBD+CF,8BAII,cA/BJ,CACF,CCrBI,0BD+CF,8BAQI,cA9BJ,CACF,CAiCE,gCACE,cA/BJ,CC7BI,yBD2DF,gCAII,cA9BJ,CACF,CClCI,0BD2DF,gCAQI,cA7BJ,CACF,CAgCE,uCACE,yCA9BJ,CAgCI,6CACE,kCAAA,CACA,uBA9BN",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "resources/scss/user/variables";\n\n.btn-rounded-angle {\n  border-radius: 8px 0;\n  padding: 9.5px 14.5px;\n\n  @include respond-to(md) {\n    border-radius: 16px 0;\n    padding: 13px 22px;\n  }\n  \n  @include respond-to(lg) {\n    border-radius: 24px 0;\n    padding: 17.5px 27px;\n  }\n}\n\n.btn-rounded {\n  border-radius: 4px;\n  @include respond-to(md) {\n    border-radius: 8px;\n  }\n}\n\n.btn-orange {\n  background-color: $color-orange!important;\n  color: $color-dark!important;\n}\n\n.btn-dark {\n  background-color: $color-dark!important;\n  color: #ffffff!important;\n}\n\n.btn {\n  outline: none;\n  border: none;\n\n  &.btn-big {\n    font-size: 14px;\n\n    @include respond-to(md) {\n      font-size: 16px;\n    }\n\n    @include respond-to(lg) {\n      font-size: 18px;\n    }\n  }\n\n  &.btn-small {\n    font-size: 12px;\n\n    @include respond-to(md) {\n      font-size: 14px;\n    }\n\n    @include respond-to(lg) {\n      font-size: 16px;\n    }\n  }\n\n  &.btn-hover-orange {\n    transition: .5s background-color, .4s color;\n\n    &:hover {\n      background-color: $color-orange!important;\n      color: $color-dark !important;\n    }\n  }\n}\n','@import \'colors\';\n\n$container-max-widths: (\n        sm: 100%,\n        md: 740px,\n        lg: 1080px,\n        xl: 1280px,\n);\n$grid-breakpoints: (\n        xs: 0,\n        sm: 576px,\n        md: 767px,\n        lg: 1200px,\n        xl: 1365px,\n);\n\n$font-family-base: \'Rubik\', sans-serif;\n\n/// Mixin to manage responsive breakpoints\n/// @author Fulliton\n/// @param {String} $breakpoint - Breakpoint name\n/// @require $breakpoints\n@mixin respond-to($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}\n\n@mixin respond-up($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}'],sourceRoot:""}]);const s=i},4609:(n,t,a)=>{a.d(t,{Z:()=>s});var e=a(7897),o=a.n(e),r=a(1519),i=a.n(r)()(o());i.push([n.id,".bg-images[data-v-07130025]{background-color:#1a1819;background-image:url(/images/user/vector-header.svg);background-position:11px 80%;background-repeat:no-repeat;background-size:contain;border-radius:16px 0;color:#fff;padding:24px 24px 200px;position:relative;width:100%}.bg-images p[data-v-07130025]{color:hsla(0,0%,100%,.6);margin-top:6px}.bg-images h2[data-v-07130025],.bg-images p[data-v-07130025]{font-size:12px;margin-bottom:0}.bg-images h2[data-v-07130025]{color:#f4b12f;font-weight:400}.bg-images h1[data-v-07130025]{font-size:18px;margin-bottom:0;margin-top:4px}.bg-images img.tractor[data-v-07130025]{bottom:-50px;left:7%;position:absolute;width:86%}@media screen and (min-width:414px){.bg-images img.tractor[data-v-07130025]{bottom:-75px;left:19%;width:78%}}@media screen and (min-width:510px){.bg-images[data-v-07130025]{background-position:63px 105%}.bg-images img.tractor[data-v-07130025]{bottom:-110px;left:20%;width:69%}}@media (min-width:576px){.bg-images[data-v-07130025]{background-position:600%;background-size:91%;padding:35px 35px 200px}.bg-images p[data-v-07130025]{font-size:16px}.bg-images h1[data-v-07130025]{font-size:24px}.bg-images h2[data-v-07130025]{font-size:21px}.bg-images img.tractor[data-v-07130025]{bottom:-115px;left:33%;width:66%}}@media (min-width:767px){.bg-images[data-v-07130025]{border-radius:48px 0;padding:77px 41px 200px}.bg-images p[data-v-07130025]{font-size:18px}.bg-images h1[data-v-07130025]{font-size:52px}.bg-images h2[data-v-07130025]{font-size:24px}.bg-images img.tractor[data-v-07130025]{bottom:-115px;left:35%;width:66%}}@media (min-width:1200px){.bg-images[data-v-07130025]{background-position:300% 0;background-size:93%;border-radius:70px 0;padding:99px 77px 130px}.bg-images p[data-v-07130025]{font-size:18px;margin-top:15px}.bg-images h1[data-v-07130025]{font-size:52px;margin-top:0}.bg-images h2[data-v-07130025]{font-size:24px}.bg-images img.tractor[data-v-07130025]{bottom:-30px;left:35%;width:64%}}@media (min-width:1365px){.bg-images[data-v-07130025]{background-position:103%;background-size:74%}.bg-images img.tractor[data-v-07130025]{bottom:-51px;left:44%;width:53%}}","",{version:3,sources:["webpack://./resources/js/user/components/HeaderSection.vue","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AA0BE,4BAEE,wBAAA,CACA,oDAAA,CAGA,4BAAA,CACA,2BAAA,CAFA,uBAAA,CAMA,oBAAA,CACA,UAAA,CAJA,uBAAA,CAEA,iBAAA,CATA,UAhBJ,CA6BI,8BACE,wBAAA,CAEA,cA1BN,CA6BI,6DAJE,cAAA,CAEA,eArBN,CAuBI,+BACE,aAAA,CAEA,eA1BN,CA6BI,+BACE,cAAA,CAEA,eAAA,CADA,cA1BN,CA8BI,wCAEE,YAAA,CAEA,OAAA,CAHA,iBAAA,CAEA,SA3BN,CA+BI,oCACE,wCACE,YAAA,CAEA,QAAA,CADA,SA5BN,CACF,CAgCI,oCA/CF,4BAgDI,6BA7BJ,CA+BI,wCACE,aAAA,CAEA,QAAA,CADA,SA5BN,CACF,CCzBI,yBDAF,4BA2DI,wBAAA,CADA,mBAAA,CAEA,uBA7BJ,CA8BI,8BACE,cA5BN,CA8BI,+BACE,cA5BN,CA8BI,+BACE,cA5BN,CAgCI,wCACE,aAAA,CAEA,QAAA,CADA,SA7BN,CACF,CC9CI,yBDAF,4BAiFI,oBAAA,CADA,uBA7BJ,CAgCI,8BACE,cA9BN,CAgCI,+BACE,cA9BN,CAgCI,+BACE,cA9BN,CAgCI,wCACE,aAAA,CAEA,QAAA,CADA,SA7BN,CACF,CClEI,0BDAF,4BAwGI,0BAAA,CADA,mBAAA,CAFA,oBAAA,CADA,uBA3BJ,CAiCI,8BAEE,cAAA,CADA,eA9BN,CAiCI,+BAEE,cAAA,CADA,YA9BN,CAiCI,+BACE,cA/BN,CAiCI,wCACE,YAAA,CAEA,QAAA,CADA,SA9BN,CACF,CC1FI,0BDAF,4BA8HI,wBAAA,CADA,mBA9BJ,CAiCI,wCACE,YAAA,CAEA,QAAA,CADA,SA9BN,CACF",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "resources/scss/user/variables";\n  .bg-images {\n    width: 100%;\n    background-color: #1A1819;\n    background-image: url("/images/user/vector-header.svg");\n\n    background-size: contain;\n    background-position: 11px 80%;\n    background-repeat: no-repeat;\n    padding: 24px 24px 200px;\n\n    position: relative;\n    border-radius: 16px 0;\n    color: white;\n\n    p {\n      color: rgba(255, 255, 255, .6);\n      font-size: 12px;\n      margin-top: 6px;\n      margin-bottom: 0;\n    }\n    h2 {\n      color: #F4B12F;\n      font-size: 12px;\n      font-weight: normal;\n      margin-bottom: 0px;\n    }\n    h1 {\n      font-size: 18px;\n      margin-top: 4px;\n      margin-bottom: 0;\n    }\n\n    img.tractor {\n      position: absolute;\n      bottom: -50px;\n      width: 86%;\n      left: 7%;\n    }\n\n    @media screen and (min-width: 414px) {\n      img.tractor {\n        bottom: -75px;\n        width: 78%;\n        left: 19%;\n      }\n    }\n\n    @media screen and (min-width:   510px) {\n      background-position: 63px 105%;\n\n      img.tractor {\n        bottom: -110px;\n        width: 69%;\n        left: 20%;\n      }\n    }\n\n    @include respond-to (sm) {\n      background-size: 91%;\n      background-position: 600%;\n      padding: 35px 35px 200px;\n      p {\n        font-size: 16px;\n      }\n      h1 {\n        font-size: 24px;\n      }\n      h2 {\n        font-size: 21px;\n      }\n\n\n      img.tractor {\n        bottom: -115px;\n        width: 66%;\n        left: 33%;\n      }\n    }\n\n    @include respond-to(md) {\n      padding: 77px 41px 200px;\n      border-radius: 48px 0;\n\n      p {\n        font-size: 18px;\n      }\n      h1 {\n        font-size: 52px;\n      }\n      h2 {\n        font-size: 24px;\n      }\n      img.tractor {\n        bottom: -115px;\n        width: 66%;\n        left: 35%;\n      }\n    }\n\n    @include respond-to(lg) {\n      padding: 99px 77px 130px;\n      border-radius: 70px 0;\n\n      background-size: 93%;\n      background-position: 300% 0;\n\n      p {\n        margin-top: 15px;\n        font-size: 18px;\n      }\n      h1 {\n        margin-top: 0px;\n        font-size: 52px;\n      }\n      h2 {\n        font-size: 24px;\n      }\n      img.tractor {\n        bottom: -30px;\n        width: 64%;\n        left: 35%;\n      }\n    }\n\n    @include respond-to(xl) {\n      background-size: 74%;\n      background-position: 103%;\n\n      img.tractor {\n        bottom: -51px;\n        width: 53%;\n        left: 44%;\n      }\n    }\n  }\n','@import \'colors\';\n\n$container-max-widths: (\n        sm: 100%,\n        md: 740px,\n        lg: 1080px,\n        xl: 1280px,\n);\n$grid-breakpoints: (\n        xs: 0,\n        sm: 576px,\n        md: 767px,\n        lg: 1200px,\n        xl: 1365px,\n);\n\n$font-family-base: \'Rubik\', sans-serif;\n\n/// Mixin to manage responsive breakpoints\n/// @author Fulliton\n/// @param {String} $breakpoint - Breakpoint name\n/// @require $breakpoints\n@mixin respond-to($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}\n\n@mixin respond-up($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}'],sourceRoot:""}]);const s=i},2099:(n,t,a)=>{a.d(t,{Z:()=>s});var e=a(7897),o=a.n(e),r=a(1519),i=a.n(r)()(o());i.push([n.id,".product-card[data-v-4d3f1604]{background:#fff;border:1px solid #dedede;border-radius:12px;height:100%;margin:0;padding:0;position:relative;transition:box-shadow .25s,border-color .3s}.product-card[data-v-4d3f1604]:hover{border-color:transparent;box-shadow:-1px 12px 14px #d3d4da}.product-card .badge[data-v-4d3f1604]{background-color:#f4b12f;border-radius:4px;color:#1a1819;font-size:10px;font-weight:400;line-height:12px;padding:2px 4px;position:absolute;right:8px;top:8px}.product-card .product-card-image[data-v-4d3f1604]{background:#fff;border-radius:12px 12px 0 0;height:114px;margin:0;padding:0}.product-card .product-card-image img[data-v-4d3f1604]{border-radius:12px 12px 0 0;height:100%;margin:0;-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center;padding:0;width:100%}@media (min-width:767px){.product-card .badge[data-v-4d3f1604]{border-radius:8px;font-size:18px;line-height:21px;padding:4px 8px;right:17px;top:15px}.product-card .product-card-image[data-v-4d3f1604]{height:225px}}.product-card .product-card-info[data-v-4d3f1604]{padding:8px}.product-card .product-card-info .product-card-info-name[data-v-4d3f1604]{font-size:12px;font-weight:400;margin-bottom:8px}@media (min-width:767px){.product-card .product-card-info .product-card-info-name[data-v-4d3f1604]{font-size:16px;margin-bottom:24px}}.product-card .product-card-info .product-card-info-cost[data-v-4d3f1604]{display:block;font-size:12px;font-weight:500;margin-bottom:12px}@media (min-width:767px){.product-card .product-card-info .product-card-info-cost[data-v-4d3f1604]{font-size:16px;margin-bottom:0}.product-card .product-card-info[data-v-4d3f1604]{padding:16px}}","",{version:3,sources:["webpack://./resources/js/user/components/Product.vue","webpack://./resources/scss/user/_colors.scss","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AAoDA,+BAME,eAAA,CAFA,wBAAA,CACA,kBAAA,CAJA,WAAA,CACA,QAAA,CACA,SAAA,CAKA,iBAAA,CADA,2CAlDF,CAqDE,qCAEE,wBAAA,CADA,iCAlDJ,CAsDE,sCAEE,wBCrEW,CDyEX,iBAAA,CAHA,aCrES,CD4ET,cAAA,CANA,eAAA,CAOA,gBAAA,CAJA,eAAA,CANA,iBAAA,CAQA,SAAA,CADA,OAlDJ,CAwDE,mDACE,eAAA,CAIA,2BAAA,CADA,YAAA,CADA,QAAA,CADA,SAnDJ,CAwDI,uDAOE,2BAAA,CAHA,WAAA,CAFA,QAAA,CAGA,mBAAA,CAAA,gBAAA,CACA,yBAAA,CAAA,sBAAA,CALA,SAAA,CAEA,UAlDN,CEfI,yBF0EA,sCAGE,iBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CAJA,UAAA,CADA,QAnDJ,CA2DE,mDACE,YAzDJ,CACF,CA4DE,kDACE,WA1DJ,CA4DI,0EACE,cAAA,CACA,eAAA,CACA,iBA1DN,CEpCI,yBF2FA,0EAMI,cAAA,CACA,kBAzDN,CACF,CA4DI,0EACE,aAAA,CACA,cAAA,CACA,eAAA,CACA,kBA1DN,CEhDI,yBFsGA,0EAOI,cAAA,CACA,eAzDN,CAmCA,kDA2BI,YAzDJ,CAJF",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "resources/scss/user/variables";\n.product-card {\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #DEDEDE;\n  border-radius: 12px;\n  background: #ffffff;\n  transition: .25s box-shadow, .3s border-color;\n  position: relative;\n\n  &:hover {\n    box-shadow: -1px 12px 14px #D3D4DA;\n    border-color: transparent;\n  }\n\n  .badge {\n    position: absolute;\n    background-color: $color-orange;\n    color: $color-dark;\n    font-weight: 400;\n\n    border-radius: 4px;\n    padding: 2px 4px;\n    top: 8px;\n    right: 8px;\n    font-size: 10px;\n    line-height: 12px;\n  }\n\n  .product-card-image {\n    background: #ffffff;\n    padding: 0;\n    margin: 0;\n    height: 114px;\n    border-radius: 12px 12px 0 0;\n\n    img {\n      padding: 0;\n      margin: 0;\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n      object-position: center;\n      border-radius: 12px 12px 0 0;\n    }\n  }\n\n  @include respond-to(md) {\n    .badge {\n      top: 15px;\n      right: 17px;\n      border-radius: 8px;\n      font-size: 18px;\n      line-height: 21px;\n      padding: 4px 8px;\n    }\n\n    .product-card-image {\n      height: 225px;\n    }\n  }\n\n  .product-card-info {\n    padding: 8px;\n\n    .product-card-info-name {\n      font-size: 12px;\n      font-weight: 400;\n      margin-bottom: 8px;\n\n      @include respond-to(md) {\n        font-size: 16px;\n        margin-bottom: 24px;\n      }\n    }\n\n    .product-card-info-cost {\n      display: block;\n      font-size: 12px;\n      font-weight: 500;\n      margin-bottom: 12px;\n\n      @include respond-to(md) {\n        font-size: 16px;\n        margin-bottom: 0;\n      }\n    }\n\n    @include respond-to(md) {\n      padding: 16px;\n    }\n  }\n}\n\n',"$color-orange: #F4B12F;\n$color-dark: #1A1819;\n$color-gray: #767676;\n$color-light-gray: #F1F1F1;",'@import \'colors\';\n\n$container-max-widths: (\n        sm: 100%,\n        md: 740px,\n        lg: 1080px,\n        xl: 1280px,\n);\n$grid-breakpoints: (\n        xs: 0,\n        sm: 576px,\n        md: 767px,\n        lg: 1200px,\n        xl: 1365px,\n);\n\n$font-family-base: \'Rubik\', sans-serif;\n\n/// Mixin to manage responsive breakpoints\n/// @author Fulliton\n/// @param {String} $breakpoint - Breakpoint name\n/// @require $breakpoints\n@mixin respond-to($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}\n\n@mixin respond-up($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}'],sourceRoot:""}]);const s=i},3441:(n,t,a)=>{a.d(t,{Z:()=>s});var e=a(7897),o=a.n(e),r=a(1519),i=a.n(r)()(o());i.push([n.id,".loader[data-v-60233b9e]{background:#eee;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1000}.loader svg .st0[data-v-60233b9e]{fill:#eee}.loader svg#truck[data-v-60233b9e]{-webkit-animation:truck-data-v-60233b9e .5s infinite;animation:truck-data-v-60233b9e .5s infinite;left:50%;top:50%}.loader svg#road[data-v-60233b9e],.loader svg#truck[data-v-60233b9e]{position:absolute;transform:translate(-50%,-50%)}.loader svg#road[data-v-60233b9e]{-webkit-animation:road-data-v-60233b9e 1s infinite;animation:road-data-v-60233b9e 1s infinite;left:54%;top:calc(51% + 80px)}.loader p[data-v-60233b9e]{bottom:20%;color:#777;font-family:sans-serif;font-size:11px;left:50%;position:absolute;text-transform:uppercase;transform:translateX(-50%)}@-webkit-keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@-webkit-keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}@keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}","",{version:3,sources:["webpack://./resources/js/user/components/Spinner.vue"],names:[],mappings:"AAsBA,yBAOE,eAAA,CAHA,YAAA,CACA,MAAA,CAHA,cAAA,CAIA,KAAA,CAHA,WAAA,CAFA,YAfF,CAwBA,kCACE,SArBF,CAwBA,mCAKE,oDAAA,CAAA,4CAAA,CAFA,QAAA,CADA,OAlBF,CAwBA,qEAPE,iBAAA,CAGA,8BAZF,CAgBA,kCAKE,kDAAA,CAAA,0CAAA,CAFA,QAAA,CADA,oBAlBF,CAwBA,2BAKE,UAAA,CAGA,UAAA,CAPA,sBAAA,CACA,cAAA,CAIA,QAAA,CAFA,iBAAA,CADA,wBAAA,CAIA,0BApBF,CAwBA,yCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAYA,iCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAwBA,wCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF,CAUA,gCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n  z-index: 1000;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  background: #eee;\n}\n\n.loader svg .st0 {\n  fill: #eee;\n}\n\n.loader svg#truck {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: 0.5s truck infinite;\n}\n\n.loader svg#road {\n  position: absolute;\n  top: calc(51% + 160px / 2);\n  left: 54%;\n  transform: translate(-50%, -50%);\n  animation: 1s road infinite;\n}\n\n.loader p {\n  font-family: sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: absolute;\n  bottom: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #777;\n}\n\n@keyframes truck {\n  0% {\n    transform: scaleY(1) translate(-50%, -50%);\n  }\n  50% {\n    transform: scaleY(0.95) translate(-50%, -50%);\n  }\n  100% {\n    transform: scaleY(1) translate(-50%, -50%);\n  }\n}\n\n@keyframes road {\n  0% {\n    transform: scaleX(1) translate(-50%, -50%);\n  }\n  33% {\n    transform: scaleX(1) translate(-55%, -50%);\n  }\n  33% {\n    transform: scaleX(1) translate(-55%, -50%);\n  }\n  100% {\n    transform: scaleX(1) translate(-50%, -50%);\n  }\n}\n"],sourceRoot:""}]);const s=i},7317:(n,t,a)=>{a.d(t,{Z:()=>A});const e={name:"Button",computed:{},created:function(){console.log(this.$attrs)},methods:{redirect:function(){this.$router.push({name:"test"})}}};var o=a(3379),r=a.n(o),i=a(3578),s={insert:"head",singleton:!1};r()(i.Z,s);i.Z.locals;const A=(0,a(1900).Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("button",{staticClass:"btn",class:(""===n.$attrs.rounded_angle?"btn-rounded-angle ":"")+(""===n.$attrs.rounded?"btn-rounded ":"")+(""===n.$attrs.orange?"btn-orange ":"")+(""===n.$attrs.dark?"btn-dark ":"")+(""===n.$attrs.big?"btn-big ":"")+(""===n.$attrs.small?"btn-small ":"")+("orange"===n.$attrs.hover?"btn-hover-orange":""),on:{click:n.redirect}},[n._t("default"),n._v(" "),""===n.$attrs.arrow?a("iconly",{attrs:{name:"arrow-right",type:"light"}}):n._e()],2)}),[],!1,null,"f40d2fc2",null).exports},2822:(n,t,a)=>{a.d(t,{Z:()=>o});const e={name:"CategoryInfo",components:{Button:a(7317).Z},props:{category:{type:Object,required:!0},reverse:{default:!1,type:Boolean}}};const o=(0,a(1900).Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"category-item row align-items-center",class:n.reverse?"category-item-reverse":null},[a("div",{staticClass:"col-8 col-md-6 col-lg-4 offset-lg-1 category-item_image"},[a("div",{staticClass:"bg-gray"},[a("div",{staticClass:"col-12 category-item_image_text"},[a("span",{staticClass:"category-item_counter"},[n._v("\n          28\n        ")]),n._v(" "),a("span",{staticClass:"category-item_title"},[n._v("\n          "+n._s(n.$t("index.category-item.count"))+"\n        ")])]),n._v(" "),a("div",{staticClass:"col-12"},[a("img",{attrs:{alt:"track",src:n.category.image.uri+"?w=500&h=auto&fit=crop&fm=webp"}})])])]),n._v(" "),a("div",{staticClass:"col-10 offset-2 col-md-6 offset-md-0 col-lg-4 offset-lg-1 category-item_info"},[a("p",{staticClass:"category-item_info_title"},[n._v("\n      "+n._s(n.category.name)+"\n    ")]),n._v(" "),a("p",[n._v("\n      "+n._s(n.category.description)+"\n    ")]),n._v(" "),a("Button",{attrs:{orange:"",rounded_angle:"",arrow:"",big:""}},[n._v("\n      "+n._s(n.$t("button.catalog"))+"\n    ")])],1)])}),[],!1,null,"7e766dee",null).exports},4717:(n,t,a)=>{a.d(t,{Z:()=>A});const e={name:"HeaderSection"};var o=a(3379),r=a.n(o),i=a(4609),s={insert:"head",singleton:!1};r()(i.Z,s);i.Z.locals;const A=(0,a(1900).Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"row mx-0"},[a("div",{staticClass:"bg-images "},[a("div",{staticClass:"col-12"},[a("h2",[n._v(n._s(n.$t("HeaderSection.great")))]),n._v(" "),a("h1",[n._v(n._s(n.$t("HeaderSection.title")))])]),n._v(" "),a("div",{staticClass:"col-12 col-sm-10 col-md-9 col-lg-5"},[a("p",[n._v("\n        "+n._s(n.$t("HeaderSection.content"))+"\n      ")])]),n._v(" "),a("img",{staticClass:"tractor",attrs:{src:"public/images/user/traktor-mobile.png",alt:"traktor"}})])])}),[],!1,null,"07130025",null).exports},1926:(n,t,a)=>{a.d(t,{Z:()=>A});const e={name:"Spinner"};var o=a(3379),r=a.n(o),i=a(3441),s={insert:"head",singleton:!1};r()(i.Z,s);i.Z.locals;const A=(0,a(1900).Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"loader"},[a("svg",{attrs:{id:"truck",width:"200",viewBox:"0 0 2206 1727",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M1233.33 0.70166L882.45 351.577L952.625 422.754L1092.98 283.407L1203.25 393.682V623.254C1203.25 734.532 1114.03 823.754 1002.75 823.754H948.615C1047.69 933.853 1102.67 1076.64 1103 1224.75C1102.8 1258.36 1099.78 1291.9 1093.98 1325H1406.76C1419.08 1214.76 1471.59 1112.92 1554.26 1038.95C1636.92 964.979 1743.95 924.057 1854.88 924.004C1944.11 924.053 2031.33 950.568 2105.5 1000.19V523.004C2105.5 411.727 2016.28 322.504 1905 322.504H1274.43L1164.15 212.229L1303.5 71.8792L1233.33 0.70166ZM301 422.754C245.863 422.754 200.75 467.867 200.75 523.004C200.75 578.142 245.863 623.254 301 623.254H802.25C802.25 570.078 781.126 519.08 743.525 481.479C705.924 443.878 654.926 422.754 601.75 422.754H301ZM501.5 723.504C448.371 723.517 395.583 731.977 345.11 748.567L381.2 841.799L334.083 859.844L301 766.612C194.443 812.893 107.27 894.75 54.3852 998.189L145.613 1039.29L124.56 1084.4L34.3352 1044.3C11.9581 1101.84 0.402491 1163.02 0.250244 1224.75C0.263526 1277.88 8.72328 1330.67 25.3127 1381.14L118.545 1345.05L136.59 1392.17L43.3577 1425.25C89.639 1531.81 171.496 1618.98 274.935 1671.87L315.035 1580.64L361.15 1601.69L321.05 1691.92C378.588 1714.3 439.764 1725.85 501.5 1726C554.629 1725.99 607.418 1717.53 657.89 1700.94L621.8 1607.71L668.918 1589.66L702 1682.9C808.558 1636.62 895.73 1554.76 948.615 1451.32L857.388 1411.22L878.44 1365.1L968.665 1405.2C991.042 1347.67 1002.6 1286.49 1002.75 1224.75C1002.74 1171.63 994.277 1118.84 977.688 1068.36L884.455 1104.45L866.41 1057.34L959.643 1024.25C913.361 917.697 831.504 830.524 728.065 777.639L687.965 868.867L641.85 847.814L681.95 757.589C624.412 735.212 563.236 723.656 501.5 723.504V723.504ZM501.5 924.004C581.264 924.004 657.761 955.69 714.163 1012.09C770.564 1068.49 802.25 1144.99 802.25 1224.75C802.25 1304.52 770.564 1381.02 714.163 1437.42C657.761 1493.82 581.264 1525.5 501.5 1525.5C421.736 1525.5 345.239 1493.82 288.838 1437.42C232.436 1381.02 200.75 1304.52 200.75 1224.75C200.75 1144.99 232.436 1068.49 288.838 1012.09C345.239 955.69 421.736 924.004 501.5 924.004V924.004ZM1854.88 1024.25C1761.82 1024.25 1672.57 1061.22 1606.77 1127.02C1540.97 1192.82 1504 1282.07 1504 1375.13C1504 1468.19 1540.97 1557.43 1606.77 1623.24C1672.57 1689.04 1761.82 1726 1854.88 1726C1947.93 1726 2037.18 1689.04 2102.98 1623.24C2168.78 1557.43 2205.75 1468.19 2205.75 1375.13C2205.75 1282.07 2168.78 1192.82 2102.98 1127.02C2037.18 1061.22 1947.93 1024.25 1854.88 1024.25V1024.25ZM1854.88 1224.75C1894.76 1224.75 1933.01 1240.6 1961.21 1268.8C1989.41 1297 2005.25 1335.25 2005.25 1375.13C2005.25 1415.01 1989.41 1453.26 1961.21 1481.46C1933.01 1509.66 1894.76 1525.5 1854.88 1525.5C1814.99 1525.5 1776.74 1509.66 1748.54 1481.46C1720.34 1453.26 1704.5 1415.01 1704.5 1375.13C1704.5 1335.25 1720.34 1297 1748.54 1268.8C1776.74 1240.6 1814.99 1224.75 1854.88 1224.75Z",fill:"black"}})]),n._v(" "),a("svg",{attrs:{id:"road",height:"4",width:"500"}},[a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"0",x2:"100",y1:"0",y2:"0"}}),n._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"110",x2:"210",y1:"0",y2:"0"}}),n._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"220",x2:"320",y1:"0",y2:"0"}}),n._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"330",x2:"430",y1:"0",y2:"0"}})]),n._v(" "),a("p",[n._v(n._s(n.$t("loading")))])])}),[],!1,null,"60233b9e",null).exports},1258:(n,t,a)=>{a.r(t),a.d(t,{default:()=>h});var e=a(7757),o=a.n(e),r=a(4717),i=a(2822),s=a(1926),A=a(7317);const d={name:"Product",components:{Button:A.Z},props:{item:{type:Object,required:!1}}};var c=a(3379),p=a.n(c),l=a(2099),C={insert:"head",singleton:!1};p()(l.Z,C);l.Z.locals;var m=a(1900);const g=(0,m.Z)(d,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"card product-card"},[a("span",{staticClass:"badge"},[n._v(n._s(n.item.category.name))]),n._v(" "),a("div",{staticClass:"product-card-image"},[a("img",{attrs:{src:n.item.image.uri+"?w=300&h=auto3&fit=crop&fm=webp",alt:"product"}})]),n._v(" "),a("div",{staticClass:"product-card-info"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("p",{staticClass:"product-card-info-name"},[n._v("\n          "+n._s(n.item.name)+"\n        ")])]),n._v(" "),a("div",{staticClass:"col-12"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md"},[a("span",{staticClass:"product-card-info-cost"},[n._v("\n              "+n._s(n.$t("Product.prefix-cost"))+" "+n._s(n.$cost(n.item.cost))+" ₸\n            ")])]),n._v(" "),a("div",{staticClass:" col-12 col-md-auto"},[a("Button",{staticClass:"w-100",attrs:{dark:"",rounded:"",small:"",hover:"orange"}},[n._v("\n              "+n._s(n.$t("button.more"))+"\n            ")])],1)])])])])])}),[],!1,null,"4d3f1604",null).exports;var u=a(9669),f=a.n(u);function b(n,t,a,e,o,r,i){try{var s=n[r](i),A=s.value}catch(n){return void a(n)}s.done?t(A):Promise.resolve(A).then(e,o)}function x(n){return function(){var t=this,a=arguments;return new Promise((function(e,o){var r=n.apply(t,a);function i(n){b(r,e,o,i,s,"next",n)}function s(n){b(r,e,o,i,s,"throw",n)}i(void 0)}))}}const v={name:"Index",components:{HeaderSection:r.Z,CategoryInfo:i.Z,Spinner:s.Z,Product:g,Button:A.Z},metaInfo:function(){return{title:"Главная страница"}},data:function(){return{loading:!0,categories:[],popular_products:[],new_products:[]}},mounted:function(){var n=this;return x(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$root.$loading.set(30);case 2:return t.next=4,n.getCategories();case 4:return t.next=6,n.$root.$loading.set(50);case 6:return t.next=8,n.getProducts();case 8:return t.next=10,n.$root.$loading.finish();case 10:case"end":return t.stop()}}),t)})))()},methods:{getCategories:function(){var n=this;return x(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("/api/users/categories",{params:{to_index:1,max_count:4}}).then((function(t){n.categories=t.data.payload.categories}));case 2:case"end":return t.stop()}}),t)})))()},getProducts:function(){var n=this;return x(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:f().get("/api/users/products",{params:{new:!0,has_image:!0,max_count:7,has_category:!0}}).then((function(t){n.new_products=t.data.payload.products})),f().get("/api/users/products",{params:{popular:!0,has_image:!0,max_count:7,has_category:!0}}).then((function(t){n.popular_products=t.data.payload.products,n.loading=!1}));case 2:case"end":return t.stop()}}),t)})))()}}};const h=(0,m.Z)(v,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("transition",{attrs:{appear:"",mode:"out-in",name:"fade"}},[n.loading?a("Spinner",{key:"1"}):a("div",{key:"2"},[a("HeaderSection"),n._v(" "),a("section",{attrs:{id:"items-description"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h3",[n._v(n._s(n.$t("index.section_2.title")))])]),n._v(" "),a("div",{staticClass:"col-11 col-sm-6 col-md-5 col-lg-5"},[a("p",{staticClass:"fw-bold color-dark"},[n._v("\n              "+n._s(n.$t("index.section_2.content_1"))+"\n            ")])]),n._v(" "),a("div",{staticClass:"col-11 col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-3"},[a("p",{staticClass:"color-gray"},[n._v("\n              "+n._s(n.$t("index.section_2.content_2"))+"\n            ")])])])]),n._v(" "),a("section",{staticClass:"mt-5"},n._l(n.categories,(function(n,t){return a("category-info",{key:n.id,attrs:{category:n,reverse:(t+1)%2==0}})})),1),n._v(" "),a("section",{staticClass:"mt-5",attrs:{id:"perfectly-list"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-lg-4"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-6                                                                         col-lg-12"},[a("h3",[n._v(n._s(n.$t("index.perfectly-list.title")))])]),n._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-12 offset-lg-0"},[a("p",[n._v(n._s(n.$t("index.perfectly-list.description")))])])])]),n._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("ul",{staticClass:"list-unstyled"},[a("li",[n._v(n._s(n.$t("index.perfectly-list.list.0")))]),n._v(" "),a("li",[n._v(n._s(n.$t("index.perfectly-list.list.1")))]),n._v(" "),a("li",[n._v(n._s(n.$t("index.perfectly-list.list.2")))])])]),n._v(" "),a("div",{staticClass:"col-12 col-md-6 col-lg-4"},[a("ul",{staticClass:"list-unstyled"},[a("li",[n._v(n._s(n.$t("index.perfectly-list.list.3")))]),n._v(" "),a("li",[n._v(n._s(n.$t("index.perfectly-list.list.4")))])])])])]),n._v(" "),a("section",{staticClass:"mt-5 mb-3 list-products",attrs:{id:"new-products"}},[a("div",{staticClass:"row gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4"},[a("div",{staticClass:"col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"},[a("div",{staticClass:"card card-for-info-products"},[a("h4",[a("span",[n._v(n._s(n.$t("index.new-products.title")))]),n._v(" "),a("span",{staticClass:"badge text-uppercase"},[n._v("New")])]),n._v(" "),a("p",[n._v("\n                "+n._s(n.$t("index.new-products.description"))+"\n              ")]),n._v(" "),a("Button",{staticClass:"mt-auto",attrs:{orange:"",rounded_angle:"",arrow:"",big:""}},[n._v("\n                "+n._s(n.$t("button.catalog"))+"\n              ")])],1)]),n._v(" "),n._l(n.new_products,(function(n){return a("div",{key:n.id,staticClass:"col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"},[a("product",{attrs:{item:n}})],1)}))],2)]),n._v(" "),a("section"),n._v(" "),a("section",{staticClass:"mt-5 mb-3 list-products",attrs:{id:"popular-products"}},[a("div",{staticClass:"row gx-1 gx-sm-2 gx-md-5 gx-lg-3 gy-2 gy-md-4"},[a("div",{staticClass:"col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"},[a("div",{staticClass:"card card-for-info-products"},[a("h4",[n._v("\n                "+n._s(n.$t("index.popular-products.title"))+"\n              ")]),n._v(" "),a("p",[n._v("\n                "+n._s(n.$t("index.popular-products.description"))+"\n              ")]),n._v(" "),a("Button",{staticClass:"mt-auto",attrs:{orange:"",rounded_angle:"",arrow:"",big:""}},[n._v("\n                "+n._s(n.$t("button.catalog"))+"\n              ")])],1)]),n._v(" "),n._l(n.popular_products,(function(n){return a("div",{key:n.id,staticClass:"col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3"},[a("product",{attrs:{item:n}})],1)}))],2)])],1)],1)],1)}),[],!1,null,"31d70a24",null).exports}}]);
//# sourceMappingURL=a6cb3289669773beb7c4.js.map