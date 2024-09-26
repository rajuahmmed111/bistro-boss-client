import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../../shared/Cover/Cover";

import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const categories = ["salads", "pizzas", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTanIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const drinks = menu.filter((item) => item.category === "drinks");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <Cover
        bGround={orderCoverImg}
        title={"Order Food"}
        lorem={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></Cover>

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTanIndex(index)}>
        <div className="footer-center">
          <TabList>
            <Tab>
              <span className="text-lg text-[#BB8506] font-bold  border-b-4 border-[#BB8506]">
                SALAD
              </span>
            </Tab>
            <Tab>
              <span className="text-lg text-[#BB8506] font-bold  border-b-4 border-[#BB8506]">
                PIZZA
              </span>
            </Tab>
            <Tab>
              <span className="text-lg text-[#BB8506] font-bold  border-b-4 border-[#BB8506]">
                SOUPS
              </span>
            </Tab>
            <Tab>
              <span className="text-lg text-[#BB8506] font-bold  border-b-4 border-[#BB8506]">
                DESSERTS
              </span>
            </Tab>
            <Tab>
              <span className="text-lg text-[#BB8506] font-bold  border-b-4 border-[#BB8506]">
                DRINKS
              </span>
            </Tab>
          </TabList>
        </div>
        <TabPanel>
          <OrderTab items={salads}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soups}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
