import { component$ } from '@builder.io/qwik';
import { OrganizationNodes } from '../../utils/types';

export interface OrgListProps {
  organizations: OrganizationNodes[];
}

export const OrgList = component$(({ organizations }: OrgListProps) => {
  return (
    <div class="mt-5 border-t border-gray-200">
      <h2 class="my-2 pt-2 text-gray-800 font-bold">Organizations</h2>
      <div class="flex flex-wrap space-x-2">
        {organizations.map(({ avatarUrl, login }) => (
          <div key={login} class="relative w-9 h-9 rounded border border-gray-300 overflow-hidden">
            <img src={avatarUrl} alt="Organization" style={{ objectFit: 'fill' }} />
          </div>
        ))}
      </div>
    </div>
  );
});
