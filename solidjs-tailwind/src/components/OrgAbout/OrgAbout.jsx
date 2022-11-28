const OrgAbout = (props) => {
  return (
    <div class="flex items-center my-2">
      <img
        src={props.avatarUrl}
        height="30"
        width="30"
        alt="Org Avatar"
        class="border rounded"
        data-testid="org about avatar"
      />
      <span
        class="text-xl font-bold text-gray-700 ml-2"
        data-testid="org about name"
      >
        {props.name}
      </span>
    </div>
  );
};

export default OrgAbout;
