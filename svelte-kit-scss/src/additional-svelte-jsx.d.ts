/* eslint-disable @typescript-eslint/no-unused-vars */

// See: https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/typescript.md#im-using-an-attributeevent-on-a-dom-element-and-it-throws-a-type-error
declare namespace svelte.JSX {
  interface HTMLAttributes<T> {
    // If you want to use myCustomAttribute={..} (note: all lowercase)
    onclickoutside?: () => void;
    // You can replace any with something more specific if you like
  }
}
