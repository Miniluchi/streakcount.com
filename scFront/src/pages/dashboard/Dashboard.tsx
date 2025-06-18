// src/pages/dashboard/Dashboard.tsx
import { Eye, Users, UserPlus, Bookmark } from "lucide-react";

const Dashboard = () => {
  // Remplace ces valeurs par les vraies données plus tard
  const stats = [
    {
      icon: <Eye size={20} />,
      label: "Jours avant règles",
      value: "8",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <Users size={20} />,
      label: "Relations intimes",
      value: "5",
      color: "bg-cyan-100 text-cyan-700",
    },
    {
      icon: <UserPlus size={20} />,
      label: "Nouveaux lovers",
      value: "2",
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      icon: <Bookmark size={20} />,
      label: "Moments sauvegardés",
      value: "12",
      color: "bg-rose-100 text-rose-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex items-center bg-white rounded-xl shadow-md p-4"
        >
          <div className={`p-3 rounded-full ${stat.color} mr-4`}>
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-gray-600">{stat.label}</p>
            <p className="text-xl font-semibold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
