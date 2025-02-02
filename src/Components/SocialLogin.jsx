import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="mx-8 mb-5">
        <div className="divider"></div>
      <div>
        <button className="btn w-full text-[#D1A054] hover:text-white bg-white border-2 border-[#D1A054] hover:bg-[#D1A054]">
          <FaGoogle />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
