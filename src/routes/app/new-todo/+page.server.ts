import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms/server';
import newTodoSchema from '$lib/schemas/newTodoSchema.js';

export const load = async () => {
	const form = await superValidate(newTodoSchema);

	return { form };
};

export const actions = {
	default: async ({ request, locals: { supabase, getSession } }) => {
		const session = await getSession();

		if (!session) {
			throw redirect(303, '/');
		}

		const form = await superValidate(request, newTodoSchema);

		if (!form.valid) {
			return fail(400, form);
		}

		const title = form.data.title as string;
		const description = form.data.description as string;

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
