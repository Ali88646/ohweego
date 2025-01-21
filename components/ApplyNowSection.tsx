import Container from "./Container";
import CardBackground from "./CardBackground";
import GradientText from "./GradientText";
import Button from "./Button";

const ApplyNowSection = () => {
  return (
    <Container className="mt-16 px-[5vw] md:px-0">
      <CardBackground
        className="py-12 px-[5vw] md:px-0"
        absoluteClass="-left-[1px]"
      >
        <div className="flex flex-col gap-5">
          <h2 className="uppercase md:text-6xl text-center md:px-40 font-bold text-3xl">
            Unlock Your Creator Potential!
          </h2>
          <p className="text-xl text-center">
            Elevate your TikTok with insights, challenges, and rewards. Stream
            and grow with <GradientText text="OHWEEGO!" className="font-bold" />
          </p>
          <Button
            text="Apply Now"
            className="md:w-1/6 bg-secondary-color text-white hover:bg-white hover:text-black self-center py-3"
          />
        </div>
      </CardBackground>
    </Container>
  );
};

export default ApplyNowSection;
