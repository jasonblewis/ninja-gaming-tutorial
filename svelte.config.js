import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
/* const config = {
	kit: {
		adapter: adapter()
	}
};
export default config;
 */


export default {
	kit: {
	  adapter: adapter({
		// default options are shown
		out: 'build',
		precompress: false,
		envPrefix: '',
		polyfill: true
		})
	}
  };