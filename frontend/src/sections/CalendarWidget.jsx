import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarWidget() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-5">
        📅 Calendar
      </h2>

      <Calendar />

    </div>
  );
}

export default CalendarWidget;