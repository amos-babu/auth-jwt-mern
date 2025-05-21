import axios from "../axiosConfig";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await axios.post("/logout", {});
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <>
      <div className="flex justify-end p-10">
        <button
          onClick={logout}
          className="bg-gray-600 p-2 text-white font-semibold cursor-pointer text-xl rounded-lg flex flex-col justify-center"
        >
          Logout
        </button>
      </div>
      <div className="text-5xl font-bold text-center p-6">WELCOME, HOME</div>
    </>
  );
};

export default Dashboard;
