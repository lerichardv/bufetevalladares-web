import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Article {
	title: string;
	excerpt: string;
	date: string;
	readTime: string;
	category: string;
	slug: string;
	content: string;
}

export class BlogService {
	private static getBlogDirectory(): string {
		// Use process.cwd() combined with path.join for absolute path resolution
		// compatible with Vercel and Netlify serverless deployment environments.
		return path.join(process.cwd(), "src", "content", "blog");
	}

	public static getAllArticles(): Article[] {
		const blogDir = this.getBlogDirectory();
		if (!fs.existsSync(blogDir)) {
			return [];
		}

		const filenames = fs.readdirSync(blogDir);

		const articles = filenames
			.filter((filename) => filename.endsWith(".md"))
			.map((filename) => {
				const filePath = path.join(blogDir, filename);
				const fileContent = fs.readFileSync(filePath, "utf-8");
				const { data, content } = matter(fileContent);

				return {
					title: data.title || "",
					excerpt: data.excerpt || "",
					date: data.date || "",
					readTime: data.readTime || "",
					category: data.category || "",
					slug: data.slug || filename.replace(".md", ""),
					content,
				};
			});

		// Sort articles by date descending (newest first)
		return articles.sort((a, b) => {
			const dateA = new Date(a.date.replace("Julio", "July").replace("Junio", "June").replace("Mayo", "May").replace("Abril", "April").replace("Agosto", "August"));
			const dateB = new Date(b.date.replace("Julio", "July").replace("Junio", "June").replace("Mayo", "May").replace("Abril", "April").replace("Agosto", "August"));
			return dateB.getTime() - dateA.getTime();
		});
	}

	public static getArticleBySlug(slug: string): Article | null {
		const blogDir = this.getBlogDirectory();
		const filePath = path.join(blogDir, `${slug}.md`);

		if (!fs.existsSync(filePath)) {
			return null;
		}

		const fileContent = fs.readFileSync(filePath, "utf-8");
		const { data, content } = matter(fileContent);

		return {
			title: data.title || "",
			excerpt: data.excerpt || "",
			date: data.date || "",
			readTime: data.readTime || "",
			category: data.category || "",
			slug: data.slug || slug,
			content,
		};
	}
}
