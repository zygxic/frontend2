<template>
	<div>
	


		<!-- TOP MENU -->

<div class="toptop">

<!-- SLIDE -->



<!-- TOP HEADER -->

<div class="toptop-wrapper">
	<img src="../assets/images/collection/header.png" width="100%" class="menubg">

<div class="container-fluid">
<div class="top-header">

<div class="logo"> 
	<img src="../assets/images/menu/menulogo.png" class="menulogo">
</div>



<div class="menu"> 
	<router-link to="/"><img src="../assets/images/menu/menulogin.png" class="menulogin">
	<spam class="menutext">LOGIN</spam></router-link>
	<router-link to="/detailpage/1"><img src="../assets/images/menu/menulock.png" class="menulock">
	<spam class="menutext">3 ITEMS</spam></router-link>
	<router-link to="/contactpage"><img src="../assets/images/menu/menuglass.png" class="menuglass"></router-link>
	<img src="../assets/images/menu/menumenu.png" class="menumenu">
</div>


</div>


</div>


</div> <!-- Container Fluid -->
</div>



<!-- MENU -->

<div class="container-fluid">

<div class="buttons-collection">
	<a class="buttons-collection-a" href="#"> New collection (1-32 of 58) </a>
	<a class="buttons-collection-a" href="#"> SORT BY </a>
	<a class="buttons-collection-a" href="#"> FEATURES  </a>
	<a class="buttons-collection-a" href="#"> SIZE </a>
	<a class="buttons-collection-a" href="#"> COLOUR </a>
	<a class="buttons-collection-a" href="#"> PRICE </a>
</div>




<!-- PRODUCTS -->

<div id="app-collection" class="product-wrapper product-wrapper-collection">


	<!-- <p v-for="product in products" :key="product.id"> {{ product.title }} asd {{ product.price }} {{ product.description }} </p> -->




	<div v-for="product in collection" :key="product.id"  class="product product1">
		<div class="prpic pr1pic"> <router-link :to="/detailpage/ + product.id">  <img src="../assets/images/product/pr1.svg" width="100%" class="pr1"> </router-link> </div>
		<div class="prtxt pr1txt"><h1 class="prh1 pr1h1"><!-- Pull&ampBear Crochet Back Playsuit --> {{ product.title }} </h1></div>
		<div class="prprice pr1price">
			<h1 class="prpriceh1 pr1priceh1">$<!-- 47.10 --> {{ product.price }} </h1> 
			<button class="prbutton pr1button" type="button"><img src="../assets/images/product/prbuy.svg" width="8%" class="prbuy">ADD TO BAG
			</button>
		</div>
	</div>









</div>


</div> <!-- Container Fluid -->

<!-- BLUE DIV -->

<div class="blue-div">

<input class="tpmy-div-inside-input tpmy-div-inside-input-collection" type="email" name="email" placeholder="YOUR EMAIL">
<input class="tpmy-div-inside-button tpmy-div-inside-button-collection" type="submit" value="SUBSCRIBE TO OUR NEWSLETTER">


</div>








	</div>
</template>






<script>
	

	import axios from 'axios';

	export default {
		name: "collection-list",
		data: function() {
			return {
				collection: []
			};
		},
		created: function() {
			this.getCollection()
		},
		methods: {
			getCollection: function() {
				axios
				.get("/static/collection.json")
				.then(response => {this.collection = response.data})
				.catch(error => {
					console.log(error);
				});
			}
		}
	};


</script>