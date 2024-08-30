// Example TypeScript Enums and Interfaces

/**
 * Represents different types of user interface components.
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
    SWITCH = 'switch',
    HIDDEN_INPUT = 'hidden-input'
}

/**
 * Represents different types of attributes.
 */
export enum AttributeType {
    PROPERTY = 'property',
    EVENT = 'event',
    ACTION = 'action'
}

/**
 * Configuration for a text input field.
 */
export interface TextInputConfig {
    type?: 'text' | 'password'; // Input type
    maxLength?: number; // Maximum number of characters
    minLength?: number; // Minimum number of characters
    pattern?: string; // Regex pattern for validation
    placeholderText?: string; // Placeholder text
}

/**
 * Configuration for a dropdown input field.
 */
export interface DropdownInputConfig {
    items: DropdownOptionItem[]; // List of options
    multiple?: boolean; // Allow multiple selections
    defaultSelectedValue?: string; // Default selected value
}

/**
 * Configuration for checkable input fields (checkbox or radio button).
 */
export interface CheckableInputConfig {
    options: CheckableOption[]; // List of options
    layout?: 'horizontal' | 'vertical'; // Layout style
}

/**
 * Represents an option for checkable inputs.
 */
export interface CheckableOption {
    value: string | boolean; // Value of the option
    label: string; // Display label
    checked?: boolean; // Is the option selected by default
}

/**
 * Configuration for a range slider input field.
 */
export interface RangeSliderConfig {
    minValue: number; // Minimum value
    maxValue: number; // Maximum value
    stepValue?: number; // Step interval
    defaultValue?: number; // Default value
    displayTooltip?: boolean; // Show tooltip on hover
    unit?: string; // Unit of measurement
}

/**
 * Configuration for a file input field.
 */
export interface FileInputConfig {
    accept?: string; // File types allowed (e.g., .jpg, .png)
    multiple?: boolean; // Allow multiple file uploads
    maxFileSize?: number; // Maximum file size in bytes
}

/**
 * Configuration for a date picker input field.
 */
export interface DatePickerConfig {
    minDate?: string; // Earliest selectable date (format: YYYY-MM-DD)
    maxDate?: string; // Latest selectable date (format: YYYY-MM-DD)
}

/**
 * Configuration for a color picker input field.
 */
export interface ColorPickerConfig {
    // Color picker specific configurations can be added here
}

/**
 * Configuration for a number input field.
 */
export interface NumberInputConfig {
    min?: number; // Minimum value
    max?: number; // Maximum value
    step?: number; // Step increment
    defaultValue?: number; // Default value
}

/**
 * Configuration for a textarea input field.
 */
export interface TextAreaConfig {
    rows?: number; // Number of rows
    cols?: number; // Number of columns
    placeholderText?: string; // Placeholder text
}

/**
 * Configuration for a switch input field.
 */
export interface SwitchConfig {
    // Switch specific configurations can be added here
}

/**
 * Configuration for a hidden input field.
 */
export interface HiddenInputConfig {
    // Hidden input specific configurations can be added here
}

/**
 * Represents a dropdown option item.
 */
export interface DropdownOptionItem {
    value: string; // Value of the option
    label: string; // Display label
}

/**
 * Represents a typed input option item.
 */
export interface TypedInputOptionItem {
    value: string; // Value of the option
    label: string; // Display label
}

/**
 * Represents range settings for inputs.
 */
export interface RangeSettings {
    min: number; // Minimum value
    max: number; // Maximum value
    step: number; // Step interval
    default: number; // Default value
}

/**
 * Represents a maximum length rule for inputs.
 */
export interface MaxLengthRule {
    maxLength: number; // Maximum number of characters
}

/**
 * Represents an input field type.
 */
export interface InputFieldType {
    type: string; // Type of the input field
}

/**
 * Main renderer attribute configuration.
 */
export interface RendererAttributeConfiguration {
    attributeType: AttributeType; // Type of attribute
    uiComponentType?: UserInterfaceType; // Type of UI component
    displayLabel?: string; // Label for the UI component
    eventTrigger?: string; // Event to trigger
    categoryLabel?: string; // Category label for grouping
    placeholderText?: string; // Placeholder text
    initialValue?: boolean | string | number | any[] | object; // Initial value
    optionItems?: DropdownOptionItem[] | TypedInputOptionItem[] | RangeSettings | MaxLengthRule | InputFieldType | TextInputConfig | DropdownInputConfig | CheckableInputConfig | RangeSliderConfig | FileInputConfig | DatePickerConfig | ColorPickerConfig | NumberInputConfig | TextAreaConfig | SwitchConfig | HiddenInputConfig; // Options and configurations
    fieldMappings?: string | TypedInputMapping | DataSourceMapping | Record<string, string>; // Field mappings
    validationRules?: Record<string, any>; // Validation rules
}

/**
 * Represents a mapping of input field types.
 */
export type TypedInputMapping = Record<string, string>;

/**
 * Represents a data source mapping.
 */
export interface DataSourceMapping {
    source: string; // Data source
    field: string; // Field in the data source
}
