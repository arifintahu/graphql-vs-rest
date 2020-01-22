import { 
	userRead, 
	userRegister,
	userLogin,
	userUpdate,
	userDelete,
	userCheck  
} from './resolvers/user.resolver';

import { 
	contentCreate,
	contentRead,
	contentUpdate,
	contentDelete
} from './resolvers/content.resolver';

import { 
	contentTagCreate,
	Content
} from './resolvers/content-tag.resolver';

export const resolvers = {
	Query : {
		userRead : userRead,
		userLogin : userLogin,
		userCheck : userCheck,
		contentRead : contentRead
	},
	Mutation : {
		userRegister : userRegister,
		userUpdate : userUpdate,
		userDelete : userDelete,
		contentCreate : contentCreate,
		contentUpdate : contentUpdate,
		contentDelete : contentDelete,
		contentTagCreate : contentTagCreate
	},
	Content
};

