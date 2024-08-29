// src/renderer-component.ts
import 'reflect-metadata';

interface ZeroComponentConfig {
  name: string;
  version: string;
  title: string;
  elementSelector: string;
  group: string;
  iconName: string;
}

function isValidComponentConfig(config: ZeroComponentConfig): boolean {
  return (
    typeof config.name === 'string' &&
    typeof config.version === 'string' &&
    typeof config.title === 'string' &&
    typeof config.elementSelector === 'string' &&
    typeof config.group === 'string' &&
    typeof config.iconName === 'string'
  );
}

function RendererComponentDecorator(config: ZeroComponentConfig): ClassDecorator {
  return function (constructor: any) {
    if (isValidComponentConfig(config)) {
      const metadata = {
        version: config.version,
        name: config.name,
        title: config.title,
        selector: config.elementSelector,
        category: config.group,
        icon: config.iconName,
      };

      Reflect.defineMetadata('ZeroComponent', metadata, constructor.prototype);

      if (globalThis.customElements) {
        customElements.define(
          `${config.elementSelector}-${config.version}`,
          constructor
        );
      } else {
        console.warn(
          'The customElements API is not supported in this environment. Custom element registration skipped.'
        );
      }
      window.dispatchEvent(
        new CustomEvent('zero-element:component-load', {
          detail: {
            element: this,
          },
        })
      );
    } else {
      throw new Error('Invalid configuration provided to RendererComponent decorator');
    }
  };
}

export function RendererComponent(options: ZeroComponentConfig): ClassDecorator {
  return RendererComponentDecorator(options);
}
