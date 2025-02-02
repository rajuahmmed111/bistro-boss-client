import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle()
      .then((res) => {
        const user = res.user;
        console.log("User signed in google:", user);
        navigate(location.state?.from || "/", { replace: true });
      })
      .catch((error) => {
        console.log("Error signing in with google:", error);
      });
  };

  return (
    <div className="mx-8 mb-5">
      <div className="divider"></div>
      <div>
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full text-[#D1A054] hover:text-white bg-white border-2 border-[#D1A054] hover:bg-[#D1A054]"
        >
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
