import { checkAuthentication } from './utils/require-auth';
import { 
	createContent,
	readContent,
	updateContent,
	deleteContent
} from '../../main_function/content';

export async function contentCreate( root, { form }, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await createContent(form);
	return result;
}

export async function contentRead( root, { form }, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await readContent(form);
	return result;
}

export async function contentUpdate(root, { id, form }, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await updateContent(id, form);
	return result[0];
}

export async function contentDelete(root, { id }, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await deleteContent(id);
	return result;
}
