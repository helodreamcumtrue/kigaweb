<script>
	import ProductDeck from '#lib/components/ProductDeck.svelte';
	import TeamCard from '#lib/components/TeamCard.svelte';
	import { upcomingExplorations } from '#lib/data/products.js';
</script>

<svelte:head>
	<title>kiga* — digital product collective</title>
	<meta
		name="description"
		content="kiga brings together focused digital products, each built to solve a particular problem for a particular audience."
	/>
</svelte:head>

<div class="kiga-home-page">
	<!-- =========================================================================
	     1. HERO SECTION (INSPIRED BY REFERENCE: SERENE SKY ATMOSPHERE & ENVELOPE)
	     ========================================================================= -->
	<section class="home-hero-section">
		<div class="hero-sky-card">
			<!-- Centered Main Headline & Subtitle -->
			<div class="hero-sky-content">
				<h1 class="hero-sky-headline">
					<span class="headline-part line-1">Solutions, not</span>
					<span class="headline-part line-2">Software bloat</span>
				</h1>

				<p class="hero-sky-subtitle">
					Enjoy focused, lightning-fast digital utilities that respect your time.<br class="sub-break" />
					Built for makers, writers, and teams who value clarity over clutter.<br class="sub-break" />
					Save 5+ hours weekly on software friction.
				</p>

				<!-- Dual Action Pill Buttons (Primary Black + Secondary White) -->
				<div class="hero-sky-actions">
					<a href="#products" class="hero-pill-btn btn-primary-black">
						<span class="btn-icon-circle">
							<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
								<line x1="12" y1="5" x2="12" y2="19"></line>
								<polyline points="19 12 12 19 5 12"></polyline>
							</svg>
						</span>
						<span>Explore Products</span>
					</a>
					<a href="#team" class="hero-pill-btn btn-secondary-white">
						<span>Meet the Collective</span>
					</a>
				</div>
			</div>

			<!-- Centerpiece Visual: Open Physical Envelope with Emerging Product Cards -->
			<div class="hero-envelope-stage" aria-label="Kiga product letters emerging from an open physical envelope">
				<!-- Translucent Fanned Blueprint Sheets behind the envelope -->
				<div class="fanned-bg-sheet sheet-left" aria-hidden="true">
					<div class="sheet-wireframe-lines">
						<span class="wline wline-1"></span>
						<span class="wline wline-2"></span>
						<span class="wline wline-3"></span>
					</div>
				</div>
				<div class="fanned-bg-sheet sheet-right" aria-hidden="true">
					<div class="sheet-wireframe-lines">
						<span class="wline wline-1"></span>
						<span class="wline wline-2"></span>
						<span class="wline wline-3"></span>
					</div>
				</div>

				<!-- Envelope Back Flap (Open triangle pointing up) -->
				<div class="envelope-back-flap" aria-hidden="true"></div>

				<!-- Emerging Product Cards fanning out of the envelope -->
				<div class="envelope-cards-container">
					<!-- Card 1 (Left - Articlo): AI Career Outreach & ATS Resumes -->
					<a href="#project-articlo" class="emerging-letter-card card-articlo" title="View Articlo: 1-Click HR Outreach & ATS Resume Templates">
						<div class="letter-card-header">
							<span class="card-title-text">Dear Job Seeker,</span>
							<span class="card-badge badge-coral">Articlo</span>
						</div>
						<p class="letter-card-script">
							Reach out to hundreds of HR in a click. Beat automated screening bots with ATS-free resume templates and get active recruiter mail IDs.
						</p>
						<div class="letter-card-footer">
							<span class="mini-spec-pill">⚡ 1-Click HR Outreach</span>
							<span class="mini-spec-pill muted">Active HR Mails</span>
							<span class="mini-spec-pill muted">ATS Templates</span>
						</div>
					</a>

					<!-- Card 2 (Right - Ntocks): Indian Equities Causal Market Intelligence -->
					<a href="#project-ntocks" class="emerging-letter-card card-ntocks" title="View Ntocks: Causal Market Intelligence for Indian Equities">
						<div class="letter-card-header">
							<span class="card-title-text">Dear Investor,</span>
							<span class="card-badge badge-yellow">Ntocks</span>
						</div>
						<p class="letter-card-typed">
							Something important just happened. Instantly see which NSE &amp; BSE companies are affected, why, and how much—with zero hallucinated predictions.
						</p>
						<div class="letter-card-footer">
							<span class="mini-spec-pill yellow">● NSE &amp; BSE Causal</span>
							<span class="mini-spec-pill muted">Zero Hallucinations</span>
						</div>
					</a>
				</div>

				<!-- Envelope Front Pocket (V-Fold Body) with Watermark Script -->
				<div class="envelope-front-pocket">
					<svg class="envelope-pocket-svg" viewBox="0 0 600 240" preserveAspectRatio="none">
						<defs>
							<linearGradient id="envShade" x1="0%" y1="0%" x2="0%" y2="100%">
								<stop offset="0%" stop-color="#FFFFFF" />
								<stop offset="100%" stop-color="#F2F5F8" />
							</linearGradient>
							<filter id="envShadow" x="-5%" y="-10%" width="110%" height="130%">
								<feDropShadow dx="0" dy="-4" stdDeviation="6" flood-color="#557599" flood-opacity="0.08" />
							</filter>
						</defs>
						<!-- Left flap fold -->
						<polygon points="0,240 0,30 300,165" fill="#FAFCFE" opacity="0.9" />
						<!-- Right flap fold -->
						<polygon points="600,240 600,30 300,165" fill="#F4F8FB" opacity="0.9" />
						<!-- Bottom front flap -->
						<polygon points="0,240 600,240 300,140" fill="url(#envShade)" filter="url(#envShadow)" />
						<!-- Subtle fold crease lines -->
						<line x1="0" y1="240" x2="300" y2="140" stroke="#E2EBF2" stroke-width="1.5" />
						<line x1="600" y1="240" x2="300" y2="140" stroke="#E2EBF2" stroke-width="1.5" />
					</svg>

					<!-- Watermark handwritten script on envelope face (Exact to reference image!) -->
					<div class="envelope-watermark">
						<span>made to save your time &amp; focus.</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- =========================================================================
	     2. LAUNCHED PRODUCTS — ARTICLO & NTOCKS
	     ========================================================================= -->
	<section class="home-products-section">
		<div class="site-container">
			<ProductDeck />
		</div>
	</section>

	<!-- =========================================================================
	<!-- =========================================================================
	     3. ON THE HORIZON (EDITORIAL PIPELINE)
	     ========================================================================= -->
	<section class="home-horizon-section" id="horizon">
		<div class="site-container">
			<!-- Unified Section Header Center -->
			<div class="section-header-center">
				<span class="section-pill-tag">✦ PIPELINE EXPLORATIONS</span>
				<h2 class="section-headline">On the horizon.</h2>
				<p class="section-subtext">
					We discover recurring user bottlenecks and prototype dedicated, single-purpose software utilities with zero fluff.
				</p>
			</div>

			<div class="horizon-editorial-grid">
				{#each upcomingExplorations as item, i}
					<div class="horizon-item-card" class:highlight-card={i === 1}>
						<div class="horizon-badge-row">
							<span class="phase-tag">{item.phase}</span>
							<span class="status-tag status-color-{i}">{item.status}</span>
						</div>
						<h3 class="horizon-item-title">{item.title}</h3>
						<p class="horizon-item-desc">{item.description}</p>
						<div class="horizon-item-footer">
							<span class="state-label">Timeline:</span>
							<span class="state-val">{item.timeline}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- =========================================================================
	     4. MEET THE TEAM (ALTERNATING CIRCLES FROM IMAGE 2)
	     ========================================================================= -->
	<section class="home-team-section">
		<div class="site-container">
			<TeamCard />
		</div>
	</section>

	<!-- =========================================================================
	     5. FINAL CTA (LUMINOUS BOOKEND TO HERO)
	     ========================================================================= -->
	<section class="home-cta-section">
		<div class="site-container">
			<div class="home-cta-card">
				<span class="section-pill-tag">✦ INQUIRIES &amp; PARTNERSHIPS</span>
				<h2 class="cta-massive-title">
					Have a problem worth solving?
				</h2>
				<p class="cta-sub-text">
					Send us your questions, product feedback, or partnership ideas. We respond to every thoughtful note within 24 hours.
				</p>
				<div class="cta-actions-row">
					<a href="/contact" class="btn-product-primary">
						<span>Get in touch</span>
						<span class="btn-arrow-icon">&rarr;</span>
					</a>
					<a href="/about" class="btn-product-secondary">
						<span>Read our story</span>
					</a>
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.kiga-home-page {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	/* =========================================================================
	   HERO SECTION (SKY ATMOSPHERE & OPEN ENVELOPE DOSSIER — INSPIRED BY REFERENCE)
	   ========================================================================= */
	.home-hero-section {
		padding: 16px 24px 64px;
		position: relative;
		width: 100%;
	}

	.hero-sky-card {
		max-width: var(--container-max, 1360px);
		margin: 0 auto;
		border-radius: 36px;
		background: linear-gradient(180deg, #6C94C6 0%, #8EB2DA 28%, #BDD4ED 58%, #E5F0FA 82%, #FFFFFF 100%);
		box-shadow: 
			0 20px 50px -15px rgba(85, 125, 175, 0.28),
			0 1px 3px rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.55);
		overflow: hidden;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-top: 56px;
	}

	/* Centered Main Headline & Content */
	.hero-sky-content {
		text-align: center;
		padding: 48px 24px 28px;
		max-width: 860px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 5;
	}

	.hero-sky-headline {
		font-family: var(--font-main);
		font-size: clamp(3rem, 7.2vw, 5.8rem);
		font-weight: 800;
		letter-spacing: -0.045em;
		line-height: 1.02;
		color: #FFFFFF;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
		text-shadow: 0 2px 18px rgba(45, 80, 125, 0.18);
	}

	.hero-sky-subtitle {
		font-size: clamp(1rem, 1.8vw, 1.2rem);
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.94);
		margin: 20px auto 0;
		max-width: 620px;
		font-weight: 500;
		text-shadow: 0 1px 8px rgba(45, 80, 125, 0.15);
	}

	/* Dual Action Pill Buttons */
	.hero-sky-actions {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-top: 28px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.hero-pill-btn {
		padding: 12px 26px;
		border-radius: var(--radius-pill);
		font-size: 0.9375rem;
		font-weight: 700;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 10px;
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		cursor: pointer;
	}

	.btn-primary-black {
		background: #111418;
		color: #FFFFFF;
		box-shadow: 0 4px 16px rgba(17, 20, 24, 0.28);
	}

	.btn-primary-black:hover {
		background: var(--pop-blue);
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(37, 99, 235, 0.35);
	}

	.btn-icon-circle {
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: transform 0.2s ease;
	}

	.btn-primary-black:hover .btn-icon-circle {
		transform: translateY(2px);
	}

	.btn-secondary-white {
		background: #FFFFFF;
		color: #111418;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
	}

	.btn-secondary-white:hover {
		background: #F5F7FA;
		transform: translateY(-2px);
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
	}

	/* =========================================================================
	   ENVELOPE & FANNING PRODUCT CARDS STAGE
	   ========================================================================= */
	.hero-envelope-stage {
		position: relative;
		width: 100%;
		max-width: 680px;
		margin: 24px auto 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}

	/* Fanned background blueprint paper sheets */
	.fanned-bg-sheet {
		position: absolute;
		bottom: 30px;
		width: 220px;
		height: 170px;
		background: rgba(255, 255, 255, 0.55);
		backdrop-filter: blur(8px);
		border: 1.5px solid rgba(255, 255, 255, 0.85);
		border-radius: 12px;
		box-shadow: 0 10px 30px rgba(60, 95, 140, 0.12);
		pointer-events: none;
		z-index: 1;
		padding: 16px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.sheet-left {
		left: 50%;
		transform: translateX(-190px) rotate(-14deg);
	}

	.sheet-right {
		left: 50%;
		transform: translateX(-10px) rotate(14deg);
	}

	.sheet-wireframe-lines {
		display: flex;
		flex-direction: column;
		gap: 8px;
		opacity: 0.45;
	}

	.wline {
		height: 4px;
		background: #8FAECF;
		border-radius: 2px;
	}
	.wline-1 { width: 85%; }
	.wline-2 { width: 65%; }
	.wline-3 { width: 45%; }

	/* Open Back Flap of the Envelope (Triangle pointing up) */
	.envelope-back-flap {
		position: absolute;
		bottom: 85px;
		left: 50%;
		transform: translateX(-50%);
		width: 530px;
		height: 185px;
		background: linear-gradient(180deg, #E6EFF8 0%, #DCE8F4 100%);
		clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
		z-index: 2;
		box-shadow: inset 0 -4px 12px rgba(60, 95, 140, 0.08);
	}

	/* Emerging Product Cards */
	.envelope-cards-container {
		position: relative;
		width: 100%;
		max-width: 560px;
		height: 250px;
		z-index: 3;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}

	.emerging-letter-card {
		position: absolute;
		bottom: 15px;
		width: 290px;
		min-height: 215px;
		background: #FFFFFF;
		border-radius: 16px;
		padding: 22px 20px 18px;
		box-shadow: 
			0 14px 36px rgba(45, 80, 125, 0.18),
			0 2px 6px rgba(0, 0, 0, 0.04);
		border: 1.5px solid rgba(0, 0, 0, 0.06);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		text-decoration: none;
		transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
		cursor: pointer;
	}

	/* Left Card: Articlo */
	.card-articlo {
		left: 50%;
		transform: translateX(-165px) rotate(-4.5deg);
		z-index: 3;
	}

	.card-articlo:hover {
		transform: translateX(-165px) translateY(-32px) rotate(-1.5deg) scale(1.04);
		box-shadow: 0 24px 50px rgba(45, 80, 125, 0.28);
		z-index: 6;
	}

	/* Right Card: Ntocks */
	.card-ntocks,
	.card-bazinga {
		left: 50%;
		transform: translateX(-110px) rotate(4deg);
		z-index: 4;
	}

	.card-ntocks:hover,
	.card-bazinga:hover {
		transform: translateX(-110px) translateY(-32px) rotate(1deg) scale(1.04);
		box-shadow: 0 24px 50px rgba(45, 80, 125, 0.28);
		z-index: 6;
	}

	.letter-card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 10px;
	}

	.card-title-text {
		font-size: 0.875rem;
		font-weight: 800;
		color: #121417;
		letter-spacing: -0.01em;
	}

	.card-badge {
		font-size: 0.6875rem;
		font-weight: 800;
		padding: 3px 8px;
		border-radius: var(--radius-pill);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.badge-coral {
		background: rgba(255, 71, 36, 0.12);
		color: var(--pop-coral);
		border: 1px solid rgba(255, 71, 36, 0.25);
	}

	.badge-yellow {
		background: #FEF3C7;
		color: #B45309;
		border: 1px solid #FDE68A;
	}

	/* Handwritten script text for Articlo (matching reference image) */
	.letter-card-script {
		font-family: var(--font-handwritten);
		font-size: 1.15rem;
		line-height: 1.35;
		color: #2D3748;
		margin: 0;
		font-weight: 600;
	}

	/* Clean typed text for Bazinga (matching reference image) */
	.letter-card-typed {
		font-size: 0.8125rem;
		line-height: 1.45;
		color: #4A5568;
		margin: 0;
		font-weight: 500;
	}

	.letter-card-footer {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-top: 12px;
		flex-wrap: wrap;
	}

	.mini-spec-pill {
		font-size: 0.6875rem;
		font-weight: 700;
		padding: 3px 8px;
		border-radius: var(--radius-pill);
		background: #F3F4F6;
		color: #1F2937;
	}

	.mini-spec-pill.yellow {
		background: #FEF08A;
		color: #854D0E;
	}

	.mini-spec-pill.muted {
		background: transparent;
		border: 1px solid #E5E7EB;
		color: #6B7280;
	}

	/* Envelope Front Pocket (V-Fold Body) */
	.envelope-front-pocket {
		position: relative;
		width: 100%;
		max-width: 550px;
		height: 155px;
		z-index: 5;
		margin-top: -85px;
		pointer-events: none;
		display: flex;
		align-items: flex-end;
		justify-content: center;
	}

	.envelope-pocket-svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: drop-shadow(0 14px 28px rgba(50, 85, 125, 0.16));
	}

	.envelope-watermark {
		position: relative;
		z-index: 6;
		padding-bottom: 22px;
		font-family: var(--font-handwritten);
		font-size: 1.4rem;
		color: #7E97B5;
		text-align: center;
		letter-spacing: 0.02em;
		opacity: 0.9;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.home-hero-section {
			padding: 12px 16px 48px;
		}

		.hero-sky-card {
			border-radius: 24px;
			padding-top: 36px;
		}

		.hero-sky-content {
			padding: 28px 16px 20px;
		}

		.sub-break {
			display: none;
		}

		.envelope-cards-container {
			height: 220px;
		}

		.emerging-letter-card {
			width: 240px;
			min-height: 190px;
			padding: 16px 14px;
		}

		.card-articlo {
			transform: translateX(-140px) rotate(-4deg);
		}

		.card-ntocks,
		.card-bazinga {
			transform: translateX(-80px) rotate(3deg);
		}

		.card-articlo:hover {
			transform: translateX(-140px) translateY(-20px) rotate(-1deg);
		}

		.card-ntocks:hover,
		.card-bazinga:hover {
			transform: translateX(-80px) translateY(-20px) rotate(1deg);
		}

		.fanned-bg-sheet {
			display: none;
		}

		.envelope-watermark {
			font-size: 1.15rem;
			padding-bottom: 14px;
		}
	}

	/* =========================================================================
	   SHARED HOMEPAGE SECTION STYLES
	   ========================================================================= */
	/* =========================================================================
	   CONCURRENT HOMEPAGE SECTION STYLES (MATCHING HERO AESTHETIC)
	   ========================================================================= */
	.section-header-center {
		text-align: center;
		margin-bottom: 56px;
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
		line-height: 1.08;
		margin: 0;
	}

	.section-subtext {
		font-size: clamp(1rem, 1.8vw, 1.15rem);
		color: var(--text-secondary);
		line-height: 1.6;
		max-width: 620px;
		margin: 14px auto 0;
		font-weight: 500;
	}

	.home-products-section {
		padding: 64px 0 80px;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
	}

	.home-horizon-section {
		padding: 80px 0;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
	}

	.horizon-editorial-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 28px;
	}

	@media (max-width: 900px) {
		.horizon-editorial-grid {
			grid-template-columns: 1fr;
		}
	}

	.horizon-item-card {
		background: #FFFFFF;
		border: 1.5px solid rgba(0, 0, 0, 0.08);
		border-radius: 24px;
		padding: 32px 28px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		box-shadow: 
			0 12px 32px -8px rgba(45, 75, 115, 0.06),
			0 1px 3px rgba(0, 0, 0, 0.04);
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.horizon-item-card:hover {
		transform: translateY(-3px);
		box-shadow: 
			0 20px 40px -10px rgba(45, 75, 115, 0.12),
			0 2px 6px rgba(0, 0, 0, 0.06);
		border-color: rgba(37, 99, 235, 0.3);
	}

	.horizon-item-card.highlight-card {
		border-color: rgba(37, 99, 235, 0.4);
		box-shadow: 0 14px 36px -8px rgba(37, 99, 235, 0.12);
	}

	.horizon-badge-row {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.phase-tag {
		font-size: 0.6875rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--pop-blue);
		background: rgba(37, 99, 235, 0.08);
		padding: 3px 10px;
		border-radius: var(--radius-pill);
	}

	.status-tag {
		font-size: 0.6875rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 3px 10px;
		border-radius: var(--radius-pill);
		font-weight: 800;
	}

	.status-color-0 {
		background: #EFF6FF;
		color: #1D4ED8;
	}

	.status-color-1 {
		background: #FEF3C7;
		color: #92400E;
	}

	.status-color-2 {
		background: #ECFDF5;
		color: #047857;
	}

	.horizon-item-title {
		font-family: var(--font-main);
		font-size: 1.4rem;
		font-weight: 800;
		color: var(--text-primary);
		letter-spacing: -0.03em;
		line-height: 1.15;
		margin: 0;
	}

	.horizon-item-desc {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
	}

	.horizon-item-footer {
		display: flex;
		align-items: center;
		gap: 6px;
		padding-top: 14px;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
		font-size: 0.75rem;
		margin-top: auto;
	}

	.state-label {
		color: var(--text-muted);
		font-weight: 600;
	}

	.state-val {
		color: var(--text-primary);
		font-weight: 700;
	}

	.home-team-section {
		padding: 80px 0;
		border-top: 1px solid rgba(0, 0, 0, 0.06);
	}

	/* Final CTA Section (Concurrent Luminous Bookend to Hero) */
	.home-cta-section {
		padding: 32px 0 96px;
	}

	.home-cta-card {
		background: linear-gradient(180deg, #FFFFFF 0%, #F0F6FC 50%, #DCE8F4 100%);
		border: 1.5px solid rgba(255, 255, 255, 0.9);
		border-radius: 36px;
		padding: 68px 32px;
		text-align: center;
		position: relative;
		box-shadow: 
			0 24px 50px -15px rgba(85, 125, 175, 0.25),
			0 2px 6px rgba(0, 0, 0, 0.04);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.cta-massive-title {
		font-family: var(--font-main);
		font-size: clamp(2.2rem, 5vw, 3.4rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		line-height: 1.08;
		color: var(--text-primary);
		margin: 12px 0 16px;
	}

	.cta-sub-text {
		font-size: 1.05rem;
		line-height: 1.6;
		color: var(--text-secondary);
		max-width: 580px;
		margin: 0 auto 32px;
		font-weight: 500;
	}

	.cta-actions-row {
		display: flex;
		gap: 16px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn-product-primary {
		background: #111418;
		color: #FFFFFF;
		font-size: 0.9375rem;
		font-weight: 700;
		padding: 12px 26px;
		border-radius: var(--radius-pill);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		box-shadow: 0 4px 14px rgba(17, 20, 24, 0.2);
		transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
		cursor: pointer;
	}

	.btn-product-primary:hover {
		background: var(--pop-blue);
		transform: translateY(-2px);
		box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
	}

	.btn-arrow-icon {
		transition: transform 0.2s ease;
	}

	.btn-product-primary:hover .btn-arrow-icon {
		transform: translate(2px, -2px);
	}

	.btn-product-secondary {
		color: var(--text-primary);
		font-size: 0.9375rem;
		font-weight: 700;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 12px 24px;
		border-radius: var(--radius-pill);
		background: #FFFFFF;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		transition: all 0.15s ease;
	}

	.btn-product-secondary:hover {
		background: #F8FAFC;
		transform: translateY(-1px);
	}
</style>
