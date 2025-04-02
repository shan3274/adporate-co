import { useRouter } from "next/router";
import { motion } from "framer-motion";

const blogs = {
  "ai-web": {
    title: "The Future of AI in Web Development",
    desc: "AI is changing web development with automation, smarter user experiences, and enhanced performance.",
    img: "https://images.pexels.com/photos/3228682/pexels-photo-3228682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "Artificial Intelligence is playing a crucial role in web development. AI-driven chatbots, automated coding tools, and personalized content are reshaping the digital experience.",
  },
  "seo-trends": {
    title: "SEO Trends to Watch in 2025",
    desc: "New strategies to improve website ranking and traffic.",
    img: "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "SEO is evolving with voice search, AI-generated content, and advanced indexing techniques. Staying ahead of the curve is essential for better search engine visibility.",
  },
  "ux-ui": {
    title: "UX/UI Best Practices for Modern Websites",
    desc: "Create visually appealing and user-friendly web designs.",
    img: "https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      "User experience is the key to a successful website. Optimizing site speed, using clear navigation, and maintaining a minimalistic design can enhance user engagement.",
  },
};

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogs[id];

  if (!blog) {
    return (
      <div className="h-screen flex items-center justify-center text-xl">
        Blog Not Found
      </div>
    );
  }

  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <motion.h2 className="text-4xl font-bold text-center">
        {blog.title}
      </motion.h2>
      <img
        src={blog.img}
        className="w-full h-80 object-cover mt-6 rounded-lg shadow-lg"
      />
      <p className="mt-6 text-lg text-gray-700">{blog.content}</p>
    </section>
  );
};

export default BlogDetail;
