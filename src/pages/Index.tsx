
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import UseCase from "@/components/UseCase";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Overview />
      <UseCase />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
