"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9022],{9022:function(t,e,n){n.r(e),n.d(e,{CommentsAnnotationItem:function(){return h}});var s=n(9583),i=n(1589),o=n(3240);n(1381);var a=n(6700),r=n(3605),l=n(7250);(0,i.e)();var d=(0,r.D)(l.a),m=[d.styles,s.p],h=class extends d{constructor(){super(...arguments),this.selectAnnotation=t=>{let{uuid:e}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:e}}))},this.resolveAnnotation=({detail:t})=>{let{uuid:e}=this.annotation,{resolved:n,type:s}=t,i="resolve-annotation"===s&&"All comments"===this.annotationFilter;this.emitEvent("resolve-annotation",{uuid:e,resolved:n}),i&&(this.shouldShowUndoResolved=!0)},this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1},this.generateExpandedCommentsTemplate=(t,e)=>{var n,s,i,o;return 0===e?(0,l.V)``:(0,l.V)`
      <superviz-comments-comment-item
        uuid=${t.uuid}
        avatar=${null==(o=null==(i=null==(s=null==(n=this.annotation)?void 0:n.comments)?void 0:s.at(e))?void 0:i.participant)?void 0:o.avatar}
        username=${t.participant.name||"Anonymous"}
        text=${t.text}
        createdAt=${t.createdAt}
        annotationId=${this.annotation.uuid}
        participantsList=${JSON.stringify(this.participantsList)}
        mentions=${JSON.stringify(t.mentions)}
        class="comments__replies"
      ></superviz-comments-comment-item>
    `},this.updateEditMode=({detail:{editing:t}})=>{this.hideInput=t}}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then(()=>{a.n.call(this,["comments"])})}get filterIsAll(){return"All comments"===this.annotationFilter}get filterIsResolved(){return"Resolved comments"===this.annotationFilter}get shouldHideAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return 1!==this.replies?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{comments__thread:!0,"comments__thread--selected":this.isSelected,"extra-space-bottom":this.replies}}get mainAnnotationClasses(){return{"comments__main-annotation":!0,"comments__main-annotation--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,invisible:!(!this.expandComments&&this.replies>=1)}}get containerWrapperClasses(){return{"comments-container-wrapper":!0,show:this.isSelected&&this.expandComments}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,show:this.isSelected&&this.expandComments}}updated(t){if(t.has("selected")){let t=this.selected===this.annotation.uuid;this.expandComments=t}}createComment({detail:t}){let{text:e,mentions:n}=t;this.emitEvent("create-comment",{uuid:this.annotation.uuid,mentions:n,text:e})}generateAvatarCommentsTemplate(){var t,e,n,s,i,o;let a=[];for(let r=1;r<=this.repliesSize;r++)null!=(e=null==(t=this.annotation.comments[r])?void 0:t.participant)&&e.avatar?a.push((0,l.V)`
          <div class="avatar">
            <img src=${null==(s=null==(n=this.annotation.comments[r])?void 0:n.participant)?void 0:s.avatar} />
          </div>
        `):a.push((0,l.V)`
          <div class="avatar">
            <p class="text text-bold">
              ${(null==(o=null==(i=this.annotation.comments[r])?void 0:i.participant.name[0])?void 0:o.toUpperCase())||"A"}
            </p>
          </div>
        `);return(0,l.V)`
      ${a}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?(0,l.V)`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${(0,o.u)({hidden:this.filterIsResolved,"comments__resolved-annotation-message":!0})}
      >
      </superviz-comments-annotation-resolved>
    `:(0,l.V)``}get inputClasses(){return{"hide-input":this.hideInput}}get wrapperClasses(){return{wrapper:!0,"show-wrapper":!this.resolved&&this.filterIsAll||this.resolved&&this.filterIsResolved}}render(){var t,e,n,s,i,a,r,d,m,h,u;let c={"comments__complete-annotation":!0,"comments__hide-complete-annotation":this.shouldShowUndoResolved};return(0,l.V)`
      <div class="${(0,o.u)(c)}">
        ${this.annotationResolvedTemplate()}

        <div class=${(0,o.u)(this.wrapperClasses)}>
          <div class=${(0,o.u)(this.shouldHideAnnotation)}>
            <div class=${(0,o.u)(this.annotationClasses)} @click=${this.selectAnnotation}>
              <div class=${(0,o.u)(this.mainAnnotationClasses)}>
                <superviz-comments-comment-item
                  uuid=${null==(t=this.annotation.comments)?void 0:t[0].uuid}
                  annotationId=${this.annotation.uuid}
                  username=${(null==(n=null==(e=this.annotation.comments)?void 0:e[0].participant)?void 0:n.name)||"Anonymous"}
                  text=${null==(s=this.annotation.comments)?void 0:s[0].text}
                  createdAt=${null==(i=this.annotation.comments)?void 0:i[0].createdAt}
                  participantsList=${JSON.stringify(this.participantsList)}
                  primaryComment
                  avatar=${null==(m=null==(d=null==(r=null==(a=this.annotation)?void 0:a.comments)?void 0:r.at(0))?void 0:d.participant)?void 0:m.avatar}
                  resolvable
                  ?resolved=${this.resolved}
                  annotationFilter=${this.annotationFilter}
                  @resolve-annotation=${this.resolveAnnotation}
                  mentions=${JSON.stringify(null==(h=this.annotation.comments)?void 0:h[0].mentions)}
                  class="comments__annotation"
                  @edit-comment=${this.updateEditMode}
                ></superviz-comments-comment-item>
              </div>

              <div class=${(0,o.u)(this.containerWrapperClasses)}>
                <div class=${(0,o.u)(this.commentsClasses)}>
                  ${null==(u=this.annotation.comments)?void 0:u.map(this.generateExpandedCommentsTemplate)}
                  <span class=${(0,o.u)(this.inputClasses)}>
                    <superviz-comments-comment-input
                      @create-comment=${this.createComment}
                      eventType="create-comment"
                      @click=${t=>t.stopPropagation()}
                      placeholder="Reply"
                      participantsList=${JSON.stringify(this.participantsList)}
                    ></superviz-comments-comment-input>
                  </span>
                </div>
              </div>
              <div class=${(0,o.u)(this.avatarCommentsClasses)}>
                <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
              </div>
            </div>
            <div class=${(0,o.u)(this.hrClasses)}></div>
          </div>
        </div>
      </div>
    `}};h.styles=m,h.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String},participantsList:{type:Object},hideInput:{type:Boolean}},h=(0,i.D)([(0,l.t)("superviz-comments-annotation-item")],h)},1381:function(t,e,n){n.d(e,{E:function(){return s},a:function(){return i},i:function(){return o}}),(0,n(1589).e)();var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e}),o=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this.t=t,this._$AM=e,this.i=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},6700:function(t,e,n){function s(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let n=new CSSStyleSheet;n.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,n]}n.d(e,{n:function(){return s}}),(0,n(1589).e)()},3240:function(t,e,n){n.d(e,{u:function(){return a}});var s=n(1381),i=n(7250),o=n(1589);(0,o.e)();var a=(0,s.a)(class extends s.i{constructor(t){var e;if(super(t),t.type!==s.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var n,s;if(void 0===this.st){for(let s in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[s]&&!(null!=(n=this.nt)&&n.has(s))&&this.st.add(s);return this.render(e)}let o=t.element.classList;for(let t of this.st)t in e||(o.remove(t),this.st.delete(t));for(let t in e){let n=!!e[t];n===this.st.has(t)||null!=(s=this.nt)&&s.has(t)||(n?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return i.E}});(0,o.e)()}}]);