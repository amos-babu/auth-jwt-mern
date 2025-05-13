function Register() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-semibold mb-2.5">Register</h2>
      <div
        className="max-w-xl p-6 bg-white border
       border-gray-200 rounded-lg shadow-sm hover:bg-gray-100
        dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <form>
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
                className="bg-gray-50 border border-gray-300
                 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                  focus:border-blue-500 block w-96 p-2.5 dark:bg-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
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
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 
                p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="amosbabu@flowbite.com"
                required
              />
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
                className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600
                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                  dark:focus:border-blue-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800
             focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
             rounded-lg text-sm w-96 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600
              dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
