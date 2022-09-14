export default function CourseDetails(props) {
  const details = [
    {
      title: "Vue",
      date: "4/5/2022",
    },
    {
      title: "React",
      date: "6/3/2022",
    },
  ];

  return (
    <div className="border-0 px-1 ">
      <h2>Course Details</h2>
      {details.map((details) => (
        <div>
          <h3>Title: {details.title}</h3>
          <p className="text-muted">{details.date}</p>
        </div>
      ))}
    </div>
  );
}
