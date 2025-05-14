import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

interface FormDataProps {
  email: string;
  password: string;
}

interface ErrorProps {
  msg: string;
  type: string;
}

function Login() {
  const [formData, setFormData] = useState<FormDataProps>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ErrorProps[]>([]);

  const navigate = useNavigate();

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        formData
      );
      setFormData({ email: "", password: "" });
      navigate("/login");
      const token = response.data.accessToken;
      sessionStorage.setItem("token", token);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 422) {
          setError(error.response.data.errors);
        }
      } else {
        console.error("Unexpected error", error);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-2.5">Login</h2>
      <div
        className="max-w-xl p-6 bg-white border
       border-gray-200 rounded-lg shadow-sm hover:bg-gray-100
        dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <form onSubmit={loginUser}>
          <div className=" mb-6">
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900
               dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="website"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                value={formData.email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="amosbabu@flowbite.com"
              />
              {error.length > 0 && (
                <p className="text-sm text-red-600">{error[0].msg}</p>
              )}
            </div>
            <div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900
               dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
                className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600
                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                  dark:focus:border-blue-500"
              />
              {error.length > 0 && (
                <p className="text-sm text-red-600">{error[1].msg}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800
             focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
             rounded-lg text-sm w-96 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
