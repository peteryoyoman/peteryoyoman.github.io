import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

export async function GET(context) {
	const [blog, books, podcast] = await Promise.all([
		getCollection('blog'),
		getCollection('books'),
		getCollection('podcast'),
	]);

	const items = [
		...blog.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			link: `/blog/${post.id}/`,
		})),
		...books.map((book) => ({
			title: `[Books] ${book.data.title}`,
			description: book.data.description,
			pubDate: book.data.pubDate,
			link: `/books/${book.id}/`,
		})),
		...podcast.map((ep) => ({
			title: `[Podcast] ${ep.data.title}`,
			description: ep.data.description,
			pubDate: ep.data.pubDate,
			link: `/podcast/${ep.id}/`,
		})),
	].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items,
	});
}
