<script>
	import ContactForm from '#lib/components/ContactForm.svelte';
	import { siteConfig } from '#lib/data/siteConfig.js';
</script>

<svelte:head>
	<title>contact us — kiga*</title>
	<meta
		name="description"
		content="get in touch with the kiga team. share product feedback, questions, or an idea worth exploring."
	/>
</svelte:head>

<div class="august-contact-page">
	<section class="contact-hero-section">
		<div class="site-container">
			<div class="contact-layout-grid">
				<!-- Left Details -->
				<div class="contact-info-col">
					<div class="hero-breadcrumb-wrap">
						<span class="breadcrumb-main">main /</span>
						<span class="breadcrumb-tag">contact us</span>
					</div>

					<h1 class="hero-giant-contact">
						let's get<br />in touch
					</h1>

					<p class="contact-subtagline">
						don't be afraid to say hello with us!
					</p>

					<div class="arrow-manifesto-box">
						<div class="arrow-glyph">&rarr;</div>
						<p class="arrow-body">
							great! we're excited to hear from you and let's start something special together. call or write to us for any inquiry.
						</p>
					</div>

					<div class="channels-list">
						<div class="channel-row">
							<span class="ch-label">email</span>
							<a href="mailto:{siteConfig.contactEmail}" class="ch-val-lime">
								{siteConfig.contactEmail}
							</a>
						</div>

						<div class="channel-row">
							<span class="ch-label">office</span>
							<p class="ch-val">{siteConfig.location}</p>
							<p class="ch-sub">{siteConfig.officeAddress.street}, {siteConfig.officeAddress.city}</p>
						</div>

						<div class="channel-row">
							<span class="ch-label">turnaround</span>
							<p class="ch-val">within 24 hours</p>
						</div>
					</div>
				</div>

				<!-- Right Form Card -->
				<div class="contact-form-col">
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</div>

<style>
	.august-contact-page {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.contact-hero-section {
		padding: 56px 0 96px;
	}

	.contact-layout-grid {
		display: grid;
		grid-template-columns: 1fr 1.15fr;
		gap: 64px;
		align-items: flex-start;
	}

	@media (max-width: 960px) {
		.contact-layout-grid {
			grid-template-columns: 1fr;
			gap: 48px;
		}
	}

	.contact-info-col {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.hero-breadcrumb-wrap {
		display: inline-flex;
		align-items: baseline;
		gap: 6px;
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
		font-weight: 700;
	}

	.hero-giant-contact {
		font-family: var(--font-main);
		font-size: clamp(3.2rem, 7vw, 5.5rem);
		font-weight: 800;
		letter-spacing: -0.05em;
		line-height: 0.95;
		color: var(--text-primary);
		text-transform: lowercase;
	}

	.contact-subtagline {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-secondary);
		letter-spacing: -0.02em;
	}

	.arrow-manifesto-box {
		display: flex;
		align-items: flex-start;
		gap: 14px;
		padding: 24px;
		background: #FFFFFF;
		border: 1.5px solid var(--border-light);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-card);
		margin-top: 8px;
	}

	.arrow-glyph {
		font-size: 1.5rem;
		color: var(--pop-blue);
		line-height: 1;
		font-weight: 900;
	}

	.arrow-body {
		font-size: 0.9375rem;
		line-height: 1.6;
		color: var(--text-secondary);
	}

	.channels-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-top: 16px;
		padding-top: 24px;
		border-top: 1px solid var(--border-light);
	}

	.channel-row {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.ch-label {
		font-size: 0.75rem;
		text-transform: lowercase;
		letter-spacing: 0.08em;
		font-weight: 800;
		color: var(--pop-blue);
	}

	.ch-val {
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.ch-val-lime {
		font-size: 1.1rem;
		font-weight: 800;
		color: var(--pop-blue);
		text-decoration: underline;
		text-underline-offset: 4px;
	}

	.ch-val-lime:hover {
		color: var(--pop-blue-hover);
	}

	.ch-sub {
		font-size: 0.875rem;
		color: var(--text-muted);
	}
</style>
