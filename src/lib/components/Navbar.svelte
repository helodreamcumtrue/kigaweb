<script>
	import { page } from '$app/state';

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	const currentPath = $derived(page.url.pathname);
</script>

<div class="floating-dock-container">
	<header class="capsule-nav-dock">
		<!-- Left Brand Mark -->
		<a href="/" class="dock-brand-item" aria-label="Kiga home" onclick={closeMobileMenu}>
			<span class="brand-sparkle">✦</span>
			<span class="brand-wordmark">kiga</span><span class="brand-asterisk">*</span>
		</a>

		<!-- Center Floating Capsule Navigation (Exact recreation of Image 3) -->
		<nav class="dock-nav-pill" aria-label="Main Navigation">
			<a
				href="/"
				class="capsule-link"
				class:is-active={currentPath === '/'}
			>
				<span>Home</span>
			</a>
			<a
				href="/#products"
				class="capsule-link"
			>
				<span>Work</span>
			</a>
			<a
				href="/about"
				class="capsule-link"
				class:is-active={currentPath === '/about'}
			>
				<span>About</span>
			</a>
			<a
				href="/contact"
				class="capsule-link"
				class:is-active={currentPath === '/contact'}
			>
				<span>Contact</span>
			</a>
		</nav>

		<!-- Mobile Burger Toggle Button (Shown on mobile only) -->
		<div class="dock-action-wrap">
			<button
				type="button"
				class="mobile-toggle-btn"
				aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={mobileMenuOpen}
				onclick={toggleMobileMenu}
			>
				<span class="bar" class:open-t={mobileMenuOpen}></span>
				<span class="bar" class:open-m={mobileMenuOpen}></span>
				<span class="bar" class:open-b={mobileMenuOpen}></span>
			</button>
		</div>
	</header>

	<!-- Mobile Drawer Menu -->
	{#if mobileMenuOpen}
		<div class="mobile-menu-overlay" role="dialog" aria-modal="true">
			<ul class="mobile-nav-list">
				<li><a href="/" class="mobile-link" onclick={closeMobileMenu}>Home</a></li>
				<li><a href="/#products" class="mobile-link" onclick={closeMobileMenu}>Work / Products</a></li>
				<li><a href="/about" class="mobile-link" onclick={closeMobileMenu}>About Us</a></li>
				<li><a href="/about#philosophy" class="mobile-link" onclick={closeMobileMenu}>Philosophy</a></li>
				<li><a href="/about#team" class="mobile-link" onclick={closeMobileMenu}>Team</a></li>
				<li><a href="/contact" class="mobile-link" onclick={closeMobileMenu}>Contact</a></li>
			</ul>
		</div>
	{/if}
</div>

<style>
	.floating-dock-container {
		position: sticky;
		top: 14px;
		z-index: 100;
		width: 100%;
		padding: 0 20px;
		pointer-events: none;
	}

	/* The Frosted Glass Capsule Dock (Image 3) */
	.capsule-nav-dock {
		pointer-events: auto;
		max-width: 820px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		background: rgba(255, 255, 255, 0.72);
		backdrop-filter: blur(24px);
		-webkit-backdrop-filter: blur(24px);
		border: 1px solid rgba(255, 255, 255, 0.85);
		border-radius: var(--radius-pill);
		padding: 6px 8px 6px 20px;
		box-shadow:
			0 12px 32px rgba(0, 0, 0, 0.08),
			0 2px 6px rgba(0, 0, 0, 0.04);
		transition: transform var(--transition-fast), box-shadow var(--transition-fast);
	}

	.capsule-nav-dock:hover {
		box-shadow:
			0 16px 38px rgba(0, 0, 0, 0.11),
			0 4px 10px rgba(0, 0, 0, 0.05);
	}

	/* Left Brand Wordmark */
	.dock-brand-item {
		display: inline-flex;
		align-items: baseline;
		gap: 3px;
		text-decoration: none;
		color: var(--text-primary);
		flex-shrink: 0;
	}

	.brand-sparkle {
		font-size: 0.875rem;
		color: var(--pop-blue);
		margin-right: 2px;
	}

	.brand-wordmark {
		font-family: var(--font-main);
		font-size: 1.4rem;
		font-weight: 800;
		letter-spacing: -0.04em;
		color: var(--text-primary);
	}

	.brand-asterisk {
		font-size: 1.35rem;
		font-weight: 800;
		color: var(--pop-blue);
		display: inline-block;
		animation: asterisk-spin 12s linear infinite;
	}

	@keyframes asterisk-spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	/* Center Navigation Capsule (Image 3 Style) */
	.dock-nav-pill {
		display: flex;
		align-items: center;
		background: rgba(0, 0, 0, 0.04);
		padding: 4px;
		border-radius: var(--radius-pill);
		border: 1px solid rgba(0, 0, 0, 0.04);
		gap: 2px;
	}

	.capsule-link {
		padding: 7px 20px;
		font-size: 0.875rem;
		font-weight: 600;
		color: #555D68;
		border-radius: var(--radius-pill);
		text-decoration: none;
		transition: all 0.18s cubic-bezier(0.16, 1, 0.3, 1);
		user-select: none;
	}

	.capsule-link:hover {
		color: var(--text-primary);
	}

	/* Solid White Active Capsule (Directly matching Image 3) */
	.capsule-link.is-active {
		background: #FFFFFF;
		color: #121417;
		font-weight: 700;
		box-shadow:
			0 2px 8px rgba(0, 0, 0, 0.1),
			0 1px 2px rgba(0, 0, 0, 0.05);
	}

	/* Right Actions */
	.dock-action-wrap {
		display: flex;
		align-items: center;
		gap: 8px;
		flex-shrink: 0;
	}

	/* Mobile Toggle Button */
	.mobile-toggle-btn {
		display: none;
		width: 36px;
		height: 36px;
		background: #FFFFFF;
		border: 1px solid rgba(0, 0, 0, 0.12);
		border-radius: 50%;
		cursor: pointer;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 4px;
		padding: 0;
	}

	.bar {
		width: 16px;
		height: 2px;
		background: var(--text-primary);
		transition: all 0.22s ease;
	}

	.bar.open-t {
		transform: translateY(6px) rotate(45deg);
	}

	.bar.open-m {
		opacity: 0;
	}

	.bar.open-b {
		transform: translateY(-6px) rotate(-45deg);
	}

	/* Mobile Menu */
	.mobile-menu-overlay {
		position: fixed;
		top: 76px;
		left: 20px;
		right: 20px;
		background: rgba(255, 255, 255, 0.95);
		backdrop-filter: blur(20px);
		border: 1.5px solid var(--text-primary);
		border-radius: var(--radius-xl);
		padding: 28px 24px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		box-shadow: 0 16px 40px rgba(0, 0, 0, 0.14);
		pointer-events: auto;
	}

	.mobile-nav-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	.mobile-link {
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--text-primary);
		text-decoration: none;
	}

	@media (max-width: 780px) {
		.dock-nav-pill {
			display: none;
		}

		.mobile-toggle-btn {
			display: flex;
		}

		.capsule-nav-dock {
			padding: 8px 12px 8px 18px;
		}
	}
</style>
