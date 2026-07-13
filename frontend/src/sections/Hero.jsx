import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

function Hero() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 rounded-3xl text-white p-8 shadow-xl">

      <div className="flex justify-between items-start">

        <div>

          <h1 className="text-4xl font-bold">
            Good Evening, Poorna 👋
          </h1>

          <p className="mt-3 text-blue-100 text-lg">
            Stay focused and finish today's goals.
          </p>

        </div>

        <div className="text-right">

          <div className="flex items-center gap-2 justify-end">
            <FaCalendarAlt />
            <span>{today}</span>
          </div>

        </div>

      </div>

      <div className="mt-8 bg-white/10 rounded-2xl p-6 backdrop-blur-sm">

        <h2 className="text-xl font-semibold mb-4">
          📚 Next Class
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <p className="text-blue-200 text-sm">Subject</p>
            <h3 className="text-2xl font-bold">
              Database Management System
            </h3>
          </div>

          <div>
            <p className="text-blue-200 text-sm">Time</p>

            <div className="flex items-center gap-2 mt-1">
              <FaClock />
              <span>10:00 AM - 11:00 AM</span>
            </div>
          </div>

          <div>
            <p className="text-blue-200 text-sm">Room</p>

            <div className="flex items-center gap-2 mt-1">
              <FaMapMarkerAlt />
              <span>A204</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Hero;