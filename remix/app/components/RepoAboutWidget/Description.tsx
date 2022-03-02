interface DescriptionProps {
  text?: string | null;
}

function Description({ text }: DescriptionProps) {
  return text ? (
    <span>{text}</span>
  ) : (
    <span className="italic">No description, website, or topics provided.</span>
  );
}

export default Description;
