import Benefits from "@/components/Benefits";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Progress from "@/components/Progress";
import Steps from "@/components/Steps";

const Home = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Container>
        <Hero />
        <Steps />
        <Benefits />
        <Progress />
      </Container>
    </div>
  );
};

export default Home;
