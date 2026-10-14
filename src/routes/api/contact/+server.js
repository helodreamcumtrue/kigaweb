import { json } from '@sveltejs/kit';

/**
 * Handles incoming contact form submissions.
 * Supports production transactional email dispatch via Resend (or standard API)
 * and graceful local/staging simulation when environment credentials are not yet configured.
 */
export async function POST({ request }) {
	try {
		const data = await request.json();
		const { name, email, subject, message, product, inquiryType } = data;

		// Server-side validation
		if (!name || typeof name !== 'string' || !name.trim()) {
			return json({ success: false, error: 'Full name is required.' }, { status: 400 });
		}

		if (!email || typeof email !== 'string' || !/^\S+@\S+\.\S+$/.test(email.trim())) {
			return json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
		}

		if (!subject || typeof subject !== 'string' || !subject.trim()) {
			return json({ success: false, error: 'Subject is required.' }, { status: 400 });
		}

		if (!message || typeof message !== 'string' || !message.trim()) {
			return json({ success: false, error: 'Message content is required.' }, { status: 400 });
		}

		// Sanitize field lengths
		if (name.length > 120 || email.length > 150 || subject.length > 200 || message.length > 4000) {
			return json({ success: false, error: 'Submitted field length exceeds maximum allowable limits.' }, { status: 400 });
		}

		// Environment credentials (from process.env for Node/Vercel)
		const apiKey = process.env.RESEND_API_KEY;
		const toEmail = process.env.CONTACT_TO_EMAIL;
		const fromEmail = process.env.CONTACT_FROM_EMAIL || 'contact@kiga.io';

		const submissionPayload = {
			name: name.trim(),
			email: email.trim(),
			subject: subject.trim(),
			message: message.trim(),
			product: product || 'General',
			inquiryType: inquiryType || 'General inquiry',
			timestamp: new Date().toISOString()
		};

		// If production email credentials are provided, dispatch transactional email
		if (apiKey && toEmail) {
			const resendResponse = await fetch('https://api.resend.com/emails', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${apiKey}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					from: fromEmail,
					to: [toEmail],
					reply_to: submissionPayload.email,
					subject: `[Kiga Contact] ${submissionPayload.subject} - from ${submissionPayload.name}`,
					html: `
						<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; padding: 24px; color: #121212;">
							<h2 style="margin-top: 0; color: #FF4724;">New Message via Kiga Website</h2>
							<p><strong>From:</strong> ${submissionPayload.name} (&lt;${submissionPayload.email}&gt;)</p>
							<p><strong>Inquiry Type:</strong> ${submissionPayload.inquiryType}</p>
							<p><strong>Product Interest:</strong> ${submissionPayload.product}</p>
							<p><strong>Subject:</strong> ${submissionPayload.subject}</p>
							<div style="background: #F8F6F1; padding: 16px; border-radius: 8px; margin-top: 16px; white-space: pre-wrap;">${submissionPayload.message}</div>
							<p style="font-size: 12px; color: #888888; margin-top: 24px;">Received at ${submissionPayload.timestamp}</p>
						</div>
					`
				})
			});

			if (!resendResponse.ok) {
				const errorDetails = await resendResponse.text();
				console.error('[Kiga Email API] Error sending email via Resend:', errorDetails);
				return json(
					{
						success: false,
						error: 'We were unable to deliver your message at this time. Please try again shortly or contact us directly.'
					},
					{ status: 502 }
				);
			}

			return json({
				success: true,
				delivered: true,
				message: 'Thank you for reaching out! Your message has been sent directly to the Kiga team.'
			});
		}

		// Fallback mode when environment variables are not yet configured
		console.log('[Kiga Contact Form - Pending Credentials Mode]');
		console.log('Submission received:', {
			from: `${submissionPayload.name} <${submissionPayload.email}>`,
			subject: submissionPayload.subject,
			product: submissionPayload.product,
			inquiryType: submissionPayload.inquiryType,
			message: submissionPayload.message
		});
		console.log('NOTE: To deliver emails to your inbox, set RESEND_API_KEY and CONTACT_TO_EMAIL in your environment or Vercel dashboard.');

		return json({
			success: true,
			delivered: false,
			simulated: true,
			message:
				'Thank you! Your message was received and validated by the server. (Email delivery will be forwarded to your inbox once RESEND_API_KEY and CONTACT_TO_EMAIL are configured in Vercel).'
		});
	} catch (err) {
		console.error('[Kiga Contact Endpoint Error]', err);
		return json({ success: false, error: 'A server error occurred while processing your message. Please try again.' }, { status: 500 });
	}
}
