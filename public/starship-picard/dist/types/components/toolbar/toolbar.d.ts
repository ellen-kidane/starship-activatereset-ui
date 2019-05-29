import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class Toolbar {
    env: string;
    hasNav: boolean;
    hasTool: boolean;
    hasSecondaryTool: boolean;
    menuItems: string;
    secondaryTool: string;
    tool: string;
    username: string;
    url: string;
    menuItemSelected: EventEmitter;
    menuItemSelectedHandler(event: any): void;
    render(): JSX.Element;
}
