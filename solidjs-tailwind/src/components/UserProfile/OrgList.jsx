import { For } from 'solid-js';
function OrgList(props) {
  return (
    <div class="mt-5 border-t border-gray-200">
      <h2 class="my-2 pt-2 text-gray-800 font-bold">Organizations</h2>
      <div data-testid="profile page orgs" class="flex flex-wrap space-x-2">
        <For each={props.organizations}>
          {(props) => (
            <div class="relative w-9 h-9 rounded border border-gray-300 overflow-hidden">
              <img src={props.avatarUrl} alt="Organization" />
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default OrgList;
