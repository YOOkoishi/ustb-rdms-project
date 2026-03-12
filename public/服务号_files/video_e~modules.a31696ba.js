(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/modules~editor/editor_for_web1~mass/massSend4Web1~media/video_add/video_add~media/video_edit/video_e~modules"],{"./src/pages/modules/author_selector/author_selector.js":function(d,p,o){var _=o("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");o("./src/pages/modules/author_selector/author_selector.less");var m=o("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");var v=o("./src/3rd/store/store.js");var w=o("./src/pages/modules/author_selector/author_selector.tpl");var y=o("./src/pages/modules/utils/object.js"),f=y.assign;_.component("mp-author-selector",{template:w,model:{prop:"searchKey",event:"searchKey-change"},props:{searchKey:{type:String,default:""},writer:{type:Object,default:function a(){return{hasAuthor:false,writerid:"",username:"",nickname:"",authorStatus:0,canReward:0,headimg:""}}},inviteAuthorLink:{type:String,default:""},totalInviteAuthorCnt:{type:Number,default:0},inviteAuthorCnt:{type:Number,default:0}},data:function a(){return{innerSearchKey:this.searchKey,innerWriter:this.writer,showSearchPopover:false,showInputClear:false,canAuthorizeCount:0,showEmptyTips:false,searchResult:[],loadingAuthor:false,canHandleClick:true}},watch:{searchKey:function a(r){this.innerSearchKey=r},innerSearchKey:function a(r){this.$emit("searchKey-change",r)},writer:function a(r){f(this.innerWriter,r);if(this.innerWriter.writerid)this.innerWriter.hasAuthor=true},showSearchPopover:function a(r){if(r){document.addEventListener("click",this.handleDocumentClick)}else{this.canHandleClick=true;document.removeEventListener("click",this.handleDocumentClick)}}},computed:{rewardAuthorTips:function a(){if(this.inviteAuthorCnt>0){return"\u5982\u8981\u521B\u5EFA\u8D5E\u8D4F\u8D26\u6237\uFF0C\u4F60\u53EF\u4EE5\u53D1\u9001<a target='_blank' href='".concat(this.inviteAuthorLink,"'>\u8D5E\u8D4F\u8D26\u6237\u9080\u8BF7</a>\u3002")}else if(this.totalInviteAuthorCnt===3){return"\u672C\u516C\u4F17\u53F7\u5DF2\u9080\u8BF7\u521B\u5EFA3\u4E2A<a target='_blank' href='".concat(this.inviteAuthorLink,"'>\u8D5E\u8D4F\u8D26\u6237</a>\uFF0C\u65E0\u6CD5\u518D\u9080\u8BF7")}else{return"\u5982\u8981\u521B\u5EFA\u8D5E\u8D4F\u8D26\u6237\uFF0C\u53D1\u88683\u7BC7\u539F\u521B\u5185\u5BB9\u540E\uFF0C\u53EF\u9080\u8BF7\u521B\u5EFA<a target='_blank' href='".concat(this.inviteAuthorLink,"'>\u8D5E\u8D4F\u8D26\u6237</a>\u3002")}}},beforeDestroy:function a(){this.showSearchPopover&&document.removeEventListener("click",this.handleDocumentClick)},methods:{handleDocumentClick:function a(r){if(!this.canHandleClick)return;if(this.$refs.searchInput.$el.contains(r.target)||this.$refs.searchPopover.contains(r.target))return;this.showSearchPopover=false},clearAuthor:function a(){this.innerWriter.hasAuthor=false;this.innerWriter.writerid="";this.innerWriter.username="";this.innerWriter.nickname="";this.innerWriter.authorStatus="";this.innerWriter.canReward=0;this.innerWriter.headimg="";this.innerSearchKey="";this.searchInputFocus();this.$emit("select",this.innerWriter)},searchInputChange:function a(){var r=this;if(this.innerSearchKey.length===0){this.showInputClear=false;var u=this.searchHistoryPromise();var i=this.authorizeCountPromise();var e=[];var t=[];var s=[];Promise.all([u,i]).then(function(n){if(n[0].pageinfo&&n[0].pageinfo.writerlist){for(var c=0;c<n[0].pageinfo.writerlist.length;c++){if(n[0].pageinfo.writerlist[c].author_status===0){e.push(n[0].pageinfo.writerlist[c])}}}if(n[1].pageinfo&&n[1].pageinfo.writerlist){for(var l=0;l<n[1].pageinfo.writerlist.length;l++){if(n[1].pageinfo.writerlist[l].author_status===0){t.push(n[1].pageinfo.writerlist[l])}}}r.canAuthorizeCount=n[1].pageinfo?n[1].pageinfo.total_cnt:0;s=e.concat();for(var h=0;h<t.length;h++){var g=false;for(var A=0;A<e.length;A++){if(e[A].writerid===t[h].writerid){g=true}}if(!g)s.push(t[h])}r.searchResult=s.slice(0,4);r.showSearchPopover=true})}else{this.showInputClear=true;if(this.innerSearchKey!==this.innerWriter.nickname){this.innerWriter.hasAuthor=false;this.searchAuthor(true)}else{this.showEmptyTips=false;this.innerWriter.hasAuthor=true;this.$emit("select",this.innerWriter)}}},searchInputFocus:function a(){this.searchInputChange()},searchAuthor:function a(){var r=this;var u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:false;this.showEmptyTips=false;if(this.innerSearchKey.length>0){this.showSearchPopover=true;!u&&(this.loadingAuthor=true);this.searchAuthorPromise().then(function(i){r.loadingAuthor=false;if(i.pageinfo.writerlist.length){r.searchResult=i.pageinfo.writerlist;if(i.pageinfo.writerlist.length===1){r.selectWriter(i.pageinfo.writerlist[0],true)}}else{r.searchResult=[];if(!u){r.canHandleClick=true;r.showEmptyTips=true}}})}else{this.searchInputChange()}},searchInputBlur:function a(){if(this.innerSearchKey&&!this.innerWriter.hasAuthor){this.canHandleClick=false;this.searchAuthor(false)}else{this.canHandleClick=true}},searchAuthorPromise:function a(){var r=this;var u=this;return new Promise(function(i){m.get({url:"/acct/writermgr?action=search&author=".concat(r.innerSearchKey)},function(e){if(e&&e.base_resp&&e.base_resp.ret===0){i(e)}else{u.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}})})},searchHistoryPromise:function a(){var r=this;if(v.get("editoHitoryrAuthorList_".concat(window.wx.uin))){var u=v.get("editoHitoryrAuthorList_".concat(window.wx.uin)).author||[];var i=[];for(var e=0;e<u.length;e++){i.push(u[e].writerid)}if(u.length>0){return new Promise(function(t){m.get({url:"/acct/writermgr?action=search&writerids=".concat(i.join("_"))},function(s){if(s&&s.base_resp&&s.base_resp.ret===0){t(s)}else{r.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}})})}return new Promise(function(t){t({})})}return new Promise(function(t){t({})})},authorizeCountPromise:function a(){var r=this;return new Promise(function(u){m.get({url:"/acct/writermgr?action=page"},function(i){if(i&&i.base_resp&&i.base_resp.ret===0){u(i)}else{r.$tipsErr("\u7CFB\u7EDF\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5")}})})},selectWriter:function a(r){var u=r.writerid,i=r.username,e=r.nickname,t=r.author_status,s=r.can_reward,n=r.headimg;var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:false;if(t===0&&s===1){this.innerWriter.hasAuthor=true;this.innerWriter.writerid=u;this.innerWriter.username=i;this.innerWriter.nickname=e;this.innerWriter.authorStatus=t;this.innerWriter.canReward=s;this.innerWriter.headimg=n;this.innerSearchKey=e;if(!c){this.showSearchPopover=false;this.searchResult=[]}this.$emit("select",this.innerWriter)}}}})},"./src/pages/modules/author_selector/author_selector.less":function(d,p,o){"use strict";o.r(p)},"./src/pages/modules/author_selector/author_selector.tpl":function(d,p){d.exports=`<div class="author_select_bd author_select_pop_wrp">
  <div class="author_search_area">
    <mp-search
      ref="searchInput"
      placeholder='\u8BF7\u8F93\u5165\u8D5E\u8D4F\u8D26\u6237\u540D\u79F0\uFF0C\u8FDB\u884C\u67E5\u627E'
      :clear="showInputClear"
      v-model="innerSearchKey"
      @clear="clearAuthor"
      @search="searchAuthor"
      @input="searchInputChange"
      @focus="searchInputFocus"
      @blur="searchInputBlur"
      :class="['related-author__search ', innerWriter.hasAuthor ? 'author_active' : '']"></mp-search>
  </div>

  <div class="author_select_pop" v-show="showSearchPopover" ref="searchPopover">
    <!-- loading -->
    <div class="author_search_msg" v-if="loadingAuthor">
      <div class="weui-desktop-empty-tips"><i class="weui-desktop-loading"></i></div>
    </div>
    <!-- empty -->
    <div class="author_select_empty_data" v-if="showEmptyTips && searchResult.length == 0">
      <p class="weui-desktop-tips_warn">\u6CA1\u6709\u5728\u5DF2\u6388\u6743\u7684\u8D5E\u8D4F\u8D26\u6237\u4E2D\u627E\u5230\u6B64\u540D\u79F0</p>
      <div class="weui-desktop-tips">
        \u5982\u5DF2\u6709\u8D5E\u8D4F\u8D26\u6237\uFF0C\u8BF7\u5230
        <mp-popover wrap-class="author_card_popover" trigger="hover">
          <a href="javascript:void(0);" slot="target">\u8D5E\u8D4F\u8D26\u6237\u5C0F\u7A0B\u5E8F</a>
          <div slot="content">
            <p class="weui-desktop-tips author_card_qrcode_nickname">
              \u626B\u7801\u8FDB\u5165\u8D5E\u8D4F\u8D26\u6237\u5C0F\u7A0B\u5E8F
            </p>
            <img src="/mpres/zh_CN/htmledition/pages/modules/author_selector/image/reward_minigram_qr.png" class="author_card_qrcode">
            <div class="author_card_qrcode_desc"></div>
          </div>
        </mp-popover>
        >\u8D5E\u8D4F\u8D26\u6237\u8BBE\u7F6E>\u53EF\u6536\u6B3E\u516C\u4F17\u53F7 \u4E2D\u6DFB\u52A0\u672C\u516C\u4F17\u53F7\u3002

      </div>
      <div class="weui-desktop-tips" v-if="!!rewardAuthorTips" v-html="rewardAuthorTips"></div>
    </div>
    <!-- data -->
    <ul v-if="!loadingAuthor && searchResult.length > 0" class="author_select_list">
      <li
        :class="['author_select_item ', sr.author_status != 0 || sr.can_reward == 0 ? 'author_select_item_disabled' : '']"
        v-for="(sr, index) in searchResult"
        @mousedown="selectWriter(sr)">
        <strong class="author_nickname">{{sr.nickname}}</strong>
        <span class="author_avatar" :style="{ backgroundImage: 'url(' + sr.headimg + ')' }"></span>
        <span class="weui-desktop-tips author_status" v-if="sr.author_status != 0">\u4F5C\u8005\u88AB\u5C01\u7981</span>
        <span class="weui-desktop-tips author_status" v-if="sr.can_reward == 0">\u8D5E\u8D4F\u80FD\u529B\u88AB\u5C01\u7981</span>
      </li>
    </ul>
    <p class="author_select_tips" v-if="!loadingAuthor && searchResult.length > 0">
    \u53EF\u4EE5\u641C\u7D22\u5DF2\u7ECF\u6388\u6743\u7ED9\u4F60\u7684\u4F5C\u8005\uFF08\u5171{{canAuthorizeCount}}\u4E2A\uFF09
    </p>
  </div>
</div>`},"./src/pages/modules/auto_apply_list/auto_apply_list.js":function(d,p,o){"use strict";var _=v(o("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js"));var m=o("./src/pages/modules/utils/string.js");function v(i){return i&&i.__esModule?i:{default:i}}o("./src/pages/modules/auto_apply_list/auto_apply_list.less");var w=o("./src/pages/modules/auto_apply_list/auto_apply_list.tpl");var y=o("./src/pages/modules/common/emoji/emoji.js");var f=o("./src/pages/modules/common/emoji/emoji_data.js");var a={};for(var r=0;r<f.length;r++){a[f[r].style]=f[r].emoji||f[r].cn}var u=function i(e,t){var s=null;return function(){if(s){clearTimeout(s);s=null}s=setTimeout(function(){e()},t)}};_.default.component("mp-auto-apply-list",{template:w,props:{value:{type:String,default:""},status:{type:String,default:"choose"},dataList:{type:Array,default:function i(){return[]}},loading:{type:Boolean,default:false}},data:function i(){return{selectedIdx:-1,replyList:[],textClamp:[],clamp:3}},watch:{dataList:{immediate:true,handler:function i(e){var t=this;if(e){this.replyList=e.map(function(s){var n=Object.assign({},s);n.text=t._setContent(s.text);return n})}this.setSelectedIdx(this.value);this.$nextTick(function(){if(t.$refs.itemTextArea){t.listenHeightChange(t.$refs.itemTextArea);window.addEventListener("resize",u(function(){t.listenHeightChange(t.$refs.itemTextArea)},300))}})}},value:function i(e){this.setSelectedIdx(e)}},mounted:function i(){if(this.value){this.setSelectedIdx(this.value)}},methods:{setSelectedIdx:function i(e){this.selectedIdx=this.dataList.findIndex(function(t){return t.reply_id===e})},listenHeightChange:function i(e){var t=this;var s=0;this.replyList.forEach(function(n,c){var l=e[s++];if(!l){return}if(n.text){var h=l.dataset.id;if(l.scrollHeight>l.clientHeight){t.textClamp.splice(h,1,true)}else{t.textClamp.splice(h,1,false)}}else{t.textClamp.splice(c,1,false)}})},selectItem:function i(e){if(this.status==="edit"){return}if(this.selectedIdx!==e){this.selectedIdx=e;this.$emit("select",this.dataList[e]);this.$emit("input",this.dataList[e].reply_id)}else{this.selectedIdx=-1;this.$emit("select",null);this.$emit("input","")}},removeItem:function i(e,t){this.$emit("remove-reply",e);var s=this.$refs.removePop[t];s.show(false)},cancelRemove:function i(e){var t=this.$refs.removePop[e];t.show(false)},_setContent:function i(e){var t="";var s="";this.bakContent=e;e=this.linebreak?e.replace(/\n/g,"<br>"):e;s=this._textFilter(e).replace(/<br\s*\/*>/g,"\n");s=y(s).replace(/\n/g,"<br>");t=s;return t},_textFilter:function i(e){var t=document.createElement("div");var s="";var n=[];var c="";e=(0,m.htmlDecode)(e);t.innerHTML=(0,m.htmlEncode)(e);for(var l=t.childNodes.length-1;l>=0;l--){var h=t.childNodes[l];switch(h.nodeType){case 1:if(h.nodeName.toUpperCase()==="IMG"){s=h.getAttribute("class");if(s){n=s.split(" ");if(n.length>1&&n[0]==="icon_emotion_single"){c=a[n[1]];var g=document.createTextNode(c);t.replaceChild(g,h)}}}break;default:break}}e=t.innerHTML;t=null;return e}}})},"./src/pages/modules/auto_apply_list/auto_apply_list.less":function(d,p,o){"use strict";o.r(p)},"./src/pages/modules/auto_apply_list/auto_apply_list.tpl":function(d,p){d.exports=`<div class="auto-reply__list-wrp">
  <p class="list-loading" v-if="loading">
    <span class="weui-desktop-loading"></span>
  </p>
  <ul :class="['auto-reply__list',status]">
    <li class="auto-reply__item" :class="{'selected': selectedIdx === idx, 'disabled': false, 'auto-reply__audit-fail': item.audit_status === 1 && item.audit_fail_reason}" v-for="(item, idx) in replyList" :key="item.reply_id" @click="selectItem(idx)">
      <div class="auto-reply__inner" :class="{'without_image': !item.cdn_url}">
        <div class="auto-reply__hd">
          <p class="auto-reply__audit-fail-tips" v-if="item.audit_status === 1 && item.audit_fail_reason">{{ item.audit_fail_reason }}</p>
          <template v-if="item.text">
            <p class="auto-reply__text" :data-id="idx" ref="itemTextArea" v-html="item.text"></p>
          </template>
        </div>
        <div class="auto-reply__bd" v-if="!!item.cdn_url">
          <img class="auto-reply__cover" :class="{'auto-reply__img_has_text': item.text}" :src="item.cdn_url" />
        </div>
        <div class="auto-reply__ft" v-if="status == 'edit'">
          <mp-popover content="hover\u5185\u5BB9" trigger="click" ref="removePop">
            <mp-tooltip content="\u5220\u9664" position="down-center" :delay="300" slot="target">
              <button class="weui-desktop-icon-btn weui-desktop-opr-btn weui-desktop-opr-btn_primary" slot="target">
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="transparent" d="M0 0h24v24H0z"/><path d="M20.5 4.5a1.5 1.5 0 011.493 1.356L22 6h-3.095L18 20.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 20.5L5.093 6H2a1.5 1.5 0 011.5-1.5h17zm-3 1.5h-11l1 14.5h9l1-14.5zm-7 2l.5 10H9.5L9 8h1.5zM15 8l-.5 10H13l.5-10H15zm-1.5-6a1.5 1.5 0 011.493 1.356L15 3.5H9A1.5 1.5 0 0110.5 2h3z" fill="#4C4D4E"/></g></svg>
              </button>
            </mp-tooltip>
            <p slot="content">\u786E\u8BA4\u5220\u9664\u672C\u6761\u8D5E\u8D4F\u81EA\u52A8\u56DE\u590D\u5185\u5BB9\uFF1F</p>
            <template slot="bar">
              <mp-button type="primary" @click="removeItem(item.reply_id, idx)">\u786E\u5B9A</mp-button>
              <mp-button type="default" @click="cancelRemove(idx)">\u53D6\u6D88</mp-button>
            </template>
          </mp-popover>
        </div>
      </div>
    </li>
  </ul>
</div>`}}]);
