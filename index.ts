// src/index.ts
import 'reflect-metadata';
export { LoadCSS } from './src/load-css';
export { LoadJS } from './src/load-js';
export { RendererComponent } from './src/renderer-component';
export type { ZeroComponentConfig, ZeroStudioTemplateFactory, ZeroStudioTemplateProvider } from './src/renderer-component';
export { applyGlobalStyles } from './src/rendered-style';
export { RendererAttribute } from './src/renderer-attributes';
import type { ZeroModuleInit } from './src/module-decorators';
export { 
    ZeroModule, 
    ZeroRegistryReady 
} from './src/module-decorators';
export type { ZeroModuleInit };
export { 
    UserInterfaceType, 
    AttributeType, 
    TextInputConfig, 
    DropdownInputConfig, 
    CheckableInputConfig, 
    CheckableOption, 
    RangeSliderConfig, 
    FileInputConfig, 
    DatePickerConfig, 
    ColorPickerConfig, 
    NumberInputConfig, 
    TextAreaConfig, 
    DropdownOptionItem, 
    ZeroStudioTemplate,
    ZeroStudioTemplateContext,
    ZeroStudioTemplateMetric,
    ZeroStudioSlotDefinition,
    ZeroStudioGeneratedSlotDefinition,
    TypedInputOptionItem, 
    RangeSettings, 
    MaxLengthRule, 
    InputFieldType, 
    RendererAttributeConfiguration, 
    TypedInputMapping 
} from './src/renderer-interface';
export { ZeroAction, ActionContext, ActionResult } from './src/action-decorators';
