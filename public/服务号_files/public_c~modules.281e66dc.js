(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/modules~advanced/menusetting/menusetting~advanced/menusetting4Web1~album/edit/edit~complain/public_c~modules"],{"./src/pages/modules/publish/publish_common/xss_filter.js":function(b,S,u){var x=u("./src/pages/modules/utils/string.js");function P(l){if(/<em class=\"highlight\">/g.test(l)){return l.replace(/<em class=\"highlight\">/g,"{{s{em}}}").replace(/<\/em>/g,"{{e{em}}}")}if(/<em>/g.test(l)){return l.replace(/<em>/g,"__s{em}__").replace(/<\/em>/g,"__e{em}__")}return l}function D(l){if(/{{s{em}}}/g.test(l)){return l.replace(/{{s{em}}}/g,'<em class="highlight">').replace(/{{e{em}}}/g,"</em>")}if(/__s{em}__/g.test(l)){return l.replace(/__s{em}__/g,"<em>").replace(/__e{em}__/g,"</em>")}return l}function k(l){l=P(l);l=x.htmlEncode(l,true);l=D(l);return l}function N(l,s){if(Array.isArray(s)!==true)return false;var c=null;if(typeof l==="string"){try{c=JSON.parse(l)}catch(f){}}else{c=l}try{s.forEach(function(f){if(Array.isArray(c)===true){c.forEach(function(T){if(typeof T[f]==="undefined"){return}T[f]=k(T[f]);T["isXssEncoded"]=true})}else{if(typeof c[f]==="undefined"){return}c[f]=k(c[f]);c["isXssEncoded"]=true}})}catch(f){}return c}b.exports={resloveContentXss:N}},"./src/pages/modules/publish/publish_dialog/publish_dialog.js":function(b,S,u){var x=u("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var P=u("./src/pages/modules/publish/publish_dialog/publish_dialog.tpl");var D=u("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");var k=u("./src/pages/modules/cardticket/parse_data.js");var N=u("./src/pages/modules/publish/publish_common/xss_filter.js"),l=N.resloveContentXss;var s=u("./src/3rd/editor/common/monitor.js");u("./src/pages/modules/media2/appmsg/appmsg_publish_card.js");u("./src/pages/modules/publish/publish_list_view/publish_list_view.js");u("./src/pages/modules/publish/publish_dialog/publish_dialog.less");var c=u("./src/pages/modules/publish/tpl/publish_tpl.js"),f=c.getStatus;var T=u("../../packages/mmbizweb-web2-common/utils/common.js"),E=T.getMultiMsgBanWhitelistTypes;var z=8;var C=E();x.component("mp-publish-dialog",{template:P,model:{prop:"value",event:"input"},props:{value:{type:Boolean,default:false},dataView:{type:String,default:"list"},isFromSelectMsg:{type:Boolean,default:false},showTwoDataView:{type:Boolean,default:false},maxSelectNumber:{type:Number,default:3},maxMsgLength:{type:Number,default:8},freePublishType:{type:String,default:"1_102_103",validator:function o(e){return e==="1"||e==="1_102"||e==="1_103"||e==="1_102_103"}},showType:{type:[String,Number,Array],default:"",validator:function o(e){if(Array.isArray(e)){return e.every(function(t){return[0,5,7,8,10].indexOf(t)!==-1})}return e===""||e===0||e===5||e===7||e===8}},isAlbum:{type:Boolean,default:false},isPayAlbum:{type:Boolean,default:false},payAlbumData:{type:Object,default:function o(){return{}}},selectedAppmsg:{type:Array,default:function o(){return[]}},isMultiBan:{type:Boolean,default:false}},data:function o(){var e=this.dataView;var t=this.value;var a=new Map([[0,"101_".concat(this.freePublishType)],[1,"101"],[2,this.freePublishType]]);if(this.isFromSelectMsg){if(this.dataView==="card"){s.setSum("69271","96","1")}else if(this.dataView==="list"){s.setSum("69271","97","1")}s.send()}var i=window.wx.commonData.acl.base_acl.can_use_new_publish===1;return{canUseNewPublish:i,dialogHeight:window.innerHeight-64*2,contentInnerHeight:window.innerHeight-64*2-290,selectedList:[],currentList:[],showList:[],begin:0,count:10,type:0,sendMap:a,dialogShow:t,query:"",lastPage:1,currentQuery:"",totalCount:0,masssendCount:0,publishCount:0,currentCount:[0,0,0],view:e,loading:false,showSelected:false}},computed:{getMediaCol:function o(){return 2},dialogTitle:function o(){var e=Array.isArray(this.showType)?this.showType.sort().join("_"):this.showType;switch(e){case"10_8":return"\u9009\u62E9\u5DF2\u6709\u56FE\u6587";default:return"\u9009\u62E9\u5DF2\u6709\u5185\u5BB9"}}},watch:{showSelected:function o(e){if(e){this.showList=this.formatShowList(this.selectedList.filter(function(t,a){return a>=0&&a<10}));this.resetPagiation()}else{this.showList=this.formatShowList(this.currentList.map(function(t){return t}));this.resetPagiation(this.lastPage)}},currentQuery:function o(e){if(e===""&&this.query!==""){this.search("")}}},mounted:function o(){if(this.selectedAppmsg.length>this.maxSelectNumber){throw new Error("\u53C2\u6570\u4F20\u9012\u77DB\u76FE")}for(var e=0;e<this.selectedAppmsg.length;e++){var t=Object.assign({},this.selectedAppmsg[e]);t.publish_info={};t.selected=true;if(typeof t.update_time==="string"){t.update_time=this.parseStringNumberToInt(t.update_time,10)}this.prepareAppmsgInfo(t.appmsg_info,t);this.selectedList.push(t)}this.getData(0,10)},methods:{changeView:function o(e){this.view=e;this.dataView=e;this.selectedList=[];var t=this.$refs.pagiation.currentPage;this.lastPage=t;this.getData((t-1)*10,10,this.type,this.query);if(this.isFromSelectMsg){localStorage.setItem("publish_dialog",this.view);if(this.view==="card"){s.setSum("69271","100","1")}else if(this.view==="list"){s.setSum("69271","101","1")}s.send()}},getMsgTypeName:function o(e){var t="";switch(e){case 0:case 9:case 11:t="\u6587\u7AE0";break;case 5:t="\u89C6\u9891";break;case 8:t="\u56FE\u6587";break;case 7:t="\u97F3\u9891";break;case 10:t="\u6587\u5B57";break;default:t=""}return t},formatShowList:function o(e){var t=this;var a=e.map(function(i){if(t.isFromSelectMsg&&t.view==="card"){if(i.multi_item.length>t.maxMsgLength){i.canselect=false}else{i.canselect=true}if(i.multi_item&&(i.multi_item[0].share_page_type===10||i.multi_item[0].is_rumor_refutation||i.multi_item[0].rumor_refutation&&i.multi_item[0].rumor_refutation.is_rumor_refutation)){i.canselect=false}if(i.multi_item&&i.multi_item.find(function(d){return C.includes(d.share_page_type*1)})&&(t.isMultiBan||(C===null||C===void 0?void 0:C.length)>0&&i.multi_item.length>1)){i.canselect=false;var p=[];var m={};i.multi_item.forEach(function(d){if(C.includes(d.share_page_type*1)&&!m[d.share_page_type*1]){m[d.share_page_type*1]=true;p.push(t.getMsgTypeName(d.share_page_type*1))}});var _=p.join("\u3001");i.unselectTips="".concat(_,"\u5185\u5BB9\u4E0D\u652F\u6301\u5408\u5E76\u53D1\u8868")}}else{i.canselect=i.selected||t.selectedList.length<t.maxSelectNumber||t.maxSelectNumber===1;if(t.payAlbumData.isPayAlbum&&i.appmsg_info){var w;var v=i.appmsg_info[0].appmsg_album_infos;var h=false;var y=false;if(v&&v.length>0){for(var g=0;g<v.length;g++){var A=v[g];y=A.del_flag===void 0?false:A.del_flag;if(+A.id===t.payAlbumData.currentId){h=true}}}i.payDisable=h?false:!!i.appmsg_info[0].is_pay_subscribe||i.appmsg_info[0].ban_flag===1;i.isAddPayAlbum=(w=i.appmsg_info[0].pay_album_info)===null||w===void 0?void 0:w.album_id;i.isDelAlbum=y;i.isAddCurAlbum=h;if(!i.isAddPayAlbum&&!i.isDelAlbum&&!!i.appmsg_info[0].is_pay_subscribe&&i.appmsg_info[0].ban_flag===0&&t.payAlbumData.currentId===0){i.payDisable=false}i.selected=i.payDisable?false:i.selected}if(t.type===1||t.type===2){var L=t.isMultiBan&&i.share_page_type===8;i.disabled=!i.selected&&t.selectedList.length===t.maxSelectNumber&&t.maxSelectNumber>1||t.isFromSelectMsg&&(i.share_page_type===10||L||i.is_rumor_refutation||i.rumor_refutation&&i.rumor_refutation.is_rumor_refutation)||t.showType===7&&t.info.voice_verify_state===4}else if(i.appmsg_info){i.appmsg_info.forEach(function(d){var F=t.isMultiBan&&d.share_page_type===8;d.disabled=!i.selected&&t.selectedList.length===t.maxSelectNumber&&t.maxSelectNumber>1||t.isFromSelectMsg&&(d.share_page_type===10||F||d.is_rumor_refutation||d.rumor_refutation&&d.rumor_refutation.is_rumor_refutation)||t.showType===7&&d.voice_verify_state===4||i.payDisable})}}return i});return a},prepareAppmsgInfo:function o(e,t){var a=this;e.forEach(function(i){i.update_time=t.update_time;i.share_page_type=a.parseStringNumberToInt(i.share_page_type,10);i.itemidx=a.parseStringNumberToInt(i.itemidx,10);i.item_show_type=i.share_page_type;i.share_type=i.share_page_type;i.play_length=i.duration;i.share_videoinfo=[];i.share_voiceinfo=[];if(i.share_page_type===5){i.share_videoinfo.push({play_length:i.duration})}if(i.share_page_type===7){i.share_voiceinfo.push({play_length:i.duration})}if(i.share_page_type===8){i.new_pic_process=1}});t.view={};t.view.status="\u5DF2\u53D1\u8868"},isMediaAccount:function o(){return true},parseStringNumberToInt:function o(e){return typeof e==="string"?parseInt(e,10):e},showItem:function o(e){var t;if(this.isAlbum&&(t=e.appmsg_info)!==null&&t!==void 0&&t[0].import_from_drama_info){return false}var a=["\u5DF2\u53D1\u5E03","\u53D1\u5E03\u6210\u529F","\u5DF2\u7FA4\u53D1","\u5DF2\u53D1\u8868"];if(this.isFromSelectMsg){a.push("\u5DF2\u5220\u9664")}var i=e.view&&!a.includes(e.view.status)||!!e.card_info||!!e.copy_type===11;return!i},search:function o(e){this.query=e;this.lastPage=1;this.resetPagiation();this.getData(0,10,this.type,this.query)},pageChange:function o(e){if(this.showSelected){this.showList=this.formatShowList(this.selectedList.filter(function(t,a){return a>=(e.currentPage-1)*10&&a<e.currentPage*10}))}else{this.getData((e.currentPage-1)*10,10,this.type,this.query);this.lastPage=e.currentPage}},isSameAppmsg:function o(e,t){if(this.dataView==="card"){return e.msgid===t.msgid}var a=[e.appmsg_info[0],t.appmsg_info[0]],i=a[0],p=a[1];if(!!i.audio_id||!!p.audio_id){return"".concat(i.appmsgid,"_").concat(i.itemidx)==="".concat(p.appmsgid,"_").concat(p.itemidx)&&i.audio_id===p.audio_id}return"".concat(i.appmsgid,"_").concat(i.itemidx)==="".concat(p.appmsgid,"_").concat(p.itemidx)},show:function o(){this.dialogShow=true;this.getData(0,10);this.$emit("input",this.dialogShow)},hide:function o(){this.selectedList=[];this.type=0;this.query="";this.currentQuery="";this.dialogShow=false;this.lastPage=1;this.resetPagiation();this.$emit("input",this.dialogShow)},comfirmDialog:function o(){var e=this;if(this.isFromSelectMsg){if(this.view==="card"){s.setSum("69271","98","1");if(this.type*1===0){s.setSum("69271","120","1")}else if(this.type*1===1){s.setSum("69271","122","1")}else if(this.type*1===2){s.setSum("69271","124","1")}}else{s.setSum("69271","99","1");if(this.type*1===0){s.setSum("69271","121","1")}else if(this.type*1===1){s.setSum("69271","123","1")}else if(this.type*1===2){s.setSum("69271","125","1")}}s.send()}var t=this.selectedList.map(function(i){if(!e.isFromSelectMsg){if(i.appmsg_info[0].title){i.appmsg_info[0].title=i.appmsg_info[0].title.replace(/<em class=.+?>/ig,"").replace(/<\/em>/ig,"")}}return i});if(this.isFromSelectMsg){var a={view:this.view,type:this.type,selectedList:t};this.$emit("select",a)}else{this.$emit("select",t)}this.hide()},closeDialog:function o(){this.$emit("cancel");this.hide()},resetPagiation:function o(e){this.$refs.pagiation.currentPage=e||1},changeLeftTab:function o(e){this.type=e;this.query="";this.currentQuery="";this.lastPage=1;this.resetPagiation();this.getData(this.begin,this.count,e,this.query);if(this.isFromSelectMsg){if(e*1===0){s.setSum("129180","51","1")}else if(e*1===1){s.setSum("129180","53","1")}else if(e*1===2){s.setSum("129180","52","1")}s.send()}},selectItem:function o(e){if(!e.canselect)return;if(!!!e.selected&&this.selectedList.length>=this.maxSelectNumber)return;var t=this.itemInSelectedList(e);if(!!t){e.selected=false;this.removeSelectedListAppmsg(e)}else{e.selected=true;this.selectedList.push(e)}},selectItemSingle:function o(e){if(!e.canselect)return;if(this.selectedList.length){this.selectedList[0].selected=false;this.selectedList.splice(0,1)}e.selected=true;this.selectedList.push(e)},removeSelectedListAppmsg:function o(e){for(var t=0;t<this.selectedList.length;t++){if(this.isSameAppmsg(e,this.selectedList[t])){this.selectedList[t].selected=false;this.selectedList.splice(t,1);break}}},clearCurrentList:function o(){this.currentList=[];this.currentListCount=0},itemInSelectedList:function o(e){var t=this;var a=false;this.selectedList.forEach(function(i){if(t.isSameAppmsg(e,i)){a=i}});return a},isSelected:function o(e){for(var t=0;t<this.selectedList.length;t++){var a=this.selectedList[t];if(this.isSameAppmsg(a,e)){return true}}return false},markAllSelectedAppmsg:function o(){var e=this;this.currentList.forEach(function(t){t.selected=e.isSelected(t)})},initListData:function o(e){var t=this;if(this.showType===7){for(var a=0;a<e.length;a++){var i=false;try{if(e[a].publish_info){var p=JSON.parse(e[a].publish_info).appmsgex;i=!!p&&p[0].is_deleted}}catch(y){}if(i)continue;var m={};m.appmsg_info=[];m.update_time=e[a].update_time;m.appmsg_info.push({appmsgid:e[a].appmsgid,itemidx:e[a].itemidx,title:e[a].title,content:e[a].content,audio_id:e[a].audio_id,share_page_type:7,duration:e[a].duration,appmsg_title:e[a].appmsg_title,appmsg_album_infos:e[a].appmsg_album_infos,voice_verify_state:e[a].voice_verify_state});m.appmsg_info=l(m.appmsg_info,["digest","title","content"]);this.prepareAppmsgInfo(m.appmsg_info,m);this.currentList.push(m)}}else{if(this.isFromSelectMsg&&(this.type===1||this.type===2)){var _=[];e.forEach(function(y){y.multi_item.forEach(function(g,A){g.selected=false;g.itemidx=A;g.app_id=y.app_id;_.push(g)})});_.forEach(function(y){if(y.item_show_type===5||y.item_show_type===8){y.digest=y.digest.replace(/<\/?a[^>]*?>/ig,"")}});_=l(_,["digest","title"]);this.currentList=_}else{var w=function y(){var g=[];try{var A=JSON.parse(e[h].publish_info),L=A.appmsgex,d=A.appmsg_info;L===null||L===void 0||L.forEach(function(n,V){var M;n.import_from_drama_info=d===null||d===void 0||(M=d[V])===null||M===void 0?void 0:M.import_from_drama_info});if(!t.isFromSelectMsg){g=L.filter(function(n){return!n.is_deleted})}else{g=L}}catch(n){}if(e[h].publish_info===""||g.length===0)return 0;e[h].publish_info=JSON.parse(e[h].publish_info);var F=e[h],r=F.publish_info,j=F.publish_type;if(r.card_info){r.view={};r.view.card=k.parse_cardticket(r.card_info);r.appmsg_info.push({update_time:r.sent_info.time});t.currentList.push(r);return 0}r.view={};r.appmsg_info=g||r.appmsgex||r.appmsg_info;r.appmsg_info.forEach(function(n){if(n.item_show_type===5||n.item_show_type===8){n.digest=n.digest.replace(/<\/?a[^>]*?>/ig,"")}});r.appmsg_info=l(r.appmsg_info,["digest","title"]);r=f.bind(t)(r,j);e[h].publish_type=j*1;r.multi_item=r.appmsg_info;if(j===102){r.multi_item=[];r.multi_item.push(r.appmsg_info);r.appmsg_info=r.multi_item}if(r.publish_info){r.update_time=r.publish_info.update_time}else{r.update_time=r.sent_info.time}r.create_time=e[h].publish_info.update_time;r.multi_item.forEach(function(n){if(j===103){n.item_show_type=5}n.share_type=n.item_show_type;n.share_page_type=n.share_type;n.share_videoinfo=[];n.share_voiceinfo=[];if(n.voice_encode_fileid){n.audio_id=n.voice_encode_fileid}if(!!r.publish_info){n.update_time=r.publish_info.update_time}else{n.update_time=r.sent_info.time}if(n.share_page_type===5){n.share_videoinfo.push({play_length:n.duration})}if(n.share_page_type===7){n.share_voiceinfo.push({play_length:n.duration})}if(n.share_page_type===8){n.new_pic_process=1}if(t.dataView==="list"){var V=t.initPublishInfo(r);if(t.showType!==""){if(t.showType===7&&n.share_page_type===0){if(!!n.audio_items&&n.audio_items.length>0){var M=n.audio_items;M.forEach(function(B){var I=t.initPublishInfo(r);var $=[7,7];B.share_page_type=$[0];B.share_type=$[1];var O=Object.assign({},n,B);I.appmsg_info.push(O);t.currentList.push(I)});return}}}if(t.showType===""||t.showType===n.share_page_type||Array.isArray(t.showType)&&t.showType.indexOf(8)!==-1&&[8,10].indexOf(n.share_page_type)!==-1||t.showType===0&&n.share_page_type===0||n.share_page_type===9||n.share_page_type===11){var H=Object.assign({},n);V.appmsg_info.push(H);t.currentList.push(V)}}});if(t.dataView==="card"){t.currentList.push(r)}},v;for(var h=0;h<e.length;h++){v=w();if(v===0)continue}}}if(!this.isFromSelectMsg){this.markAllSelectedAppmsg()}},initPublishInfo:function o(e){var t=Object.assign({},e);delete t.appmsg_info;delete t.multi_item;t.appmsg_info=[];t.multi_item=t.appmsg_info;t.selected=false;return t},initData:function o(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:false;var a=[];var i=0;if(this.showType===7){if(e&&e.list_audio_resp&&e.list_audio_resp.audio_items){a=e.list_audio_resp.audio_items}else if(e&&e.search_audio_resp&&e.search_audio_resp.audio_items){a=e.search_audio_resp.audio_items}if(e&&e.list_audio_resp&&e.list_audio_resp.total){i=e.list_audio_resp.total}else if(e&&e.search_audio_resp&&e.search_audio_resp.total){i=e.search_audio_resp.total}this.$set(this.currentCount,0,i);this.$set(this.currentCount,1,i);this.$set(this.currentCount,2,i);this.initListData(a)}else{var p;if(e.publish_page_noencode||e.publish_page){if(e.publish_page_noencode){p=JSON.parse(e.publish_page_noencode)}else{if(e.publish_page){p=JSON.parse(e.publish_page)}}try{a=p.publish_list;if(!t){this.totalCount=p.total_count*1;this.masssendCount=p.masssend_count*1;this.publishCount=p.publish_count*1;this.$set(this.currentCount,0,this.totalCount);this.$set(this.currentCount,1,this.masssendCount);this.$set(this.currentCount,2,this.publishCount)}else{if(this.isFromSelectMsg){if(this.type===0){this.$set(this.currentCount,0,p.total_count*1)}else{this.$set(this.currentCount,this.type,p.search_cnt*1)}}else{for(var m=0;m<3;m++){if(m===this.type){this.totalCount=p.total_count*1;this.$set(this.currentCount,m,this.totalCount)}else{this.$set(this.currentCount,m,-1)}}}}}catch(_){}this.initListData(a)}else{a=e.app_msg_info.item;if(this.query){this.$set(this.currentCount,this.type,e.app_msg_info.search_cnt)}else{if(this.type===1){this.$set(this.currentCount,this.type,e.app_msg_info.file_cnt.draft_count)}else{this.$set(this.currentCount,this.type,e.app_msg_info.file_cnt.app_msg_cnt)}}if(this.view==="card"){this.currentList=a}else{this.initListData(a)}}}},getData:function o(e,t){var a=this;var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;var p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"";this.clearCurrentList();var m;if(this.type===0){m=2}else{if(this.type===1){m=0}else{m=1}}this.loading=true;var _="/cgi-bin/appmsgpublish";if(!this.isFromSelectMsg){_=this.showType===7?"/cgi-bin/appmsgalbummgr":"/cgi-bin/appmsgpublish"}else{if(this.type===1){_="/cgi-bin/appmsg?type=77&action=list_card"}if(this.type===2){_="/cgi-bin/appmsg?type=10&action=list_card"}}var w=this.showType;if(Array.isArray(this.showType)){if(p===""){w=this.showType.join("_")}else{w=this.showType[0]}}D.get({url:_,data:this.showType!==7?{sub:p===""?"list":"search",begin:e,count:t,query:p,type:this.sendMap.get(i),show_type:w,free_publish_type:this.freePublishType,sub_action:"list_ex",search_card:this.dataView==="card"?1:0}:{action:p===""?"list_audio":"search_audio",begin:e,count:t,key:p,media_source:m},timeout:8e3},function(v){if(v&&v.base_resp.ret===0){a.initData(v,p!=="");a.showList=a.formatShowList(a.currentList.map(function(h){return h}))}a.loading=false},function(v){a.loading=false})}}})},"./src/pages/modules/publish/publish_dialog/publish_dialog.less":function(b,S,u){"use strict";u.r(S)},"./src/pages/modules/publish/publish_dialog/publish_dialog.tpl":function(b,S){b.exports=`<div class="publish_dialog" v-if="dialogShow">
  <mp-dialog v-model="dialogShow" :width="960" :height="dialogHeight" @close="closeDialog">
    <div slot="header">
      <span>{{ dialogTitle }}</span>
    </div>
    <div class="publish_dialog_content">
      <div class="left_tab_data" v-if="!showSelected">
        <div class="tab" :class="{'current_tab': type==0}" @click="changeLeftTab(0)">
          <span v-if="isFromSelectMsg">\u5DF2\u53D1\u8868</span>
          <span v-else> \u5168\u90E8</span>
          <template v-if="currentCount[0] >= 0">
          </template>
        </div>
        <div class="tab" :class="{'current_tab': type==1}" @click="changeLeftTab(1)">
          <span v-if="isFromSelectMsg">\u8349\u7A3F</span>
          <span v-else>
            <template v-if="canUseNewPublish">
              \u5DF2\u901A\u77E5
            </template>
            <template v-else>
              \u7FA4\u53D1
            </template>

          </span>
          <template v-if="currentCount[1] >= 0">

          </template>
        </div>
        <div class="tab" :class="{'current_tab': type==2}" @click="changeLeftTab(2)">
          <span v-if="isFromSelectMsg"> \u5386\u53F2\u56FE\u6587\u7D20\u6750</span>
          <span v-else>
            <template v-if="canUseNewPublish">
              \u672A\u901A\u77E5
            </template>
            <template v-else>
              \u53D1\u8868
            </template>
          </span>
          <template v-if="currentCount[2] >= 0">

          </template>
        </div>
      </div>
      <div class="image_word" :class="{no_left_tab: showSelected}">
        <div class="title_rank_context" v-if="isFromSelectMsg || showTwoDataView">
          <mp-tooltip content="\u5217\u8868\u89C6\u56FE" position="down-center" :delay="300">
            <button slot="target" @click="changeView('list')" :class="['weui-desktop-icon-btn weui-desktop-icon__list', view === 'card' ? '' : 'weui-desktop-icon-btn_current']">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="transparent" d="M0 0h24v24H0z"/><path d="M21 17a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1h18zm0-6.5a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a1 1 0 011-1h18zM21 4a1 1 0 011 1v1a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h18z"/></g></svg>
            </button>
          </mp-tooltip>
          <mp-tooltip content="\u5361\u7247\u89C6\u56FE" position="down-center" :delay="300">
            <button slot="target" @click="changeView('card')" :class="['weui-desktop-icon-btn weui-desktop-icon__list', view === 'card' ? 'weui-desktop-icon-btn_current' : '']">
              <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="transparent" d="M0 0h24v24H0z"/><path d="M10 12.5a1.5 1.5 0 011.5 1.5v5.5A1.5 1.5 0 0110 21H4.5A1.5 1.5 0 013 19.5V14a1.5 1.5 0 011.5-1.5H10zm9.5 0A1.5 1.5 0 0121 14v5.5a1.5 1.5 0 01-1.5 1.5H14a1.5 1.5 0 01-1.5-1.5V14a1.5 1.5 0 011.5-1.5h5.5zM10 3a1.5 1.5 0 011.5 1.5V10a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 10V4.5A1.5 1.5 0 014.5 3H10zm9.5 0A1.5 1.5 0 0121 4.5V10a1.5 1.5 0 01-1.5 1.5H14a1.5 1.5 0 01-1.5-1.5V4.5A1.5 1.5 0 0114 3h5.5z"/></g></svg>
            </button>
          </mp-tooltip>
          <mp-search v-if="isFromSelectMsg" placeholder="\u8F93\u5165\u6807\u9898\u641C\u7D22" class="search" @search="search" v-model="currentQuery"></mp-search>
        </div>
        <div v-if="!isFromSelectMsg">
          <div class="header_wording">
            <span :style="{visibility: !(currentList.length > 0 && !showSelected) ? 'hidden' : 'visible'}">
              \u53EA\u80FD\u9009\u62E9\u5DF2\u53D1\u8868\u5185\u5BB9\uFF0C\u5982\u9700\u6DFB\u52A0\u8349\u7A3F\uFF0C\u8BF7\u5148<a target='_blank' href='/cgi-bin/appmsg?begin=0&count=10&type=77&action=list_card'>\u524D\u5F80\u8349\u7A3F\u7BB1</a>\u53D1\u8868\u540E\u6DFB\u52A0\u3002
            </span>
            <mp-search v-if="!showSelected" placeholder="\u8F93\u5165\u6807\u9898\u641C\u7D22" class="search" @search="search" v-model="currentQuery"></mp-search>
          </div>
        </div>
        <div class="content" :style="{height: contentInnerHeight + 'px'}">
          <div class="loading_icon" v-if="loading">
            <i class="weui-desktop-loading">\u52A0\u8F7D\u4E2D</i>
          </div>

          <template v-if="currentList.length > 0">
            <template v-if="view === 'card'">
              <div class="card_content">
                <div class="weui-desktop-media__list-col" :style="{width: 100/getMediaCol + '%'}"
                  v-for="n in getMediaCol">
                  <div class="inner">
                    <template v-for="(item, idx) in showList" v-if="idx % getMediaCol == (n-1)">
                      <template v-if="showItem(item)">
                        <mp-appmsg2 :source="item" :type="1"
                        :selected="item.selected"
                        :query="query"
                        :isfromselectmsg="isFromSelectMsg"
                        :canselect="item.canselect"
                        :useupdatetime="true"
                        :show-type="item.multi_item[0].share_page_type "
                        :unselect-tips="item.unselectTips"
                        @click.native="maxSelectNumber !== 1 ? selectItem(item) : selectItemSingle(item)">
                        </mp-appmsg2>
                      </template>
                    </template>
                  </div>
                </div>
              </div>
            </template>

            <template v-else-if="view === 'list'">
              <template v-for="item in showList">
                <template v-if="showItem(item)">
                  <template v-if="(type === 1 || type === 2) && isFromSelectMsg">
                    <mp-publish-list-view :info="item" :item="item"
                      slot="target"
                      @click="maxSelectNumber !== 1 ? selectItem(item) : selectItemSingle(item)"
                      :disabled="item.disabled"
                      :keyword="query"
                      :isfromselectmsg="isFromSelectMsg"
                      :max-select-number="maxSelectNumber"
                      :is-album="isAlbum"
                      :show-type="showType">
                    </mp-publish-list-view>
                  </template>
                  <template v-else>
                    <template v-for="info in item.appmsg_info">
                      <mp-publish-list-view v-if="isFromSelectMsg || (!isFromSelectMsg && !info.is_deleted)" :info="info" :item="item"
                        slot="target"
                        @click="maxSelectNumber !== 1 ? selectItem(item) : selectItemSingle(item)"
                        :disabled="info.disabled"
                        :keyword="query"
                        :isfromselectmsg="isFromSelectMsg"
                        :max-select-number="maxSelectNumber"
                        :is-album="isAlbum"
                        :show-type="showType"
                        :pay-album-data="payAlbumData"
                        :is-pay-album="payAlbumData.isPayAlbum"
                      >
                      </mp-publish-list-view>
                    </template>
                  </template>
                </template>


                
              </template>
            </template>
          </template>
          <template v-else>
            <div v-if="isFromSelectMsg && !loading" class="empty_msg">
             \u6682\u65E0\u641C\u7D22\u7ED3\u679C
            </div>
            <div v-else-if="!loading" class="no_data">
              \u6682\u65E0\u5DF2\u53D1\u8868\u5185\u5BB9\uFF0C\u5982\u9700\u6DFB\u52A0\u8349\u7A3F\uFF0C\u8BF7\u5148<a target="_blank" href="/cgi-bin/appmsg?begin=0&count=10&type=77&action=list_card">\u524D\u5F80\u8349\u7A3F\u7BB1</a>\u53D1\u8868\u3002
            </div>
          </template>
        </div>
        <mp-pagination class="image_pagination" mode="normal" :showJumper="!query" :per-page="10" :total-num="showSelected ? selectedList.length : currentCount[type]" @page-change="pageChange" ref="pagiation"></mp-pagination>
      </div>
    </div>
    <div slot="footer">
      <template v-if="maxSelectNumber > 1">
        <div class="has_selected">\u5DF2\u9009\u62E9</div>
        <div class="image_wording_number" @click="showSelected = true">{{selectedList.length}}/{{maxSelectNumber}} \u9879</div>
        <div class="image_wording_number" @click="showSelected = false" v-if="showSelected">\u8FD4\u56DE</div>
      </template>
      <mp-button type="primary" @click="comfirmDialog" :disabled="selectedList.length===0">\u786E\u5B9A</mp-button>
      <mp-button type="default" @click="closeDialog">\u53D6\u6D88</mp-button>
    </div>
  </mp-dialog>
</div>
`},"./src/pages/modules/publish/publish_list_view/publish_list_view.js":function(b,S,u){var x=u("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var P=u("./src/pages/modules/publish/publish_list_view/publish_list_view.tpl");var D=u("./src/pages/modules/utils/time.js");u("./src/pages/modules/publish/tpl/publish_tpl.js");u("./src/pages/modules/publish/publish_list_view/publish_list_view.less");var k=function l(s){var c="";if(s<60){c="00:"+(s<10?"0":"")+s}else{var f=Math.floor(s/60);s-=f*60;c=(f<10?"0":"")+f+":"+(s<10?"0":"")+s}return c};var N=0;x.component("mp-publish-list-view",{template:P,provide:{customerType:0},props:{item:{type:Object,default:function l(){return{}}},info:{type:Object,default:function l(){return{}}},isAlbum:{type:Boolean,default:false},isPayAlbum:{type:Boolean,default:false},showType:{default:"",validator:function l(s){if(Array.isArray(s)){return s.every(function(c){return[0,5,7,8,10].indexOf(c)!==-1})}return s===""||s===0||s===5||s===7||s===8||s===10}},keyword:{type:String,default:""},disabled:{type:Boolean,default:false},isfromselectmsg:{type:Boolean,default:false},maxSelectNumber:{type:Number,default:1},payAlbumData:{type:Object}},methods:{select:function l(s){var c=this;if(!this.cannotSelect&&!this.disabled){this.$emit("click");this.$nextTick(function(){c.$forceUpdate()})}},listClick:function l(s,c){if(!this.cannotSelect&&!this.disabled){this.select(s.selected)}},preFormate:function l(){var s=this.info;if(s.update_time&&!s.update_time.length){s.update_time=D.getFullTime(s.update_time);s.update_time=s.update_time.slice(0,s.update_time.length-3)}if(s.duration&&typeof s.duration==="number"){s.duration=k(s.duration)}if(s.share_page_type===7&&s.share_voiceinfo.length>0){if(typeof s.play_length==="number"){s.play_length=k(s.share_voiceinfo[0].play_length)}}if(s.share_page_type===5&&s.share_videoinfo.length>0){if(typeof s.play_length==="number"){s.play_length=k(s.share_videoinfo[0].play_length)}}}},watch:{info:function l(){this.preFormate()}},computed:{cannotSelect:function l(){var s=false;if(this.info){if(this.info.appmsg_album_infos){s=this.info.appmsg_album_infos}else if(this.info.appmsg_album_info){s=this.info.appmsg_album_info.appmsg_album_infos}if(this.isAlbum&&this.showType!==""){if(this.item.selected){return false}if(!s){return false}else{if(this.payAlbumData){if(s.length>=1&&this.payAlbumData.currentId===s[0].album_id){return false}}return s.length>=1}}}else{return false}},isDeleted:function l(){return this.info.is_deleted||this.info.deleteFlag||this.info.is_cooling_article}},data:function l(){this.preFormate();var s=this.info;s.isDel=false;return{}}})},"./src/pages/modules/publish/publish_list_view/publish_list_view.less":function(b,S,u){"use strict";u.r(S)},"./src/pages/modules/publish/publish_list_view/publish_list_view.tpl":function(b,S){b.exports=`<!-- \u89C6\u9891 -->
<!-- <mp-tooltip v-if="cannotSelect">
  <div slot="content" class="album_hover_word">
    <span v-if="showType === 7">\u97F3\u9891\u5408\u96C6\u89C4\u5219\uFF1A\u6BCF\u6761\u97F3\u9891\u81F3\u591A\u6DFB\u52A01\u4E2A\u6807\u7B7E\uFF0C\u8BF7\u5220\u9664\u540E\u518D\u8BD5</span>
    <span v-else-if="showType === 8 || showType === 10 || (Array.isArray(showType) && showType.indexOf(8) !== -1)">\u56FE\u7247/\u6587\u5B57\u5408\u96C6\u89C4\u5219\uFF1A\u6BCF\u6761\u56FE\u7247/\u6587\u5B57\u81F3\u591A\u6DFB\u52A01\u4E2A\u6807\u7B7E\uFF0C\u8BF7\u5220\u9664\u540E\u518D\u8BD5</span>
    <span v-else>\u89C6\u9891\u5408\u96C6\u89C4\u5219\uFF1A\u6BCF\u6761\u89C6\u9891\u81F3\u591A\u6DFB\u52A05\u4E2A\u6807\u7B7E\uFF0C\u8BF7\u5220\u9664\u540E\u518D\u8BD5</span>
  </div>
  <div class="weui-desktop-table__wrp weui-desktop-table_simple-appmsg appmsg-list appmsg-list-publish">

    <template v-if="maxSelectNumber > 1">
      <mp-checkbox :value="item.selected" @change="select" :disabled="cannotSelect || disabled"></mp-checkbox>
    </template>
    <template v-else>
      <mp-radio v-model="item.selected" @click.native="select" :disabled="cannotSelect"></mp-radio>
    </template>
    <div class="publish_list_item" :class="{'can_not_selected': cannotSelect}">
      <template v-if="info.share_page_type==0||info.share_page_type==9||info.share_page_type==11">
        <appmsg-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-item>
      </template>


      <template v-if="info.share_page_type==5">
        <appmsg-video-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-video-item>
      </template>


      <template v-if="info.share_page_type==8">
        <appmsg-img-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-img-item>
      </template>

      <template v-if="info.share_page_type==7">
        <appmsg-audio-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-audio-item>
      </template>

      <template v-if="info.share_page_type==10">
        <appmsg-text-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-text-item>
      </template>

      <template v-if="info.share_page_type==19">
        <appmsg-live-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-live-item>
      </template>

      <template v-if="item.type == 17 && item.view && item.view.card">
        <div>
          <div class="weui-desktop-mass-media weui-desktop-mass-cardticket weui-desktop-mass-appmsg" :class="{'weui-desktop-mass-media_del':item.sent_result.msg_status==7,'timer_send_appmsg_item':!!item.timerSendInfo}">
            <div class="weui-desktop-mass-appmsg__hd">
              <span class="weui-desktop-mass-cardticket__logo__wrp weui-desktop-vm_default">
                <i class="weui-desktop-mass-cardticket__logo" :style="{backgroundImage: 'url(' + item.view.card.logo_url + ')'}"></i>
              </span>
            </div>
            <div class="weui-desktop-mass-appmsg__bd">
                <div class="weui-desktop-mass-cardticket__info weui-desktop-vm_primary">
                    <strong class="weui-desktop-mass-cardticket__title">{{item.view.card.title}}</strong>
                    <div class="weui-desktop-mass-cardticket__desc">{{item.view.card.brand_name}}</div>
                </div>
            </div>
          </div>
        </div>
      </template>

    </div>
    <div class="publish_time">
      {{info.update_time}}
    </div>

  </div>
</mp-tooltip> -->

<div class="weui-desktop-table__wrp weui-desktop-table_simple-appmsg appmsg-list appmsg-list-publish" :class="{ 'appmsg-list-publish_disabled': disabled }" slot="target" @click="listClick(item, $event)">
  <div v-if="disabled && info.share_page_type == 7 && item.appmsg_info[0].voice_verify_state === 4" class="appmsg-list-publish-disabled_bar">\u5DF2\u4E0B\u67B6\u7684\u97F3\u9891\uFF0C\u4E0D\u53EF\u4EE5\u4F7F\u7528</div>

  <!-- \u666E\u901A 0 9 11 -->
  <template v-if="maxSelectNumber > 1">
    <mp-checkbox :value="item.selected" @change="select" :disabled="cannotSelect || disabled" @click.native.stop></mp-checkbox>
  </template>
  <template v-else>
    <mp-radio v-model="item.selected" @click.native="select" :disabled="cannotSelect || disabled"></mp-radio>
  </template>
  <div class="publish_list_item" :class="{'can_not_selected': cannotSelect || disabled}">
    <template v-if="info.share_page_type==0||info.share_page_type==9||info.share_page_type==11">
      <div v-if="isfromselectmsg && (info.is_rumor_refutation || (info.rumor_refutation && info.rumor_refutation.is_rumor_refutation))" class="disabled_text_bar">
        <mp-icon class="disabled_text_icon" icon="infoTip" color="rgba(0,0,0,0.3)" :width="16" :height="16"></mp-icon>\u8F9F\u8C23\u6587\u7AE0\u6682\u4E0D\u652F\u6301\u5408\u5E76\u53D1\u8868
      </div>
      <appmsg-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-item>
    </template>

    <!-- \u89C6\u9891 -->
    <template v-if="info.share_page_type==5">
      <appmsg-video-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-video-item>
    </template>

    <!-- \u56FE\u7247 -->
    <template v-if="info.share_page_type==8">
      <div v-if="disabled && isfromselectmsg" class="disabled_text_bar">
        <mp-icon class="disabled_text_icon" icon="infoTip" color="rgba(0,0,0,0.3)" :width="16" :height="16"></mp-icon>\u56FE\u6587\u5185\u5BB9\u4E0D\u652F\u6301\u5408\u5E76\u53D1\u8868
      </div>
      <appmsg-img-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-img-item>
    </template>
    <!-- \u8BED\u97F3 -->
    <template v-if="info.share_page_type==7">
      <appmsg-audio-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum" :style="{ opacity: disabled ? 0.3 : 1 }"></appmsg-audio-item>
    </template>
    <!-- \u6587\u5B57 -->
    <template v-if="info.share_page_type==10">
      <div v-if="isfromselectmsg" class="disabled_text_bar">
        <mp-icon class="disabled_text_icon" icon="infoTip" color="rgba(0,0,0,0.3)" :width="16" :height="16"></mp-icon>\u6587\u5B57\u6D88\u606F\u4E0D\u652F\u6301\u5408\u5E76\u53D1\u8868
      </div>
      <appmsg-text-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-text-item>
    </template>
    <!-- \u76F4\u64AD -->
    <template v-if="info.share_page_type==19">
      <appmsg-live-item :info="info" :item="item" :fromPublishDialog="true" :keyword="keyword" :is-album="isAlbum" :is-pay-album="isPayAlbum"></appmsg-live-item>
    </template>
    <!-- \u5361\u5377 -->
    <template v-if="item.type == 17 && item.view && item.view.card">
      <div>
        <div class="weui-desktop-mass-media weui-desktop-mass-cardticket weui-desktop-mass-appmsg" :class="{'weui-desktop-mass-media_del':item.sent_result.msg_status==7,'timer_send_appmsg_item':!!item.timerSendInfo}">
          <div class="weui-desktop-mass-appmsg__hd">
            <span class="weui-desktop-mass-cardticket__logo__wrp weui-desktop-vm_default">
              <i class="weui-desktop-mass-cardticket__logo" :style="{backgroundImage: 'url(' + item.view.card.logo_url + ')'}"></i>
            </span>
          </div>
          <div class="weui-desktop-mass-appmsg__bd">
            <div class="weui-desktop-mass-cardticket__info weui-desktop-vm_primary">
              <strong class="weui-desktop-mass-cardticket__title">{{item.view.card.title}}</strong>
              <div class="weui-desktop-mass-cardticket__desc">{{item.view.card.brand_name}}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>

  <div class="publish_time">
    {{info.update_time}}
  </div>
</div>`}}]);
