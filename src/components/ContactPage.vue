<template>
	<div>
	


		<!-- TOP MENU -->

<div class="p2-topmenu">
<div class="container-fluid">
	<div class="p2-topmenu-wrapper">
		<div class="p2-topmenu-logo">
		<img src="../assets/images/menu/menulogo.png" class="menulogo">
		</div>
		<div class="p2-topmenu-menu p3-topmenu-menu">
			<router-link to="/"><img src="../assets/images/menu/menulogin.png" class="menulogin">
	<spam class="menutext">LOGIN</spam></router-link>
	<router-link to="/detailpage/1"><img src="../assets/images/menu/menulock.png" class="menulock p3-menulock">
	<spam class="menutext p3-menutext">3 ITEMS</spam></router-link>
	<router-link to="/contactpage"><img src="../assets/images/menu/menuglass.png" class="menuglass p3-menuglass"></router-link>
	<img src="../assets/images/menu/menumenu.png" class="menumenu p3-menuglass">
		</div>
	</div>
</div>
</div> <!-- Container Fluid -->

<div class="container-fluid">


<div class="p3-wrapper">

	<h1 class="p3-h1"> CONTACT US </h1>

	<!-- <input class="p3-inputs p3-name" type="text" name="name" placeholder="ENTER YOUR NAME">
	<br/>
	<input class="p3-inputs p3-email" type="email" name="email" placeholder="ENTER YOUR EMAIL">
	<br/>
	<input class="p3-inputs p3-subject" type="text" name="subject" placeholder="ENTER THE SUBJECT">
	<br/>
	<textarea cols="50" rows="5" class="p3-inputs p3-textarea" placeholder="ENTER YOUR MESSAGE"></textarea>
	<br/>
	<input class="p3-inputs p3-submit" type="submit" value="SEND">
	<br/> -->



<div>
	<form @submit.prevent="submitForm" novalidate v-if="!isSubmitted">
		<div>
			<label for="firstname"></label>
			<input class="p3-inputs p3-name" type="text" v-model.lazy="form.firstname" id="firstname" v-validate="'required'" name="firstname" placeholder="ENTER YOUR NAME">
			<span v-show="errors.has('firstname')" class="help is-danger"> {{ errors.first('firstname') }} </span>
		</div>
		<div>
			<label for="email"></label>
			<input class="p3-inputs p3-email" type="text" v-model.lazy="form.email" id="email" v-validate="'required|email'" name="email" placeholder="ENTER YOUR EMAIL">
			<span v-show="errors.has('email')" class="help is-danger"> {{ errors.first('email') }} </span>
		</div>
		<button class="p3-inputs p3-submit" type="submit" :disabled="errors.any()">Submit</button>
	</form>
	<div v-else>
		Thanks
	</div>
</div>


</div>








</div> <!-- Container Fluid -->







	</div>
</template>


<script>
	
export default {
	name: 'my-form',
	data: function() {
		return {
			form: {
				firstname: '',
				email: ''
			},
			isSubmitted: false
		}
	},
	methods: {
		submitForm: function() {
			this.isSubmitted= true;
			this.form = null;
		}
	}
}


</script>