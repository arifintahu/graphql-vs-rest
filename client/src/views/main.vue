<template>
	<div>
		<div>
			<h2 class="text-center">Create Content</h2>
			<div class="row">
				<div class="col-md-6 text-center">
					<h3>GraphQL</h3>
					<h4>time {{time_createContentG}}</h4>
					<button class="btn btn-primary" v-on:click.prevent="createContentG">Execute</button>
				</div>
				<div class="col-md-6 text-center">
					<h3>REST</h3>
					<h4>time {{time_createContentR}}</h4>
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
					time_createContentG : '',
					time_createContentR : ''
				}
			},
		methods : {
			createContentG: function() {
				this.$apollo.mutate({
						mutation: gql`mutation contentCreate($form: ContentForm ){
							contentCreate(form : $form)
							}`,
						variables: {
							form: {
								user_id: 1,
								title: "ABCDE",
								body: "this is body"
							}
						}
					}).then((result) => {
						console.log(result);
					}).catch((err) => {
						console.log(err);
					});
			},
			createContentR: function() {
				console.log('rest');
				fetch('http://localhost:3000/content', {
					method : 'POST',
					headers : {
						'Content-type' : 'application/json',
						token : localStorage.getItem('auth')
					},
					body : JSON.stringify({
								user_id: 1,
								title: "ABCDE",
								body: "this is body"
							})
				})
				.then((response) => {
					return response.json();
				})
				.then((myJson) => {
					console.log(myJson);
				})
				.catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

