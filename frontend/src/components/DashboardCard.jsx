import React from "react";

function DashboardCard({
  title,
  value,
  icon,
  color,
  subtitle,
}) {
  return (
    <div
      className={`${color} rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="flex justify-between items-center">

        <div>
          <p className="text-white/80 text-sm">
            {title}
          </p>

          <h2 className="text-5xl font-bold mt-3">
            {value}
          </h2>

          <p className="mt-5 text-white/80 text-sm">
            {subtitle}
          </p>
        </div>

        <div className="text-5xl opacity-90">
          {icon}
        </div>

      </div>
    </div>
  );
}

export default DashboardCard;