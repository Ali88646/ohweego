import ApplyNowSection from "@/components/ApplyNowSection";
import Benefits from "@/components/Benefits";
import Container from "@/components/Container";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Progress from "@/components/Progress";
import Services from "@/components/Services";
import Steps from "@/components/Steps";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Container>
        <Steps />
        <Benefits />
        <Progress />
        <Services />
        <Faq />
        <ApplyNowSection />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
