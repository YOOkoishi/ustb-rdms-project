(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/modules~advanced/menusetting/menusetting~advanced/menusetting4Web1~album/edit/edit~comment/comment_l~modules"],{"./src/pages/modules/common/album_utils.js":function(E,v){var l=typeof arguments==="undefined"?void 0:arguments;function D(w,_){var c="undefined"!=typeof Symbol&&w[Symbol.iterator]||w["@@iterator"];if(!c){if(Array.isArray(w)||(c=M(w))||_&&w&&"number"==typeof w.length){c&&(w=c);var A=0,b=function u(){};return{s:b,n:function u(){return A>=w.length?{done:true}:{done:false,value:w[A++]}},e:function u(y){throw y},f:b}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var S,r=true,i=false;return{s:function u(){c=c.call(w)},n:function u(){var y=c.next();return r=y.done,y},e:function u(y){i=true,S=y},f:function u(){try{r||null==c.return||c.return()}finally{if(i)throw S}}}}function j(w){return H(w)||R(w)||M(w)||V()}function V(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(w,_){if(w){if("string"==typeof w)return B(w,_);var c={}.toString.call(w).slice(8,-1);return"Object"===c&&w.constructor&&(c=w.constructor.name),"Map"===c||"Set"===c?Array.from(w):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?B(w,_):void 0}}function R(w){if("undefined"!=typeof Symbol&&null!=w[Symbol.iterator]||null!=w["@@iterator"])return Array.from(w)}function H(w){if(Array.isArray(w))return B(w)}function B(w,_){(null==_||_>w.length)&&(_=w.length);for(var c=0,A=Array(_);c<_;c++)A[c]=w[c];return A}function F(w,_){var c=Object.keys(w);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(w);_&&(A=A.filter(function(b){return Object.getOwnPropertyDescriptor(w,b).enumerable})),c.push.apply(c,A)}return c}function q(w){for(var _=1;_<arguments.length;_++){var c=null!=arguments[_]?arguments[_]:{};_%2?F(Object(c),true).forEach(function(A){f(w,A,c[A])}):Object.getOwnPropertyDescriptors?Object.defineProperties(w,Object.getOwnPropertyDescriptors(c)):F(Object(c)).forEach(function(A){Object.defineProperty(w,A,Object.getOwnPropertyDescriptor(c,A))})}return w}function f(w,_,c){return(_=m(_))in w?Object.defineProperty(w,_,{value:c,enumerable:true,configurable:true,writable:true}):w[_]=c,w}function m(w){var _=I(w,"string");return"symbol"==N(_)?_:_+""}function I(w,_){if("object"!=N(w)||!w)return w;var c=w[Symbol.toPrimitive];if(void 0!==c){var A=c.call(w,_||"default");if("object"!=N(A))return A;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===_?String:Number)(w)}function N(w){"@babel/helpers - typeof";return N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(_){return typeof _}:function(_){return _&&"function"==typeof Symbol&&_.constructor===Symbol&&_!==Symbol.prototype?"symbol":typeof _},N(w)}var J=function w(_){var c={0:"\u56FE\u6587",5:"\u89C6\u9891",8:"\u97F3\u9891"};return c[_]};var P=function w(_,c){if(l.length>0){for(var A in c){if(c[A]!==void 0){var b=new RegExp("({"+A+"})","g");_=_.replace(b,c[A])}}}return _};var K=function w(_){var c=Number(_.type);var A=!c?!_.is_material:c===9||c===74;return A};var se=function w(_){var c=_.item,A=_.isMediaAccount,b=A===void 0?false:A;var S={sendType:0,article_title:c.article_title,source_url:c.source_url,source_title:c.source_title,idx:c.idx};var r=Number(c.appeal_status)||0;S.complainInfoUrl="/cgi-bin/announce?action=getannouncement&key=11540820414s4Fh8&version=1&lang=zh_CN&platform=2";S.complainUrl="/cgi-bin/appmsgcopyright?action=appeal&original_type="+c.source_type+"&original_url="+encodeURIComponent(c.source_url)+"&article_url="+encodeURIComponent(c.article_url)+"&article_title="+c.article_title;if(r===2){S.reason="\u539F\u521B\u6821\u9A8C\u5931\u8D25\u7684\u7533\u8BC9\u6709\u6548\u671F\u4E3A2\u5C0F\u65F6\uFF0C\u76EE\u524D\u8BE5\u7533\u8BC9\u5DF2\u8FC7\u671F\u3002"}else if(r===3){S.reason="\u8BE5\u5185\u5BB9\u7684\u7533\u8BC9\u5BA1\u6838\u4E0D\u901A\u8FC7\uFF0C\u7533\u8BC9\u5931\u8D25\uFF0C\u8BE6\u60C5\u8BF7\u67E5\u770B\u5BF9\u5E94\u7AD9\u5185\u4FE1\u901A\u77E5\u3002"}else if(c.source_info.is_pay_subscribe||c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_REJECT_REPRINT"||c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY"||c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY"){if(c.user_source===1){S.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u539F\u521B\u5185\u5BB9<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5C06\u66FF\u6362\u6210\u5206\u4EAB\u6837\u5F0F\uFF0C\u5206\u4EAB\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S);S.sendType=2}else{S.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u539F\u521B\u5185\u5BB9<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u5C06\u66FF\u6362\u6210\u5206\u4EAB\u6837\u5F0F\uFF0C\u5206\u4EAB\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S);S.sendType=2}}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITH_SOURCE"){S.reason=P('\u8BE5\u5185\u5BB9\u5DF2\u88AB\u539F\u521B\u5185\u5BB9<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u7EB3\u5165\u767D\u540D\u5355\uFF0C\u8F6C\u8F7D\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S);S.sendType=3;S.reprintTypeShow=false;S.reprintType="white"}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITHOUT_SOURCE"){S.reason=P('\u8BE5\u5185\u5BB9\u5DF2\u88AB\u539F\u521B\u5185\u5BB9<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u7EB3\u5165\u767D\u540D\u5355\uFF0C\u8F6C\u8F7D\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S);S.sendType=3;S.reprintTypeShow=false;S.double=true;S.reprintType="white"}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_UNDECLARE"&&c.source_type===9){if(b){S.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u5386\u53F2\u5185\u5BB9<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5982\u9009\u62E9\u4E0D\u58F0\u660E\u539F\u521B\u53EF\u53D1\u5E03\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S)}else{S.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u5386\u53F2\u5185\u5BB9<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u975E\u539F\u521B\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S)}S.sendType=1}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_UNDECLARE"&&(c.source_type===2||c.source_type===3)){if(b){S.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u65F6\u4E8B\u65B0\u95FB<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5982\u9009\u62E9\u4E0D\u58F0\u660E\u539F\u521B\u53EF\u53D1\u5E03\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S)}else{S.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u65F6\u4E8B\u65B0\u95FB<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u975E\u539F\u521B\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S)}S.sendType=1}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_UNDECLARE"&&c.source_type===4){S.sendType=1;if(c.black_type===4){S.black_name="\u516C\u5171\u516C\u5F00\u4FE1\u606F"}else if(c.black_type===6){S.black_name="\u7F51\u7EDC\u6574\u5408\u4FE1\u606F"}else if(c.black_type===5){S.black_name="\u8425\u9500\u5BA3\u4F20\u4FE1\u606F"}else{S.black_name="\u9ED8\u8BA4\u7C7B\u578B"}if(b){S.reason=P('\u8BE5\u5185\u5BB9\u4E0E{black_name}<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5982\u9009\u62E9\u4E0D\u58F0\u660E\u539F\u521B\u53EF\u53D1\u5E03\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S)}else{S.reason=P('\u8BE5\u5185\u5BB9\u4E0E{black_name}<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u975E\u539F\u521B\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S)}}else{if(c.source_type===1){if(c.user_source===1){S.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u539F\u521B\u5185\u5BB9<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5C06\u66FF\u6362\u6210\u5206\u4EAB\u6837\u5F0F\uFF0C\u5206\u4EAB\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S);S.sendType=2}else{S.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u539F\u521B\u5185\u5BB9<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u5C06\u66FF\u6362\u6210\u5206\u4EAB\u6837\u5F0F\uFF0C\u5206\u4EAB\u5185\u5BB9\u4E0D\u53EF\u53D1\u5E03\u5230\u5408\u96C6\uFF0C\u5982\u6709\u5F02\u8BAE\u53EF<a href="{complainUrl}" target="_blank">\u7533\u8BC9</a>\uFF082\u5C0F\u65F6\u5185\u6709\u6548\uFF09 \uFF08<a href="{complainInfoUrl}" target="_blank">\u67E5\u770B\u7533\u8BC9\u6307\u5F15</a>\uFF09',S);S.sendType=2}}}S.word="";return S};var T=function w(_){var c="";switch(_){case"67010":c="\u8BE5\u56FE\u6587\u6D88\u606F\u90E8\u5206\u6587\u7AE0\u6B63\u6587\u4E3A\u7A7A\uFF0C\u65E0\u6CD5\u7FA4\u53D1\uFF0C\u8BF7\u9009\u62E9\u5176\u4ED6\u6587\u7AE0\u6216\u7F16\u8F91\u5B8C\u6574\u540E\u518D\u5C1D\u8BD5";break;case"1530505":c="\u8BF7\u52FF\u6DFB\u52A0\u5176\u4ED6\u516C\u4F17\u53F7\u7684\u4E3B\u9875\u94FE\u63A5";break;case"1530512":c="\u94FE\u63A5\u5DF2\u5931\u6548\uFF0C\u8BF7\u5728\u624B\u673A\u7AEF\u91CD\u65B0\u590D\u5236\u94FE\u63A5";break;case"67019":c="\u63A8\u8350\u8BED\u4E0D\u80FD\u6709\u8FDD\u53CD\u516C\u4F17\u5E73\u53F0\u534F\u8BAE\u3001\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u548C\u653F\u7B56\u7684\u5185\u5BB9\uFF0C\u8BF7\u91CD\u65B0\u7F16\u8F91";break;case"13005":c="\u4ECA\u65E5\u6709\u5F85\u6295\u653E\u8D5E\u52A9\u5E7F\u544A\uFF0C\u4F60\u5F53\u524D\u7FA4\u53D1\u7684\u5185\u5BB9\u4E0D\u7B26\u5408\u6761\u4EF6\uFF0C\u6B64\u65F6\u7FA4\u53D1\u5C06\u4F1A\u5BFC\u81F4\u5E7F\u544A\u8FDD\u7EA6\uFF0C\u8BF7\u7EE7\u7EED\u7F16\u8F91\u3002";break;case"153012":c="\u6587\u7AE0\u5DF2\u58F0\u660E\u539F\u521B\uFF0C\u4F46\u672A\u8BBE\u7F6E\u8F6C\u8F7D\u7C7B\u578B\uFF0C\u8BF7\u8BBE\u7F6E\u540E\u518D\u7FA4\u53D1\u3002";break;case"200043":c="\u56FE\u6587\u4E2D\u5305\u542B\u6CA1\u6709\u5173\u8054\u7684\u5C0F\u7A0B\u5E8F\uFF0C\u8BF7\u5220\u9664\u540E\u518D\u7FA4\u53D1\u3002";break;case"200047":c="\u6807\u9898\u4E2D\u4E0D\u80FD\u542B\u6709\u7279\u6B8A\u5B57\u7B26";break;default:c=""}return c};var n=function w(_){var c=_.item,A=_.itemAppealStatus;var b={sendType:0,article_title:c.article_title,source_url:c.source_url,source_title:c.source_title,idx:c.idx};var S=Number(A)||0;b.complainInfoUrl="/cgi-bin/announce?action=getannouncement&key=11540820414s4Fh8&version=1&lang=zh_CN&platform=2";b.complainUrl="/cgi-bin/appmsgcopyright?action=appeal&original_type="+c.source_type+"&original_url="+encodeURIComponent(c.source_url)+"&article_url="+encodeURIComponent(c.article_url)+"&article_title="+c.article_title;b.reprintUrl="/cgi-bin/announce?action=getannouncement&key=11622622313ulYm4&version=1&lang=zh_CN&platform=2";if(S===2){b.reason="\u539F\u521B\u6821\u9A8C\u5931\u8D25\u7684\u7533\u8BC9\u6709\u6548\u671F\u4E3A2\u5C0F\u65F6\uFF0C\u76EE\u524D\u8BE5\u7533\u8BC9\u5DF2\u8FC7\u671F\u3002"}else if(S===3){b.reason="\u8BE5\u5185\u5BB9\u7684\u7533\u8BC9\u5BA1\u6838\u4E0D\u901A\u8FC7\uFF0C\u7533\u8BC9\u5931\u8D25\uFF0C\u8BE6\u60C5\u8BF7\u67E5\u770B\u5BF9\u5E94\u7AD9\u5185\u4FE1\u901A\u77E5\u3002"}else if(c.source_info.is_pay_subscribe||c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_REJECT_REPRINT"||c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_REPRINT_WITH_MODIFY"||c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_REPRINT_WITHOUT_MODIFY"){if(c.user_source===1){b.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u539F\u521B\u6587\u7AE0<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\u3002',b);b.sendType=2}else{b.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u539F\u521B\u6587\u7AE0<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\uFF1B\u5982\u9700\u5176\u4ED6\u6837\u5F0F\u53D1\u5E03\uFF0C\u5EFA\u8BAE\u8054\u7CFB\u8BE5\u516C\u4F17\u53F7\u7BA1\u7406\u5458\u6DFB\u52A0\u767D\u540D\u5355\u540E\u901A\u8FC7\u5B98\u65B9\u8F6C\u8F7D\u8DEF\u5F84\u53D1\u5E03 \uFF08<a href="{reprintUrl}" target="_blank">\u8F6C\u8F7D\u6307\u5F15</a>\uFF09\u3002',b);b.sendType=2}}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITH_SOURCE"){b.reason=P('\u8BE5\u5185\u5BB9\u5DF2\u88AB\u539F\u521B\u6587\u7AE0<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u7EB3\u5165\u767D\u540D\u5355\uFF0C\u5E73\u53F0\u89C4\u5B9A\u540C\u4E00\u539F\u521B\u5185\u5BB9\u53EA\u80FD\u7531\u4E00\u4E2A\u8D26\u53F7\u8FDB\u884C\u539F\u521B\u58F0\u660E\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\uFF1B\u5982\u9700\u8F6C\u8F7D\u53EF\u901A\u8FC7\u5B98\u65B9\u8F6C\u8F7D\u8DEF\u5F84\u53D1\u5E03\uFF08<a href="{reprintUrl}" target="_blank">\u8F6C\u8F7D\u6307\u5F15</a>\uFF09\u3002',b);b.sendType=3;b.reprintTypeShow=false;b.reprintType="white"}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_IN_WHITE_LIST_WITHOUT_SOURCE"){b.reason=P('\u8BE5\u5185\u5BB9\u5DF2\u88AB\u539F\u521B\u6587\u7AE0<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u7EB3\u5165\u767D\u540D\u5355\uFF0C\u5E73\u53F0\u89C4\u5B9A\u540C\u4E00\u539F\u521B\u5185\u5BB9\u53EA\u80FD\u7531\u4E00\u4E2A\u8D26\u53F7\u8FDB\u884C\u539F\u521B\u58F0\u660E\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\uFF1B\u5982\u9700\u8F6C\u8F7D\u53EF\u901A\u8FC7\u5B98\u65B9\u8F6C\u8F7D\u8DEF\u5F84\u53D1\u5E03\uFF08<a href="{reprintUrl}" target="_blank">\u8F6C\u8F7D\u6307\u5F15</a>\uFF09\u3002',b);b.sendType=3;b.reprintTypeShow=false;b.double=true;b.reprintType="white"}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_UNDECLARE"&&c.source_type===9){b.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u5386\u53F2\u6587\u7AE0<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\u3002',b);b.sendType=1}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_UNDECLARE"&&(c.source_type===2||c.source_type===3)){b.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u65B0\u95FB\u5E93\u6587\u7AE0<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\u3002',b);b.sendType=1}else if(c.source_info.source_reprint_status==="EN_SOURCE_REPRINT_STATUS_UNDECLARE"&&c.source_type===4){b.sendType=1;if(c.black_type===4){b.black_name="\u516C\u5171\u516C\u5F00\u4FE1\u606F"}else if(c.black_type===6){b.black_name="\u7F51\u7EDC\u6574\u5408\u4FE1\u606F"}else if(c.black_type===5){b.black_name="\u8425\u9500\u5BA3\u4F20\u4FE1\u606F"}else{b.black_name="\u9ED8\u8BA4\u7C7B\u578B"}b.reason=P('\u8BE5\u5185\u5BB9\u4E0E{black_name}<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\u3002',b)}else{if(c.source_type===1){if(c.user_source===1){b.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u539F\u521B\u6587\u7AE0<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u4E0D\u80FD\u58F0\u660E\u539F\u521B\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\u3002',b);b.sendType=2}else{b.reason=P('\u8BE5\u5185\u5BB9\u4E0E\u539F\u521B\u6587\u7AE0<a href="{source_url}" target="_blank">\u300A{source_title}\u300B</a>\u76F8\u4F3C\u5EA6\u8FC7\u9AD8\uFF0C\u5982\u6709\u5F02\u8BAE<a href="{complainUrl}" target="_blank">\u70B9\u51FB\u7533\u8BC9</a>\uFF08<a href="{complainInfoUrl}" target="_blank">\u7533\u8BC9\u6307\u5F15</a>\uFF09\uFF1B\u5982\u9700\u5176\u4ED6\u6837\u5F0F\u53D1\u5E03\uFF0C\u5EFA\u8BAE\u8054\u7CFB\u8BE5\u516C\u4F17\u53F7\u7BA1\u7406\u5458\u6DFB\u52A0\u767D\u540D\u5355\u540E\u901A\u8FC7\u5B98\u65B9\u8F6C\u8F7D\u8DEF\u5F84\u53D1\u5E03 \uFF08<a href="{reprintUrl}" target="_blank">\u8F6C\u8F7D\u6307\u5F15</a>\uFF09\u3002',b);b.sendType=2}}}b.word="";return b};var h=[{label:"\u6309\u5929\u66F4\u65B0",value:1,options:[{label:"\u6BCF\u5929",value:11},{label:"\u6BCF2\u5929",value:12},{label:"\u6BCF3\u5929",value:13},{label:"\u6BCF4\u5929",value:14},{label:"\u6BCF5\u5929",value:15}]},{label:"\u6309\u5468\u66F4\u65B0",value:2,options:[{label:"\u6BCF\u5468",value:21},{label:"\u6BCF2\u5468",value:22},{label:"\u6BCF3\u5468",value:23}]},{label:"\u6309\u6708\u66F4\u65B0",value:3,options:[{label:"\u6BCF\u6708",value:31},{label:"\u6BCF2\u6708",value:32},{label:"\u6BCF3\u6708",value:33}]}];var G=function w(_){var c={};var A=10;if(typeof _==="number"){switch(_){case 11:case 12:case 13:case 14:case 15:c.day=_%10;c.week=0;c.month=0;break;case 21:case 22:case 23:c.day=0;c.week=_%10;c.month=0;break;case 31:case 32:case 33:c.day=0;c.week=0;c.month=_%10;break;default:break}}else if(N(_)==="object"){for(var b in _){_[b]*=1}var S=_.day,r=_.week,i=_.month;if(!!S){A=S+10}else if(!!r){A=r+20}else if(!!i){A=i+30}}return N(_)==="object"?A:JSON.stringify(q({},c))};var Q=[{label:"\u8FDE\u8F7D\u4E2D",value:1},{label:"\u5DF2\u5B8C\u7ED3",value:0}];var ee=[{label:"\u7537\u6027",value:1},{label:"\u5973\u6027",value:2},{label:"\u4E0D\u9650",value:0}];var X=[{label:"\u7384\u5E7B",value:0},{label:"\u79D1\u5E7B",value:1},{label:"\u90FD\u5E02",value:2},{label:"\u5386\u53F2",value:3},{label:"\u60AC\u7591",value:4},{label:"\u6E38\u620F",value:5},{label:"\u7ADE\u6280",value:6},{label:"\u5947\u5E7B",value:7},{label:"\u7075\u5F02",value:9},{label:"\u6B66\u4FA0",value:10},{label:"\u73B0\u5B9E",value:11},{label:"\u540C\u4EBA",value:12},{label:"\u8A00\u60C5",value:13},{label:"\u4ED9\u4FA0",value:14},{label:"\u8111\u6D1E",value:15},{label:"\u6587\u5B66\u5411",value:16},{label:"\u9752\u6625\u6210\u957F",value:17},{label:"\u6563\u6587\u968F\u7B14",value:18},{label:"\u56DE\u5FC6\u4E0E\u81EA\u8FF0",value:19}];var oe=[{label:"\u60C5\u8282",value:1,options:[{label:"\u91CD\u751F",value:"101"},{label:"\u7A7F\u8D8A",value:"102"},{label:"\u5546\u6218",value:"103"},{label:"\u63A8\u7406",value:"104"},{label:"\u7CFB\u7EDF",value:"105"},{label:"\u5FEB\u7A7F",value:"106"},{label:"\u65E0\u9650\u6D41",value:"107"},{label:"\u5B85\u6597",value:"108"},{label:"\u5BAB\u6597",value:"109"},{label:"\u6253\u8138\u8650\u6E23",value:"110"},{label:"\u79CD\u7530",value:"111"},{label:"\u56E4\u7269\u8D44",value:"112"},{label:"\u590D\u4EC7",value:"113"},{label:"\u5192\u9669",value:"114"}]},{label:"\u89D2\u8272",value:2,options:[{label:"\u53CD\u6D3E",value:"201"},{label:"\u603B\u88C1",value:"202"},{label:"\u5B66\u9738",value:"203"},{label:"\u840C\u5B9D",value:"204"},{label:"\u75C5\u5A07",value:"205"},{label:"\u5927\u5973\u4E3B",value:"206"},{label:"\u5175\u738B",value:"207"},{label:"\u6218\u795E",value:"208"},{label:"\u8D58\u5A7F",value:"209"},{label:"\u5927\u4F6C",value:"210"},{label:"\u5251\u4FEE",value:"211"},{label:"\u533B\u5983",value:"212"},{label:"\u6BD2\u540E",value:"213"},{label:"\u53CC\u5F3A",value:"214"},{label:"\u56E2\u5BA0",value:"215"},{label:"\u7FA4\u50CF",value:"216"},{label:"\u53CD\u9AA8",value:"217"},{label:"\u6280\u672F\u5B85",value:"218"},{label:"\u4E8B\u4E1A\u8111",value:"219"},{label:"\u6076\u5973",value:"220"},{label:"\u5355\u4E3B\u89D2",value:"221"},{label:"\u53CC\u4E3B\u89D2",value:"222"}]},{label:"\u80CC\u666F",value:3,options:[{label:"\u73B0\u4EE3",value:"301"},{label:"\u53E4\u4EE3",value:"302"},{label:"\u5E74\u4EE3",value:"303"},{label:"\u6C11\u56FD",value:"304"},{label:"\u795E\u8BDD",value:"305"},{label:"\u8FDC\u53E4",value:"306"},{label:"\u5B87\u5B99",value:"307"},{label:"\u672B\u4E16",value:"309"},{label:"\u897F\u5E7B",value:"310"},{label:"\u6C5F\u6E56",value:"311"},{label:"\u67B6\u7A7A",value:"312"},{label:"\u6821\u56ED",value:"313"},{label:"\u804C\u573A",value:"314"},{label:"\u5A31\u4E50\u5708",value:"315"}]},{label:"\u60C5\u611F",value:4,options:[{label:"\u751C\u5BA0",value:"401"},{label:"\u8650\u604B",value:"402"},{label:"\u723D\u6587",value:"403"},{label:"\u8F7B\u677E",value:"404"},{label:"\u6B63\u5267",value:"405"},{label:"\u52B1\u5FD7",value:"406"},{label:"\u6551\u8D4E",value:"407"},{label:"\u7981\u6B32",value:"408"},{label:"\u62C9\u626F",value:"409"},{label:"\u65E0CP",value:"410"},{label:"\u53CB\u60C5",value:"411"},{label:"\u6CBB\u6108",value:"412"},{label:"\u5BB6\u56FD",value:"413"},{label:"\u6210\u957F",value:"414"},{label:"\u4EB2\u60C5",value:"415"}]}].reduce(function(w,_,c){if(c>1)w=[].concat(j(w.slice(0,w.length-1)),[_,w[w.length-1]]);else w.push(_);return w},[]);var ne=[{label:"",value:0,options:[{label:"\u4E0D\u5B9A\u671F\u66F4\u65B0",value:10}]},{label:"\u6309\u5929\u66F4\u65B0",value:1,options:[{label:"\u6BCF\u5929",value:11},{label:"\u6BCF2\u5929",value:12},{label:"\u6BCF3\u5929",value:13},{label:"\u6BCF4\u5929",value:14},{label:"\u6BCF5\u5929",value:15}]},{label:"\u6309\u5468\u66F4\u65B0",value:2,options:[{label:"\u6BCF\u5468",value:21},{label:"\u6BCF2\u5468",value:22},{label:"\u6BCF3\u5468",value:23}]},{label:"\u6309\u6708\u66F4\u65B0",value:3,options:[{label:"\u6BCF\u6708",value:31},{label:"\u6BCF2\u6708",value:32},{label:"\u6BCF3\u6708",value:33}]}];var te=function w(_){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oe;if(!_){return[]}var A=_;if(Array.isArray(_)){A=_}else if(typeof _==="string"){var b=_.trim();if(b.startsWith("[")&&b.endsWith("]")){try{A=JSON.parse(b)}catch(r){return[]}}else{A=[b]}}else{return[]}if(!Array.isArray(A)||A.length===0){return[]}var S=[];A.forEach(function(r){if(typeof r!=="string"){return}c.forEach(function(i){if(i.options&&Array.isArray(i.options)){var u=i.options.find(function(y){var z=y.label.replace(/^_\("/,"").replace(/"\)$/,"");return z===r.trim()});if(u){S.push(u.value)}}})});return S};var fe=function w(_){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:oe;if(!Array.isArray(_)||_.length===0){return[]}var A=[];_.forEach(function(b){c.forEach(function(S){if(S.options&&Array.isArray(S.options)){var r=S.options.find(function(u){return u.value===b});if(r){var i=r.label.replace(/^_\("/,"").replace(/"\)$/,"");A.push(i)}}})});return A};var ue=function w(_){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;if(!Array.isArray(_)||!_[0]||!Array.isArray(c)){return-1}var A=c.find(function(b){return b.label===_[0]});if(A)return A.value;return-1};var ye=function w(_){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:X;if(_===void 0||_===null||!Array.isArray(c)){return""}var A=D(c),b;try{for(A.s();!(b=A.n()).done;){var S=b.value;if(S.value===_){var r=S.label.replace(/^_\("/,"").replace(/"\)$/,"");return r}}}catch(i){A.e(i)}finally{A.f()}return""};var Te=function w(_,c){var A="";var b=c.find(function(i){return i.value===_});if(b){A=b.label||""}else{for(var S=0;S<c.length;S++){var r=c[S].options||[];A=Te(_,r);if(A){break}}}return A};var ke=function w(_,c,A){var b=j(c);var S=false;var r=A.find(function(z){return z.value===_});if(r){b.push(r.value);S=true}else{for(var i=0;i<A.length;i++){b.push(A[i].value);var u=A[i].options||[];var y=ke(_,b,u);if(y.hasValueFound){S=true;b=y.value;break}else{b.pop()}}}return{value:b,hasValueFound:S}};var Ie=function w(_,c){var A="";var b=c.find(function(i){return i.value===_});if(b){A=b.value}else{for(var S=0;S<c.length;S++){var r=c[S].options||[];A=Ie(_,r);if(A){break}}}return A};E.exports={getTypeName:J,notMaterial:K,transToWords:Te,payFreqOptions:h,updatingOptions:Q,handleUpdateFreq:G,updateFreqOptions:ne,workTagOptions:oe,convertWorkTagsToValues:te,convertWorkTagsToLabels:fe,readerGroupOptions:ee,themeOptions:X,convertThemeToValue:ue,convertValueToTheme:ye,originalCheckResult:se,ordinaryCheckResult:T,publishStatusCheckResult:n,transToCascadeOptionsValue:ke,transToDropdownOptionsValue:Ie}},"./src/pages/modules/media/audio/audio_chatmsg/audio_chatmsg.js":function(E,v,l){var D=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");l("./src/pages/modules/media/common/media.less");l("./src/pages/modules/media/audio/audio_chatmsg/audio_chatmsg.less");l("./src/pages/modules/media/audio/audio_player.js");var j=l("./src/pages/modules/media/audio/audio_chatmsg/audio_chatmsg.tpl");var V=l("./src/pages/modules/utils/url.js");var M=l("./src/pages/modules/media/audio/audio_player.js");D.component("mp-audio-chatmsg",{template:j,components:{"mp-audio-player":M},props:{duration:{type:Number,default:0},msgid:{type:[Number,String],default:""},fileid:{type:[Number,String],default:""},source:{type:String,default:""},voiceEncodeFileid:{type:String,default:""},outdate:{type:Boolean,default:false},theme:{type:String,default:"green"},newstyle:{type:Boolean,default:false}},computed:{src:function R(){if(this.voiceEncodeFileid){return V.fullUrl("https://res.wx.qq.com/voice/getvoice?mediaid=".concat(this.voiceEncodeFileid))}return V.fullUrl("/cgi-bin/getvoicedata?msgid=".concat(this.msgid,"&fileid=").concat(this.fileid,"&source=").concat(this.source))},iconClass:function R(){var H="weui-desktop-audio-player__switch ".concat(this.theme);if(this.outdate){H+=" outdate"}return H}},methods:{convertTimeString:function R(H){if(this.newstyle)return Math.floor(H||0)+'"';var B=Math.floor(H||0);var F=B%60;var q=Math.floor(B/60)%60;var f=Math.floor(B/3600);var m=("0"+F).substr(-2);m=("0"+q).substr(-2)+":"+m;if(f)m=f+":"+m;return m},maskClick:function R(H){H.stopPropagation();if(this.outdate)return;this.$refs.player.click()},documentClick:function R(){this.$refs.player.pause();document.removeEventListener("click",this.documentClick)}}})},"./src/pages/modules/media/audio/audio_chatmsg/audio_chatmsg.less":function(E,v,l){"use strict";l.r(v)},"./src/pages/modules/media/audio/audio_chatmsg/audio_chatmsg.tpl":function(E,v){E.exports=`<!-- mp-audiomsg -->
<div :class="['weui-desktop-audio_chatmsg', theme, outdate ? 'outdate' : '', newstyle ? 'is-new-style': 'is-old-style']">
  <mp-audio-player ref="player" :iconclass="iconClass" :disabled="outdate" :src="src" @play="$emit('play')" @pause="$emit('pause')"
    extclass="weui-desktop-audio_chatmsg__player weui-desktop-vm weui-desktop-vm_default"></mp-audio-player>
  <div v-if="!outdate" class="weui-desktop-audio_chatmsg__duration">{{convertTimeString(duration)}}</div>
  <div v-else>\u97F3\u9891\u6D88\u606F\u5DF2\u8FC7\u671F\u65E0\u6CD5\u67E5\u770B</div>
  <div v-show="newstyle && !outdate" ref="clickMask" class="click-mask" @click="maskClick"></div>
</div>
`},"./src/pages/modules/media_dialog/image_dialog/imageDialogDndStyle.js":function(E,v){var l=window.$;var D="image/bmp, image/png, image/jpeg, image/jpg, image/gif";var j="js_image_dialog_list_wrp";var V="image_upload_dnd_wrp_mask";var M="image_upload_dnd_wrp_container";var R="image_dialog_drag_over_inner_wrp";var H="image_dialog_drag_over_outer_wrp";var B="image_upload_dnd_inner_text";var F="image_upload_dnd_outer_text";function q(K){var se=K.items;for(var T=0;T<se.length;T++){if(D.indexOf(se[T].type)!==-1){return true}}return false}function f(K){var se=function n(h){var G=l("."+V);var Q=document.getElementsByClassName(M)[0];if(G.css("visibility")==="hidden"){G.css("visibility","visible");l("."+M).addClass(H);if(Q.contains(h.target)||h.target===Q){l("."+M).attr("class",M+" "+R)}}};var T=window.navigator.userAgent;if(T){if(T.indexOf("Chrome")===-1){se(K)}else{if(q(K.dataTransfer)){se(K)}}}}function m(K){var se=document.getElementById(j);var T=document.getElementsByClassName(V)[0];var n=document.getElementsByClassName(M)[0];var h=[n,T,document.body,document.body.parentElement,se];switch(K.type){case"drop":if(h.indexOf(K.target)===-1){if(!l.contains(n,K.target)){return}}break;default:break}l("."+M).attr("class",M);l("."+V).css("visibility","hidden");if(K.target!==n){K.preventDefault()}}function I(K){K.preventDefault()}function N(){l("."+V).on("dragenter",I);l("."+V).on("dragover",I);l("."+M).on("drop",m);l("."+V).on("drop",m);document.body.addEventListener("drop",m);document.body.addEventListener("mouseleave",m);window.onfocus=m}function J(){document.addEventListener("dragover",f);N();l("."+M).on("dragover",function(K){if(K.target===document.getElementsByClassName(F)[0]){var se=l(this);se.attr("class",M+" "+R)}});l("."+M).on("dragleave",function(K){var se=document.getElementsByClassName(B)[0];if(K.target===se){var T=l(this);T.attr("class",M+" "+H)}})}function P(){l("."+M).unbind("drop",m);l("."+V).unbind("drop",m);document.removeEventListener("dragover",f);document.body.removeEventListener("drop",m);document.body.removeEventListener("mouseleave",m)}E.exports={resloveDndStyle:J,closeDndStyle:N,destoryDndStyle:P,openMask:f}},"./src/pages/modules/media_dialog/image_dialog/image_content/image_content.js":function(E,v,l){function D(f){return R(f)||M(f)||V(f)||j()}function j(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function V(f,m){if(f){if("string"==typeof f)return H(f,m);var I={}.toString.call(f).slice(8,-1);return"Object"===I&&f.constructor&&(I=f.constructor.name),"Map"===I||"Set"===I?Array.from(f):"Arguments"===I||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)?H(f,m):void 0}}function M(f){if("undefined"!=typeof Symbol&&null!=f[Symbol.iterator]||null!=f["@@iterator"])return Array.from(f)}function R(f){if(Array.isArray(f))return H(f)}function H(f,m){(null==m||m>f.length)&&(m=f.length);for(var I=0,N=Array(m);I<m;I++)N[I]=f[I];return N}var B=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");l("./src/3rd/jquery/jquery.2.1.4.js");l("./src/pages/modules/media_dialog/image_dialog/image_crop/image_crop.less");var F=l("./src/pages/modules/media_dialog/image_dialog/image_content/image_content.tpl");function q(f,m){for(var I=0,N=f.length;I<N;I++){if(f[I].url===m){return I}}return-1}B.component("mp-image-content",{template:F,props:{imgUrls:{type:Array,default:function f(){return[]}},maxselect:{type:Number,default:1},hasVideoCover:{type:Boolean,default:false},needRestrict:{type:Boolean,default:true},selectedImgs:{type:Array,default:function f(){return[]}}},data:function f(){return{noImgShow:true,imgInfo:[]}},mounted:function f(){this.getContentImg(this.imgUrls)},methods:{getContentImg:function f(m){var I=this;m.forEach(function(N,J){var P=new window.Image;P.onload=function K(){this.onload=null;var se=I.needRestrict?this.width>=200&&this.height>=200:true;I.imgInfo.push({order:J,isRemote:N.isRemote,uid:N.uid,url:N.url,fileId:N.fileId||"",show:se,selected:false,format:I.getFormat(N.url),aiImageId:N.aiImageId});I.sortImgInfo();if(se)I.noImgShow=!se};P.src=N.url})},selectImg:function f(m){var I=Object.assign({},this.imgInfo[m]);var N=[];if(I.selected){this.imgInfo[m].selected=false;var J=q(this.selectedImgs,this.imgInfo[m].url);N=D(this.selectedImgs);if(J>=0){N.splice(J,1)}this.$emit("select-change",N)}else if(this.maxselect===1){this.imgInfo=this.imgInfo.map(function(P,K){if(K===m){P.selected=true}else{P.selected=false}return P});I.selected=true;N.push(I);this.$emit("select-change",N)}else if(this.selectedImgs.length<this.maxselect){this.imgInfo[m].selected=true;N=[].concat(D(this.selectedImgs),[this.imgInfo[m]]);this.$emit("select-change",N)}},getFormat:function f(m){return m.substring(m.search("wx_fmt=")).split("=")[1]},sortImgInfo:function f(){this.imgInfo=this.imgInfo.sort(function(m,I){return m.order-I.order})}}})},"./src/pages/modules/media_dialog/image_dialog/image_content/image_content.tpl":function(E,v){E.exports=`<div class="img_crop_panel">
  <div class="appmsg_conent_img_container">
      <div v-if="!imgInfo || imgInfo.length <= 0 || noImgShow" class="page_msg large simple default">
        <div class="inner">
          <span class="msg_icon_wrp"><i class="icon_msg info"></i></span>
          <div class="msg_content" v-if="hasVideoCover">
            <h4>\u6B63\u6587\u4E2D\u65E0\u53EF\u7528\u505A\u5C01\u9762\u7684\u56FE\u7247\u548C\u89C6\u9891\u5C01\u9762</h4>
            <p class="msg_content__desc">\u8BF7\u5728\u6B63\u6587\u4E2D\u63D2\u5165\u56FE\u7247\u6216\u89C6\u9891\u540E\u518D\u9009\u62E9\u5C01\u9762\u56FE\u7247<span v-if="needRestrict">\uFF0C\u56FE\u7247\u5C3A\u5BF8\u9700\u5927\u4E8E200*200px</span></p>
          </div>
          <div class="msg_content" v-else>
            <h4>\u6B63\u6587\u4E2D\u65E0\u53EF\u7528\u505A\u5C01\u9762\u7684\u56FE\u7247</h4>
            <p class="msg_content__desc">\u5C01\u9762\u56FE\u7247\u5FC5\u987B\u4E3A\u6B63\u6587\u4E2D\u4F7F\u7528\u8FC7\u7684\u56FE\u7247\uFF0C<span v-if="needRestrict">\u56FE\u7247\u5C3A\u5BF8\u9700\u5927\u4E8E200*200px\uFF0C</span>\u8BF7\u5728\u6B63\u6587\u4E2D\u63D2\u5165\u56FE\u7247\u540E\u518D\u9009\u62E9\u5C01\u9762\u56FE\u7247</p>
          </div>
        </div>
      </div>
      <div v-else class="appmsg_content_img_hd">
        <p class="appmsg_content_img_desc" v-if="hasVideoCover">\u8BF7\u4ECE\u6B63\u6587\u63D2\u5165\u7684\u56FE\u7247\u548C\u89C6\u9891\u5C01\u9762\u4E2D\u9009\u62E9\u5C01\u9762<span v-if="needRestrict" class="appmsg_content_img_tips">\u5C3A\u5BF8\u5C0F\u4E8E200*200\u7684\u56FE\u7247\u5DF2\u88AB\u81EA\u52A8\u8FC7\u6EE4</span></p>
        <p class="appmsg_content_img_desc" v-else>\u8BF7\u4ECE\u6B63\u6587\u4F7F\u7528\u8FC7\u7684\u56FE\u7247\u4E2D\u9009\u62E9\u5C01\u9762<span v-if="needRestrict" class="appmsg_content_img_tips">\u5C3A\u5BF8\u5C0F\u4E8E200*200\u7684\u56FE\u7247\u5DF2\u88AB\u81EA\u52A8\u8FC7\u6EE4</span></p>
      </div>
      <ul class="appmsg_content_img_list" v-show="imgInfo.length > 0">
        <li v-for="(info, i) in imgInfo" :class="['appmsg_content_img_item', !!info.isRemote ? 'loading_item' : '', !!info.selected ? 'selected' : '']" @click="selectImg(i)">
          <div v-if="info.show">
            <span class="appmsg_content_img cover" :data-remoteid="!!info.isRemote&&!!info.uid ? info.uid : ''" :style="'background-image:url(' + info.url + ');'"></span>
            <div class="card_mask_global apmsg_content_img_mask">
              <i class="icon_card_selected_global"></i>
            </div>
            <!-- \u5982\u679C\u56FE\u7247\u8FD8\u4E0D\u80FD\u6DFB\u52A0 -->
            <div v-if="!!info.isRemote" class="card_mask_global apmsg_content_loading_mask">
              <i class="icon32_loading dark"></i>
              <span class="vm_box"></span>
            </div>
          </div>
          <div v-else>
          </div>
        </li>
      </ul>
  </div>
</div>`},"./src/pages/modules/media_dialog/image_dialog/image_dialog.js":function(E,v,l){function D(r){"@babel/helpers - typeof";return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},D(r)}var j=typeof arguments==="undefined"?void 0:arguments,V=this;function M(r){return F(r)||B(r)||H(r)||R()}function R(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function H(r,i){if(r){if("string"==typeof r)return q(r,i);var u={}.toString.call(r).slice(8,-1);return"Object"===u&&r.constructor&&(u=r.constructor.name),"Map"===u||"Set"===u?Array.from(r):"Arguments"===u||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)?q(r,i):void 0}}function B(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function F(r){if(Array.isArray(r))return q(r)}function q(r,i){(null==i||i>r.length)&&(i=r.length);for(var u=0,y=Array(i);u<i;u++)y[u]=r[u];return y}function f(r,i){var u=Object.keys(r);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(r);i&&(y=y.filter(function(z){return Object.getOwnPropertyDescriptor(r,z).enumerable})),u.push.apply(u,y)}return u}function m(r){for(var i=1;i<arguments.length;i++){var u=null!=arguments[i]?arguments[i]:{};i%2?f(Object(u),true).forEach(function(y){I(r,y,u[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(u)):f(Object(u)).forEach(function(y){Object.defineProperty(r,y,Object.getOwnPropertyDescriptor(u,y))})}return r}function I(r,i,u){return(i=N(i))in r?Object.defineProperty(r,i,{value:u,enumerable:true,configurable:true,writable:true}):r[i]=u,r}function N(r){var i=J(r,"string");return"symbol"==D(i)?i:i+""}function J(r,i){if("object"!=D(r)||!r)return r;var u=r[Symbol.toPrimitive];if(void 0!==u){var y=u.call(r,i||"default");if("object"!=D(y))return y;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(r)}var P=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");l("./src/pages/modules/upload/item.js");l("./src/pages/modules/upload/upload.js");l("./src/pages/modules/search_autocomplete/search_autocomplete.js");l("./src/pages/modules/media_dialog/common/media_dialog.less");l("./src/pages/modules/media_dialog/image_dialog/image_dialog.less");l("./src/pages/modules/media_dialog/image_dialog/image_edit/image_edit.js");l("./src/pages/modules/media_dialog/image_dialog/image_content/image_content.js");l("./src/pages/modules/media_dialog/image_dialog/image_recommend/image_recommend.js");l("./src/3rd/jquery/jquery.2.1.4.js");var K=l("./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js");var se=l("./src/pages/modules/media_dialog/image_dialog/image_dialog.tpl");var T=l("./src/pages/modules/media_dialog/image_dialog/report/report.js");var n=l("./src/pages/modules/utils/url.js");var h=l("./src/pages/modules/media_dialog/image_dialog/image_dialog_store.js");var G=l("../../packages/mmbizweb-web2-common/editor/common/eventbus.js");var Q=l("./src/pages/modules/utils/url.js").fullUrl;var ee=l("./src/pages/modules/media_dialog/image_dialog/imageDialogDndStyle.js"),X=ee.resloveDndStyle,oe=ee.destoryDndStyle;l("../../packages/mmbizweb-web2-common/biz_common/utils/string/html.js");var ne=window.$;var te=K.createNamespacedHelpers;var fe=te(h.moduleName),ue=fe.mapState,ye=fe.mapActions;var Te="hideRencentUsedTips";var ke=["Pexels","Pixabay"];var Ie={1:"Pexels",3:"APE\u56FE\u5E93",4:"Pixabay",5:"\u516C\u4F17\u5E73\u53F0",100:"AI\u751F\u6210"};function w(r,i){if(!r){return 0}r=r.cloneNode(true);r.style.visibility="hidden";document.body.appendChild(r);var u=0;var y=r.offsetHeight;if(i){var z=parseInt(window.getComputedStyle(r).marginTop,10);var Y=parseInt(window.getComputedStyle(r).marginBottom,10);u+=z+Y+y}else{u+=y}document.body.removeChild(r);r.style.visibility="visible";return u}function _(r,i){for(var u=0,y=r.length;u<y;++u){if(String(r[u].fileId)===String(i))return u}return-1}function c(r,i){var u=-1;if(r.length>=0){u=_(r,i.fileId)}if(u!==-1){return r[u].selected}else{return false}}var A=function r(i,u){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(!i||!u)return false;var z=i.getBoundingClientRect();var Y=u.getBoundingClientRect();return z.top<=Y.bottom-y};var b=function r(i,u,y){var z;var Y;var $;var ie=null;var pe=0;var be=function ge(){pe=new Date;ie=null;$=i.apply(z,Y)};return function(){var ge=new Date;if(!pe&&y===false)pe=ge;var he=u-(ge-pe);z=V;Y=j;if(he<=0){clearTimeout(ie);ie=null;pe=ge;$=i.apply(z,Y)}else if(!ie){ie=setTimeout(be,he)}return $}};var S=function r(i){if(wx.cgiData.can_use_new_draft===1){if(i!==-1){return true}}return false};P.component("mp-image-dialog",{name:"mp-image-dialog",template:se,model:{prop:"value",event:"visible-change"},props:{value:{type:Boolean,default:false},title:{type:String,default:"\u9009\u62E9\u56FE\u7247"},scene:{type:String,default:"cdn"},maxselect:{type:Number,default:1},defaultgroup:{type:Number,default:0},fromcontent:{type:Boolean,default:false},fromrecommend:{type:Boolean,default:false},vid:{type:[String,Number],default:""},contentRestrict:{type:Boolean,default:true},contentVideoCover:{type:Boolean,default:false},contentimgUrls:{type:Array,default:function r(){return[]}},uploadscene:{type:Number,default:0},uploadgroup:{type:Number,default:1},step:{type:Number,default:1},crop:{type:Boolean,default:false},cropOnly:{type:Boolean},ratio:{type:Array,default:function r(){return[]}},extraopt:{type:Object},cropInfo:{type:Array,default:function r(){return[]}},src:{type:String,default:""},actionScene:{type:Number,default:5},text:{type:Boolean},textInfo:{type:Object},cropScene:{type:String,default:""},usePublicPic:{type:Boolean,default:false},btnTextStep1:{type:String,default:""},fromSelectCover:{type:Boolean,default:false}},data:function r(){this._imageEditInfo={};var i=n.parseQuery(location.href)||{},u=i.token,y=i.lang;return{lang:y,token:u,setWaterUrl:"/cgi-bin/settingpage?t=setting/function&action=function&set_water=1",dialogShow:this.value,imgItemHeight:158,oriListHeight:0,lastListHeight:0,dialogStyle:{height:""},dndContainerStyle:{height:"",width:"",left:"",top:""},dialogHeight:0,curPerpage:12,addGroupFormRules:{groupName:[{required:true,message:"\u5206\u7EC4\u540D\u4E3A1-6\u4E2A\u5B57\u7B26",trigger:"blur"},{max:6,message:"\u5206\u7EC4\u540D\u4E3A1-6\u4E2A\u5B57\u7B26",trigger:["change","blur"]}]},uploadSuccessNum:0,hideRencentUsedTips:localStorage.getItem(Te)==="1",serviceProviders:function(){return ke.join("\u3001")}(),searchKeyword:"",publicPicShapes:[{label:"\u4E0D\u9650\u6BD4\u4F8B",value:0},{label:"\u6B63\u65B9\u5F62",value:3},{label:"\u7AD6\u56FE",value:2},{label:"\u6A2A\u56FE",value:1}],maxHistoryTagSize:10,selectedType:0,isGalleryShow:false,selectedPublicImg:[],isPublicGalleryShow:false,selectedPublicGalleryIdx:0,throttlePageScroll:b(this.pageScroll,200),throttleWindowResize:b(this.onWindowResize,500),coverTextInfo:this.text?JSON.parse(JSON.stringify(this.textInfo)):null,imageUploadDnd:wx.cgiData.can_use_new_draft===1?"#image_upload_dnd_wrp":"",coverDndLock:false,dndContainerTextStyle:{},canUseAiImg:!!wx.cgiData.can_show_ai_gen_pic,nickname:(wx.commonData.data.nick_name||"").htmlDecode(),alias:(wx.commonData.data.alias||"").htmlDecode(),waterUrl:Q("/cgi-bin/settingpage?action=function&set_water=1")}},computed:m({disable:function r(){return this.selectedImgs.filter(function(i){return i.selected}).length<=0},canSelect:function r(){return this.selectedImgs.length<this.maxSelect||this.maxSelect===1},uploadQuery:function r(){var i={writetype:"doublewrite",groupid:this.selectedGroup?this.selectedGroup:this.uploadgroup};if(this.uploadscene){i.scene=this.uploadscene}return i},btnInnerTextStep1:function r(){if(this.btnTextStep1)return this.btnTextStep1;return this.crop?"\u4E0B\u4E00\u6B65":"\u786E\u5B9A"}},ue(["innerStep","currentPage","perpage","maxSelect","waterStatus","imgs","groups","selectedGroup","selectedImgs","totalnum","cropImg","cropImgInfo","cropperInfo","showLoading","fromUpload","addGroupForm","addGroupPopoverShow","btnLoading","addGroupLoading","groupIdOfUploading","covertingCount","showSelectImg","showPublicPicRules","hasAgreePicRules","showAgreeBtn","agreeBtnLoading","showSearchResult","showSearchLoading","needContinue","canUsePublicPic","historyQueryList","queryAssociationList"])),watch:{value:function r(i){this[i?"show":"hide"]()},convertingCount:function r(i){if(i===0&&this.btnLoading){this.ok()}},cropInfo:function r(i){if(this.crop){this.setCropperInfoAction(JSON.parse(JSON.stringify(i)))}},textInfo:function r(i){if(this.text){this.coverTextInfo=JSON.parse(JSON.stringify(i))}},isGalleryShow:function r(i){if(!i||this.actionScene===3)return;this.$nextTick(this.hackInMpGallery.bind(this,this.selectedPublicImg[0]))},isPublicGalleryShow:function r(i){if(!i||this.actionScene===3)return;this.$nextTick(this.hackInMpGallery.bind(this,this.imgs[this.selectedPublicGalleryIdx]))}},created:function r(){this.changeCovertingCount(0);this.setFromUploadAction();if(this.crop){this.initCropperInfo()}this.__set_state({actionScene:this.actionScene,usePublicPic:this.usePublicPic});if(this.canUsePublicPic&&(this.actionScene===1||this.actionScene===2||this.actionScene===3||this.usePublicPic)){this.loadPublicPics({onlyCheck:true})}},mounted:function r(){var i=this.$refs.dialog;var u=i&&i.$refs.main;var y=u&&u.querySelector(".weui-desktop-dialog");this.dialogHeight=w(y);var z=this.$refs.imgPickerWrapper;this.oriListHeight=w(z,true);this.bindEvent();if(this.dialogShow===true){this.show()}var Y=this.$refs.aiEntry;var $=new IntersectionObserver(function(ie){ie.forEach(function(pe){if(pe.isIntersecting){T.r32580({entry:3,bizuin:wx.cgiData.biz_uin});$.unobserve(Y)}},{threshold:.5})});Y&&$.observe(Y)},destroyed:function r(){window.removeEventListener("resize",this.throttleWindowResize);oe()},methods:m(m({},ye(["__set_state","resetStateAction","setInnerStepAction","setSelectedGroupAction","setSelectedImgsAction","setTotalNumAction","setCurrentPageAction","setCropperInfoAction","setCropImgInfoAction","setCropImgAction","setFromUploadAction","updateGroups","changeCovertingCount","formatData","selectImg","selectGroup","getImagesByBegin","createGroup","pageChange","selectedPageChange","getContentImg","addImgs","removeImgs","changeViewToSelectedImg","changeViewToAllImg","setTotalNumById","resetSelectedImgs","agreeStatement","loadPublicPics","star","searchQueryRecommend","deleteQueryHistory"])),{},{uploaderInitFinish:function r(){if(this.extraopt&&this.extraopt.action==="dragAndDrop"&&!this.coverDndLock){var i=this.extraopt.mouseEvent;var u="#image_upload_dnd_wrp";ne(u).trigger("coverdrop",i);this.coverDndLock=true}},closeRecentUsedTips:function r(){this.hideRencentUsedTips=true;localStorage.setItem(Te,"1")},bindEvent:function r(){window.addEventListener("resize",this.throttleWindowResize);if(S(this.selectedGroup)){X()}},computeDndSize:function r(i){var u=document.getElementsByClassName("weui-desktop-grid__item")[1];if(!u)return;var y=u.getBoundingClientRect();var z;if(i){z=i}else{z=this.lastListHeight}this.dndContainerStyle={height:z+30+36+"px",width:y.right-y.left-30+"px",left:y.left+"px",top:y.top+"px"};this.dndContainerTextStyle={height:this.dndContainerStyle.height,width:this.dndContainerStyle.width}},onWindowResize:function r(){if(!this.fromcontent&&this.calculatePerpage({})&&this.selectedGroup!==-1){this.refreshData()}},initStateAction:function r(){this.__set_state({scene:this.scene,maxSelect:this.maxselect})},calculatePerpage:function r(i){var u=i.minHeight,y=i.groupId;this.imgItemHeight=y===-1||typeof y==="undefined"&&this.selectedGroup===-1?191:158;var z=false;this.dialogStyle.height="0px";if(this.dialogHeight===0){return false}var Y=u||window.innerHeight-this.dialogHeight+this.oriListHeight;var $=Math.floor(Y/this.imgItemHeight);$=$<2?2:$;if(Y/this.imgItemHeight-$!==0){Y=this.imgItemHeight*$}if(this.lastListHeight!==Y||u){z=true}this.__set_state({perpage:$*6});(y===-1||typeof y==="undefined"&&this.selectedGroup===-1)&&(Y+=100);this.lastListHeight=Y;this.dialogStyle.height="".concat(Y,"px");this.computeDndSize(Y);this.__set_state({imgsWrapperHeight:Y});return z},show:function r(){this.initStateAction();this.oldCropImgInfo=JSON.parse(JSON.stringify(this.cropImgInfo));this.oldCropperInfo=JSON.parse(JSON.stringify(this.cropperInfo));this.oldCropImg=this.cropImg;this.setCropImgAction({url:this.src||""});this.stepChange(this.step);this.setSelectedGroupAction(this.defaultgroup);this.setCurrentPageAction(1);if(!this.fromcontent){this.calculatePerpage({});this.refreshData()}this.dialogShow=true;this.$emit("visible-change",true)},refreshData:function r(){var i=this;this.__set_state({showLoading:true});var u=(this.currentPage-1)*this.perpage;this.getImagesByBegin(u).then(function(y){i.formatData(Object.assign({},y,{actionScene:i.actionScene})).then(function(){i.__set_state({showLoading:false});i.computeDndSize()}).catch(function(){i.__set_state({showLoading:false})});i.setTotalNumById(y.page_info.file_group_list.file_group)}).catch(function(){i.__set_state({showLoading:false})})},hide:function r(){this.dialogShow=false;this.$emit("visible-change",false);this.resetStateAction()},stepChange:function r(i){this.setInnerStepAction(i);this.$emit("step-change",i)},contentImgChange:function r(i){this.setSelectedImgsAction(i)},initCropperInfo:function r(){if(this.cropInfo&&this.cropInfo.length>0){this.setCropperInfoAction(JSON.parse(JSON.stringify(this.cropInfo)))}else{this.setCropperInfoAction([])}},clickAddGroup:function r(){this.__set_state({addGroupPopoverShow:true})},cancelAddGroup:function r(){this.__set_state({addGroupPopoverShow:false})},groupNameInput:function r(i){this.__set_state({groupName:i})},onImageEdit:function r(i){this._imageEditInfo=i;if(i.cropInfo){this.setCropImgInfoAction(i.cropInfo);this.setCropperInfoAction(i.cropInfo.map(function(u){return u&&u.info}))}},prevStep:function r(){this.stepChange(1);this.setCropImgInfoAction([])},addGroup:function r(){var i=this;this.$refs.addGroupForm.validate(function(u){if(u){i.createGroup({actionScene:i.actionScene})}else{}})},close:function r(){if(this.oldCropImgInfo)this.setCropImgInfoAction(this.oldCropImgInfo);if(this.oldCropperInfo)this.setCropperInfoAction(this.oldCropperInfo);if(this.oldCropImg)this.setCropImgAction(this.oldCropImg);this.oldCropImgInfo=null;this.oldCropperInfo=null;this.oldCropImg=null;this.setCurrentPageAction(1);this.searchKeyword="";this.hide();this.$emit("close")},ok:function r(){var i=this;if(this.scene==="cdn"&&this.covertingCount>0){this.__set_state({btnLoading:true});return}this.__set_state({btnLoading:false});this.resetSelectedImgs();if(!this.crop){if(this.fromSelectCover&&this.selectedImgs[0].format==="gif"){this.$tipsErr("\u5C01\u9762\u56FE\u4E0D\u652F\u6301GIF\uFF0C\u8BF7\u66F4\u6362");return}this.$emit("select",this.selectedImgs.map(function(y){if(i.fromUpload.indexOf(y.fileId+"")!==-1){y.source="upload"}else{y.source="lib"}y.isFromPublic&&T.r21606({bizUin:window.wx.commonData.uin,fileId:y.fileId,supplier:y.supplier,actionScene:i.actionScene,actionType:2,query:i.searchKeyword});return y}));this.hide()}else{if(this.innerStep===1){if(this.selectedImgs[0].format==="gif"){this.$tipsErr("\u5C01\u9762\u56FE\u4E0D\u652F\u6301GIF\uFF0C\u8BF7\u66F4\u6362")}else{this.stepChange(2);this.setCropperInfoAction([]);this.setCropImgAction(this.selectedImgs[0]);if(this.text){this.coverTextInfo=null}}}else{if(!this._imageEditInfo.cropInfo){return}this.stepChange(1);var u=m({},this.cropImg);if(this.fromUpload.indexOf(u.fileId+"")!==-1){u.source="upload"}else{u.source="lib"}this.$emit("select",m({url:u.url,img:u},this._imageEditInfo));u.isFromPublic&&T.r21606({bizUin:window.wx.commonData.uin,fileId:u.fileId,supplier:u.supplier,actionScene:this.actionScene,actionType:2,query:this.searchKeyword});this.hide()}}},uploadSelect:function r(){if(this.uploadscene===3){new Image().src="/mp/jsmonitor?idkey=69271_34_1"}this.__set_state({groupIdOfUploading:this.selectedGroup?this.selectedGroup:this.uploadgroup});this.uploadSuccessNum=0},uploadError:function r(i,u){this.$tipsErr(u||"\u4E0A\u4F20\u5931\u8D25")},uploadProgress:function r(i,u){var y=false;this.imgs.forEach(function(z){if(z.id===i.id){y=true;i=z;return false}return true});i.progress=u*100;i.cdn_url="";if(!y){this.addImgs({item:i,selected:true})}},removeImgItem:function r(i,u){this.removeImgs(u)},uploadComplete:function r(i,u){if(Number(u.base_resp.ret)===0){if(this.uploadscene===3){new Image().src="/mp/jsmonitor?idkey=69271_35_1"}this.$tipsSuc("\u4E0A\u4F20\u6210\u529F");this.setFromUploadAction(u.content);this.uploadSuccessNum++}else{if(this.uploadscene===3){new Image().src="/mp/jsmonitor?idkey=69271_36_1"}}},uploadAllComplete:function r(i){var u=this;i=this.uploadSuccessNum;if(i<=0){return}var y;this.groups.forEach(function(Y,$){if(Y.id===u.groupIdOfUploading){y=$}});if(y>=0){var z=Object.assign({},this.groups[y]);z.count+=i;this.updateGroups({idx:y,item:z})}if(this.groupIdOfUploading!==(this.selectedGroup?this.selectedGroup:this.uploadgroup)){return}this.__set_state({showLoading:true});this.getImagesByBegin(0).then(function(Y){u.formatData(Object.assign({},Y,{actionScene:u.actionScene})).then(function(){u.__set_state({showLoading:false});for(var $=i-1;$>=0;$--){if(u.selectedImgs.length+i<u.maxSelect){u.selectImg({i:$,currentImg:u.imgs[$],forceSelect:true,isFromUpload:true})}else{u.selectImg({i:$,currentImg:u.imgs[$],forceSelect:false,isFromUpload:true})}}var ie=M(u.imgs);ie.forEach(function(pe,be){if(c(u.selectedImgs,pe)){u.selectImg({i:be,currentImg:pe,forceSelect:true,isFromUpload:true})}})}).catch(function(){u.__set_state({showLoading:false})})}).catch(function(){u.__set_state({showLoading:false})})},switchAgreeStatus:function r(i){this.__set_state({hasAgreePicRules:i})},searchPublicPic:function r(i){var u=i.query,y=i.querySource,z=y===void 0?1:y,Y=i.queryRank,$=Y===void 0?0:Y;this.resetLastQueryParams();if(u&&u.length){this.loadPublicPics({query:u,type:this.selectedType,checkExposed:this.pageScroll});T.r21606({bizUin:window.wx.commonData.uin,fileId:"",supplier:0,actionScene:this.actionScene,actionType:0,query:u,querySource:z,queryRank:$});this.queryRecommendWord("");return}this.clearSearchCtx()},queryRecommendWord:function r(i){this.searchQueryRecommend(i)},clearSearchCtx:function r(){if(!this.showSearchResult)return;this.resetLastQueryParams();this.loadPublicPics({});this.queryRecommendWord("");this.selectedType=0;this.searchKeyword="";this.__set_state({showSearchLoading:false,showSearchResult:false})},deleteHistory:function r(i){this.deleteQueryHistory(i)},clickHistory:function r(i,u){this.searchKeyword=i;this.searchPublicPic({query:i,querySource:2,queryRank:u+1})},changePicShape:function r(i){this.resetLastQueryParams();this.loadPublicPics({query:this.searchKeyword,type:i,checkExposed:this.pageScroll})},pageScroll:function r(){var i=this;if(this.selectedGroup!==-1||this.showPublicPicRules)return;this.$nextTick(function(){if(i.showSearchResult){var u=i.$refs.imgPickerWrapper&&i.$refs.imgPickerWrapper.getBoundingClientRect();i.$refs.publicPicList&&i.$refs.publicPicList.forEach(function(y,z){var Y=y.getBoundingClientRect();if(Y.bottom<=u.bottom&&Y.top>=u.top&&!y.isExposed){y.isExposed=true;T.r21606({bizUin:window.wx.commonData.uin,fileId:i.imgs[z].fileId,supplier:i.imgs[z].supplier,actionScene:i.actionScene,actionType:0,query:i.searchKeyword})}})}if(i.needContinue&&A(i.$refs.searchLoading,i.$refs.imgPickerWrapper,20)){i.loadPublicPics({query:i.searchKeyword,type:i.selectedType,isScroll:true,checkExposed:i.pageScroll})}})},showGallery:function r(i){this.selectedPublicImg.splice(0,1,this.selectedImgs[i]);this.isGalleryShow=true},showPubGallery:function r(i){this.selectedPublicGalleryIdx=i;this.isPublicGalleryShow=true},handlePicIdxChange:function r(i){this.selectedPublicGalleryIdx=i},resetLastQueryParams:function r(){this.__set_state({lastSeq:0,lastLimit:0})},resetLastRecommend:function r(){},switchGroup:function r(i){!!this.searchKeyword&&(this.searchKeyword="");this.calculatePerpage({groupId:i});this.selectGroup({groupId:i,actionScene:this.actionScene});this.refreshDndMask()},refreshDndMask:function r(){var i=document.getElementsByClassName("image_upload_dnd_wrp_mask")[0];ne(i).css("visibility","hidden")},changePage:function r(i){this.pageChange({pages:i,actionScene:this.actionScene})},genAiImage:function r(){var i=this;G.fireEvent("showAiImageDialog",{prompt:this.searchKeyword,entry:"public-pics-search-result",isSetCover:this.actionScene===2||this.actionScene===3,insert:function u(y){i.$emit("select",y);i.hide()}})},hackInMpGallery:function r(i){var u=this;var y=document.querySelector(".mp-gallery");if(!y)return;var z=y.querySelector(".weui-desktop-gallery__opr-list");var Y=document.createElement("ul");Y.className="weui-desktop-gallery__opr-list";var $=document.createElement("li");$.className="weui-desktop-gallery__opr-item";$.innerHTML="<a class='weui-desktop-gallery__opr-btn weui-desktop-gallery__opr-ai' href='javascript:;'>AI\u6362\u98CE\u683C</a>";$.onclick=function(){G.fireEvent("showAiImageDialog",{publicPicUrl:i.url,publicPicId:i.fileId,entry:"public-pics-ai-change-style",isSetCover:u.actionScene===2||u.actionScene===3,insert:function be(ge){u.$emit("select",ge);u.hide()}});T.r21606({actionType:3,fileId:i.fileId,supplier:i.supplier,query:u.searchKeyword,actionScene:u.actionScene,bizUin:window.wx.commonData.uin})};Y.appendChild($);z.parentNode.insertBefore(Y,z);var ie=document.createElement("ul");ie.className="weui-desktop-gallery__opr-list";var pe=document.createElement("li");pe.className="weui-desktop-gallery__opr-item";pe.innerHTML="<a class='weui-desktop-gallery__opr-btn weui-desktop-gallery__opr-feedback' href=/cgi-bin/mpaigenpic?action=get_pic_report_info&token=".concat(this.token,"&lang=").concat(this.lang,"&pic_url=").concat(encodeURIComponent(i.url)," target='_blank'>\u95EE\u9898\u53CD\u9988</a>");ie.appendChild(pe);z.parentNode.insertBefore(ie,z.nextSibling)}}),filters:{getSelectedImgLength:function r(i){return i.filter(function(u){return u.selected}).length},formatProvider:function r(i){if(+i===100)return Ie[i];return Ie[i]?"".concat(Ie[i],"\u63D0\u4F9B"):"\u672A\u77E5\u63D0\u4F9B\u65B9"},formatUrlList:function r(i){return i.map(function(u){var y=u.externalUrl?u.externalUrl:u.mediumUrl;return{src:y,oriSrc:y}})}}})},"./src/pages/modules/media_dialog/image_dialog/image_dialog.less":function(E,v,l){"use strict";l.r(v)},"./src/pages/modules/media_dialog/image_dialog/image_dialog.tpl":function(E,v){E.exports=`<mp-dialog
  weui="true"
  ref="dialog"
  :title="title"
  v-model="dialogShow"
  :wrap-class="crop ? 'weui-desktop-dialog_img-picker weui-desktop-dialog_img-picker-with-crop' : 'weui-desktop-dialog_img-picker'"
  @close="close"
  rootElm="#vue_app"
>
  <!-- \u6B65\u9AA4\u6761 -->
  <mp-step v-if="crop && cropScene !== 'imageArticleCoverModify'" :step="innerStep">
    <mp-step-item v-if="fromcontent" title="\u4ECE\u6B63\u6587\u9009\u62E9\u5C01\u9762"></mp-step-item>
    <mp-step-item v-else title="\u9009\u62E9\u5C01\u9762"></mp-step-item>
    <mp-step-item title="\u7F16\u8F91\u5C01\u9762"></mp-step-item>
  </mp-step>

  <!-- \u6B63\u6587\u9009\u62E9\u56FE\u7247 -->
  <template v-if="fromcontent">
    <mp-image-content v-show="innerStep === 1" :img-urls="contentimgUrls" :maxselect="maxselect" :need-restrict="contentRestrict" :has-video-cover="contentVideoCover" :selected-imgs="selectedImgs" @select-change="contentImgChange"></mp-image-content>
  </template>
  <template v-else-if="fromrecommend">
    <mp-image-recommend v-show="innerStep === 1" :ratio="ratio" :vid="vid" :maxselect="maxselect" :selected-imgs="selectedImgs" @select-change="contentImgChange"></mp-image-recommend>
  </template>
  <!-- \u56FE\u7247\u5E93\u9009\u62E9\u56FE\u7247 -->
  <template v-else>
    <div v-show="innerStep === 1" class="weui-desktop-step__panel weui-desktop-step__panel">
      <div class="weui-desktop-img-picker weui-desktop-grid">
        <!-- \u5DE6\u4FA7\u5206\u7EC4\u5217\u8868\u533A\u57DF -->
        <div class="weui-desktop-grid__item weui-desktop-img-category">
          <ul class="weui-desktop-menu">
            <li v-for="(group, i) in groups" class="weui-desktop-menu__item" @click="switchGroup(group.id)">
              <a href="javascript:;" :class="['weui-desktop-menu__link', { 'weui-desktop-menu__link_current': selectedGroup === group.id }, { 'weui-desktop-menu__link-self': (group.id !== 0 && group.id !== 4 && group.id !== -1) }]">
                <strong class="weui-desktop-img-category__title">{{group.name}}</strong>
                <em v-show="group.id !== -1" class="weui-desktop-img-category__size">&#40;{{group.count}}&#41;</em>
              </a>
            </li>
          </ul>
          <div class="weui-desktop-img-category__add">
            <mp-popover position="down-left" ref="addGroupPopover" :value="addGroupPopoverShow">
              <a slot="target" href="javascript:;" @click.prevent="clickAddGroup">\u65B0\u5EFA\u5206\u7EC4</a>
              <div slot="content">
                <mp-form ref="addGroupForm" :model="addGroupForm" weui="true" :rules="addGroupFormRules" @submit.native.prevent>
                  <mp-form-item prop="groupName">
                    <template slot="label">\u521B\u5EFA\u5206\u7EC4</template>
                    <mp-input name="group_name" v-model="addGroupForm.groupName"  @input="groupNameInput"></mp-input>
                  </mp-form-item>
                </mp-form>
              </div>
              <div slot="bar">
                <mp-button type="primary" :loading="addGroupLoading" @click="addGroup">\u786E\u5B9A</mp-button>
                <mp-button type="default" @click="cancelAddGroup">\u53D6\u6D88</mp-button>
              </div>
            </mp-popover>
          </div>
        </div>

        <!-- \u53F3\u4FA7\u5185\u5BB9\u533A\u57DF -->
        <div class="weui-desktop-grid__item">
          <div class="weui-desktop-img-picker__list__area">
            <!-- [\u6700\u8FD1\u4F7F\u7528]\u5206\u7EC4\u7684\u9876\u90E8\u63D0\u793A\u533A -->
            <div class="weui-desktop-global-mod" v-if="selectedGroup === 0">
              <template>
                <div v-if="!hideRencentUsedTips" class="weui-desktop-msg weui-desktop-msg_mini weui-desktop-msg_title-only  weui-desktop-msg_temp" style="background:#F1F3F5;margin: 8px 16px;">
                  <div class="weui-desktop-msg__inner">
                    <span class="weui-desktop-msg__hd">
                      <i class="weui-desktop-icon-info weui-desktop-icon_msg"></i>
                    </span>
                    <div class="weui-desktop-msg__bd">
                      <h4 class="weui-desktop-msg__title" style="padding-right: 2px;">\u539F\u201C\u516C\u5171\u56FE\u7247\u5E93\u201D\u5DF2\u4E0B\u7EBF\uFF0C\u63A8\u8350\u60A8\u4F7F\u7528\u201C<a style="cursor: pointer" @click="genAiImage">AI \u914D\u56FE</a>\u201D\uFF0C\u627E\u5230\u66F4\u591A\u56FE\u7247 </h4>
                      <span class="weui-desktop-msg__close-btn" style="top: 50%;transform: translateY(-50%);" @click="closeRecentUsedTips">\u5173\u95ED</span>
                    </div>
                  </div>
                </div>
              </template>
            </div>
            <!-- [\u6700\u8FD1\u4F7F\u7528]\u5206\u7EC4\u7684\u9876\u90E8\u63D0\u793A\u533A -->
            <div class="weui-desktop-global-mod" v-if="selectedGroup === 4">
              <template>
                <div v-if="!hideRencentUsedTips" class="weui-desktop-msg weui-desktop-msg_mini weui-desktop-msg_title-only  weui-desktop-msg_temp" style="background:#F1F3F5;margin: 8px 16px;">
                  <div class="weui-desktop-msg__inner">
                    <span class="weui-desktop-msg__hd">
                      <i class="weui-desktop-icon-info weui-desktop-icon_msg"></i>
                    </span>
                    <div class="weui-desktop-msg__bd">
                      <h4 class="weui-desktop-msg__title" style="padding-right: 2px;">\u56FE\u7247\u7D20\u6750\u65B0\u589E\u7CFB\u7EDF\u5206\u7EC4\u201C\u6700\u8FD1\u4F7F\u7528\u201D(\u4E0A\u9650500\u5F20)\uFF0C\u539F\u7CFB\u7EDF\u5206\u7EC4\u201C\u6587\u7AE0\u914D\u56FE\u201D\u4E0D\u518D\u81EA\u52A8\u6DFB\u52A0\u56FE\u7247\uFF0C\u4F60\u53EF\u81EA\u884C\u5220\u9664\u6B64\u5206\u7EC4\u6216\u79FB\u52A8\u6B64\u5206\u7EC4\u91CC\u7684\u5386\u53F2\u56FE\u7247\u3002</h4>
                      <span class="weui-desktop-msg__close-btn" style="top: 50%;transform: translateY(-50%);" @click="closeRecentUsedTips">\u5173\u95ED</span>
                    </div>
                  </div>
                </div>
              </template>
            </div>

            <!-- \u4E0A\u4F20\u7EC4\u4EF6 -->
            <div v-else-if="selectedGroup !== -1" class="weui-desktop-global-mod  weui-desktop-media-global-bar">
              <div class="weui-desktop-global__extra">
                <!-- \u8FD9\u91CC\u4E0D\u5BF9\u4E0A\u4F20\u5F20\u6570\u505A\u9650\u5236\uFF0C\u6240\u4EE5maxfilenum\u4F209999 -->
                <mp-upload :key="selectedGroup" simple url="uploadImageLibFile" :maxfilenum="9999" extclass="weui-desktop-upload_global-media" multi :maxsize="10*1024*1024" extensions="bmp,png,jpeg,jpg,gif,webp" mimetype="image/bmp, image/png, image/jpeg, image/jpg, image/gif, image/webp" :query="uploadQuery" :select="uploadSelect" @error="uploadError" @uploaderfinish="uploaderInitFinish" @progress="uploadProgress" @complete="uploadComplete" @allcomplete="uploadAllComplete" :preview="null" :dnd="imageUploadDnd" ref="mpuploadChild">
                  <template slot="tips">
                    <span class="weui-desktop-tips weui-desktop-tips_icon-after">
                      <!-- <template v-if="$slots.uploadTips && $slots.uploadTips.length > 0">
                        <slot name="uploadTips"></slot>
                      </template> -->
                      <template v-if="waterStatus === 3">\u5DF2\u5173\u95ED\u56FE\u7247\u6C34\u5370</template>
                      <template v-else>\u6C34\u5370\uFF1A{{ waterStatus === 1 ? alias : nickname }}</template>
                      <mp-popover wrap-class="img_water" trigger="hover">
                        <i class="icon-svg-common-ask" slot="target"></i>
                        <div slot="content">
                          <p v-if="waterStatus === 3">\u4E0D\u6DFB\u52A0\u6C34\u5370</p>
                          <p v-else-if="waterStatus === 2">\u6C34\u5370\u7C7B\u578B\uFF1A\u516C\u4F17\u53F7\u540D\u79F0</p>
                          <p v-else-if="waterStatus === 1">\u6C34\u5370\u7C7B\u578B\uFF1A\u5FAE\u4FE1\u53F7</p>
                          <p style="color: rgb(151,164,164);">
                            <span v-if="waterStatus === 3">\u5DF2\u5173\u95ED\u6C34\u5370\uFF0C\u6240\u6709\u4E0A\u4F20\u7684\u56FE\u7247\u90FD\u4E0D\u4F1A\u5E26\u6709\u6C34\u5370\u3002</span>
                            <span v-else>\u5DF2\u6253\u5F00\u6C34\u5370\uFF0C\u5728\u5FAE\u4FE1\u5185\u6D4F\u89C8\u56FE\u7247\u65F6\uFF0C\u4E0D\u5C55\u793A\u6C34\u5370\uFF1B\u5728\u5FAE\u4FE1\u5185\u4FDD\u5B58\u56FE\u7247\u65F6\uFF0C\u4F1A\u81EA\u52A8\u6DFB\u52A0\u6C34\u5370\u3002</span>
                            <!-- <br/> -->
                            <span>\u82E5\u9700\u4FEE\u6539\u8BF7\u524D\u5F80<a target="_blank" :href="waterUrl">\u8D26\u53F7\u8BBE\u7F6E/\u529F\u80FD\u8BBE\u7F6E</a>\u8BBE\u7F6E\u56FE\u7247\u6C34\u5370\u3002</span>
                          </p>
                          <!-- <p style="color: rgb(151,164,164);">
                            <span v-if="waterStatus === 3">\u5DF2\u5173\u95ED\u6C34\u5370\uFF0C\u6240\u6709\u4E0A\u4F20\u7684\u56FE\u7247\u90FD\u4E0D\u4F1A\u5E26\u6709\u6C34\u5370\u3002</span>
                            <span v-else>\u5DF2\u5F00\u542F\u6C34\u5370\uFF0C\u6240\u6709\u4E0A\u4F20\u7684\u56FE\u7247\u90FD\u4F1A\u5E26\u6709\u6C34\u5370\u3002</span>
                            \u82E5\u9700\u4FEE\u6539\u8BF7\u524D\u5F80<a target="_blank" :href="setWaterUrl">\u8D26\u53F7\u8BBE\u7F6E/\u529F\u80FD\u8BBE\u7F6E</a>\u8BBE\u7F6E\u56FE\u7247\u6C34\u5370
                          </p> -->
                        </div>
                      </mp-popover>
                    </span>
                  </template>
                </mp-upload>
              </div>
            </div>

            <!-- \u516C\u5171\u56FE\u7247\u5E93\u641C\u7D22\u7ED3\u679C\u9875\u641C\u7D22\u7EC4\u4EF6 -->
            <div v-show="selectedGroup === -1 && showSearchResult">
              <div class="weui-desktop-img-public__search-wrp">
                <mp-search-autocomplete
                  v-model="searchKeyword"
                  class="weui-desktop-img-public__searching"
                  placeholder="\u8F93\u5165\u5173\u952E\u8BCD\u67E5\u627E\u56FE\u7247"
                  :association-words="queryAssociationList"
                  :clear="true"
                  @search="searchPublicPic"
                  @fetch-associations="queryRecommendWord"
                  @clear="clearSearchCtx">
                </mp-search-autocomplete>

                <mp-dropdown
                  v-model="selectedType"
                  class="weui-desktop-img-public__filter_shape"
                  :options="publicPicShapes"
                  @change="changePicShape"></mp-dropdown>

                <div class="weui-desktop-img-public__rules">
                  <i class="weui-desktop-document_link"></i>
                  <a href="https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11608199766csKQC&version=1&lang=zh_CN&platform=2" target="_blank">\u516C\u5171\u56FE\u7247\u5E93\u4F7F\u7528\u6761\u6B3E</a>
                </div>
              </div>

              <div v-if="canUseAiImg" class="img-public__ai-entry" ref="aiEntry">
                <span>\u6CA1\u6709\u627E\u5230\u6EE1\u610F\u7684\u56FE\u7247\uFF1F</span>
                <span @click="genAiImage">\u8BD5\u8BD5<strong class='link_text'>AI\u914D\u56FE</strong></span>
              </div>
            </div>

            <div ref="imgPickerWrapper" :class="['weui-desktop-media-list-wrp', { 'weui-desktop-img-picker__list__wrp': !showSearchResult, 'mb-40': showPublicPicRules }]" :style="dialogStyle" @scroll="throttlePageScroll" id="js_image_dialog_list_wrp">

              <div v-if="showLoading && selectedGroup !== -1" class="weui-desktop-loadmore img-list__tips">
                <i class="weui-desktop-loading"></i>
              </div>
              <div v-else-if="(showSelectImg ? selectedImgs.length === 0 : imgs.length === 0) && selectedGroup !== -1" class="img-list__tips">\u6682\u65E0\u6570\u636E</div>
              <div v-else class="weui-desktop-img-picker__list">
                <!-- \u5DF2\u9009\u62E9\u7684\u56FE\u7247\u7D20\u6750 BEGIN -->
                <template v-if="showSelectImg">
                  <div v-for="(img, i) in selectedImgs" v-if="i < perpage" :key="img.fileId" :class="['weui-desktop-img-picker__item', { selected : img.selected }]" @click.stop.prevent="selectImg({i: i, currentImg: img})">
                    <template v-if="!img.loading && !img.msg">
                      <i role="img" aria-describedby="\u56FE\u7247\u63CF\u8FF0" title="\u56FE\u7247\u63CF\u8FF0" class="weui-desktop-img-picker__img-thumb" :style="img.mediumUrl ? 'background-image: url(' + img.mediumUrl + ');' : 'background-image: url(' + img.url + ');'"></i>

                      <span v-show="maxSelect > 1" :class="['image_dialog__checkbox', img.selected ? 'selected' : '']"></span>
                      <!-- \u53F3\u4E0A\u89D2\u7684\u6700\u5927\u5316 icon (\u53EA\u6709\u516C\u5171\u56FE\u7247\u5E93\u7684\u56FE\u7247\u624D\u6709) -->
                      <mp-tooltip v-if="img.isFromPublic" class="weui-desktop-img-public__star-bg r-42 no-visible" content="\u67E5\u770B\u5927\u56FE">
                        <span class="weui-desktop-img-public__bg" slot="target" @click.stop="showGallery(i)">
                          <i class="weui-desktop-img-public__common-icon weui-desktop-img-public__max-icon"></i>
                        </span>
                      </mp-tooltip>
                      <!-- \u53F3\u4E0A\u89D2\u7684\u6536\u85CF icon (\u53EA\u6709\u516C\u5171\u56FE\u7247\u5E93\u7684\u56FE\u7247\u624D\u6709) -->
                      <mp-tooltip v-if="img.isFromPublic" :class="['weui-desktop-img-public__star-bg', { 'no-visible': !img.isFavor }]" :content="img.isFavor ? '\u53D6\u6D88\u6536\u85CF' : '\u6536\u85CF'">
                        <span class="weui-desktop-img-public__bg" slot="target" @click.stop="star({imgList: selectedImgs, idx: i, query: searchKeyword})">
                          <i :class="['weui-desktop-img-public__common-icon', img.isFavor ? 'weui-desktop-img-public__star-icon' : 'weui-desktop-img-public__unstar-icon']"></i>
                        </span>
                      </mp-tooltip>

                      <!-- \u56FE\u7247\u540D\u79F0 -->
                      <div :class="['weui-desktop-img-picker__img-title', { 'df': img.isFromPublic }]">
                        <div
                          v-if="img.isFromPublic"
                          :class="[
                            {'weui-desktop-img-public__provider-logo': img.supplier !== 100 },
                            { pexels: img.supplier === 1 },
                            { pickfoto: img.supplier === 3 },
                            { pixababy: img.supplier === 4 },
                            { tencent: img.supplier === 5 }
                          ]"
                        ></div>
                        <i v-if="img.copyright_status === 2" class="icon_original accessed"></i>
                        {{img.name}}
                      </div>
                    </template>
                  </div>
                  <!-- \u5DF2\u9009\u62E9\u56FE\u7247\u753B\u5ECA\u7EC4\u4EF6\uFF08\u53EA\u7528\u6765\u5C55\u793A\u516C\u5171\u56FE\u7247\u5E93\u56FE\u7247\uFF09 -->
                  <mp-gallery
                    class="mp-gallery"
                    v-model="isGalleryShow"
                    :imgs="selectedPublicImg | formatUrlList"
                  ></mp-gallery>
                </template>
                <!-- \u5DF2\u9009\u62E9\u7684\u56FE\u7247\u7D20\u6750 END -->

                <!-- \u5206\u7EC4\u5185\u7684\u56FE\u7247\u7D20\u6750\u5217\u8868 BEGIN -->
                <template v-else-if="!showSelectImg && selectedGroup !== -1">
                  <div v-for="(img, i) in imgs" v-if="i < perpage" :key="img.fileId" :class="['weui-desktop-img-picker__item', { selected : img.selected, disabled: !img.selected && !canSelect }]" @click.stop.prevent="selectImg({i: i, currentImg: img})">
                    <mp-upload-item v-if="img.loading || img.msg" :file="img" @remove="removeImgItem(img, i)"></mp-upload-item>
                    <template v-if="!img.loading && !img.msg">
                      <i role="img" aria-describedby="\u56FE\u7247\u63CF\u8FF0" title="\u56FE\u7247\u63CF\u8FF0" class="weui-desktop-img-picker__img-thumb" :style="img.url?'background-image:url(' + img.url + ');':''">
                        <span v-show="maxSelect > 1" :class="['image_dialog__checkbox', img.selected ? 'selected' : '']"></span>
                      </i>
                      <strong class="weui-desktop-img-picker__img-title"><i v-if="img.copyright_status === 2" class="icon_original accessed"></i>{{img.name}}</strong>
                    </template>
                  </div>
                </template>
                <!-- \u5206\u7EC4\u5185\u7684\u56FE\u7247\u7D20\u6750\u5217\u8868 END -->

                <!-- \u516C\u5171\u56FE\u7247\u5E93 BEGIN -->
                <template v-else="selectedGroup === -1">
                  <!-- \u516C\u5171\u56FE\u7247\u5E93\u4F7F\u7528\u6761\u6B3E -->
                  <template v-if="showPublicPicRules">
                    <p class="weui-desktop-img-public__rules-title">\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u529F\u80FD\u4F7F\u7528\u6761\u6B3E</p>

                    <div class="weui-desktop-img-public__rules-content">
                      <p class="deal_section">\u4E3A\u4F7F\u7528\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u529F\u80FD\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u516C\u5171\u56FE\u7247\u5E93\u201D\uFF09\uFF0C\u4F60\u5E94\u5F53\u9605\u8BFB\u5E76\u9075\u5B88\u300A\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u529F\u80FD\u4F7F\u7528\u6761\u6B3E\u300B\uFF08\u4EE5\u4E0B\u7B80\u79F0\u201C\u672C\u6761\u6B3E\u201D\uFF09\uFF0C\u672C\u6761\u6B3E\u4E3A<a target='_blank' href='https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=1503979103&version=1&lang=zh_CN&platform=2'>\u300A\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u670D\u52A1\u534F\u8BAE\u300B</a>\u7684\u7279\u522B\u529F\u80FD\u670D\u52A1\u6761\u6B3E\u3002</p>

                      <div class="deal_section">
                        <p class="deal_section_title">1. \u672F\u8BED\u542B\u4E49</p>
                        <p>\u5982\u65E0\u7279\u522B\u8BF4\u660E\uFF0C\u4E0B\u5217\u672F\u8BED\u5728\u672C\u6761\u6B3E\u4E2D\u7684\u542B\u4E49\u4E3A\uFF1A</p>
                        <p>1.1 \u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\uFF1A\u6307\u817E\u8BAF\u901A\u8FC7\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u5411\u5FAE\u4FE1\u516C\u4F17\u8D26\u53F7\u7528\u6237\u63D0\u4F9B\u7684\u6765\u6E90\u4E8E\u7B2C\u4E09\u65B9\u56FE\u5E93\u7F51\u7AD9\u7684\u56FE\u7247\u7D20\u6750\u96C6\u5408\u3002\u7B80\u79F0\u4E3A\u201C\u516C\u5171\u56FE\u7247\u5E93\u201D\u3002</p>
                        <p>1.2 \u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u7D20\u6750\uFF1A\u6307\u5728\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u4E2D\u7684\u5355\u5F20\u6216\u591A\u5F20\u56FE\u7247\u7D20\u6750\u3002\u7B80\u79F0\u4E3A\u201C\u56FE\u7247\u7D20\u6750\u201D\u3002</p>
                        <p>1.3 \u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u7528\u6237\uFF1A\u6307\u641C\u7D22\u3001\u67E5\u770B\u3001\u7B5B\u9009\u3001\u6536\u85CF\u3001\u4F7F\u7528\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u56FE\u7247\u7D20\u6750\u7684\u5FAE\u4FE1\u516C\u4F17\u8D26\u53F7\u7528\u6237\u3002\u89C6\u60C5\u51B5\u7B80\u79F0\u4E3A\u201C\u4F60\u201D\u3001\u201C\u516C\u5171\u56FE\u7247\u5E93\u7528\u6237\u201D\u6216\u8005\u201C\u516C\u4F17\u8D26\u53F7\u7528\u6237\u201D\u3002</p>
                        <p>1.4 \u5FAE\u4FE1\u7528\u6237\uFF1A\u6307\u4F7F\u7528\u5FAE\u4FE1\u5BA2\u6237\u7AEF\u8F6F\u4EF6\u83B7\u53D6\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u76F8\u5173\u670D\u52A1\u7684\u7528\u6237\u3002</p>
                        <p>1.5 \u817E\u8BAF\uFF1A\u662F\u6307\u817E\u8BAF\u516C\u53F8\u53CA\u5176\u76F8\u5173\u670D\u52A1\u53EF\u80FD\u5B58\u5728\u7684\u8FD0\u8425\u5173\u8054\u5355\u4F4D\u3002</p>
                      </div>
                      <div class="deal_section">
                        <p class="deal_section_title">2. \u5173\u4E8E\u516C\u5171\u56FE\u7247\u5E93</p>
                        <p>2.1 \u516C\u5171\u56FE\u7247\u5E93\u662F\u817E\u8BAF\u4EE5\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u4E3A\u6280\u672F\u57FA\u7840\u5F00\u53D1\u7684\u5411\u5FAE\u4FE1\u516C\u4F17\u8D26\u53F7\u7528\u6237\u63D0\u4F9B\u7684\u6765\u6E90\u4E8E\u7B2C\u4E09\u65B9\u56FE\u5E93\u7F51\u7AD9\u7684\u56FE\u7247\u7D20\u6750\u5E93\u3002</p>
                        <p>2.2 \u4F60\u53EF\u4EE5\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u8D26\u53F7\uFF0C\u5728\u9009\u62E9\u56FE\u7247\u529F\u80FD\u4E0B\u4F7F\u7528\u516C\u5171\u56FE\u7247\u5E93\uFF0C\u4F60\u53EF\u5728\u516C\u5171\u56FE\u7247\u5E93\u4E2D\u8FDB\u884C\u641C\u7D22\u3001\u67E5\u770B\u3001\u7B5B\u9009\u3001\u6536\u85CF\u3001\u4F7F\u7528\u56FE\u7247\u7D20\u6750\u3002</p>
                        <p>2.3 \u516C\u5171\u56FE\u7247\u5E93\u7684\u641C\u7D22\u670D\u52A1\u53CA\u56FE\u7247\u7D20\u6750\u7531\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u901A\u8FC7\u7248\u6743\u6388\u6743\u53D6\u5F97\uFF0C\u53CA\u7B2C\u4E09\u65B9\u56FE\u5E93\u7F51\u7AD9\uFF08\u5305\u62EC<a target='_blank' href='https://www.pexels.com/zh-cn/license/'>Pexels</a>\u3001<a target='_blank' href='https://pixabay.com/zh/service/license/'>Pixabay</a>\uFF0C\u53EF\u70B9\u51FB\u67E5\u770B\u4F7F\u7528\u534F\u8BAE\uFF09\u63D0\u4F9B\u3002\u5176\u4E2D\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u63D0\u4F9B\u7684\u56FE\u7247\u5E26\u6709\u516C\u4F17\u53F7logo\u53CA'\u516C\u4F17\u53F7\u63D0\u4F9B'\u5B57\u6837\uFF0C\u5177\u6709\u5145\u5206\u7684\u7248\u6743\u6388\u6743\uFF0C\u7B2C\u4E09\u65B9\u56FE\u5E93\u7F51\u7AD9\u56FE\u7247\u7684\u4F7F\u7528\u9075\u5FAA\u5176\u7F51\u7AD9\u534F\u8BAE\u3002\u4E0D\u540C\u56FE\u5E93\u7F51\u7AD9\u7684\u56FE\u7247\u4F7F\u7528\u89C4\u5219\u6709\u6240\u5DEE\u5F02\uFF0C\u4F60\u5E94\u5F53\u9605\u8BFB\u5E76\u9075\u5FAA\u3002\u817E\u8BAF\u4EC5\u63D0\u4F9B\u516C\u5171\u56FE\u7247\u5E93\u7684\u6280\u672F\u670D\u52A1\u3002\u901A\u8FC7\u6B64\u529F\u80FD\u83B7\u53D6\u7684\u56FE\u7247\u4EC5\u9650\u4E8E\u5728\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u573A\u666F\u5185\u4F7F\u7528\u3002</p>
                        <p>2.4 \u817E\u8BAF\u6709\u6743\u51B3\u5B9A\u53EF\u4EE5\u5F00\u901A\u516C\u5171\u56FE\u7247\u5E93\u7684\u516C\u4F17\u8D26\u53F7\u7528\u6237\u7684\u8303\u56F4\u548C\u6761\u4EF6\u7B49\u3002</p>
                      </div>
                      <div class="deal_section">
                        <p class="deal_section_title">3. \u516C\u5171\u56FE\u7247\u5E93\u7528\u6237\u7684\u6743\u5229\u548C\u4E49\u52A1</p>
                        <p>3.1\u4F60\u7684\u884C\u4E3A\u5E94\u5F53\u7B26\u5408\u300A\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u670D\u52A1\u534F\u8BAE\u300B\u548C\u300A\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u8FD0\u8425\u89C4\u8303\u300B\u4E2D\u5BF9\u4E8E\u7528\u6237\u884C\u4E3A\u89C4\u8303\u7684\u76F8\u5173\u7EA6\u5B9A\u3002</p>
                        <p>3.2 \u4F60\u5E94\u5F53\u5728\u5408\u6CD5\u5408\u89C4\u7684\u524D\u63D0\u4E0B\u4F7F\u7528\u516C\u5171\u56FE\u7247\u5E93\uFF0C\u4E0D\u5F97\u5C06\u516C\u5171\u56FE\u7247\u5E93\u7528\u4E8E\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u3001\u653F\u7B56\u53CA\u8FDD\u80CC\u516C\u5E8F\u826F\u4FD7\u3001\u793E\u4F1A\u516C\u5FB7\u6216\u5E72\u6270\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u6B63\u5E38\u8FD0\u8425\u548C\u4FB5\u72AF\u5176\u4ED6\u7528\u6237\u6216\u7B2C\u4E09\u65B9\u5408\u6CD5\u6743\u76CA\u7684\u76EE\u7684\u3002</p>
                        <p>3.3 \u4F60\u77E5\u6089\u5E76\u540C\u610F\uFF0C\u516C\u5171\u56FE\u7247\u5E93\u7684\u56FE\u7247\u7D20\u6750\u6765\u6E90\u4E8E\u7B2C\u4E09\u65B9\u56FE\u5E93\u7F51\u7AD9\uFF0C\u817E\u8BAF\u5E76\u975E\u516C\u5171\u56FE\u7247\u5E93\u7684\u6743\u5229\u65B9\uFF0C\u4F60\u4F7F\u7528\u516C\u4F17\u56FE\u7247\u5E93\u529F\u80FD\u5E76\u4E0D\u4EE3\u8868\u817E\u8BAF\u8BA4\u53EF\u6216\u62C5\u4FDD\u4F60\u6240\u4F7F\u7528\u7684\u56FE\u7247\u7D20\u6750\u7B26\u5408\u6CD5\u5F8B\u89C4\u5B9A\u6216\u4E0D\u4FB5\u72AF\u7B2C\u4E09\u65B9\u7684\u5408\u6CD5\u6743\u5229\u3002</p>
                        <p>3.4 \u4F60\u77E5\u6089\u5E76\u540C\u610F\uFF0C\u817E\u8BAF\u5728\u6536\u5230\u56FE\u7247\u7248\u6743\u65B9\u6216\u5FAE\u4FE1\u7528\u6237\u6295\u8BC9\u56FE\u7247\u7D20\u6750\u7684\u901A\u77E5\u540E\uFF0C\u5982\u901A\u8FC7\u6838\u5B9E\u8BA4\u4E3A\u4F60\u4F7F\u7528\u7684\u56FE\u7247\u7D20\u6750\u8FDD\u53CD\u6CD5\u5F8B\u89C4\u5B9A\u6216\u4FB5\u72AF\u7B2C\u4E09\u65B9\u5408\u6CD5\u6743\u5229\u7684\uFF0C\u817E\u8BAF\u5C06\u5220\u9664\u6D89\u5ACC\u8FDD\u89C4\u7684\u56FE\u7247\u7D20\u6750\u6216\u5220\u9664\u5305\u542B\u56FE\u7247\u7D20\u6750\u7684\u4F5C\u54C1\uFF0C\u5E76\u5C06\u5904\u7406\u7ED3\u679C\u5411\u4F60\u901A\u77E5\u3002\u5C3D\u7BA1\u5982\u6B64\uFF0C\u4F60\u5BF9\u56FE\u7247\u7684\u4F7F\u7528\u5728\u6781\u7AEF\u60C5\u51B5\u4E0B\u4ECD\u6709\u53EF\u80FD\u88AB\u56FE\u7247\u7248\u6743\u65B9\u4E3B\u5F20\u4FB5\u6743\u5E76\u4E14\u6700\u7EC8\u4FB5\u6743\u6210\u7ACB\uFF0C\u5BF9\u6B64\u4F60\u5E94\u5F53\u5145\u5206\u7684\u77E5\u6089\u5E76\u540C\u610F\u3002</p>
                        <p>3.5 \u5982\u6D89\u53CA\u5230\u514D\u8D39\u7684\u7B2C\u4E09\u65B9\u56FE\u5E93\uFF0C\u5176\u56FE\u7247\u5185\u5BB9\u6D89\u53CA\u7684\u7248\u6743\u4E4B\u5916\u7684\u76F8\u5173\u6743\u76CA\uFF0C\u5982\u8096\u50CF\u6743\u3001\u5546\u6807\u6743\u3001\u9690\u79C1\u6743\u7B49\uFF0C\u817E\u8BAF\u5747\u4E0D\u4F5C\u4FDD\u8BC1\u6216\u62C5\u4FDD\u4EA6\u6CA1\u6709\u80FD\u529B\u4F5C\u6838\u67E5\uFF0C\u4F60\u5E94\u5F53\u81EA\u884C\u6838\u67E5\u662F\u5426\u5B58\u5728\u4FB5\u72AF\u4ED6\u4EBA\u6743\u76CA\u6216\u672A\u7ECF\u6388\u6743\u7684\u5185\u5BB9\uFF0C\u5E76\u8054\u7CFB\u6743\u5229\u65B9\u53D6\u5F97\u6388\u6743\uFF0C\u5BF9\u6B64\u4F60\u5E94\u5F53\u5145\u5206\u7684\u77E5\u6089\u5E76\u540C\u610F\u3002</p>
                        <p>3.6 \u4F60\u81EA\u613F\u4F7F\u7528\u516C\u5171\u56FE\u7247\u5E93\uFF0C\u817E\u8BAF\u4E0D\u5BF9\u4F60\u4F7F\u7528\u516C\u5171\u56FE\u7247\u5E93\u56FE\u7247\u7D20\u6750\u7684\u5173\u6CE8\u91CF\u3001\u9605\u8BFB\u91CF\u3001\u6700\u7EC8\u6240\u5F97\u7B49\u4F5C\u4EFB\u4F55\u627F\u8BFA\u3002</p>
                      </div>
                      <div class="deal_section">
                        <p class="deal_section_title">4. \u817E\u8BAF\u7684\u6743\u5229\u548C\u4E49\u52A1</p>
                        <p>4.1\u817E\u8BAF\u5728\u76EE\u524D\u6280\u672F\u6C34\u5E73\u4E0B\uFF0C\u6700\u5927\u7A0B\u5EA6\u5730\u4FDD\u969C\u516C\u5171\u56FE\u7247\u5E93\u7684\u6B63\u5E38\u8FD0\u884C\uFF0C\u4EE5\u7EF4\u62A4\u4F60\u7684\u5229\u76CA\u3002</p>
                        <p>4.2\u817E\u8BAF\u6709\u6743\u6839\u636E\u8FD0\u8425\u60C5\u51B5\u8C03\u6574\u6216\u6682\u505C\u516C\u5171\u56FE\u7247\u5E93\u529F\u80FD\uFF0C\u5E76\u53CA\u65F6\u5411\u4F60\u901A\u77E5\u3002</p>
                        <p>4.3\u817E\u8BAF\u4F5C\u4E3A\u63D0\u4F9B\u4FE1\u606F\u53D1\u5E03\u529F\u80FD\u7684\u4E2D\u7ACB\u5E73\u53F0\u65B9\uFF0C\u4E3A\u516C\u5171\u56FE\u7247\u5E93\u7684\u987A\u5229\u4F7F\u7528\u63D0\u4F9B\u6280\u672F\u652F\u6301\u3002</p>
                        <p>4.4\u4F60\u7406\u89E3\u5E76\u540C\u610F\uFF0C\u4E3A\u4FDD\u969C\u826F\u597D\u7684\u7528\u6237\u4F53\u9A8C\uFF0C\u817E\u8BAF\u4F1A\u5728\u6536\u5230\u56FE\u7247\u7248\u6743\u65B9\u6216\u5FAE\u4FE1\u7528\u6237\u7684\u6295\u8BC9\u901A\u77E5\u540E\uFF0C\u8981\u6C42\u6295\u8BC9\u65B9\u5982\u5B9E\u586B\u5199\u6295\u8BC9\u5185\u5BB9\u3001\u4FB5\u6743\u7C7B\u578B\u548C\u5177\u4F53\u539F\u56E0\u3001\u6295\u8BC9\u7406\u7531\uFF0C\u5E76\u63D0\u4F9B\u6743\u5229\u8BC1\u660E\u6587\u4EF6\u3001\u76F8\u5173\u673A\u6784\u9881\u53D1\u7684\u5408\u6CD5\u8BC1\u4E66\u3001\u6388\u6743\u6587\u4EF6\u7B49\u3002\u817E\u8BAF\u4F1A\u6838\u5B9E\u6295\u8BC9\u662F\u5426\u6210\u7ACB\uFF0C\u5982\u6295\u8BC9\u6210\u7ACB\uFF0C\u817E\u8BAF\u5C06\u5BF9\u6D89\u5ACC\u8FDD\u89C4\u7684\u7D20\u6750\u56FE\u7247\u6216\u5305\u542B\u7D20\u6750\u56FE\u7247\u7684\u4F5C\u54C1\u91C7\u53D6\u5220\u9664\u3001\u5C4F\u853D\u3001\u65AD\u5F00\u94FE\u63A5\u7B49\u5FC5\u8981\u63AA\u65BD\u3002</p>
                        <p>4.5\u4F60\u7406\u89E3\u5E76\u540C\u610F\uFF0C\u5982\u4F60\u4F7F\u7528\u516C\u4F17\u5E93\u56FE\u7247\u7D20\u6750\u4E0E\u5176\u4ED6\u7B2C\u4E09\u65B9\u4EA7\u751F\u4E89\u8BAE\u6216\u6CD5\u5F8B\u7EA0\u7EB7\uFF0C\u4F60\u9700\u81EA\u884C\u627F\u62C5\u7531\u6B64\u5BFC\u81F4\u7684\u6CD5\u5F8B\u8D23\u4EFB\uFF0C\u817E\u8BAF\u65E0\u6743\u4E5F\u65E0\u4F9D\u636E\u53C2\u4E0E\u4F60\u4E0E\u7B2C\u4E09\u65B9\u7684\u4E89\u8BAE\u89E3\u51B3\u3002</p>
                      </div>
                      <div class="deal_section">
                        <p class="deal_section_title">5. \u5176\u5B83</p>
                        <p>5.1 \u672C\u6761\u6B3E\u5185\u5BB9\u540C\u65F6\u5305\u62EC\u817E\u8BAF\u7684\u5404\u9879\u5236\u5EA6\u89C4\u8303\u3001\u5176\u5B83\u672C\u6761\u6B3E\u9644\u4EF6\u4E2D\u7684\u534F\u8BAE\u6216\u89C4\u5219\u3001\u817E\u8BAF\u53EF\u80FD\u4E0D\u65AD\u53D1\u5E03\u7684\u5173\u4E8E\u516C\u5171\u56FE\u7247\u5E93\u7684\u5176\u4ED6\u76F8\u5173\u534F\u8BAE\u3001\u89C4\u5219\u7B49\u5185\u5BB9\u3002\u4E0A\u8FF0\u5185\u5BB9\u4E00\u7ECF\u6B63\u5F0F\u53D1\u5E03\uFF0C\u5373\u4E3A\u672C\u6761\u6B3E\u4E0D\u53EF\u5206\u5272\u7684\u7EC4\u6210\u90E8\u5206\uFF0C\u4F60\u540C\u6837\u5E94\u5F53\u9075\u5B88\u3002\u4E0A\u8FF0\u5185\u5BB9\u4E0E\u672C\u6761\u6B3E\u5B58\u5728\u51B2\u7A81\u7684\uFF0C\u4EE5\u672C\u6761\u6B3E\u4E3A\u51C6\u3002\u4E00\u7ECF\u6CE8\u518C\u6216\u4F7F\u7528\u672C\u6761\u6B3E\u4E0B\u4EFB\u4F55\u670D\u52A1\uFF0C\u5373\u89C6\u4E3A\u4F60\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u63A5\u53D7\u672C\u6761\u6B3E\u53CA\u4E0A\u8FF0\u5185\u5BB9\u7684\u7EA6\u675F\u3002\u817E\u8BAF\u6709\u6743\u5728\u5FC5\u8981\u65F6\u5355\u65B9\u4FEE\u6539\u672C\u6761\u6B3E\u6216\u4E0A\u8FF0\u5185\u5BB9\uFF0C\u76F8\u5173\u5185\u5BB9\u53D8\u66F4\u540E\uFF0C\u5982\u679C\u4F60\u7EE7\u7EED\u4F7F\u7528\u516C\u5171\u56FE\u7247\u5E93\uFF0C\u5373\u89C6\u4E3A\u4F60\u5DF2\u63A5\u53D7\u4FEE\u6539\u540E\u7684\u76F8\u5173\u5185\u5BB9\u3002\u5982\u679C\u4F60\u4E0D\u63A5\u53D7\u4FEE\u6539\u540E\u7684\u76F8\u5173\u5185\u5BB9\uFF0C\u5E94\u5F53\u505C\u6B62\u4F7F\u7528\u76F8\u5173\u529F\u80FD\u3002</p>
                        <p>5.2 \u672C\u6761\u6B3E\u7B7E\u8BA2\u5730\u4E3A\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02\u5357\u5C71\u533A\u3002</p>
                        <p>5.3 \u672C\u6761\u6B3E\u7684\u6210\u7ACB\u3001\u751F\u6548\u3001\u5C65\u884C\u3001\u89E3\u91CA\u53CA\u7EA0\u7EB7\u89E3\u51B3\uFF0C\u9002\u7528\u4E2D\u534E\u4EBA\u6C11\u5171\u548C\u56FD\u5927\u9646\u5730\u533A\u6CD5\u5F8B\uFF08\u4E0D\u5305\u62EC\u51B2\u7A81\u6CD5\uFF09\u3002</p>
                        <p>5.4 \u82E5\u4F60\u548C\u817E\u8BAF\u4E4B\u95F4\u53D1\u751F\u4EFB\u4F55\u7EA0\u7EB7\u6216\u4E89\u8BAE\uFF0C\u9996\u5148\u5E94\u53CB\u597D\u534F\u5546\u89E3\u51B3\uFF1B\u534F\u5546\u4E0D\u6210\u529F\u7684\uFF0C\u53CC\u65B9\u5747\u540C\u610F\u5C06\u7EA0\u7EB7\u6216\u4E89\u8BAE\u63D0\u4EA4\u672C\u6761\u6B3E\u7B7E\u8BA2\u5730\u6709\u7BA1\u8F96\u6743\u7684\u4EBA\u6C11\u6CD5\u9662\u89E3\u51B3\u3002</p>
                        <p>5.5 \u672C\u6761\u6B3E\u6240\u6709\u6761\u6B3E\u7684\u6807\u9898\u4EC5\u4E3A\u9605\u8BFB\u65B9\u4FBF\uFF0C\u672C\u8EAB\u5E76\u65E0\u5B9E\u9645\u6DB5\u4E49\uFF0C\u4E0D\u80FD\u4F5C\u4E3A\u672C\u6761\u6B3E\u6DB5\u4E49\u89E3\u91CA\u7684\u4F9D\u636E\u3002\uFF08\u5B8C\uFF09</p>
                      </div>
                      <div class="deal_section">\u5FAE\u4FE1\u56E2\u961F</div>
                    </div>

                    <mp-checkbox v-model="hasAgreePicRules" class="weui-desktop-img-public__rules-agree" @change="switchAgreeStatus">\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u9075\u5B88<a target='_blank' href='https://mp.weixin.qq.com/cgi-bin/announce?action=getannouncement&key=11608199766csKQC&version=1&lang=zh_CN&platform=2'>\u300A\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u4F7F\u7528\u6761\u6B3E\u300B</a></mp-checkbox>
                  </template>

                  <template v-else>
                    <!-- \u516C\u5171\u56FE\u7247\u5E93\u6536\u85CF\u9875\u641C\u7D22\u7EC4\u4EF6 -->
                    <div v-show="!showSearchResult">
                      <mp-search-autocomplete
                        v-model="searchKeyword"
                        :extclass="['weui-desktop-img-public__search', imgs.length ? 'weui-desktop-img-public__search_favor' : 'weui-desktop-img-public__search_nofavor']"
                        placeholder="\u8F93\u5165\u5173\u952E\u8BCD\u67E5\u627E\u56FE\u7247"
                        :association-words="queryAssociationList"
                        :clear="true"
                        @search="searchPublicPic"
                        @fetch-associations="queryRecommendWord"
                        @clear="clearSearchCtx">
                      </mp-search-autocomplete>
                      <div class="weui-desktop-img-public__history" v-if="historyQueryList.length > 0">
                        <span class="weui-desktop-img-public__history-label">\u8FD1\u671F\u4F7F\u7528</span>
                        <div>
                          <span v-for="(item, idx) in historyQueryList" class="weui-desktop-form-tag">
                            <i class="weui-desktop-form-tag__name" @click="clickHistory(item, idx)">{{ item }}</i>
                            <button @click="deleteHistory(item)" type="button" class="weui-desktop-opr-btn weui-desktop-opr-btn_close">\u5220\u9664</button>
                          </span>
                        </div>
                      </div>
                      <p class="weui-desktop-img-public__search-tips">\u641C\u7D22\u670D\u52A1\u53CA\u56FE\u7247\u5E93\u7531{{serviceProviders}}\u7B49\u63D0\u4F9B</p>
                    </div>

                    <!-- \u516C\u5171\u56FE\u7247\u5E93\u56FE\u7247\u5217\u8868 -->
                    <div v-if="imgs.length" :class="showSearchResult ? 'weui-desktop-img-public__search-pic__wrp' : 'weui-desktop-img-public__favor-pic__wrp'">
                      <p v-show="!showSearchResult" class="weui-desktop-img-public__favor-pic__tips">\u6211\u6536\u85CF\u7684\u56FE\u7247</p>

                      <div class="weui-desktop-img-public__favor-pic__list">
                        <div v-for="(img, i) in imgs"
                          :key="img.fileId"
                          ref="publicPicList"
                          :class="['weui-desktop-img-picker__item', { selected : img.selected, disabled: !img.selected && !canSelect, error: img.error  }]"
                          @click.stop.prevent="selectImg({i: i, currentImg: img})"
                        >
                          <i role="img" aria-describedby="\u56FE\u7247\u63CF\u8FF0" title="\u56FE\u7247\u63CF\u8FF0" class="weui-desktop-img-picker__img-thumb" :style="img.mediumUrl ? 'background-image: url(' + img.mediumUrl + ');' : ''">
                            <!-- \u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u6837\u5F0F -->
                            <div v-if="img.error" class="weui-desktop-img-public__error">\u56FE\u7247\u94FE\u63A5\u5DF2\u5931\u6548</div>
                          </i>

                          <template v-if="!img.error">
                            <!-- \u5DE6\u4E0A\u89D2\u7684\u9009\u62E9\u6846 -->
                            <span v-if="maxSelect > 1" :class="['image_dialog__checkbox', img.selected ? 'selected' : '']"></span>
                            <!-- \u53F3\u4E0A\u89D2\u7684\u6700\u5927\u5316 icon -->
                            <mp-tooltip class="weui-desktop-img-public__star-bg r-46 no-visible" content="\u67E5\u770B\u5927\u56FE">
                              <span class="weui-desktop-img-public__bg" slot="target" @click.stop="showPubGallery(i)">
                                <i class="weui-desktop-img-public__common-icon weui-desktop-img-public__max-icon"></i>
                              </span>
                            </mp-tooltip>
                          </template>

                          <!-- \u53F3\u4E0A\u89D2\u7684\u6536\u85CF icon -->
                          <mp-tooltip v-if="!img.error || !showSearchResult" :class="['weui-desktop-img-public__star-bg', { 'no-visible': !img.isFavor }]" :content="img.isFavor ? '\u53D6\u6D88\u6536\u85CF' : '\u6536\u85CF'">
                            <span class="weui-desktop-img-public__bg" slot="target" @click.stop="star({imgList: imgs, idx: i, query: searchKeyword})">
                              <i :class="['weui-desktop-img-public__common-icon', img.isFavor ? 'weui-desktop-img-public__star-icon' : 'weui-desktop-img-public__unstar-icon']"></i>
                            </span>
                          </mp-tooltip>

                          <!-- \u56FE\u7247\u4F9B\u5E94\u5546\u4FE1\u606F\u5C55\u793A -->
                          <div class="weui-desktop-img-public__provider-info">
                            <div class="weui-desktop-img-public__provider-info-wrp">
                              <div
                                :class="[
                                  {'weui-desktop-img-public__provider-logo': img.supplier !== 100 },
                                  { pexels: img.supplier === 1 },
                                  { pickfoto: img.supplier === 3 },
                                  { pixababy: img.supplier === 4 },
                                  { tencent: img.supplier === 5 },
                                ]"
                              ></div>
                              <span>{{ img.supplier | formatProvider }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- \u516C\u5171\u56FE\u7247\u5E93\u753B\u5ECA\u7EC4\u4EF6 -->
                      <mp-gallery
                        class="mp-gallery"
                        v-model="isPublicGalleryShow"
                        :imgs="imgs | formatUrlList"
                        :selected="selectedPublicGalleryIdx"
                        @change="handlePicIdxChange"
                      ></mp-gallery>
                    </div>
                    <!-- \u516C\u5171\u56FE\u7247\u5E93\u641C\u7D22\u65E0\u7ED3\u679C -->
                    <div v-else-if="showSearchResult && !showSearchLoading" class="weui-desktop-img-public__no-img">\u6682\u65E0\u5339\u914D\u56FE\u7247</div>

                    <!-- \u516C\u5171\u56FE\u7247\u5E93\u52A0\u8F7D loading \u6001 -->
                    <div v-show="showSearchLoading" ref="searchLoading" :class="['weui-desktop-loadmore', 'weui-desktop-img-public__loading_text', { 'pt-100': !imgs.length }]">
                      <i class="weui-desktop-loading"></i>
                      \u6B63\u5728\u52A0\u8F7D
                    </div>
                  </template>
                </template>
                <!-- \u516C\u5171\u56FE\u7247\u5E93 END -->
              </div>

            </div>

            <mp-pagination v-show="!showSelectImg && selectedGroup !== -1" :total-num="totalnum" :per-page="perpage" :current="currentPage" @page-change="changePage"></mp-pagination>
          </div>
        </div>
      </div>
    </div>
  </template>

  <!-- \u88C1\u526A\u56FE\u7247 -->
  <div v-if="crop && innerStep === 2" class="weui-desktop-step__panel weui-desktop-step__panel-crop">
    <mp-image-edit :src="cropImg.url" :text="text && actionScene === 3" :crop-only="cropOnly" :ratio="ratio" :crop-info="cropperInfo" :text-info="coverTextInfo" :is-video-scene="actionScene === 3" @change="onImageEdit"></mp-image-edit>
  </div>

  <template slot="footer">
    <div v-if="!fromcontent && innerStep === 1 && maxSelect > 1" class="weui-desktop-img-picker__counter">
      <span>\u5DF2\u9009\u62E9 <a href="javascript:" @click="changeViewToSelectedImg">{{selectedImgs | getSelectedImgLength}} / {{maxSelect}}  \u9879</a></span>
      <span v-if="showSelectImg"><a href="javascript:" @click="changeViewToAllImg">\u8FD4\u56DE\u5168\u90E8</a></span>
    </div>

    <mp-button v-if="showAgreeBtn && selectedGroup === -1" type="primary" :disabled="!hasAgreePicRules" :loading="agreeBtnLoading" @click="agreeStatement">\u540C\u610F\u5E76\u7EE7\u7EED</mp-button>
    <mp-button v-else-if="innerStep === 1" type="primary" :disabled="disable" :loading="btnLoading" @click="ok">{{ btnInnerTextStep1 }}</mp-button>
    <mp-button v-if="!crop" @click="close">\u53D6\u6D88</mp-button>

    <mp-button v-show="innerStep === 2 && cropScene !== 'imageArticleCoverModify'" @click="prevStep">\u4E0A\u4E00\u6B65</mp-button>
    <mp-button v-show="innerStep === 2" type="primary" @click="ok">\u5B8C\u6210</mp-button>
  </template>

  <!-- \u62D6\u62FD\u54CD\u5E94\u906E\u7F69 -->
  <div class="image_upload_dnd_wrp_mask" v-show="selectedGroup !== -1 && selectedGroup !== 4">
    <div class="image_upload_dnd_wrp_container" :style="dndContainerStyle" id="image_upload_dnd_wrp">
      <div class="image_upload_dnd_inner_text" :style="dndContainerTextStyle">
        <span class="dnd_inner_text">\u91CA\u653E\u9F20\u6807</span>
      </div>
      <div class="image_upload_dnd_outer_text" :style="dndContainerTextStyle">
        <i class="icon2618 drag_pic dnd_outer_pic"></i>
        <span class="dnd_outer_text">\u62D6\u62FD\u56FE\u7247\u81F3\u6B64\u533A\u57DF\u4E0A\u4F20</span>
      </div>
    </div>
  </div>
</mp-dialog>

`},"./src/pages/modules/media_dialog/image_dialog/image_dialog_store.js":function(E,v,l){var D;function j(a){"@babel/helpers - typeof";return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},j(a)}function V(a){return B(a)||H(a)||R(a)||M()}function M(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function R(a,s){if(a){if("string"==typeof a)return F(a,s);var o={}.toString.call(a).slice(8,-1);return"Object"===o&&a.constructor&&(o=a.constructor.name),"Map"===o||"Set"===o?Array.from(a):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?F(a,s):void 0}}function H(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)}function B(a){if(Array.isArray(a))return F(a)}function F(a,s){(null==s||s>a.length)&&(s=a.length);for(var o=0,p=Array(s);o<s;o++)p[o]=a[o];return p}function q(a,s){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);s&&(p=p.filter(function(k){return Object.getOwnPropertyDescriptor(a,k).enumerable})),o.push.apply(o,p)}return o}function f(a){for(var s=1;s<arguments.length;s++){var o=null!=arguments[s]?arguments[s]:{};s%2?q(Object(o),true).forEach(function(p){m(a,p,o[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):q(Object(o)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(o,p))})}return a}function m(a,s,o){return(s=I(s))in a?Object.defineProperty(a,s,{value:o,enumerable:true,configurable:true,writable:true}):a[s]=o,a}function I(a){var s=N(a,"string");return"symbol"==j(s)?s:s+""}function N(a,s){if("object"!=j(a)||!a)return a;var o=a[Symbol.toPrimitive];if(void 0!==o){var p=o.call(a,s||"default");if("object"!=j(p))return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===s?String:Number)(a)}var J=l("./node_modules/.pnpm/vuex@3.6.2_vue@2.7.15/node_modules/vuex/dist/vuex.esm.js");var P=l("./src/pages/modules/media_dialog/image_dialog/mutations.js"),K=P.INNER_STEP_MUTATION,se=P.DEFAULT_GROUP_MUTATION,T=P.WATER_STATUS_MUTATION,n=P.INIT_IMGS_MUTATION,h=P.UPDATE_IMGS_MUTATION,G=P.ADD_IMGS_MUTATION,Q=P.REMOVE_IMGS_MUTATION,ee=P.UPDATE_IMG_URL_MUTATION,X=P.INIT_GROUPS_MUTATION,oe=P.UPDATE_GROUPS_MUTATION,ne=P.SELECTED_GROUP_MUTATION,te=P.SELECTED_IMGS_MUTATION,fe=P.UPDATE_SELECTED_IMGS_MUTATION,ue=P.ADD_SELECTED_IMGS_MUTATION,ye=P.REMOVE_SELECTED_IMGS_MUTATION,Te=P.UPDATE_SELECTED_IMGS_URL_MUTATION,ke=P.TOTAL_NUM_MUTATION,Ie=P.CROP_IMG_MUTATION,w=P.CROP_IMG_INFO_MUTATION,_=P.CROPPER_INFO_MUTATION,c=P.UPDATE_COVERTING_COUNT_MUTATION,A=P.FROM_UPLOAD_MUTATION,b=P.CURRENT_PAGE_MUTATION,S=P.CURRENT_SELECT_PAGE_MUTATION,r=P.STAR_UNSTAR_PICS_MUTATION,i=P.UPDATE_PUBLIC_PICS_MUTATION,u=P.CHANGE_PUBLIC_PICS_USE_STATUS_MUTATION,y=P.UPDATE_PUBLIC_PICS_HISTORY_QUERY_MUTATION,z=P.UPDATE_PUBLIC_PICS_QUERY_ASSOCIATION_MUTATION;var Y=l("./src/3rd/wxgspeedsdk/wxgspeedsdk.js");var $=l("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");var ie=l("./src/pages/modules/utils/url.js").fullUrl;var pe=l("./src/pages/modules/media_dialog/image_dialog/report/report.js");var be={1:"Pexels",3:"APE\u56FE\u5E93",4:"Pixabay",5:"\u516C\u4F17\u53F7",100:"AI\u751F\u6210"};var ge=0;function he(a,s){for(var o=0,p=a.length;o<p;++o){if(String(a[o].fileId)===String(s))return o}return-1}function De(a,s){var o=-1;if(a.length>=0){o=he(a,s.fileId)}return o!==-1}function Pe(a,s){if(!a.endsWith("wx_fmt=gif")){return s?a.replace("/300?wx_fmt","/0?wx_fmt"):a.replace("/0?wx_fmt","/300?wx_fmt")}else{return a}}function Ee(a,s){return f(f({},a),{},{url:Pe(a.url,s)})}var Oe;function Ne(a){Y.saveSpeeds({pid:34,speeds:[{sid:67,time:a}]});Y.send()}var Re={moduleName:"imageDialog",namespaced:true,state:{scene:"cdn",innerStep:1,totalnum:0,maxSelect:1,perpage:12,currentPage:1,waterStatus:0,imgs:[],groups:[],selectedGroup:0,selectedImgs:[],cropImg:{url:""},cropImgInfo:[],cropperInfo:[],showLoading:false,covertingCount:0,fromUpload:[],addGroupForm:{groupName:""},btnLoading:false,addGroupLoading:false,groupIdOfUploading:0,addGroupPopoverShow:false,showSelectImg:false,showPublicPicRules:true,hasAgreePicRules:false,showAgreeBtn:true,agreeBtnLoading:false,showSearchResult:false,showSearchLoading:false,needContinue:false,imgsWrapperHeight:0,isScrollLoading:false,lastSeq:0,lastLimit:0,actionScene:0,canUsePublicPic:true,historyQueryList:[],queryAssociationList:[],usePublicPic:false},mutations:(D={},m(m(m(m(m(m(m(m(m(m(D,K,function(a,s){a.innerStep=s*1}),T,function(a,s){a.waterStatus=s*1}),n,function(a,s){if(Object.prototype.toString.call(s)==="[object Array]"){a.imgs=s}}),h,function(a,s){var o=s.idx,p=s.item;if(!!p){var k=V(a.imgs);k[o]=p;a.imgs=k}}),G,function(a,s){if(!!s){var o=V(a.imgs);o.unshift(s);a.imgs=o}}),Q,function(a,s){var o=V(a.imgs);o.splice(s,1);a.imgs=o}),ee,function(a,s){var o=s.idx,p=s.url;if(p){a.imgs[o].url=p}}),X,function(a,s){if(Object.prototype.toString.call(s)==="[object Array]"){a.groups=s}}),oe,function(a,s){var o=s.idx,p=s.item;a.groups.splice(o,1,p)}),ne,function(a,s){a.selectedGroup=s}),m(m(m(m(m(m(m(m(m(m(D,te,function(a,s){if(Object.prototype.toString.call(s)==="[object Array]"){a.selectedImgs=s.map(function(o){return Ee(o,true)})}}),fe,function(a,s){var o=s.img,p=s.idx;if(!!o){var k=V(a.selectedImgs);k[p]=Ee(o,true);a.selectedImgs=k}}),ue,function(a,s){if(!!s){a.selectedImgs.push(Ee(s,true))}}),ye,function(a,s){a.selectedImgs.splice(s,1)}),Te,function(a,s){var o=s.idx,p=s.url;if(p){a.selectedImgs[o].url=Pe(p,true)}}),ke,function(a,s){a.totalnum=s*1}),Ie,function(a,s){a.cropImg=s}),w,function(a,s){if(Object.prototype.toString.call(s)==="[object Array]"){a.cropImgInfo=s}}),_,function(a,s){if(Object.prototype.toString.call(s)==="[object Array]"){a.cropperInfo=s}}),c,function(a,s){a.covertingCount+=s*1}),m(m(m(m(m(m(m(m(D,A,function(a,s){if(!!s){a.fromUpload.push(s)}else{a.fromUpload=[]}}),b,function(a,s){a.currentPage=s*1}),r,function(a,s){var o=s.isFavor,p=s.imgList,k=s.idx;var U=a.selectedImgs.filter(function(Z){return Z.fileId===p[k].fileId})[0];var L=a.imgs.filter(function(Z){return Z.fileId===p[k].fileId})[0];U&&(U.isFavor=o);L&&(L.isFavor=o);if(a.selectedGroup===-1&&!a.showSearchResult&&!a.showSelectImg&&!o){a.imgs.splice(k,1)}}),i,function(a,s){if(Object.prototype.toString.call(s)==="[object Array]"){a.imgs=[].concat(V(a.imgs),V(s))}}),u,function(a,s){a.canUsePublicPic=s}),y,function(a,s){if(Object.prototype.toString.call(s)==="[object Array]"){a.historyQueryList=V(s)}}),z,function(a,s){if(Object.prototype.toString.call(s)==="[object Array]"){var o=s.map(function(p){return p.query_recommend||""}).filter(function(p){return!!p});a.queryAssociationList=V(o)}}),"__set_state",function a(s,o){for(var p in o){s[p]=o[p]}})),actions:{resetStateAction:function a(s){var o=s.dispatch,p=s.commit;p(K,1);p(se,0);p(T,0);p(n,[]);p(ne,4);p(te,[]);p(b,1);p(S,1);p(ke,0);p(A,null);p(z,[]);o("__set_state",{showLoading:false,btnLoading:false,addGroupLoading:false,showSelectImg:false,lastSeq:0,lastLimit:0})},setInnerStepAction:function a(s,o){var p=s.commit;p(K,o)},setSelectedGroupAction:function a(s,o){var p=s.commit;p(ne,o)},setSelectedImgsAction:function a(s,o){var p=s.commit;p(te,o)},setTotalNumAction:function a(s,o){var p=s.commit;p(ke,o*1)},setCurrentPageAction:function a(s,o){var p=s.commit;p(b,o)},setCropperInfoAction:function a(s,o){var p=s.commit;p(_,o)},setCropImgInfoAction:function a(s,o){var p=s.commit;p(w,o)},setCropImgAction:function a(s,o){var p=s.commit;p(Ie,o)},setFromUploadAction:function a(s,o){var p=s.commit;p(A,o)},updateGroups:function a(s,o){var p=s.commit;p(oe,o)},changeCovertingCount:function a(s,o){var p=s.commit;p(c,o*1)},replaceImgs:function a(s,o){var p=s.commit;var k=o.idx,U=o.item,L=o.selected;U.selected=!!L;p(h,{idx:k,item:U})},addImgs:function a(s,o){var p=s.commit;var k=o.item,U=o.selected;k.selected=!!U;p(G,k)},removeImgs:function a(s,o){var p=s.commit;p(Q,o)},updateSelectedImg:function a(s,o){var p=s.commit;var k=o.img,U=o.idx,L=o.selected;k.selected=!!L;p(fe,{img:k,idx:U})},selectImg:function a(s,o){var p=s.state,k=s.dispatch,U=s.commit;var L=o.i,Z=o.currentImg,W=o.forceSelect,ae=o.isFromUpload;if(Z.error){return}var re=Z.fileId,me=Z.url;Object.assign(Z,{copyrightStatus:Z.status});if(p.showSelectImg){var de;if(ae){de=Object.assign({},p.imgs[L]);var ce=he(p.selectedImgs,re);if(ce===-1){U(ue,Object.assign({},Z,{selected:W}))}k("replaceImgs",{idx:L,item:de,selected:W})}else{de=Object.assign({},p.selectedImgs[L]);var ve=he(p.imgs,re);k("updateSelectedImg",{img:Z,idx:L,selected:!de.selected});if(ve>=0){k("replaceImgs",{idx:ve,item:de,selected:!de.selected})}}}else{var _e=Object.assign({},p.imgs[L]);if(W){var e=he(p.selectedImgs,re);if(e===-1){U(ue,Object.assign({},Z,{selected:true}))}k("replaceImgs",{idx:L,item:_e,selected:true})}else if(_e.selected){var t=he(p.selectedImgs,re);if(t>=0){U(ye,t)}k("replaceImgs",{idx:L,item:_e,selected:false})}else if(p.maxSelect===1){if(p.selectedImgs[0]){var d=he(p.imgs,p.selectedImgs[0].fileId);if(d>=0){var g=Object.assign({},p.imgs[d]);k("replaceImgs",{idx:d,item:g,selected:false})}U(ye,0)}k("replaceImgs",{idx:L,item:_e,selected:true});U(ue,Object.assign({},Z,{selected:true}))}else if(p.selectedImgs.length<p.maxSelect){var C=he(p.selectedImgs,re);if(C===-1){U(ue,Object.assign({},Z,{selected:true}))}k("replaceImgs",{idx:L,item:_e,selected:true})}}if(p.scene==="cdn"&&!me&&re){k("getCdnUrlByFileId",re)}},selectGroup:function a(s,o){var p=s.state,k=s.dispatch,U=s.commit;var L=o.groupId,Z=o.actionScene;if(p.selectedGroup===L)return;U(ne,L);U(n,[]);U(b,1);k("__set_state",{showLoading:true,showSelectImg:false,showSearchResult:false,lastSeq:0,lastLimit:0});k("resetSelectedImgs");if(L===-1){k("__set_state",{showSearchLoading:false});!p.showPublicPicRules&&k("loadPublicPics",{})}else{k("getImagesByBegin",0).then(function(W){k("setTotalNumById",W.page_info.file_group_list.file_group);k("formatData",Object.assign({},W,{actionScene:Z})).then(function(){k("__set_state",{showLoading:false});p.imgs.forEach(function(ae,re){if(De(p.selectedImgs,ae)){k("selectImg",{i:re,currentImg:ae,forceSelect:true})}})}).catch(function(){k("__set_state",{showLoading:false})})}).catch(function(){k("__set_state",{showLoading:false})})}},setTotalNumById:function a(s){var o=s.state,p=s.commit;var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];for(var U=0,L=k.length;U<L;U++){if(k[U].id===o.selectedGroup){p(ke,k[U].count);break}}},formatData:function a(s,o){var p=s.state,k=s.dispatch,U=s.commit;var L=[];return new Promise(function(Z,W){if(!o.page_info){W()}var ae=28308;var re=28308;var me=9;var de=10;var ce=0;var ve=0;var _e=0;var e=o.page_info.file_item.length;var t=p.selectedGroup;var d=p.currentPage;var g="";var C=o.page_info.file_group_list.file_group;U(X,C);U(T,o.page_info.watermark_status);if(!o.page_info.file_item||o.page_info.file_item.length<=0){W()}o.page_info.file_item.forEach(function(O,x){var le=Pe(O.cdn_url,false)||ie("/cgi-bin/getimgdata?mode=small&source=file&fileId=".concat(O.file_id));var we=new Image;we.onerror=function Ae(){++ce;++_e;g=g+le+" ";if(_e===e){new Image().src="/mp/jsmonitor?idkey="+ae+"_"+me+"_"+ce+";"+re+"_"+de+"_"+ve+"&lc=1&log0=[errorurl]["+encodeURIComponent(g)+"]"}if(p.selectedGroup===t&&p.currentPage===d){L[x]={seq:O.seq,url:le,name:O.name,fileId:O.file_id,status:O.copyright_status||0,format:O.img_format,selected:false,aiImageId:O.ai_pic_id};if(_e===e){Ne(window.performance.now()-Oe);k("__set_state",{showLoading:false});U(n,L);Z()}}};we.onload=function Ae(){++ve;++_e;if(_e===e){var Ue="/mp/jsmonitor?idkey="+ae+"_"+me+"_"+ce+";"+re+"_"+de+"_"+ve;if(ce>0){Ue=Ue+"&lc=1&log0=[errorurl]["+encodeURIComponent(g)+"]"}new Image().src=Ue}if(p.selectedGroup===t&&p.currentPage===d){L[x]={seq:O.seq,url:le,name:O.name,fileId:O.file_id,status:O.copyright_status||0,format:O.img_format,selected:false,aiImageId:O.ai_pic_id};if(_e===e){Ne(window.performance.now()-Oe);U(n,L);Z()}}};we.src=le})})},getImagesByBegin:function a(s){var o=s.state,p=s.commit;var k=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;var U=o.selectedGroup;p(n,[]);var L=ie("/cgi-bin/filepage?action=select");Oe=window.performance.now();return new Promise(function(Z,W){$.get({url:L,data:{group_id:U===-1?0:U,begin:k,count:o.perpage,type:2},mask:false},function(ae){if(ae.base_resp&&ae.base_resp.ret===0){if(o.selectedGroup!==U){W()}Z(ae)}else{$.handleRet(ae,{url:L});Vue.prototype.$tipsErr("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u5C1D\u8BD5");W()}},function(){Vue.prototype.$tipsErr("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u5C1D\u8BD5");W()})})},getCdnUrlByFileId:function a(s,o){var p=s.state,k=s.commit;k(c,1);$.post({url:ie("/cgi-bin/uploadimg2cdn?action=duplicate"),data:{file_id:o,group_id:p.selectedGroup||1},mask:false},function(U){var L=he(p.selectedImgs,o);var Z=he(p.imgs,o);if(Number(U.errcode)===0){if(L>=0){k(Te,{idx:L,url:U.url})}if(Z>=0){k(ee,{idx:L,url:U.url})}}else{Vue.prototype.$tipsErr("\u8F6C\u5B58\u5931\u8D25");if(L>=0){k(ye,L)}if(Z>=0){k(Q,L)}}k(c,-1)},function(){Vue.prototype.$tipsErr("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u5C1D\u8BD5")})},createGroup:function a(s,o){var p=s.state,k=s.dispatch,U=s.commit;var L=o.actionScene;k("__set_state",{addGroupLoading:true});$.post({url:ie("/cgi-bin/filepage?action=create_group"),data:{name:p.addGroupForm.groupName},mask:false},function(Z){k("__set_state",{addGroupLoading:false});var W=Number(Z.base_resp.ret);if(W===0){var ae=p.addGroupForm.groupName;k("__set_state",{addGroupForm:{groupName:""},addGroupPopoverShow:false,showLoading:true,showSelectImg:false});k("resetSelectedImgs");k("getImagesByBegin",0).then(function(re){k("__set_state",{showLoading:false});var me=re.page_info;var de=false;for(var ce=0;ce<me.file_group_list.file_group.length;ce++){var ve=me.file_group_list.file_group[ce];if(ve.name===ae){U(ne,ve.id);de=true;break}}if(de){U(X,me.file_group_list.file_group);U(n,[]);U(ke,0);U(b,1);U(S,1)}}).catch(function(){k("__set_state",{showLoading:false})})}else if(W===15006){Vue.prototype.$tipsErr("\u5DF2\u7ECF\u8D85\u8FC7100\u4E2A\u5206\u7EC4\uFF0C\u4E0D\u80FD\u518D\u521B\u5EFA\u65B0\u7684\u5206\u7EC4\u3002")}else{Vue.prototype.$tipsErr("\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}})},pageChange:function a(s,o){var p=s.state,k=s.dispatch,U=s.commit;var L=o.pages,Z=o.actionScene;var W=(L.currentPage-1)*p.perpage;U(b,L.currentPage);k("__set_state",{showLoading:true});k("getImagesByBegin",W).then(function(ae){k("formatData",Object.assign({},ae,{actionScene:Z})).then(function(){k("__set_state",{showLoading:false});p.imgs.forEach(function(re,me){if(De(p.selectedImgs,re)){k("selectImg",{i:me,currentImg:re,forceSelect:true})}})}).catch(function(){k("__set_state",{showLoading:false})})}).catch(function(){k("__set_state",{showLoading:false})})},changeViewToSelectedImg:function a(s){var o=s.dispatch;o("__set_state",{showSelectImg:true})},changeViewToAllImg:function a(s){var o=s.state,p=s.dispatch;p("__set_state",{showSelectImg:false});if(!o.showPublicPicRules&&o.selectedGroup===-1&&!o.showSearchResult){p("__set_state",{lastSeq:0,lastLimit:0});p("loadPublicPics",{})}p("resetSelectedImgs")},resetSelectedImgs:function a(s){var o=s.state,p=s.commit;var k=o.selectedImgs.filter(function(U){return U.selected});p("SELECTED_IMGS_MUTATION",k)},agreeStatement:function a(s){var o=s.dispatch;o("__set_state",{agreeBtnLoading:true});$.post({url:"/cgi-bin/photogallery?action=agree_license",data:{},success:function p(){var k=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};o("__set_state",{agreeBtnLoading:false});var U=k.base_resp&&k.base_resp.ret*1;switch(U){case 0:o("__set_state",{showAgreeBtn:false,showPublicPicRules:false});break;default:console.error(U);Vue.prototype.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");break}},error:function p(){o("__set_state",{agreeBtnLoading:false});Vue.prototype.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}})},loadPublicPics:function a(s,o){var p=s.state,k=s.commit,U=s.dispatch;var L=o.query,Z=L===void 0?"":L,W=o.type,ae=W===void 0?0:W,re=o.onlyCheck,me=re===void 0?false:re,de=o.isScroll,ce=de===void 0?false:de,ve=o.checkExposed,_e=ve===void 0?function(){}:ve;if(!me){if(ce&&p.isScrollLoading)return;U("__set_state",{isScrollLoading:ce});!ce&&k(n,[]);Z.length&&U("__set_state",{showSearchResult:true,showSearchLoading:true})}$.get({url:"/cgi-bin/photogallery?action=search",data:function(){var e=12;if(p.imgsWrapperHeight!==0){if(p.showSearchResult){e=(Math.ceil((p.imgsWrapperHeight-62)/191)+1)*4}else{e=(Math.ceil((p.imgsWrapperHeight-314)/191)+1)*4}}!me&&U("__set_state",{lastSeq:p.lastSeq+p.lastLimit,lastLimit:e});return{query:Z,type:ae,limit:e,last_seq:p.lastSeq}}(),success:function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var d=t.base_resp&&t.base_resp.ret*1;switch(d){case 0:if(me&&!ce){U("__set_state",{showPublicPicRules:false,hasAgreePicRules:true,showAgreeBtn:false});return}U("__set_state",{needContinue:!!t.need_continue,showSearchLoading:!!t.need_continue});ce&&U("__set_state",{isScrollLoading:false});k(i,t.result.map(function(g){var C=g.seq,O=g.is_favorite;var x=g.photo,le=x.unique_id,we=x.supplier,Ae=x.type;var Ue=p.selectedImgs.some(function(Ce){return le&&Ce.fileId===le});var Me=g.photo,xe=Me.url,Se=Me.medium_url;return{seq:C,name:+we===100?be[we]:be[we]?"".concat(be[we],"\u63D0\u4F9B"):"\u672A\u77E5\u63D0\u4F9B\u65B9",fileId:le,status:0,format:"",isFromPublic:true,mediumUrl:Se,externalUrl:xe,url:"https://mp.weixin.qq.com/cgi-bin/photogalleryproxy?action=proxy&url=".concat(encodeURIComponent(xe),"&supplier=").concat(we,"&from_public_pic=1"),supplier:we,photoShapeType:Ae,selected:Ue,isFavor:!!O,error:false}}));if(t.history_list){k(y,t.history_list.map(function(g){return g.query||""}))}p.imgs.forEach(function(g,C){var O=new Image;O.onerror=function(){p.imgs[C]&&(p.imgs[C].error=true)};O.src=g.mediumUrl});if(Z.length){!ce&&(ge=0);t.result.length===0?++ge:ge=0;if(ge===3){U("__set_state",{needContinue:false,showSearchLoading:false})}_e()}break;case 730001:!me&&Vue.prototype.$tipsErr("\u8BF7\u5148\u540C\u610F\u5E76\u9075\u5B88\u300A\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u516C\u5171\u56FE\u7247\u5E93\u4F7F\u7528\u6761\u6B3E\u300B");Z.length&&U("resetLoadingStatus");break;case 730004:k(u,false);break;default:console.error(d);!me&&Vue.prototype.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");Z.length&&U("resetLoadingStatus");break}},error:function e(){Vue.prototype.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");Z.length&&U("resetLoadingStatus")}})},resetLoadingStatus:function a(s){var o=s.dispatch;o("__set_state",{showSearchLoading:false,isScrollLoading:false})},deleteQueryHistory:function a(s,o){var p=s.state,k=s.commit;if(o){k(y,p.historyQueryList.filter(function(U){return U!==o}));$.post({url:"/cgi-bin/photogallery?action=deletehistory",data:{query:o},success:function U(){var L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var Z=L.base_resp&&L.base_resp.ret*1;if(Z===0){k(y,p.historyQueryList.filter(function(W){return W!==o}))}else{}},error:function U(){}})}},searchQueryRecommend:function a(s,o){var p=s.commit;if(!o){p(z,[])}else{$.get({url:"/cgi-bin/photogallery?action=recommend",data:{query:o},success:function k(){var U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var L=U.base_resp&&U.base_resp.ret*1;switch(L){case 0:p(z,U.query_recommend_list);break;default:console.error(L);break}},error:function k(){}})}},star:function a(s,o){var p=s.state,k=s.commit;var U=o.imgList,L=o.idx,Z=o.query;var W=U[L],ae=W.isFavor,re=W.externalUrl,me=W.mediumUrl,de=W.photoShapeType,ce=W.supplier,ve=W.fileId;$.post({url:"/cgi-bin/photogallery?action=favor",data:{is_remove:ae*1,photo:JSON.stringify({url:re,medium_url:me,type:de,supplier:ce,unique_id:ve})},success:function _e(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var t=e.base_resp&&e.base_resp.ret*1;switch(t){case 0:k(r,{isFavor:!ae,imgList:U,idx:L});!ae&&pe.r21606({bizUin:window.wx.commonData.uin,fileId:ve,supplier:ce,actionScene:p.actionScene,actionType:1,query:Z});break;case 730002:Vue.prototype.$tipsErr("\u64CD\u4F5C\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");break;case 730003:Vue.prototype.$tipsErr("\u6536\u85CF\u5931\u8D25\uFF0C\u6700\u591A\u6536\u85CF1000\u5F20\u56FE\u7247");break;default:console.error(t);Vue.prototype.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5");break}},error:function _e(){Vue.prototype.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}})},__set_state:function a(s,o){s.commit("__set_state",o)}},storeFactory:function a(s){if(typeof s==="function"){return new J.Store(s(Re))}return new J.Store(Re)}};E.exports=Re},"./src/pages/modules/media_dialog/image_dialog/image_recommend/image_recommend.js":function(E,v,l){var D=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var j=l("./src/pages/modules/media_dialog/image_dialog/image_recommend/image_recommend.tpl");var V=l("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");l("./src/pages/modules/media_dialog/image_dialog/image_recommend/image_recommend.less");D.component("mp-image-recommend",{template:j,props:{src:{type:String,default:""},ratio:{type:Array},cropInfo:{type:Array,default:function M(){return[]}},selectedImgs:{type:Array,default:function M(){return[]}},text:{type:Boolean},textInfo:{type:Object},isVideoScene:{type:Boolean},vid:{type:[String,Number]}},data:function M(){return{recommendCovers:[]}},mounted:function M(){this.initData()},watch:{vid:function M(){this.initData()}},methods:{initData:function M(){var R=this;if(this.vid){V.get({url:"videoupload?action=get_recommend_screen_shot&vid=".concat(this.vid),success:function H(B){R.recommendCovers=B.pics}})}},onClickCover:function M(R){this.$emit("select-change",[{url:this.recommendCovers[R].cdnurl,selected:true}])}},computed:{selectedImgsUrl:function M(){return this.selectedImgs.map(function(R){return R.url})}}})},"./src/pages/modules/media_dialog/image_dialog/image_recommend/image_recommend.less":function(E,v,l){"use strict";l.r(v)},"./src/pages/modules/media_dialog/image_dialog/image_recommend/image_recommend.tpl":function(E,v){E.exports='<div class="image__recommend__container">\n  <span>\u5DF2\u4ECE\u89C6\u9891\u4E2D\u9009\u62E9\u4E86</span>\n  <ul\n    :class="`cover__recommend__container ${ratio[0].ratio === 16/9 ? \'cover__recommend__container_16_9\' : \'cover__recommend__container_1_1\'}`">\n    <div v-for="(recommendItem, recommendIdx) in recommendCovers"\n      :class="`cover__options__item ${selectedImgsUrl.indexOf(recommendItem.cdnurl) > -1 && \'cover__options__item__select\'}`"\n      @click="onClickCover(recommendIdx)">\n      <img class="cover__options__item__image" :src="recommendItem.cdnurl" />\n    </div>\n  </ul>\n</div>'},"./src/pages/modules/media_dialog/image_dialog/mutations.js":function(E,v,l){"use strict";Object.defineProperty(v,"__esModule",{value:true});v.WATER_STATUS_MUTATION=v.UPDATE_SELECTED_IMGS_URL_MUTATION=v.UPDATE_SELECTED_IMGS_MUTATION=v.UPDATE_PUBLIC_PICS_QUERY_ASSOCIATION_MUTATION=v.UPDATE_PUBLIC_PICS_MUTATION=v.UPDATE_PUBLIC_PICS_HISTORY_QUERY_MUTATION=v.UPDATE_IMG_URL_MUTATION=v.UPDATE_IMGS_MUTATION=v.UPDATE_GROUPS_MUTATION=v.UPDATE_COVERTING_COUNT_MUTATION=v.TOTAL_NUM_MUTATION=v.STAR_UNSTAR_PICS_MUTATION=v.SELECTED_IMGS_MUTATION=v.SELECTED_GROUP_MUTATION=v.REMOVE_SELECTED_IMGS_MUTATION=v.REMOVE_IMGS_MUTATION=v.INNER_STEP_MUTATION=v.INIT_IMGS_MUTATION=v.INIT_GROUPS_MUTATION=v.FROM_UPLOAD_MUTATION=v.DEFAULT_GROUP_MUTATION=v.CURRENT_SELECT_PAGE_MUTATION=v.CURRENT_PAGE_MUTATION=v.CROP_IMG_MUTATION=v.CROP_IMG_INFO_MUTATION=v.CROPPER_INFO_MUTATION=v.CHANGE_PUBLIC_PICS_USE_STATUS_MUTATION=v.ADD_SELECTED_IMGS_MUTATION=v.ADD_IMGS_MUTATION=void 0;var D=v.INNER_STEP_MUTATION="INNER_STEP_MUTATION";var j=v.DEFAULT_GROUP_MUTATION="DEFAULT_GROUP_MUTATION";var V=v.WATER_STATUS_MUTATION="WATER_STATUS_MUTATION";var M=v.INIT_IMGS_MUTATION="INIT_IMGS_MUTATION";var R=v.UPDATE_IMGS_MUTATION="UPDATE_IMGS_MUTATION";var H=v.ADD_IMGS_MUTATION="ADD_IMGS_MUTATION";var B=v.REMOVE_IMGS_MUTATION="REMOVE_IMGS_MUTATION";var F=v.UPDATE_IMG_URL_MUTATION="UPDATE_IMG_URL_MUTATION";var q=v.INIT_GROUPS_MUTATION="INIT_GROUPS_MUTATION";var f=v.UPDATE_GROUPS_MUTATION="UPDATE_GROUPS_MUTATION";var m=v.SELECTED_GROUP_MUTATION="SELECTED_GROUP_MUTATION";var I=v.SELECTED_IMGS_MUTATION="SELECTED_IMGS_MUTATION";var N=v.UPDATE_SELECTED_IMGS_MUTATION="UPDATE_SELECTED_IMGS_MUTATION";var J=v.ADD_SELECTED_IMGS_MUTATION="ADD_SELECTED_IMGS_MUTATION";var P=v.REMOVE_SELECTED_IMGS_MUTATION="REMOVE_SELECTED_IMGS_MUTATION";var K=v.UPDATE_SELECTED_IMGS_URL_MUTATION="UPDATE_SELECTED_IMGS_URL_MUTATION";var se=v.TOTAL_NUM_MUTATION="TOTAL_NUM_MUTATION";var T=v.CROP_IMG_MUTATION="CROP_IMG_MUTATION";var n=v.CROP_IMG_INFO_MUTATION="CROP_IMG_INFO_MUTATION";var h=v.CROPPER_INFO_MUTATION="CROPPER_INFO_MUTATION";var G=v.UPDATE_COVERTING_COUNT_MUTATION="UPDATE_COVERTING_COUNT_MUTATION";var Q=v.FROM_UPLOAD_MUTATION="FROM_UPLOAD_MUTATION";var ee=v.CURRENT_PAGE_MUTATION="CURRENT_PAGE_MUTATION";var X=v.CURRENT_SELECT_PAGE_MUTATION="CURRENT_SELECT_PAGE_MUTATION";var oe=v.STAR_UNSTAR_PICS_MUTATION="STAR_UNSTAR_PICS_MUTATION";var ne=v.UPDATE_PUBLIC_PICS_MUTATION="UPDATE_PUBLIC_PICS_MUTATION";var te=v.CHANGE_PUBLIC_PICS_USE_STATUS_MUTATION="CHANGE_PUBLIC_PICS_USE_STATUS_MUTATION";var fe=v.UPDATE_PUBLIC_PICS_HISTORY_QUERY_MUTATION="UPDATE_PUBLIC_PICS_HISTORY_QUERY_MUTATION";var ue=v.UPDATE_PUBLIC_PICS_QUERY_ASSOCIATION_MUTATION="UPDATE_PUBLIC_PICS_QUERY_ASSOCIATION_MUTATION"},"./src/pages/modules/media_dialog/image_dialog/report/report.js":function(E,v,l){var D=l("./src/3rd/utils/comm_report.js");var j=function M(R){D.report(21606,{bizuin:R.bizUin*1,pic_id:""+R.fileId,pic_source:R.supplier*1,action_scene:R.actionScene*1,action_type:R.actionType*1,query:""+R.query,query_source:R.querySource*1,query_rank:R.queryRank*1})};var V=function M(R){D.report(32580,{op_type:1,url:location.href,bizuin:R.bizuin||0,entry:+R.entry||0})};E.exports={r21606:j,r32580:V}},"./src/pages/modules/publish/tpl/appmsg.tpl":function(E,v){E.exports=`<template>
  <div class="weui-desktop-mass-media weui-desktop-mass-appmsg" :class="{'weui-desktop-mass-media_del': (info.is_deleted || info.deleteFlag || isAuditRejectDel) && !fromPublishDialog }" @mouseenter="reportShow(info)">
    <div class="weui-desktop-mass-appmsg__hd">
      <template v-if="isRectangle">
        <i class="weui-desktop-mass-appmsg__thumb" v-if="info.pic_cdn_url_16_9" :style="'background-image:url(\\'' + info.pic_cdn_url_16_9 + '\\');'"></i>
      </template>
      <template v-else>
        <i class="weui-desktop-mass-appmsg__thumb" v-if="info.cover" :style="'background-image:url(\\'' + info.cover + '\\');'"></i>
      </template>
      <i class="weui-desktop-mass-appmsg__thumb weui-desktop-mass-appmsg__thumb_default" v-else style='background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgNDAgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29uIC8gIERlZmF1bHQgLyBQaWM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iSWNvbi3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMTAwMDAwMDAxIj4KICAgICAgICA8ZyBpZD0iSWNvbi0vLS1EZWZhdWx0LS8tUGljIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTQwIiBzdHJva2U9IiMzNTM1MzUiIHN0cm9rZS13aWR0aD0iMyIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIzNyIgaGVpZ2h0PSIyNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtMzkiIGZpbGw9IiMzNTM1MzUiIHBvaW50cz0iMjkuOTU1NzY4NyAxMS42NzU1ODg5IDI0LjU0MzM1MzUgMTUuODA3NzA2OSAyNi40NDM0OTY2IDE5LjY2NDA1NjIgMTMuMTcyNzUzNiA3LjY0NDg4NjM2IDAuNjUgMTkuMTg3MDU4MyAwLjY1IDI1LjcxMzYzNjggMzguNDMxMjUgMjUuNzEzNjM2OCAzOC40MzEyNSAxOS4xODcwNTgzIj48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")'></i>
    </div>
    <div class="weui-desktop-mass-appmsg__bd">
      <div class="weui-desktop-mass-appmsg__bd_container">
        <!--\u5220\u9664\u56FE\u6587\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1begin \u524D\u7AEF\u5F3A\u4FE1\u4EFBis_deleted\u548Cdelete_time\u5B57\u6BB5-->
        <div v-if="info.is_deleted && !info.is_cooling_article && !fromPublishDialog">
          <mp-tooltip position="bottom-center" :delay="300" class="weui-desktop-mass-appmsg__tips">
            <span v-if="info.deleteFormatTime" class="weui-desktop-mass-appmsg__tips_content">\u5220\u9664\u65F6\u95F4 {{info.deleteFormatTime}} <span v-if="info.delete_nickname">\u64CD\u4F5C\u4EBA {{info.delete_nickname}}</span></span>
            <!-- \u52A0\u4E00\u5C42\u5220\u9664\u65F6\u95F4\u4E3A\u7A7A\u7684\u4FDD\u62A4 -->
            <span v-else class="weui-desktop-mass-appmsg__tips_content">\u5DF2\u5220\u9664</span>
            <a slot="target" v-if="!fromPublishDialog" :href="actualUrl || 'javascript:;'" target="_blank"  class="weui-desktop-mass-appmsg__title">
              <span v-if="keyword !== ''" v-html="info.highlight_title"></span>
              <span v-else-if="info.title" v-html="info.title"></span>
              <span v-else>\u672A\u547D\u540D\u56FE\u6587</span>
            </a>
            <div slot="target" v-else class="weui-desktop-mass-appmsg__title">
              <span v-if="keyword !== ''" v-html="info.title"></span>
              <span v-else-if="info.title" v-html="info.title"></span>
              <span v-else>\u672A\u547D\u540D\u56FE\u6587</span>
            </div>
          </mp-tooltip>

          <b class="weui-desktop-key-tag weui-desktop-key-tag_pay" v-if="info.is_pay_subscribe == 1">\u4ED8\u8D39</b>
          <b class="weui-desktop-key-tag" v-if="info.copyright_status == 11">\u539F\u521B</b>
          <mp-popover v-else-if="isForceReprint" trigger="hover" position="up-center" :delay="300"  class="weui-desktop-force-reprint__tips">
            <span class="weui-desktop-force-reprint__tips_content">
            \u56E0\u53D1\u8868\u65F6\u5185\u5BB9\u4E0E\u539F\u521B\u6587\u7AE0<a :href="info.reprint_source_url" target="_blank">\u300A{{info.reprint_source_title}}\u300B</a>\u8FC7\u4E8E\u76F8\u4F3C\uFF0C\u672A\u901A\u8FC7\u539F\u521B\u903B\u8F91\u6821\u9A8C\uFF0C\u53D1\u8868\u65F6\u539F\u6587\u5DF2\u88AB\u66FF\u6362\u4E3A\u539F\u521B\u6587\u7AE0\u6216\u4F7F\u7528\u5206\u4EAB\u8F6C\u8F7D\u5F62\u5F0F\u53D1\u8868\u3002
             </span>
            <b class="weui-desktop-key-tag" slot="target">\u8F6C\u8F7D<mp-icon :width="13" :height="13" icon="tips" slot="target" size="small" class="weui-desktop-force-reprint__tips_icon"></mp-icon></b>
          </mp-popover>
          <b class="weui-desktop-key-tag" v-else-if="isReprint">\u8F6C\u8F7D</b>
          <modify-info-tag :modify-status="info.modify_status" :modify-nickname="info.modify_nickname" :modify-time="info.modifyFormatTime"></modify-info-tag>
          <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>

          <!-- \u6765\u81EA\u4E8E\u8D26\u53F7\u8FC1\u79FB\u7684\u6587\u7AE0 @deantiwang -->
          <mp-popover trigger="hover" position="up-center" :delay="300" v-if="info.is_from_transfer == 1 && info.is_pay_subscribe == 1 && !hasPayPlugin" class="weui-desktop-mass-appmsg__tips">
            <span class="weui-desktop-mass-appmsg__tips_content">\u6B64\u5185\u5BB9\u6765\u81EA\u4E8E\u8FC1\u79FB\u524D\u7684\u8D26\u53F7\uFF0C\u5DF2\u4ED8\u8D39\u7684\u7528\u6237\u53EF\u4EE5\u7EE7\u7EED\u9605\u8BFB\u5168\u6587\uFF0C\u672A\u4ED8\u8D39\u7684\u7528\u6237\u4E0D\u652F\u6301\u4ED8\u8D39\uFF0C\u91CD\u65B0\u5F00\u901A\u4ED8\u8D39\u529F\u80FD\u540E\u5373\u53EF\u6B63\u5E38\u4ED8\u8D39\u3002</span>
            <mp-icon :width="13" :height="13" icon="tips" slot="target" size="small" class="weui-desktop-force-reprint__tips_icon"></mp-icon>
          </mp-popover>
        </div>
        <!--\u5220\u9664\u56FE\u6587\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1end-->

        <!--\u666E\u901A\u56FE\u6587\u6807\u9898begin-->
        <div v-else>
          <a v-if="!fromPublishDialog" :href="actualUrl || 'javascript:;'" target="_blank" class="weui-desktop-mass-appmsg__title" @click="checkAppmsgJumpSuc(info.content_url)" style="overflow: visible;">
            <span v-if="keyword !== ''" v-html="info.highlight_title"></span>
            <span v-else-if="info.title" v-html="info.title"></span>
            <span v-else>\u672A\u547D\u540D\u56FE\u6587</span>

            <b class="weui-desktop-key-tag weui-desktop-key-tag_pay" v-if="info.is_pay_subscribe == 1">\u4ED8\u8D39</b>
            <b class="weui-desktop-key-tag" v-if="info.copyright_status == 11">\u539F\u521B</b>
            <mp-popover v-else-if="isForceReprint" trigger="hover" position="up-center" :delay="300"  class="weui-desktop-force-reprint__tips">
              <span class="weui-desktop-force-reprint__tips_content">
              \u56E0\u53D1\u8868\u65F6\u5185\u5BB9\u4E0E\u539F\u521B\u6587\u7AE0<a :href="info.reprint_source_url" target="_blank">\u300A{{info.reprint_source_title}}\u300B</a>\u8FC7\u4E8E\u76F8\u4F3C\uFF0C\u672A\u901A\u8FC7\u539F\u521B\u903B\u8F91\u6821\u9A8C\uFF0C\u53D1\u8868\u65F6\u539F\u6587\u5DF2\u88AB\u66FF\u6362\u4E3A\u539F\u521B\u6587\u7AE0\u6216\u4F7F\u7528\u5206\u4EAB\u8F6C\u8F7D\u5F62\u5F0F\u53D1\u8868\u3002
               </span>
              <b class="weui-desktop-key-tag" slot="target">\u8F6C\u8F7D<mp-icon :width="13" :height="13" icon="tips" slot="target" size="small" class="weui-desktop-force-reprint__tips_icon"></mp-icon></b>
            </mp-popover>
            <b class="weui-desktop-key-tag" v-else-if="isReprint">\u8F6C\u8F7D</b>

            <modify-info-tag :modify-status="info.modify_status" :modify-nickname="info.modify_nickname" :modify-time="info.modifyFormatTime"></modify-info-tag>
            <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            <!-- \u6765\u81EA\u4E8E\u8D26\u53F7\u8FC1\u79FB\u7684\u6587\u7AE0 @deantiwang -->
            <mp-popover trigger="hover" position="up-center" :delay="300" v-if="info.is_from_transfer == 1 && info.is_pay_subscribe == 1 && !hasPayPlugin" class="weui-desktop-mass-appmsg__tips">
              <span class="weui-desktop-mass-appmsg__tips_content">\u6B64\u5185\u5BB9\u6765\u81EA\u4E8E\u8FC1\u79FB\u524D\u7684\u8D26\u53F7\uFF0C\u5DF2\u4ED8\u8D39\u7684\u7528\u6237\u53EF\u4EE5\u7EE7\u7EED\u9605\u8BFB\u5168\u6587\uFF0C\u672A\u4ED8\u8D39\u7684\u7528\u6237\u4E0D\u652F\u6301\u4ED8\u8D39\uFF0C\u91CD\u65B0\u5F00\u901A\u4ED8\u8D39\u529F\u80FD\u540E\u5373\u53EF\u6B63\u5E38\u4ED8\u8D39\u3002</span>
              <mp-icon :width="13" :height="13" icon="tips" slot="target" size="small" class="weui-desktop-force-reprint__tips_icon"></mp-icon>
            </mp-popover>
          </a>
          <div v-else class="weui-desktop-mass-appmsg__titile_wrap">
            <div class="weui-desktop-mass-appmsg__title">
              <span v-if="keyword !== ''" v-html="info.title"></span>
              <span v-else-if="info.title" v-html="info.title"></span>
              <span v-else>\u672A\u547D\u540D\u56FE\u6587</span>
            </div>

            <div class="weui-desktop-mass-appmsg__title_tag">
              <b class="weui-desktop-key-tag weui-desktop-key-tag_pay" :class="item.payDisable ? 'disable-tag_pay':''" v-if="info.is_pay_subscribe">\u4ED8\u8D39</b>
              <b class="weui-desktop-key-tag" v-if="info.copyright_status == 11">\u539F\u521B</b>
              <b class="weui-desktop-mass-appmsg__title_delete" v-if="info.is_deleted || info.deleteFlag">\u5DF2\u5220\u9664</b>
              <mp-popover v-else-if="isForceReprint" trigger="hover" position="up-center" :delay="300"  class="weui-desktop-force-reprint__tips">
                <span class="weui-desktop-force-reprint__tips_content">
                \u56E0\u53D1\u8868\u65F6\u5185\u5BB9\u4E0E\u539F\u521B\u6587\u7AE0<a :href="info.reprint_source_url" target="_blank">\u300A{{info.reprint_source_title}}\u300B</a>\u8FC7\u4E8E\u76F8\u4F3C\uFF0C\u672A\u901A\u8FC7\u539F\u521B\u903B\u8F91\u6821\u9A8C\uFF0C\u53D1\u8868\u65F6\u539F\u6587\u5DF2\u88AB\u66FF\u6362\u4E3A\u539F\u521B\u6587\u7AE0\u6216\u4F7F\u7528\u5206\u4EAB\u8F6C\u8F7D\u5F62\u5F0F\u53D1\u8868\u3002
                 </span>
                <b class="weui-desktop-key-tag" slot="target">\u8F6C\u8F7D<mp-icon :width="13" :height="13" icon="tips" slot="target" size="small" class="weui-desktop-force-reprint__tips_icon"></mp-icon></b>
              </mp-popover>
              <b class="weui-desktop-key-tag" v-else-if="isReprint">\u8F6C\u8F7D</b>


              <modify-info-tag :modify-status="info.modify_status" :modify-nickname="info.modify_nickname" :modify-time="info.modifyFormatTime"></modify-info-tag>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
              <mp-album-intro class="appmsg-pay-intro" v-if="info?.appmsg_album_infos?.length > 0 && isAlbum && !item.selected && !item.isAddCurAlbum" :append-to-body="true" pos="up-left">
                <p slot="intro">
                  <p>\u5355\u7BC7\u5185\u5BB9\u4EC5\u80FD\u6536\u5F55\u4E8E\u4E00\u4E2A\u5408\u96C6\u4E2D\u3002</p>
                </p>
              </mp-album-intro>
              <mp-album-intro class="appmsg-pay-intro" v-else-if="item.payDisable" :append-to-body="true" pos="up-left">
                <p slot="intro">
                  <p v-if="item.isDelAlbum">\u5DF2\u6DFB\u52A0\u5230\u5176\u4ED6\u4ED8\u8D39\u5408\u96C6\uFF0C\u5408\u96C6\u5DF2\u88AB\u5220\u9664</p>
                  <p v-else-if="item.isAddPayAlbum">\u5185\u5BB9\u5DF2\u6DFB\u52A0\u81F3\u5176\u4ED6\u4ED8\u8D39\u5408\u96C6</p>
                  <p v-else-if="info.is_pay_subscribe == 1 && !item.isAddCurAlbum">\u4E3A\u907F\u514D\u7528\u6237\u91CD\u590D\u4ED8\u8D39\uFF0C\u5408\u96C6\u53D1\u8868\u540E\u4E0D\u80FD\u518D\u6DFB\u52A0\u5355\u7BC7\u4ED8\u8D39\u6587\u7AE0</p>
                  <p v-else-if="info.ban_flag === 1">\u6587\u7AE0\u56E0\u8FDD\u89C4\u4E0D\u53EF\u52A0\u5165\u4ED8\u8D39\u5408\u96C6</p>
                </p>
              </mp-album-intro>
              <mp-album-intro class="appmsg-pay-intro" v-else-if="info.is_pay_subscribe == 1 && isPayAlbum" :append-to-body="true" pos="up-left">
                <p slot="intro">
                  <p>\u6587\u7AE0\u6DFB\u52A0\u81F3\u4ED8\u8D39\u5408\u96C6\u540E\uFF0C\u4E0D\u518D\u652F\u6301\u5355\u7BC7\u8D2D\u4E70\uFF0C\u8BFB\u8005\u9700\u8D2D\u4E70\u5408\u96C6\u540E\u624D\u53EF\u9605\u8BFB\u5168\u6587</p>
                </p>
              </mp-album-intro>
            </div>
          </div>
        </div>
        <!--\u666E\u901A\u56FE\u6587\u6807\u9898end-->

        <!--\u52A0\u4E0A\u53D1\u8868\u8BB0\u5F55\u56FE\u6587\u6458\u8981-->
        <div v-if="info.digest && !fromPublishDialog && keyword !== ''" class="weui-desktop-mass-appmsg__digest">
          <span v-html="info.digest"></span>
        </div>
        <p class="weui-desktop-mass-appmsg__desc" v-if="keyword !== '' && info.content && info.content !== ''" v-html="info.content">
        </p>
        <div class="album_appmsg_title" v-if="info.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
          <div v-if="info.is_pay_subscribe == 1 && isPayAlbum && info.wecoin_count" style="margin-bottom:2px;">\u539F\u4EF7 <span class="wecoin-icon" style="margin-bottom:3px"></span> {{info.wecoin_count}} \u5FAE\u4FE1\u8C46</div>
          <template v-for="item in info.appmsg_album_infos">
            <span v-if="item.del_flag === undefined ? true : !item.del_flag">#{{item.title}}</span>
          </template>
        </div>
        <div class="album_appmsg_title" v-else-if="info.is_pay_subscribe == 1 && isPayAlbum && info.wecoin_count">
          <span>\u539F\u4EF7 <span class="wecoin-icon" style="margin-bottom:3px"></span> {{info.wecoin_count}} \u5FAE\u4FE1\u8C46</span>
        </div>
        <modify-check-info :modify-status="info.modify_status"></modify-check-info>
        <template v-if="!fromPublishDialog && !item.timerSendInfo">
          <num-item v-if="hasnum" :info="info" :i="i" :item="item"></num-item>
        </template>
      </div>
    </div>
    <div class="weui-desktop-mass-appmsg__ft" v-if="!fromPublishDialog">
      <div class="weui-desktop-mass-media__opr">
        <!--<template v-if="!info.is_deleted  && item.view.status === '\u53D1\u5E03\u6210\u529F' && info.copyright_status !== 12 && info.copyright_status !== 101 && info.copyright_status !== 201 && info.copyright_status !== 202">
          <tag-item :info="info" :i="i" :item="item" :realname-type="realnameType"></tag-item>
        </template>-->
        <!--\u8FD9\u91CC\u662F\u5220\u9664\u540E\u91CD\u65B0\u7F16\u8F91icon-->
         <div v-if="(info.is_deleted || info.is_cooling_article) && item.copy_appmsg_id" class="weui-desktop-mass-media__opr__meta">
          <button slot="target" @click="reeditmsg" class="re-edit_btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
            <mp-icon class="re-edit_icon" icon="edit" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
            <span class="re-edit_wording">\u91CD\u65B0\u7F16\u8F91</span>
          </button>
         </div>
        <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E begin -->
        <template v-if="showToDataPageBtn">
          <div class="weui-desktop-mass-media__opr__meta">
            <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="item.view.dataPageWording" :delay="300">
              <button slot="target" @click="goToDataPage(info.appmsgid, info.itemidx, item.view.publishDate, item.view.isGoToDataPage)" :class="{'weui-desktop-opr-btn_disabled':!item.view.isGoToDataPage}" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <mp-icon icon="rate" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
              </button>
            </mp-tooltip>
          </div>
        </template>
        <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E end -->
        <mp-popover position="up-right" v-model="info.undelShow" trigger='click'>
            <a slot="target" style="cursor: pointer;" v-if="info.can_undelete&&info.is_deleted">\u6062\u590D\u8FD9\u7BC7\u5185\u5BB9</a>
            <div slot="content">\u6062\u590D\u540E\u7528\u6237\u5C06\u6B63\u5E38\u8BBF\u95EE\u6B64\u9875\u9762\uFF0C\u786E\u5B9A\u6062\u590D\uFF1F\u8BE5\u5165\u53E3\u4E3A\u6062\u590D\u6545\u969C\u6570\u636E\u7684\u4E34\u65F6\u5165\u53E3\uFF0C\u5C06\u57289\u670811\u65E5\u96F6\u70B9\u5173\u95ED\u3002</div>
            <div slot="bar">
              <mp-button type="primary" @click="undel(info)" >\u786E\u5B9A</mp-button>
              <mp-button type="default" @click="info.undelShow=false">\u53D6\u6D88</mp-button>
            </div>
        </mp-popover>

        <!--\u4FEE\u6539\u56FE\u6587 begin-->
        <modify-icon-item :item="item" :info="info" msg-type="appMsg" ></modify-icon-item>
        <!--\u4FEE\u6539\u56FE\u6587 end-->

        <!-- \u4ED8\u8D39\u52A0\u70ED -->
        <template v-if="canUseTlrecPromotion && info.is_admin">
          <div class="weui-desktop-mass-media__opr__meta">
            <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="info.is_promotable ? '\u52A0\u70ED\u6587\u7AE0' : '\u4E0D\u53EF\u52A0\u70ED'" :delay="300">
              <button slot="target" @click="goToHeatPage(info)" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <i class="heat-icon" :class="{
                  'heat-icon__disabled': !info.is_promotable,
                }">
              </button>
            </mp-tooltip>
          </div>
        </template>
        <!-- \u4ED8\u8D39\u52A0\u70ED\u7ED3\u675F -->

        <!--<template v-if="!item.timerSendInfo">
          <div class="weui-desktop-mass-media__opr__meta js_del">
            <del-item :i="i" :idx="idx" v-if="hasdel" :item="item" :is-appmsg="true" :info="info"></del-item>
          </div>
        </template> -->

        <more-item :i="i" :idx="idx" :item="item" :is-appmsg="true" :info="info"
            v-if="!item.timerSendInfo && !info.is_deleted"
            :has-close-recommend.sync="hasCloseRecommend"
            :show-delete="!item.timerSendInfo && !info.is_deleted"
            :show-tags="showMoreTips">
        </more-item>
      </div>
    </div>
  </div>
</template>

`},"./src/pages/modules/publish/tpl/audio.tpl":function(E,v){E.exports=`<template>
  <div class="weui-desktop-mass-media weui-desktop-mass-appmsg weui-desktop-mass-audio" :class="{'weui-desktop-mass-media_del': (isAudioDeleted || isAuditRejectDel) && !fromPublishDialog,'weui-desktop-mass-audio__playing':info.isPlaying}">
    <div class="weui-desktop-mass-appmsg__hd">
      <div class="weui-desktop-mass-appmsg__thumb" @click="audioPlay(info)">
        <!--<div :style="{width:info.progress+'%'}" class="weui-desktop-mass-audio__progress js_audio_progress"></div>-->
        <div class="weui-desktop-mass-audio__info">
          <!--<mp-icon icon="voice" :width="32" :height="32"></mp-icon>-->
          <em class="weui-desktop-audio-player__switch" :class="{'green': info.progress>0}"></em>
          <div class="weui-desktop-mass-audio__desc">
            <em class="weui-desktop-mass-audio__length_total" v-if="info.duration">{{info.duration|formatDuration}}</em>
          </div>
        </div>
      </div>
    </div>
    <div class="weui-desktop-mass-appmsg__bd">
      <div class="weui-desktop-mass-appmsg__bd_container">
        <!--\u5220\u9664\u97F3\u9891\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1begin \u524D\u7AEF\u5F3A\u4FE1\u4EFBis_deleted\u548Cdelete_time\u5B57\u6BB5-->
        <mp-tooltip position="bottom-center" :delay="300" v-if="info.is_deleted && !info.is_cooling_article && !fromPublishDialog" class="weui-desktop-mass-appmsg__tips">
          <span v-if="info.deleteFormatTime" class="weui-desktop-mass-appmsg__tips_content">\u5220\u9664\u65F6\u95F4 {{info.deleteFormatTime}} <span v-if="info.delete_nickname">\u64CD\u4F5C\u4EBA {{info.delete_nickname}}</span></span>
          <!--\u52A0\u4E00\u5C42\u5220\u9664\u65F6\u95F4\u4E3A\u7A7A\u7684\u4FDD\u62A4-->
          <span v-else class="weui-desktop-mass-appmsg__tips_content">\u5DF2\u5220\u9664</span>
          <template v-if="!fromPublishDialog" slot="target">
            <a v-if="keyword !== ''" class="weui-desktop-mass-appmsg__title weui-desktop-mass-audio__title"  @click="go" href="javascript:void(0);">
              <span v-html="info.highlight_title"></span>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </a>
            <a v-else class="weui-desktop-mass-appmsg__title weui-desktop-mass-audio__title"  @click="go" href="javascript:void(0);">
              <span v-html="info.title"></span>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </a>
          </template>
          <template v-else slot="target">
            <div v-if="keyword !== ''" class="weui-desktop-mass-appmsg__title weui-desktop-mass-audio__title">
              <span v-html="info.title"></span>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </div>
            <div v-else class="weui-desktop-mass-appmsg__title weui-desktop-mass-audio__title">
              <span v-html="info.title"></span>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </div>
            <div v-if="info?.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
              <span v-for="item in info.appmsg_album_infos" v-html="item.title"></span>
            </div>
            <div v-if="info.appmsg_title !== info.title && isAlbum" class="album_appmsg_title">\u6765\u6E90\u6587\u7AE0: {{info.appmsg_title}}</div>
          </template>
        </mp-tooltip>
        <!--\u5220\u9664\u97F3\u9891\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1end-->

        <!--\u666E\u901A\u97F3\u9891\u6807\u9898begin-->
        <div v-else>
          <template v-if="!fromPublishDialog">
            <a v-if="keyword !== ''" class="weui-desktop-mass-appmsg__title weui-desktop-mass-audio__title"  @click="go" href="javascript:void(0);">
              <span v-html="info.highlight_title"></span>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>

            </a>
            <a v-else class="weui-desktop-mass-appmsg__title weui-desktop-mass-audio__title"  @click="go" href="javascript:void(0);">
              <span v-html="info.title"></span>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </a>
          </template>
          <template v-else>
            <div v-if="keyword !== ''" class="weui-desktop-mass-appmsg__title weui-desktop-mass-audio__title">
              <span v-html="info.title"></span>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
              <b class="weui-desktop-mass-appmsg__title_delete" v-if="isAudioDeleted">\u5DF2\u5220\u9664</b>

              <mp-album-intro class="appmsg-pay-intro" v-if="info?.appmsg_album_infos?.length > 0 && isAlbum && !item.selected" :append-to-body="true" pos="up-left">
                <p slot="intro">
                  <p>\u5355\u7BC7\u5185\u5BB9\u4EC5\u80FD\u6536\u5F55\u4E8E\u4E00\u4E2A\u5408\u96C6\u4E2D\u3002</p>
                </p>
              </mp-album-intro>
            </div>
            <div v-else class="weui-desktop-mass-appmsg__title weui-desktop-mass-audio__title">
              <span v-html="info.title"></span>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
              <b class="weui-desktop-mass-appmsg__title_delete" v-if="isAudioDeleted">\u5DF2\u5220\u9664</b>
              <mp-album-intro class="appmsg-pay-intro" v-if="info?.appmsg_album_infos?.length > 0 && isAlbum && !item.selected" :append-to-body="true" pos="up-left">
                <p slot="intro">
                  <p>\u5355\u7BC7\u5185\u5BB9\u4EC5\u80FD\u6536\u5F55\u4E8E\u4E00\u4E2A\u5408\u96C6\u4E2D\u3002</p>
                </p>
              </mp-album-intro>
            </div>
            <div v-if="info?.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
              <span v-for="item in info.appmsg_album_infos">#{{item.title}}  </span>
            </div>
            <div v-if="info.appmsg_title !== info.title && isAlbum" class="album_appmsg_title">\u6765\u6E90\u6587\u7AE0: {{info.appmsg_title}}</div>
          </template>
        </div>
        <!--\u666E\u901A\u97F3\u9891\u6807\u9898end-->

        <num-item v-if="hasnum" :info="info" :i="i" :item="item"></num-item>
      </div>

    </div>
    <div class="weui-desktop-mass-appmsg__ft" v-if="!fromPublishDialog">
      <div class="weui-desktop-mass-media__opr">
      <!--\u8FD9\u91CC\u662F\u5220\u9664\u540E\u91CD\u65B0\u7F16\u8F91icon-->
      <div v-if="(info.is_deleted || info.is_cooling_article) && item.copy_appmsg_id"  class="weui-desktop-mass-media__opr__meta">
        <button slot="target" @click="reeditmsg" class="re-edit_btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
            <mp-icon class="re-edit_icon" icon="edit" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
            <span class="re-edit_wording">\u91CD\u65B0\u7F16\u8F91</span>
          </button>
      </div>
      <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E -->
      <template v-if="showToDataPageBtn">
        <div class="weui-desktop-mass-media__opr__meta">
          <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="item.view.dataPageWording" :delay="300">
            <button slot="target" @click="goToDataPage(info.appmsgid, info.itemidx, item.view.publishDate, item.view.isGoToDataPage)" :class="{'weui-desktop-opr-btn_disabled':!item.view.isGoToDataPage}" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
              <mp-icon icon="rate" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
            </button>
          </mp-tooltip>
        </div>
      </template>
      <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E end -->

        <!-- <template v-if="(canUsePublicTag === 1 || realnameType === 2) && (item.view.status === '\u5DF2\u7FA4\u53D1' || item.view.status === '\u5DF2\u53D1\u8868')">
          <tag-item :info="info" :i="i" :item="item"></tag-item>
        </template> -->

        <!-- <span class="weui-desktop-mass-media__opr__meta js_del" v-if="hasdel">
          <del-item :i="i" :item="item" :is-appmsg="item.type==9" :idx="idx" :info="info"></del-item>
        </span> -->

        <more-item :i="i" :item="item" :is-appmsg="item.type==9" :idx="idx" :info="info"
        v-if="!isAudioDeleted"
        :has-close-recommend.sync="hasCloseRecommend"
        :show-delete="hasdel">
        </more-item>
      </div>
    </div>
</div>
</template>`},"./src/pages/modules/publish/tpl/del.tpl":function(E,v){E.exports=`<!--<mp-popover  position="up-right" v-if="isAppmsg" v-model="info.delPopShow">
    <mp-tooltip slot="target" class="weui-desktop-link" content="\u5220\u9664" position="down-center" :delay="300" >
      <button  slot="target" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
        <icon-svg src="pages/modules/base/svg/default/common-del.svg?__symbol"></icon-svg>
      </button>
    </mp-tooltip>
    <div slot="content">{{info.delWording || '\u5220\u9664\u540E\u7528\u6237\u5C06\u65E0\u6CD5\u8BBF\u95EE\u6B64\u9875\u9762\uFF0C\u786E\u5B9A\u5220\u9664\uFF1F\u8BE5\u64CD\u4F5C\u53EA\u80FD\u5220\u9664\u5386\u53F2\u6D88\u606F\u4E2D\u7684\u8BB0\u5F55\uFF0C\u4E0D\u80FD\u5220\u9664\u5DF2\u7ECF\u6210\u529F\u53D1\u9001\u5230\u7528\u6237\u7684\u6D88\u606F\u3002'}}</div>
    <div slot="bar">
      <mp-button type="primary" @click="delItem(item,i,isAppmsg,idx)">\u786E\u5B9A</mp-button>
      <mp-button type="default" @click="info.delPopShow=false">\u53D6\u6D88</mp-button>
    </div>
</mp-popover>   

<mp-popover  position="up-right" v-else v-model="item.delPopShow">
    <mp-tooltip slot="target" class="weui-desktop-link" content="\u5220\u9664" position="down-center" :delay="300" >
      <button  slot="target" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
        <icon-svg src="pages/modules/base/svg/default/common-del.svg?__symbol"></icon-svg>
      </button>
    </mp-tooltip>
    <div slot="content">{{item.delWording || '\u5220\u9664\u540E\u7528\u6237\u5C06\u65E0\u6CD5\u8BBF\u95EE\u6B64\u9875\u9762\uFF0C\u786E\u5B9A\u5220\u9664\uFF1F\u8BE5\u64CD\u4F5C\u53EA\u80FD\u5220\u9664\u5386\u53F2\u6D88\u606F\u4E2D\u7684\u8BB0\u5F55\uFF0C\u4E0D\u80FD\u5220\u9664\u5DF2\u7ECF\u6210\u529F\u53D1\u9001\u5230\u7528\u6237\u7684\u6D88\u606F\u3002'}}</div>
    <div slot="bar">
      <mp-button type="primary" @click="delItem(item,i,isAppmsg,idx)">\u786E\u5B9A</mp-button>
      <mp-button type="default" @click="item.delPopShow=false">\u53D6\u6D88</mp-button>
    </div>
</mp-popover> -->
<div position="up-right" v-if="isAppmsg" trigger="click" class="delect_content">
    <div class="weui-desktop-popover__content">{{info.delWording || '\u5220\u9664\u540E\u7528\u6237\u5C06\u65E0\u6CD5\u8BBF\u95EE\u6B64\u9875\u9762\uFF0C\u786E\u5B9A\u5220\u9664\uFF1F'}}</div>
    <div class="weui-desktop-popover__bar">
      <mp-button type="primary" @click="delItem(item,i,isAppmsg,idx)">\u786E\u5B9A</mp-button>
      <mp-button type="default" @click="() => {info.delPopShow=false; this.$emit('cancel');}">\u53D6\u6D88</mp-button>
    </div>
</div>   

<div position="up-right" v-else trigger="click" class="delect_content">
    <div class="weui-desktop-popover__content">{{item.delWording || '\u5220\u9664\u540E\u7528\u6237\u5C06\u65E0\u6CD5\u8BBF\u95EE\u6B64\u9875\u9762\uFF0C\u786E\u5B9A\u5220\u9664\uFF1F'}}</div>
    <div class="weui-desktop-popover__bar">
      <mp-button type="primary" @click="delItem(item,i,isAppmsg,idx)">\u786E\u5B9A</mp-button>
      <mp-button type="default" @click="() => {item.delPopShow=false; this.$emit('cancel');}">\u53D6\u6D88</mp-button>
    </div>
</div> 
`},"./src/pages/modules/publish/tpl/img.tpl":function(E,v){E.exports=`
<div class="weui-desktop-mass-media weui-desktop-mass-img weui-desktop-mass-appmsg" v-if="fromPublishDialog || item.type==9 || !!item.publish_info" :class="{'weui-desktop-mass-media_del': (isImgDeleted || isAuditRejectDel) && !fromPublishDialog}" @mouseenter="reportShow(info)">
    <div class="weui-desktop-mass-appmsg__hd">
      <template v-if="!fromPublishDialog">
        <div class="weui-desktop-mass-appmsg__thumb" :style="'background-image:url(\\'' + cover + '\\');'" :href="cover" target="_blank">
          <mp-icon icon="defaultPic" :width="20" :height="20"></mp-icon>
        </div>
      </template>
      <template v-else>
      <div class="weui-desktop-mass-appmsg__thumb" :style="'background-image:url(\\'' + cover + '\\');'">
        <mp-icon icon="defaultPic" :width="20" :height="20"></mp-icon>
      </div>
      </template>

    </div>

    <div class="weui-desktop-mass-appmsg__bd">
      <div class="weui-desktop-mass-appmsg__bd_container">
        <!--\u5220\u9664\u56FE\u7247\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1begin \u524D\u7AEF\u5F3A\u4FE1\u4EFBis_deleted\u548Cdelete_time\u5B57\u6BB5-->
        <mp-tooltip position="bottom-center" :delay="300" v-if="info.is_deleted && !info.is_cooling_article && !fromPublishDialog" class="weui-desktop-mass-appmsg__tips">
          <span v-if="info.deleteFormatTime" class="weui-desktop-mass-appmsg__tips_content">\u5220\u9664\u65F6\u95F4 {{info.deleteFormatTime}}  <span v-if="info.delete_nickname">\u64CD\u4F5C\u4EBA {{info.delete_nickname}}</span></span>
          <!--\u52A0\u4E00\u5C42\u5220\u9664\u65F6\u95F4\u4E3A\u7A7A\u7684\u4FDD\u62A4-->
          <span v-else class="weui-desktop-mass-appmsg__tips_content">\u5DF2\u5220\u9664</span>
          <template v-if="!fromPublishDialog" slot="target">
            <a v-if="info.title" class="weui-desktop-mass-appmsg__title" :href="actualUrl || 'javascript:;'" target="_blank">
              <span v-if="keyword !== ''" v-html="info.title"></span>
              <span v-else v-html="info.title"></span>
              <modify-info-tag :modify-status="info.modify_status" :modify-nickname="info.modify_nickname" :modify-time="info.modifyFormatTime"></modify-info-tag>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </a>
          </template>
          <template v-else slot="target">
            <span v-if="info.title" class="weui-desktop-mass-appmsg__title">
              <span v-if="keyword !== ''" v-html="info.highlight_title"></span>
              <span v-else v-html="info.title"></span>
              <modify-info-tag :modify-status="info.modify_status" :modify-nickname="info.modify_nickname" :modify-time="info.modifyFormatTime"></modify-info-tag>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </span>
            <div class="album_appmsg_title" v-if="info?.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
              <span v-for="item in info.appmsg_album_infos">#{{item.title}}  </span>
            </div>
          </template>
        </mp-tooltip>
        <!-- \u5220\u9664\u56FE\u7247\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1end -->

        <!-- \u666E\u901A\u56FE\u7247\u6807\u9898begin -->
        <div v-else>
          <template v-if="!fromPublishDialog">
            <a v-if="info.title" class="weui-desktop-mass-appmsg__title" :href="actualUrl || 'javascript:;'" target="_blank">
              <span v-if="keyword !== ''" v-html="info.title"></span>
              <span v-else v-html="info.title"></span>
              <modify-info-tag :modify-status="info.modify_status" :modify-nickname="info.modify_nickname" :modify-time="info.modifyFormatTime"></modify-info-tag>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </a>
          </template>
          <template v-else>
            <span v-if="info.title" class="weui-desktop-mass-appmsg__title">
              <span v-if="keyword !== ''" v-html="info.highlight_title || info.title"></span>
              <span v-else v-html="info.title"></span>
              <modify-info-tag :modify-status="info.modify_status" :modify-nickname="info.modify_nickname" :modify-time="info.modifyFormatTime"></modify-info-tag>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
              <b class="weui-desktop-mass-appmsg__title_delete" v-if="isImgDeleted">\u5DF2\u5220\u9664</b>
              <mp-album-intro class="appmsg-pay-intro" v-if="info?.appmsg_album_infos?.length > 0 && isAlbum && !item.selected" :append-to-body="true" pos="up-left">
                <p slot="intro">
                  <p>\u5355\u7BC7\u5185\u5BB9\u4EC5\u80FD\u6536\u5F55\u4E8E\u4E00\u4E2A\u5408\u96C6\u4E2D\u3002</p>
                </p>
              </mp-album-intro>
            </span>
            <div class="album_appmsg_title" v-if="info?.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
              <span v-for="item in info.appmsg_album_infos">#{{item.title}}  </span>
            </div>
          </template>
        </div>
        <!--\u666E\u901A\u56FE\u7247\u6807\u9898end-->
        <modify-check-info :modify-status="info.modify_status"></modify-check-info>
        <num-item v-if="hasnum && !fromPublishDialog" :info="info" :i="i" :item="item"></num-item>
      </div>
    </div>
    <div class="weui-desktop-mass-appmsg__ft" v-if="!fromPublishDialog">
      <!--\u6570\u636E\u7EDF\u8BA1\u5165\u53E3begin-->
      <div class="weui-desktop-mass-media__opr js_del">
            <!--\u8FD9\u91CC\u662F\u5220\u9664\u540E\u91CD\u65B0\u7F16\u8F91icon-->
          <div v-if="(info.is_deleted || info.is_cooling_article) && item.copy_appmsg_id"  class="weui-desktop-mass-media__opr__meta">
            <button slot="target" @click="reeditmsg" class="re-edit_btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
              <mp-icon class="re-edit_icon" icon="edit" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
              <span class="re-edit_wording">\u91CD\u65B0\u7F16\u8F91</span>
            </button>
          </div>
          <template v-if="showToDataPageBtn">
          <div class="weui-desktop-mass-media__opr__meta">
            <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="item.view.dataPageWording" :delay="300">
              <button slot="target" @click="goToDataPage(info.appmsgid, info.itemidx, item.view.publishDate, item.view.isGoToDataPage)" :class="{'weui-desktop-opr-btn_disabled':!item.view.isGoToDataPage}" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <mp-icon icon="rate" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
              </button>
            </mp-tooltip>
          </div>
        </template>
        <!--<del-item v-if="hasdel" :i="i" :item="item" :idx="idx" :is-appmsg="item.type==9" :info="info"></del-item>-->

        <!--\u4FEE\u6539\u56FE\u6587 begin-->
        <modify-icon-item :item="item" :info="info" msg-type="imgMsg"></modify-icon-item>
        <!--\u4FEE\u6539\u56FE\u6587 end-->

        <template v-if="canUseTlrecPromotion && info.is_admin">
          <div class="weui-desktop-mass-media__opr__meta">
            <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="info.is_promotable ? '\u52A0\u70ED\u6587\u7AE0' : '\u4E0D\u53EF\u52A0\u70ED'" :delay="300">
              <button slot="target" @click="goToHeatPage(info)" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <i class="heat-icon" :class="{
                  'heat-icon__disabled': !info.is_promotable,
                }">
              </button>
            </mp-tooltip>
          </div>
        </template>

        <!-- \u56FE\u7247\u6D88\u606F\u6CA1\u6709\u8BDD\u9898 -->
        <more-item v-if="!isImgDeleted" :i="i" :item="item" :idx="idx" :is-appmsg="item.type==9" :info="info" :show-delete="hasdel" :has-close-recommend.sync="hasCloseRecommend" :show-tags="true">
        </more-item>
      </div>
      <!--\u6570\u636E\u7EDF\u8BA1\u5165\u53E3end-->
    </div>

</div>

<div class="weui-desktop-mass-media weui-desktop-mass-img" v-else :class="{'weui-desktop-mass-media_del': isImgDeleted}">

    <a class="weui-desktop-mass-img__thumb" :href="cover" target="_blank">
      <img :src="cover || info.cover" alt="">
    </a>
    <!--<span class="weui-desktop-mass-media__opr js_del">
      <del-item v-if="hasdel" :i="i" :item="item" :idx="idx" :is-appmsg="item.type==9" :info="info"></del-item>
    </span>-->
    <!-- \u56FE\u7247\u6D88\u606F\u6CA1\u6709\u8BDD\u9898 -->
    <more-item :i="i" :item="item" :idx="idx" :is-appmsg="item.type==9" :info="info"
        :show-delete="hasdel" v-if="!fromPublishDialog && !isImgDeleted" :show-tags="false">
    </more-item>

</div>
`},"./src/pages/modules/publish/tpl/live.tpl":function(E,v){E.exports=`<template>
  <div class="weui-desktop-mass-media weui-desktop-mass-appmsg" :class="{'weui-desktop-mass-media_del': info.is_deleted || info.deleteFlag}">
    <!-- \u5C01\u9762 -->
    <div class="weui-desktop-mass-appmsg__hd">
      <i class="weui-desktop-mass-appmsg__thumb" v-if="info.live_cover_cdnurl" :style="'background-image:url(\\'' + info.live_cover_cdnurl + '\\');'"></i>
      <i class="weui-desktop-mass-appmsg__thumb weui-desktop-mass-appmsg__thumb_default" v-else style='background-color: #E3E4E5;'></i>
    </div>

    <!-- title\u548C\u72B6\u6001 -->
    <div class="weui-desktop-mass-appmsg__bd appmsg_live__bg">
      <div class="weui-desktop-mass-appmsg__bd_container">
        <!-- \u6709\u5220\u9664 -->
        <mp-tooltip v-if="info.is_deleted && !info.is_cooling_article" position="bottom-center" :delay="300" class="weui-desktop-mass-appmsg__tips">
          <span v-if="info.deleteFormatTime" class="weui-desktop-mass-appmsg__tips_content">\u5220\u9664\u65F6\u95F4 {{info.deleteFormatTime}} <span v-if="info.delete_nickname">\u64CD\u4F5C\u4EBA {{info.delete_nickname}}</span> </span>
          <span v-else class="weui-desktop-mass-appmsg__tips_content">\u5DF2\u5220\u9664</span>
          <a slot="target" v-if="!fromPublishDialog" :href="actualUrl || 'javascript:;'" target="_blank" class="weui-desktop-mass-appmsg__title">
            <template v-if="info.live_desc">
              <span class="appmsg_live_desc">{{info.live_desc | titleFilter}}</span>
              <template v-if="info.live_export_id">
                <b v-if="info.biz_live_status == 2" class="appmsg_live_tag weui-desktop-key-tag weui-desktop-key-tag__offlive">\u76F4\u64AD\u5DF2\u7ED3\u675F</b>
                <b v-else-if="info.biz_live_status == 1" class="appmsg_live_tag weui-desktop-key-tag__onlive">
                  <img src="https://res.wx.qq.com/op_res/zWRZkxXDN3HImHbyOUXeWdb_9D9qX0dWcKgwuIGFotLQUaQmDm6ZI9bmxl_uSTinRNbfiU_4r6hTaiOs-VX_Wg">
                </b>
              </template>
            </template>
            <template v-else>
              <span>\u5B9A\u65F6\u7FA4\u53D1\u76F4\u64AD\u6D88\u606F</span>
            </template>
          </a>
          <div slot="target" v-else class="weui-desktop-mass-appmsg__title">
            <template v-if="info.live_desc">
              <span class="appmsg_live_desc">{{info.live_desc | titleFilter}}</span>
              <template v-if="info.live_export_id">
                <b v-if="info.biz_live_status == 2" class="appmsg_live_tag weui-desktop-key-tag weui-desktop-key-tag__offlive">\u76F4\u64AD\u5DF2\u7ED3\u675F</b>
                <b v-else-if="info.biz_live_status == 1" class="appmsg_live_tag weui-desktop-key-tag__onlive">
                  <img src="https://res.wx.qq.com/op_res/zWRZkxXDN3HImHbyOUXeWdb_9D9qX0dWcKgwuIGFotLQUaQmDm6ZI9bmxl_uSTinRNbfiU_4r6hTaiOs-VX_Wg">
                </b>
              </template>
            </template>
            <template v-else>
              <span>\u5B9A\u65F6\u7FA4\u53D1\u76F4\u64AD\u6D88\u606F</span>
            </template>
          </div>
        </mp-tooltip>

        <!-- \u6B63\u5E38\u6807\u9898 -->
        <div v-else>
          <div class="weui-desktop-mass-appmsg__titile_wrap">
            <a v-if="!fromPublishDialog" :href="actualUrl || 'javascript:;'" target="_blank" class="weui-desktop-mass-appmsg__title appmsg_live__title">
              <template v-if="info.live_desc">
                <span class="appmsg_live_desc">{{info.live_desc | titleFilter}}</span>
                <template v-if="info.live_export_id">
                  <b v-if="info.biz_live_status == 2" class="appmsg_live_tag weui-desktop-key-tag weui-desktop-key-tag__offlive">\u76F4\u64AD\u5DF2\u7ED3\u675F</b>
                  <b v-else-if="info.biz_live_status == 1" class="appmsg_live_tag weui-desktop-key-tag__onlive">
                    <img src="https://res.wx.qq.com/op_res/zWRZkxXDN3HImHbyOUXeWdb_9D9qX0dWcKgwuIGFotLQUaQmDm6ZI9bmxl_uSTinRNbfiU_4r6hTaiOs-VX_Wg">
                  </b>
                </template>
              </template>
              <template v-else>
                <span>\u5B9A\u65F6\u7FA4\u53D1\u76F4\u64AD\u6D88\u606F</span>
              </template>
            </a>
            <div v-else class="weui-desktop-mass-appmsg__title">
              <template v-if="info.live_desc">
                <span class="appmsg_live_desc">{{info.live_desc | titleFilter}}</span>
                <template v-if="info.live_export_id">
                  <b v-if="info.biz_live_status == 2" class="appmsg_live_tag weui-desktop-key-tag weui-desktop-key-tag__offlive">\u76F4\u64AD\u5DF2\u7ED3\u675F</b>
                  <b v-else-if="info.biz_live_status == 1" class="appmsg_live_tag weui-desktop-key-tag__onlive">
                    <img src="https://res.wx.qq.com/op_res/zWRZkxXDN3HImHbyOUXeWdb_9D9qX0dWcKgwuIGFotLQUaQmDm6ZI9bmxl_uSTinRNbfiU_4r6hTaiOs-VX_Wg">
                  </b>
                </template>
              </template>
              <template v-else>
                <span>\u5B9A\u65F6\u7FA4\u53D1\u76F4\u64AD\u6D88\u606F</span>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- \u67E5\u770B\u6570\u636E -->
    <div class="weui-desktop-mass-appmsg__ft">
      <div class="weui-desktop-mass-media__opr">
        <template v-if="!fromPublishDialog && item.view && (item.view.status === '\u5DF2\u7FA4\u53D1' || item.view.status === '\u5DF2\u53D1\u8868' || item.view.status === '\u5DF2\u5220\u9664' || item.view.status === '\u65E0\u6CD5\u67E5\u770B')">
          <div class="weui-desktop-mass-media__opr__meta">
            <mp-tooltip v-if="!info.finder_live_analysis" slot="target" class="weui-desktop-link" position="down-center" content='\u524D\u5F80\u89C6\u9891\u53F7\u52A9\u624B\u67E5\u770B\u76F4\u64AD\u6570\u636E' :delay="300">
              <button slot="target" @click="goFinder" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <mp-icon icon="rate" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
              </button>
            </mp-tooltip>

            <mp-popover v-else trigger="hover" slot="target" class="weui-desktop-link weiui-desktop-link___live" position="down-center" :delay="300">
              <button slot="target" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <mp-icon icon="rate" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
              </button>
              <div class="mass-media__live_data" slot="content">
                <div class="mass-media__live_data__row">
                  <p>\u7FA4\u53D1\u4EBA\u6570</p>
                  <p><mp-thousandth>{{succPushNum}}</mp-thousandth></p>
                </div>
                <div class="mass-media__live_data__row">
                  <p>\u901A\u8FC7\u7FA4\u53D1\u89C2\u770B\u76F4\u64AD\u4EBA\u6570</p>
                  <p><mp-thousandth>{{watchLiveUv}}</mp-thousandth></p>
                </div>
                <div class="mass-media__live_data__row">
                  <p>\u8F6C\u5316\u7387</p>
                  <p>{{convertRate}}</p>
                </div>
                <div class="mass-media__live_data__row">
                  <p><a href="https://channels.weixin.qq.com">\u5B8C\u6574\u76F4\u64AD\u6570\u636E</a></p>
                </div>
              </div>
            </mp-popover>
          </div>
        </template>
        <more-item :i="i" :idx="idx" :item="item" :is-appmsg="false" :info="info" :is-live="true"
        v-if="!item.timerSendInfo && !info.is_deleted"
        :show-delete="!item.timerSendInfo && !info.is_deleted"
        ></more-item>
      </div>
    </div>
  </div>
</template>`},"./src/pages/modules/publish/tpl/mallactivity.tpl":function(E,v){E.exports=`<template>
  <div class="weui-desktop-mass-media weui-desktop-mass-appmsg" :class="{'weui-desktop-mass-media_del': info.is_deleted || info.deleteFlag || isAuditRejectDel }">
    <div class="weui-desktop-mass-appmsg__hd">
      <i class="weui-desktop-mass-appmsg__thumb" v-if="info.cover" :style="'background-image:url(\\'' + info.cover + '\\');'"></i>
      <i class="weui-desktop-mass-appmsg__thumb weui-desktop-mass-appmsg__thumb_default" v-else style='background-image:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSIyOHB4IiB2aWV3Qm94PSIwIDAgNDAgMjgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3LjEgKDQ1NDIyKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5JY29uIC8gIERlZmF1bHQgLyBQaWM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iSWNvbi3lm77moIciIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMTAwMDAwMDAxIj4KICAgICAgICA8ZyBpZD0iSWNvbi0vLS1EZWZhdWx0LS8tUGljIj4KICAgICAgICAgICAgPGc+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTQwIiBzdHJva2U9IiMzNTM1MzUiIHN0cm9rZS13aWR0aD0iMyIgeD0iMS41IiB5PSIxLjUiIHdpZHRoPSIzNyIgaGVpZ2h0PSIyNSIgcng9IjEiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJSZWN0YW5nbGUtMzkiIGZpbGw9IiMzNTM1MzUiIHBvaW50cz0iMjkuOTU1NzY4NyAxMS42NzU1ODg5IDI0LjU0MzM1MzUgMTUuODA3NzA2OSAyNi40NDM0OTY2IDE5LjY2NDA1NjIgMTMuMTcyNzUzNiA3LjY0NDg4NjM2IDAuNjUgMTkuMTg3MDU4MyAwLjY1IDI1LjcxMzYzNjggMzguNDMxMjUgMjUuNzEzNjM2OCAzOC40MzEyNSAxOS4xODcwNTgzIj48L3BvbHlnb24+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")'></i>
    </div>
    <div class="weui-desktop-mass-appmsg__bd">
      <div>
        <!--\u5220\u9664\u56FE\u6587\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1begin \u524D\u7AEF\u5F3A\u4FE1\u4EFBis_deleted\u548Cdelete_time\u5B57\u6BB5-->
        <div v-if="info.is_deleted">
          <mp-tooltip position="bottom-center" :delay="300" class="weui-desktop-mass-appmsg__tips">
            <span v-if="info.deleteFormatTime" class="weui-desktop-mass-appmsg__tips_content">\u5220\u9664\u65F6\u95F4 {{info.deleteFormatTime}} <span v-if="info.delete_nickname">\u64CD\u4F5C\u4EBA {{info.delete_nickname}}</span></span>
            <!-- \u52A0\u4E00\u5C42\u5220\u9664\u65F6\u95F4\u4E3A\u7A7A\u7684\u4FDD\u62A4 -->
            <span v-else class="weui-desktop-mass-appmsg__tips_content">\u5DF2\u5220\u9664</span>

            <div slot="target" class="weui-desktop-mass-appmsg__title">
              <span v-if="keyword !== ''" v-html="info.title"></span>
              <span v-else-if="info.title" v-html="info.title"></span>
              <span v-else>\u672A\u547D\u540D\u56FE\u6587</span>
            </div>
          </mp-tooltip>

          <b class="weui-desktop-key-tag" v-if="info.copyright_status == 11">\u539F\u521B</b>
          <mp-popover v-else-if="isForceReprint" trigger="hover" position="up-center" :delay="300"  class="weui-desktop-force-reprint__tips">
            <span class="weui-desktop-force-reprint__tips_content">
            \u56E0\u53D1\u8868\u65F6\u5185\u5BB9\u4E0E\u539F\u521B\u6587\u7AE0<a :href="info.reprint_source_url" target="_blank">\u300A{{info.reprint_source_title}}\u300B</a>\u8FC7\u4E8E\u76F8\u4F3C\uFF0C\u672A\u901A\u8FC7\u539F\u521B\u903B\u8F91\u6821\u9A8C\uFF0C\u53D1\u8868\u65F6\u539F\u6587\u5DF2\u88AB\u66FF\u6362\u4E3A\u539F\u521B\u6587\u7AE0\u6216\u4F7F\u7528\u5206\u4EAB\u8F6C\u8F7D\u5F62\u5F0F\u53D1\u8868\u3002
             </span>
          </mp-popover>
          <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
        </div>
        <!--\u5220\u9664\u56FE\u6587\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1end-->

        <div v-else class="weui-desktop-mass-appmsg__titile_wrap">
          <div @click="onClickMallactivityTitle" class="weui-desktop-mass-appmsg__title mass-click_title">
            <span v-if="keyword !== ''" v-html="info.title"></span>
            <span v-else-if="info.title" v-html="info.title"></span>
            <span v-else>\u672A\u547D\u540D\u56FE\u6587</span>
          </div>
        </div>

        <num-item v-if="hasnum" :info="info" :i="i" :item="item"></num-item>
      </div>
    </div>
    <div class="weui-desktop-mass-appmsg__ft" v-if="!fromPublishDialog">
      <div class="weui-desktop-mass-media__opr">

        <!--\u8FD9\u91CC\u662F\u5220\u9664\u540E\u91CD\u65B0\u7F16\u8F91icon-->
         <div v-if="(info.is_deleted || info.is_cooling_article) && item.copy_appmsg_id" class="weui-desktop-mass-media__opr__meta">
          <button slot="target" @click="reeditmsg" class="re-edit_btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
            <mp-icon class="re-edit_icon" icon="edit" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
            <span class="re-edit_wording">\u91CD\u65B0\u7F16\u8F91</span>
          </button>
         </div>
        <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E  begin -->
        <template v-if="showMallActivityDraft">
          <div class="weui-desktop-mass-media__opr__meta">
            <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="item.view.mallEditWording" :delay="300">
              <button slot="target" @click="goToMallEditPage(info.mall_id, info.mall_version, info.publish_id)" :class="{'weui-desktop-opr-btn_disabled':false}" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <mp-icon icon="edit" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
              </button>
            </mp-tooltip>
          </div>
        </template>
        <template v-if="showToDataPageBtn">
          <div class="weui-desktop-mass-media__opr__meta">
            <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="item.view.dataPageWording" :delay="300">
              <button slot="target" @click="goToMallDataPage(info.mall_id, item.view.isGoToDataPage)" :class="{'weui-desktop-opr-btn_disabled':!item.view.isGoToDataPage}" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <mp-icon icon="rate" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
              </button>
            </mp-tooltip>
          </div>
        </template>
        <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E end -->


        <more-item :i="i" :idx="idx" :item="item" :is-appmsg="true" :info="info"
          v-if="!item.timerSendInfo && !info.is_deleted"
          :has-close-recommend.sync="hasCloseRecommend"
          :show-delete="!item.timerSendInfo && !info.is_deleted"
          :show-tags="showMoreTips">
        </more-item>
      </div>
    </div>
  </div>
</template>

`},"./src/pages/modules/publish/tpl/modify_icon.tpl":function(E,v){E.exports=`<div
  v-if="info.modify_wording && info.modify_wording != '' && (!item.copy_type || item.copy_type !== 11) && !info.is_cooling_article"
  class="weui-desktop-mass-media__opr__meta"
>
  <mp-tooltip slot="target" class="weui-desktop-link" :content="info.modify_wording" position="down-center" :delay="300">
    
    <button
      slot="target"
      @click="modifyItem(info.appmsgid, info.itemidx, item.msgid)"
      :class="{'weui-desktop-opr-btn_disabled': modifyDisabled}"
      class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="transparent" d="M0 0h24v24H0z"/><path d="M19.939 21L21 19.445c-1.592-.914-2.987-2.177-4.205-3.81 1.336-2.216 2.063-4.918 2.2-8.125h1.376V5.76H14.32c.177-.777.334-1.594.491-2.449L12.983 3c-.472 3.305-1.396 5.929-2.771 7.873l1.14 1.438c.393-.505.746-1.07 1.1-1.652.61 1.827 1.356 3.48 2.22 4.937-1.257 1.633-2.947 2.916-5.109 3.849l1.14 1.516c2.044-.972 3.714-2.235 5.011-3.81 1.179 1.614 2.594 2.897 4.225 3.849zM3.766 19.99c2.555-.817 4.893-1.73 6.976-2.722l-.255-1.691c-1.65.777-3.242 1.438-4.795 1.963v-5.657h4.323V4.225H3v1.769h5.188v4.179H3.884v7.037c0 .622-.236 1.01-.668 1.185l.55 1.594zm11.928-6.046c-.904-1.555-1.65-3.363-2.24-5.443.118-.31.236-.641.354-.991h3.38c-.06 2.449-.55 4.607-1.494 6.434z" fill="#4C4D4E"/></g></svg>
      
    </button>
  </mp-tooltip>
</div>`},"./src/pages/modules/publish/tpl/more.tpl":function(E,v){E.exports='<template>\n  <div class="weui-desktop-mass-media__opr__meta" v-if="showMoreTips">\n    <div class="more_icon">\n      <mp-popover position="up-right" trigger="hover" :disabled="false" v-model="morePopover" @show="componentContent = false">\n        <button slot="target" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">\n          <mp-icon icon="more" :width="20" :height="20"></mp-icon>\n        </button>\n\n        <div slot="content">\n          <!-- <tag-item ref="tagitem" :info="info" :i="i" :item="item" :realname-type="realnameType"></tag-item> -->\n          <template v-if="componentContent && componentContentType !== -1">\n            <template v-if="componentContentType === 0">\n              <del-item :i="i" :idx="idx" v-if="hasdel" :item="item" :is-appmsg="true" :info="info" @cancel="() => {componentContent = false; componentContentType = -1}"></del-item>\n            </template>\n            <div v-else-if="componentContentType === 1" position="up-right" trigger="click" class="close_rec_content">\n              <div class="weui-desktop-popover__content">\u5173\u95ED\u63A8\u8350\u540E\uFF0C\u5185\u5BB9\u5C06\u4E0D\u4F1A\u51FA\u73B0\u5728\u770B\u4E00\u770B\u6216\u5176\u4ED6\u63A8\u8350\u9875\u9762\uFF0C\u4E14\u4E0D\u53EF\u91CD\u65B0\u5F00\u542F\u63A8\u8350\u3002\u5173\u95ED\u63A8\u8350\u4E0D\u5F71\u54CD\u5173\u6CE8\u7528\u6237\u6536\u5230\u6B64\u5185\u5BB9\u7684\u63A8\u9001\u3002</div>\n              <div class="weui-desktop-popover__bar">\n                <mp-button type="primary" @click="closeRecommend">\u786E\u5B9A</mp-button>\n                <mp-button type="default" @click="() => {componentContent = false; componentContentType = -1}">\u53D6\u6D88</mp-button>\n              </div>\n            </div>\n          </template>\n          <template v-else-if="isAuditRejectNotModify">\n            <ul class="select_option">\n              <li v-if="[100, 101].includes(info?.modify_status * 1)" class="ban-click">\u5220\u9664</li>\n              <li v-else @click="() => {componentContent = true; componentContentType = 0}">\u5220\u9664</li>\n            </ul>\n          </template>\n          <template v-else>\n            <ul class="select_option">\n              <li @click="updateFeaturedList" v-if="!isLive && !isMallActivity">\n                <!-- \u672A\u7CBE\u9009\u7684item\uFF0Chover\u5224\u65AD\u662F\u5426\u6EE1\u8DB3\u7CBE\u9009\u6761\u4EF6 -->\n                <template v-if="!inFeaturedlist">\n                  <template v-if="isOldPublish">\n                    <mp-popover content="\u5386\u53F2\u53D1\u8868\u7684\u5185\u5BB9\u4E0D\u53EF\u7CBE\u9009" trigger="hover" width="162" position="down-center" class="more_item_select">\n                      <p slot="target" class="more_item_select_grey">\u7CBE\u9009</p>\n                    </mp-popover>\n                  </template>\n                  <template v-else-if="isOutofDate">\n                    <mp-popover content="2021.1.1\u524D\u7FA4\u53D1\u7684\u5185\u5BB9\u4E0D\u53EF\u88AB\u7CBE\u9009" trigger="hover" width="213" position="down-center" class="more_item_select">\n                      <p slot="target" class="more_item_select_grey">\u7CBE\u9009</p>\n                    </mp-popover>\n                  </template>\n                  <template v-else-if="isGroupSend">\n                    <mp-popover content="\u5206\u7EC4\u7FA4\u53D1\u7684\u5185\u5BB9\u4E0D\u53EF\u88AB\u7CBE\u9009" trigger="hover" width="177" position="down-center" class="more_item_select">\n                      <p slot="target" class="more_item_select_grey">\u7CBE\u9009</p>\n                    </mp-popover>\n                  </template>\n                  <template v-else>\n                    <span>\u7CBE\u9009</span>\n                  </template>\n                </template>\n                <!-- \u5DF2\u7CBE\u9009\u7684item\uFF0Chover\u663E\u793A\u53D6\u6D88\u7CBE\u9009 -->\n                <template v-else>\n                  <span>\u53D6\u6D88\u7CBE\u9009</span>\n                </template>\n              </li>\n              <li v-if="showDelete && hasdel && !info.is_rumor_refutation" @click="() => {componentContent = true; componentContentType = 0}">\u5220\u9664</li>\n\n              <li v-if="canCloseRecommend" @click="() => {componentContent = true; componentContentType = 1}">\u5173\u95ED\u63A8\u8350</li>\n              <li @click="copyLink" v-if="!is_mall_draft && !isLive && (!!!(item.view&&item.view.card) && !isOldText && !item.copy_type || item.copy_type !== 11)">\u590D\u5236\u94FE\u63A5</li>\n              <li @click="editTags" v-if="showTags && (!item.copy_type || item.copy_type !== 11) && !info.is_rumor_refutation">\n                <template v-if="haveTags">\n                  \u4FEE\u6539\u5408\u96C6\n                </template>\n                <template v-else>\n                  \u6DFB\u52A0\u5408\u96C6\n                </template>\n              </li>\n              <li @click="showClaimSource(2)">\u58F0\u660E\u521B\u4F5C\u6765\u6E90</li>\n            </ul>\n          </template>\n        </div>\n      </mp-popover>\n    </div>\n  </div>\n</template>\n'},"./src/pages/modules/publish/tpl/num.tpl":function(E,v){E.exports=`<div class="weui-desktop-mass-media__data-list">
  <!-- \u4ED8\u8D39\u7684\u663E\u793A\u2018\u6253\u5F00\u6587\u7AE0\u4EBA\u6570\u2019\uFF0C\u975E\u4ED8\u8D39\u7684\u663E\u793A\u2018\u9605\u8BFB\u6570\u2019, \u89C6\u9891\u53F7\u5C55\u793A\uFF08\u516C\u4F17\u53F7\u9605\u8BFB\u6570+\u89C6\u9891\u53F7\u64AD\u653E\u6570\uFF09 -->
  <mp-tooltip trigger="hover">
    <template slot="content" v-if="info.is_pay_subscribe == 1">\u6253\u5F00\u6587\u7AE0\u4EBA\u6570</template>
    <template slot="content" v-else-if="info.finder_stat_info && info.finder_stat_info.use_finder_stat">\u516C\u4F17\u53F7\u64AD\u653E\uFF1A{{ info.read_num | formatThousandth }} \u89C6\u9891\u53F7\u64AD\u653E\uFF1A{{ Math.max((info.finder_stat_info.read_count || 0) - info.read_num, 0) | formatThousandth }}</template>
    <template slot="content" v-else>\u9605\u8BFB\u4EBA\u6570</template>
    <div class="weui-desktop-mass-media__data appmsg-view" slot="target">
      <span class="weui-desktop-mass-media__data__inner">{{info.read_num | formatThousandth}}</span>
    </div>
  </mp-tooltip>

  <!-- mp \u70B9\u8D5E\u6570 -->
  <mp-tooltip trigger="hover" v-if="!isMallActivity">
    <div class="weui-desktop-mass-media__data appmsg-like" slot="target">
      <span class="weui-desktop-mass-media__data__inner">{{info.old_like_num | formatThousandth}}</span>
    </div>
    <span slot="content">{{ info.moment_like_num ? \`\u70B9\u8D5E\u4EBA\u6570\uFF0C\u5176\u4E2D\${info.moment_like_num}\u4EBA\u5728\u670B\u53CB\u5708\u4E2D\u70B9\u8D5E\` : "\u70B9\u8D5E\u4EBA\u6570" }}</span>
  </mp-tooltip>
  <!-- mp \u5206\u4EAB -->
  <mp-tooltip trigger="hover">
    <div class="weui-desktop-mass-media__data appmsg-share" slot="target">
      <span class="weui-desktop-mass-media__data__inner">{{info.share_num | formatThousandth}}</span>
    </div>
    <span slot="content">\u5206\u4EAB\u4EBA\u6570</span>
  </mp-tooltip>
  <!-- \u770B\u4E00\u770B\u6570 -->
  <mp-tooltip trigger="hover" v-if="!isMallActivity">
    <template slot="content">\u63A8\u8350\u4EBA\u6570</template>
    <div class="weui-desktop-mass-media__data appmsg-haokan" slot="target">
      <span class="weui-desktop-mass-media__data__inner">{{info.like_num | formatThousandth}}</span>
    </div>
  </mp-tooltip>
  <!-- <div class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-haokan">
    <span class="weui-desktop-mass-media__data__inner">{{info.like_num}}</span>
  </div> -->
  <!-- \u7559\u8A00\u6570 -->
  <mp-tooltip content="\u7559\u8A00\u6761\u6570" trigger="hover" v-if="typeof(info.comment_id)!='undefined'&info.is_comment_enable">
    <span  @click="closeFanMsgAndJump(info)" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-comment" slot="target">
      <span class="js_comment_info weui-desktop-mass-media__data__inner">
        <span class="weui-desktop-link">{{info.comment_num | formatThousandth}}</span>
      </span>
    </span>
  </mp-tooltip>
  <a v-else-if="!info.open_fansmsg && info.comment_id" :href="'/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7&sendtype=MASSSEND&comment_id=' + info.comment_id" target="_blank" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-comment">
    <span class="js_comment_info weui-desktop-mass-media__data__inner">
      <span class="weui-desktop-link">\u5F00\u542F\u7559\u8A00</span>
    </span>
  </a>
  <a v-else-if="canUseComment && !info.is_deleted && ( info.open_fansmsg || !info.comment_id)" @click="openTopCommentIdUrl(info)" target="_blank" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-comment">
    <span class="js_comment_info weui-desktop-mass-media__data__inner">
      <span class="weui-desktop-link">\u5F00\u542F\u7559\u8A00</span>
    </span>
  </a>

  <!-- \u5212\u7EBF -->
  <template v-if="info.line_info && !info.is_deleted">
    <a v-if="info.line_info.is_use_flag && info.line_info.is_appmsg_flag === 2" :href="\`/cgi-bin/mpunderline?action=underline&count=20&appmsg_id=\${info.appmsgid}&item_idx=\${info.itemidx}&send_time=\${info.line_info.send_time}&sort_type=1\`" target="_blank" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-underline">
      <span class="js_comment_info weui-desktop-mass-media__data__inner">
        <span class="weui-desktop-link">\u5F00\u542F\u5212\u7EBF</span>
      </span>
    </a>
    <mp-tooltip v-else-if="info.line_info.use_line === 1" content="\u5212\u7EBF\u4EBA\u6570" trigger="hover">
      <a :href="\`/cgi-bin/mpunderline?action=underline&count=20&appmsg_id=\${info.appmsgid}&item_idx=\${info.itemidx}&send_time=\${info.line_info.send_time}&sort_type=1\`"
        target="_blank" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-underline"
        v-if="info.line_info.line_count || info.line_info.is_use_flag || (info.segment_comment_id && info.segment_comment_id !== '0')" slot="target">
        <span class="weui-desktop-mass-media__data__inner">
          <span class="weui-desktop-link">{{info.line_info.line_count | formatThousandth}}</span>
        </span>
      </a>
      <template v-else>
        <div class="weui-desktop-mass-media__data appmsg-underline__disable" slot="target">
          <span class="weui-desktop-mass-media__data__inner">{{info.line_info.line_count}}</span>
        </div>
      </template>
    </mp-tooltip>
  </template>

  <!-- \u6295\u7968\u6570 -->
  <mp-tooltip content="\u6295\u7968\u4EBA\u6570" trigger="hover">
    <a :href="'/cgi-bin/newoperatevote?action=show&t=vote/vote_detail&supervoteid='+info.super_vote_id[0]" target="_blank" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-vote" v-if="typeof(info.vote_person_num)!='undefined'" slot="target">
      <span class="weui-desktop-mass-media__data__inner">
        <span class="weui-desktop-link">{{info.vote_person_num | formatThousandth}}</span>
      </span>
    </a>
  </mp-tooltip>

  <!-- <mp-popover position="up-center" v-model="info.commentPopShow" trigger="click">
    <div slot="target" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-comment appmsg-comment_link" v-if="typeof(info.comment_id)!='undefined'&!info.is_comment_enable&info.is_deleted&!info.open_fansmsg"> -->
      <!-- \u7559\u8A00\u5173\u95ED \u9690\u85CF\u7559\u8A00\u6570 -->
      <!-- <span class="js_comment_info weui-desktop-mass-media__data__inner">
        <span class="weui-desktop-link">\u5F00\u542F\u7559\u8A00</span>
      </span>
    </div>
    <div slot="content">\u786E\u5B9A\u5F00\u542F\u7559\u8A00\uFF1F</div>
    <div slot="bar">
      <mp-button type="primary" @click="openComment(info,i,item.msgid)">\u786E\u5B9A</mp-button>
      <mp-button type="default" @click="info.commentPopShow=false">\u53D6\u6D88</mp-button>
    </div>
  </mp-popover> -->

  <mp-tooltip content="\u8D5E\u8D4F\u91D1\u989D" trigger="hover" v-if="typeof(info.reward_money)!='undefined'">
    <a :href="'/merchant/reward?action=getlatestreward&appmsgid='+info.appmsgid+'&idx='+(i+1)+'&count=10'" target="_blank" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-reward" slot="target">
      <span class="js_comment_info weui-desktop-mass-media__data__inner">
        <span class="weui-desktop-link">\xA5{{info.reward_money  | formatThousandth}}</span>
      </span>
    </a>
  </mp-tooltip>

  <!-- \u4ED8\u8D39\u7684\u663E\u793A\u2018\u4ED8\u8D39\u4EBA\u6570\u2019 -->
  <mp-tooltip content="\u4ED8\u8D39\u4EBA\u6570" trigger="hover" v-if="typeof(info.paysubscribe_num) != 'undefined'">
    <a :href="'/merchant/mppaysubscribe?action=getlatestpay&id=' + info.appmsgid + '_' + info.itemidx" target="_blank" class="weui-desktop-mass-media__data appmsg-pay weui-desktop-icon__response-mouse" slot="target">
      <span class="weui-desktop-mass-media__data__inner">
        <span class="weui-desktop-link">{{info.paysubscribe_num | formatThousandth}}</span>
      </span>
    </a>
  </mp-tooltip>

  <mp-tooltip content="\u88AB\u8F6C\u8F7D\u6B21\u6570" trigger="hover">
    <a :href="'/cgi-bin/appmsgcopyright?action=reprint&begin=0&count=10&id=' + info.appmsgid + '&idx=' + (i + 1) + '&need_quote=1'" target="_blank" class="weui-desktop-icon__response-mouse weui-desktop-mass-media__data appmsg-forward" slot="target" v-if="typeof(info.reprint_num)!='undefined'">
      <span class="weui-desktop-mass-media__data__inner">
        <span class="weui-desktop-link">{{info.reprint_num | formatThousandth}}</span>
      </span>
    </a>
  </mp-tooltip>

</div>

`},"./src/pages/modules/publish/tpl/publish_tpl.js":function(E,v,l){var D;function j(e){return H(e)||R(e)||M(e)||V()}function V(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(e,t){if(e){if("string"==typeof e)return B(e,t);var d={}.toString.call(e).slice(8,-1);return"Object"===d&&e.constructor&&(d=e.constructor.name),"Map"===d||"Set"===d?Array.from(e):"Arguments"===d||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)?B(e,t):void 0}}function R(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function H(e){if(Array.isArray(e))return B(e)}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var d=0,g=Array(t);d<t;d++)g[d]=e[d];return g}var F=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var q=l("./src/pages/modules/utils/time.js");var f=l("./src/pages/modules/utils/cgi.js");var m=l("./src/3rd/moment/moment.js");var I=l("./src/pages/modules/utils/url.js");var N=l("./src/pages/modules/publish/tpl/num.tpl");var J=l("./src/pages/modules/publish/tpl/del.tpl");var P=l("./src/pages/modules/publish/tpl/tag.tpl");var K=l("./src/pages/modules/publish/tpl/more.tpl");var se=l("./src/pages/modules/publish/tpl/appmsg.tpl");var T=l("./src/pages/modules/publish/tpl/video.tpl");var n=l("./src/pages/modules/publish/tpl/img.tpl");var h=l("./src/pages/modules/publish/tpl/audio.tpl");var G=l("./src/pages/modules/publish/tpl/text.tpl");var Q=l("./src/pages/modules/publish/tpl/live.tpl");var ee=l("./src/pages/modules/publish/tpl/mallactivity.tpl");var X=l("./src/pages/modules/publish/tpl/modify_icon.tpl");var oe=l("./src/pages/modules/utils/str_util.js");var ne=l("./node_modules/.pnpm/@tencent+we-emoji@1.3.20/node_modules/@tencent/we-emoji/dist/index.umd.min.js");var te=l("./src/pages/modules/common/emoji/emoji.js");var fe=l("./src/3rd/soundmanager2.js");var ue=l("./src/3rd/editor/common/monitor.js");var ye=l("./src/pages/modules/utils/string.js");var Te=l("./src/3rd/editor/common/browser.js").browser;var ke=l("../../packages/mmbizweb-web2-common/utils/thousandth.js"),Ie=ke.thousandth;var w=l("./src/pages/modules/common/album_utils.js"),_=w.originalCheckResult,c=w.ordinaryCheckResult,A=w.publishStatusCheckResult;l("./src/pages/modules/publish/tpl/publish_tpl.less");l("./src/pages/modules/media/audio/audio_chatmsg/audio_chatmsg.js");l("./src/pages/album/modules/album_intro/album_intro.js");var b=l("./src/pages/comment/modules/const.js"),S=b.masssendPageType;var r=16945371e5;var i=window.wx.commonData.user_info.service_type===2;q;m;te;function u(e){if(typeof e==="string"){return e}if(e>3600){return Math.floor(e/3600)+":"+m.unix(e).format("mm:ss")}return m.unix(e).format("mm:ss")}function y(e){return m.unix(e).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm")}function z(e,t){if(arguments.length>0){for(var d in t){if(t[d]!==void 0){var g=new RegExp("({"+d+"})","g");e=e.replace(g,t[d])}}}return e}var Y=((D=window)===null||D===void 0||(D=D.wx)===null||D===void 0||(D=D.cgiData)===null||D===void 0?void 0:D.service_type)||0;var $={audioPlayer:null,playing_item:null,playing_timer:null,is_playing:false,init:function e(){this.audioPlayer=fe;this.audioPlayer.setup({url:"/mpres/zh_CN/htmledition/plprecorder/biz_web/",preferFlash:false,debugMode:false})},play:function e(t){var d=t.duration;var g=t.id;var C=t.voice_encode_fileid;t.playing_duration=0;var O=this;var x="";if(C){x="https://res.wx.qq.com/voice/getvoice?mediaid="+C+"&token="+wx.commonData.data.t+"&lang=zh_CN"}else{x="/cgi-bin/getvoicedata?source=mass&msgid="+g+"&token="+wx.commonData.data.t}this.audioPlayer.createSound({id:g,url:x,onfinish:function le(){O.reset()}});this.audioPlayer.play(g);this.playing_timer=setInterval(function(){t.playing_duration++;if(t.playing_duration<d){t.progress=100*(t.playing_duration/d)}},1e3);this.playing_item=t;this.is_playing=true;t.isPlaying=true},stop:function e(t){var d=t.id;this.audioPlayer.stop(d);clearInterval(this.playing_timer);this.playing_timer=null;this.playing_item=null;this.is_playing=false;t.isPlaying=false;t.playing_duration=0;t.progress=0},reset:function e(){this.audioPlayer.stop(this.playing_item.id);clearInterval(this.playing_timer);this.playing_timer=null;this.is_playing=false;this.playing_item.isPlaying=false;this.playing_item.playing_duration=0;this.playing_item.progress=0;this.playing_item=null}};window.onload=function(){$.init()};var ie={inject:{customerType:{default:null},hasPayPlugin:{default:false},is_send_all:{default:null},is_mall_draft:{default:false}},props:{info:{type:Object},i:{type:Number,default:1},item:{type:Object},keyword:{default:""},canUsePublicTag:{type:Number,default:0},realnameType:{type:Number,default:0},customerType:{type:Number,default:1},fromPublishDialog:{type:Boolean,default:false},isAlbum:{type:Boolean,default:false},isPayAlbum:{type:Boolean,default:false}},computed:{isReprint:function e(){return[12,101,201,202].includes((this.info&&this.info.copyright_status||0)*1)},isForceReprint:function e(){return!!(this.info&&this.info.is_forced_reprint)},canBeRecommend:function e(){var t=false;try{t=!(this.item.view&&this.item.view.sourceType*1===4&&!this.item.new_publish)&&!(this.item.view&&this.item.view.sourceType*1===1&&!this.is_send_all)&&!(this.info.is_pay_subscribe*1===1)&&!this.isReprint&&[0,5,8,10].includes(this.info.share_type)}catch(d){console.error(d)}return t},editUrl:function e(){return"/cgi-bin/appmsg?t=media/appmsg_edit&action=edit&type=77&appmsgid=".concat(this.item.copy_appmsg_id,"&isMul=1&get_delete=1")},hasnum:function e(){if(this.is_mall_draft)return false;if(!this.item||this.item.type===0||this.fromPublishDialog||this.item.timerSendInfo){return false}if(this.item.publish_info)return true;return(this.item.type===10001||this.item.type===9||this.item.type===10||this.item.type===11||this.item.type===20)&&this.item.view&&!this.item.view.noReadNum&&!this.item.view.isFirst&&!this.item.timerSendInfo},hasdel:function e(){if(this.is_mall_draft)return true;if(this.item.publish_info)return true;if(!this.item||this.item.type===0||this.fromPublishDialog){return false}if(this.item.type===10001){return this.info.is_deleted===false}if(this.info.share_type===5&&this.item.type===9){return this.info.is_deleted===false&&this.item.sent_result.msg_status!==6}if(this.item.type===9||this.item.type===10||this.item.type===11||this.item.type===74){if(this.item.not_all_masssend===1){return!this.item.timerSendInfo&&this.info.is_deleted===false}else{return!this.item.timerSendInfo&&this.info.is_deleted===false&&(this.item.sent_result.msg_status===2||this.item.sent_result.msg_status===5||this.item.sent_result.msg_status===6)}}return!this.item.timerSendInfo&&(this.item.sent_result.msg_status===2||this.item.sent_result.msg_status===5)},isMediaAccount:function e(){return this.realnameType===2||this.realnameType===9},isInstitutionAccount:function e(){return this.customerType===11},actualUrl:function e(){if(this.info.is_cooling_article===1){return this.info.cooling_content_url}else if(this.info.is_pay_subscribe===1){return this.info.pay_content_url}else{return this.info.content_url}},hasClaimSource:function e(){return this.info.claim_source_type*1},isAuditReject:function e(){var t,d;return!!((t=this.item)!==null&&t!==void 0&&(t=t.sent_result)!==null&&t!==void 0&&t.audit_reject)&&((d=this.item)===null||d===void 0||(d=d.view)===null||d===void 0?void 0:d.status)==="\u6253\u56DE\u4FEE\u6539"},isAuditRejectDel:function e(){var t;return this.isAuditReject&&![3,100,101].includes(((t=this.info)===null||t===void 0?void 0:t.modify_status)*1)},isAuditRejectNotModify:function e(){var t;return this.isAuditReject&&((t=this.info)===null||t===void 0?void 0:t.modify_status)!==3},showToDataPageBtn:function e(){var t,d;if((t=this.item)!==null&&t!==void 0&&(t=t.view)!==null&&t!==void 0&&t.notShowDataPage)return false;if(this.isAuditReject)return true;return["\u5DF2\u7FA4\u53D1","\u5DF2\u53D1\u8868","\u5DF2\u5220\u9664","\u65E0\u6CD5\u67E5\u770B"].includes((d=this.item)===null||d===void 0||(d=d.view)===null||d===void 0?void 0:d.status)},showMallActivityDraft:function e(){var t;return!!((t=this.item)!==null&&t!==void 0&&(t=t.view)!==null&&t!==void 0&&t.isMallActivityDraft)},canUseComment:function e(){var t;return((t=window)===null||t===void 0||(t=t.wx)===null||t===void 0||(t=t.cgiData)===null||t===void 0?void 0:t.can_use_comment)===1},isMallActivity:function e(){return this.info.share_type===20},claimSourceTypeList:function e(){var t;return[].concat(j(JSON.parse((t=window)===null||t===void 0||(t=t.wx)===null||t===void 0?void 0:t.cgiData.claim_source_list).list),[{claim_source_type:0,claim_source:"\u4E0D\u58F0\u660E"}])}},filters:{formatDuration:function e(t){return u(t)},formatThousandth:function e(t){return Ie(t)}},data:function e(){return{canUseTlrecPromotion:window.wx.commonData.acl.base_acl.can_use_tlrec_promotion,hasReportShow:false}},methods:{checkAppmsgJumpSuc:function e(t){var d=t.split("#");if(d.length===2){f.get({url:(d[0]+"&f=json").replace("http","https")},function(g){if(!g.base_resp||g.base_resp.ret!==0){var C;if(!g.base_resp){C=g.ret}else{C=g.base_resp.ret}window.WX_BJ_REPORT&&window.WX_BJ_REPORT.BadJs&&window.WX_BJ_REPORT.BadJs.report("check jump appmsg","bizuin: ".concat(window.wx.commonData.data.uin," | timestamp: ").concat(Date.now()),{mid:"mmbizweb:checkJumpAppmsg",view:"web_business",info:{url:t,ret:C}})}})}},reeditmsg:function e(){window.openUrl("".concat(this.editUrl,"&re_edit=").concat(this.info.itemidx),{},true)},goToVideoSnap:function e(){f.post({url:"/cgi-bin/findertoken?action=get_finder_token",success:function t(d){var g="https://channels.weixin.qq.com/platform/?mp_token=".concat(d.token);window.openUrl(g,{},true)}})},closeFanMsgAndJump:function e(t){this.openCommentUrl(t,{openDirectly:true})},openTopCommentIdUrl:function e(t){this.openCommentUrl(t,{useTopCommentId:true})},openCommentUrl:function e(t){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};var g=d.openDirectly,C=g===void 0?false:g,O=d.useTopCommentId,x=O===void 0?false:O;if(C&&!t.open_fansmsg){var le=d.commentId||t.comment_id;window.openUrl("/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7&sendtype=MASSSEND&".concat(x?"top_":"","comment_id=").concat(le),{},true);return}f.post({url:"/misc/appmsgcomment?action=open_appmsg_comment",data:{appmsgid:t.appmsgid,idx:t.itemidx},success:function we(Ae){window.openUrl("/misc/appmsgcomment?action=list_latest_comment&begin=0&count=10&mp_version=7&sendtype=MASSSEND&".concat(x?"top_":"","comment_id=").concat(Ae.comment_id),{},true)}})},goToDataPage:function e(t,d,g,C){ue.setSum(238323,1,1).send();if(C){window.openUrl("/misc/appmsganalysis?action=detailpage&msgid=".concat(t,"_").concat(d,"&publish_date=").concat(g,"&type=int"),{},true);ue.setSum(238323,2,1).send()}return false},goToMallDataPage:function e(t,d){if(d){window.openUrl("/cgi-bin/mallactivity?action=dataanalysis&mall_id=".concat(t),{},true)}return false},goToMallEditPage:function e(t,d,g){var C="/cgi-bin/mallactivity?action=edit&is_edit=1&mall_id=".concat(t,"&mall_version=").concat(d,"&appmsg_id=").concat(g);window.openUrl(C,{},true)},goToHeatPage:function e(t){ue.setSum(556281,3,1).send();if(t.is_promotable){window.open(I.fullUrl("/cgi-bin/mppromotionorder?action=place_page&data=".concat(JSON.stringify({appmsgid:t.appmsgid,itemidx:t.itemidx}))))}},reportShow:function e(t){if(!this.hasReportShow&&t.is_promotable){ue.setSum(556281,2,1).send();this.hasReportShow=true}},undel:function e(t){if(t.can_undelete){var d=this;f.post({url:"/cgi-bin/masssendpage?action=undelete",data:{id:t.msgid,idx:t.itemidx}},function(g){if(g.base_resp.ret===0){d.$tipsSuc("\u6062\u590D\u6210\u529F");setTimeout(function(){location.reload()},1e3)}else{d.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}},function(){d.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")})}},openComment:function e(t,d,g){var C=this;f.post({url:"/misc/appmsgcomment?action=set_can_comment",data:{enabled:1,comment_id:t.comment_id,app_msg_id:g,app_msg_item_idx:d}},function(O){if(O.base_resp.ret===0){C.$tipsSuc("\u5F00\u542F\u7559\u8A00\u6210\u529F");t.is_comment_enable=true}else{if(O.base_resp.ret===200007){C.$tipsErr("\u8BE5\u6587\u7AE0\u7559\u8A00\u56E0\u8FDD\u53CD\u76F8\u5173\u89C4\u5B9A\u88AB\u5173\u95ED")}}},function(){C.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")});t.commentPopShow=false},audioPlay:function e(t){if(this.fromPublishDialog)return;if($.is_playing===false){$.play(t)}else if($.is_playing===true){if(t.isPlaying){$.stop(t)}else{$.reset();$.play(t)}}}}};var pe={template:N,mixins:[ie]};var be={template:P,mixins:[ie],computed:{btnDisabled:function e(){return false}},methods:{addTags:function e(){this.$bus.$emit("tag-item:addTags",{info:this.info})},removeTags:function e(){this.$bus.$emit("tag-item:removeTags",{info:this.info})},getTagsInfo:function e(t){var d=t.appmsg_album_info,g=t.public_tag_info;var C=[];if(g){C=g.public_tag_list?g.public_tag_list.map(function(x){return{id:x.tag_id||x.id,title:x.tag_name||x.title,isPublic:true}})||[]:[]}var O=d&&d.appmsg_album_infos.map(function(x){return{id:x.id||"",title:x.title||"",isPublic:false}})||[];C=C.filter(function(x){return!O.find(function(le){return le.title===x.title})});return O.concat(C)}}};var ge={template:J,mixins:[ie],props:{isAppmsg:Boolean,idx:{type:Number,default:1}},methods:{delItem:function e(t,d,g,C){if(typeof C==="undefined"){C=d+1}if((t.type===9||t.type===10||t.type===11)&&t.appmsg_info&&t.appmsg_info.length>1){switch(t.appmsg_info[d].can_delete_status){case 0:this.$bus.$emit("del-item:delete",{msgid:t.msgid,type:t.type,not_all_masssend:t.not_all_masssend,idx:C,i:d,isAppmsg:g,item:t});break;case 1:this.$tipsErr("\u8BE5\u5185\u5BB9\u7ECF\u5408\u8BAE\u6D89\u5ACC\u6D17\u7A3F\uFF0C\u5DF2\u88AB\u66FF\u6362\u4E3A\u6D17\u7A3F\u4E2D\u95F4\u9875\u5C55\u793A\uFF0C\u4E0D\u53EF\u81EA\u884C\u5220\u9664");break;case 2:this.$tipsErr("\u8BE5\u5185\u5BB9\u7ECF\u9274\u5B9A\u6D89\u5ACC\u9020\u8C23\uFF0C\u5DF2\u88AB\u66FF\u6362\u4E3A\u8C23\u8A00\u4E2D\u95F4\u9875\u5C55\u793A\uFF0C\u4E0D\u53EF\u81EA\u884C\u5220\u9664");break;default:this.$bus.$emit("del-item:delete",{msgid:t.msgid,type:t.type,not_all_masssend:t.not_all_masssend,idx:C,i:d,isAppmsg:g,item:t});break}}else if(t.type===20&&t.card_info){var O,x;if(this.is_mall_draft){var le;this.$bus.$emit("del-mallactivityItem:delete",t===null||t===void 0||(le=t.card_info)===null||le===void 0?void 0:le.publish_id);this.$emit("cancel");return}this.$bus.$emit("del-item:delete",{msgid:(O=t.card_info)===null||O===void 0?void 0:O.publish_id,type:t.type,idx:C||1,not_all_masssend:t.not_all_masssend,i:d,isAppmsg:g,item:t,isMasssend:((x=t.card_info)===null||x===void 0?void 0:x.publish_type)===104})}else{this.$bus.$emit("del-item:delete",{msgid:t.msgid,type:t.type,idx:C,not_all_masssend:t.not_all_masssend,i:d,isAppmsg:g,item:t})}}}};var he={name:"modify-icon-item",template:X,mixins:[ie],props:{msgType:{type:oe,default:"appMsg"}},computed:{modifyDisabled:function e(){return this.info.modify_status!==1&&this.info.modify_status!==2&&this.info.modify_status!==4&&this.info.modify_status!==101}},methods:{modifyItem:function e(t,d,g){if(this.modifyDisabled){return}window.openUrl("/cgi-bin/masssendmodify?action=edit_new&appmsgid=".concat(t,"&idx=").concat(d,"&msgid=").concat(g),{},true)}}};var De="\u5DF2\u4FEE\u6539";var Pe={name:"modify-info-tag",template:'\n    <mp-tooltip v-if="modifyStatus === 3" position="bottom-center" :delay="0">\n      <span class="modify_tips"><span class="modify_tips__title">\u4FEE\u6539\u65F6\u95F4</span>{{modifyTime}}</span>\n      <span class="modify_tips" v-if="modifyNickname"><span class="modify_tips__title">\u64CD\u4F5C\u4EBA</span>{{modifyNickname}}</span>\n      <div slot="target" class="weui-desktop-mass-appmsg__title">\n        <b class="weui-desktop-key-tag" v-if="modifyStatus === 3">'.concat(De,"</b>\n      </div>\n    </mp-tooltip>\n  "),props:{modifyStatus:{type:Number,default:1},modifyNickname:{type:oe,default:""},modifyTime:{type:oe,default:""}}};var Ee="\u4FEE\u6539\u5185\u5BB9\u5BA1\u6838\u4E2D\uFF0C\u9884\u8BA1\u9700\u898110-20\u5206\u949F";var Oe="\u4FEE\u6539\u5185\u5BB9\u5BA1\u6838\u672A\u901A\u8FC7\uFF0C\u53EF\u524D\u5F80\u4FEE\u6539\u5165\u53E3\u91CD\u65B0\u4FEE\u6539\u63D0\u4EA4";var Ne={name:"modify-check-info",template:'\n    <p class="weui-desktop-modify-check-res" v-if="modifyStatus === 100">'.concat(Ee,'</p>\n    <p class="weui-desktop-modify-check-res" v-else-if="modifyStatus === 101">').concat(Oe,"</p>\n  "),props:{modifyStatus:{type:Number,default:1}}};var Re={name:"more-item",components:{"del-item":ge,"tag-item":be},template:K,mixins:[ie],inject:["is_send_all"],props:{isAppmsg:Boolean,isLive:Boolean,idx:{type:Number,default:1},showDelete:{type:Boolean,default:false},isOldText:{type:Boolean,default:false},showTags:{type:Boolean,default:false},hasCloseRecommend:{type:Boolean,default:false}},data:function e(){var t,d;return{componentContent:false,componentContentType:0,tagComponent:false,showMoreContent:false,morePopover:false,claimLoading:false,hasSetClaimSource:!!(this.info.claim_source_type*1)||this.info.claim_source_type*1===0&&((t=this.info.claim_source)===null||t===void 0?void 0:t.is_user_no_claim_source)===1,claimSourceType:this.info.claim_source_type*1,mediaSourceTypeInfo:(d=this.info.claim_source)===null||d===void 0?void 0:d.media_source_type_info}},methods:{closeRecommend:function e(){var t=this;if(this.closeLimit)return;this.closeLimit=true;f.post({url:"/cgi-bin/setdisablerecommend",data:{appmsgid:this.info.appmsgid,idx:this.info.itemidx},usePb:true,success:function d(g){t.closeLimit=false;t.componentContent=false;t.componentContentType=-1;if(g&&g.base_resp&&g.base_resp.ret===0){t.$tipsSuc("\u5DF2\u5173\u95ED\u63A8\u8350");t.$emit("update:hasCloseRecommend",true)}else{t.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}},error:function d(g){console.error(g);t.closeLimit=false;t.componentContent=false;t.componentContentType=-1}})},copyLink:function e(){var t=document.createElement("input");t.value=this.info.content_url||"";document.body.appendChild(t);t.select();document.execCommand("copy");this.morePopover=false;this.$tipsSuc("\u590D\u5236\u6210\u529F");document.body.removeChild(t)},editTags:function e(){var t,d=this;this.componentContent=false;if(this.info.is_pay_subscribe&&(t=this.info)!==null&&t!==void 0&&(t=t.appmsg_album_info)!==null&&t!==void 0&&(t=t.pay_album_info)!==null&&t!==void 0&&t.id){var g;window.open(I.fullUrl("/cgi-bin/appmsgalbummgr?action=edit&id=".concat((g=this.info)===null||g===void 0||(g=g.appmsg_album_info)===null||g===void 0||(g=g.pay_album_info)===null||g===void 0?void 0:g.id)))}else{var C,O;this.$bus.$emit("change-album",{contentUrl:(C=this.info)===null||C===void 0?void 0:C.content_url,sharePageType:this.info.share_type,albumInfo:((O=this.info)===null||O===void 0||(O=O.appmsg_album_info)===null||O===void 0||(O=O.appmsg_album_infos)===null||O===void 0?void 0:O[0])||null,changeCb:function x(le){d.$set(d.info,"appmsg_album_info",{appmsg_album_infos:le})}})}},showClaimSource:function e(t){var d=this;var g=this.claimSourceTypeList;this.$bus.$emit("change-claim-source",{title:this.info.title||"",claimSourceType:this.claimSourceType,mediaSourceTypeInfo:this.mediaSourceTypeInfo,claimSourceList:g,changeCb:function C(O){d.claimSource(O)}})},claimSource:function e(t){var d=this;if(this.claimLoading)return;this.claimLoading=true;f.post({url:"/cgi-bin/setclaimsourcetype",data:{appmsgid:this.info.appmsgid,idx:this.info.itemidx,claim_source_type:t.claim_source_type,media_source_type_info:t.media_source_type_info},usePb:true,success:function g(C){d.claimLoading=false;d.componentContent=false;d.componentContentType=-1;if(C&&C.base_resp&&C.base_resp.ret===0){d.$tipsSuc("\u5DF2\u58F0\u660E\u521B\u4F5C\u6765\u6E90");d.hasSetClaimSource=true;d.claimSourceType=t.claim_source_type;d.mediaSourceTypeInfo=t.media_source_type_info}else{d.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");d.claimSourceType=-1;d.mediaSourceTypeInfo={}}},error:function g(C){console.error(C);d.claimLoading=false;d.componentContent=false;d.componentContentType=-1}})},cancelClaimSource:function e(){this.componentContent=false;this.componentContentType=-1;this.claimSourceType=-1;this.mediaSourceTypeInfo={}},getTagsInfo:function e(t){var d=t.appmsg_album_info,g=t.public_tag_info;var C=[];if(g){C=g.public_tag_list?g.public_tag_list.map(function(x){return{id:x.tag_id||x.id,title:x.tag_name||x.title,isPublic:true}})||[]:[]}var O=d&&d.appmsg_album_infos.map(function(x){return{id:x.id||"",title:x.title||"",isPublic:false}})||[];C=C.filter(function(x){return!O.find(function(le){return le.title===x.title})});return O.concat(C)},updateFeaturedList:function e(){var t=this;if(this.isOldPublish||this.isGroupSend||this.isOutofDate){return}var d=this.inFeaturedlist?"2":"1";if(d==="1"&&(this.hasTwoMsg||this.hasText||this.isText)){this.$store.dispatch("updateFeatureDialogProps",{show:true,hasTwoMsg:this.hasTwoMsg,isText:this.isText,hasText:this.hasText,curInfo:this.info})}else{var g=this.info,C=g.msgid,O=g.itemidx,x=g.appmsgid,le=g.share_type,we=g.title,Ae=g.pic_cdn_url_1_1,Ue=g.cover,Me=g.digest;var xe="/cgi-bin/featuredlist?sub=update&op=".concat(d,"&msgid=").concat(C,"&appmsgid=").concat(x,"&itemidx=").concat(O,"&token=").concat(wx.commonData.data.t);f.post({url:xe},function(Se){if(Se.base_resp&&Se.base_resp.ret===0){var Ce=t.$store.state.featuredlist;if(d==="1"){Ce=[{msgid:C,appmsgid:x,share_type:le,itemidx:O,title:we,cover:Ae||Ue,digest:Me}].concat(j(Ce));t.$tipsSuc("\u5DF2\u7CBE\u9009")}else{Ce=Ce.filter(function(je){return je.appmsgid!==x||je.itemidx!==O});t.$tipsSuc("\u5DF2\u53D6\u6D88\u7CBE\u9009");t.$bus.$emit("deleteInFeaturedTab",{appmsgid:x,itemidx:O})}t.morePopover=false;t.$store.dispatch("updateFeaturedlist",{featuredlist:Ce})}else if(Se.base_resp&&Se.base_resp.ret===803003){t.$tipsErr("\u6B64\u8D26\u53F7\u56E0\u8FDD\u89C4\u4E0D\u80FD\u7CBE\u9009\u5185\u5BB9")}else if(Se.base_resp&&Se.base_resp.ret===803004){t.$tipsErr("\u6B64\u6587\u7AE0\u56E0\u8FDD\u89C4\u4E0D\u53EF\u88AB\u7CBE\u9009")}else{t.$tipsErr("\u7F51\u7EDC\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}})}}},computed:{canCloseRecommend:function e(){return this.canBeRecommend&&!this.hasCloseRecommend&&!this.info.is_rumor_refutation&&!this.isMallActivity},canSetClaimSource:function e(){return!this.hasClaimSource&&!this.info.is_rumor_refutation&&!this.isMallActivity},haveTags:function e(){if(!this.info)return false;var t=this.getTagsInfo(this.info);return!!t&&t.length>0},isOldPublish:function e(){return this.item.view.sourceType!==1&&this.item.new_publish*1!==1},isGroupSend:function e(){return this.item.view.sourceType===1&&!this.is_send_all},inFeaturedlist:function e(){var t=this.info,d=t.appmsgid,g=t.itemidx;return!!this.$store.state.featuredlist.find(function(C){return C.appmsgid===d&&C.itemidx===g})},isOutofDate:function e(){var t=this.item.view&&this.item.view.publishDate;if(!t)return false;var d=+t.split("-")[0];if(d<2021){return true}else{return false}},hasTwoMsg:function e(){return this.$store.state.featuredlist.length>=2},isText:function e(){return this.$store.state.featuredlist.length&&this.info.share_type===10},hasText:function e(){if(!this.$store.state.featuredlist.length){return false}else{return this.$store.state.featuredlist[0].share_type===10}},showMoreTips:function e(){if(this.is_mall_draft)return true;return this.item.view.status==="\u53D1\u5E03\u6210\u529F"||this.item.view.status==="\u5DF2\u7FA4\u53D1"||this.item.view.status==="\u5DF2\u53D1\u8868"||this.item.view.status==="\u5DF2\u53D1\u5E03"||this.isAuditReject||/^\d+处替换失败$/.test(this.item.view.status)}}};var a={template:se,mixins:[ie],components:{},props:{idx:{type:Number,default:1},isRectangle:{type:Boolean}},data:function e(){return{hasCloseRecommend:this.info&&this.info.disable_recommend===1}},computed:{showMoreTips:function e(){return!this.info.is_deleted&&(this.item.view.status==="\u53D1\u5E03\u6210\u529F"||this.item.view.status==="\u5DF2\u7FA4\u53D1"||this.item.view.status==="\u5DF2\u53D1\u8868"||this.item.view.status==="\u5DF2\u53D1\u5E03"||/^\d+处替换失败$/.test(this.item.view.status))}}};var s={template:T,mixins:[ie],props:{idx:Number,default:1},data:function e(){return{hasCloseRecommend:this.info&&this.info.disable_recommend===1}},components:{"num-item":pe,"del-item":ge,"tag-item":be},computed:{isFinderVideo:function e(){return this.item.appmsg_info&&this.item.appmsg_info[0]&&this.item.appmsg_info[0].import_to_finder_info},cover:function e(){if(this.fromPublishDialog||this.item.type===9||this.item.type===16||this.item.type===10001){return this.info.cover}else if(this.item.type===4){return I.fullUrl("/cgi-bin/getimgdata?msgid="+this.item.msgid+"&mode=small&source=mass")}return""},isVideoDeleted:function e(){return this.info.is_deleted||this.info.deleteFlag||this.info.is_cooling_article}}};var o={template:h,mixins:[ie],props:{idx:Number,default:1},components:{"num-item":pe,"del-item":ge,"tag-item":be},mounted:function e(){},computed:{isAudioDeleted:function e(){return this.info.is_deleted||this.info.deleteFlag||this.info.is_cooling_article}},methods:{go:function e(){this.$emit("go");if(this.actualUrl){window.openUrl(this.actualUrl,{},true)}}},data:function e(){return{hasCloseRecommend:false}}};var p={template:n,mixins:[ie],props:{idx:Number,default:1},data:function e(){return{hasCloseRecommend:this.info&&this.info.disable_recommend===1}},components:{"num-item":pe,"del-item":ge},computed:{cover:function e(){if(this.item.type===9||!!this.item.publish_info){return this.info.cover}else if(this.item.type===2){return this.info.url?this.info.url:I.fullUrl("/cgi-bin/getimgdata?msgid="+this.item.msgid+"&mode=large&source=mass&fileId="+this.item.image_info.fileid)}return this.item.cover},isImgDeleted:function e(){return this.info.is_deleted||this.info.deleteFlag||this.info.is_cooling_article}}};var k={template:G,mixins:[ie],props:{idx:Number,default:1},data:function e(){return{hasCloseRecommend:this.info&&this.info.disable_recommend===1}},components:{"num-item":pe,"del-item":ge},computed:{highLight:function e(){var t;if(!this.fromPublishDialog){t=this.info.highlight_title}else{t=this.info.title}return this.$options.filters.emojiFormat(t)},titleAfterFilter:function e(){var t=this.$options.filters.titleFilter(this.info.title||"");var d=this.$options.filters.emojiFormat(t).replace(/&amp;/g,"&").replace(/&nbsp;/g," ");if(Te.safari){return d.slice(0,113)}else{return d.replace(/\n/g,"<br>")}}},filters:{titleFilter:function e(t){return oe.html(t,true)},emojiFormat:function e(t){if(!/\[[^\[\]]+\]/.test(t)){return t}return t.replace(/\[[^\[\]]+\]/g,function(d){try{var g=ne.decode(d);return g}catch(C){}})}}};var U={template:Q,mixins:[ie],props:{idx:Number,default:1},data:function e(){var t=this.info&&this.info.finder_live_analysis||{};var d=parseInt(t.succ_push_num,10)||0;var g=parseInt(t.watch_live_num,10)||0;var C=d===0?"-":"".concat((g/d*100).toFixed(1),"%");return{succPushNum:d,watchLiveUv:g,convertRate:C}},methods:{goFinder:function e(){window.open("https://channels.weixin.qq.com")}},filters:{titleFilter:function e(t){return ye.htmlDecode(t)}}};var L={template:ee,mixins:[ie],props:{idx:Number,default:1},data:function e(){return{hasCloseRecommend:false,showMoreTips:false}},mounted:function e(){},methods:{onClickMallactivityTitle:function e(){this.$tipsErr("\u8BF7\u5728\u624B\u673A\u5FAE\u4FE1\u67E5\u770B\u8BE5\u5546\u54C1\u5408\u96C6")}},filters:{titleFilter:function e(t){return ye.htmlDecode(t)}}};F.component("num-item",pe);F.component("del-item",ge);F.component("tag-item",be);F.component("more-item",Re);F.component(he.name,he);F.component(Pe.name,Pe);F.component(Ne.name,Ne);F.component("appmsg-item",a);F.component("appmsg-video-item",s);F.component("appmsg-audio-item",o);F.component("appmsg-img-item",p);F.component("appmsg-text-item",k);F.component("appmsg-live-item",U);F.component("appmsg-mallactivity-item",L);function Z(e){var t="";switch(e*1){case 0:t="\u56FE\u6587";break;case 5:t="\u89C6\u9891";break;case 7:t="\u97F3\u9891";break;default:t="\u56FE\u6587"}return t}function W(e,t){var d;if((d=e.sent_result)!==null&&d!==void 0&&d.audit_reject){return"\u6253\u56DE\u4FEE\u6539"}return t}function ae(e){switch(e.publish_info.publish_status){case 1:case 2:e.view.status="\u7B49\u5019\u53D1\u8868";e.view.msg="\u6B63\u5728\u6392\u961F\u7B49\u5019\u7CFB\u7EDF\u53D1\u8868\uFF0C\u53EF\u80FD\u9700\u898110-20\u5206\u949F";break;case 3:case 4:case 5:e.view.status="\u5BA1\u6838\u4E2D";e.view.msg="\u5BA1\u6838\u4E2D\uFF0C\u9884\u8BA1\u9700\u898110-20\u5206\u949F";break;case 102:e.view.status="\u53D1\u8868\u5931\u8D25";if(e.publish_info.check_results){var t=e.publish_info.check_results;e.view.msg=[];t.forEach(function(x){e.view.msg.push(A({item:JSON.parse(x.result),itemAppealStatus:x.appeal_status}))})}else{e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\u65E0\u6CD5\u67E5\u770B"}break;case 103:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80\u8349\u7A3F\u7BB1\u4FEE\u6539\u540E\u91CD\u8BD5";break;case 104:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B\uFF0C\u8BF7\u524D\u5F80\u8349\u7A3F\u7BB1\u4FEE\u6539\u540E\u91CD\u8BD5";var d=e.publish_info.xa_check_items;d&&d.forEach(function(x){if(x.status===1){if(e.appmsg_info[x.idx-1]){e.appmsg_info[x.idx-1].deleteFlag=true}}});break;case 105:e.view.status="\u53D1\u8868\u5931\u8D25";if(e.publish_info.video_status!==void 0){switch(e.publish_info.video_status){case 103:e.view.msg="\u89C6\u9891\u5DF2\u5220\u9664";break;case 110:e.view.msg="\u89C6\u9891\u8F6C\u7801\u5931\u8D25";break;case 120:e.view.msg="\u5BA1\u6838\u5931\u8D25";break;case 130:e.view.msg="\u539F\u521B\u6821\u9A8C\u4E2D";break;case 131:e.view.msg="\u539F\u521B\u58F0\u660E\u5931\u8D25";break;case 132:e.view.msg="\u539F\u521B\u6821\u9A8C\u5931\u8D25";break;case 200:e.view.msg="\u89C6\u9891\u53F7\u540C\u6B65\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u53D1\u8868";break;case 101:case 102:case 0:default:e.view.msg="\u89C6\u9891\u53D1\u8868\u5931\u8D25"}}else{if(Array.isArray(e.appmsg_info)&&e.appmsg_info.some(function(x){return x.import_to_finder_info})){e.view.msg="\u89C6\u9891\u53F7\u540C\u6B65\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u53D1\u8868"}else{e.view.msg="\u89C6\u9891\u53D1\u8868\u5931\u8D25"}}break;case 106:e.view.status="\u53D1\u5E03\u5931\u8D25";e.view.msg='\u5931\u8D25\u539F\u56E0\u53EF\u67E5\u8BE2<a href="https://mp.weixin.qq.com/s/RSgqu_CJDVGn6Euh8RVdIQ" target="_blank">\u8F9F\u8C23\u6587\u7AE0\u89C4\u5219\u8BF4\u660E</a>';break;case 200:var g=e.publish_info.replace_scene_info;if(g&&!g.all_result){var C=g.replace_infos.filter(function(x){return!x.result});e.view.status="".concat(C.length,"\u5904\u66FF\u6362\u5931\u8D25");e.view.replaceFailNumber=C.length;e.view.msg="\u5DF2\u53D1\u8868\u5185\u5BB9\u53EF\u88AB\u81EA\u5B9A\u4E49\u83DC\u5355\u3001\u81EA\u52A8\u56DE\u590D\u3001\u5408\u96C6\u5F15\u7528\uFF0C\u4E5F\u53EF\u7528\u4E8E\u516C\u5F00\u4F20\u64AD"}else{if(e.new_publish===1){e.view.status=W(e,"\u5DF2\u53D1\u8868");var O=i?"\u670D\u52A1\u53F7":"\u516C\u4F17\u53F7";e.view.msg="\u672A\u5F00\u542F\u7FA4\u53D1\u901A\u77E5\uFF0C\u5185\u5BB9\u5DF2\u5728".concat(O,"\u4E3B\u9875\u5C55\u793A")}else{e.view.status=W(e,"\u5DF2\u53D1\u8868");e.view.msg="\u5DF2\u53D1\u8868\u5185\u5BB9\u53EF\u88AB\u81EA\u5B9A\u4E49\u83DC\u5355\u3001\u81EA\u52A8\u56DE\u590D\u3001\u5408\u96C6\u5F15\u7528\uFF0C\u4E5F\u53EF\u7528\u4E8E\u516C\u5F00\u4F20\u64AD"}}break;case 300:e.view.status="\u5DF2\u5220\u9664";e.view.msg="\u5185\u5BB9\u5DF2\u88AB\u5220\u9664\uFF0C\u7528\u6237\u65E0\u6CD5\u67E5\u770B\u8BE5\u5185\u5BB9";break;case 301:e.view.status="\u65E0\u6CD5\u67E5\u770B";e.view.msg="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B";break;case 400:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80\u8349\u7A3F\u7BB1\u4FEE\u6539\u540E\u91CD\u8BD5";break;default:e.view.status="\u7B49\u5019\u53D1\u8868";e.view.msg="\u6B63\u5728\u6392\u961F\u7B49\u5019\u7CFB\u7EDF\u53D1\u8868\uFF0C\u53EF\u80FD\u9700\u898110-20\u5206\u949F"}return e}function re(e){e.view.isFromApp=e.sent_info&&e.sent_info.func_flag&1<<28;if(e.sent_result){switch(e.sent_result.msg_status){case 11:e.view.status="\u53D1\u8868\u4E2D";e.view.msg="\u7FA4\u53D1\u56FE\u6587\u539F\u521B\u60C5\u51B5\u68C0\u6D4B\u7ED3\u679C\u5DF2\u901A\u8FC7\u6A21\u677F\u6D88\u606F\u4E0B\u53D1\u5230\u7BA1\u7406\u5458\u7684\u5FAE\u4FE1\u53F7\uFF0C\u8BF7\u524D\u5F80\u64CD\u4F5C\u786E\u8BA4";e.view.noReadNum=true;break;case 12:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u7BA1\u7406\u5458\u5DF2\u5728\u7FA4\u53D1\u56FE\u6587\u539F\u521B\u60C5\u51B5\u68C0\u6D4B\u7ED3\u679C\u786E\u8BA4\u9875\u53D6\u6D88\u672C\u6761\u5B9A\u65F6\u6D88\u606F";e.view.noReadNum=true;break;case 13:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u7FA4\u53D1\u56FE\u6587\u539F\u521B\u60C5\u51B5\u68C0\u6D4B\u7ED3\u679C\u8FC7\u671F\u672A\u786E\u8BA4\uFF0C\u5DF2\u53D6\u6D88\u672C\u6761\u5B9A\u65F6\u6D88\u606F";e.view.noReadNum=true;break;case 14:e.view.sourceType=2;e.view.status=W(e,"\u5DF2\u53D1\u8868");break;case 1:case 101:case 102:case 103:case 104:case 107:e.view.status="\u5BA1\u6838\u4E2D";break;case 105:case 106:e.view.status="\u53D1\u8868\u4E2D";break;case 2:if(e.sent_info.time*1e3>r){e.view.status=W(e,"\u5DF2\u53D1\u8868")}else{e.view.status="\u5DF2\u7FA4\u53D1"}break;case 5:e.view.status="\u53D1\u8868\u5931\u8D25";if(e.sent_result.send_fail_reason===2){e.view.status="\u5BA1\u6838\u5931\u8D25"}if(!!e.sent_result.can_retry_masssend&&e.sent_result.send_fail_reason!==1){e.view.status="\u5F85\u786E\u8BA4";e.view.msg="\u53EF\u8FDB\u884C\u8865\u53D1\uFF0C\u8865\u53D1\u65F6\u5C06\u8FC7\u6EE4\u5DF2\u6536\u5230\u6D88\u606F\u7684\u7528\u6237";e.view.confirmWording="\u786E\u8BA4\u8865\u53D1"}if(e.sent_result.msg_fail_reason==="\u89C6\u9891\u8F6C\u7801\u5931\u8D25"){e.view.msg='\u89C6\u9891\u8F6C\u7801\u5931\u8D25\uFF0C\u8BF7\u524D\u5F80<a target="_blank" href="/cgi-bin/appmsg?begin=0&count=10&action=list_video&type=15">\u7D20\u6750\u5E93</a>\u67E5\u770B\u8BE6\u60C5'}e.view.msg=e.view.msg||e.sent_result.msg_fail_reason||"";if(e.sent_result.refuse_reason==="SENDFAIL_NOT_LIVE_OPEN"){e.view.status="\u53D1\u8868\u5931\u8D25";var t=e.appmsg_info||[];t.forEach(function(g){if(g.share_type===19){if(!g.live_export_id){e.view.msg="\u5728\u5B9A\u65F6\u7FA4\u53D1\u65F6\u95F4\u672A\u5F00\u542F\u76F4\u64AD"}else{e.view.msg="\u7FA4\u53D1\u5F00\u59CB\u65F6\u76F4\u64AD\u5DF2\u7ED3\u675F"}}})}else if(e.sent_result.refuse_reason==="SENDFAIL_GET_FINDER_LIVE_FAIL"){var d=e.appmsg_info||[];d.forEach(function(g){if(g.share_type===19&&g.biz_live_status===2){e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u8BE5\u76F4\u64AD\u5DF2\u7ED3\u675F\uFF0C\u7FA4\u53D1\u65F6\u672A\u67E5\u8BE2\u5230\u76F4\u64AD\u4FE1\u606F"}})}else if(e.sent_result.refuse_reason==="SENDFAIL_FINDER_SYS_FAIL"){e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u89C6\u9891\u53F7\u540C\u6B65\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u53D1\u8868"}break;case 6:e.view.noReadNum=true;if(e.sent_result.reject_index_list&&e.sent_result.reject_index_list.length>0&&e.type===9){e.view.status="\u53D1\u8868\u5931\u8D25";e.sent_result.reject_titles=[];e.sent_result.reject_index_list.forEach(function(g){if(e.appmsg_info.length>1&&e.appmsg_info[g]){e.sent_result.reject_titles.push(e.appmsg_info[g].title)}if(e.appmsg_info[g]){e.appmsg_info[g].deleteFlag=true}})}else{e.view.status="\u5BA1\u6838\u5931\u8D25";switch(e.sent_result.refuse_reason){case"10001":e.view.msg="\u5783\u573E\u5E7F\u544A\u6216\u9A9A\u6270";break;case"20001":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u6CD5\u89C4";break;case"20002":e.view.msg="\u8272\u60C5\u6216\u6027\u6697\u793A";break;case"20004":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u89C4\u5B9A";break;case"20006":e.view.msg="\u6D89\u5ACC\u8FDD\u6CD5";break;case"20008":e.view.msg="\u6D89\u5ACC\u6B3A\u8BC8";break;case"20013":e.view.msg="\u6D89\u5ACC\u4FB5\u6743";break;case"21000":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u89C4\u5B9A";break;case"CHECKFAIL_LIVE_AUDIT_REJECT":e.view.msg="\u5F53\u524D\u76F4\u64AD\u672A\u901A\u8FC7\u5BA1\u6838\uFF0C\u4E0D\u53EF\u7FA4\u53D1";break;default:e.view.msg=""}}break;case 7:e.view.status="\u5DF2\u5220\u9664";break;case 8:e.view.status="\u65E0\u6CD5\u67E5\u770B";e.view.msg="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B";break;case 302:e.view.status="\u5BA1\u6838\u4E2D";break;case 301:case 305:e.view.status="\u7B49\u5019\u53D1\u8868";e.view.wording="\u7B49\u5019\u53D1\u8868";break;case 303:e.view.status="\u89C6\u9891\u5BA1\u6838\u4E2D";break;case 304:e.view.status="\u89C6\u9891\u540C\u6B65\u4E2D";e.view.msg="\u89C6\u9891\u7D20\u6750\u6B63\u5728\u540C\u6B65\u5230\u89C6\u9891\u53F7";break;default:e.view.status=""}}else{e.view.status="";e.view.msg="\u6570\u636E\u51FA\u9519"}if(e.not_all_masssend===1){e.view.status=W(e,"\u5DF2\u53D1\u8868")}return e}function me(e){var t={};var d=window.wx.commonData.data.uin_base64||"";e.view.link=z('<a href="{albumUrl}" target="_blank">{albumTitle}</a>',{albumTitle:ye.htmlEncode(e.album_result.album_title),albumUrl:"https://mp.weixin.qq.com/mp/appmsgalbum?action=getalbum&album_id=".concat(e.album_result.album_id,"&__biz=").concat(d,"#wechat_redirect")});e.view.albumType=Z(e.album_result.album_type);var g=e.album_result.msg_status;switch(g){case 1:e.view.status="\u53D1\u8868\u4E2D";break;case 2:e.view.status="\u53D1\u8868\u5931\u8D25";if(e.album_result.msg_fail_reason){t=_({item:JSON.parse(e.album_result.msg_fail_reason),isMediaAccount:this.isMediaAccount()});e.view.msg=t.reason}else{e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\u65E0\u6CD5\u67E5\u770B"}break;case 3:case 6:e.view.status=W(e,"\u5DF2\u53D1\u8868");break;case 4:case 15:e.view.status="\u5F85\u786E\u8BA4";if(e.album_result.msg_fail_reason){var C=JSON.parse(e.album_result.msg_fail_reason);if(C.source_info){t=_({item:C,isMediaAccount:this.isMediaAccount()})}else{t.reason='\u8BE5\u5185\u5BB9\u5DF2\u7533\u8BC9\u901A\u8FC7\uFF0C\u53EF\u5728\u5F53\u524D\u9875\u9762\u7EE7\u7EED\u53D1\u8868\u3002<span class="weui-desktop-tips">\uFF08\u63D0\u9192\uFF1A\u5982\u5728\u5408\u96C6\u91CC\u91CD\u65B0\u6DFB\u52A0\u8BE5\u7D20\u6750\u4F1A\u5BFC\u81F4\u518D\u6B21\u539F\u521B\u6821\u9A8C\u5931\u8D25\uFF09</span>'}e.view.msg=t.reason}if(g===4){e.view.confirmWording="\u53D6\u6D88\u539F\u521B\u5E76\u53D1\u8868"}else if(g===15){e.view.confirmWording="\u7EE7\u7EED\u53D1\u8868"}break;case 5:case 13:e.view.status=W(e,"\u5DF2\u53D1\u8868");e.view.removed=true;e.view.updateTime=q.timeFormat(e.album_result.update_time);e.view.msg="\u4ECE\u5408\u96C6"+e.view.link+"\u79FB\u9664";break;case 9:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.removed=true;e.view.updateTime=q.timeFormat(e.album_result.update_time);e.view.msg="\u4ECE\u5408\u96C6"+e.view.link+"\u79FB\u9664";break;case 14:e.view.status="\u5185\u5BB9\u88AB\u79FB\u9664";e.view.removed=true;e.view.updateTime=q.timeFormat(e.album_result.update_time);e.view.msg="\u975E\u539F\u521B\u5185\u5BB9\u4E0D\u53EF\u53D1\u8868\u5230\u5408\u96C6\uFF0C\u8BE5\u5185\u5BB9\u5DF2\u4ECE\u5408\u96C6"+e.view.link+"\u79FB\u9664\uFF0C\u8BE6\u60C5\u8BF7\u67E5\u770B\u76F8\u5E94\u7AD9\u5185\u4FE1\u901A\u77E5\u3002";break;case 7:e.view.status="\u5DF2\u5220\u9664";if(e.appmsg_info&&!e.appmsg_info.length){e.appmsg_info.is_deleted=true}else{e.appmsg_info[0].is_deleted=true}break;case 8:e.view.status="\u65E0\u6CD5\u67E5\u770B";e.view.msg="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B";break;case 20:e.view.status="\u53D1\u8868\u5931\u8D25";if(e.album_result.msg_fail_reason){e.view.msg=c({item:e.album_result.msg_fail_reason,isMediaAccount:this.isMediaAccount()})}else{e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\u65E0\u6CD5\u67E5\u770B"}break;case 21:e.view.status="\u53D1\u8868\u5931\u8D25";switch(e.album_result.msg_fail_reason){case"10001":e.view.msg="\u5783\u573E\u5E7F\u544A\u6216\u9A9A\u6270";break;case"20001":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u6CD5\u89C4";break;case"20002":e.view.msg="\u8272\u60C5\u6216\u6027\u6697\u793A";break;case"20004":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u89C4\u5B9A";break;case"20006":e.view.msg="\u6D89\u5ACC\u8FDD\u6CD5";break;case"20008":e.view.msg="\u6D89\u5ACC\u6B3A\u8BC8";break;case"20013":e.view.msg="\u6D89\u5ACC\u4FB5\u6743";break;case"21000":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u89C4\u5B9A";break;default:e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\u65E0\u6CD5\u67E5\u770B"}break;case 22:e.view.status="\u53D1\u8868\u5931\u8D25";if(e.album_result.msg_fail_reason){var O=JSON.parse(e.album_result.msg_fail_reason);if(O.source_info){t=_({item:O,isMediaAccount:this.isMediaAccount()})}else{t.reason="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\u65E0\u6CD5\u67E5\u770B"}e.view.msg=t.reason}else{e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\u65E0\u6CD5\u67E5\u770B"}break;default:e.view.status=""}return e}function de(e,t){if(e.appmsg_info[0]){e.view.link=z('<a href="{videoUrl}" target="_blank">\u67E5\u770B\u89C6\u9891\u94FE\u63A5</a>',{videoUrl:e.appmsg_info[0].content_url})}var d=e.sent_result.msg_status;switch(d){case 1:e.view.status=W(e,"\u5DF2\u53D1\u8868");e.view.msg="\u5DF2\u53D1\u8868\u5185\u5BB9\u53EF\u88AB\u81EA\u5B9A\u4E49\u83DC\u5355\u3001\u81EA\u52A8\u56DE\u590D\u3001\u5408\u96C6\u5F15\u7528\uFF0C\u4E5F\u53EF\u7528\u4E8E\u516C\u5F00\u4F20\u64AD";break;case 2:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg=e.sent_result.msg_fail_reason;break;case 3:e.view.status="\u5BA1\u6838\u5931\u8D25";e.view.msg=e.sent_result.msg_fail_reason;break;case 4:e.view.status="\u89C6\u9891\u5BA1\u6838\u4E2D";break;case 5:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B\uFF0C\u8BF7\u524D\u5F80<a target='_blank' href='/cgi-bin/appmsg?begin=0&count=10&type=77&action=list_card'>\u8349\u7A3F\u7BB1</a>\u4FEE\u6539\u540E\u91CD\u8BD5";break;case 6:e.view.status="\u5DF2\u5220\u9664";e.appmsg_info.is_deleted=true;break;default:e.view.status=""}return e}function ce(e){if(e.sent_result){var t=e.sent_result.msg_status;switch(t){case 11:e.view.status="\u53D1\u8868\u4E2D";e.view.msg="\u7FA4\u53D1\u56FE\u6587\u539F\u521B\u60C5\u51B5\u68C0\u6D4B\u7ED3\u679C\u5DF2\u901A\u8FC7\u6A21\u677F\u6D88\u606F\u4E0B\u53D1\u5230\u7BA1\u7406\u5458\u7684\u5FAE\u4FE1\u53F7\uFF0C\u8BF7\u524D\u5F80\u64CD\u4F5C\u786E\u8BA4";e.view.noReadNum=true;break;case 12:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u7BA1\u7406\u5458\u5DF2\u5728\u7FA4\u53D1\u56FE\u6587\u539F\u521B\u60C5\u51B5\u68C0\u6D4B\u7ED3\u679C\u786E\u8BA4\u9875\u53D6\u6D88\u672C\u6761\u5B9A\u65F6\u6D88\u606F";e.view.noReadNum=true;break;case 13:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u7FA4\u53D1\u56FE\u6587\u539F\u521B\u60C5\u51B5\u68C0\u6D4B\u7ED3\u679C\u8FC7\u671F\u672A\u786E\u8BA4\uFF0C\u5DF2\u53D6\u6D88\u672C\u6761\u5B9A\u65F6\u6D88\u606F";e.view.noReadNum=true;break;case 14:e.view.sourceType=2;e.view.status=W(e,"\u5DF2\u53D1\u8868");break;case 1:case 101:case 102:case 103:case 104:case 107:e.view.status="\u5BA1\u6838\u4E2D";break;case 105:case 106:e.view.status="\u53D1\u8868\u4E2D";break;case 2:if(e.sent_info.time*1e3>r){e.view.status=W(e,"\u5DF2\u53D1\u8868")}else{e.view.status="\u5DF2\u7FA4\u53D1"}break;case 5:e.view.status="\u53D1\u8868\u5931\u8D25";if(e.sent_result.send_fail_reason===2){e.view.status="\u5BA1\u6838\u5931\u8D25"}if(!!e.sent_result.can_retry_masssend&&e.sent_result.send_fail_reason!==1){e.view.status="\u5F85\u786E\u8BA4";e.view.msg="\u53EF\u8FDB\u884C\u8865\u53D1\uFF0C\u8865\u53D1\u65F6\u5C06\u8FC7\u6EE4\u5DF2\u6536\u5230\u6D88\u606F\u7684\u7528\u6237";e.view.confirmWording="\u786E\u8BA4\u8865\u53D1"}e.view.msg=e.view.msg||e.sent_result.msg_fail_reason||"";break;case 6:e.view.noReadNum=true;e.sent_result.msg_fail_reason="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B";if(e.sent_result.reject_index_list&&e.sent_result.reject_index_list.length>0&&e.type===9){e.view.status="\u53D1\u8868\u5931\u8D25";e.sent_result.reject_titles=[]}else{e.view.status="\u5BA1\u6838\u5931\u8D25";switch(e.sent_result.refuse_reason){case"10001":e.view.msg="\u5783\u573E\u5E7F\u544A\u6216\u9A9A\u6270";break;case"20001":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u6CD5\u89C4";break;case"20002":e.view.msg="\u8272\u60C5\u6216\u6027\u6697\u793A";break;case"20004":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u89C4\u5B9A";break;case"20006":e.view.msg="\u6D89\u5ACC\u8FDD\u6CD5";break;case"20008":e.view.msg="\u6D89\u5ACC\u6B3A\u8BC8";break;case"20013":e.view.msg="\u6D89\u5ACC\u4FB5\u6743";break;case"21000":e.view.msg="\u8FDD\u53CD\u76F8\u5173\u89C4\u5B9A";break;default:e.view.msg=""}}break;case 7:e.view.status="\u5DF2\u5220\u9664";e.card_info.is_deleted=true;break;case 8:e.view.status="\u65E0\u6CD5\u67E5\u770B";e.view.msg="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B";break;case 302:e.view.status="\u5BA1\u6838\u4E2D";break;case 301:case 305:e.view.status="\u7B49\u5019\u53D1\u8868";e.view.wording="\u7B49\u5019\u53D1\u8868";break;case 303:e.view.status="\u89C6\u9891\u5BA1\u6838\u4E2D";break;case 304:e.view.status="\u89C6\u9891\u540C\u6B65\u4E2D";e.view.msg="\u89C6\u9891\u7D20\u6750\u6B63\u5728\u540C\u6B65\u5230\u89C6\u9891\u53F7";break;default:e.view.status=""}}else{e.view.status="";e.view.msg="\u6570\u636E\u51FA\u9519"}return e}function ve(e){var t;switch((t=e.publish_info)===null||t===void 0?void 0:t.publish_status){case 1:case 2:e.view.status="\u7B49\u5019\u53D1\u8868";e.view.msg="\u6B63\u5728\u6392\u961F\u7B49\u5019\u7CFB\u7EDF\u53D1\u8868\uFF0C\u53EF\u80FD\u9700\u898110-20\u5206\u949F";break;case 3:case 4:case 5:e.view.status="\u5BA1\u6838\u4E2D";e.view.msg="\u5BA1\u6838\u4E2D\uFF0C\u9884\u8BA1\u9700\u898110-20\u5206\u949F";break;case 102:e.view.status="\u53D1\u8868\u5931\u8D25";if(e.publish_info.check_results){try{var d=e.publish_info.check_results;e.view.msg=[];d.forEach(function(O){e.view.msg.push(A({item:JSON.parse(O.result),itemAppealStatus:O.appeal_status}))})}catch(O){e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\u65E0\u6CD5\u67E5\u770B"}}else{e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25\u65E0\u6CD5\u67E5\u770B"}break;case 103:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25";break;case 104:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B";var g=e.publish_info.xa_check_items;g&&g.forEach(function(O){if(O.status===1){if(e.card_info){e.card_info.deleteFlag=true}}});break;case 200:e.view.status=W(e,"\u5DF2\u53D1\u8868");var C=i?"\u670D\u52A1\u53F7":"\u516C\u4F17\u53F7";e.view.msg="\u672A\u5F00\u542F\u7FA4\u53D1\u901A\u77E5\uFF0C\u5185\u5BB9\u5DF2\u5728".concat(C,"\u4E3B\u9875\u5C55\u793A");break;case 300:e.view.status="\u5DF2\u5220\u9664";e.view.msg="\u5185\u5BB9\u5DF2\u88AB\u5220\u9664\uFF0C\u7528\u6237\u65E0\u6CD5\u67E5\u770B\u8BE5\u5185\u5BB9";e.card_info.is_deleted=true;break;case 301:e.view.status="\u65E0\u6CD5\u67E5\u770B";e.view.msg="\u6B64\u5185\u5BB9\u56E0\u8FDD\u89C4\u65E0\u6CD5\u67E5\u770B";break;case 400:e.view.status="\u53D1\u8868\u5931\u8D25";e.view.msg="\u6B64\u5185\u5BB9\u53D1\u8868\u5931\u8D25";break;default:e.view.status="\u7B49\u5019\u53D1\u8868";e.view.msg="\u6B63\u5728\u6392\u961F\u7B49\u5019\u7CFB\u7EDF\u53D1\u8868\uFF0C\u53EF\u80FD\u9700\u898110-20\u5206\u949F"}return e}function _e(e,t){var d;var g=new Map([["media",1],["album",2],["video",3],["publish",4],["mallactivity",5],["mallactivity_publish",6],[101,1],[102,2],[103,3],[1,4],[104,5],[3,6]]);if(t===0)return e;e.view.sourceType=g.get(t);var C=new Map([[1,re.bind(this)],[2,me.bind(this)],[3,de.bind(this)],[4,ae.bind(this)],[5,ce.bind(this)],[6,ve.bind(this)]]);e=C.get(e.view.sourceType)&&C.get(e.view.sourceType)(e,t);var O=(d=e)===null||d===void 0?void 0:d.appmsg_info;if(O&&O.length){var x=O.every(function(le){return le.is_cooling_article});if(x){e.view.status="\u65E0\u6CD5\u67E5\u770B";e.isCoolingItem=true}}return e}E.exports={mixin:ie,formatTime:u,formatDeleteTime:y,formatWords:z,getPublishStatus:ae,getSendStatus:re,getAlbumStatus:me,getVideoStatus:de,getStatus:_e}},"./src/pages/modules/publish/tpl/publish_tpl.less":function(E,v,l){"use strict";l.r(v)},"./src/pages/modules/publish/tpl/tag.tpl":function(E,v){E.exports=`<!-- <mp-tooltip
    class="weui-desktop-link"
    position="down-center"
    :delay="300"
  >
  <button slot="target" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary" :class="{ 'weui-desktop-opr-btn_disabled': btnDisabled }" @click="addTags">
    <icon-svg src="pages/modules/base/svg/default/common-tag.svg?__symbol"></icon-svg>
    <i class="replace_icon_svg20__common-tag"></i> 
  </button>
  <template slot="content">
    <template v-if="info.share_type === 0 && info.copyright_status != 11 && !isMediaAccount && !isInstitutionAccount">\u975E\u539F\u521B\u6587\u7AE0\u4E0D\u80FD\u53C2\u4E0E\u5408\u96C6</template>
    <template v-else>\u6DFB\u52A0\u5408\u96C6</template>
    <template>\u6DFB\u52A0\u5408\u96C6</template>
  </template>
</mp-tooltip>-->


<!-- <mp-tooltip
  v-else
  class="weui-desktop-link"
  content="\u5220\u9664\u5408\u96C6"
  position="down-center"
  :delay="300"
>
  <button slot="target" class="weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary" @click="removeTags">
    <icon-svg src="pages/modules/base/svg/default/common-tag-delete.svg?__symbol"></icon-svg>
  </button>
</mp-tooltip> -->`},"./src/pages/modules/publish/tpl/text.tpl":function(E,v){E.exports=`<div class="weui-desktop-mass-media weui-desktop-mass-appmsg weui-desktop-mass-text_primary" :class="{'weui-desktop-mass-media_del':info.is_deleted || info.deleteFlag || info.is_cooling_article || isAuditRejectDel }">
  <div class="weui-desktop-mass-text__bd">
    <div class="weui-desktop-mass-appmsg__bd_container">
      <!--\u5220\u9664\u6587\u5B57\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1begin \u524D\u7AEF\u5F3A\u4FE1\u4EFBis_deleted\u548Cdelete_time\u5B57\u6BB5-->
      <mp-tooltip position="bottom-center" :delay="300" v-if="info.is_deleted && !info.is_cooling_article" class="weui-desktop-mass-appmsg__tips">
        <span v-if="info.deleteFormatTime" class="weui-desktop-mass-appmsg__tips_content">\u5220\u9664\u65F6\u95F4 {{info.deleteFormatTime}} <span v-if="info.delete_nickname">\u64CD\u4F5C\u4EBA {{info.delete_nickname}}</span></span>
        <!--\u52A0\u4E00\u5C42\u5220\u9664\u65F6\u95F4\u4E3A\u7A7A\u7684\u4FDD\u62A4-->
        <span v-else class="weui-desktop-mass-appmsg__tips_content">\u5DF2\u5220\u9664</span>
        <template v-if="!fromPublishDialog" slot="target">
          <a v-if="keyword !== ''" :href="actualUrl || 'javascript:;'" target="_blank" class="weui-desktop-mass-appmsg__title">
            <span v-html="highLight"></span>
            <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
          </a>
          <a v-else :href="actualUrl || 'javascript:;'" target="_blank" class="weui-desktop-mass-appmsg__title">
            <span v-html="titleAfterFilter"></span>
            <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
          </a>
        </template>
        <template v-else slot="target">
          <div class="weui-desktop-mass-appmsg__title">
            <span v-if="keyword !== ''" v-html="highLight"></span>
            <span v-else v-html="titleAfterFilter"></span>
            <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
          </div>
          <div class="album_appmsg_title" v-if="info?.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
            <span v-for="item in info.appmsg_album_infos">#{{item.title}}  </span>
          </div>
        </template>
      </mp-tooltip>
      <!--\u5220\u9664\u6587\u5B57\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1end-->

      <!--\u666E\u901A\u6587\u5B57\u6807\u9898begin-->
      <div v-else>
        <template v-if="!fromPublishDialog">
          <a v-if="keyword !== ''" :href="actualUrl || 'javascript:;'" target="_blank" class="weui-desktop-mass-appmsg__title">
            <span v-html="highLight"></span>
            <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            <mp-album-intro class="appmsg-pay-intro" v-if="info?.appmsg_album_infos?.length > 0 && isAlbum && !item.selected" :append-to-body="true" pos="up-left">
              <p slot="intro">
                <p>\u5355\u7BC7\u5185\u5BB9\u4EC5\u80FD\u6536\u5F55\u4E8E\u4E00\u4E2A\u5408\u96C6\u4E2D\u3002</p>
              </p>
            </mp-album-intro>
          </a>
          <a v-else :href="actualUrl || 'javascript:;'" target="_blank" class="weui-desktop-mass-appmsg__title">
            <span v-html="titleAfterFilter"></span>
            <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            <mp-album-intro class="appmsg-pay-intro" v-if="info?.appmsg_album_infos?.length > 0 && isAlbum && !item.selected" :append-to-body="true" pos="up-left">
              <p slot="intro">
                <p>\u5355\u7BC7\u5185\u5BB9\u4EC5\u80FD\u6536\u5F55\u4E8E\u4E00\u4E2A\u5408\u96C6\u4E2D\u3002</p>
              </p>
            </mp-album-intro>
          </a>
        </template>
        <template v-else>
          <a v-if="keyword !== ''" :href="actualUrl || 'javascript:;'" class="weui-desktop-mass-appmsg__title">
            <span v-html="highLight"></span>
          </a>
          <a v-else :href="actualUrl || 'javascript:;'" class="weui-desktop-mass-appmsg__title">
            <span v-html="titleAfterFilter"></span>
          </a>
          <div class="album_appmsg_title" v-if="info?.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
            <span v-for="item in info.appmsg_album_infos">#{{item.title}}  </span>
          </div>
        </template>
      </div>
      <!--\u666E\u901A\u6587\u5B57\u6807\u9898end-->

      <template v-if="!item.timerSendInfo">
        <num-item
          v-if="hasnum"
          :info="info"
          :i="i"
          :item="item" ></num-item>
      </template>
    </div>
  </div>
  <!--<div class="weui-desktop-mass-appmsg__ft" v-if="hasdel">
    <div class="weui-desktop-mass-media__opr">
      <div class="weui-desktop-mass-media__opr__meta js_del">
        <del-item
          :i="i"
          :idx="idx"
          v-if="hasdel"
          :item="item"
          :is-appmsg="true"
          :info="info"></del-item>
      </div>
    </div>
  </div>-->
  <div class="weui-desktop-mass-appmsg__ft" v-if="!fromPublishDialog">
        <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E -->
        <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E end -->
    <div class="weui-desktop-mass-media__opr">
      <!--\u8FD9\u91CC\u662F\u5220\u9664\u540E\u91CD\u65B0\u7F16\u8F91icon-->
      <div v-if="(info.is_deleted || info.is_cooling_article) && item.copy_appmsg_id"  class="weui-desktop-mass-media__opr__meta">
        <button slot="target" @click="reeditmsg" class="re-edit_btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
          <mp-icon class="re-edit_icon" icon="edit" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
          <span class="re-edit_wording">\u91CD\u65B0\u7F16\u8F91</span>
        </button>
      </div>
      <template v-if="showToDataPageBtn">
        <div class="weui-desktop-mass-media__opr__meta">
          <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="item.view.dataPageWording" :delay="300">
            <button slot="target" @click="goToDataPage(info.appmsgid, info.itemidx, item.view.publishDate, item.view.isGoToDataPage)" :class="{'weui-desktop-opr-btn_disabled':!item.view.isGoToDataPage}" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
              <mp-icon icon="rate" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
            </button>
          </mp-tooltip>
        </div>
      </template>
      <more-item
        show-tags
        is-appmsg
        :i="i"
        :idx="idx"
        :item="item"
        :info="info"
        :show-delete="hasdel"
        :has-close-recommend.sync="hasCloseRecommend"
        v-if="hasdel"
      ></more-item>
    </div>
  </div>

</div>
`},"./src/pages/modules/publish/tpl/video.tpl":function(E,v){E.exports=`<div class="weui-desktop-mass-media weui-desktop-mass-appmsg weui-desktop-mass-video" :class="{'weui-desktop-mass-media_del': (isVideoDeleted || isAuditRejectDel) && !fromPublishDialog }">
  <div class="weui-desktop-mass-appmsg__hd" :style="'background-image:url(\\'' + info.cover + '\\');'">
       <!--  <div class="video_icon">
        <mp-icon icon="videoPlay" :width="27" :height="27"></mp-icon>
        <div class="weui-desktop-mass-video__length">{{info.duration}}</div>
      </div> -->
      <div class="weui-desktop-appmsg__video-notice"><span class="weui-desktop-appmsg__video-duration">{{info.duration}}</span></div>

    </div>
    <!-- \u5386\u53F2\u89C6\u9891\u65E0\u6807\u9898\u4E0D\u7528\u8DF3\u8F6C -->
    <div class="weui-desktop-mass-appmsg__bd appmsg_publish_video_bd" v-if="fromPublishDialog || item.type!=4">
      <div class="weui-desktop-mass-appmsg__bd_container">
        <!--\u5220\u9664\u89C6\u9891\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1begin \u524D\u7AEF\u5F3A\u4FE1\u4EFBis_deleted\u548Cdelete_time\u5B57\u6BB5-->
        <mp-tooltip position="bottom-center" :delay="300" v-if="info.is_deleted && !info.is_cooling_article" class="weui-desktop-mass-appmsg__tips">
          <span v-if="info.deleteFormatTime" class="weui-desktop-mass-appmsg__tips_content">\u5220\u9664\u65F6\u95F4 {{info.deleteFormatTime}} <span v-if="info.delete_nickname">\u64CD\u4F5C\u4EBA {{info.delete_nickname}}</span></span>
          <!--\u52A0\u4E00\u5C42\u5220\u9664\u65F6\u95F4\u4E3A\u7A7A\u7684\u4FDD\u62A4-->
          <span v-else class="weui-desktop-mass-appmsg__tips_content">\u5DF2\u5220\u9664</span>
          <template v-if="!fromPublishDialog" slot="target">
            <a class="weui-desktop-mass-appmsg__title" :href="actualUrl || 'javascript:;'" target="_blank">
              <span v-if="keyword !== ''" v-html="info.highlight_title"></span>
              <span v-else v-html="info.title"></span>
              <b class="weui-desktop-key-tag" v-if="info.copyright_status == 11">\u539F\u521B</b>
              <b class="weui-desktop-key-tag" v-else-if="(info.copyright_status == 12 || info.copyright_status == 101 || info.copyright_status == 201 || info.copyright_status == 202)">\u8F6C\u8F7D</b>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </a>
          </template>
          <template v-else slot="target">
            <div class="weui-desktop-mass-appmsg__title">
              <span v-if="keyword !== ''" v-html="info.title"></span>
              <span v-else v-html="info.title"></span>
              <b class="weui-desktop-key-tag" v-if="info.copyright_status == 11">\u539F\u521B</b>
              <b class="weui-desktop-key-tag" v-else-if="(info.copyright_status == 12 || info.copyright_status == 101 || info.copyright_status == 201 || info.copyright_status == 202)">\u8F6C\u8F7D</b>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </div>
            <div class="album_appmsg_title" v-if="info.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
              <span v-for="item in info.appmsg_album_infos">#{{item.title}}  </span>
            </div>
          </template>
          </template>
        </mp-tooltip>
        <!--\u5220\u9664\u89C6\u9891\u6807\u9898\u5220\u9664\u65F6\u95F4\u6C14\u6CE1end-->
        <!--\u666E\u901A\u89C6\u9891\u6807\u9898begin-->
        <div v-else>
          <template v-if="!fromPublishDialog">
            <a class="weui-desktop-mass-appmsg__title" :href="actualUrl || 'javascript:;'" target="_blank">
              <span v-if="keyword !== ''" v-html="info.highlight_title"></span>
              <span v-else v-html="info.title"></span>
              <b class="weui-desktop-key-tag" v-if="info.import_to_finder_info && info.import_to_finder_info.import_to_finder == true">\u89C6\u9891\u53F7</b>
              <b class="weui-desktop-key-tag" v-if="info.copyright_status == 11">\u539F\u521B</b>
              <b class="weui-desktop-key-tag" v-else-if="(info.copyright_status == 12 || info.copyright_status == 101 || info.copyright_status == 201 || info.copyright_status == 202)">\u8F6C\u8F7D</b>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
            </a>
          </template>
          <template v-else>
            <div class="weui-desktop-mass-appmsg__title">
              <span v-if="keyword !== ''" v-html="info.title"></span>
              <span v-else v-html="info.title"></span>
              <b class="weui-desktop-key-tag" v-if="info.copyright_status == 11">\u539F\u521B</b>
              <b class="weui-desktop-key-tag" v-else-if="(info.copyright_status == 12 || info.copyright_status == 101 || info.copyright_status == 201 || info.copyright_status == 202)">\u8F6C\u8F7D</b>
              <b class="weui-desktop-key-tag not_recommend" v-if="canBeRecommend && hasCloseRecommend">\u5DF2\u5173\u95ED\u63A8\u8350</b>
              <b class="weui-desktop-mass-appmsg__title_delete" v-if="isVideoDeleted">\u5DF2\u5220\u9664</b>
              <mp-album-intro class="appmsg-pay-intro" v-if="info?.appmsg_album_infos?.length > 0 && isAlbum && !item.selected" :append-to-body="true" pos="up-left">
                <p slot="intro">
                  <p>\u5355\u7BC7\u5185\u5BB9\u4EC5\u80FD\u6536\u5F55\u4E8E\u4E00\u4E2A\u5408\u96C6\u4E2D\u3002</p>
                </p>
              </mp-album-intro>
            </div>
            <div class="album_appmsg_title" v-if="info.appmsg_album_infos && info.appmsg_album_infos.length > 0 && isAlbum">
              <span v-for="item in info.appmsg_album_infos">#{{item.title}}  </span>
            </div>
          </template>
        </div>
        <!--\u666E\u901A\u89C6\u9891\u6807\u9898end-->
        <num-item v-if="hasnum" :info="info" :i="i" :item="item" ></num-item>
      </div>
    </div>

    <div class="weui-desktop-mass-appmsg__ft" v-if="!fromPublishDialog">
      <div class="weui-desktop-mass-media__opr">
        <div v-if="info.import_to_finder_info && info.import_to_finder_info.import_to_finder == true" class="weui-desktop-mass-media__opr__meta">
          <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" content='\u89C6\u9891\u5DF2\u8F6C\u4E3A\u89C6\u9891\u53F7\uFF0C\u53EF\u524D\u5F80\u89C6\u9891\u53F7\u52A9\u624B\u67E5\u770B\u8BE6\u60C5' :delay="300">
              <button slot="target" @click="goToVideoSnap" class="re-edit_btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <span class="re-edit_wording">\u67E5\u770B\u8BE6\u60C5</span>
              </button>
            
          </mp-tooltip>
        </div>
        <!--\u8FD9\u91CC\u662F\u5220\u9664\u540E\u91CD\u65B0\u7F16\u8F91icon-->
        <div v-if="(info.is_deleted || info.is_cooling_article) && item.copy_appmsg_id"  class="weui-desktop-mass-media__opr__meta">
          <button slot="target" @click="reeditmsg" class="re-edit_btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
            <mp-icon class="re-edit_icon" icon="edit" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
            <span class="re-edit_wording">\u91CD\u65B0\u7F16\u8F91</span>
          </button>
        </div>
        <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E -->
        <template v-if="showToDataPageBtn">
          <div class="weui-desktop-mass-media__opr__meta">
            <mp-tooltip slot="target" class="weui-desktop-link" position="down-center" :content="item.view.dataPageWording" :delay="300">
              <button slot="target" @click="goToDataPage(info.appmsgid, info.itemidx, item.view.publishDate, item.view.isGoToDataPage)" :class="{'weui-desktop-opr-btn_disabled':!item.view.isGoToDataPage}" class="weui-desktop-icon20 weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary">
                <mp-icon icon="rate" :width="20" :height="20" color="var(--weuiDesktop_focusColor)"></mp-icon>
              </button>
            </mp-tooltip>
          </div>
        </template>
        <!-- \u7FA4\u53D1\u5217\u8868\u8DF3\u8F6C\u5355\u7BC7\u7FA4\u53D1\u6570\u636E end -->
        <template v-if="(canUsePublicTag === 1 || isMediaAccount || isInstitutionAccount) && (item.view.status === '\u5DF2\u7FA4\u53D1' || item.view.status === '\u5DF2\u53D1\u8868' || item.view.status === '\u5DF2\u53D1\u5E03') && hasdel && item.view.sourceType !== 2">
          <tag-item :info="info" :i="i" :item="item"></tag-item>
        </template>
        <!--<span class="weui-desktop-mass-media__opr__meta js_del" v-if="hasdel && item.view.status !=='\u7B49\u5019\u53D1\u9001' && item.view.status !== '\u89C6\u9891\u5BA1\u6838\u4E2D' && item.view.status !== '\u53D1\u9001\u4E2D' && item.view.status !== '\u5BA1\u6838\u4E2D' && item.view.status !== '\u53D1\u9001\u5931\u8D25'" >
          <del-item :i="i" :item="item" :idx="idx" :is-appmsg="item.type==9" :info="info" ></del-item>
        </span>-->
        <more-item :i="i" :item="item" :idx="idx" :is-appmsg="item.type==9" :info="info"
          v-if="!isVideoDeleted"
          :has-close-recommend.sync="hasCloseRecommend"
          :show-delete="hasdel && item.view.status !=='\u7B49\u5019\u53D1\u8868' && item.view.status !== '\u89C6\u9891\u5BA1\u6838\u4E2D' && item.view.status !== '\u53D1\u9001\u4E2D' && item.view.status !== '\u5BA1\u6838\u4E2D' && item.view.status !== '\u53D1\u9001\u5931\u8D25'"
          :show-tags="(canUsePublicTag === 1 || isMediaAccount || isInstitutionAccount) && (item.view.status === '\u5DF2\u7FA4\u53D1' || item.view.status === '\u5DF2\u53D1\u8868' || item.view.status === '\u5DF2\u53D1\u5E03' || item.view.status === '\u53D1\u5E03\u6210\u529F' || item.view.status === '\u53D1\u8868\u6210\u529F') && hasdel && item.view.sourceType !== 2 && !info.import_from_drama_info">
        </more-item>
      </div>
    </div>

</div>
`},"./src/pages/modules/search_autocomplete/search_autocomplete.js":function(E,v,l){function D(f){return R(f)||M(f)||V(f)||j()}function j(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function V(f,m){if(f){if("string"==typeof f)return H(f,m);var I={}.toString.call(f).slice(8,-1);return"Object"===I&&f.constructor&&(I=f.constructor.name),"Map"===I||"Set"===I?Array.from(f):"Arguments"===I||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(I)?H(f,m):void 0}}function M(f){if("undefined"!=typeof Symbol&&null!=f[Symbol.iterator]||null!=f["@@iterator"])return Array.from(f)}function R(f){if(Array.isArray(f))return H(f)}function H(f,m){(null==m||m>f.length)&&(m=f.length);for(var I=0,N=Array(m);I<m;I++)N[I]=f[I];return N}var B=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");l("./src/pages/modules/search_autocomplete/search_autocomplete.less");var F=l("./src/pages/modules/search_autocomplete/search_autocomplete.tpl");var q=l("./src/pages/modules/utils/string.js");B.component("mp-search-autocomplete",{template:F,model:{prop:"value",event:"input"},props:{placeholder:{type:String,default:""},value:{type:String,default:""},clear:{type:Boolean,default:false},extclass:{type:Array|String,default:""},associationWords:{type:Array,default:[]},maxSize:{type:Number,default:5}},data:function f(){return{internalValue:"",internalAssociations:[],currentAssociationIndex:-1,isCompositionStart:false,hideAssociation:true,pageMaxZIndex:this.getMaxZIndex()+1,maxListHeight:this.getMaxListHeight()+"px"}},watch:{value:function f(m){this.internalValue=m},associationWords:function f(m){var I=this;if(m.length>0){this.internalAssociations=m&&m.map(function(N){var J=N.indexOf(I.internalValue);if(J>-1){N=N.replaceAll(I.internalValue,"<em>".concat(q.htmlEncode(I.internalValue),"</em>"))}return N});this.hideAssociation=false}else{this.internalAssociations=[];this.hideAssociation=true}}},computed:{canShowAssociation:function f(){return!this.hideAssociation&&this.internalAssociations.length>0}},created:function f(){},mounted:function f(){document.body.addEventListener("click",this.onDocumentClick)},beforeDestroy:function f(){document.removeEventListener("click",this.onDocumentClick)},methods:{getMaxZIndex:function f(){return D(document.querySelectorAll("*")).reduce(function(m,I){return Math.max(m,+window.getComputedStyle(I).zIndex||0)},0)},getMaxListHeight:function f(){return this.maxSize*36+16},onFocus:function f(){if(this.internalValue){this.currentAssociationIndex=-1;this.$emit("fetch-associations",this.internalValue)}},onDocumentClick:function f(m){var I=this.$el;var N=this.$refs.associationList;if(N&&I){if(!I.contains(m.target)&&!N.contains(m.target)){this.hideAssociation=true}}},onInputChange:function f(m){if(this.isCompositionStart){return}this.$emit("input",m);this.$emit("fetch-associations",m)},onKeyup:function f(m){if(this.canShowAssociation){switch(m.key){case"ArrowDown":this.currentAssociationIndex=Math.min(this.internalAssociations.length-1,this.currentAssociationIndex+1);this.internalValue=this.currentAssociationIndex>=0?this.associationWords[this.currentAssociationIndex]:this.internalValue;break;case"ArrowUp":this.currentAssociationIndex=Math.max(-1,this.currentAssociationIndex-1);this.internalValue=this.currentAssociationIndex>=0?this.associationWords[this.currentAssociationIndex]:this.internalValue;break;default:break}}},onCompositionStart:function f(){this.isCompositionStart=true},onCompositionEnd:function f(){this.isCompositionStart=false;this.$emit("input",this.internalValue);this.$emit("fetch-associations",this.internalValue)},onAssociationMouseover:function f(m){this.currentAssociationIndex=m},onClickAssociation:function f(m){this.onSearch(this.associationWords[m],3)},onSearch:function f(m){var I=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;if(this.currentAssociationIndex>=0){I=3}this.$emit("input",m);this.$emit("search",{query:m,querySource:I,queryRank:this.currentAssociationIndex+1});this.hideAssociation=true},clearSearch:function f(){this.currentAssociationIndex=-1;this.hideAssociation=true;this.$emit("clear")}}})},"./src/pages/modules/search_autocomplete/search_autocomplete.less":function(E,v,l){"use strict";l.r(v)},"./src/pages/modules/search_autocomplete/search_autocomplete.tpl":function(E,v){E.exports=`<div :class="extclass">
  <mp-search
    ref="mpSearch"
    v-model="internalValue"
    :placeholder="placeholder"
    :clear="true"
    @focus="onFocus"
    @input="onInputChange"
    @keyup="onKeyup"
    @compositionstart="onCompositionStart"
    @compositionend="onCompositionEnd"
    @search="onSearch"
    @clear="clearSearch">
  </mp-search>
  <ul class="search-autocomplete_list" ref="associationList" v-if="canShowAssociation" :style="'z-index: ' + pageMaxZIndex + '; max-height: ' + maxListHeight + ';'">
    <li
      :class="['search-autocomplete_list__item', currentAssociationIndex === index ? 'current' : '']"
      @click="onClickAssociation(index)"
      @mouseover="onAssociationMouseover(index)"
      v-for="(associationWord, index) in internalAssociations"
      :key="index"
      v-html="associationWord">
    </li>
  </ul>
</div>`},"./src/pages/modules/upload/item.js":function(E,v,l){var D=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var j=l("./src/pages/modules/upload/item.tpl");D.component("mp-upload-item",{name:"mp-upload-item",template:j,props:{file:{type:Object,default:function V(){return{}}}},methods:{preview:function V(){this.$emit("preview",this.file)},remove:function V(){this.$emit("remove",this.file)}}})},"./src/pages/modules/upload/item.tpl":function(E,v){E.exports=`<li class="weui-desktop-upload__file weui-desktop-upload__file_image-holder" style="list-style-type:none; margin:0;">
  <div class="weui-desktop-image-holder__wrp">
    <template v-if="file.loading">
      <!-- \u8FDB\u5EA6\u6761 -->
      <span class="weui-desktop-upload__file__progress__wrp">
        <em class="weui-desktop-upload__file__progress" :style="{ width: file.progress + '%' }">{{ file.progress }}%</em>
      </span>
    </template>
    <template v-else>
      <!-- \u9519\u8BEF\u63D0\u793A -->
      <i class="weui-desktop-upload__file__msg" v-if="file.msg" v-html="file.msg"></i>
      <!-- \u56FE\u7247\uFF0C\u53EF\u70B9\u51FB\u67E5\u770B -->
      <i class="weui-desktop-image-holder__preview" v-else style="background-image: url('http://dayu.oa.com/avatars/zhikaimai/profile.jpg');" @click="preview"></i>
      <!-- \u5220\u9664\u6309\u94AE -->
      <span class="weui-desktop-image-holder__mask">
        <a v-if="!$slots.mask" href="javascript:;" @click="remove(file.id)">\u5220\u9664</a>
        <slot name="mask"></slot>
      </span>
    </template>
  </div>
  <!-- \u6807\u9898 -->
  <div class="weui-desktop-upload__file__title" v-if="file.name">{{file.name}}</div>
</li>
`},"./src/pages/modules/upload/raw_upload.js":function(E,v,l){function D(T){"@babel/helpers - typeof";return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},D(T)}function j(T,n){var h="undefined"!=typeof Symbol&&T[Symbol.iterator]||T["@@iterator"];if(!h){if(Array.isArray(T)||(h=V(T))||n&&T&&"number"==typeof T.length){h&&(T=h);var G=0,Q=function ne(){};return{s:Q,n:function ne(){return G>=T.length?{done:true}:{done:false,value:T[G++]}},e:function ne(te){throw te},f:Q}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var ee,X=true,oe=false;return{s:function ne(){h=h.call(T)},n:function ne(){var te=h.next();return X=te.done,te},e:function ne(te){oe=true,ee=te},f:function ne(){try{X||null==h.return||h.return()}finally{if(oe)throw ee}}}}function V(T,n){if(T){if("string"==typeof T)return M(T,n);var h={}.toString.call(T).slice(8,-1);return"Object"===h&&T.constructor&&(h=T.constructor.name),"Map"===h||"Set"===h?Array.from(T):"Arguments"===h||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(h)?M(T,n):void 0}}function M(T,n){(null==n||n>T.length)&&(n=T.length);for(var h=0,G=Array(n);h<n;h++)G[h]=T[h];return G}l("./src/3rd/jquery/jquery.2.1.4.js");l("./src/pages/modules/upload/upload.less");var R=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var H=l("./src/pages/modules/upload/upload.tpl");var B=l("./src/pages/modules/upload/webuploader.js");var F=l("./src/pages/modules/utils/str_util.js");var q=l("./src/pages/modules/utils/object.js");var f=l("./src/3rd/utils/emitter.js").default;var m=l("./src/pages/modules/utils/cgi.js");var I=l("./src/pages/questions/modules/utils.js"),N=I.getUrlParam;var J=window.$;var P=function T(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};var h=[];for(var G=0,Q=n.data.length;G<Q;G++){var ee=n.data[G];h.push(ee.id+"_"+ee.key+"_"+ee.len)}var X=new Image;X.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+h.join(";")+"&t="+Math.random()};var K={name:"mp-raw-upload",template:H,mixins:[f],props:{swf:{type:String,default:"",required:true},url:{type:String,default:"",required:true},isNotShowError:{type:Boolean,default:false},name:{type:String,default:""},required:{type:Boolean,default:false},multi:{type:Boolean,default:false},maxfilenum:{type:Number,default:20},minfilenum:{type:Number,default:0},maxsize:{type:Number,default:100*1024*1024},extensions:{type:String,default:"bmp,png,jpeg,jpg,gif"},mimetype:{type:String,default:"image/bmp, image/png, image/jpeg, image/jpg, image/gif"},showsize:{type:Boolean,default:true},filelist:{type:Array,default:function T(){return[]}},select:{type:Function},preview:{type:Function},previewmode:{type:String,default:"text"},previewparse:{type:Function,default:function T(n){return n}},extclass:{type:String,default:""},simple:{tyle:Boolean,default:false},dnd:{type:String,default:""},disableGlobalDnd:{type:Boolean,default:false},showFileItemMsg:{type:Boolean,default:true},uploadWording:{type:String,default:"\u4E0A\u4F20\u6587\u4EF6"},reUploadWording:{type:String,default:"\u91CD\u65B0\u4E0A\u4F20"}},data:function T(){var n={domID:"upload_"+Math.random(),uploader:null,files:{},fileCount:0,msg:"",internalValue:this.multi?[]:""};var h=0;var G=j(this.filelist),Q;try{for(G.s();!(Q=G.n()).done;){var ee=Q.value;h++;if(!ee.id||typeof ee.id!=="string"){continue}ee.name=ee.name||"\u6587\u4EF6"+h;n.files[ee.id]=ee;n.fileCount++}}catch(ne){G.e(ne)}finally{G.f()}var X=[];for(var oe in n.files){if(Object.prototype.hasOwnProperty.call(n.files,oe)){if(!!n.files[oe].id){X.push(n.files[oe].id)}}}if(!this.multi){X=X[0]||""}n.internalValue=X;return n},created:function T(){var n=this;this.APIs=Object.create(null,{validate:{value:function h(G,Q){n.validate(G,function(ee){Q({info:ee||"",name:n.name,value:n.internalValue,msg:n.msg})})}}})},mounted:function T(){this.initUploader()},destroyed:function T(){try{this.uploader.destroy()}catch(n){}this.uploader=null},computed:{uploaderOpt:function T(){var n={server:this.realUrl,swf:this.swf,auto:true,pick:{id:this.$refs.btn,multiple:this.multi},fileNumLimit:this.maxfilenum,threads:3,sendAsBinary:false,runtimeOrder:"html5,flash",compress:{width:1280,height:1e8,quality:90,afterCompressSizeLimit:10*1024*1024,compressSize:0,resizeSize:10*1024*1024,maxResolution:6e6,noCompressIfLarger:false,preserveHeaders:true},fileSizeLimit:100*1024*1024,imageSize:true,chunked:false,duplicate:true,accept:{extensions:this.extensions,mimeTypes:this.mimetype},fileSingleSizeLimit:this.maxsize,dnd:this.dnd,disableGlobalDnd:this.disableGlobalDnd};if(B.Uploader.support("html5")===false){n.compress.quality=70}if(this.realUrl.indexOf("cgi-bin/filetransfer?")>=0&&this.realUrl.indexOf("action=upload_material")>0){n.compress.afterCompressSizeLimit=10*1024*1024;n.compress.resizeSize=10*1024*1024}return n},realUrl:function T(){return this.url}},methods:{initUploader:function T(){var n=null;var h=this.uploaderOpt;try{n=B.create(h);this.uploader=n;n.on("beforeFileQueued",this._beforeFileQueued);n.on("fileQueued",this._fileQueued);n.on("fileDequeued",this._fileDequeued);n.on("uploadProgress",this._uploadProgress);n.on("uploadStart",this._uploadStart);n.on("uploadSuccess",this._uploadSuccess);n.on("uploadFinished",this._uploadFinished);n.on("uploadError",this._uploadError);n.on("error",this._error);this.$emit("uploaderfinish")}catch(G){if(!n){return}}},tryInit:function T(){if(!this.isHidden(this.$refs.btn)){this.initUploader();return}var n=this;setTimeout(function(){n.tryInit()},1e3)},updateInternalValue:function T(){var n=[];for(var h in this.files){if(Object.prototype.hasOwnProperty.call(this.files,h)){if(!!this.files[h].response){n.push(this.files[h].response)}}}if(!this.multi){n=n[0]||""}this.internalValue=n},addFile:function T(n){if(!!this.multi){if(!this.files[n.id]){this.fileCount++}this.files[n.id]=n}else{this.fileCount=1;this.files={};this.files[n.id]=n}this.updateInternalValue();this.$forceUpdate()},isHidden:function T(n){return!!n&&n.offsetWidth<=0&&n.offsetHeight<=0},cancel:function T(n){this.uploader.cancelFile(n)},remove:function T(n){var h=n==="REMOVE_ALL";if(h){this.files={};this.fileCount=0;this.msg="";this.$emit("remove","REMOVE_ALL",{})}else{var G=this.files[n];if(n===this.msgId)this.msg="";this.$delete(this.files,n);this.fileCount--;this.$emit("remove",G,this.files)}this.updateInternalValue()},onCancel:function T(n){this.$emit("cancel",n)},onProgress:function T(n,h){this.$emit("progress",n,h)},onComplete:function T(n,h){this.$emit("complete",n,h);this.dispatch("mp-form-item","mp-form-change",{value:n})},onAllComplete:function T(n,h){this.$emit("allcomplete",n,h)},onError:function T(n,h){if(n)this.msgId=n.id;this.$emit("error",n,h);this.dispatch("mp-form-item","mp-form-change",{value:n})},validate:function T(n,h){if(this.required){if(this.multi&&Object.keys(this.files).length===0||!this.multi&&Object.keys(this.files).length===0){this.msg="\u8BF7\u4E0A\u4F20\u6587\u4EF6";return h&&h("required")}}if(this.minfilenum>0&&this.multi&&Object.keys(this.files).length<this.minfilenum){this.msg="\u81F3\u5C11\u4E0A\u4F20".concat(this.minfilenum,"\u4E2A\u6587\u4EF6");return h&&h("minfilenum:"+this.minfilenum)}if(this.maxfilenum>0&&this.multi&&Object.keys(this.files).length>this.maxfilenum){this.msg="\u6700\u591A\u53EA\u80FD\u4E0A\u4F20".concat(this.maxfilenum,"\u4E2A\u6587\u4EF6");return h&&h("maxfilenum:"+this.maxfilenum)}for(var G in this.files){if(Object.prototype.hasOwnProperty.call(this.files,G)){var Q=this.files[G];if(Q.error){this.msg="\u4E0A\u4F20\u5931\u8D25";return h&&h(Q.msg)}}}this.msg&&(this.msg="");return n&&n()},_beforeFileQueued:function T(n){var h=false;if(this.realUrl.indexOf("cgi-bin/filetransfer?")>=0&&this.realUrl.indexOf("action=upload_material")>0){h=true}var G={id:n.id,name:n.name,size:n.size,sizeTxt:B.formatSize(n.size,0),width:n.width,height:n.height,extension:n.ext,mimeType:n.type,loading:true,progress:0,startTime:0,endTime:0,error:false,msg:""};var Q=null;if(B.Uploader.support("html5")){Q={id:"122443",key:"22",len:"1"}}else if(B.Uploader.support("flash")){Q={id:"122443",key:"23",len:"1"}}if(h){P({data:[{id:"122443",key:"1",len:"1"},{id:"122443",key:"0",len:"1"},Q]})}if(!!this.select){return!(this.select(G)===false)}return true},_fileQueued:function T(n){var h={id:n.id,name:n.name,size:n.size,sizeTxt:B.formatSize(n.size),width:n.width,height:n.height,extension:n.ext,mimeType:n.type,loading:true,progress:0,startTime:0,endTime:0,error:false,msg:""};this.addFile(h);this.$emit("addfile",n,h)},_fileDequeued:function T(n){if(this.files[n.id]){var h=this.files[n.id];delete this.files[n.id];this.fileCount--;this.updateInternalValue();this.onCancel(h)}this.$forceUpdate()},_uploadProgress:function T(n,h){if(this.files[n.id]){this.files[n.id].progress=h*100;this.files[n.id].loading=true;this.updateInternalValue();this.onProgress(this.files[n.id],h)}this.$forceUpdate()},_uploadStart:function T(n){this.msg="";if(this.files[n.id]){this.files[n.id].startTime=+new Date;this.updateInternalValue()}this.$forceUpdate()},_uploadSuccess:function T(n,h,G){if(this.files[n.id]){this.files[n.id].endTime=+new Date;this.files[n.id].loading=false;this.files[n.id].response=h;this.updateInternalValue();if(this.url==="uploadOlnyRecentFile"){this.onlyUploadRecentImg(n)}else{this.onComplete(this.files[n.id],h,G)}}this.$forceUpdate()},_uploadFinished:function T(){var n=0;var h=0;for(var G in this.files){if(Object.prototype.hasOwnProperty.call(this.files,G)){var Q=this.files[G];if(Q.error){h++}else{n++}}}this.onAllComplete(n,h);this.$forceUpdate()},_uploadError:function T(n,h){this._errHandler(h,n);if(this.files[n.id]){this.files[n.id].endTime=+new Date;this.files[n.id].loading=false}this.$forceUpdate()},_error:function T(n,h){var G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};var Q;if(D(h)==="object"){G=h}else{Q=B.formatSize(h,"0")}this._errHandler(n,G,h,Q);this.$forceUpdate()},_errHandler:function T(n,h,G,Q){var ee="";switch(n){case"server":te="\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002";break;case"abort":te="\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002";break;case"timeout":te="\u4E0A\u4F20\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5\u3002";break;case void 0:te="\u4E0A\u4F20\u56FE\u7247\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5\u3002";break;case"Q_EXCEED_NUM_LIMIT":te="\u4E00\u6B21\u6700\u591A\u53EA\u80FD\u4E0A\u4F20".concat(G,"\u4E2A\u6587\u4EF6\u3002");break;case"F_EXCEED_SIZE":te="\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7".concat(Q,"\u3002");break;case"F_EXCEED_COMPRESS_SIZE":te="\u56FE\u7247\u538B\u7F29\u540E\u8FC7\u5927\uFF0C\u8BF7\u7F29\u5C0F\u56FE\u7247\u5C3A\u5BF8\u518D\u8BD5\u3002";try{if(this.realUrl.indexOf("cgi-bin/filetransfer?")>=0&&this.realUrl.indexOf("action=upload_material")>0){var X=2*1024*1024;var oe=5*1024*1024;var ne=[];if(h&&h.size>X){ne.push({id:"122443",key:"3",len:"1"})}if(h&&h.size>X&&h.size<oe){ne.push({id:"122443",key:"4",len:"1"})}if(ne.length>0){P({data:ne})}}}catch(fe){}break;case"Q_TYPE_DENIED":var te="";if(h.size===0){te="\u8BF7\u52FF\u4E0A\u4F20\u7A7A\u6587\u4EF6"}else if(this.url==="uploadOlnyRecentFile"){te="\u7559\u8A00\u4E0D\u652F\u6301\u6DFB\u52A0\u52A8\u56FE"}else{te="\u6587\u4EF6\u5FC5\u987B\u4E3A\u4EE5\u4E0B\u683C\u5F0F\uFF1A".concat(this.extensions).replace(/,/g,", ")}if(!this.files[h.id]){this.$parent.$tipsErr(te||"\u4E0A\u4F20\u5931\u8D25")}break;default:te="\u4E0A\u4F20\u5931\u8D25\u3002";break}this.msg=ee;if(this.files[h.id]){this.files[h.id].error=true;this.files[h.id].msg=ee;this.updateInternalValue();this.onError(this.files[h.id],ee)}},controllChoiceFile:function T(){if(this.fileCount>=this.maxfilenum){J(".js_upload_btn_container").find("input").attr("type","")}else{J(".js_upload_btn_container").find("input").attr("type","file")}},openFileSelectWin:function T(){B.openFileSelectWin()},onlyUploadRecentImg:function T(n){var h=this;var G=function ee(X){m.post({url:"/cgi-bin/modifyfile?oper=updaterecent&fileid=".concat(X.file_id,"&seq=").concat(wx&&wx.getSeq())})};var Q=function ee(X){var oe=N("token");var ne=N("lang");var te="/cgi-bin/uploadimg2cdn?lang="+ne+"&token="+oe+"&t="+Math.random()+"&watermark_free=1";var fe=new FormData;fe.append("id",X.id);fe.append("name",X.name);fe.append("type",X.type);fe.append("lastModifiedDate",new Date);fe.append("size",X.size);fe.append("upfile",X.source.source);fetch(te,{method:"POST",body:fe}).then(function(ue){return ue.json()}).then(function(ue){h.onComplete(X,ue);G(ue)})};Q(n)}}};var se=q.clone(K);(window.Vue||R).component("mp-raw-upload",K);E.exports={"mp-raw-upload":se}},"./src/pages/modules/upload/upload.js":function(E,v,l){var D=l("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var j=l("./src/pages/modules/utils/url.js");var V=l("./src/pages/modules/utils/object.js");var M=l("./src/pages/modules/upload/raw_upload.js");var R=l("./src/pages/modules/utils/cgi.js");var H=l("./src/pages/modules/upload/utils.js"),B=H.UrlMap;var F=V.clone(M["mp-raw-upload"]);F.name="mp-upload";F.props.swf={type:String,required:false,default:window.wx.commonData.path.webuploader};F.props.url={type:String,required:true,default:"uploadTmpFile"};F.props.query={type:Object,required:false,default:function q(){return{}}};F.props.simple={type:Boolean,default:false};F.props.previewtype={type:String,default:"tmp"};F.props.preview={type:Function,default:function q(f){var m=f.mediaId||f.response||"";var I="";var N="&ticket_id="+window.wx.commonData.data.user_name+"&ticket="+window.wx.commonData.data.ticket+"&id="+m;switch(this.previewtype){case"bizmedia":I="/cgi-bin/filetransfer?action=bizmedia"+N;break;case"multimedia":I="/cgi-bin/filetransfer?action=multimedia"+N;break;case"cdn":I=m;break;case"tmp":default:I="/cgi-bin/filetransfer?action=preview"+N;break}if(I){window.openUrl(I,{},true)}}};F.props.dnd={type:String,default:""};if(!F.watch)F.watch={};F.watch.query=function q(){this.initUploader()};F.computed.realUrl=function q(){var f=this.url;if(B[this.url]){f=B[this.url]}var m=window.wx.commonData.data;f+=(f.indexOf("?")>0?"&":"?")+"ticket_id="+m.user_name+"&ticket="+m.ticket+"&svr_time="+m.time;if(this.query){var I=[];for(var N in this.query){if(Object.prototype.hasOwnProperty.call(this.query,N)){I.push(encodeURIComponent(N)+"="+encodeURIComponent(this.query[N]))}}f+="&"+I.join("&")}f=j.fullUrl(f);return f};F.methods.updateInternalValue=function q(){var f=[];for(var m in this.files){if(Object.prototype.hasOwnProperty.call(this.files,m)){if(!!this.files[m].mediaId){f.push(this.files[m].mediaId)}}}if(!this.multi){f=f[0]||""}this.internalValue=f;this.$emit("change",this.files);this.$parent.$emit("mp-form-change")};F.methods.onComplete=function q(f,m){var I=this;var N=function K(se){if(I.files[f.id]){I.files[f.id].error=true;I.files[f.id].msg=se;I.updateInternalValue()}else{I.msg=se}I.$emit("error",f,se,I.files)};if(!m||!m.base_resp){N("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u91CD\u8BD5\u3002");return}if(m.base_resp.ret===0){if(this.files[f.id]){this.files[f.id].mediaId=m.content||"";this.updateInternalValue()}f.mediaId=m.content||"";if(this.url==="uploadImageLibFile"){R.post({url:"/cgi-bin/modifyfile?oper=updaterecent&fileid=".concat(m.content,"&seq=").concat(wx&&wx.getSeq())})}this.$emit("complete",f,m,this.files);return}var J="";switch(m.base_resp.ret){case 200002:J="\u53C2\u6570\u4E0D\u6B63\u786E\u3002";break;case 200003:J="\u767B\u5F55\u8D85\u65F6\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002";break;case 200040:J="\u767B\u5F55\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55\u3002";break;case-18:case 200018:J="\u9875\u9762\u505C\u7559\u65F6\u95F4\u8FC7\u4E45\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u3002";break;case-20:case 200020:J="\u65E0\u6CD5\u89E3\u91CA\u8BE5\u56FE\u7247\uFF0C\u8BF7\u4F7F\u7528\u53E6\u4E00\u56FE\u7247\u6216\u622A\u56FE\u53E6\u5B58\u3002";break;case-13:case 200013:J="\u4E0A\u4F20\u6587\u4EF6\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002";break;case-10:case 200010:J="\u4E0A\u4F20\u6587\u4EF6\u8FC7\u5927\u3002";break;case-22:case 200022:J="\u4E0A\u4F20\u97F3\u9891\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC760\u79D2\u3002";break;case-39:case 200039:J="\u4E0A\u4F20\u56FE\u7247\u9AD8\u5EA6\uFF08\u50CF\u7D20\uFF09\u4E0E\u5BBD\u5EA6\uFF08\u50CF\u7D20\uFF09\u7684\u4E58\u79EF\u4E0D\u80FD\u8D85\u8FC7600\u4E07\u3002";break;case 220001:J='"\u7D20\u6750\u7BA1\u7406"\u4E2D\u7684\u5B58\u50A8\u6570\u91CF\u5DF2\u8FBE\u5230\u4E0A\u9650\uFF0C\u8BF7\u5220\u9664\u540E\u518D\u64CD\u4F5C\u3002';break;case 220002:J="\u4F60\u7684\u56FE\u7247\u5E93\u5DF2\u8FBE\u5230\u5B58\u50A8\u4E0A\u9650\uFF0C\u8BF7\u8FDB\u884C\u6E05\u7406\u3002";break;case 200077:J="\u56FE\u7247\u5E27\u6570\u8D85\u8FC7300\u5E27\uFF0C\u4E0A\u4F20\u5931\u8D25";break;case 220003:J="\u56FE\u7247\u7684\u9AD8\u5EA6\u3001\u5BBD\u5EA6\u548C\u5E27\u6570\u7684\u4E58\u79EF\u4E0D\u80FD\u8D85\u8FC72\u4EBF";break;case 220004:J="\u56FE\u7247\u7684\u9AD8\u5EA6\u3001\u5BBD\u5EA6\u6216\u5E27\u6570\u8FC7\u9AD8\uFF0C\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u538B\u7F29\u540E\u91CD\u8BD5";break;default:var P=R.handleRet(m,{showMsg:false,msg:"\u4E0A\u4F20\u6587\u4EF6\u53D1\u9001\u51FA\u9519\uFF0C\u8BF7\u5237\u65B0\u9875\u9762\u540E\u91CD\u8BD5\u3002",id:"69271",key:"38",url:this.realUrl,ret:m.base_resp.ret});J=P.msg;break}N(J)};(window.Vue||D).component("mp-upload",F)},"./src/pages/modules/upload/upload.less":function(E,v,l){"use strict";l.r(v)},"./src/pages/modules/upload/upload.tpl":function(E,v){E.exports=`<div :class="['weui-desktop-upload', extclass]">
  <div class="weui-desktop-upload__tips" v-if="$slots.tips && $slots.tips.length > 0">
    <slot name="tips"></slot>
  </div>
  <!-- \u4E0A\u4F20\u6309\u94AE -->
  <div class="js_upload_btn_container weui-desktop-upload-input__wrp" @click="controllChoiceFile">
    <template v-if="$slots.button">
      <span class="weui-desktop-upload__btn__wrp" ref="btn" :id="domID">
        <slot name="button"></slot>
      </span>
    </template>
    <template v-else>
      <div v-show="multi == true && fileCount >= maxfilenum" class="weui-desktop-btn weui-desktop-btn_default weui-desktop-btn_disabled">
        <span>{{ uploadWording }}</span>
      </div>
      <a v-show="multi != true || fileCount < maxfilenum" href="javascript:;" class="weui-desktop-btn weui-desktop-btn_default single_upload_btn_container" ref="btn" :id="domID">
        <span v-if="fileCount == 0 || multi == true">{{ uploadWording }}</span>
        <span v-if="fileCount != 0 && multi == false">{{ reUploadWording }}</span>
      </a>
    </template>
  </div>
  
  <!-- simple\u6A21\u5F0F\u4E0B\u4E0D\u5C55\u793A -->
  <p v-if="msg && !simple && !isNotShowError" v-html="msg" class="weui-desktop-form__msg weui-desktop-form__msg_warn">
    <!-- \u6574\u4F53\u7684\u9519\u8BEF\u63D0\u793A -->
  </p>
  <p class="weui-desktop-upload__file__msg" v-if="$slots.message">
    <slot name="message"></slot>
  </p>
  <ul class="weui-desktop-upload__files" v-if="fileCount > 0 && !simple && showFileItemMsg">
    <li class="weui-desktop-upload__file weui-desktop-upload__file_uploading" v-for="(file, id) in files" :key="file.id">
      <span class="weui-desktop-upload__file__info__area">
        <strong v-if="previewmode === 'text'" class="weui-desktop-upload__file__title">{{ previewparse(file.name) }}</strong>
        <img v-else class="weui-desktop-upload__file__img" :src="previewparse(file.mediaId)">
        <!-- if \u914D\u7F6E\u9700\u8981\u663E\u793A\u6587\u4EF6\u5927\u5C0F -->
        <i v-if="showsize" class="weui-desktop-upload__file__size">{{ file.sizeTxt }}</i>
        <!-- end if \u914D\u7F6E\u9700\u8981\u663E\u793A\u6587\u4EF6\u5927\u5C0F -->
        <!-- if \u4E0A\u4F20\u4E2D -->
        <div class="weui-desktop-upload__file__progress__area" v-show="file.loading && file.progress < 100">
          <span class="weui-desktop-upload__file__progress__wrp">
            <em class="weui-desktop-upload__file__progress" :style="{ width: file.progress + '%' }">{{ file.progress }}%</em>
          </span>
          <a href="javascript:;" class="weui-desktop-link weui-desktop-upload__file__cancel" v-show="file.loading" @click="cancel(file.id)">\u53D6\u6D88</a>
        </div>
        <!-- end if \u4E0A\u4F20\u4E2D -->
        <!-- if \u4E0A\u4F20\u524D\u62A5\u9519or\u4E0A\u4F20\u5B8C\u6210or\u4E0A\u4F20\u5931\u8D25 -->
        <span class="weui-desktop-upload__complete__opr" v-show="!file.loading">
          <a href="javascript:;" class="weui-desktop-link" @click="preview(file)" v-if="!!preview && !file.error && !file.token">\u67E5\u770B</a>
          <a href="javascript:;" class="weui-desktop-link" @click="remove(file.id)">\u5220\u9664</a>
        </span>
        <p class="wei_info" v-if="file.token">
          \u6765\u6E90\u4E8E\u5DF2\u6709\u8D44\u8D28
          <!-- \uFF1Flogo -->
          <mp-popover position="up-left" trigger="hover" :width="330" style="margin-left: 5px;">
              <div slot="content">
                \u8BE5\u8D44\u8D28\u6765\u6E90\u4E8E\u5728\u5E73\u53F0\u5DF2\u4E0A\u4F20\u8FC7\u7684\u76F8\u5E94\u8D44\u8D28\u6587\u4EF6
              </div>
              <i class="icon_msg_mini ask" slot="target"></i>
          </mp-popover> 
        </p>

        <!-- end if \u4E0A\u4F20\u524D\u62A5\u9519or\u4E0A\u4F20\u5B8C\u6210or\u4E0A\u4F20\u5931\u8D25 -->
        <!-- if \u4E0A\u4F20\u524D\u62A5\u9519or\u4E0A\u4F20\u5931\u8D25 -->
        <i class="weui-desktop-upload__file__msg" v-if="!!file.msg && !isNotShowError" v-html="file.msg"></i>
        <!-- end if \u4E0A\u4F20\u524D\u62A5\u9519or\u4E0A\u4F20\u5931\u8D25 -->
      </span>
    </li>
  </ul>
</div>
`},"./src/pages/modules/upload/utils.js":function(E,v){var l={uploadBizFile:"/cgi-bin/filetransfer?action=upload_material&f=json",uploadTmpFile:"/cgi-bin/filetransfer?action=preview&f=json",uploadCdnFile:"/cgi-bin/filetransfer?action=upload_cdn&f=json",uploadShopFile:"/merchant/goodsimage?action=uploadimage",uploadShopUnsaveFile:"/merchant/goodsimage?action=uploadimage&save=0",uploadVideoCdnFile:"/cgi-bin/filetransfer?action=upload_video_cdn&f=json",uploadPoiFile:"/misc/setlocation?action=upload",mediaFile:"/cgi-bin/filetransfer?action=bizmedia",uploadCdnFileFromAd:"/cgi-bin/filetransfer?action=upload_cdn_check_size&f=json",uploadImageLibFile:"/cgi-bin/filetransfer?action=upload_material&f=json",uploadCdnFileWithCheck:"/cgi-bin/filetransfer?action=upload_cdn_check_range&f=json",uploadTmpFileWithCheck:"/cgi-bin/filetransfer?action=preview_check_range&f=json",uploadOlnyRecentFile:"/cgi-bin/filetransfer?action=preview_check_range&f=json"};var D=function V(M,R){if(!R||!M){console.error("filename or dataURL is empty")}var H=M.split(",");var B=H[0].match(/:(.*?);/)[1];var F=atob(H[1]);var q=F.length;var f=new Uint8Array(q);while(q--){f[q]=F.charCodeAt(q)}return new File([f],R,{type:B})};var j=function V(M,R){if(!M||!R){console.error("url or file is empty")}if(R instanceof Array){var H=R.map(function(B){return j(M,B)});return Promise.all(H)}return new Promise(function(B,F){if(l[M]){M=l[M]}var q=window.wx.commonData.data;M+="&ticket_id="+q.user_name+"&ticket="+q.ticket+"&svr_time="+q.time;var f=new XMLHttpRequest;var m=new FormData;if(R instanceof Uint8Array){var I=new Blob([R.buffer]);R=new File([I],"".concat(Date.now(),".jpeg"),{type:"image/jpeg"})}m.append("file",R);f.open("POST",M,true);f.send(m);f.onreadystatechange=function(){if(f.readyState===4){if(f.status===200){var N=JSON.parse(f.responseText);B(N)}else{F(f.status)}}}})};E.exports={UrlMap:l,dataURLtoFile:D,uploadFile:j}},"./src/pages/modules/upload/webuploader.js":function(E,v,l){var D=l("./src/3rd/webuploader/base.js");l("./src/3rd/webuploader/widgets/filepicker.js");l("./src/3rd/webuploader/widgets/queue.js");l("./src/3rd/webuploader/widgets/runtime.js");l("./src/3rd/webuploader/widgets/upload.js");l("./src/3rd/webuploader/widgets/validator.js");l("./src/3rd/webuploader/widgets/image.js");l("./src/3rd/webuploader/widgets/filednd.js");l("./src/3rd/webuploader/runtime/html5/blob.js");var j=l("./src/3rd/webuploader/runtime/html5/filepicker.js");l("./src/3rd/webuploader/runtime/html5/imagemeta/exif.js");l("./src/3rd/webuploader/runtime/html5/transport.js");l("./src/3rd/webuploader/runtime/html5/image.js");l("./src/3rd/webuploader/runtime/html5/dnd.js");l("./src/3rd/webuploader/runtime/flash/filepicker.js");l("./src/3rd/webuploader/runtime/flash/transport.js");l("./src/3rd/webuploader/runtime/flash/blob.js");l("./src/3rd/webuploader/runtime/flash/image.js");l("./src/3rd/webuploader/lib/dnd.js");D.openFileSelectWin=j.prototype.openFileSelectWin;E.exports=D},"./src/pages/modules/utils/string.js":function(E,v){function l(D,j){var V=["&","&amp;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;"];var M=["&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&amp;","&","&#60;","<","&#62;",">"];var R;if(j===false){R=M}else{R=V}var H=D;for(var B=0;B<R.length;B+=2){H=H.replace(new RegExp(R[B],"g"),R[1+B])}return H}E.exports={https2http:function D(j){return j.replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/")},http2https:function D(j){return j.replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qpic.cn/").replace(/http(s)?:\/\/mmbiz\.qlogo\.cn\//g,"https://mmbiz.qpic.cn/")},nogif:function D(j){return j.indexOf("wx_fmt=gif")>-1||j.indexOf("/mmbiz_gif/")>-1?j.replace("/0?","/s640?").replace("wx_fmt=gif",""):j.toString()},htmlEncode:function D(j){return l(j,true)},htmlDecode:function D(j){return l(j,false)},capitalize:function D(j){return j.charAt(0).toUpperCase()+j.slice(1)}}}}]);
