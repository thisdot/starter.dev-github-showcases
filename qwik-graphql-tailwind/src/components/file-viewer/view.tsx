import { component$ } from '@builder.io/qwik';
import type { Language } from 'prism-react-renderer';
import { FileCode } from '~/integrations/react/file-code';
import FileText from './text';

interface FileViewerViewProps {
  text: string;
  byteSize: number;
  lines: number;
  language?: Language;
}

export const FileViewerView = component$(({ text, byteSize, lines, language }: FileViewerViewProps) => {
  return (
    <div class="border border-gray-300 rounded-lg overflow-hidden">
      <div class="px-4 py-3 bg-gray-100 border-b border-gray-300 font-mono text-xs text-gray-800">
        <span data-testid="file viewer line count" class="px-2">
          {lines} lines
        </span>
        <span data-testid="file viewer byte size" class="px-2 border-l border-gray-300">
          {byteSize} Bytes
        </span>
      </div>
      {language ? <FileCode text={text} language={language} /> : <FileText text={text} />}
    </div>
  );
});
