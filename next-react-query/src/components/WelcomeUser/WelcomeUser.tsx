interface WelcomeUserProps {
  name: string;
}

function WelcomeUser({ name }: WelcomeUserProps) {
  return (
    <h1 className="my-12 text-center text-2xl font-bold">Welcome, {name}!</h1>
  );
}

export default WelcomeUser;
