import { checkAuthentication } from './utils/require-auth';
import { 
	readTableExamCodeByQuery,
	createTableExamCode 
} from '../../main_function/table';

import { insertQuestionExam } from '../../main_function/question-exam';


export async function examRead( root, { form }, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await readTableExamCodeByQuery(form);
	return result;
}

export async function examCreate( root, { form }, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await createTableExamCode(form);
	if(!result){
		return result;
	} else {
		return true;
	}
}

export async function examInsert( root, { form }, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await insertQuestionExam(form);
	if(!result){
		return result;
	} else {
		return true;
	}
}