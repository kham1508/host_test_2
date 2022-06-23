import static_adapter from '@sveltejs/adapter-static';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: static_adapter({
			// Options below are defaults
			pages: 'docs',
			assets: 'docs',
			//fallback:'404.html'
		}),
		prerender: {
			enabled: false
		},
		ssr: false,
		paths: {
			//assets: dev ? 'https://bothness.github.io/area-explorer' : '',
			base: dev ? '/host_test_2' : ''
		}
	}
};

export default config;
