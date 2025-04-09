import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogs = [
  {
    id: "ai-web",
    title: "The Future of AI in Web Development",
    desc: "Discover how AI is transforming websites, making them smarter and more interactive.",
    img: "https://images.pexels.com/photos/3228682/pexels-photo-3228682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "seo-trends",
    title: "SEO Trends to Watch in 2025",
    desc: "Learn about the latest SEO strategies to boost your website ranking.",
    img: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "ux-ui",
    title: "UX/UI Best Practices for Modern Websites",
    desc: "Improve user experience with these UI/UX design principles.",
    img: "https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "web-performance",
    title: "Boosting Web Performance in 2025",
    desc: "Speed up your site using the latest optimization techniques.",
    img: "https://images.pexels.com/photos/11035543/pexels-photo-11035543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "security-2025",
    title: "Top Web Security Practices in 2025",
    desc: "Protect your website with modern security best practices.",
    img: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "ecommerce-future",
    title: "The Future of E-commerce Platforms",
    desc: "Explore the next generation of online shopping experiences.",
    img: "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "low-code",
    title: "Low-Code Development in 2025",
    desc: "Build applications faster using low-code/no-code platforms.",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "devops-evolution",
    title: "DevOps Trends You Need to Know",
    desc: "Stay ahead with the latest in automation and deployment.",
    img: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const BlogPage = () => {
  return (
    <main className="bg-[#F9FAFB] text-gray-800">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-center tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Blogs
        </motion.h2>

        {/* Blog Cards */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-black">{blog.title}</h3>
                <p className="text-gray-600 mt-2">{blog.desc}</p>

                <Link href={`/blog/${blog.id}`}>
                  <button className="mt-4 px-5 py-2 text-sm bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                    Read More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Extra Section */}
      <section className="bg-white py-20 px-6 md:px-20 text-center border-t border-gray-200">
        <h3 className="text-3xl font-bold mb-4">Why Read Our Blog?</h3>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Stay ahead of digital trends, explore expert insights, and empower
          your online presence with our regularly updated content written by
          professionals.
        </p>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPage;
