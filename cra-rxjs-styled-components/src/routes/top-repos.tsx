import { useTopRepos } from '../hooks/top-repositories/use-top-repos';

export default function TopRepos() {
  const repositories = useTopRepos();

  return (
    <>
      <h2>Top Repositories</h2>
      <section className="top-repositories-container">
        {repositories.map((r, index) => (
          <article key={index}>
            <h3>{r.full_name}</h3>
            <p>{r.description}</p>
            <span>{r.language}</span>
            <span>{r.stargazers_count}</span>
            <span>{r.branches_count}</span>
            <span>{r.updated_at}</span>
          </article>
        ))}
      </section>
    </>
  );
}
