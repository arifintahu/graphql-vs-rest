<template>
	<div>
		<button class="btn btn-danger" v-on:click.prevent="logout">Logout</button>
		<div>
			<h2 class="text-center">Create Content</h2>
			<div class="text-center">
				<input v-model="title" type="text" placeholder="title">
				<br>
				<input v-model="body" type="text" placeholder="body">
			</div>
			<div class="row">
				<div class="col-md-6 text-center">
					<h3>GraphQL</h3>
					<h5 v-if="content_createContentG">result : {{content_createContentG}}</h5>
					<button class="btn btn-primary" v-on:click.prevent="createContentG">Execute</button>
				</div>
				<div class="col-md-6 text-center">
					<h3>REST</h3>
					<h5 v-if="content_createContentR">result : {{content_createContentR}}</h5>
					<button class="btn btn-primary" v-on:click.prevent="createContentR">Execute</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import gql from 'graphql-tag';

	export default {
		name: "Main",
		data() {
				return {
					content_createContentG : '',
					content_createContentR : '',
					title : '',
					body : '',
				}
			},
		methods : {
			logout: function() {
				localStorage.removeItem('auth');
				this.$router.push({ name : 'login' });
			},
			createContentG: function() {
				this.$apollo.mutate({
						mutation: gql`mutation contentCreate($form: ContentForm ){
							contentCreate(form : $form){
								id
								user_id
								title
								body
								createdAt
								updatedAt
							}
							}`,
						variables: {
							form: {
								user_id: this.$store.getters.user_id,
								title: this.title,
								body: this.body
							}
						}
					}).then((result) => {
						this.content_createContentG = JSON.stringify(result.data.contentCreate)
					}).catch((err) => {
						console.log(err);
					});
			},
			createContentR: function() {
				fetch('http://localhost:3000/content', {
					method : 'POST',
					headers : {
						'Content-type' : 'application/json',
						token : localStorage.getItem('auth')
					},
					body : JSON.stringify({
								user_id: this.$store.getters.user_id,
								title: this.title,
								body: this.body
							})
				})
				.then((response) => {
					return response.json();
				})
				.then((myJson) => {
					this.content_createContentR = JSON.stringify(myJson.result);
				})
				.catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

