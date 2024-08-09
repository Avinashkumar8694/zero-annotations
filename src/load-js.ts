// src/load-js.ts
export function LoadJS(url: string) {
    if (!url || typeof url !== 'string') {
      throw new Error('Invalid URL for LoadJS decorator');
    }
    return function (target: any) {
      const connectedCallback = target.prototype.connectedCallback;
      target.prototype.connectedCallback = function () {
        const script = document.createElement('script');
        script.src = url;
        script.defer = true;
        this.shadowRoot?.appendChild(script);
        if (connectedCallback) {
          connectedCallback.call(this);
        }
      };
    };
  }
  