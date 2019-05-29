/*! Built with http://stenciljs.com */
StarshipPicard.loadBundle("cffircbt",["exports"],function(t){var e=window.StarshipPicard.h,i=function(){function t(){this.isActive=!1,this.hasActions=!0,this.isSmall=!1,this.primaryActionText="Ok",this.primaryDisabled=!1,this.secondaryActionText="Cancel",this.secondaryDisabled=!1}return t.prototype.launchModal=function(){this.isActive=!this.isActive},t.prototype.closeModal=function(){this.isActive=!1,this.modalClosed.emit(event)},t.prototype.secondaryActionHandler=function(t){this.modalSecondaryAction.emit(t)},t.prototype.primaryActionHandler=function(t){this.modalPrimaryAction.emit(t)},t.prototype.render=function(){var t=this;return e("div",{id:this.id,class:{"sa-modal":!0,"is-active":this.isActive,"is-small":this.isSmall}},e("div",{class:"sa-modal-bg"}),e("div",{class:"sa-modal-content"},e("h1",{class:"primary-title"},this.primaryTitle),this.secondaryTitle&&!this.isSmall?e("h2",{class:"secondary-title"},this.secondaryTitle):null,e("button",{class:"sa-modal-close is-large","aria-label":"close",onClick:function(){return t.closeModal()}},e("i",{class:"material-icons"},"close")),this.isSmall?null:e("div",{class:"content"},e("slot",null)),this.hasActions?e("footer",{class:"sa-modal-footer buttons"},e("button",{class:"button is-tertiary",disabled:this.secondaryDisabled,onClick:function(e){return t.secondaryActionHandler(e)}},this.secondaryActionText),e("button",{class:"button",disabled:this.primaryDisabled,onClick:function(e){return t.primaryActionHandler(e)}},this.primaryActionText)):null))},Object.defineProperty(t,"is",{get:function(){return"sa-modal"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{closeModal:{method:!0},hasActions:{type:Boolean,attr:"has-actions"},id:{type:String,attr:"id"},isActive:{state:!0},isSmall:{type:Boolean,attr:"is-small"},launchModal:{method:!0},primaryActionText:{type:String,attr:"primary-action-text"},primaryDisabled:{type:Boolean,attr:"primary-disabled"},primaryTitle:{type:String,attr:"primary-title"},secondaryActionText:{type:String,attr:"secondary-action-text"},secondaryDisabled:{type:Boolean,attr:"secondary-disabled"},secondaryTitle:{type:String,attr:"secondary-title"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"modalClosed",method:"modalClosed",bubbles:!0,cancelable:!0,composed:!0},{name:"modalPrimaryAction",method:"modalPrimaryAction",bubbles:!0,cancelable:!0,composed:!0},{name:"modalSecondaryAction",method:"modalSecondaryAction",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".material-icons[data-sa-modal]{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:'liga';font-feature-settings:'liga'}.buttons[data-sa-modal]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.buttons[data-sa-modal]   .button[data-sa-modal]{margin-bottom:.5rem}.buttons[data-sa-modal]   .button[data-sa-modal]:not(:last-child){margin-right:1rem}.buttons[data-sa-modal]:last-child{margin-bottom:-.5rem}.buttons[data-sa-modal]:not(:last-child){margin-bottom:1rem}.buttons.is-centered[data-sa-modal]{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.buttons.is-right[data-sa-modal]{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.button[data-sa-modal]{background-color:#36c8b5;border:0;border-radius:0;-webkit-box-shadow:$button-box-shdadow;box-shadow:$button-box-shdadow;color:#fff;cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:.6875rem;font-weight:400;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:10px 16px;position:relative;text-align:center;text-transform:uppercase;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap}.button.is-hovered[data-sa-modal], .button[data-sa-modal]:hover{background-color:#289375;border-color:$button-hover-border-color;color:#fff}.button.is-focused[data-sa-modal], .button[data-sa-modal]:focus{color:#fff;outline:0}.button.is-small[data-sa-modal]{font-size:.675rem;padding:8px 12px}.button[disabled][data-sa-modal]{background-color:#d8d8d8!important;border-color:$grey-lighter;-webkit-box-shadow:none;box-shadow:none;cursor:not-allowed}.button.is-text[data-sa-modal]{background-color:transparent!important;border-color:transparent;color:#666;font-size:.75rem;font-weight:700;padding:0;text-decoration:none}.button.is-text.is-focused[data-sa-modal], .button.is-text.is-hovered[data-sa-modal], .button.is-text[data-sa-modal]:focus, .button.is-text[data-sa-modal]:hover{color:#333}.button.is-text[disabled][data-sa-modal]{background-color:transparent!important;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#d8d8d8!important}.button.is-secondary[data-sa-modal]{background-color:#f26c32}.button.is-secondary.is-hovered[data-sa-modal], .button.is-secondary[data-sa-modal]:hover{background-color:#b14f25}.button.is-tertiary[data-sa-modal]{background-color:#999}.button.is-tertiary.is-hovered[data-sa-modal], .button.is-tertiary[data-sa-modal]:hover{background-color:#333}.button.is-secondary[data-sa-modal], .button.is-secondary.is-active[data-sa-modal], .button.is-secondary.is-focused[data-sa-modal], .button.is-secondary.is-hovered[data-sa-modal], .button.is-secondary[data-sa-modal]:active, .button.is-secondary[data-sa-modal]:focus, .button.is-secondary[data-sa-modal]:hover, .button.is-tertiary[data-sa-modal], .button.is-tertiary.is-active[data-sa-modal], .button.is-tertiary.is-focused[data-sa-modal], .button.is-tertiary.is-hovered[data-sa-modal], .button.is-tertiary[data-sa-modal]:active, .button.is-tertiary[data-sa-modal]:focus, .button.is-tertiary[data-sa-modal]:hover{border-color:transparent;color:#fff}.button.is-secondary.is-text[data-sa-modal], .button.is-tertiary.is-text[data-sa-modal]{background-color:transparent!important;color:#666}.button.is-secondary.is-text[data-sa-modal]:hover, .button.is-tertiary.is-text[data-sa-modal]:hover{color:#333}.title-style[data-sa-modal], [data-sa-modal-host]   .sa-modal-content[data-sa-modal]   .primary-title[data-sa-modal], [data-sa-modal-host]   .sa-modal-content[data-sa-modal]   .secondary-title[data-sa-modal]{font-weight:400;margin-bottom:0;margin-top:0}[data-sa-modal-host]   .sa-modal[data-sa-modal]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;bottom:0;display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;overflow:hidden;position:fixed;right:0;top:0;z-index:40}[data-sa-modal-host]   .sa-modal.is-active[data-sa-modal]{display:-webkit-box;display:-ms-flexbox;display:flex}[data-sa-modal-host]   .sa-modal.is-small[data-sa-modal]   .sa-modal-content[data-sa-modal]{width:373px}[data-sa-modal-host]   .sa-modal-bg[data-sa-modal]{background-color:rgba(0,0,0,.05);bottom:0;left:0;position:absolute;right:0;top:0}[data-sa-modal-host]   .sa-modal-content[data-sa-modal]{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-smoothing:antialiased;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;text-shadow:rgba(0,0,0,.01) 0 0 1px;background-color:#fff;-webkit-box-shadow:0 0 20px 0 #f2f2f2;box-shadow:0 0 20px 0 #f2f2f2;-webkit-box-sizing:border-box;box-sizing:border-box;color:#333;font-size:.75rem;line-height:1.65;padding:32px 48px 32px 32px;position:relative;width:529px}[data-sa-modal-host]   .sa-modal-content[data-sa-modal]   .primary-title[data-sa-modal]{font-size:1.125rem;line-height:22px}[data-sa-modal-host]   .sa-modal-content[data-sa-modal]   .secondary-title[data-sa-modal]{font-size:.875rem;line-height:20px}[data-sa-modal-host]   .sa-modal-content[data-sa-modal]   .content[data-sa-modal]{margin-bottom:32px;margin-top:15px}[data-sa-modal-host]   .sa-modal-content[data-sa-modal]   .sa-modal-footer[data-sa-modal]{height:32px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-top:24px;text-align:right}[data-sa-modal-host]   .sa-modal-content[data-sa-modal]   .sa-modal-footer.buttons[data-sa-modal]   .button[data-sa-modal]{margin-bottom:0}[data-sa-modal-host]   .sa-modal-content[data-sa-modal]:before{background-color:#d8d8d8;content:'';display:block;height:8px;left:0;position:absolute;right:0;top:0;width:100%}[data-sa-modal-host]   .sa-modal-close[data-sa-modal]{background:0 0;border:none;color:#d8d8d8;cursor:pointer;display:block;height:24px;padding:0;position:absolute;right:9px;top:18px;width:24px}[data-sa-modal-host]   .sa-modal-close[data-sa-modal]:focus{outline:0}[data-sa-modal-host]   .modal-card-body[data-sa-modal]{background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:20px}"},enumerable:!0,configurable:!0}),t}();t.SaModal=i,Object.defineProperty(t,"__esModule",{value:!0})});