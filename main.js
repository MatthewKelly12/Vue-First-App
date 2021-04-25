Vue.component('product',{
	props: {
		premium: {
			type: Boolean,
			required: true
		}
	},
	template:
	`
	<div class='product'>
	<div class='product-image'>
		<img v-bind:src="image" >
	</div>
	<div class='product-info'>
		<h1>{{ title }}</h1>
		<p>{{ description }}</p>
		<ul>
			<li v-for="size in sizes">{{size}}</li>
		</ul>
		<p v-if="inStock">In Stock</p>
		<p v-else >Out of Stock</p>
		<span v-if="onSale">On Sale! $10.99 Regular $12.99</span>
		<p> Shipping: {{ shipping }}</p>
		<div
			v-for="(variant,index) in variants"
			:key="variant.Id"
			class="color-box"
			:style="{backgroundColor: variant.color}"
			@click="updateProduct(index)"
		>
		</div>
		<button
			v-on:click="addToCart"
			v-bind:class="{ disabledButton: !inStock }"
			:disabled="!inStock"
		>
			Add To Cart
		</button>

		</div>
	</div>
	`,
	data(){
		return {
			brand: 'Mattazon',
			product: 'Socks',
			description: '100% Cotton American Made',
			selectedVariant: 0,
			sizes: ["small","medium","large"],
			variants: [
				{
					variantId: 1,
					color: 'Green',
					variantImage: './greenSocks.jpeg',
					onSale: false,
					quantity: 10
				},
				{
					variantId: 2,
					color: '#003568',
					variantImage: './blueSocks.jpeg',
					onSale: true,
					quantity: 0
				}
			],
			cart: 0
		}
	},
	methods: {
		addToCart: function() {
			this.cart += 1
		},
		updateProduct: function(index) {
			this.selectedVariant = index
		}
	},
	computed: {
		title(){
			return this.brand + ' ' + this.product
		},
		image(){
			return this.variants[this.selectedVariant].variantImage
		},
		inStock(){
			return this.variants[this.selectedVariant].quantity
		},
		onSale(){
			return this.variants[this.selectedVariant].onSale
		},
		shipping(){
			if (this.premium) {
				return 'Free'
			}
			else return '2.99'
		}
	}
})



var vm = new Vue({
	el: '#app',
	data: {
		premium: false
	}
})


// methods() {
// 	return
	// addToCart: function() {
	// 	this.cart += 1
	// },
	// updateProduct: function(index) {
	// 	this.selectedVariant = index
	// }
// }

// computed() {
// 	title(){
// 		return this.brand + ' ' + this.product
// 	},
// 	image(){
// 		return this.variants[this.selectedVariant].variantImage
// 	},
// 	inStock(){
// 		return this.variants[this.selectedVariant].quantity
// 	},
// 	onSale(){
// 		return this.variants[this.selectedVariant].onSale
// 	}
// }


