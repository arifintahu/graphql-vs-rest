import { checkAuthentication } from './utils/require-auth';
import { 
	readTableTeacherById,
	readTableSubjectById,
	readTableTopicById,
	readTableSubtopicById,
	readTableRoomById,
	readTableSubject,
	readTableTopicByQuery,
	readTableSubtopicByQuery,
	readTableRoom,
	readTableTeacher 
} from '../../main_function/table';

import {
	readQuestionExam
} from '../../main_function/question-exam';

import {
	readQuestionBankDetail
} from '../../main_function/question-bank';

export const Question = {
	async teacher(root, args, ctx) {
		const result = await readTableTeacherById(root.id_teacher);
		return result;
	},
	async subject(root, args, ctx) {
		const result = await readTableSubjectById(root.id_subject);
		return result;
	},
	async topic(root, args, ctx) {
		const result = await readTableTopicById(root.id_topic);
		return result;
	},
	async subtopic(root, args, ctx) {
		const result = await readTableSubtopicById(root.id_subtopic);
		return result;
	}
}

export const Exam = {
	async teacher(root, args, ctx) {
		const result = await readTableTeacherById(root.id_teacher);
		return result;
	},
	async room(root, args, ctx) {
		const result = await readTableRoomById(root.id_room);
		return result;
	},
	async question({ exam_code }, args, ctx) {
		const result = await readQuestionExam({ exam_code : exam_code });
		return result;
	}
}

export const QuestionExam = {
	async detail({ id_question }, args, ctx) {
		const result = await readQuestionBankDetail({ id_question : id_question });
		return result[0];
	}
}

export const SubjectDetail = {
	async topic({ id_subject }, args, ctx) {
		const result = await readTableTopicByQuery({ id_subject : id_subject });
		return result;
	}
}

export const TopicDetail = {
	async subtopic({ id_topic }, args, ctx) {
		const result = await readTableSubtopicByQuery({ id_topic : id_topic });
		return result;
	}
}

export async function subjectRead(root, args, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await readTableSubject();
	return result;
}

export async function teacherRead(root, args, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await readTableTeacher();
	return result;
}

export async function roomRead(root, args, ctx) {
	const ok = checkAuthentication(ctx);
	if (!ok) {
		return;
	}
	const result = await readTableRoom();
	return result;
}