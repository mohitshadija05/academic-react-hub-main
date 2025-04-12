
import { useState } from "react";
import CourseCard from "./CourseCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featuredCourses = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    instructor: "Dr. Sarah Johnson",
    description: "Learn the fundamentals of computer science, including algorithms, data structures, and programming basics.",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Computer Science",
    rating: 4.8,
    students: 15420,
    duration: "8 weeks",
    level: "Beginner" as const,
  },
  {
    id: "2",
    title: "Advanced Mathematics for Data Science",
    instructor: "Prof. Michael Chen",
    description: "Master the mathematical foundations required for data science and machine learning applications.",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mathematics",
    rating: 4.6,
    students: 8735,
    duration: "10 weeks",
    level: "Advanced" as const,
  },
  {
    id: "3",
    title: "Digital Marketing Essentials",
    instructor: "Emma Rodriguez",
    description: "Learn essential digital marketing strategies including SEO, content marketing, and social media campaigns.",
    thumbnail: "https://images.unsplash.com/photo-1432888622747-4eb9a8f5ca7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Marketing",
    rating: 4.7,
    students: 12650,
    duration: "6 weeks",
    level: "Beginner" as const,
  },
  {
    id: "4",
    title: "Web Development Bootcamp",
    instructor: "David Wilson",
    description: "Comprehensive web development course covering HTML, CSS, JavaScript, React, and Node.js.",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Web Development",
    rating: 4.9,
    students: 20345,
    duration: "12 weeks",
    level: "Intermediate" as const,
  },
  {
    id: "5",
    title: "Business Management and Leadership",
    instructor: "Jessica Smith",
    description: "Develop essential management skills and learn effective leadership strategies for the modern workplace.",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Business",
    rating: 4.5,
    students: 9870,
    duration: "8 weeks",
    level: "Intermediate" as const,
  },
  {
    id: "6",
    title: "Graphic Design Fundamentals",
    instructor: "Alex Turner",
    description: "Learn the principles of design, color theory, typography, and how to use industry-standard design software.",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Design",
    rating: 4.7,
    students: 11235,
    duration: "8 weeks",
    level: "Beginner" as const,
  },
];

const FeaturedCourses = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const coursesPerPage = 3;
  const totalPages = Math.ceil(featuredCourses.length / coursesPerPage);
  
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const visibleCourses = featuredCourses.slice(
    currentPage * coursesPerPage,
    (currentPage + 1) * coursesPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="mt-2 text-lg text-gray-600">
              Explore our most popular and highly-rated courses
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevPage}
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="text-sm text-gray-500">
              {currentPage + 1} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNextPage}
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="default" className="bg-primary-blue hover:bg-blue-700">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
