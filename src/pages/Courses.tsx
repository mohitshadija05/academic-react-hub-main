import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CourseCard from "../components/CourseCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, Filter, ChevronDown, ChevronUp, X } from "lucide-react";

const courses = [
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
  {
    id: "7",
    title: "Introduction to Psychology",
    instructor: "Dr. Robert Miller",
    description: "Explore the human mind and behavior through the study of psychological theories and research methods.",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Psychology",
    rating: 4.6,
    students: 13280,
    duration: "6 weeks",
    level: "Beginner" as const,
  },
  {
    id: "8",
    title: "Mobile App Development with Flutter",
    instructor: "James Peterson",
    description: "Learn to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    thumbnail: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mobile Development",
    rating: 4.8,
    students: 9650,
    duration: "10 weeks",
    level: "Intermediate" as const,
  },
  {
    id: "9",
    title: "Financial Accounting Principles",
    instructor: "Amanda Lee",
    description: "Master the fundamentals of financial accounting and learn to read and analyze financial statements.",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Finance",
    rating: 4.5,
    students: 7845,
    duration: "8 weeks",
    level: "Beginner" as const,
  },
];

const categories = [
  "Computer Science",
  "Mathematics",
  "Marketing",
  "Web Development",
  "Business",
  "Design",
  "Psychology",
  "Mobile Development",
  "Finance",
];

const levels = ["Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    let results = courses;
    
    // Search filtering
    if (searchTerm) {
      results = results.filter(
        (course) =>
          course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Category filtering
    if (selectedCategories.length > 0) {
      results = results.filter((course) =>
        selectedCategories.includes(course.category)
      );
    }
    
    // Level filtering
    if (selectedLevels.length > 0) {
      results = results.filter((course) =>
        selectedLevels.includes(course.level)
      );
    }
    
    setFilteredCourses(results);
  }, [searchTerm, selectedCategories, selectedLevels]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleLevel = (level: string) => {
    setSelectedLevels((prev) =>
      prev.includes(level)
        ? prev.filter((l) => l !== level)
        : [...prev, level]
    );
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const toggleMobileFilters = () => {
    setMobileFiltersOpen(!mobileFiltersOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-primary-blue text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-4">Explore Our Courses</h1>
            <p className="text-xl text-blue-100 mb-6">
              Discover a wide range of courses taught by industry experts
            </p>
            
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for courses, topics, or instructors..."
                className="pl-10 bg-white text-gray-800 w-full lg:w-2/3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="lg:hidden flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredCourses.length} Courses
            </h2>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleMobileFilters}
              className="flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters - Desktop */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleFilters}
                    className="h-8 p-0 w-8"
                  >
                    {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </Button>
                </div>
                
                {showFilters && (
                  <>
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Categories</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center">
                            <Checkbox
                              id={`category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={() => toggleCategory(category)}
                              className="mr-2"
                            />
                            <label
                              htmlFor={`category-${category}`}
                              className="text-sm cursor-pointer"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-3">Difficulty Level</h4>
                      <div className="space-y-2">
                        {levels.map((level) => (
                          <div key={level} className="flex items-center">
                            <Checkbox
                              id={`level-${level}`}
                              checked={selectedLevels.includes(level)}
                              onCheckedChange={() => toggleLevel(level)}
                              className="mr-2"
                            />
                            <label
                              htmlFor={`level-${level}`}
                              className="text-sm cursor-pointer"
                            >
                              {level}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* Filters - Mobile */}
            {mobileFiltersOpen && (
              <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
                <div className="bg-white w-80 h-full overflow-y-auto p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-lg">Filters</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={toggleMobileFilters}
                      className="h-8 p-0 w-8"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <Checkbox
                            id={`mobile-category-${category}`}
                            checked={selectedCategories.includes(category)}
                            onCheckedChange={() => toggleCategory(category)}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`mobile-category-${category}`}
                            className="text-sm cursor-pointer"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Difficulty Level</h4>
                    <div className="space-y-2">
                      {levels.map((level) => (
                        <div key={level} className="flex items-center">
                          <Checkbox
                            id={`mobile-level-${level}`}
                            checked={selectedLevels.includes(level)}
                            onCheckedChange={() => toggleLevel(level)}
                            className="mr-2"
                          />
                          <label
                            htmlFor={`mobile-level-${level}`}
                            className="text-sm cursor-pointer"
                          >
                            {level}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button
                      className="w-full bg-primary-blue"
                      onClick={toggleMobileFilters}
                    >
                      Apply Filters
                    </Button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Course Grid */}
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold hidden lg:block">
                  {filteredCourses.length} Courses
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                    <option>Most Popular</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
              
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-gray-500 mb-6">
                    Try adjusting your search or filter criteria
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategories([]);
                      setSelectedLevels([]);
                    }}
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
