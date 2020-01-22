import checkToken from '../../lib/checkToken';

const state = {
	user : '',
	role : '',
	exist : false
};

const getters = {
	user: state => state.user,
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
