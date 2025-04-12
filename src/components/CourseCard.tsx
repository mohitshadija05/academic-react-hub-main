
import { Calendar, User, BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  thumbnail: string;
  category: string;
  rating: number;
  students: number;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  description,
  thumbnail,
  category,
  rating,
  students,
  duration,
  level,
}) => {
  const levelColorMap = {
    Beginner: "bg-green-100 text-green-800",
    Intermediate: "bg-blue-100 text-blue-800",
    Advanced: "bg-purple-100 text-purple-800",
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-3 right-3 bg-secondary-teal">{category}</Badge>
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs px-2 py-1 rounded-full ${levelColorMap[level]}`}>
            {level}
          </span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-accent-amber fill-current" />
            <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <User className="h-4 w-4 mr-1" />
          <span>{instructor}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{students.toLocaleString()} students</span>
          </div>
        </div>
        
        <Button variant="default" className="w-full bg-primary-blue hover:bg-blue-700">
          View Course
        </Button>
      </div>
    </div>
  );
};

export default CourseCard;
