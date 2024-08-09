export const enum UserInterfaceType {
    TEXT_INPUT = 'input',
    TOGGLE_SWITCH = 'toggle',
    DROP_DOWN_MENU = 'drop-down',
    MULTI_SELECT = 'multiselect',
    TYPED_INPUT_FIELD = 'typed-input',
    RANGE_SLIDER = 'range',
    COLOR_PICKER_TOOL = 'color-picker',
    DATA_SOURCE = 'datasource',
    DATA_SET = 'dataset',
    TABLE_ACTION = 'table_actions',
    DATA_MAPPER = 'data_mapping',
}

export const enum AttributeType {
    PROPERTY = 'property',
    EVENT = 'event',
    VALIDATION_RULE = 'validation',
}

export interface DropdownOptionItem {
    label: string | number;
    key: string | number | boolean;
}

export interface TypedInputOptionItem {
    fieldName: 'Model' | 'String' | 'Language' | 'Local';
    fieldValue: 'model' | 'string' | 'lang' | 'local';
}

export interface RangeSettings {
    minimumLabel?: string;
    maximumLabel?: string;
    minimumValue?: number;
    maximumValue?: number;
}

export interface MaxLengthRule {
    maximumLength: number;
}

interface TypedInputMapping {
    fieldType?: string;
    fieldValue: string;
}

interface DataSourceMapping {
    apiResponse: any;
    labelKey: string;
    valueKey: string;
}

export interface InputFieldType {
    inputType: 'text' | 'number';
}

export interface RendererAttributeConfiguration {
    attributeType: AttributeType;
    uiComponentType?: UserInterfaceType;
    displayLabel?: string;
    eventTrigger?: string;
    categoryLabel?: string;
    placeholderText?: string;
    initialValue?: boolean | string | number | any[] | object;
    optionItems?: DropdownOptionItem[] | TypedInputOptionItem[] | RangeSettings | MaxLengthRule | InputFieldType;
    fieldMappings?: string | TypedInputMapping | DataSourceMapping | Record<string, string>;
    validationRules?: Record<string, any>;
}
