import { component$ } from '@builder.io/qwik';

// Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.
export const Empty = component$(() => {
  return (
    <div
      className="bg-sky-100 p-4 rounded-md border border-sky-200 flex items-center justify-between my-4"
      data-testid="readme empty"
    >
      <div className="text-gray-800 text-sm">
        Help people interested in this repository understand your project by adding a README.
      </div>
      <button className="bg-green-600 hover:bg-green-700 inline-flex text-white font-semibold rounded-lg border border-gray-200 py-1.5 px-4 text-xs">
        Add a README
      </button>
    </div>
  );
});
