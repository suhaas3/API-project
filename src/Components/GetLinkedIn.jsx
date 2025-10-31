function GetLinkedIn() {
  const linkedInData = {
    name: "Jatangi Suhaas",
    title: "Frontend Developer | React Enthusiast",
    bio: "I love building clean and responsive UIs using React, Tailwind CSS, and Node.js.",
    profileUrl: "https://www.linkedin.com/in/suhaas3w/",
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-6 text-center">
      <h2 className="text-2xl font-bold text-primary">{linkedInData.name}</h2>
      <p className="text-lg text-secondary mb-2">{linkedInData.title}</p>
      <p className="mb-4">{linkedInData.bio}</p>
      <a
        href={linkedInData.profileUrl}
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary"
      >
        Visit LinkedIn
      </a>
    </div>
  );
}

export default GetLinkedIn;
