// src/renderer-component.ts
import 'reflect-metadata';
import type { ZeroStudioTemplate, ZeroStudioTemplateContext } from './renderer-interface';

export interface ZeroComponentConfig {
  name: string;
  version: string;
  title: string;
  elementSelector: string;
  group: string;
  iconName: string;
}

export type ZeroStudioTemplateFactory = (config?: ZeroStudioTemplateContext) => ZeroStudioTemplate;

export interface ZeroStudioTemplateProvider {
  getStudioTemplate?: ZeroStudioTemplateFactory;
  studioTemplate?: ZeroStudioTemplate;
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
        const tag = `${config.elementSelector}-${config.version}`;
        if (!customElements.get(tag)) {
          try {
            customElements.define(tag, constructor);
          } catch (e) {
            // If constructor is already registered under another tag (e.g. the base selector),
            // subclass it dynamically to define it under the versioned tag.
            try {
              customElements.define(tag, class extends constructor {});
            } catch (err) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${tag}:`, err);
            }
          }
        }
      } else {
        console.warn(
          'The customElements API is not supported in this environment. Custom element registration skipped.'
        );
      }
      window.dispatchEvent(
        new CustomEvent('zero-element:component-load', {
          detail: {
            element: metadata,
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
