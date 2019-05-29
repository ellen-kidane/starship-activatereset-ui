import { MDCMenu } from '@material/menu';
export class ToolbarMenu {
    constructor() {
        this.open = false;
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }
    componentDidLoad() {
        this.mdcMenuComponent = MDCMenu.attachTo(this.mdcMenu);
        if (this.open) {
            this.mdcMenuComponent.open = true;
        }
        this.mdcMenu.addEventListener('MDCMenu:selected', evt => {
            this.selected.emit(evt.detail);
        });
        document.addEventListener('click', () => {
            this.hide();
        });
    }
    componentDidUnload() {
        this.mdcMenuComponent.destroy();
    }
    show(event) {
        event.preventDefault();
        this.open = true;
        this.mdcMenuComponent.open = !this.mdcMenuComponent.open;
        event.stopImmediatePropagation();
    }
    hide() {
        this.open = false;
        this.mdcMenuComponent.hide();
    }
    render() {
        return [
            h("a", { class: { 'sa-toolbar-menu': true, active: this.open }, href: "#", onClick: this.show },
                h("i", { class: "material-icons" }, "settings")),
            h("div", { class: "mdc-menu-anchor" },
                h("div", { class: "mdc-menu", tabindex: "-1", ref: mdcMenu => {
                        this.mdcMenu = mdcMenu;
                    } },
                    h("ul", { class: "mdc-menu__items mdc-list", role: "menu", "aria-hidden": "true" }, this.menuItems.split(',').map(menuItem => (h("li", { class: "mdc-list-item", role: "menuitem", tabindex: "0" }, menuItem))))))
        ];
    }
    static get is() { return "sa-toolbar-menu"; }
    static get properties() { return {
        "menuEl": {
            "elementRef": true
        },
        "menuItems": {
            "type": String,
            "attr": "menu-items"
        },
        "open": {
            "state": true
        }
    }; }
    static get events() { return [{
            "name": "selected",
            "method": "selected",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:sa-toolbar-menu:**/"; }
}
