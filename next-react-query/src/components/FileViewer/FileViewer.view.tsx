import { Blob } from '@lib/github';

interface FileViewerViewProps {
  file: Blob;
}

function FileViewerView({ file }: FileViewerViewProps) {
  return (
    <div className="overflow-hidden p-8 rounded border border-gray-200">
      <pre className="font-mono text-xs leading-tight break-all">
        {file.text}
      </pre>
    </div>
  );
}

export default FileViewerView;
