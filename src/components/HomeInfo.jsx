import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
	<div className="info-box">
		<p className="font-medium sm:text-xl text-center">{text}</p>
		<Link to={link} className="neo-brutalism-white neo-btn w-52">
			{btnText}
			<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
		</Link>
	</div>
);

const renderContent = {
	1: (
		<h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
			Hi, I&apos;m
			<span className="font-semibold mx-2 text-white">Adrian</span>
			👋
			<br />A Software Engineer from Croatia
		</h1>
	),
	2: <InfoBox text="Full Stack Developer" link="/about" btnText="Learn More" />,
	3: <InfoBox text={`Led multiple projects to success over the years. Curious about the impact?`} link="/projects" btnText="Visit my portfolio" />,
	4: <InfoBox text={"Need a project done or looking for a dev? Im just a few keystrokes away"} link="/contact" btnText="Let's talk" />,
};

const HomeInfo = ({ currentStage }) => {
	return renderContent[currentStage] || null;
};

export default HomeInfo;
