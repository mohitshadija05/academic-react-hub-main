
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award, Globe, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const missionVision = [
  {
    id: 1,
    title: "Our Mission",
    description: "To provide accessible, high-quality education to learners worldwide, empowering them to achieve their personal and professional goals through knowledge acquisition and skill development.",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Our Vision",
    description: "To create a global learning ecosystem where education transcends boundaries, fostering innovation, critical thinking, and lifelong learning for individuals of all backgrounds.",
    icon: Globe,
  },
];

const values = [
  {
    id: 1,
    title: "Excellence",
    description: "We strive for excellence in all educational content and services we provide.",
  },
  {
    id: 2,
    title: "Accessibility",
    description: "We believe education should be accessible to everyone, regardless of location or background.",
  },
  {
    id: 3,
    title: "Innovation",
    description: "We continuously innovate our teaching methods and learning technologies.",
  },
  {
    id: 4,
    title: "Integrity",
    description: "We uphold the highest standards of honesty, transparency, and ethical conduct.",
  },
  {
    id: 5,
    title: "Diversity",
    description: "We celebrate diversity and inclusion across all aspects of our organization.",
  },
  {
    id: 6,
    title: "Community",
    description: "We foster a supportive community of learners, educators, and partners.",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Dr. Jennifer Stevens",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "With over 20 years in education technology, Dr. Stevens founded EduLearn with a vision to democratize education globally.",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Michael leads our technology team, ensuring platform innovations that enhance the learning experience for all students.",
  },
  {
    id: 3,
    name: "Dr. Sarah Johnson",
    role: "Head of Curriculum",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Dr. Johnson oversees course development, ensuring all content meets rigorous academic and pedagogical standards.",
  },
  {
    id: 4,
    name: "David Chen",
    role: "Chief Operating Officer",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    bio: "David manages day-to-day operations, focusing on scaling our platform to reach more learners worldwide.",
  },
];

const achievements = [
  {
    id: 1,
    title: "Global Impact",
    description: "Present in over 40 countries with content translated into 15 languages.",
    icon: Globe,
  },
  {
    id: 2,
    title: "Student Success",
    description: "Over 50,000 students have completed courses, with 92% reporting career advancement.",
    icon: Users,
  },
  {
    id: 3,
    title: "Recognition",
    description: "Awarded 'Best Online Learning Platform' for three consecutive years.",
    icon: Award,
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary-blue to-blue-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl font-bold mb-4">About EduLearn</h1>
                <p className="text-xl text-blue-100 mb-6">
                  Transforming education through technology and innovation
                </p>
                <p className="text-blue-100">
                  Founded in 2020, EduLearn has grown from a small startup to a leading
                  educational platform, serving students and professionals worldwide.
                  Our commitment to quality education and technological innovation
                  drives everything we do.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Team collaboration"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mission and Vision */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission & Vision</h2>
              <p className="mt-2 text-lg text-gray-600">
                Guided by principles that drive our educational approach
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {missionVision.map((item) => (
                <Card key={item.id} className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="mr-6">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <item.icon className="h-8 w-8 text-primary-blue" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
              <p className="mt-2 text-lg text-gray-600">
                Principles that guide our approach to education and service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <Check className="h-5 w-5 text-green-600" />
                    </div>
                    <h3 className="font-bold text-lg">{value.title}</h3>
                  </div>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Leadership Team</h2>
              <p className="mt-2 text-lg text-gray-600">
                Meet the experts behind EduLearn's educational excellence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-primary-blue font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Achievements */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Achievements</h2>
              <p className="mt-2 text-lg text-blue-100">
                Milestones that mark our journey in transforming education
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-white/20">
                      <achievement.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                  <p className="text-blue-100">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Learning Community?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Whether you're a student, instructor, or organization, we'd love to hear from you
              and explore how we can help achieve your educational goals.
            </p>
            <Button className="bg-primary-blue hover:bg-blue-700">
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
