import { NavLink } from "react-router-dom";

// import logo from "../assets/images/logo.png";
import { logo } from "../assets/images";

const Navbar = () => {
	return (
		<header className="header">
			<NavLink to="/" className="p-2 bg-white about-section rounded-md">
				<img src={logo} alt="logo" className="w-10 object-contain" />
			</NavLink>
			<nav className="flex text-lg gap-7 font-medium">
				<NavLink to="/home" className={({ isActive }) => (isActive ? "text-white ddesign" : "text-black ddesign")}>
					3D Experience
				</NavLink>
				<NavLink to="/projects" className={({ isActive }) => (isActive ? "text-blue-600 projects-section" : "text-black projects-section")}>
					Projects
				</NavLink>
			</nav>
		</header>
	);
};

export default Navbar;
