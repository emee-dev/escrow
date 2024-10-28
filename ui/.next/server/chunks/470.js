"use strict";exports.id=470,exports.ids=[470],exports.modules={8882:(e,t,o)=>{o.d(t,{D:()=>c});var s=o(7128),n=o(6955);(0,n.e)(),(0,n.e)(),(0,n.e)();var r=(0,s.C)`
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
`;(0,n.e)();var i=(0,s.C)`
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
`,c=e=>{var t;class o extends e{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=n.l.bind(this)}connectedCallback(){setTimeout(()=>{var e,t;let o=document.getElementById("superviz-style"),s=this.createCustomColors(),n=document.createElement("style");n.innerHTML=(null==o?void 0:o.innerHTML)||"",null==(e=this.shadowRoot)||e.appendChild(n),s&&(null==(t=this.shadowRoot)||t.appendChild(s))}),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach(e=>e(this))}createCustomColors(){if(!n.f.get("colors"))return;let e=document.createElement("style"),t=Object.entries(n.f.get("colors")).map(([e,t])=>`--${e}: ${t} !important;`).join(" ");return e.innerHTML=`
      * {
        ${t}
      }
    `,e}emitEvent(e,t,o={composed:!0,bubbles:!0}){let s=new CustomEvent(e,(0,n.x)({detail:t},o));this.dispatchEvent(s)}}return o.styles=[r,i,a,l,null!=(t=e.styles)?t:[]],o}},2470:(e,t,o)=>{o.r(t),o.d(t,{DeleteCommentModal:()=>l});var s=o(8882),n=o(7128),r=o(6955);(0,r.e)();var i=(0,s.D)(n.a),a=[i.styles],l=class extends i{constructor(){super(...arguments),this.emitEventOpenModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--open",{detail:{title:"DELETE COMMENT",body:(0,n.V)`<span class="text text-big sv-gray-600"
            >Are you sure you want to delete this comment? <br />
            This action cannot be undone</span
          >`,confirmLabel:"DELETE",confirm:!0,cancel:!0},bubbles:!0,composed:!0}))},this.toggle=()=>{this.open=!this.open}}firstUpdated(){window.document.body.addEventListener("superviz-modal--close",()=>{this.open&&this.emitEvent("close",{},{bubbles:!1,composed:!1})}),window.document.body.addEventListener("superviz-modal--confirm",()=>{this.open&&(this.emitEvent("confirm",{},{bubbles:!1,composed:!1}),this.emitEventCloseModal())})}updated(e){e.has("open")&&(this.open&&setTimeout(()=>this.emitEventOpenModal()),this.open||setTimeout(()=>this.emitEventCloseModal()))}emitEventCloseModal(){this.open&&(window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{detail:{open:!0},bubbles:!0,composed:!0})),this.emitEvent("close",{},{bubbles:!1,composed:!1}))}render(){return(0,n.V)` ${(()=>{if(this.useSlot)return(0,n.V)`<slot name="modal-handler" @click=${this.toggle}></slot>`})()} ${(()=>{if(this.open)return(0,n.V)` <superviz-modal></superviz-modal> `})()} `}};l.styles=a,l.properties={open:{type:Boolean},useSlot:{type:Boolean}},l=(0,r.D)([(0,n.t)("superviz-comments-delete-comments-modal")],l)}};