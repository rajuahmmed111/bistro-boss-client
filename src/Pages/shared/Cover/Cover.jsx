const Cover = ({ bGround, title, lorem }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bGround})` }}
      className="h-[550px] bg-cover bg-center flex p-4 justify-center items-center mb-16 bg-fixed"
    >
      <div className="footer-center w-[850px] h-[320px] bg-black bg-opacity-60 text-white">
        <h3 className="uppercase text-5xl font-semibold mt-20">{title}</h3>
        <p className="text-[16px] mt-4 px-20">{lorem}</p>
      </div>
    </div>
  );
};

export default Cover;
