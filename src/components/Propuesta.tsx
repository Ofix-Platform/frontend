const features = [
	{
		title: "Variedad de servicios",
		desc: "Reparaciones, limpieza, mascotas, jardinería y más.",
	},
	{
		title: "Técnicos verificados",
		desc: "Validamos identidades y antecedentes.",
	},
	{ title: "Pagos seguros", desc: "Tus pagos están protegidos." },
	{
		title: "Ahorra tiempo y dinero",
		desc: "Encuentra lo que necesitas en minutos.",
	},
	{ title: "Para todos los espacios", desc: "Desde casas a oficinas." },
	{ title: "Fácil de usar", desc: "Diseñado para cualquier persona." },
];

const Propuesta = () => {
	return (
		<section id="propuesta" className="py-16 px-6 bg-[#1a1a1a]">
			<h2 className="text-3xl font-bold text-center text-orange-400 mb-10">
				Nuestra propuesta
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{features.map((f, i) => (
					<div
						key={i}
						className="bg-[#2a2a2a] p-6 rounded-xl shadow-xl transform transition-transform hover:rotate-1 hover:scale-105 text-white">
						<h3 className="font-bold text-[#facc15] text-lg mb-2">{f.title}</h3>
						<p className="text-gray-300 text-sm">{f.desc}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Propuesta;
