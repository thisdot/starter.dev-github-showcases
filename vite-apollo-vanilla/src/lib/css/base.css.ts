/**
 * The following is a CSS normalization based on Tailwind's preflight CSS
 * rewritten in vanilla-extract syntax.
 * 
 * MIT License
 * 
 * Copyright (c) Nicolas Gallagher
 * Copyright (c) Jonathan Neal
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
 * Copyright (c) Adam Wathan
 * Copyright (c) Jonathan Reinink
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { globalStyle } from '@vanilla-extract/css';

globalStyle(
  `*,
::before,
::after`,
  {
    boxSizing: 'border-box',
    borderWidth: 0,
    borderStyle: 'solid',
    borderColor: 'currentColor',
  }
);

globalStyle(`html`, {
  lineHeight: 1.5,
  WebkitTextSizeAdjust: '100%',
  MozTabSize: 4,
  tabSize: 4,
  fontFamily: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
});

globalStyle(`body`, {
  margin: 0,
  lineHeight: 'inherit',
});

globalStyle(`hr`, {
  height: 0,
  color: 'inherit',
  borderTopWidth: '1px',
});

globalStyle(`abbr[title]`, {
  textDecoration: 'underline dotted',
});

globalStyle(
  `h1,
h2,
h3,
h4,
h5,
h6`,
  {
    fontSize: 'inherit',
    fontWeight: 'inherit',
  }
);

globalStyle(`a`, {
  color: 'inherit',
  textDecoration: 'inherit',
});

globalStyle(
  `b,
strong`,
  {
    fontWeight: 'bolder',
  }
);

globalStyle(
  `code,
kbd,
samp,
pre`,
  {
    fontFamily: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    fontSize: '1em',
  }
);

globalStyle(`small`, {
  fontSize: '80%',
});

globalStyle(
  `sub,
sup`,
  {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  }
);

globalStyle(`sub`, {
  bottom: '-0.25em',
});

globalStyle(`sup`, {
  top: '-0.5em',
});

globalStyle(`table`, {
  textIndent: 0,
  borderColor: 'inherit',
  borderCollapse: 'collapse',
});

globalStyle(
  `button,
input,
optgroup,
select,
textarea`,
  {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: 'inherit',
    color: 'inherit',
    margin: 0,
    padding: 0,
  }
);

globalStyle(
  `button,
select`,
  {
    textTransform: 'none',
  }
);

globalStyle(
  `button,
[type='button'],
[type='reset'],
[type='submit']`,
  {
    WebkitAppearance: 'button',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
  }
);

globalStyle(`:-moz-focusring`, {
  outline: 'auto',
});

globalStyle(`:-moz-ui-invalid`, {
  boxShadow: 'none',
});

globalStyle(`progress`, {
  verticalAlign: 'baseline',
});

globalStyle(
  `::-webkit-inner-spin-button,
::-webkit-outer-spin-button`,
  {
    height: 'auto',
  }
);

globalStyle(`[type='search']`, {
  WebkitAppearance: 'textfield',
  outlineOffset: '-2px',
});

globalStyle(`::-webkit-search-decoration`, {
  WebkitAppearance: 'none',
});

globalStyle(`::-webkit-file-upload-button`, {
  WebkitAppearance: 'button',
  font: 'inherit',
});

globalStyle(`summary`, {
  display: 'list-item',
});

globalStyle(
  `blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre`,
  {
    margin: 0,
  }
);

globalStyle(`fieldset`, {
  margin: 0,
  padding: 0,
});

globalStyle(`legend`, {
  padding: 0,
});

globalStyle(
  `ol,
ul,
menu`,
  {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  }
);

globalStyle(`textarea`, {
  resize: 'vertical',
});

globalStyle(
  `input::placeholder,
textarea::placeholder`,
  {
    opacity: 1,
    color: `'colors.gray.400', #9ca3af`,
  }
);

globalStyle(
  `button,
[role="button"]`,
  {
    cursor: 'pointer',
  }
);

globalStyle(`:disabled`, {
  cursor: 'default',
});

globalStyle(
  `img,
svg,
video,
canvas,
audio,
iframe,
embed,
object`,
  {
    display: 'block',
    verticalAlign: 'middle',
  }
);

globalStyle(
  `img,
video`,
  {
    maxWidth: '100%',
    height: 'auto',
  }
);

globalStyle(`[hidden]`, {
  display: 'none',
});
