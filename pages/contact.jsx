import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Header />

      <section className="flex-grow py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Let’s Connect
        </h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info Card */}
          <div className="bg-black bg-opacity-80 text-white p-8 rounded-xl shadow-lg backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <p className="mb-6">
              Got a project idea or need help with something digital? We’d love
              to hear from you. Reach out and let's build something great
              together.
            </p>
            <div className="space-y-4 text-sm">
              <p>
                <strong>Email:</strong> hello@adporate.co
              </p>
              <p>
                <strong>Phone:</strong> +91-9876543210
              </p>
              <p>
                <strong>Location:</strong> 123 Tech Street, Delhi, India
              </p>
              <p>
                <strong>Working Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
              </p>
              <p>
                <strong>Follow us:</strong>
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-gray-300">
                  Instagram
                </a>
                <a href="#" className="hover:text-gray-300">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-gray-300">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/your-email@example.com"
            method="POST"
            className="bg-gray-100 p-8 rounded-xl shadow-md"
          >
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                required
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <div className="w-full h-96 mt-16 px-4">
        <iframe
          title="Our Location"
          className="w-full h-full rounded-xl shadow-lg"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14007.222973922918!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdcaa21fd5c3%3A0x3c8a9e2b3d69b221!2sDelhi!5e0!3m2!1sen!2sin!4v1649434903010!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
