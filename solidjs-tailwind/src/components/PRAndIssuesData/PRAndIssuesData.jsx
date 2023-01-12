import { For } from "solid-js";
import { PRAndIssuesListItem } from "../PRAndIssuesListItem";
import { PRAndIssuesHeader } from "../PRAndIssuesHeader";

export const PRAndIssuesData = (props) => {
  return (
    <div class="border border-gray-300 rounded-lg">
      {props.data.length > 0 ? (
        <div>
          <PRAndIssuesHeader {...props}/>
          <For each={props.data}>
            {(data) => <PRAndIssuesListItem {...data()} />}
          </For>
        </div>
      ) : (
        <div>No pull requests found</div>
      )}
    </div>
  );
}
