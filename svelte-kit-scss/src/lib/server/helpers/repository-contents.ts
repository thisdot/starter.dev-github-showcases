import type { FileContents, GithubFileContentsItem } from '$lib/interfaces';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

export const MARKDOWN_ALLOWED_ENCODING: BufferEncoding[] = [
  'ascii',
  'utf8',
  'utf-8',
  'utf16le',
  'ucs2',
  'ucs-2',
  'base64',
  'base64url',
  'latin1',
  'binary',
  'hex',
];

/** **Use only on server side!** */
export const decodeFileContent = (file: GithubFileContentsItem): string => {
  const { content, encoding } = file;
  const bufferEncoding = MARKDOWN_ALLOWED_ENCODING.find((x) => x === encoding);
  if (!bufferEncoding) {
    console.warn(`[Unable to decode] Unsupported encoding: ${bufferEncoding}`);
    return content;
  }
  const decoded = Buffer.from(content, bufferEncoding).toString('utf8');
  return decoded;
};

/** **Use only on server side!** */
export const buildMarkdownPreviewHtml = (file: GithubFileContentsItem): string => {
  const md = new MarkdownIt();
  const decodedContent = decodeFileContent(file);
  return sanitizeHtml(md.render(decodedContent), {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'details',
      'summary',
      'a',
      'code',
    ]),
    allowedAttributes: {
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
      a: ['href'],
    },
  });
};

export const remapFileContents = (
  responseData?: GithubFileContentsItem
): FileContents | undefined => {
  return responseData
    ? {
        content: decodeFileContent(responseData),
        name: responseData.name,
        size: responseData.size,
        type: responseData.type,
      }
    : undefined;
};
