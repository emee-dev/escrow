"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3121],{6700:function(e,t,s){function n(e){let t=document.getElementById(`superviz-${e}-styles`);if(!t)return;let s=new CSSStyleSheet;s.replaceSync(t.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(t,{n:function(){return n}}),(0,s(1589).e)()},3121:function(e,t,s){s.r(t),s.d(t,{CommentsTopbar:function(){return p}});var n=s(9583),o=s(6700),r=s(3605),a=s(7250),i=s(1589);(0,i.e)();var c=[(0,r.D)(a.a).styles,n.r],p=class extends(0,r.D)(a.a){firstUpdated(e){super.firstUpdated(e),this.updateComplete.then(()=>{o.n.call(this,["comments"])})}close(){this.dispatchEvent(new CustomEvent("close-threads"))}render(){return(0,a.V)`
      <div class="comments__topbar">
        <span class="text text-bold comments__topbar__title">COMMENTS</span>
        <span @click=${this.close} class="comments__topbar__close-threads">
          <superviz-icon name=${this.side}></superviz-icon>
        </span>
      </div>
    `}};p.styles=c,p.properties={side:{type:String}},p=(0,i.D)([(0,a.t)("superviz-comments-topbar")],p)}}]);