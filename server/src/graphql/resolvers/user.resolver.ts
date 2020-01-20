import { User } from '../../model/orm';
import { checkAuthentication } from './utils/require-auth';

import { 
	userRegistration, 
	userVerification,
	updateUser,
	deleteUser 
} from '../../main_function/user';

export async function userRegister(root, { form }, ctx) {
	const result = await userRegistration(form);
	return result;
}

export async function userLogin(root, { form }, ctx) {
	const result = await userVerification(form);
	return result;
}

export async function userRead( root, args, ctx){
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	return await User.findAll({
		raw : true
	});
}

export async function userUpdate(root, { id, form }, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await updateUser(id, form);
	return result;
}

export async function userDelete(root, { id }, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await deleteUser(id);
	return result;
}

export async function userCheck(root, args, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	return ctx.user.payload;
}