import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useState } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">
            ⚙️ Settings
          </h1>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Profile */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-5">
                👤 Profile
              </h2>

              <input
                className="w-full border rounded-xl p-3 mb-4"
                placeholder="Full Name"
                defaultValue="Poorna Sai"
              />

              <input
                className="w-full border rounded-xl p-3 mb-4"
                placeholder="Email"
              />

              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700">
                Save Changes
              </button>

            </div>

            {/* Appearance */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-5">
                🎨 Appearance
              </h2>

              <div className="flex justify-between items-center">

                <span>Dark Mode</span>

                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />

              </div>

            </div>

            {/* Notifications */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-5">
                🔔 Notifications
              </h2>

              <div className="space-y-4">

                <label className="flex justify-between">
                  Assignment Alerts
                  <input type="checkbox" defaultChecked />
                </label>

                <label className="flex justify-between">
                  Attendance Alerts
                  <input type="checkbox" defaultChecked />
                </label>

                <label className="flex justify-between">
                  Exam Alerts
                  <input type="checkbox" defaultChecked />
                </label>

              </div>

            </div>

            {/* AI */}

            <div className="bg-white rounded-2xl shadow-lg p-6">

              <h2 className="text-2xl font-bold mb-5">
                🤖 AI Assistant
              </h2>

              <select className="w-full border rounded-xl p-3">

                <option>Short Responses</option>

                <option>Medium Responses</option>

                <option>Detailed Responses</option>

              </select>

            </div>

            {/* About */}

            <div className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-2">

              <h2 className="text-2xl font-bold mb-5">
                ℹ About StudentOS
              </h2>

              <p><strong>Version:</strong> 1.0</p>

              <p><strong>Developer:</strong> Poorna Sai</p>

              <p className="mt-2">
                AI Powered Student Management System
              </p>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Settings;