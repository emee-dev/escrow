"use strict";exports.id=788,exports.ids=[788],exports.modules={5788:(e,t,s)=>{s.r(t),s.d(t,{CommentsAnnotationResolved:()=>a});var i=s(8782),o=s(459),n=s(8882),d=s(7128),l=s(6955);(0,l.e)();var m=(0,n.D)(d.a),r=[m.styles,i.m],a=class extends m{constructor(){super(),this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)},this.timeToHide=1e4,this.isCanceled=!1}firstUpdated(e){super.firstUpdated(e),this.updateComplete.then(()=>{o.n.call(this,["comments"]),this.setTimer()})}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return 0===this.timeToHide?(0,d.V)``:this.isCanceled?(0,d.V)``:(0,d.V)`
      <div class="comments__annotation-resolved">
        <span class="text text-big sv-gray-700 comments__annotation-resolved__text"
          >You resolved this comment</span
        >
        <button
          id="undone"
          @click=${this.undone}
          class="icon-button icon-button--clickable icon-button--medium comments__annotation-resolved__unresolve_button"
        >
          <superviz-icon name="undo" size="md"></superviz-icon>
        </button>
      </div>
    `}};a.styles=r,a.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},a=(0,l.D)([(0,d.t)("superviz-comments-annotation-resolved")],a)},459:(e,t,s)=>{function i(e){let t=document.getElementById(`superviz-${e}-styles`);if(!t)return;let s=new CSSStyleSheet;s.replaceSync(t.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(t,{n:()=>i}),(0,s(6955).e)()}};