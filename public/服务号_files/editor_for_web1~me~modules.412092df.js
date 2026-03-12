(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/modules~advanced/menusetting/menusetting~comment/comment_list/comment_list~editor/editor_for_web1~me~modules"],{"./src/pages/modules/emoji_panel/emoji_panel.js":function(m,h,r){var j=r("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var y=r("./src/pages/modules/common/emoji/emoji_data.js");var _=r("./src/pages/modules/emoji_panel/emoji_panel_data.js");var b=r("./src/pages/modules/emoji_panel/emoji_panel.tpl");r("./src/pages/modules/emoji_panel/emoji_panel.less");j.component("mp-emoji-panel",{template:b,props:{emojiheight:{type:Number,default:21.25},rowcount:{type:Number,default:16},columncount:{type:Number,default:9},extclass:{type:String,defalut:""},showtype:{type:String,defalut:"click"},delay:{type:Number,default:1e3},position:{type:String,default:"up-left"},selectHide:{type:Boolean,default:false}},data:function u(){var c=this.emojiheight;var p=this.rowcount;var T=this.columncount;var g=[];for(var v=0;v<_.length;v++){for(var d=0;d<y.length;d++){if(y[d].id===_[v]){g[v]=y[d];break}}}var C=[];for(var w=0;w<T;w++){for(var f=0;f<p;f++){var i=w*p+f;if(g[i]){C.push({name:g[i].style,title:g[i].emoji?g[i].emoji:g[i].cn,bp:"background-position: 0 -".concat(i*c,"px;")})}}}return{edata:C,emojiPanelPopoverShow:false}},mounted:function u(){if(this.showtype==="click"){document.addEventListener("click",this.handleDocumentClick)}},methods:{select:function u(c){this.$emit("select",{name:this.edata[c].name,title:this.edata[c].title,emojiHtml:'<img src="/mpres/zh_CN/htmledition/comm_htmledition/images/pic/common/pic_blank.gif"\n          class="icon_emotion_single '.concat(this.edata[c].name,'" alt="mo-').concat(this.edata[c].title,'"></img>')});this.selectHide&&this.hide()},show:function u(){this.emojiPanelPopoverShow=true},hide:function u(){this.emojiPanelPopoverShow=false},handleDocumentClick:function u(c){var p=null;if(this.$slots.target&&this.$slots.target[0]){p=this.$slots.target[0].elm}if(!p||!this.$el||this.$el.contains(c.target)||p.contains(c.target)||!this.$refs.emojiPanelPopover)return;this.hide()},beforeDestroy:function u(){document.removeEventListener("click",this.handleDocumentClick)}}})},"./src/pages/modules/emoji_panel/emoji_panel.less":function(m,h,r){"use strict";r.r(h)},"./src/pages/modules/emoji_panel/emoji_panel.tpl":function(m,h){m.exports=`<mp-popover :trigger="showtype" :position="position" wrap-class="weui-desktop-popover_emoji" :delay="delay" ref="emojiPanelPopover" v-model="emojiPanelPopoverShow">
  <template slot="target">
    <slot name="target"></slot>
  </template>
  <ul class="emotions" slot="content">
    <li class="emotions_item" v-for="(item, index) in edata" @click="select(index)">
      <span class="icon_emotion_sprite js_emotion_i" :style='item.bp'></span>
    </li>
  </ul>
</mp-popover>
`},"./src/pages/modules/emoji_panel/emoji_panel_data.js":function(m,h){var r=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,"17_1",18,19,20,21,22,23,25,26,27,28,29,30,31,32,33,34,36,37,38,39,40,41,42,44,45,46,47,48,49,50,51,52,54,300,301,302,303,304,305,306,307,204,205,202,206,212,211,313,314,315,316,317,318,319,320,321,322,323,330,329,328,327,326,325,65,66,67,78,79,80,81,82,83,84,85,89,309,310,56,57,60,68,63,64,55,70,74,75,76,311,77,209,324,215,62,308,92,93,94,95];m.exports=r},"./src/pages/modules/reply/reply.js":function(m,h,r){var j=r("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");r("./src/pages/modules/emoji_panel/emoji_panel.js");r("./src/pages/modules/media_dialog/image_dialog/image_dialog.js");r("./src/pages/modules/reply/reply.less");var y=r("./src/pages/modules/common/emoji/emoji.js");var _=r("./src/pages/modules/reply/reply.tpl");var b=r("./src/pages/modules/common/emoji/emoji_data.js");var u=r("./src/pages/modules/utils/str_util.js");var c=/msie/.test(navigator.userAgent.toLowerCase());var p=function i(){return document.selection?document.selection:(window.getSelection||document.getSelection)()};var T=function i(e,t,n){if(!n&&e===t)return false;if(e.compareDocumentPosition){var o=e.compareDocumentPosition(t);if(o===20||o===0)return true}else{if(e.contains(t))return true}return false};var g=function i(e,t){var n=t.commonAncestorContainer||t.parentElement&&t.parentElement()||null;return n?T(e,n,true):false};var v=function i(e){var t=p();if(!t)return null;var n;if(t.getRangeAt&&t.rangeCount){n=t.getRangeAt(0)}else if(!t.getRangeAt){n=t.createRange()}if(!n)return null;if(e&&g(e,n))return n;if(!e)return n;return null};var d=function i(e,t){var n=["&#96;","`","&#39;","'","&quot;",'"',"&nbsp;"," ","&gt;",">","&lt;","<","&yen;","\xA5","&amp;","&"];var o=["&","&amp;","\xA5","&yen;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;","`","&#96;"];var s;if(t){s=o}else{s=n}for(var a=0;a<s.length;a+=2){e=e.replace(new RegExp(s[a],"g"),s[a+1])}return e};var C=function i(e){return!String.prototype.trim?e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""):String.prototype.trim.call(e)};var w={};for(var f=0;f<b.length;f++){w[b[f].style]=b[f].emoji||b[f].cn}j.component("mp-reply",{template:_,props:{extclass:{type:String,default:""},limit:{type:Number,default:140},ishtml:{type:Boolean,default:true},hasPic:{type:Boolean,default:false},linebreak:{type:Boolean,default:true},hidden:{type:Boolean,default:false},entertype:{type:Number,default:0},source:{type:String,default:""},content:{type:String,default:""},notEncodeHtml:{type:Boolean,default:false},disabled:{type:Boolean,default:false},disabledTips:{type:String,default:""},placeholder:{type:String,default:""},countContentByLang:{type:Boolean,default:false},limitTipSimple:{type:Boolean,default:false},emojiPanelPosition:{type:String,default:"up-left"},emojiSelectHide:{type:Boolean,default:false},inChatMsg:{type:Boolean,default:false}},model:{prop:"content",event:"change"},data:function i(){var e=this._setContent();return{lastRange:null,count:0,innerhidden:this.hidden,parsedContent:e,bakContent:this._textFilter(this.content),notRender:false,imgDropdownVisible:false,imgOpts:[{label:"\u4ECE\u56FE\u7247\u5E93\u9009\u62E9",value:"lib",path:""},{label:"\u672C\u5730\u4E0A\u4F20",value:"upload",path:""}]}},computed:{style:function i(){var e={};e.display=this.innerhidden?"none":"block";return e},contentCount:function i(){var e=this.bakContent.replace(/<br\s*\/*>/g,"");e=this.countContentByLang?u.getWordCountContent(e):e;return u.mmGetUTF8Num(e.replace(/\n/g,"")).utf8Len},remain:function i(){return this.limit-this.contentCount}},watch:{content:function i(){var e=this._setContent();if(!this.notRender){this.parsedContent=e;if(this.$refs.editArea){this.$refs.editArea.innerHTML=e}}}},mounted:function i(){document.addEventListener("click",this.handleDocumentClick,true)},beforeDestroy:function i(){document.removeEventListener("click",this.handleDocumentClick,true)},methods:{_saveRange:function i(){this.lastRange=v()},_restoreRange:function i(){var e=this.lastRange;if(e){var t=p();if(t.addRange){t.removeAllRanges();t.addRange(e)}else{var n=v();if(n.setEndPoint){n.setEndPoint("EndToEnd",e);n.setEndPoint("StartToStart",e)}n.select()}}},select:function i(e){if(!this.disabled){this.insertHtml(e.emojiHtml)}},selectImage:function i(e){if(!this.disabled){if(this.$listeners&&this.$listeners.selectimg){this.$emit("selectimg",e);return}var t="";e.forEach(function(n){if(n.url){t+='<img class="edit_upload_img" src="'.concat(n.url,'" />')}});this.insertHtml(t)}},uploadImgComplete:function i(e,t){this.selectImage([{url:t.cdn_url,fileId:t.content}])},uploadError:function i(e,t){this.$emit("uploaderror",e,t)},uploadProgress:function i(e,t){this.$emit("uploadprogress",e,t)},showImageDialog:function i(){if(!this.disabled){this.$refs.imageDialog.show()}},getHtml:function i(){var e=this.$refs.editArea.innerHTML;if(typeof e==="string"){e=C(e)}else{e=""}return e},getText:function i(){return this.getContent().replace(/<br\s*\/*>/g,"\n")},getContent:function i(){var e=this.bakContent;if(typeof e==="string"){e=C(e)}else{e=""}return e},setContent:function i(e){var t=e||"";t=this.linebreak?t.replace(/\n/g,"<br>"):t;e=y(t);t=d(t,false);this.clear();var n=y(d(this._textFilter(e).replace(/<br\s*\/*>/g,"\n"),true)).replace(/\n/g,"<br>");this.$refs.editArea.innerHTML=d(n,false);this.content=n},_setContent:function i(){var e="";var t=this.content;var n="";this.bakContent=this._textFilter(this.content);t=this.linebreak?t.replace(/\n/g,"<br>"):t;n=this._textFilter(t).replace(/<br\s*\/*>/g,"\n");if(!this.notEncodeHtml){n=d(n.replace(/<br\s*\/*>/g,"\n"),true)}n=d(n.replace(/&#60;|&#62;/ig,function(o){return{"&#60;":"<","&#62;":">"}[o]}));n=y(n).replace(/\n/g,"<br>");e=n;return e},clear:function i(){this.$refs.editArea.innerHTML="";this.$emit("change","")},blur:function i(){var e=this;this.notRender=false;this.$nextTick(function(){e.$refs.editArea.blur()})},focus:function i(e){var t=this;this.$nextTick(function(){t.$refs.editArea.focus();t._restoreRange();typeof e==="function"&&e()})},insertHtml:function i(e){var t=this;this.focus(function(){var n=v();if(!n)return;if(n.createContextualFragment){e+='<img style="width:1px;height:1px;"></img>';var o=n.createContextualFragment(e);var s=o.lastChild;var a=p();n.deleteContents();n.insertNode(o);n.setStartBefore(s);n.setEndAfter(s);try{var l=s.offsetTop<t.$refs.editArea.scrollTop+10;var x=s.offsetTop+20>t.$refs.editArea.scrollTop+t.$refs.editArea.clientHeight;if(l||x){var R=s.offsetTop-t.$refs.editArea.clientHeight/2+10;window.requestAnimationFrame(function(){t.$refs.editArea.scrollTop=R})}}catch(E){}a.removeAllRanges();a.addRange(n);document.execCommand("Delete",false,null)}else{if(e&&n.pasteHTML){n.pasteHTML(e)}n.collapse&&n.collapse(false);n.select()}t._saveRange();t.save()})},_xssFilter:function i(e){return typeof e==="string"?e.replace(/<|>/g,function(t){return{"<":"&#60;",">":"&#62;"}[t]}):e},_textFilter:function i(e){var t=document.createElement("div");var n="";var o=[];var s="";t.innerHTML=e;for(var a=t.childNodes.length-1;a>=0;a--){var l=t.childNodes[a];switch(l.nodeType){case 1:if(l.nodeName.toUpperCase()==="IMG"){n=l.getAttribute("class");if(n){o=n.split(" ");if(o.length>1&&o[0]==="icon_emotion_single"){s=w[o[1]];var x=document.createTextNode(s);t.replaceChild(x,l)}}}break;default:break}var R=l.nodeValue;l.nodeValue=this._xssFilter(R)}e=t.innerHTML;t=null;if(!this.notEncodeHtml){e=d(e,false)}return this.ishtml?e:e.replace(/<br.*?>/ig,"\n").replace(/<.*?>/g,"")},_filterNode:function i(){var e=this.$refs.editArea;var t;for(var n=e.childNodes.length-1;n>=0;n--){var o=e.childNodes[n];switch(o.nodeType){case 1:if(o.nodeName.toUpperCase()!=="BR"){var s=void 0;var a=false;if(o.nodeName.toUpperCase()==="IMG"&&o.classList.contains("icon_emotion_single")){s=o}else{s=""}if(!s){s=o.textContent||o.innerText||"";a=true}if(s){var l=a?document.createTextNode(s):s;if(!t){t=l}e.replaceChild(l,o)}else{e.removeChild(o)}}break;case 3:break;default:e.removeChild(o)}}this._setCursorToEnd(t)},_setCursorToEnd:function i(e){if(!c||!e)return;var t=p();if(t.extend){t.extend(e,e.length);t.collapseToEnd&&t.collapseToEnd()}},getAfterFilterNodeHtml:function i(){var e=document.createElement("div");var t="";e.innerHTML=this.$refs.editArea.innerHTML;for(var n=e.childNodes.length-1;n>=0;n--){var o=e.childNodes[n];switch(o.nodeType){case 1:if(o.nodeName.toUpperCase()!=="BR"){var s=void 0;var a=false;if(o.nodeName.toUpperCase()==="IMG"){s=o}else{s=""}if(!s){s=o.textContent||o.innerText||"";a=true}if(s){var l=a?document.createTextNode(s):s;e.replaceChild(l,o)}else{e.removeChild(o)}}break;case 3:break;default:e.removeChild(o)}}t=e.innerHTML;return t},save:function i(){document.execCommand("AutoUrlDetect",false,false);var e=this.getAfterFilterNodeHtml();this.$emit("change",this._textFilter(e));this.bakContent=this._textFilter(e)},keydownEnter:function i(e){if(e.keyCode!==229){if(e.altKey||e.ctrlKey||e.shiftKey)return;if(this.entertype===0){this.insertHtml("<br/>");this._saveRange()}else{this.$refs.editArea&&this.$refs.editArea.blur();this._filterNode();this.$emit("enter")}}},keydownShiftEnter:function i(){if(this.entertype===1){this.insertHtml("<br/>");this._saveRange()}},keyup:function i(){this._saveRange();this.save()},compositionend:function i(){this._saveRange();this.save()},mouseup:function i(){this._saveRange();this.save()},drop:function i(){var e=this;this.timer&&clearTimeout(this.timer);this.timer=setTimeout(function(){e._filterNode();e._saveRange();e.save()},10)},paste:function i(){var e=this;this.timer&&clearTimeout(this.timer);this.timer=setTimeout(function(){e._filterNode();e._saveRange();e.save()},10)},hide:function i(){this.innerhidden=true},show:function i(){var e=this;this.innerhidden=false;this.$nextTick(function(){var t=20;var n=64;var o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;var s=e.$refs.replyRef.getBoundingClientRect();var a=-1;if(s.top<0){a=Math.max(o+s.top-t,0)}else if(s.bottom>window.innerHeight-n){a=o+s.bottom-window.innerHeight+t+n}if(a!==-1){try{typeof window.scrollTo==="function"&&window.scrollTo({top:a,left:0,behavior:"smooth"})}catch(l){console.error(l);if(document.documentElement.scrollTop){document.documentElement.scrollTop=a}else if(document.body.scrollTop){document.body.scrollTop=a}}}})},isHidden:function i(){return this.innerhidden},showImgDropdown:function i(){this.imgDropdownVisible=true},hideImgDropdown:function i(){this.imgDropdownVisible=false},handleDocumentClick:function i(e){if(!this.$refs.imgDropdownRef||this.$refs.imgDropdownRef.$el.contains(e.target)){return}this.hideImgDropdown()},onImgDropdownMenuSelect:function i(e){this.hideImgDropdown();if(e.value==="lib"){this.showImageDialog();return}if(e.value==="upload"){this.$refs.uploadImgRef.openFileSelectWin()}}}})},"./src/pages/modules/reply/reply.less":function(m,h,r){"use strict";r.r(h)},"./src/pages/modules/reply/reply.tpl":function(m,h){m.exports=`<!-- <div class="quick_reply_box jsReplyBox" :style="style">
    <label for="" class="frm_label">{label}</label>
    <div class="emoion_editor_wrp jsReplyEditor"></div>
    <p class="quick_reply_box_tool_bar">
        <span class="btn btn_primary btn_input jsReplySend" >
            <button >\u53D1\u9001</button>
        </span>
        <a class="btn btn_default pickup jsReplyCancel" href="javascript:;">\u6536\u8D77</a>
    </p>
</div> -->

<div ref="replyRef" :style="style">
  <div class="emoion_editor_wrp">
    <div class="emotion_editor" :disabled="disabled">
      <!-- \u7F16\u8F91\u533A\u57DF -->
      <div class="edit_area"
        :contenteditable="!disabled"
        :placeholder="placeholder"
        ref="editArea"
        @keyup="keyup"
        @keydown.enter.prevent="keydownEnter"
        @keydown.shift.enter.prevent="keydownShiftEnter"
        @compositionend="compositionend"
        @mouseup="mouseup"
        @drop="drop"
        @paste="paste"
        @focus="notRender = true"
        @blur="blur"
        v-html="parsedContent"
      ></div>
      <!-- \u7F16\u8F91\u533A\u57DF\u540E\u7684\u63D0\u793A -->
      <slot name="inputTips"></slot>
      <!-- \u8868\u60C5/\u63D0\u793A\u533A\u57DF -->
      <div class="editor_toolbar" :class="{'editor_toolbar_in_msg': inChatMsg}">
        <slot name="editorHeads"></slot>

        <mp-emoji-panel
          :position="emojiPanelPosition"
          :selectHide="emojiSelectHide"
          class="emoji-panel__wrp"
          showtype="click"
          ref="emojiPanelPopover"
          @select="select"
        >
          <a href="javascript:void(0);" class="icon_emotion emotion_switch" slot="target">
            <i>\u8868\u60C5</i>
          </a>
        </mp-emoji-panel>

        <a v-if="hasPic" @click.stop.prevent="showImgDropdown" class="icon_pic">
          <i>\u56FE\u7247</i>
          <img class="icon_pic__arrow" src="data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='11.364' height='6.364' viewBox='0 0 11.364 6.364'>  <path fill='%237E8081' fill-rule='evenodd' d='M10.657 0l.707.707-5.657 5.657-.025-.026-.025.026L0 .707.707 0l4.975 4.975L10.657 0z'/></svg>">
        </a>

        <mp-dropdown-menu
          :options="imgOpts"
          :visible="imgDropdownVisible"
          ref="imgDropdownRef"
          @select="onImgDropdownMenuSelect"
          style="width: 130px; left: 52px;"
        ></mp-dropdown-menu>

        <!-- \u53F3\u4E0B\u89D2\u63D0\u793A\u533A\u57DF -->
        <slot name="editorTips"></slot>

        <!-- \u5B57\u6570\u9650\u5236\u63D0\u793A -->
        <template v-if="limit > 0 && !disabled && !$scopedSlots.editorTips">
          <template v-if="limitTipSimple">
            <p class="editor_tip" :class="{'warn': contentCount > limit}">{{contentCount}}/{{limit}}</p>
          </template>
          <template v-else="limitTipSimple">
            <p class="editor_tip opr_tips" v-if="entertype == 0">\uFF0C\u6309\u4E0BEnter\u952E\u6362\u884C</p>
            <p class="editor_tip opr_tips" v-else-if="entertype == 1">\uFF0C\u6309\u4E0BShift+Enter\u952E\u6362\u884C</p>
            <p class="editor_tip" v-if="remain >= 0">\u8FD8\u53EF\u4EE5\u8F93\u5165<em>{{remain}}</em>\u5B57</p>
            <p class="editor_tip warn" v-else>\u5DF2\u8D85\u51FA<em>{{-remain}}</em>\u5B57</p>
          </template>
        </template>

        <slot name="extendTips"></slot>

        <template v-if="disabled && disabledTips">
          <p class="editor_tip opr_tips">{{disabledTips}}</p>
        </template>

        <div class="emotion_wrp"></div>
      </div>
    </div>
  </div>

  <slot name="imgVerifyCode"></slot>

  <slot name="bar"></slot>

  <mp-image-dialog v-if="hasPic" ref="imageDialog" :uploadscene="6" @select="selectImage">
    <template slot="uploadTips">\u5927\u5C0F\u4E0D\u8D85\u8FC710M</template>
  </mp-image-dialog>

  <mp-upload
    url="uploadImageLibFile"
    :maxsize="10*1024*1024"
    :query="{writetype: 'doublewrite', groupid: 1, scene: 5}"
    :preview="null"
    ref="uploadImgRef"
    @complete="uploadImgComplete"
    @error="uploadError"
    @progress="uploadProgress"
  >
    <template slot="button">
      <a href="javascript:;" class="weui-desktop-create-access__link" style="display: none;">\u4E0A\u4F20\u56FE\u7247</a>
    </template>
  </mp-upload>
</div>
`}}]);
