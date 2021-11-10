interface FileTextProps {
  text: string;
}

function FileText({ text }: FileTextProps) {
  const lines = text.split('\n');
  return (
    <pre
      className="text-left py-1 px-8 text-xs overflow-auto"
      style={{ borderSpacing: 5 }}
    >
      {lines.map((line, i) => (
        <div key={i} className="table-row">
          <span className="table-cell text-right pr-4 select-none text-gray-500">
            {i + 1}
          </span>
          <span className="table-cell">{line}</span>
        </div>
      ))}
    </pre>
  );
}

export default FileText;
