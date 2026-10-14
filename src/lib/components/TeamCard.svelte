<script>
	import { teamMembers } from '#lib/data/team.js';
</script>

<div class="team-showcase-section" id="team">
	<!-- Unified Section Header -->
	<div class="section-header-center">
		<span class="section-pill-tag">✦ THE FOUNDERS</span>
		<h2 class="section-headline">Meet the collective.</h2>
		<p class="section-subtext">
			Two product founders dedicated to crafting clean, purpose-driven digital software without the enterprise bloat.
		</p>
	</div>

	<!-- Alternating Team Rows (Directly recreation of Image 2) -->
	<div class="team-rows-list">
		{#each teamMembers as member, idx}
			<article class="team-member-row" class:is-reversed={idx % 2 === 1}>
				<!-- Text Column -->
				<div class="member-text-col">
					<div class="member-heading-group">
						<span class="member-role-title">{member.role}</span>
						<h3 class="member-display-name">{member.name}</h3>
					</div>

					<p class="member-bio-text">{member.bio}</p>

					<blockquote class="member-personal-quote">
						"{member.quote}"
					</blockquote>

					<div class="member-status-chip">
						<span class="chip-dot"></span>
						<span>Building Kiga Full-time</span>
					</div>
				</div>

				<!-- Circular Portrait Column with Floating Orbiting Social Badges -->
				<div class="member-portrait-col">
					<div class="orbit-stage-wrapper">
						<!-- Central Circular Avatar Disc -->
						<div class="portrait-circle-disc">
							<img
								src={member.image}
								alt="{member.name} - {member.role}"
								class="portrait-photo-cutout"
								loading="lazy"
							/>
						</div>

						<!-- Orbiting Social Satellite Badges (From Image 2) -->
						<div class="orbit-satellites-ring" aria-label="{member.name} social channels">
							{#each member.socials as social}
								<a
									href={social.url}
									target="_blank"
									rel="noopener noreferrer"
									class="orbit-badge badge-pos-{social.pos}"
									style:--badge-bg={social.bg}
									style:--badge-color={social.color}
									aria-label="{social.name} profile"
									title="{social.name}"
								>
									{#if social.icon === 'twitter'}
										<!-- Twitter / X -->
										<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
										</svg>
									{:else if social.icon === 'linkedin'}
										<!-- LinkedIn -->
										<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
											<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 1 0 1.63 1.63c0-.9-.73-1.63-1.63-1.63Z"/>
										</svg>
									{:else if social.icon === 'github'}
										<!-- GitHub -->
										<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
										</svg>
									{:else if social.icon === 'dribbble'}
										<!-- Dribbble (Basketball Icon from Image 2) -->
										<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.312c-.426-.089-2.28-.46-4.502-.218-.088-.2-.178-.401-.273-.603a23.956 23.956 0 0 0-1.055-1.986c2.457-1.127 3.663-2.327 3.9-2.505zm-5.467-1.977c2.14 1.058 3.75 2.85 4.417 5.064-.202.155-1.32 1.258-3.642 2.308-1.054-1.928-2.28-3.65-2.617-4.116.634-1.503 1.242-2.736 1.842-3.256zm-2.825.86c.322.428 1.543 2.144 2.587 4.053-2.784.81-5.753.864-6.435.865a8.558 8.558 0 0 1 3.848-4.918zm-6.85 6.942c.57-.005 3.018-.04 5.567-.743.344.697.669 1.408.97 2.128-3.528 1.042-6.52 3.66-6.685 3.808a8.497 8.497 0 0 1 .148-5.193zm2.593 6.994c.2-.18 2.656-2.4 6.012-3.468.99 2.655 1.393 4.93 1.488 5.514a8.544 8.544 0 0 1-7.5-2.046zm9.214 1.09c-.11-.69-.537-2.87-1.505-5.434 2.05-.28 3.82.043 4.256.136a8.528 8.528 0 0 1-2.751 5.298z"/>
										</svg>
									{:else if social.icon === 'steam'}
										<!-- Steam (Gaming icon from Image 2) -->
										<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12 2a10 10 0 0 0-10 10c0 4.7 3.25 8.65 7.64 9.69l3.07-4.4a3.17 3.17 0 0 1-.71-1.29l-4.2-1.8A3.33 3.33 0 0 1 6.67 11a3.33 3.33 0 1 1 3.33 3.33c0 .1-.01.2-.02.3l4.22 1.8c.41-.2.87-.33 1.36-.33a3.33 3.33 0 1 1 3.33 3.33 3.33 3.33 0 0 1-3.33 3.33c-.49 0-.95-.12-1.36-.33l-3.08 4.41c.29.05.58.08.88.08a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/>
										</svg>
									{/if}
								</a>
							{/each}
						</div>
					</div>
				</div>
			</article>
		{/each}
	</div>
</div>

<style>
	.team-showcase-section {
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

	.team-rows-list {
		display: flex;
		flex-direction: column;
		gap: 40px;
	}

	/* Alternating 2-column member card */
	.team-member-row {
		display: grid;
		grid-template-columns: 1.15fr 0.85fr;
		gap: 48px;
		align-items: center;
		padding: 36px;
		background: #FFFFFF;
		border-radius: 28px;
		border: 1.5px solid rgba(0, 0, 0, 0.08);
		box-shadow: 
			0 16px 44px -12px rgba(45, 75, 115, 0.08),
			0 1px 3px rgba(0, 0, 0, 0.04);
		position: relative;
		transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.team-member-row:hover {
		transform: translateY(-3px);
		box-shadow: 
			0 24px 50px -12px rgba(45, 75, 115, 0.14),
			0 2px 6px rgba(0, 0, 0, 0.06);
		border-color: rgba(37, 99, 235, 0.25);
	}

	/* Reverse layout on alternate row (Image 2) */
	.team-member-row.is-reversed {
		grid-template-columns: 0.85fr 1.15fr;
	}

	.team-member-row.is-reversed .member-text-col {
		order: 2;
	}

	.team-member-row.is-reversed .member-portrait-col {
		order: 1;
	}

	@media (max-width: 900px) {
		.team-member-row,
		.team-member-row.is-reversed {
			grid-template-columns: 1fr;
			gap: 40px;
			padding: 24px 20px;
		}

		.team-member-row.is-reversed .member-text-col {
			order: 2;
		}

		.team-member-row.is-reversed .member-portrait-col {
			order: 1;
		}
	}

	/* Text Column */
	.member-text-col {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.member-heading-group {
		display: flex;
		flex-direction: column;
		gap: 4px;
	}

	.member-display-name {
		font-family: var(--font-main);
		font-size: clamp(2rem, 3.5vw, 2.75rem);
		font-weight: 800;
		letter-spacing: -0.04em;
		color: var(--text-primary);
		line-height: 1.1;
	}

	.member-role-title {
		font-size: 0.8125rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: 800;
		color: var(--pop-blue);
	}

	.member-bio-text {
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--text-secondary);
	}

	.member-personal-quote {
		font-family: var(--font-serif-italic);
		font-style: italic;
		font-size: 1.15rem;
		line-height: 1.5;
		color: var(--text-primary);
		padding-left: 18px;
		border-left: 3px solid var(--pop-yellow);
		margin: 6px 0;
	}

	.member-status-chip {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 4px 14px;
		border-radius: var(--radius-pill);
		background: #F4F5F1;
		border: 1px solid var(--border-light);
		font-size: 0.75rem;
		font-weight: 700;
		color: var(--text-secondary);
		align-self: flex-start;
		margin-top: 4px;
	}

	.chip-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--pop-lime);
		box-shadow: 0 0 6px var(--pop-lime);
	}

	/* --------------------------------------------------------------------------
	   PORTRAIT & ORBITING SOCIAL BADGES (Directly Recreation of Image 2)
	   -------------------------------------------------------------------------- */
	.member-portrait-col {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.orbit-stage-wrapper {
		position: relative;
		width: 290px;
		height: 290px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 600px) {
		.orbit-stage-wrapper {
			width: 240px;
			height: 240px;
		}
	}

	/* The Central Circular Cutout Portrait */
	.portrait-circle-disc {
		width: 240px;
		height: 240px;
		border-radius: 50%;
		background-color: #16181D;
		overflow: hidden;
		position: relative;
		box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16);
		border: 4px solid #FFFFFF;
		transition: transform var(--transition-smooth);
	}

	@media (max-width: 600px) {
		.portrait-circle-disc {
			width: 200px;
			height: 200px;
		}
	}

	.portrait-circle-disc:hover {
		transform: scale(1.03);
	}

	.portrait-photo-cutout {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	/* Orbiting Satellite Badges Container */
	.orbit-satellites-ring {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.orbit-badge {
		position: absolute;
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background-color: var(--badge-bg, #121417);
		color: var(--badge-color, #FFFFFF);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.18), 0 0 0 3px #FFFFFF;
		pointer-events: auto;
		cursor: pointer;
		transition: transform 0.22s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.22s ease;
		text-decoration: none;
	}

	.orbit-badge:hover {
		transform: scale(1.22);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25), 0 0 0 4px #FFFFFF;
		z-index: 20;
	}

	/* Satellite Coordinates around the 290px perimeter from Image 2 */
	.badge-pos-top {
		top: 6px;
		left: 50%;
		transform: translateX(-50%);
	}
	.badge-pos-top:hover {
		transform: translateX(-50%) scale(1.22);
	}

	.badge-pos-top-left {
		top: 36px;
		left: 14px;
	}

	.badge-pos-top-right {
		top: 36px;
		right: 14px;
	}

	.badge-pos-bottom-left {
		bottom: 36px;
		left: 14px;
	}

	.badge-pos-bottom-right {
		bottom: 36px;
		right: 14px;
	}
</style>
