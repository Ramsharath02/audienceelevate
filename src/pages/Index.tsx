
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import UseCase from "@/components/UseCase";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Overview />
      <UseCase />
      <ContactForm />
    </div>
  );
};

export default Index;
