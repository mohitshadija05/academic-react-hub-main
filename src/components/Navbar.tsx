
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, BookOpen, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-primary-blue" />
              <span className="ml-2 text-xl font-bold text-gray-800">EduLearn</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-primary-blue transition-colors">Home</Link>
            <Link to="/courses" className="px-3 py-2 text-gray-700 hover:text-primary-blue transition-colors">Courses</Link>
            <Link to="/dashboard" className="px-3 py-2 text-gray-700 hover:text-primary-blue transition-colors">Dashboard</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-primary-blue transition-colors">About</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="default" size="sm" className="bg-primary-blue hover:bg-blue-700">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-blue focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-blue transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/courses" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-blue transition-colors"
              onClick={toggleMenu}
            >
              Courses
            </Link>
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-blue transition-colors"
              onClick={toggleMenu}
            >
              Dashboard
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-blue transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="pt-4 pb-2 flex flex-col space-y-2">
              <Button variant="outline" size="sm" className="justify-start">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="default" size="sm" className="bg-primary-blue hover:bg-blue-700 justify-start">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
