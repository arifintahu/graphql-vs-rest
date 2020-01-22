import checkToken from '../../lib/checkToken';

const state = {
	user : '',
	user_id : '',
	role : '',
	exist : false
};

const getters = {
	user: state => state.user,
	user_id: state => state.user_id,
	role: state => state.role,
	exist: state => state.exist
};

const actions = {};

const mutations = {
	readUser(state) {
		checkToken.checkPayload()
			.then(data => {
				state.user = data.username;
				state.role = data.role;
				state.user_id = data.id
				state.exist = true;
			})
			.catch(() => {
				state.exist = false;
			})
	}
};

export default {
	state,
	getters,
	actions,
	mutations
}
