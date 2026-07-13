import {
  FaBell,
  FaMoon,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 flex justify-between items-center">

      <div>

        <h1 className="text-4xl font-bold">
          Good Evening 👋
        </h1>

        <p className="text-gray-500 mt-1">
          Stay productive today.
        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2">

          <FaSearch className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none ml-3"
          />

        </div>

        <FaBell
          className="text-2xl text-blue-600 cursor-pointer"
        />

        <FaMoon
          className="text-2xl text-blue-600 cursor-pointer"
        />

        <FaUserCircle
          className="text-4xl text-blue-600 cursor-pointer"
        />

      </div>

    </div>
  );
}

export default Navbar;