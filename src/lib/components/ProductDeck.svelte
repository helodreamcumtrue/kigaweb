<script>
	import { products } from '#lib/data/products.js';
</script>

<div class="products-showcase-section" id="products">
	<!-- Unified Section Header -->
	<div class="section-header-center">
		<span class="section-pill-tag">✦ ACTIVE SOLUTIONS</span>
		<h2 class="section-headline">Focus over feature bloat.</h2>
		<p class="section-subtext">
			Two dedicated, single-purpose utilities engineered to eliminate friction, respect your time, and deliver zero-bloat velocity.
		</p>
	</div>

	<!-- Concurrent Product Cards Deck -->
	<div class="products-deck-list">
		{#each products as product, idx}
			<article
				class="product-showcase-card theme-{product.theme}"
				id="project-{product.id}"
			>
				<!-- Top Bar with Status Pills & Specs -->
				<div class="product-card-topbar">
					<div class="topbar-left">
						<span class="category-pill pill-{product.theme}">
							{#if product.id === 'articlo'}
								⚡ CAREER ACCELERATION
							{:else}
								● FINANCIAL INTELLIGENCE
							{/if}
						</span>
						<span class="version-label">{product.id === 'articlo' ? 'Articlo v2.0' : 'Ntocks • Coming Soon'}</span>
					</div>

					<div class="topbar-right">
						{#if product.id === 'articlo'}
							<span class="spec-metric-pill">⚡ 1-Click HR Outreach</span>
							<span class="spec-metric-pill muted">ATS Free Templates</span>
						{:else}
							<span class="spec-metric-pill yellow">● NSE &amp; BSE Causal Engine</span>
							<span class="spec-metric-pill muted">Zero Hallucinations</span>
						{/if}
					</div>
				</div>

				<!-- Main 2-Column Content Grid -->
				<div class="product-card-grid">
					<!-- Left Column: Copy & Details -->
					<div class="product-info-col">
						<div class="product-title-group">
							<h3 class="product-name">{product.name}</h3>
							<p class="product-tagline">{product.tagline}</p>
						</div>

						<p class="product-desc">{product.description}</p>

						<!-- Problem & Audience Callouts -->
						<div class="product-specs-box">
							<div class="spec-item">
								<span class="spec-label">The Problem:</span>
								<p class="spec-value">{product.problem}</p>
							</div>
							<div class="spec-item">
								<span class="spec-label">Target Audience:</span>
								<p class="spec-value">{product.audience}</p>
							</div>
						</div>

						<!-- Features Checklist -->
						<ul class="features-checklist">
							{#each product.features as feature}
								<li class="feature-item">
									<div class="feature-check-icon">
										<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
											<polyline points="20 6 9 17 4 12"></polyline>
										</svg>
									</div>
									<span>{feature}</span>
								</li>
							{/each}
						</ul>

						<!-- Action Button (Matching Hero Primary Black Pill) -->
						<div class="product-actions-row">
							{#if product.url}
								<a href={product.url} target="_blank" rel="noopener noreferrer" class="btn-product-primary">
									<span>Launch {product.name}</span>
									<span class="btn-arrow-icon">↗</span>
								</a>
							{:else}
								<div class="launching-status-wrap">
									<span class="btn-product-primary disabled">
										<span>Coming Soon</span>
										<span class="btn-arrow-icon">⏳</span>
									</span>
									<span class="status-micro-badge">In Development</span>
								</div>
							{/if}

							<a href="#horizon" class="btn-product-secondary">
								<span>View Roadmap</span>
								<span>↓</span>
							</a>
						</div>
					</div>

					<!-- Right Column: Clean macOS Browser Mockup Frame -->
					<div class="product-preview-col">
						<div class="browser-mockup-frame">
							<!-- macOS Glass Window Controls -->
							<div class="browser-header-bar">
								<div class="mac-window-dots">
									<span class="dot dot-red"></span>
									<span class="dot dot-amber"></span>
									<span class="dot dot-green"></span>
								</div>
								<div class="mockup-url-pill">
									<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
										<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
										<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
									</svg>
									<span>{product.id === 'articlo' ? 'articlo.online' : 'ntocks.kiga.io'}</span>
								</div>
								<div class="header-empty-spacer"></div>
							</div>

							<!-- Display Image -->
							<div class="mockup-image-viewport">
								<img
									src={product.previewImage}
									alt="{product.name} user interface preview"
									class="mockup-img"
									loading="lazy"
								/>
								<div class="mockup-floating-status">
									<span class="pulse-dot"></span>
									{#if product.id === 'articlo'}
										<span>Gmail API • 99.2% Deliverability • Active HR DB</span>
									{:else}
										<span>NSE &amp; BSE Live Feeds • Causal Engine • Coming Soon</span>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	.products-showcase-section {
		width: 100%;
		position: relative;
	}

	/* Unified Section Header Center */
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

	/* Deck List */
	.products-deck-list {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	/* Card Base */
	.product-showcase-card {
		background: #FFFFFF;
		border-radius: 28px;
		border: 1.5px solid rgba(0, 0, 0, 0.08);
		box-shadow: 
			0 16px 44px -12px rgba(45, 75, 115, 0.08),
			0 1px 3px rgba(0, 0, 0, 0.04);
		padding: 36px;
		position: relative;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
		overflow: hidden;
	}

	.product-showcase-card:hover {
		transform: translateY(-3px);
		box-shadow: 
			0 24px 50px -12px rgba(45, 75, 115, 0.14),
			0 2px 6px rgba(0, 0, 0, 0.06);
		border-color: rgba(37, 99, 235, 0.25);
	}

	/* Topbar */
	.product-card-topbar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-bottom: 24px;
		margin-bottom: 32px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.06);
		flex-wrap: wrap;
		gap: 12px;
	}

	.topbar-left {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.category-pill {
		font-size: 0.6875rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		padding: 4px 12px;
		border-radius: var(--radius-pill);
		text-transform: uppercase;
	}

	.pill-dark {
		background: rgba(255, 71, 36, 0.1);
		color: #FF4724;
		border: 1px solid rgba(255, 71, 36, 0.2);
	}

	.pill-yellow {
		background: #FEF3C7;
		color: #92400E;
		border: 1px solid #FDE68A;
	}

	.version-label {
		font-size: 0.8125rem;
		font-weight: 700;
		color: var(--text-muted);
	}

	.topbar-right {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.spec-metric-pill {
		font-size: 0.75rem;
		font-weight: 700;
		padding: 4px 12px;
		border-radius: var(--radius-pill);
		background: #F3F4F6;
		color: #1F2937;
	}

	.spec-metric-pill.yellow {
		background: #FEF08A;
		color: #854D0E;
	}

	.spec-metric-pill.muted {
		background: transparent;
		border: 1px solid #E5E7EB;
		color: #6B7280;
	}

	/* 2-Column Grid */
	.product-card-grid {
		display: grid;
		grid-template-columns: 1.1fr 1fr;
		gap: 48px;
		align-items: center;
	}

	@media (max-width: 960px) {
		.product-showcase-card {
			padding: 28px 20px;
		}

		.product-card-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}
	}

	/* Left Column Info */
	.product-info-col {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.product-title-group {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.product-name {
		font-family: var(--font-main);
		font-size: clamp(2rem, 3.5vw, 2.75rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		color: var(--text-primary);
		line-height: 1.1;
		margin: 0;
	}

	.product-tagline {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--pop-blue);
		line-height: 1.4;
		margin: 0;
	}

	.product-desc {
		font-size: 1rem;
		line-height: 1.6;
		color: var(--text-secondary);
		margin: 0;
	}

	/* Specs Box */
	.product-specs-box {
		background: #F8FAFC;
		border: 1px solid #E2E8F0;
		border-radius: 16px;
		padding: 16px 20px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.spec-item {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}

	.spec-label {
		font-size: 0.6875rem;
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: #64748B;
	}

	.spec-value {
		font-size: 0.875rem;
		line-height: 1.5;
		color: #1E293B;
		margin: 0;
		font-weight: 500;
	}

	/* Checklist */
	.features-checklist {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px 16px;
	}

	@media (max-width: 600px) {
		.features-checklist {
			grid-template-columns: 1fr;
		}
	}

	.feature-item {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.875rem;
		font-weight: 600;
		color: #334155;
	}

	.feature-check-icon {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: #E0E7FF;
		color: var(--pop-blue);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}

	/* Actions */
	.product-actions-row {
		display: flex;
		align-items: center;
		gap: 16px;
		margin-top: 8px;
		flex-wrap: wrap;
	}

	.btn-product-primary {
		background: #111418;
		color: #FFFFFF;
		font-size: 0.9375rem;
		font-weight: 700;
		padding: 11px 24px;
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
		color: var(--text-secondary);
		font-size: 0.875rem;
		font-weight: 700;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 11px 18px;
		border-radius: var(--radius-pill);
		background: #F1F5F9;
		transition: all 0.15s ease;
	}

	.btn-product-secondary:hover {
		background: #E2E8F0;
		color: var(--text-primary);
	}

	.launching-status-wrap {
		display: inline-flex;
		align-items: center;
		gap: 10px;
	}

	.btn-product-primary.disabled {
		opacity: 0.9;
		cursor: default;
	}

	.status-micro-badge {
		font-size: 0.6875rem;
		font-weight: 800;
		color: #10B981;
		background: rgba(16, 185, 129, 0.1);
		padding: 4px 10px;
		border-radius: var(--radius-pill);
	}

	/* Right Column: Browser Mockup Frame */
	.product-preview-col {
		position: relative;
	}

	.browser-mockup-frame {
		background: #FFFFFF;
		border-radius: 18px;
		border: 1px solid #E2E8F0;
		box-shadow: 
			0 16px 36px -10px rgba(50, 75, 110, 0.12),
			0 2px 6px rgba(0, 0, 0, 0.04);
		overflow: hidden;
		transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}

	.browser-mockup-frame:hover {
		transform: scale(1.02);
	}

	.browser-header-bar {
		background: #F8FAFC;
		border-bottom: 1px solid #E2E8F0;
		padding: 10px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.mac-window-dots {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
	}
	.dot-red { background: #FF5F56; }
	.dot-amber { background: #FFBD2E; }
	.dot-green { background: #27C93F; }

	.mockup-url-pill {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: #FFFFFF;
		border: 1px solid #E2E8F0;
		padding: 3px 14px;
		border-radius: var(--radius-pill);
		font-family: monospace;
		font-size: 0.6875rem;
		color: #64748B;
	}

	.header-empty-spacer {
		width: 40px;
	}

	.mockup-image-viewport {
		position: relative;
		width: 100%;
		background: #F1F5F9;
	}

	.mockup-img {
		width: 100%;
		height: auto;
		display: block;
		object-fit: cover;
	}

	.mockup-floating-status {
		position: absolute;
		bottom: 14px;
		left: 14px;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		background: rgba(17, 20, 24, 0.85);
		backdrop-filter: blur(8px);
		color: #FFFFFF;
		font-size: 0.6875rem;
		font-weight: 700;
		padding: 5px 12px;
		border-radius: var(--radius-pill);
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.pulse-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: #10B981;
		box-shadow: 0 0 6px #10B981;
	}
</style>
