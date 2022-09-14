export default function BlogDetails(props) {
  const details = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      description: "Welcome to learning React",
    },
    {
      title: "React",
      author: "Schewzdenier",
      description: "You can install react from npm",
    },
  ];

  return (
    <div className="border-0 px-1 ">
      <h2>Blog Details</h2>
      {details.map((details) => (
        <div>
          <h3>Title: {details.title}</h3>
          <h5 className="small">{details.author}</h5>
          <p>{details.description}</p>
        </div>
      ))}
    </div>
  );
}
