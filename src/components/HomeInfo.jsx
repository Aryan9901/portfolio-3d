import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const HomeInfo = ({ currentStage }) => {
	if (currentStage === 1)
		return (
			<div className="info-box">
				<h1 className="sm:text-xl sm:leading-snug text-center  text-white ">
					Hi, I'm
					<span className="font-semibold mx-2 text-white">Aryan Gupta</span>
					👋
					<br />A MERN Developer from Bhopal, India
				</h1>
				<div
					className="neo-brutalism-white neo-btn cursor-pointer"
					onClick={() => {
						window.open("https://drive.google.com/file/d/1g0fmuxygPC1ESO2qolMMS5UzdmUXGhPo/view?usp=sharing", "_blank");
					}}
				>
					My Resume
					<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
				</div>
			</div>
		);

	if (currentStage === 2) {
		return (
			<div className="info-box">
				<p className="font-medium sm:text-xl text-center">
					"I'm a MERN developer at Tryidol Technologies and a student,
					<br /> constantly honing my skills through hands-on experience.
				</p>

				<Link to="/about" className="neo-brutalism-white neo-btn">
					Learn more
					<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
				</Link>
			</div>
		);
	}

	if (currentStage === 3) {
		return (
			<div className="info-box">
				<p className="font-medium text-center sm:text-xl">
					Led multiple projects to success over the years. <br /> Curious about the impact?
				</p>

				<Link to="/projects" className="neo-brutalism-white neo-btn">
					Visit my portfolio
					<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
				</Link>
			</div>
		);
	}

	if (currentStage === 4) {
		return (
			<div className="info-box">
				<p className="font-medium sm:text-xl text-center">
					Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
				</p>

				<Link to="/contact" className="neo-brutalism-white neo-btn">
					Let's talk
					<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
				</Link>
			</div>
		);
	}

	return null;
};

export default HomeInfo;
