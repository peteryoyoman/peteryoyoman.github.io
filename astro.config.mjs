// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://peteryoyoman.github.io',
	integrations: [mdx(), sitemap()],
	fonts: [
		{
			// 標題：Fraunces（有個性的柔和襯線）
			provider: fontProviders.google(),
			name: 'Fraunces',
			cssVariable: '--font-fraunces',
			weights: [400, 600, 700],
			fallbacks: ['Georgia', 'serif'],
		},
		{
			// 內文：Nunito Sans（溫暖圓潤的無襯線）
			provider: fontProviders.google(),
			name: 'Nunito Sans',
			cssVariable: '--font-nunito',
			weights: [400, 600, 700],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],
});
