export class ToolbarDivider {
    render() {
        return (h("span", { class: "sa-toolbar-divider" }));
    }
    static get is() { return "sa-toolbar-divider"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return "/**style-placeholder:sa-toolbar-divider:**/"; }
}
