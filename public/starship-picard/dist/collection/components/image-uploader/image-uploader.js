export class ImageUploader {
    constructor() {
        this.byteSizeLimit = 10000000;
    }
    onFileSelected(event) {
        const inputElement = this.uploaderEl.shadowRoot.querySelector('#fileInput');
        const imgElement = this.uploaderEl.shadowRoot.querySelector('#fileImg');
        const selectedFile = inputElement.files[0];
        const reader = new FileReader();
        if (selectedFile.size <= this.byteSizeLimit) {
            reader.addEventListener('load', () => {
                imgElement.src = reader.result;
            });
            reader.readAsDataURL(selectedFile);
            this.uploaded = true;
            this.fileName = selectedFile.name;
            this.imageUploaderOnUpload.emit(selectedFile);
        }
        else {
            const errorObj = {
                error: 'fileSize',
                event
            };
            this.imageUploaderOnUpload.emit(errorObj);
        }
    }
    removeFile(url) {
        const inputElement = this.uploaderEl.shadowRoot.querySelector('#fileInput');
        const imgElement = this.uploaderEl.shadowRoot.querySelector('#fileImg');
        if (url) {
            this.removeImage.emit(url);
        }
        else {
            this.uploaded = false;
            inputElement.value = '';
            imgElement.src = '';
        }
    }
    render() {
        return (h("div", null,
            (!this.imageUrl ||
                this.imageUrl === '[object File]') && (h("div", { class: "image-uploader" },
                h("div", { class: { 'can-upload': true, 'is-hidden': this.uploaded } },
                    h("i", { class: "material-icons photo-icon" }, "photo_library"),
                    h("div", { class: { 'drag-text': true, 'is-hidden': !this.isDraggable } }, "Drag an image here"),
                    h("div", { class: { 'or-text': true, 'is-hidden': !this.isDraggable } }, "\u2014 or \u2014"),
                    h("div", { class: "upload-btn-wrapper" },
                        h("button", { type: "button", class: "button" }, this.uploadButtonText),
                        h("input", { id: "fileInput", type: "file", name: "myfile", accept: "image/*", onChange: ev => this.onFileSelected(ev) })),
                    h("div", { class: "is-small" }, this.sizeLimitText)),
                h("div", { class: { uploaded: true, 'is-hidden': !this.uploaded } },
                    h("img", { id: "fileImg", class: "upload-img", src: "", alt: "uploaded_img", width: "140", height: "140" })))),
            h("div", { class: { 'file-list': true, 'is-invisible': !this.uploaded } },
                h("i", { class: "material-icons", onClick: () => this.removeFile() }, "close"),
                h("span", null, this.fileName)),
            this.imageUrl && this.imageUrl !== '[object File]' && (h("div", { class: { 'file-list': true } },
                h("i", { class: "material-icons", onClick: () => this.removeFile(this.imageUrl) }, "close"),
                h("span", { class: "preview-image not-string" },
                    h("img", { src: this.imageUrl }))))));
    }
    static get is() { return "sa-image-uploader"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "byteSizeLimit": {
            "type": Number,
            "attr": "byte-size-limit"
        },
        "fileName": {
            "state": true
        },
        "imageUrl": {
            "type": String,
            "attr": "image-url"
        },
        "isDraggable": {
            "type": Boolean,
            "attr": "is-draggable"
        },
        "sizeLimitText": {
            "type": String,
            "attr": "size-limit-text"
        },
        "uploadButtonText": {
            "type": String,
            "attr": "upload-button-text"
        },
        "uploaded": {
            "state": true
        },
        "uploaderEl": {
            "elementRef": true
        }
    }; }
    static get events() { return [{
            "name": "imageUploaderOnUpload",
            "method": "imageUploaderOnUpload",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "removeImage",
            "method": "removeImage",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:sa-image-uploader:**/"; }
}
