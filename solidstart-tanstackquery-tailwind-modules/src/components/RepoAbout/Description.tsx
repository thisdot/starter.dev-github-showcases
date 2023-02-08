import { Match, Switch } from 'solid-js';

interface DescriptionProps {
  text: string;
}

export const Description = (props: DescriptionProps) => {
  return (
    <Switch>
      <Match when={props.text}>
        <span data-testid="repo file explorer description">{props.text}</span>
      </Match>
      <Match when={!props.text}>
        <span class="italic" data-testid="repo file explorer description">
          No description, website, or topics provided.
        </span>
      </Match>
    </Switch>
  );
};
