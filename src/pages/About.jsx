import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { CTA, StartDemoModal } from "../components";
import { experiences, skills } from "../constants";
import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const About = () => {
	const audioRef = useRef(new Audio(sakura));
	audioRef.current.volume = 0.4;
	audioRef.current.loop = true;

	const [showDemoModal, setShowDemoModal] = useState(!localStorage.getItem("tutorialDone"));
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);

	const startDemo = () => {
		setShowDemoModal(false);
		localStorage.setItem("tutorialDone", "true");

		const driverInstance = driver({
			showProgress: true,
			steps: [
				{
					element: ".sound-control",
					popover: {
						title: "Sound",
						description: "Enjoy a cool sound as you explore the scene!",
						position: "bottom",
					},
				},
				{
					element: ".ddesign",
					popover: {
						title: "3D Experience",
						description: "Explore the 3D Island",
						position: "bottom",
					},
				},
				{
					element: ".projects-section",
					popover: {
						title: "Projects Section",
						description: "Explore my projects and see what I am working on.",
						position: "bottom",
					},
				},
			],
		});
		driverInstance.drive();
	};

	useEffect(() => {
		if (isPlayingMusic) {
			audioRef.current.play();
		}

		return () => {
			audioRef.current.pause();
		};
	}, [isPlayingMusic]);

	return (
		<section className="max-container relative">
			{showDemoModal && <StartDemoModal onStartDemo={startDemo} />}
			<h1 className="head-text">
				Hello, I'm
				<span className="blue-gradient_text font-semibold drop-shadow"> Aryan Gupta </span>
				👋
			</h1>

			<div className="mt-5 flex flex-col gap-3 text-slate-500">
				<p>
					I'm a MERN developer residing in Bhopal, India. Currently, I'm employed at Tryidol Technologies as a MERN developer and am also
					pursuing my studies. Continuously refining my skills through practical application, I've led numerous projects to fruition.
					Intrigued by the potential impact, I strive to make a difference through my work.
				</p>
			</div>

			<div className="py-10 flex flex-col">
				<h3 className="subhead-text">My Skills</h3>

				<div className="mt-16 flex flex-wrap gap-12">
					{skills.map((skill) => (
						<div className="flex flex-col items-center justify-center gap-1" key={skill.name}>
							<Link to={skill.link} target="_blank" className="block-container w-20 h-20">
								<div className="btn-back rounded-xl" />
								<div className="btn-front rounded-xl flex justify-center items-center">
									<img src={skill.imageUrl} alt={skill.name} className="w-1/2 h-1/2 object-contain" />
								</div>
							</Link>
							<p>{skill.name}</p>
						</div>
					))}
				</div>
			</div>

			<div className="py-16" id="work">
				<h3 className="subhead-text">Work Experience & Achievements</h3>
				<div className="mt-5 flex flex-col gap-3 text-slate-500">
					<p>
						I've worked with various companies, continually enhancing my skills and collaborating with talented professionals. Here's an
						overview:
					</p>
				</div>

				<div className="mt-12 flex">
					<VerticalTimeline>
						{experiences.map((experience, index) => (
							<VerticalTimelineElement
								key={experience.company_name}
								date={experience.date}
								iconStyle={{ background: experience.iconBg }}
								icon={
									<div className="flex justify-center items-center w-full h-full">
										<img src={experience.icon} alt={experience.company_name} className="w-[80%] h-[60%] object-contain" />
									</div>
								}
								contentStyle={{
									borderBottom: "8px",
									borderStyle: "solid",
									borderBottomColor: experience.iconBg,
									boxShadow: "none",
								}}
							>
								<div>
									<Link to={experience.link} target="_blank">
										<h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>
									</Link>
									<Link to={experience.link} target="_blank" className="flex items-center justify-start gap-2 py-1">
										<p className="text-black-500 font-medium text-base" style={{ margin: 0 }}>
											{experience.company_name}
										</p>
										{experience.location && <span className="text-xl text-gray-800">|</span>}
										<p className="block" style={{ margin: 0, fontSize: ".9rem" }}>
											{experience.location}
										</p>
									</Link>
								</div>

								<ul className="my-5 list-disc ml-5 space-y-2">
									{experience.points.map((point, index) => (
										<li key={`experience-point-${index}`} className="text-black-500/80 font-normal pl-1 text-sm">
											{point}
										</li>
									))}
								</ul>
							</VerticalTimelineElement>
						))}
					</VerticalTimeline>
				</div>
			</div>

			<hr className="border-slate-200" />

			<CTA />
			<div className="fixed bottom-6 sound-control left-6 md:bottom-6 md:left-6 animate-pulse">
				<img
					src={!isPlayingMusic ? soundoff : soundon}
					alt="jukebox"
					onClick={() => setIsPlayingMusic(!isPlayingMusic)}
					className="w-10 h-10 cursor-pointer object-contain"
				/>
			</div>
		</section>
	);
};

export default About;
