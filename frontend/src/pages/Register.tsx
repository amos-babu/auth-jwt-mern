import { useState } from "react";
import axios from "../axiosConfig";
import axiosMain from "axios";
import { Link, useNavigate } from "react-router";

interface FormDataProps {
  name: string;
  email: string;
  password: string;
}

interface ErrorProps {
  msg: string;
  type: string;
}

function Register() {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    password: "",
  });
  const [validationError, setValidationError] = useState<ErrorProps[]>([]);
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Authorization: `Bearer ${token}`,
      await axios.post("/register", formData);
      setFormData({ name: "", email: "", password: "" });
      navigate("/");
    } catch (error) {
      if (axiosMain.isAxiosError(error)) {
        if (error.response?.status === 422) {
          setValidationError(error.response.data.errors);
        } else {
          setError(error.response?.data.message);
        }
      } else {
        console.error("Unexpected error", error);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-2.5">Register</h2>
      <p className="text-sm text-red-600">{error}</p>
      <div
        className="max-w-xl p-6 bg-gray-200 border
       border-gray-200 rounded-lg shadow-sm
        dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <form onSubmit={registerUser}>
          <div className=" mb-6">
            <div>
              <label
                className="block mb-2 text-sm font-medium
               text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="first_name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                value={formData.name}
                className="bg-gray-50 border border-gray-300
                 text-gray-900 text-sm rounded-lg focus:ring-orange-500
                  focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
              />
              {validationError.length > 0 && (
                <p className="text-sm text-red-600">{validationError[0].msg}</p>
              )}
            </div>
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
                placeholder="zyzaviqaho@mailinator.com"
              />
              {validationError.length > 0 && (
                <p className="text-sm text-red-600">{validationError[1].msg}</p>
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
              {validationError.length > 0 && (
                <p className="text-sm text-red-600">{validationError[2].msg}</p>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              className="text-white bg-gray-700 hover:bg-gray-500 cursor-pointer
             focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
             rounded-lg text-sm w-96 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            <p className="self-center text-neutral-700 text-base text-wrap">
              Already have an account?{" "}
              <span className="text-gray-900 underline underline-offset-2">
                <Link to={`/login`}>Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
