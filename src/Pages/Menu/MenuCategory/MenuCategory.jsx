import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem";

const MenuCategory = ({ items, title, coverImg, lorem }) => {
  return (
    <section>
      {title && <Cover bGround={coverImg} title={title} lorem={lorem}></Cover>}
      <div className="grid md:grid-cols-2 gap-12 mx-32">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>

      <div className="flex justify-center mb-20">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 mt-7 uppercase">
            Order your favourite food
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuCategory;
