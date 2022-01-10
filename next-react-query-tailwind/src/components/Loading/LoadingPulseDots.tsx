function LoadingPulseDots() {
  return (
    <div className="flex space-x-1">
      <div
        style={{ animationDelay: '0.1s' }}
        className="bg-gray-600 w-2 h-2 rounded-full animate-bounce"
      ></div>
      <div
        style={{ animationDelay: '0.2s' }}
        className="bg-gray-600 w-2 h-2 rounded-full animate-bounce"
      ></div>
      <div
        style={{ animationDelay: '0.3s' }}
        className="bg-gray-600 w-2 h-2 rounded-full animate-bounce"
      ></div>
    </div>
  );
}

export default LoadingPulseDots;
