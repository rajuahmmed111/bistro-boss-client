import bground from "../../../assets/home/chef-service.jpg";

import BistroSection from "../../../Components/BistroSection";

const BistroBoss = () => {
  return (
    <BistroSection
      bGround={bground}
      bistroBoss={"Bistro Boss"}
      lorem={
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem animi voluptatum harum at, numquam sapiente provident ea alias odio, aliquam reiciendis laudantium consequuntur obcaecati quam quo, neque tempora saepe vel."
      }
    ></BistroSection>
  );
};

export default BistroBoss;
