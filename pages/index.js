import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Workflow from "@/components/Workflow";
import React from "react";

const index = () => {
  return (
    <div className="bg-[#F0F4F8]">
      <Header />
      <HeroSection />
      <ServicesSection bg={"#F5F7FA"} />
      <WhyChooseUs />
      <Portfolio />
      <BlogPreview />
      <Workflow />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  // Fetch static data here
  const data = "";

  return {
    props: {
      data,
    },
  };
}

export default index;
