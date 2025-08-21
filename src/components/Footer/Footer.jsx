import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className=" grid grid-cols-4  bg-green-950 text-white p-7 gap-5 ">
        <div className=" col-span-2">
          <h1 className=" font-bold text-3xl">ATARAXIS</h1>
          <p className=" my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            mollitia repellat voluptas eius. Modi vel cum architecto mollitia
            laborum vero?
          </p>
          <button className=" font-medium cursor-pointer p-4 outline-white outline-2 hover:bg-white hover:text-green-950 transition-all duration-300 mt-4">
            BACK TO TOP
          </button>
        </div>
        <div>
          <h1 className=" font-bold text-2xl">Site Map</h1>
          <ul className=" flex flex-col gap-2 mt-4  ">
            <NavLink
              to=""
              className={({ isActive }) =>
                ` ${isActive ? 'text-orange-500' : 'text-amber-50'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                ` ${isActive ? 'text-orange-500' : 'text-amber-50'}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                ` ${isActive ? 'text-orange-500' : 'text-amber-50'}`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/Github"
              className={({ isActive }) =>
                ` ${isActive ? 'text-orange-500' : 'text-amber-50'}`
              }
            >
              Github
            </NavLink>
          </ul>
        </div>
        <div>
          <h1 className=" text-2xl font-bold ">Legal</h1>
          <ul className=" flex flex-col gap-2 mt-4  ">
            <NavLink to="/Privacy">Privacy Policy</NavLink>
            <NavLink to="/Terms">Terms of Service</NavLink>
            <NavLink to="/Cookies">Cookie Policy</NavLink>
          </ul>
        </div>
      </div>
      <footer className=" bg-orange-950 text-white p-4 text-center">
        <p className="text-sm">© 2023 Ataraxis. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
