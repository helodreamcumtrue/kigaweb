<script>
	import TeamCard from '#lib/components/TeamCard.svelte';
</script>

<svelte:head>
	<title>about us — kiga*</title>
	<meta
		name="description"
		content="kiga is a creative digital product collective building focused tools, dedicated software, and purposeful utilities."
	/>
</svelte:head>

<div class="kiga-about-page">
	<!-- =========================================================================
	     1. HERO SECTION (EDITORIAL + PLAYFUL POP)
	     ========================================================================= -->
	<section class="august-hero-section">
		<div class="site-container hero-inner-container">
			<!-- Breadcrumb: main / about us -->
			<div class="hero-breadcrumb-wrap">
				<span class="breadcrumb-main">main /</span>
				<span class="breadcrumb-tag">about us</span>
			</div>

			<!-- Floating Overlapping Thumbnails Trio with Washi Tape Corners -->
			<div class="floating-photos-stage" aria-hidden="true">
				<div class="thumb-card thumb-left">
					<div class="washi-tape top-left"></div>
					<img
						src="/images/thumb-portrait-bw.jpg"
						alt="Creator portrait"
						class="thumb-img"
						loading="eager"
					/>
				</div>

				<div class="thumb-card thumb-center">
					<div class="washi-tape top-right"></div>
					<img
						src="/images/thumb-green-tunnel.jpg"
						alt="Green tunnel installation"
						class="thumb-img"
						loading="eager"
					/>
				</div>

				<div class="thumb-card thumb-right">
					<div class="washi-tape top-left"></div>
					<img
						src="/images/thumb-purple-stage.jpg"
						alt="Purple digital stage"
						class="thumb-img"
						loading="eager"
					/>
				</div>
			</div>

			<!-- Massive Lowercase Headline: about us -->
			<h1 class="hero-giant-text">
				about us
			</h1>

			<!-- Location Badge with [+] and vertical line drop -->
			<div class="location-connector-wrap">
				<div class="plus-box" aria-hidden="true">+</div>
				<p class="location-text">
					Based in New Delhi &amp; Remote,<br />
					operating worldwide
				</p>
				<div class="vertical-connector-line" aria-hidden="true"></div>
			</div>

			<!-- Lowercase Bold Manifesto Statement -->
			<div class="manifesto-wrap">
				<h2 class="manifesto-statement">
					we are a digital product collective building focused tools, dedicated software, and purposeful utilities.
				</h2>
				<p class="manifesto-body">
					Together, we create bespoke solutions for specific problems, embracing high-impact simplicity to craft tools people genuinely love using. Our diverse expertise allows us to approach each bottleneck with fresh eyes and deliver exceptional results. People don't just use our products—they rely on them.
				</p>
			</div>
		</div>
	</section>

	<!-- =========================================================================
	     2. THE ORGANIC FILAMENT PROCESS
	     ========================================================================= -->
	<section class="august-process-section" id="philosophy">
		<div class="site-container process-container">
			<!-- Header: process. with pop highlight -->
			<div class="process-header">
				<span class="process-dot"></span>
				<h2 class="process-heading">process.</h2>
			</div>

			<!-- The Winding Organic Roadmap -->
			<div class="winding-path-stage">
				<!-- Continuous Decorative SVG Filament Curve -->
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

				<!-- Node 01: Analysis (Left side) -->
				<div class="path-node node-01">
					<div class="node-bullet-row">
						<span class="pop-bullet blue"></span>
						<h3 class="node-title">analysis</h3>
					</div>
					<p class="node-desc">
						We analyse real workflows to identify the core message, eliminate friction, and set the direction for the next steps.
					</p>
					<span class="node-num-tag">01.</span>
				</div>

				<!-- Node 02: Concept (Middle / Center-Right) -->
				<div class="path-node node-02">
					<div class="node-bullet-row">
						<span class="pop-bullet yellow"></span>
						<h3 class="node-title">concept</h3>
					</div>
					<p class="node-desc">
						We create unique concepts for each solution, bringing focused ideas to life with purposeful architecture and visual clarity.
					</p>
					<span class="node-num-tag">02.</span>
				</div>

				<!-- Node 03: Visuals & Manifesto (Right side) -->
				<div class="path-node node-03">
					<div class="node-bullet-row">
						<span class="pop-bullet coral"></span>
						<h3 class="node-title">visuals &amp; manifesto</h3>
					</div>
					<p class="node-desc">
						We provide clear visualisations and a manifesto to convey key value, establish autonomy, and ensure lasting impact.
					</p>
					<span class="node-num-tag">03.</span>
				</div>

				<!-- Node 04: Budgeting & Utility (Bottom Center-Right) -->
				<div class="path-node node-04">
					<div class="node-bullet-row">
						<span class="pop-bullet green"></span>
						<h3 class="node-title">budgeting</h3>
					</div>
					<p class="node-desc">
						We offer transparent, accessible software with no hidden costs, zero enterprise bloat, and direct utility.
					</p>
					<span class="node-num-tag">04.</span>
				</div>
			</div>
		</div>
	</section>

	<!-- =========================================================================
	     3. THE TEAM (IMAGE 2 ALTERNATING CIRCULAR PORTRAITS & ORBIT BADGES)
	     ========================================================================= -->
	<section class="august-team-section" id="team">
		<div class="site-container">
			<TeamCard />
		</div>
	</section>

	<!-- =========================================================================
	     4. CLOSING CTA BANNER
	     ========================================================================= -->
	<section class="august-cta-section">
		<div class="site-container">
			<div class="august-cta-card">
				<div class="cta-notch-tag">
					<span>+ NEXT CHAPTER</span>
				</div>
				<h2 class="cta-massive-title">
					ready to explore our solutions?
				</h2>
				<p class="cta-sub-text">
					Discover Articlo and Bazinga, or reach out to us with an idea, problem, or feedback worth discussing.
				</p>
				<div class="cta-actions-row">
					<a href="/#products" class="btn-pill btn-dark">explore products</a>
					<a href="/contact" class="btn-pill btn-blue">
						<span>get in touch</span>
						<span>&rarr;</span>
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

	/* Hero Section */
	.august-hero-section {
		padding-top: 48px;
		padding-bottom: 72px;
		position: relative;
	}

	.hero-inner-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
	}

	.hero-breadcrumb-wrap {
		display: inline-flex;
		align-items: baseline;
		gap: 6px;
		margin-bottom: 24px;
	}

	.breadcrumb-main {
		font-size: 0.9375rem;
		color: var(--text-muted);
		font-weight: 600;
	}

	.breadcrumb-tag {
		font-size: 1.15rem;
		font-style: italic;
		font-family: var(--font-serif-italic);
		color: var(--pop-blue);
		font-weight: 600;
	}

	/* Floating Overlapping Photos Stage */
	.floating-photos-stage {
		position: relative;
		width: 100%;
		max-width: 720px;
		height: 220px;
		margin-bottom: -70px;
		z-index: 1;
		pointer-events: none;
	}

	@media (max-width: 680px) {
		.floating-photos-stage {
			height: 160px;
			margin-bottom: -45px;
		}
	}

	.thumb-card {
		position: absolute;
		border-radius: 10px;
		overflow: visible;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.14);
		border: 3px solid #FFFFFF;
		background: #FFFFFF;
	}

	.thumb-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		border-radius: 8px;
	}

	.thumb-left {
		width: 110px;
		height: 145px;
		left: 12%;
		top: 10px;
		transform: rotate(-4deg);
	}

	.thumb-center {
		width: 160px;
		height: 215px;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		z-index: 3;
	}

	.thumb-right {
		width: 120px;
		height: 120px;
		right: 14%;
		top: 40px;
		transform: rotate(5deg);
		z-index: 2;
	}

	@media (max-width: 680px) {
		.thumb-left {
			width: 80px;
			height: 105px;
			left: 4%;
		}
		.thumb-center {
			width: 115px;
			height: 155px;
		}
		.thumb-right {
			width: 85px;
			height: 85px;
			right: 5%;
		}
	}

	.manifesto-wrap {
		margin-top: 16px;
	}

	/* Process Section */
	.august-process-section {
		padding: 72px 0 110px;
		position: relative;
		border-top: 1px solid var(--border-light);
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
		margin-bottom: 40px;
		position: relative;
		z-index: 5;
	}

	.process-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: var(--pop-blue);
		box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
	}

	.process-heading {
		font-family: var(--font-serif-italic);
		font-style: italic;
		font-size: 2.4rem;
		font-weight: 600;
		color: var(--text-primary);
		letter-spacing: -0.02em;
	}

	.winding-path-stage {
		position: relative;
		width: 100%;
		max-width: 840px;
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
		padding: 22px 26px;
		border-radius: var(--radius-lg);
		border: 1.5px solid var(--border-light);
		box-shadow: var(--shadow-card);
		transition: transform var(--transition-fast);
	}

	.path-node:hover {
		transform: translateY(-2px);
		border-color: var(--text-primary);
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
		top: 180px;
		left: 8%;
	}

	.node-02 {
		top: 450px;
		left: 48%;
	}

	.node-03 {
		top: 720px;
		right: 6%;
		text-align: left;
	}

	.node-04 {
		top: 960px;
		left: 36%;
	}

	@media (max-width: 768px) {
		.winding-path-stage {
			display: flex;
			flex-direction: column;
			gap: 32px;
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

	/* Team Section */
	.august-team-section {
		padding: 72px 0 96px;
		border-top: 1px solid var(--border-light);
	}

	/* Closing CTA */
	.august-cta-section {
		padding: 40px 0 96px;
	}

	.august-cta-card {
		background: #FFFFFF;
		border: 2px solid var(--text-primary);
		border-radius: var(--radius-xl);
		padding: 64px 32px;
		text-align: center;
		position: relative;
		box-shadow: 6px 6px 0px #121417;
	}

	.cta-notch-tag {
		display: inline-flex;
		align-items: center;
		padding: 4px 16px;
		border-radius: var(--radius-pill);
		background: var(--pop-yellow);
		color: var(--text-primary);
		font-size: 0.6875rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		margin-bottom: 12px;
		border: 1px solid var(--text-primary);
	}

	.cta-massive-title {
		font-family: var(--font-main);
		font-size: clamp(2.2rem, 5vw, 3.6rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.05;
		color: var(--text-primary);
		margin: 8px 0 16px;
	}

	.cta-sub-text {
		font-size: 1.05rem;
		line-height: 1.6;
		color: var(--text-secondary);
		max-width: 580px;
		margin: 0 auto 32px;
	}

	.cta-actions-row {
		display: flex;
		gap: 16px;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
