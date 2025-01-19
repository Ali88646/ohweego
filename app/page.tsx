import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Steps from "@/components/Steps";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Hero />
        <Steps />
      </Container>
    </>
  );
};

export default Home;
