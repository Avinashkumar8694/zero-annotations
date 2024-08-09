// decorators.ts
export function LoadCSS(url: string) {
  if (!url || typeof url !== 'string') {
    throw new Error('Invalid URL for LoadCSS decorator');
  }

  return function (target: Function) {
    const originalConnectedCallback = target.prototype.connectedCallback;

    target.prototype.connectedCallback = function () {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;

      if (this.shadowRoot) {
        this.shadowRoot.appendChild(link);
      } else {
        // If no shadowRoot, append to the document head
        document.head.appendChild(link);
      }

      if (originalConnectedCallback) {
        originalConnectedCallback.call(this);
      }
    };
  };
}
