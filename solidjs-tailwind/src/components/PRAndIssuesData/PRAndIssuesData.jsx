import { For } from "solid-js";
import { PRAndIssuesListItem } from "../PRAndIssuesListItem";
import { PRAndIssuesHeader } from "../PRAndIssuesHeader";

export const PRAndIssuesData = (props) => {
  return (
    <div class="border border-gray-300 rounded-lg">
      {props.pulls.length > 0 ? (
        <div>
          <PRAndIssuesHeader {...props}/>
          <For each={props.pulls}>
            {(pulls) => <PRAndIssuesListItem {...pulls()} />}
          </For>
        </div>
      ) : (
        <div>No pull requests found</div>
      )}
    </div>
  );
}