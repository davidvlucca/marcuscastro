import { useRef, useState } from "react";

const MobileHeader = () => {
  const menuRef = useRef<HTMLUListElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="md:hidden">
        {/* Button to toggle the menu */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black hover:text-neutral-700 text-4xl"
        >
          <span>&#9776;</span> {/* Burger menu character */}
        </button>
      </div>

      {/* Mobile menu - Fullscreen with animation */}
      <ul
        ref={menuRef}
        id="menu"
        className={`fixed top-0 left-0 w-full h-full bg-white p-4 space-y-4 transform transition-transform duration-800 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
      >
        {/* Close button at the top */}
        <li className="flex justify-left items-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-black text-3xl mb-6"
          >
            &#10005; <span className="ml-1 text-xl">Close</span>
          </button>
        </li>

        {/* Mobile menu list items */}
        <li>
          <a href="" className="text-black text-2xl hover:text-neutral-800">
            Projects
          </a>
        </li>
        <li>
          <a href="" className="text-black text-2xl hover:text-neutral-800">
            Journal
          </a>
        </li>
        <li>
          <a href="" className="text-black text-2xl hover:text-neutral-800">
            Studio
          </a>
        </li>
        <li>
          <a href="" className="text-black text-2xl hover:text-neutral-800">
            Contact
          </a>
        </li>
      </ul>
    </>
  );
};

export default MobileHeader;
