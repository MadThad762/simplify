import { redirect } from '@sveltejs/kit';

// src/routes/index.svelte (or wherever your root route is defined)

export async function load({ locals: { getSession } }) {
	const session = await getSession();

	if (session) {
		throw redirect(303, '/app'); // If user is authenticated, redirect to app
	}

	// If not authenticated, continue loading the landing page
	return {
		props: {
			/* any props your landing page might need */
		}
	};
}
