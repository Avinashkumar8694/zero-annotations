import { RendererAttributeConfiguration } from './renderer-interface';

export function validateRendererAttributeConfiguration(options: RendererAttributeConfiguration): boolean {
    const category = options?.categoryLabel?.trim();

    if (category === '') {
        throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
    }

    return true;
}


function applyRendererAttribute(options: RendererAttributeConfiguration): PropertyDecorator {
    return function (target: Object, propertyKey: string | symbol): void {
        try {
            if (!validateRendererAttributeConfiguration(options)) return;
            const existingAttributes = Reflect.getMetadata('ZeroAttribute', target) || [];
            if (typeof propertyKey === 'string' && typeof (target as any)[propertyKey] !== 'function') {
                options.fieldMappings = options.fieldMappings ?? propertyKey;
            }
            existingAttributes.push(options);
            Reflect.defineMetadata('ZeroAttribute', existingAttributes, target);
        } catch (e) {
            console.log(e)
        }
    };
}

export function RendererAttribute(options: RendererAttributeConfiguration): PropertyDecorator {
    return applyRendererAttribute(options);
}
