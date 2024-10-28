"use strict";exports.id=521,exports.ids=[521],exports.modules={3128:(t,e,s)=>{s.d(e,{E:()=>i,a:()=>o,i:()=>n}),(0,s(6955).e)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e}),n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},459:(t,e,s)=>{function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{n:()=>i}),(0,s(6955).e)()},746:(t,e,s)=>{s.d(e,{u:()=>l});var i=s(3128),o=s(7128),n=s(6955);(0,n.e)();var l=(0,i.a)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!(null!=(s=this.nt)&&s.has(i))&&this.st.add(i);return this.render(e)}let n=t.element.classList;for(let t of this.st)t in e||(n.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||null!=(i=this.nt)&&i.has(t)||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return o.E}});(0,n.e)()},8521:(t,e,s)=>{s.r(e),s.d(e,{CommentsFloatButton:()=>h});var i=s(8782),o=s(746);s(3128);var n=s(459),l=s(8882),r=s(7128),d=s(6955);(0,d.e)();var a=(0,l.D)(r.a),c=[a.styles,i.d],h=class extends a{constructor(){super(),this.onTogglePinActive=({detail:{isActive:t}})=>{this.isActive=t},this.isHidden=!0,this.positionStyles="top: 20px; left: 20px;",this.shouldHide=!1,this.commentsPosition="left"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then(()=>{n.n.call(this,["comments"])}),this.mouseHovering=!1;let e=this.shadowRoot.querySelector(".comments__floating-button");e.addEventListener("mouseenter",()=>{setTimeout(()=>e.classList.add("comments-floating-button-hovered"),300),this.mouseHovering=!0}),e.addEventListener("mouseleave",()=>{e.classList.remove("comments-floating-button-hovered"),this.mouseHovering=!1})}toggle(){this.emitEvent("toggle",{})}connectedCallback(){super.connectedCallback(),window.document.body.addEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden}),window.document.body.addEventListener("toggle-pin-active",this.onTogglePinActive)}disconnectedCallback(){super.disconnectedCallback(),window.document.body.removeEventListener("toggle-annotation-sidebar",()=>{this.isHidden=!this.isHidden}),window.document.body.removeEventListener("toggle-pin-active",this.onTogglePinActive)}updated(t){super.updated(t),this.updateComplete.then(()=>{let t=this.shadowRoot.querySelector(".comments__floating-button");t&&t.setAttribute("style",this.positionStyles)})}calculateIfShouldHide(){var t;let e=null==(t=document.getElementsByTagName("superviz-comments")[0])?void 0:t.shadowRoot.querySelector(".superviz-comments"),s=this.shadowRoot.querySelector(".comments__floating-button");if(!e||!s)return;let{left:i,right:o,top:n,bottom:l}=e.getBoundingClientRect(),{left:r,right:d,top:a,bottom:c}=s.getBoundingClientRect();this.shouldHide=(n<c&&a<l||l>a&&c>n)&&(o>r&&d>i||i<d&&r<o)}render(){this.calculateIfShouldHide();let t={"comments__floating-button":!0,"hide-button":!this.isHidden&&this.shouldHide,"is-active":this.isActive,"is-inactive":!this.isActive},e={"comments__floating-button-text-box":!0,"comments__floating-button-text-box--hovered":this.mouseHovering},s={text:!0,"text-big":!0,"text-bold":!0,"not-hovered":!this.mouseHovering,"comments__floating-button__text":!0,textActive:this.isActive,textInactive:!this.isActive};return(0,r.V)` <button @click=${this.toggle} class="${(0,o.u)(t)}">
      <div class="comments__floating-button__icon">
        <superviz-icon
          size="sm"
          name="comment"
          color=${this.mouseHovering||this.isActive?"white":"black"}
        ></superviz-icon>
        <svg class="cross" width="8px" height="8px" viewBox="0 0 8 8">
          <rect class="cross-bar-1" x="0" y="3" width="8px" height="2px" />
          <rect class="cross-bar-2" x="0" y="3" width="8px" height="2px" />
        </svg>
      </div>
      <div class=${(0,o.u)(e)}>
        <p class="${(0,o.u)(s)} comment">Comment</p>
        <p class="${(0,o.u)(s)} cancel">Cancel</p>
      </div>
    </button>`}};h.styles=c,h.properties={positionStyles:{type:String},isHidden:{type:Boolean},commentsPosition:{type:String},isActive:{type:Boolean},mouseHovering:{type:Boolean}},h=(0,d.D)([(0,r.t)("superviz-comments-button")],h)}};