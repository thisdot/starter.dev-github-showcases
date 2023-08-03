import { component$ } from '@builder.io/qwik';

export const LoadingPulseDot = component$(() => {
  return (
    <div class="flex space-x-1">
      <div style={{ animationDelay: '0.1s' }} class="bg-gray-600 w-2 h-2 rounded-full animate-bounce"></div>
      <div style={{ animationDelay: '0.2s' }} class="bg-gray-600 w-2 h-2 rounded-full animate-bounce"></div>
      <div style={{ animationDelay: '0.3s' }} class="bg-gray-600 w-2 h-2 rounded-full animate-bounce"></div>
    </div>
  );
});
