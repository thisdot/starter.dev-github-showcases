interface DescriptionProps {
  text?: string | null;
}

function Description({ text }: DescriptionProps) {
  return text ? (
    <span data-testid="repo file explorer description">{text}</span>
  ) : (
    <span className="italic" data-testid="repo file explorer description">
      No description, website, or topics provided.
    </span>
  );
}

export default Description;
