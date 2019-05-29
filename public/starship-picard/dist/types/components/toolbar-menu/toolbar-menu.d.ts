import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class ToolbarMenu {
    mdcMenuComponent: any;
    mdcMenu: any;
    menuEl: HTMLElement;
    open: boolean;
    menuItems: string;
    selected: EventEmitter;
    componentDidLoad(): void;
    componentDidUnload(): void;
    constructor();
    show(event: any): void;
    hide(): void;
    render(): JSX.Element[];
}
