import React, { useState } from 'react'

const GetGithub = () => {

  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");



  const fetchGithubData = async () => {
    try {
      setError("");
      setUserData(null);
      setRepos([]);

      // Fetch user profile
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!userResponse.ok) throw new Error("User not found");
      const user = await userResponse.json();
      setUserData(user);

      // Fetch repositories
      const repoResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!repoResponse.ok) throw new Error("User repos not found");
      const repoData = await repoResponse.json();
      setRepos(repoData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>

      <div className="min-h-screen flex flex-col items-center bg-base-200 py-10">
        <h1 className="text-3xl font-bold mb-6 text-primary">GitHub Profile Finder</h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input input-bordered w-64"
          />
          <button className="btn btn-primary" onClick={fetchGithubData}>
            Search
          </button>
        </div>

        {error && <p className="text-error">{error}</p>}

        {userData && (
          <div className="card w-96 bg-base-100 shadow-xl mb-10">
            <figure>
              <img src={userData.avatar_url} alt="Avatar" className="w-32 rounded-full mt-5" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{userData.name || "No Name Available"}</h2>
              <p>{userData.bio || "No bio available"}</p>
              <div className="flex justify-between w-full mt-3">
                <p>Followers: {userData.followers}</p>
                <p>Following: {userData.following}</p>
              </div>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-primary mt-4"
              >
                View on GitHub
              </a>
            </div>
          </div>
        )}

        {repos.length > 0 && (
          <div className="w-[90%] max-w-4xl">
            <h2 className="text-2xl font-bold mb-4 text-secondary">Public Repositories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repos.map((repo) => (
                <div key={repo.id} className="card bg-base-100 shadow-md p-4">
                  <h3 className="font-semibold text-lg">{repo.name}</h3>
                  <p className="text-sm mb-2">{repo.description || "No description"}</p>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="link link-primary"
                  >
                    View Repo
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>


    </>
  )
}

export default GetGithub
