/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export const Markdown = qwikify$(({ data }: any) => (
  <ReactMarkdown rehypePlugins={[rehypeRaw, remarkGfm]}>{data}</ReactMarkdown>
));
