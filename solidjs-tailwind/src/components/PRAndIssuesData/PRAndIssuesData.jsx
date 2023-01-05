import { For } from "solid-js";
import { PRAndIssuesListItem } from "../PRAndIssuesListItem";


export const PRAndIssuesData = (props) => {
  return (
    <>
      {props.pulls.length > 0 ? (
        <div>
          <For each={props.pulls}>
            {(pulls) => <PRAndIssuesListItem {...pulls()}  />}
          </For>
        </div>
      ) : (
        <div>No pull requests found</div>
      )}
    </>
  );
}