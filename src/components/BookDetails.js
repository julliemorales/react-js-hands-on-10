export default function BookDetails(props) {
  const details = [
    {
      title: "React Learning",
      page: "670",
    },
    {
      title: "Deep Dive Vuex",
      page: "800",
    },
    {
      title: "Mongo Essentials",
      page: "450",
    },
  ];

  return (
    <div>
      <h2>Book Details</h2>
      {details.map((details) => (
        <div>
          <h3>Title: {details.title}</h3>
          <p className="text-muted">{details.page}</p>
        </div>
      ))}
    </div>
  );
}
