import logo from "../assets/logo.png";
import { SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
	return (
		<nav className="bg-[#1e1e1e] text-white py-4 px-6 flex justify-between items-center shadow-lg fixed top-0 w-full z-50 backdrop-blur-md bg-opacity-95">
			<a href="#top" className="flex items-center gap-2">
				<img src={logo} alt="Ofix logo" className="h-8 w-8" />
				<span className="text-xl font-bold text-[#facc15]">Ofix</span>
			</a>
			<div className="space-x-6 text-sm md:text-base">
				<a
					href="#propuesta"
					className="hover:text-orange-400 transition-colors">
					Nuestra propuesta
				</a>
				<SignInButton mode="redirect" forceRedirectUrl="/dashboard">
					<button className="hover:text-orange-400 transition-colors">
						Buscar servicios
					</button>
				</SignInButton>
				<a
					href="https://tally.so/r/n95244"
					className="hover:text-orange-400 transition-colors">
					Ofrecer servicios
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
