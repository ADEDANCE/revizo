import Button from "./Button";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();
  return (
    <nav className=" sticky top-0 bg-slate border border-gray-3 py-2 px-3 shadow">
      <div className="">
        <div className=" hidden  lg:flex items-center justify-between">
          <p className=" text-off-white text-2xl font-bold">Revizo</p>

          <div className="  hidden lg:flex justify-between text-off-white gap-6">
            {" "}
            <a href="">HoW It Works</a>
            <a href="">Study tools</a>
          </div>
          <div className=" hidden lg:flex gap-4 items-center">
            <a href="" className=" text-indigo">
              {" "}
              Log In
            </a>
            <Button className=" bg-indigo rounded-2xl"> Start Studying</Button>
          </div>
        </div>

        {/* Hamburger menu for small screens */}
        <div className=" text-off-white flex items-center justify-between lg:hidden w-full">
          <a href="">
            <p className=" text-2xl font-bold">Revizo</p>
          </a>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* mobile menu */}

        {isOpen && (
          <div className=" lg:hidden mt-4 flex flex-col gap-2 items-start text-off-white bg-slate">
            <a
              href="/#howitwork"
              className=" hover:bg-indigo-hover hover:rounded-xl py-2 px-4"
              onClick={closeMenu}
            >
              How It works
            </a>

            <a
              href="/#features"
              className="  hover:bg-indigo-hover  hover:rounded-xl py-2 px-4"
              onClick={closeMenu}
            >
              Study tools
            </a>

            <Button
              className=" text-off-white bg-indigo   w-full mb-3"
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
            >
              Log In
            </Button>
            <Button
              className=" bg-indigo w-full text-off-white "
              onClick={() => {
                setIsOpen(false);
                navigate("/signup");
              }}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
