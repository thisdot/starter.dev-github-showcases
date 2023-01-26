import { useNavigate } from '@solidjs/router';
import { For } from 'solid-js';
function OrgList(props) {
  const navigate = useNavigate();
  return (
    <div class="mt-5 border-t border-gray-200">
      <h2 class="my-2 pt-2 text-gray-800 font-bold">Organizations</h2>
      <div data-testid="profile page orgs" class="flex flex-wrap space-x-2">
        <For each={props.organizations}>
          {(props) => (
            <a
              onClick={() => navigate(`/orgs/${props.login}`)}
              class="cursor-pointer"
            >
              <div class="relative w-9 h-9 rounded border border-gray-300 overflow-hidden">
                <img src={props.avatarUrl} alt="Organization" />
              </div>
            </a>
          )}
        </For>
      </div>
    </div>
  );
}

export default OrgList;
