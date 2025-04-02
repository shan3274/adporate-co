import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCode, FaClock, FaTools } from "react-icons/fa";

const faqs = [
  { 
    question: "What services do you offer?", 
    answer: "We provide website, app development & social media management.",
    icon: <FaCode className="text-blue-500 text-xl" />
  },
  { 
    question: "How long does a project take?", 
    answer: "It depends on complexity, but most projects are done in 2-6 weeks.",
    icon: <FaClock className="text-green-500 text-xl" />
  },
  { 
    question: "Do you offer post-launch support?", 
    answer: "Yes! We provide ongoing support & maintenance.",
    icon: <FaTools className="text-orange-500 text-xl" />
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 px-6 bg-gray-100 text-black">
      {/* Section Title */}
      <h2 className="text-5xl font-extrabold text-center tracking-wide">Frequently Asked Questions</h2>

      {/* FAQ Container */}
      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-5 rounded-lg shadow-md">
            <button
              className="flex justify-between items-center w-full text-lg font-semibold focus:outline-none"
              onClick={() => setOpenIndex(index === openIndex ? null : index)}
            >
              <div className="flex items-center gap-3">
                {faq.icon} {/* Icon Here */}
                {faq.question}
              </div>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </button>

            {/* Animated Answer Section */}
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "mt-3 opacity-100 max-h-40" : "max-h-0 opacity-0"}`}>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
