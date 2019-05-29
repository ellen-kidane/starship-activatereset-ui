export class ToolbarItem {
    constructor() {
        this.isActive = false;
        this.url = '#';
    }
    render() {
        return (h("a", { class: { 'sa-toolbar-item': true, 'active': this.isActive }, href: this.url },
            h("slot", null)));
    }
    static get is() { return "sa-toolbar-item"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "isActive": {
            "type": Boolean,
            "attr": "is-active"
        },
        "url": {
            "type": String,
            "attr": "url"
        }
    }; }
    static get style() { return "/**style-placeholder:sa-toolbar-item:**/"; }
}
