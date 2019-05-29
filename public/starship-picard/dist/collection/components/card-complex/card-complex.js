export class CardComplex {
    constructor() {
        this.hasFooter = true;
    }
    render() {
        return (h("aside", { class: "card-complex" },
            this.headerTitle ? h("header", { class: "card-complex-header" }, this.headerTitle) : null,
            h("div", { class: "card-complex-body" },
                h("slot", null)),
            this.hasFooter ? h("footer", { class: "card-complex-footer" },
                h("div", { class: "divider" }),
                h("div", { class: "card-complex-footer-container" },
                    h("slot", { name: "card-complex-footer" }))) : null));
    }
    static get is() { return "sa-card-complex"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "hasFooter": {
            "type": Boolean,
            "attr": "has-footer"
        },
        "headerTitle": {
            "type": String,
            "attr": "header-title"
        }
    }; }
    static get style() { return "/**style-placeholder:sa-card-complex:**/"; }
}
