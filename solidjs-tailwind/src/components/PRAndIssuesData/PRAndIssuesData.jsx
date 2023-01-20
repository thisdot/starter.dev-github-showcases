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
        <div class="text-center p-3 flex flex-col items-center justify-center">
          <span class="font-bold mb-4">No results matched your search.</span>
          <a class=" text-blue-600 underline" href={location.pathname}>
            Refresh
          </a>
        </div>
      )}
    </div>
  );
}
