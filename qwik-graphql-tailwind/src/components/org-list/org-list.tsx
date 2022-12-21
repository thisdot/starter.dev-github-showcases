import { component$ } from '@builder.io/qwik';
import { OrganizationNodes } from '../../utils/types';

export interface OrgListProps {
  organizations: OrganizationNodes[];
}

export const OrgList = component$(({ organizations }: OrgListProps) => {
  return (
    <div className="mt-5 border-t border-gray-200">
      <h2 className="my-2 pt-2 text-gray-800 font-bold">Organizations</h2>
      <div className="flex flex-wrap space-x-2">
        {organizations.map(({ avatarUrl, login }) => (
          <div key={login} className="relative w-9 h-9 rounded border border-gray-300 overflow-hidden">
            <img src={avatarUrl} alt="Organization" style={{ objectFit: 'fill' }} />
          </div>
        ))}
      </div>
    </div>
  );
});
