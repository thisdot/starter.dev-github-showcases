interface DescriptionProps {
  text: string;
}

export const Description = (props: DescriptionProps) => {
  return (
    <span
      data-testid="repo file explorer description"
      class={props.text ? 'italic' : undefined}
    >
      {props.text || 'No description, website, or topics provided.'}
    </span>
  );
};
