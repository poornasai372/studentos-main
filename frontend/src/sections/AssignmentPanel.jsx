function AssignmentPanel() {
  const assignments = [
    {
      title: "AI Lab Record",
      due: "Tomorrow",
    },
    {
      title: "DBMS Assignment",
      due: "Friday",
    },
    {
      title: "CN PPT",
      due: "Monday",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        📂 Upcoming Deadlines
      </h2>

      <div className="space-y-4">

        {assignments.map((item) => (

          <div
            key={item.title}
            className="flex justify-between bg-gray-100 rounded-xl p-4"
          >

            <span>{item.title}</span>

            <span className="text-red-600 font-semibold">
              {item.due}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AssignmentPanel;