/**
 * Kiga Site Configuration
 * Centralized settings for brand information, contact coordinates, and navigation.
 */

export const siteConfig = {
	name: 'Kiga',
	tagline: 'Small Solutions. Meaningful Impact.',
	description:
		'Kiga brings together focused digital products, each built to solve a particular problem for a particular audience.',
	url: 'https://kiga.io', // To be updated once production domain is confirmed
	contactEmail: 'hello@kiga.io', // Configurable business email placeholder
	location: 'India & Remote Worldwide',
	officeAddress: {
		street: 'Kiga Digital Labs',
		city: 'New Delhi & Global Remote',
		note: 'Operating asynchronously worldwide'
	},
	navLinks: [
		{ name: 'Home', href: '/' },
		{ name: 'Products', href: '/#products' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Contact Us', href: '/contact' }
	],
	cta: {
		label: 'Get in Touch',
		href: '/contact'
	},
	socialLinks: [
		{ name: 'X / Twitter', href: 'https://twitter.com', configured: false },
		{ name: 'LinkedIn', href: 'https://linkedin.com', configured: false },
		{ name: 'GitHub', href: 'https://github.com', configured: false }
	]
};
