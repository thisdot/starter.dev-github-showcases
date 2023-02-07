export const LoadingPulseDot = (() => {
  return (
    <div class="flex space-x-1">
      <div style={{ "animation-delay": '0.1s' }} class="bg-gray-600 w-2 h-2 rounded-full animate-bounce" />
      <div style={{ "animation-delay": '0.2s' }} class="bg-gray-600 w-2 h-2 rounded-full animate-bounce" />
      <div style={{ "animation-delay": '0.3s' }} class="bg-gray-600 w-2 h-2 rounded-full animate-bounce" />
    </div>
  );
});
