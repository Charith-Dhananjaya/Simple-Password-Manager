import React from "react";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const [password, SetPassword] = useState({
    user: "",
    password: "",
    title: "",
    site: "",
    pic: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const passwordId = location.pathname.split("/")[2];

  // console.log(location.pathname.split("/")[2]);

  const handleChange = (e) => {
    SetPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/passwords/${passwordId}`, password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full pt-20 md:h-auto">
      <div className="flex flex-col justify-center">
        <h1 className="flex items-center justify-center p-5 text-3xl font-bold text-white">
          Update Password
        </h1>

        <div class="flex items-center justify-center">
          <form class="bg-gray-800 shadow-md shadow-gray-300 rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2">
                Title
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="title"
                name="title"
                onChange={handleChange}
              />
            </div>
            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2">
                Site address
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="site URL"
                name="site"
                onChange={handleChange}
              />
            </div>
            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2">
                Wallpaper link
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="wallpaper URL"
                name="pic"
                onChange={handleChange}
              />
            </div>
            <div class="mb-4">
              <label class="block text-white text-sm font-bold mb-2">
                Username
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="username"
                name="user"
                onChange={handleChange}
              />
            </div>
            <div class="mb-6">
              <label class="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="********"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div class="flex justify-center">
              <button
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleClick}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
