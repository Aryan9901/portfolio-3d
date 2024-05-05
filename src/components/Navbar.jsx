import { NavLink } from "react-router-dom";

// import logo from "../assets/images/logo.png";
import { logo } from "../assets/images";

const Navbar = () => {
	return (
		<header className="header">
			<NavLink to="/" className="p-4 bg-white rounded-md">
				<img src={logo} alt="logo" className="w-20 object-contain" />
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink to="/about" className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>
					About
				</NavLink>
				<NavLink to="/projects" className={({ isActive }) => (isActive ? "text-blue-600" : "text-black")}>
					Projects
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
