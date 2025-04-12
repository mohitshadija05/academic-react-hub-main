
import { Users, BookOpen, Award, Globe } from "lucide-react";

const statistics = [
  {
    id: 1,
    icon: Users,
    count: "50,000+",
    label: "Students",
    color: "text-blue-500",
  },
  {
    id: 2,
    icon: BookOpen,
    count: "500+",
    label: "Courses",
    color: "text-green-500",
  },
  {
    id: 3,
    icon: Award,
    count: "200+",
    label: "Expert Instructors",
    color: "text-purple-500",
  },
  {
    id: 4,
    icon: Globe,
    count: "40+",
    label: "Countries",
    color: "text-red-500",
  },
];

const StatisticsSection = () => {
  return (
    <section className="py-12 bg-primary-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <div
              key={stat.id}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center text-white"
            >
              <div className="flex justify-center mb-4">
                <div className={`p-3 rounded-full ${stat.color} bg-white/20`}>
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.count}</h3>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
