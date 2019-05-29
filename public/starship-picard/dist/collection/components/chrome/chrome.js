export class Chrome {
    constructor() {
        this.hasNav = true;
        this.hasSecondaryTool = false;
        this.hasTool = true;
        this.url = '#';
    }
    menuItemSelectedHandler(event) {
        this.menuItemSelectedFromChrome.emit(event.detail);
    }
    render() {
        return [
            h("sa-toolbar", { id: "chrome", "has-tool": this.hasTool, "has-secondary-tool": this.hasSecondaryTool, "has-nav": this.hasNav, username: this.username, env: this.env, tool: this.toolName, "secondary-tool": this.secondaryToolName, "menu-items": this.menuItems, url: this.url },
                h("slot", { name: "main-nav" })),
            h("slot", null),
            h("sa-footer", null)
        ];
    }
    static get is() { return "sa-chrome"; }
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
        "secondaryToolName": {
            "type": String,
            "attr": "secondary-tool-name"
        },
        "toolName": {
            "type": String,
            "attr": "tool-name"
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
            "name": "menuItemSelectedFromChrome",
            "method": "menuItemSelectedFromChrome",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get listeners() { return [{
            "name": "menuItemSelected",
            "method": "menuItemSelectedHandler"
        }]; }
    static get style() { return "/**style-placeholder:sa-chrome:**/"; }
}
