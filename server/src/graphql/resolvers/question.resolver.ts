import { checkAuthentication } from './utils/require-auth';
import { 
	readQuestionBankDetail,
	createQuestionBank,
	updateQuestionBankById,
	deleteQuestionBankById 
} from '../../main_function/question-bank';

export async function questionCreate( root, { form }, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await createQuestionBank(form);
	console.log(result);
	return result[0];
}

export async function questionRead( root, { form }, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await readQuestionBankDetail(form);
	return result;
}

export async function questionUpdate(root, { id, form }, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await updateQuestionBankById(id, form);
	return result[0];
}

export async function questionDelete(root, { id }, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await deleteQuestionBankById(id);
	return result;
}
