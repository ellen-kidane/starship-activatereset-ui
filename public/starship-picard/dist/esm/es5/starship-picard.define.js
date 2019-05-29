// StarshipPicard: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './starship-picard.core.js';
import {
  CardComplex,
  Chrome,
  Footer,
  ImageUploader,
  Modal,
  Toolbar,
  ToolbarDivider,
  ToolbarEnv,
  ToolbarItem,
  ToolbarLogo,
  ToolbarMenu,
  ToolbarNav,
  ToolbarToolName,
  ToolbarUser
} from './starship-picard.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    CardComplex,
    Chrome,
    Footer,
    ImageUploader,
    Modal,
    Toolbar,
    ToolbarDivider,
    ToolbarEnv,
    ToolbarItem,
    ToolbarLogo,
    ToolbarMenu,
    ToolbarNav,
    ToolbarToolName,
    ToolbarUser
  ], opts);
}