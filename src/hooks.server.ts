// src/hooks.server.ts
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit';
import { redirect, error } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
	// Setup the supabase client
	event.locals.supabase = createSupabaseServerClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
		event
	});

	// Helper function to get the session
	event.locals.getSession = async () => {
		const {
			data: { session }
		} = await event.locals.supabase.auth.getSession();
		return session;
	};

	// Protect the /app routes (GET requests)
	if (event.url.pathname.startsWith('/app')) {
		const session = await event.locals.getSession();

		// If no session, redirect to root
		if (!session) {
			throw redirect(303, '/');
		}
	}

	// Protect POST requests to all routes that start with /app
	if (event.url.pathname.startsWith('/app') && event.request.method === 'POST') {
		const session = await event.locals.getSession();

		// If no session, send an error
		if (!session) {
			throw error(401, 'Unauthorized');
		}
	}

	// Continue with the request
	return resolve(event, {
		filterSerializedResponseHeaders(name) {
			return name === 'content-range';
		}
	});
};
