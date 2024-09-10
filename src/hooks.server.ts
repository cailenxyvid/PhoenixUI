import type { HandleServerError } from '@sveltejs/kit';

// authjs magic interception
export { handle } from "$lib/auth/auth"

// https://kit.svelte.dev/docs/hooks#shared-hooks-handleerror
export const handleError: HandleServerError = async ({ error, event, status, message }) => {
    //todo: integrate New Relic here
	console.error('Unhandled server side error!', status, message, error, event);
	return { message: 'Fatal Error: ' + message, status: status };
};
