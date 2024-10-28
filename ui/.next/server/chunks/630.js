"use strict";exports.id=630,exports.ids=[630],exports.modules={5630:(t,e,s)=>{s.r(e),s.d(e,{CommentsAnnotationItem:()=>h});var n=s(8782),i=s(6955),a=s(746);s(3128);var o=s(459),r=s(8882),l=s(7128);(0,i.e)();var d=(0,r.D)(l.a),m=[d.styles,n.p],h=class extends d{constructor(){super(...arguments),this.selectAnnotation=t=>{let{uuid:e}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:e}}))},this.resolveAnnotation=({detail:t})=>{let{uuid:e}=this.annotation,{resolved:s,type:n}=t,i="resolve-annotation"===n&&"All comments"===this.annotationFilter;this.emitEvent("resolve-annotation",{uuid:e,resolved:s}),i&&(this.shouldShowUndoResolved=!0)},this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1},this.generateExpandedCommentsTemplate=(t,e)=>{var s,n,i,a;return 0===e?(0,l.V)``:(0,l.V)`
      <superviz-comments-comment-item
        uuid=${t.uuid}
        avatar=${null==(a=null==(i=null==(n=null==(s=this.annotation)?void 0:s.comments)?void 0:n.at(e))?void 0:i.participant)?void 0:a.avatar}
        username=${t.participant.name||"Anonymous"}
        text=${t.text}
        createdAt=${t.createdAt}
        annotationId=${this.annotation.uuid}
        participantsList=${JSON.stringify(this.participantsList)}
        mentions=${JSON.stringify(t.mentions)}
        class="comments__replies"
      ></superviz-comments-comment-item>
    `},this.updateEditMode=({detail:{editing:t}})=>{this.hideInput=t}}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then(()=>{o.n.call(this,["comments"])})}get filterIsAll(){return"All comments"===this.annotationFilter}get filterIsResolved(){return"Resolved comments"===this.annotationFilter}get shouldHideAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return 1!==this.replies?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{comments__thread:!0,"comments__thread--selected":this.isSelected,"extra-space-bottom":this.replies}}get mainAnnotationClasses(){return{"comments__main-annotation":!0,"comments__main-annotation--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,invisible:!(!this.expandComments&&this.replies>=1)}}get containerWrapperClasses(){return{"comments-container-wrapper":!0,show:this.isSelected&&this.expandComments}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,show:this.isSelected&&this.expandComments}}updated(t){if(t.has("selected")){let t=this.selected===this.annotation.uuid;this.expandComments=t}}createComment({detail:t}){let{text:e,mentions:s}=t;this.emitEvent("create-comment",{uuid:this.annotation.uuid,mentions:s,text:e})}generateAvatarCommentsTemplate(){var t,e,s,n,i,a;let o=[];for(let r=1;r<=this.repliesSize;r++)null!=(e=null==(t=this.annotation.comments[r])?void 0:t.participant)&&e.avatar?o.push((0,l.V)`
          <div class="avatar">
            <img src=${null==(n=null==(s=this.annotation.comments[r])?void 0:s.participant)?void 0:n.avatar} />
          </div>
        `):o.push((0,l.V)`
          <div class="avatar">
            <p class="text text-bold">
              ${(null==(a=null==(i=this.annotation.comments[r])?void 0:i.participant.name[0])?void 0:a.toUpperCase())||"A"}
            </p>
          </div>
        `);return(0,l.V)`
      ${o}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?(0,l.V)`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${(0,a.u)({hidden:this.filterIsResolved,"comments__resolved-annotation-message":!0})}
      >
      </superviz-comments-annotation-resolved>
    `:(0,l.V)``}get inputClasses(){return{"hide-input":this.hideInput}}get wrapperClasses(){return{wrapper:!0,"show-wrapper":!this.resolved&&this.filterIsAll||this.resolved&&this.filterIsResolved}}render(){var t,e,s,n,i,o,r,d,m,h,c;let p={"comments__complete-annotation":!0,"comments__hide-complete-annotation":this.shouldShowUndoResolved};return(0,l.V)`
      <div class="${(0,a.u)(p)}">
        ${this.annotationResolvedTemplate()}

        <div class=${(0,a.u)(this.wrapperClasses)}>
          <div class=${(0,a.u)(this.shouldHideAnnotation)}>
            <div class=${(0,a.u)(this.annotationClasses)} @click=${this.selectAnnotation}>
              <div class=${(0,a.u)(this.mainAnnotationClasses)}>
                <superviz-comments-comment-item
                  uuid=${null==(t=this.annotation.comments)?void 0:t[0].uuid}
                  annotationId=${this.annotation.uuid}
                  username=${(null==(s=null==(e=this.annotation.comments)?void 0:e[0].participant)?void 0:s.name)||"Anonymous"}
                  text=${null==(n=this.annotation.comments)?void 0:n[0].text}
                  createdAt=${null==(i=this.annotation.comments)?void 0:i[0].createdAt}
                  participantsList=${JSON.stringify(this.participantsList)}
                  primaryComment
                  avatar=${null==(m=null==(d=null==(r=null==(o=this.annotation)?void 0:o.comments)?void 0:r.at(0))?void 0:d.participant)?void 0:m.avatar}
                  resolvable
                  ?resolved=${this.resolved}
                  annotationFilter=${this.annotationFilter}
                  @resolve-annotation=${this.resolveAnnotation}
                  mentions=${JSON.stringify(null==(h=this.annotation.comments)?void 0:h[0].mentions)}
                  class="comments__annotation"
                  @edit-comment=${this.updateEditMode}
                ></superviz-comments-comment-item>
              </div>

              <div class=${(0,a.u)(this.containerWrapperClasses)}>
                <div class=${(0,a.u)(this.commentsClasses)}>
                  ${null==(c=this.annotation.comments)?void 0:c.map(this.generateExpandedCommentsTemplate)}
                  <span class=${(0,a.u)(this.inputClasses)}>
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
              <div class=${(0,a.u)(this.avatarCommentsClasses)}>
                <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
              </div>
            </div>
            <div class=${(0,a.u)(this.hrClasses)}></div>
          </div>
        </div>
      </div>
    `}};h.styles=m,h.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String},participantsList:{type:Object},hideInput:{type:Boolean}},h=(0,i.D)([(0,l.t)("superviz-comments-annotation-item")],h)},3128:(t,e,s)=>{s.d(e,{E:()=>n,a:()=>i,i:()=>a}),(0,s(6955).e)();var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e}),a=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},459:(t,e,s)=>{function n(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{n:()=>n}),(0,s(6955).e)()},746:(t,e,s)=>{s.d(e,{u:()=>o});var n=s(3128),i=s(7128),a=s(6955);(0,a.e)();var o=(0,n.a)(class extends n.i{constructor(t){var e;if(super(t),t.type!==n.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,n;if(void 0===this.st){for(let n in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[n]&&!(null!=(s=this.nt)&&s.has(n))&&this.st.add(n);return this.render(e)}let a=t.element.classList;for(let t of this.st)t in e||(a.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||null!=(n=this.nt)&&n.has(t)||(s?(a.add(t),this.st.add(t)):(a.remove(t),this.st.delete(t)))}return i.E}});(0,a.e)()}};