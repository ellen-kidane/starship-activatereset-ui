import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class ImageUploader {
    byteSizeLimit: number;
    isDraggable: boolean;
    sizeLimitText: string;
    uploadButtonText: string;
    imageUrl: string;
    fileName: string;
    uploaded: boolean;
    uploaderEl: HTMLElement;
    imageUploaderOnUpload: EventEmitter;
    removeImage: EventEmitter;
    onFileSelected(event: any): void;
    removeFile(url?: string): void;
    render(): JSX.Element;
}
