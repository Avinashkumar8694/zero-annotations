// src/renderer-component.ts
import 'reflect-metadata';

interface ZeroComponentOptions {
  componentName: string;
  componentVersion: string;
  label: string;
  selector: string;
  category: string;
  icon: string;
}

function isValidZeroComponentOptions(options: ZeroComponentOptions): boolean {
  return (
    typeof options.componentName === 'string' &&
    typeof options.componentVersion === 'string' &&
    typeof options.label === 'string' &&
    typeof options.selector === 'string' &&
    typeof options.category === 'string' &&
    typeof options.icon === 'string'
  );
}

function RendererComponentDecorator(options: ZeroComponentOptions): ClassDecorator {
  return function (target: any) {
    if (isValidZeroComponentOptions(options)) {
      Reflect.defineMetadata(
        'ZeroComponent',
        {
          componentVersion: options.componentVersion,
          componentName: options.componentName,
          label: options.label,
          selector: options.selector,
          category: options.category,
          icon: options.icon,
        },
        target.prototype
      );
      if (globalThis?.customElements) {
        customElements.define(`${options.selector}-${options.componentVersion}`, target);
      } else {
        console.warn(
          'customElements API does not exist in this environment. Skipping custom element registration.'
        );
      }
    } else {
      throw new Error('Invalid ZeroComponentOptions for RendererComponent decorator');
    }
  };
}

export function RendererComponent(options: ZeroComponentOptions): ClassDecorator {
  return RendererComponentDecorator(options);
}
