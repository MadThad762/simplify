import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			return fail(500, { message: 'Server error. Try again later.', success: false, email });
		}

		redirect(303, '/');
	}
};
