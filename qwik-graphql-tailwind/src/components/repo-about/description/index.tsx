import { component$ } from '@builder.io/qwik';

interface DescriptionProps {
  text?: string | null;
}

export const Description = component$(({ text }: DescriptionProps) => {
  return text ? (
    <span data-testid="repo file explorer description">{text}</span>
  ) : (
    <span class="italic" data-testid="repo file explorer description">
      No description, website, or topics provided.
    </span>
  );
});
