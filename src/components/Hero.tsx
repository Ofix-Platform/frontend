import { SignInButton } from "@clerk/clerk-react";

const Hero = () => {
	return (
		<section className="text-center py-20 px-6 bg-[#121212]">
			<h1 className="text-4xl md:text-5xl font-extrabold text-[#facc15] mb-6 transform transition-transform hover:scale-105">
				Encuentra u ofrece servicios técnicos con estilo
			</h1>
			<p className="text-lg text-gray-300 max-w-xl mx-auto mb-10">
				Ofix conecta personas con expertos en reparaciones, limpieza, cuidado de
				mascotas y más.
			</p>
			<div className="flex flex-col sm:flex-row justify-center gap-6">
				<SignInButton mode="redirect" forceRedirectUrl="/dashboard">
					<button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 transform">
						Buscar servicios
					</button>
				</SignInButton>
				<a
					href="https://tally.so/r/n95244"
					className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg transition-transform hover:scale-105 transform">
					Ofrecer servicios
				</a>
			</div>
		</section>
	);
};

export default Hero;
