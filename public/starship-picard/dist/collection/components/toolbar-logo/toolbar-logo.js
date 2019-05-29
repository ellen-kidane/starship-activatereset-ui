export class ToolbarLogo {
    constructor() {
        this.url = '#';
    }
    render() {
        return (h("a", { class: "sa-toolbar-logo", href: this.url },
            h("span", { class: "logo" }, "Rally"),
            h("span", { class: "central" }, "Central")));
    }
    static get is() { return "sa-toolbar-logo"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "url": {
            "type": String,
            "attr": "url"
        }
    }; }
    static get style() { return "/**style-placeholder:sa-toolbar-logo:**/"; }
}
