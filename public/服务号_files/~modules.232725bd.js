(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages/modules~comment/comment_list/comment_list~editor/editor_for_web1~mass/massSend4Web1~media/video_add/~modules"],{"./src/pages/modules/media_dialog/video_dot/video_dot.js":function(f,w,o){var T=o("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");o("./src/pages/modules/media_dialog/video_dot/video_dot.less");o("./src/pages/modules/media_dialog/video_time_picker/video_time_picker.js");o("./src/pages/modules/media_dialog/video_popup/video_popup.js");var x=o("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");var _=o("./src/pages/modules/media_dialog/video_dot/video_dot.tpl");var m="PAUSE";var d="PLAY";var r="ENDED";var i=153;function n(s){var a=Math.floor(s%60);var p=Math.floor(s/60%60);var u=Math.floor(s/3600);u=u>0?u+":":"";p=(p<10?"0"+p:p)+":";a=a<10?"0"+a:a;return u+p+a}T.component("mp-video-dot",{template:_,model:{prop:"parentDotTime",event:"change"},props:{videoinfo:{type:Object,default:null},parentDotTime:{type:Number,default:0},pasterInfo:{type:Object,default:function s(){return{}}},tips:{type:String,default:""},pasterMinBeginTime:Number,pasterMaxBeginTimeToEnd:Number,videoPasterShowTime:Number},data:function s(){return{dialogShow:true,showLoading:true,videoState:m,currentTime:"00:00",duration:"0:00",currentPlayPercent:0,previousVideoState:"",dotTime:this.parentDotTime,hasDot:false,canDot:false,isDragging:false,videoUrl:"",showVideoPaster:false,showUploadTipsStatus:true,showBelowTimePopover:false,hasShowBelowTimePopover:false,hasAutoScroll:false}},watch:{value:function s(a){if(a===true){this.show()}else{this.hide()}},dotTime:function s(a){var p=Number(a);if(p>=this.pasterMinBeginTime&&p<=this.videoinfo.play_length-this.pasterMaxBeginTimeToEnd){this.setChoosePlace(p);var u=Number(p.toFixed(1));this.$emit("change",{beginTime:u,endTime:u+this.videoPasterShowTime})}},dialogShow:function s(a){this.$emit("input",a)},currentTime:function s(){var a=this.video.currentTime;var p=this.dotTime;this.showVideoPaster=!!(p&&a>=p&&a<=p+this.videoPasterShowTime);this.showBelowTimePopover=a<this.pasterMinBeginTime&&!this.hasShowBelowTimePopover;if(!this.showBelowTimePopover){this.hasShowBelowTimePopover=true}}},computed:{timePickerCanInput:function s(){return this.videoState!==d},videoPasterWidthInProgressBar:function s(){return this.videoPasterShowTime/this.videoinfo.play_length*i+"px"},forbidWidthInProgressFromStart:function s(){return this.pasterMinBeginTime/this.videoinfo.play_length*i+"px"},forbidWidthInProgressToEnd:function s(){return this.pasterMaxBeginTimeToEnd/this.videoinfo.play_length*i+"px"},skipToTipsWord:function s(){return"\u8DF3\u5230\u7B2C%s\u79D2".replace("%s",this.pasterMinBeginTime)},showPasterMinLimitPopoverWord:function s(){return"\u7B2C%s\u79D2\u8D77\u624D\u80FD\u8BBE\u7F6E\u8D34\u7247".replace("%s",this.pasterMinBeginTime)},setPasterBtnWord:function s(){var a="\u524D%s\u79D2\u4E0D\u80FD\u8D34\u7247".replace("%s",this.pasterMinBeginTime);var p="\u540E%s\u79D2\u4E0D\u80FD\u8D34\u7247".replace("%s",this.pasterMaxBeginTimeToEnd);var u=this.video&&this.video.currentTime>this.pasterMinBeginTime?p:a;return this.canDot?"\u5728\u6B64\u65F6\u51FA\u73B0\u8D34\u7247":u},playBtnWord:function s(){return this.videoState!==d?"\u64AD\u653E":"\u6682\u505C"}},mounted:function s(){this.init();window.addEventListener("mouseup",this.mouseup);this.dotTime&&this.setChoosePlace(this.dotTime)},methods:{setChoosePlace:function s(a){this.currentPlayPercent=a/this.videoinfo.play_length;var p=i*this.currentPlayPercent;this.$refs.choosePlace.style.display="block";this.$refs.choosePlace.style.left=p+"px"},show:function s(){if(this.dialogShow===true){return}this.dialogShow=true},init:function s(){var a=this;this.video=this.$refs.videoPlayer;var p=this.videoinfo.video_id;x.get({url:"/cgi-bin/video?action=get_mp_video_play_url",data:{vid:p}},function(u){if(u.base_resp.ret===0&&u.url_info){var k=u.url_info[0].url||"";a.videoUrl=k.replace(/^http(s)?:/,location.protocol)}})},getPlayurlByVid:function s(a,p,u,k,R){R=R===true;u=u||500;k=k||375;if(p){return"https://mp.weixin.qq.com/mp/readtemplate?t=pages/video_player_tmpl&action=mpvideo&auto=0&vid=".concat(a)}if(R){return"https://v.qq.com/txp/iframe/player.html?vid="+a+"&width="+u+"&height=auto"}return"https://v.qq.com/txp/iframe/player.html?width="+u+"&height="+k+"&auto=0&vid="+a},canplay:function s(){this.showLoading=false},statePlay:function s(){this.videoState=d},statePause:function s(){this.videoState=m},stateEnded:function s(){this.videoState=r},durationchange:function s(){this.videoDuration=this.video.duration;this.duration=n(this.video.duration)},playVideo:function s(){if(this.videoState===m||this.videoState===r){this.video.play()}else{this.video.pause()}},mousedown:function s(){this.isDragging=true;this.previousVideoState=this.videoState;this.video.pause()},mousemove:function s(a,p){var u;if(this.isDragging){if(p){u=a.offsetX+this.$refs.choosePlace.offsetLeft}else{u=a.offsetX}this.setCurrentTime(u);this.setProgressBar(u)}},chosePlaceMouseMove:function s(a){a.stopPropagation();this.mousemove(a,true)},mouseup:function s(){if(this.previousVideoState===d&&this.isDragging===true){this.video.play()}this.isDragging=false},timeupdate:function s(){var a=this.video.currentTime;if(a>=this.pasterMinBeginTime&&a<=this.video.duration-this.pasterMaxBeginTimeToEnd){this.canDot=true}else{this.canDot=false}this.currentPlayPercent=this.video.currentTime/this.video.duration;var p=i*this.currentPlayPercent;this.currentTime=n(this.video.currentTime);this.setProgressBar(p)},setCurrentTime:function s(a){this.video.currentTime=a/i*this.video.duration;this.currentTime=n(this.video.currentTime)},setProgressBar:function s(a){if(this.$refs.currentPlayProgress){this.$refs.currentPlayProgress.style.width=a+"px"}if(this.$refs.currentPlayDot){this.$refs.currentPlayDot.style.left=a-5+"px"}},inputDot:function s(){if(this.canDot){this.hasDot=true;this.dotTime=this.video.currentTime;this.video.pause();this.showVideoPaster=true}else{this.$tipsErr("\u5F53\u524D\u753B\u9762\u6240\u5728\u65F6\u95F4\u70B9\u4E0D\u652F\u6301\u8D34\u7247")}},handleProgress:function s(a,p){var u;if(p){u=a.offsetX+this.$refs.choosePlace.offsetLeft}else{u=a.offsetX}this.setCurrentTime(u);this.setProgressBar(u);if(this.videoState===d){this.video.play()}},skipTo:function s(){this.video.currentTime=this.pasterMinBeginTime},onFocus:function s(){if(this.hasAutoScroll){return}this.hasAutoScroll=true;if(document.body.scrollIntoView){this.$refs.videoContainer.scrollIntoView({behavior:"smooth",block:"center"});return}this.$emit("focus")}}})},"./src/pages/modules/media_dialog/video_dot/video_dot.less":function(f,w,o){"use strict";o.r(w)},"./src/pages/modules/media_dialog/video_dot/video_dot.tpl":function(f,w){f.exports=`<div class="wxapp__dialog__video__dot__dialog__container">
  <mp-video-time-picker
    v-model="dotTime"
    :duration="this.videoDuration"
    :paster-min-begin-time="pasterMinBeginTime"
    :paster-max-begin-time-to-end="pasterMaxBeginTimeToEnd"
    :time-picker-can-input="timePickerCanInput"
    @focus="onFocus"
  />
  <p class="frm_msg frm_tips">{{ tips }}</p>
  <div class="video-player" id="videoContainer" ref="videoContainer">
    <!--showLoading-->
    <div class="video-player__loading" v-if="false">\u52A0\u8F7D\u4E2D...</div>
    <template v-else>
      <!--controls \u9690\u85CF\u63A7\u5236\u6761-->
      <div class="video-player__video__container">
        <video id="video"
          class="video-player__video"
          width="580px"
          height="280px"
          preload
          @canplay="canplay"
          @play="statePlay"
          @pause="statePause"
          @ended="stateEnded"
          @durationchange="durationchange"
          @timeupdate="timeupdate"
          ref="videoPlayer"
          muted
          :src="videoUrl"
          :poster="videoinfo.cover"
        ></video>
        <div class="video-player__video__popup__container">
          <!--<p class="video-player__video__popup">\u98D8\u51FA</p>-->
          <mp-video-popup
            :title="pasterInfo.dot.title"
            :desc="pasterInfo.dot.desc"
            :avatar="pasterInfo.dot.avatar"
            :isShow="showVideoPaster"></mp-video-popup>
        </div>
      </div>
      <div class="video-player__video__controller" id="videoControls"> 
        <div class="video-player__video__controller__inner" id="progressWrap">  
            <!--\u64AD\u653E \u52A0className play-->
            <!--\u64AD\u653E \u52A0className pause-->
            <button
              class="video-player__video__controller__item video-player__video__controller__item__play play"
              :class="{play: videoState !== 'PLAY', pause: videoState === 'PLAY'}"
              id="playBtn"
              :title="playBtnWord"
              @click="playVideo"
            ></button>
            <div class="video-player__video__controller__item video-player__video__controller__item__current-time">{{ currentTime }}</div>
            <div
              class="video-player__video__controller__item video-player__video__controller__item__container progress-container"
              @mousemove="mousemove"
            >
              <mp-popover class="video-player__video__popover"
                position="down-center"
                v-model="showBelowTimePopover"
                style="top: 20px;"
                :width="265">
                <template slot="content">
                  <p>{{ showPasterMinLimitPopoverWord }} <a href="javascript:;" @click="skipTo">{{ skipToTipsWord }}</a></p>
                </template>
              </mp-popover>
              <div class="video-player__video__progress__item video-player__video__progress__item__progress play-progress" ref="playProgress" @click="handleProgress">
                <!--todo: \u6807\u5FD7\u524D10\u79D2\u4E0D\u53EF\u9009\u533A-->
                <span class="video-player__video__progress__item__progress__forbid video-player__video__progress__item__progress__forbid-before" :style="{left: forbidWidthInProgressFromStart}"></span>
                <!--todo: \u6807\u5FD7\u524D15\u79D2\u4E0D\u53EF\u9009\u533A-->
                <span class="video-player__video__progress__item__progress__forbid video-player__video__progress__item__progress__forbid-after" :style="{right: forbidWidthInProgressToEnd}"></span>
              </div>
              <!--\u64AD\u653E\u8FDB\u5EA6\uFF0C\u66F4\u65B0\u8FD9\u4E2A\u5143\u7D20\u7684width-->
              <div class="video-player__video__progress__item video-player__video__progress__item__current-play current-play-progress" ref="currentPlayProgress" @click="handleProgress">
              </div>
              <!--\u63A7\u5236\u8FDB\u5EA6\u7684\u5927\u5706\u70B9-->
              <div class="video-player__video__progress__item video-player__video__progress__item__current-play-dot current-play-dot" ref="currentPlayDot" @mousedown="mousedown" @mousemove="(e) => {e.stopPropagation()}"></div>
              <!--\u8D34\u7247\u64AD\u653E\u4F4D\u7F6E
              \u66F4\u65B0\u5143\u7D20\u7684left \u548C width-->
              <div class="video-player__video__progress__item video-player__video__progress__item__choose-place choose-place" :style="{width: videoPasterWidthInProgressBar}" :class="{ show: hasDot }" ref="choosePlace" @mousemove="chosePlaceMouseMove" @click="(e) => handleProgress(e, true)"></div>
          </div>
            <div class="video-player__video__controller__item video-player__video__controller__item__duration">{{ duration }} </div>
            <mp-button class="video-player__video__controller__item" type="primary" :disabled="!canDot" @click="inputDot">{{ setPasterBtnWord }}</mp-button>
        </div>
        
      </div>
    </template>
  </div>
</div>



`},"./src/pages/modules/media_dialog/video_popup/video_popup.js":function(f,w,o){var T=o("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");o("./src/pages/modules/media_dialog/video_popup/video_popup.less");var x=o("./src/pages/modules/media_dialog/video_popup/video_popup.tpl");T.component("mp-video-popup",{template:x,props:{title:{type:String,default:"\u8D34\u7247\u6807\u9898"},desc:{type:String,default:"\u8D34\u7247\u63CF\u8FF0"},avatar:{type:String,default:""},isShow:{type:Boolean,default:false}},data:function _(){return{}}})},"./src/pages/modules/media_dialog/video_popup/video_popup.less":function(f,w,o){"use strict";o.r(w)},"./src/pages/modules/media_dialog/video_popup/video_popup.tpl":function(f,w){f.exports=`<div class="paster_content content_paster_for_android">
  <div class="paster_container paster_store" :class="{'paster_show': isShow, 'paster_hide': !isShow}" id="js_paster_container">
    <div class="paster_store_container">
        <!--\u4E3B\u8981\u5185\u5BB9-->
        <div class="paster_store_main">
          <span
            class="paster_store_avatar"
            id="js_paster_avatar"
            :style="{'background-image': 'url(' + avatar + ')'}"
          ></span>
          <div class="paster_store_content">
            <p class="paster_store_title">
              <span class="paster_store_title_inner" id="js_paster_title">{{title}}</span>
            </p>
            <p class="paster_store_desc" id="js_paster_desc">{{desc}}</p>
          </div>
        </div>
        <!--\u6269\u5C55\u64CD\u4F5C-->
        <span href="javascript:;" class="paster_store_extend js_paster_store_extend"></span>
    </div>
  </div>
</div>`},"./src/pages/modules/media_dialog/video_time_picker/video_time_picker.js":function(f,w,o){var T=o("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");o("./src/pages/modules/media_dialog/video_time_picker/video_time_picker.less");var x=o("./src/pages/modules/media_dialog/video_time_picker/video_time_picker.tpl");T.component("mp-video-time-picker",{model:{prop:"dotTime",event:"change"},props:{dotTime:Number,duration:Number,pasterMinBeginTime:Number,pasterMaxBeginTimeToEnd:Number,timePickerCanInput:Boolean},template:x,data:function _(){return{minutes:"",seconds:"",isMinutesError:false,minutesErrorTips:"",isSecondsError:false,timeErrorTips:""}},watch:{dotTime:function _(m){this.computeTime(m)}},mounted:function _(){this.dotTime&&this.computeTime(this.dotTime)},methods:{computeTime:function _(m){var d=Math.floor(m/60);var r=(m%60).toString();this.minutes=d;var i=r.split(".")[0];i=Number(i);var n=r.split(".")[1];n=Number("0."+n);var s=n?i+n:i;this.seconds=s.toFixed(1)},addOne:function _(){this.minutes=Number(this.minutes)+1;var m=Number(this.seconds)+Number(this.minutes)*60;this.verifyDotTime(m,this.minutes)},subOne:function _(){if(this.minutes>0){this.minutes=this.minutes-1}var m=Number(this.seconds)+Number(this.minutes)*60;this.verifyDotTime(m,this.minutes)},addHalf:function _(){this.isSecondsError=false;this.seconds=(Number(this.seconds)+.5).toFixed(1);this.adjustSecond(this.seconds)},subHalf:function _(){this.isSecondsError=false;this.seconds=(this.seconds-.5).toFixed(1);this.adjustSecond(this.seconds)},adjustSecond:function _(m){var d;if(this.isSecondsError){this.isSecondsError=false}var r=m.split(".")[0];r=Number(r);var i=m.split(".")[1];i=Number("0."+i);var n=i?r+i:r;this.seconds=n.toFixed(1);d=n+Number(this.minutes)*60;this.verifyDotTime(d)},verifyDotTime:function _(m,d){var r=this;this.isMinutesError=false;this.timeErrorTips="";this.isSecondsError=false;var i;if(m<this.pasterMinBeginTime){if(d){this.isMinutesError=true}else{this.isSecondsError=true}this.timeErrorTips="\u89C6\u9891\u524D%s\u79D2\u4E0D\u80FD\u8BBE\u7F6E\u8D34\u7247\uFF0C\u5DF2\u81EA\u52A8\u66F4\u6B63\u4E3A\u6700\u8FD1\u7684\u8D34\u7247\u65F6\u95F4\uFF0C\u53EF\u4FEE\u6539".replace("%s",this.pasterMinBeginTime);this.seconds=this.pasterMinBeginTime.toFixed(1)}else if(m>this.duration-this.pasterMaxBeginTimeToEnd&&m<=this.duration){if(d){this.isMinutesError=true}else{this.isSecondsError=true}this.timeErrorTips="\u89C6\u9891\u540E%s\u79D2\u4E0D\u80FD\u8BBE\u7F6E\u8D34\u7247\uFF0C\u5DF2\u81EA\u52A8\u66F4\u6B63\u4E3A\u6700\u8FD1\u7684\u8D34\u7247\u65F6\u95F4\uFF0C\u53EF\u4FEE\u6539".replace("%s",this.pasterMaxBeginTimeToEnd);while(this.duration<this.pasterMaxBeginTimeToEnd+this.minutes*60){this.minutes=this.minutes-1}this.seconds=Math.floor(this.duration-this.pasterMaxBeginTimeToEnd-this.minutes*60).toFixed(1)}else if(m>this.duration){if(d){this.isMinutesError=true}else{this.isSecondsError=true}this.timeErrorTips="\u8D85\u51FA\u89C6\u9891\u65F6\u957F\u8303\u56F4\uFF0C\u5DF2\u81EA\u52A8\u66F4\u6B63\u4E3A\u6700\u8FD1\u7684\u8D34\u7247\u65F6\u95F4\uFF0C\u53EF\u4FEE\u6539";while(this.duration<this.pasterMaxBeginTimeToEnd+this.minutes*60){this.minutes=this.minutes-1}this.seconds=Math.floor(this.duration-this.pasterMaxBeginTimeToEnd-this.minutes*60).toFixed(1)}var n=setTimeout(function(){r.isMinutesError=false;r.isSecondsError=false;clearTimeout(n)},1500);i=Number(this.seconds)+Number(this.minutes*60);this.$emit("change",i)},handleMinutesChange:function _(m){var d=m.target.value;this.minutes=d;var r=Number(this.seconds)+Number(d)*60;this.verifyDotTime(r,true);m.target.blur()},handleSecondChange:function _(m){var d=m.target.value;this.adjustSecond(d);m.target.blur()},focus:function _(){this.$emit("focus")}}})},"./src/pages/modules/media_dialog/video_time_picker/video_time_picker.less":function(f,w,o){"use strict";o.r(w)},"./src/pages/modules/media_dialog/video_time_picker/video_time_picker.tpl":function(f,w){f.exports=`<div class="time-pick-area"> 
  <div class="time-pick-area__item">
    <div class="time-pick-item" :class="isMinutesError ? 'time-error' : null">
      <input type="number" :value="minutes" @blur="handleMinutesChange" @keyup.enter="handleMinutesChange" class="weui-desktop-form__input" max="60" min="0" :disabled="!timePickerCanInput" placeholder="\u8BF7\u8F93\u5165" @focus="focus" />
      <div class="time-pick-item__extend">
        <!--\u4E0A\u7FFB-->
        <a href="javascript:;" class="time-pick-item__extend__operation time-pick-item__extend__operation_up" @click="addOne"></a>
        <!--\u4E0B\u7FFB-->
        <a href="javascript:;" class="time-pick-item__extend__operation time-pick-item__extend__operation_down" @click="subOne"></a>
      </div>
    </div>
    <!--<mp-dropdown type="default" trigger="click" :value="expireMin" :options="minOptions"></mp-dropdown>-->
    <span class="weui-desktop-form__controls__extend">\u5206</span>
  </div>
  <div class="time-pick-area__item">
    <div class="time-pick-item" :class="isSecondsError ? 'time-error' : null ">
      <input type="number" :value="seconds" @blur="handleSecondChange" @keyup.enter="handleSecondChange" class="weui-desktop-form__input" max="59" min="0" :disabled="!timePickerCanInput"  placeholder="\u8BF7\u8F93\u5165" @focus="focus" />
      <div class="time-pick-item__extend">
        <!--\u4E0A\u7FFB-->
        <a href="javascript:;" class="time-pick-item__extend__operation time-pick-item__extend__operation_up" @click="addHalf"></a>
        <!--\u4E0B\u7FFB-->
        <a href="javascript:;" class="time-pick-item__extend__operation time-pick-item__extend__operation_down" @click="subHalf"></a>
      </div>
    </div>
    <!--<mp-dropdown type="default" trigger="click" :value="expireSecond" :options="secondOptions"></mp-dropdown>-->
    <span class="weui-desktop-form__controls__extend">\u79D2</span>
  </div>
  
  <div class="time-pick-area__fail">{{ timeErrorTips }} </div>
</div>`},"./src/pages/modules/media_dialog/weapp_dialog/weapp_dialog.js":function(f,w,o){var T=o("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");o("./src/3rd/jquery/jquery.2.1.4.js");o("./src/pages/modules/crop/jquery.Jcrop.js");o("./src/pages/modules/upload/upload.js");o("./src/pages/modules/weapp_search/weapp_search.js");o("./src/pages/modules/media_dialog/video_dot/video_dot.js");o("./src/pages/modules/open_weapp_path/open_weapp_path.js");o("./src/pages/modules/media_dialog/image_dialog/image_dialog.js");o("./src/pages/modules/media_dialog/weapp_dialog/weapp_dialog.less");var x=o("./src/3rd/editor/common/cropImgCgi.js");var _=o("./src/pages/modules/media_dialog/weapp_dialog/weapp_dialog.tpl");var m=o("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");var d=o("./src/pages/modules/utils/str_util.js");var r=o("./src/pages/modules/utils/object.js"),i=r.assign;var n=o("./src/3rd/editor/common/monitor.js");var s=o("./src/pages/modules/weapp_search/weapp_search_utils.js"),a=s.searchWeappLink;var p=o("../../packages/mmbizweb-web2-common/modules/utils/common.js"),u=p.debounce;var k="https://res.wx.qq.com/op_res/z0kqtlczWBI8W4iR_jbbN2wIZAh99JYbDkA9CM1E4uXPu6eyT0Dm27mywrqXpT07oiZJL8R6QDPXzjcoIfRNrA";function R(l){return{type:l,service_type:0,appid:"",applink:"",main_page:"",path:"",nickname:"",content:"",image:"",cardImage:"",cardImageBack:"",title:"",headimg_url:k,qrcode:""}}T.component("mp-weapp-dialog",{template:_,props:{title:{type:String,default:"\u9009\u62E9\u5C0F\u7A0B\u5E8F"},value:{type:Boolean,default:false},weappinfo:{type:Object,default:null},type:{type:Array,default:function l(){return["text","image","card","qrcode"]}},isvideodot:{type:Boolean,default:false},videoinfo:{type:Array,default:function l(){return[]}},pasterInfo:{type:Object,default:function l(){return{}}},selectImageSrc:{type:String,default:""},scene:{type:String,default:"content"},integrated:{type:Boolean,default:false},forceUsePath:{type:Boolean,default:false},noWording:{type:Boolean,default:false}},data:function l(){var e=[];var t=8;var h=16;var c=10;var b=15;var g=10;var P="\u8D34\u7247\u51FA\u73B0\u65F6\u95F4\u4E0D\u80FD\u8BBE\u7F6E\u5728\u89C6\u9891\u524D%s\u79D2\u548C\u6700\u540E%s\u79D2\uFF1B\u8D34\u7247\u51FA\u73B0\u540E\u5C06\u6301\u7EED%s\u79D2".replace("%s",c).replace("%s",b).replace("%s",g);var y={dot:{}};if(this.pasterInfo.list){try{y=Object.assign({},this.pasterInfo.list[0]);if(typeof y.dot==="string"){y.dot=y.dot.replace(/&amp;amp;quot;/g,'"').replace(/&amp;quot;/g,'"').replace(/&quot;/g,'"');y.dot=JSON.parse(y.dot);e=[{id:Date.now(),mediaId:y.dot.avatar}]}}catch(L){y.dot={};console.error(L)}}var v=i(R(!!this.selectImageSrc?"image":"text"),this.weappinfo||null);if(y.dot&&Object.keys(y.dot).length){v.path=y.dot.relativeURL;v.appid=y.dot.originalId;v.applink=y.dot.weApplink;v.appid=y.dot.appId;v.nickname=y.dot.weAppName}var S={c:null};if(v.type==="card"&&v.cropperInfo){try{S=JSON.parse(decodeURIComponent(v.cropperInfo))}catch(L){console.error(L)}}var E=1;var I=false;var C=true;if(this.forceUsePath){C=false}else if(v.appid){E=2;I=true;C=!!(v!==null&&v!==void 0&&v.applink)}else if(this.selectImageSrc){I=true}return{isEdit:I,debounceTimer:null,ifSearchLink:C,showTextRadio:!I&&this.type.includes("text")||I&&v.type==="text",showImageRadio:!I&&this.type.includes("image")||I&&v.type==="image",showCardRadio:!I&&this.type.includes("card")||I&&v.type==="card",showQrcodeRadio:!I&&this.type.includes("qrcode")||I&&v.type==="qrcode",step:E,searchResult:v,gettingQrcode:false,titleMaxLen:35,pathMaxLen:1024,uploadCardImageSimple:true,cardImagePreview:decodeURIComponent(v.cardImageBack)||v.cardImage||"",imgCropper:null,cropperInfo:S,cropperBoundx:0,cropperBoundy:0,errTipsObj:{path:"",applink:"",content:"",title:"",cardImage:""},statusObj:{path:"normal",applink:"normal",content:"normal",title:"normal",cardImage:"normal"},expireMin:0,expireSecond:0,minOptions:[],secondOptions:[],videoPasterTitleMaxLength:t,videoPasterDescMaxLength:h,pasterInfoInner:y,pasterMinBeginTime:c,pasterMaxBeginTimeToEnd:b,videoPasterShowTime:g,tips:P,fileList:e,titlePlaceholder:"\u5728\u6B64\u586B\u5199\u6807\u9898\uFF0C%s\u5B57\u5185".replace("%s",t),descPlaceholder:"\u5728\u6B64\u586B\u5199\u63CF\u8FF0\uFF0C%s\u5B57\u5185".replace("%s",h),showUploadTipsStatus:false,showImageDialog:false,searchLink:v.applink,searchLinkStatus:v.applink?2:0}},watch:{searchLink:function l(e){if(this.statusObj.applink!=="normal"){this.errTipsObj.applink="";this.statusObj.applink="normal"}e?this.searchWeapplinkDebounce():this.searchLinkStatus=0},"searchResult.path":function l(){if(this.statusObj.path!=="normal"){this.errTipsObj.path="";this.statusObj.path="normal"}},"searchResult.content":function l(){if(this.statusObj.content!=="normal"){this.errTipsObj.content="";this.statusObj.content="normal"}},"searchResult.title":function l(){if(this.statusObj.title!=="normal"){this.errTipsObj.title="";this.statusObj.title="normal"}},cardImagePreview:function l(e){if(!!e&&this.errTipsObj.cardImage!==""){this.errTipsObj.cardImage="";this.statusObj.cardImage="normal"}if(!e&&this.imgCropper&&typeof this.imgCropper.destroy==="function"){this.imgCropper.destroy();this.imgCropper=null}},searchLinkStatus:function l(e){if(this.integrated){this.$emit("disable-submit",e!==2)}}},computed:{containerProps:function l(){var e={"weui-desktop-weapp-dialog":true,"weui-desktop-weapp-dialog__video-popup":this.isvideodot,"weui-desktop-weapp-search-link-dialog":this.ifSearchLink,"integrated":this.integrated};if(this.integrated){return{is:"div",class:e}}return{is:"mp-dialog",weui:true,value:true,title:this.dialogTitle,width:960,rootElm:"#vue_app",class:e}},dialogTitle:function l(){if(this.ifSearchLink)return"\u63D2\u5165\u5C0F\u7A0B\u5E8F";else return this.step===1?"\u9009\u62E9\u5C0F\u7A0B\u5E8F":"\u586B\u5199\u8BE6\u7EC6\u4FE1\u606F"}},mounted:function l(){if(this.cardImagePreview){this.initImageCropper()}if(this.noWording){this.searchResult.content="\u5C0F\u7A0B\u5E8F"}},methods:{hide:function l(){this.$emit("input",false)},updateSearchResultContent:function l(){var e=this.searchLink.split("#\u5C0F\u7A0B\u5E8F://");var t=e.length>1?e[1].split("/")[0]:null;if(t){this.searchResult.content=t;this.searchResult.title=t;this.searchResult.defaultTitle=t}else{this.searchResult.content=""}},onSearchLinkInput:function l(){var e=this;if(this.debounceTimer){clearTimeout(this.debounceTimer)}this.debounceTimer=setTimeout(function(){e.updateSearchResultContent()},300)},toSearchApp:function l(){if(this.integrated){this.$emit("search-app");return}this.ifSearchLink=false;this.step=1;this.resetErr();this.searchLink=""},resetErr:function l(){for(var e in this.errTipsObj){if(Object.prototype.hasOwnProperty.call(this.errTipsObj,e)){this.errTipsObj[e]=""}}for(var t in this.statusObj){if(Object.prototype.hasOwnProperty.call(this.statusObj,t)){this.statusObj[t]="normal"}}},showErrTips:function l(e,t){if(typeof this.errTipsObj[e]!=="undefined"){this.errTipsObj[e]=t}if(typeof this.statusObj[e]!=="undefined"){this.statusObj[e]="warn"}},hideErrTips:function l(e){if(typeof this.errTipsObj[e]!=="undefined"){this.errTipsObj[e]=""}if(typeof this.statusObj[e]!=="undefined"){this.statusObj[e]="normal"}},nextStep:function l(){this.resetErr();this.step=2;if(this.cardImagePreview){this.initImageCropper()}},preStep:function l(){if(this.gettingQrcode===true){return}this.step=1},searchResultChange:function l(e){if(e){this.searchResult.appid=e.appid;this.searchResult.path=e.path||e.main_page;this.searchResult.main_page=e.main_page;this.searchResult.service_type=e.service_type;this.searchResult.nickname=e.nickname;this.searchResult.headimg_url=e.headimg_url;this.searchResult.hasGuaranteeFlag=e.has_guarantee_flag;this.searchResult.applink="";this.pasterInfoInner.dot.originalId=e.username;this.pasterInfoInner.dot.appId=e.appid}},searchWeapplinkDebounce:function l(){this.searchLinkStatus=1;this.lastSearchLinkTimer&&window.clearTimeout(this.lastSearchLinkTimer);this.lastSearchLinkTimer=setTimeout(this.searchWeapplink,500)},searchWeapplink:function l(){var e=this;if(!this.searchLink){this.searchLinkStatus=0;return}var t=this.searchLink;this.resetErr();a({link:t,isvideodot:this.isvideodot,onSuccess:function h(c){if(t!==e.searchLink)return;e.searchResult.appid=c.appid;e.searchResult.path=c.path||c.main_page;e.searchResult.main_page=c.main_page;e.searchResult.service_type=c.service_type;e.searchResult.nickname=c.nickname;e.searchResult.headimg_url=c.headimg_url;e.searchResult.hasGuaranteeFlag=c.has_guarantee_flag;e.searchResult.applink=t;e.pasterInfoInner.dot.originalId=c.username;e.pasterInfoInner.dot.appId=c.appid;e.searchLinkStatus=2;if(e.searchResult.path&&e.searchResult.path.length>e.pathMaxLen){e.searchLinkStatus=3;e.showErrTips("applink",d.sprintf("\u94FE\u63A5\u89E3\u6790\u5F02\u5E38\uFF0C\u76EE\u6807\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u5B57\u7B26",e.pathMaxLen))}},onError:function h(c){if(t!==e.searchLink)return;e.showErrTips("applink",c);e.searchLinkStatus=3}})},onDialogClose:function l(){this.hide();this.$emit("cancel")},pasterTimeChange:function l(e){this.pasterInfoInner.begin_time=e.beginTime;this.pasterInfoInner.end_time=e.endTime},validate:function l(){if(this.gettingQrcode===true){return false}var e=this.errTipsObj.cardImage;this.resetErr();var t=false;var h=true;var c="";if(!this.searchResult.appid){this.$tipsErr("\u8BF7\u9009\u62E9\u5C0F\u7A0B\u5E8F");return false}if(this.searchResult.service_type*1!==4){if(!this.searchResult.path){this.showErrTips("path","\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u4E0D\u80FD\u4E3A\u7A7A");t=true;h=false}}else{if(this.searchResult.path){if(!/^\?/.test(this.searchResult.path)){this.showErrTips("path","\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u53C2\u6570\u8BF7\u4EE5?\u5F00\u5934");t=true;h=false}}}if(this.searchResult.path&&this.searchResult.path.length>this.pathMaxLen){this.ifSearchLink?this.showErrTips("applink",d.sprintf("\u94FE\u63A5\u89E3\u6790\u5F02\u5E38\uFF0C\u76EE\u6807\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u5B57\u7B26",this.pathMaxLen)):this.showErrTips("path",d.sprintf("\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u5B57\u7B26",this.pathMaxLen));t=true;h=false}if(this.searchResult.type==="card"){if(!this.searchResult.title){this.showErrTips("title","\u6807\u9898\u4E0D\u80FD\u4E3A\u7A7A");t=true;h=false}if(this.searchResult.title.length>this.titleMaxLen){this.showErrTips("title",d.sprintf("\u6807\u9898\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u5B57\u7B26",this.titleMaxLen));t=true;h=false}if(!this.cardImagePreview){c="\u8BF7\u4E0A\u4F20\u5361\u7247\u56FE\u7247";if(e){this.showErrTips("cardImage",e)}t=true}}else if(this.searchResult.type==="text"){if(this.scene==="img"){this.searchResult.content=this.searchResult.nickname}if(!this.searchResult.content){this.showErrTips("content","\u6587\u5B57\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A");t=true;h=false}}else if(this.searchResult.type==="image"){if(!this.searchResult.image){c="\u8BF7\u4E0A\u4F20\u56FE\u7247";t=true}}if(t){h&&this.$tipsErr(c||"\u8BF7\u5B8C\u5584\u8868\u5355\u4FE1\u606F");return false}if(this.searchResult.path){var b=this.searchResult.path.split("?");b[0]=b[0].replace(/\.html/,"");b=b.join("?");this.searchResult.path=b}return true},choseDotTime:function l(e){},validateVideoDotInfo:function l(){if(this.gettingQrcode===true){return false}this.resetErr();var e=false;var t="";if(!this.searchResult.appid){this.$tipsErr("\u8BF7\u9009\u62E9\u5C0F\u7A0B\u5E8F");return false}if(this.searchResult.service_type*1===4&&this.searchResult.path){if(!/^\?/.test(this.searchResult.path)){this.showErrTips("path","\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u53C2\u6570\u8BF7\u4EE5?\u5F00\u5934");e=true}}if(this.searchResult.path&&this.searchResult.path.length>this.pathMaxLen){this.ifSearchLink?this.showErrTips("applink",d.sprintf("\u94FE\u63A5\u89E3\u6790\u5F02\u5E38\uFF0C\u76EE\u6807\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u5B57\u7B26",this.pathMaxLen)):this.showErrTips("path",d.sprintf("\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u5B57\u7B26",this.pathMaxLen));e=true}if(!this.pasterInfoInner.dot.avatar){t="\u8BF7\u4E0A\u4F20\u56FE\u7247";e=true}else if(!this.pasterInfoInner.dot.title){t="\u8BF7\u586B\u5199\u8D34\u7247\u6807\u9898";e=true}else if(this.pasterInfoInner.dot.title.length>this.videoPasterTitleMaxLength){t=d.sprintf("\u8D34\u7247\u6807\u9898\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u4E2A\u5B57\u7B26",this.videoPasterTitleMaxLength);e=true}else if(!this.pasterInfoInner.dot.desc){t="\u8BF7\u586B\u5199\u8D34\u7247\u63CF\u8FF0";e=true}else if(this.pasterInfoInner.dot.desc.length>this.videoPasterDescMaxLength){t=d.sprintf("\u8D34\u7247\u63CF\u8FF0\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u4E2A\u5B57\u7B26",this.videoPasterDescMaxLength);e=true}else if(!this.pasterInfoInner.begin_time||this.pasterInfoInner.begin_time<this.pasterMinBeginTime||this.videoinfo[0].play_length-this.pasterInfoInner.begin_time<this.pasterMaxBeginTimeToEnd){t="\u8BF7\u6B63\u786E\u8BBE\u7F6E\u8D34\u7247\u65F6\u95F4\uFF0C"+this.tips;e=true}if(e===true){this.$tipsErr(t||"\u8BF7\u5B8C\u5584\u8868\u5355\u4FE1\u606F");return false}if(this.searchResult.path){var h=this.searchResult.path.split("?");h[0]=h[0].replace(/\.html/,"");h=h.join("?");this.searchResult.path=h}return true},reportPath:function l(){if(this.searchResult.path!==this.searchResult.main_page||this.weappinfo&&this.searchResult.path!==this.weappinfo.path){n.setSum(122443,49,1)}else{n.setSum(122443,48,1)}n.send()},onDialogOk:function l(){var e,t=this;!!this.selectImageSrc&&(this.searchResult.image=this.selectImageSrc);!!this.weappinfo&&(this.searchResult.content=this.weappinfo.content);this.reportPath();if(this.isvideodot){if(!this.validateVideoDotInfo()){this.$emit("error");return}}else{if(this.validate()===false){this.$emit("error");return}}if(this.searchResult.defaultTitle){if(this.searchResult.defaultTitle===this.searchResult.content){n.setSum(122443,87,1).send()}else{n.setSum(122443,88,1).send()}}var h=/^#小程序:\/\/(.*?)\//;if((e=this.searchResult.path)!==null&&e!==void 0&&e.match(h)){var c=this.searchResult.path.match(h)[1]===this.searchResult.nickname;c?a({link:this.searchResult.path,isvideodot:this.isvideodot,onSuccess:function b(g){t.searchResult.applink=t.searchResult.path;t.searchResult.appid=g.appid;t.searchResult.path=g.path||g.main_page;t.searchResult.main_page=g.main_page;t.searchResult.service_type=g.service_type;t.searchResult.nickname=g.nickname;t.searchResult.headimg_url=g.headimg_url;t.searchResult.hasGuaranteeFlag=g.has_guarantee_flag;t.pasterInfoInner.dot.originalId=g.username;t.pasterInfoInner.dot.appId=g.appid;if(t.searchResult.path&&t.searchResult.path.length>t.pathMaxLen){t.showErrTips("path",d.sprintf("\u94FE\u63A5\u89E3\u6790\u5F02\u5E38\uFF0C\u76EE\u6807\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E%s\u5B57\u7B26",t.pathMaxLen))}if(t.searchResult.type==="qrcode"){t.getQrcode()}else if(t.searchResult.type==="card"){t.getCropperImg()}else{t.dialogCallback()}},onError:function b(g){t.showErrTips("path",g)}}):this.showErrTips("path","\u8BF7\u8F93\u5165%s\u5C0F\u7A0B\u5E8F\u7684\u94FE\u63A5".replace("%s",this.searchResult.nickname))}else{if(this.searchResult.type==="qrcode"){this.getQrcode()}else if(this.searchResult.type==="card"){this.getCropperImg()}else{this.dialogCallback()}}},dialogCallback:function l(){this.$emit("select",Object.assign({},this.searchResult,this.pasterInfoInner));this.hide()},getQrcode:function l(){var e=this;if(this.gettingQrcode===true){return}this.gettingQrcode=true;m.post({url:"/cgi-bin/operate_appmsg?sub=weapp_qrcode",data:{appid:this.searchResult.appid,path:this.searchResult.path||""}},function(t){e.gettingQrcode=false;if(!t||!t.base_resp){e.tipsErr("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");e.$emit("error");return}if(t&&t.base_resp&&t.base_resp.ret*1===0){if(!t.qrcode_url){e.tipsErr("\u83B7\u53D6\u5C0F\u7A0B\u5E8F\u7801\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");e.$emit("error")}else{e.searchResult.qrcode=t.qrcode_url;e.dialogCallback()}}else{m.handleRet(t,{url:"/cgi-bin/appmsg?sub=weapp_qrcode",msg:"\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"});e.$emit("error")}},function(){e.gettingQrcode=false;e.tipsErr("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");e.$emit("error")})},onImageUploadSelect:function l(){this.searchResult.image=""},onImageUploadComplete:function l(e){var t=this;if(e&&e.response&&e.response.content){this.searchResult.image=e.response.content;setTimeout(function(){var h;(h=t.$refs)===null||h===void 0||(h=h.imgPreviewArea)===null||h===void 0||h.scrollIntoView({behavior:"smooth"})},200)}else{this.$tipsErr("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20");this.searchResult.image=""}},onVideoPasterAvatarUploadComplete:function l(e){if(e&&e.response&&e.response.content){this.pasterInfoInner.dot.avatar=e.response.content;this.$forceUpdate();this.$refs.videoPaster.$forceUpdate()}else{this.$tipsErr("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20");this.pasterInfoInner.dot.avatar=""}},tirggerImageUpload:function l(){var e,t;if(this.searchResult.type!=="image")return;var h=((e=this.$refs)===null||e===void 0||(e=e.imgupload)===null||e===void 0?void 0:e.$el)||null;h&&((t=$(h))===null||t===void 0||(t=t.find("input"))===null||t===void 0?void 0:t.trigger("click"))},onImageUploadError:function l(e,t){this.$refs.imgupload.msg="";this.searchResult.image="";if(t){this.$tipsErr(t)}},onImageUploadRemove:function l(){this.searchResult.image=""},uploadVideoPasterAvatarError:function l(e,t){this.pasterInfoInner.dot.avatar="";this.$tipsErr(t||"")},onCardImagePreviewparse:function l(){return""},onCardImageUploadSelect:function l(){this.cardImagePreview="";this.cropperInfo={c:null};this.uploadCardImageSimple=false;this.hideErrTips("cardImage")},onCardImageUploadComplete:function l(e){var t=this;if(e&&e.response&&e.response.content){this.cardImagePreview=e.response.content;this.cropperInfo={c:null};this.initImageCropper();setTimeout(function(){var c;(c=t.$refs)===null||c===void 0||(c=c.cardPreviewArea)===null||c===void 0||c.scrollIntoView({behavior:"smooth"})},200)}else{this.cardImagePreview="";this.cropperInfo={c:null};var h="\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u4E0A\u4F20";this.showErrTips("cardImage",h);this.$tipsErr(h)}this.uploadCardImageSimple=true},onCardImageUploadError:function l(e,t){this.cardImagePreview="";this.cropperInfo={c:null};this.uploadCardImageSimple=true;if(t){this.showErrTips("cardImage",t);this.$tipsErr(t)}},onCardImageUploadRemove:function l(){this.cardImagePreview="";this.cropperInfo={c:null};this.uploadCardImageSimple=false;this.hideErrTips("cardImage")},initImageCropper:function l(){if(!this.cardImagePreview){return}var e=new Image;var t=this;e.onload=function h(){var c;this.onerror=null;this.onload=null;e=null;if(t.imgCropper&&typeof t.imgCropper.destroy==="function"){t.imgCropper.destroy();t.imgCropper=null}var b=window.$(t.$refs.weappDialog.$el);var g=b.find(".js_review-image-url");var P=((c=t.cropperInfo)===null||c===void 0?void 0:c.c)||{},y=P.x,v=P.y,S=P.x2,E=P.y2;if(!(y>=0&&S>=0&&y<S&&v>=0&&E>=0&&v<E)){var I=g.width()/5*4;var C;var L;var j;if(I>g.height()){C=g.height()/4*5}else{C=g.width()}L=(g.width()-C)/2;j=(g.height()-I)/2;y=L;v=j;S=g.width()-L;E=g.height()-j}g.Jcrop({onChange:function B(M){t.updatePreview(M)},onSelect:function B(M){t.updatePreview(M)},setSelect:[y,v,S,E],createHandles:["nw","ne","se","sw"],aspectRatio:1.25,boxWidth:g.width(),boxHeight:g.height(),allowSelect:false,allowResize:true,shade:true,bgOpacity:.5,bgColor:"black"},function B(){var M=this.getBounds();t.cropperBoundx=M[0];t.cropperBoundy=M[1];t.imgCropper=this;var A=b.find(".js_after_preview").width()/t.imgCropper.tellSelect().w;var O=b.find(".js_after_preview").height()/t.imgCropper.tellSelect().h;b.find(".js_after_preview_img").css({width:Math.round(A*t.cropperBoundx)+"px",height:Math.round(O*t.cropperBoundy)+"px",marginLeft:"-"+Math.round(A*t.imgCropper.tellSelect().x)+"px",marginTop:"-"+Math.round(O*t.imgCropper.tellSelect().y)+"px"});b.find(".jcrop-handle",this.ui.selection).css({width:"7px",height:"7px"})})};e.onerror=function h(){t.$tipsErr("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25");this.onerror=null;this.onload=null;e=null};e.src=this.cardImagePreview},updatePreview:function l(e){if(window.parseInt(e.w)>0){this.cropperInfo.c=e;var t=window.$(this.$refs.weappDialog.$el);var h=t.find(".js_after_preview").width()/e.w;var c=t.find(".js_after_preview").height()/e.h;t.find(".js_after_preview_img").css({width:Math.round(h*this.cropperBoundx)+"px",height:Math.round(c*this.cropperBoundy)+"px",marginLeft:"-"+Math.round(h*e.x)+"px",marginTop:"-"+Math.round(c*e.y)+"px"})}},getCropperImg:function l(){var e=this;if(this.gettingQrcode){this.$emit("error");return}this.gettingQrcode=true;var t=window.$(this.$refs.weappDialog.$el);var h=t.find(".js_review-image-url");var c=h.width();var b=h.height();var g=this.cropperInfo.c.x/c;var P=this.cropperInfo.c.y/b;var y=this.cropperInfo.c.x2/c;var v=this.cropperInfo.c.y2/b;x.getUrl({imgurl:this.cardImagePreview,x1:g<0?0:g,y1:P<0?0:P,x2:y>1?1:y,y2:v>1?1:v,onerror:function S(){e.gettingQrcode=false;e.$tipsErr("\u88C1\u526A\u56FE\u7247\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");e.$emit("error")},onsuccess:function S(E){e.gettingQrcode=false;e.searchResult.cardImage=E.url;e.searchResult.cardImageBack=encodeURIComponent(e.cardImagePreview);e.searchResult.cropperInfo=encodeURIComponent(JSON.stringify(e.cropperInfo));e.dialogCallback()}})},uploadImg:function l(){this.$refs.upload.$el.getElementsByTagName("input")[0].click()},onFocus:function l(){this.$refs.step2Container.scrollTop=1e4},selectImageFromPicGallery:function l(e){var t=this;if(this.searchResult.type==="image"){if(e&&e.length){this.$refs.imgupload.remove("REMOVE_ALL");this.searchResult.image=e[0].url;setTimeout(function(){var c;(c=t.$refs)===null||c===void 0||(c=c.imgPreviewArea)===null||c===void 0||c.scrollIntoView({behavior:"smooth"})},200)}else{this.searchResult.image="";this.$tipsErr("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}}else if(this.searchResult.type==="card"){this.hideErrTips("cardImage");this.cardImagePreview="";this.cropperInfo={c:null};if(e&&e.length){this.$refs.cardTypeImgUpload.remove("REMOVE_ALL");this.$nextTick(function(){t.cardImagePreview=e[0].url;t.cropperInfo={c:null};t.initImageCropper();setTimeout(function(){var c;(c=t.$refs)===null||c===void 0||(c=c.cardPreviewArea)===null||c===void 0||c.scrollIntoView({behavior:"smooth"})},200)})}else{var h="\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5";this.showErrTips("cardImage",h);this.$tipsErr(h)}}},deleteSelectedPics:function l(){this.searchResult.image=""},handleChangeApplyAll:function l(e){if(e){}}}})},"./src/pages/modules/media_dialog/weapp_dialog/weapp_dialog.less":function(f,w,o){"use strict";o.r(w)},"./src/pages/modules/media_dialog/weapp_dialog/weapp_dialog.tpl":function(f,w){f.exports=`<div>
  <component v-bind="containerProps" v-model="value" ref="weappDialog" @close="onDialogClose">
    <template>
      <!-- \u65E7\u5F39\u7A97-\u6B65\u9AA4\u6761 -->
      <mp-step :step="step" v-if="!ifSearchLink && !integrated">
        <mp-step-item title="\u9009\u62E9\u5C0F\u7A0B\u5E8F"></mp-step-item>
        <mp-step-item title="\u586B\u5199\u8BE6\u7EC6\u4FE1\u606F"></mp-step-item>
      </mp-step>

      <div class="weui-desktop-media-area">
        <!-- \u65E7\u5F39\u7A97-\u6B65\u9AA41 -->
        <div v-show="!ifSearchLink && step == 1" class="weui-desktop-weapp-dialog__step-content step1">
          <template v-if="isvideodot"> <!--\u89C6\u9891\u8D34\u7247-->
            <p class="weui-desktop-weapp-dialog__step-content__tips-head">\u8BF7\u9009\u62E9\u8D34\u7247\u9700\u8981\u8DF3\u8F6C\u7684\u5C0F\u7A0B\u5E8F</p>
          </template>
          <mp-weapp-search
            v-show="step==1"
            @resultChange="searchResultChange"
            :isvideodot="isvideodot"
          ></mp-weapp-search>
        </div>

        <!-- \u65E7\u5F39\u7A97-\u6B65\u9AA42 / \u65B0\u5F39\u7A97 -->
        <div v-if="(ifSearchLink || step == 2) && !isvideodot"
          ref="step2Container"
          class="weui-desktop-weapp-dialog__step-content step2"
          :class="{
            'is_edit_form': isEdit,
            'is_card_form': searchResult.type === 'card'
          }">
          <div v-show="!ifSearchLink" class="frm_control_group">
            <label for="" class="frm_label">\u5C0F\u7A0B\u5E8F\u540D\u79F0</label>
            <div class="frm_controls frm_vertical_pt">{{searchResult.nickname}}</div>
          </div>
          <mp-form weui="true" @submit.native.prevent>
            <!-- \u65B0\u5F39\u7A97-\u641C\u7D22\u5C0F\u7A0B\u5E8F\u77ED\u94FE -->
            <mp-form-item v-if="ifSearchLink">
              <template slot="label">
                \u5C0F\u7A0B\u5E8F\u94FE\u63A5
                <mp-popover position="up-center" width="320" trigger="hover" :append-to-body="true" wrap-class="popper-in-weapp-dialog">
                  <p>\u8BF7\u524D\u5F80\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u53F3\u4E0A\u89D2\uFF0C\u590D\u5236\u94FE\u63A5\u540E\u7C98\u8D34\u5230\u6B64\u5904\u3002</p>
                  <img style="display: block; margin-top: 12px; width: 100%;" src="https://res.wx.qq.com/op_res/EIMHMmv5mxvQFAzwfZjNyKkyTGCbxyBDAz9XvAmsaqboMpQqf1ZC4f_NAPvEvl2mUhrAvVAqrnwgcK794rUKtw">
                  <a slot="target"><mp-icon style="position: relative; top: 5.5px;" :width="20" :height="20" icon="tips"></mp-icon></a>
                </mp-popover>
              </template>
              <mp-input v-model.trim="searchLink"
                clearable
                :status="statusObj.applink"
                :disabled="gettingQrcode"
                @keyup.enter="searchWeapplinkDebounce"
                @input="onSearchLinkInput"
                placeholder="\u5FAE\u4FE1\u6253\u5F00\u5C0F\u7A0B\u5E8F\uFF0C\u53F3\u4E0A\u89D2\u590D\u5236\u94FE\u63A5\u540E\u7C98\u8D34\u5230\u6B64\u5904">
                <template slot="message">{{errTipsObj.applink}}</template>
                <template slot="description">
                  \u65E0\u6CD5\u590D\u5236\u94FE\u63A5\u65F6\uFF0C\u53EF\u641C\u7D22\u5C0F\u7A0B\u5E8F\uFF0C\u901A\u8FC7\u7ED9\u6307\u5B9A\u5FAE\u4FE1\u7528\u6237\u5F00\u542F\u590D\u5236\u8DEF\u5F84\u5165\u53E3\u7684\u65B9\u5F0F\u6765\u4FEE\u6539\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u3002<a @click='toSearchApp' href='javascript:;'>\u53BB\u641C\u7D22</a>
                </template>
              </mp-input>
            </mp-form-item>
            <!-- \u65E7\u5F39\u7A97-\u8F93\u5165\u5C0F\u7A0B\u5E8F\u8DEF\u5F84 -->
            <mp-form-item v-else>
              <template slot="label">
                \u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u548C\u94FE\u63A5
                <template v-if="searchResult.service_type == '4'">(\u9009\u586B)</template>
              </template>
              <mp-input clearable :countable="true" :maxlength="pathMaxLen" v-model.trim="searchResult.path" :status="statusObj.path" :disabled="gettingQrcode">
                <template slot="message">{{errTipsObj.path}}</template>
                <template v-if="searchResult.service_type != '4'" slot="description">
                  \u652F\u6301\u8F93\u5165\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u548C\u94FE\u63A5\u3002\u9ED8\u8BA4\u663E\u793A\u5C0F\u7A0B\u5E8F\u9996\u9875\u8DEF\u5F84\uFF0C\u53EF\u66F4\u6539\u3002
                  <mp-popover :width="415" :append-to-body="true" wrap-class="popper-in-weapp-dialog" trigger="hover" position="left-center" class="popover_path weui-desktop-popover_hover-show">
                    <template slot="target"><a href="javascript:;">\u83B7\u53D6\u66F4\u591A\u9875\u9762\u8DEF\u5F84</a></template>
                    <template slot="content">
                      <mp-open-weapp-path :weappnickname="searchResult.nickname" :disabled="gettingQrcode" :appid="searchResult.appid"></mp-open-weapp-path>
                    </template>
                  </mp-popover>
                </template>
                <template v-else slot="description">
                  \u5C0F\u7A0B\u5E8F\u53EF\u6309\u201C\uFF1F\u53C2\u6570\u201D\u683C\u5F0F\u586B\u5165\u53C2\u6570\u6216\u4E0D\u586B\u5199\u6B64\u4FE1\u606F
                  <br>
                  \u9ED8\u8BA4\u663E\u793A\u5C0F\u7A0B\u5E8F\u9996\u9875\uFF0C\u53EF\u66F4\u6539\u3002
                </template>
              </mp-input>
            </mp-form-item>

            <!-- \u975E\u7F16\u8F91\u6A21\u5F0F -->
            <template v-if="!isEdit">
              <mp-form-item v-if="type.length > 1" class="weui-desktop-form__control-group_offset" v-show="scene !== 'img' && scene !== 'img-content'">
                <template slot="label">
                  \u5C55\u793A\u65B9\u5F0F
                  <mp-popover trigger="hover" position="up-left" width="348" class="weui-desktop-popover__wrp__offset">
                    <p style="width:300px">\u4E3A\u8FDB\u4E00\u6B65\u63D0\u5347\u5C0F\u7A0B\u5E8F\u7684\u5B89\u5168\u6027\u548C\u7528\u6237\u4F53\u9A8C\uFF0C\u5E73\u53F0\u4E0D\u518D\u652F\u6301\u516C\u4F17\u53F7\u521B\u4F5C\u8005\u5728\u540E\u53F0\u751F\u6210\u4EFB\u610F\u5C0F\u7A0B\u5E8F\u7801\u3002\u82E5\u9700\u8981\u5728\u6587\u7AE0\u4E2D\u63D2\u5165\u5C0F\u7A0B\u5E8F\u7801\uFF0C\u53EF\u8054\u7CFB\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u83B7\u53D6\u3002<a target="blank" href="https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/qr-code.html">\u67E5\u770B\u83B7\u53D6\u65B9\u5F0F</a></p>
                    <a slot="target"><mp-icon style="position: relative; top: 5.5px;" :width="20" :height="20" icon="tips"></mp-icon></a>
                  </mp-popover>
                </template>
                <mp-radio-group
                  name="weapp_type"
                  v-model="searchResult.type"
                >
                  <mp-radio v-if="showTextRadio" value="text" :disabled="gettingQrcode">\u6587\u5B57</mp-radio>
                  <mp-radio v-if="showImageRadio" value="image" :disabled="gettingQrcode">\u56FE\u7247</mp-radio>
                  <mp-radio v-if="showCardRadio" value="card" :disabled="gettingQrcode">\u5C0F\u7A0B\u5E8F\u5361\u7247</mp-radio>
                </mp-radio-group>
              </mp-form-item>
              <!-- BEGIN \u5C55\u793A\u65B9\u5F0F \u6587\u5B57 -->
              <mp-form-item v-if="scene !== 'img' && !noWording" v-show="searchResult.type == 'text'">
                <template slot="label">\u6587\u5B57\u5185\u5BB9</template>
                <mp-input v-model.trim="searchResult.content" :status="statusObj.content" clearable>
                  <template slot="message">{{errTipsObj.content}}</template>
                  <template slot="description">\u70B9\u51FB\u6587\u5B57\u4F1A\u6253\u5F00\u5C0F\u7A0B\u5E8F\u6307\u5B9A\u8DEF\u5F84\u7684\u9875\u9762</template>
                </mp-input>
              </mp-form-item>
              <!-- END \u5C55\u793A\u65B9\u5F0F \u6587\u5B57 -->
              <!-- BEGIN \u5C55\u793A\u65B9\u5F0F \u56FE\u7247 -->
              <mp-form-item v-show="searchResult.type == 'image'" label="\u56FE\u7247">
                <p class="weapp_pic__tips">\u70B9\u51FB\u56FE\u7247\u4F1A\u6253\u5F00\u5C0F\u7A0B\u5E8F\u6307\u5B9A\u8DEF\u5F84\u7684\u9875\u9762\u3002\u56FE\u7247\u89C4\u683C\u4E0D\u9650\uFF0C\u5927\u5C0F\u9650\u5236\u4E3A10M\u3002</p>
                <!-- <div class="weapp_pic__opts">
                  <mp-upload ref="imgupload" url="uploadCdnFile" :select="onImageUploadSelect" @complete="onImageUploadComplete" @error="onImageUploadError" @remove="onImageUploadRemove" extensions="bmp,png,jpeg,jpg,gif" mimetype="image/bmp,image/png, image/jpeg,image/jpg,image/gif" :preview="null" :maxsize="10*1024*1024" :previewmode='"img"' upload-wording="\u4E0A\u4F20\u56FE\u7247" re-upload-wording="\u4E0A\u4F20\u56FE\u7247"></mp-upload>
                  <mp-button class="weapp_pic__select-btn" @click="showImageDialog = true">\u4ECE\u56FE\u7247\u5E93\u9009\u62E9</mp-button>
                </div> -->

                <!-- \u4ECE\u56FE\u7247\u5E93\u9009\u62E9\u7684\u56FE\u7247\u5C55\u793A\u4F4D -->
                <!-- <div class="weapp_pic__preview_wrp" v-show="showPreviewFromPicGallery">
                  <img :src="searchResult.image" class="weapp_pic__preview">
                  <a href="javascript:;" class="weapp_pic__delete" @click="deleteSelectedPics">\u5220\u9664</a>
                </div> -->
                <div class="weapp_pic__opts" v-show="!searchResult.image">
                  <mp-upload ref="imgupload"
                    url="uploadCdnFile"
                    :select="onImageUploadSelect"
                    @complete="onImageUploadComplete"
                    @error="onImageUploadError"
                    @remove="onImageUploadRemove"
                    xtensions="bmp,png,jpeg,jpg,gif"
                    mimetype="image/bmp,image/png, image/jpeg,image/jpg,image/gif"
                    :preview="null"
                    :maxsize="10*1024*1024"
                    :previewmode='"img"'
                    :simple="true"
                    upload-wording="\u4E0A\u4F20\u56FE\u7247"
                    re-upload-wording="\u4E0A\u4F20\u56FE\u7247">
                  </mp-upload>
                  <mp-button class="weapp_pic__select-btn" @click="showImageDialog = true">\u4ECE\u56FE\u7247\u5E93\u9009\u62E9</mp-button>
                </div>

                <div class="weapp_pic__preview_wrp" v-show="searchResult.image" ref="imgPreviewArea">
                  <img class="weapp_pic__preview" :src="searchResult.image">
                  <!-- <a href="javascript:;" class="weapp_pic__delete" @click="deleteSelectedPics">\u5220\u9664</a> -->
                  <div class="weapp_pic__handle_wrp">
                    <div class="weapp_pic_change">
                      <div class="weapp_pic_change_list_wrp">
                        <div class="weapp_pic_change_list">
                          <div class="weapp_pic_change_item" @click="tirggerImageUpload">\u4E0A\u4F20\u56FE\u7247</div>
                          <div class="weapp_pic_change_item" @click="showImageDialog = true">\u4ECE\u56FE\u7247\u5E93\u9009\u62E9</div>
                        </div>
                      </div>
                    </div>
                    <div class="weapp_pic_del" @click="deleteSelectedPics"></div>
                  </div>
                </div>
              </mp-form-item>
              <!-- END \u5C55\u793A\u65B9\u5F0F \u56FE\u7247 -->
            </template>

            <!-- BEGIN \u5C55\u793A\u65B9\u5F0F \u5C0F\u7A0B\u5E8F\u5361\u7247 -->
            <mp-form-item v-show="searchResult.type == 'card'">
              <template slot="label">\u5361\u7247\u6807\u9898</template>
              <mp-input :countable="true" :maxlength="titleMaxLen" :disabled="gettingQrcode" v-model.trim="searchResult.title" :status="statusObj.title" clearable>
                <template slot="message">{{errTipsObj.title}}</template>
                <template slot="description">\u70B9\u51FB\u5C0F\u7A0B\u5E8F\u5361\u7247\u4F1A\u6253\u5F00\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u6307\u5B9A\u7684\u9875\u9762</template>
              </mp-input>
            </mp-form-item>
            <mp-form-item v-show="searchResult.type == 'card'" class="weapp-form-item__flex">
              <template slot="label">\u5361\u7247\u6837\u5F0F</template>
              <div class="card-preview__area" ref="cardPreviewArea">
                <div class="weapp_card app_context appmsg_card_context">
                  <div class="weapp_card_bd">
                    <div class="weapp_card_profile">
                      <span class="radius_avatar weapp_card_avatar"> <!--\u5C0F\u7A0B\u5E8F\u5934\u50CF-->
                        <img :src="searchResult.headimg_url">
                      </span>
                      <div class="weapp_card_nickname_wrp">
                        <span v-if="searchResult.hasGuaranteeFlag === 1" class="guarantee_icon">\u4EA4\u6613\u62C5\u4FDD</span>
                        <span class="weapp_card_nickname">{{searchResult.nickname}}</span>
                      </div>
                    </div>
                    <span class="weapp_card_info">
                      <span class="weapp_card_title">{{searchResult.title}}</span>
                      <!-- \u56FE\u7247\u9884\u89C8\u533A\u57DF -->
                      <!-- \u4E0A\u4F20\u56FE\u7247\u524D: \u663E\u793A\u4E0A\u4F20\u6309\u94AE\u548C\u63D0\u793A-->
                      <div class="weapp_card_thumb_wrp">
                        <div class="upload-image__wrp">
                          <p v-show="!cardImagePreview" class="upload_image__desc">\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\u4E3A5:4\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC710M\uFF0C\u6682\u4E0D\u652F\u6301\u52A8\u56FE\u3002</p>

                          <div :class="{'upload-image_btn-group': cardImagePreview}">
                            <mp-upload ref="cardTypeImgUpload" url="uploadCdnFile" :select="onCardImageUploadSelect"  @complete="onCardImageUploadComplete" @error="onCardImageUploadError" @remove="onCardImageUploadRemove" extensions="bmp,png,jpeg,jpg" mimetype="image/bmp,image/png, image/jpeg,image/jpg" :showsize="false" :simple="uploadCardImageSimple" :maxsize="10*1024*1024" :previewmode='"text"' :previewparse="onCardImagePreviewparse" :show-file-item-msg="false" upload-wording="\u4E0A\u4F20\u56FE\u7247" re-upload-wording="\u4E0A\u4F20\u56FE\u7247"></mp-upload>

                            <mp-button class="weapp_card_pic__select-btn" @click="showImageDialog = true">\u4ECE\u56FE\u7247\u5E93\u9009\u62E9</mp-button>
                          </div>
                        </div>

                        <span v-show="cardImagePreview" class="weapp_card_thumb_after_wrp js_after_preview" style="overflow: hidden; width: 215px; height: 175px;">
                          <img class="weapp_card_thumb_preview js_after_preview_img" :src="cardImagePreview" alt="">
                        </span>
                      </div>
                    </span>
                  </div>
                  <div class="weapp_card_ft">
                    <span class="weapp_card_logo">
                    <img class="icon_weapp_logo_mini" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAb1BMVEUAAAB4it11h9x2h9x2h9x2htx8j+R8i+B1h9x2h9x3h92Snv91htt2h9x1h9x4h9x1h9x1h9x2idx1h9t2h9t1htt1h9x1h9x1htx2h9x1h912h9x4h913iN17juOOjuN1iNx2h9t4h958i+B1htvejBiPAAAAJHRSTlMALPLcxKcVEOXXUgXtspU498sx69DPu5+Yc2JeRDwbCYuIRiGBtoolAAAA3ElEQVQoz62S1xKDIBBFWYiFYImm2DWF///G7DJEROOb58U79zi4O8iOo8zuCRfV8EdFgbYE49qFQs8ksJInajOA1wWfYvLcGSueU/oUGBtPpti09uNS68KTMcrQ5jce4kmN/HKn9XVPAo702JEdx9hTUrWUqVrI3KwUmM1NhIWMKdwiGvpGMWZOAj1PZuzAxHwhVSplrajoseBnbyDHAwvrtvKKhdqTtFBkL8wO5ijcsS3G1JMNvQ5mdW7fc0x0+ZcnlJlZiflAomdEyFaM7qeK2JahEjy5ZyU7jC/q/Rz/DgqEuAAAAABJRU5ErkJggg==" alt="">
                    \u5C0F\u7A0B\u5E8F</span>
                  </div>
                </div>
                <p v-show="!!errTipsObj.cardImage" class="weapp_card__errmsg">{{errTipsObj.cardImage}}</p>
              </div>
              <!-- \u56FE\u7247\u7F16\u8F91\u533A\u57DF\uFF0C\u9ED8\u8BA4\u9690\u85CF\uFF0C\u4E0A\u4F20\u56FE\u7247\u4E4B\u540E\u624D\u663E\u793A -->
              <div v-if="cardImagePreview" class="edit-image__area js_review-box">
                <!-- <p class="tips_global edit-image__tips">\u88C1\u526A\u56FE\u7247</p> -->
                <img class="edit-image__preview js_review-image-url" :src="cardImagePreview">
              </div>
            </mp-form-item>
            <!-- END \u5C55\u793A\u65B9\u5F0F \u5C0F\u7A0B\u5E8F\u5361\u7247 -->


            <!-- \u8FD9\u4E2A\u529F\u80FD\u6682\u672A\u542F\u7528 @baakqiu -->
            <mp-form-item v-if="scene === 'img'">
              <template slot="label">\u5E94\u7528\u5230\u6240\u6709\u56FE\u7247</template>
              <div class="weapp_img_apply_switch">
                <mp-switch
                  :true-value='1'
                  :false-value='0'
                  v-model="searchResult.applyAll"
                  @change="handleChangeApplyAll"
                ></mp-switch>
              </div>
            </mp-form-item>
          </mp-form>
        </div>

        <!-- \u89C6\u9891\u8D34\u7247\u5F39\u7A97 -->
        <div v-else-if="(ifSearchLink || step == 2) && isvideodot" class="weui-desktop-weapp-dialog__step-content step2">
          <div v-show="!ifSearchLink" class="frm_control_group">
              <label for="" class="frm_label">
                \u5C0F\u7A0B\u5E8F\u540D\u79F0
              </label>
              <div class="frm_controls frm_vertical_pt">
                {{ searchResult.nickname }}
                <a v-if="integrated" @click='toSearchApp' href='javascript:;' style="margin-left: 8px;">\u4FEE\u6539</a>
              </div>
          </div>
            <!-- \u641C\u7D22\u5C0F\u7A0B\u5E8F\u77ED\u94FE -->
            <mp-form-item v-if="ifSearchLink">
              <template slot="label">
                \u5C0F\u7A0B\u5E8F\u94FE\u63A5
                <mp-popover position="up-center" width="320" trigger="hover" :append-to-body="true" wrap-class="popper-in-weapp-dialog">
                  <p>\u8BF7\u524D\u5F80\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u53F3\u4E0A\u89D2\uFF0C\u590D\u5236\u94FE\u63A5\u540E\u7C98\u8D34\u5230\u6B64\u5904\u3002</p>
                  <img style="display: block; margin-top: 12px; width: 100%;" src="https://res.wx.qq.com/op_res/EIMHMmv5mxvQFAzwfZjNyKkyTGCbxyBDAz9XvAmsaqboMpQqf1ZC4f_NAPvEvl2mUhrAvVAqrnwgcK794rUKtw">
                  <a slot="target"><mp-icon style="position: relative; top: 5.5px;" :width="20" :height="20" icon="tips"></mp-icon></a>
                </mp-popover>
              </template>
              <mp-input v-model.trim="searchLink"
                clearable
                :status="statusObj.applink"
                :disabled="gettingQrcode"
                @keyup.enter="searchWeapplinkDebounce"
                placeholder="\u5FAE\u4FE1\u6253\u5F00\u5C0F\u7A0B\u5E8F\uFF0C\u53F3\u4E0A\u89D2\u590D\u5236\u94FE\u63A5\u540E\u7C98\u8D34\u5230\u6B64\u5904">
                <template slot="message">{{errTipsObj.applink}}</template>
                <template slot="description">
                  \u65E0\u6CD5\u590D\u5236\u94FE\u63A5\u65F6\uFF0C\u53EF\u641C\u7D22\u5C0F\u7A0B\u5E8F\uFF0C\u901A\u8FC7\u7ED9\u6307\u5B9A\u5FAE\u4FE1\u7528\u6237\u5F00\u542F\u590D\u5236\u8DEF\u5F84\u5165\u53E3\u7684\u65B9\u5F0F\u6765\u4FEE\u6539\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u3002<a @click='toSearchApp' href='javascript:;'>\u53BB\u641C\u7D22</a>
                </template>
              </mp-input>
            </mp-form-item>
            <!-- \u8F93\u5165\u5C0F\u7A0B\u5E8F\u8DEF\u5F84 -->
            <mp-form-item v-else>
                <template slot="label">
                  \u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u548C\u94FE\u63A5
                  <template v-if="searchResult.service_type == '4'">(\u9009\u586B)</template>
                </template>
                <mp-input :countable="true" :maxlength="pathMaxLen" v-model.trim="searchResult.path" :status="statusObj.path" :disabled="gettingQrcode" clearable>
                  <template slot="message">{{errTipsObj.path}}</template>
                  <template v-if="searchResult.service_type != '4'" slot="description">
                    \u652F\u6301\u8F93\u5165\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u548C\u94FE\u63A5\u3002\u9ED8\u8BA4\u663E\u793A\u5C0F\u7A0B\u5E8F\u9996\u9875\u8DEF\u5F84\uFF0C\u53EF\u66F4\u6539\u3002
                    <mp-popover :width="415" :append-to-body="true" wrap-class="popper-in-weapp-dialog" position="left-center" class="popover_path weui-desktop-popover_hover-show" trigger="hover">
                      <template slot="target"><a href="javascript:;">\u83B7\u53D6\u66F4\u591A\u9875\u9762\u8DEF\u5F84</a></template>
                      <template slot="content">
                        <mp-open-weapp-path :weappnickname="searchResult.nickname" :disabled="gettingQrcode" :appid="searchResult.appid"></mp-open-weapp-path>
                      </template>
                    </mp-popover>
                  </template>
                  <template v-else slot="description">
                    \u5C0F\u7A0B\u5E8F\u53EF\u6309\u201C\uFF1F\u53C2\u6570\u201D\u683C\u5F0F\u586B\u5165\u53C2\u6570\u6216\u4E0D\u586B\u5199\u6B64\u4FE1\u606F
                    <br>
                    \u9ED8\u8BA4\u663E\u793A\u5C0F\u7A0B\u5E8F\u9996\u9875\uFF0C\u53EF\u66F4\u6539\u3002
                  </template>
                </mp-input>
              </mp-form-item>
            <mp-form-item>
            <template slot="label">\u8D34\u7247\u6837\u5F0F</template>
            <template>
              <div class="upload-local-img__area">
                <div class="upload-local-img__head">
                  <div @mouseenter="showUploadTipsStatus = true" @mouseleave="showUploadTipsStatus = false">
                    <mp-upload url="uploadCdnFile"
                      :query="{ height:0, width:0, size:0, min_height:100, min_width:100, min_size:0 }"
                      extensions="bmp,png,jpeg,jpg"
                      mimetype="image/bmp,image/png,image/jpeg,image/jpg"
                      previewtype="tmp"
                      @complete="onVideoPasterAvatarUploadComplete"
                      :preview="null"
                      :showsize=false
                      :isvideodot=true
                      :filelist="fileList"
                      ref="upload"
                      :maxsize="2*1024*1024"
                      :simple="true"
                      @error="uploadVideoPasterAvatarError"
                    >
                      <div class="upload-local-img__picker__panel" slot="button">
                        <i slot="target" id="js_add_appmsg" class="icon35_common add_gray"></i>
                        <p class="upload-local-img__picker__panel__info">\u672C\u5730\u4E0A\u4F20</p>
                        <mp-popover class="upload-local-img__popover"
                          v-model="showUploadTipsStatus"
                          position="down-center"
                          :width="210"
                          content="\u56FE\u7247\u6700\u59272M\uFF0C\u4E0D\u652F\u6301GIF">
                        </mp-popover>
                      </div>
                    </mp-upload>
                  </div>
                  <!--<div
                    class="upload-local-img__preview"
                    v-show="pasterInfoInner.dot.avatar"
                    style="height: 110px; background-size: cover; background-color: #F4F5F7;"
                    :style="{'background-image': 'url(' + pasterInfoInner.dot.avatar + ')'}"
                  ></div>-->
                  <div class="upload-local-img__preview" v-if="pasterInfoInner.dot.avatar"
                    :style="{'background-image': 'url(' + pasterInfoInner.dot.avatar + ')'}">
                    <mp-tooltip class="upload-local-img__preview__tooltip" content="\u66FF\u6362\u56FE\u7247" trigger="hover">
                      <!--<a href="javascript:;" class="upload-local-img__preview__exchange" slot="target" @click="uploadImg">\u66FF\u6362\u56FE\u7247\u5751</a>-->
                      <button slot="target" class="weui-desktop-reset-icon-btn" @click="uploadImg">
                        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g><circle cx="16" cy="16" r="15.5"></circle><path d="M11.531 12.999h12.47v1.5H8.5a.5.5 0 0 1-.33-.876l4.933-4.324a.4.4 0 0 1 .594.527l-2.166 3.173zm8.939 6H8v-1.5h15.501a.5.5 0 0 1 .33.876l-4.933 4.323a.4.4 0 0 1-.594-.526l2.166-3.173z"></path></g></svg>
                      </button>
                    </mp-tooltip>
                  </div>
                </div>
                <div class="upload-local-img__body">
                  <mp-input
                    :maxlength="videoPasterTitleMaxLength"
                    :placeholder="titlePlaceholder"
                    v-model.trim="pasterInfoInner.dot.title"
                  >
                  </mp-input>
                  <mp-input
                    :maxlength="videoPasterDescMaxLength"
                    :placeholder="descPlaceholder"
                    v-model.trim="pasterInfoInner.dot.desc"
                  >
                  </mp-input>
                </div>
              </div>
            </template>
          </mp-form-item>
          <mp-form-item>
            <template slot="label">\u8D34\u7247\u51FA\u73B0\u65F6\u95F4</template>
            <template>
                <div class="video-sample__area">
                  <mp-video-dot
                    :videoinfo="videoinfo ? videoinfo[0] : null"
                    v-model="pasterInfoInner.begin_time"
                    :paster-info="pasterInfoInner"
                    :tips="tips"
                    :paster-min-begin-time="pasterMinBeginTime"
                    :paster-max-begin-time-to-end="pasterMaxBeginTimeToEnd"
                    :video-paster-show-time="videoPasterShowTime"
                    @change="pasterTimeChange"
                    @focus="onFocus"
                    ref="videoPaster"
                  />
                </div>
            </template>
          </mp-form-item>
        </div>
      </div>
    </template>

    <template slot="footer">

      <template v-if="ifSearchLink">
        <mp-button type="primary" @click="onDialogOk" :loading="gettingQrcode" :disabled="searchLinkStatus !== 2">\u786E\u5B9A</mp-button>
      </template>

      <template v-else-if="step==1">
        <mp-button @click="onDialogClose">\u53D6\u6D88</mp-button>
        <mp-button type="primary" @click="nextStep" :disabled="!searchResult.appid">\u4E0B\u4E00\u6B65</mp-button>
      </template>

      <template v-else-if="step==2">
        <mp-button @click="preStep" :disabled="gettingQrcode">\u4E0A\u4E00\u6B65</mp-button>
        <mp-button type="primary" @click="onDialogOk" :loading="gettingQrcode">\u786E\u5B9A</mp-button>
      </template>
    </template>
  </component>

  <!-- \u65B0\u5F39\u7A97 -->

  <!-- \u56FE\u7247\u9009\u62E9\u5F39\u7A97 -->
  <mp-image-dialog
    v-if="showImageRadio || showCardRadio"
    v-model="showImageDialog"
    :uploadscene="3"
    @select="selectImageFromPicGallery"
  >
    <template slot="uploadTips">\u5927\u5C0F\u4E0D\u8D85\u8FC710M</template>
  </mp-image-dialog>
</div>
`},"./src/pages/modules/open_weapp_path/open_weapp_path.js":function(f,w,o){var T=o("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");var x=o("./src/pages/modules/open_weapp_path/open_weapp_path.tpl");var _=o("./src/3rd/store/store.js");var m=o("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");var d=o("./src/3rd/editor/common/monitor.js");o("./src/pages/modules/open_weapp_path/open_weapp_path.less");T.component("mp-open-weapp-path",{template:x,props:{extclass:{type:String,default:""},weappnickname:{type:String,default:""},disabled:{type:Boolean,default:false},appid:{type:String,default:""}},watch:{wxacct:function r(){if(this.statusObj.wxacct!=="normal"){this.errTipsObj.wxacct="";this.statusObj.wxacct="noraml"}},weappnickname:function r(i){this.innerWeappnickname=i},appid:function r(i){this.innerAppid=i},disabled:function r(i){this.innerDisabled=i}},data:function r(){var i="";if(window.wx&&window.wx.commonData&&window.wx.commonData.uin){i=window.wx.commonData.uin}else if(window.wx&&window.wx.data&&window.wx.data.uin){i=window.wx.data.uin}return{innerWeappnickname:this.weappnickname,innerDisabled:this.disabled,innerAppid:this.appid,wxacct:"",errTipsObj:{wxacct:""},statusObj:{wxacct:"normal"},cacheList:[],cacheKey:"weapp_path_users_"+i,cacheMaxLen:3,openingWeappPath:false}},created:function r(){this.getCacheList()},methods:{getCacheList:function r(){try{var i=_.get(this.cacheKey)||[];if(i.length>0){for(var n=0,s=i.length;n<s;n++){i[n].nick_name_encode=encodeURIComponent(i[n].nick_name)}this.cacheList=i.slice(0,this.cacheMaxLen)}}catch(a){this.cacheList=[]}},updateCache:function r(){if(!this.wxacct){return}var i=this.cacheList.concat([]);var n=false;for(var s=0,a=i.length;s<a;s++){var p=i[s];if(p.nick_name===this.wxacct){n=true;break}}if(n===false){i.unshift({nick_name:this.wxacct,nick_name_encode:encodeURIComponent(this.wxacct)});this.cacheList=i.slice(0,this.cacheMaxLen);_.set(this.cacheKey,this.cacheList)}},selectedHistory:function r(i){var n=this.cacheList[i].nick_name;if(n&&this.wxacct!==n){this.wxacct=n;this.onOpenWeappPath()}},removeHistory:function r(i){this.cacheList.splice(i,1);_.set(this.cacheKey,this.cacheList)},showErrTips:function r(i,n){if(typeof this.errTipsObj[i]!=="undefined"&&typeof this.statusObj[i]!=="undefined"){this.errTipsObj[i]=n;this.statusObj[i]="warn"}},hideErrTips:function r(i){if(typeof this.errTipsObj[i]!=="undefined"&&typeof this.statusObj[i]!=="undefined"){this.errTipsObj[i]="";this.statusObj[i]="normal"}},onOpenWeappPath:function r(){var i=this;if(this.innerDisabled||this.openingWeappPath||!this.wxacct){return}d.setSum(122443,50,1);d.send();this.hideErrTips("wxacct");this.openingWeappPath=true;var n=this.wxacct;var s=this.innerAppid;m.post({url:"/cgi-bin/copywxapath?action=sendmsg_of_copywxapath",data:{appid:s,username:n}},function(a){i.openingWeappPath=false;if(i.innerAppid!==s||i.wxacct!==n){return}if(!a||!a.base_resp){i.showErrTips("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5");return}var p=a.base_resp.ret*1;if(p===0){i.$tipsSuc("\u5DF2\u5F00\u542F");i.updateCache();i.$emit("success",i.innerAppid,i.wxacct)}else{if(p===5000018){i.showErrTips("wxacct",'\u8BF7\u5728\u624B\u673A\u5FAE\u4FE1"\u6211-\u8BBE\u7F6E-\u9690\u79C1-\u6DFB\u52A0\u6211\u7684\u65B9\u5F0F"\uFF0C\u5F00\u542F"\u53EF\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u627E\u5230\u6211"\u7684"\u5FAE\u4FE1\u53F7"\uFF0C\u5426\u5219\u53EF\u80FD\u65E0\u6CD5\u590D\u5236\u9875\u9762\u8DEF\u5F84')}else if(p===5000049){i.showErrTips("wxacct","\u8BF7\u52FF\u9891\u7E41\u5F00\u542F\uFF0C\u53EF\u57281\u5206\u949F\u540E\u91CD\u8BD5")}else if(p===5000050){i.showErrTips("wxacct","\u8BE5\u5FAE\u4FE1\u7528\u6237\u5C1A\u672A\u5173\u6CE8\u5F53\u524D\u516C\u4F17\u53F7\uFF0C\u8BF7\u5173\u6CE8\u540E\u91CD\u8BD5")}else if(p===5000051){i.showErrTips("wxacct","\u8BF7\u8F93\u5165\u6709\u6548\u7684\u5FAE\u4FE1\u53F7")}else{m.handleRet(a,{url:"/cgi-bin/copywxapath?action=sendmsg_of_copywxapath",msg:"\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"})}}},function(){i.openingWeappPath=false;if(i.innerAppid!==s||i.wxacct!==n){return}i.showErrTips("wxacct","\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")})}}})},"./src/pages/modules/open_weapp_path/open_weapp_path.less":function(f,w,o){"use strict";o.r(w)},"./src/pages/modules/open_weapp_path/open_weapp_path.tpl":function(f,w){f.exports=`<div class="open_weapp_path">
  <p :class="['popover_content_morepage_desc', extclass]">\u6307\u5B9A\u5FAE\u4FE1\u7528\u6237\u53EF\u5728\u5C0F\u7A0B\u5E8F\u83B7\u5F97\u9875\u9762\u8DEF\u5F84\uFF0C\u8BF7\u786E\u4FDD\u8BE5\u7528\u6237\u5FAE\u4FE1\u7248\u672C\u4E3A6.7.2\u53CA\u4EE5\u4E0A
    <a class="link"
      target="_blank"
      href="http://kf.qq.com/faq/180725biaAn2180725VnQjYF.html">
      \u67E5\u770B\u64CD\u4F5C\u6307\u5F15
    </a>
  </p>
  <div class="step_vertical_container">
    <div class="step_vertical_ele">
      <p class="step_vertical_title">\u5F00\u542F\u5165\u53E3</p>
      <div class="step_vertical_content">
        <mp-form weui="true" @submit.native.prevent>
          <mp-form-item>
            <mp-input v-model.trim="wxacct" placeholder="\u8BF7\u8F93\u5165\u5FAE\u4FE1\u53F7" :disabled="innerDisabled" :status="statusObj.wxacct">
              <template slot="message">{{errTipsObj.wxacct}}</template>
              <template slot="description">
                <p class="frm_msg_result" v-if="cacheList.length !== 0">\u5DF2\u5F00\u542F</p>
                <div class="tags_container" v-if="cacheList.length !== 0">
                  <span v-for="(item,index) in cacheList" class="tag_container" :key="item.nick_name_encode" @click="selectedHistory(index)">{{item.nick_name}}
                    <i class="icon16_common close_flat" @click.stop="removeHistory(index)"></i>
                  </span>
                </div>
                <template v-if="innerWeappnickname">\u8BE5\u5FAE\u4FE1\u7528\u6237\u53EF\u5728\u201C{{innerWeappnickname}}\u201D\u5C0F\u7A0B\u5E8F\u4E2D\u590D\u5236\u4EFB\u610F\u9875\u9762\u8DEF\u5F84\uFF0C\u5341\u5206\u949F\u5185\u6709\u6548</template>
              </template>
              <template slot="append">
                <mp-button :disabled="innerDisabled" @click="onOpenWeappPath" :loading="openingWeappPath">\u5F00\u542F</mp-button>
              </template>
            </mp-input>
          </mp-form-item>
        </mp-form>
      </div>
    </div>
    <div class="step_vertical_ele">
      <p class="step_vertical_title">\u83B7\u53D6\u8DEF\u5F84</p>
      <p class="step_vertical_content popover_content_morepage_desc">\u8BE5\u5FAE\u4FE1\u7528\u6237\u53EF\u6253\u5F00\u5C0F\u7A0B\u5E8F\u53F3\u4E0A\u89D2\u83DC\u5355\uFF0C\u70B9\u51FB\u201C\u590D\u5236\u9875\u9762\u8DEF\u5F84\u201D\u5E76\u7C98\u8D34\u81F3\u5DE6\u4FA7\u201C\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u201D\u4E2D</p>
    </div>
  </div>
</div>`},"./src/pages/modules/weapp_search/weapp_search.js":function(f,w,o){var T=o("./node_modules/.pnpm/vue@2.7.15/node_modules/vue/dist/vue.min.js");o("./src/pages/modules/weapp_search/weapp_search.less");var x=o("./src/pages/modules/weapp_search/weapp_search.tpl");var _=o("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");var m=o("./src/pages/modules/weapp_search/weapp_search_utils.js");T.component("mp-weapp-search",{template:x,props:{extclass:{type:String,default:""},isvideodot:{type:Boolean,default:false}},data:function d(){return{maxHistoryListLen:13,commonWeappList:[],hasGetCommonWeapp:false,bindedWeappList:[],pageHistoryList:[],errorTips:"",searchKey:"",searchResult:null}},computed:{},created:function d(){this.getCommonWeapp();this.getBindedWeapp()},watch:{searchKey:function d(){this.hideSearchErr()},searchResult:function d(r){this.$emit("resultChange",r)}},methods:{mergeHistoryList:function d(){if(this.hasGetCommonWeapp!==true){return}var r=this.bindedWeappList;var i=this.commonWeappList.concat([]);for(var n=0,s=r.length;n<s;n++){if(i.length>=this.maxHistoryListLen){break}var a=r[n];var p=false;for(var u=0,k=i.length;u<k;u++){var R=i[u];if(R.appid===a.appid){p=true;break}}if(p===false){i.push({appid:a.appid,func_infos:[],headimg_url:a.pic_url||"http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0",main_page:a.main_page,nickname:a.nick_name,released:1,service_type:a.service_type})}}this.pageHistoryList=i},getCommonWeapp:function d(){var r=this;var i="";if(this.isvideodot){i="/cgi-bin/operate_appmsg?sub=common_weapp&type=1"}else{i="/cgi-bin/operate_appmsg?sub=common_weapp"}_.get({url:i},function(n){r.hasGetCommonWeapp=true;if(n&&n.base_resp&&n.base_resp.ret*1===0&&n.items&&n.items.length>0){var s=n.items.length-r.maxHistoryListLen;if(s>0){n.items.splice(r.maxHistoryListLen,s)}var a=[];for(var p=0,u=n.items.length;p<u;p++){a.push(n.items[p].weapp)}r.commonWeappList=a}r.mergeHistoryList()},function(){r.hasGetCommonWeapp=true;r.mergeHistoryList()})},getBindedWeapp:function d(){var r=this;m.getBindedWeapp({callback:function i(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(n.data&&n.data.length>0){r.bindedWeappList=n.data;r.mergeHistoryList()}}})},selectedHistory:function d(r){var i=this.pageHistoryList[r].appid;if(i&&this.searchKey!==i){this.searchKey=i;this.searchWeapp()}},showSearchErr:function d(r){this.errorTips=r;this.$tipsErr(r)},hideSearchErr:function d(){this.errorTips=""},onSearchClear:function d(){this.hideSearchErr();this.searchKey=""},onSearch:function d(){this.searchWeapp()},searchWeapp:function d(){var r=this;if(!this.searchKey){return}this.hideSearchErr();this.searchResult=null;var i=this.searchKey;m.searchWeapp({key:i,isvideodot:this.isvideodot,onSuccess:function n(s){if(i!==r.searchKey){return}var a="";if(s.service_type*1===7){a="\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5C0F\u7A0B\u5E8F\u7684\u540D\u79F0/AppID/\u8D26\u53F7\u539F\u59CBID\uFF0C\u5E76\u786E\u4FDD\u5C0F\u7A0B\u5E8F\u5141\u8BB8\u88AB\u641C\u7D22"}else if(s.released*1!==1){a="\u8BE5\u5C0F\u7A0B\u5E8F\u672A\u53D1\u5E03\uFF0C \u65E0\u6CD5\u6DFB\u52A0"}else{r.searchResult=s}if(a){r.showSearchErr(a)}},onError:function n(s,a,p){if(i!==r.searchKey){return}if(typeof p==="function"){p()}else if(s){r.showSearchErr(s)}}})}}})},"./src/pages/modules/weapp_search/weapp_search.less":function(f,w,o){"use strict";o.r(w)},"./src/pages/modules/weapp_search/weapp_search.tpl":function(f,w){f.exports=`<div :class="['weapp_search_component', extclass]">
  <!--\u641C\u7D22-->
  <mp-search
    placeholder="\u8BF7\u8F93\u5165\u8981\u641C\u7D22\u7684\u5C0F\u7A0B\u5E8F\u540D\u79F0/AppID/\u8D26\u53F7\u539F\u59CBID"
    :clear="true"
    :require="true"
    v-model="searchKey"
    @clear="onSearchClear"
    @search="onSearch"
  >
    <span v-if="!!errorTips" slot="message">{{errorTips}}</span>
  </mp-search>

  <!--\u6700\u8FD1\u5E38\u7528\u6807\u7B7E-->
  <div class="common_container">
    <p v-if="pageHistoryList.length > 0" class="common_title">\u5E38\u7528</p>
    <a v-for="(item,index) in pageHistoryList" class="common_ele" href="javascript:;" :key="item.appid" @click="selectedHistory(index)">{{item.nickname||item.appid}}</a>
  </div>

  <!--\u641C\u7D22\u51FA\u7ED3\u679C-->
  <ul v-if="searchResult" class="wechat_list weapplink_list">
    <li class="weapplink_item selected">
      <div class="weapplink_item_inner">
        <div class="weapplink_info">
          <img class="weapplink_avatar" :src="searchResult.headimg_url">
          <strong class="weapplink_name" :title="searchResult.nickname">{{searchResult.nickname}}</strong>
        </div>
      </div>
    </li>
  </ul>
</div>
`},"./src/pages/modules/weapp_search/weapp_search_utils.js":function(f,w,o){var T=o("../../packages/mmbizweb-web2-common/modules/utils/cgi.js");var x="http://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0";function _(r){var i=r.link;var n={};n.link=i;if(r.isvideodot){n.type=1}if(r.scene){n.scene=r.scene}T.post({url:"/cgi-bin/operate_appmsg?sub=search_weapp_link",data:n},function(s){if(i!==r.link){return}var a="";var p=null;if(!s||!s.base_resp){a="\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"}else if(s.base_resp.ret*1===0){if(s.weapp){p=s.weapp;p.headimg_url=p.headimg_url||x;p.path=s.weapp_path}else{a="\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"}}else if(s.base_resp.ret*1===64569){a="\u8BE5\u5C0F\u7A0B\u5E8F\u4E0D\u5141\u8BB8\u641C\u7D22\u6216\u88AB\u5C01\u7981\uFF0C\u65E0\u6CD5\u6DFB\u52A0\u6B64\u94FE\u63A5"}else if(s.base_resp.ret*1===64570){a="\u8BE5\u5C0F\u7A0B\u5E8F\u4E0D\u5141\u8BB8\u641C\u7D22\u6216\u88AB\u5C01\u7981\uFF0C\u65E0\u6CD5\u6DFB\u52A0\u6B64\u94FE\u63A5"}else if(s.base_resp.ret*1===64572){a="\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5C0F\u7A0B\u5E8F\u7684\u94FE\u63A5\uFF0C\u5E76\u786E\u4FDD\u5C0F\u7A0B\u5E8F\u5141\u8BB8\u88AB\u641C\u7D22"}else{a="\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"}if(a&&typeof r.onError==="function"){r.onError(a,s)}else if(!a&&typeof r.onSuccess==="function"){r.onSuccess(p,s)}},function(){if(key!==r.key){return}if(typeof r.onError==="function"){r.onError("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}})}function m(r){var i=r.key;var n={};n.key=i;if(r.isvideodot){n.type=1}T.post({url:"/cgi-bin/operate_appmsg?sub=search_weapp",data:n},function(s){if(i!==r.key){return}var a="";var p=null;var u=null;if(!s||!s.base_resp){a="\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"}else if(s.base_resp.ret*1===0){if(!s.items||s.items.length===0){a="\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5C0F\u7A0B\u5E8F\u7684\u540D\u79F0/AppID/\u8D26\u53F7\u539F\u59CBID\uFF0C\u5E76\u786E\u4FDD\u5C0F\u7A0B\u5E8F\u5141\u8BB8\u88AB\u641C\u7D22"}else{p=s.items[0].weapp;p.headimg_url=p.headimg_url||x}}else if(s.base_resp.ret*1===64569){a="\u5C0F\u7A0B\u5E8F\u88AB\u9650\u5236\u641C\u7D22\u3002\u8BF7\u786E\u8BA4\u5C0F\u7A0B\u5E8F\u641C\u7D22\u80FD\u529B\u662F\u5426\u5904\u4E8E\u5C01\u7981\u72B6\u6001"}else if(s.base_resp.ret*1===64570){a="\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5C0F\u7A0B\u5E8F\u7684\u540D\u79F0/AppID/\u8D26\u53F7\u539F\u59CBID\uFF0C\u5E76\u786E\u4FDD\u5C0F\u7A0B\u5E8F\u5141\u8BB8\u88AB\u641C\u7D22"}else{a="\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"}if(a&&typeof r.onError==="function"){r.onError(a,s,u)}else if(!a&&typeof r.onSuccess==="function"){r.onSuccess(p,s)}},function(){if(i!==r.key){return}if(typeof r.onError==="function"){r.onError("\u7CFB\u7EDF\u7E41\u5FD9\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5")}})}var d=function r(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};T.get({url:"/advanced/operselfmenu?action=get_bind_wxopen_info"},function(n){if(n&&n.base_resp&&n.base_resp.ret*1===0&&n.bind_info){var s;try{s=JSON.parse(n.bind_info).bind_list||[]}catch(a){s=[]}i.callback({data:s})}else{i.callback({data:null});T.handleRet(n,{id:"64524",key:"2",url:"/advanced/operselfmenu?action=get_bind_wxopen_info",msg:"\u7CFB\u7EDF\u7E41\u5FD9",showMsg:false})}},function(){i.callback({data:null})})};f.exports={searchWeapp:m,getBindedWeapp:d,searchWeappLink:_}}}]);
