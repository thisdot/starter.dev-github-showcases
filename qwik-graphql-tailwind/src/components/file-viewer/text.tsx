import { component$ } from '@builder.io/qwik';

export default component$(({ text }: { text: string }) => {
  const lines = text.split('\n');

  return (
    <pre data-testid="text-block" className="text-left text-xs py-1 px-8 overflow-auto bg-white border-spacing-2">
      {lines.map((line, i) => (
        <div key={i} className="table-row">
          <span className="table-cell text-right pr-4 select-none text-gray-500">{i + 1}</span>
          <span className="table-cell">{line}</span>
        </div>
      ))}
    </pre>
  );
});
