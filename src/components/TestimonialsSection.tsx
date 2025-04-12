
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "The computer science courses on this platform completely transformed my career. The instructors were knowledgeable, and the practical assignments prepared me for real-world challenges.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "I took the Digital Marketing course to expand my skills, and it exceeded my expectations. The content was up-to-date with current industry trends, and I was able to immediately apply what I learned.",
    rating: 4,
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "The advanced mathematics and statistics courses provided me with a solid foundation for my data science career. The instructors explained complex concepts in an easy-to-understand manner.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Students Say</h2>
          <p className="mt-2 text-lg text-gray-600">
            Hear from students who have transformed their learning journey with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "text-accent-amber fill-current" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
