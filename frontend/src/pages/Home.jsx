import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

import Hero from "../sections/Hero";
import WeeklyTimetable from "../sections/WeeklyTimetable";
import AssignmentPanel from "../sections/AssignmentPanel";
import AttendanceChart from "../sections/AttendanceChart";
import CalendarWidget from "../sections/CalendarWidget";
import RecentNotes from "../sections/RecentNotes";
import AIAssistant from "../sections/AIAssistant";

import {
  FaChartPie,
  FaBook,
  FaStickyNote,
  FaClipboardCheck,
} from "react-icons/fa";

function Home() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">

        {/* Navbar */}
        <Navbar />

        {/* Hero Banner */}
        <section className="mt-8">
          <Hero />
        </section>

        {/* Statistics Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

          <DashboardCard
            title="Attendance"
            value="92%"
            subtitle="Excellent Performance"
            icon={<FaChartPie />}
            color="bg-gradient-to-r from-blue-600 to-cyan-500"
          />

          <DashboardCard
            title="Subjects"
            value="6"
            subtitle="Current Semester"
            icon={<FaBook />}
            color="bg-gradient-to-r from-purple-600 to-pink-500"
          />

          <DashboardCard
            title="Notes"
            value="24"
            subtitle="Saved Notes"
            icon={<FaStickyNote />}
            color="bg-gradient-to-r from-green-600 to-emerald-500"
          />

          <DashboardCard
            title="Assignments"
            value="5"
            subtitle="Pending Tasks"
            icon={<FaClipboardCheck />}
            color="bg-gradient-to-r from-orange-500 to-red-500"
          />

        </section>

        {/* Timetable & Assignments */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

          <WeeklyTimetable />

          <AssignmentPanel />

        </section>

        {/* Attendance & Calendar */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8">

          <AttendanceChart />

          <CalendarWidget />

        </section>

        {/* AI Assistant & Recent Notes */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 mt-8 mb-8">

          <AIAssistant />

          <RecentNotes />

        </section>

      </main>

    </div>
  );
}

export default Home;