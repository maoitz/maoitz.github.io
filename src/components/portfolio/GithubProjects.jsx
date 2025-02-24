import { useEffect, useState } from "react";

const GithubProjects = ({ username, filterRepos }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await response.json();

        // If filterRepos is provided, filter the repos
        const filtered = filterRepos
          ? data.filter(repo => filterRepos.includes(repo.name))
          : data;
        setRepos(filtered);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, [username, filterRepos]);

  return (
    <div class name="github-projects">

      {loading ? (
        <div className="loader"></div> // This is a loading spinner
      ) : (
        <div className="projects-grid">
          {repos.map((repo) => (
            <div key={repo.id} className="project-card">
              <h3 className="project-card-title">{repo.name}</h3>
              <p className="project-card-description">{repo.description || "No description available."}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card-link"
              >
                View on Github
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GithubProjects;
