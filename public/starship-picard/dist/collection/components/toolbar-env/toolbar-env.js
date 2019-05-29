export class ToolbarEnv {
    render() {
        return (h("span", { class: "sa-toolbar-env" }, this.env));
    }
    static get is() { return "sa-toolbar-env"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "env": {
            "type": String,
            "attr": "env"
        }
    }; }
    static get style() { return "/**style-placeholder:sa-toolbar-env:**/"; }
}
