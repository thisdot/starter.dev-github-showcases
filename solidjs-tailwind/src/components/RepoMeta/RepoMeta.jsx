import { Show, splitProps } from 'solid-js';
import { OcStar2 } from 'solid-icons/oc';
import getFriendlyDate from '../../helper/getFriendlyDate';

const RepoMeta = (props) => {
  const [local] = splitProps(props, [
    'primaryLanguage',
    'stargazerCount',
    'updatedAt',
  ]);

  const friendlyUpdatedAt = () => getFriendlyDate(local.updatedAt);

  return (
    <div class="flex mt-4 text-xs text-gray-600 space-x-4">
      <Show when={local.primaryLanguage}>
        <div class="language flex items-center gap-3">
          <span
            style={{
              'background-color': local.primaryLanguage.color || '#ccc',
            }}
            class="w-3 h-3 rounded-full"
          />
          <span>{local.primaryLanguage.name}</span>
        </div>
      </Show>
      <Show when={local.stargazerCount}>
        <div class="language flex items-baseline gap-3">
          <span class="-translate-x-1 -translate-y-[0.65rem]">
            <OcStar2 size={2} />
          </span>
          <span>{local.stargazerCount}</span>
        </div>
      </Show>
      <span class="text-subtitle">Updated {friendlyUpdatedAt()}</span>
    </div>
  );
};

export default RepoMeta;
