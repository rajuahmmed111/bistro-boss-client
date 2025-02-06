import useAuth from "../../../hooks/useAuth";

const HomeUser = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2 className="text-3xl font-serif">
        <span>HI, WELCOME </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
};

export default HomeUser;
