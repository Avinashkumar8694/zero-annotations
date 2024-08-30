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
    MULTI_SELECT = "multi-select"
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
