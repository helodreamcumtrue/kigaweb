/**
 * Kiga Products Configuration
 * Centralized data structure for all products in the Kiga ecosystem.
 * Update this file as new products are developed or existing product details are confirmed.
 */

export const products = [
	{
		id: 'articlo',
		name: 'Articlo',
		tagline: 'Reach out to hundreds of HR in a click with active mail IDs and ATS-free resume templates.',
		category: 'AI Job Outreach & Career Acceleration',
		status: 'Launched',
		badge: 'Active Product',
		projectNumber: '01',
		tabLabel: 'PROJECT #1',
		date: 'MAR 2026',
		theme: 'dark', // Charcoal folder card
		url: 'https://articlo.online',
		previewImage: '/images/articlo-preview.jpg',
		description:
			'An AI-powered job application and cold outreach platform built to eliminate job hunting fatigue. Reach out to hundreds of HRs in a single click via native Gmail API, beat screening filters with ATS-friendly resume templates, and access verified recruiter mail IDs with 99%+ deliverability.',
		problem:
			'Job seekers spend hundreds of hours manually searching for recruiter emails, getting ghosted, and failing robotic ATS parsers.',
		audience: 'Job seekers, engineers, new grads, and professionals looking for direct recruiter access.',
		accentColor: '#2563EB', // Cobalt blue tab accent
		bgGradient: 'linear-gradient(135deg, #141619 0%, #1A1D23 100%)',
		features: [
			'Reach out to hundreds of HR in a click with rate-limited, high-deliverability Gmail sending',
			'Get ATS free resume templates engineered to beat automated screening parsers',
			'Get active mail IDs of HR and hiring managers across top technology and enterprise firms'
		],
		featured: true
	},
	{
		id: 'ntocks',
		name: 'Ntocks',
		tagline: 'Real-time financial intelligence & news-to-company causal impact platform for Indian equities (NSE & BSE).',
		category: 'Quantitative Financial Intelligence',
		status: 'Coming Soon',
		badge: 'Coming Soon',
		projectNumber: '02',
		tabLabel: 'PROJECT #2',
		date: 'COMING SOON',
		theme: 'yellow', // Vibrant sunshine yellow folder card
		url: '',
		previewImage: '/images/ntocks-preview.jpg',
		description:
			'An institutional-grade quantitative research platform for Indian equities. Transforms macroeconomic events, regulatory filings, and corporate disclosures into structured, evidence-backed market intelligence—with zero hallucinated predictions.',
		problem:
			'Market participants react to sensationalist news and fake price targets without transparent causal mapping of which listed companies are actually affected and by how much.',
		audience: 'Retail investors, quantitative analysts, traders, and equity researchers tracking Indian equities.',
		accentColor: '#F5C22B', // Sunshine yellow accent
		bgGradient: 'linear-gradient(135deg, #F5C22B 0%, #EAB308 100%)',
		features: [
			'5-stage deterministic causal impact engine mapping macro news to affected NSE & BSE tickers',
			'Zero hallucinated predictions with strict verification and live data status tags [LIVE] and [DELAYED 15M]',
			'Cumulative Abnormal Return (CAR) event study analytics preventing look-ahead bias'
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
