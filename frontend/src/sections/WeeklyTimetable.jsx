function WeeklyTimetable() {
  const schedule = [
    {
      day: "Monday",
      subject: "Artificial Intelligence",
      time: "09:00 - 10:00",
    },
    {
      day: "Tuesday",
      subject: "Database Management",
      time: "11:00 - 12:00",
    },
    {
      day: "Wednesday",
      subject: "Computer Networks",
      time: "10:00 - 11:00",
    },
    {
      day: "Thursday",
      subject: "Operating Systems",
      time: "01:00 - 02:00",
    },
    {
      day: "Friday",
      subject: "Python Lab",
      time: "02:00 - 04:00",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">
        📅 Weekly Timetable
      </h2>

      <div className="space-y-4">
        {schedule.map((item) => (
          <div
            key={item.day}
            className="flex justify-between items-center border-b pb-3"
          >
            <div>
              <h3 className="font-semibold">{item.day}</h3>
              <p className="text-gray-500 text-sm">
                {item.subject}
              </p>
            </div>

            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyTimetable;