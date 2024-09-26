
const BistroSection = ({ bGround, bistroBoss, lorem }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bGround})` }}
      className="max-w-[1050px] mx-auto h-[550px] bg-cover bg-center flex p-4 justify-center items-center mb-16 bg-fixed"
    >
      <div className="footer-center max-w-[850px] h-[320px] bg-white">
        <h3 className="uppercase text-3xl text-[#151515] mt-20">
          {bistroBoss}
        </h3>
        <p className="text-[16px] mt-4 px-20">{lorem}</p>
      </div>
    </div>
  );
};

export default BistroSection;
