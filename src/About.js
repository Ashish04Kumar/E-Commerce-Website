import HeroSection from "./components/HeroSection";

function About() {
  const data = {
    name: "Ashish Ecommerce",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
}

export default About;
