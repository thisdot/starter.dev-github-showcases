export const Description = (props) => {
  return (
    <>
      {props.text ? (
        <span data-testid="repo file explorer description">{props.text}</span>
      ) : (
        <span class="italic" data-testid="repo file explorer description">
          No description, website, or topics provided.
        </span>
      )}
    </>
  );
};
