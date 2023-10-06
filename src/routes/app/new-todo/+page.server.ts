import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request, locals: { supabase, getSession } }) => {
		const formData = await request.formData();
		const title = formData.get('title') as string;
		const description = formData.get('description') as string;

		const session = await getSession();

		if (!session) {
			throw redirect(303, '/');
		}

		const { error } = await supabase.from('todos').insert({
			title,
			description
		});

		if (error) {
			return fail(500, {
				title,
				description
			});
		}

		throw redirect(303, '/');
	}
};
