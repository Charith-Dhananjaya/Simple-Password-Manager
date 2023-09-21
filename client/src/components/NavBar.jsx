import React, { useEffect, useState } from "react";
import logo from "./Assets/pwm.png";
import { Link } from "react-router-dom";
import axios from "axios";

function NavBar() {
  const [noPasswords, setNoPasswords] = useState([]);

  useEffect(() => {
    const fetchNoOfPasswords = async () => {
      try {
        const res = await axios.get("http://localhost:8000/total");
        console.log(res);
        setNoPasswords(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchNoOfPasswords();
  }, []);
  return (
    <div className="fixed flex items-center justify-between w-full h-20 px-4 text-white bg-gradient-to-r from-green-700 via-green-900 to-green-950">
      <div className="flex items-center">
        <img src={logo} alt="" width={60} height={60} />
        <h1 className="ml-2 text-2xl">Password Manager</h1>
      </div>
      <div className="flex">
        <button
          type="button"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-3"
        >
          <Link to="/add">Add new password</Link>
        </button>
        <button
          type="button"
          class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          No. of password
          <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
            {/* {noPasswords} */}
            6
          </span>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
