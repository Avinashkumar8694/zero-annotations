import { LitElement, PropertyValueMap } from 'lit';

/**
 * Decorator for applying global styles to a LitElement's shadow DOM.
 *
 * @param {Object} [options] - Optional configuration object.
 * @returns {Function} A decorator that extends the target class.
 */
export function applyGlobalStyles(options?: object): Function {
  return function <T extends { new (...args: any[]): LitElement }>(BaseClass: T) {
    class StyledElement extends BaseClass {
      private _stylesApplied = false;

      override connectedCallback(): void {
        super.connectedCallback();

        // Ensure styles are applied once the element is connected
        if (!this._stylesApplied) {
          this._injectGlobalStyles();
          this._stylesApplied = true;
        }

        window.dispatchEvent(
          new CustomEvent('element-connected', {
            detail: { element: this },
          })
        );
      }

      override update(properties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        try{
            super.update(properties);
        } catch(e){}

        // Moved style application logic to connectedCallback
      }

      private _injectGlobalStyles(): void {
        const styleElement = document.querySelector('style.global-style[type="text/css"]') as HTMLStyleElement;
        const cssLinks = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]');

        // Check for support of adoptedStyleSheets
        const supportsAdoptedStyleSheets = 'adoptedStyleSheets' in Document.prototype;

        if (!this.shadowRoot) {
          console.error('ShadowRoot is not available.');
          return;
        }

        if (styleElement && supportsAdoptedStyleSheets) {
          // Use adoptedStyleSheets if supported
          const styleSheet = new CSSStyleSheet();
          const rules = styleElement.sheet?.cssRules;

          if (rules) {
            Array.from(rules).forEach(rule => styleSheet.insertRule((rule as CSSRule).cssText));
            this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, styleSheet];
          }
        } else if (styleElement) {
          // Fallback for browsers without adoptedStyleSheets support
          const clone = styleElement.cloneNode(true) as HTMLStyleElement;
          this.shadowRoot.appendChild(clone);
        }

        // Inject linked stylesheets
        cssLinks.forEach(link => {
          const clonedLink = link.cloneNode(true) as HTMLLinkElement;
          this.shadowRoot.appendChild(clonedLink);
        });
      }
    }

    return StyledElement;
  };
}
