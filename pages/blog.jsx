import Link from "next/link";
import { motion } from "framer-motion";

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
];

const BlogPage = () => {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <motion.h2
        className="text-5xl font-extrabold text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Blogs
      </motion.h2>

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
  );
};

export default BlogPage;
