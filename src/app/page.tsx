import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";

export const metadata: Metadata = {
	title: "Bufete Valladares | Asesoría Legal y Notarial de Excelencia en Honduras",
	description: "Firma de abogados y notaría de prestigio en Tegucigalpa, Honduras. Más de 35 años de excelencia en derecho civil, laboral, trámites notariales y administrativos.",
	keywords: [
		"bufete de abogados Honduras",
		"abogados en Tegucigalpa",
		"notaria en Tegucigalpa",
		"derecho civil Honduras",
		"derecho laboral Honduras",
		"tramites notariales",
		"escrituras publicas Honduras",
		"Santiago Valladares Argueta"
	],
	openGraph: {
		title: "Bufete Valladares | Asesoría Legal y Notarial de Excelencia en Honduras",
		description: "Servicios legales, notariales y administrativos de la más alta calidad en Tegucigalpa. Transparencia, ética y responsabilidad social.",
		url: "https://bufetevalladares.com",
		siteName: "Bufete y Notaría Valladares",
		locale: "es_HN",
		type: "website",
		images: [
			{
				url: "/images/torre-alianza.webp",
				width: 1200,
				height: 630,
				alt: "Sede Bufete Valladares - Torre Alianza"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Bufete Valladares | Asesoría Legal y Notarial de Excelencia",
		description: "Firma legal y notaría de reconocido prestigio en Tegucigalpa. Ética jurídica y resultados.",
		images: ["/images/torre-alianza.webp"]
	}
};

export default function Home() {
	return <HomeClient />;
}
