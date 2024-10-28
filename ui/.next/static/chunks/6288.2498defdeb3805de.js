"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6288],{1381:function(t,e,s){s.d(e,{E:function(){return i},a:function(){return r},i:function(){return n}}),(0,s(1589).e)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e}),n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},6700:function(t,e,s){function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{n:function(){return i}}),(0,s(1589).e)()},3240:function(t,e,s){s.d(e,{u:function(){return o}});var i=s(1381),r=s(7250),n=s(1589);(0,n.e)();var o=(0,i.a)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!(null!=(s=this.nt)&&s.has(i))&&this.st.add(i);return this.render(e)}let n=t.element.classList;for(let t of this.st)t in e||(n.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||null!=(i=this.nt)&&i.has(t)||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return r.E}});(0,n.e)()},6288:function(t,e,s){s.r(e),s.d(e,{Comments:function(){return c}});var i,r=s(9583),n=s(1589),o=s(3240);s(1381);var a=s(6700),l=s(3605),d=s(7250);(0,n.e)(),(0,n.e)();var h=(0,l.D)(d.a),p=[h.styles,r.i,r.x],c=class extends h{constructor(){super(),this.annotations=[],this.annotationFilter="All comments",this.waterMarkState=!1,this.participantsList=[],this.side="left"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then(()=>{a.n.call(this,["comments"])})}updated(t){super.updated(t),this.updateComplete.then(()=>{this.waterMarkState&&function t(e){let s=e.querySelector("#superviz-comments");s&&!i&&(i=new MutationObserver(s=>{s.forEach(s=>{s.removedNodes.length&&s.removedNodes.forEach(s=>{let i,r,n,o,a,l;"poweredby-footer"===s.id&&((i=document.createElement("div")).id="poweredby-footer",i.className="footer",(r=document.createElement("div")).className="powered-by powered-by--horizontal",(n=document.createElement("a")).href="https://superviz.com/",n.target="_blank",n.className="link",(o=document.createElement("div")).textContent="Powered by",(a=document.createElement("img")).width=48,a.height=8.86,a.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",r.appendChild(n),n.appendChild(o),o.appendChild(a),i.appendChild(r),(l=e.getElementById("superviz-comments"))&&l.appendChild(i),t(e))})})})).observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}(this.shadowRoot),t.has("offset")&&this.applyOffset()})}participantsListed(t){this.participantsList=t}updateAnnotations(t){this.annotations=t}close(){this.emitEvent("close-threads",{})}waterMarkStatus(t){this.waterMarkState=t}setFilter({detail:t}){let{filter:{label:e}}=t;this.annotationFilter=e}getOffset(t){return null==t||t<0?"10px":`${t}px`}applyOffset(){let t=this.shadowRoot.querySelector(".superviz-comments");if(!t)return;let{left:e,right:s,top:i,bottom:r}=this.offset;t.style.setProperty("--offset-top",this.getOffset(i)),t.style.setProperty("--offset-bottom",this.getOffset(r)),t.style.setProperty("--offset-right",this.getOffset(s)),t.style.setProperty("--offset-left",this.getOffset(e))}get poweredBy(){return this.waterMarkState?(0,d.V)` <div id="poweredby-footer" class="footer">
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
    </div>`:(0,d.V)``}render(){let t={"superviz-comments":!0,"threads-on-left-side":"left"===this.side,"threads-on-right-side":"right"===this.side,"hide-at-right":"right"===this.side&&!this.open,"hide-at-left":"left"===this.side&&!this.open};return(0,d.V)`
      <div id="superviz-comments" class=${(0,o.u)(t)}>
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
    `}};c.styles=p,c.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String},participantsList:{type:Object},offset:{type:Object}},c=(0,n.D)([(0,d.t)("superviz-comments")],c)}}]);