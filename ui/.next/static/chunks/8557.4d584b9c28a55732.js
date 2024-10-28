"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8557],{8557:function(e,t,s){s.r(t),s.d(t,{CommentsAnnotationResolved:function(){return a}});var i=s(9583),n=s(6700),o=s(3605),d=s(7250),u=s(1589);(0,u.e)();var c=(0,o.D)(d.a),l=[c.styles,i.m],a=class extends c{constructor(){super(),this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout(()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())},this.timeToHide)},this.timeToHide=1e4,this.isCanceled=!1}firstUpdated(e){super.firstUpdated(e),this.updateComplete.then(()=>{n.n.call(this,["comments"]),this.setTimer()})}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return 0===this.timeToHide?(0,d.V)``:this.isCanceled?(0,d.V)``:(0,d.V)`
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
    `}};a.styles=l,a.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},a=(0,u.D)([(0,d.t)("superviz-comments-annotation-resolved")],a)},6700:function(e,t,s){function i(e){let t=document.getElementById(`superviz-${e}-styles`);if(!t)return;let s=new CSSStyleSheet;s.replaceSync(t.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(t,{n:function(){return i}}),(0,s(1589).e)()}}]);