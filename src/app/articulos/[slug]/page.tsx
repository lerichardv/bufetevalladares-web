import { notFound } from "next/navigation";
import { BlogService } from "../../../lib/blog";
import { marked } from "marked";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";
import * as React from "react";

interface Props {
	params: Promise<{
		slug: string;
	}>;
}

export async function generateStaticParams() {
	const articles = BlogService.getAllArticles();
	return articles.map((article) => ({
		slug: article.slug,
	}));
}

export async function generateMetadata({ params }: Props) {
	const { slug } = await params;
	const article = BlogService.getArticleBySlug(slug);
	if (!article) return {};

	return {
		title: `${article.title} | Bufete y Notaría Valladares`,
		description: article.excerpt,
		openGraph: {
			title: article.title,
			description: article.excerpt,
			type: "article",
			publishedTime: article.date,
		},
	};
}

export default async function ArticlePage({ params }: Props) {
	const { slug } = await params;
	const article = BlogService.getArticleBySlug(slug);

	if (!article) {
		notFound();
	}

	const htmlContent = await marked(article.content);

	return (
		<div className="bg-brand-navy-dark min-h-screen text-zinc-100 relative">
			{/* Background glow effects */}
			<div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#1b1b3a]/30 to-transparent pointer-events-none z-0" />

			<div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 md:pt-40 pb-24">
				<div className="mb-8">
					<Breadcrumbs
						items={[
							{ label: "Artículos", href: "/articulos" },
							{ label: article.title },
						]}
					/>
				</div>

				<article className="space-y-8">
					{/* Header */}
					<div className="space-y-4">
						<div className="flex items-center gap-3 text-xs text-brand-gold font-mono tracking-widest uppercase">
							<span className="bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-1 rounded-md">
								{article.category}
							</span>
							<span>•</span>
							<span>{article.date}</span>
							<span>•</span>
							<span>{article.readTime}</span>
						</div>
						<h1 className="text-3xl md:text-5xl font-serif text-white leading-tight">
							{article.title}
						</h1>
						<p className="text-zinc-400 text-lg leading-relaxed font-light italic">
							{article.excerpt}
						</p>
						<div className="w-24 h-[2px] bg-brand-gold mt-6" />
					</div>

					{/* Content */}
					<div
						className="prose prose-invert prose-zinc max-w-none pt-4 text-zinc-300 leading-relaxed font-light text-sm md:text-base space-y-6 
						prose-headings:font-serif prose-headings:text-white prose-headings:font-normal prose-headings:mt-8 prose-headings:mb-4
						prose-h2:text-2xl prose-h3:text-xl
						prose-p:mb-6
						prose-strong:text-white prose-strong:font-semibold
						prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-ul:space-y-2
						prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-6 prose-ol:space-y-2
						prose-a:text-brand-gold hover:prose-a:text-brand-gold-light prose-a:underline"
						dangerouslySetInnerHTML={{ __html: htmlContent }}
					/>
				</article>

				{/* Back button */}
				<div className="mt-16 pt-8 border-t border-brand-navy-light/20">
					<Link
						href="/articulos"
						className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-brand-gold hover:text-brand-gold-light uppercase transition-colors"
					>
						<svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
						</svg>
						Volver a Artículos
					</Link>
				</div>
			</div>
		</div>
	);
}
