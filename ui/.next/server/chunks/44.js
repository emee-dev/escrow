"use strict";exports.id=44,exports.ids=[44],exports.modules={3044:(t,e,s)=>{s.r(e),s.d(e,{CommentsAnnotationFilter:()=>p});var i=s(8782),r=s(6955),n=s(746);s(3128);var l=s(459),o=s(8882),a=s(7128);(0,r.e)();var d=(0,o.D)(a.a),c=[d.styles,i.l],h=[{label:"All comments"},{label:"Resolved comments"}],p=class extends d{constructor(){super(),this.selectClick=()=>{this.caret="down"===this.caret?"up":"down"},this.dropdownOptionsHandler=({detail:t})=>{this.emitEvent("select",{filter:t}),this.selectClick()},this.caret="down"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then(()=>{l.n.call(this,["comments"])})}render(){let t="All comments"===this.filter?h[0].label:h[1].label;h[0].active="All comments"===this.filter,h[1].active="Resolved comments"===this.filter;let e={text:!0,"text-bold":!0,"select-content":!0,"comments__filter__selected-label":!0,"sv-gray-500":"down"===this.caret,"sv-gray-700":"up"===this.caret};return(0,a.V)`
      <div class="comments__filter-container">
        <div class="comments__filter">
          <superviz-dropdown
            options=${JSON.stringify(h)}
            position="bottom-left"
            right-offset="100px"
            @click=${this.selectClick}
            @selected=${this.dropdownOptionsHandler}
            @close=${this.selectClick}
            classesPrefix="comments__dropdown"
            parentComponent="comments"
          >
            <div class="comments__filter__toggle-button" slot="dropdown">
              <span class=${(0,n.u)(e)}>${t}</span>
              <div class="comments__filter__icon">
                <superviz-icon name=${this.caret} size="xs"></superviz-icon>
              </div>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};p.styles=c,p.properties={filter:{type:String},caret:{type:String}},p=(0,r.D)([(0,a.t)("superviz-comments-annotation-filter")],p)},3128:(t,e,s)=>{s.d(e,{E:()=>i,a:()=>r,i:()=>n}),(0,s(6955).e)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e}),n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},459:(t,e,s)=>{function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{n:()=>i}),(0,s(6955).e)()},746:(t,e,s)=>{s.d(e,{u:()=>l});var i=s(3128),r=s(7128),n=s(6955);(0,n.e)();var l=(0,i.a)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var s,i;if(void 0===this.st){for(let i in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[i]&&!(null!=(s=this.nt)&&s.has(i))&&this.st.add(i);return this.render(e)}let n=t.element.classList;for(let t of this.st)t in e||(n.remove(t),this.st.delete(t));for(let t in e){let s=!!e[t];s===this.st.has(t)||null!=(i=this.nt)&&i.has(t)||(s?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return r.E}});(0,n.e)()}};