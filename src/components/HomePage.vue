


</script>

<template>
	<div>

		
		<div class="toptop">

<!-- SLIDE -->







<div class="toptop">

<!-- SLIDE -->



<!-- TOP HEADER -->

<div class="toptop-wrapper">
	<img src="../assets/images/menu/menubg.svg" width="100%" class="menubg">

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

</div>



<div class="container-fluid">



<!-- THREE PICTURES -->

<!-- <script>
function hoverbuble(element) {
    element.setAttribute('src', '../assets/images/threepictures/bublehover.png');
}
function unhoverbuble(element) {
    element.setAttribute('src', '../assets/images/threepictures/buble.png');
}
  

</script> -->


<div class="three-pictures">
<div class="three-pictures-wrapper">
	<div class="tp1-div"><router-link to="/collectionpage"><img src="../assets/images/threepictures/picmen.svg" width="100%" class="tp1"></router-link></div>
	<div class="tpmy-div">
		<div class="tpmy-div-inside">
			<img src="../assets/images/threepictures/buble.png" class="threepictures-buble" onmouseover="hoverbuble(this);" onmouseout="unhoverbuble(this);">
			<h1 class="h1-tpmy-div-inside"> GET OUR NEWSLETTER </h1>
			<h2 class="h2-tpmy-div-inside"> JOIN OUR MAILLIST TO RECEIVE </h2>
			<h2 class="h2-tpmy-div-inside"> SPECIAL DISCOUNTS </h2>
			<input class="tpmy-div-inside-input" type="email" name="email" placeholder="ENTER YOUR EMAIL">
			<br/>
			<input class="tpmy-div-inside-button" type="submit" value="SUBSCRIBE">
		</div>
	</div>
	<div class="tp2-div"><router-link to="/collectionpage"><img src="../assets/images/threepictures/picwomen.svg" width="100%" class="tp2"></router-link></div>
</div>
</div>


</div> <!-- Container Fluid -->


<!-- LOGOS -->

<div class="logos">
<div class="container-fluid">

	<div class="logos-title">
		<h2 class="no-background"><span> TOP BRANDS </span></h2>
	</div>

	<div class="logos-pictures">
		<img src="../assets/images/logos/logos1.png" class="logos-logos1">
		<img src="../assets/images/logos/logos2.png" class="logos-logos2">
		<img src="../assets/images/logos/logos3.png" class="logos-logos3">
		<img src="../assets/images/logos/logos4.png" class="logos-logos4">
		<img src="../assets/images/logos/logos5.png" class="logos-logos5">
	</div>

	<div class="logos-bub">
		<img src="../assets/images/logos/logosbub.png" class="logos-logosbub">
	</div>

</div> <!-- Container Fluid -->
</div>




<div class="cleaner"></div>

<div class="container-fluid">










<!-- THREE ANNOYING PICTURES -->

<div class="three-pictures-two">
<div class="tpt-wrapper">
	<div class="tpt1-div"><img src="../assets/images/threepicturestwo/picture1.svg" width="100%" class="tpt1"></div>
	<div class="tpt2-div"><img src="../assets/images/threepicturestwo/picture2.svg" width="100%" class="tpt2"></div>
	<div class="tpt3-div"><img src="../assets/images/threepicturestwo/picture3.svg" width="100%" class="tpt3"></div>
</div>
</div>




<!-- PRODUCTS -->

<div class="products">

<div class="buttons-three">
	<a class="buttons-three-a" href="#"> NEW ARRIVALS </a>
	<a class="buttons-three-a" href="#"> TOP SELLERS </a>
	<a class="buttons-three-a" href="#"> FEATURED </a>
</div>

<div id="app-product" class="product-wrapper">


	<!-- <p v-for="product in products" :key="product.id"> {{ product.title }} asd {{ product.price }} {{ product.description }} </p> -->




	<div v-for="product in products" :key="product.id"  class="product product1">
		<div class="prpic pr1pic"> <router-link :to="/detailpage/ + product.id">  <img src="../assets/images/product/pr1.svg" width="100%" class="pr1"> </router-link> </div>
		<div class="prtxt pr1txt"><h1 class="prh1 pr1h1"><!-- Pull&ampBear Crochet Back Playsuit --> {{ product.title }} </h1></div>
		<div class="prprice pr1price">
			<h1 class="prpriceh1 pr1priceh1">$<!-- 47.10 --> {{ product.price }} </h1> 
			<button class="prbutton pr1button" type="button"><img src="../assets/images/product/prbuy.svg" width="8%" class="prbuy">ADD TO BAG
			</button>
		</div>
	</div>


	<!-- <div class="product product2">
		<div class="prpic pr2pic"><img src="../assets/images/product/pr1.svg" width="100%" class="pr1"></div>
		<div class="prtxt pr2txt"><h1 class="prh1 pr2h1">Pull&ampBear Crochet Back Playsuit</h1></div>
		<div class="prprice pr2price">
			<h1 class="prpriceh1 pr2priceh1">$47.10</h1> 
			<button class="prbutton pr2button" type="button"><img src="../assets/images/product/prbuy.svg" width="8%" class="prbuy">ADD TO BAG
			</button>
		</div>
	</div>


	<div class="product product3">
		<div class="prpic pr3pic"><img src="../assets/images/product/pr1.svg" width="100%" class="pr1"></div>
		<div class="prtxt pr3txt"><h1 class="prh1 pr3h1">Pull&ampBear Crochet Back Playsuit</h1></div>
		<div class="prprice pr3price">
			<h1 class="prpriceh1 pr3priceh1">$47.10</h1> 
			<button class="prbutton pr3button" type="button"><img src="../assets/images/product/prbuy.svg" width="8%" class="prbuy">ADD TO BAG
			</button>
		</div>
	</div>


	<div class="product product4">
		<div class="prpic pr4pic"><img src="../assets/images/product/pr1.svg" width="100%" class="pr1"></div>
		<div class="prtxt pr4txt"><h1 class="prh1 pr4h1">Pull&ampBear Crochet Back Playsuit</h1></div>
		<div class="prprice pr4price">
			<h1 class="prpriceh1 pr4priceh1">$47.10</h1> 
			<button class="prbutton pr4button" type="button"><img src="../assets/images/product/prbuy.svg" width="8%" class="prbuy">ADD TO BAG
			</button>
		</div>
	</div> -->

</div>

</div>



</div> <!-- Container Fluid -->



<!-- RANDOM PICTURE -->

<div class="random-picture">
<img src="../assets/images/randompic/randompic.svg" width="100%" class="randompic">
</div>



<!-- COMMENTS -->

<div class="comments">
<div class="container-fluid">

<div class="comments-wrapper">

	<div>
		<agile>
            <div class="slide">
                <div class="comment-face">
		<img src="../assets/images/comment/commentface.svg" class="commentface">
	</div>

	<h1 class="comment-h1"> Jane Smith </h1>

	<p class="comment-p"> 
		Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
		the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
		language ocean.
	</p>
            </div>
            
            
            <div class="slide">
               <div class="comment-face">
		<img src="../assets/images/comment/commentface.svg" class="commentface">
	</div>

	<h1 class="comment-h1"> Jane Smith </h1>

	<p class="comment-p"> 
		2222Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
		the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
		language ocean.
	</p>
            </div>

            <div class="slide">
               <div class="comment-face">
		<img src="../assets/images/comment/commentface.svg" class="commentface">
	</div>

	<h1 class="comment-h1"> Jane Smith </h1>

	<p class="comment-p"> 
		3333Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
		the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
		language ocean.
	</p>
            </div>
        </agile>
	</div>


	

</div>
</div>



</div> <!-- Container Fluid -->



<!-- SOCIAL -->



<!-- FOOTER -->








	</div>
</template>


<script>
	

	import axios from 'axios';

	export default {
		name: "product-list",
		data: function() {
			return {
				products: []
			};
		},
		created: function() {
			this.getProducts()
		},
		methods: {
			getProducts: function() {
				axios
				.get("/static/products.json")
				.then(response => {this.products = response.data})
				.catch(error => {
					console.log(error);
				});
			}
		}
	};



</script>

