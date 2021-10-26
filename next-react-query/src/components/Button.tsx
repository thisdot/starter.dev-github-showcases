interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      className="bg-warm-gray-50 rounded-md p-2 inline-flex items-center justify-center text-warm-gray-400 hover:bg-warm-gray-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-teal-500"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
