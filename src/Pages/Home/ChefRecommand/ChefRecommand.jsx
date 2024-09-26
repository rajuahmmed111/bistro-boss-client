import ChefCard from "../../../Components/ChefCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const ChefRecommand = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"Chef Recommends"}
      ></SectionTitle>
      <div className="max-w-[1050px] mx-auto grid md:grid-cols-3 sm:grid-cols-1 gap-8">
        <ChefCard />
        <ChefCard />
        <ChefCard />
      </div>
    </div>
  );
};

export default ChefRecommand;
