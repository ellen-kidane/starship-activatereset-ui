import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class Chrome {
    env: string;
    hasNav: boolean;
    hasSecondaryTool: boolean;
    hasTool: boolean;
    menuItems: string;
    secondaryToolName: string;
    toolName: string;
    url: string;
    username: string;
    menuItemSelectedFromChrome: EventEmitter;
    menuItemSelectedHandler(event: any): void;
    render(): JSX.Element[];
}
