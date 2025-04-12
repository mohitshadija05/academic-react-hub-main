
import { GraduationCap, Book, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-primary-blue text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Learn Without Limits
            </h1>
            <p className="text-xl mb-6 text-blue-100">
              Access quality education anytime, anywhere. Discover courses taught by industry experts and unlock your potential.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="bg-white text-primary-blue hover:bg-blue-50">
                Explore Courses
              </Button>
              <Button variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Book className="h-6 w-6 mr-2 text-blue-300" />
                <span>500+ Courses</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 mr-2 text-blue-300" />
                <span>50K+ Students</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="h-6 w-6 mr-2 text-blue-300" />
                <span>Expert Instructors</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 mr-2 text-blue-300" />
                <span>Lifetime Access</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400 rounded-full opacity-20"></div>
              <div className="bg-white p-5 rounded-lg shadow-xl transform rotate-3 z-20">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Students learning" 
                  className="rounded-md"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg transform -rotate-6 z-10 w-48">
                <div className="flex items-center justify-between mb-2">
                  <div className="h-2 w-2 rounded-full bg-red-500"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded mb-2"></div>
                <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
