export class Modal {
    constructor() {
        this.isActive = false;
        this.hasActions = true;
        this.isSmall = false;
        this.primaryActionText = 'Ok';
        this.primaryDisabled = false;
        this.secondaryActionText = 'Cancel';
        this.secondaryDisabled = false;
    }
    launchModal() {
        this.isActive = !this.isActive;
    }
    closeModal() {
        this.isActive = false;
        this.modalClosed.emit(event);
    }
    secondaryActionHandler(event) {
        this.modalSecondaryAction.emit(event);
    }
    primaryActionHandler(event) {
        this.modalPrimaryAction.emit(event);
    }
    render() {
        return (h("div", { id: this.id, class: { 'sa-modal': true, 'is-active': this.isActive, 'is-small': this.isSmall } },
            h("div", { class: "sa-modal-bg" }),
            h("div", { class: "sa-modal-content" },
                h("h1", { class: "primary-title" }, this.primaryTitle),
                this.secondaryTitle && !this.isSmall ? h("h2", { class: "secondary-title" }, this.secondaryTitle) : null,
                h("button", { class: "sa-modal-close is-large", "aria-label": "close", onClick: () => this.closeModal() },
                    h("i", { class: "material-icons" }, "close")),
                !this.isSmall ? h("div", { class: "content" },
                    h("slot", null)) : null,
                this.hasActions ? h("footer", { class: "sa-modal-footer buttons" },
                    h("button", { class: "button is-tertiary", disabled: this.secondaryDisabled, onClick: (event) => this.secondaryActionHandler(event) }, this.secondaryActionText),
                    h("button", { class: "button", disabled: this.primaryDisabled, onClick: (event) => this.primaryActionHandler(event) }, this.primaryActionText)) : null)));
    }
    static get is() { return "sa-modal"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "closeModal": {
            "method": true
        },
        "hasActions": {
            "type": Boolean,
            "attr": "has-actions"
        },
        "id": {
            "type": String,
            "attr": "id"
        },
        "isActive": {
            "state": true
        },
        "isSmall": {
            "type": Boolean,
            "attr": "is-small"
        },
        "launchModal": {
            "method": true
        },
        "primaryActionText": {
            "type": String,
            "attr": "primary-action-text"
        },
        "primaryDisabled": {
            "type": Boolean,
            "attr": "primary-disabled"
        },
        "primaryTitle": {
            "type": String,
            "attr": "primary-title"
        },
        "secondaryActionText": {
            "type": String,
            "attr": "secondary-action-text"
        },
        "secondaryDisabled": {
            "type": Boolean,
            "attr": "secondary-disabled"
        },
        "secondaryTitle": {
            "type": String,
            "attr": "secondary-title"
        }
    }; }
    static get events() { return [{
            "name": "modalClosed",
            "method": "modalClosed",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "modalPrimaryAction",
            "method": "modalPrimaryAction",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "modalSecondaryAction",
            "method": "modalSecondaryAction",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:sa-modal:**/"; }
}
