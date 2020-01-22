import { checkAuthentication } from './utils/require-auth';
import { 
	createContentTag,
	readContentTag
} from '../../main_function/content-tag';


export const Content = {
	async tag(root, args, ctx) {
		const result = await readContentTag({ 
			content_id : root.id 
		});
		return result;
	}
}

export async function contentTagCreate( root, { form }, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await createContentTag(form);
	return true;
}

export async function contentTagRead(root, { form }, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await readContentTag(form);
	return result;
}