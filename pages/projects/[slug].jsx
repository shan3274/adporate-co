import { useRouter } from "next/router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Star, CheckCircle } from "lucide-react";
import { CheckCircleIcon, StarIcon, ClipboardDocumentCheckIcon, CalendarDaysIcon, RocketLaunchIcon, ExclamationTriangleIcon, LightBulbIcon, CameraIcon } from "@heroicons/react/24/outline";

const project = {
  slug: "ecommerce-website",
  title: "E-Commerce Fashion Store",
  desc: "A scalable e-commerce website built for a fashion brand, featuring dynamic product listings, payment gateway, admin dashboard, and order tracking system.",
  image: "https://images.pexels.com/photos/1342460/pexels-photo-1342460.jpeg",
  tech: ["Next.js", "Tailwind CSS", "Node.js", "MongoDB", "Stripe"],
  cost: "₹42,000",
  client: {
    name: "Rahul Sharma",
    company: "WearItNow",
    location: "Mumbai, India",
    feedback:
      "Shan and his team did a fantastic job. The store is fast, responsive, and customers love the UX. Sales have increased by 35% post launch.",
    rating: 5,
  },
  features: [
    "User login & registration",
    "Dynamic product catalog & filters",
    "Add to cart & checkout",
    "Stripe payment integration",
    "Admin dashboard for orders & inventory",
    "Order tracking with email notifications",
  ],
  timeline: {
    start: "March 1, 2025",
    end: "March 20, 2025",
    duration: "3 weeks",
  },
  challenges: [
    "Building a custom filter system with multiple categories",
    "Handling dynamic routing for 500+ product pages",
    "Optimizing product images for performance",
  ],
  learnings: [
    "Implemented incremental static regeneration in Next.js",
    "Used Stripe's webhooks for real-time order tracking",
    "Improved Lighthouse score from 62 to 91",
  ],
  screenshots: [
    "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg",
    "https://images.pexels.com/photos/3803517/pexels-photo-3803517.jpeg",
  ],
};

const ProjectDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug || slug !== project.slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading project...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F7FA] text-[#1A1A1A]">
      <Header />

      {/* 🔹 Hero Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <img
          src={project.image}
          alt={project.title}
          className="w-full md:w-1/2 rounded-xl shadow-xl border"
        />
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            {project.desc}
          </p>
        </div>
      </section>

      {/* 🔹 Fancy Card Section */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {/* Tech Stack */}
        <div className="bg-white rounded-xl p-6 shadow-lg backdrop-blur-lg border">
          <ClipboardDocumentCheckIcon className="h-6 w-6 text-blue-600 mb-2" />
          <h2 className="font-semibold text-lg mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="bg-[#E3EBF8] text-sm px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl p-6 shadow-lg backdrop-blur-lg border">
          <CalendarDaysIcon className="h-6 w-6 text-indigo-600 mb-2" />
          <h2 className="font-semibold text-lg mb-2">Timeline</h2>
          <p>
            <strong>Start:</strong> {project.timeline.start}
          </p>
          <p>
            <strong>End:</strong> {project.timeline.end}
          </p>
          <p>
            <strong>Duration:</strong> {project.timeline.duration}
          </p>
        </div>

        {/* Cost */}
        <div className="bg-white rounded-xl p-6 shadow-lg backdrop-blur-lg border text-center">
          <RocketLaunchIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
          <h2 className="font-semibold text-lg mb-1">Project Cost</h2>
          <p className="text-2xl font-bold text-[#0057FF]">{project.cost}</p>
          <p className="text-sm text-gray-500 mt-1">
            based on scope & features
          </p>
        </div>
      </div>

      {/* 🔹 Features */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <CheckCircleIcon className="h-6 w-6 text-green-500" />
            Key Features
          </h2>
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="text-gray-700 flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-400" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 🔹 Challenges */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />
            Challenges
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.challenges.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 🔹 Learnings */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <LightBulbIcon className="h-6 w-6 text-yellow-400" />
            What We Learned
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {project.learnings.map((l, i) => (
              <li key={i}>{l}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 🔹 Client Feedback */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <StarIcon className="h-6 w-6 text-yellow-500" />
            Client Feedback
          </h2>
          <p className="text-gray-700 italic">“{project.client.feedback}”</p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="font-semibold">{project.client.name}</p>
              <p className="text-sm text-gray-500">
                {project.client.company} – {project.client.location}
              </p>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: project.client.rating }).map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Screenshots */}
      <section className="px-6 py-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          <CameraIcon className="h-6 w-6 text-purple-600" />
          Project Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.screenshots.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Screenshot ${i + 1}`}
              className="rounded-xl shadow-lg border"
            />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetails;
