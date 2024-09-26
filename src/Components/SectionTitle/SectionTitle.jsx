const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md: w-4/12 mx-auto text-center my-10">
      <p className="text-[#D99904] mb-3">--- {subHeading} ---</p>
      <h3 className="text-3xl text-[#151515] font-semibold uppercase border-y-4 p-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
