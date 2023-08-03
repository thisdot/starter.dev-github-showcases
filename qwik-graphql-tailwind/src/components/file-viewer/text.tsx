import { component$ } from '@builder.io/qwik';

export default component$(({ text }: { text: string }) => {
  const lines = text.split('\n');

  return (
    <pre data-testid="text-block" class="text-left text-xs py-1 px-8 overflow-auto bg-white border-spacing-2">
      {lines.map((line, i) => (
        <div key={i} class="table-row">
          <span class="table-cell text-right pr-4 select-none text-gray-500">{i + 1}</span>
          <span class="table-cell">{line}</span>
        </div>
      ))}
    </pre>
  );
});
