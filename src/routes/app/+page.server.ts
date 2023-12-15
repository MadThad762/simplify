import { redirect, fail } from '@sveltejs/kit';

export const load = async ({ locals: { supabase, getSession } }) => {
	const session = await getSession();

	if (!session) {
		redirect(303, '/');
	}

	const { data: todos, error } = await supabase
		.from('todos')
		.select(`id, title, description`)
		.eq('created_by', session.user.id)
		.order('created_at', { ascending: false });

	if (error) {
		return fail(500, { success: false });
	}

	return {
		todos
	};
};

export const actions = {
	default: async ({ request, locals: { supabase } }) => {
		const formData = await request.formData();
		const id = formData.get('id') as string;

		const { error } = await /* @migration task: add path argument */ supabase
			.from('todos')
			.delete()
			.eq('id', id);

		if (error) {
			return fail(500, { message: 'Server error. Try again later.', success: false });
		}

		redirect(303, '/');
	}
};
