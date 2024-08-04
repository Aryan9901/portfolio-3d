import { useState } from "react";

export const StartDemoModal = ({ onStartDemo }) => (
	<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
		<div className="bg-white p-4 rounded shadow-lg">
			<h2 className="text-lg font-semibold">Start the Demo?</h2>
			<p className="mt-2">Would you like a quick tour of the website?</p>
			<div className="mt-4 flex justify-end">
				<button onClick={onStartDemo} className="bg-blue-500 text-white px-4 py-2 rounded">
					Start
				</button>
			</div>
		</div>
	</div>
);
