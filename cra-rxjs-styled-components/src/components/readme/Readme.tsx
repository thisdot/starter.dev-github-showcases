import { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

export const Readme = ({ username, repository, branch }: { username: string, repository: string, branch: string }) => {
  const [readme, setReadme] = useState('');

  useEffect(() => {
    if (branch) {
      fetch(`https://raw.githubusercontent.com/${username}/${repository}/${branch}/README.md`)
        .then(res => res.text())
        .then(data => setReadme(data))
    }
  }, [branch])

  return (
    <Markdown children={readme} />
  )
}
