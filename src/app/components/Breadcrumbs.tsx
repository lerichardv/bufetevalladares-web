import Link from "next/link";

interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
	return (
		<nav className="text-xs text-zinc-500 font-sans-serif tracking-wider flex items-center gap-1.5 mb-4">
			<Link href="/" className="hover:text-brand-gold transition-colors">
				INICIO
			</Link>
			{items.map((item, index) => (
				<span key={index} className="flex items-center gap-1.5">
					<span>/</span>
					{item.href ? (
						<Link href={item.href} className="hover:text-brand-gold transition-colors">
							{item.label.toUpperCase()}
						</Link>
					) : (
						<span className="text-brand-gold/70">{item.label.toUpperCase()}</span>
					)}
				</span>
			))}
		</nav>
	);
}
