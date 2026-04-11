import 'reflect-metadata';

/**
 * Decorator to register a class as a Zero Module.
 * @param options Module configuration (id, description, etc)
 */
export function ZeroModule(options: { id: string; description?: string }) {
    return function (constructor: Function) {
        Reflect.defineMetadata('zero:module:id', options.id, constructor);
        Reflect.defineMetadata('zero:module:description', options.description, constructor);
        Reflect.defineMetadata('zero:module:type', 'module', constructor);
        
        // Auto-register with the registry if available
        if ((window as any).ZeroRegistry) {
            (window as any).ZeroRegistry.registerModule(options.id, constructor);
        }
    };
}

/**
 * Interface for module initialization lifecycle hook.
 */
export interface ZeroModuleInit {
    onBeforeInit(): void | Promise<void>;
    onInit(): void | Promise<void>;
    onAfterInit(): void | Promise<void>;
}

/**
 * Decorator to mark a method as responsive to Zero Registry ready event.
 */
export function ZeroRegistryReady() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            if ((window as any).ZeroRegistry?.isReady) {
                return originalMethod.apply(this, args);
            }
            window.addEventListener('zero-registry-ready', () => {
                originalMethod.apply(this, args);
            }, { once: true });
        };
    };
}
