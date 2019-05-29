const currentYear = new Date().getFullYear();
export class Footer {
    render() {
        return (h("footer", null,
            h("div", { class: "sa-footer container" },
                "Rally Health, Inc. \u00A9 ",
                currentYear,
                ", All Rights Reserved.")));
    }
    static get is() { return "sa-footer"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:sa-footer:**/"; }
}
