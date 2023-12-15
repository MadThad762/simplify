import { fail, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ locals }) => {
	const { error } = await locals.supabase.auth.signOut();

	if (error) {
		throw fail(500, { message: 'Server error. Try again later.', success: false });
	}

	redirect(303, '/');
};
