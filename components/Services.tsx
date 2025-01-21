import Container from "./Container";
import GradientText from "./GradientText";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <Container className="mt-24 md:px-[8vw] sm:px-[12vw]">
      <div className="w-full flex flex-col items-center gap-3">
        <p className="text-md font-semibold">Services & Benefits</p>
        <h2 className="text-4xl font-bold">
          What we <GradientText text="Offer" />
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 mt-16 px-10 md:px-0  gap-10 md:gap-0">
        <ServicesCard
          heading="Service"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore."
          text="Lorem ipsum dolor sit amet, consectetur adipiscingore text"
        />
        <ServicesCard
          heading="Benefits"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore."
          text="Lorem ipsum dolor sit amet, consectetur adipiscingore text"
        />
      </div>
    </Container>
  );
};

export default Services;
