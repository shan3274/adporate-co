import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegNewspaper } from "react-icons/fa";

const blogs = [
  {
    id: "ai-web",
    title: "The Future of AI in Web Development",
    desc: "How AI is transforming websites with automation and personalization.",
    img: "https://images.pexels.com/photos/3228682/pexels-photo-3228682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "seo-trends",
    title: "SEO Strategies for 2025",
    desc: "Discover the latest SEO trends to rank higher in search results.",
    img: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "ux-ui",
    title: "Modern UX/UI Best Practices",
    desc: "Enhance user engagement with smart UI/UX design strategies.",
    img: "https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const BlogPreview = () => {
  return (
    <section className="py-16 px-6 bg-[#F8FAFC] text-black">
      {/* Section Title */}
      <motion.h2
        className="text-5xl font-extrabold text-center tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Latest Insights
      </motion.h2>

      {/* Blog Cards */}
      <motion.div
        className="mt-12 flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            className="group bg-white rounded-lg shadow-md overflow-hidden p-6 max-w-sm flex flex-col text-center hover:shadow-xl transition-all duration-300"
          >
            {/* Circular Image */}
            <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-blue-500">
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Content */}
            <div className="mt-6">
              <FaRegNewspaper className="text-3xl text-blue-600 mb-3 mx-auto" />
              <h3 className="text-2xl font-bold text-black">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.desc}</p>
            </div>

            {/* Button Always at Bottom */}
            <div className="mt-auto">
              <Link href={`/blog/${blog.id}`}>
                <button className="mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* More Blogs Button */}
      <div className="text-center mt-12">
        <Link href="/blog">
          <button className="px-6 py-3 bg-black text-white font-semibold text-lg rounded-lg hover:bg-gray-800 transition">
            More Blogs
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BlogPreview;
