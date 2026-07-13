import { Link } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaBook,
  FaClipboardList,
  FaChartPie,
  FaRobot,
  FaCog,
  FaUserGraduate,
  FaFilePdf,
} from "react-icons/fa";

const menu = [
  {
    icon: <FaHome />,
    text: "Dashboard",
    path: "/home",
  },
  {
    icon: <FaCalendarAlt />,
    text: "Timetable",
    path: "/timetable",
  },
  {
    icon: <FaBook />,
    text: "Notes",
    path: "/notes",
  },
  {
    icon: <FaClipboardList />,
    text: "Assignments",
    path: "/assignments",
  },
  {
    icon: <FaChartPie />,
    text: "Attendance",
    path: "/attendance",
  },
  {
    icon: <FaRobot />,
    text: "AI Assistant",
    path: "/ai",
  },
  {
    icon: <FaFilePdf />,
    text: "PDF Study",
    path: "/pdf-study",
  },
  {
    icon: <FaCog />,
    text: "Settings",
    path: "/settings",
  },
];

function Sidebar() {
  return (
    <div className="w-72 bg-slate-900 text-white flex flex-col justify-between min-h-screen p-6">
      <div>
        <h1 className="text-4xl font-bold mb-10 text-blue-400">
          StudentOS
        </h1>

        <div className="space-y-3">
          {menu.map((item) => (
            <Link key={item.text} to={item.path}>
              <div className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-blue-600 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <span className="text-xl">{item.icon}</span>
                <span className="text-lg font-medium">{item.text}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-slate-800 rounded-2xl p-4 flex items-center gap-3">
        <FaUserGraduate size={35} />

        <div>
          <h3 className="font-bold">Poorna Sai</h3>
          <p className="text-sm text-gray-300">
            AIML Student
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;