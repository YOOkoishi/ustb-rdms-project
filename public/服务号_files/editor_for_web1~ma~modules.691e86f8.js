(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/modules~advanced/menusetting/menusetting~comment/comment_list/comment_list~editor/editor_for_web1~ma~modules"],{"./src/pages/modules/media_dialog/channel_product_dialog/channel_product_dialog.js":function(E,T,S){function I(e){"@babel/helpers - typeof";return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(e)}function H(e){return C(e)||M(e)||k(e)||Y()}function Y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(e,t){if(e){if("string"==typeof e)return z(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}function M(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function C(e){if(Array.isArray(e))return z(e)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function F(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */F=function i(){return t};var e,t={},n=Object.prototype,o=n.hasOwnProperty,l="function"==typeof Symbol?Symbol:{},d=l.iterator||"@@iterator",h=l.asyncIterator||"@@asyncIterator",p=l.toStringTag||"@@toStringTag";function s(i,r,a,c){return Object.defineProperty(i,r,{value:a,enumerable:!c,configurable:!c,writable:!c})}try{s({},"")}catch(i){s=function r(a,c,u){return a[c]=u}}function m(i,r,a,c){var u=r&&r.prototype instanceof P?r:P,f=Object.create(u.prototype);return s(f,"_invoke",function(v,b,g){var w=1;return function(x,A){if(3===w)throw Error("Generator is already running");if(4===w){if("throw"===x)throw A;return{value:e,done:true}}for(g.method=x,g.arg=A;;){var it=g.delegate;if(it){var $=ot(it,g);if($){if($===_)continue;return $}}if("next"===g.method)g.sent=g._sent=g.arg;else if("throw"===g.method){if(1===w)throw w=4,g.arg;g.dispatchException(g.arg)}else"return"===g.method&&g.abrupt("return",g.arg);w=3;var U=y(v,b,g);if("normal"===U.type){if(w=g.done?4:2,U.arg===_)continue;return{value:U.arg,done:g.done}}"throw"===U.type&&(w=4,g.method="throw",g.arg=U.arg)}}}(i,a,new Q(c||[])),true),f}function y(i,r,a){try{return{type:"normal",arg:i.call(r,a)}}catch(c){return{type:"throw",arg:c}}}t.wrap=m;var _={};function P(){}function O(){}function L(){}var j={};s(j,d,function(){return this});var B=Object.getPrototypeOf,N=B&&B(B(V([])));N&&N!==n&&o.call(N,d)&&(j=N);var G=L.prototype=P.prototype=Object.create(j);function rt(i){["next","throw","return"].forEach(function(r){s(i,r,function(a){return this._invoke(r,a)})})}function Z(i,r){function a(u,f,v,b){var g=y(i[u],i,f);if("throw"!==g.type){var w=g.arg,x=w.value;return x&&"object"==I(x)&&o.call(x,"__await")?r.resolve(x.__await).then(function(A){a("next",A,v,b)},function(A){a("throw",A,v,b)}):r.resolve(x).then(function(A){w.value=A,v(w)},function(A){return a("throw",A,v,b)})}b(g.arg)}var c;s(this,"_invoke",function(u,f){function v(){return new r(function(b,g){a(u,f,b,g)})}return c=c?c.then(v,v):v()},true)}function ot(i,r){var a=r.method,c=i.i[a];if(c===e)return r.delegate=null,"throw"===a&&i.i.return&&(r.method="return",r.arg=e,ot(i,r),"throw"===r.method)||"return"!==a&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+a+"' method")),_;var u=y(c,i.i,r.arg);if("throw"===u.type)return r.method="throw",r.arg=u.arg,r.delegate=null,_;var f=u.arg;return f?f.done?(r[i.r]=f.value,r.next=i.n,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,_):f:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function vt(i){this.tryEntries.push(i)}function J(i){var r=i[4]||{};r.type="normal",r.arg=e,i[4]=r}function Q(i){this.tryEntries=[[-1]],i.forEach(vt,this),this.reset(true)}function V(i){if(null!=i){var r=i[d];if(r)return r.call(i);if("function"==typeof i.next)return i;if(!isNaN(i.length)){var a=-1,c=function u(){for(;++a<i.length;)if(o.call(i,a))return u.value=i[a],u.done=false,u;return u.value=e,u.done=true,u};return c.next=c}}throw new TypeError(I(i)+" is not iterable")}return O.prototype=L,s(G,"constructor",L),s(L,"constructor",O),O.displayName=s(L,p,"GeneratorFunction"),t.isGeneratorFunction=function(i){var r="function"==typeof i&&i.constructor;return!!r&&(r===O||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,L):(i.__proto__=L,s(i,p,"GeneratorFunction")),i.prototype=Object.create(G),i},t.awrap=function(i){return{__await:i}},rt(Z.prototype),s(Z.prototype,h,function(){return this}),t.AsyncIterator=Z,t.async=function(i,r,a,c,u){void 0===u&&(u=Promise);var f=new Z(m(i,r,a,c),u);return t.isGeneratorFunction(r)?f:f.next().then(function(v){return v.done?v.value:f.next()})},rt(G),s(G,p,"Generator"),s(G,d,function(){return this}),s(G,"toString",function(){return"[object Generator]"}),t.keys=function(i){var r=Object(i),a=[];for(var c in r)a.unshift(c);return function u(){for(;a.length;)if((c=a.pop())in r)return u.value=c,u.done=false,u;return u.done=true,u}},t.values=V,Q.prototype={constructor:Q,reset:function i(r){if(this.prev=this.next=0,this.sent=this._sent=e,this.done=false,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(J),!r)for(var a in this)"t"===a.charAt(0)&&o.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function i(){this.done=true;var r=this.tryEntries[0][4];if("throw"===r.type)throw r.arg;return this.rval},dispatchException:function i(r){if(this.done)throw r;var a=this;function c(x){v.type="throw",v.arg=r,a.next=x}for(var u=a.tryEntries.length-1;u>=0;--u){var f=this.tryEntries[u],v=f[4],b=this.prev,g=f[1],w=f[2];if(-1===f[0])return c("end"),false;if(!g&&!w)throw Error("try statement without catch or finally");if(null!=f[0]&&f[0]<=b){if(b<g)return this.method="next",this.arg=e,c(g),true;if(b<w)return c(w),false}}},abrupt:function i(r,a){for(var c=this.tryEntries.length-1;c>=0;--c){var u=this.tryEntries[c];if(u[0]>-1&&u[0]<=this.prev&&this.prev<u[2]){var f=u;break}}f&&("break"===r||"continue"===r)&&f[0]<=a&&a<=f[2]&&(f=null);var v=f?f[4]:{};return v.type=r,v.arg=a,f?(this.method="next",this.next=f[2],_):this.complete(v)},complete:function i(r,a){if("throw"===r.type)throw r.arg;return"break"===r.type||"continue"===r.type?this.next=r.arg:"return"===r.type?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):"normal"===r.type&&a&&(this.next=a),_},finish:function i(r){for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a];if(c[2]===r)return this.complete(c[4],c[3]),J(c),_}},catch:function i(r){for(var a=this.tryEntries.length-1;a>=0;--a){var c=this.tryEntries[a];if(c[0]===r){var u=c[4];if("throw"===u.type){var f=u.arg;J(c)}return f}}throw Error("illegal catch attempt")},delegateYield:function i(r,a,c){return this.delegate={i:V(r),r:a,n:c},"next"===this.method&&(this.arg=e),_}},t}function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function tt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),true).forEach(function(o){at(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}function at(e,t,n){return(t=st(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function st(e){var t=lt(e,"string");return"symbol"==I(t)?t:t+""}function lt(e,t){if("object"!=I(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=I(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function et(e,t,n,o,l,d,h){try{var p=e[d](h),s=p.value}catch(m){return void n(m)}p.done?t(s):Promise.resolve(s).then(o,l)}function q(e){return function(){var t=this,n=arguments;return new Promise(function(o,l){var d=e.apply(t,n);function h(s){et(d,o,l,h,p,"next",s)}function p(s){et(d,o,l,h,p,"throw",s)}h(void 0)})}}var ct=S("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");S("./src/pages/modules/utils/str_util.js");S("./src/pages/modules/media_dialog/channel_product_dialog/channel_product_name/channel_product_name.js");var R=S("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");S("./src/pages/modules/media_dialog/channel_product_dialog/channel_product_dialog.less");var dt=S("./src/pages/modules/media_dialog/channel_product_dialog/channel_product_dialog.tpl");var ut=S("./src/pages/modules/utils/report.js"),ht=ut.idkey;var pt="122443";var W=null;var ft=function e(t,n){var o=null;return function(){if(o){clearTimeout(o);o=null}o=setTimeout(function(){t()},n)}};var gt="/cgi-bin/windowproduct?action=get_windowproduct";var D={LOADING:"LOADING",FINISH:"FINISH",NOMORE:"NOMORE",EMPTY:"EMPTY"};function K(e,t){var n={base_req:{action:e},ext_info:JSON.stringify(t)};return{url:gt,data:{data:JSON.stringify(n)}}}function nt(e){var t=e&&e.base_resp&&e.base_resp.ret;var n={};if(t===0&&e.ext_info){try{n=JSON.parse(e.ext_info)}catch(o){console.error(o)}}return{ret:t,extInfo:n}}function mt(e){return e.map(function(t){var n;if(!t)return{};var o={};var l=t.selling_price*.01;if((n=t.bside_info)!==null&&n!==void 0&&n.commission_info){var d=t.bside_info.commission_info,h=d===void 0?{}:d;var p=h.commission_rate,s=p===void 0?0:p;s*=1e-4;o={rate:s.toFixed(1),reward:(l*s*.01).toFixed(2)}}return{key:t.product_id,cps_id:t.cps_id,infos:{product_id:t.out_product_id,title:t.title,img_url:t.img_urls[0],short_title:t===null||t===void 0?void 0:t.short_title},platform_name:t.platform_name,selling_price:l.toFixed(2),stock:t.stock,sales:t.sales,commission_info:o,raw_product_key:t.raw_product_key,stock_wording:t===null||t===void 0?void 0:t.stock_wording,no_sale:t===null||t===void 0?void 0:t.no_sale,no_sale_wording:t===null||t===void 0?void 0:t.no_sale_wording}})}ct.component("mp-channel-product-dialog",{template:dt,props:{title:{type:String,default:"\u5C0F\u5E97\u5546\u54C1"},value:{type:Boolean,default:true},showType:{type:String,default:"insert"},appid:{type:String,default:""},selectedProductKey:{type:String,default:""},selectType:{type:String,default:"mini"},choiceLimit:{type:Number,default:10},isWxStore:{type:Boolean,default:true},isAProduct:{type:Boolean,default:false}},data:function e(){var t=550;if(window.innerHeight<=940){t=440}return{dialogShow:false,tableScrollY:t,searchStr:"",hightlightStr:"",channelShopList:[],productList:[],productDisableList:[],continueFlag:true,lastBuffer:"",pageSize:10,currentShopId:"all",shopInfoList:[{appid:"all",shop_name:"\u5168\u90E8\u6765\u6E90"}],modifyType:"large",selectedChannelShopList:[],loadingShop:false,loadingList:true,loadMoreFeed:false,firstLoadingShopFeed:false,maxContentHeight:window.innerHeight-300,selectedProduct:[],selectedListRowKeys:[],loadingStatus:D.FINISH,onlyShowSelected:false,storedProductList:[],isSearching:false,qrcodeUrl:"",loadingConfirm:false,loadImg:false,chooseAll:false}},created:function e(){var t=this;this.onInputDebounced=ft(function(){t.searchProduct()},1200)},computed:{manageUrl:function e(){if(this.isWxStore){return"https://store.weixin.qq.com"}else{return"https://channels.weixin.qq.com/platform/commodity/window"}},tabProductList:function e(){if(this.onlyShowSelected){return this.selectedProduct}else{return this.productList}},currentShop:function e(){var t=this;return this.shopInfoList.find(function(n){return n.appid===t.currentShopId})},salesOrStock:function e(){if(this.chooseAll)return"stock_wording";return this.isAProduct?"sales":"stock"},tableColumns:function e(){var t=[{title:"\u5546\u54C1\u4FE1\u606F",dataIndex:"infos",width:"376"},{title:"\u6765\u6E90",dataIndex:"platform_name",width:"160"},{title:"\u4EF7\u683C",dataIndex:"selling_price",align:"right"},{title:this.isAProduct?"\u6708\u9500\u91CF":"\u5E93\u5B58",dataIndex:this.salesOrStock,align:"right"},{title:"\u4F63\u91D1",dataIndex:"commission_info",className:"commission_column",width:"120",align:"right"}];if(this.showType==="replace"){t.push({title:"\u64CD\u4F5C",dataIndex:"action",className:"action"})}return t},shopOptions:function e(){return this.shopInfoList.map(function(t){return{value:t.appid,label:t.shop_name||"\u672A\u547D\u540D\u5546\u5E97",checked:t.checked}})},listStatusText:function e(){if(this.loadingStatus===D.LOADING){return"\u52A0\u8F7D\u4E2D"}return""},emptyStatus:function e(){if(this.loadingStatus!==D.LOADING&&this.productList.length===0){return true}return false},rowSelection:function e(){if(this.showType==="replace"){return void 0}return{width:32,onChange:this.onListChange,selectedRowKeys:this.selectedListRowKeys,onSelect:this.onSelectProduct,onSelectAll:this.onSelectAllProduct,getCheckbox:this.getCheckbox}}},watch:{value:function e(t){if(t===true){this.show()}else{this.hide()}},dialogShow:function e(t){this.$emit("input",t)}},mounted:function e(){var t=this;if(this.value===true){this.show()}window.onresize=function(){if(window.innerHeight<=940){t.tableScrollY=440}else{t.tableScrollY=550}}},methods:{show:function e(){if(this.dialogShow===true){return}this.dialogShow=true;this.modifyType=this.selectType;this.getLinkShop()},hide:function e(){if(this.dialogShow===false){return}this.dialogShow=false},reportIdkey:function e(t,n){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;ht(t,n,o)},reportMyShopLink:function e(){this.reportIdkey(pt,40)},refreshAProduct:function e(){this.getLinkShop()},throttling:function e(t,n,o){var l=null;if(!W)W=new Date*1;if(l!==null)clearTimeout(l);var d=new Date*1;if(d-W>=o){t();W=d}else{l=setTimeout(t,n)}},loadMoreFunction:function e(t){if(t<500){if(this.continueFlag&&!this.loadMoreFeed){this.loadList().catch(function(n){console.error(n)})}}},scrollDown:function e(t){var n=this;this.throttling(function(){n.loadMoreFunction(t)},1e3,1e3)},onDialogClose:function e(){this.hide();this.$emit("cancel")},onSelectShop:function e(t){var n=this;this.currentShopId=t;window.localStorage.setItem("__select_shop_appid__",this.currentShopId);if(t==="all_shop"){this.chooseAll=true;this.productList=[];return};this.chooseAll=false;this.firstLoadingShopFeed=true;this.loadList(true).then(function(){n.firstLoadingShopFeed=false}).catch(function(){n.firstLoadingShopFeed=false})},onModifySelect:function e(t){this.modifyType=t},onListChange:function e(t){this.selectedListRowKeys=t},onSelectProduct:function e(t,n){if(!n){var o=this.selectedProduct.findIndex(function(l){return l.key===t.key});if(o>-1){this.selectedProduct.splice(o,1)}}else{this.selectedProduct.push(t);if(this.selectedProduct.length>this.choiceLimit){this.alertOnOverLimit()}}},alertOnOverLimit:function e(){this.$tipsErr("\u8D85\u51FA\u4E0A\u9650\uFF0C\u5F53\u524D\u6700\u591A\u63D2\u5165".concat(this.choiceLimit,"\u4E2A\u5546\u54C1"))},onSelectAllProduct:function e(t,n){if(t){this.selectedProduct=n;if(this.selectedProduct.length>this.choiceLimit){this.alertOnOverLimit()}}else{this.selectedProduct=[]}},getCheckbox:function e(t){if(t.no_sale)return{disabled:true,display:true};return{disabled:false,display:true}},handleSearchClear:function e(){this.searchStr="";if(this.chooseAll){this.productList=[];return}if(this.isAProduct){this.loadList(true)}else{this.searchProduct()}},searchProduct:function e(){var t=this;if(this.isSearching)return;this.isSearching=true;this.onlyShowSelected=false;var n={last_buffer:"",page_size:this.pageSize,key_word:this.searchStr,finder_product_status:1,need_no_sale:false,use_cache:false};if(this.currentShopId!=="all"&&this.currentShopId!=="others"){n.appid=this.currentShopId}if(this.currentShopId==="others"){n.from_other_shop_only=1}if(this.currentShop.SHOP_TYPE==="SHARE"){n.shop_sharer_appid=this.currentShopId}this.loadMoreFeed=true;this.loadingList=true;var o=this.isAProduct?"SearchMpSelectionProducts":"SearchWindowProductsBSide";o=this.chooseAll?"SearchProductsFromAllShop":o;R.post(K(o,n),function(l){t.updateTableWithProducts(true,l);t.isSearching=false},function(){t.loadingList=false;t.loadMoreFeed=false;t.isSearching=false})},getProductEncryptKey:function e(t,n){var o=this;var l=n.productIds,d=n.cpsIds,h=n.rawProductKey;if(!(l&&Array.isArray(l)||h&&Array.isArray(h)))return;this.loadingConfirm=true;return new Promise(function(p,s){var m={};if(h&&h.length&&h[0]){m.raw_product_key=h}else{m.product_id=l;m.cps_id=d}R.post(K(t,m),function(y){var _=nt(y),P=_.ret,O=_.extInfo;if(P!==0){o.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9");return}var L=O.product_encrypt_key;if(L&&Array.isArray(L)){p(L)}else{o.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9");s("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9")}},function(y){s(y)})})},onConfirm:function e(){var t=this;return q(F().mark(function n(){var o,l,d,h;return F().wrap(function p(s){while(1)switch(s.prev=s.next){case 0:if(!t.loadingConfirm){s.next=2;break}return s.abrupt("return");case 2:if(!(t.selectedProduct.length<=t.choiceLimit)){s.next=14;break}o=t.selectedProduct.map(function(m){return m.key});l=t.selectedProduct.map(function(m){return m.cps_id});d=t.selectedProduct.map(function(m){return m.raw_product_key});s.next=8;return t.getProductEncryptKey(t.isAProduct?"GetCpsProductEncryptKey":"GetProductEncryptKey",{productIds:o,cpsIds:l,rawProductKey:d});case 8:h=s.sent;t.loadingConfirm=false;t.$emit("select",h.map(function(m,y){return tt(tt({},t.selectedProduct[y]),{},{encryptKey:m})}));t.hide();s.next=15;break;case 14:t.alertOnOverLimit();case 15:case"end":return s.stop()}},n)}))()},setDefaultLinkShop:function e(t){var n=this;var o={};if(this.appid){o=t.find(function(l){return l.appid===n.appid})}else{o=t[0]}this.currentShopId=o.appid},getLinkShop:function e(){var t=this;this.loadingShop=true;R.post(K("InitShopWindow",{}),function(n){var o=n&&n.base_resp&&n.base_resp.ret;if(o===0){var l,d;var h=JSON.parse(n.ext_info);var p=h.shop_items,s=p===void 0?[]:p;s.unshift({appid:"all_shop",shop_name:"\u6240\u6709\u5C0F\u5E97\u5546\u54C1"});if(typeof h.related_shop_type!=="undefined"&&h.related_shop_type!==1){s.push({appid:"others",shop_name:"\u5E26\u8D27\u5546\u54C1"})}t.shopInfoList=s;var m=window.localStorage.getItem("__select_shop_appid__");if(h.sharer_shop_items&&h.sharer_shop_items.length){for(var y=0;y<h.sharer_shop_items.length;y++){var _=h.sharer_shop_items[y];_.SHOP_TYPE="SHARE";t.shopInfoList.push(_)}}if(m){t.shopInfoList.forEach(function(P){if(P.appid===m){t.currentShopId=P.appid}})}if(t.currentShopId==="all"){t.currentShopId=t.shopInfoList[0].appid}if(((l=t.shopInfoList)===null||l===void 0?void 0:l.length)===1&&((d=t.shopInfoList)===null||d===void 0||(d=d[0])===null||d===void 0?void 0:d.appid)==="all_shop"){t.chooseAll=true;t.loadingShop=false;t.loadingList=false;t.shopInfoList[0].checked=true}else{t.shopInfoList[1].checked=true;t.loadList(true)}}else{t.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u5173\u95ED\u5F39\u7A97\u91CD\u8BD5")}t.loadingShop=false},function(){t.loadingShop=false;t.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u5173\u95ED\u5F39\u7A97\u91CD\u8BD5")})},updateTableWithProducts:function e(t,n){var o=this;this.loadingList=false;this.loadMoreFeed=false;if(this.onlyShowSelected)return false;var l=n.base_resp,d=n.ext_info;var h=l&&l.ret;if(h===0){if(t&&(this.productList.length||this.productDisableList.length)){this.productList=[];this.productDisableList=[]}try{var p=JSON.parse(d);if(!p)throw new Error("No data");var s=p.continue_flag,m=s===void 0?false:s,y=p.last_buffer,_=y===void 0?"":y,P=p.products,O=P===void 0?[]:P;this.lastBuffer=_;this.continueFlag=m;if(O.length){var L;(L=this.productList).push.apply(L,H(mt(O)));if(this.selectedProduct.length>0){var j;this.productList=this.productList.filter(function(B){return!o.selectedProduct.some(function(N){return N.key===B.key})});(j=this.productList).unshift.apply(j,H(this.selectedProduct))}this.hightlightStr=this.searchStr}else{this.continueFlag=false}if(!m){this.loadingStatus=D.NOMORE}}catch(B){this.continueFlag=false;this.loadingStatus=D.FINISH;this.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u5173\u95ED\u5F39\u7A97\u91CD\u8BD5");console.error(B)}}if(h!==0)return false;return true},loadList:function e(t){var n=this;if(t){this.productList=[];this.productDisableList=[];this.lastBuffer="";this.continueFlag=true;this.loadingList=true}var o={page_size:this.pageSize,key_word:this.searchStr,last_buffer:this.lastBuffer,order_type:2,order:1,finder_product_status:1,need_no_sale:false,use_cache:false};if(this.currentShopId!=="all"&&this.currentShopId!=="others"){o.need_shop_appid_list=[this.currentShopId]}if(this.currentShopId==="others"){o.from_other_shop_only=1}if(this.currentShop.SHOP_TYPE==="SHARE"){o.shop_sharer_appid=this.currentShopId}this.loadMoreFeed=true;this.loadingStatus=D.LOADING;var l=this;var d=this.isAProduct?"ListMpSelectionProducts":"GetWindowProductsListBSide";var h=this.isAProduct?"SearchMpSelectionProducts":"SearchWindowProductsBSide";h=this.chooseAll?"SearchProductsFromAllShop":h;return new Promise(function(p,s){R.post(K(n.searchStr?h:d,o),function(m){var y=l.updateTableWithProducts(t,m);if(y){p()}else{s()}},function(){n.continueFlag=false;n.loadingList=false;n.loadMoreFeed=false;n.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u5173\u95ED\u5F39\u7A97\u91CD\u8BD5");s()})})},handleReplace:function e(t,n){var o=this;return q(F().mark(function l(){var d;return F().wrap(function h(p){while(1)switch(p.prev=p.next){case 0:if(!(!n||!n.key)){p.next=2;break}return p.abrupt("return");case 2:p.next=4;return o.getProductEncryptKey(o.isAProduct?"GetCpsProductEncryptKey":"GetProductEncryptKey",{productIds:[n.key]});case 4:d=p.sent;o.$emit("select",d);o.hide();case 7:case"end":return p.stop()}},l)}))()},handleChangeCard:function e(t){var n=this;return q(F().mark(function o(){return F().wrap(function l(d){while(1)switch(d.prev=d.next){case 0:n.$emit("openProductCardDialog",t);case 1:case"end":return d.stop()}},o)}))()},ifForbiddenUse:function e(t){return this.selectedProduct.length>=this.choiceLimit&&!t.selected},handleShowSelected:function e(){if(this.onlyShowSelected||this.selectedProduct.length===0)return;this.onlyShowSelected=true;this.storedProductList=this.productList;return this.selectedProduct},handleCancelShowSelected:function e(){this.onlyShowSelected=false;this.productList=this.storedProductList},showAProductQRcode:function e(t){var n=this;R.post(K("GetProductQrcode",{spu_id:t}),function(o){var l=nt(o),d=l.ret,h=l.extInfo;if(d===0){n.qrcodeUrl=h.qrcode_url}})},handleImageLoad:function e(){this.loadImg=true}}})},"./src/pages/modules/media_dialog/channel_product_dialog/channel_product_dialog.less":function(E,T,S){"use strict";S.r(T)},"./src/pages/modules/media_dialog/channel_product_dialog/channel_product_dialog.tpl":function(E,T){E.exports=`<mp-dialog
  weui="true"
  v-model="dialogShow"
  :value="true"
  :width="960"
  :title="title"
  rootElm="#vue_app"
  wrap-class="finder-minishop-dialog"
  @close="onDialogClose"
>
  <template>
    <div class="weui-desktop-minishop__inner">
      <div class="weui-desktop-minishop__bd">
        <template>
          <div class="minishop-option__wrp">
            <div class="minishop-option__left">
              <mp-dropdown
                type="default"
                :options="shopOptions"
                v-if="!isAProduct"
                v-model="currentShopId"
                class="channel_shop_list"
                placeholder="\u5168\u90E8\u6765\u6E90"
                :columns="1"
                @change="onSelectShop"
              >
              </mp-dropdown>
              <mp-input
                class="channel_shop_search"
                :placeholder="chooseAll ? '\u8F93\u5165\u5546\u54C1\u540D\u79F0\u3001\u5546\u54C1\u77ED\u94FE\u6216\u5E97\u94FA\u540D\u79F0' : '\u8BF7\u8F93\u5165\u5546\u54C1\u540D\u79F0\u6216ID'"
                v-model="searchStr"
                @clear="handleSearchClear"
                @enter="searchProduct"
                @input="onInputDebounced"
                clearable
              >
                <span
                  slot="appendIn"
                  class="search_btn"
                  @click="searchProduct"
                ></span>
              </mp-input>
            </div>
            <span v-if="!isAProduct">
              <a
                class="minishop-option__link"
                @click="reportMyShopLink"
                target="_blank"
                :href="manageUrl"
                >\u7BA1\u7406\u5546\u54C1</a>
            </span>
          </div>

          <div class="channel-product-list__wrp">
            <mp-table
              ref="table"
              :columns="tableColumns"
              :data-source="tabProductList"
              :row-selection="rowSelection"
              :loading="loadingList"
              :scroll-y="tableScrollY"
              @scroll-down="scrollDown"
            >
              <div slot="infos" slot-scope="{data,total,index}">
                <div class="product_infos">
                  <img :src="data.img_url" class="product_img" />
                  <div class="texts">
                    <span class="title">
                      <mp-channel-product-name
                        :title="data.title"
                        :searchStr="searchStr"
                        :key="hightlightStr"
                      ></mp-channel-product-name>
                    </span>

                    <span class="productId"
                      v-if="!isAProduct"
                      >ID:
                      <mp-channel-product-name
                        :title="data.product_id"
                        :searchStr="searchStr"
                        :key="hightlightStr"
                      ></mp-channel-product-name>
                    </span>
                    <mp-popover v-if="isAProduct" append-to-body position="up-center" :trigger="'hover'" @show="showAProductQRcode(data.product_id)" class="aproduct_popover">
                      <div slot="target">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.83333 14.1667L5.83333 12.5L7.5 12.5L7.5 14.1667L5.83333 14.1667Z" fill="#B1B2B3"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 10L2.5 16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5L10 17.5C10.4602 17.5 10.8333 17.1269 10.8333 16.6667L10.8333 10C10.8333 9.53976 10.4602 9.16667 10 9.16667L3.33333 9.16667C2.8731 9.16667 2.5 9.53976 2.5 10ZM9.83333 16.5L3.5 16.5L3.5 10.1667L9.83333 10.1667L9.83333 16.5Z" fill="#B1B2B3"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.66667L2.5 3.33333C2.5 2.8731 2.8731 2.5 3.33333 2.5L6.66667 2.5C7.1269 2.5 7.5 2.8731 7.5 3.33333L7.5 6.66667C7.5 7.1269 7.1269 7.5 6.66667 7.5L3.33333 7.5C2.8731 7.5 2.5 7.1269 2.5 6.66667ZM6.5 6.49999L6.5 3.49999L3.5 3.49999L3.5 6.49999L6.5 6.49999Z" fill="#B1B2B3"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 13.3333L12.5 16.6667C12.5 17.1269 12.8731 17.5 13.3333 17.5L16.6667 17.5C17.1269 17.5 17.5 17.1269 17.5 16.6667L17.5 13.3333C17.5 12.8731 17.1269 12.5 16.6667 12.5L13.3333 12.5C12.8731 12.5 12.5 12.8731 12.5 13.3333ZM16.5 13.5L16.5 16.5L13.5 16.5L13.5 13.5L16.5 13.5Z" fill="#B1B2B3"/>
                          <path d="M15.8333 9.16667L17.5 9.16667L17.5 10.8333L15.8333 10.8333L15.8333 9.16667Z" fill="#B1B2B3"/>
                          <path d="M12.5 9.16667L14.1667 9.16667L14.1667 10.8333L12.5 10.8333L12.5 9.16667Z" fill="#B1B2B3"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6.66667L12.5 3.33333C12.5 2.8731 12.8731 2.5 13.3333 2.5L16.6667 2.5C17.1269 2.5 17.5 2.8731 17.5 3.33333L17.5 6.66667C17.5 7.1269 17.1269 7.5 16.6667 7.5L13.3333 7.5C12.8731 7.5 12.5 7.1269 12.5 6.66667ZM16.5 6.49999L16.5 3.49999L13.5 3.49999L13.5 6.49999L16.5 6.49999Z" fill="#B1B2B3"/>
                          <path d="M9.16667 2.5L9.16667 4.16667L10.8333 4.16667L10.8333 2.5L9.16667 2.5Z" fill="#B1B2B3"/>
                          <path d="M9.16667 5.83333L9.16667 7.5L10.8333 7.5L10.8333 5.83333L9.16667 5.83333Z" fill="#B1B2B3"/>
                          </svg>                          
                      </div>
                      <div slot="content" class="aproduct_popover_content" style="text-align: center;">
                        <p style="font-size: 14px;">\u4F7F\u7528\u624B\u673A\u5FAE\u4FE1\uFF0C\u626B\u7801\u67E5\u770B\u5546\u54C1\u8BE6\u60C5</p>
                        <div v-if="!qrcodeUrl && !loadImg" style="margin: 84px auto;width:200px">
                          <i class="weui-desktop-loading"></i>
                        </div>
                        <img v-else :src="qrcodeUrl" width="200" @load="handleImageLoad" />
                      </div>
                    </mp-popover>
                    <div v-if="total.no_sale" class="noSale">{{total.no_sale_wording}}</div>
                  </div>
                </div>
              </div>
              <div slot="selling_price" slot-scope="{data,total,index}">
                <span>\xA5{{ data }}</span>
              </div>
              <div slot="commission_info" slot-scope="{data,total,index}">
                <div v-if="data.reward" class="commission_infos">
                  <span>\u7EA6\xA5{{ data.reward }}</span>
                  <span class="rate">\u4F63\u91D1\u7387{{ data.rate }}%</span>
                </div>
                <div v-else>
                  <span>\u65E0</span>
                </div>
              </div>
              <div
                v-if="showType === 'replace'"
                slot="action"
                slot-scope="{data,total,index,column}"
              >
                <a
                  href="javascript:;"
                  @click="handleReplace(data,total,index,column)"
                  >\u66FF\u6362</a
                >
              </div>
              <div
                v-if="loadingStatus === 'LOADING' && productList.length > 6 && !onlyShowSelected"
                slot="list-status"
                class="listStatus"
              >
                <i class="weui-desktop-loading">\u52A0\u8F7D\u4E2D</i>
              </div>
              <span v-if="loadingList" slot="no-data-placeholder"></span>
              <span v-else-if="chooseAll && !searchStr" slot="no-data-placeholder">\u8BF7\u641C\u7D22\u5546\u54C1</span>
              <span v-else-if="chooseAll && !tabProductList?.length">\u6682\u65E0\u6570\u636E</span>
              <span v-else-if="isAProduct" slot="no-data-placeholder">\u6682\u65E0\u5546\u54C1\uFF0C\u8FD4\u56DE<a class="minishop-option__link" style="cursor: pointer;" @click="refreshAProduct">\u8054\u76DF\u5546\u54C1</a>\u9996\u9875\u6DFB\u52A0</span>
              <span v-else slot="no-data-placeholder"
                >\u6682\u65E0\u5546\u54C1\uFF0C\u53EF\u524D\u5F80<a
                  class="minishop-option__link"
                  @click="reportMyShopLink"
                  target="_blank"
                  :href="manageUrl"
                  >{{ isWxStore ? '\u5FAE\u4FE1\u5C0F\u5E97-\u5546\u54C1\u7BA1\u7406' : '\u89C6\u9891\u53F7\u52A9\u624B-\u5546\u54C1\u6A71\u7A97'}}</a
                >\u4E2D\u6DFB\u52A0\u5546\u54C1</span
              >
            </mp-table>
          </div>
        </template>
      </div>
    </div>
    <template slot="footer">
      <div v-if="showType === 'replace'" class="dialog_footer"></div>
      <template v-else>
        <div class="picker__counter">
          <span
            >\u5DF2\u9009\u62E9
            <span class="link" @click="handleShowSelected"
              >{{ selectedProduct.length }}/{{ choiceLimit }}\u4E2A\u5546\u54C1</span
            >
            <span
              class="link"
              v-if="onlyShowSelected"
              @click="handleCancelShowSelected"
            >
              \u8FD4\u56DE\u5168\u90E8</span
            >
          </span>
        </div>
        <mp-button
          type="primary"
          :disabled="selectedProduct.length === 0 || selectedProduct.length > choiceLimit || loadingConfirm"
          @click="onConfirm"
          >\u63D2\u5165
        </mp-button>
        <mp-button @click="onDialogClose">\u53D6\u6D88</mp-button>
      </template>
    </template>
  </template>
</mp-dialog>
`},"./src/pages/modules/media_dialog/channel_product_dialog/channel_product_name/channel_product_name.js":function(E,T,S){var I=S("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var H=S("./src/pages/modules/media_dialog/channel_product_dialog/channel_product_name/channel_product_name.tpl");S("./src/pages/modules/media_dialog/channel_product_dialog/channel_product_name/channel_product_name.less");I.component("mp-channel-product-name",{template:H,props:{title:{type:String},searchStr:{type:String}},mounted:function Y(){var k=this.title;var M="";if(k.toLowerCase().indexOf(this.searchStr)===-1&&k.toUpperCase().indexOf(this.searchStr)===-1){for(var C=0;C<k.length;C++){if(this.searchStr.indexOf(k[C].toLowerCase())!==-1||this.searchStr.indexOf(k[C].toUpperCase())!==-1){M+='<span class="highlight">'.concat(k[C],"</span>")}else{M+=k[C]}}}else{M=k.replace(new RegExp("".concat(this.searchStr),"gi"),'<span class="highlight">'+this.searchStr+"</span>")}this.highLightName=M;this.$forceUpdate()},data:function Y(){return{highLightName:""}}})},"./src/pages/modules/media_dialog/channel_product_dialog/channel_product_name/channel_product_name.less":function(E,T,S){"use strict";S.r(T)},"./src/pages/modules/media_dialog/channel_product_dialog/channel_product_name/channel_product_name.tpl":function(E,T){E.exports='<span v-html="highLightName"></span>\n'}}]);
