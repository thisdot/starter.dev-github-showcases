import Image from 'next/image';

interface OrgProfileViewProps {
  avatarUrl?: string | null;
  name?: string | null;
}

function OrgProfileView({ avatarUrl, name }: OrgProfileViewProps) {
  return (
    <div className="flex items-center my-2">
      {avatarUrl && (
        <Image
          src={avatarUrl}
          width={28}
          height={28}
          alt="Org Avatar"
          className="border rounded"
          data-testid="org about avatar"
        />
      )}
      <span
        className="text-xl font-semibold text-gray-700 ml-2"
        data-testid="org about name"
      >
        {name}
      </span>
    </div>
  );
}

export default OrgProfileView;
