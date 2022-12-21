import { component$ } from '@builder.io/qwik';

export interface GistListProps {
  id: any;
  name: string;
  url: string;
}

export default component$(({ name, url }: GistListProps) => {
  return (
    <li>
      <a
        href={url}
        className="text-sm hover:text-blue-500 hover:underline"
        target="_blank"
        data-testid={`user gist list item ${name}`}
      >
        {name}
      </a>
    </li>
  );
});
