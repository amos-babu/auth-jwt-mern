import axios from "axios";
import { useNavigate } from "react-router";

const Dashboard = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const navigate = useNavigate();
  const logout = () => {
    axios.post("http://localhost:3000/api/v1/logout");
    sessionStorage.removeItem("token");
    navigate("/login");
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
