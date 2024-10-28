"use strict";exports.id=707,exports.ids=[707],exports.modules={459:(e,t,s)=>{function o(e){let t=document.getElementById(`superviz-${e}-styles`);if(!t)return;let s=new CSSStyleSheet;s.replaceSync(t.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(t,{n:()=>o}),(0,s(6955).e)()},6660:(e,t,s)=>{s.r(t),s.d(t,{CommentsTopbar:()=>p});var o=s(8782),n=s(459),r=s(8882),a=s(7128),i=s(6955);(0,i.e)();var d=[(0,r.D)(a.a).styles,o.r],p=class extends(0,r.D)(a.a){firstUpdated(e){super.firstUpdated(e),this.updateComplete.then(()=>{n.n.call(this,["comments"])})}close(){this.dispatchEvent(new CustomEvent("close-threads"))}render(){return(0,a.V)`
      <div class="comments__topbar">
        <span class="text text-bold comments__topbar__title">COMMENTS</span>
        <span @click=${this.close} class="comments__topbar__close-threads">
          <superviz-icon name=${this.side}></superviz-icon>
        </span>
      </div>
    `}};p.styles=d,p.properties={side:{type:String}},p=(0,i.D)([(0,a.t)("superviz-comments-topbar")],p)}};