export class ToolbarUser {
    render() {
        return (h("span", { class: "sa-toolbar-user" }, this.username));
    }
    static get is() { return "sa-toolbar-user"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "username": {
            "type": String,
            "attr": "username"
        }
    }; }
    static get style() { return "/**style-placeholder:sa-toolbar-user:**/"; }
}
