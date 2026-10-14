<script>
	import { onMount } from 'svelte';

	let timeString = $state('');

	function updateTime() {
		const now = new Date();
		timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	}

	onMount(() => {
		updateTime();
		const interval = setInterval(updateTime, 10000);
		return () => clearInterval(interval);
	});
</script>

<div class="floating-bottom-dock" role="complementary" aria-label="Quick contact prompt">
	<div class="dock-left">
		<span class="dock-pulse"></span>
		<span class="dock-hide-mobile dock-msg">Have a problem worth solving?</span>
	</div>

	<div class="dock-center">
		<a href="/contact" class="btn btn-primary btn-sm dock-cta-btn">
			<span>Talk to Us</span>
			<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<path d="M5 12h14"></path>
				<path d="m12 5 7 7-7 7"></path>
			</svg>
		</a>
	</div>

	<div class="dock-right">
		<span class="dock-meta-time">
			<span class="time-label dock-hide-mobile">Active</span>
			<span class="time-val">{timeString || 'Live'}</span>
		</span>
	</div>
</div>

<style>
	.dock-left {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.dock-pulse {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background-color: var(--brand-vermillion);
		box-shadow: 0 0 0 0 rgba(255, 71, 36, 0.7);
		animation: pulse-ring 2s infinite cubic-bezier(0.66, 0, 0, 1);
	}

	@keyframes pulse-ring {
		0% {
			box-shadow: 0 0 0 0 rgba(255, 71, 36, 0.7);
		}
		70% {
			box-shadow: 0 0 0 7px rgba(255, 71, 36, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(255, 71, 36, 0);
		}
	}

	.dock-msg {
		font-weight: 600;
		color: var(--text-primary);
		font-size: 0.875rem;
	}

	.dock-cta-btn {
		padding: 7px 16px;
		font-size: 0.8125rem;
		background: #121212;
		color: #FFFFFF;
	}

	.dock-cta-btn:hover {
		background: #2a2a2a;
	}

	.dock-right {
		display: flex;
		align-items: center;
	}

	.dock-meta-time {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 0.8125rem;
		color: var(--text-muted);
		font-weight: 500;
	}

	.time-label {
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.6875rem;
		font-weight: 700;
		color: var(--text-muted);
	}

	.time-val {
		font-variant-numeric: tabular-nums;
		font-weight: 600;
		color: var(--text-primary);
	}
</style>
