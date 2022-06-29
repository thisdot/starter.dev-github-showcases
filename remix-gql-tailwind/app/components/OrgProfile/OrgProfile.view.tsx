interface OrgProfileViewProps {
  avatarUrl?: string | null;
  name?: string | null;
}

function OrgProfileView({ avatarUrl, name }: OrgProfileViewProps) {
  return (
    <div className="my-2 flex items-center">
      {avatarUrl && (
        <img
          src={avatarUrl}
          width={28}
          height={28}
          alt="Org Avatar"
          className="rounded border"
        />
      )}
      <span className="ml-2 text-xl font-semibold text-gray-700">{name}</span>
    </div>
  );
}

export default OrgProfileView;
