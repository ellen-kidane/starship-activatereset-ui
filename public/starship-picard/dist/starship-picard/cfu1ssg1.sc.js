/*! Built with http://stenciljs.com */
const{h:e}=window.StarshipPicard;class i{constructor(){this.byteSizeLimit=1e7}onFileSelected(e){const i=this.uploaderEl.shadowRoot.querySelector("#fileInput"),t=this.uploaderEl.shadowRoot.querySelector("#fileImg"),a=i.files[0],l=new FileReader;if(a.size<=this.byteSizeLimit)l.addEventListener("load",()=>{t.src=l.result}),l.readAsDataURL(a),this.uploaded=!0,this.fileName=a.name,this.imageUploaderOnUpload.emit(a);else{const i={error:"fileSize",event:e};this.imageUploaderOnUpload.emit(i)}}removeFile(e){const i=this.uploaderEl.shadowRoot.querySelector("#fileInput"),t=this.uploaderEl.shadowRoot.querySelector("#fileImg");e?this.removeImage.emit(e):(this.uploaded=!1,i.value="",t.src="")}render(){return e("div",null,(!this.imageUrl||"[object File]"===this.imageUrl)&&e("div",{class:"image-uploader"},e("div",{class:{"can-upload":!0,"is-hidden":this.uploaded}},e("i",{class:"material-icons photo-icon"},"photo_library"),e("div",{class:{"drag-text":!0,"is-hidden":!this.isDraggable}},"Drag an image here"),e("div",{class:{"or-text":!0,"is-hidden":!this.isDraggable}},"— or —"),e("div",{class:"upload-btn-wrapper"},e("button",{type:"button",class:"button"},this.uploadButtonText),e("input",{id:"fileInput",type:"file",name:"myfile",accept:"image/*",onChange:e=>this.onFileSelected(e)})),e("div",{class:"is-small"},this.sizeLimitText)),e("div",{class:{uploaded:!0,"is-hidden":!this.uploaded}},e("img",{id:"fileImg",class:"upload-img",src:"",alt:"uploaded_img",width:"140",height:"140"}))),e("div",{class:{"file-list":!0,"is-invisible":!this.uploaded}},e("i",{class:"material-icons",onClick:()=>this.removeFile()},"close"),e("span",null,this.fileName)),this.imageUrl&&"[object File]"!==this.imageUrl&&e("div",{class:{"file-list":!0}},e("i",{class:"material-icons",onClick:()=>this.removeFile(this.imageUrl)},"close"),e("span",{class:"preview-image not-string"},e("img",{src:this.imageUrl}))))}static get is(){return"sa-image-uploader"}static get encapsulation(){return"shadow"}static get properties(){return{byteSizeLimit:{type:Number,attr:"byte-size-limit"},fileName:{state:!0},imageUrl:{type:String,attr:"image-url"},isDraggable:{type:Boolean,attr:"is-draggable"},sizeLimitText:{type:String,attr:"size-limit-text"},uploadButtonText:{type:String,attr:"upload-button-text"},uploaded:{state:!0},uploaderEl:{elementRef:!0}}}static get events(){return[{name:"imageUploaderOnUpload",method:"imageUploaderOnUpload",bubbles:!0,cancelable:!0,composed:!0},{name:"removeImage",method:"removeImage",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".material-icons[data-sa-image-uploader]{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;-webkit-font-feature-settings:'liga';font-feature-settings:'liga'}[data-sa-image-uploader-host]{font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-smoothing:antialiased;-webkit-font-variant-ligatures:none;font-variant-ligatures:none;text-shadow:rgba(0,0,0,.01) 0 0 1px}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px dashed #e5e5e5;color:#999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:200px;width:200px}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .can-upload[data-sa-image-uploader]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .photo-icon[data-sa-image-uploader]{color:#999;font-size:32px;height:32px;margin-bottom:8px;margin-top:46px;width:32px}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .drag-text[data-sa-image-uploader]{font-size:13px;margin-bottom:8px}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .or-text[data-sa-image-uploader]{font-size:12px;margin-bottom:8px}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .upload-btn-wrapper[data-sa-image-uploader]{margin-bottom:8px;position:relative;width:148px}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .upload-btn-wrapper[data-sa-image-uploader]   .button[data-sa-image-uploader]{background-color:#d8d8d8;border:none;color:#fff;font-size:9px;height:24px;padding:7px 0;text-transform:uppercase;width:100%}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .upload-btn-wrapper[data-sa-image-uploader]   input[type=file][data-sa-image-uploader]{cursor:pointer;height:24px;left:0;opacity:0;position:absolute;width:100%}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .is-small[data-sa-image-uploader]{font-size:10px}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .uploaded[data-sa-image-uploader]{margin:auto}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .is-hidden[data-sa-image-uploader]{display:none}[data-sa-image-uploader-host]   .image-uploader[data-sa-image-uploader]   .upload-img[data-sa-image-uploader]{display:block;height:auto;max-height:140px;max-width:140px;width:auto}[data-sa-image-uploader-host]   .file-list[data-sa-image-uploader]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#333;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:14px;margin-top:16px}[data-sa-image-uploader-host]   .file-list[data-sa-image-uploader]   i[data-sa-image-uploader]{color:#666;cursor:pointer;margin-right:8px}[data-sa-image-uploader-host]   .is-invisible[data-sa-image-uploader]{visibility:hidden}[data-sa-image-uploader-host]   .preview-image[data-sa-image-uploader]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:2px dashed #e5e5e5;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;height:160px;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;max-height:160px;max-width:160px;padding:20px;width:160px}[data-sa-image-uploader-host]   .preview-image[data-sa-image-uploader]   img[data-sa-image-uploader]{display:block;height:auto;max-width:134px;width:auto}"}}export{i as SaImageUploader};