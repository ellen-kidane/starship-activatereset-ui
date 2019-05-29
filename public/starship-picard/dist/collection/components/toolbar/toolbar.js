export class Toolbar {
    constructor() {
        this.hasNav = true;
        this.hasTool = true;
        this.hasSecondaryTool = false;
        this.secondaryTool = '';
    }
    menuItemSelectedHandler(event) {
        this.menuItemSelected.emit(event.detail);
    }
    render() {
        return (h("header", { class: "sa-toolbar" },
            h("div", { class: "sa-toolbar-container flex-container" },
                h("div", { class: "sa-toolbar-left flex-left" },
                    h("sa-toolbar-logo", { class: "flex-item", url: this.url }),
                    this.hasTool && this.tool ? h("sa-toolbar-divider", { class: "flex-item" }) : null,
                    this.hasTool && this.tool ? h("sa-toolbar-tool-name", { tool: this.tool }) : null,
                    this.hasSecondaryTool && this.secondaryTool ? h("sa-toolbar-divider", { class: "flex-item" }) : null,
                    this.hasSecondaryTool && this.secondaryTool ? h("sa-toolbar-tool-name", { tool: this.secondaryTool }) : null,
                    this.hasNav ? h("sa-toolbar-divider", { class: "flex-item" }) : null,
                    this.hasNav ? h("slot", null) : null),
                h("div", { class: "sa-toolbar-right flex-right" },
                    this.username ? h("sa-toolbar-user", { class: "flex-item", username: this.username }) : null,
                    this.username ? h("sa-toolbar-divider", { class: "flex-item" }) : null,
                    this.env ? h("sa-toolbar-env", { class: "flex-item", env: this.env }) : null,
                    this.env ? h("sa-toolbar-divider", { class: "flex-item" }) : null,
                    this.menuItems ? h("sa-toolbar-menu", { class: "flex-item", "menu-items": this.menuItems }) : null))));
    }
    static get is() { return "sa-toolbar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "env": {
            "type": String,
            "attr": "env"
        },
        "hasNav": {
            "type": Boolean,
            "attr": "has-nav"
        },
        "hasSecondaryTool": {
            "type": Boolean,
            "attr": "has-secondary-tool"
        },
        "hasTool": {
            "type": Boolean,
            "attr": "has-tool"
        },
        "menuItems": {
            "type": String,
            "attr": "menu-items"
        },
        "secondaryTool": {
            "type": String,
            "attr": "secondary-tool"
        },
        "tool": {
            "type": String,
            "attr": "tool"
        },
        "url": {
            "type": String,
            "attr": "url"
        },
        "username": {
            "type": String,
            "attr": "username"
        }
    }; }
    static get events() { return [{
            "name": "menuItemSelected",
            "method": "menuItemSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "selected",
            "method": "menuItemSelectedHandler"
        }]; }
    static get style() { return "/**style-placeholder:sa-toolbar:**/"; }
}
