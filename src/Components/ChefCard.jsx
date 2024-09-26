import cardImg from "../assets/home/slide5.jpg";

const ChefCard = () => {
  return (
    <div className="card bg-[#F3F3F3] w-80 shadow-xl mb-16">
      <figure>
        <img
          className="w-full h-[300px] object-cover"
          src={cardImg}
          alt="Shoes"
        />
      </figure>
      <div className="card-body footer-center">
        <h2 className="card-title">Caeser salad</h2>
        <p className="mt-2 mb-4">
          ICaeser Salad Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 uppercase text-[#BB8506]   hover:bg-[#1f2937] border-[#BB8506] mb-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
