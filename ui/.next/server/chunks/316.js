"use strict";exports.id=316,exports.ids=[316],exports.modules={3128:(t,e,s)=>{s.d(e,{E:()=>i,a:()=>r,i:()=>o}),(0,s(6955).e)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e}),o=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},459:(t,e,s)=>{function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{n:()=>i}),(0,s(6955).e)()},746:(t,e,s)=>{s.d(e,{u:()=>n});var i=s(3128),r=s(7128),o=s(6955);(0,o.e)();var n=(0,i.a)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!(null!=(s=this.nt)&&s.has(i))&&this.st.add(i);return this.render(e)}let o=t.element.classList;for(let t of this.st)t in e||(o.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||null!=(i=this.nt)&&i.has(t)||(s?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return r.E}});(0,o.e)()},4316:(t,e,s)=>{s.r(e),s.d(e,{Comments:()=>c});var i,r=s(8782),o=s(6955),n=s(746);s(3128);var a=s(459),d=s(8882),l=s(7128);(0,o.e)(),(0,o.e)();var h=(0,d.D)(l.a),p=[h.styles,r.i,r.x],c=class extends h{constructor(){super(),this.annotations=[],this.annotationFilter="All comments",this.waterMarkState=!1,this.participantsList=[],this.side="left"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then(()=>{a.n.call(this,["comments"])})}updated(t){super.updated(t),this.updateComplete.then(()=>{this.waterMarkState&&function t(e){let s=e.querySelector("#superviz-comments");s&&!i&&(i=new MutationObserver(s=>{s.forEach(s=>{s.removedNodes.length&&s.removedNodes.forEach(s=>{let i,r,o,n,a,d;"poweredby-footer"===s.id&&((i=document.createElement("div")).id="poweredby-footer",i.className="footer",(r=document.createElement("div")).className="powered-by powered-by--horizontal",(o=document.createElement("a")).href="https://superviz.com/",o.target="_blank",o.className="link",(n=document.createElement("div")).textContent="Powered by",(a=document.createElement("img")).width=48,a.height=8.86,a.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(o),o.appendChild(n),n.appendChild(a),i.appendChild(r),(d=e.getElementById("superviz-comments"))&&d.appendChild(i),t(e))})})})).observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}(this.shadowRoot),t.has("offset")&&this.applyOffset()})}participantsListed(t){this.participantsList=t}updateAnnotations(t){this.annotations=t}close(){this.emitEvent("close-threads",{})}waterMarkStatus(t){this.waterMarkState=t}setFilter({detail:t}){let{filter:{label:e}}=t;this.annotationFilter=e}getOffset(t){return null==t||t<0?"10px":`${t}px`}applyOffset(){let t=this.shadowRoot.querySelector(".superviz-comments");if(!t)return;let{left:e,right:s,top:i,bottom:r}=this.offset;t.style.setProperty("--offset-top",this.getOffset(i)),t.style.setProperty("--offset-bottom",this.getOffset(r)),t.style.setProperty("--offset-right",this.getOffset(s)),t.style.setProperty("--offset-left",this.getOffset(e))}get poweredBy(){return this.waterMarkState?(0,l.V)` <div id="poweredby-footer" class="footer">
      <div class="powered-by powered-by--horizontal">
        <a href="https://superviz.com/" target="_blank" class="link">
          <div class="">
            Powered by
            <img
              width="48px"
              height="8.86px"
              src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg"
            />
          </div>
        </a>
      </div>
    </div>`:(0,l.V)``}render(){let t={"superviz-comments":!0,"threads-on-left-side":"left"===this.side,"threads-on-right-side":"right"===this.side,"hide-at-right":"right"===this.side&&!this.open,"hide-at-left":"left"===this.side&&!this.open};return(0,l.V)`
      <div id="superviz-comments" class=${(0,n.u)(t)}>
        <div class="header">
          <superviz-comments-topbar
            @close-threads=${this.close}
            side=${this.side.split(":")[0]}
          ></superviz-comments-topbar>
        </div>
        <superviz-comments-annotation-filter
          filter=${this.annotationFilter}
          @select=${this.setFilter}
        >
        </superviz-comments-annotation-filter>
        <superviz-comments-content
          annotations=${JSON.stringify(this.annotations)}
          annotationFilter=${this.annotationFilter}
          participantsList=${JSON.stringify(this.participantsList)}
          class="content"
        ></superviz-comments-content>
        ${this.poweredBy}
      </div>
    `}};c.styles=p,c.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String},participantsList:{type:Object},offset:{type:Object}},c=(0,o.D)([(0,l.t)("superviz-comments")],c)}};