import { LitElement, PropertyValueMap } from 'lit';

/**
 * Decorator for applying global styles to a LitElement's shadow DOM.
 *
 * @param {Object} [options] - Optional configuration object.
 * @returns {Function} A decorator that extends the target class.
 */
export function applyGlobalStyles(options?: object): Function {
    return function <T extends { new(...args: any[]): LitElement }>(BaseClass: T) {
        class StyledElement extends BaseClass {
            private _stylesApplied = false;

            override connectedCallback(): void {
                super.connectedCallback();
                window.dispatchEvent(
                    new CustomEvent('element-connected', {
                        detail: { element: this },
                    })
                );
            }

            override update(properties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
                if (!this._stylesApplied) {
                    this._injectGlobalStyles();
                    this._stylesApplied = true;
                }
                super.update(properties);
            }

            private _injectGlobalStyles(): void {
                const styleSheet = new CSSStyleSheet();
                const styleElement = document.querySelector('style[alphaGlobalStyle]') as HTMLStyleElement;
                const cssLinks = document.querySelectorAll('link[rel="stylesheet"][alphaGlobalStyle]');

                const rules = styleElement?.sheet?.cssRules;
                if (rules && rules.length) {
                    Array.from(rules).forEach(rule => {
                        styleSheet.insertRule((rule as CSSRule).cssText);
                    });
                }

                cssLinks.forEach(link => {
                    this.shadowRoot?.appendChild(link.cloneNode(true));
                });

                this.shadowRoot?.adoptedStyleSheets.push(styleSheet);
            }
        }

        return StyledElement;
    };
}
