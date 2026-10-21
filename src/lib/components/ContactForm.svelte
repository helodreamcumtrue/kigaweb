<script>
	let formData = $state({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
		product: 'General',
		inquiryType: 'General inquiry'
	});

	let errors = $state({});
	let isSubmitting = $state(false);
	let submitStatus = $state(null);

	function validate() {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Please provide your name.';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Please provide your email address.';
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
			newErrors.email = 'Please enter a valid email address.';
		}

		if (!formData.subject.trim()) {
			newErrors.subject = 'Please provide a subject.';
		}

		if (!formData.message.trim()) {
			newErrors.message = 'Please provide your message.';
		}

		errors = newErrors;
		return Object.keys(newErrors).length === 0;
	}

	async function handleSubmit(e) {
		e.preventDefault();
		submitStatus = null;

		if (!validate()) {
			return;
		}

		isSubmitting = true;

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const data = await res.json();

			if (res.ok && data.success) {
				submitStatus = {
					type: 'success',
					message: data.message,
					simulated: data.simulated
				};
				formData = {
					name: '',
					email: '',
					phone: '',
					subject: '',
					message: '',
					product: 'General',
					inquiryType: 'General inquiry'
				};
				errors = {};
			} else {
				submitStatus = {
					type: 'error',
					message: data.error || 'Unable to submit your message. Please verify and try again.'
				};
			}
		} catch (err) {
			console.error('Contact submission error:', err);
			submitStatus = {
				type: 'error',
				message: 'Network connection error. Please try again shortly.'
			};
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="august-contact-box" id="contact-form-container">
	<div class="contact-box-header">
		<h2 class="box-title">send a message.</h2>
		<span class="direct-tag">
			<span class="lime-dot"></span>
			<span>direct channel</span>
		</span>
	</div>

	{#if submitStatus && submitStatus.type === 'success'}
		<div class="status-box success-box" role="status" aria-live="polite">
			<h3 class="status-title">Message Received</h3>
			<p class="status-desc">{submitStatus.message}</p>
			{#if submitStatus.simulated}
				<p class="status-hint">
					(Environment: Endpoint validated and logged. Set <code>RESEND_API_KEY</code> and <code>CONTACT_TO_EMAIL</code> in Vercel to forward directly to your inbox.)
				</p>
			{/if}
			<button
				type="button"
				class="btn-pill"
				style="background: var(--accent-lime); color: #050605; border-color: var(--accent-lime); margin-top: 14px; font-weight: 700;"
				onclick={() => (submitStatus = null)}
			>
				send another message
			</button>
		</div>
	{:else}
		<form class="august-form" onsubmit={handleSubmit} novalidate>
			{#if submitStatus && submitStatus.type === 'error'}
				<div class="status-box error-box" role="alert">
					<span>{submitStatus.message}</span>
				</div>
			{/if}

			<div class="form-row two-col">
				<div class="field-wrap">
					<label for="contact-name" class="label-text">name <span class="req">*</span></label>
					<input
						id="contact-name"
						type="text"
						class="text-input"
						class:has-err={errors.name}
						placeholder="Arnav Nahata"
						bind:value={formData.name}
						disabled={isSubmitting}
						aria-required="true"
					/>
					{#if errors.name}
						<span class="err-hint">{errors.name}</span>
					{/if}
				</div>

				<div class="field-wrap">
					<label for="contact-email" class="label-text">email <span class="req">*</span></label>
					<input
						id="contact-email"
						type="email"
						class="text-input"
						class:has-err={errors.email}
						placeholder="your@email.com"
						bind:value={formData.email}
						disabled={isSubmitting}
						aria-required="true"
					/>
					{#if errors.email}
						<span class="err-hint">{errors.email}</span>
					{/if}
				</div>
			</div>

			<div class="form-row two-col">
				<div class="field-wrap">
					<label for="contact-phone" class="label-text">phone <span class="opt">(optional)</span></label>
					<input
						id="contact-phone"
						type="tel"
						class="text-input"
						placeholder="+1 (555) 000-0000"
						bind:value={formData.phone}
						disabled={isSubmitting}
					/>
				</div>

				<div class="field-wrap">
					<label for="contact-subject" class="label-text">subject <span class="req">*</span></label>
					<input
						id="contact-subject"
						type="text"
						class="text-input"
						class:has-err={errors.subject}
						placeholder="product inquiry / collaboration"
						bind:value={formData.subject}
						disabled={isSubmitting}
						aria-required="true"
					/>
					{#if errors.subject}
						<span class="err-hint">{errors.subject}</span>
					{/if}
				</div>
			</div>

			<div class="form-row two-col">
				<div class="field-wrap">
					<label for="contact-product" class="label-text">product of interest</label>
					<select id="contact-product" class="select-input" bind:value={formData.product} disabled={isSubmitting}>
						<option value="General">general / all solutions</option>
						<option value="Articlo">articlo (hr outreach &amp; ats resumes)</option>
						<option value="Ntocks">ntocks (nse &amp; bse causal intelligence)</option>
						<option value="On the Horizon">on the horizon</option>
						<option value="Other">other</option>
					</select>
				</div>

				<div class="field-wrap">
					<label for="contact-inquiry" class="label-text">inquiry type</label>
					<select id="contact-inquiry" class="select-input" bind:value={formData.inquiryType} disabled={isSubmitting}>
						<option value="General inquiry">general inquiry</option>
						<option value="Product feedback">product feedback</option>
						<option value="Collaboration">collaboration</option>
						<option value="Problem worth solving">problem worth solving</option>
					</select>
				</div>
			</div>

			<div class="field-wrap">
				<label for="contact-message" class="label-text">tell us what you're interested in <span class="req">*</span></label>
				<textarea
					id="contact-message"
					class="textarea-input"
					class:has-err={errors.message}
					rows="4"
					placeholder="share your idea, question, or problem worth solving..."
					bind:value={formData.message}
					disabled={isSubmitting}
					aria-required="true"
				></textarea>
				{#if errors.message}
					<span class="err-hint">{errors.message}</span>
				{/if}
			</div>

			<button
				type="submit"
				class="btn-pill btn-submit-lime"
				disabled={isSubmitting}
			>
				{#if isSubmitting}
					<span>sending...</span>
				{:else}
					<span>send to us &rarr;</span>
				{/if}
			</button>
		</form>
	{/if}
</div>

<style>
	.august-contact-box {
		background: #FFFFFF;
		border: 2px solid var(--text-primary);
		border-radius: var(--radius-xl);
		padding: 44px;
		box-shadow: 6px 6px 0px #121417;
	}

	@media (max-width: 600px) {
		.august-contact-box {
			padding: 28px 20px;
		}
	}

	.contact-box-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 28px;
		padding-bottom: 16px;
		border-bottom: 1px solid var(--border-light);
	}

	.box-title {
		font-family: var(--font-main);
		font-size: 1.6rem;
		font-weight: 800;
		color: var(--text-primary);
		text-transform: lowercase;
		letter-spacing: -0.03em;
	}

	.direct-tag {
		display: flex;
		align-items: center;
		gap: 6px;
		font-size: 0.75rem;
		color: var(--pop-blue);
		font-weight: 700;
		text-transform: lowercase;
	}

	.lime-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
		background: var(--pop-lime);
		box-shadow: 0 0 8px rgba(16, 185, 129, 0.5);
	}

	.august-form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.form-row.two-col {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}

	@media (max-width: 640px) {
		.form-row.two-col {
			grid-template-columns: 1fr;
		}
	}

	.field-wrap {
		display: flex;
		flex-direction: column;
		gap: 6px;
	}

	.label-text {
		font-size: 0.75rem;
		color: var(--text-secondary);
		text-transform: lowercase;
		letter-spacing: 0.04em;
		font-weight: 700;
	}

	.req {
		color: var(--pop-coral);
	}

	.opt {
		color: var(--text-muted);
	}

	.text-input,
	.select-input,
	.textarea-input {
		width: 100%;
		background: #FAF9F5;
		color: var(--text-primary);
		border: 1.5px solid var(--border-medium);
		border-radius: var(--radius-sm);
		padding: 12px 14px;
		font-size: 0.9375rem;
		transition: all var(--transition-fast);
	}

	.text-input:focus,
	.select-input:focus,
	.textarea-input:focus {
		outline: none;
		border-color: var(--pop-blue);
		background: #FFFFFF;
		box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
	}

	.text-input.has-err,
	.textarea-input.has-err {
		border-color: var(--pop-coral);
	}

	.textarea-input {
		resize: vertical;
		min-height: 110px;
	}

	.err-hint {
		font-size: 0.75rem;
		color: var(--pop-coral);
		font-weight: 600;
	}

	.btn-submit-lime {
		width: 100%;
		padding: 14px;
		background: var(--pop-dark);
		color: #FFFFFF;
		font-weight: 700;
		border: 2px solid var(--pop-dark);
		text-transform: lowercase;
		font-size: 0.9375rem;
		margin-top: 8px;
		border-radius: var(--radius-pill);
		cursor: pointer;
		box-shadow: 3px 3px 0px #121417;
		transition: all var(--transition-fast);
	}

	.btn-submit-lime:hover:not(:disabled) {
		background: var(--pop-blue);
		border-color: var(--pop-blue);
		transform: translate(-1px, -1px);
		box-shadow: 4px 4px 0px #121417;
	}

	.btn-submit-lime:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	/* Status Banners */
	.status-box {
		padding: 24px;
		border-radius: var(--radius-md);
	}

	.success-box {
		background: rgba(16, 185, 129, 0.1);
		border: 1.5px solid var(--pop-lime);
		color: var(--text-primary);
	}

	.status-title {
		font-size: 1.2rem;
		font-weight: 800;
		color: #065F46;
		margin-bottom: 6px;
	}

	.status-desc {
		font-size: 0.9375rem;
		line-height: 1.5;
		color: var(--text-secondary);
	}

	.status-hint {
		font-size: 0.8125rem;
		color: var(--text-muted);
		margin-top: 8px;
	}

	.error-box {
		background: rgba(255, 71, 36, 0.1);
		border: 1.5px solid var(--pop-coral);
		color: #991B1B;
		font-size: 0.875rem;
	}
</style>
