"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2759],{1381:function(t,e,n){n.d(e,{E:function(){return i},a:function(){return s},i:function(){return o}}),(0,n(1589).e)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},s=t=>(...e)=>({_$litDirective$:t,values:e}),o=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this.t=t,this._$AM=e,this.i=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},6700:function(t,e,n){function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let n=new CSSStyleSheet;n.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,n]}n.d(e,{n:function(){return i}}),(0,n(1589).e)()},3240:function(t,e,n){n.d(e,{u:function(){return a}});var i=n(1381),s=n(7250),o=n(1589);(0,o.e)();var a=(0,i.a)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,i;if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!(null!=(n=this.nt)&&n.has(i))&&this.st.add(i);return this.render(e)}let o=t.element.classList;for(let t of this.st)t in e||(o.remove(t),this.st.delete(t));for(let t in e){let n=!!e[t];n===this.st.has(t)||null!=(i=this.nt)&&i.has(t)||(n?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return s.E}});(0,o.e)()},2759:function(t,e,n){n.r(e),n.d(e,{CommentsCommentInput:function(){return _}});var i=n(9583),s=n(1589),o=n(3240);n(1381);var a=n(6700),l=n(3605),r=n(7250);(0,s.e)(),(0,s.e)();var u=class{constructor(){this.keys=["@"],this.input=null,this.mentions=[]}setInput(t){this.event=t,this.input=t.target,this.key=t.data}getMentions(t,e=[]){return e.length>0&&(this.mentions=e),this.mentions.filter(e=>t.includes(e.name))}setMentions(t){this.mentions=t}addMention(t){this.mentions.some(e=>e.userId===t.userId)||this.mentions.push(t)}clearMentions(){this.mentions=[]}getSelectionPosition(){var t;let e=this.getSelectionStart(),n=this.getLastKeyBeforeCaret(e);return{start:(null!=(t=null==n?void 0:n.keyIndex)?t:-1)+1,end:e}}getSelectionStart(){var t;return null==(t=this.input)?void 0:t.selectionStart}setCaretPosition(t){this.input.selectionEnd=t}getValue(){var t;return null==(t=this.input)?void 0:t.value}setValue(t){this.input.value=t}getLastKeyBeforeCaret(t){let[e]=this.keys.map(e=>({key:e,keyIndex:this.getValue().lastIndexOf(e,t-1)})).sort((t,e)=>e.keyIndex-t.keyIndex);return e}searchMention(t,e){return -1!==e?this.getValue().substring(e+1,t):null}isDeletion(){return"deleteContentBackward"===this.event.inputType||"deleteContentForward"===this.event.inputType||"deleteWordBackward"===this.event.inputType}insertMention(t,e,n){if(this.isDeletion())return;let{id:i,name:s}=n,o=`${this.getValue().slice(0,t)+s} ${this.getValue().slice(e,this.getValue().length)}`;this.setValue(o),this.input.focus(),this.addMention({userId:i,name:s}),this.setCaretPosition(t+s.length+1)}};(0,s.e)();var h={SHOW:"show",HIDE:"hide"},c={action:h.HIDE,mentions:[],findDigitParticipant:!1},d=(t,e,n)=>{var i,s;let o=[];if(o=null==n?void 0:n.filter(t=>null==t?void 0:t.email),t.length>0&&(o=o.filter(e=>(null==e?void 0:e.name.toLowerCase().search(t.toLowerCase()))!==-1),t===(null==(s=null==(i=o[0])?void 0:i.name)?void 0:s.toLowerCase()))){let t=m(o,e);return{action:h.HIDE,mentions:t,findDigitParticipant:!0}}if(!((null==o?void 0:o.length)>0))return c;let a=m(o,e);return{action:h.SHOW,mentions:a,findDigitParticipant:!1}},m=(t,e)=>t.map(t=>({id:t.id,name:t.name,avatar:t.avatar,email:t.email,position:e})),p={matchParticipant:(t,e,n)=>d(t,e,n)},v=(0,l.D)(r.a),b=[v.styles,i.s],_=class extends v{constructor(){super(),this.pinCoordinates=null,this.autoCompleteHandler=new u,this.addAtSymbolInCaretPosition=()=>{let t=this.shadowRoot.querySelector(".comments__input__textarea"),e=new InputEvent("input",{bubbles:!0,cancelable:!0});Object.defineProperty(e,"data",{value:"@",writable:!0}),t.dispatchEvent(e)},this.getCommentInput=()=>this.shadowRoot.querySelector(".comments__input__textarea"),this.userMentionedByTextInput=t=>{this.mentionList=[];let e={detail:(0,s.x)({},t[0])};this.insertMention(e)},this.buttonAtSymbol=()=>{var t;let e=this.autoCompleteHandler.getSelectionStart(),n=this.autoCompleteHandler.getValue();this.autoCompleteHandler.setValue(`${n.slice(0,e)}@${n.slice(e,n.length)}`),e+=1;let i=this.autoCompleteHandler.getLastKeyBeforeCaret(e),s=null!=(t=null==i?void 0:i.keyIndex)?t:-1;return{searchText:this.autoCompleteHandler.searchMention(e,s),position:{start:s+1,end:e}}},this.focusInput=()=>{this.getCommentInput().focus()},this.handleInput=t=>{var e,n;(null==(e=this.commentInput)?void 0:e.value.length)===0?this.btnActive=!1:this.btnActive=!0,this.autoCompleteHandler.setInput(t);let i=this.autoCompleteHandler.getSelectionStart(),s=this.autoCompleteHandler.getLastKeyBeforeCaret(i),o=null!=(n=null==s?void 0:s.keyIndex)?n:-1;if(-1===i)return;let a=this.autoCompleteHandler.searchMention(i,o),l=this.autoCompleteHandler.getSelectionPosition(),r="@"===t.data&&-1===o,u="@"===t.data&&i-1!==o;if(r||u){let t=this.buttonAtSymbol();a=t.searchText,l=t.position}if(null===a){this.mentionList=[];return}let{action:h,mentions:c,findDigitParticipant:d}=p.matchParticipant(a,l,this.participantsList);if(d){this.userMentionedByTextInput(c);return}"show"===h&&(this.mentionList=c),"hide"===h&&(this.mentionList=[])},this.insertMention=t=>{let{id:e,name:n,avatar:i,email:s,position:o}=t.detail;this.autoCompleteHandler.insertMention(o.start,o.end,{id:e,name:n,avatar:i,email:s}),this.mentionList=[],this.updateHeight()},this.sendEnter=t=>{var e;if("Escape"!==t.key&&t.stopImmediatePropagation(),"Enter"!==t.key||t.shiftKey||t.preventDefault(),"Enter"!==t.key||t.shiftKey||(null==(e=this.mentionList)?void 0:e.length)>0)return;let n=this.commentInput,i=n.value.trim();if(!i)return;let s=this.autoCompleteHandler.getMentions(i);this.emitEvent(this.eventType,{text:i,mentions:s,position:this.pinCoordinates},{composed:!1,bubbles:!1}),n.value="",this.sendBtn.disabled=!0,this.updateHeight()},this.closeEditMode=()=>{this.emitEvent("close-edit-mode",{},{composed:!1,bubbles:!1}),this.hideInput=!0},this.onTextareaFocus=()=>{let t=this.optionsContainer,e=this.horizontalRule,n=this.commentInput;t.classList.add("active-textarea"),e.classList.add("comments__input__divisor"),n.classList.add("active-textarea")},this.onTextareaLoseFocus=t=>{var e,n;let i=null==(n=null==(e=t.explicitOriginalTarget)?void 0:e.parentNode)?void 0:n.host,s=this.mentionButton;if(s===t.explicitOriginalTarget||s===t.relatedTarget)return;if(this.closeButton.contains(i)||this.closeButton.contains(t.explicitOriginalTarget)||this.closeButton.contains(t.relatedTarget)){this.cancelComment();return}if(!this.shadowRoot.contains(t.target))return;let o=this.optionsContainer,a=this.horizontalRule,l=this.commentInput;l.value.length||(o.classList.remove("active-textarea"),a.classList.remove("comments__input__divisor"),l.classList.remove("active-textarea"))},this.cancelComment=()=>{document.body.dispatchEvent(new KeyboardEvent("keyup",{key:"Escape"}))},this.commentInputEditableOptions=()=>{var t;if(this.editable)return(0,r.V)`
      <button
        id="close"
        @click=${this.closeEditMode}
        class="icon-button icon-button--medium icon-button--clickable comments__input__button comments__input__close-button"
      >
        <superviz-icon name="close" size="sm"></superviz-icon>
      </button>
      <button
        id="confirm"
        class="icon-button icon-button--medium icon-button--clickable icon-button--no-hover comments__input__button comments__input__send-button"
        disabled
        @click=${this.send}
      >
        <superviz-icon
          color=${null!=(t=this.sendBtn)&&t.disabled||!this.sendBtn?"black":"white"}
          name="check"
          size="sm"
        ></superviz-icon>
      </button>
    `},this.commentInputOptions=()=>{var t;if(!this.editable)return(0,r.V)`
      <button
        class="icon-button icon-button--medium icon-button--clickable comments__input__button comments__input__close-button align-send-btn"
        @click=${this.cancelComment}
      >
        <superviz-icon name="close" size="sm"></superviz-icon>
      </button>
      <button
        class="comments__input__button comments__input__send-button align-send-btn"
        disabled
        @click=${this.send}
      >
        <superviz-icon
          color=${null!=(t=this.sendBtn)&&t.disabled||!this.sendBtn?"black":"white"}
          name="line-arrow-right"
          size="sm"
        ></superviz-icon>
      </button>
    `},this.btnActive=!1,this.text="",this.mentionList=[],this.mentions=[],this.mode="readonly"}get commentInput(){return this.shadowRoot.querySelector(".comments__input__textarea")}get mentionButton(){return this.shadowRoot.querySelector(".mention-button")}get sendBtn(){return this.shadowRoot.querySelector(".comments__input__send-button")}get optionsContainer(){return this.shadowRoot.querySelector(".comments__input__options")}get horizontalRule(){return this.shadowRoot.querySelector(".sv-hr")}get closeButton(){return this.shadowRoot.querySelector(".comments__input__close-button")}connectedCallback(){super.connectedCallback(),["create-annotation","create-comment"].includes(this.eventType)&&this.addEventListener("keyup",this.sendEnter)}disconnectedCallback(){if(super.disconnectedCallback(),!["create-annotation","create-comment"].includes(this.eventType))return;let t=this.getCommentInput();this.removeEventListener("keyup",this.sendEnter),t.removeEventListener("keydown",this.sendEnter),t.removeEventListener("click",this.focusInput),t.addEventListener("input",this.handleInput)}firstUpdated(t){this.updateComplete.then(()=>{this.emitEvent("comment-input-ready",{},{composed:!1,bubbles:!1});let t=this.getCommentInput();if(t&&(t.addEventListener("input",this.handleInput),t.addEventListener("click",this.focusInput),t.addEventListener("keydown",this.sendEnter)),this.text.length>0){let t=this.participantsList.map(({id:t,name:e})=>({userId:t,name:e}));this.mentions=this.autoCompleteHandler.getMentions(this.text,t),this.autoCompleteHandler.setMentions(this.mentions)}this.editable&&this.focusInput(),a.n.call(this,["comments"])})}updated(t){t.has("mode")&&"editable"===this.mode&&(this.focusInput(),this.updateHeight(),this.sendBtn.disabled=!1,this.btnActive=!0),t.has("text")&&this.text.length>0&&(this.commentInput.value=this.text,this.updateHeight()),t.has("btnActive")&&(this.sendBtn.disabled=!this.btnActive)}updateHeight(){let t=this.commentInput;t.style.height="40px";let e=t.scrollHeight+14;47===e&&(e=40),t.style.height=`${e}px`,this.sendBtn.disabled=!(t.value.length>0)}send(t){var e;if(t.preventDefault(),(null==(e=this.mentionList)?void 0:e.length)>0)return;let n=this.commentInput,i=n.value,s=this.autoCompleteHandler.getMentions(i);this.emitEvent(this.eventType,{text:i,mentions:s,position:this.pinCoordinates},{composed:!1,bubbles:!1}),n.value="",this.sendBtn.disabled=!0,this.updateHeight()}render(){var t;let e={comments__input__textarea:!0,"fixed-width":"create-annotation"===this.eventType},n={comments__input:!0,"comments__input--editable":this.editable,"hide-input":this.hideInput};return(0,r.V)`
      <div class="${(0,o.u)(n)}">
        <textarea
          id="comments__input__textarea"
          class=${(0,o.u)(e)}
          placeholder=${null!=(t=this.placeholder)?t:"Add comment..."}
          @input=${this.updateHeight}
          @focus=${this.onTextareaFocus}
          @blur=${this.onTextareaLoseFocus}
          spellcheck="false"
        ></textarea>
        <superviz-comments-mention-list
          .participants=${this.mentionList}
          @participant-selected=${this.insertMention}
        ></superviz-comments-mention-list>
        <div class="sv-hr"></div>
        <div class="comments__input__options">
          <button
            @click=${this.addAtSymbolInCaretPosition}
            class="mention-button icon-button icon-button--medium icon-button--clickable"
          >
            <superviz-icon name="mention" size="sm"></superviz-icon>
          </button>
          <div class="comment-input-options">
            ${this.commentInputOptions()} ${this.commentInputEditableOptions()}
          </div>
        </div>
      </div>
    `}};_.styles=b,_.properties={eventType:{type:String},text:{type:String},btnActive:{type:Boolean},editable:{type:Boolean},placeholder:{type:String},mentions:{type:Array},mentionList:{type:Object},participantsList:{type:Object},hideInput:{type:Boolean},mode:{type:String}},_=(0,s.D)([(0,r.t)("superviz-comments-comment-input")],_)}}]);