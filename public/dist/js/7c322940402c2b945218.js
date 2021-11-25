"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[218],{3441:(t,n,a)=>{a.d(n,{Z:()=>o});var e=a(7897),r=a.n(e),s=a(1519),A=a.n(s)()(r());A.push([t.id,".loader[data-v-60233b9e]{background:#eee;height:100vh;left:0;position:fixed;top:0;width:100vw;z-index:1000}.loader svg .st0[data-v-60233b9e]{fill:#eee}.loader svg#truck[data-v-60233b9e]{-webkit-animation:truck-data-v-60233b9e .5s infinite;animation:truck-data-v-60233b9e .5s infinite;left:50%;top:50%}.loader svg#road[data-v-60233b9e],.loader svg#truck[data-v-60233b9e]{position:absolute;transform:translate(-50%,-50%)}.loader svg#road[data-v-60233b9e]{-webkit-animation:road-data-v-60233b9e 1s infinite;animation:road-data-v-60233b9e 1s infinite;left:54%;top:calc(51% + 80px)}.loader p[data-v-60233b9e]{bottom:20%;color:#777;font-family:sans-serif;font-size:11px;left:50%;position:absolute;text-transform:uppercase;transform:translateX(-50%)}@-webkit-keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@keyframes truck-data-v-60233b9e{0%{transform:scaleY(1) translate(-50%,-50%)}50%{transform:scaleY(.95) translate(-50%,-50%)}to{transform:scaleY(1) translate(-50%,-50%)}}@-webkit-keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}@keyframes road-data-v-60233b9e{0%{transform:scaleX(1) translate(-50%,-50%)}33%{transform:scaleX(1) translate(-55%,-50%)}to{transform:scaleX(1) translate(-50%,-50%)}}","",{version:3,sources:["webpack://./resources/js/user/components/Spinner.vue"],names:[],mappings:"AAsBA,yBAOE,eAAA,CAHA,YAAA,CACA,MAAA,CAHA,cAAA,CAIA,KAAA,CAHA,WAAA,CAFA,YAfF,CAwBA,kCACE,SArBF,CAwBA,mCAKE,oDAAA,CAAA,4CAAA,CAFA,QAAA,CADA,OAlBF,CAwBA,qEAPE,iBAAA,CAGA,8BAZF,CAgBA,kCAKE,kDAAA,CAAA,0CAAA,CAFA,QAAA,CADA,oBAlBF,CAwBA,2BAKE,UAAA,CAGA,UAAA,CAPA,sBAAA,CACA,cAAA,CAIA,QAAA,CAFA,iBAAA,CADA,wBAAA,CAIA,0BApBF,CAwBA,yCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAYA,iCACE,GACE,wCArBF,CAuBA,IACE,0CArBF,CAuBA,GACE,wCArBF,CACF,CAwBA,wCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF,CAUA,gCACE,GACE,wCAtBF,CA2BA,IACE,wCAtBF,CAwBA,GACE,wCAtBF,CACF",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n  z-index: 1000;\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  background: #eee;\n}\n\n.loader svg .st0 {\n  fill: #eee;\n}\n\n.loader svg#truck {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  animation: 0.5s truck infinite;\n}\n\n.loader svg#road {\n  position: absolute;\n  top: calc(51% + 160px / 2);\n  left: 54%;\n  transform: translate(-50%, -50%);\n  animation: 1s road infinite;\n}\n\n.loader p {\n  font-family: sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  position: absolute;\n  bottom: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  color: #777;\n}\n\n@keyframes truck {\n  0% {\n    transform: scaleY(1) translate(-50%, -50%);\n  }\n  50% {\n    transform: scaleY(0.95) translate(-50%, -50%);\n  }\n  100% {\n    transform: scaleY(1) translate(-50%, -50%);\n  }\n}\n\n@keyframes road {\n  0% {\n    transform: scaleX(1) translate(-50%, -50%);\n  }\n  33% {\n    transform: scaleX(1) translate(-55%, -50%);\n  }\n  33% {\n    transform: scaleX(1) translate(-55%, -50%);\n  }\n  100% {\n    transform: scaleX(1) translate(-50%, -50%);\n  }\n}\n"],sourceRoot:""}]);const o=A},1926:(t,n,a)=>{a.d(n,{Z:()=>i});const e={name:"Spinner"};var r=a(3379),s=a.n(r),A=a(3441),o={insert:"head",singleton:!1};s()(A.Z,o);A.Z.locals;const i=(0,a(1900).Z)(e,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"loader"},[a("svg",{attrs:{id:"truck",width:"200",viewBox:"0 0 2206 1727",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M1233.33 0.70166L882.45 351.577L952.625 422.754L1092.98 283.407L1203.25 393.682V623.254C1203.25 734.532 1114.03 823.754 1002.75 823.754H948.615C1047.69 933.853 1102.67 1076.64 1103 1224.75C1102.8 1258.36 1099.78 1291.9 1093.98 1325H1406.76C1419.08 1214.76 1471.59 1112.92 1554.26 1038.95C1636.92 964.979 1743.95 924.057 1854.88 924.004C1944.11 924.053 2031.33 950.568 2105.5 1000.19V523.004C2105.5 411.727 2016.28 322.504 1905 322.504H1274.43L1164.15 212.229L1303.5 71.8792L1233.33 0.70166ZM301 422.754C245.863 422.754 200.75 467.867 200.75 523.004C200.75 578.142 245.863 623.254 301 623.254H802.25C802.25 570.078 781.126 519.08 743.525 481.479C705.924 443.878 654.926 422.754 601.75 422.754H301ZM501.5 723.504C448.371 723.517 395.583 731.977 345.11 748.567L381.2 841.799L334.083 859.844L301 766.612C194.443 812.893 107.27 894.75 54.3852 998.189L145.613 1039.29L124.56 1084.4L34.3352 1044.3C11.9581 1101.84 0.402491 1163.02 0.250244 1224.75C0.263526 1277.88 8.72328 1330.67 25.3127 1381.14L118.545 1345.05L136.59 1392.17L43.3577 1425.25C89.639 1531.81 171.496 1618.98 274.935 1671.87L315.035 1580.64L361.15 1601.69L321.05 1691.92C378.588 1714.3 439.764 1725.85 501.5 1726C554.629 1725.99 607.418 1717.53 657.89 1700.94L621.8 1607.71L668.918 1589.66L702 1682.9C808.558 1636.62 895.73 1554.76 948.615 1451.32L857.388 1411.22L878.44 1365.1L968.665 1405.2C991.042 1347.67 1002.6 1286.49 1002.75 1224.75C1002.74 1171.63 994.277 1118.84 977.688 1068.36L884.455 1104.45L866.41 1057.34L959.643 1024.25C913.361 917.697 831.504 830.524 728.065 777.639L687.965 868.867L641.85 847.814L681.95 757.589C624.412 735.212 563.236 723.656 501.5 723.504V723.504ZM501.5 924.004C581.264 924.004 657.761 955.69 714.163 1012.09C770.564 1068.49 802.25 1144.99 802.25 1224.75C802.25 1304.52 770.564 1381.02 714.163 1437.42C657.761 1493.82 581.264 1525.5 501.5 1525.5C421.736 1525.5 345.239 1493.82 288.838 1437.42C232.436 1381.02 200.75 1304.52 200.75 1224.75C200.75 1144.99 232.436 1068.49 288.838 1012.09C345.239 955.69 421.736 924.004 501.5 924.004V924.004ZM1854.88 1024.25C1761.82 1024.25 1672.57 1061.22 1606.77 1127.02C1540.97 1192.82 1504 1282.07 1504 1375.13C1504 1468.19 1540.97 1557.43 1606.77 1623.24C1672.57 1689.04 1761.82 1726 1854.88 1726C1947.93 1726 2037.18 1689.04 2102.98 1623.24C2168.78 1557.43 2205.75 1468.19 2205.75 1375.13C2205.75 1282.07 2168.78 1192.82 2102.98 1127.02C2037.18 1061.22 1947.93 1024.25 1854.88 1024.25V1024.25ZM1854.88 1224.75C1894.76 1224.75 1933.01 1240.6 1961.21 1268.8C1989.41 1297 2005.25 1335.25 2005.25 1375.13C2005.25 1415.01 1989.41 1453.26 1961.21 1481.46C1933.01 1509.66 1894.76 1525.5 1854.88 1525.5C1814.99 1525.5 1776.74 1509.66 1748.54 1481.46C1720.34 1453.26 1704.5 1415.01 1704.5 1375.13C1704.5 1335.25 1720.34 1297 1748.54 1268.8C1776.74 1240.6 1814.99 1224.75 1854.88 1224.75Z",fill:"black"}})]),t._v(" "),a("svg",{attrs:{id:"road",height:"4",width:"500"}},[a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"0",x2:"100",y1:"0",y2:"0"}}),t._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"110",x2:"210",y1:"0",y2:"0"}}),t._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"220",x2:"320",y1:"0",y2:"0"}}),t._v(" "),a("line",{staticStyle:{stroke:"rgb(0,0,0)","stroke-width":"3"},attrs:{x1:"330",x2:"430",y1:"0",y2:"0"}})]),t._v(" "),a("p",[t._v(t._s(t.$t("loading")))])])}),[],!1,null,"60233b9e",null).exports},3218:(t,n,a)=>{a.r(n),a.d(n,{default:()=>l});var e=a(7757),r=a.n(e),s=a(1926),A=a(9669),o=a.n(A);function i(t,n,a,e,r,s,A){try{var o=t[s](A),i=o.value}catch(t){return void a(t)}o.done?n(i):Promise.resolve(i).then(e,r)}const C={name:"Catalog",components:{Spinner:s.Z},data:function(){return{loading:!0}},mounted:function(){var t,n=this;return(t=r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.$root.$loading.set(30),t.next=3,n.getCategories();case 3:n.loading=!1;case 4:case"end":return t.stop()}}),t)})),function(){var n=this,a=arguments;return new Promise((function(e,r){var s=t.apply(n,a);function A(t){i(s,e,r,A,o,"next",t)}function o(t){i(s,e,r,A,o,"throw",t)}A(void 0)}))})()},methods:{getCategories:function(){o().get("/api/users/categories?child")}}};const l=(0,a(1900).Z)(C,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("transition",{attrs:{appear:"",mode:"out-in",name:"fade"}},[t.loading?a("Spinner",{key:"1"}):a("section",{key:"2",attrs:{id:"catalog"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-10 col-lg-6"},[a("h1",[t._v("Длинное название товара")]),t._v(" "),a("nav",{attrs:{"aria-label":"breadcrumb mt-3"}},[a("ol",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"index"}},[t._v("Главная")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:"catalog"}},[t._v("Каталог")])],1),t._v(" "),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v("Категория длинная")])])])])])])],1)],1)}),[],!1,null,"3d4890f6",null).exports}}]);
//# sourceMappingURL=7c322940402c2b945218.js.map