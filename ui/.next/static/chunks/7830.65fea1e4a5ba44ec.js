"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7830],{7830:function(t,e,s){s.r(e),s.d(e,{CommentsAnnotationFilter:function(){return h}});var n=s(9583),i=s(1589),r=s(3240);s(1381);var l=s(6700),o=s(3605),c=s(7250);(0,i.e)();var a=(0,o.D)(c.a),d=[a.styles,n.l],u=[{label:"All comments"},{label:"Resolved comments"}],h=class extends a{constructor(){super(),this.selectClick=()=>{this.caret="down"===this.caret?"up":"down"},this.dropdownOptionsHandler=({detail:t})=>{this.emitEvent("select",{filter:t}),this.selectClick()},this.caret="down"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then(()=>{l.n.call(this,["comments"])})}render(){let t="All comments"===this.filter?u[0].label:u[1].label;u[0].active="All comments"===this.filter,u[1].active="Resolved comments"===this.filter;let e={text:!0,"text-bold":!0,"select-content":!0,"comments__filter__selected-label":!0,"sv-gray-500":"down"===this.caret,"sv-gray-700":"up"===this.caret};return(0,c.V)`
      <div class="comments__filter-container">
        <div class="comments__filter">
          <superviz-dropdown
            options=${JSON.stringify(u)}
            position="bottom-left"
            right-offset="100px"
            @click=${this.selectClick}
            @selected=${this.dropdownOptionsHandler}
            @close=${this.selectClick}
            classesPrefix="comments__dropdown"
            parentComponent="comments"
          >
            <div class="comments__filter__toggle-button" slot="dropdown">
              <span class=${(0,r.u)(e)}>${t}</span>
              <div class="comments__filter__icon">
                <superviz-icon name=${this.caret} size="xs"></superviz-icon>
              </div>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};h.styles=d,h.properties={filter:{type:String},caret:{type:String}},h=(0,i.D)([(0,c.t)("superviz-comments-annotation-filter")],h)},1381:function(t,e,s){s.d(e,{E:function(){return n},a:function(){return i},i:function(){return r}}),(0,s(1589).e)();var n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e}),r=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},6700:function(t,e,s){function n(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{n:function(){return n}}),(0,s(1589).e)()},3240:function(t,e,s){s.d(e,{u:function(){return l}});var n=s(1381),i=s(7250),r=s(1589);(0,r.e)();var l=(0,n.a)(class extends n.i{constructor(t){var e;if(super(t),t.type!==n.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,n;if(void 0===this.st){for(let n in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[n]&&!(null!=(s=this.nt)&&s.has(n))&&this.st.add(n);return this.render(e)}let r=t.element.classList;for(let t of this.st)t in e||(r.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||null!=(n=this.nt)&&n.has(t)||(s?(r.add(t),this.st.add(t)):(r.remove(t),this.st.delete(t)))}return i.E}});(0,r.e)()}}]);