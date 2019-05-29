import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class Modal {
    isActive: boolean;
    hasActions: boolean;
    id?: string;
    isSmall: boolean;
    primaryActionText: string;
    primaryTitle: string;
    primaryDisabled: boolean;
    secondaryActionText: string;
    secondaryTitle?: string;
    secondaryDisabled: boolean;
    modalClosed: EventEmitter;
    modalPrimaryAction: EventEmitter;
    modalSecondaryAction: EventEmitter;
    launchModal(): void;
    closeModal(): void;
    secondaryActionHandler(event: any): void;
    primaryActionHandler(event: any): void;
    render(): JSX.Element;
}
