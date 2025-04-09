import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const blogs = {
  "ai-web": {
    title: "The Future of AI in Web Development",
    img: "https://images.pexels.com/photos/3228682/pexels-photo-3228682.jpeg",
    overview:
      "AI is revolutionizing how we build websites. From smart recommendations to automated testing, AI boosts both developer productivity and user experience.",
    advantages: [
      "Automated code generation reduces development time.",
      "Personalized content enhances user engagement.",
      "AI-powered testing improves reliability.",
    ],
    disadvantages: [
      "High initial setup cost for AI systems.",
      "Over-reliance may reduce human creativity.",
      "Security concerns with user data handled by AI.",
    ],
    details:
      "Incorporating AI into web development means using machine learning for better SEO, intelligent content suggestions, chatbot integration, and automated analytics. Many frameworks now integrate with AI tools like GPT APIs, TensorFlow, and others.",
    faqs: [
      {
        question: "What are examples of AI in websites?",
        answer:
          "Examples include AI chatbots, personalized recommendations, and automated content analysis.",
      },
      {
        question: "Is AI replacing web developers?",
        answer:
          "No, AI is a tool to assist developers, not replace them. It enhances productivity but still requires human creativity and supervision.",
      },
      {
        question: "Can small businesses use AI in web dev?",
        answer:
          "Yes, with tools like Wix ADI or ChatGPT APIs, small businesses can integrate basic AI features affordably.",
      },
    ],
  },
};

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const blog = blogs[id];

  if (!blog) {
    return (
      <div className="h-screen flex flex-col bg-white text-black">
        <Header />
        <div className="flex-grow flex items-center justify-center text-xl font-medium">
          Blog Not Found
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white text-black pt-20">
      <Header />

      <section className="flex-grow py-16 px-6 max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-bold text-center tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {blog.title}
        </motion.h1>

        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-[400px] object-cover mt-10 rounded-xl shadow-xl"
        />

        {/* Section Wrapper */}
        <div className="mt-14 space-y-12">

          {/* Overview */}
          <div className="border-t pt-8 backdrop-blur-md bg-white/70 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">🧠 Overview</h2>
            <p className="text-gray-800 leading-relaxed">{blog.overview}</p>
          </div>

          {/* Advantages */}
          <div className="border-t pt-8 backdrop-blur-md bg-white/70 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4">✅ Advantages</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-800">
              {blog.advantages.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Disadvantages */}
          <div className="border-t pt-8 backdrop-blur-md bg-white/70 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4">⚠️ Disadvantages</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-800">
              {blog.disadvantages.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Detailed Explanation */}
          <div className="border-t pt-8 backdrop-blur-md bg-white/70 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-2">📚 In-Depth Details</h2>
            <p className="text-gray-800 leading-relaxed">{blog.details}</p>
          </div>

          {/* FAQ */}
          <div className="border-t pt-8 backdrop-blur-md bg-white/70 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-6">
              {blog.faqs.map((faq, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-lg mb-1">{faq.question}</h4>
                  <p className="text-gray-800">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
