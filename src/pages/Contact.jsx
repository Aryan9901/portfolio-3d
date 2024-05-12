import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";
import { email, mobile } from "../assets/images";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const { alert, showAlert, hideAlert } = useAlert();
	const [loading, setLoading] = useState(false);
	const [currentAnimation, setCurrentAnimation] = useState("idle");

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};

	const handleFocus = () => setCurrentAnimation("walk");
	const handleBlur = () => setCurrentAnimation("idle");

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setCurrentAnimation("hit");

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					name: form.name,
					email: form.email,
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					showAlert({
						show: true,
						text: "Thank you for your message 😃",
						type: "success",
					});

					setTimeout(() => {
						hideAlert(false);
						setCurrentAnimation("idle");
						setForm({
							name: "",
							email: "",
							message: "",
						});
					}, [3000]);
				},
				(error) => {
					setLoading(false);
					console.error(error);
					setCurrentAnimation("idle");

					showAlert({
						show: true,
						text: "I didn't receive your message 😢",
						type: "danger",
					});
				}
			);
	};

	return (
		<section className="relative max-container">
			{alert.show && <Alert {...alert} />}

			<h1 className="head-text text-center w-full md:w-3/5 mx-auto">Take a coffee ☕ & 💬 chat with me</h1>

			<div className=" w-full md:w-4/5 flex justify-evenly gap-4 items-center flex-wrap-reverse mt-8 mb-1 mx-auto">
				<div className="min-w-[290px] flex justify-start items-center my-4 p-4 md:p-6 rounded-xl cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out hover:shadow-inner">
					<img src={email} alt="email" className="w-10 h-10 mx-3" />
					<a href="mailto:911aaryan@gmail.com" className="font-semibold no-underline">
						911aaryan@gmail.com
					</a>
				</div>
				<div className="min-w-[290px] flex justify-start items-center my-4 p-4 md:p-6 rounded-xl cursor-pointer bg-[#fef4f5] transition-all duration-300 ease-in-out hover:shadow-inner">
					<img src={mobile} alt="mobile" className="w-10 h-10 mx-3" />
					<a href="tel:+917415721902" className="font-semibold no-underline">
						+91 7415721902
					</a>
				</div>
			</div>

			<div className=" flex lg:flex-row flex-col ">
				<div className="flex-1 min-w-[50%] flex flex-col">
					<form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7 mt-14">
						<label className="text-black-500 font-semibold">
							Name
							<input
								type="text"
								name="name"
								className="input"
								placeholder="Your Name"
								required
								value={form.name}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<label className="text-black-500 font-semibold">
							Email
							<input
								type="email"
								name="email"
								className="input"
								placeholder="Your email"
								required
								value={form.email}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>
						<label className="text-black-500 font-semibold">
							Your Message
							<textarea
								name="message"
								rows="4"
								className="textarea"
								placeholder="Write your thoughts here..."
								value={form.message}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
							/>
						</label>

						<button type="submit" disabled={loading} className="btn" onFocus={handleFocus} onBlur={handleBlur}>
							{loading ? "Sending..." : "Submit"}
						</button>
					</form>
				</div>

				<div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
					<Canvas
						camera={{
							position: [0, 0, 5],
							fov: 75,
							near: 0.1,
							far: 1000,
						}}
					>
						<directionalLight position={[0, 0, 1]} intensity={2.5} />
						<ambientLight intensity={1} />
						<pointLight position={[5, 10, 0]} intensity={2} />
						<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

						<Suspense fallback={<Loader />}>
							<Fox currentAnimation={currentAnimation} position={[0.5, 0.35, 0]} rotation={[12.629, -0.6, 0]} scale={[0.5, 0.5, 0.5]} />
						</Suspense>
					</Canvas>
				</div>
			</div>
		</section>
	);
};

export default Contact;
