import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/Islands";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
	const [isRotating, setIsRotating] = useState(false);
	const [currentStage, setCurrentStage] = useState(1);

	const adjustIslandForScreenSize = () => {
		let screenScale, screenPosition;
		let islandrotation = [0.1, 4.7, 0];

		if (window.innerWidth < 768 && window.innerWidth >= 500) {
			screenScale = [0.9, 0.9, 0.9];
			screenPosition = [4, -6.5, -43.4];
		} else if (window.innerWidth < 500 && window.innerWidth >= 412) {
			screenScale = [0.8, 0.8, 0.8];
			screenPosition = [5, -6.5, -43.4];
		} else if (window.innerWidth < 412 && window.innerWidth >= 290) {
			screenScale = [0.6, 0.6, 0.6];
			screenPosition = [4, -6.5, -43.4];
		} else if (window.innerWidth < 290) {
			screenScale = [0.6, 0.6, 0.6];
			screenPosition = [3, -6.5, -43.4];
		} else {
			screenScale = [1, 1, 1];
			screenPosition = [0, -3, -35.4];
		}

		return [screenScale, screenPosition, islandrotation];
	};

	const adjustPlaneForScreenSize = () => {
		let screenScale, screenPosition;

		if (window.innerWidth < 768) {
			screenScale = [1.5, 1.5, 1.5];
			screenPosition = [0, -1.5, 0];
		} else {
			screenScale = [3, 3, 3];
			screenPosition = [0, -1, -4];
		}

		return [screenScale, screenPosition];
	};

	const [islandScale, IslandPosition, islandrotation] = adjustIslandForScreenSize();
	const [planeScale, planePosition] = adjustPlaneForScreenSize();

	return (
		<section className="w-full h-full relative">
			<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
				{currentStage && <HomeInfo currentStage={currentStage} />}
			</div>
			<Canvas camera={{ near: 0.1, far: 1000 }} className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}>
				<Suspense fallback={<Loader />}>
					<directionalLight position={[1, 1, 1]} intensity={2} />
					<ambientLight intensity={0.5} />
					<hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
					<Bird />
					<Sky isRotating={isRotating} />
					<Plane position={planePosition} scale={planeScale} rotation={[0, 20, 0]} isRotating={isRotating} />
					<Island
						position={IslandPosition}
						setIsRotating={setIsRotating}
						scale={islandScale}
						rotation={islandrotation}
						isRotating={isRotating}
						setCurrentStage={setCurrentStage}
					/>
				</Suspense>
			</Canvas>
		</section>
	);
};

export default Home;
