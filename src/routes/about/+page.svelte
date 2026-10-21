<script>
	import TeamCard from '#lib/components/TeamCard.svelte';
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
	     2. THE ORGANIC SPIRAL FILAMENT PROCESS (RETAINED SPIRAL DESIGN)
	     ========================================================================= -->
	<section class="spiral-process-section" id="philosophy">
		<div class="site-container process-container">
			<!-- Header: process. with pop highlight -->
			<div class="process-header">
				<span class="process-dot"></span>
				<h2 class="process-heading">process.</h2>
			</div>

			<!-- Section Subtitle -->
			<p class="process-subtext">
				From identifying everyday friction to shipping sub-50ms software. The winding path of purpose-built craft.
			</p>

			<!-- The Winding Organic Roadmap -->
			<div class="winding-path-stage">
				<!-- Continuous Decorative SVG Spiral Filament Curve -->
				<svg
					class="filament-svg-curve"
					viewBox="0 0 800 1200"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M400,20 C400,120 450,180 500,220 C560,260 580,320 540,360 C500,400 420,380 430,300 C440,240 380,360 300,440 C220,520 200,600 240,680 C280,760 480,820 520,900 C560,980 460,1060 400,1100 C340,1140 380,1200 460,1200"
						stroke="#2563EB"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				<!-- Node 01: Bottleneck Discovery (Left side) -->
				<div class="path-node node-01">
					<div class="node-bullet-row">
						<span class="pop-bullet blue"></span>
						<h3 class="node-title">discovery &amp; analysis</h3>
					</div>
					<p class="node-desc">
						We dissect real-world workflows to pinpoint acute friction points—from recruiter email black holes to Indian market news chaos.
					</p>
					<span class="node-num-tag">01.</span>
				</div>

				<!-- Node 02: Radical De-Bloating (Middle / Center-Right) -->
				<div class="path-node node-02">
					<div class="node-bullet-row">
						<span class="pop-bullet yellow"></span>
						<h3 class="node-title">radical de-bloating</h3>
					</div>
					<p class="node-desc">
						We strip away multi-tiered enterprise fluff, complex menus, and feature creep. One tool, one distinct purpose, zero cognitive clutter.
					</p>
					<span class="node-num-tag">02.</span>
				</div>

				<!-- Node 03: Sub-50ms Engineering (Right side) -->
				<div class="path-node node-03">
					<div class="node-bullet-row">
						<span class="pop-bullet coral"></span>
						<h3 class="node-title">sub-50ms velocity</h3>
					</div>
					<p class="node-desc">
						We engineer lightweight, distributed systems and clean interfaces optimized for sub-50ms execution and instant user outcomes.
					</p>
					<span class="node-num-tag">03.</span>
				</div>

				<!-- Node 04: Ground-Truth Testing (Bottom Center-Left) -->
				<div class="path-node node-04">
					<div class="node-bullet-row">
						<span class="pop-bullet green"></span>
						<h3 class="node-title">ground-truth testing</h3>
					</div>
					<p class="node-desc">
						We run continuous testing and user feedback loops, refining deliverability and deterministic models until the friction is completely eliminated.
					</p>
					<span class="node-num-tag">04.</span>
				</div>
			</div>
		</div>
	</section>



	<!-- =========================================================================
	     4. THE FOUNDERS & COLLECTIVE
	     ========================================================================= -->
	<section class="about-team-section" id="team">
		<div class="site-container">
			<TeamCard />
		</div>
	</section>

	<!-- =========================================================================
	     5. CLOSING CTA BANNER
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
	   SPIRAL / WINDING FILAMENT PROCESS SECTION
	   ========================================================================= */
	.spiral-process-section {
		padding: 80px 20px 110px;
		position: relative;
		border-top: 1px solid var(--border-light);
		background: #F4F3EE;
	}

	.process-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.process-header {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 12px;
		position: relative;
		z-index: 5;
	}

	.process-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: var(--pop-blue);
		box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
	}

	.process-heading {
		font-family: var(--font-serif-italic);
		font-style: italic;
		font-size: 2.6rem;
		font-weight: 600;
		color: var(--text-primary);
		letter-spacing: -0.02em;
	}

	.process-subtext {
		font-size: clamp(0.95rem, 1.6vw, 1.1rem);
		color: var(--text-secondary);
		text-align: center;
		max-width: 600px;
		margin: 0 auto 52px;
		line-height: 1.6;
	}

	.winding-path-stage {
		position: relative;
		width: 100%;
		max-width: 860px;
		min-height: 1100px;
		margin: 0 auto;
	}

	.filament-svg-curve {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.path-node {
		position: absolute;
		max-width: 320px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		z-index: 3;
		background: #FFFFFF;
		padding: 24px 28px;
		border-radius: var(--radius-lg);
		border: 1.5px solid var(--border-light);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
		transition: transform var(--transition-fast), border-color var(--transition-fast);
	}

	.path-node:hover {
		transform: translateY(-2px);
		border-color: var(--text-primary);
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.1);
	}

	.node-bullet-row {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.pop-bullet {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.pop-bullet.blue { background-color: var(--pop-blue); box-shadow: 0 0 8px rgba(37, 99, 235, 0.5); }
	.pop-bullet.yellow { background-color: var(--pop-yellow); box-shadow: 0 0 8px rgba(245, 194, 43, 0.5); }
	.pop-bullet.coral { background-color: var(--pop-coral); box-shadow: 0 0 8px rgba(255, 71, 36, 0.5); }
	.pop-bullet.green { background-color: var(--pop-lime); box-shadow: 0 0 8px rgba(16, 185, 129, 0.5); }

	.node-title {
		font-family: var(--font-main);
		font-size: 1.25rem;
		font-weight: 800;
		letter-spacing: -0.03em;
		color: var(--text-primary);
		text-transform: lowercase;
	}

	.node-desc {
		font-size: 0.875rem;
		line-height: 1.6;
		color: var(--text-secondary);
	}

	.node-num-tag {
		font-family: var(--font-serif-italic);
		font-style: italic;
		font-size: 1.15rem;
		color: var(--pop-blue);
		font-weight: 700;
		margin-top: 4px;
	}

	.node-01 {
		top: 160px;
		left: 8%;
	}

	.node-02 {
		top: 430px;
		left: 48%;
	}

	.node-03 {
		top: 700px;
		right: 6%;
		text-align: left;
	}

	.node-04 {
		top: 940px;
		left: 36%;
	}

	@media (max-width: 768px) {
		.winding-path-stage {
			display: flex;
			flex-direction: column;
			gap: 28px;
			min-height: auto;
		}
		.filament-svg-curve {
			display: none;
		}
		.path-node {
			position: static;
			max-width: 100%;
		}
	}



	/* =========================================================================
	   ABOUT TEAM & CTA
	   ========================================================================= */
	.about-team-section {
		padding: 80px 20px 40px;
		border-top: 1px solid var(--border-light);
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
