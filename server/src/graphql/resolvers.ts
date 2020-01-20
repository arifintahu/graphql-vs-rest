import { 
	userRead, 
	userRegister,
	userLogin,
	userUpdate,
	userDelete,
	userCheck  
} from './resolvers/user.resolver';

import { 
	questionRead,
	questionCreate,
	questionUpdate,
	questionDelete
} from './resolvers/question.resolver';

import { 
	Question,
	Exam,
	QuestionExam,
	SubjectDetail,
	TopicDetail,
	subjectRead,
	teacherRead,
	roomRead 
} from './resolvers/table.resolver';

import { 
	examRead,
	examCreate,
	examInsert 
} from './resolvers/exam.resolver';


export const resolvers = {
	Query : {
		userRead : userRead,
		userLogin : userLogin,
		userCheck : userCheck,
		questionRead : questionRead,
		examRead : examRead,
		subjectRead : subjectRead,
		teacherRead : teacherRead,
		roomRead : roomRead
	},
	Mutation : {
		userRegister : userRegister,
		userUpdate : userUpdate,
		userDelete : userDelete,
		questionCreate : questionCreate,
		questionUpdate : questionUpdate,
		questionDelete : questionDelete,
		examCreate : examCreate,
		examInsert : examInsert
	},
	Question,
	Exam,
	QuestionExam,
	SubjectDetail,
	TopicDetail
};

