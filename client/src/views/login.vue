<template>
	<div>
		<div class="modal-content">
			<div class="modal-header text-center" style="background-color:#506380;">
				<h4 class="modal-title text-center" style="font-family:'Belleza',Arial;color:beige;">Sign in
				</h4>
			</div>
			<div class="modal-body" style="margin:10px 85px;">
				<div class="md-form my-5">
					<input type="text" id="orangeForm-name" class="form-control validate " placeholder="Username" style="width: 100%;" v-model="username">
				</div>

				<div class="md-form mb-4 ">
					<input type="password" id="orangeForm-pass" class="form-control validate" placeholder="Password" style="width: 100%;" v-model="password">
				</div>
			</div>
			<div class="modal-footer d-flex justify-content-center">
				<button class="btn" style="font-family:'Belleza',Arial;background-color:#F48024;color:white;" v-on:click.prevent="login">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
	import gql from 'graphql-tag';

	export default {
		name : "Login",
		data() {
			return {
				username : '',
				password : ''
			}
		},
		methods : {
			login : function () {
				this.$apollo.query({
					query: gql`query login($form:LoginForm){
	  					userLogin(form:$form )
					}`,
					variables: {
						form : {
							username : this.username,
							password : this.password
						}
					}
				}).then((result) => {
					let token = result.data.userLogin;
					if(token == "false"){
						alert("invalid username and password");
					} else {
						localStorage.setItem("auth", token);
						window.location.replace('/');
					}
				}).catch((err) => {
					console.log(err);
				});
			}
		}
	};
</script>

<style>
</style>
