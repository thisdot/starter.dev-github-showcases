interface WelcomeUserProps {
  name: string;
}

export function WelcomeUser({ name }: WelcomeUserProps) {
  return <h1>Welcome, {name}!</h1>;
}
