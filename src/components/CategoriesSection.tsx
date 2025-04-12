
import { Code, PieChart, BookOpen, PenTool, Globe, Building, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Computer Science",
    icon: Code,
    courses: 120,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "Data Science",
    icon: PieChart,
    courses: 85,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 3,
    name: "Literature",
    icon: BookOpen,
    courses: 65,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 4,
    name: "Design",
    icon: PenTool,
    courses: 95,
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 5,
    name: "Languages",
    icon: Globe,
    courses: 110,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 6,
    name: "Business",
    icon: Building,
    courses: 75,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 7,
    name: "Psychology",
    icon: Brain,
    courses: 55,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 8,
    name: "Education",
    icon: Users,
    courses: 60,
    color: "bg-teal-100 text-teal-700",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Explore Categories</h2>
          <p className="mt-2 text-lg text-gray-600">
            Browse through our diverse range of educational categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-lg p-6 transition-all duration-300 hover:shadow-md bg-white border border-gray-100 hover:border-gray-200 group"
            >
              <div className={`p-4 rounded-full inline-block ${category.color} mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{category.courses} courses</p>
              <Button variant="link" className="p-0 text-primary-blue">
                Explore Category →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
