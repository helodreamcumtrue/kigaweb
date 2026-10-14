/**
 * Kiga Products Configuration
 * Centralized data structure for all products in the Kiga ecosystem.
 * Update this file as new products are developed or existing product details are confirmed.
 */

export const products = [
	{
		id: 'articlo',
		name: 'Articlo',
		tagline: 'From fragmented drafts to focused, published stories that reach readers.',
		category: 'Digital Publishing & Content',
		status: 'Launched',
		badge: 'Active Product',
		projectNumber: '01',
		tabLabel: 'PROJECT #1',
		date: 'MAR 3, 2026',
		theme: 'dark', // Charcoal folder card
		url: '', // e.g. 'https://articlo.kiga.io'
		previewImage: '/images/articlo-preview.jpg',
		description:
			'A dedicated digital solution purpose-built to address publishing and editorial workflow challenges. Developed under the Kiga product umbrella with an emphasis on speed, precision, and restrained utility.',
		problem:
			'Existing digital publishing workflows are over-engineered, slow, and loaded with clutter writers never use.',
		audience: 'Writers, creators, and publishing teams seeking streamlined output.',
		accentColor: '#2563EB', // Cobalt blue tab accent from reference
		bgGradient: 'linear-gradient(135deg, #141619 0%, #1A1D23 100%)',
		features: [
			'Streamlined publishing interface designed for distraction-free output',
			'Focused architecture addressing specific digital publishing bottlenecks',
			'Engineered for high performance with minimal cognitive overhead'
		],
		featured: true
	},
	{
		id: 'bazinga',
		name: 'Bazinga',
		tagline: 'Getting teams from everyday chaos to synchronized shipping without the panic.',
		category: 'Interactive & Engagement Micro-Tool',
		status: 'Launched',
		badge: 'Active Product',
		projectNumber: '02',
		tabLabel: 'PROJECT #2',
		date: 'JAN 3, 2026',
		theme: 'yellow', // Vibrant sunshine yellow folder card
		url: '', // e.g. 'https://bazinga.kiga.io'
		previewImage: '/images/bazinga-preview.jpg',
		description:
			'An independent product engineered to solve a distinct niche challenge. Designed with immediate utility and direct user delight at its core, as part of the unified Kiga product ecosystem.',
		problem:
			'Niche engagement tasks are often forced into bulky, monolithic software packages that impede rather than empower workflows.',
		audience: 'Engineers, product leads, and teams seeking quick, targeted execution.',
		accentColor: '#F5C22B', // Sunshine yellow accent
		bgGradient: 'linear-gradient(135deg, #F5C22B 0%, #EAB308 100%)',
		features: [
			'Single-purpose architecture prioritizing speed and user focus',
			'Intuitive interaction patterns tailored to niche user requirements',
			'Seamless standalone utility requiring zero setup friction'
		],
		featured: true
	}
];

export const upcomingExplorations = [
	{
		id: 'explore-1',
		phase: 'Phase 01',
		status: 'Exploring',
		title: 'Creator Workflow Automation',
		description:
			'Investigating recurring bottlenecks in independent creator workflows to discover whether a lightweight, standalone utility can replace multi-step friction.',
		timeline: 'Research Stage'
	},
	{
		id: 'explore-2',
		phase: 'Phase 02',
		status: 'In Development',
		title: 'Niche Analytics Micro-Tool',
		description:
			'Prototyping a focused metric observer built specifically for micro-teams who want instant clarity without navigating enterprise dashboard clutter.',
		timeline: 'Internal Prototyping'
	},
	{
		id: 'explore-3',
		phase: 'Phase 03',
		status: 'Concept Scoping',
		title: 'Community Utility Platform',
		description:
			'Evaluating structured collaboration tools designed for small community operators needing lightweight, single-task coordination.',
		timeline: 'Concept Scoping'
	}
];
