"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6375],{3605:function(t,e,r){r.d(e,{D:function(){return l}});var s=r(7250),o=r(1589);(0,o.e)(),(0,o.e)(),(0,o.e)();var i=(0,s.C)`
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
`;(0,o.e)();var n=(0,s.C)`
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
`;(0,o.e)();var a=(0,s.C)`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,o.e)();var c=(0,s.C)`
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
`,l=t=>{var e;class r extends t{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=o.l.bind(this)}connectedCallback(){setTimeout(()=>{var t,e;let r=document.getElementById("superviz-style"),s=this.createCustomColors(),o=document.createElement("style");o.innerHTML=(null==r?void 0:r.innerHTML)||"",null==(t=this.shadowRoot)||t.appendChild(o),s&&(null==(e=this.shadowRoot)||e.appendChild(s))}),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach(t=>t(this))}createCustomColors(){if(!o.f.get("colors"))return;let t=document.createElement("style"),e=Object.entries(o.f.get("colors")).map(([t,e])=>`--${t}: ${e} !important;`).join(" ");return t.innerHTML=`
      * {
        ${e}
      }
    `,t}emitEvent(t,e,r={composed:!0,bubbles:!0}){let s=new CustomEvent(t,(0,o.x)({detail:e},r));this.dispatchEvent(s)}}return r.styles=[i,n,a,c,null!=(e=t.styles)?e:[]],r}},6375:function(t,e,r){let s;r.r(e),r.d(e,{Icon:function(){return u}});var o=r(3605),i=r(7250),n=r(1589);(0,n.e)(),(0,n.e)();var a=((s=a||{})[s.xs=14]="xs",s[s.sm=18]="sm",s[s.md=24]="md",s[s.lg=36]="lg",s[s.xl=44]="xl",s),c=(0,o.D)(i.a),l=[c.styles],u=class extends c{constructor(){super(),this.name="",this.size="md"}get iconSize(){return a[this.size]}render(){var t;return this.color||(this.color="black"),(0,i.V)`
      <i
        class="sv-icon sv-icon-${this.name}_${null!=(t=this.suffix)?t:this.size} ${this.color}"
        style="font-size: ${this.iconSize}px"
      ></i>
    `}};u.properties={name:{type:String},size:{type:String},color:{type:String},suffix:{type:String}},u.styles=[l,(0,i.C)`
      div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        color: white;
      }

      i,
      i.black {
        color: rgba(var(--sv-gray-600));
      }

      i.white {
        color: white;
      }
    `],u=(0,n.D)([(0,i.t)("superviz-icon")],u)}}]);