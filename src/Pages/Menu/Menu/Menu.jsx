import { Helmet } from "react-helmet-async";
import MenuCover from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import Cover from "../../shared/Cover/Cover";
import MenuCategory from "../MenuCategory/MenuCategory";

import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offereds = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        bGround={MenuCover}
        title={"OUR MENU"}
        lorem={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>

      {/* main */}

      <MenuCategory items={offereds}></MenuCategory>

      {/* <DessertCover /> */}
      <MenuCategory
        items={desserts}
        coverImg={dessertImg}
        title={"desserts"}
        lorem={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* <PizzaCover /> */}
      <MenuCategory
        items={pizzas}
        coverImg={pizzaImg}
        title={"pizzas"}
        lorem={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* <SalasCover /> */}
      <MenuCategory
        items={salads}
        coverImg={saladImg}
        title={"salads"}
        lorem={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* <SalasCover /> */}
      <MenuCategory
        items={soups}
        coverImg={soupImg}
        title={"soups"}
        lorem={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
