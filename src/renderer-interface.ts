/**
 * Represents different types of user interface components.
 * 
 * @enum {string}
 */
export enum UserInterfaceType {
    TEXT_INPUT = 'text-input',
    PASSWORD_INPUT = 'password-input',
    DROPDOWN = 'dropdown',
    CHECKBOX = 'checkbox',
    RADIO_BUTTON = 'radio-button',
    RANGE_SLIDER = 'range-slider',
    FILE_INPUT = 'file-input',
    DATE_PICKER = 'date-picker',
    COLOR_PICKER = 'color-picker',
    NUMBER_INPUT = 'number-input',
    TEXTAREA = 'textarea',
    MULTI_SELECT = "multi-select",
    POPUP_DROPDOWN = "popup-dropdown",
    LAYOUT_PICKER = "layout-picker",
    RESPONSIVE_OVERRIDE = "responsive-override",
    IMAGE_PICKER = "image-picker"
}

/**
 * Represents different types of attributes.
 * 
 * @enum {string}
 */
export enum AttributeType {
    PROPERTY = 'property',
    EVENT = 'event',
    ACTION = 'action'
}

/**
 * Represents a configuration for a text input field.
 */
export interface TextInputConfig {
    type?: 'text' | 'password';
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    placeholderText?: string;
}

/**
 * Represents a configuration for a dropdown input field.
 */
export interface DropdownInputConfig {
    items: DropdownOptionItem[];
    multiple?: boolean;
    defaultSelectedValue?: string;
}

/**
 * Represents a configuration for a checkable input field (checkbox or radio button).
 */
export interface CheckableInputConfig {
    options: CheckableOption[];
    layout?: 'horizontal' | 'vertical';
}

/**
 * Represents an individual option for checkable inputs.
 */
export interface CheckableOption {
    value: string | boolean;
    label: string;
    checked?: boolean;
}

/**
 * Represents a configuration for a range slider input field.
 */
export interface RangeSliderConfig {
    minValue: number;
    maxValue: number;
    stepValue?: number;
    defaultValue?: number;
    displayTooltip?: boolean;
    unit?: string;
}

/**
 * Represents a configuration for a file input field.
 */
export interface FileInputConfig {
    accept?: string;
    multiple?: boolean;
    maxFileSize?: number;
}

/**
 * Represents a configuration for a date picker input field.
 */
export interface DatePickerConfig {
    minDate?: string;
    maxDate?: string;
}

/**
 * Represents a configuration for a color picker input field.
 */
export interface ColorPickerConfig {
    // Add additional configurations if needed
}

/**
 * Represents a configuration for a number input field.
 */
export interface NumberInputConfig {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
}

/**
 * Represents a configuration for a textarea input field.
 */
export interface TextAreaConfig {
    rows?: number;
    cols?: number;
    placeholderText?: string;
}

/**
 * Represents a configuration for a dropdown option item.
 */
export interface DropdownOptionItem {
    value: string;
    label: string;
}

export interface ZeroStudioTemplateMetric {
    label: string;
    value: string;
}

export interface ZeroStudioSlotDefinition {
    id: string;
    /**
     * Placement anchor inside the studio template.
     * If omitted, studio falls back to the slot id.
     * Supported template forms include:
     * - <slot name="slot-id"></slot>
     * - {{slot:slot-id}}
     */
    anchor?: string;
    label?: string;
    dropzone?: boolean;
    /**
     * Accepted component name patterns, for example:
     * - ["zero-section"]
     * - ["zero-text", "zero-button"]
     * Empty means any component is allowed.
     */
    accepts?: string[];
}

export interface ZeroStudioGeneratedSlotDefinition {
    /**
     * Generated slot id pattern, e.g. "col-{index}".
     */
    pattern: string;
    /**
     * Placement anchor inside the studio template.
     * Supported template forms include:
     * - <zero-studio-slot-group name="columns"></zero-studio-slot-group>
     * - {{slot-group:columns}}
     */
    anchor?: string;
    /**
     * Prop name from the component config used to generate slot count.
     */
    countProp: string;
    labelPrefix?: string;
    min?: number;
    accepts?: string[];
    dropzone?: boolean;
    direction?: 'row' | 'column';
}

export interface ZeroStudioTemplateContext {
    nodeId?: string;
    componentName: string;
    version?: string;
    props: Record<string, any>;
    bindings: Record<string, string>;
    styles?: Record<string, string>;
    responsiveProps?: {
        mobile?: Record<string, unknown>;
        tablet?: Record<string, unknown>;
        desktop?: Record<string, unknown>;
    };
    responsiveStyles?: {
        mobile?: Record<string, string>;
        tablet?: Record<string, string>;
        desktop?: Record<string, string>;
    };
    studio: {
        mode: Record<string, 'static' | 'variable' | 'expression'>;
        value: Record<string, string>;
        display: Record<string, string>;
        binding: Record<string, string>;
        prop: Record<string, string>;
        props?: Record<string, any>;
    };
}

export interface ZeroStudioTemplate {
    kind: 'panel' | 'section' | 'column' | 'text' | 'button' | 'card' | 'table' | 'generic';
    /**
     * Studio-only visual template.
     * This is free-form HTML-like markup used only by the studio.
     *
     * Supported bindings/tokens:
     * - {{display:label}} (binding-aware static/variable/expression display)
     * - {{mode:label}} (static | variable | expression)
     * - {{value:label}} (raw value preferring binding)
     * - {{prop:label}} (raw prop value only)
     * - {{binding:label}} (raw binding expression only)
     * - {{children}} (inserts nested canvas children/drop-zones)
     * - {{slot:main}} (inject a named slot dropzone)
     * - {{slot-group:columns}} (inject a generated slot group)
     *
     * Supported structural placeholders:
     * - <slot name="main"></slot>
     * - <slot></slot> for the default slot
     * - <zero-studio-slot-group name="columns"></zero-studio-slot-group>
     */
    templateHtml?: string;
    /**
     * Explicit named slots for a container component.
     * When omitted, studio may infer slots from <slot> tags in templateHtml.
     */
    slots?: ZeroStudioSlotDefinition[];
    /**
     * Generated slot groups for repeated dropzones, such as columns/tabs/cards.
     * Studio uses this when slot count comes from component config.
     */
    generatedSlots?: ZeroStudioGeneratedSlotDefinition[];
    labelProp?: string;
    titleProp?: string;
    subtitleProp?: string;
    textProp?: string;
    columnsProp?: string;
    dataProp?: string;
    emptyText?: string;
    dynamicHints?: string[];
    badges?: string[];
    metrics?: ZeroStudioTemplateMetric[];
    sampleHeaders?: string[];
    sampleRows?: string[][];
    placeholderLines?: string[];
}

/**
 * Represents a configuration for a typed input option item.
 */
export interface TypedInputOptionItem {
    value: string;
    label: string;
}

/**
 * Represents a configuration for range settings.
 */
export interface RangeSettings {
    min: number;
    max: number;
    step: number;
    default: number;
}

/**
 * Represents a configuration for a maximum length rule.
 */
export interface MaxLengthRule {
    maxLength: number;
}

/**
 * Represents a configuration for an input field type.
 */
export interface InputFieldType {
    type: string;
}

/**
 * Represents the overall renderer attribute configuration.
 */
export interface RendererAttributeConfiguration {
    attributeType: AttributeType;
    uiComponentType?: UserInterfaceType;
    displayLabel?: string;
    eventTrigger?: string;
    categoryLabel?: string;
    placeholderText?: string;
    initialValue?: boolean | string | number | any[] | object;
    optionItems?: DropdownOptionItem[] | TypedInputOptionItem[] | RangeSettings | MaxLengthRule | InputFieldType | TextInputConfig | DropdownInputConfig | CheckableInputConfig | RangeSliderConfig | FileInputConfig | DatePickerConfig | ColorPickerConfig | NumberInputConfig | TextAreaConfig;
    fieldMappings?: string | TypedInputMapping | DataSourceMapping | Record<string, string>;
    validationRules?: Record<string, any>;
}

/**
 * Represents a mapping of input field types.
 */
export type TypedInputMapping = Record<string, string>;

/**
 * Represents a data source mapping.
 */
export interface DataSourceMapping {
    source: string;
    field: string;
}
