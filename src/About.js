import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "About Us",
  };
  return <HeroSection myData={data.name} />;
};

export default About;
