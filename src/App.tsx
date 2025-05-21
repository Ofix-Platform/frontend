import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Propuesta from "./components/Propuesta";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { useLocation } from "react-router-dom";

const App = () => {
	const location = useLocation();

	if (location.pathname === "/dashboard") {
		return (
			<>
				<SignedIn>
					{/* El botón del usuario aparece arriba a la derecha */}
					<header className="absolute top-4 right-4 z-50">
						<UserButton />
					</header>
					<Dashboard />
				</SignedIn>
				<SignedOut>
					<SignInButton mode="redirect" forceRedirectUrl="/dashboard" />
				</SignedOut>
			</>
		);
	}

	return (
		<div className="min-h-screen bg-[#0f0f0f] text-[#fefae0] scroll-smooth">
			<Navbar />
			<div id="top" className="h-16" />
			<Hero />
			<Propuesta />
			<Footer />
		</div>
	);
};

export default App;
