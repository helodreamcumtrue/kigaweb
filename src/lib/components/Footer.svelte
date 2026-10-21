<script>
	import { siteConfig } from '#lib/data/siteConfig.js';
	import { teamMembers } from '#lib/data/team.js';
	import { products } from '#lib/data/products.js';

	const currentYear = new Date().getFullYear();
</script>

<footer class="august-footer">
	<div class="site-container footer-inner">
		<div class="footer-grid">
			<!-- Col 1: Brand -->
			<div class="footer-col brand-col">
				<a href="/" class="brand-link" aria-label="kiga home">
					<span class="brand-wordmark">kiga</span><span class="brand-asterisk">*</span>
				</a>
				<p class="brand-desc">
					A digital product collective building focused software, dedicated tools, and purposeful utilities.
				</p>
				<div class="brand-meta-pills">
					<span class="meta-pill">product collective</span>
					<span class="meta-pill">autonomous</span>
					<span class="meta-pill">zero bloat</span>
				</div>
			</div>

			<!-- Col 2: Navigation (Lowercase) -->
			<div class="footer-col">
				<h3 class="footer-col-title">navigation</h3>
				<ul class="footer-links">
					<li><a href="/" class="footer-link">home</a></li>
					<li><a href="/about" class="footer-link">about us</a></li>
					<li><a href="/#products" class="footer-link">products</a></li>
					<li><a href="/about#philosophy" class="footer-link">principles</a></li>
					<li><a href="/contact" class="footer-link">contact us</a></li>
				</ul>
			</div>

			<!-- Col 3: Launched Products -->
			<div class="footer-col">
				<h3 class="footer-col-title">solutions</h3>
				<ul class="footer-links">
					{#each products as product}
						<li>
							<a href="/#products" class="footer-link prod-link">
								<span>{product.name.toLowerCase()}</span>
								<span class="lime-tag">{product.status.toLowerCase()}</span>
							</a>
						</li>
					{/each}
					<li>
						<a href="/#horizon" class="footer-link horizon-link">
							on the horizon &rarr;
						</a>
					</li>
				</ul>
			</div>

			<!-- Col 4: Collective -->
			<div class="footer-col">
				<h3 class="footer-col-title">collective</h3>
				<p class="collective-note">
					Founded and built by
					{#each teamMembers as member, i}
						<a href="/about#team" class="member-credit">{member.name}</a>{i < teamMembers.length - 1 ? ' & ' : ''}
					{/each}.
				</p>
				<div class="footer-contact-pill">
					<span class="contact-label">direct channel</span>
					<a href="/contact" class="contact-email-link">{siteConfig.contactEmail}</a>
				</div>
			</div>
		</div>

		<!-- Footer Bottom Strip -->
		<div class="footer-bottom-bar">
			<span class="copy-text">&copy; {currentYear} kiga*. all rights reserved.</span>
			<span class="status-indicator">
				<span class="pulse-dot"></span>
				<span>operating worldwide</span>
			</span>
		</div>
	</div>
</footer>

<style>
	.august-footer {
		width: 100%;
		background-color: #F1F0EA;
		border-top: 1.5px solid var(--border-light);
		padding: 72px 0 36px;
		color: var(--text-primary);
		margin-top: auto;
	}

	.footer-inner {
		display: flex;
		flex-direction: column;
		gap: 56px;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: 2fr 1fr 1.2fr 1.5fr;
		gap: 48px;
	}

	@media (max-width: 900px) {
		.footer-grid {
			grid-template-columns: 1fr 1fr;
			gap: 36px;
		}
		.brand-col {
			grid-column: span 2;
		}
	}

	@media (max-width: 600px) {
		.footer-grid {
			grid-template-columns: 1fr;
			gap: 32px;
		}
		.brand-col {
			grid-column: span 1;
		}
	}

	.brand-link {
		display: inline-flex;
		align-items: baseline;
		gap: 2px;
		margin-bottom: 16px;
		color: var(--text-primary);
	}

	.brand-wordmark {
		font-family: var(--font-main);
		font-size: 1.6rem;
		font-weight: 800;
		letter-spacing: -0.04em;
	}

	.brand-asterisk {
		font-size: 1.5rem;
		font-weight: 800;
		color: var(--pop-blue);
	}

	.brand-desc {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--text-secondary);
		max-width: 340px;
		margin-bottom: 18px;
	}

	.brand-meta-pills {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.meta-pill {
		font-size: 0.6875rem;
		text-transform: lowercase;
		letter-spacing: 0.04em;
		padding: 3px 10px;
		border-radius: var(--radius-pill);
		background: #FFFFFF;
		border: 1px solid var(--border-light);
		color: var(--text-secondary);
		font-weight: 600;
	}

	.footer-col-title {
		font-size: 0.75rem;
		text-transform: lowercase;
		letter-spacing: 0.08em;
		font-weight: 700;
		color: var(--pop-blue);
		margin-bottom: 20px;
	}

	.footer-links {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.footer-link {
		font-size: 0.875rem;
		color: var(--text-secondary);
		text-transform: lowercase;
		font-weight: 500;
		transition: color var(--transition-fast);
	}

	.footer-link:hover {
		color: var(--pop-blue);
	}

	.prod-link {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.lime-tag {
		font-size: 0.6875rem;
		color: var(--pop-blue);
		background: rgba(37, 99, 235, 0.08);
		padding: 1px 7px;
		border-radius: var(--radius-pill);
		font-weight: 700;
	}

	.horizon-link {
		color: var(--pop-coral);
		font-weight: 600;
	}

	.collective-note {
		font-size: 0.875rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 18px;
	}

	.member-credit {
		color: var(--text-primary);
		text-decoration: underline;
		text-underline-offset: 3px;
		font-weight: 600;
	}

	.member-credit:hover {
		color: var(--pop-blue);
	}

	.footer-contact-pill {
		padding: 14px 18px;
		background: #FFFFFF;
		border: 1.5px solid var(--border-light);
		border-radius: var(--radius-md);
		display: flex;
		flex-direction: column;
		gap: 4px;
		box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.04);
	}

	.contact-label {
		font-size: 0.6875rem;
		text-transform: lowercase;
		letter-spacing: 0.06em;
		color: var(--text-muted);
		font-weight: 600;
	}

	.contact-email-link {
		font-size: 0.875rem;
		color: var(--text-primary);
		font-weight: 700;
	}

	.contact-email-link:hover {
		color: var(--pop-blue);
	}

	.footer-bottom-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 24px;
		border-top: 1px solid var(--border-light);
		font-size: 0.75rem;
		color: var(--text-muted);
	}

	@media (max-width: 600px) {
		.footer-bottom-bar {
			flex-direction: column;
			gap: 12px;
			align-items: flex-start;
		}
	}

	.status-indicator {
		display: flex;
		align-items: center;
		gap: 8px;
		font-weight: 600;
	}

	.pulse-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background-color: var(--pop-lime);
		box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
	}
</style>
