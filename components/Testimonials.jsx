import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    review: "Best web development team ever! Highly recommend.",
    company: "TechCorp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Lee",
    review: "Amazing UI/UX and fast service. Loved working with them!",
    company: "StartupX",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Smith",
    review: "They understood our vision perfectly and delivered flawlessly.",
    company: "EcomBrands",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-black">
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our Clients Say
      </motion.h2>

      {/* Testimonials Grid */}
      <motion.div
        className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-6 shadow-lg rounded-xl flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-4 left-4 text-gray-300 text-3xl" />

            {/* Client Image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />

            {/* Review Text */}
            <p className="text-lg text-gray-700 mt-4 italic">"{testimonial.review}"</p>

            {/* Client Name & Company */}
            <p className="mt-4 font-bold text-lg text-blue-600">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.company}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Testimonials;
