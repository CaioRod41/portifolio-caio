import React, { useEffect, useState } from 'react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
}

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/seu-usuario/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>{repo.description || 'Sem descrição.'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
