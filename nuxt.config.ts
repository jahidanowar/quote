// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'RSA Quote Builder',
			meta: [
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1',
				},
				{
					charset: 'utf-8',
				},
			],
			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: 'http://localhost:3000/images/favicon.png',
				},
			],
		},
	},

	modules: [
		[
			'@pinia/nuxt',
			{
				autoImports: [
					// automatically imports `defineStore`
					'defineStore', // import { defineStore } from 'pinia'
					// automatically imports `defineStore` as `definePiniaStore`
					['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
				],
			},
		],
	],
	css: [
		'vuetify/lib/styles/main.sass',
		'@mdi/font/css/materialdesignicons.min.css',
	],
	build: {
		transpile: ['vuetify'],
	},
});