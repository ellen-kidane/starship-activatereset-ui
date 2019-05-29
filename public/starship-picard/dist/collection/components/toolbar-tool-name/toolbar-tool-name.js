export class ToolbarToolName {
    render() {
        return (h("span", { class: "sa-toolbar-tool-name" }, this.tool));
    }
    static get is() { return "sa-toolbar-tool-name"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "tool": {
            "type": String,
            "attr": "tool"
        }
    }; }
    static get style() { return "/**style-placeholder:sa-toolbar-tool-name:**/"; }
}
