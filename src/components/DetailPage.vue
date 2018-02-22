


<template>
	<div>


	
							<!-- TOP MENU -->
			
			<div class="p2-topmenu">
			<div class="container-fluid">
				<div class="p2-topmenu-wrapper">
					<div class="p2-topmenu-logo">
					<img src="../assets/images/menu/menulogo.png" class="menulogo">
					</div>
					<div class="p2-topmenu-menu">
						<router-link to="/"><img src="../assets/images/menu/menulogin.png" class="menulogin">
	<spam class="menutext">LOGIN</spam></router-link>
	<router-link to="/detailpage/1"><img src="../assets/images/menu/menulock.png" class="menulock">
	<spam class="menutext">3 ITEMS</spam></router-link>
	<router-link to="/contactpage"><img src="../assets/images/menu/menuglass.png" class="menuglass"></router-link>
	<img src="../assets/images/menu/menumenu.png" class="menumenu">
					</div>
				</div>
			</div> <!-- Container Fluid -->
			</div>
			
			
			
			
			
			
			
			<!-- RANDOM PICTURE -->
			
			<div class="p2-randompic">
				<img src="../assets/images/randompic2/randompic2.svg" width="100%">
			</div>
			
			
			
			<div class="container-fluid">
			
			
			<!-- PRODUCT -->
			
			<div class="p2-product">
			<div class="p2-product-wrapper">
				<div class="p2-product-smallpic">
					<img src="../assets/images/product2/pr1small.svg" class="prsmall" width="100%">
					<img src="../assets/images/product2/pr2small.svg" class="prsmall" width="100%">
					<img src="../assets/images/product2/pr3small.svg" class="prsmall" width="100%">
					<img src="../assets/images/product2/pr4small.svg" class="prsmall" width="100%">
					<img src="../assets/images/product2/pr5small.svg" class="prsmall" width="100%">
				</div>
			
			
				<div class="p2-product-bigpic">
					<img src="../assets/images/product2/prbig.svg" width="100%">
				</div>
			
				<!-- <div class="p2-product-space">
				</div>
			 -->






			 <!-- PRODUCT BLACK -->
				<div class="p2-product-dis">

						<!-- H1 ELEMENT -->				
					<h1 class="p2-product-di__h1"> {{ product.title }} </h1>
						
						<!-- PRODUCT PRICE BLOCK -->
					<div class="p2-product-price">

					<!-- PRICE ELEMENT -->
						<p class="p2-product-dis__price-p"> ${{ product.price }} </p>
						<!-- PRICE ELEMENT -->
						<p class="p2-product-dis-price-pic"> <img src="../assets/images/product2/world.svg" class="world"> Free Shipping Worldwide </p>
					</div>
			
					<!-- SELECT ELEMENT -->
					<select class="p2-product-dis__button" name="color">
						<option value="volvo">Black</option>
			    		<option value="saab">Blue</option>
			    		<option value="fiat">Yellow</option>
			    		<option value="audi">Red</option>
					</select>
				
					<!-- SELECT ELEMENT -->
					<div class="p2-product-dis-button2-div">
						<select class="p2-product-dis__button2" name="size">
							<option value="volvo">Select Size</option>
			   				<option value="saab">M</option>
			   				<option value="fiat">S</option>
			   				<option value="audi">L</option>
						</select>

						<!-- BUTTON ELEMENT - MODIFIER -->
						<button class="p2-product-dis__button2--2" type="button"><img src="../assets/images/product2/button2.svg" width="20px" class="pr2bt">Size Guide
						</button>
			
					</div>
					
					<!-- BUTTON ELEMENT - MODIFIER BLUE -->
					<button class="p2-product-dis__button3--blue" type="button"><img src="../assets/images/product2/basket.svg" width="15px" class="pr2buy">ADD TO BAG
					</button>
			
					<!-- BUTTON BLOCK -->
					<div class="p2-product-dis-button4-div">
						<!-- INPUT ELEMENT -->
						<input class="p2-product-dis__button4" type="submit" value="SAVE FOR LATER">
						<!-- BUTTON ELEMENT - MODIFIER -->
						<button class="p2-product-dis__button4--2" type="button"><img src="../assets/images/product2/share.svg" width="15px" class="pr2share">Share this 			product
						</button>
					</div>
			
					
					<div class="p2-product-tabs">
						<div class="description-buttons tab">
						<a href="javascript:void(0)" class="tablinks" onclick="openCity(event, 'First')" id="defaultOpen" >Description</a>
			  			<a href="javascript:void(0)" class="tablinks" onclick="openCity(event, 'Second')">Shipping</a>
			  			<a href="javascript:void(0)" class="tablinks" onclick="openCity(event, 'Third')">Sizing</a>
			  		</div>
			
			  		<!-- <div class="description-line"> -->
			
					</div>
					
					<!-- TABS BLOCK -->
					<div class="description-text-container">
						
						<!-- TEXT ELEMENT -->
						<div id="First" class="tabcontent">
							<!-- P ELEMENT - MODIFIER -->
							<p class="description-text">
						  		{{ product.description }}
							</p>
						</div>
						
						<div id="Second" class="tabcontent">
						  <p class="description-text">
						  2Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 			anim id est laborum.
						  	</p>
						</div>
						
						<div id="Third" class="tabcontent">
						  <p class="description-text">
						  3Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 			anim id est laborum.
						  	</p>
						</div>
			
					
					</div>
			
					<!-- <script>
						function openCity(evt, cityName) {
			   			 var i, tabcontent, tablinks;
			   			 tabcontent = document.getElementsByClassName("tabcontent");
			   			 for (i = 0; i < tabcontent.length; i++) {
			   			     tabcontent[i].style.display = "none";
			   			 }
			   			 tablinks = document.getElementsByClassName("tablinks");
			   			 for (i = 0; i < tablinks.length; i++) {
			   			     tablinks[i].className = tablinks[i].className.replace(" active", "");
			   			 }
			   			 document.getElementById(cityName).style.display = "block";
			   			 evt.currentTarget.className += " active";
			
					}
			   			// Get the element with id="defaultOpen" and click on it
						document.getElementById("defaultOpen").click();
					</script> -->
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
					</div>
			
				</div>
			
			
			
			
			</div>			
			
			
			
			
			
			<!-- RANDOM TEXT -->
			
			<div class="p2-randomtext">
				<h1 class="p2-randomtext-h1"> Sharpen Your Look </h1>
				<img src="../assets/images/randomtxt/randomtxticon.svg" class="randomtxticon">
				<p class="p2-randomtext-p"> 
				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 			dolore eu fugiat nulla pariatur. 
				</p>
			</div>
			
			
			
			
			</div> <!-- Container Fluid -->
			
			
			
			<!-- BOXES -->
			
			<div class="p2-boxes">
			<div class="p2-boxes-wrapper">
			
				<div class="p2-boxes-pic">
					<img src="../assets/images/boxes/boxbigpic.svg" width="100%">
				</div>
			
				<div class="p2-boxes-random">
					<h1 class="p2-boxes-random-h1"> Extraordinary Design </h1>
					<p class="p2-boxes-random-p"> 
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
					ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
					ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
					velit esse cillum dolore eu fugiat nulla pariatur. 
					</p>
					<div class="p2-boxes-random-icons">
						<img src="../assets/images/boxes/black1.svg" class="black1">
						<img src="../assets/images/boxes/black2.svg" class="black2">
						<img src="../assets/images/boxes/black3.svg" class="black3">
					</div>
			
					<div class="p2-boxes-random-iconstxt">
						<p class="iconstxt1"> Elegant Style </p>
						<p class="iconstxt2"> Elegant Style </p>
						<p class="iconstxt3"> Elegant Style </p>
					</div>
			
					<input class="p2-boxes-random-button" type="submit" value="READ MORE">
				</div>
			
			
				<div class="p2-boxes-random p2-boxes-random2">
					<h1 class="p2-boxes-random-h1"> Extraordinary Design </h1>
					<p class="p2-boxes-random-p p2-boxes-random2-p"> 
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
					ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
					ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
					velit esse cillum dolore eu fugiat nulla pariatur. 
					</p>
					<div class="p2-boxes-random-icons">
						<img src="../assets/images/boxes/blue1.svg" class="black1">
						<img src="../assets/images/boxes/blue2.svg" class="black2">
						<img src="../assets/images/boxes/blue3.svg" class="black3">
					</div>
			
					<div class="p2-boxes-random-iconstxt">
						<p class="iconstxt1"> Elegant Style </p>
						<p class="iconstxt2"> Elegant Style </p>
						<p class="iconstxt3"> Elegant Style </p>
					</div>
			
					<input class="p2-boxes-random-button p2-boxes-random2-button" type="submit" value="READ MORE">
				</div>
			
				<div class="p2-boxes-pic2">
					<img src="../assets/images/boxes/boxbigpic2.svg" width="100%">
				</div>
			
			</div>
			</div>
			
			
			
			<!-- RANDOM PICTURE 2 -->
			
			<div class="p2-randompic2">
				<img src="../assets/images/randompic3/randompic3.svg" width="100%">
			</div>






		
	</div>
</template>




<script>
	
	import axios from 'axios';

	export default {
		name: "product-detail",
		data: function() {
			return {
				product: ''
			}
		},
		created: function() {
			this.getProductById();
		},
		watch: {
			'$route' (to, from) {
				this.getProductById();
			}
		},
		methods: {
			getProductById: function() {
				let id = this.$route.params.id;
				axios
					.get("/static/products.json")
					.then(response => {this.product = response.data.filter(product => product.id == id)[0]})
					.catch(error => { console.log(error);})
			}
		}
	}

</script>