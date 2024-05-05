import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
	car,
	contact,
	css,
	java,
	tryidol,
	estate,
	express,
	git,
	github,
	html,
	hackhazards,
	shiksha,
	javascript,
	linkedin,
	mongodb,
	motion,
	mui,
	nextjs,
	nodejs,
	pricewise,
	react,
	redux,
	sass,
	snapgram,
	summiz,
	tailwindcss,
	threads,
	typescript,
} from "../assets/icons";

export const skills = [
	{
		imageUrl: html,
		name: "HTML",
		type: "Frontend",
	},
	{
		imageUrl: css,
		name: "CSS",
		type: "Frontend",
	},
	{
		imageUrl: sass,
		name: "Sass",
		type: "Frontend",
	},
	{
		imageUrl: tailwindcss,
		name: "Tailwind CSS",
		type: "Frontend",
	},
	{
		imageUrl: mui,
		name: "Material-UI",
		type: "Frontend",
	},
	{
		imageUrl: javascript,
		name: "JavaScript",
		type: "Frontend",
	},
	{
		imageUrl: typescript,
		name: "TypeScript",
		type: "Frontend",
	},
	{
		imageUrl: react,
		name: "React",
		type: "Frontend",
	},
	{
		imageUrl: motion,
		name: "Motion",
		type: "Animation",
	},
	{
		imageUrl: redux,
		name: "Redux",
		type: "State Management",
	},
	{
		imageUrl: nodejs,
		name: "Node.js",
		type: "Backend",
	},
	{
		imageUrl: express,
		name: "Express",
		type: "Backend",
	},
	{
		imageUrl: mongodb,
		name: "MongoDB",
		type: "Database",
	},
	{
		imageUrl: nextjs,
		name: "Next.js",
		type: "Frontend",
	},
	{
		imageUrl: git,
		name: "Git",
		type: "Version Control",
	},
	{
		imageUrl: java,
		name: "Java",
		type: "Languages",
	},
	{
		imageUrl: github,
		name: "GitHub",
		type: "Version Control",
	},
];

export const experiences = [
	{
		title: "Full Stack Developer",
		company_name: "Tryidol Technologies",
		icon: tryidol,
		iconBg: "#accbe1",
		date: "Febuary 2024 - present",
		points: [
			"Responsible for designing and developing the company website from scratch.",
			"Engineered responsive web pages using React.js, ensuring an enhanced user experience across multiple devices.",
			"Build a CRM Application for vehicle rental services, streamlining processes for efficient bill generation and client management.",
			"I seamlessly integrated functionalities for data retrieval from both Excel and CSV files, enhancing the application&apos;s versatility and utility.",
		],
	},
	{
		title: "Hackhazards Winner",
		company_name: "BPIT, Delhi",
		icon: hackhazards,
		iconBg: "#fbc3bc",
		date: "16 March 2024 - 17 March 2024",
		points: [
			"Developed 'My Air Visual', a web application aggregating air quality data from diverse sources to facilitate user understanding of air quality levels in various cities.",
			"Secured 1st place out of 150 participants in a hackathon by employing a combination of hardware and software solutions.",
			"Designed and implemented a Discord clone as part of the hackathon project.",
			"Successfully addressed a significant business problem related to pollution in Delhi, demonstrating problem-solving skills and practical application of technology for social and environmental impact.",
		],
	},
	{
		title: "Shiksha Arpan Web Developent Challenge",
		company_name: "BlackR Enterprises & Fixpoint Pvt Ltd.",
		icon: shiksha,
		iconBg: "#b7e4c7",
		date: "18 July 2023 - 06 August 2023",
		points: [
			"Led the design and development of the User Interface (UI) for two critical features of the Shiksha Arpan Platform, emphasizing visual appeal and user-friendliness.",
			"Crafted the UI for the Community Discussion Forum feature, fostering engagement and interaction among platform users through intuitive design and seamless navigation.",
			"Designed the UI for the Enhanced Tutor Matching Algorithm feature, ensuring ease of use and clarity in presenting tutor recommendations to users.",
		],
	},
];

export const socialLinks = [
	{
		name: "Contact",
		iconUrl: contact,
		link: "/contact",
	},
	{
		name: "GitHub",
		iconUrl: github,
		link: "https://github.com/Aryan9901",
	},
	{
		name: "LinkedIn",
		iconUrl: linkedin,
		link: "https://www.linkedin.com/in/agaryan",
	},
];

export const projects = [
	{
		iconUrl: pricewise,
		theme: "btn-back-red",
		name: "Amazon Price Tracker",
		description:
			"Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
		link: "https://github.com/adrianhajdin/pricewise",
	},
	{
		iconUrl: threads,
		theme: "btn-back-green",
		name: "Full Stack Threads Clone",
		description:
			'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
		link: "https://github.com/adrianhajdin/threads",
	},
	{
		iconUrl: car,
		theme: "btn-back-blue",
		name: "Car Finding App",
		description: "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
		link: "https://github.com/adrianhajdin/project_next13_car_showcase",
	},
	{
		iconUrl: snapgram,
		theme: "btn-back-pink",
		name: "Full Stack Instagram Clone",
		description:
			"Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
		link: "https://github.com/adrianhajdin/social_media_app",
	},
	{
		iconUrl: estate,
		theme: "btn-back-black",
		name: "Real-Estate Application",
		description: "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
		link: "https://github.com/adrianhajdin/projects_realestate",
	},
	{
		iconUrl: summiz,
		theme: "btn-back-yellow",
		name: "AI Summarizer Application",
		description: "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
		link: "https://github.com/adrianhajdin/project_ai_summarizer",
	},
];
