import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const mockTechnicians = [
	{
		id: 1,
		name: "Luis García",
		job: "Electricista",
		hours: "8:00 AM - 4:00 PM",
		studies: "Técnico en electricidad industrial - SENATI",
		experience:
			"5 años de experiencia en instalaciones eléctricas residenciales.",
	},
	{
		id: 2,
		name: "María Pérez",
		job: "Peluquera de mascotas",
		hours: "10:00 AM - 6:00 PM",
		studies: "Curso de grooming canino - PetStyle Academy",
		experience: "3 años en peluquería de perros y gatos.",
	},
	{
		id: 3,
		name: "Carlos Díaz",
		job: "Gasfitero",
		hours: "9:00 AM - 5:00 PM",
		studies: "Técnico en gasfitería - TECSUP",
		experience: "Instalación y reparación de tuberías desde hace 6 años.",
	},
	{
		id: 4,
		name: "Andrea Rojas",
		job: "Mecánica de electrodomésticos",
		hours: "7:00 AM - 3:00 PM",
		studies: "Especialización en mantenimiento de lavadoras - SENATI",
		experience: "4 años en reparación de lavadoras y refrigeradoras.",
	},
	{
		id: 5,
		name: "Juan Torres",
		job: "Jardinero",
		hours: "6:00 AM - 2:00 PM",
		studies: "Curso de diseño y mantenimiento de jardines - IDAT",
		experience: "8 años de experiencia en jardinería y paisajismo.",
	},
	{
		id: 6,
		name: "Rosa Fernández",
		job: "Limpieza del hogar",
		hours: "8:00 AM - 4:00 PM",
		studies: "Curso intensivo de limpieza y organización - SISE",
		experience: "Más de 10 años ofreciendo servicios de limpieza doméstica.",
	},
];

const Dashboard = () => {
	const [search, setSearch] = useState("");

	const filtered = mockTechnicians.filter(
		(t) =>
			t.name.toLowerCase().includes(search.toLowerCase()) ||
			t.job.toLowerCase().includes(search.toLowerCase())
	);

	const whatsappLink = "https://wa.me/51921506486";

	return (
		<div className="min-h-screen bg-[#0f0f0f] text-[#fefae0] px-4 py-20">
			<h1 className="text-4xl font-bold text-center mb-10">
				Técnicos Disponibles
			</h1>

			<div className="max-w-md mx-auto mb-12">
				<input
					type="text"
					placeholder="Buscar por nombre o rubro..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="w-full px-4 py-2 rounded-lg bg-[#1e1e1e] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
				/>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
				{filtered.map((tech) => (
					<div
						key={tech.id}
						className="bg-[#1e1e1e] rounded-2xl p-6 shadow-xl transform transition duration-500 hover:rotate-1 hover:scale-105 hover:shadow-2xl hover:bg-[#2c2c2c] flex flex-col justify-between">
						<div>
							<h2 className="text-xl font-bold text-yellow-400 mb-2">
								{tech.name}
							</h2>
							<p className="text-orange-400 font-medium">{tech.job}</p>
							<p className="text-sm text-gray-300 mt-2">
								<strong>Horas disponibles:</strong> {tech.hours}
							</p>
							<p className="text-sm text-gray-400 mt-2">
								<strong>Estudios:</strong> {tech.studies}
							</p>
							<p className="text-sm text-gray-400 mt-2 mb-4">
								<strong>Experiencia:</strong> {tech.experience}
							</p>
						</div>
						<a
							href={whatsappLink}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-auto inline-flex items-center gap-2 text-green-400 hover:text-green-500 transition">
							<FaWhatsapp className="text-2xl" />
							<span>Contactar por WhatsApp</span>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
