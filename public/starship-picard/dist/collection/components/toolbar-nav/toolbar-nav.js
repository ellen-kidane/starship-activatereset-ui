export class ToolbarNav {
    render() {
        return (h("nav", { class: "sa-nav flex-item" },
            h("slot", null)));
    }
    static get is() { return "sa-toolbar-nav"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:sa-toolbar-nav:**/"; }
}
