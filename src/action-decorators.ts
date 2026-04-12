import 'reflect-metadata';

/**
 * Interface defining the execution context for a backend action.
 */
export interface ActionContext {
    /** Input parameters passed from the frontend or previous flow node */
    inputs: Record<string, any>;
    /** Global flow/session data */
    data: Record<string, any>;
    /** Local variables scoped to this node */
    locals: Record<string, any>;
    /** Trace logger for execution debugging */
    log: (...args: any[]) => void;
    /** Persistently set global project data */
    setData: (key: string, value: any) => void;
    /** Persistently set local node data */
    setLocal: (key: string, value: any) => void;
}

/**
 * Interface defining the standard result of a backend action.
 */
export interface ActionResult {
    /** Output data to be passed to the next node */
    output?: Record<string, any>;
    /** State or status of the execution */
    status?: 'success' | 'error' | 'pending';
    /** Human-readable message */
    message?: string;
    /** The ID of the next node to execute (optional) */
    next?: string | null;
}

/**
 * Decorator to register a class as a Zero Backend Action.
 * @param options Action configuration (id, name, etc.)
 */
export function ZeroAction(options: { id: string; name: string; description?: string }) {
    return function (constructor: Function) {
        Reflect.defineMetadata('zero:action:id', options.id, constructor);
        Reflect.defineMetadata('zero:action:name', options.name, constructor);
        Reflect.defineMetadata('zero:action:type', 'action', constructor);
        Reflect.defineMetadata('zero:action:description', options.description, constructor);
        
        console.log(`[Annotation] Registered Backend Action: ${options.name} (${options.id})`);
    };
}
