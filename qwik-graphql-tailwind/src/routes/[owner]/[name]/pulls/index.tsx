import { component$ } from '@builder.io/qwik';
import RepoPulls from '~/components/repo-pulls';

export default component$(() => {
  return (
    <div className="md:py-12 max-w-screen-xl mx-auto">
      <RepoPulls activeTab="open" />
    </div>
  );
});
