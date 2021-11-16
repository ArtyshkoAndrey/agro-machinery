"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[590],{4609:(n,t,a)=>{a.d(t,{Z:()=>i});var e=a(7897),o=a.n(e),s=a(1519),r=a.n(s)()(o());r.push([n.id,".bg-images[data-v-07130025]{background-color:#1a1819;background-image:url(/images/user/vector-header.svg);background-position:11px 80%;background-repeat:no-repeat;background-size:contain;border-radius:16px 0;color:#fff;padding:24px 24px 200px;position:relative;width:100%}.bg-images p[data-v-07130025]{color:hsla(0,0%,100%,.6);margin-top:6px}.bg-images h2[data-v-07130025],.bg-images p[data-v-07130025]{font-size:12px;margin-bottom:0}.bg-images h2[data-v-07130025]{color:#f4b12f;font-weight:400}.bg-images h1[data-v-07130025]{font-size:18px;margin-bottom:0;margin-top:4px}.bg-images img.tractor[data-v-07130025]{bottom:-50px;left:7%;position:absolute;width:86%}@media screen and (min-width:414px){.bg-images img.tractor[data-v-07130025]{bottom:-75px;left:19%;width:78%}}@media screen and (min-width:510px){.bg-images[data-v-07130025]{background-position:63px 105%}.bg-images img.tractor[data-v-07130025]{bottom:-110px;left:20%;width:69%}}@media (min-width:576px){.bg-images[data-v-07130025]{background-position:600%;background-size:91%;padding:35px 35px 200px}.bg-images p[data-v-07130025]{font-size:16px}.bg-images h1[data-v-07130025]{font-size:24px}.bg-images h2[data-v-07130025]{font-size:21px}.bg-images img.tractor[data-v-07130025]{bottom:-115px;left:33%;width:66%}}@media (min-width:768px){.bg-images[data-v-07130025]{border-radius:48px 0;padding:77px 41px 200px}.bg-images p[data-v-07130025]{font-size:18px}.bg-images h1[data-v-07130025]{font-size:52px}.bg-images h2[data-v-07130025]{font-size:24px}.bg-images img.tractor[data-v-07130025]{bottom:-115px;left:35%;width:66%}}@media (min-width:1200px){.bg-images[data-v-07130025]{background-position:300% 0;background-size:93%;border-radius:70px 0;padding:99px 77px 130px}.bg-images p[data-v-07130025]{font-size:18px;margin-top:15px}.bg-images h1[data-v-07130025]{font-size:52px;margin-top:0}.bg-images h2[data-v-07130025]{font-size:24px}.bg-images img.tractor[data-v-07130025]{bottom:-30px;left:35%;width:64%}}@media (min-width:1365px){.bg-images[data-v-07130025]{background-position:103%;background-size:74%}.bg-images img.tractor[data-v-07130025]{bottom:-51px;left:44%;width:53%}}","",{version:3,sources:["webpack://./resources/js/user/components/HeaderSection.vue","webpack://./resources/scss/user/_variables.scss"],names:[],mappings:"AA0BE,4BAEE,wBAAA,CACA,oDAAA,CAGA,4BAAA,CACA,2BAAA,CAFA,uBAAA,CAMA,oBAAA,CACA,UAAA,CAJA,uBAAA,CAEA,iBAAA,CATA,UAhBJ,CA6BI,8BACE,wBAAA,CAEA,cA1BN,CA6BI,6DAJE,cAAA,CAEA,eArBN,CAuBI,+BACE,aAAA,CAEA,eA1BN,CA6BI,+BACE,cAAA,CAEA,eAAA,CADA,cA1BN,CA8BI,wCAEE,YAAA,CAEA,OAAA,CAHA,iBAAA,CAEA,SA3BN,CA+BI,oCACE,wCACE,YAAA,CAEA,QAAA,CADA,SA5BN,CACF,CAgCI,oCA/CF,4BAgDI,6BA7BJ,CA+BI,wCACE,aAAA,CAEA,QAAA,CADA,SA5BN,CACF,CC3BI,yBDEF,4BA2DI,wBAAA,CADA,mBAAA,CAEA,uBA7BJ,CA8BI,8BACE,cA5BN,CA8BI,+BACE,cA5BN,CA8BI,+BACE,cA5BN,CAgCI,wCACE,aAAA,CAEA,QAAA,CADA,SA7BN,CACF,CChDI,yBDEF,4BAiFI,oBAAA,CADA,uBA7BJ,CAgCI,8BACE,cA9BN,CAgCI,+BACE,cA9BN,CAgCI,+BACE,cA9BN,CAgCI,wCACE,aAAA,CAEA,QAAA,CADA,SA7BN,CACF,CCpEI,0BDEF,4BAwGI,0BAAA,CADA,mBAAA,CAFA,oBAAA,CADA,uBA3BJ,CAiCI,8BAEE,cAAA,CADA,eA9BN,CAiCI,+BAEE,cAAA,CADA,YA9BN,CAiCI,+BACE,cA/BN,CAiCI,wCACE,YAAA,CAEA,QAAA,CADA,SA9BN,CACF,CC5FI,0BDEF,4BA8HI,wBAAA,CADA,mBA9BJ,CAiCI,wCACE,YAAA,CAEA,QAAA,CADA,SA9BN,CACF",sourcesContent:['\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import "resources/scss/user/variables";\n  .bg-images {\n    width: 100%;\n    background-color: #1A1819;\n    background-image: url("/images/user/vector-header.svg");\n\n    background-size: contain;\n    background-position: 11px 80%;\n    background-repeat: no-repeat;\n    padding: 24px 24px 200px;\n\n    position: relative;\n    border-radius: 16px 0;\n    color: white;\n\n    p {\n      color: rgba(255, 255, 255, .6);\n      font-size: 12px;\n      margin-top: 6px;\n      margin-bottom: 0;\n    }\n    h2 {\n      color: #F4B12F;\n      font-size: 12px;\n      font-weight: normal;\n      margin-bottom: 0px;\n    }\n    h1 {\n      font-size: 18px;\n      margin-top: 4px;\n      margin-bottom: 0;\n    }\n\n    img.tractor {\n      position: absolute;\n      bottom: -50px;\n      width: 86%;\n      left: 7%;\n    }\n\n    @media screen and (min-width: 414px) {\n      img.tractor {\n        bottom: -75px;\n        width: 78%;\n        left: 19%;\n      }\n    }\n\n    @media screen and (min-width:   510px) {\n      background-position: 63px 105%;\n\n      img.tractor {\n        bottom: -110px;\n        width: 69%;\n        left: 20%;\n      }\n    }\n\n    @include respond-to (sm) {\n      background-size: 91%;\n      background-position: 600%;\n      padding: 35px 35px 200px;\n      p {\n        font-size: 16px;\n      }\n      h1 {\n        font-size: 24px;\n      }\n      h2 {\n        font-size: 21px;\n      }\n\n\n      img.tractor {\n        bottom: -115px;\n        width: 66%;\n        left: 33%;\n      }\n    }\n\n    @include respond-to(md) {\n      padding: 77px 41px 200px;\n      border-radius: 48px 0;\n\n      p {\n        font-size: 18px;\n      }\n      h1 {\n        font-size: 52px;\n      }\n      h2 {\n        font-size: 24px;\n      }\n      img.tractor {\n        bottom: -115px;\n        width: 66%;\n        left: 35%;\n      }\n    }\n\n    @include respond-to(lg) {\n      padding: 99px 77px 130px;\n      border-radius: 70px 0;\n\n      background-size: 93%;\n      background-position: 300% 0;\n\n      p {\n        margin-top: 15px;\n        font-size: 18px;\n      }\n      h1 {\n        margin-top: 0px;\n        font-size: 52px;\n      }\n      h2 {\n        font-size: 24px;\n      }\n      img.tractor {\n        bottom: -30px;\n        width: 64%;\n        left: 35%;\n      }\n    }\n\n    @include respond-to(xl) {\n      background-size: 74%;\n      background-position: 103%;\n\n      img.tractor {\n        bottom: -51px;\n        width: 53%;\n        left: 44%;\n      }\n    }\n  }\n','@import \'colors\';\n\n$container-max-widths: (\n        sm: 100%,\n        md: 740px,\n        lg: 1080px,\n        xl: 1280px,\n);\n$grid-breakpoints: (\n        xs: 0,\n        sm: 576px,\n        md: 768px,\n        lg: 1200px,\n        xl: 1365px,\n);\n\n/// Mixin to manage responsive breakpoints\n/// @author Fulliton\n/// @param {String} $breakpoint - Breakpoint name\n/// @require $breakpoints\n@mixin respond-to($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (min-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}\n\n@mixin respond-up($breakpoint) {\n  // If the key exists in the map\n  @if map-has-key($grid-breakpoints, $breakpoint) {\n    // Prints a media query based on the value\n    @media (max-width: map-get($grid-breakpoints, $breakpoint)) {\n      @content;\n    }\n  }\n\n    // If the key doesn\'t exist in the map\n  @else {\n    @warn "Unfortunately, no value could be retrieved from `#{$breakpoint}`. "\n        + "Available breakpoints are: #{map-keys($grid-breakpoints)}.";\n  }\n}'],sourceRoot:""}]);const i=r},3441:(n,t,a)=>{a.d(t,{Z:()=>i});var e=a(7897),o=a.n(e),s=a(1519),r=a.n(s)()(o());r.push([n.id,".loader[data-v-60233b9e]{background:#eee;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1000}.loader svg .st0[data-v-60233b9e]{fill:#eee}.loader svg#truck[data-v-60233b9e]{-webkit-animation:truck-data-v-60233b9e .5s infinite;animation:truck-data-v-60233b9e .5s infinite;left:50%;top:50%}.loader svg#road[data-v-60233b9e],.loader svg#truck[data-v-60233b9e]{position:absolute;transform:translate(-50%,-50%)}.loader svg#road[data-v-60233b9e]{-webkit-animation:road-data-v-60233b9e 1s infinite;animation:road-data-v-60233b9e 1s infinite;left:54%;top:calc(51% + 80px)}.loader p[data-v-60233b9e]{bottom:20%;color:#777;font-family:sans-serif;font-size:11px;left:50%;position:absolute;text-transform:uppercase;transform:translateX(-50%)}@-webkit-keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@-webkit-keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}@keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}","",{version:3,sources:["webpack://./resources/js/user/components/Spinner.vue"],names:[],mappings:"AAsBA,yBAOE,eAAA,CAHA,YAAA,CACA,MAAA,CAHA,cAAA,CAIA,KAAA,CAHA,WAAA,CAFA,YAfF,CAwBA,kCACE,SArBF,CAwBA,mCAKE,oDAAA,CAAA,4CAAA,CAFA,QAAA,CADA,OAlBF,CAwBA,qEAPE,iBAAA,CAGA,8BAZF,CAgBA,kCAKE,kDAAA,CAAA,0CAAA,CAFA,QAAA,CADA,oBAlBF,CAwBA,2BAKE,UAAA,CAGA,UAAA,CAPA,sBAAA,CACA,cAAA,CAIA,QAAA,CAFA,iBAAA,CADA,wBAAA,CAIA,0BApBF,CAwBA,yCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAYA,iCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAwBA,wCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF,CAUA,gCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n  z-index: 1000;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  background: #eee;\n}\n\n.loader svg .st0 {\n  fill: #eee;\n}\n\n.loader svg#truck {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: 0.5s truck infinite;\n}\n\n.loader svg#road {\n  position: absolute;\n  top: calc(51% + 160px / 2);\n  left: 54%;\n  transform: translate(-50%, -50%);\n  animation: 1s road infinite;\n}\n\n.loader p {\n  font-family: sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: absolute;\n  bottom: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #777;\n}\n\n@keyframes truck {\n  0% {\n    transform: scaleY(1) translate(-50%, -50%);\n  }\n  50% {\n    transform: scaleY(0.95) translate(-50%, -50%);\n  }\n  100% {\n    transform: scaleY(1) translate(-50%, -50%);\n  }\n}\n\n@keyframes road {\n  0% {\n    transform: scaleX(1) translate(-50%, -50%);\n  }\n  33% {\n    transform: scaleX(1) translate(-55%, -50%);\n  }\n  33% {\n    transform: scaleX(1) translate(-55%, -50%);\n  }\n  100% {\n    transform: scaleX(1) translate(-50%, -50%);\n  }\n}\n"],sourceRoot:""}]);const i=r},6627:(n,t,a)=>{a.d(t,{Z:()=>r});const e={name:"Button",computed:{color:function(){return""===this.$attrs.orange?"background-color: #F4B12F":""}},created:function(){console.log(this.$attrs)},methods:{redirect:function(){this.$router.push({name:"test"})}}};var o=a(1900);const s={name:"CategoryInfo",components:{Button:(0,o.Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("button",{staticClass:"btn",class:""===n.$attrs.rounded_angle?"btn-rounded-angle":"",style:n.color,on:{click:n.redirect}},[n._t("default"),n._v(" "),""===n.$attrs.arrow?a("iconly",{attrs:{name:"arrow-right",type:"light"}}):n._e()],2)}),[],!1,null,"b2218c88",null).exports}};const r=(0,o.Z)(s,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"category-item row align-items-center",class:""===n.$attrs.reverse?"category-item-reverse":null},[a("div",{staticClass:"col-8 col-md-6 col-lg-4 offset-lg-1 category-item_image"},[a("div",{staticClass:"bg-gray"},[n._m(0),n._v(" "),a("div",{staticClass:"col-12"},[""!==n.$attrs.reverse?a("img",{attrs:{alt:"track",src:"public/images/user/track_1.png"}}):a("img",{attrs:{alt:"track",src:"public/images/user/track_2.png"}})])])]),n._v(" "),a("div",{staticClass:"col-10 offset-2 col-md-6 offset-md-0 col-lg-4 offset-lg-1 category-item_info"},[a("p",{staticClass:"category-item_info_title"},[n._v("\n      Посев и посадка\n    ")]),n._v(" "),a("p",[n._v("\n      Плуги и другие виды сельскохозяйственной техники изготавливаются на современных заводах с преимущественным\n      использованием роботизированной техники!\n    ")]),n._v(" "),a("Button",{attrs:{orange:"",rounded_angle:"",arrow:""}},[n._v("\n      Каталог\n    ")])],1)])}),[function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"col-12 category-item_image_text"},[a("span",{staticClass:"category-item_counter"},[n._v("\n          28\n        ")]),n._v(" "),a("span",{staticClass:"category-item_title"},[n._v("\n          Позиций\n        ")])])}],!1,null,"e58ced34",null).exports},4717:(n,t,a)=>{a.d(t,{Z:()=>A});const e={name:"HeaderSection"};var o=a(3379),s=a.n(o),r=a(4609),i={insert:"head",singleton:!1};s()(r.Z,i);r.Z.locals;const A=(0,a(1900).Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"row mx-0"},[a("div",{staticClass:"bg-images "},[a("div",{staticClass:"col-12"},[a("h2",[n._v(n._s(n.$t("HeaderSection.great")))]),n._v(" "),a("h1",[n._v(n._s(n.$t("HeaderSection.title")))])]),n._v(" "),a("div",{staticClass:"col-12 col-sm-10 col-md-9 col-lg-5"},[a("p",[n._v("\n        "+n._s(n.$t("HeaderSection.content"))+"\n      ")])]),n._v(" "),a("img",{staticClass:"tractor",attrs:{src:"public/images/user/traktor-mobile.png",alt:"traktor"}})])])}),[],!1,null,"07130025",null).exports},1926:(n,t,a)=>{a.d(t,{Z:()=>A});const e={name:"Spinner"};var o=a(3379),s=a.n(o),r=a(3441),i={insert:"head",singleton:!1};s()(r.Z,i);r.Z.locals;const A=(0,a(1900).Z)(e,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"loader"},[a("svg",{attrs:{id:"truck",width:"200",viewBox:"0 0 2206 1727",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M1233.33 0.70166L882.45 351.577L952.625 422.754L1092.98 283.407L1203.25 393.682V623.254C1203.25 734.532 1114.03 823.754 1002.75 823.754H948.615C1047.69 933.853 1102.67 1076.64 1103 1224.75C1102.8 1258.36 1099.78 1291.9 1093.98 1325H1406.76C1419.08 1214.76 1471.59 1112.92 1554.26 1038.95C1636.92 964.979 1743.95 924.057 1854.88 924.004C1944.11 924.053 2031.33 950.568 2105.5 1000.19V523.004C2105.5 411.727 2016.28 322.504 1905 322.504H1274.43L1164.15 212.229L1303.5 71.8792L1233.33 0.70166ZM301 422.754C245.863 422.754 200.75 467.867 200.75 523.004C200.75 578.142 245.863 623.254 301 623.254H802.25C802.25 570.078 781.126 519.08 743.525 481.479C705.924 443.878 654.926 422.754 601.75 422.754H301ZM501.5 723.504C448.371 723.517 395.583 731.977 345.11 748.567L381.2 841.799L334.083 859.844L301 766.612C194.443 812.893 107.27 894.75 54.3852 998.189L145.613 1039.29L124.56 1084.4L34.3352 1044.3C11.9581 1101.84 0.402491 1163.02 0.250244 1224.75C0.263526 1277.88 8.72328 1330.67 25.3127 1381.14L118.545 1345.05L136.59 1392.17L43.3577 1425.25C89.639 1531.81 171.496 1618.98 274.935 1671.87L315.035 1580.64L361.15 1601.69L321.05 1691.92C378.588 1714.3 439.764 1725.85 501.5 1726C554.629 1725.99 607.418 1717.53 657.89 1700.94L621.8 1607.71L668.918 1589.66L702 1682.9C808.558 1636.62 895.73 1554.76 948.615 1451.32L857.388 1411.22L878.44 1365.1L968.665 1405.2C991.042 1347.67 1002.6 1286.49 1002.75 1224.75C1002.74 1171.63 994.277 1118.84 977.688 1068.36L884.455 1104.45L866.41 1057.34L959.643 1024.25C913.361 917.697 831.504 830.524 728.065 777.639L687.965 868.867L641.85 847.814L681.95 757.589C624.412 735.212 563.236 723.656 501.5 723.504V723.504ZM501.5 924.004C581.264 924.004 657.761 955.69 714.163 1012.09C770.564 1068.49 802.25 1144.99 802.25 1224.75C802.25 1304.52 770.564 1381.02 714.163 1437.42C657.761 1493.82 581.264 1525.5 501.5 1525.5C421.736 1525.5 345.239 1493.82 288.838 1437.42C232.436 1381.02 200.75 1304.52 200.75 1224.75C200.75 1144.99 232.436 1068.49 288.838 1012.09C345.239 955.69 421.736 924.004 501.5 924.004V924.004ZM1854.88 1024.25C1761.82 1024.25 1672.57 1061.22 1606.77 1127.02C1540.97 1192.82 1504 1282.07 1504 1375.13C1504 1468.19 1540.97 1557.43 1606.77 1623.24C1672.57 1689.04 1761.82 1726 1854.88 1726C1947.93 1726 2037.18 1689.04 2102.98 1623.24C2168.78 1557.43 2205.75 1468.19 2205.75 1375.13C2205.75 1282.07 2168.78 1192.82 2102.98 1127.02C2037.18 1061.22 1947.93 1024.25 1854.88 1024.25V1024.25ZM1854.88 1224.75C1894.76 1224.75 1933.01 1240.6 1961.21 1268.8C1989.41 1297 2005.25 1335.25 2005.25 1375.13C2005.25 1415.01 1989.41 1453.26 1961.21 1481.46C1933.01 1509.66 1894.76 1525.5 1854.88 1525.5C1814.99 1525.5 1776.74 1509.66 1748.54 1481.46C1720.34 1453.26 1704.5 1415.01 1704.5 1375.13C1704.5 1335.25 1720.34 1297 1748.54 1268.8C1776.74 1240.6 1814.99 1224.75 1854.88 1224.75Z",fill:"black"}})]),n._v(" "),a("svg",{attrs:{id:"road",height:"4",width:"500"}},[a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"0",x2:"100",y1:"0",y2:"0"}}),n._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"110",x2:"210",y1:"0",y2:"0"}}),n._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"220",x2:"320",y1:"0",y2:"0"}}),n._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"330",x2:"430",y1:"0",y2:"0"}})]),n._v(" "),a("p",[n._v(n._s(n.$t("loading")))])])}),[],!1,null,"60233b9e",null).exports},2590:(n,t,a)=>{a.r(t),a.d(t,{default:()=>i});var e=a(4717),o=a(6627),s=a(1926);const r={name:"Index",components:{HeaderSection:e.Z,CategoryInfo:o.Z,Spinner:s.Z},metaInfo:function(){return{title:"Главная страница"}},data:function(){return{loading:!0}},created:function(){var n=this;setTimeout((function(){n.loading=!1}),2e3)}};const i=(0,a(1900).Z)(r,(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",[a("transition",{attrs:{appear:"",mode:"out-in",name:"fade"}},[n.loading?a("Spinner",{key:"1"}):a("div",{key:"2"},[a("HeaderSection"),n._v(" "),a("section",{attrs:{id:"items-description"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("h3",[n._v("Продукция")])]),n._v(" "),a("div",{staticClass:"col-11 col-sm-6 col-md-5 col-lg-5"},[a("p",{staticClass:"fw-bold color-dark"},[n._v("\n              Лучшие компании Турции по производству сельскохозяйственного оборудования с гарантией\n            ")])]),n._v(" "),a("div",{staticClass:"col-11 col-sm-6 col-md-6 offset-md-1 col-lg-4 offset-lg-3"},[a("p",{staticClass:"color-gray"},[n._v("\n              Плуги и другие виды сельскохозяйственной техники изготавливаются на современных заводах\n              с преимущественным использованием роботизированной техники!\n            ")])])])]),n._v(" "),a("section",{staticClass:"mt-5"},[a("category-info"),n._v(" "),a("category-info",{attrs:{reverse:""}})],1)],1)],1)],1)}),[],!1,null,"10f047d0",null).exports}}]);
//# sourceMappingURL=55fb777e4ae73579bc58.js.map