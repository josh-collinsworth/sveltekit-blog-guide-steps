import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	},
	
  preprocess: [
		sveltePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [
				rehypeSlug,
				rehypeAutolinkHeadings,
			],
			layout: 'src/routes/blog/_post.svelte'
		}),
  ],

	extensions: ['.svelte', '.md'],
};

export default config;
