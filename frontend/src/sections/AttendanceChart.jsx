import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Present", value: 92 },
  { name: "Absent", value: 8 },
];

const COLORS = ["#2563eb", "#e5e7eb"];

function AttendanceChart() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 h-[320px]">

      <h2 className="text-2xl font-bold mb-5">
        📊 Attendance
      </h2>

      <ResponsiveContainer width="100%" height="80%">

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
          >

            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default AttendanceChart;