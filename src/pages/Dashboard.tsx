
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BookOpen,
  CheckCircle,
  Clock,
  Award,
  Calendar,
  BarChart2,
  BookMarked,
  Bell,
  Settings,
  LogOut,
  ChevronRight,
  Play,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample enrolled courses data
const enrolledCourses = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    instructor: "Dr. Sarah Johnson",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    progress: 65,
    nextLesson: "Algorithm Analysis",
    category: "Computer Science",
  },
  {
    id: "4",
    title: "Web Development Bootcamp",
    instructor: "David Wilson",
    thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    progress: 32,
    nextLesson: "CSS Flexbox & Grid",
    category: "Web Development",
  },
  {
    id: "5",
    title: "Business Management and Leadership",
    instructor: "Jessica Smith",
    thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    progress: 10,
    nextLesson: "Team Building Strategies",
    category: "Business",
  },
];

// Sample upcoming deadlines
const upcomingDeadlines = [
  {
    id: "1",
    courseTitle: "Introduction to Computer Science",
    assignment: "Algorithm Analysis Quiz",
    dueDate: "2025-04-15T23:59:59",
  },
  {
    id: "2",
    courseTitle: "Web Development Bootcamp",
    assignment: "Portfolio Project Submission",
    dueDate: "2025-04-18T23:59:59",
  },
  {
    id: "3",
    courseTitle: "Business Management and Leadership",
    assignment: "Case Study Analysis",
    dueDate: "2025-04-20T23:59:59",
  },
];

// Sample certificates
const certificates = [
  {
    id: "1",
    title: "Python Programming Fundamentals",
    issueDate: "2025-01-15",
    instructor: "Dr. Robert Miller",
  },
  {
    id: "2",
    title: "Digital Marketing Essentials",
    issueDate: "2024-11-20",
    instructor: "Emma Rodriguez",
  },
];

// Sample recommended courses
const recommendedCourses = [
  {
    id: "2",
    title: "Advanced Mathematics for Data Science",
    instructor: "Prof. Michael Chen",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Mathematics",
    rating: 4.6,
  },
  {
    id: "6",
    title: "Graphic Design Fundamentals",
    instructor: "Alex Turner",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Design",
    rating: 4.7,
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("courses");
  
  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };
  
  // Function to calculate days remaining
  const getDaysRemaining = (dateString: string) => {
    const today = new Date();
    const dueDate = new Date(dateString);
    const differenceInTime = dueDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="bg-gradient-to-r from-primary-blue to-blue-700 text-white">
          <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
                <p className="text-blue-100">Welcome back, Alex! Continue your learning journey.</p>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Bell className="h-4 w-4 mr-2" />
                  Notifications
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Card className="bg-blue-50 border-blue-100">
              <CardContent className="flex items-center p-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-primary-blue" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Courses Enrolled</p>
                  <h3 className="text-2xl font-bold">{enrolledCourses.length}</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-100">
              <CardContent className="flex items-center p-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Completed Courses</p>
                  <h3 className="text-2xl font-bold">2</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-100">
              <CardContent className="flex items-center p-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hours Spent</p>
                  <h3 className="text-2xl font-bold">42.5</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-100">
              <CardContent className="flex items-center p-6">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Certificates</p>
                  <h3 className="text-2xl font-bold">{certificates.length}</h3>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="courses" className="mb-8" onValueChange={setActiveTab}>
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="courses" className="px-4 py-2">My Courses</TabsTrigger>
                <TabsTrigger value="deadlines" className="px-4 py-2">Deadlines</TabsTrigger>
                <TabsTrigger value="certificates" className="px-4 py-2">Certificates</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="courses">
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">In Progress</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="font-bold mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-500">{course.instructor}</p>
                        </div>
                        
                        <div className="mb-5">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm">Progress</span>
                            <span className="text-sm font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        
                        <div className="flex justify-between">
                          <Button size="sm" variant="outline" className="text-xs">
                            View Course
                          </Button>
                          <Button size="sm" variant="default" className="bg-primary-blue hover:bg-blue-700 text-xs">
                            <Play className="h-3 w-3 mr-1" />
                            Continue
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold">Recommended For You</h2>
                  <Button variant="link" className="text-primary-blue">
                    View All
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {recommendedCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="mb-4">
                          <h3 className="font-bold mb-1">{course.title}</h3>
                          <p className="text-sm text-gray-500">{course.instructor}</p>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">{course.category}</span>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 text-accent-amber fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l2.4 7.8H22l-6 4.8 2.4 7.8-6-4.8-6 4.8 2.4-7.8-6-4.8h7.8z" />
                            </svg>
                            <span className="ml-1 text-sm font-medium">{course.rating}</span>
                          </div>
                        </div>
                        
                        <Button size="sm" variant="default" className="w-full mt-4 bg-primary-blue hover:bg-blue-700">
                          Enroll Now
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="deadlines">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>
                    Stay on top of your assignments and submissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map((deadline) => {
                      const daysRemaining = getDaysRemaining(deadline.dueDate);
                      const isUrgent = daysRemaining <= 3;
                      
                      return (
                        <div
                          key={deadline.id}
                          className={`border rounded-lg p-4 ${
                            isUrgent ? "border-red-200 bg-red-50" : "border-gray-200"
                          }`}
                        >
                          <div className="flex justify-between">
                            <div>
                              <h4 className="font-medium">{deadline.assignment}</h4>
                              <p className="text-sm text-gray-500">{deadline.courseTitle}</p>
                            </div>
                            <div className="text-right">
                              <p className={`text-sm font-medium ${
                                isUrgent ? "text-red-600" : "text-gray-700"
                              }`}>
                                Due {formatDate(deadline.dueDate)}
                              </p>
                              <p className={`text-xs ${
                                isUrgent ? "text-red-600" : "text-gray-500"
                              }`}>
                                {daysRemaining} days remaining
                              </p>
                            </div>
                          </div>
                          <div className="mt-3 flex justify-between">
                            <Button size="sm" variant="outline">
                              View Assignment
                            </Button>
                            <Button size="sm" variant={isUrgent ? "destructive" : "default"} className={!isUrgent ? "bg-primary-blue hover:bg-blue-700" : ""}>
                              Submit Now
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="certificates">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 relative">
                        <div className="absolute top-4 right-4">
                          <Award className="h-16 w-16 text-primary-blue opacity-20" />
                        </div>
                        <div className="flex flex-col h-full">
                          <div className="mb-auto">
                            <h3 className="font-bold text-xl mb-2 text-gray-900">{cert.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                              Instructor: {cert.instructor}
                            </p>
                            <p className="text-gray-500 text-sm">
                              Issued on: {cert.issueDate}
                            </p>
                          </div>
                          <div className="mt-6 flex space-x-3">
                            <Button size="sm" variant="outline">
                              View Certificate
                            </Button>
                            <Button size="sm" variant="default" className="bg-primary-blue hover:bg-blue-700">
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="border-dashed border-2 border-gray-200">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className="rounded-full bg-gray-100 p-4 mb-4">
                      <Award className="h-8 w-8 text-gray-400" />
                    </div>
                    <h3 className="font-semibold mb-2">Complete More Courses</h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Finish your enrolled courses to earn more certificates
                    </p>
                    <Button variant="outline">Browse Courses</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
