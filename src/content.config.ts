import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 一般網誌
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

// 讀書心得
const books = defineCollection({
	loader: glob({ base: './src/content/books', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			author: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			rating: z.number().min(1).max(5).optional(),
			coverImage: z.optional(image()),
			tags: z.array(z.string()).optional(),
		}),
});

// 旅行紀錄（以一趟旅程／相簿為單位）
const travel = defineCollection({
	loader: glob({ base: './src/content/travel', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			location: z.string().optional(),
			coverImage: image(),
			images: z.array(image()).optional(),
		}),
});

// Podcast
const podcast = defineCollection({
	loader: glob({ base: './src/content/podcast', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			episode: z.number().optional(),
			audioUrl: z.string(),
			duration: z.string().optional(),
			coverImage: z.optional(image()),
		}),
});

// 馬拉松紀錄
const races = defineCollection({
	loader: glob({ base: './src/content/races', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			raceDate: z.coerce.date(),
			distance: z.string(),
			finishTime: z.string(),
			location: z.string().optional(),
			pace: z.string().optional(),
			description: z.string(),
			heroImage: z.optional(image()),
		}),
});

export const collections = { blog, books, travel, podcast, races };
