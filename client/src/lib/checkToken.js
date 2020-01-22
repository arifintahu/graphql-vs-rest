import gql from 'graphql-tag';
import apolloClient from './apolloClient';

const checkToken = {
	checkPayload : function () {
		return new Promise ((resolve, reject) => apolloClient
			.query({
				query: gql `query { 
					userCheck {
						id
						username
						role
					}
				}`
			})
			.then(res => {
				resolve(res.data.userCheck);
			})
			.catch(err => {
				console.log(err);
				reject({});
			})
	)}
}

export default checkToken;
