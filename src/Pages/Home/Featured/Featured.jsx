import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed">
      <div className="bg-black bg-opacity-50 pt-2 pb-20 my-12">
        <SectionTitle
          subHeading={"Check it out"}
          heading={"Featured Our menu"}
        ></SectionTitle>

        <div className="md:flex justify-center items-center gap-10 px-[110px]">
          <div>
            <img src={featured} alt="" />
          </div>
          <div>
            <h4 className="text-xl font-mono text-white">
              September, 14, {new Date().getFullYear()}
            </h4>
            <h4 className="text-xl font-mono text-white uppercase mt-3">
              WHERE CAN I GET SOME?
            </h4>
            <p className="text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
              soluta veritatis, reprehenderit laudantium porro, ut nihil
              asperiores beatae minima, dolores ipsam nisi saepe? Quibusdam
              recusandae reiciendis ipsa maxime eius odit!
            </p>

            <button className="btn btn-active uppercase text-[#FFFFFF] border-0 border-b-4 mt-4 mb-4 bg-[#5A5A5B] hover:bg-violet-700">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
