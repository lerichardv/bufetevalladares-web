import type { Metadata } from "next";
import ArticulosClient from "../components/ArticulosClient";

export const metadata: Metadata = {
	title: "Opinión Legal y Artículos | Bufete y Notaría Valladares",
	description: "Análisis jurídicos y artículos sobre derecho notarial, laboral y corporativo en Honduras. Manténgase informado sobre la legislación hondureña actual.",
	keywords: [
		"opinion juridica Honduras",
		"derecho notarial Honduras",
		"derecho laboral Honduras",
		"derecho corporativo Honduras",
		"fideicomisos de garantia",
		"propiedad horizontal Tegucigalpa",
		"contratos civiles",
		"asesoria juridica"
	],
	openGraph: {
		title: "Opinión Legal y Artículos | Bufete y Notaría Valladares",
		description: "Análisis detallados sobre legislación, contratos, derecho notarial y laboral en Honduras por profesionales de reconocida honorabilidad.",
		url: "https://bufetevalladares.com/articulos",
		siteName: "Bufete y Notaría Valladares",
		locale: "es_HN",
		type: "website",
		images: [
			{
				url: "/images/torre-alianza.webp",
				width: 1200,
				height: 630,
				alt: "Artículos y Opiniones - Bufete Valladares"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Opinión Legal y Artículos | Bufete y Notaría Valladares",
		description: "Análisis y divulgación jurídica sobre derecho laboral, notarial y corporativo en Honduras.",
		images: ["/images/torre-alianza.webp"]
	}
};

export default function ArticulosPage() {
	return <ArticulosClient />;
}
