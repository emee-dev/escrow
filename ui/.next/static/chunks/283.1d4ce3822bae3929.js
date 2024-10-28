"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{3605:function(t,e,i){i.d(e,{D:function(){return p}});var s=i(7250),n=i(1589);(0,n.e)(),(0,n.e)(),(0,n.e)();var o=(0,s.C)`
  * {
    --sv-primary: 98, 16, 204;
    --sv-primary-900: 56, 7, 136;
    --sv-primary-200: 193, 161, 234;
    --sv-secondary: 193, 251, 223;
    --sv-gray: 126, 122, 136;
    --sv-success: 12, 185, 71;
    --sv-danger: 229, 65, 30;
    --sv-black: 19, 18, 21;
    --sv-white: 255, 255, 255;
    --sv-gray-100: 250, 250, 252;
    --sv-gray-200: 233, 229, 239;
    --sv-gray-300: 201, 196, 209;
    --sv-gray-400: 174, 169, 184;
    --sv-gray-500: 126, 122, 136;
    --sv-gray-600: 87, 83, 95;
    --sv-gray-700: 57, 54, 62;
    --sv-gray-800: 38, 36, 42;
  }

  .sv-gray-200 {
    color: rgb(var(--sv-gray-200));
  }

  .sv-gray-400 {
    color: rgb(var(--sv-gray-400));
  }

  .sv-gray-500 {
    color: rgb(var(--sv-gray-500));
  }

  .sv-gray-600 {
    color: rgb(var(--sv-gray-600));
  }

  .sv-gray-700 {
    color: rgb(var(--sv-gray-700));
  }
`;(0,n.e)();var r=(0,s.C)`
  .text {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .text-bold {
    font-weight: 700;
  }

  .text-big {
    font-size: 14px;
  }

  .text-small {
    font-size: 10px;
  }
`;(0,n.e)();var a=(0,s.C)`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,n.e)();var l=(0,s.C)`
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    border: 0px;
    width: 32px;
    height: 32px;
  }

  .icon-button > superviz-icon {
    display: flex !important;
  }

  .icon-button--xsmall {
    width: 18px;
    height: 18px;
  }

  .icon-button--small {
    width: 24px;
    height: 24px;
  }

  .icon-button--medium {
    width: 32px;
    height: 32px;
  }

  .icon-button--large {
    width: 40px;
    height: 40px;
  }

  .icon-button--clickable {
    cursor: pointer;
    border-radius: 100%;
  }

  .icon-button--clickable:hover:not(.icon-button--no-hover) {
    background: rgb(var(--sv-gray-300));
    transition: 0.25s background-color ease-in;
  }
  
  .icon-button--clickable:focus:not(.icon-button--no-hover) {
    transition: 0.25s background-color ease-in;
    background: rgb(var(--sv-gray-300));
  }
`,p=t=>{var e;class i extends t{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=n.l.bind(this)}connectedCallback(){setTimeout(()=>{var t,e;let i=document.getElementById("superviz-style"),s=this.createCustomColors(),n=document.createElement("style");n.innerHTML=(null==i?void 0:i.innerHTML)||"",null==(t=this.shadowRoot)||t.appendChild(n),s&&(null==(e=this.shadowRoot)||e.appendChild(s))}),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach(t=>t(this))}createCustomColors(){if(!n.f.get("colors"))return;let t=document.createElement("style"),e=Object.entries(n.f.get("colors")).map(([t,e])=>`--${t}: ${e} !important;`).join(" ");return t.innerHTML=`
      * {
        ${e}
      }
    `,t}emitEvent(t,e,i={composed:!0,bubbles:!0}){let s=new CustomEvent(t,(0,n.x)({detail:e},i));this.dispatchEvent(s)}}return i.styles=[o,r,a,l,null!=(e=t.styles)?e:[]],i}},1381:function(t,e,i){i.d(e,{E:function(){return s},a:function(){return n},i:function(){return o}}),(0,i(1589).e)();var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>(...e)=>({_$litDirective$:t,values:e}),o=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this.t=t,this._$AM=e,this.i=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},6700:function(t,e,i){function s(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let i=new CSSStyleSheet;i.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,i]}i.d(e,{n:function(){return s}}),(0,i(1589).e)()},3240:function(t,e,i){i.d(e,{u:function(){return r}});var s=i(1381),n=i(7250),o=i(1589);(0,o.e)();var r=(0,s.a)(class extends s.i{constructor(t){var e;if(super(t),t.type!==s.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.st){for(let s in this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t))),e)e[s]&&!(null!=(i=this.nt)&&i.has(s))&&this.st.add(s);return this.render(e)}let o=t.element.classList;for(let t of this.st)t in e||(o.remove(t),this.st.delete(t));for(let t in e){let i=!!e[t];i===this.st.has(t)||null!=(s=this.nt)&&s.has(t)||(i?(o.add(t),this.st.add(t)):(o.remove(t),this.st.delete(t)))}return n.E}});(0,o.e)()},283:function(t,e,i){i.r(e),i.d(e,{Dropdown:function(){return d}});var s=i(3240);i(1381);var n=i(6700),o=i(3605),r=i(7250),a=i(1589);(0,a.e)(),(0,a.e)();var l=(0,r.C)`
  .dropdown {
    position: relative;
    z-index: 100;
  }

  .dropdown-content {
    display: flex;
  }

  .select-clicked {
    border: 2px #26489a solid;
  }

  .dropdown-list {
    position: relative;
    z-index: 101;
  }

  .header {
    display: grid;
    grid-template-rows: 1fr 1px;
    align-items: center;
    padding: 0 10px;
    min-height: 42px;
    font-size: 16px;
    color: rgb(var(--sv-gray-600));
  }

  .menu {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    display: none;
    background: #fff;
    padding: 0;
    z-index: 1;
    transition: 0.2s;
    border-radius: 3px;
  }

  .items {
    list-style: none;
    padding: 0;
    color: #9fa5b5;
    margin: 0;
  }

  .text.username {
    font-size: 14px;
    text-align: left;

    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    padding: 8px 0;
  }

  .items li {
    color: rgb(var(--sv-gray-600));
    text-transform: uppercase;
    padding: 0 10px;
    cursor: pointer;
    min-width: 103px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    height: 42px;
  }

  .sv-icon {
    width: 40px;
    height: 40px;
    background-color: red;
  }

  .active {
    background: rgb(var(--sv-gray-200));
  }

  .items li:hover {
    background: rgb(var(--sv-gray-200));
  }

  .menu-open {
    display: block;
    opacity: 1;
    position: fixed;
  }

  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-300));
    padding: 0px;
    margin: 0px;
    justify-self: flex-end;
  }

  .option-label {
    white-space: nowrap;
    line-height: 1;
  }

  .who-is-online__controls__item__icon {
    line-height: 1;
  }

  .who-is-online__controls__item {
    align-items: center;
  }

  @media (max-width: 780px) {
    .menu--top-left,
    .menu--top-center,
    .menu--top-right {
      bottom: 36px;
    }
  }
`,p=(0,o.D)(r.a),h=[p.styles,l],d=class extends p{constructor(){super(),this.menu=void 0,this.onClickOutDropdown=t=>{if(t.stopPropagation(),!this.open)return;let e=t.composedPath(),i=this.shadowRoot.querySelector(".dropdown-content"),s=this.shadowRoot.querySelector(".dropdown-list"),n=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],o=e.includes(i),r=e.includes(s),a=e.includes(n);o||r||a||this.close()},this.close=()=>{this.open=!1,this.emitEvent("close",{bubbles:!1,composed:!1})},this.callbackSelected=({label:t})=>{this.open=!1,this.emitEvent("selected",(0,a.y)((0,a.x)({},this.returnData),{label:t}),{bubbles:!1,composed:!0})},this.adjustPosition=()=>{if(!this.open){cancelAnimationFrame(this.animationFrame);return}this.setHorizontalPosition(),this.setPositionVertical(),this.animationFrame=requestAnimationFrame(this.adjustPosition)},this.tooltip=()=>{if(!this.canShowTooltip)return"";let t=this.lastParticipant?"tooltip-top":"tooltip-bottom";return(0,r.V)` <superviz-tooltip
      tooltipData=${JSON.stringify(this.tooltipData)}
      ?shiftTooltipLeft=${this.shiftTooltipLeft}
      tooltipVerticalPosition=${t}
      classesPrefix="${this.tooltipPrefix}__tooltip"
      parentComponent=${this.parentComponent}
    ></superviz-tooltip>`},this.showTooltip=!1,this.returnData={}}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then(()=>{this.menu=this.shadowRoot.querySelector(".menu"),n.n.call(this,[this.parentComponent])})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.onClickOutDropdown);let t=this.shadowRoot.querySelector(".dropdown");null==t||t.removeEventListener("mouseenter",()=>{this.showTooltip=!0}),null==t||t.removeEventListener("mouseleave",()=>{this.showTooltip=!1})}updated(t){if(t.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:this.name},{bubbles:!1,composed:!1}),this.open){document.addEventListener("click",this.onClickOutDropdown),this.animationFrame=requestAnimationFrame(this.adjustPosition);return}document.removeEventListener("click",this.onClickOutDropdown)}}setHorizontalPosition(){let{left:t,right:e,width:i}=this.shadowRoot.querySelector('slot[name="dropdown"]').parentElement.getBoundingClientRect(),{width:s}=this.menu.getBoundingClientRect(),n=t-(s-i)/2<0,o=e+(s-i)/2>window.innerWidth;if(this.shiftTooltipLeft){this.menu.style.left=`${t+8}px`,this.menu.style.right="",this.menu.style.transform="translate(0, 0)";return}if(!n&&!o){this.menu.style.left=`${t}px`,this.menu.style.right="",this.menu.style.transform=`translate(calc(-50% + ${i/2}px), 0)`;return}if(!n){this.menu.style.left="",this.menu.style.right=`${window.innerWidth-e}px`,this.menu.style.transform="translate(0, 0)";return}o||(this.menu.style.right="",this.menu.style.left=`${e-i}px`,this.menu.style.transform="translate(0, 0)")}setPositionVertical(){let{top:t,bottom:e}=this.shadowRoot.querySelector('slot[name="dropdown"]').parentElement.getBoundingClientRect(),{height:i}=this.menu.getBoundingClientRect(),s=this.shiftTooltipLeft?-2:8;if(!(e+i+s>window.innerHeight)){this.menu.style.bottom="",this.menu.style.top=`${e+s}px`;return}this.menu.style.top="auto",this.menu.style.bottom=`${window.innerHeight-t+s}px`}get renderHeader(){return this.name?(0,r.V)` <div class="header ${this.getClass("header")}">
      <span class="text username ${this.getClass("title")}">${this.name}</span>
      <span class="sv-hr ${this.getClass("divisor")}"></span>
    </div>`:(0,r.V)``}toggle(){this.disabled||(this.open=!this.open,this.emitEvent("open",{open:this.open}))}getIcon(t){if(t)return(0,r.V)`
      <span class=${this.getClass("item__icon")}>
        <superviz-icon name="${t}" size="sm"></superviz-icon>
      </span>
    `}getLabel(t){return(0,r.V)`<span class="option-label ${this.getClass("item__label")}">${t}</span>`}get listOptions(){return this.options.map(({label:t,icon:e,active:i})=>{let n={text:!0,[this.getClass("item")]:!0,"text-bold":!0,active:i};return(0,r.V)`<li @click=${()=>this.callbackSelected({label:t})} class=${(0,s.u)(n)}>
        ${this.getIcon(e)} ${this.getLabel(t)}
      </li>`})}getClass(t){return`${this.classesPrefix}__${t}`}render(){let t={menu:!0,"menu-open":this.open,"menu-left":"left"===this.align,"menu-right":"right"===this.align,"who-is-online-dropdown":this.name};return(0,r.V)`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${(0,s.u)(t)}>
          ${this.renderHeader}
          <ul class="${this.getClass("items")} items">
            ${this.listOptions}
          </ul>
        </div>
      </div>
    `}};d.styles=h,d.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},options:{type:Array},icons:{type:Array},name:{type:String},tooltipData:{type:Object},showTooltip:{type:Boolean},dropdown:{type:Object},canShowTooltip:{type:Boolean},drodpdownSizes:{type:Object},shiftTooltipLeft:{type:Boolean},lastParticipant:{type:Boolean},classesPrefix:{type:String},parentComponent:{type:String},tooltipPrefix:{type:String},returnData:{type:Object}},d=(0,a.D)([(0,r.t)("superviz-dropdown")],d)}}]);