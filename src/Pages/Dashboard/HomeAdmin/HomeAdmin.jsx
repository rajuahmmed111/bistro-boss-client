import useAuth from "../../../hooks/useAuth";

const HomeAdmin = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2 className="text-3xl">
        <span>HI, WELCOME </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
    </div>
  );
};

export default HomeAdmin;
