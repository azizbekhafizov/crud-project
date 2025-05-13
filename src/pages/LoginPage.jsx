import React from "react";

const LoginPage = () => {
  return (
    <div className=" bg-gray-600 h-[100vh] flex justify-center items-center">
      <form
        action=""
        className="w-[400px]  container mx-auto  flex flex-col h-[500px] items-center gap-5 justify-center bg-white"
      >
        <h1 className="text-3xl">Login</h1>
        <label htmlFor="text" className="flex flex-col">
          <p className="text-[16px]">User</p>
          <input
            className=" pl-3 border rounded-[2px] outline-none h-13 w-80 text-xl"
            type="text "
            placeholder="Enter User"
          />
        </label>

        <label htmlFor="password">
          <p className="text-[16px]">Password</p>
          <input
            className="pl-3 border rounded-[2px] outline-none h-13 w-80 text-xl"
            type="password"
            placeholder="Enter Password"
          />
        </label>
        <button className="h-13 w-80 bg-blue-500 text-white text-xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
