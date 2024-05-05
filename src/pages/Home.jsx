import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import sakura from "../assets/sakura.mp3";
import { HomeInfo, Loader } from "../components";
import { soundoff, soundon } from "../assets/icons";
import { Bird, Island, Plane, Sky } from "../models";

const Home = () => {
	const audioRef = useRef(new Audio(sakura));
	audioRef.current.volume = 0.4;
	audioRef.current.loop = true;

	const [currentStage, setCurrentStage] = useState(1);
	const [isRotating, setIsRotating] = useState(false);
	const [isPlayingMusic, setIsPlayingMusic] = useState(false);
	const [showIndicator, setShowIndicator] = useState(true);

	const hideIndicator = () => {
		setShowIndicator(false);
		// Add logic to persist this state in local storage or cookies if needed
	};

	useEffect(() => {
		const handleKeyPress = (event) => {
			if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
				hideIndicator();
			}
		};

		const handleMouseMove = (event) => {
			const startX = event.clientX;
			let moved = false;

			const handleMouseMoveInternal = (moveEvent) => {
				const endX = moveEvent.clientX;
				const diffX = endX - startX;
				if (Math.abs(diffX) > 10) {
					moved = true;
					hideIndicator();
					window.removeEventListener("mousemove", handleMouseMoveInternal);
				}
			};

			const handleMouseUp = () => {
				if (!moved) {
					window.removeEventListener("mousemove", handleMouseMoveInternal);
				}
				window.removeEventListener("mouseup", handleMouseUp);
			};

			window.addEventListener("mousemove", handleMouseMoveInternal);
			window.addEventListener("mouseup", handleMouseUp);
		};

		window.addEventListener("keydown", handleKeyPress);
		window.addEventListener("mousedown", handleMouseMove);

		return () => {
			window.removeEventListener("keydown", handleKeyPress);
			window.removeEventListener("mousedown", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		if (isPlayingMusic) {
			audioRef.current.play();
		}

		return () => {
			audioRef.current.pause();
		};
	}, [isPlayingMusic]);

	const adjustBiplaneForScreenSize = () => {
		let screenScale, screenPosition;

		// If screen width is less than 768px, adjust the scale and position
		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5];
			screenPosition = [0, -1.5, 0];
		} else {
			screenScale = [3, 3, 3];
			screenPosition = [0, -4, -4];
		}

		return [screenScale, screenPosition];
	};

	const adjustIslandForScreenSize = () => {
		let screenScale, screenPosition;

		if (window.innerWidth < 768) {
			screenScale = [0.9, 0.9, 0.9];
			screenPosition = [0, -6.5, -43.4];
		} else {
			screenScale = [1, 1, 1];
			screenPosition = [0, -6.5, -43.4];
		}

		return [screenScale, screenPosition];
	};

	const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
	const [islandScale, islandPosition] = adjustIslandForScreenSize();

	return (
		<section className="w-full h-screen relative">
			<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			{showIndicator && (
				<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center select-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 text-gray-700 hover:text-gray-900 animate-bounce mr-2"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.707 10l3.147-3.146a.5.5 0 0 1 .708.708l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5a.5.5 0 1 1-.708.708L5.707 10z"
							clipRule="evenodd"
						/>
					</svg>
					<p className="text-gray-700 hover:text-gray-900 animate-bounce mr-4">Swipe left or right</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 text-gray-700 hover:text-gray-900 animate-bounce mr-2"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M14.293 10l-3.147 3.146a.5.5 0 0 1-.708-.708l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5a.5.5 0 1 1 .708-.708L14.293 10z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			)}
			{currentStage === 1 && !showIndicator && (
				<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex items-center select-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 text-gray-700 hover:text-gray-900 animate-bounce mr-2"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.707 10l3.147-3.146a.5.5 0 0 1 .708.708l-2.5 2.5a1 1 0 0 0 0 1.414l2.5 2.5a.5.5 0 1 1-.708.708L5.707 10z"
							clipRule="evenodd"
						/>
					</svg>
					<p className="text-gray-700 hover:text-gray-900 animate-bounce mr-4">Swipe left or right</p>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10 text-gray-700 hover:text-gray-900 animate-bounce mr-2"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M14.293 10l-3.147 3.146a.5.5 0 0 1-.708-.708l2.5-2.5a1 1 0 0 0 0-1.414l-2.5-2.5a.5.5 0 1 1 .708-.708L14.293 10z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			)}

			<Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 1, 1]} intensity={2} />
					<ambientLight intensity={0.5} />
					<pointLight position={[10, 5, 10]} intensity={2} />
					<spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

					<Bird />
					<Sky isRotating={isRotating} />
					<Island
						isRotating={isRotating}
						setIsRotating={setIsRotating}
						setCurrentStage={setCurrentStage}
						position={islandPosition}
						rotation={[0.1, 4.7077, 0]}
						scale={islandScale}
					/>
					<Plane isRotating={isRotating} position={biplanePosition} rotation={[0, 20.1, 0]} scale={biplaneScale} />
				</Suspense>
			</Canvas>

			<div className="absolute bottom-2 left-2">
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

export default Home;
