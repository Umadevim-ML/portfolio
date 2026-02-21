import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX
        } w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${scrolled ? "bg-primary shadow-lg border-b border-white/5 backdrop-blur-md" : "bg-transparent"
        }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Uma Devi &nbsp;
            <span className="sm:block hidden text-[#915EFF]">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="relative group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={`#${nav.id}`}
                className={`relative px-4 py-2 text-[16px] font-medium cursor-pointer transition-colors duration-300 ${active === nav.title ? "text-white" : "text-secondary hover:text-white"
                  }`}
                onClick={() => setActive(nav.title)}
              >
                {nav.title}

                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 rounded-full ${active === nav.title
                      ? "w-full bg-[#915EFF]"
                      : "w-0 group-hover:w-full bg-[#915EFF]"
                    }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <div className="relative p-2 rounded-lg bg-white/5 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-colors">
            <img
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              onClick={() => setToggle(!toggle)}
            />
          </div>

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl animate-scale-up`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
