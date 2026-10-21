<script>
	import TeamCard from '#lib/components/TeamCard.svelte';
	import { products } from '#lib/data/products.js';
</script>

<svelte:head>
	<title>About Us — kiga* digital product collective</title>
	<meta
		name="description"
		content="kiga* builds hyper-focused, single-purpose software utilities like Articlo and Ntocks. Zero monolithic bloat, just purpose-built tools that do one job with unmatched clarity."
	/>
</svelte:head>

<div class="kiga-about-page">
	<!-- =========================================================================
	     1. HERO SECTION (PURPOSE & MANIFESTO)
	     ========================================================================= -->
	<section class="about-hero-section">
		<div class="site-container hero-inner-container">
			<!-- Breadcrumb -->
			<div class="hero-breadcrumb-wrap">
				<a href="/" class="breadcrumb-main">kiga*</a>
				<span class="breadcrumb-sep">/</span>
				<span class="breadcrumb-tag">about us</span>
			</div>

			<!-- Pill Tag -->
			<div class="hero-pill-tag">
				<span class="sparkle">✦</span>
				<span>PURPOSE-BUILT DIGITAL UTILITIES</span>
			</div>

			<!-- Headline -->
			<h1 class="about-hero-headline">
				Small solutions.<br />
				<span class="highlight-italic">Relentless impact.</span>
			</h1>

			<!-- Mission Manifesto -->
			<p class="about-hero-subtitle">
				Most modern software is bloated, sluggish, and packed with complex features you never asked for.
				At <strong>kiga*</strong>, we engineer hyper-focused digital utilities designed to eliminate acute real-world friction with surgical speed, precision, and zero clutter.
			</p>

			<!-- Live Impact Metric Tiles -->
			<div class="metrics-grid">
				<div class="metric-card">
					<div class="metric-num">02</div>
					<div class="metric-label">Active Core Utilities</div>
					<div class="metric-sub">Articlo &amp; Ntocks in production</div>
				</div>
				<div class="metric-card">
					<div class="metric-num">5+ hrs</div>
					<div class="metric-label">Saved Weekly / User</div>
					<div class="metric-sub">Eliminating workflow friction</div>
				</div>
				<div class="metric-card">
					<div class="metric-num">&lt; 50ms</div>
					<div class="metric-label">Interaction Latency</div>
					<div class="metric-sub">Built for instantaneous speed</div>
				</div>
				<div class="metric-card">
					<div class="metric-num">0%</div>
					<div class="metric-label">Enterprise Bloat</div>
					<div class="metric-sub">Pure single-purpose utility</div>
				</div>
			</div>
		</div>
	</section>

	<!-- =========================================================================
	     2. THE KIGA THESIS: WHY FOCUSED UTILITIES WIN
	     ========================================================================= -->
	<section class="about-thesis-section">
		<div class="site-container">
			<div class="thesis-header-center">
				<span class="section-pill-tag">✦ OUR THESIS</span>
				<h2 class="section-headline">Why we refuse software bloat.</h2>
				<p class="section-subtext">
					We believe the best tools do not attempt to be everything to everyone. They solve one acute bottleneck so well that you never have to think about it again.
				</p>
			</div>

			<div class="thesis-dual-grid">
				<!-- Card 1: The Problem -->
				<div class="thesis-card problem-card">
					<div class="thesis-badge badge-problem">THE STATUS QUO</div>
					<h3 class="thesis-title">Monolithic Software Bloat</h3>
					<p class="thesis-body">
						Every year, SaaS platforms pile on feature upon feature to justify ever-higher subscription tiers. Interfaces become labyrinthine, load times drag into seconds, and users spend more time managing software than doing meaningful work.
					</p>
					<ul class="thesis-points">
						<li>Over-engineered multi-tier dashboards</li>
						<li>Hidden paywalls and complex seat licensing</li>
						<li>Feature bloat that creates cognitive friction</li>
					</ul>
				</div>

				<!-- Card 2: The Solution -->
				<div class="thesis-card solution-card">
					<div class="thesis-badge badge-solution">THE KIGA APPROACH</div>
					<h3 class="thesis-title">Dedicated, Single-Purpose Tools</h3>
					<p class="thesis-body">
						We craft standalone utilities that address specific pain points with unmatched speed. You open the application, achieve your exact outcome in seconds, and get back to your life. No tutorials required.
					</p>
					<ul class="thesis-points">
						<li>Sub-50ms reactive interfaces built for speed</li>
						<li>Direct outcomes: outreach delivered, markets mapped</li>
						<li>Transparent, accessible utility with zero lock-in</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- =========================================================================
	     3. ACTIVE PRODUCTS PORTFOLIO (ARTICLO & NTOCKS)
	     ========================================================================= -->
	<section class="about-portfolio-section">
		<div class="site-container">
			<div class="thesis-header-center">
				<span class="section-pill-tag">✦ LIVE UTILITIES</span>
				<h2 class="section-headline">What we build today.</h2>
				<p class="section-subtext">
					Two distinct products in production, each solving an acute problem for a targeted audience.
				</p>
			</div>

			<div class="portfolio-showcase-grid">
				<!-- Product 1: Articlo -->
				<div class="portfolio-item-card theme-dark">
					<div class="portfolio-card-head">
						<span class="portfolio-pill pill-coral">PROJECT #01 • CAREER OUTREACH</span>
						<span class="portfolio-status">Active Production</span>
					</div>
					<h3 class="portfolio-item-name">Articlo</h3>
					<p class="portfolio-item-tagline">
						Reach out to hundreds of HR in a click with active mail IDs and ATS-free resume templates.
					</p>
					<p class="portfolio-item-body">
						Built for job seekers tired of the application black hole. Articlo integrates directly with native Gmail API to dispatch personalized sequences at 2 emails/second, avoiding spam filters while connecting candidates with verified recruiters.
					</p>
					<div class="portfolio-feature-chips">
						<span class="pchip">⚡ 1-Click Batch Outreach</span>
						<span class="pchip">📄 ATS-Optimized Templates</span>
						<span class="pchip">📬 Active HR Mail IDs</span>
						<span class="pchip">🛡️ Gmail Anti-Spam Queue</span>
					</div>
					<div class="portfolio-card-footer">
						<a href="https://github.com/helodreamcumtrue/artiapply" target="_blank" rel="noopener noreferrer" class="portfolio-btn btn-white">
							<span>Explore Articlo Repo</span>
							<span>↗</span>
						</a>
						<a href="/#project-articlo" class="portfolio-link">View Details &rarr;</a>
					</div>
				</div>

				<!-- Product 2: Ntocks -->
				<div class="portfolio-item-card theme-yellow">
					<div class="portfolio-card-head">
						<span class="portfolio-pill pill-yellow">PROJECT #02 • FINANCIAL INTELLIGENCE</span>
						<span class="portfolio-status">Active Production</span>
					</div>
					<h3 class="portfolio-item-name">Ntocks</h3>
					<p class="portfolio-item-tagline">
						Real-time financial intelligence &amp; news-to-company causal impact platform for Indian equities (NSE &amp; BSE).
					</p>
					<p class="portfolio-item-body">
						Built for investors seeking ground truth instead of sensationalist noise. Ntocks executes a 5-stage deterministic causal impact algorithm mapping macroeconomic events, RBI policies, and corporate filings to affected listed companies—with zero hallucinated predictions.
					</p>
					<div class="portfolio-feature-chips">
						<span class="pchip yellow">● NSE &amp; BSE Causal Engine</span>
						<span class="pchip yellow">🛡️ Zero Hallucinated Predictions</span>
						<span class="pchip yellow">⏱️ Look-Ahead Bias Prevention</span>
						<span class="pchip yellow">📊 Cumulative Abnormal Returns</span>
					</div>
					<div class="portfolio-card-footer">
						<a href="https://github.com/helodreamcumtrue/sttockk" target="_blank" rel="noopener noreferrer" class="portfolio-btn btn-dark">
							<span>Explore Ntocks Repo</span>
							<span>↗</span>
						</a>
						<a href="/#project-ntocks" class="portfolio-link dark">View Details &rarr;</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- =========================================================================
	     4. CORE ENGINEERING & DESIGN PRINCIPLES
	     ========================================================================= -->
	<section class="about-principles-section" id="philosophy">
		<div class="site-container">
			<div class="thesis-header-center">
				<span class="section-pill-tag">✦ HOW WE BUILD</span>
				<h2 class="section-headline">Our engineering tenets.</h2>
				<p class="section-subtext">
					The four non-negotiable standards that govern every line of code and interface decision at Kiga.
				</p>
			</div>

			<div class="principles-grid">
				<div class="principle-card">
					<span class="principle-num">01.</span>
					<h3 class="principle-title">Single-Purpose Precision</h3>
					<p class="principle-desc">
						Every tool solves exactly one acute problem with deep thoroughness. If a proposed feature doesn’t accelerate the user’s core outcome, it doesn’t ship.
					</p>
				</div>

				<div class="principle-card">
					<span class="principle-num">02.</span>
					<h3 class="principle-title">Sub-50ms Interaction Velocity</h3>
					<p class="principle-desc">
						We optimize serverless endpoints, database schemas, and client state machines so interactions respond instantaneously. We respect the user’s time above all.
					</p>
				</div>

				<div class="principle-card">
					<span class="principle-num">03.</span>
					<h3 class="principle-title">Evidence &amp; Truth First</h3>
					<p class="principle-desc">
						Whether guaranteeing email inbox deliverability in Articlo or deterministic causal event studies in Ntocks, our tools provide verified data, never hallucinations.
					</p>
				</div>

				<div class="principle-card">
					<span class="principle-num">04.</span>
					<h3 class="principle-title">Direct Utility Over Paywalls</h3>
					<p class="principle-desc">
						No coercive dark patterns, no fake timers, and no multi-step corporate signups. Just clean, open, and immediate access to the tools you need.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- =========================================================================
	     5. THE TEAM (FOUNDERS & BUILDERS)
	     ========================================================================= -->
	<section class="about-team-section" id="team">
		<div class="site-container">
			<TeamCard />
		</div>
	</section>

	<!-- =========================================================================
	     6. CLOSING CTA BANNER
	     ========================================================================= -->
	<section class="about-cta-section">
		<div class="site-container">
			<div class="about-cta-card">
				<span class="section-pill-tag">✦ WHAT'S NEXT</span>
				<h2 class="cta-massive-title">
					Explore our tools or talk to us.
				</h2>
				<p class="cta-sub-text">
					Whether you're accelerating your career outreach with Articlo, studying market events with Ntocks, or proposing a bottleneck worth solving—we'd love to connect.
				</p>
				<div class="cta-actions-row">
					<a href="/#products" class="btn-product-primary">
						<span>Explore Live Products</span>
						<span class="btn-arrow-icon">&rarr;</span>
					</a>
					<a href="/contact" class="btn-product-secondary">
						<span>Get in Touch</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.kiga-about-page {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	/* =========================================================================
	   HERO SECTION
	   ========================================================================= */
	.about-hero-section {
		padding: 56px 20px 72px;
		position: relative;
		text-align: center;
	}

	.hero-inner-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 960px;
		margin: 0 auto;
	}

	.hero-breadcrumb-wrap {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-bottom: 24px;
		font-size: 0.875rem;
		font-weight: 600;
	}

	.breadcrumb-main {
		color: var(--text-muted);
		text-decoration: none;
	}

	.breadcrumb-main:hover {
		color: var(--text-primary);
	}

	.breadcrumb-sep {
		color: var(--border-medium);
	}

	.breadcrumb-tag {
		color: var(--pop-blue);
		font-style: italic;
		font-family: var(--font-serif-italic);
		font-size: 1.05rem;
	}

	.hero-pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 6px 18px;
		background: #FFFFFF;
		border: 1.5px solid rgba(0, 0, 0, 0.08);
		border-radius: var(--radius-pill);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		color: var(--pop-blue);
		margin-bottom: 24px;
	}

	.sparkle {
		color: var(--pop-blue);
	}

	.about-hero-headline {
		font-family: var(--font-main);
		font-size: clamp(2.8rem, 6.5vw, 5rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.06;
		color: var(--text-primary);
		margin: 0 0 24px;
	}

	.highlight-italic {
		font-family: var(--font-serif-italic);
		font-style: italic;
		font-weight: 400;
		color: var(--pop-blue);
	}

	.about-hero-subtitle {
		font-size: clamp(1.05rem, 1.8vw, 1.25rem);
		line-height: 1.65;
		color: var(--text-secondary);
		max-width: 760px;
		margin: 0 auto 52px;
	}

	.about-hero-subtitle strong {
		color: var(--text-primary);
		font-weight: 700;
	}

	/* Metrics Grid */
	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
		width: 100%;
		max-width: 920px;
	}

	@media (max-width: 800px) {
		.metrics-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 12px;
		}
	}

	@media (max-width: 480px) {
		.metrics-grid {
			grid-template-columns: 1fr;
		}
	}

	.metric-card {
		background: #FFFFFF;
		border: 1.5px solid rgba(0, 0, 0, 0.08);
		border-radius: var(--radius-lg);
		padding: 24px 20px;
		text-align: left;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
		transition: transform var(--transition-fast), box-shadow var(--transition-fast);
	}

	.metric-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
	}

	.metric-num {
		font-family: var(--font-main);
		font-size: 2.2rem;
		font-weight: 800;
		letter-spacing: -0.04em;
		color: var(--text-primary);
		line-height: 1;
		margin-bottom: 8px;
	}

	.metric-label {
		font-size: 0.875rem;
		font-weight: 700;
		color: var(--text-primary);
		margin-bottom: 4px;
	}

	.metric-sub {
		font-size: 0.75rem;
		color: var(--text-muted);
		line-height: 1.4;
	}

	/* =========================================================================
	   THESIS DUAL SECTION
	   ========================================================================= */
	.about-thesis-section {
		padding: 72px 20px;
		background: #F4F3EE;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
	}

	.thesis-header-center {
		text-align: center;
		margin-bottom: 52px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.section-pill-tag {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 5px 16px;
		background: #FFFFFF;
		border: 1.5px solid rgba(0, 0, 0, 0.08);
		border-radius: var(--radius-pill);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		font-size: 0.6875rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--pop-blue);
		margin-bottom: 14px;
	}

	.section-headline {
		font-family: var(--font-main);
		font-size: clamp(2.2rem, 4.5vw, 3.2rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		color: var(--text-primary);
		line-height: 1.1;
		margin: 0;
	}

	.section-subtext {
		font-size: clamp(1rem, 1.8vw, 1.15rem);
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 640px;
		margin: 14px auto 0;
		font-weight: 500;
	}

	.thesis-dual-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 28px;
		max-width: 1080px;
		margin: 0 auto;
	}

	@media (max-width: 820px) {
		.thesis-dual-grid {
			grid-template-columns: 1fr;
		}
	}

	.thesis-card {
		border-radius: var(--radius-xl);
		padding: 36px 32px;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.problem-card {
		background: #FFFFFF;
		border: 1.5px solid rgba(0, 0, 0, 0.1);
	}

	.solution-card {
		background: #14171A;
		color: #FFFFFF;
		border: 1.5px solid #23272E;
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
	}

	.thesis-badge {
		font-size: 0.6875rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		padding: 4px 12px;
		border-radius: var(--radius-pill);
		align-self: flex-start;
	}

	.badge-problem {
		background: rgba(239, 68, 68, 0.12);
		color: #DC2626;
	}

	.badge-solution {
		background: rgba(37, 99, 235, 0.2);
		color: #60A5FA;
	}

	.thesis-title {
		font-size: 1.5rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.2;
		margin: 0;
	}

	.solution-card .thesis-title {
		color: #FFFFFF;
	}

	.thesis-body {
		font-size: 0.96rem;
		line-height: 1.65;
		color: var(--text-secondary);
	}

	.solution-card .thesis-body {
		color: #B5BAC1;
	}

	.thesis-points {
		list-style: none;
		margin-top: 8px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.thesis-points li {
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		gap: 10px;
		font-weight: 600;
	}

	.problem-card .thesis-points li {
		color: #4A5568;
	}

	.problem-card .thesis-points li::before {
		content: "✕";
		color: #DC2626;
		font-weight: 800;
	}

	.solution-card .thesis-points li {
		color: #E2E8F0;
	}

	.solution-card .thesis-points li::before {
		content: "✓";
		color: #38BDF8;
		font-weight: 800;
	}

	/* =========================================================================
	   PORTFOLIO SHOWCASE SECTION
	   ========================================================================= */
	.about-portfolio-section {
		padding: 80px 20px;
	}

	.portfolio-showcase-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 32px;
		max-width: 1120px;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		.portfolio-showcase-grid {
			grid-template-columns: 1fr;
		}
	}

	.portfolio-item-card {
		border-radius: var(--radius-xl);
		padding: 40px 36px;
		display: flex;
		flex-direction: column;
		position: relative;
		box-shadow: 0 12px 36px rgba(0, 0, 0, 0.06);
	}

	.portfolio-item-card.theme-dark {
		background: #141619;
		color: #FFFFFF;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.portfolio-item-card.theme-yellow {
		background: #FEF9E7;
		color: #121417;
		border: 2px solid #F6D860;
	}

	.portfolio-card-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
		flex-wrap: wrap;
		gap: 8px;
	}

	.portfolio-pill {
		font-size: 0.6875rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		padding: 4px 12px;
		border-radius: var(--radius-pill);
	}

	.pill-coral {
		background: rgba(37, 99, 235, 0.2);
		color: #93C5FD;
	}

	.pill-yellow {
		background: #F5C22B;
		color: #121417;
	}

	.portfolio-status {
		font-size: 0.75rem;
		font-weight: 700;
		color: #9BA297;
	}

	.portfolio-item-card.theme-yellow .portfolio-status {
		color: #718096;
	}

	.portfolio-item-name {
		font-family: var(--font-main);
		font-size: 2.2rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		margin: 0 0 10px;
		line-height: 1;
	}

	.portfolio-item-tagline {
		font-size: 1.05rem;
		font-weight: 700;
		line-height: 1.45;
		margin: 0 0 16px;
	}

	.portfolio-item-card.theme-dark .portfolio-item-tagline {
		color: #60A5FA;
	}

	.portfolio-item-card.theme-yellow .portfolio-item-tagline {
		color: #92400E;
	}

	.portfolio-item-body {
		font-size: 0.94rem;
		line-height: 1.65;
		margin-bottom: 24px;
	}

	.portfolio-item-card.theme-dark .portfolio-item-body {
		color: #B0B5BD;
	}

	.portfolio-item-card.theme-yellow .portfolio-item-body {
		color: #4A5568;
	}

	.portfolio-feature-chips {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 32px;
	}

	.pchip {
		font-size: 0.75rem;
		font-weight: 700;
		padding: 5px 12px;
		border-radius: var(--radius-pill);
		background: rgba(255, 255, 255, 0.08);
		color: #E2E8F0;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.pchip.yellow {
		background: rgba(245, 194, 43, 0.2);
		color: #78350F;
		border: 1px solid rgba(245, 194, 43, 0.4);
	}

	.portfolio-card-footer {
		margin-top: auto;
		display: flex;
		align-items: center;
		gap: 16px;
	}

	.portfolio-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 10px 20px;
		border-radius: var(--radius-pill);
		font-size: 0.875rem;
		font-weight: 700;
		text-decoration: none;
		transition: all var(--transition-fast);
	}

	.portfolio-btn.btn-white {
		background: #FFFFFF;
		color: #121417;
	}

	.portfolio-btn.btn-white:hover {
		background: #F1F5F9;
		transform: translateY(-1px);
	}

	.portfolio-btn.btn-dark {
		background: #121417;
		color: #FFFFFF;
	}

	.portfolio-btn.btn-dark:hover {
		background: #2D3748;
		transform: translateY(-1px);
	}

	.portfolio-link {
		font-size: 0.875rem;
		font-weight: 700;
		color: #93C5FD;
		text-decoration: none;
	}

	.portfolio-link.dark {
		color: #121417;
	}

	.portfolio-link:hover {
		text-decoration: underline;
	}

	/* =========================================================================
	   PRINCIPLES GRID
	   ========================================================================= */
	.about-principles-section {
		padding: 80px 20px;
		background: #FAF9F5;
	}

	.principles-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
		max-width: 1120px;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		.principles-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 540px) {
		.principles-grid {
			grid-template-columns: 1fr;
		}
	}

	.principle-card {
		background: #FFFFFF;
		border: 1.5px solid rgba(0, 0, 0, 0.08);
		border-radius: var(--radius-lg);
		padding: 30px 24px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
	}

	.principle-num {
		font-family: var(--font-serif-italic);
		font-size: 1.6rem;
		font-style: italic;
		font-weight: 700;
		color: var(--pop-blue);
		margin-bottom: 12px;
	}

	.principle-title {
		font-size: 1.15rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		color: var(--text-primary);
		margin: 0 0 10px;
		line-height: 1.25;
	}

	.principle-desc {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
	}

	/* =========================================================================
	   ABOUT TEAM & CTA
	   ========================================================================= */
	.about-team-section {
		padding: 80px 20px 40px;
	}

	.about-cta-section {
		padding: 40px 20px 80px;
	}

	.about-cta-card {
		max-width: var(--container-max, 1360px);
		margin: 0 auto;
		background: linear-gradient(135deg, #121417 0%, #1A1E24 100%);
		border-radius: 32px;
		padding: 72px 32px;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		box-shadow: 0 24px 60px rgba(0, 0, 0, 0.16);
	}

	.cta-massive-title {
		font-family: var(--font-main);
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		color: #FFFFFF;
		margin: 16px 0 12px;
		line-height: 1.15;
	}

	.cta-sub-text {
		font-size: clamp(0.95rem, 1.6vw, 1.1rem);
		color: #A0AEC0;
		max-width: 620px;
		line-height: 1.65;
		margin: 0 auto 36px;
	}

	.cta-actions-row {
		display: flex;
		align-items: center;
		gap: 16px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.btn-product-primary {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		padding: 13px 28px;
		border-radius: var(--radius-pill);
		background: #FFFFFF;
		color: #121417;
		font-size: 0.9375rem;
		font-weight: 700;
		text-decoration: none;
		transition: all var(--transition-fast);
	}

	.btn-product-primary:hover {
		background: var(--pop-blue);
		color: #FFFFFF;
		transform: translateY(-2px);
	}

	.btn-product-secondary {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 13px 28px;
		border-radius: var(--radius-pill);
		background: rgba(255, 255, 255, 0.08);
		color: #FFFFFF;
		border: 1.5px solid rgba(255, 255, 255, 0.2);
		font-size: 0.9375rem;
		font-weight: 700;
		text-decoration: none;
		transition: all var(--transition-fast);
	}

	.btn-product-secondary:hover {
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.4);
		transform: translateY(-2px);
	}
</style>
