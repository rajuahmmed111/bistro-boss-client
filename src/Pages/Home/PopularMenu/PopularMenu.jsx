import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 md:max-w-[1050px] mx-auto p-5">
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"From Our menu"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 gap-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-7 uppercase">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
