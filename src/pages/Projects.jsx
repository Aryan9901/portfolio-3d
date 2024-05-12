import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow, github } from "../assets/icons";
import { useState } from "react";

const Projects = () => {
	const [works] = useState(projects);
	const [activeFilter, setActiveFilter] = useState("All");
	const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [filterWork, setFilterWork] = useState();

	function handleWorkFilter(item) {
		setActiveFilter(item);
		setAnimateCard([{ y: 100, opacity: 0 }]);

		setTimeout(function () {
			setAnimateCard([{ y: 0, opacity: 1 }]);

			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	}
	return (
		<section className="max-container">
			<h1 className="head-text">
				My <span className="blue-gradient_text drop-shadow font-semibold">Portfolio</span>
			</h1>

			<p className="text-slate-500 mt-2 leading-relaxed">
				I've embarked on numerous projects throughout the years, but these are the ones I hold closest to my heart. Many of them are
				open-source, so if you come across something that piques your interest, feel free to explore the codebase and contribute your ideas
				for further enhancements. Your collaboration is highly valued!
			</p>

			<div className="flex justify-center md:justify-start items-center flex-wrap mt-16 mb-8">
				{["All", "React JS", "MERN", "Vanilla JS", "Mini Projects"]?.map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`flex py-2 px-4 rounded-lg bg-white font-extrabold cursor-pointer duration-300 transition-all ease-linear my-4 lg:my-2 mr-4 hover:bg-[#313bac] hover:text-white`}
						style={activeFilter === item ? { backgroundColor: "#313bac", color: "white" } : {}}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="flex flex-wrap justify-center items-start gap-16 my-20"
			>
				{filterWork && filterWork.length > 0
					? filterWork.map((project) => (
							<div className="lg:w-[400px] w-full" key={project.name}>
								<div className="block-container w-12 h-12">
									<div className={`btn-back rounded-xl ${project.theme}`} />
									<div className="btn-front rounded-xl flex justify-center items-center">
										<img src={project.iconUrl} alt="threads" className="w-1/2 h-1/2 object-contain" />
									</div>
								</div>
								<div className="w-full my-4">
									<img src={project.imgUrl} alt={project.name} className="w-full  rounded-lg" />
								</div>

								<div className="mt-5 flex flex-col">
									<h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
									<p className="mt-2 text-slate-500">{project.description}</p>
									{project.github && (
										<div className="mt-4 flex items-center gap-3 font-poppins">
											<Link
												to={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="font-semibold text-blue-600"
											>
												Github Link
											</Link>
											<img src={github} alt="arrow" className="w-5 h-5 object-contain" />
										</div>
									)}
									{project.link && (
										<div className="mt-2 flex items-center gap-2 font-poppins">
											<Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
												Live Link
											</Link>
											<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
										</div>
									)}
								</div>
							</div>
					  ))
					: works.map((project) => (
							<div className="lg:w-[400px] w-full" key={project.name}>
								<div className="block-container w-12 h-12">
									<div className={`btn-back rounded-xl ${project.theme}`} />
									<div className="btn-front rounded-xl flex justify-center items-center">
										<img src={project.iconUrl} alt="threads" className="w-1/2 h-1/2 object-contain" />
									</div>
								</div>
								<div className="w-full my-4">
									<img src={project.imgUrl} alt={project.name} className="w-full h-56 rounded-lg" />
								</div>

								<div className="mt-5 flex flex-col">
									<h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
									<p className="mt-2 text-slate-500">{project.description}</p>
									{project.github && (
										<div className="mt-4 flex items-center gap-3 font-poppins">
											<Link
												to={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="font-semibold text-blue-600"
											>
												Github Link
											</Link>
											<img src={github} alt="arrow" className="w-5 h-5 object-contain" />
										</div>
									)}
									{project.link && (
										<div className="mt-2 flex items-center gap-2 font-poppins">
											<Link to={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
												Live Link
											</Link>
											<img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
										</div>
									)}
								</div>
							</div>
					  ))}
			</motion.div>

			<hr className="border-slate-200" />

			<CTA />
		</section>
	);
};

export default Projects;
